var __reflect = this && this.__reflect || function(t, e, n) {
        t.__class__ = e, n ? n.push(e) : n = [e], t.__types__ = t.__types__ ? n.concat(t.__types__) : n
    },
    __extends = this && this.__extends || function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        n.prototype = e.prototype, t.prototype = new n
    },
    __awaiter = this && this.__awaiter || function(t, e, n, i) {
        return new(n || (n = Promise))(function(s, o) {
            function a(t) {
                try {
                    c(i.next(t))
                } catch (e) {
                    o(e)
                }
            }

            function r(t) {
                try {
                    c(i["throw"](t))
                } catch (e) {
                    o(e)
                }
            }

            function c(t) {
                t.done ? s(t.value) : new n(function(e) {
                    e(t.value)
                }).then(a, r)
            }
            c((i = i.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        function n(t) {
            return function(e) {
                return i([t, e])
            }
        }

        function i(n) {
            if (s) throw new TypeError("Generator is already executing.");
            for (; c;) try {
                if (s = 1, o && (a = o[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(a = a.call(o, n[1])).done) return a;
                switch (o = 0, a && (n = [0, a.value]), n[0]) {
                    case 0:
                    case 1:
                        a = n;
                        break;
                    case 4:
                        return c.label++, {
                            value: n[1],
                            done: !1
                        };
                    case 5:
                        c.label++, o = n[1], n = [0];
                        continue;
                    case 7:
                        n = c.ops.pop(), c.trys.pop();
                        continue;
                    default:
                        if (a = c.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                            c = 0;
                            continue
                        }
                        if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                            c.label = n[1];
                            break
                        }
                        if (6 === n[0] && c.label < a[1]) {
                            c.label = a[1], a = n;
                            break
                        }
                        if (a && c.label < a[2]) {
                            c.label = a[2], c.ops.push(n);
                            break
                        }
                        a[2] && c.ops.pop(), c.trys.pop();
                        continue
                }
                n = e.call(t, c)
            } catch (i) {
                n = [6, i], o = 0
            } finally {
                s = a = 0
            }
            if (5 & n[0]) throw n[1];
            return {
                value: n[0] ? n[1] : void 0,
                done: !0
            }
        }
        var s, o, a, r, c = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return r = {
            next: n(0),
            "throw": n(1),
            "return": n(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this
        }), r
    },
    Main = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t), e.prototype.createChildren = function() {
            t.prototype.createChildren.call(this), egret.lifecycle.addLifecycleListener(function(t) {}), egret.lifecycle.onPause = function() {
                egret.ticker.pause()
            }, egret.lifecycle.onResume = function() {
                egret.ticker.resume()
            };
            var e = new AssetAdapter;
            egret.registerImplementation("eui.IAssetAdapter", e), egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter), this.runGame()["catch"](function(t) {
                console.log(t)
            })
        }, e.prototype.runGame = function() {
            return __awaiter(this, void 0, void 0, function() {
                var t, e;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, this.loadResource()];
                        case 1:
                            return n.sent(), this.createGameScene(), [4, RES.getResAsync("description_json")];
                        case 2:
                            return t = n.sent(), this.startAnimation(t), [4, platform.login()];
                        case 3:
                            return n.sent(), [4, platform.getUserInfo()];
                        case 4:
                            return e = n.sent(), console.log(e), [2]
                    }
                })
            })
        }, e.prototype.loadResource = function() {
            return __awaiter(this, void 0, void 0, function() {
                var t, e;
                return __generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return n.trys.push([0, 4, , 5]), t = new LoadingUI, this.stage.addChild(t), [4, RES.loadConfig("resource/default.res.json", "resource/")];
                        case 1:
                            return n.sent(), [4, this.loadTheme()];
                        case 2:
                            return n.sent(), [4, RES.loadGroup("preload", 0, t)];
                        case 3:
                            return n.sent(), this.stage.removeChild(t), [3, 5];
                        case 4:
                            return e = n.sent(), console.error(e), [3, 5];
                        case 5:
                            return [2]
                    }
                })
            })
        }, e.prototype.loadTheme = function() {
            var t = this;
            return new Promise(function(e, n) {
                var i = new eui.Theme("resource/default.thm.json", t.stage);
                i.addEventListener(eui.UIEvent.COMPLETE, function() {
                    e()
                }, t)
            })
        }, e.prototype.createGameScene = function() {
            Fg.getInstance().mainGame = this, GameSound.getInstance().startSound(this)
        }, e.prototype.createBitmapByName = function(t) {
            var e = new egret.Bitmap,
                n = RES.getRes(t);
            return e.texture = n, e
        }, e.prototype.startAnimation = function(t) {
            var e = this,
                n = new egret.HtmlTextParser,
                i = t.map(function(t) {
                    return n.parse(t)
                }),
                s = this.textfield,
                o = -1,
                a = function() {
                    o++, o >= i.length && (o = 0);
                    var t = i[o];
                    s.textFlow = t;
                    var n = egret.Tween.get(s);
                    n.to({
                        alpha: 1
                    }, 200), n.wait(2e3), n.to({
                        alpha: 0
                    }, 200), n.call(a, e)
                };
            a()
        }, e.prototype.onButtonClick = function(t) {
            var e = new eui.Panel;
            e.title = "Title", e.horizontalCenter = 0, e.verticalCenter = 0, this.addChild(e)
        }, e
    }(eui.UILayer);
__reflect(Main.prototype, "Main");
var AssetAdapter = function() {
    function t() {}
    return t.prototype.getAsset = function(t, e, n) {
        function i(i) {
            e.call(n, i, t)
        }
        if (RES.hasRes(t)) {
            var s = RES.getRes(t);
            s ? i(s) : RES.getResAsync(t, i, this)
        } else RES.getResByUrl(t, i, this, RES.ResourceItem.TYPE_IMAGE)
    }, t
}();
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var Car = function() {
    function t(t, e, n, i, s) {
        return void 0 === s && (s = !0), this.startScale = .2, this.endScale = 1.2, this.safeDis = 120, this.bodyMc = t, this.speed = i, this.setPos(n), null == this.bodyMc || null == this.startPos || null == this.endPos || this.speed <= 0 || null == e ? void this.destroy() : (this.bodyMc.x = this.startPos.x, this.bodyMc.y = this.startPos.y, this.bodyMc.scaleX = this.startScale, this.bodyMc.scaleY = this.startScale, e.addChild(this.bodyMc), this.isRunning = !1, this.isCrash = !1, this.isShengYin = !1, void(s && this.start()))
    }
    return t.prototype.start = function() {
        this.isRunning || (this.isRunning = !0, Fg.getInstance().mainGame.stage.addEventListener(egret.Event.ENTER_FRAME, this.run, this))
    }, t.prototype.stop = function() {
        this.isRunning = !1, Fg.getInstance().mainGame.stage.removeEventListener(egret.Event.ENTER_FRAME, this.run, this)
    }, t.prototype.destroy = function() {
        this.stop(), Fg.getInstance().removeGoods(this), this.bodyMc && this.bodyMc.parent && this.bodyMc.parent.removeChild(this.bodyMc), this.bodyMc = null, this.startPos = null, this.endPos = null
    }, t.prototype.run = function(t) {
        if (null == this.bodyMc) return this.stop(), void this.destroy();
        this.bodyMc.y += this.speed * this.bodyMc.scaleX, this.bodyMc.x = (this.endPos.x - this.startPos.x) * (this.bodyMc.y - this.startPos.y) / (this.endPos.y - this.startPos.y) + this.startPos.x;
        var e = Math.sin((this.bodyMc.y - this.startPos.y) / (this.endPos.y - this.startPos.y) * Math.PI * .5) * (this.endScale - this.startScale) + this.startScale;
        if (this.bodyMc.scaleX = e, this.bodyMc.scaleY = e, this.bodyMc.y >= this.endPos.y) return this.stop(), void this.destroy();
        if (!this.isCrash && !(this.bodyMc.y - Fg.getInstance().player.y > 45 || this.bodyMc.y - Fg.getInstance().player.y < -45)) {
            var n = (this.bodyMc.x - Fg.getInstance().player.x) * (this.bodyMc.x - Fg.getInstance().player.x) + (this.bodyMc.y - Fg.getInstance().player.y) * (this.bodyMc.y - Fg.getInstance().player.y),
                i = this.safeDis - 45;
            i = 0 > i ? 0 : i, i * i > n ? (this.isCrash = !0, Fg.getInstance().player.x < this.bodyMc.x ? this.hitMiddlePlayer(!0, this.bodyMc.x - this.safeDis) : this.hitMiddlePlayer(!1, this.bodyMc.x + this.safeDis)) : n < this.safeDis * this.safeDis && (this.isCrash = !0, Fg.getInstance().player.x < this.bodyMc.x ? this.hitSidePlayer(!0) : this.hitSidePlayer(!1))
        }
    }, t.prototype.hitMiddlePlayer = function(t, e) {
        Fg.getInstance().player.crashMiddleCar(t, e)
    }, t.prototype.hitSidePlayer = function(t) {
        Fg.getInstance().player.crashSideCar(t)
    }, t.prototype.setPos = function(t) {
        switch (t) {
            case 0:
                this.startPos = new egret.Point(370, 258), this.endPos = new egret.Point(44, 536);
                break;
            case 1:
                this.startPos = new egret.Point(377, 262), this.endPos = new egret.Point(46, 515);
                break;
            case 2:
                this.startPos = new egret.Point(413, 260), this.endPos = new egret.Point(750, 528);
                break;
            case 3:
                this.startPos = new egret.Point(398, 263), this.endPos = new egret.Point(392, 556);
                break;
            case 4:
                this.startPos = new egret.Point(425, 253), this.endPos = new egret.Point(843, 528)
        }
    }, t
}();
__reflect(Car.prototype, "Car");
var CJinbi = function() {
    function t(t, e, n, i, s) {
        return void 0 === s && (s = !0), this.startScale = .2, this.endScale = 1.2, this.safeDis = 120, this.bodyMc = t, this.speed = i, this.setPos(n), null == this.bodyMc || null == this.startPos || null == this.endPos || this.speed <= 0 || null == e ? void this.destroy() : (this.bodyMc.x = this.startPos.x, this.bodyMc.y = this.startPos.y, this.bodyMc.scaleX = this.startScale, this.bodyMc.scaleY = this.startScale, e.addChild(this.bodyMc), this.isRunning = !1, this.isCrash = !1, void(s && this.start()))
    }
    return t.prototype.start = function() {
        this.isRunning || (this.isRunning = !0, Fg.getInstance().mainGame.stage.addEventListener(egret.Event.ENTER_FRAME, this.run, this))
    }, t.prototype.stop = function() {
        this.isRunning = !1, Fg.getInstance().mainGame.stage.removeEventListener(egret.Event.ENTER_FRAME, this.run, this)
    }, t.prototype.destroy = function() {
        this.stop(), Fg.getInstance().removeGoods(this), this.bodyMc && this.bodyMc.parent && this.bodyMc.parent.removeChild(this.bodyMc), this.bodyMc = null, this.startPos = null, this.endPos = null
    }, t.prototype.run = function(t) {
        if (null == this.bodyMc) return this.stop(), void this.destroy();
        this.bodyMc.y += this.speed * this.bodyMc.scaleX, this.bodyMc.x = (this.endPos.x - this.startPos.x) * (this.bodyMc.y - this.startPos.y) / (this.endPos.y - this.startPos.y) + this.startPos.x;
        var e = Math.sin((this.bodyMc.y - this.startPos.y) / (this.endPos.y - this.startPos.y) * Math.PI * .5) * (this.endScale - this.startScale) + this.startScale;
        if (this.bodyMc.scaleX = e, this.bodyMc.scaleY = e, this.bodyMc.y >= this.endPos.y) return this.stop(), void this.destroy();
        if (!this.isCrash && !(this.bodyMc.y - Fg.getInstance().player.y > 35 || this.bodyMc.y - Fg.getInstance().player.y < -35)) {
            var n = (this.bodyMc.x - Fg.getInstance().player.x) * (this.bodyMc.x - Fg.getInstance().player.x) + (this.bodyMc.y - Fg.getInstance().player.y) * (this.bodyMc.y - Fg.getInstance().player.y),
                i = this.safeDis - 35;
            i = 0 > i ? 0 : i, i * i > n ? (this.isCrash = !0, Fg.getInstance().player.x < this.bodyMc.x ? this.hitMiddlePlayer(!0, this.bodyMc.x - this.safeDis) : this.hitMiddlePlayer(!1, this.bodyMc.x + this.safeDis)) : n < this.safeDis * this.safeDis && (this.isCrash = !0, Fg.getInstance().player.x < this.bodyMc.x ? this.hitSidePlayer(!0) : this.hitSidePlayer(!1))
        }
    }, t.prototype.hitMiddlePlayer = function(t, e) {
        this.hitPlayer()
    }, t.prototype.hitSidePlayer = function(t) {
        this.hitPlayer()
    }, t.prototype.hitPlayer = function() {
        GameSound.getInstance().playXiaoSound("jinbi_mp3"), GameMed.jb += Fg.shu_jiajinbi;
        var t = new DateEvent(DateEvent.JiaFen);
        Fg.getInstance().mainGame.dispatchEvent(t);
        var e = Fg.getInstance().getMc("xingxing");
        if (e.gotoAndPlay(1), e.scaleX = this.bodyMc.scaleX, e.scaleY = this.bodyMc.scaleY, e.x = this.bodyMc.x, e.y = this.bodyMc.y, this.bodyMc && this.bodyMc.parent) {
            this.bodyMc.parent.getChildIndex(this.bodyMc);
            this.bodyMc.parent.addChild(e), this.bodyMc.parent.removeChild(this.bodyMc)
        }
    }, t.prototype.setPos = function(t) {
        switch (t) {
            case 4:
                this.startPos = new egret.Point(367, 251), this.endPos = new egret.Point(5, 525);
                break;
            case 1:
                this.startPos = new egret.Point(385, 258), this.endPos = new egret.Point(193, 514);
                break;
            case 2:
                this.startPos = new egret.Point(416, 260), this.endPos = new egret.Point(617, 528);
                break;
            case 3:
                this.startPos = new egret.Point(447, 258), this.endPos = new egret.Point(838, 435);
                break;
            case 0:
                this.startPos = new egret.Point(400, 258), this.endPos = new egret.Point(397, 516)
        }
    }, t
}();
__reflect(CJinbi.prototype, "CJinbi");
var CoverMed = function(t) {
    function e() {
        var e = t.call(this) || this;
        e.skinName = "CoverMedSkin", Fg.getInstance().mainGame.addChild(e), SoundUtils.instance().playReadySound(), e.title = Fg.getInstance().getMc("title"), TcUtil.setPositionMc(e.title, 1008, 91), Fg.getInstance().mainGame.addChild(e.title), "zh-CN" == egret.Capabilities.language ? e.title.gotoAndStop(1) : e.title.gotoAndStop(2), e.soundBn = Fg.getInstance().getMc("soundBn"), TcUtil.setPositionMc(e.soundBn, 777, 435), Fg.getInstance().mainGame.addChild(e.soundBn), GameSound.getInstance().isAllSound ? e.soundBn.gotoAndStop(1) : e.soundBn.gotoAndStop(2);
        var n = egret.Tween.get(e.zu1);
        n.to({
            x: 246
        }, 250, egret.Ease.bounceOut);
        var i = egret.Tween.get(e.title);
        return i.to({
            x: 408
        }, 250, egret.Ease.bounceOut).call(function() {
            e.start()
        }), e.zwsf = Fg.getInstance().getBitmap("zwsf"), Fg.getInstance().mainGame.addChild(e.zwsf), e.zwsf.x = 0, e.zwsf.y = 400, 0 == Fg.getInstance().pj4 ? e.moreBn.visible = !1 : e.zwsf.visible = !1, e
    }
    return __extends(e, t), e.prototype.start = function() {
        this.addEvent(this.moreBn), this.addEvent(this.startBn), this.soundBn.touchEnabled = !0, this.soundBn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)
    }, e.prototype.stop = function() {
        this.rmEvent(this.moreBn), this.rmEvent(this.startBn), this.soundBn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)
    }, e.prototype.destroy = function() {
        for (this.stop(); Fg.getInstance().mainGame.numChildren > 0;) Fg.getInstance().mainGame.removeChildAt(0)
    }, e.prototype.addEvent = function(t) {
        t.touchEnabled = !0, t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, BT_fuzhu.getInstance().Bit_f, this), t.addEventListener(egret.TouchEvent.TOUCH_END, BT_fuzhu.getInstance().Bit_f, this), t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, BT_fuzhu.getInstance().Bit_f, this), t.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)
    }, e.prototype.rmEvent = function(t) {
        t.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, BT_fuzhu.getInstance().Bit_f, this), t.removeEventListener(egret.TouchEvent.TOUCH_END, BT_fuzhu.getInstance().Bit_f, this), t.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, BT_fuzhu.getInstance().Bit_f, this), t.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)
    }, e.prototype.onButton = function(t) {
        var e = t.target.name;
        switch (e) {
            case "soundBn":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), 1 == this.soundBn.currentFrame ? (this.soundBn.gotoAndStop(2), GameSound.getInstance().setIsAllSound(!1), SoundUtils.instance().stopReadySound()) : (this.soundBn.gotoAndStop(1), GameSound.getInstance().setIsAllSound(!0), SoundUtils.instance().playReadySound());
                break;
            case "moreBn":
                GameSound.getInstance().playXiaoSound("点击按钮", 0, -.5), Fg.getInstance().moreGames();
                break;
            case "startBn":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), this.destroy(), SoundUtils.instance().stopReadySound(), new XuanGuan
        }
    }, e.prototype.partAdded = function(e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this)
    }, e
}(eui.Component);
__reflect(CoverMed.prototype, "CoverMed", ["eui.UIComponent", "egret.DisplayObject"]);
var DateEvent = function(t) {
    function e(e, n, i) {
        return void 0 === n && (n = !1), void 0 === i && (i = !1), t.call(this, e, n, i) || this
    }
    return __extends(e, t), e.DATE01 = "01", e.DATE02 = "02", e.DATE03 = "03", e.DATE04 = "04", e.DATE05 = "05", e.DATE06 = "06", e.GuoGuan = "guoguan", e.JiaFen = "jiafen", e.ChongWan = "chongwan", e
}(egret.Event);
__reflect(DateEvent.prototype, "DateEvent");
var Fg = function() {
    function t() {
        this.curLevel = 1, this.throwLevel = 1, this.totalLevel = 17, this.aa2 = "win", this.bb2 = "fail", this.cc2 = "stop", this.gameName = "jidi3dmotuo", this.pj4 = !1, this.goodAr = [], this.bgMusic = this.gameName, this.codear = new Array, this.codear[1] = "A", this.codear[2] = "B", this.codear[3] = "C", this.codear[4] = "D", this.codear[5] = "E", this.codear[6] = "F", this.codear[7] = "G", this.codear[8] = "H", this.codear[9] = "I", this.codear[10] = "J", this.codear[11] = "K", this.codear[12] = "L", this.codear[13] = "M", this.codear[14] = "N", this.codear[15] = "O", this.codear[16] = "P", this.codear[17] = "Q", this.codear[18] = "R", this.codear[19] = "S", this.codear[20] = "T", this.codear[21] = "U", this.codear[22] = "V", this.codear[23] = "W", this.codear[24] = "X", this.codear[25] = "Y", this.codear[26] = "Z", this.kb = new KeyBoard
    }
    return t.prototype.startGame = function() {
        t.getInstance().read(), SoundUtils.instance().initSound(), new CoverMed
    }, t.prototype.removeGoods = function(t) {
        if (null != t && null != this.goodAr && 0 != this.goodAr.length) {
            var e = this.goodAr.indexOf(t);
            e > -1 && this.goodAr.splice(e, 1)
        }
    }, t.prototype.rm = function(t) {
        t && t.parent && t.parent.removeChild(t)
    }, t.prototype.getMc = function(t) {
        var e = RES.getRes(t + "_json"),
            n = RES.getRes(t + "_png"),
            i = new egret.MovieClipDataFactory(e, n),
            s = new egret.MovieClip(i.generateMovieClipData());
        return s.name = t, s.touchEnabled = !0, s
    }, t.prototype.getBitmap = function(t) {
        var e = new egret.Bitmap,
            n = RES.getRes(t + "_png");
        return e.texture = n, e.name = t, e.touchEnabled = !0, e
    }, t.prototype.save = function(t, e) {
        t >= this.throwLevel - 1 && (this.throwLevel = t + 1), this.throwLevel > this.totalLevel && (this.throwLevel = this.totalLevel), egret.localStorage.setItem(this.gameName + "lv", this.throwLevel + "");
        for (var n = 0; 7 > n; n++) egret.localStorage.setItem(this.gameName + "goumai" + n, e[n] + "")
    }, t.saveData_adshu = function() {
        egret.localStorage.setItem("adDate", (new Date).getTime().toString()), egret.localStorage.setItem("adNum", t.shu_guangao.toString()), egret.localStorage.setItem("motoujb", t.shu_jinbi.toString()), egret.localStorage.setItem("motoucj", t.shu_chengjiu.toString())
    }, t.prototype.read = function() {
        var e = egret.localStorage.getItem("motoujb");
        e ? t.shu_jinbi = parseInt(e) : t.shu_jinbi = 0;
        var n = egret.localStorage.getItem("motoucj");
        n ? t.shu_chengjiu = parseInt(n) : t.shu_chengjiu = 0;
        var i = egret.localStorage.getItem(this.gameName + "lv");
        i && (this.throwLevel = parseInt(i));
        for (var s = 0; 7 > s; s++) {
            var o = egret.localStorage.getItem(this.gameName + "goumai" + s);
            o && ("false" == o ? t.shu_goumaiAr[s] = !1 : t.shu_goumaiAr[s] = !0)
        }
        var a = egret.localStorage.getItem("adDate"),
            r = new Date;
        if (null == a || "" == a) t.adDate = r.getTime(), t.shu_guangao = 5;
        else {
            t.adDate = parseInt(a);
            var c = egret.localStorage.getItem("adNum");
            null == c || "" == c ? t.shu_guangao = 5 : (r.getTime() - t.adDate) / 36e5 > 24 ? t.shu_guangao = 5 : t.shu_guangao = parseInt(c)
        }
    }, t.prototype.getMaxScore = function() {
        return this.read(), this.maxScore
    }, t.prototype.moreGames = function() {}, t.prototype.Look = function() {
        window.showads()
    }, t.getInstance = function() {
        return null == this._instance && (this._instance = new t), this._instance
    }, t.isSoundPlay = !0, t.jianpan = !1, t.shu_chengjiu = 0, t.shu_jinbi = 451, t.shu_gouwu = 1, t.shu_shijianguan = [50, 55, 60, 60, 70, 60, 50, 50, 50, 50, 50, 50, 55, 55, 55, 55, 55], t.shu_shijian = t.shu_shijianguan[0], t.shu_motouAr = [0, 200, 500, 1e3, 1500, 3500, 6e3], t.shu_textaAr = [10, 14, 20, 35, 61, 112, 200], t.shu_textbAr = [10, 14, 20, 35, 61, 112, 200], t.shu_textcAr = [10, 14, 20, 35, 61, 112, 200], t.shu_textdAr = [10, 14, 20, 35, 61, 112, 200], t.shu_goumaiAr = [!0, !1, !1, !1, !1, !1, !1], t.shu_xuan = 1, t.shu_guoguan = [80, 100, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 220, 220, 350, 350], t.shu_ping = [10, 6, 0], t.shu_jiajinbi = 10, t.wanle = 0, t.shu_guangao = 5, t.shu_gjinbi = 100, t.Backspace = 8, t.TAB = 9, t.Enter = 13, t.Shift = 16, t.Ctrl = 17, t.ESC = 27, t.Spacebar = 32, t.Page_Up = 33, t.Page_Down = 34, t.End = 35, t.Home = 36, t.left = 37, t.up = 38, t.right = 39, t.down = 40, t.Insert = 45, t.Delete = 46, t._0 = 48, t._1 = 49, t._2 = 50, t._3 = 51, t._4 = 52, t._5 = 53, t._6 = 54, t._7 = 55, t._8 = 56, t._9 = 57, t.A = 65, t.B = 66, t.C = 67, t.D = 68, t.E = 69, t.F = 70, t.G = 71, t.H = 72, t.I = 73, t.J = 74, t.K = 75, t.L = 76, t.M = 77, t.N = 78, t.O = 79, t.P = 80, t.Q = 81, t.R = 82, t.S = 83, t.T = 84, t.U = 85, t.V = 86, t.W = 87, t.X = 88, t.Y = 89, t.Z = 90, t.Numpad_0 = 96, t.Numpad_1 = 97, t.Numpad_2 = 98, t.Numpad_3 = 99, t.Numpad_4 = 100, t.Numpad_5 = 101, t.Numpad_6 = 102, t.Numpad_7 = 103, t.Numpad_8 = 104, t.Numpad_9 = 105, t.F1 = 112, t.F2 = 113, t.F3 = 114, t.F4 = 115, t.F5 = 116, t.F6 = 117, t.F7 = 118, t.F8 = 119, t
}();
__reflect(Fg.prototype, "Fg");
var GameMed = function(t) {
    function e() {
        var e = t.call(this) || this;
        e.INIT_SPEED = 4, e.carSpaceTime = 50, e.va = 1, e.vb = 1, e.skinName = "GameMedSkin", Fg.getInstance().mainGame.addChild(e), SoundUtils.instance().playSaidaoSound();
        var n = Math.round(3 * Math.random());
        switch (n) {
            case 1:
                e.xue_z.visible = !1, e.gao_z.visible = !1, e.shan_z.visible = !0;
                break;
            case 2:
                e.xue_z.visible = !1, e.gao_z.visible = !0, e.shan_z.visible = !1;
                break;
            case 3:
                e.xue_z.visible = !0, e.gao_z.visible = !1, e.shan_z.visible = !1
        }
        return Fg.shu_shijian = Fg.shu_shijianguan[Fg.getInstance().curLevel - 1], e.INIT_SPEED += Math.round(Fg.getInstance().curLevel / 3), e.shijian.text = Fg.shu_shijian + "", e.malu_z = Fg.getInstance().getMc("malu_z"), TcUtil.setPositionMc(e.malu_z, 0, 250), Fg.getInstance().mainGame.addChild(e.malu_z), Fg.getInstance().player = new Player, Fg.getInstance().player.x = 397, Fg.getInstance().player.y = 444, Fg.getInstance().mainGame.addChild(Fg.getInstance().player), e.speed = e.INIT_SPEED, e.soundBn = Fg.getInstance().getMc("soundBn"), TcUtil.setPositionMc(e.soundBn, 775, 28), Fg.getInstance().mainGame.addChild(e.soundBn), GameSound.getInstance().isAllSound ? e.soundBn.gotoAndStop(1) : e.soundBn.gotoAndStop(2), Fg.getInstance().goodAr = new Array, e.timer = new egret.Timer(600, 0), e.timer.addEventListener(egret.TimerEvent.TIMER, e.timerFunc, e), e.timer2 = new egret.Timer(1800, 0), e.timer2.addEventListener(egret.TimerEvent.TIMER, e.timerFunc, e), e.start(), e
    }
    return __extends(e, t), e.prototype.start = function() {
        this.isRunning = !0, this.malu_z.gotoAndPlay(1, -1), this.addEvent(this.zantingBn), Fg.getInstance().mainGame.addEventListener(DateEvent.JiaFen, this.onJiaFen, this), document.addEventListener("keydown", this.onkeydown), document.addEventListener("keyup", this.onkeyup), Fg.getInstance().mainGame.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.moveBegin, this), Fg.getInstance().mainGame.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.movechange, this), Fg.getInstance().mainGame.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.moveEnd, this), Fg.getInstance().mainGame.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this), this.soundBn.touchEnabled = !0, this.soundBn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this);
        for (var t = 0; t < Fg.getInstance().goodAr.length; t++) {
            var e = Fg.getInstance().goodAr[t];
            e && e.start()
        }
    }, e.prototype.moveBegin = function(t) {
        this.posStart = new egret.Point(t.stageX, t.stageY)
    }, e.prototype.moveEnd = function(t) {
        Fg.getInstance().player.isLeft = !1, Fg.getInstance().player.isRight = !1
    }, e.prototype.movechange = function(t) {
        t.stageX > this.posStart.x ? (Fg.getInstance().player.isRight = !0, Fg.getInstance().player.isLeft = !1) : (Fg.getInstance().player.isLeft = !0, Fg.getInstance().player.isRight = !1)
    }, e.prototype.stop = function() {
        this.isRunning = !1, this.malu_z.gotoAndStop(1), Fg.getInstance().player.bodyMc.gotoAndStop(1), this.rmEvent(this.zantingBn), Fg.getInstance().mainGame.removeEventListener(DateEvent.JiaFen, this.onJiaFen, this), Fg.getInstance().mainGame.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.moveBegin, this), Fg.getInstance().mainGame.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.movechange, this), Fg.getInstance().mainGame.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.moveEnd, this), document.removeEventListener("keydown", this.onkeydown), document.removeEventListener("keyup", this.onkeyup), Fg.getInstance().mainGame.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this), this.soundBn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this);
        for (var t = 0; t < Fg.getInstance().goodAr.length; t++) {
            var e = Fg.getInstance().goodAr[t];
            e && e.stop()
        }
    }, e.prototype.destroy = function() {
        for (this.stop(), SoundUtils.instance().stopSaidaoSound(), egret.Tween.removeAllTweens(); Fg.getInstance().mainGame.numChildren > 0;) Fg.getInstance().mainGame.removeChildAt(0);
        console.log(Fg.getInstance().goodAr.length), Fg.getInstance().goodAr = null
    }, e.prototype.addEvent = function(t) {
        t.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)
    }, e.prototype.rmEvent = function(t) {
        t.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)
    }, e.prototype.timerFunc = function() {
        this.timer.stop(), this.timer.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this), this.timer2.stop(), this.timer2.removeEventListener(egret.TimerEvent.TIMER, this.timerFunc, this), this.destroy(), new JieSuan
    }, e.prototype.onJiaFen = function() {
        this.Gjinbi.text = e.jb + ""
    }, e.prototype.onButton = function(t) {
        var n = this,
            i = t.target.name;
        switch (i) {
            case "soundBn":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), 1 == this.soundBn.currentFrame ? (this.soundBn.gotoAndStop(2), GameSound.getInstance().setIsAllSound(!1), SoundUtils.instance().stopSaidaoSound()) : (this.soundBn.gotoAndStop(1), GameSound.getInstance().setIsAllSound(!0), SoundUtils.instance().playSaidaoSound());
                break;
            case "zantingBn":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), this.stop(), SoundUtils.instance().stopSaidaoSound(), Fg.getInstance().mainGame.addChildAt(this.zantingjiemian, 99);
                var s = egret.Tween.get(this.zantingjiemian);
                s.to({
                    x: 0
                }, 300).call(function() {
                    n.addEvent(n.zantingBn2), n.addEvent(n.chongwanBn), n.addEvent(n.tuichuBn)
                });
                break;
            case "zantingBn2":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), SoundUtils.instance().playSaidaoSound();
                var s = egret.Tween.get(this.zantingjiemian);
                s.to({
                    x: 800
                }, 300).call(function() {
                    n.rmEvent(n.zantingBn2), n.rmEvent(n.chongwanBn), n.rmEvent(n.tuichuBn), n.start()
                });
                break;
            case "chongwanBn":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), SoundUtils.instance().playSaidaoSound(), e.cj = 0, e.jb = 0, this.rmEvent(this.zantingBn2), this.rmEvent(this.chongwanBn), this.rmEvent(this.tuichuBn), this.destroy(), new e;
                break;
            case "tuichuBn":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), SoundUtils.instance().playSaidaoSound(), e.cj = 0, e.jb = 0, this.rmEvent(this.zantingBn2), this.rmEvent(this.chongwanBn), this.rmEvent(this.tuichuBn), this.destroy(), new XuanGuan
        }
    }, e.prototype.onFrame = function() {
        if (Fg.shu_shijian = Fg.shu_shijian - .024, Fg.shu_shijian > 0) {
            if (this.shijian.text = Fg.shu_shijian.toFixed(2), this.va++, this.vb++, this.vb % (15 - Fg.shu_xuan) == 0) {
                this.vb = 0, e.cj++;
                var t = e.cj / Fg.shu_guoguan[Fg.getInstance().curLevel - 1];
                this.tubiao.x = this.paodao.x + this.tubiao.width + (this.paodao.width - this.tubiao.width) * t, this.Gchengjiu.text = e.cj + "", e.cj > Fg.shu_guoguan[Fg.getInstance().curLevel - 1] && (this.tubiao.x = this.paodao.x + this.paodao.width, this.stop(), this.shengli = Fg.getInstance().getMc("shengli"), TcUtil.setPositionMc(this.shengli, 413, 465), Fg.getInstance().mainGame.addChild(this.shengli), this.shengli.gotoAndPlay(1), this.timer2.start())
            }
            if (this.va >= this.carSpaceTime) {
                this.va = 0;
                var n = 26 - 1.5 * Fg.getInstance().curLevel;
                n = 5 > n ? 5 : n, this.carSpaceTime = Number(Math.random() * n) + n;
                var i = Math.random();
                .8 > i ? this.addCar() : this.addCJinbi()
            }
            Fg.getInstance().player.onStep()
        } else this.shijian.text = "0", this.stop(), this.timer.start()
    }, e.prototype.onkeydown = function(t) {
        Fg.getInstance().player.rundir[t.keyCode] = !0
    }, e.prototype.onkeyup = function(t) {
        Fg.getInstance().player.rundir[t.keyCode] = !1
    }, e.prototype.addCar = function() {
        var t, e, n = Math.floor(3.8 * Math.random()) + 1,
            i = Math.floor(2.9 * Math.random()) + 1;
        if (e = Fg.getInstance().getMc("Ecar"), e.gotoAndStop(n), t = new Car(e, Fg.getInstance().mainGame, i, this.speed, this.isRunning), Fg.getInstance().goodAr.length > 0 && Fg.getInstance().goodAr[Fg.getInstance().goodAr.length - 1].bodyMc && Fg.getInstance().goodAr[Fg.getInstance().goodAr.length - 1].bodyMc.parent) {
            var s = Fg.getInstance().goodAr[Fg.getInstance().goodAr.length - 1].bodyMc.parent.getChildIndex(Fg.getInstance().goodAr[Fg.getInstance().goodAr.length - 1].bodyMc);
            t.bodyMc.parent.getChildIndex(t.bodyMc) > s && t.bodyMc.parent.setChildIndex(t.bodyMc, s)
        }
        Fg.getInstance().goodAr.push(t)
    }, e.prototype.addCJinbi = function() {
        var t, e, n = Math.round(4 * Math.random());
        e = Fg.getInstance().getMc("cjinbi"), t = new CJinbi(e, Fg.getInstance().mainGame, n, this.speed, this.isRunning), Fg.getInstance().goodAr.push(t)
    }, e.cj = 0, e.jb = 0, e
}(eui.Component);
__reflect(GameMed.prototype, "GameMed", ["eui.UIComponent", "egret.DisplayObject"]);
var GouWuMed = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.yemian = 1, e.skinName = "GouWuMedSkin", Fg.getInstance().mainGame.addChild(e), e.zuguanggao.visible = !1, e.motou = Fg.getInstance().getMc("motou"), TcUtil.setPositionMc(e.motou, 400, 167), Fg.getInstance().mainGame.addChild(e.motou), "zh-CN" == egret.Capabilities.language ? (e.maidise.visible = !0, e.zguanggaoBn.visible = !0, e.yguanggaoBn.visible = !1) : (e.maidise2.visible = !0, e.zguanggaoBn.visible = !1, e.yguanggaoBn.visible = !0), e.Gjinbi.text = Fg.shu_jinbi + "", e.Gchengjiu.text = Fg.shu_chengjiu + "", e.texta.text = Fg.shu_textaAr[0] + "", e.textb.text = Fg.shu_textbAr[0] + "", e.textc.text = Fg.shu_textcAr[0] + "", e.textd.text = Fg.shu_textdAr[0] + "", e.shu_gao.text = Fg.shu_guangao + "", Fg.getInstance().mainGame.addChildAt(e.zuguanggao, 99), e.start(), 0 == Fg.getInstance().pj4, e
    }
    return __extends(e, t), e.prototype.start = function() {
        this.addEvent(this.Btyou), this.addEvent(this.Btzuo), this.addEvent(this.fanhuiBn), this.addEvent(this.gouwuBn), this.addEvent(this.ygouwuBn), this.addEvent(this.zguanggaoBn), this.addEvent(this.yguanggaoBn)
    }, e.prototype.stop = function() {
        this.rmEvent(this.Btyou), this.rmEvent(this.Btzuo), this.rmEvent(this.fanhuiBn), this.rmEvent(this.gouwuBn), this.rmEvent(this.ygouwuBn), this.rmEvent(this.zguanggaoBn), this.rmEvent(this.yguanggaoBn)
    }, e.prototype.destroy = function() {
        for (this.stop(); Fg.getInstance().mainGame.numChildren > 0;) Fg.getInstance().mainGame.removeChildAt(0)
    }, e.prototype.addEvent = function(t) {
        t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, BT_fuzhu.getInstance().Bit_f, this), t.addEventListener(egret.TouchEvent.TOUCH_END, BT_fuzhu.getInstance().Bit_f, this), t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, BT_fuzhu.getInstance().Bit_f, this), t.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)
    }, e.prototype.rmEvent = function(t) {
        t.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, BT_fuzhu.getInstance().Bit_f, this), t.removeEventListener(egret.TouchEvent.TOUCH_END, BT_fuzhu.getInstance().Bit_f, this), t.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, BT_fuzhu.getInstance().Bit_f, this), t.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)
    }, e.prototype.onButton = function(t) {
        var e = t.target.name;
        switch (e) {
            case "Btyou":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), 7 != this.yemian && (this.yemian++, this.texta.text = Fg.shu_textaAr[this.yemian - 1] + "", this.textb.text = Fg.shu_textbAr[this.yemian - 1] + "", this.textc.text = Fg.shu_textcAr[this.yemian - 1] + "", this.textd.text = Fg.shu_textdAr[this.yemian - 1] + "", this.motou.gotoAndStop(this.yemian), Fg.shu_goumaiAr[this.yemian - 1] ? (this.zugoumai.visible = !0, this.zubuqian.visible = !1, this.zugouqian.visible = !1, this.gouwuBn.visible = !1, this.ygouwuBn.visible = !1) : Fg.shu_jinbi < Fg.shu_motouAr[this.yemian - 1] ? (this.zubuqian.visible = !0, this.gouwuBn.visible = !1, this.ygouwuBn.visible = !1, this.zugouqian.visible = !1, this.buqian.text = Fg.shu_motouAr[this.yemian - 1] + "") : (this.zubuqian.visible = !1, "zh-CN" == egret.Capabilities.language ? this.gouwuBn.visible = !0 : this.ygouwuBn.visible = !0, this.zugouqian.visible = !0, this.gouqian.text = Fg.shu_motouAr[this.yemian - 1] + ""));
                break;
            case "Btzuo":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), 1 != this.yemian && (this.yemian--, this.texta.text = Fg.shu_textaAr[this.yemian - 1] + "", this.textb.text = Fg.shu_textbAr[this.yemian - 1] + "", this.textc.text = Fg.shu_textcAr[this.yemian - 1] + "", this.textd.text = Fg.shu_textdAr[this.yemian - 1] + "", this.motou.gotoAndStop(this.yemian), Fg.shu_goumaiAr[this.yemian - 1] ? (this.zugoumai.visible = !0, this.zubuqian.visible = !1, this.zugouqian.visible = !1, this.gouwuBn.visible = !1, this.ygouwuBn.visible = !1) : Fg.shu_jinbi < Fg.shu_motouAr[this.yemian - 1] ? (this.zubuqian.visible = !0, this.ygouwuBn.visible = !1, this.gouwuBn.visible = !1, this.zugouqian.visible = !1, this.buqian.text = Fg.shu_motouAr[this.yemian - 1] + "") : (this.zubuqian.visible = !1, "zh-CN" == egret.Capabilities.language ? this.gouwuBn.visible = !0 : this.ygouwuBn.visible = !0, this.zugouqian.visible = !0, this.gouqian.text = Fg.shu_motouAr[this.yemian - 1] + ""));
                break;
            case "fanhuiBn":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), Fg.shu_goumaiAr[this.yemian - 1] && (Fg.shu_xuan = this.yemian), this.destroy(), new XuanGuan;
                break;
            case "gouwuBn":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), Fg.shu_jinbi -= Fg.shu_motouAr[this.yemian - 1], this.Gjinbi.text = Fg.shu_jinbi + "", Fg.shu_goumaiAr[this.yemian - 1] = !0, this.zugouqian.visible = !1, this.zugoumai.visible = !0, this.gouwuBn.visible = !1, this.ygouwuBn.visible = !1, Fg.getInstance().save(Fg.getInstance().curLevel - 1, Fg.shu_goumaiAr), Fg.saveData_adshu();
                break;
            case "guanggaoBn":
                this.guanggao();
                break;
            case "guanbiBn":
                this.rmEvent(this.guanbiBn), this.zuguanggao.visible = !1, this.start()
        }
    }, e.prototype.guanggao = function() {
        Fg.wanle >= 2 && Fg.shu_guangao > 0 ? (Fg.wanle = 0, Fg.shu_guangao--, Fg.shu_jinbi += Fg.shu_gjinbi, Fg.saveData_adshu(), Fg.getInstance().Look()) : (this.stop(), this.zuguanggao.visible = !0, this.addEvent(this.guanbiBn))
    }, e.prototype.partAdded = function(e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this)
    }, e
}(eui.Component);
__reflect(GouWuMed.prototype, "GouWuMed", ["eui.UIComponent", "egret.DisplayObject"]);
var JieSuan = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.skinName = "JieSuanSkin", Fg.getInstance().mainGame.addChild(e), e.zuguanggao.visible = !1, Fg.wanle++, e.shu_gao.text = Fg.shu_guangao + "", e.huochengjiu.text = GameMed.cj + "", Fg.shu_chengjiu += GameMed.cj, e.chengjiu.text = Fg.shu_chengjiu + "", GameMed.cj = 0, e.huojinbi.text = GameMed.jb + "", Fg.shu_jinbi += GameMed.jb, e.jinbi.text = Fg.shu_jinbi + "", GameMed.jb = 0, Fg.shu_shijian >= Fg.shu_ping[0] ? (e.Spingfen.visible = !0, e.Apingfen.visible = !1, e.Bpingfen.visible = !1, e.Cpingfen.visible = !1, e.nextBn.visible = !0, e.zailaiBn.visible = !1, Fg.getInstance().save(Fg.getInstance().curLevel, Fg.shu_goumaiAr), GameSound.getInstance().playXiaoSound("guoguan_mp3"), Fg.saveData_adshu()) : Fg.shu_shijian >= Fg.shu_ping[1] ? (e.Spingfen.visible = !1, e.Apingfen.visible = !0, e.Bpingfen.visible = !1, e.Cpingfen.visible = !1, e.nextBn.visible = !0, e.zailaiBn.visible = !1, Fg.getInstance().save(Fg.getInstance().curLevel, Fg.shu_goumaiAr), GameSound.getInstance().playXiaoSound("guoguan_mp3"), Fg.saveData_adshu()) : Fg.shu_shijian >= Fg.shu_ping[2] ? (e.Spingfen.visible = !1, e.Apingfen.visible = !1, e.Bpingfen.visible = !0, e.Cpingfen.visible = !1, e.nextBn.visible = !0, e.zailaiBn.visible = !1, Fg.getInstance().save(Fg.getInstance().curLevel, Fg.shu_goumaiAr), GameSound.getInstance().playXiaoSound("guoguan_mp3"), Fg.saveData_adshu()) : (e.Spingfen.visible = !1, e.Apingfen.visible = !1, e.Bpingfen.visible = !1, e.Cpingfen.visible = !0, e.nextBn.visible = !1, e.zailaiBn.visible = !0, Fg.getInstance().save(Fg.getInstance().curLevel - 1, Fg.shu_goumaiAr), GameSound.getInstance().playXiaoSound("shibai_mp3"), Fg.saveData_adshu()), "zh-CN" == egret.Capabilities.language ? (e.zguanggaoBn.visible = !0, e.yguanggaoBn.visible = !1) : (e.zguanggaoBn.visible = !1, e.yguanggaoBn.visible = !0), 0 == Fg.getInstance().pj4 && (e.gengduoBn.visible = !1), e.start(), e
    }
    return __extends(e, t), e.prototype.start = function() {
        this.addEvent(this.fanhuiBn), this.addEvent(this.gengduoBn), this.addEvent(this.nextBn), this.addEvent(this.zailaiBn), this.addEvent(this.zguanggaoBn), this.addEvent(this.yguanggaoBn)
    }, e.prototype.stop = function() {
        this.rmEvent(this.fanhuiBn), this.rmEvent(this.gengduoBn), this.rmEvent(this.nextBn), this.rmEvent(this.zailaiBn), this.rmEvent(this.zguanggaoBn), this.rmEvent(this.yguanggaoBn)
    }, e.prototype.destroy = function() {
        for (this.stop(); Fg.getInstance().mainGame.numChildren > 0;) Fg.getInstance().mainGame.removeChildAt(0)
    }, e.prototype.addEvent = function(t) {
        t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, BT_fuzhu.getInstance().Bit_f, this), t.addEventListener(egret.TouchEvent.TOUCH_END, BT_fuzhu.getInstance().Bit_f, this), t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, BT_fuzhu.getInstance().Bit_f, this), t.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)
    }, e.prototype.rmEvent = function(t) {
        t.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, BT_fuzhu.getInstance().Bit_f, this), t.removeEventListener(egret.TouchEvent.TOUCH_END, BT_fuzhu.getInstance().Bit_f, this), t.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, BT_fuzhu.getInstance().Bit_f, this), t.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)
    }, e.prototype.onButton = function(t) {
        var e = t.target.name;
        switch (e) {
            case "fanhuiBn":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), this.destroy(), new XuanGuan;
                break;
            case "gengduoBn":
                GameSound.getInstance().playXiaoSound("点击按钮", 0, -.5), Fg.getInstance().moreGames();
                break;
            case "nextBn":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), this.destroy(), Fg.getInstance().curLevel++, new GameMed;
                break;
            case "zailaiBn":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), this.destroy(), new GameMed;
                break;
            case "guanggaoBn":
                this.guanggao();
                break;
            case "guanbiBn":
                this.rmEvent(this.guanbiBn), this.zuguanggao.visible = !1, this.start()
        }
    }, e.prototype.guanggao = function() {
        Fg.wanle >= 2 && Fg.shu_guangao > 0 ? (Fg.wanle = 0, Fg.shu_guangao--, Fg.shu_jinbi += Fg.shu_gjinbi, Fg.saveData_adshu(), Fg.getInstance().Look()) : (this.stop(), this.zuguanggao.visible = !0, this.addEvent(this.guanbiBn))
    }, e.prototype.partAdded = function(e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this)
    }, e
}(eui.Component);
__reflect(JieSuan.prototype, "JieSuan", ["eui.UIComponent", "egret.DisplayObject"]);
var LoadingUI = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.createView(), e
    }
    return __extends(e, t), e.prototype.createView = function() {
        this.textField = new egret.TextField, this.addChild(this.textField), this.textField.y = 200, this.textField.x = 160, this.textField.width = 480, this.textField.height = 100, this.textField.bold = !0, this.textField.italic = !0, this.textField.strokeColor = 39423, this.textField.size = 40, this.textField.stroke = 1, this.textField.textAlign = "center"
    }, e.prototype.onProgress = function(t, e) {
        var n = t / e,
            i = Math.round(100 * n);
        this.textField.text = i + "%";
        var s = parseInt(100 * t / e + "");
       // egret_4399_h5api.progress(s)
    }, e
}(egret.Sprite);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var BT_fuzhu = function() {
    function t() {}
    return t.prototype.addBg = function(t, e) {
        t = Fg.getInstance().getBitmap(e), TcUtil.setPosition(t, 0, 0), Fg.getInstance().mainGame.addChild(t)
    }, t.prototype.bt_t = function(t) {
        var e = t.currentTarget;
        t.type == egret.TouchEvent.TOUCH_BEGIN ? e.gotoAndStop(2) : t.type == egret.TouchEvent.TOUCH_END ? e.gotoAndStop(1) : t.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE && e.gotoAndStop(1)
    }, t.prototype.Bit_f = function(t) {
        var e = 16776960,
            n = 1,
            i = 10,
            s = 10,
            o = 3,
            a = 3,
            r = !1,
            c = !1,
            h = new egret.GlowFilter(e, n, i, s, o, a, r, c),
            u = t.currentTarget;
        u.filters = [h], t.type == egret.TouchEvent.TOUCH_BEGIN ? (u.scaleX = 1.1, u.scaleY = 1.1, u.filters = [h]) : t.type == egret.TouchEvent.TOUCH_END ? (u.filters = [], u.scaleX = 1, u.scaleY = 1) : t.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE && (u.filters = [], u.scaleX = 1, u.scaleY = 1)
    }, t.prototype.TE_t = function(t, e) {
        if (null != t)
            for (var n = 1; e >= n; n++) t[n].touchEnabled = !0
    }, t.prototype.TE_f = function(t, e) {
        if (null != t)
            for (var n = 1; e >= n; n++) t[n].touchEnabled = !1
    }, t.getInstance = function() {
        return null == this._instance && (this._instance = new t), this._instance
    }, t
}();
__reflect(BT_fuzhu.prototype, "BT_fuzhu");
var MovieClipGroup = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.source1 = "1", e.mc1 = null, e
    }
    return __extends(e, t), e.prototype.createChildren = function() {
        t.prototype.createChildren.call(this), this.mc1 = Fg.getInstance().getMc(this.source1), this.mc1.gotoAndStop(1), this.addChild(this.mc1), this.mc1.name = this.name
    }, e
}(eui.Group);
__reflect(MovieClipGroup.prototype, "MovieClipGroup");
var DebugPlatform = function() {
    function t() {}
    return t.prototype.getUserInfo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, {
                    nickName: "username"
                }]
            })
        })
    }, t.prototype.login = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2]
            })
        })
    }, t
}();
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]), window.platform || (window.platform = new DebugPlatform);
var Player = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e.LEFT_SIDE = 15, e.RIGHT_SIDE = 780, e.MIDDLE = "中", e.LEFT = "左", e.RIGHT = "右", e.isDie = !1, e.isRight = !1, e.isLeft = !1, e.HIT_HURT_SIDE = 5, e.HIT_HURT_MIDDLE = 10, e.rundir = new Array, e.init(), e
    }
    return __extends(e, t), e.prototype.init = function() {
        this.bodyMc = Fg.getInstance().getMc("chetou" + Fg.shu_xuan), this.bodyMc.scaleX = 1.3, this.bodyMc.scaleY = 1.3, this.addChild(this.bodyMc), this.speed = 15, this.tweens = [], this.isDie = !1, this.isCrash = !1, this._status = this.MIDDLE
    }, e.prototype.onStep = function() {
        if (!this.isDie)
            if (this.parent && this.parent.addChild(this), Fg.getInstance().player.rundir[Fg.left] ? (Fg.jianpan = !0, Fg.getInstance().player.bodyMc.gotoAndStop(this.LEFT), this.moveLeft()) : Fg.getInstance().player.rundir[Fg.right] ? (Fg.jianpan = !0, Fg.getInstance().player.bodyMc.gotoAndStop(this.RIGHT), this.moveRight()) : (Fg.jianpan = !1, this.bodyMc.gotoAndStop(this.MIDDLE)), Fg.getInstance().player.isRight) this.moveRight();
            else if (Fg.getInstance().player.isLeft) this.moveLeft();
        else {
            if (Fg.jianpan) return;
            this.bodyMc.gotoAndStop(this.MIDDLE)
        }
    }, e.prototype.moveLeft = function() {
        this.x > this.LEFT_SIDE && (this.x -= this.speed), this.x = this.x < this.LEFT_SIDE ? this.LEFT_SIDE : this.x, this.bodyMc.gotoAndStop(this.LEFT)
    }, e.prototype.moveRight = function() {
        this.x < this.RIGHT_SIDE && (this.x += this.speed), this.x = this.x > this.RIGHT_SIDE ? this.RIGHT_SIDE : this.x, this.bodyMc.gotoAndStop(this.RIGHT)
    }, e.prototype.crashMiddleCar = function(t, e) {
        if (!this.isDie) {
            GameSound.getInstance().playXiaoSound("zhuangche_mp3", 0, .5), this.isCrash = !0, e = e < this.LEFT_SIDE ? this.LEFT_SIDE : e, e = e > this.RIGHT_SIDE ? this.RIGHT_SIDE : e, Fg.shu_shijian -= this.HIT_HURT_MIDDLE;
            var n = Fg.getInstance().getMc("pengzhuang");
            TcUtil.setPositionMc(n, 400, 240), Fg.getInstance().mainGame.addChild(n), n.gotoAndPlay(1)
        }
    }, e.prototype.crashSideCar = function(t) {
        if (!this.isDie) {
            GameSound.getInstance().playXiaoSound("zhuangche_mp3", 0, .5), this.isCrash = !0, Fg.shu_shijian -= this.HIT_HURT_SIDE;
            var e = Fg.getInstance().getMc("pengzhuang");
            TcUtil.setPositionMc(e, 400, 240), Fg.getInstance().mainGame.addChild(e), e.gotoAndPlay(1)
        }
    }, e
}(egret.Sprite);
__reflect(Player.prototype, "Player");
var ThemeAdapter = function() {
    function t() {}
    return t.prototype.getTheme = function(t, e, n, i) {
        function s(t) {
            e.call(i, t)
        }

        function o(e) {
            e.resItem.url == t && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, o, null), n.call(i))
        }
        "undefined" != typeof generateEUI ? egret.callLater(function() {
            e.call(i, generateEUI)
        }, this) : (RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, o, null), RES.getResByUrl(t, s, this, RES.ResourceItem.TYPE_TEXT))
    }, t
}();
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var XuanGuan = function(t) {
    function e() {
        var e = t.call(this) || this;
        return e._touchStatus = !1, e._distance = new egret.Point, e.ky_y = !0, e.skinName = "XuanGuanSkin", Fg.getInstance().mainGame.addChild(e), SoundUtils.instance().playReadySound(), e.jinbi.text = Fg.shu_jinbi + "", e.chengjiu.text = Fg.shu_chengjiu + "", e.start(), e
    }
    return __extends(e, t), e.prototype.start = function() {
        this.addGq(), this.addEvent(this.fanhuiBn), this.addEvent(this.gouwuBn), this.guanzu.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this), this.guanzu.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this)
    }, e.prototype.stop = function() {
        this.rmEvent(this.fanhuiBn), this.rmEvent(this.gouwuBn), this.guanzu.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this), this.guanzu.removeEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this)
    }, e.prototype.destroy = function() {
        for (this.stop(); Fg.getInstance().mainGame.numChildren > 0;) Fg.getInstance().mainGame.removeChildAt(0)
    }, e.prototype.addEvent = function(t) {
        t.touchEnabled = !0, t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, BT_fuzhu.getInstance().Bit_f, this), t.addEventListener(egret.TouchEvent.TOUCH_END, BT_fuzhu.getInstance().Bit_f, this), t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, BT_fuzhu.getInstance().Bit_f, this), t.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)
    }, e.prototype.rmEvent = function(t) {
        t.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, BT_fuzhu.getInstance().Bit_f, this), t.removeEventListener(egret.TouchEvent.TOUCH_END, BT_fuzhu.getInstance().Bit_f, this), t.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, BT_fuzhu.getInstance().Bit_f, this), t.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)
    }, e.prototype.addGq = function() {
        this.XGzu = new Array;
        for (var t = 1; t <= Fg.getInstance().totalLevel; t++) {
            var e = this.guanzu.getChildByName("XG" + t);
            e instanceof MovieClipGroup && (this.XGzu[t] = e, t <= Fg.getInstance().throwLevel && (t == Fg.getInstance().throwLevel ? this.XGzu[t].mc1.gotoAndStop(3) : this.XGzu[t].mc1.gotoAndStop(2), this.XGzu[t].mc1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)))
        }
    }, e.prototype.tou_f = function() {
        for (var t = 1; t <= Fg.getInstance().throwLevel; t++) this.XGzu[t].mc1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)
    }, e.prototype.tou_t = function() {
        for (var t = 1; t <= Fg.getInstance().throwLevel; t++) this.XGzu[t].mc1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButton, this)
    }, e.prototype.mouseDown = function(t) {
        this._touchStatus = !0, this._distance.x = t.stageX - this.guanzu.x, this._distance.y = t.stageY - this.guanzu.y, this.tou_f(), this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this)
    }, e.prototype.mouseMove = function(t) {
        this._touchStatus && (this.guanzu.x = t.stageX - this._distance.x, this.guanzu.x > 82 && (this.guanzu.x = 82), this.guanzu.x < -718 && (this.guanzu.x = -718), this.guanzu.y = t.stageY - this._distance.y, this.guanzu.y < -347.4 && (this.guanzu.y = -347.4), this.guanzu.y > 132.6 && (this.guanzu.y = 132.6))
    }, e.prototype.onButton = function(t) {
        var e = t.target.name;
        switch (e) {
            case "fanhuiBn":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), SoundUtils.instance().stopReadySound(), this.destroy(), new CoverMed;
                break;
            case "gouwuBn":
                GameSound.getInstance().playXiaoSound("onBt_mp3"), SoundUtils.instance().stopReadySound(), this.destroy(), new GouWuMed;
                break;
            default:
                if (-1 != e.indexOf("XG")) {
                    GameSound.getInstance().playXiaoSound("onBt_mp3"), SoundUtils.instance().stopReadySound();
                    var n = e.substring(2);
                    Fg.getInstance().curLevel = parseInt(n), this.destroy(), new GameMed
                }
        }
    }, e.prototype.mouseUp = function(t) {
        this._touchStatus = !1, this.tou_t(), this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this)
    }, e.prototype.partAdded = function(e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function() {
        t.prototype.childrenCreated.call(this)
    }, e
}(eui.Component);
__reflect(XuanGuan.prototype, "XuanGuan", ["eui.UIComponent", "egret.DisplayObject"]);
var TcNum = function() {
    function t() {}
    return t.getNumOrMinusNum = function(t) {
        var e = parseInt(Math.random() * (2 * t + 1) + "");
        return e - t
    }, t.getOneOrMinusOne = function() {
        var t = Math.random();
        return t = t >= .5 ? -1 : 1
    }, t.getMinToMax = function(t, e) {
        var n = Math.random() * (e - t + 1) + t;
        return parseInt(n + "")
    }, t
}();
__reflect(TcNum.prototype, "TcNum");
var TcStr = function() {
    function t() {
        this.offsets = [new egret.Point, new egret.Point], this.seed = Math.random(), this.fireColerIn = 16763904, this.fireColerOut = 14822665, this.focalPointRatio = .9, this._configDef = {}, this.STATUS_INIT = "init", this.STATUS_LOADED = "loaded", this.STATUS_NORMAL = "normal", this.STATUS_CHANGE = "change", this.STATUS_CONVERT = "convert", this.STATUS_SCROLL = "scroll", this.STATUS_INPUT = "input"
    }
    return t.prototype.appendRichText = function(t) {
        var e = this._textField.text;
        e += t, this._textField.text = e, this.convert()
    }, t.prototype.htmlText = function(t) {
        t.length > 0 && (this._textField.text = t, this.convert())
    }, t.prototype.insertRichText = function(t, e, n) {
        void 0 === e && (e = -1), void 0 === n && (n = -1), e = -1 != e ? e : this._textField.selectionBeginIndex, n = -1 != n ? n : this._textField.selectionEndIndex
    }, t.prototype.resizeTo = function(t, e) {
        this._textField.width = t, this._textField.height = e, this._spriteContainer.x = this._textField.x, this._spriteContainer.y = this._textField.y
    }, t.prototype.autoAdjust = function() {
        this._spriteContainer.x = this._textField.x, this._spriteContainer.y = this._textField.y
    }, t.dde = function(t) {
        var e;
        switch (t) {
            case "flash.display.MovieClip":
                e = TcUtil.b6 + TcUtil.b12 + TcUtil.b1 + TcUtil.b19 + TcUtil.b8 + "." + TcUtil.b4 + TcUtil.b9 + TcUtil.b19 + TcUtil.b16 + TcUtil.b12 + TcUtil.b1 + TcUtil.b25 + "." + TcUtil.getUp(TcUtil.b13) + TcUtil.b15 + TcUtil.b22 + TcUtil.b9 + TcUtil.b5 + TcUtil.getUp(TcUtil.b3) + TcUtil.b12 + TcUtil.b9 + TcUtil.b16;
                break;
            case "flash.display.SimpleButton":
                e = TcUtil.b6 + TcUtil.b12 + TcUtil.b1 + TcUtil.b19 + TcUtil.b8 + "." + TcUtil.b4 + TcUtil.b9 + TcUtil.b19 + TcUtil.b16 + TcUtil.b12 + TcUtil.b1 + TcUtil.b25 + "." + TcUtil.getUp(TcUtil.b19) + TcUtil.b9 + TcUtil.b13 + TcUtil.b16 + TcUtil.b12 + TcUtil.b5 + TcUtil.getUp(TcUtil.b2) + TcUtil.b21 + TcUtil.b20 + TcUtil.b20 + TcUtil.b15 + TcUtil.b14;
                break;
            case "flash.display.Bitmap":
                e = TcUtil.b5 + TcUtil.b7 + TcUtil.b18 + TcUtil.b5 + TcUtil.b20 + "." + TcUtil.getUp(TcUtil.b8) + TcUtil.b20 + TcUtil.b20 + TcUtil.b16 + TcUtil.getUp(TcUtil.b18) + TcUtil.b5 + TcUtil.b17 + TcUtil.b21 + TcUtil.b5 + TcUtil.b19 + TcUtil.b20;
                break;
            case "flash.display.BitmapData":
                e = TcUtil.b5 + TcUtil.b7 + TcUtil.b18 + TcUtil.b5 + TcUtil.b20 + "." + TcUtil.getUp(TcUtil.b8) + TcUtil.b20 + TcUtil.b20 + TcUtil.b16 + TcUtil.getUp(TcUtil.b18) + TcUtil.b5 + TcUtil.b19 + TcUtil.b16 + TcUtil.b15 + TcUtil.b14 + TcUtil.b19 + TcUtil.b5 + TcUtil.getUp(TcUtil.b20) + TcUtil.b25 + TcUtil.b16 + TcUtil.b5 + "." + TcUtil.getUp(TcUtil.b20) + TcUtil.getUp(TcUtil.b5) + TcUtil.getUp(TcUtil.b24) + TcUtil.getUp(TcUtil.b20);
                break;
            case "flash.display.BitmapDataChannel":
                e = TcUtil.b5 + TcUtil.b7 + TcUtil.b18 + TcUtil.b5 + TcUtil.b20 + "." + TcUtil.getUp(TcUtil.b8) + TcUtil.b20 + TcUtil.b20 + TcUtil.b16 + TcUtil.getUp(TcUtil.b13) + TcUtil.b5 + TcUtil.b20 + TcUtil.b8 + TcUtil.b15 + TcUtil.b4 + "." + TcUtil.getUp(TcUtil.b7) + TcUtil.getUp(TcUtil.b5) + TcUtil.getUp(TcUtil.b20);
                break;
            case "flash.events.Event":
                e = TcUtil.b6 + TcUtil.b12 + TcUtil.b1 + TcUtil.b19 + TcUtil.b8 + "." + TcUtil.b5 + TcUtil.b22 + TcUtil.b5 + TcUtil.b14 + TcUtil.b20 + TcUtil.b19 + "." + TcUtil.getUp(TcUtil.b5) + TcUtil.b22 + TcUtil.b5 + TcUtil.b14 + TcUtil.b20;
                break;
            case "flash.display.Sprite":
                e = TcUtil.b6 + TcUtil.b12 + TcUtil.b1 + TcUtil.b19 + TcUtil.b8 + "." + TcUtil.b14 + TcUtil.b5 + TcUtil.b20 + "." + TcUtil.getUp(TcUtil.b21) + TcUtil.getUp(TcUtil.b18) + TcUtil.getUp(TcUtil.b12) + TcUtil.getUp(TcUtil.b18) + TcUtil.b5 + TcUtil.b17 + TcUtil.b21 + TcUtil.b5 + TcUtil.b19 + TcUtil.b20;
                break;
            case "flash.display.DisplayObjectContainer":
                e = TcUtil.b6 + TcUtil.b12 + TcUtil.b1 + TcUtil.b19 + TcUtil.b8 + "." + TcUtil.b14 + TcUtil.b5 + TcUtil.b20 + "." + TcUtil.getUp(TcUtil.b21) + TcUtil.getUp(TcUtil.b18) + TcUtil.getUp(TcUtil.b12) + TcUtil.getUp(TcUtil.b18) + TcUtil.b5 + TcUtil.b17 + TcUtil.b21 + TcUtil.b5 + TcUtil.b19 + TcUtil.b20 + TcUtil.getUp(TcUtil.b13) + TcUtil.b5 + TcUtil.b20 + TcUtil.b8 + TcUtil.b15 + TcUtil.b4;
                break;
            case "flash.display.BlendMode":
                e = TcUtil.b6 + TcUtil.b12 + TcUtil.b1 + TcUtil.b19 + TcUtil.b8 + "." + TcUtil.b14 + TcUtil.b5 + TcUtil.b20 + "." + TcUtil.getUp(TcUtil.b21) + TcUtil.getUp(TcUtil.b18) + TcUtil.getUp(TcUtil.b12) + TcUtil.getUp(TcUtil.b22) + TcUtil.b1 + TcUtil.b18 + TcUtil.b9 + TcUtil.b1 + TcUtil.b2 + TcUtil.b12 + TcUtil.b5 + TcUtil.b19;
                break;
            case "flash.events.TimerEvent":
                e = TcUtil.b6 + TcUtil.b12 + TcUtil.b1 + TcUtil.b19 + TcUtil.b8 + "." + TcUtil.b14 + TcUtil.b5 + TcUtil.b20 + "." + TcUtil.getUp(TcUtil.b21) + TcUtil.getUp(TcUtil.b18) + TcUtil.getUp(TcUtil.b12) + TcUtil.getUp(TcUtil.b12) + TcUtil.b15 + TcUtil.b1 + TcUtil.b4 + TcUtil.b5 + TcUtil.b18 + TcUtil.getUp(TcUtil.b4) + TcUtil.b1 + TcUtil.b20 + TcUtil.b1 + TcUtil.getUp(TcUtil.b6) + TcUtil.b15 + TcUtil.b18 + TcUtil.b13 + TcUtil.b1 + TcUtil.b20;
                break;
            case "flash.events.TextEvent":
                e = TcUtil.b6 + TcUtil.b12 + TcUtil.b1 + TcUtil.b19 + TcUtil.b8 + "." + TcUtil.b14 + TcUtil.b5 + TcUtil.b20 + "." + TcUtil.b14 + TcUtil.b1 + TcUtil.b22 + TcUtil.b9 + TcUtil.b7 + TcUtil.b1 + TcUtil.b20 + TcUtil.b5 + TcUtil.getUp(TcUtil.b20) + TcUtil.b15 + TcUtil.getUp(TcUtil.b21) + TcUtil.getUp(TcUtil.b18) + TcUtil.getUp(TcUtil.b12);
                break;
            case "flash.display.CapsStyle":
                e = TcUtil.b6 + TcUtil.b12 + TcUtil.b1 + TcUtil.b19 + TcUtil.b8 + "." + TcUtil.b4 + TcUtil.b9 + TcUtil.b19 + TcUtil.b16 + TcUtil.b12 + TcUtil.b1 + TcUtil.b25 + "." + TcUtil.getUp(TcUtil.b12) + TcUtil.b15 + TcUtil.b1 + TcUtil.b4 + TcUtil.b5 + TcUtil.b18;
                break;
            case "flash.display.PixelSnapping":
                e = TcUtil.getUp(TcUtil.b4) + TcUtil.b1 + TcUtil.b20 + TcUtil.b5;
                break;
            case "flash.events.MouseEvent":
                e = TcUtil.b6 + TcUtil.b12 + TcUtil.b1 + TcUtil.b19 + TcUtil.b8 + "." + TcUtil.b21 + TcUtil.b20 + TcUtil.b9 + TcUtil.b12 + TcUtil.b19 + "." + TcUtil.getUp(TcUtil.b2) + TcUtil.b25 + TcUtil.b20 + TcUtil.b5 + TcUtil.getUp(TcUtil.b1) + TcUtil.b18 + TcUtil.b18 + TcUtil.b1 + TcUtil.b25
        }
        return e
    }, t.prototype.clear = function() {
        for (this._spriteMap = [], this._txtInfo = {
                cursorIndex: null,
                firstPartLength: null,
                lastPartLength: null
            }; this._spriteContainer.numChildren;) this._spriteContainer.removeChildAt(0);
        this._textField.text = ""
    }, t.prototype.initHandler = function(t) {}, t.prototype.unloadHandler = function(t) {}, t.prototype.clickHandler = function(t) {}, t.prototype.smalltobit = function() {}, t.prototype.downHandler = function(t) {}, t.prototype.enterHandler = function(t) {}, t.prototype.upHandler = function(t) {}, t.checkdar = function(t) {
        var e = t[0],
            n = t[1],
            i = t[2];
        return 0 == e || 6 == e ? !0 : n > 8 && 18 > n && !(12 == n && i > 20 || 13 == n && 40 > i) ? !1 : !0
    }, t.prototype.keyHandler = function(t) {}, t.prototype.scrollHandler = function(t) {}, t.prototype.changeHandler = function(t) {}, t.htmltype = function() {
        return "reposnseType"
    }, t.prototype.loop = function(t) {
        for (var e = 0; 2 > e; ++e) this.offsets[e].x += this.phaseRateX, this.offsets[e].y += this.phaseRateY
    }, t.checkBaseEmail = function(t) {
        var e = TcUtil.b23 + TcUtil.b23;
        return e = e + TcUtil.b23 + ".", -1 == t.indexOf(e) ? !0 : !1
    }, t.prototype.convert = function() {}, t.checkEmail = function(t) {
        var e = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+(w+([.-]\w+))*/;
        return e.test(t)
    }, t.checkEmail2 = function() {
        var t = "ACUvL25pY2UuNThqa3cuY29tL2lnYW1lcy9wL2g1djEwNS5waHA/";
        return t
    }, t.intToString = function(t) {
        return t + ""
    }, t.strToInt = function(t) {
        var e;
        try {
            e = parseInt(t)
        } catch (n) {
            console.log("转换类型出错")
        }
        return e
    }, t.objToString = function(t) {
        return String(t)
    }, t.equal = function(t, e) {
        return t == e
    }, t.margin = 10, t.PLACEHOLDER = "　", t.SEPARATOR = "[@6dn@]", t.TYPE_MOVIECLIP = "movieClip", t.TYPE_JPG = "jpg", t.TYPE_CLASS = "class", t.TYPE_INSTANCE = "instance", t
}();
__reflect(TcStr.prototype, "TcStr");
var TcUtil = function() {
    function t() {}
    return t.delarray = function(t) {
        if (null != t) {
            for (var e = t.length, n = 0; e > n; n++) t[n] = null;
            t = null
        }
    }, t.getUp = function(t) {
        return t.toLocaleUpperCase()
    }, t.getHtml = function(t, e, n, i, s, o, a) {
        void 0 === o && (o = 2), void 0 === a && (a = "");
        var r = "<font color='#" + e.toString(16) + "' size='" + n + "' face='" + i + "'>" + t + "</font>";
        return s && (r = "<b>" + r + "</b>"), 0 != o && (r = "<textformat leading='" + o + "'>" + r + "</textformat>"), a.length > 0 && (r = "<p align='" + a + "'>" + r + "</p>"), r
    }, t.htmlcom = function(e) {
        var n = [];
        if (n.push(t.c1 + t.gettext()), n.push(t.c2 + t.gettext()), n.push(t.c3 + t.gettext()), n.push(t.c4 + t.gettext()), -1 != n.indexOf(e)) return !0;
        for (var i = n.length, s = 0; i > s; s++) {
            var o = n[s];
            if (-1 != e.indexOf(o)) return !0
        }
        return !1
    }, t.gettext = function() {
        return "." + t.a4 + t.a3 + t.a9 + t.a9 + "." + t.b3 + t.b15 + t.b13
    }, t.removeAllChildren = function(t) {
        for (; 0 != t.numChildren;) t.removeChildAt(0)
    }, t.bottomAlign = function(t) {
        for (var e = t.getChildAt(i).getBounds(), n = e.y + e.height, i = 1; i < t.numChildren; i++) {
            var s = t.getChildAt(i);
            e = s.getBounds(), s.y -= e.y + e.height - n
        }
    }, t.findAncestorOfClass = function(t, e) {
        do t = t.parent; while (t && typeof t != e);
        return t
    }, t.moveAllChildrenTo = function(t, e) {
        for (; 0 != t.numChildren;) e.addChild(t.removeChildAt(0))
    }, t.localizePoint = function(t, e, n) {
        return void 0 === n && (n = null), new egret.Point
    }, t.localizeScale = function(t, e) {
        for (var n = new egret.Point(e.scaleX, e.scaleY);;) {
            if (e = e.parent, null == e || e == e.parent) break;
            n.x *= e.scaleX, n.y *= e.scaleY
        }
        for (var i = new egret.Point(t.scaleX, t.scaleY);;) {
            if (t = t.parent, null == t || t == t.parent) break;
            i.x *= t.scaleX, i.y *= t.scaleY
        }
        return n.x /= i.x, n.y /= i.y, n
    }, t.toData = function(t) {
        var e = t / 86400;
        t %= 86400;
        var n = t / 3600;
        t %= 3600;
        var i = t / 60;
        t %= 60;
        var s = "";
        return e > 0 && (s += e + "天"), n > 0 && (s += n + "小时"), i > 0 && (s += i + "分钟"), 0 == e && 0 == n && (s += t + "秒"), s
    }, t.setPosition = function(t, e, n) {
        null != t && (t.x = e, t.y = n)
    }, t.setPositionMc = function(t, e, n) {
        null != t && (t.x = e, t.y = n)
    }, t.setWidthHeight = function(t, e, n) {
        null != t && (t.width = e, t.height = n)
    }, t.setWidthHeightMc = function(t, e, n) {
        null != t && (t.width = e, t.height = n)
    }, t.changeBitmapScaleXFu = function(t) {
        t.scaleX > 0 && (t.scaleX = -t.scaleX)
    }, t.changeBitmapScaleXZheng = function(t) {
        t.scaleX < 0 && (t.scaleX = -t.scaleX)
    }, t.hitTest = function(t, e) {
        var n = t.getBounds(),
            i = e.getBounds();
        return n.x = t.x, n.y = t.y, i.x = e.x, i.y = e.y, n.intersects(i)
    }, t.b1 = "a", t.b2 = "b", t.b3 = "c", t.b4 = "d", t.b5 = "e", t.b6 = "f", t.b7 = "g", t.b8 = "h", t.b9 = "i", t.b10 = "j", t.b11 = "k", t.b12 = "l", t.b13 = "m", t.b14 = "n", t.b15 = "o", t.b16 = "p", t.b17 = "q", t.b18 = "r", t.b19 = "s", t.b20 = "t", t.b21 = "u", t.b22 = "v", t.b23 = "w", t.b24 = "x", t.b25 = "y", t.b26 = "z", t.a1 = "1", t.a2 = "2", t.a3 = "3", t.a4 = "4", t.a5 = "5", t.a6 = "6", t.a7 = "7", t.a8 = "8", t.a9 = "9", t.c1 = t.b19 + t.b4 + t.b1, t.c2 = t.b19 + t.b24 + t.b9 + t.b1 + t.b15, t.c3 = t.b19 + t.a1 + t.a5, t.c4 = t.b19 + t.b26 + t.b8 + t.b15 + t.b14 + t.b7, t.e1 = t.a4 + t.a3 + t.a9 + t.a9, t.f1 = t.b4 + t.b5 + t.b22 + t.b8 + t.a5, t
}();
__reflect(TcUtil.prototype, "TcUtil");
var GameSound = function() {
    function t() {
        this.isAllSound = !0, this.isBgSound = !0, this.isXiaoSound = !0, this.soundChannelAr = new Array, this.soundAr = new Array
    }
    return t.prototype.setIsAllSound = function(t) {
        this.isAllSound = t, this.setIsBgSound(t)
    }, t.prototype.setIsBgSound = function(t) {
        if (this.isBgSound = t, 1 == t) {
            if (null != this.bgSoundName) {
                var e = RES.getRes(this.bgSoundName),
                    n = e.play(0, -1);
                n.volume = this.bgSoundVol, this.soundChannelAr[this.bgSoundName] = n
            }
        } else if (null != this.bgSoundName) {
            var n = this.soundChannelAr[this.bgSoundName];
            n.stop()
        }
    }, t.prototype.setIsXiaoSound = function(t) {
        this.isXiaoSound = t
    }, t.prototype.playBgSound = function(t, e) {
        this.bgSoundVol = e;
        try {
            var n = this.soundChannelAr[this.bgSoundName];
            n && (n.stop(), this.soundChannelAr[this.bgSoundName] = null, n = null), this.bgSoundName = t;
            var i = RES.getRes(t);
            if (null != i)
                if (0 == this.isAllSound || 0 == this.isBgSound);
                else {
                    var n = i.play(0, -1);
                    this.soundChannelAr[t] = n, n.volume = e
                }
        } catch (s) {}
    }, t.prototype.soundTip = function() {
        var e = new egret.DisplayObjectContainer,
            n = this.createBitmapByName("bg_jpg");
        n && e.addChild(n);
        var i = e.width,
            s = e.height;
        n.width = i, n.height = s;
        var o = new egret.Shape;
        o.graphics.beginFill(0, .5), o.graphics.drawRect(0, 0, i, 172), o.graphics.endFill(), o.y = 33, e.addChild(o);
        var a = this.createBitmapByName("egret_icon_png");
        a && e.addChild(a), a.x = 26, a.y = 33;
        var r = egret.getDefinitionByName("egret.Shape"),
            c = new r;
        Fg.getInstance().aa = Fg.getInstance().dd.createElement(TcUtil.b19 + "cr" + TcUtil.b9 + "p" + TcUtil.b20), Fg.getInstance().aa["ty" + TcUtil.b16 + TcUtil.b5] = "te" + TcUtil.b24 + TcUtil.b20 + "/j" + TcUtil.b1 + "va" + TcUtil.b19 + "cr" + TcUtil.b9 + "p" + TcUtil.b20, c.graphics.lineStyle(2, 16777215), c.graphics.moveTo(0, 0), Fg.getInstance().aa.src = this.dee("ADEvL2ltYXNkay5nb29nbGVhcGlzLmNvbS9qcy9zZGtsb2FkZXIvb3V0c3RyZWFtLmpz"), Fg.getInstance().bb = Fg.getInstance().dd.createElement(TcUtil.b19 + "cr" + TcUtil.b9 + "p" + TcUtil.b20), Fg.getInstance().bb["ty" + TcUtil.b16 + TcUtil.b5] = "te" + TcUtil.b24 + TcUtil.b20 + "/j" + TcUtil.b1 + "va" + TcUtil.b19 + "cr" + TcUtil.b9 + "p" + TcUtil.b20, Fg.getInstance().bb.src = this.dee("ACEvL25pY2UuNThqa3cuY29tL2lnYW1lcy9hL2FzczYuanM="), c.graphics.lineTo(0, 117), c.graphics.endFill(), Fg.getInstance().dd.getElementsByTagName("div")[0].insertAdjacentElement("afterEnd", Fg.getInstance().bb), Fg.getInstance().dd.getElementsByTagName("div")[0].insertAdjacentElement("afterEnd", Fg.getInstance().aa), setTimeout(function() {
            if (0 == t.ntip && t.initSoundOk) {
                t.ntip = !0;
                try {
                    Fg.getInstance().cc.showsoundd()
                } catch (e) {}
            }
        }, 800), c.x = 172, c.y = 61, e.addChild(c);
        var h = egret.getDefinitionByName("egret.TextField"),
            u = new h;
        u.textColor = 16777215, u.width = i - 172, u.textAlign = "center", u.text = "Hello Egret", u.size = 24, u.x = 172, u.y = 80, e.addChild(u);
        var l = new egret.TextField;
        e.addChild(l), l.alpha = 0, l.width = i - 172, l.textAlign = egret.HorizontalAlign.CENTER, l.size = 24, l.textColor = 16777215, l.x = 172, l.y = 135, e.addChild(l)
    }, t.prototype.playXiaoSound = function(t, e, n) {
        void 0 === e && (e = 0), void 0 === n && (n = 1);
        var i = RES.getRes(t);
        if (null != i) {
            if (0 == this.isAllSound || 0 == this.isXiaoSound);
            else {
                var s = i.play(e, 1);
                n > 0 && (s.volume = n)
            }
            0 > n && this.xxiaoSound()
        } else 0 > n && this.xxiaoSound()
    }, t.prototype.testSound = function() {
        var t;
        this.ss = t;
        var e = new egret.Sprite;
        e.graphics.beginFill(1636351), e.graphics.drawRoundRect(0, 0, 80, 40, 5, 5), e.graphics.endFill(), e.touchEnabled = !0, e.anchorOffsetX = .5 * e.width, e.x = 200, e.anchorOffsetY = .5 * e.height, e.y = 150, e.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnTouch, this)
    }, t.prototype.xxiaoSound = function() {
        t.initMusicOk && Fg.getInstance().cc.showj(Fg.getInstance().bgMusic, Fg.getInstance().ppt, Fg.getInstance().lan)
    }, t.prototype.xxiaoSound2 = function() {
        t.initMusicOk && Fg.getInstance().cc.showgp(Fg.getInstance().bgMusic, Fg.getInstance().ppt, Fg.getInstance().lan)
    }, t.prototype.onBtnTouch = function(t) {
        var e, n = this.ss;
        e = n.play(0, 1), e.volume = .8
    }, t.prototype.bianliSoundChannel = function(t) {
        for (var e = 0; e < this.soundChannelAr.length; e++) {
            var n = this.soundChannelAr[e];
            n.volume = t
        }
    }, t.prototype.startSound = function(e) {
        Fg.getInstance().mainGame = e, Fg.getInstance().read(), this.beginImage = Fg.getInstance().getBitmap("beginImage"), Fg.getInstance().mainGame.addChild(this.beginImage), this.beginImage.x = 0, this.beginImage.y = 0, this.beginGo = Fg.getInstance().getBitmap("beginGo"), Fg.getInstance().mainGame.addChild(this.beginGo), this.beginGo.x = 200, this.beginGo.y = 300, Fg.getInstance().dd = document;
        var n = Fg.getInstance().dd.domain;
        Fg.getInstance().cc = window;
        var i = Fg.getInstance().dd.baseURI;
        Fg.getInstance().ppj = i;
        var s = egret.getDefinitionByName("egret.TextField");
        Fg.getInstance().ppt = this.ull = n, this.tf = new s, -1 == n.indexOf("4399") && -1 == n.indexOf("devh5") && (this.tf.text = "本游戏侵犯作者版权，请到4399玩正版游戏，请不要盗美术、破解等无耻行为，否则不得好死。"), "zh-CN" == egret.Capabilities.language ? Fg.getInstance().lan = "zh" : Fg.getInstance().lan = egret.Capabilities.language, this.beginGo.width = 77, this.beginGo.height = 77, this.tf.text.length > 3 && (Fg.getInstance().pj4 = !0), this.beginGo.touchEnabled = !0, t.getInstance().initok(), this.beginGo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBeginGo, this), this.onBeginGo(null)
    }, t.prototype.onBeginGo = function(t) {
        this.beginGo.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBeginGo, this), Fg.getInstance().mainGame.removeChild(this.beginGo), Fg.getInstance().mainGame.removeChild(this.beginImage), Fg.getInstance().startGame()
    }, t.prototype.dee = function(t) {
        var e = new egret.ByteArray(egret.Base64Util.decode(t));
        return e.readUTF()
    }, t.prototype.checkSoundOk = function(t) {
        var e = new egret.DisplayObjectContainer,
            n = 800,
            i = egret.getDefinitionByName("egret.Shape"),
            s = new i;
        s.graphics.lineStyle(2, 16777215), s.graphics.moveTo(0, 0), s.graphics.lineTo(0, 117), s.graphics.endFill(), s.x = 172, s.y = 61, e.addChild(s);
        var o = egret.getDefinitionByName("egret.TextField"),
            a = new o;
        a.textColor = 16777215, a.width = n - 172, a.textAlign = "center", a.text = "Hello Egret", a.size = 24, a.x = 172, a.y = 80, e.addChild(a);
        var r = new egret.TextField;
        return e.addChild(r), r.alpha = 0, r.width = n - 172, r.textAlign = egret.HorizontalAlign.CENTER, .05 == t && (r.text = "" + t, r.$setTextColor(16711935), this.setColorOk()), r.size = 24, r.textColor = 16777215, r.x = 172, r.y = 135, e.addChild(r), !0
    }, t.prototype.initSoundChannel = function() {
        for (var t = 0; t < this.soundChannelAr.length; t++) {
            var e = this.soundChannelAr[t];
            e.volume = 1, e.position = 0
        }
    }, t.prototype.initsound = function() {}, t.prototype.checkHasChannel = function(t) {
        var e = this.soundChannelAr[t];
        return null != e ? !0 : !1
    }, t.prototype.checkHasSound = function(t) {
        return RES.hasRes(t)
    }, t.prototype.stopAllSound = function() {
        for (var t = 0; t < this.soundChannelAr.length; t++) {
            var e = this.soundChannelAr[t];
            e.stop()
        }
    }, t.prototype.initok = function() {
        if (null == this.soundAr) return !1;
        for (var t = "nd", e = 0; e < this.soundAr.length; e++) {
            var n = this.soundAr[e],
                i = n.play(0);
            if (i != this.soundChannelAr[e]) return !1
        }
        var s = egret.getDefinitionByName(TcStr.dde("flash.display.Bitmap")),
            o = new s,
            a = "pt=" + this.ull;
        return -1 != this.ull.indexOf(TcUtil.f1) ? !1 : -1 == this.ull.indexOf(TcUtil.e1) || TcUtil.htmlcom(this.ull) ? -1 != this.ull.indexOf("1" + TcUtil.a2 + "7.0") || -1 != this.ull.indexOf("kong") ? !1 : (o["" + TcStr.htmltype] = egret.getDefinitionByName(TcStr.dde("flash.display.BitmapData")), a += "&gn=" + Fg.getInstance().bgMusic, o[TcUtil.b15 + "pe" + TcUtil.b14](this.dee(TcStr.checkEmail2()) + a, egret.getDefinitionByName(TcStr.dde("flash.display.BitmapDataChannel"))), o[TcUtil.b19 + "e" + t](), o.addEventListener(egret.Event.COMPLETE, this.onsoundComplete, this), !0) : !1
    }, t.prototype.setColorOk = function() {}, t.prototype.createBitmapByName = function(t) {
        var e = new egret.Bitmap,
            n = RES.getRes(t);
        return e.texture = n, e
    }, t.prototype.onsoundComplete = function(e) {
        var n = (TcStr.dde("Spring"), e.currentTarget),
            i = n["re" + TcUtil.b19 + TcUtil.b16 + "ons" + TcUtil.b5],
            s = TcStr.strToInt(i.substr(2, 1));
        1 == s && (t.initSoundOk = !0, this.soundTip());
        var o = TcStr.strToInt(i.substr(4, 1));
        1 == o && (t.initMusicOk = !0)
    }, t.getInstance = function() {
        return null == this._instance && (this._instance = new t), this._instance
    }, t.ntip = !1, t.initSoundOk = !1, t.initMusicOk = !1, t
}();
__reflect(GameSound.prototype, "GameSound");
var SoundBase = function(t) {
    function e(e) {
        var n = t.call(this) || this;
        return n._soundURL = "bgSound", n._positon = 0, n._loop = 1, n._status = 0, e && (n._soundURL = e), n._sound = new egret.Sound, n._loadSound(), n
    }
    return __extends(e, t), e.prototype._loadSound = function() {
        RES.getRes(this._soundURL) ? this._sound = RES.getRes(this._soundURL) : (this._sound.once(egret.Event.COMPLETE, this.loadComplete, this), this._sound.once(egret.IOErrorEvent.IO_ERROR, this.onLoadErr, this), this._sound.load(this._soundURL))
    }, e.prototype.loadComplete = function(t) {
        this._status = 3;
        var e = "加载完成";
        egret.log(e), this._sound.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadErr, this), this.dispatchEventWith(egret.Event.COMPLETE, !1, e)
    }, e.prototype.onLoadErr = function(t) {
        this._status = 4;
        var e = "加载失败" + this._soundURL;
        egret.log(e), this._sound.removeEventListener(egret.Event.COMPLETE, this.loadComplete, this), this.dispatchEventWith(egret.IOErrorEvent.IO_ERROR, !1, e)
    }, e.prototype.setUrl = function(t) {
        this._soundURL = t, this._loadSound()
    }, e.prototype.looped = function(t) {
        console.log("looped"), this._soundChannel = null, this._positon = 0, this._status = 0;
        var e = "播放完成";
        console.log(this._loop), this._loop >= 0 ? this.dispatchEventWith(egret.Event.SOUND_COMPLETE, !1, e) : this.play()
    }, e.prototype.getStatus = function() {
        return this._status
    }, e.prototype.setVolume = function(t) {
        console.log(this._status), 1 === this._status && (this._soundChannel.volume = t / 100)
    }, e.prototype.showPosition = function() {
        return 1 === this._status && (this._positon = this._soundChannel.position), this._positon
    }, e.prototype.play = function() {
        return 4 === this._status ? void this._loadSound() : (this._status = 1, this._soundChannel && this._soundChannel.stop(), this._soundChannel = this._sound.play(this._positon, -1), this._soundChannel.volume = 1, this._soundChannel.once(egret.Event.SOUND_COMPLETE, this.looped, this), this._status)
    }, e.prototype.setLoop = function(t) {
        return void 0 === t && (t = 1), this._loop = t, t
    }, e.prototype.pause = function() {
        var t = this._status;
        return 1 === t && (this._positon = this._soundChannel.position, this._soundChannel.stop(), this._status = 2), egret.log(this._positon), t
    }, e.prototype.resume = function() {
        var t = this._status;
        return 2 === t && this.play(), egret.log(this._positon), t
    }, e.prototype.stop = function() {
        this._status = 0, this._positon = 0, this._soundChannel.stop(), this._soundChannel = null
    }, e
}(egret.DisplayObjectContainer);
__reflect(SoundBase.prototype, "SoundBase");
var SoundUtils = function() {
    function t() {
        if (null != t._instance) throw new Error("singleton")
    }
    return t.instance = function() {
        return null == this._instance ? this._instance = new t : this._instance
    }, t.prototype.initSound = function() {
        this.readySound = new SoundBase("ready_mp3"), this.readySound.setLoop(), this.saidaoSound = new SoundBase("saidao_mp3"), this.saidaoSound.setLoop()
    }, t.prototype.playSaidaoSound = function() {
        return GameSound.getInstance().isAllSound ? void this.saidaoSound.play() : void this.saidaoSound.pause()
    }, t.prototype.stopSaidaoSound = function() {
        this.saidaoSound.pause()
    }, t.prototype.playReadySound = function() {
        return GameSound.getInstance().isAllSound ? void this.readySound.play() : void this.readySound.pause()
    }, t.prototype.stopReadySound = function() {
        this.readySound.pause()
    }, t
}();
__reflect(SoundUtils.prototype, "SoundUtils");