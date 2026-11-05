window.__require = function t(e, n, o) {
    function a(c, i) {
        if (!n[c]) {
            if (!e[c]) {
                var s = c.split("/");
                if (s = s[s.length - 1], !e[s]) {
                    var l = "function" == typeof __require && __require;
                    if (!i && l) return l(s, !0);
                    if (r) return r(s, !0);
                    throw new Error("Cannot find module '" + c + "'")
                }
                c = s
            }
            var u = n[c] = {
                exports: {}
            };
            e[c][0].call(u.exports, function(t) {
                return a(e[c][1][t] || t)
            }, u, u.exports, t, e, n, o)
        }
        return n[c].exports
    }
    for (var r = "function" == typeof __require && __require, c = 0; c < o.length; c++) a(o[c]);
    return a
}({
    AdWindow: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "06b1d1J5Y9K+477tBOimOgJ", "AdWindow");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Manager/SoundManager"),
            c = t("../Const/SoundConst"),
            i = t("../Manager/WindowManager"),
            s = t("../Manager/GameEventManager"),
            l = t("../Const/EventConst"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.btnCancel = null, e.btnAd = null, e.adNode = null, e.adTxt = null, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    this.init(), this.addEvent()
                }, e.prototype.init = function() {
                    var t = this;
                    if (r.default.instance.stopMusic(), !window.h5api) return t.adTxt.string = "Quảng cáo đã hết\nQuay lại vào ngày mai", void(this.btnAd.interactable = !1);
                    window.h5api.canPlayAd(function(e) {
                        console.log("Có mở quảng cáo không?", e.canPlayAd, "Số lần còn lại", e.remain), e.canPlayAd && e.remain > 0 || (t.adTxt.string = "Quảng cáo đã hết\nQuay lại vào ngày mai", t.btnAd.interactable = !1)
                    })
                }, e.prototype.addEvent = function() {
                    this.btnCancel.node.on(cc.Node.EventType.TOUCH_END, this.onCancel, this), this.btnAd.node.on(cc.Node.EventType.TOUCH_END, this.onAd, this)
                }, e.prototype.onCancel = function(t) {
                    i.default.instance.closeWindow(this.node), r.default.instance.playMusic(c.SoundConst.GAME_BG), s.GameEventManager.intance.postMsg(l.EventConst.SWITCH_ROLE)
                }, e.prototype.onAd = function(t) {
                    if (this.btnAd.interactable) {
                        window.h5api ? this.showAd() : this.continue()
                    }
                }, e.prototype.showAd = function() {
                    var t = this;
                    window.h5api.playAd(function(e) {
                        console.log("Mã:" + e.code + ", Mới:" + e.message), 1e4 === e.code ? console.log("Bắt đầu cuộc chơi") : 10001 === e.code ? (console.log("Chơi lại"), t.continue()) : (console.log("Ngoại lệ quảng cáo"), t.onCancel(null))
                    })
                }, e.prototype.continue = function() {
                    i.default.instance.closeWindow(this.node), r.default.instance.playMusic(c.SoundConst.GAME_BG), s.GameEventManager.intance.postMsg(l.EventConst.LOOK_AD_COMPLETE)
                }, a([d(cc.Button)], e.prototype, "btnCancel", void 0), a([d(cc.Button)], e.prototype, "btnAd", void 0), a([d(cc.Node)], e.prototype, "adNode", void 0), a([d(cc.Label)], e.prototype, "adTxt", void 0), e = a([p], e)
            }(cc.Component);
        n.default = f, cc._RF.pop()
    }, {
        "../Const/EventConst": "EventConst",
        "../Const/SoundConst": "SoundConst",
        "../Manager/GameEventManager": "GameEventManager",
        "../Manager/SoundManager": "SoundManager",
        "../Manager/WindowManager": "WindowManager"
    }],
    AwardLayer: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1114bXyz95LgJDmRVLVLL1M", "AwardLayer");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            c = r.ccclass,
            i = r.property,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.label = null, e.text = "hello", e
                }
                return o(e, t), e.prototype.start = function() {}, a([i(cc.Label)], e.prototype, "label", void 0), a([i], e.prototype, "text", void 0), e = a([c], e)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    BattlePanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7693bjgamtPgIvziAjqNAqK", "BattlePanel");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Char/BattleRole"),
            c = t("../Char/Mst"),
            i = t("../Char/Role"),
            s = t("../Const/EventConst"),
            l = t("../Manager/GameEventManager"),
            u = t("../Extend/GameTool"),
            p = t("../Manager/GameDataManager"),
            d = t("../Prop/PropUse"),
            f = t("../Const/SoundConst"),
            h = t("../Manager/SoundManager"),
            g = cc._decorator,
            y = g.ccclass,
            _ = g.property,
            v = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.roleIdle = null, e.roleAttack = null, e.mstIdle = null, e.mstAttack = null, e.mask = null, e.content = null, e.maskNode = null, e.maskItem = null, e.roleHpPro = null, e.roleHpMask = null, e.mstHpPro = null, e.mstHpMask = null, e.maskArr = [], e.type = 0, e.currRole = null, e.roleNode = null, e.mstNode = null, e.battleRole = null, e.battleMst = null, e.battleHead = null, e.btnAttack = null, e.btnClose = null, e.speed = 20, e.roleHp = 100, e.mstHp = 100, e.isPC = !1, e.canMove = !1, e.winNode = null, e.loseNode = null, e.money = -1, e.propList = [], e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    var t = this;
                    this.init(), this.addEvent(), this.mask.on(cc.Node.EventType.TOUCH_END, function() {}, this), this.btnClose.on(cc.Node.EventType.TOUCH_END, function() {
                        t.node.destroy()
                    }, this), this.btnAttack.node.on(cc.Node.EventType.TOUCH_END, this.onAttack, this), this.content.scale = 1.5, this.content.runAction(cc.scaleTo(2, 1)), this.schedule(function() {
                        if (t.maskArr.length > 0) {
                            var e = Math.floor(t.maskArr.length * Math.random());
                            (n = t.maskArr[e]).active = !1, u.default.removeFromArr(n, t.maskArr)
                        }
                        if (t.maskArr.length > 0) {
                            var n;
                            e = Math.floor(t.maskArr.length * Math.random());
                            (n = t.maskArr[e]).active = !1, u.default.removeFromArr(n, t.maskArr)
                        }
                    }, 0, cc.macro.REPEAT_FOREVER, 0), this.scheduleOnce(this.onRoleRound, 2), h.default.instance.playMusic(f.SoundConst.BATTLE_BG)
                }, e.prototype.setDate = function(t) {
                    this.type = t
                }, e.prototype.init = function() {
                    this.currRole = p.GameDataManager.instance.currRole, this.isPC = this.currRole.isPC, this.initMask();
                    var t = null;
                    switch (this.type) {
                        case 0:
                            t = u.default.getPrefabNode("Game/Prefab/mst" + this.type)
                    }
                    t && (this.battleMst = t.getComponent(c.default), t.setPosition(this.mstIdle.getPosition()), this.content.addChild(t)), this.mstNode = t;
                    var e = u.default.getPrefabNode("Game/Prefab/role");
                    e.removeComponent(i.default), this.battleRole = e.getComponent(r.default), e.setPosition(this.roleIdle.getPosition()), this.content.addChild(e), this.roleNode = e, this.battleHead.getComponent(cc.Sprite).spriteFrame = u.default.getSingleSpriteFrame("Game/Texture/head" + this.currRole.roleType), this.canNotAttack()
                }, e.prototype.addEvent = function() {
                    l.GameEventManager.intance.registerMsg(s.EventConst.ROLE_ROUND, this.onRoleRound, this), l.GameEventManager.intance.registerMsg(s.EventConst.MST_ROUND, this.onMstRound, this)
                }, e.prototype.removeEvent = function() {
                    l.GameEventManager.intance.unregisterMsg(s.EventConst.ROLE_ROUND, this.onRoleRound, this), l.GameEventManager.intance.unregisterMsg(s.EventConst.MST_ROUND, this.onMstRound, this)
                }, e.prototype.initMask = function() {
                    for (var t = 0; t < 10; t++)
                        for (var e = 0; e < 19; e++) {
                            var n = cc.instantiate(this.maskItem);
                            n.active = !0, n.setPosition(cc.v2(64 * e, 64 * t)), this.maskNode.addChild(n), this.maskArr.push(n)
                        }
                }, e.prototype.onRoleRound = function(t) {
                    var e = this;
                    this.canMove = !0, this.isPC ? this.scheduleOnce(function() {
                        e.attack()
                    }, 1 + 2 * Math.random()) : this.canAttack()
                }, e.prototype.canNotAttack = function() {
                    this.btnAttack.interactable = !1, this.canMove = !1
                }, e.prototype.canAttack = function() {
                    this.btnAttack.interactable = !0
                }, e.prototype.onAttack = function(t) {
                    this.btnAttack.interactable && (h.default.instance.playEffect(f.SoundConst.BUTTON), this.attack())
                }, e.prototype.attack = function() {
                    var t = this;
                    this.canNotAttack();
                    var e = Math.floor(30 * (1 - Math.abs(this.battleHead.x) / 180));
                    this.roleNode.runAction(cc.sequence(cc.jumpTo(.5, this.roleAttack.getPosition(), 200, 1), cc.callFunc(function() {
                        t.battleRole.setAction(r.ACTION_TYPE.ATTACK, !1), t.scheduleOnce(function() {
                            h.default.instance.playEffect(f.SoundConst.ATTACK), t.mstHp -= e, t.mstHp <= 0 && (t.mstHp = 0)
                        }, .2)
                    }))), this.scheduleOnce(function() {
                        t.roleNode.runAction(cc.sequence(cc.jumpTo(.5, t.roleIdle.getPosition(), 200, 1), cc.delayTime(.3), cc.callFunc(function() {
                            0 != t.mstHp ? l.GameEventManager.intance.postMsg(s.EventConst.MST_ROUND) : t.win()
                        })))
                    }, 1.2)
                }, e.prototype.onMstRound = function(t) {
                    var e = this;
                    this.mstNode.runAction(cc.sequence(cc.jumpTo(.5, this.mstAttack.getPosition(), 200, 1), cc.callFunc(function() {
                        e.battleMst.setAction(r.ACTION_TYPE.ATTACK, !1), h.default.instance.playEffect(f.SoundConst.ATTACK), e.roleHp -= 10, e.roleHp <= 0 && (e.roleHp = 0)
                    }))), this.scheduleOnce(function() {
                        e.mstNode.runAction(cc.sequence(cc.jumpTo(.5, e.mstIdle.getPosition(), 200, 1), cc.delayTime(.3), cc.callFunc(function() {
                            0 != e.roleHp ? l.GameEventManager.intance.postMsg(s.EventConst.ROLE_ROUND) : e.lose()
                        })))
                    }, 1.2)
                }, e.prototype.update = function(t) {
                    var e = this.roleHp / 100;
                    this.roleHpPro.progress > e ? this.roleHpPro.progress -= .01 : this.roleHpPro.progress = e;
                    var n = this.mstHp / 100;
                    this.mstHpPro.progress > n ? this.mstHpPro.progress -= .1 : this.mstHpPro.progress = n, this.roleHpMask.width = 277 * this.roleHpPro.progress, this.mstHpMask.width = 277 * this.mstHpPro.progress, this.canMove && (this.battleHead.x > 175 && this.speed > 0 && (this.speed *= -1), this.battleHead.x < -175 && this.speed < 0 && (this.speed *= -1), this.battleHead.x += this.speed)
                }, e.prototype.win = function() {
                    var t = this;
                    this.roleHp >= 70 ? (this.money = 1e3, this.propList = [d.PROP_TYPE.TOUZI, d.PROP_TYPE.BINGDONG, d.PROP_TYPE.HUOJIAN]) : this.roleHp >= 50 ? (this.money = 1e3, this.propList = [d.PROP_TYPE.TOUZI, d.PROP_TYPE.BINGDONG]) : this.roleHp >= 20 ? (this.money = 500, this.propList = [d.PROP_TYPE.BINGDONG]) : this.money = 300, this.winNode.active = !0, this.winNode.getChildByName("moneyIcon").getChildByName("moneyTxt").getComponent(cc.Label).string = "X" + this.money;
                    for (var e = this.winNode.getChildByName("propList"), n = e.getChildByName("item"), o = 0; o < this.propList.length; o++) {
                        var a = cc.instantiate(n);
                        a.getComponent(cc.Sprite).spriteFrame = u.default.getSingleSpriteFrame("Game/Texture/Prop/" + this.propList[o]), a.active = !0, e.addChild(a)
                    }
                    this.winNode.getChildByName("btnOk").on(cc.Node.EventType.TOUCH_END, function() {
                        t.node.destroy(), p.GameDataManager.instance.currRole.money += t.money;
                        for (var e = 0; e < t.propList.length; e++) p.GameDataManager.instance.currRole.addProp(t.propList[e], 1);
                        l.GameEventManager.intance.postMsg(s.EventConst.SWITCH_ROLE), h.default.instance.playEffect(f.SoundConst.BUTTON), h.default.instance.playMusic(f.SoundConst.GAME_BG)
                    }, this)
                }, e.prototype.lose = function() {
                    var t = this;
                    this.loseNode.active = !0, this.loseNode.getChildByName("moneyIcon").getChildByName("moneyTxt").getComponent(cc.Label).string = "Bị trừ 600 vàng", this.loseNode.getChildByName("btnOk").on(cc.Node.EventType.TOUCH_END, function() {
                        p.GameDataManager.instance.currRole.money -= 600, t.node.destroy(), l.GameEventManager.intance.postMsg(s.EventConst.SWITCH_ROLE), h.default.instance.playEffect(f.SoundConst.BUTTON), h.default.instance.playMusic(f.SoundConst.GAME_BG)
                    }, this)
                }, e.prototype.onDestroy = function() {
                    this.removeEvent()
                }, a([_(cc.Node)], e.prototype, "roleIdle", void 0), a([_(cc.Node)], e.prototype, "roleAttack", void 0), a([_(cc.Node)], e.prototype, "mstIdle", void 0), a([_(cc.Node)], e.prototype, "mstAttack", void 0), a([_(cc.Node)], e.prototype, "mask", void 0), a([_(cc.Node)], e.prototype, "content", void 0), a([_(cc.Node)], e.prototype, "maskNode", void 0), a([_(cc.Node)], e.prototype, "maskItem", void 0), a([_(cc.ProgressBar)], e.prototype, "roleHpPro", void 0), a([_(cc.Node)], e.prototype, "roleHpMask", void 0), a([_(cc.ProgressBar)], e.prototype, "mstHpPro", void 0), a([_(cc.Node)], e.prototype, "mstHpMask", void 0), a([_(cc.Node)], e.prototype, "battleHead", void 0), a([_(cc.Button)], e.prototype, "btnAttack", void 0), a([_(cc.Node)], e.prototype, "btnClose", void 0), a([_(cc.Node)], e.prototype, "winNode", void 0), a([_(cc.Node)], e.prototype, "loseNode", void 0), e = a([y], e)
            }(cc.Component);
        n.default = v, cc._RF.pop()
    }, {
        "../Char/BattleRole": "BattleRole",
        "../Char/Mst": "Mst",
        "../Char/Role": "Role",
        "../Const/EventConst": "EventConst",
        "../Const/SoundConst": "SoundConst",
        "../Extend/GameTool": "GameTool",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/GameEventManager": "GameEventManager",
        "../Manager/SoundManager": "SoundManager",
        "../Prop/PropUse": "PropUse"
    }],
    BattleRole: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "99b7fuMd9VBDK0RRtsrqF+p", "BattleRole");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.ACTION_TYPE = void 0;
        var r, c = t("../Manager/GameDataManager"),
            i = cc._decorator,
            s = i.ccclass,
            l = i.property;
        (function(t) {
            t.IDLE = "idle", t.WALK = "walk", t.ATTACK = "attack", t.DIE = "die"
        })(r = n.ACTION_TYPE || (n.ACTION_TYPE = {}));
        var u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.atlasArr = [], e.circle = null, e.lastStartTime = 0, e.currAction = r.IDLE, e.atlas = null, e.mc = null, e.effectIce = null, e.actionConfig = {
                    idle: {
                        action: "idle",
                        frame: 3,
                        fps: 12
                    },
                    attack: {
                        action: "attack",
                        frame: 12,
                        fps: 24
                    }
                }, e
            }
            return o(e, t), e.prototype.onLoad = function() {
                this.init(), this.addEvent()
            }, e.prototype.init = function() {
                this.role = c.GameDataManager.instance.currRole, this.lastStartTime = Date.now(), this.circle.active = !1, this.atlas = this.atlasArr[this.role.roleType], this.mc = this.node.getChildByName("mc"), this.stepTxt = this.node.getChildByName("stepTxt").getComponent(cc.Label), this.stepTxt.string = "", this.addGoldTxt = this.node.getChildByName("addGoldTxt").getComponent(cc.Label), this.stepTxt.node.active = !1, this.setAction(r.IDLE), this.effectIce = this.node.getChildByName("effectIce"), this.effectIce.active = !1, this.node.scale = 1.5
            }, e.prototype.addEvent = function() {}, e.prototype.update = function(t) {
                this.onUpdateAction()
            }, e.prototype.onUpdateAction = function() {
                var t = this.actionConfig[this.currAction],
                    e = t.fps,
                    n = Math.floor((Date.now() - this.lastStartTime) / 1e3 * e);
                if (n > t.frame) return r.ATTACK == this.currAction ? void this.setAction(r.IDLE, !0) : void this.setAction(this.currAction, !0);
                n %= t.frame;
                var o = t.action;
                this.currAction == r.IDLE && (o += "Back"), o += n, this.mc.scaleX = -1, this.mc.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame(o)
            }, e.prototype.setAction = function(t, e) {
                void 0 === e && (e = !1), (t != this.currAction || e) && (this.currAction = t, this.lastStartTime = Date.now(), r.ATTACK, this.currAction, r.DIE, this.currAction)
            }, a([l(cc.SpriteAtlas)], e.prototype, "atlasArr", void 0), a([l(cc.Node)], e.prototype, "circle", void 0), e = a([s], e)
        }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {
        "../Manager/GameDataManager": "GameDataManager"
    }],
    BuyCellWindow: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d4d85oXc0hBdoOy0a4qq99g", "BuyCellWindow");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Const/DataConst"),
            c = t("../Const/EventConst"),
            i = t("../Manager/GameEventManager"),
            s = t("../Manager/WindowManager"),
            l = t("./WindowBase"),
            u = t("../Manager/SoundManager"),
            p = t("../Const/SoundConst"),
            d = cc._decorator,
            f = d.ccclass,
            h = d.property,
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.costTxt = null, e
                }
                return o(e, t), e.prototype.init = function() {
                    t.prototype.init.call(this), this.costTxt.string = "" + r.DataConst.BUY_CELL_COST
                }, e.prototype.addEvent = function() {
                    t.prototype.addEvent.call(this)
                }, e.prototype.onOk = function(t) {
                    i.GameEventManager.intance.postMsg(c.EventConst.CELL_BE_BUYED), s.default.instance.closeWindow(this.node), u.default.instance.playEffect(p.SoundConst.BUTTON)
                }, a([h(cc.Label)], e.prototype, "costTxt", void 0), e = a([f], e)
            }(l.default);
        n.default = g, cc._RF.pop()
    }, {
        "../Const/DataConst": "DataConst",
        "../Const/EventConst": "EventConst",
        "../Const/SoundConst": "SoundConst",
        "../Manager/GameEventManager": "GameEventManager",
        "../Manager/SoundManager": "SoundManager",
        "../Manager/WindowManager": "WindowManager",
        "./WindowBase": "WindowBase"
    }],
    CellBase: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a6b6brdHTRO3JlbCKJ9UPfX", "CellBase");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Const/EventConst"),
            c = t("../../Manager/GameEventManager"),
            i = cc._decorator,
            s = i.ccclass,
            l = (i.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.cellIndex = -1, e.ownerIndex = -1, e.isPC = !1, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    this.init(), this.addEvent()
                }, e.prototype.start = function() {}, e.prototype.init = function() {
                    this.cellIndex = Number(this.node.getChildByName("indexTxt").getComponent(cc.Label).string)
                }, e.prototype.addEvent = function() {}, e.prototype.cellEvent = function() {
                    this.goOn()
                }, e.prototype.goOn = function() {
                    c.GameEventManager.intance.postMsg(r.EventConst.SWITCH_ROLE)
                }, e = a([s], e)
            }(cc.Component));
        n.default = l, cc._RF.pop()
    }, {
        "../../Const/EventConst": "EventConst",
        "../../Manager/GameEventManager": "GameEventManager"
    }],
    CellBoss: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "c9617UBrMhMeYtxQ9wwYKAB", "CellBoss");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Extend/GameTool"),
            c = t("../../Layer/BattlePanel"),
            i = t("../../Manager/GameDataManager"),
            s = t("./CellBase"),
            l = cc._decorator,
            u = l.ccclass,
            p = (l.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this)
                }, e.prototype.cellEvent = function() {
                    var t = r.default.getPrefabNode("Game/Prefab/battlePanel");
                    t.getComponent(c.default).setDate(1), i.GameDataManager.instance.uiLayer.addChild(t)
                }, e = a([u], e)
            }(s.default));
        n.default = p, cc._RF.pop()
    }, {
        "../../Extend/GameTool": "GameTool",
        "../../Layer/BattlePanel": "BattlePanel",
        "../../Manager/GameDataManager": "GameDataManager",
        "./CellBase": "CellBase"
    }],
    CellDestiny: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "c59c0/INfhAIa3Y/k0cc2gB", "CellDestiny");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Const/SceneAndWindowConst"),
            c = t("../../Manager/WindowManager"),
            i = t("./CellBase"),
            s = cc._decorator,
            l = s.ccclass,
            u = (s.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this)
                }, e.prototype.cellEvent = function() {
                    c.default.instance.openWindow(r.SceneAndWindowConst.DESTINY_WINDOW, [], !1)
                }, e = a([l], e)
            }(i.default));
        n.default = u, cc._RF.pop()
    }, {
        "../../Const/SceneAndWindowConst": "SceneAndWindowConst",
        "../../Manager/WindowManager": "WindowManager",
        "./CellBase": "CellBase"
    }],
    CellGoal: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "bb807xUxdBPMLOxJaMVGvPk", "CellGoal");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Const/EventConst"),
            c = t("../../Manager/GameEventManager"),
            i = t("./CellBase"),
            s = t("../../Manager/GameDataManager"),
            l = t("../../Const/DataConst"),
            u = t("../../Manager/SoundManager"),
            p = t("../../Const/SoundConst"),
            d = t("../../Manager/WindowManager"),
            f = t("../../Const/SceneAndWindowConst"),
            h = cc._decorator,
            g = h.ccclass,
            y = (h.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), c.GameEventManager.intance.registerMsg(r.EventConst.LOOK_AD_COMPLETE, this.onAd, this)
                }, e.prototype.cellEvent = function() {
                    d.default.instance.openWindow(f.SceneAndWindowConst.AD_WINDOW)
                }, e.prototype.onAd = function(t) {
                    s.GameDataManager.instance.currRole.addMoney(l.DataConst.AWORD), u.default.instance.playEffect(p.SoundConst.GET_GOLD), this.scheduleOnce(function() {
                        c.GameEventManager.intance.postMsg(r.EventConst.SWITCH_ROLE)
                    }, 1.5)
                }, e = a([g], e)
            }(i.default));
        n.default = y, cc._RF.pop()
    }, {
        "../../Const/DataConst": "DataConst",
        "../../Const/EventConst": "EventConst",
        "../../Const/SceneAndWindowConst": "SceneAndWindowConst",
        "../../Const/SoundConst": "SoundConst",
        "../../Manager/GameDataManager": "GameDataManager",
        "../../Manager/GameEventManager": "GameEventManager",
        "../../Manager/SoundManager": "SoundManager",
        "../../Manager/WindowManager": "WindowManager",
        "./CellBase": "CellBase"
    }],
    CellLayer: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "092b7kBBIBKyal87zXxU7ol", "CellLayer");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.CELL_TYPE = void 0;
        var r, c = t("../Char/Cell/CellStart"),
            i = t("../Char/Cell/CellNormal"),
            s = t("../Manager/GameDataManager"),
            l = t("../Char/Cell/CellDestiny"),
            u = t("../Char/Cell/CellLucky"),
            p = t("../Char/Cell/CellMst"),
            d = t("../Char/Cell/CellBoss"),
            f = t("../Char/Cell/CellGoal"),
            h = t("../Char/Cell/CellNull"),
            g = cc._decorator,
            y = g.ccclass;
        g.property;
        (function(t) {
            t[t.NORMAL = 0] = "NORMAL", t[t.START = 1] = "START", t[t.GOLD = 2] = "GOLD", t[t.SIXa = 3] = "SIXa", t[t.DESTINY = 4] = "DESTINY", t[t.d = 5] = "d", t[t.BOSS = 6] = "BOSS", t[t.BATTLE = 7] = "BATTLE", t[t.LUCKY = 8] = "LUCKY", t[t.NULL = 100] = "NULL"
        })(r = n.CELL_TYPE || (n.CELL_TYPE = {}));
        var _ = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.cellWidth = 88, e.cellHeight = 52, e.cellArr = [], e
            }
            return o(e, t), e.prototype.onLoad = function() {
                this.initCell()
            }, e.prototype.initCell = function() {
                s.GameDataManager.instance.cellLayer = this, this.cellCount = this.node.childrenCount;
                for (var t = 0; t < this.cellCount; t++) {
                    var e = this.node.children[t],
                        n = Number(e.getChildByName("indexTxt").getComponent(cc.Label).string);
                    this.addCellScript(e);
                    var o = Math.floor(e.getPosition().x / this.cellWidth + .5) * this.cellWidth,
                        a = Math.floor(e.getPosition().y / this.cellHeight + .5) * this.cellHeight;
                    e.setPosition(o, a), e.zIndex = -a / this.cellHeight, e.getChildByName("indexTxt").active = !1, this.cellArr[n] = e
                }
            }, e.prototype.addCellScript = function(t) {
                switch (Number(t.getComponent(cc.Sprite).spriteFrame.name)) {
                    case r.NORMAL:
                        t.addComponent(i.default);
                        break;
                    case r.START:
                        t.addComponent(c.default);
                        break;
                    case r.GOLD:
                        t.addComponent(f.default);
                        break;
                    case r.DESTINY:
                        t.addComponent(l.default);
                        break;
                    case r.BATTLE:
                        t.addComponent(p.default);
                        break;
                    case r.BOSS:
                        t.addComponent(d.default);
                        break;
                    case r.LUCKY:
                        t.addComponent(u.default);
                        break;
                    case r.NULL:
                        t.addComponent(h.default)
                }
            }, e = a([y], e)
        }(cc.Component);
        n.default = _, cc._RF.pop()
    }, {
        "../Char/Cell/CellBoss": "CellBoss",
        "../Char/Cell/CellDestiny": "CellDestiny",
        "../Char/Cell/CellGoal": "CellGoal",
        "../Char/Cell/CellLucky": "CellLucky",
        "../Char/Cell/CellMst": "CellMst",
        "../Char/Cell/CellNormal": "CellNormal",
        "../Char/Cell/CellNull": "CellNull",
        "../Char/Cell/CellStart": "CellStart",
        "../Manager/GameDataManager": "GameDataManager"
    }],
    CellLucky: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "5340es+l8xMzbG5KuQWeYeM", "CellLucky");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Extend/GameTool"),
            c = t("./CellBase"),
            i = t("../../Manager/GameDataManager"),
            s = cc._decorator,
            l = s.ccclass,
            u = (s.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this)
                }, e.prototype.cellEvent = function() {
                    i.GameDataManager.instance.uiLayer.addChild(r.default.getPrefabNode("Game/Prefab/luckDrawPanel"))
                }, e = a([l], e)
            }(c.default));
        n.default = u, cc._RF.pop()
    }, {
        "../../Extend/GameTool": "GameTool",
        "../../Manager/GameDataManager": "GameDataManager",
        "./CellBase": "CellBase"
    }],
    CellMst: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "01f15Nn43BG1KYqOTQjisxi", "CellMst");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Extend/GameTool"),
            c = t("../../Layer/BattlePanel"),
            i = t("../../Manager/GameDataManager"),
            s = t("./CellBase"),
            l = cc._decorator,
            u = l.ccclass,
            p = (l.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this)
                }, e.prototype.cellEvent = function() {
                    var t = r.default.getPrefabNode("Game/Prefab/battlePanel");
                    t.getComponent(c.default).setDate(0), i.GameDataManager.instance.uiLayer.addChild(t)
                }, e = a([u], e)
            }(s.default));
        n.default = p, cc._RF.pop()
    }, {
        "../../Extend/GameTool": "GameTool",
        "../../Layer/BattlePanel": "BattlePanel",
        "../../Manager/GameDataManager": "GameDataManager",
        "./CellBase": "CellBase"
    }],
    CellNormal: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "6f2d6iEBSRCN7h645+wou8p", "CellNormal");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Const/DataConst"),
            c = t("../../Const/EventConst"),
            i = t("../../Const/SceneAndWindowConst"),
            s = t("../../Manager/GameEventManager"),
            l = t("../../Manager/GameDataManager"),
            u = t("../../Manager/WindowManager"),
            p = t("./CellBase"),
            d = t("../../Extend/GameTool"),
            f = t("../../Const/SoundConst"),
            h = t("../../Manager/SoundManager"),
            g = cc._decorator,
            y = g.ccclass,
            _ = (g.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this)
                }, e.prototype.addEvent = function() {
                    t.prototype.addEvent.call(this), s.GameEventManager.intance.registerMsg(c.EventConst.CELL_BE_BUYED, this.onBeBuyed, this), s.GameEventManager.intance.registerMsg(c.EventConst.ROCKET, this.onRocket, this)
                }, e.prototype.cellEvent = function() {
                    var t = l.GameDataManager.instance.currRole;
                    this.ownerIndex < 0 ? t.money < r.DataConst.BUY_CELL_COST ? this.goOn() : this.isPC ? Math.random() > .2 ? s.GameEventManager.intance.postMsg(c.EventConst.CELL_BE_BUYED) : this.goOn() : u.default.instance.openWindow(i.SceneAndWindowConst.BUY_CELL_WINDOW, [], !1) : t.roleIndex == this.ownerIndex ? this.goOn() : s.GameEventManager.intance.postMsg(c.EventConst.OPEN_COST_GOLD_WINDOW, ["Bên kia thu phí cầu đường", -r.DataConst.CELL_COST, r.DataConst.CELL_COST])
                }, e.prototype.onBeBuyed = function(t) {
                    var e = l.GameDataManager.instance.currRole;
                    e.cellIndex == this.cellIndex && this.setOwner(e)
                }, e.prototype.setOwner = function(t) {
                    var e = this;
                    if (null != t) {
                        this.ownerIndex = t.roleIndex, t.money -= r.DataConst.BUY_CELL_COST;
                        var n = r.DataConst.CELL_COLOR[this.ownerIndex];
                        this.node.runAction(cc.sequence(cc.tintTo(.8, n.r, n.g, n.b), cc.delayTime(.3), cc.callFunc(function() {
                            e.goOn()
                        })))
                    } else this.node.runAction(cc.sequence(cc.tintTo(.8, 255, 255, 255), cc.delayTime(.3), cc.callFunc(function() {
                        e.ownerIndex = -1, s.GameEventManager.intance.postMsg(c.EventConst.ENABLE_SLICE_BUTTON)
                    })))
                }, e.prototype.onRocket = function(t) {
                    var e = this;
                    if (t.detail == this.cellIndex) {
                        var n = this,
                            o = d.default.getPrefabNode("Game/Prefab/rocket");
                        o.setPosition(this.node.x, this.node.y + 700), this.node.getParent().addChild(o), o.runAction(cc.sequence(cc.moveTo(.5, this.node.getPosition()), cc.callFunc(function() {
                            var t = d.default.getPrefabNode("Game/Prefab/bomb");
                            t.setPosition(e.node.getPosition()), l.GameDataManager.instance.mc.node.addChild(t), t.getComponent(cc.Animation).play(), t.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, function() {
                                t.destroy(), n.setOwner(null)
                            }, null), o.destroy(), h.default.instance.playEffect(f.SoundConst.BOOM)
                        })))
                    }
                }, e = a([y], e)
            }(p.default));
        n.default = _, cc._RF.pop()
    }, {
        "../../Const/DataConst": "DataConst",
        "../../Const/EventConst": "EventConst",
        "../../Const/SceneAndWindowConst": "SceneAndWindowConst",
        "../../Const/SoundConst": "SoundConst",
        "../../Extend/GameTool": "GameTool",
        "../../Manager/GameDataManager": "GameDataManager",
        "../../Manager/GameEventManager": "GameEventManager",
        "../../Manager/SoundManager": "SoundManager",
        "../../Manager/WindowManager": "WindowManager",
        "./CellBase": "CellBase"
    }],
    CellNull: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9edfemfSnlMWaCshSVve5hc", "CellNull");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("./CellBase"),
            c = cc._decorator,
            i = c.ccclass,
            s = (c.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this)
                }, e.prototype.cellEvent = function() {
                    var t = this;
                    this.scheduleOnce(function() {
                        t.goOn()
                    }, 1)
                }, e = a([i], e)
            }(r.default));
        n.default = s, cc._RF.pop()
    }, {
        "./CellBase": "CellBase"
    }],
    CellStart: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "8d921kkm/VALoYTz1QsWu/D", "CellStart");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Const/EventConst"),
            c = t("../../Manager/GameEventManager"),
            i = t("../../Extend/GameTool"),
            s = t("../../Manager/GameDataManager"),
            l = t("../BattleRole"),
            u = t("../Role"),
            p = t("./CellBase"),
            d = cc._decorator,
            f = d.ccclass,
            h = (d.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this)
                }, e.prototype.start = function() {
                    var e = this;
                    t.prototype.start.call(this), this.createRole(0), this.scheduleOnce(function() {
                        e.createRole(1)
                    }, .5), this.scheduleOnce(function() {
                        c.GameEventManager.intance.postMsg(r.EventConst.ENABLE_SLICE_BUTTON)
                    }, 1), s.GameDataManager.instance.startCellIndex = this.cellIndex, c.GameEventManager.intance.postMsg(r.EventConst.SWITCH_ROLE_COMPLETE)
                }, e.prototype.createRole = function(t) {
                    var e = i.default.getPrefabNode("Game/Prefab/role");
                    e.setPosition(this.node.getPosition()), e.removeComponent(l.default), e.getComponent(u.default).setData(t, Number(this.node.name)), this.node.getParent().getParent().addChild(e)
                }, e = a([f], e)
            }(p.default));
        n.default = h, cc._RF.pop()
    }, {
        "../../Const/EventConst": "EventConst",
        "../../Extend/GameTool": "GameTool",
        "../../Manager/GameDataManager": "GameDataManager",
        "../../Manager/GameEventManager": "GameEventManager",
        "../BattleRole": "BattleRole",
        "../Role": "Role",
        "./CellBase": "CellBase"
    }],
    CostGoldWindow: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "921bfa5VZdIGI0LqeeHaoea", "CostGoldWindow");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Const/EventConst"),
            c = t("../Manager/GameDataManager"),
            i = t("../Manager/GameEventManager"),
            s = t("../Manager/WindowManager"),
            l = t("./WindowBase"),
            u = t("../Manager/SoundManager"),
            p = t("../Const/SoundConst"),
            d = cc._decorator,
            f = d.ccclass,
            h = (d.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.otherAdd = 0, e
                }
                return o(e, t), e.prototype.init = function() {
                    t.prototype.init.call(this)
                }, e.prototype.addEvent = function() {
                    t.prototype.addEvent.call(this)
                }, e.prototype.onOk = function(t) {
                    c.GameDataManager.instance.currRole.addMoney(Number(this.node.getChildByName("content").getChildByName("goldTxt").getComponent(cc.Label).string)), c.GameDataManager.instance.getOtherRole().addMoney(this.otherAdd), i.GameEventManager.intance.postMsg(r.EventConst.SWITCH_ROLE), s.default.instance.closeWindow(this.node), u.default.instance.playEffect(p.SoundConst.BUTTON)
                }, e = a([f], e)
            }(l.default));
        n.default = h, cc._RF.pop()
    }, {
        "../Const/EventConst": "EventConst",
        "../Const/SoundConst": "SoundConst",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/GameEventManager": "GameEventManager",
        "../Manager/SoundManager": "SoundManager",
        "../Manager/WindowManager": "WindowManager",
        "./WindowBase": "WindowBase"
    }],
    DataConst: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "31509gYyIFLcZf/rPBLgpD0", "DataConst"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.DataConst = void 0;
        var o = function() {
            function t() {}
            return t.CELL_COLOR = [cc.color(255, 150, 150, 255), cc.color(150, 255, 150, 255), cc.color(150, 150, 255, 255)], t.ROLE_COLOR = [cc.color(255, 0, 0, 255), cc.color(0, 255, 0, 255), cc.color(0, 0, 255, 255)], t.MONEY = 1e4, t.AWORD = 1e3, t.BUY_CELL_COST = 500, t.CELL_COST = 300, t.POPR_COUNT_TOTAL = 8, t.prop = {
                0: {
                    name: "Điều khiển xúc xắc",
                    des: "Ném số bạn muốn"
                },
                1: {
                    name: "Bom",
                    des: "Ném quả bom vào đối thủ, khiến hắn dùng 1000 vàng để điều trị"
                },
                2: {
                    name: "Cà rốt độc",
                    des: "Hạ độc đối thủ, trong 2 lượt\nchỉ có thể tiến 1 bước"
                },
                3: {
                    name: "Kẹp",
                    des: "Kẹp đối thủ và ở lại 1 lượt"
                },
                4: {
                    name: "Khinh khí cầu",
                    des: "Có thể bay và đi được x2 quãng đường của viên xúc xắc\ntrong lượt này"
                },
                5: {
                    name: "Quay sang ngón tay",
                    des: "Làm cho cầu thủ đối phương quay lại vị trí cũ"
                },
                6: {
                    name: "Quả cầu Băng",
                    des: "Đóng băng đối thủ để hắn\nkhông thể hoạt động trong 3 lượt"
                },
                7: {
                    name: "Tên lửa",
                    des: "Nếu ô hiện tại thuộc sở hữu của đối thủ, hãy phá hủy nó"
                }
            }, t
        }();
        n.DataConst = o, cc._RF.pop()
    }, {}],
    DestinyWindow: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1195cEBCWBJpK5kViRwPH4Y", "DestinyWindow");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.DESTINY_TYPE = void 0;
        var r, c = t("../Const/DataConst"),
            i = t("../Manager/GameDataManager"),
            s = t("../Manager/WindowManager"),
            l = t("./WindowBase"),
            u = t("../Manager/SoundManager"),
            p = t("../Const/SoundConst"),
            d = cc._decorator,
            f = d.ccclass,
            h = d.property;
        (function(t) {
            t[t.LOST_ALL_PROP = 0] = "LOST_ALL_PROP", t[t.ALL_PROP_ADD_ONE = 1] = "ALL_PROP_ADD_ONE", t[t.LOST_HALF_MONEY = 2] = "LOST_HALF_MONEY", t[t.ADD_HALF_MONEY = 3] = "ADD_HALF_MONEY", t[t.RETURN_START = 4] = "RETURN_START"
        })(r = n.DESTINY_TYPE || (n.DESTINY_TYPE = {}));
        var g = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.wordTxt = null, e.spirit = null, e.fadeInNode = null, e.canClick = !1, e.destinyIndex = -1, e
            }
            return o(e, t), e.prototype.init = function() {
                var e = this;
                t.prototype.init.call(this), this.btnOk = this.fadeInNode.getChildByName("btnOk"), this.wordTxt.string = "" + c.DataConst.BUY_CELL_COST, this.spirit.scaleY = .85, this.spirit.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1, 1), cc.jumpBy(.5, cc.Vec2.ZERO, 30, 1), cc.scaleTo(.1, 1, .85)))), this.destinyIndex = Math.floor(5 * Math.random()), this.showTxt(), this.fadeInNode.opacity = 0, this.fadeInNode.runAction(cc.sequence(cc.delayTime(.5), cc.fadeIn(2), cc.callFunc(function() {
                    e.canClick = !0
                })))
            }, e.prototype.addEvent = function() {
                t.prototype.addEvent.call(this)
            }, e.prototype.showTxt = function() {
                switch (this.destinyIndex) {
                    case r.LOST_ALL_PROP:
                        this.wordTxt.string = "Mất toàn bộ vật phẩm";
                        break;
                    case r.ALL_PROP_ADD_ONE:
                        this.wordTxt.string = "+1 tất cả vật phẩm";
                        break;
                    case r.LOST_HALF_MONEY:
                        this.wordTxt.string = "Mất một nửa số vàng";
                        break;
                    case r.ADD_HALF_MONEY:
                        this.wordTxt.string = "Tăng 50% số vàng";
                        break;
                    case r.RETURN_START:
                        this.wordTxt.string = "Trở về điểm Bắt đầu"
                }
            }, e.prototype.onOk = function(t) {
                if (this.canClick) {
                    var e = i.GameDataManager.instance.currRole;
                    switch (this.destinyIndex) {
                        case r.LOST_ALL_PROP:
                            e.lostAllProp();
                            break;
                        case r.ALL_PROP_ADD_ONE:
                            e.addAllProp(1);
                            break;
                        case r.LOST_HALF_MONEY:
                            e.money = e.money / 2;
                            break;
                        case r.ADD_HALF_MONEY:
                            e.money = 1.5 * e.money;
                            break;
                        case r.RETURN_START:
                            e.moveToCell(i.GameDataManager.instance.startCellIndex)
                    }
                    s.default.instance.closeWindow(this.node), this.goOn(), u.default.instance.playEffect(p.SoundConst.BUTTON)
                }
            }, a([h(cc.Label)], e.prototype, "wordTxt", void 0), a([h(cc.Node)], e.prototype, "spirit", void 0), a([h(cc.Node)], e.prototype, "fadeInNode", void 0), e = a([f], e)
        }(l.default);
        n.default = g, cc._RF.pop()
    }, {
        "../Const/DataConst": "DataConst",
        "../Const/SoundConst": "SoundConst",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/SoundManager": "SoundManager",
        "../Manager/WindowManager": "WindowManager",
        "./WindowBase": "WindowBase"
    }],
    EndWindow: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "11391UFUlxEPLUud2GDOUuv", "EndWindow");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Const/SceneAndWindowConst"),
            c = t("../Manager/SceneManager"),
            i = t("../Manager/WindowManager"),
            s = t("../Manager/GameDataManager"),
            l = t("../Manager/SoundManager"),
            u = t("../Const/SoundConst"),
            p = cc._decorator,
            d = p.ccclass,
            f = p.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.btnReturn = null, e.win0 = null, e.win1 = null, e.lose0 = null, e.lose1 = null, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    this.btnReturn.node.on(cc.Node.EventType.TOUCH_END, this.onReturn, this), 0 == s.GameDataManager.instance.loser ? (this.lose0.active = !0, this.win1.active = !0) : (this.lose1.active = !0, this.win0.active = !0)
                }, e.prototype.onReturn = function(t) {
                    i.default.instance.closeWindows([]), c.default.instance.runScene(r.SceneAndWindowConst.MAIN_SCENE), l.default.instance.playEffect(u.SoundConst.BUTTON)
                }, a([f(cc.Button)], e.prototype, "btnReturn", void 0), a([f(cc.Node)], e.prototype, "win0", void 0), a([f(cc.Node)], e.prototype, "win1", void 0), a([f(cc.Node)], e.prototype, "lose0", void 0), a([f(cc.Node)], e.prototype, "lose1", void 0), e = a([d], e)
            }(cc.Component);
        n.default = h, cc._RF.pop()
    }, {
        "../Const/SceneAndWindowConst": "SceneAndWindowConst",
        "../Const/SoundConst": "SoundConst",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/SceneManager": "SceneManager",
        "../Manager/SoundManager": "SoundManager",
        "../Manager/WindowManager": "WindowManager"
    }],
    EventConst: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "bb346fUWkZNXqvxAPmRbn73", "EventConst"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.EventConst = void 0;
        var o = function() {
            function t() {}
            return t.GAME_START = "GAME_START", t.GAME_END = "GAME_END", t.ROLE_TURN = "ROLE_TURN", t.GO = "GO", t.SLICE = "SLICE", t.ENABLE_SLICE_BUTTON = "ENABLE_SLICE_BUTTON", t.UNENABLE_SLICE_BUTTON = "UNENABLE_SLICE_BUTTON", t.SWITCH_ROLE = "SWITCH_ROLE", t.SWITCH_ROLE_COMPLETE = "SWITCH_ROLE_COMPLETE", t.CELL_BE_BUYED = "CELL_BE_BUYED", t.ROCKET = "ROCKET", t.CAMERA_FOLLOW = "CAMERA_FOLLOW", t.OPEN_SWITCH_ROLE_WINDOW = "OPEN_SWITCH_ROLE_WINDOW", t.OPEN_COST_GOLD_WINDOW = "OPEN_COST_GOLD_WINDOW", t.ROLE_ROUND = "ROLE_ROUND", t.MST_ROUND = "MST_ROUND", t.AD_COMPLETE = "AD_COMPLETE", t.LOOK_AD_COMPLETE = "LOOK_AD_COMPLETE", t
        }();
        n.EventConst = o, cc._RF.pop()
    }, {}],
    ExitWindow: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "92faeBIRnlK95jvqJbc9IiH", "ExitWindow");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Const/SceneAndWindowConst"),
            c = t("../Manager/SceneManager"),
            i = t("../Manager/WindowManager"),
            s = t("../Const/SoundConst"),
            l = t("../Manager/SoundManager"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.btnOk = null, e.btnCancel = null, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    this.btnOk.node.on(cc.Node.EventType.TOUCH_END, this.onOk, this), this.btnCancel.node.on(cc.Node.EventType.TOUCH_END, this.onCancel, this)
                }, e.prototype.onOk = function(t) {
                    i.default.instance.closeWindows([]), c.default.instance.runScene(r.SceneAndWindowConst.MAIN_SCENE), l.default.instance.playEffect(s.SoundConst.BUTTON)
                }, e.prototype.onCancel = function(t) {
                    i.default.instance.closeWindow(this.node), l.default.instance.playEffect(s.SoundConst.BUTTON)
                }, a([d(cc.Button)], e.prototype, "btnOk", void 0), a([d(cc.Button)], e.prototype, "btnCancel", void 0), e = a([p], e)
            }(cc.Component);
        n.default = f, cc._RF.pop()
    }, {
        "../Const/SceneAndWindowConst": "SceneAndWindowConst",
        "../Const/SoundConst": "SoundConst",
        "../Manager/SceneManager": "SceneManager",
        "../Manager/SoundManager": "SoundManager",
        "../Manager/WindowManager": "WindowManager"
    }],
    FailWindow: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "86807wm619BurM9GPUTlmM9", "FailWindow");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Manager/SceneManager"),
            c = t("../Manager/SoundManager"),
            i = t("../Const/SoundConst"),
            s = t("../Manager/WindowManager"),
            l = t("../Manager/GameEventManager"),
            u = t("../Const/EventConst"),
            p = t("../Manager/GameDataManager"),
            d = t("../Const/SceneAndWindowConst"),
            f = cc._decorator,
            h = f.ccclass,
            g = f.property,
            y = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.btnReplay = null, e.btnMenu = null, e.btnAd = null, e.adNode = null, e.win0 = null, e.win1 = null, e.lose0 = null, e.lose1 = null, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    this.init(), this.addEvent()
                }, e.prototype.init = function() {
                    if (c.default.instance.stopMusic(), 0 == p.GameDataManager.instance.loser ? (this.lose0.active = !0, this.win1.active = !0) : (this.lose1.active = !0, this.win0.active = !0), window.h5api) {
                        var t = this;
                        window.h5api.canPlayAd(function(e) {
                            console.log("Có mở quảng cáo không?", e.canPlayAd, "Số lần còn lại", e.remain), e.canPlayAd && e.remain > 0 || (t.adNode.active = !1)
                        })
                    } else this.adNode.active = !1
                }, e.prototype.addEvent = function() {
                    this.btnReplay.node.on(cc.Node.EventType.TOUCH_END, this.onReplay, this), this.btnMenu.node.on(cc.Node.EventType.TOUCH_END, this.onMenu, this), this.btnAd.node.on(cc.Node.EventType.TOUCH_END, this.onAd, this)
                }, e.prototype.onReplay = function(t) {
                    r.default.instance.runScene(d.SceneAndWindowConst.GAME_SCENE, "main"), c.default.instance.playEffect(i.SoundConst.BUTTON)
                }, e.prototype.onMenu = function(t) {
                    r.default.instance.runScene(d.SceneAndWindowConst.MAIN_SCENE, "main"), c.default.instance.playEffect(i.SoundConst.BUTTON)
                }, e.prototype.onAd = function(t) {
                    window.h5api ? this.showAd() : this.continue()
                }, e.prototype.showAd = function() {
                    var t = this;
                    window.h5api.playAd(function(e) {
                        console.log("Mã:" + e.code + ", Mới:" + e.message), 1e4 === e.code ? console.log("Bắt đầu cuộc chơi") : 10001 === e.code ? (console.log("Chơi lại"), t.continue()) : console.log("Ngoại lệ quảng cáo")
                    })
                }, e.prototype.continue = function() {
                    s.default.instance.closeWindow(this.node), c.default.instance.playMusic(i.SoundConst.GAME_BG), l.GameEventManager.intance.postMsg(u.EventConst.AD_COMPLETE)
                }, a([g(cc.Button)], e.prototype, "btnReplay", void 0), a([g(cc.Button)], e.prototype, "btnMenu", void 0), a([g(cc.Button)], e.prototype, "btnAd", void 0), a([g(cc.Node)], e.prototype, "adNode", void 0), a([g(cc.Node)], e.prototype, "win0", void 0), a([g(cc.Node)], e.prototype, "win1", void 0), a([g(cc.Node)], e.prototype, "lose0", void 0), a([g(cc.Node)], e.prototype, "lose1", void 0), e = a([h], e)
            }(cc.Component);
        n.default = y, cc._RF.pop()
    }, {
        "../Const/EventConst": "EventConst",
        "../Const/SceneAndWindowConst": "SceneAndWindowConst",
        "../Const/SoundConst": "SoundConst",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/GameEventManager": "GameEventManager",
        "../Manager/SceneManager": "SceneManager",
        "../Manager/SoundManager": "SoundManager",
        "../Manager/WindowManager": "WindowManager"
    }],
    GamData: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b2b60/Id+1DYIJGAIGbUOv+", "GamData"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.GameData = void 0;
        var o = function() {
            function t() {}
            return t.bClick = !1, t
        }();
        n.GameData = o, cc._RF.pop()
    }, {}],
    GameDataManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "6c67373Gc1IhKc5z7hpRmWF", "GameDataManager");
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
        }), n.GameDataManager = void 0;
        var a = t("../Prop/PropUse"),
            r = t("../Char/Cell/CellBase"),
            c = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.playerCnt = 0, e.roleNode = null, e.gameScale = 1, e.currGate = 1, e.MAX_GATE = 8, e.xMax = 0, e.appleArr = [], e.adLooked = !1, e.ui = null, e.uiLayer = null, e.roleCount = 2, e.cellLayer = null, e.roleArr = [], e.currRole = null, e.roleInfoPanelArr = [], e.cameraTaget = null, e.startCellIndex = -1, e.mc = null, e.gs = null, e.loser = -0, e
                }
                return o(e, t), Object.defineProperty(e, "instance", {
                    get: function() {
                        return e.dataManager ? e.dataManager : e.dataManager = new e
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.getOtherRole = function() {
                    return e.instance.currRole == e.instance.roleArr[0] ? e.instance.roleArr[1] : e.instance.roleArr[0]
                }, e.prototype.getPropCanBeUsed = function(t) {
                    var n = !0,
                        o = null;
                    switch (t) {
                        case a.PROP_TYPE.TOUZI:
                            (o = e.instance.currRole).hasDebuf() && (n = !1), o.bDouble && (n = !1);
                            break;
                        case a.PROP_TYPE.ZHADAN:
                            o = e.instance.getOtherRole();
                            break;
                        case a.PROP_TYPE.LUOBO:
                        case a.PROP_TYPE.JIAZI:
                            (o = e.instance.getOtherRole()).hasDebuf() && (n = !1);
                            break;
                        case a.PROP_TYPE.QIQIU:
                            (o = e.instance.currRole).hasDebuf() && (n = !1), o.bDouble && (n = !1);
                            break;
                        case a.PROP_TYPE.FANXIANG:
                            o = e.instance.getOtherRole();
                            break;
                        case a.PROP_TYPE.BINGDONG:
                            (o = e.instance.getOtherRole()).hasDebuf() && (n = !1);
                            break;
                        case a.PROP_TYPE.HUOJIAN:
                            o = e.instance.currRole;
                            var c = e.instance.cellLayer.cellArr[o.cellIndex].getComponent(r.default);
                            c.ownerIndex != o.roleIndex && -1 != c.ownerIndex || (n = !1)
                    }
                    return [n, o]
                }, e.dataManager = null, e
            }(cc.Node);
        n.GameDataManager = c, cc._RF.pop()
    }, {
        "../Char/Cell/CellBase": "CellBase",
        "../Prop/PropUse": "PropUse"
    }],
    GameEventManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "aae2f1vdxlBJ40/wi7SOzuz", "GameEventManager");
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
        }), n.GameEventManager = void 0;
        var a = function(t) {
            function e() {
                return t.call(this) || this
            }
            return o(e, t), Object.defineProperty(e, "intance", {
                get: function() {
                    return e.gameEventManager ? e.gameEventManager : e.gameEventManager = new e
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.onLoad = function() {
                console.log("gameEventMessage onLoad !!")
            }, e.prototype.registerMsg = function(t, e, n, o) {
                void 0 === o && (o = !0), this.on(t, e, n, o)
            }, e.prototype.unregisterMsg = function(t, e, n, o) {
                void 0 === o && (o = !0), this.off(t, e, n, o)
            }, e.prototype.postMsg = function(t, e, n) {
                void 0 === e && (e = []), void 0 === n && (n = !0);
                var o = new cc.Event.EventCustom(t, n);
                o.detail = e, this.dispatchEvent(o)
            }, e.releaseSelf = function() {
                e.gameEventManager = null
            }, e.gameEventManager = null, e
        }(cc.Node);
        n.GameEventManager = a, cc._RF.pop()
    }, {}],
    GameScene: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "55b84d3TxtMgb8fSakvJttg", "GameScene");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Manager/GameDataManager"),
            c = t("../Window/LoadingWindow"),
            i = t("../Manager/SoundManager"),
            s = t("../Const/SoundConst"),
            l = t("../Manager/GameEventManager"),
            u = t("../Const/EventConst"),
            p = cc._decorator,
            d = p.ccclass,
            f = (p.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.gameOver = !1, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    c.default.getInstance().onComplete(), r.GameDataManager.instance.gs = this, i.default.instance.playMusic(s.SoundConst.GAME_BG), l.GameEventManager.intance.registerMsg(u.EventConst.AD_COMPLETE, this.onAdComplete, this)
                }, e.prototype.onAdComplete = function(t) {
                    this.gameOver = !1, r.GameDataManager.instance.roleArr[0].addMoney(5e3), r.GameDataManager.instance.roleArr[1].addMoney(5e3), l.GameEventManager.intance.postMsg(u.EventConst.SWITCH_ROLE)
                }, e = a([d], e)
            }(cc.Component));
        n.default = f, cc._RF.pop()
    }, {
        "../Const/EventConst": "EventConst",
        "../Const/SoundConst": "SoundConst",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/GameEventManager": "GameEventManager",
        "../Manager/SoundManager": "SoundManager",
        "../Window/LoadingWindow": "LoadingWindow"
    }],
    GameTool: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f9114nmVsdLcaNCIt4MjsuV", "GameTool"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = t("./RepeatMc"),
            a = t("./OnceMc"),
            r = function() {
                function t() {}
                return t.removeFromArr = function(t, e) {
                    var n = e.indexOf(t);
                    n > -1 && e.splice(n, 1)
                }, t.getScript = function(t, e) {
                    return t.getComponent(e)
                }, t.getSingleSpriteFrame = function(t) {
                    var e = cc.resources.get(t, cc.Asset);
                    return new cc.SpriteFrame(e)
                }, t.getAtlasSpriteFrame = function(t, e) {
                    return cc.resources.get(t, cc.SpriteAtlas).getSpriteFrame(e)
                }, t.getPrefab = function(t) {
                    var e = cc.resources.get(t, cc.Asset);
                    return e ? e instanceof cc.Prefab ? e : (cc.log("\u4f60\u8f7d\u5165\u7684\u4e0d\u662f\u9884\u5236\u8d44\u6e90!"), null) : (cc.log("\u52a0\u8f7d\u9884\u5236\u4f53\u8d44\u6e90\u5931\u8d25", t), null)
                }, t.getPrefabNode = function(t) {
                    var e = cc.resources.get(t, cc.Asset);
                    if (e) {
                        if (e instanceof cc.Prefab) return cc.instantiate(e);
                        cc.log("\u4f60\u8f7d\u5165\u7684\u4e0d\u662f\u9884\u5236\u8d44\u6e90!")
                    } else cc.log("\u52a0\u8f7d\u9884\u5236\u4f53\u8d44\u6e90\u5931\u8d25", t)
                }, t.getOnceMc = function(t, e, n, o, r) {
                    void 0 === r && (r = 15);
                    var c = new cc.Node;
                    return c.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW, c.getComponent(cc.Sprite).trim = !1, c.addComponent(a.default), c.getComponent(a.default).setData(t, e, n, o, r), c
                }, t.getRepeatMc = function(t, e, n, a, r) {
                    void 0 === a && (a = 0), void 0 === r && (r = 15);
                    var c = new cc.Node;
                    return c.addComponent(o.default), c.addComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW, c.getComponent(cc.Sprite).trim = !1, c.opacity = 255, c.getComponent(o.default).setData(t, e, n, a, r), c
                }, t.hasKeyboard = function() {
                    return cc.sys.isMobile
                }, t
            }();
        n.default = r, cc._RF.pop()
    }, {
        "./OnceMc": "OnceMc",
        "./RepeatMc": "RepeatMc"
    }],
    KbEvent: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "0c3bfzSbB5GbYPwIoAoRRtW", "KbEvent");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Manager/GameEventManager"),
            c = t("../Const/EventConst"),
            i = cc._decorator,
            s = i.ccclass,
            l = (i.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.start = function() {
                    r.GameEventManager.intance.registerMsg(c.EventConst.GAME_START, this.onAddKbEvent, this), r.GameEventManager.intance.postMsg(c.EventConst.GAME_START)
                }, e.prototype.onAddKbEvent = function(t) {
                    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)
                }, e.prototype.onKeyDown = function(t) {
                    switch (cc.log(t.keyCode), t.keyCode) {
                        case cc.macro.KEY.w:
                        case cc.macro.KEY.s:
                        case cc.macro.KEY.a:
                        case cc.macro.KEY.d:
                    }
                }, e.prototype.onKeyUp = function(t) {
                    switch (t.keyCode) {
                        case cc.macro.KEY.w:
                        case cc.macro.KEY.s:
                        case cc.macro.KEY.a:
                        case cc.macro.KEY.d:
                    }
                }, e = a([s], e)
            }(cc.Component));
        n.default = l, cc._RF.pop()
    }, {
        "../Const/EventConst": "EventConst",
        "../Manager/GameEventManager": "GameEventManager"
    }],
    LoadingScene: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "180730qHnZJTKupiB/GG9vI", "LoadingScene");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Window/LoadingWindow"),
            c = t("../Manager/SceneManager"),
            i = t("../Const/SceneAndWindowConst"),
            s = t("../Extend/GamData"),
            l = cc._decorator,
            u = l.ccclass,
            p = l.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.loading_prefab = null, e.barFrame = null, e.bar = null, e.go = null, e
                }
                return o(e, t), e.prototype.start = function() {
                    var t = this;
                    this.go.node.active = !1, cc.loader.loadResDir("Loading", function(e) {
                        e ? cc.log(e.message) : (r.default.getInstance().node = cc.instantiate(t.loading_prefab), cc.game.addPersistRootNode(r.default.getInstance().node), r.default.getInstance().onInit(), t.bar.node.active = !1, t.barFrame.node.active = !1, t.go.node.active = !0, t.node.once(cc.Node.EventType.TOUCH_END, function() {
                            s.GameData.bClick = !0, c.default.instance.runScene(i.SceneAndWindowConst.MAIN_SCENE, "Main")
                        }, t))
                    }), cc.Canvas.instance.node.on(cc.Node.EventType.SIZE_CHANGED, this.onResize, this), this.onResize()
                }, e.prototype.onResize = function() {
                    var t = cc.Canvas.instance.designResolution.height,
                        e = cc.winSize.height,
                        n = 1;
                    e < t && (n = e / t), this.node.scale = n
                }, a([p(cc.Prefab)], e.prototype, "loading_prefab", void 0), a([p(cc.Sprite)], e.prototype, "barFrame", void 0), a([p(cc.Sprite)], e.prototype, "bar", void 0), a([p(cc.Sprite)], e.prototype, "go", void 0), e = a([u], e)
            }(cc.Component);
        n.default = d, cc._RF.pop()
    }, {
        "../Const/SceneAndWindowConst": "SceneAndWindowConst",
        "../Extend/GamData": "GamData",
        "../Manager/SceneManager": "SceneManager",
        "../Window/LoadingWindow": "LoadingWindow"
    }],
    LoadingWindow: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "6a9f7f7DYJFzr6C3p+L3A1U", "LoadingWindow");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            c = r.ccclass,
            i = (r.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.barSprite = null, e
                }
                var n;
                return o(e, t), n = e, e.getInstance = function() {
                    return this.loadingWindow || (this.loadingWindow = new n), this.loadingWindow
                }, Object.defineProperty(e.prototype, "node", {
                    get: function() {
                        return n._node
                    },
                    set: function(t) {
                        n._node = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.onStart = function() {
                    this.node.active = !0, this.node.setPosition(new cc.Vec2(cc.winSize.width / 2, cc.winSize.height / 2)), cc.Canvas.instance.node.on(cc.Node.EventType.SIZE_CHANGED, this.onResize, this), this.onResize()
                }, e.prototype.onResize = function() {
                    var t = cc.Canvas.instance.designResolution.height,
                        e = cc.winSize.height,
                        n = 1;
                    e < t && (n = e / t), this.node.scale = n, this.node.setPosition(new cc.Vec2(cc.winSize.width / 2, cc.winSize.height / 2))
                }, e.prototype.onProgress = function(t, e) {
                    var n = 0 != e ? t / e : 0;
                    this.barSprite.node.scaleX = n
                }, e.prototype.onComplete = function() {
                    this.node.active = !1
                }, e.prototype.onInit = function() {
                    this.node.active = !1, this.barSprite = this.node.getChildByName("loadingBg").getComponent(cc.Sprite), this.barSprite.node.scaleX = 0
                }, e._node = null, e.loadingWindow = null, e = n = a([c], e)
            }(cc.Component));
        n.default = i, cc._RF.pop()
    }, {}],
    LuckDrawPanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "3c9ba/v/QhGwrg9Lfzck5wj", "LuckDrawPanel");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Const/EventConst"),
            c = t("../Manager/GameEventManager"),
            i = t("../Extend/GameTool"),
            s = t("../Manager/GameDataManager"),
            l = t("../Manager/SoundManager"),
            u = t("../Const/SoundConst"),
            p = cc._decorator,
            d = p.ccclass,
            f = p.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.cirle = null, e.light = null, e.btnLuck = null, e.btnOk = null, e.tip = null, e.mask = null, e.itemInit = null, e.resuletNode = null, e.resultSp = null, e.resultLght = null, e.runStop = !0, e.s = 0, e.v = 0, e.currS = 0, e.v0 = 40, e.a = -1, e.t = 5, e.resultIndex = -1, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    this.init(), this.mask.on(cc.Node.EventType.TOUCH_END, function() {}, this), this.btnLuck.node.on(cc.Node.EventType.TOUCH_END, this.onLuck, this), this.btnOk.node.on(cc.Node.EventType.TOUCH_END, this.onOk, this), l.default.instance.playMusic(u.SoundConst.LUCK_BG)
                }, e.prototype.init = function() {
                    this.resultLght.runAction(cc.repeatForever(cc.rotateBy(5, 360))), this.resuletNode.active = !1;
                    for (var t = 0; t < 8; t++) {
                        var e = cc.instantiate(this.itemInit);
                        e.active = !0, e.angle = 45 * t;
                        var n = (e.angle + 90) / 180 * Math.PI;
                        e.x = 145 * Math.cos(n), e.y = 145 * Math.sin(n), e.getComponent(cc.Sprite).spriteFrame = i.default.getSingleSpriteFrame("Game/Texture/Prop/" + t), this.itemInit.getParent().addChild(e)
                    }
                    this.resultIndex = Math.floor(8 * Math.random()), s.GameDataManager.instance.currRole.isPC && this.luck()
                }, e.prototype.onLuck = function(t) {
                    this.btnLuck.interactable && this.luck()
                }, e.prototype.luck = function() {
                    this.btnLuck.interactable = !1;
                    var t = 45 * -this.resultIndex;
                    this.s = 1800 + t, this.a = -2 * this.s / (this.t * this.t), this.v0 = -this.a * this.t, this.v = this.v0, this.currS = 0, this.runStop = !1, this.tip.active = !1, l.default.instance.playEffect(u.SoundConst.BUTTON), l.default.instance.playEffect(u.SoundConst.LUCK_DRAW)
                }, e.prototype.onOk = function(t) {
                    s.GameDataManager.instance.currRole.addProp(this.resultIndex, 1), c.GameEventManager.intance.postMsg(r.EventConst.SWITCH_ROLE), this.node.destroy(), l.default.instance.playEffect(u.SoundConst.BUTTON), l.default.instance.playMusic(u.SoundConst.GAME_BG)
                }, e.prototype.update = function(t) {
                    this.runStop ? this.cirle.angle = this.s : (this.currS = this.currS + this.v * t, this.cirle.angle = this.currS, this.currS > this.s ? this.aniComplete() : this.v = this.v + t * this.a)
                }, e.prototype.aniComplete = function() {
                    this.runStop = !0, this.cirle.angle = this.s, this.showResult()
                }, e.prototype.showResult = function() {
                    this.resuletNode.active = !0, this.resultSp.spriteFrame = i.default.getSingleSpriteFrame("Game/Texture/Prop/" + this.resultIndex), l.default.instance.playEffect(u.SoundConst.LUCK_RESULT)
                }, a([f(cc.Node)], e.prototype, "cirle", void 0), a([f(cc.Node)], e.prototype, "light", void 0), a([f(cc.Button)], e.prototype, "btnLuck", void 0), a([f(cc.Button)], e.prototype, "btnOk", void 0), a([f(cc.Node)], e.prototype, "tip", void 0), a([f(cc.Node)], e.prototype, "mask", void 0), a([f(cc.Node)], e.prototype, "itemInit", void 0), a([f(cc.Node)], e.prototype, "resuletNode", void 0), a([f(cc.Sprite)], e.prototype, "resultSp", void 0), a([f(cc.Node)], e.prototype, "resultLght", void 0), e = a([d], e)
            }(cc.Component);
        n.default = h, cc._RF.pop()
    }, {
        "../Const/EventConst": "EventConst",
        "../Const/SoundConst": "SoundConst",
        "../Extend/GameTool": "GameTool",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/GameEventManager": "GameEventManager",
        "../Manager/SoundManager": "SoundManager"
    }],
    MainCamera: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b5c53I5aIlHbZD+8T7QUk6P", "MainCamera");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Const/EventConst"),
            c = t("../Manager/GameEventManager"),
            i = t("../Manager/GameDataManager"),
            s = cc._decorator,
            l = s.ccclass,
            u = s.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.label = null, e.following = !1, e.otherTarget = null, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    c.GameEventManager.intance.registerMsg(r.EventConst.CAMERA_FOLLOW, this.onFollow, this)
                }, e.prototype.update = function(t) {
                    i.GameDataManager.instance.currRole && !this.following && (this.otherTarget = i.GameDataManager.instance.cameraTaget, this.otherTarget ? this.node.setPosition(this.otherTarget.getPosition()) : this.node.setPosition(i.GameDataManager.instance.currRole.node.getPosition()))
                }, e.prototype.onFollow = function(t) {
                    var e = this;
                    this.following = !0, this.node.runAction(cc.sequence(cc.moveTo(.5, i.GameDataManager.instance.currRole.node.getPosition()), cc.callFunc(function() {
                        e.following = !1, i.GameDataManager.instance.currRole.handleBeforeAction()
                    })))
                }, a([u(cc.Label)], e.prototype, "label", void 0), e = a([l], e)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "../Const/EventConst": "EventConst",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/GameEventManager": "GameEventManager"
    }],
    MainContent: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9eee5w0l4tFn6Ix2TU/HDcf", "MainContent");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Const/EventConst"),
            c = t("../Const/SceneAndWindowConst"),
            i = t("../Manager/GameEventManager"),
            s = t("../Manager/GameDataManager"),
            l = t("../Manager/WindowManager"),
            u = t("../Window/CostGoldWindow"),
            p = cc._decorator,
            d = p.ccclass,
            f = (p.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.onLoad = function() {
                    this.addEvent(), s.GameDataManager.instance.mc = this
                }, e.prototype.addEvent = function() {
                    i.GameEventManager.intance.registerMsg(r.EventConst.OPEN_SWITCH_ROLE_WINDOW, this.onOpenSwitchRoleWindow, this), i.GameEventManager.intance.registerMsg(r.EventConst.OPEN_COST_GOLD_WINDOW, this.onOpenCostGoldWindow, this), i.GameEventManager.intance.registerMsg(r.EventConst.SWITCH_ROLE, this.onSwitchRole, this)
                }, e.prototype.onSwitchRole = function(t) {
                    if (!s.GameDataManager.instance.gs.gameOver) {
                        s.GameDataManager.instance.currRole.circle.active = !1;
                        var e = s.GameDataManager.instance.currRole.roleIndex;
                        ++e == s.GameDataManager.instance.roleCount && (e = 0), s.GameDataManager.instance.currRole = s.GameDataManager.instance.roleArr[e], s.GameDataManager.instance.currRole.circle.active = !0, i.GameEventManager.intance.postMsg(r.EventConst.CAMERA_FOLLOW), i.GameEventManager.intance.postMsg(r.EventConst.SWITCH_ROLE_COMPLETE)
                    }
                }, e.prototype.onOpenSwitchRoleWindow = function(t) {
                    l.default.instance.openWindow(c.SceneAndWindowConst.SWITCH_ROLE_WINDOW, [], !1).getChildByName("content").getChildByName("wordTxt").getComponent(cc.Label).string = t.detail
                }, e.prototype.onOpenCostGoldWindow = function(t) {
                    var e = l.default.instance.openWindow(c.SceneAndWindowConst.COST_GOLD_WINDOW, [], !1);
                    e.getChildByName("content").getChildByName("wordTxt").getComponent(cc.Label).string = t.detail[0], e.getChildByName("content").getChildByName("goldTxt").getComponent(cc.Label).string = t.detail[1], e.getComponent(u.default).otherAdd = t.detail[2]
                }, e.prototype.reSizeContent = function() {
                    var t = cc.Canvas.instance.designResolution.height,
                        e = cc.winSize.height,
                        n = 1;
                    e < t && (n = Math.floor(e / t * 100) / 100), s.GameDataManager.instance.gameScale = n
                }, e = a([d], e)
            }(cc.Component));
        n.default = f, cc._RF.pop()
    }, {
        "../Const/EventConst": "EventConst",
        "../Const/SceneAndWindowConst": "SceneAndWindowConst",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/GameEventManager": "GameEventManager",
        "../Manager/WindowManager": "WindowManager",
        "../Window/CostGoldWindow": "CostGoldWindow"
    }],
    MainScene: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1b3d4z3YZFJSaL+56QHJeMm", "MainScene");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Manager/SoundManager"),
            c = t("../Window/LoadingWindow"),
            i = t("../Manager/SceneManager"),
            s = t("../Const/SceneAndWindowConst"),
            l = t("../Manager/WindowManager"),
            u = t("../Const/SoundConst"),
            p = t("../Manager/GameDataManager"),
            d = cc._decorator,
            f = d.ccclass,
            h = d.property,
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.btnMore = null, e.btnStart1 = null, e.btnStart2 = null, e.content = null, e.role0 = null, e.role1 = null, e.vs = null, e.tittle = null, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    var t = this;
                    c.default.getInstance().onComplete(), this.btnMore.node.on(cc.Node.EventType.TOUCH_END, this.onMore, this), this.btnStart1.node.on(cc.Node.EventType.TOUCH_END, this.onSinglePlay, this), this.btnStart2.node.on(cc.Node.EventType.TOUCH_END, this.onDoublePlay, this), cc.audioEngine.stopAllEffects(), r.default.instance.stopMusic(), this.role0.runAction(cc.moveTo(.25, cc.v2(-250, -25))), this.role1.runAction(cc.moveTo(.25, cc.v2(250, -25))), this.vs.scale = 2, this.vs.runAction(cc.sequence(cc.delayTime(.6), cc.callFunc(function() {
                        t.vs.opacity = 255
                    }), cc.scaleTo(.2, 1))), this.vs.opacity = 0, this.tittle.scale = 0, this.tittle.runAction(cc.sequence(cc.delayTime(1), cc.scaleTo(.2, 1)))
                }, e.prototype.onSizeChanged = function(t) {
                    console.log("\u5c4f\u5e55\u5927\u5c0f\u6539\u53d8\uff0c\u8fdb\u884c\u9002\u914d", cc.winSize.width, ",", cc.winSize.height), l.default.instance.resizeAllWindows();
                    var e = cc.Canvas.instance.designResolution.height,
                        n = cc.winSize.height,
                        o = 1;
                    n < e && (o = n / e), this.content.scale = o
                }, e.prototype.onMore = function(t) {
                    r.default.instance.playEffect(u.SoundConst.BUTTON)
                }, e.prototype.onSinglePlay = function(t) {
                    p.GameDataManager.instance.playerCnt = 1, i.default.instance.runScene(s.SceneAndWindowConst.GAME_SCENE, "Game"), r.default.instance.playEffect(u.SoundConst.BUTTON)
                }, e.prototype.onDoublePlay = function(t) {
                    p.GameDataManager.instance.playerCnt = 2, i.default.instance.runScene(s.SceneAndWindowConst.GAME_SCENE, "Game"), r.default.instance.playEffect(u.SoundConst.BUTTON)
                }, e.prototype.onDestroy = function() {}, a([h(cc.Button)], e.prototype, "btnMore", void 0), a([h(cc.Button)], e.prototype, "btnStart1", void 0), a([h(cc.Button)], e.prototype, "btnStart2", void 0), a([h(cc.Node)], e.prototype, "content", void 0), a([h(cc.Node)], e.prototype, "role0", void 0), a([h(cc.Node)], e.prototype, "role1", void 0), a([h(cc.Node)], e.prototype, "vs", void 0), a([h(cc.Node)], e.prototype, "tittle", void 0), e = a([f], e)
            }(cc.Component);
        n.default = g, cc._RF.pop()
    }, {
        "../Const/SceneAndWindowConst": "SceneAndWindowConst",
        "../Const/SoundConst": "SoundConst",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/SceneManager": "SceneManager",
        "../Manager/SoundManager": "SoundManager",
        "../Manager/WindowManager": "WindowManager",
        "../Window/LoadingWindow": "LoadingWindow"
    }],
    Mst: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "4c477Hzr1tK6KRNikhwYEFA", "Mst");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.ACTION_TYPE = void 0;
        var r, c = t("../Manager/GameDataManager"),
            i = cc._decorator,
            s = i.ccclass,
            l = i.property;
        (function(t) {
            t.IDLE = "idle", t.WALK = "walk", t.ATTACK = "attack", t.DIE = "die"
        })(r = n.ACTION_TYPE || (n.ACTION_TYPE = {}));
        var u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.lastStartTime = 0, e.currAction = r.IDLE, e.atlas = null, e.role = null, e.mc = null, e.actionConfig = {
                    idle: {
                        action: "idle",
                        frame: 4,
                        fps: 12
                    },
                    attack: {
                        action: "attack",
                        frame: 7,
                        fps: 24
                    }
                }, e
            }
            return o(e, t), e.prototype.onLoad = function() {
                this.init(), this.addEvent()
            }, e.prototype.init = function() {
                this.role = c.GameDataManager.instance.currRole, this.lastStartTime = Date.now(), this.mc = this.node.getChildByName("mc"), this.setAction(r.IDLE), this.node.scale = 1.5
            }, e.prototype.addEvent = function() {}, e.prototype.update = function(t) {
                this.onUpdateAction()
            }, e.prototype.onUpdateAction = function() {
                var t = this.actionConfig[this.currAction],
                    e = t.fps,
                    n = Math.floor((Date.now() - this.lastStartTime) / 1e3 * e);
                if (n > t.frame) return r.ATTACK == this.currAction ? void this.setAction(r.IDLE, !0) : void this.setAction(this.currAction, !0);
                n %= t.frame;
                var o = t.action;
                o += n, this.mc.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame(o)
            }, e.prototype.setAction = function(t, e) {
                void 0 === e && (e = !1), (t != this.currAction || e) && (this.currAction = t, this.lastStartTime = Date.now(), r.ATTACK, this.currAction, r.DIE, this.currAction)
            }, a([l(cc.SpriteAtlas)], e.prototype, "atlas", void 0), e = a([s], e)
        }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {
        "../Manager/GameDataManager": "GameDataManager"
    }],
    OnceMc: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "109f1fHkkFAx41zbdi45ivP", "OnceMc");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("./GameTool"),
            c = cc._decorator,
            i = c.ccclass,
            s = (c.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.onLoad = function() {}, e.prototype.setData = function(t, e, n, o, a) {
                    void 0 === a && (a = 15), this.pic = t, this.act = e, this.frame = n, this.fps = a, this.node.zIndex = o
                }, e.prototype.onEnable = function() {
                    this.lastStartTime = Date.now()
                }, e.prototype.update = function(t) {
                    var e = this.fps,
                        n = Math.floor((Date.now() - this.lastStartTime) / 1e3 * e);
                    n >= this.frame ? this.node.destroy() : (n %= this.frame, this.node.getComponent(cc.Sprite).spriteFrame = r.default.getAtlasSpriteFrame(this.pic, this.act + n))
                }, e = a([i], e)
            }(cc.Component));
        n.default = s, cc._RF.pop()
    }, {
        "./GameTool": "GameTool"
    }],
    PropListCell: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "570f72wHoJGmJ+Igye1A6JW", "PropListCell");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Manager/GameDataManager"),
            c = t("../Extend/GameTool"),
            i = t("../Const/DataConst"),
            s = t("./PropUse"),
            l = t("../Manager/WindowManager"),
            u = t("../Char/Cell/CellBase"),
            p = t("../Const/SoundConst"),
            d = t("../Manager/SoundManager"),
            f = cc._decorator,
            h = f.ccclass,
            g = f.property,
            y = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.countTxt = null, e.icon = null, e.desTxt = null, e.btnUse = null, e.targetRole = null, e.propType = -1, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    this.propType = Number(this.node.name), this.role = r.GameDataManager.instance.currRole, this.cell = r.GameDataManager.instance.cellLayer.cellArr[this.role.cellIndex].getComponent(u.default), this.countTxt.string = "X" + this.role.getPropCnt(this.propType), this.icon.spriteFrame = c.default.getSingleSpriteFrame("Game/Texture/Prop/" + this.node.name), this.desTxt.string = i.DataConst.prop[this.node.name].des, this.btnUse.node.on(cc.Node.EventType.TOUCH_END, this.onUse, this), this.setBtnEnabed()
                }, e.prototype.setBtnEnabed = function() {
                    var t, e = r.GameDataManager.instance.getPropCanBeUsed(this.propType);
                    t = e[0], this.targetRole = e[1], this.btnUse.interactable = t
                }, e.prototype.onUse = function(t) {
                    if (this.btnUse.interactable) {
                        l.default.instance.closeWindows([]), this.role.addProp(this.propType, -1);
                        var e = c.default.getPrefabNode("Game/Prefab/propUse");
                        e.getComponent(s.default).setData(this.propType, r.GameDataManager.instance.currRole, this.targetRole), r.GameDataManager.instance.currRole.node.getParent().addChild(e), d.default.instance.playEffect(p.SoundConst.BUTTON)
                    }
                }, a([g(cc.Label)], e.prototype, "countTxt", void 0), a([g(cc.Sprite)], e.prototype, "icon", void 0), a([g(cc.Label)], e.prototype, "desTxt", void 0), a([g(cc.Button)], e.prototype, "btnUse", void 0), e = a([h], e)
            }(cc.Component);
        n.default = y, cc._RF.pop()
    }, {
        "../Char/Cell/CellBase": "CellBase",
        "../Const/DataConst": "DataConst",
        "../Const/SoundConst": "SoundConst",
        "../Extend/GameTool": "GameTool",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/SoundManager": "SoundManager",
        "../Manager/WindowManager": "WindowManager",
        "./PropUse": "PropUse"
    }],
    PropListWindow: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "5cb71+0DqRL86R+1yGx3VBM", "PropListWindow");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Const/DataConst"),
            c = t("../Manager/GameDataManager"),
            i = t("./WindowBase"),
            s = cc._decorator,
            l = s.ccclass,
            u = s.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.cellBase = null, e.content = null, e
                }
                return o(e, t), e.prototype.init = function() {
                    t.prototype.init.call(this);
                    for (var e = 0; e < r.DataConst.POPR_COUNT_TOTAL; e++)
                        if (!(c.GameDataManager.instance.currRole.getPropCnt(e) < 1)) {
                            var n = cc.instantiate(this.cellBase);
                            n.name = "" + e, n.active = !0, this.content.addChild(n)
                        }
                }, e.prototype.addEvent = function() {
                    t.prototype.addEvent.call(this)
                }, a([u(cc.Node)], e.prototype, "cellBase", void 0), a([u(cc.Node)], e.prototype, "content", void 0), e = a([l], e)
            }(i.default);
        n.default = p, cc._RF.pop()
    }, {
        "../Const/DataConst": "DataConst",
        "../Manager/GameDataManager": "GameDataManager",
        "./WindowBase": "WindowBase"
    }],
    PropUse: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2a564HxzDlGL5oCzkVOJpQ6", "PropUse");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.PROP_TYPE = void 0;
        var r, c = t("../Manager/GameDataManager"),
            i = t("../Extend/GameTool"),
            s = t("../Const/EventConst"),
            l = t("../Manager/GameEventManager"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property;
        (function(t) {
            t[t.TOUZI = 0] = "TOUZI", t[t.ZHADAN = 1] = "ZHADAN", t[t.LUOBO = 2] = "LUOBO", t[t.JIAZI = 3] = "JIAZI", t[t.QIQIU = 4] = "QIQIU", t[t.FANXIANG = 5] = "FANXIANG", t[t.BINGDONG = 6] = "BINGDONG", t[t.HUOJIAN = 7] = "HUOJIAN"
        })(r = n.PROP_TYPE || (n.PROP_TYPE = {}));
        var f = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.propType = -1, e.user = null, e.target = null, e.sp = null, e
            }
            return o(e, t), e.prototype.onLoad = function() {
                var t = this;
                this.sp.spriteFrame = i.default.getSingleSpriteFrame("Game/Texture/Prop/" + this.propType), this.node.setPosition(this.user.node.getPosition()), c.GameDataManager.instance.cameraTaget = this.node, this.node.scale = 0, this.node.runAction(cc.sequence(cc.scaleTo(.1, 1), cc.delayTime(.5), cc.moveTo(1, this.target.node.getPosition()), cc.delayTime(.8), cc.scaleTo(.1, 0), cc.callFunc(function() {
                    t.node.active = !1, t.handle()
                }))), l.GameEventManager.intance.postMsg(s.EventConst.UNENABLE_SLICE_BUTTON, !1)
            }, e.prototype.setData = function(t, e, n) {
                this.propType = t, this.user = e, this.target = n
            }, e.prototype.handle = function() {
                var t = this,
                    e = 0,
                    n = !1;
                switch (this.propType) {
                    case r.TOUZI:
                        l.GameEventManager.intance.postMsg(s.EventConst.SLICE, !0);
                        break;
                    case r.ZHADAN:
                        this.target.bomb(), e = 1;
                        break;
                    case r.LUOBO:
                        this.target.luobo = !0, e = .5;
                        break;
                    case r.JIAZI:
                        this.target.jiazi = !0, e = .5;
                        break;
                    case r.QIQIU:
                        e = .5, n = !0, this.target.bDouble = !0;
                        break;
                    case r.FANXIANG:
                        this.target.reserse(), e = .5;
                        break;
                    case r.BINGDONG:
                        this.target.ice = !0, e = .5;
                        break;
                    case r.HUOJIAN:
                        l.GameEventManager.intance.postMsg(s.EventConst.ROCKET, this.user.cellIndex)
                }
                this.scheduleOnce(function() {
                    t.node.destroy(), c.GameDataManager.instance.cameraTaget = null, n && l.GameEventManager.intance.postMsg(s.EventConst.ENABLE_SLICE_BUTTON)
                }, e)
            }, a([d(cc.Sprite)], e.prototype, "sp", void 0), e = a([p], e)
        }(cc.Component);
        n.default = f, cc._RF.pop()
    }, {
        "../Const/EventConst": "EventConst",
        "../Extend/GameTool": "GameTool",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/GameEventManager": "GameEventManager"
    }],
    RepeatMc: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "5ec20KfPEhCcYBNvKNPKTEv", "RepeatMc");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("./GameTool"),
            c = cc._decorator,
            i = c.ccclass,
            s = (c.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.index = -1, e
                }
                return o(e, t), e.prototype.onLoad = function() {}, e.prototype.setData = function(t, e, n, o, a) {
                    void 0 === a && (a = 15), this.pic = t, this.act = e, this.frame = n, this.fps = a, this.node.zIndex = o
                }, e.prototype.onEnable = function() {
                    this.lastStartTime = Date.now(), this.index = 0
                }, e.prototype.update = function(t) {
                    var e = this.fps;
                    this.index = Math.floor((Date.now() - this.lastStartTime) / 1e3 * e), this.index > this.frame && (this.lastStartTime = Date.now()), this.index %= this.frame, this.node.getComponent(cc.Sprite).spriteFrame = r.default.getAtlasSpriteFrame(this.pic, this.act + this.index)
                }, e = a([i], e)
            }(cc.Component));
        n.default = s, cc._RF.pop()
    }, {
        "./GameTool": "GameTool"
    }],
    RoleInfoPanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d1062i751tHpbfO8q+snTCt", "RoleInfoPanel");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Const/EventConst"),
            c = t("../Manager/GameEventManager"),
            i = t("../Manager/GameDataManager"),
            s = cc._decorator,
            l = s.ccclass,
            u = s.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.head = null, e.moneyTxt = null, e.headFrame = null, e.roleIndex = -1, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    this.roleIndex = Number(this.node.name), i.GameDataManager.instance.roleInfoPanelArr[Number(this.node.name)] = this, c.GameEventManager.intance.registerMsg(r.EventConst.SWITCH_ROLE_COMPLETE, this.onSwitchRoleComplete, this)
                }, e.prototype.onSwitchRoleComplete = function(t) {
                    i.GameDataManager.instance.currRole.roleIndex == this.roleIndex ? (this.headFrame.opacity = 200, this.headFrame.runAction(cc.repeatForever(cc.blink(1, 2)))) : (this.headFrame.stopAllActions(), this.headFrame.active = !0, this.headFrame.opacity = 100)
                }, a([u(cc.Sprite)], e.prototype, "head", void 0), a([u(cc.Label)], e.prototype, "moneyTxt", void 0), a([u(cc.Node)], e.prototype, "headFrame", void 0), e = a([l], e)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "../Const/EventConst": "EventConst",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/GameEventManager": "GameEventManager"
    }],
    Role: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d392fmwHnNObJYjLcYrLUDs", "Role");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.ACTION_TYPE = void 0;
        var r, c = t("../Const/DataConst"),
            i = t("../Const/EventConst"),
            s = t("../Manager/GameEventManager"),
            l = t("../Manager/GameDataManager"),
            u = t("./Cell/CellBase"),
            p = t("../Extend/GameTool"),
            d = t("../Prop/PropUse"),
            f = t("../Manager/WindowManager"),
            h = t("../Const/SceneAndWindowConst"),
            g = t("../Manager/SoundManager"),
            y = t("../Const/SoundConst"),
            _ = cc._decorator,
            v = _.ccclass,
            C = _.property;
        (function(t) {
            t.IDLE = "idle", t.WALK = "walk", t.ATTACK = "attack", t.DIE = "die"
        })(r = n.ACTION_TYPE || (n.ACTION_TYPE = {}));
        var m = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.isPC = !1, e.atlasArr = [], e.circle = null, e.roleIndex = -1, e.roleType = -1, e.lastStartTime = 0, e.goTime = .6, e.cellIndex = -1, e.stepRemain = -1, e.dis = 0, e.currAction = r.IDLE, e.atlas = null, e._money = c.DataConst.MONEY, e._propCnt = [], e.mc = null, e.step = 1, e.stopCount = 0, e.ctrlCount = 0, e.roleInfoPanel = null, e.effectIce = null, e._beIce = !1, e.effectJiazi = null, e._beJiazi = !1, e.effectLuobo = null, e._beLuobo = !1, e.qiqiu = null, e.bDouble = !1, e.footStepSound = -1, e.actionConfig = {
                    idle: {
                        action: "idle",
                        frame: 3,
                        fps: 12
                    },
                    walk: {
                        action: "walk",
                        frame: 15,
                        fps: 24
                    }
                }, e
            }
            return o(e, t), e.prototype.onLoad = function() {
                this.init(), this.addEvent(), this.mc.y = 300, this.mc.runAction(cc.moveTo(.2, cc.v2(0, 30)))
            }, e.prototype.init = function() {
                this.atlas = this.atlasArr[this.roleType], this.mc = this.node.getChildByName("mc"), this.stepTxt = this.node.getChildByName("stepTxt").getComponent(cc.Label), this.stepTxt.string = "", this.addGoldTxt = this.node.getChildByName("addGoldTxt").getComponent(cc.Label), this.addGoldTxt.node.opacity = 0, this.lastStartTime = Date.now(), this.dis = this.getDis(), this.setAction(r.IDLE), this.roleInfoPanel = l.GameDataManager.instance.roleInfoPanelArr[this.roleIndex], this.roleInfoPanel.head.spriteFrame = p.default.getSingleSpriteFrame("Game/Texture/head" + this.roleType), this.roleInfoPanel.moneyTxt.string = "" + this.money, this.effectIce = this.node.getChildByName("effectIce"), this.effectIce.active = !1, this.effectJiazi = this.node.getChildByName("effectJiazi"), this.effectJiazi.active = !1, this.effectLuobo = this.node.getChildByName("effectLuobo"), this.effectLuobo.active = !1, this.qiqiu = this.node.getChildByName("qiqiu"), this.qiqiu.active = !1;
                for (var t = 0; t < c.DataConst.POPR_COUNT_TOTAL; t++) this._propCnt[t] = 0
            }, e.prototype.addEvent = function() {
                s.GameEventManager.intance.registerMsg(i.EventConst.GO, this.onGo, this), s.GameEventManager.intance.registerMsg(i.EventConst.ROLE_TURN, this.onRoleTurn, this)
            }, e.prototype.setData = function(t, e) {
                this.roleIndex = t, 1 == this.roleIndex && 1 == l.GameDataManager.instance.playerCnt && (this.isPC = !0), this.roleType = t, this.cellIndex = e, l.GameDataManager.instance.roleArr[this.roleIndex] = this, this.circle.color = c.DataConst.ROLE_COLOR[this.roleIndex], this.circle.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.8, .9), cc.scaleTo(.8, 1)))), 0 == t ? (l.GameDataManager.instance.currRole = this, this.circle.active = !0) : this.circle.active = !1
            }, e.prototype.handleBeforeAction = function() {
                if (this.stopCount > 0) return s.GameEventManager.intance.postMsg(i.EventConst.OPEN_SWITCH_ROLE_WINDOW, "Bị cấm " + this.stopCount + " lượt"), void this.stopCount--;
                0 == this.ctrlCount && (this.luobo = !1), this.ice = !1, this.jiazi = !1, s.GameEventManager.intance.postMsg(i.EventConst.ENABLE_SLICE_BUTTON)
            }, e.prototype.onGo = function(t) {
                this == l.GameDataManager.instance.currRole && (this.bDouble && (this.qiqiu.active = !0), this.stepRemain = t.detail, this.goNextCell(), this.footStepSound = g.default.instance.playEffect(y.SoundConst.FOOT_STEP, !0))
            }, e.prototype.onRoleTurn = function(t) {
                this == l.GameDataManager.instance.currRole && this.isPC && this.aiAction()
            }, e.prototype.goNextCell = function() {
                var t = this;
                if (0 == this.stepRemain) {
                    g.default.instance.stopEffect(this.footStepSound), this.stepTxt.string = "", cc.log("go complete"), this.currAction = r.IDLE, this.dis = this.getDis();
                    var e = l.GameDataManager.instance.cellLayer.cellArr[this.cellIndex];
                    e.getComponent(u.default).isPC = this.isPC, e.getComponent(u.default).cellEvent(), this.bDouble && (this.bDouble = !1, this.qiqiu.active = !1)
                } else {
                    this.stepTxt.string = "" + this.stepRemain, this.dis = this.getDis(), this.bDouble || (this.currAction = r.WALK), this.stepRemain--, this.cellIndex = this.getNextIndex();
                    var n = l.GameDataManager.instance.cellLayer.cellArr[this.cellIndex];
                    this.node.runAction(cc.sequence(cc.moveTo(this.goTime, n.getPosition()), cc.callFunc(function() {
                        t.goNextCell()
                    })))
                }
            }, e.prototype.moveToCell = function(t) {
                this.cellIndex = t;
                var e = l.GameDataManager.instance.cellLayer.cellArr[this.cellIndex];
                this.node.setPosition(e.getPosition()), this.dis = this.getDis()
            }, e.prototype.getDis = function() {
                var t = l.GameDataManager.instance.cellLayer.cellArr[this.cellIndex],
                    e = l.GameDataManager.instance.cellLayer.cellArr[this.getNextIndex()],
                    n = e.x > t.x ? 1 : 0,
                    o = e.y > t.y ? 1 : 0;
                return n > 0 ? o > 0 ? 1 : 4 : o > 0 ? 2 : 3
            }, e.prototype.getNextIndex = function() {
                return 1 == this.step ? this.cellIndex + 1 == l.GameDataManager.instance.cellLayer.cellCount ? 0 : this.cellIndex + 1 : this.cellIndex - 1 == -1 ? l.GameDataManager.instance.cellLayer.cellCount - 1 : this.cellIndex - 1
            }, e.prototype.update = function(t) {
                this.onUpdateAction()
            }, e.prototype.onUpdateAction = function() {
                var t = this.actionConfig[this.currAction],
                    e = t.fps,
                    n = Math.floor((Date.now() - this.lastStartTime) / 1e3 * e);
                if (n > t.frame) this.setAction(this.currAction, !0);
                else {
                    n %= t.frame;
                    var o = t.action,
                        a = this.dis;
                    o += 1 == a || 2 == a ? "Back" : "Front", o += n, this.mc.scaleX = 2 == a || 3 == a ? 1 : -1, this.mc.getComponent(cc.Sprite).spriteFrame = this.atlas.getSpriteFrame(o)
                }
            }, e.prototype.setAction = function(t, e) {
                void 0 === e && (e = !1), (t != this.currAction || e) && (this.currAction = t, this.lastStartTime = Date.now())
            }, e.prototype.hasDebuf = function() {
                return this.stopCount > 0 || this.ctrlCount > 0
            }, Object.defineProperty(e.prototype, "ice", {
                get: function() {
                    return this._beIce
                },
                set: function(t) {
                    this._beIce = t, t ? (this.effectIce.active = !0, this.effectIce.opacity = 0, this.effectIce.runAction(cc.sequence(cc.fadeIn(.5), cc.callFunc(function() {
                        s.GameEventManager.intance.postMsg(i.EventConst.ENABLE_SLICE_BUTTON)
                    }))), this.stopCount += 3, g.default.instance.playEffect(y.SoundConst.ICE)) : this.effectIce.active = !1
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "jiazi", {
                get: function() {
                    return this._beIce
                },
                set: function(t) {
                    this._beIce = t, t ? (this.effectJiazi.active = !0, this.effectJiazi.opacity = 0, this.effectJiazi.runAction(cc.sequence(cc.fadeIn(.5), cc.callFunc(function() {
                        s.GameEventManager.intance.postMsg(i.EventConst.ENABLE_SLICE_BUTTON)
                    }))), this.stopCount += 1, g.default.instance.playEffect(y.SoundConst.JIAZI)) : this.effectJiazi.active = !1
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "luobo", {
                get: function() {
                    return this._beIce
                },
                set: function(t) {
                    this._beIce = t, t ? (this.effectLuobo.active = !0, this.effectLuobo.opacity = 0, this.effectLuobo.runAction(cc.sequence(cc.fadeIn(.5), cc.callFunc(function() {
                        s.GameEventManager.intance.postMsg(i.EventConst.ENABLE_SLICE_BUTTON)
                    }))), this.ctrlCount += 3, g.default.instance.playEffect(y.SoundConst.LUOBO)) : this.effectLuobo.active = !1
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.reserse = function() {
                var t = this;
                g.default.instance.playEffect(y.SoundConst.ZHUANGXIANG), this.mc.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
                    t.step *= -1, t.dis = t.getDis()
                }), cc.delayTime(.1), cc.callFunc(function() {
                    s.GameEventManager.intance.postMsg(i.EventConst.ENABLE_SLICE_BUTTON)
                }))), this.mc.runAction(cc.jumpBy(.2, cc.v2(0, 0), 30, 1))
            }, e.prototype.bomb = function() {
                var t = this,
                    e = p.default.getPrefabNode("Game/Prefab/bomb");
                e.setPosition(cc.v2(0, 60)), this.node.addChild(e), e.getComponent(cc.Animation).play(), e.getComponent(cc.Animation).on(cc.Animation.EventType.FINISHED, function() {
                    e.destroy(), t.addMoney(-1e3), s.GameEventManager.intance.postMsg(i.EventConst.ENABLE_SLICE_BUTTON)
                }, null), g.default.instance.playEffect(y.SoundConst.BOOM)
            }, Object.defineProperty(e.prototype, "money", {
                get: function() {
                    return this._money
                },
                set: function(t) {
                    this._money = Math.floor(t), this.roleInfoPanel.moneyTxt.string = "" + this._money
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.addMoney = function(t) {
                if (this._money += Math.floor(t), this._money <= 0 && (this._money = 0), this.roleInfoPanel.moneyTxt.string = "" + this._money, 0 >= this._money) return l.GameDataManager.instance.gs.gameOver = !0, l.GameDataManager.instance.loser = this.roleIndex, void f.default.instance.openWindow(h.SceneAndWindowConst.FAIL_WINDOW, [], !1);
                t < 0 || (this.addGoldTxt.string = "+" + t, this.addGoldTxt.node.opacity = 255, this.addGoldTxt.node.y = 70, this.addGoldTxt.node.runAction(cc.sequence(cc.moveBy(1, cc.v2(0, 50)), cc.fadeOut(.5))))
            }, e.prototype.getPropCnt = function(t) {
                return this._propCnt[t]
            }, e.prototype.addAllProp = function(t) {
                for (var e = 0; e < c.DataConst.POPR_COUNT_TOTAL; e++) this._propCnt[e] += t
            }, e.prototype.lostAllProp = function() {
                for (var t = 0; t < c.DataConst.POPR_COUNT_TOTAL; t++) this._propCnt[t] = 0
            }, e.prototype.addProp = function(t, e) {
                this._propCnt[t] += e
            }, e.prototype.propCanBeUsedByAI = function(t) {
                return l.GameDataManager.instance.getPropCanBeUsed(t)
            }, e.prototype.aiAction = function() {
                Math.random() < .2 ? this.useProp() : l.GameDataManager.instance.ui.slice()
            }, e.prototype.useProp = function() {
                var t = Math.floor(8 * Math.random());
                if (this.getPropCnt(t) > 0) {
                    var e = this.propCanBeUsedByAI(t);
                    if (t == d.PROP_TYPE.TOUZI && (e[0] = !1), e[0]) {
                        this.addProp(t, -1);
                        var n = p.default.getPrefabNode("Game/Prefab/propUse");
                        n.getComponent(d.default).setData(t, l.GameDataManager.instance.currRole, e[1]), this.node.getParent().addChild(n)
                    } else l.GameDataManager.instance.ui.slice()
                } else l.GameDataManager.instance.ui.slice()
            }, a([C(cc.SpriteAtlas)], e.prototype, "atlasArr", void 0), a([C(cc.Node)], e.prototype, "circle", void 0), e = a([v], e)
        }(cc.Component);
        n.default = m, cc._RF.pop()
    }, {
        "../Const/DataConst": "DataConst",
        "../Const/EventConst": "EventConst",
        "../Const/SceneAndWindowConst": "SceneAndWindowConst",
        "../Const/SoundConst": "SoundConst",
        "../Extend/GameTool": "GameTool",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/GameEventManager": "GameEventManager",
        "../Manager/SoundManager": "SoundManager",
        "../Manager/WindowManager": "WindowManager",
        "../Prop/PropUse": "PropUse",
        "./Cell/CellBase": "CellBase"
    }],
    SceneAndWindowConst: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f15fdRK8TtBwr8QysPdhTTy", "SceneAndWindowConst"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.SceneAndWindowConst = void 0;
        var o = function() {
            function t() {}
            return t.MAIN_SCENE = "Scene/MainScene", t.SELECT_SCENE = "Scene/SelectScene", t.GAME_SCENE = "Scene/GameScene", t.BUY_CELL_WINDOW = "Game/Window/buyCellWindow", t.PROP_LIST_WINDOW = "Game/Window/propListWindow", t.SWITCH_ROLE_WINDOW = "Game/Window/switchRoleWindow", t.COST_GOLD_WINDOW = "Game/Window/costGoldWindow", t.DESTINY_WINDOW = "Game/Window/destinyWindow", t.END_WINDOW = "Game/Window/endWindow", t.EXIT_WINDOW = "Game/Window/exitWindow", t.FAIL_WINDOW = "Game/Window/failWindow", t.AD_WINDOW = "Game/Window/adWindow", t
        }();
        n.SceneAndWindowConst = o, cc._RF.pop()
    }, {}],
    SceneManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f06a13TAWNMIYvrB0jNHkU+", "SceneManager");
        var o = this && this.__decorate || function(t, e, n, o) {
            var a, r = arguments.length,
                c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
            else
                for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c), c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../Window/LoadingWindow"),
            r = cc._decorator,
            c = r.ccclass,
            i = (r.property, function() {
                function t() {
                    this.runedSceneArr = []
                }
                var e;
                return e = t, Object.defineProperty(t, "instance", {
                    get: function() {
                        return this.sceneManager ? this.sceneManager : this.sceneManager = new e
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.initLoadingFrame = function() {
                    cc.game.addPersistRootNode(null)
                }, t.prototype.runScene = function(t, e) {
                    var n = this;
                    if (void 0 === e && (e = ""), this.runedSceneArr.indexOf(t) > -1) return cc.log(this.runedSceneArr), void cc.director.loadScene(t);
                    a.default.getInstance().onStart(), cc.director.preloadScene(t, function(t, e, n) {
                        a.default.getInstance().onProgress(t, e)
                    }, function(o) {
                        if (o) console.log(o);
                        else {
                            if ("" != e) return void n.loadSceneResource(t, e);
                            console.log("load-" + t + "-complete"), n.runedSceneArr.push(t), cc.director.loadScene(t)
                        }
                    })
                }, t.prototype.loadSceneResource = function(t, e, n, o, r) {
                    var c = this;
                    void 0 === n && (n = null), void 0 === o && (o = null), void 0 === r && (r = null), a.default.getInstance().onStart(), cc.resources.loadDir(e, function(t, e, n) {
                        a.default.getInstance().onProgress(t, e)
                    }, function(e) {
                        e ? console.log(e) : (console.log("loadSceneResource complete"), n && n.apply(o, r), cc.director.loadScene(t), c.runedSceneArr.push(t))
                    })
                }, Object.defineProperty(t.prototype, "currGameSceneScript", {
                    get: function() {
                        return this._gameScene
                    },
                    set: function(t) {
                        this._gameScene = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "currMainContent", {
                    get: function() {
                        return this._gameScene.node.getChildByName("mainContent")
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "gameSocket", {
                    get: function() {
                        return this._gameScene.gameSocket
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "sendGameCmd", {
                    get: function() {
                        return this._gameScene.sendGameCmd
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "gameData", {
                    get: function() {
                        return this._gameScene.gameData
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.sceneManager = null, t = e = o([c], t)
            }());
        n.default = i, cc._RF.pop()
    }, {
        "../Window/LoadingWindow": "LoadingWindow"
    }],
    SelectScene: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9b6e2/jBglNvpOTsfoyLVKy", "SelectScene");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            c = r.ccclass,
            i = r.property,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.label = null, e.text = "hello", e
                }
                return o(e, t), e.prototype.start = function() {}, a([i(cc.Label)], e.prototype, "label", void 0), a([i], e.prototype, "text", void 0), e = a([c], e)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    SliceLayer: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e48b0A0aS9L9KXIqnmrR4I2", "SliceLayer");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Const/EventConst"),
            c = t("../Manager/GameDataManager"),
            i = t("../Manager/GameEventManager"),
            s = t("../Manager/SoundManager"),
            l = t("../Const/SoundConst"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.sliceAtlas = null, e.slice = null, e.ctrlLayer = null, e.frame = 21, e.fps = 30, e.playComplete = !0, e.val = -1, e.spriteList = [
                        [],
                        [],
                        [],
                        [],
                        [],
                        []
                    ], e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    this.init(), this.addEvent()
                }, e.prototype.init = function() {
                    for (var t = 0; t < 6; t++) {
                        for (var e = 0; e < 18; e++) this.spriteList[t].push("" + e);
                        for (e = 1; e < 4; e++) {
                            var n = t + 1;
                            this.spriteList[t].push("dice_" + n + "_" + e)
                        }
                    }
                    this.node.opacity = 255, this.node.active = !1
                }, e.prototype.addEvent = function() {
                    this.node.on(cc.Node.EventType.TOUCH_END, function() {}, this), i.GameEventManager.intance.registerMsg(r.EventConst.SLICE, this.onSlice, this);
                    for (var t = 1; t < 7; t++) {
                        this.ctrlLayer.getChildByName("layOut").getChildByName("" + t).on(cc.Node.EventType.TOUCH_END, this.onCtrl, this)
                    }
                }, e.prototype.onCtrl = function(t) {
                    this.val = Number(t.target.name), this.ctrlLayer.active = !1, this.startSlice()
                }, e.prototype.onSlice = function(t) {
                    i.GameEventManager.intance.postMsg(r.EventConst.UNENABLE_SLICE_BUTTON);
                    var e = t.detail;
                    this.node.active = !0, this.ctrlLayer.active = !1, this.slice.spriteFrame = null, e ? this.showCtrlLayer() : (this.val = 1 + Math.floor(6 * Math.random()), c.GameDataManager.instance.currRole.ctrlCount > 0 && (this.val = 1, c.GameDataManager.instance.currRole.ctrlCount--), this.startSlice())
                }, e.prototype.showCtrlLayer = function() {
                    this.ctrlLayer.active = !0
                }, e.prototype.startSlice = function() {
                    this.playComplete = !1, this.lastStartTime = Date.now(), s.default.instance.playEffect(l.SoundConst.SLICE)
                }, e.prototype.update = function(t) {
                    var e = this;
                    if (!this.playComplete) {
                        var n = this.fps,
                            o = Math.floor((Date.now() - this.lastStartTime) / 1e3 * n);
                        if (o >= this.frame) return this.playComplete = !0, void this.scheduleOnce(function() {
                            e.node.active = !1, c.GameDataManager.instance.currRole.bDouble && (e.val *= 2), i.GameEventManager.intance.postMsg(r.EventConst.GO, e.val)
                        }, .8);
                        o %= this.frame, this.slice.spriteFrame = this.sliceAtlas.getSpriteFrame(this.spriteList[this.val - 1][o])
                    }
                }, a([d(cc.SpriteAtlas)], e.prototype, "sliceAtlas", void 0), a([d(cc.Sprite)], e.prototype, "slice", void 0), a([d(cc.Node)], e.prototype, "ctrlLayer", void 0), e = a([p], e)
            }(cc.Component);
        n.default = f, cc._RF.pop()
    }, {
        "../Const/EventConst": "EventConst",
        "../Const/SoundConst": "SoundConst",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/GameEventManager": "GameEventManager",
        "../Manager/SoundManager": "SoundManager"
    }],
    SoundConst: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "68268Utn3FLnLrKiKaEZZKD", "SoundConst"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.SoundConst = void 0;
        var o = function() {
            function t() {}
            return t.BUTTON = "Loading/click", t.EAT_APPLE = "Main/sound/eatApple.mp3", t.EAT_STAR = "Main/sound/eatStar.mp3", t.HURT = "Main/sound/hurt.mp3", t.JUMP = "Main/sound/jump.mp3", t.LOSE = "Main/sound/lose.mp3", t.WIN = "Main/sound/win.mp3", t.MST_HURT = "Main/sound/mstHurt.mp3", t.GAME_BG = "Game/Sound/gameBg", t.BATTLE_BG = "Game/Sound/battleBg", t.LUCK_BG = "Game/Sound/luckBg", t.LUCK_DRAW = "Game/Sound/luckyDraw", t.LUCK_RESULT = "Game/Sound/luckyResult", t.BOOM = "Game/Sound/boom", t.FOOT_STEP = "Game/Sound/footStep", t.ICE = "Game/Sound/ice", t.JIAZI = "Game/Sound/jiazi", t.LUOBO = "Game/Sound/luobo", t.ZHUANGXIANG = "Game/Sound/zhuanxiang", t.GET_GOLD = "Game/Sound/getGold", t.SLICE = "Game/Sound/slice", t.ATTACK = "Game/Sound/attack", t
        }();
        n.SoundConst = o, cc._RF.pop()
    }, {}],
    SoundManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "435c5uswPZOYbUqDHxyZG6/", "SoundManager");
        var o = this && this.__decorate || function(t, e, n, o) {
            var a, r = arguments.length,
                c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
            else
                for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c), c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            r = a.ccclass,
            c = (a.property, function() {
                function t() {
                    this.musicID = -1, this._musicPlaying = !1
                }
                var e;
                return e = t, Object.defineProperty(t, "instance", {
                    get: function() {
                        return this.musicManager ? this.musicManager : this.musicManager = new e
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.playMusic = function(t, e) {
                    var n = this;
                    void 0 === e && (e = !0), this._musicPlaying || (this._musicPlaying = !0, this.stopMusic(), cc.resources.load(t, cc.AudioClip, function(t, o) {
                        return n.musicID = cc.audioEngine.playMusic(o, e), n.musicID
                    }))
                }, t.prototype.changeMusic = function(t, e, n) {
                    return void 0 === e && (e = !0), void 0 === n && (n = 1), this.stopMusic(), this.playMusic(t, e)
                }, t.prototype.pauseMusic = function() {
                    this._musicPlaying = !1, cc.audioEngine.pauseMusic()
                }, t.prototype.resumeMusic = function() {
                    this._musicPlaying = !0, cc.audioEngine.resumeMusic()
                }, t.prototype.stopMusic = function() {
                    this._musicPlaying = !1, cc.audioEngine.stop(this.musicID)
                }, Object.defineProperty(t.prototype, "musicPlaying", {
                    get: function() {
                        return this._musicPlaying
                    },
                    set: function(t) {
                        this._musicPlaying = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.playEffect = function(t, e) {
                    return void 0 === e && (e = !1), cc.audioEngine.playEffect(cc.resources.get(t, cc.AudioClip), e)
                }, t.prototype.stopEffect = function(t) {
                    cc.audioEngine.stopEffect(t)
                }, t.musicManager = null, t = e = o([r], t)
            }());
        n.default = c, cc._RF.pop()
    }, {}],
    Stone: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "87fecZaaeJL4pjlAilK5I+L", "Stone");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            c = r.ccclass,
            i = r.property,
            s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.delay = 0, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    var t = this;
                    this.scheduleOnce(function() {
                        t.node.runAction(cc.repeatForever(cc.sequence(cc.moveBy(3, cc.v2(0, 30)), cc.moveBy(3, cc.v2(0, -30)))))
                    }, this.delay)
                }, e.prototype.start = function() {}, a([i(cc.Integer)], e.prototype, "delay", void 0), e = a([c], e)
            }(cc.Component);
        n.default = s, cc._RF.pop()
    }, {}],
    SwitchRoleWindow: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d725bSCtQNOXrg8JcdvaWA+", "SwitchRoleWindow");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Const/EventConst"),
            c = t("../Manager/GameEventManager"),
            i = t("../Manager/WindowManager"),
            s = t("./WindowBase"),
            l = t("../Const/SoundConst"),
            u = t("../Manager/SoundManager"),
            p = cc._decorator,
            d = p.ccclass,
            f = (p.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.init = function() {
                    t.prototype.init.call(this)
                }, e.prototype.addEvent = function() {
                    t.prototype.addEvent.call(this)
                }, e.prototype.onOk = function(t) {
                    c.GameEventManager.intance.postMsg(r.EventConst.SWITCH_ROLE), i.default.instance.closeWindow(this.node), u.default.instance.playEffect(l.SoundConst.BUTTON)
                }, e = a([d], e)
            }(s.default));
        n.default = f, cc._RF.pop()
    }, {
        "../Const/EventConst": "EventConst",
        "../Const/SoundConst": "SoundConst",
        "../Manager/GameEventManager": "GameEventManager",
        "../Manager/SoundManager": "SoundManager",
        "../Manager/WindowManager": "WindowManager",
        "./WindowBase": "WindowBase"
    }],
    UILayer: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "4e2d0B/rXxMwLSfEFKgwlE7", "UILayer");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Manager/GameEventManager"),
            c = t("../Const/EventConst"),
            i = t("../Const/SceneAndWindowConst"),
            s = t("../Manager/WindowManager"),
            l = t("../Manager/GameDataManager"),
            u = t("../Const/SoundConst"),
            p = t("../Manager/SoundManager"),
            d = cc._decorator,
            f = d.ccclass,
            h = d.property,
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.btnExit = null, e.btnSlice = null, e.btnProp = null, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    l.GameDataManager.instance.ui = this, l.GameDataManager.instance.uiLayer = this.node, this.addEvent()
                }, e.prototype.addEvent = function() {
                    this.btnExit.node.on(cc.Node.EventType.TOUCH_END, this.onExit, this), this.btnSlice.node.on(cc.Node.EventType.TOUCH_END, this.onSlice, this), this.btnProp.node.on(cc.Node.EventType.TOUCH_END, this.onProp, this), r.GameEventManager.intance.registerMsg(c.EventConst.ENABLE_SLICE_BUTTON, this.onEnableSliceButton, this), r.GameEventManager.intance.registerMsg(c.EventConst.UNENABLE_SLICE_BUTTON, this.onUnenableSliceButton, this)
                }, e.prototype.onExit = function(t) {
                    s.default.instance.openWindow(i.SceneAndWindowConst.EXIT_WINDOW), p.default.instance.playEffect(u.SoundConst.BUTTON)
                }, e.prototype.onSlice = function(t) {
                    this.btnSlice.interactable && this.slice()
                }, e.prototype.slice = function() {
                    r.GameEventManager.intance.postMsg(c.EventConst.SLICE, !1), p.default.instance.playEffect(u.SoundConst.BUTTON)
                }, e.prototype.onProp = function(t) {
                    this.btnProp.interactable && (s.default.instance.openWindow(i.SceneAndWindowConst.PROP_LIST_WINDOW), p.default.instance.playEffect(u.SoundConst.BUTTON))
                }, e.prototype.onEnableSliceButton = function(t) {
                    this.btnSlice.interactable = !0, this.btnProp.interactable = !0, r.GameEventManager.intance.postMsg(c.EventConst.ROLE_TURN)
                }, e.prototype.onUnenableSliceButton = function(t) {
                    this.btnSlice.interactable = !1, this.btnProp.interactable = !1
                }, a([h(cc.Button)], e.prototype, "btnExit", void 0), a([h(cc.Button)], e.prototype, "btnSlice", void 0), a([h(cc.Button)], e.prototype, "btnProp", void 0), e = a([f], e)
            }(cc.Component);
        n.default = g, cc._RF.pop()
    }, {
        "../Const/EventConst": "EventConst",
        "../Const/SceneAndWindowConst": "SceneAndWindowConst",
        "../Const/SoundConst": "SoundConst",
        "../Manager/GameDataManager": "GameDataManager",
        "../Manager/GameEventManager": "GameEventManager",
        "../Manager/SoundManager": "SoundManager",
        "../Manager/WindowManager": "WindowManager"
    }],
    WindowBase: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b2a4eLVRFBMKZxbHwu7pKx2", "WindowBase");
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
            a = this && this.__decorate || function(t, e, n, o) {
                var a, r = arguments.length,
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Const/EventConst"),
            c = t("../Manager/GameEventManager"),
            i = t("../Manager/WindowManager"),
            s = t("../Manager/SoundManager"),
            l = t("../Const/SoundConst"),
            u = cc._decorator,
            p = u.ccclass,
            d = (u.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.btnOk = null, e.btnCancel = null, e
                }
                return o(e, t), e.prototype.onLoad = function() {
                    this.init(), this.addEvent()
                }, e.prototype.init = function() {
                    this.btnOk = this.node.getChildByName("content").getChildByName("btnOk"), this.btnCancel = this.node.getChildByName("content").getChildByName("btnCancel")
                }, e.prototype.addEvent = function() {
                    this.btnOk && this.btnOk.on(cc.Node.EventType.TOUCH_END, this.onOk, this), this.btnCancel && this.btnCancel.on(cc.Node.EventType.TOUCH_END, this.onCancel, this)
                }, e.prototype.goOn = function() {
                    c.GameEventManager.intance.postMsg(r.EventConst.SWITCH_ROLE)
                }, e.prototype.onOk = function(t) {}, e.prototype.onCancel = function(t) {
                    i.default.instance.closeWindow(this.node), this.goOn(), s.default.instance.playEffect(l.SoundConst.BUTTON)
                }, e = a([p], e)
            }(cc.Component));
        n.default = d, cc._RF.pop()
    }, {
        "../Const/EventConst": "EventConst",
        "../Const/SoundConst": "SoundConst",
        "../Manager/GameEventManager": "GameEventManager",
        "../Manager/SoundManager": "SoundManager",
        "../Manager/WindowManager": "WindowManager"
    }],
    WindowManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "babc47/Je1KPZ4ocxrJvSN7", "WindowManager");
        var o = this && this.__decorate || function(t, e, n, o) {
            var a, r = arguments.length,
                c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
            else
                for (var i = t.length - 1; i >= 0; i--)(a = t[i]) && (c = (r < 3 ? a(c) : r > 3 ? a(e, n, c) : a(e, n)) || c);
            return r > 3 && c && Object.defineProperty(e, n, c), c
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../Extend/GameTool"),
            r = cc._decorator,
            c = r.ccclass,
            i = (r.property, function() {
                function t() {
                    this.winList = []
                }
                var e;
                return e = t, Object.defineProperty(t, "instance", {
                    get: function() {
                        return this.windowManager ? this.windowManager : this.windowManager = new e
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.openWindow = function(t, n, o, r) {
                    void 0 === n && (n = []), void 0 === o && (o = !0), void 0 === r && (r = cc.Canvas.instance.node), this.closeWindows(n);
                    var c = t.split("/").pop();
                    if (!this.getWinByName(c)) {
                        var i = cc.winSize.height,
                            s = cc.Canvas.instance.designResolution.height,
                            l = a.default.getPrefabNode(t);
                        l.group = "ui", l.name = c, this.winList.push(l), r.addChild(l, 100), l.getChildByName("content").scale = 0;
                        var u = i < s ? i / s : 1;
                        return e.instance.addWindowEvents(l, o), l.getChildByName("content").runAction(cc.scaleTo(.15, u, u)), l
                    }
                    console.log("\u7a97\u53e3" + c + "\u5df2\u7ecf\u6253\u5f00")
                }, t.prototype.addWindowEvents = function(t, n) {
                    var o = this,
                        a = t.getChildByName("content").getChildByName("btnClose");
                    e.instance.addClickEvent(t, "content", function() {}, t);
                    var r = cc.winSize.width,
                        c = cc.winSize.height,
                        i = new cc.Node;
                    i.name = "maskNode", i.setContentSize(cc.winSize);
                    var s = i.addComponent(cc.Graphics);
                    s.fillColor = new cc.Color(0, 0, 0, 100), s.fillRect(-r / 2, -c / 2, r, c), t.addChild(i, -1), n ? i.on(cc.Node.EventType.TOUCH_END, function() {
                        o.closeWindow(t)
                    }, t) : i.on(cc.Node.EventType.TOUCH_END, function() {}, t), a && a.on(cc.Node.EventType.TOUCH_END, function() {
                        o.closeWindow(t)
                    }, t)
                }, t.prototype.closeWindow = function(t) {
                    a.default.removeFromArr(t, this.winList), t.destroy()
                }, t.prototype.closeWindows = function(t) {
                    for (var e = 0, n = 0, o = this.winList.length; n < o; n++) t.indexOf(this.winList[e].name) < 0 ? this.closeWindow(this.winList[e]) : e++
                }, t.prototype.getWinByName = function(t) {
                    for (var e = 0, n = this.winList.length; e < n; e++)
                        if (t == this.winList[e].name) return this.winList[e];
                    return null
                }, t.prototype.resizeAllWindows = function() {
                    for (var t = cc.winSize.width, e = cc.winSize.height, n = cc.Canvas.instance.designResolution.height, o = e < n ? e / n : 1, a = 0, r = this.winList.length; a < r; a++) {
                        var c = this.winList[a];
                        c.setPosition(0, 0), c.getChildByName("content").setScale(o);
                        var i = c.getChildByName("maskNode");
                        if (i) {
                            i.setContentSize(cc.winSize);
                            var s = i.getComponent(cc.Graphics);
                            s.clear(), s.fillColor = new cc.Color(0, 0, 0, 100), s.fillRect(-t / 2, -e / 2, t, e)
                        }
                    }
                }, t.prototype.addSystemEvent = function(t, e, n, o, a, r) {
                    t.getChildByName(e).on(n, o, a, r)
                }, t.prototype.addClickEvent = function(t, e, n, o, a) {
                    this.addSystemEvent(t, e, cc.Node.EventType.TOUCH_END, n, o, a)
                }, t.windowManager = null, t = e = o([c], t)
            }());
        n.default = i, cc._RF.pop()
    }, {
        "../Extend/GameTool": "GameTool"
    }]
}, {}, ["BattleRole", "CellBase", "CellBoss", "CellDestiny", "CellGoal", "CellLucky", "CellMst", "CellNormal", "CellNull", "CellStart", "MainCamera", "Mst", "Role", "Stone", "DataConst", "EventConst", "SceneAndWindowConst", "SoundConst", "GamData", "GameTool", "KbEvent", "OnceMc", "RepeatMc", "AwardLayer", "BattlePanel", "CellLayer", "LuckDrawPanel", "RoleInfoPanel", "SliceLayer", "UILayer", "GameDataManager", "GameEventManager", "SceneManager", "SoundManager", "WindowManager", "PropListCell", "PropUse", "GameScene", "LoadingScene", "MainContent", "MainScene", "SelectScene", "AdWindow", "BuyCellWindow", "CostGoldWindow", "DestinyWindow", "EndWindow", "ExitWindow", "FailWindow", "LoadingWindow", "PropListWindow", "SwitchRoleWindow", "WindowBase"]);