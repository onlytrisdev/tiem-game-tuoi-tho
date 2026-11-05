window.__require = function e(t, n, r) {
    function i(o, s) {
        if (!n[o]) {
            if (!t[o]) {
                var c = o.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var f = "function" == typeof __require && __require;
                    if (!s && f) return f(c, !0);
                    if (a) return a(c, !0);
                    throw new Error("Cannot find module '" + o + "'")
                }
            }
            var h = n[o] = {
                exports: {}
            };
            t[o][0].call(h.exports, function(e) {
                return i(t[o][1][e] || e)
            }, h, h.exports, e, t, n, r)
        }
        return n[o].exports
    }
    for (var a = "function" == typeof __require && __require, o = 0; o < r.length; o++) i(r[o]);
    return i
}({
    A12Btn: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a4e23ybinJNoqojeRPzlpjA", "A12Btn"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("./CycloneWx "),
            i = cc._decorator,
            a = i.ccclass,
            o = (i.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.clickEvent = function() {
                    r.CycloneWx.singleton.moreGame("wxaf22c82eb3e66144")
                }, t = __decorate([a], t)
            }(cc.Component));
        n.default = o, cc._RF.pop()
    }, {
        "./CycloneWx ": "CycloneWx "
    }],
    AdWX: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "dc3e0AdylVLS46FyYG8QtyU", "AdWX"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("../Ad"),
            i = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bannerAds = {}, t.videos = {}, t
                }
                return __extends(t, e), t.prototype.supportBanner = function() {
                    return !0
                }, t.prototype.supportInterstitial = function() {
                    return !1
                }, t.prototype.supportVideo = function() {
                    return !0
                }, t.prototype.showInterstitial = function(e, t, n) {}, t.prototype.showBanner = function(e, t) {
                    var n = this;
                    this.bannerAds[e.adUnitId] && this.bannerAds[e.adUnitId].banner.show().then(function() {
                        console.log("banner\u5c55\u793a\u6210\u529f"), n.bannerAds[e.adUnitId].shown = !0, t && t(null)
                    }).catch(function(r) {
                        n.bannerAds[e.adUnitId].shown = !1, console.log("banner\u5c55\u793a\u5931\u8d25"), t && t(r)
                    })
                }, t.prototype.showVideo = function(e, t, n) {
                    var r = this,
                        i = function(t) {
                            n && n(t.isEnded), r.videos[e.adUnitId].video.offClose(i)
                        };
                    this.videos[e.adUnitId].video.onClose(i), this.videos[e.adUnitId].ready = !1, this.videos[e.adUnitId].video.show().then(function() {
                        console.log("Hiển thị video thành công"), t && t(null)
                    }).catch(function(e) {
                        console.log("Hiển thị video không thành công:" + e), t && t(e)
                    })
                }, t.prototype.isVideoReady = function(e) {
                    return this.videos[e.adUnitId].ready
                }, t.prototype.initInterstitial = function(e, t) {}, t.prototype.isInterstitialReady = function(e) {
                    return !1
                }, t.prototype.loadBanner = function(e, t) {
                    var n = this,
                        i = e.width;
                    i == r.BannerWidth.MAX ? i = wx.getSystemInfoSync().windowWidth : i == r.BannerWidth.MIN ? i = 300 : (i = Math.max(r.BannerWidth.MIN, i), i = Math.min(r.BannerWidth.MAX, i));
                    var a = {
                        width: i,
                        left: 0,
                        top: 0
                    };
                    e.posType == r.BannerPosType.CENTER_BOTTOM ? (a.left = (wx.getSystemInfoSync().windowWidth - i) / 2, a.top = wx.getSystemInfoSync().windowHeight - i / 3.5) : e.posType == r.BannerPosType.LEFT_BOTTOM && (a.left = 0, a.top = wx.getSystemInfoSync().windowHeight - i / 3.5);
                    var o = !1;
                    this.bannerAds[e.adUnitId] && (o = this.bannerAds[e.adUnitId].shown, this.bannerAds[e.adUnitId].banner.destroy(), this.bannerAds[e.adUnitId] = null);
                    var s = wx.createBannerAd({
                        adUnitId: e.adUnitId,
                        style: a
                    });
                    this.bannerAds[e.adUnitId] = {
                        banner: s,
                        shown: !1
                    }, s.onLoad(function() {
                        console.log("banner\u52a0\u8f7d\u6210\u529f"), o && n.showBanner({
                            adUnitId: e.adUnitId
                        }), t(null)
                    }), s.onError(function(r) {
                        console.log("banner\u52a0\u8f7d\u5931\u8d25\uff1a" + r), t(r), setTimeout(function() {
                            n.loadBanner(e, t)
                        }, 5e3)
                    })
                }, t.prototype.initBanner = function(e, t) {
                    var n = this;
                    this.loadBanner(e, t), wx.onShow(function() {
                        n.loadBanner(e, t)
                    })
                }, t.prototype.hideBanner = function(e) {
                    this.bannerAds[e.adUnitId] && (this.bannerAds[e.adUnitId].banner.hide(), this.bannerAds[e.adUnitId].shown = !1)
                }, t.prototype.initVideo = function(e, t) {
                    var n = this,
                        r = wx.createRewardedVideoAd({
                            adUnitId: e.adUnitId
                        });
                    this.videos[e.adUnitId] = {
                        video: r,
                        ready: !1
                    }, r.onLoad(function() {
                        console.log("\u89c6\u9891\u83b7\u53d6\u6210\u529f"), t && t(null), n.videos[e.adUnitId].ready = !0
                    }), r.onError(function(i) {
                        console.log("\u89c6\u9891\u83b7\u53d6\u5931\u8d25\uff1a" + i), t && t(i), setTimeout(function() {
                            r.load()
                        }, 1e4), n.videos[e.adUnitId].ready = !1
                    })
                }, t
            }(r.Ad);
        n.AdWX = i, cc._RF.pop()
    }, {
        "../Ad": "Ad"
    }],
    Ad: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "683daiuWOJKqYp9TrJ5upP0", "Ad"), Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            function(e) {
                e.CENTER_BOTTOM = "CENTER_BOTTOM", e.LEFT_BOTTOM = "LEFT_BOTTOM"
            }(n.BannerPosType || (n.BannerPosType = {})),
            function(e) {
                e[e.MAX = 0] = "MAX", e[e.MIN = 1] = "MIN"
            }(n.BannerWidth || (n.BannerWidth = {}));
        var r = function() {
            return function() {}
        }();
        n.Ad = r, cc._RF.pop()
    }, {}],
    Animal: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "21eb03Uh7lJx7GHKGWFOBJZ", "Animal"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            a = r.property,
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.label = null, t.text = "hello", t.id = 0, t.game = null, t.animalType = 0, t.yLine = 0, t.bySelect = 0, t.xLine = 0, t.num = 1, t.select = 0, t.ready = 0, t.selectByHand = 0, t
                }
                return __extends(t, e), __decorate([a(cc.Label)], t.prototype, "label", void 0), __decorate([a], t.prototype, "text", void 0), t = __decorate([i], t)
            }(cc.Component);
        n.default = o, cc._RF.pop()
    }, {}],
    CYZGameLLL: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "595d6XtgndMGIDz7VbF8RwN", "CYZGameLLL"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("./CycloneData"),
            i = e("./Animal"),
            a = function() {
                function e() {}
                return Object.defineProperty(e, "singleton", {
                    get: function() {
                        return this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.initAllAnimalsTypeArr = function(e, t) {
                    for (var n, i, a = r.CycloneData.singleton.getChapterConfigInfo(), o = r.CycloneData.singleton.getOnChapterNumber(), s = new Array, c = 0, f = 0, h = 1, d = 0; d < e; d++)
                        for (var u = 0; u < t; u++) s[c] = a[o][1] - 1 - f, 0 == s[c] && h >= 2 ? (f = 0, h = 0) : h >= 2 && (f++, h = 0), c++, h++;
                    for (d = 0; d <= s.length; d++)(n = Math.floor(Math.random() * (s.length - d) + d)) != d && (i = s[d], s[d] = s[n], s[n] = i);
                    return s
                }, e.prototype.isExistanimalOnLocation = function(e, t) {
                    for (var n = 0; n < t.length; n++)
                        if (e.x == t[n].rowLocationNum.x && e.y == t[n].rowLocationNum.y) return !0;
                    return !1
                }, e.prototype.rowLocationToLocation = function(e) {
                    for (var t = r.CycloneData.singleton.getOnChapterNumber(), n = r.CycloneData.singleton.getanimalsConfigInfo(), i = cc.v2(0, 0), a = r.CycloneData.singleton.getChapterConfigInfo().filter(function(e) {
                            return e[0] == t
                        }), o = 1; o < n.length; o++)
                        if (n[o][0] == a[0][2] && n[o][1] == a[0][3]) return i.x = parseInt(n[o][2]) + n[o][4] * e.y, i.y = parseInt(n[o][3]) - n[o][4] * e.x, i;
                    return i
                }, e.prototype.is0BreakConnectByLocation = function(e, t, n) {
                    var r = t.x > n.x ? t.x : n.x,
                        i = t.x < n.x ? t.x : n.x,
                        a = t.y > n.y ? t.y : n.y,
                        o = t.y < n.y ? t.y : n.y;
                    if (t.x == n.x) {
                        if (a - o == 1) return !0;
                        for (var s = 0, c = 0; c < a - o - 1; c++)
                            for (var f = 0; f < e.length; f++)
                                if (e[f].rowLocationNum.x == t.x && e[f].rowLocationNum.y == a - c - 1) return void s++;
                        if (0 == s) return !0
                    } else if (t.y == n.y) {
                        if (r - i == 1) return !0;
                        for (s = 0, c = 0; c < r - i - 1; c++)
                            for (f = 0; f < e.length; f++)
                                if (e[f].rowLocationNum.y == t.y && e[f].rowLocationNum.x == r - c - 1) return void s++;
                        if (0 == s) return !0
                    }
                    return !1
                }, e.prototype.is1BreakConnectByLocation = function(e, t, n) {
                    var r = !1;
                    if (t.x != n.x && t.y != n.y) {
                        var i = cc.v2(t.x, n.y),
                            a = cc.v2(n.x, t.y);
                        if (!this.isExistanimalOnLocation(i, e)) {
                            r = !0;
                            for (var o = 0; o < Math.abs(i.y - t.y) - 1; o++) {
                                var s = cc.v2(i.x, i.y < t.y ? i.y + o + 1 : t.y + o + 1);
                                if (this.isExistanimalOnLocation(s, e)) {
                                    r = !1;
                                    break
                                }
                            }
                            if (r) {
                                for (o = 0; o < Math.abs(i.x - n.x) - 1; o++) {
                                    s = cc.v2(i.x < n.x ? i.x + o + 1 : n.x + o + 1, i.y);
                                    if (this.isExistanimalOnLocation(s, e)) {
                                        r = !1;
                                        break
                                    }
                                }
                                if (r) return i
                            }
                        }
                        if (!this.isExistanimalOnLocation(a, e)) {
                            r = !0;
                            for (o = 0; o < Math.abs(a.y - n.y) - 1; o++) {
                                s = cc.v2(a.x, a.y < n.y ? a.y + o + 1 : n.y + o + 1);
                                if (this.isExistanimalOnLocation(s, e)) {
                                    r = !1;
                                    break
                                }
                            }
                            if (r) {
                                for (o = 0; o < Math.abs(a.x - t.x) - 1; o++) {
                                    s = cc.v2(a.x < t.x ? a.x + o + 1 : t.x + o + 1, a.y);
                                    if (this.isExistanimalOnLocation(s, e)) {
                                        r = !1;
                                        break
                                    }
                                }
                                if (r) return a
                            }
                        }
                    }
                    return !1
                }, e.prototype.is2BreakConnectByLocation = function(e, t, n) {
                    for (var r = 1, i = new Array, a = 0; a < r && t.x + 1 + a < 11; a++) {
                        if (!this.is0BreakConnectByLocation(e, t, cc.v2(t.x + 1 + a, t.y)) || this.isExistanimalOnLocation(cc.v2(t.x + 1 + a, t.y), e)) {
                            r = 1;
                            break
                        }
                        if (i[0] = cc.v2(t.x + 1 + a, t.y), this.is1BreakConnectByLocation(e, n, i[0])) return i[1] = cc.v2(this.is1BreakConnectByLocation(e, n, i[0])), i;
                        r++
                    }
                    for (a = 0; a < r && t.x - 1 - a > -2; a++) {
                        if (!this.is0BreakConnectByLocation(e, t, cc.v2(t.x - 1 - a, t.y)) || this.isExistanimalOnLocation(cc.v2(t.x - 1 - a, t.y), e)) {
                            r = 1;
                            break
                        }
                        if (i[0] = cc.v2(t.x - 1 - a, t.y), this.is1BreakConnectByLocation(e, n, i[0])) return i[1] = cc.v2(this.is1BreakConnectByLocation(e, n, i[0])), i;
                        r++
                    }
                    for (a = 0; a < r && t.y + 1 + a < 10; a++) {
                        if (!this.is0BreakConnectByLocation(e, t, cc.v2(t.x, t.y + 1 + a)) || this.isExistanimalOnLocation(cc.v2(t.x, t.y + 1 + a), e)) {
                            r = 1;
                            break
                        }
                        if (i[0] = cc.v2(t.x, t.y + 1 + a), this.is1BreakConnectByLocation(e, n, i[0])) return i[1] = cc.v2(this.is1BreakConnectByLocation(e, n, i[0])), i;
                        r++
                    }
                    for (a = 0; a < r && t.y - 1 - a > -2; a++) {
                        if (!this.is0BreakConnectByLocation(e, t, cc.v2(t.x, t.y - 1 - a)) || this.isExistanimalOnLocation(cc.v2(t.x, t.y - 1 - a), e)) {
                            r = 1;
                            break
                        }
                        if (i[0] = cc.v2(t.x, t.y - 1 - a), this.is1BreakConnectByLocation(e, n, i[0])) return i[1] = cc.v2(this.is1BreakConnectByLocation(e, n, i[0])), i;
                        r++
                    }
                    return !1
                }, e.prototype.drawGraphics = function(e, t, n, r, i) {
                    var a = e.getComponent(cc.Graphics);
                    a.lineJoin = cc.Graphics.LineJoin.BEVEL, a.lineCap = cc.Graphics.LineCap.BUTT, a.moveTo(t.x, t.y), a.lineTo(n.x, n.y), r && (a.moveTo(n.x, n.y), a.lineTo(r.x, r.y)), i && (a.moveTo(r.x, r.y), a.lineTo(i.x, i.y)), a.lineWidth = 9, a.fillColor = cc.color(181, 0, 255), a.stroke(), a.fill()
                }, e.prototype.isRuleBySelectAnimals = function(e, t, n) {
                    if (2 == t.length && t[0].getComponent(i.default).animalType == t[1].getComponent(i.default).animalType) {
                        var r = t[0].getComponent(i.default).xLine,
                            a = t[1].getComponent(i.default).xLine,
                            o = t[0].getComponent(i.default).yLine,
                            s = t[1].getComponent(i.default).yLine;
                        if (this.is0BreakConnectByLocation(e, cc.v2(r, o), cc.v2(a, s))) return n && this.drawGraphics(t[0].parent.getChildByName("graphics"), cc.v2(t[0].x, t[0].y), cc.v2(t[1].x, t[1].y)), !0;
                        if (this.is1BreakConnectByLocation(e, cc.v2(r, o), cc.v2(a, s))) {
                            var c = cc.v2(t[0].x, t[0].y),
                                f = cc.v2(this.is1BreakConnectByLocation(e, cc.v2(r, o), cc.v2(a, s))),
                                h = cc.v2(t[1].x, t[1].y);
                            return n && this.drawGraphics(t[0].parent.getChildByName("graphics"), c, this.rowLocationToLocation(f), h), !0
                        }
                        if (this.is2BreakConnectByLocation(e, cc.v2(r, o), cc.v2(a, s))) {
                            c = cc.v2(t[0].x, t[0].y), f = this.is2BreakConnectByLocation(e, cc.v2(r, o), cc.v2(a, s))[0], h = this.is2BreakConnectByLocation(e, cc.v2(r, o), cc.v2(a, s))[1];
                            var d = cc.v2(t[1].x, t[1].y);
                            return n && this.drawGraphics(t[0].parent.getChildByName("graphics"), c, this.rowLocationToLocation(f), this.rowLocationToLocation(h), d), !0
                        }
                    }
                    return !1
                }, e._instance = new e, e
            }();
        n.CYZGameLLL = a, cc._RF.pop()
    }, {
        "./Animal": "Animal",
        "./CycloneData": "CycloneData"
    }],
    CloseBtn: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0309ed11ERHnZd5NCzXkAnD", "CloseBtn"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("./CycloneDef"),
            i = cc._decorator,
            a = i.ccclass,
            o = (i.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.prototype.onCloseClickEvent = function() {
                    this.node.destroy()
                }, t.prototype.onBackClickEvent = function() {
                    this.node.active = !1
                }, t.prototype.toMainClickEvent = function() {
                    r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3"), cc.director.loadScene("main")
                }, t = __decorate([a], t)
            }(cc.Component));
        n.default = o, cc._RF.pop()
    }, {
        "./CycloneDef": "CycloneDef"
    }],
    CycloneData: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8cde1HT+WZLkaVXmOHWCmFL", "CycloneData"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r, i = e("./CycloneDef");
        (function(e) {
            e[e.RANKING = 0] = "RANKING", e[e.CHAPTER = 1] = "CHAPTER", e[e.PK = 2] = "PK", e[e.FRIEND = 3] = "FRIEND"
        })(n.PlayMode || (n.PlayMode = {}));
        var a = 0,
            o = 0,
            s = null,
            c = null,
            f = null,
            h = function() {
                function e() {}
                return Object.defineProperty(e, "singleton", {
                    get: function() {
                        return this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.checkIsNewUserByLocal = function() {
                    var e = cc.sys.localStorage.getItem("isNewUser");
                    return null == e || 1 != parseInt(e) ? (console.log("------\u65b0\u7528\u6237"), cc.sys.localStorage.setItem("isNewUser", 1), e = cc.sys.localStorage.getItem("isNewUser"), !0) : (console.log("------\u8001\u7528\u6237"), !1)
                }, e.prototype.getLastLoginDay = function() {
                    var e = cc.sys.localStorage.getItem("lastLoginDay");
                    return i.CycloneDef.singleton.checkIsOnlyNumberCompose(e) || (cc.sys.localStorage.setItem("lastLoginDay", i.CycloneDef.singleton.getNowDay()), e = cc.sys.localStorage.getItem("lastLoginDay")), e
                }, e.prototype.setLastLoginDay = function() {
                    cc.sys.localStorage.setItem("lastLoginDay", i.CycloneDef.singleton.getNowDay())
                }, e.prototype.getGoldNumByLocal = function() {
                    var e = cc.sys.localStorage.getItem("GoldNum");
                    return i.CycloneDef.singleton.checkIsOnlyNumberCompose(e) || (cc.sys.localStorage.setItem("GoldNum", 1288), e = cc.sys.localStorage.getItem("GoldNum")), parseInt(e)
                }, e.prototype.addGoldNumByLocal = function(e) {
                    cc.sys.localStorage.setItem("GoldNum", this.getGoldNumByLocal() + e), this.getGoldNumByLocal() < 0 && cc.sys.localStorage.setItem("GoldNum", 0)
                }, e.prototype.getDiamondByLocal = function() {
                    var e = cc.sys.localStorage.getItem("diamondNum");
                    return i.CycloneDef.singleton.checkIsOnlyNumberCompose(e) || (cc.sys.localStorage.setItem("diamondNum", 0), e = cc.sys.localStorage.getItem("diamondNum")), parseInt(e)
                }, e.prototype.addDiamondByLocal = function(e) {
                    cc.sys.localStorage.setItem("diamondNum", this.getDiamondByLocal() + e), this.getDiamondByLocal() < 0 && cc.sys.localStorage.setItem("diamondNum", 0)
                }, e.prototype.getPlayMode = function() {
                    return r
                }, e.prototype.setPlayMode = function(e) {
                    r = e
                }, e.prototype.getOnMapNumber = function() {
                    return a
                }, e.prototype.setOnMapNumber = function(e) {
                    a = e
                }, e.prototype.getOnChapterNumber = function() {
                    return o
                }, e.prototype.setOnChapterNumber = function(e) {
                    o = e
                }, e.prototype.getRankingModeMinTimeNum = function() {
                    var e = cc.sys.localStorage.getItem("QuickModeMinTimeNum");
                    return i.CycloneDef.singleton.checkIsOnlyNumberCompose(e) || (cc.sys.localStorage.setItem("QuickModeMinTimeNum", 99), e = cc.sys.localStorage.getItem("QuickModeMinTimeNum")), e
                }, e.prototype.setRankingModeMinTimeNum = function(e) {
                    e < this.getRankingModeMinTimeNum() && cc.sys.localStorage.setItem("QuickModeMinTimeNum", e)
                }, e.prototype.getRankingModeBestNum = function() {
                    var e = cc.sys.localStorage.getItem("RankingModeBestNum");
                    return i.CycloneDef.singleton.checkIsOnlyNumberCompose(e) || (cc.sys.localStorage.setItem("RankingModeBestNum", 99999), e = cc.sys.localStorage.getItem("RankingModeBestNum")), parseInt(e)
                }, e.prototype.setRankingModeBestNum = function(e) {
                    e < this.getRankingModeBestNum() && cc.sys.localStorage.setItem("RankingModeBestNum", e.toFixed(0))
                }, e.prototype.getChapterModeDoneNum = function() {
                    var e = cc.sys.localStorage.getItem("ChapterModeDoneNum");
                    return i.CycloneDef.singleton.checkIsOnlyNumberCompose(e) || (cc.sys.localStorage.setItem("ChapterModeDoneNum", 1), e = cc.sys.localStorage.getItem("ChapterModeDoneNum")), parseInt(e)
                }, e.prototype.setChapterModeDoneNum = function(e) {
                    cc.sys.localStorage.setItem("ChapterModeDoneNum", e)
                }, e.prototype.getChapterModeStarByChapterNum = function(e) {
                    var t = cc.sys.localStorage.getItem("shapterNumber" + e + "starNumber");
                    return i.CycloneDef.singleton.checkIsOnlyNumberCompose(t) || (cc.sys.localStorage.setItem("shapterNumber" + e + "starNumber", 0), t = cc.sys.localStorage.getItem("shapterNumber" + e + "starNumber")), parseInt(t)
                }, e.prototype.setChapterModeStarByChapterNum = function(e, t) {
                    t > this.getChapterModeStarByChapterNum(e) && cc.sys.localStorage.setItem("shapterNumber" + e + "starNumber", t)
                }, e.prototype.getPKModeDoneTimes = function() {
                    var e = cc.sys.localStorage.getItem("PKModeDoneTimes");
                    return i.CycloneDef.singleton.checkIsOnlyNumberCompose(e) || (cc.sys.localStorage.setItem("PKModeDoneTimes", 1), e = cc.sys.localStorage.getItem("PKModeDoneTimes")), parseInt(e)
                }, e.prototype.addPKModeDoneTimes = function(e) {
                    cc.sys.localStorage.setItem("PKModeDoneTimes", this.getPKModeDoneTimes() + e)
                }, e.prototype.getPKModeWinTimes = function() {
                    var e = cc.sys.localStorage.getItem("PKModeWinTimes");
                    return i.CycloneDef.singleton.checkIsOnlyNumberCompose(e) || (cc.sys.localStorage.setItem("PKModeWinTimes", 1), e = cc.sys.localStorage.getItem("PKModeWinTimes")), parseInt(e)
                }, e.prototype.addPKModeWinTimes = function(e) {
                    cc.sys.localStorage.setItem("PKModeWinTimes", this.getPKModeWinTimes() + e)
                }, e.prototype.getChapterConfigInfo = function() {
                    return s
                }, e.prototype.setChapterConfigInfo = function(e) {
                    s = e
                }, e.prototype.getanimalsConfigInfo = function() {
                    return c
                }, e.prototype.setanimalsConfigInfo = function(e) {
                    c = e
                }, e.prototype.getWorldRankConfigInfo = function() {
                    return f
                }, e.prototype.setWorldRankConfigInfo = function(e) {
                    f = e
                }, e.prototype.getLocalScore = function() {
                    var e = cc.sys.localStorage.getItem("maxChapter");
                    return console.log("maxChapter=" + e), null == e && (cc.sys.localStorage.setItem("maxChapter", 0), e = cc.sys.localStorage.getItem("maxChapter"), console.log("maxChapter=" + e)), e
                }, e.prototype.setLocalScore = function(e) {
                    var t = this.getLocalScore();
                    e > t ? (cc.sys.localStorage.setItem("maxChapter", parseInt(e)), console.log("------\u7834\u7eaa\u5f55\uff0c\u5199\u5165\u5f97\u5206 = " + e)) : console.log("------\u7834\u7eaa\u5f55\u5931\u8d25\uff0c\u6700\u9ad8\u5206 = " + t)
                }, e.prototype.getIsGetPublicGift = function() {
                    var e = cc.sys.localStorage.getItem("PublicGift");
                    return !!i.CycloneDef.singleton.checkIsOnlyNumberCompose(e)
                }, e.prototype.setIsGetPublicGift = function() {
                    cc.sys.localStorage.setItem("PublicGift", "0222")
                }, e._instance = new e, e
            }();
        n.CycloneData = h, cc._RF.pop()
    }, {
        "./CycloneDef": "CycloneDef"
    }],
    CycloneDef: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f84a5JvZ9VEb4Q5OqEuD9Fe", "CycloneDef"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = function() {
            function e() {
                this.heshenTimeStamp = 1592130700, this.soundIsOpen = !0
            }
            return Object.defineProperty(e, "singleton", {
                get: function() {
                    return this._instance
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.CsvToArr = function(e, t) {
                t = t || ",";
                for (var n = new RegExp("(\\" + t + '|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\' + t + "\\r\\n]*))", "gi"), r = [
                        []
                    ], i = null; i = n.exec(e);) {
                    var a = i[1];
                    if (a.length && a != t && r.push([]), i[2]) var o = i[2].replace(new RegExp('""', "g"), '"');
                    else o = i[3];
                    r[r.length - 1].push(o)
                }
                return r
            }, e.prototype.getNowTimeStamp = function() {
                return Math.round((new Date).getTime() / 1e3)
            }, e.prototype.getNowFormatDate = function() {
                var e = new Date;
                return e.getFullYear() + "-" + e.getMonth() + "1-" + e.getDate() + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds()
            }, e.prototype.getNowDay = function() {
                return (new Date).getDate()
            }, e.prototype.isOpenExamineMode = function() {
                return this.heshenTimeStamp > e.singleton.getNowTimeStamp()
            }, e.prototype.getIsNewUser = function() {
                var e = cc.sys.localStorage.getItem("newUser");
                return !this.checkIsOnlyNumberCompose(e) && (cc.sys.localStorage.setItem("newUser", 1), !0)
            }, e.prototype.checkIsOnlyNumberCompose = function(e) {
                return !(!/^\d+(\.\d+)?$/.test(e) && !/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/.test(e))
            }, e.prototype.arrToRandomOrder = function(e) {
                for (var t, n, r = e.length, i = 0; i <= r; i++)(t = Math.floor(Math.random() * (r - i) + i)) != i && (n = e[i], e[i] = e[t], e[t] = n);
                return e
            }, e.prototype.setBtnByClickInterval = function(e, t) {
                e.on("click", function() {
                    e.getComponent(cc.Button).interactable = !1, e.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(function() {
                        e.getComponent(cc.Button).interactable = !0
                    })))
                })
            }, e.prototype.nodeReviseSpriteFrame = function(e, t) {
                var n = e.getComponent(cc.Sprite);
                cc.loader.loadRes(t, function(e, t) {
                    n.spriteFrame = new cc.SpriteFrame(t)
                })
            }, e.prototype.popNodeByTouch = function(e, t) {
                e.on(cc.Node.EventType.TOUCH_START, function() {
                    t.active = !0
                }), e.on(cc.Node.EventType.TOUCH_MOVE, function() {
                    t.active = !0
                }), e.on(cc.Node.EventType.TOUCH_END, function() {
                    t.active = !1
                }), e.on(cc.Node.EventType.TOUCH_CANCEL, function() {
                    t.active = !1
                })
            }, e.prototype.nodeAdaptHeight = function(e, t, n) {
                cc.winSize.height / cc.winSize.width < 1.95 ? e.y = t : e.y = n
            }, e.prototype.setSoundIsOpen = function(e) {
                0 == e && cc.audioEngine.stopAll(), this.soundIsOpen = e
            }, e.prototype.getSoundIsOpen = function() {
                return this.soundIsOpen
            }, e.prototype.playSound = function(e, t, n, r) {
                if (this.getSoundIsOpen()) {
                    var i = cc.url.raw(e);
                    cc.loader.load(i, function(e, i) {
                        var a = cc.audioEngine.play(i, t, n);
                        r && r(a)
                    })
                }
            }, e.prototype.playSoundEffect = function(e) {
                if (this.getSoundIsOpen()) {
                    var t = cc.url.raw(e);
                    cc.loader.load(t, function(e, t) {
                        var n = new cc.AudioSource;
                        n.clip = t, n.play()
                    })
                }
            }, e.prototype.stopSound = function(e) {
                e ? cc.audioEngine.stop(e) : cc.audioEngine.stopAll()
            }, e._instance = new e, e
        }();
        n.CycloneDef = r, cc._RF.pop()
    }, {}],
    "CycloneWx ": [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c71e52L70JHPJXyi2/cS/BJ", "CycloneWx "), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("./CYWxSDK/WX/AdWX"),
            i = e("./CycloneDef"),
            a = function() {
                function e() {
                    this.bannerAD = "", this.videoAD = "", this.interstitialAD = "", this.isCanPlayAd = !1, this.remain = 0, this.interstitialAd = null, cc.sys.platform == cc.sys.WECHAT_GAME && (this.ad = new r.AdWX)
                }
                return Object.defineProperty(e, "singleton", {
                    get: function() {
                        return this._instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.isWxPlatform = function() {
                    return cc.sys.platform == cc.sys.WECHAT_GAME
                }, e.prototype.wxHeadRevise = function(e, t) {
                    var n = e.getComponent(cc.Sprite);
                    cc.loader.load({
                        url: t,
                        type: "jpeg"
                    }, function(e, t) {
                        n.spriteFrame = new cc.SpriteFrame(t)
                    })
                }, e.prototype.share = function(e, t, n) {
                    //h5api.share()
                }, e.prototype.showLoading = function(e) {
                    wx.showLoading({
                        title: e,
                        mask: !0
                    })
                }, e.prototype.hideLoading = function() {
                    wx.hideLoading()
                }, e.prototype.showToast = function(e, t) {
                    void 0 === t && (t = 1e3);
                    var n = null;
                    cc.loader.loadRes("prefeb/ShowToast", cc.Prefab, function(r, i) {
                        r ? console.error("LoadPrefab\xa0", r) : ((n = cc.instantiate(i)).parent = cc.find("Canvas"), n.getChildByName("lbToast").getComponent(cc.Label).string = e, setTimeout(function() {
                            n.removeFromParent()
                        }, t))
                    }.bind(this))
                }, e.prototype.showAlertView = function(e, t, n, r, i, a) {
                    wx.showModal({
                        title: e,
                        content: t,
                        showCancel: null != i && void 0 != i && "" != i,
                        cancelText: i || "",
                        confirmText: n,
                        success: function(e) {
                            e.confirm ? r && r() : a && a()
                        }
                    })
                }, e.prototype.initBanner = function() {}, e.prototype.showBanner = function() {}, e.prototype.hideBanner = function() {}, e.prototype.initVideo = function() {}, e.prototype.showVideo = function(e) {
					//a.CycloneWx.singleton.showVideo(function() {})
					//console.log("002");
                    // console.log("Chương trình Video");
                    // var t = this;
                    // if (h5api.canPlayAd(function(e) {
							// //a.CycloneWx.singleton.showVideo(function() {})
							// //n && n(t.isEnded), r.videos[e.adUnitId].video.offClose(i)
							// console.log("001");
                            // //console.log("Có thể phát quảng cáo hay không:", e.canPlayAd, "\n", "Số lần còn lại ", e.remain), t.isCanPlayAd = e.canPlayAd, t.remain = e.remain
                        // }), 0 == t.isCanPlayAd && t.remain <= 0) return this.showToast("Quảng cáo của ngày hôm nay đã được sử dụng hết, vui lòng tiếp tục vào ngày mai", 5e3), void console.log("Quảng cáo của ngày hôm nay đã được sử dụng hết, vui lòng tiếp tục vào ngày mai");
                    // h5api.playAd(function(t) {
                        // //console.log("Dữ liệu quảng cáo phát lại", t), 1e4 === t.code ? (console.log("Bắt đầu chơi"), i.CycloneDef.singleton.setSoundIsOpen(!1)) : 10001 === t.code ? (i.CycloneDef.singleton.setSoundIsOpen(!0), e && e()) : console.log("Chơi bất thường"), i.CycloneDef.singleton.getSoundIsOpen() && (i.CycloneDef.singleton.stopSound(), i.CycloneDef.singleton.playSound("resources/audio/cyclone_lll_BGM_001.mp3", !0, .7))
                    // })
                }, e.prototype.moreGame = function(e) {
                    wx.navigateToMiniProgram({
                        appId: e,
                        success: function() {
                            console.log("\u8df3\u8f6c\u6210\u529f\uff1a" + e)
                        },
                        fail: function(t) {
                            console.log("\u8df3\u8f6c\u5931\u8d25\uff1a" + e + " error : " + JSON.stringify(t))
                        }
                    })
                }, e.prototype.initInterstitial = function() {}, e.prototype.showInterstitial = function() {}, e._instance = new e, e
            }();
        n.CycloneWx = a, cc._RF.pop()
    }, {
        "./CYWxSDK/WX/AdWX": "AdWX",
        "./CycloneDef": "CycloneDef"
    }],
    1: [function(e, t, n) {
        var r = n;
        r.bignum = e("bn.js"), r.define = e("./asn1/api").define, r.base = e("./asn1/base"), r.constants = e("./asn1/constants"), r.decoders = e("./asn1/decoders"), r.encoders = e("./asn1/encoders")
    }, {
        "./asn1/api": 2,
        "./asn1/base": 4,
        "./asn1/constants": 8,
        "./asn1/decoders": 10,
        "./asn1/encoders": 13,
        "bn.js": 16
    }],
    2: [function(e, t, n) {
        var r = e("../asn1"),
            i = e("inherits");

        function a(e, t) {
            this.name = e, this.body = t, this.decoders = {}, this.encoders = {}
        }
        n.define = function(e, t) {
            return new a(e, t)
        }, a.prototype._createNamed = function(t) {
            var n;
            try {
                n = e("vm").runInThisContext("(function " + this.name + "(entity) {\n  this._initNamed(entity);\n})")
            } catch (e) {
                n = function(e) {
                    this._initNamed(e)
                }
            }
            return i(n, t), n.prototype._initNamed = function(e) {
                t.call(this, e)
            }, new n(this)
        }, a.prototype._getDecoder = function(e) {
            return e = e || "der", this.decoders.hasOwnProperty(e) || (this.decoders[e] = this._createNamed(r.decoders[e])), this.decoders[e]
        }, a.prototype.decode = function(e, t, n) {
            return this._getDecoder(t).decode(e, n)
        }, a.prototype._getEncoder = function(e) {
            return e = e || "der", this.encoders.hasOwnProperty(e) || (this.encoders[e] = this._createNamed(r.encoders[e])), this.encoders[e]
        }, a.prototype.encode = function(e, t, n) {
            return this._getEncoder(t).encode(e, n)
        }
    }, {
        "../asn1": 1,
        inherits: 101,
        vm: 155
    }],
    3: [function(e, t, n) {
        var r = e("inherits"),
            i = e("../base").Reporter,
            a = e("buffer").Buffer;

        function o(e, t) {
            i.call(this, t), a.isBuffer(e) ? (this.base = e, this.offset = 0, this.length = e.length) : this.error("Input not Buffer")
        }

        function s(e, t) {
            if (Array.isArray(e)) this.length = 0, this.value = e.map(function(e) {
                return e instanceof s || (e = new s(e, t)), this.length += e.length, e
            }, this);
            else if ("number" == typeof e) {
                if (!(0 <= e && e <= 255)) return t.error("non-byte EncoderBuffer value");
                this.value = e, this.length = 1
            } else if ("string" == typeof e) this.value = e, this.length = a.byteLength(e);
            else {
                if (!a.isBuffer(e)) return t.error("Unsupported type: " + typeof e);
                this.value = e, this.length = e.length
            }
        }
        r(o, i), n.DecoderBuffer = o, o.prototype.save = function() {
            return {
                offset: this.offset,
                reporter: i.prototype.save.call(this)
            }
        }, o.prototype.restore = function(e) {
            var t = new o(this.base);
            return t.offset = e.offset, t.length = this.offset, this.offset = e.offset, i.prototype.restore.call(this, e.reporter), t
        }, o.prototype.isEmpty = function() {
            return this.offset === this.length
        }, o.prototype.readUInt8 = function(e) {
            return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(e || "DecoderBuffer overrun")
        }, o.prototype.skip = function(e, t) {
            if (!(this.offset + e <= this.length)) return this.error(t || "DecoderBuffer overrun");
            var n = new o(this.base);
            return n._reporterState = this._reporterState, n.offset = this.offset, n.length = this.offset + e, this.offset += e, n
        }, o.prototype.raw = function(e) {
            return this.base.slice(e ? e.offset : this.offset, this.length)
        }, n.EncoderBuffer = s, s.prototype.join = function(e, t) {
            return e || (e = new a(this.length)), t || (t = 0), 0 === this.length ? e : (Array.isArray(this.value) ? this.value.forEach(function(n) {
                n.join(e, t), t += n.length
            }) : ("number" == typeof this.value ? e[t] = this.value : "string" == typeof this.value ? e.write(this.value, t) : a.isBuffer(this.value) && this.value.copy(e, t), t += this.length), e)
        }
    }, {
        "../base": 4,
        buffer: 47,
        inherits: 101
    }],
    4: [function(e, t, n) {
        var r = n;
        r.Reporter = e("./reporter").Reporter, r.DecoderBuffer = e("./buffer").DecoderBuffer, r.EncoderBuffer = e("./buffer").EncoderBuffer, r.Node = e("./node")
    }, {
        "./buffer": 3,
        "./node": 5,
        "./reporter": 6
    }],
    5: [function(e, t, n) {
        var r = e("../base").Reporter,
            i = e("../base").EncoderBuffer,
            a = e("../base").DecoderBuffer,
            o = e("minimalistic-assert"),
            s = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
            c = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(s);

        function f(e, t) {
            var n = {};
            this._baseState = n, n.enc = e, n.parent = t || null, n.children = null, n.tag = null, n.args = null, n.reverseArgs = null, n.choice = null, n.optional = !1, n.any = !1, n.obj = !1, n.use = null, n.useDecoder = null, n.key = null, n.default = null, n.explicit = null, n.implicit = null, n.contains = null, n.parent || (n.children = [], this._wrap())
        }
        t.exports = f;
        var h = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
        f.prototype.clone = function() {
            var e = this._baseState,
                t = {};
            h.forEach(function(n) {
                t[n] = e[n]
            });
            var n = new this.constructor(t.parent);
            return n._baseState = t, n
        }, f.prototype._wrap = function() {
            var e = this._baseState;
            c.forEach(function(t) {
                this[t] = function() {
                    var n = new this.constructor(this);
                    return e.children.push(n), n[t].apply(n, arguments)
                }
            }, this)
        }, f.prototype._init = function(e) {
            var t = this._baseState;
            o(null === t.parent), e.call(this), t.children = t.children.filter(function(e) {
                return e._baseState.parent === this
            }, this), o.equal(t.children.length, 1, "Root node can have only one child")
        }, f.prototype._useArgs = function(e) {
            var t = this._baseState,
                n = e.filter(function(e) {
                    return e instanceof this.constructor
                }, this);
            e = e.filter(function(e) {
                return !(e instanceof this.constructor)
            }, this), 0 !== n.length && (o(null === t.children), t.children = n, n.forEach(function(e) {
                e._baseState.parent = this
            }, this)), 0 !== e.length && (o(null === t.args), t.args = e, t.reverseArgs = e.map(function(e) {
                if ("object" != typeof e || e.constructor !== Object) return e;
                var t = {};
                return Object.keys(e).forEach(function(n) {
                    n == (0 | n) && (n |= 0);
                    var r = e[n];
                    t[r] = n
                }), t
            }))
        }, ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"].forEach(function(e) {
            f.prototype[e] = function() {
                var t = this._baseState;
                throw new Error(e + " not implemented for encoding: " + t.enc)
            }
        }), s.forEach(function(e) {
            f.prototype[e] = function() {
                var t = this._baseState,
                    n = Array.prototype.slice.call(arguments);
                return o(null === t.tag), t.tag = e, this._useArgs(n), this
            }
        }), f.prototype.use = function(e) {
            o(e);
            var t = this._baseState;
            return o(null === t.use), t.use = e, this
        }, f.prototype.optional = function() {
            return this._baseState.optional = !0, this
        }, f.prototype.def = function(e) {
            var t = this._baseState;
            return o(null === t.default), t.default = e, t.optional = !0, this
        }, f.prototype.explicit = function(e) {
            var t = this._baseState;
            return o(null === t.explicit && null === t.implicit), t.explicit = e, this
        }, f.prototype.implicit = function(e) {
            var t = this._baseState;
            return o(null === t.explicit && null === t.implicit), t.implicit = e, this
        }, f.prototype.obj = function() {
            var e = this._baseState,
                t = Array.prototype.slice.call(arguments);
            return e.obj = !0, 0 !== t.length && this._useArgs(t), this
        }, f.prototype.key = function(e) {
            var t = this._baseState;
            return o(null === t.key), t.key = e, this
        }, f.prototype.any = function() {
            return this._baseState.any = !0, this
        }, f.prototype.choice = function(e) {
            var t = this._baseState;
            return o(null === t.choice), t.choice = e, this._useArgs(Object.keys(e).map(function(t) {
                return e[t]
            })), this
        }, f.prototype.contains = function(e) {
            var t = this._baseState;
            return o(null === t.use), t.contains = e, this
        }, f.prototype._decode = function(e, t) {
            var n = this._baseState;
            if (null === n.parent) return e.wrapResult(n.children[0]._decode(e, t));
            var r, i = n.default,
                o = !0,
                s = null;
            if (null !== n.key && (s = e.enterKey(n.key)), n.optional) {
                var c = null;
                if (null !== n.explicit ? c = n.explicit : null !== n.implicit ? c = n.implicit : null !== n.tag && (c = n.tag), null !== c || n.any) {
                    if (o = this._peekTag(e, c, n.any), e.isError(o)) return o
                } else {
                    var f = e.save();
                    try {
                        null === n.choice ? this._decodeGeneric(n.tag, e, t) : this._decodeChoice(e, t), o = !0
                    } catch (e) {
                        o = !1
                    }
                    e.restore(f)
                }
            }
            if (n.obj && o && (r = e.enterObject()), o) {
                if (null !== n.explicit) {
                    var h = this._decodeTag(e, n.explicit);
                    if (e.isError(h)) return h;
                    e = h
                }
                var d = e.offset;
                if (null === n.use && null === n.choice) {
                    if (n.any) f = e.save();
                    var u = this._decodeTag(e, null !== n.implicit ? n.implicit : n.tag, n.any);
                    if (e.isError(u)) return u;
                    n.any ? i = e.raw(f) : e = u
                }
                if (t && t.track && null !== n.tag && t.track(e.path(), d, e.length, "tagged"), t && t.track && null !== n.tag && t.track(e.path(), e.offset, e.length, "content"), i = n.any ? i : null === n.choice ? this._decodeGeneric(n.tag, e, t) : this._decodeChoice(e, t), e.isError(i)) return i;
                if (n.any || null !== n.choice || null === n.children || n.children.forEach(function(n) {
                        n._decode(e, t)
                    }), n.contains && ("octstr" === n.tag || "bitstr" === n.tag)) {
                    var l = new a(i);
                    i = this._getUse(n.contains, e._reporterState.obj)._decode(l, t)
                }
            }
            return n.obj && o && (i = e.leaveObject(r)), null === n.key || null === i && !0 !== o ? null !== s && e.exitKey(s) : e.leaveKey(s, n.key, i), i
        }, f.prototype._decodeGeneric = function(e, t, n) {
            var r = this._baseState;
            return "seq" === e || "set" === e ? null : "seqof" === e || "setof" === e ? this._decodeList(t, e, r.args[0], n) : /str$/.test(e) ? this._decodeStr(t, e, n) : "objid" === e && r.args ? this._decodeObjid(t, r.args[0], r.args[1], n) : "objid" === e ? this._decodeObjid(t, null, null, n) : "gentime" === e || "utctime" === e ? this._decodeTime(t, e, n) : "null_" === e ? this._decodeNull(t, n) : "bool" === e ? this._decodeBool(t, n) : "objDesc" === e ? this._decodeStr(t, e, n) : "int" === e || "enum" === e ? this._decodeInt(t, r.args && r.args[0], n) : null !== r.use ? this._getUse(r.use, t._reporterState.obj)._decode(t, n) : t.error("unknown tag: " + e)
        }, f.prototype._getUse = function(e, t) {
            var n = this._baseState;
            return n.useDecoder = this._use(e, t), o(null === n.useDecoder._baseState.parent), n.useDecoder = n.useDecoder._baseState.children[0], n.implicit !== n.useDecoder._baseState.implicit && (n.useDecoder = n.useDecoder.clone(), n.useDecoder._baseState.implicit = n.implicit), n.useDecoder
        }, f.prototype._decodeChoice = function(e, t) {
            var n = this._baseState,
                r = null,
                i = !1;
            return Object.keys(n.choice).some(function(a) {
                var o = e.save(),
                    s = n.choice[a];
                try {
                    var c = s._decode(e, t);
                    if (e.isError(c)) return !1;
                    r = {
                        type: a,
                        value: c
                    }, i = !0
                } catch (t) {
                    return e.restore(o), !1
                }
                return !0
            }, this), i ? r : e.error("Choice not matched")
        }, f.prototype._createEncoderBuffer = function(e) {
            return new i(e, this.reporter)
        }, f.prototype._encode = function(e, t, n) {
            var r = this._baseState;
            if (null === r.default || r.default !== e) {
                var i = this._encodeValue(e, t, n);
                if (void 0 !== i && !this._skipDefault(i, t, n)) return i
            }
        }, f.prototype._encodeValue = function(e, t, n) {
            var i = this._baseState;
            if (null === i.parent) return i.children[0]._encode(e, t || new r);
            var a = null;
            if (this.reporter = t, i.optional && void 0 === e) {
                if (null === i.default) return;
                e = i.default
            }
            var o = null,
                s = !1;
            if (i.any) a = this._createEncoderBuffer(e);
            else if (i.choice) a = this._encodeChoice(e, t);
            else if (i.contains) o = this._getUse(i.contains, n)._encode(e, t), s = !0;
            else if (i.children) o = i.children.map(function(n) {
                if ("null_" === n._baseState.tag) return n._encode(null, t, e);
                if (null === n._baseState.key) return t.error("Child should have a key");
                var r = t.enterKey(n._baseState.key);
                if ("object" != typeof e) return t.error("Child expected, but input is not object");
                var i = n._encode(e[n._baseState.key], t, e);
                return t.leaveKey(r), i
            }, this).filter(function(e) {
                return e
            }), o = this._createEncoderBuffer(o);
            else if ("seqof" === i.tag || "setof" === i.tag) {
                if (!i.args || 1 !== i.args.length) return t.error("Too many args for : " + i.tag);
                if (!Array.isArray(e)) return t.error("seqof/setof, but data is not Array");
                var c = this.clone();
                c._baseState.implicit = null, o = this._createEncoderBuffer(e.map(function(n) {
                    var r = this._baseState;
                    return this._getUse(r.args[0], e)._encode(n, t)
                }, c))
            } else null !== i.use ? a = this._getUse(i.use, n)._encode(e, t) : (o = this._encodePrimitive(i.tag, e), s = !0);
            if (!i.any && null === i.choice) {
                var f = null !== i.implicit ? i.implicit : i.tag,
                    h = null === i.implicit ? "universal" : "context";
                null === f ? null === i.use && t.error("Tag could be omitted only for .use()") : null === i.use && (a = this._encodeComposite(f, s, h, o))
            }
            return null !== i.explicit && (a = this._encodeComposite(i.explicit, !1, "context", a)), a
        }, f.prototype._encodeChoice = function(e, t) {
            var n = this._baseState,
                r = n.choice[e.type];
            return r || o(!1, e.type + " not found in " + JSON.stringify(Object.keys(n.choice))), r._encode(e.value, t)
        }, f.prototype._encodePrimitive = function(e, t) {
            var n = this._baseState;
            if (/str$/.test(e)) return this._encodeStr(t, e);
            if ("objid" === e && n.args) return this._encodeObjid(t, n.reverseArgs[0], n.args[1]);
            if ("objid" === e) return this._encodeObjid(t, null, null);
            if ("gentime" === e || "utctime" === e) return this._encodeTime(t, e);
            if ("null_" === e) return this._encodeNull();
            if ("int" === e || "enum" === e) return this._encodeInt(t, n.args && n.reverseArgs[0]);
            if ("bool" === e) return this._encodeBool(t);
            if ("objDesc" === e) return this._encodeStr(t, e);
            throw new Error("Unsupported tag: " + e)
        }, f.prototype._isNumstr = function(e) {
            return /^[0-9 ]*$/.test(e)
        }, f.prototype._isPrintstr = function(e) {
            return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e)
        }
    }, {
        "../base": 4,
        "minimalistic-assert": 105
    }],
    6: [function(e, t, n) {
        var r = e("inherits");

        function i(e) {
            this._reporterState = {
                obj: null,
                path: [],
                options: e || {},
                errors: []
            }
        }

        function a(e, t) {
            this.path = e, this.rethrow(t)
        }
        n.Reporter = i, i.prototype.isError = function(e) {
            return e instanceof a
        }, i.prototype.save = function() {
            var e = this._reporterState;
            return {
                obj: e.obj,
                pathLen: e.path.length
            }
        }, i.prototype.restore = function(e) {
            var t = this._reporterState;
            t.obj = e.obj, t.path = t.path.slice(0, e.pathLen)
        }, i.prototype.enterKey = function(e) {
            return this._reporterState.path.push(e)
        }, i.prototype.exitKey = function(e) {
            var t = this._reporterState;
            t.path = t.path.slice(0, e - 1)
        }, i.prototype.leaveKey = function(e, t, n) {
            var r = this._reporterState;
            this.exitKey(e), null !== r.obj && (r.obj[t] = n)
        }, i.prototype.path = function() {
            return this._reporterState.path.join("/")
        }, i.prototype.enterObject = function() {
            var e = this._reporterState,
                t = e.obj;
            return e.obj = {}, t
        }, i.prototype.leaveObject = function(e) {
            var t = this._reporterState,
                n = t.obj;
            return t.obj = e, n
        }, i.prototype.error = function(e) {
            var t, n = this._reporterState,
                r = e instanceof a;
            if (t = r ? e : new a(n.path.map(function(e) {
                    return "[" + JSON.stringify(e) + "]"
                }).join(""), e.message || e, e.stack), !n.options.partial) throw t;
            return r || n.errors.push(t), t
        }, i.prototype.wrapResult = function(e) {
            var t = this._reporterState;
            return t.options.partial ? {
                result: this.isError(e) ? null : e,
                errors: t.errors
            } : e
        }, r(a, Error), a.prototype.rethrow = function(e) {
            if (this.message = e + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, a), !this.stack) try {
                throw new Error(this.message)
            } catch (e) {
                this.stack = e.stack
            }
            return this
        }
    }, {
        inherits: 101
    }],
    7: [function(e, t, n) {
        var r = e("../constants");
        n.tagClass = {
            0: "universal",
            1: "application",
            2: "context",
            3: "private"
        }, n.tagClassByName = r._reverse(n.tagClass), n.tag = {
            0: "end",
            1: "bool",
            2: "int",
            3: "bitstr",
            4: "octstr",
            5: "null_",
            6: "objid",
            7: "objDesc",
            8: "external",
            9: "real",
            10: "enum",
            11: "embed",
            12: "utf8str",
            13: "relativeOid",
            16: "seq",
            17: "set",
            18: "numstr",
            19: "printstr",
            20: "t61str",
            21: "videostr",
            22: "ia5str",
            23: "utctime",
            24: "gentime",
            25: "graphstr",
            26: "iso646str",
            27: "genstr",
            28: "unistr",
            29: "charstr",
            30: "bmpstr"
        }, n.tagByName = r._reverse(n.tag)
    }, {
        "../constants": 8
    }],
    8: [function(e, t, n) {
        var r = n;
        r._reverse = function(e) {
            var t = {};
            return Object.keys(e).forEach(function(n) {
                (0 | n) == n && (n |= 0);
                var r = e[n];
                t[r] = n
            }), t
        }, r.der = e("./der")
    }, {
        "./der": 7
    }],
    9: [function(e, t, n) {
        var r = e("inherits"),
            i = e("../../asn1"),
            a = i.base,
            o = i.bignum,
            s = i.constants.der;

        function c(e) {
            this.enc = "der", this.name = e.name, this.entity = e, this.tree = new f, this.tree._init(e.body)
        }

        function f(e) {
            a.Node.call(this, "der", e)
        }

        function h(e, t) {
            var n = e.readUInt8(t);
            if (e.isError(n)) return n;
            var r = s.tagClass[n >> 6],
                i = 0 == (32 & n);
            if (31 == (31 & n)) {
                var a = n;
                for (n = 0; 128 == (128 & a);) {
                    if (a = e.readUInt8(t), e.isError(a)) return a;
                    n <<= 7, n |= 127 & a
                }
            } else n &= 31;
            return {
                cls: r,
                primitive: i,
                tag: n,
                tagStr: s.tag[n]
            }
        }

        function d(e, t, n) {
            var r = e.readUInt8(n);
            if (e.isError(r)) return r;
            if (!t && 128 === r) return null;
            if (0 == (128 & r)) return r;
            var i = 127 & r;
            if (i > 4) return e.error("length octect is too long");
            r = 0;
            for (var a = 0; a < i; a++) {
                r <<= 8;
                var o = e.readUInt8(n);
                if (e.isError(o)) return o;
                r |= o
            }
            return r
        }
        t.exports = c, c.prototype.decode = function(e, t) {
            return e instanceof a.DecoderBuffer || (e = new a.DecoderBuffer(e, t)), this.tree._decode(e, t)
        }, r(f, a.Node), f.prototype._peekTag = function(e, t, n) {
            if (e.isEmpty()) return !1;
            var r = e.save(),
                i = h(e, 'Failed to peek tag: "' + t + '"');
            return e.isError(i) ? i : (e.restore(r), i.tag === t || i.tagStr === t || i.tagStr + "of" === t || n)
        }, f.prototype._decodeTag = function(e, t, n) {
            var r = h(e, 'Failed to decode tag of "' + t + '"');
            if (e.isError(r)) return r;
            var i = d(e, r.primitive, 'Failed to get length of "' + t + '"');
            if (e.isError(i)) return i;
            if (!n && r.tag !== t && r.tagStr !== t && r.tagStr + "of" !== t) return e.error('Failed to match tag: "' + t + '"');
            if (r.primitive || null !== i) return e.skip(i, 'Failed to match body of: "' + t + '"');
            var a = e.save(),
                o = this._skipUntilEnd(e, 'Failed to skip indefinite length body: "' + this.tag + '"');
            return e.isError(o) ? o : (i = e.offset - a.offset, e.restore(a), e.skip(i, 'Failed to match body of: "' + t + '"'))
        }, f.prototype._skipUntilEnd = function(e, t) {
            for (;;) {
                var n = h(e, t);
                if (e.isError(n)) return n;
                var r, i = d(e, n.primitive, t);
                if (e.isError(i)) return i;
                if (r = n.primitive || null !== i ? e.skip(i) : this._skipUntilEnd(e, t), e.isError(r)) return r;
                if ("end" === n.tagStr) break
            }
        }, f.prototype._decodeList = function(e, t, n, r) {
            for (var i = []; !e.isEmpty();) {
                var a = this._peekTag(e, "end");
                if (e.isError(a)) return a;
                var o = n.decode(e, "der", r);
                if (e.isError(o) && a) break;
                i.push(o)
            }
            return i
        }, f.prototype._decodeStr = function(e, t) {
            if ("bitstr" === t) {
                var n = e.readUInt8();
                return e.isError(n) ? n : {
                    unused: n,
                    data: e.raw()
                }
            }
            if ("bmpstr" === t) {
                var r = e.raw();
                if (r.length % 2 == 1) return e.error("Decoding of string type: bmpstr length mismatch");
                for (var i = "", a = 0; a < r.length / 2; a++) i += String.fromCharCode(r.readUInt16BE(2 * a));
                return i
            }
            if ("numstr" === t) {
                var o = e.raw().toString("ascii");
                return this._isNumstr(o) ? o : e.error("Decoding of string type: numstr unsupported characters")
            }
            if ("octstr" === t) return e.raw();
            if ("objDesc" === t) return e.raw();
            if ("printstr" === t) {
                var s = e.raw().toString("ascii");
                return this._isPrintstr(s) ? s : e.error("Decoding of string type: printstr unsupported characters")
            }
            return /str$/.test(t) ? e.raw().toString() : e.error("Decoding of string type: " + t + " unsupported")
        }, f.prototype._decodeObjid = function(e, t, n) {
            for (var r, i = [], a = 0; !e.isEmpty();) {
                var o = e.readUInt8();
                a <<= 7, a |= 127 & o, 0 == (128 & o) && (i.push(a), a = 0)
            }
            128 & o && i.push(a);
            var s = i[0] / 40 | 0,
                c = i[0] % 40;
            if (r = n ? i : [s, c].concat(i.slice(1)), t) {
                var f = t[r.join(" ")];
                void 0 === f && (f = t[r.join(".")]), void 0 !== f && (r = f)
            }
            return r
        }, f.prototype._decodeTime = function(e, t) {
            var n = e.raw().toString();
            if ("gentime" === t) var r = 0 | n.slice(0, 4),
                i = 0 | n.slice(4, 6),
                a = 0 | n.slice(6, 8),
                o = 0 | n.slice(8, 10),
                s = 0 | n.slice(10, 12),
                c = 0 | n.slice(12, 14);
            else {
                if ("utctime" !== t) return e.error("Decoding " + t + " time is not supported yet");
                r = 0 | n.slice(0, 2), i = 0 | n.slice(2, 4), a = 0 | n.slice(4, 6), o = 0 | n.slice(6, 8), s = 0 | n.slice(8, 10), c = 0 | n.slice(10, 12);
                r = r < 70 ? 2e3 + r : 1900 + r
            }
            return Date.UTC(r, i - 1, a, o, s, c, 0)
        }, f.prototype._decodeNull = function(e) {
            return null
        }, f.prototype._decodeBool = function(e) {
            var t = e.readUInt8();
            return e.isError(t) ? t : 0 !== t
        }, f.prototype._decodeInt = function(e, t) {
            var n = e.raw(),
                r = new o(n);
            return t && (r = t[r.toString(10)] || r), r
        }, f.prototype._use = function(e, t) {
            return "function" == typeof e && (e = e(t)), e._getDecoder("der").tree
        }
    }, {
        "../../asn1": 1,
        inherits: 101
    }],
    10: [function(e, t, n) {
        var r = n;
        r.der = e("./der"), r.pem = e("./pem")
    }, {
        "./der": 9,
        "./pem": 11
    }],
    11: [function(e, t, n) {
        var r = e("inherits"),
            i = e("buffer").Buffer,
            a = e("./der");

        function o(e) {
            a.call(this, e), this.enc = "pem"
        }
        r(o, a), t.exports = o, o.prototype.decode = function(e, t) {
            for (var n = e.toString().split(/[\r\n]+/g), r = t.label.toUpperCase(), o = /^-----(BEGIN|END) ([^-]+)-----$/, s = -1, c = -1, f = 0; f < n.length; f++) {
                var h = n[f].match(o);
                if (null !== h && h[2] === r) {
                    if (-1 !== s) {
                        if ("END" !== h[1]) break;
                        c = f;
                        break
                    }
                    if ("BEGIN" !== h[1]) break;
                    s = f
                }
            }
            if (-1 === s || -1 === c) throw new Error("PEM section not found for: " + r);
            var d = n.slice(s + 1, c).join("");
            d.replace(/[^a-z0-9\+\/=]+/gi, "");
            var u = new i(d, "base64");
            return a.prototype.decode.call(this, u, t)
        }
    }, {
        "./der": 9,
        buffer: 47,
        inherits: 101
    }],
    12: [function(e, t, n) {
        var r = e("inherits"),
            i = e("buffer").Buffer,
            a = e("../../asn1"),
            o = a.base,
            s = a.constants.der;

        function c(e) {
            this.enc = "der", this.name = e.name, this.entity = e, this.tree = new f, this.tree._init(e.body)
        }

        function f(e) {
            o.Node.call(this, "der", e)
        }

        function h(e) {
            return e < 10 ? "0" + e : e
        }

        function d(e, t, n, r) {
            var i;
            if ("seqof" === e ? e = "seq" : "setof" === e && (e = "set"), s.tagByName.hasOwnProperty(e)) i = s.tagByName[e];
            else {
                if ("number" != typeof e || (0 | e) !== e) return r.error("Unknown tag: " + e);
                i = e
            }
            return i >= 31 ? r.error("Multi-octet tag encoding unsupported") : (t || (i |= 32), i |= s.tagClassByName[n || "universal"] << 6)
        }
        t.exports = c, c.prototype.encode = function(e, t) {
            return this.tree._encode(e, t).join()
        }, r(f, o.Node), f.prototype._encodeComposite = function(e, t, n, r) {
            var a, o = d(e, t, n, this.reporter);
            if (r.length < 128) return (a = new i(2))[0] = o, a[1] = r.length, this._createEncoderBuffer([a, r]);
            for (var s = 1, c = r.length; c >= 256; c >>= 8) s++;
            (a = new i(2 + s))[0] = o, a[1] = 128 | s;
            c = 1 + s;
            for (var f = r.length; f > 0; c--, f >>= 8) a[c] = 255 & f;
            return this._createEncoderBuffer([a, r])
        }, f.prototype._encodeStr = function(e, t) {
            if ("bitstr" === t) return this._createEncoderBuffer([0 | e.unused, e.data]);
            if ("bmpstr" === t) {
                for (var n = new i(2 * e.length), r = 0; r < e.length; r++) n.writeUInt16BE(e.charCodeAt(r), 2 * r);
                return this._createEncoderBuffer(n)
            }
            return "numstr" === t ? this._isNumstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : "printstr" === t ? this._isPrintstr(e) ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(t) ? this._createEncoderBuffer(e) : "objDesc" === t ? this._createEncoderBuffer(e) : this.reporter.error("Encoding of string type: " + t + " unsupported")
        }, f.prototype._encodeObjid = function(e, t, n) {
            if ("string" == typeof e) {
                if (!t) return this.reporter.error("string objid given, but no values map found");
                if (!t.hasOwnProperty(e)) return this.reporter.error("objid not found in values map");
                e = t[e].split(/[\s\.]+/g);
                for (var r = 0; r < e.length; r++) e[r] |= 0
            } else if (Array.isArray(e)) {
                e = e.slice();
                for (r = 0; r < e.length; r++) e[r] |= 0
            }
            if (!Array.isArray(e)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(e));
            if (!n) {
                if (e[1] >= 40) return this.reporter.error("Second objid identifier OOB");
                e.splice(0, 2, 40 * e[0] + e[1])
            }
            var a = 0;
            for (r = 0; r < e.length; r++) {
                var o = e[r];
                for (a++; o >= 128; o >>= 7) a++
            }
            var s = new i(a),
                c = s.length - 1;
            for (r = e.length - 1; r >= 0; r--) {
                o = e[r];
                for (s[c--] = 127 & o;
                    (o >>= 7) > 0;) s[c--] = 128 | 127 & o
            }
            return this._createEncoderBuffer(s)
        }, f.prototype._encodeTime = function(e, t) {
            var n, r = new Date(e);
            return "gentime" === t ? n = [h(r.getFullYear()), h(r.getUTCMonth() + 1), h(r.getUTCDate()), h(r.getUTCHours()), h(r.getUTCMinutes()), h(r.getUTCSeconds()), "Z"].join("") : "utctime" === t ? n = [h(r.getFullYear() % 100), h(r.getUTCMonth() + 1), h(r.getUTCDate()), h(r.getUTCHours()), h(r.getUTCMinutes()), h(r.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + t + " time is not supported yet"), this._encodeStr(n, "octstr")
        }, f.prototype._encodeNull = function() {
            return this._createEncoderBuffer("")
        }, f.prototype._encodeInt = function(e, t) {
            if ("string" == typeof e) {
                if (!t) return this.reporter.error("String int or enum given, but no values map");
                if (!t.hasOwnProperty(e)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(e));
                e = t[e]
            }
            if ("number" != typeof e && !i.isBuffer(e)) {
                var n = e.toArray();
                !e.sign && 128 & n[0] && n.unshift(0), e = new i(n)
            }
            if (i.isBuffer(e)) {
                var r = e.length;
                0 === e.length && r++;
                var a = new i(r);
                return e.copy(a), 0 === e.length && (a[0] = 0), this._createEncoderBuffer(a)
            }
            if (e < 128) return this._createEncoderBuffer(e);
            if (e < 256) return this._createEncoderBuffer([0, e]);
            r = 1;
            for (var o = e; o >= 256; o >>= 8) r++;
            for (o = (a = new Array(r)).length - 1; o >= 0; o--) a[o] = 255 & e, e >>= 8;
            return 128 & a[0] && a.unshift(0), this._createEncoderBuffer(new i(a))
        }, f.prototype._encodeBool = function(e) {
            return this._createEncoderBuffer(e ? 255 : 0)
        }, f.prototype._use = function(e, t) {
            return "function" == typeof e && (e = e(t)), e._getEncoder("der").tree
        }, f.prototype._skipDefault = function(e, t, n) {
            var r, i = this._baseState;
            if (null === i.default) return !1;
            var a = e.join();
            if (void 0 === i.defaultBuffer && (i.defaultBuffer = this._encodeValue(i.default, t, n).join()), a.length !== i.defaultBuffer.length) return !1;
            for (r = 0; r < a.length; r++)
                if (a[r] !== i.defaultBuffer[r]) return !1;
            return !0
        }
    }, {
        "../../asn1": 1,
        buffer: 47,
        inherits: 101
    }],
    13: [function(e, t, n) {
        var r = n;
        r.der = e("./der"), r.pem = e("./pem")
    }, {
        "./der": 12,
        "./pem": 14
    }],
    14: [function(e, t, n) {
        var r = e("inherits"),
            i = e("./der");

        function a(e) {
            i.call(this, e), this.enc = "pem"
        }
        r(a, i), t.exports = a, a.prototype.encode = function(e, t) {
            for (var n = i.prototype.encode.call(this, e).toString("base64"), r = ["-----BEGIN " + t.label + "-----"], a = 0; a < n.length; a += 64) r.push(n.slice(a, a + 64));
            return r.push("-----END " + t.label + "-----"), r.join("\n")
        }
    }, {
        "./der": 12,
        inherits: 101
    }],
    15: [function(e, t, n) {
        "use strict";
        n.byteLength = function(e) {
            var t = f(e),
                n = t[0],
                r = t[1];
            return 3 * (n + r) / 4 - r
        }, n.toByteArray = function(e) {
            var t, n, r = f(e),
                o = r[0],
                s = r[1],
                c = new a(h(e, o, s)),
                d = 0,
                u = s > 0 ? o - 4 : o;
            for (n = 0; n < u; n += 4) t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)], c[d++] = t >> 16 & 255, c[d++] = t >> 8 & 255, c[d++] = 255 & t;
            2 === s && (t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4, c[d++] = 255 & t);
            1 === s && (t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2, c[d++] = t >> 8 & 255, c[d++] = 255 & t);
            return c
        }, n.fromByteArray = function(e) {
            for (var t, n = e.length, i = n % 3, a = [], o = 0, s = n - i; o < s; o += 16383) a.push(u(e, o, o + 16383 > s ? s : o + 16383));
            1 === i ? (t = e[n - 1], a.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], a.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
            return a.join("")
        };
        for (var r = [], i = [], a = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = o.length; s < c; ++s) r[s] = o[s], i[o.charCodeAt(s)] = s;

        function f(e) {
            var t = e.length;
            if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
        }

        function h(e, t, n) {
            return 3 * (t + n) / 4 - n
        }

        function d(e) {
            return r[e >> 18 & 63] + r[e >> 12 & 63] + r[e >> 6 & 63] + r[63 & e]
        }

        function u(e, t, n) {
            for (var r, i = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), i.push(d(r));
            return i.join("")
        }
        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
    }, {}],
    16: [function(e, t, n) {
        (function(t, n) {
            "use strict";

            function r(e, t) {
                if (!e) throw new Error(t || "Assertion failed")
            }

            function i(e, t) {
                e.super_ = t;
                var n = function() {};
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            }

            function a(e, t, n) {
                if (a.isBN(e)) return e;
                this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (n = t, t = 10), this._init(e || 0, t || 10, n || "be"))
            }
            var o;
            "object" == typeof t ? t.exports = a : n.BN = a, a.BN = a, a.wordSize = 26;
            try {
                o = e("buffer").Buffer
            } catch (e) {}

            function s(e, t, n) {
                for (var r = 0, i = Math.min(e.length, n), a = t; a < i; a++) {
                    var o = e.charCodeAt(a) - 48;
                    r <<= 4, r |= o >= 49 && o <= 54 ? o - 49 + 10 : o >= 17 && o <= 22 ? o - 17 + 10 : 15 & o
                }
                return r
            }

            function c(e, t, n, r) {
                for (var i = 0, a = Math.min(e.length, n), o = t; o < a; o++) {
                    var s = e.charCodeAt(o) - 48;
                    i *= r, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                }
                return i
            }
            a.isBN = function(e) {
                return e instanceof a || null !== e && "object" == typeof e && e.constructor.wordSize === a.wordSize && Array.isArray(e.words)
            }, a.max = function(e, t) {
                return e.cmp(t) > 0 ? e : t
            }, a.min = function(e, t) {
                return e.cmp(t) < 0 ? e : t
            }, a.prototype._init = function(e, t, n) {
                if ("number" == typeof e) return this._initNumber(e, t, n);
                if ("object" == typeof e) return this._initArray(e, t, n);
                "hex" === t && (t = 16), r(t === (0 | t) && t >= 2 && t <= 36);
                var i = 0;
                "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++, 16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i), "-" === e[0] && (this.negative = 1), this.strip(), "le" === n && this._initArray(this.toArray(), t, n)
            }, a.prototype._initNumber = function(e, t, n) {
                e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (r(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === n && this._initArray(this.toArray(), t, n)
            }, a.prototype._initArray = function(e, t, n) {
                if (r("number" == typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
                for (var i = 0; i < this.length; i++) this.words[i] = 0;
                var a, o, s = 0;
                if ("be" === n)
                    for (i = e.length - 1, a = 0; i >= 0; i -= 3) o = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[a] |= o << s & 67108863, this.words[a + 1] = o >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, a++);
                else if ("le" === n)
                    for (i = 0, a = 0; i < e.length; i += 3) o = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[a] |= o << s & 67108863, this.words[a + 1] = o >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, a++);
                return this.strip()
            }, a.prototype._parseHex = function(e, t) {
                this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
                for (var n = 0; n < this.length; n++) this.words[n] = 0;
                var r, i, a = 0;
                for (n = e.length - 6, r = 0; n >= t; n -= 6) i = s(e, n, n + 6), this.words[r] |= i << a & 67108863, this.words[r + 1] |= i >>> 26 - a & 4194303, (a += 24) >= 26 && (a -= 26, r++);
                n + 6 !== t && (i = s(e, t, n + 6), this.words[r] |= i << a & 67108863, this.words[r + 1] |= i >>> 26 - a & 4194303), this.strip()
            }, a.prototype._parseBase = function(e, t, n) {
                this.words = [0], this.length = 1;
                for (var r = 0, i = 1; i <= 67108863; i *= t) r++;
                r--, i = i / t | 0;
                for (var a = e.length - n, o = a % r, s = Math.min(a, a - o) + n, f = 0, h = n; h < s; h += r) f = c(e, h, h + r, t), this.imuln(i), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
                if (0 !== o) {
                    var d = 1;
                    for (f = c(e, h, e.length, t), h = 0; h < o; h++) d *= t;
                    this.imuln(d), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f)
                }
            }, a.prototype.copy = function(e) {
                e.words = new Array(this.length);
                for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                e.length = this.length, e.negative = this.negative, e.red = this.red
            }, a.prototype.clone = function() {
                var e = new a(null);
                return this.copy(e), e
            }, a.prototype._expand = function(e) {
                for (; this.length < e;) this.words[this.length++] = 0;
                return this
            }, a.prototype.strip = function() {
                for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                return this._normSign()
            }, a.prototype._normSign = function() {
                return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
            }, a.prototype.inspect = function() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            };
            var f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                d = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

            function u(e) {
                for (var t = new Array(e.bitLength()), n = 0; n < t.length; n++) {
                    var r = n / 26 | 0,
                        i = n % 26;
                    t[n] = (e.words[r] & 1 << i) >>> i
                }
                return t
            }

            function l(e, t, n) {
                n.negative = t.negative ^ e.negative;
                var r = e.length + t.length | 0;
                n.length = r, r = r - 1 | 0;
                var i = 0 | e.words[0],
                    a = 0 | t.words[0],
                    o = i * a,
                    s = 67108863 & o,
                    c = o / 67108864 | 0;
                n.words[0] = s;
                for (var f = 1; f < r; f++) {
                    for (var h = c >>> 26, d = 67108863 & c, u = Math.min(f, t.length - 1), l = Math.max(0, f - e.length + 1); l <= u; l++) {
                        var p = f - l | 0;
                        h += (o = (i = 0 | e.words[p]) * (a = 0 | t.words[l]) + d) / 67108864 | 0, d = 67108863 & o
                    }
                    n.words[f] = 0 | d, c = 0 | h
                }
                return 0 !== c ? n.words[f] = 0 | c : n.length--, n.strip()
            }
            a.prototype.toString = function(e, t) {
                var n;
                if (e = e || 10, t = 0 | t || 1, 16 === e || "hex" === e) {
                    n = "";
                    for (var i = 0, a = 0, o = 0; o < this.length; o++) {
                        var s = this.words[o],
                            c = (16777215 & (s << i | a)).toString(16);
                        n = 0 !== (a = s >>> 24 - i & 16777215) || o !== this.length - 1 ? f[6 - c.length] + c + n : c + n, (i += 2) >= 26 && (i -= 26, o--)
                    }
                    for (0 !== a && (n = a.toString(16) + n); n.length % t != 0;) n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n), n
                }
                if (e === (0 | e) && e >= 2 && e <= 36) {
                    var u = h[e],
                        l = d[e];
                    n = "";
                    var p = this.clone();
                    for (p.negative = 0; !p.isZero();) {
                        var b = p.modn(l).toString(e);
                        n = (p = p.idivn(l)).isZero() ? b + n : f[u - b.length] + b + n
                    }
                    for (this.isZero() && (n = "0" + n); n.length % t != 0;) n = "0" + n;
                    return 0 !== this.negative && (n = "-" + n), n
                }
                r(!1, "Base should be between 2 and 36")
            }, a.prototype.toNumber = function() {
                var e = this.words[0];
                return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
            }, a.prototype.toJSON = function() {
                return this.toString(16)
            }, a.prototype.toBuffer = function(e, t) {
                return r(void 0 !== o), this.toArrayLike(o, e, t)
            }, a.prototype.toArray = function(e, t) {
                return this.toArrayLike(Array, e, t)
            }, a.prototype.toArrayLike = function(e, t, n) {
                var i = this.byteLength(),
                    a = n || Math.max(1, i);
                r(i <= a, "byte array longer than desired length"), r(a > 0, "Requested array length <= 0"), this.strip();
                var o, s, c = "le" === t,
                    f = new e(a),
                    h = this.clone();
                if (c) {
                    for (s = 0; !h.isZero(); s++) o = h.andln(255), h.iushrn(8), f[s] = o;
                    for (; s < a; s++) f[s] = 0
                } else {
                    for (s = 0; s < a - i; s++) f[s] = 0;
                    for (s = 0; !h.isZero(); s++) o = h.andln(255), h.iushrn(8), f[a - s - 1] = o
                }
                return f
            }, Math.clz32 ? a.prototype._countBits = function(e) {
                return 32 - Math.clz32(e)
            } : a.prototype._countBits = function(e) {
                var t = e,
                    n = 0;
                return t >= 4096 && (n += 13, t >>>= 13), t >= 64 && (n += 7, t >>>= 7), t >= 8 && (n += 4, t >>>= 4), t >= 2 && (n += 2, t >>>= 2), n + t
            }, a.prototype._zeroBits = function(e) {
                if (0 === e) return 26;
                var t = e,
                    n = 0;
                return 0 == (8191 & t) && (n += 13, t >>>= 13), 0 == (127 & t) && (n += 7, t >>>= 7), 0 == (15 & t) && (n += 4, t >>>= 4), 0 == (3 & t) && (n += 2, t >>>= 2), 0 == (1 & t) && n++, n
            }, a.prototype.bitLength = function() {
                var e = this.words[this.length - 1],
                    t = this._countBits(e);
                return 26 * (this.length - 1) + t
            }, a.prototype.zeroBits = function() {
                if (this.isZero()) return 0;
                for (var e = 0, t = 0; t < this.length; t++) {
                    var n = this._zeroBits(this.words[t]);
                    if (e += n, 26 !== n) break
                }
                return e
            }, a.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }, a.prototype.toTwos = function(e) {
                return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
            }, a.prototype.fromTwos = function(e) {
                return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
            }, a.prototype.isNeg = function() {
                return 0 !== this.negative
            }, a.prototype.neg = function() {
                return this.clone().ineg()
            }, a.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1), this
            }, a.prototype.iuor = function(e) {
                for (; this.length < e.length;) this.words[this.length++] = 0;
                for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                return this.strip()
            }, a.prototype.ior = function(e) {
                return r(0 == (this.negative | e.negative)), this.iuor(e)
            }, a.prototype.or = function(e) {
                return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
            }, a.prototype.uor = function(e) {
                return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
            }, a.prototype.iuand = function(e) {
                var t;
                t = this.length > e.length ? e : this;
                for (var n = 0; n < t.length; n++) this.words[n] = this.words[n] & e.words[n];
                return this.length = t.length, this.strip()
            }, a.prototype.iand = function(e) {
                return r(0 == (this.negative | e.negative)), this.iuand(e)
            }, a.prototype.and = function(e) {
                return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
            }, a.prototype.uand = function(e) {
                return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
            }, a.prototype.iuxor = function(e) {
                var t, n;
                this.length > e.length ? (t = this, n = e) : (t = e, n = this);
                for (var r = 0; r < n.length; r++) this.words[r] = t.words[r] ^ n.words[r];
                if (this !== t)
                    for (; r < t.length; r++) this.words[r] = t.words[r];
                return this.length = t.length, this.strip()
            }, a.prototype.ixor = function(e) {
                return r(0 == (this.negative | e.negative)), this.iuxor(e)
            }, a.prototype.xor = function(e) {
                return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
            }, a.prototype.uxor = function(e) {
                return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
            }, a.prototype.inotn = function(e) {
                r("number" == typeof e && e >= 0);
                var t = 0 | Math.ceil(e / 26),
                    n = e % 26;
                this._expand(t), n > 0 && t--;
                for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
                return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this.strip()
            }, a.prototype.notn = function(e) {
                return this.clone().inotn(e)
            }, a.prototype.setn = function(e, t) {
                r("number" == typeof e && e >= 0);
                var n = e / 26 | 0,
                    i = e % 26;
                return this._expand(n + 1), this.words[n] = t ? this.words[n] | 1 << i : this.words[n] & ~(1 << i), this.strip()
            }, a.prototype.iadd = function(e) {
                var t, n, r;
                if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                this.length > e.length ? (n = this, r = e) : (n = e, r = this);
                for (var i = 0, a = 0; a < r.length; a++) t = (0 | n.words[a]) + (0 | r.words[a]) + i, this.words[a] = 67108863 & t, i = t >>> 26;
                for (; 0 !== i && a < n.length; a++) t = (0 | n.words[a]) + i, this.words[a] = 67108863 & t, i = t >>> 26;
                if (this.length = n.length, 0 !== i) this.words[this.length] = i, this.length++;
                else if (n !== this)
                    for (; a < n.length; a++) this.words[a] = n.words[a];
                return this
            }, a.prototype.add = function(e) {
                var t;
                return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
            }, a.prototype.isub = function(e) {
                if (0 !== e.negative) {
                    e.negative = 0;
                    var t = this.iadd(e);
                    return e.negative = 1, t._normSign()
                }
                if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                var n, r, i = this.cmp(e);
                if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                i > 0 ? (n = this, r = e) : (n = e, r = this);
                for (var a = 0, o = 0; o < r.length; o++) a = (t = (0 | n.words[o]) - (0 | r.words[o]) + a) >> 26, this.words[o] = 67108863 & t;
                for (; 0 !== a && o < n.length; o++) a = (t = (0 | n.words[o]) + a) >> 26, this.words[o] = 67108863 & t;
                if (0 === a && o < n.length && n !== this)
                    for (; o < n.length; o++) this.words[o] = n.words[o];
                return this.length = Math.max(this.length, o), n !== this && (this.negative = 1), this.strip()
            }, a.prototype.sub = function(e) {
                return this.clone().isub(e)
            };
            var p = function(e, t, n) {
                var r, i, a, o = e.words,
                    s = t.words,
                    c = n.words,
                    f = 0,
                    h = 0 | o[0],
                    d = 8191 & h,
                    u = h >>> 13,
                    l = 0 | o[1],
                    p = 8191 & l,
                    b = l >>> 13,
                    y = 0 | o[2],
                    m = 8191 & y,
                    g = y >>> 13,
                    v = 0 | o[3],
                    _ = 8191 & v,
                    C = v >>> 13,
                    w = 0 | o[4],
                    B = 8191 & w,
                    S = w >>> 13,
                    M = 0 | o[5],
                    N = 8191 & M,
                    E = M >>> 13,
                    k = 0 | o[6],
                    A = 8191 & k,
                    x = k >>> 13,
                    D = 0 | o[7],
                    I = 8191 & D,
                    L = D >>> 13,
                    P = 0 | o[8],
                    T = 8191 & P,
                    R = P >>> 13,
                    j = 0 | o[9],
                    O = 8191 & j,
                    U = j >>> 13,
                    z = 0 | s[0],
                    q = 8191 & z,
                    G = z >>> 13,
                    K = 0 | s[1],
                    F = 8191 & K,
                    W = K >>> 13,
                    H = 0 | s[2],
                    V = 8191 & H,
                    Y = H >>> 13,
                    X = 0 | s[3],
                    Z = 8191 & X,
                    J = X >>> 13,
                    Q = 0 | s[4],
                    $ = 8191 & Q,
                    ee = Q >>> 13,
                    te = 0 | s[5],
                    ne = 8191 & te,
                    re = te >>> 13,
                    ie = 0 | s[6],
                    ae = 8191 & ie,
                    oe = ie >>> 13,
                    se = 0 | s[7],
                    ce = 8191 & se,
                    fe = se >>> 13,
                    he = 0 | s[8],
                    de = 8191 & he,
                    ue = he >>> 13,
                    le = 0 | s[9],
                    pe = 8191 & le,
                    be = le >>> 13;
                n.negative = e.negative ^ t.negative, n.length = 19;
                var ye = (f + (r = Math.imul(d, q)) | 0) + ((8191 & (i = (i = Math.imul(d, G)) + Math.imul(u, q) | 0)) << 13) | 0;
                f = ((a = Math.imul(u, G)) + (i >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, r = Math.imul(p, q), i = (i = Math.imul(p, G)) + Math.imul(b, q) | 0, a = Math.imul(b, G);
                var me = (f + (r = r + Math.imul(d, F) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, W) | 0) + Math.imul(u, F) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(u, W) | 0) + (i >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, r = Math.imul(m, q), i = (i = Math.imul(m, G)) + Math.imul(g, q) | 0, a = Math.imul(g, G), r = r + Math.imul(p, F) | 0, i = (i = i + Math.imul(p, W) | 0) + Math.imul(b, F) | 0, a = a + Math.imul(b, W) | 0;
                var ge = (f + (r = r + Math.imul(d, V) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, Y) | 0) + Math.imul(u, V) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(u, Y) | 0) + (i >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, r = Math.imul(_, q), i = (i = Math.imul(_, G)) + Math.imul(C, q) | 0, a = Math.imul(C, G), r = r + Math.imul(m, F) | 0, i = (i = i + Math.imul(m, W) | 0) + Math.imul(g, F) | 0, a = a + Math.imul(g, W) | 0, r = r + Math.imul(p, V) | 0, i = (i = i + Math.imul(p, Y) | 0) + Math.imul(b, V) | 0, a = a + Math.imul(b, Y) | 0;
                var ve = (f + (r = r + Math.imul(d, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, J) | 0) + Math.imul(u, Z) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(u, J) | 0) + (i >>> 13) | 0) + (ve >>> 26) | 0, ve &= 67108863, r = Math.imul(B, q), i = (i = Math.imul(B, G)) + Math.imul(S, q) | 0, a = Math.imul(S, G), r = r + Math.imul(_, F) | 0, i = (i = i + Math.imul(_, W) | 0) + Math.imul(C, F) | 0, a = a + Math.imul(C, W) | 0, r = r + Math.imul(m, V) | 0, i = (i = i + Math.imul(m, Y) | 0) + Math.imul(g, V) | 0, a = a + Math.imul(g, Y) | 0, r = r + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, J) | 0) + Math.imul(b, Z) | 0, a = a + Math.imul(b, J) | 0;
                var _e = (f + (r = r + Math.imul(d, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ee) | 0) + Math.imul(u, $) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(u, ee) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, r = Math.imul(N, q), i = (i = Math.imul(N, G)) + Math.imul(E, q) | 0, a = Math.imul(E, G), r = r + Math.imul(B, F) | 0, i = (i = i + Math.imul(B, W) | 0) + Math.imul(S, F) | 0, a = a + Math.imul(S, W) | 0, r = r + Math.imul(_, V) | 0, i = (i = i + Math.imul(_, Y) | 0) + Math.imul(C, V) | 0, a = a + Math.imul(C, Y) | 0, r = r + Math.imul(m, Z) | 0, i = (i = i + Math.imul(m, J) | 0) + Math.imul(g, Z) | 0, a = a + Math.imul(g, J) | 0, r = r + Math.imul(p, $) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(b, $) | 0, a = a + Math.imul(b, ee) | 0;
                var Ce = (f + (r = r + Math.imul(d, ne) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, re) | 0) + Math.imul(u, ne) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(u, re) | 0) + (i >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, r = Math.imul(A, q), i = (i = Math.imul(A, G)) + Math.imul(x, q) | 0, a = Math.imul(x, G), r = r + Math.imul(N, F) | 0, i = (i = i + Math.imul(N, W) | 0) + Math.imul(E, F) | 0, a = a + Math.imul(E, W) | 0, r = r + Math.imul(B, V) | 0, i = (i = i + Math.imul(B, Y) | 0) + Math.imul(S, V) | 0, a = a + Math.imul(S, Y) | 0, r = r + Math.imul(_, Z) | 0, i = (i = i + Math.imul(_, J) | 0) + Math.imul(C, Z) | 0, a = a + Math.imul(C, J) | 0, r = r + Math.imul(m, $) | 0, i = (i = i + Math.imul(m, ee) | 0) + Math.imul(g, $) | 0, a = a + Math.imul(g, ee) | 0, r = r + Math.imul(p, ne) | 0, i = (i = i + Math.imul(p, re) | 0) + Math.imul(b, ne) | 0, a = a + Math.imul(b, re) | 0;
                var we = (f + (r = r + Math.imul(d, ae) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, oe) | 0) + Math.imul(u, ae) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(u, oe) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, r = Math.imul(I, q), i = (i = Math.imul(I, G)) + Math.imul(L, q) | 0, a = Math.imul(L, G), r = r + Math.imul(A, F) | 0, i = (i = i + Math.imul(A, W) | 0) + Math.imul(x, F) | 0, a = a + Math.imul(x, W) | 0, r = r + Math.imul(N, V) | 0, i = (i = i + Math.imul(N, Y) | 0) + Math.imul(E, V) | 0, a = a + Math.imul(E, Y) | 0, r = r + Math.imul(B, Z) | 0, i = (i = i + Math.imul(B, J) | 0) + Math.imul(S, Z) | 0, a = a + Math.imul(S, J) | 0, r = r + Math.imul(_, $) | 0, i = (i = i + Math.imul(_, ee) | 0) + Math.imul(C, $) | 0, a = a + Math.imul(C, ee) | 0, r = r + Math.imul(m, ne) | 0, i = (i = i + Math.imul(m, re) | 0) + Math.imul(g, ne) | 0, a = a + Math.imul(g, re) | 0, r = r + Math.imul(p, ae) | 0, i = (i = i + Math.imul(p, oe) | 0) + Math.imul(b, ae) | 0, a = a + Math.imul(b, oe) | 0;
                var Be = (f + (r = r + Math.imul(d, ce) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, fe) | 0) + Math.imul(u, ce) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(u, fe) | 0) + (i >>> 13) | 0) + (Be >>> 26) | 0, Be &= 67108863, r = Math.imul(T, q), i = (i = Math.imul(T, G)) + Math.imul(R, q) | 0, a = Math.imul(R, G), r = r + Math.imul(I, F) | 0, i = (i = i + Math.imul(I, W) | 0) + Math.imul(L, F) | 0, a = a + Math.imul(L, W) | 0, r = r + Math.imul(A, V) | 0, i = (i = i + Math.imul(A, Y) | 0) + Math.imul(x, V) | 0, a = a + Math.imul(x, Y) | 0, r = r + Math.imul(N, Z) | 0, i = (i = i + Math.imul(N, J) | 0) + Math.imul(E, Z) | 0, a = a + Math.imul(E, J) | 0, r = r + Math.imul(B, $) | 0, i = (i = i + Math.imul(B, ee) | 0) + Math.imul(S, $) | 0, a = a + Math.imul(S, ee) | 0, r = r + Math.imul(_, ne) | 0, i = (i = i + Math.imul(_, re) | 0) + Math.imul(C, ne) | 0, a = a + Math.imul(C, re) | 0, r = r + Math.imul(m, ae) | 0, i = (i = i + Math.imul(m, oe) | 0) + Math.imul(g, ae) | 0, a = a + Math.imul(g, oe) | 0, r = r + Math.imul(p, ce) | 0, i = (i = i + Math.imul(p, fe) | 0) + Math.imul(b, ce) | 0, a = a + Math.imul(b, fe) | 0;
                var Se = (f + (r = r + Math.imul(d, de) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, ue) | 0) + Math.imul(u, de) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(u, ue) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, r = Math.imul(O, q), i = (i = Math.imul(O, G)) + Math.imul(U, q) | 0, a = Math.imul(U, G), r = r + Math.imul(T, F) | 0, i = (i = i + Math.imul(T, W) | 0) + Math.imul(R, F) | 0, a = a + Math.imul(R, W) | 0, r = r + Math.imul(I, V) | 0, i = (i = i + Math.imul(I, Y) | 0) + Math.imul(L, V) | 0, a = a + Math.imul(L, Y) | 0, r = r + Math.imul(A, Z) | 0, i = (i = i + Math.imul(A, J) | 0) + Math.imul(x, Z) | 0, a = a + Math.imul(x, J) | 0, r = r + Math.imul(N, $) | 0, i = (i = i + Math.imul(N, ee) | 0) + Math.imul(E, $) | 0, a = a + Math.imul(E, ee) | 0, r = r + Math.imul(B, ne) | 0, i = (i = i + Math.imul(B, re) | 0) + Math.imul(S, ne) | 0, a = a + Math.imul(S, re) | 0, r = r + Math.imul(_, ae) | 0, i = (i = i + Math.imul(_, oe) | 0) + Math.imul(C, ae) | 0, a = a + Math.imul(C, oe) | 0, r = r + Math.imul(m, ce) | 0, i = (i = i + Math.imul(m, fe) | 0) + Math.imul(g, ce) | 0, a = a + Math.imul(g, fe) | 0, r = r + Math.imul(p, de) | 0, i = (i = i + Math.imul(p, ue) | 0) + Math.imul(b, de) | 0, a = a + Math.imul(b, ue) | 0;
                var Me = (f + (r = r + Math.imul(d, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(d, be) | 0) + Math.imul(u, pe) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(u, be) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, r = Math.imul(O, F), i = (i = Math.imul(O, W)) + Math.imul(U, F) | 0, a = Math.imul(U, W), r = r + Math.imul(T, V) | 0, i = (i = i + Math.imul(T, Y) | 0) + Math.imul(R, V) | 0, a = a + Math.imul(R, Y) | 0, r = r + Math.imul(I, Z) | 0, i = (i = i + Math.imul(I, J) | 0) + Math.imul(L, Z) | 0, a = a + Math.imul(L, J) | 0, r = r + Math.imul(A, $) | 0, i = (i = i + Math.imul(A, ee) | 0) + Math.imul(x, $) | 0, a = a + Math.imul(x, ee) | 0, r = r + Math.imul(N, ne) | 0, i = (i = i + Math.imul(N, re) | 0) + Math.imul(E, ne) | 0, a = a + Math.imul(E, re) | 0, r = r + Math.imul(B, ae) | 0, i = (i = i + Math.imul(B, oe) | 0) + Math.imul(S, ae) | 0, a = a + Math.imul(S, oe) | 0, r = r + Math.imul(_, ce) | 0, i = (i = i + Math.imul(_, fe) | 0) + Math.imul(C, ce) | 0, a = a + Math.imul(C, fe) | 0, r = r + Math.imul(m, de) | 0, i = (i = i + Math.imul(m, ue) | 0) + Math.imul(g, de) | 0, a = a + Math.imul(g, ue) | 0;
                var Ne = (f + (r = r + Math.imul(p, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, be) | 0) + Math.imul(b, pe) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(b, be) | 0) + (i >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, r = Math.imul(O, V), i = (i = Math.imul(O, Y)) + Math.imul(U, V) | 0, a = Math.imul(U, Y), r = r + Math.imul(T, Z) | 0, i = (i = i + Math.imul(T, J) | 0) + Math.imul(R, Z) | 0, a = a + Math.imul(R, J) | 0, r = r + Math.imul(I, $) | 0, i = (i = i + Math.imul(I, ee) | 0) + Math.imul(L, $) | 0, a = a + Math.imul(L, ee) | 0, r = r + Math.imul(A, ne) | 0, i = (i = i + Math.imul(A, re) | 0) + Math.imul(x, ne) | 0, a = a + Math.imul(x, re) | 0, r = r + Math.imul(N, ae) | 0, i = (i = i + Math.imul(N, oe) | 0) + Math.imul(E, ae) | 0, a = a + Math.imul(E, oe) | 0, r = r + Math.imul(B, ce) | 0, i = (i = i + Math.imul(B, fe) | 0) + Math.imul(S, ce) | 0, a = a + Math.imul(S, fe) | 0, r = r + Math.imul(_, de) | 0, i = (i = i + Math.imul(_, ue) | 0) + Math.imul(C, de) | 0, a = a + Math.imul(C, ue) | 0;
                var Ee = (f + (r = r + Math.imul(m, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(m, be) | 0) + Math.imul(g, pe) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(g, be) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, r = Math.imul(O, Z), i = (i = Math.imul(O, J)) + Math.imul(U, Z) | 0, a = Math.imul(U, J), r = r + Math.imul(T, $) | 0, i = (i = i + Math.imul(T, ee) | 0) + Math.imul(R, $) | 0, a = a + Math.imul(R, ee) | 0, r = r + Math.imul(I, ne) | 0, i = (i = i + Math.imul(I, re) | 0) + Math.imul(L, ne) | 0, a = a + Math.imul(L, re) | 0, r = r + Math.imul(A, ae) | 0, i = (i = i + Math.imul(A, oe) | 0) + Math.imul(x, ae) | 0, a = a + Math.imul(x, oe) | 0, r = r + Math.imul(N, ce) | 0, i = (i = i + Math.imul(N, fe) | 0) + Math.imul(E, ce) | 0, a = a + Math.imul(E, fe) | 0, r = r + Math.imul(B, de) | 0, i = (i = i + Math.imul(B, ue) | 0) + Math.imul(S, de) | 0, a = a + Math.imul(S, ue) | 0;
                var ke = (f + (r = r + Math.imul(_, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, be) | 0) + Math.imul(C, pe) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(C, be) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, r = Math.imul(O, $), i = (i = Math.imul(O, ee)) + Math.imul(U, $) | 0, a = Math.imul(U, ee), r = r + Math.imul(T, ne) | 0, i = (i = i + Math.imul(T, re) | 0) + Math.imul(R, ne) | 0, a = a + Math.imul(R, re) | 0, r = r + Math.imul(I, ae) | 0, i = (i = i + Math.imul(I, oe) | 0) + Math.imul(L, ae) | 0, a = a + Math.imul(L, oe) | 0, r = r + Math.imul(A, ce) | 0, i = (i = i + Math.imul(A, fe) | 0) + Math.imul(x, ce) | 0, a = a + Math.imul(x, fe) | 0, r = r + Math.imul(N, de) | 0, i = (i = i + Math.imul(N, ue) | 0) + Math.imul(E, de) | 0, a = a + Math.imul(E, ue) | 0;
                var Ae = (f + (r = r + Math.imul(B, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(B, be) | 0) + Math.imul(S, pe) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(S, be) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, r = Math.imul(O, ne), i = (i = Math.imul(O, re)) + Math.imul(U, ne) | 0, a = Math.imul(U, re), r = r + Math.imul(T, ae) | 0, i = (i = i + Math.imul(T, oe) | 0) + Math.imul(R, ae) | 0, a = a + Math.imul(R, oe) | 0, r = r + Math.imul(I, ce) | 0, i = (i = i + Math.imul(I, fe) | 0) + Math.imul(L, ce) | 0, a = a + Math.imul(L, fe) | 0, r = r + Math.imul(A, de) | 0, i = (i = i + Math.imul(A, ue) | 0) + Math.imul(x, de) | 0, a = a + Math.imul(x, ue) | 0;
                var xe = (f + (r = r + Math.imul(N, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(N, be) | 0) + Math.imul(E, pe) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(E, be) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, r = Math.imul(O, ae), i = (i = Math.imul(O, oe)) + Math.imul(U, ae) | 0, a = Math.imul(U, oe), r = r + Math.imul(T, ce) | 0, i = (i = i + Math.imul(T, fe) | 0) + Math.imul(R, ce) | 0, a = a + Math.imul(R, fe) | 0, r = r + Math.imul(I, de) | 0, i = (i = i + Math.imul(I, ue) | 0) + Math.imul(L, de) | 0, a = a + Math.imul(L, ue) | 0;
                var De = (f + (r = r + Math.imul(A, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(A, be) | 0) + Math.imul(x, pe) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(x, be) | 0) + (i >>> 13) | 0) + (De >>> 26) | 0, De &= 67108863, r = Math.imul(O, ce), i = (i = Math.imul(O, fe)) + Math.imul(U, ce) | 0, a = Math.imul(U, fe), r = r + Math.imul(T, de) | 0, i = (i = i + Math.imul(T, ue) | 0) + Math.imul(R, de) | 0, a = a + Math.imul(R, ue) | 0;
                var Ie = (f + (r = r + Math.imul(I, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(I, be) | 0) + Math.imul(L, pe) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(L, be) | 0) + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, r = Math.imul(O, de), i = (i = Math.imul(O, ue)) + Math.imul(U, de) | 0, a = Math.imul(U, ue);
                var Le = (f + (r = r + Math.imul(T, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, be) | 0) + Math.imul(R, pe) | 0)) << 13) | 0;
                f = ((a = a + Math.imul(R, be) | 0) + (i >>> 13) | 0) + (Le >>> 26) | 0, Le &= 67108863;
                var Pe = (f + (r = Math.imul(O, pe)) | 0) + ((8191 & (i = (i = Math.imul(O, be)) + Math.imul(U, pe) | 0)) << 13) | 0;
                return f = ((a = Math.imul(U, be)) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, c[0] = ye, c[1] = me, c[2] = ge, c[3] = ve, c[4] = _e, c[5] = Ce, c[6] = we, c[7] = Be, c[8] = Se, c[9] = Me, c[10] = Ne, c[11] = Ee, c[12] = ke, c[13] = Ae, c[14] = xe, c[15] = De, c[16] = Ie, c[17] = Le, c[18] = Pe, 0 !== f && (c[19] = f, n.length++), n
            };

            function b(e, t, n) {
                n.negative = t.negative ^ e.negative, n.length = e.length + t.length;
                for (var r = 0, i = 0, a = 0; a < n.length - 1; a++) {
                    var o = i;
                    i = 0;
                    for (var s = 67108863 & r, c = Math.min(a, t.length - 1), f = Math.max(0, a - e.length + 1); f <= c; f++) {
                        var h = a - f,
                            d = (0 | e.words[h]) * (0 | t.words[f]),
                            u = 67108863 & d;
                        s = 67108863 & (u = u + s | 0), i += (o = (o = o + (d / 67108864 | 0) | 0) + (u >>> 26) | 0) >>> 26, o &= 67108863
                    }
                    n.words[a] = s, r = o, o = i
                }
                return 0 !== r ? n.words[a] = r : n.length--, n.strip()
            }

            function y(e, t, n) {
                return (new m).mulp(e, t, n)
            }

            function m(e, t) {
                this.x = e, this.y = t
            }
            Math.imul || (p = l), a.prototype.mulTo = function(e, t) {
                var n = this.length + e.length;
                return 10 === this.length && 10 === e.length ? p(this, e, t) : n < 63 ? l(this, e, t) : n < 1024 ? b(this, e, t) : y(this, e, t)
            }, m.prototype.makeRBT = function(e) {
                for (var t = new Array(e), n = a.prototype._countBits(e) - 1, r = 0; r < e; r++) t[r] = this.revBin(r, n, e);
                return t
            }, m.prototype.revBin = function(e, t, n) {
                if (0 === e || e === n - 1) return e;
                for (var r = 0, i = 0; i < t; i++) r |= (1 & e) << t - i - 1, e >>= 1;
                return r
            }, m.prototype.permute = function(e, t, n, r, i, a) {
                for (var o = 0; o < a; o++) r[o] = t[e[o]], i[o] = n[e[o]]
            }, m.prototype.transform = function(e, t, n, r, i, a) {
                this.permute(a, e, t, n, r, i);
                for (var o = 1; o < i; o <<= 1)
                    for (var s = o << 1, c = Math.cos(2 * Math.PI / s), f = Math.sin(2 * Math.PI / s), h = 0; h < i; h += s)
                        for (var d = c, u = f, l = 0; l < o; l++) {
                            var p = n[h + l],
                                b = r[h + l],
                                y = n[h + l + o],
                                m = r[h + l + o],
                                g = d * y - u * m;
                            m = d * m + u * y, y = g, n[h + l] = p + y, r[h + l] = b + m, n[h + l + o] = p - y, r[h + l + o] = b - m, l !== s && (g = c * d - f * u, u = c * u + f * d, d = g)
                        }
            }, m.prototype.guessLen13b = function(e, t) {
                var n = 1 | Math.max(t, e),
                    r = 1 & n,
                    i = 0;
                for (n = n / 2 | 0; n; n >>>= 1) i++;
                return 1 << i + 1 + r
            }, m.prototype.conjugate = function(e, t, n) {
                if (!(n <= 1))
                    for (var r = 0; r < n / 2; r++) {
                        var i = e[r];
                        e[r] = e[n - r - 1], e[n - r - 1] = i, i = t[r], t[r] = -t[n - r - 1], t[n - r - 1] = -i
                    }
            }, m.prototype.normalize13b = function(e, t) {
                for (var n = 0, r = 0; r < t / 2; r++) {
                    var i = 8192 * Math.round(e[2 * r + 1] / t) + Math.round(e[2 * r] / t) + n;
                    e[r] = 67108863 & i, n = i < 67108864 ? 0 : i / 67108864 | 0
                }
                return e
            }, m.prototype.convert13b = function(e, t, n, i) {
                for (var a = 0, o = 0; o < t; o++) a += 0 | e[o], n[2 * o] = 8191 & a, a >>>= 13, n[2 * o + 1] = 8191 & a, a >>>= 13;
                for (o = 2 * t; o < i; ++o) n[o] = 0;
                r(0 === a), r(0 == (-8192 & a))
            }, m.prototype.stub = function(e) {
                for (var t = new Array(e), n = 0; n < e; n++) t[n] = 0;
                return t
            }, m.prototype.mulp = function(e, t, n) {
                var r = 2 * this.guessLen13b(e.length, t.length),
                    i = this.makeRBT(r),
                    a = this.stub(r),
                    o = new Array(r),
                    s = new Array(r),
                    c = new Array(r),
                    f = new Array(r),
                    h = new Array(r),
                    d = new Array(r),
                    u = n.words;
                u.length = r, this.convert13b(e.words, e.length, o, r), this.convert13b(t.words, t.length, f, r), this.transform(o, a, s, c, r, i), this.transform(f, a, h, d, r, i);
                for (var l = 0; l < r; l++) {
                    var p = s[l] * h[l] - c[l] * d[l];
                    c[l] = s[l] * d[l] + c[l] * h[l], s[l] = p
                }
                return this.conjugate(s, c, r), this.transform(s, c, u, a, r, i), this.conjugate(u, a, r), this.normalize13b(u, r), n.negative = e.negative ^ t.negative, n.length = e.length + t.length, n.strip()
            }, a.prototype.mul = function(e) {
                var t = new a(null);
                return t.words = new Array(this.length + e.length), this.mulTo(e, t)
            }, a.prototype.mulf = function(e) {
                var t = new a(null);
                return t.words = new Array(this.length + e.length), y(this, e, t)
            }, a.prototype.imul = function(e) {
                return this.clone().mulTo(e, this)
            }, a.prototype.imuln = function(e) {
                r("number" == typeof e), r(e < 67108864);
                for (var t = 0, n = 0; n < this.length; n++) {
                    var i = (0 | this.words[n]) * e,
                        a = (67108863 & i) + (67108863 & t);
                    t >>= 26, t += i / 67108864 | 0, t += a >>> 26, this.words[n] = 67108863 & a
                }
                return 0 !== t && (this.words[n] = t, this.length++), this
            }, a.prototype.muln = function(e) {
                return this.clone().imuln(e)
            }, a.prototype.sqr = function() {
                return this.mul(this)
            }, a.prototype.isqr = function() {
                return this.imul(this.clone())
            }, a.prototype.pow = function(e) {
                var t = u(e);
                if (0 === t.length) return new a(1);
                for (var n = this, r = 0; r < t.length && 0 === t[r]; r++, n = n.sqr());
                if (++r < t.length)
                    for (var i = n.sqr(); r < t.length; r++, i = i.sqr()) 0 !== t[r] && (n = n.mul(i));
                return n
            }, a.prototype.iushln = function(e) {
                r("number" == typeof e && e >= 0);
                var t, n = e % 26,
                    i = (e - n) / 26,
                    a = 67108863 >>> 26 - n << 26 - n;
                if (0 !== n) {
                    var o = 0;
                    for (t = 0; t < this.length; t++) {
                        var s = this.words[t] & a,
                            c = (0 | this.words[t]) - s << n;
                        this.words[t] = c | o, o = s >>> 26 - n
                    }
                    o && (this.words[t] = o, this.length++)
                }
                if (0 !== i) {
                    for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
                    for (t = 0; t < i; t++) this.words[t] = 0;
                    this.length += i
                }
                return this.strip()
            }, a.prototype.ishln = function(e) {
                return r(0 === this.negative), this.iushln(e)
            }, a.prototype.iushrn = function(e, t, n) {
                var i;
                r("number" == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
                var a = e % 26,
                    o = Math.min((e - a) / 26, this.length),
                    s = 67108863 ^ 67108863 >>> a << a,
                    c = n;
                if (i -= o, i = Math.max(0, i), c) {
                    for (var f = 0; f < o; f++) c.words[f] = this.words[f];
                    c.length = o
                }
                if (0 === o);
                else if (this.length > o)
                    for (this.length -= o, f = 0; f < this.length; f++) this.words[f] = this.words[f + o];
                else this.words[0] = 0, this.length = 1;
                var h = 0;
                for (f = this.length - 1; f >= 0 && (0 !== h || f >= i); f--) {
                    var d = 0 | this.words[f];
                    this.words[f] = h << 26 - a | d >>> a, h = d & s
                }
                return c && 0 !== h && (c.words[c.length++] = h), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
            }, a.prototype.ishrn = function(e, t, n) {
                return r(0 === this.negative), this.iushrn(e, t, n)
            }, a.prototype.shln = function(e) {
                return this.clone().ishln(e)
            }, a.prototype.ushln = function(e) {
                return this.clone().iushln(e)
            }, a.prototype.shrn = function(e) {
                return this.clone().ishrn(e)
            }, a.prototype.ushrn = function(e) {
                return this.clone().iushrn(e)
            }, a.prototype.testn = function(e) {
                r("number" == typeof e && e >= 0);
                var t = e % 26,
                    n = (e - t) / 26,
                    i = 1 << t;
                return !(this.length <= n) && !!(this.words[n] & i)
            }, a.prototype.imaskn = function(e) {
                r("number" == typeof e && e >= 0);
                var t = e % 26,
                    n = (e - t) / 26;
                if (r(0 === this.negative, "imaskn works only with positive numbers"), this.length <= n) return this;
                if (0 !== t && n++, this.length = Math.min(n, this.length), 0 !== t) {
                    var i = 67108863 ^ 67108863 >>> t << t;
                    this.words[this.length - 1] &= i
                }
                return this.strip()
            }, a.prototype.maskn = function(e) {
                return this.clone().imaskn(e)
            }, a.prototype.iaddn = function(e) {
                return r("number" == typeof e), r(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e)
            }, a.prototype._iaddn = function(e) {
                this.words[0] += e;
                for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                return this.length = Math.max(this.length, t + 1), this
            }, a.prototype.isubn = function(e) {
                if (r("number" == typeof e), r(e < 67108864), e < 0) return this.iaddn(-e);
                if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                else
                    for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                return this.strip()
            }, a.prototype.addn = function(e) {
                return this.clone().iaddn(e)
            }, a.prototype.subn = function(e) {
                return this.clone().isubn(e)
            }, a.prototype.iabs = function() {
                return this.negative = 0, this
            }, a.prototype.abs = function() {
                return this.clone().iabs()
            }, a.prototype._ishlnsubmul = function(e, t, n) {
                var i, a, o = e.length + n;
                this._expand(o);
                var s = 0;
                for (i = 0; i < e.length; i++) {
                    a = (0 | this.words[i + n]) + s;
                    var c = (0 | e.words[i]) * t;
                    s = ((a -= 67108863 & c) >> 26) - (c / 67108864 | 0), this.words[i + n] = 67108863 & a
                }
                for (; i < this.length - n; i++) s = (a = (0 | this.words[i + n]) + s) >> 26, this.words[i + n] = 67108863 & a;
                if (0 === s) return this.strip();
                for (r(-1 === s), s = 0, i = 0; i < this.length; i++) s = (a = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & a;
                return this.negative = 1, this.strip()
            }, a.prototype._wordDiv = function(e, t) {
                var n = (this.length, e.length),
                    r = this.clone(),
                    i = e,
                    o = 0 | i.words[i.length - 1];
                0 !== (n = 26 - this._countBits(o)) && (i = i.ushln(n), r.iushln(n), o = 0 | i.words[i.length - 1]);
                var s, c = r.length - i.length;
                if ("mod" !== t) {
                    (s = new a(null)).length = c + 1, s.words = new Array(s.length);
                    for (var f = 0; f < s.length; f++) s.words[f] = 0
                }
                var h = r.clone()._ishlnsubmul(i, 1, c);
                0 === h.negative && (r = h, s && (s.words[c] = 1));
                for (var d = c - 1; d >= 0; d--) {
                    var u = 67108864 * (0 | r.words[i.length + d]) + (0 | r.words[i.length + d - 1]);
                    for (u = Math.min(u / o | 0, 67108863), r._ishlnsubmul(i, u, d); 0 !== r.negative;) u--, r.negative = 0, r._ishlnsubmul(i, 1, d), r.isZero() || (r.negative ^= 1);
                    s && (s.words[d] = u)
                }
                return s && s.strip(), r.strip(), "div" !== t && 0 !== n && r.iushrn(n), {
                    div: s || null,
                    mod: r
                }
            }, a.prototype.divmod = function(e, t, n) {
                return r(!e.isZero()), this.isZero() ? {
                    div: new a(0),
                    mod: new a(0)
                } : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (i = s.div.neg()), "div" !== t && (o = s.mod.neg(), n && 0 !== o.negative && o.iadd(e)), {
                    div: i,
                    mod: o
                }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (i = s.div.neg()), {
                    div: i,
                    mod: s.mod
                }) : 0 != (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (o = s.mod.neg(), n && 0 !== o.negative && o.isub(e)), {
                    div: s.div,
                    mod: o
                }) : e.length > this.length || this.cmp(e) < 0 ? {
                    div: new a(0),
                    mod: this
                } : 1 === e.length ? "div" === t ? {
                    div: this.divn(e.words[0]),
                    mod: null
                } : "mod" === t ? {
                    div: null,
                    mod: new a(this.modn(e.words[0]))
                } : {
                    div: this.divn(e.words[0]),
                    mod: new a(this.modn(e.words[0]))
                } : this._wordDiv(e, t);
                var i, o, s
            }, a.prototype.div = function(e) {
                return this.divmod(e, "div", !1).div
            }, a.prototype.mod = function(e) {
                return this.divmod(e, "mod", !1).mod
            }, a.prototype.umod = function(e) {
                return this.divmod(e, "mod", !0).mod
            }, a.prototype.divRound = function(e) {
                var t = this.divmod(e);
                if (t.mod.isZero()) return t.div;
                var n = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                    r = e.ushrn(1),
                    i = e.andln(1),
                    a = n.cmp(r);
                return a < 0 || 1 === i && 0 === a ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
            }, a.prototype.modn = function(e) {
                r(e <= 67108863);
                for (var t = (1 << 26) % e, n = 0, i = this.length - 1; i >= 0; i--) n = (t * n + (0 | this.words[i])) % e;
                return n
            }, a.prototype.idivn = function(e) {
                r(e <= 67108863);
                for (var t = 0, n = this.length - 1; n >= 0; n--) {
                    var i = (0 | this.words[n]) + 67108864 * t;
                    this.words[n] = i / e | 0, t = i % e
                }
                return this.strip()
            }, a.prototype.divn = function(e) {
                return this.clone().idivn(e)
            }, a.prototype.egcd = function(e) {
                r(0 === e.negative), r(!e.isZero());
                var t = this,
                    n = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (var i = new a(1), o = new a(0), s = new a(0), c = new a(1), f = 0; t.isEven() && n.isEven();) t.iushrn(1), n.iushrn(1), ++f;
                for (var h = n.clone(), d = t.clone(); !t.isZero();) {
                    for (var u = 0, l = 1; 0 == (t.words[0] & l) && u < 26; ++u, l <<= 1);
                    if (u > 0)
                        for (t.iushrn(u); u-- > 0;)(i.isOdd() || o.isOdd()) && (i.iadd(h), o.isub(d)), i.iushrn(1), o.iushrn(1);
                    for (var p = 0, b = 1; 0 == (n.words[0] & b) && p < 26; ++p, b <<= 1);
                    if (p > 0)
                        for (n.iushrn(p); p-- > 0;)(s.isOdd() || c.isOdd()) && (s.iadd(h), c.isub(d)), s.iushrn(1), c.iushrn(1);
                    t.cmp(n) >= 0 ? (t.isub(n), i.isub(s), o.isub(c)) : (n.isub(t), s.isub(i), c.isub(o))
                }
                return {
                    a: s,
                    b: c,
                    gcd: n.iushln(f)
                }
            }, a.prototype._invmp = function(e) {
                r(0 === e.negative), r(!e.isZero());
                var t = this,
                    n = e.clone();
                t = 0 !== t.negative ? t.umod(e) : t.clone();
                for (var i, o = new a(1), s = new a(0), c = n.clone(); t.cmpn(1) > 0 && n.cmpn(1) > 0;) {
                    for (var f = 0, h = 1; 0 == (t.words[0] & h) && f < 26; ++f, h <<= 1);
                    if (f > 0)
                        for (t.iushrn(f); f-- > 0;) o.isOdd() && o.iadd(c), o.iushrn(1);
                    for (var d = 0, u = 1; 0 == (n.words[0] & u) && d < 26; ++d, u <<= 1);
                    if (d > 0)
                        for (n.iushrn(d); d-- > 0;) s.isOdd() && s.iadd(c), s.iushrn(1);
                    t.cmp(n) >= 0 ? (t.isub(n), o.isub(s)) : (n.isub(t), s.isub(o))
                }
                return (i = 0 === t.cmpn(1) ? o : s).cmpn(0) < 0 && i.iadd(e), i
            }, a.prototype.gcd = function(e) {
                if (this.isZero()) return e.abs();
                if (e.isZero()) return this.abs();
                var t = this.clone(),
                    n = e.clone();
                t.negative = 0, n.negative = 0;
                for (var r = 0; t.isEven() && n.isEven(); r++) t.iushrn(1), n.iushrn(1);
                for (;;) {
                    for (; t.isEven();) t.iushrn(1);
                    for (; n.isEven();) n.iushrn(1);
                    var i = t.cmp(n);
                    if (i < 0) {
                        var a = t;
                        t = n, n = a
                    } else if (0 === i || 0 === n.cmpn(1)) break;
                    t.isub(n)
                }
                return n.iushln(r)
            }, a.prototype.invm = function(e) {
                return this.egcd(e).a.umod(e)
            }, a.prototype.isEven = function() {
                return 0 == (1 & this.words[0])
            }, a.prototype.isOdd = function() {
                return 1 == (1 & this.words[0])
            }, a.prototype.andln = function(e) {
                return this.words[0] & e
            }, a.prototype.bincn = function(e) {
                r("number" == typeof e);
                var t = e % 26,
                    n = (e - t) / 26,
                    i = 1 << t;
                if (this.length <= n) return this._expand(n + 1), this.words[n] |= i, this;
                for (var a = i, o = n; 0 !== a && o < this.length; o++) {
                    var s = 0 | this.words[o];
                    a = (s += a) >>> 26, s &= 67108863, this.words[o] = s
                }
                return 0 !== a && (this.words[o] = a, this.length++), this
            }, a.prototype.isZero = function() {
                return 1 === this.length && 0 === this.words[0]
            }, a.prototype.cmpn = function(e) {
                var t, n = e < 0;
                if (0 !== this.negative && !n) return -1;
                if (0 === this.negative && n) return 1;
                if (this.strip(), this.length > 1) t = 1;
                else {
                    n && (e = -e), r(e <= 67108863, "Number is too big");
                    var i = 0 | this.words[0];
                    t = i === e ? 0 : i < e ? -1 : 1
                }
                return 0 !== this.negative ? 0 | -t : t
            }, a.prototype.cmp = function(e) {
                if (0 !== this.negative && 0 === e.negative) return -1;
                if (0 === this.negative && 0 !== e.negative) return 1;
                var t = this.ucmp(e);
                return 0 !== this.negative ? 0 | -t : t
            }, a.prototype.ucmp = function(e) {
                if (this.length > e.length) return 1;
                if (this.length < e.length) return -1;
                for (var t = 0, n = this.length - 1; n >= 0; n--) {
                    var r = 0 | this.words[n],
                        i = 0 | e.words[n];
                    if (r !== i) {
                        r < i ? t = -1 : r > i && (t = 1);
                        break
                    }
                }
                return t
            }, a.prototype.gtn = function(e) {
                return 1 === this.cmpn(e)
            }, a.prototype.gt = function(e) {
                return 1 === this.cmp(e)
            }, a.prototype.gten = function(e) {
                return this.cmpn(e) >= 0
            }, a.prototype.gte = function(e) {
                return this.cmp(e) >= 0
            }, a.prototype.ltn = function(e) {
                return -1 === this.cmpn(e)
            }, a.prototype.lt = function(e) {
                return -1 === this.cmp(e)
            }, a.prototype.lten = function(e) {
                return this.cmpn(e) <= 0
            }, a.prototype.lte = function(e) {
                return this.cmp(e) <= 0
            }, a.prototype.eqn = function(e) {
                return 0 === this.cmpn(e)
            }, a.prototype.eq = function(e) {
                return 0 === this.cmp(e)
            }, a.red = function(e) {
                return new S(e)
            }, a.prototype.toRed = function(e) {
                return r(!this.red, "Already a number in reduction context"), r(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
            }, a.prototype.fromRed = function() {
                return r(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
            }, a.prototype._forceRed = function(e) {
                return this.red = e, this
            }, a.prototype.forceRed = function(e) {
                return r(!this.red, "Already a number in reduction context"), this._forceRed(e)
            }, a.prototype.redAdd = function(e) {
                return r(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
            }, a.prototype.redIAdd = function(e) {
                return r(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
            }, a.prototype.redSub = function(e) {
                return r(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
            }, a.prototype.redISub = function(e) {
                return r(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
            }, a.prototype.redShl = function(e) {
                return r(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
            }, a.prototype.redMul = function(e) {
                return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
            }, a.prototype.redIMul = function(e) {
                return r(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
            }, a.prototype.redSqr = function() {
                return r(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
            }, a.prototype.redISqr = function() {
                return r(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
            }, a.prototype.redSqrt = function() {
                return r(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
            }, a.prototype.redInvm = function() {
                return r(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
            }, a.prototype.redNeg = function() {
                return r(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
            }, a.prototype.redPow = function(e) {
                return r(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
            };
            var g = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };

            function v(e, t) {
                this.name = e, this.p = new a(t, 16), this.n = this.p.bitLength(), this.k = new a(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
            }

            function _() {
                v.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }

            function C() {
                v.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }

            function w() {
                v.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }

            function B() {
                v.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }

            function S(e) {
                if ("string" == typeof e) {
                    var t = a._prime(e);
                    this.m = t.p, this.prime = t
                } else r(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
            }

            function M(e) {
                S.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new a(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
            }
            v.prototype._tmp = function() {
                var e = new a(null);
                return e.words = new Array(Math.ceil(this.n / 13)), e
            }, v.prototype.ireduce = function(e) {
                var t, n = e;
                do {
                    this.split(n, this.tmp), t = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength()
                } while (t > this.n);
                var r = t < this.n ? -1 : n.ucmp(this.p);
                return 0 === r ? (n.words[0] = 0, n.length = 1) : r > 0 ? n.isub(this.p) : n.strip(), n
            }, v.prototype.split = function(e, t) {
                e.iushrn(this.n, 0, t)
            }, v.prototype.imulK = function(e) {
                return e.imul(this.k)
            }, i(_, v), _.prototype.split = function(e, t) {
                for (var n = Math.min(e.length, 9), r = 0; r < n; r++) t.words[r] = e.words[r];
                if (t.length = n, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
                var i = e.words[9];
                for (t.words[t.length++] = 4194303 & i, r = 10; r < e.length; r++) {
                    var a = 0 | e.words[r];
                    e.words[r - 10] = (4194303 & a) << 4 | i >>> 22, i = a
                }
                i >>>= 22, e.words[r - 10] = i, 0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9
            }, _.prototype.imulK = function(e) {
                e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                for (var t = 0, n = 0; n < e.length; n++) {
                    var r = 0 | e.words[n];
                    t += 977 * r, e.words[n] = 67108863 & t, t = 64 * r + (t / 67108864 | 0)
                }
                return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
            }, i(C, v), i(w, v), i(B, v), B.prototype.imulK = function(e) {
                for (var t = 0, n = 0; n < e.length; n++) {
                    var r = 19 * (0 | e.words[n]) + t,
                        i = 67108863 & r;
                    r >>>= 26, e.words[n] = i, t = r
                }
                return 0 !== t && (e.words[e.length++] = t), e
            }, a._prime = function(e) {
                if (g[e]) return g[e];
                var t;
                if ("k256" === e) t = new _;
                else if ("p224" === e) t = new C;
                else if ("p192" === e) t = new w;
                else {
                    if ("p25519" !== e) throw new Error("Unknown prime " + e);
                    t = new B
                }
                return g[e] = t, t
            }, S.prototype._verify1 = function(e) {
                r(0 === e.negative, "red works only with positives"), r(e.red, "red works only with red numbers")
            }, S.prototype._verify2 = function(e, t) {
                r(0 == (e.negative | t.negative), "red works only with positives"), r(e.red && e.red === t.red, "red works only with red numbers")
            }, S.prototype.imod = function(e) {
                return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
            }, S.prototype.neg = function(e) {
                return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
            }, S.prototype.add = function(e, t) {
                this._verify2(e, t);
                var n = e.add(t);
                return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this)
            }, S.prototype.iadd = function(e, t) {
                this._verify2(e, t);
                var n = e.iadd(t);
                return n.cmp(this.m) >= 0 && n.isub(this.m), n
            }, S.prototype.sub = function(e, t) {
                this._verify2(e, t);
                var n = e.sub(t);
                return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this)
            }, S.prototype.isub = function(e, t) {
                this._verify2(e, t);
                var n = e.isub(t);
                return n.cmpn(0) < 0 && n.iadd(this.m), n
            }, S.prototype.shl = function(e, t) {
                return this._verify1(e), this.imod(e.ushln(t))
            }, S.prototype.imul = function(e, t) {
                return this._verify2(e, t), this.imod(e.imul(t))
            }, S.prototype.mul = function(e, t) {
                return this._verify2(e, t), this.imod(e.mul(t))
            }, S.prototype.isqr = function(e) {
                return this.imul(e, e.clone())
            }, S.prototype.sqr = function(e) {
                return this.mul(e, e)
            }, S.prototype.sqrt = function(e) {
                if (e.isZero()) return e.clone();
                var t = this.m.andln(3);
                if (r(t % 2 == 1), 3 === t) {
                    var n = this.m.add(new a(1)).iushrn(2);
                    return this.pow(e, n)
                }
                for (var i = this.m.subn(1), o = 0; !i.isZero() && 0 === i.andln(1);) o++, i.iushrn(1);
                r(!i.isZero());
                var s = new a(1).toRed(this),
                    c = s.redNeg(),
                    f = this.m.subn(1).iushrn(1),
                    h = this.m.bitLength();
                for (h = new a(2 * h * h).toRed(this); 0 !== this.pow(h, f).cmp(c);) h.redIAdd(c);
                for (var d = this.pow(h, i), u = this.pow(e, i.addn(1).iushrn(1)), l = this.pow(e, i), p = o; 0 !== l.cmp(s);) {
                    for (var b = l, y = 0; 0 !== b.cmp(s); y++) b = b.redSqr();
                    r(y < p);
                    var m = this.pow(d, new a(1).iushln(p - y - 1));
                    u = u.redMul(m), d = m.redSqr(), l = l.redMul(d), p = y
                }
                return u
            }, S.prototype.invm = function(e) {
                var t = e._invmp(this.m);
                return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
            }, S.prototype.pow = function(e, t) {
                if (t.isZero()) return new a(1).toRed(this);
                if (0 === t.cmpn(1)) return e.clone();
                var n = new Array(16);
                n[0] = new a(1).toRed(this), n[1] = e;
                for (var r = 2; r < n.length; r++) n[r] = this.mul(n[r - 1], e);
                var i = n[0],
                    o = 0,
                    s = 0,
                    c = t.bitLength() % 26;
                for (0 === c && (c = 26), r = t.length - 1; r >= 0; r--) {
                    for (var f = t.words[r], h = c - 1; h >= 0; h--) {
                        var d = f >> h & 1;
                        i !== n[0] && (i = this.sqr(i)), 0 !== d || 0 !== o ? (o <<= 1, o |= d, (4 === ++s || 0 === r && 0 === h) && (i = this.mul(i, n[o]), s = 0, o = 0)) : s = 0
                    }
                    c = 26
                }
                return i
            }, S.prototype.convertTo = function(e) {
                var t = e.umod(this.m);
                return t === e ? t.clone() : t
            }, S.prototype.convertFrom = function(e) {
                var t = e.clone();
                return t.red = null, t
            }, a.mont = function(e) {
                return new M(e)
            }, i(M, S), M.prototype.convertTo = function(e) {
                return this.imod(e.ushln(this.shift))
            }, M.prototype.convertFrom = function(e) {
                var t = this.imod(e.mul(this.rinv));
                return t.red = null, t
            }, M.prototype.imul = function(e, t) {
                if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                var n = e.imul(t),
                    r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    i = n.isub(r).iushrn(this.shift),
                    a = i;
                return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this)
            }, M.prototype.mul = function(e, t) {
                if (e.isZero() || t.isZero()) return new a(0)._forceRed(this);
                var n = e.mul(t),
                    r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    i = n.isub(r).iushrn(this.shift),
                    o = i;
                return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
            }, M.prototype.invm = function(e) {
                return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
            }
        })(void 0 === t || t, this)
    }, {
        buffer: 18
    }],
    17: [function(e, t, n) {
        var r;

        function i(e) {
            this.rand = e
        }
        if (t.exports = function(e) {
                return r || (r = new i(null)), r.generate(e)
            }, t.exports.Rand = i, i.prototype.generate = function(e) {
                return this._rand(e)
            }, i.prototype._rand = function(e) {
                if (this.rand.getBytes) return this.rand.getBytes(e);
                for (var t = new Uint8Array(e), n = 0; n < t.length; n++) t[n] = this.rand.getByte();
                return t
            }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function(e) {
            var t = new Uint8Array(e);
            return self.crypto.getRandomValues(t), t
        } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function(e) {
            var t = new Uint8Array(e);
            return self.msCrypto.getRandomValues(t), t
        } : "object" == typeof window && (i.prototype._rand = function() {
            throw new Error("Not implemented yet")
        });
        else try {
            var a = e("crypto");
            if ("function" != typeof a.randomBytes) throw new Error("Not supported");
            i.prototype._rand = function(e) {
                return a.randomBytes(e)
            }
        } catch (e) {}
    }, {
        crypto: 18
    }],
    18: [function(e, t, n) {}, {}],
    19: [function(e, t, n) {
        var r = e("safe-buffer").Buffer;

        function i(e) {
            r.isBuffer(e) || (e = r.from(e));
            for (var t = e.length / 4 | 0, n = new Array(t), i = 0; i < t; i++) n[i] = e.readUInt32BE(4 * i);
            return n
        }

        function a(e) {
            for (; 0 < e.length; e++) e[0] = 0
        }

        function o(e, t, n, r, i) {
            for (var a, o, s, c, f = n[0], h = n[1], d = n[2], u = n[3], l = e[0] ^ t[0], p = e[1] ^ t[1], b = e[2] ^ t[2], y = e[3] ^ t[3], m = 4, g = 1; g < i; g++) a = f[l >>> 24] ^ h[p >>> 16 & 255] ^ d[b >>> 8 & 255] ^ u[255 & y] ^ t[m++], o = f[p >>> 24] ^ h[b >>> 16 & 255] ^ d[y >>> 8 & 255] ^ u[255 & l] ^ t[m++], s = f[b >>> 24] ^ h[y >>> 16 & 255] ^ d[l >>> 8 & 255] ^ u[255 & p] ^ t[m++], c = f[y >>> 24] ^ h[l >>> 16 & 255] ^ d[p >>> 8 & 255] ^ u[255 & b] ^ t[m++], l = a, p = o, b = s, y = c;
            return a = (r[l >>> 24] << 24 | r[p >>> 16 & 255] << 16 | r[b >>> 8 & 255] << 8 | r[255 & y]) ^ t[m++], o = (r[p >>> 24] << 24 | r[b >>> 16 & 255] << 16 | r[y >>> 8 & 255] << 8 | r[255 & l]) ^ t[m++], s = (r[b >>> 24] << 24 | r[y >>> 16 & 255] << 16 | r[l >>> 8 & 255] << 8 | r[255 & p]) ^ t[m++], c = (r[y >>> 24] << 24 | r[l >>> 16 & 255] << 16 | r[p >>> 8 & 255] << 8 | r[255 & b]) ^ t[m++], [a >>>= 0, o >>>= 0, s >>>= 0, c >>>= 0]
        }
        var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
            c = function() {
                for (var e = new Array(256), t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                for (var n = [], r = [], i = [
                        [],
                        [],
                        [],
                        []
                    ], a = [
                        [],
                        [],
                        [],
                        []
                    ], o = 0, s = 0, c = 0; c < 256; ++c) {
                    var f = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                    f = f >>> 8 ^ 255 & f ^ 99, n[o] = f, r[f] = o;
                    var h = e[o],
                        d = e[h],
                        u = e[d],
                        l = 257 * e[f] ^ 16843008 * f;
                    i[0][o] = l << 24 | l >>> 8, i[1][o] = l << 16 | l >>> 16, i[2][o] = l << 8 | l >>> 24, i[3][o] = l, l = 16843009 * u ^ 65537 * d ^ 257 * h ^ 16843008 * o, a[0][f] = l << 24 | l >>> 8, a[1][f] = l << 16 | l >>> 16, a[2][f] = l << 8 | l >>> 24, a[3][f] = l, 0 === o ? o = s = 1 : (o = h ^ e[e[e[u ^ h]]], s ^= e[e[s]])
                }
                return {
                    SBOX: n,
                    INV_SBOX: r,
                    SUB_MIX: i,
                    INV_SUB_MIX: a
                }
            }();

        function f(e) {
            this._key = i(e), this._reset()
        }
        f.blockSize = 16, f.keySize = 32, f.prototype.blockSize = f.blockSize, f.prototype.keySize = f.keySize, f.prototype._reset = function() {
            for (var e = this._key, t = e.length, n = t + 6, r = 4 * (n + 1), i = [], a = 0; a < t; a++) i[a] = e[a];
            for (a = t; a < r; a++) {
                var o = i[a - 1];
                a % t == 0 ? (o = o << 8 | o >>> 24, o = c.SBOX[o >>> 24] << 24 | c.SBOX[o >>> 16 & 255] << 16 | c.SBOX[o >>> 8 & 255] << 8 | c.SBOX[255 & o], o ^= s[a / t | 0] << 24) : t > 6 && a % t == 4 && (o = c.SBOX[o >>> 24] << 24 | c.SBOX[o >>> 16 & 255] << 16 | c.SBOX[o >>> 8 & 255] << 8 | c.SBOX[255 & o]), i[a] = i[a - t] ^ o
            }
            for (var f = [], h = 0; h < r; h++) {
                var d = r - h,
                    u = i[d - (h % 4 ? 0 : 4)];
                f[h] = h < 4 || d <= 4 ? u : c.INV_SUB_MIX[0][c.SBOX[u >>> 24]] ^ c.INV_SUB_MIX[1][c.SBOX[u >>> 16 & 255]] ^ c.INV_SUB_MIX[2][c.SBOX[u >>> 8 & 255]] ^ c.INV_SUB_MIX[3][c.SBOX[255 & u]]
            }
            this._nRounds = n, this._keySchedule = i, this._invKeySchedule = f
        }, f.prototype.encryptBlockRaw = function(e) {
            return o(e = i(e), this._keySchedule, c.SUB_MIX, c.SBOX, this._nRounds)
        }, f.prototype.encryptBlock = function(e) {
            var t = this.encryptBlockRaw(e),
                n = r.allocUnsafe(16);
            return n.writeUInt32BE(t[0], 0), n.writeUInt32BE(t[1], 4), n.writeUInt32BE(t[2], 8), n.writeUInt32BE(t[3], 12), n
        }, f.prototype.decryptBlock = function(e) {
            var t = (e = i(e))[1];
            e[1] = e[3], e[3] = t;
            var n = o(e, this._invKeySchedule, c.INV_SUB_MIX, c.INV_SBOX, this._nRounds),
                a = r.allocUnsafe(16);
            return a.writeUInt32BE(n[0], 0), a.writeUInt32BE(n[3], 4), a.writeUInt32BE(n[2], 8), a.writeUInt32BE(n[1], 12), a
        }, f.prototype.scrub = function() {
            a(this._keySchedule), a(this._invKeySchedule), a(this._key)
        }, t.exports.AES = f
    }, {
        "safe-buffer": 143
    }],
    20: [function(e, t, n) {
        var r = e("./aes"),
            i = e("safe-buffer").Buffer,
            a = e("cipher-base"),
            o = e("inherits"),
            s = e("./ghash"),
            c = e("buffer-xor"),
            f = e("./incr32");

        function h(e, t) {
            var n = 0;
            e.length !== t.length && n++;
            for (var r = Math.min(e.length, t.length), i = 0; i < r; ++i) n += e[i] ^ t[i];
            return n
        }

        function d(e, t, n) {
            if (12 === t.length) return e._finID = i.concat([t, i.from([0, 0, 0, 1])]), i.concat([t, i.from([0, 0, 0, 2])]);
            var r = new s(n),
                a = t.length,
                o = a % 16;
            r.update(t), o && (o = 16 - o, r.update(i.alloc(o, 0))), r.update(i.alloc(8, 0));
            var c = 8 * a,
                h = i.alloc(8);
            h.writeUIntBE(c, 0, 8), r.update(h), e._finID = r.state;
            var d = i.from(e._finID);
            return f(d), d
        }

        function u(e, t, n, o) {
            a.call(this);
            var c = i.alloc(4, 0);
            this._cipher = new r.AES(t);
            var f = this._cipher.encryptBlock(c);
            this._ghash = new s(f), n = d(this, n, f), this._prev = i.from(n), this._cache = i.allocUnsafe(0), this._secCache = i.allocUnsafe(0), this._decrypt = o, this._alen = 0, this._len = 0, this._mode = e, this._authTag = null, this._called = !1
        }
        o(u, a), u.prototype._update = function(e) {
            if (!this._called && this._alen) {
                var t = 16 - this._alen % 16;
                t < 16 && (t = i.alloc(t, 0), this._ghash.update(t))
            }
            this._called = !0;
            var n = this._mode.encrypt(this, e);
            return this._decrypt ? this._ghash.update(e) : this._ghash.update(n), this._len += e.length, n
        }, u.prototype._final = function() {
            if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");
            var e = c(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
            if (this._decrypt && h(e, this._authTag)) throw new Error("Unsupported state or unable to authenticate data");
            this._authTag = e, this._cipher.scrub()
        }, u.prototype.getAuthTag = function() {
            if (this._decrypt || !i.isBuffer(this._authTag)) throw new Error("Attempting to get auth tag in unsupported state");
            return this._authTag
        }, u.prototype.setAuthTag = function(e) {
            if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
            this._authTag = e
        }, u.prototype.setAAD = function(e) {
            if (this._called) throw new Error("Attempting to set AAD in unsupported state");
            this._ghash.update(e), this._alen += e.length
        }, t.exports = u
    }, {
        "./aes": 19,
        "./ghash": 24,
        "./incr32": 25,
        "buffer-xor": 46,
        "cipher-base": 49,
        inherits: 101,
        "safe-buffer": 143
    }],
    21: [function(e, t, n) {
        var r = e("./encrypter"),
            i = e("./decrypter"),
            a = e("./modes/list.json");
        n.createCipher = n.Cipher = r.createCipher, n.createCipheriv = n.Cipheriv = r.createCipheriv, n.createDecipher = n.Decipher = i.createDecipher, n.createDecipheriv = n.Decipheriv = i.createDecipheriv, n.listCiphers = n.getCiphers = function() {
            return Object.keys(a)
        }
    }, {
        "./decrypter": 22,
        "./encrypter": 23,
        "./modes/list.json": 33
    }],
    22: [function(e, t, n) {
        var r = e("./authCipher"),
            i = e("safe-buffer").Buffer,
            a = e("./modes"),
            o = e("./streamCipher"),
            s = e("cipher-base"),
            c = e("./aes"),
            f = e("evp_bytestokey");

        function h(e, t, n) {
            s.call(this), this._cache = new d, this._last = void 0, this._cipher = new c.AES(t), this._prev = i.from(n), this._mode = e, this._autopadding = !0
        }

        function d() {
            this.cache = i.allocUnsafe(0)
        }

        function u(e) {
            var t = e[15];
            if (t < 1 || t > 16) throw new Error("unable to decrypt data");
            for (var n = -1; ++n < t;)
                if (e[n + (16 - t)] !== t) throw new Error("unable to decrypt data");
            if (16 !== t) return e.slice(0, 16 - t)
        }

        function l(e, t, n) {
            var s = a[e.toLowerCase()];
            if (!s) throw new TypeError("invalid suite type");
            if ("string" == typeof n && (n = i.from(n)), "GCM" !== s.mode && n.length !== s.iv) throw new TypeError("invalid iv length " + n.length);
            if ("string" == typeof t && (t = i.from(t)), t.length !== s.key / 8) throw new TypeError("invalid key length " + t.length);
            return "stream" === s.type ? new o(s.module, t, n, !0) : "auth" === s.type ? new r(s.module, t, n, !0) : new h(s.module, t, n)
        }
        e("inherits")(h, s), h.prototype._update = function(e) {
            var t, n;
            this._cache.add(e);
            for (var r = []; t = this._cache.get(this._autopadding);) n = this._mode.decrypt(this, t), r.push(n);
            return i.concat(r)
        }, h.prototype._final = function() {
            var e = this._cache.flush();
            if (this._autopadding) return u(this._mode.decrypt(this, e));
            if (e) throw new Error("data not multiple of block length")
        }, h.prototype.setAutoPadding = function(e) {
            return this._autopadding = !!e, this
        }, d.prototype.add = function(e) {
            this.cache = i.concat([this.cache, e])
        }, d.prototype.get = function(e) {
            var t;
            if (e) {
                if (this.cache.length > 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t
            } else if (this.cache.length >= 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t;
            return null
        }, d.prototype.flush = function() {
            if (this.cache.length) return this.cache
        }, n.createDecipher = function(e, t) {
            var n = a[e.toLowerCase()];
            if (!n) throw new TypeError("invalid suite type");
            var r = f(t, !1, n.key, n.iv);
            return l(e, r.key, r.iv)
        }, n.createDecipheriv = l
    }, {
        "./aes": 19,
        "./authCipher": 20,
        "./modes": 32,
        "./streamCipher": 35,
        "cipher-base": 49,
        evp_bytestokey: 84,
        inherits: 101,
        "safe-buffer": 143
    }],
    23: [function(e, t, n) {
        var r = e("./modes"),
            i = e("./authCipher"),
            a = e("safe-buffer").Buffer,
            o = e("./streamCipher"),
            s = e("cipher-base"),
            c = e("./aes"),
            f = e("evp_bytestokey");

        function h(e, t, n) {
            s.call(this), this._cache = new u, this._cipher = new c.AES(t), this._prev = a.from(n), this._mode = e, this._autopadding = !0
        }
        e("inherits")(h, s), h.prototype._update = function(e) {
            var t, n;
            this._cache.add(e);
            for (var r = []; t = this._cache.get();) n = this._mode.encrypt(this, t), r.push(n);
            return a.concat(r)
        };
        var d = a.alloc(16, 16);

        function u() {
            this.cache = a.allocUnsafe(0)
        }

        function l(e, t, n) {
            var s = r[e.toLowerCase()];
            if (!s) throw new TypeError("invalid suite type");
            if ("string" == typeof t && (t = a.from(t)), t.length !== s.key / 8) throw new TypeError("invalid key length " + t.length);
            if ("string" == typeof n && (n = a.from(n)), "GCM" !== s.mode && n.length !== s.iv) throw new TypeError("invalid iv length " + n.length);
            return "stream" === s.type ? new o(s.module, t, n) : "auth" === s.type ? new i(s.module, t, n) : new h(s.module, t, n)
        }
        h.prototype._final = function() {
            var e = this._cache.flush();
            if (this._autopadding) return e = this._mode.encrypt(this, e), this._cipher.scrub(), e;
            if (!e.equals(d)) throw this._cipher.scrub(), new Error("data not multiple of block length")
        }, h.prototype.setAutoPadding = function(e) {
            return this._autopadding = !!e, this
        }, u.prototype.add = function(e) {
            this.cache = a.concat([this.cache, e])
        }, u.prototype.get = function() {
            if (this.cache.length > 15) {
                var e = this.cache.slice(0, 16);
                return this.cache = this.cache.slice(16), e
            }
            return null
        }, u.prototype.flush = function() {
            for (var e = 16 - this.cache.length, t = a.allocUnsafe(e), n = -1; ++n < e;) t.writeUInt8(e, n);
            return a.concat([this.cache, t])
        }, n.createCipheriv = l, n.createCipher = function(e, t) {
            var n = r[e.toLowerCase()];
            if (!n) throw new TypeError("invalid suite type");
            var i = f(t, !1, n.key, n.iv);
            return l(e, i.key, i.iv)
        }
    }, {
        "./aes": 19,
        "./authCipher": 20,
        "./modes": 32,
        "./streamCipher": 35,
        "cipher-base": 49,
        evp_bytestokey: 84,
        inherits: 101,
        "safe-buffer": 143
    }],
    24: [function(e, t, n) {
        var r = e("safe-buffer").Buffer,
            i = r.alloc(16, 0);

        function a(e) {
            return [e.readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)]
        }

        function o(e) {
            var t = r.allocUnsafe(16);
            return t.writeUInt32BE(e[0] >>> 0, 0), t.writeUInt32BE(e[1] >>> 0, 4), t.writeUInt32BE(e[2] >>> 0, 8), t.writeUInt32BE(e[3] >>> 0, 12), t
        }

        function s(e) {
            this.h = e, this.state = r.alloc(16, 0), this.cache = r.allocUnsafe(0)
        }
        s.prototype.ghash = function(e) {
            for (var t = -1; ++t < e.length;) this.state[t] ^= e[t];
            this._multiply()
        }, s.prototype._multiply = function() {
            for (var e, t, n = a(this.h), r = [0, 0, 0, 0], i = -1; ++i < 128;) {
                for (0 != (this.state[~~(i / 8)] & 1 << 7 - i % 8) && (r[0] ^= n[0], r[1] ^= n[1], r[2] ^= n[2], r[3] ^= n[3]), t = 0 != (1 & n[3]), e = 3; e > 0; e--) n[e] = n[e] >>> 1 | (1 & n[e - 1]) << 31;
                n[0] = n[0] >>> 1, t && (n[0] = n[0] ^ 225 << 24)
            }
            this.state = o(r)
        }, s.prototype.update = function(e) {
            var t;
            for (this.cache = r.concat([this.cache, e]); this.cache.length >= 16;) t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(t)
        }, s.prototype.final = function(e, t) {
            return this.cache.length && this.ghash(r.concat([this.cache, i], 16)), this.ghash(o([0, e, 0, t])), this.state
        }, t.exports = s
    }, {
        "safe-buffer": 143
    }],
    25: [function(e, t, n) {
        t.exports = function(e) {
            for (var t, n = e.length; n--;) {
                if (255 !== (t = e.readUInt8(n))) {
                    t++, e.writeUInt8(t, n);
                    break
                }
                e.writeUInt8(0, n)
            }
        }
    }, {}],
    26: [function(e, t, n) {
        var r = e("buffer-xor");
        n.encrypt = function(e, t) {
            var n = r(t, e._prev);
            return e._prev = e._cipher.encryptBlock(n), e._prev
        }, n.decrypt = function(e, t) {
            var n = e._prev;
            e._prev = t;
            var i = e._cipher.decryptBlock(t);
            return r(i, n)
        }
    }, {
        "buffer-xor": 46
    }],
    27: [function(e, t, n) {
        var r = e("safe-buffer").Buffer,
            i = e("buffer-xor");

        function a(e, t, n) {
            var a = t.length,
                o = i(t, e._cache);
            return e._cache = e._cache.slice(a), e._prev = r.concat([e._prev, n ? t : o]), o
        }
        n.encrypt = function(e, t, n) {
            for (var i, o = r.allocUnsafe(0); t.length;) {
                if (0 === e._cache.length && (e._cache = e._cipher.encryptBlock(e._prev), e._prev = r.allocUnsafe(0)), !(e._cache.length <= t.length)) {
                    o = r.concat([o, a(e, t, n)]);
                    break
                }
                i = e._cache.length, o = r.concat([o, a(e, t.slice(0, i), n)]), t = t.slice(i)
            }
            return o
        }
    }, {
        "buffer-xor": 46,
        "safe-buffer": 143
    }],
    28: [function(e, t, n) {
        var r = e("safe-buffer").Buffer;

        function i(e, t, n) {
            for (var r, i, o, s = -1, c = 0; ++s < 8;) r = e._cipher.encryptBlock(e._prev), i = t & 1 << 7 - s ? 128 : 0, c += (128 & (o = r[0] ^ i)) >> s % 8, e._prev = a(e._prev, n ? i : o);
            return c
        }

        function a(e, t) {
            var n = e.length,
                i = -1,
                a = r.allocUnsafe(e.length);
            for (e = r.concat([e, r.from([t])]); ++i < n;) a[i] = e[i] << 1 | e[i + 1] >> 7;
            return a
        }
        n.encrypt = function(e, t, n) {
            for (var a = t.length, o = r.allocUnsafe(a), s = -1; ++s < a;) o[s] = i(e, t[s], n);
            return o
        }
    }, {
        "safe-buffer": 143
    }],
    29: [function(e, t, n) {
        var r = e("safe-buffer").Buffer;

        function i(e, t, n) {
            var i = e._cipher.encryptBlock(e._prev)[0] ^ t;
            return e._prev = r.concat([e._prev.slice(1), r.from([n ? t : i])]), i
        }
        n.encrypt = function(e, t, n) {
            for (var a = t.length, o = r.allocUnsafe(a), s = -1; ++s < a;) o[s] = i(e, t[s], n);
            return o
        }
    }, {
        "safe-buffer": 143
    }],
    30: [function(e, t, n) {
        var r = e("buffer-xor"),
            i = e("safe-buffer").Buffer,
            a = e("../incr32");

        function o(e) {
            var t = e._cipher.encryptBlockRaw(e._prev);
            return a(e._prev), t
        }
        n.encrypt = function(e, t) {
            var n = Math.ceil(t.length / 16),
                a = e._cache.length;
            e._cache = i.concat([e._cache, i.allocUnsafe(16 * n)]);
            for (var s = 0; s < n; s++) {
                var c = o(e),
                    f = a + 16 * s;
                e._cache.writeUInt32BE(c[0], f + 0), e._cache.writeUInt32BE(c[1], f + 4), e._cache.writeUInt32BE(c[2], f + 8), e._cache.writeUInt32BE(c[3], f + 12)
            }
            var h = e._cache.slice(0, t.length);
            return e._cache = e._cache.slice(t.length), r(t, h)
        }
    }, {
        "../incr32": 25,
        "buffer-xor": 46,
        "safe-buffer": 143
    }],
    31: [function(e, t, n) {
        n.encrypt = function(e, t) {
            return e._cipher.encryptBlock(t)
        }, n.decrypt = function(e, t) {
            return e._cipher.decryptBlock(t)
        }
    }, {}],
    32: [function(e, t, n) {
        var r = {
                ECB: e("./ecb"),
                CBC: e("./cbc"),
                CFB: e("./cfb"),
                CFB8: e("./cfb8"),
                CFB1: e("./cfb1"),
                OFB: e("./ofb"),
                CTR: e("./ctr"),
                GCM: e("./ctr")
            },
            i = e("./list.json");
        for (var a in i) i[a].module = r[i[a].mode];
        t.exports = i
    }, {
        "./cbc": 26,
        "./cfb": 27,
        "./cfb1": 28,
        "./cfb8": 29,
        "./ctr": 30,
        "./ecb": 31,
        "./list.json": 33,
        "./ofb": 34
    }],
    33: [function(e, t, n) {
        t.exports = {
            "aes-128-ecb": {
                cipher: "AES",
                key: 128,
                iv: 0,
                mode: "ECB",
                type: "block"
            },
            "aes-192-ecb": {
                cipher: "AES",
                key: 192,
                iv: 0,
                mode: "ECB",
                type: "block"
            },
            "aes-256-ecb": {
                cipher: "AES",
                key: 256,
                iv: 0,
                mode: "ECB",
                type: "block"
            },
            "aes-128-cbc": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            "aes-192-cbc": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            "aes-256-cbc": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            aes128: {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            aes192: {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            aes256: {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            "aes-128-cfb": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            "aes-192-cfb": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            "aes-256-cfb": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            "aes-128-cfb8": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            },
            "aes-192-cfb8": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            },
            "aes-256-cfb8": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB8",
                type: "stream"
            },
            "aes-128-cfb1": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            },
            "aes-192-cfb1": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            },
            "aes-256-cfb1": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB1",
                type: "stream"
            },
            "aes-128-ofb": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            "aes-192-ofb": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            "aes-256-ofb": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            "aes-128-ctr": {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CTR",
                type: "stream"
            },
            "aes-192-ctr": {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CTR",
                type: "stream"
            },
            "aes-256-ctr": {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CTR",
                type: "stream"
            },
            "aes-128-gcm": {
                cipher: "AES",
                key: 128,
                iv: 12,
                mode: "GCM",
                type: "auth"
            },
            "aes-192-gcm": {
                cipher: "AES",
                key: 192,
                iv: 12,
                mode: "GCM",
                type: "auth"
            },
            "aes-256-gcm": {
                cipher: "AES",
                key: 256,
                iv: 12,
                mode: "GCM",
                type: "auth"
            }
        }
    }, {}],
    34: [function(e, t, n) {
        (function(t) {
            var r = e("buffer-xor");

            function i(e) {
                return e._prev = e._cipher.encryptBlock(e._prev), e._prev
            }
            n.encrypt = function(e, n) {
                for (; e._cache.length < n.length;) e._cache = t.concat([e._cache, i(e)]);
                var a = e._cache.slice(0, n.length);
                return e._cache = e._cache.slice(n.length), r(n, a)
            }
        }).call(this, e("buffer").Buffer)
    }, {
        buffer: 47,
        "buffer-xor": 46
    }],
    35: [function(e, t, n) {
        var r = e("./aes"),
            i = e("safe-buffer").Buffer,
            a = e("cipher-base");

        function o(e, t, n, o) {
            a.call(this), this._cipher = new r.AES(t), this._prev = i.from(n), this._cache = i.allocUnsafe(0), this._secCache = i.allocUnsafe(0), this._decrypt = o, this._mode = e
        }
        e("inherits")(o, a), o.prototype._update = function(e) {
            return this._mode.encrypt(this, e, this._decrypt)
        }, o.prototype._final = function() {
            this._cipher.scrub()
        }, t.exports = o
    }, {
        "./aes": 19,
        "cipher-base": 49,
        inherits: 101,
        "safe-buffer": 143
    }],
    36: [function(e, t, n) {
        var r = e("browserify-des"),
            i = e("browserify-aes/browser"),
            a = e("browserify-aes/modes"),
            o = e("browserify-des/modes"),
            s = e("evp_bytestokey");

        function c(e, t, n) {
            if (e = e.toLowerCase(), a[e]) return i.createCipheriv(e, t, n);
            if (o[e]) return new r({
                key: t,
                iv: n,
                mode: e
            });
            throw new TypeError("invalid suite type")
        }

        function f(e, t, n) {
            if (e = e.toLowerCase(), a[e]) return i.createDecipheriv(e, t, n);
            if (o[e]) return new r({
                key: t,
                iv: n,
                mode: e,
                decrypt: !0
            });
            throw new TypeError("invalid suite type")
        }
        n.createCipher = n.Cipher = function(e, t) {
            var n, r;
            if (e = e.toLowerCase(), a[e]) n = a[e].key, r = a[e].iv;
            else {
                if (!o[e]) throw new TypeError("invalid suite type");
                n = 8 * o[e].key, r = o[e].iv
            }
            var i = s(t, !1, n, r);
            return c(e, i.key, i.iv)
        }, n.createCipheriv = n.Cipheriv = c, n.createDecipher = n.Decipher = function(e, t) {
            var n, r;
            if (e = e.toLowerCase(), a[e]) n = a[e].key, r = a[e].iv;
            else {
                if (!o[e]) throw new TypeError("invalid suite type");
                n = 8 * o[e].key, r = o[e].iv
            }
            var i = s(t, !1, n, r);
            return f(e, i.key, i.iv)
        }, n.createDecipheriv = n.Decipheriv = f, n.listCiphers = n.getCiphers = function() {
            return Object.keys(o).concat(i.getCiphers())
        }
    }, {
        "browserify-aes/browser": 21,
        "browserify-aes/modes": 32,
        "browserify-des": 37,
        "browserify-des/modes": 38,
        evp_bytestokey: 84
    }],
    37: [function(e, t, n) {
        var r = e("cipher-base"),
            i = e("des.js"),
            a = e("inherits"),
            o = e("safe-buffer").Buffer,
            s = {
                "des-ede3-cbc": i.CBC.instantiate(i.EDE),
                "des-ede3": i.EDE,
                "des-ede-cbc": i.CBC.instantiate(i.EDE),
                "des-ede": i.EDE,
                "des-cbc": i.CBC.instantiate(i.DES),
                "des-ecb": i.DES
            };

        function c(e) {
            r.call(this);
            var t, n = e.mode.toLowerCase(),
                i = s[n];
            t = e.decrypt ? "decrypt" : "encrypt";
            var a = e.key;
            o.isBuffer(a) || (a = o.from(a)), "des-ede" !== n && "des-ede-cbc" !== n || (a = o.concat([a, a.slice(0, 8)]));
            var c = e.iv;
            o.isBuffer(c) || (c = o.from(c)), this._des = i.create({
                key: a,
                iv: c,
                type: t
            })
        }
        s.des = s["des-cbc"], s.des3 = s["des-ede3-cbc"], t.exports = c, a(c, r), c.prototype._update = function(e) {
            return o.from(this._des.update(e))
        }, c.prototype._final = function() {
            return o.from(this._des.final())
        }
    }, {
        "cipher-base": 49,
        "des.js": 57,
        inherits: 101,
        "safe-buffer": 143
    }],
    38: [function(e, t, n) {
        n["des-ecb"] = {
            key: 8,
            iv: 0
        }, n["des-cbc"] = n.des = {
            key: 8,
            iv: 8
        }, n["des-ede3-cbc"] = n.des3 = {
            key: 24,
            iv: 8
        }, n["des-ede3"] = {
            key: 24,
            iv: 0
        }, n["des-ede-cbc"] = {
            key: 16,
            iv: 8
        }, n["des-ede"] = {
            key: 16,
            iv: 0
        }
    }, {}],
    39: [function(e, t, n) {
        (function(n) {
            var r = e("bn.js"),
                i = e("randombytes");

            function a(e) {
                var t = s(e);
                return {
                    blinder: t.toRed(r.mont(e.modulus)).redPow(new r(e.publicExponent)).fromRed(),
                    unblinder: t.invm(e.modulus)
                }
            }

            function o(e, t) {
                var i = a(t),
                    o = t.modulus.byteLength(),
                    s = (r.mont(t.modulus), new r(e).mul(i.blinder).umod(t.modulus)),
                    c = s.toRed(r.mont(t.prime1)),
                    f = s.toRed(r.mont(t.prime2)),
                    h = t.coefficient,
                    d = t.prime1,
                    u = t.prime2,
                    l = c.redPow(t.exponent1),
                    p = f.redPow(t.exponent2);
                l = l.fromRed(), p = p.fromRed();
                var b = l.isub(p).imul(h).umod(d);
                return b.imul(u), p.iadd(b), new n(p.imul(i.unblinder).umod(t.modulus).toArray(!1, o))
            }

            function s(e) {
                for (var t = e.modulus.byteLength(), n = new r(i(t)); n.cmp(e.modulus) >= 0 || !n.umod(e.prime1) || !n.umod(e.prime2);) n = new r(i(t));
                return n
            }
            t.exports = o, o.getr = s
        }).call(this, e("buffer").Buffer)
    }, {
        "bn.js": 16,
        buffer: 47,
        randombytes: 125
    }],
    40: [function(e, t, n) {
        t.exports = e("./browser/algorithms.json")
    }, {
        "./browser/algorithms.json": 41
    }],
    41: [function(e, t, n) {
        t.exports = {
            sha224WithRSAEncryption: {
                sign: "rsa",
                hash: "sha224",
                id: "302d300d06096086480165030402040500041c"
            },
            "RSA-SHA224": {
                sign: "ecdsa/rsa",
                hash: "sha224",
                id: "302d300d06096086480165030402040500041c"
            },
            sha256WithRSAEncryption: {
                sign: "rsa",
                hash: "sha256",
                id: "3031300d060960864801650304020105000420"
            },
            "RSA-SHA256": {
                sign: "ecdsa/rsa",
                hash: "sha256",
                id: "3031300d060960864801650304020105000420"
            },
            sha384WithRSAEncryption: {
                sign: "rsa",
                hash: "sha384",
                id: "3041300d060960864801650304020205000430"
            },
            "RSA-SHA384": {
                sign: "ecdsa/rsa",
                hash: "sha384",
                id: "3041300d060960864801650304020205000430"
            },
            sha512WithRSAEncryption: {
                sign: "rsa",
                hash: "sha512",
                id: "3051300d060960864801650304020305000440"
            },
            "RSA-SHA512": {
                sign: "ecdsa/rsa",
                hash: "sha512",
                id: "3051300d060960864801650304020305000440"
            },
            "RSA-SHA1": {
                sign: "rsa",
                hash: "sha1",
                id: "3021300906052b0e03021a05000414"
            },
            "ecdsa-with-SHA1": {
                sign: "ecdsa",
                hash: "sha1",
                id: ""
            },
            sha256: {
                sign: "ecdsa",
                hash: "sha256",
                id: ""
            },
            sha224: {
                sign: "ecdsa",
                hash: "sha224",
                id: ""
            },
            sha384: {
                sign: "ecdsa",
                hash: "sha384",
                id: ""
            },
            sha512: {
                sign: "ecdsa",
                hash: "sha512",
                id: ""
            },
            "DSA-SHA": {
                sign: "dsa",
                hash: "sha1",
                id: ""
            },
            "DSA-SHA1": {
                sign: "dsa",
                hash: "sha1",
                id: ""
            },
            DSA: {
                sign: "dsa",
                hash: "sha1",
                id: ""
            },
            "DSA-WITH-SHA224": {
                sign: "dsa",
                hash: "sha224",
                id: ""
            },
            "DSA-SHA224": {
                sign: "dsa",
                hash: "sha224",
                id: ""
            },
            "DSA-WITH-SHA256": {
                sign: "dsa",
                hash: "sha256",
                id: ""
            },
            "DSA-SHA256": {
                sign: "dsa",
                hash: "sha256",
                id: ""
            },
            "DSA-WITH-SHA384": {
                sign: "dsa",
                hash: "sha384",
                id: ""
            },
            "DSA-SHA384": {
                sign: "dsa",
                hash: "sha384",
                id: ""
            },
            "DSA-WITH-SHA512": {
                sign: "dsa",
                hash: "sha512",
                id: ""
            },
            "DSA-SHA512": {
                sign: "dsa",
                hash: "sha512",
                id: ""
            },
            "DSA-RIPEMD160": {
                sign: "dsa",
                hash: "rmd160",
                id: ""
            },
            ripemd160WithRSA: {
                sign: "rsa",
                hash: "rmd160",
                id: "3021300906052b2403020105000414"
            },
            "RSA-RIPEMD160": {
                sign: "rsa",
                hash: "rmd160",
                id: "3021300906052b2403020105000414"
            },
            md5WithRSAEncryption: {
                sign: "rsa",
                hash: "md5",
                id: "3020300c06082a864886f70d020505000410"
            },
            "RSA-MD5": {
                sign: "rsa",
                hash: "md5",
                id: "3020300c06082a864886f70d020505000410"
            }
        }
    }, {}],
    42: [function(e, t, n) {
        t.exports = {
            "1.3.132.0.10": "secp256k1",
            "1.3.132.0.33": "p224",
            "1.2.840.10045.3.1.1": "p192",
            "1.2.840.10045.3.1.7": "p256",
            "1.3.132.0.34": "p384",
            "1.3.132.0.35": "p521"
        }
    }, {}],
    43: [function(e, t, n) {
        (function(n) {
            var r = e("create-hash"),
                i = e("stream"),
                a = e("inherits"),
                o = e("./sign"),
                s = e("./verify"),
                c = e("./algorithms.json");

            function f(e) {
                i.Writable.call(this);
                var t = c[e];
                if (!t) throw new Error("Unknown message digest");
                this._hashType = t.hash, this._hash = r(t.hash), this._tag = t.id, this._signType = t.sign
            }

            function h(e) {
                i.Writable.call(this);
                var t = c[e];
                if (!t) throw new Error("Unknown message digest");
                this._hash = r(t.hash), this._tag = t.id, this._signType = t.sign
            }

            function d(e) {
                return new f(e)
            }

            function u(e) {
                return new h(e)
            }
            Object.keys(c).forEach(function(e) {
                c[e].id = new n(c[e].id, "hex"), c[e.toLowerCase()] = c[e]
            }), a(f, i.Writable), f.prototype._write = function(e, t, n) {
                this._hash.update(e), n()
            }, f.prototype.update = function(e, t) {
                return "string" == typeof e && (e = new n(e, t)), this._hash.update(e), this
            }, f.prototype.sign = function(e, t) {
                this.end();
                var n = this._hash.digest(),
                    r = o(n, e, this._hashType, this._signType, this._tag);
                return t ? r.toString(t) : r
            }, a(h, i.Writable), h.prototype._write = function(e, t, n) {
                this._hash.update(e), n()
            }, h.prototype.update = function(e, t) {
                return "string" == typeof e && (e = new n(e, t)), this._hash.update(e), this
            }, h.prototype.verify = function(e, t, r) {
                "string" == typeof t && (t = new n(t, r)), this.end();
                var i = this._hash.digest();
                return s(t, i, e, this._signType, this._tag)
            }, t.exports = {
                Sign: d,
                Verify: u,
                createSign: d,
                createVerify: u
            }
        }).call(this, e("buffer").Buffer)
    }, {
        "./algorithms.json": 41,
        "./sign": 44,
        "./verify": 45,
        buffer: 47,
        "create-hash": 52,
        inherits: 101,
        stream: 152
    }],
    44: [function(e, t, n) {
        (function(n) {
            var r = e("create-hmac"),
                i = e("browserify-rsa"),
                a = e("elliptic").ec,
                o = e("bn.js"),
                s = e("parse-asn1"),
                c = e("./curves.json");

            function f(e, t) {
                var r = c[t.curve.join(".")];
                if (!r) throw new Error("unknown curve " + t.curve.join("."));
                var i = new a(r).keyFromPrivate(t.privateKey).sign(e);
                return new n(i.toDER())
            }

            function h(e, t, n) {
                for (var r, i = t.params.priv_key, a = t.params.p, s = t.params.q, c = t.params.g, f = new o(0), h = l(e, s).mod(s), p = !1, m = u(i, s, e, n); !1 === p;) f = y(c, r = b(s, m, n), a, s), 0 === (p = r.invm(s).imul(h.add(i.mul(f))).mod(s)).cmpn(0) && (p = !1, f = new o(0));
                return d(f, p)
            }

            function d(e, t) {
                e = e.toArray(), t = t.toArray(), 128 & e[0] && (e = [0].concat(e)), 128 & t[0] && (t = [0].concat(t));
                var r = [48, e.length + t.length + 4, 2, e.length];
                return r = r.concat(e, [2, t.length], t), new n(r)
            }

            function u(e, t, i, a) {
                if ((e = new n(e.toArray())).length < t.byteLength()) {
                    var o = new n(t.byteLength() - e.length);
                    o.fill(0), e = n.concat([o, e])
                }
                var s = i.length,
                    c = p(i, t),
                    f = new n(s);
                f.fill(1);
                var h = new n(s);
                return h.fill(0), h = r(a, h).update(f).update(new n([0])).update(e).update(c).digest(), f = r(a, h).update(f).digest(), {
                    k: h = r(a, h).update(f).update(new n([1])).update(e).update(c).digest(),
                    v: f = r(a, h).update(f).digest()
                }
            }

            function l(e, t) {
                var n = new o(e),
                    r = (e.length << 3) - t.bitLength();
                return r > 0 && n.ishrn(r), n
            }

            function p(e, t) {
                e = (e = l(e, t)).mod(t);
                var r = new n(e.toArray());
                if (r.length < t.byteLength()) {
                    var i = new n(t.byteLength() - r.length);
                    i.fill(0), r = n.concat([i, r])
                }
                return r
            }

            function b(e, t, i) {
                var a, o;
                do {
                    for (a = new n(0); 8 * a.length < e.bitLength();) t.v = r(i, t.k).update(t.v).digest(), a = n.concat([a, t.v]);
                    o = l(a, e), t.k = r(i, t.k).update(t.v).update(new n([0])).digest(), t.v = r(i, t.k).update(t.v).digest()
                } while (-1 !== o.cmp(e));
                return o
            }

            function y(e, t, n, r) {
                return e.toRed(o.mont(n)).redPow(t).fromRed().mod(r)
            }
            t.exports = function(e, t, r, a, o) {
                var c = s(t);
                if (c.curve) {
                    if ("ecdsa" !== a && "ecdsa/rsa" !== a) throw new Error("wrong private key type");
                    return f(e, c)
                }
                if ("dsa" === c.type) {
                    if ("dsa" !== a) throw new Error("wrong private key type");
                    return h(e, c, r)
                }
                if ("rsa" !== a && "ecdsa/rsa" !== a) throw new Error("wrong private key type");
                e = n.concat([o, e]);
                for (var d = c.modulus.byteLength(), u = [0, 1]; e.length + u.length + 1 < d;) u.push(255);
                u.push(0);
                for (var l = -1; ++l < e.length;) u.push(e[l]);
                return i(u, c)
            }, t.exports.getKey = u, t.exports.makeKey = b
        }).call(this, e("buffer").Buffer)
    }, {
        "./curves.json": 42,
        "bn.js": 16,
        "browserify-rsa": 39,
        buffer: 47,
        "create-hmac": 54,
        elliptic: 67,
        "parse-asn1": 111
    }],
    45: [function(e, t, n) {
        (function(n) {
            var r = e("bn.js"),
                i = e("elliptic").ec,
                a = e("parse-asn1"),
                o = e("./curves.json");

            function s(e, t, n) {
                var r = o[n.data.algorithm.curve.join(".")];
                if (!r) throw new Error("unknown curve " + n.data.algorithm.curve.join("."));
                var a = new i(r),
                    s = n.data.subjectPrivateKey.data;
                return a.verify(t, e, s)
            }

            function c(e, t, n) {
                var i = n.data.p,
                    o = n.data.q,
                    s = n.data.g,
                    c = n.data.pub_key,
                    h = a.signature.decode(e, "der"),
                    d = h.s,
                    u = h.r;
                f(d, o), f(u, o);
                var l = r.mont(i),
                    p = d.invm(o);
                return 0 === s.toRed(l).redPow(new r(t).mul(p).mod(o)).fromRed().mul(c.toRed(l).redPow(u.mul(p).mod(o)).fromRed()).mod(i).mod(o).cmp(u)
            }

            function f(e, t) {
                if (e.cmpn(0) <= 0) throw new Error("invalid sig");
                if (e.cmp(t) >= t) throw new Error("invalid sig")
            }
            t.exports = function(e, t, i, o, f) {
                var h = a(i);
                if ("ec" === h.type) {
                    if ("ecdsa" !== o && "ecdsa/rsa" !== o) throw new Error("wrong public key type");
                    return s(e, t, h)
                }
                if ("dsa" === h.type) {
                    if ("dsa" !== o) throw new Error("wrong public key type");
                    return c(e, t, h)
                }
                if ("rsa" !== o && "ecdsa/rsa" !== o) throw new Error("wrong public key type");
                t = n.concat([f, t]);
                for (var d = h.modulus.byteLength(), u = [1], l = 0; t.length + u.length + 2 < d;) u.push(255), l++;
                u.push(0);
                for (var p = -1; ++p < t.length;) u.push(t[p]);
                u = new n(u);
                var b = r.mont(h.modulus);
                e = (e = new r(e).toRed(b)).redPow(new r(h.publicExponent)), e = new n(e.fromRed().toArray());
                var y = l < 8 ? 1 : 0;
                for (d = Math.min(e.length, u.length), e.length !== u.length && (y = 1), p = -1; ++p < d;) y |= e[p] ^ u[p];
                return 0 === y
            }
        }).call(this, e("buffer").Buffer)
    }, {
        "./curves.json": 42,
        "bn.js": 16,
        buffer: 47,
        elliptic: 67,
        "parse-asn1": 111
    }],
    46: [function(e, t, n) {
        (function(e) {
            t.exports = function(t, n) {
                for (var r = Math.min(t.length, n.length), i = new e(r), a = 0; a < r; ++a) i[a] = t[a] ^ n[a];
                return i
            }
        }).call(this, e("buffer").Buffer)
    }, {
        buffer: 47
    }],
    47: [function(e, t, n) {
        (function(t) {
            "use strict";
            var r = e("base64-js"),
                i = e("ieee754"),
                a = e("isarray");

            function o() {
                return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function s(e, t) {
                if (o() < t) throw new RangeError("Invalid typed array length");
                return c.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = c.prototype : (null === e && (e = new c(t)), e.length = t), e
            }

            function c(e, t, n) {
                if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e, t, n);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return u(this, e)
                }
                return f(this, e, t, n)
            }

            function f(e, t, n, r) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? b(e, t, n, r) : "string" == typeof t ? l(e, t, n) : y(e, t)
            }

            function h(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function d(e, t, n, r) {
                return h(t), t <= 0 ? s(e, t) : void 0 !== n ? "string" == typeof r ? s(e, t).fill(n, r) : s(e, t).fill(n) : s(e, t)
            }

            function u(e, t) {
                if (h(t), e = s(e, t < 0 ? 0 : 0 | m(t)), !c.TYPED_ARRAY_SUPPORT)
                    for (var n = 0; n < t; ++n) e[n] = 0;
                return e
            }

            function l(e, t, n) {
                if ("string" == typeof n && "" !== n || (n = "utf8"), !c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | g(t, n),
                    i = (e = s(e, r)).write(t, n);
                return i !== r && (e = e.slice(0, i)), e
            }

            function p(e, t) {
                var n = t.length < 0 ? 0 : 0 | m(t.length);
                e = s(e, n);
                for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
                return e
            }

            function b(e, t, n, r) {
                if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r), c.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = c.prototype : e = p(e, t), e
            }

            function y(e, t) {
                if (c.isBuffer(t)) {
                    var n = 0 | m(t.length);
                    return 0 === (e = s(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || $(t.length) ? s(e, 0) : p(e, t);
                    if ("Buffer" === t.type && a(t.data)) return p(e, t.data)
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }

            function m(e) {
                if (e >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
                return 0 | e
            }

            function g(e, t) {
                if (c.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var n = e.length;
                if (0 === n) return 0;
                for (var r = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return Y(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return J(e).length;
                    default:
                        if (r) return Y(e).length;
                        t = ("" + t).toLowerCase(), r = !0
                }
            }

            function v(e, t, n) {
                var r = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if ((n >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return T(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return x(this, t, n);
                    case "ascii":
                        return L(this, t, n);
                    case "latin1":
                    case "binary":
                        return P(this, t, n);
                    case "base64":
                        return A(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return R(this, t, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), r = !0
                }
            }

            function _(e, t, n) {
                var r = e[t];
                e[t] = e[n], e[n] = r
            }

            function C(e, t, n, r, i) {
                if (0 === e.length) return -1;
                if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                    if (i) return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!i) return -1;
                    n = 0
                }
                if ("string" == typeof t && (t = c.from(t, r)), c.isBuffer(t)) return 0 === t.length ? -1 : w(e, t, n, r, i);
                if ("number" == typeof t) return t &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : w(e, [t], n, r, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function w(e, t, n, r, i) {
                var a, o = 1,
                    s = e.length,
                    c = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    o = 2, s /= 2, c /= 2, n /= 2
                }

                function f(e, t) {
                    return 1 === o ? e[t] : e.readUInt16BE(t * o)
                }
                if (i) {
                    var h = -1;
                    for (a = n; a < s; a++)
                        if (f(e, a) === f(t, -1 === h ? 0 : a - h)) {
                            if (-1 === h && (h = a), a - h + 1 === c) return h * o
                        } else -1 !== h && (a -= a - h), h = -1
                } else
                    for (n + c > s && (n = s - c), a = n; a >= 0; a--) {
                        for (var d = !0, u = 0; u < c; u++)
                            if (f(e, a + u) !== f(t, u)) {
                                d = !1;
                                break
                            } if (d) return a
                    }
                return -1
            }

            function B(e, t, n, r) {
                n = Number(n) || 0;
                var i = e.length - n;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                var a = t.length;
                if (a % 2 != 0) throw new TypeError("Invalid hex string");
                r > a / 2 && (r = a / 2);
                for (var o = 0; o < r; ++o) {
                    var s = parseInt(t.substr(2 * o, 2), 16);
                    if (isNaN(s)) return o;
                    e[n + o] = s
                }
                return o
            }

            function S(e, t, n, r) {
                return Q(Y(t, e.length - n), e, n, r)
            }

            function M(e, t, n, r) {
                return Q(X(t), e, n, r)
            }

            function N(e, t, n, r) {
                return M(e, t, n, r)
            }

            function E(e, t, n, r) {
                return Q(J(t), e, n, r)
            }

            function k(e, t, n, r) {
                return Q(Z(t, e.length - n), e, n, r)
            }

            function A(e, t, n) {
                return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
            }

            function x(e, t, n) {
                n = Math.min(e.length, n);
                for (var r = [], i = t; i < n;) {
                    var a, o, s, c, f = e[i],
                        h = null,
                        d = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
                    if (i + d <= n) switch (d) {
                        case 1:
                            f < 128 && (h = f);
                            break;
                        case 2:
                            128 == (192 & (a = e[i + 1])) && (c = (31 & f) << 6 | 63 & a) > 127 && (h = c);
                            break;
                        case 3:
                            a = e[i + 1], o = e[i + 2], 128 == (192 & a) && 128 == (192 & o) && (c = (15 & f) << 12 | (63 & a) << 6 | 63 & o) > 2047 && (c < 55296 || c > 57343) && (h = c);
                            break;
                        case 4:
                            a = e[i + 1], o = e[i + 2], s = e[i + 3], 128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && (c = (15 & f) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) > 65535 && c < 1114112 && (h = c)
                    }
                    null === h ? (h = 65533, d = 1) : h > 65535 && (h -= 65536, r.push(h >>> 10 & 1023 | 55296), h = 56320 | 1023 & h), r.push(h), i += d
                }
                return I(r)
            }
            n.Buffer = c, n.SlowBuffer = function(e) {
                +e != e && (e = 0);
                return c.alloc(+e)
            }, n.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), n.kMaxLength = o(), c.poolSize = 8192, c._augment = function(e) {
                return e.__proto__ = c.prototype, e
            }, c.from = function(e, t, n) {
                return f(null, e, t, n)
            }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                value: null,
                configurable: !0
            })), c.alloc = function(e, t, n) {
                return d(null, e, t, n)
            }, c.allocUnsafe = function(e) {
                return u(null, e)
            }, c.allocUnsafeSlow = function(e) {
                return u(null, e)
            }, c.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }, c.compare = function(e, t) {
                if (!c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var n = e.length, r = t.length, i = 0, a = Math.min(n, r); i < a; ++i)
                    if (e[i] !== t[i]) {
                        n = e[i], r = t[i];
                        break
                    } return n < r ? -1 : r < n ? 1 : 0
            }, c.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, c.concat = function(e, t) {
                if (!a(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return c.alloc(0);
                var n;
                if (void 0 === t)
                    for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                var r = c.allocUnsafe(t),
                    i = 0;
                for (n = 0; n < e.length; ++n) {
                    var o = e[n];
                    if (!c.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(r, i), i += o.length
                }
                return r
            }, c.byteLength = g, c.prototype._isBuffer = !0, c.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) _(this, t, t + 1);
                return this
            }, c.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) _(this, t, t + 3), _(this, t + 1, t + 2);
                return this
            }, c.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) _(this, t, t + 7), _(this, t + 1, t + 6), _(this, t + 2, t + 5), _(this, t + 3, t + 4);
                return this
            }, c.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? x(this, 0, e) : v.apply(this, arguments)
            }, c.prototype.equals = function(e) {
                if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === c.compare(this, e)
            }, c.prototype.inspect = function() {
                var e = "",
                    t = n.INSPECT_MAX_BYTES;
                return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
            }, c.prototype.compare = function(e, t, n, r, i) {
                if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                if (r >= i && t >= n) return 0;
                if (r >= i) return -1;
                if (t >= n) return 1;
                if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;
                for (var a = i - r, o = n - t, s = Math.min(a, o), f = this.slice(r, i), h = e.slice(t, n), d = 0; d < s; ++d)
                    if (f[d] !== h[d]) {
                        a = f[d], o = h[d];
                        break
                    } return a < o ? -1 : o < a ? 1 : 0
            }, c.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }, c.prototype.indexOf = function(e, t, n) {
                return C(this, e, t, n, !0)
            }, c.prototype.lastIndexOf = function(e, t, n) {
                return C(this, e, t, n, !1)
            }, c.prototype.write = function(e, t, n, r) {
                if (void 0 === t) r = "utf8", n = this.length, t = 0;
                else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                var i = this.length - t;
                if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var a = !1;;) switch (r) {
                    case "hex":
                        return B(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return S(this, e, t, n);
                    case "ascii":
                        return M(this, e, t, n);
                    case "latin1":
                    case "binary":
                        return N(this, e, t, n);
                    case "base64":
                        return E(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return k(this, e, t, n);
                    default:
                        if (a) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), a = !0
                }
            }, c.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var D = 4096;

            function I(e) {
                var t = e.length;
                if (t <= D) return String.fromCharCode.apply(String, e);
                for (var n = "", r = 0; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += D));
                return n
            }

            function L(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                return r
            }

            function P(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                return r
            }

            function T(e, t, n) {
                var r = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                for (var i = "", a = t; a < n; ++a) i += V(e[a]);
                return i
            }

            function R(e, t, n) {
                for (var r = e.slice(t, n), i = "", a = 0; a < r.length; a += 2) i += String.fromCharCode(r[a] + 256 * r[a + 1]);
                return i
            }

            function j(e, t, n) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function O(e, t, n, r, i, a) {
                if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < a) throw new RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw new RangeError("Index out of range")
            }

            function U(e, t, n, r) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, a = Math.min(e.length - n, 2); i < a; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
            }

            function z(e, t, n, r) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, a = Math.min(e.length - n, 4); i < a; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
            }

            function q(e, t, n, r, i, a) {
                if (n + r > e.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function G(e, t, n, r, a) {
                return a || q(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
            }

            function K(e, t, n, r, a) {
                return a || q(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
            }
            c.prototype.slice = function(e, t) {
                var n, r = this.length;
                if (e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), c.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = c.prototype;
                else {
                    var i = t - e;
                    n = new c(i, void 0);
                    for (var a = 0; a < i; ++a) n[a] = this[a + e]
                }
                return n
            }, c.prototype.readUIntLE = function(e, t, n) {
                e |= 0, t |= 0, n || j(e, t, this.length);
                for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i;
                return r
            }, c.prototype.readUIntBE = function(e, t, n) {
                e |= 0, t |= 0, n || j(e, t, this.length);
                for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
                return r
            }, c.prototype.readUInt8 = function(e, t) {
                return t || j(e, 1, this.length), this[e]
            }, c.prototype.readUInt16LE = function(e, t) {
                return t || j(e, 2, this.length), this[e] | this[e + 1] << 8
            }, c.prototype.readUInt16BE = function(e, t) {
                return t || j(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, c.prototype.readUInt32LE = function(e, t) {
                return t || j(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, c.prototype.readUInt32BE = function(e, t) {
                return t || j(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, c.prototype.readIntLE = function(e, t, n) {
                e |= 0, t |= 0, n || j(e, t, this.length);
                for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i;
                return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
            }, c.prototype.readIntBE = function(e, t, n) {
                e |= 0, t |= 0, n || j(e, t, this.length);
                for (var r = t, i = 1, a = this[e + --r]; r > 0 && (i *= 256);) a += this[e + --r] * i;
                return a >= (i *= 128) && (a -= Math.pow(2, 8 * t)), a
            }, c.prototype.readInt8 = function(e, t) {
                return t || j(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, c.prototype.readInt16LE = function(e, t) {
                t || j(e, 2, this.length);
                var n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, c.prototype.readInt16BE = function(e, t) {
                t || j(e, 2, this.length);
                var n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, c.prototype.readInt32LE = function(e, t) {
                return t || j(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, c.prototype.readInt32BE = function(e, t) {
                return t || j(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, c.prototype.readFloatLE = function(e, t) {
                return t || j(e, 4, this.length), i.read(this, e, !0, 23, 4)
            }, c.prototype.readFloatBE = function(e, t) {
                return t || j(e, 4, this.length), i.read(this, e, !1, 23, 4)
            }, c.prototype.readDoubleLE = function(e, t) {
                return t || j(e, 8, this.length), i.read(this, e, !0, 52, 8)
            }, c.prototype.readDoubleBE = function(e, t) {
                return t || j(e, 8, this.length), i.read(this, e, !1, 52, 8)
            }, c.prototype.writeUIntLE = function(e, t, n, r) {
                (e = +e, t |= 0, n |= 0, r) || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var i = 1,
                    a = 0;
                for (this[t] = 255 & e; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
                return t + n
            }, c.prototype.writeUIntBE = function(e, t, n, r) {
                (e = +e, t |= 0, n |= 0, r) || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                var i = n - 1,
                    a = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
                return t + n
            }, c.prototype.writeUInt8 = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, c.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : U(this, e, t, !0), t + 2
            }, c.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : U(this, e, t, !1), t + 2
            }, c.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : z(this, e, t, !0), t + 4
            }, c.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : z(this, e, t, !1), t + 4
            }, c.prototype.writeIntLE = function(e, t, n, r) {
                if (e = +e, t |= 0, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    O(this, e, t, n, i - 1, -i)
                }
                var a = 0,
                    o = 1,
                    s = 0;
                for (this[t] = 255 & e; ++a < n && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
                return t + n
            }, c.prototype.writeIntBE = function(e, t, n, r) {
                if (e = +e, t |= 0, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    O(this, e, t, n, i - 1, -i)
                }
                var a = n - 1,
                    o = 1,
                    s = 0;
                for (this[t + a] = 255 & e; --a >= 0 && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
                return t + n
            }, c.prototype.writeInt8 = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, c.prototype.writeInt16LE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : U(this, e, t, !0), t + 2
            }, c.prototype.writeInt16BE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : U(this, e, t, !1), t + 2
            }, c.prototype.writeInt32LE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : z(this, e, t, !0), t + 4
            }, c.prototype.writeInt32BE = function(e, t, n) {
                return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), c.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : z(this, e, t, !1), t + 4
            }, c.prototype.writeFloatLE = function(e, t, n) {
                return G(this, e, t, !0, n)
            }, c.prototype.writeFloatBE = function(e, t, n) {
                return G(this, e, t, !1, n)
            }, c.prototype.writeDoubleLE = function(e, t, n) {
                return K(this, e, t, !0, n)
            }, c.prototype.writeDoubleBE = function(e, t, n) {
                return K(this, e, t, !1, n)
            }, c.prototype.copy = function(e, t, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                var i, a = r - n;
                if (this === e && n < t && t < r)
                    for (i = a - 1; i >= 0; --i) e[i + t] = this[i + n];
                else if (a < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < a; ++i) e[i + t] = this[i + n];
                else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
                return a
            }, c.prototype.fill = function(e, t, n, r) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                    if ("string" == typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                if (n <= t) return this;
                var a;
                if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                    for (a = t; a < n; ++a) this[a] = e;
                else {
                    var o = c.isBuffer(e) ? e : Y(new c(e, r).toString()),
                        s = o.length;
                    for (a = 0; a < n - t; ++a) this[a + t] = o[a % s]
                }
                return this
            };
            var F = /[^+\/0-9A-Za-z-_]/g;

            function W(e) {
                if ((e = H(e).replace(F, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }

            function H(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }

            function V(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function Y(e, t) {
                var n;
                t = t || 1 / 0;
                for (var r = e.length, i = null, a = [], o = 0; o < r; ++o) {
                    if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319) {
                                (t -= 3) > -1 && a.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === r) {
                                (t -= 3) > -1 && a.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && a.push(239, 191, 189), i = n;
                            continue
                        }
                        n = 65536 + (i - 55296 << 10 | n - 56320)
                    } else i && (t -= 3) > -1 && a.push(239, 191, 189);
                    if (i = null, n < 128) {
                        if ((t -= 1) < 0) break;
                        a.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        a.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return a
            }

            function X(e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t
            }

            function Z(e, t) {
                for (var n, r, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) r = (n = e.charCodeAt(o)) >> 8, i = n % 256, a.push(i), a.push(r);
                return a
            }

            function J(e) {
                return r.toByteArray(W(e))
            }

            function Q(e, t, n, r) {
                for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                return i
            }

            function $(e) {
                return e != e
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "base64-js": 15,
        ieee754: 99,
        isarray: 48
    }],
    48: [function(e, t, n) {
        var r = {}.toString;
        t.exports = Array.isArray || function(e) {
            return "[object Array]" == r.call(e)
        }
    }, {}],
    49: [function(e, t, n) {
        var r = e("safe-buffer").Buffer,
            i = e("stream").Transform,
            a = e("string_decoder").StringDecoder;

        function o(e) {
            i.call(this), this.hashMode = "string" == typeof e, this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
        }
        e("inherits")(o, i), o.prototype.update = function(e, t, n) {
            "string" == typeof e && (e = r.from(e, t));
            var i = this._update(e);
            return this.hashMode ? this : (n && (i = this._toString(i, n)), i)
        }, o.prototype.setAutoPadding = function() {}, o.prototype.getAuthTag = function() {
            throw new Error("trying to get auth tag in unsupported state")
        }, o.prototype.setAuthTag = function() {
            throw new Error("trying to set auth tag in unsupported state")
        }, o.prototype.setAAD = function() {
            throw new Error("trying to set aad in unsupported state")
        }, o.prototype._transform = function(e, t, n) {
            var r;
            try {
                this.hashMode ? this._update(e) : this.push(this._update(e))
            } catch (e) {
                r = e
            } finally {
                n(r)
            }
        }, o.prototype._flush = function(e) {
            var t;
            try {
                this.push(this.__final())
            } catch (e) {
                t = e
            }
            e(t)
        }, o.prototype._finalOrDigest = function(e) {
            var t = this.__final() || r.alloc(0);
            return e && (t = this._toString(t, e, !0)), t
        }, o.prototype._toString = function(e, t, n) {
            if (this._decoder || (this._decoder = new a(t), this._encoding = t), this._encoding !== t) throw new Error("can't switch encodings");
            var r = this._decoder.write(e);
            return n && (r += this._decoder.end()), r
        }, t.exports = o
    }, {
        inherits: 101,
        "safe-buffer": 143,
        stream: 152,
        string_decoder: 153
    }],
    50: [function(e, t, n) {
        (function(e) {
            function t(e) {
                return Object.prototype.toString.call(e)
            }
            n.isArray = function(e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === t(e)
            }, n.isBoolean = function(e) {
                return "boolean" == typeof e
            }, n.isNull = function(e) {
                return null === e
            }, n.isNullOrUndefined = function(e) {
                return null == e
            }, n.isNumber = function(e) {
                return "number" == typeof e
            }, n.isString = function(e) {
                return "string" == typeof e
            }, n.isSymbol = function(e) {
                return "symbol" == typeof e
            }, n.isUndefined = function(e) {
                return void 0 === e
            }, n.isRegExp = function(e) {
                return "[object RegExp]" === t(e)
            }, n.isObject = function(e) {
                return "object" == typeof e && null !== e
            }, n.isDate = function(e) {
                return "[object Date]" === t(e)
            }, n.isError = function(e) {
                return "[object Error]" === t(e) || e instanceof Error
            }, n.isFunction = function(e) {
                return "function" == typeof e
            }, n.isPrimitive = function(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
            }, n.isBuffer = e.isBuffer
        }).call(this, {
            isBuffer: e("../../is-buffer/index.js")
        })
    }, {
        "../../is-buffer/index.js": 102
    }],
    51: [function(e, t, n) {
        (function(n) {
            var r = e("elliptic"),
                i = e("bn.js");
            t.exports = function(e) {
                return new o(e)
            };
            var a = {
                secp256k1: {
                    name: "secp256k1",
                    byteLength: 32
                },
                secp224r1: {
                    name: "p224",
                    byteLength: 28
                },
                prime256v1: {
                    name: "p256",
                    byteLength: 32
                },
                prime192v1: {
                    name: "p192",
                    byteLength: 24
                },
                ed25519: {
                    name: "ed25519",
                    byteLength: 32
                },
                secp384r1: {
                    name: "p384",
                    byteLength: 48
                },
                secp521r1: {
                    name: "p521",
                    byteLength: 66
                }
            };

            function o(e) {
                this.curveType = a[e], this.curveType || (this.curveType = {
                    name: e
                }), this.curve = new r.ec(this.curveType.name), this.keys = void 0
            }

            function s(e, t, r) {
                Array.isArray(e) || (e = e.toArray());
                var i = new n(e);
                if (r && i.length < r) {
                    var a = new n(r - i.length);
                    a.fill(0), i = n.concat([a, i])
                }
                return t ? i.toString(t) : i
            }
            a.p224 = a.secp224r1, a.p256 = a.secp256r1 = a.prime256v1, a.p192 = a.secp192r1 = a.prime192v1, a.p384 = a.secp384r1, a.p521 = a.secp521r1, o.prototype.generateKeys = function(e, t) {
                return this.keys = this.curve.genKeyPair(), this.getPublicKey(e, t)
            }, o.prototype.computeSecret = function(e, t, r) {
                return t = t || "utf8", n.isBuffer(e) || (e = new n(e, t)), s(this.curve.keyFromPublic(e).getPublic().mul(this.keys.getPrivate()).getX(), r, this.curveType.byteLength)
            }, o.prototype.getPublicKey = function(e, t) {
                var n = this.keys.getPublic("compressed" === t, !0);
                return "hybrid" === t && (n[n.length - 1] % 2 ? n[0] = 7 : n[0] = 6), s(n, e)
            }, o.prototype.getPrivateKey = function(e) {
                return s(this.keys.getPrivate(), e)
            }, o.prototype.setPublicKey = function(e, t) {
                return t = t || "utf8", n.isBuffer(e) || (e = new n(e, t)), this.keys._importPublic(e), this
            }, o.prototype.setPrivateKey = function(e, t) {
                t = t || "utf8", n.isBuffer(e) || (e = new n(e, t));
                var r = new i(e);
                return r = r.toString(16), this.keys = this.curve.genKeyPair(), this.keys._importPrivate(r), this
            }
        }).call(this, e("buffer").Buffer)
    }, {
        "bn.js": 16,
        buffer: 47,
        elliptic: 67
    }],
    52: [function(e, t, n) {
        "use strict";
        var r = e("inherits"),
            i = e("md5.js"),
            a = e("ripemd160"),
            o = e("sha.js"),
            s = e("cipher-base");

        function c(e) {
            s.call(this, "digest"), this._hash = e
        }
        r(c, s), c.prototype._update = function(e) {
            this._hash.update(e)
        }, c.prototype._final = function() {
            return this._hash.digest()
        }, t.exports = function(e) {
            return "md5" === (e = e.toLowerCase()) ? new i : "rmd160" === e || "ripemd160" === e ? new a : new c(o(e))
        }
    }, {
        "cipher-base": 49,
        inherits: 101,
        "md5.js": 103,
        ripemd160: 142,
        "sha.js": 145
    }],
    53: [function(e, t, n) {
        var r = e("md5.js");
        t.exports = function(e) {
            return (new r).update(e).digest()
        }
    }, {
        "md5.js": 103
    }],
    54: [function(e, t, n) {
        "use strict";
        var r = e("inherits"),
            i = e("./legacy"),
            a = e("cipher-base"),
            o = e("safe-buffer").Buffer,
            s = e("create-hash/md5"),
            c = e("ripemd160"),
            f = e("sha.js"),
            h = o.alloc(128);

        function d(e, t) {
            a.call(this, "digest"), "string" == typeof t && (t = o.from(t));
            var n = "sha512" === e || "sha384" === e ? 128 : 64;
            (this._alg = e, this._key = t, t.length > n) ? t = ("rmd160" === e ? new c : f(e)).update(t).digest(): t.length < n && (t = o.concat([t, h], n));
            for (var r = this._ipad = o.allocUnsafe(n), i = this._opad = o.allocUnsafe(n), s = 0; s < n; s++) r[s] = 54 ^ t[s], i[s] = 92 ^ t[s];
            this._hash = "rmd160" === e ? new c : f(e), this._hash.update(r)
        }
        r(d, a), d.prototype._update = function(e) {
            this._hash.update(e)
        }, d.prototype._final = function() {
            var e = this._hash.digest();
            return ("rmd160" === this._alg ? new c : f(this._alg)).update(this._opad).update(e).digest()
        }, t.exports = function(e, t) {
            return "rmd160" === (e = e.toLowerCase()) || "ripemd160" === e ? new d("rmd160", t) : "md5" === e ? new i(s, t) : new d(e, t)
        }
    }, {
        "./legacy": 55,
        "cipher-base": 49,
        "create-hash/md5": 53,
        inherits: 101,
        ripemd160: 142,
        "safe-buffer": 143,
        "sha.js": 145
    }],
    55: [function(e, t, n) {
        "use strict";
        var r = e("inherits"),
            i = e("safe-buffer").Buffer,
            a = e("cipher-base"),
            o = i.alloc(128),
            s = 64;

        function c(e, t) {
            a.call(this, "digest"), "string" == typeof t && (t = i.from(t)), this._alg = e, this._key = t, t.length > s ? t = e(t) : t.length < s && (t = i.concat([t, o], s));
            for (var n = this._ipad = i.allocUnsafe(s), r = this._opad = i.allocUnsafe(s), c = 0; c < s; c++) n[c] = 54 ^ t[c], r[c] = 92 ^ t[c];
            this._hash = [n]
        }
        r(c, a), c.prototype._update = function(e) {
            this._hash.push(e)
        }, c.prototype._final = function() {
            var e = this._alg(i.concat(this._hash));
            return this._alg(i.concat([this._opad, e]))
        }, t.exports = c
    }, {
        "cipher-base": 49,
        inherits: 101,
        "safe-buffer": 143
    }],
    56: [function(e, t, n) {
        "use strict";
        n.randomBytes = n.rng = n.pseudoRandomBytes = n.prng = e("randombytes"), n.createHash = n.Hash = e("create-hash"), n.createHmac = n.Hmac = e("create-hmac");
        var r = e("browserify-sign/algos"),
            i = Object.keys(r),
            a = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(i);
        n.getHashes = function() {
            return a
        };
        var o = e("pbkdf2");
        n.pbkdf2 = o.pbkdf2, n.pbkdf2Sync = o.pbkdf2Sync;
        var s = e("browserify-cipher");
        n.Cipher = s.Cipher, n.createCipher = s.createCipher, n.Cipheriv = s.Cipheriv, n.createCipheriv = s.createCipheriv, n.Decipher = s.Decipher, n.createDecipher = s.createDecipher, n.Decipheriv = s.Decipheriv, n.createDecipheriv = s.createDecipheriv, n.getCiphers = s.getCiphers, n.listCiphers = s.listCiphers;
        var c = e("diffie-hellman");
        n.DiffieHellmanGroup = c.DiffieHellmanGroup, n.createDiffieHellmanGroup = c.createDiffieHellmanGroup, n.getDiffieHellman = c.getDiffieHellman, n.createDiffieHellman = c.createDiffieHellman, n.DiffieHellman = c.DiffieHellman;
        var f = e("browserify-sign");
        n.createSign = f.createSign, n.Sign = f.Sign, n.createVerify = f.createVerify, n.Verify = f.Verify, n.createECDH = e("create-ecdh");
        var h = e("public-encrypt");
        n.publicEncrypt = h.publicEncrypt, n.privateEncrypt = h.privateEncrypt, n.publicDecrypt = h.publicDecrypt, n.privateDecrypt = h.privateDecrypt;
        var d = e("randomfill");
        n.randomFill = d.randomFill, n.randomFillSync = d.randomFillSync, n.createCredentials = function() {
            throw new Error(["sorry, createCredentials is not implemented yet", "we accept pull requests", "https://github.com/crypto-browserify/crypto-browserify"].join("\n"))
        }, n.constants = {
            DH_CHECK_P_NOT_SAFE_PRIME: 2,
            DH_CHECK_P_NOT_PRIME: 1,
            DH_UNABLE_TO_CHECK_GENERATOR: 4,
            DH_NOT_SUITABLE_GENERATOR: 8,
            NPN_ENABLED: 1,
            ALPN_ENABLED: 1,
            RSA_PKCS1_PADDING: 1,
            RSA_SSLV23_PADDING: 2,
            RSA_NO_PADDING: 3,
            RSA_PKCS1_OAEP_PADDING: 4,
            RSA_X931_PADDING: 5,
            RSA_PKCS1_PSS_PADDING: 6,
            POINT_CONVERSION_COMPRESSED: 2,
            POINT_CONVERSION_UNCOMPRESSED: 4,
            POINT_CONVERSION_HYBRID: 6
        }
    }, {
        "browserify-cipher": 36,
        "browserify-sign": 43,
        "browserify-sign/algos": 40,
        "create-ecdh": 51,
        "create-hash": 52,
        "create-hmac": 54,
        "diffie-hellman": 63,
        pbkdf2: 112,
        "public-encrypt": 119,
        randombytes: 125,
        randomfill: 126
    }],
    57: [function(e, t, n) {
        "use strict";
        n.utils = e("./des/utils"), n.Cipher = e("./des/cipher"), n.DES = e("./des/des"), n.CBC = e("./des/cbc"), n.EDE = e("./des/ede")
    }, {
        "./des/cbc": 58,
        "./des/cipher": 59,
        "./des/des": 60,
        "./des/ede": 61,
        "./des/utils": 62
    }],
    58: [function(e, t, n) {
        "use strict";
        var r = e("minimalistic-assert"),
            i = e("inherits"),
            a = {};

        function o(e) {
            r.equal(e.length, 8, "Invalid IV length"), this.iv = new Array(8);
            for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t]
        }
        n.instantiate = function(e) {
            function t(t) {
                e.call(this, t), this._cbcInit()
            }
            i(t, e);
            for (var n = Object.keys(a), r = 0; r < n.length; r++) {
                var o = n[r];
                t.prototype[o] = a[o]
            }
            return t.create = function(e) {
                return new t(e)
            }, t
        }, a._cbcInit = function() {
            var e = new o(this.options.iv);
            this._cbcState = e
        }, a._update = function(e, t, n, r) {
            var i = this._cbcState,
                a = this.constructor.super_.prototype,
                o = i.iv;
            if ("encrypt" === this.type) {
                for (var s = 0; s < this.blockSize; s++) o[s] ^= e[t + s];
                a._update.call(this, o, 0, n, r);
                for (s = 0; s < this.blockSize; s++) o[s] = n[r + s]
            } else {
                a._update.call(this, e, t, n, r);
                for (s = 0; s < this.blockSize; s++) n[r + s] ^= o[s];
                for (s = 0; s < this.blockSize; s++) o[s] = e[t + s]
            }
        }
    }, {
        inherits: 101,
        "minimalistic-assert": 105
    }],
    59: [function(e, t, n) {
        "use strict";
        var r = e("minimalistic-assert");

        function i(e) {
            this.options = e, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = new Array(this.blockSize), this.bufferOff = 0
        }
        t.exports = i, i.prototype._init = function() {}, i.prototype.update = function(e) {
            return 0 === e.length ? [] : "decrypt" === this.type ? this._updateDecrypt(e) : this._updateEncrypt(e)
        }, i.prototype._buffer = function(e, t) {
            for (var n = Math.min(this.buffer.length - this.bufferOff, e.length - t), r = 0; r < n; r++) this.buffer[this.bufferOff + r] = e[t + r];
            return this.bufferOff += n, n
        }, i.prototype._flushBuffer = function(e, t) {
            return this._update(this.buffer, 0, e, t), this.bufferOff = 0, this.blockSize
        }, i.prototype._updateEncrypt = function(e) {
            var t = 0,
                n = 0,
                r = (this.bufferOff + e.length) / this.blockSize | 0,
                i = new Array(r * this.blockSize);
            0 !== this.bufferOff && (t += this._buffer(e, t), this.bufferOff === this.buffer.length && (n += this._flushBuffer(i, n)));
            for (var a = e.length - (e.length - t) % this.blockSize; t < a; t += this.blockSize) this._update(e, t, i, n), n += this.blockSize;
            for (; t < e.length; t++, this.bufferOff++) this.buffer[this.bufferOff] = e[t];
            return i
        }, i.prototype._updateDecrypt = function(e) {
            for (var t = 0, n = 0, r = Math.ceil((this.bufferOff + e.length) / this.blockSize) - 1, i = new Array(r * this.blockSize); r > 0; r--) t += this._buffer(e, t), n += this._flushBuffer(i, n);
            return t += this._buffer(e, t), i
        }, i.prototype.final = function(e) {
            var t, n;
            return e && (t = this.update(e)), n = "encrypt" === this.type ? this._finalEncrypt() : this._finalDecrypt(), t ? t.concat(n) : n
        }, i.prototype._pad = function(e, t) {
            if (0 === t) return !1;
            for (; t < e.length;) e[t++] = 0;
            return !0
        }, i.prototype._finalEncrypt = function() {
            if (!this._pad(this.buffer, this.bufferOff)) return [];
            var e = new Array(this.blockSize);
            return this._update(this.buffer, 0, e, 0), e
        }, i.prototype._unpad = function(e) {
            return e
        }, i.prototype._finalDecrypt = function() {
            r.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
            var e = new Array(this.blockSize);
            return this._flushBuffer(e, 0), this._unpad(e)
        }
    }, {
        "minimalistic-assert": 105
    }],
    60: [function(e, t, n) {
        "use strict";
        var r = e("minimalistic-assert"),
            i = e("inherits"),
            a = e("../des"),
            o = a.utils,
            s = a.Cipher;

        function c() {
            this.tmp = new Array(2), this.keys = null
        }

        function f(e) {
            s.call(this, e);
            var t = new c;
            this._desState = t, this.deriveKeys(t, e.key)
        }
        i(f, s), t.exports = f, f.create = function(e) {
            return new f(e)
        };
        var h = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
        f.prototype.deriveKeys = function(e, t) {
            e.keys = new Array(32), r.equal(t.length, this.blockSize, "Invalid key length");
            var n = o.readUInt32BE(t, 0),
                i = o.readUInt32BE(t, 4);
            o.pc1(n, i, e.tmp, 0), n = e.tmp[0], i = e.tmp[1];
            for (var a = 0; a < e.keys.length; a += 2) {
                var s = h[a >>> 1];
                n = o.r28shl(n, s), i = o.r28shl(i, s), o.pc2(n, i, e.keys, a)
            }
        }, f.prototype._update = function(e, t, n, r) {
            var i = this._desState,
                a = o.readUInt32BE(e, t),
                s = o.readUInt32BE(e, t + 4);
            o.ip(a, s, i.tmp, 0), a = i.tmp[0], s = i.tmp[1], "encrypt" === this.type ? this._encrypt(i, a, s, i.tmp, 0) : this._decrypt(i, a, s, i.tmp, 0), a = i.tmp[0], s = i.tmp[1], o.writeUInt32BE(n, a, r), o.writeUInt32BE(n, s, r + 4)
        }, f.prototype._pad = function(e, t) {
            for (var n = e.length - t, r = t; r < e.length; r++) e[r] = n;
            return !0
        }, f.prototype._unpad = function(e) {
            for (var t = e[e.length - 1], n = e.length - t; n < e.length; n++) r.equal(e[n], t);
            return e.slice(0, e.length - t)
        }, f.prototype._encrypt = function(e, t, n, r, i) {
            for (var a = t, s = n, c = 0; c < e.keys.length; c += 2) {
                var f = e.keys[c],
                    h = e.keys[c + 1];
                o.expand(s, e.tmp, 0), f ^= e.tmp[0], h ^= e.tmp[1];
                var d = o.substitute(f, h),
                    u = s;
                s = (a ^ o.permute(d)) >>> 0, a = u
            }
            o.rip(s, a, r, i)
        }, f.prototype._decrypt = function(e, t, n, r, i) {
            for (var a = n, s = t, c = e.keys.length - 2; c >= 0; c -= 2) {
                var f = e.keys[c],
                    h = e.keys[c + 1];
                o.expand(a, e.tmp, 0), f ^= e.tmp[0], h ^= e.tmp[1];
                var d = o.substitute(f, h),
                    u = a;
                a = (s ^ o.permute(d)) >>> 0, s = u
            }
            o.rip(a, s, r, i)
        }
    }, {
        "../des": 57,
        inherits: 101,
        "minimalistic-assert": 105
    }],
    61: [function(e, t, n) {
        "use strict";
        var r = e("minimalistic-assert"),
            i = e("inherits"),
            a = e("../des"),
            o = a.Cipher,
            s = a.DES;

        function c(e, t) {
            r.equal(t.length, 24, "Invalid key length");
            var n = t.slice(0, 8),
                i = t.slice(8, 16),
                a = t.slice(16, 24);
            this.ciphers = "encrypt" === e ? [s.create({
                type: "encrypt",
                key: n
            }), s.create({
                type: "decrypt",
                key: i
            }), s.create({
                type: "encrypt",
                key: a
            })] : [s.create({
                type: "decrypt",
                key: a
            }), s.create({
                type: "encrypt",
                key: i
            }), s.create({
                type: "decrypt",
                key: n
            })]
        }

        function f(e) {
            o.call(this, e);
            var t = new c(this.type, this.options.key);
            this._edeState = t
        }
        i(f, o), t.exports = f, f.create = function(e) {
            return new f(e)
        }, f.prototype._update = function(e, t, n, r) {
            var i = this._edeState;
            i.ciphers[0]._update(e, t, n, r), i.ciphers[1]._update(n, r, n, r), i.ciphers[2]._update(n, r, n, r)
        }, f.prototype._pad = s.prototype._pad, f.prototype._unpad = s.prototype._unpad
    }, {
        "../des": 57,
        inherits: 101,
        "minimalistic-assert": 105
    }],
    62: [function(e, t, n) {
        "use strict";
        n.readUInt32BE = function(e, t) {
            return (e[0 + t] << 24 | e[1 + t] << 16 | e[2 + t] << 8 | e[3 + t]) >>> 0
        }, n.writeUInt32BE = function(e, t, n) {
            e[0 + n] = t >>> 24, e[1 + n] = t >>> 16 & 255, e[2 + n] = t >>> 8 & 255, e[3 + n] = 255 & t
        }, n.ip = function(e, t, n, r) {
            for (var i = 0, a = 0, o = 6; o >= 0; o -= 2) {
                for (var s = 0; s <= 24; s += 8) i <<= 1, i |= t >>> s + o & 1;
                for (s = 0; s <= 24; s += 8) i <<= 1, i |= e >>> s + o & 1
            }
            for (o = 6; o >= 0; o -= 2) {
                for (s = 1; s <= 25; s += 8) a <<= 1, a |= t >>> s + o & 1;
                for (s = 1; s <= 25; s += 8) a <<= 1, a |= e >>> s + o & 1
            }
            n[r + 0] = i >>> 0, n[r + 1] = a >>> 0
        }, n.rip = function(e, t, n, r) {
            for (var i = 0, a = 0, o = 0; o < 4; o++)
                for (var s = 24; s >= 0; s -= 8) i <<= 1, i |= t >>> s + o & 1, i <<= 1, i |= e >>> s + o & 1;
            for (o = 4; o < 8; o++)
                for (s = 24; s >= 0; s -= 8) a <<= 1, a |= t >>> s + o & 1, a <<= 1, a |= e >>> s + o & 1;
            n[r + 0] = i >>> 0, n[r + 1] = a >>> 0
        }, n.pc1 = function(e, t, n, r) {
            for (var i = 0, a = 0, o = 7; o >= 5; o--) {
                for (var s = 0; s <= 24; s += 8) i <<= 1, i |= t >> s + o & 1;
                for (s = 0; s <= 24; s += 8) i <<= 1, i |= e >> s + o & 1
            }
            for (s = 0; s <= 24; s += 8) i <<= 1, i |= t >> s + o & 1;
            for (o = 1; o <= 3; o++) {
                for (s = 0; s <= 24; s += 8) a <<= 1, a |= t >> s + o & 1;
                for (s = 0; s <= 24; s += 8) a <<= 1, a |= e >> s + o & 1
            }
            for (s = 0; s <= 24; s += 8) a <<= 1, a |= e >> s + o & 1;
            n[r + 0] = i >>> 0, n[r + 1] = a >>> 0
        }, n.r28shl = function(e, t) {
            return e << t & 268435455 | e >>> 28 - t
        };
        var r = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
        n.pc2 = function(e, t, n, i) {
            for (var a = 0, o = 0, s = r.length >>> 1, c = 0; c < s; c++) a <<= 1, a |= e >>> r[c] & 1;
            for (c = s; c < r.length; c++) o <<= 1, o |= t >>> r[c] & 1;
            n[i + 0] = a >>> 0, n[i + 1] = o >>> 0
        }, n.expand = function(e, t, n) {
            var r = 0,
                i = 0;
            r = (1 & e) << 5 | e >>> 27;
            for (var a = 23; a >= 15; a -= 4) r <<= 6, r |= e >>> a & 63;
            for (a = 11; a >= 3; a -= 4) i |= e >>> a & 63, i <<= 6;
            i |= (31 & e) << 1 | e >>> 31, t[n + 0] = r >>> 0, t[n + 1] = i >>> 0
        };
        var i = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
        n.substitute = function(e, t) {
            for (var n = 0, r = 0; r < 4; r++) {
                n <<= 4, n |= i[64 * r + (e >>> 18 - 6 * r & 63)]
            }
            for (r = 0; r < 4; r++) {
                n <<= 4, n |= i[256 + 64 * r + (t >>> 18 - 6 * r & 63)]
            }
            return n >>> 0
        };
        var a = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
        n.permute = function(e) {
            for (var t = 0, n = 0; n < a.length; n++) t <<= 1, t |= e >>> a[n] & 1;
            return t >>> 0
        }, n.padSplit = function(e, t, n) {
            for (var r = e.toString(2); r.length < t;) r = "0" + r;
            for (var i = [], a = 0; a < t; a += n) i.push(r.slice(a, a + n));
            return i.join(" ")
        }
    }, {}],
    63: [function(e, t, n) {
        (function(t) {
            var r = e("./lib/generatePrime"),
                i = e("./lib/primes.json"),
                a = e("./lib/dh");
            var o = {
                binary: !0,
                hex: !0,
                base64: !0
            };
            n.DiffieHellmanGroup = n.createDiffieHellmanGroup = n.getDiffieHellman = function(e) {
                var n = new t(i[e].prime, "hex"),
                    r = new t(i[e].gen, "hex");
                return new a(n, r)
            }, n.createDiffieHellman = n.DiffieHellman = function e(n, i, s, c) {
                return t.isBuffer(i) || void 0 === o[i] ? e(n, "binary", i, s) : (i = i || "binary", c = c || "binary", s = s || new t([2]), t.isBuffer(s) || (s = new t(s, c)), "number" == typeof n ? new a(r(n, s), s, !0) : (t.isBuffer(n) || (n = new t(n, i)), new a(n, s, !0)))
            }
        }).call(this, e("buffer").Buffer)
    }, {
        "./lib/dh": 64,
        "./lib/generatePrime": 65,
        "./lib/primes.json": 66,
        buffer: 47
    }],
    64: [function(e, t, n) {
        (function(n) {
            var r = e("bn.js"),
                i = new(e("miller-rabin")),
                a = new r(24),
                o = new r(11),
                s = new r(10),
                c = new r(3),
                f = new r(7),
                h = e("./generatePrime"),
                d = e("randombytes");

            function u(e, t) {
                return t = t || "utf8", n.isBuffer(e) || (e = new n(e, t)), this._pub = new r(e), this
            }

            function l(e, t) {
                return t = t || "utf8", n.isBuffer(e) || (e = new n(e, t)), this._priv = new r(e), this
            }
            t.exports = y;
            var p = {};

            function b(e, t) {
                var n = t.toString("hex"),
                    r = [n, e.toString(16)].join("_");
                if (r in p) return p[r];
                var d, u = 0;
                if (e.isEven() || !h.simpleSieve || !h.fermatTest(e) || !i.test(e)) return u += 1, u += "02" === n || "05" === n ? 8 : 4, p[r] = u, u;
                switch (i.test(e.shrn(1)) || (u += 2), n) {
                    case "02":
                        e.mod(a).cmp(o) && (u += 8);
                        break;
                    case "05":
                        (d = e.mod(s)).cmp(c) && d.cmp(f) && (u += 8);
                        break;
                    default:
                        u += 4
                }
                return p[r] = u, u
            }

            function y(e, t, n) {
                this.setGenerator(t), this.__prime = new r(e), this._prime = r.mont(this.__prime), this._primeLen = e.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, n ? (this.setPublicKey = u, this.setPrivateKey = l) : this._primeCode = 8
            }

            function m(e, t) {
                var r = new n(e.toArray());
                return t ? r.toString(t) : r
            }
            Object.defineProperty(y.prototype, "verifyError", {
                enumerable: !0,
                get: function() {
                    return "number" != typeof this._primeCode && (this._primeCode = b(this.__prime, this.__gen)), this._primeCode
                }
            }), y.prototype.generateKeys = function() {
                return this._priv || (this._priv = new r(d(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey()
            }, y.prototype.computeSecret = function(e) {
                var t = (e = (e = new r(e)).toRed(this._prime)).redPow(this._priv).fromRed(),
                    i = new n(t.toArray()),
                    a = this.getPrime();
                if (i.length < a.length) {
                    var o = new n(a.length - i.length);
                    o.fill(0), i = n.concat([o, i])
                }
                return i
            }, y.prototype.getPublicKey = function(e) {
                return m(this._pub, e)
            }, y.prototype.getPrivateKey = function(e) {
                return m(this._priv, e)
            }, y.prototype.getPrime = function(e) {
                return m(this.__prime, e)
            }, y.prototype.getGenerator = function(e) {
                return m(this._gen, e)
            }, y.prototype.setGenerator = function(e, t) {
                return t = t || "utf8", n.isBuffer(e) || (e = new n(e, t)), this.__gen = e, this._gen = new r(e), this
            }
        }).call(this, e("buffer").Buffer)
    }, {
        "./generatePrime": 65,
        "bn.js": 16,
        buffer: 47,
        "miller-rabin": 104,
        randombytes: 125
    }],
    65: [function(e, t, n) {
        var r = e("randombytes");
        t.exports = g, g.simpleSieve = y, g.fermatTest = m;
        var i = e("bn.js"),
            a = new i(24),
            o = new(e("miller-rabin")),
            s = new i(1),
            c = new i(2),
            f = new i(5),
            h = (new i(16), new i(8), new i(10)),
            d = new i(3),
            u = (new i(7), new i(11)),
            l = new i(4),
            p = (new i(12), null);

        function b() {
            if (null !== p) return p;
            var e = [];
            e[0] = 2;
            for (var t = 1, n = 3; n < 1048576; n += 2) {
                for (var r = Math.ceil(Math.sqrt(n)), i = 0; i < t && e[i] <= r && n % e[i] != 0; i++);
                t !== i && e[i] <= r || (e[t++] = n)
            }
            return p = e, e
        }

        function y(e) {
            for (var t = b(), n = 0; n < t.length; n++)
                if (0 === e.modn(t[n])) return 0 === e.cmpn(t[n]);
            return !0
        }

        function m(e) {
            var t = i.mont(e);
            return 0 === c.toRed(t).redPow(e.subn(1)).fromRed().cmpn(1)
        }

        function g(e, t) {
            if (e < 16) return new i(2 === t || 5 === t ? [140, 123] : [140, 39]);
            var n, p;
            for (t = new i(t);;) {
                for (n = new i(r(Math.ceil(e / 8))); n.bitLength() > e;) n.ishrn(1);
                if (n.isEven() && n.iadd(s), n.testn(1) || n.iadd(c), t.cmp(c)) {
                    if (!t.cmp(f))
                        for (; n.mod(h).cmp(d);) n.iadd(l)
                } else
                    for (; n.mod(a).cmp(u);) n.iadd(l);
                if (y(p = n.shrn(1)) && y(n) && m(p) && m(n) && o.test(p) && o.test(n)) return n
            }
        }
    }, {
        "bn.js": 16,
        "miller-rabin": 104,
        randombytes: 125
    }],
    66: [function(e, t, n) {
        t.exports = {
            modp1: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
            },
            modp2: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
            },
            modp5: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
            },
            modp14: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
            },
            modp15: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
            },
            modp16: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
            },
            modp17: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
            },
            modp18: {
                gen: "02",
                prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
            }
        }
    }, {}],
    67: [function(e, t, n) {
        "use strict";
        var r = n;
        r.version = e("../package.json").version, r.utils = e("./elliptic/utils"), r.rand = e("brorand"), r.curve = e("./elliptic/curve"), r.curves = e("./elliptic/curves"), r.ec = e("./elliptic/ec"), r.eddsa = e("./elliptic/eddsa")
    }, {
        "../package.json": 82,
        "./elliptic/curve": 70,
        "./elliptic/curves": 73,
        "./elliptic/ec": 74,
        "./elliptic/eddsa": 77,
        "./elliptic/utils": 81,
        brorand: 17
    }],
    68: [function(e, t, n) {
        "use strict";
        var r = e("bn.js"),
            i = e("../utils"),
            a = i.getNAF,
            o = i.getJSF,
            s = i.assert;

        function c(e, t) {
            this.type = e, this.p = new r(t.p, 16), this.red = t.prime ? r.red(t.prime) : r.mont(this.p), this.zero = new r(0).toRed(this.red), this.one = new r(1).toRed(this.red), this.two = new r(2).toRed(this.red), this.n = t.n && new r(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4);
            var n = this.n && this.p.div(this.n);
            !n || n.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
        }

        function f(e, t) {
            this.curve = e, this.type = t, this.precomputed = null
        }
        t.exports = c, c.prototype.point = function() {
            throw new Error("Not implemented")
        }, c.prototype.validate = function() {
            throw new Error("Not implemented")
        }, c.prototype._fixedNafMul = function(e, t) {
            s(e.precomputed);
            var n = e._getDoubles(),
                r = a(t, 1),
                i = (1 << n.step + 1) - (n.step % 2 == 0 ? 2 : 1);
            i /= 3;
            for (var o = [], c = 0; c < r.length; c += n.step) {
                var f = 0;
                for (t = c + n.step - 1; t >= c; t--) f = (f << 1) + r[t];
                o.push(f)
            }
            for (var h = this.jpoint(null, null, null), d = this.jpoint(null, null, null), u = i; u > 0; u--) {
                for (c = 0; c < o.length; c++) {
                    (f = o[c]) === u ? d = d.mixedAdd(n.points[c]) : f === -u && (d = d.mixedAdd(n.points[c].neg()))
                }
                h = h.add(d)
            }
            return h.toP()
        }, c.prototype._wnafMul = function(e, t) {
            var n = 4,
                r = e._getNAFPoints(n);
            n = r.wnd;
            for (var i = r.points, o = a(t, n), c = this.jpoint(null, null, null), f = o.length - 1; f >= 0; f--) {
                for (t = 0; f >= 0 && 0 === o[f]; f--) t++;
                if (f >= 0 && t++, c = c.dblp(t), f < 0) break;
                var h = o[f];
                s(0 !== h), c = "affine" === e.type ? h > 0 ? c.mixedAdd(i[h - 1 >> 1]) : c.mixedAdd(i[-h - 1 >> 1].neg()) : h > 0 ? c.add(i[h - 1 >> 1]) : c.add(i[-h - 1 >> 1].neg())
            }
            return "affine" === e.type ? c.toP() : c
        }, c.prototype._wnafMulAdd = function(e, t, n, r, i) {
            for (var s = this._wnafT1, c = this._wnafT2, f = this._wnafT3, h = 0, d = 0; d < r; d++) {
                var u = (M = t[d])._getNAFPoints(e);
                s[d] = u.wnd, c[d] = u.points
            }
            for (d = r - 1; d >= 1; d -= 2) {
                var l = d - 1,
                    p = d;
                if (1 === s[l] && 1 === s[p]) {
                    var b = [t[l], null, null, t[p]];
                    0 === t[l].y.cmp(t[p].y) ? (b[1] = t[l].add(t[p]), b[2] = t[l].toJ().mixedAdd(t[p].neg())) : 0 === t[l].y.cmp(t[p].y.redNeg()) ? (b[1] = t[l].toJ().mixedAdd(t[p]), b[2] = t[l].add(t[p].neg())) : (b[1] = t[l].toJ().mixedAdd(t[p]), b[2] = t[l].toJ().mixedAdd(t[p].neg()));
                    var y = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                        m = o(n[l], n[p]);
                    h = Math.max(m[0].length, h), f[l] = new Array(h), f[p] = new Array(h);
                    for (var g = 0; g < h; g++) {
                        var v = 0 | m[0][g],
                            _ = 0 | m[1][g];
                        f[l][g] = y[3 * (v + 1) + (_ + 1)], f[p][g] = 0, c[l] = b
                    }
                } else f[l] = a(n[l], s[l]), f[p] = a(n[p], s[p]), h = Math.max(f[l].length, h), h = Math.max(f[p].length, h)
            }
            var C = this.jpoint(null, null, null),
                w = this._wnafT4;
            for (d = h; d >= 0; d--) {
                for (var B = 0; d >= 0;) {
                    var S = !0;
                    for (g = 0; g < r; g++) w[g] = 0 | f[g][d], 0 !== w[g] && (S = !1);
                    if (!S) break;
                    B++, d--
                }
                if (d >= 0 && B++, C = C.dblp(B), d < 0) break;
                for (g = 0; g < r; g++) {
                    var M, N = w[g];
                    0 !== N && (N > 0 ? M = c[g][N - 1 >> 1] : N < 0 && (M = c[g][-N - 1 >> 1].neg()), C = "affine" === M.type ? C.mixedAdd(M) : C.add(M))
                }
            }
            for (d = 0; d < r; d++) c[d] = null;
            return i ? C : C.toP()
        }, c.BasePoint = f, f.prototype.eq = function() {
            throw new Error("Not implemented")
        }, f.prototype.validate = function() {
            return this.curve.validate(this)
        }, c.prototype.decodePoint = function(e, t) {
            e = i.toArray(e, t);
            var n = this.p.byteLength();
            if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * n) return 6 === e[0] ? s(e[e.length - 1] % 2 == 0) : 7 === e[0] && s(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + n), e.slice(1 + n, 1 + 2 * n));
            if ((2 === e[0] || 3 === e[0]) && e.length - 1 === n) return this.pointFromX(e.slice(1, 1 + n), 3 === e[0]);
            throw new Error("Unknown point format")
        }, f.prototype.encodeCompressed = function(e) {
            return this.encode(e, !0)
        }, f.prototype._encode = function(e) {
            var t = this.curve.p.byteLength(),
                n = this.getX().toArray("be", t);
            return e ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray("be", t))
        }, f.prototype.encode = function(e, t) {
            return i.encode(this._encode(t), e)
        }, f.prototype.precompute = function(e) {
            if (this.precomputed) return this;
            var t = {
                doubles: null,
                naf: null,
                beta: null
            };
            return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this
        }, f.prototype._hasDoubles = function(e) {
            if (!this.precomputed) return !1;
            var t = this.precomputed.doubles;
            return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step)
        }, f.prototype._getDoubles = function(e, t) {
            if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
            for (var n = [this], r = this, i = 0; i < t; i += e) {
                for (var a = 0; a < e; a++) r = r.dbl();
                n.push(r)
            }
            return {
                step: e,
                points: n
            }
        }, f.prototype._getNAFPoints = function(e) {
            if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
            for (var t = [this], n = (1 << e) - 1, r = 1 === n ? null : this.dbl(), i = 1; i < n; i++) t[i] = t[i - 1].add(r);
            return {
                wnd: e,
                points: t
            }
        }, f.prototype._getBeta = function() {
            return null
        }, f.prototype.dblp = function(e) {
            for (var t = this, n = 0; n < e; n++) t = t.dbl();
            return t
        }
    }, {
        "../utils": 81,
        "bn.js": 16
    }],
    69: [function(e, t, n) {
        "use strict";
        var r = e("../utils"),
            i = e("bn.js"),
            a = e("inherits"),
            o = e("./base"),
            s = r.assert;

        function c(e) {
            this.twisted = 1 != (0 | e.a), this.mOneA = this.twisted && -1 == (0 | e.a), this.extended = this.mOneA, o.call(this, "edwards", e), this.a = new i(e.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new i(e.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new i(e.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), s(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e.c)
        }

        function f(e, t, n, r, a) {
            o.BasePoint.call(this, e, "projective"), null === t && null === n && null === r ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new i(t, 16), this.y = new i(n, 16), this.z = r ? new i(r, 16) : this.curve.one, this.t = a && new i(a, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
        }
        a(c, o), t.exports = c, c.prototype._mulA = function(e) {
            return this.mOneA ? e.redNeg() : this.a.redMul(e)
        }, c.prototype._mulC = function(e) {
            return this.oneC ? e : this.c.redMul(e)
        }, c.prototype.jpoint = function(e, t, n, r) {
            return this.point(e, t, n, r)
        }, c.prototype.pointFromX = function(e, t) {
            (e = new i(e, 16)).red || (e = e.toRed(this.red));
            var n = e.redSqr(),
                r = this.c2.redSub(this.a.redMul(n)),
                a = this.one.redSub(this.c2.redMul(this.d).redMul(n)),
                o = r.redMul(a.redInvm()),
                s = o.redSqrt();
            if (0 !== s.redSqr().redSub(o).cmp(this.zero)) throw new Error("invalid point");
            var c = s.fromRed().isOdd();
            return (t && !c || !t && c) && (s = s.redNeg()), this.point(e, s)
        }, c.prototype.pointFromY = function(e, t) {
            (e = new i(e, 16)).red || (e = e.toRed(this.red));
            var n = e.redSqr(),
                r = n.redSub(this.c2),
                a = n.redMul(this.d).redMul(this.c2).redSub(this.a),
                o = r.redMul(a.redInvm());
            if (0 === o.cmp(this.zero)) {
                if (t) throw new Error("invalid point");
                return this.point(this.zero, e)
            }
            var s = o.redSqrt();
            if (0 !== s.redSqr().redSub(o).cmp(this.zero)) throw new Error("invalid point");
            return s.fromRed().isOdd() !== t && (s = s.redNeg()), this.point(s, e)
        }, c.prototype.validate = function(e) {
            if (e.isInfinity()) return !0;
            e.normalize();
            var t = e.x.redSqr(),
                n = e.y.redSqr(),
                r = t.redMul(this.a).redAdd(n),
                i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(n)));
            return 0 === r.cmp(i)
        }, a(f, o.BasePoint), c.prototype.pointFromJSON = function(e) {
            return f.fromJSON(this, e)
        }, c.prototype.point = function(e, t, n, r) {
            return new f(this, e, t, n, r)
        }, f.fromJSON = function(e, t) {
            return new f(e, t[0], t[1], t[2])
        }, f.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }, f.prototype.isInfinity = function() {
            return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c))
        }, f.prototype._extDbl = function() {
            var e = this.x.redSqr(),
                t = this.y.redSqr(),
                n = this.z.redSqr();
            n = n.redIAdd(n);
            var r = this.curve._mulA(e),
                i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
                a = r.redAdd(t),
                o = a.redSub(n),
                s = r.redSub(t),
                c = i.redMul(o),
                f = a.redMul(s),
                h = i.redMul(s),
                d = o.redMul(a);
            return this.curve.point(c, f, d, h)
        }, f.prototype._projDbl = function() {
            var e, t, n, r = this.x.redAdd(this.y).redSqr(),
                i = this.x.redSqr(),
                a = this.y.redSqr();
            if (this.curve.twisted) {
                var o = (f = this.curve._mulA(i)).redAdd(a);
                if (this.zOne) e = r.redSub(i).redSub(a).redMul(o.redSub(this.curve.two)), t = o.redMul(f.redSub(a)), n = o.redSqr().redSub(o).redSub(o);
                else {
                    var s = this.z.redSqr(),
                        c = o.redSub(s).redISub(s);
                    e = r.redSub(i).redISub(a).redMul(c), t = o.redMul(f.redSub(a)), n = o.redMul(c)
                }
            } else {
                var f = i.redAdd(a);
                s = this.curve._mulC(this.z).redSqr(), c = f.redSub(s).redSub(s);
                e = this.curve._mulC(r.redISub(f)).redMul(c), t = this.curve._mulC(f).redMul(i.redISub(a)), n = f.redMul(c)
            }
            return this.curve.point(e, t, n)
        }, f.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
        }, f.prototype._extAdd = function(e) {
            var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
                n = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
                r = this.t.redMul(this.curve.dd).redMul(e.t),
                i = this.z.redMul(e.z.redAdd(e.z)),
                a = n.redSub(t),
                o = i.redSub(r),
                s = i.redAdd(r),
                c = n.redAdd(t),
                f = a.redMul(o),
                h = s.redMul(c),
                d = a.redMul(c),
                u = o.redMul(s);
            return this.curve.point(f, h, u, d)
        }, f.prototype._projAdd = function(e) {
            var t, n, r = this.z.redMul(e.z),
                i = r.redSqr(),
                a = this.x.redMul(e.x),
                o = this.y.redMul(e.y),
                s = this.curve.d.redMul(a).redMul(o),
                c = i.redSub(s),
                f = i.redAdd(s),
                h = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(a).redISub(o),
                d = r.redMul(c).redMul(h);
            return this.curve.twisted ? (t = r.redMul(f).redMul(o.redSub(this.curve._mulA(a))), n = c.redMul(f)) : (t = r.redMul(f).redMul(o.redSub(a)), n = this.curve._mulC(c).redMul(f)), this.curve.point(d, t, n)
        }, f.prototype.add = function(e) {
            return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e)
        }, f.prototype.mul = function(e) {
            return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e)
        }, f.prototype.mulAdd = function(e, t, n) {
            return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !1)
        }, f.prototype.jmulAdd = function(e, t, n) {
            return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !0)
        }, f.prototype.normalize = function() {
            if (this.zOne) return this;
            var e = this.z.redInvm();
            return this.x = this.x.redMul(e), this.y = this.y.redMul(e), this.t && (this.t = this.t.redMul(e)), this.z = this.curve.one, this.zOne = !0, this
        }, f.prototype.neg = function() {
            return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
        }, f.prototype.getX = function() {
            return this.normalize(), this.x.fromRed()
        }, f.prototype.getY = function() {
            return this.normalize(), this.y.fromRed()
        }, f.prototype.eq = function(e) {
            return this === e || 0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY())
        }, f.prototype.eqXToP = function(e) {
            var t = e.toRed(this.curve.red).redMul(this.z);
            if (0 === this.x.cmp(t)) return !0;
            for (var n = e.clone(), r = this.curve.redN.redMul(this.z);;) {
                if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
                if (t.redIAdd(r), 0 === this.x.cmp(t)) return !0
            }
        }, f.prototype.toP = f.prototype.normalize, f.prototype.mixedAdd = f.prototype.add
    }, {
        "../utils": 81,
        "./base": 68,
        "bn.js": 16,
        inherits: 101
    }],
    70: [function(e, t, n) {
        "use strict";
        var r = n;
        r.base = e("./base"), r.short = e("./short"), r.mont = e("./mont"), r.edwards = e("./edwards")
    }, {
        "./base": 68,
        "./edwards": 69,
        "./mont": 71,
        "./short": 72
    }],
    71: [function(e, t, n) {
        "use strict";
        var r = e("bn.js"),
            i = e("inherits"),
            a = e("./base"),
            o = e("../utils");

        function s(e) {
            a.call(this, "mont", e), this.a = new r(e.a, 16).toRed(this.red), this.b = new r(e.b, 16).toRed(this.red), this.i4 = new r(4).toRed(this.red).redInvm(), this.two = new r(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
        }

        function c(e, t, n) {
            a.BasePoint.call(this, e, "projective"), null === t && null === n ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new r(t, 16), this.z = new r(n, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
        }
        i(s, a), t.exports = s, s.prototype.validate = function(e) {
            var t = e.normalize().x,
                n = t.redSqr(),
                r = n.redMul(t).redAdd(n.redMul(this.a)).redAdd(t);
            return 0 === r.redSqrt().redSqr().cmp(r)
        }, i(c, a.BasePoint), s.prototype.decodePoint = function(e, t) {
            return this.point(o.toArray(e, t), 1)
        }, s.prototype.point = function(e, t) {
            return new c(this, e, t)
        }, s.prototype.pointFromJSON = function(e) {
            return c.fromJSON(this, e)
        }, c.prototype.precompute = function() {}, c.prototype._encode = function() {
            return this.getX().toArray("be", this.curve.p.byteLength())
        }, c.fromJSON = function(e, t) {
            return new c(e, t[0], t[1] || e.one)
        }, c.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
        }, c.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }, c.prototype.dbl = function() {
            var e = this.x.redAdd(this.z).redSqr(),
                t = this.x.redSub(this.z).redSqr(),
                n = e.redSub(t),
                r = e.redMul(t),
                i = n.redMul(t.redAdd(this.curve.a24.redMul(n)));
            return this.curve.point(r, i)
        }, c.prototype.add = function() {
            throw new Error("Not supported on Montgomery curve")
        }, c.prototype.diffAdd = function(e, t) {
            var n = this.x.redAdd(this.z),
                r = this.x.redSub(this.z),
                i = e.x.redAdd(e.z),
                a = e.x.redSub(e.z).redMul(n),
                o = i.redMul(r),
                s = t.z.redMul(a.redAdd(o).redSqr()),
                c = t.x.redMul(a.redISub(o).redSqr());
            return this.curve.point(s, c)
        }, c.prototype.mul = function(e) {
            for (var t = e.clone(), n = this, r = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1)) i.push(t.andln(1));
            for (var a = i.length - 1; a >= 0; a--) 0 === i[a] ? (n = n.diffAdd(r, this), r = r.dbl()) : (r = n.diffAdd(r, this), n = n.dbl());
            return r
        }, c.prototype.mulAdd = function() {
            throw new Error("Not supported on Montgomery curve")
        }, c.prototype.jumlAdd = function() {
            throw new Error("Not supported on Montgomery curve")
        }, c.prototype.eq = function(e) {
            return 0 === this.getX().cmp(e.getX())
        }, c.prototype.normalize = function() {
            return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
        }, c.prototype.getX = function() {
            return this.normalize(), this.x.fromRed()
        }
    }, {
        "../utils": 81,
        "./base": 68,
        "bn.js": 16,
        inherits: 101
    }],
    72: [function(e, t, n) {
        "use strict";
        var r = e("../utils"),
            i = e("bn.js"),
            a = e("inherits"),
            o = e("./base"),
            s = r.assert;

        function c(e) {
            o.call(this, "short", e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
        }

        function f(e, t, n, r) {
            o.BasePoint.call(this, e, "affine"), null === t && null === n ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(t, 16), this.y = new i(n, 16), r && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
        }

        function h(e, t, n, r) {
            o.BasePoint.call(this, e, "jacobian"), null === t && null === n && null === r ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(t, 16), this.y = new i(n, 16), this.z = new i(r, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
        }
        a(c, o), t.exports = c, c.prototype._getEndomorphism = function(e) {
            if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
                var t, n;
                if (e.beta) t = new i(e.beta, 16).toRed(this.red);
                else {
                    var r = this._getEndoRoots(this.p);
                    t = (t = r[0].cmp(r[1]) < 0 ? r[0] : r[1]).toRed(this.red)
                }
                if (e.lambda) n = new i(e.lambda, 16);
                else {
                    var a = this._getEndoRoots(this.n);
                    0 === this.g.mul(a[0]).x.cmp(this.g.x.redMul(t)) ? n = a[0] : (n = a[1], s(0 === this.g.mul(n).x.cmp(this.g.x.redMul(t))))
                }
                return {
                    beta: t,
                    lambda: n,
                    basis: e.basis ? e.basis.map(function(e) {
                        return {
                            a: new i(e.a, 16),
                            b: new i(e.b, 16)
                        }
                    }) : this._getEndoBasis(n)
                }
            }
        }, c.prototype._getEndoRoots = function(e) {
            var t = e === this.p ? this.red : i.mont(e),
                n = new i(2).toRed(t).redInvm(),
                r = n.redNeg(),
                a = new i(3).toRed(t).redNeg().redSqrt().redMul(n);
            return [r.redAdd(a).fromRed(), r.redSub(a).fromRed()]
        }, c.prototype._getEndoBasis = function(e) {
            for (var t, n, r, a, o, s, c, f, h, d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), u = e, l = this.n.clone(), p = new i(1), b = new i(0), y = new i(0), m = new i(1), g = 0; 0 !== u.cmpn(0);) {
                var v = l.div(u);
                f = l.sub(v.mul(u)), h = y.sub(v.mul(p));
                var _ = m.sub(v.mul(b));
                if (!r && f.cmp(d) < 0) t = c.neg(), n = p, r = f.neg(), a = h;
                else if (r && 2 == ++g) break;
                c = f, l = u, u = f, y = p, p = h, m = b, b = _
            }
            o = f.neg(), s = h;
            var C = r.sqr().add(a.sqr());
            return o.sqr().add(s.sqr()).cmp(C) >= 0 && (o = t, s = n), r.negative && (r = r.neg(), a = a.neg()), o.negative && (o = o.neg(), s = s.neg()), [{
                a: r,
                b: a
            }, {
                a: o,
                b: s
            }]
        }, c.prototype._endoSplit = function(e) {
            var t = this.endo.basis,
                n = t[0],
                r = t[1],
                i = r.b.mul(e).divRound(this.n),
                a = n.b.neg().mul(e).divRound(this.n),
                o = i.mul(n.a),
                s = a.mul(r.a),
                c = i.mul(n.b),
                f = a.mul(r.b);
            return {
                k1: e.sub(o).sub(s),
                k2: c.add(f).neg()
            }
        }, c.prototype.pointFromX = function(e, t) {
            (e = new i(e, 16)).red || (e = e.toRed(this.red));
            var n = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
                r = n.redSqrt();
            if (0 !== r.redSqr().redSub(n).cmp(this.zero)) throw new Error("invalid point");
            var a = r.fromRed().isOdd();
            return (t && !a || !t && a) && (r = r.redNeg()), this.point(e, r)
        }, c.prototype.validate = function(e) {
            if (e.inf) return !0;
            var t = e.x,
                n = e.y,
                r = this.a.redMul(t),
                i = t.redSqr().redMul(t).redIAdd(r).redIAdd(this.b);
            return 0 === n.redSqr().redISub(i).cmpn(0)
        }, c.prototype._endoWnafMulAdd = function(e, t, n) {
            for (var r = this._endoWnafT1, i = this._endoWnafT2, a = 0; a < e.length; a++) {
                var o = this._endoSplit(t[a]),
                    s = e[a],
                    c = s._getBeta();
                o.k1.negative && (o.k1.ineg(), s = s.neg(!0)), o.k2.negative && (o.k2.ineg(), c = c.neg(!0)), r[2 * a] = s, r[2 * a + 1] = c, i[2 * a] = o.k1, i[2 * a + 1] = o.k2
            }
            for (var f = this._wnafMulAdd(1, r, i, 2 * a, n), h = 0; h < 2 * a; h++) r[h] = null, i[h] = null;
            return f
        }, a(f, o.BasePoint), c.prototype.point = function(e, t, n) {
            return new f(this, e, t, n)
        }, c.prototype.pointFromJSON = function(e, t) {
            return f.fromJSON(this, e, t)
        }, f.prototype._getBeta = function() {
            if (this.curve.endo) {
                var e = this.precomputed;
                if (e && e.beta) return e.beta;
                var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
                if (e) {
                    var n = this.curve,
                        r = function(e) {
                            return n.point(e.x.redMul(n.endo.beta), e.y)
                        };
                    e.beta = t, t.precomputed = {
                        beta: null,
                        naf: e.naf && {
                            wnd: e.naf.wnd,
                            points: e.naf.points.map(r)
                        },
                        doubles: e.doubles && {
                            step: e.doubles.step,
                            points: e.doubles.points.map(r)
                        }
                    }
                }
                return t
            }
        }, f.prototype.toJSON = function() {
            return this.precomputed ? [this.x, this.y, this.precomputed && {
                doubles: this.precomputed.doubles && {
                    step: this.precomputed.doubles.step,
                    points: this.precomputed.doubles.points.slice(1)
                },
                naf: this.precomputed.naf && {
                    wnd: this.precomputed.naf.wnd,
                    points: this.precomputed.naf.points.slice(1)
                }
            }] : [this.x, this.y]
        }, f.fromJSON = function(e, t, n) {
            "string" == typeof t && (t = JSON.parse(t));
            var r = e.point(t[0], t[1], n);
            if (!t[2]) return r;

            function i(t) {
                return e.point(t[0], t[1], n)
            }
            var a = t[2];
            return r.precomputed = {
                beta: null,
                doubles: a.doubles && {
                    step: a.doubles.step,
                    points: [r].concat(a.doubles.points.map(i))
                },
                naf: a.naf && {
                    wnd: a.naf.wnd,
                    points: [r].concat(a.naf.points.map(i))
                }
            }, r
        }, f.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
        }, f.prototype.isInfinity = function() {
            return this.inf
        }, f.prototype.add = function(e) {
            if (this.inf) return e;
            if (e.inf) return this;
            if (this.eq(e)) return this.dbl();
            if (this.neg().eq(e)) return this.curve.point(null, null);
            if (0 === this.x.cmp(e.x)) return this.curve.point(null, null);
            var t = this.y.redSub(e.y);
            0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
            var n = t.redSqr().redISub(this.x).redISub(e.x),
                r = t.redMul(this.x.redSub(n)).redISub(this.y);
            return this.curve.point(n, r)
        }, f.prototype.dbl = function() {
            if (this.inf) return this;
            var e = this.y.redAdd(this.y);
            if (0 === e.cmpn(0)) return this.curve.point(null, null);
            var t = this.curve.a,
                n = this.x.redSqr(),
                r = e.redInvm(),
                i = n.redAdd(n).redIAdd(n).redIAdd(t).redMul(r),
                a = i.redSqr().redISub(this.x.redAdd(this.x)),
                o = i.redMul(this.x.redSub(a)).redISub(this.y);
            return this.curve.point(a, o)
        }, f.prototype.getX = function() {
            return this.x.fromRed()
        }, f.prototype.getY = function() {
            return this.y.fromRed()
        }, f.prototype.mul = function(e) {
            return e = new i(e, 16), this.isInfinity() ? this : this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e]) : this.curve._wnafMul(this, e)
        }, f.prototype.mulAdd = function(e, t, n) {
            var r = [this, t],
                i = [e, n];
            return this.curve.endo ? this.curve._endoWnafMulAdd(r, i) : this.curve._wnafMulAdd(1, r, i, 2)
        }, f.prototype.jmulAdd = function(e, t, n) {
            var r = [this, t],
                i = [e, n];
            return this.curve.endo ? this.curve._endoWnafMulAdd(r, i, !0) : this.curve._wnafMulAdd(1, r, i, 2, !0)
        }, f.prototype.eq = function(e) {
            return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y))
        }, f.prototype.neg = function(e) {
            if (this.inf) return this;
            var t = this.curve.point(this.x, this.y.redNeg());
            if (e && this.precomputed) {
                var n = this.precomputed,
                    r = function(e) {
                        return e.neg()
                    };
                t.precomputed = {
                    naf: n.naf && {
                        wnd: n.naf.wnd,
                        points: n.naf.points.map(r)
                    },
                    doubles: n.doubles && {
                        step: n.doubles.step,
                        points: n.doubles.points.map(r)
                    }
                }
            }
            return t
        }, f.prototype.toJ = function() {
            return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one)
        }, a(h, o.BasePoint), c.prototype.jpoint = function(e, t, n) {
            return new h(this, e, t, n)
        }, h.prototype.toP = function() {
            if (this.isInfinity()) return this.curve.point(null, null);
            var e = this.z.redInvm(),
                t = e.redSqr(),
                n = this.x.redMul(t),
                r = this.y.redMul(t).redMul(e);
            return this.curve.point(n, r)
        }, h.prototype.neg = function() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
        }, h.prototype.add = function(e) {
            if (this.isInfinity()) return e;
            if (e.isInfinity()) return this;
            var t = e.z.redSqr(),
                n = this.z.redSqr(),
                r = this.x.redMul(t),
                i = e.x.redMul(n),
                a = this.y.redMul(t.redMul(e.z)),
                o = e.y.redMul(n.redMul(this.z)),
                s = r.redSub(i),
                c = a.redSub(o);
            if (0 === s.cmpn(0)) return 0 !== c.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var f = s.redSqr(),
                h = f.redMul(s),
                d = r.redMul(f),
                u = c.redSqr().redIAdd(h).redISub(d).redISub(d),
                l = c.redMul(d.redISub(u)).redISub(a.redMul(h)),
                p = this.z.redMul(e.z).redMul(s);
            return this.curve.jpoint(u, l, p)
        }, h.prototype.mixedAdd = function(e) {
            if (this.isInfinity()) return e.toJ();
            if (e.isInfinity()) return this;
            var t = this.z.redSqr(),
                n = this.x,
                r = e.x.redMul(t),
                i = this.y,
                a = e.y.redMul(t).redMul(this.z),
                o = n.redSub(r),
                s = i.redSub(a);
            if (0 === o.cmpn(0)) return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            var c = o.redSqr(),
                f = c.redMul(o),
                h = n.redMul(c),
                d = s.redSqr().redIAdd(f).redISub(h).redISub(h),
                u = s.redMul(h.redISub(d)).redISub(i.redMul(f)),
                l = this.z.redMul(o);
            return this.curve.jpoint(d, u, l)
        }, h.prototype.dblp = function(e) {
            if (0 === e) return this;
            if (this.isInfinity()) return this;
            if (!e) return this.dbl();
            if (this.curve.zeroA || this.curve.threeA) {
                for (var t = this, n = 0; n < e; n++) t = t.dbl();
                return t
            }
            var r = this.curve.a,
                i = this.curve.tinv,
                a = this.x,
                o = this.y,
                s = this.z,
                c = s.redSqr().redSqr(),
                f = o.redAdd(o);
            for (n = 0; n < e; n++) {
                var h = a.redSqr(),
                    d = f.redSqr(),
                    u = d.redSqr(),
                    l = h.redAdd(h).redIAdd(h).redIAdd(r.redMul(c)),
                    p = a.redMul(d),
                    b = l.redSqr().redISub(p.redAdd(p)),
                    y = p.redISub(b),
                    m = l.redMul(y);
                m = m.redIAdd(m).redISub(u);
                var g = f.redMul(s);
                n + 1 < e && (c = c.redMul(u)), a = b, s = g, f = m
            }
            return this.curve.jpoint(a, f.redMul(i), s)
        }, h.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
        }, h.prototype._zeroDbl = function() {
            var e, t, n;
            if (this.zOne) {
                var r = this.x.redSqr(),
                    i = this.y.redSqr(),
                    a = i.redSqr(),
                    o = this.x.redAdd(i).redSqr().redISub(r).redISub(a);
                o = o.redIAdd(o);
                var s = r.redAdd(r).redIAdd(r),
                    c = s.redSqr().redISub(o).redISub(o),
                    f = a.redIAdd(a);
                f = (f = f.redIAdd(f)).redIAdd(f), e = c, t = s.redMul(o.redISub(c)).redISub(f), n = this.y.redAdd(this.y)
            } else {
                var h = this.x.redSqr(),
                    d = this.y.redSqr(),
                    u = d.redSqr(),
                    l = this.x.redAdd(d).redSqr().redISub(h).redISub(u);
                l = l.redIAdd(l);
                var p = h.redAdd(h).redIAdd(h),
                    b = p.redSqr(),
                    y = u.redIAdd(u);
                y = (y = y.redIAdd(y)).redIAdd(y), e = b.redISub(l).redISub(l), t = p.redMul(l.redISub(e)).redISub(y), n = (n = this.y.redMul(this.z)).redIAdd(n)
            }
            return this.curve.jpoint(e, t, n)
        }, h.prototype._threeDbl = function() {
            var e, t, n;
            if (this.zOne) {
                var r = this.x.redSqr(),
                    i = this.y.redSqr(),
                    a = i.redSqr(),
                    o = this.x.redAdd(i).redSqr().redISub(r).redISub(a);
                o = o.redIAdd(o);
                var s = r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),
                    c = s.redSqr().redISub(o).redISub(o);
                e = c;
                var f = a.redIAdd(a);
                f = (f = f.redIAdd(f)).redIAdd(f), t = s.redMul(o.redISub(c)).redISub(f), n = this.y.redAdd(this.y)
            } else {
                var h = this.z.redSqr(),
                    d = this.y.redSqr(),
                    u = this.x.redMul(d),
                    l = this.x.redSub(h).redMul(this.x.redAdd(h));
                l = l.redAdd(l).redIAdd(l);
                var p = u.redIAdd(u),
                    b = (p = p.redIAdd(p)).redAdd(p);
                e = l.redSqr().redISub(b), n = this.y.redAdd(this.z).redSqr().redISub(d).redISub(h);
                var y = d.redSqr();
                y = (y = (y = y.redIAdd(y)).redIAdd(y)).redIAdd(y), t = l.redMul(p.redISub(e)).redISub(y)
            }
            return this.curve.jpoint(e, t, n)
        }, h.prototype._dbl = function() {
            var e = this.curve.a,
                t = this.x,
                n = this.y,
                r = this.z,
                i = r.redSqr().redSqr(),
                a = t.redSqr(),
                o = n.redSqr(),
                s = a.redAdd(a).redIAdd(a).redIAdd(e.redMul(i)),
                c = t.redAdd(t),
                f = (c = c.redIAdd(c)).redMul(o),
                h = s.redSqr().redISub(f.redAdd(f)),
                d = f.redISub(h),
                u = o.redSqr();
            u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
            var l = s.redMul(d).redISub(u),
                p = n.redAdd(n).redMul(r);
            return this.curve.jpoint(h, l, p)
        }, h.prototype.trpl = function() {
            if (!this.curve.zeroA) return this.dbl().add(this);
            var e = this.x.redSqr(),
                t = this.y.redSqr(),
                n = this.z.redSqr(),
                r = t.redSqr(),
                i = e.redAdd(e).redIAdd(e),
                a = i.redSqr(),
                o = this.x.redAdd(t).redSqr().redISub(e).redISub(r),
                s = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(a)).redSqr(),
                c = r.redIAdd(r);
            c = (c = (c = c.redIAdd(c)).redIAdd(c)).redIAdd(c);
            var f = i.redIAdd(o).redSqr().redISub(a).redISub(s).redISub(c),
                h = t.redMul(f);
            h = (h = h.redIAdd(h)).redIAdd(h);
            var d = this.x.redMul(s).redISub(h);
            d = (d = d.redIAdd(d)).redIAdd(d);
            var u = this.y.redMul(f.redMul(c.redISub(f)).redISub(o.redMul(s)));
            u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
            var l = this.z.redAdd(o).redSqr().redISub(n).redISub(s);
            return this.curve.jpoint(d, u, l)
        }, h.prototype.mul = function(e, t) {
            return e = new i(e, t), this.curve._wnafMul(this, e)
        }, h.prototype.eq = function(e) {
            if ("affine" === e.type) return this.eq(e.toJ());
            if (this === e) return !0;
            var t = this.z.redSqr(),
                n = e.z.redSqr();
            if (0 !== this.x.redMul(n).redISub(e.x.redMul(t)).cmpn(0)) return !1;
            var r = t.redMul(this.z),
                i = n.redMul(e.z);
            return 0 === this.y.redMul(i).redISub(e.y.redMul(r)).cmpn(0)
        }, h.prototype.eqXToP = function(e) {
            var t = this.z.redSqr(),
                n = e.toRed(this.curve.red).redMul(t);
            if (0 === this.x.cmp(n)) return !0;
            for (var r = e.clone(), i = this.curve.redN.redMul(t);;) {
                if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0) return !1;
                if (n.redIAdd(i), 0 === this.x.cmp(n)) return !0
            }
        }, h.prototype.inspect = function() {
            return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
        }, h.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0)
        }
    }, {
        "../utils": 81,
        "./base": 68,
        "bn.js": 16,
        inherits: 101
    }],
    73: [function(e, t, n) {
        "use strict";
        var r, i = n,
            a = e("hash.js"),
            o = e("./curve"),
            s = e("./utils").assert;

        function c(e) {
            "short" === e.type ? this.curve = new o.short(e) : "edwards" === e.type ? this.curve = new o.edwards(e) : this.curve = new o.mont(e), this.g = this.curve.g, this.n = this.curve.n, this.hash = e.hash, s(this.g.validate(), "Invalid curve"), s(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
        }

        function f(e, t) {
            Object.defineProperty(i, e, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var n = new c(t);
                    return Object.defineProperty(i, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: n
                    }), n
                }
            })
        }
        i.PresetCurve = c, f("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: a.sha256,
            gRed: !1,
            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
        }), f("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: a.sha256,
            gRed: !1,
            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
        }), f("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: a.sha256,
            gRed: !1,
            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
        }), f("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: a.sha384,
            gRed: !1,
            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
        }), f("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: a.sha512,
            gRed: !1,
            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
        }), f("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "1",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: a.sha256,
            gRed: !1,
            g: ["9"]
        }), f("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: a.sha256,
            gRed: !1,
            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
        });
        try {
            r = e("./precomputed/secp256k1")
        } catch (e) {
            r = void 0
        }
        f("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: a.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [{
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3"
            }, {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15"
            }],
            gRed: !1,
            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r]
        })
    }, {
        "./curve": 70,
        "./precomputed/secp256k1": 80,
        "./utils": 81,
        "hash.js": 86
    }],
    74: [function(e, t, n) {
        "use strict";
        var r = e("bn.js"),
            i = e("hmac-drbg"),
            a = e("../utils"),
            o = e("../curves"),
            s = e("brorand"),
            c = a.assert,
            f = e("./key"),
            h = e("./signature");

        function d(e) {
            if (!(this instanceof d)) return new d(e);
            "string" == typeof e && (c(o.hasOwnProperty(e), "Unknown curve " + e), e = o[e]), e instanceof o.PresetCurve && (e = {
                curve: e
            }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash
        }
        t.exports = d, d.prototype.keyPair = function(e) {
            return new f(this, e)
        }, d.prototype.keyFromPrivate = function(e, t) {
            return f.fromPrivate(this, e, t)
        }, d.prototype.keyFromPublic = function(e, t) {
            return f.fromPublic(this, e, t)
        }, d.prototype.genKeyPair = function(e) {
            e || (e = {});
            for (var t = new i({
                    hash: this.hash,
                    pers: e.pers,
                    persEnc: e.persEnc || "utf8",
                    entropy: e.entropy || s(this.hash.hmacStrength),
                    entropyEnc: e.entropy && e.entropyEnc || "utf8",
                    nonce: this.n.toArray()
                }), n = this.n.byteLength(), a = this.n.sub(new r(2));;) {
                var o = new r(t.generate(n));
                if (!(o.cmp(a) > 0)) return o.iaddn(1), this.keyFromPrivate(o)
            }
        }, d.prototype._truncateToN = function(e, t) {
            var n = 8 * e.byteLength() - this.n.bitLength();
            return n > 0 && (e = e.ushrn(n)), !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
        }, d.prototype.sign = function(e, t, n, a) {
            "object" == typeof n && (a = n, n = null), a || (a = {}), t = this.keyFromPrivate(t, n), e = this._truncateToN(new r(e, 16));
            for (var o = this.n.byteLength(), s = t.getPrivate().toArray("be", o), c = e.toArray("be", o), f = new i({
                    hash: this.hash,
                    entropy: s,
                    nonce: c,
                    pers: a.pers,
                    persEnc: a.persEnc || "utf8"
                }), d = this.n.sub(new r(1)), u = 0;; u++) {
                var l = a.k ? a.k(u) : new r(f.generate(this.n.byteLength()));
                if (!((l = this._truncateToN(l, !0)).cmpn(1) <= 0 || l.cmp(d) >= 0)) {
                    var p = this.g.mul(l);
                    if (!p.isInfinity()) {
                        var b = p.getX(),
                            y = b.umod(this.n);
                        if (0 !== y.cmpn(0)) {
                            var m = l.invm(this.n).mul(y.mul(t.getPrivate()).iadd(e));
                            if (0 !== (m = m.umod(this.n)).cmpn(0)) {
                                var g = (p.getY().isOdd() ? 1 : 0) | (0 !== b.cmp(y) ? 2 : 0);
                                return a.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m), g ^= 1), new h({
                                    r: y,
                                    s: m,
                                    recoveryParam: g
                                })
                            }
                        }
                    }
                }
            }
        }, d.prototype.verify = function(e, t, n, i) {
            e = this._truncateToN(new r(e, 16)), n = this.keyFromPublic(n, i);
            var a = (t = new h(t, "hex")).r,
                o = t.s;
            if (a.cmpn(1) < 0 || a.cmp(this.n) >= 0) return !1;
            if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
            var s, c = o.invm(this.n),
                f = c.mul(e).umod(this.n),
                d = c.mul(a).umod(this.n);
            return this.curve._maxwellTrick ? !(s = this.g.jmulAdd(f, n.getPublic(), d)).isInfinity() && s.eqXToP(a) : !(s = this.g.mulAdd(f, n.getPublic(), d)).isInfinity() && 0 === s.getX().umod(this.n).cmp(a)
        }, d.prototype.recoverPubKey = function(e, t, n, i) {
            c((3 & n) === n, "The recovery param is more than two bits"), t = new h(t, i);
            var a = this.n,
                o = new r(e),
                s = t.r,
                f = t.s,
                d = 1 & n,
                u = n >> 1;
            if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u) throw new Error("Unable to find sencond key candinate");
            s = u ? this.curve.pointFromX(s.add(this.curve.n), d) : this.curve.pointFromX(s, d);
            var l = t.r.invm(a),
                p = a.sub(o).mul(l).umod(a),
                b = f.mul(l).umod(a);
            return this.g.mulAdd(p, s, b)
        }, d.prototype.getKeyRecoveryParam = function(e, t, n, r) {
            if (null !== (t = new h(t, r)).recoveryParam) return t.recoveryParam;
            for (var i = 0; i < 4; i++) {
                var a;
                try {
                    a = this.recoverPubKey(e, t, i)
                } catch (e) {
                    continue
                }
                if (a.eq(n)) return i
            }
            throw new Error("Unable to find valid recovery factor")
        }
    }, {
        "../curves": 73,
        "../utils": 81,
        "./key": 75,
        "./signature": 76,
        "bn.js": 16,
        brorand: 17,
        "hmac-drbg": 98
    }],
    75: [function(e, t, n) {
        "use strict";
        var r = e("bn.js"),
            i = e("../utils").assert;

        function a(e, t) {
            this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc)
        }
        t.exports = a, a.fromPublic = function(e, t, n) {
            return t instanceof a ? t : new a(e, {
                pub: t,
                pubEnc: n
            })
        }, a.fromPrivate = function(e, t, n) {
            return t instanceof a ? t : new a(e, {
                priv: t,
                privEnc: n
            })
        }, a.prototype.validate = function() {
            var e = this.getPublic();
            return e.isInfinity() ? {
                result: !1,
                reason: "Invalid public key"
            } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
                result: !0,
                reason: null
            } : {
                result: !1,
                reason: "Public key * N != O"
            } : {
                result: !1,
                reason: "Public key is not a point"
            }
        }, a.prototype.getPublic = function(e, t) {
            return "string" == typeof e && (t = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t ? this.pub.encode(t, e) : this.pub
        }, a.prototype.getPrivate = function(e) {
            return "hex" === e ? this.priv.toString(16, 2) : this.priv
        }, a.prototype._importPrivate = function(e, t) {
            this.priv = new r(e, t || 16), this.priv = this.priv.umod(this.ec.curve.n)
        }, a.prototype._importPublic = function(e, t) {
            if (e.x || e.y) return "mont" === this.ec.curve.type ? i(e.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || i(e.x && e.y, "Need both x and y coordinate"), void(this.pub = this.ec.curve.point(e.x, e.y));
            this.pub = this.ec.curve.decodePoint(e, t)
        }, a.prototype.derive = function(e) {
            return e.mul(this.priv).getX()
        }, a.prototype.sign = function(e, t, n) {
            return this.ec.sign(e, this, t, n)
        }, a.prototype.verify = function(e, t) {
            return this.ec.verify(e, t, this)
        }, a.prototype.inspect = function() {
            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
        }
    }, {
        "../utils": 81,
        "bn.js": 16
    }],
    76: [function(e, t, n) {
        "use strict";
        var r = e("bn.js"),
            i = e("../utils"),
            a = i.assert;

        function o(e, t) {
            if (e instanceof o) return e;
            this._importDER(e, t) || (a(e.r && e.s, "Signature without r or s"), this.r = new r(e.r, 16), this.s = new r(e.s, 16), void 0 === e.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam)
        }

        function s() {
            this.place = 0
        }

        function c(e, t) {
            var n = e[t.place++];
            if (!(128 & n)) return n;
            for (var r = 15 & n, i = 0, a = 0, o = t.place; a < r; a++, o++) i <<= 8, i |= e[o];
            return t.place = o, i
        }

        function f(e) {
            for (var t = 0, n = e.length - 1; !e[t] && !(128 & e[t + 1]) && t < n;) t++;
            return 0 === t ? e : e.slice(t)
        }

        function h(e, t) {
            if (t < 128) e.push(t);
            else {
                var n = 1 + (Math.log(t) / Math.LN2 >>> 3);
                for (e.push(128 | n); --n;) e.push(t >>> (n << 3) & 255);
                e.push(t)
            }
        }
        t.exports = o, o.prototype._importDER = function(e, t) {
            e = i.toArray(e, t);
            var n = new s;
            if (48 !== e[n.place++]) return !1;
            if (c(e, n) + n.place !== e.length) return !1;
            if (2 !== e[n.place++]) return !1;
            var a = c(e, n),
                o = e.slice(n.place, a + n.place);
            if (n.place += a, 2 !== e[n.place++]) return !1;
            var f = c(e, n);
            if (e.length !== f + n.place) return !1;
            var h = e.slice(n.place, f + n.place);
            return 0 === o[0] && 128 & o[1] && (o = o.slice(1)), 0 === h[0] && 128 & h[1] && (h = h.slice(1)), this.r = new r(o), this.s = new r(h), this.recoveryParam = null, !0
        }, o.prototype.toDER = function(e) {
            var t = this.r.toArray(),
                n = this.s.toArray();
            for (128 & t[0] && (t = [0].concat(t)), 128 & n[0] && (n = [0].concat(n)), t = f(t), n = f(n); !(n[0] || 128 & n[1]);) n = n.slice(1);
            var r = [2];
            h(r, t.length), (r = r.concat(t)).push(2), h(r, n.length);
            var a = r.concat(n),
                o = [48];
            return h(o, a.length), o = o.concat(a), i.encode(o, e)
        }
    }, {
        "../utils": 81,
        "bn.js": 16
    }],
    77: [function(e, t, n) {
        "use strict";
        var r = e("hash.js"),
            i = e("../curves"),
            a = e("../utils"),
            o = a.assert,
            s = a.parseBytes,
            c = e("./key"),
            f = e("./signature");

        function h(e) {
            if (o("ed25519" === e, "only tested with ed25519 so far"), !(this instanceof h)) return new h(e);
            e = i[e].curve;
            this.curve = e, this.g = e.g, this.g.precompute(e.n.bitLength() + 1), this.pointClass = e.point().constructor, this.encodingLength = Math.ceil(e.n.bitLength() / 8), this.hash = r.sha512
        }
        t.exports = h, h.prototype.sign = function(e, t) {
            e = s(e);
            var n = this.keyFromSecret(t),
                r = this.hashInt(n.messagePrefix(), e),
                i = this.g.mul(r),
                a = this.encodePoint(i),
                o = this.hashInt(a, n.pubBytes(), e).mul(n.priv()),
                c = r.add(o).umod(this.curve.n);
            return this.makeSignature({
                R: i,
                S: c,
                Rencoded: a
            })
        }, h.prototype.verify = function(e, t, n) {
            e = s(e), t = this.makeSignature(t);
            var r = this.keyFromPublic(n),
                i = this.hashInt(t.Rencoded(), r.pubBytes(), e),
                a = this.g.mul(t.S());
            return t.R().add(r.pub().mul(i)).eq(a)
        }, h.prototype.hashInt = function() {
            for (var e = this.hash(), t = 0; t < arguments.length; t++) e.update(arguments[t]);
            return a.intFromLE(e.digest()).umod(this.curve.n)
        }, h.prototype.keyFromPublic = function(e) {
            return c.fromPublic(this, e)
        }, h.prototype.keyFromSecret = function(e) {
            return c.fromSecret(this, e)
        }, h.prototype.makeSignature = function(e) {
            return e instanceof f ? e : new f(this, e)
        }, h.prototype.encodePoint = function(e) {
            var t = e.getY().toArray("le", this.encodingLength);
            return t[this.encodingLength - 1] |= e.getX().isOdd() ? 128 : 0, t
        }, h.prototype.decodePoint = function(e) {
            var t = (e = a.parseBytes(e)).length - 1,
                n = e.slice(0, t).concat(-129 & e[t]),
                r = 0 != (128 & e[t]),
                i = a.intFromLE(n);
            return this.curve.pointFromY(i, r)
        }, h.prototype.encodeInt = function(e) {
            return e.toArray("le", this.encodingLength)
        }, h.prototype.decodeInt = function(e) {
            return a.intFromLE(e)
        }, h.prototype.isPoint = function(e) {
            return e instanceof this.pointClass
        }
    }, {
        "../curves": 73,
        "../utils": 81,
        "./key": 78,
        "./signature": 79,
        "hash.js": 86
    }],
    78: [function(e, t, n) {
        "use strict";
        var r = e("../utils"),
            i = r.assert,
            a = r.parseBytes,
            o = r.cachedProperty;

        function s(e, t) {
            this.eddsa = e, this._secret = a(t.secret), e.isPoint(t.pub) ? this._pub = t.pub : this._pubBytes = a(t.pub)
        }
        s.fromPublic = function(e, t) {
            return t instanceof s ? t : new s(e, {
                pub: t
            })
        }, s.fromSecret = function(e, t) {
            return t instanceof s ? t : new s(e, {
                secret: t
            })
        }, s.prototype.secret = function() {
            return this._secret
        }, o(s, "pubBytes", function() {
            return this.eddsa.encodePoint(this.pub())
        }), o(s, "pub", function() {
            return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
        }), o(s, "privBytes", function() {
            var e = this.eddsa,
                t = this.hash(),
                n = e.encodingLength - 1,
                r = t.slice(0, e.encodingLength);
            return r[0] &= 248, r[n] &= 127, r[n] |= 64, r
        }), o(s, "priv", function() {
            return this.eddsa.decodeInt(this.privBytes())
        }), o(s, "hash", function() {
            return this.eddsa.hash().update(this.secret()).digest()
        }), o(s, "messagePrefix", function() {
            return this.hash().slice(this.eddsa.encodingLength)
        }), s.prototype.sign = function(e) {
            return i(this._secret, "KeyPair can only verify"), this.eddsa.sign(e, this)
        }, s.prototype.verify = function(e, t) {
            return this.eddsa.verify(e, t, this)
        }, s.prototype.getSecret = function(e) {
            return i(this._secret, "KeyPair is public only"), r.encode(this.secret(), e)
        }, s.prototype.getPublic = function(e) {
            return r.encode(this.pubBytes(), e)
        }, t.exports = s
    }, {
        "../utils": 81
    }],
    79: [function(e, t, n) {
        "use strict";
        var r = e("bn.js"),
            i = e("../utils"),
            a = i.assert,
            o = i.cachedProperty,
            s = i.parseBytes;

        function c(e, t) {
            this.eddsa = e, "object" != typeof t && (t = s(t)), Array.isArray(t) && (t = {
                R: t.slice(0, e.encodingLength),
                S: t.slice(e.encodingLength)
            }), a(t.R && t.S, "Signature without R or S"), e.isPoint(t.R) && (this._R = t.R), t.S instanceof r && (this._S = t.S), this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded, this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded
        }
        o(c, "S", function() {
            return this.eddsa.decodeInt(this.Sencoded())
        }), o(c, "R", function() {
            return this.eddsa.decodePoint(this.Rencoded())
        }), o(c, "Rencoded", function() {
            return this.eddsa.encodePoint(this.R())
        }), o(c, "Sencoded", function() {
            return this.eddsa.encodeInt(this.S())
        }), c.prototype.toBytes = function() {
            return this.Rencoded().concat(this.Sencoded())
        }, c.prototype.toHex = function() {
            return i.encode(this.toBytes(), "hex").toUpperCase()
        }, t.exports = c
    }, {
        "../utils": 81,
        "bn.js": 16
    }],
    80: [function(e, t, n) {
        t.exports = {
            doubles: {
                step: 4,
                points: [
                    ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                    ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                    ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                    ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                    ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                    ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                    ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                    ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                    ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                    ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                    ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                    ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                    ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                    ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                    ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                    ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                    ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                    ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                    ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                    ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                    ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                    ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                    ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                    ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                    ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                    ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                    ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                    ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                    ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                    ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                    ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                    ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                    ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                    ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                    ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                    ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                    ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                    ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                    ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                    ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                    ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                    ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                    ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                    ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                    ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                    ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                    ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                    ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                    ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                    ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                    ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                    ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                    ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                    ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                    ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                    ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                    ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                    ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                    ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                    ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                    ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                    ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                    ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                    ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                    ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
                ]
            },
            naf: {
                wnd: 7,
                points: [
                    ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                    ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                    ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                    ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                    ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                    ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                    ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                    ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                    ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                    ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                    ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                    ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                    ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                    ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                    ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                    ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                    ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                    ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                    ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                    ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                    ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                    ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                    ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                    ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                    ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                    ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                    ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                    ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                    ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                    ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                    ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                    ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                    ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                    ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                    ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                    ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                    ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                    ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                    ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                    ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                    ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                    ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                    ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                    ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                    ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                    ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                    ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                    ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                    ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                    ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                    ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                    ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                    ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                    ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                    ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                    ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                    ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                    ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                    ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                    ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                    ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                    ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                    ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                    ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                    ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                    ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                    ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                    ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                    ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                    ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                    ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                    ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                    ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                    ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                    ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                    ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                    ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                    ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                    ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                    ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                    ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                    ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                    ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                    ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                    ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                    ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                    ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                    ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                    ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                    ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                    ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                    ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                    ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                    ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                    ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                    ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                    ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                    ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                    ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                    ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                    ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                    ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                    ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                    ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                    ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                    ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                    ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                    ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                    ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                    ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                    ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                    ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                    ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                    ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                    ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                    ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                    ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                    ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                    ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                    ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                    ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                    ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                    ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                    ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                    ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                    ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                    ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
                ]
            }
        }
    }, {}],
    81: [function(e, t, n) {
        "use strict";
        var r = n,
            i = e("bn.js"),
            a = e("minimalistic-assert"),
            o = e("minimalistic-crypto-utils");
        r.assert = a, r.toArray = o.toArray, r.zero2 = o.zero2, r.toHex = o.toHex, r.encode = o.encode, r.getNAF = function(e, t) {
            for (var n = [], r = 1 << t + 1, i = e.clone(); i.cmpn(1) >= 0;) {
                var a;
                if (i.isOdd()) {
                    var o = i.andln(r - 1);
                    a = o > (r >> 1) - 1 ? (r >> 1) - o : o, i.isubn(a)
                } else a = 0;
                n.push(a);
                for (var s = 0 !== i.cmpn(0) && 0 === i.andln(r - 1) ? t + 1 : 1, c = 1; c < s; c++) n.push(0);
                i.iushrn(s)
            }
            return n
        }, r.getJSF = function(e, t) {
            var n = [
                [],
                []
            ];
            e = e.clone(), t = t.clone();
            for (var r = 0, i = 0; e.cmpn(-r) > 0 || t.cmpn(-i) > 0;) {
                var a, o, s, c = e.andln(3) + r & 3,
                    f = t.andln(3) + i & 3;
                3 === c && (c = -1), 3 === f && (f = -1), a = 0 == (1 & c) ? 0 : 3 != (s = e.andln(7) + r & 7) && 5 !== s || 2 !== f ? c : -c, n[0].push(a), o = 0 == (1 & f) ? 0 : 3 != (s = t.andln(7) + i & 7) && 5 !== s || 2 !== c ? f : -f, n[1].push(o), 2 * r === a + 1 && (r = 1 - r), 2 * i === o + 1 && (i = 1 - i), e.iushrn(1), t.iushrn(1)
            }
            return n
        }, r.cachedProperty = function(e, t, n) {
            var r = "_" + t;
            e.prototype[t] = function() {
                return void 0 !== this[r] ? this[r] : this[r] = n.call(this)
            }
        }, r.parseBytes = function(e) {
            return "string" == typeof e ? r.toArray(e, "hex") : e
        }, r.intFromLE = function(e) {
            return new i(e, "hex", "le")
        }
    }, {
        "bn.js": 16,
        "minimalistic-assert": 105,
        "minimalistic-crypto-utils": 106
    }],
    82: [function(e, t, n) {
        t.exports = {
            _from: "elliptic@^6.0.0",
            _id: "elliptic@6.5.1",
            _inBundle: !1,
            _integrity: "sha512-xvJINNLbTeWQjrl6X+7eQCrIy/YPv5XCpKW6kB5mKvtnGILoLDcySuwomfdzt0BMdLNVnuRNTuzKNHj0bva1Cg==",
            _location: "/elliptic",
            _phantomChildren: {},
            _requested: {
                type: "range",
                registry: !0,
                raw: "elliptic@^6.0.0",
                name: "elliptic",
                escapedName: "elliptic",
                rawSpec: "^6.0.0",
                saveSpec: null,
                fetchSpec: "^6.0.0"
            },
            _requiredBy: ["/browserify-sign", "/create-ecdh"],
            _resolved: "https://registry.npmjs.org/elliptic/-/elliptic-6.5.1.tgz",
            _shasum: "c380f5f909bf1b9b4428d028cd18d3b0efd6b52b",
            _spec: "elliptic@^6.0.0",
            _where: "C:\\Users\\nantas\\fireball-x\\fb_2.1.4\\dist\\resources\\app\\node_modules\\browserify-sign",
            author: {
                name: "Fedor Indutny",
                email: "fedor@indutny.com"
            },
            bugs: {
                url: "https://github.com/indutny/elliptic/issues"
            },
            bundleDependencies: !1,
            dependencies: {
                "bn.js": "^4.4.0",
                brorand: "^1.0.1",
                "hash.js": "^1.0.0",
                "hmac-drbg": "^1.0.0",
                inherits: "^2.0.1",
                "minimalistic-assert": "^1.0.0",
                "minimalistic-crypto-utils": "^1.0.0"
            },
            deprecated: !1,
            description: "EC cryptography",
            devDependencies: {
                brfs: "^1.4.3",
                coveralls: "^3.0.4",
                grunt: "^1.0.4",
                "grunt-browserify": "^5.0.0",
                "grunt-cli": "^1.2.0",
                "grunt-contrib-connect": "^1.0.0",
                "grunt-contrib-copy": "^1.0.0",
                "grunt-contrib-uglify": "^1.0.1",
                "grunt-mocha-istanbul": "^3.0.1",
                "grunt-saucelabs": "^9.0.1",
                istanbul: "^0.4.2",
                jscs: "^3.0.7",
                jshint: "^2.6.0",
                mocha: "^6.1.4"
            },
            files: ["lib"],
            homepage: "https://github.com/indutny/elliptic",
            keywords: ["EC", "Elliptic", "curve", "Cryptography"],
            license: "MIT",
            main: "lib/elliptic.js",
            name: "elliptic",
            repository: {
                type: "git",
                url: "git+ssh://git@github.com/indutny/elliptic.git"
            },
            scripts: {
                jscs: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
                jshint: "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
                lint: "npm run jscs && npm run jshint",
                test: "npm run lint && npm run unit",
                unit: "istanbul test _mocha --reporter=spec test/index.js",
                version: "grunt dist && git add dist/"
            },
            version: "6.5.1"
        }
    }, {}],
    83: [function(e, t, n) {
        function r() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function i(e) {
            return "function" == typeof e
        }

        function a(e) {
            return "number" == typeof e
        }

        function o(e) {
            return "object" == typeof e && null !== e
        }

        function s(e) {
            return void 0 === e
        }
        t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function(e) {
            if (!a(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e, this
        }, r.prototype.emit = function(e) {
            var t, n, r, a, c, f;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                if ((t = arguments[1]) instanceof Error) throw t;
                var h = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw h.context = t, h
            }
            if (s(n = this._events[e])) return !1;
            if (i(n)) switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    a = Array.prototype.slice.call(arguments, 1), n.apply(this, a)
            } else if (o(n))
                for (a = Array.prototype.slice.call(arguments, 1), r = (f = n.slice()).length, c = 0; c < r; c++) f[c].apply(this, a);
            return !0
        }, r.prototype.addListener = function(e, t) {
            var n;
            if (!i(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, o(this._events[e]) && !this._events[e].warned && (n = s(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
        }, r.prototype.on = r.prototype.addListener, r.prototype.once = function(e, t) {
            if (!i(t)) throw TypeError("listener must be a function");
            var n = !1;

            function r() {
                this.removeListener(e, r), n || (n = !0, t.apply(this, arguments))
            }
            return r.listener = t, this.on(e, r), this
        }, r.prototype.removeListener = function(e, t) {
            var n, r, a, s;
            if (!i(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (a = (n = this._events[e]).length, r = -1, n === t || i(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (o(n)) {
                for (s = a; s-- > 0;)
                    if (n[s] === t || n[s].listener && n[s].listener === t) {
                        r = s;
                        break
                    } if (r < 0) return this;
                1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(r, 1), this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }, r.prototype.removeAllListeners = function(e) {
            var t, n;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
            if (0 === arguments.length) {
                for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (i(n = this._events[e])) this.removeListener(e, n);
            else if (n)
                for (; n.length;) this.removeListener(e, n[n.length - 1]);
            return delete this._events[e], this
        }, r.prototype.listeners = function(e) {
            return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, r.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (i(t)) return 1;
                if (t) return t.length
            }
            return 0
        }, r.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    }, {}],
    84: [function(e, t, n) {
        var r = e("safe-buffer").Buffer,
            i = e("md5.js");
        t.exports = function(e, t, n, a) {
            if (r.isBuffer(e) || (e = r.from(e, "binary")), t && (r.isBuffer(t) || (t = r.from(t, "binary")), 8 !== t.length)) throw new RangeError("salt should be Buffer with 8 byte length");
            for (var o = n / 8, s = r.alloc(o), c = r.alloc(a || 0), f = r.alloc(0); o > 0 || a > 0;) {
                var h = new i;
                h.update(f), h.update(e), t && h.update(t), f = h.digest();
                var d = 0;
                if (o > 0) {
                    var u = s.length - o;
                    d = Math.min(o, f.length), f.copy(s, u, 0, d), o -= d
                }
                if (d < f.length && a > 0) {
                    var l = c.length - a,
                        p = Math.min(a, f.length - d);
                    f.copy(c, l, d, d + p), a -= p
                }
            }
            return f.fill(0), {
                key: s,
                iv: c
            }
        }
    }, {
        "md5.js": 103,
        "safe-buffer": 143
    }],
    85: [function(e, t, n) {
        "use strict";
        var r = e("safe-buffer").Buffer,
            i = e("stream").Transform;

        function a(e, t) {
            if (!r.isBuffer(e) && "string" != typeof e) throw new TypeError(t + " must be a string or a buffer")
        }

        function o(e) {
            i.call(this), this._block = r.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
        }
        e("inherits")(o, i), o.prototype._transform = function(e, t, n) {
            var r = null;
            try {
                this.update(e, t)
            } catch (e) {
                r = e
            }
            n(r)
        }, o.prototype._flush = function(e) {
            var t = null;
            try {
                this.push(this.digest())
            } catch (e) {
                t = e
            }
            e(t)
        }, o.prototype.update = function(e, t) {
            if (a(e, "Data"), this._finalized) throw new Error("Digest already called");
            r.isBuffer(e) || (e = r.from(e, t));
            for (var n = this._block, i = 0; this._blockOffset + e.length - i >= this._blockSize;) {
                for (var o = this._blockOffset; o < this._blockSize;) n[o++] = e[i++];
                this._update(), this._blockOffset = 0
            }
            for (; i < e.length;) n[this._blockOffset++] = e[i++];
            for (var s = 0, c = 8 * e.length; c > 0; ++s) this._length[s] += c, (c = this._length[s] / 4294967296 | 0) > 0 && (this._length[s] -= 4294967296 * c);
            return this
        }, o.prototype._update = function() {
            throw new Error("_update is not implemented")
        }, o.prototype.digest = function(e) {
            if (this._finalized) throw new Error("Digest already called");
            this._finalized = !0;
            var t = this._digest();
            void 0 !== e && (t = t.toString(e)), this._block.fill(0), this._blockOffset = 0;
            for (var n = 0; n < 4; ++n) this._length[n] = 0;
            return t
        }, o.prototype._digest = function() {
            throw new Error("_digest is not implemented")
        }, t.exports = o
    }, {
        inherits: 101,
        "safe-buffer": 143,
        stream: 152
    }],
    86: [function(e, t, n) {
        var r = n;
        r.utils = e("./hash/utils"), r.common = e("./hash/common"), r.sha = e("./hash/sha"), r.ripemd = e("./hash/ripemd"), r.hmac = e("./hash/hmac"), r.sha1 = r.sha.sha1, r.sha256 = r.sha.sha256, r.sha224 = r.sha.sha224, r.sha384 = r.sha.sha384, r.sha512 = r.sha.sha512, r.ripemd160 = r.ripemd.ripemd160
    }, {
        "./hash/common": 87,
        "./hash/hmac": 88,
        "./hash/ripemd": 89,
        "./hash/sha": 90,
        "./hash/utils": 97
    }],
    87: [function(e, t, n) {
        "use strict";
        var r = e("./utils"),
            i = e("minimalistic-assert");

        function a() {
            this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
        }
        n.BlockHash = a, a.prototype.update = function(e, t) {
            if (e = r.toArray(e, t), this.pending ? this.pending = this.pending.concat(e) : this.pending = e, this.pendingTotal += e.length, this.pending.length >= this._delta8) {
                var n = (e = this.pending).length % this._delta8;
                this.pending = e.slice(e.length - n, e.length), 0 === this.pending.length && (this.pending = null), e = r.join32(e, 0, e.length - n, this.endian);
                for (var i = 0; i < e.length; i += this._delta32) this._update(e, i, i + this._delta32)
            }
            return this
        }, a.prototype.digest = function(e) {
            return this.update(this._pad()), i(null === this.pending), this._digest(e)
        }, a.prototype._pad = function() {
            var e = this.pendingTotal,
                t = this._delta8,
                n = t - (e + this.padLength) % t,
                r = new Array(n + this.padLength);
            r[0] = 128;
            for (var i = 1; i < n; i++) r[i] = 0;
            if (e <<= 3, "big" === this.endian) {
                for (var a = 8; a < this.padLength; a++) r[i++] = 0;
                r[i++] = 0, r[i++] = 0, r[i++] = 0, r[i++] = 0, r[i++] = e >>> 24 & 255, r[i++] = e >>> 16 & 255, r[i++] = e >>> 8 & 255, r[i++] = 255 & e
            } else
                for (r[i++] = 255 & e, r[i++] = e >>> 8 & 255, r[i++] = e >>> 16 & 255, r[i++] = e >>> 24 & 255, r[i++] = 0, r[i++] = 0, r[i++] = 0, r[i++] = 0, a = 8; a < this.padLength; a++) r[i++] = 0;
            return r
        }
    }, {
        "./utils": 97,
        "minimalistic-assert": 105
    }],
    88: [function(e, t, n) {
        "use strict";
        var r = e("./utils"),
            i = e("minimalistic-assert");

        function a(e, t, n) {
            if (!(this instanceof a)) return new a(e, t, n);
            this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(r.toArray(t, n))
        }
        t.exports = a, a.prototype._init = function(e) {
            e.length > this.blockSize && (e = (new this.Hash).update(e).digest()), i(e.length <= this.blockSize);
            for (var t = e.length; t < this.blockSize; t++) e.push(0);
            for (t = 0; t < e.length; t++) e[t] ^= 54;
            for (this.inner = (new this.Hash).update(e), t = 0; t < e.length; t++) e[t] ^= 106;
            this.outer = (new this.Hash).update(e)
        }, a.prototype.update = function(e, t) {
            return this.inner.update(e, t), this
        }, a.prototype.digest = function(e) {
            return this.outer.update(this.inner.digest()), this.outer.digest(e)
        }
    }, {
        "./utils": 97,
        "minimalistic-assert": 105
    }],
    89: [function(e, t, n) {
        "use strict";
        var r = e("./utils"),
            i = e("./common"),
            a = r.rotl32,
            o = r.sum32,
            s = r.sum32_3,
            c = r.sum32_4,
            f = i.BlockHash;

        function h() {
            if (!(this instanceof h)) return new h;
            f.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
        }

        function d(e, t, n, r) {
            return e <= 15 ? t ^ n ^ r : e <= 31 ? t & n | ~t & r : e <= 47 ? (t | ~n) ^ r : e <= 63 ? t & r | n & ~r : t ^ (n | ~r)
        }

        function u(e) {
            return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838
        }

        function l(e) {
            return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0
        }
        r.inherits(h, f), n.ripemd160 = h, h.blockSize = 512, h.outSize = 160, h.hmacStrength = 192, h.padLength = 64, h.prototype._update = function(e, t) {
            for (var n = this.h[0], r = this.h[1], i = this.h[2], f = this.h[3], h = this.h[4], g = n, v = r, _ = i, C = f, w = h, B = 0; B < 80; B++) {
                var S = o(a(c(n, d(B, r, i, f), e[p[B] + t], u(B)), y[B]), h);
                n = h, h = f, f = a(i, 10), i = r, r = S, S = o(a(c(g, d(79 - B, v, _, C), e[b[B] + t], l(B)), m[B]), w), g = w, w = C, C = a(_, 10), _ = v, v = S
            }
            S = s(this.h[1], i, C), this.h[1] = s(this.h[2], f, w), this.h[2] = s(this.h[3], h, g), this.h[3] = s(this.h[4], n, v), this.h[4] = s(this.h[0], r, _), this.h[0] = S
        }, h.prototype._digest = function(e) {
            return "hex" === e ? r.toHex32(this.h, "little") : r.split32(this.h, "little")
        };
        var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
            b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
            y = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
            m = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
    }, {
        "./common": 87,
        "./utils": 97
    }],
    90: [function(e, t, n) {
        "use strict";
        n.sha1 = e("./sha/1"), n.sha224 = e("./sha/224"), n.sha256 = e("./sha/256"), n.sha384 = e("./sha/384"), n.sha512 = e("./sha/512")
    }, {
        "./sha/1": 91,
        "./sha/224": 92,
        "./sha/256": 93,
        "./sha/384": 94,
        "./sha/512": 95
    }],
    91: [function(e, t, n) {
        "use strict";
        var r = e("../utils"),
            i = e("../common"),
            a = e("./common"),
            o = r.rotl32,
            s = r.sum32,
            c = r.sum32_5,
            f = a.ft_1,
            h = i.BlockHash,
            d = [1518500249, 1859775393, 2400959708, 3395469782];

        function u() {
            if (!(this instanceof u)) return new u;
            h.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
        }
        r.inherits(u, h), t.exports = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 80, u.padLength = 64, u.prototype._update = function(e, t) {
            for (var n = this.W, r = 0; r < 16; r++) n[r] = e[t + r];
            for (; r < n.length; r++) n[r] = o(n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16], 1);
            var i = this.h[0],
                a = this.h[1],
                h = this.h[2],
                u = this.h[3],
                l = this.h[4];
            for (r = 0; r < n.length; r++) {
                var p = ~~(r / 20),
                    b = c(o(i, 5), f(p, a, h, u), l, n[r], d[p]);
                l = u, u = h, h = o(a, 30), a = i, i = b
            }
            this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], a), this.h[2] = s(this.h[2], h), this.h[3] = s(this.h[3], u), this.h[4] = s(this.h[4], l)
        }, u.prototype._digest = function(e) {
            return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
        }
    }, {
        "../common": 87,
        "../utils": 97,
        "./common": 96
    }],
    92: [function(e, t, n) {
        "use strict";
        var r = e("../utils"),
            i = e("./256");

        function a() {
            if (!(this instanceof a)) return new a;
            i.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
        }
        r.inherits(a, i), t.exports = a, a.blockSize = 512, a.outSize = 224, a.hmacStrength = 192, a.padLength = 64, a.prototype._digest = function(e) {
            return "hex" === e ? r.toHex32(this.h.slice(0, 7), "big") : r.split32(this.h.slice(0, 7), "big")
        }
    }, {
        "../utils": 97,
        "./256": 93
    }],
    93: [function(e, t, n) {
        "use strict";
        var r = e("../utils"),
            i = e("../common"),
            a = e("./common"),
            o = e("minimalistic-assert"),
            s = r.sum32,
            c = r.sum32_4,
            f = r.sum32_5,
            h = a.ch32,
            d = a.maj32,
            u = a.s0_256,
            l = a.s1_256,
            p = a.g0_256,
            b = a.g1_256,
            y = i.BlockHash,
            m = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

        function g() {
            if (!(this instanceof g)) return new g;
            y.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = m, this.W = new Array(64)
        }
        r.inherits(g, y), t.exports = g, g.blockSize = 512, g.outSize = 256, g.hmacStrength = 192, g.padLength = 64, g.prototype._update = function(e, t) {
            for (var n = this.W, r = 0; r < 16; r++) n[r] = e[t + r];
            for (; r < n.length; r++) n[r] = c(b(n[r - 2]), n[r - 7], p(n[r - 15]), n[r - 16]);
            var i = this.h[0],
                a = this.h[1],
                y = this.h[2],
                m = this.h[3],
                g = this.h[4],
                v = this.h[5],
                _ = this.h[6],
                C = this.h[7];
            for (o(this.k.length === n.length), r = 0; r < n.length; r++) {
                var w = f(C, l(g), h(g, v, _), this.k[r], n[r]),
                    B = s(u(i), d(i, a, y));
                C = _, _ = v, v = g, g = s(m, w), m = y, y = a, a = i, i = s(w, B)
            }
            this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], a), this.h[2] = s(this.h[2], y), this.h[3] = s(this.h[3], m), this.h[4] = s(this.h[4], g), this.h[5] = s(this.h[5], v), this.h[6] = s(this.h[6], _), this.h[7] = s(this.h[7], C)
        }, g.prototype._digest = function(e) {
            return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
        }
    }, {
        "../common": 87,
        "../utils": 97,
        "./common": 96,
        "minimalistic-assert": 105
    }],
    94: [function(e, t, n) {
        "use strict";
        var r = e("../utils"),
            i = e("./512");

        function a() {
            if (!(this instanceof a)) return new a;
            i.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
        }
        r.inherits(a, i), t.exports = a, a.blockSize = 1024, a.outSize = 384, a.hmacStrength = 192, a.padLength = 128, a.prototype._digest = function(e) {
            return "hex" === e ? r.toHex32(this.h.slice(0, 12), "big") : r.split32(this.h.slice(0, 12), "big")
        }
    }, {
        "../utils": 97,
        "./512": 95
    }],
    95: [function(e, t, n) {
        "use strict";
        var r = e("../utils"),
            i = e("../common"),
            a = e("minimalistic-assert"),
            o = r.rotr64_hi,
            s = r.rotr64_lo,
            c = r.shr64_hi,
            f = r.shr64_lo,
            h = r.sum64,
            d = r.sum64_hi,
            u = r.sum64_lo,
            l = r.sum64_4_hi,
            p = r.sum64_4_lo,
            b = r.sum64_5_hi,
            y = r.sum64_5_lo,
            m = i.BlockHash,
            g = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

        function v() {
            if (!(this instanceof v)) return new v;
            m.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = g, this.W = new Array(160)
        }

        function _(e, t, n, r, i) {
            var a = e & n ^ ~e & i;
            return a < 0 && (a += 4294967296), a
        }

        function C(e, t, n, r, i, a) {
            var o = t & r ^ ~t & a;
            return o < 0 && (o += 4294967296), o
        }

        function w(e, t, n, r, i) {
            var a = e & n ^ e & i ^ n & i;
            return a < 0 && (a += 4294967296), a
        }

        function B(e, t, n, r, i, a) {
            var o = t & r ^ t & a ^ r & a;
            return o < 0 && (o += 4294967296), o
        }

        function S(e, t) {
            var n = o(e, t, 28) ^ o(t, e, 2) ^ o(t, e, 7);
            return n < 0 && (n += 4294967296), n
        }

        function M(e, t) {
            var n = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
            return n < 0 && (n += 4294967296), n
        }

        function N(e, t) {
            var n = o(e, t, 14) ^ o(e, t, 18) ^ o(t, e, 9);
            return n < 0 && (n += 4294967296), n
        }

        function E(e, t) {
            var n = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
            return n < 0 && (n += 4294967296), n
        }

        function k(e, t) {
            var n = o(e, t, 1) ^ o(e, t, 8) ^ c(e, t, 7);
            return n < 0 && (n += 4294967296), n
        }

        function A(e, t) {
            var n = s(e, t, 1) ^ s(e, t, 8) ^ f(e, t, 7);
            return n < 0 && (n += 4294967296), n
        }

        function x(e, t) {
            var n = o(e, t, 19) ^ o(t, e, 29) ^ c(e, t, 6);
            return n < 0 && (n += 4294967296), n
        }

        function D(e, t) {
            var n = s(e, t, 19) ^ s(t, e, 29) ^ f(e, t, 6);
            return n < 0 && (n += 4294967296), n
        }
        r.inherits(v, m), t.exports = v, v.blockSize = 1024, v.outSize = 512, v.hmacStrength = 192, v.padLength = 128, v.prototype._prepareBlock = function(e, t) {
            for (var n = this.W, r = 0; r < 32; r++) n[r] = e[t + r];
            for (; r < n.length; r += 2) {
                var i = x(n[r - 4], n[r - 3]),
                    a = D(n[r - 4], n[r - 3]),
                    o = n[r - 14],
                    s = n[r - 13],
                    c = k(n[r - 30], n[r - 29]),
                    f = A(n[r - 30], n[r - 29]),
                    h = n[r - 32],
                    d = n[r - 31];
                n[r] = l(i, a, o, s, c, f, h, d), n[r + 1] = p(i, a, o, s, c, f, h, d)
            }
        }, v.prototype._update = function(e, t) {
            this._prepareBlock(e, t);
            var n = this.W,
                r = this.h[0],
                i = this.h[1],
                o = this.h[2],
                s = this.h[3],
                c = this.h[4],
                f = this.h[5],
                l = this.h[6],
                p = this.h[7],
                m = this.h[8],
                g = this.h[9],
                v = this.h[10],
                k = this.h[11],
                A = this.h[12],
                x = this.h[13],
                D = this.h[14],
                I = this.h[15];
            a(this.k.length === n.length);
            for (var L = 0; L < n.length; L += 2) {
                var P = D,
                    T = I,
                    R = N(m, g),
                    j = E(m, g),
                    O = _(m, g, v, k, A),
                    U = C(m, g, v, k, A, x),
                    z = this.k[L],
                    q = this.k[L + 1],
                    G = n[L],
                    K = n[L + 1],
                    F = b(P, T, R, j, O, U, z, q, G, K),
                    W = y(P, T, R, j, O, U, z, q, G, K);
                P = S(r, i), T = M(r, i), R = w(r, i, o, s, c), j = B(r, i, o, s, c, f);
                var H = d(P, T, R, j),
                    V = u(P, T, R, j);
                D = A, I = x, A = v, x = k, v = m, k = g, m = d(l, p, F, W), g = u(p, p, F, W), l = c, p = f, c = o, f = s, o = r, s = i, r = d(F, W, H, V), i = u(F, W, H, V)
            }
            h(this.h, 0, r, i), h(this.h, 2, o, s), h(this.h, 4, c, f), h(this.h, 6, l, p), h(this.h, 8, m, g), h(this.h, 10, v, k), h(this.h, 12, A, x), h(this.h, 14, D, I)
        }, v.prototype._digest = function(e) {
            return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
        }
    }, {
        "../common": 87,
        "../utils": 97,
        "minimalistic-assert": 105
    }],
    96: [function(e, t, n) {
        "use strict";
        var r = e("../utils").rotr32;

        function i(e, t, n) {
            return e & t ^ ~e & n
        }

        function a(e, t, n) {
            return e & t ^ e & n ^ t & n
        }

        function o(e, t, n) {
            return e ^ t ^ n
        }
        n.ft_1 = function(e, t, n, r) {
            return 0 === e ? i(t, n, r) : 1 === e || 3 === e ? o(t, n, r) : 2 === e ? a(t, n, r) : void 0
        }, n.ch32 = i, n.maj32 = a, n.p32 = o, n.s0_256 = function(e) {
            return r(e, 2) ^ r(e, 13) ^ r(e, 22)
        }, n.s1_256 = function(e) {
            return r(e, 6) ^ r(e, 11) ^ r(e, 25)
        }, n.g0_256 = function(e) {
            return r(e, 7) ^ r(e, 18) ^ e >>> 3
        }, n.g1_256 = function(e) {
            return r(e, 17) ^ r(e, 19) ^ e >>> 10
        }
    }, {
        "../utils": 97
    }],
    97: [function(e, t, n) {
        "use strict";
        var r = e("minimalistic-assert"),
            i = e("inherits");

        function a(e, t) {
            return 55296 == (64512 & e.charCodeAt(t)) && (!(t < 0 || t + 1 >= e.length) && 56320 == (64512 & e.charCodeAt(t + 1)))
        }

        function o(e) {
            return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
        }

        function s(e) {
            return 1 === e.length ? "0" + e : e
        }

        function c(e) {
            return 7 === e.length ? "0" + e : 6 === e.length ? "00" + e : 5 === e.length ? "000" + e : 4 === e.length ? "0000" + e : 3 === e.length ? "00000" + e : 2 === e.length ? "000000" + e : 1 === e.length ? "0000000" + e : e
        }
        n.inherits = i, n.toArray = function(e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var n = [];
            if ("string" == typeof e)
                if (t) {
                    if ("hex" === t)
                        for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), i = 0; i < e.length; i += 2) n.push(parseInt(e[i] + e[i + 1], 16))
                } else
                    for (var r = 0, i = 0; i < e.length; i++) {
                        var o = e.charCodeAt(i);
                        o < 128 ? n[r++] = o : o < 2048 ? (n[r++] = o >> 6 | 192, n[r++] = 63 & o | 128) : a(e, i) ? (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++i)), n[r++] = o >> 18 | 240, n[r++] = o >> 12 & 63 | 128, n[r++] = o >> 6 & 63 | 128, n[r++] = 63 & o | 128) : (n[r++] = o >> 12 | 224, n[r++] = o >> 6 & 63 | 128, n[r++] = 63 & o | 128)
                    } else
                        for (i = 0; i < e.length; i++) n[i] = 0 | e[i];
            return n
        }, n.toHex = function(e) {
            for (var t = "", n = 0; n < e.length; n++) t += s(e[n].toString(16));
            return t
        }, n.htonl = o, n.toHex32 = function(e, t) {
            for (var n = "", r = 0; r < e.length; r++) {
                var i = e[r];
                "little" === t && (i = o(i)), n += c(i.toString(16))
            }
            return n
        }, n.zero2 = s, n.zero8 = c, n.join32 = function(e, t, n, i) {
            var a = n - t;
            r(a % 4 == 0);
            for (var o = new Array(a / 4), s = 0, c = t; s < o.length; s++, c += 4) {
                var f;
                f = "big" === i ? e[c] << 24 | e[c + 1] << 16 | e[c + 2] << 8 | e[c + 3] : e[c + 3] << 24 | e[c + 2] << 16 | e[c + 1] << 8 | e[c], o[s] = f >>> 0
            }
            return o
        }, n.split32 = function(e, t) {
            for (var n = new Array(4 * e.length), r = 0, i = 0; r < e.length; r++, i += 4) {
                var a = e[r];
                "big" === t ? (n[i] = a >>> 24, n[i + 1] = a >>> 16 & 255, n[i + 2] = a >>> 8 & 255, n[i + 3] = 255 & a) : (n[i + 3] = a >>> 24, n[i + 2] = a >>> 16 & 255, n[i + 1] = a >>> 8 & 255, n[i] = 255 & a)
            }
            return n
        }, n.rotr32 = function(e, t) {
            return e >>> t | e << 32 - t
        }, n.rotl32 = function(e, t) {
            return e << t | e >>> 32 - t
        }, n.sum32 = function(e, t) {
            return e + t >>> 0
        }, n.sum32_3 = function(e, t, n) {
            return e + t + n >>> 0
        }, n.sum32_4 = function(e, t, n, r) {
            return e + t + n + r >>> 0
        }, n.sum32_5 = function(e, t, n, r, i) {
            return e + t + n + r + i >>> 0
        }, n.sum64 = function(e, t, n, r) {
            var i = e[t],
                a = r + e[t + 1] >>> 0,
                o = (a < r ? 1 : 0) + n + i;
            e[t] = o >>> 0, e[t + 1] = a
        }, n.sum64_hi = function(e, t, n, r) {
            return (t + r >>> 0 < t ? 1 : 0) + e + n >>> 0
        }, n.sum64_lo = function(e, t, n, r) {
            return t + r >>> 0
        }, n.sum64_4_hi = function(e, t, n, r, i, a, o, s) {
            var c = 0,
                f = t;
            return c += (f = f + r >>> 0) < t ? 1 : 0, c += (f = f + a >>> 0) < a ? 1 : 0, e + n + i + o + (c += (f = f + s >>> 0) < s ? 1 : 0) >>> 0
        }, n.sum64_4_lo = function(e, t, n, r, i, a, o, s) {
            return t + r + a + s >>> 0
        }, n.sum64_5_hi = function(e, t, n, r, i, a, o, s, c, f) {
            var h = 0,
                d = t;
            return h += (d = d + r >>> 0) < t ? 1 : 0, h += (d = d + a >>> 0) < a ? 1 : 0, h += (d = d + s >>> 0) < s ? 1 : 0, e + n + i + o + c + (h += (d = d + f >>> 0) < f ? 1 : 0) >>> 0
        }, n.sum64_5_lo = function(e, t, n, r, i, a, o, s, c, f) {
            return t + r + a + s + f >>> 0
        }, n.rotr64_hi = function(e, t, n) {
            return (t << 32 - n | e >>> n) >>> 0
        }, n.rotr64_lo = function(e, t, n) {
            return (e << 32 - n | t >>> n) >>> 0
        }, n.shr64_hi = function(e, t, n) {
            return e >>> n
        }, n.shr64_lo = function(e, t, n) {
            return (e << 32 - n | t >>> n) >>> 0
        }
    }, {
        inherits: 101,
        "minimalistic-assert": 105
    }],
    98: [function(e, t, n) {
        "use strict";
        var r = e("hash.js"),
            i = e("minimalistic-crypto-utils"),
            a = e("minimalistic-assert");

        function o(e) {
            if (!(this instanceof o)) return new o(e);
            this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
            var t = i.toArray(e.entropy, e.entropyEnc || "hex"),
                n = i.toArray(e.nonce, e.nonceEnc || "hex"),
                r = i.toArray(e.pers, e.persEnc || "hex");
            a(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, n, r)
        }
        t.exports = o, o.prototype._init = function(e, t, n) {
            var r = e.concat(t).concat(n);
            this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
            for (var i = 0; i < this.V.length; i++) this.K[i] = 0, this.V[i] = 1;
            this._update(r), this._reseed = 1, this.reseedInterval = 281474976710656
        }, o.prototype._hmac = function() {
            return new r.hmac(this.hash, this.K)
        }, o.prototype._update = function(e) {
            var t = this._hmac().update(this.V).update([0]);
            e && (t = t.update(e)), this.K = t.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
        }, o.prototype.reseed = function(e, t, n, r) {
            "string" != typeof t && (r = n, n = t, t = null), e = i.toArray(e, t), n = i.toArray(n, r), a(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(n || [])), this._reseed = 1
        }, o.prototype.generate = function(e, t, n, r) {
            if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
            "string" != typeof t && (r = n, n = t, t = null), n && (n = i.toArray(n, r || "hex"), this._update(n));
            for (var a = []; a.length < e;) this.V = this._hmac().update(this.V).digest(), a = a.concat(this.V);
            var o = a.slice(0, e);
            return this._update(n), this._reseed++, i.encode(o, t)
        }
    }, {
        "hash.js": 86,
        "minimalistic-assert": 105,
        "minimalistic-crypto-utils": 106
    }],
    99: [function(e, t, n) {
        n.read = function(e, t, n, r, i) {
            var a, o, s = 8 * i - r - 1,
                c = (1 << s) - 1,
                f = c >> 1,
                h = -7,
                d = n ? i - 1 : 0,
                u = n ? -1 : 1,
                l = e[t + d];
            for (d += u, a = l & (1 << -h) - 1, l >>= -h, h += s; h > 0; a = 256 * a + e[t + d], d += u, h -= 8);
            for (o = a & (1 << -h) - 1, a >>= -h, h += r; h > 0; o = 256 * o + e[t + d], d += u, h -= 8);
            if (0 === a) a = 1 - f;
            else {
                if (a === c) return o ? NaN : 1 / 0 * (l ? -1 : 1);
                o += Math.pow(2, r), a -= f
            }
            return (l ? -1 : 1) * o * Math.pow(2, a - r)
        }, n.write = function(e, t, n, r, i, a) {
            var o, s, c, f = 8 * a - i - 1,
                h = (1 << f) - 1,
                d = h >> 1,
                u = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                l = r ? 0 : a - 1,
                p = r ? 1 : -1,
                b = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = h) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), (t += o + d >= 1 ? u / c : u * Math.pow(2, 1 - d)) * c >= 2 && (o++, c /= 2), o + d >= h ? (s = 0, o = h) : o + d >= 1 ? (s = (t * c - 1) * Math.pow(2, i), o += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + l] = 255 & s, l += p, s /= 256, i -= 8);
            for (o = o << i | s, f += i; f > 0; e[n + l] = 255 & o, l += p, o /= 256, f -= 8);
            e[n + l - p] |= 128 * b
        }
    }, {}],
    100: [function(e, t, n) {
        var r = [].indexOf;
        t.exports = function(e, t) {
            if (r) return e.indexOf(t);
            for (var n = 0; n < e.length; ++n)
                if (e[n] === t) return n;
            return -1
        }
    }, {}],
    101: [function(e, t, n) {
        "function" == typeof Object.create ? t.exports = function(e, t) {
            t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }))
        } : t.exports = function(e, t) {
            if (t) {
                e.super_ = t;
                var n = function() {};
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            }
        }
    }, {}],
    102: [function(e, t, n) {
        function r(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }

        function i(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0))
        }
        t.exports = function(e) {
            return null != e && (r(e) || i(e) || !!e._isBuffer)
        }
    }, {}],
    103: [function(e, t, n) {
        "use strict";
        var r = e("inherits"),
            i = e("hash-base"),
            a = e("safe-buffer").Buffer,
            o = new Array(16);

        function s() {
            i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
        }

        function c(e, t) {
            return e << t | e >>> 32 - t
        }

        function f(e, t, n, r, i, a, o) {
            return c(e + (t & n | ~t & r) + i + a | 0, o) + t | 0
        }

        function h(e, t, n, r, i, a, o) {
            return c(e + (t & r | n & ~r) + i + a | 0, o) + t | 0
        }

        function d(e, t, n, r, i, a, o) {
            return c(e + (t ^ n ^ r) + i + a | 0, o) + t | 0
        }

        function u(e, t, n, r, i, a, o) {
            return c(e + (n ^ (t | ~r)) + i + a | 0, o) + t | 0
        }
        r(s, i), s.prototype._update = function() {
            for (var e = o, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
            var n = this._a,
                r = this._b,
                i = this._c,
                a = this._d;
            r = u(r = u(r = u(r = u(r = d(r = d(r = d(r = d(r = h(r = h(r = h(r = h(r = f(r = f(r = f(r = f(r, i = f(i, a = f(a, n = f(n, r, i, a, e[0], 3614090360, 7), r, i, e[1], 3905402710, 12), n, r, e[2], 606105819, 17), a, n, e[3], 3250441966, 22), i = f(i, a = f(a, n = f(n, r, i, a, e[4], 4118548399, 7), r, i, e[5], 1200080426, 12), n, r, e[6], 2821735955, 17), a, n, e[7], 4249261313, 22), i = f(i, a = f(a, n = f(n, r, i, a, e[8], 1770035416, 7), r, i, e[9], 2336552879, 12), n, r, e[10], 4294925233, 17), a, n, e[11], 2304563134, 22), i = f(i, a = f(a, n = f(n, r, i, a, e[12], 1804603682, 7), r, i, e[13], 4254626195, 12), n, r, e[14], 2792965006, 17), a, n, e[15], 1236535329, 22), i = h(i, a = h(a, n = h(n, r, i, a, e[1], 4129170786, 5), r, i, e[6], 3225465664, 9), n, r, e[11], 643717713, 14), a, n, e[0], 3921069994, 20), i = h(i, a = h(a, n = h(n, r, i, a, e[5], 3593408605, 5), r, i, e[10], 38016083, 9), n, r, e[15], 3634488961, 14), a, n, e[4], 3889429448, 20), i = h(i, a = h(a, n = h(n, r, i, a, e[9], 568446438, 5), r, i, e[14], 3275163606, 9), n, r, e[3], 4107603335, 14), a, n, e[8], 1163531501, 20), i = h(i, a = h(a, n = h(n, r, i, a, e[13], 2850285829, 5), r, i, e[2], 4243563512, 9), n, r, e[7], 1735328473, 14), a, n, e[12], 2368359562, 20), i = d(i, a = d(a, n = d(n, r, i, a, e[5], 4294588738, 4), r, i, e[8], 2272392833, 11), n, r, e[11], 1839030562, 16), a, n, e[14], 4259657740, 23), i = d(i, a = d(a, n = d(n, r, i, a, e[1], 2763975236, 4), r, i, e[4], 1272893353, 11), n, r, e[7], 4139469664, 16), a, n, e[10], 3200236656, 23), i = d(i, a = d(a, n = d(n, r, i, a, e[13], 681279174, 4), r, i, e[0], 3936430074, 11), n, r, e[3], 3572445317, 16), a, n, e[6], 76029189, 23), i = d(i, a = d(a, n = d(n, r, i, a, e[9], 3654602809, 4), r, i, e[12], 3873151461, 11), n, r, e[15], 530742520, 16), a, n, e[2], 3299628645, 23), i = u(i, a = u(a, n = u(n, r, i, a, e[0], 4096336452, 6), r, i, e[7], 1126891415, 10), n, r, e[14], 2878612391, 15), a, n, e[5], 4237533241, 21), i = u(i, a = u(a, n = u(n, r, i, a, e[12], 1700485571, 6), r, i, e[3], 2399980690, 10), n, r, e[10], 4293915773, 15), a, n, e[1], 2240044497, 21), i = u(i, a = u(a, n = u(n, r, i, a, e[8], 1873313359, 6), r, i, e[15], 4264355552, 10), n, r, e[6], 2734768916, 15), a, n, e[13], 1309151649, 21), i = u(i, a = u(a, n = u(n, r, i, a, e[4], 4149444226, 6), r, i, e[11], 3174756917, 10), n, r, e[2], 718787259, 15), a, n, e[9], 3951481745, 21), this._a = this._a + n | 0, this._b = this._b + r | 0, this._c = this._c + i | 0, this._d = this._d + a | 0
        }, s.prototype._digest = function() {
            this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
            var e = a.allocUnsafe(16);
            return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e
        }, t.exports = s
    }, {
        "hash-base": 85,
        inherits: 101,
        "safe-buffer": 143
    }],
    104: [function(e, t, n) {
        var r = e("bn.js"),
            i = e("brorand");

        function a(e) {
            this.rand = e || new i.Rand
        }
        t.exports = a, a.create = function(e) {
            return new a(e)
        }, a.prototype._randbelow = function(e) {
            var t = e.bitLength(),
                n = Math.ceil(t / 8);
            do {
                var i = new r(this.rand.generate(n))
            } while (i.cmp(e) >= 0);
            return i
        }, a.prototype._randrange = function(e, t) {
            var n = t.sub(e);
            return e.add(this._randbelow(n))
        }, a.prototype.test = function(e, t, n) {
            var i = e.bitLength(),
                a = r.mont(e),
                o = new r(1).toRed(a);
            t || (t = Math.max(1, i / 48 | 0));
            for (var s = e.subn(1), c = 0; !s.testn(c); c++);
            for (var f = e.shrn(c), h = s.toRed(a); t > 0; t--) {
                var d = this._randrange(new r(2), s);
                n && n(d);
                var u = d.toRed(a).redPow(f);
                if (0 !== u.cmp(o) && 0 !== u.cmp(h)) {
                    for (var l = 1; l < c; l++) {
                        if (0 === (u = u.redSqr()).cmp(o)) return !1;
                        if (0 === u.cmp(h)) break
                    }
                    if (l === c) return !1
                }
            }
            return !0
        }, a.prototype.getDivisor = function(e, t) {
            var n = e.bitLength(),
                i = r.mont(e),
                a = new r(1).toRed(i);
            t || (t = Math.max(1, n / 48 | 0));
            for (var o = e.subn(1), s = 0; !o.testn(s); s++);
            for (var c = e.shrn(s), f = o.toRed(i); t > 0; t--) {
                var h = this._randrange(new r(2), o),
                    d = e.gcd(h);
                if (0 !== d.cmpn(1)) return d;
                var u = h.toRed(i).redPow(c);
                if (0 !== u.cmp(a) && 0 !== u.cmp(f)) {
                    for (var l = 1; l < s; l++) {
                        if (0 === (u = u.redSqr()).cmp(a)) return u.fromRed().subn(1).gcd(e);
                        if (0 === u.cmp(f)) break
                    }
                    if (l === s) return (u = u.redSqr()).fromRed().subn(1).gcd(e)
                }
            }
            return !1
        }
    }, {
        "bn.js": 16,
        brorand: 17
    }],
    105: [function(e, t, n) {
        function r(e, t) {
            if (!e) throw new Error(t || "Assertion failed")
        }
        t.exports = r, r.equal = function(e, t, n) {
            if (e != t) throw new Error(n || "Assertion failed: " + e + " != " + t)
        }
    }, {}],
    106: [function(e, t, n) {
        "use strict";
        var r = n;

        function i(e) {
            return 1 === e.length ? "0" + e : e
        }

        function a(e) {
            for (var t = "", n = 0; n < e.length; n++) t += i(e[n].toString(16));
            return t
        }
        r.toArray = function(e, t) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var n = [];
            if ("string" != typeof e) {
                for (var r = 0; r < e.length; r++) n[r] = 0 | e[r];
                return n
            }
            if ("hex" === t)
                for ((e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e = "0" + e), r = 0; r < e.length; r += 2) n.push(parseInt(e[r] + e[r + 1], 16));
            else
                for (r = 0; r < e.length; r++) {
                    var i = e.charCodeAt(r),
                        a = i >> 8,
                        o = 255 & i;
                    a ? n.push(a, o) : n.push(o)
                }
            return n
        }, r.zero2 = i, r.toHex = a, r.encode = function(e, t) {
            return "hex" === t ? a(e) : e
        }
    }, {}],
    107: [function(e, t, n) {
        t.exports = {
            "2.16.840.1.101.3.4.1.1": "aes-128-ecb",
            "2.16.840.1.101.3.4.1.2": "aes-128-cbc",
            "2.16.840.1.101.3.4.1.3": "aes-128-ofb",
            "2.16.840.1.101.3.4.1.4": "aes-128-cfb",
            "2.16.840.1.101.3.4.1.21": "aes-192-ecb",
            "2.16.840.1.101.3.4.1.22": "aes-192-cbc",
            "2.16.840.1.101.3.4.1.23": "aes-192-ofb",
            "2.16.840.1.101.3.4.1.24": "aes-192-cfb",
            "2.16.840.1.101.3.4.1.41": "aes-256-ecb",
            "2.16.840.1.101.3.4.1.42": "aes-256-cbc",
            "2.16.840.1.101.3.4.1.43": "aes-256-ofb",
            "2.16.840.1.101.3.4.1.44": "aes-256-cfb"
        }
    }, {}],
    108: [function(e, t, n) {
        "use strict";
        var r = e("asn1.js");
        n.certificate = e("./certificate");
        var i = r.define("RSAPrivateKey", function() {
            this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int())
        });
        n.RSAPrivateKey = i;
        var a = r.define("RSAPublicKey", function() {
            this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int())
        });
        n.RSAPublicKey = a;
        var o = r.define("SubjectPublicKeyInfo", function() {
            this.seq().obj(this.key("algorithm").use(s), this.key("subjectPublicKey").bitstr())
        });
        n.PublicKey = o;
        var s = r.define("AlgorithmIdentifier", function() {
                this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional())
            }),
            c = r.define("PrivateKeyInfo", function() {
                this.seq().obj(this.key("version").int(), this.key("algorithm").use(s), this.key("subjectPrivateKey").octstr())
            });
        n.PrivateKey = c;
        var f = r.define("EncryptedPrivateKeyInfo", function() {
            this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
        });
        n.EncryptedPrivateKey = f;
        var h = r.define("DSAPrivateKey", function() {
            this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int())
        });
        n.DSAPrivateKey = h, n.DSAparam = r.define("DSAparam", function() {
            this.int()
        });
        var d = r.define("ECPrivateKey", function() {
            this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(u), this.key("publicKey").optional().explicit(1).bitstr())
        });
        n.ECPrivateKey = d;
        var u = r.define("ECParameters", function() {
            this.choice({
                namedCurve: this.objid()
            })
        });
        n.signature = r.define("signature", function() {
            this.seq().obj(this.key("r").int(), this.key("s").int())
        })
    }, {
        "./certificate": 109,
        "asn1.js": 1
    }],
    109: [function(e, t, n) {
        "use strict";
        var r = e("asn1.js"),
            i = r.define("Time", function() {
                this.choice({
                    utcTime: this.utctime(),
                    generalTime: this.gentime()
                })
            }),
            a = r.define("AttributeTypeValue", function() {
                this.seq().obj(this.key("type").objid(), this.key("value").any())
            }),
            o = r.define("AlgorithmIdentifier", function() {
                this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional())
            }),
            s = r.define("SubjectPublicKeyInfo", function() {
                this.seq().obj(this.key("algorithm").use(o), this.key("subjectPublicKey").bitstr())
            }),
            c = r.define("RelativeDistinguishedName", function() {
                this.setof(a)
            }),
            f = r.define("RDNSequence", function() {
                this.seqof(c)
            }),
            h = r.define("Name", function() {
                this.choice({
                    rdnSequence: this.use(f)
                })
            }),
            d = r.define("Validity", function() {
                this.seq().obj(this.key("notBefore").use(i), this.key("notAfter").use(i))
            }),
            u = r.define("Extension", function() {
                this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
            }),
            l = r.define("TBSCertificate", function() {
                this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(o), this.key("issuer").use(h), this.key("validity").use(d), this.key("subject").use(h), this.key("subjectPublicKeyInfo").use(s), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(u).optional())
            }),
            p = r.define("X509Certificate", function() {
                this.seq().obj(this.key("tbsCertificate").use(l), this.key("signatureAlgorithm").use(o), this.key("signatureValue").bitstr())
            });
        t.exports = p
    }, {
        "asn1.js": 1
    }],
    110: [function(e, t, n) {
        var r = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m,
            i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
            a = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m,
            o = e("evp_bytestokey"),
            s = e("browserify-aes"),
            c = e("safe-buffer").Buffer;
        t.exports = function(e, t) {
            var n, f = e.toString(),
                h = f.match(r);
            if (h) {
                var d = "aes" + h[1],
                    u = c.from(h[2], "hex"),
                    l = c.from(h[3].replace(/[\r\n]/g, ""), "base64"),
                    p = o(t, u.slice(0, 8), parseInt(h[1], 10)).key,
                    b = [],
                    y = s.createDecipheriv(d, p, u);
                b.push(y.update(l)), b.push(y.final()), n = c.concat(b)
            } else {
                var m = f.match(a);
                n = new c(m[2].replace(/[\r\n]/g, ""), "base64")
            }
            return {
                tag: f.match(i)[1],
                data: n
            }
        }
    }, {
        "browserify-aes": 21,
        evp_bytestokey: 84,
        "safe-buffer": 143
    }],
    111: [function(e, t, n) {
        var r = e("./asn1"),
            i = e("./aesid.json"),
            a = e("./fixProc"),
            o = e("browserify-aes"),
            s = e("pbkdf2"),
            c = e("safe-buffer").Buffer;

        function f(e) {
            var t;
            "object" != typeof e || c.isBuffer(e) || (t = e.passphrase, e = e.key), "string" == typeof e && (e = c.from(e));
            var n, i, o = a(e, t),
                s = o.tag,
                f = o.data;
            switch (s) {
                case "CERTIFICATE":
                    i = r.certificate.decode(f, "der").tbsCertificate.subjectPublicKeyInfo;
                case "PUBLIC KEY":
                    switch (i || (i = r.PublicKey.decode(f, "der")), n = i.algorithm.algorithm.join(".")) {
                        case "1.2.840.113549.1.1.1":
                            return r.RSAPublicKey.decode(i.subjectPublicKey.data, "der");
                        case "1.2.840.10045.2.1":
                            return i.subjectPrivateKey = i.subjectPublicKey, {
                                type: "ec",
                                data: i
                            };
                        case "1.2.840.10040.4.1":
                            return i.algorithm.params.pub_key = r.DSAparam.decode(i.subjectPublicKey.data, "der"), {
                                type: "dsa",
                                data: i.algorithm.params
                            };
                        default:
                            throw new Error("unknown key id " + n)
                    }
                    throw new Error("unknown key type " + s);
                case "ENCRYPTED PRIVATE KEY":
                    f = h(f = r.EncryptedPrivateKey.decode(f, "der"), t);
                case "PRIVATE KEY":
                    switch (n = (i = r.PrivateKey.decode(f, "der")).algorithm.algorithm.join(".")) {
                        case "1.2.840.113549.1.1.1":
                            return r.RSAPrivateKey.decode(i.subjectPrivateKey, "der");
                        case "1.2.840.10045.2.1":
                            return {
                                curve: i.algorithm.curve, privateKey: r.ECPrivateKey.decode(i.subjectPrivateKey, "der").privateKey
                            };
                        case "1.2.840.10040.4.1":
                            return i.algorithm.params.priv_key = r.DSAparam.decode(i.subjectPrivateKey, "der"), {
                                type: "dsa",
                                params: i.algorithm.params
                            };
                        default:
                            throw new Error("unknown key id " + n)
                    }
                    throw new Error("unknown key type " + s);
                case "RSA PUBLIC KEY":
                    return r.RSAPublicKey.decode(f, "der");
                case "RSA PRIVATE KEY":
                    return r.RSAPrivateKey.decode(f, "der");
                case "DSA PRIVATE KEY":
                    return {
                        type: "dsa", params: r.DSAPrivateKey.decode(f, "der")
                    };
                case "EC PRIVATE KEY":
                    return {
                        curve: (f = r.ECPrivateKey.decode(f, "der")).parameters.value, privateKey: f.privateKey
                    };
                default:
                    throw new Error("unknown key type " + s)
            }
        }

        function h(e, t) {
            var n = e.algorithm.decrypt.kde.kdeparams.salt,
                r = parseInt(e.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
                a = i[e.algorithm.decrypt.cipher.algo.join(".")],
                f = e.algorithm.decrypt.cipher.iv,
                h = e.subjectPrivateKey,
                d = parseInt(a.split("-")[1], 10) / 8,
                u = s.pbkdf2Sync(t, n, r, d, "sha1"),
                l = o.createDecipheriv(a, u, f),
                p = [];
            return p.push(l.update(h)), p.push(l.final()), c.concat(p)
        }
        t.exports = f, f.signature = r.signature
    }, {
        "./aesid.json": 107,
        "./asn1": 108,
        "./fixProc": 110,
        "browserify-aes": 21,
        pbkdf2: 112,
        "safe-buffer": 143
    }],
    112: [function(e, t, n) {
        n.pbkdf2 = e("./lib/async"), n.pbkdf2Sync = e("./lib/sync")
    }, {
        "./lib/async": 113,
        "./lib/sync": 116
    }],
    113: [function(e, t, n) {
        (function(n, r) {
            var i, a = e("./precondition"),
                o = e("./default-encoding"),
                s = e("./sync"),
                c = e("safe-buffer").Buffer,
                f = r.crypto && r.crypto.subtle,
                h = {
                    sha: "SHA-1",
                    "sha-1": "SHA-1",
                    sha1: "SHA-1",
                    sha256: "SHA-256",
                    "sha-256": "SHA-256",
                    sha384: "SHA-384",
                    "sha-384": "SHA-384",
                    "sha-512": "SHA-512",
                    sha512: "SHA-512"
                },
                d = [];

            function u(e) {
                if (r.process && !r.process.browser) return Promise.resolve(!1);
                if (!f || !f.importKey || !f.deriveBits) return Promise.resolve(!1);
                if (void 0 !== d[e]) return d[e];
                var t = l(i = i || c.alloc(8), i, 10, 128, e).then(function() {
                    return !0
                }).catch(function() {
                    return !1
                });
                return d[e] = t, t
            }

            function l(e, t, n, r, i) {
                return f.importKey("raw", e, {
                    name: "PBKDF2"
                }, !1, ["deriveBits"]).then(function(e) {
                    return f.deriveBits({
                        name: "PBKDF2",
                        salt: t,
                        iterations: n,
                        hash: {
                            name: i
                        }
                    }, e, r << 3)
                }).then(function(e) {
                    return c.from(e)
                })
            }

            function p(e, t) {
                e.then(function(e) {
                    n.nextTick(function() {
                        t(null, e)
                    })
                }, function(e) {
                    n.nextTick(function() {
                        t(e)
                    })
                })
            }
            t.exports = function(e, t, i, f, d, b) {
                "function" == typeof d && (b = d, d = void 0);
                var y = h[(d = d || "sha1").toLowerCase()];
                if (!y || "function" != typeof r.Promise) return n.nextTick(function() {
                    var n;
                    try {
                        n = s(e, t, i, f, d)
                    } catch (e) {
                        return b(e)
                    }
                    b(null, n)
                });
                if (a(e, t, i, f), "function" != typeof b) throw new Error("No callback provided to pbkdf2");
                c.isBuffer(e) || (e = c.from(e, o)), c.isBuffer(t) || (t = c.from(t, o)), p(u(y).then(function(n) {
                    return n ? l(e, t, i, f, y) : s(e, t, i, f, d)
                }), b)
            }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./default-encoding": 114,
        "./precondition": 115,
        "./sync": 116,
        _process: 118,
        "safe-buffer": 143
    }],
    114: [function(e, t, n) {
        (function(e) {
            var n;
            e.browser ? n = "utf-8" : n = parseInt(e.version.split(".")[0].slice(1), 10) >= 6 ? "utf-8" : "binary";
            t.exports = n
        }).call(this, e("_process"))
    }, {
        _process: 118
    }],
    115: [function(e, t, n) {
        (function(e) {
            var n = Math.pow(2, 30) - 1;

            function r(t, n) {
                if ("string" != typeof t && !e.isBuffer(t)) throw new TypeError(n + " must be a buffer or string")
            }
            t.exports = function(e, t, i, a) {
                if (r(e, "Password"), r(t, "Salt"), "number" != typeof i) throw new TypeError("Iterations not a number");
                if (i < 0) throw new TypeError("Bad iterations");
                if ("number" != typeof a) throw new TypeError("Key length not a number");
                if (a < 0 || a > n || a != a) throw new TypeError("Bad key length")
            }
        }).call(this, {
            isBuffer: e("../../is-buffer/index.js")
        })
    }, {
        "../../is-buffer/index.js": 102
    }],
    116: [function(e, t, n) {
        var r = e("create-hash/md5"),
            i = e("ripemd160"),
            a = e("sha.js"),
            o = e("./precondition"),
            s = e("./default-encoding"),
            c = e("safe-buffer").Buffer,
            f = c.alloc(128),
            h = {
                md5: 16,
                sha1: 20,
                sha224: 28,
                sha256: 32,
                sha384: 48,
                sha512: 64,
                rmd160: 20,
                ripemd160: 20
            };

        function d(e, t, n) {
            var r = u(e),
                i = "sha512" === e || "sha384" === e ? 128 : 64;
            t.length > i ? t = r(t) : t.length < i && (t = c.concat([t, f], i));
            for (var a = c.allocUnsafe(i + h[e]), o = c.allocUnsafe(i + h[e]), s = 0; s < i; s++) a[s] = 54 ^ t[s], o[s] = 92 ^ t[s];
            var d = c.allocUnsafe(i + n + 4);
            a.copy(d, 0, 0, i), this.ipad1 = d, this.ipad2 = a, this.opad = o, this.alg = e, this.blocksize = i, this.hash = r, this.size = h[e]
        }

        function u(e) {
            return "rmd160" === e || "ripemd160" === e ? function(e) {
                return (new i).update(e).digest()
            } : "md5" === e ? r : function(t) {
                return a(e).update(t).digest()
            }
        }
        d.prototype.run = function(e, t) {
            return e.copy(t, this.blocksize), this.hash(t).copy(this.opad, this.blocksize), this.hash(this.opad)
        }, t.exports = function(e, t, n, r, i) {
            o(e, t, n, r), c.isBuffer(e) || (e = c.from(e, s)), c.isBuffer(t) || (t = c.from(t, s));
            var a = new d(i = i || "sha1", e, t.length),
                f = c.allocUnsafe(r),
                u = c.allocUnsafe(t.length + 4);
            t.copy(u, 0, 0, t.length);
            for (var l = 0, p = h[i], b = Math.ceil(r / p), y = 1; y <= b; y++) {
                u.writeUInt32BE(y, t.length);
                for (var m = a.run(u, a.ipad1), g = m, v = 1; v < n; v++) {
                    g = a.run(g, a.ipad2);
                    for (var _ = 0; _ < p; _++) m[_] ^= g[_]
                }
                m.copy(f, l), l += p
            }
            return f
        }
    }, {
        "./default-encoding": 114,
        "./precondition": 115,
        "create-hash/md5": 53,
        ripemd160: 142,
        "safe-buffer": 143,
        "sha.js": 145
    }],
    117: [function(e, t, n) {
        (function(e) {
            "use strict";
            void 0 === e || !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = {
                nextTick: function(t, n, r, i) {
                    if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
                    var a, o, s = arguments.length;
                    switch (s) {
                        case 0:
                        case 1:
                            return e.nextTick(t);
                        case 2:
                            return e.nextTick(function() {
                                t.call(null, n)
                            });
                        case 3:
                            return e.nextTick(function() {
                                t.call(null, n, r)
                            });
                        case 4:
                            return e.nextTick(function() {
                                t.call(null, n, r, i)
                            });
                        default:
                            for (a = new Array(s - 1), o = 0; o < a.length;) a[o++] = arguments[o];
                            return e.nextTick(function() {
                                t.apply(null, a)
                            })
                    }
                }
            } : t.exports = e
        }).call(this, e("_process"))
    }, {
        _process: 118
    }],
    118: [function(e, t, n) {
        var r, i, a = t.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function s() {
            throw new Error("clearTimeout has not been defined")
        }

        function c(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
            try {
                return r(e, 0)
            } catch (t) {
                try {
                    return r.call(null, e, 0)
                } catch (t) {
                    return r.call(this, e, 0)
                }
            }
        }

        function f(e) {
            if (i === clearTimeout) return clearTimeout(e);
            if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
            try {
                return i(e)
            } catch (t) {
                try {
                    return i.call(null, e)
                } catch (t) {
                    return i.call(this, e)
                }
            }
        }(function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                r = o
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (e) {
                i = s
            }
        })();
        var h, d = [],
            u = !1,
            l = -1;

        function p() {
            u && h && (u = !1, h.length ? d = h.concat(d) : l = -1, d.length && b())
        }

        function b() {
            if (!u) {
                var e = c(p);
                u = !0;
                for (var t = d.length; t;) {
                    for (h = d, d = []; ++l < t;) h && h[l].run();
                    l = -1, t = d.length
                }
                h = null, u = !1, f(e)
            }
        }

        function y(e, t) {
            this.fun = e, this.array = t
        }

        function m() {}
        a.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            d.push(new y(e, t)), 1 !== d.length || u || c(b)
        }, y.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = m, a.addListener = m, a.once = m, a.off = m, a.removeListener = m, a.removeAllListeners = m, a.emit = m, a.prependListener = m, a.prependOnceListener = m, a.listeners = function(e) {
            return []
        }, a.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, a.cwd = function() {
            return "/"
        }, a.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, a.umask = function() {
            return 0
        }
    }, {}],
    119: [function(e, t, n) {
        n.publicEncrypt = e("./publicEncrypt"), n.privateDecrypt = e("./privateDecrypt"), n.privateEncrypt = function(e, t) {
            return n.publicEncrypt(e, t, !0)
        }, n.publicDecrypt = function(e, t) {
            return n.privateDecrypt(e, t, !0)
        }
    }, {
        "./privateDecrypt": 121,
        "./publicEncrypt": 122
    }],
    120: [function(e, t, n) {
        var r = e("create-hash"),
            i = e("safe-buffer").Buffer;

        function a(e) {
            var t = i.allocUnsafe(4);
            return t.writeUInt32BE(e, 0), t
        }
        t.exports = function(e, t) {
            for (var n, o = i.alloc(0), s = 0; o.length < t;) n = a(s++), o = i.concat([o, r("sha1").update(e).update(n).digest()]);
            return o.slice(0, t)
        }
    }, {
        "create-hash": 52,
        "safe-buffer": 143
    }],
    121: [function(e, t, n) {
        var r = e("parse-asn1"),
            i = e("./mgf"),
            a = e("./xor"),
            o = e("bn.js"),
            s = e("browserify-rsa"),
            c = e("create-hash"),
            f = e("./withPublic"),
            h = e("safe-buffer").Buffer;

        function d(e, t) {
            var n = e.modulus.byteLength(),
                r = c("sha1").update(h.alloc(0)).digest(),
                o = r.length;
            if (0 !== t[0]) throw new Error("decryption error");
            var s = t.slice(1, o + 1),
                f = t.slice(o + 1),
                d = a(s, i(f, o)),
                u = a(f, i(d, n - o - 1));
            if (l(r, u.slice(0, o))) throw new Error("decryption error");
            for (var p = o; 0 === u[p];) p++;
            if (1 !== u[p++]) throw new Error("decryption error");
            return u.slice(p)
        }

        function u(e, t, n) {
            for (var r = t.slice(0, 2), i = 2, a = 0; 0 !== t[i++];)
                if (i >= t.length) {
                    a++;
                    break
                } var o = t.slice(2, i - 1);
            if (("0002" !== r.toString("hex") && !n || "0001" !== r.toString("hex") && n) && a++, o.length < 8 && a++, a) throw new Error("decryption error");
            return t.slice(i)
        }

        function l(e, t) {
            e = h.from(e), t = h.from(t);
            var n = 0,
                r = e.length;
            e.length !== t.length && (n++, r = Math.min(e.length, t.length));
            for (var i = -1; ++i < r;) n += e[i] ^ t[i];
            return n
        }
        t.exports = function(e, t, n) {
            var i;
            i = e.padding ? e.padding : n ? 1 : 4;
            var a, c = r(e),
                l = c.modulus.byteLength();
            if (t.length > l || new o(t).cmp(c.modulus) >= 0) throw new Error("decryption error");
            a = n ? f(new o(t), c) : s(t, c);
            var p = h.alloc(l - a.length);
            if (a = h.concat([p, a], l), 4 === i) return d(c, a);
            if (1 === i) return u(c, a, n);
            if (3 === i) return a;
            throw new Error("unknown padding")
        }
    }, {
        "./mgf": 120,
        "./withPublic": 123,
        "./xor": 124,
        "bn.js": 16,
        "browserify-rsa": 39,
        "create-hash": 52,
        "parse-asn1": 111,
        "safe-buffer": 143
    }],
    122: [function(e, t, n) {
        var r = e("parse-asn1"),
            i = e("randombytes"),
            a = e("create-hash"),
            o = e("./mgf"),
            s = e("./xor"),
            c = e("bn.js"),
            f = e("./withPublic"),
            h = e("browserify-rsa"),
            d = e("safe-buffer").Buffer;

        function u(e, t) {
            var n = e.modulus.byteLength(),
                r = t.length,
                f = a("sha1").update(d.alloc(0)).digest(),
                h = f.length,
                u = 2 * h;
            if (r > n - u - 2) throw new Error("message too long");
            var l = d.alloc(n - r - u - 2),
                p = n - h - 1,
                b = i(h),
                y = s(d.concat([f, l, d.alloc(1, 1), t], p), o(b, p)),
                m = s(b, o(y, h));
            return new c(d.concat([d.alloc(1), m, y], n))
        }

        function l(e, t, n) {
            var r, i = t.length,
                a = e.modulus.byteLength();
            if (i > a - 11) throw new Error("message too long");
            return r = n ? d.alloc(a - i - 3, 255) : p(a - i - 3), new c(d.concat([d.from([0, n ? 1 : 2]), r, d.alloc(1), t], a))
        }

        function p(e) {
            for (var t, n = d.allocUnsafe(e), r = 0, a = i(2 * e), o = 0; r < e;) o === a.length && (a = i(2 * e), o = 0), (t = a[o++]) && (n[r++] = t);
            return n
        }
        t.exports = function(e, t, n) {
            var i;
            i = e.padding ? e.padding : n ? 1 : 4;
            var a, o = r(e);
            if (4 === i) a = u(o, t);
            else if (1 === i) a = l(o, t, n);
            else {
                if (3 !== i) throw new Error("unknown padding");
                if ((a = new c(t)).cmp(o.modulus) >= 0) throw new Error("data too long for modulus")
            }
            return n ? h(a, o) : f(a, o)
        }
    }, {
        "./mgf": 120,
        "./withPublic": 123,
        "./xor": 124,
        "bn.js": 16,
        "browserify-rsa": 39,
        "create-hash": 52,
        "parse-asn1": 111,
        randombytes: 125,
        "safe-buffer": 143
    }],
    123: [function(e, t, n) {
        var r = e("bn.js"),
            i = e("safe-buffer").Buffer;
        t.exports = function(e, t) {
            return i.from(e.toRed(r.mont(t.modulus)).redPow(new r(t.publicExponent)).fromRed().toArray())
        }
    }, {
        "bn.js": 16,
        "safe-buffer": 143
    }],
    124: [function(e, t, n) {
        t.exports = function(e, t) {
            for (var n = e.length, r = -1; ++r < n;) e[r] ^= t[r];
            return e
        }
    }, {}],
    125: [function(e, t, n) {
        (function(n, r) {
            "use strict";
            var i = 65536,
                a = 4294967295;
            var o = e("safe-buffer").Buffer,
                s = r.crypto || r.msCrypto;
            s && s.getRandomValues ? t.exports = function(e, t) {
                if (e > a) throw new RangeError("requested too many random bytes");
                var r = o.allocUnsafe(e);
                if (e > 0)
                    if (e > i)
                        for (var c = 0; c < e; c += i) s.getRandomValues(r.slice(c, c + i));
                    else s.getRandomValues(r);
                if ("function" == typeof t) return n.nextTick(function() {
                    t(null, r)
                });
                return r
            } : t.exports = function() {
                throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
            }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        _process: 118,
        "safe-buffer": 143
    }],
    126: [function(e, t, n) {
        (function(t, r) {
            "use strict";

            function i() {
                throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
            }
            var a = e("safe-buffer"),
                o = e("randombytes"),
                s = a.Buffer,
                c = a.kMaxLength,
                f = r.crypto || r.msCrypto,
                h = Math.pow(2, 32) - 1;

            function d(e, t) {
                if ("number" != typeof e || e != e) throw new TypeError("offset must be a number");
                if (e > h || e < 0) throw new TypeError("offset must be a uint32");
                if (e > c || e > t) throw new RangeError("offset out of range")
            }

            function u(e, t, n) {
                if ("number" != typeof e || e != e) throw new TypeError("size must be a number");
                if (e > h || e < 0) throw new TypeError("size must be a uint32");
                if (e + t > n || e > c) throw new RangeError("buffer too small")
            }

            function l(e, n, r, i) {
                if (t.browser) {
                    var a = e.buffer,
                        s = new Uint8Array(a, n, r);
                    return f.getRandomValues(s), i ? void t.nextTick(function() {
                        i(null, e)
                    }) : e
                }
                if (!i) return o(r).copy(e, n), e;
                o(r, function(t, r) {
                    if (t) return i(t);
                    r.copy(e, n), i(null, e)
                })
            }
            f && f.getRandomValues || !t.browser ? (n.randomFill = function(e, t, n, i) {
                if (!(s.isBuffer(e) || e instanceof r.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
                if ("function" == typeof t) i = t, t = 0, n = e.length;
                else if ("function" == typeof n) i = n, n = e.length - t;
                else if ("function" != typeof i) throw new TypeError('"cb" argument must be a function');
                return d(t, e.length), u(n, t, e.length), l(e, t, n, i)
            }, n.randomFillSync = function(e, t, n) {
                void 0 === t && (t = 0);
                if (!(s.isBuffer(e) || e instanceof r.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
                d(t, e.length), void 0 === n && (n = e.length - t);
                return u(n, t, e.length), l(e, t, n)
            }) : (n.randomFill = i, n.randomFillSync = i)
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        _process: 118,
        randombytes: 125,
        "safe-buffer": 143
    }],
    127: [function(e, t, n) {
        t.exports = e("./lib/_stream_duplex.js")
    }, {
        "./lib/_stream_duplex.js": 128
    }],
    128: [function(e, t, n) {
        "use strict";
        var r = e("process-nextick-args"),
            i = Object.keys || function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t
            };
        t.exports = d;
        var a = e("core-util-is");
        a.inherits = e("inherits");
        var o = e("./_stream_readable"),
            s = e("./_stream_writable");
        a.inherits(d, o);
        for (var c = i(s.prototype), f = 0; f < c.length; f++) {
            var h = c[f];
            d.prototype[h] || (d.prototype[h] = s.prototype[h])
        }

        function d(e) {
            if (!(this instanceof d)) return new d(e);
            o.call(this, e), s.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", u)
        }

        function u() {
            this.allowHalfOpen || this._writableState.ended || r.nextTick(l, this)
        }

        function l(e) {
            e.end()
        }
        Object.defineProperty(d.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }), Object.defineProperty(d.prototype, "destroyed", {
            get: function() {
                return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
            },
            set: function(e) {
                void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
            }
        }), d.prototype._destroy = function(e, t) {
            this.push(null), this.end(), r.nextTick(t, e)
        }
    }, {
        "./_stream_readable": 130,
        "./_stream_writable": 132,
        "core-util-is": 50,
        inherits: 101,
        "process-nextick-args": 117
    }],
    129: [function(e, t, n) {
        "use strict";
        t.exports = a;
        var r = e("./_stream_transform"),
            i = e("core-util-is");

        function a(e) {
            if (!(this instanceof a)) return new a(e);
            r.call(this, e)
        }
        i.inherits = e("inherits"), i.inherits(a, r), a.prototype._transform = function(e, t, n) {
            n(null, e)
        }
    }, {
        "./_stream_transform": 131,
        "core-util-is": 50,
        inherits: 101
    }],
    130: [function(e, t, n) {
        (function(n, r) {
            "use strict";
            var i = e("process-nextick-args");
            t.exports = w;
            var a, o = e("isarray");
            w.ReadableState = C;
            e("events").EventEmitter;
            var s = function(e, t) {
                    return e.listeners(t).length
                },
                c = e("./internal/streams/stream"),
                f = e("safe-buffer").Buffer,
                h = r.Uint8Array || function() {};

            function d(e) {
                return f.from(e)
            }

            function u(e) {
                return f.isBuffer(e) || e instanceof h
            }
            var l = e("core-util-is");
            l.inherits = e("inherits");
            var p = e("util"),
                b = void 0;
            b = p && p.debuglog ? p.debuglog("stream") : function() {};
            var y, m = e("./internal/streams/BufferList"),
                g = e("./internal/streams/destroy");
            l.inherits(w, c);
            var v = ["error", "close", "destroy", "pause", "resume"];

            function _(e, t, n) {
                if ("function" == typeof e.prependListener) return e.prependListener(t, n);
                e._events && e._events[t] ? o(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n)
            }

            function C(t, n) {
                a = a || e("./_stream_duplex"), t = t || {};
                var r = n instanceof a;
                this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode);
                var i = t.highWaterMark,
                    o = t.readableHighWaterMark,
                    s = this.objectMode ? 16 : 16384;
                this.highWaterMark = i || 0 === i ? i : r && (o || 0 === o) ? o : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new m, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (y || (y = e("string_decoder/").StringDecoder), this.decoder = new y(t.encoding), this.encoding = t.encoding)
            }

            function w(t) {
                if (a = a || e("./_stream_duplex"), !(this instanceof w)) return new w(t);
                this._readableState = new C(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), c.call(this)
            }

            function B(e, t, n, r, i) {
                var a, o = e._readableState;
                null === t ? (o.reading = !1, x(e, o)) : (i || (a = M(o, t)), a ? e.emit("error", a) : o.objectMode || t && t.length > 0 ? ("string" == typeof t || o.objectMode || Object.getPrototypeOf(t) === f.prototype || (t = d(t)), r ? o.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : S(e, o, t, !0) : o.ended ? e.emit("error", new Error("stream.push() after EOF")) : (o.reading = !1, o.decoder && !n ? (t = o.decoder.write(t), o.objectMode || 0 !== t.length ? S(e, o, t, !1) : L(e, o)) : S(e, o, t, !1))) : r || (o.reading = !1));
                return N(o)
            }

            function S(e, t, n, r) {
                t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && D(e)), L(e, t)
            }

            function M(e, t) {
                var n;
                return u(t) || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n
            }

            function N(e) {
                return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
            }
            Object.defineProperty(w.prototype, "destroyed", {
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(e) {
                    this._readableState && (this._readableState.destroyed = e)
                }
            }), w.prototype.destroy = g.destroy, w.prototype._undestroy = g.undestroy, w.prototype._destroy = function(e, t) {
                this.push(null), t(e)
            }, w.prototype.push = function(e, t) {
                var n, r = this._readableState;
                return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = f.from(e, t), t = ""), n = !0), B(this, e, t, !1, n)
            }, w.prototype.unshift = function(e) {
                return B(this, e, null, !0, !1)
            }, w.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, w.prototype.setEncoding = function(t) {
                return y || (y = e("string_decoder/").StringDecoder), this._readableState.decoder = new y(t), this._readableState.encoding = t, this
            };
            var E = 8388608;

            function k(e) {
                return e >= E ? e = E : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
            }

            function A(e, t) {
                return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = k(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
            }

            function x(e, t) {
                if (!t.ended) {
                    if (t.decoder) {
                        var n = t.decoder.end();
                        n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
                    }
                    t.ended = !0, D(e)
                }
            }

            function D(e) {
                var t = e._readableState;
                t.needReadable = !1, t.emittedReadable || (b("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? i.nextTick(I, e) : I(e))
            }

            function I(e) {
                b("emit readable"), e.emit("readable"), U(e)
            }

            function L(e, t) {
                t.readingMore || (t.readingMore = !0, i.nextTick(P, e, t))
            }

            function P(e, t) {
                for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (b("maybeReadMore read 0"), e.read(0), n !== t.length);) n = t.length;
                t.readingMore = !1
            }

            function T(e) {
                return function() {
                    var t = e._readableState;
                    b("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && s(e, "data") && (t.flowing = !0, U(e))
                }
            }

            function R(e) {
                b("readable nexttick read 0"), e.read(0)
            }

            function j(e, t) {
                t.resumeScheduled || (t.resumeScheduled = !0, i.nextTick(O, e, t))
            }

            function O(e, t) {
                t.reading || (b("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), U(e), t.flowing && !t.reading && e.read(0)
            }

            function U(e) {
                var t = e._readableState;
                for (b("flow", t.flowing); t.flowing && null !== e.read(););
            }

            function z(e, t) {
                return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : n = q(e, t.buffer, t.decoder), n);
                var n
            }

            function q(e, t, n) {
                var r;
                return e < t.head.data.length ? (r = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : r = e === t.head.data.length ? t.shift() : n ? G(e, t) : K(e, t), r
            }

            function G(e, t) {
                var n = t.head,
                    r = 1,
                    i = n.data;
                for (e -= i.length; n = n.next;) {
                    var a = n.data,
                        o = e > a.length ? a.length : e;
                    if (o === a.length ? i += a : i += a.slice(0, e), 0 === (e -= o)) {
                        o === a.length ? (++r, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = a.slice(o));
                        break
                    }++r
                }
                return t.length -= r, i
            }

            function K(e, t) {
                var n = f.allocUnsafe(e),
                    r = t.head,
                    i = 1;
                for (r.data.copy(n), e -= r.data.length; r = r.next;) {
                    var a = r.data,
                        o = e > a.length ? a.length : e;
                    if (a.copy(n, n.length - e, 0, o), 0 === (e -= o)) {
                        o === a.length ? (++i, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r, r.data = a.slice(o));
                        break
                    }++i
                }
                return t.length -= i, n
            }

            function F(e) {
                var t = e._readableState;
                if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                t.endEmitted || (t.ended = !0, i.nextTick(W, t, e))
            }

            function W(e, t) {
                e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
            }

            function H(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            }
            w.prototype.read = function(e) {
                b("read", e), e = parseInt(e, 10);
                var t = this._readableState,
                    n = e;
                if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return b("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? F(this) : D(this), null;
                if (0 === (e = A(e, t)) && t.ended) return 0 === t.length && F(this), null;
                var r, i = t.needReadable;
                return b("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && b("length less than watermark", i = !0), t.ended || t.reading ? b("reading or ended", i = !1) : i && (b("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = A(n, t))), null === (r = e > 0 ? z(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && F(this)), null !== r && this.emit("data", r), r
            }, w.prototype._read = function(e) {
                this.emit("error", new Error("_read() is not implemented"))
            }, w.prototype.pipe = function(e, t) {
                var r = this,
                    a = this._readableState;
                switch (a.pipesCount) {
                    case 0:
                        a.pipes = e;
                        break;
                    case 1:
                        a.pipes = [a.pipes, e];
                        break;
                    default:
                        a.pipes.push(e)
                }
                a.pipesCount += 1, b("pipe count=%d opts=%j", a.pipesCount, t);
                var o = (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? f : v;

                function c(e, t) {
                    b("onunpipe"), e === r && t && !1 === t.hasUnpiped && (t.hasUnpiped = !0, u())
                }

                function f() {
                    b("onend"), e.end()
                }
                a.endEmitted ? i.nextTick(o) : r.once("end", o), e.on("unpipe", c);
                var h = T(r);
                e.on("drain", h);
                var d = !1;

                function u() {
                    b("cleanup"), e.removeListener("close", m), e.removeListener("finish", g), e.removeListener("drain", h), e.removeListener("error", y), e.removeListener("unpipe", c), r.removeListener("end", f), r.removeListener("end", v), r.removeListener("data", p), d = !0, !a.awaitDrain || e._writableState && !e._writableState.needDrain || h()
                }
                var l = !1;

                function p(t) {
                    b("ondata"), l = !1, !1 !== e.write(t) || l || ((1 === a.pipesCount && a.pipes === e || a.pipesCount > 1 && -1 !== H(a.pipes, e)) && !d && (b("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, l = !0), r.pause())
                }

                function y(t) {
                    b("onerror", t), v(), e.removeListener("error", y), 0 === s(e, "error") && e.emit("error", t)
                }

                function m() {
                    e.removeListener("finish", g), v()
                }

                function g() {
                    b("onfinish"), e.removeListener("close", m), v()
                }

                function v() {
                    b("unpipe"), r.unpipe(e)
                }
                return r.on("data", p), _(e, "error", y), e.once("close", m), e.once("finish", g), e.emit("pipe", r), a.flowing || (b("pipe resume"), r.resume()), e
            }, w.prototype.unpipe = function(e) {
                var t = this._readableState,
                    n = {
                        hasUnpiped: !1
                    };
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n), this);
                if (!e) {
                    var r = t.pipes,
                        i = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                    for (var a = 0; a < i; a++) r[a].emit("unpipe", this, n);
                    return this
                }
                var o = H(t.pipes, e);
                return -1 === o ? this : (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n), this)
            }, w.prototype.on = function(e, t) {
                var n = c.prototype.on.call(this, e, t);
                if ("data" === e) !1 !== this._readableState.flowing && this.resume();
                else if ("readable" === e) {
                    var r = this._readableState;
                    r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && D(this) : i.nextTick(R, this))
                }
                return n
            }, w.prototype.addListener = w.prototype.on, w.prototype.resume = function() {
                var e = this._readableState;
                return e.flowing || (b("resume"), e.flowing = !0, j(this, e)), this
            }, w.prototype.pause = function() {
                return b("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (b("pause"), this._readableState.flowing = !1, this.emit("pause")), this
            }, w.prototype.wrap = function(e) {
                var t = this,
                    n = this._readableState,
                    r = !1;
                for (var i in e.on("end", function() {
                        if (b("wrapped end"), n.decoder && !n.ended) {
                            var e = n.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    }), e.on("data", function(i) {
                        (b("wrapped data"), n.decoder && (i = n.decoder.write(i)), !n.objectMode || null !== i && void 0 !== i) && ((n.objectMode || i && i.length) && (t.push(i) || (r = !0, e.pause())))
                    }), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(i));
                for (var a = 0; a < v.length; a++) e.on(v[a], this.emit.bind(this, v[a]));
                return this._read = function(t) {
                    b("wrapped _read", t), r && (r = !1, e.resume())
                }, this
            }, Object.defineProperty(w.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), w._fromList = z
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./_stream_duplex": 128,
        "./internal/streams/BufferList": 133,
        "./internal/streams/destroy": 134,
        "./internal/streams/stream": 135,
        _process: 118,
        "core-util-is": 50,
        events: 83,
        inherits: 101,
        isarray: 136,
        "process-nextick-args": 117,
        "safe-buffer": 143,
        "string_decoder/": 137,
        util: 18
    }],
    131: [function(e, t, n) {
        "use strict";
        t.exports = o;
        var r = e("./_stream_duplex"),
            i = e("core-util-is");

        function a(e, t) {
            var n = this._transformState;
            n.transforming = !1;
            var r = n.writecb;
            if (!r) return this.emit("error", new Error("write callback called multiple times"));
            n.writechunk = null, n.writecb = null, null != t && this.push(t), r(e);
            var i = this._readableState;
            i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
        }

        function o(e) {
            if (!(this instanceof o)) return new o(e);
            r.call(this, e), this._transformState = {
                afterTransform: a.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
            }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", s)
        }

        function s() {
            var e = this;
            "function" == typeof this._flush ? this._flush(function(t, n) {
                c(e, t, n)
            }) : c(this, null, null)
        }

        function c(e, t, n) {
            if (t) return e.emit("error", t);
            if (null != n && e.push(n), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
            if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
            return e.push(null)
        }
        i.inherits = e("inherits"), i.inherits(o, r), o.prototype.push = function(e, t) {
            return this._transformState.needTransform = !1, r.prototype.push.call(this, e, t)
        }, o.prototype._transform = function(e, t, n) {
            throw new Error("_transform() is not implemented")
        }, o.prototype._write = function(e, t, n) {
            var r = this._transformState;
            if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
                var i = this._readableState;
                (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }
        }, o.prototype._read = function(e) {
            var t = this._transformState;
            null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
        }, o.prototype._destroy = function(e, t) {
            var n = this;
            r.prototype._destroy.call(this, e, function(e) {
                t(e), n.emit("close")
            })
        }
    }, {
        "./_stream_duplex": 128,
        "core-util-is": 50,
        inherits: 101
    }],
    132: [function(e, t, n) {
        (function(n, r) {
            "use strict";
            var i = e("process-nextick-args");

            function a(e) {
                var t = this;
                this.next = null, this.entry = null, this.finish = function() {
                    R(t, e)
                }
            }
            t.exports = v;
            var o, s = !n.browser && ["v0.10", "v0.9."].indexOf(n.version.slice(0, 5)) > -1 ? setImmediate : i.nextTick;
            v.WritableState = g;
            var c = e("core-util-is");
            c.inherits = e("inherits");
            var f = {
                    deprecate: e("util-deprecate")
                },
                h = e("./internal/streams/stream"),
                d = e("safe-buffer").Buffer,
                u = r.Uint8Array || function() {};

            function l(e) {
                return d.from(e)
            }

            function p(e) {
                return d.isBuffer(e) || e instanceof u
            }
            var b, y = e("./internal/streams/destroy");

            function m() {}

            function g(t, n) {
                o = o || e("./_stream_duplex"), t = t || {};
                var r = n instanceof o;
                this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.writableObjectMode);
                var i = t.highWaterMark,
                    s = t.writableHighWaterMark,
                    c = this.objectMode ? 16 : 16384;
                this.highWaterMark = i || 0 === i ? i : r && (s || 0 === s) ? s : c, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                var f = !1 === t.decodeStrings;
                this.decodeStrings = !f, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                    E(n, e)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this)
            }

            function v(t) {
                if (o = o || e("./_stream_duplex"), !(b.call(v, this) || this instanceof o)) return new v(t);
                this._writableState = new g(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), h.call(this)
            }

            function _(e, t) {
                var n = new Error("write after end");
                e.emit("error", n), i.nextTick(t, n)
            }

            function C(e, t, n, r) {
                var a = !0,
                    o = !1;
                return null === n ? o = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || t.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")), o && (e.emit("error", o), i.nextTick(r, o), a = !1), a
            }

            function w(e, t, n) {
                return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = d.from(t, n)), t
            }

            function B(e, t, n, r, i, a) {
                if (!n) {
                    var o = w(t, r, i);
                    r !== o && (n = !0, i = "buffer", r = o)
                }
                var s = t.objectMode ? 1 : r.length;
                t.length += s;
                var c = t.length < t.highWaterMark;
                if (c || (t.needDrain = !0), t.writing || t.corked) {
                    var f = t.lastBufferedRequest;
                    t.lastBufferedRequest = {
                        chunk: r,
                        encoding: i,
                        isBuf: n,
                        callback: a,
                        next: null
                    }, f ? f.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                } else S(e, t, !1, s, r, i, a);
                return c
            }

            function S(e, t, n, r, i, a, o) {
                t.writelen = r, t.writecb = o, t.writing = !0, t.sync = !0, n ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite), t.sync = !1
            }

            function M(e, t, n, r, a) {
                --t.pendingcb, n ? (i.nextTick(a, r), i.nextTick(P, e, t), e._writableState.errorEmitted = !0, e.emit("error", r)) : (a(r), e._writableState.errorEmitted = !0, e.emit("error", r), P(e, t))
            }

            function N(e) {
                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
            }

            function E(e, t) {
                var n = e._writableState,
                    r = n.sync,
                    i = n.writecb;
                if (N(n), t) M(e, n, r, t, i);
                else {
                    var a = D(n);
                    a || n.corked || n.bufferProcessing || !n.bufferedRequest || x(e, n), r ? s(k, e, n, a, i) : k(e, n, a, i)
                }
            }

            function k(e, t, n, r) {
                n || A(e, t), t.pendingcb--, r(), P(e, t)
            }

            function A(e, t) {
                0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
            }

            function x(e, t) {
                t.bufferProcessing = !0;
                var n = t.bufferedRequest;
                if (e._writev && n && n.next) {
                    var r = t.bufferedRequestCount,
                        i = new Array(r),
                        o = t.corkedRequestsFree;
                    o.entry = n;
                    for (var s = 0, c = !0; n;) i[s] = n, n.isBuf || (c = !1), n = n.next, s += 1;
                    i.allBuffers = c, S(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new a(t), t.bufferedRequestCount = 0
                } else {
                    for (; n;) {
                        var f = n.chunk,
                            h = n.encoding,
                            d = n.callback;
                        if (S(e, t, !1, t.objectMode ? 1 : f.length, f, h, d), n = n.next, t.bufferedRequestCount--, t.writing) break
                    }
                    null === n && (t.lastBufferedRequest = null)
                }
                t.bufferedRequest = n, t.bufferProcessing = !1
            }

            function D(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }

            function I(e, t) {
                e._final(function(n) {
                    t.pendingcb--, n && e.emit("error", n), t.prefinished = !0, e.emit("prefinish"), P(e, t)
                })
            }

            function L(e, t) {
                t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, i.nextTick(I, e, t)) : (t.prefinished = !0, e.emit("prefinish")))
            }

            function P(e, t) {
                var n = D(t);
                return n && (L(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), n
            }

            function T(e, t, n) {
                t.ending = !0, P(e, t), n && (t.finished ? i.nextTick(n) : e.once("finish", n)), t.ended = !0, e.writable = !1
            }

            function R(e, t, n) {
                var r = e.entry;
                for (e.entry = null; r;) {
                    var i = r.callback;
                    t.pendingcb--, i(n), r = r.next
                }
                t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
            }
            c.inherits(v, h), g.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                    return t
                },
                function() {
                    try {
                        Object.defineProperty(g.prototype, "buffer", {
                            get: f.deprecate(function() {
                                return this.getBuffer()
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (b = Function.prototype[Symbol.hasInstance], Object.defineProperty(v, Symbol.hasInstance, {
                    value: function(e) {
                        return !!b.call(this, e) || this === v && (e && e._writableState instanceof g)
                    }
                })) : b = function(e) {
                    return e instanceof this
                }, v.prototype.pipe = function() {
                    this.emit("error", new Error("Cannot pipe, not readable"))
                }, v.prototype.write = function(e, t, n) {
                    var r = this._writableState,
                        i = !1,
                        a = !r.objectMode && p(e);
                    return a && !d.isBuffer(e) && (e = l(e)), "function" == typeof t && (n = t, t = null), a ? t = "buffer" : t || (t = r.defaultEncoding), "function" != typeof n && (n = m), r.ended ? _(this, n) : (a || C(this, r, e, n)) && (r.pendingcb++, i = B(this, r, a, e, t, n)), i
                }, v.prototype.cork = function() {
                    this._writableState.corked++
                }, v.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || x(this, e))
                }, v.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
                    return this._writableState.defaultEncoding = e, this
                }, Object.defineProperty(v.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), v.prototype._write = function(e, t, n) {
                    n(new Error("_write() is not implemented"))
                }, v.prototype._writev = null, v.prototype.end = function(e, t, n) {
                    var r = this._writableState;
                    "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null !== e && void 0 !== e && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || T(this, r, n)
                }, Object.defineProperty(v.prototype, "destroyed", {
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }), v.prototype.destroy = y.destroy, v.prototype._undestroy = y.undestroy, v.prototype._destroy = function(e, t) {
                    this.end(), t(e)
                }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./_stream_duplex": 128,
        "./internal/streams/destroy": 134,
        "./internal/streams/stream": 135,
        _process: 118,
        "core-util-is": 50,
        inherits: 101,
        "process-nextick-args": 117,
        "safe-buffer": 143,
        "util-deprecate": 154
    }],
    133: [function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var i = e("safe-buffer").Buffer,
            a = e("util");

        function o(e, t, n) {
            e.copy(t, n)
        }
        t.exports = function() {
            function e() {
                r(this, e), this.head = null, this.tail = null, this.length = 0
            }
            return e.prototype.push = function(e) {
                var t = {
                    data: e,
                    next: null
                };
                this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
            }, e.prototype.unshift = function(e) {
                var t = {
                    data: e,
                    next: this.head
                };
                0 === this.length && (this.tail = t), this.head = t, ++this.length
            }, e.prototype.shift = function() {
                if (0 !== this.length) {
                    var e = this.head.data;
                    return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                }
            }, e.prototype.clear = function() {
                this.head = this.tail = null, this.length = 0
            }, e.prototype.join = function(e) {
                if (0 === this.length) return "";
                for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data;
                return n
            }, e.prototype.concat = function(e) {
                if (0 === this.length) return i.alloc(0);
                if (1 === this.length) return this.head.data;
                for (var t = i.allocUnsafe(e >>> 0), n = this.head, r = 0; n;) o(n.data, t, r), r += n.data.length, n = n.next;
                return t
            }, e
        }(), a && a.inspect && a.inspect.custom && (t.exports.prototype[a.inspect.custom] = function() {
            var e = a.inspect({
                length: this.length
            });
            return this.constructor.name + " " + e
        })
    }, {
        "safe-buffer": 143,
        util: 18
    }],
    134: [function(e, t, n) {
        "use strict";
        var r = e("process-nextick-args");

        function i(e, t) {
            e.emit("error", t)
        }
        t.exports = {
            destroy: function(e, t) {
                var n = this,
                    a = this._readableState && this._readableState.destroyed,
                    o = this._writableState && this._writableState.destroyed;
                return a || o ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || r.nextTick(i, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {
                    !t && e ? (r.nextTick(i, n, e), n._writableState && (n._writableState.errorEmitted = !0)) : t && t(e)
                }), this)
            },
            undestroy: function() {
                this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
            }
        }
    }, {
        "process-nextick-args": 117
    }],
    135: [function(e, t, n) {
        t.exports = e("events").EventEmitter
    }, {
        events: 83
    }],
    136: [function(e, t, n) {
        arguments[4][48][0].apply(n, arguments)
    }, {
        dup: 48
    }],
    137: [function(e, t, n) {
        "use strict";
        var r = e("safe-buffer").Buffer,
            i = r.isEncoding || function(e) {
                switch ((e = "" + e) && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            };

        function a(e) {
            if (!e) return "utf8";
            for (var t;;) switch (e) {
                case "utf8":
                case "utf-8":
                    return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return "utf16le";
                case "latin1":
                case "binary":
                    return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                    return e;
                default:
                    if (t) return;
                    e = ("" + e).toLowerCase(), t = !0
            }
        }

        function o(e) {
            var t = a(e);
            if ("string" != typeof t && (r.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
            return t || e
        }

        function s(e) {
            var t;
            switch (this.encoding = o(e), this.encoding) {
                case "utf16le":
                    this.text = u, this.end = l, t = 4;
                    break;
                case "utf8":
                    this.fillLast = d, t = 4;
                    break;
                case "base64":
                    this.text = p, this.end = b, t = 3;
                    break;
                default:
                    return this.write = y, void(this.end = m)
            }
            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(t)
        }

        function c(e) {
            return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
        }

        function f(e, t, n) {
            var r = t.length - 1;
            if (r < n) return 0;
            var i = c(t[r]);
            return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --r < n || -2 === i ? 0 : (i = c(t[r])) >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --r < n || -2 === i ? 0 : (i = c(t[r])) >= 0 ? (i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i) : 0
        }

        function h(e, t, n) {
            if (128 != (192 & t[0])) return e.lastNeed = 0, "\ufffd";
            if (e.lastNeed > 1 && t.length > 1) {
                if (128 != (192 & t[1])) return e.lastNeed = 1, "\ufffd";
                if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "\ufffd"
            }
        }

        function d(e) {
            var t = this.lastTotal - this.lastNeed,
                n = h(this, e);
            return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
        }

        function u(e, t) {
            if ((e.length - t) % 2 == 0) {
                var n = e.toString("utf16le", t);
                if (n) {
                    var r = n.charCodeAt(n.length - 1);
                    if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
                }
                return n
            }
            return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
        }

        function l(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var n = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, n)
            }
            return t
        }

        function p(e, t) {
            var n = (e.length - t) % 3;
            return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
        }

        function b(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }

        function y(e) {
            return e.toString(this.encoding)
        }

        function m(e) {
            return e && e.length ? this.write(e) : ""
        }
        n.StringDecoder = s, s.prototype.write = function(e) {
            if (0 === e.length) return "";
            var t, n;
            if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e))) return "";
                n = this.lastNeed, this.lastNeed = 0
            } else n = 0;
            return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
        }, s.prototype.end = function(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "\ufffd" : t
        }, s.prototype.text = function(e, t) {
            var n = f(this, e, t);
            if (!this.lastNeed) return e.toString("utf8", t);
            this.lastTotal = n;
            var r = e.length - (n - this.lastNeed);
            return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r)
        }, s.prototype.fillLast = function(e) {
            if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
        }
    }, {
        "safe-buffer": 143
    }],
    138: [function(e, t, n) {
        t.exports = e("./readable").PassThrough
    }, {
        "./readable": 139
    }],
    139: [function(e, t, n) {
        (n = t.exports = e("./lib/_stream_readable.js")).Stream = n, n.Readable = n, n.Writable = e("./lib/_stream_writable.js"), n.Duplex = e("./lib/_stream_duplex.js"), n.Transform = e("./lib/_stream_transform.js"), n.PassThrough = e("./lib/_stream_passthrough.js")
    }, {
        "./lib/_stream_duplex.js": 128,
        "./lib/_stream_passthrough.js": 129,
        "./lib/_stream_readable.js": 130,
        "./lib/_stream_transform.js": 131,
        "./lib/_stream_writable.js": 132
    }],
    140: [function(e, t, n) {
        t.exports = e("./readable").Transform
    }, {
        "./readable": 139
    }],
    141: [function(e, t, n) {
        t.exports = e("./lib/_stream_writable.js")
    }, {
        "./lib/_stream_writable.js": 132
    }],
    142: [function(e, t, n) {
        "use strict";
        var r = e("buffer").Buffer,
            i = e("inherits"),
            a = e("hash-base"),
            o = new Array(16),
            s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
            c = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
            f = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
            h = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
            d = [0, 1518500249, 1859775393, 2400959708, 2840853838],
            u = [1352829926, 1548603684, 1836072691, 2053994217, 0];

        function l() {
            a.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
        }

        function p(e, t) {
            return e << t | e >>> 32 - t
        }

        function b(e, t, n, r, i, a, o, s) {
            return p(e + (t ^ n ^ r) + a + o | 0, s) + i | 0
        }

        function y(e, t, n, r, i, a, o, s) {
            return p(e + (t & n | ~t & r) + a + o | 0, s) + i | 0
        }

        function m(e, t, n, r, i, a, o, s) {
            return p(e + ((t | ~n) ^ r) + a + o | 0, s) + i | 0
        }

        function g(e, t, n, r, i, a, o, s) {
            return p(e + (t & r | n & ~r) + a + o | 0, s) + i | 0
        }

        function v(e, t, n, r, i, a, o, s) {
            return p(e + (t ^ (n | ~r)) + a + o | 0, s) + i | 0
        }
        i(l, a), l.prototype._update = function() {
            for (var e = o, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
            for (var n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, a = 0 | this._d, l = 0 | this._e, _ = 0 | this._a, C = 0 | this._b, w = 0 | this._c, B = 0 | this._d, S = 0 | this._e, M = 0; M < 80; M += 1) {
                var N, E;
                M < 16 ? (N = b(n, r, i, a, l, e[s[M]], d[0], f[M]), E = v(_, C, w, B, S, e[c[M]], u[0], h[M])) : M < 32 ? (N = y(n, r, i, a, l, e[s[M]], d[1], f[M]), E = g(_, C, w, B, S, e[c[M]], u[1], h[M])) : M < 48 ? (N = m(n, r, i, a, l, e[s[M]], d[2], f[M]), E = m(_, C, w, B, S, e[c[M]], u[2], h[M])) : M < 64 ? (N = g(n, r, i, a, l, e[s[M]], d[3], f[M]), E = y(_, C, w, B, S, e[c[M]], u[3], h[M])) : (N = v(n, r, i, a, l, e[s[M]], d[4], f[M]), E = b(_, C, w, B, S, e[c[M]], u[4], h[M])), n = l, l = a, a = p(i, 10), i = r, r = N, _ = S, S = B, B = p(w, 10), w = C, C = E
            }
            var k = this._b + i + B | 0;
            this._b = this._c + a + S | 0, this._c = this._d + l + _ | 0, this._d = this._e + n + C | 0, this._e = this._a + r + w | 0, this._a = k
        }, l.prototype._digest = function() {
            this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
            var e = r.alloc ? r.alloc(20) : new r(20);
            return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e
        }, t.exports = l
    }, {
        buffer: 47,
        "hash-base": 85,
        inherits: 101
    }],
    143: [function(e, t, n) {
        var r = e("buffer"),
            i = r.Buffer;

        function a(e, t) {
            for (var n in e) t[n] = e[n]
        }

        function o(e, t, n) {
            return i(e, t, n)
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = r : (a(r, n), n.Buffer = o), a(i, o), o.from = function(e, t, n) {
            if ("number" == typeof e) throw new TypeError("Argument must not be a number");
            return i(e, t, n)
        }, o.alloc = function(e, t, n) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            var r = i(e);
            return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r
        }, o.allocUnsafe = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return i(e)
        }, o.allocUnsafeSlow = function(e) {
            if ("number" != typeof e) throw new TypeError("Argument must be a number");
            return r.SlowBuffer(e)
        }
    }, {
        buffer: 47
    }],
    144: [function(e, t, n) {
        var r = e("safe-buffer").Buffer;

        function i(e, t) {
            this._block = r.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0
        }
        i.prototype.update = function(e, t) {
            "string" == typeof e && (t = t || "utf8", e = r.from(e, t));
            for (var n = this._block, i = this._blockSize, a = e.length, o = this._len, s = 0; s < a;) {
                for (var c = o % i, f = Math.min(a - s, i - c), h = 0; h < f; h++) n[c + h] = e[s + h];
                s += f, (o += f) % i == 0 && this._update(n)
            }
            return this._len += a, this
        }, i.prototype.digest = function(e) {
            var t = this._len % this._blockSize;
            this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
            var n = 8 * this._len;
            if (n <= 4294967295) this._block.writeUInt32BE(n, this._blockSize - 4);
            else {
                var r = (4294967295 & n) >>> 0,
                    i = (n - r) / 4294967296;
                this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(r, this._blockSize - 4)
            }
            this._update(this._block);
            var a = this._hash();
            return e ? a.toString(e) : a
        }, i.prototype._update = function() {
            throw new Error("_update must be implemented by subclass")
        }, t.exports = i
    }, {
        "safe-buffer": 143
    }],
    145: [function(e, t, n) {
        (n = t.exports = function(e) {
            e = e.toLowerCase();
            var t = n[e];
            if (!t) throw new Error(e + " is not supported (we accept pull requests)");
            return new t
        }).sha = e("./sha"), n.sha1 = e("./sha1"), n.sha224 = e("./sha224"), n.sha256 = e("./sha256"), n.sha384 = e("./sha384"), n.sha512 = e("./sha512")
    }, {
        "./sha": 146,
        "./sha1": 147,
        "./sha224": 148,
        "./sha256": 149,
        "./sha384": 150,
        "./sha512": 151
    }],
    146: [function(e, t, n) {
        var r = e("inherits"),
            i = e("./hash"),
            a = e("safe-buffer").Buffer,
            o = [1518500249, 1859775393, -1894007588, -899497514],
            s = new Array(80);

        function c() {
            this.init(), this._w = s, i.call(this, 64, 56)
        }

        function f(e) {
            return e << 5 | e >>> 27
        }

        function h(e) {
            return e << 30 | e >>> 2
        }

        function d(e, t, n, r) {
            return 0 === e ? t & n | ~t & r : 2 === e ? t & n | t & r | n & r : t ^ n ^ r
        }
        r(c, i), c.prototype.init = function() {
            return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
        }, c.prototype._update = function(e) {
            for (var t = this._w, n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, a = 0 | this._d, s = 0 | this._e, c = 0; c < 16; ++c) t[c] = e.readInt32BE(4 * c);
            for (; c < 80; ++c) t[c] = t[c - 3] ^ t[c - 8] ^ t[c - 14] ^ t[c - 16];
            for (var u = 0; u < 80; ++u) {
                var l = ~~(u / 20),
                    p = f(n) + d(l, r, i, a) + s + t[u] + o[l] | 0;
                s = a, a = i, i = h(r), r = n, n = p
            }
            this._a = n + this._a | 0, this._b = r + this._b | 0, this._c = i + this._c | 0, this._d = a + this._d | 0, this._e = s + this._e | 0
        }, c.prototype._hash = function() {
            var e = a.allocUnsafe(20);
            return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
        }, t.exports = c
    }, {
        "./hash": 144,
        inherits: 101,
        "safe-buffer": 143
    }],
    147: [function(e, t, n) {
        var r = e("inherits"),
            i = e("./hash"),
            a = e("safe-buffer").Buffer,
            o = [1518500249, 1859775393, -1894007588, -899497514],
            s = new Array(80);

        function c() {
            this.init(), this._w = s, i.call(this, 64, 56)
        }

        function f(e) {
            return e << 1 | e >>> 31
        }

        function h(e) {
            return e << 5 | e >>> 27
        }

        function d(e) {
            return e << 30 | e >>> 2
        }

        function u(e, t, n, r) {
            return 0 === e ? t & n | ~t & r : 2 === e ? t & n | t & r | n & r : t ^ n ^ r
        }
        r(c, i), c.prototype.init = function() {
            return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
        }, c.prototype._update = function(e) {
            for (var t = this._w, n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, a = 0 | this._d, s = 0 | this._e, c = 0; c < 16; ++c) t[c] = e.readInt32BE(4 * c);
            for (; c < 80; ++c) t[c] = f(t[c - 3] ^ t[c - 8] ^ t[c - 14] ^ t[c - 16]);
            for (var l = 0; l < 80; ++l) {
                var p = ~~(l / 20),
                    b = h(n) + u(p, r, i, a) + s + t[l] + o[p] | 0;
                s = a, a = i, i = d(r), r = n, n = b
            }
            this._a = n + this._a | 0, this._b = r + this._b | 0, this._c = i + this._c | 0, this._d = a + this._d | 0, this._e = s + this._e | 0
        }, c.prototype._hash = function() {
            var e = a.allocUnsafe(20);
            return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
        }, t.exports = c
    }, {
        "./hash": 144,
        inherits: 101,
        "safe-buffer": 143
    }],
    148: [function(e, t, n) {
        var r = e("inherits"),
            i = e("./sha256"),
            a = e("./hash"),
            o = e("safe-buffer").Buffer,
            s = new Array(64);

        function c() {
            this.init(), this._w = s, a.call(this, 64, 56)
        }
        r(c, i), c.prototype.init = function() {
            return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
        }, c.prototype._hash = function() {
            var e = o.allocUnsafe(28);
            return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
        }, t.exports = c
    }, {
        "./hash": 144,
        "./sha256": 149,
        inherits: 101,
        "safe-buffer": 143
    }],
    149: [function(e, t, n) {
        var r = e("inherits"),
            i = e("./hash"),
            a = e("safe-buffer").Buffer,
            o = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            s = new Array(64);

        function c() {
            this.init(), this._w = s, i.call(this, 64, 56)
        }

        function f(e, t, n) {
            return n ^ e & (t ^ n)
        }

        function h(e, t, n) {
            return e & t | n & (e | t)
        }

        function d(e) {
            return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)
        }

        function u(e) {
            return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)
        }

        function l(e) {
            return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3
        }

        function p(e) {
            return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10
        }
        r(c, i), c.prototype.init = function() {
            return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
        }, c.prototype._update = function(e) {
            for (var t = this._w, n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, a = 0 | this._d, s = 0 | this._e, c = 0 | this._f, b = 0 | this._g, y = 0 | this._h, m = 0; m < 16; ++m) t[m] = e.readInt32BE(4 * m);
            for (; m < 64; ++m) t[m] = p(t[m - 2]) + t[m - 7] + l(t[m - 15]) + t[m - 16] | 0;
            for (var g = 0; g < 64; ++g) {
                var v = y + u(s) + f(s, c, b) + o[g] + t[g] | 0,
                    _ = d(n) + h(n, r, i) | 0;
                y = b, b = c, c = s, s = a + v | 0, a = i, i = r, r = n, n = v + _ | 0
            }
            this._a = n + this._a | 0, this._b = r + this._b | 0, this._c = i + this._c | 0, this._d = a + this._d | 0, this._e = s + this._e | 0, this._f = c + this._f | 0, this._g = b + this._g | 0, this._h = y + this._h | 0
        }, c.prototype._hash = function() {
            var e = a.allocUnsafe(32);
            return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
        }, t.exports = c
    }, {
        "./hash": 144,
        inherits: 101,
        "safe-buffer": 143
    }],
    150: [function(e, t, n) {
        var r = e("inherits"),
            i = e("./sha512"),
            a = e("./hash"),
            o = e("safe-buffer").Buffer,
            s = new Array(160);

        function c() {
            this.init(), this._w = s, a.call(this, 128, 112)
        }
        r(c, i), c.prototype.init = function() {
            return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
        }, c.prototype._hash = function() {
            var e = o.allocUnsafe(48);

            function t(t, n, r) {
                e.writeInt32BE(t, r), e.writeInt32BE(n, r + 4)
            }
            return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e
        }, t.exports = c
    }, {
        "./hash": 144,
        "./sha512": 151,
        inherits: 101,
        "safe-buffer": 143
    }],
    151: [function(e, t, n) {
        var r = e("inherits"),
            i = e("./hash"),
            a = e("safe-buffer").Buffer,
            o = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
            s = new Array(160);

        function c() {
            this.init(), this._w = s, i.call(this, 128, 112)
        }

        function f(e, t, n) {
            return n ^ e & (t ^ n)
        }

        function h(e, t, n) {
            return e & t | n & (e | t)
        }

        function d(e, t) {
            return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
        }

        function u(e, t) {
            return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
        }

        function l(e, t) {
            return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7
        }

        function p(e, t) {
            return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25)
        }

        function b(e, t) {
            return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6
        }

        function y(e, t) {
            return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26)
        }

        function m(e, t) {
            return e >>> 0 < t >>> 0 ? 1 : 0
        }
        r(c, i), c.prototype.init = function() {
            return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
        }, c.prototype._update = function(e) {
            for (var t = this._w, n = 0 | this._ah, r = 0 | this._bh, i = 0 | this._ch, a = 0 | this._dh, s = 0 | this._eh, c = 0 | this._fh, g = 0 | this._gh, v = 0 | this._hh, _ = 0 | this._al, C = 0 | this._bl, w = 0 | this._cl, B = 0 | this._dl, S = 0 | this._el, M = 0 | this._fl, N = 0 | this._gl, E = 0 | this._hl, k = 0; k < 32; k += 2) t[k] = e.readInt32BE(4 * k), t[k + 1] = e.readInt32BE(4 * k + 4);
            for (; k < 160; k += 2) {
                var A = t[k - 30],
                    x = t[k - 30 + 1],
                    D = l(A, x),
                    I = p(x, A),
                    L = b(A = t[k - 4], x = t[k - 4 + 1]),
                    P = y(x, A),
                    T = t[k - 14],
                    R = t[k - 14 + 1],
                    j = t[k - 32],
                    O = t[k - 32 + 1],
                    U = I + R | 0,
                    z = D + T + m(U, I) | 0;
                z = (z = z + L + m(U = U + P | 0, P) | 0) + j + m(U = U + O | 0, O) | 0, t[k] = z, t[k + 1] = U
            }
            for (var q = 0; q < 160; q += 2) {
                z = t[q], U = t[q + 1];
                var G = h(n, r, i),
                    K = h(_, C, w),
                    F = d(n, _),
                    W = d(_, n),
                    H = u(s, S),
                    V = u(S, s),
                    Y = o[q],
                    X = o[q + 1],
                    Z = f(s, c, g),
                    J = f(S, M, N),
                    Q = E + V | 0,
                    $ = v + H + m(Q, E) | 0;
                $ = ($ = ($ = $ + Z + m(Q = Q + J | 0, J) | 0) + Y + m(Q = Q + X | 0, X) | 0) + z + m(Q = Q + U | 0, U) | 0;
                var ee = W + K | 0,
                    te = F + G + m(ee, W) | 0;
                v = g, E = N, g = c, N = M, c = s, M = S, s = a + $ + m(S = B + Q | 0, B) | 0, a = i, B = w, i = r, w = C, r = n, C = _, n = $ + te + m(_ = Q + ee | 0, Q) | 0
            }
            this._al = this._al + _ | 0, this._bl = this._bl + C | 0, this._cl = this._cl + w | 0, this._dl = this._dl + B | 0, this._el = this._el + S | 0, this._fl = this._fl + M | 0, this._gl = this._gl + N | 0, this._hl = this._hl + E | 0, this._ah = this._ah + n + m(this._al, _) | 0, this._bh = this._bh + r + m(this._bl, C) | 0, this._ch = this._ch + i + m(this._cl, w) | 0, this._dh = this._dh + a + m(this._dl, B) | 0, this._eh = this._eh + s + m(this._el, S) | 0, this._fh = this._fh + c + m(this._fl, M) | 0, this._gh = this._gh + g + m(this._gl, N) | 0, this._hh = this._hh + v + m(this._hl, E) | 0
        }, c.prototype._hash = function() {
            var e = a.allocUnsafe(64);

            function t(t, n, r) {
                e.writeInt32BE(t, r), e.writeInt32BE(n, r + 4)
            }
            return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e
        }, t.exports = c
    }, {
        "./hash": 144,
        inherits: 101,
        "safe-buffer": 143
    }],
    152: [function(e, t, n) {
        t.exports = i;
        var r = e("events").EventEmitter;

        function i() {
            r.call(this)
        }
        e("inherits")(i, r), i.Readable = e("readable-stream/readable.js"), i.Writable = e("readable-stream/writable.js"), i.Duplex = e("readable-stream/duplex.js"), i.Transform = e("readable-stream/transform.js"), i.PassThrough = e("readable-stream/passthrough.js"), i.Stream = i, i.prototype.pipe = function(e, t) {
            var n = this;

            function i(t) {
                e.writable && !1 === e.write(t) && n.pause && n.pause()
            }

            function a() {
                n.readable && n.resume && n.resume()
            }
            n.on("data", i), e.on("drain", a), e._isStdio || t && !1 === t.end || (n.on("end", s), n.on("close", c));
            var o = !1;

            function s() {
                o || (o = !0, e.end())
            }

            function c() {
                o || (o = !0, "function" == typeof e.destroy && e.destroy())
            }

            function f(e) {
                if (h(), 0 === r.listenerCount(this, "error")) throw e
            }

            function h() {
                n.removeListener("data", i), e.removeListener("drain", a), n.removeListener("end", s), n.removeListener("close", c), n.removeListener("error", f), e.removeListener("error", f), n.removeListener("end", h), n.removeListener("close", h), e.removeListener("close", h)
            }
            return n.on("error", f), e.on("error", f), n.on("end", h), n.on("close", h), e.on("close", h), e.emit("pipe", n), e
        }
    }, {
        events: 83,
        inherits: 101,
        "readable-stream/duplex.js": 127,
        "readable-stream/passthrough.js": 138,
        "readable-stream/readable.js": 139,
        "readable-stream/transform.js": 140,
        "readable-stream/writable.js": 141
    }],
    153: [function(e, t, n) {
        var r = e("buffer").Buffer,
            i = r.isEncoding || function(e) {
                switch (e && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            };

        function a(e) {
            if (e && !i(e)) throw new Error("Unknown encoding: " + e)
        }
        var o = n.StringDecoder = function(e) {
            switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""), a(e), this.encoding) {
                case "utf8":
                    this.surrogateSize = 3;
                    break;
                case "ucs2":
                case "utf16le":
                    this.surrogateSize = 2, this.detectIncompleteChar = c;
                    break;
                case "base64":
                    this.surrogateSize = 3, this.detectIncompleteChar = f;
                    break;
                default:
                    return void(this.write = s)
            }
            this.charBuffer = new r(6), this.charReceived = 0, this.charLength = 0
        };

        function s(e) {
            return e.toString(this.encoding)
        }

        function c(e) {
            this.charReceived = e.length % 2, this.charLength = this.charReceived ? 2 : 0
        }

        function f(e) {
            this.charReceived = e.length % 3, this.charLength = this.charReceived ? 3 : 0
        }
        o.prototype.write = function(e) {
            for (var t = ""; this.charLength;) {
                var n = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
                if (e.copy(this.charBuffer, this.charReceived, 0, n), this.charReceived += n, this.charReceived < this.charLength) return "";
                if (e = e.slice(n, e.length), !((i = (t = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(t.length - 1)) >= 55296 && i <= 56319)) {
                    if (this.charReceived = this.charLength = 0, 0 === e.length) return t;
                    break
                }
                this.charLength += this.surrogateSize, t = ""
            }
            this.detectIncompleteChar(e);
            var r = e.length;
            this.charLength && (e.copy(this.charBuffer, 0, e.length - this.charReceived, r), r -= this.charReceived);
            var i;
            r = (t += e.toString(this.encoding, 0, r)).length - 1;
            if ((i = t.charCodeAt(r)) >= 55296 && i <= 56319) {
                var a = this.surrogateSize;
                return this.charLength += a, this.charReceived += a, this.charBuffer.copy(this.charBuffer, a, 0, a), e.copy(this.charBuffer, 0, 0, a), t.substring(0, r)
            }
            return t
        }, o.prototype.detectIncompleteChar = function(e) {
            for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
                var n = e[e.length - t];
                if (1 == t && n >> 5 == 6) {
                    this.charLength = 2;
                    break
                }
                if (t <= 2 && n >> 4 == 14) {
                    this.charLength = 3;
                    break
                }
                if (t <= 3 && n >> 3 == 30) {
                    this.charLength = 4;
                    break
                }
            }
            this.charReceived = t
        }, o.prototype.end = function(e) {
            var t = "";
            if (e && e.length && (t = this.write(e)), this.charReceived) {
                var n = this.charReceived,
                    r = this.charBuffer,
                    i = this.encoding;
                t += r.slice(0, n).toString(i)
            }
            return t
        }
    }, {
        buffer: 47
    }],
    154: [function(e, t, n) {
        (function(e) {
            function n(t) {
                try {
                    if (!e.localStorage) return !1
                } catch (e) {
                    return !1
                }
                var n = e.localStorage[t];
                return null != n && "true" === String(n).toLowerCase()
            }
            t.exports = function(e, t) {
                if (n("noDeprecation")) return e;
                var r = !1;
                return function() {
                    if (!r) {
                        if (n("throwDeprecation")) throw new Error(t);
                        n("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0
                    }
                    return e.apply(this, arguments)
                }
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    155: [function(require, module, exports) {
        var indexOf = require("indexof"),
            Object_keys = function(e) {
                if (Object.keys) return Object.keys(e);
                var t = [];
                for (var n in e) t.push(n);
                return t
            },
            forEach = function(e, t) {
                if (e.forEach) return e.forEach(t);
                for (var n = 0; n < e.length; n++) t(e[n], n, e)
            },
            defineProp = function() {
                try {
                    return Object.defineProperty({}, "_", {}),
                        function(e, t, n) {
                            Object.defineProperty(e, t, {
                                writable: !0,
                                enumerable: !1,
                                configurable: !0,
                                value: n
                            })
                        }
                } catch (e) {
                    return function(e, t, n) {
                        e[t] = n
                    }
                }
            }(),
            globals = ["Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape"];

        function Context() {}
        Context.prototype = {};
        var Script = exports.Script = function(e) {
            if (!(this instanceof Script)) return new Script(e);
            this.code = e
        };
        Script.prototype.runInContext = function(e) {
            if (!(e instanceof Context)) throw new TypeError("needs a 'context' argument.");
            var t = document.createElement("iframe");
            t.style || (t.style = {}), t.style.display = "none", document.body.appendChild(t);
            var n = t.contentWindow,
                r = n.eval,
                i = n.execScript;
            !r && i && (i.call(n, "null"), r = n.eval), forEach(Object_keys(e), function(t) {
                n[t] = e[t]
            }), forEach(globals, function(t) {
                e[t] && (n[t] = e[t])
            });
            var a = Object_keys(n),
                o = r.call(n, this.code);
            return forEach(Object_keys(n), function(t) {
                (t in e || -1 === indexOf(a, t)) && (e[t] = n[t])
            }), forEach(globals, function(t) {
                t in e || defineProp(e, t, n[t])
            }), document.body.removeChild(t), o
        }, Script.prototype.runInThisContext = function() {
            return eval(this.code)
        }, Script.prototype.runInNewContext = function(e) {
            var t = Script.createContext(e),
                n = this.runInContext(t);
            return forEach(Object_keys(t), function(n) {
                e[n] = t[n]
            }), n
        }, forEach(Object_keys(Script.prototype), function(e) {
            exports[e] = Script[e] = function(t) {
                var n = Script(t);
                return n[e].apply(n, [].slice.call(arguments, 1))
            }
        }), exports.createScript = function(e) {
            return exports.Script(e)
        }, exports.createContext = Script.createContext = function(e) {
            var t = new Context;
            return "object" == typeof e && forEach(Object_keys(e), function(n) {
                t[n] = e[n]
            }), t
        }
    }, {
        indexof: 100
    }],
    Game: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c590afVURZPcKwJhcGvNgpq", "Game"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("./CycloneDef"),
            i = e("./CycloneData"),
            a = e("./CycloneWx "),
            o = e("./CYZGameLLL"),
            s = e("./Animal"),
            c = cc._decorator,
            f = c.ccclass,
            h = c.property,
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.chapterConfigCsv = null, t.animalsConfigCsv = null, t.worldRankConfigCsv = null, t.animal = null, t.animalDestoryEffect = null, t.isGameBegin = !1, t.isGameWin = !1, t.gameTimer = 0, t.animalsLocationArr = new Array, t.bySelectanimalsArr = new Array, t.totalanimalsNum = 0, t.alreadyRelifeTimes = 0, t.propAddTimeUseTimes = 0, t.pkPlayerTime = 0, t.pkPlayerTimer = 0, t.isOpenSkill1Tips = !1, t.isOpenSkill2Tips = !1, t.isAlreadyVedio = !1, t.isHaveVedioAD = !0, t.isSkill3_Enermy = !1, t.skill3LastTime_Enermy = 5, t.isEnermyUseingSkill3 = !1, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    i.CycloneData.singleton.setChapterConfigInfo(r.CycloneDef.singleton.CsvToArr(this.chapterConfigCsv)), i.CycloneData.singleton.setanimalsConfigInfo(r.CycloneDef.singleton.CsvToArr(this.animalsConfigCsv)), i.CycloneData.singleton.setWorldRankConfigInfo(r.CycloneDef.singleton.CsvToArr(this.worldRankConfigCsv)), this.creatAllanimals(), this.isHaveAnimalsCanDestory() || this.resetAnimalsPosition(0)
                }, t.prototype.start = function() {
                    this.isHaveVedioAD || (this.isAlreadyVedio = !0, this.alreadyRelifeTimes = 1), r.CycloneDef.singleton.isOpenExamineMode() || Math.random() < .3 && i.CycloneData.singleton.getChapterModeDoneNum(), this.node.getChildByName("BG").active = !0, this.node.getChildByName("animalsBG").active = !0, this.node.getChildByName("modeProper").active = !0, r.CycloneDef.singleton.nodeAdaptHeight(this.node.getChildByName("modeProper"), .5 * cc.winSize.height, .5 * cc.winSize.height - 60), r.CycloneDef.singleton.setBtnByClickInterval(this.node.getChildByName("animalsBG").getChildByName("skillGroup").getChildByName("skill1"), .5), r.CycloneDef.singleton.setBtnByClickInterval(this.node.getChildByName("animalsBG").getChildByName("skillGroup").getChildByName("skill2"), 1), r.CycloneDef.singleton.setBtnByClickInterval(this.node.getChildByName("animalsBG").getChildByName("skillGroup").getChildByName("skill3"), 1), i.CycloneData.singleton.getPlayMode() == i.PlayMode.CHAPTER ? (this.node.getChildByName("modeProper").getChildByName("timeBar").active = !0, this.node.getChildByName("animalsBG").getChildByName("msg").getChildByName("Label").getComponent(cc.Label).string = "Cấp độ hiện tại:" + i.CycloneData.singleton.getOnChapterNumber()) : i.CycloneData.singleton.getPlayMode() == i.PlayMode.RANKING ? (this.node.getChildByName("modeProper").getChildByName("timeBar").active = !1, this.node.getChildByName("modeProper").getChildByName("time").active = !0, this.node.getChildByName("animalsBG").getChildByName("msg").getChildByName("Label").getComponent(cc.Label).string = "Hạng hiện tại:" + i.CycloneData.singleton.getRankingModeBestNum()) : i.CycloneData.singleton.getPlayMode() == i.PlayMode.PK && (this.pkPlayerTime = 36 + 60 * Math.random(), this.node.getChildByName("modeProper").getChildByName("timeBar").active = !1, this.node.getChildByName("modeProper").getChildByName("pk").active = !0, this.node.getChildByName("animalsBG").getChildByName("msg").getChildByName("Label").getComponent(cc.Label).string = "Tỷ lệ hiện tại:" + (i.CycloneData.singleton.getPKModeWinTimes() / i.CycloneData.singleton.getPKModeDoneTimes() * 100).toFixed(2) + "%"), this.createStartEffect(), this.initTouchEvent(), (i.CycloneData.singleton.getChapterModeDoneNum() <= 3 || i.CycloneData.singleton.getOnChapterNumber() <= 3) && this.help_BCE(), this.node.getChildByName("enermy_skill3").scale = 0, this.node.getChildByName("user_skill3").scale = 0
                }, t.prototype.BGM = function() {
                    r.CycloneDef.singleton.getSoundIsOpen() && (r.CycloneDef.singleton.stopSound(), r.CycloneDef.singleton.playSound("resources/audio/cyclone_lll_BGM_001.mp3", !0, .7))
                }, t.prototype.createStartEffect = function() {
                    var e = this;
                    this.node.getChildByName("gameStartEffect").active = !0, this.node.getChildByName("gameStartEffect").getComponent(cc.Animation).play("startEffect"), this.node.getChildByName("gameStartEffect").getComponent(cc.Animation).on("finished", function() {
                        e.node.getChildByName("gameStartEffect").destroy(), 0 == e.node.getChildByName("helpLayer").active ? e.isGameBegin = !0 : e.isGameBegin = !1
                    })
                }, t.prototype.createOneAnimal = function(e, t, n, i, a) {
                    var o = cc.instantiate(this.animal);
                    o.getComponent(s.default).xLine = i.x, o.getComponent(s.default).yLine = i.y, o.getComponent(s.default).id = e, o.getComponent(s.default).animalType = t, r.CycloneDef.singleton.nodeReviseSpriteFrame(o.getChildByName("img"), "res/animal/animal_" + t + "_0"), this.node.getChildByName("animalsBG").addChild(o), o.setScale(a), o.setPosition(cc.v2(n)), o.name = "animal", o.getComponent(s.default).game = this, o.getComponent("Animal").game = this
                }, t.prototype.creatAllanimals = function() {
                    for (var e = i.CycloneData.singleton.getChapterConfigInfo()[i.CycloneData.singleton.getOnChapterNumber()][2], t = i.CycloneData.singleton.getChapterConfigInfo()[i.CycloneData.singleton.getOnChapterNumber()][3], n = i.CycloneData.singleton.getanimalsConfigInfo(), r = o.CYZGameLLL.singleton.initAllAnimalsTypeArr(e, t), a = 100, s = .99, c = 1, f = 359, h = 0; h < n.length; h++) n[h][0] == e && n[h][1] == t && (a = parseInt(n[h][4]), s = parseFloat(n[h][5]), c = parseInt(n[h][2]), f = parseInt(n[h][3]));
                    for (var d = 0, u = 0; u < e; u++)
                        for (var l = 0; l < t; l++) this.createOneAnimal(d, r[d], cc.v2(c + a * u, f - a * l), cc.v2(l, u), s), this.animalsLocationArr[d] = {
                            id: d,
                            rowLocationNum: cc.v2(l, u),
                            position: cc.v2(c + a * u, f - a * l)
                        }, d++;
                    this.totalanimalsNum = this.animalsLocationArr.length
                }, t.prototype.isHaveAnimalsCanDestory = function() {
                    for (var e = this.node.getChildByName("animalsBG").children, t = new Array, n = 0; n < e.length; n++) "animal" == e[n].name && t.push(e[n]);
                    var r = new Array;
                    for (n = 0; n < t.length; n++) {
                        r.length = 0, r.push(t[n]);
                        for (var i = 0; i < t.length - n - 1; i++)
                            if (r.push(t[n + i + 1]), 2 == r.length) {
                                if (o.CYZGameLLL.singleton.isRuleBySelectAnimals(this.animalsLocationArr, r, !1)) return !0;
                                r.length = 1
                            }
                    }
                    return !1
                }, t.prototype.resetAnimalsPosition = function(e) {
                    var t = this;
                    if (i.CycloneData.singleton.getGoldNumByLocal() >= e) {
                        i.CycloneData.singleton.addGoldNumByLocal(-e);
                        for (var n = this.node.getChildByName("animalsBG").children, o = new Array, c = 0, f = 0; f < n.length; f++) "animal" == n[f].name && (o[c] = n[f], c++);
                        var h = o.length,
                            d = new Array;
                        for (f = 0; f < h; f++) d[f] = f;
                        if (d = r.CycloneDef.singleton.arrToRandomOrder(d), 4 == h) {
                            var u = o[0].getComponent(s.default).xLine,
                                l = o[0].getComponent(s.default).yLine,
                                p = o[1].getComponent(s.default).xLine,
                                b = o[1].getComponent(s.default).yLine;
                            o[0].getComponent(s.default).xLine = p, o[0].getComponent(s.default).yLine = b, o[1].getComponent(s.default).xLine = u, o[1].getComponent(s.default).yLine = l;
                            var y = o[0].getComponent(s.default).id,
                                m = o[1].getComponent(s.default).id;
                            o[0].getComponent(s.default).id = m, o[1].getComponent(s.default).id = y;
                            var g = o[0].position,
                                v = o[1].position;
                            o[0].runAction(cc.moveTo(.2, cc.v2(v))), o[1].runAction(cc.moveTo(.2, cc.v2(g)));
                            var _ = this.animalsLocationArr[0],
                                C = this.animalsLocationArr[1];
                            this.animalsLocationArr[1] = _, this.animalsLocationArr[0] = C
                        } else
                            for (f = 0; f < h; f++) {
                                u = o[d[f]].getComponent(s.default).xLine, l = o[d[f]].getComponent(s.default).yLine, p = o[d[f + 1]].getComponent(s.default).xLine, b = o[d[f + 1]].getComponent(s.default).yLine;
                                o[d[f]].getComponent(s.default).xLine = p, o[d[f]].getComponent(s.default).yLine = b, o[d[f + 1]].getComponent(s.default).xLine = u, o[d[f + 1]].getComponent(s.default).yLine = l;
                                y = o[d[f]].getComponent(s.default).id, m = o[d[f + 1]].getComponent(s.default).id;
                                o[d[f]].getComponent(s.default).id = m, o[d[f + 1]].getComponent(s.default).id = y;
                                g = o[d[f]].position, v = o[d[f + 1]].position;
                                o[d[f]].runAction(cc.moveTo(.2, cc.v2(v))), o[d[f + 1]].runAction(cc.moveTo(.2, cc.v2(g)));
                                _ = this.animalsLocationArr[d[f]], C = this.animalsLocationArr[d[f + 1]];
                                this.animalsLocationArr[d[f + 1]] = _, this.animalsLocationArr[d[f]] = C, f++
                            }
                        setTimeout(function() {
                            t.isHaveAnimalsCanDestory() || t.resetAnimalsPosition(0)
                        }, 1e3)
                    } else a.CycloneWx.singleton.showToast("\u4eb2\uff0c\u91d1\u5e01\u4e0d\u591f\u7528\u4e86\u5462~", 2e3)
                }, t.prototype.initTouchEvent = function() {
                    this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                        for (var t = this.node.getChildByName("animalsBG").children, n = 0; n < t.length; n++) "animal" == t[n].name && t[n].getBoundingBoxToWorld().contains(e.getLocation()) && (r.CycloneDef.singleton.playSoundEffect("resources/audio/commonByTouchEffect_22.mp3"), 0 == t[n].getComponent(s.default).bySelect ? (t[n].getComponent(s.default).bySelect = 1, r.CycloneDef.singleton.nodeReviseSpriteFrame(t[n].getChildByName("img"), "res/animal/animal_" + t[n].getComponent(s.default).animalType + "_1"), t[n].getChildByName("img").getComponent(cc.Animation).play("animal_select"), t[n].getChildByName("img").getComponent(cc.Animation).on("finished", function() {}), this.bySelectanimalsArr.push(t[n]), 2 == this.bySelectanimalsArr.length && (o.CYZGameLLL.singleton.isRuleBySelectAnimals(this.animalsLocationArr, this.bySelectanimalsArr, !0) ? this.animalsRemove(this.bySelectanimalsArr, .08) : (r.CycloneDef.singleton.nodeReviseSpriteFrame(this.bySelectanimalsArr[0].getChildByName("img"), "res/animal/animal_" + this.bySelectanimalsArr[0].getComponent(s.default).animalType + "_0"), this.bySelectanimalsArr[0].getComponent(s.default).bySelect = 0, this.bySelectanimalsArr.splice(0, 1)))) : (t[n].getComponent(s.default).bySelect = 0, r.CycloneDef.singleton.nodeReviseSpriteFrame(t[n].getChildByName("img"), "res/animal/animal_" + t[n].getComponent(s.default).animalType + "_0"), this.bySelectanimalsArr.length = 0))
                    }, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {}, this), this.node.on(cc.Node.EventType.TOUCH_END, function(e) {}, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {}, this)
                }, t.prototype.animalsRemove = function(e, t) {
                    var n = this;
                    setTimeout(function() {
                        n.node.getChildByName("animalsBG").getChildByName("graphics").getComponent(cc.Graphics).clear();
                        for (var t = function(t) {
                                n.animalsLocationArr = n.animalsLocationArr.filter(function(n) {
                                    return n.id != e[t].getComponent(s.default).id
                                });
                                var r = cc.instantiate(n.animalDestoryEffect);
                                r.setPosition(cc.v2(e[t].x, e[t].y)), n.node.getChildByName("animalsBG").addChild(r), e[t].destroy()
                            }, r = 0; r < 2; r++) t(r);
                        e.length = 0, 0 == n.animalsLocationArr.length ? n.challengeFinish(!0) : setTimeout(function() {
                            n.isHaveAnimalsCanDestory() || n.resetAnimalsPosition(0)
                        }, 100), i.CycloneData.singleton.getPlayMode() == i.PlayMode.PK && (n.node.getChildByName("modeProper").getChildByName("pk").getChildByName("player1Num").getChildByName("num").getComponent(cc.Label).string = ((n.totalanimalsNum - n.animalsLocationArr.length) / n.totalanimalsNum * 100).toFixed(0) + "%")
                    }, 60), r.CycloneDef.singleton.playSoundEffect("resources/audio/cyclone_lll_effect_22.mp3")
                }, t.prototype.challengeFinish = function(e) {
                    this.isGameWin = e, this.node.getChildByName("endingLayer").active = !0;
                    var t = Math.floor(100 * this.gameTimer) / 100;
                    this.isGameBegin = !1;
                    var n = 0;
                    if (e) switch (i.CycloneData.singleton.getPlayMode()) {
                        case i.PlayMode.RANKING:
                            var r = 888,
                                o = i.CycloneData.singleton.getWorldRankConfigInfo(),
                                s = this.node.getChildByName("endingLayer").getChildByName("rankingModeWin");
                            t >= 32 && this.isHaveVedioAD && (s.getChildByName("shareBtn").getChildByName("Label").getComponent(cc.Label).string = "X2 xu vàng", s.getChildByName("shareBtn").getChildByName("Label2").active = !0), s.getComponent(cc.Animation).play("RANKINGModeWin"), s.getChildByName("infoBG").getChildByName("message2").getChildByName("time").getComponent(cc.Label).string = t.toString() + " s", s.getChildByName("infoBG").getChildByName("message1").getChildByName("time").getComponent(cc.Label).string = i.CycloneData.singleton.getRankingModeMinTimeNum().toString() + " s", s.getChildByName("gold").getChildByName("num").getComponent(cc.Label).string = "+10", s.setScale(.1), s.active = !0;
                            for (var c = 0; c < o.length - 1; c++)
                                if (t < parseInt(o[c][0])) {
                                    r = o[c][1] - (o[c][1] - o[c - 1][1]) * (1 - (this.gameTimer - Math.floor(this.gameTimer)));
                                    break
                                } i.CycloneData.singleton.addGoldNumByLocal(10), i.CycloneData.singleton.setRankingModeMinTimeNum(t), i.CycloneData.singleton.setRankingModeBestNum(r), s.getChildByName("infoBG").getChildByName("message3").getChildByName("num").getComponent(cc.Label).string = Math.floor(r).toString();
                            var f = Math.random();
                            f > .7 && a.CycloneWx.singleton.showInterstitial();
                            break;
                        case i.PlayMode.CHAPTER:
                            n = 0 == i.CycloneData.singleton.getChapterModeStarByChapterNum(i.CycloneData.singleton.getOnChapterNumber()) ? 100 : 10, i.CycloneData.singleton.addGoldNumByLocal(n);
                            var h = this.node.getChildByName("endingLayer").getChildByName("chapterModeWin");
                            h.getComponent(cc.Animation).play("CHAPTERModeWin"), h.getChildByName("gold").getChildByName("num").getComponent(cc.Label).string = "+" + n.toString(), h.getChildByName("infoBG").getChildByName("message1").getChildByName("time").getComponent(cc.Label).string = t.toString() + " s", h.setScale(.1), h.active = !0;
                            var d = 0;
                            if (this.gameTimer <= i.CycloneData.singleton.getChapterConfigInfo()[i.CycloneData.singleton.getOnChapterNumber()][5] ? (h.getChildByName("infoBG").getChildByName("message3").getChildByName("title").getComponent(cc.Label).string = "Tuyệt vời", d = 3) : this.gameTimer > i.CycloneData.singleton.getChapterConfigInfo()[i.CycloneData.singleton.getOnChapterNumber()][5] && this.gameTimer < i.CycloneData.singleton.getChapterConfigInfo()[i.CycloneData.singleton.getOnChapterNumber()][6] ? (h.getChildByName("xing3").getChildByName("xingTop").active = !1, h.getChildByName("infoBG").getChildByName("message3").getChildByName("title").getComponent(cc.Label).string = "Tuyệt vời", d = 2) : (h.getChildByName("xing3").getChildByName("xingTop").active = !1, h.getChildByName("xing2").getChildByName("xingTop").active = !1, h.getChildByName("infoBG").getChildByName("message3").getChildByName("title").getComponent(cc.Label).string = "Không hề dễ dàng", d = 1), i.CycloneData.singleton.setChapterModeStarByChapterNum(i.CycloneData.singleton.getOnChapterNumber(), d), i.CycloneData.singleton.getOnChapterNumber() >= i.CycloneData.singleton.getChapterModeDoneNum() && i.CycloneData.singleton.setChapterModeDoneNum(i.CycloneData.singleton.getOnChapterNumber()), i.CycloneData.singleton.getOnChapterNumber() >= 5) {
                                var u = Math.random();
                                u > .7 && a.CycloneWx.singleton.showInterstitial()
                            }
                            break;
                        case i.PlayMode.PK:
                            if (!this.isHaveVedioAD) this.node.getChildByName("endingLayer").getChildByName("pkModeWin").getChildByName("shareBtn").getChildByName("Label2").getComponent(cc.Label).string = "Đã nhận thưởng!";
                            this.node.getChildByName("endingLayer").getChildByName("blackBG").active = !0, this.node.getChildByName("endingLayer").getChildByName("pkModeWin").active = !0, i.CycloneData.singleton.addGoldNumByLocal(20), i.CycloneData.singleton.addPKModeDoneTimes(1), i.CycloneData.singleton.addPKModeWinTimes(1), Math.random() > .35 && a.CycloneWx.singleton.showInterstitial()
                    } else if (i.CycloneData.singleton.getPlayMode() == i.PlayMode.RANKING) {
                        var l = this.node.getChildByName("endingLayer").getChildByName("rankingModeLose").getChildByName("shareBtn");
                        this.node.getChildByName("endingLayer").getChildByName("blackBG").active = !0, this.node.getChildByName("endingLayer").getChildByName("rankingModeLose").active = !0, this.alreadyRelifeTimes > 0 && (l.getChildByName("Label1").getComponent(cc.Label).string = "Mời bạn bè", l.getChildByName("Label2").active = !1)
                    } else if (i.CycloneData.singleton.getPlayMode() == i.PlayMode.CHAPTER) {
                        l = this.node.getChildByName("endingLayer").getChildByName("chapterModeLose").getChildByName("shareBtn");
                        this.node.getChildByName("endingLayer").getChildByName("blackBG").active = !0, this.node.getChildByName("endingLayer").getChildByName("chapterModeLose").active = !0, this.alreadyRelifeTimes > 0 && (l.active = !1, l.getComponent(cc.Button).interactable = !1, this.node.getChildByName("endingLayer").getChildByName("chapterModeLose").getChildByName("playAgainBtn").setPosition(cc.v2(0, this.node.getChildByName("endingLayer").getChildByName("chapterModeLose").getChildByName("playAgainBtn").position.y)))
                    } else i.CycloneData.singleton.getPlayMode() == i.PlayMode.PK && (this.node.getChildByName("endingLayer").getChildByName("blackBG").active = !0, this.node.getChildByName("endingLayer").getChildByName("pkModeLose").active = !0, i.CycloneData.singleton.addPKModeDoneTimes(1), Math.random() > .5 && a.CycloneWx.singleton.showInterstitial())
                }, t.prototype.fuHuo = function() {
                    this.alreadyRelifeTimes++, this.isGameBegin = !0, this.gameTimer = this.gameTimer - 10, this.node.getChildByName("endingLayer").active = !1;
                    for (var e = 0; e < this.node.getChildByName("endingLayer").children.length; e++) this.node.getChildByName("endingLayer").children[e].active = !1
                }, t.prototype.skillTips = function() {
                    this.isOpenSkill1Tips || (i.CycloneData.singleton.getPlayMode() == i.PlayMode.CHAPTER ? this.gameTimer >= 15 && this.animalsLocationArr.length / this.totalanimalsNum >= .5 && (this.isOpenSkill1Tips = !0, this.node.getChildByName("animalsBG").getChildByName("skillGroup").getChildByName("skill1").getChildByName("particle").active = !0) : this.gameTimer >= 23 && this.animalsLocationArr.length / this.totalanimalsNum >= .5 && (this.isOpenSkill1Tips = !0, this.node.getChildByName("animalsBG").getChildByName("skillGroup").getChildByName("skill1").getChildByName("particle").active = !0)), this.isOpenSkill2Tips || (i.CycloneData.singleton.getPlayMode() == i.PlayMode.CHAPTER ? this.gameTimer / i.CycloneData.singleton.getChapterConfigInfo()[i.CycloneData.singleton.getOnChapterNumber()][6] >= .6 && (this.isOpenSkill2Tips = !0, this.node.getChildByName("animalsBG").getChildByName("skillGroup").getChildByName("skill2").getChildByName("particle").active = !0, this.node.getChildByName("modeProper").getChildByName("skill2").active = !0, this.node.getChildByName("modeProper").getChildByName("numBG").active = !0) : i.CycloneData.singleton.getPlayMode() == i.PlayMode.RANKING ? this.gameTimer >= 30 && (this.isOpenSkill2Tips = !0, this.node.getChildByName("animalsBG").getChildByName("skillGroup").getChildByName("skill2").getChildByName("particle").active = !0, this.node.getChildByName("modeProper").getChildByName("skill2").active = !0, this.node.getChildByName("modeProper").getChildByName("numBG").active = !0) : this.isOpenSkill2Tips = !0)
                }, t.prototype.skill_HuanWeiZhi_BCE = function() {
                    this.resetAnimalsPosition(100), this.node.getChildByName("animalsBG").getChildByName("skillGroup").getChildByName("skill1").getChildByName("particle").active = !1, r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3")
                }, t.prototype.skill_JiaShiJian_BCE = function() {
                    r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3"), this.node.getChildByName("animalsBG").getChildByName("skillGroup").getChildByName("skill2").getChildByName("particle").active = !1, this.node.getChildByName("modeProper").getChildByName("skill2").active = !1, this.node.getChildByName("modeProper").getChildByName("numBG").active = !1, i.CycloneData.singleton.getPlayMode() == i.PlayMode.CHAPTER ? i.CycloneData.singleton.getGoldNumByLocal() >= 100 ? this.propAddTimeUseTimes < 2 ? (i.CycloneData.singleton.addGoldNumByLocal(-100), this.propAddTimeUseTimes++, this.gameTimer = this.gameTimer - 10, this.node.getChildByName("modeProper").getChildByName("timeBar").getChildByName("particle").active = !0, this.node.getChildByName("modeProper").getChildByName("timeBar").getChildByName("particle").getComponent(cc.ParticleSystem).resetSystem()) : a.CycloneWx.singleton.showToast("\u4e00\u5c40\u6e38\u620f\u53ea\u80fd\u4f7f\u75282\u6b21\u6c99\u6f0f\u54e6~", 2e3) : a.CycloneWx.singleton.showToast("\u4e3b\u4eba~\u91d1\u5e01\u4e0d\u591f\u7528\u4e86\u5462~", 2e3) : i.CycloneData.singleton.getPlayMode() == i.PlayMode.RANKING ? this.gameTimer >= 30 ? i.CycloneData.singleton.getGoldNumByLocal() >= 100 ? this.propAddTimeUseTimes < 1 ? (i.CycloneData.singleton.addGoldNumByLocal(-100), this.propAddTimeUseTimes++, this.gameTimer = this.gameTimer - 10, this.node.getChildByName("modeProper").getChildByName("time").getChildByName("time").getChildByName("particle").active = !0, this.node.getChildByName("modeProper").getChildByName("time").getChildByName("time").getChildByName("particle").getComponent(cc.ParticleSystem).resetSystem()) : a.CycloneWx.singleton.showToast("\u4e00\u5c40\u6e38\u620f\u53ea\u80fd\u4f7f\u7528\u4e00\u6b21\u6c99\u6f0f\u54e6~", 2e3) : a.CycloneWx.singleton.showToast("\u4e3b\u4eba~\u91d1\u5e01\u4e0d\u591f\u7528\u4e86\u5462~", 2e3) : a.CycloneWx.singleton.showToast("\u8d85\u8fc730\u79d2\u540e\u624d\u53ef\u4ee5\u4f7f\u7528\u54e6~", 2e3) : i.CycloneData.singleton.getPlayMode() == i.PlayMode.PK && a.CycloneWx.singleton.showToast("\u6b64\u6a21\u5f0f\u4e0b\u4e0d\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u9053\u5177\u54e6~", 2e3)
                }, t.prototype.skill_XiaoZhaDan_BCE = function() {
                    var e = this;
                    r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3"), i.CycloneData.singleton.getPlayMode() == i.PlayMode.PK ? (this.node.getChildByName("animalsBG").getChildByName("skillGroup").getChildByName("skill3").getComponent(cc.Button).interactable = !1, this.node.getChildByName("user_skill3").getComponent(cc.Animation).play("userSkill3"), this.node.getChildByName("user_skill3").getComponent(cc.Animation).on("finished", function() {
                        e.node.getChildByName("modeProper").getChildByName("pk").getChildByName("player2").getChildByName("yun").getComponent(cc.Animation).play("userSkill3_2"), e.node.getChildByName("modeProper").getChildByName("pk").getChildByName("player2").getChildByName("yun").getComponent(cc.Animation).on("finished", function() {
                            e.node.getChildByName("animalsBG").getChildByName("skillGroup").getChildByName("skill3").getComponent(cc.Button).interactable = !0
                        })
                    }), this.isSkill3_Enermy = !0, this.skill3LastTime_Enermy = 5) : a.CycloneWx.singleton.showToast("\u6b64\u6a21\u5f0f\u4e0b\u4e0d\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u9053\u5177\u54e6~", 2e3)
                }, t.prototype.enermyUseSkill3 = function() {
                    var e = this;
                    Math.random() < 2e-4 && 0 == this.isEnermyUseingSkill3 && (this.isEnermyUseingSkill3 = !0, this.node.getChildByName("enermy_skill3").getComponent(cc.Animation).play("yanWuDan_enermyUser_0"), this.node.getChildByName("enermy_skill3").getComponent(cc.Animation).on("finished", function() {
                        e.node.getChildByName("yanWuDanEffect").getComponent(cc.Animation).play("yanWuDan"), e.node.getChildByName("yanWuDanEffect").getComponent(cc.Animation).on("finished", function() {
                            e.isEnermyUseingSkill3 = !1
                        })
                    }))
                }, t.prototype.help_BCE = function() {
                    this.isGameBegin = !1, this.node.getChildByName("helpLayer").active = !0
                }, t.prototype.helpLayerCloseBtn_CE = function() {
                    this.isGameBegin = !0, this.node.getChildByName("helpLayer").active = !1, r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3")
                }, t.prototype.zhanTing_BCE = function() {
                    this.isGameBegin = !1, this.node.getChildByName("pauseLayer").active = !0, r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3")
                }, t.prototype.zhanTing_no_BCE = function() {
                    this.isGameBegin = !0, this.node.getChildByName("pauseLayer").active = !1, r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3")
                }, t.prototype.zhanTing_yes_BCE = function() {
                    i.CycloneData.singleton.getGoldNumByLocal() >= 50 && i.CycloneData.singleton.addGoldNumByLocal(-50), cc.director.loadScene("main")
                }, t.prototype.nextChapter_BCE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(i.CycloneData.singleton.getOnChapterNumber() + 1), i.CycloneData.singleton.setPlayMode(i.PlayMode.CHAPTER), r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3"), cc.director.loadScene("game")
                }, t.prototype.playAgain_BCE = function() {
                    r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3"), i.CycloneData.singleton.getPlayMode() == i.PlayMode.RANKING ? (i.CycloneData.singleton.setPlayMode(i.PlayMode.RANKING), i.CycloneData.singleton.setOnChapterNumber(201)) : i.CycloneData.singleton.getPlayMode() == i.PlayMode.CHAPTER || i.CycloneData.singleton.getPlayMode() == i.PlayMode.PK && (i.CycloneData.singleton.setPlayMode(i.PlayMode.PK), i.CycloneData.singleton.setOnChapterNumber(202)), cc.director.loadScene("game")
                }, t.prototype.Bgm = function() {
                    r.CycloneDef.singleton.getSoundIsOpen() && (r.CycloneDef.singleton.stopSound(), r.CycloneDef.singleton.playSound("resources/audio/cyclone_lll_BGM_001.mp3", !0, .7))
                }, t.prototype.share_BCE = function(e) {
                    var t = this;
                    this.isGameWin ? i.CycloneData.singleton.getPlayMode() == i.PlayMode.RANKING ? Math.floor(100 * this.gameTimer) / 100 >= 32 && !this.isAlreadyVedio ? a.CycloneWx.singleton.showVideo(function() {
                        a.CycloneWx.singleton.showToast("X2 xu vàng thành công!", 1500), i.CycloneData.singleton.addGoldNumByLocal(10), t.isAlreadyVedio = !0
                    }) : a.CycloneWx.singleton.showToast("Phần thưởng gấp đôi đã được nhận!", 1500) : i.CycloneData.singleton.getPlayMode() == i.PlayMode.PK ? this.isAlreadyVedio ? a.CycloneWx.singleton.showToast("Phần thưởng gấp đôi đã được nhận!", 1500) : a.CycloneWx.singleton.showVideo(function() {
                        a.CycloneWx.singleton.showToast("X2 xu vàng thành công!", 1500), i.CycloneData.singleton.addGoldNumByLocal(20), t.isAlreadyVedio = !0, t.node.getChildByName("endingLayer").getChildByName("pkModeWin").getChildByName("shareBtn").getChildByName("Label2").getComponent(cc.Label).string = "Thành công! Nhận thưởng x2!"
                    }) : a.CycloneWx.singleton.showVideo(function() {}) : i.CycloneData.singleton.getPlayMode() == i.PlayMode.CHAPTER || i.CycloneData.singleton.getPlayMode() == i.PlayMode.RANKING ? 0 == this.alreadyRelifeTimes ? a.CycloneWx.singleton.showVideo(function() {
                        t.fuHuo()
                    }) : a.CycloneWx.singleton.showToast("Chỉ có thể sống lại một lần ~~", 1500) : a.CycloneWx.singleton.showVideo(function() {})
                }, t.prototype.update = function(e) {
                    if (this.isGameBegin) {
                        if (this.gameTimer = this.gameTimer + e, i.CycloneData.singleton.getPlayMode() == i.PlayMode.CHAPTER) this.node.getChildByName("modeProper").getChildByName("timeBar").getComponent(cc.ProgressBar).progress = this.gameTimer / i.CycloneData.singleton.getChapterConfigInfo()[i.CycloneData.singleton.getOnChapterNumber()][6], this.gameTimer >= i.CycloneData.singleton.getChapterConfigInfo()[i.CycloneData.singleton.getOnChapterNumber()][6] && this.challengeFinish(!1);
                        else if (i.CycloneData.singleton.getPlayMode() == i.PlayMode.RANKING) this.node.getChildByName("modeProper").getChildByName("time").getChildByName("time").getChildByName("num").getComponent(cc.Label).string = this.gameTimer.toFixed(1) + "s", this.gameTimer >= 999 && this.challengeFinish(!1);
                        else if (i.CycloneData.singleton.getPlayMode() == i.PlayMode.PK) {
                            if (this.isSkill3_Enermy) this.skill3LastTime_Enermy > 0 ? this.skill3LastTime_Enermy -= e : (this.isSkill3_Enermy = !1, this.skill3LastTime_Enermy = 0);
                            else {
                                this.pkPlayerTimer += e;
                                var t = (this.pkPlayerTimer / this.pkPlayerTime * 100).toFixed(0);
                                parseInt(t) % 5 == 0 && (this.node.getChildByName("modeProper").getChildByName("pk").getChildByName("player2Num").getChildByName("num").getComponent(cc.Label).string = t + "%"), parseInt(t) >= 100 && this.challengeFinish(!1)
                            }
                            this.enermyUseSkill3()
                        }
                        this.skillTips()
                    }
                }, __decorate([h(cc.TextAsset)], t.prototype, "chapterConfigCsv", void 0), __decorate([h(cc.TextAsset)], t.prototype, "animalsConfigCsv", void 0), __decorate([h(cc.TextAsset)], t.prototype, "worldRankConfigCsv", void 0), __decorate([h(cc.Prefab)], t.prototype, "animal", void 0), __decorate([h(cc.Prefab)], t.prototype, "animalDestoryEffect", void 0), t = __decorate([f], t)
            }(cc.Component);
        n.default = d, cc._RF.pop()
    }, {
        "./Animal": "Animal",
        "./CYZGameLLL": "CYZGameLLL",
        "./CycloneData": "CycloneData",
        "./CycloneDef": "CycloneDef",
        "./CycloneWx ": "CycloneWx "
    }],
    Kuai: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0d361NjMeBKzLGBKVwuUKp4", "Kuai"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            a = (r.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.game = null, t.id = 0, t.type = 0, t
                }
                return __extends(t, e), t.prototype.start = function() {
                    var e = this;
                    this.node.getComponent(cc.Animation).on("finished", function() {
                        e.node.destroy()
                    })
                }, t = __decorate([i], t)
            }(cc.Component));
        n.default = a, cc._RF.pop()
    }, {}],
    Login: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e4f5fzDTsVD8LEP+VZO33lP", "Login"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("./CycloneWx "),
            i = cc._decorator,
            a = i.ccclass,
            o = (i.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    r.CycloneWx.singleton.initBanner(), r.CycloneWx.singleton.initVideo()
                }, t.prototype.start = function() {
                    setTimeout(function() {
                        cc.director.loadScene("main")
                    }, 1500)
                }, t = __decorate([a], t)
            }(cc.Component));
        n.default = o, cc._RF.pop()
    }, {
        "./CycloneWx ": "CycloneWx "
    }],
    Main: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "92fe7Kw71FIcrNZSSOFDFw3", "Main"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("./CycloneDef"),
            i = e("./CycloneData"),
            a = e("./CycloneWx "),
            o = e("./SamllChapterButton"),
            s = !1,
            c = cc._decorator,
            f = c.ccclass,
            h = c.property,
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.SamllChapterButton = null, t.userNumRefrishTime = 0, t.timer = 0, t.mode1UserNum = 500 + 3e3 * Math.random(), t.mode2UserNum = 800 + 6e3 * Math.random(), t.mode3UserNum = 1e3 + 9e3 * Math.random(), t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    s || (a.CycloneWx.singleton.showBanner(), s = !0), r.CycloneDef.singleton.getIsNewUser() && (i.CycloneData.singleton.setPlayMode(i.PlayMode.CHAPTER), i.CycloneData.singleton.setOnChapterNumber(1), cc.director.loadScene("game"))
                }, t.prototype.start = function() {
                    this.node.getChildByName("mainBtnGroup").active = !0, this.node.getChildByName("lessBtnGroup").active = !0, this.node.getChildByName("userMsg").active = !0, r.CycloneDef.singleton.nodeAdaptHeight(this.node.getChildByName("userMsg"), .5 * cc.winSize.height - 76, .5 * cc.winSize.height - 158), r.CycloneDef.singleton.nodeAdaptHeight(this.node.getChildByName("mainBtnGroup"), .5 * cc.winSize.height - 76, .5 * cc.winSize.height - 158), this.node.getChildByName("lessBtnGroup").y = this.node.getChildByName("mainBtnGroup").y - 452, r.CycloneDef.singleton.getSoundIsOpen() ? (r.CycloneDef.singleton.stopSound(), r.CycloneDef.singleton.playSound("resources/audio/cyclone_lll_BGM_001.mp3", !0, .7)) : r.CycloneDef.singleton.nodeReviseSpriteFrame(this.node.getChildByName("lessBtnGroup").getChildByName("audioBtn"), "res/btn_less_audio_d"), this.node.getChildByName("BG").active = !0, this.node.getChildByName("userMsg").getChildByName("gold").getChildByName("num").getComponent(cc.Label).string = i.CycloneData.singleton.getGoldNumByLocal().toString();
                    var e = 5;
                    i.CycloneData.singleton.getChapterModeDoneNum() <= 20 ? e = 5 : i.CycloneData.singleton.getChapterModeDoneNum() > 20 && i.CycloneData.singleton.getChapterModeDoneNum() <= 40 ? e = 4 : i.CycloneData.singleton.getChapterModeDoneNum() > 40 && i.CycloneData.singleton.getChapterModeDoneNum() <= 60 ? e = 3 : i.CycloneData.singleton.getChapterModeDoneNum() > 60 && i.CycloneData.singleton.getChapterModeDoneNum() <= 80 ? e = 2 : i.CycloneData.singleton.getChapterModeDoneNum() > 80 && (e = 1);
                    var t = 5;
                    t = i.CycloneData.singleton.getRankingModeBestNum() <= 1e3 ? 1 : i.CycloneData.singleton.getRankingModeBestNum() > 1e3 && i.CycloneData.singleton.getRankingModeBestNum() <= 5e3 ? 2 : i.CycloneData.singleton.getRankingModeBestNum() > 5e3 && i.CycloneData.singleton.getRankingModeBestNum() <= 15e3 ? 3 : 4;
                    var n = 3,
                        o = 0;
                    i.CycloneData.singleton.getPKModeDoneTimes() > 0 ? 0 == i.CycloneData.singleton.getPKModeWinTimes() ? (n = 6, o = 0) : n = (o = i.CycloneData.singleton.getPKModeWinTimes() / i.CycloneData.singleton.getPKModeDoneTimes()) < .5 ? 3 : o >= .5 && o < .6 ? 2 : 1 : (n = 6, o = 0), this.node.getChildByName("userMsg").getChildByName("chapterModeMsg").getChildByName("msg1").getComponent(cc.Label).string = e + "cao cấp", this.node.getChildByName("userMsg").getChildByName("chapterModeMsg").getChildByName("msg2").getComponent(cc.Label).string = i.CycloneData.singleton.getChapterModeDoneNum() + "Lv", this.node.getChildByName("userMsg").getChildByName("rankingModeMsg").getChildByName("msg1").getComponent(cc.Label).string = t + "cao cấp", this.node.getChildByName("userMsg").getChildByName("rankingModeMsg").getChildByName("msg2").getComponent(cc.Label).string = i.CycloneData.singleton.getRankingModeBestNum() + "", this.node.getChildByName("userMsg").getChildByName("pkModeMsg").getChildByName("msg1").getComponent(cc.Label).string = n + "cao cấp", this.node.getChildByName("userMsg").getChildByName("pkModeMsg").getChildByName("msg2").getComponent(cc.Label).string = "Số trận:" + i.CycloneData.singleton.getPKModeDoneTimes(), this.node.getChildByName("userMsg").getChildByName("pkModeMsg").getChildByName("msg3").getComponent(cc.Label).string = "Thắng:" + i.CycloneData.singleton.getPKModeWinTimes(), this.node.getChildByName("userMsg").getChildByName("pkModeMsg").getChildByName("msg4").getComponent(cc.Label).string = "Tỉ lệ:" + (100 * o).toFixed(0) + "%", a.CycloneWx.singleton.initInterstitial()
                }, t.prototype.chapter5Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(5), this.chapter_CE()
                }, t.prototype.chapter6Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(6), this.chapter_CE()
                }, t.prototype.chapter7Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(7), this.chapter_CE()
                }, t.prototype.chapter8Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(8), this.chapter_CE()
                }, t.prototype.chapter9Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(9), this.chapter_CE()
                }, t.prototype.chapter10Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(10), this.chapter_CE()
                }, t.prototype.chapter11Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(11), this.chapter_CE()
                }, t.prototype.chapter12Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(12), this.chapter_CE()
                }, t.prototype.chapter13Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(13), this.chapter_CE()
                }, t.prototype.chapter14Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(14), this.chapter_CE()
                }, t.prototype.chapter15Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(15), this.chapter_CE()
                }, t.prototype.chapter16Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(16), this.chapter_CE()
                }, t.prototype.chapter17Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(17), this.chapter_CE()
                }, t.prototype.chapter18Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(18), this.chapter_CE()
                }, t.prototype.chapter19Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(19), this.chapter_CE()
                }, t.prototype.chapter20Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(20), this.chapter_CE()
                }, t.prototype.chapter21Btn_CE = function() {
                    a.CycloneWx.singleton.showToast("\u66f4\u591a\u5173\u5361\u5373\u5c06\u5f00\u542f\uff0c\u96c6\u90ae\u7cfb\u7edf\u5373\u5c06\u5f00\u542f\u3002\u656c\u8bf7\u671f\u5f85.", 2e3)
                }, t.prototype.shareOpen = function() {
                    a.CycloneWx.singleton.share("\u4e07\u7269\u7686\u53ef\u8fde\uff0c\u4f60\u8fde\u6211\u4e5f\u8fde\uff01", "resources/shareImg/shareImg01.jpg", function() {})
                }, t.prototype.chapter1Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(1), this.chapter_CE()
                }, t.prototype.helpOpen = function() {
                    r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3"), this.node.getChildByName("helpLayer").active = !0
                }, t.prototype.chapter2Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(2), this.chapter_CE()
                }, t.prototype.collectOpen = function() {
                    r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3"), this.node.getChildByName("collect").active = !0
                }, t.prototype.chapter3Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(3), this.chapter_CE()
                }, t.prototype.audioBtn_CE = function() {
                    r.CycloneDef.singleton.setSoundIsOpen(!r.CycloneDef.singleton.getSoundIsOpen()), r.CycloneDef.singleton.getSoundIsOpen() ? (r.CycloneDef.singleton.stopSound(), r.CycloneDef.singleton.playSound("resources/audio/cyclone_lll_BGM_001.mp3", !0, .7), r.CycloneDef.singleton.nodeReviseSpriteFrame(this.node.getChildByName("lessBtnGroup").getChildByName("audioBtn"), "res/btn_less_audio_n")) : r.CycloneDef.singleton.nodeReviseSpriteFrame(this.node.getChildByName("lessBtnGroup").getChildByName("audioBtn"), "res/btn_less_audio_d")
                }, t.prototype.chapter4Btn_CE = function() {
                    i.CycloneData.singleton.setOnChapterNumber(4), this.chapter_CE()
                }, t.prototype.chapter_CE = function() {
                    for (var e = this, t = 0; t < 5; t++)
                        for (var n = 0; n < 4; n++) {
                            var a = 20 * (i.CycloneData.singleton.getOnChapterNumber() - 1) + (4 * t + (n + 1)),
                                s = cc.instantiate(this.SamllChapterButton);
                            this.node.getChildByName("chapter").getChildByName("smallChapterK").getChildByName("kuang").addChild(s), s.position = cc.v2(140 * n - 210, 290 - 150 * t), s.getChildByName("number").getComponent(cc.Label).string = a.toString(), s.getComponent(o.default).isLock = !1, i.CycloneData.singleton.getChapterModeDoneNum() + 1 >= a && (r.CycloneDef.singleton.nodeReviseSpriteFrame(s, "res/btn_smallChapter_n"), s.getChildByName("one").active = !0, s.getChildByName("two").active = !0, s.getChildByName("three").active = !0, s.getComponent(cc.Button).interactable = !0, s.getComponent(o.default).isLock = !0, s.getChildByName("number").color = cc.color(229, 118, 56), s.getChildByName("number").getComponent(cc.LabelOutline).color = cc.color(255, 239, 188), i.CycloneData.singleton.getChapterModeStarByChapterNum(a) >= 1 && r.CycloneDef.singleton.nodeReviseSpriteFrame(s.getChildByName("one"), "res/icon_xing_1"), i.CycloneData.singleton.getChapterModeStarByChapterNum(a) >= 2 && r.CycloneDef.singleton.nodeReviseSpriteFrame(s.getChildByName("two"), "res/icon_xing_1"), i.CycloneData.singleton.getChapterModeStarByChapterNum(a) >= 3 && r.CycloneDef.singleton.nodeReviseSpriteFrame(s.getChildByName("three"), "res/icon_xing_1")), s.getComponent(o.default).chapterNum = a, s.getComponent(o.default).buttonClickEvent = function(t) {
                                e.chapterBtn_CE(t)
                            }
                        }
                    this.node.getChildByName("chapter").getChildByName("smallChapterK").active = !0
                }, t.prototype.modeFriendStart = function() {
                    a.CycloneWx.singleton.share("\u8fd9\u662f\u6211\u73a9\u8fc7\u7684\u6700\u597d\u73a9\u7684\u8fde\u8fde\u770b\u6d88\u9664\u4e86\uff0c\u4f60\u4e5f\u6765\u8bd5\u8bd5\u5427\uff01", "resources/shareImg/shareImg02.jpg", function() {})
                }, t.prototype.chapterBtn_CE = function(e) {
                    r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3"), i.CycloneData.singleton.setPlayMode(i.PlayMode.CHAPTER), i.CycloneData.singleton.setOnChapterNumber(e.chapterNum), cc.director.loadScene("game")
                }, t.prototype.modeRankingStart = function() {
                    r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3"), i.CycloneData.singleton.setOnChapterNumber(201), i.CycloneData.singleton.setPlayMode(i.PlayMode.RANKING), cc.director.loadScene("game")
                }, t.prototype.chapterModeStartBtn_CE = function() {
                    r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3"), i.CycloneData.singleton.setPlayMode(i.PlayMode.CHAPTER), i.CycloneData.singleton.setOnChapterNumber(i.CycloneData.singleton.getChapterModeDoneNum() + 1), cc.director.loadScene("game")
                }, t.prototype.modeChapterStart = function() {
                    this.node.getChildByName("chapter").active = !0, r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3");
                    var e = 0,
                        t = 0,
                        n = 0,
                        a = 0,
                        o = 0,
                        s = 0,
                        c = 0,
                        f = 0,
                        h = 0,
                        d = 0,
                        u = 0,
                        l = 0,
                        p = 0,
                        b = 0,
                        y = 0,
                        m = 0,
                        g = 0,
                        v = 0,
                        _ = 0,
                        C = this.node.getChildByName("chapter"),
                        w = C.getChildByName("scrollview").getChildByName("view").getChildByName("content"),
                        B = cc.color(255, 255, 255),
                        S = 0;
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (var M = S + 1; M < S + 21; M++) e += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter1").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = e + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) t += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter2").getChildByName("stamp").color = B, w.getChildByName("chapter2").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter2").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = t + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) n += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter3").getChildByName("stamp").color = B, w.getChildByName("chapter3").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter3").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = n + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) a += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter4").getChildByName("stamp").color = B, w.getChildByName("chapter4").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter4").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = a + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) o += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter5").getChildByName("stamp").color = B, w.getChildByName("chapter5").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter5").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = o + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) o += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter6").getChildByName("stamp").color = B, w.getChildByName("chapter6").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter6").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = s + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) s += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter7").getChildByName("stamp").color = B, w.getChildByName("chapter7").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter7").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = "0/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) c += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter8").getChildByName("stamp").color = B, w.getChildByName("chapter8").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter8").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = c + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) f += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter9").getChildByName("stamp").color = B, w.getChildByName("chapter9").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter9").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = f + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) h += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter10").getChildByName("stamp").color = B, w.getChildByName("chapter10").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter10").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = h + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) d += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter11").getChildByName("stamp").color = B, w.getChildByName("chapter11").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter11").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = d + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) u += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter12").getChildByName("stamp").color = B, w.getChildByName("chapter12").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter12").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = u + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) l += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter13").getChildByName("stamp").color = B, w.getChildByName("chapter13").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter13").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = l + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) p += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter14").getChildByName("stamp").color = B, w.getChildByName("chapter14").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter14").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = p + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) b += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter15").getChildByName("stamp").color = B, w.getChildByName("chapter15").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter15").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = b + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) y += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter16").getChildByName("stamp").color = B, w.getChildByName("chapter16").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter16").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = y + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) m += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter17").getChildByName("stamp").color = B, w.getChildByName("chapter17").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter17").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = m + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) g += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter18").getChildByName("stamp").color = B, w.getChildByName("chapter18").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter18").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = g + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) v += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter19").getChildByName("stamp").color = B, w.getChildByName("chapter19").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter19").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = v + "/60", S += 20
                    }
                    if (i.CycloneData.singleton.getChapterModeDoneNum() >= S) {
                        for (M = S + 1; M < S + 21; M++) _ += i.CycloneData.singleton.getChapterModeStarByChapterNum(M);
                        w.getChildByName("chapter20").getChildByName("stamp").color = B, w.getChildByName("chapter20").getComponent(cc.Button).interactable = !0, w.getChildByName("chapter20").getChildByName("information").getChildByName("num").getComponent(cc.Label).string = _ + "/60", S += 20
                    }
                    C.getChildByName("chapterStartBtn").getChildByName("name").getComponent(cc.Label).string = "Lv " + (i.CycloneData.singleton.getChapterModeDoneNum() + 1), this.node.getChildByName("mainBtnGroup").active = !1, this.node.getChildByName("lessBtnGroup").active = !1, this.node.getChildByName("userMsg").active = !1
                }, t.prototype.chapterModeBackBtn_CE = function() {
                    r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3"), this.node.getChildByName("mainBtnGroup").active = !0, this.node.getChildByName("lessBtnGroup").active = !0, this.node.getChildByName("userMsg").active = !0, this.node.getChildByName("chapter").active = !1
                }, t.prototype.modePKStart = function() {
                    r.CycloneDef.singleton.playSoundEffect("resources/audio/commonButtonEffect_22.mp3"), this.node.getChildByName("pkModeReadyLayer").active = !0, this.node.getChildByName("mainBtnGroup").active = !1, this.node.getChildByName("lessBtnGroup").active = !1, this.node.getChildByName("userMsg").active = !1;
                    var e = i.CycloneData.singleton.getPKModeWinTimes() / i.CycloneData.singleton.getPKModeDoneTimes();
                    this.node.getChildByName("pkModeReadyLayer").getChildByName("player1").getChildByName("msg1").getComponent(cc.Label).string = "Tỉ lệ:" + (100 * e).toFixed(0) + "%", this.node.getChildByName("pkModeReadyLayer").getChildByName("player1").getChildByName("msg2").getComponent(cc.Label).string = "Số trận:" + i.CycloneData.singleton.getPKModeDoneTimes(), this.node.getChildByName("pkModeReadyLayer").getChildByName("player2").getChildByName("msg1").getComponent(cc.Label).string = "Tỉ lệ:" + (10 + 85 * Math.random()).toFixed(0) + "%", this.node.getChildByName("pkModeReadyLayer").getChildByName("player2").getChildByName("msg2").getComponent(cc.Label).string = "Số trận:" + (10 + 900 * Math.random()).toFixed(0), this.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
                        i.CycloneData.singleton.setOnChapterNumber(202), i.CycloneData.singleton.setPlayMode(i.PlayMode.PK), cc.director.loadScene("game")
                    })))
                }, t.prototype.update = function(e) {
                    this.timer = this.timer + e, this.timer >= this.userNumRefrishTime && (this.userNumRefrishTime = this.userNumRefrishTime + 4, this.node.getChildByName("mainBtnGroup").getChildByName("chapterBtn").getChildByName("userNum").getComponent(cc.Label).string = (this.mode1UserNum + (300 * Math.random() - 150)).toFixed(0), this.node.getChildByName("mainBtnGroup").getChildByName("rankingBtn").getChildByName("userNum").getComponent(cc.Label).string = (this.mode2UserNum + (300 * Math.random() - 150)).toFixed(0), this.node.getChildByName("mainBtnGroup").getChildByName("PKBtn").getChildByName("userNum").getComponent(cc.Label).string = (this.mode3UserNum + (300 * Math.random() - 150)).toFixed(0))
                }, t.prototype.onDestroy = function() {}, __decorate([h(cc.Prefab)], t.prototype, "SamllChapterButton", void 0), t = __decorate([f], t)
            }(cc.Component);
        n.default = d, cc._RF.pop()
    }, {
        "./CycloneData": "CycloneData",
        "./CycloneDef": "CycloneDef",
        "./CycloneWx ": "CycloneWx ",
        "./SamllChapterButton": "SamllChapterButton"
    }],
    SamllChapterButton: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3c38aDE36FGHZCvg3mj9SWs", "SamllChapterButton"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            a = (r.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.game = null, t.id = 0, t.isLock = !0, t.chapterNum = 0, t.starNum = 0, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.prototype.onClickEvent = function() {
                    this.buttonClickEvent(this)
                }, t = __decorate([i], t)
            }(cc.Component));
        n.default = a, cc._RF.pop()
    }, {}],
    WXBizDataCrypt: [function(e, t, n) {
        (function(n) {
            "use strict";
            cc._RF.push(t, "74909IY4ypIhaT1RQiKhkwE", "WXBizDataCrypt");
            var r = e("crypto");

            function i(e, t) {
                this.appId = e, this.sessionKey = t
            }
            i.prototype.decryptData = function(e, t) {
                var i = new n(this.sessionKey, "base64");
                e = new n(e, "base64"), t = new n(t, "base64");
                try {
                    var a = r.createDecipheriv("aes-128-cbc", i, t);
                    a.setAutoPadding(!0);
                    var o = a.update(e, "binary", "utf8");
                    o += a.final("utf8"), o = JSON.parse(o)
                } catch (e) {
                    throw new Error("Illegal Buffer")
                }
                if (o.watermark.appid !== this.appId) throw new Error("Illegal Buffer");
                return o
            }, t.exports = i, cc._RF.pop()
        }).call(this, e("buffer").Buffer)
    }, {
        buffer: 47,
        crypto: 56
    }],
    moreGame: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5f019xbO1RBjIZYrqhI84oQ", "moreGame"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("./CycloneWx "),
            i = cc._decorator,
            a = i.ccclass,
            o = (i.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onlickEvent = function() {
                    r.CycloneWx.singleton.moreGame("wx4c7fed6e471c005d")
                }, t = __decorate([a], t)
            }(cc.Component));
        n.default = o, cc._RF.pop()
    }, {
        "./CycloneWx ": "CycloneWx "
    }],
    publicHLayer: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c133dYZ1/hI96/1iWKFx7KL", "publicHLayer"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = e("./CycloneWx "),
            i = e("./CycloneData"),
            a = e("./CycloneDef"),
            o = cc._decorator,
            s = o.ccclass,
            c = (o.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.openLayer = function() {
                    this.node.active = !0
                }, t.prototype.closeLayer = function() {
                    this.node.active = !1
                }, t.prototype.getBtnClickEvent = function() {
                    this.node.getChildByName("img").getChildByName("editbox").getComponent(cc.EditBox).string ? "0222" == this.node.getChildByName("img").getChildByName("editbox").getComponent(cc.EditBox).string ? (r.CycloneWx.singleton.showToast("\u606d\u559c\u60a8\uff01\u9886\u53d6\u6210\u529f\uff01\u83b7\u5f97888\u91d1\u5e01\uff0c\u548c\u5185\u90e8VIP\u8d44\u683c\uff01\u6709\u6e38\u620f\u7684\u6700\u65b0\u6d88\u606f\u548c\u52a8\u6001\u6211\u4eec\u4f1a\u7b2c\u4e00\u65f6\u95f4\u901a\u77e5\u60a8\uff01\u795d\u60a8\u6e38\u620f\u6109\u5feb\u3002"), i.CycloneData.singleton.addGoldNumByLocal(888), this.setIsGetPublicGift(), this.closeLayer()) : r.CycloneWx.singleton.showToast("\u60a8\u53ef\u4ee5\u5173\u6ce8\u516c\u4f17\u53f7\u201c\u7231\u840c\u840c\u7684\u6211\u4eec\u201d\uff0c\u7acb\u5373\u83b7\u5f97\u793c\u5305\u7801\uff01\u4e07\u5206\u611f\u8c22\u60a8\u7684\u652f\u6301\uff01") : r.CycloneWx.singleton.showToast("\u8bf7\u60a8\u8f93\u5165\u6b63\u786e\u7684\u9886\u53d6\u7801~")
                }, t.prototype.getIsGetPublicGift = function() {
                    var e = cc.sys.localStorage.getItem("PublicGift");
                    return !!a.CycloneDef.singleton.checkIsOnlyNumberCompose(e)
                }, t.prototype.setIsGetPublicGift = function() {
                    cc.sys.localStorage.setItem("PublicGift", "0222")
                }, t = __decorate([s], t)
            }(cc.Component));
        n.default = c, cc._RF.pop()
    }, {
        "./CycloneData": "CycloneData",
        "./CycloneDef": "CycloneDef",
        "./CycloneWx ": "CycloneWx "
    }]
}, {}, ["A12Btn", "Animal", "Ad", "AdWX", "WXBizDataCrypt", "CYZGameLLL", "CloseBtn", "CycloneData", "CycloneDef", "CycloneWx ", "Game", "Kuai", "Login", "Main", "SamllChapterButton", "moreGame", "publicHLayer"]);