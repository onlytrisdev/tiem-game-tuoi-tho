window.__require = function e(n, t, o) {
    function i(y, a) {
        if (!t[y]) {
            if (!n[y]) {
                var c = y.split("/");
                if (c = c[c.length - 1], !n[c]) {
                    var r = "function" == typeof __require && __require;
                    if (!a && r) return r(c, !0);
                    if (m) return m(c, !0);
                    throw new Error("Cannot find module '" + y + "'")
                }
            }
            var s = t[y] = {
                exports: {}
            };
            n[y][0].call(s.exports, function(e) {
                return i(n[y][1][e] || e)
            }, s, s.exports, e, n, t, o)
        }
        return t[y].exports
    }
    for (var m = "function" == typeof __require && __require, y = 0; y < o.length; y++) i(o[y]);
    return i
}({
    AppStart: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "b77bcGXp9BAFIY4AVrn/5hN", "AppStart");
        e("PolySDK");

        function o() {
            cc.vv = {};
            var n = e("config");
            cc.vv.CG = n;
            var t = e("Tool");
            cc.vv.tool = t;
            var o = cc.sys.localStorage.getItem("pp");
            if (o && "null" != o && 0 != JSON.parse(o).GuideSate) cc.vv.pp = {}, cc.vv.PP = JSON.parse(o);
            else {
                var i = e("carProperty");
                cc.vv.PP = i
            }
            var m = e("CarsManager");
            cc.vv.CarsMgr = new m;
            var y = e("UIMgr");
            cc.vv.UIMgr = new y;
            var a = e("Utils");
            cc.vv.utils = new a;
            var c = e("AudioMgr");
            cc.vv.audioMgr = new c;
            var r = e("receiveReward");
            cc.vv.rr = new r;
            var s = e("Formula");
            cc.vv.formula = new s;
            var d = e("wxAPI");
            cc.vv.wxAPI = new d;
            var l = e("wx_APIDao");
            cc.vv.DAO = {
                wx_API: new l
            }
        }
        var i = e("promptLayer"),
            m = e("promptboxLayer"),
            y = e("bulletLayer");
        cc.Class({
            extends: cc.Component,
            properties: {
                promptLayerjs: {
                    type: i,
                    default: null,
                    displayName: "\u4e8c\u7ea7\u5f39\u6846script",
                    tooltip: "\u4e8c\u7ea7\u5f39\u6846script"
                },
                promptboxLayerjs: {
                    type: m,
                    default: null,
                    displayName: "\u63d0\u793a\u6846script",
                    tooltip: "\u63d0\u793a\u6846script"
                },
                bulletLayerjs: {
                    type: y,
                    default: null,
                    displayName: "\u63d0\u793a\u6846script",
                    tooltip: "\u63d0\u793a\u6846script"
                },
                startGame: {
                    type: cc.Node,
                    default: null,
                    displayName: "\u5f00\u59cb\u754c\u9762",
                    tooltip: "\u5f00\u59cb\u754c\u9762"
                },
                mainGame: {
                    type: cc.Node,
                    default: null,
                    displayName: "\u4e3b\u754c\u9762",
                    tooltip: "\u4e3b\u754c\u9762"
                },
                signIn: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u7b7e\u5230",
                    tooltip: "\u7b7e\u5230"
                },
                btn: cc.Node,
                open: cc.Node,
                isCanWatchAds: !0
            },
            onLoad: function() {
                o(), cc.LieYingSDK.PolySDK.LoginAuth.login(), cc.LieYingSDK.PolySDK.BannerAd.createBannerAd(), cc.LieYingSDK.PolySDK.BannerAd.hideBannerAd(), cc.vv.CG.isCanWatchAds = this.isCanWatchAds, cc.vv.prompt = this.promptLayerjs, cc.vv.bullet = this.bulletLayerjs, cc.vv.promptbox = this.promptboxLayerjs, cc.vv.utils.backstageProcess("EVENT_HIDE", this.hideCallback.bind(this)), cc.vv.utils.backstageProcess("EVENT_SHOW", this.showCallback.bind(this)), cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.first_level, cc.vv.wxAPI.setAllInIt(), this.InitCarProprtty(), cc.vv.PP.GuideSate > 0 && this.offline_Revenue()
            },
            InitCarProprtty: function() {
                cc.vv.PP.GuideSate = Number(cc.vv.PP.GuideSate), cc.vv.PP.glod = Number(cc.vv.PP.glod), cc.vv.PP.diamond = Number(cc.vv.PP.diamond), cc.vv.PP.currentcarMaxGrade = Number(cc.vv.PP.currentcarMaxGrade), cc.vv.PP.currentcarMaxGrade = Number(cc.vv.PP.currentcarMaxGrade), cc.vv.PP.currentbuycarMAxGrade = Number(cc.vv.PP.currentbuycarMAxGrade), cc.vv.PP.currentbuycarSuitable = Number(cc.vv.PP.currentbuycarSuitable), cc.vv.PP.critNum = Number(cc.vv.PP.critNum), cc.vv.PP.carouselCouponNum = Number(cc.vv.PP.carouselCouponNum), cc.vv.PP.remaining_crystalHP = Number(cc.vv.PP.remaining_crystalHP), cc.vv.PP.yieldRatio = Number(cc.vv.PP.yieldRatio), cc.vv.PP.crystalReplyTime = Number(cc.vv.PP.crystalReplyTime), cc.vv.PP.cur_round = Number(cc.vv.PP.cur_round), cc.vv.PP.levelWave = Number(cc.vv.PP.levelWave)
            },
            Init: function() {
                var e = cc.sys.localStorage.getItem("T4GamePlatuuid");
                e && "null" != e ? (cc.vv.CG.wxUserInit.uuid = e, console.log("Đã đăng nhập", cc.sys.localStorage.getItem("T4GamePlatuuid")), this.wxGetSignInUI()) : this.wxPlatLogin(), cc.vv.wxAPI.updateManage(this.isStartGame.bind(this), this.btn), this._signInjs = this.signIn.getComponent("signIn")
            },
            wxPlatLogin: function() {
                var e = this,
                    n = wx.getLaunchOptionsSync(),
                    t = {
                        appId: cc.vv.CG.wxInIt.appID,
                        share_uuid: n.query.uuid || ""
                    };
                cc.vv.DAO.wx_API.wxPlatLogin(t, function(t) {
                    101 == t.code ? (console.log("\u5206\u4eab\u8005ID:", n.query.uuid), cc.sys.localStorage.setItem("T4GamePlatuuid", t.uuid), cc.vv.CG.wxUserInit.uuid = t.uuid, e.wxGetSignInUI()) : console.log(t.data)
                })
            },
            wxGetSignInUI: function() {
                console.log("WXGetSigninUI", cc.vv.CG.UserInit.uuid);
                var e = this,
                    n = {
                        app_id: cc.vv.CG.wxInIt.appID,
                        uuid: cc.vv.CG.wxUserInit.uuid
                    };
                cc.vv.DAO.wx_API.wxGetSignInUI(n, function(n) {
                    101 == n.code && (cc.vv.CG.signinData = n, e._signInjs.day_reward = cc.vv.CG.signinData.index, e._signInjs.setInItDayNum(cc.vv.CG.signinData.index, cc.vv.CG.signinData.state))
                })
            },
            isStartGame: function() {
                cc.vv.bullet.setpresentationPage(cc.vv.CG.PresentationName.gift_Package)
            },
            hideCallback: function() {
                var e = new Date;
                cc.sys.localStorage.setItem("GameEndTime", e), cc.log("JSON.stringify(cc.vv.PP)" + JSON.stringify(cc.vv.PP)), cc.sys.localStorage.setItem("pp", JSON.stringify(cc.vv.PP))
            },
            showCallback: function() {
                var e = cc.sys.localStorage.getItem("pp");
                "" != e && null != e && void 0 != e && (cc.vv.PP.gold = {}, cc.vv.PP = JSON.parse(e), cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.first_level, this.offline_Revenue())
            },
            offline_Revenue: function() {
                if (0 != cc.vv.PP.currentperSecondIncome) {
                    var e = cc.sys.localStorage.getItem("GameEndTime"),
                        n = cc.vv.tool.GetOfflineTime(e);
                    this.setCrystalReply(n);
                    var t = 0,
                        o = 0;
                    n.hours < 2 && (n.minutes > 1 || n.seconds > 20) ? (o = 3600 * n.hours + 60 * n.minutes + n.seconds, t = 2 * Math.round(cc.vv.CarsMgr.getEarningsperSecond() * o), cc.log("\u79bb\u7ebf\u5956\u52b1")) : n.hours >= 2 && (o = 3600, t = 2 * Math.round(cc.vv.CarsMgr.getEarningsperSecond() * o), cc.log("\u7ed9\u4e24\u4e2a\u5c0f\u65f6\u7684\u6536\u76ca")), t > 0 && this.Offline_RevenueClicked(t)
                }
            },
            setCrystalReply: function(e) {
                if (cc.vv.PP.remaining_crystalHP != cc.vv.CG.MaxcrystalHP)
                    if (e.days > 0 || e.hours > 0 || e.minutes > 33) cc.vv.PP.remaining_crystalHP = cc.vv.CG.MaxcrystalHP, cc.vv.PP.crystalReplyTime = cc.vv.CG.Crystalcountdown.totalTime;
                    else {
                        var n = 60 * e.minutes + e.seconds,
                            t = Math.floor(Number(n) / cc.vv.CG.Crystalcountdown.totalTime);
                        if (t > 0) cc.vv.PP.remaining_crystalHP = cc.vv.PP.remaining_crystalHP + t, cc.vv.PP.remaining_crystalHP >= cc.vv.CG.MaxcrystalHP ? (cc.vv.PP.remaining_crystalHP = cc.vv.CG.MaxcrystalHP, cc.vv.PP.crystalReplyTime = cc.vv.CG.Crystalcountdown.totalTime) : cc.vv.PP.crystalReplyTime = n - t * cc.vv.CG.Crystalcountdown.totalTime;
                        else {
                            var o = cc.vv.CG.Crystalcountdown.totalTime - n + cc.vv.PP.crystalReplyTime;
                            o > cc.vv.CG.Crystalcountdown.totalTime ? (cc.vv.PP.remaining_crystalHP = cc.vv.PP.remaining_crystalHP + 1, cc.vv.PP.crystalReplyTime = o - cc.vv.CG.Crystalcountdown.totalTime, cc.vv.PP.remaining_crystalHP >= cc.vv.CG.MaxcrystalHP && (cc.vv.PP.remaining_crystalHP = cc.vv.CG.MaxcrystalHP, cc.vv.PP.crystalReplyTime = cc.vv.CG.Crystalcountdown.totalTime)) : (o = cc.vv.CG.Crystalcountdown.totalTime) ? (cc.vv.PP.remaining_crystalHP = cc.vv.PP.remaining_crystalHP + 1, cc.vv.PP.crystalReplyTime = cc.vv.CG.Crystalcountdown.totalTime, cc.vv.PP.remaining_crystalHP >= cc.vv.CG.MaxcrystalHP && (cc.vv.PP.remaining_crystalHP = cc.vv.CG.MaxcrystalHP, cc.vv.PP.crystalReplyTime = cc.vv.CG.Crystalcountdown.totalTime)) : (cc.vv.PP.crystalReplyTime = o, cc.vv.PP.remaining_crystalHP >= cc.vv.CG.MaxcrystalHP && (cc.vv.PP.remaining_crystalHP = cc.vv.CG.MaxcrystalHP, cc.vv.PP.crystalReplyTime = cc.vv.CG.Crystalcountdown.totalTime))
                        }
                    }
            },
            Offline_RevenueClicked: function(e) {
                var n = {
                    ArticleAtlas: cc.vv.prompt.popupspriteAtlas,
                    ArticlespriteFrame: cc.vv.CG.popupSprList.gold,
                    input_text: cc.vv.CG.Text.Receive_award,
                    incomevalue: "+" + cc.vv.tool.bytesToSize(e),
                    Clicked: cc.vv.rr.receivegoldReward,
                    rewardNum: e,
                    Clicked1: null,
                    isVideo_reward: !0,
                    type: "Offline"
                };
                cc.vv.rr.Video_reward(this, "Offline_Revenue", "", "gold", "shuangbeilingqu", "+" + cc.vv.tool.bytesToSize(e / 2), cc.vv.rr.watchAds, cc.vv.rr.doubleclosedPopup, n)
            }
        }), cc._RF.pop()
    }, {
        AudioMgr: "AudioMgr",
        CarsManager: "CarsManager",
        Formula: "Formula",
        PolySDK: "PolySDK",
        Tool: "Tool",
        UIMgr: "UIMgr",
        Utils: "Utils",
        bulletLayer: "bulletLayer",
        carProperty: "carProperty",
        config: "config",
        promptLayer: "promptLayer",
        promptboxLayer: "promptboxLayer",
        receiveReward: "receiveReward",
        wxAPI: "wxAPI",
        wx_APIDao: "wx_APIDao"
    }],
    AudioMgr: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "994f4dMQBBNsqbXMHcYTG2h", "AudioMgr"), cc.Class({
            extends: cc.Component,
            properties: {
                bgmVolume: 1,
                sfxVolume: 1,
                bgmAudioID: -1,
                hallAudioID: null,
                roomAudioID: null
            },
            getUrl: function(e) {
                return cc.url.raw("resources/music/" + e)
            },
            pause: function() {
                cc.audioEngine.pause(this.roomAudioID)
            },
            resume: function() {
                cc.audioEngine.resume(this.roomAudioID)
            },
            playSFX: function(e) {
                var n = this.getUrl(e);
                if (this.sfxVolume > 0) cc.audioEngine.play(n, !1, this.sfxVolume)
            },
            setSFXVolume: function(e) {
                this.sfxVolume != e && (cc.sys.localStorage.setItem("sfxVolume", e), this.sfxVolume = e)
            },
            setBGMVolume: function(e, n) {
                this.bgmAudioID >= 0 && (e > 0 ? cc.audioEngine.resume(this.bgmAudioID) : cc.audioEngine.pause(this.bgmAudioID)), (this.bgmVolume != e || n) && (cc.sys.localStorage.setItem("bgmVolume", e), this.bgmVolume = e, cc.audioEngine.setVolume(this.bgmAudioID, e))
            },
            pauseAll: function() {
                cc.audioEngine.pauseAll()
            },
            resumeAll: function() {
                cc.audioEngine.resumeAll()
            }
        }), cc._RF.pop()
    }, {}],
    1: [function(e, n, t) {
        var o = e("util/"),
            i = Array.prototype.slice,
            m = Object.prototype.hasOwnProperty,
            y = n.exports = d;

        function a(e, n) {
            return o.isUndefined(n) ? "" + n : o.isNumber(n) && !isFinite(n) ? n.toString() : o.isFunction(n) || o.isRegExp(n) ? n.toString() : n
        }

        function c(e, n) {
            return o.isString(e) ? e.length < n ? e : e.slice(0, n) : e
        }

        function r(e) {
            return c(JSON.stringify(e.actual, a), 128) + " " + e.operator + " " + c(JSON.stringify(e.expected, a), 128)
        }

        function s(e, n, t, o, i) {
            throw new y.AssertionError({
                message: t,
                actual: e,
                expected: n,
                operator: o,
                stackStartFunction: i
            })
        }

        function d(e, n) {
            e || s(e, !0, n, "==", y.ok)
        }

        function l(e, n) {
            if (e === n) return !0;
            if (o.isBuffer(e) && o.isBuffer(n)) {
                if (e.length != n.length) return !1;
                for (var t = 0; t < e.length; t++)
                    if (e[t] !== n[t]) return !1;
                return !0
            }
            return o.isDate(e) && o.isDate(n) ? e.getTime() === n.getTime() : o.isRegExp(e) && o.isRegExp(n) ? e.source === n.source && e.global === n.global && e.multiline === n.multiline && e.lastIndex === n.lastIndex && e.ignoreCase === n.ignoreCase : o.isObject(e) || o.isObject(n) ? v(e, n) : e == n
        }

        function u(e) {
            return "[object Arguments]" == Object.prototype.toString.call(e)
        }

        function v(e, n) {
            if (o.isNullOrUndefined(e) || o.isNullOrUndefined(n)) return !1;
            if (e.prototype !== n.prototype) return !1;
            if (o.isPrimitive(e) || o.isPrimitive(n)) return e === n;
            var t = u(e),
                m = u(n);
            if (t && !m || !t && m) return !1;
            if (t) return l(e = i.call(e), n = i.call(n));
            var y, a, c = h(e),
                r = h(n);
            if (c.length != r.length) return !1;
            for (c.sort(), r.sort(), a = c.length - 1; a >= 0; a--)
                if (c[a] != r[a]) return !1;
            for (a = c.length - 1; a >= 0; a--)
                if (!l(e[y = c[a]], n[y])) return !1;
            return !0
        }

        function _(e, n) {
            return !(!e || !n) && ("[object RegExp]" == Object.prototype.toString.call(n) ? n.test(e) : e instanceof n || !0 === n.call({}, e))
        }

        function p(e, n, t, i) {
            var m;
            o.isString(t) && (i = t, t = null);
            try {
                n()
            } catch (e) {
                m = e
            }
            if (i = (t && t.name ? " (" + t.name + ")." : ".") + (i ? " " + i : "."), e && !m && s(m, t, "Missing expected exception" + i), !e && _(m, t) && s(m, t, "Got unwanted exception" + i), e && m && t && !_(m, t) || !e && m) throw m
        }
        y.AssertionError = function(e) {
            this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = r(this), this.generatedMessage = !0);
            var n = e.stackStartFunction || s;
            if (Error.captureStackTrace) Error.captureStackTrace(this, n);
            else {
                var t = new Error;
                if (t.stack) {
                    var o = t.stack,
                        i = n.name,
                        m = o.indexOf("\n" + i);
                    if (m >= 0) {
                        var y = o.indexOf("\n", m + 1);
                        o = o.substring(y + 1)
                    }
                    this.stack = o
                }
            }
        }, o.inherits(y.AssertionError, Error), y.fail = s, y.ok = d, y.equal = function(e, n, t) {
            e != n && s(e, n, t, "==", y.equal)
        }, y.notEqual = function(e, n, t) {
            e == n && s(e, n, t, "!=", y.notEqual)
        }, y.deepEqual = function(e, n, t) {
            l(e, n) || s(e, n, t, "deepEqual", y.deepEqual)
        }, y.notDeepEqual = function(e, n, t) {
            l(e, n) && s(e, n, t, "notDeepEqual", y.notDeepEqual)
        }, y.strictEqual = function(e, n, t) {
            e !== n && s(e, n, t, "===", y.strictEqual)
        }, y.notStrictEqual = function(e, n, t) {
            e === n && s(e, n, t, "!==", y.notStrictEqual)
        }, y.throws = function(e, n, t) {
            p.apply(this, [!0].concat(i.call(arguments)))
        }, y.doesNotThrow = function(e, n) {
            p.apply(this, [!1].concat(i.call(arguments)))
        }, y.ifError = function(e) {
            if (e) throw e
        };
        var h = Object.keys || function(e) {
            var n = [];
            for (var t in e) m.call(e, t) && n.push(t);
            return n
        }
    }, {
        "util/": 4
    }],
    2: [function(e, n, t) {
        "function" == typeof Object.create ? n.exports = function(e, n) {
            e.super_ = n, e.prototype = Object.create(n.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : n.exports = function(e, n) {
            e.super_ = n;
            var t = function() {};
            t.prototype = n.prototype, e.prototype = new t, e.prototype.constructor = e
        }
    }, {}],
    3: [function(e, n, t) {
        n.exports = function(e) {
            return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
        }
    }, {}],
    4: [function(e, n, t) {
        (function(n, o) {
            var i = /%[sdj%]/g;
            t.format = function(e) {
                if (!S(e)) {
                    for (var n = [], t = 0; t < arguments.length; t++) n.push(a(arguments[t]));
                    return n.join(" ")
                }
                t = 1;
                for (var o = arguments, m = o.length, y = String(e).replace(i, function(e) {
                        if ("%%" === e) return "%";
                        if (t >= m) return e;
                        switch (e) {
                            case "%s":
                                return String(o[t++]);
                            case "%d":
                                return Number(o[t++]);
                            case "%j":
                                try {
                                    return JSON.stringify(o[t++])
                                } catch (e) {
                                    return "[Circular]"
                                }
                                default:
                                    return e
                        }
                    }), c = o[t]; t < m; c = o[++t]) f(c) || !k(c) ? y += " " + c : y += " " + a(c);
                return y
            }, t.deprecate = function(e, i) {
                if (w(o.process)) return function() {
                    return t.deprecate(e, i).apply(this, arguments)
                };
                if (!0 === n.noDeprecation) return e;
                var m = !1;
                return function() {
                    if (!m) {
                        if (n.throwDeprecation) throw new Error(i);
                        n.traceDeprecation ? console.trace(i) : console.error(i), m = !0
                    }
                    return e.apply(this, arguments)
                }
            };
            var m, y = {};

            function a(e, n) {
                var o = {
                    seen: [],
                    stylize: r
                };
                return arguments.length >= 3 && (o.depth = arguments[2]), arguments.length >= 4 && (o.colors = arguments[3]), g(n) ? o.showHidden = n : n && t._extend(o, n), w(o.showHidden) && (o.showHidden = !1), w(o.depth) && (o.depth = 2), w(o.colors) && (o.colors = !1), w(o.customInspect) && (o.customInspect = !0), o.colors && (o.stylize = c), d(o, e, o.depth)
            }

            function c(e, n) {
                var t = a.styles[n];
                return t ? "\x1b[" + a.colors[t][0] + "m" + e + "\x1b[" + a.colors[t][1] + "m" : e
            }

            function r(e, n) {
                return e
            }

            function s(e) {
                var n = {};
                return e.forEach(function(e, t) {
                    n[e] = !0
                }), n
            }

            function d(e, n, o) {
                if (e.customInspect && n && x(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                    var i = n.inspect(o, e);
                    return S(i) || (i = d(e, i, o)), i
                }
                var m = l(e, n);
                if (m) return m;
                var y = Object.keys(n),
                    a = s(y);
                if (e.showHidden && (y = Object.getOwnPropertyNames(n)), C(n) && (y.indexOf("message") >= 0 || y.indexOf("description") >= 0)) return u(n);
                if (0 === y.length) {
                    if (x(n)) {
                        var c = n.name ? ": " + n.name : "";
                        return e.stylize("[Function" + c + "]", "special")
                    }
                    if (P(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                    if (A(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                    if (C(n)) return u(n)
                }
                var r, g = "",
                    f = !1,
                    b = ["{", "}"];
                (h(n) && (f = !0, b = ["[", "]"]), x(n)) && (g = " [Function" + (n.name ? ": " + n.name : "") + "]");
                return P(n) && (g = " " + RegExp.prototype.toString.call(n)), A(n) && (g = " " + Date.prototype.toUTCString.call(n)), C(n) && (g = " " + u(n)), 0 !== y.length || f && 0 != n.length ? o < 0 ? P(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), r = f ? v(e, n, o, a, y) : y.map(function(t) {
                    return _(e, n, o, a, t, f)
                }), e.seen.pop(), p(r, g, b)) : b[0] + g + b[1]
            }

            function l(e, n) {
                if (w(n)) return e.stylize("undefined", "undefined");
                if (S(n)) {
                    var t = "'" + JSON.stringify(n).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(t, "string")
                }
                return b(n) ? e.stylize("" + n, "number") : g(n) ? e.stylize("" + n, "boolean") : f(n) ? e.stylize("null", "null") : void 0
            }

            function u(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }

            function v(e, n, t, o, i) {
                for (var m = [], y = 0, a = n.length; y < a; ++y) D(n, String(y)) ? m.push(_(e, n, t, o, String(y), !0)) : m.push("");
                return i.forEach(function(i) {
                    i.match(/^\d+$/) || m.push(_(e, n, t, o, i, !0))
                }), m
            }

            function _(e, n, t, o, i, m) {
                var y, a, c;
                if ((c = Object.getOwnPropertyDescriptor(n, i) || {
                        value: n[i]
                    }).get ? a = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (a = e.stylize("[Setter]", "special")), D(o, i) || (y = "[" + i + "]"), a || (e.seen.indexOf(c.value) < 0 ? (a = f(t) ? d(e, c.value, null) : d(e, c.value, t - 1)).indexOf("\n") > -1 && (a = m ? a.split("\n").map(function(e) {
                        return "  " + e
                    }).join("\n").substr(2) : "\n" + a.split("\n").map(function(e) {
                        return "   " + e
                    }).join("\n")) : a = e.stylize("[Circular]", "special")), w(y)) {
                    if (m && i.match(/^\d+$/)) return a;
                    (y = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (y = y.substr(1, y.length - 2), y = e.stylize(y, "name")) : (y = y.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), y = e.stylize(y, "string"))
                }
                return y + ": " + a
            }

            function p(e, n, t) {
                return e.reduce(function(e, n) {
                    return 0, n.indexOf("\n") >= 0 && 0, e + n.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0) > 60 ? t[0] + ("" === n ? "" : n + "\n ") + " " + e.join(",\n  ") + " " + t[1] : t[0] + n + " " + e.join(", ") + " " + t[1]
            }

            function h(e) {
                return Array.isArray(e)
            }

            function g(e) {
                return "boolean" == typeof e
            }

            function f(e) {
                return null === e
            }

            function b(e) {
                return "number" == typeof e
            }

            function S(e) {
                return "string" == typeof e
            }

            function w(e) {
                return void 0 === e
            }

            function P(e) {
                return k(e) && "[object RegExp]" === I(e)
            }

            function k(e) {
                return "object" == typeof e && null !== e
            }

            function A(e) {
                return k(e) && "[object Date]" === I(e)
            }

            function C(e) {
                return k(e) && ("[object Error]" === I(e) || e instanceof Error)
            }

            function x(e) {
                return "function" == typeof e
            }

            function I(e) {
                return Object.prototype.toString.call(e)
            }

            function N(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10)
            }
            t.debuglog = function(e) {
                if (w(m) && (m = n.env.NODE_DEBUG || ""), e = e.toUpperCase(), !y[e])
                    if (new RegExp("\\b" + e + "\\b", "i").test(m)) {
                        var o = n.pid;
                        y[e] = function() {
                            var n = t.format.apply(t, arguments);
                            console.error("%s %d: %s", e, o, n)
                        }
                    } else y[e] = function() {};
                return y[e]
            }, t.inspect = a, a.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, a.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, t.isArray = h, t.isBoolean = g, t.isNull = f, t.isNullOrUndefined = function(e) {
                return null == e
            }, t.isNumber = b, t.isString = S, t.isSymbol = function(e) {
                return "symbol" == typeof e
            }, t.isUndefined = w, t.isRegExp = P, t.isObject = k, t.isDate = A, t.isError = C, t.isFunction = x, t.isPrimitive = function(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
            }, t.isBuffer = e("./support/isBuffer");
            var G = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            function B() {
                var e = new Date,
                    n = [N(e.getHours()), N(e.getMinutes()), N(e.getSeconds())].join(":");
                return [e.getDate(), G[e.getMonth()], n].join(" ")
            }

            function D(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            }
            t.log = function() {
                console.log("%s - %s", B(), t.format.apply(t, arguments))
            }, t.inherits = e("inherits"), t._extend = function(e, n) {
                if (!n || !k(n)) return e;
                for (var t = Object.keys(n), o = t.length; o--;) e[t[o]] = n[t[o]];
                return e
            }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./support/isBuffer": 3,
        _process: 5,
        inherits: 2
    }],
    5: [function(e, n, t) {
        var o, i, m = n.exports = {};

        function y() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function c(e) {
            if (o === setTimeout) return setTimeout(e, 0);
            if ((o === y || !o) && setTimeout) return o = setTimeout, setTimeout(e, 0);
            try {
                return o(e, 0)
            } catch (n) {
                try {
                    return o.call(null, e, 0)
                } catch (n) {
                    return o.call(this, e, 0)
                }
            }
        }

        function r(e) {
            if (i === clearTimeout) return clearTimeout(e);
            if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
            try {
                return i(e)
            } catch (n) {
                try {
                    return i.call(null, e)
                } catch (n) {
                    return i.call(this, e)
                }
            }
        }(function() {
            try {
                o = "function" == typeof setTimeout ? setTimeout : y
            } catch (e) {
                o = y
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                i = a
            }
        })();
        var s, d = [],
            l = !1,
            u = -1;

        function v() {
            l && s && (l = !1, s.length ? d = s.concat(d) : u = -1, d.length && _())
        }

        function _() {
            if (!l) {
                var e = c(v);
                l = !0;
                for (var n = d.length; n;) {
                    for (s = d, d = []; ++u < n;) s && s[u].run();
                    u = -1, n = d.length
                }
                s = null, l = !1, r(e)
            }
        }

        function p(e, n) {
            this.fun = e, this.array = n
        }

        function h() {}
        m.nextTick = function(e) {
            var n = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
            d.push(new p(e, n)), 1 !== d.length || l || c(_)
        }, p.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = h, m.addListener = h, m.once = h, m.off = h, m.removeListener = h, m.removeAllListeners = h, m.emit = h, m.prependListener = h, m.prependOnceListener = h, m.listeners = function(e) {
            return []
        }, m.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, m.cwd = function() {
            return "/"
        }, m.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, m.umask = function() {
            return 0
        }
    }, {}],
    CarsManager: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "aef68PyPNlLgY/J0JQShnJ5", "CarsManager"), cc.Class({
            extends: cc.Component,
            properties: {},
            addCar: function(e, n, t, o, i, m, y, a) {
                if (this.Judgebuy(e) >= cc.vv.PP.Game_InIt_Setting.carMaxNum) cc.vv.promptbox.setlabel(cc.vv.CG.Text.garageisfull);
                else {
                    var c = cc.vv.PP.Game_InIt_Setting.cars.length,
                        r = void 0,
                        s = !1,
                        d = this.getListProperty(n);
                    if (m != cc.vv.CG.buyType.videoBuy) {
                        if (1 == d.numberofTimes && (d.gold = cc.vv.formula.firstPurchase_gold(cc.vv.CG.constant.goldPrice, n), d.diamond = cc.vv.formula.firstPurchase_diamond(cc.vv.CG.constant.diamondprice, n)), m == cc.vv.CG.buyType.globBuy) {
                            if (cc.vv.PP.glod < d.gold) {
                                if (cc.vv.CG.isShowReceivingGoldcoins) {
                                    var l = cc.vv.CarsMgr.getListProperty(cc.vv.PP.currentbuycarMAxGrade),
                                        u = cc.vv.formula.unFirstPurchase_gold(cc.vv.CG.constant.goldPrice, l.grade, cc.vv.CG.constant.proportion, l.numberofTimes),
                                        v = {
                                            ArticleAtlas: cc.vv.prompt.popupspriteAtlas,
                                            ArticlespriteFrame: cc.vv.CG.popupSprList.gold,
                                            input_text: cc.vv.CG.Text.Receive_award,
                                            incomevalue: "x" + cc.vv.tool.bytesToSize(Math.floor(2.2 * u)),
                                            Clicked: cc.vv.rr.receivegoldReward,
                                            rewardNum: Math.floor(2.2 * u),
                                            Clicked1: "",
                                            isVideo_reward: !0,
                                            type: "Receiving_Gold"
                                        };
                                    cc.vv.wxAPI.aldSendEvent("\u91d1\u5e01\u4e0d\u8db3\u5c55\u73b0\u5f39\u7a97", {
                                        "\u91d1\u5e01\u4e0d\u8db3\u5c55\u73b0\u5f39\u7a97": "\u5c55\u73b0"
                                    }), cc.vv.rr.Video_reward(this, "Receiving_Gold", "", "gold", "mashanglinqu", "", cc.vv.rr.watchAds, cc.vv.rr.closedPopup, v), cc.vv.prompt.setNotShowingShowState(!0)
                                } else y == cc.vv.CG.buyplatform.platform.storebuy ? cc.vv.promptbox.setlabel(cc.vv.CG.Text.Gold_Inadequate1) : y == cc.vv.CG.buyplatform.platform.ordinarybuy && cc.vv.promptbox.setlabel(cc.vv.CG.Text.Gold_Inadequate1);
                                return
                            }
                            cc.vv.PP.glod = cc.vv.PP.glod - d.gold
                        } else if (m == cc.vv.CG.buyType.diamondBuy) {
                            if (cc.vv.PP.diamond < d.diamond) return void cc.vv.promptbox.setlabel(cc.vv.CG.Text.Diamonds_Inadequate);
                            cc.vv.PP.diamond = cc.vv.PP.diamond - d.diamond
                        }
                        d.numberofTimes > 1 && (d.gold = cc.vv.formula.unFirstPurchase_gold(cc.vv.CG.constant.goldPrice, n, cc.vv.CG.constant.proportion, d.numberofTimes), d.diamond = cc.vv.formula.unfirstPurchase_diamond(cc.vv.CG.constant.diamondprice, n, cc.vv.CG.constant.gain, d.numberofTimes)), d.numberofTimes += 1, d.gold = cc.vv.formula.unFirstPurchase_gold(cc.vv.CG.constant.goldPrice, n, cc.vv.CG.constant.proportion, d.numberofTimes), a && a()
                    }
                    cc.vv.PP.Game_InIt_Setting.cars.push(this.getCarProperty(c - 1, n, t, o));
                    for (var _ = 0; _ < e.childrenCount; _++) e.children[_].is_Have_A_Car || s || (s = !0, r = e.children[_], this.createCar(r, cc.vv.PP.Game_InIt_Setting.cars[c], i, !1, !1, !0));
                    cc.vv.audioMgr.playSFX("buy.mp3")
                }
            },
            heroBoxCreateCar: function(e, n, t, o) {
                var i = cc.vv.PP.Game_InIt_Setting.cars;
                i.push(this.getCarProperty(i.length - 1, n, t, !1)), e.isheroBox = !1, this.createCar(e, i[i.length - 1], o, !1, !1, !1)
            },
            getCarProperty: function(e, n, t, o) {
                var i = {};
                if ("" != e || "" != n || "" != t || "" != o) return i.id = e, i.grade = n, i.spriteFrame = t, i.isSynthesis = o, i
            },
            createCar: function(e, n, t, o, i, m) {
                var y = e.getComponent("car"),
                    a = e.getComponent("hero");
                y.setinfoAll(n, o, t, i, m), a.setinfoAll(n.grade), e.is_Have_A_Car = !0
            },
            deleteCar: function(e) {
                var n = e.getComponent("car"),
                    t = e.getComponent("hero");
                n.deleteCarPropertyAndSprite(), t.deleteHeroData()
            },
            getListProperty: function(e) {
                if (null != cc.vv.PP.buyCarsProperty)
                    for (var n = 0; n < cc.vv.PP.buyCarsProperty.length; n++) {
                        var t = cc.vv.PP.buyCarsProperty[n];
                        if (t.grade == e) return t
                    }
            },
            getEarningsperSecond: function() {
                for (var e = 0, n = 0, t = 0; t < cc.vv.PP.Game_InIt_Setting.cars.length; t++) n = cc.vv.PP.Game_InIt_Setting.cars[t].grade, e += cc.vv.formula.persecondIncome(n);
                return e
            },
            Judgebuy: function(e) {
                for (var n = 0, t = 0; t < e.childrenCount; t++) e.children[t].is_Have_A_Car && n++;
                return n
            },
            sort: function(e, n) {
                for (var t = void 0, o = 0; o < e.length; o++)
                    for (var i = o; i < e.length; i++) e[o][n] > e[i][n] && (t = e[i], e[i] = e[o], e[o] = t);
                return e
            }
        }), cc._RF.pop()
    }, {}],
    Common: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "7e43ed8X/ZN1I50/35xVyiC", "Common"), cc.Class({
            extends: cc.Component,
            properties: {},
            compareVersion: function(e, n) {
                e = e.split("."), n = n.split(".");
                for (var t = Math.max(e.length, n.length); e.length < t;) e.push("0");
                for (; n.length < t;) n.push("0");
                for (var o = 0; o < t; o++) {
                    var i = parseInt(e[o]),
                        m = parseInt(n[o]);
                    if (i > m) return 1;
                    if (i < m) return -1
                }
                return 0
            },
            isCanShowVideo: function() {
                var e = !1;
                if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                    var n = wx.getSystemInfoSync().SDKVersion; - 1 === this.compareVersion(n, "2.0.4") ? console.log("=====\u7248\u672c\u4e0d\u591f2.0.4\uff0c\u89c6\u9891\u5e7f\u544a\u4e0d\u80fd\u7528") : e = !0
                }
                return e
            },
            createVideo: function(e) {
                /* this.isCanShowVideo() && (this.videoAd || (this.videoAd = wx.createRewardedVideoAd({
                    adUnitId: cc.vv.CG.wxInIt.adUnitId
                })), this.videoAd.bind_this = e, this.videoAd.onClose(this.videoAd.bind_this.adSuccessPlay), this.videoAd.onError(this.videoAd.bind_this.adError)) */
            },
            releaseVideo: function() {
                this.isCanShowVideo() && this.videoAd && this.videoAd.bind_this && (this.videoAd.offClose(this.videoAd.bind_this.adSuccessPlay), this.videoAd.bind_this = null)
            },
            loadVideo: function() {
                var e = this;
                this.isCanShowVideo() && this.videoAd.load().then(function() {
                    return e.videoAd.show().catch(function(e) {
                        return console.log(e)
                    })
                })
            }
        }), cc._RF.pop()
    }, {}],
    Crystal: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "ff2b31HHlBB5r0KF9+8c5bg", "Crystal");
        var o = e("ugame");
        e("PolySDK");
        cc.Class({
            extends: cc.Component,
            properties: {
                crystal: cc.Node,
                grayCrystal: cc.Node,
                CityGate: cc.Node,
                CityGate1: cc.Node,
                caveat: cc.Node,
                hp: cc.Label,
                countdown_text: cc.Label,
                back_to_full: cc.Node,
                income50: cc.Node,
                hpBulle: cc.Label,
                countdown_textBulle: cc.Label,
                _isShowcrystalHPBulle: !1
            },
            onLoad: function() {
                this._countdown = cc.vv.CG.Crystalcountdown, this.initEventHandlers(), this.income50.active = !1, cc.vv.EventMgr.Restore_blood_volume(), this.Replace_crystal_Image(), this.caveat.active = !1, this.caveatAnim = this.caveat.getComponent(cc.Animation), cc.vv.PP.remaining_crystalHP <= 0 && (cc.vv.EventMgr.Reply_to_life_popup(), cc.vv.CG.isCrystaldamaged = !0)
            },
            PlatformEventCallback: function(e, n, t) {},
            Replace_crystal_Image: function(e) {
                cc.vv.PP.remaining_crystalHP <= 0 || cc.vv.PP.yieldRatio == cc.vv.CG.Crystalcountdown.yieldRatio50 ? this.grayCrystal.active = !0 : this.grayCrystal.active = !1, cc.vv.PP.yieldRatio == cc.vv.CG.Crystalcountdown.yieldRatio50 ? (this.income50.active = !0, this.back_to_full.active = !0, cc.lieying_self = this, cc.LieYingSDK.PolySDK.VideoAd.getVideoAdNumber(function(e) {
                    cc.lieying_self.back_to_full.active = 0 != e
                })) : (this.income50.active = !1, this.back_to_full.active = !1), cc.vv.PP.remaining_crystalHP <= cc.vv.CG.MaxcrystalHP / 2 && cc.vv.PP.remaining_crystalHP > 0 ? (this.CityGate.active = !1, this.CityGate1.active = !this.CityGate.active) : cc.vv.PP.remaining_crystalHP == cc.vv.CG.MaxcrystalHP ? (this.CityGate.active = !0, this.CityGate1.active = !this.CityGate.active) : cc.vv.PP.remaining_crystalHP <= 0 && (this.CityGate.active = !1, this.CityGate1.active = !1), this.crystal.active = !this.grayCrystal.active
            },
            initEventHandlers: function() {
                var e = this;
                e.node.on("Restore_blood_volume", function(n) {
                    cc.vv.PP.remaining_crystalHP >= cc.vv.CG.MaxcrystalHP ? e.setCountdownInIt() : (e.setHP(cc.vv.PP.remaining_crystalHP + "/" + cc.vv.CG.MaxcrystalHP), e.schedule(e.countDownShow, 1))
                }), e.node.on("Reply_to_life_popup", function(n) {
                    cc.vv.bullet.setpresentationPage(cc.vv.CG.PresentationName.crystalDamage), e.setHPBulle(cc.vv.PP.remaining_crystalHP + "/" + cc.vv.CG.MaxcrystalHP), e._isShowcrystalHPBulle = !0
                }), e.node.on("openIncome50", function(n) {
                    e.income50.active = !0
                }), e.node.on("Replace_crystal_Image", function(n) {
                    var t = e.getNodeData(n);
                    e.Replace_crystal_Image(t.isChangePicture)
                }), e.node.on("AttackTheCityWallAnimShow", function(n) {
                    e.attackTheCityWallAnimShow()
                }), e.node.on("pop_ups_back_to_full", function(n) {
                    e.pop_ups_back_to_full()
                }), e.node.on("back_to_fullfun", function(n) {
                    e.back_to_fullfun()
                }), e.node.on("noNeedBack_to_full", function(n) {
                    e.noNeedBack_to_full()
                })
            },
            attackTheCityWallAnimShow: function() {
                cc.vv.CG.isopenCaveat && this.caveatAnim.play(), this.caveat.active = cc.vv.CG.isopenCaveat
            },
            countDownShow: function() {
                (0 == this._countdown.reduiseTime || cc.vv.PP.crystalReplyTime <= 0) && (this._countdown.reduiseTime = cc.vv.CG.Crystalcountdown.totalTime, cc.vv.PP.crystalReplyTime = cc.vv.CG.Crystalcountdown.totalTime), cc.vv.PP.crystalReplyTime != cc.vv.CG.Crystalcountdown.totalTime && (this._countdown.reduiseTime = cc.vv.PP.crystalReplyTime);
                var e = this._countdown.reduiseTime;
                e -= 1, this._countdown.reduiseTime = e, cc.vv.PP.crystalReplyTime = e;
                var n = e - 3600 * Math.floor(e / 3600),
                    t = Math.floor(n / 60),
                    o = n -= 60 * t;
                t < 10 && (t = "0" + t), n < 10 && (o = "0" + n), this.setcountdown(t + ":" + o), this._isShowcrystalHPBulle && this.setcountdownBulle(t + ":" + o), 0 === n && (cc.vv.PP.remaining_crystalHP = cc.vv.PP.remaining_crystalHP + 1, this.setHP(cc.vv.PP.remaining_crystalHP + "/" + cc.vv.CG.MaxcrystalHP), this._isShowcrystalHPBulle && this.setHPBulle(cc.vv.PP.remaining_crystalHP + "/" + cc.vv.CG.MaxcrystalHP), cc.vv.PP.remaining_crystalHP == cc.vv.CG.MaxcrystalHP ? this.setCountdownInIt() : (this._isShowcrystalHPBulle && this.setcountdownBulle("00:20"), this.setcountdown("00:20"), this._countdown.reduiseTime = cc.vv.CG.Crystalcountdown.totalTime))
            },
            onClickedBtn: function(e, n) {
                switch (n) {
                    case "btn_1":
                        cc.vv.wxAPI.aldSendEvent("\u4fee\u590d\u6c34\u6676\u5f39\u7a97\u9a6c\u4e0a\u4fee\u590d", {
                            "\u4fee\u590d\u6c34\u6676\u5f39\u7a97\u9a6c\u4e0a\u4fee\u590d": "\u5f39\u7a97\u6309\u94ae"
                        }), this.isCanWatchAds({
                            adType: "pop_ups_back_to_full"
                        }, this.pop_ups_back_to_full.bind(this));
                        break;
                    case "btn_2":
                        cc.vv.wxAPI.aldSendEvent("\u4fee\u590d\u6c34\u6676\u5f39\u7a97\u6b8b\u5fcd\u62d2\u7edd", {
                            "\u4fee\u590d\u6c34\u6676\u5f39\u7a97\u6b8b\u5fcd\u62d2\u7edd": "\u6210\u529f"
                        }), this.noNeedBack_to_full();
                        break;
                    case "back_to_full":
                        cc.vv.wxAPI.aldSendEvent("\u4fee\u590d\u6c34\u6676\u4e3b\u754c\u9762\u9a6c\u4e0a\u4fee\u590d", {
                            "\u4fee\u590d\u6c34\u6676\u4e3b\u754c\u9762\u9a6c\u4e0a\u4fee\u590d": "\u4e3b\u754c\u9762\u6309\u94ae"
                        }), this.isCanWatchAds({
                            adType: "back_to_full"
                        }, this.back_to_fullfun.bind(this))
                }
            },
            isCanWatchAds: function(e, n) {
                cc.vv.wxAPI.videoAd.onPlayVideoBtn(e)
            },
            pop_ups_back_to_full: function() {
                cc.vv.PP.remaining_crystalHP = cc.vv.CG.MaxcrystalHP, this.setCountdownInIt(), cc.vv.CG.GameOne = !0, cc.vv.CG.isCrystaldamaged = !1, this.Replace_crystal_Image(!0), o.Gen_round_enemy(!0)
            },
            back_to_fullfun: function() {
                cc.vv.PP.remaining_crystalHP = cc.vv.CG.MaxcrystalHP, cc.vv.CG.isopenCaveat = !1, this.attackTheCityWallAnimShow(), this.setCountdownInIt(), this.Replace_crystal_Image(!0)
            },
            noNeedBack_to_full: function() {
                cc.vv.PP.yieldRatio = cc.vv.CG.Crystalcountdown.yieldRatio50, cc.vv.PP.remaining_crystalHP = cc.vv.CG.MaxcrystalHP / 2, this.setHP(cc.vv.PP.remaining_crystalHP + "/" + cc.vv.CG.MaxcrystalHP), cc.vv.EventMgr.openIncome50(), cc.vv.CG.GameOne = !0, cc.vv.CG.isCrystaldamaged = !1, 2 != cc.vv.PP.GuideSate || cc.vv.PP.NoHPGuide || cc.vv.EventMgr.beginnerGuide({
                    nodename: cc.vv.CG.BeginnerGuide[2],
                    isshow: !0
                }), this.Replace_crystal_Image(!1), o.Gen_round_enemy(!0)
            },
            setCountdownInIt: function() {
                this.unschedule(this.countDownShow), this._isShowcrystalHPBulle = !1, cc.vv.PP.yieldRatio = cc.vv.CG.Crystalcountdown.yieldRatio100, this.income50.active = !1, this.setHP(cc.vv.PP.remaining_crystalHP + "/" + cc.vv.CG.MaxcrystalHP), this.setcountdown("")
            },
            setHP: function(e) {
                "" != this.hp && (this.hp.string = e)
            },
            setcountdown: function(e) {
                "" != this.countdown_text && (this.countdown_text.string = e)
            },
            setHPBulle: function(e) {
                "" != this.hpBulle && (this.hpBulle.string = e)
            },
            setcountdownBulle: function(e) {
                "" != this.countdown_textBulle && (this.countdown_textBulle.string = e)
            },
            getNodeData: function(e) {
                return "1.9.3" == cc.ENGINE_VERSION ? e.detail : e
            }
        }), cc._RF.pop()
    }, {
        PolySDK: "PolySDK",
        ugame: "ugame"
    }],
    EnemyPath: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "989d6baMd5Aq7B3Q2wUi20z", "EnemyPath");
        n.exports = [
            [{
                x: 667,
                y: 9
            }, {
                x: 650.4560000000001,
                y: 9
            }, {
                x: 637.608,
                y: 9
            }, {
                x: 624.232,
                y: 9
            }, {
                x: 606.104,
                y: 9
            }, {
                x: 579,
                y: 9
            }, {
                x: 561.1600000000001,
                y: 11.056000000000003
            }, {
                x: 541.16,
                y: 12.488000000000001
            }, {
                x: 520.6800000000001,
                y: 13.392
            }, {
                x: 501.40000000000003,
                y: 13.864
            }, {
                x: 485,
                y: 14
            }, {
                x: 469.39200000000005,
                y: 13.824000000000002
            }, {
                x: 451.09599999999995,
                y: 12.352
            }, {
                x: 431.504,
                y: 9.967999999999998
            }, {
                x: 412.00800000000004,
                y: 7.055999999999999
            }, {
                x: 394,
                y: 4
            }, {
                x: 376.8720000000001,
                y: 3.784000000000001
            }, {
                x: 359.216,
                y: 3.232
            }, {
                x: 341.22400000000005,
                y: 2.4879999999999995
            }, {
                x: 323.08799999999997,
                y: 1.6960000000000002
            }, {
                x: 305,
                y: 1
            }, {
                x: 287,
                y: .9953703703703705
            }, {
                x: 269.00000000000006,
                y: .9629629629629631
            }, {
                x: 251,
                y: .875
            }, {
                x: 233,
                y: .7037037037037037
            }, {
                x: 215.00000000000003,
                y: .42129629629629645
            }, {
                x: 197,
                y: 3.330669073875469e-16
            }, {
                x: 180.00000000000003,
                y: -.07407407407407407
            }, {
                x: 163.00000000000003,
                y: -.2592592592592593
            }, {
                x: 146,
                y: -.5
            }, {
                x: 129.00000000000003,
                y: -.7407407407407407
            }, {
                x: 112,
                y: -.9259259259259258
            }, {
                x: 95,
                y: -1
            }, {
                x: 78.75000000000001,
                y: -1.0694444444444444
            }, {
                x: 60.66666666666668,
                y: -1.2222222222222223
            }, {
                x: 41.75,
                y: -1.375
            }, {
                x: 23.000000000000004,
                y: -1.4444444444444446
            }, {
                x: 5.416666666666674,
                y: -1.3472222222222223
            }, {
                x: -9.99999999999999,
                y: -1.0000000000000002
            }, {
                x: -29.657407407407412,
                y: -.925925925925926
            }, {
                x: -48.5925925925926,
                y: -.7407407407407409
            }, {
                x: -66.75,
                y: -.5
            }, {
                x: -84.07407407407408,
                y: -.2592592592592593
            }, {
                x: -100.50925925925927,
                y: -.07407407407407414
            }, {
                x: -115.99999999999999,
                y: -3.6977854932234923e-32
            }, {
                x: -142.78425655976676,
                y: .7434402332361516
            }, {
                x: -162.76384839650146,
                y: 1.2944606413994169
            }, {
                x: -177.9504373177842,
                y: 1.705539358600583
            }, {
                x: -190.35568513119534,
                y: 2.029154518950437
            }, {
                x: -201.99125364431484,
                y: 2.317784256559766
            }, {
                x: -214.86880466472303,
                y: 2.6239067055393583
            }, {
                x: -230.99999999999994,
                y: 2.9999999999999996
            }],
            [{
                x: 669,
                y: -62
            }, {
                x: 647.6909620991255,
                y: -60.50145772594752
            }, {
                x: 631.1399416909621,
                y: -59.31778425655976
            }, {
                x: 617.1253644314868,
                y: -58.27405247813411
            }, {
                x: 603.4256559766765,
                y: -57.195335276967924
            }, {
                x: 587.8192419825074,
                y: -55.9067055393586
            }, {
                x: 568.0845481049562,
                y: -54.23323615160349
            }, {
                x: 542.0000000000001,
                y: -51.99999999999999
            }, {
                x: 525.4458161865568,
                y: -51.41289437585733
            }, {
                x: 509.6406035665295,
                y: -51.673525377229076
            }, {
                x: 494.3703703703705,
                y: -52.814814814814824
            }, {
                x: 479.42112482853224,
                y: -54.86968449931413
            }, {
                x: 464.57887517146776,
                y: -57.87105624142661
            }, {
                x: 449.6296296296296,
                y: -61.85185185185185
            }, {
                x: 434.3593964334705,
                y: -66.84499314128945
            }, {
                x: 418.5541838134431,
                y: -72.88340192043897
            }, {
                x: 402.00000000000006,
                y: -80
            }, {
                x: 387.146484375,
                y: -74.849609375
            }, {
                x: 371.859375,
                y: -70.671875
            }, {
                x: 356.173828125,
                y: -67.501953125
            }, {
                x: 340.125,
                y: -65.375
            }, {
                x: 323.748046875,
                y: -64.326171875
            }, {
                x: 307.078125,
                y: -64.390625
            }, {
                x: 290.150390625,
                y: -65.603515625
            }, {
                x: 273,
                y: -68
            }, {
                x: 253.736328125,
                y: -68.30859375
            }, {
                x: 236.078125,
                y: -69.15625
            }, {
                x: 219.474609375,
                y: -70.42578125
            }, {
                x: 203.375,
                y: -72
            }, {
                x: 187.228515625,
                y: -73.76171875
            }, {
                x: 170.484375,
                y: -75.59375
            }, {
                x: 152.591796875,
                y: -77.37890625
            }, {
                x: 133,
                y: -79
            }, {
                x: 115.427734375,
                y: -78.955078125
            }, {
                x: 97.984375,
                y: -78.828125
            }, {
                x: 80.705078125,
                y: -78.630859375
            }, {
                x: 63.625,
                y: -78.375
            }, {
                x: 46.779296875,
                y: -78.072265625
            }, {
                x: 30.203125,
                y: -77.734375
            }, {
                x: 13.931640625,
                y: -77.373046875
            }, {
                x: -2,
                y: -77
            }, {
                x: -20.286880466472304,
                y: -76.99446064139943
            }, {
                x: -38.92361516034984,
                y: -76.98017492711371
            }, {
                x: -57.5743440233236,
                y: -76.9606413994169
            }, {
                x: -75.90320699708452,
                y: -76.93935860058309
            }, {
                x: -93.57434402332359,
                y: -76.91982507288631
            }, {
                x: -110.25189504373175,
                y: -76.9055393586006
            }, {
                x: -125.59999999999997,
                y: -76.90000000000002
            }, {
                x: -159.4212962962963,
                y: -76.89537037037039
            }, {
                x: -182.83703703703702,
                y: -76.86296296296298
            }, {
                x: -198.77499999999998,
                y: -76.775
            }, {
                x: -210.16296296296295,
                y: -76.6037037037037
            }, {
                x: -219.9287037037037,
                y: -76.3212962962963
            }, {
                x: -230.99999999999997,
                y: -75.89999999999999
            }],
            [{
                x: 667,
                y: 48.7
            }, {
                x: 650.1531249999999,
                y: 48.63906250000001
            }, {
                x: 636.85,
                y: 48.5875
            }, {
                x: 620.171875,
                y: 48.517187500000006
            }, {
                x: 593.2,
                y: 48.4
            }, {
                x: 573.603125,
                y: 53.2265625
            }, {
                x: 554.6249999999999,
                y: 55.962500000000006
            }, {
                x: 536.809375,
                y: 57.2171875
            }, {
                x: 520.7,
                y: 57.6
            }, {
                x: 500.5814814814816,
                y: 57.49629629629631
            }, {
                x: 479.4851851851852,
                y: 57.37037037037037
            }, {
                x: 457.5,
                y: 57.2
            }, {
                x: 439.5171875,
                y: 56.751562500000006
            }, {
                x: 422.76250000000005,
                y: 54.9625
            }, {
                x: 407.4515625,
                y: 51.8421875
            }, {
                x: 393.8,
                y: 47.4
            }, {
                x: 377.67824074074076,
                y: 47.20787037037038
            }, {
                x: 361.3259259259261,
                y: 47.02962962962964
            }, {
                x: 344.76250000000005,
                y: 46.8625
            }, {
                x: 328.0074074074074,
                y: 46.70370370370371
            }, {
                x: 311.08009259259256,
                y: 46.55046296296297
            }, {
                x: 293.99999999999994,
                y: 46.39999999999999
            }, {
                x: 276.59583333333336,
                y: 46.25787037037037
            }, {
                x: 259.1000000000001,
                y: 46.12962962962963
            }, {
                x: 241.53750000000002,
                y: 46.012499999999996
            }, {
                x: 223.93333333333334,
                y: 45.903703703703705
            }, {
                x: 206.3125,
                y: 45.80046296296297
            }, {
                x: 188.7,
                y: 45.699999999999996
            }, {
                x: 171.70787172011663,
                y: 45.614577259475226
            }, {
                x: 154.77521865889213,
                y: 45.53090379008747
            }, {
                x: 137.92478134110783,
                y: 45.45072886297375
            }, {
                x: 121.17930029154518,
                y: 45.37580174927113
            }, {
                x: 104.56151603498543,
                y: 45.30787172011661
            }, {
                x: 88.09416909620992,
                y: 45.24868804664723
            }, {
                x: 71.80000000000003,
                y: 45.20000000000001
            }, {
                x: 53.672222222222224,
                y: 45.15046296296297
            }, {
                x: 35.81111111111112,
                y: 45.10370370370371
            }, {
                x: 18.25,
                y: 45.0625
            }, {
                x: 1.0222222222222257,
                y: 45.02962962962964
            }, {
                x: -15.83888888888888,
                y: 45.00787037037037
            }, {
                x: -32.299999999999976,
                y: 44.99999999999999
            }, {
                x: -53.21944444444445,
                y: 44.95787037037037
            }, {
                x: -72.4888888888889,
                y: 44.92962962962963
            }, {
                x: -90.425,
                y: 44.912499999999994
            }, {
                x: -107.34444444444445,
                y: 44.9037037037037
            }, {
                x: -123.5638888888889,
                y: 44.90046296296296
            }, {
                x: -139.39999999999995,
                y: 44.89999999999999
            }, {
                x: -164.64480000000003,
                y: 44.900800000000004
            }, {
                x: -181.9264,
                y: 44.90639999999999
            }, {
                x: -195.5456,
                y: 44.9216
            }, {
                x: -209.8032,
                y: 44.9512
            }, {
                x: -229,
                y: 45
            }],
            [{
                x: 667,
                y: -32
            }, {
                x: 653.1512000000001,
                y: -32.05040000000001
            }, {
                x: 642.0096000000001,
                y: -32.09120000000001
            }, {
                x: 629.6823999999999,
                y: -32.1368
            }, {
                x: 612.2768,
                y: -32.2016
            }, {
                x: 585.9,
                y: -32.3
            }, {
                x: 569.4032000000001,
                y: -30.8408
            }, {
                x: 550.9576000000001,
                y: -28.666399999999996
            }, {
                x: 531.2303999999999,
                y: -26.3816
            }, {
                x: 510.88880000000006,
                y: -24.5912
            }, {
                x: 490.6,
                y: -23.9
            }, {
                x: 472.6754629629631,
                y: -23.66527777777778
            }, {
                x: 455.47037037037046,
                y: -24.355555555555554
            }, {
                x: 438.78749999999997,
                y: -25.8125
            }, {
                x: 422.4296296296296,
                y: -27.877777777777773
            }, {
                x: 406.19953703703703,
                y: -30.393055555555552
            }, {
                x: 389.8999999999999,
                y: -33.19999999999999
            }, {
                x: 371.94160000000005,
                y: -33.36880000000001
            }, {
                x: 353.72880000000004,
                y: -33.5184
            }, {
                x: 335.29519999999997,
                y: -33.6536
            }, {
                x: 316.6744,
                y: -33.7792
            }, {
                x: 297.9,
                y: -33.9
            }, {
                x: 280.5775510204082,
                y: -34.02244897959184
            }, {
                x: 263.16938775510204,
                y: -34.13265306122449
            }, {
                x: 245.7,
                y: -34.230612244897955
            }, {
                x: 228.19387755102042,
                y: -34.316326530612244
            }, {
                x: 210.67551020408166,
                y: -34.38979591836734
            }, {
                x: 193.16938775510206,
                y: -34.45102040816327
            }, {
                x: 175.70000000000005,
                y: -34.5
            }, {
                x: 158.11457725947523,
                y: -34.579883381924205
            }, {
                x: 140.60437317784255,
                y: -34.64927113702624
            }, {
                x: 123.19562682215742,
                y: -34.70991253644314
            }, {
                x: 105.91457725947522,
                y: -34.763556851311954
            }, {
                x: 88.78746355685132,
                y: -34.81195335276968
            }, {
                x: 71.84052478134114,
                y: -34.85685131195335
            }, {
                x: 55.10000000000002,
                y: -34.9
            }, {
                x: 37.23055555555556,
                y: -34.9425925925926
            }, {
                x: 19.644444444444453,
                y: -34.97407407407408
            }, {
                x: 2.375,
                y: -35
            }, {
                x: -14.54444444444444,
                y: -35.02592592592593
            }, {
                x: -31.080555555555556,
                y: -35.05740740740741
            }, {
                x: -47.19999999999999,
                y: -35.099999999999994
            }, {
                x: -66.58320000000002,
                y: -35.1
            }, {
                x: -85.21759999999998,
                y: -35.1
            }, {
                x: -103.0504,
                y: -35.1
            }, {
                x: -120.02879999999998,
                y: -35.1
            }, {
                x: -136.1,
                y: -35.1
            }, {
                x: -162.14722222222224,
                y: -35.14166666666667
            }, {
                x: -180.74444444444447,
                y: -35.16666666666667
            }, {
                x: -194.67499999999998,
                y: -35.175000000000004
            }, {
                x: -206.72222222222223,
                y: -35.16666666666667
            }, {
                x: -219.66944444444445,
                y: -35.141666666666666
            }, {
                x: -236.29999999999998,
                y: -35.099999999999994
            }]
        ], cc._RF.pop()
    }, {}],
    EnemyProperty: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "0ea86dw0TZFuo4OwERs4oki", "EnemyProperty");
        n.exports = [{
            level: "1",
            hp: "300 ",
            atk: "1",
            speed: "40",
            income: "50 "
        }, {
            level: "2",
            hp: "604 ",
            atk: "1",
            speed: "40",
            income: "88 "
        }, {
            level: "3",
            hp: "1217 ",
            atk: "1",
            speed: "40",
            income: "153 "
        }, {
            level: "4",
            hp: "2451 ",
            atk: "1",
            speed: "40",
            income: "268 "
        }, {
            level: "5",
            hp: "4936 ",
            atk: "1",
            speed: "40",
            income: "469 "
        }, {
            level: "6",
            hp: "9941 ",
            atk: "1",
            speed: "40",
            income: "821 "
        }, {
            level: "7",
            hp: "20021 ",
            atk: "1",
            speed: "40",
            income: "1436 "
        }, {
            level: "8",
            hp: "40322 ",
            atk: "1",
            speed: "40",
            income: "2513 "
        }, {
            level: "9",
            hp: "81208 ",
            atk: "1",
            speed: "40",
            income: "4398 "
        }, {
            level: "10",
            hp: "163552 ",
            atk: "1",
            speed: "40",
            income: "7697 "
        }, {
            level: "11",
            hp: "329394 ",
            atk: "1",
            speed: "40",
            income: "13469 "
        }, {
            level: "12",
            hp: "663400 ",
            atk: "1",
            speed: "40",
            income: "23572 "
        }, {
            level: "13",
            hp: "1192439 ",
            atk: "1",
            speed: "40",
            income: "41250 "
        }, {
            level: "14",
            hp: "2378915 ",
            atk: "1",
            speed: "40",
            income: "72188 "
        }, {
            level: "15",
            hp: "4745936 ",
            atk: "1",
            speed: "40",
            income: "126329 "
        }, {
            level: "16",
            hp: "9468142 ",
            atk: "1",
            speed: "40",
            income: "221076 "
        }, {
            level: "17",
            hp: "18888943 ",
            atk: "1",
            speed: "40",
            income: "386882 "
        }, {
            level: "18",
            hp: "37683441 ",
            atk: "1",
            speed: "40",
            income: "677044 "
        }, {
            level: "19",
            hp: "75178465 ",
            atk: "1",
            speed: "40",
            income: "1184827 "
        }, {
            level: "20",
            hp: "149981038 ",
            atk: "1",
            speed: "40",
            income: "2073447 "
        }, {
            level: "21",
            hp: "299212171 ",
            atk: "1",
            speed: "40",
            income: "3628532 "
        }, {
            level: "22",
            hp: "596928281 ",
            atk: "1",
            speed: "40",
            income: "6349931 "
        }, {
            level: "23",
            hp: "1190871921 ",
            atk: "1",
            speed: "40",
            income: "11112380 "
        }, {
            level: "24",
            hp: "2375789482 ",
            atk: "1",
            speed: "40",
            income: "19446665 "
        }, {
            level: "25",
            hp: "4739700016 ",
            atk: "1",
            speed: "40",
            income: "34031663 "
        }, {
            level: "26",
            hp: "9455701532 ",
            atk: "1",
            speed: "40",
            income: "59555410 "
        }, {
            level: "27",
            hp: "18864124556 ",
            atk: "1",
            speed: "40",
            income: "104221968 "
        }, {
            level: "28",
            hp: "37633928489 ",
            atk: "1",
            speed: "40",
            income: "182388444 "
        }, {
            level: "29",
            hp: "75079687335 ",
            atk: "1",
            speed: "40",
            income: "319179777 "
        }, {
            level: "30",
            hp: "149783976233 ",
            atk: "1",
            speed: "40",
            income: "558564611 "
        }, {
            level: "31",
            hp: "9941 ",
            atk: "5 ",
            speed: "40",
            income: "821 "
        }, {
            level: "32",
            hp: "163552 ",
            atk: "5 ",
            speed: "40",
            income: "7697 "
        }, {
            level: "33",
            hp: "2378915 ",
            atk: "5 ",
            speed: "40",
            income: "72188 "
        }, {
            level: "34",
            hp: "37683441 ",
            atk: "5 ",
            speed: "40",
            income: "677044 "
        }, {
            level: "35",
            hp: "596928281 ",
            atk: "5 ",
            speed: "40",
            income: "6349931 "
        }, {
            level: "36",
            hp: "9455701532 ",
            atk: "5 ",
            speed: "40",
            income: "59555410 "
        }, {
            level: "37",
            hp: "149783976233 ",
            atk: "5 ",
            speed: "40",
            income: "558564611 "
        }, {
            level: "38",
            hp: "1581778602814 ",
            atk: "5 ",
            speed: "40",
            income: "5238725116 "
        }, {
            level: "39",
            hp: "25056320554951 ",
            atk: "5 ",
            speed: "40",
            income: "49133511737 "
        }, {
            level: "40",
            hp: "99724782216720 ",
            atk: "5 ",
            speed: "40",
            income: "150471379695 "
        }], cc._RF.pop()
    }, {}],
    Enemy: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "5eeb0KTzc9CAqvuXzWEkyuE", "Enemy");
        n.exports = {
            enemy1: 0,
            enemy2: 1,
            enemy3: 2,
            enemy4: 3,
            enemy5: 4,
            enemy6: 5,
            enemy7: 6,
            enemy8: 7,
            enemy9: 8,
            enemy10: 9,
            enemy11: 10,
            enemy12: 11,
            enemy13: 12,
            enemy14: 13,
            enemy15: 14,
            enemy16: 15,
            enemy17: 16,
            enemy18: 17,
            enemy19: 18,
            enemy20: 19,
            enemy21: 20,
            enemy22: 21,
            enemy23: 22,
            enemy24: 23,
            enemy25: 24,
            enemy26: 25,
            enemy27: 26,
            enemy28: 27,
            enemy29: 28,
            enemy30: 29,
            enemy31: 30,
            enemy32: 31,
            enemy33: 32,
            enemy34: 33,
            enemy35: 34,
            enemy36: 35,
            enemy37: 36,
            enemy38: 37,
            enemy39: 38,
            enemy40: 39
        }, cc._RF.pop()
    }, {}],
    EventMgr: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "81306apgXdBro5aINVvrz4a", "EventMgr"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                cc.vv.EventMgr = this
            },
            Gen_round_enemy: function(e) {
                cc.vv.EventMgr.node.emit("Gen_round_enemy", e)
            },
            Restore_blood_volume: function(e) {
                cc.vv.EventMgr.node.emit("Restore_blood_volume", e)
            },
            CanAheroBuy: function(e) {
                cc.vv.EventMgr.node.emit("CanAheroBuy", e)
            },
            setGameIncome: function() {
                cc.vv.EventMgr.node.emit("setGameIncome", data)
            },
            Replace_crystal_Image: function(e) {
                cc.vv.EventMgr.node.emit("Replace_crystal_Image", e)
            },
            ShowVictroyInterface: function(e) {
                cc.vv.EventMgr.node.emit("ShowVictroyInterface", e)
            },
            Wave_labelShow: function(e) {
                cc.vv.EventMgr.node.emit("Wave_labelShow", e)
            },
            Reply_to_life_popup: function(e) {
                cc.vv.EventMgr.node.emit("Reply_to_life_popup", e)
            },
            Random_hero: function(e) {
                cc.vv.EventMgr.node.emit("Random_hero", e)
            },
            recyclingIncome: function(e) {
                cc.vv.EventMgr.node.emit("recyclingIncome", e)
            },
            receivediamondsReward: function(e) {
                cc.vv.EventMgr.node.emit("receivediamondsReward", e)
            },
            openIncome50: function(e) {
                cc.vv.EventMgr.node.emit("openIncome50", e)
            },
            AttackTheCityWallAnimShow: function(e) {
                cc.vv.EventMgr.node.emit("AttackTheCityWallAnimShow", e)
            },
            pop_ups_back_to_full: function(e) {
                cc.vv.EventMgr.node.emit("pop_ups_back_to_full", e)
            },
            back_to_fullfun: function(e) {
                cc.vv.EventMgr.node.emit("back_to_fullfun", e)
            },
            noNeedBack_to_full: function(e) {
                cc.vv.EventMgr.node.emit("noNeedBack_to_full", e)
            },
            beginnerGuide: function(e) {
                cc.vv.EventMgr.node.emit("beginnerGuide", e)
            },
            AdBoxclose: function(e) {
                cc.vv.EventMgr.node.emit("AdBoxclose", e)
            },
            WatchAdsuccess: function(e) {
                cc.vv.EventMgr.node.emit("WatchAdsuccess", e)
            },
            WatchAdfailure: function(e) {
                cc.vv.EventMgr.node.emit("WatchAdfailure", e)
            }
        }), cc._RF.pop()
    }, {}],
    Formula: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "7609aZz4r9BnZfoMrEAMKsy", "Formula"), cc.Class({
            extends: cc.Component,
            properties: {},
            firstPurchase_gold: function(e, n) {
                return Math.round(e * Math.pow(2.55, n - 1))
            },
            unFirstPurchase_gold: function(e, n, t, o) {
                return Math.round(e * (Math.pow(2, n - 1) * Math.pow(1 + t, o - 1)))
            },
            roleIncome: function(e, n) {
                return e * Math.pow(2, n - 1)
            },
            rateofReturn: function(e, n) {
                return Number((e - n / 11).toFixed(2))
            },
            firstPurchase_diamond: function(e, n) {
                return e + 3 * ((n - 3) * (n - 2) / 2 - 1)
            },
            unfirstPurchase_diamond: function(e, n, t, o) {
                return e + 3 * ((n - 3) * (n - 2) - 1) + (t + 2 * (n - 4)) * (o - 1)
            },
            diamondgain: function(e, n) {
                return e + (n - 4) * (n - 3)
            },
            sell: function(e, n) {
                return e * Math.pow(2, n - 1) * .6
            },
            getDiamond: function(e) {
                return 10 * e
            },
            persecondIncome: function(e) {
                return Math.round(Math.pow(1.8, e - 1) * Math.pow(1.02, e - 1) * .75)
            },
            heroattackfun: function(e) {
                return Math.round(Math.pow(1.85, e - 1) * Math.pow(1.02, e - 1) * 100)
            },
            crystalattackfun: function(e) {
                return Math.round(2 * Math.pow(2, e - 1))
            },
            enemyHP: function(e) {
                return Math.round(Math.pow(2, e - 1) * cc.vv.CG.constant.EnemyHPMultiple)
            },
            enemyGoldCoinReward: function(e) {
                return Math.round(150 * Math.pow(2, e - 1))
            }
        }), cc._RF.pop()
    }, {}],
    Gamemove: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "1872d7gdkROwLOilfMDxkAX", "Gamemove"), cc.Class({
            extends: cc.Component,
            properties: {
                items: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u8f66\u7236\u8282\u70b9",
                    tooltip: "\u8f66\u7236\u8282\u70b9"
                },
                car_SpriteAtlas: {
                    default: null,
                    type: cc.SpriteAtlas,
                    displayName: "\u8f66\u7684\u56fe\u96c6",
                    tooltip: "\u8f66\u7684\u56fe\u96c6"
                },
                mainGame: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u4e3b\u6e38\u620f",
                    tooltip: "\u4e3b\u6e38\u620f"
                },
                sell: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u51fa\u552e",
                    tooltip: "\u51fa\u552e"
                },
                enemyitems: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u602a\u7269\u7236\u8282\u70b9",
                    tooltip: "\u602a\u7269\u7236\u8282\u70b9"
                },
                sellIndication: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u653e\u9010\u63d0\u793a",
                    tooltip: "\u653e\u9010\u63d0\u793a"
                },
                _car_Start: null,
                _car_End: null,
                _carobj: null,
                _parent: null,
                _uIoperatingjs: null,
                _selljs: null,
                _Index: 0
            },
            onLoad: function() {
                cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.first_level, this._uIoperatingjs = this.mainGame.getComponent("uIoperating"), this._selljs = this.sell.getComponent("collider"), this.addTouchEvent(), this.sellIndication.active = !1
            },
            addTouchEvent: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this._TOUCH_START, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this._TOUCH_MOVE, this), this.node.on(cc.Node.EventType.TOUCH_END, this._TOUCH_END, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._TOUCH_CANCEL, this)
            },
            _TOUCH_START: function(e) {
                if (cc.vv.CG.GameInterfaceLevel.currentlevel != cc.vv.CG.GameInterfaceLevel.level.second_level && !cc.vv.CG.isTouchStart && null == this._car_Start && null == this._car_End) {
                    cc.vv.CG.isTouchStart = !0;
                    var n = e.getLocation(),
                        t = this.node.convertToNodeSpaceAR(n);
                    this.getPressitem(n), null != this._car_End && (this._car_Start = this._car_End, this._carobj = this._car_Start.getChildByName("sprite1"), this._carobj.setPosition(cc.v2(0, 0)), this._parent = this._car_Start, this._carobj.parent = cc.find("Canvas"), this._carobj.setPosition(t), this.find_the_same_hero_on_the_field(!0))
                }
            },
            _TOUCH_MOVE: function(e) {
                if (cc.vv.CG.GameInterfaceLevel.currentlevel != cc.vv.CG.GameInterfaceLevel.level.second_level && null != this._carobj && null != this._car_Start && null != this._car_End) {
                    var n = e.getLocation(),
                        t = this.node.convertToNodeSpaceAR(n);
                    this._carobj.setPosition(t)
                }
            },
            _TOUCH_END: function(e) {
                if (cc.vv.CG.GameInterfaceLevel.currentlevel != cc.vv.CG.GameInterfaceLevel.level.second_level) {
                    cc.vv.CG.isTouchStart = !1;
                    var n = e.getLocation(),
                        t = this.node.convertToNodeSpaceAR(n),
                        o = cc.find("Canvas/sprite1");
                    if (this.getlockingEnEmy(n), this.find_the_same_hero_on_the_field(!1), null != this._carobj) {
                        if (null == this._car_Start && null == this._car_End) return this._carobj.parent = null, this._carobj.parent = this._getparent(), void(this._carobj.position = new cc.v2(0, 0));
                        null != o && (null != this._carobj && o.getPosition() == t || (o.parent = this._getparent())), this.getPressitem(n);
                        var i = this._car_Start.getComponent("car"),
                            m = this._car_End.getComponent("car"),
                            y = i.getCarProperty(),
                            a = m.getCarProperty();
                        this._car_Start == this._car_End ? (this.recovery(), this.sellfun(), this._carobj.setPosition(cc.v2(0, 0))) : (this._carobj.setPosition(cc.v2(0, 0)), y && a && y.grade == a.grade ? this.successSyn(y, 1) : this.failureSyn(y, a)), m.setSpriteFrame(m.getCarProperty(), this.car_SpriteAtlas), this._car_Start = null, this._car_End = null, this._carobj = null
                    }
                }
            },
            _TOUCH_CANCEL: function(e) {
                cc.vv.CG.GameInterfaceLevel.currentlevel != cc.vv.CG.GameInterfaceLevel.level.second_level && (cc.vv.CG.isTouchStart = !1, null != this._carobj ? (this._carobj.setPosition(cc.v2(0, 0)), this.recovery()) : cc.log(" _TOUCH_CANCELthis._carobj == null"))
            },
            _getparent: function() {
                for (var e = 0; e < this.items.children.length; e++) {
                    var n = this.items.children[e];
                    if (n.children.length <= 3) return n
                }
            },
            getPressitem: function(e) {
                for (var n = this.items.children, t = 0; t < n.length; t++) {
                    var o = n[t].getComponent("car");
                    !this._iscollide(this.items, n[t], e) || n[t].isheroBox || o.isshowlocked || (this._car_End = n[t])
                }
            },
            getlockingEnEmy: function(e) {
                for (var n = this.enemyitems.children, t = 0, o = 0; o < n.length; o++) {
                    var i = n[o].getComponent("actor");
                    cc.vv.CG.lockingEnEmy = null, i.set_locking_isShow(!1), this._iscollide(this.enemyitems, n[o], e) && i.anim.active && 0 == t && (t = 1, cc.vv.CG.lockingEnEmy = n[o], i.set_locking_isShow(!0))
                }
            },
            _iscollide: function(e, n, t) {
                var o = n.x,
                    i = n.y,
                    m = e.convertToNodeSpaceAR(t).x,
                    y = e.convertToNodeSpaceAR(t).y;
                return !(Math.abs(o - m) > n.getBoundingBox().width / 2 || Math.abs(i - y) > n.getBoundingBox().height / 2)
            },
            recovery: function() {
                this._carobj.parent = this._car_Start
            },
            failureSyn: function(e, n, t) {
                var o = this._car_Start.position;
                this._car_Start.position = this._car_End.position, this._car_End.position = o;
                var i = [this._car_End.zIndex, this._car_Start.zIndex];
                this._car_Start.zIndex = i[0], this._car_End.zIndex = i[1], this._carobj.parent = this._car_Start, !this._car_Start.is_Have_A_Car && e && (this._car_Start.is_Have_A_Car = !0), this._car_End.is_Have_A_Car && !n && cc.vv.CarsMgr.deleteCar(this._parent)
            },
            successSyn: function(e, n) {
                var t = e.grade + n,
                    o = !1;
                if (t > cc.vv.PP.Game_InIt_Setting.carMaxGrade) return this._carobj.parent = this._car_Start, void cc.vv.promptbox.setlabel(cc.vv.CG.Text.FullLevel);
                if (cc.vv.PP.Game_InIt_Setting.cars = this.sort(cc.vv.PP.Game_InIt_Setting.cars, "grade"), cc.vv.PP.Game_InIt_Setting.cars[cc.vv.PP.Game_InIt_Setting.cars.length - 1].grade < t && cc.vv.PP.currentcarMaxGrade < t) {
                    if (cc.vv.PP.currentcarMaxGrade = t, cc.vv.PP.currentcarMaxGrade <= 5 ? cc.vv.PP.currentbuycarMAxGrade = 1 : cc.vv.PP.currentbuycarMAxGrade = cc.vv.PP.currentcarMaxGrade - 4, cc.vv.PP.currentbuycarSuitable = cc.vv.PP.currentbuycarMAxGrade, o = !0, this.setStationunlock(), cc.vv.wxAPI.aldSendEvent("\u5347\u7ea7", {
                            "\u7b49\u7ea7": cc.vv.PP.currentcarMaxGrade
                        }), cc.vv.PP.levelWave = 0, cc.vv.EventMgr.beginnerGuide({
                            nodename: "",
                            isshow: !1
                        }), cc.vv.PP.currentbuycarMAxGrade > this._Index) cc.vv.CarsMgr.getListProperty(cc.vv.PP.currentbuycarMAxGrade).gold = cc.vv.formula.firstPurchase_gold(cc.vv.CG.constant.goldPrice, cc.vv.PP.currentbuycarMAxGrade), this._uIoperatingjs.setbuyglodText(), this._Index++;
                    cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.second_level
                } else o = !1;
                (function(e) {
                    for (var n = e.getComponent("car").getCarProperty(), t = 0; t < cc.vv.PP.Game_InIt_Setting.cars.length; t++)
                        if (n.id == cc.vv.PP.Game_InIt_Setting.cars[t].id) {
                            cc.vv.PP.Game_InIt_Setting.cars.splice(t, 1);
                            break
                        }
                })(this._car_End), cc.vv.PP.Game_InIt_Setting.cars.push(cc.vv.CarsMgr.getCarProperty(cc.vv.PP.Game_InIt_Setting.cars.length + 1, t, t, !1)), cc.vv.CarsMgr.createCar(this._car_End, cc.vv.PP.Game_InIt_Setting.cars[cc.vv.PP.Game_InIt_Setting.cars.length - 1], this.car_SpriteAtlas, !0, o), this._carobj.parent = this._car_Start, cc.vv.CarsMgr.deleteCar(this._car_Start), this.refreshTable()
            },
            refreshTable: function() {
                cc.vv.PP.Game_InIt_Setting.cars = [];
                for (var e = 0; e < this.items.childrenCount; e++) {
                    var n = this.items.children[e].getComponent("car");
                    this.items.children[e].is_Have_A_Car && n.getCarProperty() && cc.vv.PP.Game_InIt_Setting.cars.push(n.getCarProperty())
                }
            },
            setStationunlock: function() {
                for (var e = void 0, n = 0; n < this.items.childrenCount; n++) e = this.items.children[n].getComponent("car"), cc.vv.PP.currentcarMaxGrade < 5 && cc.vv.PP.currentcarMaxGrade >= 3 && n <= 8 ? e.setIsShowlocked(!1) : cc.vv.PP.currentcarMaxGrade >= 5 && e.setIsShowlocked(!1)
            },
            sellfun: function() {
                if (this._carobj.x > -440 && this._carobj.x < -330 && this._carobj.y < -280 && this._carobj.y > -405) {
                    var e = this._car_End.getComponent("car");
                    if (e.getCarProperty().grade < cc.vv.PP.currentcarMaxGrade) {
                        for (var n = 0; n < cc.vv.PP.Game_InIt_Setting.cars.length; n++)
                            if (e.getCarProperty().id == cc.vv.PP.Game_InIt_Setting.cars[n].id) {
                                cc.vv.PP.Game_InIt_Setting.cars.splice(n, 1);
                                break
                            } this._selljs.onCollisionExit(this._car_End)
                    } else cc.vv.promptbox.setlabel(cc.vv.CG.Text.Exile_the_most_senior_hero)
                }
            },
            find_the_same_hero_on_the_field: function(e) {
                var n = void 0;
                e && this._car_Start.is_Have_A_Car && (n = this._car_Start.getComponent("car").getCarProperty().grade);
                for (var t = 0; t < this.items.childrenCount; t++) {
                    var o = this.items.children[t],
                        i = o.getComponent("car");
                    e && this._car_Start != o && !o.isheroBox && o.is_Have_A_Car && !i.isshowlocked ? i.getCarProperty().grade == n && i.setSynthesisShow(!0) : i.setSynthesisShow(!1)
                }
                this.sellIndication.active = e
            },
            sort: function(e, n) {
                for (var t = void 0, o = 0; o < e.length; o++)
                    for (var i = o; i < e.length; i++) e[o][n] > e[i][n] && (t = e[i], e[i] = e[o], e[o] = t);
                return e
            }
        }), cc._RF.pop()
    }, {}],
    HTTP: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "1c053jpMbNGMKsSljRV5R4a", "HTTP");
        e("assert");
        var o = cc.Class({
            statics: {
                sessionId: 0,
                userId: 0,
                url: "https://xyx.t4game.com/ucenter",
                sendRequest: function(e, n, t, i) {
                    var m = cc.loader.getXMLHttpRequest();
                    m.timeout = 5e3;
                    var y = "?";
                    for (var a in n) "?" != y && (y += "&"), y += a + "=" + n[a];
                    null == i && (i = o.url || cc.EEEURL);
                    var c = i + e + encodeURI(y);
                    return console.log("RequestURL:" + c), m.open("GET", c, !0), cc.sys.isNative && m.setRequestHeader("Access-Control-Allow-Origin", "Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8"), m.onreadystatechange = function() {
                        if (4 === m.readyState && m.status >= 200 && m.status < 300) {
                            console.log("http res(" + m.responseText.length + "):" + m.responseText);
                            try {
                                var e = JSON.parse(m.responseText);
                                null !== t && t(e)
                            } catch (e) {
                                throw new Error(e)
                            }
                        }
                    }, m.send(), m
                }
            }
        });
        cc._RF.pop()
    }, {
        assert: 1
    }],
    LY_View_Loading_Scene: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "3ed0bhUyltD7olwapXj5Bla", "LY_View_Loading_Scene");
        e("PolySDK").getLogoIMG;
        cc.Class({
            extends: cc.Component,
            properties: {
                spr_logo: cc.Sprite,
                gotoSceneByName: cc.String
            },
            onLoad: function() {
                var e = this;
                cc.loader.loadRes("logoIngame", cc.SpriteFrame, function(n, t) {
                    n ? cc.log(n) : e.spr_logo.spriteFrame = t
                })
            },
            start: function() {
                this.show_dlg()
            },
            show_dlg: function() {
                this.node.active = !0, this.node.opacity = 0;
                var e = cc.fadeTo(2, 255),
                    n = cc.delayTime(1.5),
                    t = cc.callFunc(function() {
                        console.log("Over !!"), cc.director.loadScene(this.gotoSceneByName)
                    }.bind(this)),
                    o = cc.sequence([e, n, t]);
                this.node.runAction(o)
            }
        }), cc._RF.pop()
    }, {
        PolySDK: "PolySDK"
    }],
    MyPointExtension: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "e1908dhwP5PPYtSNFl3t2aJ", "MyPointExtension");
        var o = parseFloat("1.192092896e-07F"),
            i = i || {};
        i.pNeg = function(e) {
            return cc.v2(-e.x, -e.y)
        }, i.pAdd = function(e, n) {
            return cc.v2(e.x + n.x, e.y + n.y)
        }, i.pSub = function(e, n) {
            return cc.v2(e.x - n.x, e.y - n.y)
        }, i.pMult = function(e, n) {
            return cc.v2(e.x * n, e.y * n)
        }, i.pMidpoint = function(e, n) {
            return i.pMult(i.pAdd(e, n), .5)
        }, i.pDot = function(e, n) {
            return e.x * n.x + e.y * n.y
        }, i.pCross = function(e, n) {
            return e.x * n.y - e.y * n.x
        }, i.pPerp = function(e) {
            return cc.v2(-e.y, e.x)
        }, i.pRPerp = function(e) {
            return cc.v2(e.y, -e.x)
        }, i.pProject = function(e, n) {
            return i.pMult(n, i.pDot(e, n) / i.pDot(n, n))
        }, i.pLengthSQ = function(e) {
            return i.pDot(e, e)
        }, i.pDistanceSQ = function(e, n) {
            return i.pLengthSQ(i.pSub(e, n))
        }, i.pLength = function(e) {
            return Math.sqrt(i.pLengthSQ(e))
        }, i.pDistance = function(e, n) {
            return i.pLength(i.pSub(e, n))
        }, i.pNormalize = function(e) {
            var n = i.pLength(e);
            return 0 === n ? cc.v2(e) : i.pMult(e, 1 / n)
        }, i.pForAngle = function(e) {
            return cc.v2(Math.cos(e), Math.sin(e))
        }, i.pToAngle = function(e) {
            return Math.atan2(e.y, e.x)
        }, i.clampf = function(e, n, t) {
            if (n > t) {
                var o = n;
                n = t, t = o
            }
            return e < n ? n : e < t ? e : t
        }, i.clamp01 = function(e) {
            return e < 0 ? 0 : e < 1 ? e : 1
        }, i.pClamp = function(e, n, t) {
            return cc.v2(i.clampf(e.x, n.x, t.x), i.clampf(e.y, n.y, t.y))
        }, i.pFromSize = function(e) {
            return cc.v2(e.width, e.height)
        }, i.pCompOp = function(e, n) {
            return cc.v2(n(e.x), n(e.y))
        }, i.pLerp = function(e, n, t) {
            return i.pAdd(i.pMult(e, 1 - t), i.pMult(n, t))
        }, i.pFuzzyEqual = function(e, n, t) {
            return e.x - t <= n.x && n.x <= e.x + t && e.y - t <= n.y && n.y <= e.y + t
        }, i.pCompMult = function(e, n) {
            return cc.v2(e.x * n.x, e.y * n.y)
        }, i.pAngleSigned = function(e, n) {
            var t = i.pNormalize(e),
                m = i.pNormalize(n),
                y = Math.atan2(t.x * m.y - t.y * m.x, i.pDot(t, m));
            return Math.abs(y) < o ? 0 : y
        }, i.pAngle = function(e, n) {
            var t = Math.acos(i.pDot(i.pNormalize(e), i.pNormalize(n)));
            return Math.abs(t) < o ? 0 : t
        }, i.pRotateByAngle = function(e, n, t) {
            var o = i.pSub(e, n),
                m = Math.cos(t),
                y = Math.sin(t),
                a = o.x;
            return o.x = a * m - o.y * y + n.x, o.y = a * y + o.y * m + n.y, o
        }, i.pLineIntersect = function(e, n, t, o, i) {
            if (e.x === n.x && e.y === n.y || t.x === o.x && t.y === o.y) return !1;
            var m = n.x - e.x,
                y = n.y - e.y,
                a = o.x - t.x,
                c = o.y - t.y,
                r = e.x - t.x,
                s = e.y - t.y,
                d = c * m - a * y;
            return i.x = a * s - c * r, i.y = m * s - y * r, 0 === d ? 0 === i.x || 0 === i.y : (i.x = i.x / d, i.y = i.y / d, !0)
        }, i.pSegmentIntersect = function(e, n, t, o) {
            var m = cc.v2(0, 0);
            return !!(i.pLineIntersect(e, n, t, o, m) && m.x >= 0 && m.x <= 1 && m.y >= 0 && m.y <= 1)
        }, i.pIntersectPoint = function(e, n, t, o) {
            var m = cc.v2(0, 0);
            if (i.pLineIntersect(e, n, t, o, m)) {
                var y = cc.v2(0, 0);
                return y.x = e.x + m.x * (n.x - e.x), y.y = e.y + m.x * (n.y - e.y), y
            }
            return cc.v2(0, 0)
        }, i.pSameAs = function(e, n) {
            return null != e && null != n && (e.x === n.x && e.y === n.y)
        }, i.pZeroIn = function(e) {
            e.x = 0, e.y = 0
        }, i.pIn = function(e, n) {
            e.x = n.x, e.y = n.y
        }, i.pMultIn = function(e, n) {
            e.x *= n, e.y *= n
        }, i.pSubIn = function(e, n) {
            e.x -= n.x, e.y -= n.y
        }, i.pAddIn = function(e, n) {
            e.x += n.x, e.y += n.y
        }, i.pNormalizeIn = function(e) {
            i.pMultIn(e, 1 / Math.sqrt(e.x * e.x + e.y * e.y))
        }, n.exports = i, cc._RF.pop()
    }, {}],
    PolySDK: [function(e, n, t) {
        "use strict";
        var o;

        function i(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }
        cc._RF.push(n, "562a502m4ZK0b7RNzh0fr1p", "PolySDK");
        var m = (i(o = {
                sdk_key_tt: "tt",
                sdk_key_qq: "qq",
                sdk_key_vivo: "vivo",
                sdk_key_xiaomi: "xiaomi",
                sdk_key_baidu: "baidu",
                sdk_key_oppo: "oppo",
                sdk_key_weixin: "weixin",
                sdk_key_jikewan: "jikewan",
                sdk_key_qtt: "qtt",
                sdk_key_4399: "4399",
                sdk_key_ios: "ios",
                sdk_key_android: "android",
                sdk_key_wangmai: "wangmai",
                sdk_key_juzhang: "juzhang",
                sdk_key_h5: "h5",
                sdk_key_360: "sdk360",
                sdk_key_yungao: "yungao",
                sdk_key_android_vivo: "android_vivo",
                sdk_key_android_oppo: "android_oppo",
                sdk_key_android_360: "android_360",
                sdk_key_android_yyb: "android_yyb",
                sdk_key_android_tap: "android_tap",
                runSDK: "4399",
                game_id: 89,
                appid: "100060191",
                shareTitle: "Game này quá khó",
                shareImgUrl: "",
                userLoginUrl: "https://xcx.api.chenxinghuyu.com/game/login",
                failLoginUrl: "https://xcx.api.chenxinghuyu.com/game/faillogin",
                videopushUrl: "https://xcx.api.chenxinghuyu.com/game/videopush",
                bannerpushUrl: "https://xcx.api.chenxinghuyu.com/game/bannerpush",
                screenimgUrl: "https://xcx.api.chenxinghuyu.com/game/screenimg",
                userLoginData: {
                    session_key: null,
                    open_id: null,
                    display_id: null
                },
                default_video_id: "000000",
                default_banner_id: "000000",
                HTTPtoken: "fdsfwe45teadfet8adf3TdgD8",
                ui_Type: {
                    recorderUI: "0",
                    shareUI: "1",
                    videoUI: "2"
                },
                failCode: {
                    netErr: 7400,
                    userRefusedTo: 7401,
                    unknown: 7402
                },
                localStorageUserkeys: ["display_id", "avatarUrl", "nickName", "gender", "age", "city", "province", "country", "language", "unionid", "id", "openid", "location", "constellation", "phoneNum"],
                tt: {
                    banner_id: "7d2mlek98gr17hwldf",
                    video_id: ["jgdb2be6fi718ei636"],
                    type: 10
                },
                weixin: {
                    banner_id: "",
                    video_id: [],
                    type: 0
                },
                qq: {
                    banner_id: "",
                    video_id: [""],
                    type: 13
                },
                xiaomi: {
                    banner_id: "",
                    video_id: [""],
                    type: 12
                },
                baidu: {
                    banner_id: "",
                    video_id: [""],
                    appSid: "baidu_appSid",
                    type: 7
                },
                vivo: {
                    banner_id: "",
                    video_id: [""],
                    native_id: [],
                    type: 5
                },
                oppo: {
                    banner_id: "",
                    video_id: [""],
                    AppID: "",
                    type: 6
                },
                jikewan: {
                    banner_id: "$jikewan_banner_id",
                    banner_adId: "$jikewan_adId",
                    screenOrientation: "$jikewan_screenOrientation",
                    video_adId: [""],
                    video_id: [""],
                    type: 9
                },
                ios: {
                    banner_id: "938448200",
                    video_id: ["938448310", "938448470", "938448494"],
                    interface_path: "JuHeMobileSDK",
                    type: 16
                },
                android: {
                    banner_id: "938448089",
                    video_id: ["938448190", "938448059", "938448664", "939511260"],
                    interface_path: "com/xm/demo/H5Interface",
                    type: 15
                },
                wangmai: {
                    type: 17
                },
                juzhang: {
                    clientId: "$juzhang_clientId",
                    clientSecret: "$juzhang_clientSecret",
                    adType: {
                        banner_Ad: "1",
                        openS_Ad: "2",
                        vertical_Ad: "3",
                        horizontal_Ad: "4",
                        allS_vertical_Ad: "5",
                        allS_horizontal_Ad: "6",
                        insert_Ad: "7"
                    },
                    type: 18
                },
                sdk360: {
                    banner_id: "$sdk360_banner_id",
                    adIntervals: 30,
                    video_id: ["sdk360_id1", "sdk360_id2", "sdk360_id3"],
                    type: 14
                },
                yungao: {
                    banner_id: "",
                    video_id: [""],
                    interface_path: "com/xm/demo/H5Interface",
                    type: 19
                },
                android_vivo: {
                    banner_id: "U64J06",
                    video_id: ["U6480J"],
                    interface_path: "com/xm/demo/H5Interface",
                    type: 20
                },
                android_oppo: {
                    banner_id: "U64J06",
                    video_id: ["U6480J"],
                    interface_path: "com/xm/demo/H5Interface",
                    type: 21
                },
                android_360: {
                    banner_id: "U64J06",
                    video_id: ["U6480J"],
                    interface_path: "com/xm/demo/H5Interface",
                    type: 22
                },
                android_yyb: {
                    banner_id: "U64J06",
                    video_id: ["U6480J"],
                    interface_path: "com/xm/demo/H5Interface",
                    type: 23
                }
            }, "android_yyb", {
                banner_id: "U64J06",
                video_id: ["U6480J"],
                interface_path: "com/xm/demo/H5Interface",
                type: 24
            }), i(o, "android_tap", {
                banner_id: "U64J06",
                video_id: ["U6480J"],
                interface_path: "com/xm/demo/H5Interface",
                type: 25
            }), o),
            y = function() {
                this.sendRequest = function(e, n, t) {
                    if ("undefined" == typeof cc) throw new Error("cc is undefined \u8bf7\u68c0\u67e5\u5f53\u524d\u8fd0\u884c\u73af\u5883 \u662f\u5426\u662f CocosCreator");
                    var o = cc.loader.getXMLHttpRequest();
                    o.timeout = 5e3;
                    var i = "?";
                    for (var m in n) "?" != i && (i += "&"), i += m + "=" + n[m];
                    var y = e + encodeURI(i);
                    return console.log("RequestURL:" + y), o.open("GET", y, !0), cc.sys.isNative && o.setRequestHeader("Access-Control-Allow-Origin", "Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8"), o.onreadystatechange = function() {
                        if (4 === o.readyState && o.status >= 200 && o.status < 300) {
                            console.log("http res(" + o.responseText.length + "):" + o.responseText);
                            try {
                                var e = JSON.parse(o.responseText);
                                t && t(e)
                            } catch (e) {
                                throw console.log("onreadystatechange 1 err = " + e), t && t(null), new Error(e)
                            }
                        }
                    }, o.onerror = function(e) {
                        t && t(null)
                    }, o.send(), o
                }, this.crypto = function() {
                    var e = 0,
                        n = "",
                        t = 8;

                    function o(e) {
                        return _(i(u(e), e.length * t))
                    }

                    function i(e, n) {
                        e[n >> 5] |= 128 << n % 32, e[14 + (n + 64 >>> 9 << 4)] = n;
                        for (var t = 1732584193, o = -271733879, i = -1732584194, m = 271733878, s = 0; s < e.length; s += 16) {
                            var l = t,
                                u = o,
                                v = i,
                                _ = m;
                            o = r(o = r(o = r(o = r(o = c(o = c(o = c(o = c(o = a(o = a(o = a(o = a(o = y(o = y(o = y(o = y(o, i = y(i, m = y(m, t = y(t, o, i, m, e[s + 0], 7, -680876936), o, i, e[s + 1], 12, -389564586), t, o, e[s + 2], 17, 606105819), m, t, e[s + 3], 22, -1044525330), i = y(i, m = y(m, t = y(t, o, i, m, e[s + 4], 7, -176418897), o, i, e[s + 5], 12, 1200080426), t, o, e[s + 6], 17, -1473231341), m, t, e[s + 7], 22, -45705983), i = y(i, m = y(m, t = y(t, o, i, m, e[s + 8], 7, 1770035416), o, i, e[s + 9], 12, -1958414417), t, o, e[s + 10], 17, -42063), m, t, e[s + 11], 22, -1990404162), i = y(i, m = y(m, t = y(t, o, i, m, e[s + 12], 7, 1804603682), o, i, e[s + 13], 12, -40341101), t, o, e[s + 14], 17, -1502002290), m, t, e[s + 15], 22, 1236535329), i = a(i, m = a(m, t = a(t, o, i, m, e[s + 1], 5, -165796510), o, i, e[s + 6], 9, -1069501632), t, o, e[s + 11], 14, 643717713), m, t, e[s + 0], 20, -373897302), i = a(i, m = a(m, t = a(t, o, i, m, e[s + 5], 5, -701558691), o, i, e[s + 10], 9, 38016083), t, o, e[s + 15], 14, -660478335), m, t, e[s + 4], 20, -405537848), i = a(i, m = a(m, t = a(t, o, i, m, e[s + 9], 5, 568446438), o, i, e[s + 14], 9, -1019803690), t, o, e[s + 3], 14, -187363961), m, t, e[s + 8], 20, 1163531501), i = a(i, m = a(m, t = a(t, o, i, m, e[s + 13], 5, -1444681467), o, i, e[s + 2], 9, -51403784), t, o, e[s + 7], 14, 1735328473), m, t, e[s + 12], 20, -1926607734), i = c(i, m = c(m, t = c(t, o, i, m, e[s + 5], 4, -378558), o, i, e[s + 8], 11, -2022574463), t, o, e[s + 11], 16, 1839030562), m, t, e[s + 14], 23, -35309556), i = c(i, m = c(m, t = c(t, o, i, m, e[s + 1], 4, -1530992060), o, i, e[s + 4], 11, 1272893353), t, o, e[s + 7], 16, -155497632), m, t, e[s + 10], 23, -1094730640), i = c(i, m = c(m, t = c(t, o, i, m, e[s + 13], 4, 681279174), o, i, e[s + 0], 11, -358537222), t, o, e[s + 3], 16, -722521979), m, t, e[s + 6], 23, 76029189), i = c(i, m = c(m, t = c(t, o, i, m, e[s + 9], 4, -640364487), o, i, e[s + 12], 11, -421815835), t, o, e[s + 15], 16, 530742520), m, t, e[s + 2], 23, -995338651), i = r(i, m = r(m, t = r(t, o, i, m, e[s + 0], 6, -198630844), o, i, e[s + 7], 10, 1126891415), t, o, e[s + 14], 15, -1416354905), m, t, e[s + 5], 21, -57434055), i = r(i, m = r(m, t = r(t, o, i, m, e[s + 12], 6, 1700485571), o, i, e[s + 3], 10, -1894986606), t, o, e[s + 10], 15, -1051523), m, t, e[s + 1], 21, -2054922799), i = r(i, m = r(m, t = r(t, o, i, m, e[s + 8], 6, 1873313359), o, i, e[s + 15], 10, -30611744), t, o, e[s + 6], 15, -1560198380), m, t, e[s + 13], 21, 1309151649), i = r(i, m = r(m, t = r(t, o, i, m, e[s + 4], 6, -145523070), o, i, e[s + 11], 10, -1120210379), t, o, e[s + 2], 15, 718787259), m, t, e[s + 9], 21, -343485551), t = d(t, l), o = d(o, u), i = d(i, v), m = d(m, _)
                        }
                        return Array(t, o, i, m)
                    }

                    function m(e, n, t, o, i, m) {
                        return d(l(d(d(n, e), d(o, m)), i), t)
                    }

                    function y(e, n, t, o, i, y, a) {
                        return m(n & t | ~n & o, e, n, i, y, a)
                    }

                    function a(e, n, t, o, i, y, a) {
                        return m(n & o | t & ~o, e, n, i, y, a)
                    }

                    function c(e, n, t, o, i, y, a) {
                        return m(n ^ t ^ o, e, n, i, y, a)
                    }

                    function r(e, n, t, o, i, y, a) {
                        return m(t ^ (n | ~o), e, n, i, y, a)
                    }

                    function s(e, n) {
                        var o = u(e);
                        o.length > 16 && (o = i(o, e.length * t));
                        for (var m = Array(16), y = Array(16), a = 0; a < 16; a++) m[a] = 909522486 ^ o[a], y[a] = 1549556828 ^ o[a];
                        var c = i(m.concat(u(n)), 512 + n.length * t);
                        return i(y.concat(c), 640)
                    }

                    function d(e, n) {
                        var t = (65535 & e) + (65535 & n);
                        return (e >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t
                    }

                    function l(e, n) {
                        return e << n | e >>> 32 - n
                    }

                    function u(e) {
                        for (var n = Array(), o = (1 << t) - 1, i = 0; i < e.length * t; i += t) n[i >> 5] |= (e.charCodeAt(i / t) & o) << i % 32;
                        return n
                    }

                    function v(e) {
                        for (var n = "", o = (1 << t) - 1, i = 0; i < 32 * e.length; i += t) n += String.fromCharCode(e[i >> 5] >>> i % 32 & o);
                        return n
                    }

                    function _(n) {
                        for (var t = e ? "0123456789ABCDEF" : "0123456789abcdef", o = "", i = 0; i < 4 * n.length; i++) o += t.charAt(n[i >> 2] >> i % 4 * 8 + 4 & 15) + t.charAt(n[i >> 2] >> i % 4 * 8 & 15);
                        return o
                    }

                    function p(e) {
                        for (var t = "", o = 0; o < 4 * e.length; o += 3)
                            for (var i = (e[o >> 2] >> o % 4 * 8 & 255) << 16 | (e[o + 1 >> 2] >> (o + 1) % 4 * 8 & 255) << 8 | e[o + 2 >> 2] >> (o + 2) % 4 * 8 & 255, m = 0; m < 4; m++) 8 * o + 6 * m > 32 * e.length ? t += n : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 6 * (3 - m) & 63);
                        return t
                    }
                    return {
                        hex_md5: o,
                        b64_md5: function(e) {
                            return p(i(u(e), e.length * t))
                        },
                        str_md5: function(e) {
                            return v(i(u(e), e.length * t))
                        },
                        hex_hmac_md5: function(e, n) {
                            return _(s(e, n))
                        },
                        b64_hmac_md5: function(e, n) {
                            return p(s(e, n))
                        },
                        str_hmac_md5: function(e, n) {
                            return v(s(e, n))
                        }
                    }
                }
            },
            a = new y,
            c = function() {
                var e;
                return function() {
                    return e || (this._vivo_islogin = !1, this._xiaomi_islogin = !1, this._baidu_islogin = !1, this._oppo_islogin = !1, this._tt_islogin = !1, this._qq_islogin = !1, this._weixin_islogin = !1, this._default_islogin = !1, this._wangmai_islogin = !1, this._qh_islogin = !1, this.login = function(e, n) {
                        switch (console.log("LoginAuth start runSDK = " + m.runSDK + "  args =" + e), m.runSDK) {
                            case m.sdk_key_qq:
                                if ("undefined" == typeof qq) return void console.log("QQ qq is undefined");
                                this.qq_login(e, n);
                                break;
                            case m.sdk_key_tt:
                                if ("undefined" == typeof tt) return void console.log("TouTiao tt is undefined");
                                this.tt_login(e, n);
                                break;
                            case m.sdk_key_vivo:
                                if ("undefined" == typeof qg) return void console.log("vivo qg is undefined");
                                this.vivo_login(e, n);
                                break;
                            case m.sdk_key_xiaomi:
                                if ("undefined" == typeof qg) return void console.log("xiaomi qg is undefined");
                                this.xiaomi_login(e, n);
                                break;
                            case m.sdk_key_baidu:
                                if ("undefined" == typeof swan) return void console.log("baidu swan is undefined");
                                this.baidu_login(e, n);
                                break;
                            case m.sdk_key_oppo:
                                if ("undefined" == typeof qg) return void console.log("oppo qg is undefined");
                                this.oppo_login(e, n);
                                break;
                            case m.sdk_key_weixin:
                                if ("undefined" == typeof wx) return void console.log("weixin wx is undefined");
                                this.weixin_login(e, n);
                                break;
                            case m.sdk_key_wangmai:
                                if ("undefined" == typeof WMAds) return void console.log("\u65fa\u8109 WMAds is undefined");
                                this.wangmai_login(e, n);
                                break;
                            case m.sdk_key_juzhang:
                                this.juzhang_login(e, n);
                                break;
                            case m.sdk_key_360:
                                if ("undefined" == typeof qh) return void console.log("360 qh is undefined");
                                this.sdk360_login(e, n);
                                break;
                            default:
                                console.log(m.runSDK + " is not undefined By LoginAuth")
                        }
                    }, this.tt_login = function(e, n) {
                        var t = this;

                        function o(e, n) {
                            "undefined" != typeof tt && (t._tt_islogin = !0, tt.login({
                                force: e,
                                success: function(e) {
                                    console.log("touTiao \u540e\u7aef\u6388\u6743 \u552f\u4e00\u6807\u8bc6 code = " + e.code), e.code ? (console.log("\u767b\u5f55\u7528\u6237\u4fe1\u606f\uff1a" + JSON.stringify(e)), t.getUserDisplayId(e.code)) : (t.default_login(), console.log("\u767b\u5f55\u7528\u6237\u4fe1\u606f\uff1a" + JSON.stringify(e)))
                                },
                                fail: function(e) {
                                    console.log("\u8c03\u7528\u767b\u5f55\u5931\u8d25 = " + JSON.stringify(e)), t.sendLoginfailMsg(e)
                                }
                            }))
                        }

                        function i() {
                            tt.getSetting({
                                success: function(e) {
                                    console.log("scope.userInfo = " + e.authSetting["scope.userInfo"]), e.authSetting["scope.userInfo"] || tt.getUserInfo({
                                        success: function(e) {
                                            console.log("getUserInfo success data = ", JSON.stringify(e)), t.setlocalUserInfo({
                                                avatarUrl: e.userInfo.avatarUrl,
                                                nickName: e.userInfo.nickName,
                                                gender: e.userInfo.gender,
                                                city: e.userInfo.city,
                                                province: e.userInfo.province,
                                                country: e.userInfo.country,
                                                language: e.userInfo.language
                                            })
                                        },
                                        fail: function(e) {
                                            console.log("getUserInfo\u8c03\u7528\u5931\u8d25 = " + JSON.stringify(e))
                                        }
                                    })
                                },
                                fail: function() {
                                    console.log("getSetting   fail")
                                }
                            })
                        }
                        t._tt_islogin || function(e) {
                            "undefined" != typeof tt && tt.checkSession({
                                success: function(n) {
                                    o(!1), i(), "undefined" != typeof tt && (tt.showShareMenu({
                                        withShareTicket: !0
                                    }), t.launchOption = tt.getLaunchOptionsSync(), tt.onShow(function(e) {
                                        console.log("\u56de\u5230\u524d\u53f0onShow"), console.log(e), 1044 == t.launchOption.scene ? console.log(" \u6253\u5f00\u7fa4\u6392\u884c") : 1044 == e.scene || (1007 == t.launchOption.scene ? (console.log(" \u5206\u4eab\u597d\u53cb\u5f00\u542f"), console.log("\u5206\u4eab\u597d\u53cb\u5f00\u542f" + t.launchOption.query)) : 1007 == e.scene && (console.log(" \u5206\u4eab\u597d\u53cb\u5f00\u542f"), console.log("\u5206\u4eab\u597d\u53cb\u5f00\u542f" + e.query)))
                                    })), e && e(!0)
                                },
                                fail: function() {
                                    console.log("\u8c03\u7528\u767b\u5f55\u548c\u6388\u6743"), o(!1), i(), e && e(!1)
                                }
                            })
                        }(function(e) {
                            n && n(e)
                        })
                    }, this.qq_login = function(e, n) {
                        var t = this;

                        function o(e) {
                            t._qq_islogin = !0, qq.login({
                                success: function(n) {
                                    n.code ? (console.log("qq \u540e\u7aef\u6388\u6743 \u552f\u4e00\u6807\u8bc6 code = " + n.code), t.getUserDisplayId(n.code), i(function() {
                                        e && e(!0)
                                    })) : (console.log("\u8c03\u7528\u767b\u5f55\u5931\u8d25 = " + JSON.stringify(n)), t.sendLoginfailMsg(n), e && e(!1))
                                }
                            })
                        }

                        function i(e) {
                            qq.getUserInfo({
                                success: function(n) {
                                    var o = n.userInfo;
                                    console.log("getUserInfo success data = ", JSON.stringify(o)), t.setlocalUserInfo({
                                        avatarUrl: n.userInfo.avatarUrl,
                                        nickName: n.userInfo.nickName,
                                        gender: n.userInfo.gender,
                                        city: n.userInfo.city,
                                        province: n.userInfo.province,
                                        country: n.userInfo.country,
                                        language: n.userInfo.language
                                    }), e && e()
                                },
                                fail: function(e) {
                                    reject(e), console.log("\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25\uff01err = " + JSON.stringify(err))
                                }
                            })
                        }

                        function y() {
                            var e = cc.view.getVisibleSize().width,
                                n = cc.view.getVisibleSize().height;
                            t.systemInfo = qq.getSystemInfoSync();
                            var o = cc.size(e + .1, n + .1),
                                i = cc.view.getFrameSize(),
                                m = cc.director.getWinSize(),
                                y = o.width / m.width * i.width,
                                a = o.height / m.height * i.height;
                            console.log("left: ", 0), console.log("top: ", 0), console.log("width: ", y), console.log("height: ", a);
                            var c = qq.createUserInfoButton({
                                type: "image",
                                image: "",
                                style: {
                                    left: 0,
                                    top: 0,
                                    width: y,
                                    height: a
                                }
                            });
                            return console.log("\u663e\u793a\u6309\u94ae"), c
                        }

                        function a(e) {
                            qq.getSetting({
                                success: function(n) {
                                    n.authSetting["scope.userInfo"] ? e && e(0) : (t.infoButton = y(), t.infoButton.show(), c(function(n) {
                                        e && e(1)
                                    }))
                                },
                                fail: function() {
                                    console.log("getSetting   fail"), e && e(-1)
                                }
                            })
                        }

                        function c(e) {
                            t.infoButton.onTap(function(n) {
                                console.log("button ontap:", n), t.infoButton.hide(), "operateWXData:ok" == n.errMsg || "getUserInfo:ok" == n.errMsg ? n.rawData && (JSON.stringify(cc.sys.localStorage.setItem("qqUserInfo", n.userInfo)), e && e(!0)) : (t.sendLoginfailMsg(n, m.failCode.userRefusedTo), e && e(!1))
                            }.bind(t))
                        }
                        t._qq_islogin || function(e) {
                            qq.checkSession({
                                success: function() {
                                    console.log("\u68c0\u67e5\u767b\u9646\u6210\u529f checkSession   success"), e && e(!0)
                                },
                                fail: function() {
                                    console.log("\u68c0\u67e5\u767b\u9646\u5931\u8d25 checkSession   fail"), e && e(!1)
                                }
                            })
                        }(function(e) {
                            e ? o(function(e) {
                                n && n(e)
                            }) : a(function(e) {
                                o(function(e) {
                                    n && n(e)
                                })
                            })
                        })
                    }, this.vivo_login = function(e, n) {
                        var t = this;
                        t._vivo_islogin || "undefined" != typeof qg && (t._vivo_islogin = !0, qg.authorize({
                            type: "token",
                            success: function(e) {
                                console.log("vivo \u524d\u7aef\u6388\u6743 \u552f\u4e00\u6807\u8bc6 accessToken = " + e.accessToken), t.getUserDisplayId(e.accessToken), qg.getProfile({
                                    token: e.accessToken,
                                    success: function(e) {
                                        var o = JSON.stringify(e);
                                        console.log("getUserInfo success data = ", JSON.stringify(o)), t.setlocalUserInfo({
                                            avatarUrl: o.avatar,
                                            nickName: o.nickname,
                                            openid: o.openid,
                                            id: o.id,
                                            unionid: o.unionid
                                        }), n && n(!0)
                                    },
                                    fail: function(e, t) {
                                        try {
                                            console.log("getProfile  fail = " + JSON.stringify(e))
                                        } catch (e) {}
                                        n && n(!1)
                                    }
                                })
                            },
                            fail: function(e, o) {
                                console.log("\u8c03\u7528\u767b\u5f55\u5931\u8d25 = " + JSON.stringify(e)), n && n(!1), t.sendLoginfailMsg(e)
                            }
                        }))
                    }, this.oppo_login = function(e, n) {
                        var t = this;
                        t._oppo_islogin || function(e) {
                            t._oppo_islogin = !0, qg.login({
                                success: function(n) {
                                    var o = JSON.stringify(n.data);
                                    console.log("oppo \u767b\u9646\u6210\u529f \uff1a" + o), t.setlocalUserInfo({
                                        id: n.data.uid,
                                        avatarUrl: n.data.avatar,
                                        nickName: n.data.nickName,
                                        gender: n.data.sex,
                                        phoneNum: n.data.phoneNum,
                                        age: n.data.age
                                    }), qg.reportMonitor("game_scene", 0), e && e(n.data)
                                },
                                fail: function(n) {
                                    console.log("\u8c03\u7528\u767b\u5f55\u5931\u8d25 = " + JSON.stringify(n)), t.sendLoginfailMsg(n), console.log(JSON.stringify(n)), e && e(!1)
                                }
                            })
                        }(function(e) {
                            e && (console.log("oppo \u524d\u7aef\u6388\u6743 \u552f\u4e00\u6807\u8bc6 token = " + e.token), t.getUserDisplayId(e.token))
                        })
                    }, this.xiaomi_login = function(e, n) {
                        var t = this;
                        this._xiaomi_islogin || (qg.onUserInfoChange(function(e) {
                            console.log("onUserInfoChange"), console.log(e.userInfo.nickName), console.log(e.userInfo.avatarUrl), console.log(e.userInfo.gender)
                        }), qg.offUserInfoChange(function() {
                            console.log("offUserInfoChange")
                        }), function(e) {
                            t._xiaomi_islogin = !0, qg.login({
                                success: function(n) {
                                    console.log("\u5c0f\u7c73\u5feb\u73a9 login success" + JSON.stringify(n)), console.log("xiaomi \u524d\u7aef\u6388\u6743 \u552f\u4e00\u6807\u8bc6 token = " + n.token + "  session = " + n.session), t.getUserDisplayId(n.token, n.session), e && e(!0)
                                },
                                fail: function(n) {
                                    console.log("\u8c03\u7528\u767b\u5f55\u5931\u8d25 = " + JSON.stringify(n)), t.sendLoginfailMsg(n), e && e(!1)
                                }
                            })
                        }(function() {
                            qg.getUserInfo({
                                success: function(e) {
                                    console.log("getUserInfo success data = ", JSON.stringify(e.userInfo)), t.setlocalUserInfo({
                                        avatarUrl: e.userInfo.avatarUrl,
                                        nickName: e.userInfo.nickName,
                                        gender: e.userInfo.gender
                                    })
                                },
                                fail: function() {
                                    console.log("user reject!")
                                },
                                complete: function(e) {
                                    console.log("get userInfo complete")
                                }
                            })
                        }))
                    }, this.baidu_login = function(e, n) {
                        var t = this;

                        function o(e) {
                            t._baidu_islogin = !0, console.log("login()"), swan.login({
                                success: function(n) {
                                    console.log("\u767b\u5f55\u6210\u529f", n), console.log("baidu  \u540e\u7aef\u6388\u6743 \u552f\u4e00\u6807\u8bc6 code = " + n.code), e && e(n)
                                },
                                fail: function(n) {
                                    console.log("\u8c03\u7528\u767b\u5f55\u5931\u8d25 = " + JSON.stringify(res)), t.sendLoginfailMsg(n), e && e(!1)
                                },
                                complete: function(n) {
                                    console.log("login complete = " + JSON.stringify(n)), 10004 == n.errCode && e && e(!1)
                                }
                            })
                        }

                        function i(e) {
                            console.log("getSetting"), swan.authorize({
                                scope: "scope.userInfo",
                                success: function(n) {
                                    swan.getSetting({
                                        success: function(n) {
                                            console.log("getSetting \u6210\u529f = " + JSON.stringify(n)), e && e(n.authSetting["scope.userInfo"])
                                        },
                                        fail: function(n) {
                                            console.log(n), console.log("getSetting \u5931\u8d25 = " + JSON.stringify(n)), e && e(!1)
                                        },
                                        complete: function(e) {
                                            console.log("getSetting complete = " + JSON.stringify(e))
                                        }
                                    })
                                },
                                fail: function(n) {
                                    console.log(n), console.log("authorize \u5931\u8d25 = " + JSON.stringify(n)), e && e(!1)
                                },
                                complete: function(e) {
                                    console.log("authorize complete = " + JSON.stringify(e))
                                }
                            })
                        }

                        function m(e) {
                            swan.getSwanId({
                                success: function(n) {
                                    console.log("swanid = " + n.data.swanid), e && e(n.data.swanid)
                                },
                                fail: function(n) {
                                    console.log("\u83b7\u53d6 getSwanId \u5931\u8d25 ! " + n), e && e(!1)
                                }
                            })
                        }

                        function y() {
                            m(function(e) {
                                swan.getUserInfo({
                                    swanIdList: ["selfSwanId", e],
                                    success: function(e) {
                                        console.log("getUserInfo success data = ", JSON.stringify(e.userInfo)), t.setlocalUserInfo({
                                            avatarUrl: e.userInfo.avatarUrl,
                                            nickName: e.userInfo.nickName,
                                            gender: e.userInfo.gender
                                        })
                                    },
                                    fail: function(e) {
                                        console.log("getUserInfo fail = " + e)
                                    },
                                    complete: function(e) {
                                        t.sendLoginMiNiFramework(), console.log("getUserInfo complete = " + e)
                                    }
                                })
                            })
                        }
                        t._baidu_islogin || (function(e) {
                            swan.checkSession({
                                success: function() {
                                    e && e(!0), console.log("\u767b\u5f55\u6001\u6709\u6548")
                                },
                                fail: function() {
                                    e && e(!0), console.log("\u767b\u5f55\u6001\u65e0\u6548")
                                }
                            })
                        }(), function(e) {
                            try {
                                var n = swan.isLoginSync();
                                console.log("isLoginSync", n.isLogin), e && e(n.isLogin)
                            } catch (n) {
                                console.log("error", n), e && e(!1)
                            }
                        }(function(e) {
                            o(function(e) {
                                var n = e ? e.code : null;
                                t.getUserDisplayId(n, null, function(e) {
                                    console.log("iswin = " + e), e && i(function(e) {
                                        e ? y() : (console.log("isUserInfo : " + e), t.sendLoginMiNiFramework())
                                    })
                                })
                            })
                        }))
                    }, this.weixin_login = function(e, n) {
                        var t = this;

                        function o(e) {
                            t._weixin_islogin = !0, wx.login({
                                success: function(n) {
                                    n.code ? (console.log("res.code = " + n.code), t.getUserDisplayId(n.code), i(function() {
                                        e && e(!0)
                                    })) : (console.log("\u8c03\u7528\u767b\u5f55\u5931\u8d25 = " + JSON.stringify(n)), e && e(!1))
                                }
                            })
                        }

                        function i(e) {
                            wx.getUserInfo({
                                success: function(n) {
                                    var o = n.userInfo;
                                    console.log("getUserInfo success data = ", JSON.stringify(o)), t.setlocalUserInfo({
                                        avatarUrl: n.userInfo.avatarUrl,
                                        nickName: n.userInfo.nickName,
                                        gender: n.userInfo.gender,
                                        city: n.userInfo.city,
                                        province: n.userInfo.province,
                                        country: n.userInfo.country,
                                        language: n.userInfo.language
                                    }), e && e()
                                }
                            })
                        }

                        function y() {
                            var e = cc.view.getVisibleSize().width,
                                n = cc.view.getVisibleSize().height;
                            t.systemInfo = wx.getSystemInfoSync();
                            var o = cc.size(e + .1, n + .1),
                                i = cc.view.getFrameSize(),
                                m = cc.director.getWinSize(),
                                y = o.width / m.width * i.width,
                                a = o.height / m.height * i.height;
                            console.log("left: ", 0), console.log("top: ", 0), console.log("width: ", y), console.log("height: ", a);
                            var c = wx.createUserInfoButton({
                                type: "image",
                                image: "",
                                style: {
                                    left: 0,
                                    top: 0,
                                    width: y,
                                    height: a
                                }
                            });
                            return console.log("\u663e\u793a\u6309\u94ae"), c
                        }

                        function a(e) {
                            wx.getSetting({
                                success: function(n) {
                                    n.authSetting["scope.userInfo"] ? e && e(0) : (t.infoButton = y(), t.infoButton.show(), c(function(n) {
                                        e && e(1)
                                    }))
                                },
                                fail: function() {
                                    console.log("getSetting   fail"), e && e(-1)
                                }
                            })
                        }

                        function c(e) {
                            t.infoButton.onTap(function(n) {
                                console.log("button ontap:", n), t.infoButton.hide(), "operateWXData:ok" == n.errMsg || "getUserInfo:ok" == n.errMsg ? n.rawData && (JSON.stringify(cc.sys.localStorage.setItem("qqUserInfo", n.userInfo)), e && e(!0)) : (t.sendLoginfailMsg(n, m.failCode.userRefusedTo), e && e(!1))
                            }.bind(t))
                        }
                        t._weixin_islogin || function(e) {
                            wx.checkSession({
                                success: function() {
                                    console.log("\u68c0\u67e5\u767b\u9646\u6210\u529f checkSession   success"), e && e(!0)
                                },
                                fail: function() {
                                    console.log("\u68c0\u67e5\u767b\u9646\u5931\u8d25 checkSession   fail"), e && e(!1)
                                }
                            })
                        }(function(e) {
                            e ? o(function(e) {
                                n && n(e)
                            }) : a(function(e) {
                                o(function(e) {
                                    n && n(e)
                                })
                            })
                        })
                    }, this.wangmai_login = function(e) {
                        var n = this;
                        console.log("wangmai_login start   self._wangmai_islogin = " + n._wangmai_islogin), n._wangmai_islogin || WMAds.getLoginUserInfo && WMAds.getLoginUserInfo({
                            engine: "Cocos",
                            onSuccess: function(t) {
                                console.log(t);
                                try {
                                    (t = JSON.parse(t)) && null != t && t.userId && "" != t.userId && void 0 !== t.userId ? n.getUserDisplayId(t.userId, null, function(t) {
                                        console.log("wangmai_login end   iswin = " + t), n._wangmai_islogin = !0, e && e(t)
                                    }) : (console.log("WMAds.getLoginUserInfo  res.userId  fail"), n.default_login(), e && e(!1))
                                } catch (t) {
                                    console.log("wangmai_login getLoginUserInfo error  = " + t), n.default_login(), e && e(!1)
                                }
                            }
                        })
                    }, this.default_login = function(e) {
                        var n = this;
                        console.log("default_login start   self.default_login = " + n._default_islogin), n._default_islogin || this.getUserDisplayId(null, null, function(t) {
                            console.log("default_login end   iswin = " + t), n._default_islogin = !0, e && e(t)
                        })
                    }, this.juzhang_login = function(e) {
                        if (!cc.LieYingSDK.PolySDK.adjuzsdk) {
                            var n = m.juzhang.clientId,
                                t = m.juzhang.clientSecret;
                            n && "" != n ? t && "" != t ? cc.LieYingSDK.PolySDK.adjuzsdk = new Adjuzsdk({
                                clientId: n,
                                clientSecret: t,
                                callback: function(e) {
                                    console.log("SDK\u521d\u59cb\u5316", e), cc.LieYingSDK.PolySDK.adjuzsdk.jsInitAccount(function(e) {
                                        console.log("\u4ee5\u83b7\u53d6\u8d26\u6237id" + e.accountId), cc.LieYingSDK.PolySDK.adjuzsdk.jsOpenGame()
                                    }), cc.LieYingSDK.PolySDK.adjuzsdk.jsAdLoaded(function(e) {
                                        1 == e.adtype ? 1 == e.code ? console.log("\u6a2a\u7248\u89c6\u9891\u5df2\u7f13\u5b58") : console.log("\u6a2a\u7248\u89c6\u9891\u672a\u7f13\u5b58") : 1 == e.code ? console.log("\u7ad6\u7248\u89c6\u9891\u5df2\u7f13\u5b58") : console.log("\u7ad6\u7248\u89c6\u9891\u672a\u7f13\u5b58")
                                    })
                                }
                            }) : console.log("\u5f53\u524d \u5de8\u638c clientSecret  \u4e3a\u7a7a") : console.log("\u5f53\u524d \u5de8\u638c clientId  \u4e3a\u7a7a")
                        }
                    }, this.sdk360_login = function(e, n) {
                        var t = this;
                        t._qh_islogin || "undefined" != typeof qh && qh.login({
                            success: function(e) {
                                t._qh_islogin = !0, console.log("touTiao \u540e\u7aef\u6388\u6743 \u552f\u4e00\u6807\u8bc6 code = " + e.code), e.code ? (console.log("\u767b\u5f55\u7528\u6237\u4fe1\u606f\uff1a" + JSON.stringify(e)), t.getUserDisplayId(e.code)) : (t.default_login(), console.log("\u767b\u5f55\u7528\u6237\u4fe1\u606f\uff1a" + JSON.stringify(e)))
                            },
                            fail: function(e) {
                                t._qh_islogin = !1, console.log("\u8c03\u7528\u767b\u5f55\u5931\u8d25 = " + JSON.stringify(e)), t.sendLoginfailMsg(e)
                            }
                        })
                    }, this.setlocalUserInfo = function(e) {
                        if (e) {
                            console.time("setlocalUserInfo End time");
                            var n = m.localStorageUserkeys;
                            for (var t in e)
                                if (e.hasOwnProperty(t))
                                    if (n.indexOf(t) > -1) {
                                        var o = e[t];
                                        if (void 0 === o) {
                                            console.log("setlocalUserInfo failure msg : " + t + " is not val ");
                                            continue
                                        }
                                        cc.sys.localStorage.setItem(t, o), console.log("cc.sys.localStorage.setItem success update : key = " + t + "  val = " + o)
                                    } else console.log("setlocalUserInfo Error msg : " + t + "  not Find ");
                            console.timeEnd("setlocalUserInfo End time")
                        }
                    }, this.getlocalUserInfo = function(e) {
                        if (e) return cc.sys.localStorage.getItem(e) && "" != cc.sys.localStorage.getItem(e) ? cc.sys.localStorage.getItem(e) : (console.log(e + " not Find"), null)
                    }, this.sendLoginfailMsg = function(e, n, t) {
                        if (m && void 0 !== m && m.runSDK && void 0 !== m.runSDK) {
                            var o = m[m.runSDK].type,
                                i = m.game_id;
                            if (void 0 === o || null == o || void 0 === i || null == i || void 0 === y || null == y) return console.log("sendLoginfailMsg sendRequest Err : type || game_id || type_response_data \u53c2\u6570\u4e3a\u7a7a\u6216\u9519\u8bef"), void(t && t(!1, null));
                            var y = null;
                            try {
                                y = JSON.stringify(e)
                            } catch (e) {
                                return console.log("sendLoginfailMsg JSON.stringify  ERR  error = " + e), void(t && t())
                            }
                            var c = {
                                type: o,
                                game_id: i,
                                fail_code: 7402,
                                type_response_data: y
                            };
                            a.sendRequest(m.failLoginUrl, c, function(e) {
                                e && 200 == e.errorcode ? (console.log("sendLoginfailMsg sendRequest success"), t && t(!0, e)) : (console.log("sendLoginfailMsg sendRequest failure  data = " + JSON.stringify(e)), t && t(!1, e))
                            })
                        } else console.log("\u805a\u5408SDK \u521d\u59cb\u5316\u5931\u8d25 \u8bf7\u8054\u7cfb\u7ba1\u7406\u4eba\u5458  By sendLoginfailMsg")
                    }, this.getSDKConfig = function() {
                        return m
                    }, this.getUserDisplayId = function(e, n, t) {
                        var o = this;
                        if (!m || void 0 === m || !m.runSDK || void 0 === m.runSDK) return console.log("\u805a\u5408SDK \u521d\u59cb\u5316\u5931\u8d25 \u8bf7\u8054\u7cfb\u7ba1\u7406\u4eba\u5458  By getUserDisplayId"), void(t && t(!1, null));
                        var i = m[m.runSDK].type,
                            y = m.game_id,
                            c = o.getlocalUserInfo("display_id") || "";
                        if (console.log("getUserDisplayId \u5f00\u59cb \u53c2\u6570: type \uff1a" + i + " game_id : " + y + " opcode : " + e + " session : " + n), void 0 === i || null == i || void 0 === y || null == y) return console.log("getUserDisplayId sendRequest Err : type || game_id \u53c2\u6570\u4e3a\u7a7a\u6216\u9519\u8bef"), void(t && t(!1, null));
                        if (m.runSDK == m.sdk_key_xiaomi && (void 0 === n || null == n)) return console.log("getUserDisplayId sendRequest Err : session \u53c2\u6570\u4e3a\u7a7a\u6216\u9519\u8bef"), void(t && t(!1, null));
                        void 0 !== e && null != e || (e = "000000"), console.log("getUserDisplayId sendRequest \u5f00\u59cb \u53c2\u6570: type \uff1a" + i + " game_id : " + y + " opcode : " + e + " session : " + n);
                        var r = {
                            type: i,
                            game_id: y,
                            opcode: e,
                            display_id: c,
                            session: n || null
                        };
                        a.sendRequest(m.userLoginUrl, r, function(e) {
                            e && 200 == e.code ? (console.log("getUserDisplayId sendRequest success data = " + JSON.stringify(e)), m.userLoginData.display_id = e.data.display_id, o.setlocalUserInfo({
                                display_id: m.userLoginData.display_id
                            }), t && t(!0, e)) : (console.log("getUserDisplayId sendRequest failure  data = " + JSON.stringify(e)), t && t(!1, e))
                        })
                    }, this.sendLoginMiNiFramework = function() {
                        if (console.log("sendLoginMiNiFramework"), m && void 0 !== m && m.runSDK && void 0 !== m.runSDK) {
                            var e = m[m.runSDK].type,
                                n = m.game_id;
                            if (void 0 !== e && null != e && void 0 !== n && null != n)
                                if (void 0 !== m.userLoginData.display_id && m.userLoginData.display_id) {
                                    var t = {
                                        display_id: m.userLoginData.display_id,
                                        game_id: n,
                                        channel_id: e,
                                        name: this.getlocalUserInfo("nickName") || "",
                                        img: this.getlocalUserInfo("avatarUrl") || ""
                                    };
                                    console.log("sendLoginMiNiFramework \u5f00\u59cb \u53c2\u6570: resdata \uff1a" + JSON.stringify(t)), cc.LieYingSDK.DAO.UserDAO.login(t)
                                } else console.log("sendLoginMiNiFramework sendRequest Err : poly_sdk_config.userLoginData.display_id \u53c2\u6570\u4e3a\u7a7a\u6216\u9519\u8bef");
                            else console.log("sendLoginMiNiFramework sendRequest Err : type || game_id \u53c2\u6570\u4e3a\u7a7a\u6216\u9519\u8bef")
                        } else console.log("\u805a\u5408SDK \u521d\u59cb\u5316\u5931\u8d25 \u8bf7\u8054\u7cfb\u7ba1\u7406\u4eba\u5458  By sendLoginMiNiFramework")
                    }, e = this)
                }
            }(),
            r = function() {
                var e;
                return function() {
                    if (e) return e;
                    var n = this;
                    return this.createBannerAd = function(e) {
                        switch (console.log("createBannerAd start runSDK = " + m.runSDK), m.runSDK) {
                            case m.sdk_key_qq:
                                if ("undefined" == typeof qq) return void console.log("QQ qq is undefined");
                                this.createBannerAd_qq(e);
                                break;
                            case m.sdk_key_tt:
                                if ("undefined" == typeof tt) return void console.log("TouTiao tt is undefined");
                                this.createBannerAd_tt(e);
                                break;
                            case m.sdk_key_vivo:
                                if ("undefined" == typeof qg) return void console.log("vivo qg is undefined");
                                this.createBannerAd_vivo(e);
                                break;
                            case m.sdk_key_xiaomi:
                                if ("undefined" == typeof qg) return void console.log("xiaomi qg is undefined");
                                this.createBannerAd_xiaomi(e);
                                break;
                            case m.sdk_key_baidu:
                                if ("undefined" == typeof swan) return void console.log("baidu swan is undefined");
                                this.createBannerAd_baidu(e);
                                break;
                            case m.sdk_key_oppo:
                                if ("undefined" == typeof qg) return void console.log("oppo qg is undefined");
                                this.createBannerAd_oppo(e);
                                break;
                            case m.sdk_key_weixin:
                                if ("undefined" == typeof wx) return void console.log("WX wx is undefined");
                                this.createBannerAd_weixin(e);
                                break;
                            case m.sdk_key_qtt:
                                if ("undefined" == typeof qttGame) return void console.log("qtt qttGame is undefined");
                                this.createBannerAd_qtt(e);
                                break;
                            case m.sdk_key_jikewan:
                                if ("undefined" == typeof AdSDK) return void console.log("\u5373\u523b\u73a9 AdSDK is undefined");
                                this.createBannerAd_jikewan(e);
                                break;
                            case m.sdk_key_ios:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_IOS) return void console.log("\u539f\u751f IOS \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createBannerAd_ios(e);
                                break;
                            case m.sdk_key_android:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u539f\u751f \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createBannerAd_android(e);
                                break;
                            case m.sdk_key_juzhang:
                                if (!cc.LieYingSDK.PolySDK.adjuzsdk || void 0 === cc.LieYingSDK.PolySDK.adjuzsdk) return void console.log("\u5de8\u638c adjuzsdk is undefined");
                                this.createBannerAd_juzhang(e);
                                break;
                            case m.sdk_key_360:
                                if ("undefined" == typeof qh) return void console.log("360 qh is undefined");
                                this.createBannerAd_360(e);
                                break;
                            case m.sdk_key_yungao:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u539f\u751f\u4e91\u544a \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createBannerAd_yungao(e);
                                break;
                            case m.sdk_key_android_vivo:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u5b89\u5353vivo   \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createBannerAd_android_vivo(e);
                                break;
                            case m.sdk_key_android_oppo:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u5b89\u5353oppo   \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createBannerAd_android_oppo(e);
                                break;
                            case m.sdk_key_android_360:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u5b89\u5353360   \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createBannerAd_android_360(e);
                                break;
                            case m.sdk_key_android_yyb:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u5b89\u5353\u5e94\u7528\u5b9d   \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createBannerAd_android_yyb(e);
                                break;
                            case m.sdk_key_android_tap:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u5b89\u5353tap   \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createBannerAd_android_tap(e);
                                break;
                            default:
                                console.log(m.runSDK + " is not undefined By BannerAd")
                        }
                    }, this.showBannerAd = function() {
                        this._isShowBannerAd = !0, this._bannerAd && this._bannerAd.show()
                    }, this.hideBannerAd = function() {
                        this._isShowBannerAd = !1, this._bannerAd && this._bannerAd.hide()
                    }, this.createBannerAd_tt = function(e) {
                        var n = m.tt.banner_id,
                            t = 0,
                            o = this;
                        if (!o._bannerAd) {
                            if (!n || "" == n) return console.log("\u5f53\u524d \u5934\u6761 banner_id  \u4e3a\u7a7a"), o.sendBannerpush(0), void(e && e(!1));
                            if ("undefined" != typeof tt) {
                                o._isShowBannerAd = !0;
                                var i = tt.getSystemInfoSync(),
                                    y = i.windowWidth,
                                    a = i.windowHeight;
                                o._bannerAd = tt.createBannerAd({
                                    adUnitId: n,
                                    style: {
                                        top: a - 112.5
                                    }
                                }), o._bannerAd.onResize(function(e) {
                                    t <= 0 && (t = e.width), o._bannerAd.style.left = (y - t) / 2
                                }), o._bannerAd.onLoad(function() {
                                    o.sendBannerpush(1), o._isShowBannerAd ? o.showBannerAd() : o.hideBannerAd(), e && e(!0)
                                })
                            } else o.sendBannerpush(0), e && e(!1), console.log("tt is undefined")
                        }
                    }, this.createBannerAd_qq = function(e) {
                        var n = m.qq.banner_id,
                            t = this;
                        if (!n || "" == n) return console.log("\u5f53\u524d QQ banner_id  \u4e3a\u7a7a"), t.sendBannerpush(0), void(e && e(!1));
                        if (!t._bannerAd) {
                            t._isShowBannerAd = !0;
                            var o = qq.getSystemInfoSync();
                            t._bannerAd = qq.createBannerAd({
                                adUnitId: n,
                                style: {
                                    left: (o.screenWidth - 320) / 2,
                                    top: .8 * o.screenHeight,
                                    width: 320,
                                    height: .09 * o.screenHeight
                                }
                            }), t._bannerAd.onError(function(n) {
                                console.log("bannerAd onError", n), t.sendBannerpush(0), e && e(!1)
                            }), console.log("createBannerAd_qq   self._bannerAd = " + t._bannerAd), t._bannerAd.onLoad(function(n) {
                                console.log("createBannerAd_qq  self._isShowBannerAd = " + t._isShowBannerAd), t.sendBannerpush(1), t._isShowBannerAd ? t.showBannerAd() : t.hideBannerAd(), e && e(!0)
                            })
                        }
                    }, this.createBannerAd_vivo = function(e) {
                        var n = m.vivo.banner_id,
                            t = this;
                        if (!n || "" == n) return console.log("\u5f53\u524d vivo bannerid  \u4e3a\u7a7a"), t.sendBannerpush(0), void(e && e(!1));
                        if (!t._bannerAd)
                            if (t._isShowBannerAd = !0, console.log("createBannerAd_vivo"), qg.getSystemInfoSync().platformVersionCode < 1031) console.log("createBannerAd_vivo  \u5f53\u524d\u7248\u672c\u4e0d\u652f\u6301\u5e7f\u544a"), t.sendBannerpush(0), e && e(!1);
                            else {
                                console.log("createBannerAd_vivo  \u652f\u6301\u5e7f\u544a");
                                var o = qg.getSystemInfoSync();
                                o.windowWidth, o.windowHeight, t._bannerAd = qg.createBannerAd({
                                    posId: n,
                                    style: {}
                                }), console.log("createBannerAd_vivo   self._bannerAd = " + t._bannerAd), t._bannerAd.onLoad(function() {
                                    console.log("createBannerAd_vivo  self._isShowBannerAd = " + t._isShowBannerAd), t.sendBannerpush(1), t._isShowBannerAd ? t.showBannerAd() : t.hideBannerAd(), e && e(!0)
                                })
                            }
                    }, this.createBannerAd_oppo = function(e) {
                        var n = m.oppo.banner_id,
                            t = this;
                        if (!m.oppo.AppID || "" == m.oppo.AppID) return console.log("\u5f53\u524d oppo AppID  \u4e3a\u7a7a"), t.sendBannerpush(0), void(e && e(!1));
                        if (!t._bannerAd) {
                            if (!n || "" == n) return console.log("\u5f53\u524d oppo bannerid  \u4e3a\u7a7a"), t.sendBannerpush(0), void(e && e(!1));
                            t._isShowBannerAd = !0, console.log("createBannerAd_oppo"), qg.getSystemInfoSync().minPlatformVersion < 1031 ? (console.log("createBannerAd_oppo  \u5f53\u524d\u7248\u672c\u4e0d\u652f\u6301\u5e7f\u544a"), t.sendBannerpush(0), e && e(!1)) : (console.log("createBannerAd_oppo  \u652f\u6301\u5e7f\u544a"), qg.initAdService({
                                appId: m.oppo.AppID,
                                isDebug: !1,
                                success: function(o) {
                                    console.log("success"), t._bannerAd = qg.createBannerAd({
                                        posId: n
                                    }), console.log("createBannerAd_oppo   self._bannerAd = " + t._bannerAd), t.sendBannerpush(1), t._isShowBannerAd ? t.showBannerAd() : t.hideBannerAd(), e && e(!0)
                                },
                                fail: function(n) {
                                    console.log("fail:" + n.code + n.msg), t.sendBannerpush(0), e && e(!1)
                                },
                                complete: function(e) {
                                    console.log("complete")
                                }
                            }))
                        }
                    }, this.createBannerAd_baidu = function(e) {
                        var t = m.baidu.banner_id;
                        if (!n._bannerAd) {
                            if (!m.baidu.appSid || "" == m.baidu.appSid) return console.log("\u5f53\u524d \u767e\u5ea6 appSid (\u767d\u9752\u85e4 \u5e94\u7528\u7ba1\u7406 ID) \u4e3a\u7a7a"), n.sendBannerpush(0), void(e && e(!1));
                            if (!t || "" == t) return console.log("\u5f53\u524d \u767e\u5ea6 bannerid  \u4e3a\u7a7a"), n.sendBannerpush(0), void(e && e(!1));
                            if (n._isShowBannerAd = !0, console.log("createBannerAd_baidu  getSystemInfoSync = " + JSON.stringify(swan.getSystemInfoSync())), swan.getSystemInfoSync().SDKVersion < "1.11.0") return console.log("baidu SDKVersion \u8fc7\u4f4e \u4e0d\u652f\u6301 Banner \u5e7f\u544a\uff01"), n.sendBannerpush(0), void(e && e(!1));
                            var o = swan.getSystemInfoSync(),
                                i = o.windowWidth,
                                y = o.windowHeight;
                            n._bannerAd = swan.createBannerAd({
                                adUnitId: t,
                                appSid: m.baidu.appSid,
                                style: {
                                    left: (i - 200) / 2,
                                    top: y - 112.5,
                                    width: 200
                                }
                            }), console.log("createBannerAd_baidu   self._bannerAd = " + n._bannerAd), n._bannerAd.onError(function(e) {
                                n.sendBannerpush(0), console.log("createBannerAd_baidu onError = " + e)
                            }), n._bannerAd.onLoad(function() {
                                console.log(" banner \u52a0\u8f7d\u5b8c\u6210"), console.log("createBannerAd_baidu  self._isShowBannerAd = " + n._isShowBannerAd), n.sendBannerpush(1), n._isShowBannerAd ? n.showBannerAd() : n.hideBannerAd(), e && e(!0)
                            })
                        }
                    }, this.createBannerAd_xiaomi = function(e) {
                        var n = m.xiaomi.banner_id,
                            t = this;
                        if (!t._bannerAd) {
                            if (!n || "" == n) return console.log("\u5f53\u524d \u5c0f\u7c73 bannerid  \u4e3a\u7a7a"), t.sendBannerpush(0), void(e && e(!1));
                            t._isShowBannerAd = !0, console.log("createBannerAd_xiaomi");
                            var o = qg.getSystemInfoSync(),
                                i = o.windowWidth,
                                y = o.windowHeight;
                            t._bannerAd = qg.createBannerAd({
                                adUnitId: n,
                                style: {
                                    left: (i - 200) / 2,
                                    top: y - 112.5,
                                    width: 200
                                }
                            }), console.log("createBannerAd_xiaomi   self._bannerAd = " + t._bannerAd), t._bannerAd.onLoad(function() {
                                console.log(" banner \u52a0\u8f7d\u5b8c\u6210"), console.log("createBannerAd_xiaomi  self._isShowBannerAd = " + t._isShowBannerAd), t.sendBannerpush(1), t._isShowBannerAd ? t.showBannerAd() : t.hideBannerAd(), e && e(!0)
                            })
                        }
                    }, this.createBannerAd_weixin = function(e) {
                        var n = m.weixin.banner_id,
                            t = this;
                        if (!t._bannerAd) {
                            if (!n || "" == n) return console.log("\u5f53\u524d \u5fae\u4fe1 bannerid  \u4e3a\u7a7a"), t.sendBannerpush(0), void(e && e(!1));
                            if ("undefined" != typeof wx) {
                                t._isShowBannerAd = !0;
                                var o = wx.getSystemInfoSync(),
                                    i = o.windowWidth,
                                    y = o.windowHeight;
                                if (void 0 === wx.createBannerAd) return;
                                t._bannerAd = wx.createBannerAd({
                                    adUnitId: n,
                                    style: {
                                        left: (i - 200) / 2,
                                        top: y - 112.5,
                                        width: 200
                                    }
                                }), t._bannerAd.onResize(function(e) {
                                    console.log(e.width, e.height), console.log(t._bannerAd.style.realWidth, t._bannerAd.style.realHeight)
                                }), console.log("createBannerAd_weixin   self._bannerAd = " + t._bannerAd), t._bannerAd.onLoad(function(n) {
                                    console.log(" banner \u52a0\u8f7d\u5b8c\u6210"), console.log("createBannerAd_weixin  self._isShowBannerAd = " + t._isShowBannerAd), t.sendBannerpush(1), void 0 == n || null == n ? (t._isShowBannerAd ? t.showBannerAd() : t.hideBannerAd(), e && e(!0)) : e && e(!1)
                                }), t._bannerAd.onError(function(e) {
                                    console.log("onError = " + e), t.sendBannerpush(0)
                                })
                            } else t.sendBannerpush(0), e && e(!1), console.log("wx is undefined")
                        }
                    }, this.createBannerAd_qtt = function() {
                        this._bannerAd = this._bannerAd || {}, this._bannerAd.show || (this._bannerAd.show = function() {
                            console.log("createBannerAd_qtt  show"), qttGame.showBanner()
                        }), this._bannerAd.hide || (this._bannerAd.hide = function() {
                            console.log("createBannerAd_qtt  hide"), qttGame.hideBanner()
                        })
                    }, this.createBannerAd_jikewan = function(e) {
                        console.log("createBannerAd_jikewan");
                        var n = m.jikewan.banner_id,
                            t = m.jikewan.banner_adId,
                            o = this;
                        if (!o._bannerAd) {
                            if (!n || "" == n) return console.log("\u5f53\u524d \u5373\u53ef\u73a9 bannerid  \u4e3a\u7a7a"), o.sendBannerpush(0), void(e && e(!1));
                            if (!t || "" == t) return console.log("\u5f53\u524d \u5373\u53ef\u73a9 banner_adId  \u4e3a\u7a7a"), o.sendBannerpush(0), void(e && e(!1));
                            AdSDK.init(), "undefined" != typeof AdSDK && null != AdSDK ? (o._isShowBannerAd = !0, o._bannerAd = AdSDK.createBannerAd(t, n, 2), o._bannerAd.onLoad(function(n) {
                                console.log("createBannerAd_jikewan banner\xa0onLoad:", 1 == n), console.log(" banner \u52a0\u8f7d\u5b8c\u6210"), console.log("createBannerAd_jikewan  self._isShowBannerAd = " + o._isShowBannerAd), o.sendBannerpush(1), o._isShowBannerAd ? o.showBannerAd() : o.hideBannerAd(), e && e(!0)
                            }), o._bannerAd.onError(function(n) {
                                console.log("banner\xa0onError:", n), o.sendBannerpush(0), e && e(!1)
                            }), o._bannerAd.onResize(function(n) {
                                console.log("banner\xa0onResize:", n), o.sendBannerpush(0), e && e(!1)
                            })) : (console.log("AdSDK is undefined"), o.sendBannerpush(0), e && e(!1))
                        }
                    }, this.createBannerAd_ios = function(e) {
                        var n = m.ios.banner_id;
                        this._bannerAd = this._bannerAd || {};
                        var t = this;
                        if (!n || "" == n) return t.sendBannerpush(0), console.log("\u5f53\u524d ios bannerid  \u4e3a\u7a7a"), void(e && e(!1));
                        try {
                            cc.LY_SDK_Native_AdBanner_Callback = function(e, n, o, i) {
                                function m(e, n) {
                                    "200" == o ? e && e() : (console.log("LY_SDK_Native_AdBanner_Callback  errMgr = " + i), n && n())
                                }
                                switch (console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_AdBanner_Callback  bannerid = " + e), n) {
                                    case "1":
                                        m(null, function() {
                                            t.sendBannerpush(0)
                                        });
                                        break;
                                    case "2":
                                    case "3":
                                        m(function() {
                                            t.sendBannerpush(1)
                                        }, function() {
                                            t.sendBannerpush(0)
                                        });
                                        break;
                                    default:
                                        console.log(" cc.LY_SDK_Native_AdBanner_Callback error  type = " + n), t.sendBannerpush(0)
                                }
                            }, this._bannerAd.show = function() {
                                console.log("createBannerAd_ios  show  bannerid = " + n), jsb.reflection.callStaticMethod(m.ios.interface_path, "showAdBannerinRootViewBannerId:", n)
                            }, this._bannerAd.hide = function() {
                                console.log("createBannerAd_ios  hide bannerid = " + n), jsb.reflection.callStaticMethod(m.ios.interface_path, "hideAdBannerinRootViewBannerId:", n)
                            }
                        } catch (e) {
                            console.log("createBannerAd_ios\xa0error" + JSON.stringify(e))
                        }
                    }, this.createBannerAd_android = function(e) {
                        var n = m.android.banner_id;
                        this._bannerAd = this._bannerAd || {};
                        var t = this;
                        if (!n || "" == n) return console.log("\u5f53\u524d android bannerid  \u4e3a\u7a7a"), void(e && e(!1));
                        cc.LY_SDK_Native_AdBanner_Callback = function(e, n, o, i) {
                            function m(e, n) {
                                "200" == o ? e && e() : (console.log("LY_SDK_Native_AdBanner_Callback  errMgr = " + i), n && n())
                            }
                            switch (console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_AdBanner_Callback  bannerid = " + e), n) {
                                case "1":
                                    m(null, function() {
                                        t.sendBannerpush(0)
                                    });
                                    break;
                                case "2":
                                case "3":
                                    m(function() {
                                        t.sendBannerpush(1)
                                    }, function() {
                                        t.sendBannerpush(0)
                                    });
                                    break;
                                default:
                                    console.log(" cc.LY_SDK_Native_AdBanner_Callback error  type = " + n), t.sendBannerpush(0)
                            }
                        }, this._bannerAd.show = function() {
                            console.log("createBannerAd_android  show  bannerid = " + n), jsb.reflection.callStaticMethod(m.android.interface_path, "showAdBannerAd", "(Ljava/lang/String;)V", n)
                        }, this._bannerAd.hide = function() {
                            console.log("createBannerAd_android  hide bannerid = " + n), jsb.reflection.callStaticMethod(m.android.interface_path, "hideAdBannerAd", "(Ljava/lang/String;)V", n)
                        }
                    }, this.createBannerAd_juzhang = function(e) {
                        var n = Number(m.juzhang.adType.banner_Ad);
                        cc.LieYingSDK.PolySDK.adjuzsdk.jsOpenAD(n, function(e) {
                            1 == e.status ? (console.log("\u5e7f\u544a\u5f00\u59cb\u64ad\u653e"), 1 == e.playStatus ? console.log("\u5e7f\u544a\u64ad\u653e\u5b8c\u6bd5") : console.log("\u5e7f\u544apending")) : console.log("\u5e7f\u544a\u64ad\u653e\u5931\u8d25")
                        })
                    }, this.createBannerAd_360 = function(e) {
                        var n = m.sdk360.banner_id,
                            t = this;
                        if (!n || "" == n) return console.log("\u5f53\u524d sdk360 banner_id  \u4e3a\u7a7a"), t.sendBannerpush(0), void(e && e(!1));
                        t._bannerAd || (t._isShowBannerAd = !0, t._bannerAd = qh.createBannerAd({
                            adUnitId: n,
                            adIntervals: 30,
                            style: {
                                left: 0,
                                top: 0,
                                width: 1180,
                                height: 150
                            }
                        }), t._bannerAd.onError(function(n) {
                            console.log("bannerAd onError", n), t.sendBannerpush(0), e && e(!1)
                        }), console.log("createBannerAd_360   self._bannerAd = " + t._bannerAd), t._bannerAd.onLoad(function(n) {
                            console.log("createBannerAd_360  self._isShowBannerAd = " + t._isShowBannerAd), t.sendBannerpush(1), t._isShowBannerAd ? t.showBannerAd() : t.hideBannerAd(), e && e(!0)
                        }))
                    }, this.createBannerAd_yungao = function(e) {
                        var n = m.yungao.banner_id;
                        this._bannerAd = this._bannerAd || {};
                        var t = this;
                        if (!n || "" == n) return console.log("\u5f53\u524d yungao bannerid  \u4e3a\u7a7a"), void(e && e(!1));
                        cc.LY_SDK_Native_AdBanner_Callback = function(e, n, o, i) {
                            function m(e, n) {
                                "200" == o ? e && e() : (console.log("LY_SDK_Native_AdBanner_Callback  errMgr = " + i), n && n())
                            }
                            switch (console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_AdBanner_Callback  bannerid = " + e), n) {
                                case "1":
                                    m(null, function() {
                                        t.sendBannerpush(0)
                                    });
                                    break;
                                case "2":
                                case "3":
                                    m(function() {
                                        t.sendBannerpush(1)
                                    }, function() {
                                        t.sendBannerpush(0)
                                    });
                                    break;
                                default:
                                    console.log(" cc.LY_SDK_Native_AdBanner_Callback error  type = " + n), t.sendBannerpush(0)
                            }
                        }, this._bannerAd.show = function() {
                            console.log("createBannerAd_android  show  bannerid = " + n), jsb.reflection.callStaticMethod(m.yungao.interface_path, "showAdBannerAd", "(Ljava/lang/String;)V", n)
                        }, this._bannerAd.hide = function() {
                            console.log("createBannerAd_android  hide bannerid = " + n), jsb.reflection.callStaticMethod(m.yungao.interface_path, "hideAdBannerAd", "(Ljava/lang/String;)V", n)
                        }
                    }, this.createBannerAd_android_vivo = function(e) {
                        var n = m.android_vivo.banner_id;
                        this._bannerAd = this._bannerAd || {};
                        var t = this;
                        if (!n || "" == n) return console.log("\u5f53\u524d android_vivo  bannerid  \u4e3a\u7a7a"), void(e && e(!1));
                        cc.LY_SDK_Native_AdBanner_Callback = function(e, n, o, i) {
                            function m(e, n) {
                                "200" == o ? e && e() : (console.log("LY_SDK_Native_AdBanner_Callback  errMgr = " + i), n && n())
                            }
                            switch (console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_AdBanner_Callback  bannerid = " + e), n) {
                                case "1":
                                    m(null, function() {
                                        t.sendBannerpush(0)
                                    });
                                    break;
                                case "2":
                                case "3":
                                    m(function() {
                                        t.sendBannerpush(1)
                                    }, function() {
                                        t.sendBannerpush(0)
                                    });
                                    break;
                                default:
                                    console.log(" cc.LY_SDK_Native_AdBanner_Callback error  type = " + n), t.sendBannerpush(0)
                            }
                        }, this._bannerAd.show = function() {
                            console.log("createBannerAd_android  show  bannerid = " + n), jsb.reflection.callStaticMethod(m.android_vivo.interface_path, "showAdBannerAd", "(Ljava/lang/String;)V", n)
                        }, this._bannerAd.hide = function() {
                            console.log("createBannerAd_android  hide bannerid = " + n), jsb.reflection.callStaticMethod(m.android_vivo.interface_path, "hideAdBannerAd", "(Ljava/lang/String;)V", n)
                        }
                    }, this.createBannerAd_android_oppo = function(e) {
                        var n = m.android_oppo.banner_id;
                        this._bannerAd = this._bannerAd || {};
                        var t = this;
                        if (!n || "" == n) return console.log("\u5f53\u524d android_oppo bannerid  \u4e3a\u7a7a"), void(e && e(!1));
                        cc.LY_SDK_Native_AdBanner_Callback = function(e, n, o, i) {
                            function m(e, n) {
                                "200" == o ? e && e() : (console.log("LY_SDK_Native_AdBanner_Callback  errMgr = " + i), n && n())
                            }
                            switch (console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_AdBanner_Callback  bannerid = " + e), n) {
                                case "1":
                                    m(null, function() {
                                        t.sendBannerpush(0)
                                    });
                                    break;
                                case "2":
                                case "3":
                                    m(function() {
                                        t.sendBannerpush(1)
                                    }, function() {
                                        t.sendBannerpush(0)
                                    });
                                    break;
                                default:
                                    console.log(" cc.LY_SDK_Native_AdBanner_Callback error  type = " + n), t.sendBannerpush(0)
                            }
                        }, this._bannerAd.show = function() {
                            console.log("createBannerAd_android  show  bannerid = " + n), jsb.reflection.callStaticMethod(m.android_oppo.interface_path, "showAdBannerAd", "(Ljava/lang/String;)V", n)
                        }, this._bannerAd.hide = function() {
                            console.log("createBannerAd_android  hide bannerid = " + n), jsb.reflection.callStaticMethod(m.android_oppo.interface_path, "hideAdBannerAd", "(Ljava/lang/String;)V", n)
                        }
                    }, this.createBannerAd_android_360 = function(e) {
                        var n = m.android_360.banner_id;
                        this._bannerAd = this._bannerAd || {};
                        var t = this;
                        if (!n || "" == n) return console.log("\u5f53\u524d android_360 bannerid  \u4e3a\u7a7a"), void(e && e(!1));
                        cc.LY_SDK_Native_AdBanner_Callback = function(e, n, o, i) {
                            function m(e, n) {
                                "200" == o ? e && e() : (console.log("LY_SDK_Native_AdBanner_Callback  errMgr = " + i), n && n())
                            }
                            switch (console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_AdBanner_Callback  bannerid = " + e), n) {
                                case "1":
                                    m(null, function() {
                                        t.sendBannerpush(0)
                                    });
                                    break;
                                case "2":
                                case "3":
                                    m(function() {
                                        t.sendBannerpush(1)
                                    }, function() {
                                        t.sendBannerpush(0)
                                    });
                                    break;
                                default:
                                    console.log(" cc.LY_SDK_Native_AdBanner_Callback error  type = " + n), t.sendBannerpush(0)
                            }
                        }, this._bannerAd.show = function() {
                            console.log("createBannerAd_android  show  bannerid = " + n), jsb.reflection.callStaticMethod(m.android_360.interface_path, "showAdBannerAd", "(Ljava/lang/String;)V", n)
                        }, this._bannerAd.hide = function() {
                            console.log("createBannerAd_android  hide bannerid = " + n), jsb.reflection.callStaticMethod(m.android_360.interface_path, "hideAdBannerAd", "(Ljava/lang/String;)V", n)
                        }
                    }, this.createBannerAd_android_yyb = function(e) {
                        var n = m.android_yyb.banner_id;
                        this._bannerAd = this._bannerAd || {};
                        var t = this;
                        if (!n || "" == n) return console.log("\u5f53\u524d android_yyb bannerid  \u4e3a\u7a7a"), void(e && e(!1));
                        cc.LY_SDK_Native_AdBanner_Callback = function(e, n, o, i) {
                            function m(e, n) {
                                "200" == o ? e && e() : (console.log("LY_SDK_Native_AdBanner_Callback  errMgr = " + i), n && n())
                            }
                            switch (console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_AdBanner_Callback  bannerid = " + e), n) {
                                case "1":
                                    m(null, function() {
                                        t.sendBannerpush(0)
                                    });
                                    break;
                                case "2":
                                case "3":
                                    m(function() {
                                        t.sendBannerpush(1)
                                    }, function() {
                                        t.sendBannerpush(0)
                                    });
                                    break;
                                default:
                                    console.log(" cc.LY_SDK_Native_AdBanner_Callback error  type = " + n), t.sendBannerpush(0)
                            }
                        }, this._bannerAd.show = function() {
                            console.log("createBannerAd_android  show  bannerid = " + n), jsb.reflection.callStaticMethod(m.android_yyb.interface_path, "showAdBannerAd", "(Ljava/lang/String;)V", n)
                        }, this._bannerAd.hide = function() {
                            console.log("createBannerAd_android  hide bannerid = " + n), jsb.reflection.callStaticMethod(m.android_yyb.interface_path, "hideAdBannerAd", "(Ljava/lang/String;)V", n)
                        }
                    }, this.createBannerAd_android_tap = function(e) {
                        var n = m.android_tap.banner_id;
                        this._bannerAd = this._bannerAd || {};
                        var t = this;
                        if (!n || "" == n) return console.log("\u5f53\u524d android_tap bannerid  \u4e3a\u7a7a"), void(e && e(!1));
                        cc.LY_SDK_Native_AdBanner_Callback = function(e, n, o, i) {
                            function m(e, n) {
                                "200" == o ? e && e() : (console.log("LY_SDK_Native_AdBanner_Callback  errMgr = " + i), n && n())
                            }
                            switch (console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_AdBanner_Callback  bannerid = " + e), n) {
                                case "1":
                                    m(null, function() {
                                        t.sendBannerpush(0)
                                    });
                                    break;
                                case "2":
                                case "3":
                                    m(function() {
                                        t.sendBannerpush(1)
                                    }, function() {
                                        t.sendBannerpush(0)
                                    });
                                    break;
                                default:
                                    console.log(" cc.LY_SDK_Native_AdBanner_Callback error  type = " + n), t.sendBannerpush(0)
                            }
                        }, this._bannerAd.show = function() {
                            console.log("createBannerAd_android  show  bannerid = " + n), jsb.reflection.callStaticMethod(m.android_tap.interface_path, "showAdBannerAd", "(Ljava/lang/String;)V", n)
                        }, this._bannerAd.hide = function() {
                            console.log("createBannerAd_android  hide bannerid = " + n), jsb.reflection.callStaticMethod(m.android_tap.interface_path, "hideAdBannerAd", "(Ljava/lang/String;)V", n)
                        }
                    }, this.sendBannerpush = function(e, n) {
                        if (m && void 0 !== m && m.runSDK && void 0 !== m.runSDK) {
                            var t = m[m.runSDK].type,
                                o = m.game_id,
                                i = m.HTTPtoken,
                                y = m.userLoginData.display_id || "000000",
                                c = m[m.runSDK].banner_id,
                                r = c && "" != c ? c : m.default_banner_id;
                            if (void 0 === t || null == t || void 0 === o || null == o || void 0 === e || null == e || void 0 === r || null == r) return console.log("sendBannerpush sendRequest Err : channel_id || game_id || token  ||  isend || banner_id || address_id \u53c2\u6570\u4e3a\u7a7a\u6216\u9519\u8bef"), void(n && n(!1, null));
                            var s = {
                                token: i,
                                game_id: o,
                                channel_id: t,
                                display_id: y,
                                isend: e,
                                banner_id: r,
                                address_id: 0
                            };
                            a.sendRequest(m.bannerpushUrl, s, function(e) {
                                e && 200 == e.errorcode ? (console.log("sendBannerpush sendRequest success"), n && n(!0, e)) : (console.log("sendBannerpush sendRequest failure  data = " + JSON.stringify(e)), n && n(!1, e))
                            })
                        } else console.log("\u805a\u5408SDK \u521d\u59cb\u5316\u5931\u8d25 \u8bf7\u8054\u7cfb\u7ba1\u7406\u4eba\u5458  By sendBannerpush")
                    }, e = this
                }
            }(),
            s = function() {
                var e;
                return function() {
                    if (e) return e;
                    this._ios_isvideo_move = !1, this._android_isvideo_move = !1, this._adjuzsdk = null, this._yungao_isvideo_move = !1, this._android_vivo_isvideo_move = !1, this._android_oppo_isvideo_move = !1, this._android_360_isvideo_move = !1, this._android_yyb_isvideo_move = !1, this._android_tap_isvideo_move = !1;
                    var n = this;
                    return this.createRewardedVideoAd = function(e, n, t, o) {
                        switch (console.log("createRewardedVideoAd start runSDK = " + m.runSDK), m.runSDK) {
                            case m.sdk_key_qq:
                                if ("undefined" == typeof qq) return void console.log("QQ qq is undefined");
                                this.createRewardedVideoAd_qq(e, n, t, o);
                                break;
                            case m.sdk_key_tt:
                                if ("undefined" == typeof tt) return void console.log("TouTiao tt is undefined");
                                this.createRewardedVideoAd_tt(e, n, t, o);
                                break;
                            case m.sdk_key_vivo:
                                if ("undefined" == typeof qg) return void console.log("vivo qg is undefined");
                                this.createRewardedVideoAd_vivo(e, n, t, o);
                                break;
                            case m.sdk_key_xiaomi:
                                if ("undefined" == typeof qg) return void console.log("xiaomi qg is undefined");
                                this.createRewardedVideoAd_xiaomi(e, n, t, o);
                                break;
                            case m.sdk_key_baidu:
                                if ("undefined" == typeof swan) return void console.log("baidu swan is undefined");
                                this.createRewardedVideoAd_baidu(e, n, t, o);
                                break;
                            case m.sdk_key_oppo:
                                if ("undefined" == typeof qg) return void console.log("oppo qg is undefined");
                                this.createRewardedVideoAd_oppo(e, n, t, o);
                                break;
                            case m.sdk_key_weixin:
                                if ("undefined" == typeof wx) return void console.log("WX wx is undefined");
                                this.createRewardedVideoAd_weixin(e, n, t, o);
                                break;
                            case m.sdk_key_qtt:
                                if ("undefined" == typeof qttGame) return void console.log("qtt qttGame is undefined");
                                this.createRewardedVideoAd_qtt(e, n, t, o);
                                break;
                            case m.sdk_key_jikewan:
                                if ("undefined" == typeof AdSDK) return void console.log("\u5373\u523b\u73a9 AdSDK is undefined");
                                this.createRewardedVideoAd_jikewan(e, n, t, o);
                                break;
                            case m.sdk_key_4399:
                                /* if ("undefined" == typeof h5api) return void console.log("4399 h5api is undefined");
                                this.createRewardedVideoAd_4399(e, n, t, o);
                                break; */
                            case m.sdk_key_ios:
                                /* if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_IOS) return void console.log("\u539f\u751f IOS \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createRewardedVideoAd_ios(e, n, t, o);
                                break; */
                            case m.sdk_key_android:
                                /* if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u539f\u751f \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createRewardedVideoAd_android(e, n, t, o);
                                break; */
                            case m.sdk_key_wangmai:
                                /* if ("undefined" == typeof WMAds) return void console.log("\u65fa\u8109 WMAds is undefined");
                                this.createRewardedVideoAd_wangmai(e, n, t, o);
                                break; */
                            case m.sdk_key_juzhang:
                                /* if (!cc.LieYingSDK.PolySDK.adjuzsdk || void 0 === cc.LieYingSDK.PolySDK.adjuzsdk) return void console.log("\u5de8\u638c adjuzsdk is undefined");
                                this.createRewardedVideoAd_juzhang(e, n, t, o);
                                break; */
                            case m.sdk_key_h5:
                                n && n();
                                break;
                            case m.sdk_key_360:
                                if ("undefined" == typeof qh) return void console.log("360 adjuzsdk is undefined");
                                this.createRewardedVideoAd_360(e, n, t, o);
                                break;
                            case m.sdk_key_yungao:
                            case m.sdk_key_android_yyb:
                            case m.sdk_key_android_tap:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u539f\u751f\u4e91\u544a \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createRewardedVideoAd_yungao(e, n, t, o);
                                break;
                            case m.sdk_key_android_vivo:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u5b89\u5353vivo \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createRewardedVideoAd_android_vivo(e, n, t, o);
                                break;
                            case m.sdk_key_android_oppo:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u5b89\u5353oppo \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createRewardedVideoAd_android_oppo(e, n, t, o);
                                break;
                            case m.sdk_key_android_360:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u5b89\u5353360 \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createRewardedVideoAd_android_360(e, n, t, o);
                                break;
                            case m.sdk_key_android_yyb:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u5b89\u5353\u5e94\u7528\u5b9d \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createRewardedVideoAd_android_yyb(e, n, t, o);
                                break;
                            case m.sdk_key_android_tap:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u5b89\u5353tap \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                this.createRewardedVideoAd_android_tap(e, n, t, o);
                                break;
                            default:
                                o && o(!1), console.log(m.runSDK + " is not undefined By VideoAd")
                        }
                    }, this.getVideoAdNumber = function(e) {
                        switch (console.log("getVideoAdNumber start runSDK = " + m.runSDK), m.runSDK) {
                            case m.sdk_key_qq:
                                if ("undefined" == typeof qq) return void console.log("QQ qq is undefined");
                                break;
                            case m.sdk_key_tt:
                                if ("undefined" == typeof tt) return void console.log("TouTiao tt is undefined");
                                break;
                            case m.sdk_key_vivo:
                                if ("undefined" == typeof qg) return void console.log("vivo qg is undefined");
                                break;
                            case m.sdk_key_xiaomi:
                                if ("undefined" == typeof qg) return void console.log("xiaomi qg is undefined");
                                break;
                            case m.sdk_key_baidu:
                                if ("undefined" == typeof swan) return void console.log("baidu swan is undefined");
                                break;
                            case m.sdk_key_oppo:
                                if ("undefined" == typeof qg) return void console.log("oppo qg is undefined");
                                break;
                            case m.sdk_key_weixin:
                                if ("undefined" == typeof wx) return void console.log("WX wx is undefined");
                                break;
                            case m.sdk_key_4399:
                                /* if ("undefined" == typeof h5api) return void console.log("4399 h5api is undefined");
                                this.getVideoAdNumber_4399(e);
                                break; */
                            case m.sdk_key_ios:
                                /* if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_IOS) return void console.log("\u539f\u751f IOS \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                break; */
                            case m.sdk_key_android:
                                if (!cc || !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID) return void console.log("\u539f\u751f \u5b89\u5353 \u521d\u59cb\u5316 \u73af\u5883\u5931\u8d25! ");
                                break;
                            case m.sdk_key_wangmai:
                                if ("undefined" == typeof WMAds) return void console.log("\u65fa\u8109 WMAds is undefined");
                                break;
                            case m.sdk_key_juzhang:
                                if (!cc.LieYingSDK.PolySDK.adjuzsdk || void 0 === cc.LieYingSDK.PolySDK.adjuzsdk) return void console.log("\u5de8\u638c adjuzsdk is undefined");
                                break;
                            case m.sdk_key_h5:
                                break;
                            case m.sdk_key_360:
                                if ("undefined" == typeof qh) return void console.log("360 adjuzsdk is undefined");
                                break;
                            default:
                                console.log(m.runSDK + " is not undefined By VideoAd")
                        }
                    }, this.createRewardedVideoAd_tt = function(e, n, t, o) {
                        var i = m.tt.video_id[e],
                            y = this;
                        if (!i || "" == i) return console.log("\u5f53\u524d \u5934\u6761 voidid  \u4e3a\u7a7a"), y.sendVideopush(0, e), void(o && o(!1));
                        if ("undefined" != typeof tt) {
                            var a = tt.createRewardedVideoAd({
                                adUnitId: i
                            });
                            a.load().then(function() {
                                console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f"), a.show().then(function() {
                                    console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u6210\u529f"), o && o(!0)
                                }).catch(function(n) {
                                    y.sendVideopush(0, e), console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25:" + n.errMsg), o && o(!1)
                                })
                            }).catch(function(n) {
                                y.sendVideopush(0, e), console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u5931\u8d25:" + n.errMsg), o && o(!1)
                            }), a.onClose(function o(i) {
                                i && i.isEnded ? n && (y.sendVideopush(1, e), n()) : t && (y.sendVideopush(2, e), t()), a.offClose && a.offClose(o)
                            })
                        } else y.sendVideopush(0, e), o && o(!1), console.log("tt is undefined")
                    }, this.createRewardedVideoAd_qq = function(e, n, t, o) {
                        var i = m.qq.video_id[e],
                            y = this;
                        if (!i || "" == i) return console.log("\u5f53\u524d QQ voidid  \u4e3a\u7a7a"), y.sendVideopush(0, e), void(o && o(!1));
                        var a = qq.createRewardedVideoAd({
                            adUnitId: i
                        });
                        a.onError(function(n) {
                            console.log("videoAd onError", n), y.sendVideopush(0, e), o && o(!1)
                        }), a.onClose(function o(i) {
                            i && i.isEnded ? n && (console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), y.sendVideopush(1, e), n()) : t && (console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), y.sendVideopush(2, e), t()), a.offClose && a.offClose(o)
                        }), a.load().then(function() {
                            console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f"), a.show().then(function() {
                                console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u6210\u529f"), o && o(!0)
                            }).catch(function(n) {
                                y.sendVideopush(0, e), console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25"), o && o(!1)
                            })
                        }).catch(function(n) {
                            y.sendVideopush(0, e), o && o(!1), console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u5931\u8d25")
                        })
                    }, this.createRewardedVideoAd_vivo = function(e, n, t, o) {
                        var i = m.vivo.video_id[e],
                            y = this;
                        if (console.log("onLoad = " + o), !i || "" == i) return console.log("\u5f53\u524d vivo voidid  \u4e3a\u7a7a"), y.sendVideopush(0, e), void(o && o(!1));
                        try {
                            if ("undefined" != typeof qg) {
                                console.log("createRewardedVideoAd_vivo = " + qg.createRewardedVideoAd);
                                var a = void 0;
                                qg.createRewardedVideoAd ? a = qg.createRewardedVideoAd({
                                    posId: i
                                }) : (y.sendVideopush(0, e), qg.showToast({
                                    message: "\u6682\u65e0\u5e7f\u544a,\u6216\u64ad\u653e\u672a\u5b8c\u6210"
                                }), o && o(!1)), a.onError(function(n) {
                                    n && -3 == n.errCode || (y.sendVideopush(0, e), qg.showToast({
                                        message: "\u6682\u65e0\u5e7f\u544a,\u6216\u64ad\u653e\u672a\u5b8c\u6210"
                                    }), o && o(!1))
                                }), a.load().then(function() {
                                    console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), a.show().then(function() {
                                        console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u6210\u529f"), o && o(!0)
                                    }).catch(function(n) {
                                        console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u5931\u8d25", n), y.sendVideopush(0, e), qg.showToast({
                                            message: "\u6682\u65e0\u5e7f\u544a,\u6216\u64ad\u653e\u672a\u5b8c\u6210"
                                        }), o && o(!1)
                                    })
                                }).catch(function(n) {
                                    console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", n), y.sendVideopush(0, e), qg.showToast({
                                        message: "\u6682\u65e0\u5e7f\u544a,\u6216\u64ad\u653e\u672a\u5b8c\u6210"
                                    }), o && o(!1)
                                }), a.onClose(function o(i) {
                                    i && i.isEnded ? n && (console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), y.sendVideopush(1, e), n()) : t && (console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), y.sendVideopush(2, e), t()), a.offClose && a.offClose(o)
                                })
                            } else console.log("qg is undefined"), y.sendVideopush(0, e), qg.showToast({
                                message: "\u6682\u65e0\u5e7f\u544a,\u6216\u64ad\u653e\u672a\u5b8c\u6210"
                            }), o && o(!1)
                        } catch (e) {
                            o && o(!1)
                        }
                    }, this.createRewardedVideoAd_baidu = function(e, n, t, o) {
                        var i = m.baidu.video_id[e],
                            y = this;
                        if (!m.baidu.appSid || "" == m.baidu.appSid) return console.log("\u5f53\u524d \u767e\u5ea6 appSid (\u767d\u9752\u85e4 \u5e94\u7528\u7ba1\u7406 ID) \u4e3a\u7a7a"), y.sendVideopush(0, e, 1), void(o && o(!1));
                        if (!i || "" == i) return console.log("\u5f53\u524d \u767e\u5ea6 voidid  \u4e3a\u7a7a"), y.sendVideopush(0, e), void(o && o(!1));
                        if ("undefined" != typeof swan) {
                            console.log("createRewardedVideoAd_baidu");
                            var a = void 0;
                            (a = swan.createRewardedVideoAd({
                                adUnitId: i,
                                appSid: m.baidu.appSid
                            })).load().then(function() {
                                console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), a.show().then(function() {
                                    console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u6210\u529f"), o && o(!0)
                                }).catch(function(n) {
                                    console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u5931\u8d25", n), y.sendVideopush(0, e), o && o(!1)
                                })
                            }).catch(function(n) {
                                console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", n), y.sendVideopush(0, e), o && o(!1)
                            }), a.onClose(function o(i) {
                                i && i.isEnded ? n && (console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), y.sendVideopush(1, e), n()) : t && (console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), y.sendVideopush(2, e), t()), a.offClose && a.offClose(o)
                            })
                        } else console.log("swan is undefined"), y.sendVideopush(0, e), o && o(!1)
                    }, this.createRewardedVideoAd_xiaomi = function(e, n, t, o) {
                        var i = m.xiaomi.video_id[e],
                            y = this;
                        if (!i || "" == i) return console.log("\u5f53\u524d \u5c0f\u7c73 voidid  \u4e3a\u7a7a"), y.sendVideopush(0, e), void(o && o(!1));
                        if ("undefined" != typeof qg) {
                            console.log("createRewardedVideoAd_xiaomi");
                            var a = void 0;
                            (a = qg.createRewardedVideoAd({
                                adUnitId: i
                            })).load().then(function() {
                                console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), a.show().then(function() {
                                    console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u6210\u529f"), o && o(!0)
                                }).catch(function(n) {
                                    console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u663e\u793a\u5931\u8d25", n), y.sendVideopush(0, e), o && o(!1)
                                })
                            }).catch(function(n) {
                                console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", n), y.sendVideopush(0, e), o && o(!1)
                            }), a.onClose(function o(i) {
                                i && i.isEnded ? n && (console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), y.sendVideopush(1, e), n()) : t && (console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), y.sendVideopush(2, e), t()), a.offClose && a.offClose(o)
                            })
                        } else console.log("qg is undefined"), y.sendVideopush(0, e), o && o(!1)
                    }, this.createRewardedVideoAd_oppo = function(e, n, t, o) {
                        var i = m.oppo.video_id[e],
                            y = this;
                        if (!m.oppo.AppID || "" == m.oppo.AppID) return console.log("\u5f53\u524d oppo AppID  \u4e3a\u7a7a"), y.sendVideopush(0, e), void(o && o(!1));
                        if (!i || "" == i) return console.log("\u5f53\u524d oppo voidid  \u4e3a\u7a7a"), y.sendVideopush(0, e), void(o && o(!1));
                        var a = void 0;
                        qg.initAdService({
                            appId: m.oppo.AppID,
                            isDebug: !0,
                            success: function(m) {
                                (a = qg.createRewardedVideoAd({
                                    posId: i
                                })).load(), a.onLoad(function() {
                                    console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), a.show()
                                }), a.onVideoStart(function() {
                                    console.log("\u6fc0\u52b1\u89c6\u9891 \u5f00\u59cb\u64ad\u653e"), o && o(!0)
                                }), a.onError(function(n) {
                                    console.log("\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", n), y.sendVideopush(0, e), o && o(!1)
                                }), a.onClose(function(o) {
                                    o && o.isEnded ? n && (console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), y.sendVideopush(1, e), n()) : t && (console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), y.sendVideopush(2, e), t()), a.destroy && a.destroy()
                                })
                            },
                            fail: function(n) {
                                console.log("fail:" + n.code + n.msg), y.sendVideopush(0, e), o && o(!1)
                            },
                            complete: function(n) {
                                try {
                                    console.log("complete" + JSON.stringify(n))
                                } catch (n) {
                                    y.sendVideopush(0, e), o && o(!1)
                                }
                            }
                        })
                    }, this.createRewardedVideoAd_weixin = function(e, n, t, o) {
                        var i = m.weixin.video_id[e],
                            y = this;
                        if (!i || "" == i) return console.log("\u5f53\u524d weixin voidid  \u4e3a\u7a7a"), y.sendVideopush(0, e), void(o && o(!1));
                        if ("undefined" != typeof wx) {
                            var a = wx.createRewardedVideoAd({
                                adUnitId: i
                            });
                            a.load().then(function() {
                                console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f"), a.show().then(function() {
                                    console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u6210\u529f"), o && o(!0)
                                }).catch(function(n) {
                                    y.sendVideopush(0, e), console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25"), o && o(!1)
                                })
                            }).catch(function(n) {
                                y.sendVideopush(0, e), o && o(!1), console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u5931\u8d25")
                            }), a.onClose(function o(i) {
                                i && i.isEnded ? n && (console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), y.sendVideopush(1, e), n()) : t && (console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), y.sendVideopush(2, e), t()), a.offClose && a.offClose(o)
                            }), a.onError(function(n) {
                                y.sendVideopush(0, e), o && o(!1), console.log("onError  = " + JSON.stringify(n))
                            })
                        } else y.sendVideopush(0, e), o && o(!1), console.log("wx is undefined")
                    }, this.createRewardedVideoAd_qtt = function(e, t, o, i) {
                        var m = {
                            gametype: 1,
                            rewardtype: 1,
                            data: {}
                        };
                        m.data.title = "\u5237\u65b0\u9053\u5177", m.data.url = "//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png", m.callback = function(o) {
                            1 == o ? (console.log("showVideo  onSuccess  res = " + o), n.sendVideopush(1, e), t && t()) : (console.log("showVideo  onCancel  res = " + o), n.sendVideopush(1, e), t && t())
                        }, qttGame.showHDAD(m)
                    }, this.createRewardedVideoAd_4399 = function(e, n, t, o) {
                        var i = this;
                        "undefined" != typeof h5api && null != h5api ? h5api.canPlayAd(function(m) {
                            console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", m.canPlayAd, "\u5269\u4f59\u6b21\u6570", m.remain), m.remain >= 1 ? m.canPlayAd && h5api.playAd(function(m) {
                                console.log("\u4ee3\u7801:" + m.code + ",\u6d88\u606f:" + m.message), 1e4 === m.code ? o && o(!0) : 10001 === m.code ? (console.log("\u64ad\u653e\u7ed3\u675f"), i.sendVideopush(1, e), n && n()) : (console.log("\u5e7f\u544a\u5f02\u5e38"), i.sendVideopush(2, e), t && t(m.message, !0))
                            }) : (i.sendVideopush(0, e), o && o(!1, "\u4eca\u65e5\u5e7f\u544a\u6b21\u6570\u7528\u5b8c!"))
                        }) : (i.sendVideopush(0, e), o && o(!1, "\u4eca\u65e5\u5e7f\u544a\u6b21\u6570\u7528\u5b8c!"), console.log("4399 h5api is undefined"))
                    }, this.createRewardedVideoAd_jikewan = function(e, n, t, o) {
                        var i = m.jikewan.video_id[e],
                            y = m.jikewan.video_adId[e],
                            a = this;
                        if (!m.jikewan.screenOrientation || "" == m.jikewan.screenOrientation) return console.log("\u5f53\u524d jikewan screenOrientation  \u4e3a\u7a7a"), a.sendVideopush(0, e), void(o && o(!1));
                        if (!i || "" == i) return console.log("\u5f53\u524d jikewan voidid  \u4e3a\u7a7a"), a.sendVideopush(0, e), void(o && o(!1));
                        if (!y || "" == y) return console.log("\u5f53\u524d jikewan video_adId  \u4e3a\u7a7a"), a.sendVideopush(0, e), void(o && o(!1));
                        AdSDK.init();
                        var c = AdSDK.createRewardedVideoAd(y, e, m.jikewan.screenOrientation),
                            r = !1;
                        c.onLoad(function(n) {
                            console.log("rewardedvideoAd\xa0onLoad\xa0~ param = ", n), c.show().then(function(e) {
                                r = !0, o && o(!0)
                            }, function(n) {
                                console.log("videoAd\xa01\xa0\u5e7f\u544a\u663e\u793a\u5931\u8d25 err = " + n), r = !1, a.sendVideopush(0, e), o && o(!1, "\u6682\u65e0\u5e7f\u544a,\u6216\u64ad\u653e\u672a\u5b8c\u6210")
                            })
                        }), c.onClose(function o(i) {
                            console.log("onClose  req = " + i), r ? n && (console.log("videoAd\xa01\xa0\u5e7f\u544a\u663e\u793a\u6210\u529f\uff01"), a.sendVideopush(1, e), n()) : t && (console.log("videoAd\xa0\u4e2d\u9014\u9000\u51fa\uff01"), a.sendVideopush(2, e), t());
                            try {
                                c.offClose && c.offClose(o), c.destroy && c.destroy()
                            } catch (e) {
                                console.log("offClose or destroy err = " + e)
                            }
                        }), c.onError(function(n) {
                            console.log("onError param = " + n), a.sendVideopush(0, e), o && o(!1, "\u6682\u65e0\u5e7f\u544a,\u6216\u64ad\u653e\u672a\u5b8c\u6210")
                        })
                    }, this.createRewardedVideoAd_ios = function(e, n, t, o) {
                        var i = m.ios.video_id[e];
                        console.log("createRewardedVideoAd_ios  voidid = " + i + "    this._ios_isvideo_move = " + this._ios_isvideo_move);
                        var y = this;
                        if (!i || "" == i) return console.log("\u5f53\u524d ios voidid  \u4e3a\u7a7a"), y.sendVideopush(0, e), void(o && o(!1));
                        if (this._ios_isvideo_move) return console.log("\u5f53\u524d\u8fd8\u6709\u672a\u64ad\u653e\u5b8c\u5f97\u89c6\u9891"), y.sendVideopush(0, e), void(o && o(!1));
                        cc.LY_SDK_Native_createVideo_Callback = function(n) {
                            console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_createVideo_Callback  iswin = " + n), "true" == n ? (console.log("LY_SDK_Native_createVideo_Callback  true"), jsb.reflection.callStaticMethod(m.ios.interface_path, "showAdRewardinRootViewScreenId")) : (y.sendVideopush(0, e), console.log("LY_SDK_Native_createVideo_Callback  false"), y._ios_isvideo_move = !1, console.log("self._ios_isvideo_move = " + y._ios_isvideo_move)), o && o(n)
                        }, cc.LY_SDK_Native_showVideo_Callback = function(o) {
                            console.log("start \u663e\u793a\u56de\u8c03 cc.LY_SDK_Native_showVideo_Callback  iswin = " + o), y._ios_isvideo_move = !1, "true" == o ? (console.log("LY_SDK_Native_showVideo_Callback  true"), y.sendVideopush(1, e), n && n()) : (console.log("LY_SDK_Native_showVideo_Callback  false"), y.sendVideopush(2, e), t && t()), console.log("self._ios_isvideo_move = " + y._ios_isvideo_move)
                        };
                        try {
                            this._ios_isvideo_move = !0, console.log("\u5f00\u59cb\u8c03\u7528 ios creatAdRewardinRootViewScreenId  voidid = " + i), jsb.reflection.callStaticMethod(m.ios.interface_path, "creatAdRewardinRootViewScreenId:", i)
                        } catch (n) {
                            y.sendVideopush(0, e), console.log("\u8c03\u7528 ios creatAdRewardinRootViewScreenId error = " + JSON.stringify(n)), this._ios_isvideo_move = !1
                        }
                    }, this.createRewardedVideoAd_android = function(e, n, t, o) {
                        var i = m.android.video_id[e];
                        console.log("createRewardedVideoAd_android  voidid = " + i + "    this._android_isvideo_move = " + this._android_isvideo_move);
                        var y = this;
                        if (!i || "" == i) return y.sendVideopush(0, e), console.log("\u5f53\u524d android voidid  \u4e3a\u7a7a"), void(o && o(!1));
                        if (this._android_isvideo_move) return y.sendVideopush(0, e), console.log("\u5f53\u524d\u8fd8\u6709\u672a\u64ad\u653e\u5b8c\u5f97\u89c6\u9891"), void(o && o(!1));
                        console.log("\u6211\u662f\u6700\u65b0\u7684\u4ee3\u7801\uff01\uff01\uff01"), cc.LY_SDK_Native_createVideo_Callback = function(n) {
                            console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_createVideo_Callback  iswin = " + n), "true" == n ? (console.log("LY_SDK_Native_createVideo_Callback  true"), jsb.reflection.callStaticMethod(m.android.interface_path, "showRewardedVideoAd", "()V")) : (y.sendVideopush(0, e), console.log("LY_SDK_Native_createVideo_Callback  false"), y._android_isvideo_move = !1, console.log("self._android_isvideo_move = " + y._android_isvideo_move)), o && o(n)
                        }, cc.LY_SDK_Native_showVideo_Callback = function(o) {
                            console.log("start \u663e\u793a\u56de\u8c03 cc.LY_SDK_Native_showVideo_Callback  iswin = " + o), y._android_isvideo_move = !1, "true" == o ? (y.sendVideopush(1, e), console.log("LY_SDK_Native_showVideo_Callback  true"), n && n()) : (y.sendVideopush(2, e), console.log("LY_SDK_Native_showVideo_Callback  false"), t && t()), console.log("self._android_isvideo_move = " + y._android_isvideo_move)
                        };
                        try {
                            this._android_isvideo_move = !0, console.log("\u5f00\u59cb\u8c03\u7528 android createRewardedVideoAd  voidid = " + i), jsb.reflection.callStaticMethod(m.android.interface_path, "createRewardedVideoAd", "(Ljava/lang/String;)V", i)
                        } catch (n) {
                            y.sendVideopush(0, e), console.log("\u8c03\u7528 android createRewardedVideoAd error = " + JSON.stringify(n)), this._android_isvideo_move = !1
                        }
                    }, this.createRewardedVideoAd_wangmai = function(e, n, t, o) {
                        var i = this;
                        WMAds.showAd({
                            adType: 1,
                            engine: "Cocos",
                            onSuccess: function() {
                                console.log("onSuccess"), o && o(!0)
                            },
                            onClose: function() {
                                console.log("onClose"), i.sendVideopush(1, e), n && n()
                            },
                            onVideoComplete: function() {
                                console.log("onVideoComplete")
                            },
                            onNoAd: function() {
                                console.log("onNoAd"), i.sendVideopush(0, e), o && o(!1)
                            }
                        })
                    }, this.createRewardedVideoAd_juzhang = function(e, t, o, i) {
                        var y = Number(m.juzhang.adType.vertical_Ad);
                        console.log("adtype" + y), cc.LieYingSDK.PolySDK.adjuzsdk.jsOpenAD(y, function(m) {
                            1 == m.status ? (console.log("\u5e7f\u544a\u5f00\u59cb\u64ad\u653e"), i && i(!0), 1 == m.playStatus ? (console.log("\u5e7f\u544a\u64ad\u653e\u5b8c\u6bd5"), n.sendVideopush(1, e), t()) : (console.log("\u5e7f\u544apending"), n.sendVideopush(2, e), o())) : (console.log("\u5e7f\u544a\u64ad\u653e\u5931\u8d25"), n.sendVideopush(0, e), i && i(!1))
                        })
                    }, this.createRewardedVideoAd_360 = function(e, n, t, o) {
                        var i = m.sdk360.video_id[e],
                            y = this;
                        if (!i || "" == i) return console.log("\u5f53\u524d 360 voidid  \u4e3a\u7a7a"), y.sendVideopush(0, e), void(o && o(!1));
                        var a = qh.createRewardedVideoAd({
                            adUnitId: i
                        });
                        a.onError(function(n) {
                            console.log("videoAd onError", n), y.sendVideopush(0, e), o && o(!1)
                        }), a.onClose(function o(i) {
                            i && i.isEnded ? n && (console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), y.sendVideopush(1, e), n()) : t && (console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), y.sendVideopush(2, e), t()), a.offClose && a.offClose(o)
                        }), a.load().then(function() {
                            console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f"), a.show().then(function() {
                                console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u6210\u529f"), o && o(!0)
                            }).catch(function(n) {
                                y.sendVideopush(0, e), console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25"), o && o(!1)
                            })
                        }).catch(function(n) {
                            y.sendVideopush(0, e), o && o(!1), console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u5931\u8d25")
                        })
                    }, this.createRewardedVideoAd_yungao = function(e, n, t, o) {
                        var i = m.yungao.video_id[e];
                        console.log("createRewardedVideoAd_yungao  voidid = " + i + "    this._yungao_isvideo_move = " + this._yungao_isvideo_move);
                        var y = this;
                        if (!i || "" == i) return y.sendVideopush(0, e), console.log("\u5f53\u524d yungao voidid  \u4e3a\u7a7a"), void(o && o(!1));
                        if (this._yungao_isvideo_move) return y.sendVideopush(0, e), console.log("\u5f53\u524d\u8fd8\u6709\u672a\u64ad\u653e\u5b8c\u5f97\u89c6\u9891"), void(o && o(!1));
                        console.log("\u6211\u662f\u6700\u65b0\u7684\u4ee3\u7801\uff01\uff01\uff01"), cc.LY_SDK_Native_createVideo_Callback = function(n) {
                            console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_createVideo_Callback  iswin = " + n), "true" == n ? (console.log("LY_SDK_Native_createVideo_Callback  true"), jsb.reflection.callStaticMethod(m.yungao.interface_path, "showRewardedVideoAd", "()V")) : (y.sendVideopush(0, e), console.log("LY_SDK_Native_createVideo_Callback  false"), y._yungao_isvideo_move = !1, console.log("self._yungao_isvideo_move = " + y._yungao_isvideo_move)), o && o(n)
                        }, cc.LY_SDK_Native_showVideo_Callback = function(o) {
                            console.log("start \u663e\u793a\u56de\u8c03 cc.LY_SDK_Native_showVideo_Callback  iswin = " + o), y._yungao_isvideo_move = !1, "true" == o ? (y.sendVideopush(1, e), console.log("LY_SDK_Native_showVideo_Callback  true"), n && n()) : (y.sendVideopush(2, e), console.log("LY_SDK_Native_showVideo_Callback  false"), t && t()), console.log("self._yungao_isvideo_move = " + y._yungao_isvideo_move)
                        };
                        try {
                            this._yungao_isvideo_move = !0, console.log("\u5f00\u59cb\u8c03\u7528 yungao  createRewardedVideoAd  voidid = " + i), jsb.reflection.callStaticMethod(m.yungao.interface_path, "createRewardedVideoAd", "(Ljava/lang/String;)V", i)
                        } catch (n) {
                            y.sendVideopush(0, e), console.log("\u8c03\u7528 yungao createRewardedVideoAd error = " + JSON.stringify(n)), this._yungao_isvideo_move = !1
                        }
                    }, this.createRewardedVideoAd_android_vivo = function(e, n, t, o) {
                        var i = m.android_vivo.video_id[e];
                        console.log("createRewardedVideoAd_android_vivo  voidid = " + i + "    this._android_vivo_isvideo_move = " + this._android_vivo_isvideo_move);
                        var y = this;
                        if (!i || "" == i) return y.sendVideopush(0, e), console.log("\u5f53\u524d android_vivo voidid  \u4e3a\u7a7a"), void(o && o(!1));
                        if (this._android_vivo_isvideo_move) return y.sendVideopush(0, e), console.log("\u5f53\u524d\u8fd8\u6709\u672a\u64ad\u653e\u5b8c\u5f97\u89c6\u9891"), void(o && o(!1));
                        console.log("\u6211\u662f\u6700\u65b0\u7684\u4ee3\u7801\uff01\uff01\uff01"), cc.LY_SDK_Native_createVideo_Callback = function(n) {
                            console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_createVideo_Callback  iswin = " + n), "true" == n ? (console.log("LY_SDK_Native_createVideo_Callback  true"), jsb.reflection.callStaticMethod(m.android_vivo.interface_path, "showRewardedVideoAd", "()V")) : (y.sendVideopush(0, e), console.log("LY_SDK_Native_createVideo_Callback  false"), y._android_vivo_isvideo_move = !1, console.log("self._android_vivo_isvideo_move = " + y._android_vivo_isvideo_move)), o && o(n)
                        }, cc.LY_SDK_Native_showVideo_Callback = function(o) {
                            console.log("start \u663e\u793a\u56de\u8c03 cc.LY_SDK_Native_showVideo_Callback  iswin = " + o), y._android_vivo_isvideo_move = !1, "true" == o ? (y.sendVideopush(1, e), console.log("LY_SDK_Native_showVideo_Callback  true"), n && n()) : (y.sendVideopush(2, e), console.log("LY_SDK_Native_showVideo_Callback  false"), t && t()), console.log("self._android_vivo_isvideo_move = " + y._android_vivo_isvideo_move)
                        };
                        try {
                            this._android_vivo_isvideo_move = !0, console.log("\u5f00\u59cb\u8c03\u7528 android_vivo  createRewardedVideoAd  voidid = " + i), jsb.reflection.callStaticMethod(m.android_vivo.interface_path, "createRewardedVideoAd", "(Ljava/lang/String;)V", i)
                        } catch (n) {
                            y.sendVideopush(0, e), console.log("\u8c03\u7528 android_vivo createRewardedVideoAd error = " + JSON.stringify(n)), this._android_vivo_isvideo_move = !1
                        }
                    }, this.createRewardedVideoAd_android_oppo = function(e, n, t, o) {
                        var i = m.android_oppo.video_id[e];
                        console.log("createRewardedVideoAd_android_oppo  voidid = " + i + "    this._android_oppo_isvideo_move = " + this._android_oppo_isvideo_move);
                        var y = this;
                        if (!i || "" == i) return y.sendVideopush(0, e), console.log("\u5f53\u524d android_oppo voidid  \u4e3a\u7a7a"), void(o && o(!1));
                        if (this._android_oppo_isvideo_move) return y.sendVideopush(0, e), console.log("\u5f53\u524d\u8fd8\u6709\u672a\u64ad\u653e\u5b8c\u5f97\u89c6\u9891"), void(o && o(!1));
                        console.log("\u6211\u662f\u6700\u65b0\u7684\u4ee3\u7801\uff01\uff01\uff01"), cc.LY_SDK_Native_createVideo_Callback = function(n) {
                            console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_createVideo_Callback  iswin = " + n), "true" == n ? (console.log("LY_SDK_Native_createVideo_Callback  true"), jsb.reflection.callStaticMethod(m.android_oppo.interface_path, "showRewardedVideoAd", "()V")) : (y.sendVideopush(0, e), console.log("LY_SDK_Native_createVideo_Callback  false"), y._android_oppo_isvideo_move = !1, console.log("self._android_oppo_isvideo_move = " + y._android_oppo_isvideo_move)), o && o(n)
                        }, cc.LY_SDK_Native_showVideo_Callback = function(o) {
                            console.log("start \u663e\u793a\u56de\u8c03 cc.LY_SDK_Native_showVideo_Callback  iswin = " + o), y._android_oppo_isvideo_move = !1, "true" == o ? (y.sendVideopush(1, e), console.log("LY_SDK_Native_showVideo_Callback  true"), n && n()) : (y.sendVideopush(2, e), console.log("LY_SDK_Native_showVideo_Callback  false"), t && t()), console.log("self._android_oppo_isvideo_move = " + y._android_oppo_isvideo_move)
                        };
                        try {
                            this._android_oppo_isvideo_move = !0, console.log("\u5f00\u59cb\u8c03\u7528 android_oppo  createRewardedVideoAd  voidid = " + i), jsb.reflection.callStaticMethod(m.android_oppo.interface_path, "createRewardedVideoAd", "(Ljava/lang/String;)V", i)
                        } catch (n) {
                            y.sendVideopush(0, e), console.log("\u8c03\u7528 android_oppo createRewardedVideoAd error = " + JSON.stringify(n)), this._android_oppo_isvideo_move = !1
                        }
                    }, this.createRewardedVideoAd_android_360 = function(e, n, t, o) {
                        var i = m.android_360.video_id[e];
                        console.log("createRewardedVideoAd_android_360  voidid = " + i + "    this._android_360_isvideo_move = " + this._android_360_isvideo_move);
                        var y = this;
                        if (!i || "" == i) return y.sendVideopush(0, e), console.log("\u5f53\u524d android_360 voidid  \u4e3a\u7a7a"), void(o && o(!1));
                        if (this._android_360_isvideo_move) return y.sendVideopush(0, e), console.log("\u5f53\u524d\u8fd8\u6709\u672a\u64ad\u653e\u5b8c\u5f97\u89c6\u9891"), void(o && o(!1));
                        console.log("\u6211\u662f\u6700\u65b0\u7684\u4ee3\u7801\uff01\uff01\uff01"), cc.LY_SDK_Native_createVideo_Callback = function(n) {
                            console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_createVideo_Callback  iswin = " + n), "true" == n ? (console.log("LY_SDK_Native_createVideo_Callback  true"), jsb.reflection.callStaticMethod(m.android_360.interface_path, "showRewardedVideoAd", "()V")) : (y.sendVideopush(0, e), console.log("LY_SDK_Native_createVideo_Callback  false"), y._android_360_isvideo_move = !1, console.log("self._android_360_isvideo_move = " + y._android_360_isvideo_move)), o && o(n)
                        }, cc.LY_SDK_Native_showVideo_Callback = function(o) {
                            console.log("start \u663e\u793a\u56de\u8c03 cc.LY_SDK_Native_showVideo_Callback  iswin = " + o), y._android_360_isvideo_move = !1, "true" == o ? (y.sendVideopush(1, e), console.log("LY_SDK_Native_showVideo_Callback  true"), n && n()) : (y.sendVideopush(2, e), console.log("LY_SDK_Native_showVideo_Callback  false"), t && t()), console.log("self._android_360_isvideo_move = " + y._android_360_isvideo_move)
                        };
                        try {
                            this._android_360_isvideo_move = !0, console.log("\u5f00\u59cb\u8c03\u7528 android_360  createRewardedVideoAd  voidid = " + i), jsb.reflection.callStaticMethod(m.android_360.interface_path, "createRewardedVideoAd", "(Ljava/lang/String;)V", i)
                        } catch (n) {
                            y.sendVideopush(0, e), console.log("\u8c03\u7528 android_360 createRewardedVideoAd error = " + JSON.stringify(n)), this._android_360_isvideo_move = !1
                        }
                    }, this.createRewardedVideoAd_android_yyb = function(e, n, t, o) {
                        var i = m.android_yyb.video_id[e];
                        console.log("createRewardedVideoAd_android_yyb  voidid = " + i + "    this._android_yyb_isvideo_move = " + this._android_yyb_isvideo_move);
                        var y = this;
                        if (!i || "" == i) return y.sendVideopush(0, e), console.log("\u5f53\u524d android_yyb voidid  \u4e3a\u7a7a"), void(o && o(!1));
                        if (this._android_yyb_isvideo_move) return y.sendVideopush(0, e), console.log("\u5f53\u524d\u8fd8\u6709\u672a\u64ad\u653e\u5b8c\u5f97\u89c6\u9891"), void(o && o(!1));
                        console.log("\u6211\u662f\u6700\u65b0\u7684\u4ee3\u7801\uff01\uff01\uff01"), cc.LY_SDK_Native_createVideo_Callback = function(n) {
                            console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_createVideo_Callback  iswin = " + n), "true" == n ? (console.log("LY_SDK_Native_createVideo_Callback  true"), jsb.reflection.callStaticMethod(m.android_yyb.interface_path, "showRewardedVideoAd", "()V")) : (y.sendVideopush(0, e), console.log("LY_SDK_Native_createVideo_Callback  false"), y._android_yyb_isvideo_move = !1, console.log("self._android_yyb_isvideo_move = " + y._android_yyb_isvideo_move)), o && o(n)
                        }, cc.LY_SDK_Native_showVideo_Callback = function(o) {
                            console.log("start \u663e\u793a\u56de\u8c03 cc.LY_SDK_Native_showVideo_Callback  iswin = " + o), y._android_yyb_isvideo_move = !1, "true" == o ? (y.sendVideopush(1, e), console.log("LY_SDK_Native_showVideo_Callback  true"), n && n()) : (y.sendVideopush(2, e), console.log("LY_SDK_Native_showVideo_Callback  false"), t && t()), console.log("self._android_yyb_isvideo_move = " + y._android_yyb_isvideo_move)
                        };
                        try {
                            this._android_yyb_isvideo_move = !0, console.log("\u5f00\u59cb\u8c03\u7528 android_yyb  createRewardedVideoAd  voidid = " + i), jsb.reflection.callStaticMethod(m.android_yyb.interface_path, "createRewardedVideoAd", "(Ljava/lang/String;)V", i)
                        } catch (n) {
                            y.sendVideopush(0, e), console.log("\u8c03\u7528 android_yyb createRewardedVideoAd error = " + JSON.stringify(n)), this._android_yyb_isvideo_move = !1
                        }
                    }, this.createRewardedVideoAd_android_tap = function(e, n, t, o) {
                        var i = m.android_tap.video_id[e];
                        console.log("createRewardedVideoAd_android_tap  voidid = " + i + "    this._android_tapb_isvideo_move = " + this._android_tap_isvideo_move);
                        var y = this;
                        if (!i || "" == i) return y.sendVideopush(0, e), console.log("\u5f53\u524d android_tap voidid  \u4e3a\u7a7a"), void(o && o(!1));
                        if (this._android_tap_isvideo_move) return y.sendVideopush(0, e), console.log("\u5f53\u524d\u8fd8\u6709\u672a\u64ad\u653e\u5b8c\u5f97\u89c6\u9891"), void(o && o(!1));
                        console.log("\u6211\u662f\u6700\u65b0\u7684\u4ee3\u7801\uff01\uff01\uff01"), cc.LY_SDK_Native_createVideo_Callback = function(n) {
                            console.log("start \u521b\u5efa\u56de\u8c03 cc.LY_SDK_Native_createVideo_Callback  iswin = " + n), "true" == n ? (console.log("LY_SDK_Native_createVideo_Callback  true"), jsb.reflection.callStaticMethod(m.android_tap.interface_path, "showRewardedVideoAd", "()V")) : (y.sendVideopush(0, e), console.log("LY_SDK_Native_createVideo_Callback  false"), y._android_tap_isvideo_move = !1, console.log("self._android_tap_isvideo_move = " + y._android_tap_isvideo_move)), o && o(n)
                        }, cc.LY_SDK_Native_showVideo_Callback = function(o) {
                            console.log("start \u663e\u793a\u56de\u8c03 cc.LY_SDK_Native_showVideo_Callback  iswin = " + o), y._android_tap_isvideo_move = !1, "true" == o ? (y.sendVideopush(1, e), console.log("LY_SDK_Native_showVideo_Callback  true"), n && n()) : (y.sendVideopush(2, e), console.log("LY_SDK_Native_showVideo_Callback  false"), t && t()), console.log("self._android_tap_isvideo_move = " + y._android_tap_isvideo_move)
                        };
                        try {
                            this._android_tap_isvideo_move = !0, console.log("\u5f00\u59cb\u8c03\u7528 android_tap  createRewardedVideoAd  voidid = " + i), jsb.reflection.callStaticMethod(m.android_tap.interface_path, "createRewardedVideoAd", "(Ljava/lang/String;)V", i)
                        } catch (n) {
                            y.sendVideopush(0, e), console.log("\u8c03\u7528 android_tap createRewardedVideoAd error = " + JSON.stringify(n)), this._android_tap_isvideo_move = !1
                        }
                    }, this.getVideoAdNumber_4399 = function(e) {
                        /* "undefined" != typeof h5api && h5api.canPlayAd(function(n) {
                            console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", n.canPlayAd, "\u5269\u4f59\u6b21\u6570", n.remain), e && e(n.remain)
                        }) */
                    }, this.sendVideopush = function(e, n, t) {
                        if (m && void 0 !== m && m.runSDK && void 0 !== m.runSDK) {
                            if (m.runSDK != m.sdk_key_4399 && m.runSDK != m.sdk_key_h5) {
                                var o = m[m.runSDK].type,
                                    i = m.game_id,
                                    y = m.HTTPtoken,
                                    c = m.userLoginData.display_id || "000000",
                                    r = m[m.runSDK].video_id,
                                    s = r && r[n] || m.default_video_id;
                                if (void 0 === o || null == o || void 0 === i || null == i || void 0 === c || null == c || void 0 === y || null == y || void 0 === e || null == e || void 0 === s || null == s) return console.log("sendVideopush sendRequest Err : channel_id || game_id || display_id || token  ||  isend || voidid  \u53c2\u6570\u4e3a\u7a7a\u6216\u9519\u8bef"), void(t && t(!1, null));
                                var d = {
                                    token: y,
                                    game_id: i,
                                    channel_id: o,
                                    display_id: c,
                                    isend: e,
                                    advert_id: s,
                                    address_id: n
                                };
                                a.sendRequest(m.videopushUrl, d, function(e) {
                                    e && 200 == e.errorcode ? (console.log("sendVideopush sendRequest success"), t && t(!0, e)) : (console.log("sendVideopush sendRequest failure  data = " + JSON.stringify(e)), t && t(!1, e))
                                })
                            }
                        } else console.log("\u805a\u5408SDK \u521d\u59cb\u5316\u5931\u8d25 \u8bf7\u8054\u7cfb\u7ba1\u7406\u4eba\u5458  By sendVideopush")
                    }, e = this
                }
            }(),
            d = function() {
                var e;
                return function() {
                    if (e) return e;
                    return this.createNativeAd = function(e, n, t) {
                        switch (console.log("createRewardedVideoAd start runSDK = " + m.runSDK), m.runSDK) {
                            case m.sdk_key_qq:
                                if ("undefined" == typeof qq) return void console.log("QQ qq is undefined");
                                break;
                            case m.sdk_key_tt:
                                if ("undefined" == typeof tt) return void console.log("TouTiao tt is undefined");
                                break;
                            case m.sdk_key_vivo:
                                if ("undefined" == typeof qg) return void console.log("vivo qg is undefined");
                                this.createNativeAd_vivo(e, n, t);
                                break;
                            case m.sdk_key_xiaomi:
                                if ("undefined" == typeof qg) return void console.log("xiaomi qg is undefined");
                                break;
                            case m.sdk_key_baidu:
                                if ("undefined" == typeof swan) return void console.log("baidu swan is undefined");
                                break;
                            case m.sdk_key_oppo:
                                if ("undefined" == typeof qg) return void console.log("oppo qg is undefined");
                                break;
                            case m.sdk_key_weixin:
                                if ("undefined" == typeof wx) return void console.log("WX wx is undefined");
                                break;
                            case m.sdk_key_qtt:
                                if ("undefined" == typeof qttGame) return void console.log("qtt qttGame is undefined");
                                break;
                            case m.sdk_key_jikewan:
                                if ("undefined" == typeof AdSDK) return void console.log("\u5373\u523b\u73a9 AdSDK is undefined");
                                break;
                            case m.sdk_key_4399:
                                if ("undefined" == typeof h5api) return void console.log("4399 h5api is undefined");
                                break;
                            default:
                                onLoad && onLoad(!1), console.log(m.runSDK + " is not undefined By createNativeAd")
                        }
                    }, this.createNativeAd_vivo = function(e, n, t) {
                        var o = m.vivo.native_id[e];
                        if (!o || "" == o) return console.log("\u5f53\u524d vivo nativeid  \u4e3a\u7a7a"), void(t && t());
                        var i = void 0,
                            y = void 0;
                        (i = qg.createNativeAd({
                            posId: o
                        })).onLoad(function(e) {
                                qg.showToast({
                                    message: "\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5b8c\u6210"
                                }), console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5b8c\u6210", JSON.stringify(e)), e && e.adList && (y = e.adList.pop(), i.reportAdClick({
                                    adId: y.adId.toString()
                                }), n && n())
                            }), i.onError(function(e) {
                                switch (e.errCode) {
                                    case -3:
                                        console.log("\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25---\u8c03\u7528\u592a\u9891\u7e41", JSON.stringify(e)), qg.showToast({
                                            message: "\u539f\u751f\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25---\u8c03\u7528\u592a\u9891\u7e41"
                                        }), t && t();
                                        break;
                                    default:
                                        console.log("\u539f\u751f\u5e7f\u544a\u5c55\u793a\u5931\u8d25"), console.log(JSON.stringify(e)), qg.showToast({
                                            message: "\u539f\u751f\u5e7f\u544a\u5c55\u793a\u5931\u8d25"
                                        }), t && t()
                                }
                            }),
                            function() {
                                var e = i.load();
                                e && e.then(function() {
                                    qg.showToast({
                                        message: "\u52a0\u8f7d\u6210\u529f"
                                    })
                                }).catch(function(e) {
                                    console.log("\u52a0\u8f7d\u5931\u8d25", JSON.stringify(e)), t && t()
                                })
                            }()
                    }, e = this
                }
            }(),
            l = function() {
                var e;
                return function() {
                    if (e) return e;
                    var n = this;
                    return this.share = function(e, n, t, o) {
                        switch (console.log("Share start runSDK = " + m.runSDK + "  shareTitle = " + t + "  shareImgUrl = " + o), t = void 0 != t ? t : m.shareTitle, o = void 0 != o ? o : m.shareImgUrl, m.runSDK) {
                            case m.sdk_key_qq:
                                if ("undefined" == typeof qq) return void console.log("QQ qq is undefined");
                                this.shareAppMessage_qq(e, n, t, o);
                                break;
                            case m.sdk_key_tt:
                                if ("undefined" == typeof tt) return void console.log("TouTiao tt is undefined");
                                this.shareAppMessage_tt(e, n, t, o);
                                break;
                            case m.sdk_key_vivo:
                                if ("undefined" == typeof qg) return void console.log("vivo qg is undefined");
                                break;
                            case m.sdk_key_xiaomi:
                                if ("undefined" == typeof qg) return void console.log("xiaomi qg is undefined");
                                break;
                            case m.sdk_key_baidu:
                                if ("undefined" == typeof swan) return void console.log("baidu swan is undefined");
                                this.shareAppMessage_baidu(e, n, t, o);
                                break;
                            case m.sdk_key_oppo:
                                if ("undefined" == typeof qg) return void console.log("oppo qg is undefined");
                                break;
                            case m.sdk_key_weixin:
                                if ("undefined" == typeof wx) return void console.log("WX wx is undefined");
                                this.shareAppMessage_wx(e, n, t, o);
                                break;
                            default:
                                console.log(m.runSDK + " is not undefined By Share")
                        }
                    }, this.shareAppMessage_tt = function(e, t, o, i) {
                        "undefined" != typeof tt ? (n._isShare = !0, tt.shareAppMessage({
                            title: o,
                            imageUrl: i,
                            success: function(t) {
                                console.log(t), n._isShare = !1, e && e()
                            },
                            fail: function(e) {
                                console.log(e), n._isShare = !1, t && t()
                            }
                        })) : console.log("tt is undefined")
                    }, this.shareAppMessage_qq = function(e, t, o, i) {
                        "undefined" != typeof wx && (n._isShare = !0, wx.shareAppMessage({
                            title: o,
                            imageUrl: i,
                            success: function(t) {
                                console.log(t), n._isShare = !1, e && e()
                            },
                            fail: function(e) {
                                console.log(e), n._isShare = !1, t && t()
                            }
                        }))
                    }, this.shareAppMessage_baidu = function(e, t, o, i) {
                        "undefined" != typeof swan ? (n._isShare = !0, swan.shareAppMessage({
                            title: o,
                            imageUrl: i,
                            success: function(t) {
                                console.log(t), n._isShare = !1, cc.LieYingSDK.DAO.SystemDAO.sharetask(), e && e()
                            },
                            fail: function(e) {
                                console.log(e), n._isShare = !1, t && t()
                            }
                        })) : console.log("swan is undefined")
                    }, this.shareAppMessage_wx = function(e, t, o, i) {
                        "undefined" != typeof wx && (n._isShare = !0, e && e(), wx.shareAppMessage({
                            title: o,
                            imageUrl: i
                        }))
                    }, e = this
                }
            }(),
            u = function() {
                var e;
                return function() {
                    if (e) return e;
                    this.duration = 20, this.isStart = !1, this.isCanOverVideo = !1, this.minVideoTime = 5e3, this.tips = "\u5f55\u5236\u65f6\u95f4\u6700\u5c115\u79d2\u54e6\uff01", this.showToastTime = 2e3, this.isinitEvent = !1, this.isOpenShareVideo = !1;
                    var n = this;
                    return this.VideoPath = null, this.stop = function(e) {
                        switch (console.log("\u5f55\u5c4f\u7ed3\u675f"), this.videoPath = null, m.runSDK) {
                            case m.sdk_key_qq:
                                if ("undefined" == typeof qq) return void console.log("QQ qq is undefined");
                                break;
                            case m.sdk_key_tt:
                                if ("undefined" == typeof tt) return void console.log("TouTiao tt is undefined");
                                this.stop_tt(e);
                                break;
                            case m.sdk_key_vivo:
                                if ("undefined" == typeof qg) return void console.log("vivo qg is undefined");
                                break;
                            case m.sdk_key_xiaomi:
                                if ("undefined" == typeof qg) return void console.log("xiaomi qg is undefined");
                                break;
                            case m.sdk_key_baidu:
                                if ("undefined" == typeof swan) return void console.log("baidu swan is undefined");
                                break;
                            case m.sdk_key_oppo:
                                if ("undefined" == typeof qg) return void console.log("oppo qg is undefined");
                                break;
                            default:
                                console.log(m.runSDK + " is not undefined By Share")
                        }
                    }, this.start = function(e) {
                        switch (console.log("\u5f55\u5c4f\u5f00\u59cb"), m.runSDK) {
                            case m.sdk_key_qq:
                                if ("undefined" == typeof qq) return void console.log("QQ qq is undefined");
                                break;
                            case m.sdk_key_tt:
                                if ("undefined" == typeof tt) return void console.log("TouTiao tt is undefined");
                                this.start_tt(e);
                                break;
                            case m.sdk_key_vivo:
                                if ("undefined" == typeof qg) return void console.log("vivo qg is undefined");
                                break;
                            case m.sdk_key_xiaomi:
                                if ("undefined" == typeof qg) return void console.log("xiaomi qg is undefined");
                                break;
                            case m.sdk_key_baidu:
                                if ("undefined" == typeof swan) return void console.log("baidu swan is undefined");
                                break;
                            case m.sdk_key_oppo:
                                if ("undefined" == typeof qg) return void console.log("oppo qg is undefined");
                                break;
                            default:
                                console.log(m.runSDK + " is not undefined By Share")
                        }
                    }, this.initEvent = function(e) {
                        if (!this.isinitEvent) {
                            var t = tt.getGameRecorderManager();
                            t.onStop(function(o) {
                                n.isStart = !1, n.isOpenShareVideo || (n.videoPath = o.videoPath, console.log("\u5f55\u5c4f\u7ed3\u675f \uff1a" + o.videoPath));
                                try {
                                    e && e()
                                } catch (e) {}
                                n.isOpenShareVideo && (n.isOpenShareVideo = !1, t.clipVideo({
                                    path: o.videoPath,
                                    timeRange: [n.duration, 0],
                                    success: function(e) {
                                        console.log("clipVideo  success"), n.videoPath = e.videoPath, console.log(e.videoPath), n.shareVideo_tt(e.videoPath)
                                    },
                                    fail: function(e) {
                                        console.log("\u5f55\u5c4f\u5931\u8d25 ! : " + JSON.stringify(e)), tt.showToast({
                                            title: "\u5f55\u5c4f\u5931\u8d25\uff01",
                                            duration: n.showToastTime,
                                            icon: "none",
                                            success: function(e) {
                                                console.log("" + e)
                                            },
                                            fail: function(e) {
                                                console.log("showToast\u8c03\u7528\u5931\u8d25")
                                            }
                                        })
                                    }
                                }))
                            }), t.onStart(function(t) {
                                console.log("\u5f55\u5c4f\u5f00\u59cb"), n.isStart = !0, n.isCanOverVideo = !1;
                                try {
                                    e && e()
                                } catch (e) {}
                                setTimeout(function() {
                                    n.isCanOverVideo = !0, console.log("scheduleOnce = " + n.isCanOverVideo)
                                }, n.minVideoTime)
                            })
                        }
                    }, this.stop_tt = function(e) {
                        n.isCanOverVideo ? (n.isOpenShareVideo = !0, this.initEvent(e), tt.getGameRecorderManager().stop()) : tt.showToast({
                            title: n.tips,
                            duration: n.showToastTime,
                            icon: "none",
                            success: function(e) {
                                console.log("" + e)
                            },
                            fail: function(e) {
                                console.log("showToast\u8c03\u7528\u5931\u8d25")
                            }
                        })
                    }, this.start_tt = function(e) {
                        this.initEvent(e), tt.getGameRecorderManager().start({
                            duration: n.duration
                        })
                    }, this.shareVideo_tt = function(e) {
                        this.videoPath = null;
                        var n = this;
                        "undefined" != typeof tt ? (console.log("shareVideo_tt  videoPath = " + e), tt.shareAppMessage({
                            channel: "video",
                            extra: {
                                videoPath: e
                            },
                            success: function() {
                                console.log("\u5206\u4eab\u89c6\u9891\u6210\u529f")
                            },
                            fail: function(e) {
                                console.log("\u5206\u4eab\u89c6\u9891\u5931\u8d25 ! : " + JSON.stringify(e)), "shareAppMessage:cancel cancel" == e.errMsg || "shareAppMessage:cancel" == e.errMsg ? tt.showToast({
                                    title: "\u5206\u4eab\u89c6\u9891\u5931\u8d25 \uff01",
                                    duration: n.showToastTime,
                                    icon: "none",
                                    success: function(e) {
                                        console.log("" + e)
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                }) : tt.showToast({
                                    title: n.tips,
                                    duration: n.showToastTime,
                                    icon: "none",
                                    success: function(e) {
                                        console.log("" + e)
                                    },
                                    fail: function(e) {
                                        console.log("showToast\u8c03\u7528\u5931\u8d25")
                                    }
                                })
                            }
                        })) : console.log("tt is undefined")
                    }, e = this
                }
            }(),
            v = function() {
                var e;
                return function() {
                    if (e) return e;
                    return this.setClipboardData = function(e, n, t) {
                        switch (m.runSDK) {
                            case m.sdk_key_qq:
                                if ("undefined" == typeof qq) return console.log("QQ qq is undefined"), void(t && t());
                                break;
                            case m.sdk_key_tt:
                                if ("undefined" == typeof tt) return console.log("TouTiao tt is undefined"), void(t && t());
                                this.setClipboardData_tt(e, n, t);
                                break;
                            case m.sdk_key_vivo:
                                if ("undefined" == typeof qg) return console.log("vivo qg is undefined"), void(t && t());
                                break;
                            case m.sdk_key_xiaomi:
                                if ("undefined" == typeof qg) return console.log("xiaomi qg is undefined"), void(t && t());
                                break;
                            case m.sdk_key_baidu:
                                if ("undefined" == typeof swan) return console.log("baidu swan is undefined"), void(t && t());
                                this.setClipboardData_baidu(e, n, t);
                                break;
                            case m.sdk_key_oppo:
                                if ("undefined" == typeof qg) return console.log("oppo qg is undefined"), void(t && t());
                                break;
                            case m.sdk_key_weixin:
                                if ("undefined" == typeof qq) return console.log("WX wx is undefined"), void(t && t());
                                break;
                            case m.sdk_key_h5:
                                this.setClipboardData_h5(e, n, t);
                                break;
                            default:
                                console.log(m.runSDK + " is not undefined By Share")
                        }
                    }, this.getClipboardData = function(e, n) {
                        switch (m.runSDK) {
                            case m.sdk_key_qq:
                                if ("undefined" == typeof qq) return console.log("QQ qq is undefined"), void(n && n());
                                break;
                            case m.sdk_key_tt:
                                if ("undefined" == typeof tt) return console.log("TouTiao tt is undefined"), void(n && n());
                                this.getClipboardData_tt(e, n);
                                break;
                            case m.sdk_key_vivo:
                                if ("undefined" == typeof qg) return console.log("vivo qg is undefined"), void(n && n());
                                break;
                            case m.sdk_key_xiaomi:
                                if ("undefined" == typeof qg) return console.log("xiaomi qg is undefined"), void(n && n());
                                break;
                            case m.sdk_key_baidu:
                                if ("undefined" == typeof swan) return console.log("baidu swan is undefined"), void(n && n());
                                this.getClipboardData_baidu(e, n);
                                break;
                            case m.sdk_key_oppo:
                                if ("undefined" == typeof qg) return console.log("oppo qg is undefined"), void(n && n());
                                break;
                            case m.sdk_key_weixin:
                                if ("undefined" == typeof qq) return console.log("WX wx is undefined"), void(n && n());
                                break;
                            default:
                                n && n(), console.log(m.runSDK + " is not undefined By Share")
                        }
                    }, this.setClipboardData_tt = function(e, n, t) {
                        tt.setClipboardData({
                            data: e,
                            success: function(e) {
                                console.log("setClipboardData\u8c03\u7528\u6210\u529f"), n && n()
                            },
                            fail: function(e) {
                                console.log("setClipboardData\u8c03\u7528\u5931\u8d25"), t && t()
                            }
                        })
                    }, this.getClipboardData_tt = function(e, n) {
                        tt.getClipboardData({
                            success: function(n) {
                                console.log("" + n.data), e && e()
                            },
                            fail: function(e) {
                                console.log("getClipboardData\u8c03\u7528\u5931\u8d25"), n && n()
                            }
                        })
                    }, this.setClipboardData_baidu = function(e, n, t) {
                        swan.setClipboardData({
                            data: e,
                            success: function(e) {
                                console.log("setClipboardData\u8c03\u7528\u6210\u529f"), n && n()
                            },
                            fail: function(e) {
                                console.log("setClipboardData\u8c03\u7528\u5931\u8d25"), t && t()
                            }
                        })
                    }, this.getClipboardData_baidu = function(e, n) {
                        swan.getClipboardData({
                            success: function(n) {
                                console.log("" + n.data), e && e()
                            },
                            fail: function(e) {
                                console.log("getClipboardData\u8c03\u7528\u5931\u8d25"), n && n()
                            }
                        })
                    }, this.setClipboardData_h5 = function(e, n, t) {
                        console.log("\u590d\u5236");
                        var o = e,
                            i = document.createElement("textarea");
                        i.value = o, i.setAttribute("readonly", ""), i.style.contain = "strict", i.style.position = "absolute", i.style.left = "-9999px", i.style.fontSize = "12pt";
                        var m = getSelection(),
                            y = !1;
                        m.rangeCount > 0 && (y = m.getRangeAt(0)), document.body.appendChild(i), i.select(), i.selectionStart = 0, i.selectionEnd = o.length;
                        var a = !1;
                        try {
                            a = document.execCommand("copy")
                        } catch (e) {}
                        return document.body.removeChild(i), y && (m.removeAllRanges(), m.addRange(y)), a ? n && n() : t && t(), a
                    }, e = this
                }
            }(),
            _ = function() {
                var e;
                return function() {
                    if (e) return e;
                    return this.navigateToMiniProgram = function(e, n, t, o, i) {
                        switch (console.log("navigateToMiniProgram start runSDK = " + m.runSDK), m.runSDK) {
                            case m.sdk_key_qq:
                                if ("undefined" == typeof qq) return void console.log("QQ qq is undefined");
                                break;
                            case m.sdk_key_tt:
                                if ("undefined" == typeof tt) return void console.log("TouTiao tt is undefined");
                                break;
                            case m.sdk_key_vivo:
                                if ("undefined" == typeof qg) return void console.log("vivo qg is undefined");
                                break;
                            case m.sdk_key_xiaomi:
                                if ("undefined" == typeof qg) return void console.log("xiaomi qg is undefined");
                                break;
                            case m.sdk_key_baidu:
                                if ("undefined" == typeof swan) return void console.log("baidu swan is undefined");
                                this.navigateToMiniProgram_baidu(e, n, t, o, i);
                                break;
                            case m.sdk_key_oppo:
                                if ("undefined" == typeof qg) return void console.log("oppo qg is undefined");
                                this.navigateToMiniProgram_oppo(e, n, t, o, i);
                                break;
                            case m.sdk_key_weixin:
                                if ("undefined" == typeof wx) return void console.log("WX wx is undefined");
                                break;
                            case m.sdk_key_qtt:
                                if ("undefined" == typeof qttGame) return void console.log("qtt qttGame is undefined");
                                break;
                            case m.sdk_key_jikewan:
                                if ("undefined" == typeof AdSDK) return void console.log("\u5373\u523b\u73a9 AdSDK is undefined");
                                break;
                            case m.sdk_key_4399:
                                if ("undefined" == typeof h5api) return void console.log("4399 h5api is undefined");
                                break;
                            default:
                                i && i(), console.log(m.runSDK + " is not undefined By createNativeAd")
                        }
                    }, this.navigateToMiniProgram_baidu = function(e, n, t, o, i) {
                        swan.navigateToMiniProgram({
                            appKey: e,
                            success: function(e) {
                                o && o(), console.log("navigateToMiniProgram success", e)
                            },
                            fail: function(e) {
                                i && i(), console.log("navigateToMiniProgram fail", e)
                            }
                        })
                    }, this.navigateToMiniProgram_oppo = function(e, n, t, o, i) {}, e = this
                }
            }(),
            p = function() {
                var e;
                return function() {
                    if (e) return e;
                    var n = this;
                    return this.isShow = function(e) {
                        switch (n.uiType_ID = e, m.runSDK) {
                            case m.sdk_key_qq:
                                return n.setUiShowState(!1, !0, !0);
                            case m.sdk_key_tt:
                                return n.setUiShowState(!0, !0, !0);
                            case m.sdk_key_weixin:
                            case m.sdk_key_baidu:
                                return n.setUiShowState(!1, !0, !0);
                            case m.sdk_key_vivo:
                            case m.sdk_key_oppo:
                            case m.sdk_key_xiaomi:
                            case m.sdk_key_4399:
                            case m.sdk_key_qtt:
                            case m.sdk_key_jikewan:
                            case m.sdk_key_ios:
                            case m.sdk_key_android:
                            case m.sdk_key_wangmai:
                            case m.sdk_key_juzhang:
                            case m.sdk_key_h5:
                            case m.sdk_key_360:
                            case m.sdk_key_yungao:
                            case m.sdk_key_android_yyb:
                            case m.sdk_key_android_vivo:
                            case m.sdk_key_android_oppo:
                            case m.sdk_key_android_360:
                            case m.sdk_key_android_tap:
                                return n.setUiShowState(!1, !1, !0);
                            default:
                                console.log(m.runSDK + " is not undefined By isShow")
                        }
                    }, this.setUiShowState = function(e, t, o) {
                        var i = !1;
                        if (n.uiType_ID) {
                            switch (n.uiType_ID) {
                                case m.ui_Type.recorderUI:
                                    i = e;
                                    break;
                                case m.ui_Type.shareUI:
                                    i = t;
                                    break;
                                case m.ui_Type.videoUI:
                                    i = o
                            }
                            return i
                        }
                    }, e = this
                }
            }();
        n.exports = {
            LoginAuth: new c,
            BannerAd: new r,
            VideoAd: new s,
            NativeAd: new d,
            Share: new l,
            sdkConfig: m,
            Tools: new y,
            Recorder: new u,
            Clipboard: new v,
            Navigate: new _,
            PlatformUIShow: new p,
            getLogoIMG: function(e) {
                if (m && void 0 !== m && m.runSDK && void 0 !== m.runSDK) {
                    if (m.runSDK != m.sdk_key_4399 && m.runSDK != m.sdk_key_h5) {
                        var n = m[m.runSDK].type,
                            t = m.game_id;
                        if (void 0 === n || null == n || void 0 === t || null == t) return console.log("sendBannerpush sendRequest Err : channel_id || game_id  \u53c2\u6570\u4e3a\u7a7a\u6216\u9519\u8bef"), void(e && e(!1, null));
                        var o = {
                            game_id: t,
                            channel_id: n
                        };
                        a.sendRequest(m.screenimgUrl, o, function(n) {
                            if (!n) return console.log("getLogoIMG sendRequest failure  Server ERR  data is null  data = " + n), void(e && e(!1, null));
                            200 == n.code ? (console.log("getLogoIMG sendRequest success data = " + JSON.stringify(n)), e && e(!0, n.data)) : (console.log("getLogoIMG sendRequest failure  data = " + JSON.stringify(n)), e && e(!1, null))
                        })
                    }
                } else console.log("\u805a\u5408SDK \u521d\u59cb\u5316\u5931\u8d25 \u8bf7\u8054\u7cfb\u7ba1\u7406\u4eba\u5458  By sendBannerpush")
            },
            platformEventCallback: function(e, n, t) {
                switch (m.runSDK) {
                    case m.sdk_key_qq:
                        "undefined" != typeof qq ? 0 != m.qq.video_id.length ? e() : n() : t();
                        break;
                    case m.sdk_key_tt:
                        "undefined" != typeof tt ? 0 != m.tt.video_id.length ? e() : n() : t();
                        break;
                    case m.sdk_key_weixin:
                        "undefined" != typeof wx ? 0 != m.weixin.video_id.length ? e() : n() : t();
                        break;
                    case m.sdk_key_baidu:
                        "undefined" != typeof swan ? 0 != m.baidu.video_id.length ? e() : n() : t();
                        break;
                    case m.sdk_key_vivo:
                        "undefined" != typeof qg && 0 != m.vivo.video_id.length ? e() : t();
                        break;
                    case m.sdk_key_oppo:
                        "undefined" != typeof qg && 0 != m.oppo.video_id.length ? e() : t();
                        break;
                    case m.sdk_key_xiaomi:
                        "undefined" != typeof qg && 0 != m.xiaomi.video_id.length ? e() : t();
                        break;
                    case m.sdk_key_4399:
                        "undefined" != typeof h5api ? cc.LieYingSDK.PolySDK.VideoAd.getVideoAdNumber(function(n) {
                            0 == n ? t() : e()
                        }) : t();
                        break;
                    case m.sdk_key_qtt:
                        "undefined" != typeof qttGame ? e() : t();
                        break;
                    case m.sdk_key_jikewan:
                        "undefined" != typeof AdSDK && 0 != m.jikewan.video_adId.length ? e() : t();
                        break;
                    case m.sdk_key_ios:
                        (cc || cc.sys.isNative || cc.sys.os == cc.sys.OS_IOS) && 0 != m.ios.video_id.length ? e() : t();
                        break;
                    case m.sdk_key_android:
                        (cc || cc.sys.isNative || cc.sys.os == cc.sys.OS_ANDROID) && 0 != m.android.video_id.length ? e() : t();
                        break;
                    case m.sdk_key_wangmai:
                        "undefined" != typeof WMAds ? e() : t();
                        break;
                    case m.sdk_key_juzhang:
                        cc.LieYingSDK.PolySDK.adjuzsdk ? e() : t();
                        break;
                    case m.sdk_key_360:
                        "undefined" != typeof qh ? e() : t();
                        break;
                    case m.sdk_key_yungao:
                    case m.sdk_key_android_yyb:
                    case m.sdk_key_android_vivo:
                    case m.sdk_key_android_oppo:
                    case m.sdk_key_android_360:
                    case m.sdk_key_android_tap:
                        (cc || cc.sys.isNative || cc.sys.os == cc.sys.OS_ANDROID) && 0 != m.yungao.video_id.length ? e() : t();
                        break;
                    case m.sdk_key_h5:
                    default:
                        t()
                }
            }
        }, cc.LieYingSDK = cc.LieYingSDK || {}, cc.LieYingSDK.PolySDK = n.exports, cc._RF.pop()
    }, {}],
    Recording: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "f5e9eeiLa5ACaMcSWGJq/DQ", "Recording");
        e("PolySDK");
        cc.Class({
            extends: cc.Component,
            properties: {
                videoBtnsNode: cc.Node
            },
            onLoad: function() {
                this.videoBtnsNode = this.node, this.videoBtnsNode && (this.videoBtnsNode.active = cc.LieYingSDK.PolySDK.PlatformUIShow.isShow(cc.LieYingSDK.PolySDK.sdkConfig.ui_Type.recorderUI), this.videoBtnsNode.active && this.updateVideoBtnState())
            },
            onStopRecorder: function() {
                cc.LieYingSDK.PolySDK.Recorder.stop(this.updateVideoBtnState.bind(this))
            },
            onStartRecorder: function() {
                cc.LieYingSDK.PolySDK.Recorder.start(this.updateVideoBtnState.bind(this))
            },
            OnshareRecorder: function() {
                cc.LieYingSDK.PolySDK.Recorder.shareVideo_tt(cc.LieYingSDK.PolySDK.Recorder.videoPath), this.updateVideoBtnState()
            },
            updateVideoBtnState: function() {
                null == cc.LieYingSDK.PolySDK.Recorder.videoPath ? cc.LieYingSDK.PolySDK.Recorder.isStart ? (this.videoBtnsNode.children[0].active = !1, this.videoBtnsNode.children[1].active = !0, this.videoBtnsNode.children[2].active = !1) : (this.videoBtnsNode.children[0].active = !0, this.videoBtnsNode.children[1].active = !1, this.videoBtnsNode.children[2].active = !1) : (this.videoBtnsNode.children[0].active = !1, this.videoBtnsNode.children[1].active = !1, this.videoBtnsNode.children[2].active = !0)
            }
        }), cc._RF.pop()
    }, {
        PolySDK: "PolySDK"
    }],
    Tool: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "988caV+w39LxaCpHhv4gIcn", "Tool");
        var o = e("MyPointExtension"),
            i = i || {};
        i.MyPointExtension = o, i.touchPointToObjectRotation = function(e) {
            return o.pAngleSigned(e, cc.v2(0, 1)) / Math.PI * 180 - 90
        }, i.bevelLength = function(e) {
            var n = Math.pow(Math.abs(e.x), 2) + Math.pow(Math.abs(e.y), 2);
            return Math.abs(Math.sqrt(n))
        }, i.bytesToSize = function(e) {
            if (0 === e) return "0 B";
            var n, t = Math.floor(Math.log(e) / Math.log(1e3));
            return 0 == t ? n = e / Math.pow(1e3, t) : (n = e / Math.pow(1e3, t), n = Math.floor(100 * n) / 100 + ["", "k", "m", "b", "t", "p", "e"][t]), n
        }, i.Thousands = function(e) {
            e = (e || 0).toString();
            for (var n = ""; e.length > 3;) n = "," + e.slice(-3) + n, e = e.slice(0, e.length - 3);
            return e && (n = e + n), n
        }, i.GetOfflineTime = function(e) {
            var n = e,
                t = new Date;
            cc.log(t);
            var o = t.getTime() - new Date(n).getTime();
            cc.log("\u603b\u65f6\u95f4" + o);
            var i = Math.floor(o / 864e5),
                m = o % 864e5,
                y = Math.floor(m / 36e5),
                a = m % 36e5,
                c = Math.floor(a / 6e4),
                r = a % 6e4,
                s = Math.round(r / 1e3),
                d = {
                    days: i,
                    hours: y,
                    minutes: c,
                    seconds: s
                };
            return cc.log(" \u76f8\u5dee " + i + "\u5929 " + y + "\u5c0f\u65f6 " + c + " \u5206\u949f" + s + " \u79d2"), d
        }, i.GetLength = function(e) {
            for (var n = 0, t = e.length, o = -1, i = 0, m = 0, y = 0; y < t; y++)(o = e.charCodeAt(y)) >= 0 && o <= 128 ? (n += 1, m += 1) : (n += 1, i += 1);
            return {
                realLength: n,
                english: m,
                chinesenum: i
            }
        }, i.fomatFloat = function(e, n) {
            return Math.round(e * Math.pow(10, n)) / Math.pow(10, n)
        }, i.fRandomBy = function(e, n) {
            switch (arguments.length) {
                case 1:
                    return parseInt(Math.random() * e + 1);
                case 2:
                    return parseInt(Math.random() * (n - e + 1) + e);
                default:
                    return 0
            }
        }, i.RemoveTool = function(e, n) {
            var t = function(n) {
                for (var t = 0; t < e.length; t++)
                    if (e[t] == n) return t;
                return -1
            }(n);
            t > -1 && e.splice(t, 1)
        }, i.getNodeData = function(e) {
            return "1.9.3" == cc.ENGINE_VERSION ? e.detail : e
        }, n.exports = i, cc._RF.pop()
    }, {
        MyPointExtension: "MyPointExtension"
    }],
    UIMgr: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "7f38c+NFwJCXIlU4xWSXQzK", "UIMgr"), cc.Class({
            extends: cc.Component,
            properties: {},
            loaderSpr: function(e, n) {
                (e || "" != n) && cc.loader.loadRes(n, cc.SpriteFrame, function(n, t) {
                    n ? cc.log(JSON.stringify(n)) : e.spriteFrame = t
                })
            },
            loaderPrefab: function(e, n, t, o) {
                "" != e && cc.loader.loadRes(e, function(e, i) {
                    if (e) cc.log(JSON.stringify(e));
                    else {
                        var m = cc.instantiate(i);
                        n && t(m, o)
                    }
                })
            },
            loaderJson: function(e, n, t) {
                cc.loader.loadRes(e, function(e, o) {
                    e ? cc.log(JSON.stringify(e)) : n && t(o)
                })
            }
        }), cc._RF.pop()
    }, {}],
    Utils: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "653b2pIdX1N+YhSfWeSMceQ", "Utils"), cc.Class({
            extends: cc.Component,
            addClickEvent: function(e, n, t, o, i) {
                var m = new cc.Component.EventHandler;
                m.target = n, m.component = t, m.handler = o, m.customEventData = i, e.getComponent(cc.Button).clickEvents.push(m)
            },
            addSlideEvent: function(e, n, t, o) {
                var i = new cc.Component.EventHandler;
                i.target = n, i.component = t, i.handler = o, e.getComponent(cc.Slider).slideEvents.push(i)
            },
            addEscEvent: function(e) {
                cc.eventManager.addListener({
                    event: cc.EventListener.KEYBOARD,
                    onKeyPressed: function(e, n) {},
                    onKeyReleased: function(e, n) {
                        e == cc.KEY.back && cc.vv.alert.show("\u63d0\u793a", "\u786e\u5b9a\u8981\u9000\u51fa\u6e38\u620f\u5417\uff1f", function() {
                            cc.game.end()
                        }, !0)
                    }
                }, e)
            },
            backstageProcess: function(e, n) {
                cc.game.on(cc.game[e], n)
            }
        }), cc._RF.pop()
    }, {}],
    Wheel: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "84ac9AZZS1F/7osSGgH5paW", "Wheel"), cc.Class({
            extends: cc.Component,
            properties: {
                spinBtn: {
                    default: null,
                    type: cc.Button,
                    visible: !0,
                    displayName: "SpinBtn"
                },
                wheelSp: {
                    default: null,
                    type: cc.Sprite
                },
                maxSpeed: {
                    default: 5,
                    type: cc.Float,
                    max: 15,
                    min: 2
                },
                duration: {
                    default: .5,
                    type: cc.Float,
                    max: .5,
                    min: .2,
                    tooltip: "\u51cf\u901f\u524d\u65cb\u8f6c\u65f6\u95f4"
                },
                acc: {
                    default: 5,
                    type: cc.Float,
                    max: 5,
                    min: 2,
                    tooltip: "\u52a0\u901f\u5ea6"
                },
                targetID: {
                    default: 0,
                    type: cc.Integer,
                    max: 17,
                    min: 0,
                    tooltip: "\u6307\u5b9a\u7ed3\u675f\u65f6\u7684\u9f7f\u8f6e"
                },
                springback: {
                    default: !1,
                    tooltip: "\u65cb\u8f6c\u7ed3\u675f\u662f\u5426\u56de\u5f39"
                },
                effectAudio: {
                    default: null,
                    url: cc.AudioClip
                },
                carouselCouponLabel: {
                    default: null,
                    type: cc.Label,
                    visible: !0,
                    displayName: "\u8f6c\u76d8\u52b5"
                },
                _isClick: 0,
                _arr: [],
                _arr1: []
            },
            onLoad: function() {
                cc.log("....onload"), this.wheelState = 0, this.curSpeed = 0, this.spinTime = 0;
                for (var e = 0; e < cc.vv.CG.gearInfo.length; e++)
                    for (var n = cc.vv.CG.gearInfo[e], t = 0; t < n.gailv; t++) this._arr.push(n);
                for (var o = 0; o < cc.vv.CG.gearInfo.length; o++)
                    for (var i = cc.vv.CG.gearInfo[o], m = 0; m < i.gailv; m++) "crit" != i.type && this._arr1.push(i);
                this.defaultAngle = 10, this.gearAngle = 360 / cc.vv.CG.gearInfo.length, this.wheelSp.node.rotation = this.defaultAngle, this.finalAngle = 0, this.effectFlag = 0, this.lastTimeRandom = null, this._carouselCouponNum = cc.vv.PP.carouselCouponNum, cc.sys.isBrowser || cc.loader.loadRes("Sound/game_turntable", function(e, n) {
                    e && cc.log("...err:" + e)
                }), this.setcarouselCoupon()
            },
            start: function() {},
            setcarouselCoupon: function() {
                this.carouselCouponLabel && (this.carouselCouponLabel.string = "x" + cc.vv.PP.carouselCouponNum)
            },
            caculateFinalAngle: function(e) {
                this.finalAngle = 360 - this.targetID * this.gearAngle + this.defaultAngle, this.springback && (this.finalAngle += this.gearAngle)
            },
            onClickedbtn: function(e, n) {
                switch (n) {
                    case "spin":
                        if (1 == cc.vv.PP.IsStartlottery && (cc.vv.PP.IsStartlottery = 2), cc.vv.PP.carouselCouponNum <= 0) this.addcarouselCoupon("Carousel_Coupon_Inadequate");
                        else {
                            if (0 !== this.wheelState) return;
                            this.decAngle = 720, this.wheelState = 1, this.curSpeed = 0, this.spinTime = 0;
                            var t = this._arr[Math.round(Math.random() * (this._arr.length - 1))];
                            if (this.targetID = this.gettargetID(t), null != this.lastTimeRandom && "crit" == cc.vv.CG.gearInfo[this.targetID].type && "crit" == cc.vv.CG.gearInfo[this.lastTimeRandom].type) {
                                var o = this._arr1[Math.round(Math.random() * (this._arr1.length - 1))];
                                this.targetID = this.gettargetID(o)
                            }
                            cc.log("Số ngẫu nhiên" + this._arr[this.targetID]), this.lastTimeRandom = this.targetID, cc.vv.PP.carouselCouponNum--, this.setcarouselCoupon()
                        }
                        break;
                    case "addcarouselCoupon":
                        cc.vv.PP.carouselCouponNum <= 0 ? this.addcarouselCoupon("Carousel_Coupon_Inadequate") : this.addcarouselCoupon("Receiving_Carousel_Coupon")
                }
            },
            gettargetID: function(e) {
                for (var n = 0; n < cc.vv.CG.gearInfo.length; n++) {
                    var t = cc.vv.CG.gearInfo[n];
                    if (t.type == e.type && t.num == e.num && t.gailv == e.gailv) return n
                }
            },
            addcarouselCoupon: function(e) {
                var n = {
                    ArticleAtlas: cc.vv.prompt.popupspriteAtlas,
                    ArticlespriteFrame: cc.vv.CG.popupSprList.carouselCoupon,
                    input_text: cc.vv.CG.Text.Receive_award,
                    incomevalue: "x1",
                    Clicked: cc.vv.rr.receivecarouselCouponsReward,
                    rewardNum: 1,
                    Clicked1: this.setcarouselCoupon.bind(this),
                    isVideo_reward: !0,
                    type: "addcarouselCoupon"
                };
                cc.vv.rr.Video_reward(this, e, "", "carouselCoupon", "mashanglinqu", "", cc.vv.rr.watchAds, cc.vv.rr.closedPopup, n), this._isClick = 0
            },
            editBoxDidEndEditing: function(e) {
                var n = parseInt(e.string);
                if (isNaN(n)) return cc.sys.isBrowser ? alert("please input a number!") : cc.log(".....invalid input"), void(this.targetID = Math.round(Math.random() * (this.gearNum - 1)));
                this.targetID = n
            },
            update: function(e) {
                if (0 !== this.wheelState)
                    if (1 == this.wheelState)
                        if (this.spinTime += e, this.wheelSp.node.rotation = this.wheelSp.node.rotation + this.curSpeed, cc.log(this.wheelSp.node.rotation), this.curSpeed <= this.maxSpeed) this.curSpeed += this.acc, cc.log("....\u52a0\u901f,speed:" + this.curSpeed);
                        else {
                            if (this.spinTime < this.duration) return;
                            this.finalAngle = 360 - this.targetID * this.gearAngle + this.defaultAngle, this.maxSpeed = this.curSpeed, this.springback && (this.finalAngle += this.gearAngle), this.wheelSp.node.rotation = this.finalAngle, this.wheelState = 2
                        }
                else if (2 == this.wheelState) {
                    var n = this.wheelSp.node.rotation,
                        t = n - this.finalAngle;
                    if (this.curSpeed = this.maxSpeed * ((this.decAngle - t) / this.decAngle) + .2, this.wheelSp.node.rotation = n + this.curSpeed, this.decAngle / 2 - t <= 0)
                        if (this.wheelState = 0, this.wheelSp.node.rotation = this.finalAngle, this.springback) {
                            var o = cc.rotateBy(.6, -this.gearAngle),
                                i = cc.sequence(cc.delayTime(.2), o, cc.callFunc(this.showRes, this));
                            this.wheelSp.node.runAction(i)
                        } else this.showRes()
                }
            },
            showRes: function() {
                this.scheduleOnce(function() {
                    this._isClick = 0;
                    var e = cc.vv.CG.gearInfo[this.targetID],
                        n = 0;
                    if ("gold" == e.type) n = Math.round(cc.vv.CarsMgr.getEarningsperSecond() * e.num), cc.vv.rr.Receive_award(this, "gold", "+", n, cc.vv.rr.receivegoldReward, "lottery");
                    else if ("diamond" == e.type) n = e.num, n += n * cc.vv.PP.critNum, cc.vv.rr.Receive_award(this, "diamond", "x", n, cc.vv.rr.receivediamondsReward, "lottery");
                    else if ("crit" == e.type) {
                        var t = "\u7ffb" + (n = e.num) + "\u500d",
                            o = {
                                ArticleAtlas: cc.vv.prompt.popupspriteAtlas,
                                ArticlespriteFrame: cc.vv.CG.popupSprList.crit,
                                input_text: cc.vv.CG.Text.Double + t,
                                incomevalue: "x" + n,
                                Clicked: cc.vv.rr.receivecritNumReward,
                                rewardNum: n,
                                Clicked1: this.setcarouselCoupon.bind(this),
                                isVideo_reward: !0,
                                type: "crit"
                            };
                        cc.vv.rr.Video_reward(this, "Double", t, "crit", "mashanglinqu", "x" + n, cc.vv.rr.watchAds, cc.vv.rr.closedPopup, o)
                    }
                }.bind(this), .5)
            }
        }), cc._RF.pop()
    }, {}],
    actor: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "9923as3FJRKd74coGuruoZT", "actor");
        var o = 0,
            i = 1,
            m = 3,
            y = 4,
            a = -1,
            c = e("ugame"),
            r = cc.Class({
                name: "walk_anim_params",
                properties: {
                    anim_frames: {
                        type: cc.SpriteFrame,
                        default: []
                    },
                    anim_duration: .1,
                    scale_x: 1
                }
            });
        cc.Class({
            extends: cc.Component,
            properties: {
                walk_anim_set: {
                    default: [],
                    type: r
                },
                str: "",
                _isenter: !1
            },
            onLoad: function() {
                this.speed = 25, this.state = o, this.blood_bar = this.node.getChildByName("blood_bar").getComponent(cc.ProgressBar), this.anim = this.node.getChildByName("anim"), this.hurtRool = this.node.getChildByName("hurtRool"), this.frame_anim = this.anim.addComponent("frame_anim"), this.locking = this.node.getChildByName("locking"), this.deathanim = this.node.getChildByName("death").getComponent(cc.Animation), this.hitanim = this.node.getChildByName("hit").getComponent(cc.Animation), this.anim_dir = a, this.actor_game_params = null, this._property = {}, this.search_R = 40, this.MaxQuantity = 15, this.MinQuantity = 1, this._isDriftingBlood = !0
            },
            setInItAll: function() {
                this.state = o, this.anim_dir = a, this.blood_bar.progress = 1, this.blood_bar.node.active = !0, this.anim.active = !0, this.deathanim.node.active = !1, this.hitanim.node.active = !1, this.locking.active = !1, this.ispalyhitAnim = !0, this.unscheduleAllCallbacks(), this.node.stopAllActions()
            },
            set_locking_isShow: function(e) {
                this.locking.active = e
            },
            set_actor_params: function(e) {
                this.actor_params = e, this.speed = this.actor_params.speed, this.health = this.actor_params.health, this.attack = this.actor_params.attack, this.grade = this.actor_params.grade, this.income = this.actor_params.income
            },
            gen_at_road: function(e) {
                e.length < 2 || (this.road_data = e, this.state = i, this.node.setPosition(new cc.v2(e[0].x, e[0].y)), this.next_step = 1, this.walk_to_next())
            },
            play_walk_anim: function(e) {
                this._isenter || (this.frame_anim.sprite_frames = this.walk_anim_set[0].anim_frames, this.frame_anim.duration = this.walk_anim_set[0].anim_duration, this.anim.scaleX = this.walk_anim_set[0].scale_x, this.frame_anim.play_loop(), this._isenter = !0)
            },
            walk_to_next: function() {
                this.state = i;
                var e = this.node.getPosition(),
                    n = new cc.v2(this.road_data[this.next_step].x, this.road_data[this.next_step].y),
                    t = new cc.v2(0, 0);
                t.x = n.x - e.x, t.y = n.y - e.y;
                var o = cc.vv.tool.bevelLength(t);
                this.walk_time_total = o / this.speed, this.vx = this.speed * t.x / o, this.vy = this.speed * t.y / o, this.walk_time = 0, this.play_walk_anim(t)
            },
            position_after_time: function(e) {
                if (this.state != i) return this.node.getPosition();
                for (var n = this.node.getPosition(), t = this.next_step; e > 0 && t < this.road_data.length;) {
                    var o = new cc.v2(this.road_data[t].x, this.road_data[t].y),
                        m = new cc.v2(0, 0);
                    m.x = o.x - n.x, m.y = o.y - n.y;
                    var y = cc.vv.tool.bevelLength(m),
                        a = y / this.speed;
                    if (!(e > a)) {
                        var c = this.speed * m.x / y * e,
                            r = this.speed * m.y / y * e;
                        return n.x += c, n.y += r, n
                    }
                    e -= a, n = o, t++
                }
                return new cc.v2(this.road_data[t - 1].x, this.road_data[t - 1].y)
            },
            walk_update: function(e) {
                if (this.state == i) {
                    this.walk_time += e, this.walk_time >= this.walk_time_total && (e -= this.walk_time - this.walk_time_total);
                    var n = this.vx * e,
                        t = this.vy * e;
                    this.node.x += n, this.node.y += t, this.walk_time >= this.walk_time_total && (this.next_step++, this.next_step >= this.road_data.length ? (this.state = y, cc.vv.CG.isopenCaveat || (cc.vv.CG.isopenCaveat = !0, cc.vv.EventMgr.AttackTheCityWallAnimShow()), this.scheduleOnce(this.attackCrystal.bind(this), 1)) : this.walk_to_next())
                }
            },
            attackCrystal: function() {
                if (!cc.vv.CG.isCrystaldamaged || this.state == i) {
                    if (cc.vv.PP.remaining_crystalHP > 0 && (cc.vv.PP.remaining_crystalHP = cc.vv.PP.remaining_crystalHP - this.attack, cc.vv.PP.remaining_crystalHP <= cc.vv.CG.MaxcrystalHP / 2 && cc.vv.PP.remaining_crystalHP > cc.vv.CG.MaxcrystalHP / 2 - 10 && cc.vv.EventMgr.Replace_crystal_Image({
                            isChangePicture: !1
                        }), !0), cc.vv.PP.remaining_crystalHP <= 0) {
                        cc.vv.PP.remaining_crystalHP = 0, !1, cc.vv.CG.isopenCaveat = !1, cc.vv.EventMgr.AttackTheCityWallAnimShow(), cc.vv.EventMgr.Replace_crystal_Image({
                            isChangePicture: !1
                        });
                        var e = cc.callFunc(function() {
                                cc.vv.CG.isCrystaldamaged = !0, c.clear_ememy_set(), c.Gen_round_enemy(!1), cc.vv.EventMgr.Reply_to_life_popup()
                            }.bind(this)),
                            n = cc.sequence(cc.moveTo(3, -356, -26), e);
                        this.node.runAction(n)
                    }
                    cc.vv.EventMgr.Restore_blood_volume(), cc.vv.CG.isCrystaldamaged || this.scheduleOnce(this.attackCrystal.bind(this), 1)
                }
            },
            update: function(e) {
                this.state == i && this.walk_update(e)
            },
            on_arrow_bullet_attack: function(e) {
                if (this.health -= e, this.floatingWord(e), this.health <= 0) {
                    this.health = 0, this.state = m;
                    var n = {
                        node: this.node,
                        search_R: this.search_R,
                        MaxQuantity: this.MaxQuantity,
                        MinQuantity: this.MinQuantity
                    };
                    cc.vv.EventMgr.recyclingIncome(n), cc.vv.PP.glod += this.income, cc.vv.wxAPI.setUserCloudStorage("Wave", Number(cc.vv.PP.cur_round) + 1), this.setDeathAnim(!0)
                } else {
                    var t = this.health / this.actor_params.health;
                    this.blood_bar.progress = t, this.ispalyhitAnim && (this.hitanim.node.active = !0, this.ispalyhitAnim = !1, this.hitanim.play(), this.hitanim.on("finished", this.onhitFinished, this))
                }
                c.Gen_round_enemy(!0)
            },
            onhitFinished: function() {
                this.ispalyhitAnim = !0, this.hitanim.node.active = !1
            },
            floatingWord: function(e) {
                if (this._isDriftingBlood) {
                    var n = cc.vv.objectpool.createEnemy(3, 0),
                        t = n.getComponent(cc.Label),
                        o = cc.vv.objectpool.MyPrefabs_set[3].content,
                        i = this.node.position.x,
                        m = this.node.position.y + this.anim.height + 25;
                    o.addChild(n), n.scale = 0, n.setPosition(new cc.v2(i, m)), t.string = "-" + cc.vv.tool.bytesToSize(e);
                    var y = cc.callFunc(function() {
                            t.string = "", n.setPosition(new cc.v2(0, 0)), cc.vv.objectpool.onEnemyKilled(3, 0, n)
                        }, n),
                        a = cc.callFunc(function() {
                            this._isDriftingBlood = !0
                        }.bind(this));
                    this._isDriftingBlood = !1;
                    var c = cc.sequence(cc.scaleTo(.2, 1), a, cc.moveTo(.4, i, m + 50), y);
                    n.runAction(c)
                }
            },
            setDeathAnim: function(e) {
                this.blood_bar.node.active = !e, this.anim.active = !e, this.locking.active = !e, this.hitanim.node.active = !e, e && (this._isenter = !0, cc.vv.CG.lockingEnEmy == this.node && (cc.vv.CG.lockingEnEmy = null), this.deathanim.node.active = e, c.remove_ememy(this.node), this.deathanim.play(), this.deathanim.on("finished", this.ondeathFinished, this))
            },
            ondeathFinished: function() {
                this._isenter = !0, this.deathanim.node.active = !1, this.unscheduleAllCallbacks(), this.node.stopAllActions()
            },
            setAllproperty: function(e) {
                var n = {
                    isNewEnemy: e
                };
                this._property = n
            },
            getAllproperty: function() {
                return this._property
            }
        }), cc._RF.pop()
    }, {
        ugame: "ugame"
    }],
    arrow_bullet: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "c7fda5mBo9AXpdZhQaKZNzB", "arrow_bullet");
        var o = e("ugame");
        cc.Class({
            extends: cc.Component,
            properties: {
                speed: 150,
                attack: 10,
                arrow_SpriteAtlas: {
                    default: null,
                    type: cc.SpriteAtlas,
                    displayName: "\u5b50\u5f39\u7684\u56fe\u96c6",
                    tooltip: "\u5b50\u5f39\u7684\u56fe\u96c6"
                },
                arrow_sprite_frame: {
                    default: null,
                    type: cc.Sprite
                },
                bulletType: "Null"
            },
            onLoad: function() {
                this.anim = this.node.getChildByName("anim")
            },
            setbulletSprite: function(e) {
                this.arrow_sprite_frame.spriteFrame = this.arrow_SpriteAtlas.getSpriteFrame(e)
            },
            shoot_at: function(e, n, t, o, i) {
                if (this.node.parent) {
                    this.node.stopAllActions(), this.setbulletSprite(i), this.shoot_enemy = t, this.attack = o;
                    var m = this.node.parent.convertToNodeSpaceAR(e);
                    m.y = m.y - 7, this.node.setPosition(m);
                    var y = new cc.v2(0, 0);
                    y.x = n.x - e.x, y.y = n.y - e.y;
                    var a = cc.vv.tool.bevelLength(y) / this.speed,
                        c = void 0;
                    if (null !== this.shoot_enemy) {
                        c = this.shoot_enemy.getComponent("actor").position_after_time(a);
                        var r = 0;
                        n = this.shoot_enemy.parent.convertToWorldSpace(c), c.y < m.y ? (r = -90, r = c.x < m.x ? cc.vv.tool.touchPointToObjectRotation(y) - 2 * r : -(90 - cc.vv.tool.touchPointToObjectRotation(y)) + r) : (r = 90, c.x < m.x ? r -= -(cc.vv.tool.touchPointToObjectRotation(y) + r) : r = r - -cc.vv.tool.touchPointToObjectRotation(y) + r), this.anim.rotation = r
                    }
                    var s = cc.moveTo(a, c.x, c.y),
                        d = cc.callFunc(function() {
                            this.on_bullet_bomb(), this.node.removeFromParent()
                        }.bind(this), this.node),
                        l = cc.sequence([s, d]);
                    this.node.runAction(l), cc.vv.audioMgr.playSFX("attack.mp3")
                } else console.log("shoot_at must add to parent first")
            },
            on_bullet_bomb: function(e) {
                if (null !== this.shoot_enemy) {
                    var n = this.shoot_enemy.getComponent("actor");
                    n.setAllproperty(!1), o.is_enemy_active(this.shoot_enemy) && n.on_arrow_bullet_attack(this.attack)
                }
            }
        }), cc._RF.pop()
    }, {
        ugame: "ugame"
    }],
    bulletLayer: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "3d243KUYXpKZ4xa/X82hXfG", "bulletLayer");
        e("PolySDK");
        cc.Class({
            extends: cc.Component,
            properties: {
                mask: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5e95\u6846",
                    tooltip: "\u5e95\u6846"
                },
                crystalDamage: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u57ce\u5899\u7ef4\u4fee",
                    tooltip: "\u57ce\u5899\u7ef4\u4fee"
                },
                _countdown: null
            },
            PlatformEventCallback: function(e, n, t) {},
            setpresentationPage: function(e) {
                if (e == this.crystalDamage.name) {
                    for (var n = 0; n < this.node.childrenCount; n++) this.node.children[n].active = !1;
                    this.node.active = !1, this.crystalDamage.active = !0, cc.lieying_self = this, cc.LieYingSDK.PolySDK.VideoAd.getVideoAdNumber(function(e) {
                        cc.lieying_self.crystalDamage.getChildByName("btn_1").active = 0 != e
                    })
                } else {
                    if (this.node.active) return;
                    this.node.getChildByName(e).active = !0, this.node.active = !0
                }
                "lottery" != e && cc.LieYingSDK.PolySDK.BannerAd.showBannerAd(), "accelerate" == e && (cc.lieying_self = this, cc.LieYingSDK.PolySDK.VideoAd.getVideoAdNumber(function(e) {
                    cc.lieying_self.node.getChildByName("accelerate").getChildByName("btn").getChildByName("adbtn").active = 0 != e
                }))
            },
            start: function() {},
            show_dlg: function(e) {
                this.node.active = !0, this.mask.opacity = 0;
                var n = cc.fadeTo(.3, this.mask_opacity);
                this.mask.runAction(n), e.scale = 0;
                var t = cc.scaleTo(.4, 1).easing(cc.easeBackOut());
                e.runAction(t)
            },
            hide_dlg: function(e) {
                var n = cc.fadeOut(.3);
                this.mask.runAction(n);
                var t = cc.scaleTo(.3, 0).easing(cc.easeBackIn());
                e.runAction(t)
            },
            setAccelerateCondition: function(e) {
                cc.vv.CG.accelerate.countdown.isOpencountdown = !0, cc.vv.CG.accelerate.countdown.totalTime = cc.vv.CG.accelerate.time[e], cc.vv.CG.income.speed = cc.vv.CG.accelerate.income.speed, cc.vv.audioMgr.playSFX("accelerate.mp3")
            },
            onClickedbtn: function(e, n) {
                switch (n) {
                    case "diamondbtn":
                        cc.vv.PP.diamond - 100 < 0 ? cc.vv.rr.Diamonds_Inadequate(this, 200) : (cc.vv.PP.diamond = cc.vv.PP.diamond - 100, this.setAccelerateCondition("diamond"));
                        break;
                    case "adbtn":
                        cc.vv.wxAPI.aldSendEvent("\u52a0\u901f\u70b9\u51fb\u52a0\u901f200\u79d2", {
                            "\u52a0\u901f\u70b9\u51fb\u52a0\u901f200\u79d2": "\u70b9\u51fb"
                        }), cc.vv.wxAPI.videoAd.onPlayVideoBtn({
                            adType: "adbtn"
                        }), this.setAccelerateCondition("ad");
                        break;
                    case "crystalDamage":
                        this.crystalDamage.active = !1
                }
                cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.first_level, "crystalDamage" != n && (e.target.parent.parent.active = !1), cc.LieYingSDK.PolySDK.BannerAd.hideBannerAd(), this.node.active = !1
            },
            onCloseClicked: function(e, n) {
                (cc.LieYingSDK.PolySDK.BannerAd.hideBannerAd(), "lottery" == e.target.parent.name) ? 0 == e.target.parent.getComponent("Wheel").wheelState && (e.target.parent.active = !1, this.node.active = !1, cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.first_level): (e.target.parent.active = !1, this.node.active = !1, cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.first_level)
            }
        }), cc._RF.pop()
    }, {
        PolySDK: "PolySDK"
    }],
    buyItem: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "ab6a37DAj1NpaESrdiP3BGj", "buyItem");
        e("PolySDK");
        cc.Class({
            extends: cc.Component,
            properties: {
                car: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "\u8f66spr",
                    tooltip: "\u8f66spr"
                },
                gold: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u91d1\u5e01\u8d2d\u4e70",
                    tooltip: "\u91d1\u5e01\u8d2d\u4e70"
                },
                glodlabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u91d1\u5e01text",
                    tooltip: "\u91d1\u5e01text"
                },
                gradelabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u7b49\u7ea7text",
                    tooltip: "\u7b49\u7ea7text"
                },
                diamondlabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u94bb\u77f3text",
                    tooltip: "\u94bb\u77f3text"
                },
                videobtn: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u89c6\u9891btn",
                    tooltip: "\u89c6\u9891btn"
                },
                diamondbtn: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u94bb\u77f3btn",
                    tooltip: "\u94bb\u77f3btn"
                },
                goldbuy: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u91d1\u5e01btn",
                    tooltip: "\u91d1\u5e01btn"
                },
                notUnlocked: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u672a\u89e3\u9501",
                    tooltip: "\u672a\u89e3\u9501"
                },
                _grade: 0,
                _items: null,
                _spriteAtlas: null
            },
            PlatformEventCallback: function(e, n, t) {},
            setinfoAll: function(e, n, t, o, i, m, y, a, c) {
                this.setproperty(e, i), this.setcar(n, i), this.setgradelabel(c), i <= cc.vv.PP.currentcarMaxGrade ? this.setcarOpacityAndColor(cc.Color.WHITE, 255) : this.setcarOpacityAndColor(cc.Color.BLACK, 170), t ? this.setUnlock(o) : this.setNotUnlock(m, y, a)
            },
            setUnlock: function(e) {
                this.setgold(!0), this.setnotUnlocked(!1), this.setgoldbuyisopenEvent(!0), this.setglodlabel(e), this.setvideobtn(!1), this.setdiamondbtn(!1)
            },
            setNotUnlock: function(e, n, t) {
                this.setgold(!1), this.setnotUnlocked(!0), this.setgoldbuyisopenEvent(!1), this.setdiamondbtn(e), this.setdiamondlabel(n), this.setvideobtn(t)
            },
            setproperty: function(e, n) {
                "" !== e && "" !== n && (this._items = e, this._grade = n)
            },
            setcar: function(e, n) {
                this.car && e && (this.car.spriteFrame = e.getSpriteFrame(n), this._spriteAtlas = e)
            },
            setcarOpacityAndColor: function(e, n) {
                this.car && e && "" != n && (this.car.node.color = e, this.car.node.opacity = n)
            },
            setgold: function(e) {
                this.gold && "" !== e && (this.gold.active = e)
            },
            setnotUnlocked: function(e) {
                this.notUnlocked && "" !== e && (this.notUnlocked.active = e)
            },
            setgradelabel: function(e) {
                if (this.gradelabel && "" !== e) {
                    var n = void 0;
                    n = Number(e) <= 9 ? "0" + e : e, this.gradelabel.string = n
                }
            },
            setglodlabel: function(e) {
                this.glodlabel && "" !== e && (this.glodlabel.string = cc.vv.tool.bytesToSize(e))
            },
            setdiamondlabel: function(e) {
                this.diamondlabel && "" !== e && (this.diamondlabel.string = e)
            },
            setvideobtn: function(e) {
                this.videobtn && "" !== e && (this.videobtn.active = e, e && (cc.lieying_self = this, cc.LieYingSDK.PolySDK.VideoAd.getVideoAdNumber(function(e) {
                    cc.lieying_self.videobtn.active = 0 != e
                })))
            },
            setdiamondbtn: function(e) {
                this.diamondbtn && "" !== e && (this.diamondbtn.active = e)
            },
            setgoldbuyisopenEvent: function(e) {
                this.goldbuy && "" !== e && (this.goldbuy.getComponent(cc.Button).interactable = e)
            },
            onClickedBtn: function(e, n) {
                if (cc.vv.CG.buyplatform.buyplatform = cc.vv.CG.buyplatform.platform.storebuy, cc.vv.EventMgr.CanAheroBuy(), !cc.vv.CG.CanAheroBuy) return cc.vv.promptbox.setlabel(cc.vv.CG.Text.garageisfull), void(cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.first_level);
                switch (n) {
                    case "videobtn":
                        if (cc.vv.PP.Game_InIt_Setting.cars.length >= cc.vv.PP.Game_InIt_Setting.carMaxNum) cc.vv.promptbox.setlabel(cc.vv.CG.Text.garageisfull);
                        else {
                            var t = {
                                butitem: this,
                                adType: "buyVideoAd"
                            };
                            cc.vv.wxAPI.aldSendEvent("\u9152\u9986\u70b9\u51fb\u89c6\u9891\u9886\u53d6", {
                                "\u9152\u9986\u70b9\u51fb\u89c6\u9891\u9886\u53d6": "\u70b9\u51fb"
                            }), cc.vv.wxAPI.videoAd.onPlayVideoBtn(t)
                        }
                        break;
                    case "diamondbtn":
                        cc.log("\u94bb\u77f3\u8d2d\u4e70"), cc.vv.CarsMgr.addCar(this._items, this._grade, this._grade, !1, this._spriteAtlas, cc.vv.CG.buyType.diamondBuy), this.setdiamondlabel(cc.vv.PP.buyCarsProperty[this._grade - 1].diamond);
                        break;
                    case "goldbuy":
                        cc.vv.CG.buyplatform.buyplatform = cc.vv.CG.buyplatform.platform.storebuy, cc.vv.CarsMgr.addCar(this._items, this._grade, this._grade, !1, this._spriteAtlas, cc.vv.CG.buyType.globBuy, cc.vv.CG.buyplatform.buyplatform), this.setglodlabel(cc.vv.PP.buyCarsProperty[this._grade - 1].gold)
                }
            },
            buyVideoAd: function(e) {
                var n = e;
                cc.vv.PP.buyCarsProperty.isShowvideo = !1, cc.vv.CarsMgr.addCar(n._items, n._grade, n._grade, !1, n._spriteAtlas, cc.vv.CG.buyType.videoBuy)
            }
        }), cc._RF.pop()
    }, {
        PolySDK: "PolySDK"
    }],
    buyLayer: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "a97ec0am2NBR5dgEF7pFSdO", "buyLayer");
        e("PolySDK");
        cc.Class({
            extends: cc.Component,
            properties: {
                item: {
                    default: null,
                    type: cc.Prefab,
                    displayName: "\u8d2d\u4e70\u8f66\u9884\u5236\u4f53",
                    tooltip: "\u8d2d\u4e70\u8f66\u9884\u5236\u4f53"
                },
                courseScrollView: {
                    default: null,
                    type: cc.ScrollView,
                    displayName: "\u6eda\u52a8\u6761",
                    tooltip: "\u6eda\u52a8\u6761"
                },
                car_parent: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u8f66\u7684\u7236\u8282\u70b9",
                    tooltip: "\u8f66\u7684\u7236\u8282\u70b9"
                },
                car_SpriteAtlas: {
                    default: null,
                    type: cc.SpriteAtlas,
                    displayName: "\u8f66\u7684\u56fe\u96c6",
                    tooltip: "\u8f66\u7684\u56fe\u96c6"
                },
                _content: null
            },
            onLoad: function() {},
            onEnable: function() {
                this.updateItemToList()
            },
            addItemToList: function() {
                var e = this;
                e._content = e.courseScrollView.content, e.scheduleOnce(function() {
                    for (var n = 0; n < cc.vv.PP.Game_InIt_Setting.carMaxGrade; n++) {
                        var t = cc.instantiate(e.item),
                            o = t.getComponent("buyItem"),
                            i = e.getItemStatus(n + 1, !0);
                        cc.vv.PP.buyCarsProperty.length <= 30 && cc.vv.PP.buyCarsProperty.push(i), o.setinfoAll(e.car_parent, e.car_SpriteAtlas, i.isUnlock, i.gold, i.grade, i.isShowdiamond, i.diamond, i.isShowvideo, i.grade + 3), e._content.addChild(t)
                    }
                }, .2)
            },
            updateItemToList: function() {
                for (var e = 0; e < cc.vv.PP.Game_InIt_Setting.carMaxGrade; e++) {
                    var n = this._content.children[e].getComponent("buyItem"),
                        t = this.getItemStatus(e + 1, !1);
                    this._content.children[e].active = !0, n.setinfoAll(this.car_parent, this.car_SpriteAtlas, t.isUnlock, t.gold, t.grade, t.isShowdiamond, t.diamond, t.isShowvideo, t.grade)
                }
            },
            getItemStatus: function(e, n) {
                var t = !1,
                    o = "",
                    i = !1,
                    m = "",
                    y = !1;
                return cc.vv.PP.currentcarMaxGrade <= 5 && 1 == e ? (t = !0, o = n ? cc.vv.formula.firstPurchase_gold(cc.vv.CG.constant.goldPrice, e) : "" == cc.vv.PP.buyCarsProperty[e - 1].gold ? cc.vv.formula.firstPurchase_gold(cc.vv.CG.constant.goldPrice, e) : cc.vv.PP.buyCarsProperty[e - 1].gold) : cc.vv.PP.currentcarMaxGrade - 4 > 1 && cc.vv.PP.currentcarMaxGrade - 4 >= e ? (t = !0, o = n ? cc.vv.formula.firstPurchase_gold(cc.vv.CG.constant.goldPrice, e) : "" == cc.vv.PP.buyCarsProperty[e - 1].gold ? cc.vv.formula.firstPurchase_gold(cc.vv.CG.constant.goldPrice, e) : cc.vv.PP.buyCarsProperty[e - 1].gold) : e < cc.vv.PP.currentcarMaxGrade && cc.vv.PP.currentcarMaxGrade - 3 <= e && cc.vv.PP.currentcarMaxGrade >= 4 && (cc.vv.PP.currentcarMaxGrade - 1 == e ? i = !1 : cc.vv.PP.currentcarMaxGrade >= 7 && (cc.vv.PP.currentcarMaxGrade - 2 == e && (y = !0), i = !0, m = n ? cc.vv.formula.firstPurchase_diamond(cc.vv.CG.constant.diamondprice, e) : "" == cc.vv.PP.buyCarsProperty[e - 1].diamond ? cc.vv.formula.firstPurchase_diamond(cc.vv.CG.constant.diamondprice, e) : cc.vv.PP.buyCarsProperty[e - 1].diamond)), {
                    isUnlock: t,
                    gold: o,
                    grade: e,
                    isShowdiamond: i,
                    diamond: m,
                    numberofTimes: 1,
                    isShowvideo: y
                }
            },
            onClickedBtn: function(e) {
                if ("closebtn" == e.target.name) {
                    for (var n = 0; n < this._content.childrenCount; n++) this._content.children.active = !1;
                    cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.first_level, this.courseScrollView.node.active = !1, cc.LieYingSDK.PolySDK.BannerAd.hideBannerAd()
                }
            }
        }), cc._RF.pop()
    }, {
        PolySDK: "PolySDK"
    }],
    carProperty: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "b1b05B7Sm1C5LJ/iy8JayWc", "carProperty");
        var o = o || {};
        o.isWxlogin = !1, o.GuideSate = 0, o.NoMoneyGuide = !1, o.NoHPGuide = !1, o.Game_InIt_Setting = {
            carMaxNum: 12,
            carMaxGrade: 30,
            cars: [{
                id: 0,
                grade: 1,
                spriteFrame: 1,
                isSynthesis: !1
            }, {
                id: 1,
                grade: 1,
                spriteFrame: 1,
                isSynthesis: !1
            }]
        }, o.buyCarsProperty = [], o.canbuyCar = [], o.glod = 7e3, o.Maxglod = 7e3, o.diamond = 100, o.currentcarMaxGrade = 1, o.currentbuycarMAxGrade = 1, o.currentbuycarSuitable = 1, o.totalAttackPower = 0, o.critNum = 0, o.carouselCouponNum = 1, o.remaining_crystalHP = 100, o.yieldRatio = 1, o.crystalReplyTime = 20, o.isopenEnemywave = !0, o.cur_round = 0, o.levelWave = 0, n.exports = o, cc._RF.pop()
    }, {}],
    car: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "25e89EeustEp4OoPP2dKNCy", "car"), cc.Class({
            extends: cc.Component,
            properties: {
                caranim: {
                    default: null,
                    type: cc.Animation,
                    displayName: "\u5408\u6210\u52a8\u753b",
                    tooltip: "\u5408\u6210\u52a8\u753b"
                },
                synthesis: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5149\u67f1",
                    tooltip: "\u5149\u67f1"
                },
                _property: null,
                _isshow: !1,
                _value: null,
                _index: 0,
                _speed: 0,
                _spriteAtlas: null,
                _issuccessSynNewCar: !1
            },
            onLoad: function() {
                this.caranim.active = !1, this.locked = this.node.getChildByName("locked")
            },
            setinfoAll: function(e, n, t, o, i) {
                this.setCarProperty(e, t, o), n ? this.setcarAnim(e, t) : (this.setSpriteFrame(e, t), this.setOpacity(255)), this._isShow = !0
            },
            setcarAnim: function(e, n) {
                var t = this.caranim.node.children[0].getComponent(cc.Sprite),
                    o = this.caranim.node.children[1].getComponent(cc.Sprite);
                t.spriteFrame = n.getSpriteFrame(e.grade - 1), o.spriteFrame = n.getSpriteFrame(e.grade - 1), this.setOpacity(170), this.caranim.node.active = !0, this.caranim.play(), this.caranim.on("finished", this.onFinished, this)
            },
            setIsShowlocked: function(e) {
                this.locked.active = e, this.isshowlocked = e
            },
            onFinished: function() {
                this.caranim.node.active = !1, this.setSpriteFrame(this._property, this._spriteAtlas), this.setOpacity(255), this._issuccessSynNewCar ? (cc.vv.audioMgr.playSFX("goldcoins.mp3"), cc.vv.rr.getNewCar(this), cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.first_level) : cc.vv.audioMgr.playSFX("synthesis.mp3")
            },
            setOpacity: function(e) {
                for (var n = 0; n < this.node.childrenCount; n++) {
                    if ("sprite1" == this.node.children[n].name) this.node.children[n].opacity = e
                }
            },
            deleteCarPropertyAndSprite: function() {
                for (var e = 0; e < this.node.childrenCount; e++) {
                    if ("caranim" != this.node.children[e].name && "locked" != this.node.children[e].name && "synthesis" != this.node.children[e].name) this.node.children[e].getComponent(cc.Sprite).spriteFrame = null
                }
                this.node.is_Have_A_Car = !1, this.node.isheroBox = !1, this._isShow = !1, this.deleteincome_LabelisShowAndvalue(), this._property = null, this.unscheduleAllCallbacks()
            },
            setCarProperty: function(e, n, t) {
                if (e || "" != e) {
                    this._property = e, this._spriteAtlas = n, this._issuccessSynNewCar = t;
                    cc.vv.formula.roleIncome(cc.vv.CG.constant.revenue, e.grade);
                    this._speed = cc.vv.formula.rateofReturn(cc.vv.CG.constant.time, this._property.grade)
                }
            },
            setSpriteFrame: function(e, n) {
                if ("" != e && e && n) {
                    if (3 == this.node.childrenCount) {
                        var t = cc.director.getScene().getChildByName("Canvas").getChildByName("sprite1");
                        null != t && (t.parent = this.node)
                    }
                    for (var o = 0; o < this.node.childrenCount; o++)
                        if ("caranim" != this.node.children[o].name && "locked" != this.node.children[o].name && "synthesis" != this.node.children[o].name) {
                            var i = this.node.children[o].getComponent(cc.Sprite);
                            i.spriteFrame = n.getSpriteFrame(e.spriteFrame), i.node.setPosition(cc.v2(0, 0))
                        }
                }
            },
            setSynthesisShow: function(e) {
                this.synthesis && (this.synthesis.active = e)
            },
            getCarProperty: function() {
                return this._property
            },
            getattack: function() {
                return cc.vv.formula.heroattackfun(this._property.grade)
            },
            deleteincome_LabelisShowAndvalue: function() {
                this._value = 0
            }
        }), cc._RF.pop()
    }, {}],
    collider: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "4b729h7wztEgb+Al6vsXgQp", "collider"), cc.Class({
            extends: cc.Component,
            properties: {
                sellvalue: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u51fa\u552e\u4ef7\u683ctext",
                    tooltip: "\u51fa\u552e\u4ef7\u683ctext"
                },
                items: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u8f66\u7236\u8282\u70b9",
                    tooltip: "\u8f66\u7236\u8282\u70b9"
                }
            },
            onLoad: function() {
                cc.director.getCollisionManager().enabled = !0
            },
            onCollisionEnter: function(e) {
                cc.log("\u78b0\u649e\u5f00\u59cb" + e.node.parent)
            },
            onCollisionStay: function(e) {
                cc.log("\u78b0\u649e\u4e2d" + e.node.parent)
            },
            setsellvalue: function(e) {
                (this.sellvalue || "" != e) && (this.sellvalue.string = "+" + e, this.sellvalue.node.runAction(cc.fadeTo(.3, 255)), this.sellvalue.node.runAction(cc.moveTo(.3, cc.v2(0, 60))), this.sellvalue.node.runAction(cc.scaleTo(.3, 1.5)), this.schedule(function() {
                    this.sellvalue.node.y = 0, this.sellvalue.node.scale = 1, this.sellvalue.string = ""
                }.bind(this), .4, 1))
            },
            onCollisionExit: function(e) {
                cc.vv.CG.isTouchStart || cc.vv.CarsMgr.deleteCar(e)
            },
            onClickedBtn: function() {
                cc.vv.promptbox.setlabel(cc.vv.CG.Text.Saletips)
            },
            _getparent: function() {
                for (var e = 0; e < this.items.children.length; e++) {
                    var n = this.items.children[e];
                    if (n.children.length <= 3) return n
                }
            }
        }), cc._RF.pop()
    }, {}],
    config: [function(e, n, t) {
        "use strict";
        var o;

        function i(e, n, t) {
            return n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }
        cc._RF.push(n, "0db83U9lVxJCpzaL/yj+uE/", "config");
        var m = m || {};
        m.constant = {
            goldPrice: 200,
            proportion: .2,
            revenue: 25,
            diamondprice: 20,
            gain: 3,
            time: 6.5,
            EnemyHPMultiple: 12
        }, m.lockingEnEmy = null, m.CanAheroBuy = !0, m.MaxcrystalHP = 100, m.GameOne = !0, m.isCreateEnemys = !1, m.isCrystaldamaged = !1, m.isopenCaveat = !1, m.isCanWatchAds = !0, m.isShowReceivingGoldcoins = !0, m.Crystalcountdown = {
            totalTime: 20,
            reduiseTime: 20,
            yieldRatio50: .5,
            yieldRatio100: 1
        }, m.glodSearch_R = {
            enemySearch_R: [45, 47, 50, 60, 55, 65],
            boxSearch_R: [100, 95, 90, 85, 80, 75]
        }, m.buyType = {
            globBuy: 1,
            diamondBuy: 2,
            videoBuy: 3
        }, m.GameInterfaceLevel = {
            currentlevel: 0,
            level: {
                first_level: 1,
                second_level: 2
            }
        }, m.BeginnerGuide = {
            0: "dragGuide",
            1: "buyGuide",
            2: "accelerateGuide",
            3: "turntableGuide"
        }, m.PresentationName = {
            accelerate: "accelerate",
            signIn: "signIn",
            gift_Package: "gift_Package",
            lottery: "lottery",
            crystalDamage: "crystalDamage"
        }, m.income = {
            speed: 1
        }, m.accelerate = {
            income: {
                speed: 2
            },
            time: {
                diamond: 60,
                ad: 200
            },
            countdown: {
                totalTime: 0,
                reduiseTime: 0,
                isOpencountdown: !1
            }
        }, m.isTouchStart = !1, m.UserInit = {
            uuid: 0,
            userinfo: {}
        }, m.InvitationState = {
            0: "lingqu_0",
            1: "lingqu_1",
            2: "yaoqing_btn"
        }, m.SignIn = {
            1: 200,
            2: 200,
            3: 200,
            4: 200,
            5: 200,
            6: 200,
            7: 800
        }, m.buyplatform = {
            platform: {
                ordinarybuy: "ordinarybuy",
                storebuy: "storebuy"
            },
            buyplatform: ""
        }, m.signinData = null, m.gearInfo = [{
            type: "gold",
            gailv: 2,
            num: 1200
        }, {
            type: "crit",
            gailv: 5,
            num: 10
        }, {
            type: "gold",
            gailv: 13,
            num: 200
        }, {
            type: "crit",
            gailv: 18,
            num: 2
        }, {
            type: "diamond",
            gailv: 7,
            num: 100
        }, {
            type: "crit",
            gailv: 10,
            num: 5
        }, {
            type: "diamond",
            gailv: 10,
            num: 50
        }, {
            type: "gold",
            gailv: 7,
            num: 500
        }, {
            type: "gold",
            gailv: 25,
            num: 60
        }, {
            type: "diamond",
            gailv: 3,
            num: 200
        }], m.popupSprList = (i(o = {
            carouselCoupon: "carouselCoupon",
            crit: "crit",
            determine: "determine",
            "diamondbox ": "diamond ",
            diamond: "diamond",
            goldbox: "gold",
            gold: "gold",
            jujue: "jujue",
            mashanglinqu: "mashanglinqu",
            shuangbeilingqu: "shuangbeilingqu",
            fenxiang: "fenxiang"
        }, "carouselCoupon", "carouselCoupon"), i(o, "share", "share"), i(o, "crystalDamage", "crystalDamage"), o), m.Text = {
            New_Car: "Tướng mới",
            Upgrade_reward: "Nhận thêm thưởng",
            Receive_award: "Nhận thưởng",
            Double: "Thưởng tiếp theo",
            Offline_Revenue: "Thưởng offline",
            Receiving_Diamonds: "Nhận kim cương",
            Receiving_Gold: "Nhận tiền xu",
            Receiving_Carousel_Coupon: "Nhận vé quay",
            Gold_Inadequate: "Không đủ xu",
            Diamonds_Inadequate: "Không đủ kim cương",
            Carousel_Coupon_Inadequate: "Không đủ vé quay",
            garageisfull: "Không đủ chỗ",
            FullLevel: "Arcade đang cập nhật thêm tướng",
            accelerate: "Đang tăng tốc, hãy thử lại sau",
            Gold_Inadequate1: "Không đủ tiền xu, hãy kiếm thêm!",
            Saletips: "Kéo tướng vào đây để bán",
            SharingTips: "Tôi đã kiếm được Tướng mới tại Người bảo vệ vương quốc trên Arcade",
            OneMore: "Thêm nữa",
            With_the_treasure_chest: "Rương kho báu ngẫu nhiên",
            Exile_the_most_senior_hero: "Không thể bán đi tướng level cao nhất",
            NoAds: "Không có Video"
        }, m.wxUserInit = {}, m.wxInIt = {
            appID: "wx19b2429e16ec6b72",
            adUnitId: "adunit-9e571cb0d4eeb7c7",
            bannerId: "adunit-e5ab37e3496ee9e7"
        }, m.SharingText = [{
            text: "Hãy theo dõi Arcade để chơi các game online 24h mới nhất, hay nhất, cập nhật nhanh nhất nhé!",
            res: "res/raw-assets/myrec/sharingImage.jpg"
        }], n.exports = m, cc._RF.pop()
    }, {}],
    createActor: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "881f5QoCmRLTqW+kqlEcCQ+", "createActor");
        var o = e("ugame"),
            i = e("EnemyProperty");
        cc.Class({
            extends: cc.Component,
            properties: {
                enemy_root: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u602a\u7269\u7236\u8282\u70b9",
                    tooltip: "\u602a\u7269\u7236\u8282\u70b9"
                },
                incomeTarget: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u6536\u76ca\u76ee\u6807\u70b9",
                    tooltip: "\u6536\u76ca\u76ee\u6807\u70b9"
                },
                gold_prefabs: {
                    default: null,
                    type: cc.Prefab,
                    displayName: "\u91d1\u5e01\u9884\u5236\u4f53",
                    tooltip: "\u91d1\u5e01\u9884\u5236\u4f53"
                },
                gold_root: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u91d1\u5e01\u7236\u8282\u70b9",
                    tooltip: "\u91d1\u5e01\u7236\u8282\u70b9"
                }
            },
            onLoad: function() {
                this.initEventHandlers()
            },
            start: function() {
                this.level_data = e("level1"), this.map_road_set = e("EnemyPath")
            },
            initEventHandlers: function() {
                var e = this;
                e.node.on("Gen_round_enemy", function(n) {
                    var t = cc.vv.tool.getNodeData(n);
                    e.cur_road_index = 0, e.cur_gen_total = 0, e.cur_gen_now = 0;
                    for (var o = e.enemy_root.childrenCount - 1; 0 != e.enemy_root.childrenCount;) {
                        var i = e.enemy_root.children[o];
                        cc.vv.objectpool.onEnemyKilled(0, i.poolid, i), o--
                    }
                    t.iscreateActor && (cc.vv.CG.GameOne ? (e.gen_one_enemy(), cc.vv.CG.GameOne = !1) : e.scheduleOnce(function() {
                        var n = {
                            isVictroyShow: !0,
                            time: e.starTiem,
                            waveIncome: e.waveIncome
                        };
                        cc.vv.PP.remaining_crystalHP > 0 && (cc.vv.PP.levelWave++, cc.vv.PP.cur_round++, cc.vv.PP.levelWave > e.waveNum && (cc.vv.PP.levelWave = 0)), cc.vv.EventMgr.ShowVictroyInterface(n), e.scheduleOnce(function() {
                            n = {
                                isVictroyShow: !1,
                                time: e.starTiem
                            }, cc.vv.EventMgr.ShowVictroyInterface(n), e.gen_one_enemy()
                        }, 3)
                    }, 2))
                })
            },
            set_map_road_set: function(e) {
                this.map_road_set = e
            },
            gen_one_enemy: function() {
                var e = void 0;
                e = cc.vv.PP.currentcarMaxGrade >= this.level_data.length ? this.level_data.length - 1 : cc.vv.PP.currentcarMaxGrade - 1;
                var n = this.level_data[e],
                    t = void 0;
                this.waveNum = n.WaveNum, cc.vv.PP.levelWave > this.waveNum && (cc.vv.PP.levelWave = 0), t = cc.vv.PP.levelWave < n.WaveNum ? n.ordinaryWave[Math.floor(Math.random() * n.ordinaryWave.length)] : n.bossWave[Math.floor(Math.random() * n.bossWave.length)];
                var m = new Date;
                this.starTiem = m, this.waveIncome = t.income, cc.vv.EventMgr.Wave_labelShow();
                var y = t.delay;
                this.cur_gen_total = t.gen_time_set.length, this.scheduleOnce(function e() {
                    if (!cc.vv.CG.isCrystaldamaged)
                        if (this.cur_gen_total != this.cur_gen_now) {
                            y = t.gen_time_set[this.cur_gen_now];
                            var n = t.type[this.cur_gen_now];
                            "undefined" == n && (n = 0);
                            var m = t.road_set[this.cur_road_index],
                                a = cc.vv.objectpool.createEnemy(0, n);
                            this.enemy_root.addChild(a), a.active = !0, a.poolid = n, a.waveId = this.cur_round + "_" + this.cur_gen_now, o.add_ememy(a);
                            var c = a.getComponent("actor");
                            c.setInItAll();
                            var r = this.map_road_set[m - 1],
                                s = {
                                    speed: Number(i[n].speed),
                                    health: Number(i[n].hp),
                                    attack: Number(i[n].atk),
                                    grade: n,
                                    income: Number(i[n].income)
                                };
                            c.set_actor_params(s), c.gen_at_road(r), c.setAllproperty(!0), this.cur_gen_now++, this.cur_road_index++, this.cur_gen_total - 1 == this.cur_gen_now ? cc.vv.PP.isopenEnemywave = !0 : (cc.vv.PP.isopenEnemywave = !1, this.scheduleOnce(e.bind(this), y))
                        } else cc.vv.PP.isopenEnemywave = !0
                }.bind(this), y)
            },
            gen_round_enemy: function() {
                var e = this.level_data,
                    n = e.delay,
                    t = e.num;
                this.cur_gen_total = t, this.cur_gen_now = 0, this.cur_road_index = 0;
                for (var i = 0; i < t; i++) n += e.gen_time_set[i], this.scheduleOnce(function() {
                    var e = this.level_data,
                        n = e.type[this.cur_gen_now],
                        t = e.road_set,
                        i = cc.vv.objectpool.createEnemy(0, n - 1);
                    this.enemy_root.addChild(i), i.active = !0, i.poolid = n - 1, o.add_ememy(i);
                    var m = i.getComponent("actor");
                    m.setInItAll();
                    var y = 0;
                    if (e.random_road) {
                        var a = Math.random() * t.length;
                        (a = Math.floor(a)) >= t.length && (a = t.length - 1), y = t[a]
                    } else y = this.cur_road_index, this.cur_road_index++, this.cur_road_index > t.length && (this.cur_road_index = 0), y = t[random_index];
                    y >= this.map_road_set.length && (y = 0);
                    var c = this.map_road_set[y],
                        r = {
                            speed: 50,
                            health: cc.vv.formula.enemyHP(n),
                            attack: 1,
                            grade: n
                        };
                    m.set_actor_params(r), m.gen_at_road(c), this.cur_gen_now++
                }.bind(this), n)
            },
            totalAttackPower: function() {
                for (var e = 0, n = 0; n < cc.vv.PP.Game_InIt_Setting.cars.length; n++) {
                    var t = cc.vv.PP.Game_InIt_Setting.cars[n];
                    e += cc.vv.formula.heroattackfun(t.grade)
                }
                this._totalAttackPower = e * cc.vv.CG.constant.EnemyHPMultiple, 0 == this._totalAttackPower && (cc.vv.CG.isCreateEnemys = !1)
            },
            setLevelData: function() {
                var e = this._totalAttackPower,
                    n = 0,
                    t = 0,
                    o = 0;
                for (cc.vv.PP.currentcarMaxGrade < 3 ? (this.level_data.road_set.push(1), this.level_data.road_set.push(4)) : cc.vv.PP.currentcarMaxGrade < 5 && cc.vv.PP.currentcarMaxGrade >= 3 ? (this.level_data.road_set.push(0), this.level_data.road_set.push(1), this.level_data.road_set.push(3), this.level_data.road_set.push(4)) : cc.vv.PP.currentcarMaxGrade >= 5 && (this.level_data.road_set.push(0), this.level_data.road_set.push(1), this.level_data.road_set.push(2), this.level_data.road_set.push(3), this.level_data.road_set.push(4), this.level_data.road_set.push(5)); e > 0;) 0 != n ? (o = 1 + Math.floor(5 * Math.random() + 1) / 10, this.level_data.gen_time_set.push(o)) : this.level_data.gen_time_set.push(0), n = cc.vv.PP.currentcarMaxGrade > 2 ? this.level_data.num >= 20 && this.level_data.num < 30 ? cc.vv.tool.fRandomBy(cc.vv.PP.currentcarMaxGrade - 2, cc.vv.PP.currentcarMaxGrade) : this.level_data.num >= 30 ? e / cc.vv.CG.constant.EnemyHPMultiple : cc.vv.PP.currentcarMaxGrade >= 7 ? cc.vv.tool.fRandomBy(cc.vv.PP.currentcarMaxGrade - 6, cc.vv.PP.currentcarMaxGrade) : cc.vv.tool.fRandomBy(1, cc.vv.PP.currentcarMaxGrade) : cc.vv.tool.fRandomBy(1, cc.vv.PP.currentcarMaxGrade), (t = cc.vv.formula.enemyHP(n)) > e && console, this.level_data.type.push(n), this.level_data.num++, e -= t
            },
            cleanUpLevelData: function() {
                this.level_data.num = 0, this.level_data.type = [], this.level_data.gen_time_set = [], this.level_data.road_set = []
            }
        }), cc._RF.pop()
    }, {
        EnemyPath: "EnemyPath",
        EnemyProperty: "EnemyProperty",
        level1: "level1",
        ugame: "ugame"
    }],
    frame_anim: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "a237fiUt2ZHCZ75o0WISN87", "frame_anim"), cc.Class({
            extends: cc.Component,
            properties: {
                sprite_frames: {
                    default: [],
                    type: cc.SpriteFrame
                },
                duration: .1,
                loop: !1,
                play_onload: !1
            },
            onLoad: function() {
                var e = this.node.getComponent(cc.Sprite);
                e || (e = this.node.addComponent(cc.Sprite)), this.sprite = e, this.is_playing = !1, this.play_time = 0, this.is_loop = !1, this.end_func = null, this.sprite_frames.length > 0 && (this.sprite.spriteFrame = this.sprite_frames[0]), this.play_onload && (this.loop ? this.play_loop() : this.play_once(null))
            },
            play_once: function(e) {
                this.play_time = 0, this.is_playing = !0, this.is_loop = !1, this.end_func = e
            },
            play_loop: function() {
                this.play_time = 0, this.is_playing = !0, this.is_loop = !0
            },
            stop_anim: function() {
                this.play_time = 0, this.is_playing = !1, this.is_loop = !1
            },
            start: function() {},
            update: function(e) {
                if (!1 !== this.is_playing) {
                    this.play_time += e;
                    var n = Math.floor(this.play_time / this.duration);
                    if (!1 === this.is_loop) {
                        if (n >= this.sprite_frames.length) return this.sprite.spriteFrame = this.sprite_frames[this.sprite_frames.length - 1], this.is_playing = !1, this.play_time = 0, void(this.end_func && this.end_func());
                        this.sprite.spriteFrame = this.sprite_frames[n]
                    } else {
                        for (; n >= this.sprite_frames.length;) n -= this.sprite_frames.length, this.play_time -= this.duration * this.sprite_frames.length;
                        this.sprite.spriteFrame = this.sprite_frames[n]
                    }
                }
            }
        }), cc._RF.pop()
    }, {}],
    gen_map_path: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "c4414VVoeRLuY5U4kIKsoOO", "gen_map_path"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.anim_com = this.node.getComponent(cc.Animation);
                var e = this.anim_com.getClips()[0];
                this.draw_node = new cc.DrawNode, this.node._sgNode.addChild(this.draw_node);
                var n = e.curveData.paths;
                this.road_data_set = [];
                var t = void 0;
                for (t in n) {
                    var o = n[t].props.position;
                    this.gen_path_data(o)
                }
                cc.find("Canvas/MainGame").getComponent("createActor").set_map_road_set(this.road_data_set)
            },
            start: function() {
                this.get_road_set()
            },
            get_road_set: function() {
                return this.road_data_set
            },
            gen_path_data: function(e) {
                for (var n = null, t = null, o = null, i = null, m = [], y = 0; y < e.length; y++) {
                    var a = e[y];
                    null !== n && m.push([t, n, n, cc.p(a.value[0], a.value[1])]), t = cc.p(a.value[0], a.value[1]);
                    for (var c = 0; c < a.motionPath.length; c++) {
                        var r = cc.p(a.motionPath[c][0], a.motionPath[c][1]);
                        i = cc.p(a.motionPath[c][2], a.motionPath[c][3]), null === n && (n = i), m.push([t, n, i, r]), n = cc.p(a.motionPath[c][4], a.motionPath[c][5]), t = r
                    }
                }
                for (var s = [m[0][0]], d = 0; d < m.length; d++) {
                    t = m[d][0], n = m[d][1], i = m[d][2], o = m[d][3];
                    for (var l = this.bezier_length(t, n, i, o) / 16, u = 1 / (l = Math.floor(l)), v = u, _ = 0; _ < l; _++) {
                        var p = t.x * (1 - v) * (1 - v) * (1 - v) + 3 * n.x * v * (1 - v) * (1 - v) + 3 * i.x * v * v * (1 - v) + o.x * v * v * v,
                            h = t.y * (1 - v) * (1 - v) * (1 - v) + 3 * n.y * v * (1 - v) * (1 - v) + 3 * i.y * v * v * (1 - v) + o.y * v * v * v;
                        s.push(cc.p(p, h)), v += u
                    }
                }
                this.road_data_set.push(s)
            },
            bezier_length: function(e, n, t, o) {
                for (var i = e, m = 0, y = .05, a = 0; a < 20; a++) {
                    var c = e.x * (1 - y) * (1 - y) * (1 - y) + 3 * n.x * y * (1 - y) * (1 - y) + 3 * t.x * y * y * (1 - y) + o.x * y * y * y,
                        r = e.y * (1 - y) * (1 - y) * (1 - y) + 3 * n.y * y * (1 - y) * (1 - y) + 3 * t.y * y * y * (1 - y) + o.y * y * y * y,
                        s = cc.p(c, r),
                        d = cc.pSub(s, i);
                    i = s, m += cc.pLength(d), y += .05
                }
                return m
            }
        }), cc._RF.pop()
    }, {}],
    gift_Package: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "4d887YcEuhL7oS3CFsFTd8r", "gift_Package");
        e("../List/carProperty"), e("PolySDK");
        cc.Class({
            extends: cc.Component,
            properties: {
                content: cc.Node,
                adRefresh: cc.Node,
                InvitationBtn: cc.Node
            },
            onLoad: function() {},
            PlatformEventCallback: function(e, n, t) {},
            onEnable: function() {
                this.addItemToList()
            },
            addItemToList: function() {
                var e = this,
                    n = void 0,
                    t = void 0,
                    o = {
                        uuid: cc.vv.CG.wxUserInit.uuid
                    };
                cc.vv.DAO.wx_API.wxGetShareList(o, function(o) {
                    if (101 == o.code) {
                        var i = o,
                            m = void 0;
                        i.size > 0 && (m = JSON.parse(i.shareList)), i.size < 5 ? e.setReceiveisEnableEvent(!1) : 5 == i.size && 1 == m[i.size - 1].reward && e.setReceiveisEnableEvent(!0);
                        for (var y = 0; y < e.content.childrenCount; y++) n = e.content.children[y], t = n.getComponent("userItem"), y < i.size && 0 != i.size ? (cc.vv.wxAPI.aldSendEvent("\u9080\u8bf7\u6210\u529f\u4eba\u6570", {
                            "\u9080\u8bf7\u6210\u529f\u4eba\u6570": "\u4eba\u6570"
                        }), t.setinfoAll(m[y].head_icon, m[y].reward, m[y])) : t.setinfoAll("", 2, "")
                    } else console.log(o.data)
                })
            },
            setReceiveisEnableEvent: function(e) {
                this.adRefresh && this.InvitationBtn && (this.adRefresh.active = e, this.InvitationBtn.active = !e)
            },
            onClickedbtn: function(e, n) {
                switch (n) {
                    case "adRefresh":
                        var t = {
                            gift_Packagejs: this,
                            adType: "gift_Package"
                        };
                        cc.vv.wxAPI.videoAd.onPlayVideoBtn(t);
                        break;
                    case "InvitationBtn":
                        cc.vv.wxAPI.shareAppMessage();
                        break;
                    case "btn5":
                        this.receiveAgrandprize() && this.setReceiveisEnableEvent(!0);
                        break;
                    case "closebtn":
                        this.node.active = !1
                }
            },
            receiveAgrandprize: function() {
                for (var e = 0; e < this.content.childrenCount; e++) {
                    if (1 != this.content.children[e].getComponent("userItem").btnState) return !1
                }
                return !0
            },
            wxGetShareReward: function(e) {
                var n = e,
                    t = {
                        uuid: cc.vv.CG.wxUserInit.uuid,
                        shared_uuid: -1
                    };
                cc.vv.DAO.wx_API.wxGetShareReward(t, function(e) {
                    101 == e.code ? (cc.vv.PP.glod += Math.round(3600 * cc.vv.CarsMgr.getEarningsperSecond()), n.addItemToList()) : cc.log(e)
                })
            }
        }), cc._RF.pop()
    }, {
        "../List/carProperty": "carProperty",
        PolySDK: "PolySDK"
    }],
    hero: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "27f73X9IUpH5bj7FCPQ/QJO", "hero");
        var o = e("ugame");
        cc.Class({
            extends: cc.Component,
            properties: {
                arrow_bullet_prefab: {
                    default: null,
                    type: cc.Prefab
                },
                search_R: 200,
                boot_root_path: "Canvas/MainGame/game/bullet_root",
                heroType: ""
            },
            onLoad: function() {
                this.bullet_root = cc.find(this.boot_root_path)
            },
            start: function() {
                "crystalHero" == this.heroType && (this.scheduleOnce(this.tower_think.bind(this), .1), this.setinfoAll(cc.vv.PP.currentcarMaxGrade))
            },
            setinfoAll: function(e) {
                this.deleteHeroData(), this.setattack(e), this.scheduleOnce(this.tower_think.bind(this), .1)
            },
            shoot_at: function(e) {
                if (null != this.arrow_bullet_prefab) {
                    var n = this.tower_center_pos(),
                        t = cc.instantiate(this.arrow_bullet_prefab);
                    this.bullet_root.addChild(t);
                    var i, m = cc.sequence(cc.scaleTo(.1, 1.2), cc.scaleTo(.05, 1));
                    this.node.runAction(m), null == cc.vv.CG.lockingEnEmy ? i = o.search_enemy(n, this.search_R) : null == (i = o.attackRange(n, this.search_R)) && (i = o.search_enemy(n, this.search_R)), i && t.getComponent("arrow_bullet").shoot_at(n, e, i, this.attack, this.heroLevel)
                }
            },
            tower_center_pos: function() {
                var e = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
                return e.x += -5, e.y += 7, e
            },
            tower_think: function() {
                if (null != this.arrow_bullet_prefab) {
                    var e, n = this.tower_center_pos();
                    "crystalHero" == this.heroType && this.setattack(cc.vv.PP.currentcarMaxGrade), null == cc.vv.CG.lockingEnEmy ? e = o.search_enemy(n, this.search_R) : null == (e = o.attackRange(n, this.search_R)) && (e = o.search_enemy(n, this.search_R));
                    var t = .1;
                    if (e) {
                        var i = e.convertToWorldSpaceAR(cc.v2(0, 0));
                        t = .8 / cc.vv.CG.income.speed, this.shoot_at(i)
                    }
                    this.scheduleOnce(this.tower_think.bind(this), t)
                }
            },
            setattack: function(e) {
                "" != e && (this.heroLevel = e, "crystalHero" == this.heroType ? this.attack = cc.vv.formula.crystalattackfun(e) : this.attack = cc.vv.formula.heroattackfun(e))
            },
            deleteHeroData: function() {
                this.attack = 0, this.unscheduleAllCallbacks()
            }
        }), cc._RF.pop()
    }, {
        ugame: "ugame"
    }],
    level1: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "0e3df/Ic0JH87KrNkca/I+e", "level1");
        var o = e("Enemy"),
            i = [{
                ordinaryWave: [{
                    delay: 0,
                    num: 10,
                    type: [o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy1],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 10,
                    type: [o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy1],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }],
                WaveNum: 3
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 15,
                    type: [o.enemy2, o.enemy2, o.enemy1, o.enemy1, o.enemy2, o.enemy2, o.enemy2, o.enemy2, o.enemy2, o.enemy2, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy2],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 15,
                    type: [o.enemy2, o.enemy2, o.enemy1, o.enemy1, o.enemy2, o.enemy2, o.enemy2, o.enemy2, o.enemy2, o.enemy2, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy2],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }],
                WaveNum: 3
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy31],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy31],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 5e3
                }],
                WaveNum: 1
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 25,
                    type: [o.enemy4, o.enemy4, o.enemy2, o.enemy2, o.enemy4, o.enemy4, o.enemy4, o.enemy4, o.enemy3, o.enemy3, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy4, o.enemy4, o.enemy2, o.enemy2, o.enemy4, o.enemy4, o.enemy2, o.enemy2, o.enemy4, o.enemy4, o.enemy4],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 25,
                    type: [o.enemy4, o.enemy4, o.enemy2, o.enemy2, o.enemy4, o.enemy4, o.enemy4, o.enemy4, o.enemy3, o.enemy3, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy4, o.enemy4, o.enemy2, o.enemy2, o.enemy4, o.enemy4, o.enemy2, o.enemy2, o.enemy4, o.enemy4, o.enemy4],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }],
                WaveNum: 5
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 30,
                    type: [o.enemy5, o.enemy5, o.enemy2, o.enemy2, o.enemy5, o.enemy5, o.enemy4, o.enemy4, o.enemy3, o.enemy3, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy5, o.enemy5, o.enemy2, o.enemy2, o.enemy4, o.enemy4, o.enemy2, o.enemy2, o.enemy5, o.enemy5, o.enemy1, o.enemy1, o.enemy5, o.enemy5, o.enemy2, o.enemy5],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy5, o.enemy5, o.enemy2, o.enemy2, o.enemy1, o.enemy1, o.enemy3, o.enemy3, o.enemy4, o.enemy4, o.enemy5, o.enemy5, o.enemy2, o.enemy2, o.enemy1, o.enemy1, o.enemy3, o.enemy3, o.enemy4, o.enemy4, o.enemy5, o.enemy5, o.enemy2, o.enemy2, o.enemy1, o.enemy1, o.enemy3, o.enemy3, o.enemy4, o.enemy4],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy5, o.enemy5, o.enemy2, o.enemy2, o.enemy1, o.enemy1, o.enemy3, o.enemy3, o.enemy4, o.enemy4, o.enemy5, o.enemy5, o.enemy5, o.enemy5, o.enemy1, o.enemy5, o.enemy5, o.enemy2, o.enemy2, o.enemy1, o.enemy1, o.enemy3, o.enemy3, o.enemy4, o.enemy4, o.enemy5, o.enemy5, o.enemy5, o.enemy5, o.enemy1],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy5, o.enemy5, o.enemy2, o.enemy2, o.enemy5, o.enemy5, o.enemy4, o.enemy4, o.enemy3, o.enemy3, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy5, o.enemy5, o.enemy2, o.enemy2, o.enemy4, o.enemy4, o.enemy5, o.enemy5, o.enemy2, o.enemy2, o.enemy5, o.enemy5, o.enemy4, o.enemy4, o.enemy3, o.enemy3],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy5, o.enemy5, o.enemy2, o.enemy2, o.enemy5, o.enemy5, o.enemy4, o.enemy4, o.enemy3, o.enemy3, o.enemy1, o.enemy1, o.enemy1, o.enemy1, o.enemy5, o.enemy5, o.enemy2, o.enemy2, o.enemy4, o.enemy4, o.enemy2, o.enemy2, o.enemy5, o.enemy5, o.enemy5, o.enemy5, o.enemy5, o.enemy2, o.enemy2, o.enemy5],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy31],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 5e3
                }],
                WaveNum: 2
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 30,
                    type: [o.enemy6, o.enemy6, o.enemy3, o.enemy3, o.enemy6, o.enemy6, o.enemy5, o.enemy5, o.enemy4, o.enemy4, o.enemy2, o.enemy2, o.enemy2, o.enemy2, o.enemy6, o.enemy6, o.enemy3, o.enemy3, o.enemy5, o.enemy5, o.enemy3, o.enemy3, o.enemy6, o.enemy6, o.enemy2, o.enemy2, o.enemy6, o.enemy6, o.enemy3, o.enemy6],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy6, o.enemy6, o.enemy3, o.enemy3, o.enemy2, o.enemy2, o.enemy4, o.enemy4, o.enemy5, o.enemy5, o.enemy6, o.enemy6, o.enemy3, o.enemy3, o.enemy2, o.enemy2, o.enemy4, o.enemy4, o.enemy5, o.enemy5, o.enemy6, o.enemy6, o.enemy3, o.enemy3, o.enemy2, o.enemy2, o.enemy4, o.enemy4, o.enemy5, o.enemy5],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy6, o.enemy6, o.enemy3, o.enemy3, o.enemy2, o.enemy2, o.enemy4, o.enemy4, o.enemy5, o.enemy5, o.enemy6, o.enemy6, o.enemy6, o.enemy6, o.enemy2, o.enemy6, o.enemy6, o.enemy3, o.enemy3, o.enemy2, o.enemy2, o.enemy4, o.enemy4, o.enemy5, o.enemy5, o.enemy6, o.enemy6, o.enemy6, o.enemy6, o.enemy2],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy6, o.enemy6, o.enemy3, o.enemy3, o.enemy6, o.enemy6, o.enemy5, o.enemy5, o.enemy4, o.enemy4, o.enemy2, o.enemy2, o.enemy2, o.enemy2, o.enemy6, o.enemy6, o.enemy3, o.enemy3, o.enemy5, o.enemy5, o.enemy6, o.enemy6, o.enemy3, o.enemy3, o.enemy6, o.enemy6, o.enemy5, o.enemy5, o.enemy4, o.enemy4],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy6, o.enemy6, o.enemy3, o.enemy3, o.enemy6, o.enemy6, o.enemy5, o.enemy5, o.enemy4, o.enemy4, o.enemy2, o.enemy2, o.enemy2, o.enemy2, o.enemy6, o.enemy6, o.enemy3, o.enemy3, o.enemy5, o.enemy5, o.enemy3, o.enemy3, o.enemy6, o.enemy6, o.enemy6, o.enemy6, o.enemy6, o.enemy3, o.enemy3, o.enemy6],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy32],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 30,
                    type: [o.enemy7, o.enemy7, o.enemy4, o.enemy4, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy5, o.enemy5, o.enemy3, o.enemy3, o.enemy3, o.enemy3, o.enemy7, o.enemy7, o.enemy4, o.enemy4, o.enemy6, o.enemy6, o.enemy4, o.enemy4, o.enemy7, o.enemy7, o.enemy3, o.enemy3, o.enemy7, o.enemy7, o.enemy4, o.enemy7],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy7, o.enemy7, o.enemy4, o.enemy4, o.enemy3, o.enemy3, o.enemy5, o.enemy5, o.enemy6, o.enemy6, o.enemy7, o.enemy7, o.enemy4, o.enemy4, o.enemy3, o.enemy3, o.enemy5, o.enemy5, o.enemy6, o.enemy6, o.enemy7, o.enemy7, o.enemy4, o.enemy4, o.enemy3, o.enemy3, o.enemy5, o.enemy5, o.enemy6, o.enemy6],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy7, o.enemy7, o.enemy4, o.enemy4, o.enemy3, o.enemy3, o.enemy5, o.enemy5, o.enemy6, o.enemy6, o.enemy7, o.enemy7, o.enemy7, o.enemy7, o.enemy3, o.enemy7, o.enemy7, o.enemy4, o.enemy4, o.enemy3, o.enemy3, o.enemy5, o.enemy5, o.enemy6, o.enemy6, o.enemy7, o.enemy7, o.enemy7, o.enemy7, o.enemy3],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy7, o.enemy7, o.enemy4, o.enemy4, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy5, o.enemy5, o.enemy3, o.enemy3, o.enemy3, o.enemy3, o.enemy7, o.enemy7, o.enemy4, o.enemy4, o.enemy6, o.enemy6, o.enemy7, o.enemy7, o.enemy4, o.enemy4, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy5, o.enemy5],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy7, o.enemy7, o.enemy4, o.enemy4, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy5, o.enemy5, o.enemy3, o.enemy3, o.enemy3, o.enemy3, o.enemy7, o.enemy7, o.enemy4, o.enemy4, o.enemy6, o.enemy6, o.enemy4, o.enemy4, o.enemy7, o.enemy7, o.enemy7, o.enemy7, o.enemy7, o.enemy4, o.enemy4, o.enemy7],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy32],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 30,
                    type: [o.enemy8, o.enemy8, o.enemy5, o.enemy5, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy4, o.enemy4, o.enemy4, o.enemy4, o.enemy8, o.enemy8, o.enemy5, o.enemy5, o.enemy7, o.enemy7, o.enemy5, o.enemy5, o.enemy8, o.enemy8, o.enemy4, o.enemy4, o.enemy8, o.enemy8, o.enemy5, o.enemy8],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy8, o.enemy8, o.enemy5, o.enemy5, o.enemy4, o.enemy4, o.enemy6, o.enemy6, o.enemy7, o.enemy7, o.enemy8, o.enemy8, o.enemy5, o.enemy5, o.enemy4, o.enemy4, o.enemy6, o.enemy6, o.enemy7, o.enemy7, o.enemy8, o.enemy8, o.enemy5, o.enemy5, o.enemy4, o.enemy4, o.enemy6, o.enemy6, o.enemy7, o.enemy7],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy8, o.enemy8, o.enemy5, o.enemy5, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy4, o.enemy4, o.enemy4, o.enemy4, o.enemy8, o.enemy8, o.enemy5, o.enemy5, o.enemy7, o.enemy7, o.enemy8, o.enemy8, o.enemy5, o.enemy5, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy6, o.enemy6],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy8, o.enemy8, o.enemy5, o.enemy5, o.enemy4, o.enemy4, o.enemy6, o.enemy6, o.enemy7, o.enemy7, o.enemy8, o.enemy8, o.enemy8, o.enemy8, o.enemy4, o.enemy8, o.enemy8, o.enemy5, o.enemy5, o.enemy4, o.enemy4, o.enemy6, o.enemy6, o.enemy7, o.enemy7, o.enemy8, o.enemy8, o.enemy8, o.enemy8, o.enemy4],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy8, o.enemy8, o.enemy5, o.enemy5, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy4, o.enemy4, o.enemy4, o.enemy4, o.enemy8, o.enemy8, o.enemy5, o.enemy5, o.enemy7, o.enemy7, o.enemy5, o.enemy5, o.enemy8, o.enemy8, o.enemy8, o.enemy8, o.enemy8, o.enemy5, o.enemy5, o.enemy8],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy32],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 30,
                    type: [o.enemy9, o.enemy9, o.enemy6, o.enemy6, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy5, o.enemy5, o.enemy5, o.enemy5, o.enemy9, o.enemy9, o.enemy6, o.enemy6, o.enemy8, o.enemy8, o.enemy6, o.enemy6, o.enemy9, o.enemy9, o.enemy5, o.enemy5, o.enemy9, o.enemy9, o.enemy6, o.enemy9],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy9, o.enemy9, o.enemy6, o.enemy6, o.enemy5, o.enemy5, o.enemy7, o.enemy7, o.enemy8, o.enemy8, o.enemy9, o.enemy9, o.enemy6, o.enemy6, o.enemy5, o.enemy5, o.enemy7, o.enemy7, o.enemy8, o.enemy8, o.enemy9, o.enemy9, o.enemy6, o.enemy6, o.enemy5, o.enemy5, o.enemy7, o.enemy7, o.enemy8, o.enemy8],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy9, o.enemy9, o.enemhy6, o.enemy6, o.enemy5, o.enemy5, o.enemy7, o.enemy7, o.enemy8, o.enemy8, o.enemy9, o.enemy9, o.enemy9, o.enemy9, o.enemy5, o.enemy9, o.enemy9, o.enemy6, o.enemy6, o.enemy5, o.enemy5, o.enemy7, o.enemy7, o.enemy8, o.enemy8, o.enemy9, o.enemy9, o.enemy9, o.enemy9, o.enemy5],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy9, o.enemy9, o.enemy6, o.enemy6, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy5, o.enemy5, o.enemy5, o.enemy5, o.enemy9, o.enemy9, o.enemy6, o.enemy6, o.enemy8, o.enemy8, o.enemy9, o.enemy9, o.enemy6, o.enemy6, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy7, o.enemy7],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 30,
                    type: [o.enemy9, o.enemy9, o.enemy6, o.enemy6, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy5, o.enemy5, o.enemy5, o.enemy5, o.enemy9, o.enemy9, o.enemy6, o.enemy6, o.enemy8, o.enemy8, o.enemy6, o.enemy6, o.enemy9, o.enemy9, o.enemy9, o.enemy9, o.enemy9, o.enemy6, o.enemy6, o.enemy9],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy33],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 40,
                    type: [o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy6, o.enemy6, o.enemy6, o.enemy6, o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy9, o.enemy9, o.enemy7, o.enemy7, o.enemy10, o.enemy10, o.enemy6, o.enemy6, o.enemy10, o.enemy10, o.enemy7, o.enemy10, o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy8, o.enemy8, o.enemy9, o.enemy9],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy8, o.enemy8, o.enemy9, o.enemy9, o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy8, o.enemy8, o.enemy9, o.enemy9, o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy8, o.enemy8, o.enemy9, o.enemy9, o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy8, o.enemy8, o.enemy9, o.enemy9],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy8, o.enemy8, o.enemy9, o.enemy9, o.enemy10, o.enemy10, o.enemy10, o.enemy10, o.enemy6, o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy8, o.enemy8, o.enemy9, o.enemy9, o.enemy10, o.enemy10, o.enemy10, o.enemy10, o.enemy6, o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy6, o.enemy6, o.enemy8, o.enemy8, o.enemy9, o.enemy9],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy6, o.enemy6, o.enemy6, o.enemy6, o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy9, o.enemy9, o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy6, o.enemy6, o.enemy6, o.enemy6, o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy9, o.enemy9],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy6, o.enemy6, o.enemy6, o.enemy6, o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy9, o.enemy9, o.enemy7, o.enemy7, o.enemy10, o.enemy10, o.enemy10, o.enemy10, o.enemy10, o.enemy7, o.enemy7, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy6, o.enemy6, o.enemy6, o.enemy6, o.enemy10],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy33],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 40,
                    type: [o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy7, o.enemy7, o.enemy7, o.enemy7, o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy10, o.enemy10, o.enemy8, o.enemy8, o.enemy11, o.enemy11, o.enemy7, o.enemy7, o.enemy11, o.enemy11, o.enemy8, o.enemy11, o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy9, o.enemy9, o.enemy10, o.enemy10],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy9, o.enemy9, o.enemy10, o.enemy10, o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy9, o.enemy9, o.enemy10, o.enemy10, o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy9, o.enemy9, o.enemy10, o.enemy10, o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy9, o.enemy9, o.enemy10, o.enemy10],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy9, o.enemy9, o.enemy10, o.enemy10, o.enemy11, o.enemy11, o.enemy11, o.enemy11, o.enemy7, o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy9, o.enemy9, o.enemy10, o.enemy10, o.enemy11, o.enemy11, o.enemy11, o.enemy11, o.enemy7, o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy7, o.enemy7, o.enemy9, o.enemy9, o.enemy10, o.enemy10],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy7, o.enemy7, o.enemy7, o.enemy7, o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy10, o.enemy10, o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy7, o.enemy7, o.enemy7, o.enemy7, o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy10, o.enemy10],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy7, o.enemy7, o.enemy7, o.enemy7, o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy10, o.enemy10, o.enemy8, o.enemy8, o.enemy11, o.enemy11, o.enemy11, o.enemy11, o.enemy11, o.enemy8, o.enemy8, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy7, o.enemy7, o.enemy7, o.enemy7, o.enemy11],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy33],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 40,
                    type: [o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy8, o.enemy8, o.enemy8, o.enemy8, o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy11, o.enemy11, o.enemy9, o.enemy9, o.enemy12, o.enemy12, o.enemy8, o.enemy8, o.enemy12, o.enemy12, o.enemy9, o.enemy12, o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy10, o.enemy10, o.enemy11, o.enemy11],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy10, o.enemy10, o.enemy11, o.enemy11, o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy10, o.enemy10, o.enemy11, o.enemy11, o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy10, o.enemy10, o.enemy11, o.enemy11, o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy10, o.enemy10, o.enemy11, o.enemy11],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy10, o.enemy10, o.enemy11, o.enemy11, o.enemy12, o.enemy12, o.enemy12, o.enemy12, o.enemy8, o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy10, o.enemy10, o.enemy11, o.enemy11, o.enemy12, o.enemy12, o.enemy12, o.enemy12, o.enemy8, o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy8, o.enemy8, o.enemy10, o.enemy10, o.enemy11, o.enemy11],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy8, o.enemy8, o.enemy8, o.enemy8, o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy11, o.enemy11, o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy8, o.enemy8, o.enemy8, o.enemy8, o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy11, o.enemy11],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy8, o.enemy8, o.enemy8, o.enemy8, o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy11, o.enemy11, o.enemy9, o.enemy9, o.enemy12, o.enemy12, o.enemy12, o.enemy12, o.enemy12, o.enemy9, o.enemy9, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy8, o.enemy8, o.enemy8, o.enemy8, o.enemy12],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy34],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 40,
                    type: [o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy9, o.enemy9, o.enemy9, o.enemy9, o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy12, o.enemy12, o.enemy10, o.enemy10, o.enemy13, o.enemy13, o.enemy9, o.enemy9, o.enemy13, o.enemy13, o.enemy10, o.enemy13, o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy11, o.enemy11, o.enemy12, o.enemy12],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy11, o.enemy11, o.enemy12, o.enemy12, o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy11, o.enemy11, o.enemy12, o.enemy12, o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy11, o.enemy11, o.enemy12, o.enemy12, o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy11, o.enemy11, o.enemy12, o.enemy12],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy11, o.enemy11, o.enemy12, o.enemy12, o.enemy13, o.enemy13, o.enemy13, o.enemy13, o.enemy9, o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy11, o.enemy11, o.enemy12, o.enemy12, o.enemy13, o.enemy13, o.enemy13, o.enemy13, o.enemy9, o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy9, o.enemy9, o.enemy11, o.enemy11, o.enemy12, o.enemy12],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy9, o.enemy9, o.enemy9, o.enemy9, o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy12, o.enemy12, o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy9, o.enemy9, o.enemy9, o.enemy9, o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy12, o.enemy12],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy9, o.enemy9, o.enemy9, o.enemy9, o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy12, o.enemy12, o.enemy10, o.enemy10, o.enemy13, o.enemy13, o.enemy13, o.enemy13, o.enemy13, o.enemy10, o.enemy10, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy9, o.enemy9, o.enemy9, o.enemy9, o.enemy13],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy34],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 40,
                    type: [o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy10, o.enemy10, o.enemy10, o.enemy10, o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy13, o.enemy13, o.enemy11, o.enemy11, o.enemy14, o.enemy14, o.enemy10, o.enemy10, o.enemy14, o.enemy14, o.enemy11, o.enemy14, o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy12, o.enemy12, o.enemy13, o.enemy13],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy12, o.enemy12, o.enemy13, o.enemy13, o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy12, o.enemy12, o.enemy13, o.enemy13, o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy12, o.enemy12, o.enemy13, o.enemy13, o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy12, o.enemy12, o.enemy13, o.enemy13],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy12, o.enemy12, o.enemy13, o.enemy13, o.enemy14, o.enemy14, o.enemy14, o.enemy14, o.enemy10, o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy12, o.enemy12, o.enemy13, o.enemy13, o.enemy14, o.enemy14, o.enemy14, o.enemy14, o.enemy10, o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy10, o.enemy10, o.enemy12, o.enemy12, o.enemy13, o.enemy13],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy10, o.enemy10, o.enemy10, o.enemy10, o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy13, o.enemy13, o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy10, o.enemy10, o.enemy10, o.enemy10, o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy13, o.enemy13],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 40,
                    type: [o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy10, o.enemy10, o.enemy10, o.enemy10, o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy13, o.enemy13, o.enemy11, o.enemy11, o.enemy14, o.enemy14, o.enemy14, o.enemy14, o.enemy14, o.enemy11, o.enemy11, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy10, o.enemy10, o.enemy10, o.enemy10, o.enemy14],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy34],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 45,
                    type: [o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy11, o.enemy11, o.enemy11, o.enemy11, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy14, o.enemy14, o.enemy12, o.enemy12, o.enemy15, o.enemy15, o.enemy11, o.enemy11, o.enemy15, o.enemy15, o.enemy12, o.enemy15, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy13, o.enemy13, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy11],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy13, o.enemy13, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy13, o.enemy13, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy13, o.enemy13, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy13, o.enemy13, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy11],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy13, o.enemy13, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy15, o.enemy15, o.enemy11, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy13, o.enemy13, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy15, o.enemy15, o.enemy11, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy11, o.enemy11, o.enemy13, o.enemy13, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy15, o.enemy15, o.enemy11],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy11, o.enemy11, o.enemy11, o.enemy11, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy11, o.enemy11, o.enemy11, o.enemy11, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy15],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy11, o.enemy11, o.enemy11, o.enemy11, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy14, o.enemy14, o.enemy12, o.enemy12, o.enemy15, o.enemy15, o.enemy15, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy11, o.enemy11, o.enemy11, o.enemy11, o.enemy15, o.enemy15, o.enemy12, o.enemy12, o.enemy14, o.enemy14],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy35],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 45,
                    type: [o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy12, o.enemy12, o.enemy12, o.enemy12, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy15, o.enemy15, o.enemy13, o.enemy13, o.enemy16, o.enemy16, o.enemy12, o.enemy12, o.enemy16, o.enemy16, o.enemy13, o.enemy16, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy12],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy12],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy16, o.enemy16, o.enemy12, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy16, o.enemy16, o.enemy12, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy12, o.enemy12, o.enemy14, o.enemy14, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy16, o.enemy16, o.enemy12],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy12, o.enemy12, o.enemy12, o.enemy12, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy12, o.enemy12, o.enemy12, o.enemy12, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy16],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy12, o.enemy12, o.enemy12, o.enemy12, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy15, o.enemy15, o.enemy13, o.enemy13, o.enemy16, o.enemy16, o.enemy16, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy12, o.enemy12, o.enemy12, o.enemy12, o.enemy16, o.enemy16, o.enemy13, o.enemy13, o.enemy15, o.enemy15],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy35],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 45,
                    type: [o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy13, o.enemy13, o.enemy13, o.enemy13, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy16, o.enemy16, o.enemy14, o.enemy14, o.enemy17, o.enemy17, o.enemy13, o.enemy13, o.enemy17, o.enemy17, o.enemy14, o.enemy17, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy13],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy13],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy17, o.enemy17, o.enemy13, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy17, o.enemy17, o.enemy13, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy13, o.enemy13, o.enemy15, o.enemy15, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy17, o.enemy17, o.enemy13],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy13, o.enemy13, o.enemy13, o.enemy13, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy13, o.enemy13, o.enemy13, o.enemy13, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy17],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy13, o.enemy13, o.enemy13, o.enemy13, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy16, o.enemy16, o.enemy14, o.enemy14, o.enemy17, o.enemy17, o.enemy17, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy13, o.enemy13, o.enemy13, o.enemy13, o.enemy17, o.enemy17, o.enemy14, o.enemy14, o.enemy16, o.enemy16],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy35],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 45,
                    type: [o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy14, o.enemy14, o.enemy14, o.enemy14, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy17, o.enemy17, o.enemy15, o.enemy15, o.enemy18, o.enemy18, o.enemy14, o.enemy14, o.enemy18, o.enemy18, o.enemy15, o.enemy18, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy14],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy14],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy18, o.enemy18, o.enemy14, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy18, o.enemy18, o.enemy14, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy14, o.enemy14, o.enemy16, o.enemy16, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy18, o.enemy18, o.enemy14],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy14, o.enemy14, o.enemy14, o.enemy14, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy14, o.enemy14, o.enemy14, o.enemy14, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy18],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy14, o.enemy14, o.enemy14, o.enemy14, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy17, o.enemy17, o.enemy15, o.enemy15, o.enemy18, o.enemy18, o.enemy18, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy14, o.enemy14, o.enemy14, o.enemy14, o.enemy18, o.enemy18, o.enemy15, o.enemy15, o.enemy17, o.enemy17],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy36],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 45,
                    type: [o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy15, o.enemy15, o.enemy15, o.enemy15, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy16, o.enemy16, o.enemy19, o.enemy19, o.enemy15, o.enemy15, o.enemy19, o.enemy19, o.enemy16, o.enemy19, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy15],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy15],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy19, o.enemy19, o.enemy15, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy19, o.enemy19, o.enemy15, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy15, o.enemy15, o.enemy17, o.enemy17, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy19, o.enemy19, o.enemy15],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy15, o.enemy15, o.enemy15, o.enemy15, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy15, o.enemy15, o.enemy15, o.enemy15, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy19],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 45,
                    type: [o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy15, o.enemy15, o.enemy15, o.enemy15, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy16, o.enemy16, o.enemy19, o.enemy19, o.enemy19, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy15, o.enemy15, o.enemy15, o.enemy15, o.enemy19, o.enemy19, o.enemy16, o.enemy16, o.enemy18, o.enemy18],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy36],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 60,
                    type: [o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy16, o.enemy16, o.enemy16, o.enemy16, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy17, o.enemy17, o.enemy20, o.enemy20, o.enemy16, o.enemy16, o.enemy20, o.enemy20, o.enemy17, o.enemy20, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy20, o.enemy20, o.enemy16, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy20, o.enemy20, o.enemy16, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy20, o.enemy20, o.enemy16, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy16, o.enemy16, o.enemy18, o.enemy18, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy20, o.enemy20, o.enemy16],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy16, o.enemy16, o.enemy16, o.enemy16, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy16, o.enemy16, o.enemy16, o.enemy16, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy16, o.enemy16, o.enemy16, o.enemy16, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy19, o.enemy19],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy16, o.enemy16, o.enemy16, o.enemy16, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy17, o.enemy17, o.enemy20, o.enemy20, o.enemy20, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy16, o.enemy16, o.enemy16, o.enemy16, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy17, o.enemy17, o.enemy20, o.enemy20, o.enemy20, o.enemy20, o.enemy20, o.enemy17, o.enemy17, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy18, o.enemy18],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy36],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 60,
                    type: [o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy17, o.enemy17, o.enemy17, o.enemy17, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy18, o.enemy18, o.enemy21, o.enemy21, o.enemy17, o.enemy17, o.enemy21, o.enemy21, o.enemy18, o.enemy21, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy17, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy17, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy17, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy17, o.enemy17, o.enemy19, o.enemy19, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy17],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy17, o.enemy17, o.enemy17, o.enemy17, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy17, o.enemy17, o.enemy17, o.enemy17, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy17, o.enemy17, o.enemy17, o.enemy17, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy20, o.enemy20],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy17, o.enemy17, o.enemy17, o.enemy17, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy18, o.enemy18, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy17, o.enemy17, o.enemy17, o.enemy17, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy18, o.enemy18, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy18, o.enemy18, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy19, o.enemy19],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy37],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 60,
                    type: [o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy18, o.enemy18, o.enemy18, o.enemy18, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy19, o.enemy19, o.enemy22, o.enemy22, o.enemy18, o.enemy18, o.enemy22, o.enemy22, o.enemy19, o.enemy22, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy18, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy18, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy18, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy18, o.enemy18, o.enemy20, o.enemy20, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy18],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy18, o.enemy18, o.enemy18, o.enemy18, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy18, o.enemy18, o.enemy18, o.enemy18, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy18, o.enemy18, o.enemy18, o.enemy18, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy21, o.enemy21],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy18, o.enemy18, o.enemy18, o.enemy18, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy19, o.enemy19, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy18, o.enemy18, o.enemy18, o.enemy18, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy19, o.enemy19, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy19, o.enemy19, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy20, o.enemy20],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy37],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 60,
                    type: [o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy19, o.enemy19, o.enemy19, o.enemy19, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy20, o.enemy20, o.enemy23, o.enemy23, o.enemy19, o.enemy19, o.enemy23, o.enemy23, o.enemy20, o.enemy23, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy19, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy19, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy19, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy19, o.enemy19, o.enemy21, o.enemy21, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy19],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy19, o.enemy19, o.enemy19, o.enemy19, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy19, o.enemy19, o.enemy19, o.enemy19, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy19, o.enemy19, o.enemy19, o.enemy19, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy22, o.enemy22],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy19, o.enemy19, o.enemy19, o.enemy19, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy20, o.enemy20, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy19, o.enemy19, o.enemy19, o.enemy19, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy20, o.enemy20, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy20, o.enemy20, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy21, o.enemy21],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy37],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 60,
                    type: [o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy20, o.enemy20, o.enemy20, o.enemy20, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy21, o.enemy21, o.enemy24, o.enemy24, o.enemy20, o.enemy20, o.enemy24, o.enemy24, o.enemy21, o.enemy24, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy20, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy20, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy20, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy20, o.enemy20, o.enemy22, o.enemy22, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy20],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy20, o.enemy20, o.enemy20, o.enemy20, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy20, o.enemy20, o.enemy20, o.enemy20, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy20, o.enemy20, o.enemy20, o.enemy20, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy23, o.enemy23],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 60,
                    type: [o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy20, o.enemy20, o.enemy20, o.enemy20, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy21, o.enemy21, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy20, o.enemy20, o.enemy20, o.enemy20, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy21, o.enemy21, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy21, o.enemy21, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy22, o.enemy22],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .4, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy38],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 75,
                    type: [o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy22, o.enemy22, o.enemy25, o.enemy25, o.enemy21, o.enemy21, o.enemy25, o.enemy25, o.enemy22, o.enemy25, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy21],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy21, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy21, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy21, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy21, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy21, o.enemy21, o.enemy23, o.enemy23, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy21],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy25],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy22, o.enemy22, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy22, o.enemy22, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy21, o.enemy21, o.enemy21, o.enemy21, o.enemy25, o.enemy25, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy22, o.enemy22, o.enemy25, o.enemy25, o.enemy25],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy38],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 75,
                    type: [o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy23, o.enemy23, o.enemy26, o.enemy26, o.enemy22, o.enemy22, o.enemy26, o.enemy26, o.enemy23, o.enemy26, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy22],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy22, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy22, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy22, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy22, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy22, o.enemy22, o.enemy24, o.enemy24, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy22],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy26],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy23, o.enemy23, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy23, o.enemy23, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy22, o.enemy22, o.enemy22, o.enemy22, o.enemy26, o.enemy26, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy23, o.enemy23, o.enemy26, o.enemy26, o.enemy26],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy38],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 75,
                    type: [o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy24, o.enemy24, o.enemy27, o.enemy27, o.enemy23, o.enemy23, o.enemy27, o.enemy27, o.enemy24, o.enemy27, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy27, o.enemy27, o.enemy23],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy27, o.enemy27, o.enemy23, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy27, o.enemy27, o.enemy23, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy27, o.enemy27, o.enemy23, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy27, o.enemy27, o.enemy23, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy23, o.enemy23, o.enemy25, o.enemy25, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy27, o.enemy27, o.enemy23],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy27],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy24, o.enemy24, o.enemy27, o.enemy27, o.enemy27, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy24, o.enemy24, o.enemy27, o.enemy27, o.enemy27, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy23, o.enemy23, o.enemy23, o.enemy23, o.enemy27, o.enemy27, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy24, o.enemy24, o.enemy27, o.enemy27, o.enemy27],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy39],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 75,
                    type: [o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy25, o.enemy25, o.enemy28, o.enemy28, o.enemy24, o.enemy24, o.enemy28, o.enemy28, o.enemy25, o.enemy28, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy28, o.enemy28, o.enemy24],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy28, o.enemy28, o.enemy24, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy28, o.enemy28, o.enemy24, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy28, o.enemy28, o.enemy24, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy28, o.enemy28, o.enemy24, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy24, o.enemy24, o.enemy26, o.enemy26, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy28, o.enemy28, o.enemy24],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy28],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy25, o.enemy25, o.enemy28, o.enemy28, o.enemy28, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy25, o.enemy25, o.enemy28, o.enemy28, o.enemy28, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy24, o.enemy24, o.enemy24, o.enemy24, o.enemy28, o.enemy28, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy25, o.enemy25, o.enemy28, o.enemy28, o.enemy28],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy39],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 75,
                    type: [o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy26, o.enemy26, o.enemy29, o.enemy29, o.enemy25, o.enemy25, o.enemy29, o.enemy29, o.enemy26, o.enemy29, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy29, o.enemy29, o.enemy25],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy29, o.enemy29, o.enemy25, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy29, o.enemy29, o.enemy25, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy29, o.enemy29, o.enemy25, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy29, o.enemy29, o.enemy25, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy25, o.enemy25, o.enemy27, o.enemy27, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy29, o.enemy29, o.enemy25],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy29],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 75,
                    type: [o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy26, o.enemy26, o.enemy29, o.enemy29, o.enemy29, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy26, o.enemy26, o.enemy29, o.enemy29, o.enemy29, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy27, o.enemy27, o.enemy25, o.enemy25, o.enemy25, o.enemy25, o.enemy29, o.enemy29, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy26, o.enemy26, o.enemy29, o.enemy29, o.enemy29],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy39],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }, {
                ordinaryWave: [{
                    delay: 0,
                    num: 100,
                    type: [o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy29, o.enemy29, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy26, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy30, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy26, o.enemy30],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 100,
                    type: [o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 100,
                    type: [o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy26, o.enemy26, o.enemy28, o.enemy28, o.enemy29, o.enemy29],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 100,
                    type: [o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy29, o.enemy29, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy29, o.enemy29],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }, {
                    delay: 0,
                    num: 100,
                    type: [o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy29, o.enemy29, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy29, o.enemy29, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy29, o.enemy29, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy29, o.enemy29, o.enemy28, o.enemy28, o.enemy26, o.enemy26, o.enemy26, o.enemy26, o.enemy30, o.enemy30, o.enemy27, o.enemy27, o.enemy29, o.enemy29, o.enemy27, o.enemy27, o.enemy30, o.enemy30, o.enemy30],
                    gen_time_set: [0, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, 6, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, 6, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 6, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2, 1.6, .4, .8, 1.2],
                    random_road: !1,
                    road_set: [2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 1, 4],
                    income: 5e3
                }],
                bossWave: [{
                    delay: 0,
                    num: 1,
                    type: [o.enemy40],
                    gen_time_set: [0],
                    random_road: !1,
                    road_set: [2],
                    income: 1e3
                }],
                WaveNum: 9
            }];
        n.exports = i, cc._RF.pop()
    }, {
        Enemy: "Enemy"
    }],
    objectPool: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "fb69eBk4fZEi63Xv82kpwfn", "objectPool");
        var o = cc.Class({
            name: "MyPrefabs",
            properties: {
                item: {
                    type: cc.Prefab,
                    default: []
                },
                content: cc.Node,
                initCount: cc.Float
            }
        });
        cc.Class({
            extends: cc.Component,
            properties: {
                MyPrefabs_set: {
                    default: [],
                    type: o
                }
            },
            onLoad: function() {
                this.addNodePool()
            },
            addNodePool: function() {
                cc.vv.objectpool = this, this.poolList = [];
                for (var e = 0; e < this.MyPrefabs_set.length; e++) {
                    for (var n = [], t = this.MyPrefabs_set[e], o = 0; o < t.item.length; o++) {
                        for (var i = new cc.NodePool(t.item[o].name), m = 0; m < t.initCount; m++) {
                            var y = cc.instantiate(t.item[o]);
                            i.put(y)
                        }
                        n.push(i)
                    }
                    this.poolList.push(n)
                }
            },
            createEnemy: function(e, n) {
                var t = null;
                if (void 0 != n) {
                    if (cc.vv.objectpool.poolList[e][n].size() > 0) t = cc.vv.objectpool.poolList[e][n].get();
                    else {
                        var o = this.MyPrefabs_set[e];
                        t = cc.instantiate(o.item[n])
                    }
                    return t
                }
            },
            onEnemyKilled: function(e, n, t) {
                cc.vv.objectpool.poolList[e][n].put(t)
            }
        }), cc._RF.pop()
    }, {}],
    openDomain: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "d317fwztBBIqZNFTeTjvKIt", "openDomain"), cc.Class({
            extends: cc.Component,
            properties: {
                mask: cc.Node,
                hideBtn: cc.Node,
                display: cc.Sprite,
                isOpen: !1,
                editbox: cc.EditBox
            },
            onLoad: function() {
                this.tex = new cc.Texture2D, this.hideIsShow(!1), cc.sys.platform, cc.sys.WECHAT_GAME
            },
            postMessage: function(e, n) {
                wx.postMessage({
                    type: e,
                    value: n
                })
            },
            _updaetSubDomainCanvas: function() {
                this.tex && (this.tex.initWithElement(cc.sharedCanvas), this.tex.handleLoadedTexture(), this.display.node.active && (this.display.spriteFrame = new cc.SpriteFrame(this.tex)))
            },
            update: function() {
                this.mask.active && this._updaetSubDomainCanvas()
            },
            hideIsShow: function(e) {
                this.mask.active = e, this.hideBtn.active = e, this.display.spriteFrame = null, this.display.node.active = e
            },
            hideRank: function() {
                cc.LieYingSDK.BannerAd.hideBannerAd(), cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.first_level, this.hideIsShow(!1)
            },
            openFriendRank: function() {
                cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.second_level, cc.LieYingSDK.PolySDK.BannerAd.showBannerAd(), this.hideIsShow(!0), this.postMessage("friend")
            },
            openCrowdRank: function(e) {
                this.hideIsShow(!0), this.postMessage("crowd", e)
            },
            previousPage: function() {
                this.postMessage("previousPage")
            },
            nextPage: function() {
                this.postMessage("nextPage")
            }
        }), cc._RF.pop()
    }, {}],
    popup: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "70cffVyUVBB94+9P9hTSQAr", "popup"), cc.Class({
            extends: cc.Component,
            properties: {
                article: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "\u7269\u54c1spr",
                    tooltip: "\u7269\u54c1spr"
                },
                input_text: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u6807\u9898",
                    tooltip: "\u6807\u9898"
                },
                input_Num: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u6807\u9898\u6570\u503c",
                    tooltip: "\u6807\u9898\u6570\u503c"
                },
                btn_1: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "btn_1Spr",
                    tooltip: "btn_1Spr"
                },
                btn_2: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "btn_2Spr",
                    tooltip: "btn_2Spr"
                },
                num: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u5956\u52b1\u989d",
                    tooltip: "\u5956\u52b1\u989d"
                }
            },
            setInfo: function(e) {
                e && e.ArticleAtlas && e.ArticlespriteFrame && this.setArticleSprite(e.ArticleAtlas, e.ArticlespriteFrame), e && e.input_text && this.setinput_text(e.input_text), e && e.input_Num && this.setinput_Num(e.input_NumisSow, e.input_Num), e && e.btnSpriteAtlas && e.btnSpriteFrame && (1 == e.btnSpriteFrame.length ? (this.setbtn_1Spr(!0, e.btnSpriteAtlas, e.btnSpriteFrame[0]), this.setbtn_2Spr(!1, e.btnSpriteAtlas, null)) : 2 == e.btnSpriteFrame.length && (this.setbtn_1Spr(!0, e.btnSpriteAtlas, e.btnSpriteFrame[0]), this.setbtn_2Spr(!0, e.btnSpriteAtlas, e.btnSpriteFrame[1]))), this.setnum(e.isShowincome, e.incomevalue), e && e.CallBack && (this.onbtn_1CallBack = e.CallBack.onbtn_1CallBack, this.onbtn_2CallBack = e.CallBack.onbtn_2CallBack), this.node.active = !0
            },
            setArticleSprite: function(e, n) {
                this.article && e && n && (this.article.spriteFrame = e.getSpriteFrame(n))
            },
            setinput_text: function(e) {
                this.input_text && "" != e && (this.input_text.string = e)
            },
            setinput_Num: function(e, n) {
                this.input_Num && (this.input_Num.string = n, this.input_Num.node.active = e)
            },
            setbtn_1Spr: function(e, n, t) {
                this.btn_1 && n && "" != t && (this.btn_1.spriteFrame = n.getSpriteFrame(t), this.btn_1.node.active = e)
            },
            setbtn_2Spr: function(e, n, t) {
                this.btn_2 && n && "" != t && (this.btn_2.spriteFrame = n.getSpriteFrame(t), this.btn_2.node.active = e)
            },
            setnum: function(e, n) {
                this.num && (this.num.string = n, this.num.node.active = e)
            },
            onClickEvents: function(e, n) {
                var t = this;
                switch (n) {
                    case "btn_1":
                        t.onbtn_1CallBack && t.onbtn_1CallBack();
                        break;
                    case "btn_2":
                        t.onbtn_2CallBack && t.onbtn_2CallBack();
                        break;
                    default:
                        throw new Error(n + " Type not Find")
                }
                t.node.active = !1
            }
        }), cc._RF.pop()
    }, {}],
    promptLayer: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "86042EteyhIiqrvRbCH/myL", "promptLayer");
        var o = e("popup");
        e("PolySDK");
        cc.Class({
            extends: cc.Component,
            properties: {
                popup_1: {
                    type: o,
                    default: null,
                    displayName: "popup_1",
                    tooltip: "popup_1"
                },
                popup_2: {
                    type: o,
                    default: null,
                    displayName: "popup_2",
                    tooltip: "popup_2"
                },
                CarspriteAtlas: {
                    default: null,
                    type: cc.SpriteAtlas,
                    displayName: "\u8f66\u56fe\u96c6",
                    tooltip: "\u8f66\u56fe\u96c6"
                },
                popupspriteAtlas: {
                    default: null,
                    type: cc.SpriteAtlas,
                    displayName: "\u5f39\u6846\u56fe\u96c6",
                    tooltip: "\u5f39\u6846\u56fe\u96c6"
                },
                notShowing: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u4e0d\u518d\u663e\u793a",
                    tooltip: "\u4e0d\u518d\u663e\u793a"
                }
            },
            start: function() {},
            AddCallBack: function(e, n, t, o, i, m, y, a, c, r, s, d, l, u, v, _) {
                e.node.active = !0, cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.second_level, e.setInfo({
                    ArticleAtlas: n,
                    ArticlespriteFrame: t,
                    input_text: o,
                    input_NumisSow: i,
                    input_Num: m,
                    btnSpriteAtlas: y,
                    btnSpriteFrame: a,
                    isShowincome: c,
                    incomevalue: r,
                    CallBack: {
                        onbtn_1CallBack: function() {
                            s && s(l, u, v, _)
                        },
                        onbtn_2CallBack: function() {
                            d && d(l, u, v, _)
                        }
                    }
                }), o != cc.vv.CG.Text.Offline_Revenue && o != cc.vv.CG.Text.Receiving_Gold && -1 == o.indexOf(cc.vv.CG.Text.Double) && o != cc.vv.CG.Text.Carousel_Coupon_Inadequate || cc.LieYingSDK.PolySDK.VideoAd.getVideoAdNumber(function(n) {
                    e.node.getChildByName("btn").getChildByName("btn_1").active = 0 != n
                })
            },
            setPromptShow: function(e) {
                e || cc.vv.bullet.node.active || (cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.first_level, cc.LieYingSDK.PolySDK.BannerAd.hideBannerAd()), e && cc.LieYingSDK.PolySDK.BannerAd.showBannerAd(), this.node.active = e
            },
            onCloseClicked: function(e, n) {
                cc.vv.CG.isShowReceivingGoldcoins ? (this.notShowing.getChildByName("checkmark").active = !0, cc.vv.CG.isShowReceivingGoldcoins = !1) : (this.notShowing.getChildByName("checkmark").active = !1, cc.vv.CG.isShowReceivingGoldcoins = !0)
            },
            setNotShowingShowState: function(e) {
                this.notShowing.active = e
            }
        }), cc._RF.pop()
    }, {
        PolySDK: "PolySDK",
        popup: "popup"
    }],
    promptboxLayer: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "bb8bavUBHpFeJHZRnN4r+t+", "promptboxLayer"), cc.Class({
            extends: cc.Component,
            properties: {
                label: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u63cf\u8ff0Label",
                    tooltip: "\u63cf\u8ff0Label"
                }
            },
            onLoad: function() {
                this.node.active = !1
            },
            setlabel: function(e) {
                this.node.active || (this.label.string = e, this.node.active = !0, this.scheduleOnce(function() {
                    this.label.string = "", this.node.active = !1
                }.bind(this), 3))
            },
            show_dlg: function(e) {
                this.node.active = !0, this.node.scale = 0;
                var n = cc.scaleTo(.2, 1).easing(cc.easeBackOut());
                this.node.runAction(n)
            },
            start: function() {}
        }), cc._RF.pop()
    }, {}],
    receiveReward: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "fa3c05If21CA74YkBYnDKzc", "receiveReward");
        e("PolySDK");
        cc.Class({
            extends: cc.Component,
            properties: {},
            PlatformEventCallback: function(e, n, t) {},
            Receive_award: function(e, n, t, o, i, m) {
                cc.vv.prompt.AddCallBack(cc.vv.prompt.popup_1, cc.vv.prompt.popupspriteAtlas, cc.vv.CG.popupSprList[n], cc.vv.CG.Text.Receive_award, !1, "", cc.vv.prompt.popupspriteAtlas, [cc.vv.CG.popupSprList.determine], !0, t + cc.vv.tool.bytesToSize(o), i, null, e, m, o, m), cc.vv.prompt.setPromptShow(!0)
            },
            Video_reward: function(e, n, t, o, i, m, y, a, c) {
                cc.vv.prompt.AddCallBack(cc.vv.prompt.popup_1, cc.vv.prompt.popupspriteAtlas, cc.vv.CG.popupSprList[o], cc.vv.CG.Text[n] + t, !1, "", cc.vv.prompt.popupspriteAtlas, [cc.vv.CG.popupSprList[i], cc.vv.CG.popupSprList.jujue], !0, m, y, a, e, cc.vv.prompt.popup_2, c, c.type), cc.vv.prompt.setPromptShow(!0)
            },
            doubleclosedPopup: function(e, n, t, o) {
                var i = e;
                cc.vv.prompt.AddCallBack(n, cc.vv.prompt.popupspriteAtlas, t.ArticlespriteFrame, t.input_text, !1, "", cc.vv.prompt.popupspriteAtlas, [cc.vv.CG.popupSprList.determine], !0, "+" + cc.vv.tool.bytesToSize(t.rewardNum / 2), cc.vv.rr.receivegoldReward, null, i, null, t.rewardNum / 2, t.type), "Offline" == o && cc.vv.wxAPI.aldSendEvent("\u79bb\u7ebf\u6536\u76ca\u6b8b\u5fcd\u62d2\u7edd", {
                    "\u79bb\u7ebf\u6536\u76ca\u6b8b\u5fcd\u62d2\u7edd": "\u6210\u529f"
                })
            },
            getNewCar: function(e) {
                var n = cc.vv.formula.getDiamond(cc.vv.PP.currentcarMaxGrade);
                cc.vv.prompt.AddCallBack(cc.vv.prompt.popup_1, cc.vv.prompt.CarspriteAtlas, cc.vv.PP.currentcarMaxGrade, cc.vv.CG.Text.New_Car, !1, "", cc.vv.prompt.popupspriteAtlas, [cc.vv.CG.popupSprList.determine], !0, "zuanx" + n, cc.vv.rr.receivediamondsReward, null, e, "getNewCar", n, "getNewCar"), cc.vv.prompt.setPromptShow(!0)
            },
            shareAppMessage: function(e, n, t) {
                cc.vv.rr.watchAds(e, n, t)
            },
            gold_Inadequate: function(e) {
                var n = cc.vv.rr._getListProperty(cc.vv.PP.currentbuycarMAxGrade),
                    t = 0;
                t = 1 == n.numberofTimes ? cc.vv.formula.firstPurchase_gold(cc.vv.CG.constant.goldPrice, cc.vv.PP.currentbuycarMAxGrade) : cc.vv.formula.unFirstPurchase_gold(cc.vv.CG.constant.goldPrice, cc.vv.PP.currentbuycarMAxGrade, cc.vv.CG.constant.proportion, n.numberofTimes);
                var o = {
                    ArticleAtlas: cc.vv.prompt.popupspriteAtlas,
                    ArticlespriteFrame: cc.vv.CG.popupSprList.gold,
                    input_text: cc.vv.CG.Text.Receive_award,
                    incomevalue: "+" + cc.vv.tool.bytesToSize(t),
                    Clicked: cc.vv.rr.receivegoldReward,
                    rewardNum: t,
                    Clicked1: null,
                    isVideo_reward: !0,
                    type: "gold_Inadequate"
                };
                cc.vv.prompt.AddCallBack(cc.vv.prompt.popup_1, cc.vv.prompt.popupspriteAtlas, cc.vv.CG.popupSprList.goldbox, cc.vv.CG.Text.Gold_Inadequate, !1, "", cc.vv.prompt.popupspriteAtlas, [cc.vv.CG.popupSprList.mashanglinqu, cc.vv.CG.popupSprList.jujue], !0, o.incomevalue, cc.vv.rr.watchAds, cc.vv.rr.closedPopup, e, cc.vv.prompt.popup_2, o, o.type), cc.vv.prompt.setPromptShow(!0)
            },
            Diamonds_Inadequate: function(e, n) {
                var t = {
                    ArticleAtlas: cc.vv.prompt.popupspriteAtlas,
                    ArticlespriteFrame: cc.vv.CG.popupSprList.diamond,
                    input_text: cc.vv.CG.Text.Receive_award,
                    incomevalue: "+" + n,
                    Clicked: cc.vv.rr.receivediamondsReward,
                    rewardNum: n,
                    Clicked1: null,
                    isVideo_reward: !0,
                    type: "Diamonds_Inadequate"
                };
                cc.vv.prompt.AddCallBack(cc.vv.prompt.popup_1, cc.vv.prompt.popupspriteAtlas, cc.vv.CG.popupSprList["diamondbox "], cc.vv.CG.Text.Diamonds_Inadequate, !1, "", cc.vv.prompt.popupspriteAtlas, [cc.vv.CG.popupSprList.mashanglinqu, cc.vv.CG.popupSprList.jujue], !0, t.incomevalue, cc.vv.rr.watchAds, cc.vv.rr.closedPopup, e, cc.vv.prompt.popup_2, t, t.type), cc.vv.prompt.setPromptShow(!0)
            },
            watchAds: function(e, n, t) {
                var o = {
                    self: e,
                    target: n,
                    receiveReward: t
                };
                if (t.isVideo_reward) {
                    var i = {
                        reqdata: o,
                        adType: "watchAds"
                    };
                    "Offline" == i.type ? cc.vv.wxAPI.aldSendEvent("\u79bb\u7ebf\u6536\u76ca\u70b9\u51fb\u53cc\u500d\u5956\u52b1", {
                        "\u79bb\u7ebf\u6536\u76ca\u70b9\u51fb\u53cc\u500d\u5956\u52b1": "\u70b9\u51fb"
                    }) : "addcarouselCoupon" == i.type ? cc.vv.wxAPI.aldSendEvent("\u8f6c\u76d8\u70b9\u51fb\u9886\u53d6\u8f6c\u76d8\u5377\u6309\u94ae", {
                        "\u8f6c\u76d8\u70b9\u51fb\u9886\u53d6\u8f6c\u76d8\u5377\u6309\u94ae": "\u70b9\u51fb"
                    }) : "crit" == i.type && cc.vv.wxAPI.aldSendEvent("\u8f6c\u76d8\u70b9\u51fb\u9886\u53d6\u66b4\u51fb\u6309\u94ae", {
                        "\u8f6c\u76d8\u70b9\u51fb\u9886\u53d6\u66b4\u51fb\u6309\u94ae": "\u70b9\u51fb"
                    }), cc.vv.wxAPI.videoAd.onPlayVideoBtn(i)
                } else cc.vv.rr.AddCallBack(o)
            },
            AddCallBack: function(e) {
                var n = void 0;
                n = "Receiving_Gold" == e.receiveReward.type ? e.receiveReward : e.receiveReward.rewardNum, cc.vv.prompt.AddCallBack(e.target, e.receiveReward.ArticleAtlas, e.receiveReward.ArticlespriteFrame, e.receiveReward.input_text, !1, "", cc.vv.prompt.popupspriteAtlas, [cc.vv.CG.popupSprList.determine], !0, e.receiveReward.incomevalue, e.receiveReward.Clicked, null, e.self, e.receiveReward.Clicked1, n, e.type)
            },
            closedPopup: function(e, n, t, o) {
                t && "Receiving_Gold" == t.type && (2 != cc.vv.PP.GuideSate || cc.vv.PP.NoMoneyGuide || cc.vv.EventMgr.beginnerGuide({
                    nodename: cc.vv.CG.BeginnerGuide[3],
                    isshow: !0
                }), cc.vv.prompt.setNotShowingShowState(!1)), cc.vv.prompt.setPromptShow(!1), "Adfailure" != o && "gold_Inadequate" == o && cc.vv.wxAPI.aldSendEvent("\u91d1\u5e01\u4e0d\u8db3\u6b8b\u5fcd\u62d2\u7edd", {
                    "\u91d1\u5e01\u4e0d\u8db3\u6b8b\u5fcd\u62d2\u7edd": "\u6210\u529f"
                })
            },
            receivegoldReward: function(e, n, t) {
                var o = t;
                "lottery" == n && (cc.vv.PP.critNum = 0), "AdBoxbtn" == n && cc.vv.EventMgr.AdBoxclose(), "Receiving_Gold" == t.type && (o = t.rewardNum, 2 != cc.vv.PP.GuideSate || cc.vv.PP.NoMoneyGuide || cc.vv.EventMgr.beginnerGuide({
                    nodename: cc.vv.CG.BeginnerGuide[3],
                    isshow: !0
                }), cc.vv.prompt.setNotShowingShowState(!1)), cc.vv.PP.glod = cc.vv.PP.glod + o, cc.vv.PP.Maxglod = cc.vv.PP.Maxglod + o, cc.vv.prompt.setPromptShow(!1), cc.vv.audioMgr.playSFX("goldcoins.mp3")
            },
            receivediamondsReward: function(e, n, t) {
                "lottery" == n ? cc.vv.PP.critNum = 0 : "getNewCar" == n && cc.vv.EventMgr.receivediamondsReward(), cc.vv.PP.diamond = cc.vv.PP.diamond + t, cc.vv.prompt.setPromptShow(!1), 0 == cc.vv.PP.GuideSate && (cc.vv.PP.GuideSate = 1, cc.vv.EventMgr.beginnerGuide({
                    nodename: cc.vv.CG.BeginnerGuide[1],
                    isshow: !0
                })), cc.vv.audioMgr.playSFX("goldcoins.mp3")
            },
            receivecritNumReward: function(e, n, t) {
                cc.vv.PP.critNum = cc.vv.PP.critNum + t, cc.vv.prompt.setPromptShow(!1), cc.vv.audioMgr.playSFX("goldcoins.mp3")
            },
            receivecarouselCouponsReward: function(e, n, t) {
                cc.vv.PP.carouselCouponNum = cc.vv.PP.carouselCouponNum + t, cc.vv.prompt.setPromptShow(!1), n && n(), cc.vv.audioMgr.playSFX("goldcoins.mp3")
            },
            signInreceivediamondsReward: function(e, n, t) {
                var o = {
                    rewardNum: n,
                    signinState: t,
                    type: "signInreceivediamondsReward"
                };
                cc.vv.prompt.AddCallBack(cc.vv.prompt.popup_2, cc.vv.prompt.popupspriteAtlas, cc.vv.CG.popupSprList.diamond, cc.vv.CG.Text.Receiving_Diamonds, !1, "", cc.vv.prompt.popupspriteAtlas, [cc.vv.CG.popupSprList.determine], !0, "*" + n, cc.vv.rr.signInOneMore, null, e, cc.vv.prompt.popup_1, o, o.type), cc.vv.prompt.setPromptShow(!0)
            },
            signIndoubleCollection: function(e, n, t) {
                var o = {
                    ArticleAtlas: cc.vv.prompt.popupspriteAtlas,
                    ArticlespriteFrame: cc.vv.CG.popupSprList.diamond,
                    input_text: cc.vv.CG.Text.Receiving_Diamonds,
                    incomevalue: "x" + n,
                    Clicked: cc.vv.rr.signInOneMore,
                    Clicked1: cc.vv.rr.closedPopup,
                    rewardNum: n,
                    signinState: t
                };
                cc.vv.prompt.AddCallBack(cc.vv.prompt.popup_1, cc.vv.prompt.popupspriteAtlas, cc.vv.CG.popupSprList.diamond, cc.vv.CG.Text.Receiving_Diamonds, !1, "", cc.vv.prompt.popupspriteAtlas, [cc.vv.CG.popupSprList.shuangbeilingqu, cc.vv.CG.popupSprList.jujue], !0, 2 * n, cc.vv.rr.doublewatchAds, cc.vv.rr.signIndoubleclosedPopup, e, cc.vv.prompt.popup_2, o), cc.vv.prompt.setPromptShow(!0)
            },
            doublewatchAds: function(e, n, t) {
                var o = {
                    reqdata: {
                        self: e,
                        target: n,
                        receiveReward: t
                    },
                    adType: "doublewatchAds"
                };
                cc.vv.wxAPI.videoAd.onPlayVideoBtn(o)
            },
            receive_signin_advertising_rewards: function(e, n, t, o) {
                var i = {
                        ArticleAtlas: cc.vv.prompt.popupspriteAtlas,
                        ArticlespriteFrame: cc.vv.CG.popupSprList.diamond,
                        input_text: cc.vv.CG.Text.Receiving_Diamonds,
                        incomevalue: "x" + n,
                        Clicked: cc.vv.rr.signInOneMore,
                        Clicked1: cc.vv.rr.closedPopup,
                        rewardNum: n,
                        signinState: t
                    },
                    m = 1;
                o && (m = 2);
                var y = {
                    self: e,
                    target: cc.vv.prompt.popup_2,
                    receiveReward: i,
                    multiple: m
                };
                cc.vv.rr.doubleAddCallBack(y), cc.vv.prompt.setPromptShow(!0)
            },
            doubleAddCallBack: function(e) {
                cc.vv.prompt.AddCallBack(e.target, cc.vv.prompt.popupspriteAtlas, e.receiveReward.ArticlespriteFrame, e.receiveReward.input_text, !1, "", cc.vv.prompt.popupspriteAtlas, [cc.vv.CG.popupSprList.determine], !0, "x" + e.receiveReward.rewardNum * e.multiple, e.receiveReward.Clicked, null, self, null, e.receiveReward)
            },
            signInOneMore: function(e, n, t) {
                var o = {
                    ArticleAtlas: cc.vv.prompt.popupspriteAtlas,
                    ArticlespriteFrame: cc.vv.CG.popupSprList.diamond,
                    input_text: cc.vv.CG.Text.Receiving_Diamonds,
                    incomevalue: "x" + t.rewardNum,
                    Clicked: cc.vv.rr.receivediamondsReward,
                    rewardNum: t.rewardNum,
                    Clicked1: null,
                    isVideo_reward: !0,
                    type: "signInOneMore"
                };
                cc.vv.prompt.AddCallBack(cc.vv.prompt.popup_1, cc.vv.prompt.popupspriteAtlas, cc.vv.CG.popupSprList.diamond, cc.vv.CG.Text.OneMore, !1, "", cc.vv.prompt.popupspriteAtlas, [cc.vv.CG.popupSprList.mashanglinqu, cc.vv.CG.popupSprList.jujue], !0, "x" + t.rewardNum, cc.vv.rr.watchAds, cc.vv.rr.closedPopup, e, cc.vv.prompt.popup_2, o), 1 == t.signinState ? cc.vv.PP.diamond = cc.vv.PP.diamond + t.rewardNum : cc.vv.PP.diamond = cc.vv.PP.diamond + 2 * t.rewardNum
            },
            signIndoubleclosedPopup: function(e, n, t) {
                var o = e;
                cc.vv.prompt.AddCallBack(n, cc.vv.prompt.popupspriteAtlas, t.ArticlespriteFrame, t.input_text, !1, "", cc.vv.prompt.popupspriteAtlas, [cc.vv.CG.popupSprList.determine], !0, t.incomevalue, cc.vv.rr.receivediamondsReward, null, o, null, t.rewardNum)
            },
            _getListProperty: function(e) {
                if (null != cc.vv.PP.buyCarsProperty)
                    for (var n = 0; n < cc.vv.PP.buyCarsProperty.length; n++) {
                        var t = cc.vv.PP.buyCarsProperty[n];
                        if (t.grade == e) return t
                    }
            }
        }), cc._RF.pop()
    }, {
        PolySDK: "PolySDK"
    }],
    signIn: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "653e4vvHt5NOoj6opcBjwvf", "signIn");
        e("PolySDK");
        cc.Class({
            extends: cc.Component,
            properties: {
                content: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5929\u6570\u7236\u8282\u70b9",
                    tooltip: "\u5929\u6570\u7236\u8282\u70b9"
                },
                doubleIncome: {
                    default: null,
                    type: cc.Button
                },
                day_reward: 0,
                _signIn: 0,
                _IsfirstOpen: !1
            },
            onLoad: function() {},
            PlatformEventCallback: function(e, n, t) {},
            addItemToList: function() {
                var e = this,
                    n = {
                        app_id: cc.vv.CG.wxInIt.appID,
                        uuid: cc.vv.CG.wxUserInit.uuid
                    };
                cc.vv.DAO.wx_API.wxGetSignInUI(n, function(n) {
                    101 == n.code ? (cc.vv.CG.signinData = n, 1 == cc.vv.CG.signinData.state ? e.doubleIncome.active = !1 : e.doubleIncome.active = !0) : cc.log(n)
                })
            },
            wxSignIn: function() {
                var e = this,
                    n = {
                        app_id: cc.vv.CG.wxInIt.appID,
                        uuid: cc.vv.CG.wxUserInit.uuid
                    };
                cc.vv.DAO.wx_API.wxSignIn(n, function(n) {
                    if (101 == n.code)
                        if (e.setDayShow(e.content.children[e.day_reward - 1], !1, !0), e.addItemToList(), 1 == e._signIn) cc.vv.rr.signInreceivediamondsReward(e, cc.vv.CG.SignIn[e.day_reward], e._signIn);
                        else if (2 == e._signIn) {
                        var t = {
                            reqdata: {
                                selfs: e,
                                diamonds: cc.vv.CG.SignIn[e.day_reward],
                                signinState: e._signIn
                            },
                            adType: "doublewatchAds"
                        };
                        cc.vv.wxAPI.videoAd.onPlayVideoBtn(t)
                    }
                })
            },
            setInItDayNum: function(e, n) {
                for (var t = 0; t < this.content.childrenCount; t++) t + 1 < e ? this.setDayShow(this.content.children[t], !1, !0) : t + 1 == e ? 1 == n ? this.setDayShow(this.content.children[t], !1, !0) : 0 == n && this.setDayShow(this.content.children[t], !0, !1) : this.setDayShow(this.content.children[t], !1, !1)
            },
            setDayShow: function(e, n, t) {
                if (e && "" != e) {
                    var o = e.getChildByName("bg_0"),
                        i = e.getChildByName("bg_1"),
                        m = e.getChildByName("receive");
                    0 == n ? (o.active = !1, i.active = !0) : (o.active = !0, i.active = !1), m.active = t
                }
            },
            onClickedbtn: function(e, n) {
                n == this.day_reward ? (this._signIn = 1, this.wxSignIn(), cc.vv.wxAPI.aldSendEvent("\u7b7e\u5230\u70b9\u51fb\u666e\u901a\u9886\u53d6", {
                    "\u7b7e\u5230\u70b9\u51fb\u666e\u901a\u9886\u53d6": "\u70b9\u51fb"
                })) : "doubleIncome" == n && (this._signIn = 2, this.wxSignIn(), cc.vv.wxAPI.aldSendEvent("\u7b7e\u5230\u70b9\u51fb\u53cc\u500d\u9886\u53d6", {
                    "\u7b7e\u5230\u70b9\u51fb\u53cc\u500d\u9886\u53d6": "\u70b9\u51fb"
                }))
            }
        }), cc._RF.pop()
    }, {
        PolySDK: "PolySDK"
    }],
    uIShowLayer: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "6e5e90kVQZMgrzRHHkysl0K", "uIShowLayer");
        var o = e("ugame");
        e("PolySDK");
        cc.Class({
            extends: cc.Component,
            properties: {
                items: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u82f1\u96c4\u7236\u8282\u70b9",
                    tooltip: "\u82f1\u96c4\u7236\u8282\u70b9"
                },
                heroBox: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u82f1\u96c4\u5b9d\u7bb1",
                    tooltip: "\u82f1\u96c4\u5b9d\u7bb1"
                },
                goldbox: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u91d1\u5e01\u5b9d\u7bb1",
                    tooltip: "\u91d1\u5e01\u5b9d\u7bb1"
                },
                openBox: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5f00\u542f\u5e7f\u544a\u5b9d\u7bb1",
                    tooltip: "\u5f00\u542f\u5e7f\u544a\u5b9d\u7bb1"
                },
                openAdtime: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u5f00\u542f\u5e7f\u544a\u5b9d\u7bb1\u65f6\u95f4",
                    tooltip: "\u5f00\u542f\u5e7f\u544a\u5b9d\u7bb1\u65f6\u95f4"
                },
                incomeTarget: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u6536\u76ca\u76ee\u6807\u70b9",
                    tooltip: "\u6536\u76ca\u76ee\u6807\u70b9"
                },
                gold_root: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u91d1\u5e01\u7236\u8282\u70b9",
                    tooltip: "\u91d1\u5e01\u7236\u8282\u70b9"
                },
                diamondTarget: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u94bb\u77f3\u76ee\u6807\u70b9",
                    tooltip: "\u94bb\u77f3\u76ee\u6807\u70b9"
                },
                diamond_root: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u94bb\u77f3\u7236\u8282\u70b9",
                    tooltip: "\u94bb\u77f3\u7236\u8282\u70b9"
                },
                wave_label: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u6ce2\u6b21\u663e\u793a",
                    tooltip: "\u6ce2\u6b21\u663e\u793a"
                },
                victory: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u80dc\u5229\u754c\u9762",
                    tooltip: "\u80dc\u5229\u754c\u9762"
                },
                beginnerGuide: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u65b0\u624b\u6307\u5f15",
                    tooltip: "\u65b0\u624b\u6307\u5f15"
                },
                isOpenHero: !1,
                iscarriedOut: !0,
                recordingShowHeroTime: 0,
                recordingOpenHeroTime: 0,
                recordingOpenAbBoxTime: 60
            },
            start: function() {
                this.randomhero = null, this.initEventHandlers(), 0 == cc.vv.PP.GuideSate ? (cc.vv.CG.isCreateEnemys = !0, this.openGuide(cc.vv.CG.BeginnerGuide[cc.vv.PP.GuideSate], !0)) : 1 == cc.vv.PP.GuideSate ? (cc.vv.CG.isCreateEnemys = !0, this.openGuide(cc.vv.CG.BeginnerGuide[cc.vv.PP.GuideSate], !0)) : cc.vv.PP.GuideSate >= 2 && (this.countdown(), this.setgoldBoxShow(!1), this.openAdtime.string = "01:00", this.openBox && (this.openBox.parent.active = !0, cc.lieying_self = this, cc.LieYingSDK.PolySDK.VideoAd.getVideoAdNumber(function(e) {
                    cc.lieying_self.openBox.parent.active = 0 != e
                })))
            },
            PlatformEventCallback: function(e, n, t) {},
            countdown: function() {
                this.iscarriedOut && (this.iscarriedOut = !1, this.schedule(function() {
                    if (this.recordingShowHeroTime += 1, 60 == this.recordingShowHeroTime && this.setheroBoxShow(!0), this.recordingOpenHeroTime >= 1 && (this.recordingOpenHeroTime += 1, 30 == this.recordingOpenHeroTime && this.giftHero()), !this.openBox.active)
                        if (1 == this.recordingOpenAbBoxTime) this.openBox.active = !0, cc.lieying_self = this, cc.LieYingSDK.PolySDK.VideoAd.getVideoAdNumber(function(e) {
                            cc.lieying_self.openBox.parent.active = 0 != e
                        });
                        else {
                            this.recordingOpenAbBoxTime = this.recordingOpenAbBoxTime - 1;
                            var e = Math.floor(this.recordingOpenAbBoxTime / 3600),
                                n = this.recordingOpenAbBoxTime - 3600 * e,
                                t = Math.floor(n / 60),
                                o = n -= 60 * t;
                            t < 10 && (t = "0" + t), n < 10 && (o = "0" + n), this.openAdtime.string = t + ":" + o
                        }
                }.bind(this), 1))
            },
            initEventHandlers: function() {
                var e = this;
                e.node.on("beginnerGuide", function(n) {
                    var t = e.getNodeData(n);
                    e.openGuide(t.nodename, t.isshow), cc.vv.PP.GuideSate >= 2 && (e.countdown(), e.setgoldBoxShow(!1), e.openAdtime.string = "01:00", e.openBox && (e.openBox.parent.active = !0, cc.lieying_self = e, cc.LieYingSDK.PolySDK.VideoAd.getVideoAdNumber(function(e) {
                        cc.lieying_self.openBox.parent.active = 0 != e
                    })))
                }), e.node.on("recyclingIncome", function(n) {
                    var t = e.getNodeData(n);
                    o.recyclingIncome(t.node, e.incomeTarget, t.search_R, e.gold_root, t.MaxQuantity, t.MinQuantity)
                }), e.node.on("receivediamondsReward", function(n) {
                    e.getNodeData(n);
                    1 == cc.vv.PP.GuideSate && cc.vv.wxAPI.aldSendEvent("\u65b0\u624b\u6559\u7a0b\u5347\u7ea7\u5f39\u7a97", {
                        "\u65b0\u624b\u6559\u7a0b\u5347\u7ea7\u5f39\u7a97": "\u5c55\u73b0\u5f39\u7a97"
                    });
                    var t = new cc.v2(0, -64);
                    o.receivediamondsReward(t, e.diamondTarget, 60, e.diamond_root, 6, 4), t = new cc.v2(100, -16), o.receivediamondsReward(t, e.diamondTarget, 40, e.diamond_root, 6, 4), t = new cc.v2(-100, -16), o.receivediamondsReward(t, e.diamondTarget, 40, e.diamond_root, 6, 4)
                }), e.node.on("Wave_labelShow", function(n) {
                    e.setWave_labelShow(Number(cc.vv.PP.cur_round) + 1)
                }), e.node.on("ShowVictroyInterface", function(n) {
                    var t = cc.vv.tool.getNodeData(n);
                    if (t.isVictroyShow) {
                        var o = cc.vv.tool.GetOfflineTime(t.time),
                            i = o.minutes,
                            m = o.seconds;
                        i < 10 && (i = "0" + o.minutes + ":"), m < 10 && (m = "0" + o.seconds);
                        var y = i + m;
                        cc.vv.PP.glod += t.waveIncome, cc.vv.PP.Maxglod += t.waveIncome, e.setvictroyShow(!0, 255, [t.waveIncome, y])
                    } else e.setvictroyShow(!1, 0, ["", "", ""])
                }), e.node.on("WatchAdsuccess", function(n) {
                    var t = cc.vv.tool.getNodeData(n);
                    switch (t.adType) {
                        case "pop_ups_back_to_full":
                            cc.vv.EventMgr.pop_ups_back_to_full(), cc.vv.wxAPI.aldSendEvent("\u4fee\u590d\u6c34\u6676\u5f39\u7a97\u5e7f\u544a", {
                                "\u4fee\u590d\u6c34\u6676\u5f39\u7a97\u5e7f\u544a": "\u89c2\u770b\u6210\u529f"
                            });
                            break;
                        case "back_to_full":
                            cc.vv.EventMgr.back_to_fullfun(), cc.vv.wxAPI.aldSendEvent("\u4fee\u590d\u6c34\u6676\u4e3b\u754c\u9762\u5e7f\u544a", {
                                "\u4fee\u590d\u6c34\u6676\u4e3b\u754c\u9762\u5e7f\u544a": "\u89c2\u770b\u6210\u529f"
                            });
                            break;
                        case "watchAds":
                            "gold_Inadequate" == t.reqdata.receiveReward.type ? cc.vv.wxAPI.aldSendEvent("\u91d1\u5e01\u4e0d\u8db3\u5e7f\u544a", {
                                "\u91d1\u5e01\u4e0d\u8db3\u5e7f\u544a": "\u89c2\u770b\u6210\u529f"
                            }) : "Offline" == t.reqdata.receiveReward.type ? cc.vv.wxAPI.aldSendEvent("\u79bb\u7ebf\u6536\u76ca\u53cc\u500d\u9886\u53d6\u5e7f\u544a", {
                                "\u79bb\u7ebf\u6536\u76ca\u53cc\u500d\u9886\u53d6\u5e7f\u544a": "\u89c2\u770b\u6210\u529f"
                            }) : "addcarouselCoupon" == t.reqdata.receiveReward.type ? cc.vv.wxAPI.aldSendEvent("\u8f6c\u76d8\u9886\u53d6\u8f6c\u76d8\u5238\u5e7f\u544a", {
                                "\u8f6c\u76d8\u9886\u53d6\u8f6c\u76d8\u5238\u5e7f\u544a": "\u89c2\u770b\u6210\u529f"
                            }) : "crit" == t.reqdata.receiveReward.type && cc.vv.wxAPI.aldSendEvent("\u8f6c\u76d8\u9886\u53d6\u66b4\u51fb\u5956\u52b1\u5e7f\u544a", {
                                "\u8f6c\u76d8\u9886\u53d6\u66b4\u51fb\u5956\u52b1\u5e7f\u544a": "\u89c2\u770b\u6210\u529f"
                            }), cc.vv.rr.AddCallBack(t.reqdata);
                            break;
                        case "doublewatchAds":
                            cc.vv.rr.receive_signin_advertising_rewards(t.reqdata.selfs, t.reqdata.diamonds, t.reqdata.signinState, !0), cc.vv.wxAPI.aldSendEvent("\u7b7e\u5230\u53cc\u500d\u9886\u53d6\u5e7f\u544a", {
                                "\u7b7e\u5230\u53cc\u500d\u9886\u53d6\u5e7f\u544a": "\u89c2\u770b\u6210\u529f"
                            });
                            break;
                        case "gift_Package":
                            t.gift_Packagejs.wxGetShareReward(t.gift_Packagejs);
                            break;
                        case "buyVideoAd":
                            t.butitem.buyVideoAd(t.butitem), cc.vv.wxAPI.aldSendEvent("\u9152\u9986\u9886\u53d6\u5956\u52b1\u5e7f\u544a", {
                                "\u9152\u9986\u9886\u53d6\u5956\u52b1\u5e7f\u544a": "\u89c2\u770b\u6210\u529f"
                            });
                            break;
                        case "adbtn":
                            cc.vv.bullet.setAccelerateCondition("ad"), cc.vv.wxAPI.aldSendEvent("\u52a0\u901f\u9886\u53d6\u5956\u52b1\u5e7f\u544a", {
                                "\u52a0\u901f\u9886\u53d6\u5956\u52b1\u5e7f\u544a": "\u89c2\u770b\u6210\u529f"
                            });
                            break;
                        case "AdBoxbtn":
                            var o = cc.vv.CarsMgr.getListProperty(cc.vv.PP.currentbuycarMAxGrade),
                                i = cc.vv.formula.unFirstPurchase_gold(cc.vv.CG.constant.goldPrice, o.grade, cc.vv.CG.constant.proportion, o.numberofTimes);
                            cc.vv.rr.Receive_award(e, "gold", "+", Math.floor(2.2 * i), cc.vv.rr.receivegoldReward, "AdBoxbtn"), cc.vv.wxAPI.aldSendEvent("\u5e7f\u544a\u5b9d\u7bb1", {
                                "\u5e7f\u544a\u5b9d\u7bb1": "\u89c2\u770b\u6210\u529f"
                            })
                    }
                }), e.node.on("WatchAdfailure", function(e) {
                    var n = cc.vv.tool.getNodeData(e);
                    switch (n.adType) {
                        case "pop_ups_back_to_full":
                        case "back_to_full":
                            cc.vv.EventMgr.noNeedBack_to_full();
                            break;
                        case "watchAds":
                            "Offline" == n.reqdata.receiveReward.type ? cc.vv.rr.doubleclosedPopup(n.reqdata.self, n.reqdata.target, n.reqdata.receiveReward, "Adfailure") : "Receiving_Gold" == n.reqdata.receiveReward.type ? cc.vv.rr.closedPopup(n.reqdata.self, n.reqdata.target, n.reqdata.receiveReward, "Adfailure") : cc.vv.rr.closedPopup("", "", "", "Adfailure");
                            break;
                        case "doublewatchAds":
                            cc.vv.rr.receive_signin_advertising_rewards(n.reqdata.selfs, n.reqdata.diamonds, n.reqdata.signinState, !1);
                            break;
                        case "AdBoxbtn":
                            cc.vv.rr.closedPopup("", "", "", "Adfailure")
                    }
                }), e.node.on("AdBoxclose", function(n) {
                    e.recordingOpenAbBoxTime = 60, e.openAdtime.string = "01:00", e.openBox.active = !1
                })
            },
            onClickedBtn: function(e, n) {
                switch (n) {
                    case "heroBox":
                        this.giftHero();
                        break;
                    case "goldbox":
                        var t = cc.vv.CarsMgr.getListProperty(cc.vv.PP.currentbuycarMAxGrade),
                            o = cc.vv.formula.unFirstPurchase_gold(cc.vv.CG.constant.goldPrice, t.grade, cc.vv.CG.constant.proportion, t.numberofTimes),
                            i = {
                                node: this.goldbox,
                                search_R: 60,
                                MaxQuantity: 20,
                                MinQuantity: 10
                            };
                        cc.vv.EventMgr.recyclingIncome(i), this.setgoldBoxShow(!1), cc.vv.PP.glod = cc.vv.PP.glod + Math.floor(.25 * o), cc.vv.wxAPI.aldSendEvent("\u968f\u673a\u91d1\u5e01\u5b9d\u7bb1", {
                            "\u70b9\u51fb\u9886\u53d6": "\u6210\u529f"
                        });
                        break;
                    case "guide":
                        cc.vv.PP.NoMoneyGuide = !0, cc.vv.wxAPI.aldSendEvent("\u65b0\u624b\u6559\u7a0b\u62db\u52df\u64cd\u4f5c", {
                            "\u65b0\u624b\u6559\u7a0b\u62db\u52df\u64cd\u4f5c": "\u6210\u529f"
                        }), this.openGuide(null, !1);
                        break;
                    case "guide1":
                        cc.vv.PP.NoHPGuide = !0, this.openGuide(null, !1);
                        break;
                    case "AdBoxbtn":
                        if (!this.openBox.active) return;
                        cc.vv.wxAPI.aldSendEvent("\u5e7f\u544a\u5b9d\u7bb1\u70b9\u51fb\u6309\u94ae", {
                            "\u5e7f\u544a\u5b9d\u7bb1\u70b9\u51fb\u6309\u94ae": "\u6210\u529f"
                        }), cc.vv.wxAPI.videoAd.onPlayVideoBtn({
                            adType: "AdBoxbtn"
                        })
                }
            },
            openGuide: function(e, n) {
                for (var t = 0; t < this.beginnerGuide.childrenCount; t++) this.beginnerGuide.children[t].active = !1;
                if (n && null != e) {
                    var o = this.beginnerGuide.getChildByName(e);
                    o.active = !0, e == cc.vv.CG.BeginnerGuide[0] ? this.dragGuidehand(o) : e == cc.vv.CG.BeginnerGuide[1] ? this.buyGuideehand(o) : e == cc.vv.CG.BeginnerGuide[3] ? this.turntableGuidehand(o) : cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.second_level
                }
            },
            dragGuidehand: function(e) {
                var n = e.getChildByName("hand"),
                    t = cc.repeatForever(cc.sequence(cc.moveTo(1, 167, 76), cc.moveTo(1, 7, 76)));
                n.runAction(t)
            },
            buyGuideehand: function(e) {
                var n = e.getChildByName("hand"),
                    t = cc.repeatForever(cc.sequence(cc.moveTo(.8, 548, -250), cc.moveTo(.8, 548, -175)));
                n.runAction(t), cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.second_level
            },
            turntableGuidehand: function(e) {
                var n = e.getChildByName("acceleratehand"),
                    t = e.getChildByName("adBoxhand"),
                    o = cc.repeatForever(cc.sequence(cc.moveTo(.8, -538, -166), cc.moveTo(.8, -430, -166)));
                n.runAction(o);
                var i = cc.repeatForever(cc.sequence(cc.moveTo(.8, 309, -210), cc.moveTo(.8, 309, -110)));
                t.runAction(i), cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.second_level
            },
            giftHero: function() {
                if (this.heroBox.active) {
                    var e = {
                        randomhero: this.randomhero,
                        clicked: this.setheroBoxShow
                    };
                    cc.vv.EventMgr.Random_hero(e), this.recordingShowHeroTime = 0, this.recordingOpenHeroTime = 0, this.heroBox.active = !1
                }
            },
            setheroBoxShow: function(e) {
                var n = this;
                (function t() {
                    var o = n.getVacanciesOnTheFieldArr();
                    if (o.length > 0) {
                        var i = Math.floor(Math.random() * o.length);
                        n.randomhero = n.items.children[o[i]], n.randomhero.is_Have_A_Car ? t() : (n.randomhero.is_Have_A_Car = !0, n.randomhero.isheroBox = !0), n.heroBox.setPosition(n.randomhero.getPosition()), n.recordingOpenHeroTime = 1, n.heroBox.active = e
                    } else n.recordingShowHeroTime = 0, n.recordingOpenHeroTime = 0
                })()
            },
            setgoldBoxShow: function(e) {
                e || this.scheduleOnce(function() {
                    this.goldbox.active || this.setgoldBoxShow(!0)
                }.bind(this), 30), this.goldbox.active = e
            },
            setWave_labelShow: function(e) {
                this.wave_label && "" != e && (this.wave_label.string = e)
            },
            setvictroyShow: function(e, n, t) {
                for (var o = this.victory.getChildByName("text"), i = 0; i < o.childrenCount; i++) o.children[i].getComponent(cc.Label).string = t[i];
                e && (this.victory.active = e, cc.vv.audioMgr.playSFX("victory.mp3"));
                var m = cc.callFunc(function() {
                    e || (this.victory.active = e)
                }.bind(this));
                this.victory.runAction(cc.sequence(cc.fadeTo(.3, n), m))
            },
            getVacanciesOnTheFieldArr: function() {
                for (var e = [], n = void 0, t = 0; t < this.items.childrenCount; t++) n = this.items.children[t].getComponent("car"), this.items.children[t].is_Have_A_Car || n.isshowlocked || e.push(t);
                return e
            },
            getNodeData: function(e) {
                return "1.9.3" == cc.ENGINE_VERSION ? e.detail : e
            }
        }), cc._RF.pop()
    }, {
        PolySDK: "PolySDK",
        ugame: "ugame"
    }],
    uIoperating: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "93b07WaA+lBcJIP10DItoIk", "uIoperating");
        var o = e("ugame");
        e("PolySDK");
        cc.Class({
            extends: cc.Component,
            properties: {
                items: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u8f66\u7236\u8282\u70b9",
                    tooltip: "\u8f66\u7236\u8282\u70b9"
                },
                car_SpriteAtlas: {
                    default: null,
                    type: cc.SpriteAtlas,
                    displayName: "\u8f66\u7684\u56fe\u96c6",
                    tooltip: "\u8f66\u7684\u56fe\u96c6"
                },
                goldLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u91d1\u5e01text",
                    tooltip: "\u91d1\u5e01text"
                },
                diamondLabel: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u94bb\u77f3text",
                    tooltip: "\u94bb\u77f3text"
                },
                accelerateTime: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u52a0\u901f\u65f6\u95f4",
                    tooltip: "\u52a0\u901f\u65f6\u95f4"
                },
                store: {
                    default: null,
                    type: cc.Node,
                    displayName: "\u5546\u5e97",
                    tooltip: "\u5546\u5e97"
                },
                buyglodText: {
                    default: null,
                    type: cc.Label,
                    displayName: "\u8d2d\u4e70\u8f66\u7684\u91d1\u5e01",
                    tooltip: "\u8d2d\u4e70\u8f66\u7684\u91d1\u5e01"
                },
                intervalTime: {
                    default: 1,
                    visible: !1
                },
                videoBtnsNode: cc.Node,
                _index: 0,
                _seconds: 0,
                _gold: 0,
                _isCollapse: !1
            },
            onLoad: function() {
                this._countdown = cc.vv.CG.accelerate.countdown, this.scheduleOnce(this._GameInIt.bind(this), .5), this.store.getComponent("buyLayer").addItemToList(), this.initEventHandlers(), this.videoBtnsNode.active = !1, cc.LieYingSDK.PolySDK.sdkConfig.runSDK == cc.LieYingSDK.PolySDK.sdkConfig.sdk_key_4399 ? this.node.getChildByName("logo4399").active = !0 : this.node.getChildByName("logo4399").active = !1
            },
            onStopRecorder: function() {
                cc.LieYingSDK.PolySDK.Recorder.stop(this.updateVideoBtnState.bind(this))
            },
            onStartRecorder: function() {
                cc.LieYingSDK.PolySDK.Recorder.start(this.updateVideoBtnState.bind(this))
            },
            OnshareRecorder: function() {
                cc.LieYingSDK.PolySDK.Recorder.shareVideo_tt(cc.LieYingSDK.PolySDK.Recorder.videoPath), this.updateVideoBtnState()
            },
            updateVideoBtnState: function() {
                null == cc.LieYingSDK.PolySDK.Recorder.videoPath ? cc.LieYingSDK.PolySDK.Recorder.isStart ? (this.videoBtnsNode.children[0].active = !1, this.videoBtnsNode.children[1].active = !0, this.videoBtnsNode.children[2].active = !1) : (this.videoBtnsNode.children[0].active = !0, this.videoBtnsNode.children[1].active = !1, this.videoBtnsNode.children[2].active = !1) : (this.videoBtnsNode.children[0].active = !1, this.videoBtnsNode.children[1].active = !1, this.videoBtnsNode.children[2].active = !0)
            },
            initEventHandlers: function() {
                var e = this;
                e.node.on("Random_hero", function(n) {
                    var t = 0,
                        o = e.getNodeData(n);
                    t = cc.vv.PP.currentcarMaxGrade <= 5 ? 1 : cc.vv.PP.currentcarMaxGrade - 5, cc.vv.CarsMgr.heroBoxCreateCar(o.randomhero, t, t, e.car_SpriteAtlas)
                }), e.node.on("CanAheroBuy", function(n) {
                    cc.vv.CG.CanAheroBuy = e.canAheroBuy()
                }), e.node.on("setGameIncome", function(e) {})
            },
            _GameInIt: function() {
                if (void 0 != cc.vv.CG) {
                    for (var e = cc.vv.PP.Game_InIt_Setting, n = void 0, t = 0; t < this.items.childrenCount; t++) n = this.items.children[t].getComponent("car"), cc.vv.PP.currentcarMaxGrade < 3 && t <= 5 ? n.setIsShowlocked(!1) : cc.vv.PP.currentcarMaxGrade < 5 && cc.vv.PP.currentcarMaxGrade >= 3 && t <= 8 ? n.setIsShowlocked(!1) : cc.vv.PP.currentcarMaxGrade >= 5 ? n.setIsShowlocked(!1) : n.setIsShowlocked(!0), this.items.children[t].is_Have_A_Car = !1, this.items.children[t].isheroBox = !1, this.items.children[t].zIndex = t;
                    for (var o = 0; o < e.cars.length; o++) {
                        if (e.cars.length > e.carMaxNum) return;
                        var i = e.cars[o],
                            m = this.items.children[o];
                        cc.vv.CarsMgr.createCar(m, i, this.car_SpriteAtlas, !1, !1), this.unschedule(this._GameInIt)
                    }
                    this.setbuyglodText()
                }
            },
            setgoldLabel: function(e) {
                this.goldLabel && (this.goldLabel.string = cc.vv.tool.bytesToSize(e), this.goldLabel.node.runAction(cc.scaleTo(.1, 1.5).easing(cc.easeBackOut())), this.scheduleOnce(function() {
                    this.goldLabel.node.runAction(cc.scaleTo(.1, 1).easing(cc.easeBackOut()))
                }.bind(this), .2))
            },
            setdiamondLabel: function(e) {
                this.diamondLabel && (this.diamondLabel.string = cc.vv.tool.Thousands(e))
            },
            setbuyglodText: function() {
                try {
                    var e = cc.vv.CarsMgr.getListProperty(cc.vv.PP.currentbuycarMAxGrade);
                    console.log(JSON.stringify(e)), this.buyglodText.string = cc.vv.tool.bytesToSize(e.gold)
                } catch (e) {}
            },
            onClickedBtn: function(e, n) {
                switch (cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.second_level, n) {
                    case "buy":
                        if (cc.vv.CG.CanAheroBuy = this.canAheroBuy(), !cc.vv.CG.CanAheroBuy) return cc.vv.promptbox.setlabel(cc.vv.CG.Text.garageisfull), void(cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.first_level);
                        cc.vv.CG.buyplatform.buyplatform = cc.vv.CG.buyplatform.platform.storebuy, this.setcurrentbuycarSuitable(), this.refreshTable(), cc.vv.CarsMgr.addCar(this.items, cc.vv.PP.currentbuycarSuitable, cc.vv.PP.currentbuycarSuitable, !1, this.car_SpriteAtlas, cc.vv.CG.buyType.globBuy, cc.vv.CG.buyplatform.buyplatform, this.setbuyglodText.bind(this)), 1 == cc.vv.PP.GuideSate && (cc.vv.PP.GuideSate = 2, cc.vv.EventMgr.beginnerGuide({
                            nodename: null,
                            isshow: !1
                        }), cc.vv.CG.isCreateEnemys = !1), cc.vv.CG.GameInterfaceLevel.currentlevel = cc.vv.CG.GameInterfaceLevel.level.first_level;
                        break;
                    case "store":
                        this.store.active = !0;
                        break;
                    case "accelerate":
                        this._countdown.isOpencountdown ? cc.vv.promptbox.setlabel(cc.vv.CG.Text.accelerate) : cc.vv.bullet.setpresentationPage(cc.vv.CG.PresentationName.accelerate);
                        break;
                    case "signIn":
                        cc.vv.bullet.setpresentationPage(cc.vv.CG.PresentationName.signIn);
                        break;
                    case "gift_Package":
                        if (!cc.vv.PP.isWxlogin) return;
                        cc.vv.bullet.setpresentationPage(cc.vv.CG.PresentationName.gift_Package);
                        break;
                    case "lottery":
                        cc.vv.bullet.setpresentationPage(cc.vv.CG.PresentationName.lottery)
                }
            },
            onCollapseClickeBtn: function(e) {
                var n = e.target.getComponent(cc.Sprite),
                    t = "",
                    o = void 0;
                this._isCollapse ? (this._isCollapse = !1, t = "zola", o = -540) : (this._isCollapse = !0, t = "rightPull", o = -646), e.target.runAction(cc.moveTo(1, o, e.target.y)), cc.vv.UIMgr.loaderSpr(n, "texture/game_scene/Home/" + t)
            },
            setcurrentbuycarSuitable: function() {
                if (cc.vv.PP.currentcarMaxGrade <= 4) cc.vv.PP.currentbuycarSuitable = 1;
                else {
                    var e = cc.vv.PP.currentcarMaxGrade - 5,
                        n = cc.vv.PP.currentcarMaxGrade - 9;
                    cc.vv.PP.canbuyCar = [];
                    for (var t = 0; t < cc.vv.PP.buyCarsProperty.length; t++) n < t && t <= e && ("" == cc.vv.PP.buyCarsProperty[t].gold && (cc.vv.PP.buyCarsProperty[t].gold = cc.vv.formula.firstPurchase_gold(cc.vv.CG.constant.goldPrice, cc.vv.PP.buyCarsProperty[t].grade)), cc.vv.PP.canbuyCar.push(cc.vv.PP.buyCarsProperty[t]));
                    void 0 != cc.vv.PP.canbuyCar && (cc.vv.PP.canbuyCar = cc.vv.CarsMgr.sort(cc.vv.PP.canbuyCar, "gold"), cc.vv.PP.currentbuycarSuitable = cc.vv.PP.canbuyCar[0].grade)
                }
            },
            update: function(e) {
                if (this._gold != cc.vv.PP.glod && this.setgoldLabel(cc.vv.PP.glod), this._gold = cc.vv.PP.glod, this.setdiamondLabel(cc.vv.PP.diamond), void 0 != this._countdown && (this._countdown.isOpencountdown && (this.intervalTime >= 0 ? this.intervalTime -= e : (this.intervalTime = 1, this.accelerateTime.node.parent.active = !0, this.countDownShow())), 0 == o.ememy_set.length && this.getIsThereAHeroOnTheField() && !cc.vv.CG.isCreateEnemys && !cc.vv.CG.isCrystaldamaged)) {
                    if (cc.vv.EventMgr.Gen_round_enemy) {
                        cc.vv.EventMgr.Gen_round_enemy({
                            iscreateActor: !0
                        })
                    }
                    cc.vv.CG.isCreateEnemys = !0
                }
            },
            countDownShow: function() {
                0 == this._countdown.reduiseTime && (this._countdown.reduiseTime = this._countdown.totalTime);
                var e = this._countdown.reduiseTime;
                e -= 1, this._countdown.reduiseTime = e;
                var n = e - 3600 * Math.floor(e / 3600),
                    t = Math.floor(n / 60),
                    o = n -= 60 * t;
                t < 10 && (t = "0" + t), n < 10 && (o = "0" + n), this.accelerateTime.string = t + ":" + o, 0 === e && (this._countdown.isOpencountdown = !1, this._countdown.reduiseTime = 0, cc.vv.CG.income.speed = 1, this.accelerateTime.string = "", this.accelerateTime.node.parent.active = !1)
            },
            getIsThereAHeroOnTheField: function() {
                for (var e = 0; e < this.items.childrenCount; e++)
                    if (this.items.children[e].is_Have_A_Car) return !0;
                return !1
            },
            refreshTable: function() {
                cc.vv.PP.Game_InIt_Setting.cars = [];
                for (var e = 0; e < this.items.childrenCount; e++) {
                    var n = this.items.children[e].getComponent("car");
                    this.items.children[e].is_Have_A_Car && n.getCarProperty() && cc.vv.PP.Game_InIt_Setting.cars.push(n.getCarProperty())
                }
            },
            canAheroBuy: function() {
                for (var e = 0, n = 0; n < this.items.childrenCount; n++) this.items.children[n].is_Have_A_Car && e++;
                return cc.vv.PP.currentcarMaxGrade < 3 ? e < 6 : cc.vv.PP.currentcarMaxGrade < 5 && cc.vv.PP.currentcarMaxGrade >= 3 && e < 9 ? e < 9 : cc.vv.PP.currentcarMaxGrade >= 5 && e <= 12 && e <= 12
            },
            getNodeData: function(e) {
                return "1.9.3" == cc.ENGINE_VERSION ? e.detail : e
            }
        }), cc._RF.pop()
    }, {
        PolySDK: "PolySDK",
        ugame: "ugame"
    }],
    ugame: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "3fe876bEsJFCJPgMFSPShLo", "ugame");
        var o = {
            ememy_set: [],
            clear_ememy_set: function() {
                this.ememy_set = []
            },
            is_enemy_active: function(e) {
                var n = this.ememy_set.indexOf(e);
                return !(void 0 == this.ememy_set[n] || e.waveId != this.ememy_set[n].waveId || n < 0 || n >= this.ememy_set.length)
            },
            add_ememy: function(e) {
                this.ememy_set.push(e)
            },
            remove_ememy: function(e) {
                var n = this.ememy_set.indexOf(e);
                this.ememy_set.splice(n, 1)
            },
            get_enemy_set: function() {
                return o.ememy_set
            },
            search_enemy: function(e, n) {
                for (var t = 0; t < o.ememy_set.length; t++) {
                    var i = o.ememy_set[t].convertToWorldSpaceAR(cc.v2(0, 0)),
                        m = new cc.v2(0, 0);
                    if (m.x = i.x - e.x, m.y = i.y - e.y, n >= cc.vv.tool.bevelLength(m)) return o.ememy_set[t]
                }
                return null
            },
            attackRange: function(e, n) {
                var t = cc.vv.CG.lockingEnEmy.convertToWorldSpaceAR(cc.v2(0, 0)),
                    o = cc.vv.tool.MyPointExtension.pSub(t, e);
                return n >= cc.vv.tool.MyPointExtension.pLength(o) ? cc.vv.CG.lockingEnEmy : null
            },
            Gen_round_enemy: function(e) {
                if (0 == o.ememy_set.length) {
                    var n = {
                        iscreateActor: e
                    };
                    cc.vv.CG.isCreateEnemys = !0, cc.vv.EventMgr.Gen_round_enemy && (cc.vv.CG.isopenCaveat = !1, cc.vv.EventMgr.AttackTheCityWallAnimShow(), cc.vv.EventMgr.Gen_round_enemy(n))
                }
            },
            recyclingIncome: function(e, n, t, o, i, m) {
                for (var y = cc.vv.tool.fRandomBy(i, m), a = void 0, c = void 0, r = [0, 1, 2, 3], s = [5, 10, 8, 15, 12, 13, 30, 25, 20, 45, 78, 90, 46], d = void 0, l = function(i) {
                        var m = cc.vv.objectpool.createEnemy(2, 0);
                        switch (o.addChild(m), d = s[Math.floor(Math.random() * s.length)], Math.floor(Math.random() * r.length)) {
                            case 0:
                                a = -t + e.x, c = -t * Math.tan(d * Math.PI / 180) + e.y;
                                break;
                            case 1:
                                a = t * Math.tan(d * Math.PI / 180) + e.x, c = t + e.y;
                                break;
                            case 2:
                                a = t + e.x, c = t * Math.tan(d * Math.PI / 180) + e.y;
                                break;
                            case 3:
                                a = -t * Math.tan(d * Math.PI / 180) + e.x, c = -t + e.y
                        }
                        m.position = new cc.v2(e.x, e.y), v = cc.callFunc(function() {
                            cc.vv.objectpool.onEnemyKilled(2, 0, m)
                        }, m), cc.vv.audioMgr.playSFX("goldcoins.mp3"), _ = cc.sequence(cc.moveTo(.5, a, c), cc.moveTo(.45, n.x, n.y), v), m.runAction(_)
                    }, u = 0; u < y; u++) {
                    var v, _;
                    l()
                }
            },
            receivediamondsReward: function(e, n, t, o, i, m) {
                for (var y = cc.vv.tool.fRandomBy(i, m), a = void 0, c = void 0, r = [0, 1, 2, 3], s = [5, 10, 8, 15, 12, 13, 30, 25, 20, 45, 78, 90, 46], d = void 0, l = 0, u = function(i) {
                        var m = cc.vv.objectpool.createEnemy(4, 0);
                        switch (o.addChild(m), d = s[Math.floor(Math.random() * s.length)], r.length <= l && (l = 0), r[l]) {
                            case 0:
                                a = -t + e.x, c = -t * Math.tan(d * Math.PI / 180) + e.y;
                                break;
                            case 1:
                                a = t * Math.tan(d * Math.PI / 180) + e.x, c = t + e.y;
                                break;
                            case 2:
                                a = t + e.x, c = t * Math.tan(d * Math.PI / 180) + e.y;
                                break;
                            case 3:
                                a = -t * Math.tan(d * Math.PI / 180) + e.x, c = -t + e.y
                        }
                        l++, m.position = new cc.v2(e.x, e.y), _ = cc.callFunc(function() {
                            cc.vv.objectpool.onEnemyKilled(4, 0, m)
                        }, m), cc.vv.audioMgr.playSFX("goldcoins.mp3"), p = cc.sequence(cc.moveTo(.3, a, c), cc.moveTo(.45, n.x, n.y), _), m.runAction(p)
                    }, v = 0; v < y; v++) {
                    var _, p;
                    u()
                }
            }
        };
        n.exports = o, cc._RF.pop()
    }, {}],
    userItem: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "bceb4GtEeJIgbODZH01vwrr", "userItem"), cc.Class({
            extends: cc.Component,
            properties: {
                icon: cc.Sprite,
                icon1: cc.Node,
                btn: cc.Sprite,
                state: cc.Label,
                btnState: 0,
                _homejs: null
            },
            setinfoAll: function(e, n, t) {
                this.createImage(e), this.setbtnStateLabel(n), this.getuserInif(t)
            },
            setname: function(e) {
                if (this.nameText)
                    if ("" != e) {
                        var n = "",
                            t = cc.vv.tool.GetLength(e);
                        n = t.realLength <= 8 && t.chinesenum <= 4 ? e : t.chinesenum > 4 && 0 == t.english ? e.substring(0, 4) + "..." : t.english > 8 && 0 == t.chinesenum ? e.substring(0, 8) + "..." : e.substring(0, 5) + "...", this.nameText.string = n
                    } else this.nameText.string = e
            },
            createImage: function(e) {
                var n = this;
                if ("" != e) return "\u672a\u77e5" == e || "0" == e ? (n.icon1.active = !0, void console.log("\u662f\u5426\u9690\u85cf" + n.icon1.active)) : void cc.loader.load({
                    url: e,
                    type: "png"
                }, function(e, t) {
                    e && console.error(e), n.icon.spriteFrame = new cc.SpriteFrame(t), n.icon1.active = !1
                });
                n.icon1.active = !1
            },
            setbtnStateLabel: function(e) {
                void 0 != this.btn && null != this.btn && (cc.vv.UIMgr.loaderSpr(this.btn, "texture/game_scene/gift_Package/" + cc.vv.CG.InvitationState[e]), this.btnState = e)
            },
            getuserInif: function(e) {
                this.shared_uuid = "" == e ? null : e.id
            },
            onClickedbtn: function(e, n) {
                switch (n) {
                    case "adduser":
                        if (2 != this.btnState) return;
                        cc.vv.wxAPI.shareAppMessage(), cc.vv.wxAPI.aldSendEvent("\u9080\u8bf7\u70b9\u51fb\u9080\u8bf7\u6309\u94ae", {
                            "\u9080\u8bf7\u70b9\u51fb\u9080\u8bf7\u6309\u94ae": "\u70b9\u51fb"
                        });
                        break;
                    case "btn":
                        2 == this.btnState ? (cc.vv.wxAPI.shareAppMessage(), cc.vv.wxAPI.aldSendEvent("\u9080\u8bf7\u70b9\u51fb\u9080\u8bf7\u6309\u94ae", {
                            "\u9080\u8bf7\u70b9\u51fb\u9080\u8bf7\u6309\u94ae": "\u70b9\u51fb"
                        })) : 0 == this.btnState && this.wxGetShareReward()
                }
            },
            wxGetShareReward: function() {
                var e = this,
                    n = {
                        uuid: cc.vv.CG.wxUserInit.uuid,
                        shared_uuid: e.shared_uuid || null
                    };
                cc.vv.DAO.wx_API.wxGetShareReward(n, function(n) {
                    101 == n.code && (console.log("\u9886\u53d6\u91d1\u5e01"), cc.vv.PP.diamond += 200, e.setbtnStateLabel(1))
                })
            }
        }), cc._RF.pop()
    }, {}],
    wxAPI: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "265fcZ/bWdDzK4Gq8jIAMJf", "wxAPI");
        var o = e("wxRewardedVideoAd");
        e("PolySDK");
        cc.Class({
            extends: cc.Component,
            properties: {
                videoAd: null
            },
            onLoad: function() {},
            setAllInIt: function() {
                console.log("\u8bbe\u7f6e\u521d\u59cb\u5316"), this.videoAd = new o
            },
            setData: function(e) {},
            updateManage: function(e, n) {},
            login: function(e, n) {},
            showInfoButton: function(e, n) {
                this.systemInfo = wx.getSystemInfoSync();
                var t = cc.size(n.width + .1, n.height + .1),
                    o = cc.view.getFrameSize(),
                    i = cc.director.getWinSize(),
                    m = (.5 * i.width + n.x - .5 * t.width) / i.width * o.width,
                    y = (.5 * i.height - n.y - .5 * t.height) / i.height * o.height,
                    a = t.width / i.width * o.width,
                    c = t.height / i.height * o.height;
                console.log("left: ", m), console.log("top: ", y), console.log("width: ", a), console.log("height: ", c);
                var r = wx.createUserInfoButton({
                    type: "image",
                    image: "",
                    style: {
                        left: m,
                        top: y,
                        width: a,
                        height: c
                    }
                });
                r.show(), console.log("\u663e\u793a\u6309\u94ae"), this.infoButton = r, this.buttononTap(e)
            },
            buttononTap: function(e) {
                this.infoButton.onTap(function(n) {
                    console.log("button ontap:", n), "getUserInfo:ok" == n.errMsg ? (n.userInfo && (this.userInfo = n.userInfo, this.getOpenId(e)), cc.vv.wxAPI.aldSendEvent("\u9080\u8bf7\u6388\u6743\u6210\u529f", {
                        "\u9080\u8bf7\u6388\u6743\u6210\u529f": "\u6210\u529f"
                    })) : "getUserInfo:fail auth deny" == n.errMsg && cc.vv.wxAPI.aldSendEvent("\u9080\u8bf7\u6388\u6743\u5931\u8d25", {
                        "\u9080\u8bf7\u6388\u6743\u5931\u8d25": "\u5931\u8d25"
                    })
                }.bind(this))
            },
            hideInfoButton: function() {
                this.infoButton && (this.infoButton.hide(), this.infoButton = null, cc.vv.PP.isWxlogin = !0)
            },
            getWxLoginCode: function() {
                var e = this;
                wx.login({
                    success: function(n) {
                        if (console.log(n), "function" == typeof wx.createUserInfoButton) {
                            console.log("createUserInfoButton");
                            var t = wx.createUserInfoButton({
                                type: "text",
                                text: "\u5f00\u59cb\u6e38\u620f",
                                style: {
                                    left: 150,
                                    top: 550,
                                    width: 120,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: "#ff0000",
                                    color: "#ffffff",
                                    textAlign: "center",
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            t.onTap(function(n) {
                                console.log(n), n.errMsg.indexOf("auth deny") > -1 || n.errMsg.indexOf("auth denied") > -1 ? e.getWxSetting() : (wx.setStorageSync("userInfo", n.userInfo), t.hide(), e.init())
                            })
                        } else wx.getUserInfo({
                            fail: function(n) {
                                n.errMsg.indexOf("auth deny") > -1 || n.errMsg.indexOf("auth denied") > -1 ? e.getWxSetting() : e.init()
                            }
                        })
                    }
                })
            },
            getOpenId: function(e) {
                var n = this;
                wx.login({
                    success: function(t) {
                        t.code ? (console.log("\u767b\u5f55"), n.wxLogin(t.code, e)) : console.log("\u767b\u5f55\u5931\u8d25\uff01" + t.errMsg)
                    }
                })
            },
            wxLogin: function(e, n) {
                var t = this,
                    o = {
                        appId: cc.vv.CG.wxInIt.appID,
                        code: e,
                        uuid: cc.vv.CG.wxUserInit.uuid
                    };
                cc.vv.DAO.wx_API.wxLogin(o, function(e) {
                    101 == e.code ? (t.hideInfoButton(), t.userInfo && (cc.vv.CG.wxUserInit.uuid != e.uuid && (cc.vv.CG.wxUserInit.uuid = e.uuid, cc.sys.localStorage.setItem("T4GamePlatuuid", e.uuid)), t.setData(t.userInfo), t.wxSendUserInfo(n), t.init())) : console.log("wxLogin", e.code, e.msg)
                })
            },
            getWxSetting: function() {
                var e = this;
                wx.getSetting({
                    success: function(n) {
                        console.log(n);
                        var t = n.authSetting;
                        !0 === t["scope.userInfo"] ? e.init() : !1 === t["scope.userInfo"] ? wx.openSetting({
                            success: function(e) {}
                        }) : "function" == typeof wx.authorize && wx.authorize({
                            scope: "scope.record",
                            fail: function(e) {
                                (e.errMsg.indexOf("auth deny") > -1 || e.errMsg.indexOf("auth denied") > -1) && wx.openSetting({
                                    success: function(e) {}
                                })
                            }
                        })
                    }
                })
            },
            init: function() {
                var e = this;
                wx.showShareMenu({
                    withShareTicket: !0
                }), wx.onShareAppMessage(function() {
                    return {
                        title: cc.vv.CG.SharingText[0].text,
                        imageUrl: cc.vv.CG.SharingText[0].res
                    }
                }), e.launchOption = wx.getLaunchOptionsSync(), wx.onShow(function(n) {
                    console.log("\u56de\u5230\u524d\u53f0onShow"), console.log(n), 1044 == e.launchOption.scene ? (console.log(" \u6253\u5f00\u7fa4\u6392\u884c"), e.open.getComponent("openDomain").openCrowdRank(e.launchOption.shareTicket)) : 1044 == n.scene ? e.open.getComponent("openDomain").openCrowdRank(n.shareTicket) : 1007 == e.launchOption.scene ? (console.log(" \u5206\u4eab\u597d\u53cb\u5f00\u542f"), console.log("\u5206\u4eab\u597d\u53cb\u5f00\u542f" + e.launchOption.query)) : 1007 == n.scene && (console.log(" \u5206\u4eab\u597d\u53cb\u5f00\u542f"), console.log("\u5206\u4eab\u597d\u53cb\u5f00\u542f" + n.query))
                })
            },
            wxSendUserInfo: function(e) {},
            shareAppMessage: function() {},
            screenshotShareAppMessage: function(e) {},
            setUserCloudStorage: function(e, n) {},
            createBannerAd: function() {},
            onResizeBanner: function(e) {
                cc.LieYingSDK.PolySDK.BannerAd.showBannerAd()
            },
            hideBanner: function() {
                cc.LieYingSDK.PolySDK.BannerAd.hideBannerAd()
            },
            destroyBanner: function() {},
            vibrateShort: function() {},
            aldSendEvent: function(e, n) {}
        }), cc._RF.pop()
    }, {
        PolySDK: "PolySDK",
        wxRewardedVideoAd: "wxRewardedVideoAd"
    }],
    wxRewardedVideoAd: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "74cff0HM4NNA50VhLRUuT0O", "wxRewardedVideoAd");
        e("Common"), e("PolySDK");
        cc.Class({
            extends: cc.Component,
            properties: {
                adData: null
            },
            onDestory: function() {
                this._common.releaseVideo()
            },
            onPlayVideoBtn: function(e) {
                return cc.vv.wxAPI.videoAd.adData = e, cc.lieying_self = this, void cc.LieYingSDK.PolySDK.VideoAd.createRewardedVideoAd(0, function() {
                    cc.vv.EventMgr.WatchAdsuccess(e)
                }.bind(cc.lieying_self), function() {
                    cc.vv.EventMgr.WatchAdfailure(e)
                }.bind(cc.lieying_self), function(n) {
                    n || cc.vv.EventMgr.WatchAdfailure(e)
                }.bind(cc.lieying_self))
            },
            adSuccessPlay: function(e) {},
            adError: function(e) {
                console.log("\u5e7f\u544a\u9519\u8bef\uff1a" + e.errCode + e.errMsg)
            }
        }), cc._RF.pop()
    }, {
        Common: "Common",
        PolySDK: "PolySDK"
    }],
    wx_APIDao: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "b9f059aQfpB0avmFlL7rG1Y", "wx_APIDao");
        var o = e("HTTP");
        cc.Class({
            extends: cc.Component,
            properties: {},
            wxPlatLogin: function(e, n) {
                var t = e.appId;
                e.share_uuid;
                "" != t ? this._sendRequest("/wxPlatLogin", e, function(e) {
                    n && n(e)
                }) : console.log("wxPlatLogin\u4f20\u53c2\u9519\u8bef")
            },
            wxLogin: function(e, n) {
                var t = e.appId,
                    o = e.code,
                    i = e.uuid;
                "" != t && "" != o && "" != i ? this._sendRequest("/wxLogin", e, function(e) {
                    n && n(e)
                }) : console.log("wxLogin\u4f20\u53c2\u9519\u8bef")
            },
            wxSendUserInfo: function(e, n) {
                var t = e.appId,
                    o = e.uuid,
                    i = e.nick_name,
                    m = e.head_icon,
                    y = e.gender,
                    a = e.country;
                "" != t && "" != o && "" != i && "" != m && "" != y && "" != a ? this._sendRequest("/wxSendUserInfo", e, function(e) {
                    n && n(e)
                }) : console.log("wxSendUserInfo\u4f20\u53c2\u9519\u8bef", "appId+", t, "uuid+", o, "nick_name+", i, "head_icon+", m, "gender+", y, "country+", a)
            },
            wxGetSignInUI: function(e, n) {
                var t = e.app_id,
                    o = e.uuid;
                "" != t && "" != o ? this._sendRequest("/wxGetSignInUI", e, function(e) {
                    console.log("wxGetSignInUI\u6210\u529f", e), n && n(e)
                }) : console.log("wxGetSignInUI\u4f20\u53c2\u9519\u8bef", "app_id:", t, "+uuid", o)
            },
            wxSignIn: function(e, n) {
                var t = e.app_id,
                    o = e.uuid;
                "" != t && "" != o ? this._sendRequest("/wxSignIn", e, function(e) {
                    console.log("wxSignIn\u6210\u529f", e), n && n(e)
                }) : console.log("wxSignIn\u4f20\u53c2\u9519\u8bef", "app_id:", t, "+uuid", o)
            },
            wxGetShareList: function(e, n) {
                var t = e.uuid;
                "" != t ? this._sendRequest("/wxGetShareList", e, function(e) {
                    console.log("wxGetShareList\u6210\u529f", e), n && n(e)
                }) : console.log("wxGetShareList\u4f20\u53c2\u9519\u8bef", "uuid", t)
            },
            wxGetShareReward: function(e, n) {
                var t = e.uuid,
                    o = e.shared_uuid;
                "" != t && "" != o ? this._sendRequest("/wxGetShareReward", e, function(e) {
                    console.log("wxGetShareReward\u6210\u529f", e), n && n(e)
                }) : console.log("wxGetShareReward\u4f20\u53c2\u9519\u8bef", "uuid:", t, "+shared_uuid", o)
            },
            _sendRequest: function(e, n, t) {
                n = n || {}, o.sendRequest(e, n, t)
            }
        }), cc._RF.pop()
    }, {
        HTTP: "HTTP"
    }],
    zsort_node: [function(e, n, t) {
        "use strict";
        cc._RF.push(n, "8b0aaYYcQVL8pbwZa8e8ccy", "zsort_node"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {},
            update: function(e) {
                var n = this.node.children;
                n.sort(function(e, n) {
                    return e.y > n.y ? -1 : e.y < n.y ? 1 : 0
                });
                for (var t = 0; t < n.length; t++) n[t].setLocalZOrder(1e3 + t)
            }
        }), cc._RF.pop()
    }, {}]
}, {}, ["wx_APIDao", "buyItem", "car", "popup", "userItem", "Gamemove", "Wheel", "bulletLayer", "buyLayer", "collider", "gift_Package", "openDomain", "promptLayer", "promptboxLayer", "signIn", "carProperty", "config", "AppStart", "AudioMgr", "CarsManager", "EventMgr", "UIMgr", "receiveReward", "uIoperating", "PolySDK", "Formula", "MyPointExtension", "Tool", "Utils", "objectPool", "frame_anim", "Crystal", "createActor", "actor", "arrow_bullet", "gen_map_path", "hero", "uIShowLayer", "zsort_node", "level1", "Enemy", "EnemyPath", "EnemyProperty", "ugame", "HTTP", "Common", "wxAPI", "wxRewardedVideoAd", "LY_View_Loading_Scene", "Recording"]);