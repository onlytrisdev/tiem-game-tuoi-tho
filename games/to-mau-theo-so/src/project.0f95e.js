window.__require = function t(e, n, i) {
    function o(a, s) {
        if (!n[a]) {
            if (!e[a]) {
                var c = a.split("/");
                if (c = c[c.length - 1], !e[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(c, !0);
                    if (r) return r(c, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
            }
            var u = n[a] = {
                exports: {}
            };
            e[a][0].call(u.exports, function(t) {
                return o(e[a][1][t] || t)
            }, u, u.exports, t, e, n, i)
        }
        return n[a].exports
    }
    for (var r = "function" == typeof __require && __require, a = 0; a < i.length; a++) o(i[a]);
    return o
}({
    AudioUtil: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e8465hFwbNO4b2qwv441Rjo", "AudioUtil"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("./LocalData"),
            o = function() {
                function t() {
                    this._musicVolume = 1, this._effectVolume = 1
                }
                return t.getInstance = function() {
                    return t.instance || (t.instance = new t), this.instance
                }, t.prototype.init = function() {
                    var t = i.LocalData.GetInstance().GetVal("MusicVolume"),
                        e = i.LocalData.GetInstance().GetVal("SoundVolume");
                    console.log(t, e), this.musicVolume = null == t ? this.musicVolume : t, this.effectVolume = null == e ? this.effectVolume : e, cc.game.on(cc.game.EVENT_HIDE, function() {
                        this.pauseAll()
                    }.bind(this)), cc.game.on(cc.game.EVENT_SHOW, function() {
                        this.resumeAll()
                    }.bind(this))
                }, t.prototype.getAudioUrl = function(t) {
                    return cc.url.raw("resources/sounds/" + t)
                }, t.prototype.playEffect = function(t) {
                    cc.AudioClip._loadByUrl(this.getAudioUrl(t), function(t, e) {
                        e && cc.audioEngine.playEffect(e, !1)
                    })
                }, t.prototype.playMusic = function(t) {
                    cc.AudioClip._loadByUrl(this.getAudioUrl(t), function(t, e) {
                        e && cc.audioEngine.playMusic(e, !0)
                    })
                }, t.prototype.pauseAll = function() {
                    cc.audioEngine.pauseAll()
                }, t.prototype.resumeAll = function() {
                    cc.audioEngine.resumeAll()
                }, Object.defineProperty(t.prototype, "musicVolume", {
                    get: function() {
                        return this._musicVolume
                    },
                    set: function(t) {
                        this._musicVolume = t >= 0 || t <= 1 ? t : this._musicVolume, cc.audioEngine.setMusicVolume(this._musicVolume), i.LocalData.GetInstance().SetVal("MusicVolume", t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "effectVolume", {
                    get: function() {
                        return this._effectVolume
                    },
                    set: function(t) {
                        this._effectVolume = t >= 0 || t <= 1 ? t : this.effectVolume, cc.audioEngine.setEffectsVolume(this.effectVolume), i.LocalData.GetInstance().SetVal("SoundVolume", t)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }();
        n.AudioUtil = o, cc._RF.pop()
    }, {
        "./LocalData": "LocalData"
    }],
    Base64: [function(require, module, exports) {
        (function(global) {
            "use strict";
            cc._RF.push(module, "79477DxJB5Pb4QFEL7pQ9Mz", "Base64");
            var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
            (function(t, e) {
                "object" === (void 0 === exports ? "undefined" : _typeof(exports)) && void 0 !== module ? module.exports = e(t) : "function" == typeof define && define.amd ? define(e) : e(t)
            })("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== global ? global : void 0, function(global) {
                global = global || {};
                var _Base64 = global.Base64,
                    version = "2.5.1",
                    buffer;
                if (void 0 !== module && module.exports) try {
                    buffer = eval("require('buffer').Buffer")
                } catch (t) {
                    buffer = void 0
                }
                var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    b64tab = function(t) {
                        for (var e = {}, n = 0, i = t.length; n < i; n++) e[t.charAt(n)] = n;
                        return e
                    }(b64chars),
                    fromCharCode = String.fromCharCode,
                    cb_utob = function(t) {
                        if (t.length < 2) return (e = t.charCodeAt(0)) < 128 ? t : e < 2048 ? fromCharCode(192 | e >>> 6) + fromCharCode(128 | 63 & e) : fromCharCode(224 | e >>> 12 & 15) + fromCharCode(128 | e >>> 6 & 63) + fromCharCode(128 | 63 & e);
                        var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
                        return fromCharCode(240 | e >>> 18 & 7) + fromCharCode(128 | e >>> 12 & 63) + fromCharCode(128 | e >>> 6 & 63) + fromCharCode(128 | 63 & e)
                    },
                    re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                    utob = function(t) {
                        return t.replace(re_utob, cb_utob)
                    },
                    cb_encode = function(t) {
                        var e = [0, 2, 1][t.length % 3],
                            n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
                        return [b64chars.charAt(n >>> 18), b64chars.charAt(n >>> 12 & 63), e >= 2 ? "=" : b64chars.charAt(n >>> 6 & 63), e >= 1 ? "=" : b64chars.charAt(63 & n)].join("")
                    },
                    btoa = global.btoa ? function(t) {
                        return global.btoa(t)
                    } : function(t) {
                        return t.replace(/[\s\S]{1,3}/g, cb_encode)
                    },
                    _encode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(t) {
                        return (t.constructor === buffer.constructor ? t : buffer.from(t)).toString("base64")
                    } : function(t) {
                        return (t.constructor === buffer.constructor ? t : new buffer(t)).toString("base64")
                    } : function(t) {
                        return btoa(utob(t))
                    },
                    encode = function(t, e) {
                        return e ? _encode(String(t)).replace(/[+\/]/g, function(t) {
                            return "+" == t ? "-" : "_"
                        }).replace(/=/g, "") : _encode(String(t))
                    },
                    encodeURI = function(t) {
                        return encode(t, !0)
                    },
                    re_btou = new RegExp(["[\xc0-\xdf][\x80-\xbf]", "[\xe0-\xef][\x80-\xbf]{2}", "[\xf0-\xf7][\x80-\xbf]{3}"].join("|"), "g"),
                    cb_btou = function(t) {
                        switch (t.length) {
                            case 4:
                                var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
                                return fromCharCode(55296 + (e >>> 10)) + fromCharCode(56320 + (1023 & e));
                            case 3:
                                return fromCharCode((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                            default:
                                return fromCharCode((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
                        }
                    },
                    btou = function(t) {
                        return t.replace(re_btou, cb_btou)
                    },
                    cb_decode = function(t) {
                        var e = t.length,
                            n = e % 4,
                            i = (e > 0 ? b64tab[t.charAt(0)] << 18 : 0) | (e > 1 ? b64tab[t.charAt(1)] << 12 : 0) | (e > 2 ? b64tab[t.charAt(2)] << 6 : 0) | (e > 3 ? b64tab[t.charAt(3)] : 0),
                            o = [fromCharCode(i >>> 16), fromCharCode(i >>> 8 & 255), fromCharCode(255 & i)];
                        return o.length -= [0, 0, 2, 1][n], o.join("")
                    },
                    _atob = global.atob ? function(t) {
                        return global.atob(t)
                    } : function(t) {
                        return t.replace(/\S{1,4}/g, cb_decode)
                    },
                    atob = function(t) {
                        return _atob(String(t).replace(/[^A-Za-z0-9\+\/]/g, ""))
                    },
                    _decode = buffer ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from ? function(t) {
                        return (t.constructor === buffer.constructor ? t : buffer.from(t, "base64")).toString()
                    } : function(t) {
                        return (t.constructor === buffer.constructor ? t : new buffer(t, "base64")).toString()
                    } : function(t) {
                        return btou(_atob(t))
                    },
                    decode = function(t) {
                        return _decode(String(t).replace(/[-_]/g, function(t) {
                            return "-" == t ? "+" : "/"
                        }).replace(/[^A-Za-z0-9\+\/]/g, ""))
                    },
                    noConflict = function() {
                        var t = global.Base64;
                        return global.Base64 = _Base64, t
                    };
                if (global.Base64 = {
                        VERSION: version,
                        atob: atob,
                        btoa: btoa,
                        fromBase64: decode,
                        toBase64: encode,
                        utob: utob,
                        encode: encode,
                        encodeURI: encodeURI,
                        btou: btou,
                        decode: decode,
                        noConflict: noConflict,
                        __buffer__: buffer
                    }, "function" == typeof Object.defineProperty) {
                    var noEnum = function(t) {
                        return {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    };
                    global.Base64.extendString = function() {
                        Object.defineProperty(String.prototype, "fromBase64", noEnum(function() {
                            return decode(this)
                        })), Object.defineProperty(String.prototype, "toBase64", noEnum(function(t) {
                            return encode(this, t)
                        })), Object.defineProperty(String.prototype, "toBase64URI", noEnum(function() {
                            return encode(this, !0)
                        }))
                    }
                }
                return global.Meteor && (Base64 = global.Base64), void 0 !== module && module.exports ? module.exports.Base64 = global.Base64 : "function" == typeof define && define.amd && define([], function() {
                    return global.Base64
                }), {
                    Base64: global.Base64
                }
            }), cc._RF.pop()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    CallbackMgr: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "4a317E1PztHY5sw+blYlruA", "CallbackMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {
                this._nNextCallbackID = 100001, this._tCallbackMap = {}, this._tTempCallbackMap = {}
            }
            return t.GetInstance = function() {
                return null == this._Instance && (this._Instance = new t), this._Instance
            }, t.prototype.DoCallbackFunc = function(t, e) {
                if (0 != t) {
                    var n = this._tTempCallbackMap[t];
                    if (null != n) return this._tTempCallbackMap[t] = null, void n(e);
                    var i = this._tCallbackMap[t];
                    null == i || i(e)
                }
            }, t.prototype.Perm = function(t) {
                var e = this._nNextCallbackID += 1;
                return this._tCallbackMap[e] = t, e
            }, t.prototype.Temp = function(t) {
                var e = this._nNextCallbackID += 1;
                return this._tTempCallbackMap[e] = t, e
            }, t.prototype.RemovePerm = function(t) {
                this._tCallbackMap[t] && (this._tCallbackMap[t] = null)
            }, t._Instance = null, t
        }();
        n.CallbackMgr = i, cc._RF.pop()
    }, {}],
    DataManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "27b5bUVq+FBhZUGx2G1/TfP", "DataManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {
                this._tNameDataMap = {}
            }
            return t.GetInstance = function() {
                return null == this._Instance && (this._Instance = new t), this._Instance
            }, t.prototype.Reset = function() {
                this._tNameDataMap = {}
            }, t.prototype.LoadJsonData = function(t, e, n, i) {
                var o = this;
                void 0 === n && (n = !1), void 0 === i && (i = !1), console.log("LoadJsonData:" + t), cc.loader.loadRes(t, function(t, i) {
                    var r = {},
                        a = i.json.types,
                        s = i.json.fields,
                        c = i.json.values;
                    for (var l in c) {
                        for (var u = c[l], h = new Object, _ = 0; _ < a.length; ++_) {
                            var d = s[_];
                            switch (a[_]) {
                                case "I":
                                case "S":
                                    h[d] = u[_]
                            }
                        }
                        if (1 == n) r[h.ID] = h;
                        else r[l] = h
                    }
                    o._tNameDataMap[e] = r
                })
            }, t.prototype.GetDataByName = function(t) {
                return this._tNameDataMap[t]
            }, t.prototype.GetDataByNameAndId = function(t, e) {
                var n = this._tNameDataMap[t];
                if (null != n) return n[e]
            }, t.prototype.ClearDataByName = function(t) {
                this._tNameDataMap[t] = null
            }, t.prototype.SetDataByName = function(t, e) {
                this._tNameDataMap[t] = e
            }, t._Instance = null, t
        }();
        n.DataManager = i, cc._RF.pop()
    }, {}],
    DynContainer: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "8c728ETZ/tHGb3Bco6a2OcI", "DynContainer");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
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
                    return e.container = null, e.scroll_view = null, e._pLoaderFunc = null, e._nRowCellNum = 1, e._nCellWidth = 5, e._nCellHeight = 5, e
                }
                return i(e, t), e.prototype.onLoad = function() {}, e.prototype.onEnable = function() {
                    this.scroll_view.on("scrolling", this._onScrolling.bind(this), this), this.container.getComponent(cc.Layout).enabled = !1, this.updateCellsVisibility()
                }, e.prototype.onDisable = function() {
                    this.scroll_view.off("scrolling", this._onScrolling)
                }, e.prototype.setDynamicLoader = function(t) {
                    this._pLoaderFunc = t
                }, e.prototype.setContainerSize = function(t, e) {
                    this.container.setContentSize(cc.size(t, e))
                }, e.prototype.setCellRowCellInfo = function(t, e, n) {
                    this._nRowCellNum = n, this._nCellWidth = t, this._nCellHeight = e
                }, e.prototype.updateCellsVisibility = function() {
                    var t = this,
                        e = this.container.y,
                        n = this._nCellHeight,
                        i = this.node.getContentSize();
                    this.container.children.forEach(function(o) {
                        e + o.y - .5 * n + 40 > 0 || e + o.y + .5 * n < -i.height ? o.active = !1 : (o.active = !0, t._pLoaderFunc && t._pLoaderFunc(o))
                    })
                }, e.prototype._onScrolling = function() {
                    this.updateCellsVisibility()
                }, o([s(cc.Node)], e.prototype, "container", void 0), o([s(cc.Node)], e.prototype, "scroll_view", void 0), e = o([a], e)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {}],
    EventsManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1ae31xCqxhOd5FshpX/I7Fv", "EventsManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {
                this._nEventNextHandleID = 1e7, this._tEventsTypeHandlers = {}
            }
            return t.GetInstance = function() {
                return null == this._Instance && (this._Instance = new t), this._Instance
            }, t.prototype.AddObservedEvent = function(t, e, n) {
                this._nEventNextHandleID = this._nEventNextHandleID + 1;
                var i = t + "," + e,
                    o = this._tEventsTypeHandlers[i];
                o || (this._tEventsTypeHandlers[i] = new Array, o = this._tEventsTypeHandlers[i]), o.push(n)
            }, t.prototype.RemoveEventsHandler = function() {}, t.prototype.RemoveObjectAllHandlers = function(t) {
                for (var e in this._tEventsTypeHandlers) {
                    var n = this._tEventsTypeHandlers[e];
                    if (n)
                        for (var i in n) {
                            var o = n[i],
                                r = Number(i);
                            o.Target == t && n.splice(r, 1)
                        }
                }
            }, t.prototype.RemoveEventsHandlerByName = function(t, e) {
                var n = t + "," + e;
                this._tEventsTypeHandlers[n] && (this._tEventsTypeHandlers[n] = [])
            }, t.prototype.DoNotify = function(t, e, n) {
                void 0 === n && (n = null);
                var i = this._tEventsTypeHandlers[t + "," + e];
                if (i)
                    for (var o = 0, r = i; o < r.length; o++) {
                        var a = r[o],
                            s = a.Callback,
                            c = a.Target;
                        null != s && (null != c ? s.bind(c)(t, e, n) : s(t, e, n))
                    }
            }, t.prototype.OnNotifyMessage = function(t, e, n) {}, t._Instance = null, t
        }();
        n.EventsManager = i, cc._RF.pop()
    }, {}],
    GameController: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "8f8e8OoIdlM3rBDW+BaYz+K", "GameController");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../Base/init"),
            a = t("./logic/GameLogic"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.label = null, e._bCheckDeviceMotion = !1, e._bDataConverted = !1, e._bShowedSinged = !1, e._bDataInited = !1, e._oLabelPool = new cc.NodePool, e._bPlayMusic = !1, e
                }
                return i(e, t), e.prototype.onLoad = function() {
                    a.GameLogic.GetInstance().Init(), a.GameLogic.GetInstance().SetGameController(this), this.RegEvents(["CHANGE_SCENE", "DRAW_PIC", "BTN_CLICKED", "DESTORY_LOGIC", "SHOW_TRANSITION", "DEVICE_MOTION_CHNAGE", "UPDATE_ONLINE_PARMAS"]), r._M.REG_EVT_LISTENER("UI_EVENT", "BTN_CLICKED", this.ON_UI_EVENT, this), r._M.REG_EVT_LISTENER("UI_EVENT", "SHOW_UI", this.ON_UI_EVENT, this), cc.game.on(cc.game.EVENT_HIDE, function() {
                        r._M.LocalData.SaveAllData()
                    }.bind(this)), cc.game.on(cc.game.EVENT_SHOW, function() {
                        r._M.LocalData.SaveAllData()
                    }.bind(this))
                }, e.prototype.start = function() {
                    this._bShowedSinged = !1, cc.game.addPersistRootNode(this.node), 0 == r._M.CONFIG.SHOW_FPS && cc.debug.setDisplayStats(!1), this._bPlayMusic = !1
                }, e.prototype.onDestroy = function() {
                    cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this), r._M.REMOVE_ALL_LISTENERS(this)
                }, e.prototype.ON_GAME_EVENT = function(t, e, n) {
                    if ("CHANGE_SCENE" == e) this.SwitchScene(n);
                    else if ("DRAW_PIC" == e) {
                        var i = n.PicId;
                        a.GameLogic.GetInstance().StartQuest(i, !1), r._M.UIManager.ShowUI("UIWaiting")
                    } else if ("DESTORY_LOGIC" == e) a.GameLogic.GetInstance().Destory(!1);
                    else if ("SHOW_TRANSITION" == e) {
                        var o = cc.find("Canvas/transition", cc.director.getScene());
                        if (!o) return;
                        o.opacity = 80, o.runAction(cc.sequence([cc.fadeIn(.3), cc.delayTime(.1), cc.fadeOut(.3), cc.delayTime(.5)]))
                    } else "UPDATE_ONLINE_PARMAS" == e ? r._M.SDK.SetOnlineParams(n) : "BTN_CLICKED" == e && (r._M.PlaySound("SND_CLICK"), this.RefreshCountdown())
                }, e.prototype.ON_UI_EVENT = function(t, e, n) {
                    "SHOW_UI" == e && "UIMenu" == n.Name && (this._bShowedSinged = !0, r._M.GetDataVal("NewPlayer") || (r._M.SetDataVal("NewPlayer", !1), this.DoCheckShowSignIn()), this._bPlayMusic || (this._bPlayMusic = !0, setTimeout(function() {
                        r._M.AudioUtil.musicVolume = .6, r._M.PlayMusic("BGM_GAME")
                    }, 2e3)))
                }, e.prototype.RefreshCountdown = function() {
                    var t = 120,
                        e = r._M.SDK.OnlineParams;
                    e && e.IdleCoverCountdownTime && (t = parseInt(e.IdleCoverCountdownTime));
                    var n = cc.delayTime(t),
                        i = cc.callFunc(function() {
                            r._M.UIManager.IsShowUI("UIFailed") || r._M.UIManager.IsShowUI("UIVictory") || r._M.UIManager.IsShowUI("UIIdleCover") || r._M.UIManager.ShowUI("UIIdleCover")
                        }),
                        o = cc.sequence([n, i]);
                    this.node.stopAllActions(), this.node.runAction(o)
                }, e.prototype.onDeviceMotionEvent = function(t) {
                    a.GameLogic.GetInstance().OnAccelerate(t.acc.x, t.acc.y, t.acc.z)
                }, e.prototype.DoConvertData = function() {
                    if (!this._bDataConverted) {
                        var t = r._M.DataManager.GetDataByName("MissionConf"),
                            e = r._M.DataManager.GetDataByName("TypesView");
                        e[0].TypePics = [];
                        var n = [],
                            i = [],
                            o = {};
                        for (var a in e) {
                            var s = e[a];
                            o[s.PicType] = s
                        }
                        if (t && e)
                            for (var c in t) {
                                var l = t[c];
                                if (l) {
                                    var u = parseInt(l.Recommend),
                                        h = o[l.Sort];
                                    if (h) h.TypePics || (h.TypePics = []), h.TypePics.push(c);
                                    "0" != l.UnlockCond && 0 != l.UnlockCond || (r._M.InitUnlockPic[c] = !0), u > 0 && i.push([c, u])
                                }
                            }
                        i.sort(function(t, e) {
                            return t[1] < e[1] ? -1 : t[1] == e[1] ? 0 : t[1] > e[1] ? 1 : void 0
                        });
                        for (a = 0; a < i.length; a++) n.push(i[a][0]);
                        e[0].TypePics = n, this._bDataConverted = !0
                    }
                }, e.prototype.DoRandomInitTodayData = function() {
                    if (!this._bDataInited) {
                        var t = r._M.GetDataVal("TodayPic1"),
                            e = r._M.GetDataVal("TodayPic2");
                        if ("" == t || "" == e) {
                            var n = [];
                            for (var i in r._M.InitUnlockPic) n.push(i);
                            var o = Math.floor(Math.random() * n.length),
                                a = n[o];
                            n.splice(o, o);
                            var s = n[Math.floor(Math.random() * n.length)];
                            if (!a || !s) return;
                            r._M.SetDataVal("TodayPic1", a), r._M.SetDataVal("TodayPic2", s)
                        }
                        this._bDataInited = !0
                    }
                }, e.prototype.SwitchScene = function(t) {
                    var e = t.Name;
                    if (e && "" != e) {
                        "Menu" == e && (this.DoConvertData(), this.DoRandomInitTodayData());
                        var n = cc.director.getScene();
                        "Game" != n.name && "" != n.name || "Game" == e || a.GameLogic.GetInstance().DestoryLogic();
                        var i = cc.find("Canvas/transition", n);
                        i.opacity = 0, i.runAction(cc.sequence([cc.fadeIn(.1), cc.callFunc(function() {
                            r._M.UIManager.DestroyAllUI(), cc.director.loadScene(e, function() {
                                var n = cc.director.getScene();
                                if (n) {
                                    "Game" == e && r._M.SEND_EVENT("GAME_EVENT", "DRAW_PIC", t);
                                    var i = cc.find("Canvas/transition", n);
                                    n.name = e, i.opacity = 255, i.runAction(cc.sequence([cc.delayTime(.05), cc.callFunc(function() {
                                        "Game" == e && r._M.SEND_EVENT("GAME_EVENT", "SET_GAME_BACK_SCENE", t), r._M.SEND_EVENT("GAME_EVENT", "SET_SCENE_INIT_DATA", t)
                                    }), cc.fadeOut(.05), cc.callFunc(function() {
                                        r._M.CONFIG.OPEN_DEBUG_HELPER && r._M.UIManager.ShowUI("UIDebug")
                                    })]))
                                }
                            })
                        })]))
                    }
                }, e.prototype.RegEvents = function(t) {
                    var e = this;
                    t.forEach(function(t) {
                        r._M.REG_EVT_LISTENER("GAME_EVENT", t, e.ON_GAME_EVENT, e)
                    })
                }, e.prototype.DoCheckShowSignIn = function() {
                    r._M.GetDataVal("TodayDoSigin") || r._M.TimeUtility.GetBeginTimeVal() - r._M.GetDataVal("LastSignTime") >= 864e5 && r._M.UIManager.ShowUI("UISignIn")
                }, e.prototype.GetLabelPool = function() {
                    return this._oLabelPool
                }, o([l(cc.Node)], e.prototype, "label", void 0), e = o([c], e)
            }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {
        "../Base/init": "Init",
        "./logic/GameLogic": "GameLogic"
    }],
    GameDataDef: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "77399qLSUlDo5P/cFq1IU9Q", "GameDataDef"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("../../Base/init");
        n.GameDataDef = [
            ["Gold", "number", 100000, !1, 0, 999999],
            ["SoundVolume", "number", 1, !1, 0, 1],
            ["MusicVolume", "number", 1, !1, 0, 1],
            ["CurQuestIdx", "number", 1, !1, 1, 60],
            ["GoldNeedAdd", "number", 10, !1, 0, 999],
            ["LastResetTime", "number", 0, !1],
            ["AutoLaguageSet", "number", 0, !1],
            ["Language", "string", "EN", !1],
            ["RemoveAllAds", "string", "false", !1],
            ["PlayFabID", "string", "", !1],
            ["OnlineParams", "json", {}, !1],
            ["Guide", "json", {}, !1],
            ["NewPlayer", "bool", !0, !1],
            ["PicStatu", "Array", [], !1],
            ["UnlockedPic", "json", {}, !1],
            ["SignDay", "number", 0, !1, 0, 999],
            ["LastSignTime", "number", 0, !1, 0, 999],
            ["TodayDoSigin", "bool", !1, !0],
            ["TodayVideoGoldCount", "number", 3, !0, 0, 999999],
            ["HelpTimes", "number", 2, !1, 0, 999999],
            ["TodayFinishPic", "number", 0, !0, 0, 999999],
            ["ColorTips", "number", 10, !1, 0, 999999],
            ["AutoChangeColor", "bool", !0, !1],
            ["AutoHideColor", "bool", !0, !1],
            ["GetPicReward1", "bool", !1, !0],
            ["GetPicReward3", "bool", !1, !0],
            ["TodayPic1", "string", "", !0],
            ["TodayPic2", "string", "", !0]
        ];
        var o = i._M.LocalData;
        o.OnAllDataLoaded(function() {
            i._M.REG_EVT_LISTENER("LOGIC_EVENT", "START_QUEST", function(t, e, n) {
                i._M.LOG_EVENT("START_QUEST", n.QuestId), o.SaveAllData()
            }, o), i._M.REG_EVT_LISTENER("LOGIC_EVENT", "SHOW_PASS_QUEST", function(t, e, n) {
                i._M.LOG_EVENT("FINISH_QUEST", n.ID), o.SaveAllData()
            }, o)
        }), cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    GameLogic: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d3ceaC9q+JKm6FCrecJiuID", "GameLogic"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("../../Base/init"),
            o = t("../comp/Svg"),
            r = ["DO_FILL_COLOR", "DO_CHECK_COLOR_ALL_OK", "FINISH_PIC", "HELP_OF_CUR_COLOR"],
            a = function() {
                function t() {
                    this._T_STAGE_LOGIC_CLASS = {}, this._tLastArgs = [0, 0, 0], this._sLastAccDirection = "", this._nLastClock = 0, this._nContinueCount = 0, this._oStageLogic = null, this._bShowingResult = !1, this._oGameControllor = null, this._sPicId = "", this._bShowQuestTips = !1, this._sGameState = "", this._oSvg = null, this._oLineSvg = null, this._tPathLabelMap = {}
                }
                return t.GetInstance = function() {
                    return null == this._Instance && (this._Instance = new t), this._Instance
                }, t.prototype.Init = function() {
                    for (var t = 0, e = r; t < e.length; t++) {
                        var n = e[t];
                        i._M.REG_EVT_LISTENER("GAME_EVENT", n, this.ON_EVENT, this)
                    }
                    this.RegLogicEvents(["FAILED_MARK_SHOWED", "START_NEXT_QUEST", "REBORN_AND_RESET", "CANCEL_REBORN", "RESET_QUEST", "PASS_QUEST_COND_OK", "REAL_FINISH_QUEST", "BOMB_EXPLODE", "SHOW_TIPS", "DEBUG_RESET_QUEST_AND_DRAW", "START_PRE_QUEST", "DRAWING_RECORD"]), this._sGameState = "Playing"
                }, t.prototype.StartQuest = function(t, e, n) {
                    var r = this;
                    void 0 === e && (e = !1), void 0 === n && (n = null), i._M.CheckShowInterstitialAd("QuestStart"), this._sGameState = "Playing", this._bShowingResult = !1;
                    var a = cc.director.getScene();
                    if (a) {
                        var s = cc.find("Canvas", a),
                            c = cc.find("Canvas/Label", a),
                            l = cc.find("Canvas/LogicLayer/panel/pre_line", a),
                            u = cc.find("Canvas/LogicLayer/panel/color_svg", a).getComponent(o.default),
                            h = cc.find("Canvas/LogicLayer/lines_tar", a),
                            _ = cc.find("Canvas/LogicLayer/panel/lines_svg", a).getComponent(o.default),
                            d = cc.find("Canvas/LogicLayer/panel/num_anchor", a);
                        if (i._M.DataManager.GetDataByNameAndId("MissionConf", t)) {
                            this._oSvg = u, this._sPicId = t;
                            var f = i._M.GetPicColorData(t);
                            cc.loader.loadRes("lines/" + t, function(t, e) {
                                l.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e), l.active = !0, h.active = !1
                            }), this._oSvg.LoadData(t, function(t, e) {
                                s.runAction(cc.sequence([cc.callFunc(function() {
                                    _.DoDrawSvgTaskEx(e, "", !1, !0, 0, function() {
                                        _.setDrawCallback(null)
                                    })
                                }), cc.delayTime(.2), cc.callFunc(function() {
                                    u.DoDrawSvgTaskEx(e, f, !0, !1, 1, function() {
                                        var t = u.getAllBlocks(),
                                            e = (new Date).getTime();
                                        console.log("--nBegin--" + e), r.ShowBlockNums(t, d, c, f), console.log("--end--" + ((new Date).getTime() - e)), u.setDrawCallback(null), i._M.SEND_EVENT("GAME_EVENT", "LOAD_PIC_DATA_ALL_OK")
                                    })
                                })]))
                            })
                        }
                    }
                }, t.prototype.ShowBlockNums = function(t, e, n, i) {
                    for (var o = 1; o <= 4; o++) e.getChildByName("lv_" + o).removeAllChildren(), e.getChildByName("lv_" + o).active = !1;
                    var r = [],
                        a = (this._oGameControllor.GetLabelPool(), window.Polylabel),
                        s = {},
                        c = {},
                        l = {},
                        u = 0,
                        h = 0;
                    for (o = 0; o < t.length; o++) {
                        var _ = t[o];
                        if (_) {
                            var d = _._data.fillColor;
                            if (d && (null == s[h = d.toRGBValue()] && (s[h] = [], c[h] = d, u++, l[h] = u), s[h].push(_)), "" == i || "" != i && "0" == i[o]) {
                                r = [], t[o]._data.Curves.forEach(function(t) {
                                    r.push(t[3])
                                });
                                var f = a(r, 8),
                                    p = cc.instantiate(n);
                                this._tPathLabelMap[_.uuid] = p;
                                var g = .0667 * f[2];
                                g >= 180 && (g = 180), p.scaleY = -g, p.scaleX = g, p.position = cc.v2(f[0], f[1]), p.getComponent(cc.Label).string = "" + l[h], this.AddLabelToLevel(p, e, g)
                            }
                        }
                    }
                }, t.prototype.AddLabelToLevel = function(t, e, n) {
                    var i = 1;
                    i = n >= .5 ? 1 : n >= .3 ? 2 : n >= .2 ? 3 : 4, e.getChildByName("lv_" + i).addChild(t)
                }, t.prototype.DrawDataToTarget = function(t, e, n, i) {
                    var r = cc.find("Canvas/pre_render", i),
                        a = cc.find("Canvas/pre_render/pre_camera", i),
                        s = cc.find("Canvas/pre_render/pre_svg", i);
                    if (a) {
                        var c = 1,
                            l = s.getComponent(o.default),
                            u = a.getComponent(cc.Camera);
                        s.getComponent(o.default).DoDrawSvgTask(n, "", function() {
                            if (1 == c) return l.setHideLines(!1), l.setHideBlocks(!0), l.setDrawMode(0), l.forceDirty(), void c++;
                            if (2 == c) {
                                var t = new cc.RenderTexture;
                                s.group = "pre_render", a.active = !0, t.initWithSize(500, 500), e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t), u.targetTexture = t, u.zoomRatio = 1, u.backgroundColor = cc.Color.BLACK, u.render(s), s.group = "not_render", a.active = !1, e.active = !0, r.removeFromParent()
                            }
                        })
                    }
                }, t.prototype.SetGameController = function(t) {
                    this._oGameControllor = t
                }, Object.defineProperty(t.prototype, "CurPicId", {
                    get: function() {
                        return this._sPicId
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "IsShowTip", {
                    get: function() {
                        return this._bShowQuestTips
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.DestoryLogic = function() {
                    i._M.SEND_EVENT("GAME_EVENT", "DESTORY_LOGIC"), this._bShowQuestTips = !1
                }, t.prototype.Destory = function(t) {}, t.prototype.Passed = function(t, e) {
                    1 != this._bShowingResult && (this._bShowingResult = !0, this.SEND_LOGIC_EVENT("SHOW_PASS_QUEST", {
                        ID: this.CurPicId
                    }))
                }, t.prototype.Failed = function(t, e) {
                    1 != this._bShowingResult && (this._bShowingResult = !0, this.SEND_LOGIC_EVENT("SHOW_ERROR_MARK", {
                        ID: this.CurPicId
                    }))
                }, t.prototype.RegisterStageLogic = function(t, e) {
                    this._T_STAGE_LOGIC_CLASS[t] = e
                }, t.prototype.GetStageDataById = function(t) {
                    return this._T_STAGE_LOGIC_CLASS["Stage" + t]
                }, t.prototype.OnAccelerate = function(t, e, n) {
                    var o = "NORMAL";
                    t > .92 ? o = "RIGHT_DOWN" : t < -.92 ? o = "LEFT_DOWN" : e > .92 ? o = "HEAD_DOWN" : e < -.92 ? o = "TAIL_DOWN" : n > .92 ? o = "FRONT_DOWN" : n < -.92 && (o = "BACK_DOWN");
                    var r = [t, e, n],
                        a = this._tLastArgs;
                    if (this._tLastArgs = r, !(Math.abs(r[0] - a[0]) < .03 && Math.abs(r[1] - a[1]) < .03 && Math.abs(r[2] - a[2]) < .03 || (i._M.SEND_EVENT("GAME_EVENT", "ACCELERATER_CHANGE", {
                            LastDirection: this._sLastAccDirection,
                            CurDirection: o,
                            CurArgs: r
                        }), Math.abs(r[0] - a[0]) < .35 && Math.abs(r[1] - a[1]) < .35 && Math.abs(r[2] - a[2]) < .35))) {
                        o != this._sLastAccDirection && (this._sLastAccDirection = o);
                        var s = Date.now();
                        s - this._nLastClock < 800 ? (this._nContinueCount++, this._nContinueCount >= 3 && (i._M.SEND_EVENT("GAME_EVENT", "SHAKE_SHAKE", {}), this._nContinueCount = 0)) : this._nContinueCount = 0, this._nLastClock = s
                    }
                }, t.prototype.ON_EVENT = function(t, e, n) {
                    if ("DO_FILL_COLOR" == e) {
                        var o = n.UUID;
                        if (o) {
                            var r = this._tPathLabelMap[o];
                            r && (r.active = !1)
                        }
                    } else if ("DO_CHECK_COLOR_ALL_OK" == e) {
                        if (s = this.SVG) {
                            var a = s.getColorSaveData();
                            if (a) null == a.match("0") && (i._M.SetPicColorData(this.CurPicId, a), i._M.SEND_EVENT("GAME_EVENT", "PIC_ALL_COLOR_OK"), i._M.MofidyDataVal("TodayFinishPic", 1))
                        }
                    } else if ("FINISH_PIC" == e) {
                        var s;
                        if (s = this.SVG) {
                            var c = s.getColorSaveData().replace(new RegExp("0", "g"), "1");
                            s.setHideBlocks(!1, c, !0), i._M.SetPicColorData(this.CurPicId, c), i._M.SEND_EVENT("GAME_EVENT", "DO_CHECK_COLOR_ALL_OK")
                        }
                    }
                }, t.prototype.ON_LOGIC_EVENT = function(t, e, n) {}, t.prototype.SEND_LOGIC_EVENT = function(t, e) {
                    void 0 === e && (e = null), i._M.SEND_EVENT("LOGIC_EVENT", t, e)
                }, t.prototype.RegLogicEvents = function(t) {
                    var e = this;
                    t.forEach(function(t) {
                        i._M.REG_EVT_LISTENER("LOGIC_EVENT", t, e.ON_LOGIC_EVENT, e)
                    })
                }, Object.defineProperty(t.prototype, "SVG", {
                    get: function() {
                        return this._oSvg
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.GetLabelByPath = function(t) {
                    if (t) return this._tPathLabelMap[t.uuid]
                }, t._Instance = null, t
            }();
        n.GameLogic = a, cc._RF.pop()
    }, {
        "../../Base/init": "Init",
        "../comp/Svg": "Svg"
    }],
    GameScene: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "77a24uS/xpJwLlXCxP2oPPe", "GameScene");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = t("../comp/Svg"),
            s = t("../logic/GameLogic"),
            c = cc._decorator,
            l = c.ccclass,
            u = (c.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._nBeganLen = 0, e._nBeganScale = 0, e._tBeganTouchPos = null, e._tBeganPanelPos = null, e._oPanel = null, e._oLogicLayer = null, e._oLabelAnchor = null, e._oSvg = null, e._oLines = null, e.color_tar = null, e.select_svg = null, e.lines_tar = null, e.pre_line = null, e.pre_camera_1 = null, e.pre_camera_2 = null, e._tTouches = [], e._sCurSelColor = "", e._nCurShowLevel = 0, e._tLevelLayers = [], e._tSceneInitData = null, e._bStartGame = !1, e
                }
                return i(e, t), e.prototype.onLoad = function() {
                    var t = cc.view.getVisibleSize();
                    t.width / t.height > .57 && (this.node.getComponent(cc.Canvas).fitHeight = !0, this.node.getComponent(cc.Canvas).fitWidth = !1);
                    var e = this.Seek("LogicLayer/panel");
                    this._oPanel = e;
                    var n = this.Seek("LogicLayer");
                    this._oLogicLayer = n, this._oSvg = this.Seek("LogicLayer/panel/color_svg"), this.select_svg = this.Seek("LogicLayer/panel/select_svg"), this.pre_line = this.Seek("LogicLayer/panel/pre_line"), this._oLines = this.Seek("LogicLayer/panel/lines_svg"), this._oLabelAnchor = this.Seek("LogicLayer/panel/num_anchor");
                    for (var i = 1; i <= 4; ++i) this._tLevelLayers[i - 1] = this._oLabelAnchor.getChildByName("lv_" + i);
                    this.color_tar = this.Seek("LogicLayer/color_tar"), this.lines_tar = this.Seek("LogicLayer/lines_tar"), this.pre_camera_1 = this.Seek("pre_camera_1"), this.pre_camera_2 = this.Seek("pre_camera_2"), n.on(cc.Node.EventType.TOUCH_START, this.touchStart.bind(this), this), n.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove.bind(this), this), n.on(cc.Node.EventType.TOUCH_END, this.touchEnd.bind(this), this), n.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd.bind(this), this), r._M.REG_EVT_LISTENER("GAME_EVENT", "COLOR_CHANGED", this.ON_GAME_EVENT, this), r._M.REG_EVT_LISTENER("GAME_EVENT", "DESTORY_LOGIC", this.ON_GAME_EVENT, this), r._M.REG_EVT_LISTENER("GAME_EVENT", "HELP_OF_CUR_COLOR", this.ON_GAME_EVENT, this), r._M.REG_EVT_LISTENER("GAME_EVENT", "LOAD_PIC_DATA_ALL_OK", this.ON_GAME_EVENT, this), r._M.REG_EVT_LISTENER("GAME_EVENT", "SET_SCENE_INIT_DATA", this.ON_GAME_EVENT, this), r._M.REG_EVT_LISTENER("GAME_EVENT", "MODIFY_SCALE", this.ON_GAME_EVENT, this)
                }, e.prototype.start = function() {
                    r._M.LOG_EVENT("start_game_scene");
                    cc.view.getVisibleSize();
                    var t = new cc.RenderTexture,
                        e = new cc.RenderTexture;
                    t.initWithSize(1024, 1024), e.initWithSize(1024, 1024), this.pre_camera_1.getComponent(cc.Camera).targetTexture = t, this.pre_camera_2.getComponent(cc.Camera).targetTexture = e, this.color_tar.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t), this.lines_tar.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e), this._bStartGame = !1
                }, e.prototype.onDestroy = function() {
                    r._M.REMOVE_ALL_LISTENERS(this)
                }, e.prototype.Seek = function(t) {
                    return cc.find(t, this.node)
                }, e.prototype.touchStart = function(t) {
                    if (this._bStartGame) {
                        var e = t.getTouches();
                        if (1 == e.length) {
                            var n = e[0].getID(),
                                i = e[0].getLocation();
                            this.addTouch(n, i)
                        } else if (2 == e.length) {
                            var o = e[0].getID(),
                                r = e[1].getID(),
                                a = e[0].getLocation(),
                                s = e[1].getLocation();
                            this.addTouch(o, a), this.addTouch(r, s)
                        }
                    }
                }, e.prototype.touchMove = function(t) {
                    var e = this;
                    if (this._bStartGame) {
                        var n = t.getTouches(),
                            i = cc.v2();
                        if (n.forEach(function(t) {
                                var n = t.getID(),
                                    o = t.getLocation();
                                if (e.updateTouch(n, o), 2 == e._tTouches.length) {
                                    var r = e._tTouches[0][1],
                                        a = e._tTouches[1][1];
                                    i = r.add(a).mul(.5);
                                    var s = r.sub(a).mag(),
                                        c = e._nBeganScale * (s / e._nBeganLen);
                                    c < 1 ? c = 1 : c >= 8 && (c = 8), e._oPanel.scale = c, e.updateScale(c)
                                }
                            }), 2 == n.length) {
                            var o = this._tBeganTouchPos;
                            this._oPanel.position = this._tBeganPanelPos.add(i.sub(o))
                        }
                        this.pre_line.active = !1, this.lines_tar.active = !0
                    }
                }, e.prototype.touchEnd = function(t) {
                    var e = this;
                    if (this._bStartGame)
                        if (t.getTouches().forEach(function(t) {
                                e.removeTouch(t.getID())
                            }), 1 == this._tTouches.length) this._tBeganTouchPos = this._tTouches[0][1], this._tBeganPanelPos = this._oPanel.getPosition();
                        else {
                            var n = t.getStartLocation(),
                                i = t.getLocation();
                            if (n.sub(i).mag() < 5) {
                                var o = this._oSvg.getComponent(a.default);
                                o && o.checkPointInWitchBlock(i, this._sCurSelColor)
                            }
                            this.select_svg.getComponent(cc.Graphics).clear(), this.select_svg.stopAllActions(), this._tBeganTouchPos = null, this._tBeganPanelPos = null, this._nCurShowLevel < 1 && (this.lines_tar.active = !1, this.pre_line.active = !0)
                        }
                }, e.prototype.addTouch = function(t, e) {
                    if (!(this._tTouches.length >= 2))
                        if (0 == this._tTouches.length) this._tTouches.push([t, e]), this._tBeganTouchPos = e, this._tBeganPanelPos = this._oPanel.getPosition();
                        else if (1 == this._tTouches.length) {
                        this._tTouches.push([t, e]);
                        var n = this._tTouches[0][1],
                            i = n.add(e).mul(.5),
                            o = this._oLogicLayer.convertToNodeSpaceAR(i),
                            r = this._oSvg.convertToWorldSpace(cc.v2(0, 0));
                        this._oPanel.setPosition(o);
                        var a = this._oPanel.convertToNodeSpace(r);
                        this._oSvg.position = a, this._oLines.position = a, this.pre_line.position = a, this.select_svg.position = a, this._oLabelAnchor.position = a, this._tBeganPanelPos = o, this._tBeganTouchPos = i, this._nBeganLen = n.sub(e).mag(), this._nBeganScale = this._oPanel.scale
                    }
                }, e.prototype.updateTouch = function(t, e) {
                    var n = this,
                        i = 0;
                    this._tTouches.forEach(function(o) {
                        var r = o[0],
                            a = n._tBeganTouchPos;
                        1 == n._tTouches.length && 0 == i && (n._oPanel.position = n._tBeganPanelPos.add(e.sub(a))), r == t && (o[1] = e), i++
                    })
                }, e.prototype.removeTouch = function(t) {
                    for (var e = 0; e < 2; e++) {
                        var n = this._tTouches[e];
                        if (n && n[0] == t) return void this._tTouches.splice(e, 1)
                    }
                }, e.prototype.ON_GAME_EVENT = function(t, e, n) {
                    if ("COLOR_CHANGED" == e) {
                        var i = n.Color,
                            o = this.select_svg,
                            c = this.select_svg.getComponent(cc.Graphics);
                        if (_ = this._oSvg.getComponent(a.default)) {
                            _.doSelFillColor(i), c.clear();
                            for (var l = _.getSelColorPathData(i), u = 0; u < l.length; ++u) {
                                var h = l[u];
                                h && h._drawSelectedToCtx(c)
                            }
                            o.stopAllActions(), o.runAction(cc.sequence([cc.blink(.8, 2), cc.callFunc(function() {
                                c.clear()
                            })]))
                        }
                        this._sCurSelColor = i
                    } else if ("DESTORY_LOGIC" == e) {
                        (_ = this._oSvg.getComponent(a.default)) && r._M.SetPicColorData(_.id, _.getColorSaveData())
                    } else if ("HELP_OF_CUR_COLOR" == e) {
                        var _;
                        i = n.Color;
                        if (_ = this._oSvg.getComponent(a.default)) {
                            var d = _.getSelColorUnfilled(i),
                                f = s.GameLogic.GetInstance().GetLabelByPath(d);
                            if (f) {
                                f.color = cc.Color.RED;
                                var p = f.convertToWorldSpaceAR(cc.v2(0, 0)),
                                    g = this._oLogicLayer.convertToNodeSpaceAR(p),
                                    S = this._oSvg.convertToWorldSpace(cc.v2(0, 0));
                                this._oPanel.position = g;
                                var v = this._oPanel.convertToNodeSpace(S);
                                this._oSvg.position = v, this._oLines.position = v, this.pre_line.position = v, this._oLabelAnchor.position = v, this.select_svg.position = v, this._oPanel.stopAllActions(), this._oPanel.runAction(cc.spawn([cc.moveTo(.2, cc.v2(0, 0)), cc.scaleTo(.2, 6)])), this.updateScale(6), this._nCurShowLevel < 1 ? (this.lines_tar.active = !1, this.pre_line.active = !0) : (this.lines_tar.active = !0, this.pre_line.active = !1)
                            }
                        }
                    } else if ("LOAD_PIC_DATA_ALL_OK" == e) this._bStartGame = !0, r._M.UIManager.ShowUI("UIGame", this._tSceneInitData), setTimeout(function() {
                        r._M.UIManager.CloseUI("UIWaiting")
                    }, 500);
                    else if ("SET_SCENE_INIT_DATA" == e) this._tSceneInitData = n;
                    else if ("MODIFY_SCALE" == e) {
                        var y = n.Val;
                        y <= 1 && (y = 1), y >= 8 && (y = 8), this._oPanel.scale = y, this.updateScale(y), this._nCurShowLevel < 1 ? (this.lines_tar.active = !1, this.pre_line.active = !0) : (this.lines_tar.active = !0, this.pre_line.active = !1)
                    }
                }, e.prototype.updateScale = function(t) {
                    if (this._oPanel) {
                        var e = 0;
                        e = t > 7 ? 4 : t >= 4.5 ? 3 : t >= 3 ? 2 : t >= 1.2 ? 1 : 0, this._nCurShowLevel = e;
                        for (var n = 1; n <= 4; n++) this._tLevelLayers[n - 1].active = e >= n
                    }
                }, e = o([l], e)
            }(cc.Component));
        n.default = u, cc._RF.pop()
    }, {
        "../../Base/init": "Init",
        "../comp/Svg": "Svg",
        "../logic/GameLogic": "GameLogic"
    }],
    GoldPanel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7b847Xe3q5AeauVfuHC7jnh", "GoldPanel");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.gold = null, e.gold_label = null, e
                }
                return i(e, t), e.prototype.start = function() {
                    r._M.REG_EVT_LISTENER("GAME_EVENT", "MODIFY_GOLD", this.ON_GAME_EVENT, this), this.UpdateGoldLabel()
                }, e.prototype.onDestroy = function() {
                    r._M.REMOVE_ALL_LISTENERS(this)
                }, e.prototype.UpdateGoldLabel = function() {
                    this.gold_label.string = "" + r._M.GetDataVal("Gold")
                }, e.prototype.RunAddGoldAnim = function() {
                    var t = this,
                        e = this.gold,
                        n = this.node;
                    if (e && n)
                        for (var i = 0; i < 5; i++) {
                            var o = cc.instantiate(e);
                            o.scale = 0, o.y = -30, n.addChild(o), o.runAction(cc.sequence([cc.delayTime(.1 * i), cc.spawn([cc.scaleTo(1, .5), cc.rotateBy(1, 720 * Math.random() - 360), cc.jumpBy(1, cc.v2(60 * Math.random() - 30, 40), 50 * Math.random() + 20, 1)]), cc.callFunc(function() {
                                t.UpdateGoldLabel()
                            }), cc.removeSelf()]))
                        }
                }, e.prototype.ON_GAME_EVENT = function(t, e, n) {
                    "MODIFY_GOLD" == e && (parseInt(n.Gold) > 0 ? this.RunAddGoldAnim() : this.UpdateGoldLabel())
                }, o([c(cc.Node)], e.prototype, "gold", void 0), o([c(cc.Label)], e.prototype, "gold_label", void 0), e = o([s], e)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    ID: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1b5a5+ZpKhHV4NGcmvGYCpy", "ID"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        for (var i = [], o = 48; o <= 57; ++o) i.push(o);
        for (o = 65; o <= 90; ++o) i.push(o);
        var r = {
            GetRandomStr: function(t) {
                void 0 === t && (t = 20);
                for (var e = i.length, n = "", o = 0; o < t; ++o) {
                    var r = i[Math.ceil(Math.random() * e) - 1];
                    n += String.fromCharCode(r)
                }
                return n
            },
            UUID: function() {
                return r.GetRandomStr(64)
            },
            PlayFabID: function() {
                return "P" + r.GetRandomStr(19)
            }
        };
        n.ID = r, cc._RF.pop()
    }, {}],
    Init: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "0a1c8ySi9VHL7VmmV8CZ9yU", "Init"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("./UIUtility/UIBaseClass"),
            o = t("./AppBase/DataManager"),
            r = t("./UIUtility/UIManager"),
            a = t("./AppBase/EventsManager"),
            s = t("./AppBase/LocalData"),
            c = t("./AppBase/PlayFabHelper"),
            l = t("./AppBase/AudioUtil"),
            u = t("./SDK/SdkUtil"),
            h = t("./Common/ID"),
            _ = t("./Common/CallbackMgr"),
            d = t("./AppBase/SvgMgr"),
            f = t("./Common/PolygonSeparator"),
            p = t("./Common/TimeUtility"),
            g = {
                UIBaseClass: i.UIBaseClass,
                DataManager: o.DataManager.GetInstance(),
                UIManager: r.UIManager.GetInstance(),
                EventsManager: a.EventsManager.GetInstance(),
                LocalData: s.LocalData.GetInstance(),
                PlayFabHelper: c.PlayFabHelper.GetInstance(),
                CallbackMgr: _.CallbackMgr.GetInstance(),
                AudioUtil: l.AudioUtil.getInstance(),
                TimeUtility: p.TimeUtility.GetInstance(),
                SvgMgr: d.SvgMgr.GetInstance(),
                PolygonUtils: f.PolygonUtils,
                _tUserInfo: null,
                OverFlowPoint: 0,
                ID: h.ID,
                CurSound: "",
                CurMusic: "",
                PicData: {},
                InitUnlockPic: {},
                SDK: u.SdkUtil.InitByPlatform(),
                LANG: "CH",
                FORMAT: cc.js.formatStr,
                SEND_EVENT: function(t, e, n) {
                    void 0 === n && (n = null), a.EventsManager.GetInstance().DoNotify(t, e, n)
                },
                LOG_EVENT: function(t, e) {
                    void 0 === e && (e = ""), "START_QUEST" == t || "FINISH_QUEST" == t || "FAILED_QUEST" == t ? a.EventsManager.GetInstance().DoNotify("LOG_EVENT", t, {
                        Val: e
                    }) : a.EventsManager.GetInstance().DoNotify("LOG_EVENT", "CUSTOM_EVENT", {
                        Val: t
                    })
                },
                DoTransition: function(t) {
                    g.SEND_EVENT("GAME_EVENT", "SHOW_TRANSITION"), t && setTimeout(function() {
                        t()
                    }, 300)
                },
                REG_EVT_LISTENER: function(t, e, n, i) {
                    void 0 === n && (n = null), void 0 === i && (i = null), a.EventsManager.GetInstance().AddObservedEvent(t, e, {
                        Target: i,
                        Callback: n
                    })
                },
                REMOVE_ALL_LISTENERS: function(t) {
                    a.EventsManager.GetInstance().RemoveObjectAllHandlers(t)
                },
                GET_GAME_STR: function(t) {
                    var e = g.DataManager.GetDataByNameAndId("GameString", t);
                    return null != e ? e[g.LANG] : ""
                },
                SET_LANGUAGE: function(t) {
                    g.LANG = t
                },
                MofidyDataVal: function(t, e) {
                    g.LocalData.MofidyVal(t, parseInt(e))
                },
                SetDataVal: function(t, e) {
                    g.LocalData.SetVal(t, e)
                },
                GetDataVal: function(t) {
                    return g.LocalData.GetVal(t)
                },
                CONST: function(t) {
                    var e = g.DataManager.GetDataByNameAndId("Const", t);
                    if (null != e && void 0 != e) return "I" == e.Type ? parseInt(e.Value) : e.Value
                },
                PlaySound: function(t) {
                    var e = o.DataManager.GetInstance().GetDataByNameAndId("Sounds", t);
                    null != e ? (l.AudioUtil.getInstance().playEffect(e.Name), g.CurSound = t) : console.log(g.FORMAT("can't find sound ID=%s", t))
                },
                PlayMusic: function(t) {
                    var e = o.DataManager.GetInstance().GetDataByNameAndId("Sounds", t);
                    null != e ? (l.AudioUtil.getInstance().playMusic(e.Name), g.CurMusic = t) : console.log(g.FORMAT("can't find music ID=%s", t))
                },
                CONFIG: {
                    OPEN_DEBUG_HELPER: !1,
                    MISS_NO_ORDER: !1,
                    MISS_ALL_OPEN: !0,
                    SHOW_FPS: !0,
                    PLAY_FAB_ID: "2602A",
                    DATA_VER: 1
                },
                CallbackEntry: function(t, e) {
                    console.log(t, e), _.CallbackMgr.GetInstance().DoCallbackFunc(t, e)
                },
                SetGuideOK: function(t) {
                    var e = g.GetDataVal("Guide");
                    e && (e[2] = !0)
                },
                IsGuideOK: function(t) {
                    var e = g.GetDataVal("Guide");
                    if (e) return e[t]
                },
                SetPicColorData: function(t, e) {
                    if (e && "" != e) {
                        var n = window.Pako,
                            i = window.Base64,
                            o = n.deflate(e, {
                                gzip: !0,
                                to: "string"
                            }),
                            r = i.encode(o);
                        cc.sys.localStorage.setItem(t, r)
                    }
                },
                GetPicColorData: function(t) {
                    var e = cc.sys.localStorage.getItem(t);
                    if (!e || "" == e) return "";
                    var n = window.Pako,
                        i = window.Base64.decode(e);
                    return n.inflate(i, {
                        gzip: !0,
                        to: "string"
                    })
                },
                UpdatePicStatu: function(t) {
                    var e = g.GetDataVal("PicStatu");
                    if (e) {
                        for (var n = 0; n < e.length; ++n)
                            if (e[n] == t) {
                                e.splice(n, 1);
                                break
                            } e.push(t), g.SetDataVal("PicStatu", e)
                    }
                },
                RemovePicStatu: function(t) {
                    var e = g.GetDataVal("PicStatu");
                    if (e) {
                        for (var n = [], i = 0; i < e.length; ++i) e[i] != t && n.push(e[i]);
                        g.SetDataVal("PicStatu", n)
                    }
                },
                GetPicStatu: function() {
                    return g.GetDataVal("PicStatu")
                },
                IsUnlockedPic: function(t) {
                    var e = g.GetDataVal("UnlockedPic");
                    if (e && 0 != g.DataManager.GetDataByNameAndId("MissionConf", t).UnlockCond) return e[t];
                    return !0
                },
                DoUnlockedPic: function(t) {
                    var e = g.GetDataVal("UnlockedPic");
                    e && (e[t] = !0)
                },
                ShowSystemTips: function(t) {
                    g.UIManager.ShowUI("UISystemTips", t)
                },
                ShowSystemTipsEx: function(t) {
                    g.UIManager.ShowUI("UISystemTips", g.GET_GAME_STR(t))
                },
                ShowSystemDialog: function(t, e, n) {
                    void 0 === e && (e = null), void 0 === n && (n = null), g.UIManager.ShowUI("UIDialog", {
                        Tips: t,
                        Confirm: e,
                        Cancel: n
                    })
                },
                ShowSystemDialogEX: function(t, e, n) {
                    void 0 === e && (e = null), void 0 === n && (n = null), g.UIManager.ShowUI("UIDialog", {
                        Tips: g.GET_GAME_STR(t),
                        Confirm: e,
                        Cancel: n
                    })
                },
                CheckShowInterstitialAd: function(t) {}
            };
        n._M = g, window._BASE = g, cc._RF.pop()
    }, {
        "./AppBase/AudioUtil": "AudioUtil",
        "./AppBase/DataManager": "DataManager",
        "./AppBase/EventsManager": "EventsManager",
        "./AppBase/LocalData": "LocalData",
        "./AppBase/PlayFabHelper": "PlayFabHelper",
        "./AppBase/SvgMgr": "SvgMgr",
        "./Common/CallbackMgr": "CallbackMgr",
        "./Common/ID": "ID",
        "./Common/PolygonSeparator": "PolygonSeparator",
        "./Common/TimeUtility": "TimeUtility",
        "./SDK/SdkUtil": "SdkUtil",
        "./UIUtility/UIBaseClass": "UIBaseClass",
        "./UIUtility/UIManager": "UIManager"
    }],
    LaunchScene: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "dbe94vf6OFHv6wnOT8F1U1X", "LaunchScene");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = t("../enum/GameDataDef"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.studio_logo = null, e._bUpdateOk = !1, e._bLoadedOk = !1, e._bSwitingScene = !1, e
                }
                return i(e, t), e.prototype.onLoad = function() {
                    this.studio_logo.opacity = 0, r._M.LocalData.SetDataDefEx(a.GameDataDef);
                    null != r._M.DataManager.GetDataByName("Const") && void 0 != r._M.DataManager.GetDataByName("Const") || (["Const", "GameString", "MissionConf", "Sounds", "TypesView", "ShareConfig", "SiginConf"].forEach(function(t) {
                        r._M.DataManager.LoadJsonData("config/" + t, t, !0)
                    }), r._M.LocalData.LoadAllData())
                }, e.prototype.start = function() {
                    var t = this;
                    r._M.LOG_EVENT("start_launch_scene"), this.studio_logo.opacity = 0, this.studio_logo.runAction(cc.sequence([cc.fadeIn(.6), cc.delayTime(.8), cc.fadeOut(.6), cc.callFunc(function() {
                        t._bUpdateOk = !0, r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                            Name: "Menu"
                        })
                    })])), this._bLoadedOk = !0, r._M.AudioUtil.init()
                }, o([l(cc.Node)], e.prototype, "studio_logo", void 0), e = o([c], e)
            }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {
        "../../Base/init": "Init",
        "../enum/GameDataDef": "GameDataDef"
    }],
    LocalData: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "cf390Loz7dFI7GVo8sM/9B2", "LocalData"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
                return function(t, e, n, i, o, r) {
                    void 0 === i && (i = !1), void 0 === o && (o = -16777215), void 0 === r && (r = 16777215), this._sName = "", this._sType = "", this._default = null, this._bResetDaliy = !1, this._nMin = -16777215, this._nMax = 16777215, this._sName = t, this._sType = e, this._default = n, this._bResetDaliy = i, this._nMin = o, this._nMax = r
                }
            }(),
            o = function() {
                function t() {
                    this._bLoaded = !1, this._tDataDef = {}, this._tGameData = {}, this._pOnLoadedCallback = null
                }
                return t.GetInstance = function() {
                    return null == this._Instance && (this._Instance = new t), this._Instance
                }, t.prototype.AddDataDef = function(t) {
                    null != t && null != t._sName && (this._tDataDef[t._sName] = t)
                }, t.prototype.AddDataDefEx = function(t) {
                    this.AddDataDef(new i(t[0], t[1], t[2], t[3], t[4], t[5]))
                }, t.prototype.SetDataDef = function(t) {
                    for (var e = 0, n = t; e < n.length; e++) {
                        var i = n[e];
                        this._tDataDef[i._sName] = i
                    }
                }, t.prototype.SetDataDefEx = function(t) {
                    for (var e = 0; e < t.length; ++e) this.AddDataDefEx(t[e])
                }, t.prototype.SetVal = function(t, e) {
                    null != this._tDataDef[t] && (this._tGameData[t] = e)
                }, t.prototype.GetVal = function(t) {
                    if (null != this._tDataDef[t]) return this._tGameData[t]
                }, t.prototype.MofidyVal = function(t, e) {
                    var n = this._tDataDef[t];
                    if (null != n && "number" == n._sType) {
                        var i = this._tGameData[t] + e;
                        i = (i = i > n._nMax ? n._nMax : i) < n._nMin ? n._nMin : i, this._tGameData[t] = i
                    }
                }, t.prototype.LoadAllData = function() {
                    var t = cc.sys.localStorage.getItem("GameData");
                    this.DecodeGameData(t), this.ResetDaliy(), 1 != this._bLoaded && (this._bLoaded = !0)
                }, t.prototype.ResetDaliy = function() {
                    var t = new Date,
                        e = new Date;
                    e.setDate(t.getDate()), e.setHours(0, 0, 0, 0);
                    var n = e.getTime(),
                        i = this.GetVal("LastResetTime");
                    if (console.log("nTodayBeginTimeVal " + n), console.log("nLastResetTime " + i), n - i >= 864e5) {
                        var o = this._tGameData;
                        if (null != o)
                            for (var r in this._tDataDef) {
                                var a = this._tDataDef[r];
                                null != a && null != o[r] && a._bResetDaliy && this.SetVal(a._sName, a._default)
                            }
                        this.SetVal("LastResetTime", n)
                    }
                }, t.prototype.DecodeGameData = function(t) {
                    null != t && "" != t || (t = "{}");
                    var e = JSON.parse(t);
                    for (var n in null == e && (e = {}), this._tDataDef) {
                        var i = this._tDataDef[n];
                        if (null != i)
                            if (null != e[n]) {
                                if ("Array" == i._sType) e[n].length || (e[n] = []);
                                this.SetVal(i._sName, e[n])
                            } else this.SetVal(i._sName, i._default)
                    }
                    null != this._pOnLoadedCallback && this._pOnLoadedCallback()
                }, t.prototype.SaveAllData = function() {
                    if (this._bLoaded) {
                        var t = JSON.stringify(this._tGameData);
                        null != t && this._sGameData != t && (this._sGameData = t, cc.sys.localStorage.setItem("GameData", t))
                    }
                }, t.prototype.ClearAllData = function() {
                    this._tGameData = {}, this.SaveAllData()
                }, t.prototype.OnAllDataLoaded = function(t) {
                    this._pOnLoadedCallback = t
                }, t._Instance = null, t
            }();
        n.LocalData = o, cc._RF.pop()
    }, {}],
    MenuScene: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f6959sAJQJFeZCTUY9yHuRC", "MenuScene");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/Init"),
            a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.onLoad = function() {
                    var t = cc.view.getVisibleSize();
                    t.width / t.height > .57 && (this.node.getComponent(cc.Canvas).fitHeight = !0, this.node.getComponent(cc.Canvas).fitWidth = !1), r._M.REG_EVT_LISTENER("GAME_EVENT", "SET_SCENE_INIT_DATA", this.ON_GAME_EVENT, this)
                }, e.prototype.start = function() {
                    r._M.LOG_EVENT("start_menu_scene")
                }, e.prototype.onDestroy = function() {
                    r._M.REMOVE_ALL_LISTENERS(this)
                }, e.prototype.ON_GAME_EVENT = function(t, e, n) {
                    "SET_SCENE_INIT_DATA" == e && (void 0 != n.BackMenuType ? r._M.UIManager.ShowUI("UIMenu", n) : r._M.UIManager.ShowUI("UIMenu"))
                }, e = o([s], e)
            }(cc.Component));
        n.default = c, cc._RF.pop()
    }, {
        "../../Base/Init": "Init"
    }],
    OppoUtil: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2948doghG9IurRtcvRPWEor", "OppoUtil"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {
                this._qg = window.qg, this.init()
            }
            return Object.defineProperty(t.prototype, "QuickGame", {
                get: function() {
                    return this._qg
                },
                enumerable: !0,
                configurable: !0
            }), t.getInstance = function() {
                return this.instance || (this.instance = new t), this.instance
            }, t.prototype.init = function() {
                this._qg.initAdService({
                    appId: "xxx",
                    isDebug: !1,
                    success: function(t) {
                        console.log("succ")
                    },
                    fail: function(t) {
                        console.log("fail:" + t.code + t.msg)
                    },
                    complete: function(t) {
                        console.log("complete:")
                    }
                })
            }, t.prototype.initBannerAd = function(t) {
                return this._qg.createBannerAd({
                    posId: t
                })
            }, t.prototype.initRewardedVideoAd = function(t) {
                var e = this._qg.createRewardedVideoAd({
                    posId: t
                });
                return e.onError(function() {}), e
            }, t
        }();
        n.default = i, cc._RF.pop()
    }, {}],
    PlayFabHelper: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d8353M01CZCQKrFsR8biTxN", "PlayFabHelper"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("./LocalData"),
            o = t("./EventsManager"),
            r = t("../Common/ID"),
            a = t("../Common/PlayFab/PlayFab"),
            s = i.LocalData.GetInstance(),
            c = a.ClientApi,
            l = function() {
                function t() {
                    this._sOnlineParamName = "", this._tOnlineParms = null, this._oClientAPI = c
                }
                return t.GetInstance = function() {
                    return null == this._Instance && (this._Instance = new t), this._Instance
                }, Object.defineProperty(t.prototype, "API", {
                    get: function() {
                        return this._oClientAPI
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.InitByDataVer = function(t) {
                    switch (cc.sys.platform) {
                        case cc.sys.ANDROID:
                            this._sOnlineParamName = "Online_Params_Android_" + t;
                            break;
                        case cc.sys.IPAD:
                        case cc.sys.IPHONE:
                            this._sOnlineParamName = "Online_Params_IOS_" + t;
                            break;
                        default:
                            this._sOnlineParamName = "Online_Params_Android_" + t
                    }
                }, t.prototype.Start = function(t, e) {
                    a.settings.titleId = t, this.CheckAndKeepLogin(), this.InitByDataVer(e)
                }, t.prototype.CheckAndKeepLogin = function() {
                    var t = this.GetCustomID();
                    this.LoginWithCustomID(t)
                }, t.prototype.GetCustomID = function() {
                    var t = s.GetVal("PlayFabID");
                    if (null != t && "" != t) return t;
                    var e = r.ID.PlayFabID();
                    return s.SetVal("PlayFabID", e), s.SaveAllData(), e
                }, t.prototype.SetOnlineParms = function(t) {
                    this._tOnlineParms = t, o.EventsManager.GetInstance().DoNotify("GAME_EVENT", "UPDATE_ONLINE_PARMAS", t)
                }, t.prototype.GetOnlineParms = function() {
                    return this._tOnlineParms
                }, t.prototype.LoginWithCustomID = function(t, e) {
                    void 0 === e && (e = null);
                    var n = {
                        TitleId: a.settings.titleId,
                        CustomId: t,
                        CreateAccount: !0
                    };
                    this.SendRequest("LoginWithCustomID", n, e)
                }, t.prototype.GetTitleData = function(t, e) {
                    void 0 === e && (e = null);
                    var n = {
                        Keys: t
                    };
                    this.SendRequest("GetTitleData", n, e)
                }, t.prototype.OnLoginWithCustomIDBack = function(t, e) {
                    1 == t && this.GetTitleData([this._sOnlineParamName])
                }, t.prototype.OnGetTitleDataBack = function(t, e) {
                    if (1 == t) {
                        var n = e.Data[this._sOnlineParamName];
                        console.log("---------setOnlineParms--------"), console.log(n), this.SetOnlineParms(JSON.parse(n))
                    }
                }, t.prototype.SendRequest = function(t, e, n) {
                    var i = this;
                    void 0 === e && (e = null), void 0 === n && (n = null);
                    var o = c[t];
                    o && (console.log("[API C->S]: " + t + JSON.stringify(e)), o.bind(c)(e, function(e, o) {
                        if (null != e) {
                            var r = "On" + t + "Back",
                                a = e.data ? e.data : {};
                            if (console.log("[API S->C]:" + t + JSON.stringify(a)), null != n) null != e ? n(!0, e.data) : n(!1, o.data);
                            else {
                                var s = i[r];
                                null != s ? null != e && 200 == e.code ? s.bind(i)(!0, e.data) : s.bind(i)(!1, o.data) : console.log("[API S->C]:no Handler " + r)
                            }
                        } else console.log(o)
                    }))
                }, t._Instance = null, t
            }();
        n.PlayFabHelper = l, cc._RF.pop()
    }, {
        "../Common/ID": "ID",
        "../Common/PlayFab/PlayFab": "PlayFab",
        "./EventsManager": "EventsManager",
        "./LocalData": "LocalData"
    }],
    PlayFab: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "0d1f5YBXOhCsroHoOLtL2Xd", "PlayFab"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = void 0 !== i ? i : {};
        i.settings || (i.settings = {
            titleId: null,
            developerSecretKey: null,
            advertisingIdType: null,
            advertisingIdValue: null,
            GlobalHeaderInjection: null,
            disableAdvertising: !1,
            AD_TYPE_IDFA: "Idfa",
            AD_TYPE_ANDROID_ID: "Adid"
        }), i._internalSettings || (i._internalSettings = {
            entityToken: null,
            sdkVersion: "1.33.181001",
            requestGetParams: {
                sdk: "JavaScriptSDK-1.33.181001"
            },
            sessionTicket: null,
            verticalName: null,
            productionServerUrl: ".playfabapi.com",
            errorTitleId: "Must be have PlayFab.settings.titleId set to call this method",
            errorLoggedIn: "Must be logged in to call this method",
            errorEntityToken: "You must successfully call GetEntityToken before calling this",
            errorSecretKey: "Must have PlayFab.settings.developerSecretKey set to call this method",
            GetServerUrl: function() {
                return "http" !== i._internalSettings.productionServerUrl.substring(0, 4) ? i._internalSettings.verticalName ? "https://" + i._internalSettings.verticalName + i._internalSettings.productionServerUrl : "https://" + i.settings.titleId + i._internalSettings.productionServerUrl : i._internalSettings.productionServerUrl
            },
            InjectHeaders: function(t, e) {
                if (e)
                    for (var n in e) try {
                        t.setRequestHeader(gHeaderKey, e[n])
                    } catch (t) {
                        console.log("Failed to append header: " + n + " = " + e[n] + "Error: " + t)
                    }
            },
            ExecuteRequest: function(t, e, n, o, r, a, s) {
                if (null != r && "function" != typeof r) throw "Callback must be null of a function";
                null == e && (e = {});
                var c = new Date,
                    l = JSON.stringify(e),
                    u = [t],
                    h = i._internalSettings.requestGetParams;
                if (null != h) {
                    var _ = !0;
                    for (var d in h) _ ? (u.push("?"), _ = !1) : u.push("&"), u.push(d), u.push("="), u.push(h[d])
                }
                var f = u.join(""),
                    p = new XMLHttpRequest;
                p.open("POST", f, !0), p.setRequestHeader("Content-Type", "application/json"), p.setRequestHeader("X-PlayFabSDK", "JavaScriptSDK-" + i._internalSettings.sdkVersion), null != n && p.setRequestHeader(n, o), i._internalSettings.InjectHeaders(p, i.settings.GlobalHeaderInjection), i._internalSettings.InjectHeaders(p, s), p.onloadend = function() {
                    if (null != r) {
                        var t;
                        try {
                            t = JSON.parse(p.responseText)
                        } catch (e) {
                            t = {
                                code: 503,
                                status: "Service Unavailable",
                                error: "Connection error",
                                errorCode: 2,
                                errorMessage: p.responseText
                            }
                        }
                        t.CallBackTimeMS = new Date - c, t.Request = e, t.CustomData = a, 200 === t.code ? r(t, null) : r(null, t)
                    }
                }, p.onerror = function() {
                    if (null != r) {
                        var t;
                        try {
                            t = JSON.parse(p.responseText)
                        } catch (e) {
                            t = {
                                code: 503,
                                status: "Service Unavailable",
                                error: "Connection error",
                                errorCode: 2,
                                errorMessage: p.responseText
                            }
                        }
                        t.CallBackTimeMS = new Date - c, t.Request = e, t.CustomData = a, r(null, t)
                    }
                }, p.send(l)
            }
        }), i.buildIdentifier = "jbuild_javascriptsdk__sdk-slave2016-3_0", i.sdkVersion = "1.33.181001", i.GenerateErrorReport = function(t) {
            if (null == t) return "";
            var e = t.errorMessage;
            for (var n in t.errorDetails)
                for (var i in t.errorDetails[n]) e += "\n" + n + ": " + t.errorDetails[n][i];
            return e
        }, i.ClientApi = {
            IsClientLoggedIn: function() {
                return null != i._internalSettings.sessionTicket && i._internalSettings.sessionTicket.length > 0
            },
            ForgetAllCredentials: function() {
                i._internalSettings.sessionTicket = null, i._internalSettings.entityToken = null
            },
            AcceptTrade: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/AcceptTrade", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            AddFriend: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/AddFriend", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            AddGenericID: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/AddGenericID", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            AddOrUpdateContactEmail: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/AddOrUpdateContactEmail", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            AddSharedGroupMembers: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/AddSharedGroupMembers", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            AddUsernamePassword: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/AddUsernamePassword", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            AddUserVirtualCurrency: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/AddUserVirtualCurrency", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            AndroidDevicePushNotificationRegistration: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/AndroidDevicePushNotificationRegistration", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            AttributeInstall: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/AttributeInstall", t, "X-Authorization", i._internalSettings.sessionTicket, function(t, n) {
                    i.settings.advertisingIdType += "_Successful", null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            CancelTrade: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/CancelTrade", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            ConfirmPurchase: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/ConfirmPurchase", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            ConsumeItem: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/ConsumeItem", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            ConsumeXboxEntitlements: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/ConsumeXboxEntitlements", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            CreateSharedGroup: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/CreateSharedGroup", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            ExecuteCloudScript: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/ExecuteCloudScript", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetAccountInfo: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetAccountInfo", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetAllUsersCharacters: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetAllUsersCharacters", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetCatalogItems: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetCatalogItems", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetCharacterData: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetCharacterData", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetCharacterInventory: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetCharacterInventory", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetCharacterLeaderboard: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetCharacterLeaderboard", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetCharacterReadOnlyData: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetCharacterReadOnlyData", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetCharacterStatistics: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetCharacterStatistics", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetContentDownloadUrl: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetContentDownloadUrl", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetCurrentGames: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetCurrentGames", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetFriendLeaderboard: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetFriendLeaderboard", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetFriendLeaderboardAroundPlayer: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetFriendLeaderboardAroundPlayer", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetFriendsList: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetFriendsList", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetGameServerRegions: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetGameServerRegions", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetLeaderboard: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetLeaderboard", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetLeaderboardAroundCharacter: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetLeaderboardAroundCharacter", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetLeaderboardAroundPlayer: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetLeaderboardAroundPlayer", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetLeaderboardForUserCharacters: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetLeaderboardForUserCharacters", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPaymentToken: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPaymentToken", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPhotonAuthenticationToken: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPhotonAuthenticationToken", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayerCombinedInfo: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayerCombinedInfo", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayerProfile: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayerProfile", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayerSegments: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayerSegments", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayerStatistics: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayerStatistics", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayerStatisticVersions: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayerStatisticVersions", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayerTags: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayerTags", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayerTrades: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayerTrades", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayFabIDsFromFacebookIDs: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromFacebookIDs", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayFabIDsFromFacebookInstantGamesIds: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromFacebookInstantGamesIds", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayFabIDsFromGameCenterIDs: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromGameCenterIDs", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayFabIDsFromGenericIDs: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromGenericIDs", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayFabIDsFromGoogleIDs: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromGoogleIDs", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayFabIDsFromKongregateIDs: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromKongregateIDs", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayFabIDsFromNintendoSwitchDeviceIds: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromNintendoSwitchDeviceIds", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayFabIDsFromSteamIDs: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromSteamIDs", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPlayFabIDsFromTwitchIDs: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPlayFabIDsFromTwitchIDs", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPublisherData: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPublisherData", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetPurchase: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetPurchase", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetSharedGroupData: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetSharedGroupData", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetStoreItems: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetStoreItems", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetTime: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetTime", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetTitleData: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetTitleData", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetTitleNews: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetTitleNews", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetTitlePublicKey: function(t, e, n, o) {
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetTitlePublicKey", t, null, null, e, n, o)
            },
            GetTradeStatus: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetTradeStatus", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetUserData: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetUserData", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetUserInventory: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetUserInventory", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetUserPublisherData: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetUserPublisherData", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetUserPublisherReadOnlyData: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetUserPublisherReadOnlyData", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetUserReadOnlyData: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetUserReadOnlyData", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            GetWindowsHelloChallenge: function(t, e, n, o) {
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GetWindowsHelloChallenge", t, null, null, e, n, o)
            },
            GrantCharacterToUser: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/GrantCharacterToUser", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            LinkAndroidDeviceID: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LinkAndroidDeviceID", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            LinkCustomID: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LinkCustomID", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            LinkFacebookAccount: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LinkFacebookAccount", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            LinkFacebookInstantGamesId: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LinkFacebookInstantGamesId", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            LinkGameCenterAccount: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LinkGameCenterAccount", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            LinkGoogleAccount: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LinkGoogleAccount", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            LinkIOSDeviceID: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LinkIOSDeviceID", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            LinkKongregate: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LinkKongregate", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            LinkNintendoSwitchDeviceId: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LinkNintendoSwitchDeviceId", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            LinkSteamAccount: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LinkSteamAccount", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            LinkTwitch: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LinkTwitch", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            LinkWindowsHello: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LinkWindowsHello", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            LinkXboxAccount: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LinkXboxAccount", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            LoginWithAndroidDeviceID: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithAndroidDeviceID", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            LoginWithCustomID: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithCustomID", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            LoginWithEmailAddress: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithEmailAddress", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            LoginWithFacebook: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithFacebook", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            LoginWithFacebookInstantGamesId: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithFacebookInstantGamesId", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            LoginWithGameCenter: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithGameCenter", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            LoginWithGoogleAccount: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithGoogleAccount", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            LoginWithIOSDeviceID: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithIOSDeviceID", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            LoginWithKongregate: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithKongregate", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            LoginWithNintendoSwitchDeviceId: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithNintendoSwitchDeviceId", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            LoginWithPlayFab: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithPlayFab", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            LoginWithSteam: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithSteam", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            LoginWithTwitch: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithTwitch", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            LoginWithWindowsHello: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithWindowsHello", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            LoginWithXbox: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/LoginWithXbox", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            Matchmake: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/Matchmake", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            OpenTrade: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/OpenTrade", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            PayForPurchase: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/PayForPurchase", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            PurchaseItem: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/PurchaseItem", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            RedeemCoupon: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/RedeemCoupon", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            RegisterForIOSPushNotification: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/RegisterForIOSPushNotification", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            RegisterPlayFabUser: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/RegisterPlayFabUser", t, null, null, function(t, n) {
                    null != t && null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket, i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            RegisterWithWindowsHello: function(t, e, n, o) {
                if (t.TitleId = i.settings.titleId ? i.settings.titleId : t.TitleId, !t.TitleId) throw i._internalSettings.errorTitleId;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/RegisterWithWindowsHello", t, null, null, function(t, n) {
                    null != t && (null != t.data.SessionTicket && (i._internalSettings.sessionTicket = t.data.SessionTicket), null != t.data.EntityToken && (i._internalSettings.entityToken = t.data.EntityToken.EntityToken), i.ClientApi._MultiStepClientLogin(t.data.SettingsForUser.NeedsAttribution)), null != e && "function" == typeof e && e(t, n)
                }, n, o)
            },
            RemoveContactEmail: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/RemoveContactEmail", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            RemoveFriend: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/RemoveFriend", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            RemoveGenericID: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/RemoveGenericID", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            RemoveSharedGroupMembers: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/RemoveSharedGroupMembers", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            ReportDeviceInfo: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/ReportDeviceInfo", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            ReportPlayer: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/ReportPlayer", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            RestoreIOSPurchases: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/RestoreIOSPurchases", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            SendAccountRecoveryEmail: function(t, e, n, o) {
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/SendAccountRecoveryEmail", t, null, null, e, n, o)
            },
            SetFriendTags: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/SetFriendTags", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            SetPlayerSecret: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/SetPlayerSecret", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            StartGame: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/StartGame", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            StartPurchase: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/StartPurchase", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            SubtractUserVirtualCurrency: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/SubtractUserVirtualCurrency", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlinkAndroidDeviceID: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlinkAndroidDeviceID", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlinkCustomID: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlinkCustomID", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlinkFacebookAccount: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlinkFacebookAccount", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlinkFacebookInstantGamesId: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlinkFacebookInstantGamesId", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlinkGameCenterAccount: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlinkGameCenterAccount", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlinkGoogleAccount: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlinkGoogleAccount", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlinkIOSDeviceID: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlinkIOSDeviceID", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlinkKongregate: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlinkKongregate", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlinkNintendoSwitchDeviceId: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlinkNintendoSwitchDeviceId", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlinkSteamAccount: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlinkSteamAccount", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlinkTwitch: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlinkTwitch", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlinkWindowsHello: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlinkWindowsHello", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlinkXboxAccount: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlinkXboxAccount", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlockContainerInstance: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlockContainerInstance", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UnlockContainerItem: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UnlockContainerItem", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UpdateAvatarUrl: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UpdateAvatarUrl", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UpdateCharacterData: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UpdateCharacterData", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UpdateCharacterStatistics: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UpdateCharacterStatistics", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UpdatePlayerStatistics: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UpdatePlayerStatistics", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UpdateSharedGroupData: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UpdateSharedGroupData", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UpdateUserData: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UpdateUserData", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UpdateUserPublisherData: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UpdateUserPublisherData", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            UpdateUserTitleDisplayName: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/UpdateUserTitleDisplayName", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            ValidateAmazonIAPReceipt: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/ValidateAmazonIAPReceipt", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            ValidateGooglePlayPurchase: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/ValidateGooglePlayPurchase", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            ValidateIOSReceipt: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/ValidateIOSReceipt", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            ValidateWindowsStoreReceipt: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/ValidateWindowsStoreReceipt", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            WriteCharacterEvent: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/WriteCharacterEvent", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            WritePlayerEvent: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/WritePlayerEvent", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            WriteTitleEvent: function(t, e, n, o) {
                if (!i._internalSettings.sessionTicket) throw i._internalSettings.errorLoggedIn;
                i._internalSettings.ExecuteRequest(i._internalSettings.GetServerUrl() + "/Client/WriteTitleEvent", t, "X-Authorization", i._internalSettings.sessionTicket, e, n, o)
            },
            _MultiStepClientLogin: function(t) {
                if (t && !i.settings.disableAdvertising && null !== i.settings.advertisingIdType && null !== i.settings.advertisingIdValue) {
                    var e = {};
                    if (i.settings.advertisingIdType === i.settings.AD_TYPE_IDFA) e.Idfa = i.settings.advertisingIdValue;
                    else {
                        if (i.settings.advertisingIdType !== i.settings.AD_TYPE_ANDROID_ID) return;
                        e.Adid = i.settings.advertisingIdValue
                    }
                    i.ClientApi.AttributeInstall(e, null)
                }
            }
        };
        i.ClientApi;
        i.RegisterWithPhaser = function() {
            "undefined" != typeof Phaser && (Phaser.Plugin.PlayFab = function(t, e) {
                Phaser.Plugin.call(this, t, e)
            }, Phaser.Plugin.PlayFab.prototype = Object.create(Phaser.Plugin.prototype), Phaser.Plugin.PlayFab.prototype.constructor = Phaser.Plugin.PlayFab, Phaser.Plugin.PlayFab.prototype.PlayFab = i, Phaser.Plugin.PlayFab.prototype.settings = i.settings, Phaser.Plugin.PlayFab.prototype.ClientApi = i.ClientApi)
        }, i.RegisterWithPhaser(), n.default = i, e.exports = n.default, cc._RF.pop()
    }, {}],
    PolygonSeparator: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            var n = e.length;
            return e[t < 0 ? n - -t % n : t % n]
        }

        function o(t, e, n) {
            for (var o = []; e < t;) e += n.length;
            for (; t <= e; ++t) o.push(i(t, n));
            return o
        }

        function r(t, e, n) {
            if (a(t, n)) {
                if (l(i(t, n), i(t - 1, n), i(e, n)) && u(i(t, n), i(t + 1, n), i(e, n))) return !1
            } else if (u(i(t, n), i(t + 1, n), i(e, n)) || l(i(t, n), i(t - 1, n), i(e, n))) return !1;
            if (a(e, n)) {
                if (l(i(e, n), i(e - 1, n), i(t, n)) && u(i(e, n), i(e + 1, n), i(t, n))) return !1
            } else if (u(i(e, n), i(e + 1, n), i(t, n)) || l(i(e, n), i(e - 1, n), i(t, n))) return !1;
            for (var o = 0; o < n.length; ++o)
                if ((o + 1) % n.length != t && o != t && (o + 1) % n.length != e && o != e) {
                    var r = cc.v2();
                    if (g(i(t, n), i(e, n), i(o, n), i(o + 1, n), r)) return !1
                } return !0
        }

        function a(t, e) {
            return s(t, e, void 0)
        }

        function s(t, e, n) {
            if (void 0 === n) {
                var o = t,
                    r = e;
                t = i(o - 1, r), e = i(o, r), n = i(o + 1, r)
            }
            return v(t, e, n) < 0
        }

        function c(t, e, n) {
            return v(t, e, n) > 0
        }

        function l(t, e, n) {
            return v(t, e, n) >= 0
        }

        function u(t, e, n) {
            return v(t, e, n) <= 0
        }

        function h(t, e) {
            var n = e.x - t.x,
                i = e.y - t.y;
            return n * n + i * i
        }

        function _(t) {
            d(t) || t.reverse()
        }

        function d(t) {
            return t.length < 3 || f(t) > 0
        }

        function f(t) {
            var e, n = 0;
            for (e = 0; e < t.length; e++) {
                var i = (e + 1) % t.length;
                n += t[e].x * t[i].y, n -= t[e].y * t[i].x
            }
            return n /= 2
        }

        function p(t, e, n, i) {
            var o = cc.v2(),
                r = e.y - t.y,
                a = t.x - e.x,
                s = r * t.x + a * t.y,
                c = i.y - n.y,
                l = n.x - i.x,
                u = c * n.x + l * n.y,
                h = r * l - c * a;
            return S(h, 0) || (o.x = (l * s - a * u) / h, o.y = (r * u - c * s) / h), o
        }

        function g(t, e, n, i, o) {
            if (t == n || t == i || e == n || e == i) return !1;
            var r = t.x,
                a = t.y,
                s = e.x,
                c = e.y,
                l = n.x,
                u = n.y,
                h = i.x,
                _ = i.y;
            if (Math.max(r, s) < Math.min(l, h) || Math.max(l, h) < Math.min(r, s)) return !1;
            if (Math.max(a, c) < Math.min(u, _) || Math.max(u, _) < Math.min(a, c)) return !1;
            var d = (h - l) * (a - u) - (_ - u) * (r - l),
                f = (s - r) * (a - u) - (c - a) * (r - l),
                p = (_ - u) * (s - r) - (h - l) * (c - a);
            return !(Math.abs(p) < 1e-6) && (f /= p, 0 < (d /= p) && d < 1 && 0 < f && f < 1 && (o.x = r + d * (s - r), o.y = a + d * (c - a), !0))
        }

        function S(t, e) {
            return Math.abs(t - e) <= 1e-6
        }

        function v(t, e, n) {
            return t ? t.x * (e.y - n.y) + e.x * (n.y - t.y) + n.x * (t.y - e.y) : 0
        }
        cc._RF.push(e, "ed3c3T7nOJA8oZWP4MGl47g", "PolygonSeparator"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var y = {
            ConvexPartition: function t(e) {
                _(e);
                for (var n, d, f, g, S, v, y = [], m = cc.v2(), C = cc.v2(), b = 0, I = 0, k = 0; k < e.length; ++k)
                    if (a(k, e)) {
                        d = f = 1e8;
                        for (var T = 0; T < e.length; ++T) c(i(k - 1, e), i(k, e), i(T, e)) && u(i(k - 1, e), i(k, e), i(T - 1, e)) && (g = p(i(k - 1, e), i(k, e), i(T, e), i(T - 1, e)), s(i(k + 1, e), i(k, e), g) && (n = h(i(k, e), g)) < d && (d = n, m = g, b = T)), c(i(k + 1, e), i(k, e), i(T + 1, e)) && u(i(k + 1, e), i(k, e), i(T, e)) && (g = p(i(k + 1, e), i(k, e), i(T, e), i(T + 1, e)), c(i(k - 1, e), i(k, e), g) && (n = h(i(k, e), g)) < f && (f = n, I = T, C = g));
                        if (b == (I + 1) % e.length) {
                            var E = m.add(C).mul(.5);
                            (S = o(k, I, e)).push(E), (v = o(b, k, e)).push(E)
                        } else {
                            for (var w = 0, A = b; I < b;) I += e.length;
                            for (T = b; T <= I; ++T)
                                if (r(k, T, e)) {
                                    var D = 1 / (h(i(k, e), i(T, e)) + 1);
                                    a(T, e) ? u(i(T - 1, e), i(T, e), i(k, e)) && l(i(T + 1, e), i(T, e), i(k, e)) ? D += 3 : D += 2 : D += 1, D > w && (A = T, w = D)
                                } S = o(k, A, e), v = o(A, k, e)
                        }
                        return S && S.length > 3 && (y = y.concat(t(S))), v && v.length > 3 && (y = y.concat(t(v))), y
                    } y.push(e);
                for (k = y.length - 1; k >= 0; k--) 0 == y[k].length && y.splice(k, 0);
                return y
            },
            ForceCounterClockWise: _,
            IsCounterClockWise: d,
            GetSignedArea: f
        };
        n.PolygonUtils = y, cc._RF.pop()
    }, {}],
    Preview: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "69112iia6VNXqTKTaLUhoOL", "Preview");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            a = r.ccclass,
            s = (r.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._sPicID = "", e._bPicDoLoad = !1, e
                }
                return i(e, t), e.prototype.start = function() {}, Object.defineProperty(e.prototype, "PicID", {
                    get: function() {
                        return this._sPicID
                    },
                    set: function(t) {
                        this._sPicID = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.DoLoadPicPreView = function(t) {
                    if (void 0 === t && (t = null), !this._bPicDoLoad) {
                        this._bPicDoLoad = !0;
                        var e = cc.find("view/spr", this.node);
                        cc.loader.loadRes("lines/" + this._sPicID, function(n, i) {
                            e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(i), e.active = !0, t && t()
                        })
                    }
                }, e = o([a], e)
            }(cc.Component));
        n.default = s, cc._RF.pop()
    }, {}],
    "R.animate": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ef10cR18+9HoozN9zn604ev", "R.animate"), e.exports = {
            animate: function(t, e, n, i) {
                for (var o = R.utils.path2curve(t, e), r = o[0], a = o[1], s = [], c = 0, l = r.length; c < l; c++) {
                    s[c] = [0];
                    for (var u = 1, h = r[c].length; u < h; u++) s[c][u] = (a[c][u] - r[c][u]) / n
                }
                return this._time = 0, this._duration = n, this._animateDiff = s, this._animating = void 0 === i || i, this._fromPath = r, this._toPath = a, s
            },
            _stepAnimate: function(t) {
                var e = this._animateDiff,
                    n = this._duration,
                    i = this._fromPath,
                    o = t / n;
                o > 1 && (o = 1);
                for (var r = [], a = 0, s = i.length; a < s; a++) {
                    r[a] = [i[a][0]];
                    for (var c = 1, l = i[a].length; c < l; c++) r[a][c] = +i[a][c] + o * n * e[a][c]
                }
                this._dirty = !0, this._commands = r, o >= 1 && (this._animating = !1, this._fromPath = null, this._toPath = null)
            },
            _updateAnimate: function(t) {
                this._animating && (this._time += t, this._stepAnimate(this._time))
            }
        }, cc._RF.pop()
    }, {}],
    "R.curve": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "3fbadXGNktLUK9UR599v4aj", "R.curve");
        var i = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
            o = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
            r = "hasOwnProperty",
            a = parseFloat,
            s = Math.max,
            c = (Math.min, Math.PI),
            l = Math.abs,
            u = Math,
            h = (Math.pow, String.prototype.toUpperCase),
            _ = {
                string2curve: {},
                string2path: {}
            };

        function d(t) {
            if ("function" == typeof t || Object(t) !== t) return t;
            var e = new t.constructor;
            for (var n in t) t[r](n) && (e[n] = d(t[n]));
            return e
        }
        var f = function t(e, n, i, o, r, a, s, h, _, d) {
                var f, p = 120 * c / 180,
                    g = c / 180 * (+r || 0),
                    S = [],
                    v = function(t, e, n) {
                        return {
                            x: t * u.cos(n) - e * u.sin(n),
                            y: t * u.sin(n) + e * u.cos(n)
                        }
                    };
                if (d) w = d[0], A = d[1], T = d[2], E = d[3];
                else {
                    e = (f = v(e, n, -g)).x, n = f.y, h = (f = v(h, _, -g)).x, _ = f.y;
                    u.cos(c / 180 * r), u.sin(c / 180 * r);
                    var y = (e - h) / 2,
                        m = (n - _) / 2,
                        C = y * y / (i * i) + m * m / (o * o);
                    C > 1 && (i *= C = u.sqrt(C), o *= C);
                    var b = i * i,
                        I = o * o,
                        k = (a === s ? -1 : 1) * u.sqrt(l((b * I - b * m * m - I * y * y) / (b * m * m + I * y * y))),
                        T = k * i * m / o + (e + h) / 2,
                        E = k * -o * y / i + (n + _) / 2,
                        w = u.asin(((n - E) / o).toFixed(9)),
                        A = u.asin(((_ - E) / o).toFixed(9));
                    w = e < T ? c - w : w, A = h < T ? c - A : A, w < 0 && (w = 2 * c + w), A < 0 && (A = 2 * c + A), s && w > A && (w -= 2 * c), !s && A > w && (A -= 2 * c)
                }
                var D = A - w;
                if (l(D) > p) {
                    var M = A,
                        R = h,
                        O = _;
                    A = w + p * (s && A > w ? 1 : -1), S = t(h = T + i * u.cos(A), _ = E + o * u.sin(A), i, o, r, 0, s, R, O, [A, M, T, E])
                }
                D = A - w;
                var G = u.cos(w),
                    L = u.sin(w),
                    U = u.cos(A),
                    P = u.sin(A),
                    N = u.tan(D / 4),
                    x = 4 / 3 * i * N,
                    B = 4 / 3 * o * N,
                    V = [e, n],
                    F = [e + x * L, n - B * G],
                    z = [h + x * P, _ - B * U],
                    H = [h, _];
                if (F[0] = 2 * V[0] - F[0], F[1] = 2 * V[1] - F[1], d) return [F, z, H].concat(S);
                for (var q = [], j = 0, W = (S = [F, z, H].concat(S).join().split(",")).length; j < W; j++) q[j] = j % 2 ? v(S[j - 1], S[j], g).y : v(S[j], S[j + 1], g).x;
                return q
            },
            p = function(t, e, n, i) {
                return [t, e, n, i, n, i]
            },
            g = function(t, e, n, i, o, r) {
                return [1 / 3 * t + 2 / 3 * n, 1 / 3 * e + 2 / 3 * i, 1 / 3 * o + 2 / 3 * n, 1 / 3 * r + 2 / 3 * i, o, r]
            },
            S = function(t) {
                if (!t) return null;
                if ("string" != typeof t) return t;
                if (_.string2path[t]) return d(_.string2path[t]);
                var e = {
                        a: 7,
                        c: 6,
                        h: 1,
                        l: 2,
                        m: 2,
                        r: 4,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        z: 0
                    },
                    n = [];
                return String(t).replace(i, function(t, i, r) {
                    var a = [],
                        s = i.toLowerCase();
                    if (r.replace(o, function(t, e) {
                            e && a.push(+e)
                        }), "m" === s && a.length > 2 && (n.push([i].concat(a.splice(0, 2))), s = "l", i = "m" === i ? "l" : "L"), "r" === s) n.push([i].concat(a));
                    else
                        for (; a.length >= e[s] && (n.push([i].concat(a.splice(0, e[s]))), e[s]););
                }), n
            },
            v = function(t) {
                var e = S(t),
                    n = [],
                    i = 0,
                    o = 0,
                    r = 0,
                    a = 0,
                    s = 0;
                "M" == e[0][0] && (r = i = +e[0][1], a = o = +e[0][2], s++, n[0] = ["M", i, o]);
                for (var c, l, u = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), _ = s, d = e.length; _ < d; _++) {
                    if (n.push(c = []), (l = e[_])[0] != h.call(l[0])) switch (c[0] = h.call(l[0]), c[0]) {
                            case "A":
                                c[1] = l[1], c[2] = l[2], c[3] = l[3], c[4] = l[4], c[5] = l[5], c[6] = +(l[6] + i), c[7] = +(l[7] + o);
                                break;
                            case "V":
                                c[1] = +l[1] + o;
                                break;
                            case "H":
                                c[1] = +l[1] + i;
                                break;
                            case "R":
                                for (var f = [i, o].concat(l.slice(1)), p = 2, g = f.length; p < g; p++) f[p] = +f[p] + i, f[++p] = +f[p] + o;
                                n.pop(), n = n.concat(catmullRom2bezier(f, u));
                                break;
                            case "M":
                                r = +l[1] + i, a = +l[2] + o;
                            default:
                                for (p = 1, g = l.length; p < g; p++) c[p] = +l[p] + (p % 2 ? i : o)
                        } else if ("R" == l[0]) f = [i, o].concat(l.slice(1)), n.pop(), n = n.concat(catmullRom2bezier(f, u)), c = ["R"].concat(l.slice(-2));
                        else
                            for (var v = 0, y = l.length; v < y; v++) c[v] = l[v];
                    switch (c[0]) {
                        case "Z":
                            i = r, o = a;
                            break;
                        case "H":
                            i = c[1];
                            break;
                        case "V":
                            o = c[1];
                            break;
                        case "M":
                            r = c[c.length - 2], a = c[c.length - 1];
                        default:
                            i = c[c.length - 2], o = c[c.length - 1]
                    }
                }
                return n
            };
        e.exports = {
            path2absolute: v,
            path2curve: function(t, e) {
                if ("string" == typeof t && !e && _.string2curve[t]) return d(_.string2curve[t]);
                for (var n = v(t), i = e && v(e), o = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null
                    }, r = {
                        x: 0,
                        y: 0,
                        bx: 0,
                        by: 0,
                        X: 0,
                        Y: 0,
                        qx: null,
                        qy: null
                    }, c = function(t, e, n) {
                        var i, o;
                        if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                        switch (!(t[0] in {
                            T: 1,
                            Q: 1
                        }) && (e.qx = e.qy = null), t[0]) {
                            case "M":
                                e.X = t[1], e.Y = t[2];
                                break;
                            case "A":
                                t = ["C"].concat(f.apply(0, [e.x, e.y].concat(t.slice(1))));
                                break;
                            case "S":
                                "C" == n || "S" == n ? (i = 2 * e.x - e.bx, o = 2 * e.y - e.by) : (i = e.x, o = e.y), t = ["C", i, o].concat(t.slice(1));
                                break;
                            case "T":
                                "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(g(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                                break;
                            case "Q":
                                e.qx = t[1], e.qy = t[2], t = ["C"].concat(g(e.x, e.y, t[1], t[2], t[3], t[4]));
                                break;
                            case "L":
                                t = ["C"].concat(p(e.x, e.y, t[1], t[2]));
                                break;
                            case "H":
                                t = ["C"].concat(p(e.x, e.y, t[1], e.y));
                                break;
                            case "V":
                                t = ["C"].concat(p(e.x, e.y, e.x, t[1]));
                                break;
                            case "Z":
                                t = ["Z"].concat(p(e.x, e.y, e.X, e.Y))
                        }
                        return t
                    }, l = function(t, e) {
                        if (t[e].length > 7) {
                            t[e].shift();
                            for (var o = t[e]; o.length;) h[e] = "A", i && (S[e] = "A"), t.splice(e++, 0, ["C"].concat(o.splice(0, 6)));
                            t.splice(e, 1), b = s(n.length, i && i.length || 0)
                        }
                    }, u = function(t, e, o, r, a) {
                        t && e && "M" == t[a][0] && "M" != e[a][0] && (e.splice(a, 0, ["M", r.x, r.y]), o.bx = 0, o.by = 0, o.x = t[a][1], o.y = t[a][2], b = s(n.length, i && i.length || 0))
                    }, h = [], S = [], y = "", m = "", C = 0, b = s(n.length, i && i.length || 0); C < b; C++) {
                    n[C] && (y = n[C][0]), "C" != y && (h[C] = y, C && (m = h[C - 1])), n[C] = c(n[C], o, m), "A" != h[C] && "C" == y && (h[C] = "C"), l(n, C), i && (i[C] && (y = i[C][0]), "C" != y && (S[C] = y, C && (m = S[C - 1])), i[C] = c(i[C], r, m), "A" != S[C] && "C" == y && (S[C] = "C"), l(i, C)), u(n, i, o, r, C), u(i, n, r, o, C);
                    var I = n[C],
                        k = i && i[C],
                        T = I.length,
                        E = i && k.length;
                    o.x = I[T - 2], o.y = I[T - 1], o.bx = a(I[T - 4]) || o.x, o.by = a(I[T - 3]) || o.y, r.bx = i && (a(k[E - 4]) || r.x), r.by = i && (a(k[E - 3]) || r.y), r.x = i && k[E - 2], r.y = i && k[E - 1]
                }
                return "string" != typeof t || e || (_.string2curve[t] = d(n)), i ? [n, i] : n
            }
        }, cc._RF.pop()
    }, {}],
    "R.dash": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "3ed44ZCT2ZJloFqEaSDKWFw", "R.dash");
        var i = Math.sqrt;
        e.exports = {
            drawDashPoints: function(t, e, n, o, r) {
                for (var a, s, c, l, u, h, _ = t[0], d = t[1], f = 0, p = 0, g = n.length, S = 0, v = o, y = o + n[S], m = 0, C = t.length / 2; m < C; m++) {
                    if (u = t[2 * m], h = t[2 * m + 1], 0 !== m)
                        for (p = i((a = u - _) * a + (s = h - d) * s), c || (c = _), l || (l = d); p > 0;)
                            if (f + p < v) f += p, p = 0, c = u, l = h;
                            else {
                                if (f <= v) {
                                    if (c += (b = (I = v - f) / p) * (u - c), l += b * (h - l), r) {
                                        var b = cc.AffineTransform.transformVec2(c, l, r);
                                        e.moveTo(b.x, b.y)
                                    } else e.moveTo(c, l);
                                    p -= I, f += I
                                }
                                if (f + p < y) c = u, l = h, r ? (b = cc.AffineTransform.transformVec2(c, l, r), e.lineTo(b.x, b.y)) : e.lineTo(c, l), f += p, p = 0;
                                else if (f + p >= y) {
                                    var I;
                                    c += (b = (I = y - f) / p) * (u - c), l += b * (h - l), r ? (b = cc.AffineTransform.transformVec2(c, l, r), e.lineTo(b.x, b.y)) : e.lineTo(c, l), p -= I, f += I, y = (v = y + n[++S % g]) + n[++S % g]
                                }
                            } _ = u, d = h
                }
            }
        }, cc._RF.pop()
    }, {}],
    "R.find": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "cc7c13/te5C24/Hcap2xKXJ", "R.find");
        var i = Math.PI,
            o = Math,
            r = Math.pow;
        e.exports = {
            findDotAtSegment: function(t, e, n, i, o, a, s, c, l) {
                var u = 1 - l;
                return {
                    x: r(u, 3) * t + 3 * r(u, 2) * l * n + 3 * u * l * l * o + r(l, 3) * s,
                    y: r(u, 3) * e + 3 * r(u, 2) * l * i + 3 * u * l * l * a + r(l, 3) * c
                }
            },
            findDotsAtSegment: function(t, e, n, a, s, c, l, u, h) {
                var _ = 1 - h,
                    d = r(_, 3),
                    f = r(_, 2),
                    p = h * h,
                    g = p * h,
                    S = d * t + 3 * f * h * n + 3 * _ * h * h * s + g * l,
                    v = d * e + 3 * f * h * a + 3 * _ * h * h * c + g * u,
                    y = t + 2 * h * (n - t) + p * (s - 2 * n + t),
                    m = e + 2 * h * (a - e) + p * (c - 2 * a + e),
                    C = n + 2 * h * (s - n) + p * (l - 2 * s + n),
                    b = a + 2 * h * (c - a) + p * (u - 2 * c + a),
                    I = _ * t + h * n,
                    k = _ * e + h * a,
                    T = _ * s + h * l,
                    E = _ * c + h * u,
                    w = 90 - 180 * o.atan2(y - C, m - b) / i;
                return (y > C || m < b) && (w += 180), {
                    x: S,
                    y: v,
                    m: {
                        x: y,
                        y: m
                    },
                    n: {
                        x: C,
                        y: b
                    },
                    start: {
                        x: I,
                        y: k
                    },
                    end: {
                        x: T,
                        y: E
                    },
                    alpha: w
                }
            }
        }, cc._RF.pop()
    }, {}],
    "R.group": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e75c2SchnFFxaBCrVazFOQf", "R.group");
        var i = t("./R.path"),
            o = t("./component/R.transform"),
            r = t("./component/R.style"),
            a = t("./utils/R.utils"),
            s = t("./component/optional/R.svg"),
            c = {
                extends: cc.Component,
                properties: {
                    selected: {
                        default: !1,
                        notify: function() {
                            for (var t = this.children, e = this.selected, n = 0, i = t.length; n < i; n++) t[n].selected = e
                        }
                    },
                    _dirty: {
                        default: !0,
                        serializable: !1
                    },
                    _loadCallback: {
                        default: null,
                        serializable: !1
                    }
                },
                onLoad: function() {
                    this.init(), this.ctxNode || (this.ctxNode = new cc.Node, this.ctx = this.ctxNode.addComponent(cc.Graphics), this.node.addChild(this.ctxNode))
                },
                init: function(t) {
                    this.children = [], t && (this.parent = t, this.ctx = t.ctx), this.showBoundingBox = !1
                },
                addPath: function() {
                    var t = new i;
                    return t.init(this), this.children.push(t), this._dirty = !0, t
                },
                addGroup: function() {
                    var t = new l;
                    if (t.init(this), this.children) return this.children.push(t), this._dirty = !0, t
                },
                getWorldBbox: function() {
                    for (var t, e = this.children, n = 0, i = e.length; n < i; n++) {
                        var o = e[n].getWorldBbox();
                        0 !== o.width && 0 !== o.height && (t = t ? cc.rectUnion(t, e[n].getWorldBbox()) : e[n].getWorldBbox())
                    }
                    return t || cc.rect()
                },
                update: function(t) {
                    if (this._dirty) {
                        this.parent || this.ctx.clear();
                        for (var e = this.children, n = 0, i = e.length; n < i; n++) {
                            var o = e[n];
                            o._dirty = !0, o.update(t)
                        }
                        if (this.showBoundingBox) {
                            var r = this.getWorldBbox();
                            this.ctx.rect(r.x, r.y, r.width, r.height), this.ctx.stroke()
                        }
                        this._dirty = !1, this._drawCallback && this._drawCallback(this)
                    }
                },
                setDrawCallback: function(t) {
                    this._drawCallback = t
                }
            },
            l = cc.Class(a.defineClass(c, o, r, s));
        cc._RF.pop()
    }, {
        "./R.path": "R.path",
        "./component/R.style": "R.style",
        "./component/R.transform": "R.transform",
        "./component/optional/R.svg": "R.svg",
        "./utils/R.utils": "R.utils"
    }],
    "R.length": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "aac33vPmPhCYZOAMOcu8Dkj", "R.length");
        var i = t("./R.curve").path2curve,
            o = t("./R.find").findDotsAtSegment;

        function r(t, e, n, i, o) {
            return t * (t * (-3 * e + 9 * n - 9 * i + 3 * o) + 6 * e - 12 * n + 6 * i) - 3 * e + 3 * n
        }

        function a(t, e, n, i, o, a, s, c, l) {
            null == l && (l = 1);
            for (var u = (l = l > 1 ? 1 : l < 0 ? 0 : l) / 2, h = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], _ = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], d = 0, f = 0; f < 12; f++) {
                var p = u * h[f] + u,
                    g = r(p, t, n, o, s),
                    S = r(p, e, i, a, c),
                    v = g * g + S * S;
                d += _[f] * Math.sqrt(v)
            }
            return u * d
        }

        function s(t, e, n, i, o, r, s, c, l) {
            if (!(l < 0 || a(t, e, n, i, o, r, s, c) < l)) {
                var u, h = .5,
                    _ = 1 - h;
                for (u = a(t, e, n, i, o, r, s, c, _); Math.abs(u - l) > .01;) h /= 2, u = a(t, e, n, i, o, r, s, c, _ += (u < l ? 1 : -1) * h);
                return _
            }
        }

        function c(t, e, n, i, r, c, l, u, h) {
            return h ? o(t, e, n, i, r, c, l, u, s(t, e, n, i, r, c, l, u, h)) : a(t, e, n, i, r, c, l, u)
        }

        function l(t, e) {
            return function(n, r, a) {
                for (var s, l, u, h, _, d = "", f = {}, p = 0, g = 0, S = (n = i(n)).length; g < S; g++) {
                    if ("M" === (u = n[g])[0]) s = +u[1], l = +u[2];
                    else {
                        if (p + (h = c(s, l, u[1], u[2], u[3], u[4], u[5], u[6])) > r) {
                            if (e && !f.start) {
                                if (d += ["C" + (_ = c(s, l, u[1], u[2], u[3], u[4], u[5], u[6], r - p)).start.x, _.start.y, _.m.x, _.m.y, _.x, _.y], a) return d;
                                f.start = d, d = ["M" + _.x, _.y + "C" + _.n.x, _.n.y, _.end.x, _.end.y, u[5], u[6]].join(), p += h, s = +u[5], l = +u[6];
                                continue
                            }
                            if (!t && !e) return {
                                x: (_ = c(s, l, u[1], u[2], u[3], u[4], u[5], u[6], r - p)).x,
                                y: _.y,
                                alpha: _.alpha
                            }
                        }
                        p += h, s = +u[5], l = +u[6]
                    }
                    d += u.shift() + u
                }
                return f.end = d, (_ = t ? p : e ? f : o(s, l, u[0], u[1], u[2], u[3], u[4], u[5], 1)).alpha && (_ = {
                    x: _.x,
                    y: _.y,
                    alpha: _.alpha
                }), _
            }
        }
        var u = l(1),
            h = l(),
            _ = l(0, 1);
        e.exports = {
            getTatLen: s,
            bezlen: a,
            getTotalLength: u,
            getPointAtLength: h,
            getSubpathsAtLength: _,
            getSubpath: function(t, e, n) {
                if (this.getTotalLength(t) - n < 1e-6) return _(t, e).end;
                var i = _(t, n, 1);
                return e ? _(i, e).end : i
            }
        }, cc._RF.pop()
    }, {
        "./R.curve": "R.curve",
        "./R.find": "R.find"
    }],
    "R.path": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7e039m0wZhNaIqogYMr6uCY", "R.path");
        var i = t("./component/R.transform"),
            o = t("./component/R.style"),
            r = t("./utils/R.utils"),
            a = cc.color(0, 0, 0),
            s = cc.color(255, 255, 255),
            c = t("./component/optional/R.smooth"),
            l = t("./component/optional/R.simplify"),
            u = t("./component/optional/R.animate"),
            h = {
                M: "moveTo",
                L: "lineTo",
                C: "bezierCurveTo",
                Z: "close"
            },
            _ = Math.sqrt,
            d = Math.max,
            f = Math.abs,
            p = cc.color(0, 157, 236),
            g = {
                extends: cc.Component,
                properties: {
                    _dirty: {
                        default: !0,
                        serializable: !1,
                        notify: function() {
                            this.parent && this._dirty && (this.parent._dirty = !0, this._commands && (this._commands.points = void 0))
                        }
                    }
                },
                init: function(t) {
                    t && (this.parent = t, this.ctx = t.ctx), this._nMode = 0, this._commands = [], this._dirty = !0, this.showHandles = !1, this.showBoundingBox = !1
                },
                onLoad: function() {
                    this.init(), this.ctx || (this.ctx = this.node.addComponent(cc.Graphics), this._applyStyle())
                },
                ellipse: function(t, e, n, i) {
                    i || (i = n);
                    var o = this._commands;
                    o.push(["M", t, e]), o.push(["m", 0, -i]), o.push(["a", n, i, 0, 1, 1, 0, 2 * i]), o.push(["a", n, i, 0, 1, 1, 0, -2 * i]), o.push(["z"])
                },
                circle: function(t, e, n) {
                    this.ellipse(t, e, n)
                },
                rect: function(t, e, n, i, o) {
                    var r = this._commands;
                    o ? (r.push(["M", t + o, e]), r.push(["l", n - 2 * o, 0]), r.push(["a", o, o, 0, 0, 1, o, o]), r.push(["l", 0, i - 2 * o]), r.push(["a", o, o, 0, 0, 1, -o, o]), r.push(["l", 2 * o - n, 0]), r.push(["a", o, o, 0, 0, 1, -o, -o]), r.push(["l", 0, 2 * o - i]), r.push(["a", o, o, 0, 0, 1, o, -o])) : (r.push(["M", t, e]), r.push(["l", n, 0]), r.push(["l", 0, i]), r.push(["l", -n, 0])), r.push(["z"])
                },
                close: function() {
                    this._commands.push(["Z"])
                },
                points: function(t, e) {
                    if (!(t.length <= 1)) {
                        this.clear();
                        var n = t[0];
                        this.M(n.x, n.y);
                        for (var i = 1, o = t.length; i < o; i++) {
                            var r = t[i];
                            this.C(n.x, n.y, r.x, r.y, r.x, r.y), n = r
                        }
                        e && this.C(n.x, n.y, t[0].x, t[0].y, t[0].x, t[0].y), this.makePath()
                    }
                },
                makePath: function() {
                    this._commands = R.utils.path2curve(this._commands), this._dirty = !0
                },
                path: function(t) {
                    this._commands = R.utils.path2curve(t), this._dirty = !0
                },
                data: function(t) {
                    this._data = t, this._dirty = !0
                },
                setHide: function(t) {
                    this._bHide = t, this._dirty = !0
                },
                setDrawMode: function(t) {
                    this._nMode = t, this._dirty = !0
                },
                setSelected: function(t) {
                    this._bSelected = t, this._dirty = !0
                },
                clear: function() {
                    this._commands.length = 0
                },
                getPathString: function() {
                    for (var t = this._commands, e = [], n = 0, i = t.length; n < i; n++) e[n] = t[n].join(" ");
                    return e = e.join(" ")
                },
                getTotalLength: function() {
                    return void 0 === this._commands.totalLength && this._analysis(), this._commands.totalLength
                },
                getBbox: function() {
                    return void 0 === this._commands.bbox && this._analysis(), this._commands.bbox
                },
                getWorldBbox: function() {
                    return (void 0 === this._commands.worldBbox || this._transformDirty) && this._analysis(), this._commands.worldBbox
                },
                center: function(t, e) {
                    t = t || 0, e = e || 0;
                    var n = this.getBbox();
                    this.position = this.position.add(cc.v2(-n.width / 2 - n.x + t, -n.height / 2 - n.y + e))
                },
                _curves: function() {
                    var t = this._commands;
                    if (t.curves) return t.curves;
                    for (var e, n, i, o = [], r = 0, a = t.length; r < a; r++) {
                        var s = t[r],
                            c = s[0];
                        "M" === c ? (e = [], o.push(e), n = s[1], i = s[2]) : "C" === c && void 0 !== n && void 0 !== i && (e.push([n, i, s[1], s[2], s[3], s[4], s[5], s[6]]), n = s[5], i = s[6])
                    }
                    return t.curves = o, o
                },
                _analysis: function() {
                    var t = this._commands;
                    if (!t.points) {
                        for (var e, n, i, o = this._curves(), r = [], a = 1 / d(f(this.scale.x), f(this.scale.y)), s = 0, c = o.length; s < c; s++) {
                            var l = o[s];
                            i = [], r.push(i);
                            for (var u = 0, h = l.length; u < h; u++) {
                                var p = l[u];
                                R.utils.tesselateBezier(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], 0, i, a)
                            }
                        }
                        t.points = r;
                        var g, S, v, y, m = 0,
                            C = 1e8,
                            b = 1e8,
                            I = -1e8,
                            k = -1e8;
                        for (s = 0, c = r.length; s < c; s++)
                            for (u = 0, h = (i = r[s]).length / 2; u < h; u++) e = i[2 * u], n = i[2 * u + 1], e < C && (C = e), e > I && (I = e), n < b && (b = n), n > k && (k = n), 0 === u && (g = e, S = n), m += _((v = e - g) * v + (y = n - S) * y), g = e, S = n;
                        if (t.totalLength = m, 0 === m) t.bbox = t.worldBbox = cc.rect();
                        else {
                            var T = cc.rect(C, b, I - C, k - b),
                                E = cc.rect(0, 0, 0, 0),
                                w = cc.rect(0, 0, 0, 0);
                            cc.AffineTransform.transformRect(E, T, this.getTransform()), cc.AffineTransform.transformRect(w, T, this.getWorldTransform()), t.bbox = E, t.worldBbox = w
                        }
                    }
                },
                _drawCommands: function() {
                    for (var t = this._commands, e = this.ctx, n = this.getWorldTransform(), i = [], o = [], r = [], c = [], l = !0, u = 0, _ = 0, d = t.length; _ < d; _++) {
                        var f = t[_],
                            p = f[0],
                            g = !1;
                        "Z" == p ? (f[0] = "C", p = "C", f = this._transformCommand(f, n), g = this._solve(i, l, t.length, u), u++, i.push(f), o.push(p), g ? c.push([o, i]) : r.push([o, i]), l = !1, i = [], o = []) : (f = this._transformCommand(f, n), i.push(f), o.push(p))
                    }
                    r.forEach(function(t) {
                        for (var n = 0; n < t[1].length; ++n) {
                            var i = e[h[t[0][n]]];
                            i && i.apply(e, t[1][n])
                        }
                    }), this.getStyledColor("fillColor") && (this.ctx.fillColor = this.getStyledColor("fillColor"), this.ctx.fill()), this.getStyledColor("strokeColor") && (this.ctx.strokeColor = this.getStyledColor("strokeColor"), this.ctx.stroke()), c.forEach(function(t) {
                        for (var n = 0; n < t[1].length; ++n) {
                            var i = e[h[t[0][n]]];
                            i && i.apply(e, t[1][n])
                        }
                    }), c.length > 0 && (this.ctx.fillColor = s, this.ctx.strokeColor = a, this.ctx.stroke())
                },
                _drawLineData: function(t) {
                    if (this.ctx && this._data) {
                        var e = this.ctx;
                        if (!this._data.Curves || !this._data.Curves[0] || void 0 == this._data.Curves[0][0]) return;
                        var n = this._data.Curves[0][0];
                        this._data.Curves.forEach(function(i) {
                            var o = i[0];
                            if (n * o >= 0) {
                                for (var r = 0; r < i[2].length; ++r) {
                                    var c = e[h[i[1][r]]],
                                        l = i[2][r];
                                    c && c.apply(e, l)
                                }
                                t ? (e.lineWidth = 1, e.fillColor = a, e.strokeColor = a) : (e.lineWidth = 1, e.fillColor = s, e.strokeColor = s), e.fill()
                            } else {
                                for (r = 0; r < i[2].length; ++r) {
                                    c = e[h[i[1][r]]], l = i[2][r];
                                    c && c.apply(e, l)
                                }
                                t ? (e.lineWidth = 1, e.fillColor = s, e.strokeColor = s) : (e.lineWidth = 1, e.fillColor = a, e.strokeColor = a), e.fill()
                            }
                        })
                    }
                },
                _drawBlockData: function() {
                    if (this.ctx && this._data) {
                        var t = this.ctx;
                        if (!this._data.Curves || !this._data.Curves[0] || void 0 == this._data.Curves[0][0]) return;
                        var e = this._data.Curves[0][0],
                            n = this._data.fillColor;
                        this._data.Curves.forEach(function(i) {
                            var o = i[0];
                            if (e * o >= 0) {
                                for (var r = 0; r < i[2].length; ++r) {
                                    var a = t[h[i[1][r]]],
                                        c = i[2][r];
                                    a && a.apply(t, c)
                                }
                                t.fillColor = n, t.fill(), t.lineWidth = 40
                            } else {
                                for (r = 0; r < i[2].length; ++r) {
                                    a = t[h[i[1][r]]], c = i[2][r];
                                    a && a.apply(t, c)
                                }
                                t.fillColor = s, t.fill(), t.lineWidth = 40
                            }
                        }), t.lineWidth = 1
                    }
                },
                _drawSelected: function() {
                    if (this.ctx && this._data) {
                        var t = this.ctx,
                            e = this._data.Curves[0][0];
                        this._data.fillColor;
                        this._data.Curves.forEach(function(n) {
                            var i = n[0];
                            if (e * i >= 0) {
                                for (var o = 0; o < n[2].length; ++o) {
                                    var r = t[h[n[1][o]]],
                                        a = n[2][o];
                                    r && r.apply(t, a)
                                }
                                t.fillColor = cc.color(180, 210, 230), t.fill()
                            } else {
                                for (o = 0; o < n[2].length; ++o) {
                                    r = t[h[n[1][o]]], a = n[2][o];
                                    r && r.apply(t, a)
                                }
                                t.fillColor = s, t.fill()
                            }
                        }), t.lineWidth = 1
                    }
                },
                _solve: function(t, e, n, i) {
                    console.log(i + "/" + n);
                    for (var o = 0, r = [t[0]], a = 1; a < t.length - 1; ++a) {
                        var s = t[a];
                        r.push([s[4], s[5]])
                    }
                    for (var c = 0; c < r.length; c++) {
                        var l = r[c],
                            u = r[(c + 1) % r.length];
                        o += (u[0] - l[0]) * (u[1] + l[1])
                    }
                    return o > 0
                },
                _drawHandles: function() {
                    var t, e = this.ctx,
                        n = this._commands,
                        i = 2.5,
                        o = e.lineWidth,
                        r = e.strokeColor,
                        a = e.fillColor;
                    e.lineWidth = 1, e.strokeColor = p, e.fillColor = p;
                    var s = this.getWorldTransform();

                    function c(t, n, o, r) {
                        e.moveTo(t, n), e.lineTo(o, r), e.stroke(), e.circle(o, r, i), e.fill()
                    }
                    for (var l = 0, u = n.length; l < u; l++) {
                        var h = n[l],
                            _ = h[0];
                        h = this._transformCommand(h, s), "M" === _ ? t = h : "C" === _ && (c(t[0], t[1], h[0], h[1]), c(h[4], h[5], h[2], h[3]), t = [h[4], h[5]]), t && e.fillRect(t[0] - i, t[1] - i, 5, 5)
                    }
                    e.lineWidth = o, e.strokeColor = r, e.fillColor = a
                },
                _checkPointInRange: function(t) {
                    for (var e = this._data.Curves.length - 1; e >= 0; e--) {
                        var n = this._data.Curves[e];
                        n && console.log(n)
                    }
                },
                _clickePath: function(t) {},
                _drawDashPath: function() {
                    var t, e = this._commands,
                        n = this.ctx,
                        i = this.dashArray,
                        o = this.dashOffset;
                    e.points || this._analysis(), t = e.points;
                    for (var r = this.getWorldTransform(), a = 0, s = t.length; a < s; a++) {
                        var c = t[a];
                        R.utils.drawDashPoints(c, n, i, o, r)
                    }
                },
                update: function(t) {
                    if (this._updateAnimate && this._updateAnimate(t), (this._data || 0 !== this._commands.length) && this._dirty && (!this.parent || this.parent._dirty)) {
                        if (this.dashArray.length > 0 ? (this.getStyledColor("fillColor") && (this._drawCommands(), this.ctx.fill()), this.getStyledColor("strokeColor") && (this._drawDashPath(), this.ctx.stroke())) : this._bHide ? this._bSelected && this._drawSelected() : 0 == this.Type ? 0 == this._nMode ? this._drawLineData(!1) : 1 == this._nMode && this._drawLineData(!0) : 1 == this.Type && this._drawBlockData(), this.showBoundingBox) {
                            var e = this.getWorldBbox();
                            this.ctx.rect(e.x, e.y, e.width, e.height), this.ctx.stroke()
                        }
                        this.showHandles && this._drawHandles(), this._dirty = !1
                    }
                },
                _drawSelectedToCtx: function(t) {
                    if (this._data) {
                        var e = this._data.Curves[0][0];
                        this._data.Curves.forEach(function(n) {
                            var i = n[0];
                            if (e * i >= 0) {
                                for (var o = 0; o < n[2].length; ++o) {
                                    var r = t[h[n[1][o]]],
                                        a = n[2][o];
                                    r && r.apply(t, a)
                                }
                                t.fillColor = cc.color(255, 255, 255), t.fill()
                            } else {
                                for (o = 0; o < n[2].length; ++o) {
                                    r = t[h[n[1][o]]], a = n[2][o];
                                    r && r.apply(t, a)
                                }
                                t.fillColor = cc.color(255, 255, 255), t.fill()
                            }
                        }), t.lineWidth = 1
                    }
                }
            },
            S = cc.Class(r.defineClass(g, i, o, c, l, u));
        ["M", "m", "L", "l", "H", "h", "V", "v", "C", "c", "S", "s", "Q", "q", "T", "t", "A", "a", "Z", "z"].forEach(function(t) {
            S.prototype[t] = function() {
                for (var e = [t], n = 0, i = arguments.length; n < i; n++) e[n + 1] = arguments[n];
                this._commands.push(e)
            }
        }), cc._RF.pop()
    }, {
        "./component/R.style": "R.style",
        "./component/R.transform": "R.transform",
        "./component/optional/R.animate": "R.animate",
        "./component/optional/R.simplify": "R.simplify",
        "./component/optional/R.smooth": "R.smooth",
        "./utils/R.utils": "R.utils"
    }],
    "R.simplify": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "618f7EABMxA0aL8yRPUN3ks", "R.simplify");
        var i = {
            fit: function(t, e) {
                this.commands = [], this.error = e || 10;
                var n = this.points = [];
                t._commands.forEach(function(t) {
                    var e = t[0];
                    "M" === e ? n.push(cc.v2(t[1], t[2])) : "C" === e && n.push(cc.v2(t[5], t[6]))
                });
                var i = n.length;
                return i > 1 && this.fitCubic(0, i - 1, n[1].sub(n[0]).normalize(), n[i - 2].sub(n[i - 1]).normalize()), this.commands
            },
            fitCubic: function(t, e, n, i) {
                if (e - t != 1) {
                    for (var o, r = this.chordLengthParameterize(t, e), a = Math.max(this.error, this.error * this.error), s = !0, c = 0; c <= 4; c++) {
                        var l = this.generateBezier(t, e, r, n, i),
                            u = this.findMaxError(t, e, l, r);
                        if (u.error < this.error && s) return void this.addCurve(l);
                        if (o = u.index, u.error >= a) break;
                        s = this.reparameterize(t, e, r, l), a = u.error
                    }
                    var h = this.points[o - 1].sub(this.points[o]),
                        _ = this.points[o].sub(this.points[o + 1]),
                        d = h.add(_).div(2).normalize();
                    this.fitCubic(t, o, n, d), this.fitCubic(o, e, d.mul(-1), i)
                } else {
                    var f = this.points[t],
                        p = this.points[e],
                        g = f.sub(p).mag() / 3;
                    this.addCurve([f, f.add(n.normalize().mulSelf(g)), p.add(i.normalize().mulSelf(g)), p])
                }
            },
            addCurve: function(t) {
                if (0 === this.commands.length) this.commands.push(["M", t[0].x, t[0].y]);
                else {
                    var e = this.commands[this.commands.length - 1];
                    e[5] = t[0].x, e[6] = t[0].y
                }
                this.commands.push(["C", t[1].x, t[1].y, t[2].x, t[2].y, t[3].x, t[3].y])
            },
            generateBezier: function(t, e, n, i, o) {
                for (var r = this.points[t], a = this.points[e], s = [
                        [0, 0],
                        [0, 0]
                    ], c = [0, 0], l = 0, u = e - t + 1; l < u; l++) {
                    var h = n[l],
                        _ = 1 - h,
                        d = 3 * h * _,
                        f = _ * _ * _,
                        p = d * _,
                        g = d * h,
                        S = h * h * h,
                        v = i.normalize().mulSelf(p),
                        y = o.normalize().mulSelf(g),
                        m = this.points[t + l].sub(r.mul(f + p)).sub(a.mul(g + S));
                    s[0][0] += v.dot(v), s[0][1] += v.dot(y), s[1][0] = s[0][1], s[1][1] += y.dot(y), c[0] += v.dot(m), c[1] += y.dot(m)
                }
                var C, b, I = s[0][0] * s[1][1] - s[1][0] * s[0][1];
                if (Math.abs(I) > 1e-12) {
                    var k = s[0][0] * c[1] - s[1][0] * c[0];
                    C = (c[0] * s[1][1] - c[1] * s[0][1]) / I, b = k / I
                } else {
                    var T = s[0][0] + s[0][1],
                        E = s[1][0] + s[1][1];
                    C = b = Math.abs(T) > 1e-12 ? c[0] / T : Math.abs(E) > 1e-12 ? c[1] / E : 0
                }
                var w, A, D = a.sub(r).mag(),
                    M = 1e-12 * D;
                if (C < M || b < M) C = b = D / 3;
                else {
                    var R = a.sub(r);
                    w = i.normalize().mulSelf(C), A = o.normalize().mulSelf(b), w.dot(R) - A.dot(R) > D * D && (C = b = D / 3, w = A = null)
                }
                return [r, r.add(w || i.normalize().mulSelf(C)), a.add(A || o.normalize().mulSelf(b)), a]
            },
            reparameterize: function(t, e, n, i) {
                for (var o = t; o <= e; o++) n[o - t] = this.findRoot(i, this.points[o], n[o - t]);
                o = 1;
                for (var r = n.length; o < r; o++)
                    if (n[o] <= n[o - 1]) return !1;
                return !0
            },
            findRoot: function(t, e, n) {
                for (var i = [], o = [], r = 0; r <= 2; r++) i[r] = t[r + 1].sub(t[r]).mul(3);
                for (r = 0; r <= 1; r++) o[r] = i[r + 1].sub(i[r]).mul(2);
                var a = this.evaluate(3, t, n),
                    s = this.evaluate(2, i, n),
                    c = this.evaluate(1, o, n),
                    l = a.sub(e),
                    u = s.dot(s) + l.dot(c);
                return Math.abs(u) < 1e-6 ? n : n - l.dot(s) / u
            },
            evaluate: function(t, e, n) {
                for (var i = e.slice(), o = 1; o <= t; o++)
                    for (var r = 0; r <= t - o; r++) i[r] = i[r].mul(1 - n).add(i[r + 1].mul(n));
                return i[0]
            },
            chordLengthParameterize: function(t, e) {
                for (var n = [0], i = t + 1; i <= e; i++) n[i - t] = n[i - t - 1] + this.points[i].sub(this.points[i - 1]).mag();
                i = 1;
                for (var o = e - t; i <= o; i++) n[i] /= n[o];
                return n
            },
            findMaxError: function(t, e, n, i) {
                for (var o = Math.floor((e - t + 1) / 2), r = 0, a = t + 1; a < e; a++) {
                    var s = this.evaluate(3, n, i[a - t]).sub(this.points[a]),
                        c = s.x * s.x + s.y * s.y;
                    c >= r && (r = c, o = a)
                }
                return {
                    error: r,
                    index: o
                }
            }
        };
        e.exports = {
            simplify: function() {
                this._commands = i.fit(this)
            }
        }, cc._RF.pop()
    }, {}],
    "R.smooth": [function(t, e, n) {
        "use strict";

        function i(t) {
            var e, n = t.length,
                i = [],
                o = [],
                r = 2;
            for (i[0] = t[0] / r, e = 1; e < n; e++) o[e] = 1 / r, r = (e < n - 1 ? 4 : 2) - o[e], i[e] = (t[e] - i[e - 1]) / r;
            for (e = 1; e < n; e++) i[n - e - 1] -= o[n - e] * i[n - e];
            return i
        }

        function o(t, e, n) {
            var o = t.length,
                r = t[o - 1].x === t[0].x && t[o - 1].y === t[0].y,
                a = o,
                s = 0;
            if (r && (o = a = o - 1), !(o <= 2)) {
                r && (s = Math.min(o, 4), a += 2 * Math.min(o, s));
                for (var c = [], l = 0; l < o; l++) c[l + s] = t[l];
                if (r)
                    for (l = 0; l < s; l++) c[l] = t[l + o - s], c[l + o + s] = t[l];
                else a--;
                var u = [];
                for (l = 1; l < a - 1; l++) u[l] = 4 * c[l].x + 2 * c[l + 1].x;
                u[0] = c[0].x + 2 * c[1].x, u[a - 1] = 3 * c[a - 1].x;
                var h = i(u);
                for (l = 1; l < a - 1; l++) u[l] = 4 * c[l].y + 2 * c[l + 1].y;
                u[0] = c[0].y + 2 * c[1].y, u[a - 1] = 3 * c[a - 1].y;
                var _ = i(u);
                if (r) {
                    l = 0;
                    for (var d = o; l < s; l++, d++) {
                        var f = l / s,
                            p = 1 - f,
                            g = l + s,
                            S = d + s;
                        h[d] = h[l] * f + h[d] * p, _[d] = _[l] * f + _[d] * p, h[S] = h[g] * p + h[S] * f, _[S] = _[g] * p + _[S] * f
                    }
                    a--
                }
                for (l = s; l <= a - s; l++) e[l - s] = {
                    x: h[l],
                    y: _[l]
                }, n[l - s] = l < a - 1 ? {
                    x: 2 * c[l + 1].x - h[l + 1],
                    y: 2 * c[l + 1].y - _[l + 1]
                } : {
                    x: (c[a].x + h[a - 1]) / 2,
                    y: (c[a].y + _[a - 1]) / 2
                }
            }
        }

        function r(t) {
            var e = [],
                n = [];
            return o(t, e, n), [e, n]
        }
        cc._RF.push(e, "26db3HfX+dJtZ5xs7MZRAHf", "R.smooth"), e.exports = {
            smooth: function() {
                var t = [];
                this._commands.forEach(function(e) {
                    var n = e[0];
                    "M" === n ? t.push(cc.v2(e[1], e[2])) : "C" === n && t.push(cc.v2(e[5], e[6]))
                });
                for (var e = r(t), n = e[0], i = e[1], o = [], a = 0, s = t.length; a < s; a++)
                    if (0 === a) o.push(["M", t[a].x, t[a].y]);
                    else {
                        var c = n[a - 1],
                            l = i[a - 1];
                        o.push(["C", c.x, c.y, l.x, l.y, t[a].x, t[a].y])
                    } this._commands = o, this._dirty = !0
            }
        }, cc._RF.pop()
    }, {}],
    "R.style": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "82a22w03zRH9KMyM6p0S4ni", "R.style");
        var i = cc.Graphics.LineJoin,
            o = cc.Graphics.LineCap,
            r = {
                properties: {
                    _lineWidth: void 0,
                    _strokeColor: void 0,
                    _fillColor: void 0,
                    _lineJoin: void 0,
                    _lineCap: void 0,
                    _miterLimit: void 0,
                    _dashOffset: void 0,
                    _dashArray: void 0,
                    lineWidth: {
                        get: function() {
                            return this._lineWidth || 1
                        },
                        set: function(t) {
                            this._lineWidth = t, this._dirty = !0
                        }
                    },
                    lineJoin: {
                        get: function() {
                            return this._lineJoin || i.MITER
                        },
                        set: function(t) {
                            this._lineJoin = t, this._dirty = !0
                        },
                        type: i
                    },
                    lineCap: {
                        get: function() {
                            return this._lineCap || o.BUTT
                        },
                        set: function(t) {
                            this._lineCap = t, this._dirty = !0
                        },
                        type: o
                    },
                    strokeColor: {
                        get: function() {
                            return this._strokeColor || cc.Color.BLACK
                        },
                        set: function(t) {
                            this._strokeColor = t, this._dirty = !0
                        }
                    },
                    fillColor: {
                        get: function() {
                            return this._fillColor || cc.Color.WHITE
                        },
                        set: function(t) {
                            this._fillColor = t, this._dirty = !0
                        }
                    },
                    miterLimit: {
                        get: function() {
                            return this._miterLimit || 10
                        },
                        set: function(t) {
                            this._miterLimit = t, this._dirty = !0
                        }
                    },
                    dashOffset: {
                        get: function() {
                            return this._dashOffset || 0
                        },
                        set: function(t) {
                            this._dashOffset !== t && (this._dashOffset = t, this._dirty = !0)
                        }
                    },
                    dashArray: {
                        get: function() {
                            return this._dashArray || []
                        },
                        set: function(t) {
                            Array.isArray(t) && (this._dashArray = t, this._dirty = !0)
                        }
                    }
                },
                getStyled: function(t) {
                    var e = this["_" + t];
                    return "inherit" !== e && void 0 !== e || (e = this.parent ? this.parent.getStyled(t) : this[t]), e
                },
                getStyledColor: function(t) {
                    var e = this.getStyled(t);
                    return "none" !== e && e ? "string" == typeof e && (e = cc.Color.BLACK.fromHEX(e)) : e = null, e
                },
                _applyStyle: function() {
                    var t = this.ctx;
                    if (t) {
                        t.lineWidth = 1, t.lineJoin = cc.Graphics.LineJoin.ROUND, t.lineCap = cc.Graphics.LineCap.ROUND;
                        var e = this.getStyledColor("strokeColor"),
                            n = this.getStyledColor("fillColor");
                        e && (t.strokeColor = e), n && (t.fillColor = n)
                    }
                }
            };
        e.exports = r, cc._RF.pop()
    }, {}],
    "R.svg": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "12637AIttxM0IyCfKuQc+qV", "R.svg");
        var i = t("../../utils/R.curve"),
            o = Math.abs,
            r = Math.min,
            a = Math.max;

        function s(t) {
            return t.replace(/^\s+|\s+$/g, "")
        }

        function c(t) {
            return t.replace(/[\s\r\t\n]+/gm, " ")
        }

        function l(t) {
            for (var e = s(c((t || "").replace(/,/g, " "))).split(" "), n = 0; n < e.length; n++) e[n] = parseFloat(e[n]);
            return e
        }

        function u(t, e, n) {
            "fill" === e ? t.fillColor = "none" === n ? null : cc.Color.BLACK.fromHEX(n) : "stroke" === e ? t.strokeColor = "none" === n ? null : cc.Color.BLACK.fromHEX(n) : "stroke-width" === e ? t.lineWidth = parseFloat(n) : "stroke-linejoin" === e ? t.lineJoin = cc.Graphics.LineJoin[n.toUpperCase()] : "stroke-linecap" === e ? t.lineCap = cc.Graphics.LineCap[n.toUpperCase()] : "stroke-dasharray" === e ? t.dashArray = l[n] : "stroke-dashoffset" === e ? t.dashOffset = parseFloat(n) : t.fillColor = cc.Color.BLACK
        }

        function h(t) {
            for (var e, n, i, r = [], a = [], s = [], c = [], l = 0, u = t.length; l < u; l++) "Z" == (n = (e = t[l])[0]) ? (e[0] = "C", n = "C", e = e.slice(1, e.length), a.push(e), i = d(a, c), s.push(n), r.push([parseFloat(i), s, a, c]), a = [], s = [], c = []) : ((e = e.slice(1, e.length))[0], a.push(e), s.push(n));
            return r.sort(function(t, e) {
                var n = o(t[0]),
                    i = o(e[0]);
                return n > i ? -1 : n < i ? 1 : 0
            })
        }

        function _(t, e) {
            var n = t.length;
            if (n < 2) return t.push(e);
            var i = cc.v2(t[n - 2][0], t[n - 2][1]),
                o = cc.v2(t[n - 1][0], t[n - 1][1]),
                r = cc.v2(e[0], e[1]),
                a = o.sub(i),
                s = r.sub(o),
                c = a.mag(),
                l = s.mag();
            !a.normalizeSelf().fuzzyEquals(s.normalizeSelf(), .2) || c > 10 ? l > 1.5 && t.push(e) : l > 1.5 && (t.pop(), t.push(e))
        }

        function d(t, e) {
            var n = 0;
            e.push(t[0]);
            var i = t[0],
                r = void 0,
                a = void 0;
            i = t[0];
            for (var s = 1; s < t.length; ++s)(r = t[s])[0] && (a = [r[4], r[5]], f(2, i, r, e), _(e, a), i = a);
            var c = e.length;
            i = e[0];
            for (var l = c - 1; l >= 0; l--)
                if (r = e[l], o(r[0] - i[0]) <= 1e-6 && o(r[1] - i[1]) <= 1e-6) {
                    e.pop();
                    break
                } for (var u = 0; u < e.length; u++) {
                var h = e[u],
                    d = e[(u + 1) % e.length];
                n += (d[0] - h[0]) * (d[1] + h[1])
            }
            return n
        }

        function f(t, e, n, i) {
            for (var o = 1 / (t += 2), r = 1; r < t; r++) {
                _(i, p(o * r, e, [n[0], n[1]], [n[2], n[3]], [n[4], n[5]]))
            }
        }

        function p(t, e, n, i, o) {
            var r = [0, 0],
                a = 1 - t;
            return r[0] = e[0] * a * a * a + 3 * n[0] * t * a * a + 3 * i[0] * t * t * a + o[0] * t * t * t, r[1] = e[1] * a * a * a + 3 * n[1] * t * a * a + 3 * i[1] * t * t * a + o[1] * t * t * t, r
        }
        var g = {
            doSortByAns: function(t) {
                t.sort(function(t, e) {
                    return o(t.MaxAns) < o(e.MaxAns) ? 1 : o(t.MaxAns) > o(e.MaxAns) ? -1 : 0
                })
            },
            parseJsonData: function(t) {
                var e = {
                    Block: [],
                    Line: []
                };
                this.parseBlockOrLine(t.block, e.Block), this.parseBlockOrLine(t.lines, e.Line), this.doSortByAns(e.Block), this.doSortByAns(e.Line), this._pLoadCallback && this._pLoadCallback(e)
            },
            parseBlockOrLine: function(t, e) {
                for (var n in t) {
                    var o = t[n],
                        r = {},
                        a = n;
                    if ("_" != a) {
                        a = a.split(";");
                        for (var c = 0; c < a.length; c++) {
                            if ("" !== s(a[c])) u(r, s((n = a[c].split(":"))[0]), s(n[1]))
                        }
                    } else r.fillColor = cc.Color.BLACK;
                    for (c = 0; c < o.length; ++c) {
                        var l = {
                            Curves: h(i.path2curve(o[c]))
                        };
                        for (var _ in l.Curves && l.Curves[0] && (l.MaxAns = l.Curves[0][0]), e.push(l), r) l[_] = r[_]
                    }
                }
            },
            loadParsedData: function(t) {
                this._pLoadCallback && this._pLoadCallback(t)
            },
            setLoadCallback: function(t) {
                this._pLoadCallback = t
            },
            clear: function() {
                this.children = [], this._pLoadCallback = null, this._dirty = !0
            },
            createGroupAndNode: function(t, e) {
                var n = this.addGroup();
                if (n) {
                    for (var i = 0; i < t.Line.length; ++i) {
                        (a = n.addPath()).Type = 0, a.data(t.Line[i])
                    }
                    this.group_line = n, n._dirty = !1;
                    var o = this.addGroup();
                    if (o) {
                        this.group_block = o;
                        for (var r = 0; r < t.Block.length; ++r) {
                            var a;
                            (a = o.addPath()).Type = 1, a.data(t.Block[r]), e && "" != e ? "0" == e[r] ? a.setHide(!0) : a.setHide(!1) : a.setHide(!0)
                        }
                        o._dirty = !0
                    }
                }
            },
            createGroupAndNodeEx: function(t, e, n, i) {
                var o = this.addGroup();
                if (o) {
                    if (!n)
                        for (var r = 0; r < t.Line.length; ++r) {
                            (c = o.addPath()).Type = 0, c.data(t.Line[r])
                        }
                    this.group_line = o, o._dirty = !1;
                    var a = this.addGroup();
                    if (a) {
                        if (this.group_block = a, !i)
                            for (var s = 0; s < t.Block.length; ++s) {
                                var c;
                                (c = a.addPath()).Type = 1, c.data(t.Block[s]), e && "" != e ? c.setHide("0" == e[s]) : c.setHide(!0)
                            }
                        a._dirty = !0
                    }
                }
            },
            checkPointInWitchBlock: function(t, e) {
                var n = this.node.convertToNodeSpace(t);
                if (this.node.getBoundingBoxToWorld().contains(t)) {
                    for (var i = this.group_block.children, o = [], r = i[a], a = i.length - 1; a >= 0; a--)
                        if ((r = i[a]) && r._bHide && (s = i[a]._data.Curves[0][3]) && r._data.fillColor && e == r._data.fillColor.toRGBValue()) {
                            if (this._checkPointInPolygon([n.x, n.y], s)) return r.setHide(!1), r.update(0), void window._BASE.SEND_EVENT("GAME_EVENT", "DO_FILL_COLOR", {
                                Path: r,
                                UUID: r.uuid
                            });
                            o.push(r)
                        } for (a = o.length - 1; a >= 0; a--) {
                        r = o[a];
                        var s = o[a]._data.Curves[0][3];
                        if (this._checkPointInRange([n.x, n.y], s)) return r.setHide(!1), r.update(0), void window._BASE.SEND_EVENT("GAME_EVENT", "DO_FILL_COLOR", {
                            Path: r,
                            UUID: r.uuid
                        })
                    }
                }
            },
            _checkPointInPolygon: function(t, e) {
                for (var n = !1, i = -1, o = e.length, r = o - 1; ++i < o; r = i)(e[i][1] <= t[1] && t[1] < e[r][1] || e[r][1] <= t[1] && t[1] < e[i][1]) && t[0] < (e[r][0] - e[i][0]) * (t[1] - e[i][1]) / (e[r][1] - e[i][1]) + e[i][0] && (n = !n);
                return n
            },
            _checkPointInRange: function(t, e) {
                for (var n = 99999, i = 99999, o = -99999, s = -99999, c = 0; c < e.length; c++) n = r(n, e[c][0]), i = r(i, e[c][1]), o = a(o, e[c][0]), s = a(s, e[c][1]);
                return t[0] >= n - 800 && t[0] <= o + 800 && t[1] >= i - 800 && t[1] <= s + 800
            },
            doSelFillColor: function(t) {
                for (var e = this.group_block.children, n = e.length - 1; n >= 0; n--) {
                    var i = e[n];
                    i && i._bHide && i._data.fillColor && (t == i._data.fillColor.toRGBValue() ? i.setSelected(!0) : i.setSelected(!1))
                }
            },
            getSelColorPathData: function(t) {
                var e = [],
                    n = this.group_block.children;
                this.group_block._dirty = !0, this._dirty = !0;
                for (var i = n.length - 1; i >= 0; i--) {
                    var o = n[i];
                    o && o._bHide && o._data.fillColor && t == o._data.fillColor.toRGBValue() && e.push(o)
                }
                return e
            },
            getSelColorUnfilled: function(t) {
                var e = this.group_block.children;
                this.group_block._dirty = !0, this._dirty = !0;
                for (var n = e.length - 1; n >= 0; n--) {
                    var i = e[n];
                    if (i && i._bHide && i._data.fillColor && t == i._data.fillColor.toRGBValue()) return i
                }
            },
            getAllBlocks: function() {
                if (this.group_block) return this.group_block.children
            },
            getColorSaveData: function() {
                if (!this.group_block) return "";
                for (var t = "", e = this.group_block.children, n = 0; n <= e.length - 1; n++) {
                    var i = e[n];
                    i && (i._bHide ? t += "0" : t += "1")
                }
                return t
            },
            setHideLines: function(t) {
                if (this.group_line) {
                    this.group_line._dirty = !0, this._dirty = !0;
                    for (var e = this.group_line.children, n = 0; n <= e.length - 1; n++) {
                        var i = e[n];
                        i && i.setHide(t)
                    }
                }
            },
            setHideBlocks: function(t, e) {
                if (this.group_block) {
                    this.group_block._dirty = !0, this._dirty = !0;
                    for (var n = this.group_block.children, i = 0; i <= n.length - 1; i++) {
                        var o = n[i];
                        o && (!t && e && "" != e ? "0" == e[i] ? o.setHide(!0) : o.setHide(!1) : o.setHide(!0))
                    }
                }
            },
            setDrawMode: function(t) {
                if (this._drawMode != t && this.group_line) {
                    this.group_line._dirty = !0, this._dirty = !0, this._drawMode = t;
                    for (var e = this.group_line.children, n = 0; n <= e.length - 1; n++) {
                        var i = e[n];
                        i && i.setDrawMode(t)
                    }
                }
            },
            setLinesMaterial: function(t) {
                if (this.group_line) {
                    var e = this.group_line.ctx._material;
                    console.log(t), console.log(e);
                    var n = e._mainTech.passes[0],
                        i = t._mainTech.passes[0];
                    n._blendDst = i._blendDst, n._blendDstAlpha = i._blendDst, n._blendSrc = i._blendDst, n._blendSrcAlpha = i._blendDst
                }
            },
            forceDirty: function() {
                this._dirty = !0, this.group_line && (this.group_line._dirty = !0), this.group_block && (this.group_block._dirty = !0)
            }
        };
        e.exports = g, cc._RF.pop()
    }, {
        "../../utils/R.curve": "R.curve"
    }],
    "R.tesselateBezier": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "27740ufNRNKgLTomyF81tTe", "R.tesselateBezier");
        var i = .25,
            o = Math.abs;
        e.exports = function t(e, n, r, a, s, c, l, u, h, _, d) {
            var f, p, g, S, v, y, m, C, b, I, k, T, E, w, A, D;
            if (d = d || 1, !(h > 10)) {
                if (v = .5 * (s + l), y = .5 * (c + u), m = .5 * ((f = .5 * (e + r)) + (g = .5 * (r + s))), C = .5 * ((p = .5 * (n + a)) + (S = .5 * (a + c))), ((A = o((r - l) * (w = u - n) - (a - u) * (E = l - e))) + (D = o((s - l) * w - (c - u) * E))) * (A + D) < i * d * (E * E + w * w)) return _.push(l), void _.push(u);
                t(e, n, f, p, m, C, k = .5 * (m + (b = .5 * (g + v))), T = .5 * (C + (I = .5 * (S + y))), h + 1, _, d), t(k, T, b, I, v, y, l, u, h + 1, _, d)
            }
        }, cc._RF.pop()
    }, {}],
    "R.transform": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "09cfahPgi5LcL3L+meIkVYY", "R.transform");
        var i = {
            properties: {
                _scale: {
                    default: cc.v2(1, 1),
                    type: cc.Vec2
                },
                _position: {
                    default: cc.v2(0, 0),
                    type: cc.Vec2
                },
                _rotation: 0,
                _flipX: !1,
                _flipY: !1,
                _transform: {
                    default: function() {
                        return {
                            a: 1,
                            b: 0,
                            c: 0,
                            d: 1,
                            tx: 0,
                            ty: 0
                        }
                    },
                    serializable: !1
                },
                _worldTransform: {
                    default: function() {
                        return {
                            a: 1,
                            b: 0,
                            c: 0,
                            d: 1,
                            tx: 0,
                            ty: 0
                        }
                    },
                    serializable: !1
                },
                _transformDirty: {
                    default: !0,
                    serializable: !1,
                    notify: function() {
                        this._transformDirty && (this.parent && (this.parent._transformDirty = !0), this._dirty = !0)
                    }
                },
                scale: {
                    get: function() {
                        return this._scale
                    },
                    set: function(t) {
                        this._scale.equals(t) || (this._scale = t, this._transformDirty = !0)
                    }
                },
                position: {
                    get: function() {
                        return this._position
                    },
                    set: function(t) {
                        this._position.equals(t) || (this._position = t, this._transformDirty = !0)
                    }
                },
                rotation: {
                    get: function() {
                        return this._rotation
                    },
                    set: function(t) {
                        this._rotation !== t && (this._rotation = t, this._transformDirty = !0)
                    }
                },
                flipX: {
                    get: function() {
                        return this._flipX
                    },
                    set: function(t) {
                        this._flipX !== t && (this._flipX = t, this._transformDirty = !0)
                    }
                },
                flipY: {
                    get: function() {
                        return this._flipY
                    },
                    set: function(t) {
                        this._flipY !== t && (this._flipY = t, this._transformDirty = !0)
                    }
                }
            },
            _transformCommand: function(t, e) {
                if (t.length <= 1) return t;
                if (t = t.slice(1, t.length), 1 === e.a && 1 === e.d && 0 === e.b && 0 === e.c && 0 === e.tx && 0 === e.ty) return t;
                for (var n = cc.v2(), i = 0, o = t.length / 2; i < o; i++) {
                    var r = 2 * i;
                    n.x = t[r], n.y = t[r + 1];
                    var a = cc.v2();
                    cc.AffineTransform.transformVec2(a, n, e), t[r] = a.x, t[r + 1] = a.y
                }
                return t
            },
            getTransform: function() {
                if (this._transformDirty) {
                    var t = this.flipX ? -this._scale.x : this._scale.x,
                        e = this.flipY ? -this._scale.y : this._scale.y,
                        n = this._position.x,
                        i = this._position.y,
                        o = this._rotation,
                        r = this._transform;
                    if (r.tx = n, r.ty = i, r.a = r.d = 1, r.b = r.c = 0, o) {
                        var a = .017453292519943295 * o;
                        r.c = Math.sin(a), r.d = Math.cos(a), r.a = r.d, r.b = -r.c
                    }
                    var s = t < 1e-6 && t > -1e-6 ? 1e-6 : t,
                        c = e < 1e-6 && e > -1e-6 ? 1e-6 : e;
                    1 === t && 1 === e || (r.a *= s, r.b *= s, r.c *= c, r.d *= c), this._transformDirty = !1
                }
                return this._transform
            },
            getWorldTransform: function() {
                if (this.parent) {
                    var t = new cc.AffineTransform;
                    return cc.AffineTransform.concat(t, this.parent.getWorldTransform(), this.getTransform()), t
                }
                return this.getTransform()
            },
            updateTransform: function(t) {
                if (this._transformDirty || t) {
                    var e = this.flipX ? -this._scale.x : this._scale.x,
                        n = this.flipY ? -this._scale.y : this._scale.y,
                        i = this._position.x,
                        o = this._position.y,
                        r = this._rotation,
                        a = this._transform;
                    if (a.tx = i, a.ty = o, a.a = a.d = 1, a.b = a.c = 0, r) {
                        var s = .017453292519943295 * r;
                        a.c = Math.sin(s), a.d = Math.cos(s), a.a = a.d, a.b = -a.c
                    }
                    var c = e < 1e-6 && e > -1e-6 ? 1e-6 : e,
                        l = n < 1e-6 && n > -1e-6 ? 1e-6 : n;
                    1 === e && 1 === n || (a.a *= c, a.b *= c, a.c *= l, a.d *= l)
                }
                if (this.parent) {
                    var u = new cc.AffineTransform;
                    this._worldTransform = cc.AffineTransform.concat(u, this.parent._worldTransform, this._transform)
                } else this._worldTransform = this._transform;
                var h = this.children;
                if (h)
                    for (var _ = 0, d = h.length; _ < d; _++) {
                        h[_].updateTransform(t || this._transformDirty)
                    }
                this._transformDirty = !1
            }
        };
        e.exports = i, cc._RF.pop()
    }, {}],
    "R.utils": [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "588929pZCZIpIto22fDnVAb", "R.utils");
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };

        function o(t, e, n) {
            for (var o in e)
                if (!n || n && !t[o])
                    if ("object" === i(e[o]))
                        for (var r in t[o] = {}, e[o]) t[o][r] = e[o][r];
                    else t[o] = e[o]
        }
        e.exports = {
            defineClass: function() {
                for (var t = {
                        properties: {},
                        statics: {}
                    }, e = 0, n = arguments.length; e < n; e++) {
                    var i = arguments[e];
                    o(t.properties, i.properties), o(t.statics, i.statics), o(t, i, !0)
                }
                return t
            },
            tesselateBezier: t("./R.tesselateBezier"),
            path2curve: t("R.curve").path2curve,
            drawDashPoints: t("R.dash").drawDashPoints
        }, cc._RF.pop()
    }, {
        "./R.tesselateBezier": "R.tesselateBezier",
        "R.curve": "R.curve",
        "R.dash": "R.dash"
    }],
    RecordScene: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e9b11GFum5H5pAHq0J+VxkZ", "RecordScene");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.onLoad = function() {
                    var t = cc.view.getVisibleSize();
                    t.width / t.height > .57 && (this.node.getComponent(cc.Canvas).fitHeight = !0, this.node.getComponent(cc.Canvas).fitWidth = !1), r._M.REG_EVT_LISTENER("GAME_EVENT", "SET_SCENE_INIT_DATA", this.ON_GAME_EVENT, this)
                }, e.prototype.start = function() {
                    r._M.LOG_EVENT("start_record_scene")
                }, e.prototype.onDestroy = function() {
                    r._M.REMOVE_ALL_LISTENERS(this)
                }, e.prototype.ON_GAME_EVENT = function(t, e, n) {
                    "SET_SCENE_INIT_DATA" == e && (n.ShowShare ? r._M.UIManager.ShowUI("UIShare", n) : r._M.UIManager.ShowUI("UIRecord"))
                }, e = o([s], e)
            }(cc.Component));
        n.default = c, cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    RenderPath: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e2aa3PLcEFPO6xZckJPUklw", "RenderPath");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
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
                    return e.camera = null, e.tar = null, e
                }
                return i(e, t), e.prototype.onLoad = function() {}, e.prototype.start = function() {
                    var t = new cc.RenderTexture;
                    t.initWithSize(500, 500);
                    var e = new cc.SpriteFrame(t);
                    this.tar.spriteFrame = e, this.camera.targetTexture = t
                }, o([s(cc.Camera)], e.prototype, "camera", void 0), o([s(cc.Sprite)], e.prototype, "tar", void 0), e = o([a], e)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {}],
    SdkAdapter_Android: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "edb430H585F3qQqIPSGnyEh", "SdkAdapter_Android");
        var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = t("./SdkAdapter"),
            r = t("../Common/CallbackMgr"),
            a = "com/yiyou/sdk/base/YiUSDKHelper",
            s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.Init = function() {
                    this.DoInit()
                }, e.prototype.Run = function() {}, e.prototype.DoInitQuery = function(t) {
                    var e = r.CallbackMgr.GetInstance().Temp(function(e) {
                        null != t && t(e)
                    });
                    this.CallSDKMethod("SDK_DoInitQuery", "(I)V", e)
                }, e.prototype.DoIAP = function(t, e) {
                    var n = r.CallbackMgr.GetInstance().Temp(function(t) {
                        null != e && e(t)
                    });
                    this.CallSDKMethod("SDK_DoPay", "(Ljava/lang/String;I)V", t, n)
                }, e.prototype.DoInit = function(t) {
                    void 0 === t && (t = null);
                    var e = r.CallbackMgr.GetInstance().Temp(function(e) {
                        null != t && t()
                    });
                    this.CallSDKMethod("SDK_Init", "(I)Z", e)
                }, e.prototype.ShowBannerAd = function(t) {
                    this.CallSDKMethod("SDK_ShowBanner", "(Z)V", t || !1)
                }, e.prototype.ShowVideoAd = function(t) {
                    var e = r.CallbackMgr.GetInstance().Temp(function(e) {
                        "1" == e ? null != t && t(!0) : null != t && t(!1)
                    });
                    this.CallSDKMethod("SDK_ShowVideo", "(I)V", e)
                }, e.prototype.ShowInterstitialAd = function(t) {
                    this.CallSDKMethod("SDK_ShowInterstitialAd", "(I)V", 0)
                }, e.prototype.ShowExitAd = function() {}, e.prototype.IsVideoReady = function() {}, e.prototype.CallSDKMethod = function(t, e) {
                    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
                    switch (n.length) {
                        case 5:
                            jsb.reflection.callStaticMethod(a, t, e, n[0], n[1], n[2], n[3], n[4]);
                            break;
                        case 4:
                            jsb.reflection.callStaticMethod(a, t, e, n[0], n[1], n[2], n[3]);
                            break;
                        case 3:
                            jsb.reflection.callStaticMethod(a, t, e, n[0], n[1], n[2]);
                            break;
                        case 2:
                            jsb.reflection.callStaticMethod(a, t, e, n[0], n[1]);
                            break;
                        case 1:
                            jsb.reflection.callStaticMethod(a, t, e, n[0])
                    }
                }, e
            }(o.SdkAdapter);
        n.SdkAdapter_Android = s, cc._RF.pop()
    }, {
        "../Common/CallbackMgr": "CallbackMgr",
        "./SdkAdapter": "SdkAdapter"
    }],
    SdkAdapter_Default: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "758c9qUCvtKnYxrfFnsgC+F", "SdkAdapter_Default");
        var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.Init = function() {}, e.prototype.Run = function() {}, e.prototype.DoInitQuery = function(t) {}, e.prototype.DoIAP = function(t, e) {}, e.prototype.ShowBannerAd = function(t) {}, e.prototype.ShowVideoAd = function(t) {
                t(!0)
            }, e.prototype.ShowInterstitialAd = function(t) {}, e.prototype.ShowExitAd = function() {}, e.prototype.IsVideoReady = function() {}, e
        }(t("./SdkAdapter").SdkAdapter);
        n.SdkAdapter_Web = o, cc._RF.pop()
    }, {
        "./SdkAdapter": "SdkAdapter"
    }],
    SdkAdapter_FB_Instant: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7f1e7ibrX5CcJe3Gx3jJqeR", "SdkAdapter_FB_Instant");
        var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.Init = function() {}, e.prototype.Run = function() {}, e.prototype.DoInitQuery = function(t) {}, e.prototype.DoIAP = function(t, e) {}, e.prototype.ShowBannerAd = function(t) {}, e.prototype.ShowVideoAd = function(t) {}, e.prototype.ShowInterstitialAd = function(t) {}, e.prototype.ShowExitAd = function() {}, e.prototype.IsVideoReady = function() {}, e
        }(t("./SdkAdapter").SdkAdapter);
        n.SdkAdapter_FB_Instant = o, cc._RF.pop()
    }, {
        "./SdkAdapter": "SdkAdapter"
    }],
    SdkAdapter_IOS: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d401dzQN+JGhIlYGt71B9Bc", "SdkAdapter_IOS");
        var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = t("./SdkAdapter"),
            r = t("../Common/CallbackMgr"),
            a = t("../UIUtility/UIManager"),
            s = t("../AppBase/LocalData"),
            c = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._sdkHelper = null, e
                }
                return i(e, t), e.prototype.Init = function() {
                    var t = this;
                    this._sdkHelper = cc.SdkHelper.Instance();
                    var e = r.CallbackMgr.GetInstance().Perm(function(e) {
                        t.SEND_EVENT("GAME_EVENT", "RESTORE_PAYMENT", e)
                    });
                    this.CallSDKMethod("SetPaymentRestoreCallback", e)
                }, e.prototype.Run = function() {}, e.prototype.DoInitQuery = function(t) {}, e.prototype.DoRestorePayment = function() {
                    this.CallSDKMethod("DoRestorePayment")
                }, e.prototype.DoIAP = function(t, e) {
                    a.UIManager.GetInstance().ShowUI("UIWaiting");
                    var n = r.CallbackMgr.GetInstance().Temp(function(t) {
                        null != e && e(t), a.UIManager.GetInstance().CloseUI("UIWaiting")
                    });
                    this.CallSDKMethod("DoIapPay", t, n)
                }, e.prototype.SetTouTiaoOpen = function(t) {
                    this.CallSDKMethod("SetTouTiaoOpen", t)
                }, e.prototype.DoAfterSetOnlineParams = function() {
                    var t = this.OnlineParams;
                    null != t && this.SetTouTiaoOpen(t.TouTiaoAds)
                }, e.prototype.DoShareGameLink = function() {
                    var t = "https://itunes.apple.com/cn/app/id1478735551?l=zh&ls=1&mt=8",
                        e = this._tOnlineParams;
                    null != e && null != e.ShareURL && (t = e.ShareURL), this.CallSDKMethod("DoShareGameLink", t)
                }, e.prototype.ShowBannerAd = function(t) {
                    this.CallSDKMethod("ShowBannerAd", t)
                }, e.prototype.ShowVideoAd = function(t) {
                    if ("true" != s.LocalData.GetInstance().GetVal("RemoveAllAds")) {
                        var e = this.OnlineParams;
                        if (e && 1 == e.PassCheck) return t("1"), void t("2");
                        var n = 0;
                        n = r.CallbackMgr.GetInstance().Perm(function(e) {
                            t && t(e), "2" == e && r.CallbackMgr.GetInstance().RemovePerm(n), "1" != e && (cc.audioEngine.resumeAll(), cc.audioEngine.resumeMusic())
                        }), cc.audioEngine.pauseAll(), cc.audioEngine.pauseMusic(), this.CallSDKMethod("ShowVideoAd", n)
                    } else t && (t("1"), t("2"))
                }, e.prototype.ShowNativeAd = function(t, e, n, i, o, a) {
                    if ("true" != s.LocalData.GetInstance().GetVal("RemoveAllAds")) {
                        var c = r.CallbackMgr.GetInstance().Temp(function(t) {
                            null != a && a(t)
                        });
                        this.CallSDKMethod("ShowNativeAd", t, e, n, i, o, c)
                    }
                }, e.prototype.ShowInterstitialAd = function(t) {
                    if ("true" != s.LocalData.GetInstance().GetVal("RemoveAllAds")) {
                        var e = this.OnlineParams;
                        if (e && 1 == e.PassCheck) t("");
                        else {
                            var n = 0;
                            n = r.CallbackMgr.GetInstance().Perm(function(e) {
                                null != t && t(e), "0" == e.toString() && r.CallbackMgr.GetInstance().RemovePerm(n)
                            }), this.CallSDKMethod("ShowInterstitialAd", n)
                        }
                    }
                }, e.prototype.RecordData = function(t, e, n, i) {
                    void 0 === e && (e = ""), void 0 === n && (n = ""), void 0 === i && (i = ""), this.CallSDKMethod("UmengRecord", t, e, n, i)
                }, e.prototype.IsVideoReady = function() {
                    return this.CallSDKMethod("IsVideoAdAvailable")
                }, e.prototype.GetLanguage = function() {
                    return this.CallSDKMethod("GetCurLanguage")
                }, e.prototype.GetCountry = function() {
                    return this.CallSDKMethod("GetCurCountry")
                }, e.prototype.JumpToWebPage = function(t) {
                    if (null == t || "" == t) {
                        var e = this._tOnlineParams;
                        null != e && null != e.GameStoreUrl && (t = e.GameStoreUrl)
                    }
                    this.CallSDKMethod("JumpToAppStore", t)
                }, e.prototype.DoFacebookLogin = function(t) {
                    this.CallSDKMethod("DoFacebookLogin", t)
                }, e.prototype.IsFacebookLogin = function() {
                    return this.CallSDKMethod("IsFacebookLogin")
                }, e.prototype.DoInviteFriends = function() {
                    this.CallSDKMethod("DoFacebookInvite")
                }, e.prototype.AddPermanentItemId = function(t) {}, e.prototype.CallSDKMethod = function(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    var i = this._sdkHelper;
                    if (i) {
                        var o = null,
                            r = i[t];
                        if (null != r) switch (e.length) {
                            case 7:
                                o = r.bind(i)(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
                                break;
                            case 6:
                                o = r.bind(i)(e[0], e[1], e[2], e[3], e[4], e[5]);
                                break;
                            case 5:
                                o = r.bind(i)(e[0], e[1], e[2], e[3], e[4]);
                                break;
                            case 4:
                                o = r.bind(i)(e[0], e[1], e[2], e[3]);
                                break;
                            case 3:
                                o = r.bind(i)(e[0], e[1], e[2]);
                                break;
                            case 2:
                                o = r.bind(i)(e[0], e[1]);
                                break;
                            case 1:
                                o = r.bind(i)(e[0]);
                                break;
                            case 0:
                                o = r.bind(i)()
                        }
                        return o
                    }
                }, e
            }(o.SdkAdapter);
        n.SdkAdapter_IOS = c, cc._RF.pop()
    }, {
        "../AppBase/LocalData": "LocalData",
        "../Common/CallbackMgr": "CallbackMgr",
        "../UIUtility/UIManager": "UIManager",
        "./SdkAdapter": "SdkAdapter"
    }],
    SdkAdapter_OppoQuickGame: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a49cfufUZJAnLiKkEtHh7qB", "SdkAdapter_OppoQuickGame");
        var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = t("./SdkAdapter"),
            r = t("./OppoUtil"),
            a = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._sBannerAdID = window.Banner_ID, e._sRewardVideoAdID = window.Video_ID, e._bannerAd = null, e._rewardAd = null, e
                }
                return i(e, t), e.prototype.Init = function() {
                    this._bannerAd = r.default.getInstance().initBannerAd(this._sBannerAdID), this._bannerAd.hide(), this._rewardAd = r.default.getInstance().initRewardedVideoAd(this._rewardAd)
                }, e.prototype.Run = function() {}, e.prototype.DoInitQuery = function(t) {}, e.prototype.DoIAP = function(t, e) {}, e.prototype.ShowBannerAd = function(t) {
                    this._bannerAd && (1 == t ? this._bannerAd.show() : this._bannerAd.hide())
                }, e.prototype.ShowVideoAd = function(t) {
                    this._rewardAd && (this._rewardAd.onRewarded(function() {
                        t(!0)
                    }), this._rewardAd.show())
                }, e.prototype.ShowInterstitialAd = function(t) {}, e.prototype.ShowExitAd = function() {}, e.prototype.IsVideoReady = function() {}, e
            }(o.SdkAdapter);
        n.SdkAdapter_OppoQuickGame = a, cc._RF.pop()
    }, {
        "./OppoUtil": "OppoUtil",
        "./SdkAdapter": "SdkAdapter"
    }],
    SdkAdapter_Web: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e8991b1iOBEH5PCcHF/X8X7", "SdkAdapter_Web");
        var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.Init = function() {}, e.prototype.Run = function() {}, e.prototype.DoInitQuery = function(t) {}, e.prototype.DoIAP = function(t, e) {}, e.prototype.ShowBannerAd = function(t) {}, e.prototype.ShowVideoAd = function(t) {
                window.h5api && window.h5api.playAd(function(e) {
                    1e4 === e.code ? (console.log("\u5f00\u59cb\u64ad\u653e"), cc.audioEngine.pauseMusic()) : 10001 === e.code ? (t && t(!0), cc.audioEngine.resumeMusic()) : (console.log("\u5e7f\u544a\u5f02\u5e38"), t && t(!1), cc.audioEngine.resumeMusic())
                })
            }, e.prototype.ShowInterstitialAd = function(t) {}, e.prototype.ShowExitAd = function() {}, e.prototype.IsVideoReady = function() {}, e.prototype.DoShareGameLink = function() {
                window.h5api && window.h5api.share()
            }, e
        }(t("./SdkAdapter").SdkAdapter);
        n.SdkAdapter_Web = o, cc._RF.pop()
    }, {
        "./SdkAdapter": "SdkAdapter"
    }],
    SdkAdapter_Weixin: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f6bf7VAMglHlKoLR686oM4s", "SdkAdapter_Weixin");
        var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = t("./SdkAdapter"),
            r = t("./WxUtil"),
            a = (t("../AppBase/EventsManager").EventsManager.GetInstance(), function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._sBannerAdID = "b7c03a227a326f972cdcf7e6b5e5b7e7", e._sRewardVideoAdID = "810cf58ba4c0333f711fddf464c76ab7", e._sInterAds = "3606de67548f1b373fa1c622b3cd51e9", e._bannerAd = null, e._rewardAd = null, e._appBoxAd = null, e._interAd = null, e._bBoxAdsLoaded = !1, e._videoCallback = null, e._tBannerIDs = ["b7c03a227a326f972cdcf7e6b5e5b7e7", "d83941cec1f056bdce7dc71a1ed0884c", "ffb3baca5609e1789198b25e6c8cd320"], e._nCurBannerIdx = 0, e
                }
                return i(e, t), e.prototype.Init = function() {
                    this._rewardAd = null, this._bannerAd = null, this._videoCallback = null
                }, e.prototype.OnAfterInit = function() {
                    var t = this;
                    setTimeout(function() {
                        t._bannerAd = r.default.getInstance().initBannerAd(t._sBannerAdID, function() {
                            t._bannerAd.show()
                        })
                    }, 5e3), this.InitVideo(), setInterval(function() {
                        t._bannerAd && (t._bannerAd && (t._bannerAd.hide(), t._bannerAd.destroy(), t._bannerAd = null), t._nCurBannerIdx++, t._nCurBannerIdx > 2 && (t._nCurBannerIdx = 0), t._bannerAd = r.default.getInstance().initBannerAd(t._tBannerIDs[t._nCurBannerIdx], function() {
                            t._bannerAd.show()
                        }))
                    }, 15e4)
                }, e.prototype.Run = function() {}, e.prototype.DoInitQuery = function(t) {}, e.prototype.DoIAP = function(t, e) {}, e.prototype.ShowBannerAd = function(t) {
                    this._bannerAd && (t ? this._bannerAd.show() : this._bannerAd.hide())
                }, e.prototype.ShowVideoAd = function(t) {
                    var e = this;
                    this._rewardAd && (this._videoCallback = t, this._rewardAd.show().catch(function(t) {
                        e._rewardAd.load().then(function() {
                            return e._rewardAd.show()
                        })
                    }))
                }, e.prototype.ShowInterstitialAd = function() {}, e.prototype.DoShareGame = function(t) {
                    void 0 === t && (t = {}), r.default.getInstance().share2Wx(t)
                }, e.prototype.ShowExitAd = function() {}, e.prototype.IsVideoReady = function() {}, e.prototype.IsBoxAdsReady = function() {
                    return !1
                }, e.prototype.InitVideo = function() {
                    var t = this;
                    this._rewardAd = r.default.getInstance().initRewardedVideoAd(this._sRewardVideoAdID, {
                        success: function() {
                            console.log("success"), t._videoCallback && t._videoCallback(!0)
                        },
                        fail: function() {
                            console.log("fail"), t._videoCallback && t._videoCallback(!1)
                        }
                    }), this._rewardAd.load()
                }, e.prototype.OnStartQuest = function(t) {
                    console.log("OnStartQuest " + t), r.default.getInstance().onStartQuest(t)
                }, e.prototype.OnFinishQuest = function(t, e) {
                    console.log("OnFinishQuest " + t), r.default.getInstance().onFinishQuest(t, e)
                }, e.prototype.OnSendEvent = function(t) {
                    console.log("OnSendEvent " + t), r.default.getInstance().onSendEvent(t)
                }, e.prototype.SaveSharePic = function(t, e, n, i) {
                    r.default.getInstance().captureScreen(t, e, n, i)
                }, e.prototype.RegLoginButtonAndIcon = function(t, e) {
                    void 0 === e && (e = null), r.default.getInstance().createUserInfoButtonByNode(t, e)
                }, e
            }(o.SdkAdapter));
        n.SdkAdapter_Weixin = a, cc._RF.pop()
    }, {
        "../AppBase/EventsManager": "EventsManager",
        "./SdkAdapter": "SdkAdapter",
        "./WxUtil": "WxUtil"
    }],
    SdkAdapter: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "3e5e4qMWEJG+Jn6IaFSq7q+", "SdkAdapter"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("../AppBase/EventsManager"),
            o = function() {
                function t() {
                    this._tOnlineParams = null
                }
                return t.prototype.Init = function() {}, t.prototype.Run = function() {}, t.prototype.DoInitQuery = function(t) {}, t.prototype.DoIAP = function(t, e) {}, t.prototype.ShowBannerAd = function(t) {}, t.prototype.RegLoginButtonAndIcon = function(t, e) {
                    void 0 === e && (e = null)
                }, t.prototype.ShowVideoAd = function(t) {}, t.prototype.ShowInterstitialAd = function(t) {}, t.prototype.SaveSharePic = function(t, e, n, i) {}, t.prototype.DoShareGame = function() {}, t.prototype.ShowExitAd = function() {}, t.prototype.ShowNativeAd = function(t, e, n, i, o, r) {}, t.prototype.IsVideoReady = function() {}, t.prototype.GetLanguage = function() {
                    return "ZH"
                }, t.prototype.GetCountry = function() {
                    return "CN"
                }, t.prototype.JumpToWebPage = function(t) {}, t.prototype.DoFacebookLogin = function(t) {}, t.prototype.DoShareGameLink = function() {}, t.prototype.IsFacebookLogin = function() {
                    return !1
                }, t.prototype.DoInviteFriends = function() {}, t.prototype.OnAfterInit = function() {}, t.prototype.DoAfterSetOnlineParams = function() {}, t.prototype.DoRestorePayment = function() {}, t.prototype.AddPermanentItemId = function(t) {}, t.prototype.RecordData = function(t, e, n, i) {
                    void 0 === e && (e = ""), void 0 === n && (n = ""), void 0 === i && (i = "")
                }, t.prototype.OnStartQuest = function(t) {}, t.prototype.OnFinishQuest = function(t, e) {}, t.prototype.OnSendEvent = function(t) {}, t.prototype.DoAfterInit = function() {
                    this.REG_EVT_LISTENER("LOG_EVENT", "START_QUEST", this.ON_LOG_EVENT), this.REG_EVT_LISTENER("LOG_EVENT", "FINISH_QUEST", this.ON_LOG_EVENT), this.REG_EVT_LISTENER("LOG_EVENT", "FAILED_QUEST", this.ON_LOG_EVENT), this.REG_EVT_LISTENER("LOG_EVENT", "SET_CUR_LV", this.ON_LOG_EVENT), this.REG_EVT_LISTENER("LOG_EVENT", "CUSTOM_EVENT", this.ON_LOG_EVENT), this.OnAfterInit()
                }, t.prototype.SetOnlineParams = function(t) {
                    this._tOnlineParams = t, console.log("----------SetOnlineParams---------"), this.DoAfterSetOnlineParams()
                }, Object.defineProperty(t.prototype, "OnlineParams", {
                    get: function() {
                        return this._tOnlineParams
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.ON_LOG_EVENT = function(t, e, n) {
                    switch (e) {
                        case "START_QUEST":
                            this.RecordData("start_level", "level_" + n.Val), this.OnStartQuest(n.Val);
                            break;
                        case "FINISH_QUEST":
                            this.RecordData("finish_level", "level_" + n.Val), this.OnFinishQuest(n.Val, !0);
                            break;
                        case "FAILED_QUEST":
                            this.RecordData("failed_level", "level_" + n.Val), this.OnFinishQuest(n.Val, !1);
                            break;
                        case "CUSTOM_EVENT":
                            this.RecordData("game_event", n.Val), this.OnSendEvent(n.Val)
                    }
                }, t.prototype.SEND_EVENT = function(t, e, n) {
                    void 0 === n && (n = []), i.EventsManager.GetInstance().DoNotify(t, e, {
                        Data: n
                    })
                }, t.prototype.REG_EVT_LISTENER = function(t, e, n) {
                    void 0 === n && (n = null), i.EventsManager.GetInstance().AddObservedEvent(t, e, {
                        Target: this,
                        Callback: n
                    })
                }, t
            }();
        n.SdkAdapter = o, cc._RF.pop()
    }, {
        "../AppBase/EventsManager": "EventsManager"
    }],
    SdkUtil: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "25b25Kva7BKHKkHRFiGwQtG", "SdkUtil"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("./SdkAdapter_Web"),
            o = t("./SdkAdapter_Android"),
            r = t("./SdkAdapter_IOS"),
            a = t("./SdkAdapter_Weixin"),
            s = {
                InitByPlatform: function() {
                    var t = null;
                    switch (cc.sys.platform) {
                        case cc.sys.ANDROID:
                            t = new o.SdkAdapter_Android;
                            break;
                        case cc.sys.IPHONE:
                        case cc.sys.IPAD:
                            t = new r.SdkAdapter_IOS;
                            break;
                        case cc.sys.WECHAT_GAME:
                        case cc.sys.WECHAT_GAME:
                            t = new a.SdkAdapter_Weixin;
                            break;
                        default:
                            t = new i.SdkAdapter_Web
                    }
                    return t.Init(), t.DoAfterInit(), t
                }
            };
        n.SdkUtil = s, cc._RF.pop()
    }, {
        "./SdkAdapter_Android": "SdkAdapter_Android",
        "./SdkAdapter_IOS": "SdkAdapter_IOS",
        "./SdkAdapter_Web": "SdkAdapter_Web",
        "./SdkAdapter_Weixin": "SdkAdapter_Weixin"
    }],
    StageBase: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "bd7cfbp/2VP2oqTX641Se29", "StageBase"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("../../Base/init"),
            o = function() {
                function t() {
                    this._LogicLayer = null, this._oGameControllor = null, this._bNeedReset = !1, this._bNeedCountDown = !1, this._bHideQuestLabel = !1, this._bHideQuestBackBtn = !1, this._bHelpBtnInVisible = !1, this._bCheckAccelerateEvent = !1, this._bPauseUpdate = !1, this._nQuestId = 0, this._nQuestConfigId = 0, this._tLoopTimers = {}, this._tDelayTimers = {}, this._tAnimationActions = {}, this._oGameLogic = null, this._oRootNode = null, this._tData = {}, this._bLoaded = !1, this._handerMap = [], this.paused = !1
                }
                return t.prototype.Init = function(t, e) {
                    this._nQuestId = t, this._oGameLogic = e, this.LoadData()
                }, t.prototype.LoadData = function() {
                    var t = this,
                        e = "",
                        n = i._M.DataManager.GetDataByNameAndId("MissionConf", this._nQuestId.toString()).ConfigID;
                    e = n < 100 ? "prefab/stage/stage_00" + n : "prefab/stage/stage_" + n, cc.loader.loadRes(e, function(e, n) {
                        if (null == e) {
                            var i = cc.instantiate(n),
                                o = (cc.view.getVisibleSize(), cc.director.getScene().getChildByName("Canvas"));
                            if (null != o) {
                                var r = o.getChildByName("LogicLayer");
                                null != r && (t._LogicLayer = r, r.addChild(i), i.zIndex = 600, i.getChildByName("bg_play").active = !1, t._oRootNode = i, t.OnInitData(), t.OnInitBehaviors(), t.DefaultInitByConf(), t.DoSpecialStateOpenCheck())
                            }
                        }
                    }), i._M.REG_EVT_LISTENER("LOGIC_EVENT", "PAUSED", function() {
                        this.setPaused(!0)
                    }.bind(this), this), i._M.REG_EVT_LISTENER("LOGIC_EVENT", "RESUME", function() {
                        this.setPaused(!1)
                    }.bind(this), this)
                }, t.prototype.Start = function() {
                    this.OnStart()
                }, t.prototype.SetGameController = function(t) {
                    this._oGameControllor = t
                }, t.prototype.CountDownToStart = function() {}, t.prototype.Destory = function(t) {
                    i._M.REMOVE_ALL_LISTENERS(this), this.removeAllHandlers(), null != this._oRootNode && (this._oRootNode.removeFromParent(), this._oRootNode = null), null != this._LogicLayer && this._LogicLayer.removeAllChildren()
                }, t.prototype.removeAllHandlers = function() {
                    var t = this;
                    this._handerMap.forEach(function(e) {
                        null != e && (t._unschedule(e.key), e = null)
                    })
                }, t.prototype.SeekNode = function(t) {
                    return i._M.UIManager.SeekNodeByPath(this._oRootNode, t)
                }, t.prototype.SetNodeVisible = function(t, e) {
                    this.SeekNode(t).active = e
                }, t.prototype.GetLabelString = function(t) {
                    var e = this.SeekNode(t);
                    if (null != e) return e.getComponent(cc.Label).string
                }, Object.defineProperty(t.prototype, "NeedCountDown", {
                    get: function() {
                        return this._bNeedCountDown
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.Passed = function(t, e) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), this._oGameLogic.Passed(t, e)
                }, t.prototype.Failed = function(t, e) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), this._oGameLogic.Failed(t, e)
                }, t.prototype.IsTouchNode = function(t, e) {
                    for (var n = 0, i = e; n < i.length; n++) {
                        var o = i[n];
                        if (t.getBoundingBoxToWorld().contains(o)) return !0
                    }
                    return !1
                }, t.prototype.SEND_LOGIC_EVENT = function(t, e) {
                    i._M.SEND_EVENT("LOGIC_EVENT", t, e)
                }, t.prototype.RunDelayTimer = function(t, e) {
                    void 0 === e && (e = .01), this._schedule(this.initHandler(t), 0, 1, e)
                }, t.prototype.RunLoopTimer = function(t, e) {
                    void 0 === e && (e = .01), this._schedule(this.initHandler(t), e, NaN, 0)
                }, t.prototype.initHandler = function(t) {
                    var e = function(e) {
                        this.paused || t(e)
                    }.bind(this);
                    return this._handerMap.push({
                        key: e,
                        value: t
                    }), e
                }, t.prototype.removeHandler = function(t) {
                    var e = this;
                    this._handerMap.forEach(function(n) {
                        null != n && n.value == t && (e._unschedule(n.key), n = null)
                    })
                }, t.prototype.RemoveTimer = function(t) {
                    this.removeHandler(t)
                }, t.prototype.setPaused = function(t) {
                    console.info("TimerPaused", t), this.paused = t
                }, t.prototype._schedule = function(t, e, n, i) {
                    e = e || 0, n = isNaN(n) ? cc.macro.REPEAT_FOREVER : n, i = i || 0, cc.director.getScheduler().schedule(t, this._oRootNode, e, n, i, !1)
                }, t.prototype._unschedule = function(t) {
                    t && cc.director.getScheduler().unschedule(t, this._oRootNode)
                }, t.prototype.DoSpecialStateOpenCheck = function() {
                    this._bCheckAccelerateEvent ? i._M.SEND_EVENT("GAME_EVENT", "DEVICE_MOTION_CHNAGE", {
                        Open: !0
                    }) : i._M.SEND_EVENT("GAME_EVENT", "DEVICE_MOTION_CHNAGE", {
                        Open: !1
                    })
                }, t.prototype.OnInitData = function() {}, t.prototype.OnStart = function() {}, t.prototype.OnInitBehaviors = function() {}, t.prototype.DefaultInitByConf = function() {}, t.prototype.OnDestroy = function() {}, t
            }();
        n.StageBase = o, cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    SvgMgr: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "58bdaeLzjZBroCC1Ego+o2L", "SvgMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("../AppBase/EventsManager"),
            o = function() {
                function t() {
                    this._loadedTask = [], this._runningTask = [], this._loadedSvgData = {}
                }
                return t.GetInstance = function() {
                    return null == this._Instance && (this._Instance = new t), this._Instance
                }, t.prototype.onLoad = function() {}, t.prototype.onDestroy = function() {
                    if (!(this._runningTask.length >= 1)) {
                        for (var t = 0; t < this._runningTask.length; ++t) {
                            if (this._runningTask[t][2] == this) return void this._runningTask.splice(t, 1)
                        }
                        for (var e = 0; e < this._loadedTask.length; ++e) {
                            if (this._loadedTask[e][2] == this) return void this._loadedTask.splice(e, 1)
                        }
                    }
                }, t.prototype.start = function() {}, t.prototype._doLoadFileData = function(t, e, n) {
                    var i = this;
                    this._loadedSvgData[e] ? this._addLoadTask("", e, n, this.GetSvgData(e)) : cc.loader.loadRes(t, function(t, o) {
                        t ? cc.error(t.toString()) : i._addLoadTask(o.json, e, n, null)
                    })
                }, t.prototype._addLoadTask = function(t, e, n, o) {
                    var r = this;
                    if (this._runningTask.length >= 1) this._loadedTask.push([t, e, n]);
                    else {
                        var a = window.R.SVG;
                        this._runningTask.push([t, e, n, o]), a.setLoadCallback(function(t) {
                            for (var n = 0; n < r._runningTask.length; ++n) {
                                var o = r._runningTask[n];
                                if (o[1] == e) {
                                    var a = o[2];
                                    a && a(e, t)
                                }
                                if (r._runningTask.shift(), r._loadedTask.length > 0) {
                                    var s = r._loadedTask.shift();
                                    s && r._addLoadTask(s[0], s[1], s[3], s[4])
                                } else i.EventsManager.GetInstance().DoNotify("GAME_EVENT", "LOADED_ALL_SVG");
                                return
                            }
                        }), o ? a.loadParsedData(o) : a.parseJsonData(t)
                    }
                }, t.prototype.RemoveAll = function() {
                    this._runningTask = [], this._loadedTask = []
                }, t.prototype.LoadData = function(t, e) {
                    var n = this;
                    void 0 === e && (e = null), this._doLoadFileData("svg/" + t, t, function(i, o) {
                        n._loadedSvgData[t] = o, e && e(i, o)
                    })
                }, t.prototype.LoadFromJson = function(t, e, n) {
                    this._addLoadTask("", e, n, {
                        Json: !0,
                        Data: t
                    })
                }, t.prototype.GetSvgData = function(t) {
                    return this._loadedSvgData[t]
                }, t._Instance = null, t
            }();
        n.SvgMgr = o, cc._RF.pop()
    }, {
        "../AppBase/EventsManager": "EventsManager"
    }],
    Svg: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f3e81hYaV5JJ7KNYXo1qOdr", "Svg");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = cc._decorator,
            a = r.ccclass,
            s = r.property,
            c = t("../../Base/init"),
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.id = "", e._bHideLines = null, e._bHideBlocks = null, e
                }
                return i(e, t), e.prototype.onLoad = function() {
                    "" != this.id && this.LoadData(this.id)
                }, e.prototype.onDestroy = function() {}, e.prototype.start = function() {}, e.prototype.checkPointInWitchBlock = function(t, e) {
                    var n = this.node.getComponent("R.group");
                    n && n.checkPointInWitchBlock(t, e)
                }, e.prototype.doSelFillColor = function(t) {
                    var e = this.node.getComponent("R.group");
                    e && e.doSelFillColor(t)
                }, e.prototype.getSelColorPathData = function(t) {
                    var e = this.node.getComponent("R.group");
                    if (e) return e.getSelColorPathData(t)
                }, e.prototype.getSelColorUnfilled = function(t) {
                    var e = this.node.getComponent("R.group");
                    if (e) return e.getSelColorUnfilled(t)
                }, e.prototype.getAllBlocks = function() {
                    var t = this.node.getComponent("R.group");
                    if (t) return t.getAllBlocks()
                }, e.prototype.getColorSaveData = function() {
                    var t = this.node.getComponent("R.group");
                    if (t) return t.getColorSaveData()
                }, e.prototype.setHideLines = function(t) {
                    if (this._bHideLines != t) {
                        this._bHideLines = t;
                        var e = this.node.getComponent("R.group");
                        e && e.setHideLines(t)
                    }
                }, e.prototype.setDrawMode = function(t) {
                    var e = this.node.getComponent("R.group");
                    e && e.setDrawMode(t)
                }, e.prototype.setHideBlocks = function(t, e, n) {
                    if (void 0 === e && (e = ""), void 0 === n && (n = !1), this._bHideBlocks != t || n) {
                        this._bHideBlocks = t;
                        var i = this.node.getComponent("R.group");
                        i && i.setHideBlocks(t, e)
                    }
                }, e.prototype.setLinesMaterial = function(t) {
                    var e = this.node.getComponent("R.group");
                    e && e.setLinesMaterial(t)
                }, e.prototype.forceDirty = function() {
                    var t = this.node.getComponent("R.group");
                    t && t.forceDirty()
                }, e.prototype.LoadData = function(t, e) {
                    void 0 === e && (e = null), this.id = t, c._M.SvgMgr.LoadData(this.id, e)
                }, e.prototype.LoadDataAndDraw = function(t, e, n) {
                    var i = this;
                    void 0 === e && (e = !1), void 0 === n && (n = null), this.id = t, c._M.SvgMgr.LoadData(this.id, function(t, e) {
                        var o = i.node.getComponent("R.group");
                        o ? o.clear() : o = i.node.addComponent("R.group"), o.setDrawCallback(n), o.createGroupAndNode(e)
                    })
                }, e.prototype.DoDrawSvgTask = function(t, e, n) {
                    var i = this.node.getComponent("R.group");
                    i ? i.clear() : i = this.node.addComponent("R.group"), i.setDrawCallback(n), i.createGroupAndNode(t, e)
                }, e.prototype.DoDrawSvgTaskEx = function(t, e, n, i, o, r) {
                    var a = this.node.getComponent("R.group");
                    a ? a.clear() : a = this.node.addComponent("R.group"), a.setDrawCallback(r), a.createGroupAndNodeEx(t, e, n, i, o), a.forceDirty()
                }, e.prototype.setDrawCallback = function(t) {
                    var e = this.node.getComponent("R.group");
                    e && e.setDrawCallback(t)
                }, e.prototype.ForceClear = function() {
                    var t = this.node.getComponent("R.group");
                    t && t.clear()
                }, o([s], e.prototype, "id", void 0), e = o([a], e)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    TestScene: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "33f6agXfhRMZYvNk4ui8k91", "TestScene");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("./App/comp/Svg"),
            a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._nBeganLen = 0, e._nBeganScale = 0, e._tBeganTouchPos = null, e._tBeganPanelPos = null, e._oPanel = null, e._oLogicLayer = null, e._oSvg = null, e._oSvg2 = null, e._tar = null, e._anchor = null, e._tTouches = [], e._sCurSelColor = "", e
                }
                return i(e, t), e.prototype.onLoad = function() {
                    var t = cc.view.getVisibleSize();
                    t.width / t.height > .57 && (this.node.getComponent(cc.Canvas).fitHeight = !0, this.node.getComponent(cc.Canvas).fitWidth = !1);
                    var e = this.Seek("LogicLayer/panel"),
                        n = this.Seek("scale_touch");
                    this._oPanel = e;
                    var i = this.Seek("LogicLayer");
                    this._oLogicLayer = i, this._oSvg = this.Seek("render/svg"), this._oSvg2 = this.Seek("LogicLayer/panel/anchor/svg2"), this._tar = this.Seek("LogicLayer/panel/anchor/tar"), this._anchor = this.Seek("LogicLayer/panel/anchor"), i.on(cc.Node.EventType.TOUCH_START, this.touchStart.bind(this), this), i.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove.bind(this), this), i.on(cc.Node.EventType.TOUCH_END, this.touchEnd.bind(this), this), i.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd.bind(this), this), n.on(cc.Node.EventType.TOUCH_MOVE, this.scaleTouchMove.bind(this), this)
                }, e.prototype.start = function() {
                    var t = this,
                        e = this._oSvg2.getComponent(r.default);
                    e.LoadDataAndDraw("0080033", !1, function() {
                        e.setHideLines(!1), e.setHideBlocks(!0), e.setDrawMode(1);
                        var n = e.getAllBlocks();
                        t.ShowBlockNums(n)
                    })
                }, e.prototype.Seek = function(t) {
                    return cc.find(t, this.node)
                }, e.prototype.ShowBlockNums = function(t) {
                    var e = this.Seek("LogicLayer/panel/anchor/numbers").getComponent(cc.Graphics),
                        n = this.Seek("LogicLayer/panel/anchor/numbers2").getComponent(cc.Graphics),
                        i = this.Seek("LogicLayer/panel/anchor/numbers3").getComponent(cc.Graphics),
                        o = this.Seek("LogicLayer/panel/anchor/label"),
                        r = this.Seek("Label");
                    e.clear(), n.clear(), i.clear(), o.removeAllChildren();
                    for (var a = t.length - 1; a >= 0; a--) {
                        if (t[a]) {
                            var s = t[a]._data.Curves[0][3];
                            this.GetCenter(s);
                            e.moveTo(s[0][0], s[0][1]);
                            for (var c = 0; c < s.length; ++c) {
                                var l = s[c];
                                e.lineTo(l[0], l[1])
                            }
                            e.stroke()
                        }
                    }
                    var u = function(e) {
                        if (t[e]) {
                            var n = [];
                            t[e]._data.Curves[0][3].forEach(function(t) {
                                n.push(cc.v2(t[0], t[1]))
                            });
                            var a = [];
                            Math.abs(t[e]._data.MaxAns);
                            t[e]._data.Curves.forEach(function(t) {
                                a.push(t[3])
                            });
                            var s = (0, window.Polylabel)(a, 1);
                            i.circle(s[0], s[1], s[2]), i.stroke();
                            var c = cc.instantiate(r),
                                l = s[2] / 13;
                            c.scaleY = -l, c.scaleX = l, c.position = cc.v2(s[0], s[1]), c.getComponent(cc.Label).string = "88", c.color = cc.color(255, 255, 255), o.addChild(c)
                        }
                    };
                    for (a = t.length - 1; a >= 0; a--) u(a);
                    var h = function(e) {
                        if (t[e]) {
                            var n = [];
                            t[e]._data.Curves[0][3].forEach(function(t) {
                                n.push(cc.v2(t[0], t[1]))
                            });
                            var a = [],
                                s = Math.abs(t[e]._data.MaxAns);
                            t[e]._data.Curves.forEach(function(t) {
                                a.push(t[3])
                            });
                            var c = (0, window.Polylabel)(a, 1);
                            i.circle(c[0], c[1], 2), i.fill();
                            var l = cc.instantiate(r),
                                u = s / 1200;
                            u < .05 ? u = .05 : u >= .8 && (u = .8), l.scaleY = -u, l.scaleX = u, l.position = cc.v2(c[0], c[1]), l.getComponent(cc.Label).string = "" + e, o.addChild(l)
                        }
                    };
                    for (a = t.length - 1; a >= 0; a--) h(a)
                }, e.prototype._splitPolygon = function(t) {
                    for (var e, n, i, o, r, a, s = [], c = t.length, l = [], u = 0; u < c - 1; ++u) {
                        a = 0 == u ? c - 1 : u - 1, e = cc.v2(t[a][0], t[a][1]), n = cc.v2(t[u][0], t[u][1]), i = cc.v2(t[(u + 1) % c][0], t[(u + 1) % c][1]), o = n.sub(e), r = i.sub(n), s.push([n, i]);
                        var h = o.cross(r);
                        h < 0 ? l.push([n, i.add(r.mul(1e3))]) : 0 == h && console.log("---")
                    }
                }, e.prototype._SimplifyPolygon = function(t) {
                    if (t.length <= 4) return t;
                    var e, n, i, o, r, a = [],
                        s = 0,
                        c = 0;
                    a.push(t[0]);
                    for (var l = 1; l < t.length; ++l) i = a[a.length - 1], e = t[l % t.length], n = t[(l + 1) % t.length], o = e.sub(i), r = n.sub(e), s = o.mag(), c = r.mag(), (!o.normalizeSelf().fuzzyEquals(r.normalizeSelf(), .3) || s > 15 || c + s > 20) && a.push(e);
                    return a
                }, e.prototype._IntersectPoly = function(t, e) {
                    for (var n = this.Seek("LogicLayer/panel/anchor/numbers3").getComponent(cc.Graphics), i = 0; i < e.length; ++i) {
                        var o = this.LineIntersect(t[0], t[1], e[i][0], e[i][1]);
                        o && n.circle(o.x, o.y, 1), n.moveTo(t[0].x, t[0].y), n.lineTo(t[1].x, t[1].y), n.stroke()
                    }
                    return []
                }, e.prototype.GetCenter = function(t) {
                    var e = 0,
                        n = 0;
                    return t.forEach(function(t) {
                        e += t.x, n += t.y
                    }), [e / t.length, n / t.length]
                }, e.prototype.LineIntersect = function(t, e, n, i) {
                    var o = null,
                        r = e.y - t.y,
                        a = t.x - e.x,
                        s = r * t.x + a * t.y,
                        c = i.y - n.y,
                        l = n.x - i.x,
                        u = c * n.x + l * n.y,
                        h = r * l - c * a;
                    return this.FloatEquals(h, 0) || ((o = cc.v2()).x = (l * s - a * u) / h, o.y = (r * u - c * s) / h), o
                }, e.prototype.FloatEquals = function(t, e) {
                    return Math.abs(t - e) <= 1e-6
                }, e.prototype.touchStart = function(t) {
                    var e = t.getTouches();
                    if (1 == e.length) {
                        var n = e[0].getID(),
                            i = e[0].getLocation();
                        this.addTouch(n, i)
                    } else if (2 == e.length) {
                        var o = e[0].getID(),
                            r = e[1].getID(),
                            a = e[0].getLocation(),
                            s = e[1].getLocation();
                        this.addTouch(o, a), this.addTouch(r, s)
                    }
                }, e.prototype.touchMove = function(t) {
                    var e = this,
                        n = t.getTouches(),
                        i = cc.v2();
                    if (n.forEach(function(t) {
                            var n = t.getID(),
                                o = t.getLocation();
                            if (e.updateTouch(n, o), 2 == e._tTouches.length) {
                                var r = e._tTouches[0][1],
                                    a = e._tTouches[1][1];
                                i = r.add(a).mul(.5);
                                var s = r.sub(a).mag(),
                                    c = e._nBeganScale * (s / e._nBeganLen);
                                c < 1 ? c = 1 : c >= 15 && (c = 15), e._oPanel.scale = c
                            }
                        }), 2 == n.length) {
                        var o = this._tBeganTouchPos;
                        this._oPanel.position = this._tBeganPanelPos.add(i.sub(o))
                    }
                }, e.prototype.touchEnd = function(t) {
                    var e = this;
                    if (t.getTouches().forEach(function(t) {
                            e.removeTouch(t.getID())
                        }), 1 == this._tTouches.length) this._tBeganTouchPos = this._tTouches[0][1], this._tBeganPanelPos = this._oPanel.getPosition();
                    else {
                        t.getStartLocation(), t.getLocation();
                        this._tBeganTouchPos = null, this._tBeganPanelPos = null
                    }
                }, e.prototype.addTouch = function(t, e) {
                    if (!(this._tTouches.length >= 2))
                        if (0 == this._tTouches.length) this._tTouches.push([t, e]), this._tBeganTouchPos = e, this._tBeganPanelPos = this._oPanel.getPosition();
                        else if (1 == this._tTouches.length) {
                        this._tTouches.push([t, e]);
                        var n = this._tTouches[0][1],
                            i = n.add(e).mul(.5),
                            o = this._anchor.convertToWorldSpaceAR(cc.v2(0, 0)),
                            r = this._oLogicLayer.convertToNodeSpaceAR(i);
                        this._oPanel.setPosition(r), this._tar.position = this._oPanel.convertToNodeSpace(o), this._anchor.position = this._oSvg.position, this._tBeganPanelPos = r, this._tBeganTouchPos = i, this._nBeganLen = n.sub(e).mag(), this._nBeganScale = this._oPanel.scale
                    }
                }, e.prototype.scaleTouchMove = function(t) {
                    var e = t.getLocation(),
                        n = this.Seek("scale_touch/spr"),
                        i = this.Seek("scale_touch").convertToNodeSpace(e),
                        o = 0;
                    i.x >= 0 && i.x <= 500 && (o = 1 + i.x / 500 * 14, this._oPanel.scale = o, n.x = -250 + i.x)
                }, e.prototype.updateTouch = function(t, e) {
                    var n = this,
                        i = 0;
                    this._tTouches.forEach(function(o) {
                        var r = o[0],
                            a = n._tBeganTouchPos;
                        1 == n._tTouches.length && 0 == i && (n._oPanel.position = n._tBeganPanelPos.add(e.sub(a))), r == t && (o[1] = e), i++
                    })
                }, e.prototype.removeTouch = function(t) {
                    for (var e = 0; e < 2; e++) {
                        var n = this._tTouches[e];
                        if (n && n[0] == t) return void this._tTouches.splice(e, 1)
                    }
                }, e.prototype.ON_GAME_EVENT = function(t, e, n) {
                    if ("COLOR_CHANGED" == e) {
                        var i = n.Color;
                        (o = this._oSvg.getComponent(r.default)) && o.doSelFillColor(i), this._sCurSelColor = i
                    } else if ("DESTORY_LOGIC" == e) var o = this._oSvg.getComponent(r.default)
                }, e = o([s], e)
            }(cc.Component));
        n.default = c, cc._RF.pop()
    }, {
        "./App/comp/Svg": "Svg"
    }],
    TimeUtility: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "f303dHZiz9Id5QIMDZzHuN9", "TimeUtility"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {}
            return t.GetInstance = function() {
                return null == this._Instance && (this._Instance = new t), this._Instance
            }, t.prototype.GetBeginTimeVal = function(t) {
                void 0 === t && (t = 0);
                0 == t && (t = (new Date).getTime());
                var e = new Date;
                return e.setTime(t), e.setHours(0, 0, 0, 0), e.getTime()
            }, t._Instance = null, t
        }();
        n.TimeUtility = i, cc._RF.pop()
    }, {}],
    UIBaseClass: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2d82bNQ9WVCs4erq41ppKtD", "UIBaseClass");
        var i = this && this.__extends || function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            };
            return function(e, n) {
                function i() {
                    this.constructor = e
                }
                t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = t("./UIManager"),
            r = t("../AppBase/EventsManager"),
            a = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._sUIPath = "", e._tData = null, e._bScaleOpenAction = !1, e._bIsTopLayerUI = !1, e._sUIName = "", e
                }
                return i(e, t), e.prototype.onLoad = function() {
                    this.OnRegEventsHandlers()
                }, e.prototype.start = function() {}, e.prototype.onEnable = function() {
                    this.updateFitUI(), this.OnShowUI()
                }, e.prototype.updateFitUI = function() {
                    var t = cc.view.getVisibleSize();
                    cc.sys.platform;
                    t.width / t.height >= .52 || this.node.children.forEach(function(t) {
                        var e = t.getComponent(cc.Widget);
                        e && (e.top += 70)
                    })
                }, e.prototype.onDisable = function() {
                    this.OnCloseUI()
                }, e.prototype.onDestroy = function() {
                    r.EventsManager.GetInstance().RemoveObjectAllHandlers(this), this.OnDestroyUI()
                }, e.prototype.Seek = function(t) {
                    return o.UIManager.GetInstance().SeekNodeByPath(this.node, t)
                }, e.prototype.OnClicked = function(t, e) {
                    var n = this,
                        i = this.Seek(t);
                    i && i.on("click", function(t) {
                        i && i.isValid && e.bind(n)(i), r.EventsManager.GetInstance().DoNotify("GAME_EVENT", "BTN_CLICKED")
                    })
                }, e.prototype.OnToggle = function(t, e) {
                    var n = this,
                        i = this.Seek(t);
                    i && i.on("toggle", function(t) {
                        i && i.isValid && e.bind(n)(i), r.EventsManager.GetInstance().DoNotify("GAME_EVENT", "BTN_TOGGLE")
                    })
                }, e.prototype.Close = function() {
                    var t = this;
                    r.EventsManager.GetInstance().DoNotify("UI_EVENT", "CLOSE_UI", {
                        Name: this._sUIName
                    }), this._bScaleOpenAction ? this.DoScaleCloseAction(function() {
                        t.node.active = !1
                    }) : this.node.active = !1
                }, e.prototype.Show = function() {
                    if (this.node) {
                        this.node.active = !0;
                        var t = this.node.parent;
                        this.node.parent = t, this.DoScaleOpenAction(), r.EventsManager.GetInstance().DoNotify("UI_EVENT", "SHOW_UI", {
                            Name: this._sUIName
                        })
                    }
                }, e.prototype.Destory = function() {
                    this.node && (this.node.removeComponent && this.node.removeComponent(this), this.node.removeFromParent && this.node.removeFromParent(!0))
                }, e.prototype.IsShow = function() {
                    return this.node.active
                }, e.prototype.SetData = function(t) {
                    this._tData = t
                }, e.prototype.SetNodeLabel = function(t, e) {
                    t.getComponent(cc.Label).string = e
                }, e.prototype.SetNodeVisible = function(t, e) {
                    this.Seek(t).active = e
                }, e.prototype.SetLabel = function(t, e, n) {
                    var i, r;
                    (void 0 === n && (n = null), null != n) ? (r = o.UIManager.GetInstance().SeekNodeByPath(n, t)) && (i = r.getComponent(cc.Label)) : (r = this.Seek(t)) && (i = r.getComponent(cc.Label));
                    i && (i.string = e, i._updateRenderData(!0))
                }, e.prototype.SetSpriteUrl = function(t, e, n, i, o) {
                    void 0 === n && (n = !1), void 0 === i && (i = -1), void 0 === o && (o = -1);
                    var r = null;
                    if ("string" == typeof t ? r = this.Seek(t) : t instanceof cc.Node && (r = t), r) {
                        var a = r.getComponent(cc.Sprite);
                        a && (n ? cc.loader.load(e, function(t, e) {
                            a.spriteFrame = new cc.SpriteFrame(e);
                            var n = r.getContentSize();
                            r.scaleX = i / n.width, r.scaleY = o / n.height
                        }) : cc.loader.loadRes(e, function(t, e) {
                            a.spriteFrame = new cc.SpriteFrame(e);
                            var n = r.getContentSize();
                            r.scaleX = i / n.width, r.scaleY = o / n.height
                        }))
                    }
                }, e.prototype.GetData = function(t) {
                    if (void 0 === t && (t = null), null != this._tData) return null == t ? this._tData : this._tData[t]
                }, e.prototype.DoScaleOpenAction = function() {
                    if (1 == this._bScaleOpenAction) {
                        var t = this.Seek("ref");
                        if (null != t) {
                            t.setScale(0);
                            var e = cc.scaleTo(.15, 1.1),
                                n = cc.scaleTo(.1, .9),
                                i = cc.scaleTo(.05, 1),
                                o = cc.sequence([e, n, i]);
                            t.runAction(o)
                        }
                    }
                }, e.prototype.DoScaleCloseAction = function(t) {
                    if (void 0 === t && (t = null), 1 == this._bScaleOpenAction) {
                        var e = this.Seek("ref");
                        null != e && (e.setScale(1), e.runAction(cc.sequence([cc.scaleTo(.3, 0), cc.callFunc(t)])))
                    }
                }, Object.defineProperty(e.prototype, "UIName", {
                    get: function() {
                        return this._sUIName
                    },
                    set: function(t) {
                        this._sUIName = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "IsTopUI", {
                    get: function() {
                        return this._bIsTopLayerUI
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.OnInitData = function() {}, e.prototype.OnRegEventsHandlers = function() {}, e.prototype.OnShowUI = function() {}, e.prototype.OnCloseUI = function() {}, e.prototype.OnDestroyUI = function() {}, e
            }(cc.Component);
        n.UIBaseClass = a, cc._RF.pop()
    }, {
        "../AppBase/EventsManager": "EventsManager",
        "./UIManager": "UIManager"
    }],
    UIDailyQuest: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "d3a581N8BFLobbTpO2wPSj9", "UIDailyQuest");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.OnInitData = function() {
                    this._bScaleOpenAction = !1
                }, e.prototype.OnRegEventsHandlers = function() {
                    this.OnClicked("main/bottom/home_btn", this.OnClickedHomeBtn), this.OnClicked("main/bottom/record_btn", this.OnClickedRecordBtn), this.OnClicked("main/bottom/setting_btn", this.OnClickedSettingBtn), this.OnClicked("main/quest_signin/go_btn", this.OnClickedSignin), this.OnClicked("main/quest_gold/go_btn", this.OnClickedGold), this.OnClicked("main/quest_fill_color_1/go_btn", this.OnClickedFillColor1), this.OnClicked("main/quest_fill_color_3/go_btn", this.OnClickedFillColor3)
                }, e.prototype.OnShowUI = function() {
                    this.UpdateAllView(), this.CreateLoginButton()
                }, e.prototype.OnCloseUI = function() {}, e.prototype.OnDestroyUI = function() {}, e.prototype.OnClickedCloseBtn = function() {
                    this.Close()
                }, e.prototype.OnClickedDoubleBtn = function() {}, e.prototype.OnClickedNormalBtn = function() {}, e.prototype.OnClickedHomeBtn = function() {
                    r._M.LOG_EVENT("UIMenu_click_record_btn"), r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                        Name: "Menu"
                    })
                }, e.prototype.OnClickedRecordBtn = function() {
                    r._M.LOG_EVENT("UIMenu_click_record_btn"), r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                        Name: "Record"
                    })
                }, e.prototype.OnClickedSettingBtn = function() {
                    r._M.LOG_EVENT("UIMenu_click_setting"), r._M.UIManager.ShowUI("UISetting")
                }, e.prototype.OnClickedSignin = function() {
                    r._M.GetDataVal("TodayDoSigin") || r._M.TimeUtility.GetBeginTimeVal() - r._M.GetDataVal("LastSignTime") >= 864e5 && r._M.UIManager.ShowUI("UISignIn")
                }, e.prototype.OnClickedGold = function() {
                    var t = this,
                        e = r._M.GetDataVal("TodayVideoGoldCount");
                    console.log("nTodayVideoGoldCount----" + e), e <= 0 || r._M.ShowSystemDialog("\u662f\u5426\u89c2\u770b\u5e7f\u544a\u9886\u53d650\u91d1\u5e01?", function() {
                        r._M.SDK.ShowVideoAd(function(e) {
                            if (e) {
                                var n = r._M.CONST("GAME_VIDEO_ADD_GOLD");
                                r._M.MofidyDataVal("Gold", n), r._M.UIManager.ShowUI("UIGetItem", {
                                    Gold: n
                                }), r._M.MofidyDataVal("TodayVideoGoldCount", -1), t.UpdateAllView()
                            } else r._M.ShowSystemTipsEx("STR_VIEW_VIDEO_FAILED")
                        })
                    })
                }, e.prototype.OnClickedFillColor1 = function() {
                    var t = r._M.GetDataVal("GetPicReward1"),
                        e = r._M.GetDataVal("TodayFinishPic"),
                        n = r._M.CONST("GAME_FINISH_PIC_QUEST_1");
                    e < 1 ? this.DoGoToDrawUnfinishedPic() : t || (r._M.MofidyDataVal("Gold", n), r._M.UIManager.ShowUI("UIGetItem", {
                        Gold: n
                    }), r._M.SetDataVal("GetPicReward1", !0), this.UpdateAllView())
                }, e.prototype.OnClickedFillColor3 = function() {
                    var t = r._M.GetDataVal("GetPicReward3"),
                        e = r._M.GetDataVal("TodayFinishPic"),
                        n = r._M.CONST("GAME_FINISH_PIC_QUEST_3");
                    e < 3 ? this.DoGoToDrawUnfinishedPic() : t || (r._M.MofidyDataVal("Gold", n), r._M.UIManager.ShowUI("UIGetItem", {
                        Gold: n
                    }), r._M.SetDataVal("GetPicReward3", !0), this.UpdateAllView())
                }, e.prototype.DoGoToDrawUnfinishedPic = function() {
                    var t = r._M.GetPicStatu(),
                        e = !1;
                    if (t)
                        for (var n = 0; n < t.length; ++n) {
                            var i = t[n],
                                o = r._M.GetPicColorData(i);
                            if (r._M.IsUnlockedPic(i) && !o || "" == o || o.match("0")) return e = !0, r._M.UpdatePicStatu(i), void r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                                Name: "Game",
                                PicId: i
                            })
                        }
                    if (!e) {
                        var a = [];
                        for (var s in r._M.InitUnlockPic) a.push(s);
                        if (!(i = a[Math.floor(Math.random() * a.length)])) return;
                        r._M.UpdatePicStatu(i), r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                            Name: "Game",
                            PicId: i
                        })
                    }
                }, e.prototype.UpdateAllView = function() {
                    var t = r._M.GetDataVal("TodayDoSigin"),
                        e = r._M.GetDataVal("GetPicReward1"),
                        n = r._M.GetDataVal("GetPicReward3"),
                        i = r._M.GetDataVal("TodayVideoGoldCount"),
                        o = r._M.GetDataVal("TodayFinishPic"),
                        a = o;
                    a > 1 && (a = 1);
                    var s = o;
                    (s > 3 && (s = 3), t) && (this.SetLabel("main/quest_signin/progress", r._M.GET_GAME_STR("STR_SIGNED")), this.SetLabel("main/quest_signin/go_btn/label", r._M.GET_GAME_STR("STR_SIGNED")), (c = this.Seek("main/quest_signin/go_btn")).getComponent(cc.Button).enabled = !1, c.color = cc.Color.GRAY);
                    if (i <= 0) {
                        var c, l = this.Seek("main/quest_gold/go_btn/label");
                        this.SetLabel("main/quest_gold/go_btn/label", r._M.GET_GAME_STR("STR_ALREADY_GET")), this.SetNodeVisible("main/quest_gold/go_btn/icon", !1), (c = this.Seek("main/quest_gold/go_btn")).getComponent(cc.Button).enabled = !1, l.setPosition(0, 0), c.color = cc.Color.GRAY
                    }
                    a >= 1 && (e ? (this.SetLabel("main/quest_fill_color_1/go_btn/label", r._M.GET_GAME_STR("STR_ALREADY_GET")), (c = this.Seek("main/quest_fill_color_1/go_btn")).getComponent(cc.Button).enabled = !1, c.color = cc.Color.GRAY) : (this.SetLabel("main/quest_fill_color_1/go_btn/label", r._M.GET_GAME_STR("STR_CAN_GET")), (c = this.Seek("main/quest_fill_color_1/go_btn")).color = cc.Color.ORANGE));
                    s >= 3 && (n ? (this.SetLabel("main/quest_fill_color_3/go_btn/label", r._M.GET_GAME_STR("STR_ALREADY_GET")), (c = this.Seek("main/quest_fill_color_3/go_btn")).getComponent(cc.Button).enabled = !1, c.color = cc.Color.GRAY) : (this.SetLabel("main/quest_fill_color_3/go_btn/label", r._M.GET_GAME_STR("STR_CAN_GET")), (c = this.Seek("main/quest_fill_color_3/go_btn")).color = cc.Color.ORANGE));
                    this.SetLabel("main/quest_gold/progress", r._M.GET_GAME_STR("STR_CAN_GET") + (3 - i) + "/3"), this.SetLabel("main/quest_fill_color_1/progress", r._M.GET_GAME_STR("STR_FINISHED") + a + "/1"), this.SetLabel("main/quest_fill_color_3/progress", r._M.GET_GAME_STR("STR_FINISHED") + s + "/3")
                }, e.prototype.CreateLoginButton = function() {
                    var t = cc.director.getScene(),
                        e = (cc.view.getFrameSize(), cc.view.getScaleY(), t.getChildByName("Canvas")),
                        n = this.Seek("top/anchor"),
                        i = this.Seek("top/head_frame"),
                        o = this.Seek("top/login_tips"),
                        a = this.Seek("top/mask/head_icon"),
                        s = this.Seek("top/user_name"),
                        c = i.getContentSize(),
                        l = e.getContentSize(),
                        u = this.node.convertToNodeSpaceAR(n.convertToWorldSpace(cc.v2(0, 0))),
                        h = 0;
                    this.Seek("top").getComponent(cc.Widget).top >= 10 && (h = this.Seek("top").getComponent(cc.Widget).top);
                    var _ = u.x / l.width,
                        d = (-u.y - h) / l.height,
                        f = c.width / l.width,
                        p = c.height / l.height;
                    if (r._M._tUserInfo) {
                        var g = r._M._tUserInfo;
                        return s.getComponent(cc.Label).string = g.nickName, o.active = !1, void cc.loader.load({
                            url: g.avatarUrl,
                            type: "jpg"
                        }, function(t, e) {
                            a.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e)
                        })
                    }
                    var S = cc.rect(_, d, f, p);
                    r._M.SDK.RegLoginButtonAndIcon(S, function(t) {
                        var e = t.userInfo;
                        e && (r._M._tUserInfo = e, o.active = !1, s.getComponent(cc.Label).string = e.nickName, cc.loader.load({
                            url: e.avatarUrl,
                            type: "jpg"
                        }, function(t, e) {
                            a.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e)
                        }))
                    })
                }, e = o([s], e)
            }(r._M.UIBaseClass));
        n.default = c, r._M.UIManager.RegisterUIModule("UIDailyQuest", c), cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    UIDebug: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9efb3T/neNPJJ6vS8PpuTGq", "UIDebug");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = cc._decorator,
            s = a.ccclass;
        a.property;
        window._bShowAuxLine = !0;
        var c = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return i(e, t), e.prototype.OnInitData = function() {
                this._bIsTopLayerUI = !0
            }, e.prototype.OnRegEventsHandlers = function() {
                this.OnClicked("switch_btn", this.OnClickedSwitchBtn), this.OnClicked("panel/clear_btn", this.OnClickedClearBtn), this.OnClicked("panel/finish_pic_btn", this.OnClickedFinishPicBtn), this.OnClicked("panel/add_gold_btn", this.OnClickedAddGoldBtn)
            }, e.prototype.OnShowUI = function() {
                this.SetNodeVisible("panel", !1)
            }, e.prototype.OnCloseUI = function() {}, e.prototype.OnDestroyUI = function() {}, e.prototype.OnClickedAddGoldBtn = function() {
                r._M.MofidyDataVal("Gold", 200), r._M.SEND_EVENT("GAME_EVENT", "MODIFY_GOLD", {
                    Gold: 200
                })
            }, e.prototype.OnClickedSwitchBtn = function() {
                var t = this.Seek("panel");
                t.active = !t.active
            }, e.prototype.OnClickedClearBtn = function() {
                r._M.LocalData.ClearAllData()
            }, e.prototype.OnClickedFinishPicBtn = function() {
                r._M.SEND_EVENT("GAME_EVENT", "FINISH_PIC")
            }, e = o([s], e)
        }(r._M.UIBaseClass);
        n.default = c, r._M.UIManager.RegisterUIModule("UIDebug", c), cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    UIDialog: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "15c0fzrzbdLGayFhZcm+Q59", "UIDialog");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._pCancelCallback = null, e._pConfirmBallback = null, e
                }
                return i(e, t), e.prototype.OnInitData = function() {
                    this._bIsTopLayerUI = !0, this._bScaleOpenAction = !0
                }, e.prototype.OnRegEventsHandlers = function() {
                    this.OnClicked("ref/close_btn", this.OnClickedCloseBtn), this.OnClicked("ref/confirm_btn", this.OnClickedConfirmBtn), this.OnClicked("ref/cancel_btn", this.OnClickedCancelBtn)
                }, e.prototype.OnShowUI = function() {
                    var t = this,
                        e = this.GetData();
                    if (e) {
                        var n = e.Tips;
                        this._pCancelCallback = e.Cancel, this._pConfirmBallback = e.Confirm;
                        var i = this.Seek("ref/tips_label");
                        i && (i.stopAllActions(), i.getComponent(cc.Label).string = n || "", i.runAction(cc.sequence([cc.delayTime(5), cc.callFunc(function() {
                            t.Close()
                        })])))
                    }
                }, e.prototype.OnCloseUI = function() {
                    var t = this.Seek("tips_label");
                    t && t.stopAllActions()
                }, e.prototype.OnDestroyUI = function() {}, e.prototype.OnClickedCloseBtn = function() {
                    this.Close()
                }, e.prototype.OnClickedConfirmBtn = function() {
                    this._pConfirmBallback && this._pConfirmBallback(this.GetData()), this.Close()
                }, e.prototype.OnClickedCancelBtn = function() {
                    this._pCancelCallback && this._pCancelCallback(this.GetData()), this.Close()
                }, e = o([s], e)
            }(r._M.UIBaseClass));
        n.default = c, r._M.UIManager.RegisterUIModule("UIDialog", c), cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    UIFinish: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "6498eDbrg5O+Yz6oDzabPpP", "UIFinish");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.OnInitData = function() {
                    this._bIsTopLayerUI = !0, this._bScaleOpenAction = !0
                }, e.prototype.OnRegEventsHandlers = function() {
                    this.OnClicked("ref/doblue_btn", this.OnClickedDoubleBtn), this.OnClicked("ref/normal_get_btn", this.OnClickedNormalBtn)
                }, e.prototype.OnShowUI = function() {
                    console.log("---UIFinished---")
                }, e.prototype.OnCloseUI = function() {}, e.prototype.OnDestroyUI = function() {}, e.prototype.OnClickedCloseBtn = function() {
                    this.Close()
                }, e.prototype.OnClickedDoubleBtn = function() {
                    var t = this;
                    r._M.ShowSystemDialog("\u662f\u5426\u89c2\u770b\u5e7f\u544a\u9886\u53d6\u53cc\u500d\u5956\u52b1?", function() {
                        r._M.SDK.ShowVideoAd(function(e) {
                            if (1 == e) {
                                var n = r._M.CONST("GAME_FINISH_PIC_ADD_GOLD"),
                                    i = t.GetData();
                                r._M.MofidyDataVal("Gold", 2 * n), r._M.UIManager.ShowUI("UIGetItem", {
                                    Gold: n,
                                    Callback: function() {
                                        r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                                            Name: "Record",
                                            ShowShare: !0,
                                            PicId: i.PicId,
                                            Mode: "Finished",
                                            BackScene: "Menu"
                                        })
                                    }
                                }), t.Close()
                            } else r._M.ShowSystemTipsEx("STR_VIEW_VIDEO_FAILED")
                        })
                    })
                }, e.prototype.OnClickedNormalBtn = function() {
                    var t = r._M.CONST("GAME_FINISH_PIC_ADD_GOLD"),
                        e = this.GetData();
                    r._M.MofidyDataVal("Gold", t), r._M.UIManager.ShowUI("UIGetItem", {
                        Gold: t,
                        Callback: function() {
                            r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                                Name: "Record",
                                ShowShare: !0,
                                PicId: e.PicId,
                                Mode: "Finished",
                                BackScene: "Menu"
                            })
                        }
                    }), this.Close()
                }, e = o([s], e)
            }(r._M.UIBaseClass));
        n.default = c, r._M.UIManager.RegisterUIModule("UIFinish", c), cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    UIGame: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ab20ePj1exOMrdzKlTotS3j", "UIGame");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = t("../logic/GameLogic"),
            s = cc._decorator,
            c = s.ccclass,
            l = (s.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._tStarsConf = [0, 800, 1200], e._progress = null, e._nCurStars = 3, e._tStarSprs = [], e._tColorConf = {}, e._tColorItems = [], e._tColorLabelMap = [], e._tProgress = [], e._sCurSelColorVal = "", e._nCurSelColorIdx = 0, e._oCurSelColorItem = null, e._oCurSelColorLabel = null, e._sBackScene = "", e._nBackMenuType = 0, e._oTempColorNode = null, e._oTempColorFg = null, e._oTempColorBg = null, e._nCurScale = 1, e
                }
                return i(e, t), e.prototype.OnInitData = function() {}, e.prototype.OnRegEventsHandlers = function() {
                    this.OnClicked("top/back_btn", this.OnclickedBackBtn), this.OnClicked("top/setting_btn", this.OnClickedSettingBtn), this.OnClicked("top/help_btn", this.OnClickedHelpBtn), this.OnClicked("main/scale_touch/add_btn", this.OnClickedAddBtn), this.OnClicked("main/scale_touch/sub_btn", this.OnClickedSubBtn), r._M.REG_EVT_LISTENER("GAME_EVENT", "DO_FILL_COLOR", this.ON_GAME_EVENT, this), r._M.REG_EVT_LISTENER("GAME_EVENT", "SET_GAME_BACK_SCENE", this.ON_GAME_EVENT, this), r._M.REG_EVT_LISTENER("GAME_EVENT", "PIC_ALL_COLOR_OK", this.ON_GAME_EVENT, this)
                }, e.prototype.OnShowUI = function() {
                    var t = this;
                    r._M.SDK.ShowBannerAd(!0);
                    var e = this.GetData(),
                        n = {},
                        i = {},
                        o = {},
                        s = 0;
                    e && (this._sBackScene = e.BackScene);
                    var c = a.GameLogic.GetInstance().SVG;
                    if (c) {
                        var l = c.getAllBlocks();
                        if (!l) return;
                        for (var u = 0; u < l.length; ++u) {
                            var h = l[u];
                            if (h) {
                                var _ = h._data.fillColor;
                                if (_) {
                                    var d = _.toRGBValue();
                                    null == n[d] && (n[d] = [], i[d] = _, o[++s] = d), n[d].push(h)
                                }
                            }
                        }
                    }
                    this._oTempColorNode = this.Seek("color"), this._oTempColorFg = this._oTempColorNode.getChildByName("fg").getComponent(cc.Sprite), this._oTempColorBg = this._oTempColorNode.getChildByName("bg").getComponent(cc.Sprite), e && e.BackMenuType && (this._nBackMenuType = e.BackMenuType), this._tColorConf = n;
                    var f = this.Seek("color"),
                        p = this.Seek("main/bottom/type_scroll/view/content"),
                        g = this.Seek("main/bottom/type_scroll/view/content/label_anchor");
                    g.parent = null;
                    var S = 0,
                        v = [],
                        y = function(e) {
                            var n = o[e],
                                a = cc.instantiate(f),
                                s = S,
                                c = a.getChildByName("fg"),
                                l = a.getChildByName("bg"),
                                u = a.getChildByName("ok"),
                                h = a.getChildByName("label"),
                                _ = a.getChildByName("progress"),
                                d = m.getColorProgress(n),
                                g = i[n];
                            p.addChild(a), c.color = g, d > 0 && (d >= 1 ? (u.active = !0, h.active = !1, _.active = !1, l.active = !1) : (_.getComponent(cc.ProgressBar).progress = d, _.active = !0)), m._tColorItems[S] = a, m._tColorLabelMap[S] = h, m._tProgress[S] = d, a.y = -(90 + 120 * (e - 1)), S++, v.push(h), h.parent = null, h.getComponent(cc.Label).string = "" + e, g.toHSV().s < .2 && (h.color = cc.Color.BLACK), a.on("click", function() {
                                t.DoSelectColor(s), r._M.PlaySound("SND_CLICK")
                            })
                        },
                        m = this;
                    for (u = 1; u <= s; ++u) y(u);
                    for (u = 1; u <= S; ++u) {
                        var C = v[u - 1];
                        C.y = -(90 + 120 * (u - 1)), g.addChild(C)
                    }
                    g.parent = p, p.height = 60 + 120 * S, this.UpdateColorView(), this.doAutoChangeColor(), this.UpdateTipsBtn()
                }, e.prototype.OnCloseUI = function() {
                    r._M.SDK.ShowBannerAd(!1)
                }, e.prototype.OnDestroyUI = function() {
                    console.log("OnDestroyUI")
                }, e.prototype.OnclickedBackBtn = function() {
                    this._sBackScene ? r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                        Name: this._sBackScene
                    }) : (r._M.LOG_EVENT("UIGame_back_home"), r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                        Name: "Menu",
                        BackMenuType: this._nBackMenuType
                    }))
                }, e.prototype.OnClickedSettingBtn = function() {
                    r._M.LOG_EVENT("UIGame_click_setting"), r._M.UIManager.ShowUI("UISetting")
                }, e.prototype.OnClickedAddBtn = function() {
                    this._nCurScale += .5, this._nCurScale >= 8 && (this._nCurScale = 8), this.UpdateArrowPos(), r._M.SEND_EVENT("GAME_EVENT", "MODIFY_SCALE", {
                        Val: this._nCurScale
                    })
                }, e.prototype.OnClickedSubBtn = function() {
                    this._nCurScale -= .5, this._nCurScale <= 1 && (this._nCurScale = 1), this.UpdateArrowPos(), r._M.SEND_EVENT("GAME_EVENT", "MODIFY_SCALE", {
                        Val: this._nCurScale
                    })
                }, e.prototype.UpdateArrowPos = function() {
                    var t = this.Seek("main/scale_touch/spr");
                    t && (t.position = cc.v2(0, (this._nCurScale - 1) / 7 * 140 - 70))
                }, e.prototype.OnClickedHelpBtn = function() {
                    var t = this;
                    r._M.GetDataVal("ColorTips") >= 1 ? (r._M.MofidyDataVal("ColorTips", -1), this._nCurScale = 6, this.UpdateArrowPos(), r._M.LOG_EVENT("UIGame_click_help"), r._M.SEND_EVENT("GAME_EVENT", "HELP_OF_CUR_COLOR", {
                        Color: this._sCurSelColorVal
                    }), this.UpdateTipsBtn()) : r._M.ShowSystemDialog("\u662f\u5426\u89c2\u770b\u5e7f\u544a\u83b7\u5f972\u6b21\u63d0\u793a?", function() {
                        r._M.SDK.ShowVideoAd(function(e) {
                            e ? (r._M.MofidyDataVal("ColorTips", 2), t._nCurScale = 6, t.UpdateArrowPos(), r._M.LOG_EVENT("UIGame_click_help"), r._M.SEND_EVENT("GAME_EVENT", "HELP_OF_CUR_COLOR", {
                                Color: t._sCurSelColorVal
                            }), t.UpdateTipsBtn()) : r._M.ShowSystemTipsEx("STR_VIEW_VIDEO_FAILED")
                        })
                    })
                }, e.prototype.DoSelectColor = function(t) {
                    void 0 === t && (t = 0), this._nCurSelColorIdx = t;
                    for (var e = this._tColorItems.length, n = null, i = (this._oTempColorBg, this._oTempColorFg, 0); i < e; ++i) {
                        var o = this._tColorItems[i];
                        if (o) {
                            var a = o.getChildByName("fg"),
                                s = o.getChildByName("bg"),
                                c = o.getChildByName("progress");
                            if (t == i) {
                                o.scale = 1.2, this._sCurSelColorVal = "" + a.color.toRGBValue(), s.scale = 1;
                                var l = a.color.toHSV();
                                s.color = cc.Color.BLACK.fromHSV(l.h, l.s, l.v - .3), n = a.color, this._oCurSelColorItem = o, this._oCurSelColorLabel = this._tColorLabelMap[i], this._progress = c.getComponent(cc.ProgressBar)
                            } else o.scale = 1, s.scale = .7
                        }
                    }
                    var u = this.Seek("main/bottom/type_scroll/view/content");
                    u.stopAllActions();
                    var h = this._oCurSelColorItem;
                    if (h) {
                        var _ = u.getContentSize(),
                            d = -h.position.y - 500;
                        d < 0 && (d = 0), d > _.height - 900 && (d = _.height - 900), _.height <= 600 && (d = 300 - .5 * _.height), u.runAction(cc.moveTo(.3, cc.v2(0, d))), n && r._M.SEND_EVENT("GAME_EVENT", "COLOR_CHANGED", {
                            Color: n.toRGBValue()
                        })
                    }
                }, e.prototype.ON_GAME_EVENT = function(t, e, n) {
                    var i = this;
                    if ("DO_FILL_COLOR" == e) {
                        var o = this._tColorConf[this._sCurSelColorVal];
                        if (o) {
                            r._M.PlaySound("SND_CLICK");
                            for (var s = 0, c = 0, l = 0; l < o.length; ++l) {
                                s++;
                                var u = o[l];
                                u && !u._bHide && c++
                            }
                            var h = this._oCurSelColorItem,
                                _ = this._oCurSelColorLabel;
                            if (h && _ && this._progress && s > 0) {
                                var d = h.getChildByName("bg"),
                                    f = h.getChildByName("ok"),
                                    p = h.getChildByName("progress"),
                                    g = c / s;
                                g >= 1 ? (d.active = !1, p.active = !1, f.active = !0, _.active = !1, this._tProgress[this._nCurSelColorIdx] = g, f.scale = 0, f.runAction(cc.sequence([cc.scaleTo(.3, .8), cc.delayTime(.3), cc.callFunc(function() {
                                    i.UpdateColorView(!0), i.doAutoChangeColor()
                                })]))) : (this._progress.progress = g, this._tProgress[this._nCurSelColorIdx] = g)
                            }
                        }
                        r._M.SEND_EVENT("GAME_EVENT", "DO_FILL_COLOR_OK")
                    } else "SET_GAME_BACK_SCENE" == e ? this._sBackScene = n.BackScene : "PIC_ALL_COLOR_OK" == e && r._M.UIManager.ShowUI("UIFinish", {
                        PicId: a.GameLogic.GetInstance().CurPicId
                    })
                }, e.prototype.updateDrawingStar = function(t) {
                    var e = this._tStarsConf;
                    if (e) {
                        for (var n = 1, i = 2; i >= 0; i--) {
                            if (t > e[i]) {
                                n = i + 1;
                                break
                            }
                        }
                        if (t <= 1 && (n = 1), n != this._nCurStars) {
                            this._nCurStars = n;
                            var o = this._tStarSprs[n];
                            o && o.runAction(cc.sequence([cc.scaleTo(.1, 1.3), cc.scaleTo(.1, .9), cc.tintTo(.5, 128, 128, 128)]))
                        }
                    }
                }, e.prototype.getColorProgress = function(t) {
                    var e = this._tColorConf[t];
                    if (e) {
                        for (var n = 0, i = 0, o = 0; o < e.length; ++o) {
                            n++;
                            var r = e[o];
                            r && !r._bHide && i++
                        }
                        return i / n
                    }
                }, e.prototype.UpdateColorView = function(t) {
                    void 0 === t && (t = !1);
                    var e = r._M.GetDataVal("AutoHideColor"),
                        n = this.Seek("main/bottom/type_scroll/view/content");
                    if (e && e) {
                        for (var i = 0, o = 0; o < this._tColorItems.length; ++o) {
                            var a = this._tColorItems[o],
                                s = this._tColorLabelMap[o];
                            this._tProgress[o] >= 1 ? a.active = !1 : (i++, a.active = !0, 1 == t ? (a.runAction(cc.moveTo(.2, cc.v2(a.x, -(90 + 120 * (i - 1))))), s.runAction(cc.moveTo(.2, cc.v2(s.x, -(90 + 120 * (i - 1)))))) : (a.x = 0, a.y = -(90 + 120 * (i - 1)), s.y = -(90 + 120 * (i - 1)), s.x = 0))
                        }
                        n.width = 60 + 120 * i
                    }
                }, e.prototype.doAutoChangeColor = function() {
                    var t = this;
                    if (r._M.GetDataVal("AutoChangeColor")) {
                        var e = this.Seek("main");
                        if (!e) return;
                        e.runAction(cc.sequence([cc.delayTime(.3), cc.callFunc(function() {
                            for (var e = t._nCurSelColorIdx, n = !1, i = e; i < t._tColorItems.length; ++i) {
                                if (t._tProgress[i] < 1) {
                                    t.DoSelectColor(i), n = !0;
                                    break
                                }
                            }
                            if (!n) {
                                var o = !0;
                                for (i = 0; i < e; ++i) {
                                    if (t._tProgress[i] < 1) {
                                        o = !1, t.DoSelectColor(i);
                                        break
                                    }
                                }
                                1 == o && r._M.SEND_EVENT("GAME_EVENT", "DO_CHECK_COLOR_ALL_OK")
                            }
                        })]))
                    }
                }, e.prototype.UpdateTipsBtn = function() {
                    var t = r._M.GetDataVal("ColorTips");
                    this.SetLabel("top/help_btn/num", t), t <= 0 ? (this.SetNodeVisible("top/help_btn/watch_ad", !0), this.SetNodeVisible("top/help_btn/num", !0)) : this.SetNodeVisible("top/help_btn/watch_ad", !1)
                }, e = o([c], e)
            }(r._M.UIBaseClass));
        n.default = l, r._M.UIManager.RegisterUIModule("UIGame", l), cc._RF.pop()
    }, {
        "../../Base/init": "Init",
        "../logic/GameLogic": "GameLogic"
    }],
    UIGetItem: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "3f521fwqklCar8r3tPF3zfK", "UIGetItem");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.OnInitData = function() {
                    this._bIsTopLayerUI = !0, this._bScaleOpenAction = !0
                }, e.prototype.OnRegEventsHandlers = function() {
                    this.OnClicked("ref/close_btn", this.OnClickedCloseBtn)
                }, e.prototype.OnShowUI = function() {
                    var t = this,
                        e = this.Seek("ref/glow"),
                        n = this.Seek("ref/label");
                    e.stopAllActions(), n.stopAllActions(), e.runAction(cc.repeatForever(cc.rotateBy(20, 3600)));
                    var i = this.GetData();
                    i && (n.getComponent(cc.Label).string = i.Gold + r._M.GET_GAME_STR("STR_GOLD"), n.runAction(cc.sequence([cc.delayTime(1.5), cc.callFunc(function() {
                        r._M.SEND_EVENT("GAME_EVENT", "MODIFY_GOLD", {
                            Gold: i.Gold
                        });
                        var e = i.Callback;
                        e && e(), t.Close()
                    })])))
                }, e.prototype.OnCloseUI = function() {}, e.prototype.OnDestroyUI = function() {}, e.prototype.OnClickedCloseBtn = function() {
                    this.Close()
                }, e = o([s], e)
            }(r._M.UIBaseClass));
        n.default = c, r._M.UIManager.RegisterUIModule("UIGetItem", c), cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    UIGoldUnlock: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "76bd8+5txJJd5fYYbJQUrGf", "UIGoldUnlock");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._sUnlockPicId = "", e._pCallback = null, e._oPicNode = null, e
                }
                return i(e, t), e.prototype.OnInitData = function() {
                    this._bIsTopLayerUI = !0, this._bScaleOpenAction = !0
                }, e.prototype.OnRegEventsHandlers = function() {
                    this.OnClicked("ref/close_btn", this.OnClickedCloseBtn), this.OnClicked("ref/unlock_btn", this.OnClickedUnlockBtn)
                }, e.prototype.OnShowUI = function() {
                    var t = this.GetData();
                    if (t) {
                        var e = t.PicId,
                            n = t.PicNode,
                            i = t.Callback;
                        this._oPicNode = n, this._sUnlockPicId = e, this._pCallback = i;
                        var o = r._M.DataManager.GetDataByNameAndId("MissionConf", e);
                        if (o) {
                            var a = r._M.GET_GAME_STR("STR_NEED_GOLD_UNLOCK_PIC"),
                                s = this.Seek("ref/tips_label"),
                                c = this.Seek("ref/view/spr");
                            s && (s.getComponent(cc.Label).string = r._M.FORMAT(a, o.Args1)), cc.loader.loadRes("lines/" + e, function(t, e) {
                                c.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e), c.active = !0
                            })
                        }
                    }
                }, e.prototype.OnCloseUI = function() {
                    this._sUnlockPicId = ""
                }, e.prototype.OnDestroyUI = function() {}, e.prototype.OnClickedCloseBtn = function() {
                    this.Close()
                }, e.prototype.OnClickedUnlockBtn = function() {
                    if (!r._M.IsUnlockedPic(this._sUnlockPicId)) {
                        var t = r._M.DataManager.GetDataByNameAndId("MissionConf", this._sUnlockPicId);
                        if (t) {
                            var e = r._M.GetDataVal("Gold"),
                                n = parseInt(t.Args1);
                            e < n ? r._M.ShowSystemTipsEx("STR_LACK_OF_GOLD") : (r._M.MofidyDataVal("Gold", -n), r._M.DoUnlockedPic(this._sUnlockPicId), r._M.SEND_EVENT("GAME_EVENT", "MODIFY_GOLD", {
                                Gold: -n
                            }), r._M.SvgMgr.LoadData(this._sUnlockPicId), this.RunUnlockAnim())
                        }
                    }
                }, e.prototype.RunUnlockAnim = function() {
                    var t = this,
                        e = this.Seek("ref/lock"),
                        n = this.Seek("ref"),
                        i = this.Seek("ref/frame_bg"),
                        o = this.Seek("ref/unlock_btn"),
                        r = this.Seek("ref/tips_label"),
                        a = this.Seek("ref/close_btn"),
                        s = this.Seek("ref/title"),
                        c = this.Seek("ref/view"),
                        l = this._pCallback;
                    e.runAction(cc.sequence([cc.repeat(cc.sequence([cc.rotateTo(.1, -15), cc.rotateTo(.1, 15)]), 4), cc.rotateTo(.05, 0), cc.scaleTo(.2, .3), cc.spawn([cc.scaleTo(.2, .8), cc.fadeOut(.4)]), cc.callFunc(function() {
                        a.active = !1, r.active = !1, o.active = !1, s.active = !1;
                        var e = t._oPicNode.convertToWorldSpaceAR(cc.v2(0, 0)),
                            u = n.convertToNodeSpaceAR(e);
                        i.runAction(cc.scaleTo(.3, 0)), c.runAction(cc.sequence([cc.scaleTo(.5, 1.56), cc.delayTime(.2), cc.spawn([cc.moveTo(.4, u), cc.scaleTo(.4, 0)]), cc.callFunc(function() {
                            l && l(), t.Close()
                        })]))
                    })]))
                }, e = o([s], e)
            }(r._M.UIBaseClass));
        n.default = c, r._M.UIManager.RegisterUIModule("UIGoldUnlock", c), cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    UIIdleCover: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2266dAuCONH9KhYWCdnwMsn", "UIIdleCover");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.OnInitData = function() {
                    this._bIsTopLayerUI = !0
                }, e.prototype.OnRegEventsHandlers = function() {
                    this.OnClicked("close_btn", this.OnClickedCloseBtn)
                }, e.prototype.OnShowUI = function() {
                    r._M.SDK.ShowNativeAd(!0, 0, 0, 0, 0, null)
                }, e.prototype.OnCloseUI = function() {
                    r._M.SDK.ShowNativeAd(!1, 0, 0, 0, 0, null)
                }, e.prototype.OnDestroyUI = function() {}, e.prototype.OnClickedCloseBtn = function() {
                    this.Close()
                }, e = o([s], e)
            }(r._M.UIBaseClass));
        n.default = c, r._M.UIManager.RegisterUIModule("UIIdleCover", c), cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    UIManager: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "13efaJPK2hIlZd/Gll3kSpk", "UIManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function t() {
                this._T_UI_CLASS = {}, this._T_SHOWED_UI = {}, this._sUIDirPath = "prefab/ui/"
            }
            return t.GetInstance = function() {
                return null == this._Instance && (this._Instance = new t), this._Instance
            }, t.prototype.RegisterUIModule = function(t, e) {
                this._T_UI_CLASS[t] = {
                    Class: e,
                    Path: this._sUIDirPath + t
                }
            }, Object.defineProperty(t.prototype, "UIDirPath", {
                get: function() {
                    return this._sUIDirPath
                },
                set: function(t) {
                    this._sUIDirPath = t
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.ShowUI = function(t, e, n) {
                var i = this;
                void 0 === e && (e = null), void 0 === n && (n = null);
                var o = this._T_UI_CLASS[t];
                if (o) {
                    var r = o.Class,
                        a = o.Path;
                    if (r && a) {
                        var s = this.GetUI(t);
                        if (s) return s.UIName = t, s.OnInitData(), s.SetData(e), s.Show(), void(n && n(s));
                        cc.loader.loadRes(a, function(o, a) {
                            var c = cc.instantiate(a),
                                l = cc.director.getScene();
                            if (c && l) {
                                var u = c.addComponent(r);
                                if (u.UIName = t, u.OnInitData(), u.SetData(e), u.IsTopUI) i.SeekNodeByPath(l, "Canvas/TopUILayer").addChild(c);
                                else i.SeekNodeByPath(l, "Canvas/UILayer").addChild(c);
                                i._T_SHOWED_UI[t] = u, u.Show(), n && n(s)
                            }
                        })
                    }
                }
            }, t.prototype.SeekNodeByPath = function(t, e) {
                return cc.find(e, t)
            }, t.prototype.GetUI = function(t) {
                return this._T_SHOWED_UI[t]
            }, t.prototype.CloseUI = function(t) {
                var e = this.GetUI(t);
                null != e && e.Close()
            }, t.prototype.DestoryUI = function(t) {
                var e = this.GetUI(t);
                null != e && (e.Destory(), this._T_SHOWED_UI[t] = null)
            }, t.prototype.IsShowUI = function(t) {
                var e = this.GetUI(t);
                return !!e && e.IsShow()
            }, t.prototype.DestroyAllUI = function() {
                for (var t in this._T_SHOWED_UI) {
                    var e = this.GetUI(t);
                    e && e.Destory()
                }
                this._T_SHOWED_UI = []
            }, t._Instance = null, t
        }();
        n.UIManager = i, cc._RF.pop()
    }, {}],
    UIMenu: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9859fYcpxxGx7CRaYVhQSMz", "UIMenu");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = t("../comp/Svg"),
            s = t("./DynContainer"),
            c = t("./Preview"),
            l = cc._decorator,
            u = l.ccclass,
            h = (l.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._nSelType = 1, e._tTypeItems = [], e._sel_bg = null, e._tCachedRenderTexture = {}, e._queueTask = [], e._runningTask = [], e._tLabelLabels = [], e
                }
                return i(e, t), e.prototype.OnInitData = function() {}, e.prototype.OnRegEventsHandlers = function() {
                    this.OnClicked("main/bottom/record_btn", this.OnClickedRecordBtn), this.OnClicked("main/bottom/quest_btn", this.OnClickedQuestBtn), this.OnClicked("main/bottom/setting_btn", this.OnClickedSettingBtn), this.OnClicked("top/title_scroll/view/content/page_1/start_btn", this.OnClickedStartDrawingBtn1), this.OnClicked("top/title_scroll/view/content/page_2/start_btn", this.OnClickedStartDrawingBtn2), this.OnClicked("top/gold_panel", this.OnClickedGoldPanel), r._M.REG_EVT_LISTENER("GAME_EVENT", "LOADED_ALL_SVG", this.ON_GAME_EVENT, this), r._M.REG_EVT_LISTENER("GAME_EVENT", "UNLOCKED_PIC", this.ON_GAME_EVENT, this)
                }, e.prototype.OnShowUI = function() {
                    var t = this,
                        e = this.GetData(),
                        n = this.Seek("type_label"),
                        i = this.Seek("top/type_scroll/view/content");
                    this.Seek("main/scroll_view/view").getComponent(s.default).enabled = !1, i.removeAllChildren(), this._tTypeItems = [], this._sel_bg = this.Seek("sel_bg");
                    var o = r._M.DataManager.GetDataByName("TypesView");
                    if (o) {
                        var a = 0,
                            c = function(e) {
                                var s = o[e];
                                if (s) {
                                    var c = cc.instantiate(n);
                                    c.getComponent(cc.Label).string = s.Name, l._tLabelLabels.push(c);
                                    var u = a;
                                    c.y = -90 * a - 50, a++, c.x = 0, i.addChild(c), l._tTypeItems.push(c), c.on("click", function() {
                                        t.SetSelectChanged(u), r._M.PlaySound("SND_CLICK")
                                    })
                                }
                            },
                            l = this;
                        for (var u in o) c(u);
                        i.setContentSize(cc.size(220, 20 + 80 * a)), i.position.x = -360, e && e.BackMenuType ? this.SetSelectChanged(e.BackMenuType) : this.SetSelectChanged(0)
                    }
                    this.CreateLoginButton(), r._M.SDK.ShowBannerAd(!0)
                }, e.prototype.OnCloseUI = function() {}, e.prototype.OnDestroyUI = function() {
                    this.RemoveAll()
                }, e.prototype.OnClickedRecordBtn = function() {
                    r._M.LOG_EVENT("UIMenu_click_record_btn"), r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                        Name: "Record"
                    })
                }, e.prototype.SetSelectChanged = function(t) {
                    this._nSelType = t;
                    var e = this._sel_bg,
                        n = this.Seek("main/scroll_view"),
                        i = this.Seek("top/type_scroll/view/content");
                    if (this._tTypeItems && e && i) {
                        n.getComponent(cc.ScrollView).stopAutoScroll();
                        for (var o = 0; o < this._tTypeItems.length; ++o) {
                            var r = this._tLabelLabels[o];
                            if (r && (r.color = t == o ? cc.Color.WHITE : cc.Color.BLACK, t == o)) {
                                var a = r.convertToWorldSpaceAR(cc.v2(0, 0)),
                                    s = i.convertToNodeSpaceAR(a);
                                e.parent = null, e.parent = i, e.setPosition(s), r.parent = null, r.parent = i
                            }
                        }
                        this.UpdateTypePicItems(t)
                    }
                }, e.prototype.UpdateEveryDayPicView = function() {
                    var t = this,
                        e = this.Seek("top/title_scroll/view/content/page_1/preview/spr"),
                        n = this.Seek("top/title_scroll/view/content/page_1/preview/color");
                    if (e && n) {
                        var i = r._M.GetDataVal("TodayPic1");
                        "" != i && cc.loader.loadRes("lines/" + i, function(o, r) {
                            e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(r), e.active = !0, t.LoadAndDrawToTarget(i, n)
                        })
                    }
                    var o = this.Seek("top/title_scroll/view/content/page_2/preview/spr"),
                        a = this.Seek("top/title_scroll/view/content/page_2/preview/color");
                    if (o && a) {
                        var s = r._M.GetDataVal("TodayPic2");
                        "" != s && cc.loader.loadRes("lines/" + s, function(e, n) {
                            o.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n), o.active = !0, t.LoadAndDrawToTarget(s, a)
                        })
                    }
                }, e.prototype.UpdateTypePicItems = function(t) {
                    var e = this,
                        n = this.Seek("pic_view"),
                        i = this.Seek("main/scroll_view/view/content"),
                        o = this.Seek("main/scroll_view/view");
                    i.removeAllChildren(), i.stopAllActions();
                    var a = r._M.DataManager.GetDataByName("MissionConf"),
                        l = r._M.DataManager.GetDataByNameAndId("TypesView", "" + t);
                    if (l && a) {
                        o.getComponent(s.default).enabled = !1;
                        var u = l.TypePics;
                        if (u) {
                            this.RemoveAll(), r._M.SvgMgr.RemoveAll(), i.getComponent(cc.Layout).enabled = !0;
                            for (var h = 0, _ = r._M.GetPicStatu(), d = {}, f = 0; f < _.length; ++f) d[_[f]] = !0;
                            u.forEach(function(t) {
                                var o = cc.instantiate(n);
                                if (o) {
                                    o.getComponent(c.default).PicID = t, h++, i.addChild(o);
                                    var s = a[t];
                                    s && 1 == s.UnlockCond && !r._M.IsUnlockedPic(t) ? o.getChildByName("type_label").getComponent(cc.Label).string = s.Args1 : (o.getChildByName("gold_unlock").removeFromParent(), o.getChildByName("type_label").removeFromParent()), o.on("click", function() {
                                        if (r._M.IsUnlockedPic(t)) {
                                            var n = r._M.GetPicColorData(t);
                                            n && "" != n && !n.match("0") ? r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                                                Name: "Record",
                                                ShowShare: !0,
                                                PicId: t,
                                                Mode: "Finished",
                                                BackScene: "Menu"
                                            }) : (console.log("sPicId " + t), r._M.UIManager.ShowUI("UIWaiting"), r._M.SvgMgr.LoadData(t, function(n, i) {
                                                r._M.UIManager.ShowUI("UIWaiting"), r._M.UpdatePicStatu(t), r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                                                    Name: "Game",
                                                    PicId: t,
                                                    BackMenuType: e._nSelType
                                                })
                                            })), r._M.PlaySound("SND_CLICK")
                                        } else r._M.UIManager.ShowUI("UIGoldUnlock", {
                                            PicId: t,
                                            PicNode: o,
                                            Callback: function() {
                                                o.getChildByName("gold_unlock").removeFromParent(), o.getChildByName("type_label").removeFromParent(), r._M.UpdatePicStatu(t), r._M.SDK.ShowBannerAd(!1), r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                                                    Name: "Game",
                                                    PicId: t,
                                                    BackMenuType: e._nSelType
                                                })
                                            }
                                        })
                                    })
                                }
                            }), i.setContentSize(cc.size(620, 20 + 280 * Math.ceil(.5 * h))), i.y = 0, setTimeout(function() {
                                o.getComponent(s.default).setDynamicLoader(function(t) {
                                    var n = t;
                                    if (n) {
                                        var i = cc.find("view/color", n),
                                            o = t.getComponent(c.default);
                                        o && o.DoLoadPicPreView(function() {
                                            1 == d[o.PicID] && e.LoadAndDrawToTarget(o.PicID, i)
                                        })
                                    }
                                }), o.getComponent(s.default).setCellRowCellInfo(350, 350, 2), o.getComponent(s.default).enabled = !0
                            }, 100)
                        }
                    }
                }, e.prototype.OnClickedSettingBtn = function() {
                    r._M.LOG_EVENT("UIMenu_click_setting"), r._M.UIManager.ShowUI("UISetting")
                }, e.prototype.OnClickedStartDrawingBtn1 = function() {
                    var t = this,
                        e = r._M.GetDataVal("TodayPic1");
                    e && (r._M.UIManager.ShowUI("UIWaiting"), r._M.SvgMgr.LoadData(e, function(n, i) {
                        r._M.UIManager.ShowUI("UIWaiting"), r._M.UpdatePicStatu(e), r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                            Name: "Game",
                            PicId: e,
                            BackMenuType: t._nSelType
                        })
                    }))
                }, e.prototype.OnClickedStartDrawingBtn2 = function() {
                    var t = this,
                        e = r._M.GetDataVal("TodayPic2");
                    e && (r._M.UIManager.ShowUI("UIWaiting"), r._M.SvgMgr.LoadData(e, function(n, i) {
                        r._M.UIManager.ShowUI("UIWaiting"), r._M.UpdatePicStatu(e), r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                            Name: "Game",
                            PicId: e,
                            BackMenuType: t._nSelType
                        })
                    }))
                }, e.prototype.OnClickedQuestBtn = function() {
                    this.Close(), r._M.UIManager.ShowUI("UIDailyQuest")
                }, e.prototype.OnClickedGoldPanel = function() {
                    this.Close(), r._M.UIManager.ShowUI("UIDailyQuest")
                }, e.prototype.OnClickedLevelsBtn = function() {
                    r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                        Name: "Level"
                    })
                }, e.prototype.OnClickedRateBtn = function() {
                    r._M.LOG_EVENT("UIMenu_click_rate"), r._M.SDK.JumpToWebPage("")
                }, e.prototype.OnClickedShareBtn = function() {
                    r._M.LOG_EVENT("UIMenu_click_share"), r._M.SDK.DoShareGameLink()
                }, e.prototype.OnClickedPrivacyPage = function() {
                    r._M.LOG_EVENT("UIMenu_click_privacypage");
                    var t = r._M.SDK.OnlineParams;
                    null == t && "" == t.PrivacyPage || r._M.SDK.JumpToWebPage(t.PrivacyPage)
                }, e.prototype.ON_GAME_EVENT = function(t, e, n) {}, e.prototype.LoadAndDrawToTarget = function(t, e) {
                    var n = this,
                        i = r._M.GetPicColorData(t);
                    i && "" != i && i.match("1") && r._M.SvgMgr.LoadData(t, function(t, i) {
                        n.AddDrawTask(t, e, i)
                    })
                }, e.prototype.AddDrawTask = function(t, e, n) {
                    var i = this;
                    this._runningTask && (this._runningTask.length >= 1 ? this._queueTask.push([t, e, n]) : (this._runningTask.push([t, e, n]), setTimeout(function() {
                        i.DrawDataToTarget(t, e, n, function() {
                            for (var t = 0; t < i._runningTask.length; ++t) {
                                i._runningTask[t];
                                if (i._runningTask.shift(), i._queueTask.length > 0) {
                                    var e = i._queueTask.shift();
                                    e && i.AddDrawTask(e[0], e[1], e[2])
                                }
                                return
                            }
                        })
                    }, 30)))
                }, e.prototype.DrawDataToTarget = function(t, e, n, i) {
                    var o = this.Seek("pre_render/pre_camera"),
                        s = this.Seek("pre_render/pre_svg");
                    if (s) {
                        var c = s.getComponent(a.default);
                        if (o) {
                            var l = 1,
                                u = r._M.GetPicColorData(t),
                                h = o.getComponent(cc.Camera),
                                _ = !0,
                                d = !0,
                                f = 0;
                            u && "" != u ? (_ = !0, d = !1, f = 1, l++) : l = 3, c.DoDrawSvgTaskEx(n, u, _, d, f, function() {
                                if (2 == l) {
                                    s.group = "pre_render", o.active = !0;
                                    var t = new cc.RenderTexture;
                                    return t.initWithSize(500, 500), e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t), h.targetTexture = t, h.zoomRatio = 1, h.backgroundColor = cc.Color.WHITE, h.render(s), o.active = !1, e.active = !0, s.group = "not_render", o.active = !1, s.group = "not_render", i && i(), void(l = 3)
                                }
                                3 == l && (o.active = !1, s.group = "not_render", i && i())
                            })
                        }
                    }
                }, e.prototype.RemoveAll = function() {
                    this._runningTask = [], this._queueTask = []
                }, e.prototype.CreateLoginButton = function() {
                    var t = cc.director.getScene(),
                        e = (cc.view.getFrameSize(), cc.view.getScaleY(), t.getChildByName("Canvas")),
                        n = this.Seek("top/anchor"),
                        i = this.Seek("top/head_frame"),
                        o = this.Seek("top/login_tips"),
                        a = this.Seek("top/mask/head_icon"),
                        s = this.Seek("top/user_name"),
                        c = i.getContentSize(),
                        l = e.getContentSize(),
                        u = this.node.convertToNodeSpaceAR(n.convertToWorldSpace(cc.v2(0, 0))),
                        h = 0;
                    this.Seek("top").getComponent(cc.Widget).top >= 10 && (h = this.Seek("top").getComponent(cc.Widget).top);
                    var _ = u.x / l.width,
                        d = (-u.y - h) / l.height,
                        f = c.width / l.width,
                        p = c.height / l.height;
                    if (r._M._tUserInfo) {
                        var g = r._M._tUserInfo;
                        return s.getComponent(cc.Label).string = g.nickName, o.active = !1, console.log(g), void cc.loader.load({
                            url: g.avatarUrl,
                            type: "jpg"
                        }, function(t, e) {
                            a.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e)
                        })
                    }
                    var S = cc.rect(_, d, f, p);
                    r._M.SDK.RegLoginButtonAndIcon(S, function(t) {
                        var e = t.userInfo;
                        e && (r._M._tUserInfo = e, console.log(e), o.active = !1, s.getComponent(cc.Label).string = e.nickName, cc.loader.load({
                            url: e.avatarUrl,
                            type: "jpg"
                        }, function(t, e) {
                            a.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e)
                        }))
                    })
                }, e = o([u], e)
            }(r._M.UIBaseClass));
        n.default = h, r._M.UIManager.RegisterUIModule("UIMenu", h), cc._RF.pop()
    }, {
        "../../Base/init": "Init",
        "../comp/Svg": "Svg",
        "./DynContainer": "DynContainer",
        "./Preview": "Preview"
    }],
    UIRecord: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "2efd1/CpxVIEayPcJcyXoDF", "UIRecord");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = t("../comp/Svg"),
            s = t("./Preview"),
            c = t("./DynContainer"),
            l = cc._decorator,
            u = l.ccclass,
            h = (l.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._queueTask = [], e._runningTask = [], e._nModeIdx = 0, e
                }
                return i(e, t), e.prototype.OnInitData = function() {}, e.prototype.OnRegEventsHandlers = function() {
                    this.OnClicked("main/bottom/home_btn", this.OnClickedHomeBtn), this.OnClicked("main/bottom/quest_btn", this.OnClickedQuestBtn), this.OnClicked("main/bottom/setting_btn", this.OnClickedSettingBtn), this.OnClicked("top/tab_1", this.OnClickedDrawingBtn), this.OnClicked("top/tab_2", this.OnClickedFinishedBtn), this.OnClicked("top/gold_panel", this.OnClickedGoldPanel)
                }, e.prototype.OnShowUI = function() {
                    var t = this.GetData();
                    t && "Finished" == t.Mode ? this.DoSelTabByIdx(1) : this.DoSelTabByIdx(0);
                    var e = r._M.GetPicStatu(),
                        n = 0,
                        i = 0;
                    if (e)
                        for (var o = 0; o < e.length; ++o) {
                            var a = e[o];
                            if (a) {
                                var s = r._M.GetPicColorData(a);
                                s && "" != s && !s.match("0") ? i++ : n++
                            }
                        }
                    this.SetLabel("top/drawing_label", r._M.GET_GAME_STR("STR_DOING") + ":" + n), this.SetLabel("top/finish_label", r._M.GET_GAME_STR("STR_FINISHED") + ":" + i), this.CreateLoginButton()
                }, e.prototype.OnCloseUI = function() {
                    this.RemoveAll()
                }, e.prototype.OnDestroyUI = function() {}, e.prototype.OnClickedHomeBtn = function() {
                    console.log("OnClickedHomeBtn-"), r._M.LOG_EVENT("UIMenu_click_record_btn"), r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                        Name: "Menu"
                    })
                }, e.prototype.OnClickedRecordBtn = function() {
                    console.log("OnClickedRecordBtn-"), r._M.LOG_EVENT("UIMenu_click_record_btn"), r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                        Name: "Record"
                    })
                }, e.prototype.OnClickedSettingBtn = function() {
                    console.log("OnClickedSettingBtn-"), r._M.LOG_EVENT("UIMenu_click_setting"), r._M.UIManager.ShowUI("UISetting")
                }, e.prototype.OnClickedQuestBtn = function() {
                    r._M.UIManager.ShowUI("UIDailyQuest")
                }, e.prototype.OnClickedLevelsBtn = function() {
                    r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                        Name: "Level"
                    })
                }, e.prototype.OnClickedRateBtn = function() {
                    r._M.LOG_EVENT("UIMenu_click_rate"), r._M.SDK.JumpToWebPage("")
                }, e.prototype.OnClickedShareBtn = function() {
                    r._M.LOG_EVENT("UIMenu_click_share"), r._M.SDK.DoShareGameLink()
                }, e.prototype.OnClickedPrivacyPage = function() {
                    r._M.LOG_EVENT("UIMenu_click_privacypage");
                    var t = r._M.SDK.OnlineParams;
                    null == t && "" == t.PrivacyPage || r._M.SDK.JumpToWebPage(t.PrivacyPage)
                }, e.prototype.LoadAndDrawToTarget = function(t, e) {
                    var n = this;
                    r._M.SvgMgr.LoadData(t, function(t, i) {
                        n.AddDrawTask(t, e, i)
                    })
                }, e.prototype.AddDrawTask = function(t, e, n) {
                    var i = this;
                    this._runningTask && (this._runningTask.length >= 1 ? this._queueTask.push([t, e, n]) : (this._runningTask.push([t, e, n]), this.DrawDataToTarget(t, e, n, function() {
                        for (var t = 0; t < i._runningTask.length; ++t) {
                            i._runningTask[t];
                            if (i._runningTask.shift(), i._queueTask.length > 0) {
                                var e = i._queueTask.shift();
                                e && i.AddDrawTask(e[0], e[1], e[2])
                            }
                            return
                        }
                    })))
                }, e.prototype.DrawDataToTarget = function(t, e, n, i) {
                    var o = this.Seek("pre_render/pre_camera"),
                        s = this.Seek("pre_render/pre_svg"),
                        c = s.getComponent(a.default);
                    if (o) {
                        var l = 1,
                            u = r._M.GetPicColorData(t),
                            h = o.getComponent(cc.Camera),
                            _ = !0,
                            d = !0,
                            f = 0;
                        u && "" != u ? (_ = !0, d = !1, f = 1, l++) : l = 3, c.DoDrawSvgTaskEx(n, u, _, d, f, function() {
                            if (2 == l) {
                                s.group = "pre_render", o.active = !0;
                                var t = new cc.RenderTexture;
                                return t.initWithSize(500, 500), e.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t), h.targetTexture = t, h.zoomRatio = 1, h.backgroundColor = cc.Color.WHITE, h.render(s), o.active = !1, e.active = !0, s.group = "not_render", o.active = !1, s.group = "not_render", i && i(), void(l = 3)
                            }
                            3 == l && (o.active = !1, s.group = "not_render", i && i())
                        })
                    }
                }, e.prototype.RemoveAll = function() {
                    this._runningTask = [], this._queueTask = []
                }, e.prototype.OnClickedDrawingBtn = function() {
                    this.DoSelTabByIdx(0)
                }, e.prototype.OnClickedFinishedBtn = function() {
                    this.DoSelTabByIdx(1)
                }, e.prototype.OnClickedGoldPanel = function() {
                    this.Close(), r._M.UIManager.ShowUI("UIDailyQuest")
                }, e.prototype.DoSelTabByIdx = function(t) {
                    this._nModeIdx = t;
                    for (var e = this.Seek("top/sel_bg"), n = 1; n <= 2; ++n) {
                        var i = this.Seek("top/tab_" + n);
                        n == t + 1 ? (e.position = i.position, i.color = cc.Color.WHITE) : i.color = cc.Color.BLACK
                    }
                    this.UpdatePreviewList()
                }, e.prototype.UpdatePreviewList = function() {
                    var t = this;
                    this.RemoveAll();
                    var e = this.Seek("main/scroll_view/view/content"),
                        n = this.Seek("main/scroll_view/view"),
                        i = this.Seek("pic_view"),
                        o = r._M.GetPicStatu(),
                        a = "Drawing";
                    if (1 == this._nModeIdx && (a = "Finished"), e.removeAllChildren(), n.getComponent(c.default).enabled = !1, e.getComponent(cc.Layout).enabled = !0, o) {
                        for (var l = 0, u = {}, h = r._M.GetPicStatu(), _ = 0; _ < h.length; ++_) u[h[_]] = !0;
                        var d = function(n) {
                                var c = o[n],
                                    u = r._M.GetPicColorData(c),
                                    h = !1;
                                if (0 == f._nModeIdx ? u && !u.match("0") || (h = !0) : 1 == f._nModeIdx && u && !u.match("0") && (h = !0), h) {
                                    var _ = cc.instantiate(i);
                                    _ && (_.getComponent(s.default).PicID = c, l++, e.addChild(_), _.on("click", function() {
                                        r._M.UIManager.ShowUI("UIShare", {
                                            PicId: c,
                                            Mode: a
                                        }), t.Close()
                                    }))
                                }
                            },
                            f = this;
                        for (_ = o.length - 1; _ >= 0; --_) d(_);
                        e.setContentSize(cc.size(720, 20 + 350 * Math.ceil(l / 2))), e.y = 0, setTimeout(function() {
                            n.getComponent(c.default).setDynamicLoader(function(e) {
                                var n = e;
                                if (n) {
                                    var i = cc.find("view/color", n),
                                        o = e.getComponent(s.default);
                                    o && o.DoLoadPicPreView(function() {
                                        1 == u[o.PicID] && t.LoadAndDrawToTarget(o.PicID, i)
                                    })
                                }
                            }), n.getComponent(c.default).setCellRowCellInfo(350, 350, 2), n.getComponent(c.default).enabled = !0
                        }, 100)
                    }
                }, e.prototype.CreateLoginButton = function() {
                    var t = cc.director.getScene(),
                        e = (cc.view.getFrameSize(), cc.view.getScaleY(), t.getChildByName("Canvas")),
                        n = this.Seek("top/anchor"),
                        i = this.Seek("top/head_frame"),
                        o = this.Seek("top/login_tips"),
                        a = this.Seek("top/mask/head_icon"),
                        s = this.Seek("top/user_name"),
                        c = i.getContentSize(),
                        l = e.getContentSize(),
                        u = this.node.convertToNodeSpaceAR(n.convertToWorldSpace(cc.v2(0, 0))),
                        h = 0;
                    this.Seek("top").getComponent(cc.Widget).top >= 10 && (h = this.Seek("top").getComponent(cc.Widget).top);
                    var _ = u.x / l.width,
                        d = (-u.y - h) / l.height,
                        f = c.width / l.width,
                        p = c.height / l.height;
                    if (r._M._tUserInfo) {
                        var g = r._M._tUserInfo;
                        return s.getComponent(cc.Label).string = g.nickName, o.active = !1, void cc.loader.load({
                            url: g.avatarUrl,
                            type: "jpg"
                        }, function(t, e) {
                            a.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e)
                        })
                    }
                    var S = cc.rect(_, d, f, p);
                    r._M.SDK.RegLoginButtonAndIcon(S, function(t) {
                        var e = t.userInfo;
                        e && (r._M._tUserInfo = e, o.active = !1, s.getComponent(cc.Label).string = e.nickName, cc.loader.load({
                            url: e.avatarUrl,
                            type: "jpg"
                        }, function(t, e) {
                            a.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e)
                        }))
                    })
                }, e = o([u], e)
            }(r._M.UIBaseClass));
        n.default = h, r._M.UIManager.RegisterUIModule("UIRecord", h), cc._RF.pop()
    }, {
        "../../Base/init": "Init",
        "../comp/Svg": "Svg",
        "./DynContainer": "DynContainer",
        "./Preview": "Preview"
    }],
    UISetting: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "11a3bcn5e9PK5nAzNAISgLu", "UISetting");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._bInitSet = !1, e
                }
                return i(e, t), e.prototype.OnInitData = function() {
                    this._bIsTopLayerUI = !0, this._bScaleOpenAction = !0
                }, e.prototype.OnRegEventsHandlers = function() {
                    this.OnClicked("ref/close_btn", this.OnClickedCloseBtn), this.OnToggle("ref/toggle_1", this.OnToggleBtn1), this.OnToggle("ref/toggle_2", this.OnToggleBtn2)
                }, e.prototype.OnShowUI = function() {
                    this.SetToggle(this.Seek("ref/toggle_1"), r._M.GetDataVal("AutoChangeColor")), this.SetToggle(this.Seek("ref/toggle_2"), r._M.GetDataVal("AutoHideColor")), this._bInitSet = !0
                }, e.prototype.OnCloseUI = function() {}, e.prototype.OnDestroyUI = function() {}, e.prototype.OnClickedCloseBtn = function() {
                    this.Close()
                }, e.prototype.OnToggleBtn1 = function(t) {
                    if (this._bInitSet) {
                        var e = !t.getComponent(cc.Toggle).isChecked;
                        this.SetToggle(t, e), r._M.SetDataVal("AutoChangeColor", e)
                    }
                }, e.prototype.OnToggleBtn2 = function(t) {
                    if (this._bInitSet) {
                        var e = !t.getComponent(cc.Toggle).isChecked;
                        this.SetToggle(t, e), r._M.SetDataVal("AutoHideColor", e)
                    }
                }, e.prototype.SetToggle = function(t, e) {
                    var n = t.getChildByName("point");
                    n.stopAllActions(), e ? n.runAction(cc.moveTo(.15, cc.v2(37, 4))) : n.runAction(cc.moveTo(.15, cc.v2(-37, 4))), t.getComponent(cc.Toggle).isChecked = !e
                }, e.prototype.OnMusicTogChecked = function(t) {
                    var e = t.getComponent(cc.Toggle).isChecked;
                    r._M.AudioUtil.musicVolume = e ? 0 : 1, r._M.SetDataVal("MusicVolume", r._M.AudioUtil.musicVolume)
                }, e.prototype.OnSoundTogChecked = function(t) {
                    var e = t.getComponent(cc.Toggle).isChecked;
                    r._M.AudioUtil.effectVolume = e ? 0 : 1, r._M.SetDataVal("MusicVolume", r._M.AudioUtil.effectVolume)
                }, e = o([s], e)
            }(r._M.UIBaseClass));
        n.default = c, r._M.UIManager.RegisterUIModule("UISetting", c), cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    UIShare: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "44b77MqzHtDT7xQ+aLHWz4m", "UIShare");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = t("../comp/Svg"),
            s = cc._decorator,
            c = s.ccclass,
            l = (s.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._preView = null, e._sPicID = "", e._sBackScene = "", e._sRecordMode = "", e
                }
                return i(e, t), e.prototype.OnInitData = function() {
                    this._bIsTopLayerUI = !0
                }, e.prototype.OnRegEventsHandlers = function() {
                    this.OnClicked("top/back_btn", this.OnClickedBackBtn), this.OnClicked("main/bottom/del_btn", this.OnClickedDelBtn), this.OnClicked("main/bottom/reset_btn", this.OnClickedResetBtn), this.OnClicked("main/bottom/continue_btn", this.OnClickedContinueBtn), this.OnClicked("main/bottom/save_btn", this.OnClickedSaveBtn), this.OnClicked("main/bottom/share_btn", this.OnClickedShareBtn)
                }, e.prototype.OnShowUI = function() {
                    var t = this,
                        e = this.GetData();
                    if (e) {
                        var n = e.PicId,
                            i = e.Mode,
                            o = this.Seek("bg"),
                            r = this.Seek("top"),
                            a = this.Seek("main/bottom");
                        if (r.opacity = 0, this._sPicID = n, this._sRecordMode = i, this._sBackScene = e.BackScene, "Finished" == i) {
                            this.SetNodeVisible("main/bottom/share_btn", !0), this.SetNodeVisible("main/bottom/continue_btn", !1);
                            var s = this.Seek("main/bottom/reset_btn"),
                                c = this.Seek("main/bottom/share_btn");
                            this.Seek("main/bottom/del_btn").setPosition(0, 250), s.setPosition(0, 100), c.setPosition(0, -50), c.active = !1
                        } else {
                            this.SetNodeVisible("main/bottom/share_btn", !0), this.SetNodeVisible("main/bottom/continue_btn", !0);
                            s = this.Seek("main/bottom/reset_btn"), c = this.Seek("main/bottom/share_btn");
                            this.Seek("main/bottom/del_btn").setPosition(0, 250), s.setPosition(0, 100), c.setPosition(0, -50), c.active = !1
                        }
                        o.runAction(cc.sequence([cc.fadeIn(.3), cc.callFunc(function() {
                            a.runAction(cc.moveTo(.2, cc.v2(320, 0)))
                        }), cc.delayTime(.2), cc.callFunc(function() {
                            r.runAction(cc.fadeIn(.3)), t.ShowPreviewPic(n)
                        })]))
                    }
                }, e.prototype.OnCloseUI = function() {
                    this._sPicID = "", this._preView && (this._preView.removeFromParent(), this._preView = null)
                }, e.prototype.OnDestroyUI = function() {}, e.prototype.ShowPreviewPic = function(t) {
                    var e = this,
                        n = this.Seek("top/lines"),
                        i = this.Seek("preview"),
                        o = this.Seek("top");
                    this._preView && (this._preView.removeFromParent(), this._preView = null), this._preView = cc.instantiate(i), this._preView.position = cc.v2(-250, 230), o.addChild(this._preView), cc.loader.loadRes("lines/" + t, function(t, e) {
                        n.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(e), n.runAction(cc.fadeIn(.3))
                    });
                    var s = r._M.GetPicColorData(t),
                        c = this._preView.getComponent(a.default);
                    c.LoadData(t, function(t, n) {
                        c.DoDrawSvgTask(n, "", function() {
                            c.setHideLines(!0), c.setHideBlocks(!1, s), c.setDrawMode(1), c.forceDirty(), c.setDrawCallback(null), e._preView.runAction(cc.fadeIn(.1))
                        })
                    }), n.parent = null, n.parent = o
                }, e.prototype.OnClickedBackBtn = function() {
                    var t = this,
                        e = this.Seek("main/bottom"),
                        n = this.Seek("bg"),
                        i = this.Seek("top"),
                        o = this._sBackScene;
                    i.runAction(cc.fadeOut(.3)), e.runAction(cc.sequence([cc.moveTo(.3, cc.v2(820, 0)), cc.callFunc(function() {
                        n.runAction(cc.fadeOut(.3)), o && "" != o && "Record" != o || r._M.UIManager.ShowUI("UIRecord", {
                            Mode: t._sRecordMode
                        })
                    }), cc.delayTime(.5), cc.callFunc(function() {
                        o && "" != o && r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                            Name: o
                        }), t.Close()
                    })]))
                }, e.prototype.OnClickedDelBtn = function() {
                    var t = this._sPicID,
                        e = this._sBackScene;
                    r._M.ShowSystemDialogEX("STR_CONFIRM_DELETE", function() {
                        var n = r._M.GetPicColorData(t);
                        if (n) {
                            var i = n.replace(new RegExp("1", "g"), "0");
                            if (r._M.SetPicColorData(t, i), r._M.RemovePicStatu(t), e && "" != e) return void r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                                Name: e
                            });
                            r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                                Name: "Record"
                            })
                        }
                    })
                }, e.prototype.OnClickedResetBtn = function() {
                    var t = this,
                        e = this._sPicID;
                    r._M.ShowSystemDialogEX("STR_CONFIRM_REDRAW", function() {
                        var n = r._M.GetPicColorData(e);
                        if (n) {
                            var i = n.replace(new RegExp("1", "g"), "0");
                            r._M.SetPicColorData(e, i), t.ShowPreviewPic(e)
                        }
                    })
                }, e.prototype.OnClickedShareBtn = function() {
                    r._M.SDK.DoShareGame()
                }, e.prototype.OnClickedContinueBtn = function() {
                    var t = this._sPicID;
                    t && "" != t && (r._M.UpdatePicStatu(t), r._M.SEND_EVENT("GAME_EVENT", "CHANGE_SCENE", {
                        Name: "Game",
                        PicId: t,
                        BackScene: "Record"
                    }))
                }, e.prototype.OnClickedSaveBtn = function() {
                    r._M.ShowSystemTips("\u8be5\u529f\u80fd\u6682\u672a\u5f00\u653e!")
                }, e = o([c], e)
            }(r._M.UIBaseClass));
        n.default = l, r._M.UIManager.RegisterUIModule("UIShare", l), cc._RF.pop()
    }, {
        "../../Base/init": "Init",
        "../comp/Svg": "Svg"
    }],
    UISignIn: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "35100YRHPtPwrowPbgV5MuM", "UISignIn");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.OnInitData = function() {
                    this._bIsTopLayerUI = !0, this._bScaleOpenAction = !0
                }, e.prototype.OnRegEventsHandlers = function() {
                    this.OnClicked("ref/close_btn", this.OnClickedCloseBtn), this.OnClicked("ref/doblue_btn", this.OnClickedDoubleBtn), this.OnClicked("ref/normal_get_btn", this.OnClickedNormalBtn)
                }, e.prototype.OnShowUI = function() {
                    var t = r._M.DataManager.GetDataByName("SiginConf");
                    if (t) {
                        for (var e = r._M.GetDataVal("SignDay"), n = this.Seek("ref/day_label"), i = 1; i <= 6; i++) {
                            var o = this.Seek("ref/day_" + i),
                                a = this.Seek("ref/day_" + i + "/gold_label"),
                                s = t[i];
                            s && (a.getComponent(cc.Label).string = "+" + s.Gold, i <= 5 && i <= e && (o.color = cc.color(128, 128, 128)))
                        }
                        n.getComponent(cc.Label).string = e <= 5 ? e + "/5" : "" + e
                    }
                }, e.prototype.OnCloseUI = function() {}, e.prototype.OnDestroyUI = function() {}, e.prototype.OnClickedCloseBtn = function() {
                    this.Close()
                }, e.prototype.OnClickedDoubleBtn = function() {
                    var t = this;
                    r._M.ShowSystemDialog("\u662f\u5426\u89c2\u770b\u5e7f\u544a\u9886\u53d6\u53cc\u500d\u5956\u52b1?", function() {
                        r._M.SDK.ShowVideoAd(function(e) {
                            1 == e ? t.DoGetGold() : r._M.ShowSystemTipsEx("STR_VIEW_VIDEO_FAILED")
                        })
                    })
                }, e.prototype.OnClickedNormalBtn = function() {
                    this.DoGetGold()
                }, e.prototype.DoGetGold = function(t) {
                    void 0 === t && (t = !1);
                    var e = r._M.TimeUtility.GetBeginTimeVal(),
                        n = r._M.GetDataVal("LastSignTime"),
                        i = r._M.GetDataVal("SignDay") + 1;
                    i > 6 && (i = 6);
                    var o = r._M.DataManager.GetDataByNameAndId("SiginConf", i);
                    if (o && e - n >= 864e5) {
                        r._M.SetDataVal("LastSignTime", e), r._M.SetDataVal("SignDay", i), r._M.SetDataVal("TodayDoSigin", !0);
                        var a = parseInt(o.Gold);
                        t && (a *= 2), r._M.MofidyDataVal("Gold", a), r._M.UIManager.ShowUI("UIGetItem", {
                            Gold: a
                        }), this.Close()
                    }
                }, e = o([s], e)
            }(r._M.UIBaseClass));
        n.default = c, r._M.UIManager.RegisterUIModule("UISignIn", c), cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    UISystemTips: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1ac2dGC1TVNvrC9zcD3qF9w", "UISystemTips");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.OnInitData = function() {
                    this._bIsTopLayerUI = !0, this._bScaleOpenAction = !0
                }, e.prototype.OnRegEventsHandlers = function() {
                    this.OnClicked("ref/close_btn", this.OnClickedCloseBtn)
                }, e.prototype.OnShowUI = function() {
                    var t = this,
                        e = this.GetData(),
                        n = this.Seek("ref/tips_label");
                    n && (n.stopAllActions(), n.getComponent(cc.Label).string = e || "", n.runAction(cc.sequence([cc.delayTime(5), cc.callFunc(function() {
                        t.Close()
                    })])))
                }, e.prototype.OnCloseUI = function() {
                    var t = this.Seek("tips_label");
                    t && t.stopAllActions()
                }, e.prototype.OnDestroyUI = function() {}, e.prototype.OnClickedCloseBtn = function() {
                    this.Close()
                }, e = o([s], e)
            }(r._M.UIBaseClass));
        n.default = c, r._M.UIManager.RegisterUIModule("UISystemTips", c), cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    UIWaiting: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7df38Ni56FFY7ODlOCv6AaC", "UIWaiting");
        var i = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function i() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(t, e, n, i) {
                var o, r = arguments.length,
                    a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, n, a) : o(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t("../../Base/init"),
            a = cc._decorator,
            s = a.ccclass,
            c = (a.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.OnInitData = function() {
                    this._bIsTopLayerUI = !0
                }, e.prototype.OnRegEventsHandlers = function() {}, e.prototype.OnShowUI = function() {
                    var t = this.Seek("waiting_icon");
                    t && (t.stopAllActions(), t.runAction(cc.repeatForever(cc.rotateBy(100, 36e3))))
                }, e.prototype.OnCloseUI = function() {}, e.prototype.OnDestroyUI = function() {}, e = o([s], e)
            }(r._M.UIBaseClass));
        n.default = c, r._M.UIManager.RegisterUIModule("UIWaiting", c), cc._RF.pop()
    }, {
        "../../Base/init": "Init"
    }],
    WxUtil: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "26289VDRDdO2p94LTG1wM2n", "WxUtil"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = t("../AppBase/DataManager"),
            o = function() {
                function t() {
                    this._wx = window.wx, this._map = [], this.init()
                }
                return Object.defineProperty(t.prototype, "Map", {
                    get: function() {
                        return this._map
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "wx", {
                    get: function() {
                        return window.wx
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.getInstance = function() {
                    return console.warn("\u8b66\u544a:\u5f53\u524d\u4e0d\u662f\u5fae\u4fe1\u73af\u5883\uff0cWxUtil\u4e00\u4e9b\u65b9\u6cd5\u5c06\u4e0d\u53ef\u7528!"), this.instance || (this.instance = new t), this.instance
                }, t.prototype.init = function() {
                    this.wx.updateShareMenu({
                        withShareTicket: !0
                    }), this.defaultShare2Wx()
                }, t.prototype.getURL = function(t) {
                    t = cc.url.raw(t), cc.loader.md5Pipe && (t = cc.loader.md5Pipe.transformURL(t));
                    try {
                        this.wx.getFileSystemManager().accessSync(t)
                    } catch (e) {
                        t = window.wxDownloader.REMOTE_SERVER_ROOT + "/" + t
                    }
                    return t
                }, t.prototype.share2Wx = function(e) {
                    Math.floor(2 * Math.random());
                    var n = i.DataManager.GetInstance().GetDataByNameAndId("ShareConfig", 1..toString());
                    null == e.imageUrl && (e.imageUrl = t.getInstance().getURL("resources/share/" + n.Path)), null == e.title && (e.title = "" + n.Desc), this.wx.shareAppMessage(e)
                }, t.prototype.defaultShare2Wx = function() {
                    this.wx.showShareMenu(), this.wx.onShareAppMessage(function() {
                        try {
                            Math.floor(3 * Math.random());
                            1;
                            var e = i.DataManager.GetInstance().GetDataByNameAndId("ShareConfig", 1..toString()),
                                n = t.getInstance().getURL("resources/share/" + e.Path);
                            return {
                                title: "" + e.Desc,
                                imageUrl: n
                            }
                        } catch (t) {
                            return {}
                        }
                    })
                }, t.prototype.initRewardedVideoAd = function(t, e) {
                    var n = this.wx.createRewardedVideoAd({
                        adUnitId: t
                    });
                    if (e) return n.onClose(function(t) {
                        console.log("rewardedVideoAd onClose"), console.log(t), t && t.isEnded || void 0 === t ? (e.success(), n.load()) : (e.fail(), n.load())
                    }.bind(this)), n.onError(function(t) {
                        console.log("videoAd onError", t), setTimeout(function() {
                            n.load()
                        }, 3e3)
                    }), n.onLoad(function(t) {
                        console.log("videoAd onLoad", t)
                    }), n
                }, t.prototype.loadAndShowRewardVideo = function(t, e) {
                    var n = this.wx.createRewardedVideoAd({
                        adUnitId: t
                    });
                    n.onClose(function(t) {
                        console.log("rewardedVideoAd onClose"), console.log(t), t && t.isEnded || void 0 === t ? e && e(!0) : e && e(!1)
                    }), n.onError(function(t) {
                        console.log("videoAd onError", t), setTimeout(function() {
                            n.load()
                        }, 3e3)
                    }), n.onLoad(function(t) {
                        n.show()
                    }), n.load()
                }, t.prototype.initBannerAd = function(t, e) {
                    void 0 === e && (e = null), console.log("initBannerAd----------" + t);
                    var n = this.wx.getSystemInfoSync().windowWidth,
                        i = this.wx.getSystemInfoSync().windowHeight,
                        o = this.wx.createBannerAd({
                            adUnitId: t,
                            adIntervals: 150,
                            style: {
                                left: 0,
                                top: i - 90,
                                width: n
                            }
                        }),
                        r = !1;
                    return n / i <= .53 && (r = !0), o.onError(function(t) {
                        console.log("bannerAd onError"), o.load()
                    }), o.onResize(function() {
                        o.style.top = r ? i - .24 * n - 44 + .1 : i - .24 * n + .1, e && e()
                    }), o
                }, t.prototype.initAppBox = function(t, e) {
                    var n = this.wx.createAppBox({
                        adUnitId: t
                    });
                    return n.load().then(function() {
                        e && e()
                    }), n
                }, t.prototype.getFriendCloudStorage = function(t) {
                    this.wx.getFriendCloudStorage(t)
                }, t.prototype.getGroupCloudStorage = function(t) {
                    this.wx.getGroupCloudStorage(t)
                }, t.prototype.getUserCloudStorage = function(t) {
                    this.wx.getUserCloudStorage(t)
                }, t.prototype.removeUserCloudStorage = function(t) {
                    this.wx.removeUserCloudStorage(t)
                }, t.prototype.setUserCloudStorage = function(t) {
                    this.wx.setUserCloudStorage(t)
                }, t.prototype.onStartQuest = function(t) {
                    this._wx.aldStage && this._wx.aldStage.onStart && this._wx.aldStage.onStart({
                        stageId: "" + t,
                        stageName: "\u7b2c" + t + "\u5173"
                    })
                }, t.prototype.onFinishQuest = function(t, e) {
                    if (this._wx.aldStage && this._wx.aldStage.onEnd) {
                        var n = "fail";
                        1 == e && (n = "complete"), this._wx.aldStage.onEnd({
                            stageId: "" + t,
                            stageName: "\u7b2c" + t + "\u5173",
                            event: n
                        })
                    }
                }, t.prototype.onSendEvent = function(t) {
                    this._wx.aldSendEvent && this._wx.aldSendEvent(t)
                }, t.prototype.getAuthorize = function() {
                    var t = this._wx;
                    t.getSetting({
                        success: function(e) {
                            e.authSetting["scope.writePhotosAlbum"] || t.authorize({
                                scope: "scope.writePhotosAlbum",
                                success: function() {}
                            })
                        }
                    })
                }, t.prototype.captureScreen = function(t, e, n, i) {
                    var o = this._wx;
                    if (o) {
                        this.getAuthorize();
                        var r = {
                                title: ""
                            },
                            a = cc.game.canvas;
                        a.toTempFilePath({
                            x: t - a.width * n * .5,
                            y: e - a.width * i * .5,
                            width: a.width * n,
                            height: a.width * i,
                            destWidth: 500,
                            destHeight: 400,
                            fileType: "jpg",
                            quality: 1,
                            success: function(t) {
                                console.log(JSON.stringify(t)), r.imgUrl = t.tempFilePath, o.saveImageToPhotosAlbum({
                                    filePath: t.tempFilePath,
                                    success: function(t) {
                                        console.log("CSWeChatUtils.shareMessage 001"), console.log(JSON.stringify(t)), o.shareAppMessage(r)
                                    }
                                })
                            }
                        })
                    }
                }, t.prototype.createUserInfoButtonByNode = function(t, e) {
                    if (void 0 === e && (e = null), this._wx) {
                        var n = this._wx;
                        n.getSetting({
                            success: function(i) {
                                if (i.authSetting["scope.userInfo"]) n.getUserInfo({
                                    success: function(t) {
                                        e(t)
                                    }
                                });
                                else {
                                    var o = n.getSystemInfoSync();
                                    console.log("sysInfo"), console.log(o);
                                    var r = (.5 + t.x - .5 * t.width) * o.windowWidth,
                                        a = (.5 + t.y - .5 * t.height) * o.windowHeight,
                                        s = n.createUserInfoButton({
                                            type: "text",
                                            text: "",
                                            style: {
                                                left: r,
                                                top: a,
                                                width: t.width * o.windowWidth,
                                                height: t.height * o.windowHeight,
                                                lineHeight: 40,
                                                backgroundColor: "#00000000",
                                                color: "#00000000",
                                                textAlign: "center",
                                                fontSize: 16,
                                                borderRadius: 4
                                            }
                                        });
                                    s.onTap(function(t) {
                                        t.userInfo && s.hide(), e && e(t)
                                    })
                                }
                            }
                        })
                    }
                }, t
            }();
        n.default = o, cc._RF.pop()
    }, {
        "../AppBase/DataManager": "DataManager"
    }],
    pako: [function(t, e, n) {
        (function(i) {
            "use strict";
            cc._RF.push(e, "88a79hh0JZJTJ58fMJjQmen", "pako");
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
            ! function(t) {
                if ("object" == (void 0 === n ? "undefined" : o(n)) && void 0 !== e) e.exports = t();
                else if ("function" == typeof define && define.amd) define([], t);
                else {
                    ("undefined" != typeof window ? window : void 0 !== i ? i : "undefined" != typeof self ? self : this).pako = t()
                }
            }(function() {
                return function e(n, i, o) {
                    function r(s, c) {
                        if (!i[s]) {
                            if (!n[s]) {
                                var l = "function" == typeof t && t;
                                if (!c && l) return l(s, !0);
                                if (a) return a(s, !0);
                                var u = new Error("Cannot find module '" + s + "'");
                                throw u.code = "MODULE_NOT_FOUND", u
                            }
                            var h = i[s] = {
                                exports: {}
                            };
                            n[s][0].call(h.exports, function(t) {
                                var e = n[s][1][t];
                                return r(e || t)
                            }, h, h.exports, e, n, i, o)
                        }
                        return i[s].exports
                    }
                    for (var a = "function" == typeof t && t, s = 0; s < o.length; s++) r(o[s]);
                    return r
                }({
                    1: [function(t, e, n) {
                        function i(t) {
                            if (!(this instanceof i)) return new i(t);
                            this.options = a.assign({
                                level: _,
                                method: f,
                                chunkSize: 16384,
                                windowBits: 15,
                                memLevel: 8,
                                strategy: d,
                                to: ""
                            }, t || {});
                            var e = this.options;
                            e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l, this.strm.avail_out = 0;
                            var n = r.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
                            if (n !== h) throw new Error(c[n]);
                            if (e.header && r.deflateSetHeader(this.strm, e.header), e.dictionary) {
                                var o;
                                if (o = "string" == typeof e.dictionary ? s.string2buf(e.dictionary) : "[object ArrayBuffer]" === u.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, (n = r.deflateSetDictionary(this.strm, o)) !== h) throw new Error(c[n]);
                                this._dict_set = !0
                            }
                        }

                        function o(t, e) {
                            var n = new i(e);
                            if (n.push(t, !0), n.err) throw n.msg;
                            return n.result
                        }
                        var r = t("./zlib/deflate"),
                            a = t("./utils/common"),
                            s = t("./utils/strings"),
                            c = t("./zlib/messages"),
                            l = t("./zlib/zstream"),
                            u = Object.prototype.toString,
                            h = 0,
                            _ = -1,
                            d = 0,
                            f = 8;
                        i.prototype.push = function(t, e) {
                            var n, i, o = this.strm,
                                c = this.options.chunkSize;
                            if (this.ended) return !1;
                            i = e === ~~e ? e : !0 === e ? 4 : 0, "string" == typeof t ? o.input = s.string2buf(t) : "[object ArrayBuffer]" === u.call(t) ? o.input = new Uint8Array(t) : o.input = t, o.next_in = 0, o.avail_in = o.input.length;
                            do {
                                if (0 === o.avail_out && (o.output = new a.Buf8(c), o.next_out = 0, o.avail_out = c), 1 !== (n = r.deflate(o, i)) && n !== h) return this.onEnd(n), this.ended = !0, !1;
                                0 !== o.avail_out && (0 !== o.avail_in || 4 !== i && 2 !== i) || ("string" === this.options.to ? this.onData(s.buf2binstring(a.shrinkBuf(o.output, o.next_out))) : this.onData(a.shrinkBuf(o.output, o.next_out)))
                            } while ((o.avail_in > 0 || 0 === o.avail_out) && 1 !== n);
                            return 4 === i ? (n = r.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === h) : 2 !== i || (this.onEnd(h), o.avail_out = 0, !0)
                        }, i.prototype.onData = function(t) {
                            this.chunks.push(t)
                        }, i.prototype.onEnd = function(t) {
                            t === h && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
                        }, n.Deflate = i, n.deflate = o, n.deflateRaw = function(t, e) {
                            return (e = e || {}).raw = !0, o(t, e)
                        }, n.gzip = function(t, e) {
                            return (e = e || {}).gzip = !0, o(t, e)
                        }
                    }, {
                        "./utils/common": 3,
                        "./utils/strings": 4,
                        "./zlib/deflate": 8,
                        "./zlib/messages": 13,
                        "./zlib/zstream": 15
                    }],
                    2: [function(t, e, n) {
                        function i(t) {
                            if (!(this instanceof i)) return new i(t);
                            this.options = a.assign({
                                chunkSize: 16384,
                                windowBits: 0,
                                to: ""
                            }, t || {});
                            var e = this.options;
                            e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new u, this.strm.avail_out = 0;
                            var n = r.inflateInit2(this.strm, e.windowBits);
                            if (n !== c.Z_OK) throw new Error(l[n]);
                            this.header = new h, r.inflateGetHeader(this.strm, this.header)
                        }

                        function o(t, e) {
                            var n = new i(e);
                            if (n.push(t, !0), n.err) throw n.msg;
                            return n.result
                        }
                        var r = t("./zlib/inflate"),
                            a = t("./utils/common"),
                            s = t("./utils/strings"),
                            c = t("./zlib/constants"),
                            l = t("./zlib/messages"),
                            u = t("./zlib/zstream"),
                            h = t("./zlib/gzheader"),
                            _ = Object.prototype.toString;
                        i.prototype.push = function(t, e) {
                            var n, i, o, l, u, h, d = this.strm,
                                f = this.options.chunkSize,
                                p = this.options.dictionary,
                                g = !1;
                            if (this.ended) return !1;
                            i = e === ~~e ? e : !0 === e ? c.Z_FINISH : c.Z_NO_FLUSH, "string" == typeof t ? d.input = s.binstring2buf(t) : "[object ArrayBuffer]" === _.call(t) ? d.input = new Uint8Array(t) : d.input = t, d.next_in = 0, d.avail_in = d.input.length;
                            do {
                                if (0 === d.avail_out && (d.output = new a.Buf8(f), d.next_out = 0, d.avail_out = f), (n = r.inflate(d, c.Z_NO_FLUSH)) === c.Z_NEED_DICT && p && (h = "string" == typeof p ? s.string2buf(p) : "[object ArrayBuffer]" === _.call(p) ? new Uint8Array(p) : p, n = r.inflateSetDictionary(this.strm, h)), n === c.Z_BUF_ERROR && !0 === g && (n = c.Z_OK, g = !1), n !== c.Z_STREAM_END && n !== c.Z_OK) return this.onEnd(n), this.ended = !0, !1;
                                d.next_out && (0 !== d.avail_out && n !== c.Z_STREAM_END && (0 !== d.avail_in || i !== c.Z_FINISH && i !== c.Z_SYNC_FLUSH) || ("string" === this.options.to ? (o = s.utf8border(d.output, d.next_out), l = d.next_out - o, u = s.buf2string(d.output, o), d.next_out = l, d.avail_out = f - l, l && a.arraySet(d.output, d.output, o, l, 0), this.onData(u)) : this.onData(a.shrinkBuf(d.output, d.next_out)))), 0 === d.avail_in && 0 === d.avail_out && (g = !0)
                            } while ((d.avail_in > 0 || 0 === d.avail_out) && n !== c.Z_STREAM_END);
                            return n === c.Z_STREAM_END && (i = c.Z_FINISH), i === c.Z_FINISH ? (n = r.inflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === c.Z_OK) : i !== c.Z_SYNC_FLUSH || (this.onEnd(c.Z_OK), d.avail_out = 0, !0)
                        }, i.prototype.onData = function(t) {
                            this.chunks.push(t)
                        }, i.prototype.onEnd = function(t) {
                            t === c.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
                        }, n.Inflate = i, n.inflate = o, n.inflateRaw = function(t, e) {
                            return (e = e || {}).raw = !0, o(t, e)
                        }, n.ungzip = o
                    }, {
                        "./utils/common": 3,
                        "./utils/strings": 4,
                        "./zlib/constants": 6,
                        "./zlib/gzheader": 9,
                        "./zlib/inflate": 11,
                        "./zlib/messages": 13,
                        "./zlib/zstream": 15
                    }],
                    3: [function(t, e, n) {
                        var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
                        n.assign = function(t) {
                            for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
                                var n = e.shift();
                                if (n) {
                                    if ("object" != (void 0 === n ? "undefined" : o(n))) throw new TypeError(n + "must be non-object");
                                    for (var i in n) n.hasOwnProperty(i) && (t[i] = n[i])
                                }
                            }
                            return t
                        }, n.shrinkBuf = function(t, e) {
                            return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t)
                        };
                        var r = {
                                arraySet: function(t, e, n, i, o) {
                                    if (e.subarray && t.subarray) t.set(e.subarray(n, n + i), o);
                                    else
                                        for (var r = 0; r < i; r++) t[o + r] = e[n + r]
                                },
                                flattenChunks: function(t) {
                                    var e, n, i, o, r, a;
                                    for (i = 0, e = 0, n = t.length; e < n; e++) i += t[e].length;
                                    for (a = new Uint8Array(i), o = 0, e = 0, n = t.length; e < n; e++) r = t[e], a.set(r, o), o += r.length;
                                    return a
                                }
                            },
                            a = {
                                arraySet: function(t, e, n, i, o) {
                                    for (var r = 0; r < i; r++) t[o + r] = e[n + r]
                                },
                                flattenChunks: function(t) {
                                    return [].concat.apply([], t)
                                }
                            };
                        n.setTyped = function(t) {
                            t ? (n.Buf8 = Uint8Array, n.Buf16 = Uint16Array, n.Buf32 = Int32Array, n.assign(n, r)) : (n.Buf8 = Array, n.Buf16 = Array, n.Buf32 = Array, n.assign(n, a))
                        }, n.setTyped(i)
                    }, {}],
                    4: [function(t, e, n) {
                        function i(t, e) {
                            if (e < 65537 && (t.subarray && a || !t.subarray && r)) return String.fromCharCode.apply(null, o.shrinkBuf(t, e));
                            for (var n = "", i = 0; i < e; i++) n += String.fromCharCode(t[i]);
                            return n
                        }
                        var o = t("./common"),
                            r = !0,
                            a = !0;
                        try {
                            String.fromCharCode.apply(null, [0])
                        } catch (t) {
                            r = !1
                        }
                        try {
                            String.fromCharCode.apply(null, new Uint8Array(1))
                        } catch (t) {
                            a = !1
                        }
                        for (var s = new o.Buf8(256), c = 0; c < 256; c++) s[c] = c >= 252 ? 6 : c >= 248 ? 5 : c >= 240 ? 4 : c >= 224 ? 3 : c >= 192 ? 2 : 1;
                        s[254] = s[254] = 1, n.string2buf = function(t) {
                            var e, n, i, r, a, s = t.length,
                                c = 0;
                            for (r = 0; r < s; r++) 55296 == (64512 & (n = t.charCodeAt(r))) && r + 1 < s && (56320 == (64512 & (i = t.charCodeAt(r + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), r++)), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
                            for (e = new o.Buf8(c), a = 0, r = 0; a < c; r++) 55296 == (64512 & (n = t.charCodeAt(r))) && r + 1 < s && (56320 == (64512 & (i = t.charCodeAt(r + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), r++)), n < 128 ? e[a++] = n : n < 2048 ? (e[a++] = 192 | n >>> 6, e[a++] = 128 | 63 & n) : n < 65536 ? (e[a++] = 224 | n >>> 12, e[a++] = 128 | n >>> 6 & 63, e[a++] = 128 | 63 & n) : (e[a++] = 240 | n >>> 18, e[a++] = 128 | n >>> 12 & 63, e[a++] = 128 | n >>> 6 & 63, e[a++] = 128 | 63 & n);
                            return e
                        }, n.buf2binstring = function(t) {
                            return i(t, t.length)
                        }, n.binstring2buf = function(t) {
                            for (var e = new o.Buf8(t.length), n = 0, i = e.length; n < i; n++) e[n] = t.charCodeAt(n);
                            return e
                        }, n.buf2string = function(t, e) {
                            var n, o, r, a, c = e || t.length,
                                l = new Array(2 * c);
                            for (o = 0, n = 0; n < c;)
                                if ((r = t[n++]) < 128) l[o++] = r;
                                else if ((a = s[r]) > 4) l[o++] = 65533, n += a - 1;
                            else {
                                for (r &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && n < c;) r = r << 6 | 63 & t[n++], a--;
                                a > 1 ? l[o++] = 65533 : r < 65536 ? l[o++] = r : (r -= 65536, l[o++] = 55296 | r >> 10 & 1023, l[o++] = 56320 | 1023 & r)
                            }
                            return i(l, o)
                        }, n.utf8border = function(t, e) {
                            var n;
                            for ((e = e || t.length) > t.length && (e = t.length), n = e - 1; n >= 0 && 128 == (192 & t[n]);) n--;
                            return n < 0 ? e : 0 === n ? e : n + s[t[n]] > e ? n : e
                        }
                    }, {
                        "./common": 3
                    }],
                    5: [function(t, e, n) {
                        e.exports = function(t, e, n, i) {
                            for (var o = 65535 & t | 0, r = t >>> 16 & 65535 | 0, a = 0; 0 !== n;) {
                                n -= a = n > 2e3 ? 2e3 : n;
                                do {
                                    r = r + (o = o + e[i++] | 0) | 0
                                } while (--a);
                                o %= 65521, r %= 65521
                            }
                            return o | r << 16 | 0
                        }
                    }, {}],
                    6: [function(t, e, n) {
                        e.exports = {
                            Z_NO_FLUSH: 0,
                            Z_PARTIAL_FLUSH: 1,
                            Z_SYNC_FLUSH: 2,
                            Z_FULL_FLUSH: 3,
                            Z_FINISH: 4,
                            Z_BLOCK: 5,
                            Z_TREES: 6,
                            Z_OK: 0,
                            Z_STREAM_END: 1,
                            Z_NEED_DICT: 2,
                            Z_ERRNO: -1,
                            Z_STREAM_ERROR: -2,
                            Z_DATA_ERROR: -3,
                            Z_BUF_ERROR: -5,
                            Z_NO_COMPRESSION: 0,
                            Z_BEST_SPEED: 1,
                            Z_BEST_COMPRESSION: 9,
                            Z_DEFAULT_COMPRESSION: -1,
                            Z_FILTERED: 1,
                            Z_HUFFMAN_ONLY: 2,
                            Z_RLE: 3,
                            Z_FIXED: 4,
                            Z_DEFAULT_STRATEGY: 0,
                            Z_BINARY: 0,
                            Z_TEXT: 1,
                            Z_UNKNOWN: 2,
                            Z_DEFLATED: 8
                        }
                    }, {}],
                    7: [function(t, e, n) {
                        var i = function() {
                            for (var t, e = [], n = 0; n < 256; n++) {
                                t = n;
                                for (var i = 0; i < 8; i++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                                e[n] = t
                            }
                            return e
                        }();
                        e.exports = function(t, e, n, o) {
                            var r = i,
                                a = o + n;
                            t ^= -1;
                            for (var s = o; s < a; s++) t = t >>> 8 ^ r[255 & (t ^ e[s])];
                            return -1 ^ t
                        }
                    }, {}],
                    8: [function(t, e, n) {
                        function i(t, e) {
                            return t.msg = A[e], e
                        }

                        function o(t) {
                            return (t << 1) - (t > 4 ? 9 : 0)
                        }

                        function r(t) {
                            for (var e = t.length; --e >= 0;) t[e] = 0
                        }

                        function a(t) {
                            var e = t.state,
                                n = e.pending;
                            n > t.avail_out && (n = t.avail_out), 0 !== n && (k.arraySet(t.output, e.pending_buf, e.pending_out, n, t.next_out), t.next_out += n, e.pending_out += n, t.total_out += n, t.avail_out -= n, e.pending -= n, 0 === e.pending && (e.pending_out = 0))
                        }

                        function s(t, e) {
                            T._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, a(t.strm)
                        }

                        function c(t, e) {
                            t.pending_buf[t.pending++] = e
                        }

                        function l(t, e) {
                            t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e
                        }

                        function u(t, e, n, i) {
                            var o = t.avail_in;
                            return o > i && (o = i), 0 === o ? 0 : (t.avail_in -= o, k.arraySet(e, t.input, t.next_in, o, n), 1 === t.state.wrap ? t.adler = E(t.adler, e, o, n) : 2 === t.state.wrap && (t.adler = w(t.adler, e, o, n)), t.next_in += o, t.total_in += o, o)
                        }

                        function h(t, e) {
                            var n, i, o = t.max_chain_length,
                                r = t.strstart,
                                a = t.prev_length,
                                s = t.nice_match,
                                c = t.strstart > t.w_size - it ? t.strstart - (t.w_size - it) : 0,
                                l = t.window,
                                u = t.w_mask,
                                h = t.prev,
                                _ = t.strstart + nt,
                                d = l[r + a - 1],
                                f = l[r + a];
                            t.prev_length >= t.good_match && (o >>= 2), s > t.lookahead && (s = t.lookahead);
                            do {
                                if (l[(n = e) + a] === f && l[n + a - 1] === d && l[n] === l[r] && l[++n] === l[r + 1]) {
                                    r += 2, n++;
                                    do {} while (l[++r] === l[++n] && l[++r] === l[++n] && l[++r] === l[++n] && l[++r] === l[++n] && l[++r] === l[++n] && l[++r] === l[++n] && l[++r] === l[++n] && l[++r] === l[++n] && r < _);
                                    if (i = nt - (_ - r), r = _ - nt, i > a) {
                                        if (t.match_start = e, a = i, i >= s) break;
                                        d = l[r + a - 1], f = l[r + a]
                                    }
                                }
                            } while ((e = h[e & u]) > c && 0 != --o);
                            return a <= t.lookahead ? a : t.lookahead
                        }

                        function _(t) {
                            var e, n, i, o, r, a = t.w_size;
                            do {
                                if (o = t.window_size - t.lookahead - t.strstart, t.strstart >= a + (a - it)) {
                                    k.arraySet(t.window, t.window, a, a, 0), t.match_start -= a, t.strstart -= a, t.block_start -= a, e = n = t.hash_size;
                                    do {
                                        i = t.head[--e], t.head[e] = i >= a ? i - a : 0
                                    } while (--n);
                                    e = n = a;
                                    do {
                                        i = t.prev[--e], t.prev[e] = i >= a ? i - a : 0
                                    } while (--n);
                                    o += a
                                }
                                if (0 === t.strm.avail_in) break;
                                if (n = u(t.strm, t.window, t.strstart + t.lookahead, o), t.lookahead += n, t.lookahead + t.insert >= et)
                                    for (r = t.strstart - t.insert, t.ins_h = t.window[r], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[r + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[r + et - 1]) & t.hash_mask, t.prev[r & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = r, r++, t.insert--, !(t.lookahead + t.insert < et)););
                            } while (t.lookahead < it && 0 !== t.strm.avail_in)
                        }

                        function d(t, e) {
                            for (var n, i;;) {
                                if (t.lookahead < it) {
                                    if (_(t), t.lookahead < it && e === D) return _t;
                                    if (0 === t.lookahead) break
                                }
                                if (n = 0, t.lookahead >= et && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== n && t.strstart - n <= t.w_size - it && (t.match_length = h(t, n)), t.match_length >= et)
                                    if (i = T._tr_tally(t, t.strstart - t.match_start, t.match_length - et), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= et) {
                                        t.match_length--;
                                        do {
                                            t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart
                                        } while (0 != --t.match_length);
                                        t.strstart++
                                    } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
                                else i = T._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
                                if (i && (s(t, !1), 0 === t.strm.avail_out)) return _t
                            }
                            return t.insert = t.strstart < et - 1 ? t.strstart : et - 1, e === O ? (s(t, !0), 0 === t.strm.avail_out ? ft : pt) : t.last_lit && (s(t, !1), 0 === t.strm.avail_out) ? _t : dt
                        }

                        function f(t, e) {
                            for (var n, i, o;;) {
                                if (t.lookahead < it) {
                                    if (_(t), t.lookahead < it && e === D) return _t;
                                    if (0 === t.lookahead) break
                                }
                                if (n = 0, t.lookahead >= et && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = et - 1, 0 !== n && t.prev_length < t.max_lazy_match && t.strstart - n <= t.w_size - it && (t.match_length = h(t, n), t.match_length <= 5 && (t.strategy === V || t.match_length === et && t.strstart - t.match_start > 4096) && (t.match_length = et - 1)), t.prev_length >= et && t.match_length <= t.prev_length) {
                                    o = t.strstart + t.lookahead - et, i = T._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - et), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
                                    do {
                                        ++t.strstart <= o && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart)
                                    } while (0 != --t.prev_length);
                                    if (t.match_available = 0, t.match_length = et - 1, t.strstart++, i && (s(t, !1), 0 === t.strm.avail_out)) return _t
                                } else if (t.match_available) {
                                    if ((i = T._tr_tally(t, 0, t.window[t.strstart - 1])) && s(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return _t
                                } else t.match_available = 1, t.strstart++, t.lookahead--
                            }
                            return t.match_available && (i = T._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < et - 1 ? t.strstart : et - 1, e === O ? (s(t, !0), 0 === t.strm.avail_out ? ft : pt) : t.last_lit && (s(t, !1), 0 === t.strm.avail_out) ? _t : dt
                        }

                        function p(t, e) {
                            for (var n, i, o, r, a = t.window;;) {
                                if (t.lookahead <= nt) {
                                    if (_(t), t.lookahead <= nt && e === D) return _t;
                                    if (0 === t.lookahead) break
                                }
                                if (t.match_length = 0, t.lookahead >= et && t.strstart > 0 && ((i = a[o = t.strstart - 1]) === a[++o] && i === a[++o] && i === a[++o])) {
                                    r = t.strstart + nt;
                                    do {} while (i === a[++o] && i === a[++o] && i === a[++o] && i === a[++o] && i === a[++o] && i === a[++o] && i === a[++o] && i === a[++o] && o < r);
                                    t.match_length = nt - (r - o), t.match_length > t.lookahead && (t.match_length = t.lookahead)
                                }
                                if (t.match_length >= et ? (n = T._tr_tally(t, 1, t.match_length - et), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (n = T._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), n && (s(t, !1), 0 === t.strm.avail_out)) return _t
                            }
                            return t.insert = 0, e === O ? (s(t, !0), 0 === t.strm.avail_out ? ft : pt) : t.last_lit && (s(t, !1), 0 === t.strm.avail_out) ? _t : dt
                        }

                        function g(t, e) {
                            for (var n;;) {
                                if (0 === t.lookahead && (_(t), 0 === t.lookahead)) {
                                    if (e === D) return _t;
                                    break
                                }
                                if (t.match_length = 0, n = T._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, n && (s(t, !1), 0 === t.strm.avail_out)) return _t
                            }
                            return t.insert = 0, e === O ? (s(t, !0), 0 === t.strm.avail_out ? ft : pt) : t.last_lit && (s(t, !1), 0 === t.strm.avail_out) ? _t : dt
                        }

                        function S(t, e, n, i, o) {
                            this.good_length = t, this.max_lazy = e, this.nice_length = n, this.max_chain = i, this.func = o
                        }

                        function v(t) {
                            t.window_size = 2 * t.w_size, r(t.head), t.max_lazy_match = I[t.level].max_lazy, t.good_match = I[t.level].good_length, t.nice_match = I[t.level].nice_length, t.max_chain_length = I[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = et - 1, t.match_available = 0, t.ins_h = 0
                        }

                        function y() {
                            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = W, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new k.Buf16(2 * $), this.dyn_dtree = new k.Buf16(2 * (2 * Y + 1)), this.bl_tree = new k.Buf16(2 * (2 * J + 1)), r(this.dyn_ltree), r(this.dyn_dtree), r(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new k.Buf16(tt + 1), this.heap = new k.Buf16(2 * Z + 1), r(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new k.Buf16(2 * Z + 1), r(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
                        }

                        function m(t) {
                            var e;
                            return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = j, (e = t.state).pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? rt : ut, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = D, T._tr_init(e), L) : i(t, P)
                        }

                        function C(t) {
                            var e = m(t);
                            return e === L && v(t.state), e
                        }

                        function b(t, e, n, o, r, a) {
                            if (!t) return P;
                            var s = 1;
                            if (e === B && (e = 6), o < 0 ? (s = 0, o = -o) : o > 15 && (s = 2, o -= 16), r < 1 || r > X || n !== W || o < 8 || o > 15 || e < 0 || e > 9 || a < 0 || a > H) return i(t, P);
                            8 === o && (o = 9);
                            var c = new y;
                            return t.state = c, c.strm = t, c.wrap = s, c.gzhead = null, c.w_bits = o, c.w_size = 1 << c.w_bits, c.w_mask = c.w_size - 1, c.hash_bits = r + 7, c.hash_size = 1 << c.hash_bits, c.hash_mask = c.hash_size - 1, c.hash_shift = ~~((c.hash_bits + et - 1) / et), c.window = new k.Buf8(2 * c.w_size), c.head = new k.Buf16(c.hash_size), c.prev = new k.Buf16(c.w_size), c.lit_bufsize = 1 << r + 6, c.pending_buf_size = 4 * c.lit_bufsize, c.pending_buf = new k.Buf8(c.pending_buf_size), c.d_buf = 1 * c.lit_bufsize, c.l_buf = 3 * c.lit_bufsize, c.level = e, c.strategy = a, c.method = n, C(t)
                        }
                        var I, k = t("../utils/common"),
                            T = t("./trees"),
                            E = t("./adler32"),
                            w = t("./crc32"),
                            A = t("./messages"),
                            D = 0,
                            M = 1,
                            R = 3,
                            O = 4,
                            G = 5,
                            L = 0,
                            U = 1,
                            P = -2,
                            N = -3,
                            x = -5,
                            B = -1,
                            V = 1,
                            F = 2,
                            z = 3,
                            H = 4,
                            q = 0,
                            j = 2,
                            W = 8,
                            X = 9,
                            K = 15,
                            Q = 8,
                            Z = 286,
                            Y = 30,
                            J = 19,
                            $ = 2 * Z + 1,
                            tt = 15,
                            et = 3,
                            nt = 258,
                            it = nt + et + 1,
                            ot = 32,
                            rt = 42,
                            at = 69,
                            st = 73,
                            ct = 91,
                            lt = 103,
                            ut = 113,
                            ht = 666,
                            _t = 1,
                            dt = 2,
                            ft = 3,
                            pt = 4,
                            gt = 3;
                        I = [new S(0, 0, 0, 0, function(t, e) {
                            var n = 65535;
                            for (n > t.pending_buf_size - 5 && (n = t.pending_buf_size - 5);;) {
                                if (t.lookahead <= 1) {
                                    if (_(t), 0 === t.lookahead && e === D) return _t;
                                    if (0 === t.lookahead) break
                                }
                                t.strstart += t.lookahead, t.lookahead = 0;
                                var i = t.block_start + n;
                                if ((0 === t.strstart || t.strstart >= i) && (t.lookahead = t.strstart - i, t.strstart = i, s(t, !1), 0 === t.strm.avail_out)) return _t;
                                if (t.strstart - t.block_start >= t.w_size - it && (s(t, !1), 0 === t.strm.avail_out)) return _t
                            }
                            return t.insert = 0, e === O ? (s(t, !0), 0 === t.strm.avail_out ? ft : pt) : (t.strstart > t.block_start && (s(t, !1), t.strm.avail_out), _t)
                        }), new S(4, 4, 8, 4, d), new S(4, 5, 16, 8, d), new S(4, 6, 32, 32, d), new S(4, 4, 16, 16, f), new S(8, 16, 32, 32, f), new S(8, 16, 128, 128, f), new S(8, 32, 128, 256, f), new S(32, 128, 258, 1024, f), new S(32, 258, 258, 4096, f)], n.deflateInit = function(t, e) {
                            return b(t, e, W, K, Q, q)
                        }, n.deflateInit2 = b, n.deflateReset = C, n.deflateResetKeep = m, n.deflateSetHeader = function(t, e) {
                            return t && t.state ? 2 !== t.state.wrap ? P : (t.state.gzhead = e, L) : P
                        }, n.deflate = function(t, e) {
                            var n, s, u, h;
                            if (!t || !t.state || e > G || e < 0) return t ? i(t, P) : P;
                            if (s = t.state, !t.output || !t.input && 0 !== t.avail_in || s.status === ht && e !== O) return i(t, 0 === t.avail_out ? x : P);
                            if (s.strm = t, n = s.last_flush, s.last_flush = e, s.status === rt)
                                if (2 === s.wrap) t.adler = 0, c(s, 31), c(s, 139), c(s, 8), s.gzhead ? (c(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (s.gzhead.extra ? 4 : 0) + (s.gzhead.name ? 8 : 0) + (s.gzhead.comment ? 16 : 0)), c(s, 255 & s.gzhead.time), c(s, s.gzhead.time >> 8 & 255), c(s, s.gzhead.time >> 16 & 255), c(s, s.gzhead.time >> 24 & 255), c(s, 9 === s.level ? 2 : s.strategy >= F || s.level < 2 ? 4 : 0), c(s, 255 & s.gzhead.os), s.gzhead.extra && s.gzhead.extra.length && (c(s, 255 & s.gzhead.extra.length), c(s, s.gzhead.extra.length >> 8 & 255)), s.gzhead.hcrc && (t.adler = w(t.adler, s.pending_buf, s.pending, 0)), s.gzindex = 0, s.status = at) : (c(s, 0), c(s, 0), c(s, 0), c(s, 0), c(s, 0), c(s, 9 === s.level ? 2 : s.strategy >= F || s.level < 2 ? 4 : 0), c(s, gt), s.status = ut);
                                else {
                                    var _ = W + (s.w_bits - 8 << 4) << 8;
                                    _ |= (s.strategy >= F || s.level < 2 ? 0 : s.level < 6 ? 1 : 6 === s.level ? 2 : 3) << 6, 0 !== s.strstart && (_ |= ot), _ += 31 - _ % 31, s.status = ut, l(s, _), 0 !== s.strstart && (l(s, t.adler >>> 16), l(s, 65535 & t.adler)), t.adler = 1
                                } if (s.status === at)
                                if (s.gzhead.extra) {
                                    for (u = s.pending; s.gzindex < (65535 & s.gzhead.extra.length) && (s.pending !== s.pending_buf_size || (s.gzhead.hcrc && s.pending > u && (t.adler = w(t.adler, s.pending_buf, s.pending - u, u)), a(t), u = s.pending, s.pending !== s.pending_buf_size));) c(s, 255 & s.gzhead.extra[s.gzindex]), s.gzindex++;
                                    s.gzhead.hcrc && s.pending > u && (t.adler = w(t.adler, s.pending_buf, s.pending - u, u)), s.gzindex === s.gzhead.extra.length && (s.gzindex = 0, s.status = st)
                                } else s.status = st;
                            if (s.status === st)
                                if (s.gzhead.name) {
                                    u = s.pending;
                                    do {
                                        if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > u && (t.adler = w(t.adler, s.pending_buf, s.pending - u, u)), a(t), u = s.pending, s.pending === s.pending_buf_size)) {
                                            h = 1;
                                            break
                                        }
                                        h = s.gzindex < s.gzhead.name.length ? 255 & s.gzhead.name.charCodeAt(s.gzindex++) : 0, c(s, h)
                                    } while (0 !== h);
                                    s.gzhead.hcrc && s.pending > u && (t.adler = w(t.adler, s.pending_buf, s.pending - u, u)), 0 === h && (s.gzindex = 0, s.status = ct)
                                } else s.status = ct;
                            if (s.status === ct)
                                if (s.gzhead.comment) {
                                    u = s.pending;
                                    do {
                                        if (s.pending === s.pending_buf_size && (s.gzhead.hcrc && s.pending > u && (t.adler = w(t.adler, s.pending_buf, s.pending - u, u)), a(t), u = s.pending, s.pending === s.pending_buf_size)) {
                                            h = 1;
                                            break
                                        }
                                        h = s.gzindex < s.gzhead.comment.length ? 255 & s.gzhead.comment.charCodeAt(s.gzindex++) : 0, c(s, h)
                                    } while (0 !== h);
                                    s.gzhead.hcrc && s.pending > u && (t.adler = w(t.adler, s.pending_buf, s.pending - u, u)), 0 === h && (s.status = lt)
                                } else s.status = lt;
                            if (s.status === lt && (s.gzhead.hcrc ? (s.pending + 2 > s.pending_buf_size && a(t), s.pending + 2 <= s.pending_buf_size && (c(s, 255 & t.adler), c(s, t.adler >> 8 & 255), t.adler = 0, s.status = ut)) : s.status = ut), 0 !== s.pending) {
                                if (a(t), 0 === t.avail_out) return s.last_flush = -1, L
                            } else if (0 === t.avail_in && o(e) <= o(n) && e !== O) return i(t, x);
                            if (s.status === ht && 0 !== t.avail_in) return i(t, x);
                            if (0 !== t.avail_in || 0 !== s.lookahead || e !== D && s.status !== ht) {
                                var d = s.strategy === F ? g(s, e) : s.strategy === z ? p(s, e) : I[s.level].func(s, e);
                                if (d !== ft && d !== pt || (s.status = ht), d === _t || d === ft) return 0 === t.avail_out && (s.last_flush = -1), L;
                                if (d === dt && (e === M ? T._tr_align(s) : e !== G && (T._tr_stored_block(s, 0, 0, !1), e === R && (r(s.head), 0 === s.lookahead && (s.strstart = 0, s.block_start = 0, s.insert = 0))), a(t), 0 === t.avail_out)) return s.last_flush = -1, L
                            }
                            return e !== O ? L : s.wrap <= 0 ? U : (2 === s.wrap ? (c(s, 255 & t.adler), c(s, t.adler >> 8 & 255), c(s, t.adler >> 16 & 255), c(s, t.adler >> 24 & 255), c(s, 255 & t.total_in), c(s, t.total_in >> 8 & 255), c(s, t.total_in >> 16 & 255), c(s, t.total_in >> 24 & 255)) : (l(s, t.adler >>> 16), l(s, 65535 & t.adler)), a(t), s.wrap > 0 && (s.wrap = -s.wrap), 0 !== s.pending ? L : U)
                        }, n.deflateEnd = function(t) {
                            var e;
                            return t && t.state ? (e = t.state.status) !== rt && e !== at && e !== st && e !== ct && e !== lt && e !== ut && e !== ht ? i(t, P) : (t.state = null, e === ut ? i(t, N) : L) : P
                        }, n.deflateSetDictionary = function(t, e) {
                            var n, i, o, a, s, c, l, u, h = e.length;
                            if (!t || !t.state) return P;
                            if (2 === (a = (n = t.state).wrap) || 1 === a && n.status !== rt || n.lookahead) return P;
                            for (1 === a && (t.adler = E(t.adler, e, h, 0)), n.wrap = 0, h >= n.w_size && (0 === a && (r(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), u = new k.Buf8(n.w_size), k.arraySet(u, e, h - n.w_size, n.w_size, 0), e = u, h = n.w_size), s = t.avail_in, c = t.next_in, l = t.input, t.avail_in = h, t.next_in = 0, t.input = e, _(n); n.lookahead >= et;) {
                                i = n.strstart, o = n.lookahead - (et - 1);
                                do {
                                    n.ins_h = (n.ins_h << n.hash_shift ^ n.window[i + et - 1]) & n.hash_mask, n.prev[i & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = i, i++
                                } while (--o);
                                n.strstart = i, n.lookahead = et - 1, _(n)
                            }
                            return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = et - 1, n.match_available = 0, t.next_in = c, t.input = l, t.avail_in = s, n.wrap = a, L
                        }, n.deflateInfo = "pako deflate (from Nodeca project)"
                    }, {
                        "../utils/common": 3,
                        "./adler32": 5,
                        "./crc32": 7,
                        "./messages": 13,
                        "./trees": 14
                    }],
                    9: [function(t, e, n) {
                        e.exports = function() {
                            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
                        }
                    }, {}],
                    10: [function(t, e, n) {
                        e.exports = function(t, e) {
                            var n, i, o, r, a, s, c, l, u, h, _, d, f, p, g, S, v, y, m, C, b, I, k, T, E;
                            n = t.state, i = t.next_in, T = t.input, o = i + (t.avail_in - 5), r = t.next_out, E = t.output, a = r - (e - t.avail_out), s = r + (t.avail_out - 257), c = n.dmax, l = n.wsize, u = n.whave, h = n.wnext, _ = n.window, d = n.hold, f = n.bits, p = n.lencode, g = n.distcode, S = (1 << n.lenbits) - 1, v = (1 << n.distbits) - 1;
                            t: do {
                                f < 15 && (d += T[i++] << f, f += 8, d += T[i++] << f, f += 8), y = p[d & S];
                                e: for (;;) {
                                    if (d >>>= m = y >>> 24, f -= m, 0 === (m = y >>> 16 & 255)) E[r++] = 65535 & y;
                                    else {
                                        if (!(16 & m)) {
                                            if (0 == (64 & m)) {
                                                y = p[(65535 & y) + (d & (1 << m) - 1)];
                                                continue e
                                            }
                                            if (32 & m) {
                                                n.mode = 12;
                                                break t
                                            }
                                            t.msg = "invalid literal/length code", n.mode = 30;
                                            break t
                                        }
                                        C = 65535 & y, (m &= 15) && (f < m && (d += T[i++] << f, f += 8), C += d & (1 << m) - 1, d >>>= m, f -= m), f < 15 && (d += T[i++] << f, f += 8, d += T[i++] << f, f += 8), y = g[d & v];
                                        n: for (;;) {
                                            if (d >>>= m = y >>> 24, f -= m, !(16 & (m = y >>> 16 & 255))) {
                                                if (0 == (64 & m)) {
                                                    y = g[(65535 & y) + (d & (1 << m) - 1)];
                                                    continue n
                                                }
                                                t.msg = "invalid distance code", n.mode = 30;
                                                break t
                                            }
                                            if (b = 65535 & y, f < (m &= 15) && (d += T[i++] << f, (f += 8) < m && (d += T[i++] << f, f += 8)), (b += d & (1 << m) - 1) > c) {
                                                t.msg = "invalid distance too far back", n.mode = 30;
                                                break t
                                            }
                                            if (d >>>= m, f -= m, b > (m = r - a)) {
                                                if ((m = b - m) > u && n.sane) {
                                                    t.msg = "invalid distance too far back", n.mode = 30;
                                                    break t
                                                }
                                                if (I = 0, k = _, 0 === h) {
                                                    if (I += l - m, m < C) {
                                                        C -= m;
                                                        do {
                                                            E[r++] = _[I++]
                                                        } while (--m);
                                                        I = r - b, k = E
                                                    }
                                                } else if (h < m) {
                                                    if (I += l + h - m, (m -= h) < C) {
                                                        C -= m;
                                                        do {
                                                            E[r++] = _[I++]
                                                        } while (--m);
                                                        if (I = 0, h < C) {
                                                            C -= m = h;
                                                            do {
                                                                E[r++] = _[I++]
                                                            } while (--m);
                                                            I = r - b, k = E
                                                        }
                                                    }
                                                } else if (I += h - m, m < C) {
                                                    C -= m;
                                                    do {
                                                        E[r++] = _[I++]
                                                    } while (--m);
                                                    I = r - b, k = E
                                                }
                                                for (; C > 2;) E[r++] = k[I++], E[r++] = k[I++], E[r++] = k[I++], C -= 3;
                                                C && (E[r++] = k[I++], C > 1 && (E[r++] = k[I++]))
                                            } else {
                                                I = r - b;
                                                do {
                                                    E[r++] = E[I++], E[r++] = E[I++], E[r++] = E[I++], C -= 3
                                                } while (C > 2);
                                                C && (E[r++] = E[I++], C > 1 && (E[r++] = E[I++]))
                                            }
                                            break
                                        }
                                    }
                                    break
                                }
                            } while (i < o && r < s);
                            i -= C = f >> 3, d &= (1 << (f -= C << 3)) - 1, t.next_in = i, t.next_out = r, t.avail_in = i < o ? o - i + 5 : 5 - (i - o), t.avail_out = r < s ? s - r + 257 : 257 - (r - s), n.hold = d, n.bits = f
                        }
                    }, {}],
                    11: [function(t, e, n) {
                        function i(t) {
                            return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24)
                        }

                        function o() {
                            this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new d.Buf16(320), this.work = new d.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
                        }

                        function r(t) {
                            var e;
                            return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = O, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new d.Buf32(ut), e.distcode = e.distdyn = new d.Buf32(ht), e.sane = 1, e.back = -1, k) : w
                        }

                        function a(t) {
                            var e;
                            return t && t.state ? ((e = t.state).wsize = 0, e.whave = 0, e.wnext = 0, r(t)) : w
                        }

                        function s(t, e) {
                            var n, i;
                            return t && t.state ? (i = t.state, e < 0 ? (n = 0, e = -e) : (n = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? w : (null !== i.window && i.wbits !== e && (i.window = null), i.wrap = n, i.wbits = e, a(t))) : w
                        }

                        function c(t, e) {
                            var n, i;
                            return t ? (i = new o, t.state = i, i.window = null, (n = s(t, e)) !== k && (t.state = null), n) : w
                        }

                        function l(t) {
                            if (dt) {
                                var e;
                                for (h = new d.Buf32(512), _ = new d.Buf32(32), e = 0; e < 144;) t.lens[e++] = 8;
                                for (; e < 256;) t.lens[e++] = 9;
                                for (; e < 280;) t.lens[e++] = 7;
                                for (; e < 288;) t.lens[e++] = 8;
                                for (S(y, t.lens, 0, 288, h, 0, t.work, {
                                        bits: 9
                                    }), e = 0; e < 32;) t.lens[e++] = 5;
                                S(m, t.lens, 0, 32, _, 0, t.work, {
                                    bits: 5
                                }), dt = !1
                            }
                            t.lencode = h, t.lenbits = 9, t.distcode = _, t.distbits = 5
                        }

                        function u(t, e, n, i) {
                            var o, r = t.state;
                            return null === r.window && (r.wsize = 1 << r.wbits, r.wnext = 0, r.whave = 0, r.window = new d.Buf8(r.wsize)), i >= r.wsize ? (d.arraySet(r.window, e, n - r.wsize, r.wsize, 0), r.wnext = 0, r.whave = r.wsize) : ((o = r.wsize - r.wnext) > i && (o = i), d.arraySet(r.window, e, n - i, o, r.wnext), (i -= o) ? (d.arraySet(r.window, e, n - i, i, 0), r.wnext = i, r.whave = r.wsize) : (r.wnext += o, r.wnext === r.wsize && (r.wnext = 0), r.whave < r.wsize && (r.whave += o))), 0
                        }
                        var h, _, d = t("../utils/common"),
                            f = t("./adler32"),
                            p = t("./crc32"),
                            g = t("./inffast"),
                            S = t("./inftrees"),
                            v = 0,
                            y = 1,
                            m = 2,
                            C = 4,
                            b = 5,
                            I = 6,
                            k = 0,
                            T = 1,
                            E = 2,
                            w = -2,
                            A = -3,
                            D = -4,
                            M = -5,
                            R = 8,
                            O = 1,
                            G = 2,
                            L = 3,
                            U = 4,
                            P = 5,
                            N = 6,
                            x = 7,
                            B = 8,
                            V = 9,
                            F = 10,
                            z = 11,
                            H = 12,
                            q = 13,
                            j = 14,
                            W = 15,
                            X = 16,
                            K = 17,
                            Q = 18,
                            Z = 19,
                            Y = 20,
                            J = 21,
                            $ = 22,
                            tt = 23,
                            et = 24,
                            nt = 25,
                            it = 26,
                            ot = 27,
                            rt = 28,
                            at = 29,
                            st = 30,
                            ct = 31,
                            lt = 32,
                            ut = 852,
                            ht = 592,
                            _t = 15,
                            dt = !0;
                        n.inflateReset = a, n.inflateReset2 = s, n.inflateResetKeep = r, n.inflateInit = function(t) {
                            return c(t, _t)
                        }, n.inflateInit2 = c, n.inflate = function(t, e) {
                            var n, o, r, a, s, c, h, _, ut, ht, _t, dt, ft, pt, gt, St, vt, yt, mt, Ct, bt, It, kt, Tt, Et = 0,
                                wt = new d.Buf8(4),
                                At = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                            if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return w;
                            (n = t.state).mode === H && (n.mode = q), s = t.next_out, r = t.output, h = t.avail_out, a = t.next_in, o = t.input, c = t.avail_in, _ = n.hold, ut = n.bits, ht = c, _t = h, It = k;
                            t: for (;;) switch (n.mode) {
                                case O:
                                    if (0 === n.wrap) {
                                        n.mode = q;
                                        break
                                    }
                                    for (; ut < 16;) {
                                        if (0 === c) break t;
                                        c--, _ += o[a++] << ut, ut += 8
                                    }
                                    if (2 & n.wrap && 35615 === _) {
                                        n.check = 0, wt[0] = 255 & _, wt[1] = _ >>> 8 & 255, n.check = p(n.check, wt, 2, 0), _ = 0, ut = 0, n.mode = G;
                                        break
                                    }
                                    if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & _) << 8) + (_ >> 8)) % 31) {
                                        t.msg = "incorrect header check", n.mode = st;
                                        break
                                    }
                                    if ((15 & _) !== R) {
                                        t.msg = "unknown compression method", n.mode = st;
                                        break
                                    }
                                    if (ut -= 4, bt = 8 + (15 & (_ >>>= 4)), 0 === n.wbits) n.wbits = bt;
                                    else if (bt > n.wbits) {
                                        t.msg = "invalid window size", n.mode = st;
                                        break
                                    }
                                    n.dmax = 1 << bt, t.adler = n.check = 1, n.mode = 512 & _ ? F : H, _ = 0, ut = 0;
                                    break;
                                case G:
                                    for (; ut < 16;) {
                                        if (0 === c) break t;
                                        c--, _ += o[a++] << ut, ut += 8
                                    }
                                    if (n.flags = _, (255 & n.flags) !== R) {
                                        t.msg = "unknown compression method", n.mode = st;
                                        break
                                    }
                                    if (57344 & n.flags) {
                                        t.msg = "unknown header flags set", n.mode = st;
                                        break
                                    }
                                    n.head && (n.head.text = _ >> 8 & 1), 512 & n.flags && (wt[0] = 255 & _, wt[1] = _ >>> 8 & 255, n.check = p(n.check, wt, 2, 0)), _ = 0, ut = 0, n.mode = L;
                                case L:
                                    for (; ut < 32;) {
                                        if (0 === c) break t;
                                        c--, _ += o[a++] << ut, ut += 8
                                    }
                                    n.head && (n.head.time = _), 512 & n.flags && (wt[0] = 255 & _, wt[1] = _ >>> 8 & 255, wt[2] = _ >>> 16 & 255, wt[3] = _ >>> 24 & 255, n.check = p(n.check, wt, 4, 0)), _ = 0, ut = 0, n.mode = U;
                                case U:
                                    for (; ut < 16;) {
                                        if (0 === c) break t;
                                        c--, _ += o[a++] << ut, ut += 8
                                    }
                                    n.head && (n.head.xflags = 255 & _, n.head.os = _ >> 8), 512 & n.flags && (wt[0] = 255 & _, wt[1] = _ >>> 8 & 255, n.check = p(n.check, wt, 2, 0)), _ = 0, ut = 0, n.mode = P;
                                case P:
                                    if (1024 & n.flags) {
                                        for (; ut < 16;) {
                                            if (0 === c) break t;
                                            c--, _ += o[a++] << ut, ut += 8
                                        }
                                        n.length = _, n.head && (n.head.extra_len = _), 512 & n.flags && (wt[0] = 255 & _, wt[1] = _ >>> 8 & 255, n.check = p(n.check, wt, 2, 0)), _ = 0, ut = 0
                                    } else n.head && (n.head.extra = null);
                                    n.mode = N;
                                case N:
                                    if (1024 & n.flags && ((dt = n.length) > c && (dt = c), dt && (n.head && (bt = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Array(n.head.extra_len)), d.arraySet(n.head.extra, o, a, dt, bt)), 512 & n.flags && (n.check = p(n.check, o, dt, a)), c -= dt, a += dt, n.length -= dt), n.length)) break t;
                                    n.length = 0, n.mode = x;
                                case x:
                                    if (2048 & n.flags) {
                                        if (0 === c) break t;
                                        dt = 0;
                                        do {
                                            bt = o[a + dt++], n.head && bt && n.length < 65536 && (n.head.name += String.fromCharCode(bt))
                                        } while (bt && dt < c);
                                        if (512 & n.flags && (n.check = p(n.check, o, dt, a)), c -= dt, a += dt, bt) break t
                                    } else n.head && (n.head.name = null);
                                    n.length = 0, n.mode = B;
                                case B:
                                    if (4096 & n.flags) {
                                        if (0 === c) break t;
                                        dt = 0;
                                        do {
                                            bt = o[a + dt++], n.head && bt && n.length < 65536 && (n.head.comment += String.fromCharCode(bt))
                                        } while (bt && dt < c);
                                        if (512 & n.flags && (n.check = p(n.check, o, dt, a)), c -= dt, a += dt, bt) break t
                                    } else n.head && (n.head.comment = null);
                                    n.mode = V;
                                case V:
                                    if (512 & n.flags) {
                                        for (; ut < 16;) {
                                            if (0 === c) break t;
                                            c--, _ += o[a++] << ut, ut += 8
                                        }
                                        if (_ !== (65535 & n.check)) {
                                            t.msg = "header crc mismatch", n.mode = st;
                                            break
                                        }
                                        _ = 0, ut = 0
                                    }
                                    n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), t.adler = n.check = 0, n.mode = H;
                                    break;
                                case F:
                                    for (; ut < 32;) {
                                        if (0 === c) break t;
                                        c--, _ += o[a++] << ut, ut += 8
                                    }
                                    t.adler = n.check = i(_), _ = 0, ut = 0, n.mode = z;
                                case z:
                                    if (0 === n.havedict) return t.next_out = s, t.avail_out = h, t.next_in = a, t.avail_in = c, n.hold = _, n.bits = ut, E;
                                    t.adler = n.check = 1, n.mode = H;
                                case H:
                                    if (e === b || e === I) break t;
                                case q:
                                    if (n.last) {
                                        _ >>>= 7 & ut, ut -= 7 & ut, n.mode = ot;
                                        break
                                    }
                                    for (; ut < 3;) {
                                        if (0 === c) break t;
                                        c--, _ += o[a++] << ut, ut += 8
                                    }
                                    switch (n.last = 1 & _, ut -= 1, 3 & (_ >>>= 1)) {
                                        case 0:
                                            n.mode = j;
                                            break;
                                        case 1:
                                            if (l(n), n.mode = Y, e === I) {
                                                _ >>>= 2, ut -= 2;
                                                break t
                                            }
                                            break;
                                        case 2:
                                            n.mode = K;
                                            break;
                                        case 3:
                                            t.msg = "invalid block type", n.mode = st
                                    }
                                    _ >>>= 2, ut -= 2;
                                    break;
                                case j:
                                    for (_ >>>= 7 & ut, ut -= 7 & ut; ut < 32;) {
                                        if (0 === c) break t;
                                        c--, _ += o[a++] << ut, ut += 8
                                    }
                                    if ((65535 & _) != (_ >>> 16 ^ 65535)) {
                                        t.msg = "invalid stored block lengths", n.mode = st;
                                        break
                                    }
                                    if (n.length = 65535 & _, _ = 0, ut = 0, n.mode = W, e === I) break t;
                                case W:
                                    n.mode = X;
                                case X:
                                    if (dt = n.length) {
                                        if (dt > c && (dt = c), dt > h && (dt = h), 0 === dt) break t;
                                        d.arraySet(r, o, a, dt, s), c -= dt, a += dt, h -= dt, s += dt, n.length -= dt;
                                        break
                                    }
                                    n.mode = H;
                                    break;
                                case K:
                                    for (; ut < 14;) {
                                        if (0 === c) break t;
                                        c--, _ += o[a++] << ut, ut += 8
                                    }
                                    if (n.nlen = 257 + (31 & _), _ >>>= 5, ut -= 5, n.ndist = 1 + (31 & _), _ >>>= 5, ut -= 5, n.ncode = 4 + (15 & _), _ >>>= 4, ut -= 4, n.nlen > 286 || n.ndist > 30) {
                                        t.msg = "too many length or distance symbols", n.mode = st;
                                        break
                                    }
                                    n.have = 0, n.mode = Q;
                                case Q:
                                    for (; n.have < n.ncode;) {
                                        for (; ut < 3;) {
                                            if (0 === c) break t;
                                            c--, _ += o[a++] << ut, ut += 8
                                        }
                                        n.lens[At[n.have++]] = 7 & _, _ >>>= 3, ut -= 3
                                    }
                                    for (; n.have < 19;) n.lens[At[n.have++]] = 0;
                                    if (n.lencode = n.lendyn, n.lenbits = 7, kt = {
                                            bits: n.lenbits
                                        }, It = S(v, n.lens, 0, 19, n.lencode, 0, n.work, kt), n.lenbits = kt.bits, It) {
                                        t.msg = "invalid code lengths set", n.mode = st;
                                        break
                                    }
                                    n.have = 0, n.mode = Z;
                                case Z:
                                    for (; n.have < n.nlen + n.ndist;) {
                                        for (; St = (Et = n.lencode[_ & (1 << n.lenbits) - 1]) >>> 16 & 255, vt = 65535 & Et, !((gt = Et >>> 24) <= ut);) {
                                            if (0 === c) break t;
                                            c--, _ += o[a++] << ut, ut += 8
                                        }
                                        if (vt < 16) _ >>>= gt, ut -= gt, n.lens[n.have++] = vt;
                                        else {
                                            if (16 === vt) {
                                                for (Tt = gt + 2; ut < Tt;) {
                                                    if (0 === c) break t;
                                                    c--, _ += o[a++] << ut, ut += 8
                                                }
                                                if (_ >>>= gt, ut -= gt, 0 === n.have) {
                                                    t.msg = "invalid bit length repeat", n.mode = st;
                                                    break
                                                }
                                                bt = n.lens[n.have - 1], dt = 3 + (3 & _), _ >>>= 2, ut -= 2
                                            } else if (17 === vt) {
                                                for (Tt = gt + 3; ut < Tt;) {
                                                    if (0 === c) break t;
                                                    c--, _ += o[a++] << ut, ut += 8
                                                }
                                                ut -= gt, bt = 0, dt = 3 + (7 & (_ >>>= gt)), _ >>>= 3, ut -= 3
                                            } else {
                                                for (Tt = gt + 7; ut < Tt;) {
                                                    if (0 === c) break t;
                                                    c--, _ += o[a++] << ut, ut += 8
                                                }
                                                ut -= gt, bt = 0, dt = 11 + (127 & (_ >>>= gt)), _ >>>= 7, ut -= 7
                                            }
                                            if (n.have + dt > n.nlen + n.ndist) {
                                                t.msg = "invalid bit length repeat", n.mode = st;
                                                break
                                            }
                                            for (; dt--;) n.lens[n.have++] = bt
                                        }
                                    }
                                    if (n.mode === st) break;
                                    if (0 === n.lens[256]) {
                                        t.msg = "invalid code -- missing end-of-block", n.mode = st;
                                        break
                                    }
                                    if (n.lenbits = 9, kt = {
                                            bits: n.lenbits
                                        }, It = S(y, n.lens, 0, n.nlen, n.lencode, 0, n.work, kt), n.lenbits = kt.bits, It) {
                                        t.msg = "invalid literal/lengths set", n.mode = st;
                                        break
                                    }
                                    if (n.distbits = 6, n.distcode = n.distdyn, kt = {
                                            bits: n.distbits
                                        }, It = S(m, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, kt), n.distbits = kt.bits, It) {
                                        t.msg = "invalid distances set", n.mode = st;
                                        break
                                    }
                                    if (n.mode = Y, e === I) break t;
                                case Y:
                                    n.mode = J;
                                case J:
                                    if (c >= 6 && h >= 258) {
                                        t.next_out = s, t.avail_out = h, t.next_in = a, t.avail_in = c, n.hold = _, n.bits = ut, g(t, _t), s = t.next_out, r = t.output, h = t.avail_out, a = t.next_in, o = t.input, c = t.avail_in, _ = n.hold, ut = n.bits, n.mode === H && (n.back = -1);
                                        break
                                    }
                                    for (n.back = 0; St = (Et = n.lencode[_ & (1 << n.lenbits) - 1]) >>> 16 & 255, vt = 65535 & Et, !((gt = Et >>> 24) <= ut);) {
                                        if (0 === c) break t;
                                        c--, _ += o[a++] << ut, ut += 8
                                    }
                                    if (St && 0 == (240 & St)) {
                                        for (yt = gt, mt = St, Ct = vt; St = (Et = n.lencode[Ct + ((_ & (1 << yt + mt) - 1) >> yt)]) >>> 16 & 255, vt = 65535 & Et, !(yt + (gt = Et >>> 24) <= ut);) {
                                            if (0 === c) break t;
                                            c--, _ += o[a++] << ut, ut += 8
                                        }
                                        _ >>>= yt, ut -= yt, n.back += yt
                                    }
                                    if (_ >>>= gt, ut -= gt, n.back += gt, n.length = vt, 0 === St) {
                                        n.mode = it;
                                        break
                                    }
                                    if (32 & St) {
                                        n.back = -1, n.mode = H;
                                        break
                                    }
                                    if (64 & St) {
                                        t.msg = "invalid literal/length code", n.mode = st;
                                        break
                                    }
                                    n.extra = 15 & St, n.mode = $;
                                case $:
                                    if (n.extra) {
                                        for (Tt = n.extra; ut < Tt;) {
                                            if (0 === c) break t;
                                            c--, _ += o[a++] << ut, ut += 8
                                        }
                                        n.length += _ & (1 << n.extra) - 1, _ >>>= n.extra, ut -= n.extra, n.back += n.extra
                                    }
                                    n.was = n.length, n.mode = tt;
                                case tt:
                                    for (; St = (Et = n.distcode[_ & (1 << n.distbits) - 1]) >>> 16 & 255, vt = 65535 & Et, !((gt = Et >>> 24) <= ut);) {
                                        if (0 === c) break t;
                                        c--, _ += o[a++] << ut, ut += 8
                                    }
                                    if (0 == (240 & St)) {
                                        for (yt = gt, mt = St, Ct = vt; St = (Et = n.distcode[Ct + ((_ & (1 << yt + mt) - 1) >> yt)]) >>> 16 & 255, vt = 65535 & Et, !(yt + (gt = Et >>> 24) <= ut);) {
                                            if (0 === c) break t;
                                            c--, _ += o[a++] << ut, ut += 8
                                        }
                                        _ >>>= yt, ut -= yt, n.back += yt
                                    }
                                    if (_ >>>= gt, ut -= gt, n.back += gt, 64 & St) {
                                        t.msg = "invalid distance code", n.mode = st;
                                        break
                                    }
                                    n.offset = vt, n.extra = 15 & St, n.mode = et;
                                case et:
                                    if (n.extra) {
                                        for (Tt = n.extra; ut < Tt;) {
                                            if (0 === c) break t;
                                            c--, _ += o[a++] << ut, ut += 8
                                        }
                                        n.offset += _ & (1 << n.extra) - 1, _ >>>= n.extra, ut -= n.extra, n.back += n.extra
                                    }
                                    if (n.offset > n.dmax) {
                                        t.msg = "invalid distance too far back", n.mode = st;
                                        break
                                    }
                                    n.mode = nt;
                                case nt:
                                    if (0 === h) break t;
                                    if (dt = _t - h, n.offset > dt) {
                                        if ((dt = n.offset - dt) > n.whave && n.sane) {
                                            t.msg = "invalid distance too far back", n.mode = st;
                                            break
                                        }
                                        dt > n.wnext ? (dt -= n.wnext, ft = n.wsize - dt) : ft = n.wnext - dt, dt > n.length && (dt = n.length), pt = n.window
                                    } else pt = r, ft = s - n.offset, dt = n.length;
                                    dt > h && (dt = h), h -= dt, n.length -= dt;
                                    do {
                                        r[s++] = pt[ft++]
                                    } while (--dt);
                                    0 === n.length && (n.mode = J);
                                    break;
                                case it:
                                    if (0 === h) break t;
                                    r[s++] = n.length, h--, n.mode = J;
                                    break;
                                case ot:
                                    if (n.wrap) {
                                        for (; ut < 32;) {
                                            if (0 === c) break t;
                                            c--, _ |= o[a++] << ut, ut += 8
                                        }
                                        if (_t -= h, t.total_out += _t, n.total += _t, _t && (t.adler = n.check = n.flags ? p(n.check, r, _t, s - _t) : f(n.check, r, _t, s - _t)), _t = h, (n.flags ? _ : i(_)) !== n.check) {
                                            t.msg = "incorrect data check", n.mode = st;
                                            break
                                        }
                                        _ = 0, ut = 0
                                    }
                                    n.mode = rt;
                                case rt:
                                    if (n.wrap && n.flags) {
                                        for (; ut < 32;) {
                                            if (0 === c) break t;
                                            c--, _ += o[a++] << ut, ut += 8
                                        }
                                        if (_ !== (4294967295 & n.total)) {
                                            t.msg = "incorrect length check", n.mode = st;
                                            break
                                        }
                                        _ = 0, ut = 0
                                    }
                                    n.mode = at;
                                case at:
                                    It = T;
                                    break t;
                                case st:
                                    It = A;
                                    break t;
                                case ct:
                                    return D;
                                case lt:
                                default:
                                    return w
                            }
                            return t.next_out = s, t.avail_out = h, t.next_in = a, t.avail_in = c, n.hold = _, n.bits = ut, (n.wsize || _t !== t.avail_out && n.mode < st && (n.mode < ot || e !== C)) && u(t, t.output, t.next_out, _t - t.avail_out) ? (n.mode = ct, D) : (ht -= t.avail_in, _t -= t.avail_out, t.total_in += ht, t.total_out += _t, n.total += _t, n.wrap && _t && (t.adler = n.check = n.flags ? p(n.check, r, _t, t.next_out - _t) : f(n.check, r, _t, t.next_out - _t)), t.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === H ? 128 : 0) + (n.mode === Y || n.mode === W ? 256 : 0), (0 === ht && 0 === _t || e === C) && It === k && (It = M), It)
                        }, n.inflateEnd = function(t) {
                            if (!t || !t.state) return w;
                            var e = t.state;
                            return e.window && (e.window = null), t.state = null, k
                        }, n.inflateGetHeader = function(t, e) {
                            var n;
                            return t && t.state ? 0 == (2 & (n = t.state).wrap) ? w : (n.head = e, e.done = !1, k) : w
                        }, n.inflateSetDictionary = function(t, e) {
                            var n, i = e.length;
                            return t && t.state ? 0 !== (n = t.state).wrap && n.mode !== z ? w : n.mode === z && f(1, e, i, 0) !== n.check ? A : u(t, e, i, i) ? (n.mode = ct, D) : (n.havedict = 1, k) : w
                        }, n.inflateInfo = "pako inflate (from Nodeca project)"
                    }, {
                        "../utils/common": 3,
                        "./adler32": 5,
                        "./crc32": 7,
                        "./inffast": 10,
                        "./inftrees": 12
                    }],
                    12: [function(t, e, n) {
                        var i = t("../utils/common"),
                            o = 15,
                            r = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                            a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                            s = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                            c = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
                        e.exports = function(t, e, n, l, u, h, _, d) {
                            var f, p, g, S, v, y, m, C, b, I = d.bits,
                                k = 0,
                                T = 0,
                                E = 0,
                                w = 0,
                                A = 0,
                                D = 0,
                                M = 0,
                                R = 0,
                                O = 0,
                                G = 0,
                                L = null,
                                U = 0,
                                P = new i.Buf16(16),
                                N = new i.Buf16(16),
                                x = null,
                                B = 0;
                            for (k = 0; k <= o; k++) P[k] = 0;
                            for (T = 0; T < l; T++) P[e[n + T]]++;
                            for (A = I, w = o; w >= 1 && 0 === P[w]; w--);
                            if (A > w && (A = w), 0 === w) return u[h++] = 20971520, u[h++] = 20971520, d.bits = 1, 0;
                            for (E = 1; E < w && 0 === P[E]; E++);
                            for (A < E && (A = E), R = 1, k = 1; k <= o; k++)
                                if (R <<= 1, (R -= P[k]) < 0) return -1;
                            if (R > 0 && (0 === t || 1 !== w)) return -1;
                            for (N[1] = 0, k = 1; k < o; k++) N[k + 1] = N[k] + P[k];
                            for (T = 0; T < l; T++) 0 !== e[n + T] && (_[N[e[n + T]]++] = T);
                            if (0 === t ? (L = x = _, y = 19) : 1 === t ? (L = r, U -= 257, x = a, B -= 257, y = 256) : (L = s, x = c, y = -1), G = 0, T = 0, k = E, v = h, D = A, M = 0, g = -1, S = (O = 1 << A) - 1, 1 === t && O > 852 || 2 === t && O > 592) return 1;
                            for (;;) {
                                0,
                                m = k - M,
                                _[T] < y ? (C = 0, b = _[T]) : _[T] > y ? (C = x[B + _[T]], b = L[U + _[T]]) : (C = 96, b = 0),
                                f = 1 << k - M,
                                E = p = 1 << D;do {
                                    u[v + (G >> M) + (p -= f)] = m << 24 | C << 16 | b | 0
                                } while (0 !== p);
                                for (f = 1 << k - 1; G & f;) f >>= 1;
                                if (0 !== f ? (G &= f - 1, G += f) : G = 0, T++, 0 == --P[k]) {
                                    if (k === w) break;
                                    k = e[n + _[T]]
                                }
                                if (k > A && (G & S) !== g) {
                                    for (0 === M && (M = A), v += E, R = 1 << (D = k - M); D + M < w && !((R -= P[D + M]) <= 0);) D++, R <<= 1;
                                    if (O += 1 << D, 1 === t && O > 852 || 2 === t && O > 592) return 1;
                                    u[g = G & S] = A << 24 | D << 16 | v - h | 0
                                }
                            }
                            return 0 !== G && (u[v + G] = k - M << 24 | 64 << 16 | 0), d.bits = A, 0
                        }
                    }, {
                        "../utils/common": 3
                    }],
                    13: [function(t, e, n) {
                        e.exports = {
                            2: "need dictionary",
                            1: "stream end",
                            0: "",
                            "-1": "file error",
                            "-2": "stream error",
                            "-3": "data error",
                            "-4": "insufficient memory",
                            "-5": "buffer error",
                            "-6": "incompatible version"
                        }
                    }, {}],
                    14: [function(t, e, n) {
                        function i(t) {
                            for (var e = t.length; --e >= 0;) t[e] = 0
                        }

                        function o(t, e, n, i, o) {
                            this.static_tree = t, this.extra_bits = e, this.extra_base = n, this.elems = i, this.max_length = o, this.has_stree = t && t.length
                        }

                        function r(t, e) {
                            this.dyn_tree = t, this.max_code = 0, this.stat_desc = e
                        }

                        function a(t) {
                            return t < 256 ? et[t] : et[256 + (t >>> 7)]
                        }

                        function s(t, e) {
                            t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255
                        }

                        function c(t, e, n) {
                            t.bi_valid > H - n ? (t.bi_buf |= e << t.bi_valid & 65535, s(t, t.bi_buf), t.bi_buf = e >> H - t.bi_valid, t.bi_valid += n - H) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += n)
                        }

                        function l(t, e, n) {
                            c(t, n[2 * e], n[2 * e + 1])
                        }

                        function u(t, e) {
                            var n = 0;
                            do {
                                n |= 1 & t, t >>>= 1, n <<= 1
                            } while (--e > 0);
                            return n >>> 1
                        }

                        function h(t) {
                            16 === t.bi_valid ? (s(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
                        }

                        function _(t, e) {
                            var n, i, o, r, a, s, c = e.dyn_tree,
                                l = e.max_code,
                                u = e.stat_desc.static_tree,
                                h = e.stat_desc.has_stree,
                                _ = e.stat_desc.extra_bits,
                                d = e.stat_desc.extra_base,
                                f = e.stat_desc.max_length,
                                p = 0;
                            for (r = 0; r <= z; r++) t.bl_count[r] = 0;
                            for (c[2 * t.heap[t.heap_max] + 1] = 0, n = t.heap_max + 1; n < F; n++)(r = c[2 * c[2 * (i = t.heap[n]) + 1] + 1] + 1) > f && (r = f, p++), c[2 * i + 1] = r, i > l || (t.bl_count[r]++, a = 0, i >= d && (a = _[i - d]), s = c[2 * i], t.opt_len += s * (r + a), h && (t.static_len += s * (u[2 * i + 1] + a)));
                            if (0 !== p) {
                                do {
                                    for (r = f - 1; 0 === t.bl_count[r];) r--;
                                    t.bl_count[r]--, t.bl_count[r + 1] += 2, t.bl_count[f]--, p -= 2
                                } while (p > 0);
                                for (r = f; 0 !== r; r--)
                                    for (i = t.bl_count[r]; 0 !== i;)(o = t.heap[--n]) > l || (c[2 * o + 1] !== r && (t.opt_len += (r - c[2 * o + 1]) * c[2 * o], c[2 * o + 1] = r), i--)
                            }
                        }

                        function d(t, e, n) {
                            var i, o, r = new Array(z + 1),
                                a = 0;
                            for (i = 1; i <= z; i++) r[i] = a = a + n[i - 1] << 1;
                            for (o = 0; o <= e; o++) {
                                var s = t[2 * o + 1];
                                0 !== s && (t[2 * o] = u(r[s]++, s))
                            }
                        }

                        function f() {
                            var t, e, n, i, r, a = new Array(z + 1);
                            for (n = 0, i = 0; i < P - 1; i++)
                                for (it[i] = n, t = 0; t < 1 << Q[i]; t++) nt[n++] = i;
                            for (nt[n - 1] = i, r = 0, i = 0; i < 16; i++)
                                for (ot[i] = r, t = 0; t < 1 << Z[i]; t++) et[r++] = i;
                            for (r >>= 7; i < B; i++)
                                for (ot[i] = r << 7, t = 0; t < 1 << Z[i] - 7; t++) et[256 + r++] = i;
                            for (e = 0; e <= z; e++) a[e] = 0;
                            for (t = 0; t <= 143;) $[2 * t + 1] = 8, t++, a[8]++;
                            for (; t <= 255;) $[2 * t + 1] = 9, t++, a[9]++;
                            for (; t <= 279;) $[2 * t + 1] = 7, t++, a[7]++;
                            for (; t <= 287;) $[2 * t + 1] = 8, t++, a[8]++;
                            for (d($, x + 1, a), t = 0; t < B; t++) tt[2 * t + 1] = 5, tt[2 * t] = u(t, 5);
                            rt = new o($, Q, N + 1, x, z), at = new o(tt, Z, 0, B, z), st = new o(new Array(0), Y, 0, V, q)
                        }

                        function p(t) {
                            var e;
                            for (e = 0; e < x; e++) t.dyn_ltree[2 * e] = 0;
                            for (e = 0; e < B; e++) t.dyn_dtree[2 * e] = 0;
                            for (e = 0; e < V; e++) t.bl_tree[2 * e] = 0;
                            t.dyn_ltree[2 * j] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0
                        }

                        function g(t) {
                            t.bi_valid > 8 ? s(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0
                        }

                        function S(t, e, n, i) {
                            g(t), i && (s(t, n), s(t, ~n)), A.arraySet(t.pending_buf, t.window, e, n, t.pending), t.pending += n
                        }

                        function v(t, e, n, i) {
                            var o = 2 * e,
                                r = 2 * n;
                            return t[o] < t[r] || t[o] === t[r] && i[e] <= i[n]
                        }

                        function y(t, e, n) {
                            for (var i = t.heap[n], o = n << 1; o <= t.heap_len && (o < t.heap_len && v(e, t.heap[o + 1], t.heap[o], t.depth) && o++, !v(e, i, t.heap[o], t.depth));) t.heap[n] = t.heap[o], n = o, o <<= 1;
                            t.heap[n] = i
                        }

                        function m(t, e, n) {
                            var i, o, r, s, u = 0;
                            if (0 !== t.last_lit)
                                do {
                                    i = t.pending_buf[t.d_buf + 2 * u] << 8 | t.pending_buf[t.d_buf + 2 * u + 1], o = t.pending_buf[t.l_buf + u], u++, 0 === i ? l(t, o, e) : (l(t, (r = nt[o]) + N + 1, e), 0 !== (s = Q[r]) && c(t, o -= it[r], s), l(t, r = a(--i), n), 0 !== (s = Z[r]) && c(t, i -= ot[r], s))
                                } while (u < t.last_lit);
                            l(t, j, e)
                        }

                        function C(t, e) {
                            var n, i, o, r = e.dyn_tree,
                                a = e.stat_desc.static_tree,
                                s = e.stat_desc.has_stree,
                                c = e.stat_desc.elems,
                                l = -1;
                            for (t.heap_len = 0, t.heap_max = F, n = 0; n < c; n++) 0 !== r[2 * n] ? (t.heap[++t.heap_len] = l = n, t.depth[n] = 0) : r[2 * n + 1] = 0;
                            for (; t.heap_len < 2;) r[2 * (o = t.heap[++t.heap_len] = l < 2 ? ++l : 0)] = 1, t.depth[o] = 0, t.opt_len--, s && (t.static_len -= a[2 * o + 1]);
                            for (e.max_code = l, n = t.heap_len >> 1; n >= 1; n--) y(t, r, n);
                            o = c;
                            do {
                                n = t.heap[1], t.heap[1] = t.heap[t.heap_len--], y(t, r, 1), i = t.heap[1], t.heap[--t.heap_max] = n, t.heap[--t.heap_max] = i, r[2 * o] = r[2 * n] + r[2 * i], t.depth[o] = (t.depth[n] >= t.depth[i] ? t.depth[n] : t.depth[i]) + 1, r[2 * n + 1] = r[2 * i + 1] = o, t.heap[1] = o++, y(t, r, 1)
                            } while (t.heap_len >= 2);
                            t.heap[--t.heap_max] = t.heap[1], _(t, e), d(r, l, t.bl_count)
                        }

                        function b(t, e, n) {
                            var i, o, r = -1,
                                a = e[1],
                                s = 0,
                                c = 7,
                                l = 4;
                            for (0 === a && (c = 138, l = 3), e[2 * (n + 1) + 1] = 65535, i = 0; i <= n; i++) o = a, a = e[2 * (i + 1) + 1], ++s < c && o === a || (s < l ? t.bl_tree[2 * o] += s : 0 !== o ? (o !== r && t.bl_tree[2 * o]++, t.bl_tree[2 * W]++) : s <= 10 ? t.bl_tree[2 * X]++ : t.bl_tree[2 * K]++, s = 0, r = o, 0 === a ? (c = 138, l = 3) : o === a ? (c = 6, l = 3) : (c = 7, l = 4))
                        }

                        function I(t, e, n) {
                            var i, o, r = -1,
                                a = e[1],
                                s = 0,
                                u = 7,
                                h = 4;
                            for (0 === a && (u = 138, h = 3), i = 0; i <= n; i++)
                                if (o = a, a = e[2 * (i + 1) + 1], !(++s < u && o === a)) {
                                    if (s < h)
                                        do {
                                            l(t, o, t.bl_tree)
                                        } while (0 != --s);
                                    else 0 !== o ? (o !== r && (l(t, o, t.bl_tree), s--), l(t, W, t.bl_tree), c(t, s - 3, 2)) : s <= 10 ? (l(t, X, t.bl_tree), c(t, s - 3, 3)) : (l(t, K, t.bl_tree), c(t, s - 11, 7));
                                    s = 0, r = o, 0 === a ? (u = 138, h = 3) : o === a ? (u = 6, h = 3) : (u = 7, h = 4)
                                }
                        }

                        function k(t) {
                            var e;
                            for (b(t, t.dyn_ltree, t.l_desc.max_code), b(t, t.dyn_dtree, t.d_desc.max_code), C(t, t.bl_desc), e = V - 1; e >= 3 && 0 === t.bl_tree[2 * J[e] + 1]; e--);
                            return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
                        }

                        function T(t, e, n, i) {
                            var o;
                            for (c(t, e - 257, 5), c(t, n - 1, 5), c(t, i - 4, 4), o = 0; o < i; o++) c(t, t.bl_tree[2 * J[o] + 1], 3);
                            I(t, t.dyn_ltree, e - 1), I(t, t.dyn_dtree, n - 1)
                        }

                        function E(t) {
                            var e, n = 4093624447;
                            for (e = 0; e <= 31; e++, n >>>= 1)
                                if (1 & n && 0 !== t.dyn_ltree[2 * e]) return M;
                            if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return R;
                            for (e = 32; e < N; e++)
                                if (0 !== t.dyn_ltree[2 * e]) return R;
                            return M
                        }

                        function w(t, e, n, i) {
                            c(t, (G << 1) + (i ? 1 : 0), 3), S(t, e, n, !0)
                        }
                        var A = t("../utils/common"),
                            D = 4,
                            M = 0,
                            R = 1,
                            O = 2,
                            G = 0,
                            L = 1,
                            U = 2,
                            P = 29,
                            N = 256,
                            x = N + 1 + P,
                            B = 30,
                            V = 19,
                            F = 2 * x + 1,
                            z = 15,
                            H = 16,
                            q = 7,
                            j = 256,
                            W = 16,
                            X = 17,
                            K = 18,
                            Q = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                            Z = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                            Y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                            J = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                            $ = new Array(2 * (x + 2));
                        i($);
                        var tt = new Array(2 * B);
                        i(tt);
                        var et = new Array(512);
                        i(et);
                        var nt = new Array(256);
                        i(nt);
                        var it = new Array(P);
                        i(it);
                        var ot = new Array(B);
                        i(ot);
                        var rt, at, st, ct = !1;
                        n._tr_init = function(t) {
                            ct || (f(), ct = !0), t.l_desc = new r(t.dyn_ltree, rt), t.d_desc = new r(t.dyn_dtree, at), t.bl_desc = new r(t.bl_tree, st), t.bi_buf = 0, t.bi_valid = 0, p(t)
                        }, n._tr_stored_block = w, n._tr_flush_block = function(t, e, n, i) {
                            var o, r, a = 0;
                            t.level > 0 ? (t.strm.data_type === O && (t.strm.data_type = E(t)), C(t, t.l_desc), C(t, t.d_desc), a = k(t), o = t.opt_len + 3 + 7 >>> 3, (r = t.static_len + 3 + 7 >>> 3) <= o && (o = r)) : o = r = n + 5, n + 4 <= o && -1 !== e ? w(t, e, n, i) : t.strategy === D || r === o ? (c(t, (L << 1) + (i ? 1 : 0), 3), m(t, $, tt)) : (c(t, (U << 1) + (i ? 1 : 0), 3), T(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1), m(t, t.dyn_ltree, t.dyn_dtree)), p(t), i && g(t)
                        }, n._tr_tally = function(t, e, n) {
                            return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & n, t.last_lit++, 0 === e ? t.dyn_ltree[2 * n]++ : (t.matches++, e--, t.dyn_ltree[2 * (nt[n] + N + 1)]++, t.dyn_dtree[2 * a(e)]++), t.last_lit === t.lit_bufsize - 1
                        }, n._tr_align = function(t) {
                            c(t, L << 1, 3), l(t, j, $), h(t)
                        }
                    }, {
                        "../utils/common": 3
                    }],
                    15: [function(t, e, n) {
                        e.exports = function() {
                            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
                        }
                    }, {}],
                    "/": [function(t, e, n) {
                        var i = {};
                        (0, t("./lib/utils/common").assign)(i, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), e.exports = i
                    }, {
                        "./lib/deflate": 1,
                        "./lib/inflate": 2,
                        "./lib/utils/common": 3,
                        "./lib/zlib/constants": 6
                    }]
                }, {}, [])("/")
            }), cc._RF.pop()
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    polylabel: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "45996tLsZhEzrSdRQ9xlHCI", "polylabel");
        var i = t("./tinyqueue");

        function o(t, e, n) {
            var o, s, l, u;
            e = e || 1;
            for (var h = 0; h < t[0].length; h++) {
                var _ = t[0][h];
                (!h || _[0] < o) && (o = _[0]), (!h || _[1] < s) && (s = _[1]), (!h || _[0] > l) && (l = _[0]), (!h || _[1] > u) && (u = _[1])
            }
            var d = l - o,
                f = u - s,
                p = Math.min(d, f),
                g = p / 2;
            if (0 === p) return [o, s];
            for (var S = new i(void 0, r), v = o; v < l; v += p)
                for (var y = s; y < u; y += p) S.push(new a(v + g, y + g, g, t));
            var m = c(t),
                C = new a(o + d / 2, s + f / 2, 0, t);
            C.d > m.d && (m = C);
            for (var b = S.length; S.length;) {
                var I = S.pop();
                I.d > m.d && (m = I, n && console.log("found best %d after %d probes", Math.round(1e4 * I.d) / 1e4, b)), I.max - m.d <= e || (g = I.h / 2, S.push(new a(I.x - g, I.y - g, g, t)), S.push(new a(I.x + g, I.y - g, g, t)), S.push(new a(I.x - g, I.y + g, g, t)), S.push(new a(I.x + g, I.y + g, g, t)), b += 4)
            }
            return n && (console.log("num probes: " + b), console.log("best distance: " + m.d)), [m.x, m.y, m.d]
        }

        function r(t, e) {
            return e.max - t.max
        }

        function a(t, e, n, i) {
            this.x = t, this.y = e, this.h = n, this.d = s(t, e, i), this.max = this.d + this.h * Math.SQRT2
        }

        function s(t, e, n) {
            for (var i = !1, o = 1 / 0, r = 0; r < n.length; r++)
                for (var a = n[r], s = 0, c = a.length, u = c - 1; s < c; u = s++) {
                    var h = a[s],
                        _ = a[u];
                    h[1] > e != _[1] > e && t < (_[0] - h[0]) * (e - h[1]) / (_[1] - h[1]) + h[0] && (i = !i), o = Math.min(o, l(t, e, h, _))
                }
            return (i ? 1 : -1) * Math.sqrt(o)
        }

        function c(t) {
            for (var e = 0, n = 0, i = 0, o = t[0], r = 0, s = o.length, c = s - 1; r < s; c = r++) {
                var l = o[r],
                    u = o[c],
                    h = l[0] * u[1] - u[0] * l[1];
                n += (l[0] + u[0]) * h, i += (l[1] + u[1]) * h, e += 3 * h
            }
            return 0 === e ? new a(o[0][0], o[0][1], 0, t) : new a(n / e, i / e, 0, t)
        }

        function l(t, e, n, i) {
            var o = n[0],
                r = n[1],
                a = i[0] - o,
                s = i[1] - r;
            if (0 !== a || 0 !== s) {
                var c = ((t - o) * a + (e - r) * s) / (a * a + s * s);
                c > 1 ? (o = i[0], r = i[1]) : c > 0 && (o += a * c, r += s * c)
            }
            return (a = t - o) * a + (s = e - r) * s
        }
        e.exports = o, e.exports.default = o, cc._RF.pop()
    }, {
        "./tinyqueue": "tinyqueue"
    }],
    raphael: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1127doa6dNG/4FYRF3+zUZI", "raphael"), window.R = window.R || {}, R.utils = t("./utils/R.utils"), R.group = t("./R.group"), R.path = t("./R.path"), R.SVG = t("./component/optional/R.svg"), window.Pako = t("./utils/pako"), window.Polylabel = t("./utils/polylabel"), window.Base64 = t("./utils/base64").Base64, cc._RF.pop()
    }, {
        "./R.group": "R.group",
        "./R.path": "R.path",
        "./component/optional/R.svg": "R.svg",
        "./utils/R.utils": "R.utils",
        "./utils/base64": "Base64",
        "./utils/pako": "pako",
        "./utils/polylabel": "polylabel"
    }],
    tinyqueue: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "cc343l5vbdM1J2NIsk+Oarp", "tinyqueue");
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        (function(t, o) {
            "object" === (void 0 === n ? "undefined" : i(n)) && void 0 !== e ? e.exports = o() : "function" == typeof define && define.amd ? define(o) : (t = t || self).TinyQueue = o()
        })(void 0, function() {
            var t = function(t, n) {
                if (void 0 === t && (t = []), void 0 === n && (n = e), this.data = t, this.length = this.data.length, this.compare = n, this.length > 0)
                    for (var i = (this.length >> 1) - 1; i >= 0; i--) this._down(i)
            };

            function e(t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            }
            return t.prototype.push = function(t) {
                this.data.push(t), this.length++, this._up(this.length - 1)
            }, t.prototype.pop = function() {
                if (0 !== this.length) {
                    var t = this.data[0],
                        e = this.data.pop();
                    return this.length--, this.length > 0 && (this.data[0] = e, this._down(0)), t
                }
            }, t.prototype.peek = function() {
                return this.data[0]
            }, t.prototype._up = function(t) {
                for (var e = this.data, n = this.compare, i = e[t]; t > 0;) {
                    var o = t - 1 >> 1,
                        r = e[o];
                    if (n(i, r) >= 0) break;
                    e[t] = r, t = o
                }
                e[t] = i
            }, t.prototype._down = function(t) {
                for (var e = this.data, n = this.compare, i = this.length >> 1, o = e[t]; t < i;) {
                    var r = 1 + (t << 1),
                        a = e[r],
                        s = r + 1;
                    if (s < this.length && n(e[s], a) < 0 && (r = s, a = e[s]), n(a, o) >= 0) break;
                    e[t] = a, t = r
                }
                e[t] = o
            }, t
        }), cc._RF.pop()
    }, {}]
}, {}, ["GameController", "Svg", "GameDataDef", "GameLogic", "StageBase", "GameScene", "LaunchScene", "MenuScene", "RecordScene", "DynContainer", "GoldPanel", "Preview", "UIDailyQuest", "UIDebug", "UIDialog", "UIFinish", "UIGame", "UIGetItem", "UIGoldUnlock", "UIIdleCover", "UIMenu", "UIRecord", "UISetting", "UIShare", "UISignIn", "UISystemTips", "UIWaiting", "RenderPath", "AudioUtil", "DataManager", "EventsManager", "LocalData", "PlayFabHelper", "SvgMgr", "CallbackMgr", "ID", "PlayFab", "PolygonSeparator", "TimeUtility", "Init", "OppoUtil", "SdkAdapter", "SdkAdapter_Android", "SdkAdapter_Default", "SdkAdapter_FB_Instant", "SdkAdapter_IOS", "SdkAdapter_OppoQuickGame", "SdkAdapter_Web", "SdkAdapter_Weixin", "SdkUtil", "WxUtil", "UIBaseClass", "UIManager", "TestScene", "R.group", "R.path", "R.style", "R.transform", "R.animate", "R.simplify", "R.smooth", "R.svg", "raphael", "Base64", "R.curve", "R.dash", "R.find", "R.length", "R.tesselateBezier", "R.utils", "pako", "polylabel", "tinyqueue"]);