window.__require = function t(e, a, r) {
    function i(n, s) {
        if (!a[n]) {
            if (!e[n]) {
                var c = n.split("/");
                if (c = c[c.length - 1], !e[c]) {
                    var p = "function" == typeof __require && __require;
                    if (!s && p) return p(c, !0);
                    if (o) return o(c, !0);
                    throw new Error("Cannot find module '" + n + "'")
                }
                n = c
            }
            var l = a[n] = {
                exports: {}
            };
            e[n][0].call(l.exports, function(t) {
                return i(e[n][1][t] || t)
            }, l, l.exports, t, e, a, r)
        }
        return a[n].exports
    }
    for (var o = "function" == typeof __require && __require, n = 0; n < r.length; n++) i(r[n]);
    return i
}({
    AppConfig: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "32031SxwORLgqc/lNiWOIJk", "AppConfig"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return t.version = "2.4.2", t
        }();
        a.default = r, cc._RF.pop()
    }, {}],
    AudioManager: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "8747cLdJ0lAQ5g6UOL4vESp", "AudioManager"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return __extends(e, t), e.prototype.init = function(t) {
                this._respath = t, this._cache = new Map
            }, e.prototype.playBgm = function(t) {
                var e = this._cache[t];
                if (e) cc.audioEngine.playMusic(e, !0);
                else {
                    var a = this;
                    this.loadClip(t, function() {
                        a.playBgm(t)
                    })
                }
            }, e.prototype.playEffect = function(t) {
                if (!window.tt) {
                    var e = this._cache[t];
                    if (e) return cc.audioEngine.playEffect(e, !1);
                    var a = this;
                    this.loadClip(t, function() {
                        return a.playEffect(t)
                    })
                }
            }, e.prototype.stopEffect = function(t) {
                cc.audioEngine.stopEffect(t)
            }, e.prototype.preload = function(t) {
                var e = this;
                this.loadClip(t, function(a) {
                    e._cache[t] = a
                })
            }, e.prototype.loadClip = function(t, e) {
                var a = this,
                    r = this._respath + t;
                cc.loader.loadRes(r, cc.AudioClip, function(r, i) {
                    a._cache[t] = i, e && e(i)
                })
            }, e
        }(t("./IManager").default);
        a.default = r, cc._RF.pop()
    }, {
        "./IManager": "IManager"
    }],
    BagConfig: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "764aeN5CuFE1LsdzqZyCeLj", "BagConfig"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = {
            hair: {
                101: {
                    frame: "hairicon_r1",
                    parts: {
                        cloth_r1_Hair_f: 5
                    },
                    quality: "1",
                    id: "101",
                    mainattrs: ",2,3,6,7,9,11,",
                    attr1: "656.10857654514",
                    attr2: "1312.2171530903",
                    attr3: "1312.2171530903",
                    attr4: "656.10857654514",
                    attr5: "656.10857654514",
                    attr6: "1312.2171530903",
                    attr7: "1312.2171530903",
                    attr8: "656.10857654514",
                    attr9: "1312.2171530903",
                    attr10: "656.10857654514",
                    attr11: "1312.2171530903",
                    attr12: "656.10857654514",
                    per: "0"
                },
                102: {
                    frame: "hairicon_r2",
                    parts: {
                        cloth_r2_Hair_f: 5
                    },
                    quality: "1",
                    id: "102",
                    mainattrs: ",1,2,6,7,10,",
                    attr1: "1938.0571849619",
                    attr2: "1938.0571849619",
                    attr3: "969.02859248095",
                    attr4: "969.02859248095",
                    attr5: "969.02859248095",
                    attr6: "1938.0571849619",
                    attr7: "1938.0571849619",
                    attr8: "969.02859248095",
                    attr9: "969.02859248095",
                    attr10: "1938.0571849619",
                    attr11: "969.02859248095",
                    attr12: "969.02859248095",
                    per: "0"
                },
                103: {
                    frame: "hairicon_r3",
                    parts: {
                        cloth_r3_Hair_f: 5
                    },
                    quality: "1",
                    id: "103",
                    mainattrs: ",1,2,5,8,10,12,",
                    attr1: "2795.8306271121",
                    attr2: "2795.8306271121",
                    attr3: "1397.9153135561",
                    attr4: "1397.9153135561",
                    attr5: "2795.8306271121",
                    attr6: "1397.9153135561",
                    attr7: "1397.9153135561",
                    attr8: "2795.8306271121",
                    attr9: "1397.9153135561",
                    attr10: "2795.8306271121",
                    attr11: "1397.9153135561",
                    attr12: "2795.8306271121",
                    per: "0"
                },
                104: {
                    frame: "hairicon_r4",
                    parts: {
                        cloth_r4_Hair_b: -5,
                        cloth_r4_Hair_f: 5
                    },
                    quality: "1",
                    id: "104",
                    mainattrs: ",2,3,4,6,8,12,",
                    attr1: "1980.1680021779",
                    attr2: "3960.3360043558",
                    attr3: "3960.3360043558",
                    attr4: "3960.3360043558",
                    attr5: "1980.1680021779",
                    attr6: "3960.3360043558",
                    attr7: "1980.1680021779",
                    attr8: "3960.3360043558",
                    attr9: "1980.1680021779",
                    attr10: "1980.1680021779",
                    attr11: "1980.1680021779",
                    attr12: "3960.3360043558",
                    per: "0"
                },
                201: {
                    frame: "hairicon_sr1",
                    parts: {
                        cloth_sr1_Hair_b: -5,
                        cloth_sr1_Hair_f: 5
                    },
                    quality: "2",
                    id: "201",
                    mainattrs: ",1,4,5,6,9,10,12,",
                    attr1: "10926.939277448",
                    attr2: "5463.4696387238",
                    attr3: "5463.4696387238",
                    attr4: "10926.939277448",
                    attr5: "10926.939277448",
                    attr6: "10926.939277448",
                    attr7: "5463.4696387238",
                    attr8: "5463.4696387238",
                    attr9: "10926.939277448",
                    attr10: "10926.939277448",
                    attr11: "5463.4696387238",
                    attr12: "10926.939277448",
                    per: "0"
                }
            },
            cloth: {
                101: {
                    frame: "topicon_r1",
                    parts: {
                        cloth_r1_Top_f: 4
                    },
                    quality: "1",
                    id: "101",
                    mainattrs: ",2,3,6,7,9,11,",
                    attr1: "656.10857654514",
                    attr2: "1312.2171530903",
                    attr3: "1312.2171530903",
                    attr4: "656.10857654514",
                    attr5: "656.10857654514",
                    attr6: "1312.2171530903",
                    attr7: "1312.2171530903",
                    attr8: "656.10857654514",
                    attr9: "1312.2171530903",
                    attr10: "656.10857654514",
                    attr11: "1312.2171530903",
                    attr12: "656.10857654514",
                    per: "0"
                },
                102: {
                    frame: "topicon_r2",
                    parts: {
                        cloth_r2_Top_f: 4
                    },
                    quality: "1",
                    id: "102",
                    mainattrs: ",1,2,6,7,10,",
                    attr1: "1938.0571849619",
                    attr2: "1938.0571849619",
                    attr3: "969.02859248095",
                    attr4: "969.02859248095",
                    attr5: "969.02859248095",
                    attr6: "1938.0571849619",
                    attr7: "1938.0571849619",
                    attr8: "969.02859248095",
                    attr9: "969.02859248095",
                    attr10: "1938.0571849619",
                    attr11: "969.02859248095",
                    attr12: "969.02859248095",
                    per: "0"
                },
                103: {
                    frame: "topicon_r3",
                    parts: {
                        cloth_r3_Top_f: 4
                    },
                    quality: "1",
                    id: "103",
                    mainattrs: ",1,2,5,8,10,12,",
                    attr1: "2795.8306271121",
                    attr2: "2795.8306271121",
                    attr3: "1397.9153135561",
                    attr4: "1397.9153135561",
                    attr5: "2795.8306271121",
                    attr6: "1397.9153135561",
                    attr7: "1397.9153135561",
                    attr8: "2795.8306271121",
                    attr9: "1397.9153135561",
                    attr10: "2795.8306271121",
                    attr11: "1397.9153135561",
                    attr12: "2795.8306271121",
                    per: "0"
                },
                104: {
                    frame: "topicon_r4",
                    parts: {
                        cloth_r4_Top_f: 4
                    },
                    quality: "1",
                    id: "104",
                    mainattrs: ",2,3,4,6,8,12,",
                    attr1: "1980.1680021779",
                    attr2: "3960.3360043558",
                    attr3: "3960.3360043558",
                    attr4: "3960.3360043558",
                    attr5: "1980.1680021779",
                    attr6: "3960.3360043558",
                    attr7: "1980.1680021779",
                    attr8: "3960.3360043558",
                    attr9: "1980.1680021779",
                    attr10: "1980.1680021779",
                    attr11: "1980.1680021779",
                    attr12: "3960.3360043558",
                    per: "0"
                },
                201: {
                    frame: "topicon_sr1",
                    parts: {
                        cloth_sr1_Top_f: 4
                    },
                    quality: "2",
                    id: "201",
                    mainattrs: ",1,4,5,6,9,10,12,",
                    attr1: "10926.939277448",
                    attr2: "5463.4696387238",
                    attr3: "5463.4696387238",
                    attr4: "10926.939277448",
                    attr5: "10926.939277448",
                    attr6: "10926.939277448",
                    attr7: "5463.4696387238",
                    attr8: "5463.4696387238",
                    attr9: "10926.939277448",
                    attr10: "10926.939277448",
                    attr11: "5463.4696387238",
                    attr12: "10926.939277448",
                    per: "0"
                }
            },
            trous: {
                101: {
                    frame: "bottomicon_r1",
                    parts: {
                        cloth_r1_Bottom_f: 1
                    },
                    quality: "1",
                    id: "101",
                    mainattrs: ",2,3,6,7,9,11,",
                    attr1: "656.10857654514",
                    attr2: "1312.2171530903",
                    attr3: "1312.2171530903",
                    attr4: "656.10857654514",
                    attr5: "656.10857654514",
                    attr6: "1312.2171530903",
                    attr7: "1312.2171530903",
                    attr8: "656.10857654514",
                    attr9: "1312.2171530903",
                    attr10: "656.10857654514",
                    attr11: "1312.2171530903",
                    attr12: "656.10857654514",
                    per: "0"
                },
                102: {
                    frame: "bottomicon_r2",
                    parts: {
                        cloth_r2_Bottom_f: 1
                    },
                    quality: "1",
                    id: "102",
                    mainattrs: ",1,2,6,7,10,",
                    attr1: "1938.0571849619",
                    attr2: "1938.0571849619",
                    attr3: "969.02859248095",
                    attr4: "969.02859248095",
                    attr5: "969.02859248095",
                    attr6: "1938.0571849619",
                    attr7: "1938.0571849619",
                    attr8: "969.02859248095",
                    attr9: "969.02859248095",
                    attr10: "1938.0571849619",
                    attr11: "969.02859248095",
                    attr12: "969.02859248095",
                    per: "0"
                },
                103: {
                    frame: "bottomicon_r3",
                    parts: {
                        cloth_r3_Bottom_f: 1
                    },
                    quality: "1",
                    id: "103",
                    mainattrs: ",1,2,5,8,10,12,",
                    attr1: "2795.8306271121",
                    attr2: "2795.8306271121",
                    attr3: "1397.9153135561",
                    attr4: "1397.9153135561",
                    attr5: "2795.8306271121",
                    attr6: "1397.9153135561",
                    attr7: "1397.9153135561",
                    attr8: "2795.8306271121",
                    attr9: "1397.9153135561",
                    attr10: "2795.8306271121",
                    attr11: "1397.9153135561",
                    attr12: "2795.8306271121",
                    per: "0"
                },
                104: {
                    frame: "bottomicon_r4",
                    parts: {
                        cloth_r4_Bottom_f: 3
                    },
                    quality: "1",
                    id: "104",
                    mainattrs: ",2,3,4,6,8,12,",
                    attr1: "1980.1680021779",
                    attr2: "3960.3360043558",
                    attr3: "3960.3360043558",
                    attr4: "3960.3360043558",
                    attr5: "1980.1680021779",
                    attr6: "3960.3360043558",
                    attr7: "1980.1680021779",
                    attr8: "3960.3360043558",
                    attr9: "1980.1680021779",
                    attr10: "1980.1680021779",
                    attr11: "1980.1680021779",
                    attr12: "3960.3360043558",
                    per: "0"
                },
                201: {
                    frame: "bottomicon_sr1",
                    parts: {
                        cloth_sr1_Bottom_f: 1
                    },
                    quality: "2",
                    id: "201",
                    mainattrs: ",1,4,5,6,9,10,12,",
                    attr1: "10926.939277448",
                    attr2: "5463.4696387238",
                    attr3: "5463.4696387238",
                    attr4: "10926.939277448",
                    attr5: "10926.939277448",
                    attr6: "10926.939277448",
                    attr7: "5463.4696387238",
                    attr8: "5463.4696387238",
                    attr9: "10926.939277448",
                    attr10: "10926.939277448",
                    attr11: "5463.4696387238",
                    attr12: "10926.939277448",
                    per: "0"
                }
            },
            shoe: {
                101: {
                    frame: "shoeicon_r1",
                    parts: {
                        cloth_r1_Shoe_f: 2
                    },
                    quality: "1",
                    id: "101",
                    mainattrs: ",2,3,6,7,9,11,",
                    attr1: "656.10857654514",
                    attr2: "1312.2171530903",
                    attr3: "1312.2171530903",
                    attr4: "656.10857654514",
                    attr5: "656.10857654514",
                    attr6: "1312.2171530903",
                    attr7: "1312.2171530903",
                    attr8: "656.10857654514",
                    attr9: "1312.2171530903",
                    attr10: "656.10857654514",
                    attr11: "1312.2171530903",
                    attr12: "656.10857654514",
                    per: "0"
                },
                102: {
                    frame: "shoeicon_r2",
                    parts: {
                        cloth_r2_Shoe_f: 2
                    },
                    quality: "1",
                    id: "102",
                    mainattrs: ",1,2,6,7,10,",
                    attr1: "1938.0571849619",
                    attr2: "1938.0571849619",
                    attr3: "969.02859248095",
                    attr4: "969.02859248095",
                    attr5: "969.02859248095",
                    attr6: "1938.0571849619",
                    attr7: "1938.0571849619",
                    attr8: "969.02859248095",
                    attr9: "969.02859248095",
                    attr10: "1938.0571849619",
                    attr11: "969.02859248095",
                    attr12: "969.02859248095",
                    per: "0"
                },
                103: {
                    frame: "shoeicon_r3",
                    parts: {
                        cloth_r3_Shoe_f: 2
                    },
                    quality: "1",
                    id: "103",
                    mainattrs: ",1,2,5,8,10,12,",
                    attr1: "2795.8306271121",
                    attr2: "2795.8306271121",
                    attr3: "1397.9153135561",
                    attr4: "1397.9153135561",
                    attr5: "2795.8306271121",
                    attr6: "1397.9153135561",
                    attr7: "1397.9153135561",
                    attr8: "2795.8306271121",
                    attr9: "1397.9153135561",
                    attr10: "2795.8306271121",
                    attr11: "1397.9153135561",
                    attr12: "2795.8306271121",
                    per: "0"
                },
                104: {
                    frame: "shoeicon_r4",
                    parts: {
                        cloth_r4_Shoe_f: 2
                    },
                    quality: "1",
                    id: "104",
                    mainattrs: ",2,3,4,6,8,12,",
                    attr1: "1980.1680021779",
                    attr2: "3960.3360043558",
                    attr3: "3960.3360043558",
                    attr4: "3960.3360043558",
                    attr5: "1980.1680021779",
                    attr6: "3960.3360043558",
                    attr7: "1980.1680021779",
                    attr8: "3960.3360043558",
                    attr9: "1980.1680021779",
                    attr10: "1980.1680021779",
                    attr11: "1980.1680021779",
                    attr12: "3960.3360043558",
                    per: "0"
                },
                201: {
                    frame: "shoeicon_sr1",
                    parts: {
                        cloth_sr1_Shoe_f: 2
                    },
                    quality: "2",
                    id: "201",
                    mainattrs: ",1,4,5,6,9,10,12,",
                    attr1: "10926.939277448",
                    attr2: "5463.4696387238",
                    attr3: "5463.4696387238",
                    attr4: "10926.939277448",
                    attr5: "10926.939277448",
                    attr6: "10926.939277448",
                    attr7: "5463.4696387238",
                    attr8: "5463.4696387238",
                    attr9: "10926.939277448",
                    attr10: "10926.939277448",
                    attr11: "5463.4696387238",
                    attr12: "10926.939277448",
                    per: "0"
                }
            },
            hat: {
                0: {
                    frame: "haticon_0",
                    quality: "0",
                    id: "0"
                },
                101: {
                    frame: "haticon_r1",
                    parts: {
                        cloth_r1_Hat_b: -6,
                        cloth_r1_Hat_f: 6
                    },
                    quality: "1",
                    id: "101",
                    mainattrs: "",
                    attr1: "3",
                    attr2: "3",
                    attr3: "3",
                    attr4: "3",
                    attr5: "3",
                    attr6: "3",
                    attr7: "3",
                    attr8: "3",
                    attr9: "3",
                    attr10: "3",
                    attr11: "3",
                    attr12: "3",
                    per: "3"
                },
                102: {
                    frame: "haticon_r2",
                    parts: {
                        cloth_r2_Hat_f: 6
                    },
                    quality: "1",
                    id: "102",
                    mainattrs: "",
                    attr1: "3",
                    attr2: "3",
                    attr3: "3",
                    attr4: "3",
                    attr5: "3",
                    attr6: "3",
                    attr7: "3",
                    attr8: "3",
                    attr9: "3",
                    attr10: "3",
                    attr11: "3",
                    attr12: "3",
                    per: "3"
                },
                103: {
                    frame: "haticon_r3",
                    parts: {
                        cloth_r3_Hat_f: 6
                    },
                    quality: "1",
                    id: "103",
                    mainattrs: "",
                    attr1: "3",
                    attr2: "3",
                    attr3: "3",
                    attr4: "3",
                    attr5: "3",
                    attr6: "3",
                    attr7: "3",
                    attr8: "3",
                    attr9: "3",
                    attr10: "3",
                    attr11: "3",
                    attr12: "3",
                    per: "3"
                },
                104: {
                    frame: "haticon_r4",
                    parts: {
                        cloth_r4_Hat_f: 6
                    },
                    quality: "1",
                    id: "104",
                    mainattrs: "",
                    attr1: "3",
                    attr2: "3",
                    attr3: "3",
                    attr4: "3",
                    attr5: "3",
                    attr6: "3",
                    attr7: "3",
                    attr8: "3",
                    attr9: "3",
                    attr10: "3",
                    attr11: "3",
                    attr12: "3",
                    per: "3"
                },
                201: {
                    frame: "haticon_sr1",
                    parts: {
                        cloth_sr1_Hat_f: 6
                    },
                    quality: "2",
                    id: "201",
                    mainattrs: "",
                    attr1: "5",
                    attr2: "5",
                    attr3: "5",
                    attr4: "5",
                    attr5: "5",
                    attr6: "5",
                    attr7: "5",
                    attr8: "5",
                    attr9: "5",
                    attr10: "5",
                    attr11: "5",
                    attr12: "5",
                    per: "5"
                },
                202: {
                    frame: "haticon_sr2",
                    parts: {
                        cloth_sr2_Hat_b: -6,
                        cloth_sr2_Hat_f: 6
                    },
                    quality: "2",
                    id: "202",
                    mainattrs: "",
                    attr1: "5",
                    attr2: "5",
                    attr3: "5",
                    attr4: "5",
                    attr5: "5",
                    attr6: "5",
                    attr7: "5",
                    attr8: "5",
                    attr9: "5",
                    attr10: "5",
                    attr11: "5",
                    attr12: "5",
                    per: "5"
                },
                203: {
                    frame: "haticon_sr3",
                    parts: {
                        cloth_sr3_Hat_f: 6
                    },
                    quality: "2",
                    id: "203",
                    mainattrs: "",
                    attr1: "5",
                    attr2: "5",
                    attr3: "5",
                    attr4: "5",
                    attr5: "5",
                    attr6: "5",
                    attr7: "5",
                    attr8: "5",
                    attr9: "5",
                    attr10: "5",
                    attr11: "5",
                    attr12: "5",
                    per: "5"
                },
                204: {
                    frame: "haticon_sr4",
                    parts: {
                        cloth_sr4_Hat_f: 6
                    },
                    quality: "2",
                    id: "204",
                    mainattrs: "",
                    attr1: "8",
                    attr2: "8",
                    attr3: "8",
                    attr4: "8",
                    attr5: "8",
                    attr6: "8",
                    attr7: "8",
                    attr8: "8",
                    attr9: "8",
                    attr10: "8",
                    attr11: "8",
                    attr12: "8",
                    per: "8"
                },
                205: {
                    frame: "haticon_sr5",
                    parts: {
                        cloth_sr5_Hat_f: 6
                    },
                    quality: "2",
                    id: "205",
                    mainattrs: "",
                    attr1: "8",
                    attr2: "8",
                    attr3: "8",
                    attr4: "8",
                    attr5: "8",
                    attr6: "8",
                    attr7: "8",
                    attr8: "8",
                    attr9: "8",
                    attr10: "8",
                    attr11: "8",
                    attr12: "8",
                    per: "8"
                }
            },
            face: {
                0: {
                    frame: "faceicon_0",
                    quality: "0",
                    id: "0"
                },
                101: {
                    frame: "faceicon_r1",
                    parts: {
                        cloth_r1_Face_f: 1
                    },
                    quality: "1",
                    id: "101",
                    mainattrs: "",
                    attr1: "3",
                    attr2: "3",
                    attr3: "3",
                    attr4: "3",
                    attr5: "3",
                    attr6: "3",
                    attr7: "3",
                    attr8: "3",
                    attr9: "3",
                    attr10: "3",
                    attr11: "3",
                    attr12: "3",
                    per: "3"
                },
                102: {
                    frame: "faceicon_r2",
                    parts: {
                        cloth_r2_Face_f: 1
                    },
                    quality: "1",
                    id: "102",
                    mainattrs: "",
                    attr1: "3",
                    attr2: "3",
                    attr3: "3",
                    attr4: "3",
                    attr5: "3",
                    attr6: "3",
                    attr7: "3",
                    attr8: "3",
                    attr9: "3",
                    attr10: "3",
                    attr11: "3",
                    attr12: "3",
                    per: "3"
                },
                103: {
                    frame: "faceicon_r3",
                    parts: {
                        cloth_r3_Face_f: 1
                    },
                    quality: "1",
                    id: "103",
                    mainattrs: "",
                    attr1: "3",
                    attr2: "3",
                    attr3: "3",
                    attr4: "3",
                    attr5: "3",
                    attr6: "3",
                    attr7: "3",
                    attr8: "3",
                    attr9: "3",
                    attr10: "3",
                    attr11: "3",
                    attr12: "3",
                    per: "3"
                },
                201: {
                    frame: "faceicon_sr1",
                    parts: {
                        cloth_sr1_Face_f: 1
                    },
                    quality: "2",
                    id: "201",
                    mainattrs: "",
                    attr1: "5",
                    attr2: "5",
                    attr3: "5",
                    attr4: "5",
                    attr5: "5",
                    attr6: "5",
                    attr7: "5",
                    attr8: "5",
                    attr9: "5",
                    attr10: "5",
                    attr11: "5",
                    attr12: "5",
                    per: "5"
                },
                202: {
                    frame: "faceicon_sr2",
                    parts: {
                        cloth_sr2_Face_f: 1
                    },
                    quality: "2",
                    id: "202",
                    mainattrs: "",
                    attr1: "5",
                    attr2: "5",
                    attr3: "5",
                    attr4: "5",
                    attr5: "5",
                    attr6: "5",
                    attr7: "5",
                    attr8: "5",
                    attr9: "5",
                    attr10: "5",
                    attr11: "5",
                    attr12: "5",
                    per: "5"
                },
                203: {
                    frame: "faceicon_sr3",
                    parts: {
                        cloth_sr3_Face_f: 1
                    },
                    quality: "2",
                    id: "203",
                    mainattrs: "",
                    attr1: "8",
                    attr2: "8",
                    attr3: "8",
                    attr4: "8",
                    attr5: "8",
                    attr6: "8",
                    attr7: "8",
                    attr8: "8",
                    attr9: "8",
                    attr10: "8",
                    attr11: "8",
                    attr12: "8",
                    per: "8"
                }
            }
        };
        a.default = r, cc._RF.pop()
    }, {}],
    BagController: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "e226chQ3GlH9Zu5bVVaMtCc", "BagController"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("./model/BagModel"),
            i = t("../../datas/const/EventConst"),
            o = t("../common/DataStoreManager"),
            n = function() {
                function t() {}
                return t.getInstance = function() {
                    return this._instance || (this._instance = new t), this._instance
                }, t.prototype.init = function() {
                    this._bagModel = new r.default(this.importData()), App.EventManager.addEventListener(i.default.MERGE_SUCCESS, this.onListenerMerge.bind(this), this)
                }, t.prototype.rewardItem = function(t) {
                    this.addItem({
                        characterType: t.type,
                        characterID: t.id
                    }), App.EventManager.emitEvent(i.default.UI_BAG_NEW, {
                        characterType: t.type
                    })
                }, t.prototype.addItem = function(t) {
                    var e = t.characterType,
                        a = t.characterID;
                    0 != a.length && (this._bagModel.items[e] || (this._bagModel.items[e] = new Map), this._bagModel.items[e][a] = a, this.save())
                }, t.prototype.getItemGroup = function(t) {
                    var e = [],
                        a = this._bagModel.items[t];
                    for (var r in a = a || {}) e.push(a[r]);
                    return e
                }, t.prototype.hadItem = function(t, e) {
                    return !(!this._bagModel.items[t] || !this._bagModel.items[t][e])
                }, t.prototype.onListenerMerge = function(t) {
                    this.addItem(t)
                }, t.prototype.save = function() {
                    o.default.getInstance().save()
                }, t.prototype.exportData = function() {
                    return this._bagModel.exportData()
                }, t.prototype.importData = function() {
                    return o.default.getInstance().getInitData(r.default.SAVE_KEY)
                }, t
            }();
        a.default = n, cc._RF.pop()
    }, {
        "../../datas/const/EventConst": "EventConst",
        "../common/DataStoreManager": "DataStoreManager",
        "./model/BagModel": "BagModel"
    }],
    BagItemUI: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "ad0efeOt9VK8L4j9J2yGqbP", "BagItemUI"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../../framework/view/ViewBasic")),
            n = t("../../../datas/const/EventConst"),
            s = t("../../../framework/manager/LoaderManager"),
            c = t("../../common/UITips"),
            p = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.getChildByPath(this.node, "selected").active = !1, this.initUIClick([this.node.name])
                }, e.prototype.initData = function(t) {
                    this._data = t;
                    var e = this,
                        a = App.CharacterConfHelper.getFrameUrl(this._data.type, this._data.id),
                        r = this.getChildByPath(this.node, "image").getComponent(cc.Sprite);
                    r.node.active = !1, s.default.getInstance().loadSpriteFrame(a, function(t) {
                        r.spriteFrame = t, r.node.active = !0, e.updateUnLock(r)
                    })
                }, e.prototype.updateUnLock = function(t) {
                    var e = App.BagController.hadItem(this._data.type, this._data.id);
                    t.node.color = e ? new cc.Color(255, 255, 255) : new cc.Color(107, 89, 89)
                }, e.prototype.setSelected = function(t) {
                    this._data.type == t.type && (this.getChildByPath(this.node, "selected").active = this._data.id == t.id)
                }, e.prototype.onUIClick = function(t, e) {
                    var a = App.BagController.hadItem(this._data.type, this._data.id);
                    if (this.node.name == e) {
                        if (!a) return void c.default.show("Đến hệ thống quay thẻ để mở khóa ~");
                        this.sendEvent(n.default.UI_BAG_ITEM_SELECT, {
                            type: this._data.type,
                            id: this._data.id
                        })
                    }
                }, e = __decorate([i], e)
            }(o.default);
        a.default = p, cc._RF.pop()
    }, {
        "../../../datas/const/EventConst": "EventConst",
        "../../../framework/manager/LoaderManager": "LoaderManager",
        "../../../framework/view/ViewBasic": "ViewBasic",
        "../../common/UITips": "UITips"
    }],
    BagModel: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "3780dN1MK5L37Q9GliHmDDW", "BagModel"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = function() {
            function t(t) {
                if (this.items = new Map, t)
                    for (var e in t) this[e] = t[e]
            }
            return t.prototype.exportData = function() {
                return {
                    key: t.SAVE_KEY,
                    value: {
                        items: this.items
                    }
                }
            }, t.SAVE_KEY = "bag", t
        }();
        a.default = r, cc._RF.pop()
    }, {}],
    BagUI: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "4ecd2dE7ClK25HvttqCyZ49", "BagUI"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../../framework/view/ViewBasic")),
            n = t("../../../datas/const/EventConst"),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), App.PlayerController.isTutorialComplete ? this.node.active = !0 : this.node.active = !1, this.node.x = 500, this.bindEvents([n.default.UI_SHOW_MERGE_PANEL])
                }, e.prototype.onEvents = function(t, e) {
                    switch (t) {
                        case n.default.UI_SHOW_MERGE_PANEL:
                            var a = !e.visible;
                            this.doActions(a)
                    }
                }, e.prototype.doActions = function(t) {
                    var e = this;
                    if (!this._actionBlock) {
                        this._actionBlock = !0;
                        var a = this,
                            r = this.node.y,
                            i = this.node.width / 2;
                        t ? this.node.active = t : i = 500, cc.tween(this.node).to(.1, {
                            position: cc.v2(i, r)
                        }).call(function() {
                            (a.node.active = t, a._actionBlock = !1, t) || e.getChildByPath(e.node, "menuPanel").getComponent("MenuPanel").runActions(!1)
                        }).start()
                    }
                }, e = __decorate([i], e)
            }(o.default);
        a.default = s, cc._RF.pop()
    }, {
        "../../../datas/const/EventConst": "EventConst",
        "../../../framework/view/ViewBasic": "ViewBasic"
    }],
    BaseUI: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "e87efEY45dOMoDAY/rgq8rU", "BaseUI"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/ViewBasic")),
            n = t("../../datas/const/EventConst"),
            s = t("../../datas/const/PopupConst"),
            c = t("./../common/UITips"),
            p = t("../../framework/utils/UIHelper"),
            l = t("../../framework/utils/NumberHelper"),
            d = t("../../datas/configs/GameConfig"),
            h = t("../common/LogManager"),
            u = t("../../framework/platform/PlatformManager"),
            f = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    if (this.node.y = cc.winSize.height / 2, p.default.adapterScreen(this.node), this.initLeftPanel(), this.initUIClick(["btnAdd", "touchPanel", "btnNavigateGift", "iconDragon", "btnRecordVideo"]), this.bindEvents([n.default.UI_COIN, n.default.MERGE_SUCCESS, n.default.UI_BAG_NEW, n.default.UI_QUEST_UNREAD, n.default.UI_RANK, n.default.UI_VISIT_MODE, n.default.TUTORIAL_COMPLETE]), this.getChildByPath(this.node, "top.rankTips").active = !1, this.getChildByPath(this.node, "left.btnRecordVideo").active = !1, window.qq && (this.getChildByPath(this.node, "top.iconDragon").active = !1, this.getChildByPath(this.node, "top.btnNavigateGift").active = !1), window.tt) {
                        this.getChildByPath(this.node, "top.iconDragon").active = !1, this.getChildByPath(this.node, "top.btnNavigateGift").active = !1, this.getChildByPath(this.node, "left.btnVisitor").active = !1, this.getChildByPath(this.node, "left.btnPhoto").active = !1, this.getChildByPath(this.node, "left.btnRecordVideo").active = !0, this.getChildByPath(this.node, "left.btnRank").active = !1;
                        var t = u.default.getInstance().getPlatform();
                        t.recorderInit(function(t) {}, function(t) {}), t.recorderStop()
                    }
                    window.h5api && (this.getChildByPath(this.node, "top.iconDragon").active = !1, this.getChildByPath(this.node, "top.btnNavigateGift").active = !1, this.getChildByPath(this.node, "left.btnVisitor").active = !1), this.updateTutorialComplete()
                }, e.prototype.updateTutorialComplete = function() {
                    this.node.getChildByName("left").active = App.PlayerController.isTutorialComplete
                }, e.prototype.start = function() {
                    var t = this;
                    (this.updateCoins(), this.updateRanks(), this.updateQuestUnread(), window.wx) && u.default.getInstance().getPlatform().getVisits(function(e) {
                        var a = 0;
                        e.likes && (a = e.likes.length);
                        var r = t.getChildByPath(t.node, "left.btnVisitor");
                        t.setLabel(t.getChildByPath(r, "Background.img_redppint.tValue"), a.toString());
                        var i = t.getChildByPath(r, "Background.img_redppint");
                        0 == a && (i.active = !1)
                    })
                }, e.prototype.initLeftPanel = function() {
                    var t = this,
                        e = this.getChildByPath(this.node, "left");
                    cc.sys.os != cc.sys.OS_IOS || cc.sys.platform != cc.sys.IPHONE && cc.sys.platform != cc.sys.IPAD || (e.getChildByName("btnPhoto").active = !1, e.getChildByName("btnRank").active = !1, e.getChildByName("btnPK").active = !1), this.getChildByPath(this.node, "left.btnPK").getChildByName("handNode").active = !1, this.getChildByPath(this.node, "left.btnMystery").getChildByName("handNode").active = !1;
                    [
                        ["btnPhoto", "baseui_btnphoto", "PHOTO"],
                        ["btnRank", "baseui_btnrank", "RANK"],
                        ["btnPK", "baseui_btnpk", "PK"],
                        ["btnMystery", "baseui_btnmystery", "MYSTERY"],
                        ["btnQuests", "baseui_btnquests", "QUESTS"],
                        ["btnVisitSetting", "baseui_visitsetting", "VISIT_SETTING"],
                        ["btnVisitor", "baseui_visitor", "VISITOR"],
                        ["btnRecordVideo", "baseui_recordvideo", "RECORDVIDEO"]
                    ].forEach(function(a) {
                        var r = a[0],
                            i = e.getChildByName(r);
                        i && (t.setLabel(i.getChildByName("Background").getChildByName("tTitle"), a[1]), t.onClick(i, function(e) {
                            if ("btnRank" == r && window.h5api) {
                                if (window.h5api.isLogin()) {
                                    var o = u.default.getInstance().getPlatform().getLastLevel();
                                    window.h5api.submitRankScore(225, o, function(t) {
                                        console.log("\u63d0\u4ea4\u7ed3\u679c\uff1a", t.data.score, t.data.rank)
                                    })
                                }
                                window.h5api.showRankList()
                            } else if ("btnMystery" == r && (i.getChildByName("handNode").active = !1, App.MergeController.LevelMax < 4)) c.default.show("uitips_mystery_level_limit");
                            else if ("btnPK" == r && (i.getChildByName("handNode").active = !1, h.default.getInstance().add({
                                    tag: 7
                                }), App.MergeController.LevelMax < 6)) c.default.show("uitips_pk_limit");
                            else {
                                if ("btnVisitor" == r) t.getChildByPath(i, "Background.img_redppint").active = !1, h.default.getInstance().add({
                                    tag: 26
                                });
                                if ("btnMystery" == r && h.default.getInstance().add({
                                        tag: 5
                                    }), "btnPhoto" == r && h.default.getInstance().add({
                                        tag: 24
                                    }), "btnRecordVideo" == r) {
                                    var n = u.default.getInstance().getPlatform();
                                    n.isRecordVideoNow() ? n.recorderStop(function() {
                                        App.PopupManager.show(s.PopupConst[a[2]])
                                    }) : n.recorderStart(), t.updateBtnRecordVideo()
                                } else App.PopupManager.show(s.PopupConst[a[2]])
                            }
                        }, t))
                    })
                }, e.prototype.updateBtnRecordVideo = function() {
                    var t = u.default.getInstance().getPlatform(),
                        e = t.isRecordVideoNow() ? "Tạm ngừng" : "Ghi màn hình";
                    this.setLabel(this.getChildByPath(this.node, "left.btnRecordVideo.Background.tTitle"), e), this.node.getParent().getChildByName("tRecording").active = t.isRecordVideoNow()
                }, e.prototype.updateCoins = function() {
                    var t = this.getChildByPath(this.node, "top.coinBar.tValue"),
                        e = l.default.unitFormat(App.PlayerController.Coin);
                    this.setLabel(t, e), t.stopAllActions(), t.runAction(cc.sequence(cc.scaleTo(.1, 1.2), cc.scaleTo(.1, 1)))
                }, e.prototype.updateRanks = function() {
                    var t = this.getChildByPath(this.node, "top.rankBar.tValue"),
                        e = App.PlayerController.getTotalEarning(),
                        a = l.default.unitFormat(e) + "/giây";
                    this.setLabel(t, a), t.stopAllActions(), t.runAction(cc.sequence(cc.scaleTo(.1, 1.2), cc.scaleTo(.1, 1)));
                    var r = App.PlayerController.Rank + 1;
                    this.getChildByPath(this.node, "top.rankBar.rankIcon").children.forEach(function(t) {
                        t.active = t.name == r.toString()
                    })
                }, e.prototype.updateQuestUnread = function() {
                    var t = this.getChildByPath(this.node, "left.btnQuests"),
                        e = !1;
                    App.PlayerController.isTodaySign ? App.PlayerController.QuestIds.forEach(function(t) {
                        var a = d.QuestsConfig[t.type][t.per];
                        a && ("merge" == t.type ? App.PlayerController.MergeTimes >= Number(a.times) && (e = !0) : App.PlayerController.getScore(t.key) >= Number(a.score) && (e = !0))
                    }) : e = !0;
                    this.getChildByPath(t, "Background.icon_warn").active = e
                }, e.prototype.showRankTips = function() {
                    if (!this._isShowTips) {
                        var t = this,
                            e = this.getChildByPath(this.node, "top.rankTips"),
                            a = d.RankConfig[App.PlayerController.Rank].earning;
                        this.setLabel(e.getChildByName("tTips"), "Hệ số:" + a), e.y = -50, e.active = !0, e.stopAllActions(), this._isShowTips = !0, cc.tween(e).to(.2, {
                            position: cc.v2(e.x, -100),
                            opacity: 255
                        }).delay(1).to(.5, {
                            opacity: 0
                        }).call(function() {
                            t._isShowTips = !1
                        }).start()
                    }
                }, e.prototype.onUIClick = function(t, e) {
                    switch (e) {
                        case "btnAdd":
                            App.PopupManager.show(s.PopupConst.FREE_COINS), h.default.getInstance().add({
                                tag: 12
                            });
                            break;
                        case "touchPanel":
                            this.showRankTips();
                            break;
                        case "btnNavigateGift":
                            App.PopupManager.show(s.PopupConst.NAVIFATE_GIFT);
                            break;
                        case "iconDragon":
                            if (window.qq) return void qq.navigateToMiniProgram({
                                appId: "1110342095"
                            });
                            window.wx && wx.navigateToMiniProgram({
                                appId: "wx25433e375152fff5"
                            })
                    }
                }, e.prototype.onEvents = function(t, e) {
                    switch (t) {
                        case n.default.UI_COIN:
                            this.updateCoins();
                            break;
                        case n.default.MERGE_SUCCESS:
                        case n.default.UI_RANK:
                            this.updateRanks();
                            break;
                        case n.default.UI_BAG_NEW:
                            e && e.characterID && (4 == Number(e.characterID) && 4 == App.MergeController.LevelMax && (this.getChildByPath(this.node, "left.btnMystery").getChildByName("handNode").active = !0), 6 == Number(e.characterID) && 6 == App.MergeController.LevelMax && (this.getChildByPath(this.node, "left.btnPK").getChildByName("handNode").active = !0));
                            break;
                        case n.default.UI_QUEST_UNREAD:
                            this.updateQuestUnread();
                            break;
                        case n.default.UI_VISIT_MODE:
                            this.updateVisitMode(e);
                            break;
                        case n.default.TUTORIAL_COMPLETE:
                            this.updateTutorialComplete()
                    }
                }, e.prototype.updateVisitMode = function(t) {
                    var e = !1;
                    "friend" == t.mode && (e = !0);
                    var a = this.node.parent;
                    (a.getChildByName("bagModule").active = !e, a.getChildByName("mergeModule").active = !e, a.getChildByName("tutorialModule").active = !e, a.getChildByName("GiftLayer").active = !e, a.getChildByName("ui").active = !e, a.getChildByName("VisitMode").active = e, e) && a.getChildByName("VisitMode").getComponent("VisitModeUI").showInfo(t)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = f, cc._RF.pop()
    }, {
        "../../datas/configs/GameConfig": "GameConfig",
        "../../datas/const/EventConst": "EventConst",
        "../../datas/const/PopupConst": "PopupConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/utils/UIHelper": "UIHelper",
        "../../framework/view/ViewBasic": "ViewBasic",
        "../common/LogManager": "LogManager",
        "./../common/UITips": "UITips"
    }],
    CharacterConfHelper: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "8e756GRCeNNor22beAqb8yR", "CharacterConfHelper"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("../../datas/configs/ClothConfig"),
            i = t("../../datas/configs/BagConfig"),
            o = function() {
                function t() {}
                return t.getInstance = function() {
                    return this._instance || (this._instance = new t), this._instance
                }, t.prototype.init = function() {
                    var t = this;
                    this._bagitems = new Map, this._dressitems = new Map, this._mergeitems = new Map, this._frameurls = new Map;
                    var e = function(e) {
                            r.default.hasOwnProperty(e) && (a._bagitems[e] = new Map, a._dressitems[e] = new Map, a._mergeitems[e] = new Map, a._frameurls[e] = new Map, r.default[e].forEach(function(a) {
                                t._frameurls[e][a.id] = "textures/characters/" + e + "/" + a.frame;
                                var r = {
                                    id: a.id,
                                    frame: a.frame,
                                    quality: -1
                                };
                                t._bagitems[e][a.id] = r;
                                for (var i = {
                                        id: a.id,
                                        parts: a.parts,
                                        attrs: []
                                    }, o = 1; o <= 12; o++) {
                                    var n = "attr" + o;
                                    i.attrs.push(a[n])
                                }
                                t._dressitems[e][a.id] = i;
                                var s = {
                                    type: e,
                                    id: a.id,
                                    name: a.name,
                                    price: Number(a.price),
                                    income: Number(a.income),
                                    coinround: Number(a.coinround),
                                    time: Number(a.time),
                                    rise: Number(a.rise),
                                    reward: Number(a.reward)
                                };
                                t._mergeitems[e][a.id] = s
                            }))
                        },
                        a = this;
                    for (var o in r.default) e(o);
                    for (var o in i.default)
                        if (i.default.hasOwnProperty(o)) {
                            var n = i.default[o];
                            for (var s in this._frameurls[o] || (this._frameurls[o] = new Map), this._bagitems[o] || (this._bagitems[o] = new Map), this._dressitems[o] || (this._dressitems[o] = new Map), this._mergeitems[o] || (this._mergeitems[o] = new Map), n)
                                if (n.hasOwnProperty(s)) {
                                    var c = n[s];
                                    this._frameurls[o][c.id] = "textures/characters/" + o + "/" + c.frame;
                                    var p = {
                                        id: c.id,
                                        frame: c.frame,
                                        quality: Number(c.quality)
                                    };
                                    this._bagitems[o][c.id] = p;
                                    for (var l = {
                                            id: c.id,
                                            parts: c.parts,
                                            attrs: []
                                        }, d = 1; d <= 12; d++) {
                                        var h = "attr" + d;
                                        l.attrs.push(c[h])
                                    }
                                    this._dressitems[o][c.id] = l;
                                    var u = {
                                        type: s,
                                        id: c.id,
                                        name: c.name,
                                        price: Number(c.price),
                                        income: Number(c.income),
                                        coinround: Number(c.coinround),
                                        time: Number(c.time),
                                        rise: Number(c.rise),
                                        reward: Number(c.reward)
                                    };
                                    this._mergeitems[o][c.id] = u
                                }
                        } console.log("======>>>>>>> ", this._frameurls.hair[101])
                }, t.prototype.getBagItemConfig = function(t, e) {
                    return this._bagitems[t][e]
                }, t.prototype.getBagList = function(t) {
                    return this._bagitems[t]
                }, t.prototype.getDressItemConfig = function(t, e) {
                    return this._dressitems[t][e]
                }, t.prototype.getMergeItemConfig = function(t, e) {
                    return this._mergeitems[t][e]
                }, t.prototype.getNextMergeItemConfig = function(t, e) {
                    var a = Number(e) + 1;
                    return this._mergeitems[t][a.toString()]
                }, t.prototype.getFrameUrl = function(t, e) {
                    return this._frameurls[t][e]
                }, t.prototype.getDressPartUrl = function(t, e) {
                    return ""
                }, t.prototype.getShopList = function(t) {
                    var e = this;
                    return this._shopList || (this._shopList = new Map), this._shopList[t] || (this._shopList[t] = new Array, r.default[t].forEach(function(a) {
                        a.id && e._shopList[t].push(e.createIShopItem(a, t))
                    })), this._shopList[t]
                }, t.prototype.createIShopItem = function(t, e) {
                    return {
                        id: t.id,
                        type: e,
                        rise: Number(t.rise),
                        price: Number(t.price)
                    }
                }, t
            }();
        a.default = o, cc._RF.pop()
    }, {
        "../../datas/configs/BagConfig": "BagConfig",
        "../../datas/configs/ClothConfig": "ClothConfig"
    }],
    CharacterConst: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "5bfb1tv7cxATYDexfOK9y68", "CharacterConst"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.CharacterConst = {
            Hair: "hair",
            Cloth: "cloth",
            Trous: "trous",
            Shoe: "shoe",
            Hat: "hat",
            Face: "face"
        }, cc._RF.pop()
    }, {}],
    ClothConfig: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "adeabOchsBKn4Quvd9o98ad", "ClothConfig"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = {
            hair: [{}, {
                name: "hair 1",
                price: "100",
                income: "5",
                coinround: "26",
                time: "5.2",
                rise: "0.07",
                reward: "0",
                frame: "hairicon01",
                parts: {
                    cloth_01_Hair_f: 5
                },
                id: "1",
                top1: "2",
                top2: "11",
                mid1: "7",
                mid2: "9",
                base: "2",
                attr1: "2",
                attr2: "10",
                attr3: "2",
                attr4: "2",
                attr5: "2",
                attr6: "2",
                attr7: "5",
                attr8: "2",
                attr9: "5",
                attr10: "2",
                attr11: "10",
                attr12: "2",
                per: "0"
            }, {
                name: "hair 2",
                price: "1500",
                income: "10",
                coinround: "52",
                time: "5.2",
                rise: "0.175",
                reward: "0",
                frame: "hairicon02",
                parts: {
                    cloth_02_Hair_f: 5
                },
                id: "2",
                top1: "3",
                top2: "10",
                mid1: "7",
                mid2: "9",
                base: "5.94",
                attr1: "5.94",
                attr2: "5.94",
                attr3: "29.7",
                attr4: "5.94",
                attr5: "5.94",
                attr6: "5.94",
                attr7: "14.85",
                attr8: "5.94",
                attr9: "14.85",
                attr10: "29.7",
                attr11: "5.94",
                attr12: "5.94",
                per: "0"
            }, {
                name: "hair 3",
                price: "4800",
                income: "20",
                coinround: "105",
                time: "5.25",
                rise: "0.175",
                reward: "0",
                frame: "hairicon03",
                parts: {
                    cloth_03_Hair_b: -5,
                    cloth_03_Hair_f: 5
                },
                id: "3",
                top1: "4",
                top2: "11",
                mid1: "1",
                mid2: "6",
                base: "12.3498",
                attr1: "30.8745",
                attr2: "12.3498",
                attr3: "12.3498",
                attr4: "61.749",
                attr5: "12.3498",
                attr6: "30.8745",
                attr7: "12.3498",
                attr8: "12.3498",
                attr9: "12.3498",
                attr10: "12.3498",
                attr11: "61.749",
                attr12: "12.3498",
                per: "0"
            }, {
                name: "hair 4",
                price: "14880",
                income: "42",
                coinround: "210",
                time: "5",
                rise: "0.175",
                reward: "0",
                frame: "hairicon04",
                parts: {
                    cloth_04_Hair_b: -5,
                    cloth_04_Hair_f: 5
                },
                id: "4",
                top1: "6",
                top2: "10",
                mid1: "2",
                mid2: "7",
                base: "21.649266",
                attr1: "21.649266",
                attr2: "54.123165",
                attr3: "21.649266",
                attr4: "21.649266",
                attr5: "21.649266",
                attr6: "108.24633",
                attr7: "54.123165",
                attr8: "21.649266",
                attr9: "21.649266",
                attr10: "108.24633",
                attr11: "21.649266",
                attr12: "21.649266",
                per: "0"
            }, {
                name: "hair 5",
                price: "46130",
                income: "89",
                coinround: "420",
                time: "4.71910112359551",
                rise: "0.175",
                reward: "1000",
                frame: "hairicon05",
                parts: {
                    cloth_05_Hair_b: -5,
                    cloth_05_Hair_f: 5
                },
                id: "5",
                top1: "5",
                top2: "6",
                mid1: "4",
                mid2: "11",
                base: "34.32964122",
                attr1: "34.32964122",
                attr2: "34.32964122",
                attr3: "34.32964122",
                attr4: "85.82410305",
                attr5: "171.6482061",
                attr6: "171.6482061",
                attr7: "34.32964122",
                attr8: "34.32964122",
                attr9: "34.32964122",
                attr10: "34.32964122",
                attr11: "85.82410305",
                attr12: "34.32964122",
                per: "0"
            }, {
                name: "hair 6",
                price: "147616",
                income: "187",
                coinround: "840",
                time: "4.49197860962567",
                rise: "0.175",
                reward: "2000",
                frame: "hairicon06",
                parts: {
                    cloth_06_Hair_b: -5,
                    cloth_06_Hair_f: 5
                },
                id: "6",
                top1: "7",
                top2: "10",
                mid1: "1",
                mid2: "3",
                base: "50.9656802274",
                attr1: "127.4142005685",
                attr2: "50.9656802274",
                attr3: "127.4142005685",
                attr4: "50.9656802274",
                attr5: "50.9656802274",
                attr6: "50.9656802274",
                attr7: "254.828401137",
                attr8: "50.9656802274",
                attr9: "50.9656802274",
                attr10: "254.828401137",
                attr11: "50.9656802274",
                attr12: "50.9656802274",
                per: "0"
            }, {
                name: "hair 7",
                price: "472371",
                income: "394",
                coinround: "1679",
                time: "4.26142131979695",
                rise: "0.175",
                reward: "5000",
                frame: "hairicon07",
                parts: {
                    cloth_07_Hair_f: 5
                },
                id: "7",
                top1: "1",
                top2: "5",
                mid1: "4",
                mid2: "8",
                base: "72.229845866058",
                attr1: "361.14922933029",
                attr2: "72.229845866058",
                attr3: "72.229845866058",
                attr4: "180.57461466514",
                attr5: "361.14922933029",
                attr6: "72.229845866058",
                attr7: "72.229845866058",
                attr8: "180.57461466514",
                attr9: "72.229845866058",
                attr10: "72.229845866058",
                attr11: "72.229845866058",
                attr12: "72.229845866058",
                per: "0"
            }, {
                name: "hair 8",
                price: "1511000",
                income: "830",
                coinround: "3360",
                time: "4.04819277108434",
                rise: "0.175",
                reward: "15000",
                frame: "hairicon08",
                parts: {
                    cloth_08_Hair_b: -5,
                    cloth_08_Hair_f: 5
                },
                id: "8",
                top1: "2",
                top2: "10",
                mid1: "8",
                mid2: "12",
                base: "98.908919663288",
                attr1: "98.908919663288",
                attr2: "494.54459831644",
                attr3: "98.908919663288",
                attr4: "98.908919663288",
                attr5: "98.908919663288",
                attr6: "98.908919663288",
                attr7: "98.908919663288",
                attr8: "247.27229915822",
                attr9: "98.908919663288",
                attr10: "494.54459831644",
                attr11: "98.908919663288",
                attr12: "247.27229915822",
                per: "0"
            }, {
                name: "hair 9",
                price: "4837000",
                income: "1746",
                coinround: "6724",
                time: "3.85108820160367",
                rise: "0.175",
                reward: "44000",
                frame: "hairicon09",
                parts: {
                    cloth_09_Hair_b: -5,
                    cloth_09_Hair_f: 5
                },
                id: "9",
                top1: "1",
                top2: "11",
                mid1: "2",
                mid2: "3",
                base: "131.92343600605",
                attr1: "659.61718003023",
                attr2: "329.80859001512",
                attr3: "329.80859001512",
                attr4: "131.92343600605",
                attr5: "131.92343600605",
                attr6: "131.92343600605",
                attr7: "131.92343600605",
                attr8: "131.92343600605",
                attr9: "131.92343600605",
                attr10: "131.92343600605",
                attr11: "659.61718003023",
                attr12: "131.92343600605",
                per: "0"
            }, {
                name: "hair 10",
                price: "15478000",
                income: "3677",
                coinround: "13457",
                time: "3.65977699211314",
                rise: "0.175",
                reward: "136000",
                frame: "hairicon10",
                parts: {
                    cloth_10_Hair_f: 5
                },
                id: "10",
                top1: "4",
                top2: "9",
                mid1: "7",
                mid2: "11",
                base: "172.35042012708",
                attr1: "172.35042012708",
                attr2: "172.35042012708",
                attr3: "172.35042012708",
                attr4: "861.75210063537",
                attr5: "172.35042012708",
                attr6: "172.35042012708",
                attr7: "430.87605031769",
                attr8: "172.35042012708",
                attr9: "861.75210063537",
                attr10: "172.35042012708",
                attr11: "430.87605031769",
                attr12: "172.35042012708",
                per: "0"
            }, {
                name: "hair 11",
                price: "49531000",
                income: "7740",
                coinround: "26859",
                time: "3.47015503875969",
                rise: "0.175",
                reward: "421000",
                frame: "hairicon11",
                parts: {
                    cloth_11_Hair_f: 5
                },
                id: "11",
                top1: "3",
                top2: "9",
                mid1: "6",
                mid2: "11",
                base: "213.60298314614",
                attr1: "213.60298314614",
                attr2: "213.60298314614",
                attr3: "1068.0149157307",
                attr4: "213.60298314614",
                attr5: "213.60298314614",
                attr6: "534.00745786534",
                attr7: "213.60298314614",
                attr8: "213.60298314614",
                attr9: "1068.0149157307",
                attr10: "213.60298314614",
                attr11: "534.00745786534",
                attr12: "213.60298314614",
                per: "0"
            }, {
                name: "hair 12",
                price: "158501000",
                income: "16296",
                coinround: "53776",
                time: "3.29995090819833",
                rise: "0.175",
                reward: "1306000",
                frame: "hairicon12",
                parts: {
                    cloth_12_Hair_f: 5
                },
                id: "12",
                top1: "5",
                top2: "8",
                mid1: "4",
                mid2: "10",
                base: "262.44343061806",
                attr1: "262.44343061806",
                attr2: "262.44343061806",
                attr3: "262.44343061806",
                attr4: "656.10857654514",
                attr5: "1312.2171530903",
                attr6: "262.44343061806",
                attr7: "262.44343061806",
                attr8: "1312.2171530903",
                attr9: "262.44343061806",
                attr10: "656.10857654514",
                attr11: "262.44343061806",
                attr12: "262.44343061806",
                per: "0"
            }, {
                name: "hair 13",
                price: "507204000",
                income: "34307",
                coinround: "107380",
                time: "3.12997347480106",
                rise: "0.175",
                reward: "4178000",
                frame: "hairicon13",
                parts: {
                    cloth_13_Hair_f: 5
                },
                id: "13",
                top1: "3",
                top2: "6",
                mid1: "2",
                mid2: "9",
                base: "320.00994521077",
                attr1: "320.00994521077",
                attr2: "800.02486302691",
                attr3: "1600.0497260538",
                attr4: "320.00994521077",
                attr5: "320.00994521077",
                attr6: "1600.0497260538",
                attr7: "320.00994521077",
                attr8: "320.00994521077",
                attr9: "800.02486302691",
                attr10: "320.00994521077",
                attr11: "320.00994521077",
                attr12: "320.00994521077",
                per: "0"
            }, {
                name: "hair 14",
                price: "1623055000",
                income: "72224",
                coinround: "215229",
                time: "2.98002049180328",
                rise: "0.175",
                reward: "13786000",
                frame: "hairicon14",
                parts: {
                    cloth_14_Hair_b: -5,
                    cloth_14_Hair_f: 5
                },
                id: "14",
                top1: "2",
                top2: "7",
                mid1: "1",
                mid2: "8",
                base: "387.61143699238",
                attr1: "969.02859248095",
                attr2: "1938.0571849619",
                attr3: "387.61143699238",
                attr4: "387.61143699238",
                attr5: "387.61143699238",
                attr6: "387.61143699238",
                attr7: "1938.0571849619",
                attr8: "969.02859248095",
                attr9: "387.61143699238",
                attr10: "387.61143699238",
                attr11: "387.61143699238",
                attr12: "387.61143699238",
                per: "0"
            }, {
                name: "hair 15",
                price: "5193000000",
                income: "152031",
                coinround: "430306",
                time: "2.8303832770948",
                rise: "0.175",
                reward: "41939000",
                frame: "hairicon15",
                parts: {
                    cloth_15_Hair_f: 5
                },
                id: "15",
                top1: "2",
                top2: "11",
                mid1: "4",
                mid2: "5",
                base: "466.75315254124",
                attr1: "466.75315254124",
                attr2: "2333.7657627062",
                attr3: "466.75315254124",
                attr4: "1166.8828813531",
                attr5: "1166.8828813531",
                attr6: "466.75315254124",
                attr7: "466.75315254124",
                attr8: "466.75315254124",
                attr9: "466.75315254124",
                attr10: "466.75315254124",
                attr11: "2333.7657627062",
                attr12: "466.75315254124",
                per: "0"
            }, {
                name: "hair 16",
                price: "16620000000",
                income: "320026",
                coinround: "861092",
                time: "2.69069388112216",
                rise: "0.175",
                reward: "130010000",
                frame: "hairicon16",
                parts: {
                    cloth_16_Hair_b: -5,
                    cloth_16_Hair_f: 5
                },
                id: "16",
                top1: "9",
                top2: "10",
                mid1: "3",
                mid2: "6",
                base: "559.16612542242",
                attr1: "559.16612542242",
                attr2: "559.16612542242",
                attr3: "1397.9153135561",
                attr4: "559.16612542242",
                attr5: "559.16612542242",
                attr6: "1397.9153135561",
                attr7: "559.16612542242",
                attr8: "559.16612542242",
                attr9: "2795.8306271121",
                attr10: "2795.8306271121",
                attr11: "559.16612542242",
                attr12: "559.16612542242",
                per: "0"
            }, {
                name: "hair 17",
                price: "52640000000",
                income: "673655",
                coinround: "1718000",
                time: "2.55026682797574",
                rise: "0.175",
                reward: "403033000",
                frame: "hairicon17",
                parts: {
                    cloth_17_Hair_b: -5,
                    cloth_17_Hair_f: 5
                },
                id: "17",
                top1: "4",
                top2: "11",
                mid1: "2",
                mid2: "8",
                base: "666.84104423579",
                attr1: "666.84104423579",
                attr2: "1667.1026105895",
                attr3: "666.84104423579",
                attr4: "3334.2052211789",
                attr5: "666.84104423579",
                attr6: "666.84104423579",
                attr7: "666.84104423579",
                attr8: "1667.1026105895",
                attr9: "666.84104423579",
                attr10: "666.84104423579",
                attr11: "3334.2052211789",
                attr12: "666.84104423579",
                per: "0"
            }, {
                name: "hair 18",
                price: "168448000000",
                income: "1418000",
                coinround: "3447000",
                time: "2.43088857545839",
                rise: "0.175",
                reward: "1249000000",
                frame: "hairicon18",
                parts: {
                    cloth_18_Hair_f: 5
                },
                id: "18",
                top1: "2",
                top2: "3",
                mid1: "7",
                mid2: "10",
                base: "792.06720087115",
                attr1: "792.06720087115",
                attr2: "3960.3360043558",
                attr3: "3960.3360043558",
                attr4: "792.06720087115",
                attr5: "792.06720087115",
                attr6: "792.06720087115",
                attr7: "1980.1680021779",
                attr8: "792.06720087115",
                attr9: "792.06720087115",
                attr10: "1980.1680021779",
                attr11: "792.06720087115",
                attr12: "792.06720087115",
                per: "0"
            }, {
                name: "hair 19",
                price: "539033600000",
                income: "2984000",
                coinround: "6871000",
                time: "2.30261394101877",
                rise: "0.175",
                reward: "3873000000",
                frame: "hairicon19",
                parts: {
                    cloth_19_Hair_b: -5,
                    cloth_19_Hair_f: 5
                },
                id: "19",
                top1: "1",
                top2: "2",
                mid1: "5",
                mid2: "8",
                base: "937.47728100182",
                attr1: "4687.3864050091",
                attr2: "4687.3864050091",
                attr3: "937.47728100182",
                attr4: "937.47728100182",
                attr5: "2343.6932025046",
                attr6: "937.47728100182",
                attr7: "937.47728100182",
                attr8: "2343.6932025046",
                attr9: "937.47728100182",
                attr10: "937.47728100182",
                attr11: "937.47728100182",
                attr12: "937.47728100182",
                per: "0"
            }, {
                name: "hair 20",
                price: "1724907000000",
                income: "6288000",
                coinround: "13772000",
                time: "2.19020356234097",
                rise: "0.175",
                reward: "12006000000",
                frame: "hairicon20",
                parts: {
                    cloth_20_Hair_f: 5
                },
                id: "20",
                top1: "7",
                top2: "9",
                mid1: "5",
                mid2: "10",
                base: "1106.0988731521",
                attr1: "1106.0988731521",
                attr2: "1106.0988731521",
                attr3: "1106.0988731521",
                attr4: "1106.0988731521",
                attr5: "2765.2471828802",
                attr6: "1106.0988731521",
                attr7: "5530.4943657605",
                attr8: "1106.0988731521",
                attr9: "5530.4943657605",
                attr10: "2765.2471828802",
                attr11: "1106.0988731521",
                attr12: "1106.0988731521",
                per: "0"
            }, {
                name: "hair 21",
                price: "5519000000000",
                income: "13238000",
                coinround: "27536000",
                time: "2.08007251850733",
                rise: "0.175",
                reward: "39480000000",
                frame: "hairicon21",
                parts: {
                    cloth_21_Hair_b: -5,
                    cloth_21_Hair_f: 5
                },
                id: "21",
                top1: "8",
                top2: "12",
                mid1: "2",
                mid2: "4",
                base: "1270.8917266619",
                attr1: "1270.8917266619",
                attr2: "3177.2293166547",
                attr3: "1270.8917266619",
                attr4: "3177.2293166547",
                attr5: "1270.8917266619",
                attr6: "1270.8917266619",
                attr7: "1270.8917266619",
                attr8: "6354.4586333094",
                attr9: "1270.8917266619",
                attr10: "1270.8917266619",
                attr11: "1270.8917266619",
                attr12: "6354.4586333094",
                per: "0"
            }, {
                name: "hair 22",
                price: "17663000000000",
                income: "27870000",
                coinround: "55150000",
                time: "1.97883028345892",
                rise: "0.175",
                reward: "122388000000",
                frame: "hairicon22",
                parts: {
                    cloth_22_Hair_f: 5
                },
                id: "22",
                top1: "4",
                top2: "8",
                mid1: "2",
                mid2: "10",
                base: "1458.1076511279",
                attr1: "1458.1076511279",
                attr2: "3645.2691278198",
                attr3: "1458.1076511279",
                attr4: "7290.5382556396",
                attr5: "1458.1076511279",
                attr6: "1458.1076511279",
                attr7: "1458.1076511279",
                attr8: "7290.5382556396",
                attr9: "1458.1076511279",
                attr10: "3645.2691278198",
                attr11: "1458.1076511279",
                attr12: "1458.1076511279",
                per: "0"
            }, {
                name: "hair 23",
                price: "56773000000000",
                income: "58666000",
                coinround: "110300000",
                time: "1.88013500153411",
                rise: "0.175",
                reward: "318207000000",
                frame: "hairicon23",
                parts: {
                    cloth_23_Hair_f: 5
                },
                id: "23",
                top1: "8",
                top2: "11",
                mid1: "1",
                mid2: "5",
                base: "1670.6616457745",
                attr1: "4176.6541144364",
                attr2: "1670.6616457745",
                attr3: "1670.6616457745",
                attr4: "1670.6616457745",
                attr5: "4176.6541144364",
                attr6: "1670.6616457745",
                attr7: "1670.6616457745",
                attr8: "8353.3082288727",
                attr9: "1670.6616457745",
                attr10: "1670.6616457745",
                attr11: "8353.3082288727",
                attr12: "1670.6616457745",
                per: "0"
            }, {
                name: "hair 24",
                price: "170319000000000",
                income: "123523000",
                coinround: "219871000",
                time: "1.7800004857395",
                rise: "0.175",
                reward: "1018000000000",
                frame: "hairicon24",
                parts: {
                    cloth_24_Hair_b: -5,
                    cloth_24_Hair_f: 5
                },
                id: "24",
                top1: "6",
                top2: "12",
                mid1: "1",
                mid2: "2",
                base: "1911.8476597252",
                attr1: "4779.6191493131",
                attr2: "4779.6191493131",
                attr3: "1911.8476597252",
                attr4: "1911.8476597252",
                attr5: "1911.8476597252",
                attr6: "9559.2382986262",
                attr7: "1911.8476597252",
                attr8: "1911.8476597252",
                attr9: "1911.8476597252",
                attr10: "1911.8476597252",
                attr11: "1911.8476597252",
                attr12: "9559.2382986262",
                per: "0"
            }, {
                name: "hair 25",
                price: "545020000000000",
                income: "260015000",
                coinround: "439742000",
                time: "1.69121781435686",
                rise: "0.175",
                reward: "3360000000000",
                frame: "hairicon25",
                parts: {
                    cloth_25_Hair_f: 5
                },
                id: "25",
                top1: "5",
                top2: "7",
                mid1: "9",
                mid2: "12",
                base: "2185.3878554895",
                attr1: "2185.3878554895",
                attr2: "2185.3878554895",
                attr3: "2185.3878554895",
                attr4: "2185.3878554895",
                attr5: "10926.939277448",
                attr6: "2185.3878554895",
                attr7: "10926.939277448",
                attr8: "2185.3878554895",
                attr9: "5463.4696387238",
                attr10: "2185.3878554895",
                attr11: "2185.3878554895",
                attr12: "5463.4696387238",
                per: "0"
            }, {
                name: "hair 26",
                price: "1744000000000000",
                income: "547500000",
                coinround: "881500000",
                time: "1.61004566210046",
                rise: "0.175",
                reward: "11425000000000",
                frame: "hairicon26",
                parts: {
                    cloth_26_Hair_b: -5,
                    cloth_26_Hair_f: 5
                },
                id: "26",
                top1: "4",
                top2: "9",
                mid1: "1",
                mid2: "6",
                base: "2495.4882767031",
                attr1: "6238.7206917579",
                attr2: "2495.4882767031",
                attr3: "2495.4882767031",
                attr4: "12477.441383516",
                attr5: "2495.4882767031",
                attr6: "6238.7206917579",
                attr7: "2495.4882767031",
                attr8: "2495.4882767031",
                attr9: "12477.441383516",
                attr10: "2495.4882767031",
                attr11: "2495.4882767031",
                attr12: "2495.4882767031",
                per: "0"
            }, {
                name: "hair 27",
                price: "5581000000000000",
                income: "1153000000",
                coinround: "1764000000",
                time: "1.52992194275802",
                rise: "0.175",
                reward: "38845000000000",
                frame: "hairicon27",
                parts: {
                    cloth_27_Hair_f: 5
                },
                id: "27",
                top1: "10",
                top2: "12",
                mid1: "1",
                mid2: "5",
                base: "2846.9017526746",
                attr1: "7117.2543816864",
                attr2: "2846.9017526746",
                attr3: "2846.9017526746",
                attr4: "2846.9017526746",
                attr5: "7117.2543816864",
                attr6: "2846.9017526746",
                attr7: "2846.9017526746",
                attr8: "2846.9017526746",
                attr9: "2846.9017526746",
                attr10: "14234.508763373",
                attr11: "2846.9017526746",
                attr12: "14234.508763373",
                per: "0"
            }, {
                name: "hair 28",
                price: "17859000000000000",
                income: "2427000000",
                coinround: "3518000000",
                time: "1.44952616398846",
                rise: "0.175",
                reward: "89641000000000",
                frame: "hairicon28",
                parts: {
                    cloth_28_Hair_b: -5,
                    cloth_28_Hair_f: 5
                },
                id: "28",
                top1: "6",
                top2: "12",
                mid1: "3",
                mid2: "7",
                base: "3244.9989805222",
                attr1: "3244.9989805222",
                attr2: "3244.9989805222",
                attr3: "8112.4974513056",
                attr4: "3244.9989805222",
                attr5: "3244.9989805222",
                attr6: "16224.994902611",
                attr7: "8112.4974513056",
                attr8: "3244.9989805222",
                attr9: "3244.9989805222",
                attr10: "3244.9989805222",
                attr11: "3244.9989805222",
                attr12: "16224.994902611",
                per: "0"
            }, {
                name: "hair 29",
                price: "57149000000000000",
                income: "5108000000",
                coinround: "7050000000",
                time: "1.38018794048551",
                rise: "0.175",
                reward: "286853000000000",
                frame: "hairicon29",
                parts: {
                    cloth_29_Hair_b: -5,
                    cloth_29_Hair_f: 5
                },
                id: "29",
                top1: "3",
                top2: "12",
                mid1: "4",
                mid2: "6",
                base: "3695.8488479901",
                attr1: "3695.8488479901",
                attr2: "3695.8488479901",
                attr3: "18479.244239951",
                attr4: "9239.6221199754",
                attr5: "3695.8488479901",
                attr6: "9239.6221199754",
                attr7: "3695.8488479901",
                attr8: "3695.8488479901",
                attr9: "3695.8488479901",
                attr10: "3695.8488479901",
                attr11: "3695.8488479901",
                attr12: "18479.244239951",
                per: "0"
            }, {
                name: "hair 30",
                price: "182878000000000000",
                income: "10754000000",
                coinround: "14088000000",
                time: "1.3100241770504",
                rise: "0.175",
                reward: "717312000000000",
                frame: "hairicon30",
                parts: {
                    cloth_30_Hair_f: 5
                },
                id: "30",
                top1: "1",
                top2: "8",
                mid1: "5",
                mid2: "12",
                base: "4206.3091982289",
                attr1: "21031.545991144",
                attr2: "4206.3091982289",
                attr3: "4206.3091982289",
                attr4: "4206.3091982289",
                attr5: "10515.772995572",
                attr6: "4206.3091982289",
                attr7: "4206.3091982289",
                attr8: "21031.545991144",
                attr9: "4206.3091982289",
                attr10: "4206.3091982289",
                attr11: "4206.3091982289",
                attr12: "10515.772995572",
                per: "0"
            }],
            cloth: [{}, {
                name: "top 1",
                price: "100",
                income: "5",
                coinround: "26",
                time: "5.2",
                rise: "0.07",
                reward: "0",
                frame: "topicon01",
                parts: {
                    cloth_01_Top_f: 4
                },
                id: "1",
                top1: "2",
                top2: "11",
                mid1: "7",
                mid2: "9",
                base: "2",
                attr1: "2",
                attr2: "10",
                attr3: "2",
                attr4: "2",
                attr5: "2",
                attr6: "2",
                attr7: "5",
                attr8: "2",
                attr9: "5",
                attr10: "2",
                attr11: "10",
                attr12: "2",
                per: "0"
            }, {
                name: "top 2",
                price: "1500",
                income: "10",
                coinround: "52",
                time: "5.2",
                rise: "0.175",
                reward: "0",
                frame: "topicon02",
                parts: {
                    cloth_02_Top_f: 4
                },
                id: "2",
                top1: "4",
                top2: "11",
                mid1: "1",
                mid2: "6",
                base: "5.94",
                attr1: "14.85",
                attr2: "5.94",
                attr3: "5.94",
                attr4: "29.7",
                attr5: "5.94",
                attr6: "14.85",
                attr7: "5.94",
                attr8: "5.94",
                attr9: "5.94",
                attr10: "5.94",
                attr11: "29.7",
                attr12: "5.94",
                per: "0"
            }, {
                name: "top 3",
                price: "4800",
                income: "20",
                coinround: "105",
                time: "5.25",
                rise: "0.175",
                reward: "0",
                frame: "topicon03",
                parts: {
                    cloth_03_Top_f: 4
                },
                id: "3",
                top1: "3",
                top2: "10",
                mid1: "7",
                mid2: "9",
                base: "12.3498",
                attr1: "12.3498",
                attr2: "12.3498",
                attr3: "61.749",
                attr4: "12.3498",
                attr5: "12.3498",
                attr6: "12.3498",
                attr7: "30.8745",
                attr8: "12.3498",
                attr9: "30.8745",
                attr10: "61.749",
                attr11: "12.3498",
                attr12: "12.3498",
                per: "0"
            }, {
                name: "top 4",
                price: "14880",
                income: "42",
                coinround: "210",
                time: "5",
                rise: "0.175",
                reward: "0",
                frame: "topicon04",
                parts: {
                    cloth_04_Top_f: 4
                },
                id: "4",
                top1: "5",
                top2: "6",
                mid1: "4",
                mid2: "11",
                base: "21.649266",
                attr1: "21.649266",
                attr2: "21.649266",
                attr3: "21.649266",
                attr4: "54.123165",
                attr5: "108.24633",
                attr6: "108.24633",
                attr7: "21.649266",
                attr8: "21.649266",
                attr9: "21.649266",
                attr10: "21.649266",
                attr11: "54.123165",
                attr12: "21.649266",
                per: "0"
            }, {
                name: "top 5",
                price: "46130",
                income: "89",
                coinround: "420",
                time: "4.71910112359551",
                rise: "0.175",
                reward: "1000",
                frame: "topicon05",
                parts: {
                    cloth_05_Top_f: 4
                },
                id: "5",
                top1: "6",
                top2: "10",
                mid1: "2",
                mid2: "7",
                base: "34.32964122",
                attr1: "34.32964122",
                attr2: "85.82410305",
                attr3: "34.32964122",
                attr4: "34.32964122",
                attr5: "34.32964122",
                attr6: "171.6482061",
                attr7: "85.82410305",
                attr8: "34.32964122",
                attr9: "34.32964122",
                attr10: "171.6482061",
                attr11: "34.32964122",
                attr12: "34.32964122",
                per: "0"
            }, {
                name: "top 6",
                price: "147616",
                income: "187",
                coinround: "840",
                time: "4.49197860962567",
                rise: "0.175",
                reward: "2000",
                frame: "topicon06",
                parts: {
                    cloth_06_Top_f: 4
                },
                id: "6",
                top1: "1",
                top2: "11",
                mid1: "2",
                mid2: "3",
                base: "50.9656802274",
                attr1: "254.828401137",
                attr2: "127.4142005685",
                attr3: "127.4142005685",
                attr4: "50.9656802274",
                attr5: "50.9656802274",
                attr6: "50.9656802274",
                attr7: "50.9656802274",
                attr8: "50.9656802274",
                attr9: "50.9656802274",
                attr10: "50.9656802274",
                attr11: "254.828401137",
                attr12: "50.9656802274",
                per: "0"
            }, {
                name: "top 7",
                price: "472371",
                income: "394",
                coinround: "1679",
                time: "4.26142131979695",
                rise: "0.175",
                reward: "5000",
                frame: "topicon07",
                parts: {
                    cloth_07_Top_f: 4
                },
                id: "7",
                top1: "5",
                top2: "7",
                mid1: "3",
                mid2: "10",
                base: "72.229845866058",
                attr1: "72.229845866058",
                attr2: "72.229845866058",
                attr3: "180.57461466514",
                attr4: "72.229845866058",
                attr5: "361.14922933029",
                attr6: "72.229845866058",
                attr7: "361.14922933029",
                attr8: "72.229845866058",
                attr9: "72.229845866058",
                attr10: "180.57461466514",
                attr11: "72.229845866058",
                attr12: "72.229845866058",
                per: "0"
            }, {
                name: "top 8",
                price: "1511000",
                income: "830",
                coinround: "3360",
                time: "4.04819277108434",
                rise: "0.175",
                reward: "15000",
                frame: "topicon08",
                parts: {
                    cloth_08_Top_f: 4
                },
                id: "8",
                top1: "4",
                top2: "9",
                mid1: "7",
                mid2: "11",
                base: "98.908919663288",
                attr1: "98.908919663288",
                attr2: "98.908919663288",
                attr3: "98.908919663288",
                attr4: "494.54459831644",
                attr5: "98.908919663288",
                attr6: "98.908919663288",
                attr7: "247.27229915822",
                attr8: "98.908919663288",
                attr9: "494.54459831644",
                attr10: "98.908919663288",
                attr11: "247.27229915822",
                attr12: "98.908919663288",
                per: "0"
            }, {
                name: "top 9",
                price: "4837000",
                income: "1746",
                coinround: "6724",
                time: "3.85108820160367",
                rise: "0.175",
                reward: "44000",
                frame: "topicon09",
                parts: {
                    cloth_09_Top_f: 4
                },
                id: "9",
                top1: "1",
                top2: "5",
                mid1: "4",
                mid2: "8",
                base: "131.92343600605",
                attr1: "659.61718003023",
                attr2: "131.92343600605",
                attr3: "131.92343600605",
                attr4: "329.80859001512",
                attr5: "659.61718003023",
                attr6: "131.92343600605",
                attr7: "131.92343600605",
                attr8: "329.80859001512",
                attr9: "131.92343600605",
                attr10: "131.92343600605",
                attr11: "131.92343600605",
                attr12: "131.92343600605",
                per: "0"
            }, {
                name: "top 10",
                price: "15478000",
                income: "3677",
                coinround: "13457",
                time: "3.65977699211314",
                rise: "0.175",
                reward: "136000",
                frame: "topicon10",
                parts: {
                    cloth_10_Top_f: 4
                },
                id: "10",
                top1: "2",
                top2: "10",
                mid1: "8",
                mid2: "12",
                base: "172.35042012708",
                attr1: "172.35042012708",
                attr2: "861.75210063537",
                attr3: "172.35042012708",
                attr4: "172.35042012708",
                attr5: "172.35042012708",
                attr6: "172.35042012708",
                attr7: "172.35042012708",
                attr8: "430.87605031769",
                attr9: "172.35042012708",
                attr10: "861.75210063537",
                attr11: "172.35042012708",
                attr12: "430.87605031769",
                per: "0"
            }, {
                name: "top 11",
                price: "49531000",
                income: "7740",
                coinround: "26859",
                time: "3.47015503875969",
                rise: "0.175",
                reward: "421000",
                frame: "topicon11",
                parts: {
                    cloth_11_Top_f: 4
                },
                id: "11",
                top1: "2",
                top2: "7",
                mid1: "1",
                mid2: "8",
                base: "213.60298314614",
                attr1: "534.00745786534",
                attr2: "1068.0149157307",
                attr3: "213.60298314614",
                attr4: "213.60298314614",
                attr5: "213.60298314614",
                attr6: "213.60298314614",
                attr7: "1068.0149157307",
                attr8: "534.00745786534",
                attr9: "213.60298314614",
                attr10: "213.60298314614",
                attr11: "213.60298314614",
                attr12: "213.60298314614",
                per: "0"
            }, {
                name: "top 12",
                price: "158501000",
                income: "16296",
                coinround: "53776",
                time: "3.29995090819833",
                rise: "0.175",
                reward: "1306000",
                frame: "topicon12",
                parts: {
                    cloth_12_Top_f: 4
                },
                id: "12",
                top1: "5",
                top2: "8",
                mid1: "4",
                mid2: "10",
                base: "262.44343061806",
                attr1: "262.44343061806",
                attr2: "262.44343061806",
                attr3: "262.44343061806",
                attr4: "656.10857654514",
                attr5: "1312.2171530903",
                attr6: "262.44343061806",
                attr7: "262.44343061806",
                attr8: "1312.2171530903",
                attr9: "262.44343061806",
                attr10: "656.10857654514",
                attr11: "262.44343061806",
                attr12: "262.44343061806",
                per: "0"
            }, {
                name: "top 13",
                price: "507204000",
                income: "34307",
                coinround: "107380",
                time: "3.12997347480106",
                rise: "0.175",
                reward: "4178000",
                frame: "topicon13",
                parts: {
                    cloth_13_Top_f: 4
                },
                id: "13",
                top1: "2",
                top2: "11",
                mid1: "4",
                mid2: "5",
                base: "320.00994521077",
                attr1: "320.00994521077",
                attr2: "1600.0497260538",
                attr3: "320.00994521077",
                attr4: "800.02486302691",
                attr5: "800.02486302691",
                attr6: "320.00994521077",
                attr7: "320.00994521077",
                attr8: "320.00994521077",
                attr9: "320.00994521077",
                attr10: "320.00994521077",
                attr11: "1600.0497260538",
                attr12: "320.00994521077",
                per: "0"
            }, {
                name: "top 14",
                price: "1623055000",
                income: "72224",
                coinround: "215229",
                time: "2.98002049180328",
                rise: "0.175",
                reward: "13786000",
                frame: "topicon14",
                parts: {
                    cloth_14_Top_f: 4
                },
                id: "14",
                top1: "3",
                top2: "6",
                mid1: "2",
                mid2: "9",
                base: "387.61143699238",
                attr1: "387.61143699238",
                attr2: "969.02859248095",
                attr3: "1938.0571849619",
                attr4: "387.61143699238",
                attr5: "387.61143699238",
                attr6: "1938.0571849619",
                attr7: "387.61143699238",
                attr8: "387.61143699238",
                attr9: "969.02859248095",
                attr10: "387.61143699238",
                attr11: "387.61143699238",
                attr12: "387.61143699238",
                per: "0"
            }, {
                name: "top 15",
                price: "5193000000",
                income: "152031",
                coinround: "430306",
                time: "2.8303832770948",
                rise: "0.175",
                reward: "41939000",
                frame: "topicon15",
                parts: {
                    cloth_15_Top_f: 4
                },
                id: "15",
                top1: "3",
                top2: "9",
                mid1: "6",
                mid2: "11",
                base: "466.75315254124",
                attr1: "466.75315254124",
                attr2: "466.75315254124",
                attr3: "2333.7657627062",
                attr4: "466.75315254124",
                attr5: "466.75315254124",
                attr6: "1166.8828813531",
                attr7: "466.75315254124",
                attr8: "466.75315254124",
                attr9: "2333.7657627062",
                attr10: "466.75315254124",
                attr11: "1166.8828813531",
                attr12: "466.75315254124",
                per: "0"
            }, {
                name: "top 16",
                price: "16620000000",
                income: "320026",
                coinround: "861092",
                time: "2.69069388112216",
                rise: "0.175",
                reward: "130010000",
                frame: "topicon16",
                parts: {
                    cloth_16_Top_f: 4
                },
                id: "16",
                top1: "7",
                top2: "8",
                mid1: "5",
                mid2: "10",
                base: "559.16612542242",
                attr1: "559.16612542242",
                attr2: "559.16612542242",
                attr3: "559.16612542242",
                attr4: "559.16612542242",
                attr5: "1397.9153135561",
                attr6: "559.16612542242",
                attr7: "2795.8306271121",
                attr8: "2795.8306271121",
                attr9: "559.16612542242",
                attr10: "1397.9153135561",
                attr11: "559.16612542242",
                attr12: "559.16612542242",
                per: "0"
            }, {
                name: "top 17",
                price: "52640000000",
                income: "673655",
                coinround: "1718000",
                time: "2.55026682797574",
                rise: "0.175",
                reward: "403033000",
                frame: "topicon17",
                parts: {
                    cloth_17_Top_f: 4
                },
                id: "17",
                top1: "2",
                top2: "3",
                mid1: "7",
                mid2: "10",
                base: "666.84104423579",
                attr1: "666.84104423579",
                attr2: "3334.2052211789",
                attr3: "3334.2052211789",
                attr4: "666.84104423579",
                attr5: "666.84104423579",
                attr6: "666.84104423579",
                attr7: "1667.1026105895",
                attr8: "666.84104423579",
                attr9: "666.84104423579",
                attr10: "1667.1026105895",
                attr11: "666.84104423579",
                attr12: "666.84104423579",
                per: "0"
            }, {
                name: "top 18",
                price: "168448000000",
                income: "1418000",
                coinround: "3447000",
                time: "2.43088857545839",
                rise: "0.175",
                reward: "1249000000",
                frame: "topicon18",
                parts: {
                    cloth_18_Top_f: 4
                },
                id: "18",
                top1: "4",
                top2: "11",
                mid1: "2",
                mid2: "8",
                base: "792.06720087115",
                attr1: "792.06720087115",
                attr2: "1980.1680021779",
                attr3: "792.06720087115",
                attr4: "3960.3360043558",
                attr5: "792.06720087115",
                attr6: "792.06720087115",
                attr7: "792.06720087115",
                attr8: "1980.1680021779",
                attr9: "792.06720087115",
                attr10: "792.06720087115",
                attr11: "3960.3360043558",
                attr12: "792.06720087115",
                per: "0"
            }, {
                name: "top 19",
                price: "539033600000",
                income: "2984000",
                coinround: "6871000",
                time: "2.30261394101877",
                rise: "0.175",
                reward: "3873000000",
                frame: "topicon19",
                parts: {
                    cloth_19_Top_f: 4
                },
                id: "19",
                top1: "9",
                top2: "10",
                mid1: "3",
                mid2: "6",
                base: "937.47728100182",
                attr1: "937.47728100182",
                attr2: "937.47728100182",
                attr3: "2343.6932025046",
                attr4: "937.47728100182",
                attr5: "937.47728100182",
                attr6: "2343.6932025046",
                attr7: "937.47728100182",
                attr8: "937.47728100182",
                attr9: "4687.3864050091",
                attr10: "4687.3864050091",
                attr11: "937.47728100182",
                attr12: "937.47728100182",
                per: "0"
            }, {
                name: "top 20",
                price: "1724907000000",
                income: "6288000",
                coinround: "13772000",
                time: "2.19020356234097",
                rise: "0.175",
                reward: "12006000000",
                frame: "topicon20",
                parts: {
                    cloth_20_Top_f: 4
                },
                id: "20",
                top1: "1",
                top2: "2",
                mid1: "5",
                mid2: "8",
                base: "1106.0988731521",
                attr1: "5530.4943657605",
                attr2: "5530.4943657605",
                attr3: "1106.0988731521",
                attr4: "1106.0988731521",
                attr5: "2765.2471828802",
                attr6: "1106.0988731521",
                attr7: "1106.0988731521",
                attr8: "2765.2471828802",
                attr9: "1106.0988731521",
                attr10: "1106.0988731521",
                attr11: "1106.0988731521",
                attr12: "1106.0988731521",
                per: "0"
            }, {
                name: "top 21",
                price: "5519000000000",
                income: "13238000",
                coinround: "27536000",
                time: "2.08007251850733",
                rise: "0.175",
                reward: "39480000000",
                frame: "topicon21",
                parts: {
                    cloth_21_Top_b: -4,
                    cloth_21_Top_f: 4
                },
                id: "21",
                top1: "5",
                top2: "7",
                mid1: "9",
                mid2: "12",
                base: "1270.8917266619",
                attr1: "1270.8917266619",
                attr2: "1270.8917266619",
                attr3: "1270.8917266619",
                attr4: "1270.8917266619",
                attr5: "6354.4586333094",
                attr6: "1270.8917266619",
                attr7: "6354.4586333094",
                attr8: "1270.8917266619",
                attr9: "3177.2293166547",
                attr10: "1270.8917266619",
                attr11: "1270.8917266619",
                attr12: "3177.2293166547",
                per: "0"
            }, {
                name: "top 22",
                price: "17663000000000",
                income: "27870000",
                coinround: "55150000",
                time: "1.97883028345892",
                rise: "0.175",
                reward: "122388000000",
                frame: "topicon22",
                parts: {
                    cloth_22_Top_f: 4
                },
                id: "22",
                top1: "8",
                top2: "12",
                mid1: "2",
                mid2: "4",
                base: "1458.1076511279",
                attr1: "1458.1076511279",
                attr2: "3645.2691278198",
                attr3: "1458.1076511279",
                attr4: "3645.2691278198",
                attr5: "1458.1076511279",
                attr6: "1458.1076511279",
                attr7: "1458.1076511279",
                attr8: "7290.5382556396",
                attr9: "1458.1076511279",
                attr10: "1458.1076511279",
                attr11: "1458.1076511279",
                attr12: "7290.5382556396",
                per: "0"
            }, {
                name: "top 23",
                price: "56773000000000",
                income: "58666000",
                coinround: "110300000",
                time: "1.88013500153411",
                rise: "0.175",
                reward: "318207000000",
                frame: "topicon23",
                parts: {
                    cloth_23_Top_f: 4
                },
                id: "23",
                top1: "4",
                top2: "8",
                mid1: "2",
                mid2: "10",
                base: "1670.6616457745",
                attr1: "1670.6616457745",
                attr2: "4176.6541144364",
                attr3: "1670.6616457745",
                attr4: "8353.3082288727",
                attr5: "1670.6616457745",
                attr6: "1670.6616457745",
                attr7: "1670.6616457745",
                attr8: "8353.3082288727",
                attr9: "1670.6616457745",
                attr10: "4176.6541144364",
                attr11: "1670.6616457745",
                attr12: "1670.6616457745",
                per: "0"
            }, {
                name: "top 24",
                price: "170319000000000",
                income: "123523000",
                coinround: "219871000",
                time: "1.7800004857395",
                rise: "0.175",
                reward: "1018000000000",
                frame: "topicon24",
                parts: {
                    cloth_24_Top_f: 4
                },
                id: "24",
                top1: "8",
                top2: "11",
                mid1: "1",
                mid2: "5",
                base: "1911.8476597252",
                attr1: "4779.6191493131",
                attr2: "1911.8476597252",
                attr3: "1911.8476597252",
                attr4: "1911.8476597252",
                attr5: "4779.6191493131",
                attr6: "1911.8476597252",
                attr7: "1911.8476597252",
                attr8: "9559.2382986262",
                attr9: "1911.8476597252",
                attr10: "1911.8476597252",
                attr11: "9559.2382986262",
                attr12: "1911.8476597252",
                per: "0"
            }, {
                name: "top 25",
                price: "545020000000000",
                income: "260015000",
                coinround: "439742000",
                time: "1.69121781435686",
                rise: "0.175",
                reward: "3360000000000",
                frame: "topicon25",
                parts: {
                    cloth_25_Top_f: 4
                },
                id: "25",
                top1: "6",
                top2: "12",
                mid1: "1",
                mid2: "2",
                base: "2185.3878554895",
                attr1: "5463.4696387238",
                attr2: "5463.4696387238",
                attr3: "2185.3878554895",
                attr4: "2185.3878554895",
                attr5: "2185.3878554895",
                attr6: "10926.939277448",
                attr7: "2185.3878554895",
                attr8: "2185.3878554895",
                attr9: "2185.3878554895",
                attr10: "2185.3878554895",
                attr11: "2185.3878554895",
                attr12: "10926.939277448",
                per: "0"
            }, {
                name: "top 26",
                price: "1744000000000000",
                income: "547500000",
                coinround: "881500000",
                time: "1.61004566210046",
                rise: "0.175",
                reward: "11425000000000",
                frame: "topicon26",
                parts: {
                    cloth_26_Top_f: 4
                },
                id: "26",
                top1: "6",
                top2: "12",
                mid1: "3",
                mid2: "7",
                base: "2495.4882767031",
                attr1: "2495.4882767031",
                attr2: "2495.4882767031",
                attr3: "6238.7206917579",
                attr4: "2495.4882767031",
                attr5: "2495.4882767031",
                attr6: "12477.441383516",
                attr7: "6238.7206917579",
                attr8: "2495.4882767031",
                attr9: "2495.4882767031",
                attr10: "2495.4882767031",
                attr11: "2495.4882767031",
                attr12: "12477.441383516",
                per: "0"
            }, {
                name: "top 27",
                price: "5581000000000000",
                income: "1153000000",
                coinround: "1764000000",
                time: "1.52992194275802",
                rise: "0.175",
                reward: "38845000000000",
                frame: "topicon27",
                parts: {
                    cloth_27_Top_f: 4
                },
                id: "27",
                top1: "4",
                top2: "9",
                mid1: "1",
                mid2: "6",
                base: "2846.9017526746",
                attr1: "7117.2543816864",
                attr2: "2846.9017526746",
                attr3: "2846.9017526746",
                attr4: "14234.508763373",
                attr5: "2846.9017526746",
                attr6: "7117.2543816864",
                attr7: "2846.9017526746",
                attr8: "2846.9017526746",
                attr9: "14234.508763373",
                attr10: "2846.9017526746",
                attr11: "2846.9017526746",
                attr12: "2846.9017526746",
                per: "0"
            }, {
                name: "top 28",
                price: "17859000000000000",
                income: "2427000000",
                coinround: "3518000000",
                time: "1.44952616398846",
                rise: "0.175",
                reward: "89641000000000",
                frame: "topicon28",
                parts: {
                    cloth_28_Top_f: 4
                },
                id: "28",
                top1: "10",
                top2: "12",
                mid1: "1",
                mid2: "5",
                base: "3244.9989805222",
                attr1: "8112.4974513056",
                attr2: "3244.9989805222",
                attr3: "3244.9989805222",
                attr4: "3244.9989805222",
                attr5: "8112.4974513056",
                attr6: "3244.9989805222",
                attr7: "3244.9989805222",
                attr8: "3244.9989805222",
                attr9: "3244.9989805222",
                attr10: "16224.994902611",
                attr11: "3244.9989805222",
                attr12: "16224.994902611",
                per: "0"
            }, {
                name: "top 29",
                price: "57149000000000000",
                income: "5108000000",
                coinround: "7050000000",
                time: "1.38018794048551",
                rise: "0.175",
                reward: "286853000000000",
                frame: "topicon29",
                parts: {
                    cloth_29_Top_b: -4,
                    cloth_29_Top_f: 4
                },
                id: "29",
                top1: "1",
                top2: "8",
                mid1: "5",
                mid2: "12",
                base: "3695.8488479901",
                attr1: "18479.244239951",
                attr2: "3695.8488479901",
                attr3: "3695.8488479901",
                attr4: "3695.8488479901",
                attr5: "9239.6221199754",
                attr6: "3695.8488479901",
                attr7: "3695.8488479901",
                attr8: "18479.244239951",
                attr9: "3695.8488479901",
                attr10: "3695.8488479901",
                attr11: "3695.8488479901",
                attr12: "9239.6221199754",
                per: "0"
            }, {
                name: "top 30",
                price: "182878000000000000",
                income: "10754000000",
                coinround: "14088000000",
                time: "1.3100241770504",
                rise: "0.175",
                reward: "717312000000000",
                frame: "topicon30",
                parts: {
                    cloth_30_Top_f: 4
                },
                id: "30",
                top1: "3",
                top2: "12",
                mid1: "4",
                mid2: "6",
                base: "4206.3091982289",
                attr1: "4206.3091982289",
                attr2: "4206.3091982289",
                attr3: "21031.545991144",
                attr4: "10515.772995572",
                attr5: "4206.3091982289",
                attr6: "10515.772995572",
                attr7: "4206.3091982289",
                attr8: "4206.3091982289",
                attr9: "4206.3091982289",
                attr10: "4206.3091982289",
                attr11: "4206.3091982289",
                attr12: "21031.545991144",
                per: "0"
            }],
            trous: [{}, {
                name: "bottom 1",
                price: "100",
                income: "5",
                coinround: "26",
                time: "5.2",
                rise: "0.07",
                reward: "0",
                frame: "bottomicon01",
                parts: {
                    cloth_01_Bottom_f: 3
                },
                id: "1",
                top1: "2",
                top2: "11",
                mid1: "7",
                mid2: "9",
                base: "2",
                attr1: "2",
                attr2: "10",
                attr3: "2",
                attr4: "2",
                attr5: "2",
                attr6: "2",
                attr7: "5",
                attr8: "2",
                attr9: "5",
                attr10: "2",
                attr11: "10",
                attr12: "2",
                per: "0"
            }, {
                name: "bottom 2",
                price: "1500",
                income: "10",
                coinround: "52",
                time: "5.2",
                rise: "0.175",
                reward: "0",
                frame: "bottomicon02",
                parts: {
                    cloth_02_Bottom_f: 3
                },
                id: "2",
                top1: "5",
                top2: "6",
                mid1: "4",
                mid2: "11",
                base: "5.94",
                attr1: "5.94",
                attr2: "5.94",
                attr3: "5.94",
                attr4: "14.85",
                attr5: "29.7",
                attr6: "29.7",
                attr7: "5.94",
                attr8: "5.94",
                attr9: "5.94",
                attr10: "5.94",
                attr11: "14.85",
                attr12: "5.94",
                per: "0"
            }, {
                name: "bottom 3",
                price: "4800",
                income: "20",
                coinround: "105",
                time: "5.25",
                rise: "0.175",
                reward: "0",
                frame: "bottomicon03",
                parts: {
                    cloth_03_Bottom_f: 3
                },
                id: "3",
                top1: "3",
                top2: "10",
                mid1: "7",
                mid2: "9",
                base: "12.3498",
                attr1: "12.3498",
                attr2: "12.3498",
                attr3: "61.749",
                attr4: "12.3498",
                attr5: "12.3498",
                attr6: "12.3498",
                attr7: "30.8745",
                attr8: "12.3498",
                attr9: "30.8745",
                attr10: "61.749",
                attr11: "12.3498",
                attr12: "12.3498",
                per: "0"
            }, {
                name: "bottom 4",
                price: "14880",
                income: "42",
                coinround: "210",
                time: "5",
                rise: "0.175",
                reward: "0",
                frame: "bottomicon04",
                parts: {
                    cloth_04_Bottom_f: 3
                },
                id: "4",
                top1: "4",
                top2: "11",
                mid1: "1",
                mid2: "6",
                base: "21.649266",
                attr1: "54.123165",
                attr2: "21.649266",
                attr3: "21.649266",
                attr4: "108.24633",
                attr5: "21.649266",
                attr6: "54.123165",
                attr7: "21.649266",
                attr8: "21.649266",
                attr9: "21.649266",
                attr10: "21.649266",
                attr11: "108.24633",
                attr12: "21.649266",
                per: "0"
            }, {
                name: "bottom 5",
                price: "46130",
                income: "89",
                coinround: "420",
                time: "4.71910112359551",
                rise: "0.175",
                reward: "1000",
                frame: "bottomicon05",
                parts: {
                    cloth_05_Bottom_f: 3
                },
                id: "5",
                top1: "6",
                top2: "10",
                mid1: "2",
                mid2: "7",
                base: "34.32964122",
                attr1: "34.32964122",
                attr2: "85.82410305",
                attr3: "34.32964122",
                attr4: "34.32964122",
                attr5: "34.32964122",
                attr6: "171.6482061",
                attr7: "85.82410305",
                attr8: "34.32964122",
                attr9: "34.32964122",
                attr10: "171.6482061",
                attr11: "34.32964122",
                attr12: "34.32964122",
                per: "0"
            }, {
                name: "bottom 6",
                price: "147616",
                income: "187",
                coinround: "840",
                time: "4.49197860962567",
                rise: "0.175",
                reward: "2000",
                frame: "bottomicon06",
                parts: {
                    cloth_06_Bottom_f: 3
                },
                id: "6",
                top1: "1",
                top2: "5",
                mid1: "4",
                mid2: "8",
                base: "50.9656802274",
                attr1: "254.828401137",
                attr2: "50.9656802274",
                attr3: "50.9656802274",
                attr4: "127.4142005685",
                attr5: "254.828401137",
                attr6: "50.9656802274",
                attr7: "50.9656802274",
                attr8: "127.4142005685",
                attr9: "50.9656802274",
                attr10: "50.9656802274",
                attr11: "50.9656802274",
                attr12: "50.9656802274",
                per: "0"
            }, {
                name: "bottom 7",
                price: "472371",
                income: "394",
                coinround: "1679",
                time: "4.26142131979695",
                rise: "0.175",
                reward: "5000",
                frame: "bottomicon07",
                parts: {
                    cloth_07_Bottom_f: 1
                },
                id: "7",
                top1: "4",
                top2: "9",
                mid1: "7",
                mid2: "11",
                base: "72.229845866058",
                attr1: "72.229845866058",
                attr2: "72.229845866058",
                attr3: "72.229845866058",
                attr4: "361.14922933029",
                attr5: "72.229845866058",
                attr6: "72.229845866058",
                attr7: "180.57461466514",
                attr8: "72.229845866058",
                attr9: "361.14922933029",
                attr10: "72.229845866058",
                attr11: "180.57461466514",
                attr12: "72.229845866058",
                per: "0"
            }, {
                name: "bottom 8",
                price: "1511000",
                income: "830",
                coinround: "3360",
                time: "4.04819277108434",
                rise: "0.175",
                reward: "15000",
                frame: "bottomicon08",
                parts: {
                    cloth_08_Bottom_f: 3
                },
                id: "8",
                top1: "1",
                top2: "11",
                mid1: "2",
                mid2: "3",
                base: "98.908919663288",
                attr1: "494.54459831644",
                attr2: "247.27229915822",
                attr3: "247.27229915822",
                attr4: "98.908919663288",
                attr5: "98.908919663288",
                attr6: "98.908919663288",
                attr7: "98.908919663288",
                attr8: "98.908919663288",
                attr9: "98.908919663288",
                attr10: "98.908919663288",
                attr11: "494.54459831644",
                attr12: "98.908919663288",
                per: "0"
            }, {
                name: "bottom 9",
                price: "4837000",
                income: "1746",
                coinround: "6724",
                time: "3.85108820160367",
                rise: "0.175",
                reward: "44000",
                frame: "bottomicon09",
                parts: {
                    cloth_09_Bottom_f: 1
                },
                id: "9",
                top1: "5",
                top2: "7",
                mid1: "3",
                mid2: "10",
                base: "131.92343600605",
                attr1: "131.92343600605",
                attr2: "131.92343600605",
                attr3: "329.80859001512",
                attr4: "131.92343600605",
                attr5: "659.61718003023",
                attr6: "131.92343600605",
                attr7: "659.61718003023",
                attr8: "131.92343600605",
                attr9: "131.92343600605",
                attr10: "329.80859001512",
                attr11: "131.92343600605",
                attr12: "131.92343600605",
                per: "0"
            }, {
                name: "bottom 10",
                price: "15478000",
                income: "3677",
                coinround: "13457",
                time: "3.65977699211314",
                rise: "0.175",
                reward: "136000",
                frame: "bottomicon10",
                parts: {
                    cloth_10_Bottom_f: 1
                },
                id: "10",
                top1: "2",
                top2: "10",
                mid1: "8",
                mid2: "12",
                base: "172.35042012708",
                attr1: "172.35042012708",
                attr2: "861.75210063537",
                attr3: "172.35042012708",
                attr4: "172.35042012708",
                attr5: "172.35042012708",
                attr6: "172.35042012708",
                attr7: "172.35042012708",
                attr8: "430.87605031769",
                attr9: "172.35042012708",
                attr10: "861.75210063537",
                attr11: "172.35042012708",
                attr12: "430.87605031769",
                per: "0"
            }, {
                name: "bottom 11",
                price: "49531000",
                income: "7740",
                coinround: "26859",
                time: "3.47015503875969",
                rise: "0.175",
                reward: "421000",
                frame: "bottomicon11",
                parts: {
                    cloth_11_Bottom_f: 1
                },
                id: "11",
                top1: "2",
                top2: "11",
                mid1: "4",
                mid2: "5",
                base: "213.60298314614",
                attr1: "213.60298314614",
                attr2: "1068.0149157307",
                attr3: "213.60298314614",
                attr4: "534.00745786534",
                attr5: "534.00745786534",
                attr6: "213.60298314614",
                attr7: "213.60298314614",
                attr8: "213.60298314614",
                attr9: "213.60298314614",
                attr10: "213.60298314614",
                attr11: "1068.0149157307",
                attr12: "213.60298314614",
                per: "0"
            }, {
                name: "bottom 12",
                price: "158501000",
                income: "16296",
                coinround: "53776",
                time: "3.29995090819833",
                rise: "0.175",
                reward: "1306000",
                frame: "bottomicon12",
                parts: {
                    cloth_12_Bottom_f: 1
                },
                id: "12",
                top1: "3",
                top2: "9",
                mid1: "6",
                mid2: "11",
                base: "262.44343061806",
                attr1: "262.44343061806",
                attr2: "262.44343061806",
                attr3: "1312.2171530903",
                attr4: "262.44343061806",
                attr5: "262.44343061806",
                attr6: "656.10857654514",
                attr7: "262.44343061806",
                attr8: "262.44343061806",
                attr9: "1312.2171530903",
                attr10: "262.44343061806",
                attr11: "656.10857654514",
                attr12: "262.44343061806",
                per: "0"
            }, {
                name: "bottom 13",
                price: "507204000",
                income: "34307",
                coinround: "107380",
                time: "3.12997347480106",
                rise: "0.175",
                reward: "4178000",
                frame: "bottomicon13",
                parts: {
                    cloth_13_Bottom_f: 1
                },
                id: "13",
                top1: "5",
                top2: "8",
                mid1: "4",
                mid2: "10",
                base: "320.00994521077",
                attr1: "320.00994521077",
                attr2: "320.00994521077",
                attr3: "320.00994521077",
                attr4: "800.02486302691",
                attr5: "1600.0497260538",
                attr6: "320.00994521077",
                attr7: "320.00994521077",
                attr8: "1600.0497260538",
                attr9: "320.00994521077",
                attr10: "800.02486302691",
                attr11: "320.00994521077",
                attr12: "320.00994521077",
                per: "0"
            }, {
                name: "bottom 14",
                price: "1623055000",
                income: "72224",
                coinround: "215229",
                time: "2.98002049180328",
                rise: "0.175",
                reward: "13786000",
                frame: "bottomicon14",
                parts: {
                    cloth_14_Bottom_f: 1
                },
                id: "14",
                top1: "3",
                top2: "6",
                mid1: "2",
                mid2: "9",
                base: "387.61143699238",
                attr1: "387.61143699238",
                attr2: "969.02859248095",
                attr3: "1938.0571849619",
                attr4: "387.61143699238",
                attr5: "387.61143699238",
                attr6: "1938.0571849619",
                attr7: "387.61143699238",
                attr8: "387.61143699238",
                attr9: "969.02859248095",
                attr10: "387.61143699238",
                attr11: "387.61143699238",
                attr12: "387.61143699238",
                per: "0"
            }, {
                name: "bottom 15",
                price: "5193000000",
                income: "152031",
                coinround: "430306",
                time: "2.8303832770948",
                rise: "0.175",
                reward: "41939000",
                frame: "bottomicon15",
                parts: {
                    cloth_15_Bottom_f: 1
                },
                id: "15",
                top1: "2",
                top2: "7",
                mid1: "1",
                mid2: "8",
                base: "466.75315254124",
                attr1: "1166.8828813531",
                attr2: "2333.7657627062",
                attr3: "466.75315254124",
                attr4: "466.75315254124",
                attr5: "466.75315254124",
                attr6: "466.75315254124",
                attr7: "2333.7657627062",
                attr8: "1166.8828813531",
                attr9: "466.75315254124",
                attr10: "466.75315254124",
                attr11: "466.75315254124",
                attr12: "466.75315254124",
                per: "0"
            }, {
                name: "bottom 16",
                price: "16620000000",
                income: "320026",
                coinround: "861092",
                time: "2.69069388112216",
                rise: "0.175",
                reward: "130010000",
                frame: "bottomicon16",
                parts: {
                    cloth_16_Bottom_f: 1
                },
                id: "16",
                top1: "1",
                top2: "2",
                mid1: "5",
                mid2: "8",
                base: "559.16612542242",
                attr1: "2795.8306271121",
                attr2: "2795.8306271121",
                attr3: "559.16612542242",
                attr4: "559.16612542242",
                attr5: "1397.9153135561",
                attr6: "559.16612542242",
                attr7: "559.16612542242",
                attr8: "1397.9153135561",
                attr9: "559.16612542242",
                attr10: "559.16612542242",
                attr11: "559.16612542242",
                attr12: "559.16612542242",
                per: "0"
            }, {
                name: "bottom 17",
                price: "52640000000",
                income: "673655",
                coinround: "1718000",
                time: "2.55026682797574",
                rise: "0.175",
                reward: "403033000",
                frame: "bottomicon17",
                parts: {
                    cloth_17_Bottom_f: 1
                },
                id: "17",
                top1: "7",
                top2: "9",
                mid1: "5",
                mid2: "10",
                base: "666.84104423579",
                attr1: "666.84104423579",
                attr2: "666.84104423579",
                attr3: "666.84104423579",
                attr4: "666.84104423579",
                attr5: "1667.1026105895",
                attr6: "666.84104423579",
                attr7: "3334.2052211789",
                attr8: "666.84104423579",
                attr9: "3334.2052211789",
                attr10: "1667.1026105895",
                attr11: "666.84104423579",
                attr12: "666.84104423579",
                per: "0"
            }, {
                name: "bottom 18",
                price: "168448000000",
                income: "1418000",
                coinround: "3447000",
                time: "2.43088857545839",
                rise: "0.175",
                reward: "1249000000",
                frame: "bottomicon18",
                parts: {
                    cloth_18_Bottom_f: 1
                },
                id: "18",
                top1: "9",
                top2: "10",
                mid1: "3",
                mid2: "6",
                base: "792.06720087115",
                attr1: "792.06720087115",
                attr2: "792.06720087115",
                attr3: "1980.1680021779",
                attr4: "792.06720087115",
                attr5: "792.06720087115",
                attr6: "1980.1680021779",
                attr7: "792.06720087115",
                attr8: "792.06720087115",
                attr9: "3960.3360043558",
                attr10: "3960.3360043558",
                attr11: "792.06720087115",
                attr12: "792.06720087115",
                per: "0"
            }, {
                name: "bottom 19",
                price: "539033600000",
                income: "2984000",
                coinround: "6871000",
                time: "2.30261394101877",
                rise: "0.175",
                reward: "3873000000",
                frame: "bottomicon19",
                parts: {
                    cloth_19_Bottom_f: 3
                },
                id: "19",
                top1: "2",
                top2: "3",
                mid1: "7",
                mid2: "10",
                base: "937.47728100182",
                attr1: "937.47728100182",
                attr2: "4687.3864050091",
                attr3: "4687.3864050091",
                attr4: "937.47728100182",
                attr5: "937.47728100182",
                attr6: "937.47728100182",
                attr7: "2343.6932025046",
                attr8: "937.47728100182",
                attr9: "937.47728100182",
                attr10: "2343.6932025046",
                attr11: "937.47728100182",
                attr12: "937.47728100182",
                per: "0"
            }, {
                name: "bottom 20",
                price: "1724907000000",
                income: "6288000",
                coinround: "13772000",
                time: "2.19020356234097",
                rise: "0.175",
                reward: "12006000000",
                frame: "bottomicon20",
                parts: {
                    cloth_20_Bottom_f: 1
                },
                id: "20",
                top1: "4",
                top2: "11",
                mid1: "2",
                mid2: "8",
                base: "1106.0988731521",
                attr1: "1106.0988731521",
                attr2: "2765.2471828802",
                attr3: "1106.0988731521",
                attr4: "5530.4943657605",
                attr5: "1106.0988731521",
                attr6: "1106.0988731521",
                attr7: "1106.0988731521",
                attr8: "2765.2471828802",
                attr9: "1106.0988731521",
                attr10: "1106.0988731521",
                attr11: "5530.4943657605",
                attr12: "1106.0988731521",
                per: "0"
            }, {
                name: "bottom 21",
                price: "5519000000000",
                income: "13238000",
                coinround: "27536000",
                time: "2.08007251850733",
                rise: "0.175",
                reward: "39480000000",
                frame: "bottomicon21",
                parts: {
                    cloth_21_Bottom_f: 1
                },
                id: "21",
                top1: "4",
                top2: "8",
                mid1: "2",
                mid2: "10",
                base: "1270.8917266619",
                attr1: "1270.8917266619",
                attr2: "3177.2293166547",
                attr3: "1270.8917266619",
                attr4: "6354.4586333094",
                attr5: "1270.8917266619",
                attr6: "1270.8917266619",
                attr7: "1270.8917266619",
                attr8: "6354.4586333094",
                attr9: "1270.8917266619",
                attr10: "3177.2293166547",
                attr11: "1270.8917266619",
                attr12: "1270.8917266619",
                per: "0"
            }, {
                name: "bottom 22",
                price: "17663000000000",
                income: "27870000",
                coinround: "55150000",
                time: "1.97883028345892",
                rise: "0.175",
                reward: "122388000000",
                frame: "bottomicon22",
                parts: {
                    cloth_22_Bottom_f: 1
                },
                id: "22",
                top1: "8",
                top2: "12",
                mid1: "2",
                mid2: "4",
                base: "1458.1076511279",
                attr1: "1458.1076511279",
                attr2: "3645.2691278198",
                attr3: "1458.1076511279",
                attr4: "3645.2691278198",
                attr5: "1458.1076511279",
                attr6: "1458.1076511279",
                attr7: "1458.1076511279",
                attr8: "7290.5382556396",
                attr9: "1458.1076511279",
                attr10: "1458.1076511279",
                attr11: "1458.1076511279",
                attr12: "7290.5382556396",
                per: "0"
            }, {
                name: "bottom 23",
                price: "56773000000000",
                income: "58666000",
                coinround: "110300000",
                time: "1.88013500153411",
                rise: "0.175",
                reward: "318207000000",
                frame: "bottomicon23",
                parts: {
                    cloth_23_Bottom_f: 1
                },
                id: "23",
                top1: "5",
                top2: "7",
                mid1: "9",
                mid2: "12",
                base: "1670.6616457745",
                attr1: "1670.6616457745",
                attr2: "1670.6616457745",
                attr3: "1670.6616457745",
                attr4: "1670.6616457745",
                attr5: "8353.3082288727",
                attr6: "1670.6616457745",
                attr7: "8353.3082288727",
                attr8: "1670.6616457745",
                attr9: "4176.6541144364",
                attr10: "1670.6616457745",
                attr11: "1670.6616457745",
                attr12: "4176.6541144364",
                per: "0"
            }, {
                name: "bottom 24",
                price: "170319000000000",
                income: "123523000",
                coinround: "219871000",
                time: "1.7800004857395",
                rise: "0.175",
                reward: "1018000000000",
                frame: "bottomicon24",
                parts: {
                    cloth_24_Bottom_f: 3
                },
                id: "24",
                top1: "8",
                top2: "11",
                mid1: "1",
                mid2: "5",
                base: "1911.8476597252",
                attr1: "4779.6191493131",
                attr2: "1911.8476597252",
                attr3: "1911.8476597252",
                attr4: "1911.8476597252",
                attr5: "4779.6191493131",
                attr6: "1911.8476597252",
                attr7: "1911.8476597252",
                attr8: "9559.2382986262",
                attr9: "1911.8476597252",
                attr10: "1911.8476597252",
                attr11: "9559.2382986262",
                attr12: "1911.8476597252",
                per: "0"
            }, {
                name: "bottom 25",
                price: "545020000000000",
                income: "260015000",
                coinround: "439742000",
                time: "1.69121781435686",
                rise: "0.175",
                reward: "3360000000000",
                frame: "bottomicon25",
                parts: {
                    cloth_25_Bottom_f: 1
                },
                id: "25",
                top1: "6",
                top2: "12",
                mid1: "1",
                mid2: "2",
                base: "2185.3878554895",
                attr1: "5463.4696387238",
                attr2: "5463.4696387238",
                attr3: "2185.3878554895",
                attr4: "2185.3878554895",
                attr5: "2185.3878554895",
                attr6: "10926.939277448",
                attr7: "2185.3878554895",
                attr8: "2185.3878554895",
                attr9: "2185.3878554895",
                attr10: "2185.3878554895",
                attr11: "2185.3878554895",
                attr12: "10926.939277448",
                per: "0"
            }, {
                name: "bottom 26",
                price: "1744000000000000",
                income: "547500000",
                coinround: "881500000",
                time: "1.61004566210046",
                rise: "0.175",
                reward: "11425000000000",
                frame: "bottomicon26",
                parts: {
                    cloth_26_Bottom_f: 1
                },
                id: "26",
                top1: "6",
                top2: "12",
                mid1: "3",
                mid2: "7",
                base: "2495.4882767031",
                attr1: "2495.4882767031",
                attr2: "2495.4882767031",
                attr3: "6238.7206917579",
                attr4: "2495.4882767031",
                attr5: "2495.4882767031",
                attr6: "12477.441383516",
                attr7: "6238.7206917579",
                attr8: "2495.4882767031",
                attr9: "2495.4882767031",
                attr10: "2495.4882767031",
                attr11: "2495.4882767031",
                attr12: "12477.441383516",
                per: "0"
            }, {
                name: "bottom 27",
                price: "5581000000000000",
                income: "1153000000",
                coinround: "1764000000",
                time: "1.52992194275802",
                rise: "0.175",
                reward: "38845000000000",
                frame: "bottomicon27",
                parts: {
                    cloth_27_Bottom_f: 3
                },
                id: "27",
                top1: "4",
                top2: "9",
                mid1: "1",
                mid2: "6",
                base: "2846.9017526746",
                attr1: "7117.2543816864",
                attr2: "2846.9017526746",
                attr3: "2846.9017526746",
                attr4: "14234.508763373",
                attr5: "2846.9017526746",
                attr6: "7117.2543816864",
                attr7: "2846.9017526746",
                attr8: "2846.9017526746",
                attr9: "14234.508763373",
                attr10: "2846.9017526746",
                attr11: "2846.9017526746",
                attr12: "2846.9017526746",
                per: "0"
            }, {
                name: "bottom 28",
                price: "17859000000000000",
                income: "2427000000",
                coinround: "3518000000",
                time: "1.44952616398846",
                rise: "0.175",
                reward: "89641000000000",
                frame: "bottomicon28",
                parts: {
                    cloth_28_Bottom_f: 1
                },
                id: "28",
                top1: "1",
                top2: "8",
                mid1: "5",
                mid2: "12",
                base: "3244.9989805222",
                attr1: "16224.994902611",
                attr2: "3244.9989805222",
                attr3: "3244.9989805222",
                attr4: "3244.9989805222",
                attr5: "8112.4974513056",
                attr6: "3244.9989805222",
                attr7: "3244.9989805222",
                attr8: "16224.994902611",
                attr9: "3244.9989805222",
                attr10: "3244.9989805222",
                attr11: "3244.9989805222",
                attr12: "8112.4974513056",
                per: "0"
            }, {
                name: "bottom 29",
                price: "57149000000000000",
                income: "5108000000",
                coinround: "7050000000",
                time: "1.38018794048551",
                rise: "0.175",
                reward: "286853000000000",
                frame: "bottomicon29",
                parts: {
                    cloth_29_Bottom_f: 1
                },
                id: "29",
                top1: "10",
                top2: "12",
                mid1: "1",
                mid2: "5",
                base: "3695.8488479901",
                attr1: "9239.6221199754",
                attr2: "3695.8488479901",
                attr3: "3695.8488479901",
                attr4: "3695.8488479901",
                attr5: "9239.6221199754",
                attr6: "3695.8488479901",
                attr7: "3695.8488479901",
                attr8: "3695.8488479901",
                attr9: "3695.8488479901",
                attr10: "18479.244239951",
                attr11: "3695.8488479901",
                attr12: "18479.244239951",
                per: "0"
            }, {
                name: "bottom 30",
                price: "182878000000000000",
                income: "10754000000",
                coinround: "14088000000",
                time: "1.3100241770504",
                rise: "0.175",
                reward: "717312000000000",
                frame: "bottomicon30",
                parts: {
                    cloth_30_Bottom_f: 1
                },
                id: "30",
                top1: "3",
                top2: "12",
                mid1: "4",
                mid2: "6",
                base: "4206.3091982289",
                attr1: "4206.3091982289",
                attr2: "4206.3091982289",
                attr3: "21031.545991144",
                attr4: "10515.772995572",
                attr5: "4206.3091982289",
                attr6: "10515.772995572",
                attr7: "4206.3091982289",
                attr8: "4206.3091982289",
                attr9: "4206.3091982289",
                attr10: "4206.3091982289",
                attr11: "4206.3091982289",
                attr12: "21031.545991144",
                per: "0"
            }],
            shoe: [{}, {
                name: "shoe 1",
                price: "100",
                income: "5",
                coinround: "26",
                time: "5.2",
                rise: "0.07",
                reward: "0",
                frame: "shoeicon01",
                parts: {
                    cloth_01_Shoe_f: 2
                },
                id: "1",
                top1: "2",
                top2: "11",
                mid1: "7",
                mid2: "9",
                base: "2",
                attr1: "2",
                attr2: "10",
                attr3: "2",
                attr4: "2",
                attr5: "2",
                attr6: "2",
                attr7: "5",
                attr8: "2",
                attr9: "5",
                attr10: "2",
                attr11: "10",
                attr12: "2",
                per: "0"
            }, {
                name: "shoe 2",
                price: "1500",
                income: "10",
                coinround: "52",
                time: "5.2",
                rise: "0.175",
                reward: "0",
                frame: "shoeicon02",
                parts: {
                    cloth_02_Shoe_f: 2
                },
                id: "2",
                top1: "6",
                top2: "10",
                mid1: "2",
                mid2: "7",
                base: "5.94",
                attr1: "5.94",
                attr2: "14.85",
                attr3: "5.94",
                attr4: "5.94",
                attr5: "5.94",
                attr6: "29.7",
                attr7: "14.85",
                attr8: "5.94",
                attr9: "5.94",
                attr10: "29.7",
                attr11: "5.94",
                attr12: "5.94",
                per: "0"
            }, {
                name: "shoe 3",
                price: "4800",
                income: "20",
                coinround: "105",
                time: "5.25",
                rise: "0.175",
                reward: "0",
                frame: "shoeicon03",
                parts: {
                    cloth_03_Shoe_f: 2
                },
                id: "3",
                top1: "5",
                top2: "6",
                mid1: "4",
                mid2: "11",
                base: "12.3498",
                attr1: "12.3498",
                attr2: "12.3498",
                attr3: "12.3498",
                attr4: "30.8745",
                attr5: "61.749",
                attr6: "61.749",
                attr7: "12.3498",
                attr8: "12.3498",
                attr9: "12.3498",
                attr10: "12.3498",
                attr11: "30.8745",
                attr12: "12.3498",
                per: "0"
            }, {
                name: "shoe 4",
                price: "14880",
                income: "42",
                coinround: "210",
                time: "5",
                rise: "0.175",
                reward: "0",
                frame: "shoeicon04",
                parts: {
                    cloth_04_Shoe_f: 2
                },
                id: "4",
                top1: "3",
                top2: "10",
                mid1: "7",
                mid2: "9",
                base: "21.649266",
                attr1: "21.649266",
                attr2: "21.649266",
                attr3: "108.24633",
                attr4: "21.649266",
                attr5: "21.649266",
                attr6: "21.649266",
                attr7: "54.123165",
                attr8: "21.649266",
                attr9: "54.123165",
                attr10: "108.24633",
                attr11: "21.649266",
                attr12: "21.649266",
                per: "0"
            }, {
                name: "shoe 5",
                price: "46130",
                income: "89",
                coinround: "420",
                time: "4.71910112359551",
                rise: "0.175",
                reward: "1000",
                frame: "shoeicon05",
                parts: {
                    cloth_05_Shoe_f: 2
                },
                id: "5",
                top1: "4",
                top2: "11",
                mid1: "1",
                mid2: "6",
                base: "34.32964122",
                attr1: "85.82410305",
                attr2: "34.32964122",
                attr3: "34.32964122",
                attr4: "171.6482061",
                attr5: "34.32964122",
                attr6: "85.82410305",
                attr7: "34.32964122",
                attr8: "34.32964122",
                attr9: "34.32964122",
                attr10: "34.32964122",
                attr11: "171.6482061",
                attr12: "34.32964122",
                per: "0"
            }, {
                name: "shoe 6",
                price: "147616",
                income: "187",
                coinround: "840",
                time: "4.49197860962567",
                rise: "0.175",
                reward: "2000",
                frame: "shoeicon06",
                parts: {
                    cloth_06_Shoe_f: 2
                },
                id: "6",
                top1: "2",
                top2: "10",
                mid1: "8",
                mid2: "12",
                base: "50.9656802274",
                attr1: "50.9656802274",
                attr2: "254.828401137",
                attr3: "50.9656802274",
                attr4: "50.9656802274",
                attr5: "50.9656802274",
                attr6: "50.9656802274",
                attr7: "50.9656802274",
                attr8: "127.4142005685",
                attr9: "50.9656802274",
                attr10: "254.828401137",
                attr11: "50.9656802274",
                attr12: "127.4142005685",
                per: "0"
            }, {
                name: "shoe 7",
                price: "472371",
                income: "394",
                coinround: "1679",
                time: "4.26142131979695",
                rise: "0.175",
                reward: "5000",
                frame: "shoeicon07",
                parts: {
                    cloth_07_Shoe_f: 2
                },
                id: "7",
                top1: "1",
                top2: "11",
                mid1: "2",
                mid2: "3",
                base: "72.229845866058",
                attr1: "361.1492293",
                attr2: "180.57461466514",
                attr3: "180.57461466514",
                attr4: "72.229845866058",
                attr5: "72.229845866058",
                attr6: "72.229845866058",
                attr7: "72.229845866058",
                attr8: "72.229845866058",
                attr9: "72.229845866058",
                attr10: "72.229845866058",
                attr11: "361.1492293",
                attr12: "72.229845866058",
                per: "0"
            }, {
                name: "shoe 8",
                price: "1511000",
                income: "830",
                coinround: "3360",
                time: "4.04819277108434",
                rise: "0.175",
                reward: "15000",
                frame: "shoeicon08",
                parts: {
                    cloth_08_Shoe_f: 2
                },
                id: "8",
                top1: "5",
                top2: "7",
                mid1: "3",
                mid2: "10",
                base: "98.908919663288",
                attr1: "98.908919663288",
                attr2: "98.908919663288",
                attr3: "247.27229915822",
                attr4: "98.908919663288",
                attr5: "494.54459831644",
                attr6: "98.908919663288",
                attr7: "494.54459831644",
                attr8: "98.908919663288",
                attr9: "98.908919663288",
                attr10: "247.27229915822",
                attr11: "98.908919663288",
                attr12: "98.908919663288",
                per: "0"
            }, {
                name: "shoe 9",
                price: "4837000",
                income: "1746",
                coinround: "6724",
                time: "3.85108820160367",
                rise: "0.175",
                reward: "44000",
                frame: "shoeicon09",
                parts: {
                    cloth_09_Shoe_f: 2
                },
                id: "9",
                top1: "4",
                top2: "9",
                mid1: "7",
                mid2: "11",
                base: "131.92343600605",
                attr1: "131.92343600605",
                attr2: "131.92343600605",
                attr3: "131.92343600605",
                attr4: "659.61718003023",
                attr5: "131.92343600605",
                attr6: "131.92343600605",
                attr7: "329.80859001512",
                attr8: "131.92343600605",
                attr9: "659.61718003023",
                attr10: "131.92343600605",
                attr11: "329.80859001512",
                attr12: "131.92343600605",
                per: "0"
            }, {
                name: "shoe 10",
                price: "15478000",
                income: "3677",
                coinround: "13457",
                time: "3.65977699211314",
                rise: "0.175",
                reward: "136000",
                frame: "shoeicon10",
                parts: {
                    cloth_10_Shoe_f: 2
                },
                id: "10",
                top1: "1",
                top2: "5",
                mid1: "4",
                mid2: "8",
                base: "172.35042012708",
                attr1: "861.75210063537",
                attr2: "172.35042012708",
                attr3: "172.35042012708",
                attr4: "430.87605031769",
                attr5: "861.75210063537",
                attr6: "172.35042012708",
                attr7: "172.35042012708",
                attr8: "430.87605031769",
                attr9: "172.35042012708",
                attr10: "172.35042012708",
                attr11: "172.35042012708",
                attr12: "172.35042012708",
                per: "0"
            }, {
                name: "shoe 11",
                price: "49531000",
                income: "7740",
                coinround: "26859",
                time: "3.47015503875969",
                rise: "0.175",
                reward: "421000",
                frame: "shoeicon11",
                parts: {
                    cloth_11_Shoe_f: 2
                },
                id: "11",
                top1: "3",
                top2: "6",
                mid1: "2",
                mid2: "9",
                base: "213.60298314614",
                attr1: "213.60298314614",
                attr2: "534.00745786534",
                attr3: "1068.0149157307",
                attr4: "213.60298314614",
                attr5: "213.60298314614",
                attr6: "1068.0149157307",
                attr7: "213.60298314614",
                attr8: "213.60298314614",
                attr9: "534.00745786534",
                attr10: "213.60298314614",
                attr11: "213.60298314614",
                attr12: "213.60298314614",
                per: "0"
            }, {
                name: "shoe 12",
                price: "158501000",
                income: "16296",
                coinround: "53776",
                time: "3.29995090819833",
                rise: "0.175",
                reward: "1306000",
                frame: "shoeicon12",
                parts: {
                    cloth_12_Shoe_f: 2
                },
                id: "12",
                top1: "2",
                top2: "11",
                mid1: "4",
                mid2: "5",
                base: "262.44343061806",
                attr1: "262.44343061806",
                attr2: "1312.2171530903",
                attr3: "262.44343061806",
                attr4: "656.10857654514",
                attr5: "656.10857654514",
                attr6: "262.44343061806",
                attr7: "262.44343061806",
                attr8: "262.44343061806",
                attr9: "262.44343061806",
                attr10: "262.44343061806",
                attr11: "1312.2171530903",
                attr12: "262.44343061806",
                per: "0"
            }, {
                name: "shoe 13",
                price: "507204000",
                income: "34307",
                coinround: "107380",
                time: "3.12997347480106",
                rise: "0.175",
                reward: "4178000",
                frame: "shoeicon13",
                parts: {
                    cloth_13_Shoe_f: 2
                },
                id: "13",
                top1: "2",
                top2: "7",
                mid1: "1",
                mid2: "8",
                base: "320.00994521077",
                attr1: "800.02486302691",
                attr2: "1600.0497260538",
                attr3: "320.00994521077",
                attr4: "320.00994521077",
                attr5: "320.00994521077",
                attr6: "320.00994521077",
                attr7: "1600.0497260538",
                attr8: "800.02486302691",
                attr9: "320.00994521077",
                attr10: "320.00994521077",
                attr11: "320.00994521077",
                attr12: "320.00994521077",
                per: "0"
            }, {
                name: "shoe 14",
                price: "1623055000",
                income: "72224",
                coinround: "215229",
                time: "2.98002049180328",
                rise: "0.175",
                reward: "13786000",
                frame: "shoeicon14",
                parts: {
                    cloth_14_Shoe_f: 2
                },
                id: "14",
                top1: "5",
                top2: "8",
                mid1: "4",
                mid2: "10",
                base: "387.61143699238",
                attr1: "387.61143699238",
                attr2: "387.61143699238",
                attr3: "387.61143699238",
                attr4: "969.02859248095",
                attr5: "1938.0571849619",
                attr6: "387.61143699238",
                attr7: "387.61143699238",
                attr8: "1938.0571849619",
                attr9: "387.61143699238",
                attr10: "969.02859248095",
                attr11: "387.61143699238",
                attr12: "387.61143699238",
                per: "0"
            }, {
                name: "shoe 15",
                price: "5193000000",
                income: "152031",
                coinround: "430306",
                time: "2.8303832770948",
                rise: "0.175",
                reward: "41939000",
                frame: "shoeicon15",
                parts: {
                    cloth_15_Shoe_f: 2
                },
                id: "15",
                top1: "3",
                top2: "9",
                mid1: "6",
                mid2: "11",
                base: "466.75315254124",
                attr1: "466.75315254124",
                attr2: "466.75315254124",
                attr3: "2333.7657627062",
                attr4: "466.75315254124",
                attr5: "466.75315254124",
                attr6: "1166.8828813531",
                attr7: "466.75315254124",
                attr8: "466.75315254124",
                attr9: "2333.7657627062",
                attr10: "466.75315254124",
                attr11: "1166.8828813531",
                attr12: "466.75315254124",
                per: "0"
            }, {
                name: "shoe 16",
                price: "16620000000",
                income: "320026",
                coinround: "861092",
                time: "2.69069388112216",
                rise: "0.175",
                reward: "130010000",
                frame: "shoeicon16",
                parts: {
                    cloth_16_Shoe_f: 2
                },
                id: "16",
                top1: "2",
                top2: "3",
                mid1: "7",
                mid2: "10",
                base: "559.16612542242",
                attr1: "559.16612542242",
                attr2: "2795.8306271121",
                attr3: "2795.8306271121",
                attr4: "559.16612542242",
                attr5: "559.16612542242",
                attr6: "559.16612542242",
                attr7: "1397.9153135561",
                attr8: "559.16612542242",
                attr9: "559.16612542242",
                attr10: "1397.9153135561",
                attr11: "559.16612542242",
                attr12: "559.16612542242",
                per: "0"
            }, {
                name: "shoe 17",
                price: "52640000000",
                income: "673655",
                coinround: "1718000",
                time: "2.55026682797574",
                rise: "0.175",
                reward: "403033000",
                frame: "shoeicon17",
                parts: {
                    cloth_17_Shoe_f: 2
                },
                id: "17",
                top1: "1",
                top2: "2",
                mid1: "5",
                mid2: "8",
                base: "666.84104423579",
                attr1: "3334.2052211789",
                attr2: "3334.2052211789",
                attr3: "666.84104423579",
                attr4: "666.84104423579",
                attr5: "1667.1026105895",
                attr6: "666.84104423579",
                attr7: "666.84104423579",
                attr8: "1667.1026105895",
                attr9: "666.84104423579",
                attr10: "666.84104423579",
                attr11: "666.84104423579",
                attr12: "666.84104423579",
                per: "0"
            }, {
                name: "shoe 18",
                price: "168448000000",
                income: "1418000",
                coinround: "3447000",
                time: "2.43088857545839",
                rise: "0.175",
                reward: "1249000000",
                frame: "shoeicon18",
                parts: {
                    cloth_18_Shoe_f: 2
                },
                id: "18",
                top1: "7",
                top2: "9",
                mid1: "5",
                mid2: "10",
                base: "792.06720087115",
                attr1: "792.06720087115",
                attr2: "792.06720087115",
                attr3: "792.06720087115",
                attr4: "792.06720087115",
                attr5: "1980.1680021779",
                attr6: "792.06720087115",
                attr7: "3960.3360043558",
                attr8: "792.06720087115",
                attr9: "3960.3360043558",
                attr10: "1980.1680021779",
                attr11: "792.06720087115",
                attr12: "792.06720087115",
                per: "0"
            }, {
                name: "shoe 19",
                price: "539033600000",
                income: "2984000",
                coinround: "6871000",
                time: "2.30261394101877",
                rise: "0.175",
                reward: "3873000000",
                frame: "shoeicon19",
                parts: {
                    cloth_19_Shoe_f: 2
                },
                id: "19",
                top1: "4",
                top2: "11",
                mid1: "2",
                mid2: "8",
                base: "937.47728100182",
                attr1: "937.47728100182",
                attr2: "2343.6932025046",
                attr3: "937.47728100182",
                attr4: "4687.3864050091",
                attr5: "937.47728100182",
                attr6: "937.47728100182",
                attr7: "937.47728100182",
                attr8: "2343.6932025046",
                attr9: "937.47728100182",
                attr10: "937.47728100182",
                attr11: "4687.3864050091",
                attr12: "937.47728100182",
                per: "0"
            }, {
                name: "shoe 20",
                price: "1724907000000",
                income: "6288000",
                coinround: "13772000",
                time: "2.19020356234097",
                rise: "0.175",
                reward: "12006000000",
                frame: "shoeicon20",
                parts: {
                    cloth_20_Shoe_f: 2
                },
                id: "20",
                top1: "9",
                top2: "10",
                mid1: "3",
                mid2: "6",
                base: "1106.0988731521",
                attr1: "1106.0988731521",
                attr2: "1106.0988731521",
                attr3: "2765.2471828802",
                attr4: "1106.0988731521",
                attr5: "1106.0988731521",
                attr6: "2765.2471828802",
                attr7: "1106.0988731521",
                attr8: "1106.0988731521",
                attr9: "5530.4943657605",
                attr10: "5530.4943657605",
                attr11: "1106.0988731521",
                attr12: "1106.0988731521",
                per: "0"
            }, {
                name: "shoe 21",
                price: "5519000000000",
                income: "13238000",
                coinround: "27536000",
                time: "2.08007251850733",
                rise: "0.175",
                reward: "39480000000",
                frame: "shoeicon21",
                parts: {
                    cloth_21_Shoe_f: 2
                },
                id: "21",
                top1: "6",
                top2: "12",
                mid1: "1",
                mid2: "2",
                base: "1270.8917266619",
                attr1: "3177.2293166547",
                attr2: "3177.2293166547",
                attr3: "1270.8917266619",
                attr4: "1270.8917266619",
                attr5: "1270.8917266619",
                attr6: "6354.4586333094",
                attr7: "1270.8917266619",
                attr8: "1270.8917266619",
                attr9: "1270.8917266619",
                attr10: "1270.8917266619",
                attr11: "1270.8917266619",
                attr12: "6354.4586333094",
                per: "0"
            }, {
                name: "shoe 22",
                price: "17663000000000",
                income: "27870000",
                coinround: "55150000",
                time: "1.97883028345892",
                rise: "0.175",
                reward: "122388000000",
                frame: "shoeicon22",
                parts: {
                    cloth_22_Shoe_f: 2
                },
                id: "22",
                top1: "5",
                top2: "7",
                mid1: "9",
                mid2: "12",
                base: "1458.1076511279",
                attr1: "1458.1076511279",
                attr2: "1458.1076511279",
                attr3: "1458.1076511279",
                attr4: "1458.1076511279",
                attr5: "7290.5382556396",
                attr6: "1458.1076511279",
                attr7: "7290.5382556396",
                attr8: "1458.1076511279",
                attr9: "3645.2691278198",
                attr10: "1458.1076511279",
                attr11: "1458.1076511279",
                attr12: "3645.2691278198",
                per: "0"
            }, {
                name: "shoe 23",
                price: "56773000000000",
                income: "58666000",
                coinround: "110300000",
                time: "1.88013500153411",
                rise: "0.175",
                reward: "318207000000",
                frame: "shoeicon23",
                parts: {
                    cloth_23_Shoe_f: 2
                },
                id: "23",
                top1: "8",
                top2: "12",
                mid1: "2",
                mid2: "4",
                base: "1670.6616457745",
                attr1: "1670.6616457745",
                attr2: "4176.6541144364",
                attr3: "1670.6616457745",
                attr4: "4176.6541144364",
                attr5: "1670.6616457745",
                attr6: "1670.6616457745",
                attr7: "1670.6616457745",
                attr8: "8353.3082288727",
                attr9: "1670.6616457745",
                attr10: "1670.6616457745",
                attr11: "1670.6616457745",
                attr12: "8353.3082288727",
                per: "0"
            }, {
                name: "shoe 24",
                price: "170319000000000",
                income: "123523000",
                coinround: "219871000",
                time: "1.7800004857395",
                rise: "0.175",
                reward: "1018000000000",
                frame: "shoeicon24",
                parts: {
                    cloth_24_Shoe_f: 2
                },
                id: "24",
                top1: "4",
                top2: "8",
                mid1: "2",
                mid2: "10",
                base: "1911.8476597252",
                attr1: "1911.8476597252",
                attr2: "4779.6191493131",
                attr3: "1911.8476597252",
                attr4: "9559.2382986262",
                attr5: "1911.8476597252",
                attr6: "1911.8476597252",
                attr7: "1911.8476597252",
                attr8: "9559.2382986262",
                attr9: "1911.8476597252",
                attr10: "4779.6191493131",
                attr11: "1911.8476597252",
                attr12: "1911.8476597252",
                per: "0"
            }, {
                name: "shoe 25",
                price: "545020000000000",
                income: "260015000",
                coinround: "439742000",
                time: "1.69121781435686",
                rise: "0.175",
                reward: "3360000000000",
                frame: "shoeicon25",
                parts: {
                    cloth_25_Shoe_f: 2
                },
                id: "25",
                top1: "8",
                top2: "11",
                mid1: "1",
                mid2: "5",
                base: "2185.3878554895",
                attr1: "5463.4696387238",
                attr2: "2185.3878554895",
                attr3: "2185.3878554895",
                attr4: "2185.3878554895",
                attr5: "5463.4696387238",
                attr6: "2185.3878554895",
                attr7: "2185.3878554895",
                attr8: "10926.939277448",
                attr9: "2185.3878554895",
                attr10: "2185.3878554895",
                attr11: "10926.939277448",
                attr12: "2185.3878554895",
                per: "0"
            }, {
                name: "shoe 26",
                price: "1744000000000000",
                income: "547500000",
                coinround: "881500000",
                time: "1.61004566210046",
                rise: "0.175",
                reward: "11425000000000",
                frame: "shoeicon26",
                parts: {
                    cloth_26_Shoe_f: 2
                },
                id: "26",
                top1: "4",
                top2: "9",
                mid1: "1",
                mid2: "6",
                base: "2495.4882767031",
                attr1: "6238.7206917579",
                attr2: "2495.4882767031",
                attr3: "2495.4882767031",
                attr4: "12477.441383516",
                attr5: "2495.4882767031",
                attr6: "6238.7206917579",
                attr7: "2495.4882767031",
                attr8: "2495.4882767031",
                attr9: "12477.441383516",
                attr10: "2846.9017526746",
                attr11: "2846.9017526746",
                attr12: "2495.4882767031",
                per: "0"
            }, {
                name: "shoe 27",
                price: "5581000000000000",
                income: "1153000000",
                coinround: "1764000000",
                time: "1.52992194275802",
                rise: "0.175",
                reward: "38845000000000",
                frame: "shoeicon27",
                parts: {
                    cloth_27_Shoe_f: 2
                },
                id: "27",
                top1: "1",
                top2: "8",
                mid1: "5",
                mid2: "12",
                base: "2846.9017526746",
                attr1: "14234.508763373",
                attr2: "2846.9017526746",
                attr3: "2846.9017526746",
                attr4: "2846.9017526746",
                attr5: "7117.2543816864",
                attr6: "2846.9017526746",
                attr7: "2846.9017526746",
                attr8: "14234.508763373",
                attr9: "2846.9017526746",
                attr10: "2846.9017526746",
                attr11: "2846.9017526746",
                attr12: "7117.2543816864",
                per: "0"
            }, {
                name: "shoe 28",
                price: "17859000000000000",
                income: "2427000000",
                coinround: "3518000000",
                time: "1.44952616398846",
                rise: "0.175",
                reward: "89641000000000",
                frame: "shoeicon28",
                parts: {
                    cloth_28_Shoe_f: 2
                },
                id: "28",
                top1: "3",
                top2: "12",
                mid1: "4",
                mid2: "6",
                base: "3244.9989805222",
                attr1: "3244.9989805222",
                attr2: "3244.9989805222",
                attr3: "16224.994902611",
                attr4: "8112.4974513056",
                attr5: "3244.9989805222",
                attr6: "8112.4974513056",
                attr7: "3244.9989805222",
                attr8: "3244.9989805222",
                attr9: "3244.9989805222",
                attr10: "3244.9989805222",
                attr11: "3244.9989805222",
                attr12: "16224.994902611",
                per: "0"
            }, {
                name: "shoe 29",
                price: "57149000000000000",
                income: "5108000000",
                coinround: "7050000000",
                time: "1.38018794048551",
                rise: "0.175",
                reward: "286853000000000",
                frame: "shoeicon29",
                parts: {
                    cloth_29_Shoe_f: 2
                },
                id: "29",
                top1: "6",
                top2: "12",
                mid1: "3",
                mid2: "7",
                base: "3695.8488479901",
                attr1: "3695.8488479901",
                attr2: "3695.8488479901",
                attr3: "9239.6221199754",
                attr4: "3695.8488479901",
                attr5: "3695.8488479901",
                attr6: "18479.244239951",
                attr7: "9239.6221199754",
                attr8: "3695.8488479901",
                attr9: "3695.8488479901",
                attr10: "3695.8488479901",
                attr11: "3695.8488479901",
                attr12: "18479.244239951",
                per: "0"
            }, {
                name: "shoe 30",
                price: "182878000000000000",
                income: "10754000000",
                coinround: "14088000000",
                time: "1.3100241770504",
                rise: "0.175",
                reward: "717312000000000",
                frame: "shoeicon30",
                parts: {
                    cloth_30_Shoe_f: 2
                },
                id: "30",
                top1: "10",
                top2: "12",
                mid1: "1",
                mid2: "5",
                base: "4206.3091982289",
                attr1: "10515.772995572",
                attr2: "4206.3091982289",
                attr3: "4206.3091982289",
                attr4: "4206.3091982289",
                attr5: "10515.772995572",
                attr6: "4206.3091982289",
                attr7: "4206.3091982289",
                attr8: "4206.3091982289",
                attr9: "4206.3091982289",
                attr10: "21031.545991144",
                attr11: "4206.3091982289",
                attr12: "21031.545991144",
                per: "0"
            }]
        };
        a.default = r, cc._RF.pop()
    }, {}],
    DataStoreManager: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "5428f/N3vpHdZ9yY+fEtjO0", "DataStoreManager"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("../../framework/platform/PlatformManager"),
            i = t("../../datas/configs/AppConfig"),
            o = function() {
                function t() {}
                return t.getInstance = function() {
                    return this._instance || (this._instance = new t), this._instance
                }, t.prototype.save = function(t) {
                    var e, a = {},
                        o = App.PlayerController.exportData();
                    a[o.key] = o.value, a[(o = App.MergeController.exportData()).key] = o.value, e = o.value.max, a[(o = App.DressController.exportData()).key] = o.value, a[(o = App.BagController.exportData()).key] = o.value, a.sortid = e, a.update_time = Math.floor((new Date).getTime() / 1e3), a.version = i.default.version, r.default.getInstance().save(a, t)
                }, t.prototype.getInitData = function(t) {
                    var e = r.default.getInstance().getInitData(t);
                    return e || null
                }, t
            }();
        a.default = o, cc._RF.pop()
    }, {
        "../../datas/configs/AppConfig": "AppConfig",
        "../../framework/platform/PlatformManager": "PlatformManager"
    }],
    DrawConfig: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "c7019C/gTVHc5+CLiYpfy9E", "DrawConfig"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.DrawConfig = [{
            type: "hair",
            id: "101",
            weight: "25",
            piece: "50",
            level: "5"
        }, {
            type: "hair",
            id: "102",
            weight: "20",
            piece: "0",
            level: "8"
        }, {
            type: "hair",
            id: "103",
            weight: "15",
            piece: "0",
            level: "14"
        }, {
            type: "hair",
            id: "104",
            weight: "10",
            piece: "0",
            level: "14"
        }, {
            type: "hair",
            id: "201",
            weight: "1",
            piece: "300",
            level: "20"
        }, {
            type: "cloth",
            id: "101",
            weight: "25",
            piece: "50",
            level: "5"
        }, {
            type: "cloth",
            id: "102",
            weight: "20",
            piece: "0",
            level: "8"
        }, {
            type: "cloth",
            id: "103",
            weight: "15",
            piece: "0",
            level: "14"
        }, {
            type: "cloth",
            id: "104",
            weight: "10",
            piece: "0",
            level: "14"
        }, {
            type: "cloth",
            id: "201",
            weight: "1",
            piece: "300",
            level: "20"
        }, {
            type: "trous",
            id: "101",
            weight: "25",
            piece: "50",
            level: "5"
        }, {
            type: "trous",
            id: "102",
            weight: "20",
            piece: "0",
            level: "8"
        }, {
            type: "trous",
            id: "103",
            weight: "15",
            piece: "0",
            level: "14"
        }, {
            type: "trous",
            id: "104",
            weight: "10",
            piece: "0",
            level: "14"
        }, {
            type: "trous",
            id: "201",
            weight: "1",
            piece: "300",
            level: "20"
        }, {
            type: "shoe",
            id: "101",
            weight: "25",
            piece: "50",
            level: "5"
        }, {
            type: "shoe",
            id: "102",
            weight: "20",
            piece: "0",
            level: "8"
        }, {
            type: "shoe",
            id: "103",
            weight: "15",
            piece: "0",
            level: "14"
        }, {
            type: "shoe",
            id: "104",
            weight: "10",
            piece: "0",
            level: "14"
        }, {
            type: "shoe",
            id: "201",
            weight: "1",
            piece: "300",
            level: "20"
        }, {
            type: "hat",
            id: "101",
            weight: "20",
            piece: "50",
            level: "5"
        }, {
            type: "hat",
            id: "102",
            weight: "20",
            piece: "50",
            level: "5"
        }, {
            type: "hat",
            id: "103",
            weight: "20",
            piece: "50",
            level: "5"
        }, {
            type: "hat",
            id: "201",
            weight: "5",
            piece: "200",
            level: "10"
        }, {
            type: "hat",
            id: "202",
            weight: "5",
            piece: "200",
            level: "10"
        }, {
            type: "hat",
            id: "203",
            weight: "5",
            piece: "0",
            level: "15"
        }, {
            type: "hat",
            id: "204",
            weight: "3",
            piece: "300",
            level: "20"
        }, {
            type: "hat",
            id: "205",
            weight: "3",
            piece: "300",
            level: "20"
        }, {
            type: "face",
            id: "101",
            weight: "20",
            piece: "50",
            level: "5"
        }, {
            type: "face",
            id: "102",
            weight: "20",
            piece: "50",
            level: "5"
        }, {
            type: "face",
            id: "201",
            weight: "3",
            piece: "200",
            level: "10"
        }, {
            type: "face",
            id: "202",
            weight: "3",
            piece: "200",
            level: "10"
        }, {
            type: "face",
            id: "203",
            weight: "3",
            piece: "200",
            level: "15"
        }, {
            type: "gold",
            id: "0.5",
            weight: "200",
            piece: "0",
            level: "5"
        }, {
            type: "gold",
            id: "1",
            weight: "150",
            piece: "0",
            level: "5"
        }, {
            type: "gold",
            id: "1.5",
            weight: "100",
            piece: "0",
            level: "5"
        }, {
            type: "piece",
            id: "1",
            weight: "400",
            piece: "0",
            level: "5"
        }, {
            type: "piece",
            id: "2",
            weight: "300",
            piece: "0",
            level: "5"
        }, {
            type: "piece",
            id: "3",
            weight: "200",
            piece: "0",
            level: "5"
        }, {
            type: "vit",
            id: "1",
            weight: "100",
            piece: "0",
            level: "5"
        }, {
            type: "vit",
            id: "2",
            weight: "50",
            piece: "0",
            level: "5"
        }, {
            type: "vit",
            id: "3",
            weight: "25",
            piece: "0",
            level: "5"
        }], cc._RF.pop()
    }, {}],
    DressController: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "4eb1cceNYNLiqIMxdjjqxjC", "DressController"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("./datas/DressData"),
            i = t("../../datas/const/CharacterConst"),
            o = t("../../datas/const/EventConst"),
            n = t("../common/DataStoreManager"),
            s = function() {
                function t() {}
                return t.getInstance = function() {
                    return this._instance || (this._instance = new t), this._instance
                }, t.prototype.init = function() {
                    this._dressData = new r.default(this.importData())
                }, t.prototype.onDress = function(t) {
                    this._dressData.parts[t.type] = t.id, App.EventManager.emitEvent(o.default.DRESS_SET_PART, t), this.save()
                }, t.prototype.isDressed = function(t) {
                    return this._dressData.parts[t.type] == t.id
                }, t.prototype.getParts = function() {
                    return this._dressData.parts
                }, t.prototype.getPartID = function(t) {
                    return this._dressData.parts[t]
                }, t.prototype.isUnlockPK = function() {
                    return !!this._dressData.parts[i.CharacterConst.Trous]
                }, t.prototype.save = function() {
                    n.default.getInstance().save()
                }, t.prototype.exportData = function() {
                    return this._dressData.exportData()
                }, t.prototype.importData = function() {
                    return n.default.getInstance().getInitData(r.default.SAVE_KEY)
                }, t
            }();
        a.default = s, cc._RF.pop()
    }, {
        "../../datas/const/CharacterConst": "CharacterConst",
        "../../datas/const/EventConst": "EventConst",
        "../common/DataStoreManager": "DataStoreManager",
        "./datas/DressData": "DressData"
    }],
    DressData: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "1a46attfttI5ZANneVlOHBL", "DressData"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = function() {
            function t(t) {
                if (this.parts = {}, t)
                    for (var e in t) this[e] = t[e]
            }
            return t.prototype.exportData = function() {
                return {
                    key: t.SAVE_KEY,
                    value: {
                        parts: this.parts
                    }
                }
            }, t.SAVE_KEY = "dress", t
        }();
        a.default = r, cc._RF.pop()
    }, {}],
    EventConst: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "20eec9eOWNJDJDQopT+ANPa", "EventConst"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return t.UI_COIN = "ui_update_coin", t.UI_DIAMOND = "ui_update_diamond", t.UI_VIT = "ui_update_vit", t.UI_RANK = "ui_update_rank", t.UI_QUEST_UNREAD = "ui_quest_unread", t.UI_BAG_ITEM_SELECT = "ui_bag_item_select", t.UI_BAG_MENUITEM_SELECT = "ui_bag_menuitem_select", t.UI_BAG_NEW = "ui_bag_new", t.UI_SHOW_MERGE_PANEL = "ui_show_merge_paenl", t.UI_SHOW_SHOP_PANEL = "ui_show_shop_panel", t.UI_HIDE_SHOP_PANEL = "ui_hide_shop_panel", t.UI_MERGE_MENUITEM_SELECT = "ui_merge_menuitem_select", t.UI_VISIT_MODE = "ui_visit_mode", t.TUTORIAL_SHOW_MERGE_PANEL = "tutorial_show_mergepanel", t.TUTORIAL_HIDE_MERGE_PANEL = "tutorial_hide_mergepanel", t.TUTORIAL_SHOW_BAG_LIST = "tutorial_show_bagpanel", t.TUTORIAL_COMPLETE = "tutorial_complete", t.DRESS_SET_PART = "dress_set_part", t.DRESS_VISITOR = "dress_visitor", t.MERGE_SUCCESS = "merge_success", t.MERGE_COST = "merge_cost", t.MERGE_DRAG_CANCEL = "merge_drag_cancel", t.MERGE_UPDATE_BOARD = "merge_update_board", t.REWARD_GIFT = "reward_gift", t.OPEN_GIFT = "open_gift", t.PLATFORM_INIT_COMPLETE = "platform_init_complete", t
        }();
        a.default = r, cc._RF.pop()
    }, {}],
    EventManager: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "85af8pykwZJ86iqgTQqclbT", "EventManager"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = function(t) {
            function e() {
                return t.call(this) || this
            }
            return __extends(e, t), e.getInstance = function() {
                return this._instance || (this._instance = new e), this._instance
            }, e.prototype.addEventListener = function(t, e, a, r) {
                this.on.apply(this, arguments)
            }, e.prototype.addOnceEventListener = function(t, e, a) {
                this.once.apply(this, arguments)
            }, e.prototype.offEventListener = function(t, e, a) {
                this.off.apply(this, arguments)
            }, e.prototype.emitEvent = function(t, e, a, r, i, o) {
                this.emit.apply(this, arguments)
            }, e.prototype.hasAddEventListener = function(t) {
                return this.hasEventListener(t)
            }, e
        }(cc.EventTarget);
        a.default = r, cc._RF.pop()
    }, {}],
    FourthreeNine: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "5c29afQZ/JDdYHaVtETnmLE", "FourthreeNine"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e._lastLevel = 0, e
            }
            return __extends(e, t), e.prototype.login = function(t) {
                t && t()
            }, e.prototype.onLoginComplete = function() {}, e.prototype.getUserInfo = function() {
                return this._userInfo
            }, e.prototype.share = function(t) {
                window.h5api.share()
            }, e.prototype.shareScreen = function(t) {}, e.prototype.initGameScene = function() {}, e.prototype.getLastLevel = function() {
                return this._lastLevel
            }, e.prototype.save = function(e, a) {
                t.prototype.save.call(this, e)
            }, e.prototype.clearLocalData = function() {
                this._cloudData = null, t.prototype.clearLocalData.call(this)
            }, e.prototype.showVideo = function(t, e, a) {
                    if (window.ArcadeSave && typeof window.ArcadeSave.runAdBreak === "function") {
                        window.ArcadeSave.runAdBreak(function() {
                            e && e();
                        }, a);
                    } else if (typeof GVAdBreak === "function") {
                        GVAdBreak(function() {
                            e && e();
                        });
                    } else {
                        e && e();
                    }
            }, e.prototype.getOfflineTime = function() {
                return t.prototype.getOfflineTime.call(this)
            }, e.prototype.getInitData = function(t) {
                return this._localData && this._localData[t] ? this._localData[t] : this._cloudData && this._cloudData[t] ? this._cloudData[t] : null
            }, e.prototype.getRanks = function(t, e, a) {
                this.onCloudApi(t, e, a)
            }, e.prototype.getUserRank = function(t) {
                this.onCloudApi("getUserRank", {}, t)
            }, e.prototype.addLike = function(t, e) {
                this.onCloudApi("addLike", {
                    to_id: t,
                    from_user: e
                })
            }, e.prototype.addVisit = function(t, e) {
                this.onCloudApi("addVisit", {
                    to_id: t,
                    from_user: e
                })
            }, e.prototype.getLikes = function(t) {
                this.onCloudApi("getLikes", {}, t)
            }, e.prototype.getVisits = function(t) {
                this.onCloudApi("getVisits", {}, t)
            }, e.prototype.addCollect = function(t) {
                this.onCloudApi("addCollect", t)
            }, e.prototype.getCollects = function(t, e) {
                this.onCloudApi("getCollects", t, e)
            }, e.prototype.deleteCollect = function(t) {
                this.onCloudApi("delCollect", {
                    id: t
                })
            }, e.prototype.getVisitor = function(t, e) {
                this.onCloudApi("getVisitor", t, e)
            }, e.prototype.traceLog = function() {}, e.prototype.getRandomVisit = function(t, e) {
                var a = App.MergeController.LevelMax,
                    r = 100 * Math.random(),
                    i = a;
                i = r <= 10 ? a - 1 : r > 10 && r <= 90 ? a + Math.floor(4 * Math.random()) : Math.floor(Math.random() * (30 - a - 5)) + a, i = Math.min(i, 30), i = Math.max(1, i), cc.log("level = ", r, i), this.onCloudApi("getRndVisit", {
                    level: Math.floor(i)
                }, t, e)
            }, e.prototype.onCloudApi = function(t, e, a, r) {}, e
        }(t("./H5").default);
        a.default = r, cc._RF.pop()
    }, {
        "./H5": "H5"
    }],
    GameConfig: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "5253bpEbcJJqahqnCzTftVz", "GameConfig"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.UnlockConfig = {
            hair: {
                level: 7,
                cost: 2
            },
            cloth: {
                level: 1,
                cost: 0
            },
            trous: {
                level: 5,
                cost: 1
            },
            shoe: {
                level: 10,
                cost: 3
            }
        }, a.RankConfig = [{
            max: 0,
            reward: "5",
            earning: 1,
            name: "Màn ra mắt"
        }, {
            max: 400,
            reward: "622",
            earning: 1.05,
            name: "Tương đối uy tín"
        }, {
            max: 2500,
            reward: "227091",
            earning: 1.1,
            name: "Dẫn đầu thời trang"
        }, {
            max: 8e3,
            reward: "42416667",
            earning: 1.15,
            name: "Nhà tài trợ"
        }, {
            max: 2e4,
            reward: "4782080000",
            earning: 1.2,
            name: "Xu hướng ở Paris"
        }, {
            max: 35e3,
            reward: "47820800000",
            earning: 1.25,
            name: "Sang trọng tinh tế"
        }, {
            max: 999999,
            reward: "0",
            earning: 0,
            name: "Tuyệt đỉnh vô song"
        }], a.QuestsConfig = {
            PK: [{
                key: "Lively",
                score: "20",
                coins: "500"
            }, {
                key: "Casual",
                score: "60",
                coins: "1000"
            }, {
                key: "Pure",
                score: "240",
                coins: "1500"
            }, {
                key: "Sweet",
                score: "400",
                coins: "2000"
            }, {
                key: "Warm",
                score: "600",
                coins: "5000"
            }, {
                key: "Sexy",
                score: "800",
                coins: "15000"
            }, {
                key: "Elegant",
                score: "1000",
                coins: "136000"
            }, {
                key: "Lively",
                score: "1500",
                coins: "228000"
            }, {
                key: "Casual",
                score: "1500",
                coins: "4178000"
            }, {
                key: "Simple",
                score: "3000",
                coins: "41939000"
            }, {
                key: "Pure",
                score: "4000",
                coins: "403033000"
            }, {
                key: "West",
                score: "6000",
                coins: "403033000"
            }, {
                key: "Gorgeous",
                score: "3000",
                coins: "3873000000"
            }, {
                key: "East",
                score: "9000",
                coins: "39480000000"
            }, {
                key: "Elegant",
                score: "10000",
                coins: "78680000000"
            }, {
                key: "Casual",
                score: "10000",
                coins: "122388000000"
            }, {
                key: "Lively",
                score: "10000",
                coins: "122388000000"
            }, {
                key: "Mature",
                score: "15000",
                coins: "122388000000"
            }, {
                key: "Warm",
                score: "15000",
                coins: "318207000000"
            }, {
                key: "Sexy",
                score: "20000",
                coins: "1018000000000"
            }, {
                key: "Simple",
                score: "22000",
                coins: "3360000000000"
            }, {
                key: "Sweet",
                score: "25000",
                coins: "11425000000000"
            }, {
                key: "Gorgeous",
                score: "30000",
                coins: "38845000000000"
            }, {
                key: "East",
                score: "30000",
                coins: "89641000000000"
            }, {
                key: "Elegant",
                score: "30000",
                coins: "286853000000000"
            }, {
                key: "Pure",
                score: "40000",
                coins: "717312000000000"
            }, {
                key: "Casual",
                score: "20000",
                coins: "717312000000000"
            }, {
                key: "West",
                score: "40000",
                coins: "1744000000000000"
            }, {
                key: "Gorgeous",
                score: "70000",
                coins: "5581000000000000"
            }],
            merge: [{
                times: "10",
                coins: "1000"
            }, {
                times: "30",
                coins: "2000"
            }, {
                times: "60",
                coins: "5000"
            }, {
                times: "100",
                coins: "15000"
            }, {
                times: "150",
                coins: "44000"
            }, {
                times: "250",
                coins: "421000"
            }, {
                times: "350",
                coins: "1306000"
            }, {
                times: "500",
                coins: "4178000"
            }, {
                times: "700",
                coins: "13786000"
            }, {
                times: "1000",
                coins: "41939000"
            }, {
                times: "1500",
                coins: "130010000"
            }, {
                times: "2000",
                coins: "12006000000"
            }, {
                times: "3000",
                coins: "122388000000"
            }, {
                times: "5000",
                coins: "1018000000000"
            }, {
                times: "10000",
                coins: "38845000000000"
            }]
        }, cc._RF.pop()
    }, {}],
    GameConst: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "a6a4fFuHxlBFaGLYJOKR08o", "GameConst"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return t.max_attr_kind = 12, t.max_buyable_leveldiff = 4, t.max_vit = 5, t.max_draw = 5, t.best_styles = ["Freestyle", "Elegant", "Lively", "Pure", "Sexy", "Mature", "Sweet", "Casual", "West", "East", "Warm", "Simple", "Gorgeous"], t.styles_map = {
                Freestyle: 0,
                Elegant: 1,
                Lively: 2,
                Pure: 3,
                Sexy: 4,
                Mature: 5,
                Sweet: 6,
                Casual: 7,
                West: 8,
                East: 9,
                Warm: 10,
                Simple: 11,
                Gorgeous: 12
            }, t.max_score = 96147, t.max_merge_level = 30, t
        }();
        a.default = r, cc._RF.pop()
    }, {}],
    GameScene: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "fcbf1RqJrhJTqOnES4uyQrf", "GameScene"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("./framework/view/ViewBasic")),
            n = t("./datas/const/PopupConst"),
            s = t("./framework/platform/PlatformManager"),
            c = t("./modules/ui/VisitModeUI"),
            p = t("./framework/utils/UIHelper"),
            l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    App.PopupManager.init(this.node.getChildByName("PopLayer")), this.initLatePrefab();
                    var t = cc.winSize.height / cc.winSize.width;
                    this.node.getChildByName("bagModule").y = cc.winSize.height / 2, t > 2 && (this.getChildByPath(this.node, "bagModule.menuPanel.rightPanel").y -= 100, this.getChildByPath(this.node, "bagModule.menuPanel.leftPanel").y -= 100), this.getChildByPath(this.node, "bagModule.menuPanel.rightPanelBg").height = cc.winSize.height, s.default.getInstance().initGameScene(), c.default.initLocalData(), p.default.adapterLowResolutionScale(this.node.getChildByName("dressModule"))
                }, e.prototype.start = function() {
                    var t = this.getChildByPath(this.node, "bg.chuanglianNode");
                    t.opacity = 0, setTimeout(function() {
                        cc.loader.loadRes("prefabs/components/chuanglian", cc.Prefab, function(e, a) {
                            if (t && t.parent) {
                                var r = cc.instantiate(a);
                                t.addChild(r), cc.tween(t).to(1, {
                                    opacity: 255
                                }).start()
                            }
                        })
                    }, 4e3), App.AudioManager.playBgm("bgm"), s.default.getInstance().showInterstitialAd()
                }, e.prototype.initLatePrefab = function() {
                    var t = [n.PopupConst.UNLOCK.path, n.PopupConst.SIGN.path, n.PopupConst.FREE_COINS.path, n.PopupConst.OFFLINE_EARN.path, n.PopupConst.QUESTS.path, n.PopupConst.TEST.path, n.PopupConst.MYSTERY.path, n.PopupConst.PK.path],
                        e = 0,
                        a = function() {
                            if (!(e >= t.length)) {
                                var r = t[e];
                                cc.loader.loadRes(r, function(t, r) {
                                    e += 1, a()
                                })
                            }
                        };
                    a(), App.PlayerController.isTutorialComplete && s.default.getInstance().getOfflineTime() > 300 && App.PopupManager.show(n.PopupConst.OFFLINE_EARN)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = l, cc._RF.pop()
    }, {
        "./datas/const/PopupConst": "PopupConst",
        "./framework/platform/PlatformManager": "PlatformManager",
        "./framework/utils/UIHelper": "UIHelper",
        "./framework/view/ViewBasic": "ViewBasic",
        "./modules/ui/VisitModeUI": "VisitModeUI"
    }],
    GiftUI: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "00d30BzplRAiak9iR0Kr8CE", "GiftUI"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/ViewBasic")),
            n = t("../../framework/utils/UIHelper"),
            s = t("../common/UITips"),
            c = t("../../framework/platform/PlatformManager"),
            p = t("../../framework/utils/NumberHelper"),
            l = t("../../datas/const/PopupConst"),
            d = t("../common/LogManager"),
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._count = -1, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this._giftNode = this.node.getChildByName("giftNode"), this._giftNode.x = cc.winSize.width + 200, n.default.adapterScreen(this._giftNode), this._giftAnimation = this.node.getChildByName("giftAnimation"), this._giftAnimation.active = !1;
                    var t = this;
                    this._giftNode.on(cc.Node.EventType.TOUCH_START, function(e) {
                        var a = e.getTouches()[0].getLocation();
                        t._position = t._giftNode.parent.convertToNodeSpaceAR(a), t._giftNode.getChildByName("icon_video").active ? (t._giftNode.pauseAllActions(), App.PopupManager.show(l.PopupConst.TIPS, {
                            message: "Nhận một lúc 8 bộ trang phục tinh xảo, chỉ cần xem một đoạn quảng cáo ngắn, bạn có muốn nhận không?",
                            callback: function() {
                                d.default.getInstance().add({
                                    tag: 16
                                }), c.default.getInstance().showVideo({
                                    type: "30s",
                                    id: 16
                                }, t.sucRewardVideoGift.bind(t), t.failRewardVideoGift.bind(t))
                            },
                            hide: function() {
                                t._giftNode.resumeAllActions()
                            }
                        }), d.default.getInstance().add({
                            tag: 15
                        })) : (t.resetGift(), t.rewardGift(), t._isMoving = !1)
                    }), this.setTouchEnabled(!1), this.bindEvents(["NavigateGift"])
                }, e.prototype.onEvents = function(t, e) {
                    switch (t) {
                        case "NavigateGift":
                            this.navigateGift(4)
                    }
                }, e.prototype.start = function() {
                    if (App.PlayerController.GiftCount > 0) {
                        var t = this,
                            e = cc.sequence(cc.delayTime(12), cc.callFunc(function() {
                                if (App.PlayerController.GiftCount <= 0) t.node.stopAllActions();
                                else {
                                    var e = App.MergeController.computeGiftBox();
                                    if (App.MergeController.LevelMax >= 3 && !t._isMoving && e) {
                                        if (-1 == t._count) {
                                            var a = App.PlayerController.CreatedTime,
                                                r = p.default.isFirstDay(a);
                                            t._count = r ? 1 : 5
                                        }
                                        t.showAnimations()
                                    }
                                }
                            }));
                        this.node.runAction(cc.repeatForever(e))
                    }
                }, e.prototype.showAnimations = function() {
                    this.resetGift();
                    var t = this;
                    this._isMoving = !0;
                    var e, a = 0 == this._count;
                    e = a ? cc.sequence(cc.moveTo(11, cc.v2(-cc.winSize.width / 2, this._giftNode.y)), cc.moveTo(11, cc.v2(cc.winSize.width / 2, this._giftNode.y)), cc.moveTo(11, cc.v2(-cc.winSize.width / 2 - 200, this._giftNode.y))) : cc.moveTo(11, cc.v2(-cc.winSize.width / 2 - 200, this._giftNode.y));
                    var r = cc.sequence(e, cc.callFunc(function() {
                        t._position = t._giftNode.position, t.resetGift(), t._giftNode.getChildByName("icon_video").active || t.rewardGift(), t._isMoving = !1
                    }));
                    this._giftNode.getChildByName("icon_video").active = a, this._giftNode.getChildByName("bg").active = !a, this._giftNode.runAction(r), this._count = this._count - 1, this._count < 0 && (this._count = 5)
                }, e.prototype.setTouchEnabled = function(t) {
                    this.node.getComponent(cc.Button).enabled = t
                }, e.prototype.resetGift = function() {
                    this._giftNode.stopAllActions(), this._giftNode.x = cc.winSize.width + 200
                }, e.prototype.rewardGift = function(t, e, a) {
                    var r;
                    if (a) r = a;
                    else if (!(r = App.MergeController.computeGiftBox())) return void s.default.show("Ba lô đầy rồi, đi thu dọn ba lô trước đã ~");
                    this.setTouchEnabled(!0);
                    var i = this,
                        o = this.getChildByPath(this.node.parent, "mergeModule.panel.panelMerge");
                    if (o) {
                        var n = o.getComponent("MergePanelUI").getGiftPosition(r),
                            c = cc.instantiate(this._giftAnimation);
                        c.active = !0, c.position = this._position, c.parent = this.node, e = e || 0;
                        var p = cc.sequence(cc.delayTime(e), cc.moveTo(.5, cc.v2(n.x, n.y)), cc.callFunc(function() {
                            c && c.parent && c.removeFromParent(), App.MergeController.rewardGiftBox(r), t || i.setTouchEnabled(!1)
                        }));
                        c.runAction(p)
                    }
                    App.PlayerController.useGift()
                }, e.prototype.sucRewardVideoGift = function(t) {
                    var e = this,
                        a = .1;
                    App.MergeController.computeGiftBoxGroup(t).forEach(function(t) {
                        t ? (e.rewardGift(!0, a, t), a += .1) : !0
                    }), this.setTouchEnabled(!1), this.resetGift(), this._isMoving = !1
                }, e.prototype.failRewardVideoGift = function() {
                    this.setTouchEnabled(!1), this.resetGift(), this._isMoving = !1
                }, e.prototype.navigateGift = function(t) {
                    var e = this,
                        a = this.node.parent.getChildByName("ui").getChildByName("top").getChildByName("btnNavigateGift").convertToWorldSpaceAR(cc.v2(0, 0));
                    a.x = a.x - cc.winSize.width / 2, a.y = a.y - cc.winSize.height / 2;
                    var r = .1;
                    App.MergeController.computeGiftBoxGroup(t).forEach(function(t) {
                        t ? (e.rewardNavigateGift(r, t, a), r += .1) : !0
                    })
                }, e.prototype.rewardNavigateGift = function(t, e, a) {
                    var r;
                    if (e) r = e;
                    else if (!(r = App.MergeController.computeGiftBox())) return void s.default.show("Ba lô đầy rồi, đi thu dọn ba lô trước đã ~");
                    var i = this.getChildByPath(this.node.parent, "mergeModule.panel.panelMerge");
                    if (i) {
                        var o = i.getComponent("MergePanelUI").getGiftPosition(r),
                            n = cc.instantiate(this._giftAnimation);
                        n.active = !0, n.position = a, n.parent = this.node, t = t || 0;
                        var c = cc.sequence(cc.delayTime(t), cc.moveTo(.5, cc.v2(o.x, o.y)), cc.callFunc(function() {
                            n && n.parent && n.removeFromParent(), App.MergeController.rewardGiftBox(r)
                        }));
                        n.runAction(c)
                    }
                }, e = __decorate([i], e)
            }(o.default);
        a.default = h, cc._RF.pop()
    }, {
        "../../datas/const/PopupConst": "PopupConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/utils/UIHelper": "UIHelper",
        "../../framework/view/ViewBasic": "ViewBasic",
        "../common/LogManager": "LogManager",
        "../common/UITips": "UITips"
    }],
    GoldDrop: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "5e640RHVNdBi5v2qnxDuAto", "GoldDrop"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = r.property,
            n = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.effFrame = null, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    for (var t = this, e = function() {
                            var a = new cc.Node("effectNode1");
                            a.addComponent(cc.Sprite).spriteFrame = t.effFrame, a.x = 1334 * Math.random() - 600, a.y = cc.winSize.height + 50, a.scale = Math.random() + .5, t.node.addChild(a);
                            var r = 5 * Math.random(),
                                i = cc.sequence(cc.delayTime(r), cc.spawn(cc.moveTo(2, a.x, -1e3), cc.repeat(cc.sequence(cc.scaleTo(.2, -1, 1), cc.scaleTo(.2, 1, 1)), 10)), cc.callFunc(function() {
                                    e(), a.removeFromParent(!0)
                                }, t));
                            a.runAction(i)
                        }, a = 0; a < 40; a++) e()
                }, __decorate([o(cc.SpriteFrame)], e.prototype, "effFrame", void 0), e = __decorate([i], e)
            }(cc.Component);
        a.default = n, cc._RF.pop()
    }, {}],
    H5: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "12fceIZ31pHDaRKqtbB5O81", "H5"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = "minigame-love-1",
            i = function() {
                function t() {
                    var t = cc.sys.localStorage.getItem(r);
                    t && "" != t || (t = null), "string" == typeof t && (t = JSON.parse(t)), this._localData = t
                }
                return t.prototype.login = function(t) {
                    t()
                }, t.prototype.share = function(t) {}, t.prototype.shareScreen = function(t) {}, t.prototype.save = function(t, e) {
                    this._localData = t, cc.sys.localStorage.setItem(r, JSON.stringify(this._localData))
                }, t.prototype.initAds = function() {}, t.prototype.showVideo = function(t, e, a) {
                    if (window.ArcadeSave && typeof window.ArcadeSave.runAdBreak === "function") {
                        window.ArcadeSave.runAdBreak(function() {
                            e && e();
                        }, a);
                    } else if (typeof GVAdBreak === "function") {
                        GVAdBreak(function() {
                            e && e();
                        });
                    } else {
                        e && e();
                    }
                }, t.prototype.showInterstitialAd = function() {}, t.prototype.hideInterstitialAd = function() {}, t.prototype.showBannerAd = function() {}, t.prototype.hideBannerAd = function() {}, t.prototype.getInitData = function(t) {
                    return this._localData ? this._localData[t] : null
                }, t.prototype.getUserInfo = function() {
                    return null
                }, t.prototype.getRanks = function(t, e, a) {}, t.prototype.initGameScene = function() {}, t.prototype.log = function(t) {}, t.prototype.getOfflineTime = function() {
                    if (this._offlineTime) return this._offlineTime;
                    var t = (new Date).getTime() / 1e3,
                        e = this._localData && this._localData.update_time || 0;
                    return e > 0 ? (this._offlineTime = t - e, this._offlineTime) : 0
                }, t.prototype.getLastUpdateTime = function() {
                    return this._localData && this._localData.update_time || 0
                }, t.prototype.clearLocalData = function() {
                    cc.sys.localStorage.removeItem(r), this._localData = null
                }, t
            }();
        a.default = i, cc._RF.pop()
    }, {}],
    I18nManager: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "5501fS2ikhIHq7oVUgarWfW", "I18nManager"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return __extends(e, t), e.prototype.init = function(t) {
                this._i18n = t
            }, e.prototype.get = function(t, e) {
                var a = this._i18n[t];
                return a ? (e && e.forEach(function(t) {
                    a = a.replace("#" + t[0] + "#", t[1])
                }), a) : t
            }, e
        }(t("./IManager").default);
        a.default = r, cc._RF.pop()
    }, {
        "./IManager": "IManager"
    }],
    I18n: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "659bbmujHZMoouzEqpePGTA", "I18n"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.i18n = {
            loading_tips: "Tài nguyên về tủ quần áo mở rộng",
            loading_gamedata_tips: "Khởi tạo dữ liệu nền tảng",
            loading_version: "Phiên bản: ",
            loading_btn_start: "Mở tủ quần áo",
            baseui_btnphoto: "Ảnh chụp",
            baseui_btnrank: "Xếp hạng",
            baseui_btnpk: "Đấu trường",
            baseui_btnmystery: "Chọn thẻ",
            baseui_btnquests: "Nhiệm vụ",
            baseui_visitsetting: "Thiết lập",
            baseui_visitor: "Khách thăm quan",
            baseui_recordvideo: "Ghi màn hình",
            base_navigate_gift: "Tương tác hòm",
            merge_unlock_title: "Đã mở khóa quần áo ở cấp #level# cao nhất",
            merge_unlock_tips: "Đã mở khóa 87%",
            merge_shop_level_limit: "Mở khóa ở Lv #level#",
            merge_shop_level_tips: "Cấp cao nhất có thể được mở khóa sau khi đạt đến cấp #level#~",
            merge_btn_unlock: "Xem QC để mở khóa",
            popup_quests_title: "Nhiệm vụ",
            popup_quests_sign_title: "Nhiệm vụ hàng ngày",
            popup_quests_sign_subtitle: "7 ngày đăng nhập",
            popup_quests_sign_subdesc: "Sang ngày mới\nmau bắt tay vào luyện tập nào",
            popup_quests_sign_btn_go: "Đi làm",
            popup_quests_sign_btn_tomo: "Ghé lại ngày mai",
            popup_quests_achievement_title: "Nhiệm vụ thành tích",
            popup_quests_achievement_bar_pk_title: "Đấu trường #style# Điểm: #score#",
            popup_quests_achievement_bar_merge_title: "Số lần sáng tác: #times#",
            popup_quests_achievement_btn_claim: "Nhận",
            popup_quests_merge_limit_tips: "Không đủ số lượng tổng hợp ~",
            popup_quests_pk_limit_tips: "Điểm vẫn chưa đạt chỉ tiêu, tiếp tục chăm chỉ ~",
            popup_sign_title: "Thưởng 7 ngày",
            popup_sign_day: "Ngày #day#",
            popup_sign_btn_claim: "Nhận Free",
            popup_sign_btn_tomoro: "Ghé lại ngày mai",
            popup_offline_title: "Thu nhập Ngoại tuyến",
            popup_offline_btn_claim: "Nhận luôn",
            popup_offline_btn_claim_double: "Nhận x2",
            popup_unlock_title: "Mở khóa cấp độ #level# mới",
            popup_unlock_btn_claim: "Chia sẻ",
            popup_freecoin_title: "Cung cấp tiền vàng",
            popup_freecoin_btn_video: "Thưởng x2",
            popup_freecoin_btn_video_special: "Nhận x10",
            popup_mystery_tab_preview: "Danh sách phần thưởng",
            popup_mystery_tab_exchange: "Đổi trong thời gian giới hạn",
            popup_mystery_invite_tips: "Mời bạn bè vào game để nhận những trang phục hiếm đã ra mắt ~",
            popup_mystery_btn_video: "Chọn 1 lần",
            popup_mystery_video_tips: "Thời gian còn lại hôm nay: #cur#/#max#",
            popup_mystery_video_tips_over: "Quá mệt mỏi cho ngày hôm nay",
            popup_mystery_video_tips_cdtime: "Đang hồi thời gian~",
            popup_mystery_btn_invite: "Mời bạn bè",
            popup_mystery_preview_title: "Danh sách phần thưởng",
            popup_mystery_exchange_title: "Đổi trong thời gian giới hạn",
            popup_mystery_btn_exchange: "Trao đổi",
            popup_mystery_state_had_exchange: "Đã nhận",
            popup_mystery_exchange_limit: "Không đủ kim cương!\nHãy làm nhiệm vụ hàng ngày để thu thập và đổi thưởng nhé!",
            popup_mystery_exchange_success: "Đổi thành công",
            popup_mystery_exchange_tips: "Chúc mừng bạn đã đổi thành công\nHãy vào tủ để bổ sung nhé ~",
            popup_mystery_exchange_btn_share: "Chia sẻ",
            popup_rank_tab_friend: "Danh sách bạn bè",
            popup_rank_tab_global: "Danh sách PK",
            popup_rank_tips_friend: "Danh sách quần áo của bạn bè ~",
            popup_rank_tips_all: "Bạn có thể kiểm tra phong cách ăn mặc của họ\ntrong danh sách PK và ủng hộ cô ấy ~",
            popup_rank_btn_claim: "Ghé thăm",
            popup_test_result: ": #per#% người thích bạn",
            popup_test_btn_share: "Nói với cô ấy",
            popup_pk_addvit_tips: "Nếu không đủ thể lực, hãy đăng nhập để nhận thêm ~",
            popup_pk_title: "Điểm cao nhất: #score#",
            popup_pk_scoreitem: "+ Điểm: #score#",
            popup_pkhelp_tips: "Bạn có muốn kiểm tra những bộ trang phục ghi điểm hàng đầu của phong cách [#style#] trong tủ quần áo hiện tại của mình không?",
            popup_tip_title: "Lời khuyên",
            popup_tip_btn_ok: "Ok",
            popup_tip_speed_desc: "Xem video để x2 tiền vàng ~",
            popup_reward_success_btn_share: "Chia sẻ",
            popup_newrank_title: "Nâng cấp",
            popup_newrank_btn_ok: "Ok",
            popup_visitor_result: "Thân mến, có #total# bạn bè đến thăm bạn ~",
            popup_visitor_start_node: "Lưu ý: Có #total# khách vuốt màn hình!",
            popup_visitor_up: "ID người dùng: #userid# đã thích cho bạn",
            popup_visitor_down: "Nhóm từ User ID: #userid#",
            uitips_recycle_empty: "Bạn chỉ có thể bán quần áo bằng cách kéo chúng vào đây ~",
            uitips_mystery_level_limit: "Cấp độ cao nhất có thể được mở khóa sau khi đạt cấp độ 4 ~",
            uitips_pk_limit: "Cấp độ cao nhất có thể được mở khóa sau khi đạt cấp độ 6~",
            uitips_slot_full: "Ô đã đầy, vui lòng kết hợp thêm ~",
            uitips_coin_unenought: "Thiếu vàng!",
            uitips_shopbuy_suc: "Quần áo mua thành công ~ đã được thêm vào ô ~",
            best_style_0: "Trung tính",
            best_style_1: "Duyên dáng",
            best_style_2: "Sống động",
            best_style_3: "Thuần khiết",
            best_style_4: "Gợi cảm",
            best_style_5: "Trưởng thành",
            best_style_6: "Dễ thương",
            best_style_7: "Nhàn rỗi",
            best_style_8: "Phục cổ",
            best_style_9: "Quý cô",
            best_style_10: "Ấm áp",
            best_style_11: "Đơn giản",
            best_style_12: "Cao quý",
            coming_soon: "Sắp có",
            ad_reward_success: "Phần thưởng xu vàng đã nhận thành công ~"
        }, cc._RF.pop()
    }, {}],
    IBagItem: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "75014isdrtFFIHZxQIvWTg+", "IBagItem"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), cc._RF.pop()
    }, {}],
    ICharacter: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "4391dZrPWlF7Yiykivl94pT", "ICharacter"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), cc._RF.pop()
    }, {}],
    IDressItem: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "20b28foAl1FQ5Tz/Pg/Ievw", "IDressItem"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), cc._RF.pop()
    }, {}],
    IManager: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "85d0bFLhJFOvoEp9Z2xQ3Bi", "IManager"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return t.getInstance = function() {
                return this._instance || (this._instance = new this), this._instance
            }, t
        }();
        a.default = r, cc._RF.pop()
    }, {}],
    IMergeItem: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "d674eq8VqNGJa9wOqlWYMux", "IMergeItem"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), cc._RF.pop()
    }, {}],
    IPlatform: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "13857ySYxhBN7pZ4lxjOh9g", "IPlatform"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), cc._RF.pop()
    }, {}],
    IPopup: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "b15b7jxSvdFk5jyq9b3YkyB", "IPopup"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), cc._RF.pop()
    }, {}],
    IRank: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "6076dquLeNEXoxsiZ9un7LD", "IRank"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), cc._RF.pop()
    }, {}],
    IShopItem: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "bf0eaM2zx9KGJYSth1lkjfu", "IShopItem"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), cc._RF.pop()
    }, {}],
    Init: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "25763bpbKFD/5SuTJhLOEKr", "Init"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = {},
            i = t("./framework/manager/EventManager"),
            o = t("./framework/manager/I18nManager"),
            n = t("./framework/manager/LoaderManager"),
            s = t("./framework/manager/PopupManager"),
            c = t("./framework/manager/AudioManager"),
            p = t("./datas/const/I18n"),
            l = t("./modules/merge/MergeController"),
            d = t("./modules/bag/BagController"),
            h = t("./modules/player/PlayerController"),
            u = t("./modules/common/CharacterConfHelper"),
            f = t("./modules/dress/DressController");
        r = {
            EventManager: i.default.getInstance(),
            LoaderManager: n.default.getInstance(),
            PopupManager: s.default.getInstance(),
            AudioManager: c.default.getInstance(),
            I18n: o.default.getInstance(),
            CharacterConfHelper: u.default.getInstance(),
            MergeController: l.default.getInstance(),
            BagController: d.default.getInstance(),
            PlayerController: h.default.getInstance(),
            DressController: f.default.getInstance()
        }, window.App = r, r.I18n.init(p.i18n), r.CharacterConfHelper.init(), r.LoaderManager.init("prefabs/"), r.AudioManager.init("sounds/mp3/"), cc._RF.pop()
    }, {
        "./datas/const/I18n": "I18n",
        "./framework/manager/AudioManager": "AudioManager",
        "./framework/manager/EventManager": "EventManager",
        "./framework/manager/I18nManager": "I18nManager",
        "./framework/manager/LoaderManager": "LoaderManager",
        "./framework/manager/PopupManager": "PopupManager",
        "./modules/bag/BagController": "BagController",
        "./modules/common/CharacterConfHelper": "CharacterConfHelper",
        "./modules/dress/DressController": "DressController",
        "./modules/merge/MergeController": "MergeController",
        "./modules/player/PlayerController": "PlayerController"
    }],
    LoaderManager: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "4c52astmQVL84CTqeiPBRwM", "LoaderManager"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return t.getInstance = function() {
                return this._instance || (this._instance = new t), this._instance
            }, t.prototype.init = function(t) {
                this._prefabPath = t, this._spriteframeQueues = new Array
            }, t.prototype.loadPrefab = function(t, e) {
                var a = this._prefabPath + t;
                cc.loader.loadRes(a, cc.Prefab, function(t, a) {
                    var r = cc.instantiate(a);
                    e && e(r)
                })
            }, t.prototype.loadSpriteFrame = function(t, e) {
                this._spriteframeQueues.push({
                    path: t,
                    callback: e
                }), this._isLoadingSpriteframe || this.loadQueues()
            }, t.prototype.loadQueues = function() {
                var t = this._spriteframeQueues.shift();
                if (t) {
                    var e = this;
                    this._isLoadingSpriteframe = !0, cc.loader.loadRes(t.path, cc.SpriteFrame, function(a, r) {
                        t.callback && t.callback(r), e.loadQueues()
                    })
                } else this._isLoadingSpriteframe = !1
            }, t
        }();
        a.default = r, cc._RF.pop()
    }, {}],
    LockPanelUI: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "da9cc3J+BlH27s0F8eSbuE0", "LockPanelUI"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../../../framework/view/ViewBasic")),
            n = t("../../../../datas/configs/GameConfig"),
            s = t("../../../../framework/platform/PlatformManager"),
            c = t("../../../../datas/const/EventConst"),
            p = t("../../../common/LogManager"),
            l = t("../../../../datas/const/PopupConst"),
            d = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.setLabel(this.node.getChildByName("tTips"), "merge_unlock_tips"), this.setLabel(this.getChildByPath(this.node, "btnUnlock.Background.tValue"), "merge_btn_unlock"), this.initUIClick(["btnUnlock"])
                }, e.prototype.onUIClick = function(e, a) {
                    if (t.prototype.onUIClick.call(this, e, a), "btnUnlock" == a) {
                        var r = this;
                        App.PopupManager.show(l.PopupConst.TIPS, {
                            message: "Mở khóa chỉ cần xem một đoạn quảng cáo ngắn, bạn có muốn mở khóa ngay bây giờ không?",
                            callback: function() {
                                s.default.getInstance().showVideo({
                                    type: "30s",
                                    id: 30
                                }, function() {
                                    App.MergeController.unlockVideoType(r._currentType), r.sendEvent(c.default.UI_MERGE_MENUITEM_SELECT, {
                                        type: r._currentType
                                    })
                                }), p.default.getInstance().add({
                                    tag: 30
                                })
                            }
                        })
                    }
                }, e.prototype.updateType = function(t) {
                    if (this._currentType != t) {
                        this._currentType = t;
                        var e = n.UnlockConfig[t];
                        this.getChildByPath(this.node, "icons").children.forEach(function(e) {
                            e.active = e.name == t
                        });
                        var a = App.I18n.get("merge_unlock_title", [
                            ["level", e.level]
                        ]);
                        this.setLabel(this.node.getChildByName("tTitle"), a)
                    }
                }, e = __decorate([i], e)
            }(o.default);
        a.default = d, cc._RF.pop()
    }, {
        "../../../../datas/configs/GameConfig": "GameConfig",
        "../../../../datas/const/EventConst": "EventConst",
        "../../../../datas/const/PopupConst": "PopupConst",
        "../../../../framework/platform/PlatformManager": "PlatformManager",
        "../../../../framework/view/ViewBasic": "ViewBasic",
        "../../../common/LogManager": "LogManager"
    }],
    LogManager: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "1e9cbQurdRBWYjEcV4jkezh", "LogManager"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("../../framework/utils/NumberHelper"),
            i = t("../../framework/platform/PlatformManager"),
            o = function() {
                function t() {}
                return t.getInstance = function() {
                    return this._instance || (this._instance = new t), this._instance
                }, t.prototype.add = function(t) {
                    var e = r.default.nowTime();
                    this._lastTime || (this._lastTime = e), this._data || (this._data = {
                        logs: []
                    }), this._data.logs.push(t), e - this._lastTime < 150 || (this._lastTime = e, this.save())
                }, t.prototype.save = function() {
                    window.wx && (i.default.getInstance().getPlatform().logUI(this._data), this._data.logs = [])
                }, t
            }();
        a.default = o, cc._RF.pop()
    }, {
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper"
    }],
    LoginScene: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "2cae95QMNJMX5vcGHisCGwN", "LoginScene"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("./framework/view/ViewBasic")),
            n = t("./datas/configs/AppConfig"),
            s = t("./framework/platform/PlatformManager"),
            c = t("./modules/ui/VisitModeUI"),
            p = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    var t = App.I18n.get("loading_version") + n.default.version;
                    this.setLabel(this.node.getChildByName("tVersion"), t);
                    var e = this.node.getChildByName("effectSpr");
                    e.y = 0, cc.tween(e).to(10, {
                        position: cc.v2(e.x, -350)
                    }).start(), this._loadingBar = this.getChildByPath(this.node, "LoadingBar"), this.preLoadGameScene(), s.default.getInstance().init(), this.node.getChildByName("4399").active = !!window.h5api
                }, e.prototype.preLoadGameScene = function() {
                    var t = this;
                    cc.director.preloadScene("GameScene", this.onProgress.bind(this), function() {
                        t.initialPlatformData()
                    })
                }, e.prototype.onProgress = function(t, e, a) {
                    var r = Number(t / e),
                        i = this._loadingBar.getChildByName("progressBar");
                    i.getComponent(cc.ProgressBar).progress = r, i.getChildByName("icon").x = -i.width / 2 + i.width * r, this.setLabel(this._loadingBar.getChildByName("tTips"), "loading_tips")
                }, e.prototype.initialPlatformData = function() {
                    var t = this;
                    this.setLabel(this._loadingBar.getChildByName("tTips"), "loading_gamedata_tips"), s.default.getInstance().login(function() {
                        t.onPlatformComplete(), t.onLoadGameScene()
                    })
                }, e.prototype.onPlatformComplete = function() {
                    App.PlayerController.init(), App.PlayerController.isTutorialComplete || s.default.getInstance().clearLocalData(), c.default.initVisitorData(), App.MergeController.init(), App.BagController.init(), App.DressController.init()
                }, e.prototype.onLoadGameScene = function() {
                    cc.director.loadScene("GameScene")
                }, e = __decorate([i], e)
            }(o.default);
        a.default = p, cc._RF.pop()
    }, {
        "./datas/configs/AppConfig": "AppConfig",
        "./framework/platform/PlatformManager": "PlatformManager",
        "./framework/view/ViewBasic": "ViewBasic",
        "./modules/ui/VisitModeUI": "VisitModeUI"
    }],
    MainUI: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "c164ep1/IxBYKHZMZlYWipM", "MainUI"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r, i = cc._decorator,
            o = i.ccclass,
            n = (i.property, t("../../../framework/view/ViewBasic")),
            s = t("../../../datas/const/PopupConst"),
            c = t("../../../datas/const/EventConst"),
            p = t("../../../datas/const/CharacterConst"),
            l = t("../../../framework/utils/NumberHelper"),
            d = t("../../common/LogManager"),
            h = t("../../../framework/utils/UIHelper");
        (function(t) {
            t[t.Merge = 0] = "Merge", t[t.Shop = 1] = "Shop", t[t.Lock = 2] = "Lock"
        })(r || (r = {}));
        var u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._tick = 0, e._autoMergeTick = 0, e
            }
            return __extends(e, t), e.prototype.onLoad = function() {
                h.default.adapterLowResolutionScale(this.node), t.prototype.onLoad.call(this), this._mainPanel = this.getChildByPath(this.node, "panel"), this._panelType = r.Merge, this._isMergeMode = !0, this.initMenuList(), this.initUIClick(["btnShow", "touchBg", "btnDown", "btnTest", "btnSpeed", "btnAutoMerge"]), this.bindEvents([c.default.UI_SHOW_MERGE_PANEL, c.default.UI_MERGE_MENUITEM_SELECT, c.default.UI_SHOW_SHOP_PANEL, c.default.UI_HIDE_SHOP_PANEL, c.default.REWARD_GIFT]), this.getChildByPath(this.node, "panel.btnAutoMerge").runAction(cc.repeatForever(cc.sequence(cc.delayTime(5), cc.scaleTo(.2, .9, .9), cc.scaleTo(.2, .7, .7)))), this._mainPanel.parent.getChildByName("bg").active = !1, this.updateLowAdapter()
            }, e.prototype.updateLowAdapter = function() {
                if (h.default.isLowResolution) {
                    var t = this.node.parent.getChildByName("ui").getChildByName("left");
                    0 == this._mainPanel.y ? (t.getChildByName("btnMystery").active = !1, t.getChildByName("btnQuests").active = !1, t.getChildByName("btnPK").active = !1, this._mainPanel.parent.getChildByName("bg").active = !0) : (t.getChildByName("btnMystery").active = !0, t.getChildByName("btnQuests").active = !0, t.getChildByName("btnPK").active = !0, this._mainPanel.parent.getChildByName("bg").active = !1)
                }
            }, e.prototype.start = function() {
                this._menuType = p.CharacterConst.Cloth, this.switchPanel(), this.updateTypeInfo(), this.updateBtnSpeed(), this.updateAutoMerge()
            }, e.prototype.update = function(t) {
                this._tick = this._tick + t, this._tick >= 1 && (this._tick = 0, this.updateBtnSpeed(), this.updateGiftBox(), this.updateAutoMerge()), this._autoMergeTick = this._autoMergeTick + t, this._autoMergeTick >= 5 && (this._autoMergeTick = 0, this.handAutoMerge())
            }, e.prototype.updateGiftBox = function() {
                if (!(App.MergeController.LevelMax < 3) && this._menuList) {
                    var t = App.MergeController.GiftBoard,
                        e = {},
                        a = [];
                    for (var r in t) {
                        var i = t[r];
                        if (i)
                            for (var o in i) {
                                var n = i[o];
                                n && n.end_at && (l.default.nowTime() < n.end_at ? e[r] = 1 : a.push(n))
                            }
                    }
                    this._menuList.forEach(function(t) {
                        var a = !1;
                        e[t.name] && (a = !0), t.getComponent("MenuItemUI").showGiftUnread(a)
                    }), a.length > 0 && this.sendEvent(c.default.OPEN_GIFT, a)
                }
            }, e.prototype.onEvents = function(t, e) {
                switch (t) {
                    case c.default.UI_SHOW_MERGE_PANEL:
                        this.onListenerUIVisible(e);
                        break;
                    case c.default.UI_MERGE_MENUITEM_SELECT:
                        this.updateMenuItemSelect(e);
                        break;
                    case c.default.UI_SHOW_SHOP_PANEL:
                        this._panelType = r.Shop, this._isMergeMode = !1, this.switchPanel();
                        break;
                    case c.default.UI_HIDE_SHOP_PANEL:
                        this._panelType = r.Merge, this._isMergeMode = !0, this.switchPanel();
                        break;
                    case c.default.REWARD_GIFT:
                        this.update(1)
                }
            }, e.prototype.onUIClick = function(t, e) {
                switch (e) {
                    case "btnShow":
                        this.sendEvent(c.default.TUTORIAL_SHOW_MERGE_PANEL), this.onClickVisible(!0);
                        break;
                    case "touchBg":
                        this.onClickVisible(!1);
                        break;
                    case "btnDown":
                        this.onClickVisible(!1), this.sendEvent(c.default.TUTORIAL_HIDE_MERGE_PANEL, {});
                        break;
                    case "btnTest":
                        App.PopupManager.show(s.PopupConst.TEST);
                        break;
                    case "btnSpeed":
                        d.default.getInstance().add({
                            tag: 1
                        }), this.onSpeedup();
                        break;
                    case "btnAutoMerge":
                        d.default.getInstance().add({
                            tag: 3
                        }), App.PopupManager.show(s.PopupConst.AUTO_MERGE)
                }
            }, e.prototype.initMenuList = function() {
                var t = [p.CharacterConst.Hair, p.CharacterConst.Cloth, p.CharacterConst.Trous, p.CharacterConst.Shoe],
                    e = p.CharacterConst.Cloth;
                this._menuList = [];
                var a = this.getChildByPath(this._mainPanel, "menuPanel"),
                    r = this.getChildByPath(a, "container"),
                    i = a.getChildByName("MenuItemPrefab"),
                    o = -i.width / 2,
                    n = this;
                t.forEach(function(t) {
                    var a = cc.instantiate(i),
                        s = a.getComponent("MenuItemUI");
                    s.initData(t), s.setSelected(e), a.parent = r, a.x = o, a.name = t, o += a.width, n._menuList.push(a)
                }), i.active = !1
            }, e.prototype.updateMenuItemSelect = function(t) {
                App.MergeController.isUnlock(t.type) ? this._isMergeMode ? this._panelType = r.Merge : this._panelType = r.Shop : this._panelType = r.Lock, this._menuList.forEach(function(e) {
                    e.getComponent("MenuItemUI").setSelected(t.type)
                }), this._menuType = t.type, this.switchPanel()
            }, e.prototype.updateGiftUnread = function(t) {
                if (this._menuType != t.type)
                    for (var e = 0; e < this._menuList.length; e++) {
                        var a = this._menuList[e];
                        if (a.name == t.type) {
                            a.getComponent("MenuItemUI").showGiftUnread();
                            break
                        }
                    }
            }, e.prototype.switchPanel = function() {
                var t = this.getChildByPath(this._mainPanel, "panelMerge"),
                    e = this.getChildByPath(this._mainPanel, "panelShop"),
                    a = this.getChildByPath(this._mainPanel, "panelLock");
                t.active = this._panelType == r.Merge, e.active = this._panelType == r.Shop, a.active = this._panelType == r.Lock, this.updateTypeInfo(), this._menuList.forEach(function(t) {
                    t.getComponent("MenuItemUI").updateLockState(e.active)
                })
            }, e.prototype.updateTypeInfo = function() {
                var t = this.getChildByPath(this._mainPanel, "panelMerge");
                t.active && t.getComponent("MergePanelUI").updateType(this._menuType);
                var e = this.getChildByPath(this._mainPanel, "panelShop");
                e.active && e.getComponent("ShopPanelUI").updateType(this._menuType);
                var a = this.getChildByPath(this._mainPanel, "panelLock");
                a.active && a.getComponent("LockPanelUI").updateType(this._menuType)
            }, e.prototype.onSpeedup = function() {
                App.PopupManager.show(s.PopupConst.COIN_DOUBLE)
            }, e.prototype.showCoinSpeedAnimiation = function() {
                cc.loader.loadRes("prefabs/components/CoinDrop", cc.Prefab, function(t, e) {
                    var a = cc.instantiate(e);
                    cc.director.getScene().addChild(a), a.name = "coin_drop_ani", a.x = 0, a.y = 0
                })
            }, e.prototype.updateBtnSpeed = function() {
                var t = App.PlayerController.CoinSpeedEndAt;
                t -= l.default.nowTime(), t = Math.max(0, t);
                var e = this.getChildByPath(this.node, "panel.tSpeedRemain");
                e.active = t > 0, e.active && this.setLabel(e, l.default.formatSecondsRemain(t));
                var a = cc.director.getScene().getChildByName("coin_drop_ani");
                t > 0 ? a || this.showCoinSpeedAnimiation() : a && (a.removeFromParent(), this.sendEvent(c.default.UI_RANK, {}))
            }, e.prototype.updateAutoMerge = function() {
                var t = App.PlayerController.AutoMergeEndAt;
                t -= l.default.nowTime(), t = Math.max(0, t);
                var e = this.getChildByPath(this.node, "panel.btnAutoMerge.Background.tRemain");
                e.active = t > 0, e.active && this.setLabel(e, l.default.formatSecondsRemain(t))
            }, e.prototype.handAutoMerge = function() {
                var t = App.PlayerController.AutoMergeEndAt;
                (t -= l.default.nowTime(), (t = Math.max(0, t)) > 0) && this.getChildByPath(this._mainPanel, "panelMerge").getComponent("MergePanelUI").handleAutoMerge()
            }, e.prototype.doActions = function(t) {
                if (!this._actionBlock) {
                    this._actionBlock = !0;
                    var e = this,
                        a = this._mainPanel.x,
                        r = 0;
                    t ? this._mainPanel.active = t : r = -this._mainPanel.height, this.getChildByPath(this.node, "touchBg").active = t, cc.tween(this._mainPanel).to(.15, {
                        position: cc.v2(a, r)
                    }).call(function() {
                        e._mainPanel.active = t, e._actionBlock = !1, e.updateLowAdapter()
                    }).start(), t && (this._mainPanel.parent.getChildByName("bg").active = !1)
                }
            }, e.prototype.onListenerUIVisible = function(t) {
                var e = t && t.visible;
                this.doActions(e), t && t.characterType && this.updateMenuItemSelect({
                    type: t.characterType
                }), this.updateLowAdapter()
            }, e.prototype.onClickVisible = function(t) {
                this.doActions(t), this.sendEvent(c.default.UI_SHOW_MERGE_PANEL, {
                    visible: t
                })
            }, e = __decorate([o], e)
        }(n.default);
        a.default = u, cc._RF.pop()
    }, {
        "../../../datas/const/CharacterConst": "CharacterConst",
        "../../../datas/const/EventConst": "EventConst",
        "../../../datas/const/PopupConst": "PopupConst",
        "../../../framework/utils/NumberHelper": "NumberHelper",
        "../../../framework/utils/UIHelper": "UIHelper",
        "../../../framework/view/ViewBasic": "ViewBasic",
        "../../common/LogManager": "LogManager"
    }],
    MenuItemUI: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "4d60cMxN85DyIFWSXwI+mxm", "MenuItemUI"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../../framework/view/ViewBasic")),
            n = t("../../../datas/const/EventConst"),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this._lockIcon = this.getChildByPath(this.node, "iconLock"), this._lockIcon.active = !1, this._unreadIcon = this.getChildByPath(this.node, "iconUnread"), this._unreadIcon.active = !1, this._giftUnread = this.getChildByPath(this.node, "giftUnread"), this._giftUnread.active = !1, this.initUIClick([this.node.name]), this.bindEvents([n.default.MERGE_SUCCESS])
                }, e.prototype.start = function() {}, e.prototype.initData = function(t) {
                    var e = this;
                    this._type = t;
                    var a = this;
                    this.getChildByPath(this.node, "items").children.forEach(function(t) {
                        t.active = t.name == e._type, t.active && (a._typeIcon = t, a.updateTypeLockState())
                    })
                }, e.prototype.updateLockState = function(t) {
                    this._lockIcon.active = !1;
                    App.MergeController.isUnlock(this._type)
                }, e.prototype.setSelected = function(t) {
                    this.getChildByPath(this.node, "bg").active = this._type == t
                }, e.prototype.showGiftUnread = function(t) {
                    this._giftUnread.active = t
                }, e.prototype.updateTypeLockState = function() {
                    var t = this._typeIcon.getChildByName("active").active,
                        e = App.MergeController.isUnlock(this._type);
                    this._typeIcon.getChildByName("active").active = e, this._typeIcon.getChildByName("lock").active = !e, !t && e && (this._unreadIcon.active = !0)
                }, e.prototype.onUIClick = function(t, e) {
                    this._unreadIcon.active = !1, this.sendEvent(n.default.UI_MERGE_MENUITEM_SELECT, {
                        type: this._type
                    })
                }, e.prototype.onEvents = function(t, e) {
                    switch (t) {
                        case n.default.MERGE_SUCCESS:
                            this.updateTypeLockState()
                    }
                }, e = __decorate([i], e)
            }(o.default);
        a.default = s, cc._RF.pop()
    }, {
        "../../../datas/const/EventConst": "EventConst",
        "../../../framework/view/ViewBasic": "ViewBasic"
    }],
    MenuItem: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "b6cbamZ0rVCn47OvQXwqQ3V", "MenuItem"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../../framework/view/ViewBasic")),
            n = t("../../../datas/const/EventConst"),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.initUIClick([this.node.name]), this.showNew(!1)
                }, e.prototype.initData = function(t) {
                    this._type = t, this.initIcon()
                }, e.prototype.setSelected = function(t) {
                    this.getChildByPath(this.node, "selected").active = this._type == t
                }, e.prototype.showNew = function(t) {
                    this.node.getChildByName("icon_new").active = t
                }, e.prototype.initIcon = function() {
                    var t = this;
                    [this.getChildByPath(this.node, "icons"), this.getChildByPath(this.node, "selected.icons")].forEach(function(e) {
                        e.children.forEach(function(e) {
                            e.active = e.name == t._type
                        })
                    })
                }, e.prototype.onUIClick = function(t, e) {
                    this.sendEvent(n.default.UI_BAG_MENUITEM_SELECT, {
                        type: this._type
                    }), this.showNew(!1)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = s, cc._RF.pop()
    }, {
        "../../../datas/const/EventConst": "EventConst",
        "../../../framework/view/ViewBasic": "ViewBasic"
    }],
    MenuPanel: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "7852d+8fPlH9JC1QsX9kV5g", "MenuPanel"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../../framework/view/ViewBasic")),
            n = t("../../../datas/const/CharacterConst"),
            s = t("../../tutorial/TutorialSteps"),
            c = t("../../../datas/const/EventConst"),
            p = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.initUIClick(["touchBg"]), this.bindEvents([c.default.UI_BAG_MENUITEM_SELECT, c.default.UI_BAG_ITEM_SELECT, c.default.UI_BAG_NEW]);
                    var e = this.getChildByPath(this.node, "rightPanel.container");
                    e.height = cc.winSize.height - 200, cc.winSize.height / cc.winSize.width > 2 && (e.height = e.height - 60), this._characterList = this.getChildByPath(this.node, "rightPanel.container.view.content"), this._cloneCharacterItem = this.getChildByPath(this.node, "rightPanel.PrefabItem"), this._cloneCharacterItem.active = !1, this.PrefabBtnMore = this.getChildByPath(this.node, "rightPanel.btnMore"), this.PrefabBtnMore.active = !1, this.PrefabBtnClean = this.getChildByPath(this.node, "rightPanel.btnClean"), this.PrefabBtnClean.active = !1;
                    var a = this._cloneCharacterItem.convertToWorldSpace(cc.v2(0, 0));
                    s.default.BagItemClothPos = a, this.initMenuList()
                }, e.prototype.onUIClick = function(t, e) {
                    "touchBg" == e && this.runActions(!1)
                }, e.prototype.onEvents = function(t, e) {
                    switch (t) {
                        case c.default.UI_BAG_MENUITEM_SELECT:
                            this.updateMenuItemSelect(e);
                            break;
                        case c.default.UI_BAG_ITEM_SELECT:
                            this.updateBagItemSelect(e);
                            break;
                        case c.default.UI_BAG_NEW:
                            this.updateBagUnlock(e)
                    }
                }, e.prototype.initMenuList = function() {
                    var t = [n.CharacterConst.Hair, n.CharacterConst.Cloth, n.CharacterConst.Trous, n.CharacterConst.Shoe, n.CharacterConst.Hat, n.CharacterConst.Face],
                        e = n.CharacterConst.Cloth;
                    this._menuList = [];
                    var a = this.getChildByPath(this.node, "leftPanel"),
                        r = a.getChildByName("prefabItem"),
                        i = -r.height / 2,
                        o = this;
                    t.forEach(function(t) {
                        var n = cc.instantiate(r),
                            c = n.getComponent("MenuItem");
                        if (c.initData(t), c.setSelected(e), n.parent = a, n.y = i, n.name = t, i -= n.height, o._menuList.push(n), t == e) {
                            var p = n.convertToWorldSpace(cc.v2(0, 0));
                            s.default.MenuItemClothPos = p
                        }
                    }), a.height = Math.abs(i) - r.height / 2, r.active = !1
                }, e.prototype.updateMenuItemSelect = function(t) {
                    this._menuList.forEach(function(e) {
                        e.getComponent("MenuItem").setSelected(t.type)
                    }), this.updateBagItemList(t.type), this.runActions(!0)
                }, e.prototype.updateBagUnlock = function(t) {
                    if (console.log("eventdata ========== ", t), t.characterType)
                        for (var e = 0; e < this._menuList.length; e++) {
                            var a = this._menuList[e];
                            if (a.name == t.characterType) {
                                a.getComponent("MenuItem").showNew(!0);
                                break
                            }
                        }
                }, e.prototype.updateBagItemList = function(t) {
                    this._characterList.removeAllChildren();
                    var e = App.BagController.getItemGroup(t),
                        a = "hat" == t || "face" == t;
                    if (0 != e.length || a) {
                        if (a) {
                            e = [];
                            var r = cc.instantiate(this.PrefabBtnClean);
                            this._characterList.addChild(r), r.active = !0, r.x = 0, r.y = -this.PrefabBtnClean.height;
                            this.onClick(r, function() {
                                var e = {
                                    type: t,
                                    id: "0"
                                };
                                App.DressController.onDress(e)
                            }, this);
                            var i = App.CharacterConfHelper.getBagList(t);
                            for (var o in i) {
                                var n = i[o];
                                Number(n.id) > 0 && e.push(n.id)
                            }
                        }
                        var s = -this._cloneCharacterItem.height / 2;
                        a && (s -= 120);
                        for (var p = 0; p < e.length; p++) {
                            var l = e[p],
                                d = cc.instantiate(this._cloneCharacterItem);
                            d.parent = this._characterList, d.y = s, d.x = 0, s -= d.height;
                            var h = d.getComponent("BagItemUI"),
                                u = {
                                    type: t,
                                    id: l
                                };
                            h.initData(u), d.active = !0
                        }
                        this._characterList.height = Math.abs(s);
                        var f = App.DressController.getPartID(t);
                        for (p = 0; p < this._characterList.children.length; p++) {
                            if (h = (n = this._characterList.children[p]).getComponent("BagItemUI")) {
                                u = {
                                    type: t,
                                    id: f
                                };
                                h.setSelected(u)
                            }
                        }
                    } else {
                        var m = cc.instantiate(this.PrefabBtnMore);
                        this._characterList.addChild(m), m.active = !0, m.x = 0, m.y = -this.PrefabBtnMore.height;
                        var _ = this;
                        this.onClick(m, function() {
                            _.sendEvent(c.default.UI_SHOW_MERGE_PANEL, {
                                visible: !0,
                                characterType: t
                            })
                        }, this)
                    }
                }, e.prototype.updateBagItemSelect = function(t) {
                    for (var e = 0; e < this._characterList.children.length; e++) {
                        var a = this._characterList.children[e].getComponent("BagItemUI");
                        a && a.setSelected(t)
                    }
                    console.log("data = ", t), App.DressController.onDress(t)
                }, e.prototype.runActions = function(t) {
                    if (!this._actionBlock) {
                        this._actionBlock = !0;
                        var e = this,
                            a = this.node.y,
                            r = t ? -155 : 0;
                        cc.tween(this.node).to(.1, {
                            position: cc.v2(r, a)
                        }).call(function() {
                            e._actionBlock = !1
                        }).start(), this.sendEvent(c.default.TUTORIAL_SHOW_BAG_LIST)
                    }
                }, e = __decorate([i], e)
            }(o.default);
        a.default = p, cc._RF.pop()
    }, {
        "../../../datas/const/CharacterConst": "CharacterConst",
        "../../../datas/const/EventConst": "EventConst",
        "../../../framework/view/ViewBasic": "ViewBasic",
        "../../tutorial/TutorialSteps": "TutorialSteps"
    }],
    MergeController: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "854f5J3GURL9JCbX2r4Q9El", "MergeController"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("./datas/MergeModel"),
            i = t("../../datas/const/PopupConst"),
            o = t("../../datas/configs/GameConfig"),
            n = t("../common/UITips"),
            s = t("../../datas/const/CharacterConst"),
            c = t("../../datas/const/GameConst"),
            p = t("../../datas/const/EventConst"),
            l = t("../common/DataStoreManager"),
            d = t("../../framework/utils/NumberHelper"),
            h = t("../../framework/platform/PlatformManager"),
            u = [s.CharacterConst.Hair, s.CharacterConst.Cloth, s.CharacterConst.Trous, s.CharacterConst.Shoe],
            f = function() {
                function t() {}
                return t.getInstance = function() {
                    return this._instance || (this._instance = new t), this._instance
                }, t.prototype.init = function() {
                    this._mergeData = new r.default(this.importData())
                }, t.prototype.setBoardData = function(t, e, a) {
                    var r = this._mergeData.getMax(t);
                    this._mergeData.board[t][e] = a, this._mergeData.updateMax(), App.EventManager.emitEvent(p.default.MERGE_SUCCESS, {
                        characterType: t,
                        characterID: a
                    }), a.length > 0 && Number(a) > r && (s.CharacterConst.Cloth, App.PopupManager.show(i.PopupConst.UNLOCK, {
                        characterType: t,
                        characterID: a
                    }), App.EventManager.emitEvent(p.default.UI_BAG_NEW, {
                        characterType: t,
                        characterID: a
                    }))
                }, t.prototype.merge = function(t, e, a) {
                    var r, i = !1,
                        o = !1,
                        s = this.getBoardSlotValue(t, e),
                        l = this.getBoardSlotValue(t, a);
                    if (this._mergeData.isSlotEmpty(t, e)) r = l, o = !0;
                    else if (s == l) {
                        var d = App.CharacterConfHelper.getNextMergeItemConfig(t, l);
                        d ? (r = d.id, i = !0, App.AudioManager.playEffect("merge")) : l == c.default.max_merge_level && n.default.show("Cấp độ tối đa!")
                    }
                    return i && (App.PlayerController.addMergeTimes(), this.checkShowInterstitialAd()), (o || i) && (this.setBoardData(t, e, r), this.setBoardData(t, a, ""), App.EventManager.emitEvent(p.default.MERGE_UPDATE_BOARD, [
                        [e, r, t],
                        [a, "", t]
                    ]), App.EventManager.emitEvent(p.default.UI_QUEST_UNREAD, {}), this.save()), {
                        dragSuc: o,
                        mergeSuc: i
                    }
                }, t.prototype.checkShowInterstitialAd = function() {
                    var t = cc.sys.localStorage.getItem("times_key") || 0,
                        e = cc.sys.localStorage.getItem("secends_key");
                    e && d.default.nowTime() - e >= 30 ? t += 5 : t += 1, t >= 50 && (t = 0, h.default.getInstance().showInterstitialAd()), cc.sys.localStorage.setItem("times_key", t), cc.sys.localStorage.setItem("secends_key", d.default.nowTime())
                }, t.prototype.add = function(t, e, a) {
                    this.setBoardData(t, e, a);
                    var r = this.getBuyableCost(t);
                    this.updatePrice(t, a, r), App.EventManager.emitEvent(p.default.MERGE_UPDATE_BOARD, [
                        [e, a, t]
                    ]), App.AudioManager.playEffect("purchase"), this.save()
                }, t.prototype.recycle = function(t, e) {
                    this.setBoardData(t, e, ""), App.EventManager.emitEvent(p.default.MERGE_UPDATE_BOARD, [
                        [e, "", t]
                    ]), App.AudioManager.playEffect("sell"), this.save()
                }, t.prototype.buy = function(t, e, a) {
                    if (this.isBoardFull(t.type)) n.default.show("uitips_slot_full");
                    else
                        for (var r = 0; r < 12; r++)
                            if (this._mergeData.isSlotEmpty(t.type, r)) {
                                this.setBoardData(t.type, r, t.id), this.updatePrice(t.type, t.id, e), App.EventManager.emitEvent(p.default.MERGE_UPDATE_BOARD, [
                                    [r, t.id, t.type]
                                ]), App.AudioManager.playEffect("purchase"), this.save(), a && a(), n.default.show("uitips_shopbuy_suc");
                                break
                            }
                }, t.prototype.updatePrice = function(t, e, a) {
                    this._mergeData.price[t] || (this._mergeData.price[t] = {}), this._mergeData.price[t][e] = a, App.EventManager.emitEvent(p.default.MERGE_COST, {}), this.save()
                }, t.prototype.isBoardFullGift = function(t) {
                    for (var e = !0, a = 0; a < 12; a++)
                        if (this._mergeData.isSlotEmpty(t, a)) {
                            if (!this._giftGroup) {
                                e = !1;
                                break
                            }
                            if (!this._giftGroup[t + a.toString()]) {
                                e = !1;
                                break
                            }
                        } return e
                }, t.prototype.computeGiftBox = function() {
                    var t, e = this,
                        a = [];
                    if (u.forEach(function(t) {
                            e.isUnlock(t) && !e.isBoardFullGift(t) && a.push(t)
                        }), a.length > 0)
                        for (var r = Math.floor(Math.random() * a.length), i = a[r], o = 0; o < 12; o++)
                            if (this._mergeData.isSlotEmpty(i, o)) {
                                if (!this._giftGroup) {
                                    n = this._mergeData.getMax(i);
                                    t = {
                                        type: i,
                                        id: Math.max(1, n - 8),
                                        slotIndex: o
                                    };
                                    break
                                }
                                if (!this._giftGroup[i + o.toString()]) {
                                    var n = this._mergeData.getMax(i);
                                    t = {
                                        type: i,
                                        id: Math.max(1, n - 8),
                                        slotIndex: o
                                    }, this._giftGroup[i + o.toString()] = 1;
                                    break
                                }
                            } return t
                }, t.prototype.computeGiftBoxGroup = function(t) {
                    this._giftGroup = {};
                    var e = [];
                    t || (t = 8);
                    for (var a = 0; a < t; a++) e.push(this.computeGiftBox());
                    return this._giftGroup = null, e
                }, t.prototype.rewardGiftBox = function(t) {
                    var e = t.type,
                        a = t.id,
                        r = t.slotIndex;
                    this.setBoardData(e, r, a), this._mergeData.giftBoard[e][r] = {
                        id: a,
                        type: e,
                        slotIndex: r,
                        end_at: d.default.nowTime() + 5
                    }, App.EventManager.emitEvent(p.default.REWARD_GIFT, t)
                }, t.prototype.openGift = function(t, e) {
                    this._mergeData.giftBoard[t][e] = null
                }, t.prototype.computeAutoMergeGroup = function(t) {
                    for (var e, a = this._mergeData.board[t], r = 0; r < a.length; r++) {
                        for (var i = parseInt(a[r]), o = 0; o < a.length; o++) {
                            var n = parseInt(a[o]);
                            if (r != o && i == n) {
                                e = [
                                    [r, i],
                                    [o, n]
                                ];
                                break
                            }
                        }
                        if (e) break
                    }
                    return e
                }, t.prototype.handleAutoMerge = function(t) {
                    for (var e, a, r = 0; r < u.length; r++) {
                        var i = u[r];
                        if (i != t && (a = this.computeAutoMergeGroup(i))) {
                            e = i;
                            break
                        }
                    }
                    e && a && 2 == a.length && this.merge(e, a[0][0], a[1][0])
                }, Object.defineProperty(t.prototype, "Board", {
                    get: function() {
                        return this._mergeData.board
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "GiftBoard", {
                    get: function() {
                        return this._mergeData.giftBoard
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "LevelMax", {
                    get: function() {
                        return this._mergeData.getTotalMax()
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getMax = function(t) {
                    return this._mergeData.getMax(t)
                }, t.prototype.getFillCount = function(t) {
                    return this._mergeData.getFillCount(t)
                }, t.prototype.getMergeCost = function(t) {
                    return this._mergeData.price[t]
                }, t.prototype.getPrice = function(t, e) {
                    return this._mergeData.getPrice(t, e)
                }, t.prototype.isBoardFull = function(t) {
                    for (var e = !0, a = 0; a < 12; a++)
                        if (this._mergeData.isSlotEmpty(t, a)) {
                            e = !1;
                            break
                        } return e
                }, t.prototype.getBoardSlotValue = function(t, e) {
                    return this.Board[t][e]
                }, t.prototype.getBuyableLevel = function(t) {
                    var e = Number(this._mergeData.getMax(t)),
                        a = c.default.max_buyable_leveldiff,
                        r = 1;
                    return 1 < e - a && (r = e - a), r
                }, t.prototype.getBuyableCost = function(t) {
                    var e = this.getBuyableLevel(t).toString(),
                        a = this._mergeData.getPrice(t, e),
                        r = App.CharacterConfHelper.getMergeItemConfig(t, e),
                        i = Math.floor(a * r.rise);
                    return a = 0 == a ? r.price : a + i
                }, t.prototype.getTotalBuyableCost = function() {
                    var t = this,
                        e = 0;
                    return [s.CharacterConst.Hair, s.CharacterConst.Cloth, s.CharacterConst.Trous, s.CharacterConst.Shoe].forEach(function(a) {
                        e = Math.max(e, t.getBuyableCost(a))
                    }), e
                }, t.prototype.isUnlock = function(t) {
                    var e = o.UnlockConfig[t].level;
                    return !(this._mergeData.getTotalMax() < e) || !!this._mergeData.isVideoUnLock(t)
                }, t.prototype.unlockVideoType = function(t) {
                    this._mergeData.typeVideos[t] = 1, this.save()
                }, t.prototype.getEarning = function() {
                    var t = 0,
                        e = function(e) {
                            if (a.Board.hasOwnProperty(e)) {
                                var r = a.Board[e];
                                r && r.forEach(function(a) {
                                    if (a) {
                                        var r = App.CharacterConfHelper.getMergeItemConfig(e, a);
                                        r && (t += r.income)
                                    }
                                })
                            }
                        },
                        a = this;
                    for (var r in this.Board) e(r);
                    return t
                }, t.prototype.getEarnRank = function(t) {
                    for (var e = 0; e < o.RankConfig.length; e++) {
                        if (t < o.RankConfig[e].max) return e
                    }
                    return 1
                }, t.prototype.save = function() {
                    l.default.getInstance().save()
                }, t.prototype.exportData = function() {
                    return this._mergeData.exportData()
                }, t.prototype.importData = function() {
                    return l.default.getInstance().getInitData(r.default.SAVE_KEY)
                }, t
            }();
        a.default = f, cc._RF.pop()
    }, {
        "../../datas/configs/GameConfig": "GameConfig",
        "../../datas/const/CharacterConst": "CharacterConst",
        "../../datas/const/EventConst": "EventConst",
        "../../datas/const/GameConst": "GameConst",
        "../../datas/const/PopupConst": "PopupConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../common/DataStoreManager": "DataStoreManager",
        "../common/UITips": "UITips",
        "./datas/MergeModel": "MergeModel"
    }],
    MergeItemUI: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "e6bd4GNdcFLrryQC5vAvd/i", "MergeItemUI"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../../../framework/view/ViewBasic")),
            n = t("../../../../datas/const/EventConst"),
            s = t("../../../../framework/manager/LoaderManager"),
            c = t("../../../../framework/utils/NumberHelper"),
            p = 13,
            l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this._characterID = "", this._tickTime = 0, this._draging = !1, this._isGift = !1, this._imageNode = this.getChildByPath(this.node, "imageNode"), this._imageNode.active = !1, this._tCoinround = this.getChildByPath(this.node, "tCoinround"), this.setLabel(this._tCoinround, ""), this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this.dragReset, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this), this._giftNode = this.node.getChildByName("giftNode"), this._giftNode.active = !1, this.initUIClick(["giftNode"])
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "giftNode":
                            this.openGift()
                    }
                }, e.prototype.getImageNode = function() {
                    return this._imageNode
                }, e.prototype.openGift = function() {
                    this._isGift = !1, this._giftNode.active = !1, this._imageNode.position = cc.v2(0, 0), this.updateImageSpr(), this._imageNode.active = !0, App.MergeController.openGift(this._characterType, this._slotIndex)
                }, e.prototype.update = function(t) {
                    if (this._characterID && "" != this._characterID && this._conf && 0 == this._imageNode.position.x && !this._isGift) {
                        if (this._tickTime >= this._conf.time) {
                            this._tickTime = 0;
                            var e = Math.floor(this._conf.coinround),
                                a = "+" + c.default.unitFormat(e);
                            return this.setLabel(this._tCoinround, a), void this._tCoinround.getComponent(cc.Animation).play()
                        }
                        this._tickTime = this._tickTime + t
                    }
                }, e.prototype.initData = function(t) {
                    this._slotIndex = t
                }, e.prototype.isEmpty = function() {
                    return Number(this._characterID) <= 0
                }, e.prototype.getMergeID = function() {
                    return this._characterID
                }, e.prototype.getCharacterType = function() {
                    return this._characterType
                }, e.prototype.getSlotIndex = function() {
                    return this._slotIndex
                }, e.prototype.isGift = function() {
                    return this._isGift
                }, e.prototype.showGift = function(t) {
                    t && (this._characterType = t.type, this._characterID = t.id), this._isGift = !0, this._giftNode.active = !0, this._giftNode.getComponent(cc.Animation).play()
                }, e.prototype.updateData = function(t, e) {
                    this._characterType = t, this._characterID = e || "", this._imageNode.active = !1, this._giftNode.active = !1, this._isGift = !1, App.MergeController.GiftBoard[t][this._slotIndex] && this.showGift(), this.updateImageSpr()
                }, e.prototype.updateImageSpr = function() {
                    if (Number(this._characterID) > 0) {
                        this._conf = App.CharacterConfHelper.getMergeItemConfig(this._characterType, this._characterID);
                        var t = App.CharacterConfHelper.getFrameUrl(this._characterType, this._characterID),
                            e = this;
                        s.default.getInstance().loadSpriteFrame(t, function(t) {
                            e._imageNode.getChildByName("img").getComponent(cc.Sprite).spriteFrame = t, e._imageNode.position = cc.v2(0, 0), e._isGift || (e._imageNode.active = !0)
                        }), this.setLabel(this.getChildByPath(this._imageNode, "iconLevel.tValue"), this._characterID)
                    }
                }, e.prototype.dragReset = function() {
                    this.isEmpty() || this._draging && (this._draging = !0, this._imageNode.position = cc.v2(0, 0), App.AudioManager.playEffect("drag"))
                }, e.prototype.touchStart = function(t) {
                    this._isGift || (p += 1, this.node.zIndex = p, this._draging = !0)
                }, e.prototype.touchMove = function(t) {
                    var e = t.getLocation();
                    this._imageNode.position = this._imageNode.parent.convertToNodeSpaceAR(e)
                }, e.prototype.touchCancel = function(t) {
                    this.isEmpty() || this._draging && (this._isGift || (this._draging = !0, this.sendEvent(n.default.MERGE_DRAG_CANCEL, {
                        slotIndex: this._slotIndex,
                        characterID: this._characterID,
                        event: t
                    }), App.AudioManager.playEffect("drag")))
                }, e = __decorate([i], e)
            }(o.default);
        a.default = l, cc._RF.pop()
    }, {
        "../../../../datas/const/EventConst": "EventConst",
        "../../../../framework/manager/LoaderManager": "LoaderManager",
        "../../../../framework/utils/NumberHelper": "NumberHelper",
        "../../../../framework/view/ViewBasic": "ViewBasic"
    }],
    MergeModel: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "7485arQAc9As6Bhk1m85UJo", "MergeModel"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("../../../datas/const/CharacterConst"),
            i = function() {
                function t(t) {
                    var e = [r.CharacterConst.Hair, r.CharacterConst.Cloth, r.CharacterConst.Trous, r.CharacterConst.Shoe],
                        a = this;
                    if (this.board = {}, this.price = {}, this.typeVideos = {}, this.giftBoard = {}, e.forEach(function(t) {
                            var e = new Array(12);
                            a.board[t] = e, a.price[t] = {}, a.giftBoard[t] = {}
                        }), t)
                        for (var i in t) this[i] = t[i];
                    this.updateMax()
                }
                return t.prototype.updateMax = function() {
                    for (var t in this._max = {}, this._fillCount = {}, this.board) {
                        this._max[t] = 0, this._fillCount[t] = 0;
                        for (var e = this.board[t], a = 0; a < e.length; a++) {
                            var r = e[a];
                            r && (this._max[t] = Math.max(this._max[t], r), this._fillCount[t] = this._fillCount[t] + 1)
                        }
                    }
                }, t.prototype.isSlotEmpty = function(t, e) {
                    var a = this.board[t][e];
                    return null == a || void 0 == a || "" == a
                }, t.prototype.getPrice = function(t, e) {
                    return this.price[t] && this.price[t][e] ? this.price[t][e] : 0
                }, t.prototype.getMax = function(t) {
                    return this._max[t] || 1
                }, t.prototype.getFillCount = function(t) {
                    return this._fillCount[t] || 0
                }, t.prototype.getTotalMax = function() {
                    var t = 1;
                    for (var e in this._max)
                        if (this._max.hasOwnProperty(e)) {
                            var a = this._max[e];
                            a && (t = Math.max(t, a))
                        } return t
                }, t.prototype.isVideoUnLock = function(t) {
                    return !!(this.typeVideos && this.typeVideos[t] && this.typeVideos[t] >= 1)
                }, t.prototype.exportData = function() {
                    return {
                        key: t.SAVE_KEY,
                        value: {
                            board: this.board,
                            price: this.price,
                            max: this.getTotalMax()
                        }
                    }
                }, t.SAVE_KEY = "merge", t
            }();
        a.default = i, cc._RF.pop()
    }, {
        "../../../datas/const/CharacterConst": "CharacterConst"
    }],
    MergePanelUI: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "2b395FbtmNPxKWerZIShcbM", "MergePanelUI"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../../../framework/view/ViewBasic")),
            n = t("../../../common/UITips"),
            s = t("../../../../datas/const/PopupConst"),
            c = t("../../../../datas/const/EventConst"),
            p = t("../../../../framework/utils/NumberHelper"),
            l = t("../../../common/LogManager"),
            d = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.initSlots(), this.initUIClick(["btnShop", "btnCost", "btnRecycle"]), this.bindEvents([c.default.MERGE_DRAG_CANCEL, c.default.MERGE_UPDATE_BOARD, c.default.MERGE_COST, c.default.MERGE_SUCCESS, c.default.REWARD_GIFT, c.default.OPEN_GIFT]), this.updateHandTips()
                }, e.prototype.updateType = function(t) {
                    this._currentType != t && (this._currentType = t, this.updateSlots(), this.onUpdateMergeCost(), this.updateHandTips())
                }, e.prototype.onUIClick = function(t, e) {
                    switch (e) {
                        case "btnShop":
                            this.sendEvent(c.default.UI_SHOW_SHOP_PANEL, {});
                            break;
                        case "btnCost":
                            this.onClickCost();
                            break;
                        case "btnRecycle":
                            n.default.show("uitips_recycle_empty")
                    }
                }, e.prototype.onEvents = function(t, e) {
                    switch (t) {
                        case c.default.MERGE_DRAG_CANCEL:
                            this.onListenDragEnd(e);
                            break;
                        case c.default.MERGE_UPDATE_BOARD:
                            this.onUpdateBoard(e);
                            break;
                        case c.default.MERGE_COST:
                        case c.default.MERGE_SUCCESS:
                            this.onUpdateMergeCost();
                            break;
                        case c.default.REWARD_GIFT:
                            this.updateGiftSlots(e);
                            break;
                        case c.default.OPEN_GIFT:
                            this.openSlotGift(e)
                    }
                }, e.prototype.initSlots = function() {
                    if (!this._itemList) {
                        this._itemList = [];
                        for (var t = this.getChildByPath(this.node, "container"), e = this.getChildByPath(this.node, "ItemPrefab"), a = 0, r = 0, i = 0; i < 12; i++) {
                            var o = cc.instantiate(e);
                            o.parent = t, o.getComponent("MergeItemUI").initData(i), a = -e.width / 2 + (i % 4 + 1) * (e.width + 38), r = e.height / 2 + 38 - (Math.floor(i / 4) + 1) * (e.height + 38), o.x = a, o.y = r, this._itemList.push(o)
                        }
                        e.active = !1
                    }
                }, e.prototype.updateSlots = function() {
                    var t = App.MergeController.Board[this._currentType];
                    this.initSlots();
                    for (var e = 0; e < t.length; e++) {
                        var a = t[e];
                        this._itemList[e].getComponent("MergeItemUI").updateData(this._currentType, a)
                    }
                }, e.prototype.updateGiftSlots = function(t) {
                    for (var e = 0, a = this._itemList; e < a.length; e++) {
                        var r = a[e].getComponent("MergeItemUI");
                        if (r.getCharacterType() == t.type && r.getSlotIndex() == t.slotIndex) {
                            r.showGift(t);
                            break
                        }
                    }
                }, e.prototype.openSlotGift = function(t) {
                    for (var e = function() {
                            var e = i.getComponent("MergeItemUI");
                            t.forEach(function(t) {
                                e.getCharacterType() == t.type && e.getSlotIndex() == t.slotIndex && e.openGift()
                            })
                        }, a = 0, r = this._itemList; a < r.length; a++) {
                        var i = r[a];
                        e()
                    }
                }, e.prototype.onUpdateMergeCost = function() {
                    var t = this.getChildByPath(this.node, "btnCost"),
                        e = App.MergeController.getBuyableLevel(this._currentType);
                    this.setLabel(this.getChildByPath(t, "Background.tLevel"), "Lv." + e);
                    var a = App.MergeController.getBuyableCost(this._currentType);
                    this.setLabel(this.getChildByPath(t, "Background.tCost"), p.default.unitFormat(a))
                }, e.prototype.onClickCost = function() {
                    var t = App.MergeController.getBuyableLevel(this._currentType),
                        e = App.MergeController.getBuyableCost(this._currentType);
                    if (e > App.PlayerController.Coin) return App.PopupManager.show(s.PopupConst.FREE_COINS), void l.default.getInstance().add({
                        tag: 23
                    });
                    for (var a = !0, r = 0, i = this._itemList; r < i.length; r++) {
                        var o = i[r].getComponent("MergeItemUI");
                        if (o.isEmpty()) {
                            o.updateData(this._currentType, t), a = !1, App.MergeController.add(this._currentType, o.getSlotIndex(), t), App.PlayerController.costCoins(e);
                            break
                        }
                    }
                    a && n.default.show("Đã đầy các ô!"), this.updateHandTips()
                }, e.prototype.onUpdateBoard = function(t) {
                    var e = this,
                        a = this;
                    t.forEach(function(t) {
                        var r = e._itemList[t[0]];
                        r && t[2] == a._currentType && r.getComponent("MergeItemUI").updateData(a._currentType, t[1])
                    }), this.updateHandTips()
                }, e.prototype.getGiftPosition = function(t) {
                    var e = this.node.parent.parent.getChildByName("panel");
                    if (e.y < 0) return (o = e.parent.getChildByName("btnShow").convertToWorldSpaceAR(cc.v2(0, 0))).x = o.x - cc.winSize.width / 2, o.y = o.y - cc.winSize.height / 2, o;
                    var a = cc.v2(0, 0);
                    if (this._currentType == t.type) {
                        var r = this._itemList[t.slotIndex];
                        if (r)(o = r.convertToWorldSpaceAR(cc.v2(0, 0))).x = o.x - cc.winSize.width / 2, o.y = o.y - cc.winSize.height / 2, a = o
                    } else {
                        var i = this.node.parent.getChildByName("menuPanel");
                        if (i) {
                            var o, n = i.getChildByName("container").getChildByName(t.type);
                            if (n)(o = n.convertToWorldSpaceAR(cc.v2(0, 0))).x = o.x - cc.winSize.width / 2, o.y = o.y - cc.winSize.height / 2, a = o
                        }
                    }
                    return a
                }, e.prototype.updateHandTips = function() {
                    var t = this.node.getChildByName("handNode");
                    t.active = !1, App.MergeController.getFillCount(this._currentType) < 3 && (t.active = !0)
                }, e.prototype.onListenDragEnd = function(t) {
                    var e = t.event.getLocation(),
                        a = this.getChildByPath(this.node, "btnRecycle"),
                        r = a.getBoundingBox(),
                        i = a.parent.convertToNodeSpaceAR(e);
                    if (r.contains(i)) return App.MergeController.recycle(this._currentType, t.slotIndex), void cc.loader.loadRes("prefabs/components/recycle", cc.Prefab, function(t, e) {
                        var r = cc.instantiate(e);
                        a.addChild(r)
                    });
                    var o = this.getChildByPath(this.node, "roleDress"),
                        s = o.getBoundingBox(),
                        c = o.parent.convertToNodeSpaceAR(e);
                    if (s.contains(c)) {
                        var p = {
                            type: this._currentType,
                            id: t.characterID
                        };
                        App.DressController.isDressed(p) ? n.default.show("Đã mặc cùng một bộ quần áo rồi ~") : App.DressController.onDress(p)
                    }
                    for (var l = !1, d = 0; d < this._itemList.length; d++) {
                        var h = this._itemList[d],
                            u = h.getBoundingBox(),
                            f = h.parent.convertToNodeSpaceAR(e);
                        if (u.contains(f)) {
                            var m = h.getComponent("MergeItemUI");
                            if (!m.isGift()) {
                                var _ = App.MergeController.merge(this._currentType, m.getSlotIndex(), t.slotIndex);
                                if (l = _.dragSuc, _.mergeSuc) {
                                    this.showMergeEffects(h);
                                    break
                                }
                            }
                        }
                    }
                    if (!l) {
                        var g = this._itemList[t.slotIndex];
                        g && g.getComponent("MergeItemUI").dragReset()
                    }
                }, e.prototype.showMergeEffects = function(t) {
                    cc.loader.loadRes("prefabs/components/Hcheng_ef", cc.Prefab, function(e, a) {
                        var r = cc.instantiate(a);
                        t.addChild(r)
                    })
                }, e.prototype.handleAutoMerge = function() {
                    var t = App.MergeController.computeAutoMergeGroup(this._currentType);
                    if (t) {
                        if (2 == t.length) {
                            var e = this._itemList[t[0][0]],
                                a = this._itemList[t[1][0]],
                                r = e.getComponent("MergeItemUI").getImageNode(),
                                i = a.getComponent("MergeItemUI").getImageNode();
                            if (i && 0 == i.x && 0 == i.y && r && 0 == r.x && 0 == r.y) {
                                var o = this,
                                    n = cc.instantiate(i);
                                a.parent.addChild(n, a.parent.childrenCount), n.position = a.position, i.active = !1, n.runAction(cc.sequence(cc.moveTo(.5, e.position), cc.callFunc(function() {
                                    n && n.parent && n.removeFromParent(), App.MergeController.merge(o._currentType, t[0][0], t[1][0])
                                })))
                            }
                        }
                    } else App.MergeController.handleAutoMerge(this._currentType)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = d, cc._RF.pop()
    }, {
        "../../../../datas/const/EventConst": "EventConst",
        "../../../../datas/const/PopupConst": "PopupConst",
        "../../../../framework/utils/NumberHelper": "NumberHelper",
        "../../../../framework/view/ViewBasic": "ViewBasic",
        "../../../common/LogManager": "LogManager",
        "../../../common/UITips": "UITips"
    }],
    NumberHelper: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "b1aabg+T9FAHJKeBXqI4Gay", "NumberHelper"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return t.unitFormat = function(t) {
                var e = 0;
                for (t = Math.floor(t); t > 999999;) t = Math.floor(.001 * t), e++;
                var a = "" + t,
                    r = a.length,
                    i = a;
                r > 3 && (i = a.substr(0, r - 3) + "," + a.substr(r - 3, 3));
                return i += ["", "K", "M", "B", "T", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI"][e]
            }, t.isOneDay = function(t, e) {
                var a = new Date(t),
                    r = new Date(e);
                return a.getFullYear() == r.getFullYear() && a.getMonth() == r.getMonth() && a.getDate() == r.getDate()
            }, t.isFirstDay = function(t) {
                return (new Date).getTime() / 1e3 - t < 86400
            }, t.isNewDay = function(t) {
                var e = new Date,
                    a = new Date(t);
                return e.getFullYear() > a.getFullYear() || e.getMonth() > a.getMonth() || e.getDate() > a.getDate()
            }, t.formatSeconds = function(t) {
                var e = parseInt(t),
                    a = Math.floor(e / 3600) < 10 ? "0" + Math.floor(e / 3600) : Math.floor(e / 3600),
                    r = Math.floor(e / 60 % 60) < 10 ? "0" + Math.floor(e / 60 % 60) : Math.floor(e / 60 % 60),
                    i = Math.floor(e % 60) < 10 ? "0" + Math.floor(e % 60) : Math.floor(e % 60),
                    o = "";
                return "00" !== a && (o += a + "\u65f6"), "00" !== r && (o += r + "phút"), o += i + "giây"
            }, t.formatSecondsRemain = function(t) {
                var e = parseInt(t),
                    a = Math.floor(e / 3600) < 10 ? "0" + Math.floor(e / 3600) : Math.floor(e / 3600),
                    r = Math.floor(e / 60 % 60) < 10 ? "0" + Math.floor(e / 60 % 60) : Math.floor(e / 60 % 60),
                    i = Math.floor(e % 60) < 10 ? "0" + Math.floor(e % 60) : Math.floor(e % 60),
                    o = "";
                return "00" !== a && (o += a + ":"), o += r + ":", o += "" + i
            }, t.nowTime = function() {
                return Math.floor((new Date).getTime() / 1e3)
            }, t.getTimeDate = function(t) {
                var e = new Date(1e3 * t);
                return e.getFullYear() + "\u5e74" + e.getMonth() + "\u6708" + e.getDate() + "\u65e5"
            }, t.getTimeAgo = function(e) {
                var a = "",
                    r = t.nowTime() - e;
                return r < 3600 ? a = Math.ceil(r / 60) + "\u5206\u949f\u524d" : r >= 3600 && r < 86400 ? a = Math.ceil(r / 3600) + "\u5c0f\u65f6\u524d" : r >= 86400 && r < 604800 ? a = Math.ceil(r / 86400) + "\u5929\u524d" : r >= 604800 && r < 2592e3 ? a = Math.ceil(r / 604800) + "\u5468\u524d" : r >= 2592e3 && r < 31536e3 ? a = Math.ceil(r / 2592e3) + "\u4e2a\u6708\u524d" : r >= 31536e3 && (a = Math.ceil(r / 31536e3) + "\u5e74\u524d"), a
            }, t
        }();
        a.default = r, cc._RF.pop()
    }, {}],
    PKCalNode: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "7382crQ+95AkrFbEknRDDBP", "PKCalNode"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, [0, 68, 164, 258, 461, 685, 866, 1333, 1580, 2066, 2883, 3542, 4320, 4650, 5598, 6708, 8e3, 9504, 11248, 13272, 17155, 23328, 26729, 30588, 30588, 37430, 37430, 56784, 64676, 73608, 73608]),
            n = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.PrefabScoreItem = this.node.getChildByName("pk_score_label"), this.PrefabScoreItem.active = !1, this.node.active = !1, this._perScoreNode = this.node.getChildByName("progressScore"), this._perScoreNode.y = -595;
                    var e = App.I18n.get("popup_pk_scoreitem", [
                        ["score", 0]
                    ]);
                    this.setLabel(this._perScoreNode.getChildByName("label"), e), this._bar = this.node.getChildByName("progressBar"), this._bar.getComponent(cc.ProgressBar).progress = 0, App.AudioManager.preload("score")
                }, e.prototype.setData = function(t, e) {
                    this._scores = t, this._resultCb = e, this._cal_idx = 0, this._bar.height = 0, this._perScoreNode.y = -595;
                    var a = App.I18n.get("popup_pk_scoreitem", [
                        ["score", 0]
                    ]);
                    this.setLabel(this._perScoreNode.getChildByName("label"), a), this.playScoreLabel(this._scores[this._cal_idx]), this.node.active = !0
                }, e.prototype.playScoreLabel = function(t) {
                    var e = cc.instantiate(this.PrefabScoreItem);
                    e.getComponent("PKScoreItem").setData(t), this.node.addChild(e), e.active = !0;
                    var a = this;
                    e.runAction(cc.sequence(cc.moveBy(.2, cc.v2(0, 50)), cc.fadeIn(.2), cc.delayTime(1), cc.fadeOut(.5), cc.removeSelf(!0), cc.callFunc(function() {
                        a.playProgressScore()
                    })))
                }, e.prototype.playProgressScore = function() {
                    for (var t = 0, e = 0; e < this._scores.length; e++) {
                        var a = this._scores[e];
                        e <= this._cal_idx && (t += a)
                    }
                    t = Math.floor(t);
                    var r = App.I18n.get("popup_pk_scoreitem", [
                        ["score", t]
                    ]);
                    this.setLabel(this._perScoreNode.getChildByName("label"), r);
                    var i = this,
                        n = App.MergeController.LevelMax,
                        s = o[n],
                        c = this._scores[this._cal_idx],
                        p = (c = Math.min(c, s)) / s;
                    this._perScoreNode.stopAllActions(), this._effectID = App.AudioManager.playEffect("score");
                    var l = cc.sequence(cc.moveBy(1, cc.v2(0, 940 * p)).easing(cc.easeIn(3)), cc.delayTime(.5), cc.callFunc(function() {
                        App.AudioManager.stopEffect(i._effectID), i._cal_idx + 1 != i._scores.length ? (i._cal_idx = i._cal_idx + 1, i.playScoreLabel(i._scores[i._cal_idx])) : i.playResult()
                    }));
                    this._perScoreNode.runAction(l), this._bar.getComponent(cc.ProgressBar).progress = t / s
                }, e.prototype.playResult = function() {
                    console.log("result = ", this._cal_idx), this._resultCb && this._resultCb(), this.node.active = !1
                }, e.prototype.hide = function() {
                    this.node.active = !1
                }, e = __decorate([i], e)
            }(t("../../../framework/view/ViewBasic").default);
        a.default = n, cc._RF.pop()
    }, {
        "../../../framework/view/ViewBasic": "ViewBasic"
    }],
    PKHelper: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "ab619xw7XpOWZJJ20XUkA1h", "PKHelper"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("../../datas/configs/BagConfig"),
            i = t("../../datas/configs/ClothConfig"),
            o = function() {
                function t() {}
                return t.init = function() {
                    for (var e = [], a = 0; a < 4; a++) {
                        var r = App.MergeController.getMax(this.KEYS[a]);
                        e.push(Number(r))
                    }
                    var i = [];
                    this.KEYS.forEach(function(t) {
                        var e = App.BagController.getItemGroup(t);
                        e && e.forEach(function(e) {
                            if (e && Number(e) > 30) {
                                var a = [t, e];
                                i.push(a)
                            }
                        })
                    }), cc.log("PKHelper: ", e, i);
                    var o = [e, i],
                        n = this.combinations(e, i);
                    t._hadChanged = !1;
                    var s = cc.sys.localStorage.getItem("pk_help_group");
                    if (s) {
                        var c = JSON.parse(s);
                        if (cc.log("cacheResult = ", c), o[1].length > c[1].length) t._hadChanged = !0;
                        else
                            for (a = 0; a < c[0].length; a++) {
                                if (c[0][a] != o[0][a]) {
                                    t._hadChanged = !0;
                                    break
                                }
                            }
                    }
                    return cc.sys.localStorage.setItem("pk_help_group", JSON.stringify(o)), cc.log("result = ", n, t._hadChanged), n
                }, t.hadChanged = function() {
                    return t._hadChanged
                }, t.combinations = function(e, a) {
                    for (var r = [], i = 1; i < 13; i++) r.push(t._findBestClothesByAttrindex(i, e, a));
                    return r
                }, t._findBestClothesByAttrindex = function(e, a, r) {
                    r.sort(function(t, e) {
                        return Number(e[1]) - Number(t[1])
                    });
                    var i, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                    i = t.findMaxLvByAttr(e, a, r, o);
                    var n = t.dressTypeCloths(0, e, i, a, r, o),
                        s = t.dressTypeCloths(1, e, i, a, r, o),
                        c = t.dressTypeCloths(2, e, i, a, r, o),
                        p = t.dressTypeCloths(3, e, i, a, r, o),
                        l = t._findBestMultyItemByType(t.KEYS[4], r),
                        d = t._findBestMultyItemByType(t.KEYS[5], r),
                        h = 1,
                        u = 0,
                        f = 0;
                    null != l && (u = Number(l.id), h *= 1 + Number(l.attr1) / 100), null != d && (f = Number(d.id), h *= 1 + Number(d.attr1) / 100);
                    var m = [];
                    return m.push(n), m.push(s), m.push(c), m.push(p), m.push(u), m.push(f), m.push(o[e - 1] * h), m
                }, t.findMaxLvByAttr = function(e, a, o, n) {
                    o.sort(function(t, e) {
                        return Number(e[1]) - Number(t[1])
                    });
                    for (var s = [0, 0, 0], c = null, p = 0; p < 4; p++)
                        for (var l = a[p]; l > 0; l--) {
                            var d = i.default[t.KEYS[p]][l + ""];
                            if (d && t._isMainPropertyOfCloth(d, e)) {
                                l > s[1] && (s[0] = p, s[1] = l, s[2] = Number(d["attr" + e]), c = d);
                                break
                            }
                        }
                    if (o)
                        for (var h = 0; h < o.length; h++) {
                            var u = o[h],
                                f = !1;
                            for (p = 0; p < 4; p++)
                                if (u[0] == t.KEYS[p]) {
                                    f = !0;
                                    break
                                } if (f) {
                                var m = r.default[u[0]][u[1]];
                                m && t._isMainPropertyOfItem(m, e) && Number(m["attr" + e]) > s[2] && (s[0] = p, s[1] = Number(u[1]), s[2] = Number(m["attr" + e]), c = m)
                            }
                        }
                    if (c)
                        for (p = 0; p < 12; p++) n[p] = n[p] + Number(c["attr" + (p + 1)]);
                    return s
                }, t.dressTypeCloths = function(e, a, r, i, o, n) {
                    if (t.KEYS[e] == t.KEYS[r[0]]) return r[1];
                    var s = r[1];
                    return s > 100 && (s = i[e]), t._dressOnByType(t.KEYS[e], a, s, o, n)
                }, t._dressOnByType = function(t, e, a, o, n) {
                    for (var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], c = 0, p = [], l = 0; l < o.length; l++) {
                        if ((p = o[l])[0] == t)
                            if (g = r.default[t][p[1]]) {
                                var d = !0;
                                c = n[e - 1] + Number(g["attr" + e]);
                                for (var h = 0; h < 12; h++)
                                    if (s[h] = n[h] + Number(g["attr" + (h + 1)]), h != e - 1 && s[h] > c) {
                                        d = !1, s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], c = 0, p = [];
                                        break
                                    } if (d) break
                            }
                    }
                    for (var u = [], f = a; f > 0; f--) {
                        (g = i.default[t][f + ""]) && u.push([f, g["attr" + e]])
                    }
                    u.sort(function(t, e) {
                        return Number(e[1]) - Number(t[1])
                    });
                    for (var m = 0, _ = 0; _ < u.length; _++) {
                        var g;
                        l = u[_][0];
                        if (g = i.default[t][l + ""]) {
                            if ((m = n[e - 1] + Number(g["attr" + e])) < c) {
                                for (h = 0; h < 12; h++) n[h] = s[h];
                                return Number(p[1])
                            }
                            for (d = !0, h = 0; h < 12; h++)
                                if (h != e - 1 && (s[h] = n[h] + Number(g["attr" + (h + 1)]), s[h] > m)) {
                                    d = !1, m = 0;
                                    break
                                } if (d) {
                                for (h = 0; h < 12; h++) n[h] = n[h] + Number(g["attr" + (h + 1)]);
                                return l
                            }
                        }
                    }
                    return 1
                }, t._checkTypeAttrMax = function(t, e, a) {
                    for (var o = [], n = 0; n < 12; n++) o.push([0, 0]);
                    for (var s = Math.max(e - 12, 0); s <= e; s++) {
                        if (c = i.default[t][s + ""])
                            for (n = 0; n < 12; n++) Number(c["attr" + (n + 1)]) > o[n][1] && (o[n][0] = s, o[n][1] = Number(c["attr" + (n + 1)]))
                    }
                    for (s = 0; s < a.length; s++) {
                        var c, p = a[s];
                        if (p[0] == t)
                            if (c = r.default[t][p[1]])
                                for (n = 0; n < 12; n++) Number(c["attr" + (n + 1)]) > o[n][1] && (o[n][0] = s, o[n][1] = Number(c["attr" + (n + 1)]))
                    }
                    return o
                }, t._findBestMultyItemByType = function(t, e) {
                    if (e)
                        for (var a = 0; a < e.length; a++) {
                            var i = e[a];
                            if (i[0] == t) {
                                var o = r.default[t][i[1]];
                                if (o) return o
                            }
                        }
                    return null
                }, t._isMainPropertyOfCloth = function(t, e) {
                    return Number(t.top1) == e || Number(t.top2) == e
                }, t._isMainPropertyOfItem = function(t, e) {
                    return t.mainattrs.indexOf("," + e + ",") > -1
                }, t.KEYS = ["hair", "cloth", "trous", "shoe", "hat", "face"], t._hadChanged = !1, t
            }();
        a.default = o, cc._RF.pop()
    }, {
        "../../datas/configs/BagConfig": "BagConfig",
        "../../datas/configs/ClothConfig": "ClothConfig"
    }],
    PKScoreItem: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "88b6fbS5xtKOpK04JmcQPG0", "PKScoreItem"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = r.property,
            n = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.score_label = null, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this)
                }, e.prototype.setData = function(t) {
                    t = Math.floor(t);
                    var e = App.I18n.get("popup_pk_scoreitem", [
                        ["score", t]
                    ]);
                    this.setLabel(this.score_label.node, e)
                }, __decorate([o(cc.Label)], e.prototype, "score_label", void 0), e = __decorate([i], e)
            }(t("../../../framework/view/ViewBasic").default);
        a.default = n, cc._RF.pop()
    }, {
        "../../../framework/view/ViewBasic": "ViewBasic"
    }],
    PlatformManager: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "4d0e3Vv215MOqCNLc1yT3KU", "PlatformManager"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("./src/Weixin"),
            i = t("./src/H5"),
            o = t("./src/QQ"),
            n = t("./src/TT"),
            s = t("./src/FourthreeNine"),
            c = function() {
                function t() {}
                return t.getInstance = function() {
                    return this._instance || (this._instance = new t), this._instance
                }, t.prototype.init = function() {
                    if (console.log("window ======= ", window), window.qq) this._platform = new o.default;
                    else if (window.tt) this._platform = new n.default;
                    else if (window.h5api) this._platform = new s.default;
                    else switch (cc.sys.platform) {
                        case cc.sys.WECHAT_GAME:
                            this._platform = new r.default;
                            break;
                        default:
                            this._platform = new i.default
                    }
                }, t.prototype.login = function(t) {
                    this._platform.login(t)
                }, t.prototype.share = function(t) {
                    this._platform.share(t)
                }, t.prototype.shareScreen = function(t) {
                    this._platform.shareScreen(t)
                }, t.prototype.save = function(t, e) {
                    this._platform.save(t, e)
                }, t.prototype.initAds = function() {
                    this._platform.initAds()
                }, t.prototype.showVideo = function(t, e, a) {
                    var r = t.type,
                        i = t.id,
                        o = this;
                    this._platform.showVideo(r, function() {
                        e && e();
                        var t = {
                            id: i,
                            tag: 22
                        };
                        o.log(t), window.wx && o._platform.logUI(t)
                    }, a)
                }, t.prototype.showInterstitialAd = function() {
                    this._platform.showInterstitialAd()
                }, t.prototype.hideInterstitialAd = function() {
                    this._platform.hideInterstitialAd()
                }, t.prototype.showBannerAd = function() {
                    this._platform.showBannerAd()
                }, t.prototype.log = function(t) {
                    this._platform.log(t)
                }, t.prototype.hideBannerAd = function() {
                    this._platform.hideBannerAd()
                }, t.prototype.initGameScene = function() {
                    this._platform.initGameScene()
                }, t.prototype.clearLocalData = function() {
                    this._platform.clearLocalData()
                }, t.prototype.getInitData = function(t) {
                    return this._platform.getInitData(t)
                }, t.prototype.getUserInfo = function() {
                    return this._platform.getUserInfo()
                }, t.prototype.getPlatform = function() {
                    return this._platform
                }, t.prototype.getRanks = function(t, e, a) {
                    this._platform.getRanks(t, e, a)
                }, t.prototype.getOfflineTime = function() {
                    return this._platform.getOfflineTime()
                }, t.prototype.getLastUpdateTime = function() {
                    return this._platform.getLastUpdateTime()
                }, t.prototype.setCreatedTime = function(t) {
                    this._created_at = t
                }, t.prototype.getCreatedTime = function() {
                    return this._created_at
                }, t
            }();
        a.default = c, cc._RF.pop()
    }, {
        "./src/FourthreeNine": "FourthreeNine",
        "./src/H5": "H5",
        "./src/QQ": "QQ",
        "./src/TT": "TT",
        "./src/Weixin": "Weixin"
    }],
    PlayerController: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "b4a49pHOpRGJoyxi4WGYiUt", "PlayerController"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("./datas/PlayerData"),
            i = t("../../datas/const/EventConst"),
            o = t("../../framework/utils/NumberHelper"),
            n = t("../common/DataStoreManager"),
            s = t("../../datas/configs/GameConfig"),
            c = t("../../framework/platform/PlatformManager"),
            p = function() {
                function t() {
                    this.touchScreenTime = 0, this._adUseTime = 0
                }
                return t.getInstance = function() {
                    return this._instance || (this._instance = new t), this._instance
                }, t.prototype.init = function() {
                    var t = this;
                    this._playerData = new r.default(this.importData());
                    var e = this;
                    setInterval(function() {
                        if (0 == t._adUseTime && (t._adUseTime = o.default.nowTime()), window.App) {
                            var a = t.getTotalEarning();
                            e.rewardCoins(a, !0)
                        }
                        if (o.default.nowTime() - e.touchScreenTime >= 180) {
                            e.touchScreenTime = o.default.nowTime(), c.default.getInstance().showInterstitialAd();
                            var r = c.default.getInstance().getPlatform();
                            r.traceLog && r.traceLog()
                        }
                        o.default.nowTime() - e._adUseTime >= 240 && (e._adUseTime = o.default.nowTime(), c.default.getInstance().hideInterstitialAd())
                    }, 1e3)
                }, t.prototype.resetOffScreenTime = function() {
                    this.touchScreenTime = o.default.nowTime(), this._adUseTime = o.default.nowTime()
                }, t.prototype.getTotalEarning = function() {
                    var t = App.MergeController.getEarning();
                    return this._playerData.coinSpeedEndAt > Math.floor((new Date).getTime() / 1e3) && (t *= 5), t *= s.RankConfig[this._playerData.rank].earning
                }, t.prototype.rewardCoins = function(t, e) {
                    t <= 0 || (this._playerData.coin = this._playerData.coin + t, App.EventManager.emitEvent(i.default.UI_COIN, {}), e || this.save())
                }, t.prototype.costCoins = function(t) {
                    if (0 != t) {
                        var e = this._playerData.coin;
                        e -= t, this._playerData.coin = Math.max(e, 0), App.EventManager.emitEvent(i.default.UI_COIN, {}), this.save()
                    }
                }, t.prototype.rewardDiamond = function(t) {
                    this._playerData.diamond = this._playerData.diamond + t, App.EventManager.emitEvent(i.default.UI_DIAMOND, {}), this.save()
                }, t.prototype.costDiamond = function(t) {
                    var e = this._playerData.diamond;
                    e -= t, this._playerData.diamond = Math.max(e, 0), App.EventManager.emitEvent(i.default.UI_DIAMOND, {}), this.save()
                }, t.prototype.rewardVit = function(t) {
                    this._playerData.vit = this._playerData.vit + t, App.EventManager.emitEvent(i.default.UI_VIT, {}), this.save()
                }, t.prototype.costVit = function(t) {
                    var e = this._playerData.vit;
                    e -= t, this._playerData.vit = Math.max(e, 0), App.EventManager.emitEvent(i.default.UI_VIT, {}), this.save()
                }, t.prototype.setTutorialStep = function(t) {
                    this._playerData.tutorialStep = t, t >= 100 && App.EventManager.emitEvent(i.default.TUTORIAL_COMPLETE, {}), this.save()
                }, t.prototype.setSignTime = function() {
                    this._playerData.signTime = (new Date).getTime(), this._playerData.signDay = this._playerData.signDay + 1, this.save()
                }, t.prototype.inviteSuccess = function() {
                    this._playerData.inviteRemain = this._playerData.inviteRemain - 1, this._playerData.lastInviteTime = (new Date).getTime(), this.save()
                }, t.prototype.setNextQuestIds = function(t, e) {
                    if ("merge" == e) this._playerData.quests[t] && (this._playerData.quests[t].per = this._playerData.quests[t].per + 1, this.save());
                    else {
                        var a = this._playerData.quests[0].per;
                        a = Math.max(a, this._playerData.quests[2].per), this._playerData.quests[t] && (this._playerData.quests[t].per = a + 1, this.save())
                    }
                }, t.prototype.setScores = function(t, e, a) {
                    e > (this._playerData.bestScores[t] || 0) && (this._playerData.bestScores[t] = e), this._playerData.updateBestDress(e, a);
                    for (var r = 0, i = 0; i < s.RankConfig.length; i++) this._playerData.bestDress && this._playerData.bestDress.score >= s.RankConfig[i].max && (r = i);
                    console.log("rank === ", r, this._playerData.rank), r > this._playerData.rank && (this._playerData.rank = r, this.rewardCoins(Number(s.RankConfig[r].reward)), console.log("\u5347\u7ea7 == ", s.RankConfig[r])), this.save()
                }, t.prototype.addMergeTimes = function() {
                    this._playerData.mergeTimes = this._playerData.mergeTimes + 1, this.save()
                }, t.prototype.useGift = function() {
                    var t = this._playerData.giftCount - 1;
                    t = Math.max(0, t), this._playerData.giftCount = t, this._playerData.lastGiftTime = (new Date).getTime(), this.save()
                }, t.prototype.useFreeCoinVideo = function() {
                    var t = this._playerData.freeCoinRemainTimes - 1;
                    t = Math.max(0, t), this._playerData.freeCoinRemainTimes = t, this._playerData.lastFreeCoinTime = (new Date).getTime(), this.save()
                }, t.prototype.useDrawCounts = function() {
                    var t = this._playerData.drawRemain;
                    t -= 1, t = Math.max(t, 0), this._playerData.drawRemain = t, this._playerData.lastDrawTime = (new Date).getTime(), this.save()
                }, t.prototype.addCoinSpeed = function() {
                    var t = o.default.nowTime();
                    this._playerData.coinSpeedEndAt < t && (this._playerData.coinSpeedEndAt = t), this._playerData.coinSpeedEndAt = this._playerData.coinSpeedEndAt + 300, this.save()
                }, t.prototype.addAutoMerge = function() {
                    var t = o.default.nowTime();
                    this._playerData.autoMergeEndAt < t && (this._playerData.autoMergeEndAt = t), this._playerData.autoMergeEndAt = this._playerData.autoMergeEndAt + 300, this.save()
                }, t.prototype.usePKRecommend = function() {
                    var t = this._playerData.pkRecommendRemain;
                    t -= 1, t = Math.max(t, 0), this._playerData.pkRecommendRemain = t, this._playerData.pkRecommendTime = (new Date).getTime(), this.save()
                }, t.prototype.save = function() {
                    n.default.getInstance().save()
                }, t.prototype.exportData = function() {
                    return this._playerData.exportData()
                }, t.prototype.importData = function() {
                    return n.default.getInstance().getInitData(r.default.SAVE_KEY)
                }, Object.defineProperty(t.prototype, "PkRecommendRemain", {
                    get: function() {
                        return this._playerData.pkRecommendRemain
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "AutoMergeEndAt", {
                    get: function() {
                        return this._playerData.autoMergeEndAt
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "CoinSpeedEndAt", {
                    get: function() {
                        return this._playerData.coinSpeedEndAt
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "CreatedTime", {
                    get: function() {
                        return this._playerData.created_at
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "FreeCoinTimes", {
                    get: function() {
                        return this._playerData.freeCoinRemainTimes
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "GiftCount", {
                    get: function() {
                        return this._playerData.giftCount
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "MergeTimes", {
                    get: function() {
                        return this._playerData.mergeTimes
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "QuestIds", {
                    get: function() {
                        return this._playerData.quests
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "Coin", {
                    get: function() {
                        return this._playerData.coin
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "Diamond", {
                    get: function() {
                        return this._playerData.diamond
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "SignDay", {
                    get: function() {
                        return this._playerData.signDay
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "Vit", {
                    get: function() {
                        return this._playerData.vit
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "BestScores", {
                    get: function() {
                        return this._playerData.bestScores
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "TodayDrawRemain", {
                    get: function() {
                        return this._playerData.drawRemain
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "LastDrawTime", {
                    get: function() {
                        return this._playerData.lastDrawTime
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "InviteRemain", {
                    get: function() {
                        return this._playerData.inviteRemain
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "Rank", {
                    get: function() {
                        return this._playerData.rank
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isTutorialComplete", {
                    get: function() {
                        return this._playerData.tutorialStep >= 100
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isTodaySign", {
                    get: function() {
                        return o.default.isOneDay(this._playerData.signTime, (new Date).getTime())
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.getScore = function(t) {
                    return this._playerData.bestScores[t] || 0
                }, t.prototype.getBestScore = function() {
                    var t = this._playerData.bestDress;
                    return t && t.score ? t.score : 0
                }, t
            }();
        a.default = p, cc._RF.pop()
    }, {
        "../../datas/configs/GameConfig": "GameConfig",
        "../../datas/const/EventConst": "EventConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../common/DataStoreManager": "DataStoreManager",
        "./datas/PlayerData": "PlayerData"
    }],
    PlayerData: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "bf8c4IzvEdDY7kztOXP8rU1", "PlayerData"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("../../../framework/platform/PlatformManager"),
            i = t("../../../framework/utils/NumberHelper"),
            o = t("../../../framework/utils/UIHelper"),
            n = function() {
                function t(t) {
                    if (this.tutorialStep = 0, this.coin = 2e4, this.diamond = 45, this.vit = 5, this.rank = 0, this.pkExp = 0, this.signDay = 0, this.signTime = 0, this.mergeTimes = 0, this.quests = [{
                            type: "PK",
                            per: 0
                        }, {
                            type: "merge",
                            per: 0
                        }, {
                            type: "PK",
                            per: 1
                        }], this.bestScores = {}, this.drawRemain = 5, this.lastDrawTime = 0, this.inviteRemain = 5, this.lastInviteTime = 0, this.giftCount = 288, this.lastFreeCoinTime = 0, this.created_at = Math.floor((new Date).getTime() / 1e3), this.coinSpeedEndAt = 0, this.autoMergeEndAt = 0, this.pkRecommendRemain = 1, this.pkRecommendTime = 0, t)
                        for (var e in t) this[e] = t[e];
                    i.default.isNewDay(this.lastInviteTime) && (this.inviteRemain = 5), i.default.isNewDay(this.lastDrawTime) && (this.drawRemain = 5), i.default.isNewDay(this.lastGiftTime) && (this.giftCount = 288), i.default.isNewDay(this.lastFreeCoinTime) && (this.freeCoinRemainTimes = 30), i.default.isNewDay(this.pkRecommendTime) && (this.pkRecommendRemain = 1), r.default.getInstance().setCreatedTime(this.created_at), o.default.isLowResolution && (this.tutorialStep = 100)
                }
                return t.prototype.updateBestDress = function(t, e) {
                    var a = t;
                    for (var r in this.bestScores) {
                        var i = this.bestScores[r];
                        a = Math.max(i, a)
                    }
                    var o = 0;
                    this.bestDress && this.bestDress.score && (o = this.bestDress.score), a > o && (this.bestDress = {
                        score: a,
                        data: e
                    })
                }, t.prototype.exportData = function() {
                    return {
                        key: t.SAVE_KEY,
                        value: {
                            tutorialStep: this.tutorialStep,
                            coin: this.coin,
                            diamond: this.diamond,
                            vit: this.vit,
                            signDay: this.signDay,
                            signTime: this.signTime,
                            mergeTimes: this.mergeTimes,
                            quests: this.quests,
                            bestScores: this.bestScores,
                            drawRemain: this.drawRemain,
                            lastDrawTime: this.lastDrawTime,
                            rank: this.rank,
                            userInfo: r.default.getInstance().getUserInfo(),
                            bestDress: this.bestDress,
                            inviteRemain: this.inviteRemain,
                            lastInviteTime: this.lastInviteTime,
                            giftCount: this.giftCount,
                            lastGiftTime: this.lastGiftTime,
                            lastFreeCoinTime: this.lastFreeCoinTime,
                            freeCoinRemainTimes: this.freeCoinRemainTimes,
                            created_at: this.created_at,
                            coinSpeedEndAt: this.coinSpeedEndAt,
                            autoMergeEndAt: this.autoMergeEndAt
                        }
                    }
                }, t.SAVE_KEY = "player", t
            }();
        a.default = n, cc._RF.pop()
    }, {
        "../../../framework/platform/PlatformManager": "PlatformManager",
        "../../../framework/utils/NumberHelper": "NumberHelper",
        "../../../framework/utils/UIHelper": "UIHelper"
    }],
    PopupAutoMerge: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "b4f6el5HhFNb5BloFUhEait", "PopupAutoMerge"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../framework/platform/PlatformManager"),
            s = t("../../framework/utils/NumberHelper"),
            c = t("../common/LogManager"),
            p = 0,
            l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.initUIClick(["btnVideo"]), this.delayHide(), n.default.getInstance().showBannerAd(), this._timer = setInterval(this.tick.bind(this), 1e3), this.tick()
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "btnVideo":
                            this.onClaim()
                    }
                }, e.prototype.hide = function() {
                    this._timer && clearInterval(this._timer), n.default.getInstance().hideBannerAd(), t.prototype.hide.call(this)
                }, e.prototype.tick = function() {
                    var t = App.PlayerController.AutoMergeEndAt;
                    t -= s.default.nowTime(), t = Math.max(0, t);
                    var e = this.node.getChildByName("tRemainTips"),
                        a = "00:00:00";
                    t > 0 && (a = s.default.formatSecondsRemain(t)), this.setLabel(e, "Thời gian tăng tốc còn lại:" + a);
                    var r = t / 3600;
                    this.node.getChildByName("progress").getComponent(cc.ProgressBar).progress = r;
                    var i = this.node.getChildByName("btnVideo");
                    i.getComponent(cc.Button).interactable = t < 3300;
                    var o = s.default.nowTime() - p > 10;
                    i.getComponent(cc.Button).interactable = o;
                    var n = s.default.nowTime() - p;
                    if (n >= 0 && n < 10) {
                        var c = s.default.formatSecondsRemain(10 - n);
                        this.setLabel(this.node.getChildByName("tRemainTime"), c)
                    } else this.setLabel(this.node.getChildByName("tRemainTime"), "")
                }, e.prototype.onClaim = function() {
                    var t = this;
                    n.default.getInstance().showVideo({
                        type: "30s",
                        id: 4
                    }, function() {
                        t.hide(), App.PlayerController.addAutoMerge(), p = s.default.nowTime()
                    }), c.default.getInstance().add({
                        tag: 4
                    })
                }, e = __decorate([i], e)
            }(o.default);
        a.default = l, cc._RF.pop()
    }, {
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/view/PopupBasic": "PopupBasic",
        "../common/LogManager": "LogManager"
    }],
    PopupBasic: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "d47a8BCdApE+oeJ6TVAYKVC", "PopupBasic"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this._viewData = this.node.viewData, this.node.setContentSize(cc.winSize.width, cc.winSize.height), this.node.x = cc.winSize.width / 2, this.node.y = cc.winSize.height / 2, this.initUIClick(["btnClose", "blockTouchPanel"])
                }, e.prototype.start = function() {}, e.prototype.setPopupTitle = function(t) {
                    var e = this.getChildByPath(this.node, "titleNode.tTitle");
                    this.setLabel(e, t)
                }, e.prototype.onUIClick = function(t, e) {
                    switch (e) {
                        case "btnClose":
                            this.hide();
                            break;
                        case "blockTouchPanel":
                            this._delayHide || this.hide()
                    }
                }, e.prototype.hide = function() {
                    App.PopupManager.hide(this._viewData.name)
                }, e.prototype.delayHide = function() {
                    this._delayHide = !0;
                    var t = this;
                    setTimeout(function() {
                        t._delayHide = !1
                    }, 3e3)
                }, e = __decorate([i], e)
            }(t("./ViewBasic").default));
        a.default = o, cc._RF.pop()
    }, {
        "./ViewBasic": "ViewBasic"
    }],
    PopupCoinDouble: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "7cc02ut8AJNwrrb1kd8l5eT", "PopupCoinDouble"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../framework/platform/PlatformManager"),
            s = t("../../framework/utils/NumberHelper"),
            c = t("../../datas/const/EventConst"),
            p = t("../common/LogManager"),
            l = 0,
            d = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.initUIClick(["btnVideo"]), this.delayHide(), n.default.getInstance().showBannerAd(), this._timer = setInterval(this.tick.bind(this), 1e3), this.tick()
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "btnVideo":
                            this.onClaim()
                    }
                }, e.prototype.hide = function() {
                    this._timer && clearInterval(this._timer), n.default.getInstance().hideBannerAd(), t.prototype.hide.call(this)
                }, e.prototype.tick = function() {
                    var t = App.PlayerController.CoinSpeedEndAt;
                    t -= s.default.nowTime(), t = Math.max(0, t);
                    var e = this.node.getChildByName("tRemainTips"),
                        a = "00:00:00";
                    t > 0 && (a = s.default.formatSecondsRemain(t)), this.setLabel(e, "Thời gian tăng tốc còn lại:" + a);
                    var r = t / 3600;
                    this.node.getChildByName("progress").getComponent(cc.ProgressBar).progress = r;
                    var i = this.node.getChildByName("btnVideo");
                    i.getComponent(cc.Button).interactable = t < 3300;
                    var o = s.default.nowTime() - l > 10;
                    i.getComponent(cc.Button).interactable = o;
                    var n = s.default.nowTime() - l;
                    if (n >= 0 && n < 10) {
                        var c = s.default.formatSecondsRemain(10 - n);
                        this.setLabel(this.node.getChildByName("tRemainTime"), c)
                    } else this.setLabel(this.node.getChildByName("tRemainTime"), "")
                }, e.prototype.onClaim = function() {
                    var t = this;
                    n.default.getInstance().showVideo({
                        type: "15s",
                        id: 2
                    }, function() {
                        t.hide(), App.PlayerController.addCoinSpeed(), t.sendEvent(c.default.UI_RANK, {}), cc.loader.loadRes("prefabs/components/jiasu", cc.Prefab, function(t, e) {
                            var a = cc.instantiate(e);
                            a.getChildByName("am").getComponent(cc.Animation).on("stop", function(t) {
                                cc.director.getScene().removeChild(a)
                            }), cc.director.getScene().addChild(a)
                        }), l = s.default.nowTime()
                    }), p.default.getInstance().add({
                        tag: 2
                    })
                }, e = __decorate([i], e)
            }(o.default);
        a.default = d, cc._RF.pop()
    }, {
        "../../datas/const/EventConst": "EventConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/view/PopupBasic": "PopupBasic",
        "../common/LogManager": "LogManager"
    }],
    PopupConst: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "0b8f5VIxKtHYr0v0ZJ02TPj", "PopupConst"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.PopupConst = {
            FREE_COINS: {
                name: "free_coin",
                path: "prefabs/popups/PopupFreeCoins",
                fullscreen: 0
            },
            FREE_COINS_QQ: {
                name: "free_coin_qq",
                path: "prefabs/popups/PopupFreeCoinsQQ",
                fullscreen: 0
            },
            MYSTERY: {
                name: "mystery",
                path: "prefabs/popups/PopupMystery",
                fullscreen: 1
            },
            OFFLINE_EARN: {
                name: "offline_earn",
                path: "prefabs/popups/PopupOfflineEarn",
                fullscreen: 0
            },
            PK: {
                name: "pk",
                path: "prefabs/popups/PopupPK",
                fullscreen: 1
            },
            PK_HELP: {
                name: "pk_help",
                path: "prefabs/popups/PopupPKHelp"
            },
            QUESTS: {
                name: "quests",
                path: "prefabs/popups/PopupQuests",
                fullscreen: 0
            },
            RANK: {
                name: "rank",
                path: "prefabs/popups/PopupRank",
                fullscreen: 0
            },
            TEST: {
                name: "test",
                path: "prefabs/popups/PopupTest",
                fullscreen: 1
            },
            SIGN: {
                name: "sign",
                path: "prefabs/popups/PopupDailySign",
                fullscreen: 0
            },
            UNLOCK: {
                name: "unlock",
                path: "prefabs/popups/PopupUnlock",
                fullscreen: 0
            },
            DRAW_PREVIEW: {
                name: "draw-preview",
                path: "prefabs/popups/PopupDrawPreview",
                fullscreen: 0
            },
            DRAW_EXCHANGE: {
                name: "draw-exchange",
                path: "prefabs/popups/PopupDrawExchange",
                fullscreen: 0
            },
            REWARD_SUCCESS: {
                name: "reward",
                path: "prefabs/popups/PopupRewardSuc",
                fullscreen: 0
            },
            NEW_RANK: {
                name: "newrank",
                path: "prefabs/popups/PopupNewRank",
                fullscreen: 0
            },
            TIPS: {
                name: "tips",
                path: "prefabs/popups/PopupTips",
                fullscreen: 0
            },
            PHOTO: {
                name: "photo",
                path: "prefabs/popups/PopupPhoto",
                fullscreen: 0
            },
            COIN_DOUBLE: {
                name: "coin_double",
                path: "prefabs/popups/PopupCoinDouble",
                fullscreen: 0
            },
            AUTO_MERGE: {
                name: "auto_merge",
                path: "prefabs/popups/PopupAutoMerge",
                fullscreen: 0
            },
            VISIT_SETTING: {
                name: "visit_setting",
                path: "prefabs/popups/PopupVisitSetting",
                fullscreen: 0
            },
            VISITOR: {
                name: "visitor",
                path: "prefabs/popups/PopupVisitor",
                fullscreen: 0
            },
            RECORDVIDEO: {
                name: "recordVideo",
                path: "prefabs/popups/PopupRecordVideo",
                fullscreen: 0
            },
            NAVIFATE_GIFT: {
                name: "navifate_gift",
                path: "prefabs/popups/PopupNavigateGift",
                fullscreen: 0
            }
        }, cc._RF.pop()
    }, {}],
    PopupDailySign: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "928d0s9T1hJD6IVLKSR1cjE", "PopupDailySign"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../datas/const/PopupConst"),
            s = t("../../datas/const/EventConst"),
            c = t("../../framework/utils/NumberHelper"),
            p = t("../../framework/platform/PlatformManager"),
            l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.setPopupTitle("popup_sign_title"), this._claimSuccess = this.node.getChildByName("claimSuccess"), this._claimSuccess.active = !1, this._btnSign = this.node.getChildByName("btnClaim"), this._btnVideo = this.node.getChildByName("btnVideo"), this.initUIClick(["claimSuccess", "btnClaim", "btnVideo"]), this._daysNode = new Array, this.initSignConfig(), this.updateSignViews(), this.delayHide(), p.default.getInstance().showBannerAd()
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "claimSuccess":
                            this._claimSuccess.active = !1;
                            break;
                        case "btnClaim":
                            this.onClaim();
                            break;
                        case "btnVideo":
                            var r = this;
                            p.default.getInstance().showVideo({
                                type: "30s",
                                id: 32
                            }, function() {
                                r.onClaim(!0)
                            })
                    }
                }, e.prototype.initSignConfig = function() {
                    var t = App.PlayerController.SignDay,
                        e = App.PlayerController.Diamond,
                        a = App.PlayerController.Vit;
                    this._today = t % 7, this._signConfig = [];
                    var r = App.MergeController.getTotalBuyableCost();
                    this._signConfig.push({
                        type: "gold",
                        count: r
                    }), t > 7 ? this._signConfig.push({
                        type: "diamond",
                        count: e + 5
                    }) : this._signConfig.push({
                        type: "hat",
                        id: "104"
                    }), this._signConfig.push({
                        type: "vit",
                        count: a + 5
                    }), this._signConfig.push({
                        type: "diamond",
                        count: e + 5
                    }), this._signConfig.push({
                        type: "gold",
                        count: 2 * r
                    }), this._signConfig.push({
                        type: "vit",
                        count: a + 5
                    }), t > 7 ? this._signConfig.push({
                        type: "diamond",
                        count: e + 5
                    }) : this._signConfig.push({
                        type: "face",
                        id: "103"
                    }), console.log("singData = ", this._signConfig, this._today)
                }, e.prototype.updateSignViews = function() {
                    var t = this,
                        e = App.PlayerController.SignDay;
                    this._today = e % 7;
                    var a = this.node.getChildByName("container"),
                        r = this.node.getChildByName("PrefabSignItem");
                    if (0 == this._daysNode.length)
                        for (var i = 0; i < this._signConfig.length - 1; i++) {
                            var o = cc.instantiate(r);
                            o.parent = a, this._daysNode.push(o)
                        }
                    var n = function(e) {
                            var a = s._daysNode[e],
                                r = App.I18n.get("popup_sign_day", [
                                    ["day", e + 1]
                                ]);
                            s.setLabel(a.getChildByName("tDay"), r);
                            var i = s._signConfig[e].count,
                                o = i ? "+" + c.default.unitFormat(i) : "";
                            s.setLabel(a.getChildByName("tReward"), o), a.getChildByName("bgToday").active = e == s._today, a.getChildByName("bgTomoro").active = e > s._today, a.getChildByName("imgClaimed").active = e < s._today, a.getChildByName("icons").children.forEach(function(a) {
                                a.active = a.name == t._signConfig[e].type
                            })
                        },
                        s = this;
                    for (i = 0; i < this._signConfig.length - 1; i++) n(i);
                    r.active = !1;
                    var p = this.node.getChildByName("7DayNode"),
                        l = App.I18n.get("popup_sign_day", [
                            ["day", 7]
                        ]);
                    this.setLabel(p.getChildByName("tDay"), l);
                    var d = this._signConfig[6];
                    p.getChildByName("face").active = "face" == d.type, p.getChildByName("img_rotation").active = p.getChildByName("face").active, p.getChildByName("diamond").active = "diamond" == d.type;
                    var h = d.count ? "+" + d.count : "";
                    this.setLabel(p.getChildByName("tReward"), h);
                    var u = App.PlayerController.isTodaySign,
                        f = App.I18n.get(u ? "popup_sign_btn_tomoro" : "popup_sign_btn_claim");
                    this.setLabel(this.getChildByPath(this._btnSign, "Background.Label"), f), this._btnSign.getComponent(cc.Button).interactable = !u, this._btnSign.getComponent(cc.Button).enabled = !u, this._btnVideo.getComponent(cc.Button).interactable = !u, this._btnVideo.getComponent(cc.Button).enabled = !u
                }, e.prototype.onClaim = function(t) {
                    if (!App.PlayerController.isTodaySign) {
                        var e = this._signConfig[this._today];
                        if (e) {
                            var a = e.count;
                            t && (a *= 2), "gold" == e.type ? App.PlayerController.rewardCoins(a) : "diamond" == e.type ? App.PlayerController.rewardDiamond(a) : "vit" == e.type ? App.PlayerController.rewardVit(a) : "hat" != e.type && "face" != e.type || App.BagController.rewardItem(e)
                        }
                        App.PlayerController.setSignTime(), this.sendEvent(s.default.UI_QUEST_UNREAD, {}), this.updateSignViews(), this._claimSuccess.active = !0, this._claimSuccess.getChildByName("rewards").children.forEach(function(t) {
                            t.active = t.name == e.type
                        });
                        var r = e.count ? "+" + c.default.unitFormat(e.count * (t ? 2 : 1)) : "\u8bf7\u5230\u8863\u67dc\u67e5\u770b";
                        this.setLabel(this._claimSuccess.getChildByName("tReward"), r);
                        var i = this._claimSuccess.getChildByName("lightBg");
                        i.scale = .6;
                        var o = cc.scaleTo(1, 1, 1);
                        i.runAction(o)
                    }
                }, e.prototype.hide = function() {
                    this._viewData && this._viewData.params && "quest" == this._viewData.params.from && App.PopupManager.show(n.PopupConst.QUESTS), p.default.getInstance().hideBannerAd(), t.prototype.hide.call(this)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = l, cc._RF.pop()
    }, {
        "../../datas/const/EventConst": "EventConst",
        "../../datas/const/PopupConst": "PopupConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/view/PopupBasic": "PopupBasic"
    }],
    PopupDrawExchange: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "a65e3T8LDpNtqOqr0A6El05", "PopupDrawExchange"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../datas/configs/DrawConfig"),
            s = t("../common/UITips"),
            c = t("../../framework/manager/LoaderManager"),
            p = t("../../framework/platform/PlatformManager"),
            l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.setPopupTitle("popup_mystery_exchange_title"), this.delayHide(), p.default.getInstance().showBannerAd(), this.initView(), this.initUIClick(["claimSuccess"])
                }, e.prototype.initView = function() {
                    var t = this;
                    this._successPanel = this.node.getChildByName("claimSuccess"), this.setLabel(this.getChildByPath(this.node, "claimSuccess.content.tTips"), "popup_mystery_exchange_tips"), this.setLabel(this.getChildByPath(this.node, "claimSuccess.content.lb_btn_share.tTitle"), "popup_mystery_exchange_btn_share"), this._successPanel.active = !1;
                    var e = this.node.getChildByName("PrefabItem");
                    e.active = !1, this._exchangeList = new Array;
                    var a = this.getChildByPath(this.node, "container.view.content"),
                        r = [];
                    n.DrawConfig.forEach(function(t) {
                        t.piece && Number(t.piece) > 0 && r.push(t)
                    });
                    var i = 0;
                    this.schedule(function() {
                        var o = r[i];
                        if (o && i != r.length - 1) {
                            if (o.piece && Number(o.piece) > 0) {
                                var n = t.getItemView(i % 2, e, o);
                                n.parent = a;
                                var s = App.BagController.hadItem(o.type, o.id);
                                n.getChildByName("btnExchange").active = !s, t._exchangeList.push({
                                    child: n,
                                    config: o
                                })
                            }
                            i += 1
                        } else t.updateExchangeList()
                    }, .01, r.length - 1, 0), a.height = (r.length - 1) * e.height + 40 * (r.length - 1)
                }, e.prototype.getItemView = function(t, e, a) {
                    var r = this,
                        i = cc.instantiate(e);
                    i.active = !0, i.getChildByName("bg1").active = 0 == t, i.getChildByName("bg2").active = 1 == t, i.getChildByName("superBg").active = parseInt(a.id) > 200, i.getChildByName("rareBg").active = parseInt(a.id) < 200, this.setLabel(i.getChildByName("tCost"), "x" + a.piece);
                    var o = i.getChildByName("btnExchange");
                    this.setLabel(this.getChildByPath(o, "Background.Label"), "popup_mystery_btn_exchange"), this.onClick(o, function() {
                        r.onClaimExchange(a)
                    }, this), this.setLabel(i.getChildByName("tGet"), "popup_mystery_state_had_exchange");
                    var n = App.CharacterConfHelper.getFrameUrl(a.type, a.id),
                        s = i.getChildByName("imageSpr").getComponent(cc.Sprite);
                    return s.node.active = !1, c.default.getInstance().loadSpriteFrame(n, function(t) {
                        s.spriteFrame = t, s.node.active = !0
                    }), i
                }, e.prototype.updateExchangeList = function() {
                    this._exchangeList.forEach(function(t) {
                        var e = App.BagController.hadItem(t.config.type, t.config.id);
                        t.child.getChildByName("btnExchange").active = !e
                    })
                }, e.prototype.onClaimExchange = function(t) {
                    var e = App.PlayerController.Diamond,
                        a = Number(t.piece);
                    if (Number(t.piece) > e) s.default.show("popup_mystery_exchange_limit");
                    else {
                        App.PlayerController.costDiamond(a), App.BagController.rewardItem(t), this.updateExchangeList(), s.default.show("popup_mystery_exchange_success");
                        var r = this._successPanel.getChildByName("content"),
                            i = r.getChildByName("lightBg");
                        i.scale = .6, this._successPanel.active = !0;
                        var o = cc.scaleTo(1, 1, 1);
                        i.runAction(o);
                        var n = App.CharacterConfHelper.getFrameUrl(t.type, t.id),
                            p = r.getChildByName("imageSpr").getComponent(cc.Sprite);
                        p.node.active = !1, c.default.getInstance().loadSpriteFrame(n, function(t) {
                            p.spriteFrame = t, p.node.active = !0
                        })
                    }
                }, e.prototype.onUIClick = function(e, a) {
                    t.prototype.onUIClick.call(this, e, a), "claimSuccess" == a && (this._successPanel.active = !1)
                }, e.prototype.hide = function() {
                    p.default.getInstance().hideBannerAd(), t.prototype.hide.call(this)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = l, cc._RF.pop()
    }, {
        "../../datas/configs/DrawConfig": "DrawConfig",
        "../../framework/manager/LoaderManager": "LoaderManager",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/view/PopupBasic": "PopupBasic",
        "../common/UITips": "UITips"
    }],
    PopupDrawPreview: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "618098aTvNExrRtokpAdmx1", "PopupDrawPreview"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../datas/configs/DrawConfig"),
            s = t("../../framework/manager/LoaderManager"),
            c = t("../../framework/platform/PlatformManager"),
            p = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.setPopupTitle("popup_mystery_preview_title"), this.delayHide(), c.default.getInstance().showBannerAd(), this._clonePrefabItem = this.getChildByPath(this.node, "PrefabItem"), this.initView()
                }, e.prototype.start = function() {}, e.prototype.initView = function() {
                    var t = this,
                        e = this.getChildByPath(this.node, "container.view.content.sr_items"),
                        a = this.getChildByPath(this.node, "container.view.content.r_items");
                    n.DrawConfig.forEach(function(r) {
                        "gold" == r.type || "piece" == r.type || "vit" == r.type || (200 < parseInt(r.id) ? e.addChild(t.getItemView(r, "superrareBg")) : 100 < parseInt(r.id) && a.addChild(t.getItemView(r, "rareBg")))
                    }), this._clonePrefabItem.active = !1
                }, e.prototype.getItemView = function(t, e) {
                    var a = cc.instantiate(this._clonePrefabItem);
                    a.getChildByName("rareBg").active = "rareBg" == e, a.getChildByName("superrareBg").active = "superrareBg" == e;
                    var r = App.CharacterConfHelper.getFrameUrl(t.type, t.id),
                        i = a.getChildByName("imageSpr").getComponent(cc.Sprite);
                    return i.node.active = !0, s.default.getInstance().loadSpriteFrame(r, function(t) {
                        i.spriteFrame = t, i.node.active = !0
                    }), a
                }, e.prototype.hide = function() {
                    c.default.getInstance().hideBannerAd(), t.prototype.hide.call(this)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = p, cc._RF.pop()
    }, {
        "../../datas/configs/DrawConfig": "DrawConfig",
        "../../framework/manager/LoaderManager": "LoaderManager",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/view/PopupBasic": "PopupBasic"
    }],
    PopupFreeCoinsQQ: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "e555fTazNpEC4Q6qrYnnrhe", "PopupFreeCoinsQQ"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../common/UITips"),
            s = t("../../framework/utils/NumberHelper"),
            c = t("../../framework/platform/PlatformManager"),
            p = t("../common/LogManager"),
            l = 0,
            d = 0,
            h = 0,
            u = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.setPopupTitle("popup_freecoin_title");
                    var e = this.node.getChildByName("btnVideo");
                    this.setLabel(this.getChildByPath(e, "Background.Label"), "popup_freecoin_btn_video"), this.initUIClick(["btnVideo"]), this._rewardCoin = 3600 * App.PlayerController.getTotalEarning(), this._videoReward = 3600 * App.PlayerController.getTotalEarning(), 30 == App.PlayerController.FreeCoinTimes ? (this.setLabel(this.getChildByPath(e, "Background.Label"), "popup_freecoin_btn_video_special"), this._videoReward = 18e3 * App.PlayerController.getTotalEarning(), this.node.getChildByName("tTips").active = !0) : this.node.getChildByName("tTips").active = !1, this.setLabel(this.node.getChildByName("tReward"), "+ " + s.default.unitFormat(this._videoReward));
                    this._rewardCoin;
                    0 == l && (l = Math.floor((new Date).getTime() / 1e3)), this._timer = setInterval(this.tick.bind(this), 1e3), this.tick(), h += 1, App.PlayerController.FreeCoinTimes <= 0 && h % 2 == 0 && c.default.getInstance().showInterstitialAd()
                }, e.prototype.tick = function() {
                    var t = this.node.getChildByName("btnVideo");
                    if (t.active) {
                        var e = s.default.nowTime() - d > 10;
                        t.getComponent(cc.Button).interactable = e;
                        var a = s.default.nowTime() - d;
                        if (a >= 0 && a < 10) {
                            var r = s.default.formatSecondsRemain(10 - a);
                            this.setLabel(this.node.getChildByName("tRemainTime"), r)
                        } else this.setLabel(this.node.getChildByName("tRemainTime"), "")
                    }
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "btnVideo":
                            this.onShowVideoAds()
                    }
                }, e.prototype.onShowVideoAds = function() {
                    if (App.PlayerController.FreeCoinTimes <= 0) n.default.show("Ngày mai trở lại!");
                    else {
                        var t = this,
                            e = 14;
                        30 == App.PlayerController.FreeCoinTimes && (e = 13), c.default.getInstance().showVideo({
                            type: "30s",
                            id: e
                        }, function() {
                            d = s.default.nowTime(), App.PlayerController.rewardCoins(t._videoReward), n.default.show("ad_reward_success"), App.PlayerController.useFreeCoinVideo(), t.hide()
                        }), p.default.getInstance().add({
                            tag: e
                        })
                    }
                }, e.prototype.hide = function() {
                    this._timer && clearInterval(this._timer), window.wx && wx.postMessage({
                        message: "clear"
                    }), t.prototype.hide.call(this)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = u, cc._RF.pop()
    }, {
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/view/PopupBasic": "PopupBasic",
        "../common/LogManager": "LogManager",
        "../common/UITips": "UITips"
    }],
    PopupFreeCoins: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "8f1071P4oVHULP/Wh4pKcgw", "PopupFreeCoins"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../common/UITips"),
            s = t("../../framework/utils/NumberHelper"),
            c = t("../../framework/platform/PlatformManager"),
            p = t("../../datas/const/PopupConst"),
            l = t("../common/LogManager"),
            d = 0,
            h = 0,
            u = 0,
            f = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    var e = this;
                    t.prototype.onLoad.call(this), this.setPopupTitle("popup_freecoin_title");
                    var a = this.node.getChildByName("btnVideo");
                    this.setLabel(this.getChildByPath(a, "Background.Label"), "popup_freecoin_btn_video"), this.initUIClick(["btnVideo"]), this._rewardCoin = 3600 * App.PlayerController.getTotalEarning(), this._videoReward = 3600 * App.PlayerController.getTotalEarning(), 30 == App.PlayerController.FreeCoinTimes ? (this.setLabel(this.getChildByPath(a, "Background.Label"), "popup_freecoin_btn_video_special"), this._videoReward = 18e3 * App.PlayerController.getTotalEarning(), this.node.getChildByName("tTips").active = !0) : this.node.getChildByName("tTips").active = !1, this.setLabel(this.node.getChildByName("tReward"), "+ " + s.default.unitFormat(this._videoReward)), this.setLabel(this.node.getChildByName("tDesc"), "Chỉ có 5 lời mời mỗi ngày ~");
                    var r = this._rewardCoin;
                    0 == d && (d = Math.floor((new Date).getTime() / 1e3)), window.wx && wx.onShareMessageToFriend(function(t) {
                        if (t.success) {
                            var e = Math.floor((new Date).getTime() / 1e3);
                            if (e - d <= 5) return;
                            d = e, App.PlayerController.inviteSuccess(), App.PlayerController.rewardCoins(r), App.PopupManager.show(p.PopupConst.REWARD_SUCCESS, {
                                coins: r
                            });
                            var a = App.PlayerController.InviteRemain;
                            wx.postMessage({
                                message: "initPotentialFriendList",
                                coin: r,
                                remain: a
                            })
                        } else;
                    }), this.getChildByPath(this.node, "display").active = !1;
                    var i = this;
                    this.scheduleOnce(function() {
                        i.getChildByPath(e.node, "display").active = !0, window.wx && wx.postMessage({
                            message: "initPotentialFriendList",
                            coin: r,
                            remain: App.PlayerController.InviteRemain
                        })
                    }, 0), this._timer = setInterval(this.tick.bind(this), 1e3), this.tick(), u += 1, App.PlayerController.FreeCoinTimes <= 0 && u % 2 == 0 && c.default.getInstance().showInterstitialAd()
                }, e.prototype.tick = function() {
                    var t = this.node.getChildByName("btnVideo");
                    if (t.active) {
                        var e = s.default.nowTime() - h > 10;
                        t.getComponent(cc.Button).interactable = e;
                        var a = s.default.nowTime() - h;
                        if (a >= 0 && a < 10) {
                            var r = s.default.formatSecondsRemain(10 - a);
                            this.setLabel(this.node.getChildByName("tRemainTime"), r)
                        } else this.setLabel(this.node.getChildByName("tRemainTime"), "")
                    }
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "btnVideo":
                            this.onShowVideoAds()
                    }
                }, e.prototype.onShowVideoAds = function() {
                    if (App.PlayerController.FreeCoinTimes <= 0) n.default.show("Ngày mai trở lại!");
                    else {
                        var t = this,
                            e = 14;
                        30 == App.PlayerController.FreeCoinTimes && (e = 13), c.default.getInstance().showVideo({
                            type: "30s",
                            id: e
                        }, function() {
                            h = s.default.nowTime(), App.PlayerController.rewardCoins(t._videoReward), n.default.show("ad_reward_success"), App.PlayerController.useFreeCoinVideo(), t.hide()
                        }), l.default.getInstance().add({
                            tag: e
                        })
                    }
                }, e.prototype.hide = function() {
                    this._timer && clearInterval(this._timer), window.wx && wx.postMessage({
                        message: "clear"
                    }), t.prototype.hide.call(this)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = f, cc._RF.pop()
    }, {
        "../../datas/const/PopupConst": "PopupConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/view/PopupBasic": "PopupBasic",
        "../common/LogManager": "LogManager",
        "../common/UITips": "UITips"
    }],
    PopupManager: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "aaac5prxj5B94xC8AyM+mEy", "PopupManager"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("./IManager"),
            i = t("../../datas/const/PopupConst"),
            o = t("../utils/UIHelper"),
            n = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.init = function(t) {
                    this._layer = t
                }, e.prototype.show = function(t, e) {
                    var a = this.getLayer();
                    "free_coin" == t.name && (window.qq || window.tt || window.h5api) && (t = i.PopupConst.FREE_COINS_QQ), cc.loader.loadRes(t.path, function(r, i) {
                        var n = cc.instantiate(i);
                        n.viewData = t, n.viewData.params = e, n.name = t.name, a.addChild(n), n.x = 0, n.y = 0, 0 == t.fullscreen && o.default.adapterLowResolutionPopup(n)
                    })
                }, e.prototype.hide = function(t) {
                    var e = this.getLayer(),
                        a = e.getChildByName(t);
                    a && e.removeChild(a)
                }, e.prototype.getLayer = function() {
                    return this._layer ? this._layer : cc.director.getScene()
                }, e
            }(r.default);
        a.default = n, cc._RF.pop()
    }, {
        "../../datas/const/PopupConst": "PopupConst",
        "../utils/UIHelper": "UIHelper",
        "./IManager": "IManager"
    }],
    PopupMystery: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "5b637mJv69J248R4N69AyxW", "PopupMystery"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../datas/const/PopupConst"),
            s = t("../../framework/utils/UIHelper"),
            c = t("../../datas/const/EventConst"),
            p = t("../../datas/const/GameConst"),
            l = t("../../framework/utils/NumberHelper"),
            d = t("../common/UITips"),
            h = t("../../framework/platform/PlatformManager"),
            u = t("../../datas/configs/DrawConfig"),
            f = t("../common/LogManager"),
            m = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this);
                    var e = this.node.getChildByName("top");
                    e.y = cc.winSize.height / 2, s.default.adapterScreen(e), s.default.adapterLowResolutionScale(this.node.getChildByName("img_preview"));
                    var a = e.getChildByName("btnView");
                    this.setLabel(this.getChildByPath(a, "Background.tTitle"), "popup_mystery_tab_preview");
                    var r = e.getChildByName("btnExchange");
                    this.setLabel(this.getChildByPath(r, "Background.tTitle"), "popup_mystery_tab_exchange");
                    var i = window.h5api ? "" : "popup_mystery_invite_tips";
                    this.setLabel(this.node.getChildByName("tTips"), i);
                    var o = this.node.getChildByName("btnInvite");
                    this.setLabel(this.getChildByPath(o, "Background.Label"), "popup_mystery_btn_invite"), this.setLabel(this.getChildByPath(this.node, "btnVideo.Background.Label"), "popup_mystery_btn_video"), this.initUIClick(["btnView", "btnExchange", "btnInvite", "btnVideo"]), this.bindEvents([c.default.UI_COIN, c.default.UI_DIAMOND]), this.updateCoins(), this.updateDiamond(), this.updateBtnVideo(), this.initLatePrefab(), this.totalWeight = 0;
                    var n = App.MergeController.LevelMax;
                    for (var p in u.DrawConfig) {
                        var l = u.DrawConfig[p];
                        "gold" !== l.type && "piece" !== l.type && "vit" === l.type && App.BagController.hadItem(l.type, l.id) || l.level <= n && (this.totalWeight += parseInt(l.weight))
                    }
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "btnView":
                            App.PopupManager.show(n.PopupConst.DRAW_PREVIEW);
                            break;
                        case "btnExchange":
                            App.PopupManager.show(n.PopupConst.DRAW_EXCHANGE);
                            break;
                        case "btnInvite":
                            h.default.getInstance().share(), f.default.getInstance().add({
                                tag: 20
                            });
                            break;
                        case "btnVideo":
                            if (App.PlayerController.TodayDrawRemain <= 0) return void d.default.show("popup_mystery_video_tips_over");
                            var r = App.PlayerController.LastDrawTime / 1e3;
                            if ((new Date).getTime() / 1e3 - r < 300) return void d.default.show("popup_mystery_video_tips_cdtime");
                            this.onShowVideoAds()
                    }
                }, e.prototype.onEvents = function(t, e) {
                    switch (t) {
                        case c.default.UI_DIAMOND:
                            this.updateDiamond();
                            break;
                        case c.default.UI_COIN:
                            this.updateCoins()
                    }
                }, e.prototype.onShowVideoAds = function() {
                    var t = this;
                    h.default.getInstance().showVideo({
                        type: "30s",
                        id: 6
                    }, function() {
                        App.PlayerController.useDrawCounts(), t.updateBtnVideo(), t.calculateRewards()
                    }), f.default.getInstance().add({
                        tag: 6
                    })
                }, e.prototype.showReward = function(t) {
                    var e;
                    if ("piece" == t.type) {
                        var a = parseInt(t.id);
                        App.PlayerController.rewardDiamond(parseInt(t.id)), e = {
                            diamonds: a
                        }
                    } else if ("gold" == t.type) {
                        a = 1800 * App.PlayerController.getTotalEarning();
                        App.PlayerController.rewardCoins(a), e = {
                            coins: a
                        }
                    } else if ("vit" == t.type) {
                        a = parseInt(t.id);
                        App.PlayerController.rewardVit(a), e = {
                            vit: a
                        }
                    } else e = t, App.BagController.rewardItem(t);
                    e && App.PopupManager.show(n.PopupConst.REWARD_SUCCESS, e)
                }, e.prototype.calculateRewards = function() {
                    var t = App.MergeController.LevelMax,
                        e = Math.random(),
                        a = 0;
                    for (var r in u.DrawConfig) {
                        var i = u.DrawConfig[r];
                        if ("gold" === i.type || "piece" === i.type || "vit" === i.type || !App.BagController.hadItem(i.type, i.id) && !(i.level > t)) {
                            if (e <= a + i.weight / this.totalWeight) {
                                this.showReward(i);
                                break
                            }
                            a += i.weight / this.totalWeight
                        }
                    }
                }, e.prototype.initLatePrefab = function() {
                    var t = [n.PopupConst.DRAW_EXCHANGE.path, n.PopupConst.DRAW_EXCHANGE.path],
                        e = 0,
                        a = function() {
                            if (!(e >= t.length)) {
                                var r = t[e];
                                cc.loader.loadRes(r, function(t, r) {
                                    e += 1, a()
                                })
                            }
                        };
                    a()
                }, e.prototype.updateCoins = function() {
                    var t = App.PlayerController.Coin,
                        e = this.getChildByPath(this.node, "top.coinBar.tValue"),
                        a = l.default.unitFormat(t);
                    this.setLabel(e, a), e.stopAllActions(), e.runAction(cc.sequence(cc.scaleTo(.1, 1.2), cc.scaleTo(.1, 1)))
                }, e.prototype.updateDiamond = function() {
                    var t = App.PlayerController.Diamond;
                    this.setLabel(this.getChildByPath(this.node, "top.diamondBar.tValue"), t)
                }, e.prototype.updateBtnVideo = function() {
                    var t = this,
                        e = this.node.getChildByName("btnVideo"),
                        a = this.node.getChildByName("tVideoTips"),
                        r = App.PlayerController.TodayDrawRemain;
                    if (e.getComponent(cc.Button).interactable = r > 0, r <= 0) this.setLabel(a, "popup_mystery_video_tips_over");
                    else {
                        var i = App.PlayerController.LastDrawTime / 1e3,
                            o = (new Date).getTime() / 1e3;
                        if (o - i < 300) {
                            var n = 300 - (o - i);
                            this._timer && (clearInterval(this._timer), this._timer = null);
                            var s = this;
                            this._timer = setInterval(function() {
                                n -= 1;
                                var e = l.default.formatSeconds(n);
                                t.setLabel(a, e), n <= 0 && (s._timer && (clearInterval(s._timer), s._timer = null), s.updateBtnVideo())
                            }, 1e3);
                            var c = l.default.formatSeconds(n);
                            this.setLabel(a, c)
                        } else {
                            var d = App.I18n.get("popup_mystery_video_tips", [
                                ["cur", r],
                                ["max", p.default.max_draw]
                            ]);
                            this.setLabel(a, d)
                        }
                    }
                }, e.prototype.hide = function() {
                    h.default.getInstance().showInterstitialAd(), this._timer && clearInterval(this._timer), t.prototype.hide.call(this)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = m, cc._RF.pop()
    }, {
        "../../datas/configs/DrawConfig": "DrawConfig",
        "../../datas/const/EventConst": "EventConst",
        "../../datas/const/GameConst": "GameConst",
        "../../datas/const/PopupConst": "PopupConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/utils/UIHelper": "UIHelper",
        "../../framework/view/PopupBasic": "PopupBasic",
        "../common/LogManager": "LogManager",
        "../common/UITips": "UITips"
    }],
    PopupNavigateGift: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "8f809R5sYFMSomLrbiIMOPZ", "PopupNavigateGift"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../framework/utils/NumberHelper"),
            s = t("../common/UITips"),
            c = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    var e = this;
                    t.prototype.onLoad.call(this), this.initUIClick(["btnClaim"]), this.updateTodayClaimed();
                    var a = this;
                    this.getChildByPath(this.node, "container.view.content").children.forEach(function(t) {
                        var r = t.getChildByName("btnGo");
                        a.onClick(r, function() {
                            a.onClickMp(t.name)
                        }, e)
                    })
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "btnClaim":
                            var r = cc.sys.localStorage.getItem("navigateGiftComplete");
                            if (r) {
                                var i = r.time;
                                if (n.default.isOneDay(i, (new Date).getTime())) return this.setClaim(), !0
                            }
                            s.default.show("Vui lòng hoàn thành tương tác trước!")
                    }
                }, e.prototype.onClickMp = function(t) {
                    var e = "";
                    switch (t) {
                        case "dragon":
                            e = "wx25433e375152fff5";
                            break;
                        case "sanxiao":
                            e = "wx55c1af9843cee66b"
                    }
                    var a = this;
                    wx.navigateToMiniProgram({
                        appId: e,
                        success: function(t) {
                            a.setComplete()
                        }
                    })
                }, e.prototype.updateTodayClaimed = function() {
                    var t = this.node.getChildByName("top"),
                        e = this.isTodayClaimed(),
                        a = !1,
                        r = cc.sys.localStorage.getItem("navigateGiftComplete");
                    if (r) {
                        var i = r.time;
                        n.default.isOneDay(i, (new Date).getTime()) && (a = !0)
                    }
                    e ? (t.getChildByName("btnClaim").getComponent(cc.Button).enabled = !1, t.getChildByName("btnClaim").getComponent(cc.Button).interactable = !1, this.setLabel(t.getChildByName("tTips"), "Thưởng lớn ngày mai")) : (t.getChildByName("btnClaim").getComponent(cc.Button).enabled = a, t.getChildByName("btnClaim").getComponent(cc.Button).interactable = a, this.setLabel(t.getChildByName("tTips"), a ? "Hoàn thành tương tác": "Không có tương tác hôm nay"))
                }, e.prototype.isTodayClaimed = function() {
                    var t = cc.sys.localStorage.getItem("navigateGiftClaim");
                    if (t) {
                        var e = t.time;
                        if (n.default.isOneDay(e, (new Date).getTime())) return !0
                    }
                    return !1
                }, e.prototype.setComplete = function() {
                    var t = (new Date).getTime();
                    cc.sys.localStorage.setItem("navigateGiftComplete", {
                        time: t,
                        complete: !0
                    }), this.updateTodayClaimed()
                }, e.prototype.setClaim = function() {
                    var t = (new Date).getTime();
                    cc.sys.localStorage.setItem("navigateGiftClaim", {
                        time: t
                    }), this.updateTodayClaimed(), this.sendEvent("NavigateGift"), this.hide()
                }, e = __decorate([i], e)
            }(o.default);
        a.default = c, cc._RF.pop()
    }, {
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/view/PopupBasic": "PopupBasic",
        "../common/UITips": "UITips"
    }],
    PopupNewRank: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "1f28ffUXFBF9ZLV5tMozvaD", "PopupNewRank"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../framework/utils/NumberHelper"),
            s = t("../../datas/configs/GameConfig"),
            c = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.setPopupTitle("popup_newrank_title");
                    var e = this._viewData.params.rank || 0;
                    if (e > 0) {
                        var a = s.RankConfig[e];
                        this.setLabel(this.getChildByPath(this.node, "content.tLeft"), "X " + n.default.unitFormat(Number(a.reward))), this.setLabel(this.getChildByPath(this.node, "content.tRight"), "X " + a.earning), this.setLabel(this.getChildByPath(this.node, "content.leftrank.rank_label"), s.RankConfig[e - 1].name), this.setLabel(this.getChildByPath(this.node, "content.rightrank.rank_label"), a.name), this.getChildByPath(this.node, "content.leftrank.rankIcon");
                        var r = this.getChildByPath(this.node, "content.leftrank.rankIcon");
                        r.children.forEach(function(t) {
                            t.active = t.name == e.toString()
                        }), (r = this.getChildByPath(this.node, "content.rightrank.rankIcon")).children.forEach(function(t) {
                            t.active = t.name == (e + 1).toString()
                        })
                    }
                    var i = this.node.getChildByName("btnClaim");
                    this.setLabel(this.getChildByPath(i, "Background.Label"), "popup_newrank_btn_ok"), this.initUIClick(["btnClaim"])
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "btnClaim":
                            this.hide()
                    }
                }, e = __decorate([i], e)
            }(o.default);
        a.default = c, cc._RF.pop()
    }, {
        "../../datas/configs/GameConfig": "GameConfig",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/view/PopupBasic": "PopupBasic"
    }],
    PopupOfflineEarn: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "278baLiGrFOS6mnYjwI5yhB", "PopupOfflineEarn"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../common/UITips"),
            s = t("../../datas/const/PopupConst"),
            c = t("../../framework/utils/NumberHelper"),
            p = t("../../framework/platform/PlatformManager"),
            l = t("../../datas/configs/GameConfig"),
            d = t("../common/LogManager"),
            h = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.setPopupTitle("popup_offline_title"), this.initUIClick(["btnVideo", "btnClaim"]), this.setLabel(this.getChildByPath(this.node, "btnClaim.Background.Label"), "popup_offline_btn_claim"), this.setLabel(this.getChildByPath(this.node, "btnVideo.Background.Label"), "popup_offline_btn_claim_double");
                    var e = this.getChildByPath(this.node, "btnClaim");
                    e.active = !1, setTimeout(function() {
                        e && e.parent && (e.active = !0)
                    }, 2e3);
                    var a = p.default.getInstance().getOfflineTime(),
                        r = Math.max(0, App.PlayerController.CoinSpeedEndAt - p.default.getInstance().getLastUpdateTime()),
                        i = l.RankConfig[App.PlayerController.Rank].earning,
                        o = App.MergeController.getEarning() * i;
                    this._rewardCoin = (3 * Math.min(a, r) + Math.max(0, a - r)) * o, this.setLabel(this.getChildByPath(this.node, "tReward"), "+" + c.default.unitFormat(this._rewardCoin))
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "btnClaim":
                            App.PlayerController.rewardCoins(this._rewardCoin), this.hide();
                            break;
                        case "btnVideo":
                            this.onShowVideoAds()
                    }
                }, e.prototype.hide = function() {
                    App.PopupManager.show(s.PopupConst.QUESTS), t.prototype.hide.call(this)
                }, e.prototype.onShowVideoAds = function() {
                    var t = this;
                    p.default.getInstance().showVideo({
                        type: "30s",
                        id: 31
                    }, function() {
                        App.PlayerController.rewardCoins(2 * t._rewardCoin), n.default.show("ad_reward_success"), t.hide()
                    }), d.default.getInstance().add({
                        tag: 31
                    })
                }, e = __decorate([i], e)
            }(o.default);
        a.default = h, cc._RF.pop()
    }, {
        "../../datas/configs/GameConfig": "GameConfig",
        "../../datas/const/PopupConst": "PopupConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/view/PopupBasic": "PopupBasic",
        "../common/LogManager": "LogManager",
        "../common/UITips": "UITips"
    }],
    PopupPKHelp: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "b31eafeSXlDhYskKXX5k+2l", "PopupPKHelp"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../framework/utils/UIHelper"),
            s = t("../../framework/platform/PlatformManager"),
            c = t("../common/PKHelper"),
            p = t("../../datas/const/PopupConst"),
            l = t("../../framework/utils/NumberHelper"),
            d = t("../common/LogManager"),
            h = 0,
            u = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this._recommendData = c.default.init(), this._unlockMap = {};
                    var e = cc.sys.localStorage.getItem("pk_help");
                    e && (this._unlockMap = JSON.parse(e)), c.default.hadChanged() && (this._unlockMap = {}, App.PopupManager.show(p.PopupConst.TIPS, {
                        message: "Đã nhận được một bộ trang phục mới, tất cả các đề xuất đã được cập nhật. Vui lòng kiểm tra lại."
                    }));
                    var a = this.node.getChildByName("containerNode");
                    a.y = cc.winSize.height / 2, n.default.adapterScreen(a);
                    var r = this.node.getChildByName("topBg");
                    r.y = cc.winSize.height / 2 - 30, n.default.adapterScreen(r, {
                        y: 0
                    }), r.scale = .5, cc.tween(r).to(.2, {
                        scale: 1.2
                    }).to(.3, {
                        scale: 1
                    }).start();
                    var i = this;
                    cc.loader.loadRes("prefabs/modules/dressModule", cc.Prefab, function(t, e) {
                        var r = cc.instantiate(e);
                        r.x = 0, a.addChild(r), i._roleDress = r, n.default.adapterLowResolutionScale(r)
                    }), this.initView(), this.setLabel(this.getChildByPath(this.node, "topBg.score_label"), "\u9009\u62e9\u6807\u7b7e\u67e5\u770b\u7b54\u6848"), this._confirmLayer = this.node.getChildByName("confirm"), this._confirmLayer.active = !1, this.initUIClick(["btnConfirmClose", "confirmTouchPanel", "btnFree", "btnVideo"]), this._timer = setInterval(this.tick.bind(this), 1e3), this.tick()
                }, e.prototype.tick = function() {
                    if (this._confirmLayer.active) {
                        var t = this._confirmLayer.getChildByName("btnVideo");
                        if (t.active) {
                            var e = l.default.nowTime() - h > 10;
                            t.getComponent(cc.Button).interactable = e;
                            var a = l.default.nowTime() - h;
                            if (a >= 0 && a < 10) {
                                var r = l.default.formatSecondsRemain(10 - a);
                                this.setLabel(t.getChildByName("tRemainTime"), r)
                            } else this.setLabel(t.getChildByName("tRemainTime"), "")
                        }
                    }
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "btnConfirmClose":
                        case "confirmTouchPanel":
                            this.hideConfirm();
                            break;
                        case "btnFree":
                            this.setTabUnlock(this._currentTabID), this.updatePreviewDress(this._currentTabID), this.updateTab(this._currentTabID), App.PlayerController.usePKRecommend(), this.hideConfirm();
                            break;
                        case "btnVideo":
                            var r = this;
                            s.default.getInstance().showVideo({
                                type: "15s",
                                id: 11
                            }, function() {
                                h = l.default.nowTime(), r.setTabUnlock(r._currentTabID), r.updatePreviewDress(r._currentTabID), r.updateTab(r._currentTabID), r.hideConfirm()
                            }), d.default.getInstance().add({
                                tag: 11
                            })
                    }
                }, e.prototype.showConfirm = function() {
                    var t = App.PlayerController.PkRecommendRemain;
                    this._confirmLayer.getChildByName("btnFree").active = t > 0, this._confirmLayer.getChildByName("btnVideo").active = t <= 0, this._confirmLayer.active = !0, this.tick(), this.delayHide(), s.default.getInstance().showBannerAd()
                }, e.prototype.hideConfirm = function() {
                    s.default.getInstance().hideBannerAd(), this._confirmLayer.active = !1
                }, e.prototype.initView = function() {
                    var t = this,
                        e = function(e, a) {
                            e.name = a.toString(), t.setLabel(e.getChildByName("Label"), "best_style_" + a.toString());
                            var r = t._recommendData[a - 1],
                                i = r[r.length - 1];
                            t.setLabel(e.getChildByName("tScore"), Math.floor(i).toString());
                            var o = e.getChildByName("scoreBg");
                            e.getChildByName("tScore").getComponent(cc.Label)._forceUpdateRenderData(!0), o.width = e.getChildByName("tScore").width + 7, t.onClick(e, function() {
                                t.onClickTab(a)
                            }, t)
                        };
                    this._tabList = [];
                    for (var a = this.node.getChildByName("leftPanel"), r = a.getChildByName("tab1"), i = 1; i <= 6; i++) {
                        (n = cc.instantiate(r)).parent = a, e(n, i), this._tabList.push(n), this.updateTab(i)
                    }
                    r.active = !1, a.x = -cc.winSize.width / 2, a.runAction(cc.moveTo(.5, cc.v2(-cc.winSize.width / 2 + a.width / 2, a.y)));
                    var o = this.node.getChildByName("rightPanel");
                    r = o.getChildByName("tab1");
                    for (i = 7; i <= 12; i++) {
                        var n;
                        (n = cc.instantiate(r)).parent = o, e(n, i), this._tabList.push(n), this.updateTab(i)
                    }
                    r.active = !1, o.x = cc.winSize.width / 2, o.runAction(cc.moveTo(.5, cc.v2(cc.winSize.width / 2 - o.width / 2, o.y)))
                }, e.prototype.onClickTab = function(t) {
                    if (this._currentTabID = t, !this._unlockMap[t]) {
                        var e = App.I18n.get("best_style_" + t.toString()),
                            a = App.I18n.get("popup_pkhelp_tips", [
                                ["style", e]
                            ]);
                        return this.setLabel(this._confirmLayer.getChildByName("tTips"), a), this.showConfirm(), void d.default.getInstance().add({
                            tag: 10
                        })
                    }
                    this.updatePreviewDress(t)
                }, e.prototype.updatePreviewDress = function(t) {
                    var e = this._recommendData[t - 1];
                    this._roleDress && this._roleDress.getComponent("RoleDress").previewRecommend(c.default.KEYS, e);
                    var a = App.I18n.get("best_style_" + t.toString());
                    this.setLabel(this.getChildByPath(this.node, "topBg.score_label"), a + "\u5206\u6570: " + Math.floor(e[e.length - 1]).toString()), this._tabList.forEach(function(e) {
                        e.scale = 1, e.name == t.toString() && (e.scale = 1.1)
                    })
                }, e.prototype.updateTab = function(t) {
                    var e = this._tabList[t - 1],
                        a = this._recommendData[t - 1];
                    if (e)
                        if (1 == this._unlockMap[t]) {
                            e.color = cc.Color.WHITE, this.setLabel(e.getChildByName("tScore"), Math.floor(a[a.length - 1]).toString());
                            var r = e.getChildByName("scoreBg");
                            e.getChildByName("tScore").getComponent(cc.Label)._forceUpdateRenderData(!0), r.width = e.getChildByName("tScore").width + 7
                        } else e.color = cc.Color.GRAY, this.setLabel(e.getChildByName("tScore"), "?")
                }, e.prototype.setTabUnlock = function(t) {
                    this._unlockMap[t] = 1, cc.sys.localStorage.setItem("pk_help", JSON.stringify(this._unlockMap))
                }, e.prototype.hide = function() {
                    this._timer && clearInterval(this._timer), s.default.getInstance().hideBannerAd(), t.prototype.hide.call(this)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = u, cc._RF.pop()
    }, {
        "../../datas/const/PopupConst": "PopupConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/utils/UIHelper": "UIHelper",
        "../../framework/view/PopupBasic": "PopupBasic",
        "../common/LogManager": "LogManager",
        "../common/PKHelper": "PKHelper"
    }],
    PopupPK: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "cf76amNX3pMkaGflrmvYXcD", "PopupPK"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../framework/utils/UIHelper"),
            s = t("../../datas/const/GameConst"),
            c = t("../../../scripts/datas/configs/BagConfig"),
            p = t("../../../scripts/datas/configs/ClothConfig"),
            l = t("../common/UITips"),
            d = t("../../framework/platform/PlatformManager"),
            h = t("../../datas/const/PopupConst"),
            u = t("../../framework/utils/NumberHelper"),
            f = t("../common/LogManager"),
            m = 0,
            _ = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), App.AudioManager.playBgm("PKbgm");
                    var e = this.node.getChildByName("containerNode");
                    e.y = cc.winSize.height / 2, n.default.adapterScreen(e), this._originRank = App.PlayerController.Rank, this.initScores();
                    var a = this;
                    cc.loader.loadRes("prefabs/components/pk/pk", cc.Prefab, function(t, e) {
                        var r = cc.instantiate(e);
                        a.node.addChild(r), a._pkView = r, a.initView(), a.tick(), n.default.adapterLowResolutionScale(r)
                    }), this._timer = setInterval(this.tick.bind(this), 1e3), this.tick()
                }, e.prototype.tick = function() {
                    if (this._pkView) {
                        var t = this.getChildByPath(this._pkView, "start.btnVideo");
                        if (t.active) {
                            var e = u.default.nowTime() - m > 180;
                            t.getComponent(cc.Button).interactable = e;
                            var a = u.default.nowTime() - m;
                            if (a >= 0 && a < 180) {
                                var r = u.default.formatSecondsRemain(180 - a);
                                this.setLabel(t.getChildByName("tRemainTime"), r)
                            } else this.setLabel(t.getChildByName("tRemainTime"), "")
                        }
                    }
                }, e.prototype.initScores = function() {
                    var t = App.DressController.getParts(),
                        e = {};
                    for (var a in t) "photo" != a && (e[a] = t[a]);
                    for (var r = c.default, i = p.default, o = [], n = 1; n <= s.default.max_attr_kind; ++n)
                        for (var a in o[n] = [], e)
                            if ("hat" != a && "face" != a) {
                                var l = parseInt(e[a]),
                                    h = r[a][l];
                                h || (h = i[a][l]), h && h["attr" + n] && o[n].push(h["attr" + n])
                            } var u = e.hat,
                        f = e.face,
                        m = 0;
                    for (var a in o) {
                        var _ = o[a],
                            g = 0;
                        for (var y in _) {
                            var C = "attr" + (parseInt(y) + 1),
                                v = parseFloat(_[y]);
                            u && parseInt(u) > 0 && (v *= 1 + parseFloat(r.hat[u][C]) / 100), f && parseInt(f) > 0 && (v *= 1 + parseFloat(r.hat[f][C]) / 100), _[y] = Math.floor(v), g += _[y]
                        }
                        _.push(g), m = _.length - 1, _.push(a)
                    }
                    o.sort(function(t, e) {
                        return e[m] - t[m]
                    });
                    var b = o[0];
                    this._highest_key = b[b.length - 1], this._scores = [];
                    for (n = 0; n < b.length - 2; n++) this._scores.push(b[n]);
                    this._totalScore = b[b.length - 2], this._isPassRank = !1;
                    var w = 0,
                        P = App.PlayerController.BestScores;
                    for (var a in console.log("scoreData = ", b, P), P) {
                        var I = P[a];
                        w = Math.max(w, I)
                    }
                    this._totalScore > w && (this._isPassRank = !0), w = Math.max(w, this._totalScore);
                    var B = this;
                    console.log("getPKRanks ===== ", w, this._totalScore), d.default.getInstance().getRanks("getPKRanks", {
                        score: w
                    }, function(t) {
                        console.log("res == ", t), B._rankData = t
                    })
                }, e.prototype.initView = function() {
                    var t = this;
                    cc.loader.loadRes("prefabs/modules/dressModule", cc.Prefab, function(e, a) {
                        var r = cc.instantiate(a);
                        r.x = 0, t._pkView.getChildByName("modal").addChild(r), t.initPkView()
                    })
                }, e.prototype.hide = function() {
                    this._timer && clearInterval(this._timer), this._pfButton && (this._pfButton.hide(), this._pfButton = null), t.prototype.hide.call(this), App.AudioManager.playBgm("bgm"), d.default.getInstance().showInterstitialAd()
                }, e.prototype.initPkView = function() {
                    this.initUIClick(["pk_btn_help", "close", "pk_btn_start", "addable", "btnClose", "continue", "btnTest", "btnVideo", "btnPkHelp"], this._pkView), this._pkView.getChildByName("resulting").active = !1, this._pkView.getChildByName("help").active = !1, this.PrefabRankBar = this.getChildByPath(this._pkView, "resulting.PrefabRankBar"), this.PrefabRankBar.active = !1;
                    var t = this;
                    this.onClick(this._pkView.getChildByName("help").getChildByName("btnHelpClose"), function() {
                        t.onUIClick(null, "btnHelpClose")
                    }, this), this.onClick(this._pkView.getChildByName("help").getChildByName("helpTouchBg"), function() {
                        t.onUIClick(null, "helpTouchBg")
                    }, this), this.onClick(this._pkView.getChildByName("resulting").getChildByName("continue"), function() {
                        t.onUIClick(null, "continue")
                    }, this), this.onClick(this._pkView.getChildByName("calculating").getChildByName("skip"), function() {
                        t.onUIClick(null, "skip")
                    }, this), this.refreshVit(), this.updateBestScore(), this.updateWeixinAuthor()
                }, e.prototype.updateWeixinAuthor = function() {
                    var t = this,
                        e = this.getChildByPath(this._pkView, "start.pk_btn_start"),
                        a = this.getChildByPath(this._pkView, "start.btnVideo");
                    e.active = !1, a.active = !1;
                    var r = d.default.getInstance().getUserInfo();
                    if (console.log("userInfo = ", r), r || !window.wx || window.tt) {
                        App.PlayerController.Vit <= 0 ? a.active = !0 : e.active = !0, t._pfButton && (t._pfButton.hide(), t._pfButton = null)
                    } else {
                        var i = d.default.getInstance().getPlatform();
                        t._pfButton = i.createUserInfoButton(function() {
                            t.updateWeixinAuthor(), t._pfButton && (t._pfButton.hide(), t._pfButton = null)
                        })
                    }
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "pk_btn_help":
                            this._pkView.getChildByName("help").active = !0;
                            break;
                        case "btnHelpClose":
                        case "helpTouchBg":
                            this._pkView.getChildByName("help").active = !1;
                            break;
                        case "pk_btn_start":
                            this.onStartRank(), this.showBtnTest(!1);
                            break;
                        case "btnVideo":
                            var r = this;
                            d.default.getInstance().showVideo({
                                type: "15s",
                                id: 8
                            }, function() {
                                m = u.default.nowTime(), App.PlayerController.rewardVit(1), r.onStartRank(), r.tick()
                            }), this.showBtnTest(!1), f.default.getInstance().add({
                                tag: 8
                            });
                            break;
                        case "btnTest":
                            App.PopupManager.show(h.PopupConst.TEST);
                            break;
                        case "btnPkHelp":
                            App.PopupManager.show(h.PopupConst.PK_HELP), f.default.getInstance().add({
                                tag: 9
                            });
                            break;
                        case "addable":
                            l.default.show("popup_pk_addvit_tips");
                            break;
                        case "btnClose":
                            this.hide();
                            break;
                        case "continue":
                            this._pkView.getChildByName("resulting").active = !1, App.PlayerController.Vit <= 0 ? this.getChildByPath(this._pkView, "start.btnVideo").active = !0 : this.getChildByPath(this._pkView, "start.pk_btn_start").active = !0, this.showBtnTest(!0);
                            break;
                        case "skip":
                            this._pkView.getChildByName("calculating").getComponent("PKCalNode").hide(), this.showResult()
                    }
                }, e.prototype.showBtnTest = function(t) {
                    this.getChildByPath(this._pkView, "start.btnTest").active = t
                }, e.prototype.onStartRank = function() {
                    if (App.PlayerController.Vit <= 0) l.default.show("popup_pk_addvit_tips");
                    else {
                        App.PlayerController.costVit(1), this.refreshVit(), this.getChildByPath(this._pkView, "start.pk_btn_start").active = !1, this.getChildByPath(this._pkView, "start.btnVideo").active = !1, this._pkView.getChildByName("calculating").getComponent("PKCalNode").setData(this._scores, this.showResult.bind(this));
                        var t = App.PlayerController.BestScores,
                            e = s.default.best_styles[Number(this._highest_key)];
                        (!t[e] || Number(t[e]) < this._totalScore) && App.PlayerController.setScores(e, this._totalScore, App.DressController.getParts())
                    }
                }, e.prototype.refreshVit = function() {
                    var t = App.PlayerController.Vit,
                        e = Math.max(t, 0) + "/" + s.default.max_vit;
                    this.setLabel(this.getChildByPath(this._pkView, "start.main_gold_bg.vit_label"), e), this.getChildByPath(this._pkView, "start.main_gold_bg.addable.main_icon_add").active = !1
                }, e.prototype.showResult = function() {
                    var t = this._pkView.getChildByName("resulting");
                    t.active = !0, this.setLabel(this.getChildByPath(t, "pk_score_bg.score"), this._totalScore.toString());
                    var e = "best_style_" + this._highest_key;
                    this.setLabel(this.getChildByPath(t, "pk_style_bg.style"), e), this.updateBestScore();
                    var a = t.getChildByName("layout");
                    a.removeAllChildren(), this.showRanks(a), App.PlayerController.Rank > this._originRank && (this._originRank = App.PlayerController.Rank, App.PopupManager.show(h.PopupConst.NEW_RANK, {
                        rank: App.PlayerController.Rank
                    }))
                }, e.prototype.showRanks = function(t) {
                    if (t.removeAllChildren(), this._rankData) {
                        var e = this._rankData.rank || 0;
                        if (e += 1, this._rankData.up)(n = this.createBankBar(this._rankData.up, e - 1)).getChildByName("same_ui").active = !0, n.parent = t;
                        if (this._rankData.my) {
                            var a = this._totalScore,
                                r = App.PlayerController.BestScores;
                            for (var i in r) {
                                var o = r[i];
                                a = Math.max(a, o)
                            }
                            this._rankData.my.score = a;
                            var n = this.createBankBar(this._rankData.my, e);
                            this._isPassRank ? n.getChildByName("up_ui").active = !0 : n.getChildByName("same_ui").active = !0, n.parent = t
                        }
                        if (this._rankData.down) {
                            n = this.createBankBar(this._rankData.down, e + 1);
                            this._isPassRank ? n.getChildByName("down_ui").active = !0 : n.getChildByName("same_ui").active = !0, n.parent = t
                        }
                    }
                }, e.prototype.createBankBar = function(t, e) {
                    var a = cc.instantiate(this.PrefabRankBar);
                    a.getChildByName("down_ui").active = !1, a.getChildByName("same_ui").active = !1, a.getChildByName("up_ui").active = !1, this.setLabel(a.getChildByName("tName"), t.userInfo.nickName), this.setLabel(a.getChildByName("tScore"), t.score), this.setLabel(a.getChildByName("tRank"), e.toString());
                    var r = a.getChildByName("avatarSpr");
                    return cc.loader.load(t.userInfo.avatarUrl + "?aaa=aa.jpg", function(t, e) {
                        e && (r.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e), r.width = 100, r.height = 100)
                    }), a.active = !0, a
                }, e.prototype.updateBestScore = function() {
                    var t = App.PlayerController.getBestScore(),
                        e = App.I18n.get("popup_pk_title", [
                            ["score", t]
                        ]);
                    this.setLabel(this.getChildByPath(this._pkView, "start.rank_node.score_label"), e);
                    var a = App.PlayerController.Rank + 1;
                    this.getChildByPath(this._pkView, "start.rank_node.rankIcon").children.forEach(function(t) {
                        t.active = t.name == a.toString()
                    })
                }, e = __decorate([i], e)
            }(o.default);
        a.default = _, cc._RF.pop()
    }, {
        "../../../scripts/datas/configs/BagConfig": "BagConfig",
        "../../../scripts/datas/configs/ClothConfig": "ClothConfig",
        "../../datas/const/GameConst": "GameConst",
        "../../datas/const/PopupConst": "PopupConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/utils/UIHelper": "UIHelper",
        "../../framework/view/PopupBasic": "PopupBasic",
        "../common/LogManager": "LogManager",
        "../common/UITips": "UITips"
    }],
    PopupPhoto: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "69aa28acQdIhpD8bFWkBhWB", "PopupPhoto"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = r.property,
            n = t("../../framework/view/PopupBasic"),
            s = t("../../framework/platform/PlatformManager"),
            c = t("../common/LogManager"),
            p = t("../common/UITips"),
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.camera = null, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this._preview = this.node.getChildByName("preview"), this._capture = this.node.getChildByName("capture"), this._btnClose = this.node.getChildByName("btnClose"), this._capture.active = !1;
                    var e = this;
                    if (cc.loader.loadRes("prefabs/modules/dressModule", cc.Prefab, function(t, a) {
                            var r = cc.instantiate(a);
                            r.x = 0, e._preview.getChildByName("dress").addChild(r), (r = cc.instantiate(a)).x = 0, e._capture.getChildByName("dress").addChild(r)
                        }), this.initUIClick(["btnDownLoad", "btnShare", "capture"]), this._capture.getChildByName("4399").active = !1, window.qq || (this._capture.getChildByName("qrcode_qq").active = !1, this._preview.getChildByName("qrcode_qq").active = !1), window.h5api) {
                        this._capture.getChildByName("qrcode").active = !1, this._capture.getChildByName("qrcode_qq").active = !1, this._preview.getChildByName("qrcode").active = !1, this._preview.getChildByName("qrcode_qq").active = !1, this._preview.getChildByName("btnDownLoad").x = 0, this._preview.getChildByName("btnShare").active = !1, this._capture.getChildByName("4399").active = !0;
                        this._capture.getChildByName("4399").getChildByName("avatar")
                    }
                }, e.prototype.start = function() {
                    this.init()
                }, e.prototype.onUIClick = function(t, e) {
                    var a = this;
                    switch (e) {
                        case "btnClose":
                            this.hide();
                            break;
                        case "btnShare":
                            s.default.getInstance().shareScreen({
                                ypos: 250
                            }), c.default.getInstance().add({
                                tag: 25
                            });
                            break;
                        case "btnDownLoad":
                            window.h5api && (this._preview.active = !1, this._capture.active = !0, p.default.show("Vui lòng lưu ảnh chụp màn hình trực tiếp!")), window.wx && wx.getSetting({
                                success: function(t) {
                                    console.log("res : ", t), 0 == t.authSetting["scope.writePhotosAlbum"] ? wx.openSetting() : t.authSetting["scope.writePhotosAlbum"] ? a.startPhoto() : wx.authorize({
                                        scope: "scope.writePhotosAlbum",
                                        success: function() {
                                            a.startPhoto()
                                        }
                                    })
                                }
                            });
                            break;
                        case "capture":
                            window.h5api && (this._preview.active = !0, this._capture.active = !1)
                    }
                }, e.prototype.startPhoto = function() {
                    wx.showLoading({
                        title: "\u6b63\u5728\u751f\u6210\u56fe\u7247..."
                    }), this._capture.active = !0, this._preview.active = !1;
                    var t = this;
                    setTimeout(function() {
                        t.createCanvas(), canvas.toTempFilePath({
                            success: function(e) {
                                wx.hideLoading(), wx.saveImageToPhotosAlbum({
                                    filePath: e.tempFilePath,
                                    success: function() {
                                        wx.showToast({
                                            title: "\u7167\u7247\u4fdd\u5b58\u6210\u529f"
                                        }), t._capture.active = !1, t._preview.active = !0
                                    },
                                    fail: function() {
                                        t._capture.active = !1, t._preview.active = !0
                                    },
                                    complete: function() {
                                        t._capture.active = !1, t._preview.active = !0
                                    }
                                })
                            }
                        })
                    }, 500)
                }, e.prototype.init = function() {
                    var t = new cc.RenderTexture;
                    t.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.gfx.RB_FMT_S8), this.camera.targetTexture = t, this._texture = t
                }, e.prototype.createCanvas = function() {
                    var t = this._texture.width,
                        e = this._texture.height;
                    this._canvas ? this.clearCanvas() : (this._canvas = document.createElement("canvas"), this._canvas.width = t, this._canvas.height = e);
                    var a = this._canvas.getContext("2d");
                    this.camera.render();
                    for (var r = this._texture.readPixels(), i = 4 * t, o = 0; o < e; o++) {
                        for (var n = e - 1 - o, s = a.createImageData(t, 1), c = n * t * 4, p = 0; p < i; p++) s.data[p] = r[c + p];
                        a.putImageData(s, 0, o)
                    }
                    return this._canvas
                }, e.prototype.clearCanvas = function() {
                    this._canvas.getContext("2d").clearRect(0, 0, this._canvas.width, this._canvas.height)
                }, __decorate([o(cc.Camera)], e.prototype, "camera", void 0), e = __decorate([i], e)
            }(n.default);
        a.default = l, cc._RF.pop()
    }, {
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/view/PopupBasic": "PopupBasic",
        "../common/LogManager": "LogManager",
        "../common/UITips": "UITips"
    }],
    PopupQuests: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "b1305QDkFBNA5e6HwwqReJV", "PopupQuests"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../datas/const/PopupConst"),
            s = t("../../datas/configs/GameConfig"),
            c = t("../common/UITips"),
            p = t("../../framework/utils/NumberHelper"),
            l = t("../../datas/const/GameConst"),
            d = t("../../datas/const/EventConst"),
            h = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.setPopupTitle("popup_quests_title");
                    var e = this.getChildByPath(this.node, "signNode");
                    this.setLabel(e.getChildByName("tTitle"), "popup_quests_sign_title"), this.setLabel(e.getChildByName("tSignTitle"), "popup_quests_sign_subtitle"), this.setLabel(e.getChildByName("tSignDesc"), "popup_quests_sign_subdesc"), this.initUIClick(["btnTomoroge"]), this.initQuests(), this.updateQuests();
                    var a = App.PlayerController.isTodaySign;
                    this.setLabel(this.getChildByPath(e, "btnTomoroge.Background.tTitle"), a ? "popup_quests_sign_btn_tomo" : "popup_quests_sign_btn_go")
                }, e.prototype.initQuests = function() {
                    this._questNodes = new Array;
                    var t = this.node.getChildByName("questNode");
                    this.setLabel(this.getChildByPath(t, "tQuestTitle"), "popup_quests_achievement_title");
                    var e = t.getChildByName("questContainer"),
                        a = t.getChildByName("QuestItemPrefab"),
                        r = App.PlayerController.QuestIds;
                    console.log("quest s=  ", r);
                    for (var i = this, o = function(t) {
                            var o = r[t],
                                c = cc.instantiate(a);
                            c.parent = e;
                            var p = c.getChildByName("btnClaim");
                            s.onClick(p, function() {
                                i.onClickClaim(t)
                            }, s), s.setLabel(s.getChildByPath(p, "Background.tTitle"), "popup_quests_achievement_btn_claim");
                            var l = c.getChildByName("btnGo");
                            s.onClick(l, function() {
                                App.PopupManager.show(n.PopupConst.PK)
                            }, s), c.getChildByName("icons").children.forEach(function(t) {
                                t.active = t.name == o.type
                            }), s._questNodes.push(c)
                        }, s = this, c = 0; c < r.length; c++) o(c);
                    a.active = !1
                }, e.prototype.updateQuests = function() {
                    for (var t = App.PlayerController.QuestIds, e = 0; e < t.length; e++) {
                        var a = this._questNodes[e],
                            r = t[e],
                            i = s.QuestsConfig[r.type][r.per];
                        a && a && this.updateQuestItem(a, r.type, i)
                    }
                }, e.prototype.updateQuestItem = function(t, e, a) {
                    a.coins && this.setLabel(this.getChildByPath(t, "coin.tValue"), "+" + p.default.unitFormat(a.coins));
                    var r = t.getChildByName("diamonds"),
                        i = t.getChildByName("tips"),
                        o = t.getChildByName("progress"),
                        n = "",
                        s = "",
                        c = 0,
                        d = !0;
                    if ("PK" == e) {
                        var h = "best_style_" + l.default.styles_map[a.key];
                        h = App.I18n.get(h), n = App.I18n.get("popup_quests_achievement_bar_pk_title", [
                            ["style", h],
                            ["score", a.score]
                        ]), this.setLabel(r.getChildByName("tValue"), 1);
                        var u = App.PlayerController.getScore(a.key);
                        s = u + "/" + a.score, c = u / Number(a.score) * 646, d = u >= a.score
                    } else if ("merge" == e) {
                        n = App.I18n.get("popup_quests_achievement_bar_merge_title", [
                            ["times", a.times]
                        ]), r.active = !1;
                        var f = App.PlayerController.MergeTimes;
                        s = f + "/" + a.times, c = f / Number(a.times) * 646, d = f >= a.times
                    }
                    var m = t.getChildByName("btnClaim"),
                        _ = t.getChildByName("btnGo");
                    m.active = !0, _.active = !1, "PK" == e ? (m.active = d, _.active = !d) : m.getComponent(cc.Button).interactable = d, this.setLabel(t.getChildByName("tTitle"), n), this.setLabel(i.getChildByName("tTitle"), s), o.width = Math.min(646, c);
                    var g = Math.min(323, -323 + c);
                    i.x = g + 30, i.getChildByName("tTitle").getComponent(cc.Label)._forceUpdateRenderData(!0), i.width = i.getChildByName("tTitle").width + 7
                }, e.prototype.onUIClick = function(e, a) {
                    t.prototype.onUIClick.call(this, e, a), "btnTomoroge" == a && (App.PopupManager.show(n.PopupConst.SIGN, {
                        from: "quest"
                    }), this.hide())
                }, e.prototype.onClickClaim = function(t) {
                    var e = App.PlayerController.QuestIds[t],
                        a = s.QuestsConfig[e.type][e.per];
                    if (a) {
                        if ("merge" == e.type)
                            if (App.PlayerController.MergeTimes >= Number(a.times)) {
                                App.PlayerController.rewardCoins(Number(a.coins)), App.PlayerController.setNextQuestIds(t, e.type);
                                var r = App.PlayerController.QuestIds[t].per,
                                    i = s.QuestsConfig[e.type][r];
                                this.updateQuestItem(this._questNodes[t], e.type, i), App.PopupManager.show(n.PopupConst.REWARD_SUCCESS, a)
                            } else c.default.show("popup_quests_merge_limit_tips");
                        else if ("PK" == e.type) {
                            if (App.PlayerController.getScore(a.key) >= Number(a.score)) {
                                App.PlayerController.rewardCoins(Number(a.coins)), App.PlayerController.rewardDiamond(1), App.PlayerController.setNextQuestIds(t, e.type);
                                r = App.PlayerController.QuestIds[t].per, i = s.QuestsConfig[e.type][r];
                                this.updateQuestItem(this._questNodes[t], e.type, i);
                                var o = a;
                                o.diamonds = 1, App.PopupManager.show(n.PopupConst.REWARD_SUCCESS, o)
                            } else c.default.show("popup_quests_pk_limit_tips")
                        }
                        this.sendEvent(d.default.UI_QUEST_UNREAD)
                    }
                }, e = __decorate([i], e)
            }(o.default);
        a.default = h, cc._RF.pop()
    }, {
        "../../datas/configs/GameConfig": "GameConfig",
        "../../datas/const/EventConst": "EventConst",
        "../../datas/const/GameConst": "GameConst",
        "../../datas/const/PopupConst": "PopupConst",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/view/PopupBasic": "PopupBasic",
        "../common/UITips": "UITips"
    }],
    PopupRank: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "66784xlVzdJQ6hVCquzcVuF", "PopupRank"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r, i = cc._decorator,
            o = i.ccclass,
            n = (i.property, t("../../framework/view/PopupBasic")),
            s = t("../../framework/platform/PlatformManager"),
            c = t("../../datas/const/EventConst"),
            p = t("../common/LogManager"),
            l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.initView(), this._viewData.params && this._viewData.params.from_visitor && (this._showInterstitialAd = !0)
                }, e.prototype.initView = function() {
                    this.PrefabBar = this.getChildByPath(this.node, "PrefabBar"), this.PrefabBar.active = !1, this._subContent = this.getChildByPath(this.node, "display"), this._subContent.active = !1, this.setLabel(this.getChildByPath(this.node, "tabs.tabFriends.tTitle"), "popup_rank_tab_friend"), this.setLabel(this.getChildByPath(this.node, "tabs.tabGlobals.tTitle"), "popup_rank_tab_global"), this.initUIClick(["tabFriends", "tabGlobals", "btnRndVisit"]), this.updateTabs("tabGlobals")
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "tabFriends":
                        case "tabGlobals":
                            this.updateTabs(a);
                            break;
                        case "btnRndVisit":
                            if (wx) {
                                var r = this,
                                    i = s.default.getInstance().getPlatform();
                                wx.showLoading({
                                    title: "Đang tìm người chơi..."
                                }), i.getRandomVisit(function(t) {
                                    cc.log("res = ", t), t && r.sendEvent(c.default.UI_VISIT_MODE, {
                                        mode: "friend",
                                        data: t
                                    }), wx.hideLoading(), r.hide({})
                                }, function() {
                                    wx.hideLoading(), r.hide({})
                                })
                            }
                            p.default.getInstance().add({
                                tag: 18
                            })
                    }
                }, e.prototype.updateTabs = function(t) {
                    var e = this.getChildByPath(this.node, "tabs.tabFriends"),
                        a = this.getChildByPath(this.node, "tabs.tabGlobals");
                    if (e.getComponent(cc.Button).enabled = e.name != t, e.getChildByName("bg").active = e.name == t, a.getComponent(cc.Button).enabled = a.name != t, a.getChildByName("bg").active = a.name == t, this._subContent.active = "tabFriends" == t, "tabFriends" == t) this.updateList([]), wx.postMessage({
                        message: "initFriends"
                    });
                    else if (r) this.updateList(r);
                    else {
                        var i = this;
                        s.default.getInstance().getRanks("getRanks", {}, function(e) {
                            r = e.ranks, e.ranks && "tabGlobals" == t && i.updateList(e.ranks)
                        })
                    }
                    this.setLabel(this.getChildByPath(this.node, "tDesc"), this._subContent.active ? "popup_rank_tips_friend" : "popup_rank_tips_all")
                }, e.prototype.updateList = function(t) {
                    var e = this,
                        a = this.getChildByPath(this.node, "container.view.content");
                    if (0 != t.length)
                        if (a.childrenCount > 0) a.active = !0;
                        else {
                            var r = 0;
                            this.schedule(function() {
                                var i = t[r];
                                if (i) {
                                    var o = cc.instantiate(e.PrefabBar);
                                    o.parent = a;
                                    var n = r + 1,
                                        s = o.getChildByName("ranks");
                                    if (s.active = n <= 3, s.children.forEach(function(t) {
                                            t.active = t.name == n.toString()
                                        }), e.setLabel(o.getChildByName("tRank"), n.toString()), e.setLabel(o.getChildByName("tValue"), i.score.toString()), i.userInfo) {
                                        e.setLabel(o.getChildByName("tName"), i.userInfo.nickName || "");
                                        var l = o.getChildByName("avatarSpr");
                                        cc.loader.load(i.userInfo.avatarUrl + "?aaa=aa.jpg", function(t, e) {
                                            e && (l.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e), l.width = 80, l.height = 80)
                                        })
                                    }
                                    var d = o.getChildByName("btnVisit");
                                    e.setLabel(e.getChildByPath(d, "btnVisit.Background.Label"), "popup_rank_btn_claim");
                                    var h = e;
                                    e.onClick(d, function() {
                                        p.default.getInstance().add({
                                            tag: 17
                                        }), h.sendEvent(c.default.UI_VISIT_MODE, {
                                            mode: "friend",
                                            data: i
                                        }), h.hide({})
                                    }, e), o.active = !0, r += 1
                                }
                            }, .01, t.length - 1, 0), a.height = t.length * (this.PrefabBar.height + 20) - 20
                        }
                    else a.active = !1
                }, e.prototype.hide = function(e) {
                    window.wx && wx.postMessage({
                        message: "clear"
                    }), !e && this._showInterstitialAd && s.default.getInstance().showInterstitialAd(), t.prototype.hide.call(this)
                }, e = __decorate([o], e)
            }(n.default);
        a.default = l, cc._RF.pop()
    }, {
        "../../datas/const/EventConst": "EventConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/view/PopupBasic": "PopupBasic",
        "../common/LogManager": "LogManager"
    }],
    PopupRecordVideo: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "c9d4a9mckJOCbh9mhjHQvvd", "PopupRecordVideo"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../framework/platform/PlatformManager"),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.initUIClick(["btnOK", "btnCancel"]), this.delayHide(), n.default.getInstance().showBannerAd()
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "btnOK":
                            n.default.getInstance().getPlatform().shareVideo(function() {}), this.hide();
                            break;
                        case "btnCancel":
                            this.hide()
                    }
                }, e.prototype.hide = function() {
                    this._timer && clearInterval(this._timer), n.default.getInstance().hideBannerAd(), t.prototype.hide.call(this)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = s, cc._RF.pop()
    }, {
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/view/PopupBasic": "PopupBasic"
    }],
    PopupRewardSuc: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "b1d5eTqBvZCLrvMSvUGX8A2", "PopupRewardSuc"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../framework/platform/PlatformManager"),
            s = t("../../framework/utils/NumberHelper"),
            c = t("../../framework/manager/LoaderManager"),
            p = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.setLabel(this.getChildByPath(this.node, "content.btnShare.tTitle"), "popup_reward_success_btn_share"), this.initUIClick(["blockTouchPanel", "btnShare"]), this.node.getChildByName("blockTouchPanel").width = cc.winSize.width, this.node.getChildByName("blockTouchPanel").height = cc.winSize.height;
                    var e = this.getChildByPath(this.node, "content.icons");
                    if (e.active = !1, this._viewData && this._viewData.params) {
                        var a = this._viewData.params,
                            r = {
                                type: "",
                                id: "",
                                count: 0,
                                isCurrency: !0
                            };
                        if (a.coins ? (r.type = "coin", r.count = Number(a.coins)) : a.diamonds ? (r.type = "diamond", r.count = Number(a.diamonds)) : a.vit ? (r.type = "vit", r.count = Number(a.vit)) : (r.isCurrency = !1, r.type = a.type, r.id = a.id), r.isCurrency) {
                            e.active = !0, e.children.forEach(function(t) {
                                t.active = t.name == r.type
                            });
                            var i = this.getChildByPath(this.node, "content.tTips");
                            this.setLabel(i, "+" + s.default.unitFormat(r.count))
                        } else {
                            var o = this.getChildByPath(this.node, "content.imageSpr"),
                                p = App.CharacterConfHelper.getFrameUrl(r.type, r.id);
                            c.default.getInstance().loadSpriteFrame(p, function(t) {
                                o && o.parent && (o.getComponent(cc.Sprite).spriteFrame = t)
                            })
                        }
                    }
                    this.delayHide(), n.default.getInstance().showBannerAd()
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "blockTouchPanel":
                            this.hide();
                            break;
                        case "btnShare":
                            n.default.getInstance().share(), this.hide()
                    }
                }, e.prototype.hide = function() {
                    n.default.getInstance().hideBannerAd(), t.prototype.hide.call(this)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = p, cc._RF.pop()
    }, {
        "../../framework/manager/LoaderManager": "LoaderManager",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/view/PopupBasic": "PopupBasic"
    }],
    PopupTest: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "629ectQ6GZLRZ1Dp3F2EAtM", "PopupTest"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = r.property,
            n = t("../../framework/view/PopupBasic"),
            s = t("../../framework/utils/UIHelper"),
            c = t("../../datas/const/GameConst"),
            p = t("../../datas/configs/ClothConfig"),
            l = t("../../datas/configs/BagConfig"),
            d = t("../../datas/configs/TestConfig"),
            h = t("../../framework/platform/PlatformManager"),
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.camera = null, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this);
                    var e = this.node.getChildByName("containerNode");
                    e.y = cc.winSize.height / 2, s.default.adapterScreen(e);
                    var a = this;
                    cc.loader.loadRes("prefabs/components/character-test", cc.Prefab, function(t, e) {
                        var r = cc.instantiate(e);
                        a.node.addChild(r), a._testView = r, s.default.adapterLowResolutionScale(r), a.initView()
                    })
                }, e.prototype.start = function() {
                    this.init(), this.createCanvas()
                }, e.prototype.onUIClick = function(t, e) {
                    switch (e) {
                        case "btnClose":
                            this.hide();
                            break;
                        case "lb_btn_share":
                            window.h5api ? h.default.getInstance().share() : h.default.getInstance().shareScreen()
                    }
                }, e.prototype.hide = function() {
                    h.default.getInstance().showInterstitialAd(), t.prototype.hide.call(this)
                }, e.prototype.init = function() {
                    var t = new cc.RenderTexture;
                    t.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.gfx.RB_FMT_S8), this.camera.targetTexture = t, this._texture = t
                }, e.prototype.createCanvas = function() {
                    var t = this._texture.width,
                        e = this._texture.height;
                    this._canvas ? this.clearCanvas() : (this._canvas = document.createElement("canvas"), this._canvas.width = t, this._canvas.height = e);
                    var a = this._canvas.getContext("2d");
                    this.camera.render();
                    for (var r = this._texture.readPixels(), i = 4 * t, o = 0; o < e; o++) {
                        for (var n = e - 1 - o, s = a.createImageData(t, 1), c = n * t * 4, p = 0; p < i; p++) s.data[p] = r[c + p];
                        a.putImageData(s, 0, o)
                    }
                    return this._canvas
                }, e.prototype.clearCanvas = function() {
                    this._canvas.getContext("2d").clearRect(0, 0, this._canvas.width, this._canvas.height)
                }, e.prototype.initView = function() {
                    this.setLabel(this.getChildByPath(this._testView, "result.lb_btn_share.tTitle"), "popup_test_btn_share"), this.initUIClick(["btnClose", "lb_btn_share"], this._testView);
                    var t = this;
                    cc.loader.loadRes("prefabs/modules/dressModule", cc.Prefab, function(e, a) {
                        var r = cc.instantiate(a);
                        r.scale = .8, r.y = 0, t._testView.getChildByName("modal").addChild(r)
                    });
                    for (var e = App.DressController.getParts(), a = [], r = l.default, i = p.default, o = 1; o <= c.default.max_attr_kind; ++o)
                        for (var n in a[o] = [], e)
                            if ("hat" != n && "face" != n) {
                                var s = parseInt(e[n]),
                                    u = r[n][s];
                                u || (u = i[n][s]), u && u["attr" + o] && a[o].push(u["attr" + o])
                            } var f = e.hat,
                        m = e.face,
                        _ = 0;
                    for (var n in a) {
                        var g = a[n],
                            y = 0;
                        for (var C in g) {
                            var v = "attr" + (parseInt(C) + 1),
                                b = parseFloat(g[C]);
                            f && parseInt(f) > 0 && (b *= 1 + parseFloat(r.hat[f][v]) / 100), m && parseInt(m) > 0 && (b *= 1 + parseFloat(r.hat[m][v]) / 100), g[C] = Math.floor(b), y += g[C]
                        }
                        g.push(y), _ = g.length - 1, g.push(n)
                    }
                    a.sort(function(t, e) {
                        return e[_] - t[_]
                    }), console.log("scores = ", a);
                    var w = d.TestConfig[Number(a[0][a[0].length - 1])],
                        P = d.TestConfig[Number(a[1][a[1].length - 1])],
                        I = d.TestConfig[Number(a[2][a[2].length - 1])],
                        B = d.TestConfig[Number(a[3][a[3].length - 1])],
                        M = App.I18n.get("popup_test_result", [
                            ["per", Math.ceil(w.per * P.per * 100)]
                        ]),
                        k = h.default.getInstance().getUserInfo();
                    k && k.nickName && (M = k.nickName + M), this.setLabel(this.getChildByPath(this._testView, "result.people.tTitle"), M), this.setLabel(this.getChildByPath(this._testView, "result.test_role_bg.role_label"), w.role), this.setLabel(this.getChildByPath(this._testView, "result.test_role_bg-2.role_label"), P.role), this.setLabel(this.getChildByPath(this._testView, "result.test_role_bg.char_label"), I.role), this.setLabel(this.getChildByPath(this._testView, "result.test_role_bg-2.char_label"), B.role), this.setLabel(this.getChildByPath(this._testView, "result.test_text_bg_left.tTitle"), w.texts[0]), this.setLabel(this.getChildByPath(this._testView, "result.test_text_bg_left-2.tTitle"), I.texts[0]), this.setLabel(this.getChildByPath(this._testView, "result.test_text_bg_right.tTitle"), P.texts[0]), this.setLabel(this.getChildByPath(this._testView, "result.test_text_bg_right-2.tTitle"), B.texts[0])
                }, __decorate([o(cc.Camera)], e.prototype, "camera", void 0), e = __decorate([i], e)
            }(n.default);
        a.default = u, cc._RF.pop()
    }, {
        "../../datas/configs/BagConfig": "BagConfig",
        "../../datas/configs/ClothConfig": "ClothConfig",
        "../../datas/configs/TestConfig": "TestConfig",
        "../../datas/const/GameConst": "GameConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/UIHelper": "UIHelper",
        "../../framework/view/PopupBasic": "PopupBasic"
    }],
    PopupTips: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "d7c30WiQOtHyr7hvj34hQ4Q", "PopupTips"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../framework/platform/PlatformManager"),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.setPopupTitle("popup_tip_title");
                    var e = this.getChildByPath(this.node, "btnClaim");
                    this.setLabel(this.getChildByPath(e, "Background.Label"), "popup_tip_btn_ok");
                    var a = "";
                    this._viewData && this._viewData.params && (this._viewData.params.message && (a = this._viewData.params.message), this._viewData.params.callback && (this._callback = this._viewData.params.callback), this._viewData.params.hide && (this._hideCallback = this._viewData.params.hide)), this.setLabel(this.node.getChildByName("tTips"), a), this.initUIClick(["btnClaim"]), this.delayHide(), n.default.getInstance().showBannerAd()
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "btnClaim":
                            this._callback && (this._callback(), this._hideCallback = null), this.hide()
                    }
                }, e.prototype.hide = function() {
                    this._hideCallback && this._hideCallback(), n.default.getInstance().hideBannerAd(), t.prototype.hide.call(this)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = s, cc._RF.pop()
    }, {
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/view/PopupBasic": "PopupBasic"
    }],
    PopupUnlock: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "9b9c553wrpKZ653H5PWcAwV", "PopupUnlock"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../framework/platform/PlatformManager"),
            s = t("../../framework/utils/NumberHelper"),
            c = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this);
                    var e = this._viewData.params,
                        a = App.CharacterConfHelper.getMergeItemConfig(e.characterType, e.characterID),
                        r = App.I18n.get("popup_unlock_title", [
                            ["level", a ? a.id : ""]
                        ]);
                    this.setPopupTitle(r);
                    var i = this.node.getChildByName("btnClaim");
                    this.setLabel(this.getChildByPath(i, "Background.Label"), "popup_unlock_btn_claim"), this.initUIClick(["btnClaim"]);
                    var o = this.node.getChildByName("reward"),
                        c = this.node.getChildByName("iconLevel");
                    if (c.active = !1, e) {
                        var p = App.CharacterConfHelper.getFrameUrl(e.characterType, e.characterID);
                        if (p) {
                            var l = this.getChildByPath(this.node, "imageSpr").getComponent(cc.Sprite);
                            l.node.active = !1, cc.loader.loadRes(p, cc.SpriteFrame, function(t, e) {
                                l.spriteFrame = e, l.node.active = !0
                            })
                        }
                        var d = Number(a.reward);
                        o.active = d > 0, d > 0 && (this.setLabel(o.getChildByName("tTitle"), "+" + s.default.unitFormat(d)), App.PlayerController.rewardCoins(d)), this.setLabel(c.getChildByName("tValue"), a.id), c.active = !0
                    }
                    App.AudioManager.playEffect("unlocked"), this.delayHide(), n.default.getInstance().showBannerAd()
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "btnClaim":
                            this.hide(), n.default.getInstance().share()
                    }
                }, e.prototype.hide = function() {
                    n.default.getInstance().hideBannerAd(), t.prototype.hide.call(this)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = c, cc._RF.pop()
    }, {
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/view/PopupBasic": "PopupBasic"
    }],
    PopupVisitSetting: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "cab60u9KNJNaJag6Ew7aFVd", "PopupVisitSetting"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/PopupBasic")),
            n = t("../../framework/platform/PlatformManager"),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this);
                    var e = this.getChildByPath(this.node, "btnClaim");
                    this.setLabel(this.getChildByPath(e, "Background.Label"), "popup_tip_btn_ok"), this.initUIClick(["btnClaim"]), this.delayHide(), n.default.getInstance().showBannerAd()
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "btnClaim":
                            this.hide()
                    }
                }, e.prototype.hide = function() {
                    n.default.getInstance().hideBannerAd(), t.prototype.hide.call(this)
                }, e = __decorate([i], e)
            }(o.default);
        a.default = s, cc._RF.pop()
    }, {
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/view/PopupBasic": "PopupBasic"
    }],
    PopupVisitor: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "317fedLEOxPrKjQgmQKrWyJ", "PopupVisitor"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r, i, o, n = cc._decorator,
            s = n.ccclass,
            c = (n.property, t("../../framework/view/PopupBasic")),
            p = t("../../framework/platform/PlatformManager"),
            l = t("../ui/VisitModeUI"),
            d = t("../../datas/const/EventConst"),
            h = t("../../datas/const/GameConst"),
            u = t("../../framework/utils/NumberHelper"),
            f = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.delayHide(), p.default.getInstance().showBannerAd(), this._platform = p.default.getInstance().getPlatform(), this.initUIClick(["tabLike", "tabCollect", "btnRndVisit"]), this.initView(), this._viewData.params && this._viewData.params.from_visitor && (this._showInterstitialAd = !0)
                }, e.prototype.initView = function() {
                    this.PrefabBar = this.getChildByPath(this.node, "PrefabBar"), this.PrefabBar.active = !1, this.setLabel(this.getChildByPath(this.node, "tabs.tabLike.tTitle"), "Khách ghé thăm"), this.setLabel(this.getChildByPath(this.node, "tabs.tabCollect.tTitle"), "Yêu thích"), o ? this.updateTabs(o) : this.updateTabs("tabLike")
                }, e.prototype.onUIClick = function(e, a) {
                    switch (t.prototype.onUIClick.call(this, e, a), a) {
                        case "tabLike":
                        case "tabCollect":
                            this.updateTabs(a);
                            break;
                        case "btnRndVisit":
                            if (window.wx) {
                                var r = this,
                                    i = p.default.getInstance().getPlatform();
                                wx.showLoading({
                                    title: "Đang tìm người chơi..."
                                }), i.getRandomVisit(function(t) {
                                    cc.log("res = ", t), t && r.sendEvent(d.default.UI_VISIT_MODE, {
                                        from_visitor: !0,
                                        mode: "friend",
                                        data: t
                                    }), wx.hideLoading(), r.hide({})
                                }, function() {
                                    wx.hideLoading(), r.hide({})
                                })
                            }
                    }
                }, e.prototype.updateTabs = function(t) {
                    o = t;
                    var e = this.getChildByPath(this.node, "tabs.tabLike"),
                        a = this.getChildByPath(this.node, "tabs.tabCollect");
                    e.getComponent(cc.Button).enabled = e.name != t, e.getChildByName("bg").active = e.name == t, a.getComponent(cc.Button).enabled = a.name != t, a.getChildByName("bg").active = a.name == t, t == e.name ? this.showLikeList() : this.showCollectList()
                }, e.prototype.showLikeList = function() {
                    var t = this._platform.getUserInfo();
                    this.getChildByPath(this.node, "container.view.content").removeAllChildren(), wx.hideLoading(), wx.showLoading({
                        title: "Đang tải..."
                    });
                    var e = this;
                    p.default.getInstance().getPlatform().getVisits(function(a) {
                        wx.hideLoading(), a.likes && (r = a.likes);
                        var i = {},
                            o = [];
                        r.forEach(function(e) {
                            i[e.from_id] || t && t.nickName == e.from_user.userInfo.nickName || (o.push(e), i[e.from_id] = 1)
                        }), o.sort(function(t, e) {
                            return e.update_time - t.update_time
                        }), cc.log("list == ", o), e.updateContainer(o, "like")
                    })
                }, e.prototype.showCollectList = function() {
                    this.getChildByPath(this.node, "container.view.content").removeAllChildren();
                    var t = l.default.getCollectList();
                    for (var e in cc.log("list = ", t), i = [], t) {
                        var a = t[e];
                        a && i.push({
                            id: e,
                            rankData: a
                        })
                    }
                    cc.log("g_collects = ", i), this.updateContainer(i, "collect")
                }, e.prototype.updateContainer = function(t, e) {
                    var a = this,
                        r = this.getChildByPath(this.node, "container.view.content"),
                        i = 0;
                    this.schedule(function() {
                        var o = t[i];
                        if (o) {
                            var n = cc.instantiate(a.PrefabBar);
                            n.parent = r, n.getChildByName("collectNode").active = "collect" == e, n.getChildByName("likeNode").active = "like" == e, o.id && (n.name = o.id);
                            var s = o.rankData;
                            if (o.from_user && (s = o.from_user), s) {
                                if (a.setLabel(n.getChildByName("tName"), s.userInfo.nickName), o.update_time) a.setLabel(n.getChildByName("tValue"), "\u62dc\u8bbf\u65f6\u95f4:" + u.default.getTimeAgo(o.update_time));
                                else {
                                    cc.log("element.id ====== ", o.id);
                                    var c = o.id.split("+"),
                                        p = App.I18n.get("best_style_" + h.default.styles_map[c[1]]);
                                    p = p + ": " + c[2], a.setLabel(n.getChildByName("tValue"), p)
                                }
                                var l = n.getChildByName("avatarSpr");
                                cc.loader.load(s.userInfo.avatarUrl + "?aaa=aa.jpg", function(t, e) {
                                    e && (l.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e), l.width = 80, l.height = 80)
                                })
                            }
                            var f = n.getChildByName("collectNode").getChildByName("btnVisit");
                            "like" == e && (f = n.getChildByName("likeNode").getChildByName("btnVisit"));
                            var m = a;
                            a.onClick(f, function() {
                                s && (m.sendEvent(d.default.UI_VISIT_MODE, {
                                    from_visitor: !0,
                                    mode: "friend",
                                    data: s
                                }), m.hide({}))
                            }, a);
                            var _ = n.getChildByName("collectNode").getChildByName("btnDel");
                            a.onClick(_, function() {
                                m.onDelete(o.id)
                            }, a), n.active = !0, i += 1
                        }
                    }, .01, t.length - 1, 0), r.height = t.length * (this.PrefabBar.height + 20) - 20, "like" == e && this.setLabel(this.getChildByPath(this.node, "iconVisitUp.tCount"), t.length.toString()), this.node.getChildByName("iconVisitUp").active = !1, this.setLabel(this.node.getChildByName("tLimit"), ""), "like" == e ? 0 == t.length && this.setLabel(this.node.getChildByName("tLimit"), "Chưa có khách\nChúng ta đi xem các bạn của mình đang mặc gì trước đã.") : 0 == t.length && this.setLabel(this.node.getChildByName("tLimit"), "Chưa có bộ sưu tập nào\nGhé thăm bạn bè của bạn để sưu tập trang phục của Meimei")
                }, e.prototype.onDelete = function(t) {
                    l.default.removeCollect(t);
                    var e = this.getChildByPath(this.node, "container.view.content"),
                        a = e.getChildByName(t);
                    a && e.removeChild(a)
                }, e.prototype.hide = function(e) {
                    p.default.getInstance().hideBannerAd(), !e && this._showInterstitialAd && p.default.getInstance().showInterstitialAd(), t.prototype.hide.call(this)
                }, e = __decorate([s], e)
            }(c.default);
        a.default = f, cc._RF.pop()
    }, {
        "../../datas/const/EventConst": "EventConst",
        "../../datas/const/GameConst": "GameConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/utils/NumberHelper": "NumberHelper",
        "../../framework/view/PopupBasic": "PopupBasic",
        "../ui/VisitModeUI": "VisitModeUI"
    }],
    QQ: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "ec928SLUbBDB6fd/X0masCu", "QQ"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("../PlatformManager"),
            i = t("../../../datas/configs/AppConfig"),
            o = "env-dznqjzwu",
            n = 0,
            s = function(t) {
                function e() {
                    var e = this;
                    cc.log("qq.init------"), e = t.call(this) || this, qq.cloud.init({
                        env: o,
                        traceUser: !0
                    });
                    var a = e;
                    return qq.getSetting({
                        success: function(t) {
                            console.log("qq.response == ", t), t.authSetting["scope.userInfo"] && qq.getUserInfo({
                                lang: "zh_CN",
                                success: function(t) {
                                    console.log("scope.userInfo ", t), t.userInfo && (a._userInfo = t.userInfo)
                                }
                            })
                        }
                    }), e.initAds(), e
                }
                return __extends(e, t), e.prototype.login = function(t) {
                    this._loginCb = t;
                    var e = this;
                    this.onCloudApi("load", {}, function(t) {
                        t && t[0] && (e._cloudData = t[0]), e.onLoginComplete()
                    }, function() {
                        e.onLoginComplete()
                    })
                }, e.prototype.onLoginComplete = function() {
                    this._loginCb && this._loginCb(), this.save(this._localData)
                }, e.prototype.getUserInfo = function() {
                    return this._userInfo
                }, e.prototype.share = function(t) {
                    var e = {
                        title: Math.random() > .5 ? "@\u4f60, \u5f15\u9886\u65f6\u5c1a\u6f6e\u6d41\uff0c\u6253\u9020\u8863\u54c1\u8fbe\u4eba~" : "@\u4f60, \u4e00\u8d77\u8fc7\u6765\u6b23\u8d4f\u8863\u54c1\u8fbe\u4eba\u7684\u8863\u67dc\u5594~",
                        imageUrl: "https://mmocgame.qpic.cn/wechatgame/5kh2GianoVm5IibN6QiaJx8DoW912KauppeYdhFkSAVBTFyP6vqUdlc3HT2RAQCAmoK/0"
                    };
                    qq.shareAppMessage(e), t && t.callback && t.callback()
                }, e.prototype.shareScreen = function(t) {
                    var e = ["\u60f3\u4e0d\u5230\u8fd9\u51e0\u4ef6\u670d\u9970\u53ef\u4ee5\u8fd9\u6837\u642d\u914d", "69%\u7684\u4eba\u90fd\u4f1a\u7a7f\u6210\u8fd9\u6837\uff0c\u5feb\u6765\u56f4\u89c2", "\u53ea\u67091%\u7684\u4eba\u80fdHold\u4f4f\u8fd9\u6761\u957f\u88d9"],
                        a = Math.floor(3 * Math.random()),
                        r = 150;
                    t && t.ypos && (r = t.ypos), canvas.toTempFilePath({
                        y: r,
                        success: function(t) {
                            qq.shareAppMessage({
                                title: e[a],
                                imageUrl: t.tempFilePath
                            })
                        }
                    })
                }, e.prototype.initGameScene = function() {
                    qq.showShareMenu({
                        showShareItems: ["qq", "qzone", "wechatFriends", "wechatMoment"]
                    }), qq.onShareAppMessage(function(t) {
                        return {
                            title: Math.random() > .5 ? "@\u4f60, \u5f15\u9886\u65f6\u5c1a\u6f6e\u6d41\uff0c\u6253\u9020\u8863\u54c1\u8fbe\u4eba~" : "@\u4f60, \u4e00\u8d77\u8fc7\u6765\u6b23\u8d4f\u8863\u54c1\u8fbe\u4eba\u7684\u8863\u67dc\u5594~",
                            imageUrl: "https://mmocgame.qpic.cn/wechatgame/5kh2GianoVm5gpDdCEWLY1H4ibSMlDYibYdwbO8coxKz6X3U10UagU2qxC2jIeZhdj8/0",
                            success: function(t) {
                                console.log(t)
                            },
                            fail: function(t) {
                                console.log(t)
                            }
                        }
                    })
                }, e.prototype.save = function(e, a) {
                    if (t.prototype.save.call(this, e), e && e.sortid && this.setUserCloudStorage(e.sortid), !a) {
                        if (e && e.sortid && e.sortid < 5) return;
                        var r = Math.floor((new Date).getTime() / 1e3);
                        if (n > 0 && r - n < 300) return;
                        n = r
                    }
                    var i = this;
                    clearTimeout(this._timer), this._timer = setTimeout(function() {
                        i.onCloudApi("save", i._localData), clearTimeout(i._timer)
                    }, 500)
                }, e.prototype.clearLocalData = function() {
                    this._cloudData = null, t.prototype.clearLocalData.call(this)
                }, e.prototype.showVideo = function(t, e, a) {
                    if (this._adVideoGroups[t]) {
                        var r = this;
                        this._adVideoGroups[t].canPlay = !1, this._adVideoGroups[t].success = function(t) {
                            e && e()
                        }, this._adVideoGroups[t].failure = function(i) {
                            qq.showModal({
                                content: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff0c\u65e0\u6cd5\u83b7\u5f97\u5956\u52b1",
                                cancelText: "\u653e\u5f03",
                                confirmText: "\u7ee7\u7eed",
                                success: function(i) {
                                    i.confirm && r.showVideo(t, e, a), i.cancel && a && a()
                                }
                            })
                        }, this._adVideoGroups[t].videoAd.show().then(function() {}).catch(function(t) {
                            return console.log(t)
                        })
                    }
                }, e.prototype.showInterstitialAd = function() {
                    this._interstitialAd ? this._interstitialAd.show().catch(function(t) {
                        console.error("showInterstitialAd = ", t)
                    }) : qq.createInterstitialAd && (this._interstitialAd = qq.createInterstitialAd({
                        adUnitId: "adunit-a4b5cf2d732cbb52"
                    }), this.showInterstitialAd())
                }, e.prototype.hideInterstitialAd = function() {
                    this._interstitialAd && (this._interstitialAd.destroy(), this._interstitialAd = null)
                }, e.prototype.showBannerAd = function() {
                    this._bannerAd && this._bannerAd.show()
                }, e.prototype.hideBannerAd = function() {
                    this._bannerAd && (this._bannerAd.hide(), this._bannerAd.destroy(), this._bannerAd = null, this.updateBannerAd())
                }, e.prototype.getOfflineTime = function() {
                    return t.prototype.getOfflineTime.call(this)
                }, e.prototype.getInitData = function(t) {
                    return this._localData && this._localData[t] ? this._localData[t] : this._cloudData && this._cloudData[t] ? this._cloudData[t] : null
                }, e.prototype.getRanks = function(t, e, a) {
                    this.onCloudApi(t, e, a)
                }, e.prototype.getUserRank = function(t) {
                    this.onCloudApi("getUserRank", {}, t)
                }, e.prototype.setUserCloudStorage = function(t) {
                    this._lastLevel && t <= this._lastLevel || (this._lastLevel = t, qq.setUserCloudStorage({
                        KVDataList: [{
                            key: "lvlrank",
                            value: t.toString()
                        }],
                        success: function(t) {
                            console.log("setUserCloudStorage.success: ", t)
                        },
                        fail: function(t) {
                            console.log("setUserCloudStorage.fail: ", t)
                        },
                        complete: function(t) {
                            console.log("setUserCloudStorage.complete: ", t)
                        }
                    }))
                }, e.prototype.initAds = function() {
                    this._adVideoGroups = {
                        "30s": {
                            type: "30s",
                            id: "27511f022d45cfd651e0f3efa92d1b10",
                            videoAd: null
                        },
                        "15s": {
                            type: "15s",
                            id: "27511f022d45cfd651e0f3efa92d1b10",
                            videoAd: null
                        }
                    };
                    var t = this,
                        e = function(e) {
                            var r = a._adVideoGroups[e],
                                i = qq.createRewardedVideoAd({
                                    adUnitId: r.id,
                                    multiton: !0
                                });
                            i.onLoad(function() {
                                t._adVideoGroups[e].canPlay = !0
                            }), i.onError(function(a) {
                                t._adVideoGroups[e].canPlay = !1
                            }), i.onClose(function(a) {
                                a && a.isEnded || void 0 === a ? (t._adVideoGroups[e].success && t._adVideoGroups[e].success(a), t._adVideoGroups[e].success = null, t._adVideoGroups[e].failure = null) : (t._adVideoGroups[e].failure && (t._adVideoGroups[e].failure(a), console.log("\u672a\u64ad\u653e\u5b8c\u6210")), t._adVideoGroups[e].success = null, t._adVideoGroups[e].failure = null)
                            }), t._adVideoGroups[e].videoAd = i
                        },
                        a = this;
                    for (var r in this._adVideoGroups) e(r);
                    qq.createInterstitialAd && (this._interstitialAd = qq.createInterstitialAd({
                        adUnitId: "90c87682fc7ab114dda6d709478627f5"
                    })), this.updateBannerAd()
                }, e.prototype.updateBannerAd = function() {
                    var t = this,
                        e = qq.getSystemInfoSync().windowWidth,
                        a = qq.getSystemInfoSync().windowHeight,
                        r = qq.createBannerAd({
                            adUnitId: "c05703bb42e8a1728158e84f171d4b22",
                            adIntervals: 30,
                            style: {
                                left: 0,
                                top: a - 100,
                                width: e,
                                height: 100
                            }
                        });
                    r.onResize(function(t) {
                        r.style.top = a - 100, console.log("windowHeight - banner.style.realHeight = ", a, r.style.realHeight)
                    }), r.onError(function(t) {
                        console.log(t)
                    }), r.onLoad(function() {
                        console.log("banner \u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), t._bannerAd = r
                    })
                }, e.prototype.log = function(t) {
                    t || (t = {}), t.update_time = Math.floor((new Date).getTime() / 1e3), t.created_time = r.default.getInstance().getCreatedTime()
                }, e.prototype.logUI = function(t) {
                    t || (t = {}), t.update_time = Math.floor((new Date).getTime() / 1e3), t.version = i.default.version
                }, e.prototype.addLike = function(t, e) {
                    this.onCloudApi("addLike", {
                        to_id: t,
                        from_user: e
                    })
                }, e.prototype.addVisit = function(t, e) {
                    this.onCloudApi("addVisit", {
                        to_id: t,
                        from_user: e
                    })
                }, e.prototype.getLikes = function(t) {
                    this.onCloudApi("getLikes", {}, t)
                }, e.prototype.getVisits = function(t) {
                    this.onCloudApi("getVisits", {}, t)
                }, e.prototype.getCollects = function(t, e) {
                    this.onCloudApi("getCollects", t, e)
                }, e.prototype.getVisitor = function(t, e) {
                    this.onCloudApi("getVisitor", t, e)
                }, e.prototype.getRandomVisit = function(t, e) {
                    var a = App.MergeController.LevelMax,
                        r = 100 * Math.random(),
                        i = a;
                    i = r <= 10 ? a - 1 : r > 10 && r <= 90 ? a + Math.floor(4 * Math.random()) : Math.floor(Math.random() * (30 - a - 5)) + a, i = Math.min(i, 30), i = Math.max(1, i), cc.log("level = ", r, i), this.onCloudApi("getRndVisit", {
                        level: Math.floor(i)
                    }, t, e)
                }, e.prototype.createUserInfoButton = function(t) {
                    var e = this,
                        a = qq.getSystemInfoSync(),
                        r = qq.createUserInfoButton({
                            type: "text",
                            text: "\u5f00\u59cbPK",
                            style: {
                                left: a.windowWidth / 2 - 50,
                                top: a.windowHeight - 200,
                                width: 100,
                                height: 40,
                                lineHeight: 40,
                                backgroundColor: "#E389CC",
                                color: "#ffffff",
                                textAlign: "center",
                                fontSize: 16,
                                borderRadius: 4
                            }
                        });
                    return r.onTap(function(a) {
                        console.log("createUserInfoButton = ", a), a.userInfo && (e._userInfo = a.userInfo, t && t())
                    }), r
                }, e.prototype.onCloudApi = function(t, e, a, r) {
                    cc.log("qq.onCloudApi--", t, e), qq.cloud.callFunction({
                        name: t,
                        data: {
                            env: o,
                            pf: "qq",
                            data: e
                        },
                        success: function(e) {
                            console.log("qq.onCloudApi = ", t, e), a && a(e.result)
                        },
                        fail: function(t) {
                            r && r(), console.log(t)
                        }
                    })
                }, e
            }(t("./H5").default);
        a.default = s, cc._RF.pop()
    }, {
        "../../../datas/configs/AppConfig": "AppConfig",
        "../PlatformManager": "PlatformManager",
        "./H5": "H5"
    }],
    RoleDress: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "62aa86lp+BH5ZTI9X3z+Y9N", "RoleDress"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../../framework/view/ViewBasic")),
            n = t("../../../datas/const/EventConst"),
            s = t("../../../framework/manager/LoaderManager"),
            c = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this._currentData = {}, this._eyeNode = this.node.getChildByName("parts_eye"), this.initView();
                    var e = this;
                    s.default.getInstance().loadPrefab("components/eye_ef", function(t) {
                        e._eyeNode.addChild(t)
                    }), this.bindEvents([n.default.DRESS_SET_PART, n.default.UI_VISIT_MODE, n.default.DRESS_VISITOR])
                }, e.prototype.onEvents = function(t, e) {
                    switch (t) {
                        case n.default.DRESS_SET_PART:
                            this.updateParts(e);
                            break;
                        case n.default.UI_VISIT_MODE:
                        case n.default.DRESS_VISITOR:
                            this.previewVisitMode(e)
                    }
                }, e.prototype.previewVisitMode = function(t) {
                    var e = App.DressController.getParts();
                    for (var a in "friend" == t.mode && (e = t.data.data), e) "photo" != a && this.updateParts({
                        type: a,
                        id: e[a]
                    })
                }, e.prototype.previewRecommend = function(t, e) {
                    for (var a = 0; a < t.length; a++) {
                        var r = t[a],
                            i = e[a];
                        "photo" != r && this.updateParts({
                            type: r,
                            id: i
                        })
                    }
                }, e.prototype.initView = function() {
                    var t = App.DressController.getParts();
                    for (var e in !t.cloth || t.trous && "" != t.trous || (t.trous = "1"), t) "photo" != e && this.updateParts({
                        type: e,
                        id: t[e]
                    })
                }, e.prototype.updateParts = function(t) {
                    if (String(this._currentData[t.type]) != String(t.id))
                        if (this._currentData[t.type] = String(t.id), "face" == t.type && (this._eyeNode.active = 0 == Number(t.id)), 0 != Number(t.id)) {
                            var e = {},
                                a = App.CharacterConfHelper.getDressItemConfig(t.type, t.id);
                            if (a) {
                                var r = void 0,
                                    i = void 0;
                                for (var o in a.parts) a.parts[o] > 0 ? r = o : i = o;
                                var n = i || r;
                                e[t.type] = {
                                    frame: n,
                                    zindex: a.parts[n]
                                }
                            }
                            var s = function(t) {
                                    var a = e[t],
                                        r = c.node.getChildByName("parts_" + t);
                                    if (r) {
                                        var i = "textures/dress/" + a.frame;
                                        cc.loader.loadRes(i, cc.SpriteFrame, function(t, e) {
                                            r.getComponent(cc.Sprite).spriteFrame = e
                                        })
                                    }
                                },
                                c = this;
                            for (var p in e) s(p)
                        } else {
                            var l = this.node.getChildByName("parts_" + t.type);
                            if (l)
                                if ("hat" == t.type) l.getComponent(cc.Sprite).spriteFrame = null;
                                else if ("face" == t.type) {
                                cc.loader.loadRes("textures/dress/default_face", cc.SpriteFrame, function(t, e) {
                                    l.getComponent(cc.Sprite).spriteFrame = e
                                })
                            }
                        }
                }, e = __decorate([i], e)
            }(o.default);
        a.default = c, cc._RF.pop()
    }, {
        "../../../datas/const/EventConst": "EventConst",
        "../../../framework/manager/LoaderManager": "LoaderManager",
        "../../../framework/view/ViewBasic": "ViewBasic"
    }],
    ShopItemUI: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "a171d4BYKxF7LQ4X7OdIGjC", "ShopItemUI"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../../../framework/view/ViewBasic")),
            n = t("../../../../datas/const/GameConst"),
            s = t("../../../common/UITips"),
            c = t("../../../../framework/manager/LoaderManager"),
            p = t("../../../../framework/utils/NumberHelper"),
            l = t("../../../../datas/const/PopupConst"),
            d = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this._imageSpr = this.getChildByPath(this.node, "img").getComponent(cc.Sprite), this._imageSpr.node.active = !1, this.initUIClick([this.node.name])
                }, e.prototype.init = function(t, e) {
                    this._grayMaterial = e, this.updateConfig(t)
                }, e.prototype.updateConfig = function(t) {
                    this._conf = t;
                    var e = App.CharacterConfHelper.getFrameUrl(t.type, t.id),
                        a = this;
                    c.default.getInstance().loadSpriteFrame(e, function(t) {
                        a._imageSpr.getComponent(cc.Sprite).spriteFrame = t, a._imageSpr.node.active = !0, a.updateImageColor()
                    }), this.updateUI()
                }, e.prototype.updateUI = function() {
                    var t = this._conf,
                        e = App.MergeController.getPrice(t.type, t.id),
                        a = Math.floor(e * t.rise);
                    e = 0 == e ? t.price : e + a, this._price = e;
                    var r = this.node.getChildByName("coinBar");
                    this.setLabel(r.getChildByName("tPrice"), p.default.unitFormat(e));
                    var i = Number(t.id) + n.default.max_buyable_leveldiff;
                    this._lockLevel = i;
                    var o = App.MergeController.getBuyableLevel(t.type),
                        s = Number(t.id) <= o;
                    this._isUnLock = s;
                    var c = this.node.getChildByName("iconLevel");
                    c.active = s, this.setLabel(c.getChildByName("tValue"), t.id);
                    var l = this.node.getChildByName("lockNode");
                    if (l.active = !1, !s) {
                        var d = App.I18n.get("merge_shop_level_limit", [
                            ["level", i]
                        ]);
                        this.setLabel(l.getChildByName("tLimit"), d), l.active = !0
                    }
                    var h = r.getChildByName("bg"),
                        u = r.getChildByName("icon_coin"),
                        f = this.node.getChildByName("bg");
                    this._normalMaterial || (this._normalMaterial = {
                        coinBg: h.getComponent(cc.Sprite).getMaterial(0),
                        coinIcon: u.getComponent(cc.Sprite).getMaterial(0),
                        itemBg: f.getComponent(cc.Sprite).getMaterial(0)
                    });
                    var m = r.getChildByName("tPrice");
                    s ? (h.getComponent(cc.Sprite).setMaterial(0, this._normalMaterial.coinBg), u.getComponent(cc.Sprite).setMaterial(0, this._normalMaterial.coinIcon), f.getComponent(cc.Sprite).setMaterial(0, this._normalMaterial.itemBg), m.color = new cc.Color(219, 103, 98)) : (h.getComponent(cc.Sprite).setMaterial(0, this._grayMaterial), u.getComponent(cc.Sprite).setMaterial(0, this._grayMaterial), f.getComponent(cc.Sprite).setMaterial(0, this._grayMaterial), m.color = new cc.Color(87, 85, 86)), this.updateImageColor()
                }, e.prototype.updateImageColor = function() {
                    this._imageSpr.node.active && (this._isUnLock ? this._imageSpr.node.color = new cc.Color(255, 255, 255) : this._imageSpr.node.color = new cc.Color(107, 89, 89))
                }, e.prototype.onUIClick = function(t, e) {
                    if (this._isUnLock)
                        if (App.PlayerController.Coin < this._price) App.PopupManager.show(l.PopupConst.FREE_COINS);
                        else {
                            var a = this;
                            App.MergeController.buy(this._conf, this._price, function() {
                                App.PlayerController.costCoins(a._price), a.updateUI()
                            })
                        }
                    else {
                        var r = App.I18n.get("merge_shop_level_tips", [
                            ["level", this._lockLevel]
                        ]);
                        s.default.show(r)
                    }
                }, e = __decorate([i], e)
            }(o.default);
        a.default = d, cc._RF.pop()
    }, {
        "../../../../datas/const/GameConst": "GameConst",
        "../../../../datas/const/PopupConst": "PopupConst",
        "../../../../framework/manager/LoaderManager": "LoaderManager",
        "../../../../framework/utils/NumberHelper": "NumberHelper",
        "../../../../framework/view/ViewBasic": "ViewBasic",
        "../../../common/UITips": "UITips"
    }],
    ShopPanelUI: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "c13c6Kb5A1CT5AutcK5O27J", "ShopPanelUI"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../../../framework/view/ViewBasic")),
            n = t("../../../../datas/const/EventConst"),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.node.active = !1, this.initUIClick(["btnBack"])
                }, e.prototype.updateType = function(t) {
                    this._currentType != t ? (this._currentType = t, this.initSlots(), this.updateSlotConfig()) : this.updateSlots()
                }, e.prototype.onUIClick = function(t, e) {
                    "btnBack" == e && this.sendEvent(n.default.UI_HIDE_SHOP_PANEL, {})
                }, e.prototype.initSlots = function() {
                    if (!this._itemList) {
                        this._itemList = [];
                        for (var t = this.getChildByPath(this.node, "container.view.content"), e = this.getChildByPath(this.node, "ItemPrefab"), a = App.CharacterConfHelper.getShopList(this._currentType), r = a.length, i = Math.ceil(r / 4), o = i * e.height + 38 * (i + 1), n = cc.Material.createWithBuiltin("2d-gray-sprite"), s = 0; s < a.length; s++) {
                            var c = cc.instantiate(e);
                            c.parent = t, this._itemList.push(c), c.getComponent("ShopItemUI").init(a[s], n)
                        }
                        t.height = o, e.active = !1, this.updateSlots()
                    }
                }, e.prototype.updateSlots = function() {
                    for (var t = 0; t < this._itemList.length; t++) {
                        var e = this._itemList[t];
                        e && e.getComponent("ShopItemUI").updateUI()
                    }
                }, e.prototype.updateSlotConfig = function() {
                    for (var t = App.CharacterConfHelper.getShopList(this._currentType), e = 0; e < this._itemList.length; e++) {
                        var a = this._itemList[e];
                        a && a.getComponent("ShopItemUI").updateConfig(t[e])
                    }
                }, e = __decorate([i], e)
            }(o.default);
        a.default = s, cc._RF.pop()
    }, {
        "../../../../datas/const/EventConst": "EventConst",
        "../../../../framework/view/ViewBasic": "ViewBasic"
    }],
    TT: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "a0e2bUGCp5DN4BfekeZx/ir", "TT"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("./H5"),
            i = t("../PlatformManager"),
            o = t("../../../datas/configs/AppConfig"),
            n = !0,
            s = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e._playAdSuc = null, e._playAdFail = null, e._videoAd = null, e._videoAdLoad = !1, e._videoRecording = !1, e._video = null, e._stopback = null, n && e.initAds(), e
                }
                return __extends(e, t), e.prototype.login = function(e) {
                    t.prototype.login.call(this, e)
                }, e.prototype.onLoginComplete = function() {
                    this._loginCb && this._loginCb(), this.save(this._localData)
                }, e.prototype.getUserInfo = function() {
                    return this._userInfo
                }, e.prototype.share = function(t) {
                    var e = {
                        title: Math.random() > .5 ? "@\u4f60, \u5f15\u9886\u65f6\u5c1a\u6f6e\u6d41\uff0c\u6253\u9020\u8863\u54c1\u8fbe\u4eba~" : "@\u4f60, \u4e00\u8d77\u8fc7\u6765\u6b23\u8d4f\u8863\u54c1\u8fbe\u4eba\u7684\u8863\u67dc\u5594~",
                        imageUrl: "https://mmocgame.qpic.cn/wechatgame/5kh2GianoVm5IibN6QiaJx8DoW912KauppeYdhFkSAVBTFyP6vqUdlc3HT2RAQCAmoK/0"
                    };
                    tt.shareAppMessage({
                        title: "\u516c\u4e3b\u4eec\u9080\u4f60\u4e00\u8d77\u6765\u6362\u88c5\uff01",
                        desc: e.title,
                        imageUrl: e.imageUrl,
                        query: "",
                        success: function() {
                            console.log("\u5206\u4eab\u6210\u529f")
                        },
                        fail: function(t) {
                            console.log("\u5206\u4eab\u5931\u8d25")
                        }
                    })
                }, e.prototype.shareScreen = function(t) {
                    var e = ["\u60f3\u4e0d\u5230\u8fd9\u51e0\u4ef6\u670d\u9970\u53ef\u4ee5\u8fd9\u6837\u642d\u914d", "69%\u7684\u4eba\u90fd\u4f1a\u7a7f\u6210\u8fd9\u6837\uff0c\u5feb\u6765\u56f4\u89c2", "\u53ea\u67091%\u7684\u4eba\u80fdHold\u4f4f\u8fd9\u6761\u957f\u88d9"],
                        a = Math.floor(3 * Math.random()),
                        r = 150;
                    t && t.ypos && (r = t.ypos), canvas.toTempFilePath({
                        y: r,
                        success: function(t) {
                            wx.shareAppMessage({
                                title: e[a],
                                imageUrl: t.tempFilePath
                            })
                        }
                    })
                }, e.prototype.initGameScene = function() {
                    tt.showShareMenu(), tt.onShareAppMessage(function(t) {
                        return console.log(t.channel), {
                            title: Math.random() > .5 ? "@\u4f60, \u5f15\u9886\u65f6\u5c1a\u6f6e\u6d41\uff0c\u6253\u9020\u8863\u54c1\u8fbe\u4eba~" : "@\u4f60, \u4e00\u8d77\u8fc7\u6765\u6b23\u8d4f\u8863\u54c1\u8fbe\u4eba\u7684\u8863\u67dc\u5594~",
                            imageUrl: "https://mmocgame.qpic.cn/wechatgame/5kh2GianoVm5gpDdCEWLY1H4ibSMlDYibYdwbO8coxKz6X3U10UagU2qxC2jIeZhdj8/0",
                            query: "k1=v1&k2=v2",
                            success: function() {
                                console.log("\u5206\u4eab\u6210\u529f")
                            },
                            fail: function(t) {
                                console.log("\u5206\u4eab\u5931\u8d25", t)
                            }
                        }
                    })
                }, e.prototype.save = function(e, a) {
                    t.prototype.save.call(this, e), e && e.sortid && this.setUserCloudStorage(e.sortid)
                }, e.prototype.clearLocalData = function() {
                    this._cloudData = null, t.prototype.clearLocalData.call(this)
                }, e.prototype.showVideo = function(t, e, a) {
                    n && (this._playAdSuc = e, this._playAdFail = a, this._videoAd.show().then(function(t) {
                        console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u6210\u529f", t)
                    }).catch(function(t) {
                        console.log("\u6fc0\u52b1\u89c6\u9891 \u5e7f\u544a\u663e\u793a\u5931\u8d25", t)
                    }))
                }, e.prototype.showInterstitialAd = function() {
                    if (n && (this.hideInterstitialAd(), "Toutiao" === tt.getSystemInfoSync().appName && cc.sys.os == cc.sys.OS_ANDROID)) try {
                        var t = this;
                        this._interstitialAd = tt.createInterstitialAd({
                            adUnitId: "2le44bfi4da39uu21m"
                        }), this._interstitialAd.load().then(function() {
                            t._interstitialAd.show()
                        }).catch(function(t) {
                            console.log(t)
                        })
                    } catch (t) {}
                }, e.prototype.hideInterstitialAd = function() {
                    this._interstitialAd && (this._interstitialAd.destroy(), this._interstitialAd = null)
                }, e.prototype.showBannerAd = function() {
                    this._bannerAd && this._bannerAd.show()
                }, e.prototype.hideBannerAd = function() {
                    this._bannerAd && (this._bannerAd.hide(), this._bannerAd.destroy(), this._bannerAd = null, this.updateBannerAd())
                }, e.prototype.getOfflineTime = function() {
                    return t.prototype.getOfflineTime.call(this)
                }, e.prototype.getInitData = function(t) {
                    return this._localData && this._localData[t] ? this._localData[t] : this._cloudData && this._cloudData[t] ? this._cloudData[t] : null
                }, e.prototype.getRanks = function(t, e, a) {}, e.prototype.getUserRank = function(t) {
                    this.onCloudApi("getUserRank", {}, t)
                }, e.prototype.setUserCloudStorage = function(t) {
                    this._lastLevel && t <= this._lastLevel || (this._lastLevel = t, tt.setUserGroup({
                        groupId: "group1"
                    }), wx.setUserCloudStorage({
                        KVDataList: [{
                            key: "lvlrank",
                            value: t.toString()
                        }],
                        success: function(t) {
                            console.log("setUserCloudStorage.success: ", t)
                        },
                        fail: function(t) {
                            console.log("setUserCloudStorage.fail: ", t)
                        },
                        complete: function(t) {
                            console.log("setUserCloudStorage.complete: ", t)
                        }
                    }))
                }, e.prototype.initAds = function() {
                    this._videoAd = tt.createRewardedVideoAd({
                        adUnitId: "1hg03lbfmhf14njgt4"
                    });
                    var t = this;
                    this._videoAd.onError(function(e) {
                        console.log("videoAd onError", e), t.videoAidLoad()
                    }), this._videoAd.onLoad(function(t) {
                        console.log("videoAd onLoad", t)
                    }), this._videoAd.onClose(function(e) {
                        console.log("videoAd onClose", e), e.isEnded ? t._playAdSuc && t._playAdSuc() : t._playAdFail && t._playAdFail(), t.videoAidLoad()
                    }), t.videoAidLoad(), this.updateBannerAd()
                }, e.prototype.videoAidLoad = function() {
                    var t = this;
                    this._videoAd.load().then(function() {
                        t._videoAdLoad = !0, console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u6210\u529f")
                    }).catch(function(e) {
                        t._videoAdLoad = !1, console.log("\u6fc0\u52b1\u89c6\u9891\u52a0\u8f7d\u5931\u8d25")
                    })
                }, e.prototype.updateBannerAd = function() {
                    if (n) {
                        var t = this,
                            e = tt.getSystemInfoSync(),
                            a = e.windowWidth,
                            r = e.windowHeight,
                            i = tt.createBannerAd({
                                adUnitId: "2dhlcgg4aimc6iae1b",
                                adIntervals: 30,
                                style: {
                                    top: r - 112.5,
                                    width: a
                                }
                            });
                        i.style.left = (a - 200) / 2, i.onResize(function(t) {
                            i.style.top = r - t.height, i.style.left = (a - t.width) / 2
                        }), i.onError(function(t) {
                            console.log(t)
                        }), i.onLoad(function() {
                            console.log("banner \u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), t._bannerAd = i
                        })
                    }
                }, e.prototype.log = function(t) {
                    t || (t = {}), t.update_time = Math.floor((new Date).getTime() / 1e3), t.created_time = i.default.getInstance().getCreatedTime()
                }, e.prototype.logUI = function(t) {
                    t || (t = {}), t.update_time = Math.floor((new Date).getTime() / 1e3), t.version = o.default.version, this.onCloudApi("logUI", t)
                }, e.prototype.addLike = function(t, e) {
                    this.onCloudApi("addLike", {
                        to_id: t,
                        from_user: e
                    })
                }, e.prototype.addVisit = function(t, e) {
                    this.onCloudApi("addVisit", {
                        to_id: t,
                        from_user: e
                    })
                }, e.prototype.getLikes = function(t) {
                    this.onCloudApi("getLikes", {}, t)
                }, e.prototype.getVisits = function(t) {
                    this.onCloudApi("getVisits", {}, t)
                }, e.prototype.addCollect = function(t) {
                    this.onCloudApi("addCollect", t)
                }, e.prototype.getCollects = function(t, e) {
                    this.onCloudApi("getCollects", t, e)
                }, e.prototype.deleteCollect = function(t) {
                    this.onCloudApi("delCollect", {
                        id: t
                    })
                }, e.prototype.getVisitor = function(t, e) {
                    this.onCloudApi("getVisitor", t, e)
                }, e.prototype.traceLog = function() {
                    this.onCloudApi("traceLog", {})
                }, e.prototype.getRandomVisit = function(t, e) {
                    var a = App.MergeController.LevelMax,
                        r = 100 * Math.random(),
                        i = a;
                    i = r <= 10 ? a - 1 : r > 10 && r <= 90 ? a + Math.floor(4 * Math.random()) : Math.floor(Math.random() * (30 - a - 5)) + a, i = Math.min(i, 30), i = Math.max(1, i), cc.log("level = ", r, i), this.onCloudApi("getRndVisit", {
                        level: Math.floor(i)
                    }, t, e)
                }, e.prototype.createUserInfoButton = function(t) {
                    var e = this,
                        a = wx.getSystemInfoSync(),
                        r = wx.createUserInfoButton({
                            type: "text",
                            text: "\u5f00\u59cbPK",
                            style: {
                                left: a.windowWidth / 2 - 50,
                                top: a.windowHeight - 200,
                                width: 100,
                                height: 40,
                                lineHeight: 40,
                                backgroundColor: "#E389CC",
                                color: "#ffffff",
                                textAlign: "center",
                                fontSize: 16,
                                borderRadius: 4
                            }
                        });
                    return r.onTap(function(a) {
                        console.log("createUserInfoButton = ", a), a.userInfo && (e._userInfo = a.userInfo, t && t())
                    }), r
                }, e.prototype.onCloudApi = function(t, e, a, r) {}, e.prototype.recorderInit = function(t, e) {
                    var a = this,
                        r = tt.getGameRecorderManager();
                    r.onStart(function(e) {
                        console.log("recorder.onStart:", e), t && t()
                    }), r.onStop(function(t) {
                        console.log("recorder.onStop:", t), a._video = t, r.clipVideo({
                            path: t.videoPath,
                            timeRange: [30, 0],
                            success: function(t) {
                                if (console.log("clipVideo:", t), a._video = t, !a._video || !a._video.videoPath || a._video.videoDuration <= 3e3) return a._video = null, void a.showToast("Quay video dưới 3 giây", 2e3, "none");
                                e && e(t), a._stopback && a._stopback(t)
                            },
                            fail: function(t) {
                                console.error(t)
                            }
                        })
                    }), r.onPause(function(t) {
                        console.log("onPause:", t)
                    }), r.onResume(function(t) {
                        console.log("onResume:", t)
                    })
                }, e.prototype.isRecordVideoNow = function() {
                    return this._videoRecording
                }, e.prototype.recorderStart = function() {
                    tt.getGameRecorderManager().start({
                        duration: 60
                    }), this._videoRecording = !0
                }, e.prototype.recorderStop = function(t) {
                    void 0 === t && (t = null), this._stopback = t, tt.getGameRecorderManager().stop(), this._videoRecording = !1
                }, e.prototype.shareVideo = function(t, e) {
                    var a = this;
                    tt.shareAppMessage({
                        channel: "video",
                        title: Math.random() > .5 ? "@\u4f60, \u5f15\u9886\u65f6\u5c1a\u6f6e\u6d41\uff0c\u6253\u9020\u8863\u54c1\u8fbe\u4eba~" : "@\u4f60, \u4e00\u8d77\u8fc7\u6765\u6b23\u8d4f\u8863\u54c1\u8fbe\u4eba\u7684\u8863\u67dc\u5594~",
                        desc: "\u60f3\u4e0d\u5230\u8fd9\u51e0\u4ef6\u670d\u9970\u53ef\u4ee5\u8fd9\u6837\u642d\u914d",
                        imageUrl: "https://mmocgame.qpic.cn/wechatgame/5kh2GianoVm5gpDdCEWLY1H4ibSMlDYibYdwbO8coxKz6X3U10UagU2qxC2jIeZhdj8/0",
                        templateId: "b2dntjcacdjcln4hl5",
                        query: "",
                        extra: {
                            videoPath: a._video.videoPath,
                            withVideoId: !0
                        },
                        success: function(e) {
                            console.log("shareVideo_success:", e), console.log("\u5206\u4eab\u89c6\u9891\u6210\u529f"), t && t()
                        },
                        fail: function(t) {
                            console.log("shareVideo_fail:", t), console.log("\u5206\u4eab\u89c6\u9891\u5931\u8d25"), t.errMsg.indexOf("fail video duration is too short") > -1 && a.showToast("Quay video dưới 3 giây", 2e3, "none"), e && e()
                        }
                    })
                }, e.prototype.showToast = function(t, e, a) {
                    void 0 === e && (e = 2e3), void 0 === a && (a = "none"), tt.showToast({
                        title: t,
                        duration: e,
                        icon: a,
                        success: function(t) {
                            console.log("" + t)
                        },
                        fail: function(t) {
                            console.log("showToast\u8c03\u7528\u5931\u8d25")
                        }
                    })
                }, e
            }(r.default);
        a.default = s, cc._RF.pop()
    }, {
        "../../../datas/configs/AppConfig": "AppConfig",
        "../PlatformManager": "PlatformManager",
        "./H5": "H5"
    }],
    TestConfig: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "445abZjQ5pCZaLfBTe5nVgl", "TestConfig"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.TestConfig = [{
            role: "Người mới",
            per: 0,
            chars: ["", ""],
            texts: ["", ""]
        }, {
            role: "Duyên dáng",
            per: .3,
            chars: ["", ""],
            texts: ["Loại trang phục này tuy đơn giản, sáng sủa nhưng toát ra khí chất tao nhã.", ""]
        }, {
            role: "Sống động",
            per: .2,
            chars: ["", ""],
            texts: ["Đây là một bộ trang phục sôi động với một sự rung cảm trẻ trung.", ""]
        }, {
            role: "Thuần khiết",
            per: .4,
            chars: ["", ""],
            texts: ["Đường nét mượt mà và màu sắc trang nhã làm nổi bật tính cách thuần khiết của bạn một cách hoàn hảo.", ""]
        }, {
            role: "Gợi cảm",
            per: .4,
            chars: ["", ""],
            texts: ["Trang phục gợi cảm và không khiêm tốn là hiện thân của sự tự tin và theo đuổi cái đẹp.", ""]
        }, {
            role: "Trưởng thành",
            per: .1,
            chars: ["", ""],
            texts: ["Trang phục trưởng thành, ổn định và biết kiểm soát, lựa chọn hàng đầu cho những kiểu xuất hiện độc đoán.", ""]
        }, {
            role: "Dễ thương",
            per: .3,
            chars: ["", ""],
            texts: ["Các họa tiết và đồ trang trí nhỏ kết hợp với nơ và các yếu tố khác rất dễ thương và chỉn chu từ đầu đến chân.", ""]
        }, {
            role: "Nhàn rỗi",
            per: .3,
            chars: ["", ""],
            texts: ["Thật thoải mái và tươm tất khi mặc, và nó phản ánh lối sống yêu tự do của bạn.", ""]
        }, {
            role: "Phục cổ",
            per: .5,
            chars: ["", ""],
            texts: ["Các yếu tố gothic kết hợp với trang trí retro làm cho mọi người tỏa sáng.", ""]
        }, {
            role: "Quý cô",
            per: .1,
            chars: ["", ""],
            texts: ["Một sự kết hợp hợp lý và nhạy cảm, thể hiện vẻ đẹp nữ tính.", ""]
        }, {
            role: "Ấm áp",
            per: .05,
            chars: ["", ""],
            texts: ["Làm sao để đẹp mà không bị đóng băng? Bộ trang phục này rất đáng học hỏi.", ""]
        }, {
            role: "Đơn giản",
            per: .2,
            chars: ["", ""],
            texts: ["Thiết kế đơn giản, màu sắc tinh tế, tối giản nhưng không đơn giản.", ""]
        }, {
            role: "Cao quý",
            per: .08,
            chars: ["", ""],
            texts: ["Khí chất và thanh lịch, duyên dáng và sang trọng, sự lựa chọn hàng đầu của Nữ hoàng!", ""]
        }], cc._RF.pop()
    }, {}],
    TopLayer: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "41388R95L1Dw44ojtFVFjoK", "TopLayer"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = r.property,
            n = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.motionNode = null, e
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.motionNode.active = !1;
                    var t = this;
                    this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                        var a = e.getTouches()[0].getLocation(),
                            r = t.motionNode.parent.convertToNodeSpaceAR(a);
                        t.motionNode.position = r, t.motionNode.active = !0, t.motionNode.getComponent(cc.Animation).play(), App.PlayerController.resetOffScreenTime()
                    }), this.node._touchListener.setSwallowTouches(!1)
                }, __decorate([o(cc.Node)], e.prototype, "motionNode", void 0), e = __decorate([i], e)
            }(cc.Component);
        a.default = n, cc._RF.pop()
    }, {}],
    TutorialSteps: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "1e2c5eWCKhNIoY8wYjUMfNA", "TutorialSteps"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../../framework/view/ViewBasic")),
            n = t("../../datas/const/CharacterConst"),
            s = t("../../datas/const/PopupConst"),
            c = t("../../datas/const/EventConst"),
            p = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                var a;
                return __extends(e, t), a = e, e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.initView(), this.bindEvents([c.default.TUTORIAL_SHOW_MERGE_PANEL, c.default.TUTORIAL_HIDE_MERGE_PANEL, c.default.TUTORIAL_SHOW_BAG_LIST, c.default.UI_BAG_ITEM_SELECT, c.default.UI_MERGE_MENUITEM_SELECT, c.default.MERGE_SUCCESS, c.default.DRESS_SET_PART])
                }, e.prototype.start = function() {
                    App.PlayerController.isTutorialComplete ? this.node.active = !1 : (this.node.active = !0, this._step = 0, this.nextStep())
                }, e.prototype.initView = function() {
                    var t = this;
                    this.node.children.forEach(function(e) {
                        var a = e.getChildByName("bg");
                        (a = a || t.getChildByPath(e, "node.bg")) && (a.width = cc.winSize.width, a.height = cc.winSize.height)
                    })
                }, e.prototype.nextStep = function() {
                    this._step = this._step + 1, this.showStep()
                }, e.prototype.skinStep = function() {
                    this.completeStep()
                }, e.prototype.completeStep = function() {
                    this._step = 100, this.node.active = !1, App.PlayerController.setTutorialStep(100), App.PopupManager.show(s.PopupConst.SIGN), this.offEvent(c.default.TUTORIAL_SHOW_MERGE_PANEL), this.offEvent(c.default.TUTORIAL_HIDE_MERGE_PANEL), this.offEvent(c.default.TUTORIAL_SHOW_BAG_LIST)
                }, e.prototype.showStep = function() {
                    var t = this;
                    App.PlayerController.isTutorialComplete || this._step >= 100 || this.node.children.forEach(function(e) {
                        var r, i = "step" + t._step;
                        (e.active = e.name == i, "step3" == e.name && 3 == t._step) && e.getChildByName("img_hand").runAction(cc.repeatForever(cc.sequence(cc.fadeIn(.2), cc.moveBy(.8, cc.v2(-190, 0)), cc.fadeOut(.5), cc.moveBy(0, cc.v2(190, 0)))));
                        "step4" == e.name && 4 == t._step && e.getChildByName("img_hand").runAction(cc.repeatForever(cc.sequence(cc.fadeIn(.2), cc.moveBy(.8, cc.v2(140, 250)), cc.fadeOut(.5), cc.moveBy(0, cc.v2(-140, -250)))));
                        "step6" == e.name && a.MenuItemClothPos && (e.position = cc.v2(a.MenuItemClothPos.x, a.MenuItemClothPos.y - cc.winSize.height / 2), (r = e.getChildByName("bg")).height = cc.winSize.height, r.y = -cc.winSize.height / 2 - e.y);
                        "step7" == e.name && a.BagItemClothPos && (e.position = cc.v2(a.BagItemClothPos.x, a.BagItemClothPos.y - cc.winSize.height / 2 + 77.5), (r = e.getChildByName("bg")).height = cc.winSize.height, r.y = -cc.winSize.height / 2 - e.y)
                    })
                }, e.prototype.onEvents = function(t, e) {
                    switch (t) {
                        case c.default.MERGE_SUCCESS:
                            this.onListenerMerge();
                            break;
                        case c.default.UI_MERGE_MENUITEM_SELECT:
                            this.onListenClickBagMenu();
                            break;
                        case c.default.UI_BAG_ITEM_SELECT:
                            this.onListenDress();
                            break;
                        case c.default.DRESS_SET_PART:
                            this.onListenDressParts();
                            break;
                        case c.default.TUTORIAL_SHOW_MERGE_PANEL:
                            this.onListenMergePanelShow();
                            break;
                        case c.default.TUTORIAL_HIDE_MERGE_PANEL:
                            this.onListenMergePanelHide();
                            break;
                        case c.default.TUTORIAL_SHOW_BAG_LIST:
                            this.onListenClickShowBagList()
                    }
                }, e.prototype.onListenMergePanelHide = function() {
                    this.nextStep()
                }, e.prototype.onListenMergePanelShow = function() {
                    App.PlayerController.isTutorialComplete || this.completeStep()
                }, e.prototype.onListenClickBagMenu = function() {
                    this.nextStep()
                }, e.prototype.onListenClickShowBagList = function() {
                    this.nextStep()
                }, e.prototype.onListenDress = function() {
                    this.nextStep()
                }, e.prototype.onListenDressParts = function() {
                    this._step < 6 && this.nextStep()
                }, e.prototype.onListenerMerge = function() {
                    if (!(this._step > 3)) {
                        App.DressController.getPartID(n.CharacterConst.Cloth), App.MergeController.LevelMax;
                        var t = App.MergeController.Board[n.CharacterConst.Cloth];
                        t && t.forEach(function(t) {
                            t && 1
                        }), this.nextStep()
                    }
                }, e = a = __decorate([i], e)
            }(o.default);
        a.default = p, cc._RF.pop()
    }, {
        "../../datas/const/CharacterConst": "CharacterConst",
        "../../datas/const/EventConst": "EventConst",
        "../../datas/const/PopupConst": "PopupConst",
        "../../framework/view/ViewBasic": "ViewBasic"
    }],
    UIHelper: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "9513cnec9RBeKC4T4cErOb6", "UIHelper"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return Object.defineProperty(t, "isFullScreen", {
                get: function() {
                    return cc.winSize.height / cc.winSize.width > 2
                },
                enumerable: !0,
                configurable: !0
            }), t.adapterScreen = function(t, e) {
                this.isFullScreen && (t.y = t.y - 60, e && e.y && (t.y = t.y - e.y))
            }, Object.defineProperty(t, "isLowResolution", {
                get: function() {
                    return cc.winSize.height / cc.winSize.width < 1.7
                },
                enumerable: !0,
                configurable: !0
            }), t.adapterLowResolutionPopup = function(e) {
                if (t.isLowResolution && e) {
                    var a = e.getChildByName("blockTouchPanel");
                    a && (a.removeComponent(cc.Widget), a.scale = 4), t.adapterLowResolutionScale(e)
                }
            }, t.adapterLowResolutionScale = function(e) {
                if (t.isLowResolution) {
                    var a = cc.winSize.height / cc.winSize.width;
                    e.scale = 1 - (1.7 - a)
                }
            }, t
        }();
        a.default = r, cc._RF.pop()
    }, {}],
    UITips: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "948e4Cp1qJEaroLPVOkuvk2", "UITips"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return t.show = function(t) {
                this.hide(), t = App.I18n.get(t);
                var e = this;
                cc.loader.loadRes("prefabs/components/UITips", cc.Prefab, function(a, r) {
                    var i = cc.instantiate(r);
                    i.getChildByName("bg").getChildByName("tValue").getComponent(cc.Label).string = t, cc.director.getScene().addChild(i), i.name = "uitips", i.x = cc.winSize.width / 2, i.y = 2 * cc.winSize.height / 3, cc.tween(i).delay(1).to(.4, {
                        opacity: 0,
                        position: cc.v2(i.x, i.y + 100)
                    }, {
                        easing: "sineOutIn"
                    }).call(function() {
                        e.hide()
                    }).start()
                })
            }, t.hide = function() {
                var t = cc.director.getScene().getChildByName("uitips");
                t && cc.director.getScene().removeChild(t)
            }, t
        }();
        a.default = r, cc._RF.pop()
    }, {}],
    ViewBasic: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "32ecaUm8w9Ew5iPY9JMzicb", "ViewBasic"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this._viewData = this.node.viewData
                }, e.prototype.bindEvents = function(t) {
                    var e = this,
                        a = this;
                    t.forEach(function(t) {
                        App.EventManager.addEventListener(t, function(e) {
                            a.onEvents(t, e)
                        }, e)
                    })
                }, e.prototype.onEvents = function(t, e) {}, e.prototype.bindEvent = function(t, e, a) {
                    App.EventManager.addEventListener(t, e, a)
                }, e.prototype.sendEvent = function(t, e) {
                    App.EventManager.emitEvent(t, e)
                }, e.prototype.offEvent = function(t) {
                    App.EventManager.offEventListener(t)
                }, e.prototype.onClick = function(t, e, a) {
                    t && t.getComponent(cc.Button) && t.getComponent(cc.Button).node.on("click", function(t) {
                        e && (e(t), App.AudioManager.playEffect("button"))
                    }, a)
                }, e.prototype.setLabel = function(t, e) {
                    if (t) {
                        var a = t.getComponent(cc.Label);
                        a && (e = App.I18n.get(e), a.string = e)
                    }
                }, e.prototype.initUIClick = function(t, e) {
                    var a = this,
                        r = e && e || this.node,
                        i = this;
                    t.forEach(function(t) {
                        var e = a.getChild(r, t);
                        e && e.getComponent(cc.Button) && e.getComponent(cc.Button).node.on("click", function() {
                            App.AudioManager.playEffect("button"), i.onUIClick(e, t)
                        })
                    })
                }, e.prototype.onUIClick = function(t, e) {}, e.prototype.getChild = function(t, e) {
                    if (t.name === e) return t;
                    for (var a = 0; a < t.children.length; a++)
                        if (this.getChild(t.children[a], e)) return this.getChild(t.children[a], e);
                    return null
                }, e.prototype.getChildByPath = function(t, e) {
                    for (var a = e.split("."), r = t, i = 0; i < a.length; i++) {
                        var o = a[i];
                        if (r = r.getChildByName(o), 0 == cc.isValid(r)) return null
                    }
                    return r
                }, e.prototype.onDestroy = function() {}, e = __decorate([i], e)
            }(cc.Component));
        a.default = o, cc._RF.pop()
    }, {}],
    VisitModeUI: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "2c47faXvDpEIKppov81g2x4", "VisitModeUI"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r, i = cc._decorator,
            o = i.ccclass,
            n = (i.property, t("../../framework/view/ViewBasic")),
            s = t("../../datas/const/EventConst"),
            c = t("../common/UITips"),
            p = t("../../framework/platform/PlatformManager"),
            l = t("../common/LogManager"),
            d = t("../../datas/const/PopupConst"),
            h = t("../../datas/configs/BagConfig"),
            u = t("../../datas/configs/ClothConfig"),
            f = t("../../datas/const/GameConst"),
            m = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._likeCount = 0, e._fromPopup = -1, e
                }
                var a;
                return __extends(e, t), a = e, e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this._upAni = this.node.getChildByName("up_ani"), this._upAni.active = !1, this._list = [], this._listIndex = 0, this.initUIClick(["btnHome", "btnVisit", "btnLike", "btnPrev", "btnNext", "btnCollect"]), this._platform = p.default.getInstance().getPlatform()
                }, e.initLocalData = function() {
                    var t = cc.sys.localStorage.getItem("collect_list");
                    a._collectList = t ? JSON.parse(t) : {}
                }, e.prototype.showInfo = function(t) {
                    -1 == this._fromPopup && (t.from_visitor ? this._fromPopup = 1 : this._fromPopup = 2), this._isFromCollect = !1, t.from_visitor && (this._isFromCollect = !0), this._list.push(t.data), this._listIndex = this._list.length - 1, this.updateVisitorInfo(), this.updatePrevStatus()
                }, e.prototype.updateVisitorInfo = function() {
                    this._upHadClick = !1, this._upAni.active = !1, wx && (wx.hideToast(), wx.showToast({
                        title: "\u559c\u6b22\u53ef\u4ee5\u70b9\u8d5e\u5594~"
                    }));
                    var t = this._list[this._listIndex];
                    this._currentData = t, cc.log("showInfo = ", t);
                    var e = this.node.getChildByName("btnLike");
                    this._likeCount = 0;
                    var a = this;
                    this._platform.getVisitor({
                        _openid: t._openid,
                        id: this.getCollectID()
                    }, function(t) {
                        cc.log("visitor = ", t), t && t.like_total ? (a._likeCount = t.like_total, a.setLabel(a.getChildByPath(e, "Background.tValue"), t.like_total.toString())) : a.setLabel(a.getChildByPath(e, "Background.tValue"), "0")
                    });
                    var i = this.getChildByPath(this.node, "top.tScore"),
                        o = App.I18n.get("best_style_" + this.getCharacterKey().toString());
                    this.setLabel(i, o + ": " + t.score), i.getComponent(cc.Label)._forceUpdateRenderData(!0), this.getChildByPath(this.node, "top.scorebg").width = i.width + 100;
                    var n = this.getChildByPath(this.node, "top.tTitle"),
                        s = t.userInfo,
                        c = "\u6b22\u8fce\u6765\u5230\u6e29\u99a8\u7684\u5c0f\u7a9d";
                    if (s && (s.nickName && (c = s.nickName), s.avatarUrl)) {
                        var p = this.getChildByPath(this.node, "top.avatarIcon");
                        cc.loader.load(s.avatarUrl + "?aaa=aa.jpg", function(t, e) {
                            e && (p.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e), p.width = 80, p.height = 80)
                        })
                    }
                    this.setLabel(n, c), this.updateBtnCollect(), r ? a._platform.addVisit(a._currentData._openid, r) : this._platform.getUserRank(function(t) {
                        t.rankData && (r = t.rankData, a._platform.addVisit(a._currentData._openid, r))
                    })
                }, e.prototype.updateBtnCollect = function() {
                    var t = this.node.getChildByName("btnCollect"),
                        e = this.getCollectID();
                    a.isCollected(e) ? this.setLabel(this.getChildByPath(t, "Background.tValue"), "\u53d6\u6d88\n\u6536\u85cf") : this.setLabel(this.getChildByPath(t, "Background.tValue"), "\u6536\u85cf")
                }, e.prototype.onUIClick = function(e, i) {
                    switch (t.prototype.onUIClick.call(this, e, i), i) {
                        case "btnHome":
                            this._listIndex = 0, this._list = [], this.sendEvent(s.default.UI_VISIT_MODE, {
                                mode: "home"
                            }), 1 == this._fromPopup ? App.PopupManager.show(d.PopupConst.VISITOR, {
                                from_visitor: 1
                            }) : App.PopupManager.show(d.PopupConst.RANK, {
                                from_visitor: 1
                            }), this._fromPopup = -1;
                            break;
                        case "btnVisit":
                            if (wx) {
                                var o = this,
                                    n = p.default.getInstance().getPlatform();
                                wx.hideLoading(), wx.showLoading({
                                    title: "Đang tìm người chơi..."
                                }), n.getRandomVisit(function(t) {
                                    cc.log("res = ", t), t && (o.sendEvent(s.default.UI_VISIT_MODE, {
                                        mode: "friend",
                                        data: t
                                    }), o.updatePrevStatus()), wx.hideLoading()
                                }, function() {
                                    wx.hideLoading()
                                })
                            }
                            this._isFromCollect ? l.default.getInstance().add({
                                tag: 27
                            }) : l.default.getInstance().add({
                                tag: 19
                            });
                            break;
                        case "btnLike":
                            if (this._upHadClick) return void c.default.show("Đã đánh giá hôm nay, đến thăm vào ngày mai");
                            l.default.getInstance().add({
                                tag: 28
                            });
                            var h = this,
                                u = function() {
                                    h._upHadClick = !0, h._upAni.active = !0, h._upAni.getComponent(cc.Animation).play();
                                    var t = h.node.getChildByName("btnLike");
                                    cc.log("_likeCount = ", h._likeCount), h._likeCount = h._likeCount + 1, h.setLabel(h.getChildByPath(t, "Background.tValue"), h._likeCount.toString()), h._platform.addLike(h._currentData._openid, r)
                                };
                            if (!r) return wx.hideLoading(), wx.showLoading({
                                title: "Đang tải..."
                            }), void this._platform.getUserRank(function(t) {
                                wx.hideLoading(), t.rankData ? (r = t.rankData, u()) : App.PopupManager.show(d.PopupConst.TIPS, {
                                    message: "Người chơi chưa tham gia xếp hạng không thể like và sưu tầm.\nMời các bạn vào đấu trường PK xếp hạng."
                                })
                            });
                            u();
                            break;
                        case "btnPrev":
                            this._listIndex = this._listIndex - 1, this._listIndex = Math.max(this._listIndex, 0), this.updateVisitorInfo(), this.updatePrevStatus(), this.sendEvent(s.default.DRESS_VISITOR, {
                                mode: "friend",
                                data: this._list[this._listIndex]
                            });
                            break;
                        case "btnNext":
                            this._listIndex = this._listIndex + 1, this._listIndex = Math.min(this._listIndex, this._list.length - 1), this.updateVisitorInfo(), this.updatePrevStatus(), this.sendEvent(s.default.DRESS_VISITOR, {
                                mode: "friend",
                                data: this._list[this._listIndex]
                            });
                            break;
                        case "btnCollect":
                            var f = this.getCollectID();
                            a.isCollected(f) ? a.removeCollect(f) : (a.addCollect({
                                id: this.getCollectID(),
                                rankData: this._currentData
                            }), c.default.show("Đã thu thập thành công ~")), this.updateBtnCollect()
                    }
                }, e.prototype.getCharacterKey = function() {
                    for (var t = this._currentData.data, e = h.default, a = u.default, r = [], i = 1; i <= f.default.max_attr_kind; ++i)
                        for (var o in r[i] = [], t)
                            if ("hat" != o && "face" != o) {
                                var n = parseInt(t[o]),
                                    s = e[o][n];
                                s || (s = a[o][n]), s && s["attr" + i] && r[i].push(s["attr" + i])
                            } var c = t.hat,
                        p = t.face,
                        l = 0;
                    for (var o in r) {
                        var d = r[o],
                            m = 0;
                        for (var _ in d) {
                            var g = "attr" + (parseInt(_) + 1),
                                y = parseFloat(d[_]);
                            c && parseInt(c) > 0 && (y *= 1 + parseFloat(e.hat[c][g]) / 100), p && parseInt(p) > 0 && (y *= 1 + parseFloat(e.hat[p][g]) / 100), d[_] = Math.floor(y), m += d[_]
                        }
                        d.push(m), l = d.length - 1, d.push(o)
                    }
                    r.sort(function(t, e) {
                        return e[l] - t[l]
                    });
                    var C = r[0];
                    return C[C.length - 1]
                }, e.prototype.getCollectID = function() {
                    var t = this.getCharacterKey();
                    return t = f.default.best_styles[Number(t)], this._currentData._openid + "+" + t + "+" + this._currentData.score.toString()
                }, e.prototype.updatePrevStatus = function() {
                    var t = this.node.getChildByName("btnPrev"),
                        e = this.node.getChildByName("btnNext"),
                        a = 0 == this._list.length;
                    t.getComponent(cc.Button).interactable = !(a || 0 == this._listIndex), e.getComponent(cc.Button).interactable = !(a || this._listIndex == this._list.length - 1)
                }, e.initVisitorData = function() {
                    var t = p.default.getInstance().getOfflineTime(),
                        e = Math.floor(t * (.4 + .5 * Math.random())),
                        a = Math.floor(t * Math.random() * .5);
                    this._visitorData = {
                        visitor_up: e,
                        visitor_down: a,
                        total: e + a
                    }
                }, e.getVisitorData = function() {
                    return this._visitorData
                }, e.addCollect = function(t) {
                    cc.log("addCollect = ", t.id), a._collectList[t.id] || (a._collectList[t.id] = t.rankData, cc.sys.localStorage.setItem("collect_list", JSON.stringify(a._collectList)))
                }, e.removeCollect = function(t) {
                    a._collectList[t] && (a._collectList[t] = null, cc.sys.localStorage.setItem("collect_list", JSON.stringify(a._collectList)))
                }, e.getCollectList = function() {
                    return a._collectList
                }, e.isCollected = function(t) {
                    return !!a._collectList[t]
                }, e = a = __decorate([o], e)
            }(n.default);
        a.default = m, cc._RF.pop()
    }, {
        "../../datas/configs/BagConfig": "BagConfig",
        "../../datas/configs/ClothConfig": "ClothConfig",
        "../../datas/const/EventConst": "EventConst",
        "../../datas/const/GameConst": "GameConst",
        "../../datas/const/PopupConst": "PopupConst",
        "../../framework/platform/PlatformManager": "PlatformManager",
        "../../framework/view/ViewBasic": "ViewBasic",
        "../common/LogManager": "LogManager",
        "../common/UITips": "UITips"
    }],
    Weixin: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "21991qHLctL0qbAG0p4cTXW", "Weixin"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = t("./H5"),
            i = t("../PlatformManager"),
            o = t("../../../datas/configs/AppConfig"),
            n = "public-tlvhe",
            s = 0,
            c = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    wx.cloud.init({
                        env: n,
                        traceUser: !0
                    });
                    var a = e;
                    return wx.getSetting({
                        success: function(t) {
                            console.log("response == ", t), t.authSetting["scope.userInfo"] && wx.getUserInfo({
                                lang: "zh_CN",
                                success: function(t) {
                                    console.log("scope.userInfo ", t), t.userInfo && (a._userInfo = t.userInfo)
                                }
                            })
                        }
                    }), e.initAds(), e
                }
                return __extends(e, t), e.prototype.login = function(t) {
                    this._loginCb = t;
                    var e = this;
                    this.onCloudApi("load", {}, function(t) {
                        t && t[0] && (e._cloudData = t[0]), e.onLoginComplete()
                    }, function() {
                        e.onLoginComplete()
                    })
                }, e.prototype.onLoginComplete = function() {
                    this._loginCb && this._loginCb(), this.save(this._localData)
                }, e.prototype.getUserInfo = function() {
                    return this._userInfo
                }, e.prototype.share = function(t) {
                    var e = {
                        title: Math.random() > .5 ? "@\u4f60, \u5f15\u9886\u65f6\u5c1a\u6f6e\u6d41\uff0c\u6253\u9020\u8863\u54c1\u8fbe\u4eba~" : "@\u4f60, \u4e00\u8d77\u8fc7\u6765\u6b23\u8d4f\u8863\u54c1\u8fbe\u4eba\u7684\u8863\u67dc\u5594~",
                        imageUrl: "https://mmocgame.qpic.cn/wechatgame/5kh2GianoVm5IibN6QiaJx8DoW912KauppeYdhFkSAVBTFyP6vqUdlc3HT2RAQCAmoK/0"
                    };
                    wx.shareAppMessage(e), t && t.callback && t.callback()
                }, e.prototype.shareScreen = function(t) {
                    var e = ["\u60f3\u4e0d\u5230\u8fd9\u51e0\u4ef6\u670d\u9970\u53ef\u4ee5\u8fd9\u6837\u642d\u914d", "69%\u7684\u4eba\u90fd\u4f1a\u7a7f\u6210\u8fd9\u6837\uff0c\u5feb\u6765\u56f4\u89c2", "\u53ea\u67091%\u7684\u4eba\u80fdHold\u4f4f\u8fd9\u6761\u957f\u88d9"],
                        a = Math.floor(3 * Math.random()),
                        r = 150;
                    t && t.ypos && (r = t.ypos), canvas.toTempFilePath({
                        y: r,
                        success: function(t) {
                            wx.shareAppMessage({
                                title: e[a],
                                imageUrl: t.tempFilePath
                            })
                        }
                    })
                }, e.prototype.compareVersion = function(t, e) {
                    t = t.split("."), e = e.split(".");
                    for (var a = Math.max(t.length, e.length); t.length < a;) t.push("0");
                    for (; e.length < a;) e.push("0");
                    for (var r = 0; r < a; r++) {
                        var i = parseInt(t[r]),
                            o = parseInt(e[r]);
                        if (i > o) return 1;
                        if (i < o) return -1
                    }
                    return 0
                }, e.prototype.initGameScene = function() {
                    var t = wx.getSystemInfoSync().SDKVersion;
                    this.compareVersion(t, "2.11.3") >= 0 ? wx.showShareMenu({
                        menus: ["shareAppMessage", "shareTimeline"]
                    }) : wx.showShareMenu(), wx.onShareAppMessage(function(t) {
                        return {
                            title: Math.random() > .5 ? "@\u4f60, \u5f15\u9886\u65f6\u5c1a\u6f6e\u6d41\uff0c\u6253\u9020\u8863\u54c1\u8fbe\u4eba~" : "@\u4f60, \u4e00\u8d77\u8fc7\u6765\u6b23\u8d4f\u8863\u54c1\u8fbe\u4eba\u7684\u8863\u67dc\u5594~",
                            imageUrl: "https://mmocgame.qpic.cn/wechatgame/5kh2GianoVm5gpDdCEWLY1H4ibSMlDYibYdwbO8coxKz6X3U10UagU2qxC2jIeZhdj8/0",
                            success: function(t) {
                                console.log(t)
                            },
                            fail: function(t) {
                                console.log(t)
                            }
                        }
                    }), this.compareVersion(t, "2.11.3") >= 0 && wx.onShareTimeline(function() {
                        return {
                            title: "@\u4f60, \u5f15\u9886\u65f6\u5c1a\u6f6e\u6d41\uff0c\u6253\u9020\u8863\u54c1\u8fbe\u4eba~",
                            imageUrl: "https://mmocgame.qpic.cn/wechatgame/5kh2GianoVm5gpDdCEWLY1H4ibSMlDYibYdwbO8coxKz6X3U10UagU2qxC2jIeZhdj8/0",
                            query: "a=1&b=2"
                        }
                    })
                }, e.prototype.save = function(e, a) {
                    if (t.prototype.save.call(this, e), e && e.sortid && this.setUserCloudStorage(e.sortid), !a) {
                        if (e && e.sortid && e.sortid < 5) return;
                        var r = Math.floor((new Date).getTime() / 1e3);
                        if (s > 0 && r - s < 300) return;
                        s = r
                    }
                    var i = this;
                    clearTimeout(this._timer), this._timer = setTimeout(function() {
                        i.onCloudApi("save", i._localData), clearTimeout(i._timer)
                    }, 500)
                }, e.prototype.clearLocalData = function() {
                    this._cloudData = null, t.prototype.clearLocalData.call(this)
                }, e.prototype.showVideo = function(t, e, a) {
                    if (this._adVideoGroups[t]) {
                        var r = this;
                        this._adVideoGroups[t].canPlay = !1, this._adVideoGroups[t].success = function(t) {
                            e && e()
                        }, this._adVideoGroups[t].failure = function(i) {
                            wx.showModal({
                                content: "\u672a\u89c2\u770b\u5b8c\u6574\u89c6\u9891\uff0c\u65e0\u6cd5\u83b7\u5f97\u5956\u52b1",
                                cancelText: "\u653e\u5f03",
                                confirmText: "\u7ee7\u7eed",
                                success: function(i) {
                                    i.confirm && r.showVideo(t, e, a), i.cancel && a && a()
                                }
                            })
                        }, this._adVideoGroups[t].videoAd.show().then(function() {}).catch(function(t) {
                            return console.log(t)
                        })
                    }
                }, e.prototype.showInterstitialAd = function() {
                    this._interstitialAd ? this._interstitialAd.show().catch(function(t) {
                        console.error("showInterstitialAd = ", t)
                    }) : wx.createInterstitialAd && (this._interstitialAd = wx.createInterstitialAd({
                        adUnitId: "adunit-a4b5cf2d732cbb52"
                    }), this.showInterstitialAd())
                }, e.prototype.hideInterstitialAd = function() {
                    this._interstitialAd && (this._interstitialAd.destroy(), this._interstitialAd = null)
                }, e.prototype.showBannerAd = function() {
                    this._bannerAd && this._bannerAd.show()
                }, e.prototype.hideBannerAd = function() {
                    this._bannerAd && (this._bannerAd.hide(), this._bannerAd.destroy(), this._bannerAd = null, this.updateBannerAd())
                }, e.prototype.getOfflineTime = function() {
                    return t.prototype.getOfflineTime.call(this)
                }, e.prototype.getInitData = function(t) {
                    return this._localData && this._localData[t] ? this._localData[t] : this._cloudData && this._cloudData[t] ? this._cloudData[t] : null
                }, e.prototype.getRanks = function(t, e, a) {
                    this.onCloudApi(t, e, a)
                }, e.prototype.getUserRank = function(t) {
                    this.onCloudApi("getUserRank", {}, t)
                }, e.prototype.setUserCloudStorage = function(t) {
                    this._lastLevel && t <= this._lastLevel || (this._lastLevel = t, wx.setUserCloudStorage({
                        KVDataList: [{
                            key: "lvlrank",
                            value: t.toString()
                        }],
                        success: function(t) {
                            console.log("setUserCloudStorage.success: ", t)
                        },
                        fail: function(t) {
                            console.log("setUserCloudStorage.fail: ", t)
                        },
                        complete: function(t) {
                            console.log("setUserCloudStorage.complete: ", t)
                        }
                    }))
                }, e.prototype.initAds = function() {
                    this._adVideoGroups = {
                        "30s": {
                            type: "30s",
                            id: "adunit-59a18af899e035c1",
                            videoAd: null
                        },
                        "15s": {
                            type: "15s",
                            id: "adunit-297ffc92fb1ec197",
                            videoAd: null
                        }
                    };
                    var t = this,
                        e = function(e) {
                            var r = a._adVideoGroups[e],
                                i = wx.createRewardedVideoAd({
                                    adUnitId: r.id,
                                    multiton: !0
                                });
                            i.onLoad(function() {
                                t._adVideoGroups[e].canPlay = !0
                            }), i.onError(function(a) {
                                t._adVideoGroups[e].canPlay = !1
                            }), i.onClose(function(a) {
                                a && a.isEnded || void 0 === a ? (t._adVideoGroups[e].success && t._adVideoGroups[e].success(a), t._adVideoGroups[e].success = null, t._adVideoGroups[e].failure = null) : (t._adVideoGroups[e].failure && (t._adVideoGroups[e].failure(a), console.log("\u672a\u64ad\u653e\u5b8c\u6210")), t._adVideoGroups[e].success = null, t._adVideoGroups[e].failure = null)
                            }), t._adVideoGroups[e].videoAd = i
                        },
                        a = this;
                    for (var r in this._adVideoGroups) e(r);
                    wx.createInterstitialAd && (this._interstitialAd = wx.createInterstitialAd({
                        adUnitId: "adunit-a4b5cf2d732cbb52"
                    })), this.updateBannerAd()
                }, e.prototype.updateBannerAd = function() {
                    var t = this,
                        e = wx.getSystemInfoSync().windowWidth,
                        a = wx.getSystemInfoSync().windowHeight,
                        r = wx.createBannerAd({
                            adUnitId: "adunit-75ee4a36a4d6ad39",
                            adIntervals: 30,
                            style: {
                                top: 0,
                                left: 0,
                                width: e
                            }
                        });
                    r.onResize(function(t) {
                        r.style.top = a - r.style.realHeight, console.log("windowHeight - banner.style.realHeight = ", a, r.style.realHeight)
                    }), r.onError(function(t) {
                        console.log(t)
                    }), r.onLoad(function() {
                        console.log("banner \u5e7f\u544a\u52a0\u8f7d\u6210\u529f"), t._bannerAd = r
                    })
                }, e.prototype.log = function(t) {
                    t || (t = {}), t.update_time = Math.floor((new Date).getTime() / 1e3), t.created_time = i.default.getInstance().getCreatedTime()
                }, e.prototype.logUI = function(t) {
                    t || (t = {}), t.update_time = Math.floor((new Date).getTime() / 1e3), t.version = o.default.version, this.onCloudApi("logUI", t)
                }, e.prototype.addLike = function(t, e) {
                    this.onCloudApi("addLike", {
                        to_id: t,
                        from_user: e
                    })
                }, e.prototype.addVisit = function(t, e) {
                    this.onCloudApi("addVisit", {
                        to_id: t,
                        from_user: e
                    })
                }, e.prototype.getLikes = function(t) {
                    this.onCloudApi("getLikes", {}, t)
                }, e.prototype.getVisits = function(t) {
                    this.onCloudApi("getVisits", {}, t)
                }, e.prototype.addCollect = function(t) {
                    this.onCloudApi("addCollect", t)
                }, e.prototype.getCollects = function(t, e) {
                    this.onCloudApi("getCollects", t, e)
                }, e.prototype.deleteCollect = function(t) {
                    this.onCloudApi("delCollect", {
                        id: t
                    })
                }, e.prototype.getVisitor = function(t, e) {
                    this.onCloudApi("getVisitor", t, e)
                }, e.prototype.traceLog = function() {
                    this.onCloudApi("traceLog", {})
                }, e.prototype.getRandomVisit = function(t, e) {
                    var a = App.MergeController.LevelMax,
                        r = 100 * Math.random(),
                        i = a;
                    i = r <= 10 ? a - 1 : r > 10 && r <= 90 ? a + Math.floor(4 * Math.random()) : Math.floor(Math.random() * (30 - a - 5)) + a, i = Math.min(i, 30), i = Math.max(1, i), cc.log("level = ", r, i), this.onCloudApi("getRndVisit", {
                        level: Math.floor(i)
                    }, t, e)
                }, e.prototype.createUserInfoButton = function(t) {
                    var e = this,
                        a = wx.getSystemInfoSync(),
                        r = wx.createUserInfoButton({
                            type: "text",
                            text: "\u5f00\u59cbPK",
                            style: {
                                left: a.windowWidth / 2 - 50,
                                top: a.windowHeight - 200,
                                width: 100,
                                height: 40,
                                lineHeight: 40,
                                backgroundColor: "#E389CC",
                                color: "#ffffff",
                                textAlign: "center",
                                fontSize: 16,
                                borderRadius: 4
                            }
                        });
                    return r.onTap(function(a) {
                        console.log("createUserInfoButton = ", a), a.userInfo && (e._userInfo = a.userInfo, t && t())
                    }), r
                }, e.prototype.onCloudApi = function(t, e, a, r) {
                    wx.cloud.callFunction({
                        name: t,
                        data: {
                            env: n,
                            data: e
                        },
                        success: function(e) {
                            console.log("onCloudApi = ", t, e), a && a(e.result)
                        },
                        fail: function(t) {
                            r && r(), console.log(t)
                        }
                    })
                }, e
            }(r.default);
        a.default = c, cc._RF.pop()
    }, {
        "../../../datas/configs/AppConfig": "AppConfig",
        "../PlatformManager": "PlatformManager",
        "./H5": "H5"
    }],
    test: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "54bcfIHOqpIqKA6Dy4YGCs+", "test"), Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            i = r.ccclass,
            o = (r.property, t("../scripts/datas/configs/ClothConfig")),
            n = t("../scripts/datas/configs/BagConfig"),
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return __extends(e, t), e.prototype.onLoad = function() {
                    this.node.getChildByName("node1");
                    console.log("test.start")
                }, e.prototype.start = function() {
                    this.pkTest2()
                }, e.prototype.pkTest2 = function() {
                    this.scores = [];
                    var t = {};
                    this.highest_key = 0;
                    for (var e = {
                            hair: "6",
                            cloth: "6",
                            trous: "6",
                            hat: "104"
                        }, a = n.default, r = o.default, i = e, s = 1; s <= 12; ++s)
                        for (var c in this.scores[s] = [], i)
                            if ("hat" != c && "face" != c) {
                                var p = parseInt(i[c]);
                                (l = a[c][p]) || (l = r[c][p]), l && l["attr" + s] && this.scores[s].push(l["attr" + s])
                            } console.log("this.bestscore = ", this.scores);
                    i = 0;
                    for (var s in this.history_best_scores = {}, this.scores) {
                        c = this.scores[s], p = 0;
                        for (var l in c) {
                            r = "attr" + (parseInt(l) + 1);
                            var d = parseFloat(c[l]),
                                h = e.hat;
                            h && 0 < parseInt(h) && (d *= 1 + parseFloat(a.hat[h][r]) / 100);
                            var u = e.face;
                            u && 0 < parseInt(u) && (d *= 1 + parseFloat(a.face[u][r]) / 100), c[l] = parseInt(d), p += c[l]
                        }
                        var f = t[s];
                        this.history_best_scores[s] = f ? Math.max(p, f) : p, i < p && (this.highest_key = s, i = p)
                    }
                    console.log("highest_key  ", this.highest_key)
                }, e.prototype.numtest = function() {
                    var t = "1234567",
                        e = "";
                    if (6 < t.toString().length) {
                        var a = t.length / 3;
                        e = ["", "K", "M", "B", "T", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH"][a -= 0 == t.length % 3 ? 2 : 1], t = t.substr(0, (t.length - 3) * a)
                    }
                    console.log(" e ======= ", e, t), console.log("///// ", this.number_format(t, 0, ",") + e)
                }, e.prototype.number_format = function(t, e, a) {
                    var r = ["", "K", "M", "B", "T", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH"];
                    t = (t + "").replace(/[^0-9+-Ee.]/g, "");
                    var i, o, n = isFinite(+t) ? +t : 0,
                        s = isFinite(+e) ? Math.abs(e) : 0,
                        c = void 0 === a ? "," : a;
                    l = "", l = (s ? (i = n, r = s, o = Math.pow(10, r), "" + Math.ceil(i * o) / o) : "" + Math.round(n)).split(".");
                    for (var p = /(-?\d+)(\d{3})/; p.test(l[0]);) l[0] = l[0].replace(p, "$1" + c + "$2");
                    return (l[1] || "").length < s && (l[1] = l[1] || "", l[1] += new Array(s - l[1].length + 1).join("0")), l.join(".")
                }, e.prototype.pkTest = function() {
                    var t = {},
                        e = {
                            hair: "6",
                            cloth: "6",
                            trous: "6",
                            hat: "0"
                        };
                    this.scores = [];
                    for (var a = 1; a <= 12; a++)
                        for (var r in this.scores[a] = [], e) {
                            var i = e[r];
                            if ("hat" != r && "face" != r) {
                                var s = o.default[r][Number(i)];
                                s && this.scores[a].push(s["attr" + a.toString()])
                            }
                        }
                    console.log("scores == ", this.scores), this.history_best_scores = {};
                    var c = 0;
                    for (var r in this.scores) {
                        var p = this.scores[r],
                            l = 0;
                        for (var d in p) {
                            var h = p[d],
                                u = "attr" + (parseInt(h) + 1),
                                f = parseFloat(h),
                                m = e.hat;
                            console.log("s======== ", m, u), m && 0 < parseInt(m) && (f *= 1 + parseFloat(n.default.hat[m][u]) / 100);
                            var _ = e.face;
                            _ && 0 < parseInt(_) && (f *= 1 + parseFloat(n.default.face[_][u]) / 100), l += h = parseInt(f)
                        }
                        var g = t[r];
                        this.history_best_scores[r] = g ? Math.max(l, g) : l, c < l && (this.highest_key = r, c = l)
                    }
                    console.log("highest_key == ", this.highest_key)
                }, e.prototype.characterTest = function() {
                    var t = {
                        hair: "2",
                        cloth: "6",
                        trous: "6"
                    };
                    this.scores = [];
                    for (var e = 1; e <= 12; e++)
                        for (var a in this.scores[e] = [], t)
                            if (t.hasOwnProperty(a)) {
                                var r = t[a],
                                    i = o.default[a][Number(r)];
                                i && this.scores[e].push(i["attr" + e.toString()])
                            } var n = 0,
                        s = 0,
                        c = 0,
                        p = 0;
                    for (var l in this.scores) {
                        var d = this.scores[l],
                            h = 0;
                        for (var u in d) h += parseInt(d[u]);
                        c < h ? (c = h, n = l) : p < h && (p = h, s = l)
                    }
                    console.log("i , o = ", n, s), console.log("testconfig =", this.testconfig[n].role, this.testconfig[s].role);
                    var f = Math.ceil(this.testconfig[n].per * this.testconfig[s].per * 100);
                    console.log("per = ", f)
                }, e.prototype.admobInit = function() {
                    if (cc.sys.isMobile) {
                        var t = this;
                        sdkbox.PluginAdMob.setListener({
                            adViewDidReceiveAd: function(e) {
                                t.showInfo("adViewDidReceiveAd name=" + e), "gameover" == e && t.showInterstitial()
                            },
                            adViewDidFailToReceiveAdWithError: function(e, a) {
                                t.showInfo("adViewDidFailToReceiveAdWithError name=" + e + " msg=" + a)
                            },
                            adViewWillPresentScreen: function(e) {
                                t.showInfo("adViewWillPresentScreen name=" + e)
                            },
                            adViewDidDismissScreen: function(e) {
                                t.showInfo("adViewDidDismissScreen name=" + e)
                            },
                            adViewWillDismissScreen: function(e) {
                                t.showInfo("adViewWillDismissScreen=" + e)
                            },
                            adViewWillLeaveApplication: function(e) {
                                t.showInfo("adViewWillLeaveApplication=" + e)
                            }
                        }), sdkbox.PluginAdMob.init()
                    }
                }, e.prototype.cacheInterstitial = function() {
                    cc.sys.isMobile && sdkbox.PluginAdMob.cache("gameover")
                }, e.prototype.showInterstitial = function() {
                    console.log("showInterstitial .1 "), cc.sys.isMobile && (console.log("showInterstitial .2 "), sdkbox.PluginAdMob.show("gameover"))
                }, e.prototype.showInfo = function(t) {
                    console.log("info: ", t)
                }, e = __decorate([i], e)
            }(cc.Component);
        a.default = s, cc._RF.pop()
    }, {
        "../scripts/datas/configs/BagConfig": "BagConfig",
        "../scripts/datas/configs/ClothConfig": "ClothConfig"
    }],
    use_reversed_rotateBy: [function(t, e, a) {
        "use strict";
        cc._RF.push(e, "3851e6WCC9Ct5s/6FeQOXiC", "use_reversed_rotateBy"), cc.RotateBy._reverse = !0, cc._RF.pop()
    }, {}]
}, {}, ["use_reversed_rotateBy", "test", "GameScene", "Init", "LoginScene", "AppConfig", "BagConfig", "ClothConfig", "DrawConfig", "GameConfig", "TestConfig", "CharacterConst", "EventConst", "GameConst", "I18n", "PopupConst", "AudioManager", "EventManager", "I18nManager", "IManager", "LoaderManager", "PopupManager", "PlatformManager", "FourthreeNine", "H5", "IPlatform", "QQ", "TT", "Weixin", "NumberHelper", "UIHelper", "IPopup", "PopupBasic", "ViewBasic", "BagController", "BagModel", "BagItemUI", "BagUI", "MenuItem", "MenuPanel", "CharacterConfHelper", "DataStoreManager", "LogManager", "PKHelper", "UITips", "GoldDrop", "TopLayer", "IBagItem", "ICharacter", "IDressItem", "IMergeItem", "IShopItem", "DressController", "DressData", "RoleDress", "MergeController", "MergeModel", "MainUI", "MenuItemUI", "LockPanelUI", "MergeItemUI", "MergePanelUI", "ShopItemUI", "ShopPanelUI", "PlayerController", "IRank", "PlayerData", "PopupAutoMerge", "PopupCoinDouble", "PopupDailySign", "PopupDrawExchange", "PopupDrawPreview", "PopupFreeCoins", "PopupFreeCoinsQQ", "PopupMystery", "PopupNavigateGift", "PopupNewRank", "PopupOfflineEarn", "PopupPK", "PopupPKHelp", "PopupPhoto", "PopupQuests", "PopupRank", "PopupRecordVideo", "PopupRewardSuc", "PopupTest", "PopupTips", "PopupUnlock", "PopupVisitSetting", "PopupVisitor", "PKCalNode", "PKScoreItem", "TutorialSteps", "BaseUI", "GiftUI", "VisitModeUI"]);