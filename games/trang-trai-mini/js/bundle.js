(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = new Array(a); e < a; e++) n[e] = r[e];
    return n;
}

module.exports = _arrayLikeToArray;
},{}],2:[function(require,module,exports){
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}

module.exports = _assertThisInitialized;
},{}],3:[function(require,module,exports){
function _classCallCheck(a, l) {
    if (!(a instanceof l)) throw new TypeError("Cannot call a class as a function");
}

module.exports = _classCallCheck;
},{}],4:[function(require,module,exports){
function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var n = r[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
        Object.defineProperty(e, n.key, n);
    }
}

function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), e;
}

module.exports = _createClass;
},{}],5:[function(require,module,exports){
var unsupportedIterableToArray = require("./unsupportedIterableToArray");

function _createForOfIteratorHelper(r, e) {
    var t;
    if ("undefined" == typeof Symbol || null == r[Symbol.iterator]) {
        if (Array.isArray(r) || (t = unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
            t && (r = t);
            var n = 0, o = function() {};
            return {
                s: o,
                n: function() {
                    return n >= r.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: r[n++]
                    };
                },
                e: function(r) {
                    throw r;
                },
                f: o
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a, u = !0, i = !1;
    return {
        s: function() {
            t = r[Symbol.iterator]();
        },
        n: function() {
            var r = t.next();
            return u = r.done, r;
        },
        e: function(r) {
            i = !0, a = r;
        },
        f: function() {
            try {
                u || null == t.return || t.return();
            } finally {
                if (i) throw a;
            }
        }
    };
}

module.exports = _createForOfIteratorHelper;
},{"./unsupportedIterableToArray":13}],6:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf"), isNativeReflectConstruct = require("./isNativeReflectConstruct"), possibleConstructorReturn = require("./possibleConstructorReturn");

function _createSuper(t) {
    var e = isNativeReflectConstruct();
    return function() {
        var r, o = getPrototypeOf(t);
        if (e) {
            var s = getPrototypeOf(this).constructor;
            r = Reflect.construct(o, arguments, s);
        } else r = o.apply(this, arguments);
        return possibleConstructorReturn(this, r);
    };
}

module.exports = _createSuper;
},{"./getPrototypeOf":7,"./isNativeReflectConstruct":9,"./possibleConstructorReturn":10}],7:[function(require,module,exports){
function _getPrototypeOf(t) {
    return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}

module.exports = _getPrototypeOf;
},{}],8:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && setPrototypeOf(e, t);
}

module.exports = _inherits;
},{"./setPrototypeOf":11}],9:[function(require,module,exports){
function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 
        !0;
    } catch (t) {
        return !1;
    }
}

module.exports = _isNativeReflectConstruct;
},{}],10:[function(require,module,exports){
var _typeof = require("./typeof"), assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(e, t) {
    return !t || "object" !== _typeof(t) && "function" != typeof t ? assertThisInitialized(e) : t;
}

module.exports = _possibleConstructorReturn;
},{"./assertThisInitialized":2,"./typeof":12}],11:[function(require,module,exports){
function _setPrototypeOf(t, o) {
    return module.exports = _setPrototypeOf = Object.setPrototypeOf || function(t, o) {
        return t.__proto__ = o, t;
    }, _setPrototypeOf(t, o);
}

module.exports = _setPrototypeOf;
},{}],12:[function(require,module,exports){
function _typeof(o) {
    return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? module.exports = _typeof = function(o) {
        return typeof o;
    } : module.exports = _typeof = function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}

module.exports = _typeof;
},{}],13:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray");

function _unsupportedIterableToArray(r, e) {
    if (r) {
        if ("string" == typeof r) return arrayLikeToArray(r, e);
        var t = Object.prototype.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, e) : void 0;
    }
}

module.exports = _unsupportedIterableToArray;
},{"./arrayLikeToArray":1}],14:[function(require,module,exports){
var _assertThisInitialized2 = require("../@babel/runtime/helpers/assertThisInitialized");

var _inherits2 = require("../@babel/runtime/helpers/inherits");

var _createSuper2 = require("../@babel/runtime/helpers/createSuper");

var _createForOfIteratorHelper2 = require("../@babel/runtime/helpers/createForOfIteratorHelper");

var _typeof2 = require("../@babel/runtime/helpers/typeof");

var _createClass2 = require("../@babel/runtime/helpers/createClass");

var _classCallCheck2 = require("../@babel/runtime/helpers/classCallCheck");

!function() {
    "use strict";
    var e = function e() {
        _classCallCheck2(this, e);
    };
    e.UPDATE_LODING_PROGRESS_TITLE = "UPDATE_LODING_PROGRESS_TITLE", e.UPDATE_LODING_PROGRESS_VALUE = "UPDATE_LODING_PROGRESS_VALUE", 
    e.CONFIG_PROGRESS = "CONFIG_PROGRESS", e.CONFIG_LOAD_COMPLETE = "CONFIG_LOAD_COMPLETE", 
    e.CONFIG_LOAD_PROGRESS_UI = "CONFIG_LOAD_PROGRESS_UI", e.GAME_DATA_CONSTANTS_CONFIG_LOAD_COMPLETE = "GAME_DATA_CONSTANTS_CONFIG_LOAD_COMPLETE", 
    e.LOGIN = "LOGIN", e.INIT_GAME_DATA = "INIT_GAME_DATA", e.STOP_MUSIC = "STOP_MUSIC", 
    e.PLAY_MUSIC = "PLAY_MUSIC", e.REFRESH_SUBSCRIBE_REWARD_UI = "REFRESH_SUBSCRIBE_REWARD_UI", 
    e.REFRESH_RECORDING_SCREEN_BUTTON_UI = "REFRESH_RECORDING_SCREEN_BUTTON_UI", e.NOTIFY_SECOND_AUTO_RECORDING = "NOTIFY_SECOND_AUTO_RECORDING", 
    e.INIT_COPY_SCENE = "INIT_COPY_SCENE", e.MAP_OUT_COPY_SCENE = "MAP_OUT_COPY_SCENE", 
    e.RELEASE_COPY_SCENE_RESOURCE = "RELEASE_COPY_SCENE_RESOURCE", e.CREATE_NEW_CONTROL_NODE = "CREATE_NEW_CONTROL_NODE", 
    e.RELEASE_ALL_CONSTRUCT_MODEL = "RELEASE_ALL_CONSTRUCT_MODEL", e.SHOW_NEW_HANG_UI = "SHOW_NEW_HANG_UI", 
    e.HIDE_GAME_MAIN_BOTTOM_UI = "HIDE_GAME_MAIN_BOTTOM_UI", e.SHOW_STOP_WATCH_UI = "SHOW_STOP_WATCH_UI", 
    e.HIDE_STOP_WATCH_UI = "HIDE_STOP_WATCH_UI", e.STOP_COUNT_DOWN = "STOP_COUNT_DOWN", 
    e.CHANGE_TIME_ANIMATION = "CHANGE_TIME_ANIMATION", e.SHOW_SETTLEMENT_DIALOG = "SHOW_SETTLEMENT_DIALOG", 
    e.SHOW_GAME_COPY_UI = "SHOW_GAME_COPY_UI", e.HIDE_GAME_COPY_UI = "HIDE_GAME_COPY_UI", 
    e.SHOW_GAME_MAIN_UI = "SHOW_GAME_MAIN_UI", e.HIDE_GAME_MAIN_UI = "HIDE_GAME_MAIN_UI", 
    e.SET_GAME_STATE = "SET_GAME_STATE", e.REFRESH_GAME_GOLD_COINS_UI = "REFRESH_GAME_GOLD_COINS_UI", 
    e.REFRESH_BLOCK_UI = "REFRESH_BLOCK_UI", e.REFRESH_MOTORBYCLE_TIME = "REFRESH_MOTORBYCLE_TIME", 
    e.REFRESH_WOOD_UI = "REFRESH_WOOD_UI", e.REFRESH_PRODUCT_AMOUNT_UI = "REFRESH_PRODUCT_AMOUNT_UI", 
    e.SHOW_BIG_WAREHOUSE_BUTTON_UI = "SHOW_BIG_WAREHOUSE_BUTTON_UI", e.SHOW_BIG_SHOP_BUTTON_UI = "SHOW_BIG_SHOP_BUTTON_UI";
    var t = function t() {
        _classCallCheck2(this, t);
    };
    var a, i, n;
    !function(e) {
        e[e.Tourist = 0] = "Tourist", e[e.WXMiniGame = 1] = "WXMiniGame", e[e.QQMiniGame = 2] = "QQMiniGame", 
        e[e.QGMiniGame = 3] = "QGMiniGame", e[e.VIVOMiniGame = 4] = "VIVOMiniGame", e[e.TTMiniGame = 5] = "TTMiniGame", 
        e[e.LocalLogin = 6] = "LocalLogin";
    }(a || (a = {}));
    var o = function o() {
        _classCallCheck2(this, o);
    };
    o.TOURIST_ACCOUNT = "TOURIST_ACCOUNT", o.VOICE_STATE = "VOICE_STATE", o.VIRBRATE_STATE = "VIRBRATE_STATE", 
    o.SOUND_STATE = "SOUND_STATE", o.AGREE_AGREEMENT = "AGREE_AGREEMENT", o.COPY_MUSIC_DELAY_MILLISECONDS = "COPY_MUSIC_DELAY_MILLISECONDS", 
    o.LAST_CALL_TASK_TYPE = "LAST_CALL_TASK_TYPE", o.WX_OPEN_ID = "WX_OPEN_ID", o.NEW_HAND_GUIDE_1 = "NEW_HAND_GUIDE_1", 
    o.NEW_HAND_GUIDE_2 = "NEW_HAND_GUIDE_2", o.NEW_HAND_GUIDE_3 = "NEW_HAND_GUIDE_3", 
    o.NEW_HAND_GUIDE_4 = "NEW_HAND_GUIDE_4", o.NEW_HAND_GUIDE_5 = "NEW_HAND_GUIDE_5", 
    o.NEW_HAND_GUIDE_6 = "NEW_HAND_GUIDE_6", o.TODAY_HIDE_BANNER_AD_TIMESTAMP_AND_TIMES = "TODAY_HIDE_BANNER_AD_TIMESTAMP_AND_TIMES", 
    o.TODAY_INSERT_AD_TIMESTAMP_AND_TIMES = "TODAY_INSERT_AD_TIMESTAMP_AND_TIMES", o.ALREADY_ADD_CUT_SHORT_TO_DESKTOP = "ALREADY_ADD_CUT_SHORT_TO_DESKTOP", 
    o.ALREADY_GET_ADD_CUT_SHORT_AWARD = "ALREADY_GET_ADD_CUT_SHORT_AWARD", o.CLICK_COMPONENT_UPGRADE_POPPED_UP_DIALOG = "CLICK_COMPONENT_UPGRADE_POPPED_UP_DIALOG", 
    o.BUY_STAOR_SHELVES_MULTIPLE_TASK_RECORD_TIMES = "BUY_STAOR_SHELVES_MULTIPLE_TASK_RECORD_TIMES_", 
    o.SELECTED_SKIN_ID = "SELECTED_SKIN_ID", o.SELECTED_ORNAMENT_ID = "SELECTED_ORNAMENT_ID", 
    o.SELL_RECORD = "SELL_RECORD";
    var s = /* */ function() {
        function s() {
            _classCallCheck2(this, s);
        }
        _createClass2(s, null, [ {
            key: "log",
            value: function log(e) {
                console.log(e);
            }
        }, {
            key: "debugLog",
            value: function debugLog(e) {
                console.log(e);
            }
        } ]);
        return s;
    }();
    var r = /* */ function() {
        function r() {
            _classCallCheck2(this, r);
        }
        _createClass2(r, null, [ {
            key: "createUUID",
            value: function createUUID() {
                var e = [];
                for (var _t2 = 0; _t2 < 36; _t2++) {
                    e[_t2] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
                }
                e[14] = "4", e[19] = "0123456789abcdef".substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-";
                var t = e.join("");
                return t = new Date().getTime() + "-" + t, console.log("uuid:" + t), t;
            }
        }, {
            key: "getUUID",
            value: function getUUID() {
                var e = window.ystorage.getItem(o.TOURIST_ACCOUNT);
                return e || (e = r.createUUID(), window.ystorage.setItem(o.TOURIST_ACCOUNT, e)), 
                e;
            }
        }, {
            key: "getLocalOpenId",
            value: function getLocalOpenId() {
                return window.ystorage.getItem(o.WX_OPEN_ID);
            }
        }, {
            key: "setLocalOpenId",
            value: function setLocalOpenId(e) {
                e && e.length > 0 && window.ystorage.setItem(o.WX_OPEN_ID, e);
            }
        }, {
            key: "number2DataUnitStringWithFlixedNumber",
            value: function number2DataUnitStringWithFlixedNumber(e, t) {
                if (!e) return "0";
                return t = t < 0 ? 0 : Math.floor(t), e < 1e3 ? e.toString() : e < Math.pow(1e3, 2) ? (Math.floor(e / 1e3 * 10) / 10).toFixed(t) + "K" : e < Math.pow(1e3, 3) ? (Math.floor(e / Math.pow(1e3, 2) * 10) / 10).toFixed(t) + "M" : e < Math.pow(1e3, 4) ? (Math.floor(e / Math.pow(1e3, 3) * 10) / 10).toFixed(t) + "B" : e < Math.pow(1e3, 5) ? (Math.floor(e / Math.pow(1e3, 4) * 10) / 10).toFixed(t) + "T" : e < Math.pow(1e3, 6) ? (Math.floor(e / Math.pow(1e3, 5) * 10) / 10).toFixed(t) + "AA" : e < Math.pow(1e3, 7) ? (Math.floor(e / Math.pow(1e3, 6) * 10) / 10).toFixed(t) + "AB" : e < Math.pow(1e3, 8) ? (Math.floor(e / Math.pow(1e3, 7) * 10) / 10).toFixed(t) + "AC" : e < Math.pow(1e3, 9) ? (Math.floor(e / Math.pow(1e3, 8) * 10) / 10).toFixed(t) + "AD" : e < Math.pow(1e3, 10) ? (Math.floor(e / Math.pow(1e3, 9) * 10) / 10).toFixed(t) + "AE" : e < Math.pow(1e3, 11) ? (Math.floor(e / Math.pow(1e3, 10) * 10) / 10).toFixed(t) + "AF" : (Math.floor(e / Math.pow(1e3, 11) * 10) / 10).toFixed(t) + "AG";
            }
        }, {
            key: "number2DataUnitString",
            value: function number2DataUnitString(e) {
                return r.number2DataUnitStringWithFlixedNumber(e, 1);
            }
        }, {
            key: "formatString",
            value: function formatString() {
                if (0 == arguments.length) return "";
                var t = arguments.length <= 0 ? undefined : arguments[0];
                for (var _a = 1; _a < arguments.length; _a++) {
                    var _i = new RegExp("\\{" + (_a - 1) + "\\}", "gm");
                    t = t.replace(_i, _a < 0 || arguments.length <= _a ? undefined : arguments[_a]);
                }
                return t;
            }
        }, {
            key: "isBuffUpgradeTask",
            value: function isBuffUpgradeTask(e) {
                return (e + 1) % 5 == 0;
            }
        }, {
            key: "secondsFormatHMS",
            value: function secondsFormatHMS(e) {
                return (Math.floor(e / 3600) < 10 ? "0" + Math.floor(e / 3600) : Math.floor(e / 3600)) + ":" + (Math.floor(e / 60 % 60) < 10 ? "0" + Math.floor(e / 60 % 60) : Math.floor(e / 60 % 60)) + ":" + (Math.floor(e % 60) < 10 ? "0" + Math.floor(e % 60) : Math.floor(e % 60));
            }
        }, {
            key: "secondsFormatMS",
            value: function secondsFormatMS(e) {
                return (Math.floor(e / 60 % 60) < 10 ? "0" + Math.floor(e / 60 % 60) : Math.floor(e / 60 % 60)) + ":" + (Math.floor(e % 60) < 10 ? "0" + Math.floor(e % 60) : Math.floor(e % 60));
            }
        }, {
            key: "deepCopy",
            value: function deepCopy(e) {
                if ("object" != _typeof2(e)) return;
                var t = e instanceof Array ? [] : {};
                for (var _a2 in e) {
                    e.hasOwnProperty(_a2) && (t[_a2] = "object" == _typeof2(e[_a2]) ? r.deepCopy(e[_a2]) : e[_a2]);
                }
                return t;
            }
        }, {
            key: "checkType",
            value: function checkType(e) {
                return Object.prototype.toString.call(e).slice(8, -1);
            }
        }, {
            key: "clone",
            value: function clone(e) {
                if ("Object" === r.checkType(e)) {
                    var _t3 = {};
                    for (var _a3 in e) {
                        _t3[_a3] = r.clone(e[_a3]);
                    }
                    return _t3;
                }
                if ("Array" === r.checkType(e)) {
                    var t = [];
                    for (var _a4 = 0, _i2 = e.length; _a4 < _i2; _a4++) {
                        t[_a4] = r.clone(e[_a4]);
                    }
                    return t;
                }
                if ("Function" === r.checkType(e)) return new Function("return " + e.toString()).call(this);
                if ("Date" === r.checkType(e)) return new Date(e.valueOf());
                if ("RegExp" === r.checkType(e)) return new RegExp(e);
                if ("Map" === r.checkType(e)) {
                    var _t4 = new Map();
                    return e.forEach(function(e, a) {
                        _t4.set(a, r.clone(e));
                    }), _t4;
                }
                if ("Set" === r.checkType(e)) {
                    var _t5 = new Set();
                    var _iterator = _createForOfIteratorHelper2(e.values()), _step;
                    try {
                        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                            var _a5 = _step.value;
                            _t5.add(r.clone(_a5));
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally {
                        _iterator.f();
                    }
                    return _t5;
                }
                return e;
            }
        }, {
            key: "isToday",
            value: function isToday(e) {
                if ("number" == typeof e) {
                    var _t6 = new Date();
                    return _t6.setTime(e), new Date().toDateString() == _t6.toDateString();
                }
                return new Date().toDateString() == e.toDateString();
            }
        }, {
            key: "isSlowFrameDevice",
            value: function isSlowFrameDevice() {
                var e = !1;
                if (Laya.Browser.onMiniGame && !window.tt) {
                    var _t7 = Laya.Browser.window.wx.getSystemInfoSync();
                    s.log("deviceInfo==》" + JSON.stringify(_t7));
                    var _a6 = _t7.system;
                    if (-1 !== _a6.indexOf("iOS")) {
                        e = -1 !== _t7.model.indexOf("iPhone 6");
                    } else if (-1 !== _a6.indexOf("Android")) {
                        var _a7 = _t7.benchmarkLevel;
                        -2 !== _a7 && 0 !== _a7 && (e = !(-1 == _t7.benchmarkLevel || _t7.benchmarkLevel >= 22));
                    }
                } else if (Laya.Browser.onQQMiniGame) {
                    var _t8 = Laya.Browser.window.qq.getSystemInfoSync();
                    s.log("deviceInfo==》" + JSON.stringify(_t8));
                    var _a8 = _t8.system;
                    if (-1 !== _a8.indexOf("iOS")) {
                        e = -1 !== _t8.model.indexOf("iPhone 6");
                    } else if (-1 !== _a8.indexOf("Android")) {
                        var _a9 = _t8.benchmarkLevel;
                        -2 !== _a9 && 0 !== _a9 && (e = !(-1 == _t8.benchmarkLevel || _t8.benchmarkLevel >= 22));
                    }
                }
                return s.log("--isSlowFrameDevice--:" + e), e;
            }
        }, {
            key: "SingletonList_expand",
            value: function SingletonList_expand() {
                Laya.SingletonList.prototype._remove = function(e) {
                    if (-1 != e && (this.length--, e !== this.length)) {
                        var _t9 = this.elements[this.length];
                        _t9 && (this.elements[e] = _t9, _t9._setIndexInList(e));
                    }
                };
                var e = Laya.SimpleSingletonList.prototype.add;
                Laya.SimpleSingletonList.prototype.add = function(t) {
                    -1 === t._getIndexInList() ? e.call(this, t) : console.log("SimpleSingletonList:element has in SingletonList.");
                };
            }
        }, {
            key: "getNowTimestamp",
            value: function getNowTimestamp() {
                return new Date().getTime();
            }
        }, {
            key: "randomProbabilityOk",
            value: function randomProbabilityOk(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
                return this.randomNum(0, t) < e;
            }
        }, {
            key: "randomNum",
            value: function randomNum(e, t) {
                if (e < 0 && (e = 0), t < 0 && (t = 0), t <= e) return t;
                return Math.floor(Math.random() * (t - e)) + e;
            }
        }, {
            key: "randomFloatNum",
            value: function randomFloatNum(e, t) {
                if (e < 0 && (e = 0), t < 0 && (t = 0), t <= e) return t;
                return Math.random() * (t - e) + e;
            }
        }, {
            key: "setModelMaterial",
            value: function setModelMaterial(e, t) {
                if (e instanceof Laya.MeshSprite3D) {
                    var _a10 = e.meshRenderer.materials;
                    for (var _i3 = 0; _i3 < _a10.length; _i3++) {
                        var _n = _a10[_i3];
                        t >= 1 ? (_n.albedoColorA = 1, _n.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_OPAQUE) : (t < 0 && (t = 0), 
                        _n.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT, _n.albedoColorA = t), 
                        e.active = !(t <= 0);
                    }
                }
                if (e instanceof Laya.SkinnedMeshSprite3D) {
                    var _a11 = e.skinnedMeshRenderer.materials;
                    for (var _i4 = 0; _i4 < _a11.length; _i4++) {
                        var _n2 = _a11[_i4];
                        t >= 1 ? (_n2.albedoColorA = 1, _n2.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_OPAQUE) : (t < 0 && (t = 0), 
                        _n2.renderMode = Laya.BlinnPhongMaterial.RENDERMODE_TRANSPARENT, _n2.albedoColorA = t), 
                        e.active = !(t <= 0);
                    }
                }
                if (e.numChildren > 0) for (var _a12 = 0; _a12 < e.numChildren; _a12++) {
                    this.setModelMaterial(e.getChildAt(_a12), t);
                }
            }
        }, {
            key: "setModelActive",
            value: function setModelActive(e, t) {
                if (e) if (e instanceof Laya.MeshSprite3D && (e.active = t), e instanceof Laya.SkinnedMeshSprite3D && (e.active = t), 
                e.numChildren && e.numChildren > 0) for (var _a13 = 0; _a13 < e.numChildren; _a13++) {
                    this.setModelActive(e.getChildAt(_a13), t);
                } else e.active = t;
            }
        }, {
            key: "shuffle",
            value: function shuffle(e) {
                var t = e.length;
                for (;--t; ) {
                    var _a14 = Math.floor(Math.random() * t);
                    var _ref = [ e[t], e[_a14] ];
                    e[_a14] = _ref[0];
                    e[t] = _ref[1];
                }
            }
        }, {
            key: "compareVersion",
            value: function compareVersion(e, t) {
                var a = e.split("."), i = t.split(".");
                var n = Math.max(e.length, t.length);
                for (;a.length < n; ) {
                    a.push("0");
                }
                for (;t.length < n; ) {
                    i.push("0");
                }
                for (var _e2 = 0; _e2 < n; _e2++) {
                    var _t10 = parseInt(a[_e2]), _n3 = parseInt(i[_e2]);
                    if (_t10 > _n3) return 1;
                    if (_t10 < _n3) return -1;
                }
                return 0;
            }
        }, {
            key: "copyLayaVector3",
            value: function copyLayaVector3(e) {
                return new Laya.Vector3(e.x, e.y, e.z);
            }
        }, {
            key: "positionToUIPoint",
            value: function positionToUIPoint(e, t) {
                var a = new Laya.Vector4();
                t.viewport.project(e, t.projectionViewMatrix, a);
                var i = a.x / Laya.stage.clientScaleX, n = a.y / Laya.stage.clientScaleY;
                return new Laya.Vector2(i, n);
            }
        }, {
            key: "isNanOrNull",
            value: function isNanOrNull(e) {
                return isNaN(e) || r.isNull(e);
            }
        }, {
            key: "isNull",
            value: function isNull(e) {
                return !e && void 0 !== e && 0 != e;
            }
        }, {
            key: "getVector3Angle",
            value: function getVector3Angle(e, t) {
                return Laya.Vector3.normalize(e, e), Laya.Vector3.normalize(t, t), 180 * Math.acos(Laya.Vector3.dot(e, t)) / Math.PI;
            }
        }, {
            key: "getVector2Angle",
            value: function getVector2Angle(e, t) {
                return Laya.Vector2.normalize(e, e), Laya.Vector2.normalize(t, t), 180 * Math.acos(Laya.Vector2.dot(e, t)) / Math.PI;
            }
        }, {
            key: "woldPositionToLocalPosition",
            value: function woldPositionToLocalPosition(e, t, a) {
                var i = t.parent;
                if (i) {
                    var _t11 = new Laya.Matrix4x4();
                    i.transform.worldMatrix.invert(_t11), Laya.Vector3.transformCoordinate(e, _t11, a);
                } else a = e;
            }
        } ]);
        return r;
    }();
    var l = function l() {
        _classCallCheck2(this, l);
    };
    l.DefaultTime = 1574053075e3, l.mainScene = "MainScene.scene", l.modelSubpackageName = "subpackageModel", 
    l.model1SubpackageName = "subpackageModel1", l.model2SubpackageName = "subpackageModel2", 
    l.model3SubpackageName = "subpackageModel3", l.audioSubpackageName = "subpackageAudio", 
    l.atlasSubpackageName = "atlas", l.modelSceneSrcPath = l.modelSubpackageName + "/scene3d/LayaScene_PastureMGScene/Conventional/PastureMGScene.ls", 
    l.audioResourceSrcPath = l.audioSubpackageName + "/", l.androidAudioResourceSrcPath = "ogg/", 
    l.cacheDirPath = "cache", l.loadingSteps = 11, l.tipsDialogShowMilliseconds = 1e3, 
    l.buttonScalingRatio = 1.18, l.buttonScalingMilliseconds = 50, l.dialogDelayRenderMilliseconds = 100, 
    l.nodeMass = 5, l.nodeIncrementMass = 3, l.nodeFriction = .8, l.groundFriction = .8, 
    l.controlAreaMaxX = 1.7, l.controllAreaMinX = -1.7, l.controllAreaMaxZ = 10.5, l.controllAreaMinZ = .5, 
    l.birthAreaMaxZ = 2.8, l.distanceFromO = 2.3, l.maxNodeValue2Logarithm = 2, l.minNodeValue2Logarithm = 7, 
    l.minY = .5, l.nodeBaseScale = .5, l.nodeIncrementScale = .05, l.navigationDistance = 3.5, 
    l.navigationSeconds = 1.5, l.attenuationRatio = .7, l.gravityY = -10, l.bombDistanceSquared = 9, 
    l.attractiveForce = 120, l.repulsiveForce = 120, l.shareInfoArray = [ {
        title: "冰岛饲养员",
        imageId: "QvpiBOzcQJCP3h46Qhhmhw==",
        imageUrl: ""
    } ], l.exportAppAdArray = [];
    var c = /* */ function() {
        function c() {
            _classCallCheck2(this, c);
            this.DIALOG_WIDTH = Laya.Browser.width, this.DIALOG_HEIGHT = 50, this.visible = !1;
        }
        _createClass2(c, [ {
            key: "show",
            value: function show(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : l.tipsDialogShowMilliseconds;
                var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 36;
                this.visible && this.close(), this.visible = !0, this.dialog = new Laya.Dialog(), 
                this.dialog.size(Laya.stage.width, 80), this.dialog.show(!1, a), this.dialog.mouseThrough = !0;
                Laya.timer.once(l.dialogDelayRenderMilliseconds, this, function() {
                    var t = new Laya.Image("PastureUI/Dialog/tk_24.png");
                    t.sizeGrid = "0,200,0,200,0", t.size(680, 77), t.centerX = 0, t.centerY = 0;
                    var a = new Laya.Label();
                    a.text = e, a.bold = !0, a.fontSize = n, a.color = "#ffe501", a.align = "center", 
                    a.valign = "middle", a.centerX = 0, a.centerY = 0, t.addChild(a), this.dialog.addChild(t);
                }), Laya.timer.once(i, this, this.close);
            }
        }, {
            key: "close",
            value: function close() {
                Laya.timer.clearAll(this), this.dialog && this.dialog.close(), this.visible = !1;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return c.instance;
            }
        } ]);
        return c;
    }();
    c.instance = new c();
    var h = function h() {
        _classCallCheck2(this, h);
        this.wA = 0;
    };
    var d = /* */ function() {
        function d() {
            _classCallCheck2(this, d);
            this.functionType = n.None, this.functionConfig = null;
        }
        _createClass2(d, [ {
            key: "havePreBlock",
            value: function havePreBlock() {
                return this.preBlockId >= 10001;
            }
        }, {
            key: "Key",
            get: function get() {
                return this.x + "_" + this.z;
            }
        } ]);
        return d;
    }();
    !function(e) {
        e[e.CommonBlock = 0] = "CommonBlock", e[e.HorizontalBridge = 1] = "HorizontalBridge", 
        e[e.VerticalBridge = 2] = "VerticalBridge", e[e.SimpleHorizontalBridge = 3] = "SimpleHorizontalBridge", 
        e[e.SimpleVerticalBridge = 4] = "SimpleVerticalBridge";
    }(i || (i = {})), function(e) {
        e[e.None = 0] = "None", e[e.Pasture = 1] = "Pasture", e[e.Shop = 2] = "Shop", e[e.Warehouse = 4] = "Warehouse", 
        e[e.FruitTree = 5] = "FruitTree", e[e.Beehive = 6] = "Beehive", e[e.SwitchScenePoint = 7] = "SwitchScenePoint", 
        e[e.Farm = 8] = "Farm";
    }(n || (n = {}));
    var m = function m() {
        _classCallCheck2(this, m);
    };
    m.serverAddress = "", m.localConfig = "res/localconfig/", 
    m.FTPServer = "", m.versionFileName = "VersionFile", 
    m.testLevelId = -1;
    var g = ",", u = '"', p = "\n", y = "\r";
    var f = /* */ function() {
        function f(e) {
            _classCallCheck2(this, f);
            this.cursor = 0, this.data = e, this.cursor = 0;
        }
        _createClass2(f, [ {
            key: "getNextRow",
            value: function getNextRow() {
                var e = this.getNextColumn();
                if (!e) return null;
                var t = [];
                for (;e && (t.push(e.column), !e.isEnd); ) {
                    e = this.getNextColumn();
                }
                return t;
            }
        }, {
            key: "getNextColumn",
            value: function getNextColumn() {
                var e = [], t = [];
                var a = this.getNextChar();
                if (null == a) return null;
                var i = !1;
                for (;a; ) {
                    if (a == g) {
                        if (e.length <= 0 || 2 == e.length) break;
                        t.push(a);
                    } else if (a == u) 2 == e.length ? t.push(e.pop()) : e.push(a); else if (a == p) {
                        if (e.length <= 0 || 2 == e.length) {
                            i = !0;
                            break;
                        }
                        t.push(a);
                    } else {
                        if (null == a) {
                            i = !0;
                            break;
                        }
                        a == y || t.push(a);
                    }
                    a = this.getNextChar();
                }
                return this.peekNextChar() == y && this.getNextChar(), {
                    column: t.join(""),
                    isEnd: i
                };
            }
        }, {
            key: "getNextChar",
            value: function getNextChar() {
                return !this.data || this.cursor >= this.data.length ? null : this.data.charAt(this.cursor++);
            }
        }, {
            key: "peekNextChar",
            value: function peekNextChar() {
                return !this.data || this.cursor >= this.data.length ? null : this.data.charAt(this.cursor);
            }
        } ]);
        return f;
    }();
    var I = /* */ function() {
        function I(e) {
            _classCallCheck2(this, I);
            this.name = e;
        }
        _createClass2(I, [ {
            key: "Rename",
            value: function Rename(e) {
                this.name = e;
            }
        }, {
            key: "loadLocal",
            value: function loadLocal() {
                var e = m.localConfig + this.name + ".csv";
                Laya.loader.load(e, Laya.Handler.create(this, this.onLoaclLoded), null, Laya.Loader.TEXT);
            }
        }, {
            key: "onLoaclLoded",
            value: function onLoaclLoded() {
                var e = m.localConfig + this.name + ".csv";
                var t = function(e) {
                    var t = new f(e), a = (t.getNextRow(), t.getNextRow(), t.getNextRow());
                    if (!a) return null;
                    var i = t.getNextRow();
                    var n = [];
                    for (;i; ) {
                        var _e3 = {};
                        for (var _t12 = 0; _t12 < a.length && _t12 < i.length; _t12++) {
                            _e3[a[_t12]] = i[_t12];
                        }
                        n.push(_e3), i = t.getNextRow();
                    }
                    return n;
                }(Laya.loader.getRes(e));
                this.completeHandler(t);
            }
        }, {
            key: "processHandler",
            value: function processHandler(e) {}
        }, {
            key: "errorHandler",
            value: function errorHandler(e) {
                c.Instance.show("与服务器通信失败");
            }
        }, {
            key: "completeHandler",
            value: function completeHandler(t) {
                if (this.rawData = t, this.data = {}, t) {
                    var _iterator2 = _createForOfIteratorHelper2(t), _step2;
                    try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                            var _e4 = _step2.value;
                            this.data[_e4.id] = _e4;
                        }
                    } catch (err) {
                        _iterator2.e(err);
                    } finally {
                        _iterator2.f();
                    }
                    Laya.stage.event(e.CONFIG_PROGRESS, this.name);
                }
            }
        }, {
            key: "getItem",
            value: function getItem(e) {
                return this.data[e];
            }
        }, {
            key: "getAll",
            value: function getAll() {
                return this.rawData;
            }
        } ]);
        return I;
    }();
    var w = /* */ function() {
        function w() {
            _classCallCheck2(this, w);
        }
        _createClass2(w, null, [ {
            key: "init",
            value: function init(e) {
                w.language = e;
            }
        }, {
            key: "getLanguage",
            value: function getLanguage(e) {
                if (w.language) {
                    var _t13 = w.language.getItem(e);
                    if (_t13) return _t13.value ? _t13.value : e;
                }
                return e;
            }
        } ]);
        return w;
    }();
    var C = function C() {
        _classCallCheck2(this, C);
    };
    var A = /* */ function() {
        function A() {
            _classCallCheck2(this, A);
            this.name = "DecorativeMapConfig";
        }
        _createClass2(A, [ {
            key: "Path",
            get: function get() {
                return m.localConfig + this.name + Zt.Instance.SceneIndex + ".txt";
            }
        }, {
            key: "loadConfig",
            value: function loadConfig() {
                var e = this.Path;
                Laya.loader.load(e, Laya.Handler.create(this, this.onLoaclLoded), null, Laya.Loader.TEXT);
            }
        }, {
            key: "onLoaclLoded",
            value: function onLoaclLoded() {
                var t = this.Path, a = Laya.loader.getRes(t), i = JSON.parse(a).DecorativeMap;
                var _iterator3 = _createForOfIteratorHelper2(i), _step3;
                try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                        var _e5 = _step3.value;
                        if (_e5) {
                            var _t14 = new C();
                            _t14.id = _e5.i, _t14.x = -Number(_e5.x), _t14.z = Number(_e5.z), _t14.rotationY = 360 - Number(_e5.r);
                            var _a15 = Math.round(_t14.x) + "_" + Math.round(_t14.z), _i5 = ea.Instance.baseMapConfigDic[_a15];
                            _i5 && _i5.decorativeArray.push(_t14);
                        }
                    }
                } catch (err) {
                    _iterator3.e(err);
                } finally {
                    _iterator3.f();
                }
                Laya.stage.event(e.CONFIG_PROGRESS, this.name);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return A.instance || (A.instance = new A()), A.instance;
            }
        } ]);
        return A;
    }();
    A.instance = null;
    var L = /* */ function() {
        function L() {
            _classCallCheck2(this, L);
            this.isSingle = !0, this.aConfig = null;
        }
        _createClass2(L, [ {
            key: "animalConfig",
            get: function get() {
                return this.aConfig || (this.animalConfigId = 2e3 + this.type, this.aConfig = Jt.Instance.AnimalConfig.getItem(this.animalConfigId.toString())), 
                this.aConfig;
            }
        }, {
            key: "K",
            get: function get() {
                return this.x + "_" + this.z;
            }
        } ]);
        return L;
    }();
    var S = /* */ function() {
        function S() {
            _classCallCheck2(this, S);
            this.name = "PastureMapConfig", this.PastureMapConfigArray = new Array(), this.PastureMapConfigDic = {};
        }
        _createClass2(S, [ {
            key: "Path",
            get: function get() {
                return m.localConfig + this.name + Zt.Instance.SceneIndex + ".txt";
            }
        }, {
            key: "loadConfig",
            value: function loadConfig() {
                var e = this.Path;
                Laya.loader.load(e, Laya.Handler.create(this, this.onLoaclLoded), null, Laya.Loader.TEXT);
            }
        }, {
            key: "onLoaclLoded",
            value: function onLoaclLoded() {
                this.PastureMapConfigArray = new Array(), this.PastureMapConfigDic = {};
                var e = this.Path, t = Laya.loader.getRes(e), a = JSON.parse(t).pastureMap;
                var _iterator4 = _createForOfIteratorHelper2(a), _step4;
                try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                        var _e6 = _step4.value;
                        if (_e6) {
                            var _t15 = new L();
                            _t15.id = _e6.i, _t15.x = -Number(_e6.x), _t15.z = Number(_e6.z), _t15.type = Number(_e6.t), 
                            _t15.treeClear = Number(_e6.tC), _t15.d = Number(_e6.d);
                            var _a16 = _t15.K, _i6 = ea.Instance.baseMapConfigDic[_a16];
                            _i6 && (_i6.functionType = n.Pasture, _i6.functionConfig = _t15), this.PastureMapConfigArray.push(_t15), 
                            this.PastureMapConfigDic[_a16] = _t15;
                        }
                    }
                } catch (err) {
                    _iterator4.e(err);
                } finally {
                    _iterator4.f();
                }
                this.analysisConfig();
            }
        }, {
            key: "analysisConfig",
            value: function analysisConfig() {
                for (var _e7 = 0; _e7 < this.PastureMapConfigArray.length; _e7++) {
                    var _t16 = this.PastureMapConfigArray[_e7], _a17 = _t16.x + "_" + (_t16.z + 1), _i7 = _t16.x + "_" + (_t16.z - 1), _n4 = _t16.x + 1 + "_" + _t16.z, _o = _t16.x - 1 + "_" + _t16.z;
                    (this.PastureMapConfigDic[_a17] || this.PastureMapConfigDic[_i7] || this.PastureMapConfigDic[_n4] || this.PastureMapConfigDic[_o]) && (_t16.isSingle = !1);
                }
                Laya.stage.event(e.CONFIG_PROGRESS, this.name);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return S.instance || (S.instance = new S()), S.instance;
            }
        } ]);
        return S;
    }();
    S.instance = null;
    var k = /* */ function() {
        function k() {
            _classCallCheck2(this, k);
        }
        _createClass2(k, [ {
            key: "isPurchaseAllAnimal",
            get: function get() {
                return 0 == this.type;
            }
        }, {
            key: "K",
            get: function get() {
                return this.x + "_" + this.z;
            }
        } ], [ {
            key: "ProductType",
            value: function ProductType(e) {
                return e > 6e3 ? 3 : e > 5e3 ? 2 : e > 4e3 ? 1 : e > 2e3 ? 0 : void 0;
            }
        } ]);
        return k;
    }();
    var b = /* */ function() {
        function b() {
            _classCallCheck2(this, b);
            this.name = "ShopMapConfig", this.ShopMapConfigArray = new Array(), this.ShopMapConfigDic = {};
        }
        _createClass2(b, [ {
            key: "Path",
            get: function get() {
                return m.localConfig + this.name + Zt.Instance.SceneIndex + ".txt";
            }
        }, {
            key: "loadConfig",
            value: function loadConfig() {
                var e = this.Path;
                Laya.loader.load(e, Laya.Handler.create(this, this.onLoaclLoded), null, Laya.Loader.TEXT);
            }
        }, {
            key: "onLoaclLoded",
            value: function onLoaclLoded() {
                this.ShopMapConfigArray = new Array(), this.ShopMapConfigDic = {};
                var t = this.Path, a = Laya.loader.getRes(t), i = JSON.parse(a).shopMap;
                var _iterator5 = _createForOfIteratorHelper2(i), _step5;
                try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                        var _e8 = _step5.value;
                        if (_e8) {
                            var _t17 = new k();
                            _t17.id = _e8.i, _t17.x = -Number(_e8.x), _t17.z = Number(_e8.z), _t17.type = Number(_e8.t), 
                            _t17.productIdArray = _e8.aL, _t17.rotationY = 360 - Number(_e8.r);
                            var _a18 = _t17.K, _i8 = ea.Instance.baseMapConfigDic[_a18];
                            _i8 && (_i8.functionType = n.Shop, _i8.functionConfig = _t17), this.ShopMapConfigArray.push(_t17), 
                            this.ShopMapConfigDic[_a18] = _t17;
                        }
                    }
                } catch (err) {
                    _iterator5.e(err);
                } finally {
                    _iterator5.f();
                }
                Laya.stage.event(e.CONFIG_PROGRESS, this.name);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return b.instance || (b.instance = new b()), b.instance;
            }
        } ]);
        return b;
    }();
    b.instance = null;
    var B = /* */ function() {
        function B() {
            _classCallCheck2(this, B);
            this.brokenWoodEffectIndex = 0, this.attackAnimalEffectIndex = 0, this.harvestCropsEffectIndex = 0;
        }
        _createClass2(B, [ {
            key: "init",
            value: function init(e) {
                var t = e.getChildByName("Effect"), a = t.getChildByName("kanshu_beiji");
                this.effectBrokenWoodArray = new Array(), this.effectBrokenWoodArray.push(a);
                for (var _t18 = 0; _t18 < 6; _t18++) {
                    var _t19 = a, _i9 = Laya.MeshSprite3D.instantiate(_t19, e, !1);
                    this.effectBrokenWoodArray.push(_i9), _i9.active = !1;
                }
                var i = t.getChildByName("shouge_beiji");
                this.effectAttackAnimalArray = new Array(), this.effectAttackAnimalArray.push(i);
                for (var _t20 = 0; _t20 < 4; _t20++) {
                    var _t21 = i, _a19 = Laya.MeshSprite3D.instantiate(_t21, e, !1);
                    this.effectAttackAnimalArray.push(_a19), _a19.active = !1;
                }
                var n = t.getChildByName("nongzuowu_beiji");
                this.effectHarvestCropsArray = new Array(), this.effectHarvestCropsArray.push(n);
                for (var _t22 = 0; _t22 < 4; _t22++) {
                    var _t23 = n, _a20 = Laya.MeshSprite3D.instantiate(_t23, e, !1);
                    this.effectHarvestCropsArray.push(_a20), _a20.active = !1;
                }
                this.effectToStrong = t.getChildByName("shengji"), this.prePlay();
            }
        }, {
            key: "prePlay",
            value: function prePlay() {
                B.Instance.playBrokenWoodEffect(new Laya.Vector3(0, -1, 0)), B.Instance.playAttackAnimalEffect(new Laya.Vector3(0, -1, 0)), 
                B.Instance.playHarvestCropsEffect(new Laya.Vector3(0, -1, 0)), B.Instance.playToStrongEffect(new Laya.Vector3(0, -1, 0));
            }
        }, {
            key: "playBrokenWoodEffect",
            value: function playBrokenWoodEffect(e) {
                e.y += .1, e.z -= .084, this.brokenWoodEffectIndex >= this.effectBrokenWoodArray.length && (this.brokenWoodEffectIndex = 0);
                var t = this.effectBrokenWoodArray[this.brokenWoodEffectIndex];
                t && (t.active = !0, t.transform.position = e, this.playParticle(t)), this.brokenWoodEffectIndex++;
            }
        }, {
            key: "hideAllBrokenWoodEffect",
            value: function hideAllBrokenWoodEffect() {
                for (var _e9 = 0; _e9 < this.effectBrokenWoodArray.length; _e9++) {
                    var _t24 = this.effectBrokenWoodArray[_e9];
                    _t24 && _t24.active && (_t24.active = !1);
                }
            }
        }, {
            key: "playAttackAnimalEffect",
            value: function playAttackAnimalEffect(e) {
                e.y += .1, e.z -= .084, this.attackAnimalEffectIndex >= this.effectAttackAnimalArray.length && (this.attackAnimalEffectIndex = 0);
                var t = this.effectAttackAnimalArray[this.attackAnimalEffectIndex];
                t && (t.active = !0, t.transform.position = e, this.playParticle(t)), this.attackAnimalEffectIndex++;
            }
        }, {
            key: "playHarvestCropsEffect",
            value: function playHarvestCropsEffect(e) {
                e.y += .1, e.z -= .084, this.harvestCropsEffectIndex >= this.effectHarvestCropsArray.length && (this.harvestCropsEffectIndex = 0);
                var t = this.effectHarvestCropsArray[this.harvestCropsEffectIndex];
                t && (t.active = !0, t.transform.position = e, this.playParticle(t)), this.harvestCropsEffectIndex++;
            }
        }, {
            key: "playToStrongEffect",
            value: function playToStrongEffect(e) {
                e.y += .1, e.z -= .084;
                var t = this.effectToStrong;
                t && (t.active = !0, t.transform.position = e, this.playParticle(t));
            }
        }, {
            key: "playParticle",
            value: function playParticle(e) {
                if (e instanceof Laya.ShuriKenParticle3D) {
                    e.particleSystem.play();
                }
                if (e.numChildren > 0) for (var t = 0; t < e.numChildren; t++) {
                    this.playParticle(e.getChildAt(t));
                }
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return B.instance || (B.instance = new B()), B.instance;
            }
        } ]);
        return B;
    }();
    B.instance = null;
    var T = /* */ function() {
        function T() {
            _classCallCheck2(this, T);
            this.DoneRewardMaxTimesNumberOneDay = 80, this.doTaskAddMotorSeconds = 600, this.doTaskAddStrongSeconds = 300, 
            this.strongMaxSeconds = 1800, this.woodMaxAmount = 256, this.woodBasePrice = 2, 
            this.woodGrowUpPrice = 1, this.FirstLevelId = 30001, this.StrengthValueMax = 8, 
            this.StrengthValueAutoCycle = 120, this.ConsumeStrengthValueOneRound = 1, this.StrengthValueAutoIncreasedAmount = 1, 
            this.DoneTaskStrengthIncrement = 5, this.ResurrectionNeedGoldCoin = 100, this.ResurrectionToAddStep = 5, 
            this.VictoryDoTaskMutiples = 5, this.TurntableFirstId = 40001, this.propGoldCoin = 100;
        }
        _createClass2(T, [ {
            key: "loadGameDataConstantsConfig",
            value: function loadGameDataConstantsConfig() {
                this.onResponse(null);
            }
        }, {
            key: "onResponse",
            value: function onResponse(t) {
                Laya.stage.event(e.GAME_DATA_CONSTANTS_CONFIG_LOAD_COMPLETE);
            }
        }, {
            key: "getDoneRewardMaxTimesNumberOneDay",
            value: function getDoneRewardMaxTimesNumberOneDay() {
                return this.DoneRewardMaxTimesNumberOneDay;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return T.mInstance;
            }
        } ]);
        return T;
    }();
    T.mInstance = new T();
    var M = function M(e) {
        _classCallCheck2(this, M);
        this.next = null, this.element = e;
    };
    var P = /* */ function() {
        function P() {
            _classCallCheck2(this, P);
            this.head = null, this.tail = null, this.length = 0;
        }
        _createClass2(P, [ {
            key: "append",
            value: function append(e) {
                var t = new M(e);
                this.length <= 0 ? (this.head = t, this.tail = t) : (this.tail.next = t, this.tail = t), 
                this.length++;
            }
        }, {
            key: "insert",
            value: function insert(e, t) {
                if (e < 1 || e > this.length + 1) return !1;
                var a = new M(t);
                if (1 == e) a.next = this.head, this.head = a, 0 == this.length && (this.tail = a); else if (e == this.length + 1) this.tail.next = a, 
                this.tail = a; else {
                    var _t25 = this.getNodeAt(e - 1), _i10 = _t25.next;
                    _t25.next = a, a.next = _i10;
                }
                this.length++;
            }
        }, {
            key: "positionOf",
            value: function positionOf(e) {
                var t = this.head, a = 1;
                for (;t; ) {
                    if (t.element == e) return a;
                    a++, t = t.next;
                }
                return -1;
            }
        }, {
            key: "remove",
            value: function remove(e) {
                var t = this.positionOf(e);
                return !(t < 1 || t > this.length) && this.removeAt(t);
            }
        }, {
            key: "removeAt",
            value: function removeAt(e) {
                if (e < 1 || e > this.length) return !1;
                var t = this.head;
                if (1 == e) this.head = t.next, 1 == this.length && (this.tail = null); else {
                    var _t26 = this.getNodeAt(e - 1);
                    _t26.next = _t26.next.next, e == this.length && (this.tail = _t26);
                }
                return this.length--, !0;
            }
        }, {
            key: "getNodeAt",
            value: function getNodeAt(e) {
                if (e < 1 || e > this.length) return null;
                var t = this.head, a = 1;
                for (;a < e; ) {
                    t = t.next, a++;
                }
                return t;
            }
        }, {
            key: "isEmpty",
            value: function isEmpty() {
                return 0 == this.length;
            }
        }, {
            key: "size",
            value: function size() {
                return this.length;
            }
        }, {
            key: "getHead",
            value: function getHead() {
                return this.head;
            }
        }, {
            key: "getTail",
            value: function getTail() {
                return this.tail;
            }
        }, {
            key: "clear",
            value: function clear() {
                this.head = null, this.tail = null, this.length = 0;
            }
        }, {
            key: "print",
            value: function print() {
                var e = this.head, t = "", a = 1;
                for (;e; ) {
                    a < this.length ? t += "element:".concat(e.element, " ---- ") : t += "element:".concat(e.element), 
                    e = e.next, a++;
                }
                return t;
            }
        } ]);
        return P;
    }();
    var v = /* */ function() {
        function v() {
            _classCallCheck2(this, v);
            this.isInitialized = !1;
        }
        _createClass2(v, [ {
            key: "init",
            value: function init() {
                this.isInitialized = !0, Laya.Browser.onTTMiniGame ? v.Instance.uma = Laya.Browser.window.tt.uma : Laya.Browser.onQQMiniGame ? v.Instance.uma = Laya.Browser.window.qq.uma : v.Instance.uma = Laya.Browser.window.wx.uma, 
                console.log("init report sdk");
            }
        }, {
            key: "reportCompleteVideoAdEvent",
            value: function reportCompleteVideoAdEvent() {
                v.umEnable && this.isInitialized && v.Instance.uma.trackEvent("ad_video");
            }
        }, {
            key: "reportUnlockBlockEvent",
            value: function reportUnlockBlockEvent(e) {
                if (v.umEnable && this.isInitialized) {
                    console.log("report unlock block" + e);
                    var _t27 = "unlock_block_" + e;
                    console.log(_t27), v.Instance.uma.trackEvent(_t27);
                }
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return v.instance;
            }
        }, {
            key: "umEnable",
            get: function get() {
                return Laya.Browser.onMiniGame || Laya.Browser.onQGMiniGame || Laya.Browser.onTTMiniGame || Laya.Browser.onQQMiniGame;
            }
        } ]);
        return v;
    }();
    var _, x, D, O, V, G, N, E, R, U, F, z, W, H, j, X;
    v.instance = new v(), function(e) {
        e[e.READY = 0] = "READY", e[e.START = 1] = "START", e[e.PLAYING = 2] = "PLAYING", 
        e[e.PAUSE = 3] = "PAUSE", e[e.TASK_PAUSE = 4] = "TASK_PAUSE", e[e.TEMP_HOME = 5] = "TEMP_HOME", 
        e[e.DEFEAT = 6] = "DEFEAT", e[e.VICTORY = 7] = "VICTORY", e[e.CHALLENGE_OR_ENDLESS_MODE_SETTLE = 8] = "CHALLENGE_OR_ENDLESS_MODE_SETTLE";
    }(_ || (_ = {})), function(e) {
        e[e.VideoAd = 0] = "VideoAd", e[e.Default = 1] = "Default";
    }(x || (x = {}));
    var Y = /* */ function() {
        function Y() {
            _classCallCheck2(this, Y);
            this.open = !0, this.voiceState = "open", this.hasVideoAd = !0, this.videoAdPlaying = !1, 
            this.insertAd = null, this.systemInfo = {}, this.bannerAdIsShowSuccess = !1;
        }
        _createClass2(Y, [ {
            key: "init",
            value: function init() {
                Y.Instance.callType = x.Default, Laya.Browser.onQGMiniGame && (Y.Instance.initAd(), 
                Y.Instance.initBannerAd(), Y.Instance.reportMonitor());
            }
        }, {
            key: "reportMonitor",
            value: function reportMonitor() {
                Laya.Browser.onQGMiniGame && Laya.Browser.window.qg.reportMonitor("game_scene", 0);
            }
        }, {
            key: "initBannerAd",
            value: function initBannerAd() {
                Laya.Browser.onQGMiniGame && (console.log("-----------oppo 初始化banner------------"), 
                Y.Instance.bannerAd = Laya.Browser.window.qg.createBannerAd({
                    adUnitId: "358121",
                    style: {
                        top: Y.Instance.systemInfo.screenHeight - 300,
                        left: 0,
                        width: Y.Instance.systemInfo.screenWidth,
                        height: 300
                    }
                }), Y.Instance.bannerAd.onLoad(function() {
                    console.log("----------banner 广告加载成功------");
                }), Y.Instance.bannerAd.onError(function(e) {
                    Y.Instance.bannerAdIsShowSuccess = !1, console.log("Banner onError !!!", JSON.stringify(e));
                }), Y.Instance.bannerAd.onShow(function() {
                    console.log("banner 广告显示"), Y.Instance.bannerAdIsShowSuccess = !0;
                }), Y.Instance.bannerAd.onHide(function() {
                    console.log("banner onHide，bannerAdIsShowSuccess：" + Y.Instance.bannerAdIsShowSuccess), 
                    Y.Instance.bannerAdIsShowSuccess && Y.Instance.setTodayHideBannerAd(), Y.Instance.bannerAdIsShowSuccess = !1;
                }), Y.Instance.bannerAd.onResize(function(e) {
                    console.log("banner 宽度：" + e.width + ", banner 高度：" + e.height), Y.Instance.bannerAd.style.top = Y.Instance.systemInfo.screenHeight - Math.floor(e.height);
                }));
            }
        }, {
            key: "getTodayHideBannerAdTimes",
            value: function getTodayHideBannerAdTimes() {
                return 1;
            }
        }, {
            key: "setTodayHideBannerAd",
            value: function setTodayHideBannerAd() {}
        }, {
            key: "showBannerAd",
            value: function showBannerAd() {
                Laya.Browser.onQGMiniGame && Y.Instance.bannerAd && (console.log("显示banner"), Y.Instance.bannerAd.show());
            }
        }, {
            key: "hideBannerAd",
            value: function hideBannerAd() {
                Laya.Browser.onQGMiniGame && Y.Instance.bannerAd && (console.log("隐藏banner"), Y.Instance.bannerAd.hide());
            }
        }, {
            key: "showCustomMultiGridAd",
            value: function showCustomMultiGridAd() {
                Laya.Browser.onQGMiniGame;
            }
        }, {
            key: "hideCustomMultiGridAd",
            value: function hideCustomMultiGridAd() {
                Laya.Browser.onQGMiniGame;
            }
        }, {
            key: "showCustomGridAd",
            value: function showCustomGridAd() {
                Laya.Browser.onQGMiniGame;
            }
        }, {
            key: "hideCustomGridAd",
            value: function hideCustomGridAd() {
                Laya.Browser.onQGMiniGame;
            }
        }, {
            key: "initAd",
            value: function initAd() {
                Laya.Browser.onQGMiniGame && (console.log("激励视频广告初始化"), Y.Instance.videoAd = Laya.Browser.window.qg.createRewardedVideoAd({
                    adUnitId: "358122"
                }), Y.Instance.videoAd.onLoad(function() {
                    console.log("激励视频加载成功"), Y.Instance.videoAd.show(), console.log("播放激励视频");
                }), Y.Instance.videoAd.onError(function(t) {
                    console.log("检测有无视频--\x3e没有:" + JSON.stringify(t));
                    c.Instance.show("暂无激励视频，请稍后再试"), Y.Instance.hasVideoAd = !1, Y.Instance.videoAdPlaying = !1, 
                    Laya.stage.event(e.SET_GAME_STATE, _.PLAYING);
                }));
            }
        }, {
            key: "showVideoAd",
            value: function showVideoAd(e) {
                if (Laya.Browser.onQGMiniGame) {
                    console.log("显示激励视频广告"), Y.Instance.videoAdPlaying = !0, Y.Instance.callType = x.VideoAd;
                    var _t28 = function _t28(a) {
                        Y.Instance.videoAd.offClose(_t28), console.log("广告视频回调--\x3e" + JSON.stringify(a)), 
                        a.isEnded ? (console.log("广告视频成功"), Y.Instance.videoAdPlaying = !1, e && (c.Instance.show("任务完成"), 
                        e.callback.apply(e.caller, [ e.data ]), e = null), v.Instance.reportCompleteVideoAdEvent()) : (console.log("广告视频失败"), 
                        Y.Instance.videoAdPlaying = !1, c.Instance.show("提前关闭视频无法获得对应奖励")), Zt.Instance.cancelPause();
                    };
                    Y.Instance.videoAd.onClose(_t28), Y.Instance.videoAd.load();
                } else c.Instance.show("激励视频广告完成"), e && (e.callback.apply(e.caller, [ e.data ]), 
                e = null);
            }
        }, {
            key: "initInsertAd",
            value: function initInsertAd() {}
        }, {
            key: "showInsertAd",
            value: function showInsertAd() {}
        }, {
            key: "todayInsertAdIsEnable",
            value: function todayInsertAdIsEnable() {
                return !1;
            }
        }, {
            key: "setTodayInsertAd",
            value: function setTodayInsertAd() {}
        }, {
            key: "createMainPageNativeAd",
            value: function createMainPageNativeAd() {}
        }, {
            key: "createGiftsNativeAd",
            value: function createGiftsNativeAd() {}
        }, {
            key: "reportNativeAdShow",
            value: function reportNativeAdShow(e, t) {}
        }, {
            key: "reportNativeAdClick",
            value: function reportNativeAdClick(e, t) {}
        } ], [ {
            key: "Instance",
            get: function get() {
                return Y.instance;
            }
        }, {
            key: "virbrateShort",
            value: function virbrateShort() {
                Laya.Browser.onQGMiniGame ? Laya.Browser.window.qg.vibrateShort({
                    success: function success(e) {},
                    fail: function fail(e) {},
                    complete: function complete(e) {}
                }) : Laya.Browser.onVVMiniGame && (console.log("vivo vibrateShort"), Laya.Browser.window.qg.vibrateShort());
            }
        }, {
            key: "createShortcut",
            value: function createShortcut() {
                Laya.Browser.onQGMiniGame && (console.log("创建桌面图标"), Laya.Browser.window.qg.hasShortcutInstalled({
                    success: function success(e) {
                        0 == e ? Laya.Browser.window.qg.installShortcut({
                            success: function success() {
                                console.log("创建桌面图标成功"), c.Instance.show("桌面图标添加成功");
                            },
                            fail: function fail(e) {
                                console.log("创建桌面图标失败：" + JSON.stringify(e));
                            },
                            complete: function complete() {
                                console.log("创建桌面图标完成");
                            }
                        }) : c.Instance.show("桌面图标添加成功");
                    },
                    fail: function fail(e) {},
                    complete: function complete() {}
                }));
            }
        } ]);
        return Y;
    }();
    Y.instance = new Y();
    var K = function K() {
        _classCallCheck2(this, K);
    };
    !function(e) {
        e[e.VideoAd = 0] = "VideoAd", e[e.Default = 1] = "Default";
    }(D || (D = {}));
    var Q = /* */ function() {
        function Q() {
            _classCallCheck2(this, Q);
            this.open = !0, this.voiceState = "open", this.hasVideoAd = !0, this.videoAdPlaying = !1, 
            this.insertAd = null, this.systemInfo = {}, this.bannerAdIsShowSuccess = !1, this.clickedShowVideoAd = !1, 
            this.lastClickShowVideoTimestamp = 0, this.videoAdLoaded = !1;
        }
        _createClass2(Q, [ {
            key: "init",
            value: function init() {
                Q.Instance.callType = D.Default, Laya.Browser.onVVMiniGame && (Q.Instance.systemInfo = qg.getSystemInfoSync(), 
                Q.Instance.initAd());
            }
        }, {
            key: "getTodayHideBannerAdTimes",
            value: function getTodayHideBannerAdTimes() {
                var e = window.ystorage.getItem(o.TODAY_HIDE_BANNER_AD_TIMESTAMP_AND_TIMES);
                if (console.log("getTodayHideBannerAdTimes step1,todayHideBannerAdTimestampAndTimes:" + e), 
                e && e.length > 10 && -1 != e.indexOf("-")) {
                    console.log("getTodayHideBannerAdTimes step2-1,读取的数据有效");
                    var t = new Array();
                    t = e.split("-");
                    var a = Number(t[0]), i = t[1];
                    console.log("getTodayHideBannerAdTimes step2-2,分割后时间戳:" + a + ",次数：" + i);
                    var n = new Date();
                    return n.setTime(a), r.isToday(n) ? (console.log("getTodayHideBannerAdTimes step2-3，是今日,次数：" + i), 
                    i) : (console.log("getTodayHideBannerAdTimes step2-3，不是今日,次数0"), 0);
                }
                return console.log("getTodayHideBannerAdTimes step3,本地没有数据,次数0"), 0;
            }
        }, {
            key: "setTodayHideBannerAd",
            value: function setTodayHideBannerAd() {
                var e = window.ystorage.getItem(o.TODAY_HIDE_BANNER_AD_TIMESTAMP_AND_TIMES);
                if (console.log("setTodayHideBannerAd step1,todayHideBannerAdTimestampAndTimes:" + e), 
                e && e.length > 10 && -1 != e.indexOf("-")) {
                    console.log("setTodayHideBannerAd step2-1,读取的数据有效");
                    var t = new Array();
                    t = e.split("-");
                    var a = Number(t[0]), i = t[1];
                    console.log("setTodayHideBannerAd step2-2,分割后时间戳:" + a + ",次数：" + i);
                    var n = new Date();
                    n.setTime(a), r.isToday(n) ? (console.log("setTodayHideBannerAd step2-3，是今日"), i++, 
                    e = new Date().getTime() + "-" + i, window.ystorage.setItem(o.TODAY_HIDE_BANNER_AD_TIMESTAMP_AND_TIMES, e)) : (console.log("setTodayHideBannerAd step2-3，不是今日"), 
                    e = new Date().getTime() + "-1", window.ystorage.setItem(o.TODAY_HIDE_BANNER_AD_TIMESTAMP_AND_TIMES, e));
                } else console.log("setTodayHideBannerAd step3,本地没有数据"), e = new Date().getTime() + "-1", 
                window.ystorage.setItem(o.TODAY_HIDE_BANNER_AD_TIMESTAMP_AND_TIMES, e);
                console.log("setTodayHideBannerAd step end,最终存储的结果为:" + e);
            }
        }, {
            key: "showBannerAd",
            value: function showBannerAd() {
                if (Laya.Browser.onVVMiniGame) if (console.log("显示banner"), Q.Instance.getTodayHideBannerAdTimes() < 5) {
                    Q.Instance.bannerAd && Q.Instance.bannerAd.destroy(), Q.Instance.bannerAd = Laya.Browser.window.qg.createBannerAd({
                        posId: "5f5bbd630a5345c9a922d6399669361e",
                        style: {}
                    }), Q.Instance.bannerAd.onLoad(function() {
                        console.log("----------banner 广告加载成功------");
                    }), Q.Instance.bannerAd.onError(function(e) {
                        Q.Instance.bannerAdIsShowSuccess = !1, console.log("Banner onError !!!", JSON.stringify(e));
                    });
                    var e = Q.Instance.bannerAd.show();
                    e && e.then(function() {
                        console.log("banner 广告显示"), Q.Instance.bannerAdIsShowSuccess = !0;
                    }).catch(function(e) {
                        console.log("banner广告展示失败", JSON.stringify(e));
                    });
                } else console.log("今日已经关闭过5次banner广告，不再显示");
            }
        }, {
            key: "hideBannerAd",
            value: function hideBannerAd() {
                if (Laya.Browser.onVVMiniGame && Q.Instance.bannerAd) {
                    console.log("隐藏banner");
                    var e = Q.Instance.bannerAd.hide();
                    e && e.then(function() {
                        console.log("banner onHide，bannerAdIsShowSuccess：" + Q.Instance.bannerAdIsShowSuccess), 
                        Q.Instance.bannerAdIsShowSuccess && Q.Instance.setTodayHideBannerAd(), Q.Instance.bannerAdIsShowSuccess = !1;
                    }).catch(function(e) {
                        console.log("banner广告隐藏失败", JSON.stringify(e));
                    });
                }
            }
        }, {
            key: "showCustomMultiGridAd",
            value: function showCustomMultiGridAd() {
                Laya.Browser.onVVMiniGame;
            }
        }, {
            key: "hideCustomMultiGridAd",
            value: function hideCustomMultiGridAd() {
                Laya.Browser.onVVMiniGame;
            }
        }, {
            key: "showCustomGridAd",
            value: function showCustomGridAd() {
                Laya.Browser.onVVMiniGame;
            }
        }, {
            key: "hideCustomGridAd",
            value: function hideCustomGridAd() {
                Laya.Browser.onVVMiniGame;
            }
        }, {
            key: "initAd",
            value: function initAd() {
                if (Laya.Browser.onVVMiniGame) {
                    console.log("激励视频广告初始化"), Q.Instance.videoAd = Laya.Browser.window.qg.createRewardedVideoAd({
                        posId: "ab55286c09734ec69e7eb0acb6286327"
                    }), Q.Instance.videoAd.onError(function(t) {
                        console.log("检测有无视频--\x3e没有:" + JSON.stringify(t));
                        Q.Instance.hasVideoAd = !1, Q.Instance.videoAdPlaying = !1, Laya.stage.event(e.SET_GAME_STATE, _.PLAYING), 
                        -4 == t.errCode ? Laya.Browser.window.qg.showDialog({
                            message: "视频获取失败，请稍后再试",
                            buttons: [ {
                                text: "知道了",
                                color: "#33dd44"
                            } ],
                            success: function success(e) {
                                console.log("handling callback");
                            },
                            cancel: function cancel() {
                                console.log("handling cancel");
                            },
                            fail: function fail(e, t) {
                                console.log("handling fail, code = ".concat(t));
                            }
                        }) : c.Instance.show("暂无激励视频，请稍后再试");
                    }), Q.Instance.videoAd.onLoad(function() {
                        console.log("激励视频加载成功"), Q.Instance.videoAdLoaded = !0, Q.Instance.clickedShowVideoAd && Q.Instance.playVideoAdLogic();
                    });
                    Q.Instance.videoAd.onClose(function(t) {
                        Laya.stage.event(e.PLAY_MUSIC), console.log("广告视频回调--\x3e" + JSON.stringify(t)), 
                        Q.Instance.videoAdPlaying = !1, Zt.Instance.cancelPause(), t.isEnded ? (console.log("广告视频成功"), 
                        Q.Instance.handler && (c.Instance.show("任务完成"), Q.Instance.handler.callback.apply(Q.Instance.handler.caller, [ Q.Instance.handler.data ]), 
                        Q.Instance.handler = null), v.Instance.reportCompleteVideoAdEvent()) : (console.log("广告视频失败"), 
                        c.Instance.show("提前关闭视频无法获得对应奖励"));
                    });
                }
            }
        }, {
            key: "playVideoAdLogic",
            value: function playVideoAdLogic() {
                console.log("激励视频加载成功 点击过播放");
                Q.Instance.videoAd.show();
                Q.Instance.videoAdLoaded = !1, Q.Instance.clickedShowVideoAd = !1, console.log("播放激励视频"), 
                Laya.stage.event(e.STOP_MUSIC);
            }
        }, {
            key: "showVideoAd",
            value: function showVideoAd(e) {
                if (Q.Instance.clickedShowVideoAd = !0, Q.Instance.handler = e, Laya.Browser.onVVMiniGame) {
                    var t = new Date().getTime();
                    t - this.lastClickShowVideoTimestamp >= 1e4 ? (Q.Instance.lastClickShowVideoTimestamp = t, 
                    console.log("点击显示激励视频广告"), Q.Instance.videoAdPlaying = !0, Q.Instance.callType = D.VideoAd, 
                    Q.Instance.videoAdLoaded ? (console.log("已经加载过激励视频广告，直接播放"), Q.Instance.playVideoAdLogic()) : Q.Instance.videoAd.load()) : (console.log("自己定的时间间隔没有到期"), 
                    Laya.Browser.window.qg.showDialog({
                        message: "视频获取失败，请稍后再试",
                        buttons: [ {
                            text: "知道了",
                            color: "#33dd44"
                        } ],
                        success: function success(e) {
                            console.log("handling callback");
                        },
                        cancel: function cancel() {
                            console.log("handling cancel");
                        },
                        fail: function fail(e, t) {
                            console.log("handling fail, code = ".concat(t));
                        }
                    }));
                } else e && (e.callback.apply(e.caller, [ e.data ]), e = null);
            }
        }, {
            key: "showInsertAd",
            value: function showInsertAd() {
                if (Laya.Browser.onVVMiniGame && Q.Instance.todayInsertAdIsEnable()) {
                    Q.Instance.insertAd && Q.Instance.insertAd.destroy(), Q.Instance.insertAd = Laya.Browser.window.qg.createInterstitialAd({
                        posId: "d84350ac9e8649c5863125f1c5863449",
                        style: {}
                    });
                    var _e10 = Q.Instance.insertAd.show();
                    _e10 && _e10.then(function() {
                        console.log("插屏广告展示成功"), Q.Instance.setTodayInsertAd();
                    }).catch(function(e) {
                        console.log("插屏失败：" + JSON.stringify(e));
                    });
                }
            }
        }, {
            key: "todayInsertAdIsEnable",
            value: function todayInsertAdIsEnable() {
                var e = window.ystorage.getItem(o.TODAY_INSERT_AD_TIMESTAMP_AND_TIMES);
                if (console.log("todayInsertAdIsEnable step1,todayHideBannerAdTimestampAndTimes:" + e), 
                e && e.length > 10 && -1 != e.indexOf("-")) {
                    console.log("getTodayHideBannerAdTimes step2-1,读取的数据有效");
                    var t = new Array();
                    t = e.split("-");
                    var a = Number(t[0]), i = t[1];
                    console.log("todayInsertAdIsEnable step2-2,分割后时间戳:" + a + ",次数：" + i);
                    var n = new Date();
                    n.setTime(a);
                    var s = new Date().getTime();
                    return r.isToday(n) ? (console.log("todayInsertAdIsEnable step2-3，是今日,次数：" + i), 
                    i >= 8 ? (console.log("todayInsertAdIsEnable step2-3，是今日,大于8次，不可用"), !1) : i < 8 && i >= 5 ? s - a >= 3e4 || (console.log("todayInsertAdIsEnable step2-3，是今日,间隔小于30秒，不可用"), 
                    !1) : s - a >= 6e4 || (console.log("todayInsertAdIsEnable step2-3，是今日,间隔小于60秒，不可用"), 
                    !1)) : (console.log("todayInsertAdIsEnable step2-3，不是今日,次数0"), !0);
                }
                return console.log("todayInsertAdIsEnable step3,本地没有数据,次数0"), !0;
            }
        }, {
            key: "setTodayInsertAd",
            value: function setTodayInsertAd() {
                var e = window.ystorage.getItem(o.TODAY_INSERT_AD_TIMESTAMP_AND_TIMES);
                if (console.log("setTodayInsertAd step1,todayInsertAdTimestampAndTimes:" + e), e && e.length > 10 && -1 != e.indexOf("-")) {
                    console.log("setTodayInsertAd step2-1,读取的数据有效");
                    var t = new Array();
                    t = e.split("-");
                    var a = Number(t[0]), i = t[1];
                    console.log("setTodayInsertAd step2-2,分割后时间戳:" + a + ",次数：" + i);
                    var n = new Date();
                    n.setTime(a), r.isToday(n) ? (console.log("setTodayInsertAd step2-3，是今日"), i++, 
                    e = new Date().getTime() + "-" + i, window.ystorage.setItem(o.TODAY_INSERT_AD_TIMESTAMP_AND_TIMES, e)) : (console.log("setTodayInsertAd step2-3，不是今日"), 
                    e = new Date().getTime() + "-1", window.ystorage.setItem(o.TODAY_INSERT_AD_TIMESTAMP_AND_TIMES, e));
                } else console.log("setTodayInsertAd step3,本地没有数据"), e = new Date().getTime() + "-1", 
                window.ystorage.setItem(o.TODAY_INSERT_AD_TIMESTAMP_AND_TIMES, e);
                console.log("setTodayInsertAd step end,最终存储的结果为:" + e);
            }
        }, {
            key: "createMainPageNativeAd",
            value: function createMainPageNativeAd() {
                if (Laya.Browser.onVVMiniGame) {
                    var e = qg.createNativeAd({
                        posId: "9945de12b2eb4c10a63e0b97709eb315"
                    });
                    return e.onError(function(e) {
                        console.log("主页面原生广告拉取失败" + JSON.stringify(e));
                    }), e;
                }
                return null;
            }
        }, {
            key: "createGiftsNativeAd",
            value: function createGiftsNativeAd() {
                if (Laya.Browser.onVVMiniGame) {
                    var e = qg.createNativeAd({
                        posId: "f0ca5da1813b46d5a8ece5a556930379"
                    });
                    return e.onError(function(e) {
                        console.log("礼包原生广告拉取失败" + JSON.stringify(e));
                    }), e;
                }
                return null;
            }
        }, {
            key: "reportNativeAdShow",
            value: function reportNativeAdShow(e, t) {
                Laya.Browser.onVVMiniGame && (console.log("上报广告曝光,广告ID" + t), e.reportAdShow({
                    adId: t
                }));
            }
        }, {
            key: "reportNativeAdClick",
            value: function reportNativeAdClick(e, t) {
                Laya.Browser.onVVMiniGame && (console.log("上报广告点击,广告ID" + t), e.reportAdClick({
                    adId: t
                }));
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Q.instance;
            }
        }, {
            key: "virbrateShort",
            value: function virbrateShort() {
                Laya.Browser.onVVMiniGame && Laya.Browser.window.qg.vibrateShort({
                    success: function success(e) {},
                    fail: function fail(e) {},
                    complete: function complete(e) {}
                });
            }
        } ]);
        return Q;
    }();
    Q.instance = new Q();
    var q = function q() {
        _classCallCheck2(this, q);
    };
    !function(e) {
        e[e.Share = 0] = "Share", e[e.VideoAd = 1] = "VideoAd", e[e.Default = 2] = "Default";
    }(O || (O = {}));
    var J = /* */ function() {
        function J() {
            _classCallCheck2(this, J);
            this.hasVideoAd = !0, this.videoAdPlaying = !1, this.systemInfo = {}, this.bannerAd = null, 
            this.recorderManager = null, this.videoPath = null, this.isRecordering = !1, this.showBannerCount = 0, 
            this.recordState = 0, this.startRecordingTimestamp = -1, this.recordedDuration = 0;
        }
        _createClass2(J, [ {
            key: "init",
            value: function init() {
                var _this = this;
                this.callType = O.Default, J.onTTGame() && (this.systemInfo = window.tt.getSystemInfoSync(), 
                console.log("当前宿主名字：" + this.systemInfo.appName), J.TT.showShareMenu(), Laya.Browser.window.tt.uma.onShareAppMessage(function() {
                    return _this.getShareInfo();
                }), J.TT.onShow(function(e) {
                    _this.onShow();
                }), J.TT.onHide(function() {
                    _this.onHide();
                }), this.initAd(), this.initBannerAd(), this.initRecorderManager());
            }
        }, {
            key: "supportedBannerAd",
            value: function supportedBannerAd() {
                return !0;
            }
        }, {
            key: "supportedInterstitialAd",
            value: function supportedInterstitialAd() {
                return !(!this.systemInfo || "android" != this.systemInfo.platform || "Toutiao" !== this.systemInfo.appName);
            }
        }, {
            key: "supportedRankList",
            value: function supportedRankList() {
                return !this.systemInfo || "live_stream_lite" !== this.systemInfo.appName && "live_stream" !== this.systemInfo.appName && "XiGua" !== this.systemInfo.appName;
            }
        }, {
            key: "supportedVideoAd",
            value: function supportedVideoAd() {
                return !0;
            }
        }, {
            key: "supportedShareCallback",
            value: function supportedShareCallback() {
                return !this.systemInfo || "live_stream" !== this.systemInfo.appName;
            }
        }, {
            key: "supportedShare",
            value: function supportedShare() {
                return !this.systemInfo || "live_stream_lite" !== this.systemInfo.appName;
            }
        }, {
            key: "initBannerAd",
            value: function initBannerAd() {
                var _this2 = this;
                J.onTTGame() && this.supportedBannerAd() && (this.bannerAd = J.TT.createBannerAd({
                    adUnitId: "8aeb081470bd484c8g",
                    adIntervals: 30,
                    style: {
                        left: (this.systemInfo.screenWidth - 300) / 2,
                        top: this.systemInfo.screenHeight,
                        width: 300
                    }
                }), this.bannerAd.onResize(function(e) {
                    console.log("广告尺寸", e), _this2.bannerAd.style.top = _this2.systemInfo.screenHeight - Math.floor(e.height), 
                    _this2.bannerAd.style.left = (_this2.systemInfo.screenWidth - Math.floor(e.width)) / 2;
                }), this.bannerAd.onError(function(e) {
                    console.log("init Banner fail !!!", e), 1008 === e.errCode && console.log("banner 广告已关闭");
                }));
            }
        }, {
            key: "showBannerAd",
            value: function showBannerAd() {
                J.onTTGame() && this.supportedBannerAd() && (this.showBannerCount++, this.showBannerCount >= 8 && (this.showBannerCount = 0, 
                this.bannerAd && this.bannerAd.destroy(), this.initBannerAd()), this.bannerAd.show());
            }
        }, {
            key: "hideBannerAd",
            value: function hideBannerAd() {
                J.onTTGame() && this.supportedBannerAd() && this.bannerAd && this.bannerAd.hide();
            }
        }, {
            key: "showCustomMultiGridAd",
            value: function showCustomMultiGridAd() {
                J.onTTGame();
            }
        }, {
            key: "hideCustomMultiGridAd",
            value: function hideCustomMultiGridAd() {}
        }, {
            key: "showCustomGridAd",
            value: function showCustomGridAd() {
                J.onTTGame();
            }
        }, {
            key: "hideCustomGridAd",
            value: function hideCustomGridAd() {
                J.onTTGame();
            }
        }, {
            key: "showInterstitialAd",
            value: function showInterstitialAd() {}
        }, {
            key: "initAd",
            value: function initAd() {
                var _this3 = this;
                J.onTTGame() && J.TT.createRewardedVideoAd && this.supportedVideoAd() && (this.videoAd = J.TT.createRewardedVideoAd({
                    adUnitId: "bb40j18a7llumpkmni"
                }), this.videoAd.onError(function(t) {
                    console.log("检测有无视频--\x3e没有"), _this3.hasVideoAd = !1, Laya.stage.event(e.SET_GAME_STATE, _.PLAYING);
                }));
            }
        }, {
            key: "initRecorderManager",
            value: function initRecorderManager() {
                J.onTTGame() && (console.log("初始化录屏"), this.recorderManager = J.TT.getGameRecorderManager(), 
                this.recorderManager.onStart(function(t) {
                    console.log("录屏开始"), J.Instance.videoPath = null, J.Instance.isRecordering = !0, 
                    J.Instance.recordState = 1, J.Instance.startRecordingTimestamp = Date.now(), Laya.stage.event(e.REFRESH_RECORDING_SCREEN_BUTTON_UI);
                }), this.recorderManager.onStop(function(t) {
                    console.log("录屏结束:", JSON.stringify(t)), J.Instance.isRecordering = !1, J.Instance.recordState = 2, 
                    J.Instance.videoPath = t.videoPath, Laya.stage.event(e.REFRESH_RECORDING_SCREEN_BUTTON_UI);
                }), this.recorderManager.onError(function(e) {
                    console.log("录屏出现错误:" + e.errMsg);
                }));
            }
        }, {
            key: "startVideoRecord",
            value: function startVideoRecord(t) {
                J.onTTGame() && this.recorderManager && (J.Instance.recordedDuration = 0, console.log("startVideoRecord step 2"), 
                this.recorderManager._recording ? Laya.stage.event(e.REFRESH_RECORDING_SCREEN_BUTTON_UI) : (J.Instance.startRecordingTimestamp = -1, 
                this.recorderManager.start({
                    duration: 300
                })));
            }
        }, {
            key: "stopVideoRecord",
            value: function stopVideoRecord() {
                if (J.onTTGame() && this.recorderManager) {
                    if (J.Instance.startRecordingTimestamp < 0) return void c.Instance.show("录屏还未开始，不能结束录屏");
                    if (console.log("stopVideoRecord step 1"), J.Instance.recordedDuration = Date.now() - J.Instance.startRecordingTimestamp, 
                    J.Instance.recordedDuration <= 3500) return void c.Instance.show("录屏不能小于3秒");
                    this.recorderManager.stop();
                }
            }
        }, {
            key: "shareVideoRecord",
            value: function shareVideoRecord(t) {
                J.onTTGame() && this.recorderManager && (J.Instance.recordHandler = t, this.videoPath && this.videoPath.length > 0 ? Laya.Browser.window.tt.uma.shareAppMessage({
                    channel: "video",
                    query: "",
                    extra: {
                        withVideoId: !1,
                        videoPath: J.Instance.videoPath,
                        videoTopics: [ "冰岛饲养员 #抖音小游戏" ],
                        createChallenge: "Toutiao" === J.Instance.systemInfo.appName
                    },
                    success: function success(t) {
                        console.log("分享录屏视频成功", t), c.Instance.show("分享完成"), J.Instance.recordState = 0, 
                        J.Instance.videoPath = null, J.Instance.startRecordingTimestamp = -1, Laya.stage.event(e.REFRESH_RECORDING_SCREEN_BUTTON_UI), 
                        J.Instance.recordHandler && (J.Instance.recordHandler.callback.apply(J.Instance.recordHandler.caller, [ J.Instance.recordHandler.data ]), 
                        J.Instance.recordHandler = null);
                    },
                    fail: function fail(t) {
                        console.log("分享录屏视频失败", t.errMsg, J.Instance.videoPath), -1 !== t.errMsg.indexOf("short") && c.Instance.show("分享录屏视频失败，录屏视频时间过短"), 
                        J.Instance.recordState = 0, J.Instance.videoPath = null, J.Instance.startRecordingTimestamp = -1, 
                        Laya.stage.event(e.REFRESH_RECORDING_SCREEN_BUTTON_UI), J.Instance.recordHandler = null;
                    }
                }) : J.Instance.startRecordingTimestamp > 0 ? c.Instance.show("请先结束录制") : (J.Instance.recordHandler = null, 
                c.Instance.show("请先录制一段视频")));
            }
        }, {
            key: "share",
            value: function share(e) {
                this.handler = e, J.onTTGame() ? (this.callType = O.Share, this.goShareTime = new Date(), 
                Laya.Browser.window.tt.uma.shareAppMessage(this.getShareInfo())) : this.onShare();
            }
        }, {
            key: "getShareInfo",
            value: function getShareInfo() {
                return {
                    query: "",
                    success: function success() {
                        console.log("分享成功回调"), J.Instance.onShare();
                    },
                    fail: function fail(e) {
                        console.log("分享失败");
                    }
                };
            }
        }, {
            key: "onShow",
            value: function onShow() {
                switch (this.callType) {
                  case O.Share:
                    if (!this.supportedShareCallback() && this.goShareTime) {
                        var e = (new Date().getTime() - this.goShareTime.getTime()) / 1e3;
                        e > 2 && e < 120 ? this.onShare() : (J.onTTGame() ? J.TT.showToast({
                            title: "分享失败",
                            icon: "none",
                            image: "",
                            duration: 2e3
                        }) : c.Instance.show("分享失败"), this.handler = null), this.goShareTime = null;
                    }
                }
                this.callType = O.Default;
            }
        }, {
            key: "onHide",
            value: function onHide() {}
        }, {
            key: "onShare",
            value: function onShare() {
                this.consomuHandler();
            }
        }, {
            key: "consomuHandler",
            value: function consomuHandler() {
                this.handler && this.handler.caller && this.handler.callback && (J.onTTGame() ? J.TT.showToast({
                    title: "分享完成",
                    icon: "none",
                    image: "",
                    duration: 2e3
                }) : c.Instance.show("分享完成"), J.Instance.setTaskType("share"), this.handler.callback.apply(this.handler.caller, [ this.handler.data ]), 
                this.handler = null);
            }
        }, {
            key: "getLastTaskType",
            value: function getLastTaskType() {
                var e = window.ystorage.getItem(o.LAST_CALL_TASK_TYPE);
                return e || (e = "adVideo", this.setTaskType(e)), this.supportedShare() || (e = "share"), 
                this.supportedVideoAd() || (e = "adVideo"), e;
            }
        }, {
            key: "setTaskType",
            value: function setTaskType(e) {
                window.ystorage.setItem(o.LAST_CALL_TASK_TYPE, e);
            }
        }, {
            key: "getHasWXVideoAd",
            value: function getHasWXVideoAd() {
                return this.videoAd && this.supportedVideoAd() || (this.hasVideoAd = !1), this.hasVideoAd;
            }
        }, {
            key: "showVideoAd",
            value: function showVideoAd(e) {
                var _this4 = this;
                if (J.onTTGame() && this.videoAd) {
                    if (this.videoAdPlaying) return void J.TT.showToast({
                        title: "视频载入中",
                        icon: "none",
                        image: "",
                        duration: 2e3
                    });
                    this.videoAdPlaying = !0, this.callType = O.VideoAd;
                    var _t29 = function _t29(a) {
                        _this4.videoAd.offClose(_t29), console.log("广告视频回调--\x3e" + JSON.stringify(a)), 
                        Zt.Instance.cancelPause(), null == a || null == a.isEnded || 1 == a.isEnded ? (console.log("广告视频成功"), 
                        J.Instance.videoAdPlaying = !1, J.Instance.setTaskType("adVideo"), e && (J.TT.showToast({
                            title: "任务完成",
                            icon: "none",
                            image: "",
                            duration: 2e3
                        }), e.callback.apply(e.caller, [ e.data ]), e = null), v.Instance.reportCompleteVideoAdEvent()) : (console.log("广告视频失败"), 
                        J.Instance.videoAdPlaying = !1, J.TT.showToast({
                            title: "提前关闭视频无法获得对应奖励",
                            icon: "none",
                            image: "",
                            duration: 3e3
                        }));
                    };
                    this.videoAd.onClose(_t29), this.videoAd.show().catch(function() {
                        _this4.videoAd.load().then(function() {
                            return _this4.videoAd.show();
                        }).catch(function(t) {
                            console.log("激励视频 广告显示失败"), _this4.hasVideoAd = !1, _this4.videoAdPlaying = !1, 
                            J.TT.showToast({
                                title: "视频广告出错",
                                icon: "none",
                                image: "",
                                duration: 3e3
                            }), e = null;
                        });
                    });
                } else c.Instance.show("激励视频广告完成"), J.Instance.setTaskType("adVideo"), e && (e.callback.apply(e.caller, [ e.data ]), 
                e = null);
            }
        }, {
            key: "updateUserProgress",
            value: function updateUserProgress(e) {
                if (J.onTTGame() && this.supportedRankList()) {
                    s.log("TT存储进度");
                    var t = new Array();
                    t.push({
                        key: "rankInfo",
                        value: String(JSON.stringify(e))
                    }), J.TT.setUserCloudStorage({
                        KVDataList: t,
                        success: function success(e) {
                            s.log("主域更新进度" + JSON.stringify(e));
                        },
                        fail: function fail(e) {
                            s.log("主域更新进度失败" + JSON.stringify(e));
                        }
                    });
                }
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return J.instance;
            }
        }, {
            key: "onTTGame",
            value: function onTTGame() {
                return !!Laya.Browser.onTTMiniGame;
            }
        }, {
            key: "TT",
            get: function get() {
                return J._TT;
            }
        }, {
            key: "virbrateShort",
            value: function virbrateShort() {
                J.onTTGame() && J.TT.vibrateShort();
            }
        }, {
            key: "triggerGC",
            value: function triggerGC() {
                Laya.Browser.onTTMiniGame && Laya.Browser.window.tt.triggerGC();
            }
        } ]);
        return J;
    }();
    J.instance = new J(), J.isAnonymousUser = !1, J._TT = window.tt;
    var Z = function Z() {
        _classCallCheck2(this, Z);
    };
    !function(e) {
        e[e.Share = 0] = "Share", e[e.VideoAd = 1] = "VideoAd", e[e.Default = 2] = "Default";
    }(V || (V = {}));
    var $ = /* */ function() {
        function $() {
            _classCallCheck2(this, $);
            this.open = !0, this.voiceState = "open", this.hasVideoAd = !0, this.videoAdPlaying = !1, 
            this.bannerAdCount = 0, this.bannerAdInitCount = 5, this.customGridAdClosed = !1, 
            this.systemInfo = {}, this.mInterstitialAdIsShowing = !1;
        }
        _createClass2($, [ {
            key: "init",
            value: function init() {
                var _this5 = this;
                this.callType = V.Default, Laya.Browser.onMiniGame && !J.onTTGame() && (this.systemInfo = wx.getSystemInfoSync(), 
                this.SDKVersion = this.systemInfo.SDKVersion, r.compareVersion(this.SDKVersion, "2.11.3") ? Laya.Browser.window.wx.showShareMenu({
                    withShareTicket: !0,
                    menus: [ "shareAppMessage", "shareTimeline" ]
                }) : Laya.Browser.window.wx.showShareMenu(), Laya.Browser.window.wx.uma.onShareAppMessage(function() {
                    return _this5.getShareInfo();
                }), Laya.Browser.window.wx.onShow(function(e) {
                    _this5.onShow();
                }), Laya.Browser.window.wx.onHide(function() {
                    _this5.onHide();
                }));
            }
        }, {
            key: "initAllAd",
            value: function initAllAd() {
                Laya.Browser.onMiniGame && !J.onTTGame() && (this.initVideoAd(), this.initBannerAd(), 
                this.initCustomGridAd(), this.initCustomMultiGridAd(), this.initInterstitialAd());
            }
        }, {
            key: "initCustomMultiGridAd",
            value: function initCustomMultiGridAd() {
                this.createCustomMultiGridAd();
            }
        }, {
            key: "createCustomMultiGridAd",
            value: function createCustomMultiGridAd() {
                Laya.Browser.onMiniGame && (this.customMultiGridAd = Laya.Browser.window.wx.createCustomAd({
                    adUnitId: "adunit-d38c02962a2d7a60",
                    adIntervals: 30,
                    style: {
                        left: 2,
                        top: this.systemInfo.screenHeight - 640
                    }
                }), this.customMultiGridAd.onError(function(e) {
                    switch (console.log("init customMultiGridAd fail !!!", e), e.errCode) {
                      case 1008:
                        console.log("customMultiGridAd 广告已关闭****");
                        break;

                      case 1006:
                      case 1007:
                        console.log("customMultiGridAd 广告组件被驳回****");
                        break;

                      case 1005:
                        console.log("customMultiGridAd 广告组件审核中****");
                        break;

                      case 1004:
                        console.log("customMultiGridAd 无适合的广告****");
                        break;

                      case 1003:
                        console.log("customMultiGridAd 内部错误****");
                        break;

                      case 1002:
                        console.log("customMultiGridAd 广告单元无效****");
                        break;

                      case 1001:
                        console.log("customMultiGridAd 参数错误****");
                        break;

                      case 1e3:
                        console.log("customMultiGridAd 后端错误调用失败****");
                        break;

                      case 2001:
                        console.log("customMultiGridAd 模板渲染错误****");
                        break;

                      case 2002:
                        console.log("customMultiGridAd 模板为空****");
                        break;

                      case 2003:
                        console.log("customMultiGridAd 模板解析失败****");
                        break;

                      case 2004:
                      case 2005:
                        console.log("customMultiGridAd 触发频率限制****");
                    }
                }), this.customMultiGridAd.onLoad(function() {
                    console.log("init customMultiGridAd ok!!!!!");
                }), this.customMultiGridAd.hide());
            }
        }, {
            key: "initCustomGridAd",
            value: function initCustomGridAd() {
                this.createCustomGridAd();
            }
        }, {
            key: "createCustomGridAd",
            value: function createCustomGridAd() {
                if (Laya.Browser.onMiniGame) {
                    var _e11 = this;
                    this.customGridAd && (this.customGridAd.destroy(), this.customGridAd = null), this.customGridAd = Laya.Browser.window.wx.createCustomAd({
                        adUnitId: "adunit-442f021a65f92511",
                        adIntervals: 30,
                        style: {
                            left: this.systemInfo.screenWidth - 74,
                            top: this.systemInfo.screenHeight - 240
                        }
                    }), this.customGridAd.onError(function(e) {
                        switch (console.log("init customGridAd fail !!!", e), e.errCode) {
                          case 1008:
                            console.log("customGridAd 广告已关闭****");
                            break;

                          case 1006:
                          case 1007:
                            console.log("customGridAd 广告组件被驳回****");
                            break;

                          case 1005:
                            console.log("customGridAd 广告组件审核中****");
                            break;

                          case 1004:
                            console.log("customGridAd 无适合的广告****");
                            break;

                          case 1003:
                            console.log("customGridAd 内部错误****");
                            break;

                          case 1002:
                            console.log("customGridAd 广告单元无效****");
                            break;

                          case 1001:
                            console.log("customGridAd 参数错误****");
                            break;

                          case 1e3:
                            console.log("customGridAd 后端错误调用失败****");
                            break;

                          case 2001:
                            console.log("customGridAd 模板渲染错误****");
                            break;

                          case 2002:
                            console.log("customGridAd 模板为空****");
                            break;

                          case 2003:
                            console.log("customGridAd 模板解析失败****");
                            break;

                          case 2004:
                          case 2005:
                            console.log("customGridAd 触发频率限制****");
                        }
                    }), this.customGridAd.onLoad(function() {
                        console.log("init customGridAd ok!!!!!");
                    }), this.customGridAd.onClose(function() {
                        _e11.customGridAdClosed = !0;
                    }), this.customGridAd.hide();
                }
            }
        }, {
            key: "initBannerAd",
            value: function initBannerAd() {
                if (this.bannerAdPool) for (var _e12 = 0; _e12 < this.bannerAdPool.length; _e12++) {
                    this.bannerAdPool[_e12] && this.bannerAdPool[_e12].destroy();
                }
                this.bannerAdPool = [], this.bannerAdOnLoaded = [], this.createBannerAds();
            }
        }, {
            key: "createBannerAds",
            value: function createBannerAds() {
                var _this6 = this;
                if (Laya.Browser.onMiniGame) {
                    var _t30 = this;
                    var e = Laya.Browser.window.wx.createBannerAd({
                        adUnitId: "adunit-13a7abf22feddba0",
                        adIntervals: 30,
                        style: {
                            left: (this.systemInfo.screenWidth - 350) / 2,
                            top: 0,
                            width: 350
                        }
                    });
                    this.bannerAdPool.push(e);
                    this.bannerAdPool.length;
                    e.onResize(function(t) {
                        console.log("广告尺寸", t), e.style.top = _this6.systemInfo.screenHeight - Math.floor(t.height);
                    }), e.onError(function(a) {
                        switch (console.log("init Banner fail !!!", a), a.errCode) {
                          case 1008:
                            console.log("banner 广告已关闭****");
                            break;

                          case 1006:
                          case 1007:
                            console.log("banner 广告组件被驳回****");
                            break;

                          case 1005:
                            console.log("banner 广告组件审核中****");
                            break;

                          case 1004:
                            console.log("banner 无适合的广告****");
                            break;

                          case 1003:
                            console.log("banner 内部错误****");
                            break;

                          case 1002:
                            console.log("banner 广告单元无效****");
                            break;

                          case 1001:
                            console.log("banner 参数错误****");
                            break;

                          case 1e3:
                            console.log("banner 后端错误调用失败****");
                        }
                        var i = _t30.bannerAdPool.findIndex(function(t) {
                            return t == e;
                        });
                        i >= 0 && (_t30.bannerAdOnLoaded[i] = !1);
                    }), e.onLoad(function() {
                        console.log("init Banner ok!!!!!");
                        var a = _t30.bannerAdPool.findIndex(function(t) {
                            return t == e;
                        });
                        a < 0 ? (console.log("init Banner ok!!!!! badIdx < 0 push bannerAd"), _t30.bannerAdPool.push(e), 
                        _t30.bannerAdOnLoaded[_t30.bannerAdPool.length - 1] = !0) : (console.log("init Banner ok!!!!! self.bannerAdOnLoaded[badIdx] = true"), 
                        _t30.bannerAdOnLoaded[a] = !0);
                    }), e.hide(), this.bannerAdPool.length < this.bannerAdInitCount - 1 && Laya.timer.once(1e4, _t30, _t30.createBannerAds);
                }
            }
        }, {
            key: "initInterstitialAd",
            value: function initInterstitialAd() {
                Laya.Browser.onMiniGame && (this.interstitialAd = Laya.Browser.window.wx.createInterstitialAd({
                    adUnitId: "adunit-898a04ed216462ad"
                }), this.interstitialAd.onError(function(e) {
                    console.log("show interstitial fail", JSON.stringify(e)), $.Instance.mInterstitialAdIsShowing = !1;
                }), this.interstitialAd.onClose(function() {
                    $.Instance.mInterstitialAdIsShowing = !1;
                }), this.interstitialAd.onLoad(function() {
                    $.Instance.mInterstitialAdIsShowing && $.Instance.interstitialAd.show();
                }));
            }
        }, {
            key: "showCustomMultiGridAd",
            value: function showCustomMultiGridAd() {
                Laya.Browser.onMiniGame && !J.onTTGame() && (this.customMultiGridAd ? this.customMultiGridAd.show() : (this.initCustomMultiGridAd(), 
                this.customMultiGridAd.show()));
            }
        }, {
            key: "hideCustomMultiGridAd",
            value: function hideCustomMultiGridAd() {
                this.customMultiGridAd && this.customMultiGridAd.hide();
            }
        }, {
            key: "showCustomGridAd",
            value: function showCustomGridAd() {
                Laya.Browser.onMiniGame && !J.onTTGame() && (this.customGridAd ? this.customGridAdClosed || this.customGridAd.show() : (this.initCustomGridAd(), 
                this.customGridAd.show()));
            }
        }, {
            key: "hideCustomGridAd",
            value: function hideCustomGridAd() {
                Laya.Browser.onMiniGame && !J.onTTGame() && this.customGridAd && this.customGridAd.hide();
            }
        }, {
            key: "showInterstitialAd",
            value: function showInterstitialAd() {
                Laya.Browser.onMiniGame && !J.onTTGame() && (console.log("showInterstitialAd***popInsertAd**************popInsertAd***********************"), 
                this.interstitialAd ? (this.mInterstitialAdIsShowing = !0, this.interstitialAd.load(), 
                this.interstitialAd.show()) : (this.initInterstitialAd(), this.mInterstitialAdIsShowing = !0, 
                this.interstitialAd.load(), this.interstitialAd.show()));
            }
        }, {
            key: "showBannerAd",
            value: function showBannerAd() {
                if (Laya.Browser.onMiniGame && !J.onTTGame()) {
                    if (this.bannerAdPool.length <= 0) this.createBannerAds(); else {
                        var _e13 = this.bannerAdCount % this.bannerAdPool.length;
                        if (this.bannerAd && this.bannerAd.hide(), this.bannerAd = this.bannerAdPool[_e13], 
                        !this.bannerAdOnLoaded[_e13]) return this.bannerAdCount++, void this.showBannerAd();
                        this.bannerAd.show(), this.bannerAdCount++;
                    }
                    Laya.timer.once(15e3, this, this.showBannerAd);
                } else Laya.Browser.onQGMiniGame ? Y.Instance.showBannerAd() : Laya.Browser.onVVMiniGame && Q.Instance.showBannerAd();
            }
        }, {
            key: "hideBannerAd",
            value: function hideBannerAd() {
                Laya.Browser.onMiniGame && !J.onTTGame() ? (this.bannerAd && this.bannerAd.hide(), 
                Laya.timer.clear(this, this.showBannerAd)) : Laya.Browser.onQGMiniGame ? Y.Instance.hideBannerAd() : Laya.Browser.onVVMiniGame && Q.Instance.hideBannerAd();
            }
        }, {
            key: "initVideoAd",
            value: function initVideoAd() {
                Laya.Browser.onMiniGame && (this.videoAd = Laya.Browser.window.wx.createRewardedVideoAd({
                    adUnitId: "adunit-357963ffaea0561c"
                }), this.videoAd.onError(function(e) {
                    console.log("检测有无视频--\x3e没有"), $.Instance.hasVideoAd = !1, $.Instance.videoAdPlaying = !1;
                }));
            }
        }, {
            key: "getLastTaskType",
            value: function getLastTaskType() {
                var e = window.ystorage.getItem(o.LAST_CALL_TASK_TYPE);
                return e || (e = "adVideo", this.setTaskType(e)), e;
            }
        }, {
            key: "setTaskType",
            value: function setTaskType(e) {
                window.ystorage.setItem(o.LAST_CALL_TASK_TYPE, e);
            }
        }, {
            key: "getHasWXVideoAd",
            value: function getHasWXVideoAd() {
                return this.hasVideoAd;
            }
        }, {
            key: "showVideoAd",
            value: function showVideoAd(t) {
                console.log("showVideoAd");
               
				my.r(() => {
				t && (t.callback.apply(t.caller, [ t.data ]), t = null)
				});
            }
        }, {
            key: "updateUserProgress",
            value: function updateUserProgress(e) {
                if (Laya.Browser.onQQMiniGame && !J.onTTGame()) s.log("QQ存储进度"), (t = new Array()).push({
                    key: "rankInfo",
                    value: String(JSON.stringify(e))
                }), Laya.Browser.window.qq.setUserCloudStorage({
                    KVDataList: t,
                    success: function success(e) {
                        s.log("QQ主域更新进度" + JSON.stringify(e));
                    },
                    fail: function fail(e) {
                        s.log("QQ主域更新进度失败" + JSON.stringify(e));
                    }
                }); else if (Laya.Browser.onMiniGame) {
                    var t;
                    s.log("存储进度"), (t = new Array()).push({
                        key: "rankInfo",
                        value: String(JSON.stringify(e))
                    }), Laya.Browser.window.wx.setUserCloudStorage({
                        KVDataList: t,
                        success: function success(e) {
                            s.log("主域更新进度" + JSON.stringify(e));
                        },
                        fail: function fail(e) {
                            s.log("主域更新进度失败" + JSON.stringify(e));
                        }
                    });
                } else J.onTTGame() && J.Instance.updateUserProgress(e);
            }
        }, {
            key: "share",
            value: function share(e) {
                this.handler = e, Laya.Browser.onMiniGame ? (this.callType = V.Share, this.goShareTime = new Date(), 
                Laya.Browser.window.wx.uma.shareAppMessage(this.getShareInfo())) : this.onShare();
            }
        }, {
            key: "onShare",
            value: function onShare() {
                this.consomuHandler();
            }
        }, {
            key: "consomuHandler",
            value: function consomuHandler() {
                this.handler && (Zt.Instance.cancelPause(), this.handler.caller && this.handler.callback && (Laya.Browser.onMiniGame && Laya.Browser.window.wx.showToast({
                    title: "分享完成",
                    icon: "none",
                    image: "",
                    duration: 2e3
                }), $.Instance.setTaskType("share"), this.handler.callback.apply(this.handler.caller, [ this.handler.data ]), 
                this.handler = null));
            }
        }, {
            key: "getShareInfo",
            value: function getShareInfo() {
                var e = "我要喂河马", t = "", a = "QvpiBOzcQJCP3h46Qhhmhw==";
                if (l.shareInfoArray && l.shareInfoArray.length > 0) {
                    var i, n = 0;
                    i = l.shareInfoArray.length, (n = Math.floor(Math.random() * i)) >= l.shareInfoArray.length ? n = l.shareInfoArray.length - 1 : n < 0 && (n = 0), 
                    e = l.shareInfoArray[n].title, t = l.shareInfoArray[n].imageUrl, a = l.shareInfoArray[n].imageId;
                }
                return {
                    title: e,
                    imageUrl: t,
                    imageUrlId: a
                };
            }
        }, {
            key: "onShow",
            value: function onShow() {
                switch (this.callType) {
                  case V.Share:
                    if (this.goShareTime) {
                        var e = (new Date().getTime() - this.goShareTime.getTime()) / 1e3;
                        e > 1 && e < 120 ? this.onShare() : (Laya.Browser.onMiniGame ? Laya.Browser.window.wx.showToast({
                            title: "分享失败",
                            icon: "none",
                            image: "",
                            duration: 2e3
                        }) : c.Instance.show("分享失败"), this.handler = null), this.goShareTime = null;
                    }
                    Zt.Instance.cancelPause();
                }
                this.callType = V.Default;
            }
        }, {
            key: "onHide",
            value: function onHide() {}
        }, {
            key: "createGameClubButton",
            value: function createGameClubButton() {
                if (Laya.Browser.onMiniGame && !Laya.Browser.onQQMiniGame && !Laya.Browser.onTTMiniGame) {
                    var _e14 = 1080 / window.innerWidth, _t31 = 156 / _e14, _a22 = 171 / _e14, _i11 = window.innerWidth - _t31 - 24 / _e14, _n5 = (sa.Instance.statusBarHeight + 150 + 390 + 20) / _e14;
                    this.GameClubButton = Laya.Browser.window.wx.createGameClubButton({
                        type: "image",
                        image: "",
                        style: {
                            left: _i11,
                            top: _n5,
                            width: _t31,
                            height: _a22
                        }
                    }), this.hideGameClubButton();
                }
            }
        }, {
            key: "showGameClubButton",
            value: function showGameClubButton() {
                this.GameClubButton && this.GameClubButton.show();
            }
        }, {
            key: "hideGameClubButton",
            value: function hideGameClubButton() {
                this.GameClubButton && this.GameClubButton.hide();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return $.instance;
            }
        }, {
            key: "openMiniGame",
            value: function openMiniGame(e) {
                if (Laya.Browser.onMiniGame && l.exportAppAdArray && l.exportAppAdArray.length > 0) {
                    e < 0 ? e = 0 : e > l.exportAppAdArray.length - 1 && (e = l.exportAppAdArray.length - 1);
                    var t = l.exportAppAdArray[e];
                    t && Laya.Browser.window.wx.navigateToMiniProgram({
                        appId: t.appid,
                        path: t.path,
                        envVersion: "release",
                        success: function success(e) {
                            console.log("跳转成功" + JSON.stringify(e));
                        },
                        fail: function fail(e) {
                            Laya.Browser.window.wx.showToast({
                                title: "跳转失败",
                                icon: "none",
                                image: "",
                                duration: 2e3
                            }), console.log("跳转失败" + JSON.stringify(e));
                        }
                    });
                }
            }
        }, {
            key: "goZTO",
            value: function goZTO() {
                Laya.Browser.onMiniGame && Laya.Browser.window.wx.navigateToMiniProgram({
                    appId: "wx7ddec43d9d27276a",
                    path: "",
                    envVersion: "release",
                    success: function success(e) {
                        console.log("跳转成功" + JSON.stringify(e));
                    },
                    fail: function fail(e) {
                        Laya.Browser.window.wx.showToast({
                            title: "跳转失败",
                            icon: "none",
                            image: "",
                            duration: 2e3
                        }), console.log("跳转失败" + JSON.stringify(e));
                    }
                });
            }
        }, {
            key: "virbrateShort",
            value: function virbrateShort() {
                Laya.Browser.onMiniGame && Laya.Browser.window.wx.vibrateShort({
                    type: "light"
                });
            }
        }, {
            key: "requestSubscribeMessage",
            value: function requestSubscribeMessage(e) {
                Laya.Browser.onQQMiniGame ? Laya.Browser.window.qq.subscribeAppMsg(e) : Laya.Browser.onMiniGame && Laya.Browser.window.wx.requestSubscribeMessage(e);
            }
        }, {
            key: "triggerGC",
            value: function triggerGC() {
                Laya.Browser.onMiniGame && Laya.Browser.window.wx.triggerGC();
            }
        } ]);
        return $;
    }();
    $.instance = new $();
    var ee = function ee() {
        _classCallCheck2(this, ee);
    };
    !function(e) {
        e[e.Share = 0] = "Share", e[e.VideoAd = 1] = "VideoAd", e[e.Default = 2] = "Default";
    }(G || (G = {}));
    var te = /* */ function() {
        function te() {
            _classCallCheck2(this, te);
            this.open = !0, this.voiceState = "open", this.hasVideoAd = !0, this.videoAdPlaying = !1, 
            this.systemInfo = {};
        }
        _createClass2(te, [ {
            key: "init",
            value: function init() {
                var _this7 = this;
                this.callType = G.Default, Laya.Browser.onQQMiniGame && (this.systemInfo = Laya.Browser.window.qq.getSystemInfoSync(), 
                Laya.Browser.window.qq.showShareMenu(), Laya.Browser.window.qq.onShareAppMessage(function() {
                    return _this7.getShareInfo();
                }), Laya.Browser.window.qq.onShow(function(e) {
                    _this7.onShow();
                }), Laya.Browser.window.qq.onHide(function() {
                    _this7.onHide();
                }));
            }
        }, {
            key: "initAllAd",
            value: function initAllAd() {
                Laya.Browser.onQQMiniGame && (this.initVideoAd(), this.initBannerAd());
            }
        }, {
            key: "initInterstitialAd",
            value: function initInterstitialAd() {
                Laya.Browser.onQQMiniGame && (this.interstitialAd = Laya.Browser.window.wx.createInterstitialAd({
                    adUnitId: "adunit-f4397e8dcc385c77"
                }), this.interstitialAd.onError(function(e) {
                    console.log("show interstitial fail", JSON.stringify(e));
                }));
            }
        }, {
            key: "showInterstitialAd",
            value: function showInterstitialAd() {
                Laya.Browser.onQQMiniGame && this.interstitialAd && this.interstitialAd.show();
            }
        }, {
            key: "initBannerAd",
            value: function initBannerAd() {
                if (Laya.Browser.onQQMiniGame) {
                    var _e15 = this;
                    this.bannerAd = Laya.Browser.window.qq.createBannerAd({
                        adUnitId: "f5ee89c422c2904d91f71062d5ec0877",
                        adIntervals: 30,
                        style: {
                            left: (this.systemInfo.screenWidth - 350) / 2,
                            top: _e15.systemInfo.screenHeight - 85,
                            width: 350,
                            height: 85
                        }
                    }), this.bannerAd.onResize(function(t) {
                        console.log("广告尺寸", t), _e15.bannerAd.style.top = _e15.systemInfo.screenHeight - Math.floor(t.height);
                    }), this.bannerAd.onError(function(e) {
                        console.log("init Banner fail !!!", e), 1008 === e.errCode && console.log("banner 广告已关闭");
                    }), this.bannerAd.hide();
                }
            }
        }, {
            key: "showBannerAd",
            value: function showBannerAd() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                if (Laya.Browser.onQQMiniGame) if (this.bannerAd) {
                    if (Laya.Browser.onIOS) {
                        if (e) this.bannerAd.show(); else {
                            var _e16 = this.bannerAd;
                            this.bannerAd = null, _e16.destroy(), this.initBannerAd(), Laya.timer.once(500, this.bannerAd, this.bannerAd.show);
                        }
                    } else this.bannerAd.show();
                } else this.initBannerAd(), this.bannerAd.show();
            }
        }, {
            key: "hideBannerAd",
            value: function hideBannerAd() {
                Laya.Browser.onQQMiniGame && this.bannerAd && this.bannerAd.hide();
            }
        }, {
            key: "showCustomMultiGridAd",
            value: function showCustomMultiGridAd() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                Laya.Browser.onQQMiniGame;
            }
        }, {
            key: "hideCustomMultiGridAd",
            value: function hideCustomMultiGridAd() {}
        }, {
            key: "showCustomGridAd",
            value: function showCustomGridAd() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                Laya.Browser.onQQMiniGame;
            }
        }, {
            key: "hideCustomGridAd",
            value: function hideCustomGridAd() {
                Laya.Browser.onQQMiniGame;
            }
        }, {
            key: "initVideoAd",
            value: function initVideoAd() {
                if (Laya.Browser.onQQMiniGame) {
                    this.videoAd = Laya.Browser.window.qq.createRewardedVideoAd({
                        adUnitId: "f707854be5cdfe00e7f9f30a12583287"
                    });
                    var _e17 = this;
                    this.videoAd.onError(function(t) {
                        console.log("检测有无视频--\x3e没有" + JSON.stringify(t)), _e17.hasVideoAd = !1;
                    });
                }
            }
        }, {
            key: "getLastTaskType",
            value: function getLastTaskType() {
                var e = window.ystorage.getItem(o.LAST_CALL_TASK_TYPE);
                return e || (e = "adVideo", this.setTaskType(e)), e;
            }
        }, {
            key: "setTaskType",
            value: function setTaskType(e) {
                window.ystorage.setItem(o.LAST_CALL_TASK_TYPE, e);
            }
        }, {
            key: "getHasQQVideoAd",
            value: function getHasQQVideoAd() {
                return this.hasVideoAd;
            }
        }, {
            key: "showVideoAd",
            value: function showVideoAd(e) {
                if (Laya.Browser.onQQMiniGame) {
                    if (this.videoAdPlaying) return void Laya.Browser.window.qq.showToast({
                        title: "视频载入中",
                        icon: "none",
                        image: "",
                        duration: 2e3
                    });
                    var _t32 = this;
                    this.videoAdPlaying = !0, this.callType = G.VideoAd;
                    var _a23 = function _a23(i) {
                        _t32.videoAd.offClose(_a23), console.log("广告视频回调--\x3e" + JSON.stringify(i)), null == i || null == i.isEnded || 1 == i.isEnded ? (console.log("广告视频成功"), 
                        te.Instance.videoAdPlaying = !1, te.Instance.setTaskType("adVideo"), e && (Laya.Browser.window.qq.showToast({
                            title: "任务完成",
                            icon: "none",
                            image: "",
                            duration: 2e3
                        }), e.callback.apply(e.caller, [ e.data ]), e = null), v.Instance.reportCompleteVideoAdEvent()) : (console.log("广告视频失败"), 
                        te.Instance.videoAdPlaying = !1, Laya.Browser.window.qq.showToast({
                            title: "提前关闭视频无法获得对应奖励",
                            icon: "none",
                            image: "",
                            duration: 3e3
                        }));
                    };
                    this.videoAd.onClose(_a23), this.videoAd.show().catch(function() {
                        _t32.videoAd.load().then(function() {
                            return _t32.videoAd.show();
                        }).catch(function(a) {
                            console.log("激励视频 广告显示失败"), _t32.hasVideoAd = !1, _t32.videoAdPlaying = !1, Laya.Browser.window.qq.showToast({
                                title: "视频广告出错",
                                icon: "none",
                                image: "",
                                duration: 3e3
                            }), e = null;
                        });
                    });
                } else c.Instance.show("激励视频广告完成"), te.Instance.setTaskType("adVideo"), e && (e.callback.apply(e.caller, [ e.data ]), 
                e = null);
            }
        }, {
            key: "share",
            value: function share(e) {
                this.handler = e, Laya.Browser.onQQMiniGame ? (this.callType = G.Share, this.goShareTime = new Date(), 
                Laya.Browser.window.qq.shareAppMessage(this.getShareInfo())) : this.onShareSuccess();
            }
        }, {
            key: "onShareConsume",
            value: function onShareConsume() {
                this.consomuHandler();
            }
        }, {
            key: "consomuHandler",
            value: function consomuHandler() {
                this.handler && (this.handler.caller && this.handler.callback && (Laya.Browser.onQQMiniGame ? Laya.Browser.window.qq.showToast({
                    title: "分享完成",
                    icon: "none",
                    image: "",
                    duration: 2e3
                }) : c.Instance.show("分享完成"), te.Instance.setTaskType("share"), this.handler.callback.apply(this.handler.caller, [ this.handler.data ])), 
                this.handler = null);
            }
        }, {
            key: "getShareInfo",
            value: function getShareInfo() {
                var e = "我要造车", t = "", a = "+9FKzcMmTc+i5hCdJSqQRQ==";
                if (l.shareInfoArray && l.shareInfoArray.length > 0) {
                    var i, n = 0;
                    i = l.shareInfoArray.length, (n = Math.floor(Math.random() * i)) >= l.shareInfoArray.length ? n = l.shareInfoArray.length - 1 : n < 0 && (n = 0), 
                    e = l.shareInfoArray[n].title, t = l.shareInfoArray[n].imageUrl, a = l.shareInfoArray[n].imageId;
                }
                return {
                    title: e,
                    imageUrl: t,
                    imageUrlId: a
                };
            }
        }, {
            key: "onFalseShareSuccess",
            value: function onFalseShareSuccess() {}
        }, {
            key: "onShareSuccess",
            value: function onShareSuccess() {
                te.Instance.onShareConsume();
            }
        }, {
            key: "onShareComplete",
            value: function onShareComplete() {
                s.log("onShareComplete");
            }
        }, {
            key: "onShareFail",
            value: function onShareFail() {
                this.handler = null;
            }
        }, {
            key: "onShow",
            value: function onShow() {
                switch (this.callType) {
                  case G.Share:
                    if (this.goShareTime) {
                        var e = (new Date().getTime() - this.goShareTime.getTime()) / 1e3;
                        e > 2 && e < 120 ? this.onShareSuccess() : (Laya.Browser.onQQMiniGame ? Laya.Browser.window.qq.showToast({
                            title: "分享失败",
                            icon: "none",
                            image: "",
                            duration: 2e3
                        }) : c.Instance.show("分享失败"), this.handler = null), this.goShareTime = null;
                    }
                }
                this.callType = G.Default;
            }
        }, {
            key: "onHide",
            value: function onHide() {}
        } ], [ {
            key: "Instance",
            get: function get() {
                return te.instance;
            }
        }, {
            key: "openMiniGame",
            value: function openMiniGame(e) {
                if (Laya.Browser.onQQMiniGame && l.exportAppAdArray && l.exportAppAdArray.length > 0) {
                    e < 0 ? e = 0 : e > l.exportAppAdArray.length - 1 && (e = l.exportAppAdArray.length - 1);
                    var t = l.exportAppAdArray[e];
                    t && Laya.Browser.window.qq.navigateToMiniProgram({
                        appId: t.appid,
                        path: t.path,
                        envVersion: "release",
                        success: function success(e) {
                            console.log("跳转成功" + JSON.stringify(e));
                        },
                        fail: function fail(e) {
                            Laya.Browser.window.qq.showToast({
                                title: "跳转失败",
                                icon: "none",
                                image: "",
                                duration: 2e3
                            }), console.log("跳转失败" + JSON.stringify(e));
                        }
                    });
                }
            }
        }, {
            key: "virbrateShort",
            value: function virbrateShort() {
                Laya.Browser.onQQMiniGame && Laya.Browser.window.qq.vibrateShort();
            }
        } ]);
        return te;
    }();
    te.instance = new te();
    var ae = function ae() {
        _classCallCheck2(this, ae);
    };
    var ie = /* */ function() {
        function ie() {
            _classCallCheck2(this, ie);
        }
        _createClass2(ie, null, [ {
            key: "playMusic",
            value: function playMusic(e, t, a) {
                Laya.Browser.onMiniGame && (ie.innerAudioContext ? (ie.innerAudioContext.stop(), 
                ie.clearListener(), ie.innerAudioContext.destroy(), ie.innerAudioContext = null, 
                console.log("play new music:" + t), ie.innerAudioContext = Laya.Browser.window.wx.createInnerAudioContext(), 
                ie.registeListener(), ie.innerAudioContext.src = e, ie.innerAudioContext.startTime = t, 
                ie.innerAudioContext.loop = a, ie.innerAudioContext.play()) : (console.log("first time play music"), 
                ie.innerAudioContext = Laya.Browser.window.wx.createInnerAudioContext(), ie.registeListener(), 
                ie.innerAudioContext.src = e, ie.innerAudioContext.startTime = t, ie.innerAudioContext.loop = a, 
                ie.innerAudioContext.play()));
            }
        }, {
            key: "getCurrentTime",
            value: function getCurrentTime() {
                return ie.innerAudioContext ? ie.innerAudioContext.currentTime : 0;
            }
        }, {
            key: "registeListener",
            value: function registeListener() {
                ie.innerAudioContext.onPlay(ie.onPlay), ie.innerAudioContext.onError(ie.onError);
            }
        }, {
            key: "clearListener",
            value: function clearListener() {
                ie.innerAudioContext.offPlay(ie.onPlay), ie.innerAudioContext.offError(ie.onError);
            }
        }, {
            key: "onPlay",
            value: function onPlay(e) {
                ie.innerAudioContext && console.log("onPlay:" + ie.innerAudioContext.currentTime);
            }
        }, {
            key: "onError",
            value: function onError(e) {
                console.log(e.errMsg), console.log(e.errCode);
            }
        }, {
            key: "onSeeked",
            value: function onSeeked(e) {
                ie.innerAudioContext.currentTime && console.log("onseek:" + ie.innerAudioContext.currentTime);
            }
        }, {
            key: "stopMusic",
            value: function stopMusic() {
                Laya.Browser.onMiniGame && ie.innerAudioContext && ie.innerAudioContext.stop();
            }
        } ]);
        return ie;
    }();
    !function(e) {
        e[e.Share = 0] = "Share", e[e.VideoAd = 1] = "VideoAd", e[e.Default = 2] = "Default";
    }(N || (N = {}));
    var ne = /* */ function() {
        function ne() {
            _classCallCheck2(this, ne);
        }
        _createClass2(ne, [ {
            key: "init",
            value: function init() {}
        }, {
            key: "getBridge",
            value: function getBridge() {
                return this.bridge;
            }
        }, {
            key: "showVideoAd",
            value: function showVideoAd(t) {
                if (!Laya.Browser.onMiniGame && Laya.Browser.onAndroid && this.bridge) {
                    console.log("JS内调用安卓播放激励视频");
                    var _a24 = {
                        operation: "showVideo"
                    };
                    ne.Instance.bridge.callWithBack(function(a) {
                        console.log("JS内收到安卓播放激励视频回调:" + a);
                        var i = JSON.parse(a);
                        i.result && "completed" == i.result ? t && (c.Instance.show("任务完成"), t.callback.apply(t.caller, [ t.data ]), 
                        t = null) : (console.log("激励视频 广告显示失败"), this.hasVideoAd = !1, this.videoAdPlaying = !1, 
                        c.Instance.show("视频广告出错"), t = null, Laya.stage.event(e.SET_GAME_STATE, _.PLAYING));
                    }, "showVideoAd", JSON.stringify(_a24));
                }
            }
        }, {
            key: "showBanner",
            value: function showBanner() {
                !Laya.Browser.onMiniGame && Laya.Browser.onAndroid && this.bridge && ne.Instance.bridge.call("showBanner");
            }
        }, {
            key: "hideBanner",
            value: function hideBanner() {
                !Laya.Browser.onMiniGame && Laya.Browser.onAndroid && this.bridge && ne.Instance.bridge.call("hideBanner");
            }
        }, {
            key: "showInterstitialAd",
            value: function showInterstitialAd() {
                !Laya.Browser.onMiniGame && Laya.Browser.onAndroid && this.bridge && ne.Instance.bridge.call("showInterstitialAd");
            }
        }, {
            key: "hideInterstitialAd",
            value: function hideInterstitialAd() {
                !Laya.Browser.onMiniGame && Laya.Browser.onAndroid && this.bridge && ne.Instance.bridge.call("hideInterstitialAd");
            }
        }, {
            key: "isAgreedAgreement",
            value: function isAgreedAgreement() {
                var e = window.ystorage.getItem(o.AGREE_AGREEMENT);
                return !(!e || "yes" != e);
            }
        }, {
            key: "agreeAgrement",
            value: function agreeAgrement() {
                window.ystorage.setItem(o.AGREE_AGREEMENT, "yes");
            }
        }, {
            key: "exitGame",
            value: function exitGame() {
                !Laya.Browser.onMiniGame && Laya.Browser.onAndroid && ne.Instance.bridge && ne.Instance.bridge.call("exitGame");
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return ne.mInstance;
            }
        }, {
            key: "onAndroid",
            get: function get() {
                return Laya.Browser.onAndroid && !Laya.Browser.onMiniGame && !Laya.Browser.onQGMiniGame && !Laya.Browser.onVVMiniGame && !Laya.Browser.onQQMiniGame;
            }
        }, {
            key: "virbrateShort",
            value: function virbrateShort() {
                !Laya.Browser.onMiniGame && Laya.Browser.onAndroid && ne.Instance.bridge && ne.Instance.bridge.call("vibrate");
            }
        } ]);
        return ne;
    }();
    ne.mInstance = new ne();
    var oe = /* */ function() {
        function oe() {
            _classCallCheck2(this, oe);
            this.musicOpen = !0, this.soundOpen = !0, this.virbrateOpen = !0, this.suffix = ".mp3", 
            this.lastOnRoundSoundTime = 0, this.lastUseGoldCoinTime = 0, this.lastAnimalOnHitSoundTime = 0, 
            this.animalOnHitCount = 0, this.lastVirdrateTime = 0;
        }
        _createClass2(oe, [ {
            key: "preInit",
            value: function preInit() {}
        }, {
            key: "init",
            value: function init() {
                this.preInit(), this.musicOpen = "open" == this.getVoiceState(), this.virbrateOpen = "open" == this.getVirbrateState(), 
                this.soundOpen = "open" == this.getSoundState(), Laya.Browser.onMiniGame ? Laya.Browser.window.wx.onShow(function(e) {
                    s.log("onshow"), oe.Instance.playBgMusic();
                }) : !Laya.Browser.onMiniGame && Laya.Browser.onAndroid;
            }
        }, {
            key: "musicIsOpen",
            get: function get() {
                return this.musicOpen;
            }
        }, {
            key: "soundIsOpen",
            get: function get() {
                return this.soundOpen;
            }
        }, {
            key: "virbrateIsOpen",
            get: function get() {
                return this.virbrateOpen;
            }
        }, {
            key: "switchMusicState",
            value: function switchMusicState() {
                this.musicOpen = !this.musicOpen, this.musicIsOpen ? this.playBgMusic() : this.close();
                var e = this.musicOpen ? "open" : "close";
                this.setVoiceState(e);
            }
        }, {
            key: "switchSoundState",
            value: function switchSoundState() {
                this.soundOpen = !this.soundOpen;
                var e = this.soundOpen ? "open" : "close";
                this.setSoundState(e);
            }
        }, {
            key: "switchVirbrateState",
            value: function switchVirbrateState() {
                this.virbrateOpen = !this.virbrateOpen;
                var e = this.virbrateOpen ? "open" : "close";
                this.setVirbrateState(e);
            }
        }, {
            key: "close",
            value: function close() {
                Laya.SoundManager.stopAll(), Laya.Browser.onMiniGame && ie.stopMusic();
            }
        }, {
            key: "StopAll",
            value: function StopAll() {
                this.close();
            }
        }, {
            key: "StopMusic",
            value: function StopMusic() {
                Laya.Browser.onMiniGame ? ie.stopMusic() : this.musicChannel = null;
            }
        }, {
            key: "playBgMusic",
            value: function playBgMusic() {
                if (this.musicOpen) {
                    Laya.SoundManager.useAudioMusic = false;
                    var _e18 = l.audioResourceSrcPath + "bgm" + this.suffix;
                    Laya.Browser.onMiniGame ? ie.playMusic(_e18, 0, !0) : this.musicChannel = Laya.SoundManager.playMusic(_e18, 0);
                }
            }
        }, {
            key: "playButtonClickSound",
            value: function playButtonClickSound() {
                this.soundIsOpen && Laya.SoundManager.playSound(l.audioResourceSrcPath + "btn_click" + this.suffix, 1);
            }
        }, {
            key: "playDogBarkSound",
            value: function playDogBarkSound() {
                this.musicOpen && Laya.SoundManager.playSound(l.audioResourceSrcPath + "dog" + this.suffix, 1);
            }
        }, {
            key: "playCollectHoneySound",
            value: function playCollectHoneySound() {
                this.soundIsOpen && Laya.SoundManager.playSound(l.audioResourceSrcPath + "collect_honey" + this.suffix, 1);
            }
        }, {
            key: "playRotateAttackSound",
            value: function playRotateAttackSound() {
                this.soundIsOpen && (this.rotateSound ? this.rotateSound.play() : this.rotateSound = Laya.SoundManager.playSound(l.audioResourceSrcPath + "kanshu" + this.suffix, 0));
            }
        }, {
            key: "stopRotateAttackSound",
            value: function stopRotateAttackSound() {
                this.rotateSound && this.rotateSound && this.rotateSound.pause();
            }
        }, {
            key: "playAnimalOnRoundSound",
            value: function playAnimalOnRoundSound() {
                if (this.soundIsOpen) {
                    var _e19 = r.getNowTimestamp();
                    if (_e19 - this.lastOnRoundSoundTime < 100) return;
                    this.lastOnRoundSoundTime = _e19, Laya.SoundManager.playSound(l.audioResourceSrcPath + "luodi" + this.suffix, 1);
                }
            }
        }, {
            key: "playFeedSound",
            value: function playFeedSound() {
                this.soundIsOpen && Laya.SoundManager.playSound(l.audioResourceSrcPath + "weishi" + this.suffix, 1);
            }
        }, {
            key: "playAttackSound",
            value: function playAttackSound() {
                this.soundIsOpen && Laya.SoundManager.playSound(l.audioResourceSrcPath + "pugong" + this.suffix, 1);
            }
        }, {
            key: "playOnHit",
            value: function playOnHit() {
                this.virbrateShort();
            }
        }, {
            key: "playUseGoldCoinSound",
            value: function playUseGoldCoinSound() {
                if (this.virbrateShort(), this.soundIsOpen) {
                    var _e20 = r.getNowTimestamp();
                    if (_e20 - this.lastUseGoldCoinTime < 610) return;
                    this.lastUseGoldCoinTime = _e20, Laya.SoundManager.playSound(l.audioResourceSrcPath + "use_gold_coin" + this.suffix, 1);
                }
            }
        }, {
            key: "playUnlockBlockSound",
            value: function playUnlockBlockSound() {
                this.soundIsOpen && Laya.SoundManager.playSound(l.audioResourceSrcPath + "unlock_block" + this.suffix, 1);
            }
        }, {
            key: "playGoldCoinSound",
            value: function playGoldCoinSound() {
                this.soundIsOpen && Laya.SoundManager.playSound(l.audioResourceSrcPath + "gold_coin" + this.suffix, 1);
            }
        }, {
            key: "playAnimalOnHit",
            value: function playAnimalOnHit() {
                if (this.virbrateShort(), this.soundIsOpen) {
                    var _e21 = r.getNowTimestamp();
                    if (_e21 - this.lastAnimalOnHitSoundTime >= 300) this.lastAnimalOnHitSoundTime = _e21, 
                    this.animalOnHitCount = 0; else if (this.animalOnHitCount >= 3) {
                        if (_e21 - this.lastAnimalOnHitSoundTime < 300) return;
                        this.lastAnimalOnHitSoundTime = _e21, this.animalOnHitCount = 0;
                    }
                    this.animalOnHitCount++, Laya.timer.once(50 * this.animalOnHitCount, this, function() {
                        Laya.SoundManager.playSound(l.audioResourceSrcPath + "animal_on_hit" + this.suffix, 1);
                    });
                }
            }
        }, {
            key: "getVoiceState",
            value: function getVoiceState() {
                var e = window.ystorage.getItem(o.VOICE_STATE);
                return e || (e = "open", this.setVoiceState(e)), e;
            }
        }, {
            key: "setVoiceState",
            value: function setVoiceState(e) {
                window.ystorage.setItem(o.VOICE_STATE, e);
            }
        }, {
            key: "getSoundState",
            value: function getSoundState() {
                var e = window.ystorage.getItem(o.SOUND_STATE);
                return e || (e = "open", this.setSoundState(e)), e;
            }
        }, {
            key: "setSoundState",
            value: function setSoundState(e) {
                window.ystorage.setItem(o.SOUND_STATE, e);
            }
        }, {
            key: "getVirbrateState",
            value: function getVirbrateState() {
                var e = window.ystorage.getItem(o.VIRBRATE_STATE);
                return e || (e = "open", this.setVirbrateState(e)), e;
            }
        }, {
            key: "setVirbrateState",
            value: function setVirbrateState(e) {
                window.ystorage.setItem(o.VIRBRATE_STATE, e);
            }
        }, {
            key: "virbrateShort",
            value: function virbrateShort() {
                if (this.virbrateIsOpen) {
                    var _e22 = r.getNowTimestamp();
                    if (_e22 - this.lastVirdrateTime < 333) return;
                    this.lastVirdrateTime = _e22, Laya.Browser.onTTMiniGame ? J.virbrateShort() : Laya.Browser.onQQMiniGame ? te.virbrateShort() : Laya.Browser.onMiniGame ? $.virbrateShort() : Laya.Browser.onQGMiniGame || Laya.Browser.onVVMiniGame ? Y.virbrateShort() : !Laya.Browser.onMiniGame && Laya.Browser.onAndroid && ne.virbrateShort();
                }
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return oe.mInstance;
            }
        } ]);
        return oe;
    }();
    oe.mInstance = new oe(), oe.isPlaying = !0;
    var se = /* */ function(_Laya$Script3D) {
        _inherits2(se, _Laya$Script3D);
        var _super = _createSuper2(se);
        function se() {
            var _this8;
            _classCallCheck2(this, se);
            _this8 = _super.apply(this, arguments), _this8.state = 0, _this8.goldViewTitleFontSize = 75, 
            _this8.goldViewAmountFontSize = 75, _this8.blockViewAmountFontSize = 75, _this8.consumeGoldCount = 0, 
            _this8.noMouneyCount = 0;
            return _this8;
        }
        _createClass2(se, [ {
            key: "onAwake",
            value: function onAwake() {
                Laya.Browser.onIOS && (this.goldViewTitleFontSize = Math.round(.9 * this.goldViewTitleFontSize), 
                this.goldViewAmountFontSize = Math.round(.9 * this.goldViewAmountFontSize), this.blockViewAmountFontSize = Math.round(.9 * this.blockViewAmountFontSize)), 
                this.config.type != i.SimpleHorizontalBridge && this.config.type != i.SimpleVerticalBridge || this.config.Key != Zt.Instance.SceneSwitchFirstBridgeKey && (this.gameObject.transform.localRotationEulerY = 90), 
                this.BlockView = this.gameObject.getChildByName("model").getChildByName("BlockView"), 
                this.GoldView = this.gameObject.getChildByName("model").getChildByName("GoldView"), 
                this.GoldCoin = this.GoldView.getChildByName("coin"), this.collider = this.gameObject.getComponent(Laya.PhysicsCollider), 
                this.goldViewTitlePlane = this.GoldView.getChildByName("titlePlane"), this.goldViewAmountPlane = this.GoldView.getChildByName("goldAmountPlane"), 
                this.blockViewAmountPlane = this.BlockView.getChildByName("blockAmountPlane"), this.initGoldViewTitlePlane(), 
                this.initGoldAmountPlane(), this.initBlockProgressPlane(), this.refreshState();
            }
        }, {
            key: "refreshState",
            value: function refreshState() {
                if (this.blockInfo.NeedWaitForPreBlock) this.state = 0, this.gameObject.active = !1; else if (this.blockInfo.CanStartUnlock) {
                    this.state = 2, this.gameObject.active = !0, this.GoldView.active = !0, this.BlockView.active = !1;
                    var _e23 = w.getLanguage("p_common_b_name");
                    switch (this.config.functionType) {
                      case n.None:
                      default:
                        this.config.type != i.CommonBlock ? _e23 = w.getLanguage("p_bridge_b_name") : 1 == Zt.Instance.SceneIndex && this.key == Zt.Instance.SceneSwitchPreBlockKey && (_e23 = w.getLanguage("p_new_scene_pre_b_name"));
                        break;

                      case n.Pasture:
                        if (this.config.functionConfig) {
                            var _t33 = this.config.functionConfig.animalConfig.id;
                            _e23 = w.getLanguage("p_" + _t33 + "_b_name");
                        }
                        break;

                      case n.Farm:
                        if (this.config.functionConfig) {
                            var _t34 = this.config.functionConfig.Config.id;
                            _e23 = w.getLanguage("p_" + _t34 + "_b_name");
                        }
                        break;

                      case n.Shop:
                        _e23 = w.getLanguage("p_shop_b_name");
                        break;

                      case n.Warehouse:
                        _e23 = w.getLanguage("p_warehouse_b_name");
                        break;

                      case n.FruitTree:
                        if (this.config.functionConfig) {
                            var _t35 = this.config.functionConfig.fruitConfig.id;
                            _e23 = w.getLanguage("p_" + _t35 + "_b_name");
                        }
                        break;

                      case n.Beehive:
                        _e23 = w.getLanguage("p_beehive_b_name");
                    }
                    this.setGoldViewTitle(_e23), this.refreshGoldAmount();
                } else {
                    this.state = 1, this.gameObject.active = !0, this.GoldView.active = !1, this.BlockView.active = !0;
                    var _e24 = Ee.Instance.UnlockAmount + "/" + this.blockInfo.Config.unlockBlockAmount;
                    this.setBlockProgress(_e24);
                }
            }
        }, {
            key: "initGoldViewTitlePlane",
            value: function initGoldViewTitlePlane() {
                var e = new Laya.UnlitMaterial();
                this.goldViewTitlePlane.meshRenderer.sharedMaterial = e;
                var t = Laya.Browser.createElement("canvas"), a = t.getContext("2d");
                t.width = 256, t.height = 256, a.fillStyle = "rgb(255,255,255)", a.strokeStyle = "rgb(255,255,255)", 
                a.font = "bold " + this.goldViewTitleFontSize + "px 黑体", a.textAlign = "center", 
                a.textBaseline = "middle", a.lineWidth = 2, a.fillText("", 128, 128, 200), a.strokeText("", 128, 128, 200);
                var i = new Laya.Texture2D(256, 256);
                i.loadImageSource(t), e.renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT, 
                e.albedoTexture = i, this.goldViewTitlePlane.meshRenderer.sharedMaterial.cull = Laya.RenderState.CULL_NONE, 
                this.goldViewTitleCanvas = t, this.goldViewTitelTexture2D = i;
            }
        }, {
            key: "setGoldViewTitle",
            value: function setGoldViewTitle(e) {
                this.goldViewTitleCanvas.width = 256, this.goldViewTitleCanvas.height = 256;
                var t = this.goldViewTitleCanvas.getContext("2d");
                t.clearRect(0, 0, this.goldViewAmountCanvas.width, this.goldViewAmountCanvas.height), 
                t.fillStyle = "rgb(255,255,255)", t.strokeStyle = "rgb(255,255,255)", t.font = "bold " + this.goldViewTitleFontSize + "px 黑体", 
                t.textAlign = "center", t.textBaseline = "middle", t.lineWidth = 2, t.fillText(e, 128, 128, 200), 
                t.strokeText(e, 128, 128, 200), this.goldViewTitelTexture2D.loadImageSource(this.goldViewTitleCanvas);
            }
        }, {
            key: "initGoldAmountPlane",
            value: function initGoldAmountPlane() {
                var e = new Laya.UnlitMaterial();
                this.goldViewAmountPlane.meshRenderer.sharedMaterial = e;
                var t = Laya.Browser.createElement("canvas"), a = t.getContext("2d");
                t.width = 256, t.height = 256, a.fillStyle = "rgb(255,255,255)", a.strokeStyle = "rgb(255,255,255)", 
                a.font = "bold " + this.goldViewAmountFontSize + "px 黑体", a.textAlign = "center", 
                a.textBaseline = "middle", a.lineWidth = 2, a.fillText("", 128, 128, 200), a.strokeText("", 128, 128, 200);
                var i = new Laya.Texture2D(256, 256);
                i.loadImageSource(t), e.renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT, 
                e.albedoTexture = i, this.goldViewAmountPlane.meshRenderer.sharedMaterial.cull = Laya.RenderState.CULL_NONE, 
                this.goldViewAmountCanvas = t, this.goldViewAmountTexture2D = i;
            }
        }, {
            key: "refreshGoldAmount",
            value: function refreshGoldAmount() {
                var e = this.config.unlockGoldCoin - this.blockInfo.ug, t = r.number2DataUnitStringWithFlixedNumber(e, 1);
                this.goldViewAmountCanvas.width = 256, this.goldViewAmountCanvas.height = 256;
                var a = this.goldViewAmountCanvas.getContext("2d");
                a.clearRect(0, 0, this.goldViewAmountCanvas.width, this.goldViewAmountCanvas.height), 
                a.fillStyle = "rgb(255,255,255)", a.strokeStyle = "rgb(255,255,255)";
                var i = this.goldViewAmountFontSize;
                t.length < 4 && (i = Math.floor(1.5 * this.goldViewAmountFontSize)), a.font = "bold " + i + "px 黑体", 
                a.textAlign = "center", a.textBaseline = "middle", a.lineWidth = 2, a.fillText(t, 128, 128, 200), 
                a.strokeText(t, 128, 128, 200), this.goldViewAmountTexture2D.loadImageSource(this.goldViewAmountCanvas);
            }
        }, {
            key: "initBlockProgressPlane",
            value: function initBlockProgressPlane() {
                var e = new Laya.UnlitMaterial();
                this.blockViewAmountPlane.meshRenderer.sharedMaterial = e;
                var t = Laya.Browser.createElement("canvas"), a = t.getContext("2d");
                t.width = 256, t.height = 256, a.fillStyle = "rgb(255,255,255)", a.strokeStyle = "rgb(255,255,255)", 
                a.font = "bold " + this.blockViewAmountFontSize + "px 黑体", a.textAlign = "center", 
                a.textBaseline = "middle", a.lineWidth = 2, a.fillText("", 128, 128, 200), a.strokeText("", 128, 128, 200);
                var i = new Laya.Texture2D(256, 256);
                i.loadImageSource(t), e.renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT, 
                e.albedoTexture = i, this.blockViewAmountPlane.meshRenderer.sharedMaterial.cull = Laya.RenderState.CULL_NONE, 
                this.blockViewAmountCanvas = t, this.blockViewAmountTexture2D = i;
            }
        }, {
            key: "setBlockProgress",
            value: function setBlockProgress(e) {
                this.blockViewAmountCanvas.width = 256, this.blockViewAmountCanvas.height = 256;
                var t = this.blockViewAmountCanvas.getContext("2d");
                t.clearRect(0, 0, this.goldViewAmountCanvas.width, this.goldViewAmountCanvas.height), 
                t.fillStyle = "rgb(255,255,255)", t.strokeStyle = "rgb(255,255,255)";
                var a = this.blockViewAmountFontSize;
                e.length < 4 && (a = Math.floor(1.5 * this.blockViewAmountFontSize)), t.font = "bold " + this.blockViewAmountFontSize + "px 黑体", 
                t.textAlign = "center", t.textBaseline = "middle", t.lineWidth = 2, t.fillText(e, 128, 128, 200), 
                t.strokeText(e, 128, 128, 200), this.blockViewAmountTexture2D.loadImageSource(this.blockViewAmountCanvas);
            }
        }, {
            key: "onTriggerStay",
            value: function onTriggerStay(e) {
                if (Yt.isCharacter(e.owner.name) && 2 == this.state) {
                    var _e25 = this.config.unlockGoldCoin - this.blockInfo.ug;
                    if (_e25 <= 0) this.state = 3, this.unlocked(); else {
                        if (Ee.Instance.getGoldCoins() <= 0) return this.noMouneyCount++, void (this.noMouneyCount > 60 && (c.Instance.show("Not enough coin"), 
                        this.noMouneyCount = 0));
                        if (this.consumeGoldCount--, this.consumeGoldCount <= 0) {
                            this.consumeGoldCount = 5, _e25 > Ee.Instance.getGoldCoins() && (_e25 = Ee.Instance.getGoldCoins());
                            var _t36 = _e25.toString().length, _a25 = Math.pow(10, _t36), _i12 = Math.floor(.085 * _a25);
                            _i12 < 1 && (_i12 = 1), oe.Instance.playUseGoldCoinSound(), this.blockInfo.ug += _i12, 
                            le.Instance.flyGoldCoinFromCharacterTo(this), Ee.Instance.coverGoldCoins(Ee.Instance.getGoldCoins() - _i12), 
                            this.refreshGoldAmount(), Laya.timer.frameOnce(10, this, this.delayOnceSave);
                        }
                    }
                }
            }
        }, {
            key: "delayOnceSave",
            value: function delayOnceSave() {
                console.log("save from ub"), Ee.Instance.saveUnlockBlock();
            }
        }, {
            key: "unlocked",
            value: function unlocked() {
                Laya.timer.clear(this, this.delayOnceSave), le.Instance.remove(this), this.blockInfo.markOpen(!0), 
                this.unlockNewBlockdestroyWithAnimation(), Ee.Instance.saveUnlockBlock();
            }
        }, {
            key: "unlockNewBlockdestroyWithAnimation",
            value: function unlockNewBlockdestroyWithAnimation() {
                var e = this;
                Laya.Tween.to(this.gameObject.transform, {
                    localScaleX: .2,
                    localScaleY: .2,
                    localScaleZ: .2
                }, 200, Laya.Ease.linearIn, new Laya.Handler(this, function() {
                    e.blockInfo.unlocking(), e.owner.destroy();
                }));
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                Laya.timer.clearAll(this), le.Instance.remove(this);
            }
        } ]);
        return se;
    }(Laya.Script3D);
    var re = /* */ function() {
        function re() {
            _classCallCheck2(this, re);
        }
        _createClass2(re, null, [ {
            key: "CreateBezierPoints",
            value: function CreateBezierPoints(e, t) {
                for (var a = [], i = 0; i < t; i++) {
                    var n = this.MultiPointBezier(e, i / t);
                    a.push(n);
                }
                return a;
            }
        }, {
            key: "MultiPointBezier",
            value: function MultiPointBezier(e, t) {
                var a = e.length, i = 0, n = 0, o = 0;
                for (var _s = 0; _s < a; _s++) {
                    var _r = e[_s];
                    i += _r.x * Math.pow(1 - t, a - 1 - _s) * Math.pow(t, _s) * this.erxiangshi(a - 1, _s), 
                    n += _r.y * Math.pow(1 - t, a - 1 - _s) * Math.pow(t, _s) * this.erxiangshi(a - 1, _s), 
                    o += _r.z * Math.pow(1 - t, a - 1 - _s) * Math.pow(t, _s) * this.erxiangshi(a - 1, _s);
                }
                return {
                    x: i,
                    y: n,
                    z: o
                };
            }
        }, {
            key: "erxiangshi",
            value: function erxiangshi(e, t) {
                var a = 1, i = 1;
                for (;t > 0; ) {
                    a *= e, i *= t, e--, t--;
                }
                return a / i;
            }
        } ]);
        return re;
    }();
    var le = /* */ function() {
        function le() {
            _classCallCheck2(this, le);
            this.list = new P(), this.goldCoinIndex = 0;
        }
        _createClass2(le, [ {
            key: "init",
            value: function init(e) {
                var t = e.getChildByName("LockBlock");
                t.active = !1, this.UnlockBlock = t, this.GoldCoin = e.getChildByName("GoldCoin");
            }
        }, {
            key: "flyGoldCoinFromCharacterTo",
            value: function flyGoldCoinFromCharacterTo(e) {
                var t = e.GoldCoin.transform.position, a = Yt.Instance.gameObject.transform.position;
                if (a = new Laya.Vector3(a.x, a.y + .2, a.z), !this.goldCoinModelArray) {
                    this.goldCoinModelArray = new Array(30);
                    var _e26 = this.GoldCoin;
                    for (var _t37 = 0; _t37 < this.goldCoinModelArray.length; _t37++) {
                        if (0 == _t37) this.goldCoinModelArray[_t37] = _e26; else {
                            var _a26 = new Laya.Vector3(0, 0, 0), _i13 = Laya.MeshSprite3D.instantiate(_e26, Wt.Scene3D, !1, _a26);
                            _i13.transform.position = _a26, _i13.active = !1, this.goldCoinModelArray[_t37] = _i13;
                        }
                    }
                }
                this.goldCoinIndex >= this.goldCoinModelArray.length && (this.goldCoinIndex = 0);
                var i = this.goldCoinModelArray[this.goldCoinIndex];
                if (!i) return;
                this.goldCoinIndex++, i.transform.localRotationEuler = Yt.Instance.ZIsVertical ? new Laya.Vector3(-43, 120, 180) : new Laya.Vector3(-43, 210, 180), 
                i.transform.position = a, i.active = !0;
                var n = [], o = new Laya.Vector3(.5 * (a.x + t.x), 1, .5 * (a.z + t.z));
                n.push(a), n.push(o), n.push(t);
                var s = re.CreateBezierPoints(n, 23), r = 0, l = function l() {
                    if (r > s.length - 1) i.active = !1, r = 0; else if (i) {
                        var _e27 = new Laya.Vector3(s[r].x, s[r].y, s[r].z);
                        i.transform.position = _e27, Laya.timer.frameOnce(1, this, l);
                    }
                    r++;
                };
                l();
            }
        }, {
            key: "reset",
            value: function reset() {
                this.list && this.list.clear();
            }
        }, {
            key: "createLockBlock",
            value: function createLockBlock(e) {
                if (e && !e.IsUnlocked) {
                    if (this.getControllerByKey(e.k)) return;
                    var _t38 = this.UnlockBlock;
                    if (_t38) {
                        var _a27 = new Laya.Vector3(e.Config.x, 0, e.Config.z), _i14 = Laya.MeshSprite3D.instantiate(_t38, Wt.SceneRoot, !1, _a27);
                        _i14.active = !0;
                        var _n6 = new se();
                        _n6.blockInfo = e, _n6.config = e.Config, _n6.key = e.k, _n6.gameObject = _i14, 
                        _i14.addComponentIntance(_n6), this.add(_n6);
                    }
                }
            }
        }, {
            key: "refresh",
            value: function refresh() {
                var e = this.list.getHead();
                for (;e; ) {
                    e.element && e.element.refreshState(), e = e.next;
                }
            }
        }, {
            key: "remove",
            value: function remove(e) {
                e && this.list.remove(e);
            }
        }, {
            key: "add",
            value: function add(e) {
                e && this.list.append(e);
            }
        }, {
            key: "getControllerByKey",
            value: function getControllerByKey(e) {
                var t = this.list.getHead();
                for (;t; ) {
                    if (t.element && t.element.blockInfo && t.element.blockInfo.k == e) return t.element;
                    t = t.next;
                }
                return null;
            }
        }, {
            key: "destroyUnlockBlock",
            value: function destroyUnlockBlock() {}
        } ], [ {
            key: "Instance",
            get: function get() {
                return le.instance || (le.instance = new le()), le.instance;
            }
        } ]);
        return le;
    }();
    le.instance = null;
    var ce = /* */ function() {
        function ce() {
            _classCallCheck2(this, ce);
            this.warehouseControllerList = new P(), this.warehouseControllerDic = {}, this.warehouseInfoDic = {};
        }
        _createClass2(ce, [ {
            key: "mappingModel",
            value: function mappingModel(e) {
                var t = e.getChildByName("Warehouse");
                this.warehouseModelArray = new Array(2), this.warehouseModelArray[0] = t.getChildByName("BigWarehouse"), 
                this.warehouseModelArray[0].active = !1, this.warehouseModelArray[1] = t.getChildByName("CommonWarehouse"), 
                this.warehouseModelArray[1].active = !1, this.box = t.getChildByName("Box2"), this.box.active = !1, 
                this.WarehorseNPC = t.getChildByName("WarehorseNPC"), this.WarehorseNPC.active = !1;
            }
        }, {
            key: "loadData",
            value: function loadData() {
                var e = ta.loadWarehouseBlockData();
                this.warehouseInfoDic = e;
            }
        }, {
            key: "clear",
            value: function clear() {
                this.warehouseInfoDic = {}, this.warehouseControllerList.clear(), this.warehouseControllerDic = {};
            }
        }, {
            key: "bigWarehouseIsUnlocked",
            value: function bigWarehouseIsUnlocked() {
                if (this.warehouseControllerList) {
                    var _e28 = this.warehouseControllerList.getHead();
                    for (;_e28; ) {
                        if (_e28.element && _e28.element.warehouseMapConfig.isCollectAllWarehouse) return !0;
                        _e28 = _e28.next;
                    }
                }
                return !1;
            }
        }, {
            key: "addPBlockAfterEntryGame",
            value: function addPBlockAfterEntryGame(e) {
                e && (this.warehouseInfoDic[e.k] || (this.warehouseInfoDic[e.k] = e, this.save()));
            }
        }, {
            key: "getWBlockByKey",
            value: function getWBlockByKey(e) {
                return this.warehouseInfoDic[e];
            }
        }, {
            key: "addWhController",
            value: function addWhController(e) {
                e && (this.warehouseControllerDic[e.warehouseMapConfig.K] || (this.warehouseControllerDic[e.warehouseMapConfig.K] = e, 
                this.warehouseControllerList.append(e)));
            }
        }, {
            key: "getWhControllerByKey",
            value: function getWhControllerByKey(e) {
                return this.warehouseControllerDic[e];
            }
        }, {
            key: "warehouseHadUnlocked",
            value: function warehouseHadUnlocked() {
                var e = this.warehouseControllerList.getHead();
                for (;e; ) {
                    if (e.element) return !0;
                    e = e.next;
                }
                return !1;
            }
        }, {
            key: "save",
            value: function save() {
                ta.saveWarehouseBlockData(this.warehouseInfoDic);
            }
        }, {
            key: "unlockPastureRefreshWarehouse",
            value: function unlockPastureRefreshWarehouse(e, t) {
                var a = this.warehouseControllerList.getHead();
                for (;a; ) {
                    var _i15 = a.element;
                    _i15 && _i15.blockConfig.sceneId == e && _i15.refreshNPCTarget(t), a = a.next;
                }
            }
        }, {
            key: "characterEnterSceneId",
            value: function characterEnterSceneId(e) {
                var t = this.warehouseControllerList.getHead();
                for (;t; ) {
                    var _a28 = t.element;
                    _a28 && (_a28.blockConfig.sceneId == e ? (_a28.settleNPCOffLineCollection(), _a28.activeNPC()) : _a28.banNPC()), 
                    t = t.next;
                }
            }
        }, {
            key: "getWarehouseBySceneId",
            value: function getWarehouseBySceneId(e) {
                var t = this.warehouseControllerList.getHead();
                for (;t; ) {
                    var _a29 = t.element;
                    if (_a29 && !_a29.warehouseMapConfig.isCollectAllWarehouse && _a29.blockConfig.sceneId == e && _a29.blockConfig.sceneId == e) return _a29;
                    t = t.next;
                }
                return null;
            }
        }, {
            key: "collectAllWarehouseAnimal",
            value: function collectAllWarehouseAnimal() {
                var e = this.warehouseControllerList.getHead();
                for (;e; ) {
                    var _t39 = e.element;
                    _t39 && !_t39.warehouseMapConfig.isCollectAllWarehouse && _t39.collectAllAnimalWithoutAnimation(), 
                    e = e.next;
                }
            }
        }, {
            key: "allWarehouseTotalProgress",
            value: function allWarehouseTotalProgress() {
                var e = this.warehouseControllerList.getHead(), t = 0, a = 0;
                for (;e; ) {
                    var _i16 = e.element;
                    if (_i16 && !_i16.warehouseMapConfig.isCollectAllWarehouse) {
                        a += _i16.getTotalProgress(), t++;
                    }
                    e = e.next;
                }
                return t > 0 && (a /= t), a;
            }
        }, {
            key: "settleAllOffLineWarehouse",
            value: function settleAllOffLineWarehouse() {
                var e = this.warehouseControllerList.getHead();
                for (;e; ) {
                    var _t40 = e.element;
                    _t40 && !_t40.warehouseMapConfig.isCollectAllWarehouse && _t40.blockConfig.sceneId != Yt.Instance.SceneId && _t40.settleNPCOffLineCollection(), 
                    e = e.next;
                }
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return ce.mInstance || (ce.mInstance = new ce()), ce.mInstance;
            }
        } ]);
        return ce;
    }();
    var he = /* */ function() {
        function he(e, t, a) {
            _classCallCheck2(this, he);
            this.ug = 0, this.open = !1, this.k = e, this.ug = t, this.markOpen(a);
        }
        _createClass2(he, [ {
            key: "IsUnlocked",
            get: function get() {
                return this.open || this.ug >= this.Config.unlockGoldCoin;
            }
        }, {
            key: "CanStartUnlock",
            get: function get() {
                return Ee.Instance.UnlockAmount >= this.Config.unlockBlockAmount;
            }
        }, {
            key: "NeedWaitForPreBlock",
            get: function get() {
                var e = !1;
                return this.PreBlock && !this.PreBlock.IsUnlocked && (e = !0), e;
            }
        }, {
            key: "Config",
            get: function get() {
                return ea.Instance.baseMapConfigDic[this.k];
            }
        }, {
            key: "PreBlock",
            get: function get() {
                var e = null;
                if (this.Config.havePreBlock()) {
                    var _t41 = this.Config.preBlockId, _a30 = ea.Instance.baseMapConfigDicWithId[_t41];
                    _a30 && ((e = Ee.Instance.allUnlockBlock[_a30.Key]) || (e = new he(_a30.Key, 0, !1)));
                }
                return e;
            }
        }, {
            key: "markOpen",
            value: function markOpen(e) {
                this.open = e, e && ea.Instance.resetHeightByUnlockBlock(this);
            }
        }, {
            key: "unlocking",
            value: function unlocking() {
                this.markOpen(!0), Wt.Instance.unlockBlock(this, !0), Ee.Instance.refreshBlockAmount(), 
                de.Instance.refreshListOnPlayGame(), de.Instance.detectAroundOnBlock(this), le.Instance.refresh();
                var e = this.Config;
                if (e.functionType == n.Pasture) {
                    var _t42 = e.functionConfig;
                    ce.Instance.unlockPastureRefreshWarehouse(e.sceneId, _t42.animalConfig.id);
                }
                oe.Instance.playUnlockBlockSound(), v.Instance.reportUnlockBlockEvent(Ee.Instance.UnlockAmount);
            }
        } ]);
        return he;
    }();
    var de = /* */ function() {
        function de() {
            _classCallCheck2(this, de);
            this.list = new P();
        }
        _createClass2(de, [ {
            key: "resetList",
            value: function resetList() {
                this.list.clear();
            }
        }, {
            key: "nodeCount",
            value: function nodeCount() {
                return this.list.size();
            }
        }, {
            key: "initLockBlockByDetectList",
            value: function initLockBlockByDetectList() {
                var e = this.list.getHead();
                for (le.Instance.reset(); e; ) {
                    var _t43 = e.element;
                    _t43 && le.Instance.createLockBlock(_t43), e = e.next;
                }
            }
        }, {
            key: "initDetectBlockList",
            value: function initDetectBlockList() {
                this.resetList();
                for (var _e29 in Ee.Instance.allUnlockBlock) {
                    var _t44 = Ee.Instance.allUnlockBlock[_e29];
                    if (_t44 && _t44.IsUnlocked) {
                        var _e30 = _t44.Config, _a31 = _e30.x, _i17 = _e30.z;
                        if (_e30.functionType == n.SwitchScenePoint) continue;
                        var _o2 = _a31 + "_" + (_i17 + 1), _s2 = ea.Instance.baseMapConfigDic[_o2];
                        this.detectInit(_o2, _s2), _o2 = _a31 + "_" + (_i17 - 1), _s2 = ea.Instance.baseMapConfigDic[_o2], 
                        this.detectInit(_o2, _s2), _o2 = _a31 + 1 + "_" + _i17, _s2 = ea.Instance.baseMapConfigDic[_o2], 
                        this.detectInit(_o2, _s2), _o2 = _a31 - 1 + "_" + _i17, _s2 = ea.Instance.baseMapConfigDic[_o2], 
                        this.detectInit(_o2, _s2);
                    }
                }
            }
        }, {
            key: "detectInit",
            value: function detectInit(e, t) {
                if (t) {
                    var _a32 = Ee.Instance.allUnlockBlock[e];
                    if (!_a32) if ((_a32 = new he(e, 0, !1)).IsUnlocked) _a32.markOpen(!0), Ee.Instance.addUnlockBlock(_a32); else {
                        var _e31 = null;
                        t.havePreBlock() && (_e31 = _a32.PreBlock), _e31 && !_e31.IsUnlocked ? this.addDetcectListOnInit(_a32) : _e31 && !_e31.IsUnlocked || (Ee.Instance.UnlockAmount < t.unlockBlockAmount ? this.addDetcectListOnInit(_a32) : Ee.Instance.addUnlockBlock(_a32));
                    }
                }
            }
        }, {
            key: "refreshListOnPlayGame",
            value: function refreshListOnPlayGame() {
                var e = this.list.getHead();
                for (;e; ) {
                    var _t45 = e.element;
                    _t45 && (_t45.IsUnlocked ? (Ee.Instance.addUnlockBlock(_t45), this.list.remove(_t45)) : !_t45.NeedWaitForPreBlock && _t45.CanStartUnlock && (Ee.Instance.addUnlockBlock(_t45), 
                    this.list.remove(_t45))), e = e.next;
                }
            }
        }, {
            key: "detectAroundOnBlock",
            value: function detectAroundOnBlock(e) {
                if (e && e.IsUnlocked) {
                    var _t46 = e.Config, _a33 = _t46.x, _i18 = _t46.z;
                    if (_t46.functionType == n.SwitchScenePoint) return;
                    var _o3 = _a33 + "_" + (_i18 + 1), _s3 = ea.Instance.baseMapConfigDic[_o3];
                    this.detectOnPlayGame(_o3, _s3), _o3 = _a33 + "_" + (_i18 - 1), _s3 = ea.Instance.baseMapConfigDic[_o3], 
                    this.detectOnPlayGame(_o3, _s3), _o3 = _a33 + 1 + "_" + _i18, _s3 = ea.Instance.baseMapConfigDic[_o3], 
                    this.detectOnPlayGame(_o3, _s3), _o3 = _a33 - 1 + "_" + _i18, _s3 = ea.Instance.baseMapConfigDic[_o3], 
                    this.detectOnPlayGame(_o3, _s3);
                }
            }
        }, {
            key: "detectOnPlayGame",
            value: function detectOnPlayGame(e, t) {
                if (t) {
                    var _a34 = Ee.Instance.allUnlockBlock[e];
                    if (!_a34 && !(_a34 = new he(e, 0, !1)).IsUnlocked) {
                        var _e32 = null;
                        t.havePreBlock() && (_e32 = _a34.PreBlock), _e32 && !_e32.IsUnlocked ? this.addDetcectListAfterInit(_a34) : _e32 && !_e32.IsUnlocked || (Ee.Instance.UnlockAmount < t.unlockBlockAmount ? this.addDetcectListAfterInit(_a34) : Ee.Instance.addUnlockBlock(_a34));
                    }
                }
            }
        }, {
            key: "addDetcectListOnInit",
            value: function addDetcectListOnInit(e) {
                !e || e.IsUnlocked || !e.NeedWaitForPreBlock && e.CanStartUnlock || this.searchBlockFromDetectList(e.k) || this.list.append(e);
            }
        }, {
            key: "addDetcectListAfterInit",
            value: function addDetcectListAfterInit(e) {
                !e || e.IsUnlocked || !e.NeedWaitForPreBlock && e.CanStartUnlock || this.searchBlockFromDetectList(e.k) || (this.list.append(e), 
                le.Instance.createLockBlock(e));
            }
        }, {
            key: "searchBlockFromDetectList",
            value: function searchBlockFromDetectList(e) {
                if (e) {
                    var _t47 = this.list.getHead();
                    for (;_t47; ) {
                        if (_t47.element && _t47.element.k == e) return _t47.element;
                        _t47 = _t47.next;
                    }
                    return null;
                }
                return null;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return de.instance || (de.instance = new de()), de.instance;
            }
        } ]);
        return de;
    }();
    de.instance = null;
    var me = /* */ function() {
        function me() {
            _classCallCheck2(this, me);
            this.pastureInfoDic = {}, this.pastureControllerList = new P(), this.pastureControllerDic = {};
        }
        _createClass2(me, [ {
            key: "loadData",
            value: function loadData() {
                var e = ta.loadPastureBlockData();
                this.pastureInfoDic = e;
            }
        }, {
            key: "clear",
            value: function clear() {
                this.pastureInfoDic = {}, this.pastureControllerList.clear(), this.pastureControllerDic = {}, 
                this.pastureUnitDataDic = {};
            }
        }, {
            key: "addPBlockAfterEntryGame",
            value: function addPBlockAfterEntryGame(e) {
                e && (this.pastureInfoDic[e.k] || (this.pastureInfoDic[e.k] = e, this.save()));
            }
        }, {
            key: "getPBlockByKey",
            value: function getPBlockByKey(e) {
                return this.pastureInfoDic[e];
            }
        }, {
            key: "addPController",
            value: function addPController(e) {
                e && (this.pastureControllerDic[e.pastureBlockInfo.k] || (this.pastureControllerDic[e.pastureBlockInfo.k] = e, 
                this.pastureControllerList.append(e))), Laya.timer.frameOnce(3, this, this.refreshPastureUnitDataDic);
            }
        }, {
            key: "getPBySceneIdAndAnimalId",
            value: function getPBySceneIdAndAnimalId(e, t) {
                for (var _a35 in this.pastureInfoDic) {
                    var _i19 = this.pastureInfoDic[_a35];
                    if (_i19 && _i19.treeClear && _i19.PastureConfig && _i19.PastureConfig.animalConfig.id == t) {
                        var _t48 = ea.Instance.baseMapConfigDic[_a35];
                        if (_t48 && _t48.sceneId == e) return _i19;
                    }
                }
                return null;
            }
        }, {
            key: "getPControllerByKey",
            value: function getPControllerByKey(e) {
                return this.pastureControllerDic[e];
            }
        }, {
            key: "save",
            value: function save() {
                ta.savePastureBlockData(this.pastureInfoDic);
            }
        }, {
            key: "allPastureAnimalBeAdult",
            value: function allPastureAnimalBeAdult() {
                var e = this.pastureControllerList.getHead();
                for (;e; ) {
                    var _t49 = e.element;
                    _t49 && _t49.pastureBlockInfo.tC && _t49.pastureBlockInfo.State < 2 && _t49.neighborAnimalPool.autoBeAdultAnimal(), 
                    e = e.next;
                }
            }
        }, {
            key: "refreshPastureUnitDataDic",
            value: function refreshPastureUnitDataDic() {
                var e = this.pastureControllerList.getHead(), t = {};
                for (;e; ) {
                    var _a36 = e.element;
                    if (_a36) {
                        var _e33 = _a36.pastureBlockConfig.animalConfig.id, _i20 = t[_e33];
                        _i20 || (_i20 = new ge(_e33), t[_e33] = _i20), _i20.blockAmount++;
                    }
                    e = e.next;
                }
                this.pastureUnitDataDic = t;
            }
        }, {
            key: "getAnimalCurrentPriceByAnimalId",
            value: function getAnimalCurrentPriceByAnimalId(e) {
                var t = Jt.Instance.AnimalConfig.getItem(e.toString()), a = me.Instance.pastureUnitDataDic[e];
                if (a && t) {
                    var _e34 = a.blockAmount;
                    return _e34 > 0 ? t.p + t.gu * (_e34 - 1) : 0;
                }
                return 0;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return me.mInstance || (me.mInstance = new me()), me.mInstance;
            }
        } ]);
        return me;
    }();
    var ge = function ge(e) {
        _classCallCheck2(this, ge);
        this.animalId = 0, this.blockAmount = 0, this.animalId = e, this.blockAmount = 0;
    };
    var ue = /* */ function() {
        function ue() {
            _classCallCheck2(this, ue);
        }
        _createClass2(ue, [ {
            key: "ProductId",
            get: function get() {
                return this.i;
            }
        }, {
            key: "Amount",
            get: function get() {
                return this.a;
            }
        }, {
            key: "Type",
            get: function get() {
                return k.ProductType(this.i);
            }
        }, {
            key: "sell",
            value: function sell(e, t) {
                e > this.Amount && (e = this.Amount), this.a -= e;
                var a = e * t;
                return Laya.timer.frameOnce(3, this, this.save), a;
            }
        }, {
            key: "save",
            value: function save() {
                Laya.timer.clear(this, this.save), Ee.Instance.saveAllProduct();
            }
        } ]);
        return ue;
    }();
    var pe = /* */ function() {
        function pe() {
            _classCallCheck2(this, pe);
            this.lastState = -1;
        }
        _createClass2(pe, [ {
            key: "init",
            value: function init(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var a = e.getChildByName("Character");
                t || ((t = a.addChild(new Laya.Camera(0, .01, 120))).transform.localPosition = new Laya.Vector3(0, 3.03, -2.695), 
                t.transform.rotation = new Laya.Quaternion(0, .9238796, .3826834, 0), t.orthographic = !1, 
                t.nearPlane = .01, t.farPlane = 100, t.clearFlag = 1, t.clearColor = new Laya.Vector4(0, .6352941, 1, 0), 
                t.fieldOfView = 40, t.orthographicVerticalSize = 10), this.mainCamera = t, this.mainCamera.enableHDR = !1, 
                console.log("相机角度" + this.mainCamera.transform.localRotationEulerX);
            }
        }, {
            key: "getCamera",
            value: function getCamera() {
                return this.mainCamera;
            }
        }, {
            key: "followCharacter",
            value: function followCharacter(e) {}
        }, {
            key: "lookProp",
            value: function lookProp(e) {
                console.log("镜头视角锁定道具");
                var t = new Laya.Vector3(e.x + .36, 1.3, e.z - .77), a = new Laya.Vector3();
                r.woldPositionToLocalPosition(t, this.mainCamera, a), Laya.Tween.to(this.mainCamera.transform, {
                    localPositionX: a.x,
                    localPositionY: a.y,
                    localPositionZ: a.z,
                    localRotationEulerY: 155
                }, pe.CameraAnimationMillieconds, Laya.Ease.linearIn), this.lastState = -1;
            }
        }, {
            key: "lookGiftDog",
            value: function lookGiftDog(e) {
                var t = new Laya.Vector3(e.x + .36, .73, e.z - .77), a = new Laya.Vector3();
                r.woldPositionToLocalPosition(t, this.mainCamera, a), Laya.Tween.to(this.mainCamera.transform, {
                    localPositionX: a.x,
                    localPositionY: a.y,
                    localPositionZ: a.z,
                    localRotationEulerY: 155
                }, pe.CameraAnimationMillieconds, Laya.Ease.linearIn), this.lastState = -1;
            }
        }, {
            key: "switchCameraState",
            value: function switchCameraState(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                if (this.mainCamera && this.lastState != e) switch (Laya.Tween.clearAll(this.mainCamera), 
                Laya.Tween.clearAll(this.mainCamera.transform), this.lastState = e, e) {
                  case 3:
                    Laya.Tween.to(this.mainCamera.transform, {
                        localPositionX: -4,
                        localPositionY: 3.3,
                        localPositionZ: 0,
                        localRotationEulerX: -35,
                        localRotationEulerY: 270
                    }, pe.CameraAnimationMillieconds, Laya.Ease.linearIn, new Laya.Handler(this, function() {
                        Yt.Instance.ZIsVertical = !1;
                    }));
                    break;

                  case 2:
                    Laya.Tween.to(this.mainCamera.transform, {
                        localPositionX: 0,
                        localPositionY: .47,
                        localPositionZ: -1.369,
                        localRotationEulerX: 0,
                        localRotationEulerY: 180
                    }, pe.CameraAnimationMillieconds, Laya.Ease.linearIn);
                    break;

                  case 1:
                    Laya.Tween.to(this.mainCamera.transform, {
                        localPositionX: -.09,
                        localPositionY: .93,
                        localPositionZ: -2.96,
                        localRotationEulerX: -10,
                        localRotationEulerY: 180
                    }, pe.CameraAnimationMillieconds, Laya.Ease.linearIn);
                    break;

                  case 0:
                  default:
                    if (t) this.mainCamera.transform.localPosition = new Laya.Vector3(0, 3.03, -2.695), 
                    this.mainCamera.transform.localRotationEulerX = -45, this.mainCamera.transform.localRotationEulerY = 180; else {
                        if (Yt.Instance.IsGoingToSwitchScenePoint) return void this.switchCameraState(3);
                        Laya.Tween.to(this.mainCamera.transform, {
                            localPositionX: 0,
                            localPositionY: 3.03,
                            localPositionZ: -2.695,
                            localRotationEulerX: -45,
                            localRotationEulerY: 180
                        }, pe.CameraAnimationMillieconds, Laya.Ease.linearIn, new Laya.Handler(this, function() {
                            Yt.Instance.ZIsVertical = !0;
                        }));
                    }
                }
            }
        }, {
            key: "readyAnimation",
            value: function readyAnimation() {}
        }, {
            key: "readyAnimation2",
            value: function readyAnimation2() {}
        } ], [ {
            key: "Instance",
            get: function get() {
                return pe.instance;
            }
        } ]);
        return pe;
    }();
    pe.CameraAnimationMillieconds = 600, pe.instance = new pe();
    var ye = /* */ function() {
        function ye() {
            _classCallCheck2(this, ye);
        }
        _createClass2(ye, null, [ {
            key: "CreateBezierPoints",
            value: function CreateBezierPoints(e, t) {
                for (var a = [], i = 0; i < t; i++) {
                    var n = this.MultiPointBezier(e, i / t);
                    a.push(n);
                }
                return a;
            }
        }, {
            key: "MultiPointBezier",
            value: function MultiPointBezier(e, t) {
                var a = e.length, i = 0, n = 0;
                for (var _o4 = 0; _o4 < a; _o4++) {
                    var _s4 = e[_o4];
                    i += _s4.x * Math.pow(1 - t, a - 1 - _o4) * Math.pow(t, _o4) * this.erxiangshi(a - 1, _o4), 
                    n += _s4.y * Math.pow(1 - t, a - 1 - _o4) * Math.pow(t, _o4) * this.erxiangshi(a - 1, _o4);
                }
                return {
                    x: i,
                    y: n
                };
            }
        }, {
            key: "erxiangshi",
            value: function erxiangshi(e, t) {
                var a = 1, i = 1;
                for (;t > 0; ) {
                    a *= e, i *= t, e--, t--;
                }
                return a / i;
            }
        } ]);
        return ye;
    }();
    var fe = /* */ function() {
        function fe() {
            _classCallCheck2(this, fe);
        }
        _createClass2(fe, null, [ {
            key: "imageScaleAnimation",
            value: function imageScaleAnimation(e) {
                e && (1 == e.scaleX ? Laya.Tween.to(e, {
                    scaleX: l.buttonScalingRatio,
                    scaleY: l.buttonScalingRatio
                }, l.buttonScalingMilliseconds, Laya.Ease.linearIn, new Laya.Handler(this, this.imageScaleAnimation, [ e ])) : Laya.Tween.to(e, {
                    scaleX: 1,
                    scaleY: 1
                }, l.buttonScalingMilliseconds, Laya.Ease.linearIn));
            }
        }, {
            key: "imageScaleQuickAnimation",
            value: function imageScaleQuickAnimation(e) {
                e && (1 == e.scaleX ? Laya.Tween.to(e, {
                    scaleX: l.buttonScalingRatio,
                    scaleY: l.buttonScalingRatio
                }, l.buttonScalingMilliseconds, Laya.Ease.linearIn, new Laya.Handler(this, this.imageScaleAnimation, [ e ])) : Laya.Tween.to(e, {
                    scaleX: 1,
                    scaleY: 1
                }, l.buttonScalingMilliseconds, Laya.Ease.linearIn));
            }
        }, {
            key: "viewScaleAnimation",
            value: function viewScaleAnimation(e) {
                e && (1 == e.scaleX ? Laya.Tween.to(e, {
                    scaleX: l.buttonScalingRatio,
                    scaleY: l.buttonScalingRatio
                }, l.buttonScalingMilliseconds, Laya.Ease.linearIn, new Laya.Handler(this, this.imageScaleAnimation, [ e ])) : Laya.Tween.to(e, {
                    scaleX: 1,
                    scaleY: 1
                }, l.buttonScalingMilliseconds, Laya.Ease.linearIn));
            }
        }, {
            key: "popViewEffect",
            value: function popViewEffect(e) {
                e && (e.visible = !0, e.scaleX = 0, e.scaleY = 0, Laya.Tween.to(e, {
                    scaleX: 1,
                    scaleY: 1
                }, 150, Laya.Ease.backOut));
            }
        }, {
            key: "closeViewEffect",
            value: function closeViewEffect(e) {
                e && Laya.Tween.to(e, {
                    scaleX: 0,
                    scaleY: 0
                }, 100, Laya.Ease.linearIn, new Laya.Handler(e, function() {
                    e.visible = !1;
                }));
            }
        } ]);
        return fe;
    }();
    var Ie = /* */ function(_Laya$Script) {
        _inherits2(Ie, _Laya$Script);
        var _super2 = _createSuper2(Ie);
        function Ie() {
            var _this9;
            _classCallCheck2(this, Ie);
            _this9 = _super2.call(this), _this9.characterTopPoint = new Laya.Vector2(0, 0), 
            _this9.goldCoinImageArray = new Array(32), _this9.goldCoinImgaeIndex = 0, _this9.addGoldUnitArray = new Array(16), 
            _this9.addGoldUnitIndex = 0, Ie.mInstance = _assertThisInitialized2(_this9);
            return _this9;
        }
        _createClass2(Ie, [ {
            key: "onAwake",
            value: function onAwake() {
                Laya.stage.on(e.REFRESH_GAME_GOLD_COINS_UI, this, this.onRefresh), this.initUI(), 
                this.onRefresh();
            }
        }, {
            key: "onStart",
            value: function onStart() {
                this.characterTopPoint = r.positionToUIPoint(Yt.Instance.topGameObject.transform.position, pe.Instance.mainCamera);
            }
        }, {
            key: "initUI",
            value: function initUI() {
                this.rootView = this.owner, this.title = this.owner.getChildByName("bgImage").getChildByName("titleLabel"), 
                this.goldImage = this.owner.getChildByName("bgImage").getChildByName("itemImage"), 
                this.goldImage.pivot(.5 * this.goldImage.width, .5 * this.goldImage.height);
            }
        }, {
            key: "onRefresh",
            value: function onRefresh() {
                if (this.title) {
                    var _e35 = r.number2DataUnitStringWithFlixedNumber(Ee.Instance.getGoldCoins(), 1);
                    this.title.text = _e35;
                }
            }
        }, {
            key: "goldFly",
            value: function goldFly(e, t) {
                0 == this.goldCoinImgaeIndex % 2 && this.addGoldAnimation(t), this.goldCoinImgaeIndex >= this.goldCoinImageArray.length && (this.goldCoinImgaeIndex = 0);
                var a = this.getItemViewPosition(), i = this.goldCoinImageArray[this.goldCoinImgaeIndex], n = !1, o = "PastureUI/Main/zjm_08_01.png";
                if (!i) {
                    var _e36 = .8;
                    (i = new Laya.Image(o)).size(81 * _e36, 71 * _e36), this.goldCoinImageArray[this.goldCoinImgaeIndex] = i, 
                    n = !0;
                }
                i.skin = o, this.goldCoinImgaeIndex++;
                var s = r.positionToUIPoint(e, pe.Instance.mainCamera);
                s.x -= .5 * i.width, s.y -= .5 * i.height, s.y -= 20, i.x = s.x, i.y = s.y, n ? Laya.stage.addChild(i) : i.visible = !0;
                var l = [], c = new Laya.Point((s.x + a.x) / 2 + 1 * (50 + Math.random() * Laya.stage.width * .6), .5 * (s.y + a.y));
                l.push(s), l.push(c), l.push(a);
                var h = ye.CreateBezierPoints(l, 30), d = 0, m = this, g = function g() {
                    d > h.length - 1 ? (i.visible = !1, d = 0, Ee.Instance.coverGoldCoins(Ee.Instance.getGoldCoins() + t), 
                    m.onHit()) : (i.pos(h[d].x, h[d].y), Laya.timer.frameOnce(1, this, g)), d++;
                };
                g();
            }
        }, {
            key: "getItemViewPosition",
            value: function getItemViewPosition() {
                var e = this.rootView.left, t = sa.Instance.statusBarHeight + this.rootView.top - 10;
                return new Laya.Vector2(e, t);
            }
        }, {
            key: "addGoldAnimation",
            value: function addGoldAnimation(e) {
                this.addGoldUnitIndex >= this.addGoldUnitArray.length && (this.addGoldUnitIndex = 0);
                var t = this.addGoldUnitArray[this.addGoldUnitIndex], a = !1;
                t || (t = we.create(), this.addGoldUnitArray[this.addGoldUnitIndex] = t, a = !0);
                var i = t.titleLabel;
                i.text = "+" + r.number2DataUnitString(e), this.addGoldUnitIndex++;
                var n = new Laya.Vector2(this.characterTopPoint.x, this.characterTopPoint.y);
                n.y -= 20;
                var o = new Laya.Vector2(n.x, n.y - 100);
                t.reset(n), a ? Laya.stage.addChild(i) : i.visible = !0;
                Laya.Tween.to(i, {
                    x: o.x,
                    y: o.y
                }, 300, Laya.Ease.linearIn, new Laya.Handler(i, function() {
                    Laya.timer.frameOnce(30, this, function() {
                        i.visible = !1;
                    });
                }));
            }
        }, {
            key: "onHit",
            value: function onHit() {
                fe.imageScaleAnimation(this.goldImage), oe.Instance.playGoldCoinSound();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Ie.mInstance;
            }
        } ]);
        return Ie;
    }(Laya.Script);
    var we = /* */ function() {
        function we() {
            _classCallCheck2(this, we);
        }
        _createClass2(we, [ {
            key: "reset",
            value: function reset(e) {
                this.titleLabel.x = e.x, this.titleLabel.y = e.y;
            }
        } ], [ {
            key: "create",
            value: function create() {
                var e = new we(), t = new Laya.Label();
                t.width = 60, t.bold = !0, t.fontSize = 50, t.color = "#000000", t.align = "center", 
                t.valign = "middle", t.stroke = 3, t.strokeColor = "#ffffff", e.titleLabel = t;
                var a = new Laya.Image("PastureUI/Main/zjm_08_01.png");
                return a.size(81, 71), a.centerY = 0, a.left = 1 * -a.width, t.addChild(a), e.goldImage = a, 
                e;
            }
        } ]);
        return we;
    }();
    var Ce = /* */ function(_Laya$Script2) {
        _inherits2(Ce, _Laya$Script2);
        var _super3 = _createSuper2(Ce);
        function Ce() {
            var _this10;
            _classCallCheck2(this, Ce);
            _this10 = _super3.call(this), _this10.showItemAmount = 0, _this10.itemViewDic = {}, 
            _this10.productIconImageArray = new Array(32), _this10.productIconImgaeIndex = 0, 
            Ce.mInstance = _assertThisInitialized2(_this10);
            return _this10;
        }
        _createClass2(Ce, [ {
            key: "onAwake",
            value: function onAwake() {
                Laya.stage.on(e.REFRESH_PRODUCT_AMOUNT_UI, this, this.onRefresh), this.initUI();
            }
        }, {
            key: "initUI",
            value: function initUI() {
                this.rootView = this.owner;
                var e = Ee.Instance.AllProductDataDic, t = 0;
                for (var _a37 in e) {
                    var _i21 = e[_a37];
                    if (_i21 && _i21.Amount > 0) {
                        var _e37 = 70 * t, _a38 = Ae.createView(_i21, this.rootView, _e37, 1);
                        this.itemViewDic[_i21.ProductId] = _a38, t++;
                    }
                }
                this.adjustPositionAndScale();
            }
        }, {
            key: "addShowItemAmount",
            value: function addShowItemAmount(e) {
                this.onRefresh(e), this.adjustPositionAndScale();
            }
        }, {
            key: "adjustPositionAndScale",
            value: function adjustPositionAndScale() {
                var e = 0;
                for (var _t50 in this.itemViewDic) {
                    var _a39 = this.itemViewDic[_t50];
                    _a39 && _a39.data.Amount > 0 && e++;
                }
                var t = 1;
                e > 8 && (t = 8 / e);
                var a = 0;
                for (var _e38 in this.itemViewDic) {
                    var _i22 = this.itemViewDic[_e38];
                    if (_i22 && _i22.data.Amount > 0) {
                        var _e39 = 70 * t * a;
                        _i22.bg.top = _e39, _i22.bg.scale(t, t), a++;
                    }
                }
            }
        }, {
            key: "onRefresh",
            value: function onRefresh(e) {
                var t = this.itemViewDic[e];
                if (t) t.refreshView(); else {
                    var _t51 = Ee.Instance.AllProductDataDic[e];
                    if (_t51) {
                        var _e40 = 70, _a40 = Ae.createView(_t51, this.rootView, _e40, 1);
                        this.itemViewDic[_t51.ProductId] = _a40;
                    }
                }
            }
        }, {
            key: "onRefreshAll",
            value: function onRefreshAll() {
                for (var _e41 in this.itemViewDic) {
                    this.itemViewDic[_e41].refreshView();
                }
            }
        }, {
            key: "getItemViewPosition",
            value: function getItemViewPosition(e) {
                var t = this.itemViewDic[e];
                if (t) {
                    var _e42 = this.rootView.left, _a41 = sa.Instance.statusBarHeight + this.rootView.top + t.bg.top;
                    return new Laya.Vector2(_e42, _a41);
                }
                return null;
            }
        }, {
            key: "productIconFlyToUI",
            value: function productIconFlyToUI(e, t) {
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
                var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
                this.productIconImgaeIndex >= this.productIconImageArray.length && (this.productIconImgaeIndex = 0), 
                a = k.ProductType(t);
                var o = this.getItemViewPosition(t), s = !1;
                if (!(o || (s = !0, i ? Ee.Instance.addProductAmount(t, n) : Ee.Instance.addProductAmount(t, 1), 
                o = this.getItemViewPosition(t)))) return;
                var r = this.productIconImageArray[this.productIconImgaeIndex], l = !1, c = "PastureUI/Main/animal_" + t + ".png";
                switch (a) {
                  case 1:
                    c = "PastureUI/Main2/fruit_" + t + ".png";
                    break;

                  case 2:
                    c = "PastureUI/Main2/honey_" + t + ".png";
                    break;

                  case 3:
                    c = "PastureUI/Main/crops_" + t + ".png";
                }
                r || ((r = new Laya.Image(c)).size(66, 66), this.productIconImageArray[this.productIconImgaeIndex] = r, 
                l = !0), r.skin = c, this.productIconImgaeIndex++;
                var h = new Laya.Vector4();
                pe.Instance.mainCamera.viewport.project(e, pe.Instance.mainCamera.projectionViewMatrix, h);
                var d = h.x / Laya.stage.clientScaleX - .5 * r.width, m = h.y / Laya.stage.clientScaleY - .5 * r.height;
                r.x = d, r.y = m, l ? Laya.stage.addChild(r) : r.visible = !0;
                var g = Math.round(.8 * Laya.Vector2.scalarLength(new Laya.Vector2(o.x - d, o.y - m)));
                Laya.Tween.to(r, {
                    x: o.x,
                    y: o.y
                }, g, Laya.Ease.linearIn, new Laya.Handler(r, function() {
                    r.visible = !1, s || (i ? Ee.Instance.addProductAmount(t, n) : Ee.Instance.addProductAmount(t, 1));
                }));
            }
        }, {
            key: "productFlyToNPC",
            value: function productFlyToNPC(e, t, a) {
                this.productIconImgaeIndex >= this.productIconImageArray.length && (this.productIconImgaeIndex = 0);
                var i = this.getItemViewPosition(t);
                if (!i) return;
                var n = this.productIconImageArray[this.productIconImgaeIndex], o = !1, s = "PastureUI/Main/animal_" + t + ".png";
                t > 6e3 ? s = "PastureUI/Main/crops_" + t + ".png" : t > 5e3 ? s = "PastureUI/Main2/honey_" + t + ".png" : t > 4e3 ? s = "PastureUI/Main2/fruit_" + t + ".png" : t > 2e3 && (s = "PastureUI/Main/animal_" + t + ".png"), 
                n || ((n = new Laya.Image(s)).size(66, 66), this.productIconImageArray[this.productIconImgaeIndex] = n, 
                o = !0), n.skin = s, this.productIconImgaeIndex++;
                var l = r.positionToUIPoint(e.transform.position, pe.Instance.mainCamera);
                l.x -= .5 * n.width, l.y -= .5 * n.height, l.y -= 20, n.x = i.x, n.y = i.y, o ? Laya.stage.addChild(n) : n.visible = !0;
                var c = [], h = new Laya.Point((i.x + l.x) / 2 + -1 * (50 + Math.random() * Laya.stage.width * .3), .5 * (i.y + l.y));
                c.push(i), c.push(h), c.push(l);
                var d = ye.CreateBezierPoints(c, 30), m = 0, g = function g() {
                    m > d.length - 1 ? (n.visible = !1, m = 0, Ie.Instance.goldFly(e.transform.position, a)) : (n.pos(d[m].x, d[m].y), 
                    Laya.timer.frameOnce(1, this, g)), m++;
                };
                g();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Ce.mInstance;
            }
        } ]);
        return Ce;
    }(Laya.Script);
    var Ae = /* */ function() {
        function Ae() {
            _classCallCheck2(this, Ae);
        }
        _createClass2(Ae, [ {
            key: "refreshView",
            value: function refreshView() {
                this.data.Amount <= 0 ? this.bg.visible = !1 : (this.bg.visible = !0, this.titleLabel.text = this.data.Amount.toString());
            }
        } ], [ {
            key: "createView",
            value: function createView(e, t, a) {
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
                if (!e) return null;
                var n = new Ae();
                n.data = e;
                var o = new Laya.Image("PastureUI/Main/zjm_07.png");
                o.size(169, 66), o.left = 0, o.top = a, n.bg = o;
                var s = "PastureUI/Main/animal_" + e.i + ".png";
                switch (e.Type) {
                  case 1:
                    s = "PastureUI/Main2/fruit_" + e.i + ".png";
                    break;

                  case 2:
                    s = "PastureUI/Main2/honey_" + e.i + ".png";
                    break;

                  case 3:
                    s = "PastureUI/Main/crops_" + e.i + ".png";
                }
                var r = new Laya.Image(s);
                r.size(66, 66), r.left = 0, r.top = -7, n.itemImage = r, o.addChild(r);
                var l = new Laya.Label();
                return l.width = 100, l.bold = !0, l.fontSize = 32, l.color = "#343434", l.align = "center", 
                l.valign = "middle", l.centerX = 24, l.centerY = -3, l.text = e.Amount.toString(), 
                n.titleLabel = l, o.addChild(l), t.addChild(n.bg), n.bg.scale(i, i), n;
            }
        } ]);
        return Ae;
    }();
    var Le = /* */ function() {
        function Le() {
            _classCallCheck2(this, Le);
            this.type = 1, this.hConfig = null;
        }
        _createClass2(Le, [ {
            key: "honeyConfig",
            get: function get() {
                return this.hConfig || (this.honeyConfigId = this.ProductId, this.hConfig = Jt.Instance.HoneyConfig.getItem(this.honeyConfigId.toString())), 
                this.hConfig;
            }
        }, {
            key: "ProductId",
            get: function get() {
                return 5e3 + this.type;
            }
        }, {
            key: "K",
            get: function get() {
                return this.x + "_" + this.z;
            }
        } ]);
        return Le;
    }();
    var Se = /* */ function() {
        function Se() {
            _classCallCheck2(this, Se);
            this.name = "BeehiveMapConfig", this.BeehiveMapConfigArray = new Array(), this.BeehiveMapConfigDic = {}, 
            this.tempMapDicDic = {};
        }
        _createClass2(Se, [ {
            key: "Path",
            get: function get() {
                return m.localConfig + this.name + Zt.Instance.SceneIndex + ".txt";
            }
        }, {
            key: "loadConfig",
            value: function loadConfig() {
                for (var _e43 = 1; _e43 <= Zt.Instance.SceneCount; _e43++) {
                    if (_e43 != Zt.Instance.SceneIndex) {
                        var _t52 = m.localConfig + this.name + _e43 + ".txt";
                        Laya.loader.load(_t52, null, null, Laya.Loader.TEXT);
                    }
                }
                var e = this.Path;
                Laya.loader.load(e, Laya.Handler.create(this, this.onLoaclLoded), null, Laya.Loader.TEXT);
            }
        }, {
            key: "onLoaclLoded",
            value: function onLoaclLoded() {
                this.BeehiveMapConfigArray = new Array(), this.BeehiveMapConfigDic = {};
                var t = this.Path, a = Laya.loader.getRes(t), i = JSON.parse(a).beehiveMap;
                var _iterator6 = _createForOfIteratorHelper2(i), _step6;
                try {
                    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                        var _e44 = _step6.value;
                        if (_e44) {
                            var _t53 = new Le();
                            _t53.id = _e44.i, _t53.x = -Number(_e44.x), _t53.z = Number(_e44.z);
                            var _a42 = _t53.K, _i23 = ea.Instance.baseMapConfigDic[_a42];
                            _i23 && (_i23.functionType = n.Beehive, _i23.functionConfig = _t53), this.BeehiveMapConfigArray.push(_t53), 
                            this.BeehiveMapConfigDic[_a42] = _t53;
                        }
                    }
                } catch (err) {
                    _iterator6.e(err);
                } finally {
                    _iterator6.f();
                }
                Laya.stage.event(e.CONFIG_PROGRESS, this.name);
            }
        }, {
            key: "getMapDicFromFileBySceneIndex",
            value: function getMapDicFromFileBySceneIndex(e) {
                if (this.tempMapDicDic[e]) return this.tempMapDicDic[e];
                {
                    var _t54 = {}, _a43 = m.localConfig + this.name + e + ".txt", _i24 = Laya.loader.getRes(_a43), _n7 = JSON.parse(_i24).beehiveMap;
                    var _iterator7 = _createForOfIteratorHelper2(_n7), _step7;
                    try {
                        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                            var _e45 = _step7.value;
                            if (_e45) {
                                var _a44 = new Le();
                                _a44.id = _e45.i, _a44.x = -Number(_e45.x), _a44.z = Number(_e45.z), _t54[_a44.K] = _a44;
                            }
                        }
                    } catch (err) {
                        _iterator7.e(err);
                    } finally {
                        _iterator7.f();
                    }
                    return this.tempMapDicDic[e] = _t54, _t54;
                }
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Se.instance || (Se.instance = new Se()), Se.instance;
            }
        } ]);
        return Se;
    }();
    Se.instance = null;
    var ke = /* */ function() {
        function ke() {
            _classCallCheck2(this, ke);
            this.beehiveControllerList = new P(), this.beehiveControllerDic = {}, this.beehiveInfoDic = {}, 
            this.beehiveUnitDataDic = {};
        }
        _createClass2(ke, [ {
            key: "loadData",
            value: function loadData() {
                var e = ta.loadBeehiveBlockData();
                this.beehiveInfoDic = e;
            }
        }, {
            key: "clear",
            value: function clear() {
                this.beehiveInfoDic = {}, this.beehiveControllerList.clear(), this.beehiveControllerDic = {}, 
                this.beehiveUnitDataDic = {};
            }
        }, {
            key: "addBHBlockAfterEntryGame",
            value: function addBHBlockAfterEntryGame(e) {
                e && (this.beehiveInfoDic[e.k] || (this.beehiveInfoDic[e.k] = e, this.save()));
            }
        }, {
            key: "getPTlockByKey",
            value: function getPTlockByKey(e) {
                return this.beehiveInfoDic[e];
            }
        }, {
            key: "addBHController",
            value: function addBHController(e) {
                e && (this.beehiveControllerDic[e.beehiveMapConfig.K] || (this.beehiveControllerDic[e.beehiveMapConfig.K] = e, 
                this.beehiveControllerList.append(e))), Laya.timer.frameOnce(3, this, this.refreshPastureUnitDataDic);
            }
        }, {
            key: "refreshPastureUnitDataDic",
            value: function refreshPastureUnitDataDic() {
                var e = {};
                for (var _t55 = 1; _t55 <= Zt.Instance.SceneCount; _t55++) {
                    if (_t55 == Zt.Instance.SceneIndex) {
                        var _t56 = this.beehiveControllerList.getHead();
                        for (;_t56; ) {
                            var _a45 = _t56.element;
                            if (_a45) {
                                var _t57 = _a45.beehiveMapConfig.honeyConfig.id, _i25 = e[_t57];
                                _i25 || (_i25 = new be(_t57), e[_t57] = _i25), _i25.blockAmount++;
                            }
                            _t56 = _t56.next;
                        }
                    } else {
                        var _a46 = ta.loadBeehiveBlockData(_t55), _i26 = Se.Instance.getMapDicFromFileBySceneIndex(_t55);
                        if (_a46 && _i26) for (var _t58 in _a46) {
                            if (_a46[_t58]) {
                                var _a47 = _i26[_t58];
                                if (_a47) {
                                    var _t59 = _a47.ProductId, _i27 = e[_t59];
                                    _i27 || (_i27 = new be(_t59), e[_t59] = _i27), _i27.blockAmount++;
                                }
                            }
                        }
                    }
                }
                this.beehiveUnitDataDic = e;
            }
        }, {
            key: "refreshPastureUnitDataDicOldInterface",
            value: function refreshPastureUnitDataDicOldInterface() {
                var e = this.beehiveControllerList.getHead(), t = {};
                for (;e; ) {
                    var _a48 = e.element;
                    if (_a48) {
                        var _e46 = _a48.beehiveMapConfig.honeyConfig.id, _i28 = t[_e46];
                        _i28 || (_i28 = new be(_e46), t[_e46] = _i28), _i28.blockAmount++;
                    }
                    e = e.next;
                }
                this.beehiveUnitDataDic = t;
            }
        }, {
            key: "getBHControllerByKey",
            value: function getBHControllerByKey(e) {
                return this.beehiveControllerDic[e];
            }
        }, {
            key: "getHoneyCurrentPriceByHoneyId",
            value: function getHoneyCurrentPriceByHoneyId(e) {
                var t = Jt.Instance.HoneyConfig.getItem(e.toString()), a = ke.Instance.beehiveUnitDataDic[e];
                if (a && t) {
                    var _e47 = a.blockAmount;
                    return _e47 > 0 ? t.p + t.gu * (_e47 - 1) : 0;
                }
                return 0;
            }
        }, {
            key: "save",
            value: function save() {
                ta.saveBeehiveBlockData(this.beehiveInfoDic);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return ke.mInstance || (ke.mInstance = new ke()), ke.mInstance;
            }
        } ]);
        return ke;
    }();
    var be = function be(e) {
        _classCallCheck2(this, be);
        this.fruitId = 0, this.blockAmount = 0, this.fruitId = e, this.blockAmount = 0;
    };
    var Be = /* */ function() {
        function Be() {
            _classCallCheck2(this, Be);
            this.farmInfoDic = {}, this.farmControllerList = new P(), this.farmControllerDic = {}, 
            this.farmUnitDataDic = {};
        }
        _createClass2(Be, [ {
            key: "loadData",
            value: function loadData() {
                var e = ta.loadFarmBlockData();
                this.farmInfoDic = e;
            }
        }, {
            key: "clear",
            value: function clear() {
                this.farmInfoDic = {}, this.farmControllerList.clear(), this.farmControllerDic = {}, 
                this.farmUnitDataDic = {};
            }
        }, {
            key: "addFarmBlockAfterEntryGame",
            value: function addFarmBlockAfterEntryGame(e) {
                e && (this.farmInfoDic[e.k] || (this.farmInfoDic[e.k] = e, this.save()));
            }
        }, {
            key: "getFarmBlockByKey",
            value: function getFarmBlockByKey(e) {
                return this.farmInfoDic[e];
            }
        }, {
            key: "addFarmController",
            value: function addFarmController(e) {
                e && (this.farmControllerDic[e.farmBlockInfo.k] || (this.farmControllerDic[e.farmBlockInfo.k] = e, 
                this.farmControllerList.append(e))), Laya.timer.frameOnce(3, this, this.refreshProductUnitDataDic);
            }
        }, {
            key: "getPBySceneIdAndAnimalId",
            value: function getPBySceneIdAndAnimalId(e, t) {
                for (var _a49 in this.farmInfoDic) {
                    var _i29 = this.farmInfoDic[_a49];
                    if (_i29 && _i29.treeClear && _i29.Config && _i29.Config.Config.id == t) {
                        var _t60 = ea.Instance.baseMapConfigDic[_a49];
                        if (_t60 && _t60.sceneId == e) return _i29;
                    }
                }
                return null;
            }
        }, {
            key: "getPControllerByKey",
            value: function getPControllerByKey(e) {
                return this.farmControllerDic[e];
            }
        }, {
            key: "save",
            value: function save() {
                ta.saveFarmBlockData(this.farmInfoDic);
            }
        }, {
            key: "allPastureAnimalBeAdult",
            value: function allPastureAnimalBeAdult() {
                var e = this.farmControllerList.getHead();
                for (;e; ) {
                    var _t61 = e.element;
                    _t61 && _t61.farmBlockInfo.tC && _t61.farmBlockInfo.State < 2 && _t61.neighborCropsPool.autoBeAdultAnimal(), 
                    e = e.next;
                }
            }
        }, {
            key: "refreshProductUnitDataDic",
            value: function refreshProductUnitDataDic() {
                var e = this.farmControllerList.getHead(), t = {};
                for (;e; ) {
                    var _a50 = e.element;
                    if (_a50) {
                        var _e48 = _a50.farmBlockConfig.Config.id, _i30 = t[_e48];
                        _i30 || (_i30 = new Te(_e48), t[_e48] = _i30), _i30.blockAmount++;
                    }
                    e = e.next;
                }
                this.farmUnitDataDic = t;
            }
        }, {
            key: "getProductCurrentPriceByProductId",
            value: function getProductCurrentPriceByProductId(e) {
                var t = Jt.Instance.CropsConfig.getItem(e.toString()), a = Be.Instance.farmUnitDataDic[e];
                if (a && t) {
                    var _e49 = a.blockAmount;
                    return _e49 > 0 ? t.p + t.gu * (_e49 - 1) : 0;
                }
                return 0;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Be.mInstance || (Be.mInstance = new Be()), Be.mInstance;
            }
        } ]);
        return Be;
    }();
    var Te = function Te(e) {
        _classCallCheck2(this, Te);
        this.animalId = 0, this.blockAmount = 0, this.animalId = e, this.blockAmount = 0;
    };
    var Me = /* */ function() {
        function Me() {
            _classCallCheck2(this, Me);
            this.fConfig = null;
        }
        _createClass2(Me, [ {
            key: "fruitConfig",
            get: function get() {
                return this.fConfig || (this.fruitConfigId = this.FruitId, this.fConfig = Jt.Instance.FruitConfig.getItem(this.fruitConfigId.toString())), 
                this.fConfig;
            }
        }, {
            key: "FruitId",
            get: function get() {
                return 4e3 + this.type;
            }
        }, {
            key: "K",
            get: function get() {
                return this.x + "_" + this.z;
            }
        } ]);
        return Me;
    }();
    var Pe = /* */ function() {
        function Pe() {
            _classCallCheck2(this, Pe);
            this.name = "FruitTreeMapConfig", this.FruitTreeMapConfigArray = new Array(), this.FruitTreeMapConfigDic = {}, 
            this.tempMapDicDic = {};
        }
        _createClass2(Pe, [ {
            key: "Path",
            get: function get() {
                return m.localConfig + this.name + Zt.Instance.SceneIndex + ".txt";
            }
        }, {
            key: "loadConfig",
            value: function loadConfig() {
                var e = this.Path;
                for (var _e50 = 1; _e50 <= Zt.Instance.SceneCount; _e50++) {
                    if (_e50 != Zt.Instance.SceneIndex) {
                        var _t62 = m.localConfig + this.name + _e50 + ".txt";
                        Laya.loader.load(_t62, null, null, Laya.Loader.TEXT);
                    }
                }
                Laya.loader.load(e, Laya.Handler.create(this, this.onLoaclLoded), null, Laya.Loader.TEXT);
            }
        }, {
            key: "onLoaclLoded",
            value: function onLoaclLoded() {
                this.FruitTreeMapConfigArray = new Array(), this.FruitTreeMapConfigDic = {};
                var t = this.Path, a = Laya.loader.getRes(t), i = JSON.parse(a).fruitTreeMap;
                var _iterator8 = _createForOfIteratorHelper2(i), _step8;
                try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                        var _e51 = _step8.value;
                        if (_e51) {
                            var _t63 = new Me();
                            _t63.id = _e51.i, _t63.x = -Number(_e51.x), _t63.z = Number(_e51.z), _t63.type = Number(_e51.t);
                            var _a51 = _t63.K, _i31 = ea.Instance.baseMapConfigDic[_a51];
                            _i31 && (_i31.functionType = n.FruitTree, _i31.functionConfig = _t63), this.FruitTreeMapConfigArray.push(_t63), 
                            this.FruitTreeMapConfigDic[_a51] = _t63;
                        }
                    }
                } catch (err) {
                    _iterator8.e(err);
                } finally {
                    _iterator8.f();
                }
                Laya.stage.event(e.CONFIG_PROGRESS, this.name);
            }
        }, {
            key: "getMapDicFromFileBySceneIndex",
            value: function getMapDicFromFileBySceneIndex(e) {
                if (this.tempMapDicDic[e]) return this.tempMapDicDic[e];
                {
                    var _t64 = {}, _a52 = m.localConfig + this.name + e + ".txt", _i32 = Laya.loader.getRes(_a52), _n8 = JSON.parse(_i32).fruitTreeMap;
                    var _iterator9 = _createForOfIteratorHelper2(_n8), _step9;
                    try {
                        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
                            var _e52 = _step9.value;
                            if (_e52) {
                                var _a53 = new Me();
                                _a53.id = _e52.i, _a53.x = -Number(_e52.x), _a53.z = Number(_e52.z), _a53.type = Number(_e52.t), 
                                _t64[_a53.K] = _a53;
                            }
                        }
                    } catch (err) {
                        _iterator9.e(err);
                    } finally {
                        _iterator9.f();
                    }
                    return this.tempMapDicDic[e] = _t64, _t64;
                }
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Pe.instance || (Pe.instance = new Pe()), Pe.instance;
            }
        } ]);
        return Pe;
    }();
    Pe.instance = null;
    var ve = /* */ function() {
        function ve() {
            _classCallCheck2(this, ve);
            this.fruitTreeControllerList = new P(), this.fruitTreeControllerDic = {}, this.fruitTreeInfoDic = {}, 
            this.fruitTreeUnitDataDic = {};
        }
        _createClass2(ve, [ {
            key: "loadData",
            value: function loadData() {
                var e = ta.loadFruitTreeBlockData();
                this.fruitTreeInfoDic = e;
            }
        }, {
            key: "clear",
            value: function clear() {
                this.fruitTreeInfoDic = {}, this.fruitTreeControllerList.clear(), this.fruitTreeControllerDic = {}, 
                this.fruitTreeUnitDataDic = {};
            }
        }, {
            key: "addFTBlockAfterEntryGame",
            value: function addFTBlockAfterEntryGame(e) {
                e && (this.fruitTreeInfoDic[e.k] || (this.fruitTreeInfoDic[e.k] = e, this.save()));
            }
        }, {
            key: "getPTlockByKey",
            value: function getPTlockByKey(e) {
                return this.fruitTreeInfoDic[e];
            }
        }, {
            key: "addFTController",
            value: function addFTController(e) {
                e && (this.fruitTreeControllerDic[e.fruitTreeMapConfig.K] || (this.fruitTreeControllerDic[e.fruitTreeMapConfig.K] = e, 
                this.fruitTreeControllerList.append(e))), Laya.timer.frameOnce(3, this, this.refreshProductUnitDataDic);
            }
        }, {
            key: "refreshProductUnitDataDic",
            value: function refreshProductUnitDataDic() {
                var e = {};
                for (var _t65 = 1; _t65 <= Zt.Instance.SceneCount; _t65++) {
                    if (_t65 == Zt.Instance.SceneIndex) {
                        var _t66 = this.fruitTreeControllerList.getHead();
                        for (;_t66; ) {
                            var _a54 = _t66.element;
                            if (_a54) {
                                var _t67 = _a54.fruitTreeMapConfig.fruitConfig.id, _i33 = e[_t67];
                                _i33 || (_i33 = new _e(_t67), e[_t67] = _i33), _i33.blockAmount++;
                            }
                            _t66 = _t66.next;
                        }
                    } else {
                        var _a55 = ta.loadFruitTreeBlockData(_t65), _i34 = Pe.Instance.getMapDicFromFileBySceneIndex(_t65);
                        if (_a55 && _i34) for (var _t68 in _a55) {
                            if (_a55[_t68]) {
                                var _a56 = _i34[_t68];
                                if (_a56) {
                                    var _t69 = _a56.FruitId, _i35 = e[_t69];
                                    _i35 || (_i35 = new _e(_t69), e[_t69] = _i35), _i35.blockAmount++;
                                }
                            }
                        }
                    }
                }
                this.fruitTreeUnitDataDic = e;
            }
        }, {
            key: "refreshPastureUnitDataDicOldInterface",
            value: function refreshPastureUnitDataDicOldInterface() {
                var e = this.fruitTreeControllerList.getHead(), t = {};
                for (;e; ) {
                    var _a57 = e.element;
                    if (_a57) {
                        var _e53 = _a57.fruitTreeMapConfig.fruitConfig.id, _i36 = t[_e53];
                        _i36 || (_i36 = new _e(_e53), t[_e53] = _i36), _i36.blockAmount++;
                    }
                    e = e.next;
                }
                this.fruitTreeUnitDataDic = t;
            }
        }, {
            key: "getFTControllerByKey",
            value: function getFTControllerByKey(e) {
                return this.fruitTreeControllerDic[e];
            }
        }, {
            key: "getFruitCurrentPriceByFruitId",
            value: function getFruitCurrentPriceByFruitId(e) {
                var t = Jt.Instance.FruitConfig.getItem(e.toString()), a = ve.Instance.fruitTreeUnitDataDic[e];
                if (a && t) {
                    var _e54 = a.blockAmount;
                    return _e54 > 0 ? t.p + t.gu * (_e54 - 1) : 0;
                }
                return 0;
            }
        }, {
            key: "save",
            value: function save() {
                ta.saveFruitTreeBlockData(this.fruitTreeInfoDic);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return ve.mInstance || (ve.mInstance = new ve()), ve.mInstance;
            }
        } ]);
        return ve;
    }();
    var _e = function _e(e) {
        _classCallCheck2(this, _e);
        this.fruitId = 0, this.blockAmount = 0, this.fruitId = e, this.blockAmount = 0;
    };
    var xe = /* */ function(_Laya$Script3) {
        _inherits2(xe, _Laya$Script3);
        var _super4 = _createSuper2(xe);
        function xe() {
            var _this11;
            _classCallCheck2(this, xe);
            _this11 = _super4.call(this), _this11.type = 0, xe.mInstance = _assertThisInitialized2(_this11);
            return _this11;
        }
        _createClass2(xe, [ {
            key: "onAwake",
            value: function onAwake() {
                this.rootView = this.owner, this.rootView.visible = !1;
                var e = this.rootView.getChildByName("BgImage");
                this.ShopPartView = e.getChildByName("ShopPart"), this.ShopAllView = e.getChildByName("ShopAll"), 
                this.totalPriceLabel = this.ShopAllView.getChildByName("priceBg").getChildByName("priceLabel"), 
                this.partItemArray = new Array(3);
                for (var _e55 = 0; _e55 < 3; _e55++) {
                    var _t70 = new De();
                    this.partItemArray[_e55] = _t70;
                    var _a58 = this.ShopPartView.getChildByName("item" + _e55);
                    _t70.blockAmountLabel = _a58.getChildByName("bABg").getChildByName("bAmountLabel"), 
                    _t70.itemImage = _a58.getChildByName("itemImgae"), _t70.priceLabel = _a58.getChildByName("priceBg").getChildByName("priceLabel");
                }
            }
        }, {
            key: "onRefresh",
            value: function onRefresh() {
                if (this.rootView && this.shopBController) if (0 == this.type) {
                    this.ShopAllView.visible = !0, this.ShopPartView.visible = !1;
                    var _e56 = Ee.Instance.CurrentAllProductTotalPrice;
                    this.totalPriceLabel.text = r.number2DataUnitString(_e56);
                } else {
                    this.ShopAllView.visible = !1, this.ShopPartView.visible = !0;
                    var _e57 = this.shopBController.shopConfig.productIdArray;
                    for (var _t71 = 0; _t71 < 3; _t71++) {
                        var _a59 = _e57[_t71];
                        this.partItemArray[_t71].refresh(_a59);
                    }
                }
            }
        }, {
            key: "show",
            value: function show(e) {
                this.type = e.shopConfig.type, this.shopBController = e, this.onRefreshPosition(), 
                this.onRefresh(), this.rootView.visible = !0;
            }
        }, {
            key: "onRefreshPosition",
            value: function onRefreshPosition() {
                if (this.shopBController && this.shopBController.gameObject) {
                    var _e58 = r.positionToUIPoint(this.shopBController.gameObject.transform.position, pe.Instance.mainCamera);
                    this.rootView.x = _e58.x, this.rootView.y = _e58.y - 250;
                }
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                this.rootView.visible && this.onRefreshPosition();
            }
        }, {
            key: "hide",
            value: function hide() {
                this.rootView.visible = !1;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return xe.mInstance;
            }
        } ]);
        return xe;
    }(Laya.Script);
    var De = /* */ function() {
        function De() {
            _classCallCheck2(this, De);
        }
        _createClass2(De, [ {
            key: "refresh",
            value: function refresh(e) {
                var t, a = 0;
                switch (k.ProductType(e)) {
                  case 3:
                    this.itemImage.skin = "PastureUI/Main/crops_" + e + ".png", a = Be.Instance.getProductCurrentPriceByProductId(e), 
                    (t = Be.Instance.farmUnitDataDic[e]) || (t = new _e(e));
                    break;

                  case 2:
                    this.itemImage.skin = "PastureUI/Main2/honey_" + e + ".png", a = ke.Instance.getHoneyCurrentPriceByHoneyId(e), 
                    (t = ke.Instance.beehiveUnitDataDic[e]) || (t = new _e(e));
                    break;

                  case 1:
                    this.itemImage.skin = "PastureUI/Main2/fruit_" + e + ".png", a = ve.Instance.getFruitCurrentPriceByFruitId(e), 
                    (t = ve.Instance.fruitTreeUnitDataDic[e]) || (t = new _e(e));
                    break;

                  default:
                    this.itemImage.skin = "PastureUI/Main/animal_" + e + ".png", a = me.Instance.getAnimalCurrentPriceByAnimalId(e), 
                    (t = me.Instance.pastureUnitDataDic[e]) || (t = new ge(e));
                }
                this.blockAmountLabel.text = t.blockAmount.toString(), this.priceLabel.text = 0 == a ? "?" : r.number2DataUnitString(a);
            }
        } ]);
        return De;
    }();
    var Oe = /* */ function() {
        function Oe() {
            _classCallCheck2(this, Oe);
            this.shopControllerList = new P(), this.shopControllerDic = {};
        }
        _createClass2(Oe, [ {
            key: "clear",
            value: function clear() {
                this.shopControllerList.clear(), this.shopControllerDic = {};
            }
        }, {
            key: "addSController",
            value: function addSController(e) {
                e && (this.shopControllerDic[e.shopConfig.K] || (this.shopControllerDic[e.shopConfig.K] = e, 
                this.shopControllerList.append(e)));
            }
        }, {
            key: "getSControllerByKey",
            value: function getSControllerByKey(e) {
                return this.shopControllerDic[e];
            }
        }, {
            key: "bigShopUnlocked",
            value: function bigShopUnlocked() {
                if (this.shopControllerList) {
                    var _e59 = this.shopControllerList.getHead();
                    for (;_e59; ) {
                        if (_e59.element && _e59.element.shopConfig.isPurchaseAllAnimal) return !0;
                        _e59 = _e59.next;
                    }
                }
                return !1;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Oe.mInstance || (Oe.mInstance = new Oe()), Oe.mInstance;
            }
        } ]);
        return Oe;
    }();
    var Ve = /* */ function() {
        function Ve() {
            _classCallCheck2(this, Ve);
            this.switchSceneControllerList = new P(), this.switchSceneControllerDic = {};
        }
        _createClass2(Ve, [ {
            key: "clear",
            value: function clear() {
                this.switchSceneControllerList.clear(), this.switchSceneControllerDic = {};
            }
        }, {
            key: "addSController",
            value: function addSController(e) {
                e && (this.switchSceneControllerDic[e.switchSceneConfig.K] || (this.switchSceneControllerDic[e.switchSceneConfig.K] = e, 
                this.switchSceneControllerList.append(e)));
            }
        }, {
            key: "getSControllerByKey",
            value: function getSControllerByKey(e) {
                return this.switchSceneControllerDic[e];
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Ve.mInstance || (Ve.mInstance = new Ve()), Ve.mInstance;
            }
        } ]);
        return Ve;
    }();
    var Ge = /* */ function() {
        function Ge() {
            _classCallCheck2(this, Ge);
            this.baseBlockDataDic = {};
        }
        _createClass2(Ge, [ {
            key: "clear",
            value: function clear() {
                this.baseBlockDataDic = {};
            }
        }, {
            key: "addBaseBlockModel",
            value: function addBaseBlockModel(e, t) {
                if (t) {
                    var _a60 = new Ne();
                    _a60.commonBlockItem = e, _a60.blockModel = t, _a60.x = Math.round(t.transform.position.x), 
                    _a60.z = Math.round(t.transform.position.z), this.baseBlockDataDic[e.k] = _a60;
                }
            }
        }, {
            key: "getBaseModelByKey",
            value: function getBaseModelByKey(e) {
                return this.baseBlockDataDic[e];
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Ge.mInstance || (Ge.mInstance = new Ge()), Ge.mInstance;
            }
        } ]);
        return Ge;
    }();
    var Ne = function Ne() {
        _classCallCheck2(this, Ne);
    };
    var Ee = /* */ function() {
        function Ee() {
            _classCallCheck2(this, Ee);
            this.unlockBlockDic = {}, this.blockAmount = 0, this.sceneBlockAmountArray = [ 0, 0, 0, 0 ], 
            this.productDataDic = {}, this._pauseTime = 0;
        }
        _createClass2(Ee, [ {
            key: "init",
            value: function init() {}
        }, {
            key: "loadGameBaseData",
            value: function loadGameBaseData() {
                this.onBaseDataResponse(null);
            }
        }, {
            key: "onBaseDataResponse",
            value: function onBaseDataResponse(e) {
                var t = Number(ta.getGameData().gc);
                this.goldCoin = t, this.motorbycleTime = Number(ta.getGameData().mT), this.strongTime = Number(ta.getGameData().sT), 
                this.woodAmount = Number(ta.getGameData().wA);
                var a = ta.getGameData().sBAA;
                if (a) for (var _e60 = 0; _e60 < a.length; _e60++) {
                    this.sceneBlockAmountArray[_e60] = a[_e60];
                }
                this.loadCurrentSceneMapData();
                var i = ta.getGameData().pDD;
                i && this.initProducts(i), this.onGameDataComplete();
            }
        }, {
            key: "loadCurrentSceneMapData",
            value: function loadCurrentSceneMapData() {
                var e = ta.loadUnlockBlockData();
                this.initUnlockBlock(e), me.Instance.loadData(), Be.Instance.loadData(), ce.Instance.loadData(), 
                ve.Instance.loadData(), ke.Instance.loadData(), this.initDetectDic();
            }
        }, {
            key: "clearSceneMapData",
            value: function clearSceneMapData() {
                this.unlockBlockDic = null, Ge.Instance.clear(), me.Instance.clear(), Be.Instance.clear(), 
                ce.Instance.clear(), ve.Instance.clear(), ke.Instance.clear(), Oe.Instance.clear(), 
                Ve.Instance.clear();
            }
        }, {
            key: "initDetectDic",
            value: function initDetectDic() {
                de.Instance.initDetectBlockList();
            }
        }, {
            key: "onGameDataComplete",
            value: function onGameDataComplete() {
                this.updateUserProgress(), Laya.stage.event(e.INIT_GAME_DATA);
            }
        }, {
            key: "allUnlockBlock",
            get: function get() {
                return this.unlockBlockDic;
            }
        }, {
            key: "getUnlockBlockByKey",
            value: function getUnlockBlockByKey(e) {
                return this.allUnlockBlock[e];
            }
        }, {
            key: "addUnlockBlock",
            value: function addUnlockBlock(e) {
                e && (e.IsUnlocked || e.CanStartUnlock) && (this.unlockBlockDic[e.k] || (this.unlockBlockDic[e.k] = e, 
                this.saveUnlockBlock(), e.IsUnlocked ? this.refreshBlockAmount() : le.Instance.createLockBlock(e)));
            }
        }, {
            key: "initUnlockBlock",
            value: function initUnlockBlock(e) {
                this.unlockBlockDic = e, this.refreshBlockAmount();
            }
        }, {
            key: "saveUnlockBlock",
            value: function saveUnlockBlock() {
                this.unlockBlockDic && ta.saveUnlockBlockData(this.unlockBlockDic);
            }
        }, {
            key: "UnlockAmount",
            get: function get() {
                return this.blockAmount;
            }
        }, {
            key: "refreshBlockAmount",
            value: function refreshBlockAmount() {
                var e = 0;
                for (var _t72 in this.unlockBlockDic) {
                    var _a61 = this.unlockBlockDic[_t72];
                    _a61 && _a61.IsUnlocked && e++;
                }
                var t = Zt.Instance.SceneIndex - 1;
                this.sceneBlockAmountArray[t] != e && (this.sceneBlockAmountArray[t] = e, ta.getGameData().sBAA = this.sceneBlockAmountArray, 
                ta.saveGameData());
                var a = 0;
                for (var _e61 = 0; _e61 < this.sceneBlockAmountArray.length; _e61++) {
                    a += this.sceneBlockAmountArray[_e61];
                }
                this.blockAmount = a, console.log("当前拥有地块" + this.blockAmount);
            }
        }, {
            key: "pauseRecordTime",
            value: function pauseRecordTime() {
                this._pauseTime = r.getNowTimestamp();
            }
        }, {
            key: "resumeRecordTime",
            value: function resumeRecordTime() {
                var t = r.getNowTimestamp() - this._pauseTime;
                this.motorbycleTime && this.motorbycleTime > 0 && t > 10 && (this.motorbycleTime += t, 
                ta.getGameData().mT = this.motorbycleTime, ta.saveGameData(), Laya.stage.event(e.REFRESH_MOTORBYCLE_TIME)), 
                this.strongTime && this.strongTime > 0 && t > 10 && (this.strongTime += t, ta.getGameData().sT = this.strongTime, 
                ta.saveGameData());
            }
        }, {
            key: "getMotorbycleTime",
            value: function getMotorbycleTime() {
                return this.motorbycleTime;
            }
        }, {
            key: "coverMotorbycleTime",
            value: function coverMotorbycleTime(t) {
                t < 0 && (t = 0), this.motorbycleTime = t, ta.getGameData().mT = this.motorbycleTime, 
                ta.saveGameData(), Laya.stage.event(e.REFRESH_MOTORBYCLE_TIME);
            }
        }, {
            key: "getStrongTime",
            value: function getStrongTime() {
                return this.strongTime;
            }
        }, {
            key: "coverStrongTime",
            value: function coverStrongTime(e) {
                e < 0 && (e = 0), this.strongTime = e, ta.getGameData().sT = this.strongTime, ta.saveGameData();
            }
        }, {
            key: "doTaskAddStrongTime",
            value: function doTaskAddStrongTime() {
                if (this.isStrongMode) {
                    var _e62 = this.getStrongTime() + 1e3 * T.Instance.doTaskAddStrongSeconds, _t73 = r.getNowTimestamp() + 1e3 * T.Instance.strongMaxSeconds;
                    _e62 > _t73 && (_e62 = _t73 + 500), this.coverStrongTime(_e62);
                } else {
                    var _e63 = r.getNowTimestamp() + 1e3 * T.Instance.doTaskAddStrongSeconds;
                    this.coverStrongTime(_e63);
                }
            }
        }, {
            key: "isStrongMode",
            get: function get() {
                return r.getNowTimestamp() < this.getStrongTime();
            }
        }, {
            key: "WoodAmount",
            get: function get() {
                return this.woodAmount > T.Instance.woodMaxAmount && (this.woodAmount = T.Instance.woodMaxAmount), 
                this.woodAmount;
            }
        }, {
            key: "WoodPrice",
            get: function get() {
                return T.Instance.woodBasePrice + (this.blockAmount - 1) * T.Instance.woodGrowUpPrice;
            }
        }, {
            key: "GoldReward",
            get: function get() {
                return 40 * this.WoodPrice;
            }
        }, {
            key: "WoodAmountReachedMax",
            get: function get() {
                return this.woodAmount >= T.Instance.woodMaxAmount;
            }
        }, {
            key: "WoodProgress",
            get: function get() {
                return this.WoodAmount / T.Instance.woodMaxAmount;
            }
        }, {
            key: "coverWoodAmount",
            value: function coverWoodAmount(e) {
                e < 0 && (e = 0), this.woodAmount = e, ta.getGameData().wA = this.woodAmount, ta.saveGameData();
            }
        }, {
            key: "woodAddOne",
            value: function woodAddOne() {
                this.WoodAmountReachedMax || this.coverWoodAmount(this.WoodAmount + 1);
            }
        }, {
            key: "initProducts",
            value: function initProducts(e) {
                for (var _t74 in e) {
                    var _a62 = e[_t74];
                    if (_a62) {
                        var _e64 = new ue();
                        _e64.i = Number(_a62.i), _e64.a = Number(_a62.a), this.productDataDic[_e64.i] = _e64;
                    }
                }
            }
        }, {
            key: "AllProductDataDic",
            get: function get() {
                return this.productDataDic;
            }
        }, {
            key: "CurrentAllProductTotalPrice",
            get: function get() {
                var e = Ee.Instance.AllProductDataDic, t = 0;
                for (var _a63 in e) {
                    var _i37 = e[_a63];
                    if (_i37 && _i37.Amount > 0) {
                        var _e65 = Number(_a63), _n9 = 0;
                        switch (k.ProductType(_e65)) {
                          case 3:
                            _n9 = Be.Instance.getProductCurrentPriceByProductId(_e65);
                            break;

                          case 2:
                            _n9 = ke.Instance.getHoneyCurrentPriceByHoneyId(_e65);
                            break;

                          case 1:
                            _n9 = ve.Instance.getFruitCurrentPriceByFruitId(_e65);
                            break;

                          default:
                            _n9 = me.Instance.getAnimalCurrentPriceByAnimalId(_e65);
                        }
                        t += _n9 * _i37.Amount;
                    }
                }
                return t;
            }
        }, {
            key: "sellOutAllProduct",
            value: function sellOutAllProduct() {
                var e = this.CurrentAllProductTotalPrice;
                this.coverGoldCoins(this.getGoldCoins() + e);
                var t = Ee.Instance.AllProductDataDic;
                for (var _e66 in t) {
                    var _a64 = t[_e66];
                    _a64 && _a64.Amount > 0 && (_a64.a = 0);
                }
                return Ce.Instance.onRefreshAll(), xe.Instance.onRefresh(), this.saveAllProduct(), 
                e;
            }
        }, {
            key: "saveAllProduct",
            value: function saveAllProduct() {
                ta.getGameData().pDD = this.productDataDic, ta.saveGameData();
            }
        }, {
            key: "addProductAmount",
            value: function addProductAmount(e, t) {
                var a = this.productDataDic[e];
                a || ((a = new ue()).i = Number(e), a.a = 0, this.productDataDic[e] = a), a.Amount <= 0 ? (a.a = t, 
                Ce.Instance.addShowItemAmount(e)) : (a.a += t, Ce.Instance.onRefresh(e)), ta.getGameData().pDD = this.productDataDic, 
                Laya.timer.frameOnce(3, this, this.savaData);
            }
        }, {
            key: "savaData",
            value: function savaData() {
                ta.saveGameData();
            }
        }, {
            key: "getGoldCoins",
            value: function getGoldCoins() {
                return this.goldCoin;
            }
        }, {
            key: "coverGoldCoins",
            value: function coverGoldCoins(t) {
                t < 0 && (t = 0), this.goldCoin = t, ta.getGameData().gc = this.goldCoin, ta.saveGameData(), 
                Laya.stage.event(e.REFRESH_GAME_GOLD_COINS_UI);
            }
        }, {
            key: "updateUserProgress",
            value: function updateUserProgress() {}
        } ], [ {
            key: "Instance",
            get: function get() {
                return Ee.instance;
            }
        } ]);
        return Ee;
    }();
    Ee.instance = new Ee();
    var Re = /* */ function(_Laya$Script3D2) {
        _inherits2(Re, _Laya$Script3D2);
        var _super5 = _createSuper2(Re);
        function Re() {
            var _this12;
            _classCallCheck2(this, Re);
            _this12 = _super5.apply(this, arguments), _this12.rotating = !0;
            return _this12;
        }
        _createClass2(Re, [ {
            key: "onAwake",
            value: function onAwake() {
                this.gameObject = this.owner, this.animator = this.gameObject.getComponent(Laya.Animator);
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                this.gameObject && this.rotating && (this.gameObject.transform.localRotationEulerY += 5);
            }
        }, {
            key: "startRotate",
            value: function startRotate() {
                this.rotating = !0, this.animator.speed = 0;
            }
        }, {
            key: "stopRotate",
            value: function stopRotate() {
                this.rotating = !1, this.gameObject.transform.localRotationEulerY = 0, this.animator.speed = 1;
            }
        } ]);
        return Re;
    }(Laya.Script3D);
    var Ue = /* */ function() {
        function Ue() {
            _classCallCheck2(this, Ue);
            this.AllGuideIsCompleted = !1, this.guidePositionArray = [ new Laya.Vector3(0, 0, 2), new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 2), new Laya.Vector3(-1, 0, 2), new Laya.Vector3(-2, 0, 2), new Laya.Vector3(0, 0, 2), new Laya.Vector3(-1, 0, 3), new Laya.Vector3(-1, 0, 4), new Laya.Vector3(-2, 0, 4), new Laya.Vector3(-2, 0, 5), new Laya.Vector3(-2, 0, 1), new Laya.Vector3(-2, 0, 0), new Laya.Vector3(-3, 0, 0), new Laya.Vector3(-4, 0, 0), new Laya.Vector3(-5, 0, 0), new Laya.Vector3(-5, 0, 1), new Laya.Vector3(-2, 0, 5), new Laya.Vector3(0, 0, 2), new Laya.Vector3(-3, 0, 2) ], 
            this.totalStep = this.guidePositionArray.length, this.GuideIndex = 0, this.lastShowIndex = -1, 
            this.GoToWarehouseKey = null, this.targetWareHousePosition = new Laya.Vector3(), 
            this.refreshGuideIndex();
        }
        _createClass2(Ue, [ {
            key: "isCompletedUnlockWarehouseNPC",
            value: function isCompletedUnlockWarehouseNPC() {
                return this.guideStepIsCompleted(10);
            }
        }, {
            key: "isCompletedStep2",
            value: function isCompletedStep2() {
                return this.guideStepIsCompleted(2);
            }
        }, {
            key: "guideStepIsCompleted",
            value: function guideStepIsCompleted(e) {
                var t = window.ystorage.getItem("GuideString2");
                if (t) {
                    var _a65 = "S" + e;
                    return t.indexOf(_a65) >= 0;
                }
                return !1;
            }
        }, {
            key: "resetS2AndS3",
            value: function resetS2AndS3() {
                var e = window.ystorage.getItem("GuideString2");
                e && (e = (e = e.replace("S2", "")).replace("S3", ""), window.ystorage.setItem("GuideString2", e)), 
                this.refreshGuideIndex();
            }
        }, {
            key: "resetS17",
            value: function resetS17() {
                var e = window.ystorage.getItem("GuideString2");
                e && (e = e.replace("S17", ""), window.ystorage.setItem("GuideString2", e)), this.refreshGuideIndex();
            }
        }, {
            key: "resetS18",
            value: function resetS18() {
                var e = window.ystorage.getItem("GuideString2");
                e && (e = e.replace("S18", ""), window.ystorage.setItem("GuideString2", e)), this.refreshGuideIndex();
            }
        }, {
            key: "refreshGuideIndex",
            value: function refreshGuideIndex() {
                if (!this.AllGuideIsCompleted) if (Zt.Instance.MaxSceneIndex > 1) this.AllGuideIsCompleted = !0; else if (this.GuideIndex >= this.totalStep) this.AllGuideIsCompleted = !0; else {
                    this.GuideIndex = 0;
                    for (var _e67 = 1; _e67 <= this.totalStep && this.guideStepIsCompleted(_e67); _e67++) {
                        this.GuideIndex = _e67;
                    }
                    this.GuideIndex >= this.totalStep ? this.AllGuideIsCompleted = !0 : this.AllGuideIsCompleted = !1;
                }
            }
        }, {
            key: "completedGuide",
            value: function completedGuide(e) {
                if (!this.AllGuideIsCompleted) {
                    if (!this.guideStepIsCompleted(e)) {
                        var _t75 = window.ystorage.getItem("GuideString2");
                        switch (_t75 || (_t75 = ""), _t75 += "S" + e, window.ystorage.setItem("GuideString2", _t75), 
                        e) {
                          case 16:
                            this.resetS17();
                            break;

                          case 17:
                            this.resetS18();
                        }
                    }
                    this.refreshGuideIndex(), this.AllGuideIsCompleted && this.hideVerticalArrow();
                }
            }
        }, {
            key: "mappingModel",
            value: function mappingModel(e) {
                var t = e.getChildByName("VerticalArrow");
                this.verticalArrowController = t.addComponent(Re), t.active = !this.AllGuideIsCompleted, 
                this.VerticalArrow = t;
            }
        }, {
            key: "getTargetPosition",
            value: function getTargetPosition() {
                return this.guidePositionArray[this.GuideIndex];
            }
        }, {
            key: "showVerticalArrow",
            value: function showVerticalArrow() {
                if (this.VerticalArrow) if (this.GoToWarehouseKey) {
                    this.verticalArrowController.stopRotate();
                    var _e68 = this.targetWareHousePosition, _t76 = .5, _a66 = _e68.z;
                    _a66 -= .33, this.VerticalArrow.transform.position = new Laya.Vector3(_e68.x, _t76, _a66), 
                    this.VerticalArrow.active || (this.VerticalArrow.active = !0);
                } else {
                    if (this.lastShowIndex == this.GuideIndex) return;
                    this.verticalArrowController.stopRotate();
                    var _e69 = this.getTargetPosition(), _t77 = .5, _a67 = _e69.z;
                    4 == this.GuideIndex ? _a67 -= .3 : 9 == this.GuideIndex && (_a67 -= .33), this.VerticalArrow.transform.position = new Laya.Vector3(_e69.x, _t77, _a67), 
                    this.VerticalArrow.active || (this.VerticalArrow.active = !0);
                }
            }
        }, {
            key: "startRotateVerticalArrow",
            value: function startRotateVerticalArrow() {
                this.verticalArrowController.startRotate();
            }
        }, {
            key: "hideVerticalArrow",
            value: function hideVerticalArrow() {
                this.VerticalArrow.active = !1;
            }
        }, {
            key: "goToWarehouse",
            value: function goToWarehouse() {
                if (Ue.Instance.AllGuideIsCompleted) {
                    var _e70 = Yt.Instance.getStantBlockKey(), _t78 = ea.Instance.baseMapConfigDic[_e70];
                    if (_t78) {
                        var _e71 = _t78.sceneId, _a68 = ce.Instance.getWarehouseBySceneId(_e71);
                        _a68 && (c.Instance.show("Follow the arrow to the warehouse"), this.GoToWarehouseKey = _a68.warehouseMapConfig.K, 
                        this.targetWareHousePosition.x = _a68.gameObject.transform.position.x, this.targetWareHousePosition.y = _a68.gameObject.transform.position.y, 
                        this.targetWareHousePosition.z = _a68.gameObject.transform.position.z);
                    }
                }
            }
        }, {
            key: "completedGoToWarehouse",
            value: function completedGoToWarehouse() {
                this.GoToWarehouseKey = null, this.hideVerticalArrow();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Ue.mInstance || (Ue.mInstance = new Ue()), Ue.mInstance;
            }
        } ]);
        return Ue;
    }();
    var Fe = /* */ function(_Laya$Script4) {
        _inherits2(Fe, _Laya$Script4);
        var _super6 = _createSuper2(Fe);
        function Fe() {
            var _this13;
            _classCallCheck2(this, Fe);
            _this13 = _super6.call(this), _this13.touchCenter = new Laya.Vector2(), _this13.dir = new Laya.Vector2(0, 1), 
            _this13.stick_flag = !1, _this13.banMove = !1, _this13.lastPoint = new Laya.Vector2(), 
            _this13.sumMoveDistance = 0, _this13.initPer = !1, _this13.moveCount = 0, Fe.instance = _assertThisInitialized2(_this13);
            return _this13;
        }
        _createClass2(Fe, [ {
            key: "onAwake",
            value: function onAwake() {
                this.guideFruit.visible = !1, this.ProgressBg.visible = !1, this.rootView = this.owner, 
                this.CloseImage.visible = !1, this.guideClick.visible = !1, this.CloseImage.on(Laya.Event.CLICK, this, this.onClickClose), 
                this.rootView.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown), this.rootView.on(Laya.Event.CLICK, this, this.onClickScreen), 
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseLeave), Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.onMouseLeave);
            }
        }, {
            key: "cancelMove",
            value: function cancelMove() {
                this.onMouseLeave(null);
            }
        }, {
            key: "showProgress",
            value: function showProgress(e) {
                console.log("show_progress");
                jt.Instance.hideUI(), this.ProgressBg.visible = !0, 3 == e ? (this.titleLabel.text = "Slide", 
                this.guideFruit.visible = !0, this.CloseImage.visible = !0) : (this.CloseImage.visible = !0, 
                this.titleLabel.text = "Click", this.guideClick.visible = !0), this.onUpdateProgress(0);
                He.Instance.popInsertAd();
            }
        }, {
            key: "onClickScreen",
            value: function onClickScreen() {
                if (Yt.Instance.AllBodyActionMode == X.CollectHoney) {
                    if (this.guideClick.visible = !1, oe.Instance.playCollectHoneySound(), Yt.Instance.honeyIsClear()) return;
                    Yt.Instance.collectOneHoney(), Yt.Instance.setCollectHoneyAnimationSpeed(1), Laya.timer.frameOnce(20, this, this.pauseCollectHoney);
                }
            }
        }, {
            key: "pauseCollectHoney",
            value: function pauseCollectHoney() {
                Laya.timer.clear(this, this.pauseCollectHoney), Yt.Instance.setCollectHoneyAnimationSpeed(0);
            }
        }, {
            key: "onClickClose",
            value: function onClickClose() {
                oe.Instance.playButtonClickSound(), this.hideProgress(), Yt.Instance.AllBodyActionMode == X.CollectHoney ? Yt.Instance.breakOffCollectingHoney() : Yt.Instance.AllBodyActionMode == X.ShakingFruitTree && Yt.Instance.breakOffCollectingFruit();
            }
        }, {
            key: "banSomeTimeMove",
            value: function banSomeTimeMove() {
                this.banMove || (this.banMove = !0, Laya.timer.once(1e3, this, this.resumeMoveState));
            }
        }, {
            key: "resumeMoveState",
            value: function resumeMoveState() {
                this.banMove = !1;
            }
        }, {
            key: "hideProgress",
            value: function hideProgress() {
                this.ProgressBg.visible = !1, this.CloseImage.visible = !1, jt.Instance.showUI();
            }
        }, {
            key: "onUpdateProgress",
            value: function onUpdateProgress(e) {
                e > 1 ? e = 1 : e < 0 && (e = 0), this.ProgressBarPanel.width = e * this.ProgressBarImage.width;
            }
        }, {
            key: "awakeClickGuide",
            value: function awakeClickGuide() {
                Ue.Instance.AllGuideIsCompleted ? this.guideImage.visible = !1 : this.guideImage.visible = !0;
            }
        }, {
            key: "onMouseDown",
            value: function onMouseDown(e) {
                this.initPer || (Kt.Instance.init(), this.initPer = !0, Ue.Instance.AllGuideIsCompleted && (this.guideImage.visible = !1));
                var t = e.touches || [e.nativeEvent];//czh
                t && 1 == t.length && (this.stick_flag = !0, this.touchCenter.x = Laya.stage.mouseX, 
                this.touchCenter.y = Laya.stage.mouseY, this.lastPoint.x = Laya.stage.mouseX, this.lastPoint.y = Laya.stage.mouseY, 
                this.guideFruit.visible = !1, this.guideClick.visible = !1, Yt.Instance.AllBodyActionMode == X.ShakingFruitTree ? Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onTouchShakeFruitTree) : Yt.Instance.AllBodyActionMode == X.CollectHoney || Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onTouchMove));
            }
        }, {
            key: "onTouchMove",
            value: function onTouchMove(e) {
                if (this.stick_flag && !this.banMove) {
                    var _t79 = e.touches|| [e.nativeEvent];//czh
                    if (_t79 && 1 == _t79.length) {
                        this.guideImage.visible && (this.moveCount++, this.moveCount >= 60 && (this.guideImage.visible = !1)), 
                        Yt.Instance.MoveMode = W.Move;
                        var _e72 = new Laya.Vector2(Laya.stage.mouseX - this.touchCenter.x, Laya.stage.mouseY - this.touchCenter.y);
                        Laya.Vector2.normalize(_e72, this.dir);
                    }
                }
            }
        }, {
            key: "onTouchShakeFruitTree",
            value: function onTouchShakeFruitTree(e) {
                if (this.stick_flag) {
                    var _t80 = e.touches|| [e.nativeEvent];//czh || [e.nativeEvent] 触屏移动转电脑鼠标移动
                    if (_t80 && 1 == _t80.length) {
                        if (Yt.Instance.fruitIsClear()) return;
                        var _e73 = new Laya.Vector2(Laya.stage.mouseX - this.lastPoint.x, Laya.stage.mouseY - this.lastPoint.y), _t81 = Laya.Vector2.scalarLength(_e73);
                        this.sumMoveDistance += _t81, this.sumMoveDistance >= 500 && (this.sumMoveDistance = 0, 
                        Yt.Instance.pickOneFruit()), this.lastPoint.x = Laya.stage.mouseX, this.lastPoint.y = Laya.stage.mouseY, 
                        Yt.Instance.setShakeFruitTreeAnimationSpeed(1), Laya.timer.frameOnce(20, this, this.pauseShake);
                    }
                }
            }
        }, {
            key: "pauseShake",
            value: function pauseShake() {
                Laya.timer.clear(this, this.pauseShake), Yt.Instance.setShakeFruitTreeAnimationSpeed(0);
            }
        }, {
            key: "onMouseLeave",
            value: function onMouseLeave(e) {
                Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onTouchMove), Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onTouchShakeFruitTree), 
                Yt.Instance.AllBodyActionMode == X.ShakingFruitTree ? this.pauseShake() : Yt.Instance.MoveMode = W.Stop, 
                0 != this.stick_flag && (this.stick_flag = !1);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Fe.instance;
            }
        } ]);
        return Fe;
    }(Laya.Script);
    Fe.instance = null;
    var ze = /* */ function() {
        function ze() {
            _classCallCheck2(this, ze);
        }
        _createClass2(ze, [ {
            key: "setData",
            value: function setData(e, t) {
                this.todayDoneRewardTaskTimesNumber = Number(e), this.doneRewardTaskTime = Number(t), 
                s.log("今日完成激励任务" + this.todayDoneRewardTaskTimesNumber + "次");
            }
        }, {
            key: "doTaskWithCallback",
            value: function doTaskWithCallback(e, t) {
                var a = new We();
                a.caller = e, a.callback = t, this.doTaskWithHandler(a, 0);
            }
        }, {
            key: "doTaskWithHandler",
            value: function doTaskWithHandler(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                if (Laya.Browser.onQGMiniGame) {
                    var _t82 = new K();
                    _t82.caller = e.caller, _t82.callback = e.callback, _t82.data = e.data, Y.Instance.showVideoAd(_t82);
                } else if (Laya.Browser.onVVMiniGame) {
                    var _t83 = new q();
                    _t83.caller = e.caller, _t83.callback = e.callback, _t83.data = e.data, Q.Instance.showVideoAd(_t83);
                } else if (Laya.Browser.onTTMiniGame) {
                    var _t84 = new Z();
                    _t84.caller = e.caller, _t84.callback = e.callback, _t84.data = e.data, J.Instance.showVideoAd(_t84);
                } else if (Laya.Browser.onQQMiniGame) {
                    var _t85 = new ae();
                    _t85.caller = e.caller, _t85.callback = e.callback, _t85.data = e.data, te.Instance.showVideoAd(_t85);
                } else {
                    var a;
                    (a = new ee()).caller = e.caller, a.callback = e.callback, a.data = e.data, $.Instance.showVideoAd(a);
                }
            }
        }, {
            key: "doTTShareVideoTask",
            value: function doTTShareVideoTask(e) {
                var t;
                J.onTTGame() && ((t = new Z()).caller = e.caller, t.callback = e.callback, t.data = e.data, 
                J.Instance.shareVideoRecord(t));
            }
        }, {
            key: "rewardTaskTimesNumberIsExhausted",
            value: function rewardTaskTimesNumberIsExhausted() {
                return this.getTodayDoneRewardTaskTimesNumber() >= T.Instance.getDoneRewardMaxTimesNumberOneDay();
            }
        }, {
            key: "getTodayDoneRewardTaskTimesNumber",
            value: function getTodayDoneRewardTaskTimesNumber() {
                var e = new Date();
                return e.setTime(ze.Instance.doneRewardTaskTime), r.isToday(e) ? this.todayDoneRewardTaskTimesNumber : 0;
            }
        }, {
            key: "shareWithoutTask",
            value: function shareWithoutTask() {
                var e;
                (e = Laya.Browser.onQQMiniGame ? new ae() : new ee()).caller = this, e.callback = this.onShareCallBack, 
                Laya.Browser.onQQMiniGame ? te.Instance.share(e) : $.Instance.share(e);
            }
        }, {
            key: "onShareCallBack",
            value: function onShareCallBack(e) {
                console.log("分享返回");
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return ze.instance;
            }
        } ]);
        return ze;
    }();
    ze.instance = new ze();
    var We = function We() {
        _classCallCheck2(this, We);
    };
    var He = /* */ function() {
        function He() {
            _classCallCheck2(this, He);
        }
        _createClass2(He, [ {
            key: "init",
            value: function init() {
                Laya.Browser.onQQMiniGame ? (v.Instance.init(), te.Instance.init()) : Laya.Browser.onMiniGame && !J.onTTGame() ? (v.Instance.init(), 
                $.Instance.init()) : Laya.Browser.onQQMiniGame ? te.Instance.init() : Laya.Browser.onQGMiniGame ? Y.Instance.init() : Laya.Browser.onVVMiniGame ? Q.Instance.init() : J.onTTGame() ? (v.Instance.init(), 
                J.Instance.init()) : !Laya.Browser.onMiniGame && ne.onAndroid && ne.Instance.init();
            }
        }, {
            key: "initAd",
            value: function initAd() {
                Laya.Browser.onQQMiniGame ? te.Instance.initAllAd() : Laya.Browser.onMiniGame && !J.onTTGame() && $.Instance.initAllAd();
            }
        }, {
            key: "popInsertAd",
            value: function popInsertAd() {
                console.log("popInsertAd**************popInsertAd***********************");
                var currentTime = Math.round(new Date().getTime() / 1000);
                if (window.ysdk && currentTime - He.fullAdTime >= 60) {
                    window.ysdk.adv.showFullscreenAdv({
                        callbacks: {
                            onOpen: function () {
                                He.fullAdTime = Math.round(new Date().getTime() / 1000);
                                // Laya.SoundManager.muted = true;
                                oe.Instance.StopAll();
                                console.log(`fullscreen open`)
                            },
                            onClose: function (wasShown) {
                                // Laya.SoundManager.muted = false;
                                oe.Instance.playBgMusic();
                                console.log(`fullscreen close`, wasShown)
                                // some action after close
                            },
                            onError: function (error) {
                                console.log(`fullscreen error`, error)
                                // some action on error
                            }
                        }
                    })
                }
                // Laya.Browser.onQGMiniGame ? Y.Instance.showInsertAd() : Laya.Browser.onVVMiniGame ? Q.Instance.showInsertAd() : J.onTTGame() ? J.Instance.showInterstitialAd() : Laya.Browser.onQQMiniGame && !J.onTTGame() ? te.Instance.showInterstitialAd() : !Laya.Browser.onMiniGame && Laya.Browser.onAndroid ? ne.Instance.showInterstitialAd() : (console.log("popInsertAd**************popInsertAd***********************"), 
                // $.Instance.showInterstitialAd());
            }
        }, {
            key: "showCustomGridAd",
            value: function showCustomGridAd() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                Laya.Browser.onTTMiniGame ? J.Instance.showCustomGridAd() : Laya.Browser.onQQMiniGame ? te.Instance.showCustomGridAd(e) : Laya.Browser.onQGMiniGame ? Y.Instance.showCustomGridAd() : Laya.Browser.onVVMiniGame ? Q.Instance.showCustomGridAd() : $.Instance.showCustomGridAd();
            }
        }, {
            key: "hideCustomGridAd",
            value: function hideCustomGridAd() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                Laya.Browser.onTTMiniGame ? J.Instance.hideCustomGridAd() : Laya.Browser.onQQMiniGame ? te.Instance.hideCustomGridAd() : Laya.Browser.onQGMiniGame ? Y.Instance.hideCustomGridAd() : Laya.Browser.onVVMiniGame ? Q.Instance.hideCustomGridAd() : $.Instance.hideCustomGridAd();
            }
        }, {
            key: "showCustomMultiGridAd",
            value: function showCustomMultiGridAd() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                Laya.Browser.onTTMiniGame ? J.Instance.showCustomMultiGridAd() : Laya.Browser.onQQMiniGame ? te.Instance.showCustomMultiGridAd(e) : Laya.Browser.onQGMiniGame ? Y.Instance.showCustomMultiGridAd() : Laya.Browser.onVVMiniGame ? Q.Instance.showCustomMultiGridAd() : $.Instance.showCustomMultiGridAd();
            }
        }, {
            key: "hideCustomMultiGridAd",
            value: function hideCustomMultiGridAd() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                Laya.Browser.onTTMiniGame ? J.Instance.hideCustomMultiGridAd() : Laya.Browser.onQQMiniGame ? te.Instance.hideCustomMultiGridAd() : Laya.Browser.onQGMiniGame ? Y.Instance.hideCustomMultiGridAd() : Laya.Browser.onVVMiniGame ? Q.Instance.hideCustomMultiGridAd() : $.Instance.hideCustomMultiGridAd();
            }
        }, {
            key: "showBannerAd",
            value: function showBannerAd() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                Laya.Browser.onTTMiniGame ? J.Instance.showBannerAd() : Laya.Browser.onQQMiniGame ? te.Instance.showBannerAd(e) : Laya.Browser.onQGMiniGame ? Y.Instance.showBannerAd() : Laya.Browser.onVVMiniGame ? Q.Instance.showBannerAd() : $.Instance.showBannerAd();
            }
        }, {
            key: "hideBannerAd",
            value: function hideBannerAd() {
                J.onTTGame() ? J.Instance.hideBannerAd() : Laya.Browser.onQQMiniGame ? te.Instance.hideBannerAd() : Laya.Browser.onQGMiniGame ? Y.Instance.hideBannerAd() : Laya.Browser.onVVMiniGame ? Q.Instance.hideBannerAd() : $.Instance.hideBannerAd();
            }
        }, {
            key: "OpenMinigame",
            value: function OpenMinigame(e) {
                s.log("跳转APP"), $.openMiniGame(e);
            }
        }, {
            key: "GC",
            value: function GC() {
                setTimeout(function() {
                    He.Instance.triggerGC();
                }, 0);
            }
        }, {
            key: "triggerGC",
            value: function triggerGC() {
                Laya.Browser.onMiniGame ? $.triggerGC() : Laya.Browser.onTTMiniGame && J.triggerGC();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return He.mInstance || (He.mInstance = new He()), He.mInstance;
            }
        } ]);
        return He;
    }();
    He.mInstance = new He();
    He.fullAdTime = 0;
    var je = /* */ function() {
        function je() {
            _classCallCheck2(this, je);
            this.visible = !1;
        }
        _createClass2(je, [ {
            key: "show",
            value: function show(e, t, a, i, n, o, s) {
                console.log("dialog_1");
                var r = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : !1;
                var c = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !0;
                this.showBanner = c, this.visible && this.close(), He.Instance.showBannerAd(), He.Instance.hideCustomGridAd(), 
                this.visible = !0;
                var h = new Xe();
                h.caller = n, h.btn1Callback = o, h.btn2Callback = s, h.withTask = r, this.data = h;
                this.dialog = new Laya.Dialog(), this.dialog.size(Laya.stage.width, Laya.stage.height);
                var d = new Laya.Image();
                d.size(Laya.stage.width, Laya.stage.height), d.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), 
                d.alpha = .5, d.centerX = 0, d.centerY = 0, this.dialog.addChild(d);
                this.dialog.show(), 
                Laya.timer.once(l.dialogDelayRenderMilliseconds, this, function() {
                    var i = new Laya.Image("PastureUI/Dialog/tk_01.png");
                    i.size(605, 670), i.sizeGrid = "170,0,110,0,0", i.centerX = 0, i.centerY = -60, 
                    this.dialog.addChild(i);
                    var n = new Laya.Image("PastureUI/Dialog/tk_42.png");
                    n.top = 44, n.centerX = 0, i.addChild(n);
                    var o = new Laya.Image("PastureUI/Dialog/tk_02.png");
                    o.size(536, 383), o.sizeGrid = "88,0,59,0,0", o.top = 115, o.centerX = 0, i.addChild(o);
                    var s = new Laya.Image("PastureUI/Dialog/tk_41.png");
                    s.size(320, 67), s.sizeGrid = "44,0,44,0,0", s.top = 43, s.centerX = 0, o.addChild(s);
                    var r = new Laya.Label();
                    e || (e = w.getLanguage("common_dialog_title_text")), r.text = e, r.bold = !0, r.fontSize = 32, 
                    r.color = "#ffb574", r.align = "center", r.valign = "middle", r.centerX = 0, r.centerY = 0, 
                    s.addChild(r);
                    var l = new Laya.Label();
                    l.width = .8 * o.width, l.text = t, l.italic = !1, l.bold = !0, l.fontSize = 36, 
                    l.color = "#e79042", l.align = "center", l.valign = "middle", l.wordWrap = !0, l.centerX = 0, 
                    l.top = 170, o.addChild(l);
                    var c = new Laya.Image("PastureUI/Dialog/tk_09.png");
                    c.size(297, 117), c.sizeGrid = "0,60,0,60,0", c.centerX = 0, c.bottom = 30, c.on(Laya.Event.CLICK, je.Instance, je.Instance.btn1OnClick);
                    var h = new Laya.Label();
                    h.text = a, h.bold = !0, h.fontSize = 50, h.color = "#ffffff", h.align = "center", 
                    h.valign = "middle", h.top = 28, h.centerX = 0, c.addChild(h), i.addChild(c);
                });
                He.Instance.popInsertAd();
            }
        }, {
            key: "close",
            value: function close() {
                this.data = null, this.visible = !1, He.Instance.hideBannerAd(), He.Instance.showCustomGridAd(), 
                this.dialog && this.dialog.close();
            }
        }, {
            key: "doTask",
            value: function doTask() {
                var e = new We();
                e.caller = je.Instance, e.callback = je.Instance.btn1OnClick, ze.Instance.doTaskWithHandler(e, 0);
            }
        }, {
            key: "btn1OnClick",
            value: function btn1OnClick(e) {
                oe.Instance.playButtonClickSound(), this.data && this.data.caller && this.data.btn1Callback && this.data.btn1Callback.apply(this.data.caller), 
                this.close();
            }
        }, {
            key: "btn2OnClick",
            value: function btn2OnClick() {
                oe.Instance.playButtonClickSound(), this.data && this.data.caller && this.data.btn2Callback && this.data.btn2Callback.apply(this.data.caller), 
                this.close();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return je.instance;
            }
        } ]);
        return je;
    }();
    je.instance = new je();
    var Xe = function Xe() {
        _classCallCheck2(this, Xe);
    };
    var Ye = /* */ function(_Laya$Script3D3) {
        _inherits2(Ye, _Laya$Script3D3);
        var _super7 = _createSuper2(Ye);
        function Ye() {
            var _this14;
            _classCallCheck2(this, Ye);
            _this14 = _super7.call(this), _this14.moveSpeed = .9, _this14.state = E.Sleep, _this14.actionTime = 0, 
            Ye.mInstance = _assertThisInitialized2(_this14);
            return _this14;
        }
        _createClass2(Ye, [ {
            key: "onAwake",
            value: function onAwake() {
                this.gameObject = this.owner, this.model = this.gameObject.getChildByName("model"), 
                this.animator = this.model.getComponent(Laya.Animator), this.state = E.Sleep, this.goToUnderGround(), 
                this.actionTime = 0;
            }
        }, {
            key: "show",
            value: function show() {
                this.actionTime = 0, this.state = E.Awake;
                var e = Math.random() < .5 ? 1 : -1, t = (Math.random(), Yt.Instance.gameObject.transform.position), a = t.x + e * (1 + 2 * Math.random()), i = t.z + e * (1 + 2 * Math.random());
                this.gameObject.transform.position = new Laya.Vector3(a, 0, i), this.gameObject.transform.localScale = new Laya.Vector3(1, 1, 1);
                this.gameObject.transform.localScale = new Laya.Vector3(.1, .1, .1);
                Laya.Tween.to(this.gameObject.transform, {
                    localScaleX: 1,
                    localScaleY: 1,
                    localScaleZ: 1
                }, 500, Laya.Ease.linearNone, new Laya.Handler(this, this.goToChacater)), this.playWalk();
            }
        }, {
            key: "goToChacater",
            value: function goToChacater() {
                this.state = E.GoToCharacter;
            }
        }, {
            key: "hide",
            value: function hide() {
                this.state = E.Sleep;
                Laya.Tween.to(this.gameObject.transform, {
                    localScaleX: .01,
                    localScaleY: .01,
                    localScaleZ: .01
                }, 300, Laya.Ease.linearNone, new Laya.Handler(this, this.goToUnderGround));
            }
        }, {
            key: "goToUnderGround",
            value: function goToUnderGround() {
                this.gameObject.transform.localPositionY = -2;
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                switch (this.state) {
                  case E.GoToCharacter:
                    {
                        var _e74 = new Laya.Vector3();
                        if (Laya.Vector3.subtract(Yt.Instance.gameObject.transform.position, this.gameObject.transform.position, _e74), 
                        Laya.Vector3.scalarLength(_e74) <= .3) this.model.transform.lookAt(new Laya.Vector3(-_e74.x, 0, -_e74.z), new Laya.Vector3(0, 1, 0), !0), 
                        this.actionTime = 0, this.playJump(), this.state = E.Jump, oe.Instance.playDogBarkSound(); else {
                            this.model.transform.lookAt(new Laya.Vector3(-_e74.x, 0, -_e74.z), new Laya.Vector3(0, 1, 0), !0);
                            var _t86 = Laya.timer.delta / 1e3;
                            Laya.Vector3.normalize(_e74, _e74);
                            var _a69 = _e74.x * _t86 * this.moveSpeed, _i38 = _e74.z * _t86 * this.moveSpeed, _n10 = this.gameObject.transform.position.x + _a69, _o5 = this.gameObject.transform.position.z + _i38;
                            this.gameObject.transform.localPositionX = _n10, this.gameObject.transform.localPositionZ = _o5;
                        }
                    }
                    break;

                  case E.Jump:
                    {
                        var _e75 = new Laya.Vector3();
                        Laya.Vector3.subtract(Yt.Instance.gameObject.transform.position, this.gameObject.transform.position, _e75), 
                        this.model.transform.lookAt(new Laya.Vector3(-_e75.x, 0, -_e75.z), new Laya.Vector3(0, 1, 0), !0);
                        var _t87 = Laya.timer.delta;
                        this.actionTime += _t87, this.actionTime > 1e3 && (this.actionTime = 0, this.state = E.Idle, 
                        this.playIdle());
                    }
                    break;

                  case E.Idle:
                    {
                        var _e76 = new Laya.Vector3();
                        Laya.Vector3.subtract(Yt.Instance.gameObject.transform.position, this.gameObject.transform.position, _e76), 
                        this.model.transform.lookAt(new Laya.Vector3(-_e76.x, 0, -_e76.z), new Laya.Vector3(0, 1, 0), !0);
                        var _t88 = Laya.timer.delta;
                        this.actionTime += _t88, this.actionTime >= 3e4 && (this.actionTime = 0, this.hide());
                    }
                    break;

                  case E.Sleep:
                    {
                        var _e77 = Laya.timer.delta;
                        this.actionTime += _e77, this.actionTime >= 6e4 && (this.actionTime = 0, Yt.Instance.IsGoingToSwitchScenePoint || this.show());
                    }
                }
            }
        }, {
            key: "onTriggerEnter",
            value: function onTriggerEnter(e) {
                if (Yt.isCharacter(e.owner.name)) {
                    this.state = E.Touch;
                    var _e78 = new Laya.Vector3(this.gameObject.transform.position.x, 0, this.gameObject.transform.position.z);
                    Fe.Instance.cancelMove(), Yt.Instance.pauseAnimation(), pe.Instance.lookGiftDog(_e78), 
                    qe.Instance.show(1);
                }
            }
        }, {
            key: "playJump",
            value: function playJump() {
                if (this.animator) {
                    var _e79 = "tiao";
                    this.animator.play(_e79, 0, 0);
                }
            }
        }, {
            key: "playWalk",
            value: function playWalk() {
                if (this.animator) {
                    var _e80 = "zou";
                    this.animator.crossFade(_e80, .5, 0, 0);
                }
            }
        }, {
            key: "playIdle",
            value: function playIdle() {
                if (this.animator) {
                    var _e81 = "daiji_a";
                    this.animator.crossFade(_e81, .5, 0, 0);
                }
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Ye.mInstance;
            }
        } ]);
        return Ye;
    }(Laya.Script3D);
    !function(e) {
        e[e.None = 0] = "None", e[e.Sleep = 1] = "Sleep", e[e.Awake = 2] = "Awake", e[e.GoToCharacter = 3] = "GoToCharacter", 
        e[e.Jump = 4] = "Jump", e[e.Touch = 5] = "Touch", e[e.Idle = 6] = "Idle";
    }(E || (E = {}));
    var Ke = /* */ function() {
        function Ke() {
            _classCallCheck2(this, Ke);
            this.visible = !1, this.mLastMouseX = 0, this.minX = -1080, this.maxX = 80, this.isHadTransfered = !1, 
            this.initBigScene1LandArray(), this.initBigScene2LandArray();
        }
        _createClass2(Ke, [ {
            key: "initBigScene1LandArray",
            value: function initBigScene1LandArray() {
                this.bigScene1LandArray = new Array(6);
                var e = new Qe();
                e.startPoint = new Laya.Vector2(8, 0), e.width = 4, e.height = 9, e.transferPoint = new Laya.Vector3(-1, 0, 1);
                var t = new Qe();
                t.startPoint = new Laya.Vector2(13, 0), t.width = 4, t.height = 9, t.transferPoint = new Laya.Vector3(-6, 0, 1);
                var a = new Qe();
                a.startPoint = new Laya.Vector2(18, 0), a.width = 4, a.height = 9, a.transferPoint = new Laya.Vector3(-11, 0, 5);
                var i = new Qe();
                i.startPoint = new Laya.Vector2(15, 10), i.width = 7, i.height = 8, i.transferPoint = new Laya.Vector3(-12, 0, -3);
                var n = new Qe();
                n.startPoint = new Laya.Vector2(8, 10), n.width = 6, n.height = 8, n.transferPoint = new Laya.Vector3(-5, 0, -5);
                var o = new Qe();
                o.startPoint = new Laya.Vector2(0, 5), o.width = 7, o.height = 9, o.transferPoint = new Laya.Vector3(3, 0, -3), 
                this.bigScene1LandArray[0] = e, this.bigScene1LandArray[1] = t, this.bigScene1LandArray[2] = a, 
                this.bigScene1LandArray[3] = i, this.bigScene1LandArray[4] = n, this.bigScene1LandArray[5] = o;
            }
        }, {
            key: "initBigScene2LandArray",
            value: function initBigScene2LandArray() {
                this.bigScene2LandArray = new Array(5);
                var e = new Qe();
                e.startPoint = new Laya.Vector2(7, 9), e.width = 6, e.height = 8, e.transferPoint = new Laya.Vector3(-1, 0, 1);
                var t = new Qe();
                t.startPoint = new Laya.Vector2(14, 9), t.width = 6, t.height = 8, t.transferPoint = new Laya.Vector3(-6, 0, 6);
                var a = new Qe();
                a.startPoint = new Laya.Vector2(0, 9), a.width = 6, a.height = 8, a.transferPoint = new Laya.Vector3(4, 0, 2);
                var i = new Qe();
                i.startPoint = new Laya.Vector2(2, 0), i.width = 7, i.height = 8, i.transferPoint = new Laya.Vector3(6, 0, 10);
                var n = new Qe();
                n.startPoint = new Laya.Vector2(10, 0), n.width = 7, n.height = 8, n.transferPoint = new Laya.Vector3(-2, 0, 15), 
                this.bigScene2LandArray[0] = e, this.bigScene2LandArray[1] = t, this.bigScene2LandArray[2] = a, 
                this.bigScene2LandArray[3] = i, this.bigScene2LandArray[4] = n;
            }
        }, {
            key: "show",
            value: function show() {
                console.log("map_view");
                this.visible && this.close(!1), Fe.Instance.cancelMove(), this.visible = !0;
                this.dialog = new Laya.Dialog(), this.dialog.size(Laya.stage.width, Laya.stage.height);
                var e = new Laya.Image("PastureUI/Map/sjdt_16.png");
                e.size(1.1 * Laya.stage.width, 1.1 * Laya.stage.height), e.centerX = 0, e.centerY = 0, 
                this.dialog.addChild(e);
                var t = new Laya.Image("PastureUI/Map/sjdt_17.png");
                t.size(1.1 * Laya.stage.width, 1.1 * Laya.stage.height), t.sizeGrid = "0,0,0,0,1", 
                t.centerX = 0, t.centerY = 0, e.addChild(t);
                var a = this;
                this.dialog.show(), 
                Laya.timer.once(l.dialogDelayRenderMilliseconds, this, function() {
                    var _this15 = this;
                    var e = new Laya.Image("PastureUI/Map/sjdt_02.png");
                    e.top = 0, e.centerX = 0, a.dialog.addChild(e);
                    var t = new Laya.Image("PastureUI/Map/sjdt_15.png");
                    t.centerY = -546, t.centerX = 0;
                    var i = 18, n = 22, o = a.bigScene1LandArray;
                    2 == Zt.Instance.SceneIndex && (i = 17, n = 20, o = a.bigScene2LandArray);
                    var s = 61 * n, r = 61 * i;
                    a.minX = Laya.stage.width - s - a.maxX;
                    var l = new Laya.Image();
                    l.size(s, r), l.centerY = 60, l.x = 0, a.mapBg = l;
                    for (var _e82 = 0; _e82 < o.length; _e82++) {
                        var _t89 = o[_e82], _a70 = new Laya.Image("PastureUI/Map/sjdt_08.png");
                        _a70.sizeGrid = "2,2,2,2,0", _a70.size(61 * _t89.width + 30, 61 * _t89.height + 30), 
                        _a70.x = 61 * _t89.startPoint.x - 15, _a70.y = 61 * _t89.startPoint.y - 15, _a70.zOrder = -10, 
                        _t89.landBlockImage = _a70, l.addChild(_a70);
                    }
                    a.dialog.addChild(l), a.dialog.addChild(t), a.mapOutMap(61);
                    var h = new Laya.Image("PastureUI/Map/tk_61.png");
                    h.size(308, 61), h.centerX = 0, h.bottom = 30, a.dialog.addChild(h);
                    var d = Zt.Instance.MaxSceneIndex;
                    var _loop = function _loop(_e83) {
                        var t = new Laya.Image();
                        if (t.size(73, 80), t.centerX = 125 * (_e83 - 1), t.centerY = 2, h.addChild(t), 
                        d > _e83) {
                            _e83 + 1 == Zt.Instance.SceneIndex && (t.skin = "PastureUI/Map/tk_59.png");
                            var _a71 = new Laya.Image("PastureUI/Map/scene_image_" + _e83 + ".png");
                            _a71.centerX = 0, _a71.centerY = 0, t.addChild(_a71);
                        } else {
                            var _e84 = new Laya.Image("PastureUI/Map/tk_60.png");
                            _e84.centerX = 0, _e84.centerY = -2, t.addChild(_e84);
                        }
                        t.on(Laya.Event.CLICK, _this15, function() {
                            oe.Instance.playButtonClickSound(), fe.imageScaleAnimation(t), d > _e83 ? (Zt.Instance.switchScene(_e83 + 1), 
                            a.close(!1)) : c.Instance.show("Not unlock");
                        });
                    };
                    for (var _e83 = 0; _e83 < 3; _e83++) {
                        _loop(_e83);
                    }
                    var m = new Laya.Image("PastureUI/Map/sjdt_01.png");
                    m.top = 110, m.left = 15, m.on(Laya.Event.CLICK, Ke.Instance, Ke.Instance.closeBtnOnClick), 
                    a.dialog.addChild(m), Laya.stage.on(Laya.Event.MOUSE_DOWN, a, a.mouseDown), Laya.stage.on(Laya.Event.MOUSE_UP, a, a.mouseUp);
                });
                He.Instance.popInsertAd();
            }
        }, {
            key: "mouseDown",
            value: function mouseDown() {
                this.mLastMouseX = Laya.stage.mouseX, Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            }
        }, {
            key: "mouseMove",
            value: function mouseMove() {
                if (this.mapBg) {
                    var _e85 = Laya.stage.mouseX - this.mLastMouseX, _t90 = this.mapBg.x + _e85;
                    this.mLastMouseX = Laya.stage.mouseX, _t90 > this.maxX ? _t90 = this.maxX : _t90 < this.minX && (_t90 = this.minX), 
                    this.mapBg.x = _t90;
                }
            }
        }, {
            key: "convertToPointX",
            value: function convertToPointX(e) {
                return 2 == Zt.Instance.SceneIndex ? Math.abs(e - 9) : Math.abs(e - 8);
            }
        }, {
            key: "convertToPointY",
            value: function convertToPointY(e) {
                return 2 == Zt.Instance.SceneIndex ? Math.abs(16 - e) : Math.abs(e - 8);
            }
        }, {
            key: "mapOutMap",
            value: function mapOutMap(e) {
                this.mapOutBaseMap(e), this.mapOutPastureMap(e), this.mapOutFarmMap(e), this.mapOutShopMap(e), 
                this.mapOutWarehouseMap(e), this.mapOutFruitTreeMap(e), this.mapOutBeehiveMap(e), 
                this.mapOutTransferPointMap(e), this.mapOutCharacterPoint(e);
            }
        }, {
            key: "mapOutBaseMap",
            value: function mapOutBaseMap(e) {
                if (this.mapBg) {
                    var _t91 = Ee.Instance.allUnlockBlock;
                    for (var _a72 in _t91) {
                        var _o6 = _t91[_a72];
                        if (_o6 && _o6.Config) if (_o6.IsUnlocked) {
                            var _t92 = this.convertToPointX(_o6.Config.x) * e, _a73 = this.convertToPointY(_o6.Config.z) * e, _s5 = "PastureUI/Map/base_block_icon.png", _r2 = new Laya.Image();
                            switch (_r2.size(e + 1, e + 1), _r2.x = _t92, _r2.y = _a73, _o6.Config.type) {
                              case i.VerticalBridge:
                                _s5 = "PastureUI/Map/bridge_v_icon.png";
                                break;

                              case i.SimpleVerticalBridge:
                                _s5 = "PastureUI/Map/bridge_v_2_icon.png";
                                break;

                              case i.HorizontalBridge:
                                _s5 = "PastureUI/Map/bridge_h_icon.png";
                                break;

                              case i.SimpleHorizontalBridge:
                                _s5 = "PastureUI/Map/bridge_h_2_icon.png";
                                break;

                              default:
                                if (_o6.Config.functionType == n.SwitchScenePoint) _s5 = "PastureUI/Map/tk_66.png", 
                                _r2.size(75, 75), _r2.zOrder = 1, _r2.x = _t92 - .1 * (_r2.width - e), _r2.y = _a73 - .8 * (_r2.height - e); else {
                                    var _i39 = new Laya.Image("PastureUI/Map/bound.png");
                                    _i39.size(e + 9, e + 9), _i39.x = _t92 - 4, _i39.y = _a73 - 4, _i39.zOrder = -1, 
                                    this.mapBg.addChild(_i39);
                                }
                            }
                            _r2.skin = _s5, this.mapBg.addChild(_r2);
                        } else {
                            var _t93 = "PastureUI/Map/lock_block_1.png";
                            _o6.Config.unlockGoldCoin - _o6.ug > Ee.Instance.getGoldCoins() && (_t93 = "PastureUI/Map/lock_block_0.png");
                            var _a74 = new Laya.Image(_t93);
                            _a74.size(e, e), _a74.x = this.convertToPointX(_o6.Config.x) * e, _a74.y = this.convertToPointY(_o6.Config.z) * e, 
                            this.mapBg.addChild(_a74);
                        }
                    }
                }
            }
        }, {
            key: "mapOutPastureMap",
            value: function mapOutPastureMap(e) {
                if (this.mapBg) {
                    var _t94 = me.Instance.pastureInfoDic;
                    for (var _a75 in _t94) {
                        var _i40 = _t94[_a75];
                        if (_i40 && _i40.PastureConfig) {
                            var _t95 = _i40.PastureConfig, _a76 = this.convertToPointX(_t95.x) * e, _n11 = this.convertToPointY(_t95.z) * e, _o7 = "", _s6 = "";
                            if (_i40.treeClear) {
                                var _e86 = _t95.animalConfig.id;
                                _o7 = "PastureUI/Map/pasture_block_icon.png", _s6 = "PastureUI/Main/animal_" + _e86 + ".png";
                            } else _o7 = "PastureUI/Map/function_block_icon.png", _s6 = "PastureUI/Map/tree.png";
                            var _r3 = new Laya.Image(_o7);
                            _r3.size(e + 1, e + 1), _r3.x = _a76, _r3.y = _n11, this.mapBg.addChild(_r3);
                            var _l = new Laya.Image(_s6);
                            _l.size(e + 1, e + 1), _l.x = _a76, _l.y = _n11, this.mapBg.addChild(_l);
                        }
                    }
                }
            }
        }, {
            key: "mapOutFarmMap",
            value: function mapOutFarmMap(e) {
                if (this.mapBg) {
                    var _t96 = Be.Instance.farmInfoDic;
                    for (var _a77 in _t96) {
                        var _i41 = _t96[_a77];
                        if (_i41 && _i41.Config) {
                            var _t97 = _i41.Config, _a78 = this.convertToPointX(_t97.x) * e, _n12 = this.convertToPointY(_t97.z) * e, _o8 = "", _s7 = "";
                            if (_i41.treeClear) {
                                var _e87 = _t97.Config.id;
                                _o8 = "PastureUI/Map/pasture_block_icon.png", _s7 = "PastureUI/Main/crops_" + _e87 + ".png";
                            } else _o8 = "PastureUI/Map/function_block_icon.png", _s7 = "PastureUI/Map/tree.png";
                            var _r4 = new Laya.Image(_o8);
                            _r4.size(e + 1, e + 1), _r4.x = _a78, _r4.y = _n12, this.mapBg.addChild(_r4);
                            var _l2 = new Laya.Image(_s7);
                            _l2.size(e + 1, e + 1), _l2.x = _a78, _l2.y = _n12, this.mapBg.addChild(_l2);
                        }
                    }
                }
            }
        }, {
            key: "mapOutShopMap",
            value: function mapOutShopMap(e) {
                if (this.mapBg) {
                    var _t98 = Oe.Instance.shopControllerDic;
                    for (var _a79 in _t98) {
                        var _i42 = _t98[_a79];
                        if (_i42 && _i42.shopConfig) {
                            var _t99 = _i42.shopConfig, _a80 = this.convertToPointX(_t99.x) * e, _n13 = this.convertToPointY(_t99.z) * e, _o9 = "PastureUI/Map/big_warehouse_shop.png", _s8 = "PastureUI/Main/Icon_Coin.png", _r5 = new Laya.Image(_o9);
                            _r5.size(e + 1, e + 1), _r5.x = _a80, _r5.y = _n13, this.mapBg.addChild(_r5);
                            var _l3 = new Laya.Image(_s8);
                            if (_l3.size(.85 * e, .85 * e), _l3.centerX = 0, _l3.centerY = 0, _r5.addChild(_l3), 
                            !_t99.isPurchaseAllAnimal) {
                                var _i43 = new Laya.Image("PastureUI/Map/shop_product_bg.png");
                                _i43.size(201, 75), _i43.y = _n13 - .9 * _i43.height, _i43.x = _a80, _i43.zOrder = 5, 
                                this.mapBg.addChild(_i43);
                                for (var _a81 = 0; _a81 < 3; _a81++) {
                                    var _n14 = _t99.productIdArray[_a81], _o10 = "";
                                    switch (k.ProductType(_n14)) {
                                      case 0:
                                        _o10 = "PastureUI/Main/animal_" + _n14 + ".png";
                                        break;

                                      case 1:
                                        _o10 = "PastureUI/Main2/fruit_" + _n14 + ".png";
                                        break;

                                      case 2:
                                        _o10 = "PastureUI/Main2/honey_" + _n14 + ".png";
                                        break;

                                      case 3:
                                        _o10 = "PastureUI/Main/crops_" + _n14 + ".png";
                                    }
                                    var _s9 = new Laya.Image("PastureUI/Map/shop_product_item_bg.png");
                                    _s9.centerX = 63 * (_a81 - 1), _s9.top = 4, _i43.addChild(_s9);
                                    var _r6 = new Laya.Image(_o10);
                                    _r6.size(.85 * e, .85 * e), _r6.centerX = 0, _r6.centerY = 0, _s9.addChild(_r6);
                                }
                            }
                        }
                    }
                }
            }
        }, {
            key: "mapOutWarehouseMap",
            value: function mapOutWarehouseMap(e) {
                if (this.mapBg) {
                    var _t100 = ce.Instance.warehouseControllerDic;
                    for (var _a82 in _t100) {
                        var _i44 = _t100[_a82];
                        if (_i44 && _i44.warehouseMapConfig) {
                            var _t101 = _i44.warehouseMapConfig, _a83 = this.convertToPointX(_t101.x) * e, _n15 = this.convertToPointY(_t101.z) * e, _o11 = "", _s10 = "";
                            _t101.isCollectAllWarehouse ? (_o11 = "PastureUI/Map/big_warehouse_shop.png", _s10 = "PastureUI/Map/zjm_07_21.png") : (_o11 = "PastureUI/Map/function_block_icon.png", 
                            _s10 = "PastureUI/Map/zjm_07_22.png");
                            var _r7 = new Laya.Image(_o11);
                            _r7.size(e + 1, e + 1), _r7.x = _a83, _r7.y = _n15, this.mapBg.addChild(_r7);
                            var _l4 = new Laya.Image(_s10);
                            _l4.size(e, e), _l4.centerX = 0, _l4.centerY = 0, _r7.addChild(_l4);
                        }
                    }
                }
            }
        }, {
            key: "mapOutFruitTreeMap",
            value: function mapOutFruitTreeMap(e) {
                if (this.mapBg) {
                    var _t102 = ve.Instance.fruitTreeInfoDic;
                    for (var _a84 in _t102) {
                        var _i45 = _t102[_a84];
                        if (_i45 && _i45.MapConfig) {
                            var _t103 = _i45.MapConfig, _a85 = this.convertToPointX(_t103.x) * e, _n16 = this.convertToPointY(_t103.z) * e, _o12 = "PastureUI/Map/function_block_icon.png", _s11 = "PastureUI/Main2/fruit_" + _t103.fruitConfig.id + ".png", _r8 = new Laya.Image(_o12);
                            _r8.size(e + 1, e + 1), _r8.x = _a85, _r8.y = _n16, this.mapBg.addChild(_r8);
                            var _l5 = new Laya.Image(_s11);
                            _l5.size(e, e), _l5.centerX = 0, _l5.centerY = 0, _r8.addChild(_l5);
                        }
                    }
                }
            }
        }, {
            key: "mapOutBeehiveMap",
            value: function mapOutBeehiveMap(e) {
                if (this.mapBg) {
                    var _t104 = ke.Instance.beehiveInfoDic;
                    for (var _a86 in _t104) {
                        var _i46 = _t104[_a86];
                        if (_i46 && _i46.MapConfig) {
                            var _t105 = _i46.MapConfig, _a87 = this.convertToPointX(_t105.x) * e, _n17 = this.convertToPointY(_t105.z) * e, _o13 = "PastureUI/Map/function_block_icon.png", _s12 = "PastureUI/Main2/honey_" + _t105.honeyConfig.id + ".png", _r9 = new Laya.Image(_o13);
                            _r9.size(e + 1, e + 1), _r9.x = _a87, _r9.y = _n17, this.mapBg.addChild(_r9);
                            var _l6 = new Laya.Image(_s12);
                            _l6.size(e, e), _l6.centerX = 0, _l6.centerY = 0, _r9.addChild(_l6);
                        }
                    }
                }
            }
        }, {
            key: "mapOutTransferPointMap",
            value: function mapOutTransferPointMap(e) {
                if (this.mapBg) {
                    var _t106 = Ke.Instance.bigScene1LandArray;
                    2 == Zt.Instance.SceneIndex && (_t106 = Ke.Instance.bigScene2LandArray);
                    for (var _a88 in _t106) {
                        var _i47 = _t106[_a88];
                        if (_i47) {
                            var _t107 = _i47.transferPoint.x + "_" + _i47.transferPoint.z, _a89 = Ee.Instance.getUnlockBlockByKey(_t107);
                            if (_a89 && _a89.IsUnlocked) {
                                var _t108 = this.convertToPointX(_i47.transferPoint.x) * e, _a90 = this.convertToPointY(_i47.transferPoint.z) * e, _n18 = "PastureUI/Map/sjdt_13.png", _o14 = new Laya.Image();
                                _o14.size(1.5 * e, 1.5 * e), _o14.x = _t108 - .25 * e, _o14.y = _a90 - .25 * e, 
                                this.mapBg.addChild(_o14);
                                var _s13 = new Laya.Image(_n18);
                                _s13.size(e + 1, e + 1), _s13.x = _t108, _s13.y = _a90, _i47.tPImage = _s13, _o14.on(Laya.Event.CLICK, this, this.tp, [ _i47 ]), 
                                this.mapBg.addChild(_s13);
                            }
                        }
                    }
                }
            }
        }, {
            key: "mapOutCharacterPoint",
            value: function mapOutCharacterPoint(e) {
                if (this.mapBg) {
                    var _t109 = Yt.Instance.gameObject.transform.position, _a91 = this.convertToPointX(Math.round(_t109.x)) * e, _i48 = this.convertToPointY(Math.round(_t109.z)) * e, _n19 = "PastureUI/Map/sjdt_04_01.png", _o15 = "PastureUI/Map/sjdt_04.png", _s14 = new Laya.Image();
                    _s14.size(e + 1, e + 1), _s14.x = _a91, _s14.y = _i48, _s14.zOrder = 15, this.mapBg.addChild(_s14);
                    var _r10 = new Laya.Image(_n19);
                    _r10.size(e + 1, e + 1), _r10.centerX = 0, _r10.centerY = 0, _s14.addChild(_r10);
                    var _l7 = function _l7() {
                        _r10.alpha = 1, _r10.scaleX = 1, _r10.scaleY = 1, Laya.Tween.to(_r10, {
                            alpha: 0,
                            scaleX: 1.8,
                            scaleY: 1.8
                        }, 1e3, Laya.Ease.linearNone, new Laya.Handler(this, function() {
                            _l7();
                        }), 100);
                    };
                    _l7();
                    var _c = new Laya.Image(_o15);
                    _c.size(e + 1, e + 1), _c.centerX = 0, _c.centerY = 0, _s14.addChild(_c);
                    var _h = this, _d = .5 * Laya.stage.width - _a91, _m = _h.mapBg.x + _d;
                    _m > _h.maxX ? _m = _h.maxX : _m < _h.minX && (_m = _h.minX), _h.mapBg.x = _m;
                }
            }
        }, {
            key: "tp",
            value: function tp(e) {
                if (this.isHadTransfered) return;
                oe.Instance.playButtonClickSound(), this.isHadTransfered = !0;
                var t = new Laya.Vector3(e.transferPoint.x, e.transferPoint.y, e.transferPoint.z);
                Yt.Instance.transferTo(t), jt.Instance.showLoading(), this.close(!1);
            }
        }, {
            key: "mouseUp",
            value: function mouseUp() {
                Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.mouseMove);
            }
        }, {
            key: "close",
            value: function close() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                this.isHadTransfered = !1, this.visible = !1, this.mapBg = null, this.mLastMouseX = 0, 
                Laya.stage.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown), Laya.stage.off(Laya.Event.MOUSE_UP, this, this.mouseUp), 
                this.dialog && (this.dialog.isShowEffect = e, this.dialog.close());
            }
        }, {
            key: "popInsertAd",
            value: function popInsertAd() {
                console.log("**************popInsertAd***********************"), He.Instance.popInsertAd();
            }
        }, {
            key: "closeBtnOnClick",
            value: function closeBtnOnClick(e) {
                oe.Instance.playButtonClickSound(), this.close();
            }
        }, {
            key: "btn1OnClick",
            value: function btn1OnClick(e) {
                oe.Instance.playButtonClickSound();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Ke.mInstance || (Ke.mInstance = new Ke()), Ke.mInstance;
            }
        } ]);
        return Ke;
    }();
    var Qe = function Qe() {
        _classCallCheck2(this, Qe);
    };
    var qe = /* */ function() {
        function qe() {
            _classCallCheck2(this, qe);
            this.visible = !1, this.type = 0, this.goldAmount = 1e3;
        }
        _createClass2(qe, [ {
            key: "show",
            value: function show() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                this.visible && this.close();
                var t = r.randomFloatNum(1, 3);
                if (this.goldAmount = Ee.Instance.GoldReward * t, this.type = e, jt.Instance.hideUI(), 
                He.Instance.showBannerAd(), He.Instance.hideCustomGridAd(), this.visible = !0, Ke.Instance.visible) return void this.close();
                this.dialog = new Laya.Dialog(), this.dialog.size(Laya.stage.width, Laya.stage.height);
                var a = this;
                this.dialog.show(), Laya.timer.once(l.dialogDelayRenderMilliseconds, this, function() {
                    var e = new Laya.Image();
                    e.size(480, 720), e.centerX = 0, e.centerY = 100, a.dialog.addChild(e);
                    var t = new Laya.Image("PastureUI/Main2/zjm_27.png");
                    t.top = -284, t.right = -100, t.on(Laya.Event.CLICK, qe.Instance, qe.Instance.closeBtnOnClick), 
                    e.addChild(t);
                    var i = new Laya.Image("PastureUI/Dialog/tk_24.png");
                    i.top = 200, i.centerX = 0, e.addChild(i);
                    var n = a.goldAmount;
                    n = Math.round(n);
                    var o = r.number2DataUnitString(n), s = new Laya.Label();
                    s.text = "+" + o, s.bold = !0, s.fontSize = 56, s.color = "#f8ff3f", s.align = "center", 
                    s.valign = "middle", s.centerY = 0;
                    var l = new Laya.Image("PastureUI/Main/Icon_Coin.png");
                    l.centerY = 0, l.left = 1.1 * -l.width, s.addChild(l), s.centerX = .5 * l.width, 
                    i.addChild(s);
                    var c = new Laya.Image("PastureUI/Dialog/tk_09_01.png");
                    c.size(297 * .8, 117 * .8), c.sizeGrid = "0,60,0,60,0", c.centerX = 144, c.bottom = 200, 
                    c.on(Laya.Event.CLICK, qe.Instance, qe.Instance.btn1OnClick);
                    var h = new Laya.Label();
                    h.text = w.getLanguage("gold_coin_dialog_button_text"), h.bold = !0, h.fontSize = 40, 
                    h.color = "#ffffff", h.align = "center", h.valign = "middle", h.top = 28 * .8, h.centerX = 0, 
                    c.addChild(h);
                    var d = new Laya.Image("PastureUI/Main/zjm_11_01.png");
                    d.size(51.7, 44), d.centerY = 0, d.left = 1.1 * -d.width, h.addChild(d), h.centerX = .5 * d.width, 
                    e.addChild(c);
                    var m = new Laya.Image("PastureUI/Dialog/tk_09.png");
                    m.size(c.width, c.height), m.sizeGrid = "0,60,0,60,0", m.centerX = -c.centerX, m.bottom = c.bottom, 
                    m.on(Laya.Event.CLICK, a, a.closeBtnOnClick);
                    var g = new Laya.Label();
                    g.text = "Cancel", g.bold = !0, g.fontSize = h.fontSize, g.color = "#ffffff", g.align = "center", 
                    g.valign = "middle", g.top = h.top, g.centerX = 0, m.addChild(g), e.addChild(m);
                    m.visible = true,t.visible = true;
					// m.visible = false,t.visible = false;//czh
					// Laya.timer.once(2000, this, function() {m.visible = true,t.visible = true})//czh
                });
            }
        }, {
            key: "close",
            value: function close() {
                0 == this.type ? Je.Instance.hide() : Ye.Instance.hide(), jt.Instance.showUI(), 
                Yt.Instance.resumeAnimation(), pe.Instance.switchCameraState(0), this.visible = !1, 
                He.Instance.hideBannerAd(), He.Instance.showCustomGridAd(), this.dialog && this.dialog.close();
            }
        }, {
            key: "closeBtnOnClick",
            value: function closeBtnOnClick(e) {
                oe.Instance.playButtonClickSound(), this.close();
            }
        }, {
            key: "btn1OnClick",
            value: function btn1OnClick(e) {
                oe.Instance.playButtonClickSound(), this.doTask();
            }
        }, {
            key: "doTask",
            value: function doTask() {
                Ee.Instance.pauseRecordTime();
                var e = new We();
                e.caller = this, e.callback = this.doTaksCallback, ze.Instance.doTaskWithHandler(e, 0);
            }
        }, {
            key: "doTaksCallback",
            value: function doTaksCallback() {
                Ee.Instance.resumeRecordTime(), this.close();
                var e = this.goldAmount;
                e = Math.round(e), Ee.Instance.coverGoldCoins(Ee.Instance.getGoldCoins() + e);
                var t = r.number2DataUnitString(e), a = w.getLanguage("prop_gold_dialog_title"), i = w.getLanguage("prop_gold_dialog_message");
                i = r.formatString(i, t);
                var n = w.getLanguage("prop_gold_dialog_button_text");
                je.Instance.show(a, i, n, null, this, null, null, !1, !0);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return qe.instance;
            }
        } ]);
        return qe;
    }();
    qe.instance = new qe();
    var Je = /* */ function(_Laya$Script3D4) {
        _inherits2(Je, _Laya$Script3D4);
        var _super8 = _createSuper2(Je);
        function Je() {
            var _this16;
            _classCallCheck2(this, Je);
            _this16 = _super8.call(this), _this16.animalModelScaleDic = {
                2001: .05,
                2002: .05,
                2003: .038,
                2004: .035,
                2005: .04,
                2006: .05,
                2007: .0385,
                2008: .038,
                2009: .0385,
                2010: .045,
                2011: .045,
                2012: .028
            }, _this16.OnHitMaxCount = 20, _this16.onHitCount = 0, Je.mInstance = _assertThisInitialized2(_this16);
            return _this16;
        }
        _createClass2(Je, [ {
            key: "refreshOnHitMaxCount",
            value: function refreshOnHitMaxCount() {
                var e = Kt.Instance.PScale;
                this.OnHitMaxCount = r.randomNum(Math.round(6 * e), Math.round(50 * e));
            }
        }, {
            key: "onAwake",
            value: function onAwake() {
                this.refreshOnHitMaxCount(), this.gameObject = this.owner, this.model = this.gameObject.getChildByName("model"), 
                this.gameObject.active = !1, this.gameObject.transform.position = new Laya.Vector3(-1, -1, 1), 
                this.initAnimalModel();
            }
        }, {
            key: "initAnimalModel",
            value: function initAnimalModel() {
                var _this17 = this;
                var e = Jt.Instance.AnimalConfig.getAll();
                var _iterator10 = _createForOfIteratorHelper2(e), _step10;
                try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                        var _t110 = _step10.value;
                        if (_t110) {
                            var _e88 = _t110.animalModel;
                            if (_e88) {
                                (function() {
                                    var a = Laya.MeshSprite3D.instantiate(_e88, _this17.model);
                                    a.transform.localPosition = new Laya.Vector3(0, 0, 0);
                                    var i = 2 * _this17.animalModelScaleDic[_t110.id], n = a.getChildByName("model");
                                    n.transform.localScale = new Laya.Vector3(i, i, i), n.getComponent(Laya.Animator).speed = 0, 
                                    a.active = !0, function() {
                                        var e = n.getChildByName("dw");
                                        e.skinnedMeshRenderer.material = Ze.goldAnimalMaterial, e.skinnedMeshRenderer.castShadow = !1;
                                    }(), a.name = _t110.id.toString();
                                })();
                            }
                        }
                    }
                } catch (err) {
                    _iterator10.e(err);
                } finally {
                    _iterator10.f();
                }
            }
        }, {
            key: "show",
            value: function show(e, t) {
                if (this.model.numChildren > 0) for (var _e89 = 0; _e89 < this.model.numChildren; _e89++) {
                    var _a92 = this.model.getChildAt(_e89);
                    _a92.name == t.id.toString() ? _a92.active = !0 : _a92.active = !1;
                }
                this.gameObject.transform.position = e, this.gameObject.active = !0;
            }
        }, {
            key: "hide",
            value: function hide() {
                this.gameObject.active = !1;
            }
        }, {
            key: "onAnimalHit",
            value: function onAnimalHit(e, t) {
                this.onHitCount++, this.onHitCount >= this.OnHitMaxCount && (this.onHitCount = 0, 
                this.refreshOnHitMaxCount(), this.show(e, t));
            }
        }, {
            key: "onTriggerEnter",
            value: function onTriggerEnter(e) {
                if (Yt.isCharacter(e.owner.name)) {
                    var _e90 = new Laya.Vector3(this.gameObject.transform.position.x, .5, this.gameObject.transform.position.z);
                    Laya.Tween.to(this.gameObject.transform, {
                        localPositionY: _e90.y
                    }, pe.CameraAnimationMillieconds, Laya.Ease.linearNone), Fe.Instance.cancelMove(), 
                    Yt.Instance.pauseAnimation(), pe.Instance.lookProp(_e90), qe.Instance.show();
                }
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Je.mInstance;
            }
        } ]);
        return Je;
    }(Laya.Script3D);
    var Ze = /* */ function(_Laya$Script3D5) {
        _inherits2(Ze, _Laya$Script3D5);
        var _super9 = _createSuper2(Ze);
        function Ze() {
            var _this18;
            _classCallCheck2(this, Ze);
            _this18 = _super9.apply(this, arguments), _this18.isOnGround = !1, _this18.moveSpeed = 0, 
            _this18.forward = new Laya.Vector3(0, 0, -1), _this18.d1 = .08, _this18.d2 = .08, 
            _this18.d3 = .02, _this18.h1 = .6, _this18.h2 = .2, _this18.h3 = .1, _this18.frameCount = 0, 
            _this18.switchStateFrame = 100, _this18.switchStateFrameCount = 0, _this18.currentState = 0;
            return _this18;
        }
        _createClass2(Ze, [ {
            key: "isDied",
            get: function get() {
                return 100 == this.currentState;
            }
        }, {
            key: "initAnimal",
            value: function initAnimal(e, t, a, i) {
                this.parentPasture = e, this.gameObject = t, this.model = this.gameObject.getChildByName("model"), 
                this.dw = this.model.getChildByName("dw"), this.rotationY = a, this.model.transform.localRotationEulerY = this.rotationY, 
                this.isSmallAnimal = i, this.animator = this.model.getComponent(Laya.Animator), 
                this.refresAnimal();
            }
        }, {
            key: "refreshForward",
            value: function refreshForward() {
                var e = new Laya.Vector3(0, 0, 0);
                this.model.transform.getForward(e), Laya.Vector3.normalize(e, e), this.forward = e;
            }
        }, {
            key: "growUp",
            value: function growUp() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                this.isSmallAnimal && (this.isSmallAnimal = !1, e ? this.growUpAnimation() : this.switchState(2));
            }
        }, {
            key: "growUpAnimation",
            value: function growUpAnimation() {
                this.dw.skinnedMeshRenderer.material = Ze.adultAnimalMaterial;
                var e = 1.3 * Ze.adultAnimalScale;
                Laya.Tween.to(this.gameObject.transform, {
                    localScaleX: e,
                    localScaleY: e,
                    localScaleZ: e
                }, 300, Laya.Ease.linearNone, new Laya.Handler(this, this.bigToCommon));
            }
        }, {
            key: "bigToCommon",
            value: function bigToCommon() {
                Laya.Tween.to(this.gameObject.transform, {
                    localScaleX: Ze.adultAnimalScale,
                    localScaleY: Ze.adultAnimalScale,
                    localScaleZ: Ze.adultAnimalScale
                }, 120, Laya.Ease.linearNone);
            }
        }, {
            key: "onHit",
            value: function onHit() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                if (!this.isDied) if (e) this.switchState(100), Laya.Vector3.subtract(e.gameObject.transform.position, this.gameObject.transform.position, this.forward), 
                Laya.Vector3.normalize(this.forward, this.forward), this.jump1(e); else {
                    var _e91 = this.model.transform.position;
                    Je.Instance.onAnimalHit(_e91, this.parentPasture.pastureBlockConfig.animalConfig), 
                    oe.Instance.playAnimalOnHit(), B.Instance.playAttackAnimalEffect(this.gameObject.transform.position), 
                    this.switchState(100), Laya.Vector3.subtract(Yt.Instance.gameObject.transform.position, this.gameObject.transform.position, this.forward), 
                    Laya.Vector3.normalize(this.forward, this.forward), this.jump1();
                }
            }
        }, {
            key: "jump1",
            value: function jump1() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var t = [], a = this.gameObject.transform.position, i = new Laya.Vector3(a.x - 2 * this.d1 * this.forward.x, 0, a.z - 2 * this.d1 * this.forward.z), n = new Laya.Vector3(.5 * (a.x + i.x), this.h1, .5 * (a.z + i.z));
                t.push(a), t.push(n), t.push(i);
                var o = re.CreateBezierPoints(t, 19), s = 0, r = this;
                Laya.timer.frameLoop(1, this, function() {
                    if (s > o.length - 1) Laya.timer.clearAll(r), r.jump2(i, e), s = 0; else if (r.gameObject) {
                        var _e92 = new Laya.Vector3(o[s].x, o[s].y, o[s].z);
                        r.gameObject.transform.position = _e92;
                    }
                    s++;
                });
            }
        }, {
            key: "jump2",
            value: function jump2(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var a = [], i = new Laya.Vector3(e.x - 2 * this.d2 * this.forward.x, 0, e.z - 2 * this.d2 * this.forward.z), n = new Laya.Vector3(.5 * (e.x + i.x), this.h2, .5 * (e.z + i.z));
                a.push(e), a.push(n), a.push(i);
                var o = re.CreateBezierPoints(a, 19), s = 0, r = this;
                Laya.timer.frameLoop(1, this, function() {
                    if (s > o.length - 1) Laya.timer.clearAll(r), r.end(i, t), s = 0; else if (r.gameObject) {
                        var _e93 = new Laya.Vector3(o[s].x, o[s].y, o[s].z);
                        r.gameObject.transform.position = _e93;
                    }
                    s++;
                });
            }
        }, {
            key: "end",
            value: function end(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                if (t) this.flyToNpcBox(e, t); else {
                    var _e94 = this.model.transform.position, _t111 = this.parentPasture.pastureBlockConfig.animalConfig.id;
                    Ce.Instance.productIconFlyToUI(_e94, _t111), this.gameObject.active = !1, this.destroy();
                }
            }
        }, {
            key: "flyToNpcBox",
            value: function flyToNpcBox(e, t) {
                t.getProduct();
                var a = t.boxNode.transform.position, i = [], n = new Laya.Vector3(.5 * (e.x + a.x), a.y + .4, .5 * (e.z + a.z));
                i.push(e), i.push(n), i.push(a);
                var o = re.CreateBezierPoints(i, 19), s = 0, r = this;
                Laya.timer.frameLoop(1, this, function() {
                    if (s > o.length - 1) Laya.timer.clearAll(r), r.gameObject.active = !1, r.destroy(), 
                    s = 0; else if (r.gameObject) {
                        var _e95 = new Laya.Vector3(o[s].x, o[s].y, o[s].z);
                        r.gameObject.transform.position = _e95;
                    }
                    s++;
                });
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                Laya.Tween.clearAll(this), Laya.Tween.clearAll(this.gameObject), Laya.Tween.clearAll(this.gameObject.transform);
            }
        }, {
            key: "refresAnimal",
            value: function refresAnimal() {
                this.isSmallAnimal ? (this.gameObject.transform.localScale = new Laya.Vector3(Ze.samllAnimalScale, Ze.samllAnimalScale, Ze.samllAnimalScale), 
                this.dw.skinnedMeshRenderer.material = Ze.samllAnimalMaterial) : (this.gameObject.transform.localScale = new Laya.Vector3(Ze.adultAnimalScale, Ze.adultAnimalScale, Ze.adultAnimalScale), 
                this.dw.skinnedMeshRenderer.material = Ze.adultAnimalMaterial);
            }
        }, {
            key: "fly",
            value: function fly(e, t) {
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
                this.parentPasture.rootModel.active ? this.playFly() : this.playWalk();
                var i = new Laya.Vector3(.5 * (e.x + t.x), Ze.maxTop, .5 * (e.z + t.z)), n = [];
                n.push(e), n.push(i), n.push(t);
                var o = re.CreateBezierPoints(n, 41), s = 0, r = this;
                Laya.timer.frameLoop(1, this, function() {
                    if (s > o.length - 1) Laya.timer.clearAll(r), r.gameObject.transform.position = t, 
                    a && oe.Instance.playAnimalOnRoundSound(), r.fallToTheGround(), s = 0; else if (r.gameObject) {
                        var _e96 = new Laya.Vector3(o[s].x, o[s].y, o[s].z);
                        r.gameObject.transform.position = _e96;
                    }
                    s++;
                });
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (this.frameCount >= 1) {
                    if (this.frameCount = 0, 100 != this.currentState) {
                        if (this.moveSpeed > 0) {
                            var _e97 = Laya.timer.delta / 1e3, _t112 = this.forward.x * _e97 * this.moveSpeed, _a93 = this.forward.z * _e97 * this.moveSpeed, _i49 = this.gameObject.transform.position.x - _t112, _n20 = this.gameObject.transform.position.z - _a93, _o16 = Math.round(_i49) + "_" + Math.round(_n20);
                            if (this.parentPasture.neighborAnimalPool.getPastureByKey(_o16)) {
                                var _e98 = .05, _t113 = _i49 - (this.forward.x > 0 ? 1 : -1) * _e98, _a94 = _n20 - (this.forward.z > 0 ? 1 : -1) * _e98, _o17 = Math.round(_t113) + "_" + Math.round(_a94);
                                if (this.parentPasture.neighborAnimalPool.getPastureByKey(_o17)) this.gameObject.transform.position = new Laya.Vector3(_i49, 0, _n20); else {
                                    var _e99 = r.randomFloatNum(90, 180);
                                    this.model.transform.localRotationEulerY += _e99, this.refreshForward();
                                }
                            } else {
                                var _e100 = r.randomFloatNum(90, 180);
                                this.model.transform.localRotationEulerY += _e100, this.refreshForward();
                            }
                        }
                        this.switchStateFrameCount >= this.switchStateFrame && this.switchState(), this.switchStateFrameCount++;
                    }
                } else this.frameCount++;
            }
        }, {
            key: "fallToTheGround",
            value: function fallToTheGround() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                Laya.timer.clearAll(this), this.gameObject.transform.localPositionY = 0, this.isOnGround = !0, 
                this.refreshSwitchStateFrame(), e && (this.switchStateFrame = r.randomNum(Ze.minSwitchStateFrame, Ze.maxSwitchStateFrame)), 
                r.randomNum(0, 10) < 6 ? this.run() : this.idle();
            }
        }, {
            key: "run",
            value: function run() {
                this.refreshForward();
                var e = r.randomFloatNum(Ze.minSpeed, Ze.maxSpeed);
                this.moveSpeed = e, this.playWalk();
            }
        }, {
            key: "idle",
            value: function idle() {
                this.moveSpeed = 0, this.playIdle();
            }
        }, {
            key: "eat",
            value: function eat() {
                this.moveSpeed = 0, this.playEat();
            }
        }, {
            key: "switchState",
            value: function switchState() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
                if (100 != this.currentState) {
                    if (this.switchStateFrameCount = 0, this.refreshSwitchStateFrame(), e < 0) {
                        e = r.randomNum(0, 20) <= 1 ? 1 : 0;
                    }
                    switch (2 == this.currentState && this.growUpAnimation(), this.currentState = e, 
                    e) {
                      case 0:
                      default:
                        this.idle();
                        break;

                      case 1:
                        this.run();
                        break;

                      case 2:
                        this.switchStateFrame = 60, this.eat();
                        break;

                      case 100:
                        this.playDie();
                    }
                }
            }
        }, {
            key: "refreshSwitchStateFrame",
            value: function refreshSwitchStateFrame() {
                this.switchStateFrame = r.randomNum(Ze.minSwitchStateFrame, Ze.maxSwitchStateFrame);
            }
        }, {
            key: "playFly",
            value: function playFly() {
                if (this.animator) {
                    var _e101 = "fei";
                    this.animator.play(_e101, 0, 0);
                }
            }
        }, {
            key: "playWalk",
            value: function playWalk() {
                if (this.animator) {
                    var _e102 = "zou";
                    this.animator.crossFade(_e102, .5, 0, 0);
                }
            }
        }, {
            key: "playEat",
            value: function playEat() {
                if (this.animator) {
                    var _e103 = "chi";
                    this.animator.crossFade(_e103, .5, 0, 0);
                }
            }
        }, {
            key: "playDie",
            value: function playDie() {
                if (this.animator) {
                    var _e104 = "siwang";
                    this.animator.play(_e104, 0, 0);
                }
            }
        }, {
            key: "playIdle",
            value: function playIdle() {
                if (this.animator) {
                    var _e105 = "daiji_a";
                    this.animator.crossFade(_e105, .5, 0, 0);
                }
            }
        } ]);
        return Ze;
    }(Laya.Script3D);
    Ze.samllAnimalScale = .9, Ze.adultAnimalScale = 1.4, Ze.minSpeed = .3, Ze.maxSpeed = .7, 
    Ze.maxTop = 1, Ze.minSwitchStateFrame = 55, Ze.maxSwitchStateFrame = 125;
    var $e = /* */ function() {
        function $e() {
            _classCallCheck2(this, $e);
            this.animalFeedIndex = 0;
        }
        _createClass2($e, [ {
            key: "init",
            value: function init(e) {
                var t = e.getChildByName("AnimalFeed");
                t.active = !1, this.animalFeedArray = new Array(60);
                for (var _a95 = 0; _a95 < this.animalFeedArray.length; _a95++) {
                    if (0 == _a95) this.animalFeedArray[0] = t; else {
                        var _i50 = Laya.MeshSprite3D.instantiate(t, e, !1);
                        _i50.active = !1, this.animalFeedArray[_a95] = _i50;
                    }
                }
            }
        }, {
            key: "throwAnimalFeedFromNpc",
            value: function throwAnimalFeedFromNpc(e, t, a) {
                var i = this.getAnimalFeedModel();
                if (i) {
                    i.active = !0, i.transform.position = t;
                    var _e106 = a, _n21 = Yt.fanAngle, _o18 = r.randomFloatNum(0, _n21);
                    _e106 += _o18 -= .5 * _n21, i.transform.localRotationEulerY = _e106;
                    var _s15 = new Laya.Vector3(0, 0, 0);
                    i.transform.getForward(_s15), Laya.Vector3.normalize(_s15, _s15);
                    var _l8 = new Laya.Vector2(_s15.x, _s15.z), _c2 = this.getAnimalFallPosition(t, _l8, !1);
                    this.fly(i, t, _c2, !1);
                }
            }
        }, {
            key: "throwAnimalFeed",
            value: function throwAnimalFeed(e, t, a) {
                var i = this.getAnimalFeedModel();
                if (i) {
                    i.active = !0, i.transform.position = e;
                    var _n22 = t, _o19 = Yt.fanAngle, _s16 = r.randomFloatNum(0, _o19);
                    _n22 += _s16 -= .5 * _o19, i.transform.localRotationEulerY = _n22;
                    var _l9 = new Laya.Vector3(0, 0, 0);
                    i.transform.getForward(_l9), Laya.Vector3.normalize(_l9, _l9);
                    var _c3 = new Laya.Vector2(_l9.x, _l9.z), _h2 = this.getAnimalFallPosition(e, _c3, a);
                    this.fly(i, e, _h2, a);
                }
            }
        }, {
            key: "getAnimalFallPosition",
            value: function getAnimalFallPosition(e, t, a) {
                var i = a ? r.randomFloatNum(.2, Yt.strongAttackDistance) : r.randomFloatNum(.1, Yt.attackDistance), n = new Laya.Vector3(e.x, 0, e.z), o = new Laya.Vector3(t.x, 0, t.y);
                Laya.Vector3.scale(o, i, o);
                var s = new Laya.Vector3(0, 0, 0);
                return Laya.Vector3.subtract(n, o, s), s;
            }
        }, {
            key: "getAnimalFeedModel",
            value: function getAnimalFeedModel() {
                var e = this.animalFeedArray[this.animalFeedIndex];
                return this.animalFeedIndex++, this.animalFeedIndex >= this.animalFeedArray.length - 1 && (this.animalFeedIndex = 0), 
                Laya.timer.clearAll(e), Laya.timer.clearAll(e.transform), e;
            }
        }, {
            key: "fly",
            value: function fly(e, t, a, i) {
                var n = i ? .6 : .3, o = new Laya.Vector3(.5 * (t.x + a.x), n, .5 * (t.z + a.z)), s = [];
                s.push(t), s.push(o), s.push(a);
                var r = i ? 25 : 15, l = re.CreateBezierPoints(s, r), c = 0, h = function h() {
                    e.active = !1;
                }, d = function d() {
                    if (c > l.length - 1) e.transform.position = a, Laya.timer.frameOnce(60, e, h); else {
                        if (e) {
                            var _t114 = new Laya.Vector3(l[c].x, l[c].y, l[c].z);
                            e.transform.position = _t114;
                        }
                        Laya.timer.frameOnce(1, e, d);
                    }
                    c++;
                };
                d();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return $e.instance || ($e.instance = new $e()), $e.instance;
            }
        } ]);
        return $e;
    }();
    $e.instance = null;
    var et = /* */ function(_Laya$Script5) {
        _inherits2(et, _Laya$Script5);
        var _super10 = _createSuper2(et);
        function et() {
            var _this19;
            _classCallCheck2(this, et);
            _this19 = _super10.call(this), _this19.opImageArray = [ [ "release_animal_1_", "release_animal_2_" ], [ "feed_1", "feed_2" ], [ "weapon_1", "weapon_2" ], [ "axe_1", "axe_2" ] ], 
            _this19.opFarmIamgeArray = [ [ "sow_seed_1_", "sow_seed_2_" ], [ "watering_1", "watering_2" ], [ "sickle_1", "sickle_2" ] ], 
            _this19.opRightTitleImageArray = [ "zjm_16", "zjm_16_01", "zjm_16_02", "zjm_16_03" ], 
            _this19.opRightFarmTitleImageArray = [ "zjm_16", "zjm_16_14", "zjm_16_15", "zjm_16_03" ], 
            _this19.totalStep = 2, _this19.temporaryHideGuide = !1, et.mInstance = _assertThisInitialized2(_this19);
            return _this19;
        }
        _createClass2(et, [ {
            key: "onAwake",
            value: function onAwake() {
                this.guideClickImage.visible = !1, this.rootView = this.owner, this.rootView.visible = !1, 
                this.rootView.mouseThrough = !0, this.leftImageBg.pivot(.5 * this.leftImageBg.width, .5 * this.leftImageBg.height), 
                this.rightImageBg.pivot(.5 * this.rightImageBg.width, .5 * this.rightImageBg.height), 
                this.leftImageBg.on(Laya.Event.CLICK, this, this.onClickLeftImage), this.rightImageBg.on(Laya.Event.CLICK, this, this.onClickRightImage), 
                this.rootView.mouseThrough = !0;
            }
        }, {
            key: "refreshGuide",
            value: function refreshGuide() {
                this.taskImgae.visible ? this.guideClickImage.visible = !1 : (this.guideClickImage.visible = !this.temporaryHideGuide, 
                ce.Instance.warehouseHadUnlocked() && !Ue.Instance.isCompletedUnlockWarehouseNPC() ? Ee.Instance.isStrongMode ? this.guideClickImage.centerX = 130 : this.guideClickImage.centerX = -130 : this.guideClickImage.centerX = 130);
            }
        }, {
            key: "onRefresh",
            value: function onRefresh() {
                if (this.rootView) if (this.tempPController && this.tempPController.pastureBlockInfo) {
                    this.initStrongProgress();
                    var _e107 = Ee.Instance.isStrongMode ? 1 : 0;
                    if (Ue.Instance.isCompletedStep2() || Ue.Instance.isCompletedUnlockWarehouseNPC() || Ue.Instance.AllGuideIsCompleted || 1 != Zt.Instance.SceneIndex ? (this.taskImgae.visible = !0, 
                    this.leftTitleImage.centerX = 20) : (this.taskImgae.visible = !1, this.leftTitleImage.centerX = 0), 
                    this.refreshGuide(), this.tempPController.pastureBlockInfo.treeClear) {
                        this.rightTitleImage.skin = "PastureUI/Main/" + this.opRightTitleImageArray[this.tempPController.pastureBlockInfo.State + 1] + ".png";
                        var _t115 = this.opImageArray[this.tempPController.pastureBlockInfo.State];
                        if (0 == this.tempPController.pastureBlockInfo.State) {
                            var _a96 = this.tempPController.pastureBlockConfig.animalConfig.id;
                            this.rightImage.skin = "PastureUI/Main3/" + _t115[_e107] + _a96 + ".png", this.leftImage.skin = "PastureUI/Main3/" + _t115[1] + _a96 + ".png";
                        } else this.rightImage.skin = "PastureUI/Main/" + _t115[_e107] + ".png", this.leftImage.skin = "PastureUI/Main/" + _t115[1] + ".png";
                    } else {
                        this.rightTitleImage.skin = "PastureUI/Main/" + this.opRightTitleImageArray[0] + ".png";
                        var _t116 = this.opImageArray[3];
                        this.rightImage.skin = "PastureUI/Main/" + _t116[_e107] + ".png", this.leftImage.skin = "PastureUI/Main/" + _t116[1] + ".png";
                    }
                } else if (this.tempFarmController && this.tempFarmController.farmBlockInfo) {
                    this.initStrongProgress();
                    var _e108 = Ee.Instance.isStrongMode ? 1 : 0;
                    if (Ue.Instance.isCompletedStep2() || Ue.Instance.isCompletedUnlockWarehouseNPC() || Ue.Instance.AllGuideIsCompleted || 1 != Zt.Instance.SceneIndex ? (this.taskImgae.visible = !0, 
                    this.leftTitleImage.centerX = 20) : (this.taskImgae.visible = !1, this.leftTitleImage.centerX = 0), 
                    this.refreshGuide(), this.tempFarmController.farmBlockInfo.treeClear) {
                        this.rightTitleImage.skin = "PastureUI/Main/" + this.opRightFarmTitleImageArray[this.tempFarmController.farmBlockInfo.State + 1] + ".png";
                        var _t117 = this.opFarmIamgeArray[this.tempFarmController.farmBlockInfo.State];
                        if (0 == this.tempFarmController.farmBlockInfo.State) {
                            var _a97 = this.tempFarmController.farmBlockConfig.Config.id;
                            this.rightImage.skin = "PastureUI/Main2/" + _t117[_e108] + _a97 + ".png", this.leftImage.skin = "PastureUI/Main2/" + _t117[1] + _a97 + ".png";
                        } else this.rightImage.skin = "PastureUI/Main2/" + _t117[_e108] + ".png", this.leftImage.skin = "PastureUI/Main2/" + _t117[1] + ".png";
                    } else {
                        this.rightTitleImage.skin = "PastureUI/Main/" + this.opRightFarmTitleImageArray[0] + ".png";
                        var _t118 = this.opImageArray[3];
                        this.rightImage.skin = "PastureUI/Main/" + _t118[_e108] + ".png", this.leftImage.skin = "PastureUI/Main/" + _t118[1] + ".png";
                    }
                } else this.releaHide();
            }
        }, {
            key: "initStrongProgress",
            value: function initStrongProgress() {
                Ee.Instance.isStrongMode ? (this.ProgressBg.visible = !0, this.startCountDown()) : this.ProgressBg.visible = !1;
            }
        }, {
            key: "startCountDown",
            value: function startCountDown() {
                var e = r.getNowTimestamp(), t = Math.floor((Ee.Instance.getStrongTime() - e) / 1e3);
                t < 0 ? (this.ProgressBg.visible = !1, Yt.Instance.beCommonActionInThePasture(this.tempPController, this.tempFarmController)) : (this.timeLabel.text = r.secondsFormatMS(t), 
                this.onUpdateProgress(t / T.Instance.strongMaxSeconds), Laya.timer.once(1e3, this, this.startCountDown));
            }
        }, {
            key: "onUpdateProgress",
            value: function onUpdateProgress(e) {
                e > 1 ? e = 1 : e < 0 && (e = 0), this.ProgressBarPanel.width = 410 * e;
            }
        }, {
            key: "showPasture",
            value: function showPasture(e) {
                e && (this.temporaryHideGuide = !1, this.tempPController = e, this.tempFarmController = null, 
                this.awakeShow(e, null), Yt.Instance.beCommonActionInThePasture(this.tempPController, this.tempFarmController));
            }
        }, {
            key: "showFarm",
            value: function showFarm(e) {
                e && (this.temporaryHideGuide = !1, this.tempFarmController = e, this.tempPController = null, 
                this.awakeShow(null, e), Yt.Instance.beCommonActionInThePasture(this.tempPController, this.tempFarmController));
            }
        }, {
            key: "awakeShow",
            value: function awakeShow(e, t) {
                e ? (this.tempPController = e, this.onRefresh(), Laya.timer.frameOnce(1, this, this.realShow)) : t && (this.tempFarmController = t, 
                this.onRefresh(), Laya.timer.frameOnce(1, this, this.realShow));
            }
        }, {
            key: "realShow",
            value: function realShow() {
                this.rootView.visible = !0, He.Instance.showBannerAd(), He.Instance.hideCustomGridAd();
            }
        }, {
            key: "releaHide",
            value: function releaHide() {
                this.rootView.visible && (this.rootView.visible = !1, He.Instance.hideBannerAd(), 
                He.Instance.showCustomGridAd(), Laya.timer.clear(this, this.realShow), Laya.timer.clear(this, this.startCountDown));
            }
        }, {
            key: "onLeavedPasture",
            value: function onLeavedPasture() {
                this.tempPController = null, this.releaHide();
            }
        }, {
            key: "onClickLeftImage",
            value: function onClickLeftImage() {
                oe.Instance.playButtonClickSound(), fe.imageScaleAnimation(this.leftImage), this.taskImgae.visible ? this.doTask() : (Ee.Instance.pauseRecordTime(), 
                this.doTaksCallback());
            }
        }, {
            key: "onClickRightImage",
            value: function onClickRightImage() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                if (e && (oe.Instance.playButtonClickSound(), fe.imageScaleAnimation(this.rightImage)), 
                this.tempFarmController) this.tempPController = null, Yt.Instance.operationInPastureOrFarm(null, this.tempFarmController), 
                this.releaHide(), 2 == this.tempFarmController.farmBlockInfo.State && (this.temporaryHideGuide = !0); else if (this.tempPController) switch (this.tempFarmController = null, 
                Yt.Instance.operationInPastureOrFarm(this.tempPController, null), this.releaHide(), 
                this.tempPController.pastureBlockInfo.State) {
                  case 2:
                    this.temporaryHideGuide = !0;
                    break;

                  case 1:
                    Ue.Instance.AllGuideIsCompleted || Ue.Instance.isCompletedStep2() || ce.Instance.warehouseHadUnlocked() || Fe.Instance.awakeClickGuide();
                }
            }
        }, {
            key: "doTask",
            value: function doTask() {
                Ee.Instance.pauseRecordTime();
                var e = new We();
                e.caller = this, e.callback = this.doTaksCallback, ze.Instance.doTaskWithHandler(e, 0);
            }
        }, {
            key: "doTaksCallback",
            value: function doTaksCallback() {
                Ee.Instance.resumeRecordTime(), Ee.Instance.doTaskAddStrongTime(), this.onRefresh(), 
                Yt.Instance.playToStrong(), Laya.timer.once(200, this, this.playEffect);
            }
        }, {
            key: "playEffect",
            value: function playEffect() {
                B.Instance.playToStrongEffect(Yt.Instance.gameObject.transform.position), this.onClickRightImage(!1);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return et.mInstance;
            }
        } ]);
        return et;
    }(Laya.Script);
    var tt = /* */ function() {
        function tt(e) {
            _classCallCheck2(this, tt);
            this.oneBlockAnimalAmount = 0, this.mAnimalAmountMax = 0, this.animalList = new P(), 
            this.pControllerList = new P(), this.banCheckFeed = !1, this.pastureControllerDic = {}, 
            this.index = tt.count, this.oneBlockAnimalAmount = e.pastureBlockConfig.animalConfig.apb, 
            tt.count++, this.appendController(e);
        }
        _createClass2(tt, [ {
            key: "animalAmountMax",
            get: function get() {
                return this.mAnimalAmountMax;
            }
        }, {
            key: "animalAmount",
            get: function get() {
                return this.animalList.size();
            }
        }, {
            key: "checkAttack",
            value: function checkAttack(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var a = this.animalList.getHead(), i = 0;
                for (;a; ) {
                    var _n23 = a.element;
                    _n23 && !_n23.isDied && (t ? _n23.isSmallAnimal ? t.operationInTargetBlock(e, null) : t.hitDetection(_n23.gameObject.transform.position) ? (_n23.onHit(t), 
                    this.removeAnimal(_n23)) : i++ : _n23.isSmallAnimal ? Yt.Instance.beCommonActionInThePasture(e, null) : Yt.Instance.hitDetection(_n23.gameObject.transform.position) ? (_n23.onHit(), 
                    this.removeAnimal(_n23)) : i++), a = a.next;
                }
                i <= 0 && this.allPControlerBeClearState(t);
            }
        }, {
            key: "allPControlerBeClearState",
            value: function allPControlerBeClearState() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var t = this.pControllerList.getHead();
                for (;t; ) {
                    var _e109 = t.element;
                    _e109 && _e109.pastureBlockInfo.setState(0), t = t.next;
                }
                if (me.Instance.save(), e) {
                    var _t119 = e.getStantBlockKey(), _a98 = me.Instance.getPControllerByKey(_t119);
                    _a98 && e.switchActionInThePasture(_a98, null);
                } else {
                    var _e110 = Yt.Instance.getStantBlockKey(), _t120 = me.Instance.getPControllerByKey(_e110);
                    _t120 && Yt.Instance.beCommonActionInThePasture(_t120, null);
                }
            }
        }, {
            key: "checkFeed",
            value: function checkFeed() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                if (this.banCheckFeed) return;
                var t = this.animalList.getHead(), a = 0;
                for (;t; ) {
                    var _i51 = t.element;
                    _i51 && _i51.isSmallAnimal && (e ? e.hitDetection(_i51.gameObject.transform.position) ? _i51.growUp() : a++ : Yt.Instance.hitDetection(_i51.gameObject.transform.position) ? _i51.growUp() : a++), 
                    t = t.next;
                }
                a / this.animalAmount <= .2 && (a > 0 && this.allAnimalBeAdult(), this.banCheckFeed = !0, 
                Laya.timer.frameOnce(80, this, this.allPControlerBeAdultState, [ e ]));
            }
        }, {
            key: "allPControlerBeAdultState",
            value: function allPControlerBeAdultState() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var t, a = this.pControllerList.getHead();
                for (;a; ) {
                    var _e111 = a.element;
                    _e111 && _e111.pastureBlockInfo.setState(2), a = a.next;
                }
                me.Instance.save(), t = e ? e.getStantBlockKey() : Yt.Instance.getStantBlockKey();
                var i = me.Instance.getPControllerByKey(t);
                i && (e ? e.switchActionInThePasture(i, null) : Yt.Instance.beCommonActionInThePasture(i, null)), 
                this.banCheckFeed = !1;
            }
        }, {
            key: "allAnimalBeAdult",
            value: function allAnimalBeAdult() {
                var e = this.animalList.getHead();
                for (;e; ) {
                    var _t121 = e.element;
                    _t121 && _t121.isSmallAnimal && _t121.growUp(!0), e = e.next;
                }
            }
        }, {
            key: "link",
            value: function link(e) {
                if (e) {
                    var _t122 = e.pControllerList.getHead();
                    for (;_t122; ) {
                        var _e112 = _t122.element;
                        _e112 && (this.linkAnimal(_e112.neighborAnimalPool.animalList), _e112.neighborAnimalPool = this, 
                        this.appendController(_e112)), _t122 = _t122.next;
                    }
                }
                return this.refreshPController(), this;
            }
        }, {
            key: "refreshPController",
            value: function refreshPController() {
                var e = this.pControllerList.getHead(), t = 0;
                for (;e; ) {
                    var _a99 = e.element;
                    _a99 && _a99.pastureBlockInfo.State > t && (t = _a99.pastureBlockInfo.State), e = e.next;
                }
                if (t > 0) {
                    for (e = this.pControllerList.getHead(); e; ) {
                        var _a101 = e.element;
                        _a101 && _a101.pastureBlockInfo.State < t && _a101.pastureBlockInfo.setState(t), 
                        e = e.next;
                    }
                    var _a100 = 1 == t, _i52 = this.animalList.getHead();
                    for (;_i52; ) {
                        _i52.element && _i52.element.isSmallAnimal != _a100 && (_i52.element.isSmallAnimal = _a100, 
                        _i52.element.refresAnimal()), _i52 = _i52.next;
                    }
                    et.Instance.onRefresh(), me.Instance.save();
                }
            }
        }, {
            key: "linkAnimal",
            value: function linkAnimal(e) {
                var t = e.getHead();
                for (;t; ) {
                    t.element && this.addAnimal(t.element), t = t.next;
                }
            }
        }, {
            key: "addAnimal",
            value: function addAnimal(e) {
                return !this.animalIsReachedMax() && (this.animalList.append(e), !0);
            }
        }, {
            key: "animalIsReachedMax",
            value: function animalIsReachedMax() {
                return this.animalAmount >= this.animalAmountMax;
            }
        }, {
            key: "removeAnimal",
            value: function removeAnimal(e) {
                this.animalList.remove(e);
            }
        }, {
            key: "completedReleaseAnimal",
            value: function completedReleaseAnimal() {
                this.adjustPControllerState(1);
            }
        }, {
            key: "getPastureByKey",
            value: function getPastureByKey(e) {
                return this.pastureControllerDic[e];
            }
        }, {
            key: "adjustPControllerState",
            value: function adjustPControllerState(e) {
                var t = this.pControllerList.getHead();
                for (;t; ) {
                    t.element && t.element.pastureBlockInfo.setState(e), t = t.next;
                }
                me.Instance.save();
            }
        }, {
            key: "appendController",
            value: function appendController(e) {
                this.pControllerList.append(e), this.pastureControllerDic[e.pastureBlockInfo.k] = e;
                var t = this.pControllerList.size();
                this.mAnimalAmountMax = t * this.oneBlockAnimalAmount;
            }
        }, {
            key: "autoBeAdultAnimal",
            value: function autoBeAdultAnimal() {
                var e = this.pControllerList.getHead();
                for (;e; ) {
                    var _t123 = e.element;
                    _t123 && 0 == _t123.pastureBlockInfo.State && _t123.replenishSmallAnimals(), e = e.next;
                }
                this.allAnimalBeAdult(), this.allPControlerBeAdultState();
            }
        }, {
            key: "getMinDistancePastureToPosition",
            value: function getMinDistancePastureToPosition(e) {
                var t = this.pControllerList.getHead(), a = null;
                for (;t; ) {
                    var _i53 = t.element;
                    if (_i53 && _i53.pastureBlockInfo.treeClear) if (null == a) a = _i53; else {
                        var _t124 = new Laya.Vector3(), _n24 = new Laya.Vector3();
                        Laya.Vector3.subtract(a.rootModel.transform.position, e, _t124), Laya.Vector3.subtract(_i53.rootModel.transform.position, e, _n24);
                        var _o20 = Laya.Vector3.scalarLength(_t124);
                        Laya.Vector3.scalarLength(_n24) < _o20 && (a = _i53);
                    }
                    t = t.next;
                }
                return a;
            }
        }, {
            key: "getMinDistanceAnimalPositionFrom",
            value: function getMinDistanceAnimalPositionFrom(e, t) {
                var a = this.animalList.getHead(), i = null, n = 1e5;
                for (;a; ) {
                    var _o21 = a.element;
                    if (_o21 && _o21.isSmallAnimal == t) {
                        var _t125 = _o21.gameObject.transform.position, _a102 = new Laya.Vector3();
                        Laya.Vector3.subtract(_t125, e, _a102);
                        var _s17 = Laya.Vector3.scalarLength(_a102);
                        _s17 < n && (n = _s17, i = new Laya.Vector3(_t125.x, 0, _t125.z));
                    }
                    a = a.next;
                }
                return i;
            }
        } ], [ {
            key: "createNeighborAnimaPool",
            value: function createNeighborAnimaPool(e) {
                return new tt(e);
            }
        } ]);
        return tt;
    }();
    tt.count = 0;
    var at = /* */ function(_Laya$Script6) {
        _inherits2(at, _Laya$Script6);
        var _super11 = _createSuper2(at);
        function at() {
            var _this20;
            _classCallCheck2(this, at);
            _this20 = _super11.call(this), _this20.curScaleInterval = .01, _this20.scaleInterval = .01, 
            _this20.woodImageArray = new Array(32), _this20.woodImgaeIndex = 0, at.mInstance = _assertThisInitialized2(_this20);
            return _this20;
        }
        _createClass2(at, [ {
            key: "onAwake",
            value: function onAwake() {
                Laya.stage.on(e.REFRESH_WOOD_UI, this, this.onRefresh), this.initUI(), this.onRefresh();
            }
        }, {
            key: "initUI",
            value: function initUI() {
                this.rootView = this.owner, this.rootView.pivot(.5 * this.rootView.width, .5 * this.rootView.height), 
                this.parentView = this.rootView.parent;
                this.rootView.centerX = -Laya.stage.width+120;
            }
        }, {
            key: "onRefresh",
            value: function onRefresh() {
                Ee.Instance.WoodAmountReachedMax ? (this.badgeImage.visible = !0, this.titleImage.centerX = 20, 
                this.ProgressBg.visible = !1) : (this.badgeImage.visible = !1, this.titleImage.centerX = 0, 
                this.ProgressBg.visible = !0, this.onUpdateProgress(Ee.Instance.WoodProgress));
            }
        }, {
            key: "onUpdateProgress",
            value: function onUpdateProgress(e) {
                e < 0 && (e = 0), this.ProgressPanel.height = this.ProgressBar.height * e;
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                Ee.Instance.WoodAmountReachedMax && (this.bgImage.scaleX < .8 ? (this.curScaleInterval = this.scaleInterval, 
                this.bgImage.scaleX = .8, this.bgImage.scaleY = .8) : this.bgImage.scaleX > 1.1 && (this.curScaleInterval = -this.scaleInterval, 
                this.bgImage.scaleX = 1.1, this.bgImage.scaleY = 1.1), this.bgImage.scaleX += this.curScaleInterval, 
                this.bgImage.scaleY += this.curScaleInterval);
            }
        }, {
            key: "woodFly",
            value: function woodFly(e) {
                this.woodImgaeIndex >= this.woodImageArray.length && (this.woodImgaeIndex = 0);
                var t = this.woodImageArray[this.woodImgaeIndex], a = !1;
                t || ((t = new Laya.Image("PastureUI/Main/wood.png")).size(81, 71), this.woodImageArray[this.woodImgaeIndex] = t, 
                a = !0), this.woodImgaeIndex++;
                var i = new Laya.Vector4();
                pe.Instance.mainCamera.viewport.project(e, pe.Instance.mainCamera.projectionViewMatrix, i);
                var n = i.x / Laya.stage.clientScaleX - .5 * t.width, o = i.y / Laya.stage.clientScaleY - .5 * t.height;
                t.x = n, t.y = o, a ? Laya.stage.addChild(t) : t.visible = !0;
                var s = this.getItemImagePosition(), r = this, l = Math.round(1.2 * Laya.Vector2.scalarLength(new Laya.Vector2(s.x - n, s.y - o)));
                Laya.Tween.to(t, {
                    x: s.x,
                    y: s.y
                }, l, Laya.Ease.linearIn, new Laya.Handler(t, function() {
                    Ee.Instance.woodAddOne(), t.visible = !1, r.onRefresh();
                }));
            }
        }, {
            key: "getItemImagePosition",
            value: function getItemImagePosition() {
                if (!this.itemPosition) {
                    var _e113 = Laya.stage.width - this.parentView.right - this.rootView.width, _t126 = Laya.stage.height - this.parentView.bottom - .5 * this.parentView.height + this.rootView.centerY - .5 * this.rootView.height;
                    this.itemPosition = new Laya.Vector2(_e113, _t126);
                }
                return this.itemPosition;
            }
        }, {
            key: "onClick",
            value: function onClick() {
                oe.Instance.playButtonClickSound(), fe.viewScaleAnimation(this.rootView), Ee.Instance.WoodAmountReachedMax ? this.doTask() : c.Instance.show(w.getLanguage("wood_button_tips1"));
            }
        }, {
            key: "doTask",
            value: function doTask() {
                Ee.Instance.pauseRecordTime();
                var e = new We();
                e.caller = this, e.callback = this.doTaksCallback, ze.Instance.doTaskWithHandler(e, 0);
            }
        }, {
            key: "doTaksCallback",
            value: function doTaksCallback() {
                Ee.Instance.resumeRecordTime();
                var e = Ee.Instance.WoodAmount * Ee.Instance.WoodPrice;
                e = Math.round(e), Ee.Instance.coverGoldCoins(Ee.Instance.getGoldCoins() + e), Ee.Instance.coverWoodAmount(0);
                var t = r.number2DataUnitString(e), a = w.getLanguage("wood_sell_out_dialog_title"), i = w.getLanguage("wood_sell_out_dialog_message");
                i = r.formatString(i, t);
                var n = w.getLanguage("wood_sell_out_dialog_button_text");
                je.Instance.show(a, i, n, null, this, null, null, !1, !0), this.onRefresh();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return at.mInstance;
            }
        } ]);
        return at;
    }(Laya.Script);
    var it = /* */ function(_Laya$Script3D6) {
        _inherits2(it, _Laya$Script3D6);
        var _super12 = _createSuper2(it);
        function it() {
            _classCallCheck2(this, it);
            return _super12.apply(this, arguments);
        }
        return it;
    }(Laya.Script3D);
    var nt = /* */ function(_it) {
        _inherits2(nt, _it);
        var _super13 = _createSuper2(nt);
        function nt() {
            var _this21;
            _classCallCheck2(this, nt);
            _this21 = _super13.apply(this, arguments), _this21.needCreateAnimation = !0, _this21.penModelArray = new Array(4), 
            _this21.mEnableChildCheck = !1, _this21.mEnableChildCheckFromNeighbor = !1, _this21.neighborPastureArray = new Array(4), 
            _this21.neighborAnimalPool = null, _this21.isShow = !0, _this21.frameCount = 0, 
            _this21.checkFrequency = 20;
            return _this21;
        }
        _createClass2(nt, [ {
            key: "EnableChildChek",
            get: function get() {
                return this.mEnableChildCheck || this.mEnableChildCheckFromNeighbor;
            }
        }, {
            key: "EnableChildCheckFromNeighbor",
            set: function set(e) {
                this.mEnableChildCheckFromNeighbor = e;
            }
        }, {
            key: "onAwake",
            value: function onAwake() {
                this.initNeighborAnimalPool();
            }
        }, {
            key: "onStart",
            value: function onStart() {
                this.initPastureBlock();
            }
        }, {
            key: "initPastureBlock",
            value: function initPastureBlock() {
                1 == this.pastureBlockInfo.tC ? this.mapOutPasture(!0) : this.mapOutTrees();
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                this.EnableChildChek && Yt.Instance.AllBodyActionMode == X.RotateAttack && (this.frameCount++, 
                this.frameCount >= this.checkFrequency && (this.checkTree(), this.frameCount = 0));
            }
        }, {
            key: "checkTree",
            value: function checkTree() {
                if (Yt.Instance.AllBodyActionMode == X.RotateAttack) if (this.treeDataArray && this.treeDataArray.length > 0) {
                    var _e114 = !0;
                    for (var _t127 = 0; _t127 < this.treeDataArray.length; _t127++) {
                        var _a103 = this.treeDataArray[_t127];
                        _a103 && _a103.PTree && _a103.PTree.active && (Yt.Instance.hitDetection(_a103.PTree.transform.position) && _a103.State++, 
                        _e114 = !1);
                    }
                    _e114 && Laya.timer.once(200, this, this.clearTree);
                } else 5 !== Yt.Instance.WeaponRawIndex && this.onAttackAnimal();
            }
        }, {
            key: "mapOutTrees",
            value: function mapOutTrees() {
                if (this.rootModel) {
                    this.treeDataArray = new Array();
                    for (var _e115 = 0; _e115 < 4; _e115++) {
                        for (var _t128 = 0; _t128 < 4; _t128++) {
                            var _a104 = .25 * (_t128 - 1.5), _i54 = .25 * (_e115 - 1.5), _n25 = new Laya.Vector3(_a104, 0, _i54), _o22 = nt.PTree;
                            if (_o22) {
                                var _e116 = Laya.MeshSprite3D.instantiate(_o22, this.rootModel, !1);
                                _e116.transform.localPosition = _n25, _e116.active = !0;
                                var _t129 = new ot(_e116);
                                _t129.PTree = _e116, this.treeDataArray.push(_t129);
                            }
                        }
                    }
                }
            }
        }, {
            key: "mapOutPasture",
            value: function mapOutPasture() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                this.mapOutPen(e), e && !this.needCreateAnimation ? Laya.timer.frameOnce(30, this, this.mapOutAnimals) : Laya.timer.frameOnce(80, this, this.mapOutAnimals);
            }
        }, {
            key: "initNeighborAnimalPool",
            value: function initNeighborAnimalPool() {
                this.neighborAnimalPool = tt.createNeighborAnimaPool(this);
            }
        }, {
            key: "mapOutAnimals",
            value: function mapOutAnimals() {
                if (1 == this.pastureBlockInfo.State || 2 == this.pastureBlockInfo.State) {
                    var _e117 = 1 == this.pastureBlockInfo.State, _t130 = this.pastureBlockConfig.animalConfig.apb, _a105 = Math.ceil(Math.sqrt(_t130)), _i55 = .7, _n26 = _i55 / _a105, _o23 = this.rootModel.transform.position.x - .5 * _i55 + .5 * _n26, _s18 = this.rootModel.transform.position.z + .5 * _i55 - .5 * _n26, _l10 = 0;
                    for (var _i56 = 0; _i56 < _a105; _i56++) {
                        for (var _c4 = 0; _c4 < _a105; _c4++) {
                            if (_l10 >= _t130) return;
                            var _a106 = r.randomNum(0, 360), _h3 = new Laya.Vector3(_o23 + _n26 * _c4, 0, _s18 - _n26 * _i56);
                            this.createAnimal(_h3, _a106, !1, _e117), _l10++;
                        }
                    }
                }
            }
        }, {
            key: "replenishSmallAnimals",
            value: function replenishSmallAnimals() {
                if (0 == this.pastureBlockInfo.State) {
                    var _e118 = !0, _t131 = this.pastureBlockConfig.animalConfig.apb, _a107 = Math.ceil(Math.sqrt(_t131)), _i57 = .7, _n27 = _i57 / _a107, _o24 = this.rootModel.transform.position.x - .5 * _i57 + .5 * _n27, _s19 = this.rootModel.transform.position.z + .5 * _i57 - .5 * _n27, _l11 = 0;
                    for (var _i58 = 0; _i58 < _a107; _i58++) {
                        for (var _c5 = 0; _c5 < _a107; _c5++) {
                            if (_l11 >= _t131 || this.neighborAnimalPool.animalIsReachedMax()) return;
                            var _a108 = r.randomNum(0, 360), _h4 = new Laya.Vector3(_o24 + _n27 * _c5, 0, _s19 - _n27 * _i58);
                            this.createAnimal(_h4, _a108, !1, _e118), _l11++;
                        }
                    }
                }
            }
        }, {
            key: "createAnimal",
            value: function createAnimal(e, t, a, i) {
                var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
                var o = this.pastureBlockConfig.animalConfig.animalModel;
                if (o) {
                    var _s20 = t, _l12 = Laya.MeshSprite3D.instantiate(o, this.rootModel, !1, e), _c6 = 120, _h5 = r.randomFloatNum(0, _c6);
                    _s20 += _h5 -= .5 * _c6;
                    var _d2 = new Ze();
                    _d2.initAnimal(this, _l12, _s20, i), _l12.addComponentIntance(_d2);
                    var _m2 = new Laya.Vector3(0, 0, 0);
                    _d2.model.transform.getForward(_m2), Laya.Vector3.normalize(_m2, _m2);
                    var _g = new Laya.Vector2(_m2.x, _m2.z);
                    if (_l12.transform.position = e, _l12.active = !0, this.neighborAnimalPool.addAnimal(_d2), 
                    a) {
                        var _t132 = this.getAnimalFallPosition(e, _g);
                        _d2.fly(e, _t132, n);
                    } else _d2.fallToTheGround(a);
                }
            }
        }, {
            key: "onAttackAnimal",
            value: function onAttackAnimal() {
                this.neighborAnimalPool.checkAttack(this);
            }
        }, {
            key: "onNPCAttackAnimal",
            value: function onNPCAttackAnimal(e) {
                this.neighborAnimalPool.checkAttack(this, e);
            }
        }, {
            key: "onThrowAnimalFeed",
            value: function onThrowAnimalFeed(e, t) {
                var a = Ee.Instance.isStrongMode, i = a ? 20 : 10;
                for (var _n28 = 0; _n28 < i; _n28++) {
                    $e.Instance.throwAnimalFeed(e, t, a);
                }
                this.checkFeed();
            }
        }, {
            key: "onNPCThrowAnimalFeed",
            value: function onNPCThrowAnimalFeed(e, t, a) {
                for (var _i59 = 0; _i59 < 10; _i59++) {
                    $e.Instance.throwAnimalFeedFromNpc(e, t, a);
                }
                this.checkFeed(e);
            }
        }, {
            key: "checkFeed",
            value: function checkFeed() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                this.neighborAnimalPool.checkFeed(e);
            }
        }, {
            key: "onThrowAnimal",
            value: function onThrowAnimal(e, t) {
                var a = this.pastureBlockConfig.animalConfig.ta;
                for (var _i60 = 0; _i60 < a; _i60++) {
                    if (this.neighborAnimalPool.animalIsReachedMax()) {
                        this.neighborAnimalPool.completedReleaseAnimal(), Yt.Instance.beCommonActionInThePasture(this, null);
                        break;
                    }
                    this.createAnimal(e, t, !0, !0, !0);
                }
            }
        }, {
            key: "onNPCThrowAnimal",
            value: function onNPCThrowAnimal(e, t, a) {
                var i = this.pastureBlockConfig.animalConfig.ta;
                for (var _n29 = 0; _n29 < i; _n29++) {
                    if (this.neighborAnimalPool.animalIsReachedMax()) {
                        this.neighborAnimalPool.completedReleaseAnimal(), e.switchActionInThePasture(this, null);
                        break;
                    }
                    this.createAnimal(t, a, !0, !0);
                }
            }
        }, {
            key: "getAnimalFallPosition",
            value: function getAnimalFallPosition(e, t) {
                var a = r.randomFloatNum(Yt.releaseAnimalDistance, Yt.releaseAnimalMaxDistance), i = new Laya.Vector3(e.x, 0, e.z), n = new Laya.Vector3(t.x, 0, t.y);
                Laya.Vector3.scale(n, a, n);
                var o = new Laya.Vector3(0, 0, 0);
                Laya.Vector3.subtract(i, n, o);
                var s = this.rootModel.transform.position.x - .45, l = this.rootModel.transform.position.x + .45, c = this.rootModel.transform.position.z - .45, h = this.rootModel.transform.position.z + .45;
                if (o.x < s) {
                    var _e119 = this.neighborPastureArray[3];
                    _e119 && _e119.pastureBlockInfo.treeClear || (o.x = s), o.z > h ? o.z = h : o.z < c && (o.z = c);
                } else if (o.x > l) {
                    var _e120 = this.neighborPastureArray[1];
                    _e120 && _e120.pastureBlockInfo.treeClear || (o.x = l), o.z > h ? o.z = h : o.z < c && (o.z = c);
                } else if (o.z > h) {
                    var _e121 = this.neighborPastureArray[2];
                    _e121 && _e121.pastureBlockInfo.treeClear || (o.z = h);
                } else if (o.z < c) {
                    var _e122 = this.neighborPastureArray[0];
                    _e122 && _e122.pastureBlockInfo.treeClear || (o.z = c);
                }
                return o;
            }
        }, {
            key: "mapOutPen",
            value: function mapOutPen(e) {
                var _this22 = this;
                var t = this.pastureBlockConfig.animalConfig, a = Jt.Instance.PenModelConfig.getItem(t.guardrail), i = new Laya.Vector3(0, 0, 0);
                Laya.Vector3.subtract(this.rootModel.transform.position, Yt.Instance.gameObject.transform.position, i);
                var n = Laya.Vector3.scalarLength(i), o = !e && n <= .8;
                if (this.pastureBlockConfig.isSingle && a.singleModel) {
                    var _e123 = a.singleModel, _t133 = Laya.MeshSprite3D.instantiate(_e123, this.rootModel, !1);
                    _t133.transform.localPosition = new Laya.Vector3(0, 0, 0), _t133.active = !0;
                } else {
                    var _e124 = a.landModel, _t134 = Laya.MeshSprite3D.instantiate(_e124, this.rootModel, !1);
                    _t134.transform.localPosition = new Laya.Vector3(0, .002, 0), _t134.active = !0;
                    var _i61 = this.pastureBlockConfig.d;
                    var _loop2 = function _loop2(_e125) {
                        var t = _e125 == _i61 ? a.doorModel : a.fenceModel, n = Laya.MeshSprite3D.instantiate(t, _this22.rootModel, !1), s = a.pillarsModel, r = Laya.MeshSprite3D.instantiate(s, _this22.rootModel, !1), l = o ? 2 : 0, c = new Laya.Vector3(0, l, 0), h = 0, d = new Laya.Vector3(0, l, 0);
                        switch (_e125) {
                          case 0:
                            c.z = -.5, d.x = .5, d.z = -.5;
                            break;

                          case 1:
                            h = 90, c.x = .5, d.x = .5, d.z = .5;
                            break;

                          case 2:
                            c.z = .5, d.x = -.5, d.z = .5;
                            break;

                          case 3:
                            h = 90, c.x = -.5, d.x = -.5, d.z = -.5;
                        }
                        n.transform.localPosition = c, n.transform.localRotationEulerY = h, n.active = !0, 
                        r.transform.localPosition = d, r.active = !0, _this22.penModelArray[_e125] = n;
                        var m = _this22;
                        if (o) {
                            var _e126 = 180;
                            Laya.Tween.to(r.transform, {
                                localPositionY: 0
                            }, _e126, Laya.Ease.linearIn, new Laya.Handler(_this22, function() {
                                Laya.Tween.to(r.transform, {
                                    localScaleY: .5
                                }, 45, Laya.Ease.linearIn, new Laya.Handler(m, function() {
                                    Laya.Tween.to(r.transform, {
                                        localScaleY: 1.5
                                    }, 90, Laya.Ease.linearIn, new Laya.Handler(m, function() {
                                        Laya.Tween.to(r.transform, {
                                            localScaleY: 1
                                        }, 45, Laya.Ease.linearIn);
                                    }));
                                }));
                            }));
                        }
                    };
                    for (var _e125 = 0; _e125 < 4; _e125++) {
                        _loop2(_e125);
                    }
                }
                this.refreshNeighborPastureArray(), this.refreshPen(a), o && this.penAnimation();
            }
        }, {
            key: "penAnimation",
            value: function penAnimation() {
                var _this23 = this;
                var e = 100, t = this;
                var _loop3 = function _loop3(_a109) {
                    var i = _this23.penModelArray[_a109];
                    if (i && i.active) {
                        var _a110 = function _a110() {
                            i && i.transform && Laya.Tween.to(i.transform, {
                                localPositionY: 0
                            }, 180, Laya.Ease.linearIn, new Laya.Handler(t, function() {
                                if (!i || !i.transform) return;
                                Laya.Tween.to(i.transform, {
                                    localScaleY: .5
                                }, 45, Laya.Ease.linearIn, new Laya.Handler(t, function() {
                                    i && i.transform && Laya.Tween.to(i.transform, {
                                        localScaleY: 1.5
                                    }, 90, Laya.Ease.linearIn, new Laya.Handler(t, function() {
                                        i && i.transform && Laya.Tween.to(i.transform, {
                                            localScaleY: 1
                                        }, 45, Laya.Ease.linearIn);
                                    }));
                                }));
                            }));
                        };
                        Laya.timer.once(e, _this23, _a110), e += 180;
                    }
                };
                for (var _a109 = 0; _a109 < 4; _a109++) {
                    _loop3(_a109);
                }
            }
        }, {
            key: "refreshPen",
            value: function refreshPen(e) {
                for (var _t135 = 0; _t135 < 4; _t135++) {
                    var _a111 = this.neighborPastureArray[_t135], _i62 = (_t135 + 2) % 4;
                    if (_a111 && _a111.penModelArray[_i62] && _a111.penModelArray[_i62].active) {
                        if (_a111.penModelArray[_i62].active = !1, _a111.penModelArray[_i62].destroy(), 
                        _a111.penModelArray[_i62] = null, this.penModelArray[_t135] && this.penModelArray[_t135].active) {
                            this.penModelArray[_t135].active = !1, this.penModelArray[_t135].destroy(), this.penModelArray[_t135] = null;
                            var _a112 = e.landModel, _i63 = Laya.MeshSprite3D.instantiate(_a112, this.rootModel, !1);
                            _i63.active = !0;
                            var _n30 = new Laya.Vector3(0, .002, 0);
                            switch (_t135) {
                              case 0:
                                _n30.z = -.5;
                                break;

                              case 1:
                                _n30.x = .5;
                                break;

                              case 2:
                                _n30.z = .5;
                                break;

                              case 3:
                                _n30.x = -.5;
                            }
                            _i63.transform.localPosition = _n30;
                        }
                        _a111.linkNeighborAnimalPool(this);
                    }
                }
            }
        }, {
            key: "linkNeighborAnimalPool",
            value: function linkNeighborAnimalPool(e) {
                e.neighborAnimalPool != this.neighborAnimalPool && this.neighborAnimalPool.link(e.neighborAnimalPool);
            }
        }, {
            key: "refreshNeighborPastureArray",
            value: function refreshNeighborPastureArray() {
                var e = this.blockConfig.x, t = this.blockConfig.z, a = e + "_" + (t + 1), i = me.Instance.getPControllerByKey(a);
                this.neighborPastureArray[2] = i, a = e + "_" + (t - 1);
                var n = me.Instance.getPControllerByKey(a);
                this.neighborPastureArray[0] = n, a = e + 1 + "_" + t;
                var o = me.Instance.getPControllerByKey(a);
                this.neighborPastureArray[1] = o, a = e - 1 + "_" + t;
                var s = me.Instance.getPControllerByKey(a);
                this.neighborPastureArray[3] = s;
            }
        }, {
            key: "clearTree",
            value: function clearTree() {
                if (1 != this.pastureBlockInfo.tC) {
                    if (this.pastureBlockInfo.clearTrear(), ce.Instance.unlockPastureRefreshWarehouse(this.blockConfig.sceneId, this.pastureBlockConfig.animalConfig.id), 
                    this.treeDataArray) {
                        for (var _e127 = 0; _e127 < this.treeDataArray.length; _e127++) {
                            var _t136 = this.treeDataArray[_e127];
                            _t136 && _t136.PTree && _t136.PTree.destroy(), this.treeDataArray[_e127] = null;
                        }
                        this.treeDataArray = null;
                    }
                    He.Instance.GC(), this.mapOutPasture(), Yt.Instance.beCommonActionInThePasture(this, null), 
                    et.Instance.awakeShow(this, null);
                }
            }
        }, {
            key: "awakeEnableNeighborPastureCheck",
            value: function awakeEnableNeighborPastureCheck() {
                for (var _e128 = 0; _e128 < 4; _e128++) {
                    var _t137 = this.neighborPastureArray[_e128];
                    _t137 && (_t137.EnableChildCheckFromNeighbor = !0);
                }
            }
        }, {
            key: "cancelEnableNeighborPastureCheck",
            value: function cancelEnableNeighborPastureCheck() {
                for (var _e129 = 0; _e129 < 4; _e129++) {
                    var _t138 = this.neighborPastureArray[_e129];
                    _t138 && (_t138.EnableChildCheckFromNeighbor = !1);
                }
            }
        }, {
            key: "onCharacterEnterBlock",
            value: function onCharacterEnterBlock() {
                this.mEnableChildCheck = !0, this.refreshNeighborPastureArray(), this.awakeEnableNeighborPastureCheck();
            }
        }, {
            key: "onCharacterExitBlock",
            value: function onCharacterExitBlock() {
                this.mEnableChildCheck = !1, this.cancelEnableNeighborPastureCheck();
            }
        } ]);
        return nt;
    }(it);
    var ot = /* */ function() {
        function ot(e) {
            _classCallCheck2(this, ot);
            this.mState = -1, this.PTree = e;
            var t = e.getChildByName("model");
            this.model = t, this.childArray = new Array(4);
            for (var _e130 = 1; _e130 < 5; _e130++) {
                this.childArray[_e130 - 1] = t.getChildByName("m" + _e130);
            }
            this.top = this.childArray[3];
        }
        _createClass2(ot, [ {
            key: "State",
            get: function get() {
                return this.mState;
            },
            set: function set(e) {
                e > 3 ? e = 3 : e < 0 && (e = 0);
                var t = new Laya.Vector3(this.PTree.transform.position.x, this.PTree.transform.position.y, this.PTree.transform.position.z);
                this.mState < e && this.getWood(t), this.mState = e;
                var a = this.childArray[e];
                a && (a.active = !1), this.clear();
                var i = this;
                this.model.transform.localScale = new Laya.Vector3(1, 1, 1);
                Laya.Tween.to(i.model.transform, {
                    localScaleX: 1.3,
                    localScaleY: 1.3,
                    localScaleZ: 1.3
                }, 20, Laya.Ease.linearIn, new Laya.Handler(i, function() {
                    i.model && Laya.Tween.to(i.model.transform, {
                        localScaleX: 1,
                        localScaleY: 1,
                        localScaleZ: 1
                    }, 20, Laya.Ease.linearIn, new Laya.Handler(i, function() {
                        if (!i.model) return;
                        var e = ot.heightArray[this.mState];
                        Laya.Tween.to(this.model.transform, {
                            localPositionY: e
                        }, 50, Laya.Ease.linearIn, new Laya.Handler(i, function() {
                            if (!i.model) return;
                            Laya.Tween.to(i.model.transform, {
                                localScaleY: .9
                            }, 15, Laya.Ease.linearIn, new Laya.Handler(i, function() {
                                i.model && Laya.Tween.to(i.model.transform, {
                                    localScaleY: 1.1
                                }, 30, Laya.Ease.linearIn, new Laya.Handler(i, function() {
                                    i.model && Laya.Tween.to(i.model.transform, {
                                        localScaleY: 1
                                    }, 15, Laya.Ease.linearIn);
                                }));
                            }));
                        }));
                    }));
                })), B.Instance.playBrokenWoodEffect(t), oe.Instance.playOnHit(), e >= 3 && (this.PTree.active = !1);
            }
        }, {
            key: "getWood",
            value: function getWood(e) {
                e.y += .05, at.Instance.woodFly(e);
            }
        }, {
            key: "clear",
            value: function clear() {
                Laya.Tween.clearAll(this.PTree.transform), Laya.Tween.clearAll(this.top.transform), 
                Laya.Tween.clearAll(this.model.transform);
            }
        } ]);
        return ot;
    }();
    ot.heightArray = [ -.074, -.152, -.245, -.376 ], ot.topTargetHeightArray = [ .39, .39, .41, .45 ];
    var st = /* */ function(_Laya$Script7) {
        _inherits2(st, _Laya$Script7);
        var _super14 = _createSuper2(st);
        function st() {
            var _this24;
            _classCallCheck2(this, st);
            _this24 = _super14.call(this), st.mInstance = _assertThisInitialized2(_this24);
            return _this24;
        }
        _createClass2(st, [ {
            key: "onAwake",
            value: function onAwake() {
                this.multipleLables = [], this.rootView = this.owner, this.rootView.visible = !1, 
                this.multipleBtn = this.rootView.getChildByName("Multiple"), this.thksBtn = this.rootView.getChildByName("Thks"), 
                this.tipOneTimes = this.rootView.getChildByName("TipOneTimes"), this.tipPrice = this.rootView.getChildByName("TipPrice");
                var e = this.multipleBtn.getChildByName("Multiple");
                this.multipleLables.push(e), e = this.thksBtn.getChildByName("Thks"), this.multipleLables.push(e), 
                e = this.rootView.getChildByName("TipMultiple"), this.multipleLables.push(e), this.multipleBtn.on(Laya.Event.CLICK, this, this.onMultipleClick), 
                this.thksBtn.on(Laya.Event.CLICK, this, this.onThksClick);
                this.thksBtn.visible =true;
				// this.thksBtn.visible =false;//czh
				
				// Laya.timer.once(4000, this, function() {
				// 	this.thksBtn.visible =true
				// });//czh
            }
        }, {
            key: "show",
            value: function show(e, t, a) {
                console.log("shop_multiple");
                this.multipleLables.forEach(function(t) {
                    t.text = e.toString();
                }), this.tipPrice.text = "+" + r.number2DataUnitString(t), this.tipOneTimes.visible = e > 2, 
                this.rootView.visible = !0, this.callback = a;
                He.Instance.popInsertAd();
            }
        }, {
            key: "onMultipleClick",
            value: function onMultipleClick(e) {
                this.rootView.visible = !1, this.callback && "function" == typeof this.callback && (this.callback(!0), 
                this.callback = null);
            }
        }, {
            key: "onThksClick",
            value: function onThksClick(e) {
                this.rootView.visible = !1, this.callback && "function" == typeof this.callback && (this.callback(!1), 
                this.callback = null);
            }
        }, {
            key: "hide",
            value: function hide() {
                this.rootView.visible = !1;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return st.mInstance;
            }
        } ]);
        return st;
    }(Laya.Script);
    var rt = /* */ function(_Laya$Script8) {
        _inherits2(rt, _Laya$Script8);
        var _super15 = _createSuper2(rt);
        function rt() {
            var _this25;
            _classCallCheck2(this, rt);
            _this25 = _super15.call(this), rt.mInstance = _assertThisInitialized2(_this25);
            return _this25;
        }
        _createClass2(rt, [ {
            key: "onAwake",
            value: function onAwake() {
                this.rootView = this.owner, this.rootView.visible = !1, this.BiglWarehouseBg = this.rootView.getChildByName("BiglWarehouseBg"), 
                this.bigWarehouseTitleLabel = this.BiglWarehouseBg.getChildByName("titleLabel");
            }
        }, {
            key: "onRefresh",
            value: function onRefresh() {
                if (this.rootView && this.whController) {
                    var _e131 = ce.Instance.allWarehouseTotalProgress();
                    _e131 = Math.round(1e3 * _e131) / 10, this.bigWarehouseTitleLabel.text = _e131 + "% storage";
                }
            }
        }, {
            key: "show",
            value: function show(e) {
                ce.Instance.settleAllOffLineWarehouse(), this.onRefreshPosition(), this.whController = e, 
                this.onRefresh(), this.rootView.visible = !0;
            }
        }, {
            key: "onRefreshPosition",
            value: function onRefreshPosition() {
                if (this.whController && this.whController.gameObject) {
                    var _e132 = r.positionToUIPoint(this.whController.gameObject.transform.position, pe.Instance.mainCamera);
                    this.rootView.x = _e132.x, this.rootView.y = _e132.y - 250;
                }
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                this.rootView.visible && this.onRefreshPosition();
            }
        }, {
            key: "hide",
            value: function hide() {
                this.rootView.visible = !1;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return rt.mInstance;
            }
        } ]);
        return rt;
    }(Laya.Script);
    var lt = /* */ function(_it2) {
        _inherits2(lt, _it2);
        var _super16 = _createSuper2(lt);
        function lt() {
            var _this26;
            _classCallCheck2(this, lt);
            _this26 = _super16.call(this), _this26.needCreateAnimation = !1, lt.mInstance = _assertThisInitialized2(_this26);
            return _this26;
        }
        _createClass2(lt, [ {
            key: "onAwake",
            value: function onAwake() {
                this.mapOut();
            }
        }, {
            key: "mapOut",
            value: function mapOut() {
                var e = this.switchSceneConfig.ModelConfig.model, t = Laya.MeshSprite3D.instantiate(e, this.rootModel);
                this.gameObject = t, this.gameObject.active = !0, this.gameObject.transform.localPosition = new Laya.Vector3(0, 0, 0), 
                this.gameObject.transform.localScale = new Laya.Vector3(1, 1, 1);
                var a = t.getChildByName("env").getChildByName("cj2"), i = a.getChildByName("cj2_hailong");
                this.seaDinosaurAnimator = i.getComponent(Laya.Animator);
                var n = a.getChildByName("cj2_feiji");
                this.fire = n.getChildByName("huoyan"), this.fire.active = !1, this.luoxuanjiangAnimator = n.getChildByName("luoxuanjiang").getComponent(Laya.Animator), 
                this.aircraft = n;
            }
        }, {
            key: "onCharacterEnterBlock",
            value: function onCharacterEnterBlock() {
                ct.Instance.show(5);
            }
        }, {
            key: "onCharacterExitBlock",
            value: function onCharacterExitBlock() {
                ct.Instance.hide();
            }
        }, {
            key: "forwardToIsland",
            value: function forwardToIsland() {
                this.luoxuanjiangAnimator.speed = 0, this.fire.active = !1, Laya.timer.once(600, this, this.seaDinosaurAnimation);
            }
        }, {
            key: "readySwitchScene",
            value: function readySwitchScene() {
                this.luoxuanjiangAnimator.speed = 1, this.fire.active = !0, Yt.Instance.hideModel(), 
                this.fly1();
            }
        }, {
            key: "fly1",
            value: function fly1() {
                console.log("当前飞机的度数" + this.aircraft.transform.localRotationEulerY);
                var e = new Laya.Vector3(this.aircraft.transform.localPositionX, this.aircraft.transform.localPositionY, this.aircraft.transform.localPositionZ), t = new Laya.Vector3(1.609, .33, .077), a = new Laya.Vector3(1.02, .25, .611), i = [];
                i.push(e), i.push(a), i.push(t);
                var n = re.CreateBezierPoints(i, 61), o = 0, s = 135 / n.length, r = this, l = function l() {
                    if (o > n.length - 1) Laya.timer.clearAll(r), r.aircraft.transform.localPosition = t, 
                    r.aircraft.transform.localRotationEulerY = 195, r.fly2(t), o = 0; else if (r.aircraft) {
                        var _e133 = new Laya.Vector3(n[o].x, n[o].y, n[o].z);
                        r.aircraft.transform.localPosition = _e133, r.aircraft.transform.localRotationEulerY = 60 + s * o, 
                        Laya.timer.frameOnce(1, this, l);
                    }
                    o++;
                };
                l();
            }
        }, {
            key: "fly2",
            value: function fly2(e) {
                Laya.timer.once(1e3, jt.Instance, jt.Instance.showSwitchLongLoading);
                var t = new Laya.Vector3(0, e.y, -6.6);
                Laya.Tween.to(this.aircraft.transform, {
                    localPositionX: t.x,
                    localPositionY: t.y,
                    localPositionZ: t.z
                }, 2e3, Laya.Ease.linearNone, new Laya.Handler(this, this.flyEnd));
            }
        }, {
            key: "flyEnd",
            value: function flyEnd() {
                Zt.Instance.switchScene(2, !1), Yt.Instance.showModel();
            }
        }, {
            key: "seaDinosaurAnimation",
            value: function seaDinosaurAnimation() {
                this.seaDinosaurAnimator.speed = .25, this.seaDinosaurAnimator.play("rise", 0, 0);
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                this.gameObject = null;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return this.mInstance;
            }
        } ]);
        return lt;
    }(it);
    var ct = /* */ function(_Laya$Script9) {
        _inherits2(ct, _Laya$Script9);
        var _super17 = _createSuper2(ct);
        function ct() {
            var _this27;
            _classCallCheck2(this, ct);
            _this27 = _super17.call(this), _this27.opLeftItemImageArray = [ "", "zjm_19_17", "zjm_19_16", "", "", "zjm_19_18" ], 
            _this27.opLeftTitleImageArray = [ "", "zjm_16_08", "zjm_16_07", "zjm_16_11", "zjm_16_12", "zjm_16_13" ], 
            _this27.opRightTitleImageArray = [ "", "", "", "zjm_16_09", "zjm_16_10", "zjm_16_13" ], 
            _this27.type = 0, ct.mInstance = _assertThisInitialized2(_this27);
            return _this27;
        }
        _createClass2(ct, [ {
            key: "onAwake",
            value: function onAwake() {
                this.rootView = this.owner, this.rootView.visible = !1, this.leftButtonBg.pivot(.5 * this.leftButtonBg.width, .5 * this.leftButtonBg.height), 
                this.leftButtonBg.on(Laya.Event.CLICK, this, this.onLeftClickImage), this.rightButtonBg.pivot(.5 * this.leftButtonBg.width, .5 * this.leftButtonBg.height), 
                this.rightButtonBg.on(Laya.Event.CLICK, this, this.onClickRightImage);
            }
        }, {
            key: "onRefresh",
            value: function onRefresh() {
                if (this.rootView) switch (this.taskImage.visible = !0, this.leftItemTitleImage.centerX = 20, 
                this.type) {
                  case 1:
                  case 2:
                    this.leftButtonBg.centerX = 0, this.leftButtonBg.visible = !0, this.rightButtonBg.visible = !1, 
                    this.leftItemImage.skin = "PastureUI/Main2/" + this.opLeftItemImageArray[this.type] + ".png", 
                    this.leftItemTitleImage.skin = "PastureUI/Main2/" + this.opLeftTitleImageArray[this.type] + ".png";
                    break;

                  case 3:
                    if (this.FTController) {
                        var _e134 = this.FTController.fruitTreeBlockInfo.getCurrentFruitAmount(this.FTController.fruitTreeMapConfig);
                        _e134 >= this.FTController.fruitTreeMapConfig.fruitConfig.mxa ? (this.leftButtonBg.visible = !1, 
                        this.rightButtonBg.visible = !0, this.rightButtonBg.centerX = 0) : _e134 >= this.FTController.fruitTreeMapConfig.fruitConfig.mia ? (this.leftButtonBg.visible = !0, 
                        this.rightButtonBg.visible = !0, this.leftButtonBg.centerX = -110, this.rightButtonBg.centerX = 110) : (this.leftButtonBg.visible = !0, 
                        this.rightButtonBg.visible = !1, this.leftButtonBg.centerX = 0), this.leftItemImage.skin = "PastureUI/Main2/fruit_rapid_growth_" + this.FTController.fruitTreeMapConfig.fruitConfig.id + ".png", 
                        this.rightItemImage.skin = "PastureUI/Main2/collect_fruit_" + this.FTController.fruitTreeMapConfig.fruitConfig.id + ".png";
                    }
                    this.leftItemTitleImage.skin = "PastureUI/Main2/" + this.opLeftTitleImageArray[this.type] + ".png", 
                    this.rightItemImageTitle.skin = "PastureUI/Main2/" + this.opRightTitleImageArray[this.type] + ".png";
                    break;

                  case 4:
                    if (this.BeehiveController) {
                        this.BeehiveController.beehiveBlockInfo.getCurrentHoneyAmount(this.BeehiveController.beehiveMapConfig) >= this.BeehiveController.beehiveMapConfig.honeyConfig.mxa ? (this.leftButtonBg.visible = !1, 
                        this.rightButtonBg.visible = !0, this.rightButtonBg.centerX = 0) : (this.leftButtonBg.visible = !0, 
                        this.rightButtonBg.visible = !1, this.leftButtonBg.centerX = 0), this.leftItemImage.skin = "PastureUI/Main2/honey_rapid_growth_" + this.BeehiveController.beehiveMapConfig.honeyConfig.id + ".png", 
                        this.rightItemImage.skin = "PastureUI/Main2/collect_honey_" + this.BeehiveController.beehiveMapConfig.honeyConfig.id + ".png";
                    }
                    this.leftItemTitleImage.skin = "PastureUI/Main2/" + this.opLeftTitleImageArray[this.type] + ".png", 
                    this.rightItemImageTitle.skin = "PastureUI/Main2/" + this.opRightTitleImageArray[this.type] + ".png";
                    break;

                  case 5:
                    this.taskImage.visible = !1, this.leftItemTitleImage.centerX = 0, this.leftButtonBg.centerX = 0, 
                    this.leftButtonBg.visible = !0, this.rightButtonBg.visible = !1, this.leftItemImage.skin = "PastureUI/Main2/" + this.opLeftItemImageArray[this.type] + ".png", 
                    this.leftItemTitleImage.skin = "PastureUI/Main2/" + this.opRightTitleImageArray[this.type] + ".png";
                }
            }
        }, {
            key: "show",
            value: function show(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                this.type = e, this.FTController = t, this.BeehiveController = a, this.onRefresh(), 
                this.rootView.visible = !0, He.Instance.showBannerAd(), He.Instance.hideCustomGridAd();
            }
        }, {
            key: "hide",
            value: function hide() {
                He.Instance.hideBannerAd(), He.Instance.showCustomGridAd(), this.rootView.visible = !1, 
                this.FTController = null, this.BeehiveController = null;
            }
        }, {
            key: "onLeftClickImage",
            value: function onLeftClickImage() {
                if (oe.Instance.playButtonClickSound(), fe.imageScaleAnimation(this.leftButtonBg), 
                5 == this.type) {
                    Zt.Instance.nextSceneIndex;
                    this.hide(), lt.Instance.readySwitchScene();
                } else this.doTask();
            }
        }, {
            key: "onClickRightImage",
            value: function onClickRightImage() {
                oe.Instance.playButtonClickSound(), fe.imageScaleAnimation(this.rightButtonBg), 
                3 == this.type ? this.FTController && Yt.Instance.pickFtuit(this.FTController) : 4 == this.type && this.BeehiveController && Yt.Instance.collectHoney(this.BeehiveController), 
                this.hide();
            }
        }, {
            key: "doTask",
            value: function doTask() {
                Ee.Instance.pauseRecordTime();
                var e = new We();
                e.caller = this, e.callback = this.doTaksCallback, ze.Instance.doTaskWithHandler(e, 0);
            }
        }, {
            key: "doTaksCallback",
            value: function doTaksCallback() {
                if (Ee.Instance.resumeRecordTime(), 1 == this.type) {
                    var _e135 = Ee.Instance.sellOutAllProduct(), _t139 = w.getLanguage("animal_sell_out_dialog_title"), _a113 = w.getLanguage("animal_sell_out_dialog_message");
                    _a113 = r.formatString(_a113, r.number2DataUnitString(_e135));
                    var _i64 = w.getLanguage("animal_sell_out_dialog_button_text");
                    je.Instance.show(_t139, _a113, _i64, null, this, null, null, !1, !0);
                } else if (2 == this.type) {
                    ce.Instance.collectAllWarehouseAnimal();
                    var _e136 = w.getLanguage("get_all_warehouse_animals_dialog_title"), _t140 = w.getLanguage("get_all_warehouse_animals_dialog_message"), _a114 = w.getLanguage("get_all_warehouse_animals_dialog_button_text");
                    je.Instance.show(_e136, _t140, _a114, null, this, null, null, !1, !0), rt.Instance.onRefresh();
                } else 3 == this.type ? (this.FTController && this.FTController.rapidGrowth(), this.onRefresh()) : 4 == this.type && (this.BeehiveController && this.BeehiveController.rapidGrowth(), 
                this.onRefresh());
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return ct.mInstance;
            }
        } ]);
        return ct;
    }(Laya.Script);
    var ht = /* */ function(_it3) {
        _inherits2(ht, _it3);
        var _super18 = _createSuper2(ht);
        function ht() {
            var _this28;
            _classCallCheck2(this, ht);
            _this28 = _super18.apply(this, arguments), _this28.needCreateAnimation = !1, _this28.mEnableChildCheck = !1, 
            _this28.frameCount = 0, _this28.checkFrequency = 4, _this28.isSellOut = !1, _this28.multipleSell = 0, 
            _this28.mSellIndex = 0, _this28.productId = 0, _this28.pType = 0, _this28.price = 0, 
            _this28.productData = null, _this28.showingMultiple = !1;
            return _this28;
        }
        _createClass2(ht, [ {
            key: "onAwake",
            value: function onAwake() {
                this.mapOutShop();
            }
        }, {
            key: "mapOutShop",
            value: function mapOutShop() {
                var e;
                e = this.shopConfig.isPurchaseAllAnimal ? Jt.Instance.ShopModelConfig.getItem("30001").model : Jt.Instance.ShopModelConfig.getItem("30002").model;
                var t = Laya.MeshSprite3D.instantiate(e, this.rootModel);
                this.gameObject = t, this.gameObject.active = !0, this.Ring = this.gameObject.getChildByName("Ring"), 
                this.gameObject.transform.localPosition = new Laya.Vector3(0, 0, 0), this.gameObject.transform.localRotationEuler = new Laya.Vector3(0, this.shopConfig.rotationY, 0), 
                this.gameObject.transform.localScale = new Laya.Vector3(1, 1, 1), this.ShopNPC = this.gameObject.getChildByName("ShopNPC"), 
                this.animator = this.ShopNPC.getComponent(Laya.Animator), this.animator.getControllerLayer(1).defaultWeight = 0, 
                this.playIdle();
            }
        }, {
            key: "playIdle",
            value: function playIdle() {
                var e = "xiuxiandaiji";
                e = "daiji", this.animator.getControllerLayer(0).getAnimatorState(e).clip.islooping, 
                this.animator.play(e, 0, 0);
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                this.mEnableChildCheck && 1 == this.shopConfig.type && (this.frameCount++, this.frameCount >= this.checkFrequency && (this.frameCount = 0, 
                this.inRing ? (this.multipleSell <= 0 && this.showMultipleSellView(), this.sell()) : this.multipleSell <= 0 && this.hideMultipleSellView()));
            }
        }, {
            key: "inRing",
            get: function get() {
                var e = Yt.Instance.gameObject.transform.position, t = new Laya.Vector2(this.Ring.transform.position.x - e.x, this.Ring.transform.position.z - e.z);
                return Laya.Vector2.scalarLength(t) <= .3;
            }
        }, {
            key: "SellIndex",
            get: function get() {
                return this.mSellIndex;
            },
            set: function set(e) {
                e < 0 ? e = 0 : e > 2 && (e = 2), this.mSellIndex = e, this.refreshBySellId();
            }
        }, {
            key: "sellAll",
            value: function sellAll(e) {
                var t = 0;
                if (1 == this.shopConfig.type) {
                    for (var _a115 = 0; _a115 < 3; _a115++) {
                        var _i65 = this.shopConfig.productIdArray[_a115], _n31 = k.ProductType(_i65), _o25 = Ee.Instance.AllProductDataDic[_i65], _s21 = 0;
                        if (_o25 && _o25.Amount > 0) {
                            switch (_n31) {
                              case 0:
                                _s21 = me.Instance.getAnimalCurrentPriceByAnimalId(_i65);
                                break;

                              case 1:
                                _s21 = ve.Instance.getFruitCurrentPriceByFruitId(_i65);
                                break;

                              case 2:
                                _s21 = ke.Instance.getHoneyCurrentPriceByHoneyId(_i65);
                                break;

                              case 3:
                                _s21 = Be.Instance.getProductCurrentPriceByProductId(_i65);
                            }
                            t += _o25.sell(_o25.Amount, e * _s21), Ce.Instance.onRefresh(_i65), _o25.save(), 
                            Ce.Instance.adjustPositionAndScale();
                        }
                    }
                    Ee.Instance.coverGoldCoins(Ee.Instance.getGoldCoins() + t);
                }
                return t;
            }
        }, {
            key: "sell",
            value: function sell() {
                if (!(this.isSellOut || this.multipleSell <= 0) && this.productData) if (this.productData.Amount <= 0) this.SellIndex >= 2 ? this.isSellOut = !0 : this.SellIndex++; else {
                    var _e137 = this.getSellAmount(this.productData.Amount), _t141 = this.productData.sell(_e137, this.multipleSell * this.price);
                    Ce.Instance.onRefresh(this.productId), Ce.Instance.productFlyToNPC(this.ShopNPC, this.productId, _t141), 
                    this.productData.Amount <= 0 && (this.productData.save(), Ce.Instance.adjustPositionAndScale()), 
                    30002 != this.shopConfig.id || Ue.Instance.AllGuideIsCompleted || Laya.timer.once(1e3, this, this.logicGuide);
                }
            }
        }, {
            key: "isCanSell",
            value: function isCanSell() {
                var e = 0;
                for (var _t142 = 0; _t142 < 3; _t142++) {
                    var _a116 = this.shopConfig.productIdArray[_t142], _i66 = Ee.Instance.AllProductDataDic[_a116];
                    _i66 && (e += _i66.Amount);
                }
                return e > 0;
            }
        }, {
            key: "getAllMultiSellMoney",
            value: function getAllMultiSellMoney(e) {
                var t = 0;
                if (1 == this.shopConfig.type) {
                    for (var _a117 = 0; _a117 < 3; _a117++) {
                        var _i67 = this.shopConfig.productIdArray[_a117], _n32 = k.ProductType(_i67), _o26 = Ee.Instance.AllProductDataDic[_i67], _s22 = 0;
                        if (_o26 && _o26.Amount > 0) {
                            switch (_n32) {
                              case 0:
                                _s22 = me.Instance.getAnimalCurrentPriceByAnimalId(_i67);
                                break;

                              case 1:
                                _s22 = ve.Instance.getFruitCurrentPriceByFruitId(_i67);
                                break;

                              case 2:
                                _s22 = ke.Instance.getHoneyCurrentPriceByHoneyId(_i67);
                                break;

                              case 3:
                                _s22 = Be.Instance.getProductCurrentPriceByProductId(_i67);
                            }
                            t += _s22 * _o26.Amount * e;
                        }
                    }
                    return t;
                }
            }
        }, {
            key: "logicGuide",
            value: function logicGuide() {
                if (Ue.Instance.completedGuide(3), Ue.Instance.guideStepIsCompleted(5) && (Ue.Instance.completedGuide(6), 
                ce.Instance.warehouseHadUnlocked() && !Ue.Instance.isCompletedUnlockWarehouseNPC())) {
                    var _e138 = Jt.Instance.WNPCConfig.getItem("3001").uGC;
                    Ee.Instance.getGoldCoins() < _e138 && Ue.Instance.resetS2AndS3();
                }
            }
        }, {
            key: "getSellAmount",
            value: function getSellAmount(e) {
                var t = e, a = t.toString().length, i = Math.pow(10, a), n = Math.floor(.013 * i);
                return n < 3 && (n = 3), n > t && (n = t), n;
            }
        }, {
            key: "refreshBySellId",
            value: function refreshBySellId() {
                if (1 == this.shopConfig.type) {
                    var _e139 = this.shopConfig.productIdArray[this.SellIndex], _t143 = k.ProductType(_e139);
                    switch (this.productId = _e139, this.pType = _t143, this.productData = Ee.Instance.AllProductDataDic[_e139], 
                    _t143) {
                      case 0:
                        {
                            var _t144 = _e139;
                            this.price = me.Instance.getAnimalCurrentPriceByAnimalId(_t144), (!this.productData || this.productData.Amount <= 0) && (this.SellIndex >= 2 ? this.isSellOut = !0 : this.SellIndex++);
                        }
                        break;

                      case 1:
                        var _a118 = _e139;
                        this.price = ve.Instance.getFruitCurrentPriceByFruitId(_a118);
                        break;

                      case 2:
                        var _i68 = _e139;
                        this.price = ke.Instance.getHoneyCurrentPriceByHoneyId(_i68);
                        break;

                      case 3:
                        {
                            var _t145 = _e139;
                            this.price = Be.Instance.getProductCurrentPriceByProductId(_t145), (!this.productData || this.productData.Amount <= 0) && (this.SellIndex >= 2 ? this.isSellOut = !0 : this.SellIndex++);
                        }
                    }
                }
            }
        }, {
            key: "hideMultipleSellView",
            value: function hideMultipleSellView() {
                this.showingMultiple = !1, st.Instance.hide();
            }
        }, {
            key: "showMultipleSellView",
            value: function showMultipleSellView() {
                var _this29 = this;
                if (this.showingMultiple) return;
                if (!this.isCanSell()) return;
                this.showingMultiple = !0;
                var e = this, t = 0, a = 0;
                var i = window.ystorage.getItem(o.SELL_RECORD);
                var n;
                i && (n = JSON.parse(i)), n ? (t = n.sellDay, a = n.sellTimes, t && r.isToday(t) || (t = r.getNowTimestamp(), 
                a = 0), null != a && null != a || (a = 0)) : (t = r.getNowTimestamp(), a = 0), a >= 3 ? r.randomProbabilityOk(30) ? st.Instance.show(2, this.getAllMultiSellMoney(2), function(i) {
                    i ? (Ee.Instance.pauseRecordTime(), _this29.doTask(function() {
                        Ee.Instance.resumeRecordTime();
                        var i = _this29.sellAll(2);
                        e.multipleSell = 0, a++;
                        var n = JSON.stringify({
                            sellDay: t,
                            sellTimes: a
                        });
                        window.ystorage.setItem(o.SELL_RECORD, n);
                        var s = w.getLanguage("animal_sell_out_dialog_title"), l = w.getLanguage("animal_sell_out_dialog_message");
                        l = r.formatString(l, r.number2DataUnitString(i));
                        var c = w.getLanguage("animal_sell_out_dialog_button_text");
                        je.Instance.show(s, l, c, null, _this29, null, null, !1, !0);
                    })) : e.multipleSell = 1;
                }) : e.multipleSell = 1 : st.Instance.show(5 - a, this.getAllMultiSellMoney(5 - a), function(i) {
                    i ? (Ee.Instance.pauseRecordTime(), _this29.doTask(function() {
                        Ee.Instance.resumeRecordTime();
                        var i = _this29.sellAll(5 - a);
                        e.multipleSell = 0, a++;
                        var n = JSON.stringify({
                            sellDay: t,
                            sellTimes: a
                        });
                        window.ystorage.setItem(o.SELL_RECORD, n);
                        var s = w.getLanguage("animal_sell_out_dialog_title"), l = w.getLanguage("animal_sell_out_dialog_message");
                        l = r.formatString(l, r.number2DataUnitString(i));
                        var c = w.getLanguage("animal_sell_out_dialog_button_text");
                        je.Instance.show(s, l, c, null, _this29, null, null, !1, !0);
                    })) : e.multipleSell = 1;
                });
            }
        }, {
            key: "doTask",
            value: function doTask(e) {
                var t = new We();
                t.caller = this, t.callback = e, ze.Instance.doTaskWithHandler(t, 0);
            }
        }, {
            key: "onCharacterEnterBlock",
            value: function onCharacterEnterBlock() {
                this.isSellOut = !1, this.showingMultiple = !1, this.multipleSell = 0, this.SellIndex = 0, 
                this.mEnableChildCheck = !0, 0 == this.shopConfig.type && ct.Instance.show(1), xe.Instance.show(this), 
                "0_2" == this.blockConfig.Key && Ue.Instance.completedGuide(18);
            }
        }, {
            key: "onCharacterExitBlock",
            value: function onCharacterExitBlock() {
                this.multipleSell = 0, this.mEnableChildCheck = !1, this.showingMultiple = !1, this.hideMultipleSellView(), 
                0 == this.shopConfig.type && ct.Instance.hide(), xe.Instance.hide();
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                this.gameObject = null;
            }
        } ]);
        return ht;
    }(it);
    var dt = /* */ function(_Laya$Script10) {
        _inherits2(dt, _Laya$Script10);
        var _super19 = _createSuper2(dt);
        function dt() {
            var _this30;
            _classCallCheck2(this, dt);
            _this30 = _super19.call(this), dt.mInstance = _assertThisInitialized2(_this30);
            return _this30;
        }
        _createClass2(dt, [ {
            key: "onAwake",
            value: function onAwake() {
                this.rootView = this.owner, this.rootView.visible = !1, this.SmallWarehouseBg = this.rootView.getChildByName("SmallWarehouseBg"), 
                this.partItemArray = new Array(3);
                for (var _e140 = 0; _e140 < 3; _e140++) {
                    var _t146 = new mt();
                    this.partItemArray[_e140] = _t146;
                    var _a119 = this.SmallWarehouseBg.getChildByName("item" + _e140);
                    _t146.itemImage = _a119.getChildByName("itemBg").getChildByName("itemImgae"), _t146.titleLabel = _a119.getChildByName("titleLabel"), 
                    _t146.progressBg = _a119.getChildByName("progressBg"), _t146.progressPanel = _t146.progressBg.getChildByName("progressPanel"), 
                    _t146.progressBar = _t146.progressPanel.getChildByName("bar");
                }
            }
        }, {
            key: "onRefresh",
            value: function onRefresh() {
                if (this.rootView && this.whController) {
                    var _e141 = this.whController.warehouseBlockInfo.npcDataDic, _t147 = this.whController.CurrentCapacity, _a120 = 0;
                    for (var _i69 in _e141) {
                        var _n33 = this.whController.warehouseMapConfig.NPCConfigArrayDIC[_i69], _o27 = _e141[_i69];
                        this.partItemArray[_a120].refresh(_o27, _t147, _n33), _a120++;
                    }
                }
            }
        }, {
            key: "show",
            value: function show(e) {
                this.rootView.visible || (this.onRefreshPosition(), this.whController = e, this.onRefresh(), 
                this.rootView.visible = !0);
            }
        }, {
            key: "onRefreshPosition",
            value: function onRefreshPosition() {
                if (this.whController && this.whController.gameObject) {
                    var _e142 = r.positionToUIPoint(this.whController.gameObject.transform.position, pe.Instance.mainCamera);
                    this.rootView.x = _e142.x, this.rootView.y = _e142.y - 250;
                }
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                this.rootView.visible && this.onRefreshPosition();
            }
        }, {
            key: "hide",
            value: function hide() {
                this.rootView.visible && (this.rootView.visible = !1);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return dt.mInstance;
            }
        } ]);
        return dt;
    }(Laya.Script);
    var mt = /* */ function() {
        function mt() {
            _classCallCheck2(this, mt);
        }
        _createClass2(mt, [ {
            key: "refresh",
            value: function refresh(e, t, a) {
                if (e) {
                    e.isUnlocked ? (this.progressBg.visible = !0, e.a > t && (e.a = t, e.save()), this.titleLabel.text = e.a + "/" + t, 
                    this.onUpdateProgress(e.a / t)) : (this.progressBg.visible = !1, this.titleLabel.text = w.getLanguage("warehouse_view_none_npc"));
                    var _i70 = a.aId;
                    switch (a.type) {
                      case 1:
                        this.itemImage.skin = "PastureUI/Main/crops_" + _i70 + ".png";
                        break;

                      default:
                        this.itemImage.skin = "PastureUI/Main/animal_" + _i70 + ".png";
                    }
                }
            }
        }, {
            key: "onUpdateProgress",
            value: function onUpdateProgress(e) {
                e < 0 ? e = 0 : e > 1 && (e = 1), this.progressPanel.width = this.progressBar.width * e;
            }
        } ]);
        return mt;
    }();
    var gt = /* */ function() {
        function gt() {
            _classCallCheck2(this, gt);
            this.visible = !1;
        }
        _createClass2(gt, [ {
            key: "show",
            value: function show() {
                this.visible && this.close(), this.visible = !0, this.dialog = new Laya.Dialog(), 
                this.dialog.size(478, 220), this.dialog.show(!1), this.dialog.mouseThrough = !0;
                Laya.timer.once(l.dialogDelayRenderMilliseconds, this, function() {
                    var e = new Laya.Image("PastureUI/Dialog/tk_25.png");
                    e.size(478, 220), e.centerX = 0, e.centerY = 0, this.dialog.addChild(e);
                }), Laya.timer.once(l.tipsDialogShowMilliseconds, this, this.close);
            }
        }, {
            key: "close",
            value: function close() {
                Laya.timer.clearAll(this), this.dialog && this.dialog.close(), this.visible = !1;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return gt.instance;
            }
        } ]);
        return gt;
    }();
    gt.instance = new gt();
    var ut = /* */ function() {
        function ut() {
            _classCallCheck2(this, ut);
            this.visible = !1;
        }
        _createClass2(ut, [ {
            key: "show",
            value: function show(e) {
                console.log("dialog_2");
                this.visible && this.close(), He.Instance.showBannerAd(), He.Instance.hideCustomGridAd(), 
                this.visible = !0, this.whController = e;
                this.dialog = new Laya.Dialog(), this.dialog.size(Laya.stage.width, Laya.stage.height);
                var t = new Laya.Image();
                t.size(Laya.stage.width, Laya.stage.height), t.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), 
                t.alpha = .5, t.centerX = 0, t.centerY = 0, this.dialog.addChild(t);
                var a = this;
                this.dialog.show(), Laya.timer.once(l.dialogDelayRenderMilliseconds, this, function() {
                    var t = new Laya.Image("PastureUI/Dialog/tk_01.png");
                    t.size(605, 936), t.sizeGrid = "170,0,110,0,0", t.centerX = 0, t.centerY = -100, 
                    this.dialog.addChild(t);
                    var i = new Laya.Image("PastureUI/Dialog/tk_15.png");
                    i.top = 44, i.centerX = 0, t.addChild(i);
                    var n = new Laya.Image("PastureUI/Dialog/tk_02.png");
                    n.size(542, 665), n.sizeGrid = "88,0,59,0,0", n.top = 115, n.centerX = 0, t.addChild(n), 
                    a.itemViewArray = new Array(4);
                    var o = e.warehouseBlockInfo.npcDataDic, s = 0, r = 0;
                    for (var _t148 in o) {
                        var _i71 = o[_t148];
                        r = 41 + 157 * s;
                        var _l13 = ut.Instance.createNPCUnitView(n, r, e, _i71, s);
                        _l13.npcdata.isUnlocked, a.itemViewArray[s] = _l13, s++;
                    }
                    r = 41 + 157 * s;
                    var l = ut.Instance.createWarehouseUnitView(n, r, e);
                    if (a.itemViewArray[s] = l, a.refreshUI(), !Ue.Instance.AllGuideIsCompleted && !Ue.Instance.isCompletedUnlockWarehouseNPC()) {
                        var _e143 = new Laya.Image();
                        _e143.size(1, 1), _e143.centerX = 0, _e143.bottom = 30;
                        var _t149 = new Laya.Animation();
                        _t149.source = "anis/FingerClick.ani", _t149.autoPlay = !0, _e143.addChild(_t149), 
                        a.itemViewArray[0].upgradeBtnBg.addChild(_e143), a.guideImage = _e143;
                    }
                    var c = new Laya.Image("PastureUI/Dialog/tk_09.png");
                    c.size(297, 117), c.sizeGrid = "0,60,0,60,0", c.centerX = 0, c.bottom = 20, c.on(Laya.Event.CLICK, ut.Instance, ut.Instance.closeBtnOnClick);
                    var h = new Laya.Label();
                    h.text = w.getLanguage("warehouse_upgrade_dialog_close_button_text"), h.bold = !0, 
                    h.fontSize = 50, h.color = "#ffffff", h.align = "center", h.valign = "middle", h.top = 28, 
                    h.centerX = 0, c.addChild(h), a.confirmButtonBg = c, t.addChild(c);
                });
                He.Instance.popInsertAd();
            }
        }, {
            key: "close",
            value: function close() {
                this.visible = !1, this.guideImage = null, He.Instance.hideBannerAd(), He.Instance.showCustomGridAd(), 
                this.dialog && this.dialog.close(), dt.Instance.onRefresh();
            }
        }, {
            key: "refreshUI",
            value: function refreshUI() {
                if (this.itemViewArray) {
                    var _e144 = !0;
                    for (var _t150 = 0; _t150 < 4; _t150++) {
                        var _a121 = this.itemViewArray[_t150];
                        if (_a121) if (1 == _a121.type) {
                            if (_a121.npcdata.isUnlocked) {
                                if (_a121.gradeLabel.visible = !0, _a121.speedLabel.visible = !0, _e144 = !1, _a121.gradeLabel.visible = !0, 
                                _a121.npcdata.isReachedMaxGrade(_a121.npcConfig)) _a121.upgradeBtnBg.visible = !1, 
                                _a121.maxGradeTipsLabel.visible = !0, _a121.growUpTipsImage.visible = !1, _a121.growUpTipsLabel.visible = !1; else {
                                    _a121.upgradeBtnBg.visible = !0, _a121.maxGradeTipsLabel.visible = !1, _a121.growUpTipsImage.visible = !0, 
                                    _a121.growUpTipsLabel.visible = !0;
                                    var _e145 = _a121.npcdata.getUpgradeGold(_a121.npcConfig);
                                    Ee.Instance.getGoldCoins() >= _e145 ? (_a121.goldCoinImage.visible = !0, _a121.videoImage.visible = !1, 
                                    _a121.upgradeBtnBg.gray = !1) : _a121.npcdata.getCanVUpgradeCount() > 0 ? (_a121.goldCoinImage.visible = !1, 
                                    _a121.videoImage.visible = !0) : (_a121.goldCoinImage.visible = !0, _a121.videoImage.visible = !1, 
                                    _a121.upgradeBtnBg.gray = !0), _a121.upgradeBtnTitle.text = w.getLanguage("warehouse_upgrade_dialog_item_button_text1"), 
                                    _a121.upgradeBtnGoldLabel.text = r.number2DataUnitString(_e145);
                                }
                                _a121.itemBg.gray = !1, _a121.gradeLabel.text = "Lv:" + _a121.npcdata.g;
                                var _t151 = _a121.npcdata.getSpeed(_a121.npcConfig);
                                _a121.speedLabel.text = "Speed:" + Math.round(100 * _t151) + "%";
                            } else {
                                if (this.whController.npcCanUnlock(_a121.npcConfig)) {
                                    _a121.gradeLabel.visible = !1, _a121.speedLabel.visible = !1, _a121.upgradeBtnBg.visible = !0, 
                                    _a121.goldCoinImage.visible = !0, _a121.videoImage.visible = !1, _a121.maxGradeTipsLabel.visible = !1, 
                                    _a121.growUpTipsImage.visible = !1, _a121.growUpTipsLabel.visible = !1, _a121.itemBg.gray = !1, 
                                    _a121.upgradeBtnTitle.text = w.getLanguage("warehouse_upgrade_dialog_item_button_text0");
                                    var _e146 = _a121.npcConfig.uGC;
                                    _a121.upgradeBtnGoldLabel.text = r.number2DataUnitString(_e146), _a121.upgradeBtnBg.gray = Ee.Instance.getGoldCoins() < _e146;
                                } else _a121.gradeLabel.visible = !0, _a121.speedLabel.visible = !1, _a121.upgradeBtnBg.visible = !1, 
                                _a121.maxGradeTipsLabel.visible = !1, _a121.growUpTipsImage.visible = !1, _a121.growUpTipsLabel.visible = !1, 
                                _a121.itemBg.gray = !0, _a121.gradeLabel.text = w.getLanguage("warehouse_upgrade_dialog_item_locked");
                            }
                        } else if (_a121.itemBg.visible = !_e144, _a121.gradeLabel.text = "Lv:" + this.whController.warehouseBlockInfo.g, 
                        _a121.speedLabel.text = "Capacity:" + this.whController.warehouseBlockInfo.CurrentCapacity, 
                        this.whController.warehouseBlockInfo.reachedMaxGrade(this.whController.warehouseMapConfig.WarehouseConfig)) _a121.upgradeBtnBg.visible = !1, 
                        _a121.maxGradeTipsLabel.visible = !0, _a121.growUpTipsLabel.visible = !1, _a121.growUpTipsImage.visible = !1; else {
                            _a121.upgradeBtnBg.visible = !0, _a121.maxGradeTipsLabel.visible = !1, _a121.growUpTipsLabel.visible = !0, 
                            _a121.growUpTipsImage.visible = !0, _a121.growUpTipsLabel.text = this.whController.warehouseMapConfig.WarehouseConfig.gUC.toString();
                            var _e147 = this.whController.warehouseBlockInfo.getCurrentUpgradeGold(this.whController.warehouseMapConfig.WarehouseConfig);
                            _a121.upgradeBtnGoldLabel.text = r.number2DataUnitString(_e147), Ee.Instance.getGoldCoins() >= _e147 ? (_a121.goldCoinImage.visible = !0, 
                            _a121.videoImage.visible = !1, _a121.upgradeBtnBg.gray = !1) : this.whController.warehouseBlockInfo.getCanVUpgradeCount() > 0 ? (_a121.goldCoinImage.visible = !1, 
                            _a121.videoImage.visible = !0) : (_a121.goldCoinImage.visible = !0, _a121.videoImage.visible = !1, 
                            _a121.upgradeBtnBg.gray = !0);
                        }
                    }
                }
            }
        }, {
            key: "closeBtnOnClick",
            value: function closeBtnOnClick(e) {
                oe.Instance.playButtonClickSound(), this.close();
            }
        }, {
            key: "upgradeBtnOnClick",
            value: function upgradeBtnOnClick(e) {
                var _this31 = this;
                if (oe.Instance.playButtonClickSound(), fe.imageScaleAnimation(e.upgradeBtnBg), 
                1 == e.type) {
                    if (e.npcdata.isUnlocked) {
                        if (!e.npcdata.isReachedMaxGrade(e.npcConfig)) {
                            var _t152 = e.npcdata.getUpgradeGold(e.npcConfig);
                            Ee.Instance.getGoldCoins() >= _t152 ? (e.npcdata.upgrade(e.npcConfig), Ee.Instance.coverGoldCoins(Ee.Instance.getGoldCoins() - _t152), 
                            gt.Instance.show(), this.refreshUI()) : e.npcdata.getCanVUpgradeCount() > 0 ? (Ee.Instance.pauseRecordTime(), 
                            this.doTask(function() {
                                Ee.Instance.resumeRecordTime(), e.npcdata.upgrade(e.npcConfig, !0), gt.Instance.show(), 
                                _this31.refreshUI();
                            })) : c.Instance.show(w.getLanguage("gold_coin_is_not_enough_tips"));
                        }
                    } else Ee.Instance.getGoldCoins() >= e.npcConfig.uGC ? (this.whController.createNpc(e.npcdata), 
                    e.npcdata.unlock(e.npcConfig), Ee.Instance.coverGoldCoins(Ee.Instance.getGoldCoins() - e.npcConfig.uGC), 
                    this.refreshUI(), this.guideImage && (this.guideImage.visible = !1)) : (this.guideImage && (this.guideImage.bottom = 50, 
                    this.confirmButtonBg.addChild(this.guideImage), Ue.Instance.resetS2AndS3()), c.Instance.show(w.getLanguage("gold_coin_is_not_enough_tips")));
                } else if (!this.whController.warehouseBlockInfo.reachedMaxGrade(this.whController.warehouseMapConfig.WarehouseConfig)) {
                    var _e148 = this.whController.warehouseBlockInfo.getCurrentUpgradeGold(this.whController.warehouseMapConfig.WarehouseConfig);
                    Ee.Instance.getGoldCoins() >= _e148 ? (this.whController.updateNPCSellteTimeStampWhenWarehouseIsFull(), 
                    this.whController.warehouseBlockInfo.upgrade(this.whController.warehouseMapConfig.WarehouseConfig), 
                    this.whController.onRefreshStore(), Ee.Instance.coverGoldCoins(Ee.Instance.getGoldCoins() - _e148), 
                    this.refreshUI(), gt.Instance.show()) : this.whController.warehouseBlockInfo.getCanVUpgradeCount() > 0 ? (Ee.Instance.pauseRecordTime(), 
                    this.doTask(function() {
                        Ee.Instance.resumeRecordTime(), _this31.whController.warehouseBlockInfo.upgrade(_this31.whController.warehouseMapConfig.WarehouseConfig, !0), 
                        _this31.whController.onRefreshStore(), gt.Instance.show(), _this31.refreshUI();
                    })) : c.Instance.show(w.getLanguage("gold_coin_is_not_enough_tips"));
                }
            }
        }, {
            key: "createWarehouseUnitView",
            value: function createWarehouseUnitView(e, t, a) {
                var i = new Laya.Image("PastureUI/Dialog/tk_16.png");
                i.sizeGrid = "0,25,0,132,0", i.size(518, 151), i.top = t, i.centerX = -5, e.addChild(i);
                var n = new Laya.Image("PastureUI/Dialog/tk_17.png");
                n.centerY = 0, n.left = 13, i.addChild(n);
                var o = new Laya.Image("PastureUI/Dialog/tk_22.png");
                o.bottom = 5, o.left = 10, n.addChild(o);
                var s = new Laya.Label();
                s.text = w.getLanguage("warehouse_upgrade_dialog_warehouse_name"), s.bold = !0, 
                s.fontSize = 26, s.color = "#7faab9", s.align = "left", s.valign = "middle", s.top = 5, 
                s.left = 122, n.addChild(s);
                var r = new Laya.Label();
                r.text = "Lv:100", r.bold = !0, r.fontSize = 24, r.color = "#c57133", r.align = "left", 
                r.valign = "middle", r.top = 57, r.left = 148, i.addChild(r);
                var l = new Laya.Label();
                l.text = "Capacity:99999", l.bold = !0, l.fontSize = 20, l.color = "#c57133", l.align = "left", 
                l.valign = "middle", l.top = 93, l.left = 148, i.addChild(l);
                var c = new Laya.Image("PastureUI/Dialog/tk_23.png");
                c.bottom = 35, c.left = 292, i.addChild(c);
                var h = new Laya.Label();
                h.text = a.warehouseMapConfig.WarehouseConfig.gUC.toString(), h.bold = !0, h.fontSize = 28, 
                h.color = "#59d12a", h.align = "left", h.valign = "bottom", h.left = c.left + 16, 
                h.bottom = 31, i.addChild(h);
                var d = new Laya.Label();
                d.text = w.getLanguage("warehouse_upgrade_dialog_npc_max_grade"), d.bold = !0, d.fontSize = 30, 
                d.color = "#a3a3a3", d.align = "right", d.valign = "middle", d.top = 55, d.right = 10, 
                i.addChild(d);
                var m = new Laya.Image("PastureUI/Dialog/tk_19.png");
                m.centerX = 180, m.centerY = -9, i.addChild(m);
                var g = new Laya.Label();
                g.text = "Upgrade", g.bold = !0, g.fontSize = 30, g.color = "#ffffff", g.align = "right", 
                g.valign = "middle", g.top = 17, g.centerX = 0, m.addChild(g);
                var u = new Laya.Image("PastureUI/Main/Icon_Coin.png");
                u.size(33, 34), u.left = 10, u.top = 51, m.addChild(u);
                var p = new Laya.Image("PastureUI/Main/zjm_11.png");
                p.size(33, 34), p.left = 10, p.top = 51, m.addChild(p);
                var y = new Laya.Label();
                y.width = 70, y.text = "999.0K", y.bold = !0, y.fontSize = 26, y.color = "#fbff85", 
                y.align = "center", y.valign = "middle", y.top = 55, y.left = 46, m.addChild(y);
                var f = new pt();
                return f.type = 0, f.itemBg = i, f.gradeLabel = r, f.speedLabel = l, f.goldCoinImage = u, 
                f.videoImage = p, f.growUpTipsImage = c, f.growUpTipsLabel = h, f.maxGradeTipsLabel = d, 
                f.upgradeBtnBg = m, f.upgradeBtnTitle = g, f.upgradeBtnGoldLabel = y, m.on(Laya.Event.CLICK, this, this.upgradeBtnOnClick, [ f ]), 
                f;
            }
        }, {
            key: "doTask",
            value: function doTask(e) {
                var t = new We();
                t.caller = this, t.callback = e, ze.Instance.doTaskWithHandler(t, 0);
            }
        }, {
            key: "createNPCUnitView",
            value: function createNPCUnitView(e, t, a, i, n) {
                var o = new Laya.Image("PastureUI/Dialog/tk_16.png");
                o.sizeGrid = "0,25,0,132,0", o.size(518, 151), o.top = t, o.centerX = -5, 0 == n && (o.zOrder = 1), 
                e.addChild(o);
                var s = new Laya.Image("PastureUI/Dialog/tk_17.png");
                s.centerY = 0, s.left = 13, o.addChild(s);
                var l = new Laya.Image("PastureUI/Dialog/tk_20.png");
                l.bottom = 0, l.left = 0, s.addChild(l);
                var c, h = a.warehouseMapConfig.NPCConfigArrayDIC[i.id], d = h.aId;
                c = 0 == h.type ? "PastureUI/Main/animal_" + d + ".png" : "PastureUI/Main/crops_" + d + ".png";
                var m = new Laya.Image(c);
                m.size(66 * .7, 66 * .7), m.top = -7, m.left = 122, s.addChild(m);
                var g = new Laya.Label();
                g.text = r.formatString(w.getLanguage("warehouse_upgrade_dialog_npc_name"), n + 1), 
                g.bold = !0, g.fontSize = 26, g.color = "#7faab9", g.align = "left", g.valign = "middle", 
                g.top = 5, g.left = m.left + 50, s.addChild(g);
                var u = new Laya.Label();
                u.text = "Lv:20", u.bold = !0, u.fontSize = 26, u.color = "#c57133", u.align = "left", 
                u.valign = "middle", u.top = 57, u.left = 148, o.addChild(u);
                var p = new Laya.Label();
                p.text = "Speed:200%", p.bold = !0, p.fontSize = 24, p.color = "#c57133", p.align = "left", 
                p.valign = "middle", p.top = 93, p.left = 148, o.addChild(p);
                var y = new Laya.Image("PastureUI/Dialog/tk_23.png");
                y.bottom = 35, y.left = 292, o.addChild(y);
                var f = new Laya.Label();
                f.text = Math.floor(100 * h.sGUC) + "%", f.bold = !0, f.fontSize = 28, f.color = "#59d12a", 
                f.align = "left", f.valign = "bottom", f.left = y.left + 16, f.bottom = 31, o.addChild(f);
                var I = new Laya.Label();
                I.text = w.getLanguage("warehouse_upgrade_dialog_npc_max_grade"), I.bold = !0, I.fontSize = 30, 
                I.color = "#a3a3a3", I.align = "right", I.valign = "middle", I.top = 55, I.right = 10, 
                o.addChild(I);
                var C = new Laya.Image("PastureUI/Dialog/tk_19.png");
                C.centerX = 180, C.centerY = -9, o.addChild(C);
                var A = new Laya.Label();
                A.text = "Upgrade", A.bold = !0, A.fontSize = 30, A.color = "#ffffff", A.align = "right", 
                A.valign = "middle", A.top = 17, A.centerX = 0, C.addChild(A);
                var L = new Laya.Image("PastureUI/Main/Icon_Coin.png");
                L.size(33, 34), L.left = 10, L.top = 51, C.addChild(L);
                var S = new Laya.Image("PastureUI/Main/zjm_11.png");
                S.size(33, 34), S.left = 10, S.top = 51, C.addChild(S);
                var k = new Laya.Label();
                k.width = 70, k.text = "999.0K", k.bold = !0, k.fontSize = 26, k.color = "#fbff85", 
                k.align = "center", k.valign = "middle", k.top = 55, k.left = 46, C.addChild(k);
                var b = new pt();
                return b.type = 1, b.npcdata = i, b.npcConfig = h, b.itemBg = o, b.gradeLabel = u, 
                b.speedLabel = p, b.goldCoinImage = L, b.videoImage = S, b.growUpTipsImage = y, 
                b.growUpTipsLabel = f, b.maxGradeTipsLabel = I, b.upgradeBtnBg = C, b.upgradeBtnTitle = A, 
                b.upgradeBtnGoldLabel = k, C.on(Laya.Event.CLICK, this, this.upgradeBtnOnClick, [ b ]), 
                b;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return ut.instance;
            }
        } ]);
        return ut;
    }();
    ut.instance = new ut();
    var pt = function pt() {
        _classCallCheck2(this, pt);
        this.type = 0;
    };
    var yt = /* */ function(_Laya$Script11) {
        _inherits2(yt, _Laya$Script11);
        var _super20 = _createSuper2(yt);
        function yt() {
            var _this32;
            _classCallCheck2(this, yt);
            _this32 = _super20.call(this), yt.mInstance = _assertThisInitialized2(_this32);
            return _this32;
        }
        _createClass2(yt, [ {
            key: "onAwake",
            value: function onAwake() {
                this.rootView = this.owner, this.rootView.visible = !1;
                var e = this.rootView.getChildByName("bg");
                e.on(Laya.Event.CLICK, this, this.onClickImage), this.bg = e;
            }
        }, {
            key: "show",
            value: function show(e) {
                this.npc = e, this.onRefreshPosition(), this.rootView.visible = !0;
            }
        }, {
            key: "onRefreshPosition",
            value: function onRefreshPosition() {
                if (this.npc && this.npc.gameObject) {
                    var _e149 = r.positionToUIPoint(this.npc.gameObject.transform.position, pe.Instance.mainCamera);
                    this.rootView.x = _e149.x, this.rootView.y = _e149.y - 130;
                }
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                this.rootView.visible && this.onRefreshPosition();
            }
        }, {
            key: "hide",
            value: function hide() {
                this.rootView.visible && (this.rootView.visible = !1);
            }
        }, {
            key: "onClickImage",
            value: function onClickImage() {
                oe.Instance.playButtonClickSound(), fe.imageScaleAnimation(this.bg), Ue.Instance.goToWarehouse();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return yt.mInstance;
            }
        } ]);
        return yt;
    }(Laya.Script);
    var ft = function ft() {
        _classCallCheck2(this, ft);
    };
    ft.leftNodeNameArray = [ "Bip001", "Bip001 Pelvis", "Bip001 Spine", "Bip001 Spine1", "Bip001 Neck", "Bip001 L Clavicle", "Bip001 L UpperArm", "Bip001 L Forearm", "Bip001 L Hand", "weapon02", "lw" ], 
    ft.rightNodeNameArray = [ "Bip001", "Bip001 Pelvis", "Bip001 Spine", "Bip001 Spine1", "Bip001 Neck", "Bip001 R Clavicle", "Bip001 R UpperArm", "Bip001 R Forearm", "Bip001 R Hand", "weapon01", "rw" ], 
    ft.boxNodeNameArray = [ "Bip001", "Bip001 Pelvis", "Bip001 Spine", "Bip001 Spine1", "box01", "Box" ];
    var It = /* */ function() {
        function It() {
            _classCallCheck2(this, It);
        }
        _createClass2(It, null, [ {
            key: "MoveTowards",
            value: function MoveTowards(e, t, a) {
                var i = t.x - e.x, n = t.y - e.y, o = t.z - e.z, s = i * i + n * n + o * o;
                if (0 == s || a >= 0 && s <= a * a) return t;
                var r = Math.sqrt(s);
                return new Laya.Vector3(e.x + i / r * a, e.y + n / r * a, e.z + o / r * a);
            }
        } ]);
        return It;
    }();
    var wt = /* */ function(_Laya$Script3D7) {
        _inherits2(wt, _Laya$Script3D7);
        var _super21 = _createSuper2(wt);
        function wt() {
            var _this33;
            _classCallCheck2(this, wt);
            _this33 = _super21.apply(this, arguments), _this33.walkSpeed = .15, _this33.runSpeed = .3, 
            _this33.mSpeed = _this33.runSpeed, _this33.cache0Way = null, _this33.cache1Way = null, 
            _this33.way0PointIndex = 0, _this33.way1PointIndex = 0, _this33.state = R.None, 
            _this33.dir = new Laya.Vector2(0, -1), _this33.mBaseActionMode = U.Idle, _this33.mUpBodyActionMode = F.None, 
            _this33.weaponNameArray = [ "l_w_0_1", "l_w_1_1", "l_w_2_1", "l_w_3_1", "r_w_1", "r_w_6" ], 
            _this33.tempPController = null, _this33.tempFarmController = null, _this33.showWeapon = !1, 
            _this33.throwAndAttackFrameCount = -1, _this33.warehouseIsFullFrameCount = 0, _this33.workTargetPosition = null, 
            _this33.gridType = 0, _this33.bridgeTop = new Laya.Vector3(0, 0, 0), _this33.mProductAmount = 0;
            return _this33;
        }
        _createClass2(wt, [ {
            key: "Speed",
            get: function get() {
                return this.mSpeed * this.npcData.cs;
            }
        }, {
            key: "workSpeed",
            get: function get() {
                return this.walkSpeed + this.walkSpeed * this.npcData.cs * .2;
            }
        }, {
            key: "BaseActionMode",
            get: function get() {
                return this.mBaseActionMode;
            },
            set: function set(e) {
                if (this.mBaseActionMode != e) switch (this.mBaseActionMode = e, e) {
                  case U.Idle:
                    this.playIdle();
                    break;

                  case U.Walk:
                    this.playWalk();
                    break;

                  case U.Run:
                    this.playRun();
                }
            }
        }, {
            key: "UpBodyActionMode",
            get: function get() {
                return this.mUpBodyActionMode;
            },
            set: function set(e) {
                if (this.mUpBodyActionMode != e) switch (e != F.None && (this.BaseActionMode = U.None, 
                this.BaseActionMode = U.Idle), this.mUpBodyActionMode = e, e) {
                  case F.None:
                    this.hideAllWeapon(), this.playUpEmpty();
                    break;

                  case F.ReleaseAnimal:
                    this.releaseAnimal();
                    break;

                  case F.Feed:
                    this.feedAnimal();
                    break;

                  case F.Attack:
                    this.attackAnimal();
                    break;

                  case F.SowSeed:
                    this.sowSeed();

                  case F.Watering:
                    this.watering();
                    break;

                  case F.Harvest:
                    this.harvestCrops();
                }
            }
        }, {
            key: "onAwake",
            value: function onAwake() {
                console.log("npc onawake"), this.gameObject = this.owner, this.model = this.gameObject.getChildByName("model"), 
                this.adjustModelDir(), this.mappingBone();
            }
        }, {
            key: "initAnimation",
            value: function initAnimation() {
                this.animator = this.model.getComponent(Laya.Animator), this.animator.getControllerLayer(1).defaultWeight = 0, 
                this.animator.getControllerLayer(0).defaultWeight = 1, Yt.Instance.avatarMask && (this.animator.getControllerLayer(1).avatarMask = Yt.Instance.avatarMask);
            }
        }, {
            key: "onStart",
            value: function onStart() {
                this.initAnimation(), this.readyGoToPasture(), this.refreshBoxSizeByAnimalAmount();
            }
        }, {
            key: "mappingBone",
            value: function mappingBone() {
                var e = this.model, t = e;
                var _iterator11 = _createForOfIteratorHelper2(ft.leftNodeNameArray), _step11;
                try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                        var _e151 = _step11.value;
                        t = t.getChildByName(_e151);
                    }
                } catch (err) {
                    _iterator11.e(err);
                } finally {
                    _iterator11.f();
                }
                this.leftHandWeaponNode = t;
                var a = e;
                var _iterator12 = _createForOfIteratorHelper2(ft.rightNodeNameArray), _step12;
                try {
                    for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
                        var _e152 = _step12.value;
                        a = a.getChildByName(_e152);
                    }
                } catch (err) {
                    _iterator12.e(err);
                } finally {
                    _iterator12.f();
                }
                this.rightHandWeaponNode = a, this.weaponModelArray = new Array(6);
                for (var _e150 = 0; _e150 < this.weaponModelArray.length; _e150++) {
                    var _i72 = void 0;
                    if (_e150 < 4) {
                        var _a122 = this.weaponNameArray[_e150];
                        _i72 = t.getChildByName(_a122), "l_w_3_1" == _a122 && (this.waterPoint1 = _i72.getChildByName("waterPoint"));
                    } else _i72 = a.getChildByName(this.weaponNameArray[_e150]);
                    this.weaponModelArray[_e150] = _i72, _i72.active = !1;
                }
                var i = e;
                var _iterator13 = _createForOfIteratorHelper2(ft.boxNodeNameArray), _step13;
                try {
                    for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
                        var _e153 = _step13.value;
                        i = i.getChildByName(_e153);
                    }
                } catch (err) {
                    _iterator13.e(err);
                } finally {
                    _iterator13.f();
                }
                this.boxNode = i;
            }
        }, {
            key: "operationInTargetBlock",
            value: function operationInTargetBlock(e, t) {
                if (this.tempPController = e, this.tempFarmController = t, this.tempPController) {
                    if (this.tempPController.pastureBlockInfo.treeClear && this.tempPController.pastureBlockConfig.animalConfig.id == this.npcConfig.aId) switch (this.selectWeapon(), 
                    this.tempPController.pastureBlockInfo.State) {
                      case 0:
                        this.state = R.InTargetBlockOPFirstStep, this.BaseActionMode = U.Idle;
                        break;

                      case 1:
                        this.state = R.InTargetBlockOPSecondStep, this.BaseActionMode = U.None, this.BaseActionMode = U.Walk;
                        break;

                      case 2:
                        this.state = R.InTargetBlockOPThirdStep, this.BaseActionMode = U.None, this.BaseActionMode = U.Walk;
                        break;

                      default:
                        this.state = R.InTargetBlockIdle;
                    } else this.state = R.InTargetBlockIdle;
                } else if (this.tempFarmController) {
                    if (this.tempFarmController.farmBlockInfo.treeClear && this.tempFarmController.farmBlockConfig.Config.id == this.npcConfig.aId) switch (this.selectWeapon(), 
                    this.tempFarmController.farmBlockInfo.State) {
                      case 0:
                        this.state = R.InTargetBlockOPFirstStep, this.BaseActionMode = U.Idle;
                        break;

                      case 1:
                        this.state = R.InTargetBlockOPSecondStep, this.BaseActionMode = U.None, this.BaseActionMode = U.Walk;
                        break;

                      case 2:
                        this.state = R.InTargetBlockOPThirdStep, this.BaseActionMode = U.None, this.BaseActionMode = U.Walk;
                        break;

                      default:
                        this.state = R.InTargetBlockIdle;
                    } else this.state = R.InTargetBlockIdle;
                } else this.state = R.InTargetBlockIdle;
                this.goToNextStep();
            }
        }, {
            key: "switchActionInThePasture",
            value: function switchActionInThePasture(e, t) {
                this.operationInTargetBlock(e, t);
            }
        }, {
            key: "selectWeapon",
            value: function selectWeapon() {
                this.hideAllWeapon();
                var e = 0;
                if (this.tempPController) {
                    if (this.tempPController.pastureBlockInfo.treeClear) {
                        e = 2 == this.tempPController.pastureBlockInfo.State ? 4 : this.tempPController.pastureBlockInfo.State, 
                        this.weaponModelArray[e].active = !0, this.showWeapon = !0;
                    }
                } else if (this.tempFarmController && this.tempFarmController.farmBlockInfo.treeClear) {
                    e = 2 == this.tempFarmController.farmBlockInfo.State ? 5 : this.tempFarmController.farmBlockInfo.State + 2, 
                    this.weaponModelArray[e].active = !0, this.showWeapon = !0;
                }
            }
        }, {
            key: "hideAllWeapon",
            value: function hideAllWeapon() {
                if (this.showWeapon) {
                    for (var _e154 = 0; _e154 < this.weaponModelArray.length; _e154++) {
                        this.weaponModelArray[_e154].active = !1;
                    }
                    this.showWeapon = !1;
                }
            }
        }, {
            key: "readyGoToPasture",
            value: function readyGoToPasture() {
                this.BaseActionMode = U.Run, this.way0PointIndex = 0, this.state = R.GoTargetBlockByWayPoint, 
                this.cache0Way = this.current0Way, this.cache1Way = this.current1Way, this.cache0Way && this.cache1Way && (this.gameObject.transform.position = new Laya.Vector3(this.cache0Way[0].x, 0, this.cache0Way[0].y), 
                this.goToNextStep());
            }
        }, {
            key: "goToNextStep",
            value: function goToNextStep() {
                if (this.cache0Way && this.cache1Way) {
                    var _e155 = new Laya.Vector2(this.gameObject.transform.position.x, this.gameObject.transform.position.z);
                    switch (this.state) {
                      case R.GoTargetBlockByWayPoint:
                        if (this.way0PointIndex++, this.way0PointIndex >= this.cache0Way.length) {
                            this.way0PointIndex = this.cache0Way.length - 1, this.state = R.GoTargetBlockByAI, 
                            this.way1PointIndex = 1;
                            var _t154 = this.cache1Way[this.way1PointIndex];
                            this.dir.x = _t154.x - _e155.x, this.dir.y = _t154.y - _e155.y, Laya.Vector2.normalize(this.dir, this.dir), 
                            this.adjustModelDir();
                        } else {
                            var _t155 = this.cache0Way[this.way0PointIndex];
                            this.dir.x = _t155.x - _e155.x, this.dir.y = _t155.y - _e155.y, Laya.Vector2.normalize(this.dir, this.dir), 
                            this.adjustModelDir();
                        }
                        break;

                      case R.GoTargetBlockByAI:
                        if (this.way1PointIndex++, this.way1PointIndex >= this.cache1Way.length) this.way1PointIndex = this.cache1Way.length - 1, 
                        this.state = R.InTargetBlock, this.goToNextStep(); else {
                            var _t156 = this.cache1Way[this.way1PointIndex];
                            this.dir.x = _t156.x - _e155.x, this.dir.y = _t156.y - _e155.y, Laya.Vector2.normalize(this.dir, this.dir), 
                            this.adjustModelDir();
                        }
                        break;

                      case R.InTargetBlock:
                        var _t153 = this.getStantBlockKey();
                        if (0 == this.npcConfig.type) {
                            var _e156 = me.Instance.getPControllerByKey(_t153);
                            if (this.warehouseIsFull()) this.tempPController = _e156, this.tempFarmController = null, 
                            this.state = R.InTargetBlockWarehouseIsFull, this.goToNextStep(); else {
                                var _e157 = me.Instance.getPControllerByKey(_t153);
                                this.operationInTargetBlock(_e157, null);
                            }
                        } else {
                            var _e158 = Be.Instance.getPControllerByKey(_t153);
                            if (this.warehouseIsFull()) this.tempPController = null, this.tempFarmController = _e158, 
                            this.state = R.InTargetBlockWarehouseIsFull, this.goToNextStep(); else {
                                var _e159 = Be.Instance.getPControllerByKey(_t153);
                                this.operationInTargetBlock(null, _e159);
                            }
                        }
                        break;

                      case R.InTargetBlockOPFirstStep:
                        0 == this.npcConfig.type ? this.UpBodyActionMode = F.ReleaseAnimal : this.UpBodyActionMode = F.SowSeed;
                        break;

                      case R.InTargetBlockOPSecondStep:
                        0 == this.npcConfig.type ? this.UpBodyActionMode = F.Feed : this.UpBodyActionMode = F.Watering;
                        break;

                      case R.InTargetBlockOPThirdStep:
                        this.warehouseIsFull() ? (this.state = R.InTargetBlockWarehouseIsFull, this.goToNextStep()) : 0 == this.npcConfig.type ? this.UpBodyActionMode = F.Attack : this.UpBodyActionMode = F.Harvest;
                        break;

                      case R.InTargetBlockWarehouseIsFull:
                        this.UpBodyActionMode = F.None, this.BaseActionMode = U.None, this.BaseActionMode = U.Idle, 
                        this.hideAllWeapon();
                        break;

                      case R.InTargetBlockFullBackpack:
                        this.UpBodyActionMode = F.None, this.BaseActionMode = U.Run, this.workTargetPosition = new Laya.Vector3(this.cache1Way[this.cache1Way.length - 1].x, 0, this.cache1Way[this.cache1Way.length - 1].y);
                        var _a123 = this.gameObject.transform.position, _i73 = this.workTargetPosition;
                        _i73.x == _a123.x && _i73.z == _a123.z || (this.dir.x = _i73.x - this.gameObject.transform.position.x, 
                        this.dir.y = _i73.z - this.gameObject.transform.position.z, Laya.Vector2.normalize(this.dir, this.dir), 
                        this.adjustModelDir());
                        break;

                      case R.BackWarehouseByAI:
                        if (this.way1PointIndex--, this.way1PointIndex <= -1) this.way1PointIndex = 0, this.state = R.BackWarehouseByWayPoint, 
                        this.goToNextStep(); else {
                            var _t157 = this.cache1Way[this.way1PointIndex];
                            this.dir.x = _t157.x - _e155.x, this.dir.y = _t157.y - _e155.y, Laya.Vector2.normalize(this.dir, this.dir), 
                            this.adjustModelDir();
                        }
                        break;

                      case R.BackWarehouseByWayPoint:
                        if (this.way0PointIndex--, this.way0PointIndex <= -1) this.way0PointIndex = 0, this.state = R.StoreAnimalsInTheWarehouse, 
                        this.goToNextStep(); else {
                            var _t158 = this.cache0Way[this.way0PointIndex];
                            this.dir.x = _t158.x - _e155.x, this.dir.y = _t158.y - _e155.y, Laya.Vector2.normalize(this.dir, this.dir), 
                            this.adjustModelDir();
                        }
                        break;

                      case R.StoreAnimalsInTheWarehouse:
                        {
                            var _e160 = this.ProductAmount;
                            this.ProductAmount = 0, this.npcData.amount += _e160, this.npcData.amount > this.parentWarehouseController.CurrentCapacity && (this.npcData.amount = this.parentWarehouseController.CurrentCapacity), 
                            this.npcData.updateSettleTimeStamp(), this.parentWarehouseController.onNPCStoreAnimalAnimation(this), 
                            this.readyGoToPasture();
                        }
                    }
                }
            }
        }, {
            key: "warehouseIsFull",
            value: function warehouseIsFull() {
                return this.npcData.amount >= this.parentWarehouseController.CurrentCapacity;
            }
        }, {
            key: "adjustModelDir",
            value: function adjustModelDir() {
                this.model.transform.lookAt(new Laya.Vector3(-this.dir.x, 0, -this.dir.y), new Laya.Vector3(0, 1, 0), !0);
            }
        }, {
            key: "hitDetection",
            value: function hitDetection(e) {
                var t = !1, a = new Laya.Vector3(0, 0, 0);
                Laya.Vector3.subtract(e, this.gameObject.transform.position, a), a.y = 0;
                var i = Laya.Vector3.scalarLength(a);
                if (i <= Yt.attackDistance) if (i <= .1) t = !0; else {
                    var _e161 = new Laya.Vector3(0, 0, 0);
                    this.model.transform.getForward(_e161), _e161.x = -_e161.x, _e161.z = -_e161.z, 
                    r.getVector3Angle(_e161, a) <= .5 * Yt.fanAngle && (t = !0);
                }
                return t;
            }
        }, {
            key: "releaseAnimal",
            value: function releaseAnimal() {
                this.throwAndAttackFrameCount = 0;
            }
        }, {
            key: "feedAnimal",
            value: function feedAnimal() {
                this.throwAndAttackFrameCount = 0;
            }
        }, {
            key: "sowSeed",
            value: function sowSeed() {
                this.throwAndAttackFrameCount = 0;
            }
        }, {
            key: "watering",
            value: function watering() {
                this.throwAndAttackFrameCount = 0, this.playWatering();
            }
        }, {
            key: "attackAnimal",
            value: function attackAnimal() {
                this.throwAndAttackFrameCount = 0;
            }
        }, {
            key: "harvestCrops",
            value: function harvestCrops() {
                this.throwAndAttackFrameCount = 0;
            }
        }, {
            key: "throwAnimal",
            value: function throwAnimal() {
                if (this.tempPController) {
                    var _e162 = new Laya.Vector3(this.rightHandWeaponNode.transform.position.x, this.rightHandWeaponNode.transform.position.y, this.rightHandWeaponNode.transform.position.z), _t159 = this.model.transform.localRotationEulerY;
                    this.tempPController.onNPCThrowAnimal(this, _e162, _t159);
                }
            }
        }, {
            key: "throwFeed",
            value: function throwFeed() {
                if (this.tempPController) {
                    var _e163 = new Laya.Vector3(this.rightHandWeaponNode.transform.position.x, this.rightHandWeaponNode.transform.position.y, this.rightHandWeaponNode.transform.position.z), _t160 = this.model.transform.localRotationEulerY;
                    this.tempPController.onNPCThrowAnimalFeed(this, _e163, _t160);
                }
            }
        }, {
            key: "throwSeeds",
            value: function throwSeeds() {
                if (this.tempFarmController) {
                    var _e164 = new Laya.Vector3(this.rightHandWeaponNode.transform.position.x, this.rightHandWeaponNode.transform.position.y, this.rightHandWeaponNode.transform.position.z), _t161 = this.model.transform.localRotationEulerY;
                    this.tempFarmController.onNPCThrowSeeds(this, _e164, _t161);
                }
            }
        }, {
            key: "throwWaterDrop",
            value: function throwWaterDrop() {
                if (this.tempFarmController) {
                    var _e165 = this.waterPoint1, _t162 = new Laya.Vector3(_e165.transform.position.x, _e165.transform.position.y, _e165.transform.position.z), _a124 = this.model.transform.localRotationEulerY;
                    this.tempFarmController.onThrowWaterDrop(_t162, _a124);
                }
            }
        }, {
            key: "checkWatering",
            value: function checkWatering() {
                this.tempFarmController && this.tempFarmController.onCheckWatering(this);
            }
        }, {
            key: "harvestCropsCheck",
            value: function harvestCropsCheck() {
                this.tempFarmController && this.tempFarmController.onHarvestCrops(this);
            }
        }, {
            key: "attackAnimalCheck",
            value: function attackAnimalCheck() {
                this.tempPController && this.tempPController.onNPCAttackAnimal(this);
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (this.parentWarehouseController.npcIsActive && this.gameObject && this.cache0Way && this.cache1Way) switch (this.state) {
                  case R.GoTargetBlockByWayPoint:
                  case R.BackWarehouseByWayPoint:
                    {
                        var _e166 = .001;
                        if (Math.abs(this.gameObject.transform.position.x - this.cache0Way[this.way0PointIndex].x) < _e166 && Math.abs(this.gameObject.transform.position.z - this.cache0Way[this.way0PointIndex].y) < _e166) this.goToNextStep(); else {
                            var _e167 = Laya.timer.delta / 1e3 * this.Speed, _t163 = It.MoveTowards(this.gameObject.transform.position, new Laya.Vector3(this.cache0Way[this.way0PointIndex].x, 0, this.cache0Way[this.way0PointIndex].y), _e167), _a125 = this.npcRealReachedPosition(_t163.x, _t163.z, this.gameObject.transform.localPosition);
                            _a125 && (this.gameObject.transform.position = _a125);
                        }
                    }
                    break;

                  case R.GoTargetBlockByAI:
                  case R.BackWarehouseByAI:
                    {
                        var _e168 = .001;
                        if (Math.abs(this.gameObject.transform.position.x - this.cache1Way[this.way1PointIndex].x) < _e168 && Math.abs(this.gameObject.transform.position.z - this.cache1Way[this.way1PointIndex].y) < _e168) this.goToNextStep(); else {
                            var _e169 = Laya.timer.delta / 1e3 * this.Speed, _t164 = It.MoveTowards(this.gameObject.transform.position, new Laya.Vector3(this.cache1Way[this.way1PointIndex].x, 0, this.cache1Way[this.way1PointIndex].y), _e169), _a126 = this.npcRealReachedPosition(_t164.x, _t164.z, this.gameObject.transform.localPosition);
                            _a126 && (this.gameObject.transform.position = _a126);
                        }
                    }
                    break;

                  case R.InTargetBlockOPFirstStep:
                    if (0 == this.npcConfig.type) {
                        if (0 == this.throwAndAttackFrameCount) {
                            this.BaseActionMode = U.Idle;
                            var _e170 = this.gameObject.transform.position, _t165 = this.tempPController.rootModel.transform.position;
                            _t165.x == _e170.x && _t165.z == _e170.z || (this.dir.x = _t165.x - this.gameObject.transform.position.x, 
                            this.dir.y = _t165.z - this.gameObject.transform.position.z, Laya.Vector2.normalize(this.dir, this.dir), 
                            this.adjustModelDir()), this.playUpReleaseAnimal(1);
                        } else 34 == this.throwAndAttackFrameCount ? this.throwAnimal() : 48 == this.throwAndAttackFrameCount && (this.throwAndAttackFrameCount = -1);
                    } else if (0 == this.throwAndAttackFrameCount ? (this.getTargetPosition(!0), this.playUpSowSeed()) : 32 == this.throwAndAttackFrameCount ? this.throwSeeds() : 36 == this.throwAndAttackFrameCount && (this.throwAndAttackFrameCount = -1), 
                    this.workTargetPosition) {
                        var _e171 = .001;
                        if (Math.abs(this.gameObject.transform.position.x - this.workTargetPosition.x) < _e171 && Math.abs(this.gameObject.transform.position.z - this.workTargetPosition.z) < _e171) this.BaseActionMode = U.Idle; else {
                            this.BaseActionMode = U.Walk;
                            var _e172 = Laya.timer.delta / 1e3 * this.workSpeed, _t166 = It.MoveTowards(this.gameObject.transform.position, this.workTargetPosition, _e172), _a127 = this.npcRealReachedPosition(_t166.x, _t166.z, this.gameObject.transform.localPosition);
                            _a127 && (this.gameObject.transform.position = _a127);
                        }
                    }
                    this.throwAndAttackFrameCount++;
                    break;

                  case R.InTargetBlockOPSecondStep:
                    if (0 == this.npcConfig.type) {
                        if (0 == this.throwAndAttackFrameCount ? (this.getTargetPosition(!0), this.playUpFeed()) : 32 == this.throwAndAttackFrameCount ? this.throwFeed() : 36 == this.throwAndAttackFrameCount && (this.throwAndAttackFrameCount = -1), 
                        this.workTargetPosition) {
                            var _e173 = .001;
                            if (Math.abs(this.gameObject.transform.position.x - this.workTargetPosition.x) < _e173 && Math.abs(this.gameObject.transform.position.z - this.workTargetPosition.z) < _e173) this.BaseActionMode = U.Idle; else {
                                this.BaseActionMode = U.Walk;
                                var _e174 = Laya.timer.delta / 1e3 * this.workSpeed, _t167 = It.MoveTowards(this.gameObject.transform.position, this.workTargetPosition, _e174), _a128 = this.npcRealReachedPosition(_t167.x, _t167.z, this.gameObject.transform.localPosition);
                                _a128 && (this.gameObject.transform.position = _a128);
                            }
                        }
                    } else if (this.throwWaterDrop(), 0 == this.throwAndAttackFrameCount ? this.getTargetPosition(!0) : this.throwAndAttackFrameCount >= 24 && (this.checkWatering(), 
                    this.throwAndAttackFrameCount = -1), this.workTargetPosition) {
                        var _e175 = .001;
                        if (Math.abs(this.gameObject.transform.position.x - this.workTargetPosition.x) < _e175 && Math.abs(this.gameObject.transform.position.z - this.workTargetPosition.z) < _e175) this.BaseActionMode = U.Idle; else {
                            this.BaseActionMode = U.Walk;
                            var _e176 = Laya.timer.delta / 1e3 * this.workSpeed, _t168 = It.MoveTowards(this.gameObject.transform.position, this.workTargetPosition, _e176), _a129 = this.npcRealReachedPosition(_t168.x, _t168.z, this.gameObject.transform.localPosition);
                            _a129 && (this.gameObject.transform.position = _a129);
                        }
                    }
                    this.throwAndAttackFrameCount++;
                    break;

                  case R.InTargetBlockOPThirdStep:
                    if (0 == this.throwAndAttackFrameCount ? (this.getTargetPosition(!1), this.playUpAttack()) : 8 == this.throwAndAttackFrameCount ? 0 == this.npcConfig.type ? this.attackAnimalCheck() : this.harvestCropsCheck() : 48 == this.throwAndAttackFrameCount && (this.throwAndAttackFrameCount = -1), 
                    this.workTargetPosition) {
                        var _e177 = .001;
                        if (Math.abs(this.gameObject.transform.position.x - this.workTargetPosition.x) < _e177 && Math.abs(this.gameObject.transform.position.z - this.workTargetPosition.z) < _e177) this.BaseActionMode = U.Idle; else {
                            this.BaseActionMode = U.Walk;
                            var _e178 = Laya.timer.delta / 1e3 * this.workSpeed, _t169 = It.MoveTowards(this.gameObject.transform.position, this.workTargetPosition, _e178), _a130 = this.npcRealReachedPosition(_t169.x, _t169.z, this.gameObject.transform.localPosition);
                            _a130 && (this.gameObject.transform.position = _a130);
                        }
                    }
                    this.throwAndAttackFrameCount++;
                    break;

                  case R.InTargetBlockFullBackpack:
                    if (this.workTargetPosition) {
                        var _e179 = .001;
                        if (Math.abs(this.gameObject.transform.position.x - this.workTargetPosition.x) < _e179 && Math.abs(this.gameObject.transform.position.z - this.workTargetPosition.z) < _e179) this.state = R.BackWarehouseByAI; else {
                            var _e180 = Laya.timer.delta / 1e3 * this.Speed, _t170 = It.MoveTowards(this.gameObject.transform.position, this.workTargetPosition, _e180), _a131 = this.npcRealReachedPosition(_t170.x, _t170.z, this.gameObject.transform.localPosition);
                            _a131 && (this.gameObject.transform.position = _a131);
                        }
                    }
                    break;

                  case R.InTargetBlockWarehouseIsFull:
                    if (this.warehouseIsFullFrameCount >= 30) {
                        this.warehouseIsFullFrameCount = 0;
                        var _e181 = new Laya.Vector3();
                        Laya.Vector3.subtract(Yt.Instance.gameObject.transform.position, this.gameObject.transform.position, _e181);
                        var _t171 = Laya.Vector3.scalarLength(_e181);
                        this.warehouseIsFull() ? _t171 <= 1.5 && yt.Instance.show(this) : (_t171 < 5 && _t171 > 1.5 && yt.Instance.hide(), 
                        this.operationInTargetBlock(this.tempPController, this.tempFarmController));
                    }
                    this.warehouseIsFullFrameCount++;
                }
            }
        }, {
            key: "getTargetPosition",
            value: function getTargetPosition(e) {
                if (this.tempPController) {
                    var _t172 = this.tempPController.neighborAnimalPool.getMinDistanceAnimalPositionFrom(this.gameObject.transform.position, e);
                    _t172 ? (this.workTargetPosition = _t172, this.dir.x = _t172.x - this.gameObject.transform.position.x, 
                    this.dir.y = _t172.z - this.gameObject.transform.position.z, Laya.Vector2.normalize(this.dir, this.dir), 
                    this.adjustModelDir()) : this.workTargetPosition = null;
                } else if (this.tempFarmController) {
                    var _e182 = this.tempFarmController.farmBlockInfo.State, _t173 = this.tempFarmController.neighborCropsPool.getMinDistanceCropsPositionFrom(this.gameObject.transform.position, _e182);
                    _t173 ? (this.workTargetPosition = _t173, this.dir.x = _t173.x - this.gameObject.transform.position.x, 
                    this.dir.y = _t173.z - this.gameObject.transform.position.z, Laya.Vector2.normalize(this.dir, this.dir), 
                    this.adjustModelDir()) : this.workTargetPosition = null;
                }
            }
        }, {
            key: "setTargetPasture",
            value: function setTargetPasture(e) {
                console.log("setTargetPasture s1"), e && (console.log("setTargetPasture s2"), this.targetPasture = e, 
                this.choseWay());
            }
        }, {
            key: "setTargetFarm",
            value: function setTargetFarm(e) {
                console.log("setTargetFarm s1"), e && (console.log("setTargetFarm s2"), this.targetFarm = e, 
                this.choseWay());
            }
        }, {
            key: "choseWay",
            value: function choseWay() {
                if (console.log("choseWay"), this.pointWays && this.pointWays.length > 0) {
                    if (console.log("choseWay 1"), 1 == this.pointWays.length) this.current0Way = this.pointWays[0]; else {
                        var _e183;
                        if (0 == this.npcConfig.type) {
                            _e183 = this.targetPasture.rootModel.transform.position;
                        } else {
                            _e183 = this.targetFarm.rootModel.transform.position;
                        }
                        var _t174 = null;
                        for (var _a132 = 0; _a132 < this.pointWays.length; _a132++) {
                            var _i74 = this.pointWays[_a132];
                            if (_i74 && _i74.length > 0) if (_t174) {
                                var _a133 = _t174[_t174.length - 1], _n34 = _i74[_i74.length - 1], _o28 = new Laya.Vector2(_e183.x - _a133.x, _e183.z - _a133.y), _s23 = new Laya.Vector2(_e183.x - _n34.x, _e183.z - _n34.y), _r11 = Laya.Vector2.scalarLength(_o28);
                                Laya.Vector2.scalarLength(_s23) < _r11 && (_t174 = _i74);
                            } else _t174 = _i74;
                        }
                        _t174 && (this.current0Way = _t174);
                    }
                    if (this.current0Way) {
                        var _e184 = this.current0Way[this.current0Way.length - 1];
                        0 == this.npcConfig.type ? this.choseWay2_0(_e184) : this.choseWay2_1(_e184);
                    }
                }
            }
        }, {
            key: "choseWay2_0",
            value: function choseWay2_0(e) {
                var t = this.targetPasture.neighborAnimalPool;
                if (t) {
                    var _a134 = t.getMinDistancePastureToPosition(new Laya.Vector3(e.x, 0, e.y)), _i75 = Math.round(_a134.blockConfig.x), _n35 = Math.round(_a134.blockConfig.z), _o29 = Math.abs(Math.round(_i75 - e.x)), _s24 = Math.abs(Math.round(_n35 - e.y)), _r12 = Math.round((_i75 - e.x) / _o29), _l14 = Math.round((_n35 - e.y) / _s24), _c7 = 1 + _o29 + _s24, _h6 = new Array(_c7);
                    if (_n35 == e.y && _i75 == e.x) _h6[_c7 - 1] = new Laya.Vector2(_i75, _n35); else if (_n35 == e.y) {
                        for (var _t175 = 0; _t175 < _o29; _t175++) {
                            _h6[_t175] = new Laya.Vector2(e.x + _t175 * _r12, e.y);
                        }
                        _h6[_c7 - 1] = new Laya.Vector2(_i75, _n35);
                    } else if (_i75 == e.x) {
                        for (var _t176 = 0; _t176 < _s24; _t176++) {
                            _h6[_t176] = new Laya.Vector2(e.x, e.y + _t176 * _l14);
                        }
                        _h6[_c7 - 1] = new Laya.Vector2(_i75, _n35);
                    } else {
                        var _t177 = 0, _a135 = _s24, _d3 = _o29, _m3 = new Laya.Vector2(e.x, e.y);
                        for (_h6[_t177] = _m3, _t177++; _a135 > 0 || _d3 > 0; ) {
                            var _i76 = _s24 - _a135, _n36 = _o29 - _d3;
                            if (_a135 > 0) {
                                var _o30 = new Laya.Vector2(e.x + _n36 * _r12, e.y + (_i76 + 1) * _l14), _s25 = _o30.x + "_" + _o30.y, _c8 = Ee.Instance.getUnlockBlockByKey(_s25);
                                if (_c8 && _c8.IsUnlocked) _h6[_t177] = _o30, _a135--; else {
                                    var _s26 = new Laya.Vector2(e.x + (_n36 + 1) * _r12, e.y + _i76 * _l14), _c9 = _s26.x + "_" + _s26.y, _m4 = Ee.Instance.getUnlockBlockByKey(_c9);
                                    _m4 && _m4.IsUnlocked ? (_h6[_t177] = _s26, _d3--) : (_h6[_t177] = _o30, _a135--);
                                }
                            } else if (_d3 > 0) {
                                var _a136 = new Laya.Vector2(e.x + (_n36 + 1) * _r12, e.y + _i76 * _l14);
                                _h6[_t177] = _a136, _d3--;
                            }
                            _t177++;
                        }
                        _h6[_c7 - 1] = new Laya.Vector2(_i75, _n35);
                    }
                    this.current1Way = _h6;
                }
            }
        }, {
            key: "choseWay2_1",
            value: function choseWay2_1(e) {
                var t = this.targetFarm.neighborCropsPool;
                if (t) {
                    var _a137 = t.getMinDistancePastureToPosition(new Laya.Vector3(e.x, 0, e.y)), _i77 = Math.round(_a137.blockConfig.x), _n37 = Math.round(_a137.blockConfig.z), _o31 = Math.abs(Math.round(_i77 - e.x)), _s27 = Math.abs(Math.round(_n37 - e.y)), _r13 = Math.round((_i77 - e.x) / _o31), _l15 = Math.round((_n37 - e.y) / _s27), _c10 = 1 + _o31 + _s27, _h7 = new Array(_c10);
                    if (_n37 == e.y && _i77 == e.x) _h7[_c10 - 1] = new Laya.Vector2(_i77, _n37); else if (_n37 == e.y) {
                        for (var _t178 = 0; _t178 < _o31; _t178++) {
                            _h7[_t178] = new Laya.Vector2(e.x + _t178 * _r13, e.y);
                        }
                        _h7[_c10 - 1] = new Laya.Vector2(_i77, _n37);
                    } else if (_i77 == e.x) {
                        for (var _t179 = 0; _t179 < _s27; _t179++) {
                            _h7[_t179] = new Laya.Vector2(e.x, e.y + _t179 * _l15);
                        }
                        _h7[_c10 - 1] = new Laya.Vector2(_i77, _n37);
                    } else {
                        var _t180 = 0, _a138 = _s27, _d4 = _o31, _m5 = new Laya.Vector2(e.x, e.y);
                        for (_h7[_t180] = _m5, _t180++; _a138 > 0 || _d4 > 0; ) {
                            var _i78 = _s27 - _a138, _n38 = _o31 - _d4;
                            if (_a138 > 0) {
                                var _o32 = new Laya.Vector2(e.x + _n38 * _r13, e.y + (_i78 + 1) * _l15), _s28 = _o32.x + "_" + _o32.y, _c11 = Ee.Instance.getUnlockBlockByKey(_s28);
                                if (_c11 && _c11.IsUnlocked) _h7[_t180] = _o32, _a138--; else {
                                    var _s29 = new Laya.Vector2(e.x + (_n38 + 1) * _r13, e.y + _i78 * _l15), _c12 = _s29.x + "_" + _s29.y, _m6 = Ee.Instance.getUnlockBlockByKey(_c12);
                                    _m6 && _m6.IsUnlocked ? (_h7[_t180] = _s29, _d4--) : (_h7[_t180] = _o32, _a138--);
                                }
                            } else if (_d4 > 0) {
                                var _a139 = new Laya.Vector2(e.x + (_n38 + 1) * _r13, e.y + _i78 * _l15);
                                _h7[_t180] = _a139, _d4--;
                            }
                            _t180++;
                        }
                        _h7[_c10 - 1] = new Laya.Vector2(_i77, _n37);
                    }
                    this.current1Way = _h7;
                }
            }
        }, {
            key: "playIdle",
            value: function playIdle() {
                var e = "xiuxiandaiji";
                e = "daiji", this.animator.play(e, 0, 0);
            }
        }, {
            key: "playRun",
            value: function playRun() {
                this.animator.getControllerLayer(0).getAnimatorState("pao").speed = this.runSpeed + 1.3 * this.Speed, 
                this.animator.play("pao", 0, 0);
            }
        }, {
            key: "playWalk",
            value: function playWalk() {
                this.animator.getControllerLayer(0).getAnimatorState("pao").speed = 1.3 * this.walkSpeed + 1.3 * this.workSpeed, 
                this.animator.play("pao", 0, 0);
            }
        }, {
            key: "playUpEmpty",
            value: function playUpEmpty() {
                this.animator.getControllerLayer(1).defaultWeight = 0;
            }
        }, {
            key: "playUp",
            value: function playUp() {
                this.animator.getControllerLayer(1).defaultWeight = 1;
            }
        }, {
            key: "playUpAttack",
            value: function playUpAttack() {
                this.playUp(), this.animator.play("pugong", 1, 0);
            }
        }, {
            key: "playUpReleaseAnimal",
            value: function playUpReleaseAnimal(e) {
                this.playUp(), this.animator.getControllerLayer(1).getAnimatorState("toufang").speed = e, 
                this.animator.play("toufang", 1, 0);
            }
        }, {
            key: "playUpFeed",
            value: function playUpFeed() {
                this.playUp(), this.animator.play("weishi", 1, 0);
            }
        }, {
            key: "playUpSowSeed",
            value: function playUpSowSeed() {
                this.playUp(), this.animator.play("weishi", 1, 0);
            }
        }, {
            key: "playWatering",
            value: function playWatering() {
                this.playUp(), this.animator.getControllerLayer(1).getAnimatorState("jiaoshui").speed = .25, 
                this.animator.play("jiaoshui", 1, 0);
            }
        }, {
            key: "npcRealReachedPosition",
            value: function npcRealReachedPosition(e, t, a) {
                var i = Math.floor((ea.Instance.zeroGridPoint.x - e) / ea.Instance.gridSize), n = Math.floor((t - ea.Instance.zeroGridPoint.y) / ea.Instance.gridSize), o = 0, s = null;
                if (i >= 0 && i < ea.Instance.numOfColumns && n >= 0 && n < ea.Instance.numOfRows) {
                    var _r14 = ea.Instance.heightMapArray[n][i], _l16 = Math.floor((ea.Instance.zeroGridPoint.x - a.x) / ea.Instance.gridSize), _c13 = Math.floor((a.z - ea.Instance.zeroGridPoint.y) / ea.Instance.gridSize);
                    if (_l16 != i && _c13 != n) {
                        var _e185 = ea.Instance.heightMapArray[_c13][i], _t181 = ea.Instance.heightMapArray[n][_l16];
                        if (_e185 <= 0 && _t181 <= 0) return s = null;
                    }
                    switch (_r14) {
                      case 2:
                        0 == this.gridType && (3 == ea.Instance.heightMapArray[n + 1][i] ? (this.gridType = 2, 
                        this.bridgeTop.x = ea.Instance.zeroGridPoint.x - i * ea.Instance.gridSize - 1 / 6, 
                        this.bridgeTop.z = ea.Instance.zeroGridPoint.y + (n + 1) * ea.Instance.gridSize + 1 / 6) : 3 == ea.Instance.heightMapArray[n - 1][i] ? (this.bridgeTop.x = ea.Instance.zeroGridPoint.x - i * ea.Instance.gridSize - 1 / 6, 
                        this.bridgeTop.z = ea.Instance.zeroGridPoint.y + (n - 1) * ea.Instance.gridSize + 1 / 6, 
                        this.gridType = 2) : 3 == ea.Instance.heightMapArray[n][i + 1] ? (this.gridType = 1, 
                        this.bridgeTop.x = ea.Instance.zeroGridPoint.x - (i + 1) * ea.Instance.gridSize - 1 / 6, 
                        this.bridgeTop.z = ea.Instance.zeroGridPoint.y + n * ea.Instance.gridSize + 1 / 6) : 3 == ea.Instance.heightMapArray[n][i - 1] && (this.gridType = 1, 
                        this.bridgeTop.x = ea.Instance.zeroGridPoint.x - (i - 1) * ea.Instance.gridSize - 1 / 6, 
                        this.bridgeTop.z = ea.Instance.zeroGridPoint.y + n * ea.Instance.gridSize + 1 / 6), 
                        this.bridgeTop.y = .1);

                      case 3:
                        if (2 == this.gridType) {
                            var _e186 = .5 - Math.abs(t - this.bridgeTop.z);
                            _e186 < 0 && (_e186 = 0), o = this.bridgeTop.y / .5 * _e186;
                        } else if (1 == this.gridType) {
                            var _t182 = .5 - Math.abs(e - this.bridgeTop.x);
                            _t182 < 0 && (_t182 = 0), o = this.bridgeTop.y / .5 * _t182;
                        }
                        s = new Laya.Vector3(e, o, t);
                        break;

                      case 1:
                        this.gridType = 0, o = 0, s = new Laya.Vector3(e, o, t);
                        break;

                      case 0:
                      default:
                        {
                            var _l17 = Math.floor((ea.Instance.zeroGridPoint.x - a.x) / ea.Instance.gridSize), _c14 = Math.floor((a.z - ea.Instance.zeroGridPoint.y) / ea.Instance.gridSize);
                            if (_r14 = ea.Instance.heightMapArray[_c14][i], o = a.y, _r14 > 0) return new Laya.Vector3(e, o, a.z);
                            (_r14 = ea.Instance.heightMapArray[n][_l17]) > 0 && (s = new Laya.Vector3(a.x, o, t));
                        }
                    }
                } else if (i < 0 && n < 0) s = null; else if (i >= ea.Instance.numOfColumns && n >= ea.Instance.numOfRows) s = null; else if (i < 0 || i >= ea.Instance.numOfColumns) {
                    var _e187 = Math.floor((ea.Instance.zeroGridPoint.x - a.x) / ea.Instance.gridSize);
                    ea.Instance.heightMapArray[n][_e187] > 0 && (s = new Laya.Vector3(a.x, o, t));
                } else if (n < 0 || n >= ea.Instance.numOfRows) {
                    var _t183 = Math.floor((a.z - ea.Instance.zeroGridPoint.y) / ea.Instance.gridSize);
                    ea.Instance.heightMapArray[_t183][i] > 0 && (s = new Laya.Vector3(e, o, a.z));
                } else s = null;
                return s;
            }
        }, {
            key: "ProductAmount",
            get: function get() {
                return this.mProductAmount;
            },
            set: function set(e) {
                e < 0 && (e = 0), this.mProductAmount = e, this.refreshBoxSizeByAnimalAmount();
            }
        }, {
            key: "refreshBoxSizeByAnimalAmount",
            value: function refreshBoxSizeByAnimalAmount() {
                var e = this.ProductAmount / this.npcConfig.capacity;
                e > 1 && (e = 1);
                var t = .4 + .6 * e;
                this.boxNode && (this.boxNode.transform.localScale = new Laya.Vector3(t, t, t));
            }
        }, {
            key: "getProduct",
            value: function getProduct() {
                this.ProductAmount++, this.ProductAmount >= this.npcConfig.capacity && (this.ProductAmount = this.npcConfig.capacity, 
                this.state = R.InTargetBlockFullBackpack, this.goToNextStep());
            }
        }, {
            key: "getStantBlockKey",
            value: function getStantBlockKey() {
                if (this.gameObject) {
                    var _e188 = this.gameObject.transform.position.x, _t184 = this.gameObject.transform.position.z;
                    return (_e188 = Math.round(_e188)) + "_" + (_t184 = Math.round(_t184));
                }
                return "_____";
            }
        }, {
            key: "activeNPC",
            value: function activeNPC() {
                switch (this.gameObject.active = !0, this.state) {
                  case R.GoTargetBlockByWayPoint:
                  case R.GoTargetBlockByAI:
                  case R.BackWarehouseByAI:
                  case R.BackWarehouseByWayPoint:
                  case R.InTargetBlockFullBackpack:
                    this.playRun();
                    break;

                  case R.None:
                  case R.InTargetBlockIdle:
                  case R.InTargetBlockWarehouseIsFull:
                    this.playIdle();
                }
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                this.gameObject = null, Laya.timer.clearAll(this);
            }
        } ]);
        return wt;
    }(Laya.Script3D);
    wt.attackDistance = .3, wt.strongAttackDistance = .6, wt.fanAngle = 150, wt.releaseAnimalDistance = .3, 
    wt.releaseAnimalMaxDistance = .8, function(e) {
        e[e.None = 0] = "None", e[e.GoTargetBlockByWayPoint = 1] = "GoTargetBlockByWayPoint", 
        e[e.GoTargetBlockByAI = 2] = "GoTargetBlockByAI", e[e.InTargetBlock = 3] = "InTargetBlock", 
        e[e.InTargetBlockOPFirstStep = 4] = "InTargetBlockOPFirstStep", e[e.InTargetBlockOPSecondStep = 5] = "InTargetBlockOPSecondStep", 
        e[e.InTargetBlockOPThirdStep = 6] = "InTargetBlockOPThirdStep", e[e.InTargetBlockIdle = 7] = "InTargetBlockIdle", 
        e[e.InTargetBlockWarehouseIsFull = 8] = "InTargetBlockWarehouseIsFull", e[e.InTargetBlockFullBackpack = 9] = "InTargetBlockFullBackpack", 
        e[e.BackWarehouseByAI = 10] = "BackWarehouseByAI", e[e.BackWarehouseByWayPoint = 11] = "BackWarehouseByWayPoint", 
        e[e.StoreAnimalsInTheWarehouse = 12] = "StoreAnimalsInTheWarehouse";
    }(R || (R = {})), function(e) {
        e[e.None = 0] = "None", e[e.Idle = 1] = "Idle", e[e.Walk = 2] = "Walk", e[e.Run = 3] = "Run";
    }(U || (U = {})), function(e) {
        e[e.None = 0] = "None", e[e.ReleaseAnimal = 1] = "ReleaseAnimal", e[e.SowSeed = 2] = "SowSeed", 
        e[e.Watering = 3] = "Watering", e[e.Feed = 4] = "Feed", e[e.Attack = 5] = "Attack", 
        e[e.Harvest = 6] = "Harvest";
    }(F || (F = {}));
    var Ct = /* */ function(_it4) {
        _inherits2(Ct, _it4);
        var _super22 = _createSuper2(Ct);
        function Ct() {
            var _this34;
            _classCallCheck2(this, Ct);
            _this34 = _super22.apply(this, arguments), _this34.needCreateAnimation = !1, _this34.mEnableChildCheck = !1, 
            _this34.npcControllerDic = {}, _this34.progressBoxArray = null, _this34.npcIsActive = !1, 
            _this34.npcIndex = 0, _this34.frameCount = 0, _this34.checkInRingFrequency = 10, 
            _this34.checkShowViewFrequency = 30, _this34.collectWarehouseState = 0, _this34.showDialog = !1, 
            _this34.npcCollectArrayDic = {};
            return _this34;
        }
        _createClass2(Ct, [ {
            key: "CurrentCapacity",
            get: function get() {
                return this.warehouseBlockInfo.CurrentCapacity;
            }
        }, {
            key: "activeNPC",
            value: function activeNPC() {
                if (this.npcIsActive = !0, this.npcControllerDic) for (var _e189 in this.npcControllerDic) {
                    var _t185 = this.npcControllerDic[_e189];
                    _t185 && _t185.activeNPC();
                }
            }
        }, {
            key: "banNPC",
            value: function banNPC() {
                if (this.npcIsActive = !1, this.npcControllerDic) for (var _e190 in this.npcControllerDic) {
                    var _t186 = this.npcControllerDic[_e190];
                    _t186 && (_t186.gameObject.active = !1);
                }
            }
        }, {
            key: "onAwake",
            value: function onAwake() {
                this.mapOutWarehouse(), this.mpaOutBox(), this.npcIsActive = this.needCreateAnimation;
            }
        }, {
            key: "onStart",
            value: function onStart() {
                this.initNpc(), this.onRefreshStore();
            }
        }, {
            key: "mpaOutBox",
            value: function mpaOutBox() {
                if (!this.warehouseMapConfig.isCollectAllWarehouse) {
                    this.progressBoxArray = new Array(6);
                    var _e191 = this.gameObject.getChildByName("BoxPoint"), _t187 = ce.Instance.box, _a140 = .11, _i79 = .12, _n39 = 0;
                    for (var _o33 = 0; _o33 < 2; _o33++) {
                        for (var _s30 = 0; _s30 < 3; _s30++) {
                            if (_t187) {
                                var _r15 = new Laya.Vector3((_s30 - 1) * _a140, _o33 * _i79, 0), _l18 = Laya.MeshSprite3D.instantiate(_t187, _e191, !1, _r15);
                                _l18.transform.localPosition = _r15, _l18.active = !1, this.progressBoxArray[_n39] = _l18, 
                                _n39++;
                            }
                        }
                    }
                }
            }
        }, {
            key: "mapOutWarehouse",
            value: function mapOutWarehouse() {
                if (this.warehouseMapConfig.isCollectAllWarehouse) {
                    var _e192 = ce.Instance.warehouseModelArray[0];
                    if (_e192) {
                        var _t188 = Laya.MeshSprite3D.instantiate(_e192, this.rootModel);
                        this.gameObject = _t188;
                    }
                } else {
                    var _e193 = ce.Instance.warehouseModelArray[1];
                    if (_e193) {
                        var _t189 = Laya.MeshSprite3D.instantiate(_e193, this.rootModel);
                        this.gameObject = _t189;
                    }
                }
                this.gameObject && (this.gameObject.active = !0, this.Ring = this.gameObject.getChildByName("Ring"), 
                this.gameObject.transform.localPosition = new Laya.Vector3(0, 0, 0), this.gameObject.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), 
                this.gameObject.transform.localScale = new Laya.Vector3(1, 1, 1));
            }
        }, {
            key: "initNpc",
            value: function initNpc() {
                if (console.log("初始化仓库NPC"), 1 == this.warehouseMapConfig.type && this.warehouseBlockInfo.npcDataDic) for (var _e194 in this.warehouseBlockInfo.npcDataDic) {
                    var _t190 = this.warehouseBlockInfo.npcDataDic[_e194];
                    _t190 && _t190.isUnlocked && this.createNpc(_t190);
                }
            }
        }, {
            key: "createNpc",
            value: function createNpc(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                console.log("create w npc"), 40001 != this.warehouseMapConfig.id || Ue.Instance.AllGuideIsCompleted || Ue.Instance.completedGuide(10);
                var a = this.warehouseMapConfig.NPCConfigArrayDIC[e.id];
                if (a) {
                    console.log("create w npc s1");
                    var _i80 = ce.Instance.WarehorseNPC;
                    if (_i80) {
                        console.log("create w npc s2");
                        var _n40 = new Laya.Vector3(this.rootModel.transform.position.x, this.rootModel.transform.position.y, this.rootModel.transform.position.z);
                        _n40.z -= .37, 0 == this.npcIndex ? _n40.x += 0 : 1 == this.npcIndex ? _n40.x += -.3 : _n40.x += .3;
                        var _o34 = Laya.MeshSprite3D.instantiate(_i80, Wt.SceneRoot, !1, _n40);
                        _o34.active = !0;
                        var _s31 = new wt();
                        _s31.parentWarehouseController = this, _s31.npcData = e, _s31.npcConfig = a, _s31.startPoint = new Laya.Vector3(this.rootModel.transform.position.x, 0, this.rootModel.transform.position.z - .375), 
                        _s31.pointWays = this.warehouseMapConfig.npcPathDic[e.id], t || _s31.activeNPC(), 
                        this.npcControllerDic[a.id] = _s31, this.refreshNPCTarget(a.aId), _o34.addComponentIntance(_s31), 
                        this.npcIndex++;
                    }
                }
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                this.blockConfig.sceneId == Yt.Instance.SceneId && 1 == this.warehouseMapConfig.type && (this.frameCount++, 
                this.mEnableChildCheck ? this.frameCount >= this.checkInRingFrequency && (this.frameCount = 0, 
                this.inRing ? this.touchRing() : (this.showDialog = !1, this.collectWarehouseState = 0, 
                this.onRefreshStore(), dt.Instance.show(this))) : this.frameCount >= this.checkShowViewFrequency && (this.frameCount = 0, 
                this.inShowViewDistance ? (this.onRefreshStore(), dt.Instance.show(this)) : dt.Instance.hide()));
            }
        }, {
            key: "touchRing",
            value: function touchRing() {
                2 == this.collectWarehouseState ? this.showDialog || (this.showDialog = !0, ut.Instance.show(this)) : 0 == this.collectWarehouseState && (this.collectWarehouseState = 1, 
                this.collectAllAnimal());
            }
        }, {
            key: "inRing",
            get: function get() {
                var e = Yt.Instance.gameObject.transform.position, t = new Laya.Vector2(this.Ring.transform.position.x - e.x, this.Ring.transform.position.z - e.z);
                return Laya.Vector2.scalarLength(t) <= .3;
            }
        }, {
            key: "inShowViewDistance",
            get: function get() {
                var e = Yt.Instance.gameObject.transform.position, t = new Laya.Vector2(this.gameObject.transform.position.x - e.x, this.gameObject.transform.position.z - e.z);
                return Laya.Vector2.scalarLength(t) <= 1.8;
            }
        }, {
            key: "npcCanUnlock",
            value: function npcCanUnlock(e) {
                var t = e.aId, a = this.blockConfig.sceneId;
                if (0 == e.type) {
                    if (me.Instance.getPBySceneIdAndAnimalId(a, t)) return !0;
                } else {
                    if (Be.Instance.getPBySceneIdAndAnimalId(a, t)) return !0;
                }
                return !1;
            }
        }, {
            key: "refreshNPCTarget",
            value: function refreshNPCTarget(e) {
                console.log("refreshNPCTarget s1:" + e);
                var t = this.warehouseMapConfig.getNPCByAnimalId(e);
                if (t) {
                    console.log("refreshNPCTarget s2");
                    var _a141 = this.blockConfig.sceneId, _i81 = -1;
                    if (0 == t.type) {
                        var _n41 = null;
                        for (var _t191 in me.Instance.pastureInfoDic) {
                            var _o35 = me.Instance.pastureInfoDic[_t191];
                            if (_o35 && _o35.treeClear && _o35.PastureConfig && _o35.PastureConfig.animalConfig.id == e) {
                                var _e195 = ea.Instance.baseMapConfigDic[_t191];
                                if (_e195 && _e195.sceneId == _a141) {
                                    var _e196 = _o35.PastureConfig, _t192 = new Laya.Vector2(_e196.x - this.rootModel.transform.position.x, _e196.z - this.rootModel.transform.position.z), _a142 = Laya.Vector2.scalarLength(_t192);
                                    _n41 ? _a142 < _i81 && (_n41 = _o35, _i81 = _a142) : (_n41 = _o35, _i81 = _a142);
                                }
                            }
                        }
                        if (_n41) {
                            console.log("refreshNPCTarget s3"), t.targetBlockKey = _n41.k;
                            var _e197 = this.npcControllerDic[t.id];
                            if (_e197) {
                                console.log("refreshNPCTarget s4");
                                var _a143 = me.Instance.getPControllerByKey(t.targetBlockKey);
                                _e197.setTargetPasture(_a143);
                            }
                        }
                    } else {
                        var _n42 = null;
                        for (var _t193 in Be.Instance.farmInfoDic) {
                            var _o36 = Be.Instance.farmInfoDic[_t193];
                            if (_o36 && _o36.treeClear && _o36.Config && _o36.Config.Config.id == e) {
                                var _e198 = ea.Instance.baseMapConfigDic[_t193];
                                if (_e198 && _e198.sceneId == _a141) {
                                    var _e199 = _o36.Config, _t194 = new Laya.Vector2(_e199.x - this.rootModel.transform.position.x, _e199.z - this.rootModel.transform.position.z), _a144 = Laya.Vector2.scalarLength(_t194);
                                    _n42 ? _a144 < _i81 && (_n42 = _o36, _i81 = _a144) : (_n42 = _o36, _i81 = _a144);
                                }
                            }
                        }
                        if (_n42) {
                            console.log("refreshNPCTarget s3"), t.targetBlockKey = _n42.k;
                            var _e200 = this.npcControllerDic[t.id];
                            if (_e200) {
                                console.log("refreshNPCTarget s4");
                                var _a145 = Be.Instance.getPControllerByKey(t.targetBlockKey);
                                _e200.setTargetFarm(_a145);
                            }
                        }
                    }
                }
            }
        }, {
            key: "getSellAmount",
            value: function getSellAmount(e) {
                var t = e, a = t.toString().length, i = Math.pow(10, a), n = Math.floor(.013 * i);
                return n < 3 && (n = 3), n > t && (n = t), n;
            }
        }, {
            key: "onCharacterEnterBlock",
            value: function onCharacterEnterBlock() {
                this.mEnableChildCheck = !0, this.warehouseMapConfig.isCollectAllWarehouse ? (ct.Instance.show(2), 
                rt.Instance.show(this)) : (this.showDialog = !1, this.collectWarehouseState = 0), 
                "-2_5" == this.blockConfig.Key && Ue.Instance.completedGuide(17);
            }
        }, {
            key: "onCharacterExitBlock",
            value: function onCharacterExitBlock() {
                this.mEnableChildCheck = !1, this.warehouseMapConfig.isCollectAllWarehouse && (ct.Instance.hide(), 
                rt.Instance.hide());
            }
        }, {
            key: "collectAllAnimalWithoutAnimation",
            value: function collectAllAnimalWithoutAnimation() {
                if (Ue.Instance.GoToWarehouseKey && Ue.Instance.GoToWarehouseKey == this.warehouseMapConfig.K && Ue.Instance.completedGoToWarehouse(), 
                this.npcControllerDic) {
                    for (var _e201 in this.npcControllerDic) {
                        var _t195 = this.npcControllerDic[_e201];
                        if (_t195) {
                            var _e202 = _t195.npcData.amount;
                            if (_e202 > 0) {
                                _t195.npcData.amount = 0, _e202 >= this.CurrentCapacity && _t195.npcData.updateSettleTimeStamp();
                                var _a146 = _t195.npcConfig.aId;
                                Ee.Instance.addProductAmount(_a146, _e202);
                            }
                        }
                    }
                    yt.Instance.hide();
                }
                this.onRefreshStore();
            }
        }, {
            key: "getTotalProgress",
            value: function getTotalProgress() {
                var e = 0;
                if (this.npcControllerDic) {
                    var _t196 = 0;
                    for (var _e203 in this.npcControllerDic) {
                        var _a147 = this.npcControllerDic[_e203];
                        if (_a147) {
                            _t196 += _a147.npcData.amount / this.CurrentCapacity / 3;
                        }
                    }
                    e = e += _t196;
                }
                return e;
            }
        }, {
            key: "collectAllAnimal",
            value: function collectAllAnimal() {
                Ue.Instance.GoToWarehouseKey && Ue.Instance.GoToWarehouseKey == this.warehouseMapConfig.K && Ue.Instance.completedGoToWarehouse();
                var e = 0;
                if (this.npcControllerDic) {
                    for (var _t197 in this.npcControllerDic) {
                        var _a148 = this.npcControllerDic[_t197];
                        if (_a148) {
                            var _t198 = _a148.npcData.amount;
                            if (_t198 > 0) {
                                e++, _a148.npcData.amount = 0, _t198 >= this.CurrentCapacity && _a148.npcData.updateSettleTimeStamp();
                                var _i82 = _a148.npcConfig.id, _n43 = _a148.npcConfig.type;
                                this.collectAnimation3D(_n43, _i82, _a148.npcConfig.aId, _t198);
                            }
                        }
                    }
                    yt.Instance.hide();
                }
                this.onRefreshStore(), e <= 0 ? this.collectComplete() : Laya.timer.once(1e3, this, this.collectComplete);
            }
        }, {
            key: "collectAnimation3D",
            value: function collectAnimation3D(e, t, a, i) {
                var _this35 = this;
                var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
                var o = this.npcCollectArrayDic[t];
                if (!o) if (0 == e) {
                    var _e204 = Jt.Instance.AnimalConfig.getItem(a.toString());
                    if (_e204) {
                        var _a149 = _e204.animalModel;
                        o = new Array(12);
                        for (var _e205 = 0; _e205 < 12; _e205++) {
                            var _t199 = Laya.MeshSprite3D.instantiate(_a149, this.rootModel, !1);
                            _t199.getChildByName("model").getComponent(Laya.Animator).speed = 0, _t199.getChildByName("model").getChildByName("dw").skinnedMeshRenderer.material = Ze.adultAnimalMaterial;
                            var _i83 = new Laya.Vector3(0, 0, -.37);
                            _t199.transform.localPosition = _i83, _t199.transform.localScale = new Laya.Vector3(Ze.adultAnimalScale, Ze.adultAnimalScale, Ze.adultAnimalScale), 
                            _t199.active = !1, _t199.transform.localRotationEulerY = 250, o[_e205] = _t199;
                        }
                        this.npcCollectArrayDic[t] = o;
                    }
                } else {
                    var _e206 = Jt.Instance.CropsConfig.getItem(a.toString());
                    if (_e206) {
                        var _a150 = _e206.fruitModel;
                        o = new Array(12);
                        for (var _e207 = 0; _e207 < 12; _e207++) {
                            var _t200 = Laya.MeshSprite3D.instantiate(_a150, this.rootModel, !1), _i84 = new Laya.Vector3(0, 0, -.37);
                            _t200.transform.localPosition = _i84, _t200.transform.localScale = new Laya.Vector3(1.5, 1.5, 1.5), 
                            _t200.active = !1, o[_e207] = _t200;
                        }
                        this.npcCollectArrayDic[t] = o;
                    }
                }
                if (o) {
                    (function() {
                        var e = 6, t = i / e, s = Math.floor(t), r = i - s * e;
                        var _loop4 = function _loop4(_t201) {
                            var e = o[_t201];
                            if (e) {
                                var _i85 = new Laya.Vector3(0, 0, -.37);
                                if (e.transform.localPosition = _i85, e.active = !0, n) {
                                    var _o37 = _this35;
                                    Laya.timer.frameOnce(4 * _t201, _this35, function() {
                                        _o37.flyFromWarehouse(e, _i85, _t201, a, s, n);
                                    });
                                } else if (0 == _t201) _this35.flyFromWarehouse(e, _i85, _t201, a, s + r, n); else {
                                    var _o38 = _this35;
                                    Laya.timer.frameOnce(4 * _t201, _this35, function() {
                                        _o38.flyFromWarehouse(e, _i85, _t201, a, s, n);
                                    });
                                }
                            }
                        };
                        for (var _t201 = 0; _t201 < e; _t201++) {
                            _loop4(_t201);
                        }
                    })();
                }
            }
        }, {
            key: "flyFromWarehouse",
            value: function flyFromWarehouse(e, t, a, i, n) {
                var o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
                var s = a % 2 == 0 ? -1 : 1, l = r.randomFloatNum(.1, .6) * s, c = Math.random() - .5, h = new Laya.Vector3(t.x + l, -.05, t.z + c), d = [], m = new Laya.Vector3(.5 * (t.x + h.x), 1, .5 * (t.z + h.z));
                d.push(t), d.push(m), d.push(h);
                var g = re.CreateBezierPoints(d, 29), u = 0, p = function p() {
                    if (u > g.length - 1) {
                        if (Laya.timer.clearAll(e), !o) {
                            var _t202 = e.transform.position;
                            Ce.Instance.productIconFlyToUI(_t202, i, 0, !0, n);
                        }
                        e.active = !1, u = 0;
                    } else if (e) {
                        var _t203 = new Laya.Vector3(g[u].x, g[u].y, g[u].z);
                        e.transform.localPosition = _t203, Laya.timer.frameOnce(1, e, p);
                    }
                    u++;
                };
                p();
            }
        }, {
            key: "collectAnimation2D",
            value: function collectAnimation2D() {}
        }, {
            key: "collectComplete",
            value: function collectComplete() {
                this.collectWarehouseState = 2;
            }
        }, {
            key: "updateNPCSellteTimeStampWhenWarehouseIsFull",
            value: function updateNPCSellteTimeStampWhenWarehouseIsFull() {
                if (this.npcControllerDic) for (var _e208 in this.npcControllerDic) {
                    var _t204 = this.npcControllerDic[_e208];
                    if (_t204) {
                        _t204.npcData.amount >= this.CurrentCapacity && _t204.npcData.updateSettleTimeStamp();
                    }
                }
            }
        }, {
            key: "onNPCStoreAnimalAnimation",
            value: function onNPCStoreAnimalAnimation(e) {
                this.rootModel.active && this.collectAnimation3D(e.npcConfig.type, e.npcData.id, e.npcConfig.aId, 0, !0), 
                this.onRefreshStore();
            }
        }, {
            key: "onRefreshStore",
            value: function onRefreshStore() {
                if (this.gameObject && this.warehouseBlockInfo && this.blockConfig.sceneId == Yt.Instance.SceneId && this.progressBoxArray && (dt.Instance.onRefresh(), 
                this.npcControllerDic)) {
                    var _e209 = 0;
                    for (var _t206 in this.npcControllerDic) {
                        var _a152 = this.npcControllerDic[_t206];
                        if (_a152) {
                            _e209 += _a152.npcData.amount / this.CurrentCapacity / 3;
                        }
                    }
                    _e209 >= .9999 && (_e209 = 1);
                    var _t205 = 0, _a151 = this.progressBoxArray.length;
                    for (var _i86 = 0; _i86 < _a151; _i86++) {
                        var _n44 = this.progressBoxArray[_i86];
                        _n44 && (_t205 = (_i86 + 1) / _a151, _n44.active = _e209 >= _t205);
                    }
                }
            }
        }, {
            key: "settleNPCOffLineCollection",
            value: function settleNPCOffLineCollection() {
                if (this.npcControllerDic) {
                    var _e210 = r.getNowTimestamp();
                    for (var _t207 in this.npcControllerDic) {
                        var _a153 = this.npcControllerDic[_t207];
                        if (_a153 && _e210 > _a153.npcData.sts) {
                            var _t208 = Math.round((_e210 - _a153.npcData.sts) / 1e3);
                            if (_t208 >= 20) {
                                var _e211 = _a153.npcData.getOffLineEfficiency(_a153.npcConfig), _i87 = Math.round(_e211 * _t208);
                                console.log("npc" + _a153.npcData.id), console.log("上次结算时间:" + _a153.npcData.sts), 
                                console.log("结算前仓库对应的储存量为" + _a153.npcData.amount + "个"), console.log("离线" + _t208 + "秒"), 
                                console.log("每秒" + _e211 + "个"), console.log("计算产生" + _i87 + "个动物"), _a153.npcData.amount += _i87, 
                                _a153.npcData.amount >= this.CurrentCapacity && (_a153.npcData.amount = this.CurrentCapacity), 
                                console.log("实际结算后仓库对应的储存量为" + _a153.npcData.amount + "个"), _a153.npcData.updateSettleTimeStamp();
                            }
                        }
                    }
                }
                this.onRefreshStore();
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                this.gameObject = null;
            }
        } ]);
        return Ct;
    }(it);
    var At = /* */ function(_Laya$Script12) {
        _inherits2(At, _Laya$Script12);
        var _super23 = _createSuper2(At);
        function At() {
            var _this36;
            _classCallCheck2(this, At);
            _this36 = _super23.call(this), At.mInstance = _assertThisInitialized2(_this36);
            return _this36;
        }
        _createClass2(At, [ {
            key: "onAwake",
            value: function onAwake() {
                Laya.stage.on(e.REFRESH_BLOCK_UI, this, this.onRefresh), this.initUI(), this.onRefresh();
            }
        }, {
            key: "initUI",
            value: function initUI() {
                this.rootView = this.owner, this.title = this.owner.getChildByName("bgImage").getChildByName("titleLabel"), 
                this.blockImage = this.owner.getChildByName("bgImage").getChildByName("itemImage");
            }
        }, {
            key: "onRefresh",
            value: function onRefresh() {
                this.title && (this.title.text = Ee.Instance.UnlockAmount.toString());
            }
        }, {
            key: "getBlockImagePosition",
            value: function getBlockImagePosition() {
                var e = this.rootView.left, t = sa.Instance.statusBarHeight + this.rootView.top + this.blockImage.top;
                return new Laya.Vector2(e, t);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return At.mInstance;
            }
        } ]);
        return At;
    }(Laya.Script);
    var Lt = /* */ function(_Laya$Script3D8) {
        _inherits2(Lt, _Laya$Script3D8);
        var _super24 = _createSuper2(Lt);
        function Lt() {
            var _this37;
            _classCallCheck2(this, Lt);
            _this37 = _super24.call(this), _this37.d1 = .06, _this37.d2 = .03, _this37.d3 = .015, 
            _this37.h1 = .3, _this37.h2 = .15, _this37.h3 = .075, Lt.mInstance = _assertThisInitialized2(_this37);
            return _this37;
        }
        _createClass2(Lt, [ {
            key: "onAwake",
            value: function onAwake() {
                this.gameObject = this.owner, this.model = this.gameObject.getChildByName("model"), 
                this.gameObject.active = !1;
            }
        }, {
            key: "showAnimation",
            value: function showAnimation(e) {
                this.clear(), this.gameObject.transform.position = e, this.gameObject.active = !0, 
                this.model.transform.localPosition = new Laya.Vector3(0, 0, 0), this.jump1();
            }
        }, {
            key: "jump1",
            value: function jump1() {
                var e = [], t = new Laya.Vector3(0, 0, 0), a = new Laya.Vector3(this.d1, this.h1, -this.d1), i = new Laya.Vector3(2 * this.d1, 0, 2 * -this.d1);
                e.push(t), e.push(a), e.push(i);
                var n = re.CreateBezierPoints(e, 11), o = 0, s = this;
                Laya.timer.frameLoop(1, this, function() {
                    if (o > n.length - 1) Laya.timer.clearAll(s), s.jump2(i), o = 0; else if (s.model) {
                        var _e212 = new Laya.Vector3(n[o].x, n[o].y, n[o].z);
                        s.model.transform.localPosition = _e212;
                    }
                    o++;
                });
            }
        }, {
            key: "jump2",
            value: function jump2(e) {
                var t = [], a = new Laya.Vector3(e.x + this.d2, this.h2, e.z - this.d2), i = new Laya.Vector3(e.x + 2 * this.d2, 0, e.z - 2 * this.d2);
                t.push(e), t.push(a), t.push(i);
                var n = re.CreateBezierPoints(t, 11), o = 0, s = this;
                Laya.timer.frameLoop(1, this, function() {
                    if (o > n.length - 1) Laya.timer.clearAll(s), s.jump3(i), o = 0; else if (s.model) {
                        var _e213 = new Laya.Vector3(n[o].x, n[o].y, n[o].z);
                        s.model.transform.localPosition = _e213;
                    }
                    o++;
                });
            }
        }, {
            key: "jump3",
            value: function jump3(e) {
                var t = [], a = new Laya.Vector3(e.x + this.d3, this.h3, e.z - this.d3), i = new Laya.Vector3(e.x + 2 * this.d3, 0, e.z - 2 * this.d3);
                t.push(e), t.push(a), t.push(i);
                var n = re.CreateBezierPoints(t, 11), o = 0, s = this;
                Laya.timer.frameLoop(1, this, function() {
                    if (o > n.length - 1) Laya.timer.clearAll(s), s.end(), o = 0; else if (s.model) {
                        var _e214 = new Laya.Vector3(n[o].x, n[o].y, n[o].z);
                        s.model.transform.localPosition = _e214;
                    }
                    o++;
                });
            }
        }, {
            key: "end",
            value: function end() {
                var t = !1;
                this.blockImage || (this.blockImage = new Laya.Image("PastureUI/Main/Icon_Block2.png"), 
                this.blockImage.size(72.9, 63.9), t = !0);
                var a = this.model.transform.position;
                var i = new Laya.Vector4();
                pe.Instance.mainCamera.viewport.project(a, pe.Instance.mainCamera.projectionViewMatrix, i);
                var n = i.x / Laya.stage.clientScaleX - .5 * this.blockImage.width, o = i.y / Laya.stage.clientScaleY - .5 * this.blockImage.height;
                this.blockImage.x = n, this.blockImage.y = o, t ? Laya.stage.addChild(this.blockImage) : this.blockImage.visible = !0, 
                this.gameObject.active = !1;
                var s = At.Instance.getBlockImagePosition(), r = Math.round(.8 * Laya.Vector2.scalarLength(new Laya.Vector2(s.x - n, s.y - o))), l = this;
                Laya.Tween.to(this.blockImage, {
                    x: s.x,
                    y: s.y
                }, r, Laya.Ease.linearIn, new Laya.Handler(this.blockImage, function() {
                    l.blockImage.visible = !1, Laya.stage.event(e.REFRESH_BLOCK_UI);
                }));
            }
        }, {
            key: "clear",
            value: function clear() {
                Laya.timer.clearAll(this), this.blockImage && (this.blockImage.visible = !1, Laya.Tween.clearAll(this.blockImage));
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Lt.mInstance;
            }
        } ]);
        return Lt;
    }(Laya.Script3D);
    var St = /* */ function() {
        function St(e, t, a) {
            _classCallCheck2(this, St);
            this.tC = 0, this.s = 0, this.k = e, this.tC = t, this.s = a;
        }
        _createClass2(St, [ {
            key: "State",
            get: function get() {
                return this.s;
            }
        }, {
            key: "treeClear",
            get: function get() {
                return 1 == this.tC;
            }
        }, {
            key: "PastureConfig",
            get: function get() {
                return S.Instance.PastureMapConfigDic[this.k];
            }
        }, {
            key: "clearTrear",
            value: function clearTrear() {
                this.tC = 1, me.Instance.save();
            }
        }, {
            key: "setState",
            value: function setState(e) {
                Ue.Instance.AllGuideIsCompleted || "0_0" == this.k && 2 == this.State && 0 == e && Ue.Instance.completedGuide(2), 
                this.s = e;
            }
        } ], [ {
            key: "save",
            value: function save() {
                me.Instance.save();
            }
        } ]);
        return St;
    }();
    var kt = /* */ function() {
        function kt() {
            _classCallCheck2(this, kt);
            this.cc = 0, this.nDD = {};
        }
        _createClass2(kt, [ {
            key: "CurrentCapacity",
            get: function get() {
                return this.cc;
            }
        }, {
            key: "refreshCurrentCapacity",
            value: function refreshCurrentCapacity(e) {
                e && (this.cc = e.bC + e.gUC * (this.g - 1));
            }
        }, {
            key: "reachedMaxGrade",
            value: function reachedMaxGrade(e) {
                return this.g >= e.gL;
            }
        }, {
            key: "getCurrentUpgradeGold",
            value: function getCurrentUpgradeGold(e) {
                return e.bGC + e.gUGC * (this.g - 1);
            }
        }, {
            key: "getCanVUpgradeCount",
            value: function getCanVUpgradeCount() {
                var e = new Date();
                return e.setTime(this.spt), r.isToday(e) ? 3 - this.sp : 3;
            }
        }, {
            key: "upgrade",
            value: function upgrade(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                if (t) {
                    var _e215 = new Date();
                    _e215.setTime(this.spt), r.isToday(_e215) ? this.sp++ : (this.spt = r.getNowTimestamp(), 
                    this.sp = 1);
                }
                this.g++, this.refreshCurrentCapacity(e), this.save();
            }
        }, {
            key: "npcDataDic",
            get: function get() {
                return this.nDD;
            }
        }, {
            key: "MapConfig",
            get: function get() {
                return qt.Instance.WarehouseConfigDic[this.k];
            }
        }, {
            key: "save",
            value: function save() {
                ce.Instance.save();
            }
        } ], [ {
            key: "createNewInfo",
            value: function createNewInfo(e) {
                var t = new kt();
                t.k = e, t.g = 1, t.spt = r.getNowTimestamp(), t.sp = 0;
                var a = t.MapConfig;
                if (a && !a.isCollectAllWarehouse) {
                    t.cc = a.WarehouseConfig.bC, t.id = Number(a.id);
                    for (var _e216 in a.NPCConfigArrayDIC) {
                        var _i88 = a.NPCConfigArrayDIC[_e216], _n45 = new bt();
                        _n45.id = _i88.id, _n45.spt = r.getNowTimestamp(), _n45.sp = 0, _n45.g = 0, _n45.a = 0, 
                        _n45.cs = 1, _n45.sts = r.getNowTimestamp(), t.nDD[_n45.id] = _n45;
                    }
                    return t;
                }
                return null;
            }
        }, {
            key: "createInfoFromCache",
            value: function createInfoFromCache(e) {
                if (e && e.k && e.nDD) {
                    var _t209 = new kt();
                    _t209.id = Number(e.id), e.spt ? (_t209.spt = Number(e.spt), e.sp ? _t209.sp = Number(e.sp) : _t209.sp = 0) : (_t209.spt = r.getNowTimestamp(), 
                    _t209.sp = 0), _t209.g = Number(e.g), _t209.cc = Number(e.cc), _t209.k = e.k;
                    for (var _a154 in e.nDD) {
                        var _i89 = e.nDD[_a154], _n46 = new bt();
                        _n46.id = Number(_i89.id), _i89.spt ? (_n46.spt = Number(_i89.spt), _i89.sp ? _n46.sp = Number(_i89.sp) : _n46.sp = 0) : (_n46.spt = r.getNowTimestamp(), 
                        _n46.sp = 0), _n46.g = Number(_i89.g), _n46.a = Number(_i89.a), _n46.cs = Number(_i89.cs), 
                        _i89.sts ? _n46.sts = Number(_i89.sts) : _n46.sts = r.getNowTimestamp(), _t209.nDD[_n46.id] = _n46;
                    }
                    return _t209;
                }
                return null;
            }
        } ]);
        return kt;
    }();
    var bt = /* */ function() {
        function bt() {
            _classCallCheck2(this, bt);
            this.cs = 1, this.sts = null;
        }
        _createClass2(bt, [ {
            key: "amount",
            get: function get() {
                return this.a;
            },
            set: function set(e) {
                this.a = e, this.a < 0 && (this.a = 0), Laya.timer.frameOnce(1, this, this.save);
            }
        }, {
            key: "refreshSpeed",
            value: function refreshSpeed(e) {
                this.cs = this.getSpeed(e);
            }
        }, {
            key: "isUnlocked",
            get: function get() {
                return this.g > 0;
            }
        }, {
            key: "isReachedMaxGrade",
            value: function isReachedMaxGrade(e) {
                return this.g >= e.gL;
            }
        }, {
            key: "getSpeed",
            value: function getSpeed(e) {
                return 1 + e.sGUC * (this.g - 1);
            }
        }, {
            key: "getOffLineEfficiency",
            value: function getOffLineEfficiency(e) {
                return (1 + e.sGUC * (this.g - 1)) * e.bOLE;
            }
        }, {
            key: "getUpgradeGold",
            value: function getUpgradeGold(e) {
                return e.bGC + e.gUGC * (this.g - 1);
            }
        }, {
            key: "getCanVUpgradeCount",
            value: function getCanVUpgradeCount() {
                var e = new Date();
                return e.setTime(this.spt), r.isToday(e) ? 3 - this.sp : 3;
            }
        }, {
            key: "upgrade",
            value: function upgrade(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                if (t) {
                    var _e217 = new Date();
                    _e217.setTime(this.spt), r.isToday(_e217) ? this.sp++ : (this.spt = r.getNowTimestamp(), 
                    this.sp = 1);
                }
                this.g++, this.refreshSpeed(e), this.save();
            }
        }, {
            key: "unlock",
            value: function unlock(e) {
                this.g = 1, this.updateSettleTimeStamp(), this.refreshSpeed(e), this.save();
            }
        }, {
            key: "updateSettleTimeStamp",
            value: function updateSettleTimeStamp() {
                this.sts = r.getNowTimestamp(), this.save();
            }
        }, {
            key: "save",
            value: function save() {
                ce.Instance.save();
            }
        } ]);
        return bt;
    }();
    var Bt = /* */ function(_Laya$Script3D9) {
        _inherits2(Bt, _Laya$Script3D9);
        var _super25 = _createSuper2(Bt);
        function Bt() {
            var _this38;
            _classCallCheck2(this, Bt);
            _this38 = _super25.apply(this, arguments), _this38.frameCount = 0, _this38.switchFrame = 132, 
            _this38.state = 0;
            return _this38;
        }
        _createClass2(Bt, [ {
            key: "onAwake",
            value: function onAwake() {
                var e = this.owner;
                this.animator = e.getComponent(Laya.Animator), this.animator.getControllerLayer(1).defaultWeight = 0, 
                this.animator.getControllerLayer(0).defaultWeight = 1, this.playIdle();
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (this.frameCount >= this.switchFrame) {
                    this.frameCount = 0, Math.random() < .5 ? (this.switchFrame = 264, this.playIdle()) : (this.switchFrame = 92, 
                    this.playWaveHand());
                }
                this.frameCount++;
            }
        }, {
            key: "playIdle",
            value: function playIdle() {
                if (0 != this.state) {
                    this.state = 0;
                    var _e218 = "daiji";
                    this.animator.play(_e218, 0, 0);
                }
            }
        }, {
            key: "playWaveHand",
            value: function playWaveHand() {
                if (1 != this.state) {
                    this.state = 1;
                    var _e219 = "xiuxiandaiji";
                    this.animator.play(_e219, 0, 0);
                }
            }
        } ]);
        return Bt;
    }(Laya.Script3D);
    var Tt = /* */ function() {
        function Tt() {
            _classCallCheck2(this, Tt);
        }
        _createClass2(Tt, [ {
            key: "getCurrentFruitAmount",
            value: function getCurrentFruitAmount(e) {
                var t = Math.floor((r.getNowTimestamp() - this.lCT) / 1e3), a = e.fruitConfig.fCD, i = Math.floor(t / a), n = e.fruitConfig.mxa;
                return i = i > n ? n : i;
            }
        }, {
            key: "completedPickFruit",
            value: function completedPickFruit() {
                this.lCT = r.getNowTimestamp(), this.save();
            }
        }, {
            key: "rapidGrowth",
            value: function rapidGrowth() {
                this.lCT = 0, this.save();
            }
        }, {
            key: "MapConfig",
            get: function get() {
                return Pe.Instance.FruitTreeMapConfigDic[this.k];
            }
        }, {
            key: "save",
            value: function save() {
                ve.Instance.save();
            }
        } ], [ {
            key: "createNewInfo",
            value: function createNewInfo(e) {
                var t = new Tt();
                t.k = e, t.lCT = 0;
                var a = t.MapConfig;
                return a ? (t.id = Number(a.id), t) : null;
            }
        }, {
            key: "createInfoFromCache",
            value: function createInfoFromCache(e) {
                if (e && e.k) {
                    var _t210 = new Tt();
                    return _t210.id = Number(e.id), _t210.lCT = Number(e.lCT), _t210.k = e.k, _t210;
                }
                return null;
            }
        } ]);
        return Tt;
    }();
    var Mt = /* */ function(_it5) {
        _inherits2(Mt, _it5);
        var _super26 = _createSuper2(Mt);
        function Mt() {
            var _this39;
            _classCallCheck2(this, Mt);
            _this39 = _super26.apply(this, arguments), _this39.needCreateAnimation = !1, _this39.treeModeBaseRotationEulerY = 180, 
            _this39.frameCount = 0, _this39.checkFrequency = 4, _this39.currentShowFruitAmount = -1, 
            _this39.startPickFruitTotalAmount = 20;
            return _this39;
        }
        _createClass2(Mt, [ {
            key: "onAwake",
            value: function onAwake() {
                this.mapOutModel();
            }
        }, {
            key: "mapOutModel",
            value: function mapOutModel() {
                var e = ve.Instance.FruitTree, t = Laya.MeshSprite3D.instantiate(e, this.rootModel, !1);
                t.transform.localPosition = new Laya.Vector3(0, 0, 0), t.transform.localRotationEuler = new Laya.Vector3(0, this.treeModeBaseRotationEulerY, 0), 
                t.active = !0, this.treeModel = t.getChildByName("treeModel"), this.fruitPointArray = new Array(this.fruitTreeMapConfig.fruitConfig.mxa), 
                this.fruitArray = new Array(this.fruitTreeMapConfig.fruitConfig.mxa);
                var a = t.getChildByName("treeModel").getChildByName("fruitPoint");
                this.animator = t.getChildByName("treeModel").getComponent(Laya.Animator), this.animator.speed = 0;
                for (var _e220 = 0; _e220 < this.fruitPointArray.length; _e220++) {
                    if (this.fruitPointArray[_e220] = a.getChildByName("f" + _e220), this.fruitPointArray) {
                        var _t211 = this.fruitTreeMapConfig.fruitConfig.fruitModel, _a155 = Laya.MeshSprite3D.instantiate(_t211, this.fruitPointArray[_e220]);
                        _a155.transform.localPosition = new Laya.Vector3(0, 0, 0), _a155.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), 
                        _a155.active = !1, this.fruitArray[_e220] = _a155;
                    } else console.log("水果点未找到f" + _e220);
                }
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (Yt.Instance.AllBodyActionMode != X.ShakingFruitTree) {
                    if (this.frameCount >= this.checkFrequency) {
                        this.frameCount = 0;
                        var _e221 = this.fruitTreeBlockInfo.getCurrentFruitAmount(this.fruitTreeMapConfig);
                        this.refreshFruitAmount(_e221);
                    }
                    this.frameCount++;
                }
            }
        }, {
            key: "refreshFruitAmount",
            value: function refreshFruitAmount(e) {
                var _this40 = this;
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                if (e != this.currentShowFruitAmount || t) {
                    var _loop5 = function _loop5(_a156) {
                        var i = _this40.fruitArray[_a156];
                        if (i && i.transform) if (_a156 < e) {
                            if (!i.active || t) {
                                var _e222 = .1, _t212 = _this40.fruitPointArray[_a156];
                                _t212 && _t212.addChild(i), i.transform.localPosition = new Laya.Vector3(0, 0, 0), 
                                i.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), i.transform.localScale = new Laya.Vector3(_e222, _e222, _e222), 
                                i.active = !0;
                                var _n47 = 1.3, _o39 = 1;
                                Laya.Tween.to(i.transform, {
                                    localScaleX: _n47,
                                    localScaleY: _n47,
                                    localScaleZ: _n47
                                }, 200, Laya.Ease.linearIn, new Laya.Handler(_this40, function() {
                                    i && i.transform && Laya.Tween.to(i.transform, {
                                        localScaleX: _o39,
                                        localScaleY: _o39,
                                        localScaleZ: _o39
                                    }, 50, Laya.Ease.linearIn);
                                }));
                            }
                        } else i.active = !1;
                    };
                    for (var _a156 = 0; _a156 < this.fruitArray.length; _a156++) {
                        _loop5(_a156);
                    }
                    this.currentShowFruitAmount = e, ct.Instance.onRefresh();
                }
            }
        }, {
            key: "onCharacterEnterBlock",
            value: function onCharacterEnterBlock() {
                ct.Instance.show(3, this);
            }
        }, {
            key: "onCharacterExitBlock",
            value: function onCharacterExitBlock() {
                ct.Instance.hide();
            }
        }, {
            key: "refreshCurrentStartPickFruitTotalAmount",
            value: function refreshCurrentStartPickFruitTotalAmount() {
                this.startPickFruitTotalAmount = this.currentShowFruitAmount;
            }
        }, {
            key: "startShakeTree",
            value: function startShakeTree() {
                this.animator.speed = 1;
            }
        }, {
            key: "pauseShakeTree",
            value: function pauseShakeTree() {
                this.animator.speed = 0;
            }
        }, {
            key: "completedPickFruit",
            value: function completedPickFruit() {
                this.animator.speed = 0, this.treeModel.transform.localRotationEuler = new Laya.Vector3(0, this.treeModeBaseRotationEulerY, 0), 
                this.fruitTreeBlockInfo.completedPickFruit(), Laya.timer.frameOnce(20, this, this.modifyRotation);
            }
        }, {
            key: "breakOffCollectingFruit",
            value: function breakOffCollectingFruit() {
                this.animator.speed = 0, this.treeModel.transform.localRotationEuler = new Laya.Vector3(0, this.treeModeBaseRotationEulerY, 0), 
                Laya.timer.frameOnce(20, this, this.modifyRotation);
                var e = this.fruitTreeBlockInfo.getCurrentFruitAmount(this.fruitTreeMapConfig);
                this.refreshFruitAmount(e, !0);
            }
        }, {
            key: "modifyRotation",
            value: function modifyRotation() {
                this.animator.speed = 0, this.treeModel.transform.localRotationEuler = new Laya.Vector3(0, this.treeModeBaseRotationEulerY, 0), 
                ct.Instance.show(3, this);
            }
        }, {
            key: "rapidGrowth",
            value: function rapidGrowth() {
                this.fruitTreeBlockInfo.rapidGrowth();
            }
        }, {
            key: "fruitIsClear",
            value: function fruitIsClear() {
                return this.currentShowFruitAmount <= 0;
            }
        }, {
            key: "onPickOneFruit",
            value: function onPickOneFruit() {
                if (this.currentShowFruitAmount > 0) {
                    this.currentShowFruitAmount--;
                    var _e223 = this.fruitArray[this.currentShowFruitAmount], _t213 = _e223.transform.position, _a157 = _e223.transform.position.y - .054, _i90 = .02, _n48 = Math.round(_a157 / _i90);
                    this.rootModel.addChild(_e223);
                    var _o40 = this.fruitPointArray[this.currentShowFruitAmount];
                    _o40 ? _e223.transform.localRotationEuler = _o40.transform.localRotationEuler : console.log("f" + this.currentShowFruitAmount + "为空");
                    var _s32 = function _s32() {
                        if (--_n48 <= 0) {
                            var _a158 = .054;
                            _e223.transform.position = new Laya.Vector3(_t213.x, _a158, _t213.z);
                            var _i91 = [], _n49 = _e223.transform.position, _o41 = _e223.transform.localPosition;
                            0 == (_o41 = new Laya.Vector3(_o41.x, 0, _o41.z)).x && 0 == _o41.y && (_o41.x = -1);
                            var _s33 = .1 + .1 * Math.random();
                            Laya.Vector3.normalize(_o41, _o41);
                            var _r16 = .3 * Math.random() + .2, _l19 = new Laya.Vector3(_n49.x + 2 * _s33 * _o41.x, _a158, _n49.z + 2 * _s33 * _o41.z), _c15 = new Laya.Vector3(.5 * (_n49.x + _l19.x), _r16, .5 * (_n49.z + _l19.z));
                            _i91.push(_n49), _i91.push(_c15), _i91.push(_l19);
                            var _h8 = 15, _d5 = re.CreateBezierPoints(_i91, _h8), _m7 = 0, _g2 = function _g2() {
                                if (_m7 > _d5.length - 1) _m7 = 0, _e223.transform.position = _l19; else if (_e223) {
                                    var _t214 = new Laya.Vector3(_d5[_m7].x, _d5[_m7].y, _d5[_m7].z);
                                    _e223.transform.position = _t214, Laya.timer.frameOnce(1, this, _g2);
                                }
                                _m7++;
                            };
                            _g2();
                        } else {
                            var _a159 = _t213.y - _i90;
                            _e223.transform.position = new Laya.Vector3(_t213.x, _a159, _t213.z), Laya.timer.frameOnce(1, this, _s32);
                        }
                    };
                    _s32(), Fe.Instance.onUpdateProgress((this.startPickFruitTotalAmount - this.currentShowFruitAmount) / this.startPickFruitTotalAmount), 
                    this.currentShowFruitAmount <= 0 && (this.completedPickFruit(), Yt.Instance.completedPickFruit(), 
                    this.fruitFlyToUI(), Fe.Instance.cancelMove());
                } else this.completedPickFruit(), Yt.Instance.completedPickFruit(), Fe.Instance.cancelMove();
            }
        }, {
            key: "fruitFlyToUI",
            value: function fruitFlyToUI() {
                for (var _e224 = 0; _e224 < this.fruitArray.length; _e224++) {
                    var _t215 = this.fruitArray[_e224];
                    _t215 && _t215.active && (Ce.Instance.productIconFlyToUI(_t215.transform.position, this.fruitTreeMapConfig.fruitConfig.id, 1), 
                    _t215.active = !1);
                }
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                this.gameObject = null;
            }
        } ]);
        return Mt;
    }(it);
    var Pt = /* */ function() {
        function Pt() {
            _classCallCheck2(this, Pt);
        }
        _createClass2(Pt, [ {
            key: "getCurrentHoneyAmount",
            value: function getCurrentHoneyAmount(e) {
                var t = Math.floor((r.getNowTimestamp() - this.lCT) / 1e3), a = e.honeyConfig.CD, i = Math.floor(t / a), n = e.honeyConfig.mxa;
                return i = i > n ? n : i;
            }
        }, {
            key: "completedCollectHoney",
            value: function completedCollectHoney() {
                this.lCT = r.getNowTimestamp(), this.save();
            }
        }, {
            key: "rapidGrowth",
            value: function rapidGrowth() {
                this.lCT = 0, this.save();
            }
        }, {
            key: "MapConfig",
            get: function get() {
                return Se.Instance.BeehiveMapConfigDic[this.k];
            }
        }, {
            key: "save",
            value: function save() {
                ke.Instance.save();
            }
        } ], [ {
            key: "createNewInfo",
            value: function createNewInfo(e) {
                var t = new Pt();
                t.k = e, t.lCT = 0;
                var a = t.MapConfig;
                return a ? (t.id = Number(a.id), t) : null;
            }
        }, {
            key: "createInfoFromCache",
            value: function createInfoFromCache(e) {
                if (e && e.k) {
                    var _t216 = new Pt();
                    return _t216.id = Number(e.id), _t216.lCT = Number(e.lCT), _t216.k = e.k, _t216;
                }
                return null;
            }
        } ]);
        return Pt;
    }();
    var vt = /* */ function(_it6) {
        _inherits2(vt, _it6);
        var _super27 = _createSuper2(vt);
        function vt() {
            var _this41;
            _classCallCheck2(this, vt);
            _this41 = _super27.apply(this, arguments), _this41.needCreateAnimation = !1, _this41.frameCount = 0, 
            _this41.checkFrequency = 15, _this41.currentHaveHoneyAmount = -1, _this41.isCompletedCollect = !1;
            return _this41;
        }
        _createClass2(vt, [ {
            key: "onAwake",
            value: function onAwake() {
                this.mapOutModel();
            }
        }, {
            key: "mapOutModel",
            value: function mapOutModel() {
                var e = ke.Instance.BeehiveTree, t = Laya.MeshSprite3D.instantiate(e, this.rootModel, !1);
                t.transform.localPosition = new Laya.Vector3(0, 0, 0), t.active = !0, t.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), 
                this.treeModel = t.getChildByName("tree"), this.beehiveModel = this.treeModel.getChildByName("fengwo"), 
                this.honeyCreatePoint = this.beehiveModel.getChildByName("honeyCreatePoint"), this.honeyUnderBeehive = this.beehiveModel.getChildByName("gn_fengwo_01"), 
                this.animator = this.beehiveModel.getComponent(Laya.Animator), this.animator.speed = 0;
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (Yt.Instance.AllBodyActionMode != X.CollectHoney) {
                    if (this.frameCount >= this.checkFrequency) {
                        this.frameCount = 0;
                        var _e225 = this.beehiveBlockInfo.getCurrentHoneyAmount(this.beehiveMapConfig);
                        this.refreshHoneyAmount(_e225);
                    }
                    this.frameCount++;
                }
            }
        }, {
            key: "refreshHoneyAmount",
            value: function refreshHoneyAmount(e) {
                e != this.currentHaveHoneyAmount && (e < this.beehiveMapConfig.honeyConfig.mxa ? this.honeyUnderBeehive.active = !1 : (this.honeyUnderBeehive.active = !0, 
                this.isCompletedCollect = !1, this.animator.speed = 1), this.currentHaveHoneyAmount = e, 
                ct.Instance.onRefresh());
            }
        }, {
            key: "onCharacterEnterBlock",
            value: function onCharacterEnterBlock() {
                ct.Instance.show(4, null, this);
            }
        }, {
            key: "onCharacterExitBlock",
            value: function onCharacterExitBlock() {
                ct.Instance.hide();
            }
        }, {
            key: "refreshCurrentStartPickFruitTotalAmount",
            value: function refreshCurrentStartPickFruitTotalAmount() {
                var e = this.beehiveBlockInfo.getCurrentHoneyAmount(this.beehiveMapConfig);
                this.refreshHoneyAmount(e);
            }
        }, {
            key: "startCollectHoney",
            value: function startCollectHoney() {
                this.animator.speed = 1;
            }
        }, {
            key: "pauseCollectHoney",
            value: function pauseCollectHoney() {
                this.animator.speed = 0;
            }
        }, {
            key: "completedCollectHoney",
            value: function completedCollectHoney() {
                this.isCompletedCollect = !0, this.beehiveBlockInfo.completedCollectHoney(), this.animator.speed = 0, 
                this.beehiveModel.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), this.honeyUnderBeehive.active = !1, 
                Laya.timer.frameOnce(20, this, this.completedModifyRotation), 60001 != this.beehiveMapConfig.id || Ue.Instance.AllGuideIsCompleted || Ue.Instance.completedGuide(5), 
                Fe.Instance.banSomeTimeMove();
            }
        }, {
            key: "breakOffCollectingHoney",
            value: function breakOffCollectingHoney() {
                if (vt.honeyArray) for (var _e226 = 0; _e226 < vt.honeyArray.length; _e226++) {
                    var _t217 = vt.honeyArray[_e226];
                    _t217 && _t217.active && (_t217.active = !1);
                }
                this.animator.speed = 1, this.beehiveModel.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), 
                Laya.timer.frameOnce(20, this, this.modifyRotation);
            }
        }, {
            key: "completedModifyRotation",
            value: function completedModifyRotation() {
                this.beehiveModel.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), Laya.Browser.onVVMiniGame || ct.Instance.show(4, null, this);
            }
        }, {
            key: "modifyRotation",
            value: function modifyRotation() {
                this.beehiveModel.transform.localRotationEuler = new Laya.Vector3(0, 0, 0), ct.Instance.show(4, null, this);
            }
        }, {
            key: "rapidGrowth",
            value: function rapidGrowth() {
                this.beehiveBlockInfo.rapidGrowth();
            }
        }, {
            key: "honeyIsClear",
            value: function honeyIsClear() {
                return this.currentHaveHoneyAmount <= 0;
            }
        }, {
            key: "initHoneyModelArray",
            value: function initHoneyModelArray() {
                vt.honeyArray = new Array(20);
                var e = this.honeyCreatePoint.transform.position;
                for (var _t218 = 0; _t218 < vt.honeyArray.length; _t218++) {
                    var _a160 = this.beehiveMapConfig.honeyConfig.honeyModel, _i92 = Laya.MeshSprite3D.instantiate(_a160, Wt.Scene3D, !1, e);
                    _i92.active = !1, vt.honeyArray[_t218] = _i92;
                }
            }
        }, {
            key: "collectOneHoney",
            value: function collectOneHoney() {
                if (!this.isCompletedCollect) if (this.currentHaveHoneyAmount > 0) {
                    this.currentHaveHoneyAmount--, vt.honeyArray || this.initHoneyModelArray();
                    var _e227 = vt.honeyArray[this.currentHaveHoneyAmount];
                    if (_e227) {
                        var _t219 = this.honeyCreatePoint.transform.position;
                        _e227.transform.localRotationEuler = new Laya.Vector3(r.randomFloatNum(0, 360), r.randomFloatNum(0, 360), r.randomFloatNum(0, 360)), 
                        _e227.transform.position = new Laya.Vector3(_t219.x, _t219.y, _t219.z - .3 * Math.random()), 
                        _e227.active = !0;
                        var _a161 = this.beehiveMapConfig.honeyConfig.mxa;
                        Fe.Instance.onUpdateProgress((_a161 - this.currentHaveHoneyAmount) / _a161);
                        var _i93 = _e227.transform.position.y, _n50 = .03, _o42 = Math.round(_i93 / _n50), _s34 = _e227.transform.position, _l20 = function _l20() {
                            if (--_o42 <= 0) {
                                var _t220 = .054;
                                _e227.transform.position = new Laya.Vector3(_s34.x, _t220, _s34.z);
                            } else {
                                var _t221 = _s34.y - _n50;
                                _e227.transform.position = new Laya.Vector3(_s34.x, _t221, _s34.z), Laya.timer.frameOnce(1, this, _l20);
                            }
                        };
                        _l20();
                    }
                    this.currentHaveHoneyAmount <= 0 && (this.completedCollectHoney(), Yt.Instance.completedCollectHoney(), 
                    this.honeyFlyToUI(), Laya.Browser.onVVMiniGame || ct.Instance.show(4, null, this));
                } else this.completedCollectHoney(), Yt.Instance.completedCollectHoney();
            }
        }, {
            key: "honeyFlyToUI",
            value: function honeyFlyToUI() {
                var _this42 = this;
                var _loop6 = function _loop6(_e228) {
                    var t = vt.honeyArray[_e228];
                    if (t && t.active) {
                        var _a162 = function _a162() {
                            Ce.Instance.productIconFlyToUI(t.transform.position, this.beehiveMapConfig.honeyConfig.id, 2), 
                            t.active = !1;
                        };
                        Laya.timer.frameOnce(3 * _e228, _this42, _a162);
                    }
                };
                for (var _e228 = 0; _e228 < vt.honeyArray.length; _e228++) {
                    _loop6(_e228);
                }
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                this.gameObject = null;
            }
        } ]);
        return vt;
    }(it);
    var _t = /* */ function(_Laya$Script3D10) {
        _inherits2(_t, _Laya$Script3D10);
        var _super28 = _createSuper2(_t);
        function _t() {
            _classCallCheck2(this, _t);
            return _super28.apply(this, arguments);
        }
        _createClass2(_t, [ {
            key: "onDestroy",
            value: function onDestroy() {
                Zt.Instance.onDestroySceneRoot();
            }
        } ]);
        return _t;
    }(Laya.Script3D);
    var xt = /* */ function() {
        function xt() {
            _classCallCheck2(this, xt);
            this.sModelConfig = null;
        }
        _createClass2(xt, [ {
            key: "ModelConfig",
            get: function get() {
                return this.sModelConfig || (this.sModelConfig = Jt.Instance.SwitchSceneIslandModelConfig.getItem(this.id.toString())), 
                this.sModelConfig;
            }
        }, {
            key: "K",
            get: function get() {
                return this.x + "_" + this.z;
            }
        } ]);
        return xt;
    }();
    var Dt = /* */ function() {
        function Dt() {
            _classCallCheck2(this, Dt);
            this.name = "SwitchSceneIslandMapConfig", this.switchSceneMapConfigArray = new Array(), 
            this.switchSceneMapConfigDic = {};
        }
        _createClass2(Dt, [ {
            key: "Path",
            get: function get() {
                return m.localConfig + this.name + Zt.Instance.SceneIndex + ".txt";
            }
        }, {
            key: "loadConfig",
            value: function loadConfig() {
                var e = this.Path;
                Laya.loader.load(e, Laya.Handler.create(this, this.onLoaclLoded), null, Laya.Loader.TEXT);
            }
        }, {
            key: "onLoaclLoded",
            value: function onLoaclLoded() {
                this.switchSceneMapConfigArray = new Array(), this.switchSceneMapConfigDic = {};
                var t = this.Path, a = Laya.loader.getRes(t), i = JSON.parse(a).switchSceneMap;
                var _iterator14 = _createForOfIteratorHelper2(i), _step14;
                try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
                        var _e229 = _step14.value;
                        if (_e229) {
                            var _t222 = new xt();
                            _t222.id = _e229.i, _t222.x = -Number(_e229.x), _t222.z = Number(_e229.z);
                            var _a163 = _t222.K, _i94 = ea.Instance.baseMapConfigDic[_a163];
                            _i94 && (_i94.functionType = n.SwitchScenePoint, _i94.functionConfig = _t222), this.switchSceneMapConfigArray.push(_t222), 
                            this.switchSceneMapConfigDic[_a163] = _t222;
                        }
                    }
                } catch (err) {
                    _iterator14.e(err);
                } finally {
                    _iterator14.f();
                }
                Laya.stage.event(e.CONFIG_PROGRESS, this.name);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Dt.instance || (Dt.instance = new Dt()), Dt.instance;
            }
        } ]);
        return Dt;
    }();
    Dt.instance = null;
    var Ot = /* */ function() {
        function Ot() {
            _classCallCheck2(this, Ot);
            this.isSingle = !0, this.cConfig = null;
        }
        _createClass2(Ot, [ {
            key: "Config",
            get: function get() {
                return this.cConfig || (this.cropsConfigId = 6e3 + this.type, this.cConfig = Jt.Instance.CropsConfig.getItem(this.cropsConfigId.toString())), 
                this.cConfig;
            }
        }, {
            key: "K",
            get: function get() {
                return this.x + "_" + this.z;
            }
        } ]);
        return Ot;
    }();
    var Vt = /* */ function() {
        function Vt() {
            _classCallCheck2(this, Vt);
            this.name = "FarmMapConfig", this.FarmMapConfigArray = new Array(), this.FarmMapConfigDic = {};
        }
        _createClass2(Vt, [ {
            key: "Path",
            get: function get() {
                return m.localConfig + this.name + Zt.Instance.SceneIndex + ".txt";
            }
        }, {
            key: "loadConfig",
            value: function loadConfig() {
                var e = this.Path;
                Laya.loader.load(e, Laya.Handler.create(this, this.onLoaclLoded), null, Laya.Loader.TEXT);
            }
        }, {
            key: "onLoaclLoded",
            value: function onLoaclLoded() {
                this.FarmMapConfigArray = new Array(), this.FarmMapConfigDic = {};
                var e = this.Path, t = Laya.loader.getRes(e), a = JSON.parse(t).farmMap;
                var _iterator15 = _createForOfIteratorHelper2(a), _step15;
                try {
                    for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
                        var _e230 = _step15.value;
                        if (_e230) {
                            var _t223 = new Ot();
                            _t223.id = _e230.i, _t223.x = -Number(_e230.x), _t223.z = Number(_e230.z), _t223.type = Number(_e230.t), 
                            _t223.treeClear = Number(_e230.tC);
                            var _a164 = _t223.K, _i95 = ea.Instance.baseMapConfigDic[_a164];
                            _i95 && (_i95.functionType = n.Farm, _i95.functionConfig = _t223), this.FarmMapConfigArray.push(_t223), 
                            this.FarmMapConfigDic[_a164] = _t223;
                        }
                    }
                } catch (err) {
                    _iterator15.e(err);
                } finally {
                    _iterator15.f();
                }
                this.analysisConfig();
            }
        }, {
            key: "analysisConfig",
            value: function analysisConfig() {
                for (var _e231 = 0; _e231 < this.FarmMapConfigArray.length; _e231++) {
                    var _t224 = this.FarmMapConfigArray[_e231], _a165 = _t224.x + "_" + (_t224.z + 1), _i96 = _t224.x + "_" + (_t224.z - 1), _n51 = _t224.x + 1 + "_" + _t224.z, _o43 = _t224.x - 1 + "_" + _t224.z;
                    (this.FarmMapConfigDic[_a165] || this.FarmMapConfigDic[_i96] || this.FarmMapConfigDic[_n51] || this.FarmMapConfigDic[_o43]) && (_t224.isSingle = !1);
                }
                Laya.stage.event(e.CONFIG_PROGRESS, this.name);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Vt.instance || (Vt.instance = new Vt()), Vt.instance;
            }
        } ]);
        return Vt;
    }();
    Vt.instance = null;
    var Gt = /* */ function() {
        function Gt(e, t, a) {
            _classCallCheck2(this, Gt);
            this.tC = 0, this.s = 0, this.k = e, this.tC = t, this.s = a;
        }
        _createClass2(Gt, [ {
            key: "State",
            get: function get() {
                return this.s;
            }
        }, {
            key: "treeClear",
            get: function get() {
                return 1 == this.tC;
            }
        }, {
            key: "Config",
            get: function get() {
                return Vt.Instance.FarmMapConfigDic[this.k];
            }
        }, {
            key: "clearTrear",
            value: function clearTrear() {
                this.tC = 1, Be.Instance.save();
            }
        }, {
            key: "setState",
            value: function setState(e) {
                Ue.Instance.AllGuideIsCompleted || "0_0" == this.k && 2 == this.State && 0 == e && Ue.Instance.completedGuide(2), 
                this.s = e;
            }
        } ], [ {
            key: "save",
            value: function save() {
                Be.Instance.save();
            }
        } ]);
        return Gt;
    }();
    var Nt = /* */ function(_Laya$Script3D11) {
        _inherits2(Nt, _Laya$Script3D11);
        var _super29 = _createSuper2(Nt);
        function Nt() {
            var _this43;
            _classCallCheck2(this, Nt);
            _this43 = _super29.apply(this, arguments), _this43.State = z.Wasteland, _this43.smallScale = new Laya.Vector3(.6, .3, .6), 
            _this43.d1 = .08, _this43.d2 = .08, _this43.h1 = .6, _this43.h2 = .2;
            return _this43;
        }
        _createClass2(Nt, [ {
            key: "refresLand",
            value: function refresLand() {}
        }, {
            key: "initModel",
            value: function initModel() {
                if (!this.plantRoot) {
                    this.cropsId = this.parentFarmBlock.farmBlockConfig.Config.id, 6004 == this.cropsId && (this.smallScale = new Laya.Vector3(.4, .5, .4)), 
                    this.landMesh = this.gameObject.getChildByName("model"), this.landMaterials = this.landMesh.meshRenderer.materials;
                    var _e232 = this.parentFarmBlock.farmBlockConfig.Config, _t225 = _e232.plantModel, _a166 = Laya.MeshSprite3D.instantiate(_t225, this.gameObject, !1);
                    _a166.transform.localPosition = new Laya.Vector3(0, 0, 0);
                    var _i97 = 360 * Math.random();
                    _a166.transform.localRotationEuler = new Laya.Vector3(0, _i97, 0), this.plantRoot = _a166, 
                    this.plantModel = _a166.getChildByName("model");
                    var _n52 = this.plantModel.getChildAt(0);
                    this.plantMaterials = _n52.meshRenderer.materials, this.plantRoot.active = !0;
                    var _o44 = _e232.fruitModel, _s35 = _a166.getChildByName("points"), _r17 = _s35.numChildren;
                    if (_r17 > 0) {
                        this.fruitArray = new Array(_r17), this.fruitPointArray = new Array(_r17);
                        for (var _e233 = 0; _e233 < _r17; _e233++) {
                            var _t226 = _s35.getChildByName("p" + _e233);
                            this.fruitPointArray[_e233] = _t226;
                            var _a167 = Laya.MeshSprite3D.instantiate(_o44, _t226, !1);
                            _a167.transform.localPosition = new Laya.Vector3(0, 0, 0), this.fruitArray[_e233] = _a167, 
                            _a167.active = !1;
                        }
                    } else {
                        this.fruitArray = new Array(1);
                        for (var _e234 = 0; _e234 < 1; _e234++) {
                            var _t227 = Laya.MeshSprite3D.instantiate(_o44, _s35, !1);
                            _t227.transform.localPosition = new Laya.Vector3(0, 0, 0), this.fruitArray[_e234] = _t227, 
                            _t227.active = !1;
                        }
                    }
                }
            }
        }, {
            key: "adjustByState",
            value: function adjustByState(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                if (this.State != e) switch (e) {
                  case z.Seedling:
                    this.onSowSeed(t);
                    break;

                  case z.Mature:
                    this.onWatering(t);
                    break;

                  case z.Wasteland:
                    this.onHarvest(t, a);
                }
            }
        }, {
            key: "onSowSeed",
            value: function onSowSeed() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                if (this.State != z.Seedling) {
                    if (this.State = z.Seedling, e) {
                        var _e235 = 500;
                        Laya.timer.once(_e235, this, this.becomeSmall);
                    } else this.becomeSmall(e);
                    6004 == this.cropsId && this.adjustPlantMaterial(!1);
                }
            }
        }, {
            key: "becomeSmall",
            value: function becomeSmall() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                if (this.gameObject && this.State == z.Seedling) {
                    if (this.plantRoot || this.initModel(), this.fruitArray) for (var _e236 = 0; _e236 < this.fruitArray.length; _e236++) {
                        this.fruitArray[_e236].active = !1;
                    }
                    var _t228 = this;
                    e ? (this.plantRoot.transform.localScale = new Laya.Vector3(0, 0, 0), Laya.Tween.to(this.plantRoot.transform, {
                        localScaleX: _t228.smallScale.x,
                        localScaleY: _t228.smallScale.y,
                        localScaleZ: _t228.smallScale.z
                    }, 400, Laya.Ease.backOut)) : this.plantRoot.transform.localScale = _t228.smallScale, 
                    this.plantModel.active = !0;
                }
            }
        }, {
            key: "onWatering",
            value: function onWatering() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                if (this.State != z.Mature) {
                    if (this.State = z.Mature, e) {
                        var _e237 = 250;
                        Laya.timer.once(_e237, this, this.growUp);
                    } else this.growUp(e);
                    6004 == this.cropsId && this.adjustPlantMaterial(e), this.adjustLandMaterial(e);
                }
            }
        }, {
            key: "growUp",
            value: function growUp() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                if (this.gameObject && this.State == z.Mature) {
                    this.plantRoot || this.initModel();
                    var _t229 = this, _a168 = 1;
                    if (e) this.plantRoot.transform.localScale = new Laya.Vector3(0, 0, 0), Laya.Tween.to(this.plantRoot.transform, {
                        localScaleX: _a168,
                        localScaleY: _a168,
                        localScaleZ: _a168
                    }, 1800, Laya.Ease.elasticOut), Laya.timer.once(400, _t229, function() {
                        if (_t229.gameObject && _t229.fruitArray && _t229.fruitPointArray) {
                            var _e238 = 400;
                            for (var _a169 = 0; _a169 < _t229.fruitPointArray.length; _a169++) {
                                var _i98 = _t229.fruitPointArray[_a169], _n53 = _t229.fruitArray[_a169];
                                if (_n53 && _i98) {
                                    _n53.transform.localScale = new Laya.Vector3(1, 1, 1), _n53.transform.localPosition = new Laya.Vector3(0, 0, 0), 
                                    _n53.active = !0;
                                    var _t230 = 1;
                                    _i98.transform.localScale = new Laya.Vector3(0, 0, 0), Laya.Tween.to(_i98.transform, {
                                        localScaleX: _t230,
                                        localScaleY: _t230,
                                        localScaleZ: _t230
                                    }, _e238, Laya.Ease.backOut);
                                }
                            }
                        }
                    }); else if (this.plantRoot.transform.localScale = new Laya.Vector3(_a168, _a168, _a168), 
                    this.fruitArray && this.fruitPointArray) for (var _e239 = 0; _e239 < this.fruitPointArray.length; _e239++) {
                        var _t231 = this.fruitPointArray[_e239], _a170 = this.fruitArray[_e239];
                        if (_a170 && _t231) {
                            var _e240 = 1;
                            _t231.transform.localScale = new Laya.Vector3(_e240, _e240, _e240), _a170.transform.localPosition = new Laya.Vector3(0, 0, 0), 
                            _a170.active = !0;
                        }
                    }
                    this.plantModel.active = !0;
                }
            }
        }, {
            key: "onHarvest",
            value: function onHarvest() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                this.State != z.Wasteland && (this.State = z.Wasteland, this.gatherInTheCrops(e, t), 
                this.adjustLandMaterial(e));
            }
        }, {
            key: "gatherInTheCrops",
            value: function gatherInTheCrops() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                if (this.gameObject && this.State == z.Wasteland) {
                    if (this.plantRoot || this.initModel(), t || (oe.Instance.playAnimalOnHit(), B.Instance.playHarvestCropsEffect(this.gameObject.transform.position)), 
                    this.plantModel.active = !1, this.fruitArray) for (var _e241 = 0; _e241 < this.fruitArray.length; _e241++) {
                        this.fruitArray[_e241].active = !1;
                    }
                    this.jump1(t);
                }
            }
        }, {
            key: "jump1",
            value: function jump1() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var t = this.fruitArray[0];
                t.transform.localPosition = new Laya.Vector3(0, 0, 0), t.transform.localScale = new Laya.Vector3(1.5, 1.5, 1.5), 
                t.active = !0;
                var a = [], i = new Laya.Vector2();
                i.x = Math.random(), 0 == i.x ? i.y = 1 : i.y = Math.random(), Laya.Vector2.normalize(i, i), 
                i.x = (Math.random() > .5 ? 1 : -1) * i.x, i.y = (Math.random() > .5 ? 1 : -1) * i.y;
                var n = t.transform.position, o = new Laya.Vector3(n.x - 2 * this.d1 * i.x, 0, n.z - 2 * this.d1 * i.y), s = new Laya.Vector3(.5 * (n.x + o.x), this.h1, .5 * (n.z + o.z));
                a.push(n), a.push(s), a.push(o);
                var r = re.CreateBezierPoints(a, 19), l = 0, c = this;
                Laya.timer.frameLoop(1, this, function() {
                    if (l > r.length - 1) Laya.timer.clearAll(c), c.jump2(t, o, i, e), l = 0; else if (c.gameObject && t) {
                        var _e242 = new Laya.Vector3(r[l].x, r[l].y, r[l].z);
                        t.transform.position = _e242;
                    }
                    l++;
                });
            }
        }, {
            key: "jump2",
            value: function jump2(e, t, a) {
                var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var n = [], o = new Laya.Vector3(t.x - 2 * this.d2 * a.x, 0, t.z - 2 * this.d2 * a.y), s = new Laya.Vector3(.5 * (t.x + o.x), this.h2, .5 * (t.z + o.z));
                n.push(t), n.push(s), n.push(o);
                var r = re.CreateBezierPoints(n, 19), l = 0, c = this;
                Laya.timer.frameLoop(1, this, function() {
                    if (l > r.length - 1) Laya.timer.clearAll(c), c.end(e, o, i), l = 0; else if (c.gameObject && e) {
                        var _t232 = new Laya.Vector3(r[l].x, r[l].y, r[l].z);
                        e.transform.position = _t232;
                    }
                    l++;
                });
            }
        }, {
            key: "end",
            value: function end(e, t) {
                var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                if (a) this.flyToNpcBox(e, t, a); else {
                    var _t233 = e.transform.position, _a171 = this.parentFarmBlock.farmBlockConfig.Config.id;
                    Ce.Instance.productIconFlyToUI(_t233, _a171, 3);
                }
                e.active = !1;
            }
        }, {
            key: "flyToNpcBox",
            value: function flyToNpcBox(e, t, a) {
                a.getProduct();
                var i = a.boxNode.transform.position, n = [], o = new Laya.Vector3(.5 * (t.x + i.x), i.y + .4, .5 * (t.z + i.z));
                n.push(t), n.push(o), n.push(i);
                var s = re.CreateBezierPoints(n, 19), r = 0, l = this;
                Laya.timer.frameLoop(1, this, function() {
                    if (r > s.length - 1) Laya.timer.clearAll(l), l.gameObject && e && (e.active = !1), 
                    r = 0; else if (l.gameObject && e) {
                        var _t234 = new Laya.Vector3(s[r].x, s[r].y, s[r].z);
                        e.transform.position = _t234;
                    }
                    r++;
                });
            }
        }, {
            key: "adjustLandMaterial",
            value: function adjustLandMaterial() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                if (this.gameObject && this.landMaterials) {
                    var _t235, _a172 = this.landMaterials;
                    if (_t235 = this.State == z.Mature ? new Laya.Vector4(245 / 255, 131 / 255, 133 / 255, 1) : new Laya.Vector4(1, 1, 1, 1), 
                    e) for (var _e243 = 0; _e243 < _a172.length; _e243++) {
                        var _i99 = _a172[_e243];
                        Laya.Tween.to(_i99.albedoColor, {
                            x: _t235.x,
                            y: _t235.y,
                            z: _t235.z
                        }, 400, Laya.Ease.linearNone);
                    } else for (var _e244 = 0; _e244 < _a172.length; _e244++) {
                        _a172[_e244].albedoColor = _t235;
                    }
                }
            }
        }, {
            key: "adjustPlantMaterial",
            value: function adjustPlantMaterial() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                if (this.gameObject && this.plantMaterials) {
                    var _t236, _a173 = this.plantMaterials;
                    if (_t236 = this.State == z.Mature ? new Laya.Vector4(1, 1, 1, 1) : new Laya.Vector4(0, 195 / 255, 19 / 255, 1), 
                    e) for (var _e245 = 0; _e245 < _a173.length; _e245++) {
                        var _i100 = _a173[_e245];
                        Laya.Tween.to(_i100.albedoColor, {
                            x: _t236.x,
                            y: _t236.y,
                            z: _t236.z
                        }, 500, Laya.Ease.linearNone);
                    } else for (var _e246 = 0; _e246 < _a173.length; _e246++) {
                        _a173[_e246].albedoColor = _t236;
                    }
                }
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                this.gameObject = null, Laya.timer.clearAll(this), this.plantRoot && (Laya.Tween.clearAll(this.plantRoot), 
                Laya.Tween.clearAll(this.plantRoot.transform), this.plantRoot = null);
            }
        } ]);
        return Nt;
    }(Laya.Script3D);
    !function(e) {
        e[e.Wasteland = 0] = "Wasteland", e[e.Seedling = 1] = "Seedling", e[e.Mature = 2] = "Mature";
    }(z || (z = {}));
    var Et = /* */ function() {
        function Et(e) {
            _classCallCheck2(this, Et);
            this.oneBlockAnimalAmount = Ft.SmallBlockSize * Ft.SmallBlockSize, this.mAnimalAmountMax = 0, 
            this.landList = new P(), this.pControllerList = new P(), this.banCheckSowSeed = !1, 
            this.banCheckWatering = !1, this.pastureControllerDic = {}, this.index = Et.count, 
            Et.count++, this.appendController(e);
        }
        _createClass2(Et, [ {
            key: "animalAmountMax",
            get: function get() {
                return this.mAnimalAmountMax;
            }
        }, {
            key: "landAmount",
            get: function get() {
                return this.landList.size();
            }
        }, {
            key: "checkHarvest",
            value: function checkHarvest(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var a = this.landList.getHead(), i = 0;
                for (;a; ) {
                    var _n54 = a.element;
                    _n54 && (t ? _n54.State == z.Seedling ? t.operationInTargetBlock(null, e) : t.hitDetection(_n54.gameObject.transform.position) ? _n54.adjustByState(z.Wasteland, !0, t) : _n54.State == z.Mature && i++ : _n54.State == z.Seedling ? Yt.Instance.beCommonActionInThePasture(null, e) : Yt.Instance.hitDetection(_n54.gameObject.transform.position) ? _n54.adjustByState(z.Wasteland) : _n54.State == z.Mature && i++), 
                    a = a.next;
                }
                i <= 0 && this.allFarmControlerBeClearState(t);
            }
        }, {
            key: "allFarmControlerBeClearState",
            value: function allFarmControlerBeClearState() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var t = this.pControllerList.getHead();
                for (;t; ) {
                    var _e247 = t.element;
                    _e247 && _e247.farmBlockInfo.setState(z.Wasteland), t = t.next;
                }
                if (Be.Instance.save(), e) {
                    var _t237 = e.getStantBlockKey(), _a174 = Be.Instance.getPControllerByKey(_t237);
                    _a174 && e.switchActionInThePasture(null, _a174);
                } else {
                    var _e248 = Yt.Instance.getStantBlockKey(), _t238 = Be.Instance.getPControllerByKey(_e248);
                    _t238 && Yt.Instance.beCommonActionInThePasture(null, _t238);
                }
            }
        }, {
            key: "checkSowSeed",
            value: function checkSowSeed() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                if (this.banCheckSowSeed) return;
                var t = this.landList.getHead(), a = 0;
                for (;t; ) {
                    var _i101 = t.element;
                    _i101 && (e ? e.hitDetection(_i101.gameObject.transform.position) ? _i101.adjustByState(z.Seedling) : _i101.State == z.Wasteland && a++ : Yt.Instance.hitDetection(_i101.gameObject.transform.position) ? _i101.adjustByState(z.Seedling) : _i101.State == z.Wasteland && a++), 
                    t = t.next;
                }
                a <= 0 && (this.banCheckSowSeed = !0, Laya.timer.frameOnce(80, this, this.allFarmControlerSowSeedCompleted, [ e ]));
            }
        }, {
            key: "sowSeedByFramBlockCreate",
            value: function sowSeedByFramBlockCreate(e) {
                if (e != z.Wasteland) {
                    var _t239 = this.landList.getHead();
                    for (;_t239; ) {
                        var _a175 = _t239.element;
                        _a175 && _a175.State != e && _a175.adjustByState(e, !1), _t239 = _t239.next;
                    }
                }
            }
        }, {
            key: "allFarmControlerSowSeedCompleted",
            value: function allFarmControlerSowSeedCompleted() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var t, a = this.pControllerList.getHead();
                for (;a; ) {
                    var _e249 = a.element;
                    _e249 && _e249.farmBlockInfo.setState(z.Seedling), a = a.next;
                }
                Be.Instance.save(), t = e ? e.getStantBlockKey() : Yt.Instance.getStantBlockKey();
                var i = Be.Instance.getPControllerByKey(t);
                i && (e ? e.switchActionInThePasture(null, i) : Yt.Instance.beCommonActionInThePasture(null, i)), 
                this.banCheckSowSeed = !1;
            }
        }, {
            key: "checkWateringAttack",
            value: function checkWateringAttack(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                if (this.banCheckWatering) return;
                var a = this.landList.getHead(), i = 0;
                for (;a; ) {
                    var _e250 = a.element;
                    _e250 && (t ? t.hitDetection(_e250.gameObject.transform.position) ? _e250.adjustByState(z.Mature) : _e250.State == z.Seedling && i++ : Yt.Instance.hitDetection(_e250.gameObject.transform.position) ? _e250.adjustByState(z.Mature) : _e250.State == z.Seedling && i++), 
                    a = a.next;
                }
                i / this.landAmount <= .08 && (i > 0 && this.allCropsBeAdult(), this.banCheckWatering = !0, 
                Laya.timer.frameOnce(80, this, this.allPControlerBeAdultState, [ t ]));
            }
        }, {
            key: "allPControlerBeAdultState",
            value: function allPControlerBeAdultState() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                var t, a = this.pControllerList.getHead();
                for (;a; ) {
                    var _e251 = a.element;
                    _e251 && _e251.farmBlockInfo.setState(z.Mature), a = a.next;
                }
                Be.Instance.save(), t = e ? e.getStantBlockKey() : Yt.Instance.getStantBlockKey();
                var i = Be.Instance.getPControllerByKey(t);
                i && (e ? e.switchActionInThePasture(null, i) : Yt.Instance.beCommonActionInThePasture(null, i)), 
                this.banCheckWatering = !1;
            }
        }, {
            key: "allCropsBeAdult",
            value: function allCropsBeAdult() {
                var e = this.landList.getHead();
                for (;e; ) {
                    var _t240 = e.element;
                    _t240 && _t240.State != z.Mature && _t240.adjustByState(z.Mature), e = e.next;
                }
            }
        }, {
            key: "link",
            value: function link(e) {
                if (e) {
                    var _t241 = e.pControllerList.getHead();
                    for (;_t241; ) {
                        var _e252 = _t241.element;
                        _e252 && (this.linkLand(_e252.neighborCropsPool.landList), _e252.neighborCropsPool = this, 
                        this.appendController(_e252)), _t241 = _t241.next;
                    }
                }
                return this.refreshPController(), this;
            }
        }, {
            key: "refreshPController",
            value: function refreshPController() {
                var e = this.pControllerList.getHead(), t = 0;
                for (;e; ) {
                    var _a176 = e.element;
                    _a176 && _a176.farmBlockInfo.State > t && (t = _a176.farmBlockInfo.State), e = e.next;
                }
                if (t > 0) {
                    for (e = this.pControllerList.getHead(); e; ) {
                        var _a178 = e.element;
                        _a178 && _a178.farmBlockInfo.State < t && _a178.farmBlockInfo.setState(t), e = e.next;
                    }
                    var _a177 = this.landList.getHead();
                    for (;_a177; ) {
                        _a177.element && _a177.element.State != t && _a177.element.adjustByState(t, !1), 
                        _a177 = _a177.next;
                    }
                    et.Instance.onRefresh(), me.Instance.save();
                }
            }
        }, {
            key: "linkLand",
            value: function linkLand(e) {
                var t = e.getHead();
                for (;t; ) {
                    t.element && this.addLand(t.element), t = t.next;
                }
            }
        }, {
            key: "addLand",
            value: function addLand(e) {
                return -1 == this.landList.positionOf(e) && (this.landList.append(e), !0);
            }
        }, {
            key: "animalIsReachedMax",
            value: function animalIsReachedMax() {
                return this.landAmount >= this.animalAmountMax;
            }
        }, {
            key: "getPastureByKey",
            value: function getPastureByKey(e) {
                return this.pastureControllerDic[e];
            }
        }, {
            key: "appendController",
            value: function appendController(e) {
                this.pControllerList.append(e), this.pastureControllerDic[e.farmBlockInfo.k] = e;
                var t = this.pControllerList.size();
                this.mAnimalAmountMax = t * this.oneBlockAnimalAmount + (t - 1) * Ft.SmallBlockSize;
            }
        }, {
            key: "autoBeAdultAnimal",
            value: function autoBeAdultAnimal() {
                this.allCropsBeAdult(), this.allPControlerBeAdultState();
            }
        }, {
            key: "getMinDistancePastureToPosition",
            value: function getMinDistancePastureToPosition(e) {
                var t = this.pControllerList.getHead(), a = null;
                for (;t; ) {
                    var _i102 = t.element;
                    if (_i102 && _i102.farmBlockInfo.treeClear) if (null == a) a = _i102; else {
                        var _t242 = new Laya.Vector3(), _n55 = new Laya.Vector3();
                        Laya.Vector3.subtract(a.rootModel.transform.position, e, _t242), Laya.Vector3.subtract(_i102.rootModel.transform.position, e, _n55);
                        var _o45 = Laya.Vector3.scalarLength(_t242);
                        Laya.Vector3.scalarLength(_n55) < _o45 && (a = _i102);
                    }
                    t = t.next;
                }
                return a;
            }
        }, {
            key: "getMinDistanceCropsPositionFrom",
            value: function getMinDistanceCropsPositionFrom(e, t) {
                var a = this.landList.getHead(), i = null, n = 1e5;
                for (;a; ) {
                    var _o46 = a.element;
                    if (_o46 && _o46.State == t) {
                        var _t243 = _o46.gameObject.transform.position, _a179 = new Laya.Vector3();
                        Laya.Vector3.subtract(_t243, e, _a179);
                        var _s36 = Laya.Vector3.scalarLength(_a179);
                        _s36 < n && (n = _s36, i = new Laya.Vector3(_t243.x, 0, _t243.z));
                    }
                    a = a.next;
                }
                return i;
            }
        } ], [ {
            key: "createNeighborCropsPool",
            value: function createNeighborCropsPool(e) {
                return new Et(e);
            }
        } ]);
        return Et;
    }();
    Et.count = 0;
    var Rt = /* */ function() {
        function Rt() {
            _classCallCheck2(this, Rt);
            this.seedIndex = 0;
        }
        _createClass2(Rt, [ {
            key: "init",
            value: function init(e) {
                var t = e.getChildByName("Farm").getChildByName("Seed");
                t.active = !1, this.seedArray = new Array(60);
                for (var _a180 = 0; _a180 < this.seedArray.length; _a180++) {
                    if (0 == _a180) this.seedArray[0] = t; else {
                        var _i103 = Laya.MeshSprite3D.instantiate(t, e, !1);
                        _i103.active = !1, this.seedArray[_a180] = _i103;
                    }
                }
            }
        }, {
            key: "throwSeedFromNpc",
            value: function throwSeedFromNpc(e, t, a) {
                var i = this.getSeedModel();
                if (i) {
                    i.active = !0, i.transform.position = t;
                    var _e253 = a, _n56 = Yt.fanAngle, _o47 = r.randomFloatNum(0, _n56);
                    _e253 += _o47 -= .5 * _n56, i.transform.localRotationEulerY = _e253;
                    var _s37 = new Laya.Vector3(0, 0, 0);
                    i.transform.getForward(_s37), Laya.Vector3.normalize(_s37, _s37);
                    var _l21 = new Laya.Vector2(_s37.x, _s37.z), _c16 = this.getAnimalFallPosition(t, _l21, !1);
                    this.fly(i, t, _c16, !1);
                }
            }
        }, {
            key: "throwSeed",
            value: function throwSeed(e, t, a) {
                var i = this.getSeedModel();
                if (i) {
                    i.active = !0, i.transform.position = e;
                    var _n57 = t, _o48 = Yt.fanAngle, _s38 = r.randomFloatNum(0, _o48);
                    _n57 += _s38 -= .5 * _o48, i.transform.localRotationEulerY = _n57;
                    var _l22 = new Laya.Vector3(0, 0, 0);
                    i.transform.getForward(_l22), Laya.Vector3.normalize(_l22, _l22);
                    var _c17 = new Laya.Vector2(_l22.x, _l22.z), _h9 = this.getAnimalFallPosition(e, _c17, a);
                    this.fly(i, e, _h9, a);
                }
            }
        }, {
            key: "getAnimalFallPosition",
            value: function getAnimalFallPosition(e, t, a) {
                var i = a ? r.randomFloatNum(.2, Yt.strongAttackDistance) : r.randomFloatNum(.1, Yt.attackDistance), n = new Laya.Vector3(e.x, 0, e.z), o = new Laya.Vector3(t.x, 0, t.y);
                Laya.Vector3.scale(o, i, o);
                var s = new Laya.Vector3(0, 0, 0);
                return Laya.Vector3.subtract(n, o, s), s.y = .01, s;
            }
        }, {
            key: "getSeedModel",
            value: function getSeedModel() {
                var e = this.seedArray[this.seedIndex];
                return this.seedIndex++, this.seedIndex >= this.seedArray.length - 1 && (this.seedIndex = 0), 
                Laya.timer.clearAll(e), Laya.timer.clearAll(e.transform), e;
            }
        }, {
            key: "fly",
            value: function fly(e, t, a, i) {
                var n = i ? .6 : .3, o = new Laya.Vector3(.5 * (t.x + a.x), n, .5 * (t.z + a.z)), s = [];
                s.push(t), s.push(o), s.push(a);
                var r = i ? 25 : 15, l = re.CreateBezierPoints(s, r), c = 0, h = function h() {
                    e.active = !1;
                }, d = function d() {
                    if (c > l.length - 1) e.transform.position = a, Laya.timer.frameOnce(60, e, h); else {
                        if (e) {
                            var _t244 = new Laya.Vector3(l[c].x, l[c].y, l[c].z);
                            e.transform.position = _t244;
                        }
                        Laya.timer.frameOnce(1, e, d);
                    }
                    c++;
                };
                d();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Rt.instance || (Rt.instance = new Rt()), Rt.instance;
            }
        } ]);
        return Rt;
    }();
    Rt.instance = null;
    var Ut = /* */ function() {
        function Ut() {
            _classCallCheck2(this, Ut);
            this.waterDropIndex = 0;
        }
        _createClass2(Ut, [ {
            key: "init",
            value: function init(e) {
                var t = e.getChildByName("Farm").getChildByName("Waterdrop");
                t.active = !1, this.waterDropArray = new Array(180);
                for (var _a181 = 0; _a181 < this.waterDropArray.length; _a181++) {
                    if (0 == _a181) this.waterDropArray[0] = t; else {
                        var _i104 = Laya.MeshSprite3D.instantiate(t, e, !1);
                        _i104.active = !1, this.waterDropArray[_a181] = _i104;
                    }
                }
            }
        }, {
            key: "throwAnimalFeedFromNpc",
            value: function throwAnimalFeedFromNpc(e, t, a) {
                var i = this.getWaterDropModel();
                if (i) {
                    i.active = !0, i.transform.position = t;
                    var _e254 = a, _n58 = Yt.fanAngle, _o49 = r.randomFloatNum(0, _n58);
                    _e254 += _o49 -= .5 * _n58, i.transform.localRotationEulerY = _e254;
                    var _s39 = new Laya.Vector3(0, 0, 0);
                    i.transform.getForward(_s39), Laya.Vector3.normalize(_s39, _s39);
                    var _l23 = new Laya.Vector2(_s39.x, _s39.z), _c18 = this.getAnimalFallPosition(t, _l23, !1);
                    this.fly(i, t, _c18, !1);
                }
            }
        }, {
            key: "throwWaterDrop",
            value: function throwWaterDrop(e, t, a) {
                var i = this.getWaterDropModel();
                if (i) {
                    var _n59 = .3;
                    i.transform.localScale = new Laya.Vector3(_n59, _n59, _n59), i.active = !0, i.transform.position = e;
                    var _o50 = t, _s40 = 50, _l24 = r.randomFloatNum(0, _s40);
                    _o50 += _l24 -= .5 * _s40, i.transform.localRotationEulerY = _o50;
                    var _c19 = new Laya.Vector3(0, 0, 0);
                    i.transform.getForward(_c19), Laya.Vector3.normalize(_c19, _c19);
                    var _h10 = new Laya.Vector2(_c19.x, _c19.z), _d6 = this.getAnimalFallPosition(e, _h10, a);
                    this.fly(i, e, _d6, a);
                }
            }
        }, {
            key: "getAnimalFallPosition",
            value: function getAnimalFallPosition(e, t, a) {
                var i = a ? r.randomFloatNum(.1, Yt.strongAttackDistance) : r.randomFloatNum(.05, Yt.attackDistance), n = new Laya.Vector3(e.x, 0, e.z), o = new Laya.Vector3(t.x, 0, t.y);
                Laya.Vector3.scale(o, i, o);
                var s = new Laya.Vector3(0, 0, 0);
                return Laya.Vector3.subtract(n, o, s), s;
            }
        }, {
            key: "getWaterDropModel",
            value: function getWaterDropModel() {
                var e = this.waterDropArray[this.waterDropIndex];
                return this.waterDropIndex++, this.waterDropIndex >= this.waterDropArray.length - 1 && (this.waterDropIndex = 0), 
                Laya.timer.clearAll(e), Laya.timer.clearAll(e.transform), e;
            }
        }, {
            key: "fly",
            value: function fly(e, t, a, i) {
                var n = i ? .3 : .2, o = new Laya.Vector3(.5 * (t.x + a.x), n, .5 * (t.z + a.z)), s = [];
                s.push(t), s.push(o), s.push(a);
                var r = i ? 40 : 25, l = re.CreateBezierPoints(s, r), c = 0, h = function h() {
                    e.active = !1;
                }, d = function d() {
                    if (c > l.length - 1) {
                        var _t245 = 1;
                        e.transform.localScale = new Laya.Vector3(_t245, _t245, _t245), e.transform.position = a, 
                        Laya.timer.frameOnce(5, e, h);
                    } else {
                        if (e) {
                            var _t246 = .3 + .7 * (c + 1) / l.length;
                            e.transform.localScale = new Laya.Vector3(_t246, _t246, _t246);
                            var _a182 = new Laya.Vector3(l[c].x, l[c].y, l[c].z);
                            e.transform.position = _a182;
                        }
                        Laya.timer.frameOnce(1, e, d);
                    }
                    c++;
                };
                d();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Ut.instance || (Ut.instance = new Ut()), Ut.instance;
            }
        } ]);
        return Ut;
    }();
    Ut.instance = null;
    var Ft = /* */ function(_it7) {
        _inherits2(Ft, _it7);
        var _super30 = _createSuper2(Ft);
        function Ft() {
            var _this44;
            _classCallCheck2(this, Ft);
            _this44 = _super30.call(this), _this44.needCreateAnimation = !0, _this44.aroundLandActiveStateArray = new Array(4), 
            _this44.mEnableChildCheck = !1, _this44.mEnableChildCheckFromNeighbor = !1, _this44.neighborFarmArray = new Array(4), 
            _this44.neighborCropsPool = null, _this44.isShow = !0, _this44.frameCount = 0, _this44.checkFrequency = 30;
            for (var _e255 = 0; _e255 < _this44.aroundLandActiveStateArray.length; _e255++) {
                _this44.aroundLandActiveStateArray[_e255] = !1;
            }
            return _this44;
        }
        _createClass2(Ft, [ {
            key: "EnableChildChek",
            get: function get() {
                return this.mEnableChildCheck || this.mEnableChildCheckFromNeighbor;
            }
        }, {
            key: "EnableChildCheckFromNeighbor",
            set: function set(e) {
                this.mEnableChildCheckFromNeighbor = e;
            }
        }, {
            key: "onAwake",
            value: function onAwake() {
                this.initNeighborAnimalPool();
            }
        }, {
            key: "onStart",
            value: function onStart() {
                this.initFarmBlock();
            }
        }, {
            key: "initFarmBlock",
            value: function initFarmBlock() {
                1 == this.farmBlockInfo.tC ? this.mapOutFarm(!0) : this.mapOutTrees();
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                this.EnableChildChek && Yt.Instance.AllBodyActionMode == X.RotateAttack && (this.frameCount++, 
                this.frameCount >= this.checkFrequency && (this.checkTree(), this.frameCount = 0));
            }
        }, {
            key: "checkTree",
            value: function checkTree() {
                if (this.treeDataArray && Yt.Instance.AllBodyActionMode == X.RotateAttack) {
                    var _e256 = !0;
                    for (var _t247 = 0; _t247 < this.treeDataArray.length; _t247++) {
                        var _a183 = this.treeDataArray[_t247];
                        _a183 && _a183.PTree && _a183.PTree.active && (Yt.Instance.hitDetection(_a183.PTree.transform.position) && _a183.State++, 
                        _e256 = !1);
                    }
                    _e256 && Laya.timer.once(200, this, this.clearTree);
                }
            }
        }, {
            key: "mapOutTrees",
            value: function mapOutTrees() {
                if (this.rootModel) {
                    this.treeDataArray = new Array();
                    for (var _e257 = 0; _e257 < 4; _e257++) {
                        for (var _t248 = 0; _t248 < 4; _t248++) {
                            var _a184 = .25 * (_t248 - 1.5), _i105 = .25 * (_e257 - 1.5), _n60 = new Laya.Vector3(_a184, 0, _i105), _o51 = nt.PTree;
                            if (_o51) {
                                var _e258 = Laya.MeshSprite3D.instantiate(_o51, this.rootModel, !1);
                                _e258.transform.localPosition = _n60, _e258.active = !0;
                                var _t249 = new ot(_e258);
                                _t249.PTree = _e258, this.treeDataArray.push(_t249);
                            }
                        }
                    }
                }
            }
        }, {
            key: "mapOutFarm",
            value: function mapOutFarm() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
                this.mapOutGround(e), e && !this.needCreateAnimation ? Laya.timer.frameOnce(30, this, this.mapOutCrops) : Laya.timer.frameOnce(80, this, this.mapOutCrops);
            }
        }, {
            key: "initNeighborAnimalPool",
            value: function initNeighborAnimalPool() {
                this.neighborCropsPool = Et.createNeighborCropsPool(this);
            }
        }, {
            key: "mapOutCrops",
            value: function mapOutCrops() {
                1 != this.farmBlockInfo.State && 2 != this.farmBlockInfo.State || this.neighborCropsPool && this.neighborCropsPool.sowSeedByFramBlockCreate(this.farmBlockInfo.State);
            }
        }, {
            key: "createAnimal",
            value: function createAnimal(e, t, a, i) {
                var n = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1;
            }
        }, {
            key: "onHarvestCrops",
            value: function onHarvestCrops() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                this.neighborCropsPool.checkHarvest(this, e);
            }
        }, {
            key: "onThrowSeeds",
            value: function onThrowSeeds(e, t) {
                var a = Ee.Instance.isStrongMode, i = a ? 20 : 10;
                for (var _n61 = 0; _n61 < i; _n61++) {
                    Rt.Instance.throwSeed(e, t, a);
                }
                this.checkSowSeed();
            }
        }, {
            key: "onNPCThrowSeeds",
            value: function onNPCThrowSeeds(e, t, a) {
                for (var _i106 = 0; _i106 < 10; _i106++) {
                    Rt.Instance.throwSeedFromNpc(e, t, a);
                }
                this.checkSowSeed(e);
            }
        }, {
            key: "checkSowSeed",
            value: function checkSowSeed() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                this.neighborCropsPool.checkSowSeed(e);
            }
        }, {
            key: "onThrowWaterDrop",
            value: function onThrowWaterDrop(e, t) {
                var a = Ee.Instance.isStrongMode, i = a ? 2 : 1;
                for (var _n62 = 0; _n62 < i; _n62++) {
                    Ut.Instance.throwWaterDrop(e, t, a);
                }
            }
        }, {
            key: "onCheckWatering",
            value: function onCheckWatering() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                this.neighborCropsPool.checkWateringAttack(this, e);
            }
        }, {
            key: "onThrowAnimal",
            value: function onThrowAnimal(e, t) {}
        }, {
            key: "onNPCThrowAnimal",
            value: function onNPCThrowAnimal(e, t, a) {}
        }, {
            key: "getAnimalFallPosition",
            value: function getAnimalFallPosition(e, t) {
                return new Laya.Vector3(0, 0, 0);
            }
        }, {
            key: "mapOutGround",
            value: function mapOutGround(e) {
                var t = new Laya.Vector3(0, 0, 0);
                Laya.Vector3.subtract(this.rootModel.transform.position, Yt.Instance.gameObject.transform.position, t);
                var a = Laya.Vector3.scalarLength(t), i = !e && a <= .8;
                this.refreshNeighborFarmArray();
                var n = new Array();
                for (var _e259 = 0; _e259 < Ft.SmallBlockSize; _e259++) {
                    for (var _t250 = 0; _t250 < Ft.SmallBlockSize; _t250++) {
                        var _a185 = void 0;
                        _a185 = 0 == (_e259 + _t250) % 2 ? Wt.FarmLand1 : Wt.FarmLand2;
                        var _o52 = Laya.MeshSprite3D.instantiate(_a185, this.rootModel, !1);
                        _o52.active = !i;
                        var _s41 = new Nt();
                        _s41.parentFarmBlock = this, _s41.gameObject = _o52, _o52.addComponentIntance(_s41), 
                        n.push(_s41), this.neighborCropsPool.addLand(_s41);
                        var _r18 = (_t250 - .5 * Ft.SmallBlockSize) / 6 + 1 / 12, _l25 = (_e259 - .5 * Ft.SmallBlockSize) / 6 + 1 / 12;
                        _o52.transform.localPosition = new Laya.Vector3(_r18, 0, _l25);
                    }
                }
                for (var _e260 = 0; _e260 < 4; _e260++) {
                    var _t251 = this.neighborFarmArray[_e260], _a186 = (_e260 + 2) % 4;
                    if (_t251 && _t251.farmBlockInfo.treeClear && !_t251.aroundLandActiveStateArray[_a186]) {
                        var _a187 = new Laya.Vector3(0, 0, 0);
                        switch (this.aroundLandActiveStateArray[_e260] = !0, _e260) {
                          case 0:
                            _a187.z = -.5;
                            break;

                          case 1:
                            _a187.x = .5;
                            break;

                          case 2:
                            _a187.z = .5;
                            break;

                          case 3:
                            _a187.x = -.5;
                        }
                        switch (_e260) {
                          case 0:
                          case 2:
                            for (var _t252 = 0; _t252 < Ft.SmallBlockSize; _t252++) {
                                var _o53 = void 0;
                                _a187.x = (_t252 - .5 * Ft.SmallBlockSize) / 6 + 1 / 12, _o53 = 1 == (_e260 + _t252) % 2 ? Wt.FarmLand1 : Wt.FarmLand2;
                                var _s42 = Laya.MeshSprite3D.instantiate(_o53, this.rootModel, !1);
                                _s42.active = !i;
                                var _r19 = new Nt();
                                _r19.parentFarmBlock = this, _r19.gameObject = _s42, _s42.addComponentIntance(_r19), 
                                n.push(_r19), _s42.transform.localPosition = _a187, this.neighborCropsPool.addLand(_r19);
                            }
                            break;

                          case 1:
                          case 3:
                            for (var _t253 = 0; _t253 < Ft.SmallBlockSize; _t253++) {
                                var _o54 = void 0;
                                _a187.z = (_t253 - .5 * Ft.SmallBlockSize) / 6 + 1 / 12, _o54 = 0 == (_e260 + _t253) % 2 ? Wt.FarmLand1 : Wt.FarmLand2;
                                var _s43 = Laya.MeshSprite3D.instantiate(_o54, this.rootModel, !1);
                                _s43.active = !i;
                                var _r20 = new Nt();
                                _r20.parentFarmBlock = this, _r20.gameObject = _s43, _s43.addComponentIntance(_r20), 
                                n.push(_r20), _s43.transform.localPosition = _a187, this.neighborCropsPool.addLand(_r20);
                            }
                        }
                        _t251.linkNeighborLandPool(this);
                    }
                }
                this.smallLandControllerArray = n, i && this.landDropAnimation();
            }
        }, {
            key: "landDropAnimation",
            value: function landDropAnimation() {
                var _this45 = this;
                this.smallLandControllerArray.sort(function(e, t) {
                    return e.gameObject.transform.localPositionX == t.gameObject.transform.localPositionX ? e.gameObject.transform.localPositionZ == t.gameObject.transform.localPositionZ ? 1 : e.gameObject.transform.localPositionZ - t.gameObject.transform.localPositionZ : e.gameObject.transform.localPositionX - t.gameObject.transform.localPositionX;
                });
                var _loop7 = function _loop7(_e261) {
                    var t = _this45.smallLandControllerArray[_e261].gameObject;
                    Laya.timer.once(20 * _e261, _this45, function() {
                        t.transform.localScale = new Laya.Vector3(.1, .1, .1), t.transform.localPositionY = .3, 
                        t.active = !0, Laya.Tween.to(t.transform, {
                            localPositionY: 0,
                            localScaleX: 1,
                            localScaleY: 1,
                            localScaleZ: 1
                        }, 150, Laya.Ease.linearNone);
                    });
                };
                for (var _e261 = 0; _e261 < this.smallLandControllerArray.length; _e261++) {
                    _loop7(_e261);
                }
            }
        }, {
            key: "linkNeighborLandPool",
            value: function linkNeighborLandPool(e) {
                e.neighborCropsPool != this.neighborCropsPool && this.neighborCropsPool.link(e.neighborCropsPool);
            }
        }, {
            key: "refreshNeighborFarmArray",
            value: function refreshNeighborFarmArray() {
                var e = this.blockConfig.x, t = this.blockConfig.z, a = e + "_" + (t + 1), i = Be.Instance.getPControllerByKey(a);
                this.neighborFarmArray[2] = i, a = e + "_" + (t - 1);
                var n = Be.Instance.getPControllerByKey(a);
                this.neighborFarmArray[0] = n, a = e + 1 + "_" + t;
                var o = Be.Instance.getPControllerByKey(a);
                this.neighborFarmArray[1] = o, a = e - 1 + "_" + t;
                var s = Be.Instance.getPControllerByKey(a);
                this.neighborFarmArray[3] = s;
            }
        }, {
            key: "clearTree",
            value: function clearTree() {
                if (1 != this.farmBlockInfo.tC) {
                    if (this.farmBlockInfo.clearTrear(), ce.Instance.unlockPastureRefreshWarehouse(this.blockConfig.sceneId, this.farmBlockConfig.Config.id), 
                    this.treeDataArray) {
                        for (var _e262 = 0; _e262 < this.treeDataArray.length; _e262++) {
                            var _t254 = this.treeDataArray[_e262];
                            _t254 && _t254.PTree && _t254.PTree.destroy(), this.treeDataArray[_e262] = null;
                        }
                        this.treeDataArray = null;
                    }
                    He.Instance.GC(), this.mapOutFarm(), Yt.Instance.beCommonActionInThePasture(null, this), 
                    et.Instance.awakeShow(null, this);
                }
            }
        }, {
            key: "awakeEnableNeighborPastureCheck",
            value: function awakeEnableNeighborPastureCheck() {
                for (var _e263 = 0; _e263 < 4; _e263++) {
                    var _t255 = this.neighborFarmArray[_e263];
                    _t255 && (_t255.EnableChildCheckFromNeighbor = !0);
                }
            }
        }, {
            key: "cancelEnableNeighborPastureCheck",
            value: function cancelEnableNeighborPastureCheck() {
                for (var _e264 = 0; _e264 < 4; _e264++) {
                    var _t256 = this.neighborFarmArray[_e264];
                    _t256 && (_t256.EnableChildCheckFromNeighbor = !1);
                }
            }
        }, {
            key: "onCharacterEnterBlock",
            value: function onCharacterEnterBlock() {
                this.mEnableChildCheck = !0, this.refreshNeighborFarmArray(), this.awakeEnableNeighborPastureCheck();
            }
        }, {
            key: "onCharacterExitBlock",
            value: function onCharacterExitBlock() {
                this.mEnableChildCheck = !1, this.cancelEnableNeighborPastureCheck();
            }
        } ]);
        return Ft;
    }(it);
    Ft.SmallBlockSize = 5;
    var zt = /* */ function(_it8) {
        _inherits2(zt, _it8);
        var _super31 = _createSuper2(zt);
        function zt() {
            _classCallCheck2(this, zt);
            return _super31.apply(this, arguments);
        }
        _createClass2(zt, [ {
            key: "onAwake",
            value: function onAwake() {
                if (1 == Zt.Instance.SceneIndex) {
                    var _e265 = 1, _t257 = 7, _a188 = .99 / 42, _i107 = Math.round(this.rootModel.transform.position.x) - _e265, _n63 = this.rootModel.getChildByName("face");
                    for (var _e266 = 0; _e266 < _t257; _e266++) {
                        var _o55 = "boad" + _e266;
                        _n63.getChildByName(_o55).meshRenderer.materials[0].tilingOffset.z = (_i107 * _t257 + _e266) * _a188;
                    }
                }
            }
        } ]);
        return zt;
    }(it);
    var Wt = /* */ function() {
        function Wt() {
            _classCallCheck2(this, Wt);
            this.BlockModelSprite3DDic = {}, this.DecorativeModelSprite3DDic = {}, this.PenModelSprite3DDic = {}, 
            this.AllBaseModelSprite3DDic = {}, this.roadIdArray = [ 1001, 1002, 1003, 1016, 1017, 1018, 1019, 1020, 1021 ];
        }
        _createClass2(Wt, [ {
            key: "CommonBlockModel",
            get: function get() {
                return this.BlockModelSprite3DDic[100];
            }
        }, {
            key: "mappingModel",
            value: function mappingModel(e) {
                Wt.Scene3D = e, this.initSceneRoot(), this.mappingBaseBlock(), this.mappingDecorativeModel(), 
                this.mappingPenModel(), this.mappingMaterials(), this.mappingAnimal(), this.mappingShopModel(), 
                this.mappingFruits(), this.mappingHoney(), this.mappingSwitchSceneIslandModel(), 
                this.mappingFarmModel(), ce.Instance.mappingModel(e), le.Instance.init(e), e.getChildByName("UnlockBounceCube").addComponent(Lt), 
                e.getChildByName("DropProp").addComponent(Je), e.getChildByName("GiftDog").addComponent(Ye), 
                nt.PTree = e.getChildByName("PTree"), nt.PTree.active = !1, B.Instance.init(e), 
                $e.Instance.init(e), Rt.Instance.init(e), Ut.Instance.init(e), Ue.Instance.mappingModel(e);
            }
        }, {
            key: "mappingBaseBlock",
            value: function mappingBaseBlock() {
                var e = Jt.Instance.BaseBlockModelConfig.getAll();
                var _iterator16 = _createForOfIteratorHelper2(e), _step16;
                try {
                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
                        var _t258 = _step16.value;
                        _t258.id = Number(_t258.id);
                        var _e267 = Wt.Scene3D.getChildByName(_t258.prefab);
                        _e267.active = !1, this.BlockModelSprite3DDic[_t258.id] = _e267;
                    }
                } catch (err) {
                    _iterator16.e(err);
                } finally {
                    _iterator16.f();
                }
            }
        }, {
            key: "mappingDecorativeModel",
            value: function mappingDecorativeModel() {
                var e = Jt.Instance.DecorativeModelConfig.getAll(), t = Wt.Scene3D.getChildByName("Decorative");
                var _iterator17 = _createForOfIteratorHelper2(e), _step17;
                try {
                    for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
                        var _a189 = _step17.value;
                        _a189.id = Number(_a189.id);
                        var _e268 = t.getChildByName(_a189.prefab);
                        _e268.active = !1, this.DecorativeModelSprite3DDic[_a189.id] = _e268;
                    }
                } catch (err) {
                    _iterator17.e(err);
                } finally {
                    _iterator17.f();
                }
            }
        }, {
            key: "mappingPenModel",
            value: function mappingPenModel() {
                var e = Jt.Instance.PenModelConfig.getAll(), t = Wt.Scene3D.getChildByName("Pen");
                var _iterator18 = _createForOfIteratorHelper2(e), _step18;
                try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
                        var _a190 = _step18.value;
                        var _e269 = t.getChildByName(_a190.door);
                        _a190.doorModel = _e269, _e269.active = !1;
                        var _i108 = t.getChildByName(_a190.pillars);
                        _a190.pillarsModel = _i108, _i108.active = !1;
                        var _n64 = t.getChildByName(_a190.fence);
                        _a190.fenceModel = _n64, _n64.active = !1;
                        var _o56 = t.getChildByName(_a190.single);
                        _o56 && (_a190.singleModel = _o56, _o56.active = !1);
                        var _s44 = t.getChildByName(_a190.land);
                        _a190.landModel = _s44, _s44.active = !1;
                    }
                } catch (err) {
                    _iterator18.e(err);
                } finally {
                    _iterator18.f();
                }
            }
        }, {
            key: "mappingShopModel",
            value: function mappingShopModel() {
                var e = Jt.Instance.ShopModelConfig.getAll(), t = Wt.Scene3D.getChildByName("Shop"), a = t.getChildByName("ShopNPC");
                a.active = !1;
                var _iterator19 = _createForOfIteratorHelper2(e), _step19;
                try {
                    for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
                        var _i109 = _step19.value;
                        var _e270 = t.getChildByName(_i109.prefab);
                        _i109.model = _e270;
                        var _n65 = new Laya.Vector3(0, 0, -.082), _o57 = Laya.MeshSprite3D.instantiate(a, _e270);
                        _o57.name = "ShopNPC", _o57.active = !0, _o57.transform.localPosition = _n65, _o57.transform.localRotationEuler = new Laya.Vector3(0, 180, 0), 
                        _o57.addComponent(Bt), _e270.active = !1, 0;
                    }
                } catch (err) {
                    _iterator19.e(err);
                } finally {
                    _iterator19.f();
                }
            }
        }, {
            key: "mappingSwitchSceneIslandModel",
            value: function mappingSwitchSceneIslandModel() {
                var e = Jt.Instance.SwitchSceneIslandModelConfig.getAll(), t = Wt.Scene3D.getChildByName("SwitchSceneIslands");
                var _iterator20 = _createForOfIteratorHelper2(e), _step20;
                try {
                    for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
                        var _a191 = _step20.value;
                        var _e271 = t.getChildByName(_a191.prefab);
                        _a191.model = _e271, _e271.active = !1, 0;
                    }
                } catch (err) {
                    _iterator20.e(err);
                } finally {
                    _iterator20.f();
                }
            }
        }, {
            key: "mappingMaterials",
            value: function mappingMaterials() {
                var e = Wt.Scene3D.getChildByName("Materials"), t = e.getChildByName("smallAnimalMaterial").meshRenderer.materials[0], a = e.getChildByName("adultAnimalMaterial").meshRenderer.materials[0], i = e.getChildByName("goldAnimalMaterial").meshRenderer.materials[0];
                this.scene1CJMaterial = e.getChildByName("scene1CJMaterial").meshRenderer.materials[0], 
                this.scene2CJMaterial = e.getChildByName("scene2CJMaterial").meshRenderer.materials[0], 
                Ze.samllAnimalMaterial = t, Ze.adultAnimalMaterial = a, Ze.goldAnimalMaterial = i, 
                e.active = !1;
            }
        }, {
            key: "switchSceneMaterials",
            value: function switchSceneMaterials() {
                var e = this.CommonBlockModel.getChildByName("model");
                2 == Zt.Instance.SceneIndex ? e.meshRenderer.material = this.scene2CJMaterial : e.meshRenderer.material = this.scene1CJMaterial;
                for (var _e272 in this.DecorativeModelSprite3DDic) {
                    var _t259 = Number(_e272);
                    if (this.isRoadModel(_t259)) {
                        var _t260 = this.DecorativeModelSprite3DDic[_e272].getChildByName("road");
                        _t260 && (2 == Zt.Instance.SceneIndex ? _t260.meshRenderer.material = this.scene2CJMaterial : _t260.meshRenderer.material = this.scene1CJMaterial);
                    }
                }
            }
        }, {
            key: "isRoadModel",
            value: function isRoadModel(e) {
                return this.roadIdArray.indexOf(e) >= 0;
            }
        }, {
            key: "mappingAnimal",
            value: function mappingAnimal() {
                var e = Jt.Instance.AnimalConfig.getAll(), t = Wt.Scene3D.getChildByName("Animals");
                var _iterator21 = _createForOfIteratorHelper2(e), _step21;
                try {
                    for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
                        var _a192 = _step21.value;
                        if (_a192.id = Number(_a192.id), _a192.apb = Number(_a192.apb), _a192.id < 2012) {
                            _a192.apb = Math.round(_a192.apb * Kt.Instance.PScale), _a192.p = Math.ceil(Number(_a192.p) / Kt.Instance.PScale), 
                            _a192.gu = Math.ceil(Number(_a192.gu) / Kt.Instance.PScale);
                            var _e273 = t.getChildByName(_a192.id.toString()), _i110 = _e273.getChildByName("model"), _n66 = _i110.transform.localScaleX / Kt.Instance.MScale;
                            _i110.transform.localScale = new Laya.Vector3(_n66, _n66, _n66), _a192.animalModel = _e273, 
                            _a192.ta = Number(_a192.ta), _e273.active = !1;
                        } else {
                            _a192.p = Number(_a192.p), _a192.gu = Number(_a192.gu);
                            var _e274 = t.getChildByName(_a192.id.toString());
                            _a192.animalModel = _e274, _a192.ta = Number(_a192.ta), _e274.active = !1;
                        }
                    }
                } catch (err) {
                    _iterator21.e(err);
                } finally {
                    _iterator21.f();
                }
            }
        }, {
            key: "mappingFruits",
            value: function mappingFruits() {
                var e = Jt.Instance.FruitConfig.getAll(), t = Wt.Scene3D.getChildByName("FruitTree"), a = t.getChildByName("FruitTree");
                a.active = !1;
                var i = a.getChildByName("Ring");
                i.transform.localPositionZ = -i.transform.localPositionZ, ve.Instance.FruitTree = a;
                var _iterator22 = _createForOfIteratorHelper2(e), _step22;
                try {
                    for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
                        var _a193 = _step22.value;
                        _a193.id = Number(_a193.id), _a193.p = Number(_a193.p), _a193.gu = Number(_a193.gu), 
                        _a193.mia = Number(_a193.mia), _a193.mxa = Number(_a193.mxa), _a193.fCD = Number(_a193.fCD);
                        var _e275 = t.getChildByName(_a193.id.toString());
                        _e275.active = !1, _a193.fruitModel = _e275;
                    }
                } catch (err) {
                    _iterator22.e(err);
                } finally {
                    _iterator22.f();
                }
            }
        }, {
            key: "mappingHoney",
            value: function mappingHoney() {
                var e = Jt.Instance.HoneyConfig.getAll(), t = Wt.Scene3D.getChildByName("Beehive"), a = t.getChildByName("BeehiveTree");
                a.active = !1, ke.Instance.BeehiveTree = a;
                var _iterator23 = _createForOfIteratorHelper2(e), _step23;
                try {
                    for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
                        var _a194 = _step23.value;
                        _a194.id = Number(_a194.id), _a194.p = Number(_a194.p), _a194.gu = Number(_a194.gu), 
                        _a194.mxa = Number(_a194.mxa), _a194.CD = Number(_a194.CD);
                        var _e276 = t.getChildByName(_a194.id.toString());
                        _e276.active = !1, _a194.honeyModel = _e276;
                    }
                } catch (err) {
                    _iterator23.e(err);
                } finally {
                    _iterator23.f();
                }
            }
        }, {
            key: "mappingFarmModel",
            value: function mappingFarmModel() {
                var e = Jt.Instance.CropsConfig.getAll(), t = Wt.Scene3D.getChildByName("Farm"), a = t.getChildByName("FarmLand1"), i = t.getChildByName("FarmLand2"), n = t.getChildByName("Seed");
                a.active = !1, i.active = !1, n.active = !1, Wt.FarmLand1 = a, Wt.FarmLand2 = i, 
                Wt.Seed = n;
                var _iterator24 = _createForOfIteratorHelper2(e), _step24;
                try {
                    for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
                        var _a195 = _step24.value;
                        _a195.id = Number(_a195.id), _a195.dA = Number(_a195.dA), _a195.p = Number(_a195.p), 
                        _a195.gu = Number(_a195.gu);
                        var _e277 = t.getChildByName(_a195.id.toString());
                        _a195.plantModel = _e277;
                        var _i111 = t.getChildByName(_a195.id + "_fruit");
                        _a195.fruitModel = _i111, _e277.active = !1, _i111.active = !1;
                    }
                } catch (err) {
                    _iterator24.e(err);
                } finally {
                    _iterator24.f();
                }
            }
        }, {
            key: "initScene",
            value: function initScene() {
                this.switchSceneMaterials(), this.mapOutBaseBlock(), de.Instance.initLockBlockByDetectList();
            }
        }, {
            key: "initSceneRoot",
            value: function initSceneRoot() {
                if (Wt.sceneRoot) Wt.sceneRoot.destroyChildren(); else {
                    var _e278 = new Laya.Sprite3D();
                    _e278.name = "sceneRoot", _e278.addComponent(_t), Wt.sceneRoot = _e278, Wt.Scene3D.addChild(_e278), 
                    _e278.transform.position = new Laya.Vector3(0, 0, 0), _e278.transform.rotationEuler = new Laya.Vector3(0, 0, 0);
                }
            }
        }, {
            key: "destroySceneRoot",
            value: function destroySceneRoot() {
                if (Wt.sceneRoot) {
                    var _e279 = Wt.sceneRoot;
                    Wt.sceneRoot = null, _e279.destroy();
                }
            }
        }, {
            key: "mapOutBaseBlock",
            value: function mapOutBaseBlock() {
                var e = Ee.Instance.allUnlockBlock;
                for (var _t261 in e) {
                    var _a196 = e[_t261];
                    _a196 && (_a196.IsUnlocked ? this.unlockBlock(_a196) : _a196.CanStartUnlock && le.Instance.createLockBlock(_a196));
                }
            }
        }, {
            key: "unlockBlock",
            value: function unlockBlock(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                if (e && e.IsUnlocked && e.Config) {
                    var _a197 = e.Config.type + 100, _n67 = this.BlockModelSprite3DDic[_a197], _o58 = new Laya.Vector3(e.Config.x, 0, e.Config.z);
                    if (_n67) {
                        var _a198 = Laya.MeshSprite3D.instantiate(_n67, Wt.SceneRoot, !1, _o58), _s45 = e.Config;
                        switch (e.Config.type) {
                          case i.SimpleHorizontalBridge:
                          case i.SimpleVerticalBridge:
                            var _t262 = new zt();
                            _t262.rootModel = _a198, _t262.blockInfo = e, _t262.blockConfig = _s45, _a198.addComponentIntance(_t262);
                        }
                        if (this.mapOutDecorativeByConfig(_a198, _s45.decorativeArray), t) {
                            var _e280 = .2;
                            _a198.transform.localScale = new Laya.Vector3(_e280, _e280, _e280);
                            var _t263 = 1.3, _i112 = 1, _n68 = this;
                            Laya.Tween.to(_a198.transform, {
                                localScaleX: _t263,
                                localScaleY: _t263,
                                localScaleZ: _t263
                            }, 200, Laya.Ease.linearIn, new Laya.Handler(this, function() {
                                Laya.Tween.to(_a198.transform, {
                                    localScaleX: _i112,
                                    localScaleY: _i112,
                                    localScaleZ: _i112
                                }, 50, Laya.Ease.linearIn, new Laya.Handler(_n68, _n68.showCubeBounceAnimation, [ _o58 ]));
                            }));
                        }
                        if (_a198.active = !0, 1 == Zt.Instance.SceneIndex && "7_7" == e.Config.Key) {
                            _a198.getChildByName("model").active = !1;
                        }
                        Ge.Instance.addBaseBlockModel(e, _a198), this.initFunctionBuilding(e), this.mapOutFunctionBuilding(_a198, e, _s45, t);
                    }
                }
            }
        }, {
            key: "initFunctionBuilding",
            value: function initFunctionBuilding(e) {
                switch (e.Config.functionType) {
                  case n.Pasture:
                    var _t264 = e.Config.functionConfig, _a199 = new St(e.k, _t264.treeClear, 0);
                    me.Instance.addPBlockAfterEntryGame(_a199);
                    break;

                  case n.Warehouse:
                    var _i113 = kt.createNewInfo(e.k);
                    ce.Instance.addPBlockAfterEntryGame(_i113);
                    break;

                  case n.FruitTree:
                    var _o59 = Tt.createNewInfo(e.k);
                    ve.Instance.addFTBlockAfterEntryGame(_o59);
                    break;

                  case n.Beehive:
                    var _s46 = Pt.createNewInfo(e.k);
                    ke.Instance.addBHBlockAfterEntryGame(_s46);
                    break;

                  case n.Farm:
                    var _r21 = e.Config.functionConfig, _l26 = new Gt(e.k, _r21.treeClear, 0);
                    Be.Instance.addFarmBlockAfterEntryGame(_l26);
                }
            }
        }, {
            key: "mapOutFunctionBuilding",
            value: function mapOutFunctionBuilding(t, a, i, o) {
                if (a) switch (a.Config.functionType) {
                  case n.Pasture:
                    {
                        var _e281 = me.Instance.getPBlockByKey(a.k), _n69 = new nt();
                        _n69.rootModel = t, _n69.blockInfo = a, _n69.blockConfig = i, _n69.pastureBlockInfo = _e281, 
                        _n69.pastureBlockConfig = _e281.PastureConfig, _n69.needCreateAnimation = o, me.Instance.addPController(_n69), 
                        t.name = "Pasture" + i.id, t.addComponentIntance(_n69), "-3_2" == a.k && Ue.Instance.completedGuide(19);
                    }
                    break;

                  case n.Farm:
                    {
                        var _e282 = Be.Instance.getFarmBlockByKey(a.k), _n70 = new Ft();
                        _n70.rootModel = t, _n70.blockInfo = a, _n70.blockConfig = i, _n70.farmBlockInfo = _e282, 
                        _n70.farmBlockConfig = _e282.Config, _n70.needCreateAnimation = o, Be.Instance.addFarmController(_n70), 
                        t.name = "Farm" + i.id, t.addComponentIntance(_n70);
                    }
                    break;

                  case n.Shop:
                    {
                        var _n71 = new ht();
                        _n71.rootModel = t, _n71.blockInfo = a, _n71.blockConfig = i, "0_2" == a.k ? Ue.Instance.completedGuide(1) : "-5_1" == a.k && Ue.Instance.completedGuide(16);
                        var _s48 = b.Instance.ShopMapConfigDic[a.k];
                        _n71.shopConfig = _s48, _n71.needCreateAnimation = o, _s48.isPurchaseAllAnimal && Laya.stage.event(e.SHOW_BIG_SHOP_BUTTON_UI), 
                        Oe.Instance.addSController(_n71), t.name = "Shop" + i.id, t.addComponentIntance(_n71);
                    }
                    break;

                  case n.SwitchScenePoint:
                    {
                        var _e283 = new lt();
                        _e283.rootModel = t, _e283.blockInfo = a, _e283.blockConfig = i;
                        var _n72 = Dt.Instance.switchSceneMapConfigDic[a.k];
                        _e283.switchSceneConfig = _n72, _e283.needCreateAnimation = o, Ve.Instance.addSController(_e283), 
                        t.name = "SwitchSceneBlock" + i.id, t.addComponentIntance(_e283);
                    }
                    break;

                  case n.Warehouse:
                    var _s47 = new Ct();
                    _s47.rootModel = t, _s47.blockInfo = a, _s47.blockConfig = i;
                    var _r22 = qt.Instance.WarehouseConfigDic[a.k];
                    if (_r22.isCollectAllWarehouse) Laya.stage.event(e.SHOW_BIG_WAREHOUSE_BUTTON_UI); else {
                        var _e284 = ce.Instance.getWBlockByKey(a.k);
                        _s47.warehouseBlockInfo = _e284;
                    }
                    _s47.warehouseMapConfig = _r22, _s47.needCreateAnimation = o, ce.Instance.addWhController(_s47), 
                    t.name = "Warehouse" + i.id, t.addComponentIntance(_s47);
                    break;

                  case n.FruitTree:
                    var _l27 = ve.Instance.getPTlockByKey(a.k), _c20 = new Mt();
                    _c20.rootModel = t, _c20.blockInfo = a, _c20.blockConfig = i;
                    var _h11 = Pe.Instance.FruitTreeMapConfigDic[a.k];
                    _c20.fruitTreeBlockInfo = _l27, _c20.fruitTreeMapConfig = _h11, _c20.needCreateAnimation = o, 
                    ve.Instance.addFTController(_c20), t.name = "FruitTree" + i.id, t.addComponentIntance(_c20);
                    break;

                  case n.Beehive:
                    var _d7 = ke.Instance.getPTlockByKey(a.k), _m8 = new vt();
                    _m8.rootModel = t, _m8.blockInfo = a, _m8.blockConfig = i;
                    var _g3 = Se.Instance.BeehiveMapConfigDic[a.k];
                    _m8.beehiveBlockInfo = _d7, _m8.beehiveMapConfig = _g3, _m8.needCreateAnimation = o, 
                    ke.Instance.addBHController(_m8), t.name = "BeehiveTree" + i.id, t.addComponentIntance(_m8);
                    break;

                  default:
                    "-1_2" == a.k ? Ue.Instance.completedGuide(4) : "-1_3" == a.k ? Ue.Instance.completedGuide(7) : "-1_4" == a.k ? Ue.Instance.completedGuide(8) : "-2_4" == a.k ? Ue.Instance.completedGuide(9) : "-2_1" == a.k ? Ue.Instance.completedGuide(11) : "-2_0" == a.k ? Ue.Instance.completedGuide(12) : "-3_0" == a.k ? Ue.Instance.completedGuide(13) : "-4_0" == a.k ? Ue.Instance.completedGuide(14) : "-5_0" == a.k && Ue.Instance.completedGuide(15);
                }
            }
        }, {
            key: "showCubeBounceAnimation",
            value: function showCubeBounceAnimation(e) {
                Lt.Instance.showAnimation(e);
            }
        }, {
            key: "mapOutDecorativeByConfig",
            value: function mapOutDecorativeByConfig(e, t) {
                if (e && t && t.length > 0) {
                    var _iterator25 = _createForOfIteratorHelper2(t), _step25;
                    try {
                        for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
                            var _a200 = _step25.value;
                            if (_a200) {
                                var _t265 = this.DecorativeModelSprite3DDic[_a200.id];
                                if (_t265) {
                                    var _i114 = new Laya.Vector3(_a200.x, 0, _a200.z), _n73 = Laya.MeshSprite3D.instantiate(_t265, e, !1, _i114);
                                    _n73.transform.localRotationEuler = new Laya.Vector3(0, _a200.rotationY, 0), _n73.active = !0;
                                }
                            }
                        }
                    } catch (err) {
                        _iterator25.e(err);
                    } finally {
                        _iterator25.f();
                    }
                }
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Wt.instance || (Wt.instance = new Wt()), Wt.instance;
            }
        }, {
            key: "SceneRoot",
            get: function get() {
                return Wt.sceneRoot;
            }
        } ]);
        return Wt;
    }();
    Wt.instance = null;
    var Ht = /* */ function() {
        function Ht() {
            _classCallCheck2(this, Ht);
        }
        _createClass2(Ht, null, [ {
            key: "log",
            value: function log(e) {}
        }, {
            key: "debugLog",
            value: function debugLog(e) {
                console.log(e);
            }
        } ]);
        return Ht;
    }();
    var jt = /* */ function(_Laya$Script13) {
        _inherits2(jt, _Laya$Script13);
        var _super32 = _createSuper2(jt);
        function jt() {
            var _this46;
            _classCallCheck2(this, jt);
            _this46 = _super32.call(this), jt.mInstance = _assertThisInitialized2(_this46);
            return _this46;
        }
        _createClass2(jt, [ {
            key: "onAwake",
            value: function onAwake() {
                this.rootView = this.owner, this.initUI();
                var e = this.rootView.getChildByName("OperationView");
                this.OperationView = e, e.mouseThrough = !0;
            }
        }, {
            key: "initUI",
            value: function initUI() {
                console.log("主页面Global.Instance.statusBarHeight：" + sa.Instance.statusBarHeight);
                var e = this.owner.getChildByName("TopView");
                this.TopView = e, this.RightView = this.owner.getChildByName("RightView"), this.LeftBottomView = this.owner.getChildByName("LeftBottomView"), 
                e && (e.top += sa.Instance.statusBarHeight), this.loadingImage = this.owner.getChildByName("LoadingImage"), 
                Laya.stage.addChild(sa.Instance.getScene3D());
            }
        }, {
            key: "onStart",
            value: function onStart() {
                Wt.Instance.initScene(), Laya.timer.once(800, Kt.Instance, Kt.Instance.init), Laya.Browser.onTTMiniGame || He.Instance.showCustomGridAd(!0), 
                Ht.log("TEST");
            }
        }, {
            key: "hideUIWithoutOPView",
            value: function hideUIWithoutOPView() {
                this.rootView && (this.TopView.visible = !1, this.RightView.visible = !1, this.LeftBottomView.visible = !1);
            }
        }, {
            key: "hideUI",
            value: function hideUI() {
                this.rootView && (this.TopView.visible = !1, this.RightView.visible = !1, this.OperationView.visible = !1, 
                this.LeftBottomView.visible = !1);
            }
        }, {
            key: "showUI",
            value: function showUI() {
                this.rootView && (this.TopView.visible = !0, this.RightView.visible = !0, this.OperationView.visible = !0, 
                this.LeftBottomView.visible = !0);
            }
        }, {
            key: "showLoading",
            value: function showLoading() {
                var e = pe.Instance.getCamera().transform.localRotationEulerX;
                pe.Instance.getCamera().transform.localRotationEulerX -= 15;
                var t = this;
                t.loadingImage.visible = !0, this.loadingImage.alpha = 0;
                Laya.Tween.to(t.loadingImage, {
                    alpha: 1
                }, 100, Laya.Ease.linearNone, new Laya.Handler(this, function() {
                    Laya.Tween.to(t.loadingImage, {
                        alpha: 0
                    }, 400, Laya.Ease.linearNone, new Laya.Handler(this, function() {
                        t.loadingImage.visible = !1;
                    })), Laya.Tween.to(pe.Instance.getCamera().transform, {
                        localRotationEulerX: e
                    }, 400, Laya.Ease.linearNone);
                }));
            }
        }, {
            key: "showSwitchLongLoading",
            value: function showSwitchLongLoading() {
                var e = this;
                e.loadingImage.visible = !0, this.loadingImage.alpha = 0, Laya.Tween.to(e.loadingImage, {
                    alpha: 1
                }, 1e3, Laya.Ease.linearNone, new Laya.Handler(this, function() {
                    Laya.timer.once(200, e, e.switchLoadingStep2);
                }));
            }
        }, {
            key: "showSwitchShortLoading",
            value: function showSwitchShortLoading() {
                this.loadingImage.visible = !0, this.loadingImage.alpha = 1, Laya.timer.once(200, this, this.switchLoadingStep2);
            }
        }, {
            key: "switchLoadingStep2",
            value: function switchLoadingStep2() {
                var e = this;
                Laya.Tween.to(e.loadingImage, {
                    alpha: 0
                }, 300, Laya.Ease.linearNone, new Laya.Handler(this, function() {
                    e.loadingImage.visible = !1;
                }));
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return jt.mInstance;
            }
        } ]);
        return jt;
    }(Laya.Script);
    var Xt = /* */ function() {
        function Xt() {
            _classCallCheck2(this, Xt);
        }
        _createClass2(Xt, [ {
            key: "init",
            value: function init(e) {
                e.active = !1, this.animator = e.getChildByName("zhouye").getComponent(Laya.Animator), 
                this.DayAndNight = e;
            }
        }, {
            key: "show",
            value: function show() {
                jt.Instance.hideUI(), this.DayAndNight.active = !0, this.animator.play("zouye", 0, 0), 
                Laya.timer.once(2e3, this, this.hide);
            }
        }, {
            key: "hide",
            value: function hide() {
                me.Instance.allPastureAnimalBeAdult(), Be.Instance.allPastureAnimalBeAdult(), et.Instance.onRefresh(), 
                this.DayAndNight.active = !1, jt.Instance.showUI();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Xt.mInstance || (Xt.mInstance = new Xt()), Xt.mInstance;
            }
        } ]);
        return Xt;
    }();
    var Yt = /* */ function(_Laya$Script3D12) {
        _inherits2(Yt, _Laya$Script3D12);
        var _super33 = _createSuper2(Yt);
        function Yt() {
            var _this47;
            _classCallCheck2(this, Yt);
            _this47 = _super33.call(this), _this47.walkSpeed = .4, _this47.runSpeed = .75, _this47.motorcycleSpeed = 2, 
            _this47.mSpeed = 1, _this47.mSceneId = 1, _this47.mLastBlockKey = "", _this47.mMoveMode = W.Stop, 
            _this47.mBaseActionMode = H.Idle, _this47.mUpBodyActionMode = j.None, _this47.mAllBodyActionMode = X.None, 
            _this47.weaponNameArray = [ [ "l_w_0_1", "l_w_0_2" ], [ "l_w_1_1", "l_w_1_2" ], [ "l_w_2_1", "l_w_2_2" ], [ "l_w_3_1", "l_w_3_2" ], [ "r_w_1", "r_w_4" ], [ "r_w_2", "r_w_3" ], [ "r_w_5", "r_w_5" ], [ "r_w_6", "r_w_7" ] ], 
            _this47.throwAndAttackFrameCount = -1, _this47.onLateUpdateCount = 0, _this47.tempShopController = null, 
            _this47.tempPController = null, _this47.tempWhController = null, _this47.tempFTController = null, 
            _this47.tempBeehiveController = null, _this47.tempSwitchSceneController = null, 
            _this47.tempFarmController = null, _this47.ZIsVertical = !0, _this47.mIsGoingToSwitchScenePoint = !1, 
            _this47.showWeapon = !1, _this47.WeaponRawIndex = 0, _this47.WeaponColumeIndex = 0, 
            _this47.isStopAttack = !1, Yt.instance = _assertThisInitialized2(_this47);
            return _this47;
        }
        _createClass2(Yt, [ {
            key: "SceneId",
            get: function get() {
                return this.mSceneId;
            },
            set: function set(e) {
                this.mSceneId != e && (console.log("进入不同场景" + e), this.mSceneId = e, Kt.Instance.enterDifferentScene(e));
            }
        }, {
            key: "resetCharacterToInit",
            value: function resetCharacterToInit() {
                this.gameObject.transform.position = new Laya.Vector3(-1, 0, 1), this.tempShopController = null, 
                this.tempPController = null, this.tempWhController = null, this.tempFTController = null, 
                this.tempBeehiveController = null, this.tempSwitchSceneController = null, this.mIsGoingToSwitchScenePoint = !1, 
                this.beCommonActionInThePasture(null, null);
            }
        }, {
            key: "LastBlockKey",
            get: function get() {
                return this.mLastBlockKey;
            },
            set: function set(e) {
                e != this.mLastBlockKey && (1 == Zt.Instance.SceneIndex && (e == Zt.Instance.SceneSwitchFirstBridgeKey ? this.mIsGoingToSwitchScenePoint || (this.mIsGoingToSwitchScenePoint = !0, 
                jt.Instance.hideUIWithoutOPView(), pe.Instance.switchCameraState(3), lt.Instance.forwardToIsland()) : e == Zt.Instance.SceneSwitchPreBlockKey && this.mIsGoingToSwitchScenePoint && (this.mIsGoingToSwitchScenePoint = !1, 
                jt.Instance.showUI(), pe.Instance.switchCameraState(0))), Kt.Instance.enterDifferentBlock(e)), 
                this.mLastBlockKey = e;
            }
        }, {
            key: "MoveMode",
            set: function set(e) {
                if (this.mMoveMode != e) switch (this.mMoveMode = e, e) {
                  case W.Stop:
                    this.motrocycleAnimator.speed = 0, this.BaseActionMode = H.Idle;
                    break;

                  case W.Move:
                    this.motrocycleAnimator.speed = 1, this.UpBodyActionMode != j.None || this.AllBodyActionMode == X.RotateAttack ? this.BaseActionMode = H.Walk : (this.BaseActionMode = H.Run, 
                    !this.isInPastureOrFarm() && this.isHadRide() && (Yt.Instance.AllBodyActionMode = X.Riding));
                }
            }
        }, {
            key: "BaseActionMode",
            get: function get() {
                return this.mBaseActionMode;
            },
            set: function set(e) {
                if (this.mBaseActionMode != e) switch (this.mBaseActionMode = e, e) {
                  case H.Idle:
                    this.AllBodyActionMode == X.None && this.playIdle();
                    break;

                  case H.Walk:
                    this.mSpeed = this.walkSpeed, this.AllBodyActionMode == X.None && this.playWalk();
                    break;

                  case H.Run:
                    this.AllBodyActionMode == X.None && (this.mSpeed = this.runSpeed, this.playRun());
                }
            }
        }, {
            key: "UpBodyActionMode",
            get: function get() {
                return this.mUpBodyActionMode;
            },
            set: function set(e) {
                if (this.mUpBodyActionMode != e) switch (this.hitOritionOffsetPosition = null, e != j.None && (this.AllBodyActionMode = X.None, 
                this.BaseActionMode = H.None, this.BaseActionMode = H.Idle), this.mUpBodyActionMode = e, 
                e) {
                  case j.None:
                    et.Instance.awakeShow(this.tempPController, this.tempFarmController), this.AllBodyActionMode != X.RotateAttack && this.hideAllWeapon(), 
                    this.playUpEmpty();
                    break;

                  case j.ReleaseAnimal:
                    this.releaseAnimal();
                    break;

                  case j.Feed:
                    this.feedAnimal();
                    break;

                  case j.SowSeed:
                    this.sowSeed();

                  case j.Watering:
                    this.watering();
                    break;

                  case j.Attack:
                    this.attackAnimal();
                    break;

                  case j.Harvest:
                    this.harvestCrops();
                }
            }
        }, {
            key: "AllBodyActionMode",
            get: function get() {
                return this.mAllBodyActionMode;
            },
            set: function set(e) {
                if (this.mAllBodyActionMode != e) {
                    var _t266 = this.mAllBodyActionMode;
                    switch (this.mAllBodyActionMode = e, e != X.None && (this.BaseActionMode = H.None, 
                    this.UpBodyActionMode = j.None), e) {
                      case X.None:
                        et.Instance.awakeShow(this.tempPController, this.tempFarmController), _t266 == X.Riding ? this.leaveTheMotorbycle() : _t266 == X.RotateAttack ? (oe.Instance.stopRotateAttackSound(), 
                        this.hideAllWeapon()) : _t266 == X.CollectHoney && this.hideAllWeapon();
                        break;

                      case X.Riding:
                        et.Instance.awakeShow(this.tempPController, this.tempFarmController), this.hideAllWeapon(), 
                        this.rideTheMotorbycle();
                        break;

                      case X.RotateAttack:
                        _t266 == X.Riding && this.leaveTheMotorbycle(), this.playRotateAttack();
                        break;

                      case X.ShakingFruitTree:
                    }
                }
            }
        }, {
            key: "onAwake",
            value: function onAwake() {
                this.gameObject = this.owner, Kt.Instance.lastStandX = Math.round(this.gameObject.transform.position.x), 
                Kt.Instance.lastStandZ = Math.round(this.gameObject.transform.position.z), this.model = this.gameObject.getChildByName("model"), 
                this.topGameObject = this.gameObject.getChildByName("Top"), this.motorcycleModel = this.gameObject.getChildByName("model").getChildByName("dj_motuoche"), 
                this.motorcycleModel.active = !1, this.HorizontalArrow = this.gameObject.getChildByName("HorizontalArrow"), 
                this.HorizontalArrow.active = !Ue.Instance.AllGuideIsCompleted;
                var e = this.gameObject.getChildByName("DayAndNight");
                Xt.Instance.init(e), this.buffModel = this.gameObject.getChildByName("Buff"), this.mappingBone(), 
                this.initRigidbody(), this.initAnimation();
            }
        }, {
            key: "initRigidbody",
            value: function initRigidbody() {
                var e = this.owner.getComponent(Laya.Rigidbody3D);
                e.angularFactor = new Laya.Vector3(0, 0, 0), e.linearFactor = new Laya.Vector3(1, 0, 1), 
                e.linearDamping = 10, e.mass = 1e3;
            }
        }, {
            key: "initAnimation",
            value: function initAnimation() {
                this.animator = this.model.getChildByName("zj0001").getComponent(Laya.Animator), 
                this.motrocycleAnimator = this.motorcycleModel.getComponent(Laya.Animator), this.motrocycleAnimator.speed = 0, 
                this.avatarMask = this.animator.getControllerLayer(1).avatarMask;
            }
        }, {
            key: "mappingBone",
            value: function mappingBone() {
                var e = this.model.getChildByName("zj0001"), t = e;
                var _iterator26 = _createForOfIteratorHelper2(ft.leftNodeNameArray), _step26;
                try {
                    for (_iterator26.s(); !(_step26 = _iterator26.n()).done; ) {
                        var _e286 = _step26.value;
                        t = t.getChildByName(_e286);
                    }
                } catch (err) {
                    _iterator26.e(err);
                } finally {
                    _iterator26.f();
                }
                this.leftHandWeaponNode = t;
                var a = e;
                var _iterator27 = _createForOfIteratorHelper2(ft.rightNodeNameArray), _step27;
                try {
                    for (_iterator27.s(); !(_step27 = _iterator27.n()).done; ) {
                        var _e287 = _step27.value;
                        a = a.getChildByName(_e287);
                    }
                } catch (err) {
                    _iterator27.e(err);
                } finally {
                    _iterator27.f();
                }
                this.rightHandWeaponNode = a, this.weaponModelArray = new Array(8);
                for (var _e285 = 0; _e285 < this.weaponModelArray.length; _e285++) {
                    this.weaponModelArray[_e285] = new Array(2);
                    for (var _i115 = 0; _i115 < 2; _i115++) {
                        var _n74 = void 0;
                        if (_e285 < 4) {
                            var _a201 = this.weaponNameArray[_e285][_i115];
                            _n74 = t.getChildByName(_a201), "l_w_3_1" == _a201 ? this.waterPoint1 = _n74.getChildByName("waterPoint") : "l_w_3_2" == _a201 && (this.waterPoint2 = _n74.getChildByName("waterPoint"));
                        } else _n74 = a.getChildByName(this.weaponNameArray[_e285][_i115]);
                        this.weaponModelArray[_e285][_i115] = _n74, _n74.active = !1;
                    }
                }
            }
        }, {
            key: "resetHitOritionOffestPosition",
            value: function resetHitOritionOffestPosition(e) {
                this.hitOritionOffsetPosition = new Laya.Vector3(e.x, 0, e.z);
            }
        }, {
            key: "hitDetection",
            value: function hitDetection(e) {
                if (this.isStopAttack) return !1;
                var t = !1, a = this.gameObject.transform.position, i = Ee.Instance.isStrongMode;
                switch (this.UpBodyActionMode) {
                  case j.Feed:
                  case j.SowSeed:
                    this.hitOritionOffsetPosition && (a = this.hitOritionOffsetPosition);

                  case j.Watering:
                    var _e288 = i ? this.waterPoint2 : this.waterPoint1;
                    a = new Laya.Vector3(_e288.transform.position.x, 0, _e288.transform.position.z);
                }
                var n = new Laya.Vector3(0, 0, 0);
                Laya.Vector3.subtract(e, a, n), n.y = 0;
                var o = Laya.Vector3.scalarLength(n), s = Yt.attackDistance;
                if (i && (s = Yt.strongAttackDistance), o <= s) if (this.AllBodyActionMode == X.RotateAttack) t = !0; else if (o <= .1) t = !0; else {
                    var _e289 = new Laya.Vector3(0, 0, 0);
                    this.model.transform.getForward(_e289), _e289.x = -_e289.x, _e289.z = -_e289.z, 
                    r.getVector3Angle(_e289, n) <= .58 * Yt.fanAngle && (t = !0);
                }
                return t;
            }
        }, {
            key: "releaseAnimal",
            value: function releaseAnimal() {
                this.throwAndAttackFrameCount = 0;
            }
        }, {
            key: "feedAnimal",
            value: function feedAnimal() {
                this.throwAndAttackFrameCount = 0;
            }
        }, {
            key: "attackAnimal",
            value: function attackAnimal() {
                this.throwAndAttackFrameCount = 0;
            }
        }, {
            key: "harvestCrops",
            value: function harvestCrops() {
                this.throwAndAttackFrameCount = 0;
            }
        }, {
            key: "sowSeed",
            value: function sowSeed() {
                this.throwAndAttackFrameCount = 0;
            }
        }, {
            key: "watering",
            value: function watering() {
                this.throwAndAttackFrameCount = 0, this.playWatering();
            }
        }, {
            key: "throwAnimal",
            value: function throwAnimal() {
                if (this.tempPController) {
                    var _e290 = new Laya.Vector3(this.rightHandWeaponNode.transform.position.x, this.rightHandWeaponNode.transform.position.y, this.rightHandWeaponNode.transform.position.z), _t267 = this.model.transform.localRotationEulerY;
                    this.tempPController.onThrowAnimal(_e290, _t267);
                }
            }
        }, {
            key: "throwFeed",
            value: function throwFeed() {
                if (this.tempPController) {
                    var _e291 = new Laya.Vector3(this.rightHandWeaponNode.transform.position.x, this.rightHandWeaponNode.transform.position.y, this.rightHandWeaponNode.transform.position.z);
                    this.resetHitOritionOffestPosition(_e291);
                    var _t268 = this.model.transform.localRotationEulerY;
                    this.tempPController.onThrowAnimalFeed(_e291, _t268);
                }
            }
        }, {
            key: "throwSeeds",
            value: function throwSeeds() {
                if (this.tempFarmController) {
                    var _e292 = new Laya.Vector3(this.rightHandWeaponNode.transform.position.x, this.rightHandWeaponNode.transform.position.y, this.rightHandWeaponNode.transform.position.z), _t269 = this.model.transform.localRotationEulerY;
                    this.resetHitOritionOffestPosition(_e292), this.tempFarmController.onThrowSeeds(_e292, _t269);
                }
            }
        }, {
            key: "checkSowSeeds",
            value: function checkSowSeeds() {
                this.tempFarmController && this.tempFarmController.checkSowSeed();
            }
        }, {
            key: "throwWaterDrop",
            value: function throwWaterDrop() {
                if (this.tempFarmController) {
                    var _e293 = Ee.Instance.isStrongMode ? this.waterPoint2 : this.waterPoint1, _t270 = new Laya.Vector3(_e293.transform.position.x, _e293.transform.position.y, _e293.transform.position.z), _a202 = this.model.transform.localRotationEulerY;
                    this.tempFarmController.onThrowWaterDrop(_t270, _a202);
                }
            }
        }, {
            key: "checkWatering",
            value: function checkWatering() {
                this.tempFarmController && this.tempFarmController.onCheckWatering();
            }
        }, {
            key: "attackAnimalCheck",
            value: function attackAnimalCheck() {
                this.tempPController && this.tempPController.onAttackAnimal();
            }
        }, {
            key: "harvestCropsCheck",
            value: function harvestCropsCheck() {
                this.tempFarmController && this.tempFarmController.onHarvestCrops();
            }
        }, {
            key: "hideModel",
            value: function hideModel() {
                this.model.active = !1;
            }
        }, {
            key: "showModel",
            value: function showModel() {
                this.model.active = !0, this.AllBodyActionMode == X.Riding && (this.AllBodyActionMode = X.None, 
                this.AllBodyActionMode = X.Riding);
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (Ee.Instance.allUnlockBlock && this.model.active) {
                    if (Fe.Instance && Fe.Instance.stick_flag && !Fe.Instance.banMove && this.gameObject && this.AllBodyActionMode != X.ShakingFruitTree && this.AllBodyActionMode != X.CollectHoney) {
                        var _e294 = Laya.timer.delta / 1e3, _t271 = Fe.Instance.dir.x * _e294 * this.mSpeed, _a203 = Fe.Instance.dir.y * _e294 * this.mSpeed;
                        if (this.ZIsVertical) {
                            var _e295 = this.gameObject.transform.position.x - _t271, _i116 = this.gameObject.transform.position.z - _a203, _n75 = ea.Instance.realReachedPosition(_e295, _i116, this.gameObject.transform.localPosition);
                            _n75 && (this.gameObject.transform.position = _n75), this.model.transform.lookAt(new Laya.Vector3(Fe.Instance.dir.x, 0, Fe.Instance.dir.y), new Laya.Vector3(0, 1, 0), !0);
                        } else {
                            var _e296 = this.gameObject.transform.position.x - _a203, _i117 = this.gameObject.transform.position.z + _t271, _n76 = ea.Instance.realReachedPosition(_e296, _i117, this.gameObject.transform.localPosition);
                            _n76 && (this.gameObject.transform.position = _n76), this.model.transform.lookAt(new Laya.Vector3(Fe.Instance.dir.y, 0, -Fe.Instance.dir.x), new Laya.Vector3(0, 1, 0), !0);
                        }
                    }
                    switch (this.UpBodyActionMode) {
                      case j.SowSeed:
                        0 == this.throwAndAttackFrameCount ? this.playUpSowSeed() : 32 == this.throwAndAttackFrameCount ? this.throwSeeds() : this.throwAndAttackFrameCount >= 36 && (this.throwAndAttackFrameCount = -1), 
                        this.throwAndAttackFrameCount++;
                        break;

                      case j.Watering:
                        this.throwWaterDrop(), 0 == this.throwAndAttackFrameCount || this.throwAndAttackFrameCount >= 24 && (this.checkWatering(), 
                        this.throwAndAttackFrameCount = -1), this.throwAndAttackFrameCount++;
                        break;

                      case j.ReleaseAnimal:
                        Ee.Instance.isStrongMode ? 0 == this.throwAndAttackFrameCount ? this.playUpReleaseAnimal(2) : 17 == this.throwAndAttackFrameCount ? this.throwAnimal() : this.throwAndAttackFrameCount >= 24 && (this.throwAndAttackFrameCount = -1) : 0 == this.throwAndAttackFrameCount ? this.playUpReleaseAnimal(1) : 34 == this.throwAndAttackFrameCount ? this.throwAnimal() : this.throwAndAttackFrameCount >= 48 && (this.throwAndAttackFrameCount = -1), 
                        this.throwAndAttackFrameCount++;
                        break;

                      case j.Feed:
                        0 == this.throwAndAttackFrameCount ? this.playUpFeed() : 32 == this.throwAndAttackFrameCount ? this.throwFeed() : this.throwAndAttackFrameCount >= 36 && (this.throwAndAttackFrameCount = -1), 
                        this.throwAndAttackFrameCount++;
                        break;

                      case j.Attack:
                        0 == this.throwAndAttackFrameCount ? this.playUpAttack() : 8 == this.throwAndAttackFrameCount ? this.attackAnimalCheck() : this.throwAndAttackFrameCount >= 36 && (this.throwAndAttackFrameCount = -1), 
                        this.throwAndAttackFrameCount++;
                        break;

                      case j.Harvest:
                        0 == this.throwAndAttackFrameCount ? this.playUpAttack() : 10 == this.throwAndAttackFrameCount ? this.harvestCropsCheck() : this.throwAndAttackFrameCount >= 36 && (this.throwAndAttackFrameCount = -1), 
                        this.throwAndAttackFrameCount++;
                    }
                }
            }
        }, {
            key: "onLateUpdate",
            value: function onLateUpdate() {
                if (!Zt.Instance.IsSwitching) if (this.onLateUpdateCount++, this.onLateUpdateCount >= 3 && (this.onCheck(), 
                this.onLateUpdateCount = 0, this.buffModel.active = Ee.Instance.isStrongMode), Ue.Instance.AllGuideIsCompleted) {
                    if (Ue.Instance.GoToWarehouseKey) {
                        var _e297 = Ue.Instance.targetWareHousePosition;
                        if (_e297) {
                            var _t272 = new Laya.Vector3();
                            Laya.Vector3.subtract(_e297, this.gameObject.transform.position, _t272), Laya.Vector3.scalarLengthSquared(_t272) <= .5 ? (this.HorizontalArrow.active = !1, 
                            Ue.Instance.startRotateVerticalArrow()) : (Ue.Instance.showVerticalArrow(), this.HorizontalArrow.active = !0, 
                            this.HorizontalArrow.transform.lookAt(new Laya.Vector3(-_t272.x, 0, -_t272.z), new Laya.Vector3(0, 1, 0), !0));
                        } else Ue.Instance.hideVerticalArrow(), this.HorizontalArrow.active = !1;
                    } else this.HorizontalArrow.active = !1;
                } else {
                    var _e298 = Ue.Instance.getTargetPosition();
                    if (_e298) {
                        var _t273 = new Laya.Vector3();
                        Laya.Vector3.subtract(_e298, this.gameObject.transform.position, _t273), Laya.Vector3.scalarLengthSquared(_t273) <= .5 ? (this.HorizontalArrow.active = !1, 
                        Ue.Instance.startRotateVerticalArrow()) : (Ue.Instance.showVerticalArrow(), this.HorizontalArrow.active = !0, 
                        this.HorizontalArrow.transform.lookAt(new Laya.Vector3(-_t273.x, 0, -_t273.z), new Laya.Vector3(0, 1, 0), !0));
                    } else Ue.Instance.hideVerticalArrow(), this.HorizontalArrow.active = !1;
                }
            }
        }, {
            key: "transferTo",
            value: function transferTo(e) {
                var t = this.gameObject.transform.position, a = new Laya.Vector3(t.x, t.y, t.z);
                Kt.Instance.hideBlockAroundPosition(a), this.gameObject.transform.position = e, 
                Kt.Instance.enterDifferentBlock(this.getStantBlockKey());
            }
        }, {
            key: "IsGoingToSwitchScenePoint",
            get: function get() {
                return this.mIsGoingToSwitchScenePoint;
            }
        }, {
            key: "resetIsGoingToSwitchScenePointState",
            value: function resetIsGoingToSwitchScenePointState() {
                this.mIsGoingToSwitchScenePoint = !1;
            }
        }, {
            key: "onCheck",
            value: function onCheck() {
                var e = this.getStantBlockKey(), t = Ee.Instance.getUnlockBlockByKey(e);
                if (t) {
                    this.LastBlockKey = e;
                    var _a204 = t.Config;
                    switch (this.SceneId = _a204.sceneId, _a204.functionType) {
                      case n.Pasture:
                        {
                            this.tempShopController && (this.tempShopController.onCharacterExitBlock(), this.tempShopController = null), 
                            this.tempWhController && (this.tempWhController.onCharacterExitBlock(), this.tempWhController = null), 
                            this.tempFTController && (this.tempFTController.onCharacterExitBlock(), this.tempFTController = null), 
                            this.tempBeehiveController && (this.tempBeehiveController.onCharacterExitBlock(), 
                            this.tempBeehiveController = null), this.tempSwitchSceneController && (this.tempSwitchSceneController.onCharacterExitBlock(), 
                            this.tempSwitchSceneController = null), this.tempFarmController && this.onExitFarm(this.tempFarmController);
                            var _t274 = me.Instance.getPControllerByKey(e);
                            if (_t274) if (this.tempPController) {
                                if (e == this.tempPController.pastureBlockInfo.k) ; else {
                                    var _e299 = !1;
                                    _e299 = _t274.pastureBlockConfig.type == this.tempPController.pastureBlockConfig.type && _t274.pastureBlockInfo.tC == this.tempPController.pastureBlockInfo.tC, 
                                    this.onExitPasture(this.tempPController, _e299), this.onEnterPasture(_t274, _e299);
                                }
                            } else this.onEnterPasture(_t274);
                        }
                        break;

                      case n.Farm:
                        {
                            this.tempShopController && (this.tempShopController.onCharacterExitBlock(), this.tempShopController = null), 
                            this.tempPController && this.onExitPasture(this.tempPController), this.tempWhController && (this.tempWhController.onCharacterExitBlock(), 
                            this.tempWhController = null), this.tempFTController && (this.tempFTController.onCharacterExitBlock(), 
                            this.tempFTController = null), this.tempBeehiveController && (this.tempBeehiveController.onCharacterExitBlock(), 
                            this.tempBeehiveController = null), this.tempSwitchSceneController && (this.tempSwitchSceneController.onCharacterExitBlock(), 
                            this.tempSwitchSceneController = null);
                            var _t275 = Be.Instance.getPControllerByKey(e);
                            if (_t275) if (this.tempFarmController) {
                                if (e == this.tempFarmController.farmBlockInfo.k) ; else {
                                    var _e300 = !1;
                                    _e300 = _t275.farmBlockConfig.type == this.tempFarmController.farmBlockConfig.type && _t275.farmBlockInfo.tC == this.tempFarmController.farmBlockInfo.tC, 
                                    this.onExitFarm(this.tempFarmController, _e300), this.onEnterFarm(_t275, _e300);
                                }
                            } else this.onEnterFarm(_t275);
                        }
                        break;

                      case n.Shop:
                        {
                            this.tempPController && this.onExitPasture(this.tempPController), this.tempWhController && (this.tempWhController.onCharacterExitBlock(), 
                            this.tempWhController = null), this.tempFTController && (this.tempFTController.onCharacterExitBlock(), 
                            this.tempFTController = null), this.tempBeehiveController && (this.tempBeehiveController.onCharacterExitBlock(), 
                            this.tempBeehiveController = null), this.tempSwitchSceneController && (this.tempSwitchSceneController.onCharacterExitBlock(), 
                            this.tempSwitchSceneController = null), this.tempFarmController && this.onExitFarm(this.tempFarmController);
                            var _t276 = Oe.Instance.getSControllerByKey(e);
                            _t276 && (this.tempShopController ? e == this.tempShopController.blockConfig.Key || (this.tempShopController.onCharacterExitBlock(), 
                            this.tempShopController = _t276, _t276.onCharacterEnterBlock()) : (this.tempShopController = _t276, 
                            _t276.onCharacterEnterBlock()));
                        }
                        break;

                      case n.Warehouse:
                        {
                            this.tempPController && this.onExitPasture(this.tempPController), this.tempShopController && (this.tempShopController.onCharacterExitBlock(), 
                            this.tempShopController = null), this.tempFTController && (this.tempFTController.onCharacterExitBlock(), 
                            this.tempFTController = null), this.tempBeehiveController && (this.tempBeehiveController.onCharacterExitBlock(), 
                            this.tempBeehiveController = null), this.tempSwitchSceneController && (this.tempSwitchSceneController.onCharacterExitBlock(), 
                            this.tempSwitchSceneController = null), this.tempFarmController && this.onExitFarm(this.tempFarmController);
                            var _t277 = ce.Instance.getWhControllerByKey(e);
                            _t277 && (this.tempWhController ? e == this.tempWhController.blockConfig.Key || (this.tempWhController.onCharacterExitBlock(), 
                            this.tempWhController = _t277, _t277.onCharacterEnterBlock()) : (this.tempWhController = _t277, 
                            _t277.onCharacterEnterBlock()));
                        }
                        break;

                      case n.FruitTree:
                        {
                            this.tempPController && this.onExitPasture(this.tempPController), this.tempShopController && (this.tempShopController.onCharacterExitBlock(), 
                            this.tempShopController = null), this.tempWhController && (this.tempWhController.onCharacterExitBlock(), 
                            this.tempWhController = null), this.tempBeehiveController && (this.tempBeehiveController.onCharacterExitBlock(), 
                            this.tempBeehiveController = null), this.tempSwitchSceneController && (this.tempSwitchSceneController.onCharacterExitBlock(), 
                            this.tempSwitchSceneController = null), this.tempFarmController && this.onExitFarm(this.tempFarmController);
                            var _t278 = ve.Instance.getFTControllerByKey(e);
                            _t278 && (this.tempFTController ? e == this.tempFTController.blockConfig.Key || (this.tempFTController.onCharacterExitBlock(), 
                            this.tempFTController = _t278, _t278.onCharacterEnterBlock()) : (this.tempFTController = _t278, 
                            _t278.onCharacterEnterBlock()));
                        }
                        break;

                      case n.Beehive:
                        {
                            this.tempPController && this.onExitPasture(this.tempPController), this.tempShopController && (this.tempShopController.onCharacterExitBlock(), 
                            this.tempShopController = null), this.tempWhController && (this.tempWhController.onCharacterExitBlock(), 
                            this.tempWhController = null), this.tempFTController && (this.tempFTController.onCharacterExitBlock(), 
                            this.tempFTController = null), this.tempSwitchSceneController && (this.tempSwitchSceneController.onCharacterExitBlock(), 
                            this.tempSwitchSceneController = null), this.tempFarmController && this.onExitFarm(this.tempFarmController);
                            var _t279 = ke.Instance.getBHControllerByKey(e);
                            _t279 && (this.tempBeehiveController ? e == this.tempBeehiveController.blockConfig.Key || (this.tempBeehiveController.onCharacterExitBlock(), 
                            this.tempBeehiveController = _t279, _t279.onCharacterEnterBlock()) : (this.tempBeehiveController = _t279, 
                            _t279.onCharacterEnterBlock()));
                        }
                        break;

                      case n.SwitchScenePoint:
                        {
                            this.tempPController && this.onExitPasture(this.tempPController), this.tempWhController && (this.tempWhController.onCharacterExitBlock(), 
                            this.tempWhController = null), this.tempFTController && (this.tempFTController.onCharacterExitBlock(), 
                            this.tempFTController = null), this.tempBeehiveController && (this.tempBeehiveController.onCharacterExitBlock(), 
                            this.tempBeehiveController = null), this.tempShopController && (this.tempShopController.onCharacterExitBlock(), 
                            this.tempShopController = null), this.tempFarmController && this.onExitFarm(this.tempFarmController);
                            var _t280 = Ve.Instance.getSControllerByKey(e);
                            _t280 && (this.tempSwitchSceneController ? e == this.tempSwitchSceneController.blockConfig.Key || (this.tempSwitchSceneController.onCharacterExitBlock(), 
                            this.tempSwitchSceneController = _t280, _t280.onCharacterEnterBlock()) : (this.tempSwitchSceneController = _t280, 
                            _t280.onCharacterEnterBlock()));
                        }
                        break;

                      case n.None:
                      default:
                        this.tempPController && this.onExitPasture(this.tempPController), this.tempShopController && (this.tempShopController.onCharacterExitBlock(), 
                        this.tempShopController = null), this.tempWhController && (this.tempWhController.onCharacterExitBlock(), 
                        this.tempWhController = null), this.tempFTController && (this.tempFTController.onCharacterExitBlock(), 
                        this.tempFTController = null), this.tempBeehiveController && (this.tempBeehiveController.onCharacterExitBlock(), 
                        this.tempBeehiveController = null), this.tempSwitchSceneController && (this.tempSwitchSceneController.onCharacterExitBlock(), 
                        this.tempSwitchSceneController = null), this.tempFarmController && this.onExitFarm(this.tempFarmController);
                    }
                }
            }
        }, {
            key: "isInPastureOrFarm",
            value: function isInPastureOrFarm() {
                return !!this.tempPController || !!this.tempFarmController;
            }
        }, {
            key: "onEnterPasture",
            value: function onEnterPasture(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                e && (e.onCharacterEnterBlock(), t || et.Instance.showPasture(e), this.tempPController = e);
            }
        }, {
            key: "onExitPasture",
            value: function onExitPasture(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                t || (this.tempPController = null), e && (e.onCharacterExitBlock(), t || (et.Instance.onLeavedPasture(), 
                this.onLeavedThePastureOrFarm()));
            }
        }, {
            key: "onEnterFarm",
            value: function onEnterFarm(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                e && (e.onCharacterEnterBlock(), t || et.Instance.showFarm(e), this.tempFarmController = e);
            }
        }, {
            key: "onExitFarm",
            value: function onExitFarm(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
                t || (this.tempFarmController = null), e && (e.onCharacterExitBlock(), t || (et.Instance.onLeavedPasture(), 
                this.onLeavedThePastureOrFarm()));
            }
        }, {
            key: "getStantBlockKey",
            value: function getStantBlockKey() {
                var e = this.gameObject.transform.position.x, t = this.gameObject.transform.position.z;
                return (e = Math.round(e)) + "_" + (t = Math.round(t));
            }
        }, {
            key: "isRiding",
            get: function get() {
                return this.motorcycleModel.active;
            }
        }, {
            key: "rideTheMotorbycle",
            value: function rideTheMotorbycle() {
                this.motorcycleModel.active || (this.mSpeed = this.motorcycleSpeed, this.playRideMotorbycle(), 
                this.motorcycleModel.active = !0);
            }
        }, {
            key: "leaveTheMotorbycle",
            value: function leaveTheMotorbycle() {
                this.motorcycleModel.active && (this.motorcycleModel.active = !1, this.BaseActionMode = H.None, 
                this.MoveMode == W.Move ? (this.BaseActionMode = H.Run, this.mSpeed = this.runSpeed) : this.BaseActionMode = H.Idle);
            }
        }, {
            key: "operationInPastureOrFarm",
            value: function operationInPastureOrFarm(e, t) {
                if (this.tempPController = e, this.tempFarmController = t, this.tempPController) {
                    if (this.selectWeapon(), this.tempPController.pastureBlockInfo.treeClear) switch (e.pastureBlockInfo.State) {
                      case 0:
                        this.UpBodyActionMode = j.ReleaseAnimal;
                        break;

                      case 1:
                        this.UpBodyActionMode = j.Feed;
                        break;

                      case 2:
                        Ee.Instance.isStrongMode ? this.AllBodyActionMode = X.RotateAttack : this.UpBodyActionMode = j.Attack;
                    } else this.AllBodyActionMode = X.RotateAttack;
                } else if (this.tempFarmController) if (this.selectWeapon(), this.tempFarmController.farmBlockInfo.treeClear) switch (this.tempFarmController.farmBlockInfo.State) {
                  case 0:
                    this.UpBodyActionMode = j.SowSeed;
                    break;

                  case 1:
                    this.UpBodyActionMode = j.Watering;
                    break;

                  case 2:
                    Ee.Instance.isStrongMode ? this.AllBodyActionMode = X.RotateAttack : this.UpBodyActionMode = j.Harvest;
                } else this.AllBodyActionMode = X.RotateAttack;
            }
        }, {
            key: "pickFtuit",
            value: function pickFtuit(e) {
                if (this.tempFTController = e, this.tempFTController) {
                    this.AllBodyActionMode = X.None, this.AllBodyActionMode = X.ShakingFruitTree;
                    var _t281 = new Laya.Vector3(e.rootModel.transform.position.x + .09, 0, e.rootModel.transform.position.z + .01);
                    this.playRun(), Fe.Instance.dir.x = _t281.x - this.gameObject.transform.position.x, 
                    Fe.Instance.dir.y = _t281.z - this.gameObject.transform.position.z, this.model.transform.lookAt(new Laya.Vector3(-Fe.Instance.dir.x, 0, -Fe.Instance.dir.y), new Laya.Vector3(0, 1, 0), !0), 
                    this.tempFTController.refreshCurrentStartPickFruitTotalAmount(), pe.Instance.switchCameraState(1), 
                    Laya.Tween.to(this.gameObject.transform, {
                        localPositionX: _t281.x,
                        localPositionY: _t281.y,
                        localPositionZ: _t281.z
                    }, 600, Laya.Ease.linearIn, new Laya.Handler(this, this.reachedFruitTree));
                }
            }
        }, {
            key: "fruitIsClear",
            value: function fruitIsClear() {
                return !this.tempFTController || this.tempFTController.fruitIsClear();
            }
        }, {
            key: "reachedFruitTree",
            value: function reachedFruitTree() {
                Fe.Instance.showProgress(3), Fe.Instance.dir.x = 1, Fe.Instance.dir.y = 0, this.model.transform.lookAt(new Laya.Vector3(Fe.Instance.dir.x, 0, Fe.Instance.dir.y), new Laya.Vector3(0, 1, 0), !0), 
                this.playShakeFruitTree();
            }
        }, {
            key: "breakOffCollectingFruit",
            value: function breakOffCollectingFruit() {
                this.completedPickFruit(), this.tempFTController && this.tempFTController.breakOffCollectingFruit();
            }
        }, {
            key: "breakOffCollectingHoney",
            value: function breakOffCollectingHoney() {
                this.completedPickFruit(), this.tempBeehiveController && this.tempBeehiveController.breakOffCollectingHoney();
            }
        }, {
            key: "completedPickFruit",
            value: function completedPickFruit() {
                this.AllBodyActionMode = X.None, this.BaseActionMode = H.None, this.BaseActionMode = H.Idle, 
                Fe.Instance.hideProgress(), pe.Instance.switchCameraState(0);
            }
        }, {
            key: "collectHoney",
            value: function collectHoney(e) {
                if (this.tempBeehiveController = e, this.tempBeehiveController) {
                    this.AllBodyActionMode = X.None, this.AllBodyActionMode = X.CollectHoney;
                    var _t282 = new Laya.Vector3(e.rootModel.transform.position.x, 0, e.rootModel.transform.position.z - .4);
                    this.playRun(), Fe.Instance.dir.x = _t282.x - this.gameObject.transform.position.x, 
                    Fe.Instance.dir.y = _t282.z - this.gameObject.transform.position.z, this.model.transform.lookAt(new Laya.Vector3(-Fe.Instance.dir.x, 0, -Fe.Instance.dir.y), new Laya.Vector3(0, 1, 0), !0), 
                    this.tempBeehiveController.refreshCurrentStartPickFruitTotalAmount(), pe.Instance.switchCameraState(2), 
                    Laya.Tween.to(this.gameObject.transform, {
                        localPositionX: _t282.x,
                        localPositionY: _t282.y,
                        localPositionZ: _t282.z
                    }, 600, Laya.Ease.linearIn, new Laya.Handler(this, this.reachedBeehiveTree)), Ue.Instance.hideVerticalArrow();
                }
            }
        }, {
            key: "honeyIsClear",
            value: function honeyIsClear() {
                return !this.tempBeehiveController || this.tempBeehiveController.honeyIsClear();
            }
        }, {
            key: "reachedBeehiveTree",
            value: function reachedBeehiveTree() {
                Fe.Instance.showProgress(4), Fe.Instance.dir.x = 0, Fe.Instance.dir.y = -1, this.model.transform.lookAt(new Laya.Vector3(Fe.Instance.dir.x, 0, Fe.Instance.dir.y), new Laya.Vector3(0, 1, 0), !0), 
                this.playCollectHoneyTree();
            }
        }, {
            key: "completedCollectHoney",
            value: function completedCollectHoney() {
                this.completedCollectHoneyState(), Fe.Instance.hideProgress(), pe.Instance.switchCameraState(0);
            }
        }, {
            key: "completedCollectHoneyState",
            value: function completedCollectHoneyState() {
                this.AllBodyActionMode = X.None, this.BaseActionMode = H.None, this.BaseActionMode = H.Idle;
            }
        }, {
            key: "onLeavedThePastureOrFarm",
            value: function onLeavedThePastureOrFarm() {
                this.UpBodyActionMode != j.None ? (this.UpBodyActionMode = j.None, this.BaseActionMode = H.Run) : this.AllBodyActionMode == X.RotateAttack && (this.AllBodyActionMode = X.None, 
                this.BaseActionMode = H.None, this.BaseActionMode = H.Run), this.isHadRide() && (Yt.Instance.AllBodyActionMode = X.Riding);
            }
        }, {
            key: "isHadRide",
            value: function isHadRide() {
                return r.getNowTimestamp() < Ee.Instance.getMotorbycleTime();
            }
        }, {
            key: "beCommonActionInThePasture",
            value: function beCommonActionInThePasture(e, t) {
                this.tempPController = e, this.tempFarmController = t, this.UpBodyActionMode != j.None ? (this.UpBodyActionMode = j.None, 
                Fe.Instance.stick_flag ? this.BaseActionMode = H.Run : this.BaseActionMode = H.Idle) : this.AllBodyActionMode == X.RotateAttack && (this.AllBodyActionMode = X.None, 
                Fe.Instance.stick_flag ? (this.BaseActionMode = H.None, this.BaseActionMode = H.Run) : (this.BaseActionMode = H.None, 
                this.BaseActionMode = H.Idle));
            }
        }, {
            key: "selectWeapon",
            value: function selectWeapon() {
                if (this.AllBodyActionMode == X.CollectHoney) {
                    this.hideAllWeapon(), this.WeaponRawIndex = 6, this.weaponModelArray[this.WeaponRawIndex][0].active = !0, 
                    this.showWeapon = !0;
                } else if (this.tempPController) {
                    if (this.hideAllWeapon(), this.WeaponRawIndex = 0, this.WeaponColumeIndex = Ee.Instance.isStrongMode ? 1 : 0, 
                    this.tempPController.pastureBlockInfo.treeClear) {
                        var _e302 = this.tempPController.pastureBlockInfo.State;
                        this.WeaponRawIndex = 2 == _e302 ? 4 : this.tempPController.pastureBlockInfo.State;
                    } else this.WeaponRawIndex = 5;
                    var _e301 = this.weaponModelArray[this.WeaponRawIndex][this.WeaponColumeIndex];
                    4 != this.WeaponRawIndex && 5 != this.WeaponRawIndex && 7 != this.WeaponRawIndex || this.clearChildTrail(_e301), 
                    _e301.active = !0, this.showWeapon = !0;
                } else if (this.tempFarmController) {
                    this.hideAllWeapon();
                    var _e303 = 0, _t283 = Ee.Instance.isStrongMode ? 1 : 0;
                    if (this.tempFarmController.farmBlockInfo.treeClear) {
                        _e303 = 2 == this.tempFarmController.farmBlockInfo.State ? 7 : this.tempFarmController.farmBlockInfo.State + 2;
                    } else _e303 = 5;
                    var _a205 = this.weaponModelArray[_e303][_t283];
                    4 != _e303 && 5 != _e303 && 7 != _e303 || this.clearChildTrail(_a205), _a205.active = !0, 
                    this.showWeapon = !0;
                }
            }
        }, {
            key: "clearChildTrail",
            value: function clearChildTrail(e) {
                for (var _t284 = 0; _t284 < e.numChildren; _t284++) {
                    var _a206 = e.getChildAt(_t284);
                    _a206 && _a206.clear();
                }
            }
        }, {
            key: "hideAllWeapon",
            value: function hideAllWeapon() {
                if (this.showWeapon) {
                    for (var _e304 = 0; _e304 < this.weaponModelArray.length; _e304++) {
                        for (var _t285 = 0; _t285 < 2; _t285++) {
                            this.weaponModelArray[_e304][_t285].active = !1;
                        }
                    }
                    this.showWeapon = !1;
                }
            }
        }, {
            key: "playIdle",
            value: function playIdle() {
                this.animator.speed = 1;
                this.animator.crossFade("daiji", .5, 0, 0);
            }
        }, {
            key: "playRun",
            value: function playRun() {
                this.animator.speed = 1, this.animator.getControllerLayer(0).getAnimatorState("pao").speed = 1, 
                this.animator.crossFade("pao", .1, 0, 0);
            }
        }, {
            key: "playWalk",
            value: function playWalk() {
                this.animator.speed = 1, this.animator.getControllerLayer(0).getAnimatorState("pao").speed = .7, 
                this.animator.crossFade("pao", .1, 0, 0);
            }
        }, {
            key: "playRideMotorbycle",
            value: function playRideMotorbycle() {
                this.animator.speed = 1, this.animator.play("zuoqi", 0, 0), this.UpBodyActionMode = j.None;
            }
        }, {
            key: "playRotateAttack",
            value: function playRotateAttack() {
                this.animator.speed = 1, oe.Instance.playRotateAttackSound(), this.animator.play("kanshu", 0, 0), 
                this.UpBodyActionMode = j.None;
            }
        }, {
            key: "playShakeFruitTree",
            value: function playShakeFruitTree() {
                this.animator.speed = 1, this.animator.play("shuiguo", 0, 0), this.animator.getControllerLayer(0).getAnimatorState("shuiguo").speed = 0, 
                this.UpBodyActionMode = j.None;
            }
        }, {
            key: "setShakeFruitTreeAnimationSpeed",
            value: function setShakeFruitTreeAnimationSpeed(e) {
                this.animator.getControllerLayer(0).getAnimatorState("shuiguo").speed = e, this.tempFTController && (e <= 0 ? this.tempFTController.pauseShakeTree() : this.tempFTController.startShakeTree());
            }
        }, {
            key: "pickOneFruit",
            value: function pickOneFruit() {
                this.tempFTController && this.tempFTController.onPickOneFruit();
            }
        }, {
            key: "playCollectHoneyTree",
            value: function playCollectHoneyTree() {
                this.selectWeapon(), this.animator.play("caimi", 0, 0), this.animator.getControllerLayer(0).getAnimatorState("caimi").speed = 0, 
                this.UpBodyActionMode = j.None;
            }
        }, {
            key: "setCollectHoneyAnimationSpeed",
            value: function setCollectHoneyAnimationSpeed(e) {
                this.animator.getControllerLayer(0).getAnimatorState("caimi").speed = e, this.tempBeehiveController && (e <= 0 ? this.tempBeehiveController.pauseCollectHoney() : this.tempBeehiveController.startCollectHoney());
            }
        }, {
            key: "collectOneHoney",
            value: function collectOneHoney() {
                this.tempBeehiveController && this.tempBeehiveController.collectOneHoney();
            }
        }, {
            key: "playUpEmpty",
            value: function playUpEmpty() {
                this.animator.getControllerLayer(1).defaultWeight = 0;
            }
        }, {
            key: "playUp",
            value: function playUp() {
                this.animator.getControllerLayer(1).defaultWeight = 1;
            }
        }, {
            key: "playUpAttack",
            value: function playUpAttack() {
                this.playUp(), oe.Instance.playAttackSound(), this.animator.speed = 1.5, this.animator.play("pugong", 1, 0);
            }
        }, {
            key: "pauseAnimation",
            value: function pauseAnimation() {
                this.isStopAttack = !0, this.animator.speed = 0;
            }
        }, {
            key: "resumeAnimation",
            value: function resumeAnimation() {
                this.isStopAttack = !1, this.animator.speed = 1;
            }
        }, {
            key: "playUpReleaseAnimal",
            value: function playUpReleaseAnimal(e) {
                this.playUp(), this.animator.speed = 1, this.animator.getControllerLayer(1).getAnimatorState("toufang").speed = e, 
                this.animator.play("toufang", 1, 0);
            }
        }, {
            key: "playUpFeed",
            value: function playUpFeed() {
                this.playUp(), oe.Instance.playFeedSound(), this.animator.speed = 1, this.animator.play("weishi", 1, 0);
            }
        }, {
            key: "playUpSowSeed",
            value: function playUpSowSeed() {
                this.playUp(), oe.Instance.playFeedSound(), this.animator.speed = 1, this.animator.play("weishi", 1, 0);
            }
        }, {
            key: "playToStrong",
            value: function playToStrong() {
                this.AllBodyActionMode = X.None, this.animator.speed = 1, this.animator.getControllerLayer(0).getAnimatorState("shengji").speed = .5, 
                this.animator.play("shengji", 0, 0);
            }
        }, {
            key: "playWatering",
            value: function playWatering() {
                this.playUp(), this.animator.speed = 1, this.animator.getControllerLayer(1).getAnimatorState("jiaoshui").speed = .25, 
                this.animator.play("jiaoshui", 1, 0);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Yt.instance;
            }
        }, {
            key: "isCharacter",
            value: function isCharacter(e) {
                return -1 != e.indexOf("Character");
            }
        }, {
            key: "isPTree",
            value: function isPTree(e) {
                return -1 != e.indexOf("PTree");
            }
        }, {
            key: "isPasture",
            value: function isPasture(e) {
                return -1 != e.indexOf("Pasture");
            }
        } ]);
        return Yt;
    }(Laya.Script3D);
    Yt.attackDistance = .3, Yt.strongAttackDistance = .6, Yt.fanAngle = 150, Yt.releaseAnimalDistance = .3, 
    Yt.releaseAnimalMaxDistance = .8, Yt.instance = null, function(e) {
        e[e.Stop = 0] = "Stop", e[e.Move = 1] = "Move";
    }(W || (W = {})), function(e) {
        e[e.None = 0] = "None", e[e.Idle = 1] = "Idle", e[e.Walk = 2] = "Walk", e[e.Run = 3] = "Run";
    }(H || (H = {})), function(e) {
        e[e.None = 0] = "None", e[e.ReleaseAnimal = 1] = "ReleaseAnimal", e[e.SowSeed = 2] = "SowSeed", 
        e[e.Watering = 3] = "Watering", e[e.Feed = 4] = "Feed", e[e.Attack = 5] = "Attack", 
        e[e.Harvest = 6] = "Harvest";
    }(j || (j = {})), function(e) {
        e[e.None = 0] = "None", e[e.RotateAttack = 1] = "RotateAttack", e[e.Riding = 2] = "Riding", 
        e[e.ShakingFruitTree = 3] = "ShakingFruitTree", e[e.CollectHoney = 4] = "CollectHoney";
    }(X || (X = {}));
    var Kt = /* */ function() {
        function Kt() {
            _classCallCheck2(this, Kt);
            if (this.mPScale = 1, this.mMScale = 1, this.isInited = !1, this.nearZlength = 6, 
            this.nearXlength = 3, this.lastStandX = -1, this.lastStandZ = 1, Laya.Browser.onIOS) console.log("在苹果设备中"), 
            this.mPScale = Kt.slowScale, this.mMScale = .75 * (1 - this.mPScale) + this.mPScale; else {
                var _e305 = Laya.stage.height / Laya.stage.width;
                console.log("长宽比" + _e305), _e305 < 2 ? (this.mPScale = Kt.slowScale, this.mMScale = .75 * (1 - this.mPScale) + this.mPScale) : r.isSlowFrameDevice() && (this.mPScale = Kt.slowScale, 
                this.mMScale = .75 * (1 - this.mPScale) + this.mPScale);
            }
        }
        _createClass2(Kt, [ {
            key: "PScale",
            get: function get() {
                return this.mPScale;
            }
        }, {
            key: "MScale",
            get: function get() {
                return this.mMScale;
            }
        }, {
            key: "init",
            value: function init() {
                if (!this.isInited) {
                    this.isInited = !0;
                    var _e306 = Ge.Instance.baseBlockDataDic, _t286 = Math.round(Yt.Instance.gameObject.transform.position.x), _a207 = Math.round(Yt.Instance.gameObject.transform.position.z);
                    for (var _o60 in _e306) {
                        var _s49 = _e306[_o60];
                        _s49 && (_s49.commonBlockItem.Config.type == i.SimpleHorizontalBridge || _s49.commonBlockItem.Config.type == i.SimpleVerticalBridge || _s49.commonBlockItem.Config.functionType == n.SwitchScenePoint ? _s49.blockModel.active = !0 : _s49.blockModel.active = this.isNearOfCharacter(_s49.x, _s49.z, _t286, _a207));
                    }
                    this.nearZlength = Kt.nearMaxZ - Kt.nearMinZ + 1, this.nearXlength = 2 * Kt.nearX + 1, 
                    ce.Instance.characterEnterSceneId(1);
                }
            }
        }, {
            key: "reset",
            value: function reset() {
                this.isInited = !1;
            }
        }, {
            key: "isNearOfCharacter",
            value: function isNearOfCharacter(e, t, a, i) {
                var n = t - i;
                return Math.abs(e - a) <= Kt.nearX && n >= Kt.nearMinZ && n <= Kt.nearMaxZ;
            }
        }, {
            key: "enterDifferentScene",
            value: function enterDifferentScene(e) {
                ce.Instance.characterEnterSceneId(e);
            }
        }, {
            key: "enterDifferentBlock",
            value: function enterDifferentBlock(e) {
                if (this.isInited) {
                    var _e307 = Math.round(Yt.Instance.gameObject.transform.position.x), _t287 = Math.round(Yt.Instance.gameObject.transform.position.z), _a208 = Ge.Instance.baseBlockDataDic, _o61 = this.nearXlength + 2, _s50 = this.nearZlength + 2, _r23 = Kt.nearX + 1, _l28 = Kt.nearMinZ - 1;
                    for (var _c21 = 0; _c21 < _o61; _c21++) {
                        var _h12 = _c21 - _r23 + _e307;
                        for (var _e308 = 0; _e308 < _s50; _e308++) {
                            var _r24 = _a208[_h12 + "_" + (_t287 + _l28 + _e308)];
                            _r24 && (0 == _c21 || _c21 == _o61 - 1 || 0 == _e308 || _e308 == _s50 - 1 ? _r24.commonBlockItem.Config.type == i.SimpleHorizontalBridge || _r24.commonBlockItem.Config.type == i.SimpleVerticalBridge || _r24.commonBlockItem.Config.functionType == n.SwitchScenePoint ? _r24.blockModel.active = !0 : _r24.blockModel.active = !1 : _r24.blockModel.active = !0);
                        }
                    }
                }
            }
        }, {
            key: "hideBlockAroundPosition",
            value: function hideBlockAroundPosition(e) {
                var t = Math.round(e.x), a = Math.round(e.z), o = Ge.Instance.baseBlockDataDic, s = this.nearXlength + 2, r = this.nearZlength + 2, l = Kt.nearX + 1, c = Kt.nearMinZ - 1;
                for (var _e309 = 0; _e309 < s; _e309++) {
                    var _s51 = _e309 - l + t;
                    for (var _e310 = 0; _e310 < r; _e310++) {
                        var _t288 = o[_s51 + "_" + (a + c + _e310)];
                        _t288 && (_t288.commonBlockItem.Config.type == i.SimpleHorizontalBridge || _t288.commonBlockItem.Config.type == i.SimpleVerticalBridge || _t288.commonBlockItem.Config.functionType == n.SwitchScenePoint ? _t288.blockModel.active = !0 : _t288.blockModel.active = !1);
                    }
                }
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Kt.instance || (Kt.instance = new Kt()), Kt.instance;
            }
        } ]);
        return Kt;
    }();
    Kt.slowScale = .6, Kt.instance = null, Kt.nearMinZ = -2, Kt.nearMaxZ = 4, Kt.nearX = 2;
    var Qt = /* */ function() {
        function Qt() {
            _classCallCheck2(this, Qt);
            this.mWarehouseConfig = null, this.npcPathDic = {};
        }
        _createClass2(Qt, [ {
            key: "NPCConfigArrayDIC",
            get: function get() {
                if (this.isCollectAllWarehouse) return null;
                if (!this.mNPCConfigArrayDic) {
                    this.mNPCConfigArrayDic = {};
                    for (var _e311 = 0; _e311 < 3; _e311++) {
                        var _t289 = this.npcIdArray[_e311], _a209 = Jt.Instance.WNPCConfig.getItem(_t289.toString());
                        _a209.id = Number(_a209.id), _a209.aId = Number(_a209.aId), _a209.aId > 2e3 && _a209.aId < 3e3 ? _a209.type = 0 : _a209.type = 1, 
                        _a209.uGC = Number(_a209.uGC), _a209.bGC = Number(_a209.bGC), _a209.gUGC = Number(_a209.gUGC), 
                        _a209.sGUC = Number(_a209.sGUC), _a209.bOLE = Number(_a209.bOLE), _a209.gL = Number(_a209.gL), 
                        _a209.capacity = Number(_a209.capacity), _a209.aId < 2012 && !_a209.hadScale && (_a209.bOLE = _a209.bOLE * Kt.Instance.PScale, 
                        _a209.capacity = Math.round(_a209.capacity * Kt.Instance.PScale), _a209.hadScale = !0), 
                        this.mNPCConfigArrayDic[_a209.id] = _a209;
                    }
                }
                return this.mNPCConfigArrayDic;
            }
        }, {
            key: "isCollectAllWarehouse",
            get: function get() {
                return 0 == this.type;
            }
        }, {
            key: "WarehouseConfig",
            get: function get() {
                if (!this.mWarehouseConfig) {
                    var _e312 = Jt.Instance.WarehouseConfig.getItem(this.id.toString());
                    _e312.id = Number(_e312.id), _e312.bGC = Number(_e312.bGC), _e312.gL = Number(_e312.gL), 
                    _e312.hadScale || _e312.id > 40006 ? (_e312.bC = Number(_e312.bC), _e312.gUC = Number(_e312.gUC)) : (_e312.hadScale = !0, 
                    _e312.bC = Math.round(Number(_e312.bC) * Kt.Instance.PScale), _e312.gUC = Math.round(Number(_e312.gUC) * Kt.Instance.PScale)), 
                    _e312.gUGC = Number(_e312.gUGC), this.mWarehouseConfig = _e312;
                }
                return this.mWarehouseConfig;
            }
        }, {
            key: "getNPCByAnimalId",
            value: function getNPCByAnimalId(e) {
                for (var _t290 in this.NPCConfigArrayDIC) {
                    var _a210 = this.NPCConfigArrayDIC[_t290];
                    if (_a210 && _a210.aId == e) return _a210;
                }
                return null;
            }
        }, {
            key: "K",
            get: function get() {
                return this.x + "_" + this.z;
            }
        } ]);
        return Qt;
    }();
    var qt = /* */ function() {
        function qt() {
            _classCallCheck2(this, qt);
            this.name = "WarehouseMapConfig", this.WarehouseMapConfigArray = new Array(), this.WarehouseConfigDic = {};
        }
        _createClass2(qt, [ {
            key: "Path",
            get: function get() {
                return m.localConfig + this.name + Zt.Instance.SceneIndex + ".txt";
            }
        }, {
            key: "loadConfig",
            value: function loadConfig() {
                var e = this.Path;
                Laya.loader.load(e, Laya.Handler.create(this, this.onLoaclLoded), null, Laya.Loader.TEXT);
            }
        }, {
            key: "onLoaclLoded",
            value: function onLoaclLoded() {
                this.WarehouseMapConfigArray = new Array(), this.WarehouseConfigDic = {};
                var t = this.Path, a = Laya.loader.getRes(t), i = JSON.parse(a).warehouseMap;
                var _iterator28 = _createForOfIteratorHelper2(i), _step28;
                try {
                    for (_iterator28.s(); !(_step28 = _iterator28.n()).done; ) {
                        var _e313 = _step28.value;
                        if (_e313) {
                            var _t291 = new Qt();
                            if (_t291.id = Number(_e313.i), _t291.x = -Number(_e313.x), _t291.z = Number(_e313.z), 
                            _t291.type = Number(_e313.t), !_t291.isCollectAllWarehouse) {
                                _t291.npcIdArray = _e313.aL;
                                for (var _a212 = 0; _a212 < 3; _a212++) {
                                    var _i119 = Number(_t291.npcIdArray[_a212]), _n77 = this.analysis(_t291, _e313["n" + _a212 + "P"]);
                                    _t291.npcPathDic[_i119] = _n77;
                                }
                            }
                            var _a211 = _t291.K, _i118 = ea.Instance.baseMapConfigDic[_a211];
                            _i118 && (_i118.functionType = n.Warehouse, _i118.functionConfig = _t291), this.WarehouseMapConfigArray.push(_t291), 
                            this.WarehouseConfigDic[_a211] = _t291;
                        }
                    }
                } catch (err) {
                    _iterator28.e(err);
                } finally {
                    _iterator28.f();
                }
                Laya.stage.event(e.CONFIG_PROGRESS, this.name);
            }
        }, {
            key: "analysis",
            value: function analysis(e, t) {
                if (t) {
                    var _a213 = Array(t.length);
                    for (var _i120 = 0; _i120 < t.length; _i120++) {
                        var _n78 = t[_i120], _o62 = new Array(_n78.length + 1);
                        _o62[0] = new Laya.Vector2(e.x, e.z - .375);
                        for (var _e314 = 0; _e314 < _n78.length; _e314++) {
                            var _t292 = _n78[_e314], _a214 = new Laya.Vector2(Math.round(-_t292[0]), Math.round(_t292[1]));
                            _o62[_e314 + 1] = _a214;
                        }
                        _a213[_i120] = _o62;
                    }
                    return _a213;
                }
                return null;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return qt.instance || (qt.instance = new qt()), qt.instance;
            }
        } ]);
        return qt;
    }();
    qt.instance = null;
    var Jt = /* */ function() {
        function Jt() {
            _classCallCheck2(this, Jt);
            this.count = 21, this.progress = 0, this.mapCount = 9, this.language = new I("Language"), 
            this.BaseBlockModelConfig = new I("BaseBlockModel"), this.DecorativeModelConfig = new I("DecorativeModel"), 
            this.PenModelConfig = new I("PenModelConfig"), this.ShopModelConfig = new I("ShopModelConfig"), 
            this.AnimalConfig = new I("AnimalConfig"), this.WarehouseConfig = new I("WarehouseConfig"), 
            this.WNPCConfig = new I("WNPCConfig"), this.FruitConfig = new I("FruitConfig"), 
            this.HoneyConfig = new I("HoneyConfig"), this.SwitchSceneIslandModelConfig = new I("SwitchSceneIslandModelConfig"), 
            this.CropsConfig = new I("CropsConfig");
        }
        _createClass2(Jt, [ {
            key: "load",
            value: function load() {
                Laya.stage.on(e.CONFIG_PROGRESS, this, this.onProgress), this.language.loadLocal(), 
                this.PenModelConfig.loadLocal(), this.AnimalConfig.loadLocal(), this.DecorativeModelConfig.loadLocal(), 
                this.ShopModelConfig.loadLocal(), this.WarehouseConfig.loadLocal(), this.WNPCConfig.loadLocal(), 
                this.FruitConfig.loadLocal(), this.HoneyConfig.loadLocal(), this.SwitchSceneIslandModelConfig.loadLocal(), 
                this.CropsConfig.loadLocal(), this.BaseBlockModelConfig.loadLocal();
            }
        }, {
            key: "onProgress",
            value: function onProgress(t) {
                this.progress++, Laya.stage.event(e.CONFIG_LOAD_PROGRESS_UI, this.progress / this.count), 
                "Language" == t ? (w.init(this.language), s.log("语言包加载完成")) : "BaseBlockModel" == t ? ea.Instance.loadConfig() : t == ea.Instance.name && (A.Instance.loadConfig(), 
                S.Instance.loadConfig(), b.Instance.loadConfig(), qt.Instance.loadConfig(), Pe.Instance.loadConfig(), 
                Se.Instance.loadConfig(), Dt.Instance.loadConfig(), Vt.Instance.loadConfig()), this.progress == this.count && (Laya.stage.event(e.CONFIG_LOAD_COMPLETE), 
                Laya.stage.off(e.CONFIG_PROGRESS, this, this.onProgress), Laya.stage.on(e.CONFIG_PROGRESS, this, this.onMapLoadProgress));
            }
        }, {
            key: "loadMapConfig",
            value: function loadMapConfig() {
                this.progress = 0, this.clearMapConfig(), ea.Instance.loadConfig();
            }
        }, {
            key: "clearMapConfig",
            value: function clearMapConfig() {}
        }, {
            key: "onMapLoadProgress",
            value: function onMapLoadProgress(e) {
                this.progress++, e == ea.Instance.name && (A.Instance.loadConfig(), S.Instance.loadConfig(), 
                b.Instance.loadConfig(), qt.Instance.loadConfig(), Pe.Instance.loadConfig(), Se.Instance.loadConfig(), 
                Dt.Instance.loadConfig(), Vt.Instance.loadConfig()), this.progress == this.mapCount && Zt.Instance.onMapLoadCompleted();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Jt.instance;
            }
        } ]);
        return Jt;
    }();
    Jt.instance = new Jt();
    var Zt = /* */ function() {
        function Zt() {
            _classCallCheck2(this, Zt);
            this.SceneCount = 2, this.mMaxSceneIndex = 1, this.sceneIndex = 1, this.mIsSwitching = !1, 
            this.mMaxSceneIndex = this.getMaxSceneIndex(), this.sceneIndex = this.mMaxSceneIndex;
        }
        _createClass2(Zt, [ {
            key: "MaxSceneIndex",
            get: function get() {
                return this.mMaxSceneIndex;
            }
        }, {
            key: "SceneIndex",
            get: function get() {
                return (this.sceneIndex > this.SceneCount || this.sceneIndex < 1) && (this.sceneIndex = 1), 
                this.sceneIndex;
            }
        }, {
            key: "nextSceneIndex",
            get: function get() {
                var e = this.sceneIndex + 1;
                return (e < 1 || e > this.SceneCount) && (e = 1), e;
            }
        }, {
            key: "setSceneIndex",
            value: function setSceneIndex(e) {
                (e > this.SceneCount || e < 1) && (e = 1), this.sceneIndex = e, this.sceneIndex > this.mMaxSceneIndex && this.refreshMaxSceneIndex();
            }
        }, {
            key: "IsSwitching",
            get: function get() {
                return this.mIsSwitching;
            }
        }, {
            key: "SceneSwitchFirstBridgeKey",
            get: function get() {
                return "1_7";
            }
        }, {
            key: "SceneSwitchPreBlockKey",
            get: function get() {
                return "0_7";
            }
        }, {
            key: "getMaxSceneIndex",
            value: function getMaxSceneIndex() {
                var e = window.ystorage.getItem("MaxSceneIndex");
                return e ? Number(e) : 1;
            }
        }, {
            key: "refreshMaxSceneIndex",
            value: function refreshMaxSceneIndex() {
                this.sceneIndex > this.mMaxSceneIndex && (this.mMaxSceneIndex = this.sceneIndex, 
                window.ystorage.setItem("MaxSceneIndex", this.sceneIndex.toString()));
            }
        }, {
            key: "switchScene",
            value: function switchScene(e) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
                this.sceneIndex != e && (console.log("跳转中"), this.mIsSwitching = !0, this.setSceneIndex(e), 
                Wt.Instance.switchSceneMaterials(), this.hideAllView(t), Yt.Instance.resetIsGoingToSwitchScenePointState(), 
                de.Instance.resetList(), le.Instance.reset(), Ee.Instance.clearSceneMapData(), Wt.Instance.destroySceneRoot());
            }
        }, {
            key: "hideAllView",
            value: function hideAllView() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
                xe.Instance.hide(), rt.Instance.hide(), yt.Instance.hide(), dt.Instance.hide(), 
                ct.Instance.hide(), et.Instance.releaHide(), pe.Instance.switchCameraState(0, !0), 
                Yt.Instance.ZIsVertical = !0, e && jt.Instance.showSwitchShortLoading(), jt.Instance.showUI();
            }
        }, {
            key: "onDestroySceneRoot",
            value: function onDestroySceneRoot() {
                Wt.Instance.initSceneRoot(), de.Instance.resetList(), le.Instance.reset(), Ee.Instance.clearSceneMapData(), 
                Jt.Instance.loadMapConfig();
            }
        }, {
            key: "onMapLoadCompleted",
            value: function onMapLoadCompleted() {
                Ee.Instance.loadCurrentSceneMapData(), Wt.Instance.initScene(), Yt.Instance.resetCharacterToInit(), 
                He.Instance.GC(), Kt.Instance.reset(), Laya.timer.frameOnce(10, Kt.Instance, Kt.Instance.init), 
                Laya.timer.frameOnce(5, this, this.refreshUI);
            }
        }, {
            key: "refreshUI",
            value: function refreshUI() {
                console.log("跳转完成"), this.mIsSwitching = !1, At.Instance.onRefresh();
            }
        }, {
            key: "cancelPause",
            value: function cancelPause() {}
        } ], [ {
            key: "Instance",
            get: function get() {
                return Zt.instance || (Zt.instance = new Zt()), Zt.instance;
            }
        } ]);
        return Zt;
    }();
    Zt.instance = null;
    var $t = /* */ function() {
        function $t(e, t) {
            _classCallCheck2(this, $t);
            this.bObstacle = !0, this.height = 0, this.nodeTotalCost = 1, this.estimatedCost = 0, 
            this.rowIndex = e, this.columnIndex = t;
        }
        _createClass2($t, [ {
            key: "markAsAccessibleArea",
            value: function markAsAccessibleArea() {
                this.bObstacle = !1;
            }
        }, {
            key: "SetHeight",
            value: function SetHeight(e) {
                this.height = e, e > 0 && this.markAsAccessibleArea();
            }
        }, {
            key: "compareTo",
            value: function compareTo(e) {
                return this.estimatedCost < e.estimatedCost ? -1 : this.estimatedCost > e.estimatedCost ? 1 : 0;
            }
        } ]);
        return $t;
    }();
    var ea = /* */ function() {
        function ea() {
            _classCallCheck2(this, ea);
            this.name = "BaseMapConfig", this.baseMapConfigDicWithId = {}, this.baseMapConfigDic = {}, 
            this.gridType = 0, this.bridgeTop = new Laya.Vector3(0, 0, 0);
        }
        _createClass2(ea, [ {
            key: "Path",
            get: function get() {
                return m.localConfig + this.name + Zt.Instance.SceneIndex + ".txt";
            }
        }, {
            key: "loadConfig",
            value: function loadConfig() {
                var e = this.Path;
                Laya.loader.load(e, Laya.Handler.create(this, this.onLoaclLoded), null, Laya.Loader.TEXT);
            }
        }, {
            key: "onLoaclLoded",
            value: function onLoaclLoded() {
                this.baseMapConfigDicWithId = {}, this.baseMapConfigDic = {};
                var t = this.Path, a = Laya.loader.getRes(t), i = JSON.parse(a);
                this.zeroGridPoint = i.zeroGridPoint, this.zeroGridPoint.x = -this.zeroGridPoint.x, 
                this.baseX = this.zeroGridPoint.x - 1 / 6, this.baseZ = this.zeroGridPoint.y + 1 / 6, 
                this.gridSize = 1 / 3, this.numOfColumns = i.numOfColumns, this.numOfRows = i.numOfRows;
                var n = new Array(this.numOfRows), o = new Array(this.numOfRows);
                for (var _e315 = 0; _e315 < this.numOfRows; _e315++) {
                    var _t293 = new Array(this.numOfColumns);
                    n[_e315] = _t293;
                    var _a215 = new Array(this.numOfColumns);
                    o[_e315] = _a215;
                    for (var _a216 = 0; _a216 < this.numOfColumns; _a216++) {
                        _t293[_a216] = 0, new $t(_e315, _a216).SetHeight(0), 0;
                    }
                }
                this.heightMapArray = n;
                var s = i.baseMap, r = new Array();
                var _iterator29 = _createForOfIteratorHelper2(s), _step29;
                try {
                    for (_iterator29.s(); !(_step29 = _iterator29.n()).done; ) {
                        var _e316 = _step29.value;
                        if (_e316) {
                            var _t294 = new d();
                            _t294.id = _e316.i, _t294.type = Number(_e316.t), _t294.sceneId = Number(_e316.si), 
                            _t294.preBlockId = _e316.pBI, _t294.unlockBlockAmount = _e316.uBA, _t294.unlockGoldCoin = _e316.uGC, 
                            _t294.x = -Number(_e316.x), _t294.z = Number(_e316.z), _t294.decorativeArray = new Array();
                            var _a217 = _t294.Key;
                            this.baseMapConfigDic[_a217] = _t294, this.baseMapConfigDicWithId[_t294.id] = _t294, 
                            r.push(_t294);
                        }
                    }
                } catch (err) {
                    _iterator29.e(err);
                } finally {
                    _iterator29.f();
                }
                Laya.stage.event(e.CONFIG_PROGRESS, this.name);
            }
        }, {
            key: "resetHeightByUnlockBlock",
            value: function resetHeightByUnlockBlock(e) {
                if (e && e.IsUnlocked) {
                    var _t295 = (this.baseX - e.Config.x) / this.gridSize, _a218 = (e.Config.z - this.baseZ) / this.gridSize, _n79 = Math.round(_t295), _o63 = Math.round(_a218);
                    switch (e.Config.type) {
                      case i.CommonBlock:
                        {
                            var _e317 = _o63 - 1 < 0 ? 0 : _o63 - 1;
                            for (;_e317 <= _o63 + 1; _e317++) {
                                var _t296 = _n79 - 1 < 0 ? 0 : _n79 - 1;
                                for (;_t296 <= _n79 + 1; _t296++) {
                                    this.heightMapArray[_e317][_t296] = 1;
                                }
                            }
                        }
                        break;

                      case i.HorizontalBridge:
                        {
                            var _e318 = _n79 - 1 < 0 ? 0 : _n79 - 1;
                            for (;_e318 <= _n79 + 1; _e318++) {
                                this.heightMapArray[_o63][_e318] = _e318 == _n79 ? 3 : 2;
                            }
                        }
                        break;

                      case i.SimpleHorizontalBridge:
                        {
                            var _e319 = _n79 - 1 < 0 ? 0 : _n79 - 1;
                            for (;_e319 <= _n79 + 1; _e319++) {
                                this.heightMapArray[_o63][_e319] = 1;
                            }
                        }
                        break;

                      case i.VerticalBridge:
                        {
                            var _e320 = _o63 - 1 < 0 ? 0 : _o63 - 1;
                            for (;_e320 <= _o63 + 1; _e320++) {
                                this.heightMapArray[_e320][_n79] = _e320 == _o63 ? 3 : 2;
                            }
                        }
                        break;

                      case i.SimpleVerticalBridge:
                        {
                            var _e321 = _o63 - 1 < 0 ? 0 : _o63 - 1;
                            for (;_e321 <= _o63 + 1; _e321++) {
                                this.heightMapArray[_e321][_n79] = 1;
                            }
                        }
                    }
                }
            }
        }, {
            key: "realReachedPosition",
            value: function realReachedPosition(e, t, a) {
                var i = Math.floor((this.zeroGridPoint.x - e) / this.gridSize), n = Math.floor((t - this.zeroGridPoint.y) / this.gridSize), o = 0, s = null;
                if (i >= 0 && i < this.numOfColumns && n >= 0 && n < this.numOfRows) {
                    var _r25 = this.heightMapArray[n][i], _l29 = Math.floor((this.zeroGridPoint.x - a.x) / this.gridSize), _c22 = Math.floor((a.z - this.zeroGridPoint.y) / this.gridSize);
                    if (_l29 != i && _c22 != n) {
                        var _e322 = this.heightMapArray[_c22][i], _t297 = this.heightMapArray[n][_l29];
                        if (_e322 <= 0 && _t297 <= 0) return s = null;
                    }
                    switch (_r25) {
                      case 2:
                        0 == this.gridType && (3 == this.heightMapArray[n + 1][i] ? (this.gridType = 2, 
                        this.bridgeTop.x = this.zeroGridPoint.x - i * this.gridSize - 1 / 6, this.bridgeTop.z = this.zeroGridPoint.y + (n + 1) * this.gridSize + 1 / 6) : 3 == this.heightMapArray[n - 1][i] ? (this.bridgeTop.x = this.zeroGridPoint.x - i * this.gridSize - 1 / 6, 
                        this.bridgeTop.z = this.zeroGridPoint.y + (n - 1) * this.gridSize + 1 / 6, this.gridType = 2) : 3 == this.heightMapArray[n][i + 1] ? (this.gridType = 1, 
                        this.bridgeTop.x = this.zeroGridPoint.x - (i + 1) * this.gridSize - 1 / 6, this.bridgeTop.z = this.zeroGridPoint.y + n * this.gridSize + 1 / 6) : 3 == this.heightMapArray[n][i - 1] && (this.gridType = 1, 
                        this.bridgeTop.x = this.zeroGridPoint.x - (i - 1) * this.gridSize - 1 / 6, this.bridgeTop.z = this.zeroGridPoint.y + n * this.gridSize + 1 / 6), 
                        this.bridgeTop.y = .1);

                      case 3:
                        if (2 == this.gridType) {
                            var _e323 = .5 - Math.abs(t - this.bridgeTop.z);
                            _e323 < 0 && (_e323 = 0), o = this.bridgeTop.y / .5 * _e323;
                        } else if (1 == this.gridType) {
                            var _t298 = .5 - Math.abs(e - this.bridgeTop.x);
                            _t298 < 0 && (_t298 = 0), o = this.bridgeTop.y / .5 * _t298;
                        }
                        s = new Laya.Vector3(e, o, t);
                        break;

                      case 1:
                        this.gridType = 0, o = 0, s = new Laya.Vector3(e, o, t);
                        break;

                      case 0:
                      default:
                        {
                            var _l30 = Math.floor((this.zeroGridPoint.x - a.x) / this.gridSize), _c23 = Math.floor((a.z - this.zeroGridPoint.y) / this.gridSize);
                            if (_r25 = this.heightMapArray[_c23][i], o = a.y, _r25 > 0) return new Laya.Vector3(e, o, a.z);
                            (_r25 = this.heightMapArray[n][_l30]) > 0 && (s = new Laya.Vector3(a.x, o, t));
                        }
                    }
                } else if (i < 0 && n < 0) s = null; else if (i >= this.numOfColumns && n >= this.numOfRows) s = null; else if (i < 0 || i >= this.numOfColumns) {
                    var _e324 = Math.floor((this.zeroGridPoint.x - a.x) / this.gridSize);
                    this.heightMapArray[n][_e324] > 0 && (s = new Laya.Vector3(a.x, o, t));
                } else if (n < 0 || n >= this.numOfRows) {
                    var _t299 = Math.floor((a.z - this.zeroGridPoint.y) / this.gridSize);
                    this.heightMapArray[_t299][i] > 0 && (s = new Laya.Vector3(e, o, a.z));
                } else s = null;
                return s;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return ea.instance || (ea.instance = new ea()), ea.instance;
            }
        } ]);
        return ea;
    }();
    ea.instance = null;
    var ta = /* */ function() {
        function ta() {
            _classCallCheck2(this, ta);
        }
        _createClass2(ta, null, [ {
            key: "setUserId",
            value: function setUserId(e) {
                ta.userId = e;
            }
        }, {
            key: "getGameData",
            value: function getGameData() {
                return ta.localGameData || (console.log("获取本地数据为空"), ta.localGameData = ta.loadGameData()), 
                ta.localGameData;
            }
        }, {
            key: "loadUnlockBlockData",
            value: function loadUnlockBlockData() {
                var e = ta.BBH + ta.userId;
                Zt.Instance.SceneIndex >= 2 && (e = ta.BBH + Zt.Instance.SceneIndex + "_" + ta.userId);
                var t = window.estorage.getJSON(e);
                if (t) {
                    var _e325 = {};
                    for (var _a219 in t) {
                        var _i121 = t[_a219];
                        if (_i121) {
                            var _t300 = new he(_a219, _i121.ug, _i121.open);
                            !_t300.open && _t300.IsUnlocked && _t300.markOpen(!0), _e325[_a219] = _t300;
                        }
                    }
                    t = _e325;
                } else if (s.debugLog("初始化地块数据"), ta.userId.length > 0) {
                    t = {};
                    for (var _e326 in ea.Instance.baseMapConfigDic) {
                        var _a220 = ea.Instance.baseMapConfigDic[_e326];
                        if (_a220 && !_a220.havePreBlock() && 0 === _a220.unlockBlockAmount && 0 === _a220.unlockGoldCoin) {
                            var _a221 = new he(_e326, 0, !0);
                            t[_e326] = _a221;
                        }
                    }
                    ta.saveUnlockBlockData(t);
                } else console.log("userId <= 0 初始化用户数据失败"), c.Instance.show("userId <= 0 初始化用户数据失败");
                return t;
            }
        }, {
            key: "saveUnlockBlockData",
            value: function saveUnlockBlockData(e) {
                if (e) {
                    var _t301 = ta.BBH + ta.userId;
                    2 == Zt.Instance.SceneIndex && (_t301 = ta.BBH + Zt.Instance.SceneIndex + "_" + ta.userId), 
                    window.estorage.setJSON(_t301, e);
                }
            }
        }, {
            key: "loadPastureBlockData",
            value: function loadPastureBlockData() {
                var e = ta.PBH + ta.userId;
                Zt.Instance.SceneIndex >= 2 && (e = ta.PBH + Zt.Instance.SceneIndex + "_" + ta.userId);
                var t = window.estorage.getJSON(e);
                if (t) {
                    var _e327 = {};
                    for (var _a222 in t) {
                        var _i122 = t[_a222];
                        if (_i122) {
                            var _t302 = new St(_a222, Number(_i122.tC), Number(_i122.s));
                            _e327[_a222] = _t302;
                        }
                    }
                    t = _e327;
                } else if (s.debugLog("初始化牧场数据"), ta.userId.length > 0) {
                    t = {};
                    var _e328 = Ee.Instance.allUnlockBlock;
                    for (var _a223 in _e328) {
                        var _i123 = _e328[_a223];
                        if (_i123 && _i123.IsUnlocked && _i123.Config.functionType == n.Pasture) {
                            var _e329 = _i123.Config.functionConfig, _n80 = new St(_i123.k, _e329.treeClear, 0);
                            t[_a223] = _n80;
                        }
                    }
                    ta.savePastureBlockData(t);
                } else console.log("userId <= 0 初始化用户数据失败"), c.Instance.show("userId <= 0 初始化用户数据失败");
                return t;
            }
        }, {
            key: "savePastureBlockData",
            value: function savePastureBlockData(e) {
                if (e) {
                    var _t303 = ta.PBH + ta.userId;
                    Zt.Instance.SceneIndex >= 2 && (_t303 = ta.PBH + Zt.Instance.SceneIndex + "_" + ta.userId), 
                    window.estorage.setJSON(_t303, e);
                }
            }
        }, {
            key: "loadFarmBlockData",
            value: function loadFarmBlockData() {
                var e = ta.FRBH + ta.userId;
                Zt.Instance.SceneIndex >= 2 && (e = ta.FRBH + Zt.Instance.SceneIndex + "_" + ta.userId);
                var t = window.estorage.getJSON(e);
                if (t) {
                    var _e330 = {};
                    for (var _a224 in t) {
                        var _i124 = t[_a224];
                        if (_i124) {
                            var _t304 = new Gt(_a224, Number(_i124.tC), Number(_i124.s));
                            _e330[_a224] = _t304;
                        }
                    }
                    t = _e330;
                } else if (s.debugLog("初始化农场数据"), ta.userId.length > 0) {
                    t = {};
                    var _e331 = Ee.Instance.allUnlockBlock;
                    for (var _a225 in _e331) {
                        var _i125 = _e331[_a225];
                        if (_i125 && _i125.IsUnlocked && _i125.Config.functionType == n.Farm) {
                            var _e332 = _i125.Config.functionConfig, _n81 = new Gt(_i125.k, _e332.treeClear, 0);
                            t[_a225] = _n81;
                        }
                    }
                    ta.saveFarmBlockData(t);
                } else console.log("userId <= 0 初始化用户数据失败"), c.Instance.show("userId <= 0 初始化用户数据失败");
                return t;
            }
        }, {
            key: "saveFarmBlockData",
            value: function saveFarmBlockData(e) {
                if (e) {
                    var _t305 = ta.FRBH + ta.userId;
                    Zt.Instance.SceneIndex >= 2 && (_t305 = ta.FRBH + Zt.Instance.SceneIndex + "_" + ta.userId), 
                    window.estorage.setJSON(_t305, e);
                }
            }
        }, {
            key: "loadWarehouseBlockData",
            value: function loadWarehouseBlockData() {
                var e = ta.WBH + ta.userId;
                Zt.Instance.SceneIndex >= 2 && (e = ta.WBH + Zt.Instance.SceneIndex + "_" + ta.userId);
                var t = window.estorage.getJSON(e);
                if (t) {
                    var _e333 = {};
                    for (var _a226 in t) {
                        var _i126 = t[_a226];
                        if (_i126) {
                            var _t306 = kt.createInfoFromCache(_i126);
                            _e333[_a226] = _t306;
                        }
                    }
                    t = _e333;
                } else if (ta.userId.length > 0) {
                    t = {};
                    var _e334 = Ee.Instance.allUnlockBlock;
                    for (var _a227 in _e334) {
                        var _i127 = _e334[_a227];
                        if (_i127 && _i127.IsUnlocked && _i127.Config.functionType == n.Warehouse) {
                            if (!_i127.Config.functionConfig.isCollectAllWarehouse) {
                                var _e335 = kt.createNewInfo(_i127.k);
                                t[_a227] = _e335;
                            }
                        }
                    }
                    ta.saveWarehouseBlockData(t);
                } else console.log("userId <= 0 初始化用户数据失败"), c.Instance.show("userId <= 0 初始化用户数据失败");
                return t;
            }
        }, {
            key: "saveWarehouseBlockData",
            value: function saveWarehouseBlockData(e) {
                if (e) {
                    var _t307 = ta.WBH + ta.userId;
                    Zt.Instance.SceneIndex >= 2 && (_t307 = ta.WBH + Zt.Instance.SceneIndex + "_" + ta.userId), 
                    window.estorage.setJSON(_t307, e);
                }
            }
        }, {
            key: "loadFruitTreeBlockData",
            value: function loadFruitTreeBlockData() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
                e < 0 && (e = Zt.Instance.SceneIndex);
                var t = ta.TBH + ta.userId;
                e >= 2 && (t = ta.TBH + e + "_" + ta.userId);
                var a = window.estorage.getJSON(t);
                if (a) {
                    var _e336 = {};
                    for (var _t308 in a) {
                        var _i128 = a[_t308];
                        if (_i128) {
                            var _a228 = Tt.createInfoFromCache(_i128);
                            _e336[_t308] = _a228;
                        }
                    }
                    a = _e336;
                } else if (ta.userId.length > 0) {
                    a = {};
                    var _e337 = Ee.Instance.allUnlockBlock;
                    for (var _t309 in _e337) {
                        var _i129 = _e337[_t309];
                        if (_i129 && _i129.IsUnlocked && _i129.Config.functionType == n.FruitTree) {
                            var _e338 = Tt.createNewInfo(_i129.k);
                            a[_t309] = _e338;
                        }
                    }
                    ta.saveFruitTreeBlockData(a);
                } else console.log("userId <= 0 初始化用户数据失败"), c.Instance.show("userId <= 0 初始化用户数据失败");
                return a;
            }
        }, {
            key: "saveFruitTreeBlockData",
            value: function saveFruitTreeBlockData(e) {
                if (e) {
                    var _t310 = ta.TBH + ta.userId;
                    Zt.Instance.SceneIndex >= 2 && (_t310 = ta.TBH + Zt.Instance.SceneIndex + "_" + ta.userId), 
                    window.estorage.setJSON(_t310, e);
                }
            }
        }, {
            key: "loadBeehiveBlockData",
            value: function loadBeehiveBlockData() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
                e < 0 && (e = Zt.Instance.SceneIndex);
                var t = ta.BHBH + ta.userId;
                e >= 2 && (t = ta.BHBH + e + "_" + ta.userId);
                var a = window.estorage.getJSON(t);
                if (a) {
                    var _e339 = {};
                    for (var _t311 in a) {
                        var _i130 = a[_t311];
                        if (_i130) {
                            var _a229 = Pt.createInfoFromCache(_i130);
                            _e339[_t311] = _a229;
                        }
                    }
                    a = _e339;
                } else if (ta.userId.length > 0) {
                    a = {};
                    var _e340 = Ee.Instance.allUnlockBlock;
                    for (var _t312 in _e340) {
                        var _i131 = _e340[_t312];
                        if (_i131 && _i131.IsUnlocked && _i131.Config.functionType == n.Beehive) {
                            var _e341 = Pt.createNewInfo(_i131.k);
                            a[_t312] = _e341;
                        }
                    }
                    ta.saveBeehiveBlockData(a);
                } else console.log("userId <= 0 初始化用户数据失败"), c.Instance.show("userId <= 0 初始化用户数据失败");
                return a;
            }
        }, {
            key: "saveBeehiveBlockData",
            value: function saveBeehiveBlockData(e) {
                if (e) {
                    var _t313 = ta.BHBH + ta.userId;
                    Zt.Instance.SceneIndex >= 2 && (_t313 = ta.BHBH + Zt.Instance.SceneIndex + "_" + ta.userId), 
                    window.estorage.setJSON(_t313, e);
                }
            }
        }, {
            key: "setLevelId",
            value: function setLevelId(e) {
                e < 0 && (e = 0), ta.localGameData && (ta.localGameData.levelId = e, ta.saveGameData());
            }
        }, {
            key: "updateLoginTime",
            value: function updateLoginTime(e) {
                ta.localGameData && e > ta.localGameData.loginTime && (ta.localGameData.loginTime = e, 
                ta.saveGameData());
            }
        }, {
            key: "saveGameData",
            value: function saveGameData() {
                ta.localGameData && ta.localGameData.loginTime && ta.localGameData.loginTime >= l.DefaultTime && ta.setLocalGameData(ta.localGameData);
            }
        }, {
            key: "loadGameData",
            value: function loadGameData() {
                s.debugLog("load local game data");
                var e = ta.getLocalGameData();
                return ta.localGameData = e ? JSON.parse(e) : null, ta.localGameData || (s.debugLog("初始化用户数据"), 
                ta.userId.length > 0 ? (ta.localGameData = ta.initGamerData(), ta.setLocalGameData(ta.localGameData)) : (console.log("userId <= 0 初始化用户数据失败"), 
                c.Instance.show("userId <= 0 初始化用户数据失败"))), ta.localGameData;
            }
        }, {
            key: "getLocalGameData",
            value: function getLocalGameData() {
                return window.ystorage.getItem(ta.LOCAL_GAME_DATA + ta.userId);
            }
        }, {
            key: "setLocalGameData",
            value: function setLocalGameData(e) {
                ta.userId.length > 0 ? window.ystorage.setItem(ta.LOCAL_GAME_DATA + ta.userId, JSON.stringify(e)) : c.Instance.show("userId <= 0 保存失败");
            }
        }, {
            key: "initGamerData",
            value: function initGamerData() {
                var e = new h();
                return e.gc = 7, e.mT = l.DefaultTime, e.sT = l.DefaultTime, e.wA = 0, e.loginTime = l.DefaultTime, 
                e.pDD = null, e;
            }
        } ]);
        return ta;
    }();
    ta.LOCAL_GAME_DATA = "LGD_", ta.BBH = "BBH_", ta.PBH = "PBH_", ta.WBH = "WBH_", 
    ta.TBH = "FBH_", ta.BHBH = "BHBH_", ta.FRBH = "FRBH_", ta.userId = "";
    var aa = /* */ function() {
        function aa() {
            _classCallCheck2(this, aa);
            this.init();
        }
        _createClass2(aa, [ {
            key: "init",
            value: function init() {
                this.user = new t();
            }
        }, {
            key: "login",
            value: function login() {
                console.log("-----------------------登录--------------------"), this.touristLogin();
            }
        }, {
            key: "touristLogin",
            value: function touristLogin() {
                var e = r.getUUID();
                this.user.account = e, this.user.password = e, this.user.type = a.Tourist, this.sendUserToServer(!1);
            }
        }, {
            key: "wxLogin",
            value: function wxLogin() {
                var _this48 = this;
                if (Laya.Browser.onMiniGame) {
                    var e = r.getLocalOpenId();
                    e && e.length > 0 ? (this.user.account = e, this.user.password = e, this.user.type = a.WXMiniGame, 
                    this.sendUserToServer(!0)) : Laya.Browser.window.wx.login({
                        success: function success(e) {
                            if (e.code) {
                                var _t314 = e.code;
                                aa.Instance.user.account = _t314, aa.Instance.user.password = _t314, aa.Instance.user.type = a.WXMiniGame, 
                                _this48.sendUserToServer(!1);
                            }
                        }
                    });
                }
            }
        }, {
            key: "qqLogin",
            value: function qqLogin() {
                var _this49 = this;
                if (Laya.Browser.onQQMiniGame) {
                    var e = r.getLocalOpenId();
                    e && e.length > 0 ? (this.user.account = e, this.user.password = e, this.user.type = a.QQMiniGame, 
                    this.sendUserToServer(!0)) : Laya.Browser.window.qq.login({
                        success: function success(e) {
                            if (e.code) {
                                var _t315 = e.code;
                                aa.Instance.user.account = _t315, aa.Instance.user.password = _t315, aa.Instance.user.type = a.QQMiniGame, 
                                _this49.sendUserToServer(!1);
                            }
                        }
                    });
                }
            }
        }, {
            key: "qgLogin",
            value: function qgLogin() {
                if (Laya.Browser.onQGMiniGame) {
                    console.log("oppo快应用登录");
                    var e = r.getLocalOpenId();
                    e && e.length > 0 ? (this.user.account = e, this.user.password = e, this.user.type = a.QGMiniGame, 
                    this.sendUserToServer(!0)) : Laya.Browser.window.qg.login({
                        success: function success(e) {
                            if (e.token) {
                                var t = e.token;
                                aa.Instance.user.account = t, aa.Instance.user.password = t, aa.Instance.user.type = a.QGMiniGame, 
                                aa.Instance.sendUserToServer(!1);
                            }
                        },
                        fail: function fail(e) {
                            console.log("oppo快应用登录 fail" + JSON.stringify(e)), c.Instance.show("oppo快应用登录 fail" + JSON.stringify(e));
                        }
                    });
                }
            }
        }, {
            key: "sendUserToServer",
            value: function sendUserToServer(e) {
                this.response(this.user.account);
            }
        }, {
            key: "response",
            value: function response(t) {
                ta.setUserId(t), ta.loadGameData(), ta.updateLoginTime(new Date().getTime()), Laya.stage.event(e.LOGIN);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return aa.instance;
            }
        } ]);
        return aa;
    }();
    aa.instance = new aa(), aa.TouristAccountKey = "TouristAccountKey";
    var ia = function ia() {
        _classCallCheck2(this, ia);
    };
    ia.loading_scene_logging_in = "loading_scene_logging_in", ia.loading_scene_loading_user_info = "loading_scene_loading_user_info", 
    ia.loading_scene_loading_atlas = "loading_scene_loading_atlas", ia.loading_model_resources = "loading_model_resources", 
    ia.loading_audio_resources = "loading_audio_resources", ia.loading_atlas_resources = "loading_atlas_resources", 
    ia.the_level_has_reached_the_upper_limit = "the_level_has_reached_the_upper_limit", 
    ia.resources_is_no_enouth = "resources_is_no_enouth";
    var na = /* */ function() {
        function na() {
            _classCallCheck2(this, na);
        }
        _createClass2(na, [ {
            key: "init",
            value: function init(e, t) {
                this.mainLight = e;
                var a = t.getChildByName("fuguang2");
                Laya.Browser.onQQMiniGame ? (this.mainLight.shadowMode = Laya.ShadowMode.None, this.mainLight.intensity = 1.3, 
                console.log("主光源亮度" + this.mainLight.intensity), a.intensity = .4, console.log("辅光源亮度" + a.intensity)) : (a.active = !1, 
                this.mainLight.shadowMode = Laya.ShadowMode.SoftLow, this.mainLight.shadowDistance = 7, 
                this.mainLight.shadowStrength = .7), console.log("阴影质量" + this.mainLight.shadowResolution);
            }
        }, {
            key: "switchSceneLight",
            value: function switchSceneLight(e) {}
        } ], [ {
            key: "Instance",
            get: function get() {
                return na.instance;
            }
        } ]);
        return na;
    }();
    na.instance = new na();
    var oa = /* */ function(_Laya$Script3D13) {
        _inherits2(oa, _Laya$Script3D13);
        var _super34 = _createSuper2(oa);
        function oa() {
            var _this50;
            _classCallCheck2(this, oa);
            _this50 = _super34.call(this), _this50.gameScene = null, oa.instance = _assertThisInitialized2(_this50);
            return _this50;
        }
        _createClass2(oa, [ {
            key: "onAwake",
            value: function onAwake() {
                this.initData();
            }
        }, {
            key: "initData",
            value: function initData() {
                this.gameScene = this.owner, this.gameScene.getChildByName("Character").addComponent(Yt), 
                Wt.Instance.mappingModel(this.gameScene);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return oa.instance;
            }
        } ]);
        return oa;
    }(Laya.Script3D);
    oa.instance = null;
    var sa = /* */ function() {
        function sa() {
            _classCallCheck2(this, sa);
            this.isInitialized = !1, this.isConfigLoded = !1, this.configManager = null, this.statusBarHeight = 40, 
            this.isSlowFrameDevice = !1, this.init();
        }
        _createClass2(sa, [ {
            key: "init",
            value: function init() {
                this.isInitialized || (this.isInitialized = !0, this.configManager = Jt.Instance, 
                r.SingletonList_expand());
            }
        }, {
            key: "launch",
            value: function launch() {
                var _this51 = this;
                console.log("------------------launch-------------"), Laya.Browser.onMiniGame && !J.onTTGame() ? (console.log("------------------launch------minigame-------"), 
                Laya.Browser.window.wx.getSystemInfo({
                    success: function success(e) {
                        _this51.statusBarHeight = e.statusBarHeight * (1080 / e.windowWidth), console.log("设备信息：" + JSON.stringify(e)), 
                        console.log("状态栏高度" + _this51.statusBarHeight);
                    }
                })) : Laya.Browser.onQQMiniGame ? Laya.Browser.window.qq.getSystemInfo({
                    success: function success(e) {
                        var t = Laya.Browser.window.qq.getMenuButtonBoundingClientRect();
                        _this51.statusBarHeight = e.statusBarHeight + t.top;
                    }
                }) : Laya.Browser.onQGMiniGame ? (console.log("------------------launch------oppo-------"), 
                Y.Instance.systemInfo = qg.getSystemInfoSync(), Y.Instance.systemInfo && Y.Instance.systemInfo.screenWidth && Y.Instance.systemInfo.screenHeight && Y.Instance.systemInfo.screenHeight / Y.Instance.systemInfo.screenWidth > 1.8 && (sa.Instance.statusBarHeight = 100), 
                s.log("修正后状态栏高度:" + sa.Instance.statusBarHeight)) : Laya.Browser.onVVMiniGame ? (console.log("------------------launch------vivo-------"), 
                Laya.Browser.window.qg.getSystemInfo({
                    success: function success(e) {
                        e.statusBarHeight && (sa.Instance.statusBarHeight = e.statusBarHeight), s.log("修正后状态栏高度:" + sa.Instance.statusBarHeight);
                    }
                })) : J.onTTGame() && J.TT.getSystemInfo({
                    success: function success(e) {
                        _this51.statusBarHeight = e.safeArea.top * (1080 / e.windowWidth);
                    }
                }), He.Instance.init(), oe.Instance.preInit(), console.log("------------------launch-------end------"), 
                this.loadConfig();
            }
        }, {
            key: "loadConfig",
            value: function loadConfig() {
                Laya.stage.once(e.CONFIG_LOAD_COMPLETE, this, this.onConfigLoaded), Laya.stage.on(e.CONFIG_LOAD_PROGRESS_UI, this, this.onConfigLoadProgress), 
                Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, .01);
                new Promise(function(e, t) {
                    sa.Instance.configManager.load(), e("hello");
                }).then(function(e) {});
            }
        }, {
            key: "onConfigLoadProgress",
            value: function onConfigLoadProgress(t) {
                t > 1 && (t = 1), t < 0 && (t = 0), Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, (0 + t) / l.loadingSteps);
            }
        }, {
            key: "onConfigLoaded",
            value: function onConfigLoaded() {
                console.log("load config complete"), Laya.stage.off(e.CONFIG_LOAD_PROGRESS_UI, this, this.onConfigLoadProgress), 
                Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, 1 / l.loadingSteps), He.Instance.initAd(), 
                this.loadGameDataConstantsConfig();
            }
        }, {
            key: "loadGameDataConstantsConfig",
            value: function loadGameDataConstantsConfig() {
                console.log("常量配置"), Laya.stage.once(e.GAME_DATA_CONSTANTS_CONFIG_LOAD_COMPLETE, this, this.onGameDataConstantsConfigLoaded), 
                T.Instance.loadGameDataConstantsConfig();
            }
        }, {
            key: "onGameDataConstantsConfigLoaded",
            value: function onGameDataConstantsConfigLoaded() {
                Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, 2 / l.loadingSteps), this.isConfigLoded = !0, 
                this.login();
            }
        }, {
            key: "login",
            value: function login() {
                console.log("login"), Laya.stage.event(e.UPDATE_LODING_PROGRESS_TITLE, ia.loading_scene_logging_in), 
                Laya.stage.on(e.LOGIN, this, this.onLoginComplete), aa.Instance.login();
            }
        }, {
            key: "onLoginComplete",
            value: function onLoginComplete() {
                Laya.stage.off(e.LOGIN, this, this.onLoginComplete), Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, 3 / l.loadingSteps), 
                this.loadGameData();
            }
        }, {
            key: "loadGameData",
            value: function loadGameData() {
                Laya.stage.event(e.UPDATE_LODING_PROGRESS_TITLE, ia.loading_scene_loading_user_info), 
                Laya.stage.on(e.INIT_GAME_DATA, this, this.onLoadedGameData), Ee.Instance.init(), 
                Ee.Instance.loadGameBaseData();
            }
        }, {
            key: "onLoadedGameData",
            value: function onLoadedGameData() {
                Laya.stage.off(e.INIT_GAME_DATA, this, this.onLoadedGameData), Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, 4 / l.loadingSteps), 
                Laya.stage.event(e.UPDATE_LODING_PROGRESS_TITLE, ia.loading_scene_loading_atlas), 
                Laya.Browser.onTTMiniGame ? (console.log("字节下载模型分包"), this.loadTTSubpackageModel1()) : this.loadSubpackageModel1();
            }
        }, {
            key: "loadSubpackageModel1",
            value: function loadSubpackageModel1() {
                if (Laya.stage.event(e.UPDATE_LODING_PROGRESS_TITLE, ia.loading_model_resources), 
                Laya.Browser.onMiniGame && !J.onTTGame()) Laya.Browser.window.wx.loadSubpackage({
                    name: l.model1SubpackageName,
                    success: function success(e) {
                        s.log("加载成功"), sa.Instance.loadModel();
                    },
                    fail: function fail(e) {
                        s.log("加载失败"), c.Instance.show("模型资源加载失败，请检查网络");
                    }
                }).onProgressUpdate(function(t) {
                    t && t.progress && Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, (4 + t.progress / 100) / l.loadingSteps), 
                    s.log("模型下载进度" + t.progress), s.log("模型已经下载的数据长度" + t.totalBytesWritten), s.log("模型预期需要下载的数据总长度" + t.totalBytesExpectedToWrite);
                }); else if (Laya.Browser.onQQMiniGame && !J.onTTGame()) {
                    Laya.Browser.window.qq.loadSubpackage({
                        name: l.model1SubpackageName,
                        success: function success(e) {
                            s.log("加载成功"), sa.Instance.loadModel();
                        },
                        fail: function fail(e) {
                            s.log("加载失败：" + JSON.stringify(e)), c.Instance.show("模型资源加载失败，请检查网络");
                        }
                    }).onProgressUpdate(function(t) {
                        t && t.progress && Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, (4 + t.progress / 100) / l.loadingSteps), 
                        s.log("模型下载进度" + t.progress), s.log("模型已经下载的数据长度" + t.totalBytesWritten), s.log("模型预期需要下载的数据总长度" + t.totalBytesExpectedToWrite);
                    });
                } else if (J.onTTGame()) {
                    J.TT.loadSubpackage({
                        name: l.model1SubpackageName,
                        success: function success(e) {
                            s.log("加载成功"), sa.Instance.loadModel();
                        },
                        fail: function fail(e) {
                            s.log("加载失败"), c.Instance.show("模型资源加载失败，请检查网络");
                        }
                    }).onProgressUpdate(function(t) {
                        t && t.progress && Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, (4 + t.progress / 100) / l.loadingSteps), 
                        s.log("模型下载进度" + t.progress), s.log("模型已经下载的数据长度" + t.totalBytesWritten), s.log("模型预期需要下载的数据总长度" + t.totalBytesExpectedToWrite);
                    });
                } else sa.Instance.loadModel();
            }
        }, {
            key: "loadTTSubpackageModel1",
            value: function loadTTSubpackageModel1() {
                if (Laya.stage.event(e.UPDATE_LODING_PROGRESS_TITLE, ia.loading_model_resources), 
                J.onTTGame()) {
                    J.TT.loadSubpackage({
                        name: l.model1SubpackageName,
                        success: function success(e) {
                            s.log("模型包1加载成功"), sa.Instance.loadTTSubpackageModel2();
                        },
                        fail: function fail(e) {
                            s.log("模型包1加载失败"), c.Instance.show("模型资源加载失败，请检查网络");
                        }
                    }).onProgressUpdate(function(t) {
                        t && t.progress && Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, (4 + t.progress / 100) / l.loadingSteps), 
                        s.log("模型包1下载进度" + t.progress), s.log("模型包1已经下载的数据长度" + t.totalBytesWritten), s.log("模型包1预期需要下载的数据总长度" + t.totalBytesExpectedToWrite);
                    });
                } else sa.Instance.loadModel();
            }
        }, {
            key: "loadTTSubpackageModel2",
            value: function loadTTSubpackageModel2() {
                if (Laya.stage.event(e.UPDATE_LODING_PROGRESS_TITLE, ia.loading_model_resources), 
                J.onTTGame()) {
                    J.TT.loadSubpackage({
                        name: l.model2SubpackageName,
                        success: function success(e) {
                            s.log("模型包2加载成功"), sa.Instance.loadModel();
                        },
                        fail: function fail(e) {
                            s.log("模型包2加载失败"), c.Instance.show("模型资源加载失败，请检查网络");
                        }
                    }).onProgressUpdate(function(t) {
                        t && t.progress && Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, (4 + t.progress / 100) / l.loadingSteps), 
                        s.log("模型包2模型下载进度" + t.progress), s.log("模型包2模型已经下载的数据长度" + t.totalBytesWritten), 
                        s.log("模型包2模型预期需要下载的数据总长度" + t.totalBytesExpectedToWrite);
                    });
                } else sa.Instance.loadModel();
            }
        }, {
            key: "loadModel",
            value: function loadModel() {
                Laya.Scene3D.load(l.modelSceneSrcPath, Laya.Handler.create(this, this.onScene3dLoaded));
            }
        }, {
            key: "onScene3dLoaded",
            value: function onScene3dLoaded(e) {
                this.scene3D = e, e.zOrder = -2, this.scene3D.addComponent(oa);
                var t = e.getChildByName("Directional Light");
                na.Instance.init(t, e), pe.Instance.init(e), this.loadSubpackageAtlas();
            }
        }, {
            key: "loadSubpackageAtlas",
            value: function loadSubpackageAtlas() {
                if (Laya.Browser.onMiniGame && !J.onTTGame()) Laya.Browser.window.wx.loadSubpackage({
                    name: l.atlasSubpackageName,
                    success: function success(e) {
                        s.log("图集加载成功"), sa.Instance.onSubpackageAtlasLoaded();
                    },
                    fail: function fail(e) {
                        s.log("图集加载失败"), c.Instance.show("图集资源加载失败，请检查网络");
                    }
                }).onProgressUpdate(function(t) {
                    t && t.progress && Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, (8 + t.progress / 100) / l.loadingSteps), 
                    s.log("图集下载进度" + t.progress), s.log("图集已经下载的数据长度" + t.totalBytesWritten), s.log("图集预期需要下载的数据总长度" + t.totalBytesExpectedToWrite);
                }); else if (Laya.Browser.onQQMiniGame && !J.onTTGame()) {
                    Laya.Browser.window.qq.loadSubpackage({
                        name: l.atlasSubpackageName,
                        success: function success(e) {
                            s.log("图集加载成功"), sa.Instance.onSubpackageAtlasLoaded();
                        },
                        fail: function fail(e) {
                            s.log("图集加载失败"), c.Instance.show("图集资源加载失败，请检查网络");
                        }
                    }).onProgressUpdate(function(t) {
                        t && t.progress && Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, (8 + t.progress / 100) / l.loadingSteps), 
                        s.log("图集下载进度" + t.progress), s.log("图集已经下载的数据长度" + t.totalBytesWritten), s.log("图集预期需要下载的数据总长度" + t.totalBytesExpectedToWrite);
                    });
                } else if (J.onTTGame()) {
                    J.TT.loadSubpackage({
                        name: l.atlasSubpackageName,
                        success: function success(e) {
                            s.log("图集加载成功"), sa.Instance.onSubpackageAtlasLoaded();
                        },
                        fail: function fail(e) {
                            s.log("图集加载失败"), c.Instance.show("图集资源加载失败，请检查网络");
                        }
                    }).onProgressUpdate(function(t) {
                        t && t.progress && Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, (8 + t.progress / 100) / l.loadingSteps), 
                        s.log("图集下载进度" + t.progress), s.log("图集已经下载的数据长度" + t.totalBytesWritten), s.log("图集预期需要下载的数据总长度" + t.totalBytesExpectedToWrite);
                    });
                } else sa.Instance.onSubpackageAtlasLoaded();
            }
        }, {
            key: "onSubpackageAtlasLoaded",
            value: function onSubpackageAtlasLoaded() {
                Laya.stage.event(e.UPDATE_LODING_PROGRESS_TITLE, ia.loading_atlas_resources), Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, 9 / l.loadingSteps), 
                Laya.loader.load("./res/atlas/PastureUI/Main.atlas", Laya.Handler.create(this, this.onLoadedAtlas));
            }
        }, {
            key: "onLoadedAtlas",
            value: function onLoadedAtlas() {
                Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, 10 / l.loadingSteps), this.loadSubpackageAudio();
            }
        }, {
            key: "loadSubpackageAudio",
            value: function loadSubpackageAudio() {
                if (Laya.stage.event(e.UPDATE_LODING_PROGRESS_TITLE, ia.loading_audio_resources), 
                Laya.Browser.onMiniGame && !J.onTTGame()) Laya.Browser.window.wx.loadSubpackage({
                    name: l.audioSubpackageName,
                    success: function success(e) {
                        s.log("音频加载成功"), sa.Instance.onSubpackageAudioLoaded();
                    },
                    fail: function fail(e) {
                        s.log("音频加载失败"), c.Instance.show("音频资源加载失败，请检查网络");
                    }
                }).onProgressUpdate(function(t) {
                    t && t.progress && Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, (10 + t.progress / 100) / l.loadingSteps), 
                    s.log("音频下载进度" + t.progress), s.log("音频已经下载的数据长度" + t.totalBytesWritten), s.log("音频预期需要下载的数据总长度" + t.totalBytesExpectedToWrite);
                }); else if (Laya.Browser.onQQMiniGame && !J.onTTGame()) {
                    Laya.Browser.window.qq.loadSubpackage({
                        name: l.audioSubpackageName,
                        success: function success(e) {
                            s.log("音频加载成功"), sa.Instance.onSubpackageAudioLoaded();
                        },
                        fail: function fail(e) {
                            s.log("音频加载失败"), c.Instance.show("音频资源加载失败，请检查网络");
                        }
                    }).onProgressUpdate(function(t) {
                        t && t.progress && Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, (10 + t.progress / 100) / l.loadingSteps), 
                        s.log("音频下载进度" + t.progress), s.log("音频已经下载的数据长度" + t.totalBytesWritten), s.log("音频预期需要下载的数据总长度" + t.totalBytesExpectedToWrite);
                    });
                } else if (J.onTTGame()) {
                    J.TT.loadSubpackage({
                        name: l.audioSubpackageName,
                        success: function success(e) {
                            s.log("音频加载成功"), sa.Instance.onSubpackageAudioLoaded();
                        },
                        fail: function fail(e) {
                            s.log("音频加载失败"), c.Instance.show("音频资源加载失败，请检查网络");
                        }
                    }).onProgressUpdate(function(t) {
                        t && t.progress && Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, (10 + t.progress / 100) / l.loadingSteps), 
                        s.log("音频下载进度" + t.progress), s.log("音频已经下载的数据长度" + t.totalBytesWritten), s.log("音频预期需要下载的数据总长度" + t.totalBytesExpectedToWrite);
                    });
                } else sa.Instance.onSubpackageAudioLoaded();
            }
        }, {
            key: "onSubpackageAudioLoaded",
            value: function onSubpackageAudioLoaded() {
                Laya.stage.event(e.UPDATE_LODING_PROGRESS_VALUE, 11 / l.loadingSteps), this.onLoadingComplete();
            }
        }, {
            key: "onLoadingComplete",
            value: function onLoadingComplete() {
                Laya.Scene.open(l.mainScene);
            }
        }, {
            key: "getScene3D",
            value: function getScene3D() {
                return this.scene3D;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return sa.instance;
            }
        } ]);
        return sa;
    }();
    sa.instance = new sa();
    var ra = /* */ function(_Laya$Script14) {
        _inherits2(ra, _Laya$Script14);
        var _super35 = _createSuper2(ra);
        function ra() {
            var _this52;
            _classCallCheck2(this, ra);
            _this52 = _super35.call(this), _this52.cursorStartLeft = -15, _this52.progressText = "Loading data", 
            _this52.progressValue = 0, sa.Instance.init();
            return _this52;
        }
        _createClass2(ra, [ {
            key: "onAwake",
            value: function onAwake() {
                Laya.Browser.onQGMiniGame ? this.singleGameTipsLabel.visible = !0 : this.singleGameTipsLabel.visible = !1, 
                Laya.stage.on(e.UPDATE_LODING_PROGRESS_TITLE, this, this.onUpdateTitle), Laya.stage.on(e.UPDATE_LODING_PROGRESS_VALUE, this, this.onUpdateProgress), 
                this.initUI(), this.cursorStartLeft = this.cursor.left, sa.Instance.launch();
            }
        }, {
            key: "initUI",
            value: function initUI() {
                this.titleLabel && (this.titleLabel.text = this.progressText + " 0%");
            }
        }, {
            key: "onUpdateTitle",
            value: function onUpdateTitle(e) {
                this.titleLabel && (this.progressText = w.getLanguage(e), this.titleLabel.text = this.progressText + " " + (100 * this.progressValue).toFixed(0) + "%");
            }
        }, {
            key: "onUpdateProgress",
            value: function onUpdateProgress(e) {
                this.progressPanel && (e < 0 ? e = 0 : e > 1 && (e = 1), this.setProgressValue(e), 
                this.cursor.left = this.cursorStartLeft + e * this.progressBar.width, this.titleLabel && (this.titleLabel.text = this.progressText + " " + (100 * e).toFixed(0) + "%"));
            }
        }, {
            key: "setProgressValue",
            value: function setProgressValue(e) {
                e < 0 ? e = 0 : e > 1 && (e = 1), this.progressValue = e;
                var t = 1 + 607 * e;
                this.progressPanel && (this.progressPanel.width = t);
            }
        } ]);
        return ra;
    }(Laya.Script);
    var la = /* */ function() {
        function la() {
            _classCallCheck2(this, la);
            this.visible = !1;
        }
        _createClass2(la, [ {
            key: "show",
            value: function show() {
                console.log("dialog_3");
                this.visible && this.close(), He.Instance.showBannerAd(), He.Instance.hideCustomGridAd(), 
                this.visible = !0;
                this.dialog = new Laya.Dialog(), this.dialog.size(Laya.stage.width, Laya.stage.height);
                var e = new Laya.Image();
                e.size(Laya.stage.width, Laya.stage.height), e.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), 
                e.alpha = .5, e.centerX = 0, e.centerY = 0, this.dialog.addChild(e);
                this.dialog.show(), Laya.timer.once(l.dialogDelayRenderMilliseconds, this, function() {
                    var _this53 = this;
                    var e = new Laya.Image("PastureUI/Dialog/tk_01.png");
                    e.size(605, 670), e.sizeGrid = "170,0,110,0,0", e.centerX = 0, e.centerY = -60, 
                    this.dialog.addChild(e);
                    var t = new Laya.Image("PastureUI/Dialog/tk_08.png");
                    t.top = 44, t.centerX = 0, e.addChild(t);
                    var a = new Laya.Image("PastureUI/Dialog/tk_02.png");
                    a.size(536, 383), a.sizeGrid = "88,0,59,0,0", a.top = 115, a.centerX = 0, e.addChild(a);
                    var _loop8 = function _loop8(_e342) {
						if(w.getLanguage("setting_dialog_label_" + _e342 + "_text") == "震动") return;//czh
                        var t = new Laya.Image();
                        t.size(456, 60), t.top = 53 + 112 * _e342, t.centerX = 0, a.addChild(t);
                        var i = new Laya.Label();
                        i.text = w.getLanguage("setting_dialog_label_" + _e342 + "_text"), i.bold = !0, 
                        i.fontSize = 30, i.color = "#cb7c41", i.align = "center", i.valign = "middle", i.centerY = 0, 
                        i.left = 15, t.addChild(i);
                        var n = "PastureUI/Dialog/tk_0" + (5 + _e342) + ".png", o = new Laya.Image(n);
                        o.left = i.left + 120, o.centerY = 0, t.addChild(o);
                        var s = new Laya.Image("PastureUI/Dialog/tk_04_01.png");
                        s.size(62, 62), s.right = 15, s.centerY = 0, t.addChild(s);
                        var r = new Laya.Image("PastureUI/Dialog/tk_03_01.png");
                        r.centerX = 0, r.centerY = 0, s.addChild(r);
                        var l = !0;
                        switch (_e342) {
                          case 0:
                            l = oe.Instance.musicIsOpen;
                            break;

                          case 1:
                            l = oe.Instance.soundIsOpen;
                            break;

                          case 2:
                            l = oe.Instance.virbrateIsOpen;
                        }
                        r.visible = l;
                        var c = function c() {
                            switch (_e342) {
                              case 0:
                                oe.Instance.switchMusicState(), l = oe.Instance.musicIsOpen;
                                break;

                              case 1:
                                oe.Instance.switchSoundState(), l = oe.Instance.soundIsOpen;
                                break;

                              case 2:
                                oe.Instance.switchVirbrateState(), l = oe.Instance.virbrateIsOpen;
                            }
                            r.visible = l;
                        };
                        s.on(Laya.Event.CLICK, _this53, c);
                    };
                    for (var _e342 = 0; _e342 < 3; _e342++) {
                        _loop8(_e342);
                    }
                    var i = new Laya.Image("PastureUI/Dialog/tk_09.png");
                    i.size(297, 117), i.sizeGrid = "0,60,0,60,0", i.centerX = 0, i.bottom = 30, i.on(Laya.Event.CLICK, la.Instance, la.Instance.btn1OnClick);
                    var n = new Laya.Label();
                    n.text = w.getLanguage("setting_dialog_close_button_text"), n.bold = !0, n.fontSize = 50, 
                    n.color = "#ffffff", n.align = "center", n.valign = "middle", n.top = 28, n.centerX = 0, 
                    i.addChild(n), e.addChild(i);
                });
                He.Instance.popInsertAd();
            }
        }, {
            key: "close",
            value: function close() {
                this.visible = !1, He.Instance.hideBannerAd(), He.Instance.showCustomGridAd(), this.dialog && this.dialog.close();
            }
        }, {
            key: "btn1OnClick",
            value: function btn1OnClick(e) {
                oe.Instance.playButtonClickSound(), this.close();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return la.instance;
            }
        } ]);
        return la;
    }();
    la.instance = new la();
    var ca = /* */ function(_Laya$Script15) {
        _inherits2(ca, _Laya$Script15);
        var _super36 = _createSuper2(ca);
        function ca() {
            _classCallCheck2(this, ca);
            return _super36.call(this);
        }
        _createClass2(ca, [ {
            key: "onAwake",
            value: function onAwake() {
                this.initDataVoice();
            }
        }, {
            key: "onStart",
            value: function onStart() {
                oe.Instance.playBgMusic();
            }
        }, {
            key: "onClick",
            value: function onClick() {
                oe.Instance.playButtonClickSound(), fe.imageScaleAnimation(this.headImage), la.Instance.show();
            }
        }, {
            key: "initDataVoice",
            value: function initDataVoice() {
                oe.Instance.init(), this.rootView = this.owner, this.headImage = this.rootView.getChildByName("bg"), 
                this.headImage.pivot(this.headImage.width / 2, this.headImage.height / 2);
            }
        }, {
            key: "hideUI",
            value: function hideUI() {
                this.rootView && (this.rootView.visible = !1);
            }
        }, {
            key: "showUI",
            value: function showUI() {
                this.rootView && (this.rootView.visible = !0);
            }
        } ]);
        return ca;
    }(Laya.Script);
    var ha = /* */ function(_Laya$Script16) {
        _inherits2(ha, _Laya$Script16);
        var _super37 = _createSuper2(ha);
        function ha() {
            _classCallCheck2(this, ha);
            return _super37.call(this);
        }
        _createClass2(ha, [ {
            key: "onAwake",
            value: function onAwake() {
                this.rootView = this.owner, this.rootView.pivot(.5 * this.rootView.width, .5 * this.rootView.height), 
                this.rootView.visible = Oe.Instance.bigShopUnlocked() || Zt.Instance.MaxSceneIndex > 1, 
                Laya.stage.on(e.SHOW_BIG_SHOP_BUTTON_UI, this, this.show);
            }
        }, {
            key: "show",
            value: function show() {
                0 == this.rootView.visible && (this.rootView.visible = !0);
            }
        }, {
            key: "onClick",
            value: function onClick() {
                oe.Instance.playButtonClickSound(), fe.viewScaleAnimation(this.rootView), this.doTask();
            }
        }, {
            key: "doTask",
            value: function doTask() {
                Ee.Instance.pauseRecordTime();
                var e = new We();
                e.caller = this, e.callback = this.doTaksCallback, ze.Instance.doTaskWithHandler(e, 0);
            }
        }, {
            key: "doTaksCallback",
            value: function doTaksCallback() {
                Ee.Instance.resumeRecordTime();
                var e = Ee.Instance.sellOutAllProduct(), t = w.getLanguage("animal_sell_out_dialog_title"), a = w.getLanguage("animal_sell_out_dialog_message");
                a = r.formatString(a, r.number2DataUnitString(e));
                var i = w.getLanguage("animal_sell_out_dialog_button_text");
                je.Instance.show(t, a, i, null, this, null, null, !1, !0);
            }
        } ]);
        return ha;
    }(Laya.Script);
    var da = /* */ function(_Laya$Script17) {
        _inherits2(da, _Laya$Script17);
        var _super38 = _createSuper2(da);
        function da() {
            _classCallCheck2(this, da);
            return _super38.call(this);
        }
        _createClass2(da, [ {
            key: "onAwake",
            value: function onAwake() {
                this.rootView = this.owner, this.rootView.pivot(.5 * this.rootView.width, .5 * this.rootView.height), 
                this.rootView.visible = ce.Instance.bigWarehouseIsUnlocked() || Zt.Instance.MaxSceneIndex > 1, 
                Laya.stage.on(e.SHOW_BIG_WAREHOUSE_BUTTON_UI, this, this.show);
            }
        }, {
            key: "show",
            value: function show() {
                0 == this.rootView.visible && (this.rootView.visible = !0);
            }
        }, {
            key: "onClick",
            value: function onClick() {
                oe.Instance.playButtonClickSound(), fe.viewScaleAnimation(this.rootView), this.doTask();
            }
        }, {
            key: "doTask",
            value: function doTask() {
                Ee.Instance.pauseRecordTime();
                var e = new We();
                e.caller = this, e.callback = this.doTaksCallback, ze.Instance.doTaskWithHandler(e, 0);
            }
        }, {
            key: "doTaksCallback",
            value: function doTaksCallback() {
                Ee.Instance.resumeRecordTime(), ce.Instance.settleAllOffLineWarehouse(), ce.Instance.collectAllWarehouseAnimal();
                var e = w.getLanguage("get_all_warehouse_animals_dialog_title"), t = w.getLanguage("get_all_warehouse_animals_dialog_message"), a = w.getLanguage("get_all_warehouse_animals_dialog_button_text");
                je.Instance.show(e, t, a, null, this, null, null, !1, !0);
            }
        } ]);
        return da;
    }(Laya.Script);
    var ma = /* */ function(_Laya$Script18) {
        _inherits2(ma, _Laya$Script18);
        var _super39 = _createSuper2(ma);
        function ma() {
            _classCallCheck2(this, ma);
            return _super39.call(this);
        }
        _createClass2(ma, [ {
            key: "onAwake",
            value: function onAwake() {
                this.rootView = this.owner, this.rootView.pivot(.5 * this.rootView.width, .5 * this.rootView.height);
            }
        }, {
            key: "onClick",
            value: function onClick() {
                oe.Instance.playButtonClickSound(), fe.viewScaleAnimation(this.rootView), this.doTask();
            }
        }, {
            key: "doTask",
            value: function doTask() {
                Ee.Instance.pauseRecordTime();
                var e = new We();
                e.caller = this, e.callback = this.doTaksCallback, ze.Instance.doTaskWithHandler(e, 0);
            }
        }, {
            key: "doTaksCallback",
            value: function doTaksCallback() {
                Ee.Instance.resumeRecordTime(), Laya.timer.once(500, this, this.showAniamtion);
            }
        }, {
            key: "showAniamtion",
            value: function showAniamtion() {
                Xt.Instance.show();
            }
        } ]);
        return ma;
    }(Laya.Script);
    var ga = /* */ function(_Laya$Script19) {
        _inherits2(ga, _Laya$Script19);
        var _super40 = _createSuper2(ga);
        function ga() {
            var _this54;
            _classCallCheck2(this, ga);
            _this54 = _super40.call(this), ga.mInstance = _assertThisInitialized2(_this54);
            return _this54;
        }
        _createClass2(ga, [ {
            key: "onAwake",
            value: function onAwake() {
                this.rootView = this.owner, this.rootView.pivot(.5 * this.rootView.width, .5 * this.rootView.height), 
                this.taskTitleBg = this.bgImage.getChildByName("taskTitleBg"), Laya.stage.on(e.REFRESH_MOTORBYCLE_TIME, this, this.onRefresh), 
                this.onRefresh();
            }
        }, {
            key: "onRefresh",
            value: function onRefresh() {
                this.motorbycleEnable ? (this.startCountDown(), this.timeBg.visible = !0, this.taskTitleBg.visible = !1) : (this.timeBg.visible = !1, 
                this.taskTitleBg.visible = !0);
            }
        }, {
            key: "startCountDown",
            value: function startCountDown() {
                var e = r.getNowTimestamp(), t = Math.floor((Ee.Instance.getMotorbycleTime() - e) / 1e3);
                t < 0 ? (this.onRefresh(), Yt.Instance.AllBodyActionMode == X.Riding && (Yt.Instance.AllBodyActionMode = X.None)) : (this.timeLabel.text = r.secondsFormatMS(t), 
                Laya.timer.once(1e3, this, this.startCountDown));
            }
        }, {
            key: "motorbycleEnable",
            get: function get() {
                return r.getNowTimestamp() < Ee.Instance.getMotorbycleTime();
            }
        }, {
            key: "onClick",
            value: function onClick() {
                oe.Instance.playButtonClickSound(), fe.imageScaleAnimation(this.bgImage), this.motorbycleEnable ? Yt.Instance.isRiding ? Yt.Instance.AllBodyActionMode = X.None : Yt.Instance.AllBodyActionMode = X.Riding : this.doTask();
            }
        }, {
            key: "doTask",
            value: function doTask() {
                var e = new We();
                e.caller = this, e.callback = this.doTaksCallback, ze.Instance.doTaskWithHandler(e, 0);
            }
        }, {
            key: "doTaksCallback",
            value: function doTaksCallback() {
                var e = r.getNowTimestamp() + 1e3 * T.Instance.doTaskAddMotorSeconds;
                Ee.Instance.coverMotorbycleTime(e), Yt.Instance.AllBodyActionMode = X.Riding;
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return ga.mInstance;
            }
        } ]);
        return ga;
    }(Laya.Script);
    var ua = /* */ function() {
        function ua() {
            _classCallCheck2(this, ua);
            this.visible = !1;
        }
        _createClass2(ua, [ {
            key: "show",
            value: function show() {
                console.log("dialog_4");
                this.visible && this.close(), He.Instance.showBannerAd(), He.Instance.hideCustomGridAd(), 
                this.visible = !0;
                this.dialog = new Laya.Dialog(), this.dialog.size(Laya.stage.width, Laya.stage.height);
                var e = new Laya.Image();
                e.size(Laya.stage.width, Laya.stage.height), e.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), 
                e.alpha = .5, e.centerX = 0, e.centerY = 0, this.dialog.addChild(e);
                var t = this;
                this.dialog.show(), Laya.timer.once(l.dialogDelayRenderMilliseconds, this, function() {
                    var e = new Laya.Image("PastureUI/Dialog/tk_14.png");
                    e.centerX = 0, e.centerY = -470, t.dialog.addChild(e);
                    var a = new Laya.Image("PastureUI/Dialog/tk_01.png");
                    a.size(605, 871), a.sizeGrid = "170,0,110,0,0", a.centerX = 0, a.centerY = -140, 
                    t.dialog.addChild(a);
                    var i = new Laya.Image("PastureUI/Dialog/tk_46.png");
                    i.top = 17, i.centerX = 0, i.zOrder = 2, a.addChild(i);
                    var n = new Laya.Image("PastureUI/Dialog/tk_02.png");
                    n.size(536, 590), n.sizeGrid = "88,0,59,0,0", n.top = 120, n.centerX = 0, a.addChild(n);
                    var o = new Laya.Image("PastureUI/Dialog/tk_48_01.png");
                    o.size(511, 84), o.sizeGrid = "41,50,41,50,0", o.top = 37, o.centerX = 0;
                    var s = new Laya.Label();
                    s.text = w.getLanguage("service_dialog_message_1"), s.fontSize = 28, s.color = "#c97c52", 
                    s.align = "left", s.valign = "middle", s.top = 29, s.left = 37, o.addChild(s), n.addChild(o);
                    var l = new Laya.Image("PastureUI/Dialog/tk_48_01.png");
                    l.size(511, 294), l.sizeGrid = "41,50,41,50,0", l.top = 131, l.centerX = 0;
                    var c = new Laya.Label();
                    c.text = w.getLanguage("service_dialog_message_2"), c.fontSize = 28, c.color = "#c97c52", 
                    c.align = "left", c.valign = "middle", c.top = 29, c.left = 37, l.addChild(c);
                    var h = new Laya.Image("PastureUI/Dialog/tk_49.png");
                    h.top = 73, h.left = c.left, l.addChild(h), n.addChild(l);
                    var d = new Laya.Image("PastureUI/Dialog/tk_48_01.png");
                    d.size(511, 144), d.sizeGrid = "41,50,41,50,0", d.top = 434, d.centerX = 0;
                    var m = new Laya.Label();
                    m.text = w.getLanguage("service_dialog_message_3"), m.fontSize = 28, m.color = "#c97c52", 
                    m.align = "left", m.valign = "middle", m.top = 29, m.left = 37, d.addChild(m);
                    var g = new Laya.Image("PastureUI/Dialog/tk_48.png");
                    g.size(186, 60), g.centerX = 0, g.top = 66, d.addChild(g);
                    var u = Ee.Instance.GoldReward, p = r.number2DataUnitString(u), y = new Laya.Label();
                    y.text = "+" + p, y.bold = !0, y.fontSize = 38, y.color = "#ffffff", y.align = "center", 
                    y.valign = "middle", y.centerY = 0, y.centerX = 0, g.addChild(y);
                    var f = new Laya.Image("PastureUI/Main/Icon_Coin.png");
                    f.centerY = 0, f.left = .5 * -f.width, g.addChild(f), n.addChild(d);
                    var I = new Laya.Image("PastureUI/Dialog/tk_13.png");
                    I.size(300, 116), I.sizeGrid = "0,60,0,60,0", I.centerX = 0, I.bottom = 24, I.on(Laya.Event.CLICK, ua.Instance, ua.Instance.btn1OnClick);
                    var C = new Laya.Label();
                    C.text = w.getLanguage("service_dialog_button_text"), C.bold = !0, C.fontSize = 50, 
                    C.color = "#ffffff", C.align = "center", C.valign = "middle", C.top = 28, C.centerX = 0, 
                    I.addChild(C), a.addChild(I);
                    var A = new Laya.Label();
                    A.text = w.getLanguage("service_dialog_colse_text"), A.fontSize = 32, A.color = "#c0c1c5", 
                    A.align = "center", A.valign = "middle", A.underline = !0, A.bottom = -65, A.centerX = 0, 
                    A.on(Laya.Event.CLICK, t, t.btnCloseOnClick), a.addChild(A), a.addChild(I);
                });
                He.Instance.popInsertAd();
            }
        }, {
            key: "close",
            value: function close() {
                this.visible = !1, He.Instance.hideBannerAd(), He.Instance.showCustomGridAd(), this.dialog && this.dialog.close();
            }
        }, {
            key: "btnCloseOnClick",
            value: function btnCloseOnClick(e) {
                oe.Instance.playButtonClickSound(), this.close();
            }
        }, {
            key: "btn1OnClick",
            value: function btn1OnClick(e) {
                oe.Instance.playButtonClickSound(), this.openCustomerService(), this.close();
            }
        }, {
            key: "openCustomerService",
            value: function openCustomerService() {
                !Laya.Browser.onMiniGame || Laya.Browser.onQQMiniGame || Laya.Browser.onTTMiniGame || Laya.Browser.window.wx.openCustomerServiceConversation({
                    sessionFrom: "everyDayReward",
                    showMessageCard: !0,
                    sendMessageTitle: "领取金币奖励",
                    sendMessagePath: "P/everyDayReward",
                    sendMessageImg: "",
                    success: function success(e) {
                        console.log("成功成功成功"), ua.Instance.doTaksCallback();
                    },
                    fail: function fail(e) {
                        console.log("失败失败失败");
                    },
                    complete: function complete(e) {
                        console.log("完成完成完成");
                    }
                });
            }
        }, {
            key: "doTaksCallback",
            value: function doTaksCallback() {
                this.close();
                var e = window.ystorage.getItem("STimestamp"), t = 0;
                e && (t = Number(e));
                var a = new Date();
                if (a.setTime(t), r.isToday(a)) return;
                window.ystorage.setItem("STimestamp", r.getNowTimestamp().toString());
                var i = Ee.Instance.GoldReward;
                i = Math.round(i), Ee.Instance.coverGoldCoins(Ee.Instance.getGoldCoins() + i);
                var n = r.number2DataUnitString(i), o = w.getLanguage("prop_gold_dialog_title"), s = w.getLanguage("prop_gold_dialog_message");
                s = r.formatString(s, n);
                var l = w.getLanguage("prop_gold_dialog_button_text");
                je.Instance.show(o, s, l, null, this, null, null, !1, !0);
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return ua.instance;
            }
        } ]);
        return ua;
    }();
    ua.instance = new ua();
    var pa = /* */ function(_Laya$Script20) {
        _inherits2(pa, _Laya$Script20);
        var _super41 = _createSuper2(pa);
        function pa() {
            _classCallCheck2(this, pa);
            return _super41.call(this);
        }
        _createClass2(pa, [ {
            key: "onAwake",
            value: function onAwake() {
                this.rootView = this.owner, this.rootView.visible = Laya.Browser.onMiniGame, this.rootView.pivot(.5 * this.rootView.width, .5 * this.rootView.height);
            }
        }, {
            key: "onClick",
            value: function onClick() {
                oe.Instance.playButtonClickSound(), fe.viewScaleAnimation(this.rootView), ua.Instance.show();
            }
        } ]);
        return pa;
    }(Laya.Script);
    var ya = /* */ function(_Laya$Script21) {
        _inherits2(ya, _Laya$Script21);
        var _super42 = _createSuper2(ya);
        function ya() {
            _classCallCheck2(this, ya);
            return _super42.call(this);
        }
        _createClass2(ya, [ {
            key: "onAwake",
            value: function onAwake() {
                this.rootView = this.owner, this.rootView.pivot(.5 * this.rootView.width, .5 * this.rootView.height);
            }
        }, {
            key: "onClick",
            value: function onClick() {
                oe.Instance.playButtonClickSound(), fe.viewScaleAnimation(this.rootView), Ke.Instance.show();
            }
        } ]);
        return ya;
    }(Laya.Script);
    var fa = /* */ function(_Laya$Script22) {
        _inherits2(fa, _Laya$Script22);
        var _super43 = _createSuper2(fa);
        function fa() {
            _classCallCheck2(this, fa);
            return _super43.apply(this, arguments);
        }
        _createClass2(fa, [ {
            key: "onAwake",
            value: function onAwake() {
                this.headImage.pivot(.5 * this.headImage.width, .5 * this.headImage.height), this.owner.visible = J.onTTGame(), 
                this.headImage.on(Laya.Event.CLICK, this, this.onHeadImageClick), this.initData(), 
                J.Instance.startVideoRecord(!1);
            }
        }, {
            key: "initData",
            value: function initData() {
                Laya.stage.on(e.REFRESH_RECORDING_SCREEN_BUTTON_UI, this, this.refreshUI);
            }
        }, {
            key: "refreshUI",
            value: function refreshUI() {
                if (this.headImage) switch (J.Instance.recordState) {
                  case 0:
                    this.headImage.skin = "PastureUI/Main2/video_start.png";
                    break;

                  case 1:
                    this.headImage.skin = "PastureUI/Main2/video_stop.png";
                    break;

                  case 2:
                    this.headImage.skin = "PastureUI/Main2/video_share.png";
                }
            }
        }, {
            key: "onHeadImageClick",
            value: function onHeadImageClick() {
                switch (oe.Instance.playButtonClickSound(), fe.imageScaleAnimation(this.headImage), 
                J.Instance.recordState) {
                  case 0:
                    J.Instance.startVideoRecord(!1);
                    break;

                  case 1:
                    J.Instance.stopVideoRecord();
                    break;

                  case 2:
                    J.Instance.shareVideoRecord(null);
                }
            }
        } ]);
        return fa;
    }(Laya.Script);
    var Ia = /* */ function() {
        function Ia() {
            _classCallCheck2(this, Ia);
            this.visible = !1;
        }
        _createClass2(Ia, [ {
            key: "show",
            value: function show() {
                console.log("dialog_5");
                this.visible && this.close(), He.Instance.showBannerAd(), He.Instance.hideCustomGridAd(), 
                this.visible = !0;
                this.dialog = new Laya.Dialog(), this.dialog.size(Laya.stage.width, Laya.stage.height);
                var e = new Laya.Image();
                e.size(Laya.stage.width, Laya.stage.height), e.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000"), 
                e.alpha = .5, e.centerX = 0, e.centerY = 0, this.dialog.addChild(e);
                this.dialog.show(), Laya.timer.once(l.dialogDelayRenderMilliseconds, this, function() {
                    var e = new Laya.Image("PastureUI/Dialog/tk_01.png");
                    e.size(605, 936), e.sizeGrid = "170,0,110,0,0", e.centerX = 0, e.centerY = -100, 
                    this.dialog.addChild(e);
                    var t = new Laya.Image("PastureUI/Dialog/tk_42.png");
                    t.top = 44, t.centerX = 0, e.addChild(t);
                    var a = new Laya.Image("PastureUI/Dialog/zjm_38.jpg");
                    a.top = 115, a.centerX = 0, e.addChild(a);
                    var i = new Laya.Image("PastureUI/Dialog/tk_09.png");
                    i.size(297, 117), i.sizeGrid = "0,60,0,60,0", i.centerX = 0, i.bottom = 20, i.on(Laya.Event.CLICK, Ia.Instance, Ia.Instance.closeBtnOnClick);
                    var n = new Laya.Label();
                    n.text = w.getLanguage("warehouse_upgrade_dialog_close_button_text"), n.bold = !0, 
                    n.fontSize = 50, n.color = "#ffffff", n.align = "center", n.valign = "middle", n.top = 28, 
                    n.centerX = 0, i.addChild(n), e.addChild(i);
                });
                He.Instance.popInsertAd();
            }
        }, {
            key: "close",
            value: function close() {
                this.visible = !1, He.Instance.hideBannerAd(), He.Instance.showCustomGridAd(), this.dialog && this.dialog.close();
            }
        }, {
            key: "closeBtnOnClick",
            value: function closeBtnOnClick(e) {
                oe.Instance.playButtonClickSound(), this.close();
            }
        } ], [ {
            key: "Instance",
            get: function get() {
                return Ia.instance;
            }
        } ]);
        return Ia;
    }();
    Ia.instance = new Ia();
    var wa = /* */ function(_Laya$Script23) {
        _inherits2(wa, _Laya$Script23);
        var _super44 = _createSuper2(wa);
        function wa() {
            _classCallCheck2(this, wa);
            return _super44.call(this);
        }
        _createClass2(wa, [ {
            key: "onAwake",
            value: function onAwake() {
                if (this.rootView = this.owner, this.rootView.pivot(.5 * this.rootView.width, .5 * this.rootView.height), 
                Laya.Browser.onTTMiniGame) {
                    this.rootView.visible = !0;
                    var _e343 = this;
                    Laya.Browser.window.tt.onFavoriteStateChange(function(t) {
                        t ? (console.log("收藏成功"), _e343.rootView.visible = !1, c.Instance.show("收藏成功")) : console.log("收藏失败");
                    });
                } else this.rootView.visible = !1;
            }
        }, {
            key: "onClick",
            value: function onClick() {
                oe.Instance.playButtonClickSound(), fe.viewScaleAnimation(this.rootView), Laya.Browser.onTTMiniGame ? J.TT.showFavoriteGuide({
                    type: "bar",
                    content: "一键添加到我的小程序",
                    position: "bottom",
                    success: function success(e) {
                        console.log("引导组件展示成功");
                    },
                    fail: function fail(e) {
                        Ia.Instance.show(), console.log("引导组件展示失败");
                    }
                }) : Ia.Instance.show();
            }
        } ]);
        return wa;
    }(Laya.Script);
    var Ca = /* */ function(_Laya$Script24) {
        _inherits2(Ca, _Laya$Script24);
        var _super45 = _createSuper2(Ca);
        function Ca() {
            _classCallCheck2(this, Ca);
            return _super45.call(this);
        }
        _createClass2(Ca, [ {
            key: "onAwake",
            value: function onAwake() {
                this.rootView = this.owner, this.rootView.pivot(.5 * this.rootView.width, .5 * this.rootView.height);
            }
        }, {
            key: "onClick",
            value: function onClick() {
                oe.Instance.playButtonClickSound(), He.Instance.showCustomMultiGridAd(), He.Instance.hideCustomGridAd(), 
                He.Instance.hideBannerAd();
            }
        } ]);
        return Ca;
    }(Laya.Script);
    var Aa = /* */ function(_Laya$Script25) {
        _inherits2(Aa, _Laya$Script25);
        var _super46 = _createSuper2(Aa);
        function Aa() {
            _classCallCheck2(this, Aa);
            return _super46.call(this);
        }
        _createClass2(Aa, [ {
            key: "onAwake",
            value: function onAwake() {
                this.rootView = this.owner, this.rootView.pivot(this.rootView.width / 2, this.rootView.height / 2);
            }
        }, {
            key: "onStart",
            value: function onStart() {}
        }, {
            key: "onClick",
            value: function onClick() {
                var e;
                oe.Instance.playButtonClickSound(), fe.imageScaleAnimation(this.rootView), (e = Laya.Browser.onQQMiniGame ? new ae() : new ee()).caller = this, 
                e.callback = this.shareSuccess, Laya.Browser.onTTMiniGame ? J.Instance.share(null) : Laya.Browser.onQQMiniGame ? te.Instance.share(e) : $.Instance.share(e);
            }
        }, {
            key: "shareSuccess",
            value: function shareSuccess(e) {
                s.log("哈哈哈哈，分享成功");
            }
        }, {
            key: "hideUI",
            value: function hideUI() {
                this.rootView && (this.rootView.visible = !1);
            }
        }, {
            key: "showUI",
            value: function showUI() {
                this.rootView && (this.rootView.visible = !0);
            }
        } ]);
        return Aa;
    }(Laya.Script);
    var La = /* */ function() {
        function La() {
            _classCallCheck2(this, La);
        }
        _createClass2(La, null, [ {
            key: "init",
            value: function init() {
                var e = Laya.ClassUtils.regClass;
                e("script/controller/ui/LoadController.ts", ra), e("script/controller/ui/MainSceneController.ts", jt), 
                e("script/uiview/BottomView/ControlPanelController.ts", Fe), e("script/uiview/FunctionView/ShopView.ts", xe), 
                e("script/uiview/FunctionView/WarehouseView.ts", dt), e("script/uiview/FunctionView/BigWarehouseView.ts", rt), 
                e("script/uiview/FunctionView/WarehouseNPCView.ts", yt), e("script/uiview/TopView/GoldCoinsViewUIController.ts", Ie), 
                e("script/uiview/TopView/BlockViewUIController.ts", At), e("script/uiview/TopView/SettingButtonController.ts", ca), 
                e("script/uiview/TopView/ProductsViewUIController.ts", Ce), e("script/uiview/RightView/BigShopButtonViewUIController.ts", ha), 
                e("script/uiview/RightView/BigWarehouseButtonViewUIController.ts", da), e("script/uiview/RightView/WoodViewUIController.ts", at), 
                e("script/uiview/RightView/BeAdultButtonViewUIController.ts", ma), e("script/uiview/RightView/MotorbycleButtonViewUIController.ts", ga), 
                e("script/uiview/LeftView/ServiceButtonViewController.ts", pa), e("script/uiview/LeftView/MapButtonViewUIController.ts", ya), 
                e("script/uiview/LeftView/RecordingScreenButtonViewController.ts", fa), e("script/uiview/LeftView/FavoriteButtonViewUIController.ts", wa), 
                e("script/uiview/LeftView/FriendFarmButtonViewController.ts", Ca), e("script/uiview/OperationView/PastureOperationView.ts", et), 
                e("script/uiview/CenterView/ShareButtonController.ts", Aa), e("script/uiview/OperationView/FunctionBuildingOperationView.ts", ct), 
                e("script/uiview/FunctionView/ShopMultipleSellView.ts", st);
            }
        } ]);
        return La;
    }();
    La.width = 720, La.height = 1280, La.scaleMode = window.isPhone?"fixedwidth":"fixedheight", La.screenMode = "none", 
    La.alignV = "middle", La.alignH = "center", La.startScene = "LoadScene.scene", La.sceneRoot = "", 
    La.debug = !1, La.stat = !1, La.physicsDebug = !1, La.exportSceneToJson = !0, La.init();
    new (/* */ function() {
        function _class() {
            _classCallCheck2(this, _class);
            Config.useRetinalCanvas = !0, Laya.Browser.onMiniGame ? Laya.MiniAdpter.init(!0, !1) : Laya.Browser.onQQMiniGame && Laya.QQMiniAdapter.init(!0, !1), 
            window.Laya3D ? Laya3D.init(La.width, La.height, null, Laya.Handler.create(this, this.initMain)) : (Laya.init(La.width, La.height, Laya.WebGL), 
            this.initMain());
        }
        _createClass2(_class, [ {
            key: "onFontLoaded",
            value: function onFontLoaded() {
                console.log("字体加载成功");
            }
        }, {
            key: "initMain",
            value: function initMain() {
                window.ystorage = Laya.LocalStorage;
                window.estorage = {
                    setJSON: function(key, val) {
                        window.ystorage.setItem(key, JSON.stringify(val));
                    },
                    getJSON: function(key) {
                        return JSON.parse(window.ystorage.getItem(key));
                    }
                }
                Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), 
                Laya.stage.scaleMode = La.scaleMode, Laya.stage.screenMode = La.screenMode, Laya.stage.alignV = La.alignV, 
                Laya.stage.alignH = La.alignH, Laya.URL.exportSceneToJson = La.exportSceneToJson, 
                (La.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), 
                La.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), La.stat && Laya.Stat.show(), 
                Laya.alertGlobalError(!0), Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
            }
        }, {
            key: "onVersionLoaded",
            value: function onVersionLoaded() {
               
				setTimeout(function(){
                            my.i(() => {});
                        }, 500);
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
		my.init({
                 gamemonetizeId: "b8wrbaovio35tcnpy9gf3d5gbi7e52bq",
                 complete: () => {
          console.log('gamemonetizeId');
	}
	         })
            }
        }, {
            key: "onConfigLoaded",
            value: function onConfigLoaded() {
                La.startScene && Laya.Scene.open(La.startScene);
            }
        } ]);
        return _class;
    }())();
}();
},{"../@babel/runtime/helpers/assertThisInitialized":2,"../@babel/runtime/helpers/classCallCheck":3,"../@babel/runtime/helpers/createClass":4,"../@babel/runtime/helpers/createForOfIteratorHelper":5,"../@babel/runtime/helpers/createSuper":6,"../@babel/runtime/helpers/inherits":8,"../@babel/runtime/helpers/typeof":12}]},{},[14]);
