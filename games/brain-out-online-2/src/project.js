window.__require = function e(t, o, c) {
    function i(a, s) {
        if (!o[a]) {
            if (!t[a]) {
                var r = a.split("/");
                if (r = r[r.length - 1], !t[r]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(r, !0);
                    if (n) return n(r, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
            }
            var u = o[a] = {
                exports: {}
            };
            t[a][0].call(u.exports, function(e) {
                return i(t[a][1][e] || e)
            }, u, u.exports, e, t, o, c)
        }
        return o[a].exports
    }
    for (var n = "function" == typeof __require && __require, a = 0; a < c.length; a++) i(c[a]);
    return i
}({
    AdHide: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e488ac9WDFNsJ+km6wwxmka", "AdHide"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = (c.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.schedule(function() {
                        window.h5api.canPlayAd(function(e) {
                            (console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0) ? (cc.find("Canvas/UnlockLevel/ys3/Ok").active = !0, cc.find("Canvas/Shop/Conter/Commodity1/d4/$").active = !0, cc.find("Canvas/Shop/Conter/Commodity2/d4/$").active = !0, cc.find("Canvas/Shop/Conter/Commodity3/d4/$").active = !0, cc.find("Canvas/Shop/Conter/Commodity4/d4/$").active = !0, cc.find("Canvas/Shop/Conter/Commodity5/d4/$").active = !0, cc.find("Canvas/Shop/Conter/Commodity6/d4/$").active = !0, cc.find("Canvas/DoubleVedio/2 #6162/OK").active = !0, cc.find("Canvas/KeyScene/Center/ys5").active = !0, cc.find("Canvas/NextLevelScene/Center/ys5").active = !0, cc.find("Canvas/WinScene/Center/Tv").active = !0) : (cc.find("Canvas/UnlockLevel/ys3/Ok").active = !1, cc.find("Canvas/Shop/Conter/Commodity1/d4/$").active = !1, cc.find("Canvas/Shop/Conter/Commodity2/d4/$").active = !1, cc.find("Canvas/Shop/Conter/Commodity3/d4/$").active = !1, cc.find("Canvas/Shop/Conter/Commodity4/d4/$").active = !1, cc.find("Canvas/Shop/Conter/Commodity5/d4/$").active = !1, cc.find("Canvas/Shop/Conter/Commodity6/d4/$").active = !1, cc.find("Canvas/DoubleVedio/2 #6162/OK").active = !1, cc.find("Canvas/KeyScene/Center/ys5").active = !1, cc.find("Canvas/NextLevelScene/Center/ys5").active = !1, cc.find("Canvas/WinScene/Center/Tv").active = !1)
                        }.bind(this))
                    }, .12)
                }, t.prototype.start = function() {}, t = __decorate([i], t)
            }(cc.Component));
        o.default = n, cc._RF.pop()
    }, {}],
    BackGroundMain: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4b5a2nFsCBP26PwG0NBOFaJ", "BackGroundMain"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = c.property,
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Bg2 = null, t.Bg3 = null, t.Bg4 = null, t.Bg5 = null, t.Bg6 = null, t.Bg7 = null, t.Bg8 = null, t.Bg9 = null, t.Bg10 = null, t.Bg11 = null, t.Bg12 = null, t.Bg13 = null, t.Bg14 = null, t.Bg15 = null, t.Bg16 = null, t.Bg17 = null, t.Bg18 = null, t.Bg19 = null, t.Bg20 = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    var e = cc.sys.localStorage.getItem("Bg2"),
                        t = cc.sys.localStorage.getItem("Bg3"),
                        o = cc.sys.localStorage.getItem("Bg4"),
                        c = cc.sys.localStorage.getItem("Bg5"),
                        i = cc.sys.localStorage.getItem("Bg6"),
                        n = cc.sys.localStorage.getItem("Bg7"),
                        a = cc.sys.localStorage.getItem("Bg8"),
                        s = cc.sys.localStorage.getItem("Bg9"),
                        r = cc.sys.localStorage.getItem("Bg10"),
                        l = cc.sys.localStorage.getItem("Bg11"),
                        u = cc.sys.localStorage.getItem("Bg12"),
                        d = cc.sys.localStorage.getItem("Bg13"),
                        p = cc.sys.localStorage.getItem("Bg14"),
                        v = cc.sys.localStorage.getItem("Bg15"),
                        h = cc.sys.localStorage.getItem("Bg16"),
                        y = cc.sys.localStorage.getItem("Bg17"),
                        m = cc.sys.localStorage.getItem("Bg18"),
                        f = cc.sys.localStorage.getItem("Bg19"),
                        _ = cc.sys.localStorage.getItem("Bg20");
                    2 === Number(e) && (this.Bg2.opacity = 255, this.Bg2.removeAllChildren()), 2 === Number(t) && (this.Bg3.opacity = 255, this.Bg3.removeAllChildren()), 2 === Number(o) && (this.Bg4.opacity = 255, this.Bg4.removeAllChildren()), 2 === Number(c) && (this.Bg5.opacity = 255, this.Bg5.removeAllChildren()), 2 === Number(i) && (this.Bg6.opacity = 255, this.Bg6.removeAllChildren()), 2 === Number(n) && (this.Bg7.opacity = 255, this.Bg7.removeAllChildren()), 2 === Number(a) && (this.Bg8.opacity = 255, this.Bg8.removeAllChildren()), 2 === Number(s) && (this.Bg9.opacity = 255, this.Bg9.removeAllChildren()), 2 === Number(r) && (this.Bg10.opacity = 255, this.Bg10.removeAllChildren()), 2 === Number(l) && (this.Bg11.opacity = 255, this.Bg11.removeAllChildren()), 2 === Number(u) && (this.Bg12.opacity = 255, this.Bg12.removeAllChildren()), 2 === Number(d) && (this.Bg13.opacity = 255, this.Bg13.removeAllChildren()), 2 === Number(p) ? (this.Bg14.opacity = 255, this.Bg14.removeAllChildren()) : 2 === Number(v) && (this.Bg15.opacity = 255, this.Bg15.removeAllChildren()), 2 === Number(h) && (this.Bg16.opacity = 255, this.Bg16.removeAllChildren()), 2 === Number(y) && (this.Bg17.opacity = 255, this.Bg17.removeAllChildren()), 2 === Number(m) && (this.Bg18.opacity = 255, this.Bg18.removeAllChildren()), 2 === Number(f) && (this.Bg19.opacity = 255, this.Bg19.removeAllChildren()), 2 === Number(_) && (this.Bg20.opacity = 255, this.Bg20.removeAllChildren())
                }, t.prototype.start = function() {}, __decorate([n(cc.Node)], t.prototype, "Bg2", void 0), __decorate([n(cc.Node)], t.prototype, "Bg3", void 0), __decorate([n(cc.Node)], t.prototype, "Bg4", void 0), __decorate([n(cc.Node)], t.prototype, "Bg5", void 0), __decorate([n(cc.Node)], t.prototype, "Bg6", void 0), __decorate([n(cc.Node)], t.prototype, "Bg7", void 0), __decorate([n(cc.Node)], t.prototype, "Bg8", void 0), __decorate([n(cc.Node)], t.prototype, "Bg9", void 0), __decorate([n(cc.Node)], t.prototype, "Bg10", void 0), __decorate([n(cc.Node)], t.prototype, "Bg11", void 0), __decorate([n(cc.Node)], t.prototype, "Bg12", void 0), __decorate([n(cc.Node)], t.prototype, "Bg13", void 0), __decorate([n(cc.Node)], t.prototype, "Bg14", void 0), __decorate([n(cc.Node)], t.prototype, "Bg15", void 0), __decorate([n(cc.Node)], t.prototype, "Bg16", void 0), __decorate([n(cc.Node)], t.prototype, "Bg17", void 0), __decorate([n(cc.Node)], t.prototype, "Bg18", void 0), __decorate([n(cc.Node)], t.prototype, "Bg19", void 0), __decorate([n(cc.Node)], t.prototype, "Bg20", void 0), t = __decorate([i], t)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    BackGround: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1126dPOLmZJHK92Bhlqht4x", "BackGround"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = c.property,
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    var e = cc.find("Canvas/BackGound/Conter/Bg");
                    o.BgArray = e.children, this.schedule(function() {
                        cc.find("Canvas/NoAd");
                        window.h5api.canPlayAd(function(e) {
                            if (console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0);
                            else
                                for (var t = 0; t < o.BgArray.length; t++) 150 == o.BgArray[t].opacity && o.BgArray[t].removeAllChildren()
                        }.bind(this))
                    }, .12)
                }, t.prototype.SkinOK = function() {
                    if (cc.find("Canvas/Pop_Ups_Skins").active = !1, 2 === o.SkinsCount) {
                        var e = cc.sys.localStorage.getItem("Bg2");
                        this.BG(e, this.Bg2, "Bg2", 2)
                    } else if (3 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg3");
                        this.BG(e, this.Bg2, "Bg3", 3)
                    } else if (4 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg4");
                        this.BG(e, this.Bg2, "Bg4", 4)
                    } else if (5 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg5");
                        this.BG(e, this.Bg2, "Bg5", 5)
                    } else if (6 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg6");
                        this.BG(e, this.Bg2, "Bg6", 6)
                    } else if (7 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg7");
                        this.BG(e, this.Bg2, "Bg7", 7)
                    } else if (8 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg8");
                        this.BG(e, this.Bg2, "Bg8", 8)
                    } else if (9 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg9");
                        this.BG(e, this.Bg2, "Bg9", 9)
                    } else if (10 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg10");
                        this.BG(e, this.Bg2, "Bg10", 10)
                    } else if (11 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg11");
                        this.BG(e, this.Bg2, "Bg11", 11)
                    } else if (12 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg12");
                        this.BG(e, this.Bg2, "Bg12", 12)
                    } else if (13 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg13");
                        this.BG(e, this.Bg2, "Bg13", 13)
                    } else if (14 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg14");
                        this.BG(e, this.Bg2, "Bg14", 14)
                    } else if (15 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg15");
                        this.BG(e, this.Bg2, "Bg15", 15)
                    } else if (16 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg16");
                        this.BG(e, this.Bg2, "Bg16", 16)
                    } else if (17 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg17");
                        this.BG(e, this.Bg2, "Bg17", 17)
                    } else if (18 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg18");
                        this.BG(e, this.Bg2, "Bg18", 18)
                    } else if (19 === o.SkinsCount) {
                        e = cc.sys.localStorage.getItem("Bg19");
                        this.BG(e, this.Bg2, "Bg19", 19)
                    } else 20 === o.SkinsCount && (this.node.opacity = 255, this.node.removeAllChildren(), this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg2, this.BackGround.setContentSize(480, 800), cc.sys.localStorage.setItem("Bg20", 2), cc.sys.localStorage.setItem("GlobalBg", 20))
                }, t.prototype.SkinNo = function() {
                    cc.find("Canvas/Pop_Ups_Skins").active = !1
                }, t.prototype.BG = function(e, t, o, c) {
                    if (null === e) {
                        var i = cc.find("Canvas/NoAd");
                        window.h5api.canPlayAd(function(e) {
                            console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 || (i.active = !0)
                        }.bind(this)), window.h5api.playAd(function(e) {
                            if (1e4 === e.code) console.log("\u5f00\u59cb\u64ad\u653e");
                            else if (10001 === e.code) {
                                console.log("\u64ad\u653e\u7ed3\u675f"), cc.sys.localStorage.setItem(o, 2), cc.sys.localStorage.setItem("GlobalBg", c);
                                var t = cc.sys.localStorage.getItem("GlobalBg");
                                if (t)
                                    if (2 === Number(t)) {
                                        var i = cc.find("Canvas/BackGound/Conter/Bg/background2");
                                        i.opacity = 255, i.removeAllChildren()
                                    } else if (3 === Number(t)) {
                                    var n = cc.find("Canvas/BackGound/Conter/Bg/background3");
                                    n.opacity = 255, n.removeAllChildren()
                                } else if (4 === Number(t)) {
                                    var a = cc.find("Canvas/BackGound/Conter/Bg/background4");
                                    a.opacity = 255, a.removeAllChildren()
                                } else if (5 === Number(t)) {
                                    var s = cc.find("Canvas/BackGound/Conter/Bg/background5");
                                    s.opacity = 255, s.removeAllChildren()
                                } else if (6 === Number(t)) {
                                    var r = cc.find("Canvas/BackGound/Conter/Bg/background7");
                                    r.opacity = 255, r.removeAllChildren()
                                } else if (7 === Number(t)) {
                                    var l = cc.find("Canvas/BackGound/Conter/Bg/background8");
                                    l.opacity = 255, l.removeAllChildren()
                                } else if (8 === Number(t)) {
                                    var u = cc.find("Canvas/BackGound/Conter/Bg/background9");
                                    u.opacity = 255, u.removeAllChildren()
                                } else if (9 === Number(t)) {
                                    var d = cc.find("Canvas/BackGound/Conter/Bg/background10");
                                    d.opacity = 255, d.removeAllChildren()
                                } else if (10 === Number(t)) {
                                    var p = cc.find("Canvas/BackGound/Conter/Bg/background11");
                                    p.opacity = 255, p.removeAllChildren()
                                } else if (11 === Number(t)) {
                                    var v = cc.find("Canvas/BackGound/Conter/Bg/background14");
                                    v.opacity = 255, v.removeAllChildren()
                                } else if (12 === Number(t)) {
                                    var h = cc.find("Canvas/BackGound/Conter/Bg/background13");
                                    h.opacity = 255, h.removeAllChildren()
                                } else if (13 === Number(t)) {
                                    var y = cc.find("Canvas/BackGound/Conter/Bg/background18");
                                    y.opacity = 255, y.removeAllChildren()
                                } else if (14 === Number(t)) {
                                    var m = cc.find("Canvas/BackGound/Conter/Bg/background6");
                                    m.opacity = 255, m.removeAllChildren()
                                } else if (15 === Number(t)) {
                                    var f = cc.find("Canvas/BackGound/Conter/Bg/background12");
                                    f.opacity = 255, f.removeAllChildren()
                                } else if (16 === Number(t)) {
                                    var _ = cc.find("Canvas/BackGound/Conter/Bg/background16");
                                    _.opacity = 255, _.removeAllChildren()
                                } else if (17 === Number(t)) {
                                    var N = cc.find("Canvas/BackGound/Conter/Bg/background19");
                                    N.opacity = 255, N.removeAllChildren()
                                } else if (18 === Number(t)) {
                                    var g = cc.find("Canvas/BackGound/Conter/Bg/background17");
                                    g.opacity = 255, g.removeAllChildren()
                                } else if (19 === Number(t)) {
                                    var L = cc.find("Canvas/BackGound/Conter/Bg/background15");
                                    L.opacity = 255, L.removeAllChildren()
                                } else if (20 === Number(t)) {
                                    var C = cc.find("Canvas/BackGound/Conter/Bg/background1-1");
                                    C.opacity = 255, C.removeAllChildren()
                                }
                            } else console.log("\u5e7f\u544a\u5f02\u5e38")
                        })
                    } else 2 === Number(e) && (this.node.opacity = 255, this.node.removeAllChildren(), this.BackGround.getComponent(cc.Sprite).spriteFrame = t, this.BackGround.setContentSize(480, 800), cc.sys.localStorage.setItem(o, 2), cc.sys.localStorage.setItem("GlobalBg", c))
                }, t.prototype.showVideo = function() {
                    cc.find("Canvas/Pop_Ups_Skins").active = !0
                }, t.prototype.Bg2Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg2");
                    e && null != e ? this.BG(e, this.Bg2, "Bg2", 2) : window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 2)
                    }.bind(this))
                }, t.prototype.Bg3Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg3");
                    e && null != e ? this.BG(e, this.Bg2, "Bg3", 3) : window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 3)
                    }.bind(this))
                }, t.prototype.Bg4Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg4");
                    e && null != e ? this.BG(e, this.Bg2, "Bg4", 4) : window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 4)
                    }.bind(this))
                }, t.prototype.Bg5Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg5");
                    e && null != e ? this.BG(e, this.Bg2, "Bg5", 5) : window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 5)
                    }.bind(this))
                }, t.prototype.Bg6Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg6");
                    e && null != e ? this.BG(e, this.Bg2, "Bg6", 6) : window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 6)
                    }.bind(this))
                }, t.prototype.Bg7Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg7");
                    e && null != e ? this.BG(e, this.Bg2, "Bg7", 7) : window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 7)
                    }.bind(this))
                }, t.prototype.Bg8Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg8");
                    e && null != e ? this.BG(e, this.Bg2, "Bg8", 8) : window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 8)
                    }.bind(this))
                }, t.prototype.Bg9Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg9");
                    e && null != e ? this.BG(e, this.Bg2, "Bg9", 9) : window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 9)
                    }.bind(this))
                }, t.prototype.Bg10Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg10");
                    e && null != e ? this.BG(e, this.Bg2, "Bg10", 10) : e && null != e || window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 10)
                    }.bind(this))
                }, t.prototype.Bg11Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg11");
                    e && null != e ? this.BG(e, this.Bg2, "Bg11", 11) : e && null != e || window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 11)
                    }.bind(this))
                }, t.prototype.Bg12Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg12");
                    e && null != e ? this.BG(e, this.Bg2, "Bg12", 12) : e && null != e || window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 12)
                    }.bind(this))
                }, t.prototype.Bg13Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg13");
                    e && null != e ? this.BG(e, this.Bg2, "Bg13", 13) : e && null != e || window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 13)
                    }.bind(this))
                }, t.prototype.Bg14Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg14");
                    e && null != e ? this.BG(e, this.Bg2, "Bg14", 14) : e && null != e || window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 14)
                    }.bind(this))
                }, t.prototype.Bg15Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg15");
                    e && null != e ? this.BG(e, this.Bg2, "Bg15", 15) : e && null != e || window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 15)
                    }.bind(this))
                }, t.prototype.Bg16Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg16");
                    e && null != e ? this.BG(e, this.Bg2, "Bg16", 16) : e && null != e || window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 16)
                    }.bind(this))
                }, t.prototype.Bg17Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg17");
                    e && null != e ? this.BG(e, this.Bg2, "Bg17", 17) : e && null != e || window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 17)
                    }.bind(this))
                }, t.prototype.Bg18Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg18");
                    e && null != e ? this.BG(e, this.Bg2, "Bg18", 18) : e && null != e || window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 18)
                    }.bind(this))
                }, t.prototype.Bg19Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg19");
                    e && null != e ? this.BG(e, this.Bg2, "Bg19", 19) : e && null != e || window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 19)
                    }.bind(this))
                }, t.prototype.Bg20Button = function() {
                    var e = cc.sys.localStorage.getItem("Bg20");
                    e && null != e ? (this.node.opacity = 255, this.node.removeAllChildren(), this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg2, this.BackGround.setContentSize(480, 800), cc.sys.localStorage.setItem("Bg20", 2), cc.sys.localStorage.setItem("GlobalBg", 20)) : e && null != e || window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 && (this.showVideo(), o.SkinsCount = 20)
                    }.bind(this))
                }, t.prototype.start = function() {}, t.SkinsCount = 0, __decorate([n(cc.Node)], t.prototype, "BackGround", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg2", void 0), t = o = __decorate([i], t)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    Bg: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5ee224uvjpF+rxLpiZQROAS", "Bg"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = c.property,
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Bg = null, t.Bg2 = null, t.Bg3 = null, t.Bg4 = null, t.Bg5 = null, t.Bg6 = null, t.Bg7 = null, t.Bg8 = null, t.Bg9 = null, t.Bg10 = null, t.Bg11 = null, t.Bg12 = null, t.Bg13 = null, t.Bg14 = null, t.Bg15 = null, t.Bg16 = null, t.Bg17 = null, t.Bg18 = null, t.Bg19 = null, t.Bg20 = null, t
                }
                return __extends(t, e), t.prototype.BgLock = function(e) {
                    var t = new cc.Node;
                    e.addChild(t), t.addComponent(cc.Label).string = "Xem video\nmở khóa Skin", t.color = cc.color(0, 0, 0)
                }, t.prototype.onLoad = function() {
                    var e = cc.sys.localStorage.getItem("Bg2"),
                        t = cc.sys.localStorage.getItem("Bg3"),
                        o = cc.sys.localStorage.getItem("Bg4"),
                        c = cc.sys.localStorage.getItem("Bg5"),
                        i = cc.sys.localStorage.getItem("Bg6"),
                        n = cc.sys.localStorage.getItem("Bg7"),
                        a = cc.sys.localStorage.getItem("Bg8"),
                        s = cc.sys.localStorage.getItem("Bg9"),
                        r = cc.sys.localStorage.getItem("Bg10"),
                        l = cc.sys.localStorage.getItem("Bg11"),
                        u = cc.sys.localStorage.getItem("Bg12"),
                        d = cc.sys.localStorage.getItem("Bg13"),
                        p = cc.sys.localStorage.getItem("Bg14"),
                        v = cc.sys.localStorage.getItem("Bg15"),
                        h = cc.sys.localStorage.getItem("Bg16"),
                        y = cc.sys.localStorage.getItem("Bg17"),
                        m = cc.sys.localStorage.getItem("Bg18"),
                        f = cc.sys.localStorage.getItem("Bg19"),
                        _ = cc.sys.localStorage.getItem("Bg20");
                    2 === Number(e) ? (this.Bg2.opacity = 255, this.Bg2.removeAllChildren()) : this.BgLock(this.Bg2), 2 === Number(t) ? (this.Bg3.opacity = 255, this.Bg3.removeAllChildren()) : this.BgLock(this.Bg3), 2 === Number(o) ? (this.Bg4.opacity = 255, this.Bg4.removeAllChildren()) : this.BgLock(this.Bg4), 2 === Number(c) ? (this.Bg5.opacity = 255, this.Bg5.removeAllChildren()) : this.BgLock(this.Bg5), 2 === Number(i) ? (this.Bg6.opacity = 255, this.Bg6.removeAllChildren()) : this.BgLock(this.Bg6), 2 === Number(n) ? (this.Bg7.opacity = 255, this.Bg7.removeAllChildren()) : this.BgLock(this.Bg7), 2 === Number(a) ? (this.Bg8.opacity = 255, this.Bg8.removeAllChildren()) : this.BgLock(this.Bg8), 2 === Number(s) ? (this.Bg9.opacity = 255, this.Bg9.removeAllChildren()) : this.BgLock(this.Bg9), 2 === Number(r) ? (this.Bg10.opacity = 255, this.Bg10.removeAllChildren()) : this.BgLock(this.Bg10), 2 === Number(l) ? (this.Bg11.opacity = 255, this.Bg11.removeAllChildren()) : this.BgLock(this.Bg11), 2 === Number(u) ? (this.Bg12.opacity = 255, this.Bg12.removeAllChildren()) : this.BgLock(this.Bg12), 2 === Number(d) ? (this.Bg13.opacity = 255, this.Bg13.removeAllChildren()) : this.BgLock(this.Bg13), 2 === Number(p) ? (this.Bg14.opacity = 255, this.Bg14.removeAllChildren()) : this.BgLock(this.Bg14), 2 === Number(v) ? (this.Bg15.opacity = 255, this.Bg15.removeAllChildren()) : this.BgLock(this.Bg15), 2 === Number(h) ? (this.Bg16.opacity = 255, this.Bg16.removeAllChildren()) : this.BgLock(this.Bg16), 2 === Number(y) ? (this.Bg17.opacity = 255, this.Bg17.removeAllChildren()) : this.BgLock(this.Bg17), 2 === Number(m) ? (this.Bg18.opacity = 255, this.Bg18.removeAllChildren()) : this.BgLock(this.Bg18), 2 === Number(f) ? (this.Bg19.opacity = 255, this.Bg19.removeAllChildren()) : this.BgLock(this.Bg19), 2 === Number(_) && (this.Bg20.opacity = 255, this.Bg20.removeAllChildren())
                }, t.prototype.start = function() {}, __decorate([n(cc.Node)], t.prototype, "Bg", void 0), __decorate([n(cc.Node)], t.prototype, "Bg2", void 0), __decorate([n(cc.Node)], t.prototype, "Bg3", void 0), __decorate([n(cc.Node)], t.prototype, "Bg4", void 0), __decorate([n(cc.Node)], t.prototype, "Bg5", void 0), __decorate([n(cc.Node)], t.prototype, "Bg6", void 0), __decorate([n(cc.Node)], t.prototype, "Bg7", void 0), __decorate([n(cc.Node)], t.prototype, "Bg8", void 0), __decorate([n(cc.Node)], t.prototype, "Bg9", void 0), __decorate([n(cc.Node)], t.prototype, "Bg10", void 0), __decorate([n(cc.Node)], t.prototype, "Bg11", void 0), __decorate([n(cc.Node)], t.prototype, "Bg12", void 0), __decorate([n(cc.Node)], t.prototype, "Bg13", void 0), __decorate([n(cc.Node)], t.prototype, "Bg14", void 0), __decorate([n(cc.Node)], t.prototype, "Bg15", void 0), __decorate([n(cc.Node)], t.prototype, "Bg16", void 0), __decorate([n(cc.Node)], t.prototype, "Bg17", void 0), __decorate([n(cc.Node)], t.prototype, "Bg18", void 0), __decorate([n(cc.Node)], t.prototype, "Bg19", void 0), __decorate([n(cc.Node)], t.prototype, "Bg20", void 0), t = __decorate([i], t)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    ChooseInit: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bd759KsJDpGyLHodZk0uhUE", "ChooseInit"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = c.property,
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var o;
                return __extends(t, e), o = t, t.prototype.ButtonCall = function(e) {
                    o.LevelArray[e].opacity = 255, o.LevelArray[e].getComponent(cc.Button).interactable = !0
                }, t.prototype.MyButtonCall = function(e) {
                    for (var t = 1; t < e; t++) o.LevelArray[t].opacity = 255
                }, t.prototype.onLoad = function() {
                    var e = cc.sys.localStorage.getItem("UnlockLevel");
                    1 === Number(e) ? (cc.find("Canvas/ChooseLevel/Conter/level2").opacity = 255, cc.find("Canvas/ChooseLevel/Conter/level3").opacity = 255, cc.find("Canvas/ChooseLevel/Conter/level4").opacity = 255, cc.find("Canvas/ChooseLevel/Conter/level5").opacity = 255, this.schedule(function() {
                        o.LevelArray = this.ChooseLevel.children, this.c = cc.sys.localStorage.getItem("LevelPassNum"), 6 === Number(this.c) ? this.MyButtonCall(6) : 7 === Number(this.c) ? this.MyButtonCall(7) : 8 === Number(this.c) ? this.MyButtonCall(8) : 9 === Number(this.c) ? this.MyButtonCall(9) : 10 === Number(this.c) ? this.MyButtonCall(10) : 11 === Number(this.c) ? this.MyButtonCall(11) : 12 === Number(this.c) ? this.MyButtonCall(12) : 13 === Number(this.c) ? this.MyButtonCall(13) : 14 === Number(this.c) ? this.MyButtonCall(14) : 15 === Number(this.c) ? this.MyButtonCall(15) : 16 === Number(this.c) ? this.MyButtonCall(16) : 17 === Number(this.c) ? this.MyButtonCall(17) : 18 === Number(this.c) ? this.MyButtonCall(18) : 19 === Number(this.c) ? this.MyButtonCall(19) : 20 === Number(this.c) ? this.MyButtonCall(20) : 21 === Number(this.c) ? this.MyButtonCall(21) : 22 === Number(this.c) ? this.MyButtonCall(22) : 23 === Number(this.c) ? this.MyButtonCall(23) : 24 === Number(this.c) ? this.MyButtonCall(24) : 25 === Number(this.c) ? this.MyButtonCall(25) : 26 === Number(this.c) ? this.MyButtonCall(26) : 27 === Number(this.c) ? this.MyButtonCall(27) : 28 === Number(this.c) ? this.MyButtonCall(28) : 29 === Number(this.c) ? this.MyButtonCall(29) : 30 === Number(this.c) && this.MyButtonCall(30)
                    }, .12)) : this.schedule(function() {
                        o.LevelArray = this.ChooseLevel.children, this.c = cc.sys.localStorage.getItem("LevelPassNum"), 1 === Number(this.c) ? this.MyButtonCall(1) : 2 === Number(this.c) ? this.MyButtonCall(2) : 3 === Number(this.c) ? this.MyButtonCall(3) : 4 === Number(this.c) ? this.MyButtonCall(4) : 5 === Number(this.c) ? this.MyButtonCall(5) : 6 === Number(this.c) ? this.MyButtonCall(6) : 7 === Number(this.c) ? this.MyButtonCall(7) : 8 === Number(this.c) ? this.MyButtonCall(8) : 9 === Number(this.c) ? this.MyButtonCall(9) : 10 === Number(this.c) ? this.MyButtonCall(10) : 11 === Number(this.c) ? this.MyButtonCall(11) : 12 === Number(this.c) ? this.MyButtonCall(12) : 13 === Number(this.c) ? this.MyButtonCall(13) : 14 === Number(this.c) ? this.MyButtonCall(14) : 15 === Number(this.c) ? this.MyButtonCall(15) : 16 === Number(this.c) ? this.MyButtonCall(16) : 17 === Number(this.c) ? this.MyButtonCall(17) : 18 === Number(this.c) ? this.MyButtonCall(18) : 19 === Number(this.c) ? this.MyButtonCall(19) : 20 === Number(this.c) ? this.MyButtonCall(20) : 21 === Number(this.c) ? this.MyButtonCall(21) : 22 === Number(this.c) ? this.MyButtonCall(22) : 23 === Number(this.c) ? this.MyButtonCall(23) : 24 === Number(this.c) ? this.MyButtonCall(24) : 25 === Number(this.c) ? this.MyButtonCall(25) : 26 === Number(this.c) ? this.MyButtonCall(26) : 27 === Number(this.c) ? this.MyButtonCall(27) : 28 === Number(this.c) ? this.MyButtonCall(28) : 29 === Number(this.c) ? this.MyButtonCall(29) : 30 === Number(this.c) && this.MyButtonCall(30)
                    }, .12)
                }, t.prototype.start = function() {}, t.prototype.update = function(e) {}, __decorate([n(cc.Node)], t.prototype, "ChooseLevel", void 0), t = o = __decorate([i], t)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    ChooseLevel: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bf155eH96lKGrD6M6IDWViW", "ChooseLevel"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.LevelNum = 0, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.ChooseLevelBack = function() {
                    this.ChooseLevel.active = !1, this.InterFace.active = !0
                }, t.prototype.level = function(e, t) {
                    c.default.LevelNum = t, cc.find("Canvas/Level" + e).active = !0, this.ChooseLevel.active = !1
                }, t.prototype.LevelButton = function() {
                    c.default.LevelNum = this.LevelNum;
                    var e = this.node.opacity;
                    255 === e ? (c.default.LevelNum = this.LevelNum, cc.find("Canvas/Level" + this.LevelNum).active = !0, this.ChooseLevel.active = !1) : 100 === e && window.h5api.canPlayAd(function(e) {
                        if (console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0) {
                            var t = cc.find("Canvas/Pop_Ups_Level");
                            t && (t.active = !0)
                        }
                    }.bind(this))
                }, t.prototype.Pop_Ups_Ok = function() {
                    var e = cc.find("Canvas/Pop_Ups_Level");
                    e && (e.active = !1);
                    var t = cc.find("Canvas/NoAd");
                    window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 || (t.active = !0)
                    }.bind(this));
                    this.ChooseLevel, this.LevelNum;
                    window.h5api.playAd(function(e) {
                        if (1e4 === e.code) console.log("\u5f00\u59cb\u64ad\u653e");
                        else if (10001 === e.code) {
                            console.log("\u64ad\u653e\u7ed3\u675f"), console.log("\u65b0\u7684\u5173\u5361", c.default.LevelNum), cc.find("Canvas/ChooseLevel").active = !1;
                            var t = cc.find("Canvas/Level" + c.default.LevelNum);
                            t && (t.active = !0);
                            var o = cc.find("Canvas/ChooseLevel/Conter/level" + c.default.LevelNum);
                            o && (o.opacity = 255)
                        } else console.log("\u5e7f\u544a\u5f02\u5e38")
                    })
                }, t.prototype.Pop_Ups_No = function() {
                    var e = cc.find("Canvas/Pop_Ups_Level");
                    e && (e.active = !1)
                }, t.prototype.start = function() {}, __decorate([a()], t.prototype, "LevelNum", void 0), __decorate([a(cc.Node)], t.prototype, "ChooseLevel", void 0), __decorate([a(cc.Node)], t.prototype, "InterFace", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    DoubleGetKey: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "83dbdfEnI9HwZJ4SgogypOf", "DoubleGetKey"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = c.property,
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.KeyTwoOk = function() {
                    var e = cc.find("Canvas/NoAd");
                    window.h5api.canPlayAd(function(t) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", t.canPlayAd, "\u5269\u4f59\u6b21\u6570", t.remain), t.remain > 0 || (e.active = !0)
                    }.bind(this)), window.h5api.playAd(function(e) {
                        if (1e4 === e.code) console.log("\u5f00\u59cb\u64ad\u653e");
                        else if (10001 === e.code) {
                            var t = cc.sys.localStorage.getItem("DayNum");
                            if (1 === Number(t)) {
                                console.log("\u64ad\u653e\u7ed3\u675f");
                                var o = cc.sys.localStorage.getItem("KeyNum"),
                                    c = Number(o);
                                c += 2, cc.sys.localStorage.setItem("KeyNum", c)
                            } else if (2 === Number(t) || 3 === Number(t) || 4 === Number(t) || 5 === Number(t) || 6 === Number(t)) {
                                console.log("\u64ad\u653e\u7ed3\u675f");
                                o = cc.sys.localStorage.getItem("KeyNum"), c = Number(o);
                                c += 4, cc.sys.localStorage.setItem("KeyNum", c)
                            } else if (7 === Number(t)) {
                                console.log("\u64ad\u653e\u7ed3\u675f");
                                o = cc.sys.localStorage.getItem("KeyNum"), c = Number(o);
                                c += 6, cc.sys.localStorage.setItem("KeyNum", c)
                            }
                            var i = cc.sys.localStorage.getItem("UnlockLevel");
                            if (i && null !== i) cc.find("Canvas/Pop_Ups_DoubleKey").active = !1, cc.find("Canvas/DoubleVedio").active = !1, cc.find("Canvas/InterFaceFaterh").active = !0;
                            else cc.find("Canvas/Pop_Ups_DoubleKey").active = !1, cc.find("Canvas/DoubleVedio").active = !1, cc.find("Canvas/UnlockLevel").active = !0
                        } else console.log("\u5e7f\u544a\u5f02\u5e38")
                    })
                }, t.prototype.KeyTwoNo = function() {
                    cc.find("Canvas/Pop_Ups_DoubleKey").active = !1
                }, t.prototype.DoubleGetKeyNo = function() {
                    var e = cc.sys.localStorage.getItem("UnlockLevel");
                    e && null !== e ? (cc.find("Canvas/Pop_Ups_DoubleKey").active = !1, cc.find("Canvas/DoubleVedio").active = !1, cc.find("Canvas/InterFaceFaterh").active = !0) : (cc.find("Canvas/Pop_Ups_DoubleKey").active = !1, cc.find("Canvas/DoubleVedio").active = !1, cc.find("Canvas/UnlockLevel").active = !0)
                }, t.prototype.DoubleGetKey = function() {
                    cc.find("Canvas/Pop_Ups_DoubleKey").active = !0
                }, t.prototype.FiveLevelOk = function() {
                    (e = cc.find("Canvas/Pop_Ups_FiveLevel")).active = !1;
                    var e = cc.find("Canvas/NoAd");
                    window.h5api.canPlayAd(function(t) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", t.canPlayAd, "\u5269\u4f59\u6b21\u6570", t.remain), t.remain > 0 || (e.active = !0)
                    }.bind(this)), window.h5api.playAd(function(e) {
                        if (1e4 === e.code) console.log("\u5f00\u59cb\u64ad\u653e");
                        else if (10001 === e.code) {
                            console.log("\u64ad\u653e\u7ed3\u675f"), cc.find("Canvas/ChooseLevel/Conter/level2").opacity = 255, cc.find("Canvas/ChooseLevel/Conter/level3").opacity = 255, cc.find("Canvas/ChooseLevel/Conter/level4").opacity = 255, cc.find("Canvas/ChooseLevel/Conter/level5").opacity = 255, cc.find("Canvas/UnlockLevel").active = !1, cc.find("Canvas/InterFaceFaterh").active = !0, cc.sys.localStorage.setItem("UnlockLevel", 1), cc.sys.localStorage.setItem("LevelPassNum", 5)
                        } else console.log("\u5e7f\u544a\u5f02\u5e38")
                    })
                }, t.prototype.FiveLevelNo = function() {
                    cc.find("Canvas/Pop_Ups_FiveLevel").active = !1
                }, t.prototype.UnlockLevelOK = function() {
                    cc.find("Canvas/Pop_Ups_FiveLevel").active = !0
                }, t.prototype.UnlockLevelNo = function() {
                    cc.find("Canvas/UnlockLevel").active = !1, cc.find("Canvas/InterFaceFaterh").active = !0
                }, t.prototype.onLoad = function() {}, t.prototype.start = function() {}, __decorate([n(cc.Node)], t.prototype, "level2", void 0), __decorate([n(cc.Node)], t.prototype, "level3", void 0), __decorate([n(cc.Node)], t.prototype, "level4", void 0), __decorate([n(cc.Node)], t.prototype, "level5", void 0), t = __decorate([i], t)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    GetKeyFailure: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f7759f94hJNVp3X3ca+u5pX", "GetKeyFailure"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = (c.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.OK = function() {
                    var e = cc.find("Canvas/NoAd");
                    window.h5api.canPlayAd(function(t) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", t.canPlayAd, "\u5269\u4f59\u6b21\u6570", t.remain), t.remain > 0 || (e.active = !0)
                    }.bind(this)), window.h5api.playAd(function(e) {
                        if (1e4 === e.code) console.log("\u5f00\u59cb\u64ad\u653e");
                        else if (10001 === e.code) {
                            var t = cc.sys.localStorage.getItem("KeyNum"),
                                o = Number(t);
                            o += 1, cc.sys.localStorage.setItem("KeyNum", o)
                        } else console.log("\u5e7f\u544a\u5f02\u5e38")
                    })
                }, t.prototype.No = function() {
                    cc.find("Canvas/GetKeyScene").active = !1
                }, t.prototype.start = function() {}, t = __decorate([i], t)
            }(cc.Component));
        o.default = n, cc._RF.pop()
    }, {}],
    GetKey: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3d8ceiSwzZCRbcBXw7tA1Hb", "GetKey"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("./Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.KeyOK = function() {
                    (e = cc.find("Canvas/Pop_Ups_Key")).active = !1;
                    var e = cc.find("Canvas/NoAd");
                    window.h5api.canPlayAd(function(t) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", t.canPlayAd, "\u5269\u4f59\u6b21\u6570", t.remain), t.remain > 0 || (e.active = !0)
                    }.bind(this)), window.h5api.playAd(function(e) {
                        if (1e4 === e.code) console.log("\u5f00\u59cb\u64ad\u653e");
                        else if (10001 === e.code) {
                            console.log("\u64ad\u653e\u7ed3\u675f");
                            var t = cc.sys.localStorage.getItem("KeyNum"),
                                o = Number(t);
                            o += 1, console.log("\u83b7\u5f97\u94a5\u5319\u6210\u529f", o), cc.sys.localStorage.setItem("KeyNum", o)
                        } else console.log("\u5e7f\u544a\u5f02\u5e38")
                    })
                }, t.prototype.KeyNo = function() {
                    cc.find("Canvas/Pop_Ups_Key").active = !1
                }, t.prototype.GetKey = function() {
                    cc.find("Canvas/Pop_Ups_Key").active = !0
                }, t.prototype.NextOK = function() {
                    var e = cc.find("Canvas/NoAd");
                    window.h5api.canPlayAd(function(t) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", t.canPlayAd, "\u5269\u4f59\u6b21\u6570", t.remain), t.remain > 0 || (e.active = !0)
                    }.bind(this));
                    var t = cc.find("Canvas/Level" + c.default.LevelNum),
                        o = this.KeyNum,
                        i = c.default.LevelNum;
                    7 == (i += 1) ? i = 8 : 9 == i ? i = 10 : 17 == i || 18 == i ? i = 19 : 23 == i && (i = 24);
                    var n = cc.find("Canvas/Level" + i);
                    window.h5api.playAd(function(e) {
                        1e4 === e.code ? console.log("\u5f00\u59cb\u64ad\u653e") : 10001 === e.code ? (console.log("\u64ad\u653e\u7ed3\u675f"), console.log("\u5f53\u524d\u573a\u666f", t, "\u4e0b\u4e00\u5173\u63d0\u793a", o, "\u5168\u5c40\u5173\u5361\u6570", i, "\u4e0b\u4e00\u4e2a\u5173\u5361\u6570", n), t && (t.active = !1), o && (o.active = !1), n && (n.active = !0)) : (i -= 1, console.log("\u5e7f\u544a\u5f02\u5e38"))
                    }), c.default.LevelNum = i, (e = cc.find("Canvas/Pop_Ups_NextLevel")).active = !1
                }, t.prototype.NextNo = function() {
                    cc.find("Canvas/Pop_Ups_NextLevel").active = !1
                }, t.prototype.NextLevel = function() {
                    cc.find("Canvas/Pop_Ups_NextLevel").active = !0
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "KeyNum", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "./Init": "Init"
    }],
    HintButton: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "957f2TpVL1EEIsOTNKGzy26", "HintButton"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("./Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {}, t.prototype.myHint1Answer = function(e) {
                    this.Hint1.active = !1, this.Hint1Answer.active = !0, this.Hint1Answer.getComponent(cc.Label).string = e, o.HintCount = 1
                }, t.prototype.myHint2Answer = function(e) {
                    this.Hint2.active = !1, this.Hint2Answer.active = !0, this.Hint2Answer.getComponent(cc.Label).string = e, o.HintCount = 0
                }, t.prototype.Hint1Button = function() {
                    var e = cc.sys.localStorage.getItem("KeyNum");
                    if (Number(e) > 1 || 1 === Number(e)) {
                        e -= 1, cc.sys.localStorage.setItem("KeyNum", e);
                        var t = cc.sys.localStorage.getItem("KeyNum");
                        this.KeyNum.getComponent(cc.Label).string = t, 1 === c.default.LevelNum ? this.myHint1Answer("Hãy hỏi giá") : 2 === c.default.LevelNum ? this.myHint1Answer("Tìm ra chiếc điều khiển") : 3 === c.default.LevelNum ? this.myHint1Answer("Hãy cẩn thận màu\ncủa nút câu trả lời") : 4 === c.default.LevelNum ? this.myHint1Answer("Có những phần nước\nchỉ là ảo ảnh") : 5 === c.default.LevelNum ? this.myHint1Answer("Kéo MỌI THỨ vào lỗ đen") : 6 === c.default.LevelNum ? this.myHint1Answer("Cá sẽ lớn hơn khi\nchúng được ăn") : 7 === c.default.LevelNum ? this.myHint1Answer("Tôi muốn uống rượu Sâm panh") : 8 === c.default.LevelNum ? this.myHint1Answer("Hình như cô ấy\ndùng tóc giả") : 9 === c.default.LevelNum ? this.myHint1Answer("Việc của người soát vé!") : 10 === c.default.LevelNum ? this.myHint1Answer("TRÊN BÀN") : 11 === c.default.LevelNum ? this.myHint1Answer("Hãy nhìn kỹ phương trình") : 12 === c.default.LevelNum ? this.myHint1Answer("Hãy hỏi giá") : 13 === c.default.LevelNum ? this.myHint1Answer("Bằng tay") : 14 === c.default.LevelNum ? this.myHint1Answer("Bấm nhiệt kế bằng tay") : 15 === c.default.LevelNum ? this.myHint1Answer("Loài dơi hoạt động\nvào ban đêm") : 16 === c.default.LevelNum ? this.myHint1Answer("Đường viền cổ áo") : 17 === c.default.LevelNum ? this.myHint1Answer("Làm con voi nhỏ đi") : 18 === c.default.LevelNum ? this.myHint1Answer("11 = 5 + 6") : 20 === c.default.LevelNum ? this.myHint1Answer("Giờ bắc Kinh") : 21 === c.default.LevelNum ? this.myHint1Answer("Không cần chìa khóa") : 22 === c.default.LevelNum ? this.myHint1Answer("Trộn màu Cam") : 23 === c.default.LevelNum ? this.myHint1Answer("Vòng kín") : 24 === c.default.LevelNum ? this.myHint1Answer("Tất cả đều giống nhau khi trống rỗng") : 25 === c.default.LevelNum ? this.myHint1Answer("Tìm mẫu?") : 26 === c.default.LevelNum ? this.myHint1Answer("Xương!") : 27 === c.default.LevelNum ? this.myHint1Answer("Hãy tạo nút TIẾP THEO") : 28 === c.default.LevelNum ? this.myHint1Answer("Mũi") : 29 === c.default.LevelNum ? this.myHint1Answer("Chú vịt màu vàng trốn trong góc") : 30 === c.default.LevelNum && this.myHint1Answer("Đừng để những con số đánh lừa!")
                    }
                }, t.prototype.Hint2Button = function() {
                    if (1 === o.HintCount) {
                        var e = cc.sys.localStorage.getItem("KeyNum");
                        if (Number(e) > 1 || 1 === Number(e)) {
                            e -= 1, cc.sys.localStorage.setItem("KeyNum", e);
                            var t = cc.sys.localStorage.getItem("KeyNum");
                            this.KeyNum.getComponent(cc.Label).string = t, 1 === c.default.LevelNum ? this.myHint2Answer("Bí ngô không phải trái cây") : 2 === c.default.LevelNum ? this.myHint2Answer("Loại bỏ MỌI THỨ") : 3 === c.default.LevelNum ? this.myHint2Answer("Là màu Trắng") : 4 === c.default.LevelNum ? this.myHint2Answer("Nước có thể loại bỏ") : 5 === c.default.LevelNum ? this.myHint2Answer("Bao gồm cả tiêu đề") : 6 === c.default.LevelNum ? this.myHint2Answer("Cá lớn nuốt cá nhỏ") : 7 === c.default.LevelNum ? this.myHint2Answer("Hãy lắc điện thoại của bạn") : 8 === c.default.LevelNum ? this.myHint2Answer("Hãy tháo bộ tóc giả") : 9 === c.default.LevelNum ? this.myHint2Answer("Xé vẽ bằng 2 ngón tay") : 10 === c.default.LevelNum ? this.myHint2Answer("Không có bảng, vì vậy là 0") : 11 === c.default.LevelNum ? this.myHint2Answer("1=10,10=1") : 12 === c.default.LevelNum ? this.myHint2Answer("Bấm vào TRÁI CÂY trong CÂU HỎI") : 13 === c.default.LevelNum ? this.myHint2Answer("Hãy lau xe bằng tay") : 14 === c.default.LevelNum ? this.myHint2Answer("Nhấn thêm 1 lần nữa") : 15 === c.default.LevelNum ? this.myHint2Answer("Di chuyển mặt trời\nra khỏi màn hình") : 16 === c.default.LevelNum ? this.myHint2Answer("8") : 17 === c.default.LevelNum ? this.myHint2Answer("Thu nhỏ con gà bằng 2 ngón tay") : 18 === c.default.LevelNum ? this.myHint2Answer("Điện thoại di động bị đảo ngược") : 20 === c.default.LevelNum ? this.myHint2Answer("Thời gian hiện tại\ntrên điện thoại") : 21 === c.default.LevelNum ? this.myHint2Answer("Nhấn và giữ phần\ndấu vân tay trên cửa") : 22 === c.default.LevelNum ? this.myHint2Answer("Kéo màu vàng đỏ\nvào bảng màu") : 23 === c.default.LevelNum ? this.myHint2Answer("Nhấn và giữ bằng ngón tay\nKết thúc") : 24 === c.default.LevelNum ? this.myHint2Answer("Thử đảo ngược điện thoại") : 25 === c.default.LevelNum ? this.myHint2Answer("Đó là 1 chiếc ba lô") : 26 === c.default.LevelNum ? this.myHint2Answer("Kéo XƯƠNG\nvào miệng con chó") : 27 === c.default.LevelNum ? this.myHint2Answer("Kéo TIẾP THEO\nvào nút trống") : 28 === c.default.LevelNum ? this.myHint2Answer("Giữ mũi cu Shin\ntrong vài giây") : 29 === c.default.LevelNum ? this.myHint2Answer("Kéo vòng bơi ra khỏi màn hình bên trái") : 30 === c.default.LevelNum && this.myHint2Answer("Bấm 10 lần")
                        }
                    }
                }, t.prototype.start = function() {}, t.HintCount = 0, __decorate([a(cc.Node)], t.prototype, "Hint1", void 0), __decorate([a(cc.Node)], t.prototype, "Hint2", void 0), __decorate([a(cc.Node)], t.prototype, "Hint1Answer", void 0), __decorate([a(cc.Node)], t.prototype, "Hint2Answer", void 0), __decorate([a(cc.Node)], t.prototype, "KeyNum", void 0), t = o = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "./Init": "Init"
    }],
    Init: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1320bc/x5pEkqKT/mS/566a", "Init"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = c.property,
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.KeyNum = null, t.BackGround = null, t.Bg2 = null, t.Bg3 = null, t.Bg4 = null, t.Bg5 = null, t.Bg6 = null, t.Bg7 = null, t.Bg8 = null, t.Bg9 = null, t.Bg10 = null, t.Bg11 = null, t.Bg12 = null, t.Bg13 = null, t.Bg14 = null, t.Bg15 = null, t.Bg16 = null, t.Bg17 = null, t.Bg18 = null, t.Bg19 = null, t.Bg20 = null, t
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    var e = (new Date).getDay(),
                        t = cc.sys.localStorage.getItem("beforeNum");
                    (Number(e) > Number(t) || Number(e) < Number(t) || null === t) && (cc.find("Canvas/SingIn").active = !0);
                    var c = cc.sys.localStorage.getItem("LevelPassNum"),
                        i = cc.sys.localStorage.getItem("KeyNum");
                    if (c && null !== c || (o.levelPassNum = 0, cc.sys.localStorage.setItem("LevelPassNum", o.levelPassNum)), i && "undefined" !== i && null !== i) this.KeyNum.getComponent(cc.Label).string = i;
                    else {
                        o.KeyNum = 3, cc.sys.localStorage.setItem("KeyNum", o.KeyNum);
                        var n = cc.sys.localStorage.getItem("KeyNum");
                        this.KeyNum.getComponent(cc.Label).string = n
                    }
                }, t.prototype.Bg = function() {
                    var e = cc.sys.localStorage.getItem("GlobalBg");
                    BG && null !== e ? 2 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg2, this.BackGround.setContentSize(480, 800)) : 3 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg3, this.BackGround.setContentSize(480, 800)) : 4 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg4, this.BackGround.setContentSize(480, 800)) : 5 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg5, this.BackGround.setContentSize(480, 800)) : 6 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg6, this.BackGround.setContentSize(480, 800)) : 7 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg7, this.BackGround.setContentSize(480, 800)) : 8 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg8, this.BackGround.setContentSize(480, 800)) : 9 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg9, this.BackGround.setContentSize(480, 800)) : 10 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg10, this.BackGround.setContentSize(480, 800)) : 11 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg11, this.BackGround.setContentSize(480, 800)) : 12 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg12, this.BackGround.setContentSize(480, 800)) : 13 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg13, this.BackGround.setContentSize(480, 800)) : 14 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg14, this.BackGround.setContentSize(480, 800)) : 15 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg15, this.BackGround.setContentSize(480, 800)) : 16 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg16, this.BackGround.setContentSize(480, 800)) : 17 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg17, this.BackGround.setContentSize(480, 800)) : 18 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg18, this.BackGround.setContentSize(480, 800)) : 19 === Number(e) ? (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg19, this.BackGround.setContentSize(480, 800)) : 20 === Number(e) && (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg20, this.BackGround.setContentSize(480, 800)) : (this.BackGround.getComponent(cc.Sprite).spriteFrame = this.Bg20, this.BackGround.setContentSize(480, 800))
                }, t.prototype.start = function() {}, t.LevelNum = 0, t.levelPassNum = 0, t.KeyNum = 0, __decorate([n(cc.Node)], t.prototype, "KeyNum", void 0), __decorate([n(cc.Node)], t.prototype, "BackGround", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg2", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg3", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg4", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg5", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg6", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg7", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg8", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg9", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg10", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg11", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg12", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg13", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg14", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg15", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg16", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg17", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg18", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg19", void 0), __decorate([n(cc.SpriteFrame)], t.prototype, "Bg20", void 0), t = o = __decorate([i], t)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    InterFaceButton: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5780dVEFGlNCKp9qkRzhlR4", "InterFaceButton"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("./Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.sy = null, t.hp = null, t.zd = null, t.x0 = null, t.x1 = null, t.x2 = null, t.x3 = null, t.x4 = null, t.InterFaceFather = null, t.MyBackGround = null, t.WinScene = null, t.Failure = null, t.Level1 = null, t.MyChooseLeve = null, t.pf = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.setCount = 0
                }, t.prototype.start = function() {}, t.prototype.setCallFunc = function() {
                    this.setCount++, 1 === this.setCount ? (this.sy.active = !0, this.hp.active = !0, this.zd.active = !0) : 2 === this.setCount && (this.sy.active = !1, this.hp.active = !1, this.zd.active = !1, this.setCount = 0)
                }, t.prototype.ChooseLevel = function() {
                    this.InterFaceFather.active = !1, this.MyChooseLeve.active = !0
                }, t.prototype.startGame = function() {
                    var e = cc.sys.localStorage.getItem("LevelPassNum");
                    if (console.log("\u5173\u5361\u6570", e), e && null !== e && 0 !== Number(e)) {
                        this.InterFaceFather.active = !1;
                        var t = cc.find("Canvas/Level" + Number(e));
                        console.log("2222"), t && (t.active = !0)
                    } else console.log("1111"), this.InterFaceFather.active = !1, this.Level1.active = !0, c.default.LevelNum = 1, c.default.levelPassNum = 1
                }, t.prototype.BackGround = function() {
                    this.InterFaceFather.active = !1, this.MyBackGround.active = !0
                }, t.prototype.levelFruit = function(e) {
                    e.active = !0;
                    var t = cc.callFunc(function() {
                            e.active = !1, this.Level1.active = !1, this.Failure.active = !0
                        }, this),
                        o = cc.sequence(cc.delayTime(1), t);
                    this.node.runAction(o)
                }, t.prototype.WatermeLon = function() {
                    this.levelFruit(this.x0)
                }, t.prototype.Mango = function() {
                    this.x1.active = !0;
                    var e = cc.callFunc(function() {
                            this.x1.active = !1, this.Level1.active = !1, this.WinScene.active = !0, c.default.LevelNum = 2, c.default.levelPassNum = 2
                        }, this),
                        t = cc.sequence(cc.delayTime(1), e);
                    this.node.runAction(t)
                }, t.prototype.peach = function() {
                    this.levelFruit(this.x2)
                }, t.prototype.Banana = function() {
                    this.levelFruit(this.x3)
                }, t.prototype.pumpkin = function() {
                    this.levelFruit(this.x4)
                }, __decorate([a(cc.Node)], t.prototype, "sy", void 0), __decorate([a(cc.Node)], t.prototype, "hp", void 0), __decorate([a(cc.Node)], t.prototype, "zd", void 0), __decorate([a(cc.Node)], t.prototype, "x0", void 0), __decorate([a(cc.Node)], t.prototype, "x1", void 0), __decorate([a(cc.Node)], t.prototype, "x2", void 0), __decorate([a(cc.Node)], t.prototype, "x3", void 0), __decorate([a(cc.Node)], t.prototype, "x4", void 0), __decorate([a(cc.Node)], t.prototype, "InterFaceFather", void 0), __decorate([a(cc.Node)], t.prototype, "MyBackGround", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "Failure", void 0), __decorate([a(cc.Node)], t.prototype, "Level1", void 0), __decorate([a(cc.Node)], t.prototype, "MyChooseLeve", void 0), __decorate([a(cc.Node)], t.prototype, "pf", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "./Init": "Init"
    }],
    KeyInit: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "2fc88oFGKFMdINmPwulbsGL", "KeyInit"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = c.property,
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.prototype.update = function(e) {
                    var t = cc.sys.localStorage.getItem("KeyNum");
                    this.KeyNum.getComponent(cc.Label).string = t
                }, __decorate([n(cc.Node)], t.prototype, "KeyNum", void 0), t = __decorate([i], t)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    Level10Button: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c5b07WzQiZF77Wx4zE82+pv", "Level10Button"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Num = null, t.Yes = null, t.No = null, t.WinScene = null, t.FailureScene = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 10
                }, t.prototype.left = function() {
                    var e = this.Num.getComponent(cc.Label).string,
                        t = Number(e);
                    t--, this.Num.getComponent(cc.Label).string = String(t)
                }, t.prototype.right = function() {
                    var e = this.Num.getComponent(cc.Label).string,
                        t = Number(e);
                    t++, this.Num.getComponent(cc.Label).string = String(t)
                }, t.prototype.clean = function() {
                    this.Num.getComponent(cc.Label).string = "0"
                }, t.prototype.Ok = function() {
                    var e = this.Num.getComponent(cc.Label).string;
                    if (0 === Number(e)) {
                        this.Yes.active = !0;
                        var t = cc.callFunc(function() {
                                this.Yes.active = !1, this.Num.getComponent(cc.Label).string = "1", cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 11, c.default.levelPassNum = 11
                            }, this),
                            o = cc.sequence(cc.delayTime(1), t);
                        this.node.runAction(o)
                    } else {
                        this.No.active = !0;
                        t = cc.callFunc(function() {
                            this.No.active = !1, this.Num.getComponent(cc.Label).string = "1", cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.FailureScene.active = !0
                        }, this), o = cc.sequence(cc.delayTime(1), t);
                        this.node.runAction(o)
                    }
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "Num", void 0), __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "No", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "FailureScene", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level11Button: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "39f65uit3NLxZ+/UDg1t8SA", "Level11Button"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.YesOrNo = null, t.FailureScene = null, t.WinScene = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 11
                }, t.prototype.failure = function(e) {
                    this.YesOrNo.active = !0;
                    var t = cc.callFunc(function() {
                            this.YesOrNo.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, e.active = !0
                        }, this),
                        o = cc.sequence(cc.delayTime(1), t);
                    this.node.runAction(o)
                }, t.prototype.one = function() {
                    this.YesOrNo.active = !0;
                    var e = cc.callFunc(function() {
                            this.YesOrNo.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 12, c.default.levelPassNum = 12
                        }, this),
                        t = cc.sequence(cc.delayTime(1), e);
                    this.node.runAction(t)
                }, t.prototype.Two = function() {
                    this.failure(this.FailureScene)
                }, t.prototype.three = function() {
                    this.failure(this.FailureScene)
                }, t.prototype.four = function() {
                    this.failure(this.FailureScene)
                }, t.prototype.five = function() {
                    this.failure(this.FailureScene)
                }, t.prototype.six = function() {
                    this.failure(this.FailureScene)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "YesOrNo", void 0), __decorate([a(cc.Node)], t.prototype, "FailureScene", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level12Button: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ec464N0syhNi6wN2KyHEMdK", "Level12Button"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.YesOrNo = null, t.FailureScene = null, t.WinScene = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 12
                }, t.prototype.failure = function(e) {
                    this.YesOrNo.active = !0;
                    var t = cc.callFunc(function() {
                            this.YesOrNo.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, e.active = !0
                        }, this),
                        o = cc.sequence(cc.delayTime(1), t);
                    this.node.runAction(o)
                }, t.prototype.one = function() {
                    this.failure(this.FailureScene)
                }, t.prototype.two = function() {
                    this.failure(this.FailureScene)
                }, t.prototype.three = function() {
                    this.failure(this.FailureScene)
                }, t.prototype.four = function() {
                    this.failure(this.FailureScene)
                }, t.prototype.five = function() {
                    this.failure(this.FailureScene)
                }, t.prototype.six = function() {
                    this.YesOrNo.active = !0;
                    var e = cc.callFunc(function() {
                            this.YesOrNo.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 13, c.default.levelPassNum = 13
                        }, this),
                        t = cc.sequence(cc.delayTime(1), e);
                    this.node.runAction(t)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "YesOrNo", void 0), __decorate([a(cc.Node)], t.prototype, "FailureScene", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level13Touch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "251bdpa5nRC46+OmJbjeXah", "Level13Touch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.car1 = null, t.car2 = null, t.WinScene = null, t.Yes = null, t
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    c.default.LevelNum = 13, this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                        var t = e.getLocation();
                        if (t = this.node.convertToNodeSpaceAR(t), o.level13Count++, 5 === o.level13Count) {
                            o.level13Count = 0, this.car1.opacity = 0, this.car2.active = !0, this.Yes.active = !0;
                            var i = cc.callFunc(function() {
                                    cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, this.Yes.active = !1, this.car2.active = !1, this.car1.opacity = 255, c.default.LevelNum = 14, c.default.levelPassNum = 14
                                }, this),
                                n = cc.sequence(cc.delayTime(1), i);
                            this.node.runAction(n)
                        }
                    }, this)
                }, t.prototype.start = function() {}, t.level13Count = 0, __decorate([a(cc.Node)], t.prototype, "car1", void 0), __decorate([a(cc.Node)], t.prototype, "car2", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "Yes", void 0), t = o = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level14Button: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "90c43r1QNhAspyeIHauz2x1", "Level14Button"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.WinScene = null, t.YesOrNo = null, t.Failure = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 14
                }, t.prototype.failure = function(e) {
                    this.YesOrNo.active = !0;
                    var t = cc.callFunc(function() {
                            this.YesOrNo.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, e.active = !0
                        }, this),
                        o = cc.sequence(cc.delayTime(1), t);
                    this.node.runAction(o)
                }, t.prototype.A = function() {
                    this.failure(this.Failure)
                }, t.prototype.B = function() {
                    this.failure(this.Failure)
                }, t.prototype.C = function() {
                    this.failure(this.Failure)
                }, t.prototype.D = function() {
                    this.failure(this.Failure)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "YesOrNo", void 0), __decorate([a(cc.Node)], t.prototype, "Failure", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level14Touch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d8066xVN39GVI4mlXy8XOlv", "Level14Touch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.WinScene = null, t.Yes = null, t.W1 = null, t.W2 = null, t.startTime = 0, t.endTime = 0, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 14, this.node.on("touchstart", function(e) {
                        this.startTime = (new Date).getTime()
                    }, this), this.node.on("touchend", function(e) {
                        if (this.endTime = (new Date).getTime(), this.endTime - this.startTime > 500) {
                            this.Yes.active = !0, this.W1.opacity = 0, this.W2.active = !0;
                            var t = cc.callFunc(function() {
                                    cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, this.W1.opacity = 255, this.W2.active = !1, this.Yes.active = !1, c.default.LevelNum = 15, c.default.levelPassNum = 15
                                }, this),
                                o = cc.sequence(cc.delayTime(1), t);
                            this.node.runAction(o)
                        }
                    }, this)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "W1", void 0), __decorate([a(cc.Node)], t.prototype, "W2", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level15Touch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8c892ofECVJ8Y5uDA6Qf6+n", "Level15Touch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Yes = null, t.WinScene = null, t.moon = null, t.bat1 = null, t.bat2 = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 15, this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x;
                        var o = this.node.position;
                        if (o.x < -300 || o.x > 300) {
                            this.Yes.active = !0, this.node.opacity = 0, this.moon.active = !0, this.bat1.active = !1, this.bat2.active = !0;
                            var i = cc.callFunc(function() {
                                    cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 16, c.default.levelPassNum = 16, this.Yes.active = !1, this.moon.active = !1, this.bat1.active = !0, this.bat2.active = !1, this.node.opacity = 255, this.node.setPosition(195, 24)
                                }, this),
                                n = cc.sequence(cc.delayTime(1), i);
                            this.node.runAction(n)
                        }
                    }, this)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "moon", void 0), __decorate([a(cc.Node)], t.prototype, "bat1", void 0), __decorate([a(cc.Node)], t.prototype, "bat2", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level16Button: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d895cpvGP5FzbVrrlxyyEZw", "Level16Button"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.X = null, t.Num = null, t.Yes = null, t.No = null, t.WinScene = null, t.FailureScene = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 16
                }, t.prototype.left = function() {
                    var e = this.Num.getComponent(cc.Label).string,
                        t = Number(e);
                    t--, this.Num.getComponent(cc.Label).string = String(t)
                }, t.prototype.right = function() {
                    var e = this.Num.getComponent(cc.Label).string,
                        t = Number(e);
                    t++, this.Num.getComponent(cc.Label).string = String(t)
                }, t.prototype.clean = function() {
                    this.Num.getComponent(cc.Label).string = "0"
                }, t.prototype.Ok = function() {
                    var e = this.Num.getComponent(cc.Label).string;
                    if (8 === Number(e)) {
                        this.Yes.active = !0, this.X.active = !0;
                        var t = cc.callFunc(function() {
                                this.Yes.active = !1, this.Num.getComponent(cc.Label).string = "1", cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.X.active = !1, this.WinScene.active = !0, c.default.LevelNum = 19, c.default.levelPassNum = 19
                            }, this),
                            o = cc.sequence(cc.delayTime(1), t);
                        this.node.runAction(o)
                    } else {
                        this.No.active = !0;
                        t = cc.callFunc(function() {
                            this.Num.getComponent(cc.Label).string = "1", cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.No.active = !1, this.FailureScene.active = !0
                        }, this), o = cc.sequence(cc.delayTime(1), t);
                        this.node.runAction(o)
                    }
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "X", void 0), __decorate([a(cc.Node)], t.prototype, "Num", void 0), __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "No", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "FailureScene", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level17Touch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "45d72sjontLW4bA5UX2fxwX", "Level17Touch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.YesOrNo = null, t.FailureScene = null, t.Elephant = null, t.WinScene = null, t.Myrefrigerator = null, t.Collider = 0, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 17, this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x;
                        var o = e.getID();
                        console.log("\u89e6\u6478\u70b9", o), 1 === o && (this.Elephant.setScale(.3, .3), this.Collider = 1)
                    }, this), cc.director.getCollisionManager().enabled = !0
                }, t.prototype.onCollisionEnter = function(e, t) {
                    if (1 === this.Collider && 0 === e.tag) {
                        this.YesOrNo.active = !0, this.Elephant.opacity = 0;
                        var o = cc.callFunc(function() {
                                this.YesOrNo.active = !1, this.Elephant.opacity = 255, this.Elephant.setScale(1, 1), this.Elephant.setPosition(78, -575), this.Myrefrigerator.setPosition(-195, -257), cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 18, c.default.levelPassNum = 18
                            }, this),
                            i = cc.sequence(cc.delayTime(1), o);
                        this.node.runAction(i)
                    }
                }, t.prototype.refrigerator = function() {
                    this.YesOrNo.active = !0;
                    var e = cc.callFunc(function() {
                            cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.YesOrNo.active = !1, this.FailureScene.active = !0
                        }, this),
                        t = cc.sequence(cc.delayTime(1), e);
                    this.node.runAction(t)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "YesOrNo", void 0), __decorate([a(cc.Node)], t.prototype, "FailureScene", void 0), __decorate([a(cc.Node)], t.prototype, "Elephant", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "Myrefrigerator", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level18: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5a995oEFgRIhaP0kLVRP5rN", "Level18"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 18, cc.systemEvent.setAccelerometerEnabled(!0), cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this)
                }, t.prototype.onDeviceMotionEvent = function(e) {
                    if (1 == e.acc.y.toFixed(0)) {
                        cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
                        var t = cc.callFunc(function() {
                                this.Yes.active = !0
                            }, this),
                            o = cc.sequence(cc.delayTime(1), t);
                        this.node.runAction(o);
                        t = cc.callFunc(function() {
                            this.Yes.active = !1, cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this), cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 19, c.default.levelPassNum = 19
                        }, this), o = cc.sequence(cc.delayTime(1.6), t);
                        this.node.runAction(o)
                    }
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level19Button: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "6cb9boGT4JE5pqkh+RD7bNs", "Level19Button"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 19
                }, t.prototype.level19Pass = function() {
                    this.Room1.active = !1, this.Room2.active = !0, this.Yes.active = !0;
                    var e = cc.callFunc(function() {
                            this.Yes.active = !1, this.Room1.active = !0, this.Room2.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 20, c.default.levelPassNum = 20
                        }, this),
                        t = cc.sequence(cc.delayTime(1), e);
                    this.node.runAction(t)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "Room1", void 0), __decorate([a(cc.Node)], t.prototype, "Room2", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level20Button: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "779e5GbbTtHKp5fWdxcwuCk", "Level20Button"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.HourNum = null, t.MinNum = null, t.Yes = null, t.No = null, t.WinScene = null, t.failureScene = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 20, this.system_Hour = 0, this.system_Min = 0, this.schedule(function() {
                        this.mydate = new Date, this.system_Hour = this.mydate.getHours(), this.system_Min = this.mydate.getMinutes(), console.log("\u5206\u949f", this.system_Min)
                    }, .5)
                }, t.prototype.Hour_add = function() {
                    var e = this.HourNum.getComponent(cc.Label).string,
                        t = Number(e);
                    24 === t ? this.HourNum.getComponent(cc.Label).string = "0" : (t += 1, this.HourNum.getComponent(cc.Label).string = String(t))
                }, t.prototype.Hour_sub = function() {
                    var e = this.HourNum.getComponent(cc.Label).string,
                        t = Number(e);
                    0 === t ? this.HourNum.getComponent(cc.Label).string = "24" : (t--, this.HourNum.getComponent(cc.Label).string = String(t))
                }, t.prototype.Min_add = function() {
                    var e = this.MinNum.getComponent(cc.Label).string,
                        t = Number(e);
                    60 === t ? this.MinNum.getComponent(cc.Label).string = "0" : (t += 1, this.MinNum.getComponent(cc.Label).string = String(t))
                }, t.prototype.Min_sub = function() {
                    var e = this.MinNum.getComponent(cc.Label).string,
                        t = Number(e);
                    0 === t ? this.MinNum.getComponent(cc.Label).string = "60" : (t--, this.MinNum.getComponent(cc.Label).string = String(t))
                }, t.prototype.Clean = function() {
                    this.HourNum.getComponent(cc.Label).string = "0", this.MinNum.getComponent(cc.Label).string = "0"
                }, t.prototype.confirm = function() {
                    var e = this.HourNum.getComponent(cc.Label).string,
                        t = this.MinNum.getComponent(cc.Label).string;
                    if (console.log("\u5c0f\u65f6", this.system_Hour, "\u5206\u949f", this.system_Min), Number(e) === this.system_Hour && Number(t) === this.system_Min) {
                        this.Yes.active = !0;
                        var o = cc.callFunc(function() {
                                this.Yes.active = !1, this.HourNum.getComponent(cc.Label).string = "0", this.MinNum.getComponent(cc.Label).string = "0", cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 21, c.default.levelPassNum = 21
                            }, this),
                            i = cc.sequence(cc.delayTime(2), o);
                        this.node.runAction(i)
                    } else {
                        this.No.active = !0;
                        o = cc.callFunc(function() {
                            this.No.active = !1, this.HourNum.getComponent(cc.Label).string = "0", this.MinNum.getComponent(cc.Label).string = "0", cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.failureScene.active = !0
                        }, this), i = cc.sequence(cc.delayTime(2), o);
                        this.node.runAction(i)
                    }
                }, t.prototype.start = function() {}, t.prototype.update = function(e) {}, __decorate([a(cc.Node)], t.prototype, "HourNum", void 0), __decorate([a(cc.Node)], t.prototype, "MinNum", void 0), __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "No", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "failureScene", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level21Touch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "23e79l69alDj6TA7wmEigFh", "Level21Touch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.startTime = 0, t.endTime = 0, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 21, this.node.on("touchstart", function() {
                        this.startTime = (new Date).getTime()
                    }, this), this.node.on("touchend", function() {
                        if (this.endTime = (new Date).getTime(), this.endTime - this.startTime > 500) {
                            this.door1.active = !1, this.door2.active = !0, this.Yes.active = !0;
                            var e = cc.callFunc(function() {
                                    this.Yes.active = !1, this.door1.active = !0, this.door2.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 22, c.default.levelPassNum = 22
                                }, this),
                                t = cc.sequence(cc.delayTime(1), e);
                            this.node.runAction(t)
                        }
                    }, this)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "door1", void 0), __decorate([a(cc.Node)], t.prototype, "door2", void 0), __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level22Touch1: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "19d16RLEgdDzZ79WYpR1O2R", "Level22Touch1"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = e("./Level22Touch2"),
            n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            r = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.yellow = null, t.Yes = null, t.WinScene = null, t.myYellow = null, t.Huang = null, t.Red = null, t
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    c.default.LevelNum = 22, this.node.on("touchmove", function(e) {
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x
                    }, this), cc.director.getCollisionManager().enabled = !0
                }, t.prototype.onCollisionEnter = function(e, t) {
                    if (2 === e.tag && (o.level22One++, 1 === o.level22One && o.Level22count++, 2 === o.Level22count)) {
                        this.yellow.active = !0, this.Yes.active = !0, this.node.opacity = 0, this.myYellow.active = !1;
                        var n = cc.callFunc(function() {
                                this.Yes.active = !1, this.yellow.active = !1, this.node.opacity = 255, this.Red.active = !0, this.Red.setPosition(-149, -57), this.Huang.active = !0, this.Huang.setPosition(115, -426), o.Level22count = 0, i.default.level22Two = 0, o.level22One = 0, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 25, c.default.levelPassNum = 25
                            }, this),
                            a = cc.sequence(cc.delayTime(1), n);
                        this.node.runAction(a)
                    }
                }, t.prototype.start = function() {}, t.Level22count = 0, t.level22One = 0, __decorate([s(cc.Node)], t.prototype, "yellow", void 0), __decorate([s(cc.Node)], t.prototype, "Yes", void 0), __decorate([s(cc.Node)], t.prototype, "WinScene", void 0), __decorate([s(cc.Node)], t.prototype, "myYellow", void 0), __decorate([s(cc.Node)], t.prototype, "Huang", void 0), __decorate([s(cc.Node)], t.prototype, "Red", void 0), t = o = __decorate([a], t)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init",
        "./Level22Touch2": "Level22Touch2"
    }],
    Level22Touch2: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9c441Ji7EZJF7E60KJzdqhQ", "Level22Touch2"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = e("./Level22Touch1"),
            n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            r = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.yellow = null, t.Yes = null, t.WinScene = null, t.Red = null, t.Huang = null, t
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    c.default.LevelNum = 22, this.node.on("touchmove", function(e) {
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x
                    }, this), cc.director.getCollisionManager().enabled = !0
                }, t.prototype.onCollisionEnter = function(e, t) {
                    if (2 === e.tag && (o.level22Two++, 1 === o.level22Two && i.default.Level22count++, 2 === i.default.Level22count)) {
                        this.node.opacity = 0, this.yellow.active = !0, this.Yes.active = !0, this.Red.active = !1;
                        var n = cc.callFunc(function() {
                                this.Yes.active = !1, this.yellow.active = !1, this.Red.active = !0, this.Red.setPosition(-149, -57), this.Huang.active = !0, this.Huang.setPosition(115, -426), this.node.opacity = 255, i.default.Level22count = 0, o.level22Two = 0, i.default.level22One = 0, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 25
                            }, this),
                            a = cc.sequence(cc.delayTime(1), n);
                        this.node.runAction(a)
                    }
                }, t.prototype.start = function() {}, t.level22Two = 0, __decorate([s(cc.Node)], t.prototype, "yellow", void 0), __decorate([s(cc.Node)], t.prototype, "Yes", void 0), __decorate([s(cc.Node)], t.prototype, "WinScene", void 0), __decorate([s(cc.Node)], t.prototype, "Red", void 0), __decorate([s(cc.Node)], t.prototype, "Huang", void 0), t = o = __decorate([a], t)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init",
        "./Level22Touch1": "Level22Touch1"
    }],
    Level23Touch1: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "05c5dDa1SxEyLTJ7BTAx1zI", "Level23Touch1"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = e("./Level23Touch2"),
            n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    c.default.LevelNum = 23, this.node.on("touchstart", function(e) {
                        if (o.Level23count = e.getID(), i.default.Level23count2 = 1, 1 === i.default.Level23count2 && 1 === o.Level23count) {
                            this.Yes.active = !0, this.Deng1.active = !1, this.Deng2.active = !0;
                            var t = cc.callFunc(function() {
                                    this.Yes.active = !1, this.Deng1.active = !0, this.Deng2.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 24, c.default.levelPassNum = 24
                                }, this),
                                n = cc.sequence(cc.delayTime(1), t);
                            this.node.runAction(n)
                        }
                    }, this)
                }, t.prototype.start = function() {}, __decorate([s(cc.Node)], t.prototype, "Yes", void 0), __decorate([s(cc.Node)], t.prototype, "WinScene", void 0), __decorate([s(cc.Node)], t.prototype, "Deng1", void 0), __decorate([s(cc.Node)], t.prototype, "Deng2", void 0), t = o = __decorate([a], t)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init",
        "./Level23Touch2": "Level23Touch2"
    }],
    Level23Touch2: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "22215dgMMpIlbd70GEmxMzG", "Level23Touch2"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("./Level23Touch1"),
            i = e("../../MyScript/Init"),
            n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    i.default.LevelNum = 23, this.node.on("touchstart", function(e) {
                        if (o.Level23count2 = e.getID(), o.Level23count2 = 1, 1 === o.Level23count2 && 1 === c.default.Level23count) {
                            this.Yes.active = !0, this.Deng1.active = !1, this.Deng2.active = !0;
                            var t = cc.callFunc(function() {
                                    this.Yes.active = !1, this.Deng1.active = !0, this.Deng2.active = !1, cc.find("Canvas/Level" + i.default.LevelNum).active = !1, this.WinScene.active = !0, i.default.LevelNum = 24
                                }, this),
                                n = cc.sequence(cc.delayTime(1), t);
                            this.node.runAction(n)
                        }
                    }, this)
                }, t.prototype.start = function() {}, __decorate([s(cc.Node)], t.prototype, "Yes", void 0), __decorate([s(cc.Node)], t.prototype, "WinScene", void 0), __decorate([s(cc.Node)], t.prototype, "Deng1", void 0), __decorate([s(cc.Node)], t.prototype, "Deng2", void 0), t = o = __decorate([a], t)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init",
        "./Level23Touch1": "Level23Touch1"
    }],
    Level24Pass: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "6b44daQDCRL/YufTOqL8/mL", "Level24Pass"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Water1 = null, t.Water2 = null, t.Water3 = null, t.Water4 = null, t.Water5 = null, t.Water6 = null, t.Yes = null, t.WinScene = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 24, cc.systemEvent.setAccelerometerEnabled(!0), cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this)
                }, t.prototype.onDeviceMotionEvent = function(e) {
                    var t = e.acc.y.toFixed(0);
                    if (cc.log("event name:", e.type, " acc y:", t), 1 == t) {
                        cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this), this.Water1.active = !1, this.Water2.active = !1, this.Water3.active = !1, this.Water4.active = !1, this.Water5.active = !1, this.Water6.active = !1, this.Yes.active = !0;
                        var o = cc.callFunc(function() {
                                cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this), this.Water1.active = !0, this.Water2.active = !0, this.Water3.active = !0, this.Water4.active = !0, this.Water5.active = !0, this.Water6.active = !0, this.Yes.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 25, c.default.levelPassNum = 25
                            }, this),
                            i = cc.sequence(cc.delayTime(.3), o);
                        this.node.runAction(i)
                    }
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "Water1", void 0), __decorate([a(cc.Node)], t.prototype, "Water2", void 0), __decorate([a(cc.Node)], t.prototype, "Water3", void 0), __decorate([a(cc.Node)], t.prototype, "Water4", void 0), __decorate([a(cc.Node)], t.prototype, "Water5", void 0), __decorate([a(cc.Node)], t.prototype, "Water6", void 0), __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level25Button: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e36ddngVoJO/IRgMGnfkcOK", "Level25Button"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.X = null, t.Num = null, t.Yes = null, t.No = null, t.WinScene = null, t.FailureScene = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 25
                }, t.prototype.left = function() {
                    var e = this.Num.getComponent(cc.Label).string,
                        t = Number(e);
                    t--, this.Num.getComponent(cc.Label).string = String(t)
                }, t.prototype.right = function() {
                    var e = this.Num.getComponent(cc.Label).string,
                        t = Number(e);
                    t++, this.Num.getComponent(cc.Label).string = String(t)
                }, t.prototype.clean = function() {
                    this.Num.getComponent(cc.Label).string = "0"
                }, t.prototype.Ok = function() {
                    var e = this.Num.getComponent(cc.Label).string;
                    if (9 === Number(e)) {
                        this.Yes.active = !0;
                        var t = cc.callFunc(function() {
                                cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.Num.getComponent(cc.Label).string = "1", this.Yes.active = !1, this.X.setPosition(12, 63), this.WinScene.active = !0, c.default.LevelNum = 26, c.default.levelPassNum = 26
                            }, this),
                            o = cc.sequence(cc.delayTime(1), t);
                        this.node.runAction(o)
                    } else {
                        this.No.active = !0;
                        t = cc.callFunc(function() {
                            var e = cc.find("Canvas/Level" + c.default.LevelNum);
                            this.Num.getComponent(cc.Label).string = "1", e.active = !1, this.No.active = !1, this.FailureScene.active = !0
                        }, this), o = cc.sequence(cc.delayTime(1), t);
                        this.node.runAction(o)
                    }
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "X", void 0), __decorate([a(cc.Node)], t.prototype, "Num", void 0), __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "No", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "FailureScene", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level26Touch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f231dFTmMJH6aKDCoCAcagS", "Level26Touch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Yes = null, t.WinScene = null, t.WuPin1 = null, t.WuPin2 = null, t.WuPin3 = null, t.WuPin4 = null, t.Bone = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 26, this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x, this.Face1.active = !1, this.Face2.active = !0
                    }, this), cc.director.getCollisionManager().enabled = !0
                }, t.prototype.onCollisionStay = function(e, t) {
                    if (0 === e.tag) {
                        this.Yes.active = !0;
                        var o = cc.callFunc(function() {
                                this.node.opacity = 255, this.Yes.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.Bone.setPosition(94, 104), this.WuPin1.setPosition(-159, -633), this.WuPin2.setPosition(-11, -461), this.WuPin3.setPosition(101, -559), this.WuPin4.setPosition(-204, -444), this.WinScene.active = !0, c.default.LevelNum = 27, c.default.levelPassNum = 27
                            }, this),
                            i = cc.sequence(cc.delayTime(1.5), o);
                        this.node.runAction(i)
                    }
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "WuPin1", void 0), __decorate([a(cc.Node)], t.prototype, "WuPin2", void 0), __decorate([a(cc.Node)], t.prototype, "WuPin3", void 0), __decorate([a(cc.Node)], t.prototype, "WuPin4", void 0), __decorate([a(cc.Node)], t.prototype, "Bone", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level27Touch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ad563UYXERFfr5iwKYR7/+s", "Level27Touch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Yes = null, t.Next = null, t.WinScene = null, t.text = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 27, this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x
                    }, this), cc.director.getCollisionManager().enabled = !0
                }, t.prototype.onCollisionEnter = function(e, t) {
                    if (2 === e.tag) {
                        t.node.opacity = 0, this.Yes.active = !0, this.Next.active = !0;
                        var o = cc.callFunc(function() {
                                this.text.opacity = 255, this.text.setPosition(-145, 104), t.node.opacity = 255, this.Yes.active = !1, this.Next.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 28, c.default.levelPassNum = 28
                            }, this),
                            i = cc.sequence(cc.delayTime(1), o);
                        this.node.runAction(i)
                    }
                }, t.prototype.Level27Error = function() {
                    this.Yes.active = !0;
                    var e = cc.callFunc(function() {
                            this.Yes.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0
                        }, this),
                        t = cc.sequence(cc.delayTime(1), e);
                    this.node.runAction(t)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "Next", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "text", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level28Touch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5fc70ev/yBCRrdrRKBZ15U8", "Level28Touch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.face1 = null, t.face2 = null, t.face3 = null, t.Yes = null, t.WinScene = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 28, this.node.on("touchstart", function() {
                        this.startTime = (new Date).getTime(), this.face1.active = !1, this.face2.active = !0
                    }, this), this.node.on("touchend", function() {
                        if (this.endTime = (new Date).getTime(), this.endTime - this.startTime > 1e3) {
                            this.face2.active = !1, this.face3.active = !0, this.Yes.active = !0;
                            var e = cc.callFunc(function() {
                                    this.Yes.active = !1, this.face3.active = !1, this.face1.active = !0, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 29, c.default.levelPassNum = 29
                                }, this),
                                t = cc.sequence(cc.delayTime(1), e);
                            this.node.runAction(t)
                        }
                    }, this)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "face1", void 0), __decorate([a(cc.Node)], t.prototype, "face2", void 0), __decorate([a(cc.Node)], t.prototype, "face3", void 0), __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level29Touch2: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "eb9a2t+/S5N0Iv0Sq9aO2lG", "Level29Touch2"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x
                    }, this), this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
                        this.Yes.active = !0;
                        var t = cc.callFunc(function() {
                                this.Yes.active = !1, this.threeDuck.active = !0, this.threeDuck.setPosition(172, -342), cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 30, c.default.levelPassNum = 30, this.node.setPosition(398, 75), this.node.active = !1
                            }, this),
                            o = cc.sequence(cc.delayTime(1), t);
                        this.node.runAction(o)
                    }, this)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "threeDuck", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level29Touch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ce138OpzbpFJY4UNcwjytwL", "Level29Touch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 29, this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x, this.node.x < -250 && (this.YellowDuck.active = !0, this.node.active = !1)
                    }, this)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "YellowDuck", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level2Touch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "18162rPJqdL3KZ6BhUPp0EF", "Level2Touch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("./LevelDelayTimeTouch"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.WuPin = null, t.Num = null, t
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    this.node.on(cc.Node.EventType.TOUCH_START, function(e) {}, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x
                    }, this), this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
                        this.node.active = !1, this.WuPin.active = !0, o.count++, 4 === o.count && (o.count = 0, c.default.DelayTime = 1)
                    }, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
                        this.node.active = !1, this.WuPin.active = !0
                    }, this)
                }, t.prototype.start = function() {}, t.count = 1, __decorate([a(cc.Node)], t.prototype, "WuPin", void 0), __decorate([a(cc.Node)], t.prototype, "Num", void 0), t = o = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "./LevelDelayTimeTouch": "LevelDelayTimeTouch"
    }],
    Level30Button: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d1dafa5Ih1GaZRjmqOAjjEZ", "Level30Button"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    c.default.LevelNum = 30
                }, t.prototype.fist = function() {
                    o.Level30count++;
                    var e = this.Num.getComponent(cc.Label).string,
                        t = Number(e);
                    t += 1, this.Num.getComponent(cc.Label).string = String(t), 9 === o.Level30count && (this.Num.getComponent(cc.Label).string = "8")
                }, t.prototype.confirm = function() {
                    if (10 === o.Level30count) {
                        this.Yes.active = !0;
                        var e = cc.callFunc(function() {
                                this.Yes.active = !1, this.Num.getComponent(cc.Label).string = "0", o.Level30count = 0, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 31, c.default.levelPassNum = 31
                            }, this),
                            t = cc.sequence(cc.delayTime(1), e);
                        this.node.runAction(t)
                    } else {
                        this.No.active = !0;
                        e = cc.callFunc(function() {
                            this.No.active = !1, this.Num.getComponent(cc.Label).string = "0", o.Level30count = 0, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.Fairure.active = !0
                        }, this), t = cc.sequence(cc.delayTime(1), e);
                        this.node.runAction(t)
                    }
                }, t.prototype.start = function() {}, t.Level30count = 0, __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "No", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "Fairure", void 0), __decorate([a(cc.Node)], t.prototype, "Num", void 0), t = o = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level3Button: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5de10ZaN1xH27RleWr+KtlP", "Level3Button"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.x1 = null, t.x2 = null, t.x3 = null, t.y4 = null, t.Failure = null, t.WinScene = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 3
                }, t.prototype.level3Fruit = function(e) {
                    e.active = !0;
                    var t = cc.callFunc(function() {
                            e.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.Failure.active = !0
                        }, this),
                        o = cc.sequence(cc.delayTime(1), t);
                    this.node.runAction(o)
                }, t.prototype.A = function() {
                    this.level3Fruit(this.x1)
                }, t.prototype.B = function() {
                    this.level3Fruit(this.x2)
                }, t.prototype.C = function() {
                    this.level3Fruit(this.x3)
                }, t.prototype.D = function() {
                    this.y4.active = !0;
                    var e = cc.callFunc(function() {
                            this.y4.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 4, c.default.levelPassNum = 4
                        }, this),
                        t = cc.sequence(cc.delayTime(1), e);
                    this.node.runAction(t)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "x1", void 0), __decorate([a(cc.Node)], t.prototype, "x2", void 0), __decorate([a(cc.Node)], t.prototype, "x3", void 0), __decorate([a(cc.Node)], t.prototype, "y4", void 0), __decorate([a(cc.Node)], t.prototype, "Failure", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level4Touch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "6be2bJp5N9PO6myjGSAfbUc", "Level4Touch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Ok = null, t.WinScene = null, t.one = null, t.two = null, t.three = null, t.four = null, t.five = null, t.six = null, t
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    c.default.LevelNum = 4, this.node.on(cc.Node.EventType.TOUCH_START, function(e) {}, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x
                    }, this), this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
                        if (o.Level4Count++, this.node.active = !1, 6 === o.Level4Count) {
                            o.Level4Count = 0, this.Ok.active = !0, this.node.active = !0, this.node.opacity = 0;
                            var t = cc.callFunc(function() {
                                    this.Ok.active = !1, this.node.opacity = 255, this.one.active = !0, this.one.setPosition(0, -33), this.two.active = !0, this.two.setPosition(0, -58), this.three.active = !0, this.three.setPosition(2, -110), this.four.active = !0, this.four.setPosition(0, -81), this.five.active = !0, this.five.setPosition(0, -95), this.six.active = !0, this.six.setPosition(0, -136), cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 5, c.default.levelPassNum = 5
                                }, this),
                                i = cc.sequence(cc.delayTime(.12), t);
                            this.node.runAction(i)
                        }
                    }, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
                        this.node.removeFromParent()
                    }, this)
                }, t.prototype.start = function() {}, t.prototype.update = function(e) {}, t.Level4Count = 0, __decorate([a(cc.Node)], t.prototype, "Ok", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "one", void 0), __decorate([a(cc.Node)], t.prototype, "two", void 0), __decorate([a(cc.Node)], t.prototype, "three", void 0), __decorate([a(cc.Node)], t.prototype, "four", void 0), __decorate([a(cc.Node)], t.prototype, "five", void 0), __decorate([a(cc.Node)], t.prototype, "six", void 0), t = o = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level5Pass: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "77728cwCyxFD6ulxl5Ejir/", "Level5Pass"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("./Level5Touch"),
            i = e("../../MyScript/Init"),
            n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            r = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.WinScene = null, t.Ok = null, t.WuPin1 = null, t.WuPin2 = null, t.WuPin3 = null, t.WuPin4 = null, t.WuPin5 = null, t.WuPin6 = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    i.default.LevelNum = 5
                }, t.prototype.start = function() {}, t.prototype.update = function(e) {
                    if (6 === c.default.Level5Count) {
                        c.default.Level5Count = 0, this.Ok.active = !0;
                        var t = cc.callFunc(function() {
                                this.Ok.active = !1, this.WuPin1.active = !0, this.WuPin1.setPosition(-138, 104), this.WuPin2.active = !0, this.WuPin2.setPosition(-157, -46), this.WuPin3.active = !0, this.WuPin3.setPosition(-202, -295), this.WuPin4.active = !0, this.WuPin4.setPosition(-92, -541), this.WuPin5.active = !0, this.WuPin5.setPosition(154, -415), this.WuPin6.active = !0, this.WuPin6.setPosition(154, -57), cc.find("Canvas/Level" + i.default.LevelNum).active = !1, this.WinScene.active = !0, i.default.LevelNum = 6, i.default.levelPassNum = 6
                            }, this),
                            o = cc.sequence(cc.delayTime(1), t);
                        this.node.runAction(o)
                    }
                }, __decorate([s(cc.Node)], t.prototype, "WinScene", void 0), __decorate([s(cc.Node)], t.prototype, "Ok", void 0), __decorate([s(cc.Node)], t.prototype, "WuPin1", void 0), __decorate([s(cc.Node)], t.prototype, "WuPin2", void 0), __decorate([s(cc.Node)], t.prototype, "WuPin3", void 0), __decorate([s(cc.Node)], t.prototype, "WuPin4", void 0), __decorate([s(cc.Node)], t.prototype, "WuPin5", void 0), __decorate([s(cc.Node)], t.prototype, "WuPin6", void 0), t = __decorate([a], t)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init",
        "./Level5Touch": "Level5Touch"
    }],
    Level5Touch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c3832Z6AZtPBJssng+c0lti", "Level5Touch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.WinScene = null, t.Ok = null, t.WuPin1 = null, t.WuPin2 = null, t.WuPin3 = null, t.WuPin4 = null, t.WuPin5 = null, t.WuPin6 = null, t
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    c.default.LevelNum = 5, this.node.on(cc.Node.EventType.TOUCH_START, function(e) {}, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x
                    }, this), this.node.on(cc.Node.EventType.TOUCH_END, function(e) {}, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {}, this), cc.director.getCollisionManager().enabled = !0
                }, t.prototype.onCollisionEnter = function(e, t) {}, t.prototype.onCollisionStay = function(e, t) {
                    1 === e.tag && (o.Level5Count++, t.node.active = !1)
                }, t.prototype.onCollisionExit = function(e, t) {}, t.prototype.start = function() {}, t.Level5Count = 0, __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "Ok", void 0), __decorate([a(cc.Node)], t.prototype, "WuPin1", void 0), __decorate([a(cc.Node)], t.prototype, "WuPin2", void 0), __decorate([a(cc.Node)], t.prototype, "WuPin3", void 0), __decorate([a(cc.Node)], t.prototype, "WuPin4", void 0), __decorate([a(cc.Node)], t.prototype, "WuPin5", void 0), __decorate([a(cc.Node)], t.prototype, "WuPin6", void 0), t = o = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level6Pass: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "53fd81m4zxAkpY6kcGOY1jl", "Level6Pass"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("./Level6Touch"),
            i = e("../../MyScript/Init"),
            n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            r = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.WinScene = null, t.Ok = null, t.WuPin1 = null, t.WuPin2 = null, t.WuPin3 = null, t.WuPin4 = null, t.WuPin5 = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    i.default.LevelNum = 6
                }, t.prototype.start = function() {}, t.prototype.update = function(e) {
                    if (8 === c.default.Level6Count) {
                        c.default.Level6Count = 0, this.Ok.active = !0;
                        var t = cc.callFunc(function() {
                                this.Ok.active = !1, this.WuPin1.active = !0, this.WuPin1.setPosition(-169, -144), this.WuPin1.setScale(1, 1), this.WuPin2.active = !0, this.WuPin2.setPosition(-129, -469), this.WuPin2.setScale(1, 1), this.WuPin3.active = !0, this.WuPin3.setPosition(130, -124), this.WuPin3.setScale(1, 1), this.WuPin4.active = !0, this.WuPin4.setPosition(137, -315), this.WuPin4.setScale(1, 1), this.WuPin5.active = !0, this.WuPin5.setPosition(152, -513), this.WuPin5.setScale(1, 1), cc.find("Canvas/Level" + i.default.LevelNum).active = !1, this.WinScene.active = !0, i.default.LevelNum = 8, i.default.levelPassNum = 8
                            }, this),
                            o = cc.sequence(cc.delayTime(1), t);
                        this.node.runAction(o)
                    }
                }, __decorate([s(cc.Node)], t.prototype, "WinScene", void 0), __decorate([s(cc.Node)], t.prototype, "Ok", void 0), __decorate([s(cc.Node)], t.prototype, "WuPin1", void 0), __decorate([s(cc.Node)], t.prototype, "WuPin2", void 0), __decorate([s(cc.Node)], t.prototype, "WuPin3", void 0), __decorate([s(cc.Node)], t.prototype, "WuPin4", void 0), __decorate([s(cc.Node)], t.prototype, "WuPin5", void 0), t = __decorate([a], t)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init",
        "./Level6Touch": "Level6Touch"
    }],
    Level6Touch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "2483eVOg4FCq5iO3I5s3ej5", "Level6Touch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.WinScene = null, t.Ok = null, t.OneX = null, t.TwoX = null, t.threeX = null, t.fourX = null, t.fiveX = null, t.Failure = null, t.No1 = null, t.No2 = null, t.No3 = null, t.No4 = null, t.No5 = null, t.count = 0, t
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    c.default.LevelNum = 6, this.node.on(cc.Node.EventType.TOUCH_START, function(e) {}, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        this.count = 1;
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x
                    }, this), this.node.on(cc.Node.EventType.TOUCH_END, function(e) {}, this), cc.director.getCollisionManager().enabled = !0
                }, t.prototype.onCollisionEnter = function(e, t) {
                    var c = e.tag;
                    if (t.tag < c) {
                        this.node.active = !1;
                        var i = cc.scaleBy(.5, 1.1, 1.1);
                        e.node.runAction(i), o.Level6Count++
                    } else {
                        e.node.active = !1;
                        i = cc.scaleBy(.5, 1.1, 1.1);
                        this.node.runAction(i), o.Level6Count++
                    }
                }, t.prototype.level6Fruit = function(e) {
                    if (1 === this.count) e.active = !1;
                    else {
                        e.active = !0;
                        var t = cc.callFunc(function() {
                                e.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.Failure.active = !0
                            }, this),
                            o = cc.sequence(cc.delayTime(1), t);
                        this.node.runAction(o)
                    }
                }, t.prototype.One = function() {
                    this.level6Fruit(this.OneX)
                }, t.prototype.two = function() {
                    this.level6Fruit(this.TwoX)
                }, t.prototype.three = function() {
                    this.level6Fruit(this.threeX)
                }, t.prototype.four = function() {
                    this.level6Fruit(this.fourX)
                }, t.prototype.five = function() {
                    this.level6Fruit(this.fiveX)
                }, t.prototype.start = function() {}, t.Level6Count = 0, __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "Ok", void 0), __decorate([a(cc.Node)], t.prototype, "OneX", void 0), __decorate([a(cc.Node)], t.prototype, "TwoX", void 0), __decorate([a(cc.Node)], t.prototype, "threeX", void 0), __decorate([a(cc.Node)], t.prototype, "fourX", void 0), __decorate([a(cc.Node)], t.prototype, "fiveX", void 0), __decorate([a(cc.Node)], t.prototype, "Failure", void 0), __decorate([a(cc.Node)], t.prototype, "No1", void 0), __decorate([a(cc.Node)], t.prototype, "No2", void 0), __decorate([a(cc.Node)], t.prototype, "No3", void 0), __decorate([a(cc.Node)], t.prototype, "No4", void 0), __decorate([a(cc.Node)], t.prototype, "No5", void 0), t = o = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level7Pass: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c911eZ2SwpJlqHp4i0K0xvs", "Level7Pass"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 7, cc.systemEvent.setAccelerometerEnabled(!0), cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this)
                }, t.prototype.onDeviceMotionEvent = function(e) {
                    var t = e.acc.x.toFixed(0),
                        o = e.acc.y.toFixed(0);
                    if (cc.log("event name:", e.type, " acc y:", o, " acc x:", t), -0 == o && -1 == t) {
                        this.one.active = !1, this.two.active = !0, this.Yes.active = !0;
                        var i = cc.callFunc(function() {
                                this.one.active = !0, this.two.active = !1, this.Yes.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 8, c.default.levelPassNum = 8
                            }, this),
                            n = cc.sequence(cc.delayTime(1), i);
                        this.node.runAction(n)
                    }
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "one", void 0), __decorate([a(cc.Node)], t.prototype, "two", void 0), __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level8Button: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4a972Hhk9hFRaRm5WEYN7UR", "Level8Button"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Num = null, t.Yes = null, t.No = null, t.WinScene = null, t.FailureScene = null, t.WuPin = null, t.Face1 = null, t.Face2 = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 8
                }, t.prototype.left = function() {
                    var e = this.Num.getComponent(cc.Label).string,
                        t = Number(e);
                    t--, this.Num.getComponent(cc.Label).string = String(t)
                }, t.prototype.right = function() {
                    var e = this.Num.getComponent(cc.Label).string,
                        t = Number(e);
                    t++, this.Num.getComponent(cc.Label).string = String(t)
                }, t.prototype.clean = function() {
                    this.Num.getComponent(cc.Label).string = "0"
                }, t.prototype.Ok = function() {
                    var e = this.Num.getComponent(cc.Label).string;
                    if (0 === Number(e)) {
                        this.Yes.active = !0;
                        var t = cc.callFunc(function() {
                                this.Yes.active = !1, this.Num.getComponent(cc.Label).string = "1", this.WuPin.setPosition(20, -182), this.Face1.active = !0, this.Face2.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 10, c.default.levelPassNum = 10
                            }, this),
                            o = cc.sequence(cc.delayTime(1), t);
                        this.node.runAction(o)
                    } else {
                        this.No.active = !0;
                        t = cc.callFunc(function() {
                            this.No.active = !1, this.Num.getComponent(cc.Label).string = "1", cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.FailureScene.active = !0
                        }, this), o = cc.sequence(cc.delayTime(1), t);
                        this.node.runAction(o)
                    }
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "Num", void 0), __decorate([a(cc.Node)], t.prototype, "Yes", void 0), __decorate([a(cc.Node)], t.prototype, "No", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "FailureScene", void 0), __decorate([a(cc.Node)], t.prototype, "WuPin", void 0), __decorate([a(cc.Node)], t.prototype, "Face1", void 0), __decorate([a(cc.Node)], t.prototype, "Face2", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level8Touch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "689fdqxFG5K3KslqhKH4C3M", "Level8Touch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = c.property,
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Face1 = null, t.Face2 = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.node.on(cc.Node.EventType.TOUCH_START, function(e) {}, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x, this.Face1.active = !1, this.Face2.active = !0
                    }, this)
                }, t.prototype.start = function() {}, __decorate([n(cc.Node)], t.prototype, "Face1", void 0), __decorate([n(cc.Node)], t.prototype, "Face2", void 0), t = __decorate([i], t)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    Level9Button: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "99402+tpQZOCKoDj9PUi+an", "Level9Button"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.paiZiX = null, t.PoliceX = null, t.FailureScene = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 9
                }, t.prototype.paiZi = function() {
                    this.paiZiX.active = !0;
                    var e = cc.callFunc(function() {
                            this.paiZiX.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.FailureScene.active = !0
                        }, this),
                        t = cc.sequence(cc.delayTime(1), e);
                    this.node.runAction(t)
                }, t.prototype.police = function() {
                    this.PoliceX.active = !0;
                    var e = cc.callFunc(function() {
                            this.PoliceX.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.FailureScene.active = !0
                        }, this),
                        t = cc.sequence(cc.delayTime(1), e);
                    this.node.runAction(t)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "paiZiX", void 0), __decorate([a(cc.Node)], t.prototype, "PoliceX", void 0), __decorate([a(cc.Node)], t.prototype, "FailureScene", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    Level9Touch1: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5d6688hP29CV7kNC1wEJ4zL", "Level9Touch1"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = (c.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                        this.touchId = e.getID()
                    }, this)
                }, t.prototype.start = function() {}, t = __decorate([i], t)
            }(cc.Component));
        o.default = n, cc._RF.pop()
    }, {}],
    Level9Touch2: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f263fZzB8JNbbd+Oebf927d", "Level9Touch2"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("./Level9Touch1"),
            i = e("../../MyScript/Init"),
            n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            r = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Yes = null, t.WuPin1 = null, t.WuPin2 = null, t.WinScene = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    i.default.LevelNum = 9, this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                        var t = new c.default,
                            o = e.getID();
                        if (t && o) {
                            var n = cc.moveBy(.5, 30, 0);
                            this.node.runAction(n), this.Yes.active = !0;
                            var a = cc.callFunc(function() {
                                    this.Yes.active = !1, this.WuPin1.setPosition(-54, -143), this.WuPin2.setPosition(183, -144), cc.find("Canvas/Level" + i.default.LevelNum).active = !1, this.WinScene.active = !0, i.default.LevelNum = 10, i.default.levelPassNum = 10
                                }, this),
                                s = cc.sequence(cc.delayTime(1), a);
                            this.node.runAction(s)
                        }
                    }, this)
                }, t.prototype.start = function() {}, __decorate([s(cc.Node)], t.prototype, "Yes", void 0), __decorate([s(cc.Node)], t.prototype, "WuPin1", void 0), __decorate([s(cc.Node)], t.prototype, "WuPin2", void 0), __decorate([s(cc.Node)], t.prototype, "WinScene", void 0), t = __decorate([a], t)
            }(cc.Component);
        o.default = r, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init",
        "./Level9Touch1": "Level9Touch1"
    }],
    LevelButton: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "77b3eALMulGbLzS88MjOnX7", "LevelButton"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("./Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.InterFace = null, t.MyBackGround = null, t.Level1 = null, t.KeyScene = null, t.HintScene = null, t.NextLevelScene = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.back = function() {
                    this.Level1.active = !1, this.InterFace.active = !0
                }, t.prototype.BackGround = function() {
                    this.Level1.active = !1, this.MyBackGround.active = !0
                }, t.prototype.nextLevel = function() {
                    window.h5api.canPlayAd(function(e) {
                        (console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0) && (cc.find("Canvas/Level" + c.default.LevelNum).active = !1, cc.find("Canvas/NextLevelScene").active = !0)
                    }.bind(this))
                }, t.prototype.Key = function() {
                    var e = this.KeyScene;
                    window.h5api.canPlayAd(function(t) {
                        (console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", t.canPlayAd, "\u5269\u4f59\u6b21\u6570", t.remain), t.remain > 0) && (cc.find("Canvas/Level" + c.default.LevelNum).active = !1, e && (e.active = !0))
                    }.bind(this))
                }, t.prototype.Hint = function() {
                    cc.find("Canvas/Level" + c.default.LevelNum).active = !1, this.HintScene.active = !0
                }, t.prototype.FailureHint = function() {
                    var e = cc.sys.localStorage.getItem("KeyNum");
                    Number(e) < 0 || 0 === Number(e) ? cc.find("Canvas/GetKeyScene").active = !0 : (cc.find("Canvas/FailureScene").active = !1, this.HintScene.active = !0)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "InterFace", void 0), __decorate([a(cc.Node)], t.prototype, "MyBackGround", void 0), __decorate([a(cc.Node)], t.prototype, "Level1", void 0), __decorate([a(cc.Node)], t.prototype, "KeyScene", void 0), __decorate([a(cc.Node)], t.prototype, "HintScene", void 0), __decorate([a(cc.Node)], t.prototype, "NextLevelScene", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "./Init": "Init"
    }],
    LevelDelayTimeTouch: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "11dda9rSZtP6IVMZGEhvcf3", "LevelDelayTimeTouch"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = c.property,
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.TouchNum = 0, t.WuPin = null, t
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    o.DelayTime = 0
                }, t.prototype.start = function() {}, t.prototype.update = function(e) {
                    o.DelayTime === this.TouchNum && (o.DelayTime = 0, this.node.on(cc.Node.EventType.TOUCH_START, function(e) {}, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x
                    }, this), this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
                        this.node.active = !1, this.WuPin.active = !0
                    }, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(e) {
                        this.node.active = !1, this.WuPin.active = !0
                    }, this))
                }, __decorate([n(Number)], t.prototype, "TouchNum", void 0), __decorate([n(cc.Node)], t.prototype, "WuPin", void 0), t = o = __decorate([i], t)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    LevelInit: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4212cmPs8NIWJjKXg48uQp3", "LevelInit"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("./Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.PassNum = function(e) {
                    c.default.LevelNum >= c.default.levelPassNum && cc.sys.localStorage.setItem("LevelPassNum", c.default.levelPassNum)
                }, t.prototype.onLoad = function() {
                    var e = cc.sys.localStorage.getItem("UnlockLevel");
                    1 === Number(e) ? (cc.find("Canvas/ChooseLevel/Conter/level2").opacity = 255, cc.find("Canvas/ChooseLevel/Conter/level3").opacity = 255, cc.find("Canvas/ChooseLevel/Conter/level4").opacity = 255, cc.find("Canvas/ChooseLevel/Conter/level5").opacity = 255, 6 === c.default.LevelNum ? this.PassNum(6) : 7 === c.default.LevelNum ? this.PassNum(7) : 8 === c.default.LevelNum ? this.PassNum(8) : 9 === c.default.LevelNum ? this.PassNum(9) : 10 === c.default.LevelNum ? this.PassNum(10) : 11 === c.default.LevelNum ? this.PassNum(11) : 12 === c.default.LevelNum ? this.PassNum(12) : 13 === c.default.LevelNum ? this.PassNum(13) : 14 === c.default.LevelNum ? this.PassNum(14) : 15 === c.default.LevelNum ? this.PassNum(15) : 16 === c.default.LevelNum ? this.PassNum(16) : 17 === c.default.LevelNum ? this.PassNum(17) : 18 === c.default.LevelNum ? this.PassNum(18) : 19 === c.default.LevelNum ? this.PassNum(19) : 20 === c.default.LevelNum ? this.PassNum(20) : 21 === c.default.LevelNum ? this.PassNum(21) : 22 === c.default.LevelNum ? this.PassNum(22) : 23 === c.default.LevelNum ? this.PassNum(23) : 24 === c.default.LevelNum ? this.PassNum(24) : 25 === c.default.LevelNum ? this.PassNum(25) : 26 === c.default.LevelNum ? this.PassNum(26) : 27 === c.default.LevelNum ? this.PassNum(27) : 28 === c.default.LevelNum ? this.PassNum(28) : 29 === c.default.LevelNum ? this.PassNum(29) : 30 === c.default.LevelNum && this.PassNum(30)) : 1 === c.default.LevelNum ? this.PassNum(1) : 2 === c.default.LevelNum ? this.PassNum(2) : 3 === c.default.LevelNum ? this.PassNum(3) : 4 === c.default.LevelNum ? this.PassNum(4) : 5 === c.default.LevelNum ? this.PassNum(5) : 6 === c.default.LevelNum ? this.PassNum(6) : 7 === c.default.LevelNum ? this.PassNum(7) : 8 === c.default.LevelNum ? this.PassNum(8) : 9 === c.default.LevelNum ? this.PassNum(9) : 10 === c.default.LevelNum ? this.PassNum(10) : 11 === c.default.LevelNum ? this.PassNum(11) : 12 === c.default.LevelNum ? this.PassNum(12) : 13 === c.default.LevelNum ? this.PassNum(13) : 14 === c.default.LevelNum ? this.PassNum(14) : 15 === c.default.LevelNum ? this.PassNum(15) : 16 === c.default.LevelNum ? this.PassNum(16) : 17 === c.default.LevelNum ? this.PassNum(17) : 18 === c.default.LevelNum ? this.PassNum(18) : 19 === c.default.LevelNum ? this.PassNum(19) : 20 === c.default.LevelNum ? this.PassNum(20) : 21 === c.default.LevelNum ? this.PassNum(21) : 22 === c.default.LevelNum ? this.PassNum(22) : 23 === c.default.LevelNum ? this.PassNum(23) : 24 === c.default.LevelNum ? this.PassNum(24) : 25 === c.default.LevelNum ? this.PassNum(25) : 26 === c.default.LevelNum ? this.PassNum(26) : 27 === c.default.LevelNum ? this.PassNum(27) : 28 === c.default.LevelNum ? this.PassNum(28) : 29 === c.default.LevelNum ? this.PassNum(29) : 30 === c.default.LevelNum && this.PassNum(30)
                }, t.prototype.start = function() {}, t.prototype.update = function(e) {
                    var t = cc.sys.localStorage.getItem("KeyNum");
                    this.KeyNum.getComponent(cc.Label).string = t
                }, __decorate([a(cc.Node)], t.prototype, "KeyNum", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "./Init": "Init"
    }],
    MySound: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5f874sS8DxDP5BW+pDlICc4", "MySound"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = c.property,
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    !0 === o.OpenOrShut && cc.audioEngine.playMusic(this.music, !0), this.schedule(function() {
                        !0 === o.OpenOrShut ? (this.soundOn.active = !0, this.soundOff.active = !1) : (this.soundOff.active = !0, this.soundOn.active = !1)
                    }, .12)
                }, t.prototype.SoundOnButton = function() {
                    this.soundOn.active = !1, this.soundOff.active = !0, o.OpenOrShut = !1, cc.audioEngine.stopAll()
                }, t.prototype.SoundOffButton = function() {
                    this.soundOff.active = !1, this.soundOn.active = !0, o.OpenOrShut = !0, cc.audioEngine.playMusic(this.music, !0)
                }, t.prototype.start = function() {}, t.OpenOrShut = !0, __decorate([n(cc.Node)], t.prototype, "soundOn", void 0), __decorate([n(cc.Node)], t.prototype, "soundOff", void 0), __decorate([n(cc.AudioClip)], t.prototype, "music", void 0), t = o = __decorate([i], t)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    NoAd: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8aa56yyiNtBu48RQqmY0NFl", "NoAd"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = (c.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.NoAd = function() {
                    cc.find("Canvas/NoAd").active = !1
                }, t.prototype.start = function() {}, t = __decorate([i], t)
            }(cc.Component));
        o.default = n, cc._RF.pop()
    }, {}],
    PassButton: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "43cb2mqxYtN/7vIViBI8sSh", "PassButton"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Num = null, t.Ok = null, t.LevelNum = 0, t.WinScene = null, t.chair = null, t.dian = null, t.yao = null, t.zhi = null, t.ka = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.Level2Pass = function() {
                    this.Num.active = !0, this.Ok.active = !0;
                    var e = cc.callFunc(function() {
                            this.Num.active = !1, this.Ok.active = !1, this.chair.active = !0, this.chair.setPosition(0, -485), this.dian.active = !0, this.dian.setPosition(0, -322), this.ka.setPosition(0, -354), this.zhi.setPosition(0, -349), cc.find("Canvas/Level" + this.LevelNum).active = !1, this.WinScene.active = !0, c.default.LevelNum = 3, c.default.levelPassNum = 3, this.node.active = !1
                        }, this),
                        t = cc.sequence(cc.delayTime(1), e);
                    this.node.runAction(t)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "Num", void 0), __decorate([a(cc.Node)], t.prototype, "Ok", void 0), __decorate([a(Number)], t.prototype, "LevelNum", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "chair", void 0), __decorate([a(cc.Node)], t.prototype, "dian", void 0), __decorate([a(cc.Node)], t.prototype, "yao", void 0), __decorate([a(cc.Node)], t.prototype, "zhi", void 0), __decorate([a(cc.Node)], t.prototype, "ka", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }],
    QuestionMark: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "cc6bcmiSlBLx6wrXYsK989c", "QuestionMark"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = c.property,
            a = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.QuestionMark = new Array, this.QuestionMark = this.QuestionMarkFaher.children, this.schedule(function() {
                        for (var e = 0; e < this.QuestionMark.length; e++) {
                            var t = cc.sequence(cc.show(), cc.delayTime(.5), cc.hide()),
                                o = cc.blink(1, 5),
                                c = cc.spawn(t, o);
                            this.QuestionMark[e].runAction(c)
                        }
                    }, 2)
                }, t.prototype.start = function() {}, __decorate([n(cc.Node)], t.prototype, "QuestionMarkFaher", void 0), t = __decorate([i], t)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    ScrollCard: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "63116vSY0FCg7FVk1Tmd8fa", "ScrollCard"), cc.Class({
            extends: cc.Component,
            properties: {
                Direction: {
                    default: 0,
                    type: cc.Enum({
                        Horizontal: 0,
                        Vertical: 1
                    }),
                    tooltip: "\u65b9\u5411",
                    notify: function() {
                        this._initItemPos()
                    }
                },
                itemOffset: {
                    default: 0,
                    type: cc.Integer,
                    tooltip: "node \u95f4\u9694",
                    notify: function() {
                        this._initItemPos()
                    }
                },
                speed: {
                    default: 500,
                    type: cc.Integer,
                    tooltip: "\u79fb\u52a8\u901f\u5ea6",
                    notify: function() {
                        this._initItemPos()
                    }
                },
                rub: {
                    default: 1,
                    type: cc.Float,
                    tooltip: "\u51cf\u901f\u9891\u7387"
                },
                scaleMin: {
                    default: .5,
                    type: cc.Float,
                    tooltip: "\u7f29\u653e\u6700\u5c0f\u503c"
                },
                scaleMax: {
                    default: 1,
                    type: cc.Float,
                    tooltip: "\u7f29\u653e\u6700\u5927\u503c"
                },
                item: {
                    default: [],
                    type: [cc.Node],
                    notify: function() {
                        this._initItemPos()
                    }
                },
                _startTime: {
                    default: 0,
                    type: cc.Integer
                },
                _moveSpeed: {
                    default: 0,
                    type: cc.Integer
                }
            },
            onLoad: function() {
                this._initItemPos(), this.updateScale(), this.node.on("touchstart", function(e) {
                    this._moveSpeed = 0, this._startTime = (new Date).getTime()
                }.bind(this)), this.node.on("touchmove", function(e) {
                    var t = e.getDelta();
                    this.itemMoveBy(t)
                }.bind(this)), this.node.on("touchend", function(e) {
                    this.touchEnd(e)
                }.bind(this)), this.node.on("touchcancel", function(e) {
                    this.touchEnd(e)
                }.bind(this))
            },
            touchEnd: function(e) {
                var t, o = e.getLocation(),
                    c = e.getStartLocation();
                t = 0 == this.Direction ? c.x - o.x : c.y - o.y;
                var i = (new Date).getTime() - this._startTime;
                this._moveSpeed = t / i
            },
            _initItemPos: function() {
                this.node.anchorY = .5, this.node.anchorX = .5, this._maxSize = new cc.Size(0, 0);
                for (var e = 0; e < this.item.length; e++) this._maxSize.width += this.item[e].width, this._maxSize.height += this.item[e].height, this._maxSize.width += this.itemOffset, this._maxSize.height += this.itemOffset;
                var t;
                t = 0 == this.Direction ? cc.v2(-this._maxSize.width * this.node.anchorX, -this._maxSize.height * this.node.anchorY) : cc.v2(this._maxSize.width * this.node.anchorX, this._maxSize.height * this.node.anchorY), this._screenRect = new cc.Rect(t.x, t.y, this._maxSize.width, this._maxSize.height), this.itemList = [];
                for (var o = 0; o < this.item.length; o++) {
                    var c = this.item[o].getAnchorPoint(),
                        i = this.item[o].getContentSize();
                    0 == this.Direction ? (t.addSelf(cc.v2(i.width * c.x, i.height * c.y)), this.item[o].x = t.x, this.item[o].y = 0, t.addSelf(cc.v2(i.width * c.x, i.height * c.y)), t.addSelf(cc.v2(this.itemOffset, this.itemOffset))) : (t.subSelf(cc.v2(i.width * c.x, i.height * c.y)), this.item[o].x = 0, this.item[o].y = t.y, t.subSelf(cc.v2(i.width * c.x, i.height * c.y)), t.subSelf(cc.v2(this.itemOffset, this.itemOffset))), this.itemList[o] = this.item[o]
                }
            },
            start: function() {},
            itemMoveBy: function(e) {
                for (var t = 0; t < this.item.length; t++) 0 == this.Direction ? this.item[t].x += e.x : this.item[t].y += e.y;
                this.updatePos()
            },
            updatePos: function() {
                var e = this.itemList[0],
                    t = this.itemList[this.itemList.length - 1],
                    o = !1;
                if (0 == this.Direction ? e.x < -this._maxSize.width / 2 && (o = !0) : e.y > this._maxSize.width / 2 && (o = !0), o) {
                    var c = this.itemList.shift();
                    this.itemList.push(c), 0 == this.Direction ? c.x = t.x + t.width + this.itemOffset : c.y = t.y - t.height - this.itemOffset
                }
                var i = !1;
                if (0 == this.Direction ? t.x > this._maxSize.width / 2 && (i = !0) : t.y < -this._maxSize.height / 2 && (i = !0), i) {
                    c = this.itemList.pop();
                    this.itemList.unshift(c), 0 == this.Direction ? c.x = e.x - e.width - this.itemOffset : c.y = e.y + e.height + this.itemOffset
                }
                this.updateScale()
            },
            updateScale: function() {
                if (!(this.scaleMax < this.scaleMin || 0 == this.scaleMax))
                    for (var e = 0; e < this.item.length; e++) {
                        var t;
                        if (0 == this.Direction) {
                            var o = this.item[e].x + this._maxSize.width / 2;
                            t = this.item[e].x < 0 ? o / this._maxSize.width : 1 - o / this._maxSize.width
                        } else {
                            var c = this.item[e].y + this._maxSize.height / 2;
                            t = this.item[e].y < 0 ? c / this._maxSize.height : 1 - c / this._maxSize.height
                        }
                        t *= 2;
                        var i = this.scaleMax - this.scaleMin;
                        i *= t, i += this.scaleMin, i = Math.abs(i), this.item[e].scaleX = i, this.item[e].scaleY = i
                    }
            },
            update: function(e) {
                if (0 != this._moveSpeed) {
                    for (var t = 0; t < this.item.length; t++) 0 == this.Direction ? this.item[t].x -= this._moveSpeed * e * this.speed : this.item[t].y -= this._moveSpeed * e * this.speed;
                    this._moveSpeed > 0 ? (this._moveSpeed -= e * this.rub, this._moveSpeed < 0 && (this._moveSpeed = 0)) : (this._moveSpeed += e * this.rub, this._moveSpeed > 0 && (this._moveSpeed = 0));
                    var o = -this._moveSpeed * e * this.speed;
                    this.itemMoveBy(cc.v2(o, o)), this.updatePos()
                }
            }
        }), cc._RF.pop()
    }, {}],
    ShopButton: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "0a4319kdHxH+rjp440W9WxQ", "ShopButton"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = c.property,
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.KeyNum = 0, t.Shop = null, t.interFace = null, t
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    this.a = 0, o.acc = 0
                }, t.prototype.ShopInterFace = function() {
                    this.Shop.active = !0, this.interFace.active = !1
                }, t.prototype.shopBack = function() {
                    this.Shop.active = !1, this.interFace.active = !0
                }, t.prototype.addKey = function() {
                    var e = cc.sys.localStorage.getItem("KeyNum"),
                        t = Number(e);
                    t += this.KeyNum, cc.sys.localStorage.setItem("KeyNum", t)
                }, t.prototype.Ad = function(e) {
                    var t = cc.find("Canvas/NoAd");
                    window.h5api.canPlayAd(function(e) {
                        console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", e.canPlayAd, "\u5269\u4f59\u6b21\u6570", e.remain), e.remain > 0 || (t.active = !0)
                    }.bind(this));
                    this.KeyNum;
                    console.log("\u64ad\u653e\u6b21\u6570", this.a);
                    var c = o.count;
                    console.log("a1", o.acc, "adNum1", e), window.h5api.playAd(function(t) {
                        if (1e4 === t.code) console.log("\u5f00\u59cb\u64ad\u653e");
                        else if (10001 === t.code) {
                            if (console.log("\u64ad\u653e\u7ed3\u675f"), o.acc++, console.log("a2", o.acc, "adNum2", e), o.acc == e) {
                                var i = cc.sys.localStorage.getItem("KeyNum"),
                                    n = Number(i);
                                n += c, console.log("\u83b7\u5f97\u94a5\u5319\u6210\u529f", c), cc.sys.localStorage.setItem("KeyNum", n), o.acc = 0
                            }
                        } else console.log("\u5e7f\u544a\u5f02\u5e38")
                    })
                }, t.prototype.BuyButton = function() {
                    cc.find("Canvas/Pop_Ups").active = !0, o.count = this.KeyNum
                }, t.prototype.ShopKey = function() {
                    1 === o.count ? this.Ad(1) : 3 === o.count ? this.Ad(2) : 6 === o.count ? this.Ad(3) : 9 === o.count ? this.Ad(4) : 12 === o.count ? this.Ad(5) : 17 === o.count && this.Ad(6), cc.find("Canvas/Pop_Ups").active = !1
                }, t.prototype.NoVideo = function() {
                    cc.find("Canvas/Pop_Ups").active = !1
                }, t.prototype.start = function() {}, t.count = 0, __decorate([n()], t.prototype, "KeyNum", void 0), __decorate([n(cc.Node)], t.prototype, "Shop", void 0), __decorate([n(cc.Node)], t.prototype, "interFace", void 0), t = o = __decorate([i], t)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    SingIn: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e99fcRU6ZRJo5TxI9mEoYBI", "SingIn"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = c.property,
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Yellow = null, t.SingIn1Node = null, t.SingIn2Node = null, t.SingIn3Node = null, t.SingIn4Node = null, t.SingIn5Node = null, t.SingIn6Node = null, t.SingIn7Node = null, t.Ok1 = null, t.Ok2 = null, t.Ok3 = null, t.Ok4 = null, t.Ok5 = null, t.Ok6 = null, t.Ok7 = null, t
                }
                var o;
                return __extends(t, e), o = t, t.prototype.onLoad = function() {
                    var e = cc.sys.localStorage.getItem("DayNum");
                    1 === Number(e) ? this.Ok1.active = !0 : 2 === Number(e) ? (this.Ok1.active = !0, this.Ok2.active = !0) : 3 === Number(e) ? (this.Ok1.active = !0, this.Ok2.active = !0, this.Ok3.active = !0) : 4 === Number(e) ? (this.Ok1.active = !0, this.Ok2.active = !0, this.Ok3.active = !0, this.Ok4.active = !0) : 5 === Number(e) ? (this.Ok1.active = !0, this.Ok2.active = !0, this.Ok3.active = !0, this.Ok4.active = !0, this.Ok5.active = !0) : 6 === Number(e) ? (this.Ok1.active = !0, this.Ok2.active = !0, this.Ok3.active = !0, this.Ok4.active = !0, this.Ok5.active = !0, this.Ok6.active = !0) : 7 === Number(e) && (this.Ok1.active = !0, this.Ok2.active = !0, this.Ok3.active = !0, this.Ok4.active = !0, this.Ok5.active = !0, this.Ok6.active = !0, this.Ok7.active = !0);
                    var t = cc.sys.localStorage.getItem("DayNum");
                    null === t && (this.SingIn1Node.getComponent(cc.Sprite).spriteFrame = this.Yellow), 1 === Number(t) && (this.SingIn2Node.getComponent(cc.Sprite).spriteFrame = this.Yellow), 2 === Number(t) && (this.SingIn3Node.getComponent(cc.Sprite).spriteFrame = this.Yellow), 3 === Number(t) && (this.SingIn4Node.getComponent(cc.Sprite).spriteFrame = this.Yellow), 4 === Number(t) && (this.SingIn5Node.getComponent(cc.Sprite).spriteFrame = this.Yellow), 5 === Number(t) && (this.SingIn6Node.getComponent(cc.Sprite).spriteFrame = this.Yellow), 6 === Number(t) && (this.SingIn7Node.getComponent(cc.Sprite).spriteFrame = this.Yellow)
                }, t.prototype.SingInKey = function(e) {
                    var t = cc.sys.localStorage.getItem("KeyNum"),
                        o = Number(t);
                    o += e, cc.sys.localStorage.setItem("KeyNum", o)
                }, t.prototype.SingIn1 = function() {
                    null === cc.sys.localStorage.getItem("DayNum") && (o.theDayBefore = (new Date).getDay(), cc.sys.localStorage.setItem("beforeNum", o.theDayBefore), this.SingInKey(1), this.Ok1.active = !0, o.DayNum = 1, cc.sys.localStorage.setItem("DayNum", o.DayNum), cc.find("Canvas/SingIn").active = !1, cc.find("Canvas/DoubleVedio").active = !0)
                }, t.prototype.SingInCallFunc = function(e, t, c, i) {
                    o.NowDay = (new Date).getDay(), o.theDayBefore = cc.sys.localStorage.getItem("beforeNum");
                    var n = cc.sys.localStorage.getItem("DayNum");
                    (Number(o.NowDay) > Number(o.theDayBefore) || Number(o.NowDay) < Number(o.theDayBefore)) && (Number(n) === e && (this.SingInKey(t), o.DayNum = c, cc.sys.localStorage.setItem("DayNum", o.DayNum), i.active = !0, o.theDayBefore = (new Date).getDay(), cc.sys.localStorage.setItem("beforeNum", o.theDayBefore), cc.find("Canvas/SingIn").active = !1, cc.find("Canvas/DoubleVedio").active = !0))
                }, t.prototype.SingIn2 = function() {
                    this.SingInCallFunc(1, 2, 2, this.Ok2)
                }, t.prototype.SingIn3 = function() {
                    this.SingInCallFunc(2, 2, 3, this.Ok3)
                }, t.prototype.SingIn4 = function() {
                    this.SingInCallFunc(3, 2, 4, this.Ok4)
                }, t.prototype.SingIn5 = function() {
                    this.SingInCallFunc(4, 2, 5, this.Ok5)
                }, t.prototype.SingIn6 = function() {
                    this.SingInCallFunc(5, 2, 6, this.Ok6)
                }, t.prototype.SingIn7 = function() {
                    this.SingInCallFunc(6, 3, 7, this.Ok7);
                    var e = cc.callFunc(function() {
                            var e = cc.sys.localStorage.getItem("DayNum");
                            if (7 === Number(e)) {
                                for (var t = 1; t < 8; t++) {
                                    cc.find("Canvas/SingIn/SingInOk/Ok" + t).active = !1
                                }
                                cc.sys.localStorage.removeItem("DayNum")
                            }
                        }),
                        t = cc.sequence(cc.delayTime(.12), e);
                    this.node.parent.runAction(t)
                }, t.prototype.start = function() {}, t.DayNum = 0, t.OKNum = 0, __decorate([n(cc.SpriteFrame)], t.prototype, "Yellow", void 0), __decorate([n(cc.Node)], t.prototype, "SingIn1Node", void 0), __decorate([n(cc.Node)], t.prototype, "SingIn2Node", void 0), __decorate([n(cc.Node)], t.prototype, "SingIn3Node", void 0), __decorate([n(cc.Node)], t.prototype, "SingIn4Node", void 0), __decorate([n(cc.Node)], t.prototype, "SingIn5Node", void 0), __decorate([n(cc.Node)], t.prototype, "SingIn6Node", void 0), __decorate([n(cc.Node)], t.prototype, "SingIn7Node", void 0), __decorate([n(cc.Node)], t.prototype, "Ok1", void 0), __decorate([n(cc.Node)], t.prototype, "Ok2", void 0), __decorate([n(cc.Node)], t.prototype, "Ok3", void 0), __decorate([n(cc.Node)], t.prototype, "Ok4", void 0), __decorate([n(cc.Node)], t.prototype, "Ok5", void 0), __decorate([n(cc.Node)], t.prototype, "Ok6", void 0), __decorate([n(cc.Node)], t.prototype, "Ok7", void 0), t = o = __decorate([i], t)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    SkinsButton: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1d51fhtO2ZFiIGNzOyM9J0T", "SkinsButton"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = c.property,
            a = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.InterFaceFather = null, t.BackGound = null, t.KeyNum = null, t.KeyScene = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    var e = cc.sys.localStorage.getItem("KeyNum");
                    this.KeyNum.getComponent(cc.Label).string = e
                }, t.prototype.back = function() {
                    this.BackGound.active = !1, this.InterFaceFather.active = !0
                }, t.prototype.Key = function() {}, t.prototype.start = function() {}, __decorate([n(cc.Node)], t.prototype, "InterFaceFather", void 0), __decorate([n(cc.Node)], t.prototype, "BackGound", void 0), __decorate([n(cc.Node)], t.prototype, "KeyNum", void 0), __decorate([n(cc.Node)], t.prototype, "KeyScene", void 0), t = __decorate([i], t)
            }(cc.Component);
        o.default = a, cc._RF.pop()
    }, {}],
    TouchMove: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "923c8716ulGMK8f/XHkywpQ", "TouchMove"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = cc._decorator,
            i = c.ccclass,
            n = (c.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                        var t = e.getLocation();
                        t = this.node.parent.convertToNodeSpaceAR(t), this.node.y = t.y, this.node.x = t.x
                    }, this)
                }, t.prototype.start = function() {}, t = __decorate([i], t)
            }(cc.Component));
        o.default = n, cc._RF.pop()
    }, {}],
    WinShuButton: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9bea8AmqLdA04H6J3lhmwuQ", "WinShuButton"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("./Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.Tv = function() {
                    cc.find("Canvas/Pop_Ups_Key").active = !0
                }, t.prototype.again = function() {
                    this.FailureScene.active = !1;
                    var e = cc.find("Canvas/Level" + c.default.LevelNum);
                    e && (e.active = !0)
                }, t.prototype.HintBack = function() {
                    this.HinScene.active = !1;
                    var e = cc.find("Canvas/Level" + c.default.LevelNum);
                    e && (e.active = !0), this.Hint1.active = !0, this.Hint2.active = !0, this.Hint1Answer.active = !1, this.Hint2Answer.active = !1
                }, t.prototype.KeyBack = function() {
                    this.KeyScene.active = !1;
                    var e = cc.find("Canvas/Level" + c.default.LevelNum);
                    e && (e.active = !0)
                }, t.prototype.WinSceneNextLevel = function() {
                    if (this.WinScene.active = !1, 31 === c.default.LevelNum) this.InterFace.active = !0;
                    else {
                        var e = cc.find("Canvas/Level" + c.default.LevelNum);
                        e && (e.active = !0)
                    }
                    this.Hint1.active = !0, this.Hint2.active = !0, this.Hint1Answer.active = !1, this.Hint2Answer.active = !1
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "FailureScene", void 0), __decorate([a(cc.Node)], t.prototype, "HinScene", void 0), __decorate([a(cc.Node)], t.prototype, "KeyScene", void 0), __decorate([a(cc.Node)], t.prototype, "WinScene", void 0), __decorate([a(cc.Node)], t.prototype, "Hint1", void 0), __decorate([a(cc.Node)], t.prototype, "Hint2", void 0), __decorate([a(cc.Node)], t.prototype, "Hint1Answer", void 0), __decorate([a(cc.Node)], t.prototype, "Hint2Answer", void 0), __decorate([a(cc.Node)], t.prototype, "InterFace", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "./Init": "Init"
    }],
    WinText: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "6b616S6025Iw6YEpkK2fdP8", "WinText"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("./Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.schedule(function() {
                        2 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Bạn đã tìm thấy đáp án\nCấp độ tiếp theo sẽ..." : 3 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Bạn đã tìm ra tất cả" : 4 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Bạn rất tinh mắt" : 5 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Bạn đã vượt qua 90% \n số người chơi" : 6 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Dừng lại, đừng nhìn chằm chằm vào đó" : 7 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Cá lớn ăn cá nhỏ, cá nhỏ ăn cá nhỏ hơn" : 8 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Rất ít người có thể vượt qua thử thách này" : 9 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Không cần tóc mà vẫn quyến rũ" : 10 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Quyến rũ theo kiểu riêng" : 11 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Hãy kiểm tra thật cẩn thận" : 12 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Tại sao 1 = 10" : 13 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Ăn 1 hạt có thêm 1 phần trí tuệ" : 14 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Cần học thêm cách sử dụng công cụ" : 15 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Nhiệt độ bình thường, không cần tiêm" : 16 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Làm rất tốt, hãy tiếp tục" : 17 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Vậy tại sao bạn muốn giữ nó?\nChiếc váy này thì sao?" : 18 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Con voi nhỏ, nhét vào tủ lạnh" : 19 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Vậy tại sao bạn muốn giữ nó?\nChiếc váy này thì sao?" : 20 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Tôi có thường xuyên bật đèn?" : 21 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Đã sẵn sàng cho thử thách tiếp theo chưa?" : 22 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Tại sao lại có lỗ khóa?" : 23 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Chúc mừng bạn đã thu thập được bảy màu\nThật đáng tiếc lại không thể triệu tập rồng" : 24 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Hành động nguy hiểm, đừng bắt chước" : 25 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Chúc mừng bạn đã thu thập được bảy màu\nThật đáng tiếc lại không thể triệu tập rồng" : 26 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Ba lô của bạn~~~~~ \n đây không phải trò chơi âm nhạc" : 27 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Hình như nó đang muốn ăn cơm gạo" : 28 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Không có nút???" : 29 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Xin đừng \n để người khác làm điều này" : 30 === c.default.LevelNum ? this.Win_Text.getComponent(cc.Label).string = "Hình như màn hình điện thoại không đủ lớn" : 31 === c.default.LevelNum && (this.Win_Text.getComponent(cc.Label).string = "Những thứ nhìn thấy có lúc không phải sự thật")
                    }, .12)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "Win_Text", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "./Init": "Init"
    }],
    level22Button: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ce09dfDXx5OxLrwJt0HtVkk", "level22Button"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = e("../../MyScript/Init"),
            i = cc._decorator,
            n = i.ccclass,
            a = i.property,
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.YesOrNo = null, t.Failure = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    c.default.LevelNum = 22
                }, t.prototype.failure = function(e) {
                    this.YesOrNo.active = !0;
                    var t = cc.callFunc(function() {
                            this.YesOrNo.active = !1, cc.find("Canvas/Level" + c.default.LevelNum).active = !1, e.active = !0
                        }, this),
                        o = cc.sequence(cc.delayTime(1), t);
                    this.node.runAction(o)
                }, t.prototype.one = function() {
                    this.failure(this.Failure)
                }, t.prototype.two = function() {
                    this.failure(this.Failure)
                }, t.prototype.three = function() {
                    this.failure(this.Failure)
                }, t.prototype.four = function() {
                    this.failure(this.Failure)
                }, t.prototype.five = function() {
                    this.failure(this.Failure)
                }, t.prototype.six = function() {
                    this.failure(this.Failure)
                }, t.prototype.start = function() {}, __decorate([a(cc.Node)], t.prototype, "YesOrNo", void 0), __decorate([a(cc.Node)], t.prototype, "Failure", void 0), t = __decorate([n], t)
            }(cc.Component);
        o.default = s, cc._RF.pop()
    }, {
        "../../MyScript/Init": "Init"
    }]
}, {}, ["AdHide", "DoubleGetKey", "GetKeyFailure", "ChooseInit", "ChooseLevel", "Level10Button", "Level11Button", "Level12Button", "Level13Touch", "Level14Button", "Level14Touch", "Level15Touch", "Level16Button", "Level17Touch", "Level18", "Level19Button", "Level20Button", "Level21Touch", "Level22Touch1", "Level22Touch2", "level22Button", "Level23Touch1", "Level23Touch2", "Level24Pass", "Level25Button", "Level26Touch", "Level27Touch", "Level28Touch", "Level29Touch", "Level29Touch2", "Level2Touch", "LevelDelayTimeTouch", "PassButton", "Level30Button", "Level3Button", "Level4Touch", "Level5Pass", "Level5Touch", "Level6Pass", "Level6Touch", "Level7Pass", "Level8Button", "Level8Touch", "Level9Button", "Level9Touch1", "Level9Touch2", "SingIn", "ShopButton", "BackGround", "BackGroundMain", "Bg", "GetKey", "HintButton", "Init", "InterFaceButton", "KeyInit", "LevelButton", "LevelInit", "MySound", "QuestionMark", "ScrollCard", "SkinsButton", "TouchMove", "WinShuButton", "WinText", "NoAd"]);