window.__require = function e(t, i, n) {
    function a(o, r) {
        if (!i[o]) {
            if (!t[o]) {
                var c = o.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l) return l(c, !0);
                    if (s) return s(c, !0);
                    throw new Error("Cannot find module '" + o + "'")
                }
                o = c
            }
            var u = i[o] = {
                exports: {}
            };
            t[o][0].call(u.exports, function(e) {
                return a(t[o][1][e] || e)
            }, u, u.exports, e, t, i, n)
        }
        return i[o].exports
    }
    for (var s = "function" == typeof __require && __require, o = 0; o < n.length; o++) a(n[o]);
    return a
}({
    ButtonScaler: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "dbf989ZwyJF+L/Qdx5FQ5zt", "ButtonScaler"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("./game_tools"),
            a = cc._decorator,
            s = a.ccclass,
            o = (a.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.pressedScale = .9, t.transDuration = .1, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    var e = this.node.scale,
                        t = cc.scaleTo(this.transDuration, this.pressedScale),
                        i = cc.scaleTo(this.transDuration, e);

                    function a(e) {
                        this.stopAllActions(), this.runAction(i)
                    }
                    this.node.on("touchstart", function(e) {
                        this.stopAllActions(), this.runAction(t), n.default.playSound("music/btnclick", !1)
                    }, this.node), this.node.on("touchend", a, this.node), this.node.on("touchcancel", a, this.node)
                }, t = __decorate([s], t)
            }(cc.Component));
        i.default = o, cc._RF.pop()
    }, {
        "./game_tools": "game_tools"
    }],
    CollisionTools: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "3e3afcZiUlIJKg6jV4fYosS", "CollisionTools"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../managers/event_mgr"),
            a = e("../tools/game_tools"),
            s = cc._decorator,
            o = s.ccclass,
            r = (s.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    cc.director.getCollisionManager().enabled = !0
                }, t.prototype.onCollisionEnter = function(e, t) {
                    var i = a.default.getClearName(e.name),
                        s = a.default.getClearName(t.name);
                    n.default.getInstance().dispatch_event("collision_enter", {
                        name: i,
                        myname: s
                    })
                }, t.prototype.onCollisionStay = function(e, t) {}, t.prototype.onCollisionExit = function(e, t) {
                    var i = e.name.substring(0, e.name.indexOf("<")),
                        s = a.default.getClearName(t.name);
                    n.default.getInstance().dispatch_event("collision_exit", {
                        name: i,
                        myname: s
                    })
                }, t = __decorate([o], t)
            }(cc.Component));
        i.default = r, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../tools/game_tools": "game_tools"
    }],
    CommonFun: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "95a8dXQ6ZVDtLR2/3YWfE2Z", "CommonFun"), Object.defineProperty(i, "__esModule", {
                value: !0
            }),
            function(e) {
                e.angleFromVector = function(e, t) {
                    return 180 * Math.atan2(t, e) / Math.PI
                }, e.vectorFromAngle = function(e) {
                    var t = e * Math.PI / 180,
                        i = Math.cos(t),
                        n = -Math.sin(t),
                        a = new cc.Vec2(i, -n);
                    return a.normalizeSelf(), a
                }, e.loadPrefabSync = function(e) {
                    return __awaiter(this, void 0, Promise, function() {
                        return __generator(this, function(t) {
                            return [2, new Promise(function(t, i) {
                                cc.loader.loadRes(e, cc.Prefab, function(e, i) {
                                    t(i)
                                })
                            })]
                        })
                    })
                }, e.loadTextrueSync = function(e) {
                    return __awaiter(this, void 0, Promise, function() {
                        return __generator(this, function(t) {
                            return [2, new Promise(function(t, i) {
                                cc.loader.loadRes(e, cc.SpriteFrame, function(e, i) {
                                    t(e ? null : i)
                                })
                            })]
                        })
                    })
                }, e.loadTextrueDirSync = function(e) {
                    return __awaiter(this, void 0, Promise, function() {
                        return __generator(this, function(t) {
                            return [2, new Promise(function(t, i) {
                                cc.loader.loadResDir(e, cc.SpriteFrame, function(e, i, n) {
                                    t(e ? null : i)
                                })
                            })]
                        })
                    })
                }
            }(i.CommonFun || (i.CommonFun = {})), cc._RF.pop()
    }, {}],
    GunScaler: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "8dc2dZhA9VNHKtHSpvXGWOy", "GunScaler"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc._decorator,
            a = n.ccclass,
            s = (n.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.pressedScale = 1.1, t.transDuration = .1, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    var e = this.node.scale,
                        t = cc.scaleTo(this.transDuration, this.pressedScale),
                        i = cc.scaleTo(this.transDuration, e);

                    function n(e) {
                        this.stopAllActions(), this.runAction(i)
                    }
                    this.node.on("touchstart", function(e) {
                        this.stopAllActions(), this.runAction(t)
                    }, this.node), this.node.on("touchend", n, this.node), this.node.on("touchcancel", n, this.node)
                }, t = __decorate([a], t)
            }(cc.Component));
        i.default = s, cc._RF.pop()
    }, {}],
    RockLine: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "1a9bcw9KQ5E7IdRXvyViwa3", "RockLine"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("./game_tools"),
            a = cc._decorator,
            s = a.ccclass,
            o = a.property,
            r = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.x1 = null, t.x2 = null, t.x3 = null, t._postions = [], t.preHeight = 0, t.fristPoint = null, t.lastPoint = null, t.disacne = 0, t
                }
                return __extends(t, e), t.prototype.start = function() {
                    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this), this.node.on(cc.Node.EventType.TOUCH_END, this.touch_end, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touch_end, this)
                }, t.prototype.update = function(e) {}, t.prototype.touch_move = function(e) {
                    if (null == this.fristPoint) this.fristPoint = e.getPreviousLocation();
                    else {
                        if (this._postions.length >= 4 && (this.disacne++, 2 == this.disacne)) {
                            var t = this._postions[0],
                                i = cc.instantiate(this.x3);
                            i.parent = this.node, i.height = e.getPreviousLocation().subtract(t).len() + 10, this.preHeight = i.height;
                            var n = this.node.convertToNodeSpaceAR(t);
                            i.x = n.x, i.y = n.y;
                            var a = 180 * Math.atan2(e.getPreviousLocation().subtract(t).y, e.getPreviousLocation().subtract(t).x) / Math.PI;
                            i.angle = a + 90, this._postions = [], this.disacne = 0
                        }
                        this.lastPoint = e.getPreviousLocation(), this._postions.push(e.getPreviousLocation())
                    }
                }, t.prototype.touch_end = function(e) {
                    this._postions = [];
                    var t = this.node.children[this.node.childrenCount - 1];
                    n.default.setImgTexture("xx2", t), this.lastPoint = null, this.fristPoint = null
                }, __decorate([o(cc.Prefab)], t.prototype, "x1", void 0), __decorate([o(cc.Prefab)], t.prototype, "x2", void 0), __decorate([o(cc.Prefab)], t.prototype, "x3", void 0), t = __decorate([s], t)
            }(cc.Component);
        i.default = r, cc._RF.pop()
    }, {
        "./game_tools": "game_tools"
    }],
    Rock_wx: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "086fcuj6BhMF7bWACdeixtW", "Rock_wx"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../utils/config"),
            a = e("../managers/event_mgr"),
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.game_over_time = function(e, t) {
                    "h5" != n.default.version && wx.aldSendEvent("\u73a9\u5bb6\u89d2\u8272\u6b7b\u4ea1", {
                        "\u5173\u5361": t,
                        "\u8017\u65f6": e
                    })
                }, t.save = function(e, i) {
                    "h5" != n.default.version ? wx.setStorageSync(e, i) : "userdata" == e || "chengjiu" == e ? t.json_save(e, i) : cc.sys.localStorage.setItem(e, i)
                }, t.load = function(e) {
                    return "h5" != n.default.version ? wx.getStorageSync(e) : cc.sys.localStorage.getItem(e)
                }, t.initWX = function() {
                    "h5" != n.default.version && (wx.showShareMenu({
                        withShareTicket: !0
                    }), wx.aldOnShareAppMessage(function() {
                        return {
                            title: "[\u6709\u4eba@\u4f60]\u840c\u59b9\u9080\u8bf7\u4f60\u4e00\u8d77\u6218\u6597",
                            imageUrl: "https://mmocgame.qpic.cn/wechatgame/4YkvnEYKxzc3olumcZKTEPic8IJQFzE93rcOBCTEEpcr1yiaqoxj4eqeMXDHfZoWxN/0"
                        }
                    }), wx.onHide(function() {
                        var e = new Date,
                            i = 1e4 * e.getFullYear() + 100 * (e.getMonth() + 1) + e.getDate(),
                            a = e.getTime();
                        n.default.userData.isDoNotResetTiliTime && (n.default.userData.leave_time_s = a, n.default.userData.isDoNotResetTiliTime = !1), n.default.userData.leave_time = i, t.saveUserData(), n.default.isShareing && (n.default.share_leave_time = (new Date).getTime(), console.log("\u5206\u4eab\u9690\u85cf\u7684\u65f6\u95f4 ", n.default.share_leave_time))
                    }), wx.onShow(function() {
                        if (console.log("===on show"), n.default.isShareing) {
                            var e = (new Date).getTime(),
                                i = Math.floor((e - n.default.share_leave_time) / 1e3);
                            console.log("\u5206\u4eab\u7684\u8fd4\u56de\u7684\u65f6\u95f4 ", e), console.log("\u89e6\u53d1\u5206\u4eab\u7684\u65f6\u95f4 ", n.default.share_leave_time), console.log("\u4e24\u4e2a\u65f6\u95f4\u7684\u5dee\u503c", i), i < 3 && n.default.shareTime < 1 ? (wx.showToast({
                                title: "Chia sẻ thất bại",
                                icon: "none",
                                duration: 2e3
                            }), n.default.shareTime++, wx.showModal({
                                title: "Chúc mừng",
                                content: "\u8bf7\u5206\u4eab\u5230\u7fa4",
                                success: function(e) {
                                    if (e.confirm) t.share();
                                    else if (e.cancel) return
                                }
                            })) : (n.default.shareTime = 0, console.log("\u5206\u4eab\u6210\u529f"), a.default.getInstance().dispatch_event("share_success", {
                                share_id: n.default.share_id
                            }))
                        }
                        var s = (new Date).getTime() - n.default.userData.leave_time_s,
                            o = Math.floor(s / 1e3);
                        if (console.log("\u79bb\u5f00\u7684\u79d2\u6570\u4e3a:", Math.floor(o)), n.default.userData.tili <= 5) {
                            var r = Math.floor(o / 300);
                            n.default.userData.tili += r, n.default.userData.tili >= 5 && (n.default.userData.isDoNotResetTiliTime = !0, n.default.userData.tili = 5, t.saveUserData())
                        }
                    }))
                }, t.saveUserData = function() {
                    "h5" != n.default.version ? t.save("userdata", n.default.userData) : t.json_save("userdata", n.default.userData)
                }, t.loadUserData = function() {
                    return "h5" == n.default.version ? t.json_load("userdata") : t.load("userdata")
                }, t.json_save = function(e, t) {
                    cc.sys.localStorage.setItem(e, JSON.stringify(t))
                }, t.json_load = function(e) {
                    return JSON.parse(cc.sys.localStorage.getItem(e))
                }, t.share_success_4399 = function(e) {
                    console.log("canPlayAd is", e), e ? (console.log("share_success_4399"), a.default.getInstance().dispatch_event("share_success", {
                        share_id: n.default.share_id
                    })) : (console.log("\u5e7f\u544a\u64ad\u653e\u5931\u8d25"), a.default.getInstance().dispatch_event("share_success", {
                        share_id: -1
                    }))
                }, t.share = function() {
                    window.showAD(t.share_success_4399), console.log("cocos share")
                }, t.onLevelStart = function(e) {
                    if ("h5" != n.default.version) {
                        var t = "Đầu tiên" + e + "hạ gục";
                        wx.aldStage.onStart({
                            stageId: "1",
                            stageName: t
                        })
                    }
                }, t.onLevelEnd = function(e) {
                    "h5" != n.default.version && wx.aldStage.onEnd({
                        stageId: e,
                        stageName: "Đầu tiên" + e + "hạ gục",
                        event: "complete",
                        params: {
                            desc: "\u5173\u5361\u5b8c\u6210"
                        }
                    })
                }, t.useingItem = function(e, t) {
                    "h5" != n.default.version && wx.aldStage.onRunning({
                        stageId: e,
                        stageName: "Đầu tiên" + e + "hạ gục",
                        event: "tools",
                        params: {
                            itemName: t,
                            desc: "\u4f7f\u7528\u9053\u5177" + t
                        }
                    })
                }, t.userItemLevel = function(e, t) {
                    "h5" != n.default.version && wx.aldLevel.onInitLevel({
                        levelId: e,
                        levelName: t
                    })
                }, t.userOnSetLevel = function(e, t) {
                    "h5" != n.default.version && wx.aldLevel.onSetLevel({
                        levelId: e,
                        levelName: t + "Đầu tiên" + e + "\u7ea7"
                    })
                }, t.getShareStr = function(e) {
                    switch (e) {
                        case 1:
                            return "\u5c01\u9762\u70b9\u51fb\u589e\u52a0\u4f53\u529b";
                        case 2:
                            return "\u5c01\u9762\u4f53\u529b\u4e0d\u8db3\u70b9\u51fb\u589e\u52a0\u4f53\u529b";
                        case 3:
                            return "\u53cc\u500d\u9886\u53d6\u767b\u5f55\u5956\u52b1";
                        case 4:
                            return "Không đủ máy bay";
                        case 5:
                            return "\u70b8\u5f39\u9053\u5177\u4e0d\u8db3";
                        case 6:
                            return "\u80dc\u5229\u540e\u53cc\u500d\u9886\u53d6\u5956\u52b1";
                        case 7:
                            return "\u5931\u8d25\u540e\u53cc\u500d\u9886\u53d6\u5956\u52b1";
                        case 8:
                            return "\u4f7f\u7528\u590d\u6d3b\u9053\u5177";
                        case 9:
                            return "\u5f39\u836f\u5305\u53cc\u500d\u9886\u53d6";
                        case 10:
                            return "\u5f39\u836f\u5305\u514d\u8d39\u9886\u53d6\u540e\u53cc\u500d\u9886\u53d6";
                        case 11:
                            return "\u5546\u57ce\u91d1\u5e01\u4e0d\u8db3";
                        case 12:
                            return "\u5546\u57ce\u514d\u8d39\u9886\u53d6\u91d1\u5e01";
                        case 13:
                            return "\u5546\u57ce\u4f53\u529b\u4e0d\u8db3";
                        case 14:
                            return "\u53cc\u500d\u9886\u53d6\u6210\u5c31"
                    }
                }, t.postMessage = function(e, t) {
                    "h5" != n.default.version && wx.postMessage({
                        type: e,
                        value: t
                    })
                }, t
            }(cc.Component);
        i.default = s, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../utils/config": "config"
    }],
    UI_ctrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ccfed2lfBFNh4RzwruqlEVi", "UI_ctrl"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc._decorator,
            a = n.ccclass,
            s = (n.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var i;
                return __extends(t, e), i = t, t.prototype.onLoad = function() {
                    this.view = {}, this.load_all_object(this.node, "")
                }, t.prototype.start = function() {}, t.getInstance = function() {
                    return null === this.Instance && (this.Instance = new i), this.Instance
                }, t.prototype.load_all_object = function(e, t) {
                    for (var i = 0; i < e.childrenCount; i++) this.view[t + e.children[i].name] = e.children[i], this.load_all_object(e.children[i], t + e.children[i].name + "/")
                }, t.prototype.add_button_listen = function(e, t, i) {
                    var n = this.view[e];
                    n && (n.getComponent(cc.Button) && n.on("click", i, t))
                }, t.Instance = null, t = i = __decorate([a], t)
            }(cc.Component));
        i.default = s, cc._RF.pop()
    }, {}],
    UI_manager: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "db423Q6ZhlISJTofwzb53R8", "UI_manager"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../managers/res_mgr"),
            a = e("../utils/config"),
            s = function() {
                function e() {}
                return e.getInstance = function() {
                    return null === e.Instance && (e.Instance = new e), e.Instance
                }, e.prototype.add_ui_at = function(e, t) {
                    var i = n.default.getInstance().get_res("/ui_prefabs/" + t),
                        a = null;
                    return i && (a = cc.instantiate(i), e.addChild(a), a.addComponent(t + "_ctrl")), a
                }, e.prototype.enterScene = function(e) {
                    var t = a.default.pkgs[e],
                        i = t.prefabs,
                        s = null;
                    n.default.getInstance().preload_res_pkg(t, function(e) {}, function() {
                        var t = n.default.getInstance().get_res(i.toString());
                        s = cc.instantiate(t), this.canvas.addChild(s), s.addComponent(e + "_ctrl")
                    }.bind(this))
                }, e.prototype.start = function() {}, e.Instance = null, e
            }();
        i.default = s, cc._RF.pop()
    }, {
        "../managers/res_mgr": "res_mgr",
        "../utils/config": "config"
    }],
    baoji: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "50a6aY+ZsJOKrDexRmdjeiC", "baoji"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.spine = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    var e = this;
                    this.spine.setCompleteListener(function() {
                        e.node.active = !1, e.node.parent.removeChild(e.node), e.node.destroy()
                    })
                }, t.prototype.start = function() {}, __decorate([s(sp.Skeleton)], t.prototype, "spine", void 0), t = __decorate([a], t)
            }(cc.Component);
        i.default = o, cc._RF.pop()
    }, {}],
    chengjiu_tips: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "444e8Jh/VRGt7ZScMPbgafY", "chengjiu_tips"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../utils/config"),
            a = cc._decorator,
            s = a.ccclass,
            o = a.property,
            r = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.content = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.prototype.set_chengjiu_tips_content = function(e) {
                    this.node.active = !0, console.log("chengjiu_tips set_chengjiu_tips_content"), this.content.string = n.default.chengjiu_data["chengjiu_" + e].content, n.default.chengjiu_data["chengjiu_" + e].state = "finish"
                }, t.prototype.show_finish = function() {
                    this.node.active = !1, this.node.parent.removeChild(this.node), this.node.destroy()
                }, __decorate([o(cc.Label)], t.prototype, "content", void 0), t = __decorate([s], t)
            }(cc.Component);
        i.default = r, cc._RF.pop()
    }, {
        "../utils/config": "config"
    }],
    chenjiu_list_set: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a4c9cHle2xPeLPk8eWOkEJv", "chenjiu_list_set"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../utils/config"),
            a = e("../tools/game_tools"),
            s = cc._decorator,
            o = s.ccclass,
            r = s.property,
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.content = null, t.jinbi = null, t.jinbi_icon = null, t.tili_icon = null, t.weiwanc_wz = null, t.yiwanc_wz = null, t.chengjiuId = 0, t.chengjiu_state = "", t
                }
                return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.prototype.set_chengjiu_data = function(e) {
                    this.chengjiuId = e, this.content.string = n.default.chengjiu_data["chengjiu_" + e].content, console.log("reward jinbi is ", n.default.chengjiu_data["chengjiu_" + e].reward_jinbi), 0 == n.default.chengjiu_data["chengjiu_" + e].reward_jinbi && (console.log("is 0"), this.tili_icon.active = !0, this.jinbi.string = n.default.chengjiu_data["chengjiu_" + e].reward_tili), 0 == n.default.chengjiu_data["chengjiu_" + e].reward_tili && (this.jinbi_icon.active = !0, this.jinbi.string = n.default.chengjiu_data["chengjiu_" + e].reward_jinbi);
                    var t = n.default.chengjiu_data["chengjiu_" + e].state;
                    switch (this.chengjiu_state = t, t) {
                        case "notFinish":
                            this.weiwanc_wz.node.active = !0, this.yiwanc_wz.node.active = !1;
                            break;
                        case "finish":
                        case "haveGot":
                            this.weiwanc_wz.node.active = !1, this.yiwanc_wz.node.active = !0
                    }
                }, t.prototype.lingQuBtn_click = function() {
                    this.weiwanc_wz.node.active = !1, this.yiwanc_wz.node.active = !0, n.default.chengjiu_data["chengjiu_" + this.chengjiuId].state = "haveGot", a.default.showDialog(this.node.parent.parent.parent, "Chúc mừng", "Nhận thành công")
                }, __decorate([r(cc.Label)], t.prototype, "content", void 0), __decorate([r(cc.Label)], t.prototype, "jinbi", void 0), __decorate([r(cc.Node)], t.prototype, "jinbi_icon", void 0), __decorate([r(cc.Node)], t.prototype, "tili_icon", void 0), __decorate([r(cc.Label)], t.prototype, "weiwanc_wz", void 0), __decorate([r(cc.Label)], t.prototype, "yiwanc_wz", void 0), t = __decorate([o], t)
            }(cc.Component);
        i.default = c, cc._RF.pop()
    }, {
        "../tools/game_tools": "game_tools",
        "../utils/config": "config"
    }],
    config: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b1a450hSXRN4ocI2FkI0QLt", "config"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {}
            return e.playType = 1, e.GAME_STATE = -1, e.GAME_LOGIN = 0, e.GAME_PLAYING = 1, e.GAME_PAUSE = 2, e.GAME_OVER = 3, e.GAME_TITLE = 5, e.GAME_TEACH_0 = 6, e.isFirstTimeGame = "", e.version = "h5", e.today_have_sign = 0, e.json_num = 0, e.isShowingAlert = !1, e.URL = "https://rock.jsstudio.cn/rock_servers", e.localVersion = "", e.isTanChuanging = !1, e.isRewardWindowShow = !1, e.need_to_sign = !1, e.share_id = 0, e.isShareing = !1, e.share_leave_time = 0, e.share_login_time = 0, e.pkgs = {
                game_title: {
                    prefabs: ["ui_prefabs/game_title"],
                    sprite_frames: [],
                    audio_clips: [],
                    sprite_atlases: []
                },
                game_main: {
                    prefabs: ["ui_prefabs/game_main"],
                    sprite_frames: [],
                    audio_clips: [],
                    sprite_atlases: []
                },
                game_shop: {
                    prefabs: ["ui_prefabs/game_shop"],
                    sprite_frames: [],
                    audio_clips: [],
                    sprite_atlases: []
                },
                sign: {
                    prefabs: ["ui_prefabs/sign"],
                    sprite_frames: [],
                    audio_clips: [],
                    sprite_atlases: []
                },
                rank: {
                    prefabs: ["ui_prefabs/rank"],
                    sprite_frames: [],
                    audio_clips: [],
                    sprite_atlases: []
                },
                game_chengjiu: {
                    prefabs: ["ui_prefabs/game_chengjiu"],
                    sprite_frames: [],
                    audio_clips: [],
                    sprite_atlases: []
                }
            }, e.hero_att = 30, e.hero_kill_enemy = 0, e.level_data = {}, e.enemy_data = {
                enemy_0: {
                    hp: 300,
                    speed: 30,
                    att: 10,
                    att_delay: 1,
                    weight: 1
                },
                enemy_1: {
                    hp: 300,
                    speed: 30,
                    att: 10,
                    att_delay: 1,
                    weight: 1
                },
                enemy_2: {
                    hp: 300,
                    speed: 30,
                    att: 10,
                    att_delay: 1,
                    weight: 1
                },
                enemy_3: {
                    hp: 300,
                    speed: 30,
                    att: 10,
                    att_delay: 1,
                    weight: 1
                },
                enemy_4: {
                    hp: 300,
                    speed: 30,
                    att: 10,
                    att_delay: 1,
                    weight: 1
                }
            }, e.hero_data = {
                att: 30
            }, e.fanghu_data = {
                level: 0,
                hps: {
                    fanghu_0: {
                        hp: 300
                    },
                    fanghu_1: {
                        hp: 300
                    },
                    fanghu_2: {
                        hp: 300
                    }
                }
            }, e.isFenBaoFinish = !1, e.kill_putong_js = 0, e.kill_glq_js = 0, e.kill_gun_js = 0, e.kull_kxj_js = 0, e.chengjiu_data = {
                chengjiu_0: {
                    content: "Hạ 100 Zombie bình thường",
                    reward_cont: "3\u70b9\u4f53\u529b",
                    reward_jinbi: 0,
                    reward_tili: 3,
                    state: "notFinish"
                },
                chengjiu_1: {
                    content: "Hạ 5 nữ Zombie",
                    reward_cont: "Năng lượng x5",
                    reward_jinbi: 0,
                    reward_tili: 5,
                    state: "notFinish"
                },
                chengjiu_2: {
                    content: "Vượt qua 10 level",
                    reward_cont: "Nhận xu x200",
                    reward_jinbi: 200,
                    reward_tili: 0,
                    state: "notFinish"
                },
                chengjiu_3: {
                    content: "Hoàn thành 25 level",
                    reward_cont: "Nhận xu x600",
                    reward_jinbi: 600,
                    reward_tili: 0,
                    state: "notFinish"
                },
                chengjiu_4: {
                    content: "Hạ 50 Zombie có súng",
                    reward_cont: "Năng lượng x5",
                    reward_jinbi: 0,
                    reward_tili: 5,
                    state: "notFinish"
                },
                chengjiu_5: {
                    content: "Hoàn thành 50 level",
                    reward_cont: "Nhận xu x1000",
                    reward_jinbi: 1e3,
                    reward_tili: 0,
                    state: "notFinish"
                },
                chengjiu_6: {
                    content: "Hạ 500 Zombie bình thường",
                    reward_cont: "Năng lượng x5",
                    reward_jinbi: 0,
                    reward_tili: 5,
                    state: "notFinish"
                },
                chengjiu_7: {
                    content: "Nâng cấp súng",
                    reward_cont: "Năng lượng x1",
                    reward_jinbi: 0,
                    reward_tili: 1,
                    state: "notFinish"
                },
                chengjiu_8: {
                    content: "Nâng cấp rào chắn",
                    reward_cont: "Năng lượng x1",
                    reward_jinbi: 0,
                    reward_tili: 1,
                    state: "notFinish"
                },
                chengjiu_9: {
                    content: "Hạ 10 nhà khoa học Zombie",
                    reward_cont: "Năng lượng x5",
                    reward_jinbi: 0,
                    reward_tili: 5,
                    state: "notFinish"
                }
            }, e.userData = {
                name: "123",
                icon: "",
                score: 0,
                jinbi: 500,
                tili: 99,
                isDoNotResetTiliTime: !1,
                zhadan: 3,
                feiji: 3,
                gun_level: 0,
                zhadan_level: 0,
                plane_level: 0,
                fanghu_level: 0,
                login_time: 0,
                leave_time: 0,
                leave_time_s: 0,
                user_today_have_login: !1,
                ling_jinbi_time: 0,
                isFinishXinShou: !1,
                backTitleTime: 0,
                kill_enemy_0_num: 0,
                kill_enemy_3_num: 0,
                kill_enemy_4_num: 0,
                kill_enemy_5_num: 0
            }, e.tiliTime = "1111", e.current_level_get_jinbi = 0, e.plane_data = {}, e.is_player_double_att = !1, e.qiqiu_data = {}, e.game_shop_data = {
                data_0: 0,
                data_1: 0,
                data_2: 0,
                data_3: 0
            }, e.shareTime = 0, e.startGameTime = 0, e
        }();
        i.default = n, cc._RF.pop()
    }, {}],
    dialog: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "cc3718wAKtNDbuvXDiHk+um", "dialog"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../utils/config"),
            a = cc._decorator,
            s = a.ccclass,
            o = (a.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.init()
                }, t.prototype.init = function() {
                    this.getComponent(cc.Animation).play("dialog", 0), this.title = this.node.getChildByName("title").getComponent(cc.Label), this.content = this.node.getChildByName("content").getComponent(cc.Label)
                }, t.prototype.setInfo = function(e, t) {
                    this.title.string = e, this.content.string = t
                }, t.prototype.comitBtnClick = function() {
                    console.log("comit btn click"), this.getComponent(cc.Animation).play("dialog_close", 0)
                }, t.prototype.remove = function() {
                    console.log("remove"), n.default.isShowingAlert = !1, this.node.parent.removeChild(this.node), this.node.destroy()
                }, t = __decorate([s], t)
            }(cc.Component));
        i.default = o, cc._RF.pop()
    }, {
        "../utils/config": "config"
    }],
    double_get_window: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4c2e0DWAfZKbqKPXe5vsyFb", "double_get_window"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.lingquBtn = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.init()
                }, t.prototype.update = function(e) {}, t.prototype.init = function() {
                    this.title = this.node.getChildByName("title").getComponent(cc.Label), this.content = this.node.getChildByName("content").getComponent(cc.Label), this.lingquBtn.getComponent(cc.Animation).play("closeBtn")
                }, t.prototype.setInfo = function(e, t, i) {
                    this.title.string = e, this.content.string = t, this._node = i
                }, t.prototype.doubleBtnClick = function() {
                    this._node.getComponent("reward_window").dob_left_get()
                }, t.prototype.lingquBtnClick = function() {
                    console.log("\u9886\u53d6"), this._node.getComponent("reward_window").left_get()
                }, t.prototype.remove = function() {
                    console.log("remove"), this.node.parent.removeChild(this.node), this.node.destroy()
                }, __decorate([s(cc.Button)], t.prototype, "lingquBtn", void 0), t = __decorate([a], t)
            }(cc.Component);
        i.default = o, cc._RF.pop()
    }, {}],
    enemy_boss_yuancheng: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "96049lT77dHUaeJBo5vjIB2", "enemy_boss_yuancheng"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../managers/event_mgr"),
            a = e("./enemy_yuancheng"),
            s = cc._decorator,
            o = s.ccclass,
            r = (s.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this.boss_init()
                }, t.prototype.boss_init = function() {
                    n.default.getInstance().dispatch_event("wraning", {})
                }, t = __decorate([o], t)
            }(a.default));
        i.default = r, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "./enemy_yuancheng": "enemy_yuancheng"
    }],
    enemy_boss: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "3cad71kHyFJHp+jRREn7oJw", "enemy_boss"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("./enemy"),
            a = e("../managers/event_mgr"),
            s = cc._decorator,
            o = s.ccclass,
            r = (s.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this.boss_init()
                }, t.prototype.boss_init = function() {
                    a.default.getInstance().dispatch_event("wraning", {})
                }, t = __decorate([o], t)
            }(n.default));
        i.default = r, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "./enemy": "enemy"
    }],
    enemy_bullet: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f56c8Lj2jtCKosds7Wm+UNd", "enemy_bullet"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bullet_state = "", t.buttle_type = 0, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    var e = this;
                    this.spine = this.node.getComponent(sp.Skeleton), this.bullet_state = "go", this.spine.setCompleteListener(function() {
                        "hurtWeilan" == e.bullet_state && (e.bullet_state = "hitWeiLan_finish")
                    })
                }, t.prototype.getBulletState = function() {
                    return this.bullet_state
                }, t.prototype.setBulletState = function(e) {
                    this.bullet_state = e
                }, t.prototype.onCollisionEnter = function(e, t) {
                    var i = e.name.substring(0, 5);
                    console.log("sub is ", i), "welan" == i && this.hitWeiLan(), "player" == i && console.log("buttle hit player")
                }, t.prototype.hitWeiLan = function() {
                    this.bullet_state = "hitWeiLan", 0 == this.buttle_type && this.spine.setAnimation(0, "qiang_dazhong", !1), 1 == this.buttle_type && this.spine.setAnimation(0, "duping_bao", !1), 2 == this.buttle_type && this.spine.setAnimation(0, "glqjszdtx", !1)
                }, t.prototype.onCollisionStay = function(e, t) {}, t.prototype.start = function() {}, __decorate([s(cc.Float)], t.prototype, "buttle_type", void 0), t = __decorate([a], t)
            }(cc.Component);
        i.default = o, cc._RF.pop()
    }, {}],
    enemy_die: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ca300wKROFNjoj6CiKHk7N3", "enemy_die"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.spine = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    var e = this;
                    this.spine.setCompleteListener(function() {
                        e.node.active = !1, e.node.parent.removeChild(e.node), e.node.destroy()
                    })
                }, t.prototype.start = function() {}, __decorate([s(sp.Skeleton)], t.prototype, "spine", void 0), t = __decorate([a], t)
            }(cc.Component);
        i.default = o, cc._RF.pop()
    }, {}],
    enemy_nor: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "fe22dIJYDxD1r++AlwbDSXZ", "enemy_nor"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("./enemy"),
            a = cc._decorator,
            s = a.ccclass,
            o = (a.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t = __decorate([s], t)
            }(n.default));
        i.default = o, cc._RF.pop()
    }, {
        "./enemy": "enemy"
    }],
    enemy_yuancheng: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "85ac0Bbyh1Oy6YyCwx3laMx", "enemy_yuancheng"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("./enemy"),
            a = e("../tools/game_tools"),
            s = e("../utils/config"),
            o = cc._decorator,
            r = o.ccclass,
            c = (o.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.yuancheng_attack_delay = 0, t.isBulletShoot = !1, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this.enemy_yuancheng_init()
                }, t.prototype.initEnemyData = function(t, i) {
                    var n = this;
                    e.prototype.initEnemyData.call(this, t, i), a.default.getPrefab("prefabs/b_enemy_bullet_" + this.enemy_type, function(e) {
                        n.enemyBullet_prefab = e
                    })
                }, t.prototype.enemy_yuancheng_init = function() {
                    this.setSpine()
                }, t.prototype.setSpine = function() {
                    var e = this;
                    this.current_spine.setCompleteListener(function() {
                        "beida" != e.enemy_state || e.isAttacking || e.walk(), e.isTheRoadFinish ? e.walk() : "beida" == e.enemy_state && e.isAttacking && e.attack(), e.isHitWeiLan || "gongji" == e.enemy_state && (e.isAttacking = !1, e.isBulletShoot = !0, e.walk())
                    })
                }, t.prototype.buttleRun = function() {
                    if ("die" != this.enemy_state && !(this.e_bullets.length <= 0))
                        for (var e = this.e_bullets.length - 1; e >= 0; e--) {
                            var t = this.e_bullets[e].getComponent("enemy_bullet").getBulletState();
                            if ("hitWeiLan" != t && "hurtWeilan" != t && (this.e_bullets[e].y -= 10), "hitWeiLan" == t) {
                                var i = a.default.getRandomSpaceFromTo(this.att_down, this.att_up);
                                console.log("\u8f93\u51fa\u4f24\u5bb3", i), this._event_mgr.dispatch_event("fanghu_hurt", {
                                    lmr: this.lmr,
                                    hurt: i
                                }), 5 != this.enemy_type && 35 != this.enemy_type || this._event_mgr.dispatch_event("player_yun", {
                                    lmr: this.lmr
                                }), this.e_bullets[e].getComponent("enemy_bullet").setBulletState("hurtWeilan")
                            }
                            if (this.e_bullets[e].y <= -1500 || "hitWeiLan_finish" == t || "hitPlayer_finish" == t) {
                                console.log("enemy bullet finish"), this.e_bullets[e].active = !1, this.node.removeChild(this.e_bullets[e]), this.e_bullets[e].destroy();
                                var n = this.e_bullets.indexOf(this.e_bullets[e]);
                                n > -1 && this.e_bullets.splice(n, 1)
                            }
                        }
                }, t.prototype.yuancheng_attack = function() {
                    "die" != this.enemy_state && (this.current_spine.setAnimation(0, "gongji", !0), this.enemy_state = "gongji")
                }, t.prototype.update = function(t) {
                    if (e.prototype.checkEnemyUpdate.call(this, t), "die" != this.enemy_state) {
                        if (s.default.GAME_STATE == s.default.GAME_PAUSE) return this.current_spine.paused = !0, void(this.current_spine.timeScale = 0);
                        if (s.default.GAME_STATE != s.default.GAME_OVER) {
                            if (this.isBulletShoot && (this.enemy_bullet = cc.instantiate(this.enemyBullet_prefab), this.node.addChild(this.enemy_bullet), this.e_bullets.push(this.enemy_bullet), this.isBulletShoot = !1), this.buttleRun(), this.yuancheng_attack_delay += t, this.yuancheng_attack_delay > 2 && !this.isTheRoadFinish && !this.isAttacking && null != this.enemyBullet_prefab && (this.isAttacking = !0, this.yuancheng_attack_delay = 0, 4 == this.enemy_type && a.default.playSound("music/gun_4", !1), this.yuancheng_attack()), "gongji" == this.enemy_state && this.isHitWeiLan && (this.isAttacking = !0, this.att_delay -= t, this.att_delay <= 0)) {
                                this.att_delay = this.save_att_delay;
                                var i = a.default.getRandomSpaceFromTo(this.att_down, this.att_up);
                                console.log("\u8f93\u51fa\u4f24\u5bb3", i), this._event_mgr.dispatch_event("fanghu_hurt", {
                                    lmr: this.lmr,
                                    hurt: i
                                })
                            }
                            return ("gongji" == this.enemy_state && !this.isHitWeiLan || "zoudong" == this.enemy_state || "beida" == this.enemy_state && !this.isHitWeiLan || "beida" == this.enemy_state && this.isTheRoadFinish) && (this.node.y -= t * this.speed, this.node.y <= -700) ? (this.enemy_state = "die", s.default.GAME_STATE = s.default.GAME_OVER, void this._event_mgr.dispatch_event("game_over", {})) : void 0
                        }
                    }
                }, t = __decorate([r], t)
            }(n.default));
        i.default = c, cc._RF.pop()
    }, {
        "../tools/game_tools": "game_tools",
        "../utils/config": "config",
        "./enemy": "enemy"
    }],
    enemy: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "aa012wDCBBHtJDobWoFqljT", "enemy"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../utils/config"),
            a = e("../managers/event_mgr"),
            s = e("../tools/game_tools"),
            o = e("../tools/CommonFun"),
            r = cc._decorator,
            c = r.ccclass,
            l = r.property,
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.current_spine = null, t.enemy_state = "", t.speed = 0, t.hp = 0, t.enemy_att = 0, t.att_delay = 0, t.att_up = 0, t.att_down = 0, t.jinbi_up = 0, t.jinbi_down = 0, t.enemy_hp_bar = null, t.isHurting = !1, t.isAttacking = !1, t._event_mgr = a.default.getInstance(), t.enemy_type = 0, t.isTheRoadFinish = !1, t.enemy_bullet = null, t.e_bullets = [], t.shootDelay = 0, t.bullet_state = "", t.isHitWeiLan = !1, t.enemy_dir = 0, t.ice = null, t.jiansu_delay = 0, t.isJiansu = !1, t.is_iceing = !1, t.ice_delay = 0, t.jiansu_time = 2, t.jiansu_speed = 3, t.isPlayBeiDaing = !1, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.init()
                }, t.prototype.init = function() {
                    console.log("init"), cc.director.getCollisionManager().enabled = !0, cc.director.getCollisionManager().enabledDebugDraw = !1, this.current_spine = this.node.getComponent(sp.Skeleton), this._event_mgr.add_event_listenner("left_destroy", this, this.destroy_fanghu_finish), this._event_mgr.add_event_listenner("mid_destroy", this, this.destroy_fanghu_finish), this._event_mgr.add_event_listenner("right_destroy", this, this.destroy_fanghu_finish), this._event_mgr.add_event_listenner("game_over", this, this.game_over), this._event_mgr.add_event_listenner("baozha_hurt", this, this.baozha_hurt), this.jiansu_time = n.default.plane_data["level_" + n.default.userData.plane_level].jiansu_time, this.jiansu_speed = n.default.plane_data["level_" + n.default.userData.plane_level].jiansu_speed, this.setSpine()
                }, t.prototype.setSpine = function() {
                    var e = this;
                    this.current_spine.setCompleteListener(function() {
                        "beida" != e.enemy_state || e.isAttacking || (e.isPlayBeiDaing = !1, e.walk()), e.isTheRoadFinish ? e.walk() : e.isAttacking && e.attack()
                    })
                }, t.prototype.initEnemyData = function(e, t) {
                    this.enemy_type = t, console.log("initEnemyData"), this.speed = n.default.enemy_data_json["enemy_" + t].speed, this.normal_speed = this.speed, this.hp = n.default.enemy_data_json["enemy_" + t].hp, this.att_delay = n.default.enemy_data_json["enemy_" + t].att_delay, this.att_up = n.default.enemy_data_json["enemy_" + t].att_up, this.att_down = n.default.enemy_data_json["enemy_" + t].att_down, this.jinbi_up = n.default.enemy_data_json["enemy_" + t].jinbi_up, this.jinbi_down = n.default.enemy_data_json["enemy_" + t].jinbi_down, this.all_hp = this.hp, this.save_att_delay = this.att_delay, this.setListType(e), this.enemy_state = "zoudong"
                }, t.prototype.setEnemyType = function(e) {
                    this.enemy_type = e, console.log(" this.enemy_type is", this.enemy_type)
                }, t.prototype.destroy_fanghu_finish = function(e) {
                    switch (e.dir) {
                        case "left":
                            "left" == this.lmr && (this.isTheRoadFinish = !0, this.isHitWeiLan = !1, this.walk());
                            break;
                        case "mid":
                            "mid" == this.lmr && (this.isTheRoadFinish = !0, this.isHitWeiLan = !1, this.walk());
                            break;
                        case "right":
                            "right" == this.lmr && (this.isTheRoadFinish = !0, this.isHitWeiLan = !1, this.walk())
                    }
                }, t.prototype.setListType = function(e) {
                    switch (this.enemy_dir = e, e) {
                        case 0:
                            this.lmr = "left", this.node.x = -214.262, this.node.y = cc.winSize.height / 2 - this.node.height / 2;
                            break;
                        case 1:
                            this.lmr = "mid", this.node.x = -2.599, this.node.y = cc.winSize.height / 2 - this.node.height / 2;
                            break;
                        case 2:
                            this.lmr = "right", this.node.x = 212.02, this.node.y = cc.winSize.height / 2 - this.node.height / 2
                    }
                }, t.prototype.start = function() {
                    console.log("enemy start "), this.walk()
                }, t.prototype.onCollisionEnter = function(e, t) {
                    if ("die" != this.enemy_state) {
                        "bt" == e.node.name && (e.node.active = !1, this.hurt()), "player" == e.node.name && (console.log("hit player"), this.current_spine.setAnimation(0, "gongji", !0), this._event_mgr.dispatch_event("game_over", {}), n.default.GAME_STATE = n.default.GAME_OVER);
                        var i = s.default.getClearNameByString(e.node.name, "_");
                        "welan" == i && (this.isHitWeiLan = !0, this.attack()), "enemy" == i && (console.log("hit enemy"), this.speed = e.getComponent("enemy").speed)
                    }
                }, t.prototype.onCollisionStay = function(e, t) {
                    "enemy" == s.default.getClearNameByString(e.node.name, "_") && (this.speed = e.getComponent("enemy").speed)
                }, t.prototype.onCollisionExit = function(e, t) {
                    var i = s.default.getClearNameByString(e.node.name, "_");
                    "enemy" == i && (console.log("hit enemy"), this.speed = n.default.enemy_data_json["enemy_" + this.enemy_type].speed), "welan" == i && (this.isHitWeiLan = !1, this.walk())
                }, t.prototype.game_over = function() {
                    this.enemy_state = "die"
                }, t.prototype.walk = function() {
                    "die" != this.enemy_state && (this.current_spine.setAnimation(0, "zoudong", !0), this.enemy_state = "zoudong")
                }, t.prototype.attack = function() {
                    this.current_spine.setAnimation(0, "gongji", !0), this.enemy_state = "gongji"
                }, t.prototype.hurt = function() {
                    this.isHitWeiLan ? (this.enemy_state = "gongji", this.isHurting = !0) : (this.isPlayBeiDaing || (this.current_spine.setAnimation(0, "beida", !1), this.isPlayBeiDaing = !0), this.enemy_state = "beida", this.isHurting = !0)
                }, t.prototype.bomb_hurt = function() {
                    this.isHitWeiLan ? (this.enemy_state = "gongji", this.isHurting = !0) : (this.isPlayBeiDaing || (this.current_spine.setAnimation(0, "beida", !1), this.isPlayBeiDaing = !0), this.enemy_state = "beida", this.isHurting = !0)
                }, t.prototype.getChengjiuCheck = function(e) {
                    switch (e) {
                        case 0:
                            n.default.userData.kill_enemy_0_num++, 100 == n.default.userData.kill_enemy_0_num && this._event_mgr.dispatch_event("finish_kill_chengjiu", {
                                chengjiu_id: 0
                            }), 500 == n.default.userData.kill_enemy_0_num && this._event_mgr.dispatch_event("finish_kill_chengjiu", {
                                chengjiu_id: 6
                            });
                            break;
                        case 3:
                            n.default.userData.kill_enemy_3_num++, 50 == n.default.userData.kill_enemy_3_num && this._event_mgr.dispatch_event("finish_kill_chengjiu", {
                                chengjiu_id: 1
                            });
                            break;
                        case 4:
                            n.default.userData.kill_enemy_4_num++, 50 == n.default.userData.kill_enemy_4_num && this._event_mgr.dispatch_event("finish_kill_chengjiu", {
                                chengjiu_id: 4
                            });
                            break;
                        case 5:
                            n.default.userData.kill_enemy_5_num++, 10 == n.default.userData.kill_enemy_5_num && this._event_mgr.dispatch_event("finish_kill_chengjiu", {
                                chengjiu_id: 9
                            })
                    }
                }, t.prototype.baozha_hurt = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, t, i, a, r;
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return this.bomb_hurt(), "beida" != this.enemy_state && "gongji" != this.enemy_state ? [3, 4] : this.isHurting ? (this.isHurting = !1, this.hp > 0 ? (e = n.default.zhadan_att["level_" + n.default.userData.zhadan_level], console.log("zhadan att is", e), null == this.node ? [3, 2] : (a = (i = cc).instantiate, [4, o.CommonFun.loadPrefabSync("prefabs/hurt_num")])) : [3, 3]) : [3, 4];
                                case 1:
                                    (t = a.apply(i, [c.sent()])).getComponent("hurt_num").set_hurt_num(e), this.node.addChild(t), c.label = 2;
                                case 2:
                                    console.log("\u4f24\u5bb3\u503c\u4e3a:", e), this.hp -= e, this.enemy_hp_bar && (this.enemy_hp_bar.progress = this.hp / this.all_hp), c.label = 3;
                                case 3:
                                    this.hp <= 0 && (r = s.default.getRandomSpaceFromTo(this.jinbi_down, this.jinbi_up), n.default.current_level_get_jinbi += r, console.log("Nhận xu " + r), this.node.active = !1, this.node.parent.removeChild(this.node), this.node.destroy(), this.getChengjiuCheck(this.enemy_type), this._event_mgr.dispatch_event("hero_kill_enemy", {
                                        x: this.node.x,
                                        y: this.node.y,
                                        jinbi: r
                                    }), this.enemy_state = "die"), c.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.feiji_hurt = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, t, i, a, r, c, l, u;
                        return __generator(this, function(h) {
                            switch (h.label) {
                                case 0:
                                    return this.bomb_hurt(), "beida" != this.enemy_state && "gongji" != this.enemy_state ? [3, 6] : this.isHurting ? (this.isHurting = !1, this.hp > 0 ? this.is_iceing ? [3, 2] : (e = this, i = (t = cc).instantiate, [4, o.CommonFun.loadPrefabSync("prefabs/ice")]) : [3, 5]) : [3, 6];
                                case 1:
                                    e.ice = i.apply(t, [h.sent()]), this.ice.y = -this.node.height / 3 + 30, this.node.addChild(this.ice), this.is_iceing = !0, h.label = 2;
                                case 2:
                                    return this.isJiansu = !0, s.default.playSound("music/bing_hit", !1), this.node.color = cc.color(3, 144, 255, 255), this.speed = this.speed / this.jiansu_speed, a = n.default.plane_data["level_" + n.default.userData.plane_level].att, null == this.node ? [3, 4] : (l = (c = cc).instantiate, [4, o.CommonFun.loadPrefabSync("prefabs/hurt_num")]);
                                case 3:
                                    (r = l.apply(c, [h.sent()])).getComponent("hurt_num").set_hurt_num(a), this.node.addChild(r), h.label = 4;
                                case 4:
                                    console.log("\u4f24\u5bb3\u503c\u4e3a:", a), this.hp -= a, this.enemy_hp_bar && (this.enemy_hp_bar.progress = this.hp / this.all_hp), h.label = 5;
                                case 5:
                                    this.hp <= 0 && (u = s.default.getRandomSpaceFromTo(this.jinbi_down, this.jinbi_up), n.default.current_level_get_jinbi += u, console.log("Nhận xu " + u), this.node.active = !1, this.node.parent.removeChild(this.node), this.node.destroy(), this.getChengjiuCheck(this.enemy_type), this._event_mgr.dispatch_event("hero_kill_enemy", {
                                        x: this.node.x,
                                        y: this.node.y,
                                        jinbi: u
                                    }), this.enemy_state = "die"), h.label = 6;
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.checkEnemyUpdate = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, i, a, r, c, l, u, h, _, d, p, f, g, m;
                        return __generator(this, function(v) {
                            switch (v.label) {
                                case 0:
                                    return n.default.GAME_STATE != n.default.GAME_PLAYING ? [3, 10] : (this.current_spine.paused = !1, this.current_spine.timeScale = 1, this.isJiansu && (this.jiansu_delay += e, this.jiansu_delay >= this.jiansu_time && (this.jiansu_delay = 0, this.speed = this.normal_speed, this.isJiansu = !1, this.node.color = cc.Color.WHITE)), this.is_iceing && (this.ice_delay += e, this.node && this.ice_delay >= this.jiansu_time && (this.ice_delay = 0, this.is_iceing = !1, this.ice.active = !1, this.node.removeChild(this.ice), this.ice.destroy())), "beida" != this.enemy_state && "gongji" != this.enemy_state ? [3, 10] : this.isHurting ? (this.isHurting = !1, this.hp > 0 ? (s.default.playSound("music/enemy_hit", !1), a = (i = cc).instantiate, [4, o.CommonFun.loadPrefabSync("prefabs/zidanbao")]) : [3, 9]) : [3, 10]);
                                case 1:
                                    return t = a.apply(i, [v.sent()]), this.enemy_type >= 30 && (t.scale = .5, t.x -= 10), this.node.addChild(t), r = s.default.getRandomSpaceFromTo(n.default.hero_data_json["level_" + n.default.userData.gun_level].att_down, n.default.hero_data_json["level_" + n.default.userData.gun_level].att_up), n.default.is_player_double_att && (r *= 2), c = s.default.getRandomSpace(100), n.default.hero_data_json["level_" + n.default.userData.gun_level].baoji >= c ? (r *= 2, console.log("\u66b4\u51fb,\u8f93\u51fa\u4f24\u5bb3:", r), null == this.node ? [3, 4] : (u = (l = cc).instantiate, [4, o.CommonFun.loadPrefabSync("prefabs/hurt_num")])) : [3, 5];
                                case 2:
                                    return (p = u.apply(l, [v.sent()])).getComponent("hurt_num").set_baoji_num(r), this.node.addChild(p), d = (_ = cc).instantiate, [4, o.CommonFun.loadPrefabSync("prefabs/baoji")];
                                case 3:
                                    h = d.apply(_, [v.sent()]), this.node.addChild(h), v.label = 4;
                                case 4:
                                    return [3, 8];
                                case 5:
                                    return null == this.node ? [3, 7] : (g = (f = cc).instantiate, [4, o.CommonFun.loadPrefabSync("prefabs/hurt_num")]);
                                case 6:
                                    (p = g.apply(f, [v.sent()])).getComponent("hurt_num").set_hurt_num(r), this.node.addChild(p), v.label = 7;
                                case 7:
                                    console.log("\u4f24\u5bb3\u503c\u4e3a:", r), v.label = 8;
                                case 8:
                                    this.hp -= r, this.enemy_hp_bar && (this.enemy_hp_bar.progress = this.hp / this.all_hp), v.label = 9;
                                case 9:
                                    this.hp <= 0 && (s.default.playSound("music/js_hurt", !1), m = s.default.getRandomSpaceFromTo(this.jinbi_down, this.jinbi_up), n.default.current_level_get_jinbi += m, console.log("Nhận xu " + m), this.node.removeAllChildren(), this.node.active = !1, this.node.parent.removeChild(this.node), this.node.destroy(), this.getChengjiuCheck(this.enemy_type), this._event_mgr.dispatch_event("hero_kill_enemy", {
                                        x: this.node.x,
                                        y: this.node.y,
                                        jinbi: m
                                    }), this.enemy_state = "die"), v.label = 10;
                                case 10:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.update = function(e) {
                    if (this.checkEnemyUpdate(e), "die" != this.enemy_state) {
                        if (n.default.GAME_STATE == n.default.GAME_PAUSE) return this.current_spine.paused = !0, void(this.current_spine.timeScale = 0);
                        if (n.default.GAME_STATE != n.default.GAME_OVER) {
                            if ("gongji" == this.enemy_state && (this.isAttacking = !0, this.att_delay -= e, this.att_delay <= 0)) {
                                this.att_delay = this.save_att_delay;
                                var t = s.default.getRandomSpaceFromTo(this.att_down, this.att_up);
                                console.log("\u8f93\u51fa\u4f24\u5bb3", t), s.default.playSound("music/enemy_hit", !1), this._event_mgr.dispatch_event("fanghu_hurt", {
                                    lmr: this.lmr,
                                    hurt: t
                                })
                            }
                            return ("zoudong" == this.enemy_state || "beida" == this.enemy_state && !this.isAttacking || "beida" == this.enemy_state && this.isTheRoadFinish) && (this.node.y -= e * this.speed, this.node.y <= -700) ? (this.enemy_state = "die", n.default.GAME_STATE = n.default.GAME_OVER, void this._event_mgr.dispatch_event("game_over", {})) : void 0
                        }
                    }
                }, __decorate([l(cc.ProgressBar)], t.prototype, "enemy_hp_bar", void 0), t = __decorate([c], t)
            }(cc.Component);
        i.default = u, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../tools/CommonFun": "CommonFun",
        "../tools/game_tools": "game_tools",
        "../utils/config": "config"
    }],
    event_mgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "40c42yUee5NopDCbms+gLDr", "event_mgr"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this.events_map = {}
            }
            return e.getInstance = function() {
                return null === e.Instance && (e.Instance = new e), e.Instance
            }, e.prototype.add_event_listenner = function(e, t, i) {
                this.events_map[e] || (this.events_map[e] = []), this.events_map[e].push({
                    caller: t,
                    func: i
                })
            }, e.prototype.remove_event_listenner = function(e, t, i) {
                if (this.events_map[e]) {
                    for (var n = this.events_map[e], a = 0; a < n.length; a++) {
                        var s = n[a];
                        if (s.caller == t && s.func == i) {
                            n.splice(a, 1);
                            break
                        }
                    }
                    n.length <= 0 && (this.events_map[e] = null)
                }
            }, e.prototype.dispatch_event = function(e, t) {
                if (this.events_map[e])
                    for (var i = this.events_map[e], n = 0; n < i.length; n++) {
                        var a = i[n];
                        a.func.call(a.caller, t)
                    }
            }, e.Instance = null, e
        }();
        i.default = n, cc._RF.pop()
    }, {}],
    frame_anima: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c3620RsaxBJXqU1ViVTKxpZ", "frame_anima"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.sprite_frames = [], t.duration = .1, t.loop = !0, t.play_onload = !0, t.end_func = null, t.is_playing = null, t.play_time = null, t.sprite = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.end_func = null, this.is_playing = !1, this.play_time = 0, this.sprite = this.getComponent(cc.Sprite), this.sprite || (this.sprite = this.addComponent(cc.Sprite)), this.play_onload && (this.loop ? this.play_loop() : this.play_once(null))
                }, t.prototype.start = function() {}, t.prototype.play_loop = function() {
                    this.sprite_frames.length <= 0 || (this.loop = !0, this.end_func = null, this.is_playing = !0)
                }, t.prototype.resetAnima = function() {
                    this.sprite.spriteFrame = this.sprite_frames[0], this.is_playing = !1
                }, t.prototype.play_once = function(e) {
                    this.sprite_frames.length <= 0 || (this.play_time = 0, this.end_func = e, this.loop = !1, this.is_playing = !0)
                }, t.prototype.update = function(e) {
                    if (this.is_playing) {
                        this.play_time += e;
                        var t = Math.floor(this.play_time / this.duration);
                        if (this.loop) {
                            for (; t >= this.sprite_frames.length;) t -= this.sprite_frames.length, this.play_time -= this.sprite_frames.length * this.duration;
                            this.sprite.spriteFrame = this.sprite_frames[t]
                        } else t >= this.sprite_frames.length ? (this.is_playing = !1, this.end_func && this.end_func()) : this.sprite.spriteFrame = this.sprite_frames[t]
                    }
                }, __decorate([s([cc.SpriteFrame])], t.prototype, "sprite_frames", void 0), __decorate([s], t.prototype, "duration", void 0), __decorate([s], t.prototype, "loop", void 0), __decorate([s], t.prototype, "play_onload", void 0), t = __decorate([a], t)
            }(cc.Component);
        i.default = o, cc._RF.pop()
    }, {}],
    game_app: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c5677iYCfxFzozsYxkyNxQ8", "game_app"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../managers/game_mgr"),
            a = e("../managers/event_mgr"),
            s = e("../game_ui/game_title"),
            o = e("../managers/res_mgr"),
            r = e("../game_ui/game_main"),
            c = e("../utils/config"),
            l = e("../tools/net"),
            u = e("../game_ui/setting"),
            h = e("../game_ui/rank"),
            _ = e("../game_ui/pifu"),
            d = e("../tools/Rock_wx"),
            p = e("../game_ui/game_shop"),
            f = e("../game_ui/game_chengjiu"),
            g = e("../tools/game_tools"),
            m = cc._decorator,
            v = m.ccclass,
            y = m.property,
            b = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.load_prefabs = null, t.loadPre = null, t.isShowLoadingUI = !1, t.m = 4, t.s = 60, t.check_tili_delay = 0, t
                }
                var i;
                return __extends(t, e), i = t, t.prototype.getInstance = function() {
                    return null === i.instance && (i.instance = new i), i.instance
                }, t.prototype.onLoad = function() {
                    if ("h5" != c.default.version) {
                        var e = this;
                        cc.loader.downloader.loadSubpackage("gameRes", function(t) {
                            if (t) return console.log("\u5206\u5305\u9519\u8beferr", t), console.error(t);
                            c.default.isFenBaoFinish = !0, console.log("load subpackage successfully."), e.initGameAPP()
                        }), this.initGameAPP()
                    } else c.default.isFenBaoFinish = !0, this.initGameAPP()
                }, t.prototype.initGameAPP = function() {
                    if (c.default.isFenBaoFinish) {
                        cc.director.getPhysicsManager().enabled = !0;
                        var e = cc.PhysicsManager.DrawBits;
                        cc.director.getPhysicsManager().debugDrawFlags = e.e_jointBit | e.e_shapeBit, this.eventManager = a.default.getInstance(), this.eventManager.add_event_listenner("loading_on_finished", this, this.hideLoadingUI), this.eventManager.add_event_listenner("back_title", this, this.gotoTitle), this.eventManager.add_event_listenner("start_game", this, this.gotoGameMain), this.eventManager.add_event_listenner("back_home", this, this.back_home_func), this.eventManager.add_event_listenner("back_game_main", this, this.back_game_main), this.eventManager.add_event_listenner("show_game_shop", this, this.show_game_shop), this.eventManager.add_event_listenner("close_game_shop", this, this.close_game_shop), this.eventManager.add_event_listenner("show_chengjiu", this, this.show_chengjiu), this.eventManager.add_event_listenner("close_chengjiu", this, this.close_chengjiu), this.loadPre = cc.instantiate(this.load_prefabs), this.node.addChild(this.loadPre), this.loadPre.active = !1, this.initJsonData(), this.initUserData(), "h5" != c.default.version && d.default.initWX(), this.gotoTitle(), g.default.playMusic("music/bgm", !0)
                    }
                }, t.prototype.initUserData = function() {
                    var e = d.default.load("userdata");
                    if (console.log("user data is ", e), "h5" == c.default.version)
                        if (null == e) {
                            var t = new Date;
                            c.default.userData.leave_time = 1e4 * t.getFullYear() + 100 * (t.getMonth() + 1) + t.getDate(), e = c.default.userData, d.default.json_save("chengjiu", c.default.chengjiu_data), d.default.json_save("userdata", c.default.userData)
                        } else c.default.userData = d.default.json_load("userdata"), c.default.chengjiu_data = d.default.json_load("chengjiu");
                    else if ("" == e) {
                        t = new Date;
                        c.default.userData.leave_time = 1e4 * t.getFullYear() + 100 * (t.getMonth() + 1) + t.getDate(), e = c.default.userData, d.default.save("chengjiu", c.default.chengjiu_data), d.default.save("userdata", c.default.userData)
                    } else c.default.userData = d.default.load("userdata"), c.default.chengjiu_data = d.default.load("chengjiu"), d.default.userItemLevel(c.default.userData.gun_level, "\u67aa\u7b49\u7ea7"), d.default.userItemLevel(c.default.userData.fanghu_level, "\u9632\u62a4\u7b49\u7ea7"), d.default.userItemLevel(c.default.userData.plane_level, "\u98de\u673a\u7b49\u7ea7"), d.default.userItemLevel(c.default.userData.zhadan_level, "\u70b8\u5f39\u7b49\u7ea7")
                }, t.prototype.initJsonData = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, t, i, n, a, s, o, r;
                        return __generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return e = c.default, [4, this.load_json("level_data_u")];
                                case 1:
                                    return e.level_data_json = l.sent(), t = c.default, [4, this.load_json("enemy_data")];
                                case 2:
                                    return t.enemy_data_json = l.sent(), i = c.default, [4, this.load_json("hero_data")];
                                case 3:
                                    return i.hero_data_json = l.sent(), n = c.default, [4, this.load_json("fanghu_data")];
                                case 4:
                                    return n.fanghu_data_json = l.sent(), a = c.default, [4, this.load_json("game_shop_price")];
                                case 5:
                                    return a.game_shop_price = l.sent(), s = c.default, [4, this.load_json("zhadan_att")];
                                case 6:
                                    return s.zhadan_att = l.sent(), o = c.default, [4, this.load_json("plane_data")];
                                case 7:
                                    return o.plane_data = l.sent(), r = c.default, [4, this.load_json("qiqiu_data")];
                                case 8:
                                    return r.qiqiu_data = l.sent(), c.default.json_num = 3, [2]
                            }
                        })
                    })
                }, t.prototype.load_json_by_url = function(e) {
                    var t = "https://rock.jsstudio.cn/json/" + e;
                    return new Promise(function(e, i) {
                        cc.loader.load({
                            url: t,
                            type: "json"
                        }, function(t, n) {
                            t ? i(t) : (console.log("data is", n), c.default.json_num++, e(n))
                        })
                    })
                }, t.prototype.load_json = function(e) {
                    var t = "json/" + e;
                    return new Promise(function(e, i) {
                        cc.loader.loadRes(t, function(t, n) {
                            t ? i(t) : e(n.json)
                        })
                    })
                }, t.prototype.show_chengjiu = function() {
                    c.default.isFenBaoFinish ? (this.showLoadingUI(), this._chengjiu = f.default.getInstance(), this._chengjiu.showPopup()) : console.log("\u5206\u5305\u672a\u5b8c\u6210\uff01")
                }, t.prototype.close_chengjiu = function() {
                    this._chengjiu.destroy(!1), o.default.getInstance().release_res_pkg(c.default.pkgs.game_chengjiu)
                }, t.prototype.update = function(e) {
                    c.default.userData.tili <= 10 && (this.check_tili_delay += e, this.check_tili_delay > 1 && (this.tili_time_go(), this.check_tili_delay = 0))
                }, t.prototype.tili_time_go = function() {
                    this.s--, this.s <= 0 && (this.s = 59, this.m--, this.m <= 0 && (this.m = 4, c.default.userData.tili += 1));
                    var e = (1 == this.m.toString().length ? "0" + this.m : this.m.toString()) + ":" + (1 == this.s.toString().length ? "0" + this.s : this.s.toString());
                    c.default.tiliTime = e
                }, t.prototype.show_game_shop = function() {
                    c.default.isFenBaoFinish ? (this.showLoadingUI(), this._game_shop = p.default.getInstance(), this._game_shop.showPopup()) : console.log("\u5206\u5305\u672a\u5b8c\u6210\uff01")
                }, t.prototype.close_game_shop = function() {
                    this._game_shop.destroy(!1), o.default.getInstance().release_res_pkg(c.default.pkgs.game_shop)
                }, t.prototype.show_pifu = function() {
                    c.default.isFenBaoFinish ? (this.pifuUI = _.default.getInstance(), this.pifuUI.showPopup()) : console.log("\u5206\u5305\u672a\u5b8c\u6210\uff01")
                }, t.prototype.close_pifu = function() {
                    this.pifuUI.ui.active = !1
                }, t.prototype.show_rank = function() {
                    c.default.isFenBaoFinish ? (this.rankUI = h.default.getInstance(), this.rankUI.showPopup()) : console.log("\u5206\u5305\u672a\u5b8c\u6210\uff01")
                }, t.prototype.close_rank = function() {
                    this.rankUI.destroy(!1), o.default.getInstance().release_res_pkg(c.default.pkgs.rank)
                }, t.prototype.show_qiandao = function() {
                    c.default.isFenBaoFinish || console.log("\u5206\u5305\u672a\u5b8c\u6210\uff01")
                }, t.prototype.close_qiandao = function() {
                    o.default.getInstance().release_res_pkg(c.default.pkgs.sign)
                }, t.prototype.checkVersion = function() {
                    l.default.getVerion()
                }, t.prototype.show_setting = function() {
                    c.default.isFenBaoFinish ? (this.settingUI = u.default.getInstance(), this.settingUI.showPopup()) : console.log("\u5206\u5305\u672a\u5b8c\u6210\uff01")
                }, t.prototype.close_setting = function() {
                    this.settingUI.ui.active = !1
                }, t.prototype.back_game_main = function(e) {
                    this.showLoadingUI(), this._game_main = r.default.getInstance(), this.enter_scene(this._game_main)
                }, t.prototype.back_home_func = function() {
                    this.showLoadingUI(), c.default.GAME_STATE = c.default.GAME_TITLE, this._game_title = s.default.getInstance(), this.enter_scene(this._game_title)
                }, t.prototype.gotoTitle = function() {
                    this.showLoadingUI(), this._game_title = s.default.getInstance(), this.enter_scene(this._game_title)
                }, t.prototype.gotoGameMain = function() {
                    c.default.isFenBaoFinish ? (this.showLoadingUI(), c.default.GAME_STATE = c.default.GAME_PLAYING, this._game_main = r.default.getInstance(), this.enter_scene(this._game_main)) : console.log("\u5206\u5305\u672a\u5b8c\u6210\uff01")
                }, t.prototype.showLoadingUI = function() {
                    c.default.isFenBaoFinish ? this.loadPre.active || (this.loadPre.active = !0) : console.log("loading \u5206\u5305\u672a\u5b8c\u6210\uff01")
                }, t.prototype.hideLoadingUI = function() {
                    this.loadPre.active = !1, this.isShowLoadingUI = !1
                }, t.prototype.start = function() {}, t.instance = null, __decorate([y(cc.Prefab)], t.prototype, "load_prefabs", void 0), t = i = __decorate([v], t)
            }(n.default);
        i.default = b, cc._RF.pop()
    }, {
        "../game_ui/game_chengjiu": "game_chengjiu",
        "../game_ui/game_main": "game_main",
        "../game_ui/game_shop": "game_shop",
        "../game_ui/game_title": "game_title",
        "../game_ui/pifu": "pifu",
        "../game_ui/rank": "rank",
        "../game_ui/setting": "setting",
        "../managers/event_mgr": "event_mgr",
        "../managers/game_mgr": "game_mgr",
        "../managers/res_mgr": "res_mgr",
        "../tools/Rock_wx": "Rock_wx",
        "../tools/game_tools": "game_tools",
        "../tools/net": "net",
        "../utils/config": "config"
    }],
    game_chengjiu_ctrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "33d56vbVIVGGoWUhfTHpxjT", "game_chengjiu_ctrl"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../supers/UI_ctrl"),
            a = e("../managers/event_mgr"),
            s = e("../utils/config"),
            o = e("../tools/game_tools"),
            r = cc._decorator,
            c = r.ccclass,
            l = (r.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this._event_mgr = a.default.getInstance(), this.init()
                }, t.prototype.init = function() {
                    var e = this,
                        t = o.default.getJsonLength(s.default.chengjiu_data);
                    o.default.getPrefab("prefabs/chengjiu_list", function(i) {
                        for (var n = i, a = 0; a < t; a++) {
                            console.log("set chengjiu");
                            var s = cc.instantiate(n);
                            s.getComponent("chenjiu_list_set").set_chengjiu_data(a), e.view["chengjiu_list/view/content"].addChild(s)
                        }
                    }), this.add_button_listen("back_btn", this, this.back_btn_click)
                }, t.prototype.back_btn_click = function() {
                    o.default.releasePrefab("prefabs/chengjiu_list"), this._event_mgr.dispatch_event("close_chengjiu", {})
                }, t.prototype.start = function() {}, t = __decorate([c], t)
            }(n.default));
        i.default = l, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../supers/UI_ctrl": "UI_ctrl",
        "../tools/game_tools": "game_tools",
        "../utils/config": "config"
    }],
    game_chengjiu: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b0fcbRsugZBUJcyUtkAxozx", "game_chengjiu"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../supers/popup"),
            a = cc._decorator,
            s = a.ccclass,
            o = (a.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var i;
                return __extends(t, e), i = t, t.getInstance = function() {
                    return null === i.Instance && (i.Instance = new i("game_chengjiu")), i.Instance
                }, t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.Instance = null, t = i = __decorate([s], t)
            }(n.default));
        i.default = o, cc._RF.pop()
    }, {
        "../supers/popup": "popup"
    }],
    game_main_ctrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "1bbd9ZJtSBJUKQi9+kK9ypO", "game_main_ctrl"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../supers/UI_ctrl"),
            a = e("../managers/event_mgr"),
            s = e("../utils/config"),
            o = e("../tools/game_tools"),
            r = e("../tools/CommonFun"),
            c = e("../tools/Rock_wx"),
            l = cc._decorator,
            u = l.ccclass,
            h = (l.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.player_pos_right_x = 230, t.player_pos_middle_x = 0, t.player_pos_left_x = -216, t.player_is_running = !1, t.isLoadBulletFinish = !1, t.fanghu = [], t.fanghu_hp = [], t.fanghu_init_data = [], t.levelData = [], t.playerActionName = "zhanli", t.isPlayerYun = !1, t.is_plane_flying = !1, t.firstX = null, t.firsty = null, t.isBtnClick = !1, t.is_adding_qiqiu = !1, t.fuhuo_time = 0, t.isWin = !1, t.kill_chengjiu_finish = !1, t.zhadanPrefab = null, t.isTeachChangan = !1, t.isFuhuoing = !1, t.fuhuo_time_delay = 0, t.fuhuo_daoshuNum = 10, t.is_adding_enemy = !1, t.enemy_num = 0, t.enemy_go_delay = 0, t.qiqiu_go_delay = 0, t.qiqiu_num = 0, t.qiqiu_len = 0, t.shootDelay = 0, t.isShoot = !1, t.buttlets = [], t.yun_delay = 0, t.isDuYaning = !1, t.duYanTime = 0, t.duYanLmr = "", t.isZhongDuing = !1, t.plane_fire_delay = 0, t.plane_bullets = [], t.isTeachLeft = !1, t.isTeachRight = !1, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this._event_mgr = a.default.getInstance(), this.init()
                }, t.prototype.init = function() {
                    var e = this;
                    this.add_button_listen("backBtn", this, this.back_btn_click), this.add_button_listen("buttom/feijiBtn", this, this.feijiBtn_click), this.add_button_listen("buttom/zhadan_btn", this, this.zhadan_btn), this.add_button_listen("buttom/leftBtn", this, this.leftBtnClick), this.add_button_listen("buttom/rightBtn", this, this.rightBtnClick), this.add_button_listen("buttom/shootBtn", this, this.shootBtnClick), this.add_button_listen("game_win/info_cont/continueBtn", this, this.continueBtnClick), this.add_button_listen("game_over/info_cont/continueBtn", this, this.game_over_continueBtnClick), this.add_button_listen("game_win/info_cont/sbBtn", this, this.win_sbBtn), this.add_button_listen("game_over/sbBtn", this, this.lose_sbBtn), this.add_button_listen("fuhuoCont/bufuhuoBtn", this, this.bufuhuoBtnClick), this.add_button_listen("fuhuoCont/fuhuoBtn", this, this.fuhuoBtnClick), this._event_mgr.add_event_listenner("hero_kill_enemy", this, this.checkLevelFinish), this._event_mgr.add_event_listenner("fanghu_hurt", this, this.fanghu_hurt), this._event_mgr.add_event_listenner("player_yun", this, this.player_yun), this._event_mgr.add_event_listenner("next_level", this, this.nextLevel), this._event_mgr.add_event_listenner("back_title", this, this.removeListeners), this._event_mgr.add_event_listenner("game_over", this, this.show_fuhuo), this._event_mgr.add_event_listenner("retry_level", this, this.retry), this._event_mgr.add_event_listenner("baozha", this, this.baozha), this._event_mgr.add_event_listenner("wraning", this, this.show_warning), this._event_mgr.add_event_listenner("player_get_reward", this, this.player_get_reward), this._event_mgr.add_event_listenner("teach_changan", this, this.teach_changan), this._event_mgr.add_event_listenner("teach_run_left", this, this.TeachLeft), this._event_mgr.add_event_listenner("teach_run_right", this, this.TeachRight), this._event_mgr.add_event_listenner("teach_over", this, this.checkTeachOver), this._event_mgr.add_event_listenner("show_planeBtn", this, this.show_planeBtn), this._event_mgr.add_event_listenner("show_zhadanBtn", this, this.show_zhadanBtn), this._event_mgr.add_event_listenner("share_success", this, this.share_success), this._event_mgr.add_event_listenner("teach_changan_key_up", this, this.shoot_onTouchStart), this._event_mgr.add_event_listenner("teach_changan_key_down", this, this.shoot_onTouchEnd), this._event_mgr.add_event_listenner("finish_kill_chengjiu", this, this.show_kill_chengjiu_tips), this._event_mgr.add_event_listenner("finish_chengjiu", this, this.getchengjiuReward), this.view["buttom/shootBtn"].on(cc.Node.EventType.TOUCH_START, this.shoot_onTouchStart, this), this.view["buttom/shootBtn"].on(cc.Node.EventType.TOUCH_END, this.shoot_onTouchEnd, this), this.view["buttom/shootBtn"].on(cc.Node.EventType.TOUCH_CANCEL, this.shoot_onTouchCancel, this);
                    var t = cc.director.getWinSizeInPixels();
                    this.view.level_progress.y = .5 * t.height - 80, this.updateItemData(), this.player = this.view.player, this.player.x = this.player_pos_middle_x;
                    for (var i = 0; i < this.view.fanghu.childrenCount; i++) this.fanghu.push(this.view.fanghu.children[i]);
                    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), this.player_spine = this.view["player/player"].getComponent(sp.Skeleton), this.player_spine.setCompleteListener(function() {
                        switch (e.playerActionName) {
                            case "zhanli":
                                break;
                            case "gongji":
                            case "runleft":
                            case "runright":
                                e.player_spine.setAnimation(0, "zhanli" + s.default.userData.gun_level, !0), e.playerActionName = "zhanli"
                        }
                    }), console.log("!@#!@#!@config.userData.score is", s.default.userData.score), s.default.userCurrentLevel <= 0 || "" == s.default.userCurrentLevel ? (s.default.userCurrentLevel = s.default.userData.score, this.initLevel(s.default.userCurrentLevel), console.log("!@#!@#in config.userData.score level")) : (s.default.userCurrentLevel = Number(s.default.userCurrentLevel - 1), this.initLevel(s.default.userCurrentLevel)), o.default.getPrefab("prefabs/tnt", function(t) {
                        e.zhadanPrefab = t
                    })
                }, t.prototype.bufuhuoBtnClick = function() {
                    this.view.fuhuoCont.active = !1, this.isFuhuoing = !1, this.fuhuo_time_delay = 0, this.fuhuo_daoshuNum = 10, this.resume_game(), this.game_over()
                }, t.prototype.share_success = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, i, n, a, c = this;
                        return __generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    return -1 == (t = e.share_id) ? (o.default.showPiaozi("Hết quảng cáo"), [2]) : (5 == t && (this.addZhadan(), this.view.windowCont.removeAllChildren(), o.default.showPiaozi("Nhận x5 bom")), 4 == s.default.share_id && (this.addFeiji(), this.view.windowCont.removeAllChildren(), o.default.showPiaozi("Nhận x5 máy bay")), 6 == t && (s.default.current_level_get_jinbi *= 2, this.view["game_win/info_cont/get_money_num"].getComponent(cc.Label).string = "Thưởng xu: " + s.default.current_level_get_jinbi, this.view["game_win/info_cont/sbBtn"].active = !1), 7 == t && (s.default.current_level_get_jinbi *= 2, this.view["game_over/info_cont/get_money_num"].getComponent(cc.Label).string = "Thưởng xu: " + s.default.current_level_get_jinbi, this.view["game_over/sbBtn"].active = !1), 8 != t ? [3, 2] : (a = (n = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/fuhuoSpine")]));
                                case 1:
                                    i = a.apply(n, [l.sent()]), this.node.addChild(i), this.view.fuhuoCont.active = !1, this.isFuhuoing = !1, this.fuhuo_time_delay = 0, this.fuhuo_daoshuNum = 10, i.getChildByName("fuhuo").getComponent(sp.Skeleton).setCompleteListener(function() {
                                        o.default.showPiaozi("x2 bom  x1 máy bay"), s.default.userData.zhadan += 2, s.default.userData.feiji += 1, c.updateItemData(), c.enemy_num -= c.view.enemy_cont.childrenCount, c.view.enemy_cont.removeAllChildren();
                                        for (var e = 0; e < c.view.fanghu.childrenCount; e++) c.view.fanghu.children[e].active = !0, c.fanghu_hp[e] = s.default.fanghu_data_json["level_" + s.default.userData.fanghu_level], c.fanghu_init_data[e] = s.default.fanghu_data_json["level_" + s.default.userData.fanghu_level], c.fanghu[e].getChildByName("welan_hp").getComponent(cc.ProgressBar).progress = 1;
                                        c.is_adding_enemy = !0, c.isShoot = !1, c.node.removeChild(i), i.destroy(), o.default.releasePrefab("prefabs/fuhuoSpine"), c.resume_game()
                                    }), l.label = 2;
                                case 2:
                                    return s.default.isShareing = !1, s.default.share_id = 0, [2]
                            }
                        })
                    })
                }, t.prototype.fuhuoBtnClick = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(e) {
                            return s.default.share_id = 8, c.default.share(), [2]
                        })
                    })
                }, t.prototype.show_planeBtn = function() {
                    this.view["buttom/feijiBtn"].active = !0, this._event_mgr.remove_event_listenner("show_planeBtn", this, this.show_planeBtn), this.isShoot = !1
                }, t.prototype.show_zhadanBtn = function() {
                    this.view["buttom/zhadan_btn"].active = !0, this._event_mgr.remove_event_listenner("show_zhadanBtn", this, this.show_zhadanBtn), this.isShoot = !1
                }, t.prototype.checkTeachOver = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        return __generator(this, function(e) {
                            return this.isShoot = !1, this.isTeachChangan = !1, this._event_mgr.remove_event_listenner("teach_changan", this, this.teach_changan), this._event_mgr.remove_event_listenner("teach_run_left", this, this.TeachLeft), this._event_mgr.remove_event_listenner("teach_run_right", this, this.TeachRight), this._event_mgr.remove_event_listenner("teach_over", this, this.checkTeachOver), this._event_mgr.remove_event_listenner("teach_changan_key_up", this, this.shoot_onTouchStart), this._event_mgr.remove_event_listenner("teach_changan_key_down", this, this.shoot_onTouchEnd), this.resume_game(), [2]
                        })
                    })
                }, t.prototype.player_get_reward = function(e) {
                    var t = e.player_choose;
                    switch (console.log("player_choose is ", t), t) {
                        case "feijix3":
                            s.default.userData.feiji += 3;
                            break;
                        case "zhadanx2":
                            s.default.userData.zhadan += 2;
                            break;
                        case "feijix6":
                            s.default.userData.feiji += 6;
                            break;
                        case "zhadanx4":
                            s.default.userData.zhadan += 4;
                            break;
                        case "shuangbei_hurt":
                            s.default.is_player_double_att = !0;
                            break;
                        case "jinbix500":
                            s.default.userData.jinbi += 500
                    }
                    console.log("data.choose_str is ", e.choose_str), o.default.showPiaozi(e.choose_str), this.updateItemData()
                }, t.prototype.updateItemData = function() {
                    this.view["buttom/feijiBtn/wz"].getComponent(cc.Label).string = s.default.userData.feiji, this.view["buttom/zhadan_btn/wz"].getComponent(cc.Label).string = s.default.userData.zhadan
                }, t.prototype.show_warning = function() {
                    var e = this;
                    this.view.warning.active = !0, this.scheduleOnce(function() {
                        e.view.warning.active = !1
                    }, 2)
                }, t.prototype.shoot_onTouchStart = function() {
                    this.isTeachChangan && (this.isShoot = !0), s.default.GAME_STATE != s.default.GAME_PAUSE && this.isLoadBulletFinish && !this.isDuYaning && (this.isShoot = !0)
                }, t.prototype.teach_changan = function() {
                    this.isTeachChangan = !0
                }, t.prototype.shoot_onTouchEnd = function() {
                    this.isTeachChangan && (this.isTeachChangan = !1, this.view.bullet.removeAllChildren(), this._event_mgr.dispatch_event("teach_changan_finish", null)), s.default.GAME_STATE != s.default.GAME_PAUSE && this.isLoadBulletFinish && (this.isShoot = !1)
                }, t.prototype.shoot_onTouchCancel = function() {
                    s.default.GAME_STATE != s.default.GAME_PAUSE && this.isLoadBulletFinish && (this.isShoot = !1)
                }, t.prototype.puseBtnClick = function() {
                    s.default.GAME_STATE = s.default.GAME_STATE == s.default.GAME_PAUSE ? s.default.GAME_PLAYING : s.default.GAME_PAUSE, console.log("config.GAME_STATE is", s.default.GAME_STATE), s.default.GAME_STATE == s.default.GAME_PAUSE ? (this.player_spine.paused = !0, this.player_spine.timeScale = 0) : (this.player_spine.paused = !1, this.player_spine.timeScale = 1)
                }, t.prototype.game_pause = function() {
                    s.default.GAME_STATE = s.default.GAME_PAUSE
                }, t.prototype.resume_game = function() {
                    s.default.GAME_STATE = s.default.GAME_PLAYING
                }, t.prototype.show_fuhuo = function() {
                    0 == this.fuhuo_time ? (s.default.isShareing || this.fuhuo_time++, this.game_pause(), this.view.fuhuoCont.active = !0, this.isFuhuoing = !0) : this.game_over()
                }, t.prototype.win_sbBtn = function() {
                    s.default.share_id = 6, c.default.share()
                }, t.prototype.lose_sbBtn = function() {
                    s.default.share_id = 7, c.default.share()
                }, t.prototype.getchengjiuReward = function(e) {
                    var t = e.chengjiu_id,
                        i = e.isDobule;
                    if (this.isShoot = !1, this.view.windowCont.removeAllChildren(), console.log("getchengjiuReward id is", t), "finish" != s.default.chengjiu_data["chengjiu_" + t].state && 7 != t && 8 != t) {
                        switch (t) {
                            case 0:
                                i ? (s.default.userData.tili += 6, o.default.showPiaozi("x6 năng lượng")) : (s.default.userData.tili += 3, o.default.showPiaozi("Năng lượng x3")), this.kill_chengjiu_finish = !1, this.isWin && this.showWin();
                                break;
                            case 6:
                            case 1:
                            case 4:
                            case 9:
                                i ? (s.default.userData.tili += 10, o.default.showPiaozi("Năng lượng x10")) : (s.default.userData.tili += 5, o.default.showPiaozi("Năng lượng x5")), this.kill_chengjiu_finish = !1, this.isWin && this.showWin();
                                break;
                            case 2:
                                i ? (s.default.userData.jinbi += 400, o.default.showPiaozi("Nhận xu x400")) : (s.default.userData.jinbi += 200, o.default.showPiaozi("Nhận xu x200")), console.log("case 2 show win"), this.showWin();
                                break;
                            case 3:
                                i ? (s.default.userData.jinbi += 1200, o.default.showPiaozi("Nhận xu x1200")) : (s.default.userData.jinbi += 600, o.default.showPiaozi("Nhận xu x600")), console.log("case 3 show win"), this.showWin();
                                break;
                            case 5:
                                i ? (s.default.userData.jinbi += 2e3, o.default.showPiaozi("Nhận xu x2000")) : (s.default.userData.jinbi += 1e3, o.default.showPiaozi("Nhận xu x1000")), console.log("case 5 show win"), this.showWin()
                        }
                        s.default.chengjiu_data["chengjiu_" + t].state = "finish", c.default.save("chengjiu", s.default.chengjiu_data)
                    }
                }, t.prototype.show_chengjiu_tips = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, i, n, a;
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return this.game_pause(), t = e.chengjiu_id, o.default.playSound("music/reward", !1), 7 == t || 8 == t ? [2] : (a = (n = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/getChengjiu")]);
                                case 1:
                                    return (i = a.apply(n, [c.sent()])).getComponent("getChengjiu").setInfo(t, s.default.chengjiu_data["chengjiu_" + t].content, s.default.chengjiu_data["chengjiu_" + t].reward_cont), this.view.windowCont.addChild(i), [2]
                            }
                        })
                    })
                }, t.prototype.show_kill_chengjiu_tips = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, i, n, a;
                        return __generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return this.game_pause(), this.kill_chengjiu_finish = !0, 7 == (t = e.chengjiu_id) || 8 == t ? [2] : (a = (n = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/getChengjiu")]);
                                case 1:
                                    return (i = a.apply(n, [o.sent()])).getComponent("getChengjiu").setInfo(t, s.default.chengjiu_data["chengjiu_" + t].content, s.default.chengjiu_data["chengjiu_" + t].reward_cont), this.view.windowCont.addChild(i), [2]
                            }
                        })
                    })
                }, t.prototype.game_over = function() {
                    var e = (new Date).getTime() - s.default.startGameTime;
                    c.default.game_over_time(e, s.default.userCurrentLevel), o.default.playSound("music/lose", !1), s.default.GAME_STATE = s.default.GAME_OVER, console.log("game main game_over"), this.is_adding_enemy = !1, this.enemy_go_delay = 0, this.view["game_over/sbBtn"].active = !0, this.view.game_over.active = !0, this.view["game_over/info_cont"].active = !0, this.view["game_over/info_cont"].getComponent(cc.Animation).play("game_end"), this.view["game_over/info_cont/get_money_num"].getComponent(cc.Label).string = "Thưởng xu: " + s.default.current_level_get_jinbi
                }, t.prototype.onDisable = function() {
                    console.log("onDisable removeListeners"), this.removeListeners()
                }, t.prototype.removeListeners = function() {
                    this._event_mgr.remove_event_listenner("hero_kill_enemy", this, this.checkLevelFinish), this._event_mgr.remove_event_listenner("fanghu_hurt", this, this.fanghu_hurt), this._event_mgr.remove_event_listenner("player_yun", this, this.player_yun), this._event_mgr.remove_event_listenner("next_level", this, this.nextLevel), this._event_mgr.remove_event_listenner("back_title", this, this.removeListeners), this._event_mgr.remove_event_listenner("game_over", this, this.show_fuhuo), this._event_mgr.remove_event_listenner("retry_level", this, this.retry), this._event_mgr.remove_event_listenner("baozha", this, this.baozha), this._event_mgr.remove_event_listenner("wraning", this, this.show_warning), this._event_mgr.remove_event_listenner("player_get_reward", this, this.player_get_reward), this._event_mgr.remove_event_listenner("teach_changan", this, this.teach_changan), this._event_mgr.remove_event_listenner("teach_run_left", this, this.TeachLeft), this._event_mgr.remove_event_listenner("teach_run_right", this, this.TeachRight), this._event_mgr.remove_event_listenner("teach_over", this, this.checkTeachOver), this._event_mgr.remove_event_listenner("show_planeBtn", this, this.show_planeBtn), this._event_mgr.remove_event_listenner("show_zhadanBtn", this, this.show_zhadanBtn), this._event_mgr.remove_event_listenner("share_success", this, this.share_success), this._event_mgr.remove_event_listenner("finish_kill_chengjiu", this, this.show_kill_chengjiu_tips)
                }, t.prototype.checkLevelFinish = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, i, n, a, o, l, u, h, _;
                        return __generator(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    return s.default.hero_kill_enemy++, t = e.x, i = e.y, n = e.jinbi, l = (o = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/enemy_die")];
                                case 1:
                                    return (a = l.apply(o, [d.sent()])).x = t, a.y = i, this.node.addChild(a), _ = (h = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/get_jinbi")];
                                case 2:
                                    if ((u = _.apply(h, [d.sent()])).getComponent("get_jinbi").set_jinbi_num(n), u.x = t, u.y = i, this.node.addChild(u), this.view["level_progress/rock_progress/bar_mask"].width = s.default.hero_kill_enemy / this.level_len * 564, this.view["level_progress/syjs_num"].getComponent(cc.Label).string = Math.floor((this.level_len - s.default.hero_kill_enemy) / this.level_len * 100) + "%", console.log("config.hero_kill_enemy is ", s.default.hero_kill_enemy), console.log("config.level_len is ", this.level_len), s.default.hero_kill_enemy == this.level_len) {
                                        if (c.default.onLevelEnd(s.default.userCurrentLevel), console.log("level finish"), s.default.hero_kill_enemy = 0, this.isWin = !0, this.view.enemy_cont.removeAllChildren(), this.view.qiqiuCont.removeAllChildren(), console.log("config.userCurrentLevel is", s.default.userCurrentLevel), 9 == s.default.userCurrentLevel) return this.game_pause(), this.show_chengjiu_tips({
                                            chengjiu_id: 2
                                        }), [2];
                                        if (24 == s.default.userCurrentLevel) return this.game_pause(), this.show_chengjiu_tips({
                                            chengjiu_id: 3
                                        }), [2];
                                        if (49 == s.default.userCurrentLevel) return this.game_pause(), this.show_chengjiu_tips({
                                            chengjiu_id: 5
                                        }), [2];
                                        this.kill_chengjiu_finish || (s.default.userData.score = s.default.userCurrentLevel, console.log("score is ", s.default.userData.score), c.default.save("config.userData.score ", s.default.userData.score), c.default.postMessage("score", s.default.userData.score), console.log("pu tong show win"), this.showWin())
                                    }
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.continueBtnClick = function() {
                    this.view.game_win.active = !1, s.default.userData.jinbi += s.default.current_level_get_jinbi, s.default.current_level_get_jinbi = 0, console.log("continueBtnClick config.userCurrentLevel is ", s.default.userCurrentLevel), s.default.userCurrentLevel >= 2 ? this._event_mgr.dispatch_event("show_game_shop", {}) : this.nextLevel()
                }, t.prototype.game_over_continueBtnClick = function() {
                    this.view.game_over.active = !1, s.default.userData.jinbi += s.default.current_level_get_jinbi, s.default.current_level_get_jinbi = 0, this.view.enemy_cont.removeAllChildren(), this.view.qiqiuCont.removeAllChildren(), this.view.planeCont.removeAllChildren(), this.view.windowCont.removeAllChildren(), console.log("game_over_continueBtnClick config.userCurrentLevel is ", s.default.userCurrentLevel), s.default.userCurrentLevel >= 2 ? this._event_mgr.dispatch_event("show_game_shop", {}) : this.retry()
                }, t.prototype.showWin = function() {
                    var e = this;
                    this.scheduleOnce(function() {
                        o.default.playSound("music/win", !1), e.view["game_win/info_cont/get_money_num"].getComponent(cc.Label).string = "Thưởng xu: " + s.default.current_level_get_jinbi, e.is_adding_enemy = !1, e.is_adding_qiqiu = !1, e.view.game_win.active = !0, e.view["game_win/info_cont"].active = !0, e.view["game_win/info_cont"].getComponent(cc.Animation).play("game_end"), e.view["game_win/info_cont/sbBtn"].active = !0
                    }, 2), s.default.userData.score += 1, c.default.save("userdata", s.default.userData)
                }, t.prototype.nextLevel = function() {
                    s.default.GAME_STATE = s.default.GAME_PLAYING, this.level_len = o.default.getJsonLength(s.default.level_data_json), s.default.userCurrentLevel < this.level_len ? (console.log("config.userCurrentLevel < len len is ", this.level_len), s.default.userCurrentLevel++, this.view["level_progress/level_num"].getComponent(cc.Label).string = s.default.userCurrentLevel + 1, this.initLevel(s.default.userCurrentLevel)) : (this.view.level_num.getComponent(cc.Label).string = "Không có dữ liệu", this.initLevel(s.default.userCurrentLevel))
                }, t.prototype.retry = function() {
                    if (this.level_len = o.default.getJsonLength(s.default.level_data_json), s.default.userCurrentLevel < this.level_len) {
                        this.view["level_progress/level_num"].getComponent(cc.Label).string = s.default.userCurrentLevel + 1, this.view.enemy_cont.removeAllChildren(), this.initLevel(s.default.userCurrentLevel);
                        for (var e = 0; e < this.view.fanghu.childrenCount; e++) this.view.fanghu.children[e].active = !0, this.fanghu_hp[e] = s.default.fanghu_data_json["level_" + s.default.userData.fanghu_level], this.fanghu_init_data[e] = s.default.fanghu_data_json["level_" + s.default.userData.fanghu_level], this.fanghu[e].getChildByName("welan_hp").getComponent(cc.ProgressBar).progress = 1
                    }
                }, t.prototype.fanghu_hurt = function(e) {
                    var t = e.lmr,
                        i = e.hurt;
                    switch (t) {
                        case "left":
                            this.fanghu_hp[0] -= i, console.log("\u6728\u5934\u6536\u5230\u4f24\u5bb3:", i);
                            var n = this.fanghu_hp[0] / this.fanghu_init_data[0];
                            this.fanghu[0].getChildByName("welan_hp").getComponent(cc.ProgressBar).progress = n, n <= 0 && (this.fanghu[0].active = !1, this._event_mgr.dispatch_event("left_destroy", {
                                dir: "left"
                            }));
                            break;
                        case "mid":
                            console.log("\u6728\u5934\u6536\u5230\u4f24\u5bb3:", i), this.fanghu_hp[1] -= i;
                            var a = this.fanghu_hp[1] / this.fanghu_init_data[1];
                            this.fanghu[1].getChildByName("welan_hp").getComponent(cc.ProgressBar).progress = a, a <= 0 && (this.fanghu[1].active = !1, this._event_mgr.dispatch_event("mid_destroy", {
                                dir: "mid"
                            }));
                            break;
                        case "right":
                            console.log("\u6728\u5934\u6536\u5230\u4f24\u5bb3:", i), this.fanghu_hp[2] -= i;
                            var s = this.fanghu_hp[2] / this.fanghu_init_data[2];
                            this.fanghu[2].getChildByName("welan_hp").getComponent(cc.ProgressBar).progress = s, s <= 0 && (this.fanghu[2].active = !1, this._event_mgr.dispatch_event("right_destroy", {
                                dir: "right"
                            }))
                    }
                }, t.prototype.initLevelData = function(e) {
                    for (var t in console.log("level_id  asasdsa is", e), this.levelData = [], s.default.level_data_json) Number(s.default.level_data_json[t].level) == Number(e) + 1 && (console.log("config.level_data_json[p]", s.default.level_data_json[t]), this.levelData.push(s.default.level_data_json[t]));
                    0 == this.levelData.length && (this.view.level_end_tips.active = !0), console.log("this.levelData is ", this.levelData)
                }, t.prototype.initLevel = function(e) {
                    var t = this;
                    console.log("init level " + e), c.default.onLevelStart(e), this.isWin = !1, this.fuhuo_time = 0, s.default.hero_kill_enemy = 0, s.default.is_player_double_att = !1, this.initLevelData(e), this.level_len = o.default.getJsonLength(this.levelData), this.qiqiu_len = o.default.getJsonLength(s.default.qiqiu_data["level_" + (s.default.userCurrentLevel + 1)]), console.log("this.qiqiu_len", this.qiqiu_len);
                    for (var i = 0; i < 3; i++) this.fanghu_hp[i] = s.default.fanghu_data_json["level_" + s.default.userData.fanghu_level], this.fanghu_init_data[i] = s.default.fanghu_data_json["level_" + s.default.userData.fanghu_level], this.fanghu[i].getChildByName("welan_hp").getComponent(cc.ProgressBar).progress = 1, this.view.fanghu.children[i].active = !0, o.default.setImgTexture("images/weilanpifu/weilan_" + s.default.userData.fanghu_level, this.view["fanghu/welan_" + i]);
                    this.player_spine.setAnimation(0, "zhanli" + s.default.userData.gun_level, !0), console.log("initLevel"), o.default.getPrefab("prefabs/bullet", function(e) {
                        t.bulletPrefab = e, t.isLoadBulletFinish = !0
                    }), this.view["level_progress/level_num"].getComponent(cc.Label).string = s.default.userCurrentLevel + 1, this.view["level_progress/rock_progress/bar_mask"].width = 0, this.view["level_progress/syjs_num"].getComponent(cc.Label).string = "100%", 0 != e || s.default.userData.isFinishXinShou ? s.default.GAME_STATE = s.default.GAME_PLAYING : (this.view["buttom/feijiBtn"].active = !1, this.view["buttom/zhadan_btn"].active = !1, this.game_pause(), this.showTeach(0)), this.level_start()
                }, t.prototype.showTeach = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, i, n;
                        return __generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return n = (i = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/teach")];
                                case 1:
                                    return (t = n.apply(i, [a.sent()])).getComponent("teach").show_teach(e), this.view.teach_cont.addChild(t), [2]
                            }
                        })
                    })
                }, t.prototype.addEnemy = function(e, t) {
                    var i = this,
                        n = Number(e),
                        a = Number(t);
                    o.default.playSound("music/js_chuxian", !1), o.default.getPrefab("prefabs/enemy_" + a, function(e) {
                        i.enemy = cc.instantiate(e), i.view.enemy_cont.insertChild(i.enemy, 0), t >= 30 ? 34 == t || 35 == t || 36 == t ? i.enemy.getComponent("enemy_boss_yuancheng").initEnemyData(n, a) : i.enemy.getComponent("enemy_boss").initEnemyData(n, a) : 4 == t || 5 == t || 6 == t ? i.enemy.getComponent("enemy_yuancheng").initEnemyData(n, a) : i.enemy.getComponent("enemy").initEnemyData(n, a)
                    })
                }, t.prototype.addQiQiu = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, t, i, n, a, s, o;
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return e = this, i = (t = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/qiqiu")];
                                case 1:
                                    return e.qiqiu = i.apply(t, [c.sent()]), this.qiqiu.on(cc.Node.EventType.TOUCH_START, this.qiqiuClick, this), this.view.qiqiuCont.addChild(this.qiqiu), this.qiqiu.x = .5 * -cc.winSize.width - this.qiqiu.width, this.qiqiu.y = 400, n = cc.moveTo(10, .5 * cc.winSize.width - this.qiqiu.width / 2, 400), a = cc.moveTo(10, .5 * -cc.winSize.width + this.qiqiu.width / 2, 400), s = cc.sequence(n, a), o = cc.repeatForever(s), this.qiqiu.runAction(o), [2]
                            }
                        })
                    })
                }, t.prototype.qiqiuClick = function() {
                    s.default.isRewardWindowShow || (this.qiqiu.active = !1, this.qiqiu.destroy(), s.default.isRewardWindowShow = !0, this.showChooseRewardsUI())
                }, t.prototype.shoot = function(e) {
                    this.shootDelay += e, this.shootDelay >= .15 && (o.default.playSound("music/gun_" + s.default.userData.gun_level, !1), this.shootDelay = 0, console.log("shoot"), this.player_spine.setAnimation(0, "gongji" + s.default.userData.gun_level, !1), this.playerActionName = "gongji", this.bullet = cc.instantiate(this.bulletPrefab), this.bullet.getChildByName("bt").getChildByName("zidan").getChildByName("zhidan" + s.default.userData.gun_level).active = !0, this.view.bullet.addChild(this.bullet), this.bullet.x = this.view.player.x + 30, this.bullet.y = this.view.player.y + 400, this.buttlets.push(this.bullet))
                }, t.prototype.showChooseRewardsUI = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, t, i;
                        return __generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return i = (t = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/reward_window")];
                                case 1:
                                    return e = i.apply(t, [n.sent()]), this.game_pause(), this.view.windowCont.addChild(e), [2]
                            }
                        })
                    })
                }, t.prototype.update = function(e) {
                    if (this.isFuhuoing) {
                        if (s.default.GAME_STATE != s.default.GAME_PLAYING) return;
                        this.fuhuo_time_delay += e, this.fuhuo_time_delay >= 1 && (console.log("fuhuo time"), this.fuhuo_daoshuNum > 0 && (this.fuhuo_daoshuNum--, this.view["fuhuoCont/fuhuodaoshu_num"].getComponent(cc.Label).string = this.fuhuo_daoshuNum.toString(), 0 == this.fuhuo_daoshuNum && (this.fuhuo_daoshuNum = 10, this.bufuhuoBtnClick())), this.fuhuo_time_delay = 0)
                    }
                    if (1 == this.isShoot && this.isTeachChangan && (console.log("here shoot"), this.shoot(e), this.buttleRun()), s.default.GAME_STATE != s.default.GAME_OVER && s.default.GAME_STATE != s.default.GAME_PAUSE) {
                        if (this.is_adding_enemy && s.default.GAME_STATE != s.default.GAME_PAUSE && this.level_enemy_go(e), this.is_adding_qiqiu && s.default.GAME_STATE != s.default.GAME_PAUSE && this.level_qiqiu_go(e), this.isDuYaning && (this.duYanTime += e, this.isZhongDuing || this.checkDuyan(), this.duYanTime >= 2 && (this.duYanTime = 0, this.isDuYaning = !1)), this.is_plane_flying) {
                            cc.winSize.height;
                            this.plane.y += 200 * e, this.view["buttom/feijiBtn/yuanxing"].getComponent(cc.ProgressBar).progress = 1 - (this.plane.y + .5 * cc.winSize.height + 100) / (cc.winSize.height + 200), this.plane_fire_delay += e, this.plane_fire_delay >= 1 && (this.plane_fire(), this.plane_fire_delay = 0), this.plane.y >= .5 * cc.winSize.height + 100 && (console.log("destroy plane"), this.view.planeCont.removeAllChildren(), this.plane.destroy(), this.is_plane_flying = !1, this.view["buttom/feijiBtn/yuanxing"].getComponent(cc.ProgressBar).progress = 1, this.view["buttom/feijiBtn/yuanxing"].active = !1)
                        }
                        this.isPlayerYun && (this.yun_delay += e, this.yun_delay >= 3 && (this.isZhongDuing = !1, this.yun_delay = 0, this.view["player/player"].color = cc.Color.WHITE, this.isPlayerYun = !1, this.view["player/buff"].removeAllChildren())), this.isShoot && this.shoot(e), this.buttleRun()
                    }
                }, t.prototype.level_start = function() {
                    var e = this;
                    1 == s.default.userCurrentLevel && this.scheduleOnce(function() {
                        e.game_pause(), e.showTeach(2)
                    }, 3), 2 == s.default.userCurrentLevel && this.scheduleOnce(function() {
                        e.game_pause(), e.showTeach(3)
                    }, 3), this.is_adding_enemy = !0, this.enemy_go_delay = 0, this.enemy_num = 0, this.is_adding_qiqiu = !0, this.qiqiu_go_delay = 0, this.qiqiu_num = 0
                }, t.prototype.level_enemy_go = function(e) {
                    this.enemy_go_delay += e, this.enemy_num < this.level_len ? Math.floor(this.enemy_go_delay) == this.levelData[this.enemy_num].time && (this.addEnemy(this.levelData[this.enemy_num].pos, this.levelData[this.enemy_num].type), this.enemy_go_delay = 0, this.enemy_num++) : this.is_adding_enemy = !1
                }, t.prototype.level_qiqiu_go = function(e) {
                    0 != this.qiqiu_len && (this.qiqiu_go_delay += e, this.qiqiu_num < this.qiqiu_len && (s.default.qiqiu_data["level_" + (s.default.userCurrentLevel + 1)] ? Math.floor(this.qiqiu_go_delay) == s.default.qiqiu_data["level_" + (s.default.userCurrentLevel + 1)]["q" + this.qiqiu_num] && (this.addQiQiu(), this.qiqiu_go_delay = 0, this.qiqiu_num++) : this.is_adding_qiqiu = !1))
                }, t.prototype.put_bullet = function(e) {}, t.prototype.shootBtnClick = function() {
                    this.isPlayerYun ? console.log("this.is yun") : s.default.GAME_STATE != s.default.GAME_PAUSE && this.isLoadBulletFinish && (this.isShoot = !0)
                }, t.prototype.checkDuyan = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, t, i, n, a, s, o;
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    switch (this.duYanLmr) {
                                        case "left":
                                            return [3, 1];
                                        case "mid":
                                            return [3, 4];
                                        case "right":
                                            return [3, 7]
                                    }
                                    return [3, 10];
                                case 1:
                                    return this.player.x != this.player_pos_left_x ? [3, 3] : (this.isZhongDuing = !0, this.view["player/player"].color = cc.Color.GREEN, this.isPlayerYun = !0, t = (e = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/yun_prefab")]);
                                case 2:
                                    a = t.apply(e, [c.sent()]), this.view["player/buff"].addChild(a), c.label = 3;
                                case 3:
                                    return [3, 10];
                                case 4:
                                    return this.player.x != this.player_pos_middle_x ? [3, 6] : (this.isZhongDuing = !0, this.view["player/player"].color = cc.Color.GREEN, this.isPlayerYun = !0, n = (i = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/yun_prefab")]);
                                case 5:
                                    a = n.apply(i, [c.sent()]), this.view["player/buff"].addChild(a), c.label = 6;
                                case 6:
                                    return [3, 10];
                                case 7:
                                    return this.player.x != this.player_pos_right_x ? [3, 9] : (this.isZhongDuing = !0, this.view["player/player"].color = cc.Color.GREEN, this.isPlayerYun = !0, o = (s = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/yun_prefab")]);
                                case 8:
                                    a = o.apply(s, [c.sent()]), this.view["player/buff"].addChild(a), c.label = 9;
                                case 9:
                                    return [3, 10];
                                case 10:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.player_yun = function(e) {
                    var t = e.lmr;
                    this.isDuYaning = !0, this.duYanLmr = t
                }, t.prototype.feijiBtn_click = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, t, i, n, a, l, u = this;
                        return __generator(this, function(h) {
                            switch (h.label) {
                                case 0:
                                    return s.default.GAME_STATE == s.default.GAME_PAUSE ? [2] : this.isBtnClick ? [3, 5] : this.is_plane_flying ? [3, 4] : s.default.userData.feiji > 0 ? (c.default.useingItem(s.default.userCurrentLevel, "Máy bay"), o.default.playSound("music/plane", !1), e = this, i = (t = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/plane")]) : [3, 2];
                                case 1:
                                    return e.plane = i.apply(t, [h.sent()]), this.plane.getComponent("plane").init(), this.view.planeCont.addChild(this.plane), this.is_plane_flying = !0, s.default.userData.feiji -= 1, this.updateItemData(), this.view["buttom/feijiBtn/yuanxing"].active = !0, console.log("plane.y = ", this.plane.y), [3, 4];
                                case 2:
                                    return s.default.isShowingAlert ? [3, 4] : (s.default.isShowingAlert = !0, l = (a = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/showGetRewardAlert")]);
                                case 3:
                                    (n = l.apply(a, [h.sent()])).getComponent("showGetRewardAlert").setInfo("\u98de\u673a\u4e0d\u8db3", "\u770b\u89c6\u9891\u53ef\u4ee5\u83b7\u53d65\u4e2a\u98de\u673a", 4, this.view.windowCont), this.view.windowCont.addChild(n), this.game_pause(), o.default.showPiaozi("Không đủ máy bay"), h.label = 4;
                                case 4:
                                    this.isBtnClick = !0, this.scheduleOnce(function() {
                                        u.isBtnClick = !1
                                    }, 1), h.label = 5;
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.addFeiji = function() {
                    s.default.userData.feiji += 5, this.updateItemData(), this.resume_game()
                }, t.prototype.plane_fire = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, t, i, n, a, s, o;
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    if (console.log("plane fire"), null == this.plane) return [2];
                                    e = 0, c.label = 1;
                                case 1:
                                    return e < 3 ? (t = this.plane_bullets, i = e, a = (n = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/plane_bullet")]) : [3, 4];
                                case 2:
                                    t[i] = a.apply(n, [c.sent()]), s = this.plane.getChildByName("bullet_" + e + "_pos").x, o = this.plane.getChildByName("bullet_" + e + "_pos").y, this.plane_bullets[e].x = s, this.plane_bullets[e].y = o, this.plane_bullets[e].getComponent("plane_bullet").init(e), this.plane.addChild(this.plane_bullets[e]), c.label = 3;
                                case 3:
                                    return e++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.buttleRun = function() {
                    if (!(this.buttlets.length <= 0))
                        for (var e = this.buttlets.length - 1; e >= 0; e--)
                            if (this.buttlets[e].y += 30, this.buttlets[e].y >= 1500 || 0 == this.buttlets[e].getChildByName("bt").active) {
                                this.view.bullet.removeChild(this.buttlets[e]), this.buttlets[e].destroy();
                                var t = this.buttlets.indexOf(this.buttlets[e]);
                                t > -1 && this.buttlets.splice(t, 1)
                            }
                }, t.prototype.zhadan_btn = function() {
                    var e = this;
                    if (s.default.GAME_STATE != s.default.GAME_PAUSE && !this.isBtnClick) {
                        if (s.default.userData.zhadan > 0 && this.zhadanPrefab) {
                            c.default.useingItem(s.default.userCurrentLevel, "Bom");
                            var t = cc.instantiate(this.zhadanPrefab);
                            this.node.addChild(t), s.default.userData.zhadan -= 1, this.updateItemData()
                        } else s.default.isShowingAlert || (s.default.isShowingAlert = !0, this.getZhadanAlert(), this.game_pause());
                        this.isBtnClick = !0, this.scheduleOnce(function() {
                            e.isBtnClick = !1
                        }, 1)
                    }
                }, t.prototype.getZhadanAlert = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, t, i;
                        return __generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return i = (t = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/showGetRewardAlert")];
                                case 1:
                                    return (e = i.apply(t, [n.sent()])).getComponent("showGetRewardAlert").setInfo("\u70b8\u5f39\u4e0d\u8db3", "\u770b\u89c6\u9891\u53ef\u4ee5\u83b7\u53d65\u4e2a\u70b8\u5f39", 5, this.view.windowCont), this.view.windowCont.addChild(e), [2]
                            }
                        })
                    })
                }, t.prototype.addZhadan = function() {
                    s.default.userData.zhadan += 5, this.updateItemData(), this.resume_game()
                }, t.prototype.baozha = function() {
                    for (var e = this.view.enemy_cont.childrenCount, t = 0; t < e; t++) void 0 != this.view.enemy_cont.children[t] && this.view.enemy_cont.children[t].getComponent("enemy").baozha_hurt()
                }, t.prototype.TeachLeft = function() {
                    console.log("teach touch left"), this.isTeachLeft = !0, this.leftBtnClick()
                }, t.prototype.TeachRight = function() {
                    this.isTeachRight = !0, this.rightBtnClick()
                }, t.prototype.leftBtnClick = function() {
                    var e = this;
                    if (!this.isPlayerYun && (s.default.GAME_STATE != s.default.GAME_PAUSE || this.isTeachLeft)) {
                        var t = null;
                        if (!this.player_is_running) {
                            if (this.player_is_running = !0, this.player.x == this.player_pos_left_x) return void(this.player_is_running = !1);
                            if (this.player.x == this.player_pos_middle_x) {
                                var i = cc.moveTo(.1, this.player_pos_left_x, -207);
                                this.playerActionName = "runleft", this.player_spine.setAnimation(0, "yidong", !1), t = cc.sequence(i, cc.callFunc(function() {
                                    e.player_is_running = !1, e.player.x = e.player_pos_left_x
                                })), this.player.runAction(t)
                            }
                            if (this.player.x == this.player_pos_right_x) {
                                i = cc.moveTo(.1, this.player_pos_middle_x, -207);
                                this.playerActionName = "runleft", this.player_spine.setAnimation(0, "yidong", !1), t = cc.sequence(i, cc.callFunc(function() {
                                    e.player_is_running = !1, e.player.x = e.player_pos_middle_x
                                })), this.player.runAction(t)
                            }
                        }
                        this.isTeachLeft = !1
                    }
                }, t.prototype.rightBtnClick = function() {
                    var e = this;
                    if (!this.isPlayerYun && (s.default.GAME_STATE != s.default.GAME_PAUSE || this.isTeachRight)) {
                        var t = null;
                        if (!this.player_is_running) {
                            if (this.player_is_running = !0, this.player.x == this.player_pos_right_x) return void(this.player_is_running = !1);
                            if (this.player.x == this.player_pos_middle_x) {
                                this.playerActionName = "runright", this.player_spine.setAnimation(0, "yidongyou", !1);
                                var i = cc.moveTo(.1, this.player_pos_right_x, -207);
                                t = cc.sequence(i, cc.callFunc(function() {
                                    e.player_is_running = !1, e.player.x = e.player_pos_right_x
                                })), this.player.runAction(t)
                            }
                            if (this.player.x == this.player_pos_left_x) {
                                i = cc.moveTo(.1, this.player_pos_middle_x, -207);
                                this.playerActionName = "runright", this.player_spine.setAnimation(0, "yidongyou", !1), t = cc.sequence(i, cc.callFunc(function() {
                                    e.player_is_running = !1, e.player.x = e.player_pos_middle_x
                                })), this.player.runAction(t)
                            }
                        }
                        this.isTeachRight = !1
                    }
                }, t.prototype.back_btn_click = function() {
                    o.default.playSound("music/jianqi", !1), this._event_mgr.dispatch_event("back_home", {})
                }, t.prototype.scene_btns_click = function(e) {
                    o.default.playSound("music/jianqi", !1);
                    var t = e.name.substring(2, e.name.indexOf("<"));
                    this._event_mgr.dispatch_event("gotoInnerScene", {
                        id: t
                    })
                }, t.prototype.onKeyUp = function(e) {
                    this.isTeachChangan && (this.isTeachChangan = !1, this.view.bullet.removeAllChildren(), this._event_mgr.dispatch_event("teach_changan_finish", null)), s.default.GAME_STATE != s.default.GAME_PAUSE && this.isLoadBulletFinish && (this.isShoot = !1)
                }, t.prototype.onKeyDown = function(e) {
                    if (s.default.userData.isFinishXinShou) switch (e.keyCode) {
                        case cc.macro.KEY.a:
                            this.leftBtnClick();
                            break;
                        case cc.macro.KEY.d:
                            this.rightBtnClick();
                            break;
                        case cc.macro.KEY.j:
                            this.shootBtnClick();
                            break;
                        case cc.macro.KEY.k:
                            this.feijiBtn_click();
                            break;
                        case cc.macro.KEY.l:
                            this.zhadan_btn()
                    }
                }, t.prototype.on_start_click = function() {}, t.prototype.backFinish = function(e) {}, t.prototype.start = function() {}, t = __decorate([u], t)
            }(n.default));
        i.default = h, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../supers/UI_ctrl": "UI_ctrl",
        "../tools/CommonFun": "CommonFun",
        "../tools/Rock_wx": "Rock_wx",
        "../tools/game_tools": "game_tools",
        "../utils/config": "config"
    }],
    game_main: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "39bc6Aj4YBIN6zazkkZU604", "game_main"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../supers/scene"),
            a = cc._decorator,
            s = a.ccclass,
            o = (a.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var i;
                return __extends(t, e), i = t, t.getInstance = function() {
                    return null === i.Instance && (i.Instance = new i("game_main")), i.Instance
                }, t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.Instance = null, t = i = __decorate([s], t)
            }(n.default));
        i.default = o, cc._RF.pop()
    }, {
        "../supers/scene": "scene"
    }],
    game_mgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "75691IQQyRAjIkrQ2dppkKE", "game_mgr"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc._decorator,
            a = n.ccclass,
            s = (n.property, function(e) {
                function t() {
                    return e.call(this) || this
                }
                return __extends(t, e), t.prototype.setEvent = function() {}, t.prototype.init = function() {}, t.prototype.onLoad = function() {
                    this.cur_scene = null
                }, t.prototype.start = function() {}, t.prototype.game_mgr_said = function() {
                    cc.log("game_mgr_said")
                }, t.prototype.enter_scene = function(e) {
                    null != e && (null != this.cur_scene && this.cur_scene.destroy(this.cur_scene != e), this.cur_scene = e, e.enter())
                }, t.prototype.preload_scene = function(e, t, i) {
                    e.preload()
                }, t = __decorate([a], t)
            }(cc.Component));
        i.default = s, cc._RF.pop()
    }, {}],
    game_shop_ctrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "2280ft+nhRNE4lpNTB/ob7o", "game_shop_ctrl"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../supers/UI_ctrl"),
            a = e("../managers/event_mgr"),
            s = e("../utils/config"),
            o = e("../tools/game_tools"),
            r = e("../tools/CommonFun"),
            c = e("../tools/Rock_wx"),
            l = cc._decorator,
            u = l.ccclass,
            h = (l.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isBtnClick = !1, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this._event_mgr = a.default.getInstance(), this.add_button_listen("back_btn", this, this.back_btn_click), this.add_button_listen("next_btn", this, this.next_btn_click), this.add_button_listen("gs_list_0/butn_0", this, this.update_level), this.add_button_listen("gs_list_1/butn_1", this, this.update_level), this.add_button_listen("gs_list_2/butn_2", this, this.update_level), this.add_button_listen("gs_list_3/butn_3", this, this.update_level), this.add_button_listen("free_jinbi_btn", this, this.free_jinb_get), this._event_mgr.add_event_listenner("share_success", this, this.shareSuccess), this._event_mgr.add_event_listenner("finish_chengjiu", this, this.getchengjiuReward), this.initData()
                }, t.prototype.free_jinb_get = function() {
                    s.default.share_id = 12, c.default.share()
                }, t.prototype.onDisable = function() {
                    console.log("onDisable removeListeners"), this.removeAllListeners()
                }, t.prototype.removeAllListeners = function() {
                    console.log("game_shop removeAllListeners"), this._event_mgr.remove_event_listenner("share_success", this, this.shareSuccess), this._event_mgr.remove_event_listenner("finish_chengjiu", this, this.getchengjiuReward)
                }, t.prototype.initData = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, t, i, n;
                        return __generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    for (s.default.game_shop_data.data_0 = s.default.userData.gun_level, s.default.game_shop_data.data_1 = s.default.userData.fanghu_level, s.default.game_shop_data.data_2 = s.default.userData.plane_level, s.default.game_shop_data.data_3 = s.default.userData.zhadan_level, e = 0; e < o.default.getJsonLength(s.default.game_shop_data); e++) {
                                        for (t = 0; t < s.default.game_shop_data["data_" + e]; t++) this.view["gs_list_" + e + "/level_dian/l_" + t].active = !0;
                                        this.view["gs_list_" + e + "/need_jinbi"].getComponent(cc.Label).string = s.default.game_shop_price["item_" + e]["level_" + s.default.game_shop_data["data_" + e]]
                                    }
                                    return i = this.view["gs_list_0/gun_icon"].getComponent(cc.Sprite), [4, r.CommonFun.loadTextrueSync("images/pifu/gun_" + s.default.game_shop_data.data_0)];
                                case 1:
                                    return i.spriteFrame = a.sent(), n = this.view["gs_list_1/mu_icon"].getComponent(cc.Sprite), [4, r.CommonFun.loadTextrueSync("images/weilanpifu/weilan_" + s.default.game_shop_data.data_1)];
                                case 2:
                                    return n.spriteFrame = a.sent(), this.view["jinbi/jinbi_num"].getComponent(cc.Label).string = s.default.userData.jinbi, [2]
                            }
                        })
                    })
                }, t.prototype.shareSuccess = function(e) {
                    var t = e.share_id;
                    if (-1 != t) {
                        if (11 == t && (console.log("share success \u83b7\u5f97\u91d1\u5e0150"), this.addJinbi_50(), this.view.alert_cont.removeAllChildren()), 13 == t && (this.addtili(), this.view.alert_cont.removeAllChildren()), 12 == t) {
                            switch (s.default.userData.ling_jinbi_time) {
                                case 0:
                                    s.default.userData.jinbi += 50, this.view["jinbi/jinbi_num"].getComponent(cc.Label).string = s.default.userData.jinbi, this.view["free_jinbi_btn/jinbi_num"].getComponent(cc.Label).string = 100, o.default.showPiaozi("Nhận xu x50"), s.default.userData.ling_jinbi_time++;
                                    break;
                                case 1:
                                    s.default.userData.jinbi += 100, this.view["jinbi/jinbi_num"].getComponent(cc.Label).string = s.default.userData.jinbi, this.view["free_jinbi_btn/jinbi_num"].getComponent(cc.Label).string = 200, o.default.showPiaozi("Nhận xu x100"), s.default.userData.ling_jinbi_time++;
                                    break;
                                case 2:
                                    s.default.userData.jinbi += 200, this.view["jinbi/jinbi_num"].getComponent(cc.Label).string = s.default.userData.jinbi, this.view["free_jinbi_btn/jinbi_num"].getComponent(cc.Label).string = 300, o.default.showPiaozi("Nhận xu x200"), s.default.userData.ling_jinbi_time++;
                                    break;
                                case 3:
                                    s.default.userData.jinbi += 300, this.view["jinbi/jinbi_num"].getComponent(cc.Label).string = s.default.userData.jinbi, this.view["free_jinbi_btn/jinbi_num"].getComponent(cc.Label).string = 500, o.default.showPiaozi("Nhận xu x300"), s.default.userData.ling_jinbi_time++;
                                    break;
                                case 4:
                                    s.default.userData.jinbi += 500, this.view["free_jinbi_btn/jinbi_num"].getComponent(cc.Label).string = 50, this.view["jinbi/jinbi_num"].getComponent(cc.Label).string = s.default.userData.jinbi, o.default.showPiaozi("Nhận xu x500"), s.default.userData.ling_jinbi_time = 0
                            }
                            c.default.save("userdata", s.default.userData)
                        }
                        s.default.isShareing = !1, s.default.share_id = 0
                    } else o.default.showPiaozi("Hết quảng cáo")
                }, t.prototype.addtili = function() {
                    console.log("\u5546\u57ce-\u589e\u52a0\u4f53\u529b5"), o.default.showPiaozi("Năng lượng+5"), s.default.userData.tili += 5, c.default.saveUserData()
                }, t.prototype.show_chengjiu_tips = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, i, n, a;
                        return __generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return t = e, o.default.playSound("music/reward", !1), a = (n = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/getChengjiu")];
                                case 1:
                                    return (i = a.apply(n, [c.sent()])).getComponent("getChengjiu").setInfo(t, s.default.chengjiu_data["chengjiu_" + t].content, s.default.chengjiu_data["chengjiu_" + t].reward_cont), this.view.alert_cont.addChild(i), [2]
                            }
                        })
                    })
                }, t.prototype.getchengjiuReward = function(e) {
                    this.view.alert_cont.removeAllChildren();
                    var t = e.chengjiu_id,
                        i = e.isDobule;
                    if ("finish" != s.default.chengjiu_data["chengjiu_" + t].state) {
                        switch (t) {
                            case 7:
                            case 8:
                                i ? (s.default.userData.tili += 2, o.default.showPiaozi("Năng lượng x2")) : (s.default.userData.tili += 1, o.default.showPiaozi("Năng lượng x1"))
                        }
                        s.default.chengjiu_data["chengjiu_" + t].state = "finish", c.default.save("chengjiu", s.default.chengjiu_data)
                    }
                }, t.prototype.addJinbi_50 = function() {
                    o.default.showPiaozi("Nhận xu 50"), s.default.userData.jinbi += 50, this.view["jinbi/jinbi_num"].getComponent(cc.Label).string = s.default.userData.jinbi
                }, t.prototype.update_level = function(e) {
                    return __awaiter(this, void 0, void 0, function() {
                        var t, i, n, a, l, u, h = this;
                        return __generator(this, function(_) {
                            switch (_.label) {
                                case 0:
                                    if (this.isBtnClick) return [3, 7];
                                    if (t = e.node.name, i = t.charAt(t.length - 1), console.log("config.game_shop_data[data_ + id] is", s.default.game_shop_data["data_" + i]), 5 == s.default.game_shop_data["data_" + i]) return this.view["gs_list_" + i + "/need_jinbi"].getComponent(cc.Label).string = "MAX", o.default.showDialog(this.node, "Chúc mừng", "Đạt level tối đa"), [2];
                                    if (n = s.default.game_shop_price["item_" + i]["level_" + s.default.game_shop_data["data_" + i]], !(s.default.userData.jinbi - n > i)) return [3, 5];
                                    for (s.default.userData.jinbi -= n, s.default.game_shop_data["data_" + i]++, this.view["gs_list_" + i + "/need_jinbi"].getComponent(cc.Label).string = s.default.game_shop_price["item_" + i]["level_" + s.default.game_shop_data["data_" + i]], a = 0; a < s.default.game_shop_data["data_" + i]; a++) this.view["gs_list_" + i + "/level_dian/l_" + a].active = !0;
                                    return 0 != i ? [3, 2] : (l = this.view["gs_list_0/gun_icon"].getComponent(cc.Sprite), [4, r.CommonFun.loadTextrueSync("images/pifu/gun_" + s.default.game_shop_data.data_0)]);
                                case 1:
                                    l.spriteFrame = _.sent(), s.default.userData.gun_level += 1, c.default.userOnSetLevel(s.default.userData.gun_level, "\u67aa"), 1 == s.default.userData.gun_level && this.show_chengjiu_tips(7), _.label = 2;
                                case 2:
                                    return 1 != i ? [3, 4] : (s.default.userData.fanghu_level += 1, c.default.userOnSetLevel(s.default.userData.gun_level, "\u969c\u788d\u7269"), 1 == s.default.userData.fanghu_level && this.show_chengjiu_tips(8), u = this.view["gs_list_1/mu_icon"].getComponent(cc.Sprite), [4, r.CommonFun.loadTextrueSync("images/weilanpifu/weilan_" + s.default.game_shop_data.data_1)]);
                                case 3:
                                    u.spriteFrame = _.sent(), _.label = 4;
                                case 4:
                                    return this.view["jinbi/jinbi_num"].getComponent(cc.Label).string = s.default.userData.jinbi, 2 == i && (c.default.userOnSetLevel(s.default.userData.gun_level, "Máy bay"), s.default.userData.plane_level++), 3 == i && (c.default.userOnSetLevel(s.default.userData.gun_level, "Bom"), s.default.userData.zhadan_level++), [3, 6];
                                case 5:
                                    o.default.showGetRewardAlert("Thiếu xu", "Xem video nhận 50 xu", 11, this.view.alert_cont), _.label = 6;
                                case 6:
                                    this.isBtnClick = !0, this.scheduleOnce(function() {
                                        h.isBtnClick = !1
                                    }, 1), _.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.next_btn_click = function() {
                    var e = this;
                    this.isBtnClick || (s.default.userData.tili -= 1, console.log("\u4f53\u529bis ", s.default.userData.tili), s.default.userData.tili <= 0 ? (s.default.userData.tili = 0, o.default.showGetRewardAlert("Thiếu năng lượng", "Xem video nhận 5 năng lượng", 13, this.view.alert_cont)) : (this.removeAllListeners(), this._event_mgr.dispatch_event("close_game_shop", {}), s.default.GAME_STATE != s.default.GAME_OVER ? this._event_mgr.dispatch_event("next_level", {}) : this._event_mgr.dispatch_event("retry_level", {})), c.default.saveUserData()), this.isBtnClick = !0, this.scheduleOnce(function() {
                        e.isBtnClick = !1
                    }, 1)
                }, t.prototype.back_btn_click = function() {
                    var e = this;
                    this.isBtnClick || (this.removeAllListeners(), s.default.userData.backTitleTime++, c.default.saveUserData(), o.default.releasePrefab("prefabs/teach"), o.default.releasePrefab("prefabs/reward_window"), o.default.releasePrefab("prefabs/double_get_window"), o.default.releasePrefab("prefabs/showGetRewardAlert"), o.default.releasePrefab("prefabs/chengjiu_tips"), this._event_mgr.dispatch_event("back_title", {}), this._event_mgr.dispatch_event("close_game_shop", {}), this.isBtnClick = !0, this.scheduleOnce(function() {
                        e.isBtnClick = !1
                    }, 1))
                }, t.prototype.start = function() {}, t = __decorate([u], t)
            }(n.default));
        i.default = h, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../supers/UI_ctrl": "UI_ctrl",
        "../tools/CommonFun": "CommonFun",
        "../tools/Rock_wx": "Rock_wx",
        "../tools/game_tools": "game_tools",
        "../utils/config": "config"
    }],
    game_shop: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c52409qiV1Ju5X/5H2i7DEH", "game_shop"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../supers/popup"),
            a = cc._decorator,
            s = a.ccclass,
            o = (a.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var i;
                return __extends(t, e), i = t, t.getInstance = function() {
                    return null === i.Instance && (i.Instance = new i("game_shop")), i.Instance
                }, t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.Instance = null, t = i = __decorate([s], t)
            }(n.default));
        i.default = o, cc._RF.pop()
    }, {
        "../supers/popup": "popup"
    }],
    game_title_ctrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "080dbs2X7lHdaobwG4JnuJE", "game_title_ctrl"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../supers/UI_ctrl"),
            a = e("../managers/event_mgr"),
            s = e("../tools/game_tools"),
            o = e("../utils/config"),
            r = e("../tools/CommonFun"),
            c = e("../tools/Rock_wx"),
            l = e("../tools/login"),
            u = cc._decorator,
            h = u.ccclass,
            _ = (u.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isBtnClick = !1, t.isShowingRank = !1, t.isLoadFinish = !1, t.is_tiliIcon_running = !1, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this._event_mgr = a.default.getInstance(), this.add_button_listen("startBtn", this, this.on_start_click), this.add_button_listen("moreBtn", this, this.on_moreBt_click), this.add_button_listen("iconss", this, this.on_iconss_click), this.add_button_listen("rankBtn", this, this.checkRank), this.add_button_listen("chengjiuBtn", this, this.showChengjiu), this.add_button_listen("tiliCont/addBtn", this, this.addTiliBtnClick), this.add_button_listen("OpenDomain/Mask/HideRank", this, this.hideRank), this.add_button_listen("shouquan/dialogbg/noBtn", this, this.noBtnClick), a.default.getInstance().add_event_listenner("login_success", this, this.login_success), a.default.getInstance().add_event_listenner("share_success", this, this.shareSuccess), this.checkTili(), this.showLoading(), this.checkSign(), o.default.startGameTime = (new Date).getTime()
                }, t.prototype.checkSign = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, t, i, n, a, s, l;
                        return __generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return console.log("\u68c0\u67e5\u767b\u5f55"), e = new Date, t = 1e4 * e.getFullYear() + 100 * (e.getMonth() + 1) + e.getDate(), console.log("back time is ", o.default.userData.backTitleTime), 1 != o.default.userData.backTitleTime ? [3, 2] : (o.default.userData.leave_time = t, o.default.userData.user_today_have_login = !1, n = (i = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/sign")]);
                                case 1:
                                    a = n.apply(i, [u.sent()]), o.default.userData.backTitleTime++, this.node.addChild(a), c.default.saveUserData(), u.label = 2;
                                case 2:
                                    return t > o.default.userData.leave_time && 0 != o.default.userData.score ? (o.default.userData.leave_time = t, o.default.userData.user_today_have_login = !1, l = (s = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/sign")]) : [3, 4];
                                case 3:
                                    a = l.apply(s, [u.sent()]), this.node.addChild(a), c.default.saveUserData(), u.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.hideRank = function() {
                    this.isShowingRank = !1, this.view.OpenDomain.active = !1, c.default.postMessage("hide", null)
                }, t.prototype.noBtnClick = function() {
                    this.view.shouquan.active = !1, a.default.getInstance().dispatch_event("userCancelLogin", {})
                }, t.prototype.login_success = function() {
                    this.view.shouquan.active = !1, this.showRank()
                }, t.prototype.getUserLoginTime = function() {
                    if (0 != o.default.userData.leave_time) {
                        var e = new Date,
                            t = 1e4 * e.getFullYear() + 100 * (e.getMonth() + 1) + e.getDate();
                        console.log("today is", t), o.default.need_to_sign = t - o.default.userData.leave_time > 0, console.log("today - config.userData.leave_time is", t - o.default.userData.leave_time), console.log("need to sign is ", o.default.need_to_sign), o.default.need_to_sign && this.showSignUI(), o.default.userData.login_time, o.default.userData.user_today_have_login
                    }
                }, t.prototype.showSignUI = function() {
                    return __awaiter(this, void 0, void 0, function() {
                        var e, t, i;
                        return __generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return i = (t = cc).instantiate, [4, r.CommonFun.loadPrefabSync("prefabs/sign")];
                                case 1:
                                    return e = i.apply(t, [n.sent()]), this.node.addChild(e), [2]
                            }
                        })
                    })
                }, t.prototype.showLoading = function() {
                    this.view.rankBtn.active = !1, this.view.chengjiuBtn.active = !1, this.view.startBtn.active = !1, this.view.loading.active = !0
                }, t.prototype.hideLoading = function() {
                    this.view.chengjiuBtn.active = !0, this.view.startBtn.active = !0, this.view.loading.active = !1
                }, t.prototype.onDisable = function() {
                    this.removeListeners()
                }, t.prototype.removeListeners = function() {
                    console.log("removeListeners"), this._event_mgr.remove_event_listenner("share_success", this, this.shareSuccess), this._event_mgr.remove_event_listenner("login_success", this, this.login_success)
                }, t.prototype.addtili = function() {
                    s.default.showPiaozi("Năng lượng+5"), o.default.userData.tili += 5, this.checkTili()
                }, t.prototype.checkRank = function() {
                    var e = this;
                    this.isBtnClick || (this.isShowingRank || (console.log("show rank,config.userData.name = ", o.default.userData.name), this.isShowingRank = !0, "123" == o.default.userData.name ? (this.view.shouquan.active = !0, this.login = new l.default, this.login.onLoad(), this.login.updateManage(), console.log("shouquan true"), this.isShowingRank = !1) : (c.default.postMessage("userid", o.default.userData.name), console.log("shouquan false"), this.view.shouquan.active = !1, this.isShowingRank = !1, this.showRank())), this.isBtnClick = !0, this.scheduleOnce(function() {
                        e.isBtnClick = !1
                    }, 1))
                }, t.prototype.showRank = function() {
                    this.isShowingRank || (this.isShowingRank = !0, console.log("showrank11111"), this.view.OpenDomain.active = !0, this.view.OpenDomain.getComponent("openDomain").openFriendRank())
                }, t.prototype.addTiliBtnClick = function() {
                    s.default.showGetRewardAlert("\u589e\u52a0\u4f53\u529b", "\u770b\u89c6\u9891\u53ef\u4ee5\u589e\u52a05\u70b9\u4f53\u529b", 1, this.view.window_cont)
                }, t.prototype.showChengjiu = function() {
                    var e = this;
                    this.is_tiliIcon_running || this.isBtnClick || (this._event_mgr.dispatch_event("show_chengjiu", {}), this.isBtnClick = !0, this.scheduleOnce(function() {
                        e.isBtnClick = !1
                    }, 1))
                }, t.prototype.checkTili = function() {
                    var e = o.default.userData.tili;
                    e >= 5 ? this.view["tiliCont/tili_time"].active = !1 : (this.view["tiliCont/tili_time"].active = !0, this.view["tiliCont/tili_time"].getComponent(cc.Label).string = o.default.tiliTime, this.view["tiliCont/tili_num"].getComponent(cc.Label).string = o.default.userData.tili), this.view["tiliCont/tili_num"].getComponent(cc.Label).string = e
                }, t.prototype.update = function(e) {
                    o.default.userData.tili <= 5 && this.checkTili(), this.isLoadFinish || this.isLoadFinish || (this.view["loading/loadingtiao_mask"].width = o.default.json_num / 3 * 564, o.default.json_num / 3 == 1 && (this.isLoadFinish = !0, this.hideLoading()))
                }, t.prototype.setTili = function(e) {
                    this.view["tiliCont/tili_num"].getComponent(cc.Label).string = e
                }, t.prototype.shareSuccess = function(e) {
                    var t = e.share_id; - 1 != t ? (1 == t && (this.addtili(), o.default.share_id = 0, o.default.isShareing = !1, this.view.window_cont.removeAllChildren()), 2 == t && (this.addtili(), o.default.share_id = 0, o.default.isShareing = !1, this.view.window_cont.removeAllChildren())) : s.default.showPiaozi("Hết quảng cáo")
                }, t.prototype.on_start_click = function() {
                    var e = this;
                    if (console.log("on_start_click", o.default.json_num), 3 == o.default.json_num) {
                        if (this.is_tiliIcon_running) return;
                        if (!this.isBtnClick) {
                            if (o.default.userData.tili <= 0) return s.default.showPiaozi("Năng lượng không đủ"), void s.default.showGetRewardAlert("Thiếu năng lượng", "Xem video nhận 5 năng lượng", 2, this.view.window_cont);
                            o.default.userData.tili -= 1, this.checkTili(), this.is_tiliIcon_running = !0;
                            var t = this.view.powicon_title;
                            t.active = !0;
                            var i = this.view.tili_jianyi;
                            i.active = !0;
                            var n = cc.moveTo(.3, i.x, i.y + 50),
                                a = cc.fadeOut(1),
                                r = cc.spawn(n, a);
                            i.runAction(r);
                            var c = cc.moveTo(.3, t.x, t.y + 30),
                                l = cc.moveTo(.3, this.view.startBtn.x, this.view.startBtn.y),
                                u = cc.scaleTo(.3, 1.2, 1.2),
                                h = cc.fadeOut(1),
                                _ = cc.callFunc(function() {
                                    e.removeListeners(), e.is_tiliIcon_running = !1, o.default.userCurrentLevel = e.view.test_level_num.getComponent(cc.EditBox).string, e._event_mgr.dispatch_event("start_game", {}), e.isBtnClick = !0, e.scheduleOnce(function() {
                                        e.isBtnClick = !1
                                    }, 1)
                                }),
                                d = cc.spawn(u, h),
                                p = cc.sequence(c, l, d, _);
                            t.runAction(p)
                        }
                    } else s.default.getPrefab("prefabs/json_load_tips", function(t) {
                        var i = cc.instantiate(t);
                        e.node.addChild(i)
                    })
                }, t.prototype.on_iconss_click = function() {
                    s.default.playSound("music/jianqi", !1), s.default.jump_to_game(1)
                }, t.prototype.on_moreBt_click = function() {
                    s.default.playSound("music/jianqi", !1), s.default.jump_to_game(0)
                }, t.prototype.backFinish = function(e) {}, t.prototype.start = function() {}, t = __decorate([h], t)
            }(n.default));
        i.default = _, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../supers/UI_ctrl": "UI_ctrl",
        "../tools/CommonFun": "CommonFun",
        "../tools/Rock_wx": "Rock_wx",
        "../tools/game_tools": "game_tools",
        "../tools/login": "login",
        "../utils/config": "config"
    }],
    game_title: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "9a518jqkPNK+Lo92kqdwXxm", "game_title"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../supers/scene"),
            a = cc._decorator,
            s = a.ccclass,
            o = (a.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var i;
                return __extends(t, e), i = t, t.getInstance = function() {
                    return null === i.Instance && (i.Instance = new i("game_title")), i.Instance
                }, t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.Instance = null, t = i = __decorate([s], t)
            }(n.default));
        i.default = o, cc._RF.pop()
    }, {
        "../supers/scene": "scene"
    }],
    game_tools: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "701d6zPGeNEia43Igr6lp8A", "game_tools"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../utils/config"),
            a = cc._decorator,
            s = a.ccclass,
            o = (a.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var i;
                return __extends(t, e), i = t, t.playSound = function(e, t) {
                    cc.loader.loadRes(e, cc.AudioClip, function(e, i) {
                        if (!e) cc.audioEngine.playEffect(i, t)
                    })
                }, t.stopSound = function() {
                    cc.audioEngine.stopAllEffects()
                }, t.jump_to_game = function(e) {
                    switch (e) {
                        case 0:
                            wx.navigateToMiniProgram({
                                appId: "wx53924aff03acbafb",
                                success: function(e) {
                                    console.log("jump success")
                                }
                            });
                            break;
                        case 1:
                            wx.navigateToMiniProgram({
                                appId: "wx78ffc9926c508c63",
                                success: function(e) {
                                    console.log("jump success")
                                }
                            })
                    }
                }, t.playMusic = function(e, t) {
                    cc.loader.loadRes(e, cc.AudioClip, function(e, i) {
                        if (!e) cc.audioEngine.playMusic(i, t)
                    })
                }, t.setImgTexture = function(e, t) {
                    cc.loader.loadRes(e, cc.SpriteFrame, function(e, i) {
                        e ? cc.error(e.message || e) : t.getComponent(cc.Sprite).spriteFrame = i
                    }.bind(this))
                }, t.loadPrefab = function(e, t) {
                    cc.loader.loadRes(e, function(e, i) {
                        if (null == e && i) {
                            var n = cc.instantiate(i);
                            t(n)
                        } else console.log("err:", e)
                    })
                }, t.showDialog = function(e, t, a) {
                    n.default.isShowingAlert || (n.default.isShowingAlert = !0, i.loadPrefab("prefabs/dialog_window", function(i) {
                        var n = i;
                        e.addChild(n), n.getComponent("dialog").setInfo(t, a)
                    }))
                }, t.show_double_window = function(e, t, n) {
                    i.loadPrefab("prefabs/double_get_window", function(i) {
                        var a = i;
                        e.addChild(a), a.getComponent("double_get_window").setInfo(t, n, e)
                    })
                }, t.showPiaozi = function(e) {
                    var t = cc.find("Canvas");
                    i.loadPrefab("prefabs/piaozi", function(i) {
                        i.getComponent("piaozi").setContent(e), t.addChild(i)
                    })
                }, t.showGetRewardAlert = function(e, t, n, a) {
                    i.loadPrefab("prefabs/showGetRewardAlert", function(i) {
                        i.getComponent("showGetRewardAlert").setInfo(e, t, n), a.addChild(i)
                    })
                }, t.getPrefab = function(e, t) {
                    cc.loader.loadRes(e, function(e, i) {
                        e ? console.log("err:", e) : t(i)
                    })
                }, t.saveUserData = function() {
                    "h5" != n.default.version ? wx.setStorageSync("userdata", n.default.userData) : cc.sys.localStorage.setItem("userdata", n.default.userData)
                }, t.releasePrefab = function(e) {
                    var t = cc.loader.getDependsRecursively(e);
                    cc.loader.release(t), cc.loader.release(e)
                }, t.getJsonLength = function(e) {
                    var t = 0;
                    for (var i in e) t++;
                    return t
                }, t.randArr = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = parseInt((e.length * Math.random()).toString()),
                            n = e[t];
                        e[t] = e[i], e[i] = n
                    }
                    return e
                }, t.getRandomSpace = function(e) {
                    return Math.floor(Math.random() * (e + 1))
                }, t.getRandomSpaceFromTo = function(e, t) {
                    return Math.floor(Math.random() * (t - e) + e)
                }, t.getClearName = function(e) {
                    return e.substring(0, e.indexOf("<"))
                }, t.getClearNameByString = function(e, t) {
                    return e.substring(0, e.indexOf(t))
                }, t.get_day = function() {
                    var e = new Date;
                    return Number(String(e.getFullYear()) + String((Array(2).join("0") + (e.getMonth() + 1)).slice(-2)) + String((Array(2).join("0") + e.getDate()).slice(-2)))
                }, t.formatSeconds = function(e) {
                    var t = Math.floor(e % 3600);
                    return i.formatBit(Math.floor(e / 3600)) + ":" + i.formatBit(Math.floor(t / 60)) + ":" + i.formatBit(e % 60)
                }, t.formatBit = function(e) {
                    return (e = +e) > 9 ? e : "0" + e
                }, t.getToTime = function(e) {
                    var t = new Date,
                        i = e.getTime() - t.getTime();
                    return Math.floor(i / 864e5) + "\u5929" + Math.floor(i / 36e5 % 24) + ":" + Math.floor(i / 6e4 % 60) + ":" + Math.floor(i / 1e3 % 60)
                }, t.load_json = function(e) {
                    var t = "json/" + e;
                    return new Promise(function(e, i) {
                        cc.loader.loadRes(t, function(t, n) {
                            t ? i(t) : e(n.json)
                        })
                    })
                }, t = i = __decorate([s], t)
            }(cc.Component));
        i.default = o, cc._RF.pop()
    }, {
        "../utils/config": "config"
    }],
    getChengjiu: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "e042aH6awFDHIf0TqypGGxG", "getChengjiu"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../utils/config"),
            a = e("../tools/Rock_wx"),
            s = e("../managers/event_mgr"),
            o = e("../tools/game_tools"),
            r = cc._decorator,
            c = r.ccclass,
            l = r.property,
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.cj_content = null, t.reward_content = null, t.chengjiuId = 0, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    s.default.getInstance().add_event_listenner("share_success", this, this.share_success)
                }, t.prototype.init = function() {}, t.prototype.setInfo = function(e, t, i) {
                    this.chengjiuId = e, this.cj_content.string = t, this.reward_content.string = i
                }, t.prototype.share_success = function(e) {
                    var t = e.share_id; - 1 != t ? 14 == t && (s.default.getInstance().dispatch_event("finish_chengjiu", {
                        chengjiu_id: this.chengjiuId,
                        isDobule: !0
                    }), n.default.isShowingAlert = !1, n.default.isShareing = !1, n.default.share_id = 0, n.default.GAME_STATE == n.default.GAME_PAUSE && (n.default.GAME_STATE = n.default.GAME_PLAYING)) : o.default.showPiaozi("Hết quảng cáo")
                }, t.prototype.shareBtnClick = function() {
                    n.default.share_id = 14, a.default.share()
                }, t.prototype.vedioBtnClick = function() {}, t.prototype.lingqu = function() {
                    s.default.getInstance().dispatch_event("finish_chengjiu", {
                        chengjiu_id: this.chengjiuId,
                        isDobule: !1
                    }), n.default.GAME_STATE == n.default.GAME_PAUSE && (n.default.GAME_STATE = n.default.GAME_PLAYING), n.default.isShowingAlert = !1, this.node.destroy()
                }, __decorate([l(cc.Label)], t.prototype, "cj_content", void 0), __decorate([l(cc.Label)], t.prototype, "reward_content", void 0), t = __decorate([c], t)
            }(cc.Component);
        i.default = u, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../tools/Rock_wx": "Rock_wx",
        "../tools/game_tools": "game_tools",
        "../utils/config": "config"
    }],
    get_jinbi: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "f70c4QcIBVCn7AXlzg/mL66", "get_jinbi"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.jinbi_label = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.init()
                }, t.prototype.set_jinbi_num = function(e) {
                    this.jinbi_label.string = "+" + e.toString()
                }, t.prototype.init = function() {
                    var e = this,
                        t = cc.moveTo(.3, this.node.x, this.node.y + 100),
                        i = cc.fadeOut(1),
                        n = cc.sequence(t, i, cc.callFunc(function() {
                            e.node.parent.removeChild(e.node), e.node.destroy()
                        }));
                    this.node.runAction(n)
                }, t.prototype.start = function() {}, __decorate([s(cc.Label)], t.prototype, "jinbi_label", void 0), t = __decorate([a], t)
            }(cc.Component);
        i.default = o, cc._RF.pop()
    }, {}],
    gm_res: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "25f75ZdlOJEqqYyGmZu4UZh", "gm_res"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.ball_prefab = null, t.coin_prefab = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    cc.director.getPhysicsManager().enabled = !0
                }, t.prototype.getCoinPrefab = function() {
                    return this.coin_prefab
                }, t.prototype.getBallPrefab = function() {
                    return this.ball_prefab
                }, __decorate([s(cc.Prefab)], t.prototype, "ball_prefab", void 0), __decorate([s(cc.Prefab)], t.prototype, "coin_prefab", void 0), t = __decorate([a], t)
            }(cc.Component);
        i.default = o, cc._RF.pop()
    }, {}],
    guaguale: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "8ca04cII6BMHZ/FAHd9rzvA", "guaguale"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../managers/event_mgr"),
            a = cc._decorator,
            s = a.ccclass,
            o = a.property,
            r = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.mask = null, t.scrapteRadiusX = 25, t.scrapteRadiusY = 35, t.scrapteArea = .5, t.mabu = null, t.level_id = 0, t.pixelNum = 0, t.achieveNum = 0, t.scrapeNode = null, t.widthWide = 0, t.heightWide = 0, t.pixelPiont = null, t.isFinish = !1, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.activeMaskNode(), n.default.getInstance().add_event_listenner("mabu_move", this, this.mabu_move), n.default.getInstance().add_event_listenner("cazi_move", this, this.mabu_move), this.pixelNum = 0, this.initMaData()
                }, t.prototype.initMaData = function() {
                    this.level_id
                }, t.prototype.checkTime = function() {
                    var e = this,
                        t = function() {
                            e.checkScrape(), e.isFinish && e.unschedule(t)
                        };
                    this.schedule(t, 3)
                }, t.prototype.activeMaskNode = function() {
                    this.getinitNum()
                }, t.prototype.getinitNum = function() {
                    this.pixelNum = 0, this.achieveNum = this.scrapteArea * this.initPixel()
                }, t.prototype.initPixel = function() {
                    this.scrapeNode = this.mask.node.children[0];
                    var e = this.scrapeNode.width,
                        t = this.scrapeNode.height;
                    this.node.width = e, this.node.height = t, this.widthWide = e / 2 + 20, this.heightWide = e / 2 + 20;
                    for (var i = e / 2, n = t / 2, a = -i, s = -n, o = s, r = [], c = 2 * this.scrapteRadiusX, l = 2 * this.scrapteRadiusY; a <= i; a += c)
                        for (s = o; s <= n; s += l) {
                            var u = [a, s];
                            u.isTouch = !0, r.push(u)
                        }
                    return this.pixelPiont = r, r.length
                }, t.prototype.endScrape = function() {}, t.prototype._onTouchCancel = function(e) {
                    cc.log("TouchCancel")
                }, t.prototype.checkScrape = function() {
                    var e = this.pixelNum / this.achieveNum;
                    n.default.getInstance().dispatch_event("check_ma_finish_data", {
                        data: e,
                        level_id: this.level_id
                    }), !this.isFinish && this.achieveNum < this.pixelNum && (this.pixelNum = 0, this.isFinish = !0, this.achieveScrape())
                }, t.prototype.achieveScrape = function() {
                    var e = this;
                    this.endScrape(), this.node.runAction(cc.fadeOut(.5)), this.scheduleOnce(function() {
                        n.default.getInstance().dispatch_event("mabu_finish", {
                            data: e.level_id
                        })
                    }.bind(this), .6)
                }, t.prototype._onTouchBegin = function(e) {
                    cc.log("touchBegin"), this.comFun(e)
                }, t.prototype._onTouchMoved = function(e) {
                    var t = e.touch.getLocation();
                    t = this.node.convertToNodeSpaceAR(t), this.mabu.x = t.x, this.mabu.y = t.y - 100, this.comFun(e), this.checkScrape()
                }, t.prototype.mabu_move = function(e) {
                    this.comFun(e.data)
                }, t.prototype.comFun = function(e) {
                    var t = this.getPos(e);
                    this.checkPixelPiont(t), this._addCircle(t), this.checkScrape()
                }, t.prototype.checkPixelPiont = function(e) {
                    var t, i, n = this.pixelPiont;
                    for (var a in n)
                        if (t = Math.abs(e.x - n[a][0]), i = Math.abs(e.y - n[a][1]), t <= this.scrapteRadiusX && i <= this.scrapteRadiusY && n[a].isTouch) return n[a].isTouch = !1, void this.pixelNum++
                }, t.prototype.getPos = function(e) {
                    var t = e.touch.getLocation();
                    return t = this.node.convertToNodeSpaceAR(t)
                }, t.prototype._onTouchEnd = function(e) {
                    cc.log("touchEnd"), this.checkScrape(), this.comFun(e)
                }, t.prototype.onDestroy = function() {
                    this.endScrape()
                }, t.prototype._addCircle = function(e) {
                    var t = this.mask._graphics,
                        i = cc.color(0, 0, 0, 255);
                    t.ellipse(e.x, e.y, 2 * this.scrapteRadiusX, 2 * this.scrapteRadiusY), t.lineWidth = 2, t.fillColor = i, t.fill()
                }, t.prototype.start = function() {}, __decorate([o(cc.Mask)], t.prototype, "mask", void 0), __decorate([o(cc.Float)], t.prototype, "scrapteRadiusX", void 0), __decorate([o(cc.Float)], t.prototype, "scrapteRadiusY", void 0), __decorate([o(cc.Float)], t.prototype, "scrapteArea", void 0), __decorate([o(cc.Node)], t.prototype, "mabu", void 0), __decorate([o(cc.Float)], t.prototype, "level_id", void 0), t = __decorate([s], t)
            }(cc.Component);
        i.default = r, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr"
    }],
    http: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b32f3hyxjhJPJHcM+gXZ3YD", "http"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc._decorator,
            a = n.ccclass,
            s = (n.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.sendRequest = function(e, t, i, n) {
                    var a = cc.loader.getXMLHttpRequest();
                    a.timeout = 5e3;
                    var s = "?";
                    for (var o in t) "?" != s && (s += "&"), s += o + "=" + t[o];
                    null == n && (n = this.URL);
                    var r = n + e + encodeURI(s);
                    return console.log("RequestURL:" + r), a.open("GET", r, !0), cc.sys.isNative && a.setRequestHeader("Accept-Encoding", "gzip,deflate,text/html;charset=UTF-8"), a.onreadystatechange = function() {
                        if (4 === a.readyState && a.status >= 200 && a.status < 300) {
                            console.log("http res(" + a.responseText.length + "):" + a.responseText);
                            try {
                                var e = JSON.parse(a.responseText);
                                null !== i && i(e)
                            } catch (e) {
                                console.log("err:" + e)
                            }
                        }
                    }, a.send(), a
                }, t.sessionId = 0, t.userId = 0, t.URL = "https://rock.jsstudio.cn/rock_servers", t = __decorate([a], t)
            }(cc.Component));
        i.default = s, cc._RF.pop()
    }, {}],
    hurt_num: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "29f7f1mxuVE6JbB4cEWfmUG", "hurt_num"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc._decorator,
            a = n.ccclass,
            s = n.property,
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.hurt_num_label = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.init()
                }, t.prototype.set_hurt_num = function(e) {
                    this.hurt_num_label.string = "-" + e.toString()
                }, t.prototype.set_baoji_num = function(e) {
                    this.node.color = cc.Color.RED, this.hurt_num_label.string = "Chí mạng -" + e.toString()
                }, t.prototype.init = function() {
                    var e = this,
                        t = cc.moveTo(.3, 0, this.node.y + 100),
                        i = cc.fadeOut(1),
                        n = cc.sequence(t, i, cc.callFunc(function() {
                            e.node.parent.removeChild(e.node), e.node.destroy()
                        }));
                    this.node.runAction(n)
                }, t.prototype.start = function() {}, __decorate([s(cc.Label)], t.prototype, "hurt_num_label", void 0), t = __decorate([a], t)
            }(cc.Component);
        i.default = o, cc._RF.pop()
    }, {}],
    login: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "7b396RVjU9KDLEubOpzJgr9", "login"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../managers/event_mgr"),
            a = e("../utils/config"),
            s = e("./Rock_wx"),
            o = cc._decorator,
            r = o.ccclass,
            c = (o.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.button = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    console.log("login on load"), n.default.getInstance().add_event_listenner("userCancelLogin", this, this.userCancelLogin)
                }, t.prototype.updateManage = function() {
                    var e = this;
                    if ("function" == typeof wx.getUpdateManager) {
                        var t = wx.getUpdateManager();
                        t.onCheckForUpdate(function(t) {
                            t.hasUpdate ? wx.showModal({
                                title: "\u66f4\u65b0\u63d0\u793a",
                                content: "\u6709\u65b0\u7248\u672c\u6b63\u5728\u4e0b\u8f7d\u4e2d\uff01"
                            }) : e.login()
                        }), t.onUpdateReady(function() {
                            wx.showModal({
                                title: "\u66f4\u65b0\u63d0\u793a",
                                content: "\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5e94\u7528\uff1f",
                                showCancel: !1,
                                success: function(i) {
                                    i.confirm && (t.applyUpdate(), e.login())
                                }
                            })
                        }), t.onUpdateFailed(function() {
                            wx.showModal({
                                title: "\u66f4\u65b0\u63d0\u793a",
                                content: "\u65b0\u7248\u672c\u4e0b\u8f7d\u5931\u8d25\uff0c\u8bf7\u5220\u9664\u56fe\u6807\u91cd\u65b0\u641c\u7d22\u6216",
                                showCancel: !1,
                                success: function(e) {
                                    e.confirm && wx.exitMiniProgram()
                                }
                            })
                        })
                    } else wx.showModal({
                        title: "\u66f4\u65b0\u63d0\u793a",
                        content: "\u4e3a\u4e86\u6e38\u620f\u6b63\u5e38\u8fd0\u884c\uff0c\u5efa\u8bae\u60a8\u5148\u5347\u7ea7\u81f3\u5fae\u4fe1\u6700\u9ad8\u7248\u672c\uff01",
                        showCancel: !1,
                        success: function(e) {
                            e.confirm && wx.exitMiniProgram()
                        }
                    })
                }, t.prototype.login = function() {
                    console.log("login function");
                    var e = this;
                    wx.checkSession({
                        success: function() {
                            "123" == a.default.userData.name && (console.log("123"), e.getWxLoginCode()), wx.login({
                                success: function(e) {
                                    console.log(e);
                                    e.code
                                }
                            }), e.init()
                        },
                        fail: function() {
                            e.getWxLoginCode()
                        }
                    })
                }, t.prototype.userCancelLogin = function() {
                    console.log("button hide!@#!@#!@#@"), null != this.button ? this.button.hide() : console.log("button is null")
                }, t.prototype.getWxLoginCode = function() {
                    var e = this;
                    wx.login({
                        success: function(t) {
                            console.log(t);
                            var i = t.code;
                            console.log("code = " + i), "function" == typeof wx.createUserInfoButton ? (console.log("createUserInfoButton"), e.button = wx.createUserInfoButton({
                                type: "text",
                                text: "",
                                style: {
                                    left: 230,
                                    top: 190,
                                    width: 104,
                                    height: 310,
                                    lineHeight: 40,
                                    backgroundColor: "#",
                                    color: "#ffffff",
                                    textAlign: "center",
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            }), e.button.show(), e.button.onTap(function(t) {
                                console.log(t), t.errMsg.indexOf("auth deny") > -1 || t.errMsg.indexOf("auth denied") > -1 ? e.getWxSetting() : (a.default.userData.name = t.userInfo.nickName, console.log("user name is ", t.userInfo.nickName), a.default.userData.icon = t.userInfo.avatarUrl, console.log("user icon is ", t.userInfo.avatarUrl), s.default.save("userdata", a.default.userData), s.default.postMessage("userid", a.default.userData.name), n.default.getInstance().dispatch_event("login_success", {}), e.button.hide())
                            })) : wx.getUserInfo({
                                fail: function(t) {
                                    t.errMsg.indexOf("auth deny") > -1 || t.errMsg.indexOf("auth denied") > -1 ? e.getWxSetting() : e.init()
                                }
                            })
                        }
                    })
                }, t.prototype.getWxSetting = function() {
                    var e = this;
                    wx.getSetting({
                        success: function(t) {
                            console.log(t);
                            var i = t.authSetting;
                            !0 === i["scope.userInfo"] ? e.init() : !1 === i["scope.userInfo"] ? wx.openSetting({
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
                }, t.prototype.init = function() {
                    wx.showShareMenu({
                        withShareTicket: !0
                    }), wx.onShareAppMessage(function() {
                        return {
                            title: "\u75ab\u60c5\u8fc7\u540e\uff0c\u5927\u5bb6\u4e00\u8d77\u6765\u5403\u70e7\u70e4\u628a\uff01",
                            imageUrl: "https://jsstudio.cn/shareImages/share3.jpg"
                        }
                    });
                    var e = wx.getLaunchOptionsSync();
                    console.log("\u9996\u6b21\u5f00\u542f launchOption"), console.log(e)
                }, t = __decorate([r], t)
            }(cc.Component));
        i.default = c, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../utils/config": "config",
        "./Rock_wx": "Rock_wx"
    }],
    net: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "bf78deOE3FLpICTBNwrbaeK", "net"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../utils/http"),
            a = e("../utils/config"),
            s = e("../managers/event_mgr"),
            o = cc._decorator,
            r = o.ccclass,
            c = (o.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var i;
                return __extends(t, e), i = t, t.getOpenid = function(e) {
                    var t = this,
                        i = {
                            jsCode: e
                        };
                    n.default.sendRequest("/getOpenid", i, function(e) {
                        if (0 == e.code) {
                            var i = JSON.parse(e.data);
                            a.default.userInfo.openid = i.openid, a.default.isFirstTimeGame || t.getUserDataByOpenid()
                        } else console.log("getOpenid err")
                    }, null)
                }, t.getUserDataByOpenid = function() {
                    var e = this,
                        t = {
                            openid: a.default.userInfo.openid
                        };
                    n.default.sendRequest("/ballgetUserData", t, function(t) {
                        0 == t.code ? e.initUserData(t.rows[0]) : console.log("getUserData err")
                    }, null)
                }, t.initUserData = function(e) {
                    a.default.userInfo.nickName = e.nickname, a.default.userInfo.bestScore = e.bestscore, a.default.userInfo.money = e.money, a.default.userInfo.ballid = e.ballid, a.default.userInfo.avatar = e.avatar, a.default.userInfo.userid = e.userid, console.log("user id is ", a.default.userInfo.userid), i.saveUserDataToWX("userid", a.default.userInfo.userid), console.log(" config.userInfo.nickName" + a.default.userInfo.nickName), console.log(" config.userInfo.bestScore" + a.default.userInfo.bestScore), 0 == a.default.userInfo.bestScore ? i.postMessage("score", 0) : i.postMessage("score", a.default.userInfo.bestScore), console.log(" config.userInfo.money" + a.default.userInfo.money), console.log(" config.userInfo.ballid" + a.default.userInfo.ballid), console.log(" config.userInfo.avatar" + a.default.userInfo.avatar), s.default.getInstance().dispatch_event("userInitFinish", {
                        name: "rock",
                        age: 18
                    })
                }, t.wxShare = function() {
                    wx.shareAppMessage({
                        title: "\u75ab\u60c5\u8fc7\u540e\uff0c\u5927\u5bb6\u4e00\u8d77\u6765\u5403\u70e7\u70e4\u628a\uff01",
                        imageUrl: "https://jsstudio.cn/shareImages/share3.jpg"
                    })
                }, t.register = function(e) {
                    var t = this,
                        i = {
                            nickName: e.nickName,
                            avatarUrl: e.avatarUrl,
                            openid: a.default.userInfo.openid
                        };
                    n.default.sendRequest("/register", i, function(e) {
                        0 == e.code && t.getUserDataByOpenid(), 2 == e.code && t.initUserData(e.data), 1 == e.code && console.log("err" + e.msg)
                    }, null)
                }, t.updateBestScore = function(e) {
                    a.default.userInfo.bestScore = e;
                    var t = {
                        openid: a.default.userInfo.openid,
                        bestscore: e
                    };
                    n.default.sendRequest("/updateBestScore", t, function(e) {
                        0 == e.code ? console.log("update success") : console.log("err" + e.msg)
                    }, null)
                }, t.postMessage = function(e, t) {
                    wx.postMessage({
                        type: e,
                        value: t
                    })
                }, t.getVerion = function() {
                    console.log("getversion");
                    n.default.sendRequest("/getVersion", {
                        gamename: "babyclass"
                    }, function(e) {
                        console.log("---data is " + e.data), 0 == e.code ? (a.default.version = e.data.version, console.log("getversion success " + a.default.version)) : console.log("getVersion err")
                    }, null)
                }, t.saveUserDataToWX = function(e, t) {
                    i.postMessage("userid", t)
                }, t.share = function() {
                    wx.shareAppMessage({
                        title: "\u75ab\u60c5\u8fc7\u540e\uff0c\u5927\u5bb6\u4e00\u8d77\u6765\u5403\u70e7\u70e4\u628a\uff01",
                        imageUrl: "https://jsstudio.cn/shareImages/share3.jpg"
                    })
                }, t.updateUserInfo = function(e, t) {
                    a.default.userInfo.money = e, a.default.userInfo.ballid = t;
                    var i = {
                        openid: a.default.userInfo.openid,
                        money: e,
                        ballid: t
                    };
                    n.default.sendRequest("/ballupdateUserInfo", i, function(e) {
                        0 == e.code ? console.log("update success") : console.log("err" + e.msg)
                    }, null)
                }, t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t = i = __decorate([r], t)
            }(cc.Component));
        i.default = c, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../utils/config": "config",
        "../utils/http": "http"
    }],
    openDomain: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "0c364Doi+VIq7ZWvO6CMwsP", "openDomain"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../utils/config"),
            a = e("../managers/event_mgr"),
            s = cc._decorator,
            o = s.ccclass,
            r = s.property,
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.mask = null, t.hideBtn = null, t.display = null, t
                }
                return __extends(t, e), t.prototype.sendScore = function(e) {
                    var t = e;
                    console.log(t)
                }, t.prototype.hideRank = function() {
                    this.hideIsShow(!1), this.postMessage("hide"), a.default.getInstance().dispatch_event("closeRankUI", {
                        name: "rock",
                        age: 18
                    })
                }, t.prototype.openFriendRank = function() {
                    this.hideIsShow(!0), this.postMessage("friend")
                }, t.prototype.openCrowdRank = function(e) {
                    this.hideIsShow(!0), this.postMessage("crowd", e)
                }, t.prototype.shareAppMessage = function() {
                    wx.shareAppMessage({
                        title: "\u754c\u9762\u4e3b\u52a8\u53d1\u8d77\u5206\u4eab",
                        imageUrl: cc.url.raw("resources/1.png"),
                        query: "openid=110",
                        success: function() {
                            console.log("\u5206\u4eab\u6210\u529f")
                        },
                        fail: function() {
                            console.log("Chia sẻ thất bại")
                        }
                    })
                }, t.prototype.getUseInfo = function() {
                    wx.getUserInfo({
                        openIdList: ["selfOpenId"],
                        lang: "zh_CN",
                        success: function(e) {
                            console.log("get user info success"), console.log(e)
                        },
                        fail: function(e) {
                            console.log(e)
                        },
                        complete: function(e) {}
                    })
                }, t.prototype.getUserData = function() {
                    var e = new Array;
                    e.push("score"), e.push("coin"), wx.getUserCloudStorage({
                        keyList: e,
                        success: function(e) {
                            console.log("-----------\u83b7\u53d6\u7528\u6237\u6570\u636e\u6210\u529f------------"), console.log(e)
                        },
                        fail: function(e) {
                            console.error(e)
                        },
                        complete: function(e) {}
                    }), wx.getFriendCloudStorage({
                        keyList: e,
                        success: function(e) {
                            console.log("-----------\u83b7\u53d6\u597d\u53cb\u6570\u636e\u6210\u529f------------"), console.log(e)
                        },
                        fail: function(e) {
                            console.error(e)
                        },
                        complete: function(e) {}
                    })
                }, t.prototype.saveUserDataToWX = function() {
                    var e = new Array;
                    e.push({
                        key: "score",
                        value: "150"
                    }), e.push({
                        key: "coin",
                        value: "100000"
                    }), wx.setUserCloudStorage({
                        KVDataList: e,
                        success: function(e) {
                            console.log("-------\u5b58\u50a8\u6210\u529f-----\uff1a"), console.log(e)
                        },
                        fail: function(e) {
                            console.error(e)
                        },
                        complete: function(e) {}
                    })
                }, t.prototype.onLoad = function() {
                    console.log("openDomain load"), this.sendScore(n.default.userData.score), this.tex = new cc.Texture2D, this.hideIsShow(!1)
                }, t.prototype.postMessage = function(e, t) {
                    wx.postMessage({
                        type: e,
                        value: t
                    })
                }, t.prototype.hideIsShow = function(e) {
                    var t = this;
                    this.scheduleOnce(function() {
                        t.mask.active = e, t.hideBtn.active = e, t.display.active = e
                    }, .5)
                }, __decorate([r(cc.Node)], t.prototype, "mask", void 0), __decorate([r(cc.Node)], t.prototype, "hideBtn", void 0), __decorate([r(cc.Node)], t.prototype, "display", void 0), t = __decorate([o], t)
            }(cc.Component);
        i.default = c, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../utils/config": "config"
    }],
    piaozi: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "45b7cOGQmdN2r7Nv3wH8BDF", "piaozi"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../tools/game_tools"),
            a = cc._decorator,
            s = a.ccclass,
            o = a.property,
            r = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.content = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.setContent = function(e) {
                    this.content.string = e, this.go()
                }, t.prototype.go = function() {
                    var e = this;
                    n.default.playSound("music/reward", !1);
                    var t = cc.fadeIn(1),
                        i = cc.moveTo(.3, 0, this.node.y + 300),
                        a = cc.fadeOut(.5),
                        s = cc.callFunc(function() {
                            e.node.active = !1, e.node.parent.removeChild(e.node), e.node.destroy()
                        }),
                        o = cc.spawn(i, a),
                        r = cc.sequence(t, o, s);
                    this.node.runAction(r)
                }, t.prototype.start = function() {}, __decorate([o(cc.Label)], t.prototype, "content", void 0), t = __decorate([s], t)
            }(cc.Component);
        i.default = r, cc._RF.pop()
    }, {
        "../tools/game_tools": "game_tools"
    }],
    pifu_ctrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "770c3B2IZVDC5ZE2kZN8dxX", "pifu_ctrl"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../supers/UI_ctrl"),
            a = e("../managers/event_mgr"),
            s = e("../utils/config"),
            o = e("../tools/game_tools"),
            r = e("../tools/Rock_wx"),
            c = e("../tools/net"),
            l = cc._decorator,
            u = l.ccclass,
            h = (l.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.userUnlockPfNum = 0, t.unlock_price = 0, t.start_to_chou = !1, t.isGoing = !1, t.unlock_list = [], t.kuang_pos = {
                        k_0: {
                            x: -141.164,
                            y: 65.328
                        },
                        k_1: {
                            x: 1.34,
                            y: 65.328
                        },
                        k_2: {
                            x: 142.802,
                            y: 65.328
                        },
                        k_3: {
                            x: -140.122,
                            y: -46.663
                        },
                        k_4: {
                            x: 3.866,
                            y: -46.663
                        },
                        k_5: {
                            x: 140.276,
                            y: -46.663
                        }
                    }, t.rand_list = [0, 1, 2, 3, 4, 5], t.unlockNum = 0, t.delay = 0, t.sel_time = 0, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this._event_mgr = a.default.getInstance(), this.add_button_listen("pifublack", this, this.close_pifu), this.add_button_listen("default_pifu", this, this.default_pf_click), this.add_button_listen("huoquBtn", this, this.huoquBtn), this.add_button_listen("zsbuzu/closezsbuzu", this, this.close_zsbuzu), this.add_button_listen("zsbuzu/sharebtn", this, this.share_click), this.rand_kuang = this.view.select_sk, this.init()
                }, t.prototype.close_zsbuzu = function() {
                    this.view.zsbuzu.active = !1
                }, t.prototype.share_click = function() {
                    c.default.share(), s.default.userZs += 5, this.view.zsbuzu.active = !1, this._event_mgr.dispatch_event("updateZs", {})
                }, t.prototype.init = function() {
                    for (var e = 0; e < 6; e++) this.view["item_" + e].on(cc.Node.EventType.TOUCH_START, this.click_item, this);
                    (s.default.isFirstTimeGame = "1") && (s.default.unlock_pifu = r.default.wx_load("unlockpifudata"));
                    for (e = 0; e < o.default.getJsonLength(s.default.unlock_pifu); e++)
                        if (1 == s.default.unlock_pifu["pf_" + e]) {
                            this.unlockNum++;
                            var t = this.rand_list.indexOf(e);
                            t > -1 && this.rand_list.splice(t, 1), this.view["sk_" + e].active = !1
                        } 0 == this.unlockNum ? this.rand_kuang.active = !1 : (this.rand_kuang.active = !0, this.rand_kuang.x = this.kuang_pos["k_" + s.default.current_pifu_id].x, this.rand_kuang.y = this.kuang_pos["k_" + s.default.current_pifu_id].y), this.initPrice()
                }, t.prototype.initPrice = function() {
                    switch (this.userUnlockPfNum = s.default.user_unlock_pf_num, this.userUnlockPfNum) {
                        case 0:
                            this.unlock_price = 10;
                            break;
                        case 1:
                            this.unlock_price = 30;
                            break;
                        case 2:
                            this.unlock_price = 50;
                            break;
                        case 3:
                            this.unlock_price = 70;
                            break;
                        case 4:
                            this.unlock_price = 90;
                            break;
                        case 5:
                            this.unlock_price = 100
                    }
                    this.view["huoquBtn/zsNum"].getComponent(cc.Label).string = this.unlock_price
                }, t.prototype.click_item = function(e) {
                    var t = e.target.name;
                    console.log("name is ", t);
                    var i = t.charAt(t.length - 1);
                    s.default.current_pifu_id = i, this.rand_kuang.x = this.kuang_pos["k_" + i].x, this.rand_kuang.y = this.kuang_pos["k_" + i].y, this._event_mgr.dispatch_event("pifu_change", {
                        data: s.default.current_pifu_id
                    })
                }, t.prototype.default_pf_click = function() {
                    s.default.current_pifu_id = 0, console.log("default pf")
                }, t.prototype.huoquBtn = function() {
                    console.log("config.userZs", s.default.userZs), console.log("this.unlock_price", this.unlock_price), s.default.userZs - this.unlock_price >= 0 ? (s.default.userZs -= this.unlock_price, r.default.saveAll(), this._event_mgr.dispatch_event("updateZs", {}), this.rand_kuang.active = !0, this.isGoing || (this.start_to_chou = !0), this.isGoing = !0) : this.view.zsbuzu.active = !0
                }, t.prototype.close_pifu = function() {
                    this.isGoing || this._event_mgr.dispatch_event("close_pifu", {})
                }, t.prototype.update = function(e) {
                    if (this.start_to_chou && 0 != this.rand_list.length && 6 != this.unlockNum && (this.delay += e, this.delay > .1)) {
                        this.sel_time += 1;
                        var t = o.default.getRandomSpace(this.rand_list.length - 1);
                        this.rand_kuang.x = this.kuang_pos["k_" + this.rand_list[t]].x, this.rand_kuang.y = this.kuang_pos["k_" + this.rand_list[t]].y, this.delay = 0, 10 == this.sel_time && (this.sel_time = 0, this.start_to_chou = !1, this.isGoing = !1, this.view["sk_" + this.rand_list[t]].active = !1, s.default.current_pifu_id = this.rand_list[t], this._event_mgr.dispatch_event("pifu_change", {
                            data: s.default.current_pifu_id
                        }), r.default.wx_save("pifuid", s.default.current_pifu_id), s.default.unlock_pifu["pf_" + this.rand_list[t]] = !0, this.rand_list.length > 0 && this.rand_list.splice(t, 1), s.default.user_unlock_pf_num++, r.default.saveAll(), this.initPrice())
                    }
                }, t.prototype.start = function() {}, t = __decorate([u], t)
            }(n.default));
        i.default = h, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../supers/UI_ctrl": "UI_ctrl",
        "../tools/Rock_wx": "Rock_wx",
        "../tools/game_tools": "game_tools",
        "../tools/net": "net",
        "../utils/config": "config"
    }],
    pifu: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "0f2a2K5C2BCSo+s9BN2nw0z", "pifu"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../supers/popup"),
            a = cc._decorator,
            s = a.ccclass,
            o = (a.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var i;
                return __extends(t, e), i = t, t.getInstance = function() {
                    return null === i.Instance && (i.Instance = new i("pifu")), i.Instance
                }, t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.Instance = null, t = i = __decorate([s], t)
            }(n.default));
        i.default = o, cc._RF.pop()
    }, {
        "../supers/popup": "popup"
    }],
    plane_bullet: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "2c7d6qUA4BDlath9/rsZoe/", "plane_bullet"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../tools/game_tools"),
            a = cc._decorator,
            s = a.ccclass,
            o = (a.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isGo = !1, t.bullet_state = "go", t.speed = 3, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    var e = this;
                    this.bullet_spine = this.node.getChildByName("feiji_bullet").getComponent(sp.Skeleton), this.bullet_spine.setCompleteListener(function() {
                        "hitEnemy" == e.bullet_state && (e.node.parent.removeChild(e.node), e.node.destroy())
                    })
                }, t.prototype.onCollisionEnter = function(e, t) {
                    "enemy" == n.default.getClearNameByString(e.node.name, "_") && "fly" == this.bullet_state && (e.node.getComponent("enemy").feiji_hurt(), this.bullet_spine.setAnimation(0, "texiao", !1), this.bullet_state = "hitEnemy")
                }, t.prototype.init = function(e) {
                    var t = this;
                    switch (e) {
                        case 0:
                            this.fx = this.node.x + 300;
                            break;
                        case 1:
                            this.fx = 0;
                            break;
                        case 2:
                            this.fx = this.node.x - 300
                    }
                    var i = cc.moveTo(.4, this.fx, this.node.y - 150).easing(cc.easeOut(3)),
                        n = cc.callFunc(function() {
                            t.bullet_state = "fly"
                        }),
                        a = cc.sequence(i, n);
                    this.node.runAction(a), this.isGo = !0
                }, t.prototype.start = function() {}, t.prototype.update = function(e) {
                    this.isGo && "fly" == this.bullet_state && (this.node.y += this.speed * Math.pow(200 * e, 2))
                }, t = __decorate([s], t)
            }(cc.Component));
        i.default = o, cc._RF.pop()
    }, {
        "../tools/game_tools": "game_tools"
    }],
    plane: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "592229rBg5ILpLuA64SRyf3", "plane"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc._decorator,
            a = n.ccclass,
            s = (n.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.speed = 200, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.prototype.init = function() {
                    this.node.y = .5 * -cc.winSize.height - 100
                }, t.prototype.update = function(e) {}, t = __decorate([a], t)
            }(cc.Component));
        i.default = s, cc._RF.pop()
    }, {}],
    playerInfo: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "30c13VzjHZGZI6RQAftR0I4", "playerInfo"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = cc._decorator,
            a = n.ccclass,
            s = (n.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.player_name = "", t.player_icon = "", t.player_ball_id = 0, t.player_money = 0, t.player_openid = "", t.surpass_fans = {
                    fan_0: {
                        name: "fan_0",
                        score: "",
                        icon: ""
                    },
                    fan_1: {
                        name: "fan_1",
                        score: "",
                        icon: ""
                    },
                    fan_2: {
                        name: "fan_2",
                        score: "",
                        icon: ""
                    }
                }, t.best_score = 0, t.free_gift_time = 0, t = __decorate([a], t)
            }(cc.Component));
        i.default = s, cc._RF.pop()
    }, {}],
    popup: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "88fd8W1O71KaKxO8DzubgxU", "popup"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../managers/UI_manager"),
            a = e("../managers/res_mgr"),
            s = e("../utils/config"),
            o = function() {
                function e(e) {
                    this.pwName = e, this.ui_manager = n.default.getInstance()
                }
                return e.prototype.preload = function(e, t) {
                    a.default.getInstance().preload_res_pkg(this.res_pkg, e.bind(this), t.bind(this))
                }, e.prototype.showPopup = function() {
                    this.canvas = cc.find("Canvas"), null == this.canvas && cc.error("[game_app]: canvas is null"), this.res_pkg = s.default.pkgs[this.pwName], this.preload(this.on_process, this.on_finished)
                }, e.prototype.on_process = function(e) {}, e.prototype.on_finished = function() {
                    this.ui = this.ui_manager.add_ui_at(this.canvas, this.pwName)
                }, e.prototype.destroy = function(e) {
                    this.ui.removeFromParent(), e && a.default.getInstance().release_res_pkg(this.res_pkg)
                }, e.prototype.start = function() {}, e
            }();
        i.default = o, cc._RF.pop()
    }, {
        "../managers/UI_manager": "UI_manager",
        "../managers/res_mgr": "res_mgr",
        "../utils/config": "config"
    }],
    rank_ctrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b4c21cO1VhHeIydSE2pAao4", "rank_ctrl"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../supers/UI_ctrl"),
            a = e("../managers/event_mgr"),
            s = e("../utils/config"),
            o = e("../tools/game_tools"),
            r = e("../tools/login"),
            c = cc._decorator,
            l = c.ccclass,
            u = (c.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.display = null, t.item_prefab = null, t.OPT_HEIGHT = 70, t.PAGE_NUM = 8, t.scroll_view = null, t.myScore = null, t.list = [], t.value_set = [], t.content = null, t.opt_item_set = [], t.start_y = 0, t.start_index = 0, t.levelImage = null, t.levelText = null, t.icon = null, t.nameText = null, t.score = null, t.isBtnClick = !1, t.test_arr = [{
                        nickname: "Ivan Li",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/phFWsffht9f8VwO1bOqrCzVofySoz3XIHrr6TLfgS5aRJeg3CN21YpX4ta3ZUEOCibLYrefgKy6s120NkKnFsbA/132",
                        score: "521"
                    }, {
                        nickname: "WaiHo",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Dibzf3Y3Ac8VFOMaX2q1PkuhE8y1dmTHT0wdtkbnPic0ofDVdXse5QqkNzvx0p8CicMl16mic91FuziaYEpHS8uSmQg/132",
                        score: "431"
                    }, {
                        nickname: "\u6587\u6b66\u4ed4",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLGibDGxtdFAawK9rXCj2GcfL5gFqXGibsX82CU2SZzJCuwlgSwxkwupicGKJVu5EwvnWdYzT4wib7shA/132",
                        score: "232"
                    }, {
                        nickname: "@\u5575\u6ce2",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/gUOB9Wm86VehyiammHScQNwPXicjySTnnSVDxp37Bjfh8uYeGb0Zicah5sx2XDzb97QvafLjFjxicSb17hRunsWCOQ/132",
                        score: "312"
                    }, {
                        nickname: "\u7231\u7684\u8a93\u8a00",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLtlia9uCM0Vr7Xw2LqzX0x5cN9KIKKDhVNNFdiajhqSExPfUCjU7yCms23dEExf7bReZ5Oht7awbmQ/132",
                        score: "522"
                    }, {
                        nickname: "\u5f69\u4e07\u798f\u901a\u7528\u5305\u88c5",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK6YJfOQFCQ6ZhDnstG7TGyBicXhj3mcedMeibYyXAJQoaicNsLPnsXcxh26z7mLcO2EWlZY2xO6y4hw/132",
                        score: "323"
                    }, {
                        nickname: "\u963f\u767d",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/jDJtqQ2MVRTTvdic75jmjok4Oehe7mHgyGHMGAiaibtuZOGQicB7YFqXNPEUCVZ4MemP5ROqzyYnlIhjic1w8q0x0Lw/132",
                        score: "322"
                    }, {
                        nickname: "\u5927\u7070\u72fc",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/VqvOaHcbyUv9RvUrgNB0dJXeXEIHKibbpHmAUhVsvJjrybVjVjmbGfWFJPfQySXk0W4bzTV9F9QqvGF5kRWJGwg/132",
                        score: "232"
                    }, {
                        nickname: "\u80e1\u6da6\u7532",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/9A1GRhjFcicWOwjE8BWewmnqIicqMg5s6wxjjVuaKScUzmia7od2LdAC6bs58deJibWRIMDovZl8icm0A3xSVhptu5w/132",
                        score: "432"
                    }, {
                        nickname: "\u6ca1\u6709\u516d\u5757\u8179\u808c\u4e0d\u6539\u540d\u5b57",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRTjdSBQbPdSA3thG2coiaFia21mmSuOWSV10vc5j5jD8UYZljEpDk4DxIp5V7vnQbuiaU1Bibv3xthg/132",
                        score: "433"
                    }, {
                        nickname: "\u6d77\u9614\u5929\u7a7a",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eotgVibRQoPnPicAWawlRRicIxA60jic55W0ptdbxqZDpmFZ9Rf5oggIPVxAibkHql2YwJagHEnFHV89Cw/132",
                        score: "333"
                    }, {
                        nickname: "Tony",
                        avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM67Cef0a71Biafibicre8VjHh4AYGXLxXayicGSeqNgmHgInibcTVRB6qic1hYvEJzOJ0QSDDB7ALA1DDyw/132",
                        score: "453"
                    }, {
                        nickname: "\u6ce1\u6ce1\u8dd1",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/eL07icQYAzbhOAMOdNZd8NxYlcNuqbzNY5Cjf38SMMbJurnuT6tiaicZ0KDXwHSmXic8MB5lq3YB2ibsDxljhdUSYkQ/132",
                        score: "535"
                    }, {
                        nickname: "\u5c0f\u8001\u864e",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJhnQU5GWxeXDPjyqbhBGDPMKbzTNdicNrg8JqnLXzHmXEdrNbhrPtKSFYoZQyqDpuy7c9OvDhu5NQ/132",
                        score: "656"
                    }, {
                        nickname: "\u54c1",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/XuAYswwfiaeECUm1e6mSicypD83Cgts8OOQPJHSkicS2LpFnBgPuWZYiaNVqWAgrG6yfFDv4v8UYAY1vobqZxH4l2w/132",
                        score: "564"
                    }, {
                        nickname: "MYST98",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/TZLwRbxkNQ5P4t8wBQghbPurbUlL4jsmXCDX1KcHlyjx1m4Ek7F5Nzg11Izfp0TiaheAzDj6a71Fz2gBpNPrOIA/132",
                        score: "563"
                    }, {
                        nickname: "\u8001\u5218",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJLakcbcJFjIMicEI6XSIaibb3f1nleEsvPMh8Da10cW2ug6c9qeXjibHjspBnL3qD0tuiblWg1OUiajMA/132",
                        score: "463"
                    }, {
                        nickname: "\u98ce",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/3UDXfP5CibgQLaozyaJjtF4SIZj7icTWVCr7HYOZP7sQo1oZVd3pVdDhN5iceUNnib7p5yAreAblVXic6Dv2RJSmqLA/132",
                        score: "345"
                    }, {
                        nickname: "\u4f55\u7d20\u679d",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/eOZ03NN371ibUSulDic5BiaZCtYLWAUibEFLTf5VBKyBpxy5uOEnCpwPEzP53iclFNcp6luPictfaXJJzLCrniaBR0goQ/132",
                        score: "334"
                    }, {
                        nickname: "\u897f\u4eac\u533b\u9662\u5c31\u533b\u670d\u52a118840292966",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL5XIlM0TbGluVwsl3ibxGficLcWRIZwVXicz4W17Yle0WKWI8etTxV0dQPjUvuBbicItziaM6pluFDuicw/132",
                        score: "321"
                    }, {
                        nickname: "\u5a1f",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/q6CRibnQh1fzsS5YHDpJPbKyWs0BY0ibK8thUk7qvCaNiccibwibA9s6o9puSYzRibziaD9R1j4JibibZmGvEJlCdpDZ7TA/132",
                        score: "433"
                    }, {
                        nickname: "\u597d\u96be\u5fcd",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83erdFr4CAEyhQ9UbmEVxZAlp9ZIrGher47bw9dNCM4fIgDduKOvYlFxUsBU57biaNXjjpaMsLjSOTHA/132",
                        score: "346"
                    }, {
                        nickname: "\u9648\u5c0f\u660e",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/rnRAAbEuHA7QoCwk2ajRNgtvqCQWib7K42KvagZrJraKmj5cYNibH79bzZibib7hKqur8GICNJdQR3LGkXzJD0ZMsw/132",
                        score: "237"
                    }, {
                        nickname: "\u77e5\u97f3",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKgvk7CWmVaAjESRmZHCDms1skfhtaP0uAVfx9sQtXqG0nNpK6B0bHs4Bibynd1R4rXCXRzfR9Docw/132",
                        score: "334"
                    }, {
                        nickname: "\u57f7\u5ff5",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/RC0ciatfmOOtAgx6F7rKsmWwsaVb3bZaLXRWsTs3Yc4cJiaeFiaMCAstbzf65RIoTDqXNg3sLtcbicXjA6jHy6n2ibA/132",
                        score: "533"
                    }, {
                        nickname: "\u98ce",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJFKT75xAVf7ZH0McFegWrfaLpYFAVDNM9RGn2Mq3eddNcgzkxRdE9gMHiaFzZjC8pPJGAqOo2YWnA/132",
                        score: "543"
                    }, {
                        nickname: "rdgztest_FMLHCI",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Gh0lmpj20sPMHdRZV0E2zVbVxpVd1KZM3ZUWysGic4qcbKz1g6ZEONsqEHbPjibQvnH5p353sSC7dyulGbF32G4A/132",
                        score: "233"
                    }, {
                        nickname: "\u5609\u65cb",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q6aMLUOT5K0cFtvMILZL4JeCqsIqVibv0RibY9jAqt2nsQiaCx0ictlfoHkibDLo3Hy2nBVWZmBcT89ro1IfUrFbf8w/132",
                        score: "433"
                    }, {
                        nickname: "minigamecheck44",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/d4VebrTclUwVWNGRS9RJV3Da584uxfrreSKSpPGBibicLoevb3qLC2KkOkZC9ChMDWybkAQTXoOx4NicNlafFyStg/132",
                        score: "633"
                    }, {
                        nickname: "E-va",
                        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/glMH9jUOFS9csZzDtlZtxv1zyY5hnJNdEdHpIr5j1E8hIDzMmCmXQFxNqZAADiagfuXuBWwWektZuMuULnibUvDA/132",
                        score: "433"
                    }], t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    var t = this;
                    e.prototype.onLoad.call(this), this._event_mgr = a.default.getInstance(), this._event_mgr.add_event_listenner("login_success", this, this.showRank), this.add_button_listen("rankblackbg", this, this.close_rank), this.add_button_listen("loginTips/cancelBtn", this, this.close_rank), this.content = this.view["rankList/view/content"], this.scroll_view = this.view.rankList.getComponent(cc.ScrollView), this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this), this.list = this.test_arr.sort(this.rock_compare("score")), this.opt_item_set = [], o.default.getPrefab("prefabs/rankItem", function(e) {
                        for (var i = 0; i < 3 * t.PAGE_NUM; i++) {
                            var n = cc.instantiate(e);
                            t.content.addChild(n), t.opt_item_set.push(n)
                        }
                        t.item_prefab = e, t.start_y = t.content.y, t.start_index = 0, t.load_record(t.start_index)
                    }), this.value_set = this.list, this.checkFirstOpen()
                }, t.prototype.initLogin = function() {
                    console.log("init login"), this.login = new r.default, this.login.updateManage(), this.view.loginTips.active = !0, this.view.myscore.active = !1, this.view.rankList.active = !1, this.view.ranktitle.active = !1, this.view.bgcommon.active = !1
                }, t.prototype.checkFirstOpen = function() {
                    "" == wx.getStorageSync("userInfo") ? this.initLogin() : this.showRank()
                }, t.prototype.showRank = function() {
                    this.view.loginTips.active = !1, this.view.myscore.active = !0, this.view.rankList.active = !0, this.view.ranktitle.active = !0, this.view.bgcommon.active = !0, this.initUserData()
                }, t.prototype.start = function() {}, t.prototype.initUserData = function() {
                    s.default.userInfo = wx.getStorageSync("userInfo"), s.default.userScore = wx.getStorageSync("score"), console.log("userInfo is ", s.default.userInfo), console.log("user score is ", s.default.userScore), this.view["myscore/userName"].getComponent(cc.Label).string = s.default.userInfo.nickName, this.view["myscore/rankNum"].getComponent(cc.Label).string = "40", this.view["myscore/userScore"].getComponent(cc.Label).string = "Đầu tiên" + s.default.userScore + "hạ";
                    var e = this.view["myscore/userIcon"].getComponent(cc.Sprite);
                    this.createImage(e, s.default.userInfo.avatarUrl)
                }, t.prototype.close_rank = function() {
                    var e = this;
                    this.isBtnClick || (this._event_mgr.dispatch_event("close_rank", {}), this.isBtnClick = !0, this.scheduleOnce(function() {
                        e.isBtnClick = !1
                    }, 1))
                }, t.prototype.on_scroll_ended = function() {
                    this.scrollveiw_load_recode(), this.scroll_view.elastic = !0
                }, t.prototype.load_record = function(e) {
                    this.start_index = e;
                    for (var t = 0; t < 3 * this.PAGE_NUM; t++) this.setData(this.opt_item_set[t].getChildByName("userInfo"), this.list[t], e + t + 1, t)
                }, t.prototype.setData = function(e, t, i, n) {
                    var a = e.getChildByName("levelImage"),
                        s = e.getChildByName("userIcon").getComponent(cc.Sprite);
                    a.active = i <= 3, 1 == i && (e.getChildByName("listBg_1").active = !0, e.getChildByName("listBg_0").active = !1, e.getChildByName("listBg_2").active = !1, e.getChildByName("listBg_3").active = !1, a.getChildByName("no3").active = !1, a.getChildByName("no2").active = !1), 2 == i && (e.getChildByName("listBg_2").active = !0, e.getChildByName("listBg_0").active = !1, e.getChildByName("listBg_1").active = !1, e.getChildByName("listBg_3").active = !1, a.getChildByName("no1").active = !1, a.getChildByName("no3").active = !1), 3 == i && (e.getChildByName("listBg_3").active = !0, e.getChildByName("listBg_0").active = !1, e.getChildByName("listBg_1").active = !1, e.getChildByName("listBg_2").active = !1, a.getChildByName("no2").active = !1, a.getChildByName("no1").active = !1);
                    var o = e.getChildByName("userName"),
                        r = e.getChildByName("score"),
                        c = e.getChildByName("levelText"),
                        l = t.nickname.substr(0, 4);
                    o.getComponent(cc.Label).string = l, r.getComponent(cc.Label).string = "Đầu tiên" + t.score + "hạ gục", c.getComponent("cc.RichText").string = "<i>" + (this.start_index + n + 1) + "</i>", this.createImage(s, t.avatarUrl)
                }, t.prototype.scrollveiw_load_recode = function() {
                    if (this.start_index + 3 * this.PAGE_NUM < this.value_set.length && this.content.y >= this.start_y + 2 * this.PAGE_NUM * this.OPT_HEIGHT) {
                        if (console.log("\u5f80\u4e0b\u52a0\u8f7d "), this.scroll_view.isAutoScrolling()) return void(this.scroll_view.elastic = !1);
                        var e = this.PAGE_NUM;
                        if (this.start_index += e, this.start_index + 3 * this.PAGE_NUM > this.value_set.length) {
                            var t = this.start_index + 3 * this.PAGE_NUM - this.value_set.length;
                            e -= t, this.start_index -= t
                        }
                        return this.load_record(this.start_index), void(this.content.y -= e * this.OPT_HEIGHT)
                    }
                    if (this.start_index > 0 && this.content.y <= this.start_y) {
                        if (this.scroll_view.isAutoScrolling()) return void(this.scroll_view.elastic = !1);
                        var i = this.PAGE_NUM;
                        this.start_index -= i, this.start_index < 0 && (i += this.start_index, this.start_index = 0), this.load_record(this.start_index), this.content.y += i * this.OPT_HEIGHT
                    }
                }, t.prototype.update = function(e) {
                    this.scrollveiw_load_recode()
                }, t.prototype.setMyData = function(e, t) {
                    this.levelText.getComponent("cc.RichText").string = "<i>" + (t + 1) + "</i>";
                    var i = 0;
                    e.KVDataList && e.KVDataList.length > 0 && (i = e.KVDataList[0].value), this.score.getComponent(cc.Label).string = i.toString(), this.createImage(this.icon, e.avatarUrl), this.nameText.getComponent("cc.RichText").string = e.nickname.substring(0, 10)
                }, t.prototype.createImage = function(e, t) {
                    var i = wx.createImage();
                    i.onload = function() {
                        var t = new cc.Texture2D;
                        t.initWithElement(i), t.handleLoadedTexture(), e.spriteFrame = new cc.SpriteFrame(t)
                    }, i.src = t
                }, t.prototype.rock_compare = function(e) {
                    return function(t, i) {
                        var n = 0;
                        t[e].length > 0 && (n = t[e]);
                        var a = 0;
                        return i[e].length > 0 && (a = i[e]), isNaN(Number(n)) || isNaN(Number(a)) || (n = Number(n), a = Number(a)), n < a ? 1 : n > a ? -1 : 0
                    }
                }, t.prototype.compare = function(e) {
                    return function(t, i) {
                        var n = 0;
                        t[e].length > 0 && (n = t[e][0].value);
                        var a = 0;
                        return i[e].length > 0 && (a = i[e][0].value), isNaN(Number(n)) || isNaN(Number(a)) || (n = Number(n), a = Number(a)), n < a ? 1 : n > a ? -1 : 0
                    }
                }, t = __decorate([l], t)
            }(n.default));
        i.default = u, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../supers/UI_ctrl": "UI_ctrl",
        "../tools/game_tools": "game_tools",
        "../tools/login": "login",
        "../utils/config": "config"
    }],
    rank: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "537a4y2WZVChLrI2qrwvEtj", "rank"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../supers/popup"),
            a = cc._decorator,
            s = a.ccclass,
            o = (a.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var i;
                return __extends(t, e), i = t, t.getInstance = function() {
                    return null === i.Instance && (i.Instance = new i("rank")), i.Instance
                }, t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.Instance = null, t = i = __decorate([s], t)
            }(n.default));
        i.default = o, cc._RF.pop()
    }, {
        "../supers/popup": "popup"
    }],
    res_mgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "31e568X70JDKp2SuJr5PMuu", "res_mgr"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../managers/event_mgr"),
            a = cc._decorator,
            s = a.ccclass,
            o = a.property,
            r = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.lancher_prefabs = [], t.lancher_sprite_frames = [], t.lancher_audio_clips = [], t.lancher_sprite_atlases = [], t.now_loaded = 0, t.total_num = 0, t
                }
                var i;
                return __extends(t, e), i = t, t.getInstance = function() {
                    return null === i.Instance && (i.Instance = new i), i.Instance
                }, t.prototype.preload_res_pkg = function(e, t, i) {
                    this.now_loaded = 0, this.total_num = 0;
                    var a = null;
                    for (a in e) this.total_num += e[a].length;
                    if (0 !== this.total_num) {
                        var s = this;
                        for (a in e)
                            for (var o = 0; o < e[a].length; o++) {
                                var r = e[a][o];
                                cc.loader.loadRes(r, function(e, a) {
                                    e && cc.error("[res_mgr]", e), s.now_loaded++, t && t(s.now_loaded / s.total_num), s.now_loaded >= s.total_num && i && (n.default.Instance.dispatch_event("loading_on_finished", {
                                        name: "rock",
                                        age: 18
                                    }), i())
                                })
                            }
                    } else i && i()
                }, t.prototype.release_res_pkg = function(e) {
                    if (e.sprite_frames && e.sprite_frames.length > 0 && cc.loader.release(e.sprite_frames), e.audio_clips && e.audio_clips.length > 0 && cc.loader.release(e.audio_clips), e.sprite_atlases && e.sprite_atlases.length > 0 && cc.loader.release(e.sprite_atlases), e.prefabs && e.prefabs.length > 0)
                        for (var t = 0; t < e.prefabs.length; t++) {
                            var i = e.prefabs[t],
                                n = cc.loader.getDependsRecursively(i);
                            cc.loader.release(n), cc.loader.release(i)
                        }
                }, t.prototype.get_res = function(e) {
                    return cc.loader.getRes(e)
                }, t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.Instance = null, __decorate([o([cc.Prefab])], t.prototype, "lancher_prefabs", void 0), __decorate([o([cc.SpriteFrame])], t.prototype, "lancher_sprite_frames", void 0), __decorate([o({
                    type: [cc.AudioClip],
                    displayName: "lancher_audio_clips"
                })], t.prototype, "lancher_audio_clips", void 0), __decorate([o([cc.SpriteAtlas])], t.prototype, "lancher_sprite_atlases", void 0), t = i = __decorate([s], t)
            }(cc.Component);
        i.default = r, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr"
    }],
    reward_window: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "58686YGfB9GHpznzAbEsAl4", "reward_window"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../tools/game_tools"),
            a = e("../utils/config"),
            s = e("../managers/event_mgr"),
            o = e("../tools/Rock_wx"),
            r = cc._decorator,
            c = r.ccclass,
            l = r.property,
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.left_icon = null, t.right_icon = null, t.left_btn = null, t.right_btn = null, t.left_title = null, t.right_title = null, t.player_choose_str = "", t.left_player_choose = "", t.right_player_choose = "", t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.setReward(), s.default.getInstance().add_event_listenner("share_success", this, this.share_success)
                }, t.prototype.onDisable = function() {
                    s.default.getInstance().remove_event_listenner("share_success", this, this.share_success)
                }, t.prototype.left_btn_click = function() {
                    switch (console.log("dob_left_get this.player_choose is" + this.left_player_choose), this.left_player_choose) {
                        case "feijix3":
                            this.player_choose_str = "Nhận x3 máy bay";
                            break;
                        case "zhadanx2":
                            this.player_choose_str = "Nhận x2 bom"
                    }
                    console.log("left_btn_click"), this.show_dob_get_window()
                }, t.prototype.show_dob_get_window = function() {
                    n.default.show_double_window(this.node, "Chúc mừng", this.player_choose_str)
                }, t.prototype.right_btn_click = function() {
                    a.default.share_id = 9, o.default.share()
                }, t.prototype.share_success = function(e) {
                    var t = e.share_id;
                    if (-1 != t) {
                        if (9 == t) {
                            switch (console.log("right_btn_click"), this.right_player_choose) {
                                case "shuangbei_hurt":
                                    this.player_choose_str = "\u83b7\u5f97\u672c\u5173\u5361\u53cc\u500d\u4f24\u5bb3";
                                    break;
                                case "jinbix500":
                                    this.player_choose_str = "Nhận xu X500"
                            }
                            s.default.getInstance().dispatch_event("player_get_reward", {
                                player_choose: this.right_player_choose,
                                choose_str: this.player_choose_str
                            }), this.close_window()
                        }
                        if (10 == t) {
                            switch (console.log("this.left_player_choose is", this.left_player_choose), this.left_player_choose) {
                                case "feijix3":
                                    this.player_choose_str = "\u83b7\u5f97\u98de\u673ax6", this.left_player_choose = "feijix6";
                                    break;
                                case "zhadanx2":
                                    this.player_choose_str = "\u83b7\u5f97\u70b8\u5f39x4", this.left_player_choose = "zhadanx4"
                            }
                            s.default.getInstance().dispatch_event("player_get_reward", {
                                player_choose: this.left_player_choose,
                                choose_str: this.player_choose_str
                            }), this.close_window()
                        }
                        a.default.share_id = 0, a.default.isShareing = !1
                    } else n.default.showPiaozi("Hết quảng cáo")
                }, t.prototype.close_window = function() {
                    console.log("back_ground_click"), a.default.isRewardWindowShow = !1, this.node.parent.removeChild(this.node), a.default.GAME_STATE = a.default.GAME_PLAYING, this.node.destroy()
                }, t.prototype.back_ground_click = function() {}, t.prototype.setReward = function() {
                    var e = n.default.getRandomSpace(1),
                        t = n.default.getRandomSpace(1);
                    switch (e) {
                        case 0:
                            this.left_icon.setAnimation(0, "item_0", !0), this.left_title.string = "Nhận x3 máy bay", this.left_player_choose = "feijix3";
                            break;
                        case 1:
                            this.left_icon.setAnimation(0, "item_3", !0), this.left_title.string = "Nhận x2 bom", this.left_player_choose = "zhadanx2"
                    }
                    switch (t) {
                        case 0:
                            this.right_icon.setAnimation(0, "item_1", !0), this.right_title.string = "x2 sát thương", this.right_player_choose = "shuangbei_hurt";
                            break;
                        case 1:
                            this.right_icon.setAnimation(0, "item_2", !0), this.right_title.string = "500 xu", this.right_player_choose = "jinbix500"
                    }
                }, t.prototype.dob_left_get = function() {
                    a.default.share_id = 10, o.default.share()
                }, t.prototype.left_get = function() {
                    switch (console.log("left_get"), this.left_player_choose) {
                        case "feijix3":
                            this.player_choose_str = "Nhận x3 máy bay";
                            break;
                        case "zhadanx2":
                            this.player_choose_str = "Nhận x2 bom"
                    }
                    s.default.getInstance().dispatch_event("player_get_reward", {
                        player_choose: this.left_player_choose,
                        choose_str: this.player_choose_str
                    }), this.close_window()
                }, t.prototype.start = function() {}, __decorate([l(sp.Skeleton)], t.prototype, "left_icon", void 0), __decorate([l(sp.Skeleton)], t.prototype, "right_icon", void 0), __decorate([l(cc.Button)], t.prototype, "left_btn", void 0), __decorate([l(cc.Button)], t.prototype, "right_btn", void 0), __decorate([l(cc.Label)], t.prototype, "left_title", void 0), __decorate([l(cc.Label)], t.prototype, "right_title", void 0), t = __decorate([c], t)
            }(cc.Component);
        i.default = u, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../tools/Rock_wx": "Rock_wx",
        "../tools/game_tools": "game_tools",
        "../utils/config": "config"
    }],
    scene: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ea0feewmzVL1b8q9VpdZYMC", "scene"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../managers/res_mgr"),
            a = e("../managers/UI_manager"),
            s = e("../utils/config"),
            o = function() {
                function e(e) {
                    this.sceneName = e, this.ui_manager = a.default.getInstance()
                }
                return e.prototype.preload = function(e, t) {
                    n.default.getInstance().preload_res_pkg(this.res_pkg, e.bind(this), t.bind(this))
                }, e.prototype.enter = function() {
                    this.canvas = cc.find("Canvas"), null == this.canvas && cc.error("[game_app]: canvas is null"), this.res_pkg = s.default.pkgs[this.sceneName], this.preload(this.on_process, this.on_finished)
                }, e.prototype.show_ui = function() {
                    this.ui_manager.add_ui_at(this.canvas, this.sceneName)
                }, e.prototype.on_process = function(e) {}, e.prototype.on_finished = function() {
                    this.ui = this.ui_manager.add_ui_at(this.canvas, this.sceneName)
                }, e.prototype.destroy = function(e) {
                    this.ui.removeFromParent(), e && (console.log("scene destroy"), n.default.getInstance().release_res_pkg(this.res_pkg))
                }, e
            }();
        i.default = o, cc._RF.pop()
    }, {
        "../managers/UI_manager": "UI_manager",
        "../managers/res_mgr": "res_mgr",
        "../utils/config": "config"
    }],
    setting_ctrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "4f69ag/HTJDwKQrAb+EhTnF", "setting_ctrl"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../supers/UI_ctrl"),
            a = e("../managers/event_mgr"),
            s = e("../utils/config"),
            o = cc._decorator,
            r = o.ccclass,
            c = (o.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    e.prototype.onLoad.call(this), this._event_mgr = a.default.getInstance(), this.add_button_listen("settingbg", this, this.close_setting), this.add_button_listen("sound_control/on", this, this.sound_on_click), this.add_button_listen("sound_control/off", this, this.sound_off_click), this.add_button_listen("zhendong_control/on", this, this.zhendong_on_click), this.add_button_listen("zhendong_control/off", this, this.zhendong_off_click)
                }, t.prototype.sound_on_click = function() {
                    this.view["sound_control/on"].active = !1, this.view["sound_control/off"].active = !0, s.default.isSoundOn = !1
                }, t.prototype.sound_off_click = function() {
                    this.view["sound_control/off"].active = !1, this.view["sound_control/on"].active = !0, s.default.isSoundOn = !0
                }, t.prototype.zhendong_on_click = function() {
                    this.view["zhendong_control/on"].active = !1, this.view["zhendong_control/off"].active = !0, s.default.isZhenDongOn = !1
                }, t.prototype.zhendong_off_click = function() {
                    this.view["zhendong_control/on"].active = !0, this.view["zhendong_control/off"].active = !1, s.default.isZhenDongOn = !0
                }, t.prototype.close_setting = function() {
                    this._event_mgr.dispatch_event("close_setting", {})
                }, t.prototype.on_start_click = function() {}, t.prototype.start = function() {}, t = __decorate([r], t)
            }(n.default));
        i.default = c, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../supers/UI_ctrl": "UI_ctrl",
        "../utils/config": "config"
    }],
    setting: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "aabferlp8BF1Iw56KKSiFLH", "setting"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../supers/popup"),
            a = cc._decorator,
            s = a.ccclass,
            o = (a.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                var i;
                return __extends(t, e), i = t, t.getInstance = function() {
                    return null === i.Instance && (i.Instance = new i("setting")), i.Instance
                }, t.prototype.onLoad = function() {}, t.prototype.start = function() {}, t.Instance = null, t = i = __decorate([s], t)
            }(n.default));
        i.default = o, cc._RF.pop()
    }, {
        "../supers/popup": "popup"
    }],
    showGetRewardAlert: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "88a90x7t0VBq4BFCHse3gfd", "showGetRewardAlert"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../utils/config"),
            a = e("../tools/Rock_wx"),
            s = cc._decorator,
            o = s.ccclass,
            r = s.property,
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.title = null, t.content = null, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {}, t.prototype.init = function() {}, t.prototype.setInfo = function(e, t, i) {
                    n.default.share_id = i, this.title.string = e, this.content.string = t
                }, t.prototype.shareBtnClick = function() {
                    a.default.share(), n.default.isShowingAlert = !1
                }, t.prototype.vedioBtnClick = function() {}, t.prototype.remove = function() {
                    n.default.isShareing = !1, console.log("remove"), n.default.GAME_STATE == n.default.GAME_PAUSE && (n.default.GAME_STATE = n.default.GAME_PLAYING), n.default.isShowingAlert = !1, null != this.node && (this.node.parent.removeChild(this.node), this.node.destroy())
                }, __decorate([r(cc.Label)], t.prototype, "title", void 0), __decorate([r(cc.Label)], t.prototype, "content", void 0), t = __decorate([o], t)
            }(cc.Component);
        i.default = c, cc._RF.pop()
    }, {
        "../tools/Rock_wx": "Rock_wx",
        "../utils/config": "config"
    }],
    sign: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "08b00BRdTFFqqjxmK5p7sRu", "sign"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../utils/config"),
            a = e("../tools/game_tools"),
            s = e("../tools/Rock_wx"),
            o = e("../managers/event_mgr"),
            r = cc._decorator,
            c = r.ccclass,
            l = (r.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isSbBtnClick = !1, t.user_login_time = 0, t.user_today_have_login = !1, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.init()
                }, t.prototype.init = function() {
                    n.default.GAME_STATE == n.default.GAME_PLAYING && (n.default.GAME_STATE = n.default.GAME_PAUSE), o.default.getInstance().add_event_listenner("share_success", this, this.share_success), this.user_login_time = n.default.userData.login_time, this.user_today_have_login = n.default.userData.user_today_have_login, this.dagous = this.node.getChildByName("dagous");
                    for (var e = 1; e <= this.user_login_time; e++) console.log("index is ", e), this.dagous.getChildByName("dagou_" + e).active = !0
                }, t.prototype.start = function() {}, t.prototype.dbBtnClick = function() {
                    if (1 != this.user_today_have_login) {
                        switch (this.user_login_time += 1, console.log("this.user_login_time is", this.user_login_time), n.default.userData.login_time = this.user_login_time, this.user_login_time < 8 && (this.dagous.getChildByName("dagou_" + this.user_login_time).active = !0, this.dagous.getChildByName("dagou_" + this.user_login_time).getComponent(cc.Animation).play("dagou")), this.user_login_time) {
                            case 1:
                                n.default.userData.jinbi += 300;
                                break;
                            case 2:
                                n.default.userData.tili += 3;
                                break;
                            case 3:
                                n.default.userData.feiji += 2;
                                break;
                            case 4:
                                n.default.userData.tili += 2, n.default.userData.feiji += 1, n.default.userData.jinbi += 200;
                                break;
                            case 5:
                                n.default.userData.jinbi += 600;
                                break;
                            case 6:
                                n.default.userData.tili += 5;
                                break;
                            case 7:
                                n.default.userData.tili += 3, n.default.userData.feiji += 1, n.default.userData.zhadan += 1, n.default.userData.jinbi += 800;
                                break;
                            case 8:
                                for (var e = 1; e <= this.user_login_time - 1; e++) console.log("index is ", e), this.dagous.getChildByName("dagou_" + e).active = !1;
                                n.default.userData.login_time = 0, this.user_login_time = n.default.userData.login_time, n.default.userData.jinbi += 300
                        }
                        n.default.need_to_sign = !1, a.default.showPiaozi("Nhận thành công"), n.default.userData.user_today_have_login = !0, this.user_today_have_login = n.default.userData.user_today_have_login, s.default.save("userdata", n.default.userData)
                    } else a.default.showPiaozi("Đã nhận ngày hôm nay")
                }, t.prototype.share_success = function(e) {
                    console.log("share success data is", e), console.log("share success and share id is", n.default.share_id);
                    var t = e.share_id;
                    if (-1 != t) {
                        if (3 == t) {
                            switch (this.user_login_time += 1, console.log("this.user_login_time is", this.user_login_time), n.default.userData.login_time = this.user_login_time, this.user_login_time < 8 && (this.dagous.getChildByName("dagou_" + this.user_login_time).active = !0, this.dagous.getChildByName("dagou_" + this.user_login_time).getComponent(cc.Animation).play("dagou")), this.user_login_time) {
                                case 1:
                                    n.default.userData.jinbi += 600;
                                    break;
                                case 2:
                                    n.default.userData.tili += 6;
                                    break;
                                case 3:
                                    n.default.userData.feiji += 4;
                                    break;
                                case 4:
                                    n.default.userData.tili += 4, n.default.userData.feiji += 2, n.default.userData.jinbi += 400;
                                    break;
                                case 5:
                                    n.default.userData.jinbi += 1200;
                                    break;
                                case 6:
                                    n.default.userData.tili += 10;
                                    break;
                                case 7:
                                    n.default.userData.tili += 6, n.default.userData.feiji += 2, n.default.userData.zhadan += 2, n.default.userData.jinbi += 1600;
                                    break;
                                case 8:
                                    for (var i = 1; i <= this.user_login_time - 1; i++) console.log("index is ", i), this.dagous.getChildByName("dagou_" + i).active = !1;
                                    n.default.userData.login_time = 0, this.user_login_time = n.default.userData.login_time, n.default.userData.jinbi += 300
                            }
                            n.default.share_id = 0, n.default.isShareing = !1, n.default.need_to_sign = !1, a.default.showPiaozi("Nhận thành công"), n.default.userData.user_today_have_login = !0, this.user_today_have_login = n.default.userData.user_today_have_login, s.default.save("userdata", n.default.userData)
                        }
                    } else a.default.showPiaozi("Hết quảng cáo")
                }, t.prototype.sbBtnClick = function() {
                    1 != this.user_today_have_login ? (n.default.share_id = 3, s.default.share()) : a.default.showPiaozi("Đã nhận ngày hôm nay")
                }, t.prototype.close = function() {
                    n.default.GAME_STATE == n.default.GAME_PAUSE && (n.default.GAME_STATE = n.default.GAME_PLAYING), this.node.active = !1, this.node.parent.removeChild(this.node), this.node.destroy()
                }, t = __decorate([c], t)
            }(cc.Component));
        i.default = l, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../tools/Rock_wx": "Rock_wx",
        "../tools/game_tools": "game_tools",
        "../utils/config": "config"
    }],
    teach: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b6af8ca6XBCyL2Y0APuMG8e", "teach"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../managers/event_mgr"),
            a = e("../tools/game_tools"),
            s = e("../utils/config"),
            o = e("../tools/Rock_wx"),
            r = cc._decorator,
            c = r.ccclass,
            l = r.property,
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.teach_wz = null, t.teach_id = 0, t.stepTotil = 0, t.step = 0, t.isMoveTeachFinish = !0, t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    n.default.getInstance().add_event_listenner("teach_changan_finish", this, this.nextStep), n.default.getInstance().add_event_listenner("share_success", this, this.share_success), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this)
                }, t.prototype.onKeyDown = function(e) {
                    switch (console.log("this.step is ", this.step), e.keyCode) {
                        case cc.macro.KEY.a:
                            5 == this.step && this.leftBtnClick();
                            break;
                        case cc.macro.KEY.d:
                            7 == this.step && this.rightBtnClick();
                            break;
                        case cc.macro.KEY.j:
                            3 == this.step && (this.node.getChildByName("talkWindow").active = !1, this.showChangAnByKey()), this.nextStep();
                            break;
                        case cc.macro.KEY.k:
                        case cc.macro.KEY.l:
                    }
                }, t.prototype.onKeyUp = function(e) {
                    switch (e.keyCode) {
                        case cc.macro.KEY.j:
                            3 == this.step && (console.log("\u957f\u6309 close"), this.closeChangAnByKey())
                    }
                }, t.prototype.leftBtnClick = function() {
                    n.default.getInstance().dispatch_event("teach_run_left", {}), this.isCheckHuaLeft = !1, this.nextStep()
                }, t.prototype.rightBtnClick = function() {
                    n.default.getInstance().dispatch_event("teach_run_right", {}), this.isCheckHuaRight = !1, this.nextStep()
                }, t.prototype.share_success = function(e) {
                    var t = e.share_id; - 1 != t || a.default.showPiaozi("Hết quảng cáo")
                }, t.prototype.show_teach = function(e) {
                    switch (this.teach_id = e, e) {
                        case 0:
                            this.setTeachWz("<color=#72401c>Cô bé quàng khăn đỏ dũng cảm đã xuất hiện! Lũ zombie sắp tiến đến!</c>"), this.stepTotil = 10;
                            break;
                        case 1:
                            this.setTeachWz("<color=#72401c>Nhấp vào đây để <color=#ff00d8> để nhận 3 lần xu</c>Sụ trở lại đầy mạnh mẽ!</c>"), this.node.getChildByName("sanbei").active = !0, this.stepTotil = 1;
                            break;
                        case 2:
                            this.setTeachWz("<color=#72401c>Vật phẩm <color=#ff00d8>máy bay sẽ đóng băng chúng</c><color=#72401c> và làm chậm, tiêu diệt zombie</c>"), this.node.getChildByName("showPlaneItem").active = !0, this.stepTotil = 4;
                            break;
                        case 3:
                            this.setTeachWz("<color=#72401c>Làm gì khi có nhiều zombie?</c>"), this.stepTotil = 4
                    }
                }, t.prototype.sanbenBtn = function() {
                    console.log("3\u500d\u9886\u53d6"), a.default.showPiaozi("Chưa mở")
                }, t.prototype.setTeachWz = function(e) {
                    this.teach_wz.string = e
                }, t.prototype.touchStart = function() {
                    this.isCheckHuaLeft && console.log("isCheckHuaLeft start")
                }, t.prototype.touchEnd = function() {
                    this.isCheckHuaLeft && console.log("isCheckHuaRight start")
                }, t.prototype.nextStep = function() {
                    var e = this;
                    if (!this.isCheckHuaLeft && !this.isCheckHuaRight) {
                        if (0 == this.teach_id)
                            if (this.step += 1, this.step < this.stepTotil) switch (this.step) {
                                case 1:
                                    this.setTeachWz("<color=#72401c>Bạn có thể giúp chúng tôi\nhạ gục lũ zombie? Làm ơn 💗</c>");
                                    break;
                                case 2:
                                    this.setTeachWz("<color=#72401c>Dùng khẩu súng ma thuật để biến đổi lại những thây ma đó? <color=#ff00d8>Nhấn và giữ </c>để bắn</c>");
                                    break;
                                case 3:
                                    this.node.getChildByName("talkWindow").active = !1, this.showChangAn();
                                    break;
                                case 4:
                                    this.node.getChildByName("talkWindow").active = !0, this.node.getChildByName("changan").active = !1, this.setTeachWz("<color=#72401c>Thật tuyệt vời!</c><color=#72401c><color=#ff00d8> Nhấp vào mũi tên bên trái</c><color=#72401c> để di chuyển sang trái.</ c>");
                                    break;
                                case 5:
                                    this.node.getChildByName("talkWindow").active = !1, this.node.getChildByName("hualeft").active = !0, this.isCheckHuaLeft = !0;
                                    break;
                                case 6:
                                    this.node.getChildByName("talkWindow").active = !0, this.node.getChildByName("hualeft").active = !1, this.isCheckHuaLeft = !1, this.setTeachWz("<color=#72401c></c><color=#72401c><color =#ff00d8>Nhấp vào mũi tên phải </c><color=#72401c>để di chuyển sang phải.</c>");
                                    break;
                                case 7:
                                    this.node.getChildByName("talkWindow").active = !1, this.node.getChildByName("huaRight").active = !0, this.isCheckHuaRight = !0;
                                    break;
                                case 8:
                                    this.node.getChildByName("talkWindow").active = !0, this.node.getChildByName("huaRight").active = !1, this.isCheckHuaRight = !1, this.setTeachWz("<color=#72401c>Tuyệt vời! Tất cả chúng tôi phụ thuộc vào bạn, xin hãy cố hết sức!</c>");
                                    break;
                                case 9:
                                    this.setTeachWz("<color=#72401c>Tôi biết rằng bạn chính là tay súng cừ khôi nhất!!</c>")
                            } else console.log("\u6559\u7a0b1\u7ed3\u675f"), s.default.userData.isFinishXinShou = !0, o.default.save("userdata", s.default.userData), this.step = 0, n.default.getInstance().dispatch_event("teach_over", {
                                teach_id: 0
                            }), n.default.getInstance().remove_event_listenner("teach_changan_finish", this, this.nextStep), this.node.parent.removeChild(this.node), this.node.destroy();
                        if (1 == this.teach_id && (this.node.parent.removeChild(this.node), this.node.destroy()), 2 == this.teach_id) {
                            if (!this.isMoveTeachFinish) return;
                            if (this.step += 1, this.step < this.stepTotil) switch (this.step) {
                                case 1:
                                    this.isMoveTeachFinish = !1, this.setTeachWz("<color=#ff00d8>Bấm vào nút </c><color=#72401c>để dùng</c>");
                                    var t = this.node.getChildByName("showPlaneItem"),
                                        i = cc.moveTo(.3, 0, -390),
                                        a = cc.scaleTo(.3, 1.2, 1.2),
                                        r = cc.scaleTo(.3, 1, 1),
                                        c = cc.callFunc(function() {
                                            n.default.getInstance().dispatch_event("show_planeBtn", {}), t.active = !1, e.isMoveTeachFinish = !0
                                        }),
                                        l = cc.sequence(i, a, r, c);
                                    t.runAction(l);
                                    break;
                                case 2:
                                    s.default.GAME_STATE = s.default.GAME_PLAYING, this.node.parent.removeChild(this.node), this.node.destroy()
                            }
                        }
                        if (3 == this.teach_id) {
                            if (!this.isMoveTeachFinish) return;
                            if (this.step += 1, this.step < this.stepTotil) switch (this.step) {
                                case 1:
                                    this.node.getChildByName("showZhadanItem").active = !0, this.setTeachWz("<color=#72401c>Có một siêu vũ khí ở đây - </c><color=#ff00d8> Bomb</c><color=#72401c>, gây sát thương rất lớn cho zombie toàn màn hình!</c>");
                                    break;
                                case 2:
                                    this.isMoveTeachFinish = !1, this.setTeachWz("<color=#72401c>Nhấp để sử dụng nó. Nhìn kìa, lũ thây ma đều sợ hãi!</c>");
                                    var u = this.node.getChildByName("showZhadanItem");
                                    i = cc.moveTo(.3, 130, -390), a = cc.scaleTo(.3, 1.2, 1.2), r = cc.scaleTo(.3, 1, 1), c = cc.callFunc(function() {
                                        n.default.getInstance().dispatch_event("show_zhadanBtn", {}), u.active = !1, e.isMoveTeachFinish = !0
                                    }), l = cc.sequence(i, a, r, c);
                                    u.runAction(l);
                                    break;
                                case 3:
                                    s.default.GAME_STATE = s.default.GAME_PLAYING, this.node.parent.removeChild(this.node), this.node.destroy()
                            }
                        }
                    }
                }, t.prototype.showChangAn = function() {
                    this.node.getChildByName("changan").active = !0, n.default.getInstance().dispatch_event("teach_changan", {})
                }, t.prototype.showChangAnByKey = function() {
                    this.node.getChildByName("changan").active = !0, n.default.getInstance().dispatch_event("teach_changan_key_up", {})
                }, t.prototype.closeChangAnByKey = function() {
                    this.node.getChildByName("changan").active = !0, n.default.getInstance().dispatch_event("teach_changan_key_down", {})
                }, t.prototype.start = function() {}, __decorate([l(cc.RichText)], t.prototype, "teach_wz", void 0), t = __decorate([c], t)
            }(cc.Component);
        i.default = u, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../tools/Rock_wx": "Rock_wx",
        "../tools/game_tools": "game_tools",
        "../utils/config": "config"
    }],
    tnt: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "bae69TbxE5JNaZW7oy3Uttn", "tnt"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../managers/event_mgr"),
            a = e("../tools/game_tools"),
            s = cc._decorator,
            o = s.ccclass,
            r = s.property,
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.zhadan = null, t.zhadan_state = "go", t
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    this.init()
                }, t.prototype.init = function() {
                    var e = this,
                        t = cc.moveTo(.3, 0, 100).easing(cc.easeOut(3)),
                        i = cc.callFunc(function() {
                            e.zhadan.setAnimation(0, "baozha", !1), e.zhadan_state = "bao", a.default.playSound("music/bomb", !1), n.default.getInstance().dispatch_event("baozha", {})
                        }),
                        s = cc.sequence(t, i);
                    this.zhadan.node.runAction(s), this.zhadan.setCompleteListener(function() {
                        "bao" == e.zhadan_state && (n.default.getInstance().dispatch_event("baozha_finish", {}), e.node.parent.removeChild(e.node), e.node.destroy())
                    })
                }, t.prototype.start = function() {}, __decorate([r(sp.Skeleton)], t.prototype, "zhadan", void 0), t = __decorate([o], t)
            }(cc.Component);
        i.default = c, cc._RF.pop()
    }, {
        "../managers/event_mgr": "event_mgr",
        "../tools/game_tools": "game_tools"
    }],
    "use_v2.1-2.2.1_cc.Toggle_event": [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "e8246Bz5jNLVqFmv52LI7E6", "use_v2.1-2.2.1_cc.Toggle_event"), cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0), cc._RF.pop()
    }, {}],
    zidanbao: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "cca8del9NdO6YvYiuOjAaxl", "zidanbao"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var n = e("../utils/config"),
            a = cc._decorator,
            s = a.ccclass,
            o = (a.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return __extends(t, e), t.prototype.onLoad = function() {
                    var e = this,
                        t = this.node.getChildByName("zb_" + n.default.userData.gun_level);
                    t.active = !0, t.getComponent(sp.Skeleton).setCompleteListener(function() {
                        e.node.parent.removeChild(e.node), e.node.active = !1, e.node.destroy()
                    })
                }, t.prototype.start = function() {}, t = __decorate([s], t)
            }(cc.Component));
        i.default = o, cc._RF.pop()
    }, {
        "../utils/config": "config"
    }]
}, {}, ["use_v2.1-2.2.1_cc.Toggle_event", "game_app", "gm_res", "baoji", "chengjiu_tips", "chenjiu_list_set", "dialog", "double_get_window", "enemy", "enemy_boss", "enemy_boss_yuancheng", "enemy_bullet", "enemy_die", "enemy_nor", "enemy_yuancheng", "getChengjiu", "get_jinbi", "hurt_num", "piaozi", "plane", "plane_bullet", "reward_window", "showGetRewardAlert", "sign", "teach", "tnt", "zidanbao", "game_chengjiu", "game_main", "game_shop", "game_title", "pifu", "rank", "setting", "UI_manager", "event_mgr", "game_mgr", "res_mgr", "UI_ctrl", "popup", "scene", "ButtonScaler", "CollisionTools", "CommonFun", "GunScaler", "RockLine", "Rock_wx", "frame_anima", "game_tools", "guaguale", "login", "net", "openDomain", "game_chengjiu_ctrl", "game_main_ctrl", "game_shop_ctrl", "game_title_ctrl", "pifu_ctrl", "rank_ctrl", "setting_ctrl", "config", "http", "playerInfo"]);