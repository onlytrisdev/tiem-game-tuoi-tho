function waitAsync(e, t) {
    return new Promise(function(a, i) {
        setTimeout(function() {
            t && t(), a()
        }, e)
    })
}

function closure(e) {
    for (var t = [], a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
    return function() {
        for (var a = [], i = 0; i < arguments.length; i++) a[i] = arguments[i];
        return e.apply(null, t.concat(a))
    }
}
var __reflect = this && this.__reflect || function(e, t, a) {
        e.__class__ = t, a ? a.push(t) : a = [t], e.__types__ = e.__types__ ? a.concat(e.__types__) : a
    },
    __extends = this && this.__extends || function(e, t) {
        function a() {
            this.constructor = e
        }
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        a.prototype = t.prototype, e.prototype = new a
    },
    __awaiter = this && this.__awaiter || function(e, t, a, i) {
        return new(a || (a = Promise))(function(s, n) {
            function o(e) {
                try {
                    h(i.next(e))
                } catch (t) {
                    n(t)
                }
            }

            function r(e) {
                try {
                    h(i["throw"](e))
                } catch (t) {
                    n(t)
                }
            }

            function h(e) {
                e.done ? s(e.value) : new a(function(t) {
                    t(e.value)
                }).then(o, r)
            }
            h((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function a(e) {
            return function(t) {
                return i([e, t])
            }
        }

        function i(a) {
            if (s) throw new TypeError("Generator is already executing.");
            for (; h;) try {
                if (s = 1, n && (o = n[2 & a[0] ? "return" : a[0] ? "throw" : "next"]) && !(o = o.call(n, a[1])).done) return o;
                switch (n = 0, o && (a = [0, o.value]), a[0]) {
                    case 0:
                    case 1:
                        o = a;
                        break;
                    case 4:
                        return h.label++, {
                            value: a[1],
                            done: !1
                        };
                    case 5:
                        h.label++, n = a[1], a = [0];
                        continue;
                    case 7:
                        a = h.ops.pop(), h.trys.pop();
                        continue;
                    default:
                        if (o = h.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                            h = 0;
                            continue
                        }
                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                            h.label = a[1];
                            break
                        }
                        if (6 === a[0] && h.label < o[1]) {
                            h.label = o[1], o = a;
                            break
                        }
                        if (o && h.label < o[2]) {
                            h.label = o[2], h.ops.push(a);
                            break
                        }
                        o[2] && h.ops.pop(), h.trys.pop();
                        continue
                }
                a = t.call(e, h)
            } catch (i) {
                a = [6, i], n = 0
            } finally {
                s = o = 0
            }
            if (5 & a[0]) throw a[1];
            return {
                value: a[0] ? a[1] : void 0,
                done: !0
            }
        }
        var s, n, o, r, h = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return r = {
            next: a(0),
            "throw": a(1),
            "return": a(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }), r
    },
    Emiter = function() {
        function e() {
            this.maps = {}, this.uid = 0, this._duringEmit = !1
        }
        return e.prototype.add = function(e, t, a, i, s) {
            a = a || null, i = i || 0;
            var n = this.uid++,
                o = this.maps[e] || [];
            return o.push([n, t, a, i, s]), this.maps[e] = o, o.sort(function(e, t) {
                return e[3] < t[3]
            }), n
        }, e.prototype.on = function(e, t, a, i) {
            return this.add(e, t, a, i, !1)
        }, e.prototype.once = function(e, t, a, i) {
            return this.add(e, t, a, i, !0)
        }, e.prototype.race = function(e, t, a, i) {
            for (var s = this, n = [], o = !1, r = function(e) {
                    for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
                    o = !0, n.forEach(function(e) {
                        return s.rm(e[0], e[1])
                    }), t.apply(a, [e].concat(i))
                }, h = 0, p = e; h < p.length; h++) {
                var g = p[h];
                if (o) break;
                n.push([this.once(g, closure(r, g), a, i), g])
            }
        }, e.prototype.rm = function(e, t) {
            for (var a = t ? [t] : Object.keys(this.maps), i = 0, s = a; i < s.length; i++) {
                var n = s[i],
                    o = this.maps[n];
                if (o) {
                    this._duringEmit && (this.maps[n] = o = o.concat());
                    for (var r = 0; r < o.length;) {
                        var h = o[r],
                            p = h[0];
                        h[1], h[2], h[3], h[4];
                        if (p == e) return o.splice(r, 1), !0;
                        r++
                    }
                }
            }
            return !1
        }, e.prototype.rmall = function(e) {
            void 0 == e ? this.maps = {} : delete this.maps[e]
        }, e.prototype.emit = function(t, a) {
            var i = this.maps[t];
            if (i && i.length > 0) {
                for (var s = 0; s < i.length;) {
                    var n = i[s],
                        o = (n[0], n[1]),
                        r = n[2],
                        h = (n[3], n[4]);
                    h ? i.splice(s, 1) : s++, this._duringEmit = !0;
                    var p = o.call(r, a);
                    if (this._duringEmit = !1, p == e.CONST["break"]) break
                }
                return !0
            }
            return !1
        }, e.CONST = {
            "break": {}
        }, e
    }();
__reflect(Emiter.prototype, "Emiter");
var Facade = function() {
    function e() {
        this._responders = [], this._commands = {}, e.inst = this, this.emiter = new Emiter
    }
    return e.prototype.registResponser = function(e) {
        if (this._responders.some(function(t) {
                return t.res == e
            })) throw "this responser has been registed already!";
        for (var t = e.listResponse(), a = [], i = function(t) {
                var i = s.emiter.on(t, function(a) {
                    e.doResponse(t, a)
                });
                a.push({
                    name: t,
                    id: i
                })
            }, s = this, n = 0, o = t; n < o.length; n++) {
            var r = o[n];
            i(r)
        }
        this._responders.push({
            res: e,
            ids: a
        })
    }, e.prototype.unregistResponser = function(e) {
        for (var t = 0, a = this._responders; t < a.length; t++) {
            var i = a[t];
            if (i.res == e) {
                for (var s = i.ids, n = 0, o = s; n < o.length; n++) {
                    var r = o[n];
                    this.emiter.rm(r.id, r.name)
                }
                this._responders.splice(this._responders.indexOf(i), 1);
                break
            }
        }
    }, e.prototype.registCommand = function(e, t) {
        if (this._commands[e]) throw "cmd has been registed already!!!";
        var a = this.emiter.on(e, function(a) {
            (new t).excute(a, e)
        });
        this._commands[e] = a
    }, e.prototype.unregistCommand = function(e) {
        var t = this._commands[e];
        t && this.emiter.rm(t, e)
    }, e.prototype.notify = function(e, t) {
        return this.emiter.emit(e, t)
    }, e.prototype.dispose = function() {
        this.emiter.rmall(), this._responders.length = 0
    }, e
}();
__reflect(Facade.prototype, "Facade"), egret.Bitmap.prototype.pos = function(e, t, a, i) {
    this.x = e, this.y = t, this.width = a, this.height = i, this.anchorOffsetX = a / 2, this.anchorOffsetY = i / 2
}, egret.ScrollView.prototype.pos = egret.Shape.prototype.pos = egret.TextField.prototype.pos = function(e, t, a, i, s, n) {
    s ? (this.x = 2 * e, this.y = 2 * t) : (this.x = e, this.y = t), a && i && (this.width = a, this.height = i), n || (this.anchorOffsetX = a / 2, this.anchorOffsetY = i / 2)
};
var GameScene = function(e) {
    function t() {
        var t = e.call(this) || this;
        t.MapState = [], t.BlockState = [], t.NumLockTT = [], t.NumLockTT_S = [], t.InterImage = [], t.MapImage = [], t.HeroImage = [], t.OverImage = [], t.BlockImage = [], t.gamelevelimage = [], t.UILabel = [], t.Debugbor = [], t.gate11num = [], t.level_touchbegin_index = -1, t.RankText = [], t.RankImage = [], t.RankImage2 = [], t.index = 0, t.Connect = new GameConnect, t.GameData = new GameMessage, t.LoadGameScore(), (0 == t.NumGateTT || void 0 == t.NumGateTT) && (t.NumGateTT = 1, t.NumGoldTT = 20, t.SaveGameScore()), t.Connect.UpLoadScore(t.NumGateTT), t.Connect.setCurentScore(t.NumGateTT), t.iPhoneH = t.Connect.GetiPhoneH(), t.iPhoneW = t.Connect.GetiPhoneW(), t.PlatForm = t.Connect.GetPlatForm(), t.StageWidth = egret.MainContext.instance.stage.stageWidth, t.StageHeight = egret.MainContext.instance.stage.stageHeight, console.log("StageWidth: " + t.StageWidth + "    StageHeight: " + t.StageHeight), t.choose = 0, t.RankNum = 1, t.GameState = 0, t.MoveCanNot = 0, t.NumTimeAD = 800, t.currentGate = t.NumGateTT, t.NowGate = t.NumGateTT, t.NumStyleAD = 0, t.VideoState = 0, t.touchEnabled = !0;
        var a = new egret.Timer(10);
        a.addEventListener(egret.TimerEvent.TIMER, t.TimerTick, t), a.start();
        var i = new egret.Timer(100);
        return i.addEventListener(egret.TimerEvent.TIMER, t.DrawAction, t), i.start(), t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, t.TouchBegin, t), t.addEventListener(egret.TouchEvent.TOUCH_MOVE, t.TouchMoved, t), t.addEventListener(egret.TouchEvent.TOUCH_END, t.TouchEnded, t), 0 != t.iPhoneW && (t.x = t.iPhoneW), t.InitGame(), t
    }
    return __extends(t, e), t.prototype.InitGame = function() {
        if (this.PutThePicture(), 0 == this.choose) this.InterImage[0].pos(320, this.StageHeight / 2, this.StageWidth, this.StageHeight), this.InterImage[1].pos(320, 936, this.StageWidth, 400), this.InterImage[2].pos(320, 600, 282, 293), this.InterImage[3].pos(320, 871, 278, 102), this.InterImage[4].pos(320, 1001, 278, 102), this.InterImage[5].pos(320, 300, 424, 202), this.InterImage[6].pos(120 - this.iPhoneW, 60, 170, 60), this.InterImage[7].pos(430, 310, 120, 132), this.InterImage[7].anchorOffsetX = 30, this.InterImage[7].anchorOffsetY = 130, egret.Tween.get(this.InterImage[7], {
            loop: !0
        }).to({
            rotation: -20
        }, 0).wait(400).to({
            rotation: 10
        }, 0).wait(400), this.ScoreLabel = new egret.BitmapText, this.addChild(this.ScoreLabel), this.ScoreLabel.font = RES.getRes("numimage2_fnt"), this.ScoreLabel.text = this.NumGoldTT + "", this.ScoreLabel.scaleX = .5, this.ScoreLabel.scaleY = .5, this.ScoreLabel.x = 138 - this.iPhoneW, this.ScoreLabel.y = 60, this.ScoreLabel.anchorOffsetX = this.ScoreLabel.width / 2, this.ScoreLabel.anchorOffsetY = this.ScoreLabel.height / 2;
        else if (100 == this.choose) {
            this.InterImage[0].pos(320, 90, this.StageWidth, 256), this.InterImage[1].pos(320, 90, this.StageWidth, 260), this.InterImage[5].pos(320, 568, this.StageWidth, 1200);
            for (var e = 2; 5 > e; e++) this.InterImage[e].scaleX = .8, this.InterImage[e].scaleY = .8;
            this.InterImage[2].pos(75 - this.iPhoneW, 50, 106, 74), this.InterImage[3].pos(75 - this.iPhoneW, 50, 106, 81), this.InterImage[4].pos(75 - this.iPhoneW, 50, 109, 88), egret.Tween.get(this.InterImage[0], {
                loop: !0
            }).to({
                alpha: 1
            }, 0).wait(500).to({
                alpha: 0
            }, 0).wait(500), egret.Tween.get(this.InterImage[1], {
                loop: !0
            }).to({
                alpha: 0
            }, 0).wait(500).to({
                alpha: 1
            }, 0).wait(500);
            egret.Tween.get(this.InterImage[2], {
                loop: !0
            }).to({
                alpha: 1
            }, 0).wait(222).to({
                alpha: 0
            }, 0).wait(222).to({
                alpha: 0
            }, 0).wait(222).to({
                alpha: 0
            }, 0).wait(222).to({
                alpha: 1
            }, 0), egret.Tween.get(this.InterImage[3], {
                loop: !0
            }).to({
                alpha: 0
            }, 0).wait(222).to({
                alpha: 1
            }, 0).wait(222).to({
                alpha: 0
            }, 0).wait(222).to({
                alpha: 1
            }, 0).wait(222).to({
                alpha: 0
            }, 0), egret.Tween.get(this.InterImage[4], {
                loop: !0
            }).to({
                alpha: 0
            }, 0).wait(222).to({
                alpha: 0
            }, 0).wait(222).to({
                alpha: 1
            }, 0).wait(222).to({
                alpha: 0
            }, 0).wait(222).to({
                alpha: 0
            }, 0), this.generateScrollview()
        } else 1 == this.choose && (this.GameState = 0, this.MoveCanNot = 0, this.DontMove = 1, this.LoadGame(), this.LevelTittle = new egret.TextField, this.addChild(this.LevelTittle), this.LevelTittle.textColor = 0, this.LevelTittle.size = 40, this.LevelTittle.text = this.GameData.GetGateInfo(this.currentGate).title, this.LevelTittle.x = 320, this.LevelTittle.y = 240, this.LevelTittle.width > 500 ? (this.LevelTittle.x = 70, this.LevelTittle.width = 500, this.LevelTittle.anchorOffsetX = 0, this.LevelTittle.wordWrap = !0) : this.LevelTittle.anchorOffsetX = this.LevelTittle.width / 2, this.InterImage[0].pos(320, 320, this.StageWidth, 2 * this.StageHeight), this.InterImage[1].pos(157 - this.iPhoneW - 30, 70, 53, 55), this.InterImage[2].pos(390 - this.iPhoneW - 40, 70, 170, 60), this.InterImage[3].pos(75 - this.iPhoneW - 30, 70, 55, 56), this.InterImage[4].pos(75 - this.iPhoneW - 30, 70, 54, 58), this.InterImage[5].pos(75 - this.iPhoneW - 30, 70, 59, 62), this.InterImage[6].pos(157 - this.iPhoneW - 30, 70, 53, 53), this.InterImage[7].pos(157 - this.iPhoneW - 30, 70, 59, 57), this.InterImage[8].pos(243 - this.iPhoneW - 40, 69, 56, 46), this.InterImage[9].pos(243 - this.iPhoneW - 40, 69, 60, 47), this.InterImage[10].pos(243 - this.iPhoneW - 40, 69, 59, 50), egret.Tween.get(this.InterImage[1], {
            loop: !0
        }).to({
            alpha: 1
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 1
        }, 0), egret.Tween.get(this.InterImage[6], {
            loop: !0
        }).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 1
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 1
        }, 0).wait(222).to({
            alpha: 0
        }, 0), egret.Tween.get(this.InterImage[7], {
            loop: !0
        }).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 1
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 0
        }, 0), egret.Tween.get(this.InterImage[3], {
            loop: !0
        }).to({
            alpha: 1
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 1
        }, 0), egret.Tween.get(this.InterImage[4], {
            loop: !0
        }).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 1
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 1
        }, 0).wait(222).to({
            alpha: 0
        }, 0), egret.Tween.get(this.InterImage[5], {
            loop: !0
        }).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 1
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 0
        }, 0), egret.Tween.get(this.InterImage[8], {
            loop: !0
        }).to({
            alpha: 1
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 1
        }, 0), egret.Tween.get(this.InterImage[9], {
            loop: !0
        }).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 1
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 1
        }, 0).wait(222).to({
            alpha: 0
        }, 0), egret.Tween.get(this.InterImage[10], {
            loop: !0
        }).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 1
        }, 0).wait(222).to({
            alpha: 0
        }, 0).wait(222).to({
            alpha: 0
        }, 0), this.addChild(this.InterImage[11]), this.addChild(this.InterImage[12]), this.InterImage[11].pos(-3200, -2e3, 131, 129), this.InterImage[12].pos(-2e3, -2e3, 76, 56))
    }, t.prototype.PutThePicture = function() {
        if (this.LoadResource(), 0 == this.choose)
            for (var e = 0; 8 > e; e++) this.addChild(this.InterImage[e]);
        else if (100 == this.choose) {
            this.addChild(this.InterImage[5]);
            for (var e = 0; 4 >= e; e++) this.addChild(this.InterImage[e])
        } else if (1 == this.choose)
            for (var e = 0; 12 >= e; e++) this.addChild(this.InterImage[e])
    }, t.prototype.LoadResource = function() {
        if (0 == this.choose) {
            this.InterImage[0] = new egret.Bitmap(RES.getRes("title_bg_png")), this.InterImage[1] = new egret.Bitmap(RES.getRes("title_bg_sun_png")), this.InterImage[2] = new egret.Bitmap(RES.getRes("title_logo_png")), this.InterImage[3] = new egret.Bitmap(RES.getRes("title_play_png")), this.InterImage[4] = new egret.Bitmap(RES.getRes("rankbtn_png")), this.InterImage[5] = new egret.Bitmap(RES.getRes("title_title_png")), this.InterImage[6] = new egret.Bitmap(RES.getRes("levelKey_png")), this.InterImage[7] = new egret.Bitmap(RES.getRes("title_wenhao_png"));
            this.InterImage[4].visible = false
        } else {
            100 == this.choose ? (this.InterImage[0] = new egret.Bitmap(RES.getRes("bg_top_1_png")), this.InterImage[1] = new egret.Bitmap(RES.getRes("bg_top_2_png")), this.InterImage[2] = new egret.Bitmap(RES.getRes("ic_back_1_png")), this.InterImage[3] = new egret.Bitmap(RES.getRes("ic_back_2_png")), this.InterImage[4] = new egret.Bitmap(RES.getRes("ic_back_3_png")), this.InterImage[5] = new egret.Bitmap(RES.getRes("overgamebg_png"))) : 1 == this.choose && (this.InterImage[0] = new egret.Bitmap(RES.getRes("gamebg_png")), this.InterImage[1] = new egret.Bitmap(RES.getRes("ic_reset_1_png")), this.InterImage[2] = new egret.Bitmap(RES.getRes("levelKey_png")), this.InterImage[3] = new egret.Bitmap(RES.getRes("ic_list_1_png")), this.InterImage[4] = new egret.Bitmap(RES.getRes("ic_list_2_png")), this.InterImage[5] = new egret.Bitmap(RES.getRes("ic_list_3_png")), this.InterImage[6] = new egret.Bitmap(RES.getRes("ic_reset_2_png")), this.InterImage[7] = new egret.Bitmap(RES.getRes("ic_reset_3_png")), this.InterImage[8] = new egret.Bitmap(RES.getRes("ic_skip_1_png")), this.InterImage[9] = new egret.Bitmap(RES.getRes("ic_skip_2_png")), this.InterImage[10] = new egret.Bitmap(RES.getRes("ic_skip_3_png")), this.InterImage[11] = new egret.Bitmap(RES.getRes("ic_wrong_png")), this.InterImage[12] = new egret.Bitmap(RES.getRes("ic_choice_png")))
        }
    }, t.prototype.ReleaseGame = function() {
        0 == this.choose || 1 == this.choose;
        for (var e = egret.setTimeout(function() {}, this, 0), t = 0; e >= t; t++) egret.clearTimeout(e);
        egret.Tween.removeAllTweens(), this.removeChildren(), this.InterImage = [], this.MapImage = [], this.HeroImage = [], this.OverImage = [], this.BlockImage = [], this.RecordInitalInfo = [], this.txInput = null, this.Focustext = null
    }, t.prototype.DrawAction = function() {
        this.CheckADVideo()
    }, t.prototype.PlayGame = function() {}, t.prototype.LoadGame = function() {
        if (!egret.Capabilities.isMobile) {
            this.NowGate > 35 ? this.currentGate = (this.NowGate - 36) % 35 + 1 : this.currentGate = this.NowGate;
            var bk = [12, 19, 26];
            if (bk.indexOf(this.currentGate) != -1) this.NowGate += 1
        }
        this.NowGate > 35 ? this.currentGate = (this.NowGate - 36) % 35 + 1 : this.currentGate = this.NowGate, this.Okinfo = {}, this.touch2point = {};
        var e = new egret.BitmapText;
        this.addChild(e), e.font = RES.getRes("numimage2_fnt");
        var t = this.NowGate,
            a = 10 > t ? "g0" + t : "g" + t;
        e.text = a + "", e.scaleX = .9, e.scaleY = .9, e.x = 320, e.y = 190, e.anchorOffsetX = e.width / 2, e.anchorOffsetY = e.height / 2;
        var i = new egret.BitmapText;
        if (this.addChild(i), i.font = RES.getRes("numimage2_fnt"), i.text = this.NumGoldTT + "", i.scaleX = .5, i.scaleY = .5, i.x = 410 - this.iPhoneW - 40, i.y = 70, i.anchorOffsetX = i.width / 2, i.anchorOffsetY = i.height / 2, 1 == this.currentGate) {
            var s = [
                [176, 552],
                [449, 573],
                [210, 813],
                [460, 840]
            ];
            s.sort(this.randomsort), this.MapImage[0] = new egret.Bitmap(RES.getRes("lv_1_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv_1_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv_1_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv_1_3_png"));
            for (var n = 0; 4 > n; n++) this.addChild(this.MapImage[n]);
            this.MapImage[0].pos(s[0][0], s[0][1], 108, 100), this.MapImage[1].pos(s[1][0], s[1][1], 159 * 1.2, 228), this.MapImage[2].pos(s[2][0], s[2][1], 185, 140), this.MapImage[3].pos(s[3][0], s[3][1], 158, 149), this.Okinfo = {
                correctAnswer: 0
            }
        } else if (2 == this.currentGate) {
            this.MapImage[0] = new egret.Bitmap(RES.getRes("lv2_btn_4_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv2_0_png")), this.MapImage[1].visible = !1, this.MapImage[2] = new egret.Bitmap(RES.getRes("lv2_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv2_btn_4_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv2_btn_4_png")), this.MapImage[5] = new egret.Bitmap(RES.getRes("lv2_1_png")), this.MapImage[5].visible = !1, this.MapImage[6] = new egret.Bitmap(RES.getRes("lv2_btn_4_png"));
            for (var o = 7; 16 > o; o++) this.MapImage[o] = new egret.Bitmap(RES.getRes("lv2_1_png"));
            for (var r = 0; 16 > r; r++) this.addChild(this.MapImage[r]);
            this.MapImage[3].pos(178, 873, 233, 90), this.MapImage[4].pos(458, 873, 233, 90), this.MapImage[0].pos(178, 1010, 233, 90), this.MapImage[6].pos(458, 1010, 233, 90), this.MapImage[1].pos(320, 0, 179, 249), this.MapImage[5].pos(320, 0, 150, 207), this.MapImage[2].pos(155, 483, 45, 66), this.MapImage[7].pos(560, 610, 143, 197), this.MapImage[8].pos(450, 574, 113, 154), this.MapImage[9].pos(405, 478, 78, 110), this.MapImage[10].pos(320, 486, 78, 110), this.MapImage[11].pos(243, 518, 65, 84), this.MapImage[12].pos(204, 468, 50, 56), this.MapImage[13].pos(173, 406, 40, 54), this.MapImage[13].scaleX = -1, this.MapImage[14].pos(123, 418, 40, 46), this.MapImage[15].pos(65, 403, 40, 46);
            for (var h = 0; 4 > h; h++) {
                var p = new egret.TextField;
                this.addChild(p), p.textColor = 0, p.text = h + 8 + "", 0 == h ? (p.x = 178, p.y = 873) : 1 == h ? (p.x = 458, p.y = 873) : 2 == h ? (p.x = 178, p.y = 1010) : (p.x = 458, p.y = 1010), p.anchorOffsetX = p.width / 2, p.anchorOffsetY = p.height / 2
            }
            this.Okinfo = {
                correctAnswer: 4
            }
        } else if (3 == this.currentGate) {
            var s = [
                [185, 548],
                [490, 548],
                [172, 843],
                [479, 843]
            ];
            s.sort(this.randomsort), this.MapImage[0] = new egret.Bitmap(RES.getRes("lv3_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv3_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv3_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv3_3_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv3_4_png"));
            for (var g = 0; 5 > g; g++) this.addChild(this.MapImage[g]);
            this.Okinfo = {
                correctAnswer: 0
            }, this.MapImage[0].pos(106, 280, 184, 171), this.MapImage[1].pos(s[0][0], s[0][1], 220, 222), this.MapImage[2].pos(s[1][0], s[1][1], 136, 117), this.MapImage[3].pos(s[2][0], s[2][1], 180, 259), this.MapImage[4].pos(s[3][0], s[3][1], 142, 160)
        } else if (4 == this.currentGate) {
            this.DontMove = 2;
            var l = Math.floor(6 * Math.random()),
                c = Math.floor(l / 3),
                m = l % 3;
            this.MapImage[0] = new egret.Bitmap(RES.getRes("lv4_1_png")), this.addChild(this.MapImage[0]), this.MapImage[0].pos(140 + 176 * m, 566 + 273 * c, 130, 108), this.Okinfo = {
                correctAnswer: 0
            };
            for (var u = 0; 6 > u; u++) {
                var d = Math.floor(u / 3),
                    I = u % 3;
                this.MapImage[u + 1] = new egret.Bitmap(RES.getRes("lv4_0_png")), this.addChild(this.MapImage[u + 1]), this.MapImage[u + 1].pos(140 + 176 * I, 566 + 273 * d, 168, 132)
            }
        } else if (5 == this.currentGate) {
            this.DontMove = 2;
            var s = [
                [178, 443],
                [466, 455],
                [178, 830],
                [480, 830],
                [329, 630]
            ];
            s.sort(this.randomsort), this.MapImage[0] = new egret.Bitmap(RES.getRes("lv5_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv5_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv5_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv5_3_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv5_4_png"));
            for (var f = 0; 5 > f; f++) this.addChild(this.MapImage[f]);
            this.MapImage[0].pos(s[0][0], s[0][1], 182, 186), this.MapImage[1].pos(s[1][0], s[1][1], 190, 111), this.MapImage[2].pos(s[2][0], s[2][1], 180, 182), this.MapImage[3].pos(s[3][0], s[3][1], 188, 182), this.MapImage[4].pos(s[4][0], s[4][1], 170, 168)
        } else if (6 == this.currentGate) {
            this.MapImage[0] = new egret.Bitmap(RES.getRes("lv6_1_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv6_2_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv6_3_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv2_btn_4_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv2_btn_4_png"));
            for (var _ = 0; 5 > _; _++) this.addChild(this.MapImage[_]);
            this.MapImage[0].pos(320, 563, 410, 410), this.MapImage[1].pos(216, 810, 70, 89), this.MapImage[1].scaleX = -1, this.MapImage[2].pos(428, 810, 74, 90), this.MapImage[3].pos(190, 945, 253, 133), this.MapImage[4].pos(456, 945, 247, 128), this.Addtext("Xóa", {
                x: 190,
                y: 945,
                size: 40
            }, this), this.Addtext("ok", {
                x: 450,
                y: 945,
                size: 40
            }, this), this.Focustext = this.Addtext("0", {
                x: 322,
                y: 816,
                size: 90
            }, this), this.Focustext.bold = !0, this.Okinfo = {
                correctAnswer: 11
            }
        } else if (7 == this.currentGate) this.DontMove = 2, this.MapImage[0] = new egret.Bitmap(RES.getRes("lv7_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv7_0_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv7_0_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv7_0_png")), this.addChild(this.MapImage[1]), this.addChild(this.MapImage[3]), this.addChild(this.MapImage[2]), this.addChild(this.MapImage[0]), this.MapImage[0].pos(190, 500, 166, 242), this.MapImage[1].pos(488, 428, 98, 144), this.MapImage[2].pos(492, 716, 145, 195), this.MapImage[3].pos(225, 870, 98, 144);
        else if (8 == this.currentGate) {
            this.DontMove = 2, this.MapImage[0] = new egret.Bitmap(RES.getRes("lv8_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv6_2_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv6_3_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv2_btn_4_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv2_btn_4_png")), this.MapImage[5] = new egret.Bitmap(RES.getRes("lv8_1_png"));
            for (var v = 0; 6 > v; v++) this.addChild(this.MapImage[v]);
            this.MapImage[1].pos(216, 810, 70, 89), this.MapImage[1].scaleX = -1, this.MapImage[2].pos(428, 810, 74, 90), this.MapImage[3].pos(190, 945, 253, 133), this.MapImage[4].pos(450, 945, 247, 128), this.MapImage[0].pos(310, 503, 397, 311), this.MapImage[5].pos(334, 530, 148, 105), this.Addtext("Xóa", {
                x: 190,
                y: 945,
                size: 40
            }, this), this.Addtext("ok", {
                x: 450,
                y: 945,
                size: 40
            }, this), this.Focustext = this.Addtext("0", {
                x: 322,
                y: 816,
                size: 90
            }, this), this.Focustext.bold = !0, this.Okinfo = {
                correctAnswer: 9
            }
        } else if (9 == this.currentGate) {
            this.DontMove = 2, this.MapImage[3] = new egret.Bitmap(RES.getRes("lv3_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv9_2_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv9_0_png")), this.MapImage[0] = new egret.Bitmap(RES.getRes("lv9_1_png"));
            for (var w = 1; 4 > w; w++) this.addChild(this.MapImage[w]);
            this.MapImage[1].pos(276, 655, 407, 489), this.MapImage[2].pos(415, 620, 100, 109), this.MapImage[0].pos(415, 620, 100, 110), this.MapImage[3].pos(489, 350, 184, 171), this.MapImage[0].alpha = 0
        } else if (10 == this.currentGate) {
            this.MapImage[0] = new egret.Bitmap(RES.getRes("lv10_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv6_2_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv6_3_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv2_btn_4_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv2_btn_4_png"));
            for (var y = 0; 5 > y; y++) this.addChild(this.MapImage[y]);
            this.MapImage[0].pos(320, 540, 382, 369), this.MapImage[1].pos(216, 810, 70, 89), this.MapImage[1].scaleX = -1, this.MapImage[2].pos(428, 810, 74, 90), this.MapImage[3].pos(190, 945, 253, 133), this.MapImage[4].pos(456, 945, 247, 128), this.Addtext("Xóa", {
                x: 190,
                y: 945,
                size: 40
            }, this), this.Addtext("ok", {
                x: 450,
                y: 945,
                size: 40
            }, this), this.Focustext = this.Addtext("0", {
                x: 322,
                y: 816,
                size: 90
            }, this), this.Focustext.bold = !0, this.Okinfo = {
                correctAnswer: 9
            }
        } else if (11 == this.currentGate) this.MapImage[1] = new egret.Bitmap(RES.getRes("lv11_0_png")), this.addChild(this.MapImage[1]), this.MapImage[1].pos(320, 640, 512, 512);
        else if (12 == this.currentGate) {
            this.touch2point = {}, this.MapImage[0] = new egret.Bitmap(RES.getRes("lv12_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv12_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv12_2_png"));
            var M = this.Addtext("Zoe:", {
                x: 140,
                y: 343,
                size: 40
            }, this);
            M.bold = !0;
            var R = this.Addtext("You:", {
                x: 392,
                y: 343,
                size: 40
            }, this);
            R.bold = !0;
            for (var S = 0; 3 > S; S++) this.addChild(this.MapImage[S]);
            this.MapImage[0].pos(258, 330, 90, 90), this.MapImage[1].pos(509, 330, 100, 100), this.MapImage[2].pos(320, 690, 512, 512);
            for (var s = [
                    [504, 529, 3, 7],
                    [155, 696, 4, 8],
                    [320, 696, 5, 9],
                    [492, 842, 6, 10]
                ], x = 3, b = 0; b < s.length; b++) this.MapImage[x] = new egret.Bitmap(RES.getRes("lv12_0_png")), this.addChild(this.MapImage[x]), this.MapImage[x].pos(s[b][0], s[b][1], 90, 90), this.MapImage[x].alpha = 0, this.MapImage[x + 4] = new egret.Bitmap(RES.getRes("lv12_1_png")), this.MapImage[x + 4].pos(s[b][0], s[b][1], 100, 100), this.addChild(this.MapImage[x + 4]), this.MapImage[x + 4].alpha = 0, x++;
            console.log(this.MapImage.length), this.MapImage[12] = new egret.Bitmap(RES.getRes("lv12_3_png")), this.MapImage[13] = new egret.Bitmap(RES.getRes("lv12_4_png")), this.MapImage[14] = new egret.Bitmap(RES.getRes("lv12_5_png")), this.MapImage[15] = new egret.Bitmap(RES.getRes("lv12_6_png"));
            for (var T = 12; 16 > T; T++) this.addChild(this.MapImage[T]), this.MapImage[T].visible = !1;
            this.MapImage[12].pos(320, 522, 360, 10), this.MapImage[13].pos(160, 690, 10, 360), this.MapImage[14].pos(320, 690, 360, 10), this.MapImage[15].pos(486, 690, 10, 360)
        } else if (13 == this.currentGate) {
            this.gate13num = 1, this.DontMove = 2;
            var B = [
                [440, 500, .9],
                [160, 570, .8],
                [430, 750, .7]
            ];
            B.sort(this.randomsort), B[Math.floor(3 * Math.random())][3] = 2;
            for (var E = 0; 3 > E; E++) this.MapImage[E] = new egret.Bitmap(RES.getRes("lv13_0_png")), this.addChild(this.MapImage[E]), this.MapImage[E].pos(B[E][0], B[E][1], 218 * B[E][2], 227 * B[E][2]), 2 == B[E][3] && (this.Okinfo = {
                correctAnswer: E
            });
            this.MapImage[3] = new egret.Bitmap(RES.getRes("lv13_1_png")), this.addChild(this.MapImage[3]), this.MapImage[3].pos(-999, -999, 100, 90), this.MapImage[3].alpha = 0
        } else if (14 == this.currentGate) this.MapImage[0] = new egret.Bitmap(RES.getRes("lv14_0_png")), this.addChild(this.MapImage[0]), this.MapImage[0].pos(320, 680, 497, 429);
        else if (15 == this.currentGate) {
            this.DontMove = 2, this.MapImage[1] = new egret.Bitmap(RES.getRes("lv15_0_png")), this.MapImage[0] = new egret.Bitmap(RES.getRes("lv15_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv6_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv6_3_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv2_btn_4_png")), this.MapImage[5] = new egret.Bitmap(RES.getRes("lv2_btn_4_png"));
            for (var C = 0; 6 > C; C++) this.addChild(this.MapImage[C]);
            this.MapImage[1].pos(320, 414, 285, 110), this.MapImage[0].pos(320, 548, 302, 374), this.MapImage[2].pos(216, 810, 70, 89), this.MapImage[2].scaleX = -1, this.MapImage[3].pos(428, 810, 74, 90), this.MapImage[4].pos(190, 945, 253, 133), this.MapImage[5].pos(456, 945, 247, 128), this.Addtext("Xóa", {
                x: 190,
                y: 945,
                size: 40
            }, this), this.Addtext("ok", {
                x: 450,
                y: 945,
                size: 40
            }, this), this.Focustext = this.Addtext("0", {
                x: 322,
                y: 816,
                size: 90
            }, this), this.Focustext.bold = !0, this.Okinfo = {
                correctAnswer: 3
            }
        } else if (16 == this.currentGate) {
            this.DontMove = 2, this.Okinfo = {
                initxyarr: [
                    [320, 450],
                    [200, 820],
                    [377, 834],
                    [500, 672]
                ],
                correctAnswer: [170, 420]
            }, this.MapImage[0] = new egret.Bitmap(RES.getRes("lv16_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv16_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv16_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv16_3_png"));
            for (var N = 0; 4 > N; N++) this.addChild(this.MapImage[N]);
            this.MapImage[0].pos(320, 450, 268, 102), this.MapImage[1].pos(200, 820, 160, 230), this.MapImage[2].pos(377, 834, 122, 203), this.MapImage[3].pos(500, 672, 67, 36)
        } else if (17 == this.currentGate) {
            this.DontMove = 2, this.MapImage[1] = new egret.Bitmap(RES.getRes("lv17_0_png")), this.MapImage[0] = new egret.Bitmap(RES.getRes("lv17_1_png"));
            for (var k = 0; 2 > k; k++) this.addChild(this.MapImage[k]);
            this.MapImage[1].pos(128, 635, 44.5, 30), this.MapImage[0].pos(320, 600, 440.8, 102 * .8)
        } else if (18 == this.currentGate) {
            this.DontMove = 2;
            var s = [
                [178, 443],
                [466, 455],
                [178, 830],
                [480, 830],
                [329, 630]
            ];
            s.sort(this.randomsort), this.MapImage[0] = new egret.Bitmap(RES.getRes("lv18_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv18_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv18_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv18_3_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv18_4_png"));
            for (var G = 0; 5 > G; G++) this.addChild(this.MapImage[G]);
            this.MapImage[0].pos(s[0][0], s[0][1], 161, 152), this.MapImage[1].pos(s[1][0], s[1][1], 115, 105), this.MapImage[2].pos(s[2][0], s[2][1], 197, 179), this.MapImage[3].pos(s[3][0], s[3][1], 187, 72), this.MapImage[4].pos(s[4][0], s[4][1], 156, 152)
        } else if (19 == this.currentGate) {
            this.Fpscount = 0, this.monkeyrabbit = !1, this.gate19touchid = -1, this.monkeygo = !1, this.MoveCanNot = 0, this.MapImage[0] = new egret.Bitmap(RES.getRes("lv19_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv19_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv19_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv19_3_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv19_4_png")), this.MapImage[5] = new egret.Bitmap(RES.getRes("lv19_5_png")), this.MapImage[6] = new egret.Bitmap(RES.getRes("lv19_6_png")), this.MapImage[7] = new egret.Bitmap(RES.getRes("lv10_2_png"));
            for (var P = 0; 8 > P; P++) this.addChild(this.MapImage[P]);
            this.MapImage[0].pos(107, 750, 108, 121), this.MapImage[1].pos(107, 750, 121, 87), this.MapImage[1].visible = !1, this.MapImage[2].pos(80, 580, 92, 94), this.MapImage[3].pos(80, 580, 115, 66), this.MapImage[3].visible = !1, this.MapImage[4].pos(480, 438, 15, 133), this.MapImage[5].pos(526, 616, 85, 469), this.MapImage[6].pos(272, 660, 534, 17), this.MapImage[7].pos(320, 910, 464, 95)
        } else if (20 == this.currentGate) {
            this.DontMove = 2, this.MapImage[0] = new egret.Bitmap(RES.getRes("lv20_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv20_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv20_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv20_3_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv20_4_png")), this.MapImage[5] = new egret.Bitmap(RES.getRes("lv20_5_png")), this.MapImage[6] = new egret.Bitmap(RES.getRes("lv20_6_png"));
            for (var O = 0; 7 > O; O++) this.addChild(this.MapImage[O]);
            this.MapImage[0].pos(320, 610, 241, 418), this.MapImage[1].pos(522, 825, 74, 96), this.MapImage[2].pos(522, 825, 80, 70), this.MapImage[3].pos(100, 862, 38, 48), this.MapImage[4].pos(120, 862, 158, 130), this.MapImage[5].pos(160, 848, 104, 90), this.MapImage[6].pos(68, 877, 36, 36), this.MapImage[1].visible = !1, this.MapImage[3].visible = !1, this.MapImage[4].visible = !1, this.MapImage[6].visible = !1, this.Okinfo = {
                initxyarr: [
                    [320, 610],
                    [522, 825],
                    [522, 825],
                    [100, 862],
                    [120, 862],
                    [160, 848],
                    [68, 877]
                ]
            }
        } else if (21 == this.currentGate) {
            this.DontMove = 2;
            var s = [
                [185, 548],
                [490, 548],
                [172, 843],
                [479, 843]
            ];
            s.sort(this.randomsort), this.MapImage[0] = new egret.Bitmap(RES.getRes("lv21_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv21_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv21_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv33_2_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv4_0_png"));
            for (var F = 0; 5 > F; F++) this.addChild(this.MapImage[F]);
            this.MapImage[0].pos(s[0][0], s[0][1] + 42, 253, 119), this.MapImage[1].pos(s[0][0] + 6, s[0][1] - 42, 207, 181), this.MapImage[2].pos(s[1][0], s[1][1], 159, 245), this.MapImage[3].pos(s[2][0], s[2][1], 134 * 1.2, 204), this.MapImage[4].pos(s[3][0], s[3][1], 201.6, 158.4)
        } else if (22 == this.currentGate) {
            this.DontMove = 2, this.MapImage[0] = new egret.Bitmap(RES.getRes("lv22_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv22_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv22_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv22_3_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv22_4_png")), this.MapImage[5] = new egret.Bitmap(RES.getRes("lv22_5_png"));
            for (var A = 0; 6 > A; A++) this.addChild(this.MapImage[A]);
            this.MapImage[0].pos(470, 470, 175, 171), this.MapImage[1].pos(175, 822, 175, 169), this.MapImage[2].pos(460, 845, 173, 175), this.MapImage[3].pos(290, 520, 122, 156), this.MapImage[4].pos(403, 634, 204, 61), this.MapImage[3].alpha = 1, this.MapImage[4].alpha = 1, this.MapImage[5].pos(428, 634, 153, 61), this.Okinfo = {
                initxyarr: [
                    [470, 470],
                    [175, 822],
                    [460, 845]
                ]
            }
        } else if (23 == this.currentGate) {
            this.gate23count = 0, this.DontMove = 2, this.MapImage[0] = new egret.Bitmap(RES.getRes("lv23_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv23_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv23_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv23_2_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv23_2_png")), this.MapImage[5] = new egret.Bitmap(RES.getRes("lv6_2_png")), this.MapImage[6] = new egret.Bitmap(RES.getRes("lv6_3_png")), this.MapImage[7] = new egret.Bitmap(RES.getRes("lv2_btn_4_png")), this.MapImage[8] = new egret.Bitmap(RES.getRes("lv2_btn_4_png"));
            for (var D = 0; 9 > D; D++) this.addChild(this.MapImage[D]);
            this.MapImage[0].pos(320, 550, 244, 206), this.MapImage[1].pos(320, 580, 340, 200), this.MapImage[1].visible = !1, this.MapImage[2].pos(470, 600, 52, 47), this.MapImage[3].pos(495, 575, 52, 47), this.MapImage[4].pos(510, 604, 52, 47), this.MapImage[5].pos(216, 810, 70, 89), this.MapImage[5].scaleX = -1, this.MapImage[6].pos(428, 810, 74, 90), this.MapImage[7].pos(190, 945, 253, 133), this.MapImage[8].pos(456, 945, 247, 128), this.Addtext("Xóa", {
                x: 190,
                y: 945,
                size: 40
            }, this), this.Addtext("ok", {
                x: 450,
                y: 945,
                size: 40
            }, this), this.Focustext = this.Addtext("0", {
                x: 322,
                y: 816,
                size: 90
            }, this), this.Focustext.bold = !0, this.Okinfo = {
                correctAnswer: 15
            }
        } else if (24 == this.currentGate) {
            this.DontMove = 2;
            var L = [
                [178, 443],
                [466, 455],
                [178, 830],
                [480, 830]
            ];
            L.sort(this.randomsort), this.MapImage[0] = new egret.Bitmap(RES.getRes("lv24_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv24_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv24_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv24_3_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv24_4_png"));
            for (var W = 0; 5 > W; W++) this.addChild(this.MapImage[W]);
            this.MapImage[0].pos(L[0][0], L[0][1], 130, 125), this.MapImage[1].pos(L[1][0], L[1][1], 131, 156), this.MapImage[2].pos(L[2][0], L[2][1], 161, 239), this.MapImage[3].pos(L[3][0], L[3][1], 160, 145), this.MapImage[4].pos(320, 280, 391, 69)
        } else if (25 == this.currentGate) {
            this.DontMove = 2, this.MapImage[0] = new egret.Bitmap(RES.getRes("lv25_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv25_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv25_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv25_3_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv25_4_png")), this.MapImage[5] = new egret.Bitmap(RES.getRes("lv25_5_png")), this.MapImage[6] = new egret.Bitmap(RES.getRes("lv25_6_png"));
            for (var X = 0; 7 > X; X++) this.addChild(this.MapImage[X]);
            this.MapImage[0].pos(320, 770, 384, 304 * .8), this.MapImage[1].pos(190, 760, 59.5, 52.5), this.MapImage[2].pos(445, 741, 85.5, 96.5), this.MapImage[3].pos(320, 774, 231.6, 191.4), this.MapImage[4].pos(320, 832, 368, 102.4), this.MapImage[5].pos(320, 516, 137.2, 177 * .7), this.MapImage[6].pos(320, 516, 122 * .7, 111 * .7)
        } else if (26 == this.currentGate) {
            this.MapImage[0] = new egret.Bitmap(RES.getRes("lv26_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv26_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv26_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv26_3_png"));
            for (var Y = 0; 4 > Y; Y++) this.addChild(this.MapImage[Y]);
            this.MapImage[0].pos(560, 790, 90, 110), this.MapImage[1].pos(286, 706, 102, 284), this.MapImage[2].pos(216, 476, 258, 268), this.MapImage[2].visible = !1, this.MapImage[3].pos(198, 476, 227, 270)
        } else if (27 == this.currentGate) {
            this.MapImage[0] = new egret.Bitmap(RES.getRes("lv3_4_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv9_2_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv9_0_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv27_1_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv27_3_png")), this.MapImage[5] = new egret.Bitmap(RES.getRes("lv27_4_png")), this.MapImage[6] = new egret.Bitmap(RES.getRes("lv27_5_png")), this.MapImage[7] = new egret.Bitmap(RES.getRes("lv27_6_png")), this.MapImage[8] = new egret.Bitmap(RES.getRes("lv27_7_png")), this.MapImage[9] = new egret.Bitmap(RES.getRes("lv27_8_png")), this.MapImage[10] = new egret.Bitmap(RES.getRes("lv27_9_png")), this.MapImage[11] = new egret.Bitmap(RES.getRes("lv27_10_png")), this.MapImage[12] = new egret.Bitmap(RES.getRes("lv27_11_png")), this.MapImage[13] = new egret.Bitmap(RES.getRes("lv24_0_png")), this.MapImage[14] = new egret.Bitmap(RES.getRes("lv27_12_png")), this.MapImage[15] = new egret.Bitmap(RES.getRes("lv27_12_png")), this.MapImage[16] = new egret.Bitmap(RES.getRes("lv27_12_png")), this.MapImage[17] = new egret.Bitmap(RES.getRes("lv27_12_png")), this.MapImage[18] = new egret.Bitmap(RES.getRes("lv27_12_png")), this.MapImage[19] = new egret.Bitmap(RES.getRes("lv27_12_png")), this.MapImage[20] = new egret.Bitmap(RES.getRes("lv27_12_png")), this.MapImage[21] = new egret.Bitmap(RES.getRes("lv27_12_png")), this.addChild(this.MapImage[8]);
            for (var H = 0; 22 > H; H++) 8 != H && this.addChild(this.MapImage[H]);
            this.MapImage[0].pos(286, 824, 142 * .4, 64), this.MapImage[1].pos(316, 655, 407, 489), this.MapImage[2].pos(455, 620, 100, 109), this.MapImage[3].pos(240, 580, 48, 66 * .8), this.MapImage[4].pos(258, 860, 203, 214 * .7), this.MapImage[5].pos(326, 830, 42, 34), this.MapImage[6].pos(314, 916, 43, 62), this.MapImage[7].pos(336, 910, 107, 76), this.MapImage[8].pos(258, 880, 66, 51), this.MapImage[9].pos(470, 320, 142, 100), this.MapImage[9].visible = !1, this.MapImage[10].pos(470, 320, 142, 100), this.MapImage[11].pos(520, 830, 134, 270), this.MapImage[12].pos(102, 814, 142, 67), this.MapImage[12].visible = !1, this.MapImage[13].pos(166, 660, 80, 72.5), this.MapImage[14].pos(260, 804, 94, 94), this.MapImage[15].pos(455, 620, 139, 139), this.MapImage[16].pos(240, 580, 66 * .8 + 30, 66 * .8 + 30), this.MapImage[17].pos(326, 830, 72, 72), this.MapImage[18].pos(314, 916, 92, 92), this.MapImage[19].pos(170, 880, 96, 96), this.MapImage[20].pos(514, 748, 130, 130), this.MapImage[21].pos(166, 660, 110, 110);
            for (var U = 14; 22 > U; U++) this.MapImage[U].visible = !1
        } else if (28 == this.currentGate) {
            this.DontMove = 2, this.MapImage[0] = new egret.Bitmap(RES.getRes("lv28_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv28_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv28_1_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv28_2_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv28_3_png")), this.MapImage[5] = new egret.Bitmap(RES.getRes("lv28_4_png")), this.MapImage[6] = new egret.Bitmap(RES.getRes("lv28_5_png")), this.MapImage[7] = new egret.Bitmap(RES.getRes("lv28_6_png")), this.MapImage[8] = new egret.Bitmap(RES.getRes("lv28_7_png"));
            for (var z = 0; 9 > z; z++) this.addChild(this.MapImage[z]);
            this.MapImage[0].pos(320, 282, 78, 72), this.MapImage[1].pos(320, 282, 168, 118), this.MapImage[2].pos(150, 303, 117.6, 82.6), this.MapImage[3].pos(320, 280, 371, 74), this.MapImage[4].pos(320, 726, 564, 166), this.MapImage[5].pos(540, 590, 140, 145), this.MapImage[6].pos(342, 614, 197, 85), this.MapImage[7].pos(342, 624, 222, 106), this.MapImage[8].pos(94, 626, 140, 62), this.MapImage[6].visible = !0, this.MapImage[7].visible = !1
        } else if (29 == this.currentGate) {
            this.gate29num = [];
            var V = [
                [205, 436],
                [487, 536],
                [320, 640],
                [150, 800],
                [480, 806]
            ];
            V.sort(this.randomsort), this.MapImage[0] = new egret.Bitmap(RES.getRes("lv29_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv29_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv29_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv29_3_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv29_4_png")), this.MapImage[5] = new egret.Bitmap(RES.getRes("lv29_5_png")), this.MapImage[6] = new egret.Bitmap(RES.getRes("lv29_6_png")), this.MapImage[7] = new egret.Bitmap(RES.getRes("lv29_7_png")), this.MapImage[8] = new egret.Bitmap(RES.getRes("lv10_2_png"));
            for (var $ = 0; 9 > $; $++) this.addChild(this.MapImage[$]);
            this.MapImage[0].pos(V[0][0], V[0][1], 59, 82), this.MapImage[1].pos(V[1][0], V[1][1], 59.5, 81), this.MapImage[2].pos(V[2][0], V[2][1], 60, 82.5), this.MapImage[3].pos(V[3][0], V[3][1], 60, 82.5), this.MapImage[4].pos(V[4][0], V[4][1], 59, 81), this.MapImage[5].pos(320, 320, 34 * .4, 26), this.MapImage[5].visible = !1, this.MapImage[6].pos(320, 320, 18.8, 25.6), this.MapImage[6].visible = !1, this.MapImage[7].pos(320, 320, 46 * .4, 26), this.MapImage[7].visible = !1, this.MapImage[8].pos(320, 972, 464, 95)
        } else if (30 == this.currentGate) {
            this.DontMove = 2;
            var j = [
                [205, 436],
                [487, 536],
                [320, 640],
                [150, 800],
                [480, 806]
            ];
            j.sort(this.randomsort), this.MapImage[0] = new egret.Bitmap(RES.getRes("lv30_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv30_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv30_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv22_4_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv4_0_png")), this.MapImage[5] = new egret.Bitmap(RES.getRes("lv30_3_png"));
            for (var q = 0; 6 > q; q++) this.addChild(this.MapImage[q]);
            this.MapImage[1].pos(478, 486, 113, 128), this.MapImage[2].pos(196, 694, 125, 127), this.MapImage[3].pos(487, 690, 139.5, 57), this.MapImage[3].scaleX = -1, this.MapImage[4].pos(196, 486, 129, 107), this.MapImage[5].pos(320, 280, 334, 69), this.MapImage[0].pos(320, 906, 230, 217)
        } else if (31 == this.currentGate) {
            this.DontMove = 2, this.gate31num = [], this.MapImage[0] = new egret.Bitmap(RES.getRes("lv31_3_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv31_3_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv31_3_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv31_3_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv31_2_png")), this.MapImage[5] = new egret.Bitmap(RES.getRes("lv31_2_png")), this.MapImage[6] = new egret.Bitmap(RES.getRes("lv31_2_png")), this.MapImage[7] = new egret.Bitmap(RES.getRes("lv31_2_png")), this.MapImage[8] = new egret.Bitmap(RES.getRes("lv31_0_png")), this.MapImage[9] = new egret.Bitmap(RES.getRes("lv31_4_png")), this.MapImage[10] = new egret.Bitmap(RES.getRes("lv31_1_png"));
            for (var J = 0; 11 > J; J++) this.addChild(this.MapImage[J]);
            this.MapImage[0].pos(220, 376, 115, 29), this.MapImage[1].pos(426, 454, 115, 29), this.MapImage[2].pos(220, 634, 115, 29), this.MapImage[3].pos(450, 714, 115, 29), this.MapImage[3].name = "last", this.MapImage[4].pos(220, 462, 134, 170), this.MapImage[5].pos(426, 540, 134, 170), this.MapImage[6].pos(220, 720, 134, 170), this.MapImage[7].pos(450, 800, 134, 170);
            var K = Math.floor(4 * Math.random()) + 4;
            this.MapImage[8].pos(this.MapImage[K].x, this.MapImage[K].y, 102, 108), this.MapImage[8].name = "mole", this.setChildIndex(this.MapImage[8], this.getChildIndex(this.getChildByName("last")) + 1), egret.Tween.get(this.MapImage[8]).to({
                y: this.MapImage[K].y - 90
            }, 400), this.MapImage[9].pos(226, 900, 99, 141), this.MapImage[9].name = "hammer", this.MapImage[10].pos(-999, -999, 103, 108), this.MapImage[10].visible = !1
        } else if (32 == this.currentGate) {
            this.DontMove = 2, this.MapImage[0] = new egret.Bitmap(RES.getRes("lv32_10_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv32_0_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv32_1_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv32_3_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv32_7_png")), this.MapImage[5] = new egret.Bitmap(RES.getRes("lv32_4_png")), this.MapImage[6] = new egret.Bitmap(RES.getRes("lv32_5_png")), this.MapImage[7] = new egret.Bitmap(RES.getRes("lv32_6_png")), this.MapImage[8] = new egret.Bitmap(RES.getRes("lv31_4_png")), this.MapImage[9] = new egret.Bitmap(RES.getRes("lv3_2_png"));
            for (var Q = 0; 10 > Q; Q++) this.addChild(this.MapImage[Q]);
            this.MapImage[0].pos(346, 654, 640, 62), this.MapImage[1].pos(440, 664, 255, 273), this.MapImage[2].pos(440, 664, 255, 273), this.MapImage[3].pos(180, 516, 166.4, 236.6), this.MapImage[3].visible = !1, this.MapImage[4].pos(180, 540, 135, 420), this.MapImage[4].visible = !1, this.MapImage[5].pos(180, 516, 104 * 1.3, 221), this.MapImage[6].pos(257, 757, 99, 120), this.MapImage[7].pos(336, 910, 87, 87), this.MapImage[8].pos(490, 910, 99, 141), this.MapImage[9].pos(170, 900, 136, 117), this.Okinfo = {
                initxyarr: [
                    [257, 757],
                    [336, 910],
                    [490, 910],
                    [170, 900]
                ]
            }
        } else if (33 == this.currentGate) {
            this.DontMove = 2, this.MapImage[0] = new egret.Bitmap(RES.getRes("lv6_2_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv6_3_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv2_btn_4_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv2_btn_4_png"));
            for (var Z = 0; 4 > Z; Z++) this.addChild(this.MapImage[Z]);
            this.MapImage[0].pos(216, 810, 70, 89), this.MapImage[0].scaleX = -1, this.MapImage[1].pos(428, 810, 74, 90), this.MapImage[2].pos(190, 945, 253, 133), this.MapImage[3].pos(456, 945, 247, 128), this.Addtext("Xóa", {
                x: 190,
                y: 945,
                size: 40
            }, this), this.Addtext("ok", {
                x: 450,
                y: 945,
                size: 40
            }, this), this.Focustext = this.Addtext("0", {
                x: 322,
                y: 816,
                size: 90
            }, this), this.Focustext.bold = !0, this.Okinfo = {
                correctAnswer: 10,
                okarr: []
            };
            for (var bl = 0; 10 > bl; bl++) {
                var c = Math.floor(bl / 5),
                    m = bl % 5;
                this.Okinfo.okarr.push([100 * m + 124, 200 * c + 404])
            }
            for (var bm = 0; 6 > bm; bm++) {
                var c = Math.floor(bm / 3),
                    m = bm % 3;
                this.MapImage[bm + 4] = new egret.Bitmap(RES.getRes("lv33_2_png")), this.addChild(this.MapImage[bm + 4]), this.MapImage[bm + 4].pos(190 * m + 124, 222 * c + 404, 107.2, 136)
            }
            for (var bn = 0; 4 > bn; bn++) this.MapImage[bn + 4 + 6] = new egret.Bitmap(RES.getRes("lv33_2_png")), this.addChild(this.MapImage[bn + 4 + 6]), this.MapImage[bn + 4 + 6].pos(this.MapImage[bn + 4].x, this.MapImage[bn + 4].y, 107.2, 136)
        } else if (34 == this.currentGate) {
            this.DontMove = 2, this.MapImage[0] = new egret.Bitmap(RES.getRes("lv3_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv34_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv34_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv34_3_png")), this.MapImage[4] = new egret.Bitmap(RES.getRes("lv34_4_png"));
            for (var bo = 0; 5 > bo; bo++) this.addChild(this.MapImage[bo]);
            this.MapImage[0].pos(520, 430, 165.6, 153.9), this.MapImage[1].pos(336, 557, 205, 163), this.MapImage[2].pos(130, 880, 196, 186), this.MapImage[2].visible = !1, this.MapImage[3].pos(88, 400, 143, 126), this.MapImage[4].pos(140, 880, 103, 172), this.MapImage[4].visible = !1, this.MapImage[5] = new egret.Bitmap(RES.getRes("lv27_6_png")), this.MapImage[6] = new egret.Bitmap(RES.getRes("lv27_6_png")), this.MapImage[7] = new egret.Bitmap(RES.getRes("lv34_0_png")), this.MapImage[8] = new egret.Bitmap(RES.getRes("lv27_6_png")), this.MapImage[9] = new egret.Bitmap(RES.getRes("lv27_6_png")), this.MapImage[10] = new egret.Bitmap(RES.getRes("lv34_0_png")), this.MapImage[11] = new egret.Bitmap(RES.getRes("lv27_6_png")), this.MapImage[12] = new egret.Bitmap(RES.getRes("lv27_6_png")), this.MapImage[13] = new egret.Bitmap(RES.getRes("lv34_0_png"));
            for (var bp = 5; 14 > bp; bp++) this.addChild(this.MapImage[bp]);
            this.MapImage[5].pos(580, 792, 107, 76), this.MapImage[6].pos(810, 762, 107, 76), this.MapImage[7].pos(500, 800, 125, 70), this.MapImage[8].pos(452, 900, 107, 76), this.MapImage[9].pos(340, 902, 107, 76), this.MapImage[10].pos(370, 930, 125, 70), this.MapImage[11].pos(172, 925, 107, 76), this.MapImage[12].pos(86, 952, 107, 76), this.MapImage[13].pos(130, 984, 125, 70), this.MapImage[14] = new egret.Bitmap(RES.getRes("lv34_5_png")), this.addChild(this.MapImage[14]), this.MapImage[14].pos(130, 954, 68, 18), this.Okinfo = {
                initxyarr: [
                    [520, 430],
                    [336, 557],
                    [],
                    [88, 400],
                    [],
                    [],
                    [],
                    [500, 800],
                    [],
                    [],
                    [370, 930],
                    [],
                    [],
                    [130, 984]
                ]
            }
        } else if (35 == this.currentGate) {
            this.DontMove = 2, this.gate35scale = 1, this.distance = -1, this.MapImage[0] = new egret.Bitmap(RES.getRes("lv35_0_png")), this.MapImage[1] = new egret.Bitmap(RES.getRes("lv35_1_png")), this.MapImage[2] = new egret.Bitmap(RES.getRes("lv35_2_png")), this.MapImage[3] = new egret.Bitmap(RES.getRes("lv35_3_png"));
            for (var bq = 0; 4 > bq; bq++) this.addChild(this.MapImage[bq]);
            this.MapImage[0].pos(320, 720, 593, 297), this.MapImage[1].pos(320, 720, 108, 38), this.MapImage[1].scaleX = 1, this.MapImage[1].scaleY = 1, this.MapImage[2].pos(540, 640, 79, 127), this.MapImage[3].pos(120, 640, 84.5, 128)
        } else if (36 == this.currentGate)
            for (var br = 0; 3 > br; br++) this.addChild(this.MapImage[br]);
        else if (37 == this.currentGate)
            for (var bs = 0; 3 > bs; bs++) this.addChild(this.MapImage[bs])
    }, t.prototype.TimerBlock = function(e, t) {
        this.NumBlock++, this.BlockState[this.NumBlock] = 1
    }, t.prototype.TimerTick = function() {
        var e = this;
        0 == this.choose || 100 == this.choose || 1 == this.choose && 19 == this.currentGate && this.monkeygo && (this.Fpscount++, this.MapImage[2].x += 2, this.MapImage[3].x += 2, (this.MapImage[2].x >= 500 || this.MapImage[3].x >= 500) && (this.monkeygo = !1, this.IncorrectAnimate({
            x: 320,
            y: 640
        }), egret.setTimeout(function() {
            e.ReleaseGame(), e.choose = 1, e.InitGame()
        }, this, 700)), 20 == this.Fpscount && (this.Fpscount = 0, this.monkeygo && (this.MapImage[2].visible = !this.MapImage[2].visible, this.MapImage[3].visible = !this.MapImage[3].visible)))
    }, t.prototype.DrawMap = function() {}, t.prototype.DrawBlock = function() {}, t.prototype.DrawHero = function() {}, t.prototype.randomsort = function(e, t) {
        return Math.random() > .5 ? -1 : 1
    }, t.prototype.titleanimate = function() {
        egret.Tween.get(this.InterImage[2]).to({
            y: 260
        }, 500), egret.Tween.get(this.InterImage[3]).to({
            y: 260
        }, 500), egret.Tween.get(this.InterImage[2], {
            loop: !0
        }).to({
            alpha: 0
        }, 0).wait(600).to({
            alpha: 1
        }, 0).wait(600), egret.Tween.get(this.InterImage[3], {
            loop: !0
        }).to({
            alpha: 1
        }, 0).wait(600).to({
            alpha: 0
        }, 0).wait(600), egret.Tween.get(this.InterImage[4]).to({
            y: 800
        }, 500), egret.Tween.get(this.InterImage[5]).to({
            y: 800
        }, 500), egret.Tween.get(this.InterImage[6]).to({
            y: 800
        }, 500), egret.Tween.get(this.InterImage[4], {
            loop: !0
        }).to({
            alpha: 1
        }, 0).wait(200).to({
            alpha: 0
        }, 0).wait(400), egret.Tween.get(this.InterImage[5], {
            loop: !0
        }).to({
            alpha: 0
        }, 0).wait(200).to({
            alpha: 1
        }, 0).wait(200).to({
            alpha: 0
        }, 0).wait(200), egret.Tween.get(this.InterImage[6], {
            loop: !0
        }).to({
            alpha: 0
        }, 0).wait(400).to({
            alpha: 1
        }, 0).wait(200)
    }, t.prototype.setArrcolor = function(e, t) {
        for (var a = 0; a < e.length; a++) this.SetColor(e[a], t)
    }, t.prototype.togglevisible = function(e, t, a) {
        this[a] = this[a] >= t ? 0 : this[a];
        for (var i = parseInt(t / e.length + ""), s = Math.floor(this.index / i), n = 0; n < e.length; n++) e[n].visible = !1;
        e[s].visible = !0, this[a]++
    }, t.prototype.visibletriggle = function(e, t) {
        for (var a = 0; a < e.length; a++) {
            if (e[a].length)
                for (var i = 0; i < e[a].length; i++) e[a][i].visible = t;
            e[a].visible = t
        }
    }, t.prototype.createCircle = function(e, t, a) {
        var i = new egret.Shape;
        i.x = e, i.y = t, i.graphics.lineStyle(10, 65280), i.graphics.beginFill(16711680, 1), i.graphics.drawCircle(0, 0, 4), i.graphics.endFill(), a.addChild(i)
    }, t.prototype.TouchCircle = function(e, t, a) {
        this.TouchCircleShp = new egret.Shape, a.addChild(this.TouchCircleShp), this.TouchCircleShp.x = e, this.TouchCircleShp.y = t, this.TouchCircleShp.graphics.beginFill(13421772, 1), this.TouchCircleShp.graphics.drawCircle(0, 0, 10), this.TouchCircleShp.graphics.endFill(), egret.Tween.get(this.TouchCircleShp, {
            loop: !1
        }).to({
            alpha: 0,
            scaleX: 6,
            scaleY: 6
        }, 400)
    }, t.prototype.getAngle = function(e, t, a, i) {
        var s = Math.abs(e - a),
            n = Math.abs(t - i),
            o = Math.sqrt(Math.pow(s, 2) + Math.pow(n, 2)),
            r = n / o,
            h = Math.acos(r),
            p = Math.floor(180 / (Math.PI / h));
        return a > e && i > t && (p = 180 - p), a == e && i > t && (p = 180), a > e && i == t && (p = 90), e > a && i > t && (p = 180 + p), e > a && i == t && (p = 270), e > a && t > i && (p = 360 - p), p
    }, t.prototype.CorrectAnimate = function(e) {
        this.MoveCanNot = 1, egret.Tween.removeTweens(this.InterImage[11]), egret.Tween.removeTweens(this.InterImage[12]), this.InterImage[12].pos(e.x, e.y, 76, 76), this.InterImage[12].scaleX = 0, this.InterImage[12].scaleY = 0, this.InterImage[11].alpha = 0, egret.Tween.get(this.InterImage[12]).to({
            scaleX: 1.3,
            scaleY: 1.3,
            alpha: 1
        }, 600).to({
            alpha: 0
        }, 300);
        var t = RES.getRes("soundok_mp3");
        t.play(0, 1)
    }, t.prototype.IncorrectAnimate = function(e) {
        var t = this;
        34 != this.currentGate && (this.MoveCanNot = 1), egret.Tween.removeTweens(this.InterImage[11]), egret.Tween.removeTweens(this.InterImage[12]), this.InterImage[11].pos(e.x, e.y, 76, 76), this.InterImage[11].scaleX = 0, this.InterImage[11].scaleY = 0, this.InterImage[12].alpha = 0, this.InterImage[11].alpha = 0, egret.Tween.get(this.InterImage[11]).to({
            scaleX: 1.3,
            scaleY: 1.3,
            alpha: 1
        }, 600).to({
            alpha: 0
        }, 300);
        var a = RES.getRes("soundfail_mp3");
        a.play(0, 1), egret.setTimeout(function() {
            t.MoveCanNot = 0, 19 == t.currentGate && (t.MoveCanNot = 1)
        }, this, 550)
    }, t.prototype.Bingo = function(e) {
        this.MoveCanNot = 1, this.NowGate++, this.NowGate > this.NumGateTT && (this.NumGateTT = this.NowGate, this.SaveGameScore()), this.GameState = 1, this.CorrectAnimate(e), this.Connect.UpLoadScore(this.NumGateTT), this.Connect.setCurentScore(this.NumGateTT), egret.setTimeout(this.ShowADNow, this, 600, 1), egret.setTimeout(this.ShowResult, this, 1e3)
    }, t.prototype.Addtext = function(e, t, a, i) {
        var s = new egret.TextField;
        return a.addChild(s), i ? s.textColor = i : s.textColor = 0, s.size = t.size ? t.size : 30, s.bold = t.bold ? !0 : !1, s.text = e + "", s.x = t.x, s.y = t.y, s.anchorOffsetX = s.width / 2, s.anchorOffsetY = s.height / 2, s
    }, t.prototype.ShowFail = function() {}, t.prototype.ShowTip = function(e, t) {
        var a;
        if (1 == e || 2 == e) {
            this.GameState = 2, this.OverImage[0] = new egret.Bitmap(RES.getRes("overgamebg_png")), this.OverImage[1] = new egret.Bitmap(RES.getRes("overgameFrame_png")), this.OverImage[2] = new egret.Bitmap(RES.getRes("tiptitle_png")), this.OverImage[3] = new egret.Bitmap(RES.getRes("close_png")), this.OverImage[4] = new egret.Bitmap(RES.getRes("watchtvkey_png"));
            for (var i = 0; 5 > i; i++) this.addChild(this.OverImage[i]);
            this.OverImage[4].visible = !1, this.OverImage[0].pos(320, 560, 1920, 1920), this.OverImage[1].pos(320, 550, 530, 410), this.OverImage[2].pos(320, 467, 176, 54), this.OverImage[3].pos(526, 310, 70, 70), this.OverImage[4].pos(320, 616, 225, 94)
        }
        if (3 == e || 4 == e) {
            this.GameState = 3, a = 7, this.OverImage[0] = new egret.Bitmap(RES.getRes("overgamebg_png")), this.OverImage[1] = new egret.Bitmap(RES.getRes("overgameFrame_png")), this.OverImage[2] = new egret.Bitmap(RES.getRes("close_png")), this.OverImage[3] = new egret.Bitmap(RES.getRes("keydouble_png")), this.OverImage[4] = new egret.Bitmap(RES.getRes("skiptitle_png")), this.OverImage[5] = new egret.Bitmap(RES.getRes("tiptitle_png")), this.OverImage[6] = new egret.Bitmap(RES.getRes("watchtvkey_png")), this.OverImage[7] = new egret.Bitmap(RES.getRes("skipconfirm_png"));
            for (var i = 0; 8 > i; i++) this.addChild(this.OverImage[i]);
            this.OverImage[6].visible = !1, this.OverImage[7].visible = !1, this.OverImage[0].pos(320, 560, 1920, 1920), this.OverImage[1].pos(320, 550, 530, 410), this.OverImage[2].pos(526, 310, 70, 70), this.OverImage[3].pos(320, 440, 192, 56), this.OverImage[4].pos(320, 620, 418, 65), this.OverImage[5].pos(320, 530, 176, 54), this.OverImage[6].pos(320, 810, 225, 94), this.OverImage[7].pos(320, 810, 464, 95)
        }
        1 == e ? (a = 4, this.UILabel[0] = new egret.TextField, this.addChild(this.UILabel[0]), this.UILabel[0].textColor = 0, this.UILabel[0].text = t + "", this.UILabel[0].size = 40, this.UILabel[0].x = 320, this.UILabel[0].y = 565, this.UILabel[0].width > 470 ? (this.UILabel[0].x = 90, this.UILabel[0].width = 470, this.UILabel[0].anchorOffsetX = 0) : this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].alpha = 0, egret.Tween.get(this.UILabel[0]).to({
            alpha: 1
        }, 400)) : 2 == e ? (a = 5, this.OverImage[4].visible = !0) : 3 == e ? this.OverImage[7].visible = !0 : 4 == e && (this.OverImage[6].visible = !0);
        for (var i = 1; a > i; i++) this.OverImage[i].alpha = 0, this.OverImage[i].scaleX = 0, this.OverImage[i].scaleY = 0, egret.Tween.get(this.OverImage[i]).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 300), egret.Tween.get(this.OverImage[i]).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 300)
    }, t.prototype.ShowResult = function() {
        this.MoveCanNot = 0, this.OverImage[0] = new egret.Bitmap(RES.getRes("overgamebg_png")), this.OverImage[1] = new egret.Bitmap(RES.getRes("overgameFrame_png")), this.OverImage[2] = new egret.Bitmap(RES.getRes("overgameNext_png")), this.OverImage[3] = new egret.Bitmap(RES.getRes("overgametitle_png")), this.OverImage[4] = new egret.Bitmap(RES.getRes("pic_hand_1_png")), this.OverImage[5] = new egret.Bitmap(RES.getRes("pic_hand_2_png")), this.OverImage[6] = new egret.Bitmap(RES.getRes("levelKey_png")), this.OverImage[7] = new egret.Bitmap(RES.getRes("rankbtn_png")), this.OverImage[8] = new egret.Bitmap(RES.getRes("watchtvkey_png"));
        for (var e = 0; 8 >= e; e++) this.addChild(this.OverImage[e]);
        this.OverImage[8].visible = !0, this.OverImage[7].visible = !0, this.OverImage[0].pos(320, 560, 1920, 1920), this.OverImage[1].pos(320, 325, 495, 350), this.OverImage[2].pos(320, 715, 420, 94), this.OverImage[3].pos(320, 300, 389.7, 132.3), this.OverImage[6].pos(100 - this.iPhoneW, 70, 170, 60), this.OverImage[7].pos(450, 588, 215, 94), this.UILabel[0] = new egret.TextField, this.addChild(this.UILabel[0]), this.UILabel[0].textColor = 0, this.UILabel[0].text = this.GameData.GetGateInfo(this.currentGate).okinfo + "", this.UILabel[0].size = 34, this.UILabel[0].x = 320, this.UILabel[0].y = 340, this.UILabel[0].width > 420 ? (this.UILabel[0].x = 110, this.UILabel[0].width = 420, this.UILabel[0].anchorOffsetX = 0) : this.UILabel[0].anchorOffsetX = this.UILabel[0].width / 2, this.UILabel[0].alpha = 0, egret.Tween.get(this.UILabel[0]).to({
            alpha: 1
        }, 800);
        for (var e = 1; 4 > e; e++) this.OverImage[e].alpha = 0, this.OverImage[e].scaleX = 0, this.OverImage[e].scaleY = 0, egret.Tween.get(this.OverImage[e]).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 500, egret.Ease.bounceOut), egret.Tween.get(this.OverImage[e]).to({
            scaleX: 1,
            scaleY: 1,
            alpha: 1
        }, 500, egret.Ease.bounceOut);
        this.OverImage[4].pos(320, 1944, this.StageWidth, 404), this.OverImage[5].pos(320, 1944, this.StageWidth, 406), this.OverImage[8].pos(198, 588, 215, 94), egret.Tween.get(this.OverImage[4], {
            loop: !1
        }).to({
            y: 944
        }, 600), egret.Tween.get(this.OverImage[5], {
            loop: !1
        }).to({
            y: 944
        }, 600), egret.Tween.get(this.OverImage[4], {
            loop: !0
        }).to({
            alpha: 1
        }, 0).wait(200).to({
            alpha: 0
        }, 0).wait(200), egret.Tween.get(this.OverImage[5], {
            loop: !0
        }).to({
            alpha: 0
        }, 0).wait(200).to({
            alpha: 1
        }, 0).wait(200), this.ScoreLabel = new egret.BitmapText, this.addChild(this.ScoreLabel), this.ScoreLabel.font = RES.getRes("numimage2_fnt"), this.ScoreLabel.text = this.NumGoldTT + "", this.ScoreLabel.scaleX = .5, this.ScoreLabel.scaleY = .5, this.ScoreLabel.x = 124 - this.iPhoneW, this.ScoreLabel.y = 70, this.ScoreLabel.anchorOffsetX = this.ScoreLabel.width / 2, this.ScoreLabel.anchorOffsetY = this.ScoreLabel.height / 2;
        var t = RES.getRes("soundwin_mp3");
        t.play(0, 1);
        this.OverImage[7].visible = false;
        this.OverImage[8].visible = false
    }, t.prototype.ShowRank = function() {
        this.RankNow = 1, this.RankLayer = new egret.DisplayObjectContainer, this.Scroller = new egret.ScrollView, this.RankImage[0] = new egret.Bitmap(RES.getRes("interbg_png")), 0 == this.RankNum ? this.RankImage[1] = new egret.Bitmap(RES.getRes("rankbtn2_png")) : this.RankImage[1] = new egret.Bitmap(RES.getRes("rankbtn1_png")), this.RankImage[2] = new egret.Bitmap(RES.getRes("rankbtn4_png")), this.RankImage[3] = new egret.Bitmap(RES.getRes("rankme_png")), this.RankImage[4] = new egret.Bitmap(RES.getRes("rankmark_png")), this.RankImage[5] = new egret.Bitmap(RES.getRes("rankbtn3_png")), this.RankImage[6] = new egret.Bitmap(RES.getRes("rankshare_png"));
        for (var e = 0; 7 > e; e++) this.addChild(this.RankImage[e]);
        this.RankLabel = new egret.TextField, this.addChild(this.RankLabel), this.RankImage[0].pos(320, 568, this.StageWidth + 20, this.StageHeight + 20), this.RankImage[1].pos(320, 160, 480, 72), this.RankImage[2].pos(126, 996, 90, 98), this.RankImage[3].pos(380, 994, 360, 80), 0 == this.RankNum ? this.RankImage[4].pos(270, 150, 18, 18) : this.RankImage[4].pos(500, 150, 18, 18), this.RankImage[5].pos(320, 568, 120, 122), this.RankImage[6].pos(320, 700, 263, 93);
        var t = [],
            a = [],
            i = [];
        0 == this.RankNum ? (t = this.Connect.GetUserName(1), a = this.Connect.GetUserImage(1), i = this.Connect.GetUserScore(1), this.RankImage[5].visible = !1, this.RankImage[6].visible = !1, this.RankKill > 0 && (t.splice(0, this.RankKill), a.splice(0, this.RankKill), i.splice(0, this.RankKill))) : (t = this.Connect.GetUserName(2), a = this.Connect.GetUserImage(2), i = this.Connect.GetUserScore(2), this.RankImage[5].visible = !1, this.RankImage[6].visible = !1, t.length < 3 && (this.RankImage[5].visible = !0, this.RankImage[6].visible = !0)), this.RankLabel.x = 520, this.RankLabel.y = 994, this.RankLabel.size = 30, this.RankLabel.textColor = 0, this.RankLabel.text = "" + this.Connect.GetMyRank(), this.RankLabel.anchorOffsetX = this.RankLabel.width, this.RankLabel.anchorOffsetY = this.RankLabel.height / 2;
        for (var s, n, o, r, h, p, g = function(e) {
                s = new egret.Bitmap(RES.getRes("rankbg_png")), l.RankLayer.addChild(s), s.pos(320, 90 * e, 480, 80), 3 > e ? (n = new egret.Bitmap(RES.getRes("rankview" + (e + 1) + "_png")), l.RankLayer.addChild(n), n.pos(120, 90 * e + 5, 50, 54)) : (o = new egret.TextField, l.RankLayer.addChild(o), o.x = 115, o.y = 90 * e, o.text = e + 1 + "", o.size = 30, o.textColor = 0, o.anchorOffsetX = o.width / 2, o.anchorOffsetY = o.height / 2), r = new egret.Bitmap(RES.getRes("rankpeople_png")), l.RankLayer.addChild(r), r.pos(525, 90 * e, 28, 28);
                var g = new egret.Bitmap;
                l.RankLayer.addChild(g), g.pos(190, 90 * e, 66, 66), RES.getResByUrl(a[e], function(e) {
                    g.texture = e
                }, l, RES.ResourceItem.TYPE_IMAGE), h = new egret.TextField, l.RankLayer.addChild(h), h.x = 240, h.y = 90 * e, h.size = 22, h.textColor = 0, h.text = "" + t[e], h.width > 180 && (h.width = 180), h.wordWrap = !0, h.anchorOffsetY = h.height / 2, p = new egret.TextField, l.RankLayer.addChild(p), p.x = 500, p.y = 90 * e, p.size = 34, p.textColor = 0, p.text = i[e] + "", p.anchorOffsetX = p.width, p.anchorOffsetY = p.height / 2
            }, l = this, e = 0; e < t.length; e++) g(e);
        this.RankLayer.x = 0, this.RankLayer.y = 40, this.RankLayer.width = 600, this.RankLayer.height = 90 * t.length, this.Scroller.x = 0, this.Scroller.y = 216, this.Scroller.width = 640, this.Scroller.height = 710, this.Scroller.setContent(this.RankLayer), this.addChild(this.Scroller)
    }, t.prototype.EndRank = function() {
        this.RankNow = 0;
        for (var e = 0; 7 > e; e++) this.removeChild(this.RankImage[e]);
        this.removeChild(this.RankLabel), this.RankLayer.removeChildren(), this.removeChild(this.Scroller)
    }, t.prototype.ShowADNow = function(e) {
        0 == e ? 1 == platform.hasRAD() ? (this.Connect.ShowADVideo(), this.VideoState = -1) : this.ShowTipView("Please try again later") : 1 == e && this.NumTimeAD >= 800 && (1 == platform.hasIAD() ? (this.NumTimeAD = 0, this.Connect.ShowADChaping()) : console.log("无插屏广告"))
    }, t.prototype.CheckADVideo = function() {
        this.NumTimeAD++, -1 == this.VideoState && (this.VideoState = this.Connect.GetADVideoState(), 0 == this.VideoState || 1 == this.VideoState && (this.NumTimeAD = 0, 100 == this.choose || 1 == this.choose && this.GameState >= 1 && this.GameState <= 3 && (this.NumGoldTT += 3, 1 == this.GameState && (this.ScoreLabel.text = this.NumGoldTT + "", this.ScoreLabel.anchorOffsetX = this.ScoreLabel.width / 2), this.SaveGameScore(), egret.setTimeout(this.ShowTipView, this, 600, "You got 3 Key"))))
    }, t.prototype.SaveGameData = function(e, t, a) {
        e != t && (egret.localStorage.setItem(a, e + ""), t = e)
    }, t.prototype.ImageInImage = function(e, t) {
        return e.x - e.width / 2 < t.x + t.width / 2 && e.x + e.width / 2 > t.x - t.width / 2 && e.y - e.height / 2 < t.y + t.height / 2 && e.y + e.height / 2 > t.y - t.height / 2 ? !0 : !1
    }, t.prototype.PointInImage = function(e, t, a) {
        return 14 == this.currentGate ? t > e.x - e.width && t < e.x + e.width && a > e.y - e.height && a < e.y + e.height ? !0 : !1 : t > e.x - e.width / 2 && t < e.x + e.width / 2 && a > e.y - e.height / 2 && a < e.y + e.height / 2 ? !0 : !1
    }, t.prototype.PointInRect = function(e, t, a, i, s) {
        return s.x > e && s.x < e + a && s.y > t && s.y < t + i ? !0 : !1
    }, t.prototype.PointInRect2 = function(e, t, a, i, s) {
        return s.x > e - a / 2 && s.x < e + a / 2 && s.y > t - i / 2 && s.y < t + i / 2 ? !0 : !1
    }, t.prototype.SetColor = function(e, t) {
        var a = [];
        1 == t ? a = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0] : 2 == t && (a = [1, 0, 0, 0, -60, 0, 1, 0, 0, -60, 0, 0, 1, 0, -60, 0, 0, 0, 1, 0]);
        var i = new egret.ColorMatrixFilter(a);
        e.filters = [i]
    }, t.prototype.ShowTipView = function(e) {
        var t = new egret.Bitmap(RES.getRes("tipbg_png"));
        this.addChild(t), t.alpha = 0, t.scaleX = .3, t.scaleY = .3, t.pos(320, 500, 534, 68);
        var a = new egret.TextField;
        this.addChild(a), a.size = 28, a.x = 320, a.y = 500, a.text = e, a.bold = !0, a.textColor = 862853, a.alpha = 0, a.scaleX = .3, a.scaleY = .3, a.anchorOffsetX = a.width / 2, a.anchorOffsetY = a.height / 2, egret.Tween.get(t).to({
            scaleX: 1,
            scaleY: 1
        }, 400, egret.Ease.getBackOut(1)), egret.Tween.get(a).to({
            scaleX: 1,
            scaleY: 1
        }, 400, egret.Ease.getBackOut(1)), egret.Tween.get(t).to({
            alpha: 1
        }, 300).to({}, 800).to({
            y: t.y - 120,
            alpha: 0
        }, 500), egret.Tween.get(a).to({
            alpha: 1
        }, 300).to({}, 800).to({
            y: a.y - 120,
            alpha: 0
        }, 500);
        var i = RES.getRes("soundwarn_mp3");
        i.play(0, 1)
    }, t.prototype.SaveGameScore = function() {
        this.NowHeroTT != this.NowHeroTT_S && (egret.localStorage.setItem("BrainTeaser_NowHero", this.NowHeroTT + ""), this.NowHeroTT_S = this.NowHeroTT), this.NumGoldTT != this.NumGoldTT_S && (egret.localStorage.setItem("BrainTeaser_NumGold", this.NumGoldTT + ""), this.NumGoldTT_S = this.NumGoldTT), this.NumGateTT != this.NumGateTT_S && (egret.localStorage.setItem("BrainTeaser_NumGate", this.NumGateTT + ""), this.NumGateTT_S = this.NumGateTT);
        for (var e = 0; 18 > e; e++) this.NumLockTT[e] != this.NumLockTT_S[e] && (egret.localStorage.setItem("BrainTeaser_NumLock" + (e + 1), this.NumLockTT[e] + ""), this.NumLockTT_S[e] = this.NumLockTT[e]);
        this.Connect.setCurentScore(this.NumGateTT)
    }, t.prototype.LoadGameScore = function() {
        this.NowHeroTT = +egret.localStorage.getItem("BrainTeaser_NowHero"), this.NowHeroTT_S = this.NowHeroTT, this.NumGoldTT = +egret.localStorage.getItem("BrainTeaser_NumGold"), this.NumGoldTT_S = this.NumGoldTT, this.NumGateTT = +egret.localStorage.getItem("BrainTeaser_NumGate"), this.NumGateTT_S = this.NumGateTT;
        for (var e = 0; 18 > e; e++) this.NumLockTT[e] = +egret.localStorage.getItem("BrainTeaser_NumLock" + (e + 1)), this.NumLockTT_S[e] = this.NumLockTT[e]
    }, t.prototype.generateScrollview = function() {
        this.scrollview = new egret.ScrollView;
        for (var e = new egret.DisplayObjectContainer, t = 49 + this.NumGateTT, a = 0; t > a; a++) {
            var i = Math.floor(a / 2),
                s = a % 2,
                n = new egret.Bitmap(RES.getRes("fram_big_png"));
            e.addChild(n), n.pos(272 * s + 160 + 22, 202 * i + 120 + 17 - 37, 272, 202, !1, !1);
            var o = new egret.BitmapText;
            if (e.addChild(o), this.NumGateTT - 1 == a) {
                o.font = RES.getRes("numimage2_fnt");
                var r = new egret.Bitmap(RES.getRes("choice_frame_1_png"));
                e.addChild(r), r.pos(272 * s + 220 + 22, 202 * i + 178 + 17 - 37, 50, 50, !1, !1);
                var h = new egret.Bitmap(RES.getRes("ic_questionmark_1_png"));
                e.addChild(h), h.pos(272 * s + 216 + 22, 202 * i + 190 + 17 - 37, 58, 82, !1, !1), h.anchorOffsetX = 12, h.anchorOffsetY = 73, egret.Tween.get(h, {
                    loop: !0
                }).to({
                    rotation: -30
                }, 0).wait(600).to({
                    rotation: -0
                }, 0).wait(600)
            } else if (a < this.NumGateTT - 1) {
                o.font = RES.getRes("numimage2_fnt");
                var r = new egret.Bitmap(RES.getRes("choice_frame_1_png"));
                e.addChild(r), r.pos(272 * s + 220 + 22, 202 * i + 178 + 17 - 37, 50, 50, !1, !1);
                var p = new egret.Bitmap(RES.getRes("ic_choice_png"));
                e.addChild(p), p.pos(272 * s + 224 + 22, 202 * i + 170 + 17 - 37, 76, 56, !1, !1)
            } else if (a > this.NumGateTT - 1) {
                o.font = RES.getRes("numimage1_fnt");
                var g = new egret.Bitmap(RES.getRes("ic_lock_1_png"));
                e.addChild(g), g.pos(272 * s + 220 + 22, 202 * i + 178 + 17 - 47, 44, 53, !1, !1)
            }
            var l = a + 1,
                c = 10 > l ? "0" + l : l;
            o.text = c + "", o.scaleX = .9, o.scaleY = .9, o.x = 272 * s + 40 + 40, o.y = 202 * i + 80 + 17 - 37, o.anchorOffsetX = 0, o.anchorOffsetY = o.height / 2
        }
        e.touchEnabled = !0, this.scrollview.setContent(e), this.scrollview.pos(0, 100, 640, 1036, !1, !0), this.addChild(this.scrollview), this.scrollview.verticalScrollPolicy = "on", this.scrollview.horizontalScrollPolicy = "off", this.scrollview.bounces = !1, this.scrollview.scrollTop = 202 * Math.floor((this.NumGateTT - 1) / 2), this.scrollview.visible = !0
    }, t.prototype.TouchBegin = function(e) {
        if (this.ShowFailImg = !0, this.TouchNowIndex = -1, this.TouchFunBtn = "", 1 != this.MoveCanNot) {
            var t = new egret.Point(e.stageX / 2 - this.iPhoneW / 2, e.stageY / 2),
                a = new egret.Point(e.stageX - this.iPhoneW, e.stageY);
            if (this.TouchCircle(a.x, a.y, this), this.TouchNowY = t.y, 1 != this.RankNow) {
                if (0 == this.choose) {
                    if (this.PointInRect(177, 808, 284, 120, a)) {
                        this.TouchFunBtn = "gochoose1", this.SetColor(this.InterImage[3], 2);
                        var i = RES.getRes("soundpress_mp3");
                        i.play(0, 1)
                    } else if (this.PointInRect(188, 944, 278, 120, a)) {
                        this.TouchFunBtn = "chooserank", this.SetColor(this.InterImage[4], 2);
                        var i = RES.getRes("soundpress_mp3");
                        i.play(0, 1)
                    }
                } else if (100 == this.choose)
                    if (this.PointInRect(30 - this.iPhoneW, 10, 90, 80, a)) this.TouchFunBtn = "100to0";
                    else {
                        if (a.y < 100) return void(this.TouchNowIndex = -1);
                        for (var s = new egret.Point(e.stageX - this.iPhoneW, e.stageY - this.iPhoneH + this.scrollview.scrollTop), n = 0; n < this.NumGateTT + 49; n++) this.PointInRect(n % 2 * 272 + 5 + 22, 202 * Math.floor(n / 2) + 100, 250, 194, s) && (this.TouchNowIndex = n)
                    }
                else if (1 == this.choose)
                    if (0 == this.GameState) {
                        if (this.PointInRect(20 - this.iPhoneW, 27, 70, 87, a)) this.TouchFunBtn = "1to100";
                        else if (this.PointInRect(101 - this.iPhoneW, 50, 60, 60, a)) this.TouchFunBtn = "rest";
                        else if (this.PointInRect(256 - this.iPhoneW, 36, 202, 72, a)) {
                            this.TouchFunBtn = "tip";
                            var o = RES.getRes("soundpress_mp3");
                            o.play(0, 1)
                        } else if (this.PointInRect(170 - this.iPhoneW, 40, 202, 72, a)) {
                            this.TouchFunBtn = "skip";
                            var r = RES.getRes("soundpress_mp3");
                            r.play(0, 1)
                        } else if (1 == this.currentGate || 3 == this.currentGate || 6 == this.currentGate || 2 == this.currentGate) {
                            for (var h = 0; h < this.MapImage.length; h++)
                                if (this.PointInImage(this.MapImage[h], a.x, a.y)) {
                                    if (this.TouchNowIndex = h, 2 == this.currentGate && (3 == h || 4 == h || 0 == h || 6 == h)) {
                                        this.SetColor(this.MapImage[h], 2);
                                        var p = RES.getRes("soundpress_mp3");
                                        p.play(0, 1)
                                    }
                                    if (6 == this.currentGate && (1 == h || 2 == h || 3 == h || 4 == h)) {
                                        this.SetColor(this.MapImage[h], 2);
                                        var g = RES.getRes("soundpress_mp3");
                                        g.play(0, 1)
                                    }
                                    if (10 == this.currentGate && (1 == h || 2 == h)) {
                                        this.SetColor(this.MapImage[h], 2), 1 == h && this.txInput.setFocus();
                                        var l = RES.getRes("soundpress_mp3");
                                        l.play(0, 1)
                                    }
                                }
                        } else if (14 == this.currentGate) this.PointInImage(this.LevelTittle, a.x, a.y) && (this.TouchNowIndex = this.LevelTittle.text);
                        else if (4 == this.currentGate && 2 == this.DontMove || 5 == this.currentGate && 2 == this.DontMove || 7 == this.currentGate && 2 == this.DontMove || 8 == this.currentGate && 2 == this.DontMove || 9 == this.currentGate && 2 == this.DontMove) {
                            for (var h = this.MapImage.length - 1; h >= 0; h--)
                                if (this.PointInImage(this.MapImage[h], a.x, a.y)) {
                                    if (8 == this.currentGate && (1 == h || 2 == h || 3 == h || 4 == h)) {
                                        this.SetColor(this.MapImage[h], 2);
                                        var c = RES.getRes("soundpress_mp3");
                                        c.play(0, 1)
                                    }
                                    if (15 == this.currentGate && (2 == h || 3 == h)) {
                                        2 == h && this.txInput.setFocus(), this.SetColor(this.MapImage[h], 2);
                                        var m = RES.getRes("soundpress_mp3");
                                        m.play(0, 1)
                                    }
                                    return this.TouchNowX = a.x, this.TouchNowY = a.y, this.MoveX = this.MapImage[h].x, this.MoveY = this.MapImage[h].y, void(this.TouchNowIndex = h)
                                }
                        } else if (10 == this.currentGate) {
                            for (var h = this.MapImage.length - 1; h >= 0; h--)
                                if (this.PointInImage(this.MapImage[h], a.x, a.y) && (this.TouchNowIndex = h, 2 == h || 3 == h || 4 == h || 1 == h)) {
                                    this.SetColor(this.MapImage[h], 2);
                                    var u = RES.getRes("soundpress_mp3");
                                    u.play(0, 1)
                                }
                        } else if (11 == this.currentGate) this.PointInRect(474, 482, 68, 62, a) && (this.TouchNowIndex = 100);
                        else if (12 == this.currentGate) {
                            var d = 0;
                            for (var I in this.touch2point) d++;
                            var f = [
                                [504, 529],
                                [151, 696],
                                [320, 696],
                                [492, 842]
                            ];
                            if (0 == d)
                                for (var h = 0; h < f.length; h++) this.PointInRect(f[h][0] - 55, f[h][1] - 55, 110, 110, a) && (this.touch2point[e.touchPointID + ""] = h);
                            else if (1 == d)
                                for (var h = 0; h < f.length; h++)
                                    if (this.PointInRect(f[h][0] - 55, f[h][1] - 55, 110, 110, a)) {
                                        this.touch2point[e.touchPointID + ""] = h;
                                        var _ = 0;
                                        for (var I in this.touch2point) _ += this.touch2point[I];
                                        if (3 == _) {
                                            for (var I in this.touch2point) {
                                                var v = this.touch2point[I] + 3 + 4;
                                                this.MapImage[v].alpha = 1
                                            }
                                            return void this.Bingo({
                                                x: 320,
                                                y: 640
                                            })
                                        }
                                    }
                        } else if (19 == this.currentGate) {
                            for (var h = 0; h < this.MapImage.length; h++)
                                if (this.PointInImage(this.MapImage[h], a.x, a.y)) {
                                    if (7 == h) {
                                        this.SetColor(this.MapImage[7], 2), this.monkeyrabbit = !0, -1 == this.gate19touchid && (this.monkeygo = !0), this.MapImage[0].x += 15, this.MapImage[1].x += 15, this.MapImage[0].visible = !this.MapImage[0].visible, this.MapImage[1].visible = !this.MapImage[1].visible, (this.MapImage[0].x > 500 || this.MapImage[1].x > 500) && (this.monkeygo = !1, this.Bingo({
                                            x: 320,
                                            y: 640
                                        }));
                                        break
                                    }
                                    if ((2 == h || 3 == h) && (this.monkeygo = !1, -1 == this.gate19touchid)) {
                                        this.gate19touchid = e.touchPointID;
                                        break
                                    }
                                }
                        } else if (15 == this.currentGate) {
                            for (var h = this.MapImage.length - 1; h >= 0; h--)
                                if (this.PointInImage(this.MapImage[h], a.x, a.y)) {
                                    if (this.TouchNowX = a.x, this.TouchNowY = a.y, this.MoveX = this.MapImage[h].x, this.MoveY = this.MapImage[h].y, this.TouchNowIndex = h, 2 == h || 3 == h || 4 == h || 1 == h) {
                                        this.SetColor(this.MapImage[h], 2);
                                        var w = RES.getRes("soundpress_mp3");
                                        w.play(0, 1)
                                    }
                                    return
                                }
                        } else if (16 == this.currentGate) {
                            for (var h = this.MapImage.length - 1; h >= 0; h--)
                                if (this.PointInImage(this.MapImage[h], a.x, a.y)) return this.TouchNowX = a.x, this.TouchNowY = a.y, this.MoveX = this.MapImage[h].x, this.MoveY = this.MapImage[h].y, void(this.TouchNowIndex = h)
                        } else if (17 == this.currentGate) {
                            for (var h = this.MapImage.length - 1; h >= 0; h--)
                                if (this.PointInImage(this.MapImage[h], a.x, a.y)) return this.TouchNowX = a.x, this.TouchNowY = a.y, this.MoveX = this.MapImage[h].x, this.MoveY = this.MapImage[h].y, void(this.TouchNowIndex = h)
                        } else if (18 == this.currentGate) {
                            for (var h = this.MapImage.length - 1; h >= 0; h--)
                                if (this.PointInImage(this.MapImage[h], a.x, a.y)) return this.TouchNowIndex = h, this.TouchNowX = a.x, this.TouchNowY = a.y, this.MoveX = this.MapImage[h].x, this.MoveY = this.MapImage[h].y, void(this.TouchNowIndex = h)
                        } else if (20 == this.currentGate) {
                            if (this.PointInRect(486, 789, 71, 45, a) && this.MapImage[2].visible) return this.TouchNowY = a.y, void(this.TouchNowIndex = 100);
                            for (var h = this.MapImage.length - 1; h >= 0; h--)
                                if ((!this.MapImage[1].visible || 2 != h) && this.PointInImage(this.MapImage[h], a.x, a.y)) {
                                    this.TouchNowX = a.x, this.TouchNowY = a.y, this.MoveX = this.MapImage[h].x, this.MoveY = this.MapImage[h].y, this.TouchNowIndex = h;
                                    break
                                }
                        } else if (21 == this.currentGate || 22 == this.currentGate || 24 == this.currentGate || 25 == this.currentGate || 13 == this.currentGate || 28 == this.currentGate || 29 == this.currentGate) {
                            for (var h = this.MapImage.length - 1; h >= 0; h--)
                                if (this.PointInImage(this.MapImage[h], a.x, a.y)) {
                                    if (this.TouchNowX = a.x, this.TouchNowY = a.y, this.MoveX = this.MapImage[h].x, this.MoveY = this.MapImage[h].y, this.TouchNowIndex = h, 29 == this.currentGate && 8 == h) {
                                        this.SetColor(this.MapImage[8], 2);
                                        var y = RES.getRes("soundpress_mp3");
                                        y.play(0, 1)
                                    }
                                    return
                                }
                        } else if (23 == this.currentGate) {
                            for (var h = this.MapImage.length - 1; h >= 0; h--)
                                if (this.PointInImage(this.MapImage[h], a.x, a.y)) {
                                    if (8 == h || 5 == h || 6 == h || 7 == h) {
                                        this.SetColor(this.MapImage[h], 2);
                                        var M = RES.getRes("soundpress_mp3");
                                        M.play(0, 1)
                                    }
                                    return this.TouchNowX = a.x, this.TouchNowY = a.y, this.MoveX = this.MapImage[h].x, this.MoveY = this.MapImage[h].y, void(this.TouchNowIndex = h)
                                }
                        } else if (26 == this.currentGate) {
                            var d = 0;
                            for (var I in this.touch2point) d++;
                            var f = [
                                [9999, 9999],
                                [288, 560, 94, 88],
                                [468, 694, 92, 88]
                            ];
                            if (0 == d) {
                                for (var h = 0; h < f.length; h++)
                                    if (this.PointInRect(f[h][0], f[h][1], 100, 100, a)) return void(this.touch2point[e.touchPointID + ""] = h)
                            } else if (1 == d)
                                for (var h = 0; h < f.length; h++)
                                    if (this.PointInRect(f[h][0], f[h][1], 110, 110, a)) {
                                        this.touch2point[e.touchPointID + ""] = h;
                                        var R = 0;
                                        for (var I in this.touch2point) R += this.touch2point[I];
                                        if (3 == R) return this.MapImage[3].visible = !1, this.MapImage[2].visible = !0, void this.Bingo({
                                            x: 320,
                                            y: 640
                                        })
                                    }
                        } else if (27 == this.currentGate) this.PointInRect(396, 268, 158, 108, a) ? this.TouchFunBtn = "clound" : this.PointInRect(410, 564, 98, 118, a) ? this.TouchFunBtn = "owl" : this.PointInRect(212, 552, 64, 56, a) ? this.TouchFunBtn = "bird" : this.PointInRect(130, 626, 78, 72, a) ? this.TouchFunBtn = "butterfly" : this.PointInRect(254, 782, 50, 66, a) ? this.TouchFunBtn = "mole" : this.PointInRect(310, 812, 52, 50, a) ? this.TouchFunBtn = "locust" : this.PointInRect(294, 882, 52, 66, a) ? this.TouchFunBtn = "ant" : this.PointInRect(118, 848, 68, 78, a) ? this.TouchFunBtn = "worm" : this.PointInRect(462, 698, 118, 276, a) && (this.TouchFunBtn = "female");
                        else if (30 == this.currentGate || 31 == this.currentGate || 33 == this.currentGate || 34 == this.currentGate) {
                            for (var h = this.MapImage.length - 1; h >= 0; h--)
                                if (this.PointInImage(this.MapImage[h], a.x, a.y)) {
                                    if (this.TouchNowX = a.x, this.TouchNowY = a.y, this.MoveX = this.MapImage[h].x, this.MoveY = this.MapImage[h].y, this.TouchNowIndex = h, "mole" == this.MapImage[h].name && this.setChildIndex(this.MapImage[h], this.numChildren - 1), 33 == this.currentGate && (1 == h || 2 == h || 3 == h || 0 == h)) {
                                        this.SetColor(this.MapImage[h], 2);
                                        var S = RES.getRes("soundpress_mp3");
                                        S.play(0, 1)
                                    }
                                    return
                                }
                        } else if (32 == this.currentGate) {
                            for (var h = this.MapImage.length - 1; h >= 0; h--)
                                if (this.PointInImage(this.MapImage[h], a.x, a.y)) return 5 == h ? (this.TouchNowY = a.y, void(this.TouchNowIndex = h)) : (this.TouchNowX = a.x, this.TouchNowY = a.y, this.MoveX = this.MapImage[h].x, this.MoveY = this.MapImage[h].y, void(this.TouchNowIndex = h))
                        } else if (34 == this.currentGate);
                        else if (35 == this.currentGate) {
                            this.TouchNowIndex = 100;
                            var d = 0;
                            for (var I in this.touch2point) d++;
                            var f = [
                                [9999, 9999],
                                [214, 646, 104, 156],
                                [336, 642, 104, 158]
                            ];
                            if (0 == d) {
                                for (var h = 0; h < f.length; h++)
                                    if (this.PointInRect(f[h][0], f[h][1], f[h][2], f[h][3], a)) return this.touch2point[e.touchPointID + ""] = {}, this.touch2point[e.touchPointID + ""].index = h, this.touch2point[e.touchPointID + ""].touchX = a.x, void(this.touch2point[e.touchPointID + ""].touchY = a.y)
                            } else if (1 == d)
                                for (var h = 0; h < f.length; h++) {
                                    this.PointInRect(f[h][0], f[h][1], f[h][2], f[h][3], a) && (this.touch2point[e.touchPointID + ""] = {}, this.touch2point[e.touchPointID + ""].index = h, this.touch2point[e.touchPointID + ""].touchX = a.x, this.touch2point[e.touchPointID + ""].touchY = a.y);
                                    var x = 0;
                                    for (var I in this.touch2point) x += this.touch2point[I].index;
                                    if (3 == x) return void(this.gate35num = !0)
                                }
                        }
                    } else if (1 == this.GameState) {
                    if (this.PointInRect(87, 642, 466, 122, a)) {
                        this.TouchFunBtn = "overgamenext", this.SetColor(this.OverImage[2], 2);
                        var b = RES.getRes("soundpress_mp3");
                        b.play(0, 1)
                    } else if (this.PointInRect(92, 530, 218, 108, a)) {
                        this.TouchFunBtn = "overgamewatchTv", this.SetColor(this.OverImage[8], 2);
                        var T = RES.getRes("soundpress_mp3");
                        T.play(0, 1)
                    } else if (this.PointInRect(338, 536, 224, 108, a)) {
                        this.TouchFunBtn = "overgamerank", this.SetColor(this.OverImage[7], 2);
                        var B = RES.getRes("soundpress_mp3");
                        B.play(0, 1)
                    }
                } else 2 == this.GameState ? this.PointInRect(495, 280, 90, 90, a) ? this.TouchFunBtn = "closetip" : this.PointInRect(208, 570, 234, 98, a) && 1 == this.OverImage[4].visible && (this.SetColor(this.OverImage[4], 2), this.TouchFunBtn = "skipwatchTv") : 3 == this.GameState && (this.PointInRect(495, 280, 90, 90, a) ? this.TouchFunBtn = "closetip" : this.PointInRect(206, 756, 236, 116, a) && 1 == this.OverImage[6].visible ? (this.SetColor(this.OverImage[6], 2), this.TouchFunBtn = "skipwatchtv") : this.PointInRect(76, 762, 498, 110, a) && 1 == this.OverImage[7].visible && (this.SetColor(this.OverImage[7], 2), this.TouchFunBtn = "skipconfirm"))
            } else if (this.PointInRect(40, 473, 45, 49, t)) {
                this.SetColor(this.RankImage[2], 2);
                var i = RES.getRes("soundpress_mp3");
                i.play(0, 1)
            } else if (this.PointInRect(27, 35, 121, 69, t) && 0 == this.RankNum) {
                var i = RES.getRes("soundpress_mp3");
                i.play(0, 1), this.RankNum = 1, this.EndRank(), this.ShowRank()
            } else if (this.PointInRect(151, 35, 139, 70, t) && 1 == this.RankNum) {
                var i = RES.getRes("soundpress_mp3");
                i.play(0, 1), this.RankNum = 0, this.EndRank(), this.ShowRank()
            } else if (this.PointInRect(93, 251, 192, 185, t) && 1 == this.RankNum && 1 == this.RankImage[5].visible) {
                this.SetColor(this.RankImage[5], 2), this.SetColor(this.RankImage[6], 2);
                var i = RES.getRes("soundpress_mp3");
                i.play(0, 1)
            }
        }
    }, t.prototype.TouchMoved = function(e) {
        var t = this;
        if (1 != this.GameState && 1 != this.MoveCanNot && 2 == this.DontMove) {
            var a = (new egret.Point(e.stageX / 2 - this.iPhoneW / 2, e.stageY / 2), new egret.Point(e.stageX - this.iPhoneW, e.stageY));
            if (1 == this.choose && (8 == this.currentGate && 5 == this.TouchNowIndex || 9 == this.currentGate && 0 == this.TouchNowIndex || 2 == this.DontMove)) {
                if (-1 == this.TouchNowIndex || void 0 == this.TouchNowIndex) return;
                this.ShowFailImg = !1;
                var i = a.x - this.TouchNowX + this.MoveX,
                    s = a.y - this.TouchNowY + this.MoveY,
                    n = !0;
                if (246 > s) return;
                if (13 == this.currentGate && this.TouchNowIndex == this.Okinfo.correctAnswer) {
                    var o = Math.abs(i - this.MoveX),
                        r = Math.abs(s - this.MoveY);
                    this.gate13num && (this.gate13num += o, this.gate13num += r), this.gate13num && this.gate13num > 8e3 && (this.MapImage[3].x = this.MapImage[this.Okinfo.correctAnswer].x, this.MapImage[3].y = this.MapImage[this.Okinfo.correctAnswer].y, this.MapImage[3].alpha = 1, this.gate13num = !1, egret.Tween.get(this.MapImage[3]).to({
                        x: this.MapImage[this.Okinfo.correctAnswer].x + 30,
                        y: this.MapImage[this.Okinfo.correctAnswer].y + 50
                    }, 300))
                }
                if (15 == this.currentGate && (0 == this.TouchNowIndex || 2 == this.TouchNowIndex || 3 == this.TouchNowIndex)) return;
                if (16 == this.currentGate && 0 == this.TouchNowIndex) return;
                if (17 == this.currentGate && 0 == this.TouchNowIndex) return;
                if (9 == this.currentGate && (1 == this.TouchNowIndex || 2 == this.TouchNowIndex || 0 == this.TouchNowIndex)) return;
                if (8 == this.currentGate && 5 != this.TouchNowIndex) return;
                if (20 == this.currentGate) {
                    if (100 == this.TouchNowIndex && this.MapImage[2].visible) return void(a.y - this.TouchNowY < -15 && (this.MapImage[2].visible = !1, this.MapImage[1].visible = !0));
                    if (1 != this.TouchNowIndex && 2 != this.TouchNowIndex) return
                }
                if (21 == this.currentGate && (this.ShowFailImg = !1), 22 == this.currentGate && (3 == this.TouchNowIndex || 4 == this.TouchNowIndex || 5 == this.TouchNowIndex)) return void(this.ShowFailImg = !0);
                if (23 == this.currentGate && (0 == this.TouchNowIndex || 1 == this.TouchNowIndex || 5 == this.TouchNowIndex || 6 == this.TouchNowIndex)) return void(this.ShowFailImg = !0);
                if (24 == this.currentGate && (0 == this.TouchNowIndex || 1 == this.TouchNowIndex || 2 == this.TouchNowIndex || 3 == this.TouchNowIndex)) return void(this.ShowFailImg = !0);
                if (28 == this.currentGate && (4 == this.TouchNowIndex || 5 == this.TouchNowIndex || 6 == this.TouchNowIndex || 7 == this.TouchNowIndex || 7 == this.TouchNowIndex || 0 == this.TouchNowIndex)) return void(this.ShowFailImg = !0);
                if (30 == this.currentGate && 0 == this.TouchNowIndex) return void(this.ShowFailImg = !0);
                if (31 == this.currentGate && "mole" != this.MapImage[this.TouchNowIndex].name && "hammer" != this.MapImage[this.TouchNowIndex].name) return void(this.ShowFailImg = !0);
                if (32 == this.currentGate && 5 == this.TouchNowIndex) return n = !1, void(Math.abs(a.y - this.TouchNowY) > 40 && (this.MoveCanNot = 1, this.MapImage[3].visible = !0, this.MapImage[5].visible = !1, egret.setTimeout(function() {
                    t.MapImage[4].alpha = 0, t.MapImage[4].visible = !0, egret.Tween.get(t.MapImage[4]).to({
                        y: 580,
                        alpha: 1
                    }, 300), egret.setTimeout(function() {
                        0 == t.GameState && (t.GameState = 1, t.Bingo(a))
                    }, t, 500)
                }, this, 500)));
                if (32 == this.currentGate && 6 != this.TouchNowIndex && 7 != this.TouchNowIndex && 8 != this.TouchNowIndex && 9 != this.TouchNowIndex) return void(this.ShowFailImg = !1);
                if (32 != this.currentGate || 6 != this.TouchNowIndex && 7 != this.TouchNowIndex && 8 != this.TouchNowIndex && 9 != this.TouchNowIndex || (this.ShowFailImg = !0), 33 == this.currentGate && 13 != this.TouchNowIndex && 12 != this.TouchNowIndex && 10 != this.TouchNowIndex && 11 != this.TouchNowIndex) return void(this.ShowFailImg = !1);
                if (34 == this.currentGate && (5 == this.TouchNowIndex || 6 == this.TouchNowIndex || 8 == this.TouchNowIndex || 9 == this.TouchNowIndex || 11 == this.TouchNowIndex || 12 == this.TouchNowIndex || 14 == this.TouchNowIndex)) return void(this.ShowFailImg = !1);
                if (35 == this.currentGate) {
                    for (var h in this.touch2point) e.touchPointID == parseInt(h) && (this.touch2point[h].touchX = a.x, this.touch2point[h].touchY = a.y);
                    if (this.gate35num) {
                        var p = [];
                        for (var h in this.touch2point) p.push(h);
                        var g = Math.sqrt(Math.pow(this.touch2point[p[0]].touchX - this.touch2point[p[1]].touchX, 2) + Math.pow(this.touch2point[p[0]].touchY - this.touch2point[p[1]].touchY, 2)); - 1 == this.distance && (this.distance = g), this.MapImage[1].scaleX = this.gate35scale + (g - this.distance) / 100, this.MapImage[1].scaleY = this.gate35scale + (g - this.distance) / 100, this.MapImage[1].scaleX > 2.6 && this.Bingo({
                            x: 320,
                            y: 568
                        })
                    }
                    return
                }
                this.MapImage[this.TouchNowIndex].x = i, this.MapImage[this.TouchNowIndex].y = s
            }
        }
    }, t.prototype.TouchEnded = function(e) {
        var t = this;
        if (1 != this.MoveCanNot) {
            var a = new egret.Point(e.stageX / 2 - this.iPhoneW / 2, e.stageY / 2),
                i = new egret.Point(e.stageX - this.iPhoneW, e.stageY);
            if (1 != this.RankNow) {
                if (0 == this.choose) {
                    for (var s = 0; s < this.InterImage.length; s++) this.SetColor(this.InterImage[s], 1);
                    if (this.PointInRect(177, 808, 284, 120, i))(this.TouchFunBtn = "gochoose1") && (this.ReleaseGame(), this.choose = 1, this.InitGame())
                } else if (100 == this.choose) {
                    if (this.PointInRect(30 - this.iPhoneW, 10, 90, 80, i) && "100to0" == this.TouchFunBtn) this.ReleaseGame(), this.choose = 0, this.TouchFunBtn = "", this.InitGame();
                    else if (this.TouchNowY - a.y <= 10 && this.TouchNowY - a.y >= -10)
                        for (var o = new egret.Point(e.stageX - this.iPhoneW, e.stageY - this.iPhoneH + this.scrollview.scrollTop), r = 0; r < this.NumGateTT + 49; r++)
                            if (this.PointInRect(r % 2 * 272 + 5 + 22, 202 * Math.floor(r / 2) + 100, 250, 194, o) && this.TouchNowIndex == r) {
                                if (r + 1 > this.NumGateTT) return;
                                r < this.NumGateTT - 1 ? this.NowGate = r + 1 : this.NowGate = this.NumGateTT, this.currentGate = r + 1, this.ReleaseGame(), this.choose = 1, this.InitGame()
                            }
                } else if (1 == this.choose)
                    if (0 == this.GameState)
                        if ("1to100" == this.TouchFunBtn && this.PointInRect(20 - this.iPhoneW, 27, 70, 87, i)) this.ReleaseGame(), this.choose = 100, this.TouchFunBtn = "", this.InitGame();
                        else if ("rest" == this.TouchFunBtn && this.PointInRect(101 - this.iPhoneW, 50, 60, 60, i)) this.ReleaseGame(), this.choose = 1, this.TouchFunBtn = "", this.InitGame();
                else if ("tip" == this.TouchFunBtn && this.PointInRect(256 - this.iPhoneW, 36, 202, 72, i)) this.NumGoldTT -= 1, this.NumGoldTT < 0 ? (this.NumGoldTT = 0, this.ShowTipView("Your Key is not enough")) : this.ShowTip(1, this.GameData.GetGateInfo(this.currentGate).tip);
                else if ("skip" == this.TouchFunBtn && this.PointInRect(170 - this.iPhoneW, 40, 202, 72, i)) this.NumGoldTT >= 2 ? this.ShowTip(3) : this.ShowTip(3);
                else if (1 == this.currentGate || 3 == this.currentGate || 2 == this.currentGate) {
                    for (var h = 0; h < this.MapImage.length; h++)
                        if (this.SetColor(this.MapImage[h], 1), this.PointInImage(this.MapImage[h], i.x, i.y)) {
                            if (this.TouchNowIndex == h && h == this.Okinfo.correctAnswer) {
                                this.Bingo(i);
                                break
                            }
                            if (2 == this.currentGate && (0 == this.TouchNowIndex || 3 == this.TouchNowIndex || 6 == this.TouchNowIndex)) return void this.IncorrectAnimate(i);
                            this.IncorrectAnimate(i)
                        }
                } else if (4 == this.currentGate) {
                    for (var p = this.MapImage.length - 1; p >= 0; p--)
                        if (this.PointInImage(this.MapImage[p], i.x, i.y)) {
                            if (this.TouchNowIndex == p && p == this.Okinfo.correctAnswer) {
                                this.Bingo(i);
                                break
                            }
                            this.ShowFailImg && this.IncorrectAnimate(i)
                        }
                } else if (5 == this.currentGate) {
                    var g = new egret.Point(e.localX, e.localY),
                        l = this.MapImage[0].width,
                        c = this.MapImage[0].x,
                        m = this.MapImage[0].y,
                        u = this.MapImage[0].height;
                    0 - this.iPhoneW;
                    c - l / 2 < 0 - this.iPhoneW - 20 ? this.Bingo(g) : m + u / 2 > this.StageHeight + 20 ? this.Bingo(g) : c + l / 2 > 640 + this.iPhoneW + 20 && this.Bingo(g)
                } else if (6 == this.currentGate || 8 == this.currentGate || 10 == this.currentGate) {
                    for (var d = 0; d < this.MapImage.length; d++) this.SetColor(this.MapImage[d], 1);
                    var I = parseInt(this.Focustext.text);
                    1 == this.TouchNowIndex ? (I--, I = 0 > I ? 0 : I, this.removeChild(this.Focustext), this.Focustext = this.Addtext(I + "", {
                        x: 322,
                        y: 816,
                        size: 90
                    }, this), this.Focustext.bold = !0) : 2 == this.TouchNowIndex ? (I++, I = I > 99 ? 99 : I, this.removeChild(this.Focustext), this.Focustext = this.Addtext(I + "", {
                        x: 322,
                        y: 816,
                        size: 90
                    }, this), this.Focustext.bold = !0) : 3 == this.TouchNowIndex ? (this.removeChild(this.Focustext), this.Focustext = this.Addtext("0", {
                        x: 322,
                        y: 816,
                        size: 90
                    }, this), this.Focustext.bold = !0) : 4 == this.TouchNowIndex && (I == this.Okinfo.correctAnswer ? this.Bingo(i) : this.IncorrectAnimate(i))
                } else if (7 == this.currentGate) {
                    if (-1 == this.TouchNowIndex) return;
                    for (var f = 0; f < this.MapImage.length; f++)
                        if (this.PointInImage(this.MapImage[f], this.MapImage[this.TouchNowIndex].x, this.MapImage[this.TouchNowIndex].y)) {
                            if (f == this.TouchNowIndex) {
                                1 == this.MapImage.length && this.Bingo(i);
                                continue
                            }
                            if (this.MapImage[this.TouchNowIndex].width * this.MapImage[this.TouchNowIndex].scaleX < this.MapImage[f].width * this.MapImage[f].scaleX) {
                                var _ = 1.1 * this.MapImage[f].width,
                                    v = 1.1 * this.MapImage[f].height;
                                return egret.Tween.get(this.MapImage[f]).to({
                                    width: _,
                                    height: v
                                }, 244), this.removeChild(this.MapImage[this.TouchNowIndex]), void this.MapImage.splice(this.TouchNowIndex, 1)
                            }
                            var _ = 1.1 * this.MapImage[this.TouchNowIndex].width,
                                v = 1.1 * this.MapImage[this.TouchNowIndex].height;
                            return egret.Tween.get(this.MapImage[this.TouchNowIndex]).to({
                                width: _,
                                height: v
                            }, 244), this.removeChild(this.MapImage[f]), void this.MapImage.splice(f, 1)
                        }
                } else if (9 == this.currentGate) {
                    var w = new egret.Point(e.localX, e.localY),
                        l = this.MapImage[3].width,
                        c = this.MapImage[3].x,
                        m = this.MapImage[3].y,
                        u = this.MapImage[3].height;
                    0 - this.iPhoneW;
                    c - l / 2 < 0 - this.iPhoneW - 90 ? (this.MapImage[3].alpha = 1, egret.setTimeout(function() {
                        0 == t.GameState && (t.GameState = 1, t.Bingo(w))
                    }, this, 600)) : m + u / 2 > this.StageHeight + 90 ? (this.MapImage[3].alpha = 1, egret.setTimeout(function() {
                        0 == t.GameState && (t.GameState = 1, t.Bingo(w))
                    }, this, 600)) : c + l / 2 > 640 + this.iPhoneW + 90 && (this.MapImage[3].alpha = 1, egret.setTimeout(function() {
                        0 == t.GameState && (t.GameState = 1, t.Bingo(w))
                    }, this, 600))
                } else if (10 == this.currentGate);
                else if (11 == this.currentGate) this.PointInRect(474, 482, 68, 62, i) ? 100 == this.TouchNowIndex && this.Bingo(i) : this.IncorrectAnimate({
                    x: 320,
                    y: 568
                });
                else if (12 == this.currentGate) {
                    var y = [];
                    for (var M in this.touch2point) y.push(this.touch2point[M]);
                    if (1 == y.length)
                        for (var M in this.touch2point) {
                            var R = this.touch2point[M];
                            0 == R ? (this.MapImage[4].alpha = 1, this.MapImage[R + 3 + 4].alpha = 1, this.MapImage[13].visible = !0) : 1 == R ? (this.MapImage[3].alpha = 1, this.MapImage[R + 3 + 4].alpha = 1, this.MapImage[12].visible = !0) : 2 == R ? (this.MapImage[4].alpha = 1, this.MapImage[R + 3 + 4].alpha = 1, this.MapImage[13].visible = !0) : 3 == R && (this.MapImage[4].alpha = 1, this.MapImage[R + 3 + 4].alpha = 1, this.MapImage[13].visible = !0), delete this.touch2point[M], this.MapImage[12] = new egret.Bitmap(RES.getRes("lv12_3_png")), this.MapImage[13] = new egret.Bitmap(RES.getRes("lv12_4_png")), this.MapImage[14] = new egret.Bitmap(RES.getRes("lv12_5_png")), this.MapImage[15] = new egret.Bitmap(RES.getRes("lv12_6_png")), this.IncorrectAnimate({
                                x: this.MapImage[2].x,
                                y: this.MapImage[2].y
                            }), this.touch2point = [], egret.setTimeout(function() {
                                t.ReleaseGame(), t.InitGame()
                            }, this, 600)
                        } else if (2 == y.length) {
                            0 == y[0] ? (y[0] = 7, y[1] = 4, this.MapImage[13].visible = !0) : 1 == y[0] ? (y[0] = 8, y[1] = 3, this.MapImage[12].visible = !0) : 2 == y[0] ? (y[0] = 9, y[1] = 3, this.MapImage[12].visible = !0) : 3 == y[0] && (y[0] = 10, y[1] = 3, this.MapImage[12].visible = !0);
                            for (var S = 0; S < y.length; S++) {
                                var x = y[S];
                                this.MapImage[x].alpha = 1
                            }
                            this.IncorrectAnimate({
                                x: this.MapImage[2].x,
                                y: this.MapImage[2].y
                            }), this.touch2point = {}, egret.setTimeout(function() {
                                t.ReleaseGame(), t.InitGame()
                            }, this, 600)
                        }
                } else if (13 == this.currentGate) {
                    for (var b = this.MapImage.length - 1; b >= 0; b--) this.PointInImage(this.MapImage[b], i.x, i.y) && (3 == this.TouchNowIndex && 1 == this.MapImage[3].alpha ? this.Bingo(i) : this.ShowFailImg && this.IncorrectAnimate(i));
                    this.gate13num = 1
                } else if (14 == this.currentGate) this.PointInImage(this.LevelTittle, i.x, i.y) ? this.TouchNowIndex == this.LevelTittle.text && this.Bingo(i) : this.IncorrectAnimate(i), this.TouchNowIndex = -1;
                else if (15 == this.currentGate) {
                    for (var T = 0; T < this.MapImage.length; T++) this.SetColor(this.MapImage[T], 1);
                    for (var B = this.MapImage.length - 1; B >= 0; B--) {
                        var I = parseInt(this.Focustext.text);
                        if (2 == this.TouchNowIndex) return I--, I = 0 > I ? 0 : I, this.removeChild(this.Focustext), this.Focustext = this.Addtext(I + "", {
                            x: 322,
                            y: 816,
                            size: 90
                        }, this), void(this.Focustext.bold = !0);
                        if (3 == this.TouchNowIndex) return I++, I = I > 99 ? 99 : I, this.removeChild(this.Focustext), this.Focustext = this.Addtext(I + "", {
                            x: 322,
                            y: 816,
                            size: 90
                        }, this), void(this.Focustext.bold = !0);
                        if (4 == this.TouchNowIndex) return this.removeChild(this.Focustext), this.Focustext = this.Addtext("0", {
                            x: 322,
                            y: 816,
                            size: 90
                        }, this), void(this.Focustext.bold = !0);
                        if (5 == this.TouchNowIndex) return I == this.Okinfo.correctAnswer ? void this.Bingo(i) : void this.IncorrectAnimate(i)
                    }
                } else if (16 == this.currentGate) {
                    var E = {
                        x: 320,
                        y: 640
                    };
                    if (1 != this.TouchNowIndex || this.ShowFailImg)
                        for (var C = 2; 4 > C; C++) this.TouchNowIndex != C || this.ShowFailImg || (this.IncorrectAnimate(E), egret.Tween.get(this.MapImage[this.TouchNowIndex]).to({
                            x: this.Okinfo.initxyarr[this.TouchNowIndex][0],
                            y: this.Okinfo.initxyarr[this.TouchNowIndex][1]
                        }, 400));
                    else this.PointInRect(142, 376, 395, 125, i) ? (egret.Tween.get(this.MapImage[1]).to({
                        x: this.Okinfo.correctAnswer[0],
                        y: this.Okinfo.correctAnswer[1]
                    }, 400), egret.setTimeout(function() {
                        0 == t.GameState && (t.GameState = 1, t.Bingo(i))
                    }, this, 600)) : (egret.Tween.get(this.MapImage[1]).to({
                        x: this.Okinfo.initxyarr[1][0],
                        y: this.Okinfo.initxyarr[1][1]
                    }, 400), this.IncorrectAnimate(E))
                } else if (17 == this.currentGate) {
                    for (var N = this.MapImage.length - 1; N >= 0; N--)
                        if (this.PointInImage(this.MapImage[N], i.x, i.y)) {
                            if (N == this.TouchNowIndex && 1 == N && this.PointInRect(433, 616, 178, 44, i)) {
                                egret.Tween.get(this.MapImage[1]).to({
                                    x: 522,
                                    y: 638
                                }, 200), this.Bingo(i);
                                break
                            }
                            this.ShowFailImg && this.IncorrectAnimate({
                                x: this.MapImage[N].x,
                                y: this.MapImage[N].y
                            }), this.TouchNowIndex = -1
                        }
                } else if (18 == this.currentGate) {
                    for (var k = this.MapImage.length - 1; k >= 0; k--)
                        if (this.PointInImage(this.MapImage[k], i.x, i.y) && (this.TouchNowIndex == k && 0 == this.TouchNowIndex || 1 == this.TouchNowIndex && this.TouchNowIndex == k)) {
                            var G = Math.sqrt(Math.pow(this.MapImage[0].x - this.MapImage[1].x, 2) + Math.pow(this.MapImage[0].y - this.MapImage[1].y, 2));
                            if (100 > G) {
                                console.log(k);
                                var P = 0 == k ? 1 : 0;
                                egret.Tween.get(this.MapImage[P]).to({
                                    x: this.MapImage[k].x,
                                    y: this.MapImage[k].y
                                }, 200), this.MoveCanNot = 1, egret.setTimeout(function() {
                                    0 == t.GameState && (t.GameState = 1, t.Bingo(i))
                                }, this, 300);
                                break
                            }
                        }
                } else if (19 == this.currentGate) {
                    this.SetColor(this.MapImage[7], 1), this.gate19touchid == e.touchPointID && (this.monkeyrabbit && (this.monkeygo = !0), this.gate19touchid = -1);
                    for (var O = this.MapImage.length - 1; O >= 0; O--) this.PointInImage(this.MapImage[O], i.x, i.y)
                } else if (20 == this.currentGate) 1 == this.TouchNowIndex && (this.ImageInImage(this.MapImage[1], this.MapImage[5]) ? (this.MapImage[1].visible = !1, this.MapImage[5].visible = !1, this.MapImage[4].visible = !0, this.MoveCanNot = 1, this.DontMove = 1, egret.setTimeout(function() {
                    t.MoveCanNot = 0, t.MapImage[4].visible = !1, t.MapImage[3].visible = !0, t.MapImage[5].visible = !0, t.MapImage[6].visible = !0
                }, this, 1e3)) : egret.Tween.get(this.MapImage[1]).to({
                    x: 522,
                    y: 825
                }, 300)), 2 == this.TouchNowIndex && egret.Tween.get(this.MapImage[2]).to({
                    x: 522,
                    y: 825
                }, 300), !this.MapImage[3].visible || 3 != this.TouchNowIndex && 6 != this.TouchNowIndex && 5 != this.TouchNowIndex || this.Bingo(i);
                else if (21 == this.currentGate) {
                    for (var F = 0; F < this.MapImage.length; F++) this.SetColor(this.MapImage[F], 1);
                    0 == this.TouchNowIndex ? this.Bingo(i) : this.ShowFailImg && this.IncorrectAnimate(i)
                } else if (22 == this.currentGate) {
                    for (var A = 0; A < this.MapImage.length; A++) this.SetColor(this.MapImage[A], 1);
                    for (var D = this.MapImage.length - 1; D >= 0; D--)
                        if (this.PointInImage(this.MapImage[D], i.x, i.y) && this.TouchNowIndex == D) {
                            if (4 == this.TouchNowIndex) return console.log(this.MapImage[4].alpha), this.MapImage[4].alpha -= .35, console.log(this.MapImage[4].alpha), this.MapImage[3].alpha -= .35, void(this.MapImage[4].alpha < 0 && this.Bingo({
                                x: this.MapImage[D].x,
                                y: this.MapImage[D].y
                            }));
                            if (5 == this.TouchNowIndex || 3 == this.TouchNowIndex) break;
                            0 == this.TouchNowIndex || 1 == this.TouchNowIndex || 2 == this.TouchNowIndex ? (egret.Tween.get(this.MapImage[this.TouchNowIndex]).to({
                                x: this.Okinfo.initxyarr[this.TouchNowIndex][0],
                                y: this.Okinfo.initxyarr[this.TouchNowIndex][1]
                            }, 300), this.IncorrectAnimate(i)) : this.ShowFailImg && this.IncorrectAnimate({
                                x: this.MapImage[D].x,
                                y: this.MapImage[D].y
                            })
                        }
                } else if (23 == this.currentGate) {
                    for (var L = 0; L < this.MapImage.length; L++) this.SetColor(this.MapImage[L], 1);
                    for (var W = this.MapImage.length - 1; W >= 0; W--)
                        if (this.PointInImage(this.MapImage[W], i.x, i.y) && this.TouchNowIndex == W) {
                            var I = parseInt(this.Focustext.text);
                            5 == this.TouchNowIndex ? (I--, I = 0 > I ? 0 : I, this.removeChild(this.Focustext), this.Focustext = this.Addtext(I + "", {
                                x: 322,
                                y: 816,
                                size: 90
                            }, this), this.Focustext.bold = !0) : 6 == this.TouchNowIndex ? (I++, I = I > 99 ? 99 : I, this.removeChild(this.Focustext), this.Focustext = this.Addtext(I + "", {
                                x: 322,
                                y: 816,
                                size: 90
                            }, this), this.Focustext.bold = !0) : 7 == this.TouchNowIndex ? (this.removeChild(this.Focustext), this.Focustext = this.Addtext("0", {
                                x: 322,
                                y: 816,
                                size: 90
                            }, this), this.Focustext.bold = !0) : 8 == this.TouchNowIndex && (I == this.Okinfo.correctAnswer ? this.Bingo(i) : this.IncorrectAnimate(i)), 1 == this.TouchNowIndex ? this.MapImage[2].visible || this.MapImage[3].visible || this.MapImage[4].visible || (this.gate23count++, this.gate23count > 1 && (this.MapImage[0].visible = !1, this.MapImage[1].visible = !0)) : !this.PointInRect(282, 426, 104, 70, i) || 2 != this.TouchNowIndex && 3 != this.TouchNowIndex && 4 != this.TouchNowIndex || (this.MapImage[this.TouchNowIndex].visible = !1)
                        }
                } else if (24 == this.currentGate) {
                    for (var X = this.MapImage.length - 1; X >= 0; X--)
                        if (this.PointInImage(this.MapImage[X], i.x, i.y)) {
                            if (0 == this.TouchNowIndex && (console.log(this.MapImage[4].y - this.MapImage[0].y), this.MapImage[4].y - this.MapImage[0].y > 90 && Math.abs(this.MapImage[4].x - this.MapImage[0].x) < 110)) return void this.Bingo(i);
                            this.ShowFailImg && this.IncorrectAnimate(i)
                        }
                } else if (25 == this.currentGate) {
                    for (var Y = this.MapImage, H = this.MapImage.length - 1; H >= 0; H--)
                        if (this.PointInImage(this.MapImage[H], i.x, i.y) && this.TouchNowIndex == H) {
                            var U = this.TouchNowIndex;
                            if ((5 == this.TouchNowIndex || 6 == this.TouchNowIndex || 3 == this.TouchNowIndex || 4 == this.TouchNowIndex) && Math.sqrt(Math.pow(Y[3].x - Y[5].x, 2) + Math.pow(Y[3].y - Y[5].y, 2)) < 30 && Math.sqrt(Math.pow(Y[3].x - Y[6].x, 2) + Math.pow(Y[3].y - Y[6].y, 2)) > 140 && Math.sqrt(Math.pow(Y[3].x - Y[4].x, 2) + Math.pow(Y[3].y - Y[4].y, 2)) > 140) return this.MoveCanNot = 1, egret.Tween.get(this.MapImage[5]).to({
                                x: this.MapImage[3].x,
                                y: this.MapImage[3].y
                            }, 500), void egret.setTimeout(function() {
                                t.Bingo(i)
                            }, this, 800);
                            this.ShowFailImg && this.IncorrectAnimate(i)
                        }
                } else if (26 == this.currentGate) {
                    var Y = this.MapImage;
                    delete this.touch2point[e.touchPointID + ""]
                } else if (27 == this.currentGate) {
                    if (this.PointInRect(396, 268, 158, 108, i) && "clound" == this.TouchFunBtn) {
                        this.TouchFunBtn = "clound", this.MapImage[9].visible = !0, this.MapImage[10].visible = !1;
                        for (var z = 30, V = 0; 30 > V; V++) {
                            var $ = Math.floor(500 * Math.random()) + 80,
                                j = Math.floor(390 * Math.random()) + 300;
                            this.MapImage.push(new egret.Bitmap(RES.getRes("lv27_13_png"))), this.addChild(this.MapImage[this.MapImage.length - 1]), this.MapImage[this.MapImage.length - 1].pos($, j, 8, 20), this.MapImage[this.MapImage.length - 1].alpha = 0, egret.Tween.get(this.MapImage[this.MapImage.length - 1]).wait(z += 20).to({
                                alpha: 1
                            }, 0)
                        }
                        egret.setTimeout(function() {
                            t.MapImage[12].visible = !0, egret.Tween.get(t.MapImage[8]).to({
                                x: 170
                            }, 1e3)
                        }, this, 900)
                    } else this.PointInRect(410, 564, 98, 118, i) && "owl" == this.TouchFunBtn ? this.MapImage[15].visible = !0 : this.PointInRect(212, 552, 64, 56, i) && "bird" == this.TouchFunBtn ? this.MapImage[16].visible = !0 : this.PointInRect(130, 626, 78, 72, i) && "butterfly" == this.TouchFunBtn ? this.MapImage[21].visible = !0 : this.PointInRect(254, 782, 50, 66, i) && "mole" == this.TouchFunBtn ? this.MapImage[14].visible = !0 : this.PointInRect(310, 812, 52, 50, i) && "locust" == this.TouchFunBtn ? this.MapImage[17].visible = !0 : this.PointInRect(294, 882, 52, 66, i) && "ant" == this.TouchFunBtn ? this.MapImage[18].visible = !0 : this.PointInRect(118, 848, 68, 78, i) && "worm" == this.TouchFunBtn ? this.MapImage[12].visible && (this.MapImage[19].visible = !0) : this.PointInRect(462, 698, 118, 276, i) && "female" == this.TouchFunBtn && (this.MapImage[20].visible = !0);
                    for (var q = 14; 22 > q; q++)
                        if (0 == this.MapImage[q].visible) return;
                    this.Bingo({
                        x: 320,
                        y: 560
                    })
                } else if (28 == this.currentGate) {
                    for (var Y = this.MapImage, U = this.TouchNowIndex, J = this.MapImage.length - 1; J >= 0; J--)
                        if (this.PointInImage(this.MapImage[J], i.x, i.y) && U == J)
                            if (8 == U) this.MoveCanNot = 1, egret.Tween.get(this.MapImage[8]).to({
                                x: 200
                            }, 1300), egret.setTimeout(function() {
                                t.IncorrectAnimate({
                                    x: 320,
                                    y: 568
                                }), egret.setTimeout(function() {
                                    t.ReleaseGame(), t.choose = 1, t.InitGame()
                                }, t, 700)
                            }, this, 1300);
                            else if (1 == U) {
                        var c = Math.abs(this.MapImage[1].x - this.MapImage[0].x),
                            m = Math.abs(this.MapImage[1].y - this.MapImage[0].y),
                            K = Math.sqrt(Math.pow(c, 2) + Math.pow(m, 2));
                        K > 90 && (this.MoveCanNot = 1, egret.setTimeout(function() {
                            t.MapImage[6].visible = !1, t.MapImage[7].visible = !0, egret.setTimeout(function() {
                                t.MapImage[7].visible = !1, egret.Tween.get(t.MapImage[8]).to({
                                    x: 550
                                }, 4e3), egret.setTimeout(function() {
                                    t.Bingo({
                                        x: 320,
                                        y: 568
                                    })
                                }, t, 3800)
                            }, t, 500)
                        }, this, 500))
                    }
                } else if (29 == this.currentGate) {
                    this.SetColor(this.MapImage[8], 1);
                    for (var Y = this.MapImage, U = this.TouchNowIndex, Q = this.MapImage.length - 1; Q >= 0; Q--)
                        if (this.PointInImage(this.MapImage[Q], i.x, i.y) && U == Q)
                            if (0 == U || 1 == U || 2 == U || 3 == U || 4 == U) {
                                if (this.gate29num.length < 3) {
                                    var Z = void 0;
                                    switch (U) {
                                        case 0:
                                            Z = 3;
                                            break;
                                        case 1:
                                            Z = 5;
                                            break;
                                        case 2:
                                            Z = 6;
                                            break;
                                        case 3:
                                            Z = 9;
                                            break;
                                        case 4:
                                            Z = 7
                                    }
                                    this.gate29num.push(Z);
                                    var x = this.gate29num.length;
                                    1 == x && (this.MapImage[4 + x].x = this.MapImage[U].x - 50, this.MapImage[4 + x].y = this.MapImage[U].y - 50, this.MapImage[4 + x].visible = !0), 2 == x && (this.MapImage[4 + x].x = this.MapImage[U].x + 50, this.MapImage[4 + x].y = this.MapImage[U].y - 50, this.MapImage[4 + x].visible = !0), 3 == x && (this.MapImage[4 + x].x = this.MapImage[U].x - 50, this.MapImage[4 + x].y = this.MapImage[U].y, this.MapImage[4 + x].visible = !0)
                                }
                            } else if (8 == U) {
                        for (var Z = 0, et = 0; et < this.gate29num.length; et++) Z += this.gate29num[et];
                        12 == Z ? this.Bingo(i) : (this.IncorrectAnimate(i), egret.setTimeout(function() {
                            t.ReleaseGame(), t.choose = 1, t.InitGame()
                        }, this, 700))
                    }
                } else if (30 == this.currentGate)
                    for (var Y = this.MapImage, U = this.TouchNowIndex, tt = function(e) {
                            if (at.PointInImage(at.MapImage[e], i.x, i.y) && U == e) {
                                if (0 == U) return {
                                    value: void 0
                                };
                                at.ImageInImage(at.MapImage[U], at.MapImage[0]) && (egret.Tween.get(at.MapImage[U]).to({
                                    rotation: 720,
                                    scaleX: 0,
                                    scaleY: 0
                                }, 666), egret.setTimeout(function() {
                                    t.MapImage[e].visible = !1;
                                    for (var a = 1; 6 > a; a++)
                                        if (t.MapImage[a].visible) return;
                                    0 == t.GameState && (t.GameState = 1, t.Bingo({
                                        x: 320,
                                        y: 568
                                    }))
                                }, at, 670))
                            }
                        }, at = this, it = this.MapImage.length - 1; it >= 0; it--) {
                        var n = tt(it);
                        if ("object" == typeof n) return n.value
                    } else if (31 == this.currentGate) {
                        for (var Y = this.MapImage, U = this.TouchNowIndex, nt = this.MapImage.length - 1; nt >= 0; nt--)
                            if (this.PointInImage(this.MapImage[nt], i.x, i.y) && U == nt && "mole" == this.MapImage[nt].name)
                                if (this.ImageInImage(this.MapImage[8], this.MapImage[9])) this.MoveCanNot = 1, egret.setTimeout(function() {
                                    t.MapImage[8].alpha = 0, t.MapImage[10].x = t.MapImage[8].x, t.MapImage[10].y = t.MapImage[8].y, t.MapImage[10].visible = !0, egret.setTimeout(function() {
                                        0 == t.GameState && (t.GameState = 1, t.Bingo({
                                            x: 320,
                                            y: 568
                                        }))
                                    }, t, 500)
                                }, this, 500);
                                else {
                                    var bk = Math.floor(4 * Math.random()) + 4;
                                    this.MapImage[8].pos(this.MapImage[bk].x, this.MapImage[bk].y, 102, 108), this.MapImage[8].name = "mole", this.setChildIndex(this.MapImage[8], this.getChildIndex(this.getChildByName("last")) + 1), egret.Tween.get(this.MapImage[8]).to({
                                        y: this.MapImage[bk].y - 90
                                    }, 400)
                                }
                    } else if (32 == this.currentGate)
                    for (var Y = this.MapImage, U = this.TouchNowIndex, rt = this.MapImage.length - 1; rt >= 0; rt--) this.PointInImage(this.MapImage[rt], i.x, i.y) && (U = rt) && (6 == rt || 7 == rt || 8 == rt || 9 == rt) && this.ShowFailImg && (egret.Tween.get(this.MapImage[rt]).to({
                        x: this.Okinfo.initxyarr[rt - 6][0],
                        y: this.Okinfo.initxyarr[rt - 6][1]
                    }, 300), this.IncorrectAnimate(i));
                else if (33 == this.currentGate) {
                    for (var bl = 0; bl < this.MapImage.length; bl++) this.SetColor(this.MapImage[bl], 1);
                    var I = parseInt(this.Focustext.text);
                    if (0 == this.TouchNowIndex) I--, I = 0 > I ? 0 : I, this.removeChild(this.Focustext), this.Focustext = this.Addtext(I + "", {
                        x: 322,
                        y: 816,
                        size: 90
                    }, this), this.Focustext.bold = !0;
                    else if (1 == this.TouchNowIndex) I++, I = I > 99 ? 99 : I, this.removeChild(this.Focustext), this.Focustext = this.Addtext(I + "", {
                        x: 322,
                        y: 816,
                        size: 90
                    }, this), this.Focustext.bold = !0;
                    else if (2 == this.TouchNowIndex) this.removeChild(this.Focustext), this.Focustext = this.Addtext("0", {
                        x: 322,
                        y: 816,
                        size: 90
                    }, this), this.Focustext.bold = !0;
                    else if (3 == this.TouchNowIndex)
                        if (I == this.Okinfo.correctAnswer) {
                            this.MoveCanNot = 1;
                            var bm = 0;
                            egret.setTimeout(function() {
                                t.Bingo({
                                    x: 320,
                                    y: 568
                                })
                            }, this, 2e3);
                            for (var bn = 0; 10 > bn; bn++) ! function(e, t, a) {
                                egret.setTimeout(function() {
                                    console.log(t);
                                    var i = new egret.BitmapText;
                                    a.addChild(i), i.font = RES.getRes("numimage2_fnt"), i.text = e + 1 + "", i.scaleX = .3, i.scaleY = .3, i.x = a.Okinfo.okarr[e][0], i.y = a.Okinfo.okarr[e][1] - 80, i.anchorOffsetX = i.width / 2, i.anchorOffsetY = i.height / 2
                                }, a, t + 300)
                            }(bn, bm, this), egret.Tween.get(this.MapImage[bn + 4]).wait(bm).to({
                                x: this.Okinfo.okarr[bn][0],
                                y: this.Okinfo.okarr[bn][1]
                            }, 300), bm += 200
                        } else this.IncorrectAnimate(i)
                } else if (34 == this.currentGate) {
                    for (var bo = this.MapImage.length - 1; bo >= 0; bo--)
                        if (this.PointInImage(this.MapImage[bo], i.x, i.y) && this.TouchNowIndex == bo && (1 == bo || 0 == bo || 3 == bo || 7 == bo || 10 == bo || 13 == bo)) {
                            if (1 == bo && this.PointInRect(48, 728, 152, 182, i)) return this.MoveCanNot = 1, egret.Tween.get(this.MapImage[bo]).to({
                                x: 112,
                                y: 726
                            }, 300), void egret.setTimeout(function() {
                                t.MapImage[2].visible = !0, egret.setTimeout(function() {
                                    t.MapImage[4].visible = !0, t.MapImage[14].visible = !1, egret.setTimeout(function() {
                                        t.Bingo({
                                            x: 320,
                                            y: 568
                                        })
                                    }, t, 500)
                                }, t, 500)
                            }, this, 300);
                            this.IncorrectAnimate(i), egret.Tween.get(this.MapImage[bo]).to({
                                x: this.Okinfo.initxyarr[bo][0],
                                y: this.Okinfo.initxyarr[bo][1]
                            }, 300)
                        }
                } else 35 == this.currentGate && (this.gate35num && (this.distance = -1, this.gate35scale = this.MapImage[1].scaleX, this.gate35num = !1), delete this.touch2point[e.touchPointID + ""]);
                else if (1 == this.GameState) {
                    for (var bp = 0; bp < this.OverImage.length; bp++) this.SetColor(this.OverImage[bp], 1);
                    if (this.PointInRect(87, 642, 466, 122, i) && "overgamenext" == this.TouchFunBtn) this.ReleaseGame(), this.choose = 1, this.InitGame()
                } else if (2 == this.GameState) {
                    for (var bq = 0; bq < this.OverImage.length; bq++) this.SetColor(this.OverImage[bq], 1);
                    this.PointInRect(495, 280, 90, 90, i) && "closetip" == this.TouchFunBtn ? (this.ReleaseGame(), this.GameState = 1, this.InitGame()) : this.PointInRect(208, 570, 234, 98, i) && "skipwatchTv" == this.TouchFunBtn && 1 == this.OverImage[4].visible && this.ShowADNow(0)
                } else if (3 == this.GameState) {
                    for (var br = 0; br < this.OverImage.length; br++) this.SetColor(this.OverImage[br], 1);
                    if (this.PointInRect(495, 280, 90, 90, i) && "closetip" == this.TouchFunBtn) {
                        (this.ReleaseGame(), this.GameState = 1, this.InitGame())
                    } else {
                        if (this.PointInRect(206, 756, 236, 116, i) && "skipwatchtv" == this.TouchFunBtn && 1 == this.OverImage[6].visible) this.ShowADNow(0);
                        else {
                            if (this.PointInRect(76, 762, 498, 110, i) && "skipconfirm" == this.TouchFunBtn && 1 == this.OverImage[7].visible) {
                                if (this.NumGoldTT >= 2) {
                                    this.MoveCanNot = 1, this.NumGoldTT -= 2, this.NowGate++, this.NowGate > this.NumGateTT && (this.NumGateTT = this.NowGate, this.SaveGameScore()), this.ReleaseGame(), this.choose = 1, this.InitGame()
                                } else {
                                    this.ShowTipView("Your Key is not enough")
                                }
                            }
                        }
                    }
                }
            } else if (this.SetColor(this.RankImage[2], 1), this.SetColor(this.RankImage[1], 1), this.PointInRect(40, 473, 45, 49, a)) {
                if (0 == this.choose) {
                    for (var bs = 0; 7 > bs; bs++) this.InterImage[bs + 1].visible = !0;
                    this.ScoreLabel.visible = !0
                } else {
                    for (var bt = 0; 8 > bt; bt++) this.OverImage[bt + 1].visible = !0;
                    this.ScoreLabel.visible = !0, this.UILabel[0].visible = !0
                }
                this.EndRank()
            } else this.PointInRect(39, 47, 116, 49, a) && 1 == this.RankNum || this.PointInRect(156, 48, 123, 49, a) && 0 == this.RankNum || this.PointInRect(93, 251, 192, 185, a) && 1 == this.RankNum && 1 == this.RankImage[5].visible && (this.SetColor(this.RankImage[5], 1), this.SetColor(this.RankImage[6], 1), this.Connect.ShareGame())
        }
    }, t
}(egret.Sprite);
__reflect(GameScene.prototype, "GameScene");
var BasePlatform = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.challenge_info = null, t.isNewPlayer = !1, t.playerType = "old", t.appId = "425952698331115", t.appName = "Brain Out", t.switchGameInfo = null, t.invite_skin_data = null, t.entry = "normal", t.$remoteData = null, t
    }
    return __extends(t, e), t.prototype.needAccount = function() {
        return !1
    }, t.prototype.initSDK = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, this.initRemoteData()];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, t.prototype.setLoadingProgress = function(e) {}, t.prototype.startGame = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.getToken = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, null]
            })
        })
    }, Object.defineProperty(t.prototype, "userInfo", {
        get: function() {
            return {
                name: "terran",
                id: "122",
                photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1919308798192205&height=256&width=256&ext=1556338068&hash=AeT6AJodDv0PCryf",
                friends: [],
                lang: "en_US"
            }
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.getContextId = function() {
        return ""
    }, t.prototype.getPlayerId = function() {
        return "terran"
    }, t.prototype.hasIAD = function() {
        return !1
    }, t.prototype.showIAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.hasRAD = function() {
        return !1
    }, t.prototype.showRAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.suportAD = function() {
        return !0
    }, t.prototype.getFriends = function() {
        return []
    }, t.prototype.invite = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.share = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !0]
            })
        })
    }, t.prototype.choose = function(e, t, a) {
        return void 0 === t && (t = !1), void 0 === a && (a = "default"), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !1]
            })
        })
    }, t.prototype.switchCtx = function(e, t) {
        return void 0 === t && (t = "default"), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !0]
            })
        })
    }, t.prototype.createCtx = function(e, t) {
        return void 0 === t && (t = "default"), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !0]
            })
        })
    }, t.prototype.getContextPlayers = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, []]
            })
        })
    }, t.prototype.switchGame = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.updateStatues = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, t.prototype.listResponse = function() {
        return []
    }, t.prototype.doResponse = function(e, t) {}, t.prototype.log = function(e, t, a) {
        void 0 === a && (a = 1), console.log("name", e, "data", JSON.stringify(t))
    }, t.prototype.getPlatFormiOS = function() {
        return !1
    }, t.prototype.getWorldEntries = function() {
        return []
    }, t.prototype.getWorldEntriesAsync = function() {
        return Promise.resolve([])
    }, t.prototype.getWorldFriendEntries = function() {
        return []
    }, t.prototype.getWorldFriendEntriesAsync = function() {
        return Promise.resolve([])
    }, t.prototype.getWorldSelfEntry = function() {
        return null
    }, t.prototype.getHighScore = function() {
        return +egret.localStorage.getItem("BrainTeaser_hight_score1") || 0
    }, t.prototype.setHighScore = function(e, t) {
        egret.localStorage.setItem("BrainTeaser_hight_score1", e + "")
    }, t.prototype.initRemoteData = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, a, i, s;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, this.getData(["user_info1"])];
                    case 1:
                        e = n.sent(), t = {};
                        try {
                            t = JSON.parse(e.user_info1)
                        } catch (o) {}
                        a = null;
                        try {
                            a = JSON.parse(localStorage.getItem("local_user_info_" + this.getPlayerId()))
                        } catch (o) {}
                        return i = a && +a.w__tsp || -1, s = t && +t.w__tsp || 0, i > s && (t = a, console.log("use local user_info", i, s)), this.$remoteData = t || {}, [2]
                }
            })
        })
    }, t.prototype.syncRemoteData = function(e) {
        return void 0 === e && (e = !1), __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return this.$remoteData.w__tsp = Date.now(), t = JSON.stringify(this.$remoteData), [4, this.setData({
                            user_info1: t
                        }, e)];
                    case 1:
                        return a.sent(), localStorage.setItem("local_user_info_" + this.getPlayerId(), t), [2]
                }
            })
        })
    }, t.prototype.cr = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return this.$remoteData = {}, [4, this.syncRemoteData(!0)];
                    case 1:
                        return e.sent(), this.emit("cr_data"), [2]
                }
            })
        })
    }, Object.defineProperty(t.prototype, "remoteData", {
        get: function() {
            return this.$remoteData
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.getData = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t, a, i, s;
            return __generator(this, function(n) {
                for (t = {}, a = 0, i = e; a < i.length; a++) s = i[a], t[s] = egret.localStorage.getItem(s);
                return [2, t]
            })
        })
    }, t.prototype.setData = function(e, t) {
        return void 0 === t && (t = !1), __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(a) {
                for (t in e) egret.localStorage.setItem(t, e[t]);
                return [2]
            })
        })
    }, t.prototype.canAdd2HomeScreen = function() {
        return !0
    }, t.prototype.add2HomeScreen = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, {
                    res: !0,
                    code: ""
                }]
            })
        })
    }, t.prototype.checkBotSubscribe = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, {
                    result: !0
                }]
            })
        })
    }, t.prototype.suportIAP = function() {
        return !1
    }, t.prototype.purchaseAsync = function(e, t) {
        return void 0 === t && (t = ""), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, !1]
            })
        })
    }, t.prototype.hasPurchased = function(e) {
        return !1
    }, t
}(Emiter);
__reflect(BasePlatform.prototype, "BasePlatform", ["IResponder"]);
var Main = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.addEventListener(egret.Event.ADDED_TO_STAGE, t.onAddToStage, t), egret.ImageLoader.crossOrigin = "anonymous", t
    }
    return __extends(t, e), t.prototype.onAddToStage = function(e) {
        this.applyConsole(), egret.lifecycle.addLifecycleListener(function(e) {
            e.onUpdate = function() {}
        }), egret.lifecycle.onPause = function() {
            egret.ticker.pause()
        }, egret.lifecycle.onResume = function() {
            egret.ticker.resume()
        }, this.runGame()["catch"](function(e) {
            console.log(e)
        })
    }, t.prototype.runGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return App.startup(this.stage), platform = PlatformFactory.create(), platform.log(Constant.LogEvent.game_loading, {
                            type: "initialized"
                        }), [4, this.loadResource()];
                    case 1:
                        return e.sent(), [4, RES.getResAsync("description_json")];
                    case 2:
                        return e.sent(), platform.setLoadingProgress(1), [4, platform.initSDK()];
                    case 3:
                        return e.sent(), console.log("init---"), [4, platform.startGame(["425952698331115_425957421663976", "425952698331115_425957551663963"], ["425952698331115_425957741663944", "425952698331115_425958161663902"])];
                    case 4:
                        return e.sent(), app.http.checkSuper()["catch"](function(e) {
                            return console.log("check super error")
                        }), [4, platform.checkBotSubscribe()];
                    case 5:
                        return e.sent(), [4, app.connect.addShortcut()];
                    case 6:
                        return e.sent(), this.PlayGame(), platform.log(Constant.LogEvent.game_loading, {
                            type: "ready"
                        }), app.notify(Constant.Notify.game_ready), [2]
                }
            })
        })
    }, t.prototype.PlayGame = function() {
        var e = new GameScene;
        this.addChild(e), this.stage.removeChild(this.LoadView);
        var t = new egret.TextField;
        this.addChild(t), t.x = egret.MainContext.instance.stage.stageWidth / 2, t.y = egret.MainContext.instance.stage.stageHeight - 25, t.size = 16, t.textColor = 7633807, t.text = $T_GAME_VERSION, t.anchorOffsetX = t.width / 2, t.anchorOffsetY = t.height / 2
    }, t.prototype.loadResource = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 4, , 5]), [4, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        return t.sent(), [4, RES.loadGroup("loading")];
                    case 2:
                        return t.sent(), platform.setLoadingProgress(.1), this.LoadView = new LoadingUI, this.stage.addChild(this.LoadView), [4, RES.loadGroup("preload", 0, this.LoadView)];
                    case 3:
                        return t.sent(), platform.setLoadingProgress(.8), [3, 5];
                    case 4:
                        return e = t.sent(), console.error(e), [3, 5];
                    case 5:
                        return [2]
                }
            })
        })
    }, t.prototype.applyConsole = function() {
        var e = this,
            t = (console.log, "e3sdsfs3eee"),
            a = "true" == egret.localStorage.getItem(t),
            i = null,
            s = function(e) {
                egret.Capabilities.runtimeType == egret.RuntimeType.WEB && egret.Capabilities.isMobile && (e ? i ? i.showSwitch() : i = new window.VConsole : i && i.hideSwitch())
            };
        s(a), Object.defineProperty(window, "$dev", {
            get: function() {
                return a
            },
            set: function(e) {
                egret.localStorage.setItem(t, e), a = e, s(e)
            },
            configurable: !0
        });
        var n = 0,
            o = 0;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function(t) {
            50 == Math.abs(Math.clamp(t.stageX - e.stage.stageWidth / 2, -50, 50)) || t.stageY >= 50 || (o++, clearTimeout(n), n = setTimeout(function() {
                o >= 5 && ($dev = !$dev), o = 0
            }, 200))
        }, this)
    }, t
}(egret.DisplayObjectContainer);
__reflect(Main.prototype, "Main");
var App = function(e) {
    function t(t) {
        var a = e.call(this) || this;
        return a.stage = t, a._busyCount = 0, a._busy_timer = 0, a.event = new Emiter, a
    }
    return __extends(t, e), t.prototype.init = function() {
        this.http = new HttpService, this.storager = new Storager, this.model = new GameModel, this.connect = new GameConnect
    }, t.startup = function(e) {
        var a = new t(e);
        return Object.defineProperty(window, "app", {
            get: function() {
                return a
            },
            configurable: !0
        }), a.init(), a.registCommand(Constant.Notify.startup, StartupCmd), a.notify(Constant.Notify.startup), a
    }, t.prototype.busy = function() {
        egret.clearTimeout(this._busy_timer), egret.setTimeout(this.busyTimerOut, this, 2e4), 0 == this._busyCount++ && (this._busyInst = new BusyIndicator, this.stage.addChild(this._busyInst), this._busyInst.x = this.stage.stageWidth >> 1, this._busyInst.y = this.stage.stageHeight >> 1)
    }, t.prototype.rmBusy = function() {
        --this._busyCount <= 0 && this._busyInst && (this._busyInst.removeFromParent(), this._busyInst = null)
    }, t.prototype.busyTimerOut = function() {
        this._busyCount = 0, this._busyInst && (this._busyInst.removeFromParent(), this._busyInst = null)
    }, t.prototype.toast = function(e, t, a) {
        void 0 === t && (t = 1e3), void 0 === a && (a = 200)
    }, t
}(Facade);
__reflect(App.prototype, "App");
var Constant;
! function(e) {
    var t;
    ! function(e) {
        e[e.startup = 0] = "startup", e[e.game_ready = 1] = "game_ready", e[e.game_over = 2] = "game_over"
    }(t = e.Notify || (e.Notify = {})), e.context_template = {
        heart: "heart",
        challenge: "challenge",
        challenge_result: "challenge_result",
        auto_choose: "auto_choose",
        skin_invite: "skin_invite",
        home_share: "home_share"
    }, e.LogEvent = {
        add_home_screen: "add_home_screen",
        game_loading: "game_loading",
        play_times: "play_times",
        level: "level",
        dead: "dead"
    }, e.SAME_CONTEXT = "SAME_CONTEXT", e.USER_INPUT = "USER_INPUT"
}(Constant || (Constant = {}));
var GameModel = function() {
    function e() {
        this.lastContextualScore = 1, this.play_times = 0, this.isSuper = !1, this.invite_skin_share_count = 0
    }
    return e
}();
__reflect(GameModel.prototype, "GameModel");
var GameOverCmd = function() {
    function e() {}
    return e.prototype.excute = function(e, t) {
        var a = +e;
        console.log("enter GameOverCmd"), app.model.play_times++;
        var i = platform.isNewPlayer ? "New_Play_Times" : "Old_Play_Times";
        if (platform.log(Constant.LogEvent.play_times, {
                result: app.model.play_times,
                type: i
            }), platform.log(Constant.LogEvent.level, {
                result: a
            }), app.model.lastContextualScore = e, platform instanceof PlatformFB) {
            if (FBInstant.context.getID()) {
                var s = ["challenge_leaderboard", "challenge_result", "challenge"].indexOf(platform.entry) > -1;
                s || ShareHelper.sendLeadboardUpdate(e)["catch"](function(e) {
                    console.log("challenge failed:", e)
                })
            }
            FBInstant.setSessionData({
                nickname: platform.userInfo.name,
                playerInfo: {
                    head: platform.userInfo.photo,
                    lang: platform.userInfo.lang,
                    score: platform.getHighScore()
                }
            })
        }
    }, e
}();
__reflect(GameOverCmd.prototype, "GameOverCmd", ["ICommand"]);
var GameReadyCmd = function() {
    function e() {
        this._lastContextId = null, this._contextLeaderBoard = null
    }
    return e.prototype.excute = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                return console.log("enter GameReadyCmd"), platform instanceof PlatformFB && (console.log("platform.entry", platform.entry), e = ["challenge_leaderboard", "challenge_result", "challenge"].indexOf(platform.entry) > -1, e || this.watchContextIfChanged()), platform.getContextId() && 0 == platform.entry.indexOf("bot_") && (app.connect.pendingChallengePost = !0), !platform.getContextId() || platform.entry != Constant.context_template.auto_choose && platform.entry != Constant.context_template.skin_invite && platform.entry != Constant.context_template.home_share || (app.connect.pendingChallengePost = !0), platform.getContextId() && "group_rank" == platform.entry && (app.connect.pendingChallengePost = !0), app.http.reportFriends()["catch"](function(e) {
                    return console.log("report friends failed:", e)
                }), app.http.reportSwitchGame()["catch"](function(e) {}), app.http.getRecommendGames()["catch"](function(e) {}), app.http.reportIfFromSkinShare()["catch"](function(e) {}), app.http.getSkinShareCount()["catch"](function(e) {}), console.log("isSuper: " + app.model.isSuper), app.model.isSuper, [2]
            })
        })
    }, e.prototype.showChoose = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (!(platform instanceof PlatformFB) || FBInstant.context.getID()) return [3, 5];
                        app.busy(), a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, platform.choose(["NEW_CONTEXT_ONLY"], !1, Constant.context_template.auto_choose)];
                    case 2:
                        return e = a.sent(), ShareHelper.sendGenericUpdate(Constant.context_template.auto_choose), [3, 4];
                    case 3:
                        return t = a.sent(), [3, 4];
                    case 4:
                        app.rmBusy(), a.label = 5;
                    case 5:
                        return [2]
                }
            })
        })
    }, e.prototype.watchContextIfChanged = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, a, i, s, n, o, r;
            return __generator(this, function(h) {
                switch (h.label) {
                    case 0:
                        e = FBInstant.player.getName(), t = app.model, h.label = 1;
                    case 1:
                        if (a = FBInstant.context.getID(), !a) return [3, 13];
                        if (i = "context." + a, a == this._lastContextId) return [3, 8];
                        console.log("context changes detected"), h.label = 2;
                    case 2:
                        return h.trys.push([2, 6, , 7]), this._lastContextId = a, s = this, [4, FBInstant.getLeaderboardAsync(i)];
                    case 3:
                        return s._contextLeaderBoard = h.sent(), t.lastContextualScore = 1, console.log("seting score ..."), [4, this._contextLeaderBoard.setScoreAsync(t.lastContextualScore, "")];
                    case 4:
                        return h.sent(), console.log("sending update ..."), [4, FBInstant.updateAsync({
                            action: "LEADERBOARD",
                            name: i,
                            text: e + " joined this game"
                        })];
                    case 5:
                        return h.sent(), [3, 7];
                    case 6:
                        return n = h.sent(), console.log("rank msg failed:", n), [3, 7];
                    case 7:
                        console.log("all done!"), h.label = 8;
                    case 8:
                        if (o = app.connect.getCurentScore() || 0, !(o > t.lastContextualScore)) return [3, 13];
                        h.label = 9;
                    case 9:
                        return h.trys.push([9, 12, , 13]), console.log("score changed!"), t.lastContextualScore = o, console.log("seting score ..."), [4, this._contextLeaderBoard.setScoreAsync(t.lastContextualScore, "")];
                    case 10:
                        return h.sent(), console.log("sending update ..."), [4, FBInstant.updateAsync({
                            action: "LEADERBOARD",
                            name: i,
                            text: e + " scored " + o,
                            data: {
                                ss: "hhh"
                            }
                        })];
                    case 11:
                        return h.sent(), console.log("all done!"), [3, 13];
                    case 12:
                        return r = h.sent(), console.log("score changed update failed:", r), [3, 13];
                    case 13:
                        return [4, waitAsync(3e3)];
                    case 14:
                        return h.sent(), [3, 1];
                    case 15:
                        return [2]
                }
            })
        })
    }, e
}();
__reflect(GameReadyCmd.prototype, "GameReadyCmd", ["ICommand"]);
var StartupCmd = function() {
    function e() {}
    return e.prototype.excute = function(e, t) {
        app.registCommand(Constant.Notify.game_over, GameOverCmd), app.registCommand(Constant.Notify.game_ready, GameReadyCmd)
    }, e
}();
__reflect(StartupCmd.prototype, "StartupCmd", ["ICommand"]);
var BusyIndicator = function(e) {
    function t() {
        var t = e.call(this) || this;
        t.autoClose = !1;
        var a = RES.getRes("loading_indicator_png");
        return t._bmp = new egret.Bitmap(a), t._bmp.anchorOffsetX = a.textureWidth >> 1, t._bmp.anchorOffsetY = a.textureHeight >> 1, t.addChild(t._bmp), t.width = t.height = 0, t
    }
    return __extends(t, e), t.prototype.$onAddToStage = function(t, a) {
        e.prototype.$onAddToStage.call(this, t, a), egret.Tween.get(this._bmp, {
            loop: !0
        }).to({
            rotation: 180
        }, 1e3).to({
            rotation: 360
        }, 1e3)
    }, t.prototype.$onRemoveFromStage = function() {
        e.prototype.$onRemoveFromStage.call(this), egret.Tween.removeTweens(this._bmp)
    }, t
}(egret.Sprite);
__reflect(BusyIndicator.prototype, "BusyIndicator");
var GameConnect = function() {
    function e() {
        this._deadCount = 0, this.pendingChallengePost = !1, this.Init()
    }
    return e.prototype.Init = function() {
        e.iPhoneH = 0, e.iPhoneW = 0, e.NowLanguage = 1, e.OpenAdWall = 0, e.ADVideoState = 0, e.NowGate = 1, this.LoginGame()
    }, e.prototype.LoginGame = function() {}, e.prototype.OpenWallOrNot = function() {
        return e.OpenAdWall
    }, e.prototype.GetiPhoneH = function() {
        var e = egret.MainContext.instance.stage.stageHeight;
        return (e - 1136) / 2
    }, e.prototype.GetiPhoneW = function() {
        var e = egret.MainContext.instance.stage.stageWidth;
        return (e - 640) / 2
    }, e.prototype.GetLanguage = function() {
        return e.NowLanguage
    }, e.prototype.OpenMyGame = function(e) {
        1 == e ? platform.switchGame("631070910729163") : platform.switchGame("433407643886357")
    }, e.prototype.OpenMyBot = function() {
        platform.checkBotSubscribe()
    }, e.prototype.GetPlatForm = function() {
        return 1 == platform.getPlatFormiOS() ? 1 : 0
    }, e.prototype.ShareGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, ShareHelper.sendGenericUpdate(Constant.context_template.home_share, null, !0)];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, e.prototype.ChallengeGame = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, platform.createCtx(e)];
                    case 1:
                        return t = a.sent(), this.pendingChallengePost = !0, [2, t]
                }
            })
        })
    }, e.prototype.ShowADChaping = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return console.log("开启插屏广告"), this.hasPurchasedRemoveAD() ? [2] : platform.hasIAD() ? [4, platform.showIAD()] : [2];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, e.prototype.ShowADVideo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return console.log("开启视频广告"), e.ADVideoState = -1, platform.hasRAD() ? platform.showRAD().then(function() {
                    e.ADVideoState = 1
                })["catch"](function() {
                    e.ADVideoState = 0
                }) : e.ADVideoState = 0, [2]
            })
        })
    }, e.prototype.GetADVideoState = function() {
        return e.ADVideoState
    }, e.prototype.SignInGameCenter = function() {
        console.log("登录排行榜")
    }, e.prototype.UpLoadScore = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return console.log("上传分数"), [4, platform.setHighScore(e)];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, e.prototype.GetMyID = function() {
        return platform.userInfo.id
    }, e.prototype.GetMyName = function() {
        return platform.userInfo.name
    }, e.prototype.GetMyImage = function() {
        return platform.userInfo.photo
    }, e.prototype.GetMyRank = function() {
        var e = platform.getWorldSelfEntry();
        return e ? e.originalRank : 999999
    }, e.prototype.GetFriendRankList = function() {
        return platform.getWorldFriendEntries()
    }, e.prototype.GetWorldRankList = function() {
        return platform.getWorldEntries()
    }, e.prototype.GetUserName = function(e) {
        return 1 == e ? this.GetWorldRankList().map(function(e) {
            return e.name
        }) : this.GetFriendRankList().map(function(e) {
            return e.name
        })
    }, e.prototype.GetUserID = function(e) {
        return 1 == e ? this.GetWorldRankList().map(function(e) {
            return e.id
        }) : this.GetFriendRankList().map(function(e) {
            return e.id
        })
    }, e.prototype.GetUserImage = function(e) {
        return 1 == e ? this.GetWorldRankList().map(function(e) {
            return e.photo
        }) : this.GetFriendRankList().map(function(e) {
            return e.photo
        })
    }, e.prototype.GetUserScore = function(e) {
        return 1 == e ? this.GetWorldRankList().map(function(e) {
            return e.score
        }) : this.GetFriendRankList().map(function(e) {
            return e.score
        })
    }, e.prototype.SendEvent = function(e) {
        var t = "nothing";
        t = 1 == e ? "pass_level" : "", platform.log(t, 1)
    }, e.prototype.canaAutoEnterGame = function() {
        return !platform.isNewPlayer && !!platform.getContextId()
    }, e.prototype.onGameStart = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), [4, this.addShortcut()];
                    case 1:
                        return t.sent(), [3, 3];
                    case 2:
                        return e = t.sent(), console.log("shortcut error:", e), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })
    }, e.prototype.readData = function() {
        var e = platform.remoteData.game_db || {};
        return e
    }, e.prototype.setData = function(e) {
        platform.remoteData.game_db = e, platform.syncRemoteData()
    }, e.prototype.onGameOver = function(e) {
        app.notify(Constant.Notify.game_over, e)
    }, e.prototype.onDead = function(e) {
        platform.log(Constant.LogEvent.dead, {
            result: ++this._deadCount
        })
    }, e.prototype.setCurentScore = function(t) {
        e.NowGate = t
    }, e.prototype.getCurentScore = function() {
        var t = e.NowGate;
        return t
    }, e.prototype.getInviteCount = function() {
        return platform.remoteData.skin_invites || (platform.remoteData.skin_invites = []), platform.remoteData.skin_invites.length
    }, e.prototype.pullInviteCount = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, app.http.getSkinShareCount()];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, e.prototype.inviteForSkin = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return platform.remoteData.skin_invites || (platform.remoteData.skin_invites = []), [4, platform.choose(["NEW_CONTEXT_ONLY"], !0, Constant.context_template.skin_invite)];
                    case 1:
                        if (e = a.sent()) {
                            if (t = platform.getContextId(), -1 != platform.remoteData.skin_invites.indexOf(t)) return app.toast("Duplicated, try another person"), [2, !1];
                            platform.remoteData.skin_invites.push(t), platform.syncRemoteData(), ShareHelper.sendGenericUpdate(Constant.context_template.skin_invite)
                        }
                        return [2, !0]
                }
            })
        })
    }, e.prototype.showChoose = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        if (!(platform instanceof PlatformFB)) return [3, 5];
                        app.busy(), a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, platform.choose(["NEW_CONTEXT_ONLY"], !1, Constant.context_template.auto_choose)];
                    case 2:
                        return e = a.sent(), ShareHelper.sendGenericUpdate(Constant.context_template.auto_choose), [3, 4];
                    case 3:
                        return t = a.sent(), [3, 4];
                    case 4:
                        app.rmBusy(), a.label = 5;
                    case 5:
                        return [2]
                }
            })
        })
    }, e.prototype.suportIAP = function() {
        return !1
    }, e.prototype.purchaseRemoveAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return [4, platform.purchaseAsync("1")];
                    case 1:
                        return e = t.sent(), [2, e]
                }
            })
        })
    }, e.prototype.hasPurchasedRemoveAD = function() {
        return platform.hasPurchased("1")
    }, e.prototype.getLeaderboardByLevel = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        this.leaderBoad && this.leaderBoad.name == "level_l_" + e || (this.leaderBoad = new LeaderBoard("level_l_" + e, "LOWER_IS_BETTER", 999), this.leaderBoad.setFriends(platform.getFriends())), a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, this.leaderBoad.initializeAsync(!1, !0)];
                    case 2:
                        return a.sent(), [3, 4];
                    case 3:
                        return t = a.sent(), console.log("fuck", t), [3, 4];
                    case 4:
                        return [2, this.leaderBoad]
                }
            })
        })
    }, e.prototype.onLevelStart = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return console.log("请求" + e + "关数据"), platform instanceof PlatformFB ? [4, this.getLeaderboardByLevel(e)] : [2];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, e.prototype.getLevelRanks = function(e, t, a) {
        return void 0 === a && (a = !1), __awaiter(this, void 0, void 0, function() {
            var i, s;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return console.log("得到" + e + "关数据"), platform instanceof PlatformFB ? [4, this.getLeaderboardByLevel(e)] : (platform.setHighScore(t), [2, platform.getWorldFriendEntries()]);
                    case 1:
                        return i = n.sent(), a || this.leaderBoad.setScore(t), s = i.getConnectedPlayerEntries(), console.log("getLevelRanks", s.length), [2, s.length > 0 ? s : null]
                }
            })
        })
    }, e.prototype.getVersion = function() {
        return $T_GAME_VERSION
    }, e.prototype.challengePost = function(e, t) {
        ShareHelper.challengePost(e, t)
    }, e.prototype.challengeShare = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, ShareHelper.challengeShare(e, t)];
                    case 1:
                        return a.sent(), [2]
                }
            })
        })
    }, e.prototype.getChallengeLevel = function() {
        return platform.challenge_info && platform.challenge_info.level || -1
    }, e.prototype.hasContext = function() {
        return !!platform.getContextId()
    }, e.prototype.canAutoChallengePost = function() {
        var e = this.pendingChallengePost;
        return console.log("canAutoChallengePost", e), this.pendingChallengePost = !1, e
    }, e.prototype.getRecommendGamesAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e = this;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return app.model.recommendGames ? [3, 2] : [4, new Promise(function(t) {
                            app.event.on("game_recommend_ready", function() {
                                t()
                            }, e)
                        })];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2, app.model.recommendGames]
                }
            })
        })
    }, e.prototype.onRecommendGameTapped = function(e) {
        platform.switchGame(e)
    }, e.prototype.getLoginDays = function() {
        var e = platform.remoteData.login_day_count;
        return e ? e : 0
    }, e.prototype.isSuper = function() {
        return 1 == app.model.isSuper ? 1 : 0
    }, e.prototype.addShortcut = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, a;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return console.log("addShortcut...."), console.log(platform.remoteData.add_hs_refuse_count), console.log(platform.remoteData.add_hs), console.log(platform.canAdd2HomeScreen()), platform.remoteData.add_hs_refuse_count >= 2 ? [2] : 0 != platform.remoteData.add_hs ? [2] : (e = platform.canAdd2HomeScreen()) ? (t = platform.playerType, platform.log(Constant.LogEvent.add_home_screen, {
                            user_type: t,
                            result: -1
                        }), [4, platform.add2HomeScreen()]) : [2];
                    case 1:
                        return a = i.sent(), a.res ? (platform.remoteData.add_hs = 1, platform.log(Constant.LogEvent.add_home_screen, {
                            user_type: t,
                            result: 1
                        })) : (a.code == Constant.USER_INPUT ? platform.remoteData.add_hs_refuse_count++ : platform.remoteData.add_hs = 2, platform.log(Constant.LogEvent.add_home_screen, {
                            user_type: t,
                            result: 0,
                            code: a.code
                        })), platform.syncRemoteData(), [2]
                }
            })
        })
    }, e
}();
__reflect(GameConnect.prototype, "GameConnect"), Date.prototype.format = function(e) {
    var t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var a in t) new RegExp("(" + a + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[a] : ("00" + t[a]).substr(("" + t[a]).length)));
    return e
}, Date.week = function(e) {
    void 0 === e && (e = 2521);
    var t = -252e5,
        a = ~~((Date.now() + t + 864e5) / 6048e5) - e - 1;
    return a
}, Date.days = function(e) {
    void 0 === e && (e = 0);
    var t = -252e5,
        a = ~~((Date.now() + t + 864e5) / 864e5) - e - 1;
    return a
}, egret.DisplayObject.prototype.removeFromParent = function() {
    this.parent && this.parent.removeChild(this)
}, String.prototype.substitute = function(e) {
    return this.replace(/\{(.+?)\}/gi, function(t, a) {
        return e[a]
    })
}, Array.prototype.random = function(e) {
    if (void 0 === e && (e = !1), 0 == this.length) return null;
    var t = Math.floor(this.length * Math.random());
    this[t];
    return e && this.splice(t, 1), this[t]
}, Array.prototype.choice = function(e) {
    if (0 == this.length) return null;
    void 0 == e && (e = function(e) {
        return e
    });
    for (var t = this.reduce(function(t, a) {
            return t + e(a)
        }, 0) * Math.random(), a = this.length, i = 0; a > i; i++) {
        var s = e(this[i]);
        if (s > t) return this[i];
        t -= s
    }
    return this[a - 1]
}, Array.prototype.unique = function() {
    for (var e = [], t = 0; t < this.length;) {
        this[t];
        e.indexOf(this[t]) >= 0 ? this.splice(t, 1) : e.push(this[t++])
    }
    return this
}, Array.prototype.sorton = function(e, t) {
    return void 0 === t && (t = !0), this.sort(function(a, i) {
        var s = a[e] || 0,
            n = i[e] || 0,
            o = s > n ? 1 : n > s ? -1 : 0;
        return t || (o *= -1), o
    })
}, Array.prototype.shuffle = function() {
    for (var e = this.length - 1; e > 0; e--) {
        var t = Math.floor(Math.random() * (e + 1));
        a = [this[t], this[e]], this[e] = a[0], this[t] = a[1]
    }
    return this;
    var a
}, Array.prototype.rm = function(e) {
    for (var t = "function" == typeof e ? e : function(t) {
            return t == e
        }, a = 0; a < this.length;) {
        var i = this[a];
        if (t(i)) return this.splice(a, 1), !0;
        a++
    }
    return !1
}, Array.prototype.next = function() {
    return (void 0 == this._iter_index || this._iter_index >= this.length) && (this._iter_index = 0), this[this._iter_index++]
}, Math.randInt = function(e, t) {
    return void 0 === e && (e = 0), void 0 === t && (t = 10), Math.floor(Math.random() * (t - e + 1)) + e
}, Math.clamp = function(e, t, a) {
    return Math.max(t, Math.min(e, a))
};
var GameMessage = function() {
    function e() {
        this.BoxState = [], this.BoxRotate = [], this.BoxStateX = [], this.BoxStateY = [], this.BlockState = [], this.BlockStateX = [], this.BlockStateY = []
    }
    return e.prototype.SetGate = function(e) {
        switch (e) {
            case 1:
                this.BoxState = [1, 5], this.BoxRotate = [0, 0], this.BoxStateX = [321, 318], this.BoxStateY = [456, 356], this.BlockState = [1, 2, 3, 4, 5], this.BlockStateX = [191, 193, 151, 444, 463], this.BlockStateY = [846, 752, 932, 901, 862];
                break;
            case 2:
                break;
            case 3:
        }
    }, e.prototype.GetMessageState = function(e) {
        return this.BlockState[e]
    }, e.prototype.GetGateInfo = function(e) {
        var t = {};
        switch (e) {
            case 1:
                t = {
                    title: "Quả nào to lớn nhất?",
                    tip: "Quả dưa hấu!",
                    okinfo: "Đã tìm thấy!"
                };
                break;
            case 2:
                t = {
                    title: "Có mấy con vịt?",
                    tip: "Có 1 chú gà con",
                    okinfo: "Thật ngọt ngào"
                };
                break;
            case 3:
                t = {
                    title: "Đâu là thứ cao nhất?",
                    tip: "Đừng quên ánh nắng!",
                    okinfo: "Rất thông minh!"
                };
                break;
            case 4:
                t = {
                    title: "Hãy tìm ra điểm khác biệt?",
                    tip: "Thử di chuyển miếng dưa hấu xem sao.",
                    okinfo: "Rất sáng tạo!"
                };
                break;
            case 5:
                t = {
                    title: "Tạo hình chữ nhật đi nào!",
                    tip: "Kéo hình vuông ra ngoài màn hình nhé.",
                    okinfo: "Hóa ra cũng biết làm đấy nhỉ!"
                };
                break;
            case 6:
                t = {
                    title: "Có bao nhiêu hình tam giác trong ngôi sao 5 cánh này?",
                    tip: "11",
                    okinfo: "Ồ, hóa ra là bạn biết đếm!"
                };
                break;
            case 7:
                t = {
                    title: "Đâu là ngọn lửa lớn nhất!",
                    tip: "Lửa + Lửa?",
                    okinfo: "Càng nhiều càng ít!"
                };
                break;
            case 8:
                t = {
                    title: "Số mấy ở dưới chiếc xe?",
                    tip: "Sao không nhấc chiếc xe ra chỗ khác nhỉ?",
                    okinfo: "Bạn xứng đáng đoạt giải Nobel!"
                };
                break;
            case 9:
                t = {
                    title: "Đánh thức con cú dậy xem nào!",
                    tip: "Cú hoạt động về đêm, hãy kéo Mặt Trời ra chỗ khác",
                    okinfo: "Bạn quá tuyệt vời!"
                };
                break;
            case 10:
                t = {
                    title: "Hãy viết xuống câu trả lời chính xác",
                    tip: "Đáp án của 4+5?",
                    okinfo: "Bạn đã tìm ra rồi đấy!"
                };
                break;
            case 11:
                t = {
                    title: "Hãy tìm Panda!",
                    tip: "Nhìn phía trên góc phải!",
                    okinfo: "Quá hoàn hảo!"
                };
                break;
            case 12:
                t = {
                    title: "Bạn phải chiến thắng trò chơi!",
                    tip: "Dùng 2 ngón tay để lấp đầy ‘o’ cùng 1 thời điểm và thẳng hàng.",
                    okinfo: "Bạn có gian lận không đấy?"
                };
                break;
            case 13:
                t = {
                    title: "Hãy tìm ra con gà",
                    tip: "Giữ và nhấc con gà mái mẹ ra chỗ khác",
                    okinfo: "Bạn đã biết cách rồi đấy!"
                };
                break;
            case 14:
                t = {
                    title: "Hãy tìm màu tối nhất trên màn hình",
                    tip: "OMG! Màu của dòng chữ thì sao?",
                    okinfo: "Tốt đấy chứ!"
                };
                break;
            case 15:
                t = {
                    title: "Hãy đếm số bộ tóc",
                    tip: "Cậu bé đang đội tóc giả, hãy tháo nó ra!",
                    okinfo: "Haha, không tệ!"
                };
                break;
            case 16:
                t = {
                    title: "Hãy giúp chú vịt con uống nước",
                    tip: "Đừng cho nước vào chai! Nước trên sàn chú vịt có thể uống",
                    okinfo: "Có gì đó giống câu chuyện Chú quạ uống nước nhỉ."
                };
                break;
            case 17:
                t = {
                    title: "Bạn có thể giải quyết được câu hỏi này?",
                    tip: "Kéo ‘--’ từ 1 đến ? để tạo thành ‘2’!",
                    okinfo: "Thông minh hơn rồi đấy!"
                };
                break;
            case 18:
                t = {
                    title: "Thứ gì có thể ăn được?",
                    tip: "Kéo 2 hình lại với nhau để tạo ra miếng thịt",
                    okinfo: "Wow! Thật sáng suốt!"
                };
                break;
            case 19:
                t = {
                    title: "Đang có cuộc thi tài thể thao. Thỏ và khỉ đang chạy đua. Hãy giúp thỏ chiến thắng!",
                    tip: "Hãy giữ chú khỉ lại và để thỏ chạy về đích!",
                    okinfo: "! Ah! Thì ra chú thỏ gian lận!"
                };
                break;
            case 20:
                t = {
                    title: "Giúp! Nhẫn của tôi đâu?",
                    tip: "Hãy mở hộp thức ăn và cho chú cún ăn. Sau đó thì...!",
                    okinfo: "Eo ơi!!!"
                };
                break;
            case 21:
                t = {
                    title: "Tìm thứ gì đó mà không thể ăn được!",
                    tip: "Ổ gà mà bạn cũng có thể ăn được hay sao?",
                    okinfo: "Wow! Ề ề ề ề ề!"
                };
                break;
            case 22:
                t = {
                    title: "Không hút thuốc",
                    tip: "Quan sát điếu thuốc thật kỹ!",
                    okinfo: "Tuyệt! Không còn khói thuốc nữa!"
                };
                break;
            case 23:
                t = {
                    title: "Bỏ 3 đồng xu vào chú heo đất, có tất cả bao nhiêu đồng xu?",
                    tip: "Sao không đập heo đất ra để xem!",
                    okinfo: "Ờ hớ đúng rồi đấy!"
                };
                break;
            case 24:
                t = {
                    title: "",
                    tip: "Đặt dòng chữ bên dưới con bướm!",
                    okinfo: " Aha! Đừng để bị lừa nữa nhé!"
                };
                break;
            case 25:
                t = {
                    title: "Đói quá, bạn hãy làm thứ gì để ăn nhé!",
                    tip: "Bạn có biết trứng ốp như nào không đấy?",
                    okinfo: "Tada! Đơn giản vậy mà không biết thì...!"
                };
                break;
            case 26:
                t = {
                    title: "Bật quạt lên giúp Arcade",
                    tip: "Chạm cả 2 dây đỏ cùng lúc!",
                    okinfo: "Ấy, đừng quên cơ thể người có thể dẫn điện"
                };
                break;
            case 27:
                t = {
                    title: "Hãy tìm ra 8 sinh vật sống",
                    tip: "Tạo mưa từ đám mây và chú giun đất sẽ xuất hiện",
                    okinfo: "Sáng tạo lên nhé!"
                };
                break;
            case 28:
                t = {
                    title: "",
                    tip: "Kéo dòng chữ và đám mây ra chỗ khác, để mặt trời làm tan chảy khối băng",
                    okinfo: "Đúng rồi đấy!"
                };
                break;
            case 29:
                t = {
                    title: "Cộng 3 số lại để thành 12",
                    tip: "3+3+6=12",
                    okinfo: "Có khó quá không vậy!"
                };
                break;
            case 30:
                t = {
                    title: "",
                    tip: "Tất cả mọi thứ nhé!",
                    okinfo: "Chiếc hộp kỳ diệu có thể chứa tất cả mọi thứ!!"
                };
                break;
            case 31:
                t = {
                    title: "Whack-A-Mole",
                    tip: "Kéo con chuột vào cái búa",
                    okinfo: "Bạn có biết Whack-A-Mole là gì không đấy?"
                };
                break;
            case 32:
                t = {
                    title: "Oh god! ZOZO đã ngủ quên! Hãy đánh thức bạn ấy dậy!",
                    tip: "Tìm cách mở cửa và để mẹ cô ấy làm việc đó!",
                    okinfo: "Ngủ gì cũng phải nhớ giờ để dậy!"
                };
                break;
            case 33:
                t = {
                    title: "Có bao nhiêu hộp khoai tây chiên nhỉ?",
                    tip: "Hãy tìm thật kỹ, nhấc các hộp khoai tây khác ra xem sao!",
                    okinfo: "Wow! Thật kỳ diệu!"
                };
                break;
            case 34:
                t = {
                    title: "Hãy tìm ra Alien",
                    tip: "Ai cũng sẽ để lại dấu chân. Dựa vào manh mối đó nhé!",
                    okinfo: "Aliens đã bị hút về tàu vũ trụ rồi"
                };
                break;
            case 35:
                t = {
                    title: "Hãy giúp họ vượt qua con sông",
                    tip: "Phóng to chiếc thuyền lên và biến nó thành cây cầu",
                    okinfo: "Cám ơn bạn nhiều!"
                }
        }
        return t
    }, e.prototype.GetMessageX = function(e) {
        return this.BlockStateX[e]
    }, e.prototype.GetMessageY = function(e) {
        return this.BlockStateY[e]
    }, e.prototype.GetMessageLength = function() {
        return this.BlockState.length
    }, e
}();
__reflect(GameMessage.prototype, "GameMessage");
var Http = function() {
    function e() {}
    return e.prototype.encodeValue = function(e, t) {
        return t instanceof Array ? this.encodeArray(e, t) : encodeURIComponent(e) + "=" + encodeURIComponent(t)
    }, e.prototype.encodeArray = function(e, t) {
        return e ? 0 == t.length ? encodeURIComponent(e) + "=" : t.map(function(t) {
            return encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }).join("&") : ""
    }, e.prototype.toString = function(e) {
        if (!e) return "";
        var t = [];
        for (var a in e) t.push(this.encodeValue(a, e[a]));
        return t.join("&")
    }, e.prototype.request = function(e) {
        var t = new XMLHttpRequest;
        t.responseType = "arraybuffer" !== e.responseType ? "text" : "arraybuffer", t.timeout = e.timeout || 0, t.onerror = function(a) {
            console.log("[http][" + e.method + "][error] [" + t.status + ":" + t.statusText + "] " + e.url), e.onerror && e.onerror(a)
        }, t.onabort = function(t) {
            console.log("[http][" + e.method + "][abort] " + e.url), e.onabort && e.onabort()
        }, t.onprogress = function(t) {
            t && t.lengthComputable && e.onprogress && e.onprogress(t.loaded / t.total)
        }, t.onload = function(a) {
            var i = void 0 !== t.status ? t.status : 200;
            if (200 === i || 204 === i || 0 === i) {
                var s = t.response || t.responseText;
                console.log("[http][" + e.method + "][loaded] " + e.url + ":" + s), e.onload(s)
            } else console.log("[http][" + e.method + "][error] [" + t.status + ":" + t.statusText + "] " + e.url), e.onerror && e.onerror(a)
        };
        var a = this.toString(e.data),
            i = e.url;
        if ("GET" == e.method && a && (i = e.url + "?" + a, a = null), t.open(e.method, i, !0), "POST" == e.method && (e.rawData ? (t.setRequestHeader("Content-Type", "application/json"), a = JSON.stringify(e.rawData)) : t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")), e.headers)
            for (var s = 0; s < e.headers.length; s++) t.setRequestHeader(e.headers[s++], e.headers[s]);
        return t.send(a), console.log("[http][" + e.method + "] " + e.url + ":" + JSON.stringify(e.data)), t
    }, e.prototype.post = function(e, t) {
        var a = this;
        return new Promise(function(i, s) {})
    }, e.prototype.get = function(e, t) {
        var a = this;
        return new Promise(function(i, s) {})
    }, e
}();
__reflect(Http.prototype, "Http");
var Storager = function() {
    function e(e) {
        void 0 === e && (e = "global"), this.id = e
    }
    return e.prototype.set = function(e, t) {
        "object" == typeof t && (t = JSON.stringify(t)), egret.localStorage.setItem(this.id + "_" + e, t)
    }, e.prototype.get = function(e, t) {
        return egret.localStorage.getItem(this.id + "_" + e) || t || null
    }, e.prototype.rm = function(e) {
        egret.localStorage.removeItem(this.id + "_" + e)
    }, e.prototype.json = function(e, t) {
        void 0 === t && (t = null);
        var a, i = egret.localStorage.getItem(this.id + "_" + e);
        try {
            a = JSON.parse(i)
        } catch (s) {
            $dev && console.log("json failed")
        }
        return a || t || null
    }, e.clear = function() {
        egret.localStorage.clear()
    }, e
}();
__reflect(Storager.prototype, "Storager");
var ad;
! function(e) {
    var t = function(e) {
        function t(t, a) {
            void 0 === a && (a = !0);
            var i = e.call(this) || this;
            return i.ids = t, i._adInstance = null, i._isStart = !1, i._watch_count = 0, i.suportAD() && a && i.preloadAD(), i
        }
        return __extends(t, e), t.prototype.suportAD = function() {
            throw "should be implemented in subclass!"
        }, t.prototype.getName = function() {
            throw "should be implemented in subclass!"
        }, t.prototype.getADInstanceAsync = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return [2, null]
                })
            })
        }, t.prototype.hasAD = function() {
            return !!this._adInstance
        }, t.prototype.preloadAD = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t, a, i, s, n, o, r, h, p = this;
                return __generator(this, function(g) {
                    switch (g.label) {
                        case 0:
                            if (this._isStart) return [2];
                            this._isStart = !0, e = "", t = this.ids.concat(), a = 0, i = null, g.label = 1;
                        case 1:
                            if (i) return [3, 24];
                            s = a++ % t.length, g.label = 2;
                        case 2:
                            return g.trys.push([2, 22, , 23]), [4, this.getADInstanceAsync(t[s])];
                        case 3:
                            i = g.sent(), e = "", console.log(this.getName() + " create suc:" + s), n = 0, g.label = 4;
                        case 4:
                            if (this._adInstance || !i) return [3, 21];
                            g.label = 5;
                        case 5:
                            return g.trys.push([5, 14, , 20]), [4, i.loadAsync()];
                        case 6:
                            g.sent(), e = "", this._adInstance = i, this.emit("ad_ready"), console.log(this.getName() + " load suc"), g.label = 7;
                        case 7:
                            return [4, new Promise(function(e, t) {
                                return p.once("show_ad", e)
                            })];
                        case 8:
                            g.sent(), g.label = 9;
                        case 9:
                            return g.trys.push([9, 11, , 12]), [4, this._adInstance.showAsync()];
                        case 10:
                            return g.sent(), e = "", console.log(this.getName() + " show suc"), this.emit("show_result", {
                                result: !0,
                                level: s
                            }), a = 0, this._adInstance = null, i = null, [3, 13];
                        case 11:
                            return o = g.sent(), console.log(this.getName() + " show failed," + o.code + "," + o.message), this.emit("ad_failed", {
                                type: this.getName(),
                                phase: 2,
                                code: o.code,
                                msg: o.message,
                                lastError: e
                            }), e = o.code + ":2", this.emit("show_result", {
                                result: !1,
                                err: o,
                                level: s
                            }), "ADS_NOT_LOADED" == o.code ? (this._adInstance = null, n = 0, [3, 13]) : "PENDING_REQUEST" != o.code && "UNKNOWN" != o.code && "RATE_LIMITED" != o.code ? (this._adInstance = null, i = null, [3, 13]) : [3, 12];
                        case 12:
                            return [3, 7];
                        case 13:
                            return [3, 20];
                        case 14:
                            return r = g.sent(), console.log(this.getName() + " load failed," + r.code + "," + r.message), this.emit("ad_failed", {
                                type: this.getName(),
                                phase: 1,
                                code: r.code,
                                msg: r.message,
                                lastError: e
                            }), e = r.code + ":1", "ADS_FREQUENT_LOAD" != r.code ? [3, 16] : [4, new Promise(function(e) {
                                return setTimeout(e, 18e5)
                            })];
                        case 15:
                            return g.sent(), [3, 21];
                        case 16:
                            return "INVALID_PARAM" != r.code ? [3, 17] : (i = null, [3, 21]);
                        case 17:
                            return [4, new Promise(function(e) {
                                return setTimeout(e, 31e3)
                            })];
                        case 18:
                            g.sent(), g.label = 19;
                        case 19:
                            return [3, 20];
                        case 20:
                            return [3, 4];
                        case 21:
                            return [3, 23];
                        case 22:
                            return h = g.sent(), console.log(this.getName() + " create failed," + h.code + "," + s), this.emit("ad_failed", {
                                type: this.getName(),
                                phase: 0,
                                code: h.code,
                                msg: h.message,
                                lastError: e
                            }), e = h.code + ":0", "CLIENT_UNSUPPORTED_OPERATION" == h.code || "ADS_TOO_MANY_INSTANCES" == h.code ? [2] : [3, 23];
                        case 23:
                            return [3, 1];
                        case 24:
                            return [2]
                    }
                })
            })
        }, t.prototype.showAD = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e, t = this;
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            if (!this.hasAD()) throw "no ad ready";
                            return e = this.emit("show_ad"), e ? [4, new Promise(function(e, a) {
                                t.once("show_result", function(i) {
                                    t.emit("ad_show", {
                                        type: t.getName(),
                                        result: ++t._watch_count,
                                        level: i.level
                                    }), i.result ? e() : a(i.err)
                                })
                            })] : [2];
                        case 1:
                            return a.sent(), [2]
                    }
                })
            })
        }, t
    }(Emiter);
    __reflect(t.prototype, "Advertise");
    var a = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.prototype.getName = function() {
            return "iad"
        }, t.prototype.suportAD = function() {
            var e = FBInstant.getSupportedAPIs();
            return e.indexOf("getInterstitialAdAsync") > -1
        }, t.prototype.getADInstanceAsync = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, FBInstant.getInterstitialAdAsync(e)];
                        case 1:
                            return [2, t.sent()]
                    }
                })
            })
        }, t
    }(t);
    e.InterstitialAD = a, __reflect(a.prototype, "ad.InterstitialAD");
    var i = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.prototype.getName = function() {
            return "rad"
        }, t.prototype.suportAD = function() {
            var e = FBInstant.getSupportedAPIs();
            return e.indexOf("getRewardedVideoAsync") > -1
        }, t.prototype.getADInstanceAsync = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, FBInstant.getRewardedVideoAsync(e)];
                        case 1:
                            return [2, t.sent()]
                    }
                })
            })
        }, t
    }(t);
    e.RewardedVideoAD = i, __reflect(i.prototype, "ad.RewardedVideoAD")
}(ad || (ad = {}));
var LoadingUI = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.createView(), t
    }
    return __extends(t, e), t.prototype.createView = function() {
        this.LoadImage = new egret.Bitmap(RES.getRes("loading1_png")), this.addChild(this.LoadImage), this.StageWidth = egret.MainContext.instance.stage.stageWidth, this.LoadImage.x = (this.StageWidth - 920) / 2, this.LoadImage.width = 920, this.LoadImage.height = 1136;
        var e = new egret.Bitmap(RES.getRes("loading2_png"));
        this.addChild(e), e.x = this.StageWidth / 2, e.y = 568, e.width = 96, e.height = 96, e.anchorOffsetX = 48, e.anchorOffsetY = 48, e.rotation = 0, egret.Tween.get(e, {
            loop: !0
        }).to({
            rotation: 360
        }, 2e3)
    }, t.prototype.onProgress = function(e, t) {}, t
}(egret.Sprite);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var HttpService = function() {
    function e() {
        this.game_id = 126, this.host = "https://fb-api.capjoy.com", this._server = new Http
    }
    return Object.defineProperty(e.prototype, "server", {
        get: function() {
            return this._server
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.reportFriends = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return platform instanceof PlatformFB && platform.getFriends().length > 0 ? (e = {
                            action: "friends",
                            playerId: platform.getPlayerId(),
                            payload: platform.getFriends().map(function(e) {
                                return e.getID()
                            })
                        }, [4, this._server.post("https://fb-bot.capjoy.com/api/v0/upload_" + this.game_id, {
                            data: JSON.stringify(e)
                        })]) : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, e.prototype.reportSwitchGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return platform.switchGameInfo && platform.isNewPlayer ? [4, this._server.post(this.host + "/fbapi/v0/ads/report/" + platform.switchGameInfo.appId + "/" + platform.appId + "/" + platform.getPlayerId(), {
                            v: $T_GAME_VERSION
                        })["catch"](function(e) {
                            return console.log(e)
                        })] : [3, 2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, e.prototype.checkSuper = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, a, i, s;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        e = this.host + "/fbapi/v0/testCase_" + this.game_id, n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), i = (a = JSON).parse, [4, this._server.post(e, {
                            nickname: platform.userInfo.name,
                            locale: platform instanceof PlatformFB ? FBInstant.getLocale() : "en_US",
                            timezoneOffset: (new Date).getTimezoneOffset(),
                            playerId: platform.getPlayerId(),
                            appId: platform.appId
                        })];
                    case 2:
                        return t = i.apply(a, [n.sent()]), 0 == t.error && (app.model.isSuper = 1 == +t.data), [3, 4];
                    case 3:
                        return s = n.sent(), console.log("check super failed"), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })
    }, e.prototype.getRecommendGames = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, a, i, s;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return e = this.host + "/fbapi/v0/getRecommendGames", t = {
                            playerId: platform.userInfo.id,
                            nickname: platform.userInfo.name,
                            appId: platform.appId,
                            locale: platform instanceof PlatformFB ? FBInstant.getLocale() : "en_US",
                            deviceOS: platform instanceof PlatformFB ? FBInstant.getPlatform() : "IOS",
                            timezoneOffset: (new Date).getTimezoneOffset()
                        }, s = (i = JSON).parse, [4, this._server.post(e, t)];
                    case 1:
                        return a = s.apply(i, [n.sent()]), 0 == a.error ? (app.model.recommendGames = a.data && a.data.ads || null, app.event.emit("game_recommend_ready")) : console.log("getRecommendGames  error:", a.msg), [2]
                }
            })
        })
    }, e.prototype.reportIfFromSkinShare = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return platform.invite_skin_data && platform.isNewPlayer ? (e = this.host + "/api/game/v0/shareUpdate_" + this.game_id, [4, this._server.post(e, {
                            v: $T_GAME_VERSION,
                            playerId: platform.getPlayerId(),
                            sharePlayerId: platform.invite_skin_data.playerId,
                            type: "share"
                        })["catch"](function(e) {
                            return console.log(e)
                        })]) : [3, 2];
                    case 1:
                        t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, e.prototype.getSkinShareCount = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, a, i, s;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        e = 0, n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), t = this.host + "/api/game/v0/shareGet_" + this.game_id, [4, this._server.post(t, {
                            v: $T_GAME_VERSION,
                            playerId: platform.getPlayerId(),
                            type: "share"
                        })];
                    case 2:
                        return a = n.sent(), i = JSON.parse(a), e = +i.data.count || 0, [3, 4];
                    case 3:
                        return s = n.sent(), console.log(s), [3, 4];
                    case 4:
                        return app.model.invite_skin_share_count = e, [2]
                }
            })
        })
    }, e
}();
__reflect(HttpService.prototype, "HttpService");
var LeaderBoard = function(e) {
    function t(t, a, i) {
        void 0 === a && (a = "HIGHER_IS_BETTER"), void 0 === i && (i = 0);
        var s = e.call(this) || this;
        return s.name = t, s.sortType = a, s.defaultScore = i, s._selfEntry = null, s._entries = null, s._friendEntries = null, s._preInitialized = !1, s._preInitializing = !1, s._initialized = !1, s._initializing = !1, s._friends = null, s
    }
    return __extends(t, e), t.prototype.preInitializeAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, a = this;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return this._preInitialized ? [2] : this._preInitializing ? [4, new Promise(function(e) {
                            a.once("preInitialized", e)
                        })] : [3, 2];
                    case 1:
                        return i.sent(), [2];
                    case 2:
                        return this._preInitializing = !0, e = this, [4, FBInstant.getLeaderboardAsync(this.name)];
                    case 3:
                        return e._leaderboard = i.sent(), [4, this._leaderboard.getPlayerEntryAsync()];
                    case 4:
                        return t = i.sent(), t ? this._selfEntry = RankPlayerVO.createFromLeaderBoardEntry(t) : this._selfEntry = RankPlayerVO.createFromContextPlayer(FBInstant.player), this._preInitialized = !0, this._preInitializing = !1, this.emit("preInitialized"), console.log("leaderboard preInitialized", this.name), [2]
                }
            })
        })
    }, Object.defineProperty(t.prototype, "initialized", {
        get: function() {
            return this.initialized
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.initializeAsync = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var a, i, s, n = this;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return this._initialized ? [2] : this._initializing ? [4, new Promise(function(e) {
                            n.once("initialized", e)
                        })] : [3, 2];
                    case 1:
                        return o.sent(), [2];
                    case 2:
                        return this._initializing = !0, [4, this.preInitializeAsync()];
                    case 3:
                        o.sent(), o.label = 4;
                    case 4:
                        return o.trys.push([4, 9, , 10]), a = e, a ? [4, this.getEntriesAsync()] : [3, 6];
                    case 5:
                        a = o.sent(), o.label = 6;
                    case 6:
                        return i = t, i ? [4, this.getConnectedPlayerEntriesAsync()] : [3, 8];
                    case 7:
                        i = o.sent(), o.label = 8;
                    case 8:
                        return [3, 10];
                    case 9:
                        return s = o.sent(), console.log("排行榜数据错误"), [3, 10];
                    case 10:
                        return this._initialized = !0, this._initializing = !1, this.emit("initialized"), console.log("leaderboard initialized", this.name), [2]
                }
            })
        })
    }, t.prototype.getEntriesAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, this.preInitializeAsync()];
                    case 1:
                        return a.sent(), this._entries ? [3, 3] : (e = this._leaderboard, [4, e.getEntriesAsync(100, 0)]);
                    case 2:
                        t = a.sent(), this._entries = t.map(function(e) {
                            return RankPlayerVO.createFromLeaderBoardEntry(e)
                        }), a.label = 3;
                    case 3:
                        return [2, this._entries || []]
                }
            })
        })
    }, t.prototype.getEntries = function() {
        return this._entries || []
    }, t.prototype.getConnectedPlayerEntriesAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, a, i;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return [4, this.preInitializeAsync()];
                    case 1:
                        return s.sent(), this._friendEntries ? [3, 3] : (e = this._leaderboard, [4, e.getConnectedPlayerEntriesAsync(100, 0)]);
                    case 2:
                        t = s.sent(), this._friendEntries = t.map(function(e) {
                            return RankPlayerVO.createFromLeaderBoardEntry(e)
                        }), a = FBInstant.player.getID(), i = this._friendEntries.findIndex(function(e) {
                            return e.id == a
                        }), -1 == i && (this._friendEntries.push(RankPlayerVO.createFromContextPlayer(FBInstant.player)), this._friendEntries.forEach(function(e, t) {
                            return e.originalRank = t + 1
                        })), this.bindFriends(), s.label = 3;
                    case 3:
                        return [2, this._friendEntries || []]
                }
            })
        })
    }, t.prototype.getConnectedPlayerEntries = function() {
        return this._friendEntries || []
    }, t.prototype.refreshRankList = function(e, t, a) {
        var i = FBInstant.player.getID(),
            s = e.findIndex(function(e) {
                return e.id == i
            });
        if (-1 != s) {
            var n = e[s];
            n.score = t, n.extraData = a, e.sorton("score", "LOWER_IS_BETTER" == this.sortType), e.forEach(function(e, t) {
                return e.originalRank = t + 1
            })
        } else if (e.length > 0 && t > e[e.length - 1].score) {
            var n = RankPlayerVO.createFromContextPlayer(FBInstant.player);
            n.score = t, n.extraData = a, e.push(n), e.sorton("score", "LOWER_IS_BETTER" == this.sortType), e.forEach(function(e, t) {
                return e.originalRank = t + 1
            })
        }
    }, t.prototype.setScore = function(e, t) {
        var a = this;
        if (!this._preInitialized) throw "doesn't preInitialized";
        if (!(e < this._selfEntry.score)) {
            this._selfEntry.score = e, this._selfEntry.extraData = t, this._entries && this.refreshRankList(this._entries, e, t), this._friendEntries && this.refreshRankList(this._friendEntries, e, t);
            var i = function() {
                return __awaiter(a, void 0, void 0, function() {
                    var a;
                    return __generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.preInitializeAsync()];
                            case 1:
                                return i.sent(), console.log("setScoreAsync", e), [4, this._leaderboard.setScoreAsync(e, JSON.stringify(t))];
                            case 2:
                                return a = i.sent(), this._selfEntry = RankPlayerVO.createFromLeaderBoardEntry(a), console.log("setScoreAsync suc"), [2]
                        }
                    })
                })
            };
            i()
        }
    }, t.prototype.getScore = function() {
        if (!this._preInitialized) throw "doesn't preInitialized";
        return this._selfEntry.score
    }, t.prototype.setFriends = function(e) {
        this._friends = e, this.bindFriends()
    }, t.prototype.bindFriends = function() {
        if (this._friends && this._friendEntries) {
            var e = {},
                t = this._friends;
            t.forEach(function(t) {
                return e[t.getID()] = RankPlayerVO.createFromContextPlayer(t)
            }), e[FBInstant.player.getID()] = RankPlayerVO.createFromContextPlayer(FBInstant.player);
            var a = this._friendEntries;
            a.forEach(function(t) {
                var a = e[t.id];
                a && (t.name = a.name, t.photo = a.photo, delete e[t.id])
            });
            for (var i in e) a.push(e[i]), e[i].score = this.defaultScore;
            a.sorton("score", "LOWER_IS_BETTER" == this.sortType), a.forEach(function(e, t) {
                return e.originalRank = t + 1
            })
        }
    }, t.prototype.getSelfEntry = function() {
        return this._selfEntry
    }, t
}(Emiter);
__reflect(LeaderBoard.prototype, "LeaderBoard");
var PlatformDev = function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }
    return __extends(t, e), t.prototype.needAccount = function() {
        return !0
    }, t.prototype.getWorldFriendEntries = function() {
        for (var e = [], t = 1; e.length < 10;) {
            var a = new RankPlayerVO;
            a.id = "player" + t, a.name = "abc" + t, a.photo = "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1919308798192205&height=256&width=256&ext=1556338068&hash=AeT6AJodDv0PCryf", a.score = 1 + Math.floor(100 * Math.random()), e.push(a), t++
        }
        return e
    }, t
}(BasePlatform);
__reflect(PlatformDev.prototype, "PlatformDev");
var PlatformFactory = function() {
    function e() {}
    return e.create = function() {
        return window.FBInstant ? new PlatformFB : new PlatformDev
    }, e
}();
__reflect(PlatformFactory.prototype, "PlatformFactory");
var PlatformFB = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t._canAdd2HomeScreen = !1, t._isDateReady = !1, t._isFetching = !1, t._userInfo = {
            name: "",
            id: "",
            photo: "",
            friends: [],
            lang: "en_US"
        }, t._isPaymentsReady = !1, t
    }
    return __extends(t, e), t.prototype.getFriends = function() {
        return this._friends || []
    }, t.prototype.initSDK = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, a = this;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return $T_FB_INITIALIZED ? [3, 2] : [4, FBInstant.initializeAsync()];
                    case 1:
                        i.sent(), i.label = 2;
                    case 2:
                        return this._worldRank = new LeaderBoard("world"), e = function(e) {
                            e.code && (e.nick = FBInstant.player.getName(), a.log("platform_error", e))
                        }, this._worldRank.on("error", e, this), t = function(e) {
                            a.log("platform_api", e)
                        }, this._worldRank.on("api", t, this), this.fetchData(), [2]
                }
            })
        })
    }, t.prototype.fetchData = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t = this;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return this._isDateReady ? [2] : this._isFetching ? [4, new Promise(function(e, a) {
                            t.once("data_ready", e)
                        })] : [3, 2];
                    case 1:
                        return a.sent(), [2];
                    case 2:
                        return a.trys.push([2, 4, , 5]), this._isFetching = !0, [4, this.initRemoteData()];
                    case 3:
                        return a.sent(), this._isDateReady = !0, [3, 5];
                    case 4:
                        return e = a.sent(), console.log("fetchData error", e.code || e.msg || e), [3, 5];
                    case 5:
                        return this._isFetching = !1, this.emit("data_ready"), [2]
                }
            })
        })
    }, t.prototype.setLoadingProgress = function(e) {
        $T_PROGRESS = Math.max($T_PROGRESS, 100 * e)
    }, t.prototype.startGame = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var a, i, s, n, o, r, h, p, g, l = this;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        return [4, FBInstant.startGameAsync()];
                    case 1:
                        return c.sent(), this.initPayments(), console.log("startGameAsync", Date.now()), a = FBInstant.getEntryPointData(), console.log("entry_data", JSON.stringify(a)), this.challenge_info = a && a.challenge_info, this.challenge_info ? [4, FBInstant.context.getPlayersAsync()] : [3, 3];
                    case 2:
                        i = c.sent(), s = {}, n = {}, i.forEach(function(e) {
                            s[e.getID()] = e.getPhoto(), n[e.getID()] = e.getName()
                        }), this.challenge_info.opponents.forEach(function(e) {
                            e.name = n[e.playerId] || "unkonw", e.photo = s[e.playerId] || "default-portrait_png"
                        }), c.label = 3;
                    case 3:
                        return this.switchGameInfo = a && a.switchGameInfo || null, this.invite_skin_data = a && a.invite_skin_data, this.invite_skin_data && this.invite_skin_data.playerId == FBInstant.player.getID() && (this.invite_skin_data = null), o = this, [4, FBInstant.player.getConnectedPlayersAsync()];
                    case 4:
                        o._friends = c.sent() || [], r = this._friends.map(function(e) {
                            return e.getID()
                        }), this._userInfo = {
                            id: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            photo: FBInstant.player.getPhoto(),
                            friends: r,
                            lang: FBInstant.getLocale()
                        }, c.label = 5;
                    case 5:
                        return c.trys.push([5, 7, , 8]), h = this, [4, FBInstant.canCreateShortcutAsync()];
                    case 6:
                        return h._canAdd2HomeScreen = c.sent(), [3, 8];
                    case 7:
                        return p = c.sent(), console.log("canCreateShortcutAsync failed"), [3, 8];
                    case 8:
                        return console.log("can add sc", this._canAdd2HomeScreen), [4, this.fetchData()];
                    case 9:
                        return c.sent(), this.isNewPlayer = void 0 == this.$remoteData.gold, this.playerType = this.isNewPlayer ? "new" : "old", this.isNewPlayer && (this.$remoteData.gold = 0, this.$remoteData.add_hs = 0, this.$remoteData.add_hs_refuse_count = 0, this.$remoteData.context_ids = [], this.$remoteData.h_score = 0, this.$remoteData.iap_inventory = [], this.$remoteData.game_db = {}, this.$remoteData.skin_invites = [], this.syncRemoteData()), this.$remoteData.last_login_dayth ? Date.days() != this.$remoteData.last_login_dayth && (this.$remoteData.login_day_count++, this.$remoteData.last_login_dayth = Date.days(), this.syncRemoteData()) : (this.$remoteData.last_login_dayth = Date.days(), this.$remoteData.login_day_count = 1, this.syncRemoteData()), console.log("login_days"), this._worldRank.setFriends(this._friends), [4, this._worldRank.initializeAsync(!0, !0)];
                    case 10:
                        return c.sent(), FBInstant.setSessionData({
                            nickname: this._userInfo.name,
                            playerInfo: {
                                head: this._userInfo.photo,
                                lang: this._userInfo.lang,
                                score: this.$remoteData.h_score
                            }
                        }), -1 == FBInstant.getPlatform().indexOf("WEB") ? (this.iad = new ad.InterstitialAD(e, !0), this.iad.on("ad_failed", function(e) {
                            return l.log("ad_failed", e)
                        }), this.iad.on("ad_show", function(e) {
                            return l.log("iad_times", e)
                        }), this.rad = new ad.RewardedVideoAD(t, !0), this.rad.on("ad_failed", function(e) {
                            return l.log("ad_failed", e)
                        }), this.rad.on("ad_show", function(e) {
                            return l.log("rad_times", e)
                        })) : (console.log("WEB & MOBILE_WEB video ad skiped!"), this.iad = new ad.InterstitialAD(e, !0), this.iad.on("ad_failed", function(e) {
                            return l.log("ad_failed", e)
                        }), this.iad.on("ad_show", function(e) {
                            return l.log("iad_times", e)
                        })), g = a ? a.type : "normal", "normal" == g && FBInstant.context.getID() && (g = "group_rank"), platform.log("entry_point", {
                            entry: g,
                            play_type: this.playerType
                        }), this.entry = g, console.log("entry", g), [2]
                }
            })
        })
    }, t.prototype.getPlatFormiOS = function() {
        return "IOS" == FBInstant.getPlatform() ? !0 : !1
    }, t.prototype.getWorldEntries = function() {
        return this._worldRank.getEntries()
    }, t.prototype.getWorldEntriesAsync = function() {
        return this._worldRank.getEntriesAsync()
    }, t.prototype.getWorldFriendEntries = function() {
        return this._worldRank.getConnectedPlayerEntries()
    }, t.prototype.getWorldFriendEntriesAsync = function() {
        return this._worldRank.getConnectedPlayerEntriesAsync()
    }, t.prototype.getWorldSelfEntry = function() {
        return this._worldRank.getSelfEntry()
    }, t.prototype.getHighScore = function() {
        return this._worldRank.getScore() || this.$remoteData.h_score
    }, t.prototype.setHighScore = function(e, t) {
        console.log("seth", e), e > this.$remoteData.h_score && (this.$remoteData.h_score = e, this.syncRemoteData()), this._worldRank.setScore(e, t)
    }, t.prototype.hasAD = function() {
        return this.hasRAD() || this.hasIAD()
    }, t.prototype.showAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return this.hasRAD() ? [4, this.showRAD()] : [3, 2];
                    case 1:
                        return e.sent(), [3, 4];
                    case 2:
                        return this.hasIAD() ? [4, this.showIAD()] : [3, 4];
                    case 3:
                        e.sent(), e.label = 4;
                    case 4:
                        return [2]
                }
            })
        })
    }, t.prototype.hasRAD = function() {
        return this.rad && this.rad.hasAD()
    }, t.prototype.showRAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = this.rad, e ? [4, this.rad.showAD()] : [3, 2];
                    case 1:
                        e = t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, t.prototype.hasIAD = function() {
        return this.iad && this.iad.hasAD()
    }, t.prototype.showIAD = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = this.iad, e ? [4, this.iad.showAD()] : [3, 2];
                    case 1:
                        e = t.sent(), t.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, t.prototype.getToken = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(a) {
                return e = FBInstant.player.getName() || "unknow", t = {
                    playerId: this._signedPlayerInfo.getPlayerID(),
                    signature: this._signedPlayerInfo.getSignature(),
                    photo: FBInstant.player.getPhoto(),
                    nickname: e
                }, [2, t]
            })
        })
    }, Object.defineProperty(t.prototype, "userInfo", {
        get: function() {
            return this._userInfo
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.getContextId = function() {
        return FBInstant.context.getID()
    }, t.prototype.getPlayerId = function() {
        return FBInstant.player.getID()
    }, t.prototype.choose = function(e, t, a) {
        return void 0 === t && (t = !1), void 0 === a && (a = "default"), __awaiter(this, void 0, void 0, function() {
            var i;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        this.log("create_detail", {
                            phase: 0,
                            place: a
                        }), void 0 == e && (e = ["NEW_CONTEXT_ONLY"]), s.label = 1;
                    case 1:
                        return s.trys.push([1, 3, , 4]), [4, FBInstant.context.chooseAsync({
                            filters: e,
                            minSize: t ? 3 : 2
                        })];
                    case 2:
                        return s.sent(), [3, 4];
                    case 3:
                        return i = s.sent(), console.log("choose result", JSON.stringify(i)), i.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                    case 4:
                        return this.log("create_detail", {
                            phase: 1,
                            place: a
                        }), this.emit("context_changed"), [2, !0]
                }
            })
        })
    }, t.prototype.switchCtx = function(e, t) {
        return void 0 === t && (t = "default"), __awaiter(this, void 0, void 0, function() {
            var a;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        this.log("switch_detail", {
                            phase: 0,
                            place: t
                        }), i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), [4, FBInstant.context.switchAsync(e)];
                    case 2:
                        return i.sent(), [3, 4];
                    case 3:
                        return a = i.sent(), console.log("switchCtx result", JSON.stringify(a)), a.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                    case 4:
                        return this.emit("context_changed"), this.log("switch_detail", {
                            phase: 1,
                            place: t
                        }), [2, !0]
                }
            })
        })
    }, t.prototype.createCtx = function(e, t) {
        return void 0 === t && (t = "default"), __awaiter(this, void 0, void 0, function() {
            var a;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        this.log("create_detail", {
                            phase: 0,
                            place: t
                        }), i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), [4, FBInstant.context.createAsync(e)];
                    case 2:
                        return i.sent(), [3, 4];
                    case 3:
                        return a = i.sent(), console.log("createCtx result", JSON.stringify(a)), a.code == Constant.SAME_CONTEXT ? [2, !0] : [2, !1];
                    case 4:
                        return this.emit("context_changed"), this.log("create_detail", {
                            phase: 1,
                            place: t
                        }), [2, !0]
                }
            })
        })
    }, t.prototype.getContextPlayers = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        e = [], a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, FBInstant.context.getPlayersAsync()];
                    case 2:
                        return e = a.sent(), [3, 4];
                    case 3:
                        return t = a.sent(), console.log("getContextPlayers error", JSON.stringify(t)), [3, 4];
                    case 4:
                        return [2, e]
                }
            })
        })
    }, t.prototype.switchGame = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var a;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return a = {
                            switchGameInfo: {
                                appId: this.appId,
                                appName: this.appName
                            },
                            type: this.appName
                        }, [4, FBInstant.switchGameAsync(e, Object.assign(a, t))];
                    case 1:
                        return i.sent(), [2]
                }
            })
        })
    }, t.prototype.updateStatues = function(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var a, i, s;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        a = 0, n.label = 1;
                    case 1:
                        if (!(3 > a)) return [3, 8];
                        i = !1, n.label = 2;
                    case 2:
                        return n.trys.push([2, 4, , 5]), [4, FBInstant.updateAsync({
                            action: t.action || "CUSTOM",
                            cta: t.cta || "Play now",
                            image: t.image,
                            text: t.text || "Play with me!",
                            template: t.template || "game_result",
                            data: e,
                            strategy: t.strategy || "IMMEDIATE",
                            notification: t.notification || "NO_PUSH"
                        })];
                    case 3:
                        return n.sent(), [3, 5];
                    case 4:
                        return s = n.sent(), i = !0, console.log("updateStatues failed", a, JSON.stringify(s)), [3, 5];
                    case 5:
                        return i ? [4, waitAsync(500)] : [3, 8];
                    case 6:
                        n.sent(), n.label = 7;
                    case 7:
                        return a++, [3, 1];
                    case 8:
                        return [2]
                }
            })
        })
    }, t.prototype.share = function(e) {
        return void 0 === e && (e = {}), __awaiter(this, void 0, void 0, function() {
            var t, a;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        t = !0, i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), console.log("share..."), [4, FBInstant.shareAsync({
                            intent: "INVITE",
                            image: e.img || RES.getRes("share_png").toDataURL("image/png"),
                            text: e.text || "Hey buddy, I found an awesome game. I'm sure you'll love it.",
                            data: e.data || null
                        })];
                    case 2:
                        return i.sent(), [3, 4];
                    case 3:
                        return a = i.sent(), t = !1, [3, 4];
                    case 4:
                        return [2, t]
                }
            })
        })
    }, t.prototype.log = function(t, a, i) {
        void 0 === i && (i = 1), e.prototype.log.call(this, t, a, i), a = a || {}, a._appVersion = $T_GAME_VERSION, a.playerId = FBInstant.player.getID(), a.playerName = FBInstant.player.getName(), FBInstant.logEvent(t, i, a)
    }, t.prototype.getData = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t, a, i;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        t = null, a = 5, s.label = 1;
                    case 1:
                        if (t || !(a-- > 0)) return [3, 6];
                        s.label = 2;
                    case 2:
                        return s.trys.push([2, 4, , 5]), [4, FBInstant.player.getDataAsync(e)];
                    case 3:
                        return t = s.sent(), [3, 5];
                    case 4:
                        return i = s.sent(), [3, 5];
                    case 5:
                        return [3, 1];
                    case 6:
                        return [2, t || {}]
                }
            })
        })
    }, t.prototype.setData = function(e, t) {
        return void 0 === t && (t = !1), __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, FBInstant.player.setDataAsync(e)];
                    case 1:
                        return a.sent(), t ? [4, FBInstant.player.flushDataAsync()] : [3, 3];
                    case 2:
                        a.sent(), a.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, t.prototype.canAdd2HomeScreen = function() {
        return this._canAdd2HomeScreen
    }, t.prototype.add2HomeScreen = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), [4, FBInstant.createShortcutAsync()];
                    case 1:
                        return t.sent(), [3, 3];
                    case 2:
                        return e = t.sent(), console.log("add 2 Home Screen result", JSON.stringify(e)), [2, {
                            res: !1,
                            code: e.code
                        }];
                    case 3:
                        return [2, {
                            res: !0,
                            code: ""
                        }]
                }
            })
        })
    }, t.prototype.suportIAP = function() {
        return this._isPaymentsReady
    }, t.prototype.getCatalogAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        e = null, a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, FBInstant.payments.getCatalogAsync()];
                    case 2:
                        return e = a.sent(), console.log(JSON.stringify(e)), [3, 4];
                    case 3:
                        return t = a.sent(), console.log("getCatalogAsync error:" + t.code || t.message || t), [3, 4];
                    case 4:
                        return [2, e]
                }
            })
        })
    }, t.prototype.purchaseAsync = function(e, t) {
        return void 0 === t && (t = ""), __awaiter(this, void 0, void 0, function() {
            var a, i, s, n, o;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (!this._isPaymentsReady) return [2, !1];
                        a = !1, i = FBInstant.getPlatform(), this.log("buyProduct", {
                            phase: 0,
                            productId: e,
                            platform: i
                        }), r.label = 1;
                    case 1:
                        return r.trys.push([1, 4, , 5]), s = {}, s.productID = e, t && (s.developerPayload = s.developerPayload), [4, FBInstant.payments.purchaseAsync(s)];
                    case 2:
                        return n = r.sent(), this.log("buyProduct", {
                            phase: 1,
                            productId: e,
                            platform: i
                        }), [4, FBInstant.payments.consumePurchaseAsync(n.purchaseToken)];
                    case 3:
                        return r.sent(), this.addIAPInventroy(n.productID), this.log("buyProduct", {
                            phase: 2,
                            productId: e,
                            platform: i
                        }), a = !0, [3, 5];
                    case 4:
                        return o = r.sent(), console.log("purchaseAsync error:" + o.code || o.message || o), this.log("buyProduct", {
                            phase: -1,
                            productId: e,
                            platform: i,
                            code: o.code
                        }), [3, 5];
                    case 5:
                        return [2, a]
                }
            })
        })
    }, t.prototype.checkPurchaseAsync = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, a, i, s, n, o;
            return __generator(this, function(r) {
                switch (r.label) {
                    case 0:
                        if (!this._isPaymentsReady) return [2, null];
                        e = FBInstant.getPlatform(), t = null, r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), [4, FBInstant.payments.getPurchasesAsync()];
                    case 2:
                        return t = r.sent(), [3, 4];
                    case 3:
                        return a = r.sent(), console.log("getPurchasesAsync error:" + a.code || a.message || a), [3, 4];
                    case 4:
                        i = 0, s = t, r.label = 5;
                    case 5:
                        if (!(i < s.length)) return [3, 10];
                        n = s[i], r.label = 6;
                    case 6:
                        return r.trys.push([6, 8, , 9]), [4, FBInstant.payments.consumePurchaseAsync(n.purchaseToken)];
                    case 7:
                        return r.sent(), this.addIAPInventroy(n.productID), this.log("checkPurchase", {
                            phase: 1,
                            productId: n.productID,
                            platform: e
                        }), [3, 9];
                    case 8:
                        return o = r.sent(), console.log("checkPurchase error:" + o.code || o.message || o), this.log("checkPurchase", {
                            phase: -1,
                            platform: e,
                            code: o.code
                        }), [3, 9];
                    case 9:
                        return i++, [3, 5];
                    case 10:
                        return [2]
                }
            })
        })
    }, t.prototype.initPayments = function() {
        var e = this;
        if (-1 != FBInstant.getSupportedAPIs().indexOf("payments.purchaseAsync") && "IOS" != FBInstant.getPlatform()) {
            var t = FBInstant.getPlatform();
            this.log("paymentsReady", {
                phase: 0,
                platform: t
            }), FBInstant.payments.onReady(function() {
                e._isPaymentsReady = !0, e.log("paymentsReady", {
                    phase: 1,
                    platform: t
                }), e.checkPurchaseAsync()
            })
        }
    }, t.prototype.addIAPInventroy = function(e) {
        this.remoteData.iap_inventory || (this.remoteData.iap_inventory = []), this.remoteData.iap_inventory.push(e), this.syncRemoteData()
    }, t.prototype.hasPurchased = function(e) {
        var t = this.remoteData.iap_inventory;
        return t && -1 != t.indexOf(e)
    }, t.prototype.checkBotSubscribe = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, a, i;
            return __generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        e = null, s.label = 1;
                    case 1:
                        return s.trys.push([1, 5, , 6]), [4, FBInstant.player.canSubscribeBotAsync()];
                    case 2:
                        return t = s.sent(), console.log("can subscribe:", t), t ? (this.log("bot_subscribe", {
                            result: -1
                        }), [4, FBInstant.player.subscribeBotAsync()]) : [3, 4];
                    case 3:
                        a = s.sent(), this.log("bot_subscribe", {
                            result: 1
                        }), e = {
                            result: !0
                        }, s.label = 4;
                    case 4:
                        return [3, 6];
                    case 5:
                        return i = s.sent(), this.log("bot_subscribe", {
                            result: 0
                        }), e = {
                            result: !1,
                            code: i.code,
                            msg: i.message
                        }, [3, 6];
                    case 6:
                        return [2, e]
                }
            })
        })
    }, t
}(BasePlatform);
__reflect(PlatformFB.prototype, "PlatformFB");
var RankPlayerVO = function() {
    function e() {
        this.name = "", this.photo = "", this.score = 0, this.id = "", this.tip = "", this.originalRank = 0
    }
    return Object.defineProperty(e.prototype, "skin", {
        get: function() {
            return this.extraData && this.extraData.skin || 1
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.toJSON = function() {
        return {
            id: this.id,
            score: this.score,
            extraData: this.extraData
        }
    }, e.createFromJSON = function(t) {
        var a = new e;
        if (a.id = t.id, a.score = t.score, "string" == typeof t.extraData) try {
            a.extraData = JSON.parse(t.extraData)
        } catch (i) {} else a.extraData = t.extraData;
        return a
    }, e.createFromLeaderBoardEntry = function(t) {
        var a = t.getPlayer(),
            i = new e;
        i.name = a.getName(), i.photo = a.getPhoto(), i.id = a.getID(), i.score = t.getScore();
        var s = t.getExtraData(),
            n = null;
        try {
            s && (n = JSON.parse(s))
        } catch (o) {
            console.log(o)
        }
        return i.extraData = n, i.originalRank = t.getRank(), i
    }, e.createFromContextPlayer = function(t) {
        var a = new e;
        return a.name = t.getName(), a.photo = t.getPhoto(), a.id = t.getID(), a
    }, e
}();
__reflect(RankPlayerVO.prototype, "RankPlayerVO");
var ShareHelper;
! function(e) {
    function t(e) {
        var t = this;
        return new Promise(function(a, i) {
            e.once("ready_2_draw", function() {
                console.log("ready_2_draw");
                var t = new egret.RenderTexture;
                t.drawToTexture(e, new egret.Rectangle(0, 0, 600, 314)), e.removeFromParent();
                var i = t.toDataURL("image/png");
                t.dispose(), a(i)
            }, t), app.stage.addChildAt(e, 0), e.y = app.stage.stageHeight + 10
        })
    }

    function a(e, a, i) {
        return __awaiter(this, void 0, void 0, function() {
            var s, n, o, r, h, p;
            return __generator(this, function(g) {
                switch (g.label) {
                    case 0:
                        return s = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: a
                        }, n = {
                            level: e,
                            senderId: s.playerId,
                            opponents: [s]
                        }, o = i ? "Hey, " + i + ", m" : "M", r = o + "y score is " + a + "! Can you do better?", h = new ShareImage, [4, t(h.InitShareImage1(e, s.photo, a))];
                    case 1:
                        return p = g.sent(), console.log("r done"), n.opponents.forEach(function(e) {
                            delete e.photo, delete e.name
                        }), [4, platform.updateStatues(Object.assign({
                            type: "challenge"
                        }, {
                            challenge_info: n
                        }), {
                            image: p,
                            text: "[Level " + e + "] " + r,
                            template: "challenge",
                            cta: "CHALLENGE"
                        })];
                    case 2:
                        return g.sent(), [2]
                }
            })
        })
    }

    function i(e, a, i, s) {
        return __awaiter(this, void 0, void 0, function() {
            var n, o, r, h, p, g, l;
            return __generator(this, function(c) {
                switch (c.label) {
                    case 0:
                        return n = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: a
                        }, o = i || "you", r = "you" == o ? "you" : "they", h = n.name + " has challenged " + o + ", " + r + " are neck and neck!", n.score > s.score ? h = n.name + " has failed to challenge " + o + ", " + o + " win!" : n.score < s.score && (h = n.name + " has succeeded in passing " + o + ". Come and challenge " + n.name), console.log("r image"), p = new ShareImage, [4, t(p.InitShareImage2(e, [n.photo, s.photo], [a, s.score]))];
                    case 1:
                        return g = c.sent(), console.log("r done"), l = {
                            level: e,
                            senderId: n.playerId,
                            opponents: [s, n]
                        }, l.opponents.forEach(function(e) {
                            delete e.photo, delete e.name
                        }), [4, platform.updateStatues(Object.assign({
                            type: "challenge_result"
                        }, {
                            challenge_info: l
                        }), {
                            image: g,
                            text: "[Level " + e + "] " + h,
                            cta: "Play",
                            template: "challenge_result"
                        })];
                    case 2:
                        return c.sent(), [2]
                }
            })
        })
    }

    function s(e, a, i) {
        return __awaiter(this, void 0, void 0, function() {
            var s, n, o, r, h, p, g;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return s = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: a
                        }, n = i.find(function(e) {
                            return e.playerId == s.playerId
                        }), n ? s.score < n.score && Object.assign(n, s) : i.push(s), i.sorton("score", !0), i.forEach(function(e, t) {
                            return e.rankIndex = t
                        }), o = {
                            level: e,
                            senderId: s.playerId,
                            opponents: i
                        }, r = i.findIndex(function(e) {
                            return e.playerId == s.playerId
                        }), h = [], i.length <= 6 ? h = i : 6 > r ? h = i.slice(0, 6) : (h = i.slice(0, 5), h.push(i[r]), r = 5), p = new ShareImage, [4, t(p.InitShareImage(e, r, h))];
                    case 1:
                        return g = l.sent(), console.log("r done"), o.opponents.forEach(function(e) {
                            delete e.photo, delete e.name
                        }), [4, platform.updateStatues(Object.assign({
                            type: "challenge_leaderboard"
                        }, {
                            challenge_info: o
                        }), {
                            image: g,
                            text: "[Level " + e + "] " + platform.userInfo.name + " scored " + s.score + "s",
                            cta: "Play",
                            template: "challenge_leaderboard"
                        })];
                    case 2:
                        return l.sent(), [2]
                }
            })
        })
    }

    function n() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(a) {
                return e = [{
                    playerId: "1838821619562248",
                    name: "six",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 1.5
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 1.8
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 1.3
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 2.3
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: 2.6
                }, {
                    playerId: "1999570236824571",
                    name: "terran",
                    photo: "https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=1999570236824571&height=256&width=256&ext=1549697352&ext=1549697352&hash=AeSu9vsQERgRqqFb",
                    score: .3
                }], t = new ShareImage, app.stage.addChild(t.InitShareImage(10, 0, e)), [2]
            })
        })
    }

    function o(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var n, o, r, h, p, g, l, c, g, m, u;
            return __generator(this, function(d) {
                switch (d.label) {
                    case 0:
                        return platform instanceof PlatformFB ? "SOLO" == FBInstant.context.getType() ? [2] : (n = app.model, o = platform.challenge_info, platform.challenge_info = null, r = FBInstant.context.isSizeBetween(3, null), h = r && r.answer, [4, FBInstant.context.getPlayersAsync()]) : [2];
                    case 1:
                        if (p = d.sent() || [], p = p.filter(function(e) {
                                return e.getID() != FBInstant.player.getID()
                            }), o && !(o.senderId == platform.userInfo.id && o.opponents.length <= 2)) return [3, 6];
                        g = "", !h && p.length > 0 && (g = p[0].getName()), console.log("sending challenge"), d.label = 2;
                    case 2:
                        return d.trys.push([2, 4, , 5]), [4, a(e, t, g)];
                    case 3:
                        return d.sent(), [3, 5];
                    case 4:
                        return l = d.sent(), console.log("sending challenge failed", l), [3, 5];
                    case 5:
                        return console.log("sending challenge done"), [3, 16];
                    case 6:
                        if (1 != o.opponents.length) return [3, 11];
                        c = o.opponents[0], console.log("sending challenge result"), g = h ? c.name : "", d.label = 7;
                    case 7:
                        return d.trys.push([7, 9, , 10]), [4, i(e, t, g, c)];
                    case 8:
                        return d.sent(), [3, 10];
                    case 9:
                        return m = d.sent(), console.log("sending challenge result failed", m), [3, 10];
                    case 10:
                        return console.log("sending challenge result done"), [3, 16];
                    case 11:
                        console.log("sending challenge leaderbooard"), d.label = 12;
                    case 12:
                        return d.trys.push([12, 14, , 15]), [4, s(e, t, o.opponents)];
                    case 13:
                        return d.sent(), [3, 15];
                    case 14:
                        return u = d.sent(), console.log("sending challenge leaderbooard failed", u), [3, 15];
                    case 15:
                        console.log("sending challenge leaderbooard done"), d.label = 16;
                    case 16:
                        return [2]
                }
            })
        })
    }

    function r(e, t) {
        return __awaiter(this, void 0, void 0, function() {
            var a;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return i.trys.push([0, 2, , 3]), [4, Promise.race([Promise.all([new Promise(function(e) {
                            return setTimeout(e, 3e3)
                        }), o(e, t)]), new Promise(function(e) {
                            return setTimeout(e, 6e3)
                        })])];
                    case 1:
                        return i.sent(), [3, 3];
                    case 2:
                        return a = i.sent(), console.log("error", a), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })
    }

    function h(e) {
        return __awaiter(this, void 0, void 0, function() {
            var t, a, i, s;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!(platform instanceof PlatformFB)) return [2];
                        if ("SOLO" == FBInstant.context.getType()) return [2];
                        t = app.model, a = "context." + FBInstant.context.getID(), n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 4]), [4, FBInstant.getLeaderboardAsync(a)];
                    case 2:
                        return i = n.sent(), i.setScoreAsync(e, ""), [3, 4];
                    case 3:
                        return s = n.sent(), [3, 4];
                    case 4:
                        return [4, FBInstant.updateAsync({
                            action: "LEADERBOARD",
                            name: a
                        })];
                    case 5:
                        return n.sent(), [2]
                }
            })
        })
    }

    function p(e, a, i) {
        return void 0 === i && (i = !1), __awaiter(this, void 0, void 0, function() {
            var s, n, o, r, h;
            return __generator(this, function(p) {
                switch (p.label) {
                    case 0:
                        s = ["Wow, it's real cool.", "Clear up all the snow!", "Let me help you!"], p.label = 1;
                    case 1:
                        return p.trys.push([1, 7, , 8]), n = new ShareImage, o = n.InitShareCommon("share" + Math.randInt(1, 3) + "_jpg", FBInstant.player.getPhoto()), [4, t(o)];
                    case 2:
                        return r = p.sent(), console.log("r img done"), i ? [3, 4] : [4, platform.updateStatues(Object.assign({
                            type: e
                        }, a), {
                            text: s.random(),
                            image: r,
                            cta: "Play",
                            template: e
                        })];
                    case 3:
                        return p.sent(), [3, 6];
                    case 4:
                        return [4, platform.share({
                            img: r,
                            text: s.random(),
                            cta: "Play",
                            data: Object.assign({
                                type: e
                            }, a)
                        })];
                    case 5:
                        p.sent(), p.label = 6;
                    case 6:
                        return [3, 8];
                    case 7:
                        return h = p.sent(), console.log("update Failed" + JSON.stringify(h)), [3, 8];
                    case 8:
                        return [2]
                }
            })
        })
    }

    function g(e, a) {
        return __awaiter(this, void 0, void 0, function() {
            var i, s, n, o, r, h;
            return __generator(this, function(p) {
                switch (p.label) {
                    case 0:
                        return i = {
                            photo: FBInstant.player.getPhoto(),
                            playerId: FBInstant.player.getID(),
                            name: FBInstant.player.getName(),
                            score: a
                        }, s = {
                            level: e,
                            senderId: i.playerId,
                            opponents: [i]
                        }, n = "My score is " + a + "s! Can you do better?", console.log("r image"), o = new ShareImage, [4, t(o.InitShareImage1(e, i.photo, a))];
                    case 1:
                        return r = p.sent(), console.log("r done"), s.opponents.forEach(function(e) {
                            delete e.photo, delete e.name
                        }), [4, platform.share({
                            img: r,
                            text: "[Level " + e + "] " + n,
                            cta: "CHALLENGE",
                            data: Object.assign({
                                type: "challenge"
                            }, {
                                challenge_info: s
                            })
                        })];
                    case 2:
                        return h = p.sent(), [2, h]
                }
            })
        })
    }
    e.testl = n, e.challengePost = r, e.sendLeadboardUpdate = h, e.sendGenericUpdate = p, e.challengeShare = g
}(ShareHelper || (ShareHelper = {})), egret.Bitmap.prototype.pos = function(e, t, a, i) {
    this.x = e, this.y = t, this.width = a, this.height = i, this.anchorOffsetX = a / 2, this.anchorOffsetY = i / 2
};
var ShareImage = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.UserName = [], t.UserID = [], t.UserImage = [], t.UserScore = [], t.x = 20, t.y = 500, t
    }
    return __extends(t, e), t.prototype.InitShareCommon = function(e, t) {
        this.NumReady = 1, this.NumReadyNow = 0;
        var a = new egret.Bitmap(RES.getRes(e));
        return this.addChild(a), a.pos(300, 157, 600, 314), this.CreateImageHead2(80, 80, t), this
    }, t.prototype.InitShareImage1 = function(e, t, a) {
        return this.NumReady = 1, this.NumReadyNow = 0, this.CreateImageBg("share_challenge_bg1_png", e, 1), this.CreateImageHead(300, 100, t, 1, 0), this.CreateLabelScore(25, 150, a, 1), this
    }, t.prototype.InitShareImage2 = function(e, t, a) {
        return this.NumReady = 2, this.NumReadyNow = 0, console.log("shareimgphoto:" + t), console.log("shareimgscore:" + a), this.CreateImageBg("share_challenge_bg2_png", e, 2), a[0] <= a[1] ? this.CreateImageKing(135, 167, 1) : this.CreateImageKing(465, 167, 2), this.CreateLabelScore(135, 280, a[0], 2), this.CreateLabelScore(465, 280, a[1], 2), this.CreateImageHead(135, 167, t[0], 1, 0), this.CreateImageHead(465, 167, t[1], 1, 0), this
    }, t.prototype.InitShareImage = function(e, t, a) {
        var i = a.length;
        i > 6 && (i = 6), this.NumIndex = t, this.NumReady = i, this.NumReadyNow = 0;
        var s = a.map(function(e) {
                return e.name
            }),
            n = a.map(function(e) {
                return e.photo
            }),
            o = a.map(function(e) {
                return e.score
            });
        return this.CreateImageBg("share_challenge_bg3_png", e, 3), 3 == i ? (this.CreateImageKing(300, 140, 2), this.CreateLabelScore(120, 280, o[1], 3), this.CreateLabelScore(300, 280, o[0], 3), this.CreateLabelScore(480, 280, o[2], 3), this.CreateLabelName(120, 238, s[1], 1), this.CreateLabelName(300, 238, s[0], 0), this.CreateLabelName(480, 238, s[2], 2), this.CreateImageHead(120, 140, n[1], 3, 2), this.CreateImageHead(300, 140, n[0], 2, 1), this.CreateImageHead(480, 140, n[2], 3, 3)) : 4 == i ? (this.CreateImageKing(90, 140, 2), this.CreateLabelScore(90, 280, o[0], 3), this.CreateLabelScore(230, 280, o[1], 3), this.CreateLabelScore(370, 280, o[2], 3), this.CreateLabelScore(510, 280, o[3], 3), this.CreateLabelName(90, 238, s[0], 0), this.CreateLabelName(230, 238, s[1], 1), this.CreateLabelName(370, 238, s[2], 2), this.CreateLabelName(510, 238, s[3], 3), this.CreateImageHead(90, 140, n[0], 2, 1), this.CreateImageHead(230, 140, n[1], 3, 2), this.CreateImageHead(370, 140, n[2], 3, 3), this.CreateImageHead(510, 140, n[3], 3, 4)) : 5 == i ? (this.CreateImageKing(80, 140, 2), this.CreateLabelScore(80, 280, o[0], 3), this.CreateLabelScore(340, 90, o[1], 3), this.CreateLabelScore(540, 90, o[2], 3), this.CreateLabelScore(340, 220, o[3], 3), this.CreateLabelScore(540, 220, o[4], 3), this.CreateLabelName(80, 238, s[0], 0), this.CreateLabelName(260, 155, s[1], 1), this.CreateLabelName(440, 155, s[2], 2), this.CreateLabelName(260, 285, s[3], 3), this.CreateLabelName(440, 285, s[4], 4), this.CreateImageHead(80, 140, n[0], 2, 1), this.CreateImageHead(260, 90, n[1], 3, 2), this.CreateImageHead(440, 90, n[2], 3, 3), this.CreateImageHead(260, 220, n[3], 3, 4), this.CreateImageHead(440, 220, n[4], 3, 5)) : (this.CreateImageKing(260, 90, 3), this.CreateLabelScore(160, 90, o[1], 3), this.CreateLabelScore(340, 90, o[0], 3), this.CreateLabelScore(520, 90, o[2], 3), this.CreateLabelScore(160, 220, o[3], 3), this.CreateLabelScore(340, 220, o[4], 3), this.CreateLabelScore(520, 220, o[5], 3), this.CreateLabelName(80, 150, s[1], 1), this.CreateLabelName(260, 150, s[0], 0), this.CreateLabelName(440, 150, s[2], 2), this.CreateLabelName(80, 280, s[3], 3), this.CreateLabelName(260, 280, s[4], 4), this.CreateLabelName(440, 280, s[5], 5), this.CreateImageHead(80, 90, n[1], 3, 2), this.CreateImageHead(260, 90, n[0], 3, 1), this.CreateImageHead(440, 90, n[2], 3, 3), this.CreateImageHead(80, 220, n[3], 3, 4), this.CreateImageHead(260, 220, n[4], 3, 5), this.CreateImageHead(440, 220, n[5], 3, 6)), this
    }, t.prototype.CreateImageBg = function(e, t, a) {
        var i = new egret.Bitmap(RES.getRes(e));
        this.addChild(i), i.pos(300, 157, 600, 314);
        var s = new egret.TextField;
        this.addChild(s), s.textColor = 16767243, s.size = 35, s.bold = !0, s.text = "LEVEL " + t, 1 == a ? (s.x = 25, s.y = 50, s.anchorOffsetX = 0) : 2 == a ? (s.x = 300, s.y = 50, s.size = 40, s.anchorOffsetX = s.width / 2) : 3 == a && (s.x = 580, s.y = 28, s.size = 32, s.anchorOffsetX = s.width), s.anchorOffsetY = s.height / 2
    }, t.prototype.CreateImageKing = function(e, t, a) {
        var i = new egret.Bitmap(RES.getRes("share_crown_png"));
        this.addChild(i), t -= 1 == a ? 105 : 2 == a ? 85 : 55, i.pos(e, t, 66, 58)
    }, t.prototype.CreateImageHead = function(e, t, a, i, s) {
        var n = this,
            o = 150;
        2 == i ? o = 104 : 3 == i && (o = 72);
        var r = new egret.Bitmap;
        this.addChild(r), r.pos(e, t, o, o), RES.getResByUrl(a, function(e) {
            r.texture = e;
            var t = new egret.Shape;
            t.graphics.beginFill(255), t.graphics.drawCircle(r.x, r.y, o / 2), t.graphics.endFill(), n.addChild(t), r.mask = t, n.NumReadyNow++, n.NumReadyNow >= n.NumReady && (console.log("准备好绘图了"), n.dispatchEventWith("ready_2_draw"))
        }, this, RES.ResourceItem.TYPE_IMAGE);
        var h = new egret.Bitmap(RES.getRes("share_challenge_head" + i + "_png"));
        if (this.addChild(h), h.pos(e, t, h.width, h.height), i > 1) {
            var p = new egret.TextField;
            this.addChild(p), p.x = e, 2 == i ? p.y = t + 53 : p.y = t + 30, p.bold = !0, p.text = s + "", p.size = 22, p.anchorOffsetX = p.width / 2, p.anchorOffsetY = p.height / 2
        }
    }, t.prototype.CreateImageHead2 = function(e, t, a) {
        var i = this,
            s = 100,
            n = new egret.Bitmap;
        this.addChild(n), n.pos(e, t, s, s), RES.getResByUrl(a, function(e) {
            n.texture = e;
            var t = new egret.Shape;
            t.graphics.beginFill(255), t.graphics.drawCircle(n.x, n.y, s / 2), t.graphics.endFill(), i.addChild(t), n.mask = t, i.NumReadyNow++, i.NumReadyNow >= i.NumReady && (console.log("准备好绘图了"), i.dispatchEventWith("ready_2_draw"))
        }, this, RES.ResourceItem.TYPE_IMAGE);
        var o = new egret.Bitmap(RES.getRes("sharehead_png"));
        this.addChild(o), o.pos(e, t, 118, 118)
    }, t.prototype.CreateLabelScore = function(e, t, a, i) {
        var s = new egret.TextField;
        this.addChild(s), s.x = e, s.y = t, s.bold = !0, s.text = a + " s", 1 == i ? (s.size = 40, s.anchorOffsetX = 0) : 2 == i ? (s.size = 36, s.anchorOffsetX = s.width / 2) : (s.size = 24, s.anchorOffsetX = s.width / 2), s.anchorOffsetY = s.height / 2
    }, t.prototype.CreateLabelName = function(e, t, a, i) {
        var s = new egret.TextField;
        this.addChild(s), s.x = e, s.y = t, s.text = a, s.size = 17, s.width > 130 && (s.width = 130), s.wordWrap = !0, i == this.NumIndex && (s.textColor = 16767243), s.anchorOffsetX = s.width / 2, s.anchorOffsetY = s.height / 2
    }, t
}(egret.Sprite);
__reflect(ShareImage.prototype, "ShareImage");