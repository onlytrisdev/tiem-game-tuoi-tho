var __reflect = this && this.__reflect || function(e, t, i) {
        e.__class__ = t, i ? i.push(t) : i = [t], e.__types__ = e.__types__ ? i.concat(e.__types__) : i
    },
    __awaiter = this && this.__awaiter || function(e, t, i, n) {
        return new(i || (i = Promise))(function(o, a) {
            function r(e) {
                try {
                    p(n.next(e))
                } catch (t) {
                    a(t)
                }
            }

            function s(e) {
                try {
                    p(n["throw"](e))
                } catch (t) {
                    a(t)
                }
            }

            function p(e) {
                e.done ? o(e.value) : new i(function(t) {
                    t(e.value)
                }).then(r, s)
            }
            p((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function i(e) {
            return function(t) {
                return n([e, t])
            }
        }

        function n(i) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; p;) try {
                if (o = 1, a && (r = a[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(r = r.call(a, i[1])).done) return r;
                switch (a = 0, r && (i = [0, r.value]), i[0]) {
                    case 0:
                    case 1:
                        r = i;
                        break;
                    case 4:
                        return p.label++, {
                            value: i[1],
                            done: !1
                        };
                    case 5:
                        p.label++, a = i[1], i = [0];
                        continue;
                    case 7:
                        i = p.ops.pop(), p.trys.pop();
                        continue;
                    default:
                        if (r = p.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                            p = 0;
                            continue
                        }
                        if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                            p.label = i[1];
                            break
                        }
                        if (6 === i[0] && p.label < r[1]) {
                            p.label = r[1], r = i;
                            break
                        }
                        if (r && p.label < r[2]) {
                            p.label = r[2], p.ops.push(i);
                            break
                        }
                        r[2] && p.ops.pop(), p.trys.pop();
                        continue
                }
                i = t.call(e, p)
            } catch (n) {
                i = [6, n], a = 0
            } finally {
                o = r = 0
            }
            if (5 & i[0]) throw i[1];
            return {
                value: i[0] ? i[1] : void 0,
                done: !0
            }
        }
        var o, a, r, s, p = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: i(0),
            "throw": i(1),
            "return": i(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    },
    __extends = this && this.__extends || function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        i.prototype = t.prototype, e.prototype = new i
    },
    SingletonClass = function() {
        function e() {}
        return e.getInstance = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var i = this;
            if (!i._instance) {
                var n = e.length;
                0 == n ? i._instance = new i : 1 == n ? i._instance = new i(e[0]) : 2 == n ? i._instance = new i(e[0], e[1]) : 3 == n ? i._instance = new i(e[0], e[1], e[2]) : 4 == n ? i._instance = new i(e[0], e[1], e[2], e[3]) : 5 == n && (i._instance = new i(e[0], e[1], e[2], e[3], e[4]))
            }
            return i._instance
        }, e
    }();
__reflect(SingletonClass.prototype, "SingletonClass");
var wxPlatform = function() {
    function e() {
        this.name = "wxgame", this.header = {}
    }
    return e.prototype.setKVData = function(e) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(t) {
                return [2, new Promise(function(t, i) {
                    var n = [];
                    for (var o in e) n.push({
                        key: o,
                        value: e[o]
                    });
                    wx.setUserCloudStorage({
                        KVDataList: n,
                        success: function(e) {
                            t(e)
                        },
                        fail: function(e) {
                            i(e)
                        }
                    })
                })]
            })
        })
    }, e.prototype.isdebug = function() {
        return !1
    }, e.prototype.checkSession = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, new Promise(function(e, t) {
                    wx.checkSession({
                        success: function() {
                            Log.info("checkSession ok"), e()
                        },
                        fail: function() {
                            Log.info("checkSession fail"), t()
                        }
                    })
                })]
            })
        })
    }, e.prototype.login = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, new Promise(function(e, t) {
                    wx.showLoading({
                        title: "游戏加载中...",
                        mask: !0
                    }), wx.login({
                        success: function(t) {
                            Log.info("swan.login success"), e(t)
                        },
                        fail: function(e) {
                            Log.info("swan.login fail"), t(e)
                        }
                    })
                })]
            })
        })
    }, e.prototype.auth = function(e, t, i) {
        return __awaiter(this, void 0, void 0, function() {
            var n = this;
            return __generator(this, function(o) {
                return [2, new Promise(function(o, a) {
                    var r = {
                            js_code: e,
                            iv: t,
                            encrypted_data: i
                        },
                        s = n;
                    wx.request({
                        url: "",
                        method: "POST",
                        data: r,
                        success: function(e) {
                            s.header = {
                                Authorization: e.data.token
                            }, swan.hideLoading(), o(e)
                        },
                        fail: function(e) {
                            a(e)
                        }
                    })
                })]
            })
        })
    }, e.prototype.getUserInfo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, new Promise(function(e, t) {
                    wx.getUserInfo({
                        success: function(t) {
                            var i = t.userInfo;
                            Log.info("wx.getUserInfo success" + JSON.stringify(t)), e(i)
                        },
                        fail: function(e) {
                            Log.info("wx.getUserInfo fail" + e), t(e)
                        }
                    })
                })]
            })
        })
    }, e.prototype.showAuthModal = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, new Promise(function(e, t) {
                    wx.showModal({
                        title: "提示",
                        content: "请您进行登陆授权",
                        showCancel: !1,
                        cancelText: "",
                        confirmText: "去授权",
                        success: function(i) {
                            wx.openSetting({
                                success: function(t) {
                                    Log.info("openSetting success"), e(t)
                                },
                                fail: function(e) {
                                    Log.info("openSetting failed"), t(e)
                                }
                            })
                        }
                    })
                })]
            })
        })
    }, e
}();
__reflect(wxPlatform.prototype, "wxPlatform", ["Platwindow"]), window.platform || (window.platform = new wxPlatform);
var BaseSound = function() {
    function e() {
        this._cache = {}, this._loadingCache = new Array
    }
    return e.prototype.dealSoundTimer = function() {}, e.prototype.getSound = function(e) {
        var t = RES.getRes(e);
        if (t) this._cache[e] = egret.getTimer();
        else {
            if (-1 != this._loadingCache.indexOf(e)) return null;
            this._loadingCache.push(e), RES.getResAsync(e, this.onResourceLoadComplete, this)
        }
        return t
    }, e.prototype.onResourceLoadComplete = function(e, t) {
        var i = this._loadingCache.indexOf(t); - 1 != i && (this._loadingCache.splice(i, 1), this._cache[t] = egret.getTimer(), this.loadedPlay(t))
    }, e.prototype.loadedPlay = function(e) {}, e.prototype.checkCanClear = function(e) {
        return !1
    }, e
}();
__reflect(BaseSound.prototype, "BaseSound");
var MessageCenter = function(e) {
    function t(t) {
        void 0 === t && (t = 1);
        var i = e.call(this) || this;
        return i.type = t, i.dict = {}, i.eVec = new Array, i.lastRunTime = 0, 0 == i.type && TimerManager.getInstance().doFrame(1, 0, i.run, i), i
    }
    return __extends(t, e), t.prototype.clear = function() {
        this.dict = {}, this.eVec.splice(0)
    }, t.prototype.addListener = function(e, t, i) {
        var n = this.dict[e];
        null == n && (n = new Array, this.dict[e] = n);
        var o = 0,
            a = n.length;
        for (o; a > o; o++)
            if (n[o][0] == t && n[o][1] == i) return;
        n.push([t, i])
    }, t.prototype.removeListener = function(e, t, i) {
        var n = this.dict[e];
        if (null != n) {
            var o = 0,
                a = n.length;
            for (o; a > o; o++)
                if (n[o][0] == t && n[o][1] == i) {
                    n.splice(o, 1);
                    break
                } 0 == n.length && (this.dict[e] = null, delete this.dict[e])
        }
    }, t.prototype.removeAll = function(e) {
        for (var t = Object.keys(this.dict), i = 0, n = t.length; n > i; i++) {
            for (var o = t[i], a = this.dict[o], r = 0; r < a.length; r++) a[r][1] == e && (a.splice(r, 1), r--);
            0 == a.length && (this.dict[o] = null, delete this.dict[o])
        }
    }, t.prototype.dispatch = function(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        if (null != this.dict[e]) {
            var n = ObjectPool.pop("MessageVo");
            n.type = e, n.param = t, 0 == this.type ? this.eVec.push(n) : 1 == this.type ? this.dealMsg(n) : Log.warn("MessageCenter未实现的类型")
        }
    }, t.prototype.run = function() {
        var e = egret.getTimer(),
            t = e - this.lastRunTime > 100;
        if (this.lastRunTime = e, t)
            for (; this.eVec.length > 0;) this.dealMsg(this.eVec.shift());
        else
            for (; this.eVec.length > 0 && (this.dealMsg(this.eVec.shift()), !(egret.getTimer() - e > 5)););
    }, t.prototype.dealMsg = function(e) {
        for (var t = this.dict[e.type], i = 0, n = t.length, o = null; n > i;) o = t[i], o[0].apply(o[1], e.param), t.length != n && (n = t.length, i--), i++;
        e.dispose(), ObjectPool.push(e)
    }, t
}(SingletonClass);
__reflect(MessageCenter.prototype, "MessageCenter");
var MessageVo = function() {
    function e() {}
    return e.prototype.dispose = function() {
        this.type = null, this.param = null
    }, e
}();
__reflect(MessageVo.prototype, "MessageVo");
var TimerManager = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._handlers = new Array, t._delHandlers = new Array, t._currTime = egret.getTimer(), t._currFrame = 0, t._count = 0, t._timeScale = 1, t
    }
    return __extends(t, e), t.prototype.setTimeScale = function(e) {
        this._timeScale = e
    }, t.prototype.addtimeScale = function(e) {
        this._timeScale += e
    }, t.prototype.getTimeScale = function() {
        return this._timeScale
    }, t.prototype.pause = function() {}, t.prototype.resume = function() {
        for (var e = this, t = 0; t < e._handlers.length; t++) e._handlers[t].dealTime = egret.getTimer()
    }, t.prototype.onEnterFrame = function() {
        var e = this;
        e._currFrame++, e._currTime = egret.getTimer();
        for (var t = 0; t < e._count; t++) {
            var i = e._handlers[t],
                n = i.userFrame ? e._currFrame : e._currTime;
            n >= i.exeTime && (i.method.call(i.methodObj, (e._currTime - i.dealTime) * e._timeScale), i.dealTime = e._currTime, i.exeTime += i.delay, i.repeat || (i.repeatCount > 1 ? i.repeatCount-- : (i.complateMethod && i.complateMethod.apply(i.complateMethodObj), e._delHandlers.push(i))))
        }
        for (; e._delHandlers.length;) {
            var i = e._delHandlers.pop();
            e.remove(i.method, i.methodObj)
        }
    }, t.prototype.create = function(e, t, i, n, o, a, r) {
        if (!(0 > t || 0 > i || null == n)) {
            this.remove(n, o);
            var s = ObjectPool.pop("TimerHandler");
            s.userFrame = e, s.repeat = 0 == i, s.repeatCount = i, s.delay = t, s.method = n, s.methodObj = o, s.complateMethod = a, s.complateMethodObj = r, s.exeTime = t + (e ? this._currFrame : this._currTime), s.dealTime = this._currTime, this._handlers.push(s), this._count++
        }
    }, t.prototype.doTimer = function(e, t, i, n, o, a) {
        void 0 === o && (o = null), void 0 === a && (a = null), this.create(!1, e, t, i, n, o, a)
    }, t.prototype.doFrame = function(e, t, i, n, o, a) {
        void 0 === o && (o = null), void 0 === a && (a = null), this.create(!0, e, t, i, n, o, a)
    }, Object.defineProperty(t.prototype, "count", {
        get: function() {
            return this._count
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.remove = function(e, t) {
        for (var i = 0; i < this._count; i++) {
            var n = this._handlers[i];
            if (n.method == e && n.methodObj == t) {
                this._handlers.splice(i, 1), ObjectPool.push(n), this._count--;
                break
            }
        }
    }, t.prototype.removeAll = function(e) {
        for (var t = 0; t < this._count; t++) {
            var i = this._handlers[t];
            i.methodObj == e && (this._handlers.splice(t, 1), ObjectPool.push(i), this._count--, t--)
        }
    }, t.prototype.isExists = function(e, t) {
        for (var i = 0; i < this._count; i++) {
            var n = this._handlers[i];
            if (n.method == e && n.methodObj == t) return !0
        }
        return !1
    }, t
}(SingletonClass);
__reflect(TimerManager.prototype, "TimerManager");
var TimerHandler = function() {
    function e() {
        this.delay = 0, this.repeatCount = 0, this.exeTime = 0, this.dealTime = 0
    }
    return e.prototype.clear = function() {
        this.method = null, this.methodObj = null, this.complateMethod = null, this.complateMethodObj = null
    }, e
}();
__reflect(TimerHandler.prototype, "TimerHandler");
var BaseView = function(e) {
    function t() {
        var t = e.call(this) || this,
            i = t;
        return i.width = App.stage.stageWidth, i.height = App.stage.stageHeight, t
    }
    return __extends(t, e), t.prototype.setClassName = function(e) {
        var t = this;
        t._className = e
    }, t.prototype.getVisible = function() {
        var e = this;
        return e.visible
    }, t.prototype.getClassName = function() {
        var e = this;
        return e._className
    }, t.prototype.addToParent = function(e) {
        var t = this;
        t._myParent = e, t._myParent.addChild(this)
    }, t.prototype.removeFromParent = function() {
        this.parent && this.parent.removeChild(this)
    }, t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    }, t.prototype.setVisible = function(e) {
        this.visible != e && (this.visible = e)
    }, t.prototype.changeSize = function(e, t) {
        var i = this;
        (i.width != e || i.height != t) && (i.width = e, i.height = t)
    }, t.prototype.onClose = function() {}, t
}(eui.Component);
__reflect(BaseView.prototype, "BaseView", ["IBaseView"]);
var UIManager = function(e) {
    function t() {
        var t = e.call(this) || this;
        t.uiStack = new Array;
        var i = t;
        return App.MessageCenter.addListener(MessageType.WindowResize + "", i.stageOnResize, i), t
    }
    return __extends(t, e), t.prototype.stageOnResize = function() {
        for (var e = this, t = 0; t < e.uiStack.length; t++) e.uiStack[t].changeSize(App.stage.stageWidth, App.stage.stageHeight)
    }, t.prototype.open = function(e, t, i, n) {
        void 0 === n && (n = !1);
        for (var o = [], a = 4; a < arguments.length; a++) o[a - 4] = arguments[a];
        var r = this,
            s = !1;
        if (!n)
            for (var p = 0; p < r.uiStack.length; p++)
                if (e === r.uiStack[p].getClassName()) {
                    r.uiStack[p].setVisible(!0), r.uiStack[p].removeFromParent(), r.uiStack[p].addToParent(i), r.uiStack[p].start(o);
                    var h = r.uiStack[p];
                    r.uiStack.splice(p, 1), r.uiStack.push(h), s = !0;
                    break
                } if (!s) {
            var l = ObjectPool.tryPop(e);
            l ? (l.addToParent(i), l.start(o), l.changeSize(App.stage.stageWidth, App.stage.stageHeight), l.setVisible(!0)) : (l = ObjectPool.popNew(e), l.setClassName(e), l.addToParent(i), l.awake(o), l.start(o)), t && r.uiStack.length > 0 && r.uiStack[r.uiStack.length - 1].setVisible(!1), r.uiStack.push(l)
        }
    }, t.prototype.close = function(e, t) {
        void 0 === t && (t = !0);
        for (var i = [], n = 2; n < arguments.length; n++) i[n - 2] = arguments[n];
        for (var o = this, a = o.uiStack.length - 1; a >= 0; a--)
            if (e === o.uiStack[a].getClassName()) {
                o.uiStack[a].onClose(), o.uiStack[a].removeFromParent(), ObjectPool.push(o.uiStack[a]), t && a - 1 >= 0 && (o.uiStack[a - 1].setVisible(!0), o.uiStack[a - 1].start(i)), o.uiStack.splice(a, 1);
                break
            }
    }, t.prototype.clearTo = function(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        for (var n = this, o = 0; o < n.uiStack.length; o++)
            if (e === n.uiStack[o].getClassName()) {
                n.uiStack[o].setVisible(!0), n.uiStack[o].start(t);
                for (var a = o + 1; a < n.uiStack.length; a++) n.uiStack[a].onClose(), n.uiStack[a].removeFromParent(), ObjectPool.push(n.uiStack[a]);
                o + 1 < n.uiStack.length && n.uiStack.splice(o + 1, n.uiStack.length - o - 1);
                break
            }
    }, t.prototype.clear = function() {
        for (var e = this, t = 0; t < e.uiStack.length; t++) e.uiStack[t].onClose(), e.uiStack[t].removeFromParent(), ObjectPool.push(e.uiStack[t]);
        e.uiStack.splice(0, e.uiStack.length)
    }, t.prototype.getWindow = function(e) {
        for (var t = this, i = t.uiStack.length - 1; i >= 0; i--)
            if (e === t.uiStack[i].getClassName()) return t.uiStack[i];
        return null
    }, t.prototype.isTopView = function(e) {
        var t = this;
        return t.uiStack.length > 0 && t.uiStack[t.uiStack.length - 1] == e ? !0 : !1
    }, t.prototype.getTopView = function() {
        var e = this;
        return e.uiStack.length > 0 ? e.uiStack[e.uiStack.length - 1].getClassName() : void 0
    }, t
}(SingletonClass);
__reflect(UIManager.prototype, "UIManager");
var SkillStatus;
! function(e) {
    e[e.Init = 1] = "Init", e[e.Start = 2] = "Start", e[e.Over = 3] = "Over"
}(SkillStatus || (SkillStatus = {}));
var SkillData = function() {
    function e() {}
    return e
}();
__reflect(SkillData.prototype, "SkillData");
var Skill = function() {
    function e() {
        this._Target = new Array, this.hittime = 0, this.tmpPoint = new egret.Point
    }
    return e.prototype.init = function(e, t, i) {
        var n = this;
        n._State = SkillStatus.Start, n._Attacker = t, n._Data = e, t && (n._aimDirx = t._dir.x, n._aimDiry = t._dir.y), i && (n._Target = i), n._lapsedTime = 0, n.PlayAttackSound()
    }, e.prototype.isOver = function() {
        return this._State === SkillStatus.Over
    }, e.prototype.clear = function() {
        var e = this;
        e._Target = [], e._Attacker = null
    }, e.prototype.calDmage = function(e) {
        var t = this;
        if (t._Target && 0 != t._Target.length) {
            if (null == e || void 0 == e) {
                var i = App.UserConfig.getAttack();
                i >= 500 && (i = 500);
                var n = Math.ceil(i * t._Data.hurt * .001);
                e = t._Data.hurt + n
            }
            for (var o = 0; o < t._Target.length; o++)
                if (!t._Target[o].isDie()) {
                    var a = t._Target[o].getCurblood();
                    a > e ? t._Target[o].setCurBlood(a - e) : (t._Target[o].setCurBlood(0), t._Target[o].death(!1))
                }
        }
    }, e.prototype.Update = function(e) {}, e.prototype.PlayHitSound = function() {
        egret.getTimer() - this.hittime > 200 && (this.hittime = egret.getTimer())
    }, e.prototype.PlayAttackSound = function() {}, e.prototype.GetGoldEffect = function(e, t) {
        var i = App.FightSystem.getMapScene().getMapLayer();
        this._shape = new egret.Shape, this._shape.graphics.clear(), this._shape.graphics.lineStyle(3, 2816254), this._shape.graphics.moveTo(e.x, e.y), this._shape.graphics.lineTo(t.x - .5 * t.width, t.y - .5 * t.height), i.addChild(this._shape)
    }, e.prototype.addBullet = function(e) {
        var t = e.getAvataID(),
            i = ObjectPool.popWithExtraKey("Bullet", t, t),
            n = App.FightSystem.getMapScene().getBulletLayer();
        return n.addChild(i), i.setPos(e.getX(), e.getY(), e._dir.x, e._dir.y), i
    }, e
}();
__reflect(Skill.prototype, "Skill");
var YinHangView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "YinHangViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.closeBtn, .8), this.getbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetZuanShi, this), BtnTool.btnSMin(this.getbtn)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.zuanshi.text = "300", App.GameScene.unRegeditMapTouch(), App.FightSystem.setPause(!0), App.MessageCenter.addListener(MessageType.onLoadNativeAD1 + "", this.showNativeBannerAd, this), App.MessageCenter.addListener(MessageType.SeeVideoEnd + "", this.advEnd, this)
    }, t.prototype.nativeTime = function() {
        1 == qgameKit.yinhangTopSwitch && 1 == qgameKit.yinhangSwitch && qgameKit.getNativeAd1(GameConst.nativeAD)
    }, t.prototype.showNativeBannerAd = function() {
        qgameKit.yinhangSwitch && qgameKit.nativeAdItem1 && App.UIManager.open("YuanShengicon", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1, UIscene.YinHang)
    }, t.prototype.onClose = function() {
        App.GameScene.regeditMapTouch(), App.FightSystem.setPause(!1), App.MessageCenter.removeListener(MessageType.onLoadNativeAD1 + "", this.showNativeBannerAd, this), App.MessageCenter.removeListener(MessageType.SeeVideoEnd + "", this.advEnd, this), App.TimerManager.remove(this.nativeTime, this)
    }, t.prototype.advEnd = function() {
        App.videoType == VideoRewardType.YinHang && (App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Nhận 300 kim cương"), App.UserConfig.addZuanShi(300), App.MessageCenter.dispatch(MessageType.GoldChange + ""))
    }, t.prototype.onGetZuanShi = function() {
        wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.YinHang)
    }, t.prototype.oncloseClick = function() {
        App.UIManager.close("YinHangView", !1)
    }, t
}(BaseView);
__reflect(YinHangView.prototype, "YinHangView", ["eui.UIComponent", "egret.DisplayObject"]), window.YinHangView = YinHangView;
var qgameKit = function() {
    function e() {}
    return e.initAd = function(e, t) {
        var i = qg.getSystemInfoSync().platformVersionCode;
        i >= 1051 || qg.initAdService({
            appId: e,
            isDebug: t,
            success: function(e) {},
            fail: function(e) {},
            complete: function(e) {}
        })
    }, e.GameBannerAd = function(t) {
        var i = qg.getSystemInfoSync().platformVersionCode;
        1076 > i || (e.gameBannerAd && ("function" == typeof e.gameBannerAd.destroy && (e.gameBannerAd.destroy(), e.gameBannerAd.offLoad()), e.gameBannerAd = null), e.gameBannerAd = qg.createGameBannerAd({
            adUnitId: t
        }), e.gameBannerAd.show(), e.gameBannerAd.onLoad(function() {
            console.log("互推盒子横幅广告加载成功")
        }))
    }, e.closeGameBannerAd = function() {
        var t = qg.getSystemInfoSync().platformVersionCode;
        1076 > t || (e.gameBannerAd && "function" == typeof e.gameBannerAd.hide && e.gameBannerAd.hide(), e.gameBannerAd && "function" == typeof e.gameBannerAd.destroy && (e.gameBannerAd.destroy(), e.gameBannerAd = null))
    }, e.JiuGongGeAd = function(t) {
        if (!(e.JiuGongGeAdTime && egret.getTimer() - e.JiuGongGeAdTime < 5e3)) {
            e.JiuGongGeAdTime = egret.getTimer();
            var i = qg.getSystemInfoSync().platformVersionCode;
            1050 > i || (e.gamePortalAd && ("function" == typeof e.gamePortalAd.destroy && (e.gamePortalAd.destroy(), e.gamePortalAd.offLoad(), e.gamePortalAd.offError()), e.gamePortalAd = null), e.gamePortalAd = qg.createGamePortalAd({
                adUnitId: t
            }), e.gamePortalAd.load().then(function() {
                e.gamePortalAd.show()
            })["catch"](function(e) {
                console.log("load fail with:" + e.errCode + "," + e.errMsg)
            }), e.gamePortalAd.onError(function(e) {
                console.log(e)
            }))
        }
    }, e.closeJiuGongGeAd = function() {
        var t = qg.getSystemInfoSync().platformVersionCode;
        1076 > t || e.gamePortalAd && "function" == typeof e.gamePortalAd.destroy && (e.gamePortalAd.destroy(), e.gamePortalAd = null)
    }, e.miniBannerAd = function(t) {
        if (e.GameAd) {
            var i = qg.getSystemInfoSync().platformVersionCode;
            1031 > i || e.BannerAdTime && egret.getTimer() - e.BannerAdTime < 8e3 || (e.BannerAdTime = egret.getTimer(), i >= 1051 && e.banner_ad && ("function" == typeof e.banner_ad.destroy && e.banner_ad.destroy(), e.banner_ad = null), i >= 1051 ? e.banner_ad = qg.createBannerAd({
                adUnitId: t
            }) : e.banner_ad = qg.createBannerAd({
                posId: t
            }), e.banner_ad && e.banner_ad.show())
        }
    }, e.closeBanner = function() {
        var t = qg.getSystemInfoSync().platformVersionCode;
        1031 > t || (e.banner_ad && "function" == typeof e.banner_ad.hide && e.banner_ad.hide(), t >= 1051 && e.banner_ad && "function" == typeof e.banner_ad.destroy && (e.banner_ad.destroy(), e.banner_ad = null))
    }, e.destroyBanner = function() {
        qg.getSystemInfoSync().platformVersionCode < 1031 || e.banner_ad && "function" == typeof e.banner_ad.destroy && (e.banner_ad.offShow(), e.banner_ad.offError(), e.banner_ad.offHide(), e.banner_ad.destroy(), e.banner_ad = null)
    }, e.insertAd = function(t) {
        if (e.GameAd) {
            var i = qg.getSystemInfoSync().platformVersionCode;
            1031 > i || egret.getTimer() - e.insertCloseTime < 1e4 || (e.insertCloseTime = egret.getTimer(), e.insert_ad && (e.insert_ad.offLoad(), e.insert_ad.offError(), e.insert_ad.destroy(), e.insert_ad = null), i >= 1051 ? e.insert_ad = qg.createInterstitialAd({
                adUnitId: t
            }) : e.insert_ad = qg.createInsertAd({
                posId: t
            }), e.insert_ad && (e.insert_ad.onLoad(function() {
                e.insert_ad.show().then(function() {
                    console.log("插屏广告展示")
                })["catch"](function(e) {})
            }), e.insert_ad.load()))
        }
    }, e.showVideoAd = function(t, i, n) {
		console.info('03',t, i, n);
        var o = qg.getSystemInfoSync().platformVersionCode;
        if (1051 > o) return void App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Phiên bản này không hỗ trợ quảng cáo");
        if (e.VideoAdTime) {
            var a = egret.getTimer() - e.VideoAdTime;
            if (3e4 > a) {
                if (a > 3e3) {
                    var r = Math.ceil((3e4 - a) / 1e3);
                    App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Vui lòng " + r + " thử lại sau vài giây")
                }
                return
            }
        }
        e.VideoAdTime = egret.getTimer(), e.video_ads && (e.video_ads.offClose(), e.video_ads.offError(), e.video_ads.destroy(), e.video_ads = null), o >= 1051 ? e.video_ads = qg.createRewardedVideoAd({
            adUnitId: t
        }) : e.video_ads = qg.createRewardedVideoAd({
            posId: t
        }), e.video_ads && (e.video_ads.onLoad(function() {
            App.UserConfig.getsoundonoff() && (App.SoundManager.setEffectOn(!1), App.SoundManager.setBgOn(!1)), e.video_ads.show()
        }), e.video_ads.onError(function(t) {
            console.log("激励视频 错误", t.errCode + ":" + t.errMsg + "错误"), App.UserConfig.getsoundonoff() && (App.SoundManager.setEffectOn(!0), App.SoundManager.setBgOn(!0)), e.video_ads.offClose(), e.video_ads.offError(), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Không thể tải quảng cáo tạm thời")
        }), e.video_ads.onClose(function(t) {
            t && t.isEnded ? i() : n(), App.UserConfig.getsoundonoff() && (App.SoundManager.setEffectOn(!0), App.SoundManager.setBgOn(!0)), e.video_ads.offClose(), e.video_ads.offError()
        }), e.video_ads.load())
    }, e.getNativeAd = function(t) {
        if (e.GameAd) {
            var i = qg.getSystemInfoSync().platformVersionCode;
            if (!(1031 > i)) {
                if (e.native_ad && (e.native_ad.offLoad(), "function" == typeof e.native_ad.offError && e.native_ad.offError(), e.isClickedNativead || (egret.log("原生本地广告还未点击，无需拉取"), App.MessageCenter.dispatch(MessageType.onLoadNativeAD + ""))), e.nativeCloseTime && egret.getTimer() - e.nativeCloseTime < 1e4) return void App.MessageCenter.dispatch(MessageType.onLoadNativeAD + "");
                if (e.native_ad = qg.createNativeAd({
                        adUnitId: t
                    }), !e.native_ad) return void egret.log("原生广告位创建失败");
                e.nativeCloseTime = egret.getTimer(), egret.log("原生广告位创建成功"), e.native_ad.onLoad(function(t) {
                    egret.log("原生广告拉取数据返回");
                    var i = t.adList;
                    if (i && i.length > 0) {
                        var n = t.adList[0];
                        n.icon || n.iconUrlList && n.iconUrlList.length > 0 && (n.icon = n.iconUrlList[0]), console.log(t.adList);
                        var o = JSON.stringify(n);
                        console.log(o), e.nativeAdItem = JSON.parse(o), e.native_ad.reportAdShow({
                            adId: n.adId
                        }), e.isClickedNativead = !1, App.MessageCenter.dispatch(MessageType.onLoadNativeAD + "")
                    }
                }), e.native_ad.onError(function(e) {
                    Log.info(e.errCode + ":" + e.errMsg + "错误"), App.MessageCenter.dispatch(MessageType.onLoadNativeAD + "")
                });
                var n = e.native_ad.load();
                n && n.then(function(e) {
                    console.log("原生广告加载完成", JSON.stringify(e))
                })["catch"](function(e) {
                    console.log("加载失败", JSON.stringify(e)), App.MessageCenter.dispatch(MessageType.onLoadNativeAD + "")
                })
            }
        }
    }, e.nativeClick = function() {
        egret.log("准备开始上报原生ID点击事件"), e.native_ad && e.nativeAdItem && (e.native_ad.reportAdClick({
            adId: e.nativeAdItem.adId
        }), egret.log("上报点击事件完毕"), e.isClickedNativead = !0)
    }, e.destroyNative = function() {
        e.native_ad && (e.native_ad.offLoad(), "function" == typeof e.native_ad.offError && e.native_ad.offError(), "function" == typeof e.native_ad.destroy && e.native_ad.destroy(), e.native_ad = null, e.nativeAdItem = null, App.MessageCenter.dispatch(MessageType.onLoadNativeAD + ""))
    }, e.getNativeAd1 = function(t) {
        if (e.GameAd) {
            var i = qg.getSystemInfoSync().platformVersionCode;
            if (!(1031 > i)) {
                if (e.native_ad1 && (e.native_ad1.offLoad(), "function" == typeof e.native_ad1.offError && e.native_ad1.offError(), e.isClickedNativead1 || (egret.log("原生本地广告还未点击，无需拉取"), App.MessageCenter.dispatch(MessageType.onLoadNativeAD1 + ""))), e.nativeCloseTime1 && egret.getTimer() - e.nativeCloseTime1 < 1e4) return void App.MessageCenter.dispatch(MessageType.onLoadNativeAD1 + "");
                if (e.native_ad1 = qg.createNativeAd({
                        adUnitId: t
                    }), !e.native_ad1) return void egret.log("原生广告位创建失败");
                e.nativeCloseTime1 = egret.getTimer(), egret.log("原生广告位创建成功"), e.native_ad1.onLoad(function(t) {
                    egret.log("原生广告拉取数据返回");
                    var i = t.adList;
                    if (i && i.length > 0) {
                        var n = t.adList[0];
                        n.icon || n.iconUrlList && n.iconUrlList.length > 0 && (n.icon = n.iconUrlList[0]), console.log("广告：" + JSON.stringify(t.adList));
                        var o = JSON.stringify(n);
                        egret.log(o), e.nativeAdItem1 = JSON.parse(o), e.native_ad1.reportAdShow({
                            adId: n.adId
                        }), e.isClickedNativead1 = !1, App.MessageCenter.dispatch(MessageType.onLoadNativeAD1 + "")
                    }
                }), e.native_ad1.onError(function(e) {
                    Log.info(e.errCode + ":" + e.errMsg + "错误"), App.MessageCenter.dispatch(MessageType.onLoadNativeAD1 + "")
                });
                var n = e.native_ad1.load();
                n && n.then(function(e) {
                    console.log("原生广告加载完成", JSON.stringify(e))
                })["catch"](function(e) {
                    console.log("加载失败", JSON.stringify(e)), App.MessageCenter.dispatch(MessageType.onLoadNativeAD1 + "")
                })
            }
        }
    }, e.nativeClick1 = function() {
        egret.log("准备开始上报原生ID点击事件"), e.native_ad1 && e.nativeAdItem1 && (e.native_ad1.reportAdClick({
            adId: e.nativeAdItem1.adId
        }), egret.log("上报点击事件完毕"), e.isClickedNativead1 = !0)
    }, e.destroyNative1 = function() {
        e.native_ad1 && (e.native_ad1.offLoad(), "function" == typeof e.native_ad1.offError && e.native_ad1.offError(), "function" == typeof e.native_ad1.destroy && e.native_ad1.destroy(), e.native_ad1 = null, e.nativeAdItem1 = null, App.MessageCenter.dispatch(MessageType.onLoadNativeAD1 + ""))
    }, e.login = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, new Promise(function(e, t) {
                    qg.login({
                        success: function(t) {
                            var i = t.data;
                            e(i)
                        },
                        fail: function(e) {
                            t(JSON.stringify(e))
                        }
                    })
                })]
            })
        })
    }, e.loadSubpackage = function() {
        e.loadTimes++;
        qg.loadSubpackage({
            name: "sub" + e.hasLoadSubCount,
            success: function(t) {
                e.hasLoadSubCount++, 2 == e.hasLoadSubCount && e.loadSubpackage(), 3 == e.hasLoadSubCount && App.MessageCenter.dispatch(MessageType.LoadSubpackage + "")
            },
            fail: function(t) {
                console.log(t), e.loadTimes < 3 ? (App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Tải xuống tài nguyên không thành công, đang thử lại!"), e.loadSubpackage()) : qg.exitMiniProgram({
                    success: function() {},
                    fail: function() {}
                })
            }
        })
    }, e.getTimeStamp = function() {
        return Date.now()
    }, e.createSignObject = function(t) {
        var i = "",
            n = {},
            o = t,
            a = "com.jinse.lxtcs.nearme.gamecenter",
            r = "7s1mpIBQengO0C8wwG484W8G8",
            s = "9c59b9Ecd33f9c219216fF3ccE770269",
            p = e.getTimeStamp(),
            h = "1.0.0";
        n.appKey = r, n.appSecret = s, n.pkgName = a, n.timeStamp = p, n.token = o;
        var l = [];
        for (var c in n) l.push(c + "=" + n[c]);
        i = l.sort(function(e, t) {
            return e > t ? 1 : -1
        }).join("&");
        var g = new MD5;
        n.sign = g.hex_md5(i).toUpperCase(), n.version = h, delete n.appKey, delete n.appSecret, l.length = 0;
        for (var c in n) l.push(c + "=" + n[c]);
        return l.join("&")
    }, e.dohttp = function(e, t, i) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, e.QGLogin = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, new Promise(function(e, t) {
                    qg.login({
                        success: function(t) {
                            e(t.data)
                        },
                        fail: function(e) {
                            t(JSON.stringify(e))
                        }
                    })
                })]
            })
        })
    }, e.QGLoginGetUseinfo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, e.prototype.QGSetFrame = function(e) {
        void 0 === e && (e = 40), qg.setPreferredFramesPerSecond(e)
    }, e.prototype.QGsetProcess = function(e) {
        e >= 100 ? qg.loadingComplete({
            complete: function(e) {}
        }) : qg.setLoadingProgress({
            progress: e
        })
    }, e.checkDesk = function() {
        var t = qg.getSystemInfoSync().platformVersionCode;
        return 1040 > t ? void(e.hasInstallDeskIcon = !0) : void qg.hasShortcutInstalled({
            success: function(t) {
                0 == t ? e.hasInstallDeskIcon = !1 : e.hasInstallDeskIcon = !0
            },
            fail: function(e) {},
            complete: function() {}
        })
    }, e.checkInstallOk = function(e) {
        qg.hasShortcutInstalled({
            success: function(t) {
                0 == t || e()
            },
            fail: function(e) {},
            complete: function() {}
        })
    }, e.addDesk = function(t) {
        qg.installShortcut({
            success: function() {
                var i = new egret.Timer(2e3, 1);
                i.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function() {
                    e.checkInstallOk(t)
                }, this), i.start()
            },
            fail: function(e) {
                console.log("fail~")
            },
            complete: function() {
                console.log("complete~")
            }
        })
    }, e.prototype.QGShowToast = function(e) {
        qg.showToast({
            message: e
        })
    }, e.hasInstallDeskIcon = !0, e.current_video_ad_id = "", e.GameAd = !1, e.isClickedNativead = !1, e.isClickedNativead1 = !1, e.zhujiemianSwitch = !0, e.shengyaSwitch = !0, e.shangdianSwitch = !0, e.zhuanpanSwitch = !0, e.yinhangSwitch = !0, e.qiandaoSwitch = !0, e.zhujiemianTopSwitch = !0, e.shengyaTopSwitch = !0, e.shangdianTopSwitch = !0, e.zhuanpanTopSwitch = !0, e.yinhangTopSwitch = !0, e.qiandaoTopSwitch = !0, e.insertCloseTime = -5e3, e.nativeCloseTime = -1e4, e.nativeCloseTime1 = -1e4, e.loadTimes = 0, e.hasLoadSubCount = 1, e
}();
__reflect(qgameKit.prototype, "qgameKit");
var userdata = function() {
    function e() {}
    return e
}();
__reflect(userdata.prototype, "userdata");
var UserConfig = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.data = new userdata, t
    }
    return __extends(t, e), t.prototype.Load = function() {
        var e = "UserData_wxZombie_16",
            i = egret.localStorage.getItem(e);
        if (i && "" != i) {
            var n = JSON.parse(i);
            this.data.id = n.id, this.data.name = n.name, this.data.level = n.level, this.data.jinbi = n.jinbi, this.data.zuanshi = n.zuanshi, this.data.jingyan = n.jingyan, this.data.unlockMaxid = n.unlockMaxid, this.data.loginTime = n.loginTime, this.data.zhiwu = n.zhiwu, this.data.zhanli = n.zhanli, this.data.dateArr = n.dateArr, this.data.zhuanPanNum = n.zhuanPanNum, this.data.zhuanPanTime = n.zhuanPanTime, this.data.soundonoff = n.soundonoff, this.data.curMaxLevel = n.curMaxLevel, this.data.curLevel = n.curLevel, this.data.shopDatas = n.shopDatas, this.data.attack = n.attack, this.data.price = n.price, this.data.range1 = n.range1, this.data.bankAward = n.bankAward, this.data.isShowGuide = n.isShowGuide, t.leaveTime = Date.now() - this.data.loginTime, t.leaveTime < 0 && (t.leaveTime = 0)
        } else this.data.id = 10, this.data.name = "小白", this.data.level = 1, this.data.jinbi = 1e3, this.data.zuanshi = 200, this.data.jingyan = 0, this.data.unlockMaxid = 3, this.data.loginTime = Date.now(), this.data.zhiwu = [{
            id: 1,
            slot: 6
        }], this.data.dateArr = [], this.data.zhuanPanNum = 3, this.data.zhuanPanTime = 0, this.data.soundonoff = !0, this.data.curMaxLevel = 1, this.data.curLevel = 1, this.data.zhanli = 100, this.data.attack = 0, this.data.price = 0, this.data.range1 = 5, this.data.bankAward = 0, this.data.isShowGuide = !1, this.data.shopDatas = [{
            id: 1,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 2,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 3,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 4,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 5,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 6,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 7,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 8,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 9,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 10,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 11,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 12,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 13,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 14,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 15,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 16,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 17,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 18,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 19,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 20,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 21,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 22,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 23,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 24,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 25,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 26,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 27,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 28,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 29,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 30,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 31,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 32,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 33,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 34,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 35,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 36,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 37,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 38,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 39,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 40,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 41,
            jinbicishu: 0,
            zuanshicishu: 0
        }, {
            id: 42,
            jinbicishu: 0,
            zuanshicishu: 0
        }]
    }, t.prototype.save = function() {
        this.calLeaveTime();
        var e = JSON.stringify(this.data),
            t = "UserData_wxZombie_16";
        egret.localStorage.setItem(t, e)
    }, t.prototype.getid = function() {
        return this.data.id
    }, t.prototype.getname = function() {
        return this.data.name
    }, t.prototype.setGuide = function() {
        this.data.isShowGuide = !0, this.save()
    }, t.prototype.getGuide = function() {
        return this.data.isShowGuide
    }, t.prototype.getShopData = function() {
        return this.data.shopDatas
    }, t.prototype.setShopData = function(e) {
        this.data.shopDatas = e
    }, t.prototype.downShopData = function(e) {
        this.data.shopDatas = e
    }, t.prototype.setShopDataId = function(e, t) {
        this.data.shopDatas[t - 1] = e
    }, t.prototype.setjinbicishu = function(e) {
        this.data.shopDatas[e - 1].jinbicishu++
    }, t.prototype.setzuanshicishu = function(e) {
        this.data.shopDatas[e - 1].zuanshicishu++
    }, t.prototype.getPlantData = function() {
        return this.data.zhiwu
    }, t.prototype.downPlantData = function(e) {
        this.data.zhiwu = e
    }, t.prototype.getDateArr = function() {
        return this.data.dateArr
    }, t.prototype.setDateArr = function(e) {
        this.data.dateArr = [], this.data.dateArr = e
    }, t.prototype.getZhuanPanNum = function() {
        return this.data.zhuanPanNum
    }, t.prototype.setZhuanPanNum = function(e, t) {
        t ? this.data.zhuanPanNum += e : (this.data.zhuanPanNum -= e, this.data.zhuanPanNum < 0 && (this.data.zhuanPanNum = 0))
    }, t.prototype.setZhuanPan = function(e) {
        this.data.zhuanPanNum = e
    }, t.prototype.getZhuanPanTime = function() {
        return this.data.zhuanPanTime
    }, t.prototype.setZhuanPanTime = function(e) {
        this.data.zhuanPanTime = e
    }, t.prototype.getRange = function() {
        return this.data.range1
    }, t.prototype.setRange = function() {
        this.data.range1 -= 1, this.data.range1 <= 2 && (this.data.range1 = 5), this.save()
    }, t.prototype.getsoundonoff = function() {
        return this.data.soundonoff
    }, t.prototype.setsoundonoff = function(e) {
        this.data.soundonoff = e, this.save()
    }, t.prototype.getCurMaxLevel = function() {
        return this.data.curMaxLevel
    }, t.prototype.setCurMaxLevel = function(e) {
        this.data.curMaxLevel = e, this.save()
    }, t.prototype.getBankAward = function() {
        return this.data.bankAward
    }, t.prototype.setBankAward = function(e) {
        this.data.bankAward = e, this.save()
    }, t.prototype.getCurLevel = function() {
        return this.data.curLevel
    }, t.prototype.setCurLevel = function(e) {
        this.data.curLevel = e, this.save()
    }, t.prototype.getAttack = function() {
        return this.data.attack
    }, t.prototype.setAttack = function(e) {
        this.data.attack += e, this.save()
    }, t.prototype.getPrice = function() {
        return this.data.price
    }, t.prototype.setPrice = function(e) {
        this.data.price += e, this.save()
    }, t.prototype.getZhanli = function() {
        return this.data.zhanli
    }, t.prototype.setZhanli = function(e) {
        this.data.zhanli = e, this.save()
    }, t.prototype.getLevel = function() {
        return this.data.level
    }, t.prototype.setLevel = function(e) {
        this.data.level = e, this.save()
    }, t.prototype.setExp = function(e) {
        this.data.jingyan += e, this.save()
    }, t.prototype.getExp = function() {
        return this.data.jingyan
    }, t.prototype.restExp = function() {
        this.data.jingyan = 0, this.save()
    }, t.prototype.serilizeZhiWu = function(e) {
        var t = new Array;
        for (var i in e)
            if (!e[i].isBox() && !e[i].isDie() && e[i].getStation() < 16) {
                var n = {
                    id: parseInt(e[i].getAvataID()),
                    slot: e[i].getStation()
                };
                t.push(n)
            } this.data.zhiwu = t, this.save()
    }, t.prototype.getUnLockMaxID = function() {
        var e = this;
        return e.data.unlockMaxid
    }, t.prototype.downUnLock = function(e) {
        var t = this;
        t.data.unlockMaxid = e, t.save()
    }, t.prototype.setUnlockMaxID = function(e) {
        var t = this;
        e > t.data.unlockMaxid && (t.data.unlockMaxid = e)
    }, t.prototype.isUnlockMaxID = function() {
        var e = this;
        return e.data.unlockMaxid > GameConst.MaxPlantID ? !0 : !1
    }, t.prototype.getZuanShi = function() {
        return this.data.zuanshi
    }, t.prototype.downZuanShi = function(e) {
        this.data.zuanshi = e
    }, t.prototype.getGold = function() {
        return this.data.jinbi
    }, t.prototype.downgold = function(e) {
        this.data.jinbi = e
    }, t.prototype.addZuanShi = function(e) {
        var t = this;
        t.data.zuanshi += e, t.save()
    }, t.prototype.minusZuanShi = function(e) {
        this.data.zuanshi >= e && (this.data.zuanshi -= e)
    }, t.prototype.addGold = function(e) {
        var t = this;
        t.data.jinbi += e, t.save()
    }, t.prototype.serilizegold = function(e) {
        this.data.jinbi += e, this.data.jinbi < 0 && (this.data.jinbi = 0)
    }, t.prototype.minusgold = function(e) {
        this.data.jinbi >= e && (this.data.jinbi -= e)
    }, t.prototype.calLeaveTime = function() {
        t.leaveTime > 0 && (this.data.loginTime = Date.now())
    }, t.leaveTime = .1, t.GameType = "4399", t
}(SingletonClass);
__reflect(UserConfig.prototype, "UserConfig");
var wxPLATFORM = new wxPlatform,
    wxTools = function() {
        function e() {}
        return e.showBannerAd = function(t) {
            if ("" != t && "function" == typeof wx.createBannerAd) {
                var i = wx.getSystemInfoSync(),
                    n = (i.windowWidth, i.windowHeight, i.screenWidth),
                    o = i.screenHeight;
                e._targetBannerAdWidth = o / 4 * 3, e.banner_ad ? e.banner_ad.show().then() : e.banner_ad = wx.createBannerAd({
                    adUnitId: t,
                    style: {
                        width: e._targetBannerAdWidth,
                        top: o - e._targetBannerAdWidth / 3,
                        left: (n - e._targetBannerAdWidth) / 2
                    }
                }), e.banner_ad.onLoad(function() {
                    e.banner_ad.show().then()
                }), e.banner_ad.onError(function(e) {}), e.banner_ad.onResize(function(t) {
                    e._targetBannerAdWidth != t.width && (e._targetBannerAdWidth = t.width, e.banner_ad.style.top = o - e._targetBannerAdWidth / 3, e.banner_ad.style.left = (n - e._targetBannerAdWidth) / 2)
                })
            }
        }, e.miniBannerAd = function(t) {
            if ("" != t && "function" == typeof wx.createBannerAd) {
                e._showBanner = !0;
                var i = wx.getSystemInfoSync(),
                    n = (i.windowWidth, i.windowHeight, i.screenWidth),
                    o = i.screenHeight;
                e._targetBannerAdWidth = 300, e.banner_ad ? e.banner_ad.show().then(function() {
                    e._showBanner || e.closeBanner()
                }) : (e.banner_ad = wx.createBannerAd({
                    adUnitId: t,
                    style: {
                        width: e._targetBannerAdWidth,
                        top: o - e._targetBannerAdWidth / 3 - 5,
                        left: (n - e._targetBannerAdWidth) / 2
                    }
                }), e.banner_ad.onLoad(function() {
                    e.banner_ad && e.banner_ad.show().then(function() {
                        e._showBanner || e.closeBanner()
                    })
                }), e.banner_ad.onError(function(e) {
                    var t = wx.getSystemInfoSync();
                    e.errCode && 1e3 != e.errCode && 1004 != e.errCode && wx.aldSendEvent("广告:" + e.errCode + "_" + t.brand + t.model)
                }), e.banner_ad.onResize(function(t) {
                    e._targetBannerAdWidth != t.width && (e._targetBannerAdWidth = t.width, e.banner_ad.style && (e.banner_ad.style.top = o - e._targetBannerAdWidth / 3 - 5, e.banner_ad.style.left = (n - e._targetBannerAdWidth) / 2))
                }))
            }
        }, e.customBannerAd = function(t, i, n, o) {
            if ("" != t && "function" == typeof wx.createBannerAd) {
                var a = wx.getSystemInfoSync(),
                    r = (a.windowWidth, a.windowHeight, wx.getSystemInfoSync()),
                    s = o / App.stage.stageWidth * r.screenWidth,
                    p = i / App.stage.stageWidth * r.screenWidth,
                    h = n / App.stage.stageHeight * r.screenHeight;
                e._targetBannerAdWidth = s, App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, e._targetBannerAdWidth.toString()), e.banner_ad ? e.banner_ad.show().then() : e.banner_ad = wx.createBannerAd({
                    adUnitId: t,
                    style: {
                        top: h,
                        left: p,
                        width: s
                    }
                }), e.banner_ad.onLoad(function() {
                    e.banner_ad.show().then()
                }), e.banner_ad.onError(function(e) {}), e.banner_ad.onResize(function(e) {})
            }
        }, e.closeBanner = function() {
            if (e._showBanner = !1, e.banner_ad && "function" == typeof e.banner_ad.hide)
                if (e.banner_ad.hide(), e.bannerCloseTime) {
                    var t = egret.getTimer() - e.bannerCloseTime;
                    t > 15e3 && (e.bannerCloseTime = egret.getTimer(), "function" == typeof e.banner_ad.destroy && (e.banner_ad.offLoad(), e.banner_ad.offResize(), e.banner_ad.offError(), e.banner_ad.destroy(), e.banner_ad = null))
                } else e.bannerCloseTime = egret.getTimer()
        }, e.InformationAd = function() {
            "NT" == UserConfig.GameType && egret.ExternalInterface.call("CTN_loadInformation", "")
        }, e.closeInformationAd = function() {
            "NT" == UserConfig.GameType && egret.ExternalInterface.call("CTN_CloseInformation", "")
        }, e.playAd = function(e) {
            var t = window.egret_4399_h5api;
            t.playAd(function(t) {
                1e4 === t.code ? App.UserConfig.getsoundonoff() && App.SoundManager.setBgVolume(0) : 10001 === t.code ? (App.videoType = e, wxTools.onVideoAdReward()) : (console.log("QC bất thường"), App.UserConfig.getsoundonoff() && App.SoundManager.setBgVolume(1))
            })
        }, e.onVideoAdReward = function() {
            console.info("[GVAdBreak] QC kết thúc — phát thưởng, videoType:", App.videoType, VideoRewardType && VideoRewardType[App.videoType] || ""), App.MessageCenter.dispatch(MessageType.SeeVideoEnd + ""), App.UserConfig.getsoundonoff() && App.SoundManager.setBgVolume(1)
        }, e.showVideoAd = function(t, i) {
            if ("NT" == UserConfig.GameType) {
                if (e.showVideoAdTime) {
                    var n = egret.getTimer() - e.showVideoAdTime;
                    if (2e4 > n) {
                        if (n > 3e3) {
                            var o = Math.ceil((2e4 - n) / 1e3);
                            App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Vui lòng " + o + " thử lại sau vài giây")
                        }
                        return
                    }
                }
                return console.info("[GVAdBreak] Gọi QC native (NT), videoType:", i, VideoRewardType && VideoRewardType[i] || ""), e.showVideoAdTime = egret.getTimer(), App.videoType = i, void egret.ExternalInterface.call("CTN_ShowVideo", "")
            }
            if (e.showVideoAdTime) {
                var n = egret.getTimer() - e.showVideoAdTime;
                if (2e3 > n) return
            }
            if (e.showVideoAdTime = egret.getTimer(), App.videoType = i, "function" == typeof window.GVAdBreak) return console.info("[GVAdBreak] Gọi QC Arcade — videoType:", i, VideoRewardType && VideoRewardType[i] || ""), App.UserConfig.getsoundonoff() && App.SoundManager.setBgVolume(0), void window.GVAdBreak(function() {
                console.info("[GVAdBreak] Callback Arcade — xem QC xong, videoType:", i, VideoRewardType && VideoRewardType[i] || ""), e.onVideoAdReward()
            });
            if (!e.OpenAd) return console.info("[GVAdBreak] OpenAd=false — bỏ qua QC, trao thưởng ngay, videoType:", i, VideoRewardType && VideoRewardType[i] || ""), void e.onVideoAdReward();
            return console.info("[GVAdBreak] Fallback QC 4399, videoType:", i, VideoRewardType && VideoRewardType[i] || ""), void e.playAd(i)
        }, e.setDefaultShare = function() {
            wx.showShareMenu({
                withShareTicket: !1,
                success: function(e) {},
                fail: function(e) {
                    console.warn(e)
                }
            }), wx.aldOnShareAppMessage(function() {
                return {
                    title: GameConfig.getShareTitle() || "",
                    imageUrl: GameConfig.getShareImg() || "",
                    imageUrlId: GameConfig.getShareImgID || "",
                    query: "id=89&select=2"
                }
            })
        }, e.shareGame = function(e, t, i, n) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(o) {
                    return e || (e = GameConfig.getsharequery()), t || (t = GameConfig.getShareContent()), i || (i = GameConfig.getShareImg()), n || (n = GameConfig.getShareImgID()), [2, new Promise(function(e, o) {
                        wx.aldShareAppMessage({
                            title: t,
                            imageUrl: i,
                            imageUrlId: n,
                            query: "id=89&select=2",
                            success: function(t) {
                                e(t)
                            },
                            fail: function(t) {
                                e(null)
                            }
                        })
                    })]
                })
            })
        }, e.update = function() {
            var e = wx.getUpdateManager();
            e.onCheckForUpdate(function(e) {}), e.onUpdateReady(function(t) {
                wx.showModal({
                    title: "更新提示",
                    content: "新版本已经准备好，是否重启应用？",
                    cancelText: "否",
                    confirmText: "是",
                    success: function(t) {
                        t.confirm && e.applyUpdate()
                    }
                })
            }), e.onUpdateFailed(function(e) {
                Log.info("onUpdateFailed")
            })
        }, e.trygetUserInfo = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return [2, new Promise(function(e, t) {
                        wx.getUserInfo({
                            success: function(t) {
                                var i = t.userInfo;
                                e(i)
                            },
                            fail: function(e) {
                                t(e)
                            }
                        })
                    })]
                })
            })
        }, e.login = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return [2, new Promise(function(e, t) {
                        wx.login({
                            success: function(i) {
                                wx.getUserInfo({
                                    success: function(t) {
                                        t.userInfo;
                                        e("获取个人信息成功")
                                    },
                                    fail: function(e) {
                                        t("获取个人信息失败")
                                    }
                                })
                            },
                            fail: function(e) {
                                t("login fail")
                            }
                        })
                    })]
                })
            })
        }, e.getShouQuan = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    return [2, new Promise(function(t, i) {
                        wx.getSetting({
                            success: function(n) {
                                null === n.authSetting["scope.userInfo"] || void 0 === n.authSetting["scope.userInfo"] ? "function" == typeof wx.createUserInfoButton ? i("createbutton") : wx.authorize({
                                    scope: "scope.userInfo",
                                    success: function(n) {
                                        e.trygetUserInfo().then(function(e) {
                                            t("getUserInfo success")
                                        })["catch"](function() {
                                            Log.info("获取用户信息失败"), i("getUserInfo fail")
                                        })
                                    },
                                    fail: function(e) {
                                        i("authorize fail")
                                    }
                                }) : n.authSetting["scope.userInfo"] === !0 ? t("授权已经开启") : n.authSetting["scope.userInfo"] === !1 && ("function" == typeof wx.createUserInfoButton ? i("createbutton") : wx.openSetting({
                                    success: function(e) {
                                        t("openSetting success")
                                    },
                                    fail: function(e) {
                                        i("openSetting fail ")
                                    }
                                }))
                            },
                            fail: function(e) {
                                i("getSetting fail ")
                            }
                        })
                    })]
                })
            })
        }, e.getRecordShouQuan = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return [2, new Promise(function(e, t) {
                        wx.getSetting({
                            success: function(i) {
                                i.authSetting["scope.record"] === !1 ? wx.openSetting({
                                    success: function(t) {
                                        e("openSetting success")
                                    },
                                    fail: function(e) {
                                        t("openSetting fail ")
                                    }
                                }) : t("openSetting fail ")
                            },
                            fail: function(e) {
                                t("getSetting fail ")
                            }
                        })
                    })]
                })
            })
        }, e.tryLogin = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return [2, new Promise(function(e, t) {
                        wx.login({
                            success: function(t) {
                                e("登录成功")
                            },
                            fail: function(e) {
                                t("登录失败")
                            }
                        })
                    })]
                })
            })
        }, e.createUserButton = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(e) {
                    return [2, new Promise(function(e, t) {
                        var i = wx.getSystemInfoSync(),
                            n = 325 / App.stage.stageWidth * i.screenWidth,
                            o = 130 / App.stage.stageHeight * i.screenHeight,
                            a = .5 * (i.screenWidth - n),
                            r = (App.stage.stageHeight - 200 - 65) / App.stage.stageHeight * i.screenHeight,
                            s = wx.createUserInfoButton({
                                type: "text",
                                text: "",
                                style: {
                                    top: r,
                                    left: a,
                                    width: n,
                                    height: o,
                                    textAlign: "center",
                                    fontSize: 16
                                }
                            });
                        s.show(), s.onTap(function(t) {
                            e(t.userInfo), s.hide(), s.destroy()
                        })
                    })]
                })
            })
        }, e.hasCreateUserButton = function() {
            return e._headUserinfoButton ? !0 : !1
        }, e.hideUserButton = function() {
            e._headUserinfoButton && (e._headUserinfoButton.hide(), e._headUserinfoButton.destroy(), e._headUserinfoButton = null)
        }, e.showUserButton = function() {
            e._headUserinfoButton && e._headUserinfoButton.show()
        }, e.createHeadUserButton = function(t, i, n, o) {
            var a = wx.getSystemInfoSync(),
                r = n / App.stage.stageWidth * a.screenWidth,
                s = o / App.stage.stageHeight * a.screenHeight,
                p = t / App.stage.stageWidth * a.screenWidth,
                h = i / App.stage.stageHeight * a.screenHeight;
            e._headUserinfoButton = wx.createUserInfoButton({
                type: "text",
                text: "",
                style: {
                    top: h,
                    left: p,
                    width: r,
                    height: s,
                    textAlign: "center",
                    fontSize: 16
                }
            }), e._headUserinfoButton.show(), e._headUserinfoButton.onTap(function(t) {
                t && t.userInfo && (App.MessageCenter.dispatch(MessageType.OnShouQuan.toString(), t.userInfo), e._headUserinfoButton && (e._headUserinfoButton.hide(), e._headUserinfoButton.destroy(), e._headUserinfoButton = null))
            })
        }, e.sendtoOpendata = function(e) {
            var t = wx.getOpenDataContext();
            t.postMessage(e)
        }, e.linkOpenData = function(t, i, n) {
            var o = i || App.stage.stageWidth,
                a = n || App.stage.stageHeight,
                r = new egret.Shape;
            r.graphics.beginFill(1118481, .5), r.graphics.drawRect(0, 0, App.stage.stageWidth, App.stage.stageHeight), r.graphics.endFill(), r.touchEnabled = !0;
            var s = {
                canvasWidth: o,
                canvasHeight: a
            };
            for (var p in t) s[p] = t[p];
            var h = new eui.UILayer,
                l = wx.getOpenDataContext(),
                c = l,
                g = new egret.BitmapData(c.canvas);
            c.canvas.width = o, c.canvas.height = a, g.$deleteSource = !1;
            var u = new egret.Texture;
            u._setBitmapData(g);
            var d;
            d = new egret.Bitmap(u), d.width = o, d.height = a, d.x = .5 * (App.stage.stageWidth - o), d.y = .5 * (App.stage.stageHeight - a), d.touchEnabled = !0, h.addChild(r), h.addChild(d), h.touchEnabled = !0, h.name = "opendData", r.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                l.postMessage({
                    command: "close"
                }), egret.stopTick(m, e), App.stage.removeChild(h)
            }, e);
            var m = function(e) {
                return egret.WebGLUtils.deleteWebGLTexture(g.webGLTexture), g.webGLTexture = null, !1
            };
            l.postMessage(s), e.first && (e.first = !1, egret.setTimeout(function() {
                l.postMessage({
                    command: "close"
                }), egret.stopTick(m, e), App.stage.removeChild(h)
            }, e, 200), egret.setTimeout(function() {
                e.linkOpenData({
                    command: "open",
                    type: "friend"
                }, 600, 800)
            }, e, 1e3)), egret.startTick(m, e), h.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function(t) {
                d.globalToLocal(t.stageX, t.stageY, e.tmpPoint), e.tmpPoint.y > e.offRankY && e.tmpPoint.y < a - e.bottomTab && l.postMessage({
                    command: "mouseDown",
                    y: t.stageY
                })
            }, e), h.addEventListener(egret.TouchEvent.TOUCH_MOVE, function(e) {
                l.postMessage({
                    command: "mouseMove",
                    y: e.stageY
                })
            }, e), h.addEventListener(egret.TouchEvent.TOUCH_END, function(e) {
                l.postMessage({
                    command: "mouseEnd",
                    y: e.stageY
                })
            }, e), h.addEventListener(egret.TouchEvent.TOUCH_CANCEL, function(e) {
                l.postMessage({
                    command: "mouseEnd",
                    y: e.stageY
                })
            }, e), App.stage.addChild(h)
        }, e.linkPassData = function(t, i, n) {
            var o = i,
                a = n,
                r = new egret.Shape;
            r.graphics.beginFill(1118481, .5), r.graphics.drawRect(0, 0, App.stage.stageWidth, App.stage.stageHeight), r.graphics.endFill(), r.touchEnabled = !0;
            var s = {
                canvasWidth: o,
                canvasHeight: a
            };
            for (var p in t) s[p] = t[p];
            var h = new eui.UILayer,
                l = wx.getOpenDataContext(),
                c = l,
                g = new egret.BitmapData(c.canvas);
            c.canvas.width = o, c.canvas.height = a, g.$deleteSource = !1;
            var u = new egret.Texture;
            u._setBitmapData(g);
            var d;
            d = new egret.Bitmap(u), d.width = o, d.height = a, d.x = .5 * (App.stage.stageWidth - o), d.y = .5 * (App.stage.stageHeight - a), d.touchEnabled = !0, h.addChild(r), h.addChild(d), h.touchEnabled = !0, h.name = "opendData", r.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                l.postMessage({
                    command: "close"
                }), egret.stopTick(m, e), App.stage.removeChild(h)
            }, e);
            var m = function(e) {
                return egret.WebGLUtils.deleteWebGLTexture(g.webGLTexture), g.webGLTexture = null, !1
            };
            l.postMessage(s), egret.startTick(m, e), App.stage.addChild(h)
        }, e.uploadScore = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, wxPLATFORM.setKVData({
                                score: e + ""
                            }).then(function(e) {
                                Log.info("成功上传")
                            })["catch"](function(e) {
                                Log.info("上传保存最高级失败")
                            })];
                        case 1:
                            return t.sent(), [2, !0]
                    }
                })
            })
        }, e.closeRecommendationButton = function() {
            var t = e;
            t.recommendationButton && t.recommendationButton.hide()
        }, e.compareVersion = function(e, t) {
            e = e.split("."), t = t.split(".");
            for (var i = Math.max(e.length, t.length); e.length < i;) e.push("0");
            for (; t.length < i;) t.push("0");
            for (var n = 0; i > n; n++) {
                var o = parseInt(e[n]),
                    a = parseInt(t[n]);
                if (o > a) return 1;
                if (a > o) return -1
            }
            return 0
        }, e.CreateVideoRecorderManager = function() {
            var t = e;
            if (!t.recorder) {
                var i = wx.getSystemInfoSync().SDKVersion;
                if (e.compareVersion(i, "2.8.0") >= 0) {
                    if ("function" != typeof wx.getGameRecorder) return void Log.info("wx.getGameRecorder != function");
                    if (t.recorder = wx.getGameRecorder(), !t.recorder.isFrameSupported()) return void Log.info("手机不支持录屏");
                    "ios" == wx.getSystemInfoSync().platform ? t.supportRecorder = !1 : t.supportRecorder = !0
                } else Log.info("微信版本太低无法录屏")
            }
        }, e.startReccord = function() {
            return __awaiter(this, void 0, void 0, function() {
                var t;
                return __generator(this, function(i) {
                    return t = e, t._isRecording ? (App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Ghi âm..."), [2]) : t._clickStartRecordTime && egret.getTimer() - t._clickStartRecordTime < 5e3 ? (App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Nhấp để ghi quá thường xuyên, vui lòng đợi"), [2]) : (t._clickStartRecordTime = egret.getTimer(), t.supportRecorder ? (t._videoDuration = null, t.recorder.start({
                        duration: 7200
                    }), t.recorder.on("start", function() {
                        t._isRecording = !0, App.MessageCenter.dispatch(MessageType.recordStart.toString(), t._videoDuration)
                    }), t.recorder.on("stop", function(e) {
                        t._isRecording = !1, t._videoDuration = e.duration, App.MessageCenter.dispatch(MessageType.recordEnd.toString(), t._videoDuration), t._videoDuration > 5e3 ? (App.MessageCenter.dispatch(MessageType.shareVideo + "", t._videoDuration), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Quá trình ghi màn hình đã kết thúc, giao diện dàn xếp có thể được chia sẻ")) : App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Thời gian quay phim màn hình quá ngắn")
                    }), t.recorder.on("error", function(e) {
                        App.MessageCenter.dispatch(MessageType.recordEnd.toString(), t._videoDuration), t._isRecording = !1
                    }), [2]) : [2])
                })
            })
        }, e.pauseReccord = function() {
            var t = e;
            t.supportRecorder && (t.recorder.on("pause", function() {
                console.log("暂停录音")
            }), t.recorder.pause())
        }, e.resumeReccord = function() {
            var t = e;
            t.supportRecorder && (t.recorder.on("resume", function() {
                console.log("继续录音")
            }), t.recorder.resume())
        }, e.stopReccord = function() {
            var t = e;
            t.supportRecorder && t._isRecording && (t._clickStopRecordTime && egret.getTimer() - t._clickStopRecordTime < 5e3 || (t._clickStopRecordTime = egret.getTimer(), t.recorder.stop()))
        }, e.showRecordbut = function(t, i, n) {
            var o = e;
            if (o.supportRecorder && !(o._videoDuration && o._videoDuration < 5e3 || o.showRecordTime && egret.getTimer() - o.showRecordTime < 1e4)) {
                o.showRecordTime = egret.getTimer(), o._videoDuration > 6e4 && (o._videoDuration = 6e4);
                var a = wx.getSystemInfoSync(),
                    r = (a.windowWidth, a.windowHeight, wx.getSystemInfoSync()),
                    s = n / App.stage.stageHeight * r.screenHeight,
                    p = i.x / App.stage.stageWidth * r.screenWidth,
                    h = i.y / App.stage.stageHeight * r.screenHeight;
                o._recordShareBut && (o._recordShareBut.share.timeRange = [
                    [0, o._videoDuration]
                ]), o._recordShareBut || (o._recordShareBut = wx.createGameRecorderShareButton({
                    style: {
                        left: p,
                        top: h,
                        height: s,
                        color: "#ffffff",
                        textAlign: "center",
                        fontSize: 16,
                        borderRadius: 4,
                        iconMarginRight: 16,
                        paddingLeft: 1,
                        paddingRight: 30
                    },
                    text: "Chia sẻ video",
                    share: {
                        query: "a=1&b=2",
                        bgm: "beijing.mp3",
                        timeRange: [
                            [0, o._videoDuration]
                        ],
                        title: {
                            template: "default.score",
                            data: {
                                score: t
                            }
                        },
                        button: {
                            template: "challenge"
                        }
                    }
                }), o._recordShareBut.onTap(function(e) {})), o._recordShareBut.show()
            }
        }, e.hideRecordBut = function() {
            var t = e;
            t.supportRecorder && t._recordShareBut && t._recordShareBut.hide()
        }, e.createGameBanner = function() {
            var t = e;
            if (!t._gamebaner) {
                var i = wx.getSystemInfoSync().SDKVersion;
                if (e.compareVersion(i, "2.7.5") >= 0) {
                    if ("function" != typeof wx.createGameBanner) return;
                    var n = wx.getSystemInfoSync();
                    t._gamebaner = wx.createGameBanner({
                        adUnitId: GameConst.WXGameBanerID,
                        style: {
                            left: 10,
                            top: n.screenHeight - 30
                        }
                    }), t._gamebaner.onError(function(e) {
                        console.log(JSON.stringify(e))
                    })
                } else console.log("微信版本太低不支持交叉推荐栏")
            }
        }, e.showGameBanner = function() {
            var t = e;
            t._gamebaner && (t.showGameBannerTimer && egret.getTimer() - t.showGameBannerTimer < 5e3 || (t.showGameBannerTimer = egret.getTimer(), t._gamebaner.show()))
        }, e.hideGameBanner = function() {
            var t = e;
            t._gamebaner && t._gamebaner.hide()
        }, e.createGamePort = function() {
            var t = e;
            if (!t._gamePort) {
                var i = wx.getSystemInfoSync().SDKVersion;
                if (e.compareVersion(i, "2.7.5") >= 0) {
                    if ("function" != typeof wx.createGamePortal) return void Log.info("wx.createGamePortal != function");
                    t._gamePort = wx.createGamePortal({
                        adUnitId: GameConst.WXGamePortID
                    }), t._gamePort.onError(function(e) {
                        console.log(JSON.stringify(e))
                    })
                } else console.log("微信版本太低不支持推荐框")
            }
        }, e.showGamePort = function() {
            var t = e;
            if (t._gamePort) {
                if (t.showGamePortTimer && egret.getTimer() - t.showGamePortTimer < 5e3) return void App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Vui lòng thử lại sau");
                t.showGamePortTimer = egret.getTimer(), t._gamePort.show()
            }
        }, e.hideGamePort = function() {
            var t = e;
            t._gamePort && t._gamePort.hide()
        }, e.navigateToMiniProgram = function(e, t, i, n) {
            return void 0 === t && (t = ""), __awaiter(this, void 0, void 0, function() {
                var o, a;
                return __generator(this, function(r) {
                    return o = "打开_" + i, a = o + "_成功", wx.aldSendEvent(o), [2, new Promise(function(i, o) {
                        wx.navigateToMiniProgram({
                            appId: e,
                            path: t,
                            extraData: {},
                            envVersion: "release",
                            success: function(e) {
                                wx.aldSendEvent(a)
                            },
                            fail: function() {
                                n || App.UIManager.open("MoreGameView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1, "客观请留步")
                            }
                        })
                    })]
                })
            })
        }, e.InsertAd = function(t) {
            if ("" != t && "function" == typeof wx.createInterstitialAd && !(e.insertCloseTime && egret.getTimer() - e.insertCloseTime < 6e4)) {
                if (e.insertCloseTime = egret.getTimer(), !e.insert_ad) {
                    if (e.insert_ad = wx.createInterstitialAd({
                            adUnitId: t
                        }), !e.insert_ad) return;
                    e.insert_ad.onLoad(function() {}), e.insert_ad.onError(function(t) {
                        e.insertCloseTime = egret.getTimer()
                    }), e.insert_ad.onClose(function(t) {
                        e.insertCloseTime = egret.getTimer()
                    })
                }
                e.insert_ad && e.insert_ad.show().then(function() {})["catch"](function(t) {
                    e.insert_ad && "function" == typeof e.insert_ad.destroy && ("function" == typeof e.insert_ad.offLoad && e.insert_ad.offLoad(), "function" == typeof e.insert_ad.offError && e.insert_ad.offError(), "function" == typeof e.insert_ad.offClose && e.insert_ad.offClose(), e.insert_ad.destroy(), e.insert_ad = null)
                })
            }
        }, e.tmpPoint = new egret.Point, e.iv = "", e.enctypecode = "", e.video_ads = {}, e.current_video_ad_id = "", e.supportRecorder = !1, e._targetBannerAdWidth = 600, e.OpenAd = !0, e._showBanner = !1, e.offRankY = 100, e.bottomTab = 15, e.first = !1, e._isRecording = !1, e
    }();
__reflect(wxTools.prototype, "wxTools");
var MovieClipManager = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.movieClipDataFactory = {}, t
    }
    return __extends(t, e), t.prototype.load = function(e, t) {
        var i = this,
            n = i.movieClipDataFactory[e];
        if (!n) {
            var o = RES.getRes(e + "_json"),
                a = RES.getRes(e + "_png");
            n = new egret.MovieClipDataFactory(o, a), i.movieClipDataFactory[e] = n
        }
        var r = ObjectPool.popWithExtraKey("egret.MovieClip", e + t);
        return r.extraKey || (r.movieClipData = n.generateMovieClipData(t), r.extraKey = e + t), r
    }, t.prototype.PlayOnceEffect = function(e) {
        e && (e.gotoAndPlay(1, 1), e.addEventListener(egret.Event.COMPLETE, function(t) {
            e.parent && (e.parent.removeChild(e), ObjectPool.push(e))
        }, this))
    }, t.prototype.PlayEffect = function(e, t) {
        e && e.gotoAndPlay(1, t)
    }, t.prototype.RemoveEffect = function(e) {
        e && e.parent && (e.parent.removeChild(e), ObjectPool.push(e))
    }, t
}(SingletonClass);
__reflect(MovieClipManager.prototype, "MovieClipManager"), window["egret.MovieClip"] = egret.MovieClip;
var AssetAdapter = function() {
    function e() {}
    return e.prototype.getAsset = function(e, t, i) {
        function n(n) {
            t.call(i, n, e)
        }
        if (RES.hasRes(e)) {
            var o = RES.getRes(e);
            o ? n(o) : RES.getResAsync(e, n, this)
        } else RES.getResByUrl(e, n, this, RES.ResourceItem.TYPE_IMAGE)
    }, e
}();
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var SoundBg = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._currBg = "", t
    }
    return __extends(t, e), t.prototype.stop = function() {
        this._currSoundChannel && this._currSoundChannel.stop(), this._currSoundChannel = null, this._currSound = null, this._currBg = ""
    }, t.prototype.play = function(e) {
        if (this._currBg != e) {
            this.stop(), this._currBg = e;
            var t = this.getSound(e);
            t && this.playSound(t)
        }
    }, t.prototype.playSound = function(e) {
        this._currSound = e, this._currSoundChannel = this._currSound.play(), this._currSoundChannel.volume = this._volume
    }, t.prototype.setVolume = function(e) {
        this._volume = e, this._currSoundChannel && (this._currSoundChannel.volume = this._volume)
    }, t.prototype.loadedPlay = function(e) {
        this._currBg == e && this.playSound(RES.getRes(e))
    }, t.prototype.checkCanClear = function(e) {
        return this._currBg != e
    }, t
}(BaseSound);
__reflect(SoundBg.prototype, "SoundBg");
var SoundEffect = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._soundLoops = {}, t._soundChannels = [], t._lastPlayTime = {}, t._minPlayInterval = 80, t._maxChannels = 12, t
    }
    return __extends(t, e), t.prototype.play = function(e, t) {
        var i = this.getSound(e);
        i ? this.playSound(e, i, t) : this._soundLoops[e] = t
    }, t.prototype.playSound = function(e, t, i) {
        var n = egret.getTimer();
        if (this._lastPlayTime[e] && n - this._lastPlayTime[e] < this._minPlayInterval) return;
        for (this._lastPlayTime[e] = n; this._soundChannels.length >= this._maxChannels;) this.destroyChannel(this._soundChannels[0].channel);
        var o = t.play(0, i);
        o.volume = this._volume, o.name = e, o.addEventListener(egret.Event.SOUND_COMPLETE, this.onPlayComplete, this), this._soundChannels.push({
            key: e,
            channel: o
        })
    }, t.prototype.onPlayComplete = function(e) {
        this.destroyChannel(e.currentTarget)
    }, t.prototype.destroyChannel = function(e) {
        for (var t = 0; t < this._soundChannels.length; t++)
            if (this._soundChannels[t].channel === e) {
                this._soundChannels.splice(t, 1);
                break
            } e.stop(), e.removeEventListener(egret.Event.SOUND_COMPLETE, this.onPlayComplete, this)
    }, t.prototype.stop = function(e) {
        for (var t = this._soundChannels.length - 1; t >= 0; t--) this._soundChannels[t].key === e && this.destroyChannel(this._soundChannels[t].channel)
    }, t.prototype.setVolume = function(e) {
        this._volume = e;
        for (var t = 0; t < this._soundChannels.length; t++) this._soundChannels[t].channel.volume = this._volume
    }, t.prototype.loadedPlay = function(e) {
        this.playSound(e, RES.getRes(e), this._soundLoops[e]), delete this._soundLoops[e]
    }, t.prototype.checkCanClear = function(e) {
        return !1
    }, t
}(BaseSound);
__reflect(SoundEffect.prototype, "SoundEffect", ["ISoundEffect"]);
var SoundManager = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.LocalStorageKey_Bg = "bgMusicFlag", t.LocalStorageKey_Effect = "effectMusicFlag", t.bgVolume = 1, t.effectVolume = .2, t.bg = new SoundBg, t.bg.setVolume(t.bgVolume), t.effect = new SoundEffect, t.effect.setVolume(t.effectVolume), t.setDefaultSwitchState(), t.preloadSounds(), t
    }
    return __extends(t, e), t.prototype.setDefaultSwitchState = function() {
        var e = egret.localStorage.getItem(this.LocalStorageKey_Bg);
        e ? this.bgOn = "1" == e : this.bgOn = !0;
        var t = egret.localStorage.getItem(this.LocalStorageKey_Effect);
        t ? this.effectOn = "1" == t : this.effectOn = !0
    }, t.prototype.preloadSounds = function() {
        RES.getRes("gongji_mp3") || RES.loadGroup("sound", 1, null)
    }, t.prototype.playEffect = function(e, t) {
        void 0 === t && (t = 1), this.effectOn && this.effect.play(e, t)
    }, t.prototype.stopEffect = function(e) {
        this.effect.stop(e)
    }, t.prototype.playBg = function(e) {
        this.currBg = e, this.bgOn && this.bg.play(e)
    }, t.prototype.stopBg = function() {
        this.bg.stop()
    }, t.prototype.setEffectOn = function(e) {
        this.effectOn = e, egret.localStorage.setItem(this.LocalStorageKey_Effect, e ? "1" : "0")
    }, t.prototype.setBgOn = function(e) {
        this.bgOn = e, egret.localStorage.setItem(this.LocalStorageKey_Bg, e ? "1" : "0"), this.bgOn ? this.currBg && this.playBg(this.currBg) : this.stopBg()
    }, t.prototype.setBgVolume = function(e) {
        e = Math.min(e, 1), e = Math.max(e, 0), this.bgVolume = e, this.bg.setVolume(this.bgVolume)
    }, t.prototype.getBgVolume = function() {
        return this.bgVolume
    }, t.prototype.setEffectVolume = function(e) {
        e = Math.min(e, 1), e = Math.max(e, 0), this.effectVolume = e, this.effect.setVolume(this.effectVolume)
    }, t.prototype.getEffectVolume = function() {
        return this.effectVolume
    }, Object.defineProperty(t.prototype, "bgIsOn", {
        get: function() {
            return this.bgOn
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "effectIsOn", {
        get: function() {
            return this.effectOn
        },
        enumerable: !0,
        configurable: !0
    }), t.CLEAR_TIME = 18e4, t
}(SingletonClass);
__reflect(SoundManager.prototype, "SoundManager");
var BoxTipStyle;
! function(e) {
    e[e.ok = 0] = "ok", e[e.enter = 1] = "enter", e[e.huoqu = 2] = "huoqu", e[e.yaoqing = 3] = "yaoqing", e[e.lingqu = 4] = "lingqu", e[e.fenxiang = 5] = "fenxiang", e[e.fuhuo = 6] = "fuhuo", e[e.shengji = 7] = "shengji"
}(BoxTipStyle || (BoxTipStyle = {}));
var BoxTip = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._interval = 0, t.skinName = "BoxTipSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), this.clickBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onquedingClick, this), BtnTool.btnSMin(this.clickBtn), this.tiaoguoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.tiaoguoBtn), this.huoquBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onhuoquBtnClick, this), BtnTool.btnSMin(this.huoquBtn)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        if (App.GameScene.unRegeditMapTouch(), i.quedingf = null, i.yaoqingf = null, i._closef = null, i.titleTex.text = "", i.contentTex.text = "", i.mapIma.source = "", e.length > 0 && e.length > 0) {
            var n = e[0][0];
            n == BoxTipStyle.ok ? (i.clickBtn.visible = !0, i.huoquBtn.visible = !1, i.tiaoguoBtn.visible = !0, i.queding.visible = !0, i.yaoqing.visible = !1, i.lingqu.visible = !1) : n == BoxTipStyle.enter ? (i.clickBtn.visible = !0, i.huoquBtn.visible = !1, i.tiaoguoBtn.visible = !1, i.queding.visible = !0, i.yaoqing.visible = !1, i.lingqu.visible = !1) : n == BoxTipStyle.huoqu ? (i.clickBtn.visible = !1, i.huoquBtn.visible = !0, i.tiaoguoBtn.visible = !0, i.lingquTex.text = "Nhận") : n == BoxTipStyle.yaoqing ? (i.clickBtn.visible = !0, i.huoquBtn.visible = !1, i.tiaoguoBtn.visible = !1, i.queding.visible = !1, i.yaoqing.visible = !0, i.lingqu.visible = !1) : n == BoxTipStyle.lingqu ? (i.clickBtn.visible = !0, i.huoquBtn.visible = !1, i.tiaoguoBtn.visible = !0, i.queding.visible = !1, i.yaoqing.visible = !1, i.lingqu.visible = !0) : n == BoxTipStyle.fenxiang ? (i.clickBtn.visible = !1, i.huoquBtn.visible = !1, i.tiaoguoBtn.visible = !1, i.queding.visible = !1, i.yaoqing.visible = !1, i.lingqu.visible = !1) : n == BoxTipStyle.fuhuo ? (i.clickBtn.visible = !1, i.huoquBtn.visible = !0, i.tiaoguoBtn.visible = !0, i.lingquTex.text = "Hồi sinh ngay") : n == BoxTipStyle.shengji && (i.clickBtn.visible = !1, i.huoquBtn.visible = !0, i.tiaoguoBtn.visible = !0, i.lingquTex.text = "Nâng cấp ngay"), e[0][1] && (i.titleTex.text = e[0][1]), e[0][2] && (i.contentTex.text = e[0][2]), e[0][3] && (i.mapIma.source = e[0][3]), e[0][4] && (i.quedingf = e[0][4]), e[0][5] && (i.yaoqingf = e[0][5]), e[0][6] && (i._closef = e[0][6])
        }
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.timer && (i.timer.stop(), i.timer = null), App.GameScene.regeditMapTouch()
    }, t.prototype.oncloseClick = function(e) {
        var t = this;
        App.SoundManager.playEffect("dianji_mp3", 1), t._closef && t._closef(), t.OnCloseUi()
    }, t.prototype.onquedingClick = function(e) {
        var t = this;
        App.SoundManager.playEffect("dianji_mp3", 1), t.quedingf && t.quedingf(), t.OnCloseUi()
    }, t.prototype.onhuoquBtnClick = function(e) {
        var t = this;
        App.SoundManager.playEffect("dianji_mp3", 1), t.yaoqingf && t.yaoqingf(), t.OnCloseUi()
    }, t.prototype.OnCloseUi = function() {
        egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME, App.UIManager.close("BoxTip", !1)
    }, t
}(BaseView);
__reflect(BoxTip.prototype, "BoxTip", ["eui.UIComponent", "egret.DisplayObject"]), window.BoxTip = BoxTip;
var DiaoXiangItemView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "DiaoXiangItemViewSkin", t
    }
    return __extends(t, e), t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t.prototype.onlingquBtnClick = function() {
        App.SoundManager.playEffect("dianji_mp3", 1)
    }, t.prototype.dataChanged = function() {
        this.itemData = this.data, this.shuXing.text = this.itemData.shuXing, this.head.visible = this.itemData.head
    }, t
}(eui.ItemRenderer);
__reflect(DiaoXiangItemView.prototype, "DiaoXiangItemView", ["eui.UIComponent", "egret.DisplayObject"]), window.DiaoXiangItemView = DiaoXiangItemView;
var DiaoXiangView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.sourceArr = [], t.skinName = "DiaoXiangViewSkin", t.height = App.stage.stageHeight, t.width = App.stage.stageWidth, t
    }
    return __extends(t, e), t.prototype.$onAddToStage = function(t, i) {
        e.prototype.$onAddToStage.call(this, t, i), App.MessageCenter.addListener(MessageType.WindowResize.toString(), this.stageOnResize, this), App.GameScene.unRegeditMapTouch()
    }, t.prototype.$onRemoveFromStage = function() {
        e.prototype.$onRemoveFromStage.call(this), this.clear()
    }, t.prototype.clear = function() {
        App.MessageCenter.removeListener(MessageType.WindowResize.toString(), this.stageOnResize, this), App.GameScene.regeditMapTouch()
    }, t.prototype.stageOnResize = function() {
        this.height = App.stage.stageHeight, this.width = App.stage.stageWidth
    }, t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this), this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.closeBtn), this.yaoqingBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onyaoqingClick, this), BtnTool.btnSMin(this.yaoqingBtn), this.myCollection = new eui.ArrayCollection(this.sourceArr), this.dataList.dataProvider = this.myCollection, this.dataList.itemRenderer = DiaoXiangItemView;
        var t = [{
            shuXing: "Vàng + 10%",
            head: !0
        }, {
            shuXing: "Công + 10%",
            head: !1
        }, {
            shuXing: "Tốc độ + 10%",
            head: !1
        }, {
            shuXing: "XP +10%",
            head: !1
        }, {
            shuXing: "Vàng + 15%",
            head: !1
        }, {
            shuXing: "Công +15%",
            head: !1
        }, {
            shuXing: "Tốc độ + 10%",
            head: !1
        }, {
            shuXing: "Vàng + 15%",
            head: !1
        }, {
            shuXing: "Vàng +20%",
            head: !1
        }, {
            shuXing: "Công +20%",
            head: !1
        }, {
            shuXing: "Tốc độ +20%",
            head: !1
        }, {
            shuXing: "XP +25%",
            head: !1
        }];
        this.diaoXiangData = t, this.setData(this.diaoXiangData)
    }, t.prototype.oncloseClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1)
    }, t.prototype.onyaoqingClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1)
    }, t.prototype.setData = function(e) {
        this.diaoXiangData = e, this.sourceArr = [];
        for (var t = 0; t < e.length; t++) this.sourceArr.push(e[t]);
        this.myCollection = new eui.ArrayCollection(this.sourceArr), this.dataList.dataProvider = this.myCollection
    }, t
}(BaseView);
__reflect(DiaoXiangView.prototype, "DiaoXiangView", ["eui.UIComponent", "egret.DisplayObject"]), window.DiaoXiangView = DiaoXiangView;
var DuanWeiDaTingView = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t
}(eui.Component);
__reflect(DuanWeiDaTingView.prototype, "DuanWeiDaTingView", ["eui.UIComponent", "egret.DisplayObject"]), window.DuanWeiDaTingView = DuanWeiDaTingView;
var DuanWeiTiShengView = function(e) {
    function t() {
        var t = e.call(this) || this,
            i = t;
        return i.skinName = "DuanWeiTiShengViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onGoBack, i), BtnTool.btnSMin(i.closeBtn, .7), i.reduce.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onReduce, i), BtnTool.btnSMin(i.reduce), i.addLevel.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onAddLevel, i), BtnTool.btnSMin(i.addLevel)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = App.UserConfig.getLevel(),
            n = App.FightSystem.getAttacker();
        App.MessageCenter.addListener(MessageType.SeeVideoEnd + "", this.advEnd, this);
        for (var o = 0, a = 0, r = 0; r < n.length; r++) n[r].isBox() || n[r].isDie() || n[r].isUfo() || (a += App.GameConfig.getroleItem(parseInt(n[r].getAvataID())).zhanli), App.UserConfig.setZhanli(a);
        i >= GameConst.MaxLevel ? (o = 1e6, this.curPower.text = App.UserConfig.getZhanli() + "", this.recommend.text = o + "", this.addLevel.visible = !1) : (o = App.GameConfig.getDanGrading()[i].militaryPower, this.curPower.text = App.UserConfig.getZhanli() + "", this.recommend.text = o + "", App.UserConfig.getExp() >= App.GameConfig.getDanGrading()[i].experience ? (App.EffectUtils.startScale(this.addLevel), this.addLevel.visible = !0, this.addLevel.touchChildren = !0, this.addLevel.touchEnabled = !0, this.addLevel.filters = []) : (this.addLevel.touchChildren = !1, this.addLevel.touchEnabled = !1, App.EffectUtils.setDisplayObjectGray(this.addLevel)), e[0][0] && 1 == e[0][0] && App.EffectUtils.startScale(this.reduce), o > a ? this.recommend.textColor = 16711680 : this.recommend.textColor = 7989618)
    }, t.prototype.nativeTime = function() {
        qgameKit.getNativeAd(GameConst.nativeAD)
    }, t.prototype.showNativeAD = function() {
        qgameKit.nativeAdItem && App.UIManager.open("yuanshengView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1)
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.MessageCenter.removeListener(MessageType.SeeVideoEnd + "", this.advEnd, this), App.EffectUtils.stopFlicker(this.addLevel), App.EffectUtils.stopFlicker(this.reduce), App.TimerManager.remove(this.nativeTime, this)
    }, t.prototype.advEnd = function() {
        var e = App.UserConfig.getLevel();
        App.videoType == VideoRewardType.ReduceLevel && (e--, App.UserConfig.setLevel(e), App.UserConfig.setAttack(-1 * GameConst.Attack), App.UserConfig.setPrice(-1 * GameConst.Price), App.isShowLevelDown = !1, App.FightSystem.gameOver(), this.addLevel.touchChildren = !1, this.addLevel.touchEnabled = !1, App.EffectUtils.setDisplayObjectGray(this.addLevel), App.EffectUtils.setDisplayObjectGray(this.addLevel), App.SoundManager.playEffect("duanwei_mp3", 1), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Hạ cấp thành công"), App.MessageCenter.dispatch(MessageType.DuanWei.toString()), this.onGoBack())
    }, t.prototype.onReduce = function() {
        var e = App.UserConfig.getLevel();
        return 1 >= e ? void App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Ở cấp thấp nhất, không thể bị hạ cấp") : void wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.ReduceLevel)
    }, t.prototype.onAddLevel = function() {
        var e = App.UserConfig.getLevel(),
            t = App.GameConfig.getDanGrading().length;
        return e >= t ? void App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Đã đạt Lv tối đa") : (e++, App.UserConfig.setLevel(e), App.UserConfig.getAttack() < 500 && App.UserConfig.setAttack(GameConst.Attack), App.UserConfig.getPrice() < 300 && App.UserConfig.setPrice(GameConst.Price), App.isShowLevelDown = !1, App.FightSystem.gameOver(), this.addLevel.touchChildren = !1, this.addLevel.touchEnabled = !1, App.EffectUtils.setDisplayObjectGray(this.addLevel), App.SoundManager.playEffect("duanwei_mp3", 1), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Chúc mừng bạn đã nâng cấp"), App.MessageCenter.dispatch(MessageType.DuanWei.toString()), void this.onGoBack())
    }, t.prototype.onGoBack = function() {
        App.UIManager.close("yuanshengView", !1), App.UIManager.close("DuanWeiTiShengView", !1)
    }, t
}(BaseView);
__reflect(DuanWeiTiShengView.prototype, "DuanWeiTiShengView", ["eui.UIComponent", "egret.DisplayObject"]), window.DuanWeiTiShengView = DuanWeiTiShengView;
var DuanWeiView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "DuanWeiViewSkin", t
    }
    return __extends(t, e), t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this), this.power.text = "123", this.levelUp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnClick, this)
    }, t.prototype.btnClick = function() {
        console.log("段位提升1")
    }, t
}(eui.Component);
__reflect(DuanWeiView.prototype, "DuanWeiView", ["eui.UIComponent", "egret.DisplayObject"]), window.DuanWeiView = DuanWeiView;
var GuanQiaView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "GuanQiaViewSkin", t
    }
    return __extends(t, e), t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t
}(BaseView);
__reflect(GuanQiaView.prototype, "GuanQiaView", ["eui.UIComponent", "egret.DisplayObject"]), window.GuanQiaView = GuanQiaView;
var HaoHuanLiBaoView = function(e) {
    function t() {
        var t = e.call(this) || this;
        t.count = 0;
        var i = t;
        return i.skinName = "HaoHuanLiBaoViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onGoBack, i), BtnTool.btnSMin(i.closeBtn), i.lingqubtn.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onLingQu, i), BtnTool.btnSMin(i.lingqubtn)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.GameScene.unRegeditMapTouch(), App.MessageCenter.addListener(MessageType.SeeVideoEnd + "", this.advEnd, this)
    }, t.prototype.nativeTime = function() {
        qgameKit.getNativeAd(GameConst.nativeAD)
    }, t.prototype.showNativeAD = function() {
        qgameKit.nativeAdItem && App.UIManager.open("yuanshengView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1)
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.GameScene.regeditMapTouch(), App.MessageCenter.removeListener(MessageType.SeeVideoEnd + "", this.advEnd, this)
    }, t.prototype.advEnd = function() {
        App.videoType == VideoRewardType.LiBao && (App.FightSystem.setProduce(!0), this.onGoBack())
    }, t.prototype.onLingQu = function() {
        wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.LiBao)
    }, t.prototype.produceBox = function() {
        var e = App.FightSystem.searchIdlePosition();
        null != e && (App.FightSystem.addBoxCommand(1, e, 1), this.count++, 4 == this.count && (this.count = 0, App.TimerManager.remove(this.produceBox, this)))
    }, t.prototype.onGoBack = function() {
        egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && (App.MessageCenter.removeListener(MessageType.onLoadNativeAD + "", this.showNativeAD, this), GameConfig.BannerSwitch = !0), App.UIManager.close("yuanshengView", !1), App.UIManager.close("HaoHuanLiBaoView", !1)
    }, t
}(BaseView);
__reflect(HaoHuanLiBaoView.prototype, "HaoHuanLiBaoView", ["eui.UIComponent", "egret.DisplayObject"]), window.HaoHuanLiBaoView = HaoHuanLiBaoView;
var HaoYouZhuLiView = function(e) {
    function t() {
        var t = e.call(this) || this,
            i = t;
        return i.skinName = "HaoYouZhuLiViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.GameScene.unRegeditMapTouch()
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.GameScene.regeditMapTouch()
    }, t
}(BaseView);
__reflect(HaoYouZhuLiView.prototype, "HaoYouZhuLiView", ["eui.UIComponent", "egret.DisplayObject"]), window.HaoYouZhuLiView = HaoYouZhuLiView;
var HintView = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t
}(eui.Component);
__reflect(HintView.prototype, "HintView", ["eui.UIComponent", "egret.DisplayObject"]), window.HintView = HintView;
var HistroyRankView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "HistroyRankViewSkin", t
    }
    return __extends(t, e), t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t
}(eui.Component);
__reflect(HistroyRankView.prototype, "HistroyRankView", ["eui.UIComponent", "egret.DisplayObject"]), window.HistroyRankView = HistroyRankView;
var JieSuoView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._interval = 0, t.skinName = "JieSuoViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.closeBtn), this.tiaoguoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), this.fanbeiBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.firstClick, this), BtnTool.btnSMin(this.fanbeiBtn), this.fanbeiBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.doubleClick, this), BtnTool.btnSMin(this.fanbeiBtn0), i.tiaoguoBtn.visible = !1
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        App.GameScene.unRegeditMapTouch(), App.MessageCenter.addListener(MessageType.SeeVideoEnd + "", this.advEnd, this), i.shouhuo.text = GameConst.ZuanShiNum + " ", i.centerImg.visible = !1, i.leftImg.visible = !1, i.rightImg.visible = !1, i.blink.visible = !1;
        var n = App.UserConfig.getCurMaxLevel();
        i.centerImg.source = "fplant" + n + "_png", i.leftImg.source = "fplant" + (n - 1) + "_png", i.rightImg.source = "fplant" + (n - 1) + "_png", i.leftImg.width = i.rightImg.width = 161, i.leftImg.height = i.rightImg.height = 259, i.leftImg.x = 58, i.rightImg.x = 380, i.unLockEffect(), this.checkB.addEventListener(egret.Event.CHANGE, this.onChecked, this), i.fanbeiBtn.visible = !0, i.fanbeiBtn0.visible = !0, i.checkB.selected = !1, wxTools.InformationAd()
    }, t.prototype.nativeTime = function() {
        qgameKit.getNativeAd(GameConst.nativeAD)
    }, t.prototype.showNativeAD = function() {
        qgameKit.nativeAdItem && App.UIManager.open("yuanshengView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1)
    }, t.prototype.onChecked = function() {
        var e = this;
        e.checkB.selected ? (e.fanbeiBtn.visible = !1, e.fanbeiBtn0.visible = !0) : (e.fanbeiBtn.visible = !0, e.fanbeiBtn0.visible = !1)
    }, t.prototype.unLockEffect = function() {
        var e = this;
        e.leftImg.visible = !0, e.rightImg.visible = !0, App.EffectUtils.startRotate(e.leftImg, 100, 20, 1e3, function() {
            App.EffectUtils.stopRotate(e.leftImg)
        }), App.EffectUtils.startRotate(e.rightImg, 100, 20, 1e3, function() {
            App.EffectUtils.stopRotate(e.rightImg)
        }), egret.Tween.get(e.leftImg).wait(1e3).call(function() {
            e.centerImg.visible = !0, e.leftImg.visible = !1, e.rightImg.visible = !1, e.blink.visible = !0, App.EffectUtils.startRotation(e.blink)
        }).to({
            x: 216
        }), egret.Tween.get(e.rightImg).wait(1e3).call(function() {}).to({
            x: 216
        }).wait(1e3).call(function() {})
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        App.MessageCenter.dispatch(MessageType.GuidGuanBi.toString()), App.MessageCenter.removeListener(MessageType.SeeVideoEnd + "", this.advEnd, this), egret.Tween.removeTweens(i.leftImg), egret.Tween.removeTweens(i.rightImg), App.EffectUtils.stopRotate(i.blink), App.TimerManager.remove(this.nativeTime, this), i.tiaoguoBtn.visible = !1, App.GameScene.regeditMapTouch(), wxTools.closeInformationAd()
    }, t.prototype.autoGetZuanShi = function() {
        var e = this;
        App.UserConfig.addZuanShi(3 * GameConst.ZuanShiNum), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Chúc mừng nhận 60 kim cương"), e.closeUI()
    }, t.prototype.oncloseClick = function(e) {
        var t = this;
        App.SoundManager.playEffect("dianji_mp3", 1), t.closeUI()
    }, t.prototype.closeUI = function() {
        egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && (App.MessageCenter.removeListener(MessageType.onLoadNativeAD + "", this.showNativeAD, this), GameConfig.BannerSwitch = !0, qgameKit.zhujiemianTopSwitch = !0), App.UIManager.close("yuanshengView", !1), App.UIManager.close("JieSuoView", !1)
    }, t.prototype.advEnd = function() {
        App.videoType == VideoRewardType.Unlock && (App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Chúc mừng nhận 60 kim cương"), App.UserConfig.addZuanShi(3 * GameConst.ZuanShiNum), this.closeUI())
    }, t.prototype.doubleClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.Unlock)
    }, t.prototype.firstClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), App.UserConfig.addZuanShi(GameConst.ZuanShiNum), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Chúc mừng nhận 20 kim cương"), this.closeUI()
    }, t
}(BaseView);
__reflect(JieSuoView.prototype, "JieSuoView", ["eui.UIComponent", "egret.DisplayObject"]), window.JieSuoView = JieSuoView;
var JiJiaView = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t
}(eui.Component);
__reflect(JiJiaView.prototype, "JiJiaView", ["eui.UIComponent", "egret.DisplayObject"]), window.JiJiaView = JiJiaView;
var LiXianView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._interval = 0, t.skinName = "LiXianViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.closeBtn, .8), this.fanbei.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onfanbeiClick, this), BtnTool.btnSMin(this.fanbei), this.quedingBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.quedingBtn)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        App.GameScene.unRegeditMapTouch(), App.MessageCenter.addListener(MessageType.SeeVideoEnd + "", this.advEnd, this), e.length > 0 && (i.lixianjinbi = e[0][0], i.shouhuo.text = App.CommonUtils.getYi1(Math.ceil(i.lixianjinbi)))
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.MessageCenter.removeListener(MessageType.SeeVideoEnd + "", this.advEnd, this), App.GameScene.regeditMapTouch()
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t.prototype.closeUI = function() {
        App.UIManager.close("LiXianView", !1)
    }, t.prototype.oncloseClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), App.UIManager.close("LiXianView", !1)
    }, t.prototype.advEnd = function() {
        var e = this;
        App.videoType == VideoRewardType.LiXian && (App.UserConfig.addGold(Math.ceil(e.lixianjinbi)), e.shouhuo.text = App.CommonUtils.getYi1(Math.ceil(2 * e.lixianjinbi)), App.MessageCenter.dispatch(MessageType.GoldChange.toString()), App.UIManager.close("LiXianView", !1))
    }, t.prototype.onfanbeiClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1);
        wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.LiXian)
    }, t
}(BaseView);
__reflect(LiXianView.prototype, "LiXianView", ["eui.UIComponent", "egret.DisplayObject"]), window.LiXianView = LiXianView;
var MoreGameItem = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "MoreGameItemSkin", t
    }
    return __extends(t, e), t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t.prototype.dataChanged = function() {
        this.itemData = this.data, this.nameTex.text = "", this.itemData.name && (this.nameTex.text = this.itemData.name), this.iconIma.source = this.itemData.reousceid, this._mcid = this.itemData.mcid, this.tipIma.visible = !1, "" != this._mcid ? (this._mc = App.MovieClipManager.load(this._mcid, this._mcid), this._mc && (this.addChildAt(this._mc, 0), this._mc.x = .5 * this.width, this._mc.y = this.y + .5 * this.imaGro.height, App.MovieClipManager.PlayEffect(this._mc, -1), this.iconIma.visible = !1)) : this._mc = null, e.prototype.dataChanged.call(this)
    }, t
}(eui.ItemRenderer);
__reflect(MoreGameItem.prototype, "MoreGameItem", ["eui.UIComponent", "egret.DisplayObject"]), window.MoreGameItem = MoreGameItem;
var MoreGameView = function(e) {
    function t() {
        var t = e.call(this) || this;
        t._interval = 0;
        return t.skinName = "MoreGameViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, i.oncloseClick, i), BtnTool.btnSMin(i.closeBtn), i.dataList.addEventListener(eui.ItemTapEvent.ITEM_TAP, i.ondataChange, i), i.lGro.addEventListener(egret.TouchEvent.TOUCH_TAP, i.lGroChange, i), i.rGro.addEventListener(egret.TouchEvent.TOUCH_TAP, i.rGroChange, i), i.scroller.viewport = i.dataList, i.dataList0.addEventListener(eui.ItemTapEvent.ITEM_TAP, i.ondataChange0, i), i.scroller0.viewport = i.dataList0
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        App.GameScene.unRegeditMapTouch(), i.titleTex.text = "Tôi đoán bạn sẽ thích", i._interval = 0;
        var n = App.GameConfig.getTuiGuang();
        i.myCollection = new eui.ArrayCollection(n), i.dataList.dataProvider = i.myCollection, i.dataList.itemRenderer = MoreGameItem, e.length > 0 && "" != e[0] && (i.titleTex.text = e[0] + ""), i.myCollection0 = new eui.ArrayCollection(App.GameConfig.gettuiguangT()), i.dataList0.dataProvider = i.myCollection0, i.dataList0.itemRenderer = MoreGameItem, i.scroller0.viewport.scrollH = 0, i.timer && (i.timer.stop(), i.timer = null), i.timer = new egret.Timer(100, 0), i.timer.addEventListener(egret.TimerEvent.TIMER, i.moveScroller, this), i.timer.start()
    }, t.prototype.moveScroller = function(e) {
        var t = this;
        t.scroller0.viewport.scrollH += 1, t.scroller0.viewport.scrollH + t.scroller0.width >= t.scroller0.viewport.contentWidth && (t.scroller0.viewport.scrollH = 0)
    }, t.prototype.showGro = function() {
        for (var e = this, t = App.GameConfig.getMoreGameL().concat(), i = App.GameConfig.getMoreGameR().concat(), n = function(i) {
                var n = e.lGro.getChildAt(i);
                n._mcid = "", n.iconIma.visible = !0, n._mc && (App.MovieClipManager.RemoveEffect(n._mc), n._mc = null), n.nameTex.text = t[i].name, n.iconIma.source = t[i].reousceid, n._mcid = t[i].mcid, e.once(egret.Event.ENTER_FRAME, function() {
                    e.once(egret.Event.ENTER_FRAME, function() {
                        "" != n._mcid ? (n._mc = App.MovieClipManager.load(n._mcid, n._mcid), n._mc && (n.imaGro.addChild(n._mc), n._mc.x = n.iconIma.x, n._mc.y = n.iconIma.y, App.MovieClipManager.PlayEffect(n._mc, -1), n.iconIma.visible = !1)) : n._mc = null
                    }, e)
                }, e), n.nameTex.textColor = 16777215, App.EffectUtils.startRotate(n, 100, 10, 2e3)
            }, o = 0; o < e.lGro.numChildren; o++) n(o);
        for (var a = function(t) {
                var n = e.rGro.getChildAt(t);
                n._mcid = "", n.iconIma.visible = !0, n._mc && (App.MovieClipManager.RemoveEffect(n._mc), n._mc = null), n.nameTex.text = i[t].name, n.iconIma.source = i[t].reousceid, n._mcid = i[t].mcid, e.once(egret.Event.ENTER_FRAME, function() {
                    e.once(egret.Event.ENTER_FRAME, function() {
                        "" != n._mcid ? (n._mc = App.MovieClipManager.load(n._mcid, n._mcid), n._mc && (n.imaGro.addChild(n._mc), n._mc.x = n.iconIma.x, n._mc.y = n.iconIma.y, App.MovieClipManager.PlayEffect(n._mc, -1), n.iconIma.visible = !1)) : n._mc = null
                    }, e)
                }, e), n.nameTex.textColor = 16777215, App.EffectUtils.startRotate(n, 100, 10, 2e3)
            }, o = 0; o < e.rGro.numChildren; o++) a(o)
    }, t.prototype.lGroChange = function(e) {
        var t = this;
        if (!(egret.getTimer() - t._interval < 1e3)) {
            t._interval = egret.getTimer();
            for (var i = App.GameConfig.getMoreGameL().concat(), n = new egret.Point(e.stageX, e.stageY), o = 0; o < t.lGro.numChildren; o++) t.lGro.getChildAt(o).hitTestPoint(n.x, n.y) && egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME && wxTools.navigateToMiniProgram(i[o].appid, i[o].path, i[o].name)
        }
    }, t.prototype.rGroChange = function(e) {
        var t = this;
        if (!(egret.getTimer() - t._interval < 1e3)) {
            t._interval = egret.getTimer();
            for (var i = App.GameConfig.getMoreGameR().concat(), n = new egret.Point(e.stageX, e.stageY), o = 0; o < t.rGro.numChildren; o++) t.rGro.getChildAt(o).hitTestPoint(n.x, n.y) && egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME && wxTools.navigateToMiniProgram(i[o].appid, i[o].path, i[o].name)
        }
    }, t.prototype.ondataChange0 = function(e) {
        var t = this;
        if (!(egret.getTimer() - t._interval < 1e3)) {
            t._interval = egret.getTimer();
            var i = t.dataList0.selectedItem;
            egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME && wxTools.navigateToMiniProgram(i.appid, i.path, i.name)
        }
    }, t.prototype.ondataChange = function(e) {
        var t = this;
        if (!(egret.getTimer() - t._interval < 1e3)) {
            t._interval = egret.getTimer();
            var i = t.dataList.selectedItem;
            egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME && wxTools.navigateToMiniProgram(i.appid, i.path, i.name)
        }
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.timer && (i.timer.stop(), i.timer = null), App.GameScene.regeditMapTouch()
    }, t.prototype.oncloseClick = function(e) {
        var t = this;
        App.SoundManager.playEffect("dianji_mp3", 1), egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME, t.closeMc(), App.UIManager.close("MoreGameView", !1)
    }, t.prototype.closeMc = function() {
        for (var e = this, t = 0; t < e.dataList.numElements; t++) {
            var i = e.dataList.getChildAt(t);
            i._mc && (App.MovieClipManager.RemoveEffect(i._mc), i._mc = null)
        }
        for (var t = 0; t < e.rGro.numChildren; t++) {
            var n = e.rGro.getChildAt(t);
            n._mcid = "", n.iconIma.visible = !0, n._mc && (App.MovieClipManager.RemoveEffect(n._mc), n._mc = null)
        }
        for (var t = 0; t < e.lGro.numChildren; t++) {
            var n = e.lGro.getChildAt(t);
            n._mcid = "", n.iconIma.visible = !0, n._mc && (App.MovieClipManager.RemoveEffect(n._mc), n._mc = null)
        }
        for (var t = 0; t < e.lGro.numChildren; t++) {
            var n = e.lGro.getChildAt(t);
            App.EffectUtils.stopRotate(n)
        }
        for (var t = 0; t < e.rGro.numChildren; t++) {
            var n = e.rGro.getChildAt(t);
            App.EffectUtils.stopRotate(n)
        }
    }, t
}(BaseView);
__reflect(MoreGameView.prototype, "MoreGameView", ["eui.UIComponent", "egret.DisplayObject"]), window.MoreGameView = MoreGameView;
var PaiHangItem = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "PaiHangItemSkin", t
    }
    return __extends(t, e), t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t.prototype.dataChanged = function() {
        e.prototype.dataChanged.call(this)
    }, t
}(eui.ItemRenderer);
__reflect(PaiHangItem.prototype, "PaiHangItem", ["eui.UIComponent", "egret.DisplayObject"]), window.PaiHangItem = PaiHangItem;
var PaiHangView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._interval = 0, t.skinName = "PaiHangViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), i.tabCon.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemTap, this)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        App.GameScene.unRegeditMapTouch(), i.tips.visible = !1, i.tabCon.dataProvider = i.viewCon, i.tabCon.requireSelection = !0, i.tabCon.itemRenderer = TabItem, i.guanqiaGro.name = "Xếp hạng Tuần", i.histroyGro.name = "Xếp hạng lịch sử", i.tipTex.visible = !0, i.tipTex.text = "Dữ liệu bảng thành tích được xóa lúc 24:00 Chủ nhật hàng tuần", i.tabCon.selectedIndex = 0, i.viewCon.selectedIndex = 0
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.timer && (i.timer.stop(), i.timer = null), App.GameScene.regeditMapTouch()
    }, t.prototype.onItemTap = function(e) {
        var t = this;
        App.SoundManager.playEffect("dianji_mp3", 1), 0 == t.tabCon.selectedIndex ? t.tipTex.visible = !0 : 1 == t.tabCon.selectedIndex && (t.tipTex.visible = !1)
    }, t.prototype.oncloseClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME, App.UIManager.close("PaiHangView", !1)
    }, t
}(BaseView);
__reflect(PaiHangView.prototype, "PaiHangView", ["eui.UIComponent", "egret.DisplayObject"]), window.PaiHangView = PaiHangView;
var QianDaoView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._open = !0, t._interval = 0, t.skinName = "QianDaoViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.closeBtn), this.qiandaoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onqiandaoClick, this), BtnTool.btnSMin(this.qiandaoBtn), this.qiandaoBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onqiandaoClick, this), BtnTool.btnSMin(this.qiandaoBtn0)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        App.GameScene.unRegeditMapTouch(), App.FightSystem.setPause(!0), e.length > 0 && (i._open = e[0][0]), this.checkB.selected = !0, this.qianDao(), App.MessageCenter.addListener(MessageType.onLoadNativeAD1 + "", this.showNativeBannerAd, this), App.MessageCenter.addListener(MessageType.SeeVideoEnd + "", this.advEnd, this), egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && (GameConfig.BannerSwitch = !0, qgameKit.zhujiemianTopSwitch = !1, 1 == qgameKit.qiandaoSwitch && qgameKit.getNativeAd1(GameConst.nativeAD), App.TimerManager.doTimer(3e4, 0, this.nativeTime, this))
    }, t.prototype.nativeTime = function() {
        1 == qgameKit.qiandaoTopSwitch && 1 == qgameKit.qiandaoSwitch && qgameKit.getNativeAd1(GameConst.nativeAD)
    }, t.prototype.showNativeBannerAd = function() {
        qgameKit.qiandaoSwitch && qgameKit.nativeAdItem1 && App.UIManager.open("YuanShengicon", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1, UIscene.QianDao)
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.GameScene.regeditMapTouch(), App.FightSystem.setPause(!1), App.MessageCenter.removeListener(MessageType.onLoadNativeAD1 + "", this.showNativeBannerAd, this), App.MessageCenter.removeListener(MessageType.SeeVideoEnd + "", this.advEnd, this), App.TimerManager.remove(this.nativeTime, this)
    }, t.prototype.oncloseClick = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), this._close()
    }, t.prototype.advEnd = function() {
        App.videoType == VideoRewardType.QianDao && this.onqiandao(2)
    }, t.prototype.onqiandaoClick = function(e) {
        switch (App.SoundManager.playEffect("dianji_mp3", 1), e.currentTarget) {
            case this.qiandaoBtn0:
                wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.QianDao);
                break;
            case this.qiandaoBtn:
                this.onqiandao(1)
        }
    }, t.prototype.onqiandao = function(e) {
        var t = [];
        if (t = App.UserConfig.getDateArr(), t.push(Date.now()), App.UserConfig.setDateArr(t), this.qianDao(), App.UserConfig.getDateArr().length > 0) {
            switch (App.UserConfig.getDateArr().length) {
                case 1:
                    App.UserConfig.addZuanShi(50 * e);
                    break;
                case 2:
                    App.UserConfig.addZuanShi(80 * e);
                    break;
                case 3:
                    App.UserConfig.addZuanShi(120 * e);
                    break;
                case 4:
                    App.UserConfig.addZuanShi(160 * e);
                    break;
                case 5:
                    App.UserConfig.addZuanShi(200 * e);
                    break;
                case 6:
                    App.UserConfig.addZuanShi(240 * e);
                    break;
                case 7:
                    App.UserConfig.addZuanShi(300 * e)
            }
            App.MessageCenter.dispatch(MessageType.GoldChange.toString())
        }
        this._close()
    }, t.prototype._close = function() {
        1 == qgameKit.qiandaoSwitch && App.UIManager.close("YuanShengicon", !1), qgameKit.zhujiemianTopSwitch = !0, 1 == qgameKit.zhujiemianSwitch && qgameKit.getNativeAd1(GameConst.nativeAD), App.UIManager.close("QianDaoView", !1)
    }, t.prototype.qianDao = function() {
        if (this.timestr = [], this.imgstr = [], this.sumstr = [], this.timestr = new Array(this.time1, this.time2, this.time3, this.time4, this.time5, this.time6, this.time7), this.imgstr = new Array(this.img1, this.img2, this.img3, this.img4, this.img5, this.img6, this.img7), this.sumstr = new Array(this.sum1, this.sum2, this.sum3, this.sum4, this.sum5, this.sum6, this.sum7), App.UserConfig.getDateArr().length <= 0) {
            this.qiandaoBtn.visible = !0, this.qiandaoBtn0.visible = !0, this.checkB.visible = !1;
            for (var e = 0; e < this.timestr.length; e++) this.timestr[e].visible = !1, this.imgstr[e].visible = !0, this.sumstr[e].visible = !0
        } else if (App.UserConfig.getDateArr().length < 7)
            if (App.DateUtils.isSameDate(Date.now(), App.UserConfig.getDateArr()[App.UserConfig.getDateArr().length - 1])) {
                this.qiandaoBtn.visible = !1, this.qiandaoBtn0.visible = !1, this.checkB.visible = !1;
                for (var e = 0; e < App.UserConfig.getDateArr().length; e++) this.timestr[e].visible = !0, this.imgstr[e].visible = !1, this.sumstr[e].visible = !1
            } else if (this.getToday() == this.getTomorrow(App.UserConfig.getDateArr()[App.UserConfig.getDateArr().length - 1])) {
            this.qiandaoBtn.visible = !0, this.qiandaoBtn0.visible = !0, this.checkB.visible = !1;
            for (var e = 0; e < App.UserConfig.getDateArr().length; e++) this.timestr[e].visible = !0, this.imgstr[e].visible = !1, this.sumstr[e].visible = !1
        } else {
            var t = [];
            App.UserConfig.setDateArr(t), this.qiandaoBtn.visible = !0, this.qiandaoBtn0.visible = !0, this.checkB.visible = !1;
            for (var e = 0; e < this.timestr.length; e++) this.timestr[e].visible = !1, this.imgstr[e].visible = !0, this.sumstr[e].visible = !0
        } else if (App.UserConfig.getDateArr().length >= 7)
            if (App.DateUtils.isSameDate(Date.now(), App.UserConfig.getDateArr()[App.UserConfig.getDateArr().length - 1])) {
                this.qiandaoBtn.visible = !1, this.qiandaoBtn0.visible = !1, this.checkB.visible = !1;
                for (var e = 0; e < App.UserConfig.getDateArr().length; e++) this.timestr[e].visible = !0, this.imgstr[e].visible = !1, this.sumstr[e].visible = !1
            } else {
                var t = [];
                App.UserConfig.setDateArr(t), this.qiandaoBtn.visible = !0, this.qiandaoBtn0.visible = !0, this.checkB.visible = !1;
                for (var e = 0; e < this.timestr.length; e++) this.timestr[e].visible = !1, this.imgstr[e].visible = !0, this.sumstr[e].visible = !0
            }
    }, t.prototype.getTomorrow = function(e) {
        var t = new Date(e);
        return t.setDate(t.getDate() + 1), t.getDate()
    }, t.prototype.getToday = function() {
        var e = new Date;
        return e.getDate()
    }, t
}(BaseView);
__reflect(QianDaoView.prototype, "QianDaoView", ["eui.UIComponent", "egret.DisplayObject"]), window.QianDaoView = QianDaoView;
var RoleInformationView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "RoleInformationViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.closeRect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), this.tujianBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontujianClick, this), BtnTool.btnSMin(this.tujianBtn), this.paihangbangBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onpaihangbangClick, this), BtnTool.btnSMin(this.paihangbangBtn), this.music.addEventListener(egret.TouchEvent.CHANGE, this.musicChange, this)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.GameScene.unRegeditMapTouch(), egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME && egret.getTimer() > 1e4 && wxTools.InsertAd(GameConst.InsertAd), this.zhiwu.text = App.UserConfig.getUnLockMaxID().toString() + "种植物", this.onoffshow()
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.GameScene.regeditMapTouch()
    }, t.prototype.oncloseClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), App.UIManager.close("RoleInformationView", !1)
    }, t.prototype.ontujianClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), App.UIManager.open("TuJianView", !1, App.GameScene.getLayer(UILayer.LAYER_UI))
    }, t.prototype.onpaihangbangClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME && wxTools.linkOpenData({
            command: "open",
            type: "friend"
        }, 600, 800)
    }, t.prototype.musicChange = function(e) {
        e.target.selected ? (App.SoundManager.setEffectOn(!1), App.SoundManager.setBgOn(!1), App.UserConfig.setsoundonoff(!1)) : (App.SoundManager.setEffectOn(!0), App.SoundManager.setBgOn(!0), App.UserConfig.setsoundonoff(!0))
    }, t.prototype.onoffshow = function() {
        App.SoundManager.bgIsOn && App.SoundManager.effectIsOn ? this.music.selected = !1 : this.music.selected = !0
    }, t
}(BaseView);
__reflect(RoleInformationView.prototype, "RoleInformationView", ["eui.UIComponent", "egret.DisplayObject"]), window.RoleInformationView = RoleInformationView;
var ShanChu = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "ShanChuSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.closeBtn, .8), this.querenbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onquerenClick, this), BtnTool.btnSMin(this.querenbtn), this.quxiaobtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.quxiaobtn)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (App.GameScene.unRegeditMapTouch(), e[0][0]) {
            this._curSelPlant = e[0][0];
            var i = e[0][0].getAvataID();
            this.jijiaImg.source = "fplant" + i + "_png";
            var n = this.sumcount(i, App.UserConfig.getShopData()[i - 1].jinbicishu),
                o = App.UserConfig.getPrice();
            o >= 300 && (o = 300), this.goldtext.text = App.CommonUtils.getYi2(.5 * (n - n * o * .001))
        }
    }, t.prototype.sumcount = function(e, t) {
        var i = Math.round((1 + .5 * t) * Math.pow(e, 3) * (Math.pow(e, 3) / 3 + .5 * Math.pow(e, 2) + e / 6 + 2));
        return i
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.GameScene.regeditMapTouch()
    }, t.prototype.onquerenClick = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), this._curSelPlant.death(!1), App.MessageCenter.dispatch(MessageType.FlushZhanli.toString()), App.MessageCenter.dispatch(MessageType.GoldChange.toString()), App.UIManager.close("ShanChu", !1)
    }, t.prototype.oncloseClick = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), this._curSelPlant.changeStation(this._curSelPlant.getStation()), App.UIManager.close("ShanChu", !1)
    }, t
}(BaseView);
__reflect(ShanChu.prototype, "ShanChu", ["eui.UIComponent", "egret.DisplayObject"]), window.ShanChu = ShanChu;
var ShangDianYouHuiView = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t
}(eui.Component);
__reflect(ShangDianYouHuiView.prototype, "ShangDianYouHuiView", ["eui.UIComponent", "egret.DisplayObject"]), window.ShangDianYouHuiView = ShangDianYouHuiView;
var ShengYaView = function(e) {
    function t() {
        var t = e.call(this) || this,
            i = t;
        return i.skinName = "ShengYaViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onGoBack, i), BtnTool.btnSMin(i.closeBtn, .8), i.levelUp.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onLevelUp, i), BtnTool.btnSMin(i.levelUp), i.levelbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onLevelUp, i), i.attackUp.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onAttackUp, i), BtnTool.btnSMin(i.attackUp), i.priceUp.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onPriceUp, i), BtnTool.btnSMin(i.priceUp), i.addDiamond.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onAddDiamond, i), App.EffectUtils.startScale(i.levelUp), i.playEffect()
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        this.danImg.visible = !1, this.danImg.scaleX = this.danImg.scaleY = .4, this.danImg.x = 220.85, this.danImg.y = 311.92, App.GameScene.unRegeditMapTouch(), App.FightSystem.setPause(!0), this.levelUp.visible = !1, i.flushData(), App.MessageCenter.addListener(MessageType.DuanWei.toString(), this.flushLevel, this), App.MessageCenter.addListener(MessageType.onLoadNativeAD1 + "", this.showNativeBannerAd, this), App.MessageCenter.addListener(MessageType.SeeVideoEnd + "", this.advEnd, this), egret.Tween.get(this.pageNode).to({
            scaleX: 1.2,
            scaleY: 1.2
        }, 200).to({
            scaleX: 1,
            scaleY: 1
        }, 200), App.isShowLifeGuide && i.showLifeGuideStepA()
    }, t.prototype.nativeTime = function() {
        1 == qgameKit.shengyaTopSwitch && 1 == qgameKit.shengyaSwitch && qgameKit.getNativeAd1(GameConst.nativeAD)
    }, t.prototype.showNativeBannerAd = function() {
        qgameKit.shengyaSwitch && qgameKit.nativeAdItem1 && App.UIManager.open("YuanShengicon", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1, UIscene.ShengYa)
    }, t.prototype.showLifeGuideStepA = function() {
        this.attackUp.localToGlobal(this.attackUp.x, this.attackUp.y);
        this.targetPoint2 = this.priceUp.localToGlobal(this.priceUp.x, this.priceUp.y);
        var e = this.guideA.x + .5 * this.attackUp.width,
            t = .5 * App.stage.stageHeight + 320 + .5 * this.attackUp.height;
        this.bitmap1 = this.maskGro(e, t, 0, 0, this.attackUp.width, this.attackUp.height), this.word1 = new eui.Label, this.word1.x = .5 * App.stage.stageWidth - 120, this.word1.y = .5 * App.stage.stageHeight, this.word1.textColor = 16777215, this.word1.size = 35, this.word1.text = "Nhấp để tăng sức tấn công", this.word1.visible = !0, this.shouzhiMap = new egret.Bitmap(RES.getRes("shouzhi_png")), this.shouzhiMap.x = this.guideA.x + .5 * this.attackUp.width, this.shouzhiMap.y = t - .5 * this.attackUp.height, this.addChild(this.bitmap1), this.addChild(this.word1), this.addChild(this.shouzhiMap), egret.Tween.get(this.shouzhiMap, {
            loop: !0
        }).to({
            y: t
        }, 1e3)
    }, t.prototype.showLifeGuideStepB = function() {
        this.closeGuide();
        var e = this.guideB.x + .5 * this.priceUp.width,
            t = .5 * App.stage.stageHeight + 320 + .5 * this.priceUp.height;
        this.bitmap1 = this.maskGro(e, t, 0, 0, this.priceUp.width, this.priceUp.height), this.word1 = new eui.Label, this.word1.x = .5 * App.stage.stageWidth - 120, this.word1.y = .5 * App.stage.stageHeight, this.word1.textColor = 16777215, this.word1.size = 35, this.word1.text = "点击降低机甲价格", this.word1.visible = !0, this.shouzhiMap = new egret.Bitmap(RES.getRes("shouzhi_png")), this.shouzhiMap.x = this.guideB.x + .5 * this.priceUp.width, this.shouzhiMap.y = t - .5 * this.priceUp.height, this.addChild(this.bitmap1), this.addChild(this.word1), this.addChild(this.shouzhiMap), egret.Tween.get(this.shouzhiMap, {
            loop: !0
        }).to({
            y: t
        }, 1e3)
    }, t.prototype.maskGro = function(e, t, i, n, o, a) {
        var r = new egret.DisplayObjectContainer,
            s = new egret.Shape,
            p = new egret.Shape;
        if (s.graphics.beginFill(0, .6), s.graphics.drawRect(0, 0, App.stage.stageWidth, App.stage.stageHeight), s.graphics.endFill(), p.graphics.beginFill(16711680, 1), p.graphics.drawRect(e, t, o, a), p.graphics.endFill(), p.anchorOffsetX = .5 * p.width, p.anchorOffsetY = .5 * p.height, r.addChild(s), r.addChild(p), p.blendMode = egret.BlendMode.ERASE, 0 != i) {
            var h = new egret.Shape;
            h.graphics.beginFill(16711680, 1), h.graphics.drawRect(i, n, o, a), h.graphics.endFill(), h.anchorOffsetX = .5 * h.width, h.anchorOffsetY = .5 * h.height, r.addChild(h), h.blendMode = egret.BlendMode.ERASE
        }
        var l = new egret.RenderTexture;
        l.drawToTexture(r);
        var c = new egret.Bitmap(l);
        return c.touchEnabled = !0, c.pixelHitTest = !0, c.width = App.stage.stageWidth, c.height = App.stage.stageHeight, c
    }, t.prototype.closeGuide = function() {
        this.shouzhiMap && egret.Tween.removeTweens(this.shouzhiMap), this.shouzhiMap && this.shouzhiMap.parent && (this.shouzhiMap.parent.removeChild(this.shouzhiMap), this.shouzhiMap = null), this.bitmap1 && this.bitmap1.parent && (this.bitmap1.parent.removeChild(this.bitmap1), this.bitmap1 = null), this.word1 && this.word1.parent && (this.word1.parent.removeChild(this.word1), this.word1 = null)
    }, t.prototype.playEffect = function() {
        var e = this,
            t = App.MovieClipManager.load("ui", "ui");
        t && (t.x = e.zhanlibg.x + .5 * e.zhanlibg.width - 15, t.y = e.zhanlibg.y + .5 * e.zhanlibg.height - 4, t.scaleX = 1.6, t.scaleY = 1, e.gro1.addChild(t), App.MovieClipManager.PlayEffect(t, -1))
    }, t.prototype.onAttackUp = function() {
        return App.UserConfig.getAttack() >= 500 ? void App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Để đạt cấp độ tối đa!") : (App.SoundManager.playEffect("dianji_mp3", 1), void(App.isShowLifeGuide ? (App.UserConfig.setAttack(GameConst.Attack), this.attack.text = App.UserConfig.getAttack() + "%", this.showLifeGuideStepB()) : wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.AttackUp)))
    }, t.prototype.onPriceUp = function() {
        return App.UserConfig.getPrice() >= 300 ? void App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Để đạt cấp độ tối đa!") : void(App.isShowLifeGuide ? (this.closeGuide(), App.UserConfig.setPrice(GameConst.Price), this.price.text = App.UserConfig.getPrice() + "%", App.isShowLifeGuide = !1) : wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.PriceFavorable))
    }, t.prototype.danEffect = function() {
        var e = this;
        this.danImg && egret.Tween.removeTweens(this.danImg);
        var t = App.UserConfig.getLevel();
        this.danImg.source = "duanwei" + App.GameConfig.getDanGrading()[t - 1].id + "_png", this.danImg.visible = !0, egret.Tween.get(this.danImg).to({
            scaleX: .8,
            scaleY: .8
        }, 1e3).wait(800).to({
            x: this.levelImg.x + .3 * this.levelImg.width - 15,
            y: this.levelImg.y + .5 * this.levelImg.height * .3,
            scaleX: .3,
            scaleY: .3
        }, 1500).call(function() {
            e.danImg.visible = !1, e.danImg.scaleX = e.danImg.scaleY = .4, e.danImg.x = 220.85, e.danImg.y = 311.92, e.levelImg.source = "duanwei" + App.GameConfig.getDanGrading()[t - 1].id + "_png", e.levelText.text = App.GameConfig.getDanGrading()[t - 1].levelName
        })
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.closeGuide(), egret.Tween.removeTweens(this.danImg), App.GameScene.regeditMapTouch(), App.FightSystem.setPause(!1), egret.Tween.removeTweens(i.pageNode), App.MessageCenter.removeListener(MessageType.DuanWei.toString(), this.flushLevel, this), App.MessageCenter.removeListener(MessageType.onLoadNativeAD1 + "", this.showNativeBannerAd, this), App.MessageCenter.removeListener(MessageType.SeeVideoEnd + "", this.advEnd, this), App.TimerManager.remove(this.nativeTime, this)
    }, t.prototype.advEnd = function() {
        App.videoType == VideoRewardType.LDiamond ? (App.UserConfig.addZuanShi(300), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Nhận 300 kim cương"), this.flushData()) : App.videoType == VideoRewardType.AttackUp ? (App.UserConfig.setAttack(GameConst.Attack), this.attack.text = App.UserConfig.getAttack() + "%") : App.videoType == VideoRewardType.PriceFavorable && (App.UserConfig.setPrice(GameConst.Price), this.price.text = App.UserConfig.getPrice() + "%")
    }, t.prototype.flushData = function() {
        for (var e = this, t = App.UserConfig.getLevel(), i = App.FightSystem.getAttacker(), n = 0, o = 0; o < i.length; o++) i[o].getStation() <= 5 && (i[o].isBox() || i[o].isDie() || i[o].isUfo() || (n += App.GameConfig.getroleItem(parseInt(i[o].getAvataID())).zhanli));
        if (App.UserConfig.setZhanli(n), e.goldtext.text = App.CommonUtils.getYi1(App.UserConfig.getGold()), e.diamondtext.text = App.UserConfig.getZuanShi() + "", e.power.text = App.UserConfig.getZhanli() + "", e.levelImg.source = "duanwei" + App.GameConfig.getDanGrading()[t - 1].id + "_png", e.levelText.text = App.GameConfig.getDanGrading()[t - 1].levelName, e.maxFort.source = "fplant" + App.UserConfig.getCurMaxLevel() + "_png", e.maxFort.width = 130, e.maxFort.height = 240, e.attack.text = App.UserConfig.getAttack() + "%", e.price.text = App.UserConfig.getPrice() + "%", t >= GameConst.MaxLevel) return e.expImg.width = 0, void(this.levelUp.visible = !1);
        var a = App.GameConfig.getDanGrading()[t].experience;
        App.UserConfig.getExp() >= a ? (e.expImg.width = 298.35, this.levelUp.visible = !0) : (e.expImg.width = App.UserConfig.getExp() / (a / 459) * .65, this.levelUp.visible = !1)
    }, t.prototype.onLevelUp = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), App.UIManager.open("DuanWeiTiShengView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1)
    }, t.prototype.onAddDiamond = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.LDiamond)
    }, t.prototype.flushLevel = function() {
        App.UserConfig.getLevel();
        this.expImg.width = 0, this.levelUp.visible = !1, App.UserConfig.restExp(), this.attack.text = App.UserConfig.getAttack() + "%", this.price.text = App.UserConfig.getPrice() + "%", this.danEffect()
    }, t.prototype.onGoBack = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), 1 == qgameKit.shengyaSwitch && App.UIManager.close("YuanShengicon", !1), qgameKit.zhujiemianTopSwitch = !0, 1 == qgameKit.zhujiemianSwitch && qgameKit.getNativeAd1(GameConst.nativeAD), egret.Tween.get(this.pageNode).to({
            scaleX: 1.2,
            scaleY: 1.2
        }, 200).to({
            scaleX: .5,
            scaleY: .5
        }, 200).call(function() {
            App.UIManager.close("ShengYaView", !1)
        })
    }, t
}(BaseView);
__reflect(ShengYaView.prototype, "ShengYaView", ["eui.UIComponent", "egret.DisplayObject"]), window.ShengYaView = ShengYaView;
var ShopItemView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "ShopItemViewSkin", t
    }
    return __extends(t, e), t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this), this.shopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onshopBtnClick, this), BtnTool.btnSMin(this.shopBtn, .8), this.guangGaoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onguanGaoBtnClick, this), BtnTool.btnSMin(this.guangGaoBtn), this.guangGaoBtn.visible = !1
    }, t.prototype.onshopBtnClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), this.buy(), this.dataChanged()
    }, t.prototype.advEnd = function() {
        if (App.videoType == VideoRewardType.Shop) {
            if (App.FightSystem.searchIdlePosition2()) {
                App.UserConfig.setRange(), App.FightSystem.addPlantCommand(this.itemData.id, App.FightSystem.searchIdlePosition2(), 1);
                App.UserConfig.getCurMaxLevel();
                App.MessageCenter.dispatch(MessageType.FlushShop.toString()), App.TimerManager.doTimer(1e3, 1, this.delaySave, this)
            } else App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Thiếu chỗ trống");
            App.MessageCenter.removeListener(MessageType.SeeVideoEnd + "", this.advEnd, this)
        }
    }, t.prototype.buy = function() {
        this.delaySave && App.TimerManager.remove(this.delaySave, this), this.jinbiImage.visible ? App.UserConfig.getGold() >= this.jinbi ? App.FightSystem.searchIdlePosition2() ? (App.FightSystem.addPlantCommand(this.itemData.id, App.FightSystem.searchIdlePosition2(), 1), App.UserConfig.minusgold(this.jinbi), App.UserConfig.setjinbicishu(this.itemData.id), App.MessageCenter.dispatch(MessageType.GoldChange.toString()), App.TimerManager.doTimer(1e3, 1, this.delaySave, this)) : App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Thiếu chỗ trống") : App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Ko đủ vàng") : this.zuanshiImage.visible && (App.UserConfig.getGold() >= this.zuanshi ? App.FightSystem.searchIdlePosition2() ? (App.FightSystem.addPlantCommand(this.itemData.id, App.FightSystem.searchIdlePosition2(), 1), App.UserConfig.minusZuanShi(this.zuanshi), App.UserConfig.setzuanshicishu(this.itemData.id), App.MessageCenter.dispatch(MessageType.GoldChange.toString()), App.TimerManager.doTimer(1e3, 1, this.delaySave, this)) : App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Thiếu chỗ trống") : App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Thiếu kim cương")), App.MessageCenter.dispatch(MessageType.GoldChange.toString())
    }, t.prototype.onguanGaoBtnClick = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), App.FightSystem.searchIdlePosition2() ? (App.MessageCenter.addListener(MessageType.SeeVideoEnd + "", this.advEnd, this), wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.Shop)) : App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Thiếu chỗ trống")
    }, t.prototype.shopFort = function() {
        for (var e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], t = App.FightSystem.getAttacker(), i = 0; i < t.length; i++)
            for (var n = 5; n < e.length; n++) t[i].getStation() != e[n] || t[i].isUfo() || e.splice(n, 1);
        return 5 == e.length ? null : e[5]
    }, t.prototype.delaySave = function() {
        var e = App.FightSystem.getAttacker();
        App.UserConfig.serilizeZhiWu(e), App.MessageCenter.dispatch(MessageType.GoldChange.toString())
    }, t.prototype.sumcount = function(e, t) {
        var i = Math.round((1 + .5 * t) * Math.pow(e, 3) * (Math.pow(e, 3) / 3 + .5 * Math.pow(e, 2) + e / 6 + 2));
        return i
    }, t.prototype.sumzuanshi = function(e, t) {
        var i = Math.round(Math.pow(1.25 + (t - 1) / 100, e + 1));
        return i
    }, t.prototype.dataChanged = function() {
        e.prototype.dataChanged.call(this), this.itemData = this.data, this.botanyNum.text = "Lv." + this.itemData.id.toString();
        var t = this.sumcount(this.itemData.id, App.UserConfig.getShopData()[this.itemData.id - 1].jinbicishu),
            i = App.UserConfig.getPrice();
        i >= 300 && (i = 300), this.jinbi = t - t * i * .001, this.zuanshi = this.sumzuanshi(this.itemData.id, App.UserConfig.getShopData()[this.itemData.id - 1].zuanshicishu), this.zhiWuTu.source = "fplant" + this.itemData.resourcePath + "_png", this.shopSum.text = App.CommonUtils.getYi2(this.jinbi), this.speedLoadImg.width = this.itemData.id * (80 / 42) * (3 - Math.floor(App.GameConfig.getSkillItem(this.itemData.skillID).OriCDTime)), this.attackLoadImg.width = this.itemData.id * (240 / 42), this.unlocktext.visible = !1;
        var n = App.UserConfig.getCurMaxLevel();
        3 >= n ? 1 == this.itemData.id ? (this.jinbiImage.visible = !0, this.shopBtn.visible = !0, this.mingzi.text = this.itemData.name, this.unlocktext.visible = !1) : this.itemData.id > 1 && this.itemData.id <= 3 ? (this.shopBtn.visible = !0, this.zuanshiImage.visible = !0, this.mingzi.text = this.itemData.name, this.shopSum.text = App.CommonUtils.getYi(this.zuanshi), this.unlocktext.visible = !1) : (this.shopBtn.visible = !1, App.EffectUtils.setImageColor(this.zhiWuTu, 0), this.mingzi.text = "", this.unlocktext.visible = !0, this.speedLoadImg.width = 0, this.attackLoadImg.width = 0) : 4 == n ? 1 == this.itemData.id ? (this.jinbiImage.visible = !0, this.shopBtn.visible = !0, this.mingzi.text = this.itemData.name, this.unlocktext.visible = !1) : this.itemData.id > 1 && this.itemData.id <= 3 ? (this.shopBtn.visible = !0, this.zuanshiImage.visible = !0, this.mingzi.text = this.itemData.name, this.shopSum.text = App.CommonUtils.getYi(this.zuanshi), this.unlocktext.visible = !1) : this.itemData.id > 3 && this.itemData.id <= 4 ? (this.shopBtn.visible = !1, this.zuanshiImage.visible = !1, this.jinbiImage.visible = !1, this.mingzi.text = this.itemData.name, this.unlocktext.visible = !1) : (this.shopBtn.visible = !1, App.EffectUtils.setImageColor(this.zhiWuTu, 0), this.mingzi.text = "", this.unlocktext.visible = !0, this.speedLoadImg.width = 0, this.attackLoadImg.width = 0) : 5 == n ? 1 == this.itemData.id ? (this.jinbiImage.visible = !0, this.shopBtn.visible = !0, this.mingzi.text = this.itemData.name, this.unlocktext.visible = !1) : this.itemData.id > 1 && this.itemData.id <= 3 ? (this.shopBtn.visible = !0, this.zuanshiImage.visible = !0, this.mingzi.text = this.itemData.name, this.unlocktext.visible = !1, this.shopSum.text = App.CommonUtils.getYi(this.zuanshi)) : this.itemData.id > 3 && this.itemData.id <= 5 ? (this.shopBtn.visible = !1, this.zuanshiImage.visible = !1, this.jinbiImage.visible = !1, this.mingzi.text = this.itemData.name, this.unlocktext.visible = !1) : (this.shopBtn.visible = !1, App.EffectUtils.setImageColor(this.zhiWuTu, 0), this.mingzi.text = "", this.speedLoadImg.width = 0, this.attackLoadImg.width = 0, this.unlocktext.visible = !0) : n >= 6 && (this.itemData.id > n - 2 && this.itemData.id <= n ? (this.shopBtn.visible = !1, this.zuanshiImage.visible = !1, this.jinbiImage.visible = !1, this.mingzi.text = this.itemData.name, this.unlocktext.visible = !1) : this.itemData.id > n - 5 && this.itemData.id <= n - 2 ? (this.shopBtn.visible = !0, this.zuanshiImage.visible = !0, this.mingzi.text = this.itemData.name, this.shopSum.text = App.CommonUtils.getYi(this.zuanshi), this.unlocktext.visible = !1, this.itemData.id > n - App.UserConfig.getRange() && this.itemData.id <= n - (App.UserConfig.getRange() - 1) && (this.shopBtn.visible = !1, this.zuanshiImage.visible = !1, this.jinbiImage.visible = !1, this.guangGaoBtn.visible = !0, this.mingzi.text = this.itemData.name, this.unlocktext.visible = !1)) : this.itemData.id <= n - 5 ? (this.jinbiImage.visible = !0, this.shopBtn.visible = !0, this.mingzi.text = this.itemData.name, this.unlocktext.visible = !1) : (this.shopBtn.visible = !1, App.EffectUtils.setImageColor(this.zhiWuTu, 0), this.mingzi.text = "", this.speedLoadImg.width = 0, this.attackLoadImg.width = 0, this.unlocktext.visible = !0))
    }, t
}(eui.ItemRenderer);
__reflect(ShopItemView.prototype, "ShopItemView"), window.ShopItemView = ShopItemView;
var ShopView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "ShopViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.closeBtn), this.zuanshi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetZuanShi, this), this.jinbi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGetJinBi, this)
    }, t.prototype.onGetZuanShi = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.SDiamond)
    }, t.prototype.onGetJinBi = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.SGold)
    }, t.prototype.advEnd = function() {
        App.videoType == VideoRewardType.SGold ? (App.UserConfig.addGold(2e4), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Chúc mừng nhận 20.000 vàng"), this.goldChage()) : App.videoType == VideoRewardType.SDiamond && (App.UserConfig.addZuanShi(300), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Nhận 300 kim cương"), this.goldChage())
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        App.GameScene.unRegeditMapTouch(), App.MessageCenter.addListener(MessageType.GoldChange.toString(), this.goldChage, this), App.MessageCenter.addListener(MessageType.FlushShop.toString(), this.flushShop, this), App.MessageCenter.addListener(MessageType.SeeVideoEnd + "", this.advEnd, this);
        for (var n = [], o = 0; 42 > o; o++) n.push(App.GameConfig.getroleItem(o + 1));
        this.myCollection = new eui.ArrayCollection(n), this.dataList.dataProvider = this.myCollection, this.dataList.itemRenderer = ShopItemView, i.goldChage(), App.MessageCenter.addListener(MessageType.onLoadNativeAD1 + "", this.showNativeBannerAd, this), egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && (GameConfig.BannerSwitch = !0, qgameKit.zhujiemianTopSwitch = !1, 1 == qgameKit.shangdianSwitch && qgameKit.getNativeAd1(GameConst.nativeAD), App.TimerManager.doTimer(3e4, 0, this.nativeTime, this)), wxTools.InformationAd()
    }, t.prototype.nativeTime = function() {
        1 == qgameKit.shangdianTopSwitch && 1 == qgameKit.shangdianSwitch && qgameKit.getNativeAd1(GameConst.nativeAD)
    }, t.prototype.showNativeBannerAd = function() {
        qgameKit.shangdianSwitch && qgameKit.nativeAdItem1 && App.UIManager.open("YuanShengicon", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1, UIscene.ShangDian)
    }, t.prototype.flushShop = function() {
        for (var e = [], t = 0; 42 > t; t++) e.push(App.GameConfig.getroleItem(t + 1));
        this.myCollection = new eui.ArrayCollection(e), this.dataList.dataProvider = this.myCollection, this.dataList.itemRenderer = ShopItemView
    }, t.prototype.goldChage = function() {
        var e = this;
        e.goldSum0.text = App.CommonUtils.getYi1(App.UserConfig.getGold()), e.diamondSum0.text = App.UserConfig.getZuanShi() + ""
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.MessageCenter.removeListener(MessageType.GoldChange.toString(), this.goldChage, this), App.MessageCenter.removeListener(MessageType.onLoadNativeAD1 + "", this.showNativeBannerAd, this), App.MessageCenter.removeListener(MessageType.SeeVideoEnd + "", this.advEnd, this), App.TimerManager.remove(this.nativeTime, this), App.GameScene.regeditMapTouch(), wxTools.closeInformationAd()
    }, t.prototype.oncloseClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), 1 == qgameKit.shangdianSwitch && App.UIManager.close("YuanShengicon", !1), qgameKit.zhujiemianTopSwitch = !0, 1 == qgameKit.zhujiemianSwitch && qgameKit.getNativeAd1(GameConst.nativeAD), App.UIManager.close("ShopView", !1)
    }, t
}(BaseView);
__reflect(ShopView.prototype, "ShopView", ["eui.UIComponent", "egret.DisplayObject"]), window.ShopView = ShopView;
var ShouHuoView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.shouhuojinbi = 0, t._interval = 0, t.skinName = "ShouHuoViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.closeBtn), this.quedingBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onquedingClick, this), BtnTool.btnSMin(this.quedingBtn), i.lGro.addEventListener(egret.TouchEvent.TOUCH_TAP, i.lGroChange, i), i.rGro.addEventListener(egret.TouchEvent.TOUCH_TAP, i.rGroChange, i), i.dataList.addEventListener(eui.ItemTapEvent.ITEM_TAP, i.ondataChange, i), i.scroller.viewport = i.dataList, i.moreIma.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            App.UIManager.open("MoreGameView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1, "客观请留步")
        }, this)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        App.GameScene.unRegeditMapTouch();
        var n = Math.round(9e3 * Math.pow(App.UserConfig.getUnLockMaxID() - 1, 3));
        this.shouhuo.text = App.CommonUtils.getYi(n), i.myCollection = new eui.ArrayCollection(App.GameConfig.gettuiguangT()), i.dataList.dataProvider = i.myCollection, i.dataList.itemRenderer = MoreGameItem, i.scroller.viewport.scrollH = 0, i.showGro(), i.timer && (i.timer.stop(), i.timer = null), i.timer = new egret.Timer(100, 0), i.timer.addEventListener(egret.TimerEvent.TIMER, i.moveScroller, this), i.timer.start()
    }, t.prototype.moveScroller = function(e) {
        var t = this;
        t.scroller.viewport.scrollH += 1, t.scroller.viewport.scrollH + t.scroller.width >= t.scroller.viewport.contentWidth && (t.scroller.viewport.scrollH = 0)
    }, t.prototype.ondataChange = function(e) {
        var t = this;
        if (!(egret.getTimer() - t._interval < 1e3)) {
            t._interval = egret.getTimer();
            var i = t.dataList.selectedItem;
            egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME && wxTools.navigateToMiniProgram(i.appid, i.path, i.name)
        }
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.closeMc(), i.timer && (i.timer.stop(), i.timer = null), App.GameScene.regeditMapTouch()
    }, t.prototype.showGro = function() {
        for (var e = this, t = App.GameConfig.getTuiGuangS().concat(), i = App.GameConfig.getMoreGameF().concat(), n = function(i) {
                var n = e.lGro.getChildAt(i);
                n._mcid = "", n.iconIma.visible = !0, n._mc && (App.MovieClipManager.RemoveEffect(n._mc), n._mc = null), n.nameTex.text = t[i].name, n.iconIma.source = t[i].reousceid, n._mcid = t[i].mcid, e.once(egret.Event.ENTER_FRAME, function() {
                    e.once(egret.Event.ENTER_FRAME, function() {
                        "" != n._mcid ? (n._mc = App.MovieClipManager.load(n._mcid, n._mcid), n._mc && (n.imaGro.addChild(n._mc), n._mc.x = n.iconIma.x, n._mc.y = n.iconIma.y, App.MovieClipManager.PlayEffect(n._mc, -1), n.iconIma.visible = !1)) : n._mc = null
                    }, e)
                }, e), n.nameTex.textColor = 16777215, App.EffectUtils.startRotate(n, 100, 10, 2e3)
            }, o = 0; o < e.lGro.numChildren; o++) n(o);
        for (var a = function(t) {
                var n = e.rGro.getChildAt(t);
                n._mcid = "", n.iconIma.visible = !0, n._mc && (App.MovieClipManager.RemoveEffect(n._mc), n._mc = null), n.nameTex.text = i[t].name, n.iconIma.source = i[t].reousceid, n._mcid = i[t].mcid, e.once(egret.Event.ENTER_FRAME, function() {
                    e.once(egret.Event.ENTER_FRAME, function() {
                        "" != n._mcid ? (n._mc = App.MovieClipManager.load(n._mcid, n._mcid), n._mc && (n.imaGro.addChild(n._mc), n._mc.x = n.iconIma.x, n._mc.y = n.iconIma.y, App.MovieClipManager.PlayEffect(n._mc, -1), n.iconIma.visible = !1)) : n._mc = null
                    }, e)
                }, e), n.nameTex.textColor = 16777215, App.EffectUtils.startRotate(n, 100, 10, 2e3)
            }, o = 0; o < e.rGro.numChildren; o++) a(o)
    }, t.prototype.lGroChange = function(e) {
        var t = this;
        if (!(egret.getTimer() - t._interval < 1e3)) {
            t._interval = egret.getTimer();
            for (var i = App.GameConfig.getTuiGuangS().concat(), n = new egret.Point(e.stageX, e.stageY), o = 0; o < t.lGro.numChildren; o++) t.lGro.getChildAt(o).hitTestPoint(n.x, n.y) && egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME && wxTools.navigateToMiniProgram(i[o].appid, i[o].path, i[o].name)
        }
    }, t.prototype.rGroChange = function(e) {
        var t = this;
        if (!(egret.getTimer() - t._interval < 1e3)) {
            t._interval = egret.getTimer();
            for (var i = App.GameConfig.getMoreGameF().concat(), n = new egret.Point(e.stageX, e.stageY), o = 0; o < t.rGro.numChildren; o++) t.rGro.getChildAt(o).hitTestPoint(n.x, n.y) && egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME && wxTools.navigateToMiniProgram(i[o].appid, i[o].path, i[o].name)
        }
    }, t.prototype.closeMc = function() {
        for (var e = this, t = 0; t < e.dataList.numElements; t++) {
            var i = e.dataList.getChildAt(t);
            i._mc && (App.MovieClipManager.RemoveEffect(i._mc), i._mc = null)
        }
        for (var t = 0; t < e.rGro.numChildren; t++) {
            var n = e.rGro.getChildAt(t);
            n._mcid = "", n.iconIma.visible = !0, n._mc && (App.MovieClipManager.RemoveEffect(n._mc), n._mc = null)
        }
        for (var t = 0; t < e.lGro.numChildren; t++) {
            var n = e.lGro.getChildAt(t);
            n._mcid = "", n.iconIma.visible = !0, n._mc && (App.MovieClipManager.RemoveEffect(n._mc), n._mc = null)
        }
        for (var t = 0; t < e.lGro.numChildren; t++) {
            var n = e.lGro.getChildAt(t);
            App.EffectUtils.stopRotate(n)
        }
        for (var t = 0; t < e.rGro.numChildren; t++) {
            var n = e.rGro.getChildAt(t);
            App.EffectUtils.stopRotate(n)
        }
    }, t.prototype.oncloseClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), App.UIManager.close("ShouHuoView", !1), egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME
    }, t.prototype.onquedingClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), App.MessageCenter.dispatch(MessageType.zhongZhi.toString()), egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME, App.UIManager.close("ShouHuoView", !1)
    }, t
}(BaseView);
__reflect(ShouHuoView.prototype, "ShouHuoView", ["eui.UIComponent", "egret.DisplayObject"]), window.ShouHuoView = ShouHuoView;
var SpeedUpTip = function(e) {
    function t() {
        var t = e.call(this) || this;
        t.timer = 300, t.isStart = !1;
        var i = t;
        return i.skinName = "GongJiViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onSeeVideoSpeedUp, i), BtnTool.btnSMin(i.videoBtn), i.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onGoBack, i), BtnTool.btnSMin(i.closeBtn)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.tipbg.visible = !1, App.GameScene.unRegeditMapTouch(), App.FightSystem.setPause(!0), App.MessageCenter.addListener(MessageType.SeeVideoEnd + "", this.advEnd, this), egret.Tween.get(this.Gro).to({
            scaleX: 1.2,
            scaleY: 1.2
        }, 200).to({
            scaleX: 1,
            scaleY: 1
        }, 200), this.rocket.x = -562, this.rocket.y = 392, egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && (GameConfig.BannerSwitch = !1, qgameKit.zhujiemianTopSwitch = !1, qgameKit.closeBanner(), App.MessageCenter.addListener(MessageType.onLoadNativeAD + "", this.showNativeAD, this), qgameKit.getNativeAd(GameConst.nativeAD), App.TimerManager.doTimer(3e4, 0, this.nativeTime, this))
    }, t.prototype.nativeTime = function() {
        qgameKit.getNativeAd(GameConst.nativeAD)
    }, t.prototype.showNativeAD = function() {
        qgameKit.nativeAdItem && App.UIManager.open("yuanshengView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1)
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        App.MessageCenter.removeListener(MessageType.SeeVideoEnd + "", this.advEnd, this), App.GameScene.regeditMapTouch(), App.FightSystem.setPause(!1), egret.Tween.removeTweens(i.rocket), egret.Tween.removeTweens(i.Gro), App.TimerManager.remove(this.nativeTime, this)
    }, t.prototype.advEnd = function() {
        var e = this;
        App.videoType == VideoRewardType.DoubleAttack && (this.isStart = !0, this.tipbg.visible = !0, egret.Tween.get(this.rocket).to({
            x: 64,
            y: 142
        }, 800).wait(200).to({
            x: 32,
            y: 156
        }, 200).wait(200).to({
            x: 732,
            y: -124
        }, 600).wait(100).call(function() {
            e.tipbg.visible = !1
        }), App.SkillManager.setSpeedUp(!0), App.speedTime = 300, GameConst.BoxGold = .5 * this.sumcount(App.UserConfig.getLevel(), 1), App.MessageCenter.dispatch(MessageType.startCountDown + ""), App.TimerManager.doTimer(1e3, 0, this.countDown, this))
    }, t.prototype.onSeeVideoSpeedUp = function() {
        return App.SoundManager.playEffect("dianji_mp3", 1), this.isStart || App.SkillManager.getSpeedUp() ? void App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "已开启加速") : void wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.DoubleAttack)
    }, t.prototype.countDown = function() {
        this.timer -= 1, this.daojishi.text = App.DateUtils.getFormatBySecond(this.timer, 3), this.timer <= 0 && (this.timer = 300, this.daojishi.text = App.DateUtils.getFormatBySecond(this.timer, 3), this.isStart = !1, App.SkillManager.setSpeedUp(!1), GameConst.BoxGold = .5 * this.sumcount(App.UserConfig.getLevel(), 1), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "加速结束"), App.TimerManager.remove(this.countDown, this))
    }, t.prototype.sumcount = function(e, t) {
        var i = Math.round((1 + .5 * t) * Math.pow(e, 3) * (Math.pow(e, 3) / 3 + .5 * Math.pow(e, 2) + e / 6 + 2));
        return i
    }, t.prototype.onGoBack = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && (App.MessageCenter.removeListener(MessageType.onLoadNativeAD + "", this.showNativeAD, this), GameConfig.BannerSwitch = !0, qgameKit.zhujiemianTopSwitch = !0), App.UIManager.close("yuanshengView", !1), egret.Tween.get(this.Gro).to({
            scaleX: 1.2,
            scaleY: 1.2
        }, 200).to({
            scaleX: .5,
            scaleY: .5
        }, 200).call(function() {
            App.UIManager.close("SpeedUpTip", !1)
        })
    }, t
}(BaseView);
__reflect(SpeedUpTip.prototype, "SpeedUpTip", ["eui.UIComponent", "egret.DisplayObject"]), window.SpeedUpTip = SpeedUpTip;
var TabItem = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "TabItemSkin", t
    }
    return __extends(t, e), t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t.prototype.dataChanged = function() {
        this.labelDisplay.text = this.data
    }, t
}(eui.ItemRenderer);
__reflect(TabItem.prototype, "TabItem", ["eui.UIComponent", "egret.DisplayObject"]), window.TabItem = TabItem;
var Temporary = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.goldCount(), t
    }
    return __extends(t, e), t.prototype.goldCount = function() {
        for (var e = [], t = 0; 42 > t; t++) {
            var i = {
                id: 0,
                glodMoney: 0,
                diamondMoney: 0
            };
            i.id = t + 1, e.push(i)
        }
        var n = [],
            o = [];
        if (App.UserConfig.getUnLockMaxID() >= 1) {
            for (var t = 0; t < App.UserConfig.getUnLockMaxID(); t++) e[t].id <= App.UserConfig.getUnLockMaxID() - 2 ? n.push(e[t]) : o.push(e[t]);
            var a = [];
            if (n.length < 4) a = n;
            else
                for (var t = 0; 4 > t; t++) a.push(n[n.length - t]);
            a.length > 1 && a.sort(function(e, t) {
                return e.glodMoney / Math.pow(2, e.id - 1) === t.glodMoney / Math.pow(2, t.id - 1) ? e.id - t.id : e.glodMoney / Math.pow(2, e.id - 1) - t.glodMoney / Math.pow(2, t.id - 1)
            }), o.length > 1 && o.sort(function(e, t) {
                return e.diamondMoney / Math.pow(2, e.id - 1) != t.diamondMoney / Math.pow(2, t.id - 1) ? e.diamondMoney / Math.pow(2, e.id - 1) - t.diamondMoney / Math.pow(2, t.id - 1) : e.id - t.id
            }), o.length > 0 ? (this.diamondNumcount = o[0].id, this.diamondMoneycount = o[0].diamondMoney) : (this.diamondNumcount = 1, this.diamondMoneycount = 7), a.length > 0 ? (this.glodNumcount = a[0].id, this.glodMoneycount = a[0].glodMoney) : (o.sort(function(e, t) {
                return e.glodMoney / Math.pow(2, e.id - 1) != t.glodMoney / Math.pow(2, t.id - 1) ? e.glodMoney / Math.pow(2, e.id - 1) - t.glodMoney / Math.pow(2, t.id - 1) : e.id - t.id
            }), this.glodNumcount = o[0].id, this.glodMoneycount = o[0].glodMoney)
        }
    }, t.prototype.getGlodNumcount = function() {
        return this.goldCount(), this.glodNumcount
    }, t.prototype.getGlodMoneycount = function() {
        return this.goldCount(), this.glodMoneycount
    }, t.prototype.getDiamondNumcount = function() {
        return this.goldCount(), this.diamondNumcount
    }, t.prototype.getDiamondMoneycount = function() {
        return this.goldCount(), this.diamondMoneycount
    }, t.prototype.sumcount = function(e, t) {
        var i = Math.round((1 + .5 * t) * Math.pow(e, 3) * (Math.pow(e, 3) / 3 + .5 * Math.pow(e, 2) + e / 6 + 2));
        return i
    }, t.prototype.sumzuanshi = function(e, t) {
        var i = Math.round(Math.pow(1.25 + (t - 1) / 100, e + 1));
        return i
    }, t
}(SingletonClass);
__reflect(Temporary.prototype, "Temporary"), window.Temporary = Temporary;
var TuJianItemView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "TuJianItemViewSkin", t
    }
    return __extends(t, e), t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t.prototype.dataChanged = function() {
        this.itemData = this.data, this.jibie.text = this.itemData.jibie, this.mingzi.text = this.itemData.mingzi, this.changjing.text = this.itemData.changjing, this.jieshao.text = this.itemData.jieshao, this.jiangshi.source = this.itemData.jiangshi
    }, t
}(eui.ItemRenderer);
__reflect(TuJianItemView.prototype, "TuJianItemView", ["eui.UIComponent", "egret.DisplayObject"]), window.TuJianItemView = TuJianItemView;
var TuJianView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.sourceArr = [], t._interval = 0, t.skinName = "TuJianViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.closeBtn)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.timer && (i.timer.stop(), i.timer = null)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this);
        for (var t = 0; 15 > t; t++) this.sourceArr.push(App.GameConfig.getzombieItem(t + 1));
        this.myCollection = new eui.ArrayCollection(this.sourceArr), this.dataList.dataProvider = this.myCollection, this.dataList.itemRenderer = TuJianItemView
    }, t.prototype.oncloseClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), App.UIManager.close("TuJianView", !1)
    }, t
}(BaseView);
__reflect(TuJianView.prototype, "TuJianView", ["eui.UIComponent", "egret.DisplayObject"]), window.TuJianView = TuJianView;
var VideoRewardType;
! function(e) {
    e[e.Gold = 1] = "Gold", e[e.Diamond = 2] = "Diamond", e[e.AutoMerge = 3] = "AutoMerge", e[e.LiXian = 4] = "LiXian", e[e.DoubleAttack = 5] = "DoubleAttack", e[e.Unlock = 6] = "Unlock", e[e.SGold = 7] = "SGold", e[e.SDiamond = 8] = "SDiamond", e[e.Shop = 9] = "Shop", e[e.QianDao = 10] = "QianDao", e[e.ZhuanPan = 11] = "ZhuanPan", e[e.YinHang = 12] = "YinHang", e[e.LDiamond = 13] = "LDiamond", e[e.AttackUp = 14] = "AttackUp", e[e.PriceFavorable = 15] = "PriceFavorable", e[e.ReduceLevel = 16] = "ReduceLevel", e[e.LiBao = 17] = "LiBao"
}(VideoRewardType || (VideoRewardType = {}));
var App = function() {
    function e() {}
    return Object.defineProperty(e, "MessageCenter", {
        get: function() {
            return MessageCenter.getInstance(1)
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "TimerManager", {
        get: function() {
            return TimerManager.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "StringUtils", {
        get: function() {
            return StringUtils.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "DebugUtils", {
        get: function() {
            return DebugUtils.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "SoundManager", {
        get: function() {
            return SoundManager.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "GameConfig", {
        get: function() {
            return GameConfig.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "UserConfig", {
        get: function() {
            return UserConfig.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "CommonUtils", {
        get: function() {
            return CommonUtils.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "StageUtils", {
        get: function() {
            return StageUtils.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "EffectUtils", {
        get: function() {
            return EffectUtils.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "FightSystem", {
        get: function() {
            return FightSystem.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "SkillManager", {
        get: function() {
            return SkillManager.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "MovieClipManager", {
        get: function() {
            return MovieClipManager.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "GameScene", {
        get: function() {
            return GameScene.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "RandomUtils", {
        get: function() {
            return RandomUtils.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "DateUtils", {
        get: function() {
            return DateUtils.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "Temporary", {
        get: function() {
            return Temporary.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e, "UIManager", {
        get: function() {
            return UIManager.getInstance()
        },
        enumerable: !0,
        configurable: !0
    }), e.Init = function() {
        e.DebugUtils.isOpen(!1), e.DebugUtils.setThreshold(5), egret.ExternalInterface.addCallback("NTC_ShowVideo", function(t) {
            e.MessageCenter.dispatch(MessageType.SeeVideoEnd + "")
        })
    }, e.isShowLevelDown = !0, e.isShowLifeGuide = !1, e.speedTime = 300, e.getAward = 60, e.isGetGold = !0, e.isGetJijia = !1, e.isGetDiamond = !1, e.GlobalData = null, e
}();
__reflect(App.prototype, "App");
var YuanShengicon = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "YuanShengiconSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.nativeADImg.addEventListener(egret.TouchEvent.TOUCH_END, i.onClickNativeAD, i), i.nativeADBtn.addEventListener(egret.TouchEvent.TOUCH_END, i.onClickNativeAD, i), i.bg.addEventListener(egret.TouchEvent.TOUCH_END, i.onClickNativeAD, i), i.titlead.addEventListener(egret.TouchEvent.TOUCH_END, i.onClickNativeAD, i), BtnTool.btnSMin(i.nativeADBtn), i.closebtn.addEventListener(egret.TouchEvent.TOUCH_END, i.oncloseClick, i), BtnTool.btnSMin(i.closebtn)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        this.nativeSwitch = e[0][0], qgameKit.nativeAdItem1 && (qgameKit.nativeAdItem1.iconUrlList && qgameKit.nativeAdItem1.iconUrlList.length > 0 ? (i.nativeADImg.source = qgameKit.nativeAdItem1.iconUrlList[0], i.title.text = qgameKit.nativeAdItem1.title, i.content.text = qgameKit.nativeAdItem1.desc) : (i.nativeADImg.source = qgameKit.nativeAdItem1.imgUrlList[0], i.title.text = qgameKit.nativeAdItem1.title, i.content.text = qgameKit.nativeAdItem1.desc))
    }, t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t.prototype.onClickNativeAD = function() {
        qgameKit.nativeClick1()
    }, t.prototype.oncloseClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), this.nativeSwitch == UIscene.ZhuJieMian ? (qgameKit.zhujiemianSwitch = !1, console.log("zhujiemianSwitch")) : this.nativeSwitch == UIscene.ShengYa ? (qgameKit.shengyaSwitch = !1, console.log("shengyaSwitch")) : this.nativeSwitch == UIscene.ZhuanPan ? (qgameKit.zhuanpanSwitch = !1, console.log("zhuanpanSwitch")) : this.nativeSwitch == UIscene.YinHang ? (qgameKit.yinhangSwitch = !1, console.log("yinhangSwitch")) : this.nativeSwitch == UIscene.ShangDian ? (qgameKit.shangdianSwitch = !1, console.log("shangdianSwitch")) : this.nativeSwitch == UIscene.QianDao && (qgameKit.qiandaoSwitch = !1, console.log("qiandaoSwitch")), App.UIManager.close("YuanShengicon", !1)
    }, t
}(BaseView);
__reflect(YuanShengicon.prototype, "YuanShengicon", ["eui.UIComponent", "egret.DisplayObject"]), window.YuanShengicon = YuanShengicon;
var yuanshengView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "yuanshengViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.nativeADImgBtn.addEventListener(egret.TouchEvent.TOUCH_END, i.onClickNativeAD, i), i.nativeADBtn.addEventListener(egret.TouchEvent.TOUCH_END, i.onClickNativeAD, i), BtnTool.btnSMin(i.nativeADBtn), i.closebtn.addEventListener(egret.TouchEvent.TOUCH_END, i.oncloseClick, i), BtnTool.btnSMin(i.closebtn)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && qgameKit.nativeAdItem && (qgameKit.nativeAdItem.imgUrlList && qgameKit.nativeAdItem.imgUrlList.length > 0 ? (i.nativeADImg.source = qgameKit.nativeAdItem.imgUrlList[0], i.title.text = qgameKit.nativeAdItem.title, i.content.text = qgameKit.nativeAdItem.desc) : (i.nativeADImg.source = qgameKit.nativeAdItem.iconUrlList[0], i.title.text = qgameKit.nativeAdItem.title, i.content.text = qgameKit.nativeAdItem.desc))
    }, t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this)
    }, t.prototype.onClickNativeAD = function() {
        qgameKit.nativeClick()
    }, t.prototype.oncloseClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), App.UIManager.close("yuanshengView", !1)
    }, t
}(BaseView);
__reflect(yuanshengView.prototype, "yuanshengView", ["eui.UIComponent", "egret.DisplayObject"]), window.yuanshengView = yuanshengView;
var zaixianjiangliView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.skinName = "zaixianjiangliViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.GameScene.unRegeditMapTouch(), this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.closeBtn), this.getBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onquerenClick, this), BtnTool.btnSMin(this.getBtn), App.MessageCenter.addListener(MessageType.awardCountDown + "", this.showAward, this), this.awardImg.width = 82, this.awardImg.height = 88, App.EffectUtils.startRotation(this.blinkImg), this.showAward()
    }, t.prototype.nativeTime = function() {
        qgameKit.getNativeAd(GameConst.nativeAD)
    }, t.prototype.showNativeAD = function() {
        qgameKit.nativeAdItem && App.UIManager.open("yuanshengView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1)
    }, t.prototype.showAward = function() {
        App.isGetGold ? (this.awardNum.text = "X3000", this.awardImg.source = "jinbi_png", this.gettext.text = App.DateUtils.getFormatBySecond(App.getAward, 3)) : App.isGetJijia ? (this.awardNum.text = "X3", this.awardImg.source = "fplant10_png", this.gettext.text = App.DateUtils.getFormatBySecond(App.getAward, 3)) : (this.awardNum.text = "X300", this.awardImg.source = "zuanshi_png", this.gettext.text = App.DateUtils.getFormatBySecond(App.getAward, 3)), App.getAward <= 0 && (this.gettext.text = "Nhận")
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.GameScene.regeditMapTouch(), this.closeBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), this.getBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onquerenClick, this), App.MessageCenter.removeListener(MessageType.awardCountDown + "", this.showAward, this), App.TimerManager.remove(this.nativeTime, this), App.EffectUtils.stopRotate(this.blinkImg)
    }, t.prototype.onquerenClick = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), App.getAward <= 0 ? (App.isGetGold ? (App.UserConfig.addGold(3e3), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Chúc mừng nhận được 3.000 vàng"), App.isGetGold = !1, App.isGetJijia = !0, App.isGetDiamond = !1) : App.isGetJijia ? (App.FightSystem.setProduceJijia(!0), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Chúc mừng nhận được mech "), App.isGetGold = !1, App.isGetJijia = !1, App.isGetDiamond = !0) : (App.UserConfig.addZuanShi(300), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Nhận 300 kim cương"), App.isGetGold = !0, App.isGetJijia = !1, App.isGetDiamond = !1), App.MessageCenter.dispatch(MessageType.awardCountDown1 + ""), egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && (App.MessageCenter.removeListener(MessageType.onLoadNativeAD + "", this.showNativeAD, this), GameConfig.BannerSwitch = !0), App.UIManager.close("yuanshengView", !1), App.UIManager.close("zaixianjiangliView", !1)) : App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Thời gian Online chưa đủ ~")
    }, t.prototype.oncloseClick = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && (App.MessageCenter.removeListener(MessageType.onLoadNativeAD + "", this.showNativeAD, this), GameConfig.BannerSwitch = !0), App.UIManager.close("yuanshengView", !1), App.UIManager.close("zaixianjiangliView", !1)
    }, t
}(BaseView);
__reflect(zaixianjiangliView.prototype, "zaixianjiangliView", ["eui.UIComponent", "egret.DisplayObject"]), window.zaixianjiangliView = zaixianjiangliView;
var ZenMeWanView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._interval = 0, t.skinName = "ZenMeWanViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.closeBtn)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.GameScene.unRegeditMapTouch(), egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME && egret.getTimer() > 1e4 && wxTools.InsertAd(GameConst.InsertAd);
        egret.Tween.get(this.shouzhi, {
            loop: !0
        }).to({
            x: this.shouzhi.x + 200
        }, 1500)
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.timer && (i.timer.stop(), i.timer = null), App.GameScene.regeditMapTouch()
    }, t.prototype.oncloseClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), App.UIManager.close("ZenMeWanView", !1)
    }, t
}(BaseView);
__reflect(ZenMeWanView.prototype, "ZenMeWanView", ["eui.UIComponent", "egret.DisplayObject"]), window.ZenMeWanView = ZenMeWanView;
var ZhiYinView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.bitmap1 = new egret.Bitmap, t.container = new egret.DisplayObjectContainer, t.container1 = new egret.DisplayObjectContainer, t._path = new egret.Point, t.skinName = "ZhiYinViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.quedingBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.quedingClick, this), BtnTool.btnSMin(this.quedingBtn)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        App.MessageCenter.addListener(MessageType.GuidGouMai.toString(), this.hecheng, this), App.MessageCenter.addListener(MessageType.GuidGuanBi.toString(), this.chuzhen, this), App.MessageCenter.addListener(MessageType.GameZhiyinGuan.toString(), this.gameZhiyinGuan, this), App.MessageCenter.addListener(MessageType.ShanChuZhiYin.toString(), this.shanChuZhiYin, this), e.length > 0 && e[0][0] && (i._path = e[0][0]), 1 == App.UserConfig.getUnLockMaxID() && 1 == App.UserConfig.getShopData()[0].jinbicishu ? (i.no1.visible = !1, i.wordTex.visible = !1, i.word0.visible = !1, i.word1.visible = !1, this.hecheng()) : 2 == App.UserConfig.getUnLockMaxID() && 1 == App.UserConfig.getShopData()[0].jinbicishu ? (i.no1.visible = !1, i.wordTex.visible = !1, i.word0.visible = !1, i.word1.visible = !1, App.TimerManager.doFrame(1, 1, this.chuzhen, this)) : App.UIManager.close("ZhiYinView", !1)
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        App.MessageCenter.removeListener(MessageType.GuidGuanBi.toString(), this.chuzhen, this), App.MessageCenter.removeListener(MessageType.GuidGouMai.toString(), this.hecheng, this), App.MessageCenter.removeListener(MessageType.GameZhiyinGuan.toString(), this.gameZhiyinGuan, this), App.MessageCenter.removeListener(MessageType.ShanChuZhiYin.toString(), this.shanChuZhiYin, this), App.TimerManager.remove(this.chuzhen, this)
    }, t.prototype.gameZhiyinGuan = function() {
        this.shouzhiMap && egret.Tween.removeTweens(this.shouzhiMap), this.shouzhiMap && this.shouzhiMap.parent && (this.shouzhiMap.parent.removeChild(this.shouzhiMap), this.shouzhiMap = null), this.bitmap2 && this.bitmap2.parent && (this.bitmap2.parent.removeChild(this.bitmap2), this.bitmap2 = null), this.chuzhengText && this.chuzhengText.parent && (this.chuzhengText.parent.removeChild(this.chuzhengText), this.chuzhengText = null), App.UserConfig.downUnLock(3), App.UIManager.open("QianDaoView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1, !1), App.UIManager.close("ZhiYinView", !1), App.UserConfig.save()
    }, t.prototype.quedingClick = function(e) {
        var t = this;
        App.SoundManager.playEffect("dianji_mp3", 1), t.no1.visible = !1, t.wordTex.visible = !1, t.word0.visible = !1, t.word1.visible = !1, t.goumai()
    }, t.prototype.hecheng = function() {
        var e = this;
        this.guanbi(), this.bitmap1 = this.maskGro(this.getfirst().x, this.getfirst().y - 20, this.getsecond().x, this.getsecond().y - 20, (this.getsecond().x - this.getfirst().x) / 2 + 20, (this.getsecond().x - this.getfirst().x) / 2 + 60), this.addChildAt(this.bitmap1, 0), this.shouzhiMap || (this.shouzhiMap = new egret.Bitmap(RES.getRes("shouzhi_png"))), this.shouzhiMap.x = this.getsecond().x, this.shouzhiMap.y = this.getsecond().y, e.hechengText = new eui.Label, e.hechengText.x = this.getfirst().x, e.hechengText.y = this.getfirst().y - 150, e.hechengText.textColor = e.word1.textColor, e.hechengText.size = e.word1.size - 8, e.hechengText.text = "相同等级的机甲可合成", e.hechengText.visible = !0, App.stage.addChild(this.shouzhiMap), this.addChild(this.hechengText), egret.Tween.get(this.shouzhiMap, {
            loop: !0
        }).to({
            x: this.getfirst().x
        }, 1500)
    }, t.prototype.shanChuZhiYin = function() {
        var e = this;
        e.no1.visible = !1, e.wordTex.visible = !1, e.word0.visible = !1, e.word1.visible = !1, this.bitmap1.parent && (this.bitmap1.parent.removeChild(this.bitmap1), this.bitmap1 = null), this.hechengText && this.hechengText.parent && (this.hechengText.parent.removeChild(this.hechengText), this.hechengText = null), this.shouzhiMap.visible = !1, this.shouzhiMap && egret.Tween.removeTweens(this.shouzhiMap)
    }, t.prototype.chuzhen = function() {
        var e = this,
            t = App.FightSystem.getAttacker(),
            i = App.FightSystem.getMapScene().getMapLayer().localToGlobal(t[0].getX(), t[0].getY());
        this.shouzhiMap || (this.shouzhiMap = new egret.Bitmap(RES.getRes("shouzhi_png"))), this.shouzhiMap.visible = !0, this.shouzhiMap.x = i.x, this.shouzhiMap.y = i.y, this.bitmap2 = this.maskGro(i.x, i.y - 20, this.gethuapen().x, this.gethuapen().y, (this.getsecond().x - this.getfirst().x) / 2 + 37, (this.getsecond().x - this.getfirst().x) / 2 + 80), e.chuzhengText = new eui.Label, e.chuzhengText.x = this.getfirst().x + 80, e.chuzhengText.y = this.getfirst().y - 300, e.chuzhengText.textColor = e.word1.textColor, e.chuzhengText.size = e.word1.size - 8, e.chuzhengText.text = "拖动机甲到战斗区域", e.chuzhengText.visible = !0, this.addChild(this.shouzhiMap), this.addChild(this.chuzhengText), this.addChildAt(this.bitmap2, 0), egret.Tween.get(this.shouzhiMap, {
            loop: !0
        }).to({
            x: this.gethuapen().x,
            y: this.gethuapen().y
        }, 1500)
    }, t.prototype.goumai = function() {
        var e = this;
        egret.setTimeout(function() {
            e.no1.visible = !1, e.wordTex.visible = !1, e.word0.visible = !1, e.word1.visible = !1, this.bitmap2 && this.bitmap2.parent && (this.bitmap2.parent.removeChild(this.bitmap2), this.bitmap2 = null), this.shouzhiMap && egret.Tween.removeTweens(this.shouzhiMap);
            var t = new egret.Point,
                i = App.UIManager.getWindow("ZhuJieMianView");
            i && i.glodShop ? (i.glodShop.localToGlobal(.5 * i.glodShop.width, .5 * i.glodShop.height, t), this.shouzhiMap || (this.shouzhiMap = new egret.Bitmap(RES.getRes("shouzhi_png"))), this.shouzhiMap.x = t.x + 30, this.shouzhiMap.y = t.y + 30, e.word2 = new eui.Label, e.word2.x = t.x - .5 * i.glodShop.width - 50, e.word2.y = t.y - i.glodShop.height - 30, e.word2.textColor = e.word1.textColor, e.word2.size = e.word1.size, e.word2.text = "点击快捷购买机甲", e.word2.visible = !0, this.bitmap3 = this.maskGro(t.x, t.y, 0, 0, i.glodShop.width, i.glodShop.height), App.stage.addChild(this.shouzhiMap), this.addChild(this.bitmap3), this.addChild(this.word2), egret.Tween.get(this.shouzhiMap, {
                loop: !0
            }).to({
                x: t.x,
                y: t.y
            }, 800)) : e.guanbi()
        }, this, 100)
    }, t.prototype.guanbi = function() {
        this.shouzhiMap && egret.Tween.removeTweens(this.shouzhiMap), this.shouzhiMap && this.shouzhiMap.parent && (this.shouzhiMap.parent.removeChild(this.shouzhiMap), this.shouzhiMap = null), this.bitmap3 && this.bitmap3.parent && (this.bitmap3.parent.removeChild(this.bitmap3), this.bitmap3 = null), this.word2 && this.word2.parent && (this.word2.parent.removeChild(this.word2), this.word2 = null)
    }, t.prototype.getfirst = function() {
        var e = App.GameScene._mapscene.getGrid();
        return e
    }, t.prototype.getsecond = function() {
        var e = App.GameScene._mapscene.getsecond();
        return e
    }, t.prototype.gethuapen = function() {
        var e = App.GameScene._mapscene.gethuapen();
        return e
    }, t.prototype.maskGro = function(e, t, i, n, o, a) {
        var r = new egret.DisplayObjectContainer,
            s = new egret.Shape,
            p = new egret.Shape;
        if (s.graphics.beginFill(0, .6), s.graphics.drawRect(0, 0, App.stage.stageWidth, App.stage.stageHeight), s.graphics.endFill(), p.graphics.beginFill(16711680, 1), p.graphics.drawRect(e, t, o, a), p.graphics.endFill(), p.anchorOffsetX = .5 * p.width, p.anchorOffsetY = .5 * p.height, r.addChild(s), r.addChild(p), p.blendMode = egret.BlendMode.ERASE, 0 != i) {
            var h = new egret.Shape;
            h.graphics.beginFill(16711680, 1), h.graphics.drawRect(i, n, o, a), h.graphics.endFill(), h.anchorOffsetX = .5 * h.width, h.anchorOffsetY = .5 * h.height, r.addChild(h), h.blendMode = egret.BlendMode.ERASE
        }
        var l = new egret.RenderTexture;
        l.drawToTexture(r);
        var c = new egret.Bitmap(l);
        return c.touchEnabled = !1, c.pixelHitTest = !0, c.width = App.stage.stageWidth, c.height = App.stage.stageHeight, c
    }, t
}(BaseView);
__reflect(ZhiYinView.prototype, "ZhiYinView", ["eui.UIComponent", "egret.DisplayObject"]), window.ZhiYinView = ZhiYinView;
var ZhuanPanView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.isplaying = !1, t._result = 0, t.zhuanPanSum = 0, t._delay = 0, t._interval = 0, t.timer1 = 600, t.isStart = !1, t.delaytime = 0, t.skinName = "ZhuanPanViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        this.zhuanpanBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onZhuanpanClick, this), BtnTool.btnSMin(this.zhuanpanBtn), this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oncloseClick, this), BtnTool.btnSMin(this.closeBtn), this.invitationBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.oninvitationBtnClick, this), BtnTool.btnSMin(this.invitationBtn)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        if (App.GameScene.unRegeditMapTouch(), App.FightSystem.setPause(!0), App.MessageCenter.addListener(MessageType.SeeVideoEnd + "", this.advEnd, this), i._delay = 0, this.invitationBtn.visible = !1, i.isplaying = !1, this.tipbg.visible = !1, this.rocket.x = -562, this.rocket.y = 392, App.UserConfig.getZhuanPanNum() < 3) {
            var n = Date.now() - App.UserConfig.getZhuanPanTime(),
                o = Math.floor(n / 1e3 / GameConst.ZhuanPanSum);
            o + App.UserConfig.getZhuanPanNum() > 3 ? App.UserConfig.setZhuanPan(3) : App.UserConfig.setZhuanPanNum(o, !0)
        }
        this.zhuanPan(), App.MessageCenter.addListener(MessageType.onLoadNativeAD1 + "", this.showNativeBannerAd, this), egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && (GameConfig.BannerSwitch = !0, qgameKit.zhujiemianTopSwitch = !1, 1 == qgameKit.zhuanpanSwitch && qgameKit.getNativeAd1(GameConst.nativeAD), App.TimerManager.doTimer(3e4, 0, this.nativeTime, this))
    }, t.prototype.nativeTime = function() {
        1 == qgameKit.zhuanpanTopSwitch && 1 == qgameKit.zhuanpanSwitch && qgameKit.getNativeAd1(GameConst.nativeAD)
    }, t.prototype.showNativeBannerAd = function() {
        qgameKit.zhuanpanSwitch && qgameKit.nativeAdItem1 && App.UIManager.open("YuanShengicon", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1, UIscene.ZhuanPan)
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        egret.Tween.removeTweens(i.rocket), App.MessageCenter.removeListener(MessageType.onLoadNativeAD1 + "", this.showNativeBannerAd, this), App.MessageCenter.removeListener(MessageType.SeeVideoEnd + "", this.advEnd, this), App.TimerManager.remove(this.nativeTime, this), App.FightSystem.setPause(!1), App.GameScene.regeditMapTouch()
    }, t.prototype.advEnd = function() {
        App.videoType == VideoRewardType.ZhuanPan && (App.UserConfig.setZhuanPanNum(3, !0), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Nhận thưởng thành công ~"), App.MessageCenter.dispatch(MessageType.GoldChange.toString()), this.zhuanPan())
    }, t.prototype.oninvitationBtnClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.ZhuanPan)
    }, t.prototype.oncloseClick = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), egret.Tween.removeTweens(this.zhuanpan), this.isplaying = !1, 1 == qgameKit.zhuanpanSwitch && App.UIManager.close("YuanShengicon", !1), qgameKit.zhujiemianTopSwitch = !0, 1 == qgameKit.zhujiemianSwitch && qgameKit.getNativeAd1(GameConst.nativeAD), App.UIManager.close("ZhuanPanView", !1)
    }, t.prototype.onZhuanpanClick = function(e) {
        if (App.SoundManager.playEffect("dianji_mp3", 1), this.isplaying) return void App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Vòng đang quay ~");
        this._result = 0;
        var t = 1e3 * Math.random();
        t >= 0 && (50 >= t ? this._result = 5 : 100 >= t ? this._result = 1 : 200 >= t ? this._result = 3 : 300 >= t ? this._result = 2 : this._result = 8), this.turnTable(this._result), this.zhuanPan()
    }, t.prototype.zhuanPan = function() {
        this.sum.text = App.UserConfig.getZhuanPanNum().toString(), App.UserConfig.getZhuanPanNum() <= 0 ? (this.invitationBtn.visible = !0, this.zhuanpanBtn.visible = !1) : (this.invitationBtn.visible = !1, this.zhuanpanBtn.visible = !0)
    }, t.prototype.turnTable = function(e) {
        if (0 == this.isplaying) {
            this.isplaying = !0;
            var t = 45 * this._result + 1800;
            this.showAnimation(5e3, t)
        }
    }, t.prototype.showAnimation = function(e, t) {
        var i, n = this,
            o = this;
        i = egret.Tween.get(o.zhuanpan).to({
            rotation: t
        }, e, egret.Ease.cubicInOut).call(function() {
            o.isplaying = !1, App.UserConfig.getZhuanPanNum() >= 3 && App.UserConfig.setZhuanPanTime(Date.now()), App.UserConfig.setZhuanPanNum(1, !1);
            var e = "",
                t = "",
                i = function() {};
            Math.floor(Math.pow(App.UserConfig.getUnLockMaxID(), 3) * (Math.pow(App.UserConfig.getUnLockMaxID(), 3) / 3 + .5 * Math.pow(App.UserConfig.getUnLockMaxID(), 2) + App.UserConfig.getUnLockMaxID() / 6 + 2));
            switch (o._result) {
                case 3:
                    e = "Hiệu ứng tăng tốc", n.onSeeVideoSpeedUp();
                    break;
                case 4:
                    App.UserConfig.addZuanShi(50), e = "K.Cương x50", t = "zuanshi_png", i = function() {
                        App.UserConfig.addZuanShi(50)
                    };
                    break;
                case 5:
                    App.UserConfig.setZhuanPanNum(3, !0), e = "Vé quay x3", t = "choujiangquan_png", i = function() {
                        App.UserConfig.setZhuanPanNum(3, !0)
                    };
                    break;
                case 6:
                    App.UserConfig.addZuanShi(500), e = "K.Cương x500", t = "jinbi_png", i = function() {
                        App.UserConfig.addZuanShi(500)
                    };
                    break;
                case 7:
                    App.UserConfig.addZuanShi(1e4), e = "K.Cương x10000", t = "zuanshi_png", i = function() {
                        App.UserConfig.addZuanShi(1e4)
                    };
                    break;
                case 8:
                    App.UserConfig.addZuanShi(50), e = "K.Cương x50", t = "jinbi_png", i = function() {
                        App.UserConfig.addZuanShi(50)
                    };
                    break;
                case 1:
                    App.UserConfig.addZuanShi(200), e = "K.Cương x200", t = "zuanshi_png", i = function() {
                        App.UserConfig.addZuanShi(200)
                    };
                    break;
                case 2:
                    App.UserConfig.addZuanShi(100), e = "K.Cương x100", t = "jinbi_png", i = function() {
                        App.UserConfig.addZuanShi(100)
                    }
            }
            App.MessageCenter.dispatch(MessageType.GoldChange.toString()), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Chúc mừng nhận " + e), n.zhuanPan()
        })
    }, t.prototype.onSeeVideoSpeedUp = function() {
        var e = this;
        this.isStart || (this.isStart = !0, this.tipbg.visible = !0, egret.Tween.get(this.rocket).to({
            x: 64,
            y: 142
        }, 800).wait(200).to({
            x: 32,
            y: 156
        }, 200).wait(200).to({
            x: 732,
            y: -124
        }, 600).wait(100).call(function() {
            e.tipbg.visible = !1
        }), App.SkillManager.setSpeedUp(!0), App.speedTime = 600, App.MessageCenter.dispatch(MessageType.startCountDown + ""), GameConst.BoxGold = .5 * this.sumcount(App.UserConfig.getLevel(), 1), App.TimerManager.doTimer(1e3, 0, this.countDown, this))
    }, t.prototype.countDown = function() {
        this.timer1 -= 1, this.timer1 <= 0 && (this.timer1 = 600, this.isStart = !1, App.SkillManager.setSpeedUp(!1), GameConst.BoxGold = .5 * this.sumcount(App.UserConfig.getLevel(), 1), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "加速结束"), App.TimerManager.remove(this.countDown, this))
    }, t.prototype.sumcount = function(e, t) {
        var i = Math.round((1 + .5 * t) * Math.pow(e, 3) * (Math.pow(e, 3) / 3 + .5 * Math.pow(e, 2) + e / 6 + 2));
        return i
    }, t.prototype.daojishifunc = function() {
        var e = this;
        if (e._delay += 100, e._delay >= 1e3) {
            var t = App.UserConfig.getZhuanPanNum();
            if (3 > t) {
                var i = Date.now() - App.UserConfig.getZhuanPanTime();
                i = Math.ceil(i / 1e3), e.delaytime++, e.delaytime >= GameConst.ZhuanPanSum && (e.delaytime = 0, App.UserConfig.setZhuanPanNum(1, !0), App.UserConfig.setZhuanPanTime(Date.now()), i = GameConst.ZhuanPanSum), this.time.text = App.DateUtils.getFormatBySecond(GameConst.ZhuanPanSum - i, 1)
            } else this.time.text = App.DateUtils.getFormatBySecond(0, 1);
            e._delay = 0
        }
        this.zhuanPan()
    }, t
}(BaseView);
__reflect(ZhuanPanView.prototype, "ZhuanPanView", ["eui.UIComponent", "egret.DisplayObject"]), window.ZhuanPanView = ZhuanPanView;
var ZhuJieMianView = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.isShowTip = !1, t.nativeSwitch = !0, t.awardCount = 60, t.contDownTime = 300, t.goldShowtime = -200, t.temp = 0, t._isPause = !1, t.timer = 600, t.isStart = !1, t.skinName = "ZhuJieMianViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        this.touchbg.touchEnabled = !1, this.touchbg.touchThrough = !1, this.awardBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.btnClick, this), BtnTool.btnSMin(this.awardBtn), this.arenaBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onArenaClick, this), BtnTool.btnSMin(this.arenaBtn), this.diamond.addEventListener(egret.TouchEvent.TOUCH_END, this.btnClick, this), this.gold.addEventListener(egret.TouchEvent.TOUCH_END, this.btnClick, this), this.shop.addEventListener(egret.TouchEvent.TOUCH_END, this.btnClick, this), BtnTool.btnSMin(this.shop), this.attack.addEventListener(egret.TouchEvent.TOUCH_END, this.btnClick, this), BtnTool.btnSMin(this.attack), this.glodShop.addEventListener(egret.TouchEvent.TOUCH_END, this.btnClick, this), BtnTool.btnSMin(this.glodShop), this.autoMerge.addEventListener(egret.TouchEvent.TOUCH_END, this.btnClick, this), BtnTool.btnSMin(this.autoMerge), this.lifeBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.btnClick, this), BtnTool.btnSMin(this.lifeBtn), this.menu.addEventListener(egret.TouchEvent.TOUCH_END, this.btnClick, this), BtnTool.btnSMin(this.menu), this.addDesktop.addEventListener(egret.TouchEvent.TOUCH_END, this.btnClick, this), this.morebtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onMoreClick, this), this.touchbg.visible = !1, this.touchbg.addEventListener(egret.TouchEvent.TOUCH_END, this.onMoreClick, this), this.qiandaobtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onQianDaoClick, this), this.zhuanpanbtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onZhuanPanClick, this), this.shezhibtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onSheZhiClick, this), this.bankbtn.addEventListener(egret.TouchEvent.TOUCH_END, this.onBankClick, this), BtnTool.btnSMin(this.qiandaobtn, .6), BtnTool.btnSMin(this.zhuanpanbtn, .6), BtnTool.btnSMin(this.bankbtn), this.isOpen = !1, this.leftGro.x = -260, this.morebtn.x = 260, this.morebtn.y = 220, i.power.text = App.UserConfig.getZhanli() + ""
    }, t.prototype.onBankClick = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), App.UIManager.open("YinHangView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1)
    }, t.prototype.onQianDaoClick = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), App.UIManager.open("QianDaoView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1)
    }, t.prototype.onZhuanPanClick = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), App.UIManager.open("ZhuanPanView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1)
    }, t.prototype.onSheZhiClick = function() {}, t.prototype.musicChange = function(e) {
        App.SoundManager.playEffect("dianji_mp3", 1), e.target.selected ? (App.SoundManager.setEffectOn(!1), App.SoundManager.setBgOn(!1), App.UserConfig.setsoundonoff(!1)) : (App.SoundManager.setEffectOn(!0), App.SoundManager.setBgOn(!0), App.UserConfig.setsoundonoff(!0)), this.onoffshow()
    }, t.prototype.onoffshow = function() {
        App.SoundManager.bgIsOn && App.SoundManager.effectIsOn ? (this.music.selected = !1, App.SoundManager.playBg("beijingBGM_mp3")) : this.music.selected = !0
    }, t.prototype.onMoreClick = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), this.isOpen ? (this.leftGro.x = -260, this.morebtn.x = 260, this.morebtn.y = 220, this.touchbg.visible = !1, this.isOpen = !1, App.GameScene.regeditMapTouch()) : (this.leftGro.x = 0, this.morebtn.x = 181, this.morebtn.y = 182, this.touchbg.visible = !0, this.isOpen = !0, App.GameScene.unRegeditMapTouch())
    }, t.prototype.showQianDao = function() {
        var e = this;
        if (App.UserConfig.getDateArr().length >= 7 && !App.DateUtils.isSameDate(Date.now(), App.UserConfig.getDateArr()[6])) {
            var t = [];
            App.UserConfig.setDateArr(t)
        }
        App.UserConfig.getDateArr().length > 0 && App.DateUtils.isSameDate(Date.now(), App.UserConfig.getDateArr()[App.UserConfig.getDateArr().length - 1]) ? !GameScene.isArenaMode && App.UserConfig.getUnLockMaxID() > 2 && e.calLeaveReward() : App.UIManager.open("QianDaoView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1, !1)
    }, t.prototype.sumcount = function(e, t) {
        var i = Math.round((1 + .5 * t) * Math.pow(e, 3) * (Math.pow(e, 3) / 3 + .5 * Math.pow(e, 2) + e / 6 + 2));
        return i
    }, t.prototype.calLeaveReward = function() {
        var e = Math.floor(UserConfig.leaveTime / 1e3);
        if (e > 0) {
            e / 3600 > 20 && (e = 72e3);
            var t = (App.FightSystem.getAttacker(), 0),
                i = this.sumcount(App.UserConfig.getLevel(), 1);
            t += e * i * .1, App.UserConfig.addGold(Math.ceil(t)), App.UserConfig.getUnLockMaxID() > 2 && t > 0 && App.UIManager.open("LiXianView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1, t), App.UserConfig.save()
        }
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && (qgameKit.GameAd || (App.MessageCenter.dispatch(MessageType.AdMsg + ""), App.TimerManager.doTimer(3e4, 0, this.nativeTime, this))), App.SoundManager.playEffect("bgm_mp3", 1), App.SoundManager.playBg("beijingBGM_mp3"), this.leftGro.visible = !0, this.isShowTip = !1, App.MessageCenter.addListener(MessageType.GoldChange.toString(), this.goldChage, this), App.MessageCenter.addListener(MessageType.DuanWei.toString(), this.duanWeiData, this), App.MessageCenter.addListener(MessageType.AutoMerge.toString(), this.onAutoMerge, this), App.MessageCenter.addListener(MessageType.FlushZhanli.toString(), this.onFlushZhanli, this), App.MessageCenter.addListener(MessageType.ShowDuanWeiTiShi.toString(), this.onGuidelines, this), App.MessageCenter.addListener(MessageType.startCountDown + "", this.startCountDown, this), App.MessageCenter.addListener(MessageType.awardCountDown1 + "", this.showAward, this), App.MessageCenter.addListener(MessageType.onLoadNativeAD1 + "", this.showNativeBannerAd, this), App.MessageCenter.addListener(MessageType.SeeVideoEnd + "", this.advEnd, this), this.music.addEventListener(egret.TouchEvent.CHANGE, this.musicChange, this), App.EffectUtils.startScale(i.addDesktop), i.curJijia.width = 1.05 * i.curJijia.width, i.curJijia.height = .8 * i.curJijia.height, i.flushData(), i.onoffshow(), this.speedTime.text = App.DateUtils.getFormatBySecond(App.speedTime, 3), i.autoTime.text = App.DateUtils.getFormatBySecond(this.timer, 3), App.UserConfig.getUnLockMaxID() > 2 && i.showQianDao(), GameScene.isArenaMode ? this.root.visible = !1 : this.root.visible = !0, egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && qgameKit.hasInstallDeskIcon ? i.addDesktop.visible = !1 : i.addDesktop.visible = !0, this.awardImg.width = 82, this.awardImg.height = 88, this.showAward(), App.TimerManager.doTimer(1e3, 0, this.timeAward, this), i.addDesktop.visible = !1, wxTools.InformationAd()
    }, t.prototype.nativeTime = function() {
        1 == qgameKit.zhujiemianTopSwitch && 1 == qgameKit.zhujiemianSwitch && (console.log("zhujiemian2"), qgameKit.getNativeAd1(GameConst.nativeAD))
    }, t.prototype.showNativeBannerAd = function() {
        1 == qgameKit.zhujiemianSwitch && qgameKit.nativeAdItem1 && App.UIManager.open("YuanShengicon", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1, UIscene.ZhuJieMian)
    }, t.prototype.timeAward = function() {
        return this.awardCount -= 1, App.getAward -= 1, App.MessageCenter.dispatch(MessageType.awardCountDown + ""), this.awardTime.text = App.DateUtils.getFormatBySecond(this.awardCount, 3), this.awardCount <= 0 ? (this.awardCount = 0, App.getAward = 0, void(this.awardTime.text = "Nhận")) : void 0
    }, t.prototype.showAward = function() {
        App.isGetGold ? (this.awardContent.text = "X3000", this.awardImg.source = "jinbi_png", this.awardTime.text = App.DateUtils.getFormatBySecond(60, 3), App.getAward = 60, this.awardCount = 60) : App.isGetJijia ? (this.awardContent.text = "X3", this.awardImg.source = "fplant10_png", this.awardTime.text = App.DateUtils.getFormatBySecond(300, 3), App.getAward = 300, this.awardCount = 300) : (this.awardContent.text = "X300", this.awardImg.source = "zuanshi_png", this.awardTime.text = App.DateUtils.getFormatBySecond(600, 3), App.getAward = 600, this.awardCount = 600)
    }, t.prototype.startCountDown = function() {
        this.contDownTime = App.speedTime, App.TimerManager.doTimer(1e3, 0, this.countDown, this)
    }, t.prototype.countDown = function() {
        return this.contDownTime -= 1, this.speedTime.text = App.DateUtils.getFormatBySecond(this.contDownTime, 3), this.contDownTime <= 0 ? (this.contDownTime = 300, this.speedTime.text = App.DateUtils.getFormatBySecond(this.contDownTime, 3), void App.TimerManager.remove(this.countDown, this)) : void 0
    }, t.prototype.duanWeiData = function() {
        var e = this,
            t = App.UserConfig.getLevel();
        e.levelImg.source = "duanwei" + App.GameConfig.getDanGrading()[t - 1].id + "_png", e.levelName.text = App.GameConfig.getDanGrading()[t - 1].levelName, App.UserConfig.restExp(), this.hongdian.visible = !1, this.isShowTip = !1
    }, t.prototype.onFlushZhanli = function() {
        App.TimerManager.remove(this.delayFlush, this), App.TimerManager.doFrame(1, 1, this.delayFlush, this)
    }, t.prototype.delayFlush = function() {
        for (var e = App.FightSystem.getAttacker(), t = 0, i = 0; i < e.length; i++) e[i].getStation() <= 5 && (e[i].isBox() || e[i].isDie() || e[i].isUfo() || (t += App.GameConfig.getroleItem(parseInt(e[i].getAvataID())).zhanli)), App.UserConfig.setZhanli(t);
        this.power.text = App.UserConfig.getZhanli() + ""
    }, t.prototype.flushData = function() {
        var e = this,
            t = App.UserConfig.getLevel();
        e.levelImg.source = "duanwei" + App.GameConfig.getDanGrading()[t - 1].id + "_png", e.levelName.text = App.GameConfig.getDanGrading()[t - 1].levelName, this.goldChage()
    }, t.prototype.goldChage = function() {
        var e = this,
            t = App.UserConfig.getCurLevel(),
            i = App.Temporary.sumcount(t, App.UserConfig.getShopData()[t - 1].jinbicishu),
            n = App.UserConfig.getPrice();
        n >= 300 && (n = 300);
        var o = i - i * n * .001;
        this.glodMoney.text = App.CommonUtils.getYi1(o), this.goldSum.text = App.CommonUtils.getYi1(Math.floor(App.UserConfig.getGold())), this.diamondSum.text = App.UserConfig.getZuanShi() + "", e.power.text = App.UserConfig.getZhanli() + "", e.curJijia.source = "fplant" + t + "_png", App.isGetJijia && (this.awardImg.source = "fplant10_png"), e.showHongdian()
    }, t.prototype.showHongdian = function() {
        var e = App.UserConfig.getLevel();
        if (e >= GameConst.MaxLevel) return void(this.hongdian.visible = !1);
        var t = App.GameConfig.getDanGrading()[e].experience;
        App.UserConfig.getExp() >= t ? (this.hongdian.visible = !0, this.isShowTip || (this.isShowTip = !0, App.UIManager.open("DuanWeiTiShengView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1))) : this.hongdian.visible = !1
    }, t.prototype.onGuidelines = function() {
        this.leftGro.x = -260, this.morebtn.x = 260, this.morebtn.y = 220, this.touchbg.visible = !1, this.isOpen = !1, App.GameScene.unRegeditMapTouch(), App.FightSystem.setPause(!0), App.UserConfig.setGuide(), this.bitmap1 = this.maskGro(this.lifeBtn.x, this.lifeBtn.y, 0, 0, this.lifeBtn.width, this.lifeBtn.height), this.word1 = new eui.Label, this.word1.x = this.lifeBtn.x + 100, this.word1.y = this.lifeBtn.y + 150, this.word1.textColor = 16777215, this.word1.size = 35, this.word1.text = "战力不够，点击提升属性", this.word1.visible = !0, this.shouzhiMap = new egret.Bitmap(RES.getRes("shouzhi_png")), this.shouzhiMap.x = this.lifeBtn.x + 100, this.shouzhiMap.y = this.lifeBtn.y, this.addChild(this.bitmap1), this.addChild(this.word1), this.addChild(this.shouzhiMap), egret.Tween.get(this.shouzhiMap, {
            loop: !0
        }).to({
            x: this.lifeBtn.x
        }, 1e3), App.isShowLifeGuide = !0
    }, t.prototype.maskGro = function(e, t, i, n, o, a) {
        var r = new egret.DisplayObjectContainer,
            s = new egret.Shape,
            p = new egret.Shape;
        if (s.graphics.beginFill(0, .6), s.graphics.drawRect(0, 0, App.stage.stageWidth, App.stage.stageHeight), s.graphics.endFill(), p.graphics.beginFill(16711680, 1), p.graphics.drawRect(e, t, o, a), p.graphics.endFill(), p.anchorOffsetX = .5 * p.width, p.anchorOffsetY = .5 * p.height, r.addChild(s), r.addChild(p), p.blendMode = egret.BlendMode.ERASE, 0 != i) {
            var h = new egret.Shape;
            h.graphics.beginFill(16711680, 1), h.graphics.drawRect(i, n, o, a), h.graphics.endFill(), h.anchorOffsetX = .5 * h.width, h.anchorOffsetY = .5 * h.height, r.addChild(h), h.blendMode = egret.BlendMode.ERASE
        }
        var l = new egret.RenderTexture;
        l.drawToTexture(r);
        var c = new egret.Bitmap(l);
        return c.touchEnabled = !0, c.pixelHitTest = !0, c.width = App.stage.stageWidth, c.height = App.stage.stageHeight, c
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this), !GameScene.isArenaMode && App.UserConfig.getUnLockMaxID() < 3
    }, t.prototype.advEnd = function() {
        App.videoType == VideoRewardType.Gold ? (App.UserConfig.addGold(2e4), this.goldSum.text = App.CommonUtils.getYi1(Math.floor(App.UserConfig.getGold())), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Chúc mừng nhận 20.000 vàng")) : App.videoType == VideoRewardType.Diamond ? (App.UserConfig.addZuanShi(300), this.diamondSum.text = App.UserConfig.getZuanShi() + "", App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Nhận 300 kim cương")) : App.videoType == VideoRewardType.AutoMerge && this.onAutoMerge()
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        App.EffectUtils.stopRotate(i.addDesktop), App.MessageCenter.removeListener(MessageType.GoldChange.toString(), this.goldChage, this), App.MessageCenter.removeListener(MessageType.DuanWei.toString(), this.flushData, this), App.MessageCenter.removeListener(MessageType.AutoMerge.toString(), this.onAutoMerge, this), App.MessageCenter.removeListener(MessageType.FlushZhanli.toString(), this.onFlushZhanli, this), App.MessageCenter.removeListener(MessageType.ShowDuanWeiTiShi.toString(), this.onGuidelines, this), App.MessageCenter.removeListener(MessageType.startCountDown + "", this.startCountDown, this), App.MessageCenter.removeListener(MessageType.awardCountDown1 + "", this.showAward, this), App.MessageCenter.removeListener(MessageType.onLoadNativeAD1 + "", this.showNativeBannerAd, this), App.MessageCenter.removeListener(MessageType.SeeVideoEnd + "", this.advEnd, this), this.music.removeEventListener(egret.TouchEvent.CHANGE, this.musicChange, this), App.TimerManager.remove(this.delayFlush, this), App.TimerManager.remove(this.nativeTime, this), this.countDownMerge2 && App.TimerManager.remove(this.countDownMerge2, this)
    }, t.prototype.onArenaClick = function() {
        App.FightSystem.clear(), App.GameScene.createFightSystem(!GameScene.isArenaMode)
    }, t.prototype.shopFort = function() {
        for (var e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], t = App.FightSystem.getAttacker(), i = 0; i < t.length; i++)
            for (var n = 5; n < e.length; n++) t[i].getStation() != e[n] || t[i].isUfo() || e.splice(n, 1);
        return 5 == e.length ? null : e[5]
    }, t.prototype.delaySave = function() {
        var e = App.FightSystem.getAttacker();
        App.UserConfig.serilizeZhiWu(e)
    }, t.prototype.levelMap = function(e) {
        return e >= 1 && 8 > e ? 1 : e >= 8 && 43 > e ? e - 6 : void 0
    }, t.prototype.btnClick = function(e) {
        var t = this;
        switch (App.SoundManager.playEffect("dianji_mp3", 1), wxTools.closeInformationAd(), e.currentTarget) {
            case this.glodShop:
                var i = (App.UserConfig.getCurMaxLevel(), App.UserConfig.getCurLevel()),
                    n = App.Temporary.sumcount(i, App.UserConfig.getShopData()[i - 1].jinbicishu),
                    o = n - n * App.UserConfig.getPrice() * .001;
                App.UserConfig.getGold() >= o ? (App.FightSystem.searchIdlePosition2() ? (App.FightSystem.addPlantCommand(i, App.FightSystem.searchIdlePosition2(), 1), App.UserConfig.minusgold(o), App.UserConfig.setjinbicishu(i), 1 == App.UserConfig.getShopData()[0].jinbicishu && 1 == App.UserConfig.getUnLockMaxID() && App.MessageCenter.dispatch(MessageType.GuidGouMai.toString()), App.TimerManager.doTimer(1e3, 1, this.delaySave, this)) : App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Thiếu chỗ trống"), App.MessageCenter.dispatch(MessageType.GoldChange.toString())) : App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Thiếu vàng, vui lòng đến cửa hàng mua");
                break;
            case this.attack:
                App.UIManager.open("SpeedUpTip", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1);
                break;
            case this.shop:
                App.UIManager.open("ShopView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1);
                break;
            case this.autoMerge:
                wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.AutoMerge);
                break;
            case this.lifeBtn:
                App.isShowLifeGuide && this.closeGuide(), App.UIManager.open("ShengYaView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1);
                break;
            case this.menu:
                App.UIManager.open("RoleInformationView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1);
                break;
            case this.addDesktop:
                egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && qgameKit.addDesk(function() {
                    App.UserConfig.addZuanShi(500), t.addDesktop.visible = !1, t.diamondSum.text = App.UserConfig.getZuanShi() + "", App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Chúc mừng nhận 500 kim cương")
                });
                break;
            case this.gold:
                wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.Gold);
                break;
            case this.diamond:
                wxTools.showVideoAd(GameConst.WXVideoAd, VideoRewardType.Diamond);
                break;
            case this.awardBtn:
                App.UIManager.open("zaixianjiangliView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1)
        }
    }, t.prototype.closeGuide = function() {
        this.shouzhiMap && egret.Tween.removeTweens(this.shouzhiMap), this.shouzhiMap && this.shouzhiMap.parent && (this.shouzhiMap.parent.removeChild(this.shouzhiMap), this.shouzhiMap = null), this.bitmap1 && this.bitmap1.parent && (this.bitmap1.parent.removeChild(this.bitmap1), this.bitmap1 = null), this.word1 && this.word1.parent && (this.word1.parent.removeChild(this.word1), this.word1 = null)
    }, t.prototype.onAutoMerge = function() {
        return this.isStart ? void App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Đang gộp tự động") : (this.isStart = !0, App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Bắt đầu gộp tự động"), void App.TimerManager.doFrame(1, 0, this.countDownMerge2, this))
    }, t.prototype.removeMerge = function() {
        App.TimerManager.remove(this.countDownMerge2, this)
    }, t.prototype.countDownMerge2 = function(e) {
        this.temp += FightSystem.TimeStep, this.temp >= 1e3 && (this.countDownMerge(), this.temp = 0)
    }, t.prototype.countDownMerge = function() {
        if (!this._isPause) {
            if (this.timer -= 1, this.timer <= 0) return this.timer = 600, this.isStart = !1, this.autoTime.text = App.DateUtils.getFormatBySecond(this.timer, 3), void App.TimerManager.remove(this.countDownMerge2, this);
            this.autoTime.text = App.DateUtils.getFormatBySecond(this.timer, 3);
            var e = App.FightSystem.getAttacker(),
                t = App.FightSystem.getMapScene().getCurSel();
            if (!(e.length < 2))
                for (var i = 0; i < e.length; i++)
                    if (e[i].canMerge() && t != e[i])
                        for (var n = i + 1; n < e.length; n++)
                            if (e[n].canMerge() && t != e[n] && e[i].getAvataID() == e[n].getAvataID()) {
                                App.SoundManager.playEffect("hecheng_mp3", 1);
                                var o = parseInt(e[i].getAvataID()) + 1;
                                return e[i].death(!0), e[n].death(!0), o > App.UserConfig.getCurMaxLevel() && (App.UserConfig.setCurMaxLevel(o), App.UserConfig.setCurLevel(this.levelMap(o)), App.UIManager.open("JieSuoView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1)), App.FightSystem.addPlantCommand(o, e[i].getStation(), 1), void App.UserConfig.serilizeZhiWu(e)
                            }
        }
    }, t.prototype.getGoldPos = function(e) {
        var t = this;
        t.euiGold && t.euiGold.localToGlobal(.5 * t.euiGold.width, .5 * t.euiGold.height, e)
    }, t.prototype.jinbibuy = function(e, t) {}, t
}(BaseView);
__reflect(ZhuJieMianView.prototype, "ZhuJieMianView", ["eui.UIComponent", "egret.DisplayObject"]), window.ZhuJieMianView = ZhuJieMianView;
var ZiDongHeChengView = function(e) {
    function t() {
        var t = e.call(this) || this;
        t.timer = 600, t.isStart = !1;
        var i = t;
        return i.skinName = "ZiDongHeChengViewSkin", t
    }
    return __extends(t, e), t.prototype.awake = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        i.videoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onSeeVideoMerge, i), BtnTool.btnSMin(i.videoBtn), i.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, i.onGoBack, i), BtnTool.btnSMin(i.closeBtn)
    }, t.prototype.start = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        egret.Tween.get(this.pageNode).to({
            scaleX: 1.2,
            scaleY: 1.2
        }, 200).to({
            scaleX: 1,
            scaleY: 1
        }, 200), this.hengfu.visible = !1, this.tipbg.visible = !1, App.GameScene.unRegeditMapTouch(), App.FightSystem.setPause(!0), this.fightui = App.UIManager.getWindow("ZhuJieMianView"), this.fightui._isPause = !0, this.rocket.x = -562, this.rocket.y = 392
    }, t.prototype.onClose = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = this;
        App.GameScene.regeditMapTouch(), App.FightSystem.setPause(!1), this.fightui._isPause = !1, egret.Tween.removeTweens(i.rocket), egret.Tween.removeTweens(i.pageNode)
    }, t.prototype.onSeeVideoMerge = function() {
        var e = this;
        return App.SoundManager.playEffect("dianji_mp3", 1), this.isStart ? void App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "已开启自动合成") : (this.tipbg.visible = !0, egret.Tween.get(this.rocket).to({
            x: 64,
            y: 142
        }, 800).wait(200).to({
            x: 32,
            y: 156
        }, 200).wait(200).to({
            x: 732,
            y: -124
        }, 600).wait(100).call(function() {
            e.tipbg.visible = !1
        }), App.MessageCenter.dispatch(MessageType.AutoMerge.toString()), this.isStart = !0, void App.TimerManager.doTimer(1e3, 0, this.countDownMerge, this))
    }, t.prototype.countDownMerge = function() {
        this.timer -= 1, this.daojishi.text = App.DateUtils.getFormatBySecond(this.timer, 3), this.timer <= 0 && (this.timer = 600, this.isStart = !1, this.daojishi.text = App.DateUtils.getFormatBySecond(this.timer, 3), App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "自动合并结束"), this.fightui.removeMerge(), App.TimerManager.remove(this.countDownMerge, this))
    }, t.prototype.onGoBack = function() {
        App.SoundManager.playEffect("dianji_mp3", 1), egret.Tween.get(this.pageNode).to({
            scaleX: 1.2,
            scaleY: 1.2
        }, 200).to({
            scaleX: .5,
            scaleY: .5
        }, 200).call(function() {
            App.UIManager.close("ZiDongHeChengView", !1)
        })
    }, t
}(BaseView);
__reflect(ZiDongHeChengView.prototype, "ZiDongHeChengView", ["eui.UIComponent", "egret.DisplayObject"]), window.ZiDongHeChengView = ZiDongHeChengView;
var BtnTool = function() {
    function e() {}
    return e.btnSMin = function(e, t) {
        void 0 === t && (t = 1), e.touchEnabled = !0, e.anchorOffsetX = e.width / 2, e.anchorOffsetY = e.height / 2, e.x += e.width / 2, e.y += e.height / 2, e.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function() {
            egret.Tween.pauseTweens(e), e.scaleX = e.scaleY = t + t / 10
        }, this), e.addEventListener(egret.TouchEvent.TOUCH_END, function() {
            egret.Tween.resumeTweens(e), e.scaleX = e.scaleY = t
        }, this), e.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function() {
            egret.Tween.resumeTweens(e), e.scaleX = e.scaleY = t
        }, this)
    }, e
}();
__reflect(BtnTool.prototype, "BtnTool");
var CommonUtils = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.rect1 = new egret.Rectangle, t.rect2 = new egret.Rectangle, t.showWan = function(e, t) {
            e.text = this.getYi(t)
        }, t
    }
    return __extends(t, e), t.prototype.addLableStrokeColor = function(e, t, i) {
        e.strokeColor = t, e.stroke = i
    }, t.prototype.copyDataHandler = function(e) {
        var t;
        if (e instanceof Array) t = [];
        else {
            if (!(e instanceof Object)) return e;
            t = {}
        }
        for (var i = Object.keys(e), n = 0, o = i.length; o > n; n++) {
            var a = i[n];
            t[a] = this.copyDataHandler(e[a])
        }
        return t
    }, t.prototype.lock = function() {
        var e = App.stage;
        e.$children.forEach(function(e) {
            e instanceof egret.DisplayObjectContainer && (e.touchEnabled = e.touchChildren = !1)
        })
    }, t.prototype.unlock = function() {
        var e = App.stage;
        e.$children.forEach(function(e) {
            e instanceof egret.DisplayObjectContainer && (e.touchEnabled = e.touchChildren = !0)
        })
    }, t.prototype.getYi = function(e) {
        var t = "";
        return t = 1e7 > e ? e.toString() : 1e8 > e ? (e / 1e4).toFixed(2).toString() + "万" : 1e12 > e ? (e / 1e8).toFixed(2).toString() + "亿" : (e / 1e12).toFixed(2).toString() + "万亿"
    }, t.prototype.boxBlood = function(e) {
        var t = "";
        return t = e.length < 4 ? e : e.length < 6 ? Math.floor(parseInt(e) / 1e3) + "k" : e.length < 7 ? Math.floor(parseInt(e) / 1e4) + "m" : e.length < 8 ? Math.floor(parseInt(e) / 1e5) + "b" : e.length < 9 ? Math.floor(parseInt(e) / 1e6) + "t" : e.length < 10 ? Math.floor(parseInt(e) / 1e7) + "p" : e.length < 11 ? Math.floor(parseInt(e) / 1e8) + "z" : e.length < 12 ? Math.floor(parseInt(e) / 1e9) + "z" : Math.floor(parseInt(e) / 1e10) + "z"
    }, t.prototype.getYi1 = function(e) {
        var t = "";
        return t = 1e6 > e ? Math.floor(e).toString() : 1e7 > e ? Math.floor(e / 1e3).toString() + "k" : 1e8 > e ? Math.floor(e / 1e4).toString() + "m" : 1e12 > e ? (e / 1e8).toFixed(2).toString() + "z" : (e / 1e12).toFixed(2).toString() + "z"
    }, t.prototype.getYi2 = function(e) {
        var t = "";
        return t = 1e6 > e ? Math.floor(e).toString() : 1e7 > e ? Math.floor(e / 1e3).toString() + "k" : 1e8 > e ? Math.floor(e / 1e4).toString() + "m" : 1e12 > e ? (e / 1e8).toFixed(2).toString() + "Z" : (e / 1e12).toFixed(2).toString() + "Z"
    }, t.prototype.int64ToNumber = function(e) {
        return parseInt(e.toString())
    }, t.prototype.createBitmap = function(e, t, i, n) {
        var o = new egret.Bitmap,
            a = RES.getRes(e);
        return a ? (o.texture = a, i && (o.x = i), n && (o.y = n), t && t.addChild(o), o) : (Log.debug(e + "资源不存在"), null)
    }, t.prototype.setAnchorPos = function(e, t, i) {
        e.anchorOffsetX = t, e.anchorOffsetY = i
    }, t.prototype.showTip = function(e, t, i, n, o) {
        void 0 === n && (n = !0), void 0 === o && (o = 16775927);
        var a = ObjectPool.pop("Tip");
        App.stage.addChild(a), a.showtip(e, t, i, n, o)
    }, t.prototype.hitTest = function(e, t) {
        var i = this;
        return e.getTransformedBounds(App.stage, i.rect1), t.getTransformedBounds(App.stage, i.rect2), i.rect1.intersects(i.rect2)
    }, t.prototype.sumcount = function(e, t) {
        var i = Math.round((1 + .5 * t) * Math.pow(e, 3) * (Math.pow(e, 3) / 3 + .5 * Math.pow(e, 2) + e / 6 + 2));
        return i
    }, t
}(SingletonClass);
__reflect(CommonUtils.prototype, "CommonUtils");
var DateUtils = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.prototype.getFormatBySecond = function(e, t) {
        void 0 === t && (t = 1);
        var i = "";
        switch (t) {
            case 1:
                i = this.getFormatBySecond1(e);
                break;
            case 2:
                i = this.getFormatBySecond2(e);
                break;
            case 3:
                i = this.getFormatBySecond3(e);
                break;
            case 4:
                i = this.getFormatBySecond4(e);
                break;
            case 5:
                i = this.getFormatBySecond5(e)
        }
        return i
    }, t.prototype.getFormatBySecond1 = function(e) {
        void 0 === e && (e = 0);
        var t, i = Math.floor(e / 3600);
        t = 0 == i ? "00" : 10 > i ? "0" + i : "" + i;
        var n, o, a = Math.floor((e - 3600 * i) / 60),
            r = Math.floor((e - 3600 * i) % 60);
        return n = 0 == a ? "00" : 10 > a ? "0" + a : "" + a, o = 0 == r ? "00" : 10 > r ? "0" + r : "" + r, t + ":" + n + ":" + o
    }, t.prototype.getFormatBySecond3 = function(e) {
        void 0 === e && (e = 0);
        var t, i, n = Math.floor(e / 3600),
            o = Math.floor((e - 3600 * n) / 60),
            a = Math.floor((e - 3600 * n) % 60);
        return t = 0 == o ? "00" : 10 > o ? "0" + o : "" + o, i = 0 == a ? "00" : 10 > a ? "0" + a : "" + a, t + ":" + i
    }, t.prototype.getFormatBySecond2 = function(e) {
        var t = new Date(e),
            i = t.getFullYear(),
            n = t.getMonth() + 1,
            o = t.getDate(),
            a = t.getHours(),
            r = t.getMinutes(),
            s = t.getSeconds();
        return i + "-" + n + "-" + o + " " + a + ":" + r + ":" + s
    }, t.prototype.getFormatBySecond4 = function(e) {
        var t = Math.floor(e / 3600);
        return t > 0 ? t > 24 ? Math.floor(t / 24) + "天前" : t + "小时前" : Math.floor(e / 60) + "分钟前"
    }, t.prototype.getFormatBySecond5 = function(e) {
        var t = 86400,
            i = 3600,
            n = 60,
            o = Math.floor(e / t),
            a = Math.floor(e % t / i),
            r = Math.floor((e - a * i) / n),
            s = Math.floor((e - a * i) % n),
            p = "",
            h = "",
            l = "",
            c = "";
        return e > 0 ? 0 == o ? (p = "", 0 == a ? (h = "", 0 == r ? (l = "", c = 0 == s ? "" : 10 > s ? "0" + s + "秒" : "" + s + "秒") : (l = "" + r + "分", c = 0 == s ? "" : 10 > s ? "0" + s + "秒" : "" + s + "秒", l + c)) : (h = a + "小时", 0 == r ? (l = "", c = 0 == s ? "" : 10 > s ? "0" + s + "秒" : "" + s + "秒") : (l = 10 > r ? "0" + r + "分" : "" + r + "分", h + l))) : (p = o + "天", h = 0 == a ? "" : 10 > a ? "0" + a + "小时" : "" + a + "小时", p + h) : ""
    }, t.prototype.getDay = function(e) {
        var t = new Date(e);
        return t.getDay()
    }, t.prototype.isSameDate = function(e, t) {
        var i = new Date(e),
            n = new Date(t);
        return i.getFullYear() == n.getFullYear() && i.getMonth() == n.getMonth() && i.getDate() == n.getDate()
    }, t
}(SingletonClass);
__reflect(DateUtils.prototype, "DateUtils");
var DebugUtils = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._threshold = 3, t._startTimes = {}, t
    }
    return __extends(t, e), t.prototype.isOpen = function(e) {
        this._isOpen = e
    }, Object.defineProperty(t.prototype, "isDebug", {
        get: function() {
            return this._isOpen
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.start = function(e) {
        this._isOpen && (this._startTimes[e] = egret.getTimer())
    }, t.prototype.stop = function(e) {
        if (!this._isOpen) return 0;
        if (!this._startTimes[e]) return 0;
        var t = egret.getTimer() - this._startTimes[e];
        return t > this._threshold && Log.debug(e + ": " + t), t
    }, t.prototype.setThreshold = function(e) {
        this._threshold = e
    }, t
}(SingletonClass);
__reflect(DebugUtils.prototype, "DebugUtils");
var EffectUtils = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.vertexSrc = "\n            attribute vec2 aVertexPosition;\n            attribute vec2 aTextureCoord;\n            attribute vec2 aColor;\n\n            uniform vec2 projectionVector;\n\n            varying vec2 vTextureCoord;\n            varying vec4 vColor;\n\n            const vec2 center = vec2(-1.0, 1.0);\n\n            void main(void) {\n                gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n                vTextureCoord = aTextureCoord;\n                vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n            }\n        ", t.fragmentSrc1 = "\n            precision lowp float;\n            varying vec2 vTextureCoord;\n            varying vec4 vColor;\n            uniform sampler2D uSampler;\n\n            uniform float angle;\n            uniform float scale;\n\n            void main() {\n                vec2 uv = vTextureCoord.xy;\n                vec2 texCoord = uv;\n                float tx,ty,cosVal;\n                cosVal = cos(angle);\n                if(uv.x <= 0.5) {\n                    tx = 0.5 - (0.5-uv.x)/cosVal;\n                    if(tx < 0.0) {\n                        gl_FragColor = vec4(0,0,0,0);\n                    } else {\n                        if(cosVal < 0.0) {\n                            texCoord.x = 1.0 - tx;\n                        } else {\n                            texCoord.x = tx;\n                        }\n                        ty = 0.5 - tx;\n                        ty = 2.0*ty*scale;\n                        texCoord.y = (ty+uv.y)/(1.0+(2.0*ty));\n                        gl_FragColor = texture2D(uSampler, texCoord);\n                    }\n                } else {\n                    tx =(uv.x-0.5)/cosVal;\n                    if(tx > 0.5) {\n                        gl_FragColor = vec4(0,0,0,0);\n                    } else {\n                        if(cosVal < 0.0) {\n                            texCoord.x = 0.5-tx;\n                        } else {\n                            texCoord.x = 0.5+tx;\n                        }\n                        ty = tx;\n                        ty = 2.0 * ty *scale;\n                        texCoord.y = (uv.y - ty)/(1.0 -2.0*ty);\n                        gl_FragColor = texture2D(uSampler, texCoord);\n                    }\n                }\n            }\n        ", t.fragmentSrc2 = "\n            precision lowp float;\n            varying vec2 vTextureCoord;\n            varying vec4 vColor;\n            uniform sampler2D uSampler;\n\n            uniform float angle;\n            uniform float scale;\n\n            void main() {\n                vec2 uv = vTextureCoord.xy;\n                vec2 texCoord = uv;\n                float tx,ty,cosVal;\n                cosVal = cos(angle);\n                if(uv.y <= 0.5) {\n                    ty = 0.5 - (0.5-uv.y)/cosVal;\n                    if(ty < 0.0) {\n                        gl_FragColor = vec4(0,0,0,0);\n                    } else {\n                        if(cosVal < 0.0) {\n                            texCoord.y = 1.0 - ty;\n                        } else {\n                            texCoord.y = ty;\n                        }\n                        tx = 0.5 - ty;\n                        tx = 2.0*tx*scale;\n                        texCoord.x = (tx+uv.x)/(1.0+(2.0*tx));\n                        gl_FragColor = texture2D(uSampler, texCoord);\n                    }\n                } else {\n                    ty =(uv.y-0.5)/cosVal;\n                    if(ty > 0.5) {\n                        gl_FragColor = vec4(0,0,0,0);\n                    } else {\n                        if(cosVal < 0.0) {\n                            texCoord.y = 0.5-ty;\n                        } else {\n                            texCoord.y = 0.5+ty;\n                        }\n                        tx = ty;\n                        tx = 2.0 * tx *scale;\n                        texCoord.x = (uv.x - tx)/(1.0 -2.0*tx);\n                        gl_FragColor = texture2D(uSampler, texCoord);\n                    }\n                }\n            }\n        ", t.fragmentSrc4 = "\n    precision mediump float;\n    //通过传入的时间值控制燃烧的程度\n    uniform float u_time;\n    uniform sampler2D uSampler;\n    varying vec2 vTextureCoord;\n\n    //取随机值\n    float random (in vec2 st) {\n      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123); \n    }\n\n    //噪声\n    float noise (in vec2 st) {\n      vec2 i = floor(st);\n      vec2 f = fract(st);\n      float a = random(i);\n      float b = random(i + vec2(1.0, 0.0));\n      float c = random(i + vec2(0.0, 1.0));\n      float d = random(i + vec2(1.0, 1.0));\n      vec2 u = smoothstep(0.,1.,f);\n      //vec2 u = sin(f * 3.1415926 / 2.);\n      //return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;}\n      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);\n    }\n\n    void main() {\n\n     vec4 tmpcolor=texture2D(uSampler, vTextureCoord);\n     \n      if(tmpcolor.a<0.01){\n         discard;\n         return;\n      }\n     //取噪声的值\n     vec2 pos = vec2(vTextureCoord * 250.0);\n     float n = noise(pos);\n     //设置火焰燃烧的走势 \n     vec2 ct = vec2(0.5, 0.5);\n      //直接输出vec4(d, d, d, 1.)\n     float d = 1. - distance (vTextureCoord, ct) / sqrt(0.5);\n     //设置火焰区域的紧密程度\n     float s = 1. - smoothstep(d - 1.0, d + 1.0, u_time);\n\n     //直接输出vec4(s, s, s, 1.)\n     s = mix(mix(n, d, 0.5), (s - 0.5) * 4., 0.5);\n     //燃烧后的颜色\n     float f1 = step(0.3, s);\n     vec4 fv1 = f1 * vec4(0., 0., 0., 1.);\n     //将要燃烧的区域\n     float f2 = smoothstep(-0.2, 0.3, s) * step(s, 0.3);\n     vec4 fv2 = f2 * vec4(-0.5, -1., -1., 0.);\n     //燃烧的火焰的区域\n     float f3 = step(s, 0.31) * step(0.3, s);\n     vec4 fv3 = f3 * vec4(1.0, 1.0, 0., 1.);\n     //未燃烧的区域\n     float f4 = step(s, 0.3);\n     vec4 fv4 = f4 * tmpcolor;\n     gl_FragColor = fv4 + fv2 + fv3 + fv1;\n     gl_FragColor.a=fv4.a;\n    }\n    ", t.fragmentSrc5 = "\n            precision lowp float;\n            varying vec2 vTextureCoord;\n            varying vec4 vColor;\n            uniform sampler2D uSampler;\n            uniform sampler2D DissolveTex;//噪声纹理\n\n            uniform float u_time;//脚本控制\n        \n            void main() {\n                vec2 uv = vTextureCoord.xy;\n                vec2 texCoord = uv;\n\n                vec4 col =texture2D(uSampler, texCoord);\n                float dissolveValue =texture2D(DissolveTex, texCoord).r;//噪声值,单通道图就可以\n               float clipValue = dissolveValue - u_time;\n               if(clipValue<0.0){\n                   discard;\n                   return;\n               }\n\n               vec4 colo1=vec4(0.6,0.0,0.0,1.0);\n               vec4 colo2=vec4(0.9,0.8,0.0,0.0);\n                //溶解阀值0.1\n                if (clipValue>0.0&&clipValue < 0.08)\n                {\n                    //溶解带渐变\n\n                    float rate=clipValue/0.08;\n\n                    // float r =smoothstep(colo1.r, colo2.r, rate);\n                    // float g =smoothstep(colo1.g, colo2.g, rate);\n                    // float b =smoothstep(colo1.b, colo2.b, rate);\n                    // float a =smoothstep(colo1.a, colo2.a, rate);\n\n                    float r =rate*colo2.r+(1.0-rate)*colo1.r;\n                    float g =rate*colo2.g+(1.0-rate)*colo1.g;\n                    float b =rate*colo2.b+(1.0-rate)*colo1.b;\n                    float a =rate*colo2.a+(1.0-rate)*colo1.a;\n                    col.r = r;\n                    col.g = g;\n                    col.b = b;\n                    col.a = 1.0;\n                }\n\n                 gl_FragColor=col;\n            }\n        ", t.raodong = "\n    precision lowp float;\n    varying vec2 vTextureCoord;\n    varying vec4 vColor;\n    uniform sampler2D uSampler;\n \n    uniform float u_time;//脚本控制\n    void main()\n    {  \n       vec4 srcColor=vec4(1.0,0.4,0.4,1.0);\n       vec4 desColor=vec4(0.2,1.0,0.0,1.0);\n\n       vec4 color = texture2D(uSampler, vTextureCoord);\n       gl_FragColor.r=(1.0-vTextureCoord.y)*(srcColor.r*(1.0-u_time)+desColor.r*u_time);\n       gl_FragColor.g=(1.0-vTextureCoord.y)*(srcColor.g*(1.0-u_time)+desColor.g*u_time);\n       gl_FragColor.b=(1.0-vTextureCoord.y)*(srcColor.b*(1.0-u_time)+desColor.b*u_time);\n       gl_FragColor.a=1.0-vTextureCoord.y;\n\n       //gl_FragColor.r= (gl_FragColor.r+color.r)*0.5;\n       //gl_FragColor.g= (gl_FragColor.g+color.g)*0.5;\n       //gl_FragColor.b= (gl_FragColor.b+color.b)*0.5;\n    \n}", t.shadow = "\n    precision lowp float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextureCoord;\n    void main()\n    {  \n       vec4 tmpcolor=texture2D(uSampler, vTextureCoord);\n     \n      if(tmpcolor.a<0.01){\n         discard;\n         return;\n      }\n       gl_FragColor.r=0.0;\n       gl_FragColor.g=0.0;\n       gl_FragColor.b=0.0;\n       gl_FragColor.a=0.5;\n \n}", t
    }
    return __extends(t, e), t.prototype.macIconShake = function(e, t) {
        for (var i = [
                [20, 300],
                [15, 300],
                [10, 300],
                [5, 300]
            ], n = "egret.Tween.get(" + e + ")", o = 0, a = i.length; a > o; o++) n += ".to({'y':" + t + "-" + i[o][0] + "}, " + i[o][1] + ")", n += ".to({'y':" + t + "}, " + i[o][1] + ")";
        return n += ";"
    }, t.prototype.startFlicker = function(e, t) {
        e.alpha = 1, egret.Tween.get(e).to({
            alpha: 0
        }, t).to({
            alpha: 1
        }, t).call(this.startFlicker, this, [e, t])
    }, t.prototype.stopFlicker = function(e) {
        egret.Tween.removeTweens(e)
    }, t.prototype.startScale = function(e) {
        e.anchorOffsetX = .5 * e.width, e.anchorOffsetY = .5 * e.height, egret.Tween.get(e, {
            loop: !0
        }).to({
            scaleX: 1.1,
            scaleY: 1.1
        }, 300, egret.Ease.cubicInOut).to({
            scaleX: 1,
            scaleY: 1
        }, 500, egret.Ease.cubicInOut).call(function() {})
    }, t.prototype.startShake = function(e, t, i) {
        void 0 === i && (i = 20), e.shakeStartY || (e.shakeStartY = e.y, e.shakeEndY = e.y + i);
        var n = e.shakeStartY,
            o = e.shakeEndY;
        egret.Tween.get(e, {
            loop: !0
        }).to({
            y: o
        }, t).to({
            y: n
        }, t).call(this.startShake, this, [e, t])
    }, t.prototype.stopShake = function(e) {
        delete e.shakeStartY, delete e.shakeEndY, egret.Tween.removeTweens(e)
    }, t.prototype.startRotation = function(e) {
        e.anchorOffsetX = .5 * e.width, e.anchorOffsetY = .5 * e.height, egret.Tween.get(e, {
            loop: !0
        }).to({
            rotation: 360
        }, 5e3)
    }, t.prototype.startRotate = function(e, t, i, n, o) {
        egret.Tween.get(e, {
            loop: !0
        }).to({
            rotation: i
        }, t).to({
            rotation: 0
        }, .5 * t).to({
            rotation: -i
        }, t).to({
            rotation: 0
        }, .5 * t).to({
            rotation: i
        }, t).to({
            rotation: 0
        }, .5 * t).to({
            rotation: -i
        }, t).to({
            rotation: 0
        }, .5 * t).wait(n).call(function() {
            o && o()
        })
    }, t.prototype.stopRotate = function(e) {
        egret.Tween.removeTweens(e)
    }, t.prototype.setDisplayObjectBlack = function(e) {
        var t = [1, 0, 0, 0, -255, 0, 1, 0, 0, -255, 0, 0, 1, 0, -255, 0, 0, 0, 1, 0],
            i = new egret.ColorMatrixFilter(t);
        e.filters = [i]
    }, t.prototype.setDisplayObjectNormal = function(e) {
        var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
            i = new egret.ColorMatrixFilter(t);
        e.filters = [i]
    }, t.prototype.setDisplayObjectGray = function(e) {
        var t = [1, 0, 0, 0, -100, 0, 1, 0, 0, -100, 0, 0, 1, 0, -100, 0, 0, 0, 1, 0],
            i = new egret.ColorMatrixFilter(t);
        e.filters = [i]
    }, t.prototype.setDisplayObjectLight = function(e) {
        var t = [1, 0, 0, 0, 30, 0, 1, 0, 0, 30, 0, 0, 1, 0, 30, 0, 0, 0, 1, 0],
            i = new egret.ColorMatrixFilter(t);
        e.filters = [i]
    }, t.prototype.setDisplayColorRed = function(e) {
        var t = [1, 0, 0, 0, 180, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
            i = new egret.ColorMatrixFilter(t);
        e.filters = [i]
    }, t.prototype.setHitColorRed = function(e) {
        var t = [1, 0, 0, 0, 255, 0, 1, 0, 0, 50, 0, 0, 1, 0, 50, 0, 0, 0, 1, 0],
            i = new egret.ColorMatrixFilter(t);
        e.filters = [i]
    }, t.prototype.setImageColor = function(e, t) {
        var i = function(e) {
                var t = {
                    r: -1,
                    g: -1,
                    b: -1
                };
                return t.b = e % 256, t.g = Math.floor(e / 256) % 256, t.r = Math.floor(e / 256 / 256), t
            },
            n = i(t),
            o = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        o[0] = n.r / 255, o[6] = n.g / 255, o[12] = n.b / 255;
        var a = new egret.ColorMatrixFilter(o);
        e.filters = [a]
    }, t.prototype.setDisplayColorGreen = function(e) {
        var t = [1, 0, 0, 0, 42, 0, 1, 0, 0, 248, 0, 0, 1, 0, 254, 0, 0, 0, 1, 0],
            i = new egret.ColorMatrixFilter(t);
        e.filters = [i]
    }, t.prototype.setDisplayColorWhite = function(e) {
        var t = [1, 0, 0, 0, 255, 0, 1, 0, 0, 255, 0, 0, 1, 0, 255, 0, 0, 0, 1, 0],
            i = new egret.ColorMatrixFilter(t);
        e.filters = [i]
    }, t.prototype.setGlowEffect = function(e) {
        var t = 52479,
            i = .8,
            n = 35,
            o = 35,
            a = 2,
            r = 1,
            s = !1,
            p = !1,
            h = new egret.GlowFilter(t, i, n, o, a, r, s, p);
        e.filters = [h]
    }, t.prototype.setWingEffect = function(e) {
        var t = 16711935,
            i = .8,
            n = 35,
            o = 35,
            a = 2,
            r = 1,
            s = !1,
            p = !1,
            h = new egret.GlowFilter(t, i, n, o, a, r, s, p);
        e.filters = [h]
    }, t.prototype.setGlowTagEffect = function(e) {
        var t = 52479,
            i = 1,
            n = 120,
            o = 120,
            a = 2,
            r = 3,
            s = !1,
            p = !1,
            h = new egret.GlowFilter(t, i, n, o, a, r, s, p);
        e.filters = [h]
    }, t.prototype.getHFiler = function() {
        var e = this,
            t = new egret.CustomFilter(e.vertexSrc, e.fragmentSrc1, {
                angle: 180 * Math.PI / 180,
                scale: 0
            });
        return t
    }, t.prototype.getVFiler = function() {
        var e = this,
            t = new egret.CustomFilter(e.vertexSrc, e.fragmentSrc2, {
                angle: 180 * Math.PI / 180,
                scale: 0
            });
        return t
    }, t.prototype.getFirefilter = function() {
        var e = this,
            t = new egret.CustomFilter(e.vertexSrc, e.fragmentSrc4, {
                u_time: .87
            });
        return t
    }, t.prototype.getdissolvefilter = function() {
        var e = this,
            t = new egret.CustomFilter(e.vertexSrc, e.fragmentSrc5, {
                u_time: 0
            });
        return t
    }, t.prototype.getRaoDongfilter = function() {
        var e = this,
            t = new egret.CustomFilter(e.vertexSrc, e.raodong, {
                u_time: 0
            });
        return t
    }, t.prototype.getshadowfilter = function(e) {
        var t = this,
            i = new egret.CustomFilter(t.vertexSrc, t.shadow, {
                u_time: 0
            });
        e.filters = [i]
    }, t
}(SingletonClass);
__reflect(EffectUtils.prototype, "EffectUtils");
var Log = function() {
    function e() {}
    return e.debug = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (App.DebugUtils.isDebug) {
            var i = "[Debug]" + e.shift();
            egret.log.apply(egret, [i].concat(e))
        }
    }, e.info = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = "[Info]" + e.shift();
        egret.log.apply(egret, [i].concat(e))
    }, e.warn = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = "[Warn]" + e.shift();
        egret.warn.apply(egret, [i].concat(e))
    }, e.error = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var i = "[Error]" + e.shift();
        egret.error.apply(egret, [i].concat(e))
    }, e
}();
__reflect(Log.prototype, "Log");
var MathUtils = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.prototype.getAngle = function(e) {
        return 180 * e / Math.PI
    }, t.prototype.getRadian = function(e) {
        return e / 180 * Math.PI
    }, t.prototype.getRadian2 = function(e, t, i, n) {
        var o = i - e,
            a = n - t;
        return Math.atan2(a, o)
    }, t.prototype.getDistance = function(e, t, i, n) {
        var o = i - e,
            a = n - t,
            r = o * o + a * a;
        return Math.sqrt(r)
    }, t
}(SingletonClass);
__reflect(MathUtils.prototype, "MathUtils");
var MD5 = function() {
    function e() {
        this.hexcase = 0, this.b64pad = ""
    }
    return e.prototype.hex_md5 = function(e) {
        return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(e)))
    }, e.prototype.b64_md5 = function(e) {
        return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(e)))
    }, e.prototype.any_md5 = function(e, t) {
        return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(e)), t)
    }, e.prototype.hex_hmac_md5 = function(e, t) {
        return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)))
    }, e.prototype.b64_hmac_md5 = function(e, t) {
        return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)))
    }, e.prototype.any_hmac_md5 = function(e, t, i) {
        return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)), i)
    }, e.prototype.md5_vm_test = function() {
        return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase()
    }, e.prototype.rstr_md5 = function(e) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length))
    }, e.prototype.rstr_hmac_md5 = function(e, t) {
        var i = this.rstr2binl(e);
        i.length > 16 && (i = this.binl_md5(i, 8 * e.length));
        for (var n = Array(16), o = Array(16), a = 0; 16 > a; a++) n[a] = 909522486 ^ i[a], o[a] = 1549556828 ^ i[a];
        var r = this.binl_md5(n.concat(this.rstr2binl(t)), 512 + 8 * t.length);
        return this.binl2rstr(this.binl_md5(o.concat(r), 640))
    }, e.prototype.rstr2hex = function(e) {
        try {
            this.hexcase
        } catch (t) {
            this.hexcase = 0
        }
        for (var i, n = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", o = "", a = 0; a < e.length; a++) i = e.charCodeAt(a), o += n.charAt(i >>> 4 & 15) + n.charAt(15 & i);
        return o
    }, e.prototype.rstr2b64 = function(e) {
        try {
            this.b64pad
        } catch (t) {
            this.b64pad = ""
        }
        for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "", o = e.length, a = 0; o > a; a += 3)
            for (var r = e.charCodeAt(a) << 16 | (o > a + 1 ? e.charCodeAt(a + 1) << 8 : 0) | (o > a + 2 ? e.charCodeAt(a + 2) : 0), s = 0; 4 > s; s++) n += 8 * a + 6 * s > 8 * e.length ? this.b64pad : i.charAt(r >>> 6 * (3 - s) & 63);
        return n
    }, e.prototype.rstr2any = function(e, t) {
        var i, n, o, a, r, s = t.length,
            p = Array(Math.ceil(e.length / 2));
        for (i = 0; i < p.length; i++) p[i] = e.charCodeAt(2 * i) << 8 | e.charCodeAt(2 * i + 1);
        var h = Math.ceil(8 * e.length / (Math.log(t.length) / Math.log(2))),
            l = Array(h);
        for (n = 0; h > n; n++) {
            for (r = Array(), a = 0, i = 0; i < p.length; i++) a = (a << 16) + p[i], o = Math.floor(a / s), a -= o * s, (r.length > 0 || o > 0) && (r[r.length] = o);
            l[n] = a, p = r
        }
        var c = "";
        for (i = l.length - 1; i >= 0; i--) c += t.charAt(l[i]);
        return c
    }, e.prototype.str2rstr_utf8 = function(e) {
        for (var t, i, n = "", o = -1; ++o < e.length;) t = e.charCodeAt(o), i = o + 1 < e.length ? e.charCodeAt(o + 1) : 0, t >= 55296 && 56319 >= t && i >= 56320 && 57343 >= i && (t = 65536 + ((1023 & t) << 10) + (1023 & i), o++), 127 >= t ? n += String.fromCharCode(t) : 2047 >= t ? n += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : 65535 >= t ? n += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : 2097151 >= t && (n += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
        return n
    }, e.prototype.str2rstr_utf16le = function(e) {
        for (var t = "", i = 0; i < e.length; i++) t += String.fromCharCode(255 & e.charCodeAt(i), e.charCodeAt(i) >>> 8 & 255);
        return t
    }, e.prototype.str2rstr_utf16be = function(e) {
        for (var t = "", i = 0; i < e.length; i++) t += String.fromCharCode(e.charCodeAt(i) >>> 8 & 255, 255 & e.charCodeAt(i));
        return t
    }, e.prototype.rstr2binl = function(e) {
        for (var t = Array(e.length >> 2), i = 0; i < t.length; i++) t[i] = 0;
        for (var i = 0; i < 8 * e.length; i += 8) t[i >> 5] |= (255 & e.charCodeAt(i / 8)) << i % 32;
        return t
    }, e.prototype.binl2rstr = function(e) {
        for (var t = "", i = 0; i < 32 * e.length; i += 8) t += String.fromCharCode(e[i >> 5] >>> i % 32 & 255);
        return t
    }, e.prototype.binl_md5 = function(e, t) {
        e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
        for (var i = 1732584193, n = -271733879, o = -1732584194, a = 271733878, r = 0; r < e.length; r += 16) {
            var s = i,
                p = n,
                h = o,
                l = a;
            i = this.md5_ff(i, n, o, a, e[r + 0], 7, -680876936), a = this.md5_ff(a, i, n, o, e[r + 1], 12, -389564586), o = this.md5_ff(o, a, i, n, e[r + 2], 17, 606105819), n = this.md5_ff(n, o, a, i, e[r + 3], 22, -1044525330), i = this.md5_ff(i, n, o, a, e[r + 4], 7, -176418897), a = this.md5_ff(a, i, n, o, e[r + 5], 12, 1200080426), o = this.md5_ff(o, a, i, n, e[r + 6], 17, -1473231341), n = this.md5_ff(n, o, a, i, e[r + 7], 22, -45705983), i = this.md5_ff(i, n, o, a, e[r + 8], 7, 1770035416), a = this.md5_ff(a, i, n, o, e[r + 9], 12, -1958414417), o = this.md5_ff(o, a, i, n, e[r + 10], 17, -42063), n = this.md5_ff(n, o, a, i, e[r + 11], 22, -1990404162), i = this.md5_ff(i, n, o, a, e[r + 12], 7, 1804603682), a = this.md5_ff(a, i, n, o, e[r + 13], 12, -40341101), o = this.md5_ff(o, a, i, n, e[r + 14], 17, -1502002290), n = this.md5_ff(n, o, a, i, e[r + 15], 22, 1236535329), i = this.md5_gg(i, n, o, a, e[r + 1], 5, -165796510), a = this.md5_gg(a, i, n, o, e[r + 6], 9, -1069501632), o = this.md5_gg(o, a, i, n, e[r + 11], 14, 643717713), n = this.md5_gg(n, o, a, i, e[r + 0], 20, -373897302), i = this.md5_gg(i, n, o, a, e[r + 5], 5, -701558691), a = this.md5_gg(a, i, n, o, e[r + 10], 9, 38016083), o = this.md5_gg(o, a, i, n, e[r + 15], 14, -660478335), n = this.md5_gg(n, o, a, i, e[r + 4], 20, -405537848), i = this.md5_gg(i, n, o, a, e[r + 9], 5, 568446438), a = this.md5_gg(a, i, n, o, e[r + 14], 9, -1019803690), o = this.md5_gg(o, a, i, n, e[r + 3], 14, -187363961), n = this.md5_gg(n, o, a, i, e[r + 8], 20, 1163531501), i = this.md5_gg(i, n, o, a, e[r + 13], 5, -1444681467), a = this.md5_gg(a, i, n, o, e[r + 2], 9, -51403784), o = this.md5_gg(o, a, i, n, e[r + 7], 14, 1735328473), n = this.md5_gg(n, o, a, i, e[r + 12], 20, -1926607734), i = this.md5_hh(i, n, o, a, e[r + 5], 4, -378558), a = this.md5_hh(a, i, n, o, e[r + 8], 11, -2022574463), o = this.md5_hh(o, a, i, n, e[r + 11], 16, 1839030562), n = this.md5_hh(n, o, a, i, e[r + 14], 23, -35309556), i = this.md5_hh(i, n, o, a, e[r + 1], 4, -1530992060), a = this.md5_hh(a, i, n, o, e[r + 4], 11, 1272893353), o = this.md5_hh(o, a, i, n, e[r + 7], 16, -155497632), n = this.md5_hh(n, o, a, i, e[r + 10], 23, -1094730640), i = this.md5_hh(i, n, o, a, e[r + 13], 4, 681279174), a = this.md5_hh(a, i, n, o, e[r + 0], 11, -358537222), o = this.md5_hh(o, a, i, n, e[r + 3], 16, -722521979), n = this.md5_hh(n, o, a, i, e[r + 6], 23, 76029189), i = this.md5_hh(i, n, o, a, e[r + 9], 4, -640364487), a = this.md5_hh(a, i, n, o, e[r + 12], 11, -421815835), o = this.md5_hh(o, a, i, n, e[r + 15], 16, 530742520), n = this.md5_hh(n, o, a, i, e[r + 2], 23, -995338651), i = this.md5_ii(i, n, o, a, e[r + 0], 6, -198630844), a = this.md5_ii(a, i, n, o, e[r + 7], 10, 1126891415), o = this.md5_ii(o, a, i, n, e[r + 14], 15, -1416354905), n = this.md5_ii(n, o, a, i, e[r + 5], 21, -57434055), i = this.md5_ii(i, n, o, a, e[r + 12], 6, 1700485571), a = this.md5_ii(a, i, n, o, e[r + 3], 10, -1894986606), o = this.md5_ii(o, a, i, n, e[r + 10], 15, -1051523), n = this.md5_ii(n, o, a, i, e[r + 1], 21, -2054922799), i = this.md5_ii(i, n, o, a, e[r + 8], 6, 1873313359), a = this.md5_ii(a, i, n, o, e[r + 15], 10, -30611744), o = this.md5_ii(o, a, i, n, e[r + 6], 15, -1560198380), n = this.md5_ii(n, o, a, i, e[r + 13], 21, 1309151649), i = this.md5_ii(i, n, o, a, e[r + 4], 6, -145523070), a = this.md5_ii(a, i, n, o, e[r + 11], 10, -1120210379), o = this.md5_ii(o, a, i, n, e[r + 2], 15, 718787259), n = this.md5_ii(n, o, a, i, e[r + 9], 21, -343485551), i = this.safe_add(i, s), n = this.safe_add(n, p), o = this.safe_add(o, h), a = this.safe_add(a, l)
        }
        return [i, n, o, a]
    }, e.prototype.md5_cmn = function(e, t, i, n, o, a) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(n, a)), o), i)
    }, e.prototype.md5_ff = function(e, t, i, n, o, a, r) {
        return this.md5_cmn(t & i | ~t & n, e, t, o, a, r)
    }, e.prototype.md5_gg = function(e, t, i, n, o, a, r) {
        return this.md5_cmn(t & n | i & ~n, e, t, o, a, r)
    }, e.prototype.md5_hh = function(e, t, i, n, o, a, r) {
        return this.md5_cmn(t ^ i ^ n, e, t, o, a, r)
    }, e.prototype.md5_ii = function(e, t, i, n, o, a, r) {
        return this.md5_cmn(i ^ (t | ~n), e, t, o, a, r)
    }, e.prototype.safe_add = function(e, t) {
        var i = (65535 & e) + (65535 & t),
            n = (e >> 16) + (t >> 16) + (i >> 16);
        return n << 16 | 65535 & i
    }, e.prototype.bit_rol = function(e, t) {
        return e << t | e >>> 32 - t
    }, e.createNonceStr = function(e) {
        e || (e = 16);
        for (var t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", i = "", n = 0; e > n; n++) i += t[Math.floor(62 * Math.random())];
        return i
    }, e.createSignObject = function(t) {
        var i = "",
            n = this.createNonceStr();
        t.nonce_str = n;
        var o = [];
        for (var a in t) o.push(a + "=" + t[a]);
        i = o.sort(function(e, t) {
            return e > t ? 1 : -1
        }).join("&") + "&key=" + GameConfig.getKey(), t.nonce_str = n;
        var r = new e;
        return t.sign = r.hex_md5(i).toUpperCase(), t
    }, e
}();
__reflect(MD5.prototype, "MD5");
var Loading = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.hasLoad = !1, t.mapWidth = 1520, t.mapheight = 720, t.createView(), t
    }
    return __extends(t, e), t.prototype.createView = function() {
        this.stageOnResize(), App.MessageCenter.addListener(MessageType.WindowResize.toString(), this.stageOnResize, this), App.MessageCenter.addListener(MessageType.LoadSubpackage + "", this.OnLoadSubpackage, this)
    }, t.prototype.OnLoadSubpackage = function() {
        var e = this;
        e.loadResouce()
    }, t.prototype.loadResouce = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, this.loadTheme()];
                    case 1:
                        return e.sent(), [4, RES.loadGroup("preload", 0, this)];
                    case 2:
                        return e.sent(), [4, RES.loadGroup("sound", 1, null)];
                    case 3:
                        return e.sent(), [2]
                }
            })
        })
    }, t.prototype.loadTheme = function() {
        var e = this;
        return new Promise(function(t, i) {
            var n = new eui.Theme("resource/default.thm.json", e.stage);
            n.addEventListener(eui.UIEvent.COMPLETE, function() {
                t()
            }, e)
        })
    }, t.prototype.stageOnResize = function() {
        var e = this;
        e.mybg && (e.mybg.width = App.stage.stageWidth, e.mybg.height = App.stage.stageHeight, e.mybg.visible = !0), this.startbut && (this.startbut.x = App.stage.stageWidth / 2, this.startbut.y = App.stage.stageHeight - 400), e.tag && (e.tag.x = App.stage.stageWidth / 2, e.tag.y = e.tag.height - 70, e.tag.visible = !0)
    }, t.prototype.LoadingBG = function() {
        var e = this;
        e.mybg = App.CommonUtils.createBitmap("login_jpg", App.stage, 0, 0), e.mybg.visible = !1, e.tag = App.CommonUtils.createBitmap("gameTag_png", App.stage, .5 * App.stage.stageWidth, 60), e.tag.y = e.tag.height, App.CommonUtils.setAnchorPos(e.tag, .5 * e.tag.width, .5 * e.tag.height), e.tag.visible = !1
    }, t.prototype.onProgress = function(e, t) {
        var i = this;
        !this.hasLoad && e >= t && (this.hasLoad = !0, this.getinfo(), this.startbut = App.CommonUtils.createBitmap("start_png", App.stage, App.stage.stageWidth / 2, App.stage.stageHeight - 400), App.CommonUtils.setAnchorPos(this.startbut, .5 * this.startbut.width, .5 * this.startbut.height), this.startbut.touchEnabled = !0, this.startbut.visible = !1, "4399" == UserConfig.GameType ? wxTools.OpenAd = !0 : wxTools.OpenAd = !1, egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME && (this.startbut.visible = !0), this.startbut.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            i.onclose();
            var e = App.GameScene;
            e.init()
        }, this))
    }, t.prototype.onclose = function() {
        var e = this;
        App.MessageCenter.removeListener(MessageType.WindowResize.toString(), e.stageOnResize, e), e.mybg && App.stage.removeChild(e.mybg), e.startbut && App.stage.removeChild(e.startbut), e.tag && App.stage.removeChild(e.tag)
    }, t.prototype.getinfo = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t, i, n = this;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return egret.Capabilities.runtimeType != egret.RuntimeType.WXGAME ? [3, 7] : (e = egret.localStorage.getItem("wxPlantName"), t = egret.localStorage.getItem("wxPlantAvatar"), e && "" != e ? [3, 6] : [3, 1]);
                    case 1:
                        return i = "", [4, wxTools.getShouQuan().then(function(e) {
                            Log.info(e)
                        })["catch"](function(e) {
                            i = e
                        })];
                    case 2:
                        return o.sent(), "createbutton" != i ? [3, 4] : (this.startbut.visible = !0, [4, wxTools.createUserButton().then(function(e) {})["catch"](function(e) {})]);
                    case 3:
                        return o.sent(), [3, 6];
                    case 4:
                        return [4, wxTools.trygetUserInfo().then(function(e) {})["catch"](function() {
                            Log.info("获取用户信息失败")
                        })];
                    case 5:
                        o.sent(), o.label = 6;
                    case 6:
                        wxTools.CreateVideoRecorderManager(), egret.setTimeout(function() {
                            n.onclose();
                            var e = App.GameScene;
                            e.init()
                        }, this, 600), o.label = 7;
                    case 7:
                        return [2]
                }
            })
        })
    }, t
}(egret.Sprite);
__reflect(Loading.prototype, "Loading", ["RES.PromiseTaskReporter"]);
var ObjectPool = function() {
    function e() {}
    return e.pop = function(t) {
        for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
        e._content[t] || (e._content[t] = []);
        var o = e._content[t];
        if (o.length) return o.pop();
        var a, r = egret.getDefinitionByName(t),
            s = i.length;
        return 0 == s ? a = new r : 1 == s ? a = new r(i[0]) : 2 == s ? a = new r(i[0], i[1]) : 3 == s ? a = new r(i[0], i[1], i[2]) : 4 == s ? a = new r(i[0], i[1], i[2], i[3]) : 5 == s && (a = new r(i[0], i[1], i[2], i[3], i[4])), a.ObjectPoolKey = t, a
    }, e.tryPop = function(t) {
        for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
        e._content[t] || (e._content[t] = []);
        var o = e._content[t];
        return o.length ? o.pop() : null
    }, e.popNew = function(t) {
        for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
        e._content[t] || (e._content[t] = []);
        var o, a = egret.getDefinitionByName(t),
            r = i.length;
        return 0 == r ? o = new a : 1 == r ? o = new a(i[0]) : 2 == r ? o = new a(i[0], i[1]) : 3 == r ? o = new a(i[0], i[1], i[2]) : 4 == r ? o = new a(i[0], i[1], i[2], i[3]) : 5 == r && (o = new a(i[0], i[1], i[2], i[3], i[4])), o.ObjectPoolKey = t, o
    }, e.popNewWithExtraKey = function(t, i) {
        for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
        var a = t + i;
        e._content[a] || (e._content[a] = []);
        var r, s = egret.getDefinitionByName(t),
            p = n.length;
        return 0 == p ? r = new s : 1 == p ? r = new s(n[0]) : 2 == p ? r = new s(n[0], n[1]) : 3 == p ? r = new s(n[0], n[1], n[2]) : 4 == p ? r = new s(n[0], n[1], n[2], n[3]) : 5 == p && (r = new s(n[0], n[1], n[2], n[3], n[4])), r.ObjectPoolKey = a, r
    }, e.popWithExtraKey = function(t, i) {
        for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
        var a = t + i;
        e._content[a] || (e._content[a] = []);
        var r, s = e._content[a];
        if (s.length) return s.pop();
        if (!r) {
            var r, p = egret.getDefinitionByName(t),
                h = n.length;
            0 == h ? r = new p : 1 == h ? r = new p(n[0]) : 2 == h ? r = new p(n[0], n[1]) : 3 == h ? r = new p(n[0], n[1], n[2]) : 4 == h ? r = new p(n[0], n[1], n[2], n[3]) : 5 == h && (r = new p(n[0], n[1], n[2], n[3], n[4])), r.ObjectPoolKey = a
        }
        return r
    }, e.tryPopWithExtraKey = function(t, i) {
        var n = t + i;
        e._content[n] || (e._content[n] = []);
        var o, a = e._content[n];
        return a.length ? a.pop() : o
    }, e.push = function(t) {
        if (null == t) return !1;
        var i = t.ObjectPoolKey;
        return e._content[i] ? (e._content[i].push(t), !0) : !1
    }, e.clear = function() {
        e._content = {}
    }, e.clearClass = function(t, i) {
        void 0 === i && (i = null);
        for (var n = e._content[t]; n && n.length;) {
            var o = n.pop();
            i && o[i](), o = null
        }
        e._content[t] = null, delete e._content[t]
    }, e.dealFunc = function(t, i) {
        var n = e._content[t];
        if (null != n) {
            var o = 0,
                a = n.length;
            for (o; a > o; o++) n[o][i]()
        }
    }, e._content = {}, e
}();
__reflect(ObjectPool.prototype, "ObjectPool");
var PolyTools = function() {
    function e() {}
    return e.rayCasting = function(e, t) {
        for (var i = e.x, n = e.y, o = !1, a = 0, r = t.length, s = r - 1; r > a; s = a, a++) {
            var p = t[a].x,
                h = t[a].y,
                l = t[s].x,
                c = t[s].y;
            if ((p - i) * (i - l) >= 0 && (h - n) * (n - c) >= 0 && (i - p) * (c - h) === (n - h) * (l - p)) return "on";
            if (n > h && c >= n || h >= n && n > c) {
                var g = p + (n - h) * (l - p) / (c - h);
                g > i && (o = !o)
            }
        }
        return o ? "in" : "out"
    }, e.segmentsIntr = function(e, t, i, n, o) {
        void 0 === o && (o = !1);
        var a = (e.x - i.x) * (t.y - i.y) - (e.y - i.y) * (t.x - i.x),
            r = (e.x - n.x) * (t.y - n.y) - (e.y - n.y) * (t.x - n.x);
        if (a * r > 0) return !1;
        var s = (i.x - e.x) * (n.y - e.y) - (i.y - e.y) * (n.x - e.x),
            p = s + a - r;
        if (s * p > 0) return !1;
        if (0 == a && r == a) return !1;
        if (!o) return !0;
        var h = s / (r - a),
            l = h * (t.x - e.x),
            c = h * (t.y - e.y);
        return {
            x: e.x + l,
            y: e.y + c
        }
    }, e.onSegment = function(e, t, i) {
        return (i.x - e.x) * (t.y - e.y) == (t.x - e.x) * (i.y - e.y) && Math.min(e.x, t.x) <= i.x && i.x <= Math.max(e.x, t.x) && Math.min(e.y, t.y) <= i.y && i.y <= Math.max(e.y, t.y) ? !0 : !1
    }, e.Isleft = function(e, t, i, n, o, a) {
        var r, s, p, h;
        r = i - o, s = n - a, p = e - i, h = t - n;
        var l = r * h - p * s;
        return l
    }, e.polygonArea = function(e) {
        var t, i, n = 0;
        for (t = 0; t < e.length; t++) i = (t + 1) % e.length, n += e[t].x * e[i].y, n -= e[t].y * e[i].x;
        return n /= 2, Math.abs(n)
    }, e.triangleArea = function(e, t, i) {
        var n = 0;
        return n = e.x * t.y + t.x * i.y + i.x * e.y - t.x * e.y - i.x * t.y - e.x * i.y, Math.abs(n / 2)
    }, e.getPolygonAreaCenter = function(e) {
        function t(e, t, i) {
            var n = 0;
            return n = e.x * t.y + t.x * i.y + i.x * e.y - t.x * e.y - i.x * t.y - e.x * i.y, n / 2
        }
        for (var i = 0, n = 0, o = 0, a = e[1], r = 2; r < e.length; r++) {
            var s = e[r],
                p = t(e[0], a, s);
            o += p, i += (e[0].x + a.x + s.x) * p, n += (e[0].y + a.y + s.y) * p, a = s
        }
        var h = i / o / 3,
            l = n / o / 3;
        return {
            x: h,
            y: l
        }
    }, e.judgeClock = function(e, t, i) {
        var n = (t.x - e.x) * (i.y - t.y) - (t.y - e.y) * (i.x - t.x);
        return n
    }, e.rotateVector = function(e, t, i) {
        return {
            x: e * Math.cos(i) - t * Math.sin(i),
            y: e * Math.sin(i) + t * Math.cos(i)
        }
    }, e.prototype.reflect = function(e, t) {
        var i = e.x * t.x + e.y * t.y,
            n = 2 * i * t.x - e.x,
            o = 2 * i * t.y - e.y;
        return {
            x: n,
            y: o
        }
    }, e.rayRectangleCast = function(t, i, n, o, a, r, s, p) {
        var h = 0,
            l = 0;
        if (t >= a && s >= t && i >= r && p >= i || n >= a && s >= n && o >= r && p >= o) {
            var c = (n - t) * (n - t) + (o - i) * (o - i),
                g = (n - t) / Math.sqrt(c),
                u = (o - i) / Math.sqrt(c),
                d = 2 * Math.max(s - a, p - r);
            return t -= g * d, i -= u * d, n += g * d, o += u * d, e.rayRectangleCast(t, i, n, o, a, r, s, p)
        }
        if (a > t && n >= a) {
            if (l = (a - t) / (n - t), h = i + (o - i) * l, h >= r && p >= h) return {
                edge: 1,
                x: t + (n - t) * l,
                y: h
            }
        } else if (t > s && s >= n && (l = (s - t) / (n - t), h = i + (o - i) * l, h >= r && p >= h)) return {
            edge: 3,
            x: t + (n - t) * l,
            y: h
        };
        if (r > i && o >= r) {
            if (l = (r - i) / (o - i), h = t + (n - t) * l, h >= a && s >= h) return {
                edge: 4,
                x: h,
                y: i + (o - i) * l
            }
        } else if (i > p && p >= o && (l = (p - i) / (o - i), h = t + (n - t) * l, h >= a && s >= h)) return {
            edge: 2,
            x: h,
            y: i + (o - i) * l
        };
        return null
    }, e.rayCircleCast = function(t, i, n, o) {
        var a = t.start.x - i,
            r = t.start.y - n,
            s = a * a + r * r;
        o * o >= s && (s = (t.end.x - t.start.x) * (t.end.x - t.start.x) + (t.end.y - t.start.y) * (t.end.y - t.start.y), a = (t.end.x - t.start.x) / Math.sqrt(s), r = (t.end.y - t.start.y) / Math.sqrt(s), t.start.x -= 2 * a * o, t.start.y -= 2 * r * o);
        var p = i,
            h = n,
            l = (t.end.y - t.start.y) / (t.end.x - t.start.x),
            c = t.end.y - l * t.end.x,
            g = o,
            u = o,
            d = c + l * p,
            m = (p * (u * u) - l * (g * g) * (c - h) + g * u * Math.sqrt(g * g * (l * l) + u * u - d * d - h * h + 2 * d * h)) / (g * g * (l * l) + u * u),
            f = (p * (u * u) - l * (g * g) * (c - h) - g * u * Math.sqrt(g * g * (l * l) + u * u - d * d - h * h + 2 * d * h)) / (g * g * (l * l) + u * u),
            v = l * m + c,
            y = l * f + c,
            _ = {
                x: m,
                y: v
            },
            A = {
                x: f,
                y: y
            },
            C = e.pointOnSegment(t, _.x, _.y),
            S = e.pointOnSegment(t, A.x, A.y),
            w = [];
        if (C && w.push(_), S && w.push(A), 2 == w.length) {
            var T = t.start.x - w[0].x,
                M = t.start.y - w[0].y,
                x = T * T + M * M,
                b = t.start.x - w[1].x,
                U = t.start.y - w[1].y,
                E = b * b + U * U;
            return E >= x ? w[0] : w[1]
        }
        return 1 == w.length ? w[0] : null
    }, e.pointOnSegment = function(t, i, n) {
        var o = Math.min(t.start.x, t.end.x),
            a = Math.max(t.start.x, t.end.x),
            r = Math.min(t.start.y, t.end.y),
            s = Math.max(t.start.y, t.end.y);
        return e.pointOnLine(t, i, n) && i >= o && a >= i && n >= r && s >= n
    }, e.pointOnLine = function(t, i, n) {
        return e.fuzzyEquals((i - t.start.x) * (t.end.y - t.start.y), (t.end.x - t.start.x) * (n - t.start.y))
    }, e.fuzzyEquals = function(e, t) {
        var i = .01;
        return Math.abs(e - t) <= i
    }, e.reflect = function(e, t) {
        var i = e.x * t.x + e.y * t.y,
            n = 2 * i * t.x - e.x,
            o = 2 * i * t.y - e.y;
        return {
            x: n,
            y: o
        }
    }, e.reflect1 = function(e, t, i, n, o) {
        var a = e * i + t * n;
        o.x = 2 * a * i - e, o.y = 2 * a * n - t
    }, e
}();
__reflect(PolyTools.prototype, "PolyTools");
var RandomUtils = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.numArr = [], t
    }
    return __extends(t, e), t.prototype.limit = function(e, t) {
        e = Math.min(e, t), t = Math.max(e, t);
        var i = t - e;
        return e + Math.random() * i
    }, t.prototype.limitInteger = function(e, t) {
        return Math.floor(this.limit(e, t + 1))
    }, t.prototype.randomArray = function(e) {
        if (!e) return null;
        var t = Math.floor(Math.random() * e.length);
        return e[t]
    }, t.prototype.RandomNoRepeat = function(e, t, i) {
        var n = this,
            o = e;
        if (i || (o = e.concat()), n.numArr.length = 0, e.length <= t) return i && (o = e.concat(), e.splice(0, e.length)), o;
        for (var a = o.length, r = 0; a > r; r++) {
            var s = (o.length, Math.floor(Math.random() * o.length));
            if (n.numArr.push(o[s]), o.splice(s, 1), n.numArr.length >= t) return n.numArr
        }
    }, t
}(SingletonClass);
__reflect(RandomUtils.prototype, "RandomUtils");
var Main = function(e) {
    function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t._openTime = 0, t.isStart = !1, t._adTime = 0, t
    }
    return __extends(t, e), t.prototype.createChildren = function() {
        e.prototype.createChildren.call(this), egret.ImageLoader.crossOrigin = "anonymous", App.Init(), this.addEventListener(egret.Event.ENTER_FRAME, function(e) {
            App.TimerManager.onEnterFrame()
        }, this), App.stage = this.stage, egret.lifecycle.addLifecycleListener(function(e) {}), egret.lifecycle.onPause = function() {
            egret.ticker.pause()
        }, egret.lifecycle.onResume = function() {
            egret.ticker.resume(), App.TimerManager.resume()
        }, this.stage.addEventListener(egret.Event.ACTIVATE, this.onActivate, this), this.stage.addEventListener(egret.Event.DEACTIVATE, this.onDeActivate, this);
        var t = new AssetAdapter;
        egret.registerImplementation("eui.IAssetAdapter", t), egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter), this.runGame()["catch"](function(e) {})
    }, t.prototype.onActivate = function() {
        App.SoundManager.bgIsOn && App.SoundManager.playBg("beijingBGM_mp3")
    }, t.prototype.onDeActivate = function() {
        App.SoundManager.stopBg()
    }, t.prototype.runGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                switch (e.label) {
                    case 0:
                        return egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && (qg.setLoadingProgress({
                            progress: 0
                        }), qgameKit.initAd(GameConst.AppId, !1), qgameKit.checkDesk(), qg.setEnableDebug({
                            enableDebug: !1,
                            success: function() {
                                console.log("test consol log")
                            },
                            complete: function() {},
                            fail: function() {}
                        })), [4, this.loadResource()];
                    case 1:
                        return e.sent(), App.StageUtils.startFullscreenAdaptation(720, 1280), App.MessageCenter.addListener(MessageType.AdMsg + "", this.adDaoJiShi, this), [2]
                }
            })
        })
    }, t.prototype.adDaoJiShi = function() {
        this.isStart || (this.isStart = !0, this._adTime = 0, this.egrettimer1 = new egret.Timer(1e3, 86400), this.egrettimer1.addEventListener(egret.TimerEvent.TIMER, this.daojishi1, this), this.egrettimer1.start())
    }, t.prototype.daojishi1 = function() {
        this._adTime++, this._adTime >= 60 && (this._adTime = 0, qgameKit.GameAd = !0, this.isNativeAdView() ? qgameKit.getNativeAd(GameConst.nativeAD) : qgameKit.getNativeAd1(GameConst.nativeAD), this.egrettimer1.stop())
    }, t.prototype.isBannerAdView = function() {}, t.prototype.isNativeAdView = function() {
        var e = App.UIManager.getTopView();
        return "JieSuoView" == e || "SpeedUpTip" == e || "DuanWeiTiShengView" == e || "HaoHuanLiBaoView" == e || "zaixianjiangliView" == e ? !0 : !1
    }, t.prototype.loadResource = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return e = new Loading, this.stage.addChild(e), [4, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        return t.sent(), [4, RES.loadGroup("loading", 0, null)];
                    case 2:
                        return t.sent(), e.LoadingBG(), [4, this.loadTheme()];
                    case 3:
                        return t.sent(), [4, RES.loadGroup("preload", 0, e)];
                    case 4:
                        return t.sent(), [4, RES.loadGroup("sound", 1, null)];
                    case 5:
                        return t.sent(), [2]
                }
            })
        })
    }, t.prototype.loadTheme = function() {
        var e = this;
        return new Promise(function(t, i) {
            var n = new eui.Theme("resource/default.thm.json", e.stage);
            n.addEventListener(eui.UIEvent.COMPLETE, function() {
                t()
            }, e)
        })
    }, t.prototype.daojishifunc = function() {
        var e = this;
        if (GameConfig.AdSwitch) return GameConfig.BannerSwitch ? void(egret.Capabilities.runtimeType == egret.RuntimeType.OPPOGAME && (e._openTime++, 7 == e._openTime && qgameKit.closeBanner(), e._openTime >= 8 && (qgameKit.miniBannerAd(GameConst.WXBanner), e._openTime = 0))) : void(0 != e._openTime && (e._openTime = 0))
    }, t
}(eui.UILayer);
__reflect(Main.prototype, "Main");
var StageUtils = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.prototype.getHeight = function() {
        return App.stage.stageHeight
    }, t.prototype.getWidth = function() {
        return App.stage.stageWidth
    }, t.prototype.setTouchChildren = function(e) {
        App.stage.touchChildren = e
    }, t.prototype.setMaxTouches = function(e) {
        App.stage.maxTouches = e
    }, t.prototype.setFrameRate = function(e) {
        App.stage.frameRate = e
    }, t.prototype.setScaleMode = function(e) {
        App.stage.scaleMode = e
    }, t.prototype.getStage = function() {
        return App.stage
    }, t.prototype.startFullscreenAdaptation = function(e, t) {
        this.designWidth = e, this.designHeight = t, this.stageOnResize()
    }, t.prototype.stageOnResize = function() {
        this.getStage().removeEventListener(egret.Event.RESIZE, this.stageOnResize, this);
        var e = this.designWidth,
            t = this.designHeight,
            i = window.innerWidth,
            n = window.innerHeight,
            o = i / n,
            a = e / t,
            r = o / a;
        r > 1.15 ? (e = Math.floor(e), t = Math.floor(t / 1.15), this.getStage().scaleMode = egret.StageScaleMode.FIXED_HEIGHT, this.getStage().setContentSize(e, t)) : (this.getStage().scaleMode = egret.StageScaleMode.FIXED_WIDTH, this.getStage().setContentSize(e, t)), App.MessageCenter.dispatch(MessageType.WindowResize.toString()), this.getStage().addEventListener(egret.Event.RESIZE, this.stageOnResize, this)
    }, t
}(SingletonClass);
__reflect(StageUtils.prototype, "StageUtils");
var StringUtils = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.prototype.trimSpace = function(e) {
        return e.replace(/^\s*(.*?)[\s\n]*$/g, "$1")
    }, t.prototype.getStringLength = function(e) {
        for (var t = e.split(""), i = 0, n = 0; n < t.length; n++) {
            var o = t[n];
            i += this.isChinese(o) ? 2 : 1
        }
        return i
    }, t.prototype.isChinese = function(e) {
        var t = /^.*[\u4E00-\u9FA5]+.*$/;
        return t.test(e)
    }, t
}(SingletonClass);
__reflect(StringUtils.prototype, "StringUtils");
var AntiButton = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.prototype.partAdded = function(t, i) {
        e.prototype.partAdded.call(this, t, i)
    }, t.prototype.childrenCreated = function() {
        e.prototype.childrenCreated.call(this), this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickTap, this), this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this, !1, 100), this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchReleaseOutSize, this), this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancel, this)
    }, t.prototype.tweento = function() {
        egret.Tween.removeTweens(this), egret.Tween.get(this).to({
            scaleX: .8,
            scaleY: .8
        }, 100, egret.Ease.sineIn)
    }, t.prototype.tweenback = function() {
        egret.Tween.removeTweens(this), egret.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 300, egret.Ease.elasticOut), egret.Tween.get(this).to({
            scaleX: 1,
            scaleY: 1
        }, 100)
    }, t.prototype.onTouchBegin = function(e) {
        App.SoundManager.playEffect("3_mp3", 1), this.tweento()
    }, t.prototype.onTouchEnd = function(e) {
        this.tweenback()
    }, t.prototype.onTouchReleaseOutSize = function(e) {
        this.tweenback()
    }, t.prototype.onTouchCancel = function(e) {
        this.tweenback()
    }, t.prototype.onClickTap = function(e) {
        var t = this;
        if (t.tapFun && t.thisObject1) try {
            t.params ? (n = t.tapFun).call.apply(n, [t.thisObject1, e].concat(t.params)) : t.tapFun.call(t.thisObject1, e)
        } catch (i) {
            i instanceof Error && Log.error(i.stack)
        }
        var n
    }, t.prototype.registerTapFun = function(e, t) {
        for (var i = [], n = 2; n < arguments.length; n++) i[n - 2] = arguments[n];
        var o = this;
        return e && t ? (o.tapFun = e, o.thisObject1 = t, o.params = i, !0) : !1
    }, t
}(eui.Component);
__reflect(AntiButton.prototype, "AntiButton", ["eui.UIComponent", "egret.DisplayObject"]);
var Tip = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.touchEnabled = !1, t.init(), t
    }
    return __extends(t, e), t.prototype.init = function() {
        var e = this;
        e.rongqi = new egret.DisplayObjectContainer, this.addChild(e.rongqi), e.square = new egret.Shape, e.square.graphics.beginFill(1118481, .5), e.square.graphics.drawRoundRect(0, 0, 400, 50, 25, 10), e.square.graphics.endFill(), e.rongqi.addChild(e.square), e.square.anchorOffsetX = 200, e.square.anchorOffsetY = 0, e.Text = new egret.TextField, e.Text.size = 25, e.Text.textColor = 16711680, e.Text.width = 400, e.Text.height = 20, e.Text.textAlign = egret.HorizontalAlign.CENTER, e.Text.verticalAlign = egret.VerticalAlign.MIDDLE, e.Text.text = "", e.Text.x = 0, e.Text.y = 15, e.Text.alpha = 1, e.Text.anchorOffsetX = 200, e.rongqi.addChild(e.Text)
    }, t.prototype.showtip = function(e, t, i, n, o) {
        void 0 === n && (n = !0), void 0 === o && (o = 16775927);
        var a = this;
        n ? a.square.visible = !0 : a.square.visible = !1, a.Text.textColor = o, a.Text.text = i, a.Text.alpha = 1, a.rongqi.x = e, a.rongqi.y = t, this.addChild(a.rongqi), egret.Tween.get(a.rongqi).to({
            y: t - 250
        }, 2e3).call(function() {
            a.rongqi.parent && a.rongqi.parent.removeChild(a.rongqi), a.parent.removeChild(a), ObjectPool.push(a)
        })
    }, t
}(eui.UILayer);
__reflect(Tip.prototype, "Tip"), window.Tip = Tip;
var ThemeAdapter = function() {
    function e() {}
    return e.prototype.getTheme = function(e, t, i, n) {
        function o(e) {
            t.call(n, e)
        }

        function a(t) {
            t.resItem.url == e && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, a, null), i.call(n))
        }
        var r = this;
        if ("undefined" != typeof generateEUI) egret.callLater(function() {
            t.call(n, generateEUI)
        }, this);
        else if ("undefined" != typeof generateEUI2) RES.getResByUrl("resource/gameEui.json", function(e, i) {
            window.JSONParseClass.setData(e), egret.callLater(function() {
                t.call(n, generateEUI2)
            }, r)
        }, this, RES.ResourceItem.TYPE_JSON);
        else if ("undefined" != typeof generateJSON)
            if (e.indexOf(".exml") > -1) {
                var s = e.split("/");
                s.pop();
                var p = s.join("/") + "_EUI.json";
                generateJSON.paths[e] ? egret.callLater(function() {
                    t.call(n, generateJSON.paths[e])
                }, this) : RES.getResByUrl(p, function(i) {
                    window.JSONParseClass.setData(i), egret.callLater(function() {
                        t.call(n, generateJSON.paths[e])
                    }, r)
                }, this, RES.ResourceItem.TYPE_JSON)
            } else egret.callLater(function() {
                t.call(n, generateJSON)
            }, this);
        else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, a, null), RES.getResByUrl(e, o, this, RES.ResourceItem.TYPE_TEXT)
    }, e
}();
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var Box = function(e) {
    function t(i) {
        var n = e.call(this, RES.getRes(t.getResName(i))) || this;
        return n.anchorOffsetX = .5 * Role.BoxSize, n.anchorOffsetY = .5 * Role.BoxSize, n.touchEnabled = !1, n
    }
    return __extends(t, e), t.getResName = function(e) {
        return "1" == e ? "7 (3)_png" : "2" == e ? "7 (2)_png" : "3" == e ? "7 (4)_png" : "4" == e ? "7 (5)_png" : void 0
    }, t.prototype.clear = function() {
        this.parent && this.parent.removeChild(this), ObjectPool.push(this)
    }, t
}(egret.Bitmap);
__reflect(Box.prototype, "Box"), window.Box = Box;
var Bullet = function(e) {
    function t(i) {
        var n = e.call(this, RES.getRes(t.getResName(i))) || this;
        return n._type = i, n.anchorOffsetX = .5 * n.width, n.anchorOffsetY = 0, n.touchEnabled = !1, n
    }
    return __extends(t, e), Object.defineProperty(t.prototype, "Type", {
        get: function() {
            return this._type
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Dirx", {
        get: function() {
            return this._dirx
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Diry", {
        get: function() {
            return this._diry
        },
        enumerable: !0,
        configurable: !0
    }), t.getResName = function(e) {
        return "bullet" + e + "_png"
    }, t.prototype.clear = function() {
        this.parent && this.parent.removeChild(this), ObjectPool.push(this)
    }, t.prototype.setPos = function(e, t, i, n) {
        var o = this;
        o.x = e, o.y = t, o.scaleX = o.scaleY = GameConst.getYScale(t), null != i && o.setDir(i, n)
    }, t.prototype.setDir = function(e, t) {
        var i = this;
        i._dirx = e, i._diry = t, i.rotation = 180 * Math.atan2(t, e) / Math.PI + 90
    }, t
}(egret.Bitmap);
__reflect(Bullet.prototype, "Bullet"), window.Bullet = Bullet;
var Coin = function(e) {
    function t() {
        return null !== e && e.apply(this, arguments) || this
    }
    return __extends(t, e), t.prototype.startRoll = function() {
        App.TimerManager.doFrame(1, 0, this.updateFilter, this)
    }, t.prototype.endRoll = function() {
        App.TimerManager.remove(this.updateFilter, this)
    }, t.prototype.updateFilter = function() {
        var e = this,
            t = e.filters[0];
        t.uniforms.angle -= 20 * Math.PI / 180, t.uniforms.angle < 0 && (t.uniforms.angle += Math.PI), t.uniforms.angle >= Math.PI / 2 ? t.uniforms.scale = .2 * (2 * (Math.PI - t.uniforms.angle) / Math.PI) : t.uniforms.scale = .2 * t.uniforms.angle * 2 / Math.PI
    }, t
}(egret.Bitmap);
__reflect(Coin.prototype, "Coin"), window.Coin = Coin, window["egret.Bitmap"] = egret.Bitmap, window["eui.BitmapLabel"] = eui.BitmapLabel, window["egret.TextField"] = egret.TextField, window.TimerHandler = TimerHandler, window.MessageVo = MessageVo;
var EnhanceTrail = function(e) {
    function t(t) {
        var i = e.call(this, RES.getRes("trail1_png")) || this;
        return i._frame = 20, i.anchorOffsetX = .5 * i.width, i.anchorOffsetY = -32, i.touchEnabled = !1, i
    }
    return __extends(t, e), Object.defineProperty(t.prototype, "Dirx", {
        get: function() {
            return this._dirx
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Diry", {
        get: function() {
            return this._diry
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Frame", {
        get: function() {
            return this._frame
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.colorMap = function(e) {
        "1" == e || "4" == e ? App.EffectUtils.setImageColor(this, 10157614) : "2" == e ? App.EffectUtils.setImageColor(this, 16174808) : "3" == e ? App.EffectUtils.setImageColor(this, 10104574) : "5" == e || "22" == e || "23" == e || "24" == e || "25" == e ? App.EffectUtils.setImageColor(this, 16671790) : "6" == e || "7" == e || "8" == e || "9" == e || "18" == e || "20" == e || "21" == e || "27" == e ? App.EffectUtils.setImageColor(this, 12515201) : "10" == e || "11" == e || "12" == e || "13" == e || "19" == e || "33" == e ? App.EffectUtils.setImageColor(this, 16777215) : "14" == e || "15" == e || "16" == e || "17" == e || "26" == e || "29" == e || "30" == e || "31" == e || "32" == e || "38" == e || "39" == e || "40" == e ? App.EffectUtils.setImageColor(this, 10453495) : "28" == e || "41" == e || "42" == e ? App.EffectUtils.setImageColor(this, 8510197) : ("34" == e || "35" == e || "36" == e || "37" == e) && App.EffectUtils.setImageColor(this, 15988609)
    }, t.prototype.clear = function() {
        this.parent && this.parent.removeChild(this), ObjectPool.push(this)
    }, t.prototype.init = function(e, i, n, o) {
        var a = this;
        a.x = e, a.y = i, a._FovScale = a.scaleX = a.scaleY = GameConst.getYScale(i), a._frame = t.MaxCount - 1, a.alpha = 1, null != n && a.setDir(n, o)
    }, t.prototype.setDir = function(e, t) {
        var i = this;
        i._dirx = e, i._diry = t, i.rotation = 180 * Math.atan2(t, e) / Math.PI + 90
    }, t.prototype.update = function() {
        var e = this;
        if (e._frame > 0 && e._frame--, 0 == e._frame) return void e.clear();
        var i = e._frame / t.MaxCount;
        e.scaleX = e.scaleY = i * e._FovScale, e.scaleY *= 1.3, e.alpha = i
    }, t.prototype.isDie = function() {
        return 0 == this.Frame
    }, t.MaxCount = 14, t
}(egret.Bitmap);
__reflect(EnhanceTrail.prototype, "EnhanceTrail"), window.EnhanceTrail = EnhanceTrail;
var explodeBox = function(e) {
    function t(t) {
        var i = e.call(this, RES.getRes("fanvgkuai_png")) || this;
        return i.anchorOffsetX = .5 * i.width, i.anchorOffsetY = .5 * i.height, i.touchEnabled = !1, i
    }
    return __extends(t, e), t.prototype.clear = function() {
        this.parent && this.parent.removeChild(this), ObjectPool.push(this)
    }, t
}(egret.Bitmap);
__reflect(explodeBox.prototype, "explodeBox"), window.explodeBox = explodeBox;
var explodeCube = function(e) {
    function t(t) {
        var i = this,
            n = RES.getRes("exp" + t + "_png");
        return i = e.call(this, n) || this, i.anchorOffsetX = .5 * i.width, i.anchorOffsetY = .5 * i.height, i.touchEnabled = !1, i
    }
    return __extends(t, e), t.prototype.clear = function() {
        this.parent && this.parent.removeChild(this), ObjectPool.push(this)
    }, t
}(egret.Bitmap);
__reflect(explodeCube.prototype, "explodeCube"), window.explodeCube = explodeCube;
var FightSysStatus;
! function(e) {
    e[e.FightSysNone = 0] = "FightSysNone", e[e.FightSysPrepare = 1] = "FightSysPrepare", e[e.FightSysFight = 2] = "FightSysFight", e[e.FightSysOver = 3] = "FightSysOver", e[e.FightNextRound = 4] = "FightNextRound"
}(FightSysStatus || (FightSysStatus = {}));
var BigWavestatus;
! function(e) {
    e[e.None = 0] = "None", e[e.Prepare = 1] = "Prepare", e[e.Fight = 2] = "Fight"
}(BigWavestatus || (BigWavestatus = {}));
var FightCommand = function() {
    function e() {
        this._CommandID = 0, this._isbox = !1, this._isufo = !1
    }
    return e
}();
__reflect(FightCommand.prototype, "FightCommand");
var FightSystem = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._defence = new Array, t._attacker = new Array, t._attackCommand = new Array, t._defenceCommand = new Array, t._commandID = 0, t._uuid = 0, t._FightTime = 0, t._isPause = !1, t._eclpseTime = 0, t._saveTime = 0, t._flushDataTime = 0, t.fiveSecond = GameConst.SmallWave, t.isProduceFourBox = !1, t.isProduceThreeJijia = !1, t.count = 0, t.count1 = 0, t.dieNum = 0, t.isFlick = !1, t.commonBoxTime = 0, t.videoBoxTime = 0, t.openBoxTime = 0, t.ufoTime = 0, t.isProduce = !0, t.isProduceUfo = !0, t
    }
    return __extends(t, e), t.prototype.init = function(e) {
        var t = this;
        t._mapscene = e, t._isPause = !1, t._commandID = 0, t._FightTime = 0, t._uuid = 0, t._eclpseTime = 0, t._saveTime = 0, t.count = 0, t.dieNum = 0, t.isFlick = !1, t.fiveSecond = GameConst.SmallWave, t._FightStatus = FightSysStatus.FightSysPrepare, App.TimerManager.doFrame(1, 0, t.fixedUpdate, t)
    }, t.prototype.setPause = function(e) {
        var t = this;
        t._isPause = e
    }, t.prototype.isPause = function() {
        return this._isPause
    }, t.prototype.setProduce = function(e) {
        this.isProduceFourBox = e
    }, t.prototype.setProduceJijia = function(e) {
        this.isProduceThreeJijia = e
    }, t.prototype.clear = function() {
        var e = this;
        App.SkillManager.clear(), App.TimerManager.remove(e.fixedUpdate, e);
        for (var t = 0; t < e._attacker.length; t++) e._attacker[t].clear();
        e._attacker.length = 0;
        for (var t = 0; t < e._defence.length; t++) e._defence[t].clear();
        e._defence.length = 0, e._defenceCommand.length = 0, e._attackCommand.length = 0, e._mapscene && (e._mapscene.clear(), e._mapscene = null), App.UIManager.close("ZhuJieMianView", !1)
    }, t.prototype.fixedUpdate = function(e) {
        var i = this;
        i._isPause || this.Update(t.TimeStep)
    }, t.prototype.searchIdlePosition = function() {
        for (var e = this, t = [], i = 6; 15 >= i; i++) t.push(i);
        for (var n, i = 0; i < e._attacker.length; i++) {
            var o = e._attacker[i].getStation();
            n = t.indexOf(o), -1 != n && t.splice(n, 1)
        }
        if (0 == t.length) return null;
        for (var i = 0; i < e._attackCommand.length; i++) {
            var o = e._attackCommand[i]._station;
            n = t.indexOf(o), -1 != n && t.splice(n, 1)
        }
        return t.length > 0 ? (n = App.RandomUtils.limitInteger(0, t.length - 1), t[n]) : null
    }, t.prototype.searchIdlePosition2 = function() {
        for (var e = this, t = [], i = 6; 15 >= i; i++) t.push(i);
        for (var n, i = 0; i < e._attacker.length; i++) {
            var o = e._attacker[i].getStation();
            n = t.indexOf(o), -1 != n && t.splice(n, 1)
        }
        if (0 == t.length) return null;
        for (var i = 0; i < e._attackCommand.length; i++) {
            var o = e._attackCommand[i]._station;
            n = t.indexOf(o), -1 != n && t.splice(n, 1)
        }
        return t.length > 0 ? t[0] : null
    }, t.prototype.Update = function(e) {
        var t = this;
        if (t._saveTime += e, t._saveTime >= 1e4 && App.TimerManager.getTimeScale() < 1.1 && (App.UserConfig.save(), t._saveTime = 0), t._FightStatus == FightSysStatus.FightSysPrepare) {
            var i = App.UserConfig.getPlantData();
            if (GameScene.isArenaMode)
                for (var n = 0; n < i.length; n++) i[n].slot <= 5 && t.addPlantCommand(i[n].id, i[n].slot, 1);
            else
                for (var n = 0; n < i.length; n++) t.addPlantCommand(i[n].id, i[n].slot, 1), i[n].id > App.UserConfig.getCurMaxLevel() && App.UserConfig.setCurMaxLevel(i[n].id);
            if (GameScene.isArenaMode) {
                for (var n = 0; 5 > n; n++) t.addPlantCommand(n + 1, 16 + n, 1);
                t.generateAneraBox()
            }
            for (var n = 0; n < t._attackCommand.length; n++) t.executeCommand(t._attackCommand[n], !0);
            t._attackCommand = [], t._FightStatus = FightSysStatus.FightSysFight
        } else if (t._FightStatus == FightSysStatus.FightSysFight) {
            if (t._FightTime += e, t.fiveSecond += e, !GameScene.isArenaMode && App.UserConfig.getUnLockMaxID() > 2) {
                if (App.SkillManager.getSpeedUp() ? t.fiveSecond > GameConst.BoxWave && (t.GenerateSmallWave(), t.fiveSecond = 0) : t.fiveSecond > GameConst.SmallWave && (t.GenerateSmallWave(), t.fiveSecond = 0), t.commonBoxTime += e, t.commonBoxTime > GameConst.CommonBoxTime) {
                    var o = t.searchIdlePosition();
                    null != o ? (t.addBoxCommand(1, o, 1), t.commonBoxTime = 0) : t.commonBoxTime = GameConst.CommonBoxTime
                }
                if (this.isProduce && (t.videoBoxTime += e, t.videoBoxTime > GameConst.VideoBoxTime)) {
                    var o = t.searchIdlePosition();
                    null != o ? (t.addBoxCommand(2, o, 1), t.videoBoxTime = 0, this.isProduce = !1) : t.videoBoxTime = GameConst.VideoBoxTime
                }
                if (t.isProduceUfo && (t.ufoTime += e, t.ufoTime > GameConst.UfoTime && (t.addUfoCommand(3, 6, 1), t.ufoTime = 0, t.isProduceUfo = !1)), t.isProduceFourBox) {
                    var o = App.FightSystem.searchIdlePosition();
                    null != o && (App.FightSystem.addBoxCommand(1, o, 1), this.count++, 4 == this.count && (this.count = 0, t.isProduceFourBox = !1))
                }
                if (t.isProduceThreeJijia) {
                    var o = (App.UserConfig.getCurLevel(), App.FightSystem.searchIdlePosition());
                    null != o && (App.FightSystem.addPlantCommand(10, o, 1), this.count1++, 3 == this.count1 && (this.count1 = 0, t.isProduceThreeJijia = !1))
                }
            }
            for (var n = 0; n < t._attackCommand.length;) t._attackCommand[n]._time <= t._FightTime ? (t.executeCommand(t._attackCommand[n], !0), t._attackCommand.splice(n, 1)) : n++;
            for (var a = !1, n = 0; n < t._defenceCommand.length;) t._defenceCommand[n]._time <= t._FightTime ? (t.executeCommand(t._defenceCommand[n], !1), t._defenceCommand.splice(n, 1), a || (a = !0)) : n++;
            a && t._mapscene.getEnemyLayer().sortChildren(), SkillManager.getInstance().Update(e);
            for (var n = 0; n < t._defence.length;) t._defence[n].canRemove() ? (t._defence[n].clear(), t._defence.splice(n, 1)) : (t._defence[n].Update(e), n++);
            for (var n = 0; n < t._attacker.length;) t._attacker[n].canRemove() ? (t._attacker[n].clear(), t._attacker.splice(n, 1)) : (t._attacker[n].Update(e), n++);
            GameScene.isArenaMode && 0 == t._defenceCommand.length && 0 == t._defence.length && (t._FightStatus = FightSysStatus.FightSysOver)
        } else if (t._FightStatus == FightSysStatus.FightNextRound) {
            if (t._defence.length > 0 && (t._defence[0].death(!0), t._defence[0].clear(), t._defence.splice(0, 1)), this.isFlick || (App.EffectUtils.startShake(App.GameScene.rootLayer, 100), this.isFlick = !0), !GameScene.isArenaMode) {
                if (0 == t._defence.length) {
                    this.isFlick = !1, App.EffectUtils.stopShake(App.GameScene.rootLayer), App.GameScene.rootLayer.x = 0, App.GameScene.rootLayer.y = 0;
                    var r = App.UserConfig.getLevel();
                    App.isShowLevelDown && (r > 1 && (t.dieNum++, 2 == t.dieNum && (t.dieNum = 0, App.UIManager.open("DuanWeiTiShengView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1, 1))), App.UserConfig.getGuide() || App.MessageCenter.dispatch(MessageType.ShowDuanWeiTiShi.toString())), App.isShowLevelDown = !0, t._FightStatus = FightSysStatus.FightSysFight
                }
                App.SkillManager.getSpeedUp() ? t.fiveSecond = GameConst.BoxWave : t.fiveSecond = GameConst.SmallWave
            }
        } else t._FightStatus == FightSysStatus.FightSysOver && (t._defence.length > 0 && (t._defence[0].death(!0), t._defence[0].clear(), t._defence.splice(0, 1)), 0 == t._defence.length && (t.clear(), App.GameScene.createFightSystem(!1)))
    }, t.prototype.gameOver = function() {
        var e = this;
        return GameScene.isArenaMode ? void(e._FightStatus = FightSysStatus.FightSysOver) : void(e._FightStatus != FightSysStatus.FightNextRound && (e._FightStatus = FightSysStatus.FightNextRound, e._defenceCommand.length = 0, SkillManager.getInstance().clear()))
    }, t.prototype.getMapScene = function() {
        return this._mapscene
    }, t.prototype.GenerateSmallWave = function() {
        for (var e = this, t = 0; t < GameConst.BoxStationCount; t++) {
            var i = 500;
            Math.random() > .35 ? e.addZombieCommand(i, t + 1, 1, 0) : Math.random() <= .35 && Math.random() > .3 ? e.addZombieCommand(501, t + 1, 1, 0) : Math.random() <= .3 && Math.random() > .23 ? e.addZombieCommand(502, t + 1, 1, 0) : Math.random() <= .23 && Math.random() > .2 && e.addZombieCommand(503, t + 1, 1, 0)
        }
    }, t.prototype.addCommand = function(e, t) {
        var i = this;
        i._commandID++, t ? i._attackCommand.push(e) : i._defenceCommand.push(e)
    }, t.prototype.executeCommand = function(e, t) {
        this.CreateRole(e._station, e._id, t, e._level, e._isbox, e._isufo, e._pos)
    }, t.prototype.CreateRole = function(e, t, i, n, o, a, r) {
        var s = this;
        s._uuid++;
        var p = new Role(e, t, i, n, s._uuid, o, a);
        i ? s._attacker.push(p) : (s._defence.push(p), r && (GameScene.isArenaMode ? p.setArenaPara(r.x, r.y) : p.setXY(r.x, r.y)))
    }, t.prototype.addBoxCommand = function(e, t, i, n) {
        var o = this,
            a = new FightCommand;
        a._CommandID = o._commandID++, a._level = i, a._id = e, a._station = t, null != n ? a._time = o._FightTime + n : a._time = o._FightTime, a._isbox = !0, o.addCommand(a, !0)
    }, t.prototype.addUfoCommand = function(e, t, i, n) {
        var o = this,
            a = new FightCommand;
        a._CommandID = o._commandID++, a._level = i, a._id = e, a._station = t, null != n ? a._time = o._FightTime + n : a._time = o._FightTime, a._isufo = !0, o.addCommand(a, !0)
    }, t.prototype.addPlantCommand = function(e, t, i, n) {
        var o = this,
            a = new FightCommand;
        a._CommandID = o._commandID++, a._level = i, a._id = e, a._station = t, null != n ? a._time = o._FightTime + n : a._time = o._FightTime, o.addCommand(a, !0)
    }, t.prototype.addZombieCommand = function(e, t, i, n, o) {
        var a = this,
            r = new FightCommand;
        r._CommandID = a._commandID++, r._level = i, r._id = e, r._station = t, null != n ? r._time = a._FightTime + n : r._time = a._FightTime, null != o && (r._pos = o), a.addCommand(r, !1)
    }, t.prototype.getAttackAimRole = function(e, t, i) {
        for (var n, o, a, r = this, s = null, p = 4e6, h = 0; h < GameConst.BoxStationCount; h++)
            for (var l = 0; l < r._defence.length; l++)
                if (r._defence[l].getStation() == h + 1 && !r._defence[l].isDie() && !r._defence[l].isBorning()) {
                    n = e - r._defence[l].getX(), o = t - r._defence[l].getY(), a = n * n + o * o, p > a && (s = r._defence[l], p = a);
                    break
                } return p > i * i ? null : s
    }, t.prototype.getdefence = function() {
        var e = this;
        return e._defence
    }, t.prototype.getAttacker = function() {
        return this._attacker
    }, t.prototype.setCrossStar = function(e) {
        for (var t = this, i = 0; i < t._attacker.length; i++) t._attacker[i].setCrossStar()
    }, t.prototype.clickShoot = function(e, t) {
        for (var i = this, n = 0; n < i._attacker.length; n++) !i._attacker[n].isBox() && i._attacker[n].getStation() >= 1 && i._attacker[n].getStation() <= 5 && i._attacker[n].clickShoot(e, t)
    }, t.prototype.generateAneraBox = function() {
        for (var e = this, t = .5 * Role.BoxSize, i = 3 * Role.BoxSize, n = 10, o = [], a = 1; n >= a; a++)
            for (var r = 0; r < GameConst.BoxStationCount; r++) {
                var s = {
                    x: i + a * t,
                    y: r + 1
                };
                o.push(s)
            }
        var p = o.concat(o);
        o = o.concat(p);
        for (var h = 100, l = 0; o.length > 0;) {
            var c = App.RandomUtils.RandomNoRepeat(o, App.RandomUtils.limit(1, 3), !0);
            h += App.RandomUtils.limit(100, 200);
            for (var g = 0; g < c.length; g++) {
                l = c[g].y - 1;
                var u = GameConst.BoxStationPos[l].x + GameConst.BoxStationDir[l].x * c[g].x,
                    d = GameConst.BoxStationPos[l].y + GameConst.BoxStationDir[l].y * c[g].x;
                e.addZombieCommand(500, l + 1, 1, h, {
                    x: u,
                    y: d
                })
            }
        }
    }, t.TimeStep = 16.7, t
}(SingletonClass);
__reflect(FightSystem.prototype, "FightSystem");
var MessageType;
! function(e) {
    e[e.WindowResize = 1] = "WindowResize", e[e.GoldChange = 2] = "GoldChange", e[e.ZuanshiChange1 = 3] = "ZuanshiChange1", e[e.BombChange1 = 4] = "BombChange1", e[e.GlodNumChange1 = 5] = "GlodNumChange1", e[e.GlodMoneyChange1 = 6] = "GlodMoneyChange1", e[e.DiamondNumChange1 = 7] = "DiamondNumChange1", e[e.DiamondMoneyChange1 = 8] = "DiamondMoneyChange1", e[e.OnShow1 = 9] = "OnShow1", e[e.HeChengFive = 10] = "HeChengFive", e[e.GuidHecheng = 11] = "GuidHecheng", e[e.GuidChuZhen = 12] = "GuidChuZhen", e[e.GuidGouMai = 13] = "GuidGouMai", e[e.videoUpgrade = 14] = "videoUpgrade", e[e.GuidGuanBi = 15] = "GuidGuanBi", e[e.shareVideo = 16] = "shareVideo", e[e.recordStart = 17] = "recordStart", e[e.recordEnd = 18] = "recordEnd", e[e.recordError = 19] = "recordError", e[e.zhongZhi = 20] = "zhongZhi", e[e.hongDian = 21] = "hongDian", e[e.CloseBanner = 22] = "CloseBanner", e[e.OnShouQuan = 23] = "OnShouQuan", e[e.DuanWei = 24] = "DuanWei", e[e.AutoMerge = 25] = "AutoMerge", e[e.GameZhiyinGuan = 26] = "GameZhiyinGuan", e[e.FlushShop = 27] = "FlushShop", e[e.ShanChuZhiYin = 28] = "ShanChuZhiYin", e[e.FlushZhanli = 29] = "FlushZhanli", e[e.ShowDuanWeiTiShi = 30] = "ShowDuanWeiTiShi", e[e.onLoadNativeAD = 31] = "onLoadNativeAD", e[e.onLoadNativeAD1 = 32] = "onLoadNativeAD1", e[e.AdMsg = 33] = "AdMsg", e[e.LoadSubpackage = 34] = "LoadSubpackage", e[e.startCountDown = 35] = "startCountDown", e[e.awardCountDown = 36] = "awardCountDown", e[e.awardCountDown1 = 37] = "awardCountDown1", e[e.SeeVideoEnd = 38] = "SeeVideoEnd", e[e.ResumeBannerTimer = 39] = "ResumeBannerTimer", e[e.StopBannerTimer = 40] = "StopBannerTimer"
}(MessageType || (MessageType = {}));
var UIscene;
! function(e) {
    e[e.ZhuJieMian = 1] = "ZhuJieMian", e[e.ShengYa = 2] = "ShengYa", e[e.ShangDian = 3] = "ShangDian", e[e.ZhuanPan = 4] = "ZhuanPan", e[e.YinHang = 5] = "YinHang", e[e.QianDao = 6] = "QianDao"
}(UIscene || (UIscene = {}));
var GameConst = function() {
    function e() {}
    return e.getYScale = function(t) {
        var i = e.NearH / (e.NearH + t),
            n = .5 * e.NearClipw / i,
            o = n / (.5 * e.FarClipw);
        return o
    }, e.MAP_WIDTH = 720, e.MAP_HEIGHT = 1560, e.MaxPlantID = 42, e.MaxLevel = 40, e.RotSpeed = 10, e.BulletNormal = 1200, e.BulletSpeedUp = 1500, e.BoxStationCount = 6, e.BoxStationPos = [], e.BoxStationDir = [], e.StationPos = [], e.SlotScale = .6, e.UfoFlyPath = [{
        x: 720,
        y: 200
    }, {
        x: 620,
        y: 200
    }, {
        x: 520,
        y: 100
    }, {
        x: 450,
        y: 300
    }, {
        x: 350,
        y: 200
    }, {
        x: 0,
        y: 200
    }], e.EdgeSpace = 30, e.NearClipw = .63 * e.MAP_WIDTH, e.FarClipw = e.MAP_WIDTH, e.Fov = 20, e.StationPOSX = 110, e.StationPOSY = 830, e.StationSpace = 70, e.Station_WIDTH = 55, e.ShadowScale = .1, e.BloodScale = .1, e.BoxWave = 1600, e.BoxSpeed = 38, e.SpeedUpDistance = 700, e.SmallWave = 3e3, e.BoxMoveSpeed = 20, e.AttackDistance = 700, e.CommonBoxTime = 2e4, e.VideoBoxTime = 63e3, e.OpenBoxTime = 7e3, e.UfoTime = 12e4, e.BoxExp = 10, e.BoxGold = 100, e.CrazySpeed = 200, e.Attack = 10, e.Price = 10, e.AppId = "30338089", e.WXBanner = "267044", e.WXVideoAd = "267046", e.InsertAd = "133746", e.JiuGongGe = "267047", e.HengfuBanner = "259014", e.nativeAD = "267045", e.GuangGaoSum = 30, e.ZhuanPanSum = 7200, e.ZuanShiNum = 20, e.WXGameBanerID = "adunit-718f5a5d0e6ed716", e.WXGamePortID = "adunit-1c7595b2b2009195", e
}();
__reflect(GameConst.prototype, "GameConst");
var LineControler = function() {
    function e() {
        this.speed = 0, this.maxSped = 16, this.delay = 60, this.curPoint = new egret.Point, this.endPoint = new egret.Point, this.curDir = new egret.Point, this.lines = new Array, this.moveDir = 0, this.rect = new egret.Rectangle, this.isDie = !1, App.FightSystem.getMapScene().getGoldRect(this.rect)
    }
    return e.prototype.clear = function() {
        for (var e = this, t = 0; t < e.lines.length; t++) e.lines[t].line.clear();
        e.lines.length = 0, null != e.lineHead && (e.lineHead.parent.removeChild(e.lineHead), e.lineHead = null), ObjectPool.push(this)
    }, e.prototype.canRemove = function() {
        return this.isDie && 0 == this.lines.length ? !0 : !1
    }, e.prototype.init = function(e) {
        var t = this;
        return t.curPoint.x = e.x, t.curPoint.y = e.y, t.isDie = !1, t.moveDir = 0, t.speed = 2, t.getOnPoint() ? (t.lineHead ? t.lineHead.parent && (t.lineHead.parent.removeChild(t.lineHead), App.FightSystem.getMapScene().getMapLayer().addChild(t.lineHead)) : (t.lineHead = App.CommonUtils.createBitmap("lineHead_png", App.FightSystem.getMapScene().getMapLayer()), t.lineHead.anchorOffsetX = .5 * t.lineHead.width, t.lineHead.anchorOffsetY = .5 * t.lineHead.height), void t.addOneTrail(4)) : void(t.isDie = !0)
    }, e.prototype.addOneTrail = function(e) {
        var t = this,
            i = ObjectPool.pop("LineTrail"),
            n = App.FightSystem.getMapScene().getMapLayer();
        i.parent && i.parent.removeChild(i), n.addChild(i), i.setPos(t.curPoint.x, t.curPoint.y, t.curDir.x, t.curDir.y), i.scaleY = e / i.height;
        var o = {
            line: i,
            count: t.delay
        };
        t.lines.push(o), t.lineHead && (t.lineHead.rotation = i.rotation, t.lineHead.scaleX = t.lineHead.scaleY = i.scaleX, t.lineHead.x = t.curPoint.x + e * t.curDir.x, t.lineHead.y = t.curPoint.y + e * t.curDir.y)
    }, e.prototype.update = function() {
        for (var e = this, t = 0; t < e.lines.length;) e.lines[t].count--, e.lines[t].line.alpha = e.lines[t].count / e.delay, e.lines[t].count <= 0 ? (e.lines[t].line.clear(), e.lines.splice(t, 1)) : t++;
        if (e.lineHead && e.lines.length > 0 && (e.lineHead.alpha = e.lines[e.lines.length - 1].line.alpha), !e.isDie) {
            var i = egret.Point.distance(e.curPoint, e.endPoint);
            if (e.speed >= i) {
                if (e.addOneTrail(i), e.curPoint.x = e.endPoint.x, e.curPoint.y = e.endPoint.y, !e.getOnPoint()) return App.FightSystem.getMapScene().setLineGlowEffect(), void(e.isDie = !0)
            } else e.addOneTrail(e.speed), e.curPoint.x += e.curDir.x * e.speed, e.curPoint.y += e.curDir.y * e.speed
        }
    }, e.prototype.getOnPoint = function() {
        var e = this;
        if (e.rect.containsPoint(e.curPoint)) return !1;
        if (e.endPoint.x = e.curPoint.x, e.endPoint.y = e.curPoint.y, 0 == e.moveDir) {
            if (e.curPoint.y >= e.rect.top) e.curPoint.y > e.rect.bottom ? e.curPoint.x > e.rect.left + .5 * e.rect.width ? e.endPoint.x = App.RandomUtils.limit(e.rect.left + .5 * e.rect.width, e.rect.right - 20) : e.endPoint.x = App.RandomUtils.limit(e.rect.left + 20, e.rect.left + .5 * e.rect.width) : e.endPoint.x = e.curPoint.x < e.rect.left ? e.rect.left + 20 : e.rect.right - 20;
            else {
                var t = GameConst.NearClipw / (GameConst.NearH / (GameConst.NearH + e.curPoint.y)) - 60,
                    i = .5 * (GameConst.MAP_WIDTH - t),
                    n = i + t,
                    o = i;
                e.lines.length > 0 && (e.curPoint.x >= .5 * GameConst.MAP_WIDTH ? (o = Math.min(e.curPoint.x + .5 * GameConst.MAP_WIDTH, n), App.RandomUtils.limit(o, i + t)) : (n = Math.max(e.curPoint.x - .5 * GameConst.MAP_WIDTH, o), App.RandomUtils.limit(o, n))), e.endPoint.x = App.RandomUtils.limit(o, n)
            }
            e.moveDir = 1
        } else {
            if (e.curPoint.y > e.rect.bottom) e.endPoint.y = e.rect.bottom - 10;
            else {
                var n = e.rect.bottom + 50,
                    a = e.curPoint.y + 2 * e.rect.height;
                a > n && (a = n);
                var r = e.curPoint.y + 3 * e.rect.height;
                r > n && (r = n);
                var s = App.RandomUtils.limit(a, r);
                e.curPoint.x >= e.rect.left && e.curPoint.x <= e.rect.right && s >= e.rect.top ? e.endPoint.y = e.rect.top + 10 : e.endPoint.y = s
            }
            e.moveDir = 0
        }
        if (0 == e.moveDir) {
            var p = (e.curPoint.x - GameConst.EyePos.x) / (e.curPoint.y - GameConst.EyePos.y),
                h = p * (e.endPoint.y - GameConst.EyePos.y);
            e.endPoint.x = h + GameConst.EyePos.x
        }
        return e.curDir.x = e.endPoint.x - e.curPoint.x, e.curDir.y = e.endPoint.y - e.curPoint.y, e.curDir.normalize(1), e.speed += 4, e.speed >= e.maxSped && (e.speed = e.maxSped), !0
    }, e
}();
__reflect(LineControler.prototype, "LineControler"), window.LineControler = LineControler;
var LineTrail = function(e) {
    function t(t) {
        var i = e.call(this, RES.getRes("line_png")) || this;
        return i.anchorOffsetX = .5 * i.width, i.anchorOffsetY = i.height, i.touchEnabled = !1, i
    }
    return __extends(t, e), Object.defineProperty(t.prototype, "Dirx", {
        get: function() {
            return this._dirx
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Diry", {
        get: function() {
            return this._diry
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.clear = function() {
        this.parent && this.parent.removeChild(this), ObjectPool.push(this)
    }, t.prototype.setPos = function(e, t, i, n) {
        var o = this;
        o.x = e, o.y = t, o.scaleX = o.scaleY = GameConst.getYScale(t), null != i && o.setDir(i, n)
    }, t.prototype.setDir = function(e, t) {
        var i = this;
        i._dirx = e, i._diry = t, i.rotation = 180 * Math.atan2(t, e) / Math.PI + 90
    }, t
}(egret.Bitmap);
__reflect(LineTrail.prototype, "LineTrail"), window.LineTrail = LineTrail;
var RoleState;
! function(e) {
    e[e.RoleIdle = 0] = "RoleIdle", e[e.RoleFollow = 1] = "RoleFollow", e[e.RoleDie = 2] = "RoleDie", e[e.RoleAttack = 3] = "RoleAttack"
}(RoleState || (RoleState = {}));
var RoleType;
! function(e) {
    e[e.RoleZomBie = 0] = "RoleZomBie", e[e.RolePlant = 1] = "RolePlant"
}(RoleType || (RoleType = {}));
var RoleAttri = function() {
    function e() {}
    return e
}();
__reflect(RoleAttri.prototype, "RoleAttri");
var Role = function() {
    function e(e, t, i, n, o, a, r) {
        this._skilldata = new SkillData, this._isborning = !1, this._posx = 0, this._posy = 0, this._moveDir = new egret.Point(0, 1), this._dir = new egret.Point(0, -1), this._turnRoation = 270, this._targetTurnRotaion = 270, this._hasSelAim = !1, this.bufMoveSpeed = 1, this.bufAttackSpeed = 1, this.showBloodTime = 0, this._goldPos = new egret.Point, this.openBoxTime = 0;
        var s, p = this;
        s = i || a || r ? App.FightSystem.getMapScene().getRoleLayer() : App.FightSystem.getMapScene().getEnemyLayer(), p._roleContainer = new egret.DisplayObjectContainer, s.addChild(p._roleContainer), p.init(e, t, i, n, o, a, r)
    }
    return e.prototype.init = function(e, t, i, n, o, a, r) {
        var s = this;
        s._status = RoleState.RoleIdle, s._isattack = i, s._station = e, s._uuid = i ? o : o + 1e4, s._avanta = null, s._isBox = a, s._isUfo = r, s._CrossStar = App.FightSystem.getMapScene().getCrossStar(), s.calMoveDir();
        var p = App.GameConfig.getroleItem(t);
        return p ? (s._resid = p.resourcePath, s._attribute || (s._attribute = new RoleAttri), s._attribute.resid = t, s._level = n, s._attribute.resoucePath = p.resourcePath, s._attribute.moveSpeed = p.moveSpeed, s._attribute.attackAimTime = p.attak1AnimLen, s._curblood = s._attribute.Blood = s.randBlood(), s.isVirus2() || s.isVirus3() ? s._curblood = 2 * s._curblood : s.isVirus4() && (s._curblood = 3 * s._curblood), s._attribute.gold = p.jinbi, s._attribute.jingyan = p.jingyan, s._attribute.zuanshi = p.zuanshi, SkillFactory.getSkillData(p.skillID, n, s._skilldata), void s.createAvatan()) : void Log.debug("roleid " + t + "不存在")
    }, e.prototype.isVirus1 = function() {
        return "1" == this._resid ? !0 : !1
    }, e.prototype.isVirus2 = function() {
        return "2" == this._resid ? !0 : !1
    }, e.prototype.isVirus3 = function() {
        return "3" == this._resid ? !0 : !1
    }, e.prototype.isVirus4 = function() {
        return "4" == this._resid ? !0 : !1
    }, e.prototype.randBlood = function() {
        var e = App.UserConfig.getLevel(),
            t = App.GameConfig.getDanGrading()[e - 1].minBlood,
            i = App.GameConfig.getDanGrading()[e - 1].maxBlood;
        return App.RandomUtils.limitInteger(t, i)
    }, e.prototype.addRoleAnim = function(e, t) {
        var i = this,
            n = App.MovieClipManager.load(e, t);
        return n ? (n.x = i._posx, n.y = i._posy, n.scaleX = n.scaleY = 1, i._roleContainer.addChild(n)) : Log.info("无法读取动画帧", e, t), n
    }, e.prototype.createAvatan = function() {
        var e = this;
        if (e.isAttack() ? e.isBox() ? ("2" == e.getAvataID() ? (e._shadow = App.CommonUtils.createBitmap("shipinxiang_png", e._roleContainer), e._avanta = App.CommonUtils.createBitmap("shipinxiang_png", e._roleContainer)) : "1" == e.getAvataID() && (e._shadow = App.CommonUtils.createBitmap("lanxiangzi_png", e._roleContainer), e._avanta = App.CommonUtils.createBitmap("lanxiangzi_png", e._roleContainer)), e._shadow.anchorOffsetX = .5 * e._shadow.width - 20, e._shadow.anchorOffsetY = .5 * e._avanta.height - 20, App.EffectUtils.getshadowfilter(e._shadow), e._avanta.anchorOffsetX = .5 * e._avanta.width, e._avanta.anchorOffsetY = .5 * e._avanta.height + 25) : e.isUfo() ? (e._shadow = App.CommonUtils.createBitmap("shipinfeidie_png", e._roleContainer), e._avanta = App.CommonUtils.createBitmap("shipinfeidie_png", e._roleContainer), e._shadow.anchorOffsetX = .5 * e._shadow.width - 50, e._shadow.anchorOffsetY = -150, e._shadow.y += 100, App.EffectUtils.getshadowfilter(e._shadow), e._avanta.anchorOffsetX = .5 * e._avanta.width, e._avanta.anchorOffsetY = .5 * e._avanta.height + 10) : (e._shadow = App.CommonUtils.createBitmap("fplant" + e._resid + "_png", e._roleContainer), e._shadow.anchorOffsetX = .5 * e._shadow.width - 20, e._shadow.anchorOffsetY = .5 * e._shadow.height - 10, e._shadow.rotation = -5, App.EffectUtils.getshadowfilter(e._shadow), e._avanta = App.CommonUtils.createBitmap("fplant" + e._resid + "_png", e._roleContainer), e._avanta.anchorOffsetX = .5 * e._avanta.width, e._avanta.anchorOffsetY = .5 * e._avanta.height + 50) : (e._shadowClip = e.addRoleAnim("bingdu" + e._resid, "bingdu" + e._resid), e._aniMoveClip = e.addRoleAnim("bingdu" + e._resid, "bingdu" + e._resid), e.isVirus1() ? (e._shadowClip.anchorOffsetX = .5 * e._shadowClip.width - 50, e._shadowClip.anchorOffsetY = .5 * e._shadowClip.height - 40) : e.isVirus4() ? (e._shadowClip.anchorOffsetX = .5 * e._shadowClip.width - 120, e._shadowClip.anchorOffsetY = .5 * e._shadowClip.height - 110) : (e._shadowClip.anchorOffsetX = .5 * e._shadowClip.width - 75, e._shadowClip.anchorOffsetY = .5 * e._shadowClip.height - 65), e._aniMoveClip.gotoAndPlay(1, -1), e._shadowClip.gotoAndPlay(1, -1), App.EffectUtils.getshadowfilter(e._shadowClip), egret.Tween.get(e._roleContainer, {
                loop: !0
            }).to({
                scaleX: e._roleContainer.scaleX + .15
            }, 600).to({
                scaleX: e._roleContainer.scaleX
            }, 600)), e.changeStation(e.getStation()), e.initBlood(), !e.isBox() || "2" != e.getAvataID() && "1" != e.getAvataID()) {
            if (e.isUfo()) {
                var t = e.getY(),
                    i = e.getX();
                e._roleContainer.y = t, e._roleContainer.x = i, e._roleContainer.scaleX = e._roleContainer.scaleY = 1, e._shadow.visible = !0;
                var n = [{
                    x: App.stage.stageWidth,
                    y: t
                }, {
                    x: App.stage.stageWidth - 200,
                    y: t + 50
                }, {
                    x: App.stage.stageWidth - 300,
                    y: t - 50
                }, {
                    x: App.stage.stageWidth - 400,
                    y: t + 50
                }, {
                    x: 0,
                    y: t
                }, {
                    x: App.stage.stageWidth - 500,
                    y: t - 50
                }, {
                    x: App.stage.stageWidth - 400,
                    y: t + 50
                }, {
                    x: App.stage.stageWidth - 300,
                    y: t - 50
                }, {
                    x: App.stage.stageWidth - 200,
                    y: t + 50
                }, {
                    x: App.stage.stageWidth,
                    y: t
                }];
                egret.Tween.get(e._roleContainer, {
                    loop: !1
                }).to({
                    x: n[0].x,
                    y: n[0].y
                }, 800).wait(1e3).to({
                    x: n[1].x,
                    y: n[1].y
                }, 800).wait(500).to({
                    x: n[2].x,
                    y: n[2].y
                }, 800).wait(500).to({
                    x: n[3].x,
                    y: n[3].y
                }, 800).wait(500).to({
                    x: n[4].x,
                    y: n[4].y
                }, 800).wait(1e3).to({
                    x: n[5].x,
                    y: n[5].y
                }, 800).wait(500).to({
                    x: n[6].x,
                    y: n[6].y
                }, 800).wait(500).to({
                    x: n[7].x,
                    y: n[7].y
                }, 800).wait(500).to({
                    x: n[8].x,
                    y: n[8].y
                }, 800).wait(500).to({
                    x: n[9].x,
                    y: n[9].y
                }, 800).call(function() {
                    e.death(!0), App.FightSystem.isProduceUfo = !0
                }).wait(500)
            }
        } else {
            var t = e.getY(),
                i = e.getX();
            e._roleContainer.y = e.getY() - 500, e._roleContainer.x = e.getX() + 200 * (Math.random() - .5), e._roleContainer.scaleX = e._roleContainer.scaleY = 4, e._shadow.visible = !0, egret.Tween.get(e._roleContainer).to({
                y: t,
                x: i,
                scaleX: 1,
                scaleY: 1
            }, 1e3, egret.Ease.bounceOut).call(function() {
                App.EffectUtils.startRotate(e._roleContainer, 100, 10, 200)
            })
        }
    }, e.prototype.removeCurAnim = function() {
        var e = this;
        e._aniMoveClip && e._aniMoveClip.parent && (egret.Tween.removeTweens(e._aniMoveClip), e._aniMoveClip.stop(), e._aniMoveClip.parent.removeChild(e._aniMoveClip), ObjectPool.push(e._aniMoveClip), e._aniMoveClip = null), e._shadowClip && e._shadowClip.parent && (egret.Tween.removeTweens(e._shadowClip), e._shadowClip.stop(), e._shadowClip.parent.removeChild(e._shadowClip), ObjectPool.push(e._shadowClip), e._shadowClip = null)
    }, e.prototype.clear = function() {
        var e = this;
        e.isAttack() || (e.removeCurAnim(), egret.Tween.removeTweens(e._bloodNum)), e._avanta && (e.isAttack() && (e._avanta.parent && e._avanta.parent.removeChild(e._avanta), e._shadow.parent && e._shadow.parent.removeChild(e._shadow)), e._shadow = null, e._avanta = null), e._bloodNum && (e._bloodNum.parent.removeChild(e._bloodNum), ObjectPool.push(e._bloodNum), e._bloodNum = null), e._roleContainer && (egret.Tween.removeTweens(e._roleContainer), e._roleContainer.parent.removeChild(e._roleContainer), e._roleContainer = null), e._aimRole = null, e._CrossStar = null
    }, e.prototype.isAttack = function() {
        return this._isattack
    }, e.prototype.isBox = function() {
        return this._isBox
    }, e.prototype.isUfo = function() {
        return this._isUfo
    }, e.prototype.isGreenBox = function() {
        return "2" == this._resid ? !0 : !1
    }, e.prototype.canRemove = function() {
        return this._status == RoleState.RoleDie ? !0 : !1
    }, e.prototype.getAvanta = function() {
        return this._avanta
    }, e.prototype.getWidth = function() {
        var t = this;
        return t.isAttack() ? this._avanta.width * this._avanta.scaleX : e.BoxSize
    }, e.prototype.getHeight = function() {
        var t = this;
        return t.isAttack() ? this._avanta.height * this._avanta.scaleY : e.BoxSize
    }, e.prototype.isDie = function() {
        return this._status == RoleState.RoleDie
    }, e.prototype.isBorning = function() {
        return this._isborning
    }, e.prototype.getCurblood = function() {
        return this._curblood
    }, e.prototype.setCurBlood = function(e) {
        var t = this;
        if (t._curblood = e, t._bloodNum && (t._bloodNum.text = App.CommonUtils.boxBlood(t._curblood.toString())), t._curblood > 0 && egret.getTimer() - t.showBloodTime > 500) {
            t.playHitEffect();
            var i = t._aniMoveClip.scaleX,
                n = t._shadowClip.scaleX,
                o = t._bloodNum.scaleX;
            egret.Tween.get(t._bloodNum).to({
                scaleX: o + .05,
                scaleY: o + .05
            }, 200).to({
                scaleX: o,
                scaleY: o
            }, 200), egret.Tween.get(t._aniMoveClip).to({
                scaleX: i + .2,
                scaleY: i + .2
            }, 200).to({
                scaleX: i,
                scaleY: i
            }, 200), egret.Tween.get(t._shadowClip).to({
                scaleX: n + .2,
                scaleY: n + .2
            }, 200).to({
                scaleX: n,
                scaleY: n
            }, 200), t.showBloodTime = egret.getTimer()
        }
    }, e.prototype.playHitEffect = function() {
        var e = this,
            t = App.FightSystem.getMapScene().getRoleLayer(),
            i = App.MovieClipManager.load("jizhong", "jizhong");
        i && (i.x = e._posx, i.y = e._posy, i.anchorOffsetX = 0, i.anchorOffsetY = 0, e.isVirus1() ? i.scaleX = i.scaleY = .4 : e.isVirus2() ? i.scaleX = i.scaleY = .6 : e.isVirus3() ? i.scaleX = i.scaleY = .6 : e.isVirus4() && (i.scaleX = i.scaleY = .8), i.rotation = e._roleContainer.rotation, t.addChild(i), App.MovieClipManager.PlayOnceEffect(i))
    }, e.prototype.getStation = function() {
        return this._station
    }, e.prototype.canMerge = function() {
        var e = this;
        return !e.isAttack() || e.isDie() || e.isBox() || e.isUfo() || e.getStation() < 6 || e.getStation() > 16 ? !1 : parseInt(e.getAvataID()) == GameConst.MaxPlantID ? !1 : !0
    }, e.prototype.getY = function() {
        var e = this;
        return e._posy
    }, e.prototype.getX = function() {
        var e = this;
        return e._posx
    }, Object.defineProperty(e.prototype, "ScaleX", {
        get: function() {
            return this._avanta.scaleX
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(e.prototype, "ScaleY", {
        get: function() {
            return this._avanta.scaleY
        },
        enumerable: !0,
        configurable: !0
    }), e.prototype.setXY = function(t, i, n) {
        void 0 === n && (n = !0);
        var o = this,
            a = GameConst.getYScale(i);
        o._posx = t, o._posy = i, o.isAttack() ? o.getStation() > 5 && o.getStation() < 16 ? o.isBox() ? (o._shadow.scaleX = o._shadow.scaleY = e.BoxScale, o._avanta.scaleX = o._avanta.scaleY = e.BoxScale) : (o._shadow.scaleX = o._shadow.scaleY = e.TankScale, o._avanta.scaleX = o._avanta.scaleY = e.TankScale) : (o._avanta.scaleX = o._avanta.scaleY = a * e.FightTankScale, o.isBox() || (o._shadow.scaleX = o._shadow.scaleY = a * e.FightTankScale)) : o.isVirus2() ? (o._aniMoveClip.scaleX = o._aniMoveClip.scaleY = a, o._shadowClip.scaleX = o._shadowClip.scaleY = a - .2, o._bloodNum && (o._bloodNum.scaleX = o._bloodNum.scaleY = .12)) : o.isVirus3() ? (o._aniMoveClip.scaleX = o._aniMoveClip.scaleY = a, o._shadowClip.scaleX = o._shadowClip.scaleY = a - .2, o._bloodNum && (o._bloodNum.scaleX = o._bloodNum.scaleY = .12)) : o.isVirus4() ? (o._aniMoveClip.scaleX = o._aniMoveClip.scaleY = a, o._shadowClip.scaleX = o._shadowClip.scaleY = a - .2, o._bloodNum && (o._bloodNum.scaleX = o._bloodNum.scaleY = .15)) : (o._aniMoveClip.scaleX = o._aniMoveClip.scaleY = a + .2, o._shadowClip.scaleX = o._shadowClip.scaleY = a, o._bloodNum && (o._bloodNum.scaleX = o._bloodNum.scaleY = GameConst.BloodScale)), o._roleContainer.x = t, o._roleContainer.y = i, n && (o._roleContainer.zIndex = i + 6e3)
    }, e.prototype.setRotation = function() {
        var e = this;
        e._roleContainer.rotation = e._turnRoation + 90
    }, e.prototype.resetRotation = function() {
        var e = this;
        e.isAttack() ? e.getStation() > 15 ? (e._turnRoation = e._targetTurnRotaion = 90, e._dir.x = 0, e._dir.y = 1) : (e._turnRoation = e._targetTurnRotaion = 270, e._dir.x = 0, e._dir.y = -1) : e._turnRoation = 270, e.setRotation()
    }, e.prototype.calMoveDir = function() {
        var e = this;
        e._isattack || (e._moveDir.x = GameConst.BoxStationDir[e._station - 1].x, e._moveDir.y = GameConst.BoxStationDir[e._station - 1].y)
    }, e.prototype.setArenaPara = function(e, t) {
        var i = this,
            n = this;
        n._roleContainer.y = e - 500, n._roleContainer.x = e + 200 * (Math.random() - .5), n._roleContainer.scaleX = n._roleContainer.scaleY = 2;
        var o = GameConst.getYScale(t);
        egret.Tween.get(n._roleContainer).to({
            y: t,
            x: e,
            scaleX: o,
            scaleY: o
        }, 1e3, egret.Ease.bounceOut).call(function() {
            i.setXY(e, t), i._isborning = !1
        }), this._isborning = !0
    }, e.prototype.getAvataID = function() {
        return this._attribute ? this._attribute.resoucePath : ""
    }, e.prototype.hurt = function(e) {}, e.prototype.death = function(e) {
        var t = this;
        if (!t.isDie()) {
            if (t.isAttack()) {
                if (!e) {
                    var i = parseInt(t.getAvataID()),
                        n = this.sumcount(i, App.UserConfig.getShopData()[i - 1].jinbicishu),
                        o = App.UserConfig.getPrice();
                    o >= 300 && (o = 300);
                    var a = .5 * (n - n * o * .001);
                    App.UserConfig.addGold(a), App.MessageCenter.dispatch(MessageType.GoldChange.toString());
                    var r = ObjectPool.pop("LineControler");
                    r.init({
                        x: t.getX(),
                        y: t.getY()
                    }), App.SkillManager.addLines(r)
                }
            } else {
                var i = parseInt(t.getAvataID());
                if (t.isVirus1() ? t.playDeathEffect1(3) : t.isVirus2() ? t.playDeathEffect1(4) : t.isVirus3() ? t.playDeathEffect1(2) : t.isVirus4() && t.playDeathEffect1(1), App.SoundManager.playEffect("zhadan_mp3", 1), !e && !GameScene.isArenaMode) {
                    App.SkillManager.getSpeedUp() ? GameConst.BoxGold = this.sumcount(App.UserConfig.getLevel(), 1) : GameConst.BoxGold = .5 * this.sumcount(App.UserConfig.getLevel(), 1), App.UserConfig.addGold(GameConst.BoxGold), App.UserConfig.setExp(GameConst.BoxExp), App.MessageCenter.dispatch(MessageType.GoldChange.toString());
                    var r = ObjectPool.pop("LineControler");
                    r.init({
                        x: t.getX(),
                        y: t.getY()
                    }), App.SkillManager.addLines(r)
                }
            }
            this.changeRoleState(RoleState.RoleDie)
        }
    }, e.prototype.sumcount = function(e, t) {
        var i = Math.round((1 + .5 * t) * Math.pow(e, 3) * (Math.pow(e, 3) / 3 + .5 * Math.pow(e, 2) + e / 6 + 2));
        return i
    }, e.prototype.playDeathEffect1 = function(e) {
        var t = this,
            i = App.FightSystem.getMapScene().getRoleLayer(),
            n = App.MovieClipManager.load("jisui" + e, "jisui" + e);
        n && (n.anchorOffsetX = 0, n.anchorOffsetY = 0, 1 == e ? (n.anchorOffsetX = 136, n.anchorOffsetY = 103, n.scaleX = n.scaleY = .8) : 2 == e ? n.scaleX = n.scaleY = .8 : 3 == e ? n.scaleX = n.scaleY = .8 : 4 == e && (n.scaleX = n.scaleY = .8), n.x = t._posx, n.y = t._posy, i.addChild(n), App.MovieClipManager.PlayOnceEffect(n))
    }, e.prototype.playAttackEffect = function() {
        var e = this,
            t = App.FightSystem.getMapScene().getMapLayer(),
            i = App.MovieClipManager.load("fire", "fire");
        i && (i.x = e._posx + e._dir.x * e.getHeight() * .4, i.y = e._posy + e._dir.y * e.getHeight() * .4, i.scaleX = i.scaleY = .95, i.rotation = e._roleContainer.rotation, t.addChild(i), App.MovieClipManager.PlayOnceEffect(i));
        var n = ObjectPool.pop("Spark");
        n.parent && n.parent.removeChild(n), e._roleContainer.addChild(n), n.x = 0 + e._dir.x * e.getHeight() * .5, n.y = 0 + e._dir.y * e.getHeight() * .5, n.visible = !0, egret.Tween.get(n).wait(100).call(function() {
            n.clear(), n.visible = !1
        })
    }, e.prototype.addGoldCoinEffect = function() {
        var e = this,
            t = App.FightSystem.getMapScene().getRoleLayer(),
            i = ObjectPool.pop("Coin");
        if (!i) return null;
        i.filters || (i.texture = RES.getRes("money_png"), i.filters = [App.EffectUtils.getHFiler()]), t.addChild(i), i.anchorOffsetX = .5 * i.width, i.anchorOffsetY = .5 * i.height;
        var n = e.getY();
        i.x = e.getX(), i.y = n, i.startRoll(), e._getGoldPos(e._goldPos);
        var o = Math.random() > .5 ? 1 : -1,
            a = i.x + o * App.RandomUtils.limit(20, 50),
            r = n - App.RandomUtils.limit(20, 50);
        egret.Tween.get(i).to({
            y: n - 100
        }, 400, egret.Ease.backOut).to({
            y: n
        }, 300, egret.Ease.backOut).wait(350).to({
            x: a,
            y: r
        }, 250).to({
            x: e._goldPos.x,
            y: e._goldPos.y
        }, 500, egret.Ease.sineOut).call(function() {
            App.SoundManager.playEffect("shoujinbi_mp3", 1), i.parent && i.parent.removeChild(i), i.endRoll(), ObjectPool.push(i), App.MessageCenter.dispatch(MessageType.GoldChange.toString())
        })
    }, e.prototype._getGoldPos = function(e) {
        var t = App.FightSystem.getMapScene();
        t && t.getGoldShow() ? t.getGoldShow().localToGlobal(.5 * t.getGoldShow().width, 2 * t.getGoldShow().height, e) : e.x = e.y = 0
    }, e.prototype.deathEffect = function() {
        for (var e, t, i, n, o, a, r, s, p, h, l = this, c = 20, g = App.FightSystem.getMapScene().getRoleLayer(), u = function(c) {
                e = App.RandomUtils.limit(.75 * Math.PI, 2.25 * Math.PI), t = App.RandomUtils.limit(10, 150), i = Math.cos(e), n = Math.sin(e), o = l.getX() + i * t, a = l.getY() + n * t, r = 180 * e / Math.PI, s = .23;
                var u = ObjectPool.pop("explodeBox");
                p = App.RandomUtils.limit(150, 450), h = App.RandomUtils.limit(100, 200), u.x = l.getX(), u.y = l.getY(), u.scaleX = u.scaleY = s, g.addChild(u), egret.Tween.get(u).to({
                    x: o,
                    y: a,
                    rotation: r
                }, p).to({
                    y: a + .5 * t,
                    x: o + i * t * .2
                }, h).call(function() {
                    u.parent.removeChild(u), ObjectPool.push(u)
                })
            }, d = 0; c > d; d++) u(d)
    }, e.prototype.deathEffect1 = function() {
        for (var e, t, i, n, o, a, r, s, p, h, l = this, c = 30, g = App.FightSystem.getMapScene().getRoleLayer(), u = 1, d = function(c) {
                e = App.RandomUtils.limit(.75 * Math.PI, 2.25 * Math.PI), t = App.RandomUtils.limit(10, 150), u = App.RandomUtils.limitInteger(1, 7), i = Math.cos(e), n = Math.sin(e), o = l.getX() + i * t, a = l.getY() + n * t, r = 180 * e / Math.PI, s = App.RandomUtils.limit(.75, .9);
                var d = ObjectPool.popWithExtraKey("explodeCube", u, u + "");
                p = App.RandomUtils.limit(150, 450), h = App.RandomUtils.limit(100, 200), d.x = l.getX(), d.y = l.getY(), d.scaleX = d.scaleY = s, g.addChild(d), egret.Tween.get(d).to({
                    x: o,
                    y: a,
                    rotation: r
                }, p).to({
                    y: a + .5 * t,
                    x: o + i * t * .2
                }, h).call(function() {
                    d.parent.removeChild(d), ObjectPool.push(d)
                })
            }, m = 0; c > m; m++) d(m)
    }, e.prototype.Update = function(e) {
        var t = this;
        if (!t.isDie()) {
            if (t.isBox() && "2" != t.getAvataID() && (t.openBoxTime += e, t.openBoxTime > GameConst.OpenBoxTime)) {
                var i = App.UserConfig.getCurLevel();
                App.FightSystem.addPlantCommand(i, t.getStation(), 1, 0), t.death(!0)
            }
            if (t._isattack) {
                if (t.getStation() > 5 && t.getStation() < 16) return
            } else {
                if (t.isBorning()) return;
                var n = .001 * e * GameConst.BoxMoveSpeed * t.bufMoveSpeed;
                App.SkillManager.getSpeedUp() && (n = .001 * e * GameConst.BoxSpeed * t.bufMoveSpeed);
                var o = t.getY(),
                    a = t.getX();
                t.setXY(a + t._moveDir.x * n, o + t._moveDir.y * n), t.getY() > 800 && App.FightSystem.gameOver()
            }
            if (t._isattack) {
                if (GameScene.isArenaMode && t.getStation() < 6) return;
                if (t._skilldata.curCDTime > 0 && (t._skilldata.curCDTime -= e * t.bufAttackSpeed, t._skilldata.curCDTime <= 0 && (t._hasSelAim || t.setCrossStar(), t._hasSelAim || (t._skilldata.curCDTime = 1))), t._targetTurnRotaion != t._turnRoation) {
                    var r = App.SkillManager.getSpeedUp() ? 2 * GameConst.RotSpeed : GameConst.RotSpeed,
                        s = r / Math.abs(t._turnRoation - t._targetTurnRotaion);
                    s > 1 && (s = 1), t._turnRoation = t._turnRoation * (1 - s) + t._targetTurnRotaion * s, t._dir.x = Math.cos(t._turnRoation * Math.PI / 180), t._dir.y = Math.sin(t._turnRoation * Math.PI / 180), t.setRotation()
                }
                t._targetTurnRotaion == t._turnRoation && (t._hasSelAim ? (t.tryAttack(), App.SkillManager.getSpeedUp() ? t._skilldata.curCDTime = GameConst.CrazySpeed : t._skilldata.curCDTime = 1e3 * t._skilldata.OriCDTime, t.getStation() > 15 && (t._skilldata.curCDTime = 300), t._hasSelAim = !1) : t._CrossStar.visible || t._aimRole && !t._aimRole.isDie() || t.setCrossStar())
            }
        }
    }, e.prototype.setCrossStar = function() {
        var e = this;
        return 0 == e._CrossStar.visible ? void e.selRotateDir() : void e.selRotateDir(e._CrossStar.x, e._CrossStar.y)
    }, e.prototype.selRotateDir = function(e, t) {
        var i = this,
            n = GameConst.AttackDistance;
        App.SkillManager.getSpeedUp() && (n = GameConst.SpeedUpDistance);
        var o, a, r = App.FightSystem.getAttackAimRole(i.getX(), i.getY(), n);
        if (null != e && null != t ? (o = e - i.getX(), a = t - i.getY()) : r && (o = r.getX() - i.getX(), a = r.getY() - i.getY(), i._aimRole = r), null != o && null != a) {
            var s = Math.ceil(180 * Math.atan2(a, o) / Math.PI);
            i.setTurnRoation(s), (r || null != e) && i._skilldata.curCDTime <= 0 && (i._hasSelAim = !0)
        }
    }, e.prototype.setTurnRoation = function(e) {
        var t = this;
        0 > e && (e += 360), t._targetTurnRotaion = e, t._turnRoation - e >= 180 ? e >= 180 ? t._turnRoation -= 360 : t._targetTurnRotaion = 360 + e : t._turnRoation - e <= -180 && (180 >= e ? t._turnRoation += 360 : t._targetTurnRotaion = -360 + e)
    }, e.prototype.tryAttack = function() {
        var e = this,
            t = SkillFactory.CreateSkill(e._skilldata.typeid);
        e.changeRoleState(RoleState.RoleAttack), t.init(e._skilldata, e), App.SkillManager.AddSkill(t), App.SoundManager.playEffect("gongji_mp3", 1), e.playAttackEffect()
    }, e.prototype.clickShoot = function(e, t) {
        var i = this,
            n = e - i.getX(),
            o = t - i.getY(),
            a = Math.ceil(180 * Math.atan2(o, n) / Math.PI);
        i.setTurnRoation(a), i._turnRoation = i._targetTurnRotaion, i._dir.x = Math.cos(i._turnRoation * Math.PI / 180), i._dir.y = Math.sin(i._turnRoation * Math.PI / 180), i.setRotation(), i.tryAttack()
    }, e.prototype.changeRoleState = function(e) {
        var t = this;
        t._status != e && (this._status = e)
    }, e.prototype.initBlood = function() {
        var e = this;
        e.isAttack() || (e._bloodNum = ObjectPool.popWithExtraKey("eui.BitmapLabel", "blood"), e._bloodNum.extraKey || (e._bloodNum.font = "donghuazi_fnt", e._bloodNum.width = 400, e._bloodNum.height = 30, e._bloodNum.textAlign = egret.HorizontalAlign.CENTER, e._bloodNum.verticalAlign = egret.VerticalAlign.MIDDLE, e._bloodNum.anchorOffsetX = 200, e._bloodNum.anchorOffsetY = 0, e._bloodNum.extraKey = "blood", e._bloodNum.y = -10, e._bloodNum.x = 0, e._bloodNum.scaleX = e._bloodNum.scaleY = 1), e._bloodNum.text = App.CommonUtils.boxBlood(e._curblood.toString()), e._bloodNum.parent && e._bloodNum.parent.removeChild(e._bloodNum), e._roleContainer.addChild(e._bloodNum))
    }, e.prototype.changeStation = function(e) {
        var t = this;
        t._station = e;
        var i, n;
        t.isAttack() ? t.isUfo() ? (i = App.stage.stageWidth + t.getWidth(), n = 500) : (i = GameConst.StationPos[t._station - 1].x, n = GameConst.StationPos[t._station - 1].y) : (i = GameConst.BoxStationPos[t._station - 1].x, n = GameConst.BoxStationPos[t._station - 1].y), t.resetRotation(), t.setXY(i, n), t._roleContainer.parent.sortChildren()
    }, e.prototype.setTouchToTop = function() {
        this._roleContainer.zIndex = 2e4, this._roleContainer.parent.sortChildren()
    }, e.BoxScale = .5, e.TankScale = .4, e.FightTankScale = .43, e.BoxSize = 78, e
}();
__reflect(Role.prototype, "Role");
var Spark = function(e) {
    function t(t) {
        var i = e.call(this, RES.getRes("spark_png")) || this;
        return i.anchorOffsetX = .5 * i.width, i.anchorOffsetY = .5 * i.height, i.touchEnabled = !1, i.scaleX = i.scaleY = 12, i.blendMode = egret.BlendMode.ADD, i.alpha = .5, i
    }
    return __extends(t, e), t.prototype.clear = function() {
        this.parent && this.parent.removeChild(this), ObjectPool.push(this)
    }, t
}(egret.Bitmap);
__reflect(Spark.prototype, "Spark"), window.Spark = Spark;
var UILayer;
! function(e) {
    e[e.LAYER_MAP = 1] = "LAYER_MAP", e[e.LAYER_UI = 2] = "LAYER_UI"
}(UILayer || (UILayer = {}));
var GameScene = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._layers = {}, t.stage = App.stage, t
    }
    return __extends(t, e), t.prototype.init = function() {
        var e = this;
        e.rootLayer = new eui.UILayer, this.stage.addChild(e.rootLayer), e.rootLayer.touchEnabled = !0, this.addLayer(UILayer.LAYER_MAP), this.addLayer(UILayer.LAYER_UI), this.getGameConfig();
        var t = function() {
            e.loadUserDataAndStart()
        };
        window.GVHistorySave && window.GVHistorySave.waitForApply ? (console.info("[GVHistorySave] GameScene.init — chờ load cloud save..."), window.GVHistorySave.waitForApply().then(t)) : t()
    }, t.prototype.loadUserDataAndStart = function() {
        console.info("[GVHistorySave] loadUserDataAndStart — đọc UserConfig.Load() và vào game"), window.GVHistorySave && window.GVHistorySave.applyBeforeLoad && window.GVHistorySave.applyBeforeLoad(), this.getUserData(), window.GVHistorySave && window.GVHistorySave.markGameReady && window.GVHistorySave.markGameReady(), this.createFightSystem(), App.SoundManager.setEffectOn(App.UserConfig.getsoundonoff()), App.SoundManager.setBgOn(App.UserConfig.getsoundonoff()), window.GVHistorySave && window.GVHistorySave.startAutoSave && (console.info("[GVHistorySave] Bật save theo sự kiện + auto 180s"), window.GVHistorySave.startAutoSave())
    }, t.prototype.regeditMapTouch = function() {
        this._mapscene && this._mapscene.regeditTouchEvent()
    }, t.prototype.unRegeditMapTouch = function() {
        this._mapscene && this._mapscene.unRegeditTouchEvent()
    }, t.prototype.getUserData = function() {
        App.UserConfig.Load(), App.UserConfig.save()
    }, t.prototype.getGameConfig = function() {
        App.GameConfig.Load()
    }, t.prototype.createFightSystem = function(e) {
        void 0 === e && (e = !1), t.isArenaMode = e, this._mapscene = new mapScene(this.getLayer(UILayer.LAYER_MAP)), this._mapscene.initMap();
        var i = FightSystem.getInstance();
        i.init(this._mapscene), App.UIManager.open("ZhuJieMianView", !1, this.getLayer(UILayer.LAYER_UI))
    }, t.prototype.onExit = function() {
        this.removeAllLayer()
    }, t.prototype.getLayer = function(e) {
        return this._layers[e] ? this._layers[e] : null
    }, t.prototype.addLayer = function(e) {
        var t = this,
            i = new eui.UILayer;
        t.rootLayer.addChild(i), i.touchEnabled = !1, this._layers[e] = i
    }, t.prototype.removeLayer = function(e) {
        this._layers[e] && delete this._layers[e]
    }, t.prototype.layerRemoveAllChild = function(e) {
        this._layers[e] && this._layers[e].removeChildren()
    }, t.prototype.removeAllLayer = function() {
        for (var e in this._layers) this.stage.removeChild(this._layers[e]), delete this._layers[e]
    }, t.isArenaMode = !1, t
}(SingletonClass);
__reflect(GameScene.prototype, "GameScene");
var mapScene = function() {
    function e(e) {
        this.tmpPoint = new egret.Point, this.parent = e, App.MessageCenter.addListener(MessageType.WindowResize.toString(), this.stageOnResize, this), App.MessageCenter.addListener(MessageType.GoldChange.toString(), this.flushData, this)
    }
    return e.prototype.flushData = function() {
        this.goldText.text = App.CommonUtils.getYi1(Math.floor(App.UserConfig.getGold()))
    }, e.prototype.stageOnResize = function() {
        var e = this;
        e.rootLayer && (e.rootLayer.x = .5 * (App.stage.stageWidth - GameConst.MAP_WIDTH), e.rootLayer.y = .5 * (App.stage.stageHeight - GameConst.MAP_HEIGHT), e.map.x = -e.rootLayer.x, e.map.y = -e.rootLayer.y, e.map.width = App.stage.stageWidth, e.map.height = App.stage.stageHeight), e.garbageCan && (e.garbageCan.x = 46, e.garbageCan.y = App.stage.stageHeight - e.rootLayer.y - 88)
    }, e.prototype.initMap = function() {
        0 == GameConst.BoxStationPos.length && (this.calStationPos(), this.calCamera()), this.createMap(), this.createCrossStar()
    }, e.prototype.clear = function() {
        var e = this;
        App.MessageCenter.removeListener(MessageType.WindowResize.toString(), e.stageOnResize, e), e.rootLayer && e.rootLayer.parent && e.rootLayer.parent.removeChild(e.rootLayer), e.rootLayer = null, e._curSelPlant = null, egret.Tween.removeTweens(e.goldShow)
    }, e.prototype.createCrossStar = function() {
        var e = this;
        e.crossStar = App.CommonUtils.createBitmap("crossStar_png", this.plantLayer), App.CommonUtils.setAnchorPos(e.crossStar, .5 * e.crossStar.width, .5 * e.crossStar.height), e.crossStar.visible = !1
    }, e.prototype.calCamera = function() {
        GameConst.NearH = GameConst.NearClipw / 2 / Math.tan(.5 * GameConst.Fov / 180 * Math.PI), GameConst.FarH = GameConst.NearH / (GameConst.NearClipw / GameConst.FarClipw), GameConst.SlideEdgeLen = Math.sqrt(.5 * GameConst.FarClipw * (.5 * GameConst.FarClipw) + GameConst.FarH * GameConst.FarH);
        var e = 2 * GameConst.SlideEdgeLen;
        GameConst.EyePos = new egret.Point(.5 * GameConst.MAP_WIDTH, -GameConst.NearH), GameConst.LEyeDir = PolyTools.rotateVector(0, 1, .5 * GameConst.Fov * Math.PI / 180), GameConst.LEyeEndPos = new egret.Point(GameConst.EyePos.x + GameConst.LEyeDir.x * e, GameConst.EyePos.y + GameConst.LEyeDir.y * e), GameConst.REyeDir = PolyTools.rotateVector(0, 1, .5 * -GameConst.Fov * Math.PI / 180), GameConst.REyeEndPos = new egret.Point(GameConst.EyePos.x + GameConst.REyeDir.x * e, GameConst.EyePos.y + GameConst.REyeDir.y * e);
        for (var t, i = 0, n = (GameConst.NearClipw - 2 * i) / GameConst.BoxStationCount + 1, o = .5 * (GameConst.MAP_WIDTH - GameConst.NearClipw + 2 * i), a = .5 * (GameConst.MAP_HEIGHT - App.stage.stageHeight), r = 0; r < GameConst.BoxStationCount; r++) {
            t = o + .5 * n + r * n, GameConst.BoxStationPos.push({
                x: t,
                y: 0
            });
            var s = new egret.Point;
            s.x = t - GameConst.EyePos.x, s.y = 0 - GameConst.EyePos.y, s.normalize(1), GameConst.BoxStationDir.push(s), GameConst.BoxStationPos[r].x += s.x * a, GameConst.BoxStationPos[r].y += s.y * a
        }
        n = (GameConst.NearClipw - 2 * i) / 5, o = .5 * (GameConst.MAP_WIDTH - GameConst.NearClipw + 2 * i), a = 1 * (GameConst.MAP_HEIGHT - App.stage.stageHeight);
        for (var r = 0; 5 > r; r++) {
            t = o + .5 * n + r * n, GameConst.StationPos.push({
                x: t,
                y: 0
            });
            var s = new egret.Point;
            s.x = t - GameConst.EyePos.x, s.y = 0 - GameConst.EyePos.y, s.normalize(1), GameConst.StationPos[15 + r].x += s.x * a, GameConst.StationPos[15 + r].y += s.y * a
        }
    }, e.prototype.calStationPos = function() {
        if (!(GameConst.StationPos.length > 0)) {
            for (var e, t, i = 30, n = App.stage.stageHeight - .5 * (App.stage.stageHeight - GameConst.MAP_HEIGHT) - 460, o = 100, a = (GameConst.MAP_WIDTH - 2 * i) / 5, r = 0; 15 > r; r++) {
                t = r % 5, e = Math.floor(r / 5);
                var s = {
                    x: i + .5 * a + t * a,
                    y: n + e * o
                };
                GameConst.StationPos.push(s)
            }
            GameConst.StationPos[0].x -= 40, GameConst.StationPos[0].y -= 80, GameConst.StationPos[4].x += 40, GameConst.StationPos[4].y -= 80, GameConst.StationPos[1].x -= 20, GameConst.StationPos[1].y -= 20, GameConst.StationPos[3].x += 20, GameConst.StationPos[3].y -= 20, GameConst.StationPos[2].y -= 20
        }
    }, e.prototype.createTestWall = function() {
        var e;
        e = App.CommonUtils.createBitmap("wall_png", this.mapLayer), e.fillMode = egret.BitmapFillMode.REPEAT, e.x = .5 * GameConst.MAP_WIDTH, e.y = -GameConst.NearH, App.CommonUtils.setAnchorPos(e, e.width, 0), e.height = GameConst.SlideEdgeLen, e.rotation = .5 * GameConst.Fov;
        var t;
        t = App.CommonUtils.createBitmap("wall_png", this.mapLayer), t.fillMode = egret.BitmapFillMode.REPEAT, t.x = .5 * GameConst.MAP_WIDTH, t.y = -GameConst.NearH, App.CommonUtils.setAnchorPos(t, 0, 0), t.height = GameConst.SlideEdgeLen, t.rotation = .5 * -GameConst.Fov
    }, e.prototype.getGoldShow = function() {
        return this.goldShow
    }, e.prototype.getBulletLayer = function() {
        return this.bulletLayer
    }, e.prototype.getRoleLayer = function() {
        return this.roleLayer
    }, e.prototype.getEnemyLayer = function() {
        return this.enemyLayer
    }, e.prototype.getMapLayer = function() {
        return this.mapLayer
    }, e.prototype.getCrossStar = function() {
        return this.crossStar
    }, e.prototype.regeditTouchEvent = function() {
        var e = this;
        e.parent.parent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, e.onTouchBegin, e), e.parent.parent.addEventListener(egret.TouchEvent.TOUCH_MOVE, e.onTouchMove, e), e.parent.parent.addEventListener(egret.TouchEvent.TOUCH_END, e.onTouchEnd, e), e.parent.parent.addEventListener(egret.TouchEvent.TOUCH_CANCEL, e.onTouchEnd, e)
    }, e.prototype.unRegeditTouchEvent = function() {
        var e = this;
        e.parent.parent.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, e.onTouchBegin, e), e.parent.parent.removeEventListener(egret.TouchEvent.TOUCH_MOVE, e.onTouchMove, e), e.parent.parent.removeEventListener(egret.TouchEvent.TOUCH_END, e.onTouchEnd, e), e.parent.parent.removeEventListener(egret.TouchEvent.TOUCH_CANCEL, e.onTouchEnd, e), e.crossStar.visible = !1
    }, e.prototype.createMap = function() {
        var e = this;
        e.rootLayer = new egret.DisplayObjectContainer, e.rootLayer.x = .5 * (App.stage.stageWidth - GameConst.MAP_WIDTH), e.rootLayer.y = .5 * (App.stage.stageHeight - GameConst.MAP_HEIGHT), e.parent.addChild(this.rootLayer), e.mapLayer = new egret.DisplayObjectContainer, e.plantLayer = new egret.DisplayObjectContainer, e.enemyLayer = new egret.DisplayObjectContainer, e.roleLayer = new egret.DisplayObjectContainer, e.bulletLayer = new egret.DisplayObjectContainer, e.rootLayer.addChild(e.mapLayer), e.rootLayer.addChild(e.enemyLayer), e.rootLayer.addChild(e.bulletLayer), e.rootLayer.addChild(e.roleLayer), e.rootLayer.addChild(e.plantLayer), e.enemyLayer.sortableChildren = !0, e.roleLayer.sortableChildren = !0, e.map = App.CommonUtils.createBitmap("map_jpg", e.mapLayer, -e.rootLayer.x, -e.rootLayer.y), e.map.width = App.stage.stageWidth, e.map.height = App.stage.stageHeight, e.goldShow = App.CommonUtils.createBitmap("datingjinbi_png", e.mapLayer, .5 * App.stage.stageWidth, .47 * GameConst.MAP_HEIGHT), App.CommonUtils.setAnchorPos(e.goldShow, .5 * e.goldShow.width, .5 * e.goldShow.height), e.goldShow.scaleX = e.goldShow.scaleY = .9, e.garbageCan = App.CommonUtils.createBitmap("lajitong_png", e.mapLayer, 46, App.stage.stageHeight - e.rootLayer.y - 88), e.garbageCan.anchorOffsetX = .5 * e.garbageCan.width, e.garbageCan.anchorOffsetY = .5 * e.garbageCan.height, e.garbageCan.scaleX = e.garbageCan.scaleY = .8, e.initGoldText(), e.map.touchEnabled = !0, e.goldShow.visible = !1, e.parent.parent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, e.onTouchBegin, e), e.parent.parent.addEventListener(egret.TouchEvent.TOUCH_MOVE, e.onTouchMove, e), e.parent.parent.addEventListener(egret.TouchEvent.TOUCH_END, e.onTouchEnd, e), e.parent.parent.addEventListener(egret.TouchEvent.TOUCH_CANCEL, e.onTouchEnd, e), e.parent.parent.touchEnabled = !0, GameScene.isArenaMode ? this.garbageCan.visible = !1 : this.garbageCan.visible = !0;
        for (var t = 0; 5 > t; t++)
            for (var i = 0; 3 > i; i++) this.addOneCell(t, i)
    }, e.prototype.initGoldText = function() {
        var e = this;
        if (e.goldText = ObjectPool.popWithExtraKey("eui.BitmapLabel", "gold"), !e.goldText.extraKey) {
            var t = 400;
            e.goldText.font = "lsezi_fnt", e.goldText.width = t, e.goldText.height = 50, e.goldText.textAlign = egret.HorizontalAlign.CENTER, e.goldText.verticalAlign = egret.VerticalAlign.MIDDLE, e.goldText.anchorOffsetX = .5 * t, e.goldText.anchorOffsetY = 20, e.goldText.extraKey = "gold", e.goldText.x = e.goldShow.x, e.goldText.y = e.goldShow.y - 50, e.goldText.scaleX = e.goldText.scaleY = 1
        }
        e.goldText.text = App.CommonUtils.getYi1(Math.floor(App.UserConfig.getGold())), e.goldText.parent && e.goldText.parent.removeChild(e.goldText), e.mapLayer.addChild(e.goldText)
    }, e.prototype.getGoldRect = function(e) {
        var t = this,
            i = t.goldShow.scaleX;
        e.x = t.goldShow.x - .5 * t.goldShow.width * i, e.y = t.goldShow.y - .5 * t.goldShow.height * i, e.width = t.goldShow.width * i, e.height = t.goldShow.height * i, e.x += 10, e.width -= 20
    }, e.prototype.setLineGlowEffect = function() {
        var e = this;
        this.goldText.text = App.CommonUtils.getYi1(Math.floor(App.UserConfig.getGold())), App.EffectUtils.setDisplayObjectLight(e.goldShow), egret.Tween.removeTweens(e.goldShow), egret.Tween.get(e.goldShow).wait(200).call(function() {
            e.goldShow.filters = []
        })
    }, e.prototype.addOneCell = function(e, t) {
        var i, n = this,
            o = e + 5 * t + 1;
        i = App.CommonUtils.createBitmap("slot" + o + "_png", n.mapLayer);
        var a = GameConst.StationPos[o - 1];
        i.x = a.x, i.y = a.y, 0 == t ? i.scaleX = i.scaleY = .8 * GameConst.getYScale(i.y) : i.scaleX = i.scaleY = GameConst.SlotScale, i.anchorOffsetX = .5 * i.width, i.anchorOffsetY = .5 * i.height, i.touchEnabled = !1, i.name = "slot" + o, GameScene.isArenaMode && t > 0 ? i.visible = !1 : i.visible = !0
    }, e.prototype.getNearstStation = function(e, t) {
        for (var i, n, o, a = 4e6, r = 0; r < GameConst.StationPos.length && !(r >= 15); r++) i = GameConst.StationPos[r].x - e, n = GameConst.StationPos[r].y - t, i = i * i + n * n, a > i && (a = i, o = r);
        return o + 1
    }, e.prototype.hitRole = function(e, t, i, n) {
        void 0 === n && (n = 40);
        var o = Math.max(i.getWidth() * i.ScaleX, i.getHeight() * i.ScaleY) + n,
            a = e - i.getX(),
            r = t - i.getY();
        return o * o >= a * a + r * r
    }, e.prototype.hasRoleOnStation = function(e) {
        for (var t = App.FightSystem.getAttacker(), i = 0; i < t.length; i++)
            if (t[i].getStation() == e && !t[i].isDie() && !t[i].isUfo()) return t[i];
        return null
    }, e.prototype.hasUfo = function() {
        for (var e = App.FightSystem.getAttacker(), t = 0; t < e.length; t++)
            if (e[t].isUfo()) return e[t];
        return null
    }, e.prototype.onTouchBegin = function(e) {
        var t = this;
        if (!(t._mouseDowntime && egret.getTimer() - t._mouseDowntime < 500)) {
            if (t._mouseDowntime = egret.getTimer(), t._selx = e.stageX, t._sely = e.stageY, null != this._curSelPlant && this._curSelPlant.changeStation(this._curSelPlant.getStation()), t._mouseOverStation) {
                var i = t.mapLayer.getChildByName("slot" + t._mouseOverStation);
                i && (i.filters = []), t._mouseOverStation = null
            }
            this._curSelPlant = null, t.crossStar && t.crossStar.visible && (t.crossStar.visible = !1, App.FightSystem.setCrossStar(t.crossStar));
            var n = t.mapLayer.globalToLocal(e.stageX, e.stageY);
            if (GameScene.isArenaMode) return t.crossStar.visible = !0, t.crossStar.x = n.x, t.crossStar.y = n.y, void App.FightSystem.clickShoot(n.x, n.y);
            var o = t.getNearstStation(n.x, n.y),
                a = t.hasRoleOnStation(o);
            if (a && t.hitRole(n.x, n.y, a)) {
                if (a.isBox()) {
                    if ("2" == a.getAvataID()) App.UIManager.open("HaoHuanLiBaoView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1), a.death(!0), App.FightSystem.isProduce = !0;
                    else if ("1" == a.getAvataID()) {
                        var r = App.UserConfig.getCurLevel();
                        App.FightSystem.addPlantCommand(r, a.getStation(), 1, 0), a.death(!0)
                    }
                    return
                }
                t._curSelPlant = a, t._curSelPlant.setXY(n.x, n.y), t._curSelPlant.setTouchToTop()
            } else {
                var s = t.hasUfo();
                if (s && s._roleContainer.hitTestPoint(e.stageX, e.stageY)) return App.UIManager.open("HaoHuanLiBaoView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1), s.death(!0), void(App.FightSystem.isProduceUfo = !0);
                n.y <= GameConst.FarH - GameConst.NearH + 50 && (t.crossStar.visible = !0, t.crossStar.x = n.x, t.crossStar.y = n.y, App.FightSystem.setCrossStar(t.crossStar))
            }
            App.MessageCenter.dispatch(MessageType.GoldChange.toString())
        }
    }, e.prototype.onTouchMove = function(e) {
        var t = this,
            i = t.mapLayer.globalToLocal(e.stageX, e.stageY);
        if (t.crossStar && t.crossStar.visible) return t.crossStar.x = i.x, t.crossStar.y = i.y, t.crossStar.y > GameConst.FarH - GameConst.NearH + 180 && (t.crossStar.visible = !1), void App.FightSystem.setCrossStar(t.crossStar);
        this._curSelPlant && this._curSelPlant.setXY(i.x, i.y, !1);
        var n = t.getNearstStation(i.x, i.y);
        if (GameConst.StationPos[n - 1].x, GameConst.StationPos[n - 1].y, t._curSelPlant && t._mouseOverStation != n) {
            if (t._mouseOverStation) {
                var o = t.mapLayer.getChildByName("slot" + t._mouseOverStation);
                o && (o.filters = [])
            }
            t._mouseOverStation = n;
            var a = t.mapLayer.getChildByName("slot" + n);
            a && App.EffectUtils.setGlowTagEffect(a)
        }
    }, e.prototype.getCurSel = function() {
        return this._curSelPlant
    }, e.prototype.onTouchEnd = function(e) {
        var t = this;
        if (t.crossStar && t.crossStar.visible) return t.crossStar.visible = !1, void App.FightSystem.setCrossStar(t.crossStar);
        if (t._curSelPlant) {
            if (t._mouseOverStation) {
                var i = t.mapLayer.getChildByName("slot" + t._mouseOverStation);
                i && (i.filters = []), t._mouseOverStation = null
            }
            var n = t.mapLayer.globalToLocal(e.stageX, e.stageY),
                o = t.getNearstStation(n.x, n.y);
            if (t.hitRole(GameConst.StationPos[o - 1].x, GameConst.StationPos[o - 1].y, t._curSelPlant)) {
                var a = t.hasRoleOnStation(o);
                if (null == a || t._curSelPlant == a) 2 == App.UserConfig.getUnLockMaxID() ? 2 == o ? (App.MessageCenter.dispatch(MessageType.GameZhiyinGuan.toString()), t._curSelPlant.changeStation(o)) : t._curSelPlant.changeStation(t._curSelPlant.getStation()) : t._curSelPlant.changeStation(o);
                else if (a.getAvataID() != t._curSelPlant.getAvataID() || a.isBox())
                    if (a.isBox()) this._curSelPlant.changeStation(this._curSelPlant.getStation());
                    else {
                        var r = a.getStation();
                        a.changeStation(this._curSelPlant.getStation()), this._curSelPlant.changeStation(r)
                    }
                else {
                    if (parseInt(a.getAvataID()) >= GameConst.MaxPlantID) return this._curSelPlant.changeStation(this._curSelPlant.getStation()), void App.CommonUtils.showTip(.5 * App.stage.stageWidth, .5 * App.stage.stageHeight, "Mecha đã được nâng cấp lên cấp tối đa!");
                    var s = parseInt(a.getAvataID()) + 1;
                    a.death(!0), t._curSelPlant.death(!0), App.FightSystem.addPlantCommand(s, a.getStation(), 1, 400), t.playMergEffect(a.getStation(), a.getAvataID()), App.SoundManager.playEffect("hecheng_mp3", 1), s > App.UserConfig.getCurMaxLevel() && (App.UserConfig.setCurMaxLevel(s), App.UserConfig.setCurLevel(t.levelMap(s)), App.UIManager.open("JieSuoView", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1)), 1 == App.UserConfig.getUnLockMaxID() && (App.MessageCenter.dispatch(MessageType.ShanChuZhiYin.toString()), App.UserConfig.downUnLock(2))
                }
            } else t.hitLaJiTong() ? App.UIManager.open("ShanChu", !1, App.GameScene.getLayer(UILayer.LAYER_UI), !1, t._curSelPlant) : t._curSelPlant.changeStation(t._curSelPlant.getStation());
            App.MessageCenter.dispatch(MessageType.FlushZhanli.toString()), App.TimerManager.remove(this.delaySave, this), App.TimerManager.doTimer(1e3, 1, this.delaySave, this), this._curSelPlant = null
        }
    }, e.prototype.delaySave = function() {
        var e = App.FightSystem.getAttacker();
        App.UserConfig.serilizeZhiWu(e)
    }, e.prototype.levelMap = function(e) {
        return e >= 1 && 8 > e ? 1 : e >= 8 && 43 > e ? e - 6 : void 0
    }, e.prototype.hitLaJiTong = function() {
        var e = this;
        if (null == e._curSelPlant) return !1;
        var t = App.UIManager.getWindow("ZhuJieMianView");
        if (!t || !t.visible) return !1;
        var i = t.lajitong;
        i.localToGlobal(.5 * i.width, .5 * i.height, e.tmpPoint), e.mapLayer.globalToLocal(e.tmpPoint.x, e.tmpPoint.y, e.tmpPoint);
        var n = e.hitRole(e.garbageCan.x, e.garbageCan.y, e._curSelPlant);
        return n
    }, e.prototype.playMergEffect = function(e, t) {
        var i = this,
            n = GameConst.StationPos[e - 1].x,
            o = GameConst.StationPos[e - 1].y,
            a = GameConst.getYScale(o);
        e > 5 ? a = Role.TankScale : a *= Role.FightTankScale;
        var r = App.CommonUtils.createBitmap("fplant" + t + "_png", i.mapLayer);
        r.anchorOffsetX = .5 * r.width, r.anchorOffsetY = .5 * r.height, r.scaleX = r.scaleY = a, r.x = n - r.width * r.scaleX, r.y = o;
        var s = App.CommonUtils.createBitmap("fplant" + t + "_png", i.mapLayer);
        s.anchorOffsetX = .5 * s.width, s.anchorOffsetY = .5 * s.height, s.scaleX = s.scaleY = a, s.x = n + s.width * s.scaleX, s.y = o, i.mergeEffect(n, o), egret.Tween.get(r).to({
            x: n
        }, 400).call(function() {
            r.parent && r.parent.removeChild(r)
        }), egret.Tween.get(s).to({
            x: n
        }, 400).call(function() {
            s.parent && s.parent.removeChild(s)
        })
    }, e.prototype.mergeEffect = function(e, t) {
        var i = this,
            n = i.plantLayer,
            o = App.MovieClipManager.load("qipao", "qipao");
        o && (o.x = e, o.y = t, o.scaleX = o.scaleY = 1, o.alpha = 1, o.rotation = 800, egret.Tween.get(o).to({
            rotation: 800,
            alpha: 0,
            scaleX: 2.3,
            scaleY: 2.3
        }, 1e3), n.addChild(o), App.MovieClipManager.PlayOnceEffect(o), App.EffectUtils.setGlowEffect(o))
    }, e.prototype.getGrid = function() {
        var e = new egret.Point(GameConst.StationPos[5].x, GameConst.StationPos[5].y),
            t = this.map.localToGlobal(e.x, e.y);
        return t
    }, e.prototype.getsecond = function() {
        var e = new egret.Point(GameConst.StationPos[6].x, GameConst.StationPos[6].y),
            t = this.map.localToGlobal(e.x, e.y);
        return t
    }, e.prototype.gethuapen = function() {
        var e = new egret.Point(GameConst.StationPos[1].x, GameConst.StationPos[1].y),
            t = this.map.localToGlobal(e.x, e.y);
        return t
    }, e
}();
__reflect(mapScene.prototype, "mapScene");
var Bezier1 = function() {
    function e(e, t) {
        this.p0 = e, this.p1 = t
    }
    return e.prototype.changeEnd = function(e, t) {
        this.p1.x = e, this.p1.y = t
    }, e.prototype.getEnd = function(e) {
        e.x = this.p1.x, e.y = this.p1.y
    }, e.prototype.getStart = function(e) {
        e.x = this.p0.x, e.y = this.p0.y
    }, e.prototype.GetPointAtTime = function(e, t) {
        t.x = (1 - e) * this.p0.x + e * this.p1.x, t.y = (1 - e) * this.p0.y + e * this.p1.y
    }, e
}();
__reflect(Bezier1.prototype, "Bezier1");
var Bezier2 = function() {
    function e(e, t, i) {
        this.P0 = e, this.P1 = t, this.P2 = i
    }
    return e.prototype.changeEnd = function(e, t) {
        this.P2.x = e, this.P2.y = t
    }, e.prototype.getEnd = function(e) {
        e.x = this.P2.x, e.y = this.P2.y
    }, e.prototype.getStart = function(e) {
        e.x = this.P0.x, e.y = this.P0.y
    }, e.prototype.GetPointAtTime = function(e, t) {
        var i = this;
        t.x = (1 - e) * (1 - e) * i.P0.x + 2 * e * (1 - e) * i.P1.x + e * e * i.P2.x, t.y = (1 - e) * (1 - e) * i.P0.y + 2 * e * (1 - e) * i.P1.y + e * e * i.P2.y
    }, e.prototype.getDrawSeg = function(e) {
        var t = this;
        return Math.ceil(Math.abs((t.P2.x - t.P0.x) / e))
    }, e
}();
__reflect(Bezier2.prototype, "Bezier2");
var SmoothBezier2 = function() {
    function e(e, t, i) {
        this.total_length = 0, this.STEP = 70;
        var n = this;
        n.P0 = e, n.P1 = t, n.P2 = i, n.init()
    }
    return e.prototype.changeEnd = function(e, t) {
        var i = this;
        i.P2.x = e, i.P2.y = t, i.init()
    }, e.prototype.getEnd = function(e) {
        e.x = this.P2.x, e.y = this.P2.y
    }, e.prototype.getStart = function(e) {
        e.x = this.P0.x, e.y = this.P0.y
    }, e.prototype.init = function() {
        var e = this;
        e.ax = e.P0.x - 2 * e.P1.x + e.P2.x, e.ay = e.P0.y - 2 * e.P1.y + e.P2.y, e.bx = 2 * e.P1.x - 2 * e.P0.x, e.by = 2 * e.P1.y - 2 * e.P0.y, e.A = 4 * (e.ax * e.ax + e.ay * e.ay), e.B = 4 * (e.ax * e.bx + e.ay * e.by), e.C = e.bx * e.bx + e.by * e.by, e.total_length = e.L(1)
    }, e.prototype.s = function(e) {
        var t = this;
        return Math.sqrt(t.A * e * e + t.B * e + t.C)
    }, e.prototype.L = function(e) {
        var t = this,
            i = Math.sqrt(t.C + e * (t.B + t.A * e)),
            n = 2 * t.A * e * i + t.B * (i - Math.sqrt(t.C)),
            o = Math.log(t.B + 2 * Math.sqrt(t.A) * Math.sqrt(t.C)),
            a = Math.log(t.B + 2 * t.A * e + 2 * Math.sqrt(t.A) * i),
            r = 2 * Math.sqrt(t.A) * n,
            s = (t.B * t.B - 4 * t.A * t.C) * (o - a);
        return (r + s) / (8 * Math.pow(t.A, 1.5))
    }, e.prototype.InvertL = function(e, t) {
        for (var i, n = this, o = e;;) {
            if (i = o - (n.L(o) - t) / n.s(o), Math.abs(o - i) < 1e-6) break;
            o = i
        }
        return i
    }, e.prototype.GetPointAtTime = function(e, t) {
        var i = this,
            n = e * i.total_length;
        e = i.InvertL(e, n), t.x = (1 - e) * (1 - e) * i.P0.x + 2 * e * (1 - e) * i.P1.x + e * e * i.P2.x, t.y = (1 - e) * (1 - e) * i.P0.y + 2 * e * (1 - e) * i.P1.y + e * e * i.P2.y
    }, e.prototype.getDrawSeg = function(e) {
        var t = this;
        return Math.ceil(Math.abs((t.P2.x - t.P0.x) / e))
    }, e.prototype.getTotalL = function() {
        return this.total_length
    }, e
}();
__reflect(SmoothBezier2.prototype, "SmoothBezier2");
var Bezier3 = function() {
    function e(e, t, i, n) {
        this.p0 = e, this.p1 = t, this.p2 = i, this.p3 = n
    }
    return e.prototype.changeEnd = function(e, t) {
        this.p3.x = e, this.p3.y = t
    }, e.prototype.getEnd = function(e) {
        e.x = this.p3.x, e.y = this.p3.y
    }, e.prototype.getStart = function(e) {
        e.x = this.p0.x, e.y = this.p0.y
    }, e.prototype.GetPointAtTime = function(e, t) {
        var i = this,
            n = 1 - e,
            o = e * e,
            a = o * e,
            r = n * n,
            s = r * n;
        t.x = i.p0.x * s + 3 * i.p1.x * e * r + 3 * i.p2.x * o * n + i.p3.x * a, t.y = i.p0.y * s + 3 * i.p1.y * e * r + 3 * i.p2.y * o * n + i.p3.y * a
    }, e
}();
__reflect(Bezier3.prototype, "Bezier3");
var BezierN = function() {
    function e(e) {
        this.bezierCtrlNodesArr = new Array, this.tmpPoint = new egret.Point, this.bezierCtrlNodesArr = e
    }
    return e.prototype.changeEnd = function(e, t) {
        var i = this.bezierCtrlNodesArr.length;
        egret.Point.distance(this.bezierCtrlNodesArr[i - 1], this.bezierCtrlNodesArr[i - 2]) < 30 ? (this.bezierCtrlNodesArr[i - 1].x = e, this.bezierCtrlNodesArr[i - 1].y = t) : this.bezierCtrlNodesArr.push(new egret.Point(e, t))
    }, e.prototype.getEnd = function(e) {
        var t = this.bezierCtrlNodesArr.length;
        e.x = this.bezierCtrlNodesArr[t - 1].x, e.y = this.bezierCtrlNodesArr[t - 1].y
    }, e.prototype.getStart = function(e) {
        e.x = this.bezierCtrlNodesArr[0].x, e.y = this.bezierCtrlNodesArr[0].y
    }, e.prototype.GetPointAtTime = function(e, t) {
        var i = this,
            n = 0,
            o = 0,
            a = i.bezierCtrlNodesArr,
            r = a.length - 1;
        a.forEach(function(t, a) {
            a ? (n += i.factorial(r) / i.factorial(a) / i.factorial(r - a) * t.x * Math.pow(1 - e, r - a) * Math.pow(e, a), o += i.factorial(r) / i.factorial(a) / i.factorial(r - a) * t.y * Math.pow(1 - e, r - a) * Math.pow(e, a)) : (n += t.x * Math.pow(1 - e, r - a) * Math.pow(e, a), o += t.y * Math.pow(1 - e, r - a) * Math.pow(e, a))
        }), t.x = n, t.y = o
    }, e.prototype.factorial = function(e) {
        return 1 >= e ? 1 : e * this.factorial(e - 1)
    }, e
}();
__reflect(BezierN.prototype, "BezierN");
var reflectSkill = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._reflectCount = 0, t._rect = new egret.Rectangle, t._tmpPoint = {
            x: 0,
            y: 0
        }, t
    }
    return __extends(t, e), t.prototype.init = function(t, i, n) {
        var o = this;
        e.prototype.init.call(this, t, i), o._starttime = 1e3 * o._Data.flyStartTime, o._reflectCount = 0, o._allEnemy = App.FightSystem.getdefence(), o._bullet = o.addBullet(i), o._speed = o._maxSpeed = App.SkillManager.getSpeedUp() ? GameConst.BulletSpeedUp : GameConst.BulletNormal, o._State = SkillStatus.Start
    }, t.prototype.hitTest = function(e, t, i) {
        var n = this,
            o = i.getX() - e,
            a = i.getY() - t,
            r = Math.max(i.getHeight(), i.getWidth()),
            s = 2 * r * r;
        if (o * o + a * a > s) return !1;
        n._rect.x = i.getX() - .5 * i.getWidth(), n._rect.y = i.getY() - .5 * i.getHeight(), n._rect.width = i.getWidth(), n._rect.height = i.getHeight();
        var p = PolyTools.rayRectangleCast(n._bullet.x, n._bullet.y, e, t, n._rect.left, n._rect.top, n._rect.right, n._rect.bottom);
        return p
    }, t.prototype.Update = function(t) {
        var i = this;
        if (!(i._State != SkillStatus.Start || i._State >= SkillStatus.Over)) {
            i._lapsedTime += t;
            var n = .001 * t * i._speed;
            i._nextFrameX = i._bullet.x + n * i._bullet.Dirx, i._nextFrameY = i._bullet.y + n * i._bullet.Diry, i._Target.length = 0;
            for (var o, a = 0; a < i._allEnemy.length; a++)
                if (!i._allEnemy[a].isDie() && i._allEnemy[a] != i._hurtRole && !i._allEnemy[a].isBorning() && (o = i.hitTest(i._nextFrameX, i._nextFrameY, i._allEnemy[a]))) {
                    i._Target.push(i._allEnemy[a]);
                    break
                } o ? (i._reflectCount++, i._speed *= .9, i._speed < 1e3 && (i._speed = 1e3), 1 == o.edge || 3 == o.edge ? i._bullet.setPos(o.x - 10 * i._bullet._dirx, o.y, -i._bullet._dirx, i._bullet.Diry) : i._bullet.setPos(o.x, o.y - 10 * i._bullet.Diry, i._bullet._dirx, -i._bullet.Diry), i._hurtRole = i._Target[0]) : i.checkEdge(), i._Target.length > 0 && (e.prototype.PlayHitSound.call(this), e.prototype.calDmage.call(this)), i._reflectCount >= 20 || i._bullet.y <= 0 || i._reflectCount >= 1 && i._bullet.y >= .6 * GameConst.MAP_HEIGHT || i._bullet.y >= GameConst.MAP_HEIGHT ? i._State = SkillStatus.Over : App.SkillManager.getSpeedUp() ? App.SkillManager.addTrail(i._bullet.x, i._bullet.y, i._bullet.Dirx, i._bullet.Diry, 0, 2, 10) : App.SkillManager.addTrail(i._bullet.x, i._bullet.y, i._bullet.Dirx, i._bullet.Diry, i._bullet._type, 1, 0)
        }
    }, t.prototype.checkEdge = function() {
        var e, t, i = this,
            n = {
                x: i._bullet.x,
                y: i._bullet.y
            },
            o = {
                x: i._nextFrameX,
                y: i._nextFrameY
            };
        if (i._nextFrameX > .5 * GameConst.MAP_WIDTH ? (e = GameConst.REyeDir, t = PolyTools.segmentsIntr(GameConst.EyePos, GameConst.REyeEndPos, n, o, !0)) : (e = GameConst.LEyeDir, t = PolyTools.segmentsIntr(GameConst.EyePos, GameConst.LEyeEndPos, n, o, !0)), t) {
            PolyTools.reflect1(i._bullet.Dirx, i._bullet.Diry, 0, 1, i._tmpPoint);
            var a = i._nextFrameX > .5 * GameConst.MAP_WIDTH ? 1 : -1;
            i._bullet.setPos(t.x - 10 * a, t.y, i._tmpPoint.x, i._tmpPoint.y), i._reflectCount++, i._speed *= .9, i._speed < 1e3 && (i._speed = 1e3)
        } else i._bullet.setPos(i._nextFrameX, i._nextFrameY)
    }, t.prototype.clear = function() {
        e.prototype.clear.call(this), this._bullet && this._bullet.clear(), this._hurtRole = null
    }, t
}(Skill);
__reflect(reflectSkill.prototype, "reflectSkill");
var roleItem = function() {
    function e() {}
    return e
}();
__reflect(roleItem.prototype, "roleItem");
var SkillItem = function() {
    function e() {}
    return e
}();
__reflect(SkillItem.prototype, "SkillItem");
var zombieItem = function() {
    function e() {}
    return e
}();
__reflect(zombieItem.prototype, "zombieItem");
var TuiGuang = function() {
    function e() {}
    return e
}();
__reflect(TuiGuang.prototype, "TuiGuang");
var DanGrading = function() {
    function e() {}
    return e
}();
__reflect(DanGrading.prototype, "DanGrading");
var GameConfig = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.rolesItems = {}, t.skillItems = {}, t.zombieItems = {}, t.danGrading = [], t.tuiguangData = [], t.tuiguangC = [], t.tuiguangSix = [], t.exhibitionFour = [], t.moreGameL = [], t.moreGameR = [], t.tuiguangTop = [], t
    }
    return __extends(t, e), t.getBasicUrl = function() {
        return t.basicUrl
    }, t.getShareTitle = function() {
        return t.shareTitle
    }, t.getShareImg = function() {
        return t.shareImg
    }, t.getShareImgID = function() {
        return t.shareImgID
    }, t.getShareContent = function() {
        return t.shareConent
    }, t.getsharequery = function() {
        return t.query
    }, t.getKey = function() {
        return this.key
    }, t.prototype.Load = function() {
        var e = this,
            t = RES.getRes("game_json");
        if (t) {
            for (var i = 0, n = t.role; i < n.length; i++) {
                var o = n[i],
                    a = new roleItem;
                a.id = o.id, a.name = o.name, a.resourcePath = o.resourcePath, a.resourceAnimPath = o.resourceAnimPath, a.blood = o.blood, a.moveSpeed = o.moveSpeed, a.attak1AnimLen = o.attak1AnimLen, a.dieAnimLen = o.dieAnimLen, a.jingyan = o.jingyan, a.zuanshi = o.zuanshi, a.jinbi = o.jinbi, a.skillID = o.skillID, a.jinbicishu = o.jinbicishu, a.zuanshicishu = o.zuanshicishu, a.zhanli = o.zhanli, e.rolesItems[a.id] = a
            }
            for (var r = 0, s = t.skill; r < s.length; r++) {
                var o = s[r],
                    a = new SkillItem;
                a.id = o.id, a.name = o.name, a.type = o.type, a.distance = o.distance, a.duration = o.duration, a.flySpeed = o.flySpeed, a.flyStartTime = o.flyStartTime, a.hurt = o.hurt, a.hurtTime = o.hurtTime, a.OriCDTime = o.OriCDTime, a.flymodePath = o.flymodePath, a.para = o.para, e.skillItems[a.id] = a
            }
            for (var p = 0, h = t.zombie; p < h.length; p++) {
                var o = h[p],
                    a = new zombieItem;
                a.id = o.id, a.changjing = o.changjing, a.mingzi = o.mingzi, a.jibie = o.jibie, a.jiangshi = o.jiangshi, a.jieshao = o.jieshao, e.zombieItems[a.id] = a
            }
            e.danGrading = t.danGrading, e.tuiguangData = t.tuiguang, e.tuiguangC = t.exhibitionC, e.tuiguangSix = t.exhibitionSix, e.exhibitionFour = t.exhibitionFour, e.moreGameL = t.MoreGameL, e.moreGameR = t.MoreGameR, e.tuiguangTop = t.tuiguangTop
        }
    }, t.prototype.getroleItem = function(e) {
        var t = this;
        return t.rolesItems[e]
    }, t.prototype.getSkillItem = function(e) {
        var t = this;
        return t.skillItems[e]
    }, t.prototype.getzombieItem = function(e) {
        var t = this;
        return t.zombieItems[e]
    }, t.prototype.getDanGrading = function() {
        var e = this;
        return e.danGrading
    }, t.prototype.getTuiGuang = function() {
        var e = this;
        return e.tuiguangData
    }, t.prototype.getTuiGuangC = function() {
        var e = this;
        return e.tuiguangC
    }, t.prototype.getTuiGuangS = function() {
        var e = this;
        return e.tuiguangSix
    }, t.prototype.getMoreGameL = function() {
        var e = this;
        return e.moreGameL
    }, t.prototype.getMoreGameR = function() {
        var e = this;
        return e.moreGameR
    }, t.prototype.getMoreGameF = function() {
        var e = this;
        return e.exhibitionFour
    }, t.prototype.gettuiguangT = function() {
        var e = this;
        return e.tuiguangTop
    }, t.basicUrl = "", t.shareTitle = "植物打僵尸", t.shareConent = "僵尸即将来袭，快武装植物，保护脑子", t.shareImg = "", t.shareImgID = "M8gtsueaRIiNpVFfqauglw", t.query = "swanid=0", t.key = "wf2GzzNv5yw0vjrsEP9mNA37UeEQKdbD", t.GameType = "weixin", t.AdShow = !1, t.BannerSwitch = !1, t.AdSwitch = !0, t
}(SingletonClass);
__reflect(GameConfig.prototype, "GameConfig");
var SkillFactory = function() {
    function e() {}
    return e.CreateSkill = function(e) {
        var t = null;
        return t = new reflectSkill
    }, e.getSkillData = function(e, t, i) {
        var n = App.GameConfig.getSkillItem(e);
        return n ? (i || (i = new SkillData), i.resid = e, i.level = t, i.typeid = n.type, i.distance = n.distance, i.duration = n.duration, i.OriCDTime = i.curCDTime = n.OriCDTime, i.hurt = n.hurt, i.hurtTime = n.hurtTime, i.flySpeed = n.flySpeed, i.flyStartTime = n.flyStartTime, i.flymodepath = n.flymodePath, i.para = n.para, i) : (Log.debug("技能ID" + e + "不存在"), null)
    }, e
}();
__reflect(SkillFactory.prototype, "SkillFactory");
var SkillManager = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t._skills = new Array, t._needAddSkill = new Array, t.trails = new Array, t.Lines = new Array, t.isSpeedUp = !1, t
    }
    return __extends(t, e), t.prototype.setSpeedUp = function(e) {
        this.isSpeedUp = e
    }, t.prototype.getSpeedUp = function() {
        return this.isSpeedUp
    }, t.prototype.Update = function(e) {
        for (var t = this, i = 0; i < t._needAddSkill.length; i++) t.AddSkill(t._needAddSkill[i]);
        t._needAddSkill.length = 0;
        for (var i = 0; i < t._skills.length;) t._skills[i].isOver() ? (t._skills[i].clear(), t._skills.splice(i, 1)) : (t._skills[i].Update(e), i++);
        for (var i = 0; i < t.trails.length;) t.trails[i].update(), t.trails[i].isDie() ? t.trails.splice(i, 1) : i++;
        for (var i = 0; i < t.Lines.length;) t.Lines[i].update(), t.Lines[i].canRemove() ? (t.Lines[i].clear(), t.Lines.splice(i, 1)) : i++
    }, t.prototype.AddSkill = function(e) {
        this._skills.push(e)
    }, t.prototype.delayAddSkill = function(e) {
        this._needAddSkill.push(e)
    }, t.prototype.addTrail = function(e, t, i, n, o, a, r) {
        for (var s = this, p = 1; a >= p; p++) {
            var h = void 0;
            h = o > 0 ? ObjectPool.popWithExtraKey("EnhanceTrail", o, o) : ObjectPool.pop("Trail");
            var l = App.FightSystem.getMapScene().getBulletLayer();
            h.parent && h.parent.removeChild(h), l.addChild(h), h.init(e - i * p * r, t - n * p * r, i, n), s.trails.push(h)
        }
    }, t.prototype.addLines = function(e) {
        this.Lines.push(e)
    }, t.prototype.clear = function() {
        for (var e = this, t = 0; t < e._skills.length; t++) e._skills[t].clear();
        this._skills.length = 0;
        for (var t = 0; t < e._needAddSkill.length; t++) e._needAddSkill[t].clear();
        this._needAddSkill.length = 0;
        for (var t = 0; t < e.trails.length; t++) e.trails[t].clear();
        e.trails.length = 0;
        for (var t = 0; t < e.Lines.length; t++) e.Lines[t].clear();
        e.Lines.length = 0
    }, t
}(SingletonClass);
__reflect(SkillManager.prototype, "SkillManager");
var Trail = function(e) {
    function t(i) {
        var n = e.call(this, RES.getRes(t.getResName(i))) || this;
        return n._frame = 20, n.anchorOffsetX = .5 * n.width, n.anchorOffsetY = .5 * n.height, n.touchEnabled = !1, n
    }
    return __extends(t, e), Object.defineProperty(t.prototype, "Dirx", {
        get: function() {
            return this._dirx
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Diry", {
        get: function() {
            return this._diry
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Frame", {
        get: function() {
            return this._frame
        },
        enumerable: !0,
        configurable: !0
    }), t.getResName = function(e) {
        return "shadow_png"
    }, t.prototype.clear = function() {
        this.parent && this.parent.removeChild(this), ObjectPool.push(this)
    }, t.prototype.init = function(e, i, n, o) {
        var a = this;
        a.x = e, a.y = i, a._FovScale = a.scaleX = a.scaleY = GameConst.getYScale(i), a._frame = t.MaxCount - 5, null != n && a.setDir(n, o)
    }, t.prototype.setDir = function(e, t) {
        var i = this;
        i._dirx = e, i._diry = t, i.rotation = 180 * Math.atan2(t, e) / Math.PI + 90
    }, t.prototype.update = function() {
        var e = this;
        if (e._frame > 0 && e._frame--, 0 == e._frame) return void e.clear();
        var i = e._frame / t.MaxCount;
        e.scaleX = e.scaleY = i * e._FovScale * .8
    }, t.prototype.isDie = function() {
        return 0 == this.Frame
    }, t.MaxCount = 20, t
}(egret.Bitmap);
__reflect(Trail.prototype, "Trail"), window.Trail = Trail;
var SoundRes = function() {
    function e() {}
    return e.eventSoundList = [{
        name: "dabojiangshi_mp3",
        path: "resource/assets/sound/dabojiangshi.mp3"
    }, {
        name: "dianji_mp3",
        path: "resource/assets/sound/dianji.mp3"
    }, {
        name: "gongji_mp3",
        path: "resource/assets/sound/gongji.mp3"
    }, {
        name: "hecheng_mp3",
        path: "resource/assets/sound/hecheng.mp3"
    }, {
        name: "shoujinbi_mp3",
        path: "resource/assets/sound/shoujinbi.mp3"
    }, {
        name: "zhadan_mp3",
        path: "resource/assets/sound/zhadan.mp3"
    }], e
}();
__reflect(SoundRes.prototype, "SoundRes");
var Mp3 = function() {
    function e() {}
    return e.loadEventSound = function() {
        this.eventSoundList = SoundRes.eventSoundList.map(function(e) {
            return e.context = wx.createInnerAudioContext(), e.context.src = e.path, e
        })
    }, e.playBgm = function(e) {
        var t = this;
        this.bgm && this.bgm.pause(), this.eventSoundList.map(function(i) {
            i.name == e && i.context && (t.bgm = i.context)
        }), this.bgm && (this.bgm.loop = !0), this.bgm && this.bgm.play()
    }, e.stopBGM = function() {
        this.bgm && this.bgm.pause()
    }, e.playEffect = function(e) {
        this.eventSoundList.map(function(t) {
            t.name == e && t.context && t.context.play()
        })
    }, e.bgm = null, e.eventSoundList = null, e
}();
__reflect(Mp3.prototype, "Mp3");