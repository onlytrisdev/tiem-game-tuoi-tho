window.__require = function e(t, n, i) {
    function o(a, r) {
        if (!n[a]) {
            if (!t[a]) {
                var c = a.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l) return l(c, !0);
                    if (s) return s(c, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = c
            }
            var u = n[a] = {
                exports: {}
            };
            t[a][0].call(u.exports, function(e) {
                return o(t[a][1][e] || e)
            }, u, u.exports, e, t, n, i)
        }
        return n[a].exports
    }
    for (var s = "function" == typeof __require && __require, a = 0; a < i.length; a++) o(i[a]);
    return o
}({
    1: [function(e, t, n) {
        var i = e("util/"),
            o = Array.prototype.slice,
            s = Object.prototype.hasOwnProperty,
            a = t.exports = d;

        function r(e, t) {
            return i.isUndefined(t) ? "" + t : i.isNumber(t) && !isFinite(t) ? t.toString() : i.isFunction(t) || i.isRegExp(t) ? t.toString() : t
        }

        function c(e, t) {
            return i.isString(e) ? e.length < t ? e : e.slice(0, t) : e
        }

        function l(e) {
            return c(JSON.stringify(e.actual, r), 128) + " " + e.operator + " " + c(JSON.stringify(e.expected, r), 128)
        }

        function u(e, t, n, i, o) {
            throw new a.AssertionError({
                message: n,
                actual: e,
                expected: t,
                operator: i,
                stackStartFunction: o
            })
        }

        function d(e, t) {
            e || u(e, !0, t, "==", a.ok)
        }

        function h(e, t) {
            if (e === t) return !0;
            if (i.isBuffer(e) && i.isBuffer(t)) {
                if (e.length != t.length) return !1;
                for (var n = 0; n < e.length; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
            return i.isDate(e) && i.isDate(t) ? e.getTime() === t.getTime() : i.isRegExp(e) && i.isRegExp(t) ? e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase : i.isObject(e) || i.isObject(t) ? m(e, t) : e == t
        }

        function p(e) {
            return "[object Arguments]" == Object.prototype.toString.call(e)
        }

        function m(e, t) {
            if (i.isNullOrUndefined(e) || i.isNullOrUndefined(t)) return !1;
            if (e.prototype !== t.prototype) return !1;
            if (i.isPrimitive(e) || i.isPrimitive(t)) return e === t;
            var n = p(e),
                s = p(t);
            if (n && !s || !n && s) return !1;
            if (n) return h(e = o.call(e), t = o.call(t));
            var a, r, c = S(e),
                l = S(t);
            if (c.length != l.length) return !1;
            for (c.sort(), l.sort(), r = c.length - 1; r >= 0; r--)
                if (c[r] != l[r]) return !1;
            for (r = c.length - 1; r >= 0; r--)
                if (!h(e[a = c[r]], t[a])) return !1;
            return !0
        }

        function g(e, t) {
            return !(!e || !t) && ("[object RegExp]" == Object.prototype.toString.call(t) ? t.test(e) : e instanceof t || !0 === t.call({}, e))
        }

        function f(e, t, n, o) {
            var s;
            i.isString(n) && (o = n, n = null);
            try {
                t()
            } catch (e) {
                s = e
            }
            if (o = (n && n.name ? " (" + n.name + ")." : ".") + (o ? " " + o : "."), e && !s && u(s, n, "Missing expected exception" + o), !e && g(s, n) && u(s, n, "Got unwanted exception" + o), e && s && n && !g(s, n) || !e && s) throw s
        }
        a.AssertionError = function(e) {
            this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = l(this), this.generatedMessage = !0);
            var t = e.stackStartFunction || u;
            if (Error.captureStackTrace) Error.captureStackTrace(this, t);
            else {
                var n = new Error;
                if (n.stack) {
                    var i = n.stack,
                        o = t.name,
                        s = i.indexOf("\n" + o);
                    if (s >= 0) {
                        var a = i.indexOf("\n", s + 1);
                        i = i.substring(a + 1)
                    }
                    this.stack = i
                }
            }
        }, i.inherits(a.AssertionError, Error), a.fail = u, a.ok = d, a.equal = function(e, t, n) {
            e != t && u(e, t, n, "==", a.equal)
        }, a.notEqual = function(e, t, n) {
            e == t && u(e, t, n, "!=", a.notEqual)
        }, a.deepEqual = function(e, t, n) {
            h(e, t) || u(e, t, n, "deepEqual", a.deepEqual)
        }, a.notDeepEqual = function(e, t, n) {
            h(e, t) && u(e, t, n, "notDeepEqual", a.notDeepEqual)
        }, a.strictEqual = function(e, t, n) {
            e !== t && u(e, t, n, "===", a.strictEqual)
        }, a.notStrictEqual = function(e, t, n) {
            e === t && u(e, t, n, "!==", a.notStrictEqual)
        }, a.throws = function(e, t, n) {
            f.apply(this, [!0].concat(o.call(arguments)))
        }, a.doesNotThrow = function(e, t) {
            f.apply(this, [!1].concat(o.call(arguments)))
        }, a.ifError = function(e) {
            if (e) throw e
        };
        var S = Object.keys || function(e) {
            var t = [];
            for (var n in e) s.call(e, n) && t.push(n);
            return t
        }
    }, {
        "util/": 4
    }],
    2: [function(e, t, n) {
        "function" == typeof Object.create ? t.exports = function(e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : t.exports = function(e, t) {
            e.super_ = t;
            var n = function() {};
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
    }, {}],
    3: [function(e, t, n) {
        t.exports = function(e) {
            return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
        }
    }, {}],
    4: [function(e, t, n) {
        (function(t, i) {
            var o = /%[sdj%]/g;
            n.format = function(e) {
                if (!C(e)) {
                    for (var t = [], n = 0; n < arguments.length; n++) t.push(r(arguments[n]));
                    return t.join(" ")
                }
                n = 1;
                for (var i = arguments, s = i.length, a = String(e).replace(o, function(e) {
                        if ("%%" === e) return "%";
                        if (n >= s) return e;
                        switch (e) {
                            case "%s":
                                return String(i[n++]);
                            case "%d":
                                return Number(i[n++]);
                            case "%j":
                                try {
                                    return JSON.stringify(i[n++])
                                } catch (e) {
                                    return "[Circular]"
                                }
                                default:
                                    return e
                        }
                    }), c = i[n]; n < s; c = i[++n]) R(c) || !I(c) ? a += " " + c : a += " " + r(c);
                return a
            }, n.deprecate = function(e, o) {
                if (y(i.process)) return function() {
                    return n.deprecate(e, o).apply(this, arguments)
                };
                if (!0 === t.noDeprecation) return e;
                var s = !1;
                return function() {
                    if (!s) {
                        if (t.throwDeprecation) throw new Error(o);
                        t.traceDeprecation ? console.trace(o) : console.error(o), s = !0
                    }
                    return e.apply(this, arguments)
                }
            };
            var s, a = {};

            function r(e, t) {
                var i = {
                    seen: [],
                    stylize: l
                };
                return arguments.length >= 3 && (i.depth = arguments[2]), arguments.length >= 4 && (i.colors = arguments[3]), _(t) ? i.showHidden = t : t && n._extend(i, t), y(i.showHidden) && (i.showHidden = !1), y(i.depth) && (i.depth = 2), y(i.colors) && (i.colors = !1), y(i.customInspect) && (i.customInspect = !0), i.colors && (i.stylize = c), d(i, e, i.depth)
            }

            function c(e, t) {
                var n = r.styles[t];
                return n ? "\x1b[" + r.colors[n][0] + "m" + e + "\x1b[" + r.colors[n][1] + "m" : e
            }

            function l(e, t) {
                return e
            }

            function u(e) {
                var t = {};
                return e.forEach(function(e, n) {
                    t[e] = !0
                }), t
            }

            function d(e, t, i) {
                if (e.customInspect && t && M(t.inspect) && t.inspect !== n.inspect && (!t.constructor || t.constructor.prototype !== t)) {
                    var o = t.inspect(i, e);
                    return C(o) || (o = d(e, o, i)), o
                }
                var s = h(e, t);
                if (s) return s;
                var a = Object.keys(t),
                    r = u(a);
                if (e.showHidden && (a = Object.getOwnPropertyNames(t)), P(t) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return p(t);
                if (0 === a.length) {
                    if (M(t)) {
                        var c = t.name ? ": " + t.name : "";
                        return e.stylize("[Function" + c + "]", "special")
                    }
                    if (E(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
                    if (A(t)) return e.stylize(Date.prototype.toString.call(t), "date");
                    if (P(t)) return p(t)
                }
                var l, _ = "",
                    R = !1,
                    v = ["{", "}"];
                (S(t) && (R = !0, v = ["[", "]"]), M(t)) && (_ = " [Function" + (t.name ? ": " + t.name : "") + "]");
                return E(t) && (_ = " " + RegExp.prototype.toString.call(t)), A(t) && (_ = " " + Date.prototype.toUTCString.call(t)), P(t) && (_ = " " + p(t)), 0 !== a.length || R && 0 != t.length ? i < 0 ? E(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(t), l = R ? m(e, t, i, r, a) : a.map(function(n) {
                    return g(e, t, i, r, n, R)
                }), e.seen.pop(), f(l, _, v)) : v[0] + _ + v[1]
            }

            function h(e, t) {
                if (y(t)) return e.stylize("undefined", "undefined");
                if (C(t)) {
                    var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return e.stylize(n, "string")
                }
                return v(t) ? e.stylize("" + t, "number") : _(t) ? e.stylize("" + t, "boolean") : R(t) ? e.stylize("null", "null") : void 0
            }

            function p(e) {
                return "[" + Error.prototype.toString.call(e) + "]"
            }

            function m(e, t, n, i, o) {
                for (var s = [], a = 0, r = t.length; a < r; ++a) w(t, String(a)) ? s.push(g(e, t, n, i, String(a), !0)) : s.push("");
                return o.forEach(function(o) {
                    o.match(/^\d+$/) || s.push(g(e, t, n, i, o, !0))
                }), s
            }

            function g(e, t, n, i, o, s) {
                var a, r, c;
                if ((c = Object.getOwnPropertyDescriptor(t, o) || {
                        value: t[o]
                    }).get ? r = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (r = e.stylize("[Setter]", "special")), w(i, o) || (a = "[" + o + "]"), r || (e.seen.indexOf(c.value) < 0 ? (r = R(n) ? d(e, c.value, null) : d(e, c.value, n - 1)).indexOf("\n") > -1 && (r = s ? r.split("\n").map(function(e) {
                        return "  " + e
                    }).join("\n").substr(2) : "\n" + r.split("\n").map(function(e) {
                        return "   " + e
                    }).join("\n")) : r = e.stylize("[Circular]", "special")), y(a)) {
                    if (s && o.match(/^\d+$/)) return r;
                    (a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
                }
                return a + ": " + r
            }

            function f(e, t, n) {
                return e.reduce(function(e, t) {
                    return 0, t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
            }

            function S(e) {
                return Array.isArray(e)
            }

            function _(e) {
                return "boolean" == typeof e
            }

            function R(e) {
                return null === e
            }

            function v(e) {
                return "number" == typeof e
            }

            function C(e) {
                return "string" == typeof e
            }

            function y(e) {
                return void 0 === e
            }

            function E(e) {
                return I(e) && "[object RegExp]" === D(e)
            }

            function I(e) {
                return "object" == typeof e && null !== e
            }

            function A(e) {
                return I(e) && "[object Date]" === D(e)
            }

            function P(e) {
                return I(e) && ("[object Error]" === D(e) || e instanceof Error)
            }

            function M(e) {
                return "function" == typeof e
            }

            function D(e) {
                return Object.prototype.toString.call(e)
            }

            function N(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10)
            }
            n.debuglog = function(e) {
                if (y(s) && (s = t.env.NODE_DEBUG || ""), e = e.toUpperCase(), !a[e])
                    if (new RegExp("\\b" + e + "\\b", "i").test(s)) {
                        var i = t.pid;
                        a[e] = function() {
                            var t = n.format.apply(n, arguments);
                            console.error("%s %d: %s", e, i, t)
                        }
                    } else a[e] = function() {};
                return a[e]
            }, n.inspect = r, r.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
            }, r.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, n.isArray = S, n.isBoolean = _, n.isNull = R, n.isNullOrUndefined = function(e) {
                return null == e
            }, n.isNumber = v, n.isString = C, n.isSymbol = function(e) {
                return "symbol" == typeof e
            }, n.isUndefined = y, n.isRegExp = E, n.isObject = I, n.isDate = A, n.isError = P, n.isFunction = M, n.isPrimitive = function(e) {
                return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
            }, n.isBuffer = e("./support/isBuffer");
            var x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            function B() {
                var e = new Date,
                    t = [N(e.getHours()), N(e.getMinutes()), N(e.getSeconds())].join(":");
                return [e.getDate(), x[e.getMonth()], t].join(" ")
            }

            function w(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            n.log = function() {
                console.log("%s - %s", B(), n.format.apply(n, arguments))
            }, n.inherits = e("inherits"), n._extend = function(e, t) {
                if (!t || !I(t)) return e;
                for (var n = Object.keys(t), i = n.length; i--;) e[n[i]] = t[n[i]];
                return e
            }
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "./support/isBuffer": 3,
        _process: 5,
        inherits: 2
    }],
    5: [function(e, t, n) {
        var i, o, s = t.exports = {};

        function a() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function c(e) {
            if (i === setTimeout) return setTimeout(e, 0);
            if ((i === a || !i) && setTimeout) return i = setTimeout, setTimeout(e, 0);
            try {
                return i(e, 0)
            } catch (t) {
                try {
                    return i.call(null, e, 0)
                } catch (t) {
                    return i.call(this, e, 0)
                }
            }
        }

        function l(e) {
            if (o === clearTimeout) return clearTimeout(e);
            if ((o === r || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
            try {
                return o(e)
            } catch (t) {
                try {
                    return o.call(null, e)
                } catch (t) {
                    return o.call(this, e)
                }
            }
        }(function() {
            try {
                i = "function" == typeof setTimeout ? setTimeout : a
            } catch (e) {
                i = a
            }
            try {
                o = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                o = r
            }
        })();
        var u, d = [],
            h = !1,
            p = -1;

        function m() {
            h && u && (h = !1, u.length ? d = u.concat(d) : p = -1, d.length && g())
        }

        function g() {
            if (!h) {
                var e = c(m);
                h = !0;
                for (var t = d.length; t;) {
                    for (u = d, d = []; ++p < t;) u && u[p].run();
                    p = -1, t = d.length
                }
                u = null, h = !1, l(e)
            }
        }

        function f(e, t) {
            this.fun = e, this.array = t
        }

        function S() {}
        s.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            d.push(new f(e, t)), 1 !== d.length || h || c(g)
        }, f.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = S, s.addListener = S, s.once = S, s.off = S, s.removeListener = S, s.removeAllListeners = S, s.emit = S, s.prependListener = S, s.prependOnceListener = S, s.listeners = function(e) {
            return []
        }, s.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, s.cwd = function() {
            return "/"
        }, s.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, s.umask = function() {
            return 0
        }
    }, {}],
    ADSPanelCtrl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b2ef3d3h7BDuJQQ4p5w2lTC", "ADSPanelCtrl");
        var i = cc.Class({
            extends: e("BaseCtrl")
        });
        t.exports = i, cc._RF.pop()
    }, {
        BaseCtrl: "BaseCtrl"
    }],
    ADSPanelView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c28efI6lLNA+4CwN2worSMg", "ADSPanelView"), cc.Class({
            extends: e("BaseView"),
            properties: {},
            onLoad: function() {},
            ClickCloseBtn: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.ADSPanel)
            },
            ClickADS: function(e, t) {
                SunX.sEventManager.ExecuteEvent(GameIAP.IAP_Pay, RGlobalConfig.Products[t])
            },
            ClickRestore: function() {
                SunX.sEventManager.ExecuteEvent(GameIAP.IAP_Restore)
            }
        }), cc._RF.pop()
    }, {
        BaseView: "BaseView"
    }],
    AddTargetToCamera: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9b1d7vEYW1Df65Td0+nT09i", "AddTargetToCamera"), cc.Class({
            extends: cc.Component,
            editor: !1,
            properties: {},
            onLoad: function() {}
        }), cc._RF.pop()
    }, {}],
    AdsContrallCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "96285QhnBRAm7ZPXCp6Eiw+", "AdsContrallCom"), cc.Class({
            extends: cc.Component,
            properties: {
                refresh: !1
            }
        }), cc._RF.pop()
    }, {}],
    AdsControl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1059fhvK4lFHLbyBlWwdUFB", "AdsControl");
        var i = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(e, t, n, i) {
                var o, s = arguments.length,
                    a = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
                else
                    for (var r = e.length - 1; r >= 0; r--)(o = e[r]) && (a = (s < 3 ? o(a) : s > 3 ? o(t, n, a) : o(t, n)) || a);
                return s > 3 && a && Object.defineProperty(t, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = e("./GAdsManager"),
            a = cc._decorator,
            r = a.ccclass,
            c = a.property,
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.m_Camera = null, t.m_AdsID = s.GAdsIDEnum.Banner, t.m_IsCustomPos = !1, t.m_IsShow = !0, t.m_ResetOnDisable = !0, t.m_Change = !1, t.m_Pos = new cc.Vec3, t
                }
                return i(t, e), t.prototype.onEnable = function() {
                    this.m_Change = !1, this.scheduleOnce(this.doDelay, .1)
                }, t.prototype.onDisable = function() {
                    this.m_ResetOnDisable && this.m_Change && this.doControl(!this.m_IsShow)
                }, t.prototype.doDelay = function(e) {
                    this.m_IsShow ^ s.GAdsManager.IsShow(s.GAdsManager.GetAdsID(this.m_AdsID)) && (this.m_Change = !0, this.doControl(this.m_IsShow))
                }, t.prototype.doControl = function(e) {
                    if (e && this.m_IsCustomPos) {
                        var t = this.m_Camera;
                        null == t && (t = cc.Camera.main);
                        var n = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
                            i = cc.game.canvas;
                        t._camera.worldToScreen(this.m_Pos, n, i.width, i.height), this.m_Pos.y = i.height - this.m_Pos.y
                    }
                    e ? s.GAdsManager.ShowBanner(s.GAdsManager.GetAdsID(this.m_AdsID), this.m_IsCustomPos ? cc.v2(this.m_Pos.x, this.m_Pos.y) : void 0) : s.GAdsManager.HideBanner(s.GAdsManager.GetAdsID(this.m_AdsID))
                }, o([c(cc.Camera)], t.prototype, "m_Camera", void 0), o([c({
                    type: cc.Enum(s.GAdsIDEnum)
                })], t.prototype, "m_AdsID", void 0), o([c({
                    displayName: "IsCustomPos",
                    tooltip: "\u662f\u5426\u81ea\u5b9a\u4e49\u5750\u6807"
                })], t.prototype, "m_IsCustomPos", void 0), o([c({
                    displayName: "Show",
                    tooltip: "\u662f\u5426\u663e\u793a\u5e7f\u544a"
                })], t.prototype, "m_IsShow", void 0), o([c({
                    displayName: "ResetOnDisable",
                    tooltip: "onDisable\u662f\u5426\u8fd8\u539f\u4e4b\u524d\u7684\u72b6\u6001"
                })], t.prototype, "m_ResetOnDisable", void 0), t = o([r], t)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "./GAdsManager": "GAdsManager"
    }],
    AdsUtils: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b7354SlE39Jlb8O9e6/Wg7B", "AdsUtils"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./GAdsManager"),
            o = e("../SXPluginSDK/SXPluginSDKMgr"),
            s = function() {
                function e() {}
                return e.ShowRewardedVideo = function(e) {
                    this.Init(), i.GAdsManager.AdsIsPermission(i.GAdsManager.RewardedvideoAdsID) ? i.GAdsManager.AdsIsReady(i.GAdsManager.RewardedvideoAdsID) ? (this.m_Handler = e, i.GAdsManager.ShowRewardedVideo(this.onRewardedVideoOverADS.bind(this)), o.SXPluginSDKMgr.SXAnalysisPlugin && o.SXPluginSDKMgr.SXAnalysisPlugin.onBegin("\u5956\u52b1\u89c6\u9891")) : SunX.sUtils.ShowMessage(this.m_NoReady) : SunX.sUtils.ShowMessage(this.m_NoPermission)
                }, e.onRewardedVideoOverADS = function(e) {
                    this.m_Handler && (this.m_Handler(e), this.m_Handler = null), o.SXPluginSDKMgr.SXAnalysisPlugin && (e ? o.SXPluginSDKMgr.SXAnalysisPlugin.onCompleted("\u5956\u52b1\u89c6\u9891") : o.SXPluginSDKMgr.SXAnalysisPlugin.onFaild("\u5956\u52b1\u89c6\u9891", "\u5173\u95ed"))
                }, e.Init = function() {
                    this.m_IsInit || (this.m_IsInit = !0, cc.sys.language == cc.sys.LANGUAGE_CHINESE ? (this.m_NoPermission = "\u6ca1\u6709\u6743\u9650\uff0c\u65e0\u6cd5\u83b7\u5f97\u5e7f\u544a!", this.m_NoReady = "\u89c6\u9891\u5e7f\u544a\u672a\u586b\u5145!", this.m_CloseBtn = "\u5173\u95ed") : (this.m_NoPermission = "Ko cho phép!", this.m_NoReady = "Ko có video tặng thưởng!", this.m_CloseBtn = "close"))
                }, e
            }();
        n.AdsUtils = s, cc._RF.pop()
    }, {
        "../SXPluginSDK/SXPluginSDKMgr": "SXPluginSDKMgr",
        "./GAdsManager": "GAdsManager"
    }],
    AnimateExeActionCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bcdd7Up3bNCOLyow2L4HGE+", "AnimateExeActionCom");
        var i = cc.Class({
            name: "exeActionItem",
            properties: {
                actionName: "",
                exeNode: {
                    default: null,
                    displayName: "ExeNode",
                    tooltip: "\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                }
            }
        });
        cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                items: {
                    default: [],
                    tooltip: "\u52a8\u753b\u4e8b\u4ef6\uff0c\u51fd\u6570\u540d:exeAction, \u53c2\u6570\u4e3astring\u7c7b\u578b\u7684\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u540d",
                    type: i
                }
            },
            exeAction: function(e) {
                for (var t = this.items.length, n = 0; n < t; n++) this.items[n].actionName == e && this.ExecuteNode(this.items[n].exeNode)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    AnimateSoundVo: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1f600BBpd5PEKYx3MuDdm3z", "AnimateSoundVo"), t.exports = cc.Class({
            name: "AnimateSoundVo",
            properties: {
                soundName: {
                    default: "",
                    displayName: "SoundName",
                    tooltip: "\u58f0\u97f3\u540d\u79f0"
                },
                audioClip: {
                    default: null,
                    type: cc.AudioClip,
                    displayName: "AudioClip"
                }
            },
            GetURL: function() {
                return this._url ? this._url : (this._url = SunX.sUtils.SliceResourcePath(this.audioClip.nativeUrl), this._url)
            },
            GetPath: function() {
                return this.audioClip.nativeUrl
            }
        }), cc._RF.pop()
    }, {}],
    AnimationCallFuncCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0dc3cLMZt5K9oxhJgLEpzLl", "AnimationCallFuncCom"), cc.Class({
            extends: cc.Component,
            editor: !1,
            onLoad: function() {
                this._animation = this.getComponent(cc.Animation)
            },
            onEnable: function() {
                this._animation.on("finished", this._onFinished, this)
            },
            onDisable: function() {
                this._animation.off("finished", this._onFinished, this)
            },
            PlayOneOver: function() {
                this._animation.pause(this._animation.defaultClip.name)
            },
            _onFinished: function(e) {}
        }), cc._RF.pop()
    }, {}],
    ArrowCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6fa10CAMY9FPqdzYmJ3oUBU", "ArrowCom"), cc.Class({
            extends: cc.Component,
            properties: {
                bg: cc.Sprite,
                label: cc.Label
            },
            onLoad: function() {},
            onDestroy: function() {},
            start: function() {
                var e = this.label.node.getContentSize(),
                    t = this.bg.node.getContentSize(),
                    n = cc.size(e.width + 70, t.height);
                this.bg.node.setContentSize(n)
            }
        }), cc._RF.pop()
    }, {}],
    BagItemView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3a079KAQxdLSJjCuvvElWiW", "BagItemView"), cc.Class({
            extends: cc.Component,
            properties: {
                INode: cc.Node,
                BImg: cc.Sprite,
                HImg: cc.Sprite,
                BNameBg: cc.Sprite,
                BName: cc.Label,
                BNumber: cc.Label,
                BCheck: cc.Node,
                BImgScale: 1.1,
                selecteSound: {
                    default: null,
                    displayName: "SelecteSound",
                    type: e("RSoundVo")
                },
                obtainSound: {
                    default: null,
                    displayName: "ObtainSound",
                    type: e("RSoundVo")
                }
            },
            onDestroy: function() {
                this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this), this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this), this._control = null
            },
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this)
            },
            SetControl: function(e) {
                this._control = e
            },
            Init: function(e) {
                this._isSize = !1, this._z = 0, this._id = e.ID, this._isUse = e.IsUse;
                var t, n = SunX.sRes.GetSpriteFrame(e.IconID);
                if (this.BImg.spriteFrame = n, this.HImg.spriteFrame = n, this.HImg.node.active = !1, this.BName.node.active = !1, this.BNameBg.node.active = !1, this.BNumber.node.active = e.IsPile, this._isPile = e.IsPile, e.IsPile && this.PileNum(e), this.BCheck.active = !1, (t = this.BImg.sizeMode == cc.Sprite.SizeMode.TRIMMED ? n.getRect() : n.getOriginalSize()).width > 90 || t.height > 90) {
                    var i = 90 / t.width,
                        o = 90 / t.height;
                    this.INode.scale = i < o ? i : o
                }
            },
            PlayScaleAnimation: function(e) {
                this.obtainSound && e && SunX.sAudio.PlayEffect(this.obtainSound.GetURL()), this.BImg.node.scale = 0, this.BImg.node.runAction(cc.scaleTo(.3, 1, 1).easing(cc.easeBackOut()))
            },
            SelectState: function(e) {
                this._z = this.node.getSiblingIndex(), this.node.setSiblingIndex(1e4), this.BImg.node.stopAllActions(), this.BImg.node.scale = this.BImgScale, this.BCheck.active = !e.IsUse, this.HImg.node.active = !0, this._isSize || (this._isSize = !0, this._updateBNameBgSize()), this._animaCtrl(!0)
            },
            ClearState: function() {
                this.node.setSiblingIndex(this._z), this.BName.node.active = !1, this.BNameBg.node.active = !1, this.BImg.node.stopAllActions(), this.BImg.node.scale = 1, this.BImg.node.angle = 0, this.BCheck.active = !1, this.HImg.node.active = !1, this._animaCtrl(!1)
            },
            PileNum: function(e) {
                if (e.NumPile <= 0 ? (this.BNumber.string = e.Num + "", this._pileCanUse = !0) : (this.BNumber.string = e.Num + "/" + e.NumPile, this._pileCanUse = e.Num >= e.NumPile), e.EffectPile) {
                    var t = e.EffectPile.length,
                        n = e.Num - 1;
                    n >= t && (n = t - 1);
                    var i = e.EffectPile[n],
                        o = SunX.sRes.GetSpriteFrame(i);
                    this.BImg.spriteFrame = o, this.HImg.spriteFrame = o
                }
            },
            _onTouchStart: function() {
                this._control && this._control._TouchStart()
            },
            _onTouchMove: function(e) {
                if (this._isUse && (!this._isPile || this._pileCanUse)) {
                    var t = e.touch,
                        n = t.getStartLocation().sub(t.getLocation());
                    (n.y < -40 || n.y > 40) && (this.selecteSound && this._playSound(this.selecteSound), this._control._MoveItem(this._index, t.getLocation()))
                }
            },
            _onTouchEnded: function(e) {
                this.selecteSound && SunX.sAudio.PlayEffect(this.selecteSound.GetURL()), this._control._ClickItem(this._index)
            },
            _animaCtrl: function(e) {
                for (var t = this.BImg.getComponentsInChildren(cc.Animation), n = t.length, i = 0; i < n; ++i) e ? t[i].play(t[i].defaultClip.name) : t[i].stop(t[i].defaultClip.name)
            },
            _updateBNameBgSize: function() {
                var e = this.BName.node.getContentSize();
                e.height = 30, e.width += 70, this.BNameBg.node.setContentSize(e)
            },
            SetIndex: function(e) {
                this._index = e
            },
            GetIndex: function() {
                return this._index
            },
            GetID: function() {
                return this._id
            }
        }), cc._RF.pop()
    }, {
        RSoundVo: "RSoundVo"
    }],
    BagPanelCtrl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2e8cd2VLUtH1IZVBlGe5iDy", "BagPanelCtrl");
        e("assert");
        var i = e("RExecuteManager").SP,
            o = e("RBagManager").SP,
            s = e("RDBConfigManager").SP,
            a = e("RDragManager"),
            r = cc.Class({
                extends: e("BaseCtrl"),
                ctor: function() {
                    this._cancelMoveItem = !1, this._bagItems = [], this._bagItemsHash = {}, this._RCfgItemCombine = null, this.C_selectBagItemVo = null, i.Register(RExecuteEnum.BagResetItem, this._exeBagResetItem, this), i.Register(RExecuteEnum.BagUpdateItem, this._exeBagUpdateItem, this)
                },
                CreateUI: function() {
                    this._bagItemPrefab = SunX.sRes.GetRes("RoomXUI/BagItem.prefab"), this.m_isUIRelationShip = !1, this.m_isLogicShow = !0, this._RCfgItemCombine = s.GetRCfgMgr(RConfigID.ItemCombine), this._RDragManager = new a, this._RDragManager.Init(), this._super()
                },
                DestroyUI: function() {
                    this._super(), SunX.sEventManager.RemoveAllEvent(this), this._RDragManager.Destroy(), this._RDragManager = null, this._bagItems.length = 0, this._bagItemsHash = {}, this.C_selectBagItemVo = null, this._RCfgItemCombine = null
                },
                created: function() {
                    var e = SunX.sEventManager;
                    e.AddEvent(REvent.Bag_Show, this._onBagShow, this), e.AddEvent(REvent.Bag_Hide, this._onBagHide, this), e.AddEvent(REvent.Bag_AddItem, this._exeBagAddItem, this), e.AddEvent(REvent.Bag_UpdateNumber, this._exeBagUpdateNumber, this), e.AddEvent(REvent.Bag_DeleteItem, this._exeBagDeleteItem, this), e.AddEvent(REvent.Bag_AllItem, this._exeBagAllItem, this), e.AddEvent(REvent.Bag_Clear, this._exeBagClear, this), e.AddEvent(REvent.Tool_Use, this._onToolUse, this), e.AddEvent(REvent.Prop_Change, this._onPropChange, this)
                },
                _createBagItemView: function(e) {
                    var t = cc.instantiate(this._bagItemPrefab).getComponent("BagItemView");
                    this._bagItemsHash[e.ID] = t;
                    var n = this._bagItems.push(t);
                    return t.Init(e), t.SetIndex(n - 1), t.SetControl(this, this.m_viewComponent.direction), t
                },
                _resetBagItemIndex: function() {
                    for (var e = this._bagItems.length, t = 0, n = null, i = 0; i < e; ++i)(n = this._bagItems[i]) && (t != i && (this._bagItems[t] = n), n.SetIndex(t), ++t);
                    this._bagItems.length = t
                },
                _updateAllItem: function() {
                    this.m_viewComponent && i.RExecuteA(RExecuteEnum.BagUpdateItem)
                },
                _deleteItem: function(e) {
                    var t = this._bagItemsHash[e];
                    t && (delete this._bagItemsHash[e], this._bagItems[t.GetIndex()] = null, t.node.destroy(), this._resetBagItemIndex())
                },
                _deleteMultiItem: function(e) {
                    for (var t = e.length, n = null, i = null, o = 0; o < t; ++o) i = e[o], (n = this._bagItemsHash[i]) && (delete this._bagItemsHash[i], this._bagItems[n.GetIndex()] = null, n.node.destroy());
                    this._resetBagItemIndex()
                },
                _clearAllItem: function() {
                    for (var e = this._bagItems.length, t = 0; t < e; ++t) this._bagItems[t].node.destroy();
                    this._bagItems.length = 0, this._bagItemsHash = {}
                },
                _TouchStart: function() {
                    this._cancelMoveItem = !1
                },
                _MoveItem: function(e, t) {
                    if (!this._cancelMoveItem) {
                        var n, i = this._bagItems[e].GetID();
                        n = o.GetConstBagItemVo(i), this.C_selectBagItemVo = n, this._selectBagItemCom = this._bagItemsHash[i], this._selectBagItemCom.node.active = !1, this._RDragManager.CreateDragToolNode(t, n)
                    }
                },
                _ClickItem: function(e) {
                    var t = this._bagItems[e].GetID(),
                        n = o.GetConstBagItemVo(t);
                    n.IsShow && (SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.ShowPopup), SunX.sEventManager.ExecuteEvent(REvent.ShowProp_Load, n))
                },
                _resetItemState: function() {
                    this._cancelMoveItem = !0, this.C_selectBagItemVo && (cc.isValid(this._selectBagItemCom.node, !0) && (this._selectBagItemCom.node.active = !0), this._selectBagItemCom = null, this.C_selectBagItemVo = null)
                },
                _combineItem: function(e) {
                    var t = this._RCfgItemCombine.GetValue(e.CombineItemID);
                    if (t) {
                        for (var n = t.ItemIDs, i = n.length, s = null, a = 0; a < i; ++a) {
                            if (!(s = o.GetConstBagItemVo(n[a]))) return;
                            if (s.IsPile && s.Num < s.NumPile) return
                        }
                        SunX.sEventManager.ExecuteEvent(RGlobalRequest.PropMultiRemove, n.concat());
                        var r = {
                            ID: t.CItemID,
                            Pos: cc.p(),
                            Img: null
                        };
                        SunX.sEventManager.ExecuteEvent(REvent.Prop_Obtain, r)
                    }
                },
                _onBagShow: function(e) {
                    this.m_viewComponent.ShowBag()
                },
                _onBagHide: function(e) {
                    this.m_viewComponent.HideBag()
                },
                _onPropChange: function(e) {
                    var t = o.GetConstBagItemVo(e.data);
                    t && (this._bagItemsHash.hasOwnProperty(t.ID) ? this._exeBagUpdateNumber({
                        data: t
                    }) : this._exeBagAddItem({
                        data: t
                    }))
                },
                _onToolUse: function(e) {},
                _exeBagClear: function() {
                    this.C_selectBagItemVo = null, this._clearAllItem()
                },
                _exeBagAllItem: function() {
                    var e, t = o.GetConstBag();
                    for (var n in this._clearAllItem(), t) e = t[n], this._createBagItemView(e);
                    this._updateAllItem()
                },
                _exeBagAddItem: function(e) {
                    var t = e.data;
                    this._createBagItemView(t).PlayScaleAnimation(this.m_viewComponent.IsOpen()), this._updateAllItem(), t.IsCanCombine && this._combineItem(t)
                },
                _exeBagUpdateNumber: function(e) {
                    var t = e.data;
                    this._bagItemsHash[t.ID].PileNum(t), t.IsCanCombine && this._combineItem(t)
                },
                _exeBagDeleteItem: function(e) {
                    var t = e.data;
                    t instanceof Array ? this._deleteMultiItem(t) : this._deleteItem(t), this._updateAllItem()
                },
                _exeBagResetItem: function() {
                    this._resetItemState()
                },
                _exeBagUpdateItem: function() {
                    this.m_viewComponent && this.m_viewComponent.UpdateContent(this._bagItems)
                }
            });
        t.exports = r, cc._RF.pop()
    }, {
        BaseCtrl: "BaseCtrl",
        RBagManager: "RBagManager",
        RDBConfigManager: "RDBConfigManager",
        RDragManager: "RDragManager",
        RExecuteManager: "RExecuteManager",
        assert: 1
    }],
    BagPanelView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "242cfpoC7BIXI0fYcAQAk2X", "BagPanelView"), cc.Class({
            extends: e("BaseView"),
            properties: {
                contentNode: {
                    default: null,
                    displayName: "Content",
                    type: cc.Node
                },
                bagItemInterval: {
                    default: 10,
                    displayName: "ItemInterval"
                }
            },
            onDestroy: function() {},
            onLoad: function() {
                this._visibleSize = cc.view.getDesignResolutionSize(), this._isOpen = !0
            },
            start: function() {
                this._contentHeight = this.contentNode.getContentSize().height, SunX.sEventManager.ExecuteEvent(RGlobalRequest.BagAllData)
            },
            UpdateContent: function(e) {
                for (var t, n, i = 0, o = 0, s = e.length, a = 0; a < s; ++a) n = (t = e[a].node).getContentSize().width, a > 0 && (i += this.bagItemInterval), i += n, t.x = o + n / 2, o = t.x, o += n / 2 + this.bagItemInterval, t.parent = this.contentNode;
                this.contentNode.setContentSize(i, this._contentHeight), this.contentNode.getComponent(cc.Widget).updateAlignment()
            },
            UpdateLevelTxt: function(e) {},
            IsOpen: function() {
                return this._isOpen
            }
        }), cc._RF.pop()
    }, {
        BaseView: "BaseView"
    }],
    BaseCtrl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5c7e1VSVvhLo705dWFasOZs", "BaseCtrl");
        var i = cc.Class({
            ctor: function() {
                this.m_UIID = arguments[0], this.m_view = null, this.m_viewComponent = null, this.m_isShow = !1, this.m_isLogicShow = !1, this.m_isLoadingRes = !1, this.m_isUIRelationShip = !0
            },
            CreateUI: function() {
                this.loadRes()
            },
            DestroyUI: function() {
                this.m_isLogicShow = !1, this.m_isShow = !1, cc.isValid(this.m_view) && this.m_view.destroy(), this.m_view = null, this.m_viewComponent = null
            },
            Show: function() {
                return this.m_isLogicShow = !0, !!this.m_isLoadingRes || !!this.IsResLoaded() && (this.m_isShow = !0, this.m_viewComponent.Show(), !0)
            },
            Hide: function() {
                this.m_isLogicShow = !1, this.m_isShow = !1, this.m_viewComponent && this.m_viewComponent.Hide()
            },
            IsShow: function() {
                return this.m_isShow || this.m_isLogicShow
            },
            IsLogicShow: function() {
                return this.m_isLogicShow
            },
            IsResLoaded: function() {
                return null != this.m_view
            },
            IsUIRelationShip: function() {
                return this.m_isUIRelationShip
            },
            loadRes: function() {
                this.m_isLoadingRes = !0;
                var e = {};
                e.url = RUIRes[this.m_UIID].path, e.func = this._loadOver.bind(this), SunX.sRes.Load(e)
            },
            created: function() {},
            _loadOver: function(e) {
                this.m_isLoadingRes = !1, this.m_view = cc.instantiate(e), this.m_viewComponent = this.m_view.getComponent("BaseView"), this.m_viewComponent.Init(this.m_UIID), this.created(), this.m_isLogicShow && SunX.sEventManager.ExecuteEvent(REvent.UIShow, this.m_UIID)
            }
        });
        t.exports = i, cc._RF.pop()
    }, {}],
    BaseView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1d90bjpZMZP9Krs+2JDesca", "BaseView"), cc.Class({
            extends: cc.Component,
            properties: {},
            Init: function(e) {
                this.m_UIID = e
            },
            Show: function() {
                if (null == this.node.parent) {
                    this.setUIPos();
                    var e = RUIRes[this.m_UIID],
                        t = {};
                    t.layer = e.parentNode, t.zOrder = e.zOrder, t.node = this.node, SunX.sEventManager.ExecuteEvent(REvent.GameScene_Show, t)
                }
            },
            Hide: function() {
                this.node.parent = null
            },
            ClickCloseBtn: function() {},
            setUIPos: function() {}
        }), cc._RF.pop()
    }, {}],
    BlockInputEvents: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "55885HDzU1BI6kE9829Dx2B", "BlockInputEvents");
        var i = ["touchstart", "touchmove", "touchend", "mousedown", "mousemove", "mouseup", "mouseenter", "mouseleave", "mousewheel"];

        function o(e) {
            e.stopPropagation()
        }
        cc.Class({
            extends: cc.Component,
            onEnable: function() {
                for (var e = 0; e < i.length; e++) this.node.on(i[e], o, this)
            },
            onDisable: function() {
                for (var e = 0; e < i.length; e++) this.node.off(i[e], o, this)
            }
        });
        cc._RF.pop()
    }, {}],
    BookPopupCtrl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3b43eKzISRDrrO+fp8oXBZC", "BookPopupCtrl");
        var i = e("RTipsManager").SP,
            o = cc.Class({
                extends: e("BaseCtrl"),
                ctor: function() {
                    this._curLevel = -1, this._curPage = 0, this._tipsList = null
                },
                DestroyUI: function() {
                    this._super(), SunX.sEventManager.RemoveAllEvent(this), this._curLevel = -1, this._curPage = 0, this._tipsList = null
                },
                created: function() {
                    SunX.sEventManager.AddEvent(REvent.Book_Page, this._onPageEvent, this), SunX.sEventManager.AddEvent(RGlobalResponse.BookTip, this._rpBookTip, this), SunX.sEventManager.ExecuteEvent(RGlobalRequest.BookTip)
                },
                _onPageEvent: function(e) {
                    0 == e.data ? this._curPage -= 1 : this._curPage += 1, this._updatePage()
                },
                _updatePage: function() {
                    var e = this._tipsList[this._curPage],
                        t = {};
                    t.tipTxt = e.TipTxt[i18n.curLang], t.tipImg = e.TipImg, t.nextPage = this._curPage < this._tipsList.length - 1, t.prePage = this._curPage > 0, this.m_viewComponent.UpdateTip(t)
                },
                _rpBookTip: function(e) {
                    var t = e.data;
                    this._curLevel != t && (this._curLevel = t, this._curPage = 0, this._tipsList = i.GetLevelTips(t), this._updatePage())
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        BaseCtrl: "BaseCtrl",
        RTipsManager: "RTipsManager"
    }],
    BookPopupView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4df1bMtHMpIkKBWUhEpG5VC", "BookPopupView"), cc.Class({
            extends: e("BaseView"),
            properties: {
                BookMark: cc.Node,
                TipTxt: cc.Label,
                TipImg: cc.Sprite,
                NextPage: cc.Node,
                PrePage: cc.Node
            },
            HideView: function() {
                this.node.parent = null
            },
            UpdateTip: function(e) {
                this.TipTxt.string = e.tipTxt, this.NextPage.active = e.nextPage, this.PrePage.active = e.prePage;
                var t = SunX.sRes.GetSpriteFrame(e.tipImg);
                t ? this.TipImg.spriteFrame = t : SunX.sRes.Load({
                    url: "Tips/" + e.tipImg,
                    func: function(e) {
                        this.TipImg.spriteFrame = e
                    }.bind(this)
                })
            },
            ClickCloseBtn: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.BookPopup), SunX.sEventManager.ExecuteEvent(REvent.Book_Close)
            },
            ClickShop: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.ShopPanel), SunX.sEventManager.ExecuteEvent(REvent.Book_Close)
            },
            ClickNextPage: function() {
                SunX.sEventManager.ExecuteEvent(REvent.Book_Page, 1)
            },
            ClickPrePage: function() {
                SunX.sEventManager.ExecuteEvent(REvent.Book_Page, 0)
            },
            _onBookMarkTouchEnded: function(e) {}
        }), cc._RF.pop()
    }, {
        BaseView: "BaseView"
    }],
    CGScene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "789a5ACsNVAwof0bbboz4uj", "CGScene");
        e("RGameManager").SP;
        var i = e("RExecuteManager").SP;
        cc.Class({
            extends: cc.Component,
            properties: {
                animates: [cc.Animation]
            },
            onDestroy: function() {
                SunX.DestroyScene("CGScene")
            },
            onLoad: function() {
                this.count = 0, this.animation = this.animates[0]
            },
            start: function() {
                this.registerEvent()
            },
            registerEvent: function() {
                this.animation.node.active = !0, this.animation.play(), this.animation.on("finished", this._onFinished, this)
            },
            _onFinished: function(e) {
                this.count++, this.count < this.animates.length ? (this.animation.off("finished", this._onFinished, this), this.animation.node.active = !1, this.animation = this.animates[this.count], this.registerEvent()) : this.onLoadingBlack()
            },
            onLoadingBlack: function(t) {
                this._RDataManager = e("RDataManager").SP;
                var n = this._RDataManager.m_DataItem;
                n.first ? (n.first = !1, i.RExecuteA(RExecuteEnum.DataSave), cc.director.loadScene("SelectLevel")) : cc.director.loadScene("WelcomeScene")
            }
        }), cc._RF.pop()
    }, {
        RDataManager: "RDataManager",
        RExecuteManager: "RExecuteManager",
        RGameManager: "RGameManager"
    }],
    CameraBtnCtr: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4505fqMYjtL552o0biJw8HP", "CameraBtnCtr"), cc.Class({
            extends: cc.Component,
            properties: {
                curBGindex: 0,
                totalBG: 2,
                btnLeft: cc.Node,
                btnRight: cc.Node,
                width: 640,
                durationTime: .2,
                _durationTime: .2,
                LExeNode: {
                    default: null,
                    displayName: "LExeNode",
                    tooltip: "\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                },
                RExeNode: {
                    default: null,
                    displayName: "RExeNode",
                    tooltip: "\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                }
            },
            onLoad: function() {
                this._updateBtn()
            },
            onEnable: function() {
                this.btnLeft.on(cc.Node.EventType.TOUCH_END, this.onClickPrevBtn, this), this.btnRight.on(cc.Node.EventType.TOUCH_END, this.onClickNextBtn, this)
            },
            onDisable: function() {
                this.btnLeft.off(cc.Node.EventType.TOUCH_END, this.onClickPrevBtn, this), this.btnRight.off(cc.Node.EventType.TOUCH_END, this.onClickNextBtn, this)
            },
            onClickPrevBtn: function(e, t) {
                if (0 != this.curBGindex) {
                    this._hideBtn();
                    var n = parseInt(t);
                    this._durationTime = n > this.durationTime ? n : this.durationTime, this.curBGindex -= 1, this.ExecuteNode(this.LExeNode), this.Execute(-this.width), this.scheduleOnce(this._updateBtn, this._durationTime)
                }
            },
            onClickNextBtn: function(e, t) {
                if (this.curBGindex != this.totalBG - 1) {
                    this._hideBtn();
                    var n = parseInt(t);
                    this._durationTime = n > this.durationTime ? n : this.durationTime, this.curBGindex += 1, this.ExecuteNode(this.RExeNode), this.Execute(this.width), this.scheduleOnce(this._updateBtn, this._durationTime)
                }
            },
            onMoveToPage: function(e, t) {
                var n = parseInt(t);
                n != this.curBGindex && n >= 0 && n < this.totalBG && (this._hideBtn(), this.Execute((n - this.curBGindex) * this.width), this.curBGindex = n, this.scheduleOnce(this._updateBtn, this._durationTime))
            },
            _hideBtn: function() {
                this.btnLeft.active = !1, this.btnRight.active = !1
            },
            _updateBtn: function() {
                this.totalBG >= 2 && (0 == this.curBGindex ? (this.btnLeft.active = !1, this.btnRight.active = !0) : this.curBGindex == this.totalBG - 1 ? (this.btnLeft.active = !0, this.btnRight.active = !1) : (this.btnLeft.active = !0, this.btnRight.active = !0)), this.node.emit("camera_change_index", this.curBGindex)
            },
            ExecuteNode: function(e) {
                if (e)
                    for (var t = e.getComponents("RBaseState"), n = t.length, i = 0; i < n && (t[i].Execute(), !t[i].GetStop()); ++i);
            },
            Execute: function(e) {
                SunX.sEventManager.ExecuteEvent(REvent.CameraMoveBy, {
                    duration: this._durationTime,
                    pos: cc.p(e, 0)
                })
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    CanvasFix: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2287di6a3hIqYnoObB8BMaT", "CanvasFix"), cc.Class({
            extends: cc.Component,
            properties: {
                canvas: cc.Canvas
            },
            onLoad: function() {
                var e = cc.view._frameSize,
                    t = e.height / e.width;
                t > 1.77 ? (this.canvas.fitWidth = !0, this.canvas.fitHeight = !1, this.canvas.designResolution = cc.size(640, 1136)) : t > 1.32 ? (this.canvas.fitWidth = !1, this.canvas.fitHeight = !0, this.canvas.designResolution = cc.size(855, 1136)) : (this.canvas.fitWidth = !0, this.canvas.fitHeight = !0, this.canvas.designResolution = cc.size(855, 1136))
            }
        }), cc._RF.pop()
    }, {}],
    CollectItemView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "458f6/08pZPJ5fdMu4QOA3d", "CollectItemView"), cc.Class({
            extends: cc.Component,
            properties: {
                Img: cc.Sprite,
                lock: cc.Node,
                _unLock: !1,
                _imgName: null
            },
            onEnable: function() {
                this.lock.active = !this._unLock
            },
            Init: function(e) {
                this._imgName = e
            },
            UpdateUI: function(e) {
                if (this._unLock = e, this.lock.active = !this._unLock, e) {
                    var t = SunX.sRes.GetSpriteFrame(this._imgName);
                    t ? this.Img.spriteFrame = t : SunX.sRes.Load({
                        url: "Tujian/" + this._imgName,
                        func: function(e) {
                            this.Img.spriteFrame = e
                        }.bind(this)
                    })
                }
            }
        }), cc._RF.pop()
    }, {}],
    CollectPageItemView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a81a8UQ/05AKJ55oNVR7f2G", "CollectPageItemView"), cc.Class({
            extends: cc.Component,
            properties: {
                itemNode1: cc.Node,
                itemNode2: cc.Node,
                levelLabel1: cc.Label,
                levelLabel2: cc.Label
            }
        }), cc._RF.pop()
    }, {}],
    CollectSceneView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "82da0daSl5OQI8Zm59J1/17", "CollectSceneView");
        var i = e("RDataManager").SP,
            o = e("RDBConfigManager").SP;
        cc.Class({
            extends: cc.Component,
            properties: {
                scrollView: cc.ScrollView,
                content: cc.Node,
                itemPrefab: cc.Prefab
            },
            onLoad: function() {
                this._RCfgcollect = o.GetRCfgMgr(RConfigID.Collect), this._itemMap = {};
                var e, t = this._RCfgcollect.GetHash();
                for (var n in t) {
                    e = t[n];
                    var s = cc.instantiate(this.itemPrefab),
                        a = s.getComponent("CollectItemView");
                    this._itemMap[n] = a, a.Init(e.Img), i.m_DataItem.CollectIsUnlock(n) && a.UpdateUI(!0), s.parent = this.content
                }
            },
            updateData: function() {
                var e;
                for (var t in this._itemMap) e = this._itemMap[t], i.m_DataItem.CollectIsUnlock(t) && e.UpdateUI(!0)
            },
            onEnable: function() {
                this.updateData()
            },
            onBackBtn: function() {
                CollectManager.Instance.HideCollectPandel()
            },
            ScrollToLevelPage: function(e) {}
        }), cc._RF.pop()
    }, {
        RDBConfigManager: "RDBConfigManager",
        RDataManager: "RDataManager"
    }],
    DragToolCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "74bcf5pBH9MjoCIHwEu0U44", "DragToolCom"), cc.Class({
            extends: cc.Component,
            properties: {
                INode: cc.Node,
                img: cc.Sprite,
                Himg: cc.Sprite,
                labelBg: cc.Sprite,
                label: cc.Label,
                ImgScale: 1.1
            },
            onLoad: function() {},
            onEnable: function() {
                this._updateBNameBgSize()
            },
            Init: function(e) {
                var t, n = this._getSpriteRes(e),
                    i = SunX.sRes.GetSpriteFrame(n);
                if (this.img.spriteFrame = i, this.Himg.spriteFrame = i, this.label.string = e.Name[i18n.curLang], this.Himg.node.active = !1, (t = this.img.sizeMode == cc.Sprite.SizeMode.TRIMMED ? i.getRect() : i.getOriginalSize()).width > 90 || t.height > 90) {
                    var o = 90 / t.width,
                        s = 90 / t.height;
                    this.INode.scale = o < s ? o : s
                }
            },
            Hit: function() {
                this.img.node.scale = this.ImgScale, this.Himg.node.active = !0, this._animaCtrl(!0)
            },
            NoHit: function() {
                this.img.node.scale = 1, this.Himg.node.active = !1, this._animaCtrl(!1)
            },
            _animaCtrl: function(e) {
                for (var t = this.img.getComponentsInChildren(cc.Animation), n = t.length, i = 0; i < n; ++i) e ? t[i].play(t[i].defaultClip.name) : t[i].stop(t[i].defaultClip.name)
            },
            _updateBNameBgSize: function() {
                var e = this.label.node.getContentSize();
                e.height = 37, e.width += 70, this.labelBg.node.setContentSize(e)
            },
            _getSpriteRes: function(e) {
                var t;
                if (e.EffectPile) {
                    var n = e.EffectPile.length,
                        i = e.Num - 1;
                    i >= n && (i = n - 1), t = e.EffectPile[i]
                } else t = e.IconID;
                return t
            }
        }), cc._RF.pop()
    }, {}],
    ExitGame: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "32211uJEz9FJa0+FSJBlMDS", "ExitGame"), cc.Class({
            extends: cc.Component,
            start: function() {
                cc.game.addPersistRootNode(this.node), cc.sys.platform == cc.sys.ANDROID && cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function(e) {
                    e.keyCode == cc.macro.KEY.back && SXPluginSDKMgr && SXPluginSDKMgr.ExiteGame()
                }, this)
            }
        }), cc._RF.pop()
    }, {}],
    FlyPropCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "98d43f3KBtLr6121tpIvBCM", "FlyPropCom"), cc.Class({
            extends: cc.Component,
            properties: {
                img: cc.Sprite
            },
            onDestroy: function() {
                SunX.sEventManager.RemoveAllEvent(this)
            },
            onLoad: function() {
                SunX.sEventManager.AddEvent(REvent.Prop_DeleFly, this._onPropDeleFly, this)
            },
            Init: function(e) {
                this._id = e.id, this.img.spriteFrame = e.img;
                var t = cc.bezierTo(e.time1, e.bezierPos),
                    n = cc.delayTime(.3),
                    i = cc.spawn(cc.scaleTo(1, .3), cc.catmullRomTo(1, e.steps)),
                    o = cc.sequence(t, n, i, cc.callFunc(this._flyOver, this));
                this.node.runAction(o)
            },
            _flyOver: function() {
                SunX.sEventManager.ExecuteEvent(REvent.Prop_Change, this._id), this.node.destroy()
            },
            _onPropDeleFly: function(e) {
                this._flyOver()
            }
        }), cc._RF.pop()
    }, {}],
    GAdsAdapter: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2bd24WTb0xPtprhW4Unc061", "GAdsAdapter"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../SXPluginAds/SXAdsManager"),
            o = e("../SXPluginAds/SXAdsUnit"),
            s = e("./GAdsManager"),
            a = e("../SXPluginAds/SXBannerUnit"),
            r = e("../SXPluginAds/SXInterstitialUnit"),
            c = e("../SXPluginAds/SXRewardedvideoUnit"),
            l = function() {
                function e() {}
                return e.prototype.Init = function(e, t, n) {
                    if (void 0 === n && (n = !1), !this.m_Init) {
                        this.m_Init = !0;
                        var o = this.createSXAdsUnit(n);
                        i.SXAdsManager.SP.Init(o, e, t)
                    }
                }, e.prototype.ShowBanner = function(e, t) {
                    this.m_Init && i.SXAdsManager.SP.ShowAds(e, t)
                }, e.prototype.HideBanner = function(e) {
                    this.m_Init && i.SXAdsManager.SP.HideAds(e)
                }, e.prototype.IsShow = function(e) {
                    return !!this.m_Init && i.SXAdsManager.SP.IsShow(e)
                }, e.prototype.ForceUpdatePosition = function(e, t, n) {
                    this.m_Init && i.SXAdsManager.SP.ForceUpdatePosition(e, t, n)
                }, e.prototype.PreLoadInterstitial = function() {}, e.prototype.PreLoadRewardedVideo = function() {}, e.prototype.ShowInterstitial = function() {
                    return this.m_Init ? i.SXAdsManager.SP.ShowAds(s.GAdsManager.InterstitialAdsID) : o.SXAdsCode.Error
                }, e.prototype.ShowRewardedVideo = function(e) {
                    if (!this.m_Init) return o.SXAdsCode.Error;
                    var t = i.SXAdsManager.SP.ShowAds(s.GAdsManager.RewardedvideoAdsID);
                    return t == o.SXAdsCode.OK && (i.SXAdsManager.SP.OnRewardedVideoEvent = e), t
                }, e.prototype.AdsIsPermission = function(e) {
                    return !!this.m_Init && i.SXAdsManager.SP.AdsIsPermission(e)
                }, e.prototype.AdsIsReady = function(e) {
                    return !!this.m_Init && i.SXAdsManager.SP.AdsIsReady(e)
                }, e.prototype.HasRewardedVideo = function() {
                    return !!this.m_Init && i.SXAdsManager.SP.HasAds(s.GAdsManager.RewardedvideoAdsID)
                }, e.prototype.createSXAdsUnit = function(e) {
                    void 0 === e && (e = !1), e && cc.sys.language == cc.sys.LANGUAGE_CHINESE && (s.GAdsManager.BannerAdsID += "-zh", s.GAdsManager.RectAdsID += "-zh", s.GAdsManager.InterstitialAdsID += "-zh", s.GAdsManager.RewardedvideoAdsID += "-zh");
                    var t = new Array;
                    return t.push(this.createBanner()), t.push(this.createRect()), t.push(this.createInterstitial()), t.push(this.createRewardedvideo()), t
                }, e.prototype.createBanner = function() {
                    return new a.SXBannerUnit(s.GAdsManager.BannerAdsID)
                }, e.prototype.createRect = function() {
                    return new a.SXBannerUnit(s.GAdsManager.RectAdsID)
                }, e.prototype.createInterstitial = function() {
                    var e = new r.SXInterstitialUnit(s.GAdsManager.InterstitialAdsID);
                    return e.Init(!1), e
                }, e.prototype.createRewardedvideo = function() {
                    return new c.SXRewardedvideoUnit(s.GAdsManager.RewardedvideoAdsID)
                }, e
            }();
        n.GAdsAdapter = l, cc._RF.pop()
    }, {
        "../SXPluginAds/SXAdsManager": "SXAdsManager",
        "../SXPluginAds/SXAdsUnit": "SXAdsUnit",
        "../SXPluginAds/SXBannerUnit": "SXBannerUnit",
        "../SXPluginAds/SXInterstitialUnit": "SXInterstitialUnit",
        "../SXPluginAds/SXRewardedvideoUnit": "SXRewardedvideoUnit",
        "./GAdsManager": "GAdsManager"
    }],
    GAdsManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e65fe1nhxBCq6dCWg0wErT4", "GAdsManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, o = e("../SXPluginAds/SXAdsUnit"),
            s = function() {
                function e() {
                    cc.director.getScheduler().enableForTarget(this)
                }
                return e.prototype.ShowBanner = function(e, t) {}, e.prototype.HideBanner = function(e) {}, e.prototype.IsShow = function(e) {
                    return !1
                }, e.prototype.ForceUpdatePosition = function(e, t, n) {}, e.prototype.PreLoadInterstitial = function() {}, e.prototype.PreLoadRewardedVideo = function() {}, e.prototype.ShowInterstitial = function() {
                    return o.SXAdsCode.OK
                }, e.prototype.ShowRewardedVideo = function(e) {
                    return this.m_OnRewardedVideoEvent = e, cc.director.getScheduler().schedule(this.rewardedVideo, this, 0, 0, 0, !1), o.SXAdsCode.OK
                }, e.prototype.AdsIsPermission = function(e) {
                    return !0
                }, e.prototype.AdsIsReady = function(e) {
                    return !0
                }, e.prototype.HasRewardedVideo = function() {
                    return !0
                }, e.prototype.rewardedVideo = function(e) {
                    null != this.m_OnRewardedVideoEvent && this.m_OnRewardedVideoEvent(!0), this.m_OnRewardedVideoEvent = null
                }, e
            }();
        (function(e) {
            e[e.Banner = 0] = "Banner", e[e.Rect = 1] = "Rect", e[e.Interstitial = 2] = "Interstitial", e[e.Rewardedvideo = 3] = "Rewardedvideo"
        })(i = n.GAdsIDEnum || (n.GAdsIDEnum = {}));
        var a = function() {
            function e() {}
            return e.Init = function(e) {
                null == e && (e = new s), this.m_AdsAdapter = e
            }, e.ShowBanner = function(e, t) {
                this.m_AdsAdapter && this.m_AdsAdapter.ShowBanner(e, t)
            }, e.HideBanner = function(e) {
                this.m_AdsAdapter && this.m_AdsAdapter.HideBanner(e)
            }, e.IsShow = function(e) {
                return !!this.m_AdsAdapter && this.m_AdsAdapter.IsShow(e)
            }, e.ForceUpdatePosition = function(e, t, n) {
                this.m_AdsAdapter && this.m_AdsAdapter.ForceUpdatePosition(e, t, n)
            }, e.AdsIsPermission = function(e) {
                return !!this.m_AdsAdapter && this.m_AdsAdapter.AdsIsPermission(e)
            }, e.AdsIsReady = function(e) {
                return !!this.m_AdsAdapter && this.m_AdsAdapter.AdsIsReady(e)
            }, e.PreLoadInterstitial = function() {
                this.m_AdsAdapter && this.m_AdsAdapter.PreLoadInterstitial()
            }, e.PreLoadRewardedVideo = function() {
                null != this.m_AdsAdapter && this.m_AdsAdapter.PreLoadRewardedVideo()
            }, e.ShowInterstitial = function() {
                return null != this.m_AdsAdapter ? this.m_AdsAdapter.ShowInterstitial() : 0
            }, e.ShowRewardedVideo = function(e) {
                return null != this.m_AdsAdapter ? this.m_AdsAdapter.ShowRewardedVideo(e) : 0
            }, e.HasRewardedVideo = function() {
                return null != this.m_AdsAdapter && this.m_AdsAdapter.HasRewardedVideo()
            }, e.GetAdsID = function(e) {
                switch (e) {
                    case i.Banner:
                        return this.BannerAdsID;
                    case i.Rect:
                        return this.RectAdsID;
                    case i.Interstitial:
                        return this.InterstitialAdsID;
                    case i.Rewardedvideo:
                        return this.RewardedvideoAdsID
                }
            }, e.BannerAdsID = "banner", e.RectAdsID = "rect", e.InterstitialAdsID = "interstitial", e.RewardedvideoAdsID = "rewardedvideo", e
        }();
        n.GAdsManager = a, cc._RF.pop()
    }, {
        "../SXPluginAds/SXAdsUnit": "SXAdsUnit"
    }],
    GPluginSDKUtil: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "38298LuI5tHp7qgDLZ7rNKL", "GPluginSDKUtil"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./SXPluginSDK/SXPluginSDKMgr"),
            o = e("./SXPluginSDK/Web/SXPluginSDKWeb"),
            s = (e("./SXPluginSDK/IOS/SXPluginSDKIOS"), e("./SXPluginSDK/Android/SXPluginSDKAndroid"), e("./Ads/GAdsAdapter")),
            a = e("./Ads/GAdsManager"),
            r = function() {
                function e() {}
                return e.Init = function() {
                    i.SXPluginSDKMgr.Init(new o.SXPluginSDKWeb)
                }, e.InitAds = function() {
                    if (/2.3.[0-9]/.test(cc.ENGINE_VERSION)) {
                        /* var e = i.SXPluginSDKMgr.ServerAddress + "res/SXADSCfg.txt";
                        cc.loader.load(e, function(e, t) {
                            if (!e) {
                                var n = new s.GAdsAdapter,
                                    i = cc.view.getScaleY();
                                n.Init(t, i, !1), a.GAdsManager.Init(n)
                            }
                        }) */
                    } else if (/2.4.[0-9]/.test(cc.ENGINE_VERSION)) {
                        e = i.SXPluginSDKMgr.ServerAddress + "SXADSCfg";
                        cc.resources.load(e, function(e, t) {
                            if (!e) {
                                var n = new s.GAdsAdapter,
                                    i = cc.view.getScaleY();
                                n.Init(t.text, i, !1), a.GAdsManager.Init(n)
                            }
                        })
                    }
                }, e.InitOtherSDK = function() {
                    if (/2.3.[0-9]/.test(cc.ENGINE_VERSION)) {
                        /* var e = i.SXPluginSDKMgr.ServerAddress + "res/SXOtherSDKCfg.txt";
                        cc.loader.load(e, function(e, t) {
                            e || i.SXPluginSDKMgr.InitOtherSDK(t)
                        }) */
                    } else if (/2.4.[0-9]/.test(cc.ENGINE_VERSION)) {
                        e = i.SXPluginSDKMgr.ServerAddress + "SXOtherSDKCfg";
                        cc.resources.load(e, function(e, t) {
                            e || i.SXPluginSDKMgr.InitOtherSDK(t.text)
                        })
                    }
                }, e.InitAnalysis = function() {
                    if (/2.3.[0-9]/.test(cc.ENGINE_VERSION)) {
                        /* var e = i.SXPluginSDKMgr.ServerAddress + "res/SXAnalyticsCfg.txt";
                        cc.loader.load(e, function(e, t) {
                            e || i.SXPluginSDKMgr.InitAnalysis(t)
                        }) */
                    } else if (/2.4.[0-9]/.test(cc.ENGINE_VERSION)) {
                        e = i.SXPluginSDKMgr.ServerAddress + "SXAnalyticsCfg";
                        cc.resources.load(e, function(e, t) {
                            e || i.SXPluginSDKMgr.InitAnalysis(t.text)
                        })
                    }
                }, e
            }();
        n.GPluginSDKUtil = r, cc._RF.pop()
    }, {
        "./Ads/GAdsAdapter": "GAdsAdapter",
        "./Ads/GAdsManager": "GAdsManager",
        "./SXPluginSDK/Android/SXPluginSDKAndroid": "SXPluginSDKAndroid",
        "./SXPluginSDK/IOS/SXPluginSDKIOS": "SXPluginSDKIOS",
        "./SXPluginSDK/SXPluginSDKMgr": "SXPluginSDKMgr",
        "./SXPluginSDK/Web/SXPluginSDKWeb": "SXPluginSDKWeb"
    }],
    GameOverPanelCtrl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0f336FT+BJFxYYyDudlZkTk", "GameOverPanelCtrl");
        var i = cc.Class({
            extends: e("BaseCtrl"),
            Show: function() {
                return !!this.m_isShow || (this.m_isLogicShow = !0, !!this.m_isLoadingRes || !!this.IsResLoaded() && (this.m_isShow = !0, this.m_viewComponent.Show(), !0))
            },
            SetImg: function(e) {
                this.m_viewComponent.SetImage(e)
            },
            SetAudioUrl: function(e) {
                this.m_viewComponent.SetAudioUrl(e)
            },
            SetTime: function(e) {
                this.m_viewComponent.SetTime(e)
            },
            SetGameWin: function(e) {
                this.m_viewComponent.SetGameWin(e)
            }
        });
        t.exports = i, cc._RF.pop()
    }, {
        BaseCtrl: "BaseCtrl"
    }],
    GameOverPanelView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5bee7StdKRM7bA4BUPhjJPp", "GameOverPanelView");
        var i = e("RDataManager").SP;
        e("RDBConfigManager").SP;
        cc.Class({
            extends: e("BaseView"),
            properties: {
                collectIcon: cc.Sprite,
                ADSNode: cc.Node,
                WinNode: cc.Node,
                LoseNode: cc.Node,
                NextBtn: cc.Node,
                TishiBtn: cc.Node,
                animate: cc.Animation,
                WinImg: cc.Sprite,
                LoseImg: cc.Sprite,
                WinDefaultImg: cc.SpriteFrame,
                LoseDefaultImg: cc.SpriteFrame,
                _delayTime: 0,
                _updateImg: !1,
                _audioUrl: null,
                _isWin: !1
            },
            onLoad: function() {
                this.collectIcon.node.active = !1, this._audioWinUrl = "Sound/UItonguan", this._audioLoseUrl = "Sound/UIshibai", this.animate.play(this.animate.defaultClip.name), this.animate.sample(this.animate.defaultClip.name), this.animate.pause(this.animate.defaultClip.name), SunX.sEventManager.AddEvent(SunX.SEvent.RewardedVideoNoCount, this.noCount, this), AddOff && (this.TishiBtn.active = !1)
            },
            onDestroy: function() {
                SunX.sEventManager.RemoveAllEvent(this)
            },
            _hidePanel: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.GameOverPanel)
            },
            onNextBtnClick: function() {
                this._hidePanel();
                SunX.sEventManager.ExecuteEvent(REvent.ToggleStage, {
                    isLevel: !0,
                    isStage: !1,
                    isSave: !1,
                    isBack: !1
                })
            },
            onOpenCollectPanel: function() {
                var e = i._RCfgLevel.GetValue(i.m_DataItem.curLevel);
                CollectManager.Instance.ShowCollectPandel(e.Order + 1)
            },
            onHomeBtnClick: function() {
                this._hidePanel(), cc.director.loadScene("WelcomeScene")
            },
            onSelectBtnClick: function() {
                this._hidePanel(), cc.director.loadScene("SelectLevel")
            },
            onMoreGame: function() {
                cc.sys.openURL(RGlobalConfig.MoreURL)
            },
            onReplayBtnClick: function() {
                this._hidePanel(), SunX.sEventManager.ExecuteEvent(REvent.ReplayStage, null)
            },
            onVideoBtnClick: function() {
                cc.AdsUtils.ShowRewardedVideo(this._onVideoPlayOver.bind(this))
            },
            _onVideoPlayOver: function(e) {
                e && SunX.sEventManager.ExecuteEvent(SunX.SEvent.RewardedVideoOver)
            },
            SetAudioUrl: function(e) {
                this._audioUrl = e
            },
            SetImage: function(e) {
                this._updateImg = !0, this._isWin ? this.WinImg.spriteFrame = e : this.LoseImg.spriteFrame = e
            },
            SetTime: function(e) {
                this._delayTime = e
            },
            SetGameWin: function(e) {
                this._isWin = e, this.WinNode.active = e, this.LoseNode.active = !e, this.NextBtn.active = e, AddOff || (this.TishiBtn.active = !e)
            },
            Show: function() {
                this._super(), this._delayTime > 0 && (this.animate.play(this.animate.defaultClip.name), this.animate.sample(this.animate.defaultClip.name), this.animate.pause(this.animate.defaultClip.name)), this.scheduleOnce(function() {
                    if (this.animate.play(this.animate.defaultClip.name), this._audioUrl ? SunX.sAudio.PlayEffect(this._audioUrl) : this._isWin ? cc.loader.loadRes(this._audioWinUrl, cc.AudioClip, function(e, t) {
                            SunX.sAudio.PlayEffect(t)
                        }) : cc.loader.loadRes(this._audioLoseUrl, cc.AudioClip, function(e, t) {
                            SunX.sAudio.PlayEffect(t)
                        }), i.m_newCollect) {
                        var e = SunX.sRes.GetSpriteFrame(i.m_newCollect.Img);
                        e ? (this.collectIcon.node.active = !0, this.collectIcon.spriteFrame = e) : SunX.sRes.Load({
                            url: "Tujian/" + i.m_newCollect.Img,
                            func: function(e) {
                                this.collectIcon.node.active = !0, this.collectIcon.spriteFrame = e
                            }.bind(this)
                        }), i.m_newCollect = null
                    }
                }, this._delayTime)
            },
            Hide: function() {
                this.animate.play(this.animate.defaultClip.name), this.animate.sample(this.animate.defaultClip.name), this.animate.pause(this.animate.defaultClip.name), this.node.parent = null, this._delayTime = 0, this._audioUrl = null, this.collectIcon.node.active = !1, this._updateImg && (this._updateImg = !1, this.WinImg.spriteFrame = this.WinDefaultImg, this.LoseImg.spriteFrame = this.LoseDefaultImg)
            }
        }), cc._RF.pop()
    }, {
        BaseView: "BaseView",
        RDBConfigManager: "RDBConfigManager",
        RDataManager: "RDataManager"
    }],
    GameSceneView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "38e1dJ1YhhBGKEBwDOglPxT", "GameSceneView"), cc.Class({
            extends: cc.Component,
            properties: {
                StageLayer: cc.Node,
                StageBanTouch: cc.Node,
                PopLayer: cc.Node,
                ShowPropLayer: cc.Node,
                UILayer: cc.Node,
                ToolLayer: cc.Node,
                DialogLayer: cc.Node,
                PopupLayer: cc.Node,
                StagePopupLayer: cc.Node,
                BlackPanel: cc.Node,
                txPopPrefab: {
                    default: null,
                    displayName: "TXPopPrefab",
                    type: cc.Prefab
                },
                popTXScale: {
                    default: .29,
                    displayName: "PopTXScale"
                },
                camera: cc.Camera
            },
            onDestroy: function() {
                SunX.sEventManager.RemoveAllEvent(this), e("RGameManager").SP.Clear(), SunX.DestroyScene("GameScene")
            },
            onLoad: function() {
                this.m_txArray = [], this.StageBanTouch.active = !1, this.stagePos = this.StageLayer.getPosition(), SunX.sEventManager.AddEvent(REvent.GameScene_Show, this._onGameSceneShow, this), SunX.sEventManager.AddEvent(REvent.Scene_TXOpen, this._onSceneTXOpen, this), SunX.sEventManager.AddEvent(REvent.Scene_TXClose, this._onSceneTXClose, this), SunX.sEventManager.AddEvent(REvent.ToggleStage, this._onToggleStage, this), SunX.sEventManager.AddEvent(REvent.ReplayStage, this._onToggleStage, this), SunX.sEventManager.AddEvent(REvent.StageTouchControl, this._onStageTouchControl, this), SunX.sEventManager.AddEvent(REvent.CameraMoveBy, this._onMoveCamera, this), cc.sys.platform === cc.sys.IPAD && (this.BlackPanel.active = !1)
            },
            start: function() {
                e("RExecuteManager").SP;
                cc.sys.localStorage.getItem("show-help") || (cc.sys.localStorage.setItem("show-help", !0), SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.HelpPanel))
            },
            ReplayGame: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.ShowPopup), this._clearAllTX()
            },
            _onStageTouchControl: function(e) {
                var t = e.data;
                this.StageBanTouch.active = !t
            },
            _onMoveCamera: function(e) {
                var t = e.data;
                this.camera.node.runAction(cc.moveBy(t.duration, t.pos))
            },
            _onGameSceneShow: function(e) {
                var t = e.data,
                    n = this[t.layer];
                n && n.addChild(t.node, t.zOrder)
            },
            _onSceneTXOpen: function(e) {
                var t = cc.instantiate(this.txPopPrefab);
                t.parent = this.PopLayer;
                var n = e.data,
                    i = this.PopLayer.convertToNodeSpaceAR(n.position);
                n.position = i;
                var o = t.getComponent("TXPopBgCom");
                this.m_txArray.push(o) > 1 ? o.Open(n, 175) : (o.Open(n, 175), this._zoomStage(i))
            },
            _onSceneTXClose: function(e) {
                if (1 == this.PopLayer.getChildrenCount()) {
                    var t = cc.spawn(cc.scaleTo(.3, 1), cc.moveTo(.3, this.stagePos));
                    this.StageLayer.runAction(t)
                }
            },
            _zoomStage: function(e) {
                var t = this.StageLayer.getContentSize(),
                    n = cc.v2(e.x / (.5 * t.width), e.y / (.5 * t.height)),
                    i = cc.spawn(cc.scaleTo(.3, 1 + this.popTXScale), cc.moveBy(.3, cc.v2(t.width * -n.x * .5 * this.popTXScale, t.height * -n.y * .5 * this.popTXScale)));
                this.StageLayer.runAction(i)
            },
            _onToggleStage: function(e) {
                this.camera.node.position = cc.p(0, 0), this.StageBanTouch.active = !1;
                var t = this.PopLayer.children.length;
                if (this.StageLayer.stopAllActions(), this.StageLayer.setScale(1, 1), this.StageLayer.setPosition(this.stagePos), t > 0)
                    for (var n = 0; n < t; ++n) this.PopLayer.children[n].destroy();
                for (var i = this.StagePopupLayer.getChildrenCount(), o = 0; o < i; o++) this.StagePopupLayer.children[o].destroy()
            },
            _clearAllTX: function() {
                for (var e = this.m_txArray.length; --e >= 0;) this.m_txArray[e].node.destroy();
                this.m_txArray.length = 0
            }
        }), cc._RF.pop()
    }, {
        RExecuteManager: "RExecuteManager",
        RGameManager: "RGameManager"
    }],
    GameUIPanelCtrl: [function(e, t, n) {
        "use strict";
        var i;

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        cc._RF.push(t, "940edMj+blDfpXQRSTndHuL", "GameUIPanelCtrl");
        e("RExecuteManager").SP;
        var s = cc.Class((o(i = {
            extends: e("BaseCtrl"),
            CreateUI: function() {
                this.m_isUIRelationShip = !1, this.m_isLogicShow = !0, this._super()
            },
            DestroyUI: function() {
                this._super(), SunX.sEventManager.RemoveAllEvent(this)
            },
            Hide: function() {},
            created: function() {
                SunX.sEventManager.AddEvent(REvent.Book_Open, this._onBookOpen, this), SunX.sEventManager.AddEvent(REvent.Book_Close, this._onBookClose, this), SunX.sEventManager.AddEvent(RGlobalResponse.OpenBook, this._rpOpenBook, this), SunX.sEventManager.AddEvent(RGlobalResponse.UpdateLevelNum, this._rpUpdateLevelNum, this), SunX.sEventManager.ExecuteEvent(RGlobalRequest.UpdateLevelNum, null)
            }
        }, "DestroyUI", function() {
            this._super(), SunX.sEventManager.RemoveAllEvent(this)
        }), o(i, "_rpUpdateLevelNum", function(e) {
            this.m_viewComponent.UpdateLevelTxt(e.data)
        }), o(i, "_onBookOpen", function(e) {
            SunX.sEventManager.ExecuteEvent(RGlobalRequest.OpenBook)
        }), o(i, "_onBookClose", function(e) {
            this.m_viewComponent.CloseBook()
        }), o(i, "_rpOpenBook", function(e) {
            SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.ShopPanel)
        }), i));
        t.exports = s, cc._RF.pop()
    }, {
        BaseCtrl: "BaseCtrl",
        RExecuteManager: "RExecuteManager"
    }],
    GameUIPanelView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8fa83Mc14ZNlqymuqQobXKz", "GameUIPanelView"), cc.Class({
            extends: e("BaseView"),
            properties: {
                video: cc.Node,
                tipBtn: cc.Node,
                bookSound: {
                    default: null,
                    displayName: "BookSound",
                    type: e("RSoundVo")
                },
                levelTxt: cc.Label
            },
            onLoad: function() {
                SunX.sEventManager.AddEvent(SunX.SEvent.RewardedVideoNoCount, this.noCount, this), AddOff && this.noCount()
            },
            noCount: function() {
                this.tipBtn.active = !1
            },
            onDestroy: function() {
                SunX.sEventManager.RemoveAllEvent(this)
            },
            OpenBook: function() {
                this.bookSound && SunX.sAudio.PlayEffect(this.bookSound.GetURL())
            },
            CloseBook: function() {},
            onTipBtnClick: function() {
                cc.AdsUtils.ShowRewardedVideo(this._onVideoPlayOver.bind(this))
            },
            _onVideoPlayOver: function(e) {
                e && SunX.sEventManager.ExecuteEvent(SunX.SEvent.RewardedVideoOver)
            },
            ClickSetUpBtn: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.SetUpPanel)
            },
            UpdateLevelTxt: function(e) {
                this.levelTxt.string = e + ""
            }
        }), cc._RF.pop()
    }, {
        BaseView: "BaseView",
        RSoundVo: "RSoundVo"
    }],
    GetItemPanelCtrl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b07edYBGAVEnKYBWx4uHeuF", "GetItemPanelCtrl");
        var i = cc.Class({
            extends: e("BaseCtrl"),
            created: function() {
                SunX.sEventManager.AddEvent(REvent.GetItem_Show, this._onShowGetItem, this)
            },
            DestroyUI: function() {
                this._super(), SunX.sEventManager.RemoveAllEvent(this)
            },
            _onShowGetItem: function(e) {
                this.m_viewComponent.SetItemImg(e.data), this.Show()
            }
        });
        t.exports = i, cc._RF.pop()
    }, {
        BaseCtrl: "BaseCtrl"
    }],
    GetItemPanelView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8f472pV9YVHnYlWeW87uPzo", "GetItemPanelView"), cc.Class({
            extends: e("BaseView"),
            properties: {
                img: cc.Sprite,
                animate: cc.Animation,
                OKBtn: cc.Node
            },
            SetItemImg: function(e) {
                var t, n = SunX.sRes.GetSpriteFrame(e);
                if (n && (this.img.spriteFrame = n, this.img.node.scale = 1, (t = this.img.sizeMode == cc.Sprite.SizeMode.TRIMMED ? n.getRect() : n.getOriginalSize()).width < 120 && t.height < 120)) {
                    var i = 120 / t.width,
                        o = 120 / t.height;
                    this.img.node.scale = i > o ? i : o
                }
            },
            Show: function() {
                this.animate.play("GetItemShow"), this._super()
            },
            hideAnimate: function() {
                this.animate.play("GetItemHide"), this.animate.on("finished", this.Hide, this)
            },
            Hide: function() {
                this.animate.off("finished", this.Hide, this), this._super()
            }
        }), cc._RF.pop()
    }, {
        BaseView: "BaseView"
    }],
    HelpPanelCtrl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "14206D9449JcoX55tT0/mtJ", "HelpPanelCtrl");
        var i = cc.Class({
            extends: e("BaseCtrl")
        });
        t.exports = i, cc._RF.pop()
    }, {
        BaseCtrl: "BaseCtrl"
    }],
    HelpPanelView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5ef15xy/gREBpWNAt2/t4g3", "HelpPanelView"), cc.Class({
            extends: e("BaseView"),
            properties: {
                animate: cc.Animation
            },
            Show: function() {
                this.animate.play("HelpAnima"), this._super()
            },
            ClickCloseBtn: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.HelpPanel)
            }
        }), cc._RF.pop()
    }, {
        BaseView: "BaseView"
    }],
    HuaRongGame: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5a92c4BnuJKvpYd9Fx0U21q", "HuaRongGame"), cc.Class({
            extends: e("RGame"),
            properties: {
                Width: {
                    default: 0,
                    tooltip: "\u5355\u4f4d\u5bbd\u5ea6"
                },
                Height: {
                    default: 0,
                    tooltip: "\u5355\u4f4d\u9ad8\u5ea6"
                },
                Col: {
                    default: 0,
                    tooltip: "\u5217"
                },
                Row: {
                    default: 0,
                    tooltip: "\u884c"
                },
                Exit: {
                    default: new cc.Vec2,
                    tooltip: "boos\u7684\u51fa\u53e3\u5750\u6807(col, row)"
                },
                RootNode: {
                    default: null,
                    tooltip: "Node\u4f4d\u7f6e\u4e3a\u8d77\u70b9\u4f4d\u7f6e\uff0c\u4e14\u4e3a\u6240\u6709item\u7684\u7236\u8282\u70b9",
                    type: cc.Node
                },
                Items: {
                    default: [],
                    type: e("HuaRongItem")
                }
            },
            onLoad: function() {
                for (var e in this.mSeleNode = null, this.mMoveOnce = !0, this.finish = !1, this.updateMapData(), this.Items) {
                    var t = this.Items[e],
                        n = t.curPos;
                    t.node.setAnchorPoint(cc.p(0, 0)), t.node.setPosition(this.Width * n.x, this.Height * n.y), t.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this), t.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this), t.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCanel, this), t.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this)
                }
            },
            _onTouchStart: function(e) {
                this.mMoveOnce = !1, this.mSeleNode = e.target.getComponent("HuaRongItem")
            },
            _onTouchCanel: function(e) {
                this.mSeleNode = null
            },
            _onTouchEnd: function(e) {
                this.mSeleNode = null
            },
            _onTouchMove: function(e) {
                if (!(this.finish || this.mSeleNode && this.mSeleNode.node.getNumberOfRunningActions() > 0 || this.mMoveOnce) && this.mSeleNode) {
                    var t, n, i = e.touch,
                        o = i.getLocation().sub(i.getStartLocation()).mag(),
                        s = i.getStartLocation(),
                        a = i.getLocation(),
                        r = new cc.Vec2(a.x - s.x, a.y - s.y);
                    if (o >= 50) {
                        var c, l, u = Math.abs(r.x) > Math.abs(r.y);
                        if (u ? (l = r.x > 0, r.x > 0 ? (t = new cc.Vec2(this.Width, 0), n = new cc.Vec2(1, 0)) : (t = new cc.Vec2(-this.Width, 0), n = new cc.Vec2(-1, 0))) : (c = r.y > 0, r.y > 0 ? (t = new cc.Vec2(0, this.Height), n = new cc.Vec2(0, 1)) : (t = new cc.Vec2(0, -this.Height), n = new cc.Vec2(0, -1))), this.isCanMove(u, u ? l : c)) {
                            this.node.emit("HuaRongItemMove");
                            var d = this.mSeleNode.curPos.x + n.x,
                                h = this.mSeleNode.curPos.y + n.y;
                            this.mSeleNode.curPos.x = d, this.mSeleNode.curPos.y = h;
                            var p = {};
                            p.isBoos = this.mSeleNode.isBoos, p.x = d, p.y = h, this.mSeleNode.node.runAction(cc.sequence(cc.moveBy(.1, t), cc.callFunc(this.moveEndCallBack, this, p))), this.updateMapData()
                        }
                    }
                }
            },
            isCanMove: function(e, t) {
                this.mMoveOnce = !0;
                var n = !1;
                if (!this.mSeleNode) return !1;
                var i = this.mSeleNode.mWidth,
                    o = this.mSeleNode.mHeight,
                    s = this.mSeleNode.curPos.x,
                    a = this.mSeleNode.curPos.y,
                    r = 0,
                    c = 0;
                if (e) {
                    if (this.mSeleNode.onlyVer) return !1;
                    if (t) {
                        if ((r = s + i) >= this.Col) return !1;
                        for (var l = a; l < a + o; l++)
                            if (1 == this.mMapState[r][l]) return !1;
                        n = !0
                    } else {
                        if (s <= 0) return !1;
                        r = s - 1;
                        for (l = a; l < a + o; l++)
                            if (1 == this.mMapState[r][l]) return !1;
                        n = !0
                    }
                } else {
                    if (this.mSeleNode.onlyHor) return !1;
                    if (t) {
                        if ((c = a + o) >= this.Row) return !1;
                        for (l = s; l < s + i; l++)
                            if (1 == this.mMapState[l][c]) return !1;
                        n = !0
                    } else {
                        if (a <= 0) return !1;
                        c = a - 1;
                        for (l = s; l < s + i; l++)
                            if (1 == this.mMapState[l][c]) return !1;
                        n = !0
                    }
                }
                return n
            },
            moveEndCallBack: function(e, t) {
                t.isBoos && this.Exit.x === t.x && this.Exit.y === t.y && (this.finish = !0, this.gameOver())
            },
            updateMapData: function() {
                this.mMapState = new Array(this.Col);
                for (var e = 0; e < this.Col; e++) this.mMapState[e] = new Array(this.Row), this.mMapState[e].fill(0);
                for (var t in this.Items)
                    for (var n = this.Items[t], i = n.curPos, o = n.mWidth, s = n.mHeight, a = i.x; a < i.x + o; a++)
                        for (var r = i.y; r < i.y + s; r++) this.mMapState[a][r] = 1
            }
        }), cc._RF.pop()
    }, {
        HuaRongItem: "HuaRongItem",
        RGame: "RGame"
    }],
    HuaRongItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "06f0a5mxPNIQpfS0eaBoCwu", "HuaRongItem"), cc.Class({
            extends: cc.Component,
            properties: {
                curPos: {
                    default: new cc.Vec2,
                    tooltip: "\u521d\u59cb\u4f4d\u7f6e"
                },
                mWidth: {
                    default: 1,
                    range: [1, 100],
                    tooltip: "\u6a2a\u5411\u65b9\u5757\u6570\u91cf"
                },
                mHeight: {
                    default: 1,
                    range: [1, 100],
                    tooltip: "\u7eb5\u5411\u65b9\u5757\u6570\u91cf"
                },
                isBoos: {
                    default: !1,
                    displayName: "isBoos"
                },
                onlyHor: {
                    default: !1,
                    tooltip: "\u53ea\u80fd\u6c34\u5e73\u79fb\u52a8, OnlyHor\u548cOnlyVer\u540c\u65f6\u52fe\u9009\u5c31\u4ee3\u8868\u4e0d\u80fd\u79fb\u52a8"
                },
                onlyVer: {
                    default: !1,
                    tooltip: "\u53ea\u80fd\u5782\u76f4\u79fb\u52a8, OnlyHor\u548cOnlyVer\u540c\u65f6\u52fe\u9009\u5c31\u4ee3\u8868\u4e0d\u80fd\u79fb\u52a8"
                }
            },
            onLoad: function() {},
            getItemWidth: function() {
                return this.mWidth
            },
            getItemHeight: function() {
                return this.mHeight
            },
            getCurPos: function() {
                return this.curPos
            },
            setCurPos: function(e, t) {
                this.curPos.x = e, this.curPos.y = t
            }
        }), cc._RF.pop()
    }, {}],
    IAPCommand: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c47e4d1zI9Mc7pBgEilyMWr", "IAPCommand"), t.exports = {
            Init: function() {
                GameIAP.GetInstance();
                var e = {};
                e.products = RGlobalConfig.Products.concat(), e.nonConsums = RGlobalConfig.NonProducts.concat(), e.iapPayment = GameIAPEntry.Create(this._onPayment, this), e.iapRestoreFinish = GameIAPEntry.Create(this._onRestoreFinish, this), SunX.sEventManager.ExecuteEvent(GameIAP.Init_IAP, e)
            },
            _onPayment: function(e) {
                var t = this._getIndex(e);
                0 == t ? SunX.sEventManager.ExecuteEvent(RGlobalRequest.MoneyBuy, {
                    Tag: RGlobalTag.BuyAllTip
                }) : 1 == t ? SunX.sEventManager.ExecuteEvent(RGlobalRequest.MoneyBuy, {
                    Tag: RGlobalTag.BuyADS
                }) : console.log("No ProductID")
            },
            _getIndex: function(e) {
                for (var t = RGlobalConfig.Products.length, n = 0; n < t; ++n)
                    if (RGlobalConfig.Products[n] == e) return n;
                return -1
            },
            _onRestoreFinish: function() {
                console.log("Product is RestoreFinish")
            }
        }, cc._RF.pop()
    }, {}],
    IBagMgr: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6d909b5p8ZA1ob3Mb2HKlJJ", "IBagMgr");
        var i = cc.Class({
                name: "mode.IBagMgr",
                init: function(e) {
                    this._bagMgr = e
                },
                PropObtain: function(e) {
                    var t = this._bagMgr._RCfgItem.GetValue(e.ID);
                    t.Sound && cc.loader.loadRes(t.Sound, cc.AudioClip, function(e, t) {
                        SunX.sAudio.PlayEffect(t)
                    })
                },
                AddProp: function(e) {},
                AddNumber: function(e, t) {}
            }),
            o = cc.Class({
                name: "mode.BagAMgr",
                extends: i,
                statics: {
                    Create: function(e) {
                        var t = new o;
                        return t.init(e), t
                    }
                },
                ctor: function() {
                    this._pendingBagItem = {}
                },
                PropObtain: function(e) {
                    this._super(e);
                    var t = {};
                    t.ID = e.ID, t.Pos = cc.p(e.Pos.x, e.Pos.y), t.Img = e.Img, this._pendingBagItem[t.ID] = t, SunX.sEventManager.ExecuteEvent(RGlobalRequest.PropObtain, e.ID)
                },
                AddProp: function(e) {
                    var t = this._pendingBagItem[e],
                        n = this._bagMgr._RCfgItem.GetValue(e);
                    n = n.CloneVo(), this._bagMgr._bags[e] = n, t ? (delete this._pendingBagItem[e], this._bagMgr._flyProp(t)) : SunX.sEventManager.ExecuteEvent(REvent.Bag_AddItem, n)
                },
                AddNumber: function(e, t) {
                    var n = this._pendingBagItem[e];
                    n && (delete this._pendingBagItem[e], this._bagMgr._flyProp(n)), (n = this._bagMgr._bags[e]) && (n.Num = t, SunX.sEventManager.ExecuteEvent(REvent.Bag_UpdateNumber, n))
                }
            }),
            s = cc.Class({
                name: "mode.BagBMgr",
                extends: i,
                statics: {
                    Create: function(e) {
                        var t = new s;
                        return t.init(e), t
                    }
                },
                ctor: function() {},
                PropObtain: function(e) {
                    this._super(e), SunX.sEventManager.ExecuteEvent(RGlobalRequest.PropObtain, e.ID)
                },
                AddProp: function(e) {
                    var t = this._bagMgr._RCfgItem.GetValue(e);
                    t = t.CloneVo(), this._bagMgr._bags[e] = t, SunX.sEventManager.ExecuteEvent(REvent.Bag_AddItem, t)
                },
                AddNumber: function(e, t) {
                    var n = this._bagMgr._bags[e];
                    n && (n.Num = t, SunX.sEventManager.ExecuteEvent(REvent.Bag_UpdateNumber, n))
                }
            });
        t.exports = {
            BagAMgr: o,
            BagBMgr: s
        }, cc._RF.pop()
    }, {}],
    IDataMgr: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "02e526qcElIZaXb+nlr2clm", "IDataMgr");
        var i = cc.Class({
                name: "mode.IDataMgr",
                Init: function(t) {
                    this._DataMgr = t, this.RExecuteManager = e("RExecuteManager").SP;
                    var n = e("RDBConfigManager").SP;
                    this._RCfgLevel = n.GetRCfgMgr(RConfigID.Level), SunX.sEventManager.AddEvent(SunX.SEvent.RewardedVideoOver, this.rewardedVideoTip, this)
                },
                DataSave: function(e, t) {},
                ChangeStageLevel: function(e, t, n) {
                    return !1
                },
                ChangeLevel: function(e, t) {
                    return !1
                },
                BookTip: function(e) {},
                OpenBook: function(e, t) {},
                UseTip: function() {},
                rewardedVideoTip: function(e) {}
            }),
            o = cc.Class({
                name: "mode.DataAMgr",
                extends: i,
                statics: {
                    Create: function(e) {
                        var t = new o;
                        return t.Init(e), t
                    }
                },
                DataSave: function(e, t) {
                    var n = JSON.stringify(t.WriteValue());
                    SunX.sUserData.SaveUserData(e, n)
                },
                ChangeStageLevel: function(e, t, n) {
                    return !(!n || e.curLevel == t.ID) && (e.curLevel = level, !0)
                },
                ChangeLevel: function(e, t) {
                    return e.curLevel != t.ID && (e.curLevel = level, !0)
                },
                BookTip: function(e) {
                    SunX.sEventManager.ExecuteEvent(RGlobalResponse.BookTip, e.tipLevel)
                },
                OpenBook: function(e, t) {
                    var n = {};
                    n.openBook = t.tips[e.tipLevel - 1], n.hasTip = t.tipNumber > 0, SunX.sEventManager.ExecuteEvent(RGlobalResponse.OpenBook, n)
                },
                UseTip: function(e, t) {
                    var n = !1;
                    t.tipNumber > 0 && (n = !0, t.tipNumber -= 1, t.tips[e.tipLevel - 1] = !0, this.RExecuteManager.RExecuteA(RExecuteEnum.UserInfoSave), SunX.sEventManager.ExecuteEvent(RGlobalResponse.BookTip, e.tipLevel), SunX.sEventManager.ExecuteEvent(RGlobalResponse.BookTipNum, t.tipNumber), SunX.sEventManager.ExecuteEvent(RGlobalResponse.BookTipUnlock, !0)), SunX.sEventManager.ExecuteEvent(RGlobalResponse.UseTip, n)
                }
            }),
            s = cc.Class({
                name: "mode.DataBMgr",
                extends: i,
                statics: {
                    Create: function(e) {
                        var t = new s;
                        return t.Init(e), t
                    }
                },
                Init: function(e) {
                    this._super(e), SunX.sEventManager.AddEvent(REvent.Clear_Data, this._onClearData, this)
                },
                DataSave: function(e, t) {
                    var n = {};
                    n.uuid = t.uuid, n.first = t.first, n.music = t.music, n.sound = t.sound, n.curLevel = 0, n.tipLevel = 0, n.states = {}, n.bags = {}, n.condition = {}, n.guide = 1, n.gameIsOver = !1, n.levels = t.levels, n.passLevels = t.passLevels, n.collects = t.collects;
                    var i = JSON.stringify(n);
                    SunX.sUserData.Write(e, i)
                },
                rewardedVideoTip: function(e) {
                    var t = this._DataMgr.m_DataItem,
                        n = this._DataMgr.m_UserInfo,
                        i = this._RCfgLevel.GetValue(t.curLevel);
                    if (n.textTips[i.Order]) n.tips[i.Order] = !0, SunX.sEventManager.ExecuteEvent(RGlobalResponse.BookTip, i.AnswerID), SunX.sEventManager.ExecuteEvent(RGlobalResponse.BookTipUnlock, !0), SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.BookPopup);
                    else {
                        n.textTips[i.Order] = !0;
                        var o = {
                            textTip: n.textTips[i.Order],
                            tip: n.tips[i.Order],
                            level: i.AnswerID
                        };
                        SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.ShopPanel), SunX.sEventManager.ExecuteEvent(RGlobalResponse.ShopPanelUpdate, o)
                    }
                    this.RExecuteManager.RExecuteA(RExecuteEnum.UserInfoSave)
                },
                ChangeStageLevel: function(e, t, n) {
                    return this.ChangeLevel(e, t)
                },
                ChangeLevel: function(e, t) {
                    return null != t.NextID && (e.curLevel = t.ID), !1
                },
                BookTip: function(e) {
                    var t = this._RCfgLevel.GetValue(e.curLevel);
                    t && SunX.sEventManager.ExecuteEvent(RGlobalResponse.BookTip, t.AnswerID)
                },
                OpenBook: function(e, t) {
                    var n = this._RCfgLevel.GetValue(e.curLevel),
                        i = {};
                    i.openBook = t.tips[n.Order], i.hasTip = t.tipNumber > 0, SunX.sEventManager.ExecuteEvent(RGlobalResponse.OpenBook, i)
                },
                UseTip: function(e, t) {
                    var n = !1;
                    if (t.tipNumber > 0) {
                        n = !0, t.tipNumber -= 1;
                        var i = this._RCfgLevel.GetValue(e.curLevel);
                        t.tips[i.Order] = !0, this.RExecuteManager.RExecuteA(RExecuteEnum.UserInfoSave), SunX.sEventManager.ExecuteEvent(RGlobalResponse.BookTip, i.AnswerID), SunX.sEventManager.ExecuteEvent(RGlobalResponse.BookTipNum, t.tipNumber), SunX.sEventManager.ExecuteEvent(RGlobalResponse.BookTipUnlock, !0)
                    }
                    SunX.sEventManager.ExecuteEvent(RGlobalResponse.UseTip, n)
                },
                _onClearData: function(e) {
                    var t = this._DataMgr.m_DataItem;
                    t.states = {}, t.bags = {}, t.condition = {};
                    var n = {
                        tag: RGlobalTag.BagClear
                    };
                    SunX.sEventManager.ExecuteEvent(RGlobalResponse.BagUpdateProp, n)
                }
            });
        t.exports = {
            DataAMgr: o,
            DataBMgr: s
        }, cc._RF.pop()
    }, {
        RDBConfigManager: "RDBConfigManager",
        RExecuteManager: "RExecuteManager"
    }],
    IGAdsAdapter: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "255a7df0etHjrTCPlqD16E+", "IGAdsAdapter"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), cc._RF.pop()
    }, {}],
    ISXADSListener: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "77624rUwRRH/oF+F2o8ME6I", "ISXADSListener"), Object.defineProperty(n, "__esModule", {
            value: !0
        }), cc._RF.pop()
    }, {}],
    LanguageData: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
        var i = e("polyglot.min"),
            o = null;

        function s(e) {
            return window.i18n.languages[e]
        }

        function a(e) {
            e && (o ? o.replace(e) : o = new i({
                phrases: e,
                allowMissing: !0
            }))
        }
        window.i18n || (window.i18n = {
            languages: {},
            curLang: ""
        }), t.exports = {
            init: function(e) {
                if (e !== window.i18n.curLang) {
                    var t = s(e) || {};
                    window.i18n.curLang = e, a(t), this.inst = o
                }
            },
            t: function(e, t) {
                if (o) return o.t(e, t)
            },
            inst: o,
            updateSceneRenderers: function() {
                for (var e = cc.director.getScene().children, t = [], n = 0; n < e.length; ++n) {
                    var i = e[n].getComponentsInChildren("LocalizedLabel");
                    Array.prototype.push.apply(t, i)
                }
                for (var o = 0; o < t.length; ++o) {
                    var s = t[o];
                    s.node.active && s.updateLabel()
                }
                for (var a = [], r = 0; r < e.length; ++r) {
                    var c = e[r].getComponentsInChildren("LocalizedSprite");
                    Array.prototype.push.apply(a, c)
                }
                for (var l = 0; l < a.length; ++l) {
                    var u = a[l];
                    u.node.active && u.updateSprite(window.i18n.curLang)
                }
            }
        }, cc._RF.pop()
    }, {
        "polyglot.min": "polyglot.min"
    }],
    LaunchApp: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c38ddSTPfJNPYnxLCAAP3uw", "LaunchApp");
        var i = e("LanguageData"),
            o = e("RDBConfigManager"),
            s = e("RUIRelationShipManager"),
            a = e("RTipsManager"),
            r = e("RUIManager"),
            c = e("RGameManager"),
            l = e("RDataManager"),
            u = e("RExecuteManager"),
            d = e("RBagManager"),
            h = e("RModeManager");
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this._launchInit()
            },
            start: function() {
                this._loadRes()
            },
            getPredLoadRes: function() {
                return []
            },
            initOther: function() {},
            initComplete: function() {},
            _loadRes: function() {
                SunX.sEventManager.AddEvent(SunX.SEvent.RES_LOAD_OVER, this._loadOver, this);
                var e = SunX.sRes.GetResDir("PreLoad");
                e.push("Config/InitConfig.json"), e.push("Config/ItemConfig.json"), e.push("Config/LevelConfig.json"), e.push("Config/UIRelationShip.json"), e.push("Config/BookTips.json"), e.push("Config/CollectConfig.json"), e.push("Config/ItemCombine.json"), e.push("Config/TextTips.json"), e.push("RoomXUI/BagItem.prefab"), e.push("RoomXUI/BagPanel.prefab"), e.push("RoomXUI/GameUIPanel.prefab"), e.push("RoomXUI/TouchShow.prefab"), e.push("RoomXUI/ShowPopup.prefab"), e.push("RoomXUI/DragTool.prefab"), e.push("RoomXUI/TipWarnPanel.prefab"), e.push("RoomXUI/HelpPanel.prefab");
                var t = this.getPredLoadRes();
                t.length > 0 && Array.prototype.push.apply(e, t), SunX.sRes.Load(e)
            },
            _loadOver: function(e) {
                SunX.sEventManager.RemoveAllEvent(this), this._globalData(), this._settingInit(), this._mgrInit(), this._otherData(), this.initComplete()
            },
            _launchInit: function() {
                i.init(cc.sys.language, "en")
            },
            _globalData: function() {
                var e = SunX.sRes.GetRes("Config/InitConfig.json").json;
                e = e.GlobalConfig, RGlobalConfig.TipNumber = e.TipNumber, RGlobalConfig.LevelNumber = e.LevelNumber, RGlobalConfig.NextURL = e.NextURL, RGlobalConfig.Comment_ID = e.Comment_ID, RGlobalConfig.PackageName = e.PackageName, RGlobalConfig.Products = e.Products, RGlobalConfig.NonProducts = e.NonProducts, RGlobalConfig.Email_Theme = e.Email_Theme, RGlobalConfig.Email_Address = e.Email_Address
            },
            _settingInit: function() {
                h.Init(), o.SP.Init(), s.SP.Init(), a.SP.Init(), u.SP.Init(), d.SP.Init(), l.SP.Init()
            },
            _mgrInit: function() {
                r.SP.Init(), c.SP.Init()
            },
            _otherData: function() {
                l.SP.Start(), this.initOther()
            }
        }), cc._RF.pop()
    }, {
        LanguageData: "LanguageData",
        RBagManager: "RBagManager",
        RDBConfigManager: "RDBConfigManager",
        RDataManager: "RDataManager",
        RExecuteManager: "RExecuteManager",
        RGameManager: "RGameManager",
        RModeManager: "RModeManager",
        RTipsManager: "RTipsManager",
        RUIManager: "RUIManager",
        RUIRelationShipManager: "RUIRelationShipManager"
    }],
    LevelItemView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "6b596Dk9FxIb77jjCNtsmRu", "LevelItemView");
        e("RGameManager").SP;
        cc.Class({
            extends: cc.Component,
            properties: {
                LockNode: cc.Node,
                Img: {
                    default: null,
                    type: cc.Sprite
                },
                Tag: 0
            },
            InitData: function(e) {
                this._btnCom = this.getComponent(cc.Button), this.Tag = e.Tag, this.Img.spriteFrame = SunX.sRes.GetSpriteFrame(e.Img), e.Lock ? this.UnLock() : this.Lock()
            },
            Lock: function() {
                this.LockNode.active = !0, this._btnCom.interactable = !1
            },
            UnLock: function() {
                this.LockNode.active = !1, this._btnCom.interactable = !0
            },
            onEnterLevel: function() {
                SunX.sEventManager.ExecuteEvent(REvent.Select_Level, this.Tag)
            }
        }), cc._RF.pop()
    }, {
        RGameManager: "RGameManager"
    }],
    LevelPageItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4a450+2thpALa516zEafitL", "LevelPageItem"), cc.Class({
            extends: cc.Component,
            properties: {
                LevelItems: {
                    default: [],
                    type: e("LevelItemView")
                }
            },
            InitData: function(e, t, n) {
                this._TotaleItem = this.LevelItems.length, this._Index = e;
                for (var i, o, s, a = {
                        Img: null,
                        Lock: !0
                    }, r = 0; r < this._TotaleItem; ++r) i = this.LevelItems[r], o = t[s = 4 * this._Index + r], a.Img = o.Img, a.Tag = s, a.Lock = n[s], i.InitData(a)
            }
        }), cc._RF.pop()
    }, {
        LevelItemView: "LevelItemView"
    }],
    LocalizedLabel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
        var i = e("LanguageData");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                menu: "i18n/LocalizedLabel"
            },
            properties: {
                dataID: {
                    get: function() {
                        return this._dataID
                    },
                    set: function(e) {
                        this._dataID !== e && (this._dataID = e, this.updateLabel())
                    }
                },
                _dataID: ""
            },
            onLoad: function() {
                i.inst || i.init(), this.fetchRender()
            },
            fetchRender: function() {
                var e = this.getComponent(cc.Label);
                if (e) return this.label = e, void this.updateLabel()
            },
            updateLabel: function() {
                this.label ? i.t(this.dataID) && (this.label.string = i.t(this.dataID)) : cc.error("Failed to update localized label, label component is invalid!")
            }
        }), cc._RF.pop()
    }, {
        LanguageData: "LanguageData"
    }],
    LocalizedNode: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "936d1q+rp5NFLpm2z9lcCBp", "LocalizedNode");
        var i = e("NodeSet");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                inspector: "packages://i18n/inspector/localized-node.js",
                menu: "i18n/LocalizedNode"
            },
            properties: {
                nodeSet: {
                    default: [],
                    type: i
                }
            },
            onLoad: function() {
                this.updateNode(window.i18n.curLang)
            },
            updateNode: function(e) {
                if (0 != this.nodeSet.length) {
                    for (var t = !1, n = 0; n < this.nodeSet.length; ++n) this.nodeSet[n].language === e ? (this.nodeSet[n].node.active = !0, t = !0) : this.nodeSet[n].node.active = !1;
                    t || (this.nodeSet[0].node.active = !0)
                } else cc.error("Failed to update localized node, nodeSet is empty!")
            }
        }), cc._RF.pop()
    }, {
        NodeSet: "NodeSet"
    }],
    LocalizedSprite: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
        var i = e("SpriteFrameSet");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                inspector: "packages://i18n/inspector/localized-sprite.js",
                menu: "i18n/LocalizedSprite"
            },
            properties: {
                spriteFrameSet: {
                    default: [],
                    type: i
                }
            },
            onLoad: function() {
                this.fetchRender()
            },
            fetchRender: function() {
                var e = this.getComponent(cc.Sprite);
                if (e) return this.sprite = e, void this.updateSprite(window.i18n.curLang)
            },
            getSpriteFrameByLang: function(e) {
                for (var t = 0; t < this.spriteFrameSet.length; ++t)
                    if (this.spriteFrameSet[t].language === e) return this.spriteFrameSet[t].spriteFrame
            },
            updateSprite: function(e) {
                if (this.sprite) {
                    var t = this.getSpriteFrameByLang(e);
                    !t && this.spriteFrameSet[0] && (t = this.spriteFrameSet[0].spriteFrame), this.sprite.spriteFrame = t
                } else cc.error("Failed to update localized sprite, sprite component is invalid!")
            }
        }), cc._RF.pop()
    }, {
        SpriteFrameSet: "SpriteFrameSet"
    }],
    M4399H5AdsAdapter: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ece342Xbo9OH71bsMOT/l/j", "M4399H5AdsAdapter"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {
                var e = this;
                this.canPlayVideo = !0, window.hasOwnProperty("h5api") && window.h5api.canPlayAd(function(t) {
                    console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", t.canPlayAd, "\u5269\u4f59\u6b21\u6570", t.remain), t.remain < 1 && (AddOff = !0, e.canPlayVideo = !1, SunX.sEventManager.ExecuteEvent(SunX.SEvent.RewardedVideoNoCount))
                })
            }
            return e.prototype.AdsIsPermission = function(e) {
                return !0
            }, e.prototype.AdsIsReady = function(e) {
                return !0
            }, e.prototype.ForceUpdatePosition = function(e, t, n) {}, e.prototype.HasRewardedVideo = function() {
                return !1
            }, e.prototype.HideBanner = function(e) {}, e.prototype.IsShow = function(e) {
                return !1
            }, e.prototype.PreLoadInterstitial = function() {}, e.prototype.PreLoadRewardedVideo = function() {}, e.prototype.ShowBanner = function(e, t) {}, e.prototype.ShowInterstitial = function() {
                return 0
            }, e.prototype.ShowRewardedVideo = function(e) {
                var t = this;
                return window.hasOwnProperty("h5api") && window.h5api.canPlayAd(function(n) {
                    console.log("\u662f\u5426\u53ef\u64ad\u653e\u5e7f\u544a", n.canPlayAd, "\u5269\u4f59\u6b21\u6570", n.remain), n.remain <= 1 && (AddOff = !0, t.canPlayVideo = !1, SunX.sEventManager.ExecuteEvent(SunX.SEvent.RewardedVideoNoCount)), n.canPlayAd && window.h5api.playAd(function(t) {
                        console.log("\u4ee3\u7801:" + t.code + ",\u6d88\u606f:" + t.message), 1e4 === t.code ? console.log("\u5f00\u59cb\u64ad\u653e") : 10001 === t.code ? (console.log("\u64ad\u653e\u7ed3\u675f"), e && e(!0)) : (console.log("\u5e7f\u544a\u5f02\u5e38"), e && e(!1))
                    })
                }), 0
            }, e
        }();
        n.M4399H5AdsAdapter = i, cc._RF.pop()
    }, {}],
    MQueueAnswerDisplay: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ecaceI1SkFBwKX/oQSK05lE", "MQueueAnswerDisplay"), cc.Class({
            extends: cc.Component,
            editor: !1,
            properties: {
                rMechanism: {
                    default: null,
                    displayName: "RMechanism",
                    type: e("RMechanism")
                },
                display: {
                    default: null,
                    displayName: "RMechanismDisplay",
                    tooltip: "\u663e\u793a\u5bf9\u8c61",
                    type: e("RMechanismDisplay")
                }
            },
            onLoad: function() {
                this._count = 0, this.node.on("RMechanismOther", this._onHanld, this)
            },
            _onHanld: function(e) {
                var t = this.rMechanism.RMAnswers;
                if (t.answersType == RMAnswersTypeEnum.Queue) {
                    var n = !0,
                        i = t._data.length;
                    0 != i && (t._data[i - 1] != parseInt(t.answers[i - 1]) && (n = !1), n ? this.display.UpdateDisplay(1) : (this.display.ResetDisplay(), t.ResetAnswers()))
                }
            }
        }), cc._RF.pop()
    }, {
        RMechanism: "RMechanism",
        RMechanismDisplay: "RMechanismDisplay"
    }],
    MSelectDisplay: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b7294JfF3ZMk4SvPWfsaHpr", "MSelectDisplay"), cc.Class({
            extends: cc.Component,
            editor: !1,
            properties: {
                selectSprite: {
                    default: null,
                    displayName: "SelectSpirte",
                    tooltip: "\u9009\u4e2d\u72b6\u6001\u7684\u7cbe\u7075",
                    type: cc.Sprite
                }
            },
            onLoad: function() {
                this.selectSprite.node.active = !1, this.node.on("RMechanismSelect", this._select, this)
            },
            _select: function(e) {
                this.selectSprite.node.active = e
            }
        }), cc._RF.pop()
    }, {}],
    MTextDisplay: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5c893x7WTVCnJweJfMHhnrc", "MTextDisplay"), cc.Class({
            extends: cc.Component,
            editor: !1,
            properties: {
                Label: cc.Label,
                IndexToString: {
                    default: [],
                    type: cc.String,
                    tooltip: "\u5c06\u7b54\u6848\u4e3aindex\u8f6c\u6362\u4e3a\u8bbe\u5b9a\u7684string"
                }
            },
            onLoad: function() {
                this.node.on("RMechanismOther", this._onHanld, this), this._rMAnswers = this.getComponent("RMAnswers"), this.Label.string = ""
            },
            ClearText: function() {
                this.Label.string = ""
            },
            _onHanld: function(e) {
                for (var t = this._rMAnswers.GetAnswers(), n = t.length, i = "", o = 0; o < n; o++) this.IndexToString[t[o]] ? i += this.IndexToString[t[o]] : i += t[o];
                this.Label.string = i
            }
        }), cc._RF.pop()
    }, {}],
    MToggleReset: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2af1fyi+7pPBKaSolyEyNh1", "MToggleReset"), cc.Class({
            extends: cc.Component,
            editor: !1,
            properties: {
                isCorrectToReset: {
                    default: !0,
                    displayName: "isCorrectToReset",
                    tooltip: "\u673a\u5173\u6210\u529f\u4e4b\u540e\u662f\u5426\u9700\u8981\u6062\u590d\u539f\u6765\u72b6\u6001"
                },
                rMechanism: {
                    default: null,
                    displayName: "RMechanism",
                    type: e("RMechanism")
                }
            },
            onLoad: function() {
                this._count = 0, this.node.on("RMechanismOther", this._onHanld, this), this.node.on("RAnswerCorrect", this._onAnswerCorrect, this), this.node.on("RAnswerError", this._onAnswerError, this)
            },
            _onHanld: function(e) {
                e && e.UnActive(), this._count += 1, this._count >= this.rMechanism.RMAnswers.limitedNum && this.scheduleOnce(this._delayFunc, 1)
            },
            _delayFunc: function(e) {
                for (var t, n = this.rMechanism.nodes.length, i = 0; i < n; ++i)(t = this.rMechanism.nodes[i]).Active(), t.ResetDisplay();
                this._count = 0, this.rMechanism.ResetAnswers()
            },
            _onAnswerCorrect: function(e) {
                this.isCorrectToReset || this.unschedule(this._delayFunc)
            },
            _onAnswerError: function() {}
        }), cc._RF.pop()
    }, {
        RMechanism: "RMechanism"
    }],
    MoreGame: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c94f0oed4RPRL+JAEjUzG2+", "MoreGame"), cc.Class({
            extends: cc.Component,
            properties: {
                iosID: {
                    default: [],
                    tooltip: "ios AppID",
                    type: cc.String
                },
                androidName: {
                    default: [],
                    tooltip: "android packageName",
                    type: cc.String
                }
            },
            onLoad: function() {},
            ClickCommentBtn: function() {
                cc.sys.openURL(RGlobalConfig.GetCommentURL())
            },
            ClickGameBtn: function(e, t) {
                var n = parseInt(t);
                cc.sys.platform == cc.sys.ANDROID ? cc.sys.openURL("https://play.google.com/store/apps/details?id=" + this.androidName[n]) : cc.sys.openURL("https://itunes.apple.com/app/id" + this.iosID[n])
            },
            ClickMoreBtn: function() {
                cc.sys.openURL(RGlobalConfig.MoreURL)
            }
        }), cc._RF.pop()
    }, {}],
    NextPageItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "66cc4CxDBhJpqMfoiePIN2K", "NextPageItem"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {},
            onNextGame: function() {
                cc.sys.openURL(RGlobalConfig.NextGameURL)
            }
        }), cc._RF.pop()
    }, {}],
    NodeSet: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fd9a9Nl1KVIKZuDZXinShRg", "NodeSet");
        var i = cc.Class({
            name: "NodeSet",
            properties: {
                language: "",
                node: cc.Node
            }
        });
        t.exports = i, cc._RF.pop()
    }, {}],
    NodeTouchEndHandl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0dc285kZFZFvbcxSIOIHxzZ", "NodeTouchEndHandl"), cc.Class({
            extends: cc.Component,
            properties: {
                clickEvents: {
                    default: [],
                    type: cc.Component.EventHandler
                }
            },
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_END, this._onClick, this)
            },
            _onClick: function(e) {
                cc.Component.EventHandler.emitEvents(this.clickEvents, e)
            }
        }), cc._RF.pop()
    }, {}],
    PolygonNode: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4566dFmoj5DpL/6BkvYyhoI", "PolygonNode"), cc.Class({
            extends: cc.Component,
            properties: {
                points: {
                    default: [],
                    type: cc.Vec2
                }
            },
            onLoad: function() {
                this.node._hitTest = this.hitTest.bind(this)
            },
            hitTest: function(e) {
                e = cc.Camera.findCamera(this.node).getScreenToWorldPoint(e);
                var t = this.node,
                    n = t.convertToNodeSpaceAR(e);
                if (n.x < -t.width / 2 || n.x > t.width / 2 || n.y > t.height / 2 || n.y < -t.height / 2) return !1;
                var i, o, s = !1,
                    a = this.points.length,
                    r = n.x,
                    c = n.y,
                    l = this.points;
                for (i = 0, o = a - 1; i < a; o = i++) l[i].y > c != l[o].y > c && r < (l[o].x - l[i].x) * (c - l[i].y) / (l[o].y - l[i].y) + l[i].x && (s = !s);
                return s
            }
        }), cc._RF.pop()
    }, {}],
    RAEnterLevel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a026c+bvHNLtr3enK58SoUw", "RAEnterLevel"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                isStage: {
                    default: !1,
                    displayName: "IsStage",
                    tooltip: "\u662f\u5426\u9700\u8981\u5224\u65ad\u8d2d\u4e70\u5173\u5361"
                },
                arrowNode: {
                    default: null,
                    displayName: "ArrowNode",
                    tooltip: "\u7bad\u5934\u8282\u70b9",
                    type: cc.Node
                },
                enterLevel: {
                    default: "",
                    displayName: "EnterLevel",
                    tooltip: "\u5173\u5361\u7f16\u53f7"
                },
                stateName: {
                    default: "",
                    displayName: "StateName",
                    tooltip: "\u72b6\u6001\u540d\u79f0"
                }
            },
            onEnable: function() {
                this.arrowNode.active = !0, SunX.sEventManager.AddEvent(REvent.Arrow_Hide, this._onArrowHide, this)
            },
            onDisable: function() {
                this.arrowNode.active = !1
            },
            Execute: function() {
                var e = {
                    nodeName: this.targetNode.name,
                    stateName: this.stateName
                };
                SunX.sEventManager.ExecuteEvent(REvent.GItem_ToggleState, e), e = {
                    Level: this.enterLevel,
                    isStage: this.isStage,
                    isSave: !0,
                    isBack: !1
                }, SunX.sEventManager.ExecuteEvent(REvent.ToggleStage, e)
            },
            _onArrowHide: function(e) {
                var t = {
                    nodeName: this.targetNode.name,
                    stateName: this.stateName
                };
                SunX.sEventManager.ExecuteEvent(REvent.GItem_ToggleState, t)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RActionMove: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "60b2bd36GZN7KlH0v9L2Yye", "RActionMove"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                isMoveBy: !0,
                pos: cc.Vec2,
                duration: .5,
                _isMoving: !1,
                moveEndExe: e("RBaseState")
            },
            Execute: function() {
                if (!this._isMoving && this.targetNode) {
                    this._isMoving = !0;
                    var e = this,
                        t = this.isMoveBy ? cc.moveBy(this.duration, this.pos) : cc.moveTo(this.duration, this.pos);
                    this.targetNode && this.targetNode.runAction(cc.sequence(t, cc.callFunc(function() {
                        e._isMoving = !1, e.ExecuteNode(e.moveEndExe)
                    })))
                }
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RActionSprite: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0fd2cejgyJB0agTEByI3HV5", "RActionSprite"), cc.Class({
            extends: cc.Component,
            editor: !1,
            properties: {
                img: {
                    default: [],
                    type: cc.SpriteFrame
                },
                sample: 2,
                repeat: !0
            },
            start: function() {
                var e = cc.AnimationClip.createWithSpriteFrames(this.img, this.sample);
                e.name = this.node.name, this.repeat && (e.wrapMode = cc.WrapMode.Loop);
                var t = this.node.addComponent(cc.Animation);
                t.addClip(e), t.play(e.name)
            }
        }), cc._RF.pop()
    }, {}],
    RAddCondition: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9c2benmVAZOSpOpQ7Kqs1a7", "RAddCondition"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                condition: {
                    default: [],
                    displayName: "Conditions",
                    tooltip: "\u5224\u65ad\u6761\u4ef6",
                    type: cc.String
                }
            },
            Execute: function() {
                0 != this.condition.length && SunX.sEventManager.ExecuteEvent(RGlobalRequest.AddCondition, this.condition)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RAddLocalStorageItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "87233FfXixMaYaXhDcE21Gx", "RAddLocalStorageItem"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                itemKey: {
                    default: [],
                    displayName: "itemKeys",
                    tooltip: "\u5224\u65ad\u6761\u4ef6",
                    type: cc.String
                }
            },
            Execute: function() {
                var e = this.itemKey.length;
                if (0 != e)
                    for (var t = 0; t < e; t++) cc.sys.localStorage.setItem(this.itemKey[t], !0)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RAddNodeToStagePopup: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e83aceEz+pK9p3qDG5ruHQt", "RAddNodeToStagePopup"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                prefab: cc.Prefab
            },
            onLoad: function() {},
            Execute: function() {
                var e = cc.instantiate(this.prefab);
                if (e) {
                    var t = {
                        layer: "StagePopupLayer",
                        zOrder: 0
                    };
                    t.node = e, SunX.sEventManager.ExecuteEvent(REvent.GameScene_Show, t)
                }
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RBagItemChange: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "88b09xA/N5Nca8iMpsRgvDh", "RBagItemChange"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                CurPropID: {
                    default: 0,
                    displayName: "CurPropID",
                    tooltip: "\u9053\u5177ID"
                },
                NewPropID: {
                    default: 0,
                    displayName: "NewPropID",
                    tooltip: "\u9053\u5177ID"
                }
            },
            Execute: function() {
                SunX.sEventManager.ExecuteEvent(RGlobalRequest.PropChange, {
                    OldID: this.CurPropID,
                    NewID: this.NewPropID
                })
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RBagManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "98268lAJVRMDYefIdFq8c0M", "RBagManager");
        var i = e("RDBConfigManager").SP,
            o = (e("RExecuteManager").SP, e("RModeManager")),
            s = (e("IBagMgr"), cc.Class({
                ctor: function() {
                    this._RCfgItem = null, this._GameSceneView = null, this._flyPropPrefab = null, this._bags = {}, this._IBagMgr = null, this._bagEndPos = null, this._bagLen = 0, this._bagSetpArray = null, this._isSetp = !1
                },
                Clear: function() {
                    this._GameSceneView = null, this._flyPropPrefab = null, this._bags = {}, this._bagSetpArray.length = 0, this._IBagMgr = null
                },
                Init: function() {
                    this._IBagMgr = o.GetMode("RBagManager", this), this._RCfgItem = i.GetRCfgMgr(RConfigID.Item);
                    var e = SunX.sEventManager;
                    e.AddEvent(REvent.GameScene_Created, this._onGameSceneCreated, this), e.AddEvent(REvent.Prop_Obtain, this._onPropObtain, this), e.AddEvent(RGlobalResponse.BagAllData, this._rpBagAllData, this), e.AddEvent(RGlobalResponse.BagUpdateProp, this._rpBagUpdateProp, this)
                },
                GetConstBagItemVo: function(e) {
                    return this._bags[e]
                },
                GetConstBag: function() {
                    return this._bags
                },
                _onPropObtain: function(e) {
                    var t = this._RCfgItem.GetValue(e.data.ID);
                    SunX.sEventManager.ExecuteEvent(REvent.GetItem_Show, t.IconID), this._IBagMgr.PropObtain(e.data)
                },
                _flyProp: function(e) {
                    var t = this._RCfgItem.GetValue(e.ID),
                        n = this._GameSceneView.ToolLayer.convertToNodeSpaceAR(e.Pos);
                    this._isSetp || this._calBezierPos();
                    var i = cc.instantiate(this._flyPropPrefab);
                    i.position = n;
                    var o = {};
                    o.id = t.ID, o.img = e.Img, o.time1 = .003 * cc.pDistance(n, cc.Vec2.ZERO), o.time2 = .003 * this._bagLen, o.bezierPos = [cc.p(n.x, 0), cc.Vec2.ZERO, cc.Vec2.ZERO], o.endPos = this._bagEndPos, o.steps = this._bagSetpArray, i.getComponent("FlyPropCom").Init(o), SunX.sEventManager.ExecuteEvent(REvent.GameScene_Show, {
                        layer: "ToolLayer",
                        node: i
                    })
                },
                _calBezierPos: function() {
                    this._isSetp = !0;
                    var t = this._GameSceneView.ToolLayer,
                        n = e("RUIManager").SP.GetUICtrl(RUIID.MBagNode).GetBag();
                    this._bagEndPos = n.parent.convertToWorldSpaceAR(n.position), this._bagEndPos = t.convertToNodeSpaceAR(this._bagEndPos), this._bagLen = cc.pDistance(this._bagEndPos, cc.Vec2.ZERO);
                    var i, o = SunX.sBezier.Init(cc.Vec2.ZERO, cc.p(this._bagEndPos.x, 0), cc.p(this._bagEndPos.x, this._bagEndPos.y), 10);
                    this._bagSetpArray = new Array(o);
                    for (var s = 0; s < o; ++s) i = SunX.sBezier.GetAnchorPoint(s), this._bagSetpArray[s] = cc.p(i.x, i.y)
                },
                _bagDeleteProp: function(e) {
                    delete this._bags[e], SunX.sEventManager.ExecuteEvent(REvent.Bag_DeleteItem, e)
                },
                _bagSubNumber: function(e, t) {
                    var n = this._bags[e];
                    n && (n.Num = t, SunX.sEventManager.ExecuteEvent(REvent.Bag_UpdateNumber, n))
                },
                _bagMultiRemove: function(e) {
                    for (var t = e.length, n = 0; n < t; ++n) delete this._bags[e[n]];
                    SunX.sEventManager.ExecuteEvent(REvent.Bag_DeleteItem, e)
                },
                _bagClear: function() {
                    this._bags = {}, SunX.sEventManager.ExecuteEvent(REvent.Bag_Clear)
                },
                _onGameSceneCreated: function(e) {
                    this._GameSceneView = e.data, this._flyPropPrefab = SunX.sRes.GetRes("RoomXUI/FlyProp.prefab")
                },
                _rpBagAllData: function(e) {
                    var t, n = e.data;
                    for (var i in this._bags = {}, n)(t = (t = this._RCfgItem.GetValue(i)).CloneVo()).Num = n[i], this._bags[i] = t;
                    SunX.sEventManager.ExecuteEvent(REvent.Bag_AllItem)
                },
                _rpBagUpdateProp: function(e) {
                    var t = e.data;
                    switch (t.tag) {
                        case RGlobalTag.BagAddProp:
                            this._IBagMgr.AddProp(t.ID);
                            break;
                        case RGlobalTag.BagAddNumber:
                            this._IBagMgr.AddNumber(t.ID, t.Num);
                            break;
                        case RGlobalTag.BagDeleteProp:
                            this._bagDeleteProp(t.ID);
                            break;
                        case RGlobalTag.BagSubNumber:
                            this._bagSubNumber(t.ID, t.Num);
                            break;
                        case RGlobalTag.BagMultiRemove:
                            this._bagMultiRemove(t.IDs);
                            break;
                        case RGlobalTag.BagClear:
                            this._bagClear()
                    }
                }
            }));
        t.exports = {
            SP: new s
        }, cc._RF.pop()
    }, {
        IBagMgr: "IBagMgr",
        RDBConfigManager: "RDBConfigManager",
        RExecuteManager: "RExecuteManager",
        RModeManager: "RModeManager",
        RUIManager: "RUIManager"
    }],
    RBanMechanism: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "168dbPmOUZH5brCXLYKiw8e", "RBanMechanism"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            onDisable: function() {
                this._ban(!1)
            },
            Execute: function() {
                this._ban(!0)
            },
            _ban: function(e) {
                for (var t = this.targetNode.getComponentsInChildren("RMechanismItem"), n = t.length, i = 0; i < n; ++i) e ? t[i].UnActive() : t[i].Active()
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RBaseStateData: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "43d0ftbDSVMNrdG9OfplCXJ", "RBaseStateData"), cc.Class({
            extends: cc.Component,
            properties: {}
        }), cc._RF.pop()
    }, {}],
    RBaseState: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "939ffaC6gtA2Y/5FWoreCZr", "RBaseState"), cc.Class({
            extends: cc.Component,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node
                }
            },
            Execute: function() {},
            GetStop: function() {
                return !1
            },
            ExecuteNode: function(e) {
                if (e)
                    for (var t = e.getComponents("RBaseState"), n = t.length, i = 0; i < n && (t[i].Execute(), !t[i].GetStop()); ++i);
            }
        }), cc._RF.pop()
    }, {}],
    RButton: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "34e4ef5+ehDJ7HouP6CBeX/", "RButton"), cc.Class({
            extends: cc.Button,
            editor: !1,
            properties: {
                useNormal: {
                    default: !0,
                    displayName: "UseNormal",
                    notify: function(e) {
                        0
                    },
                    animatable: !1
                },
                isSwallowTouches: {
                    default: !0,
                    displayName: "isSwallowTouches"
                }
            },
            onEnable: function() {
                this.normalSprite && this.normalSprite.ensureLoadTexture(), this.hoverSprite && this.hoverSprite.ensureLoadTexture(), this.pressedSprite && this.pressedSprite.ensureLoadTexture(), this.disabledSprite && this.disabledSprite.ensureLoadTexture(), this._registerNodeEvent(), this.isSwallowTouches || this.node._touchListener.setSwallowTouches(!1)
            },
            _updateSpriteTransition: function(e) {
                var t = this._getStateSprite(e);
                this.useNormal ? this._sprite && t && (this._sprite.spriteFrame = t) : this._sprite && (this._sprite.spriteFrame = 0 == e ? null : t)
            }
        }), cc._RF.pop()
    }, {}],
    RCCAnimatePlaySpeedChange: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9ba77vE4BxLHqkh2fCIxrxi", "RCCAnimatePlaySpeedChange"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                Animation: {
                    default: null,
                    displayName: "Animation",
                    tooltip: "\u6302\u6709\u52a8\u753b\u7ec4\u4ef6\u7684\u8282\u70b9",
                    type: cc.Animation
                },
                AnimationName: {
                    default: "",
                    displayName: "AnimationName",
                    tooltip: "\u64ad\u653e\u52a8\u753b\u7684\u540d\u79f0"
                },
                isAddSpeed: {
                    default: !0,
                    displayName: "IsAddSpeed",
                    tooltip: "true\u4e3a\u52a0\u901f\uff0c false\u4e3a\u51cf\u901f"
                },
                changeValue: {
                    default: .1,
                    displayName: "ChangeValue",
                    tooltip: "\u6bcf\u6b21\u6539\u53d8\u901f\u5ea6\u7684\u589e\u91cf"
                },
                maxSpeed: {
                    default: 5,
                    displayName: "MaxSpeed",
                    tooltip: "\u52a8\u753b\u6700\u5927\u64ad\u653e\u901f\u5ea6"
                },
                minSpeed: {
                    default: .1,
                    displayName: "minSpeed",
                    tooltip: "\u52a8\u753b\u6700\u5c0f\u64ad\u653e\u901f\u5ea6"
                }
            },
            Execute: function() {
                var e, t = this.Animation.getAnimationState(this.AnimationName);
                t && (this.isAddSpeed ? (e = t.speed + this.changeValue, t.speed = e > this.maxSpeed ? this.maxSpeed : e) : (e = t.speed - this.changeValue, t.speed = e < this.minSpeed ? this.minSpeed : e))
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RCCAnimatePlaySpeed: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9ad0e6Z4rtFv5uFUcKtgnue", "RCCAnimatePlaySpeed"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                Animation: {
                    default: null,
                    displayName: "Animation",
                    tooltip: "\u6302\u6709\u52a8\u753b\u7ec4\u4ef6\u7684\u8282\u70b9",
                    type: cc.Animation
                },
                AnimationName: {
                    default: "",
                    displayName: "AnimationName",
                    tooltip: "\u64ad\u653e\u52a8\u753b\u7684\u540d\u79f0"
                },
                speed: 1
            },
            onEnable: function() {
                var e = this.Animation.getAnimationState(this.AnimationName);
                e && (e.speed = this.speed)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RCCAnimate: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "17cb3xdnF9HBaGqYFUOza5q", "RCCAnimate");
        var i = cc.Enum({
            Play: 0,
            StopEnd: 1,
            StopStart: 2,
            ClickPlayOne: 3,
            GotoStop: 4,
            Pause: 5,
            PlayAdd: 6
        });
        cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                Animation: {
                    default: null,
                    displayName: "Animation",
                    tooltip: "\u6302\u6709\u52a8\u753b\u7ec4\u4ef6\u7684\u8282\u70b9",
                    type: cc.Animation
                },
                AnimationName: {
                    default: "",
                    displayName: "AnimationName",
                    tooltip: "\u64ad\u653e\u52a8\u753b\u7684\u540d\u79f0"
                },
                AnimaType: {
                    default: i.Play,
                    displayName: "AnimaType",
                    tooltip: "\u52a8\u753b\u7c7b\u578b",
                    type: i
                },
                frame: {
                    default: 0,
                    displayName: "Frame",
                    tooltip: "\u5e27",
                    type: cc.Integer
                },
                exeNode: {
                    default: null,
                    displayName: "ExeNode",
                    tooltip: "\u52a8\u753b\u64ad\u653e\u5b8c\u6bd5\u4e4b\u540e\u7684\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                }
            },
            statics: {
                Type: i
            },
            onLoad: function() {
                this.AnimaType == i.ClickPlayOne && (this.Animation.play(this.AnimationName), this.Animation.sample(this.AnimationName), this.Animation.pause(this.AnimationName))
            },
            onEnable: function() {
                this.Animation.on("finished", this._onFinished, this)
            },
            onDisable: function() {
                this.Animation.off("finished", this._onFinished, this)
            },
            Execute: function() {
                var e;
                switch (this.AnimaType) {
                    case i.Play:
                        this.Animation.play(this.AnimationName);
                        break;
                    case i.PlayAdd:
                        this.Animation.playAdditive(this.AnimationName);
                        break;
                    case i.StopEnd:
                        e = this.Animation.play(this.AnimationName), this.Animation.setCurrentTime(e.duration), this.Animation.sample(this.AnimationName), this.Animation.pause(this.AnimationName);
                        break;
                    case i.StopStart:
                        this.Animation.play(this.AnimationName), this.Animation.sample(this.AnimationName), this.Animation.pause(this.AnimationName);
                        break;
                    case i.ClickPlayOne:
                        this.Animation.resume(this.AnimationName);
                        break;
                    case i.GotoStop:
                        this.Animation.play(this.AnimationName), this.Animation.setCurrentTime(this._getFremToTime()), this.Animation.sample(this.AnimationName), this.Animation.pause(this.AnimationName);
                        break;
                    case i.Pause:
                        this.Animation.pause(this.AnimationName)
                }
            },
            _onFinished: function(e) {
                if (this.exeNode)
                    for (var t = this.exeNode.getComponents("RBaseState"), n = t.length, i = 0; i < n; ++i) t[i].Execute()
            },
            _getFremToTime: function() {
                var e = this.Animation.currentClip.sample;
                return this.frame / e
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RCameraControl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d05d4bRGFNMSYfRhfK3dI0t", "RCameraControl"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                moveVec2: cc.Vec2,
                durationTime: .2
            },
            Execute: function() {
                SunX.sEventManager.ExecuteEvent(REvent.CameraMoveBy, {
                    duration: this.durationTime,
                    pos: this.moveVec2
                })
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RCfgCollectVo: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "417fbZIB8VPWrmfB6jitqID", "RCfgCollectVo"), window.RCfgCollectVo = function() {
            this.ID = null, this.Img = null
        }, window.RCfgCollectVo.prototype.GetKey = function() {
            return this.ID
        }, window.RCfgCollectVo.prototype.ReadValue = function(e) {
            this.ID = e.ID, this.Img = e.Img
        }, cc._RF.pop()
    }, {}],
    RCfgMgr: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "15299PDBGdJxLhQ45KeyYON", "RCfgMgr");
        var i = cc.Class({
            ctor: function() {
                this.m_Hash = {}, this.m_T = arguments[0]
            },
            Init: function(e) {
                if (null != e)
                    for (var t, n = e.length, i = 0; i < n; ++i)(t = new this.m_T).ReadValue(e[i]), this.m_Hash[t.GetKey()] = t
            },
            Has: function(e) {
                return e in this.m_Hash
            },
            GetValue: function(e) {
                return this.m_Hash[e]
            }
        });
        t.exports = i, cc._RF.pop()
    }, {}],
    RCfgObjMgr: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "50a76dkx3ZBZJ0D9L8mVIYv", "RCfgObjMgr");
        var i = cc.Class({
            ctor: function() {
                this.m_Hash = {}, this.m_T = arguments[0]
            },
            Init: function(e) {
                var t, n;
                for (var i in e) n = new this.m_T, (t = e[i]).ID = i, n.ReadValue(t), this.m_Hash[i] = n
            },
            Has: function(e) {
                return e in this.m_Hash
            },
            GetValue: function(e) {
                return this.m_Hash[e]
            },
            GetHash: function() {
                return this.m_Hash
            }
        });
        t.exports = i, cc._RF.pop()
    }, {}],
    RCfgTextTipItemVo: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8525aiWXvZOcKJQQhOuuTFa", "RCfgTextTipItemVo"), window.RCfgTextTipItemVo = function() {
            this.ID = null, this.Level = null
        }, window.RCfgTextTipItemVo.prototype.GetKey = function() {
            return this.ID
        }, window.RCfgTextTipItemVo.prototype.ReadValue = function(e) {
            var t = {};
            for (var n in e) this.hasOwnProperty(n) ? this[n] = e[n] : t[n] = e[n].text;
            this.TextTip = t
        }, cc._RF.pop()
    }, {}],
    RChangeLevel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "22ca1VaZhFNra3B8FFha3gq", "RChangeLevel"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                level: {
                    default: "",
                    displayName: "Level",
                    tooltip: "\u5173\u5361\u7f16\u53f7"
                }
            },
            Execute: function() {
                SunX.sEventManager.ExecuteEvent(RGlobalRequest.ChangeLevel, this.level)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RCheckCondition: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5c664pj/DNLdbhUlOvkekMM", "RCheckCondition"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                exeNode: {
                    default: null,
                    displayName: "ExeNode",
                    tooltip: "\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                },
                errorExeNode: {
                    default: null,
                    displayName: "ErrorExeNode",
                    tooltip: "\u4e0d\u6ee1\u8db3\u6761\u4ef6\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                },
                conditions: {
                    default: [],
                    displayName: "Conditions",
                    tooltip: "\u5224\u65ad\u6761\u4ef6",
                    type: cc.String
                }
            },
            onLoad: function() {},
            onDestroy: function() {
                SunX.sEventManager.RemoveAllEvent(this)
            },
            Execute: function() {
                SunX.sEventManager.AddEvent(RGlobalResponse.CheckCondition, this._rpCheckCondition, this), SunX.sEventManager.ExecuteEvent(RGlobalRequest.CheckCondition, this.conditions)
            },
            _rpCheckCondition: function(e) {
                if (SunX.sEventManager.RemoveAllEvent(this), e.data) {
                    if (!this.exeNode) return;
                    for (var t = (i = this.exeNode.node.getComponents("RBaseState")).length, n = 0; n < t; ++n) i[n].Execute()
                } else {
                    if (!this.errorExeNode) return;
                    var i;
                    for (t = (i = this.errorExeNode.node.getComponents("RBaseState")).length, n = 0; n < t; ++n) i[n].Execute()
                }
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RCheckLocalStorageItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a8df6Tzsi5J/anlyssMlSCx", "RCheckLocalStorageItem"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                itemKey: {
                    default: [],
                    displayName: "itemKeys",
                    tooltip: "\u5224\u65ad\u6761\u4ef6",
                    type: cc.String
                },
                exeNode: {
                    default: null,
                    displayName: "ExeNode",
                    tooltip: "\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                },
                errorExeNode: {
                    default: null,
                    displayName: "ErrorExeNode",
                    tooltip: "\u4e0d\u6ee1\u8db3\u6761\u4ef6\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                }
            },
            Execute: function() {
                var e = this.itemKey.length;
                if (0 != e) {
                    for (var t = 0; t < e; t++)
                        if (!cc.sys.localStorage.getItem(this.itemKey[t])) return void this.ExecuteNode(this.errorExeNode);
                    this.ExecuteNode(this.exeNode)
                }
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RCheckNodeVisible: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e9557OJqD1GZ51L2nYkAiir", "RCheckNodeVisible"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !0
                },
                visibleExeNode: {
                    default: null,
                    displayName: "VisibleExeNode",
                    tooltip: "\u53ef\u89c1\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                },
                invisibleExeNode: {
                    default: null,
                    displayName: "InvisibleExeNode",
                    tooltip: "\u4e0d\u53ef\u89c1\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                }
            },
            Execute: function() {
                this.targetNode && (this.targetNode.active ? this.ExecuteNode(this.visibleExeNode) : this.ExecuteNode(this.invisibleExeNode))
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RClickMoveState: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "985f3IDLX5JAJ1rNk89MQFg", "RClickMoveState");
        var i = cc.Enum({
            Up: 0,
            Down: 1,
            Left: 2,
            Right: 3
        });
        cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                exeNode: {
                    default: null,
                    displayName: "ExeNode",
                    tooltip: "\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                },
                direction: {
                    default: i.Up,
                    tooltip: "\u79fb\u52a8\u65b9\u5411\uff0c0:\u4e0a 1:\u4e0b 2:\u5de6 3:\u53f3",
                    type: i
                },
                distance: 50
            },
            onEnable: function() {
                this.targetNode.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this)
            },
            onDisable: function() {
                this.targetNode.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this)
            },
            _onTouchMove: function(e) {
                var t = e.touch,
                    n = t.getLocation().sub(t.getStartLocation()),
                    o = !1;
                switch (this.direction) {
                    case i.Up:
                        o = n.y > this.distance;
                        break;
                    case i.Down:
                        o = -n.y > this.distance;
                        break;
                    case i.Left:
                        o = -n.x > this.distance;
                        break;
                    case i.Right:
                        o = n.x > this.distance
                }
                o && this.ExecuteNode(this.exeNode)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RClickOrMoveState: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "dc430TZs8JByJ3v5FP51khi", "RClickOrMoveState"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                exeNode: {
                    default: null,
                    displayName: "ExeNode",
                    tooltip: "\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                },
                _isMove: !1
            },
            onEnable: function() {
                this.targetNode.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this), this.targetNode.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this), this.targetNode.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this)
            },
            onDisable: function() {
                this.targetNode.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this), this.targetNode.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this), this.targetNode.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this)
            },
            _onTouchMove: function(e) {
                var t = e.touch;
                cc.pDistance(t.getLocation(), t.getStartLocation()) > 50 && (this._isMove = !0)
            },
            _onTouchCancel: function(e) {
                this._isMove = !1
            },
            _onTouchEnd: function(e) {
                this._isMove ? this._isMove = !1 : this.ExecuteNode(this.exeNode)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RClickState: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9f0fb9r+tlKZLM70bqURWnS", "RClickState"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                exeNode: {
                    default: null,
                    displayName: "ExeNode",
                    tooltip: "\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                },
                isTouchStart: !1,
                _touchType: cc.Node.EventType.TOUCH_END
            },
            onLoad: function() {
                this.isTouchStart && (this._touchType = cc.Node.EventType.TOUCH_START)
            },
            onEnable: function() {
                this.targetNode.on(this._touchType, this._onClick, this)
            },
            onDisable: function() {
                this.targetNode.off(this._touchType, this._onClick, this)
            },
            _onClick: function(e) {
                if (e.stopPropagation(), this.exeNode) {
                    for (var t = this.exeNode.getComponents("RBaseState"), n = !1, i = t.length, o = 0; o < i && (t[o].Execute(), !(n = t[o].GetStop())); ++o);
                    n && e.stopPropagationImmediate()
                }
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RCloseShowProp: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ae8bdgLGYhCrqPwXneG+ixx", "RCloseShowProp"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {},
            Execute: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.ShowPopup)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RCollectUnlock: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9c848/osddCWL/ntuv1wu8n", "RCollectUnlock"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                CollectKey: {
                    default: 0,
                    displayName: "CollectKey",
                    tooltip: "\u89e3\u9501\u7684\u56fe\u9274Key",
                    type: cc.Integer
                }
            },
            Execute: function() {
                SunX.sEventManager.ExecuteEvent(RGlobalRequest.CollectUnlock, this.CollectKey + "")
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RColliderExeCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1a355cCziVP57d4Dx/NoUz/", "RColliderExeCom"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                exeNode: {
                    default: null,
                    displayName: "ExeNode",
                    tooltip: "\u78b0\u649e\u5f00\u59cb\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                }
            },
            onLoad: function() {
                cc.director.getCollisionManager().enabled = !0
            },
            onCollisionEnter: function(e) {
                this.ExecuteNode(this.exeNode)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RDBAnimate: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "52066ZticJEhqgSiFzUIVdI", "RDBAnimate"), cc.Class({
            extends: e("RBaseState"),
            editor: !1
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RDBAnimation: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3d032kOR+tP+IXhffsB7/Kz", "RDBAnimation"), cc.Class({
            extends: dragonBones.ArmatureDisplay,
            editor: !1,
            properties: {
                _factory: {
                    default: null,
                    type: dragonBones.BaseFactory,
                    serializable: !1,
                    override: !0
                },
                isAutoPlay: !0
            },
            ctor: function() {
                0
            },
            _initSgNode: function() {
                var e = this._sgNode;
                e.animation().timeScale = this.timeScale, this.animationName && (this.isAutoPlay ? this.playAnimation(this.animationName, this.playTimes) : this.GotoAndStopByTime(this.animationName, 0))
            },
            GotoAndStopByTime: function(e, t) {
                return this._sgNode ? (this.animationName = e, this._sgNode.animation().gotoAndStopByTime(e, t)) : null
            },
            GotoAndPlayByTime: function(e, t, n) {
                return this._sgNode ? (this.animationName = e, this._sgNode.animation().gotoAndPlayByTime(e, t, n)) : null
            },
            Play: function(e, t) {
                return this._sgNode ? (this.animationName = e, this._sgNode.animation().play(e, t)) : null
            },
            ReplaceSlotDisplay: function(e, t, n, i) {
                var o = this.armature().getSlot(n);
                o._displayDataSet.displays[i].texture = this._factory._getTextureData(e, t), o.invalidUpdate()
            }
        }), cc._RF.pop()
    }, {}],
    RDBConfigManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ec319yBewlKOr//yFYc1jII", "RDBConfigManager");
        var i = e("RCfgMgr"),
            o = e("RCfgObjMgr"),
            s = cc.Class({
                ctor: function() {
                    this.m_ConfigHash = {}, this._config = [{
                        type: RConfigID.Item,
                        path: "Config/ItemConfig.json"
                    }, {
                        type: RConfigID.UIRelationShip,
                        path: "Config/UIRelationShip.json"
                    }, {
                        type: RConfigID.BookTip,
                        path: "Config/BookTips.json"
                    }, {
                        type: RConfigID.Level,
                        path: "Config/LevelConfig.json"
                    }, {
                        type: RConfigID.Collect,
                        path: "Config/CollectConfig.json"
                    }, {
                        type: RConfigID.ItemCombine,
                        path: "Config/ItemCombine.json"
                    }, {
                        type: RConfigID.TextTip,
                        path: "Config/TextTips.json"
                    }]
                },
                Init: function() {
                    this.m_ConfigHash[RConfigID.Item] = new o(RCfgItemVo), this.m_ConfigHash[RConfigID.UIRelationShip] = new i(RCfgUIRelationShipVo), this.m_ConfigHash[RConfigID.BookTip] = new o(RCfgTipItemVo), this.m_ConfigHash[RConfigID.Level] = new o(RCfgLevelVo), this.m_ConfigHash[RConfigID.Collect] = new o(RCfgCollectVo), this.m_ConfigHash[RConfigID.ItemCombine] = new o(RCfgItemCombineVo), this.m_ConfigHash[RConfigID.TextTip] = new o(RCfgTextTipItemVo), this._initDBConfig()
                },
                _initDBConfig: function() {
                    for (var e, t, n = this._config.length, i = 0; i < n; ++i) t = this._config[i], (e = this.GetRCfgMgr(t.type)) && e.Init(SunX.sRes.GetRes(t.path).json)
                },
                GetRCfgMgr: function(e) {
                    return this.m_ConfigHash[e]
                }
            });
        t.exports = {
            SP: new s
        }, cc._RF.pop()
    }, {
        RCfgMgr: "RCfgMgr",
        RCfgObjMgr: "RCfgObjMgr"
    }],
    RDataManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "42a53I+P49Hho9t1O95UYuF", "RDataManager");
        var i = e("RExecuteManager").SP,
            o = e("RModeManager"),
            s = cc.Class({
                ctor: function() {
                    this.m_UserInfo = null, this.m_DataItem = null, this._RCfgItem = null, this.C_initConfigObj = null, this.m_newCollect = null
                },
                Init: function() {
                    var t = e("RDBConfigManager").SP;
                    this._RCfgItem = t.GetRCfgMgr(RConfigID.Item), this._RCfgLevel = t.GetRCfgMgr(RConfigID.Level), this._RCfgcollect = t.GetRCfgMgr(RConfigID.Collect), this._IDataMgr = o.GetMode("RDataManager", this);
                    var n = SunX.sEventManager;
                    n.AddEvent(RGlobalRequest.CreateDataItem, this._onCreateDataItem, this), n.AddEvent(RGlobalRequest.PropObtain, this._onPropObtain, this), n.AddEvent(RGlobalRequest.PropRemove, this._onPropRemove, this), n.AddEvent(RGlobalRequest.PropMultiRemove, this._onPropMultiRemove, this), n.AddEvent(RGlobalRequest.ToggleLevel, this._onToggleLevel, this), n.AddEvent(RGlobalRequest.GameStart, this._onGameStart, this), n.AddEvent(RGlobalRequest.BagAllData, this._onBagAllData, this), n.AddEvent(RGlobalRequest.StateUpdate, this._onStateUpdate, this), n.AddEvent(RGlobalRequest.GItemState, this._onGItemState, this), n.AddEvent(RGlobalRequest.AddCondition, this._onAddCondition, this), n.AddEvent(RGlobalRequest.DeleteCondition, this._onDeleteCondition, this), n.AddEvent(RGlobalRequest.CheckCondition, this._onCheckCondition, this), n.AddEvent(RGlobalRequest.ChangeLevel, this._onChangeLevel, this), n.AddEvent(RGlobalRequest.MoneyBuy, this._onMoneyBuy, this), n.AddEvent(RGlobalRequest.BookTipNum, this._onBookTipNum, this), n.AddEvent(RGlobalRequest.OpenBook, this._onOpenBook, this), n.AddEvent(RGlobalRequest.BookTip, this._onBookTip, this), n.AddEvent(RGlobalRequest.UseTip, this._onUseTip, this), n.AddEvent(RGlobalRequest.TipLevel, this._onTipLevel, this), n.AddEvent(RGlobalRequest.WinLevel, this._onWinLevel, this), n.AddEvent(RGlobalRequest.UpdateLevelNum, this._onUpdateLevelNum, this), n.AddEvent(RGlobalRequest.CollectUnlock, this._onCollectUnlock, this), n.AddEvent(RGlobalRequest.ShopPanelUpdate, this._onShopPanelUpdate, this), i.Register(RExecuteEnum.DataSave, this._exeDataSave, this), i.Register(RExecuteEnum.UserInfoSave, this._exeUserInfoSave, this)
                },
                Start: function() {
                    this.C_initConfigObj = SunX.sRes.GetRes("Config/InitConfig.json").json, SunX.sUserData.FindFile("UserInfo.sm") ? this._initUserData() : this._firstGame(), SunX.sUserData.FindFile("DataItem.sm") ? this._onInitDataItem() : this._onCreateDataItem()
                },
                _initUserData: function() {
                    var e = SunX.sUserData.Read("UserInfo.sm"),
                        t = JSON.parse(e);
                    this.m_UserInfo = new RUserInfoVo, this.m_UserInfo.ReadValue(t)
                },
                _firstGame: function() {
                    this.m_UserInfo = new RUserInfoVo, this.m_UserInfo.FirstInit("", this.C_initConfigObj.UserInfo), i.RExecuteA(RExecuteEnum.UserInfoSave)
                },
                _exeDataSave: function() {
                    this._IDataMgr.DataSave("DataItem.sm", this.m_DataItem)
                },
                _exeUserInfoSave: function() {
                    var e = JSON.stringify(this.m_UserInfo.WriteValue());
                    SunX.sUserData.Write("UserInfo.sm", e)
                },
                _changeStageLevel: function(e, t) {
                    var n = this._RCfgLevel.GetValue(e);
                    return void 0 === n ? (console.log("\u6ca1\u6709\u6b64\u573a\u666f:" + e), !1) : (this._IDataMgr.ChangeStageLevel(this.m_DataItem, n, t) && i.RExecuteA(RExecuteEnum.DataSave), !0)
                },
                _onCreateDataItem: function() {
                    this.m_DataItem = new RDataItemVo, this.m_DataItem.FirstInit("", this.C_initConfigObj.DataItem), i.RExecuteA(RExecuteEnum.DataSave)
                },
                _onInitDataItem: function() {
                    var e = SunX.sUserData.Read("DataItem.sm"),
                        t = JSON.parse(e);
                    this.m_DataItem = new RDataItemVo, this.m_DataItem.ReadValue(t), SunX.sAudio.SetMusic(this.m_DataItem.music), SunX.sAudio.SetSound(this.m_DataItem.sound)
                },
                _onPropObtain: function(e) {
                    var t = null,
                        n = e.data,
                        o = this._RCfgItem.GetValue(n),
                        s = this.m_DataItem.bags[n];
                    void 0 === s || null == s ? (this.m_DataItem.bags[n] = 1, t = {
                        tag: RGlobalTag.BagAddProp,
                        ID: n
                    }, SunX.sEventManager.ExecuteEvent(RGlobalResponse.BagUpdateProp, t), i.RExecuteA(RExecuteEnum.DataSave)) : o.IsPile && ((s < o.NumPile || 0 == o.NumPile) && (s += 1, this.m_DataItem.bags[n] = s), t = {
                        tag: RGlobalTag.BagAddNumber,
                        ID: n,
                        Num: s
                    }, SunX.sEventManager.ExecuteEvent(RGlobalResponse.BagUpdateProp, t), i.RExecuteA(RExecuteEnum.DataSave))
                },
                _onPropRemove: function(e) {
                    var t = e.data;
                    this._PropRemoveByID(t)
                },
                _onPropMultiRemove: function(e) {
                    var t = e.data,
                        n = t.length;
                    if (0 != n)
                        for (var i = 0; i < n; ++i) this._PropRemoveByID(t[i])
                },
                _PropRemoveByID: function(e) {
                    if (this.m_DataItem.bags.hasOwnProperty(e)) {
                        var t = this._RCfgItem.GetValue(e);
                        if (t.IsPile && t.NumPile <= 0) {
                            var n = this.m_DataItem.bags[e];
                            if ((n -= 1) > 0) return this.m_DataItem.bags[e] = n, o = {
                                tag: RGlobalTag.BagSubNumber,
                                ID: e,
                                Num: n
                            }, void SunX.sEventManager.ExecuteEvent(RGlobalResponse.BagUpdateProp, o)
                        }
                        delete this.m_DataItem.bags[e];
                        var o = {
                            tag: RGlobalTag.BagDeleteProp,
                            ID: e
                        };
                        SunX.sEventManager.ExecuteEvent(RGlobalResponse.BagUpdateProp, o), i.RExecuteA(RExecuteEnum.DataSave)
                    }
                },
                _onToggleLevel: function(e) {
                    var t = e.data,
                        n = !1;
                    t.isStage ? this.m_UserInfo.BuyStage && (n = !0) : n = !0;
                    var i = {
                        Level: t.Level,
                        BuyStage: n,
                        isNewLevel: void 0 !== t.isLevel
                    };
                    n ? this._changeStageLevel(t.Level, t.isSave) && SunX.sEventManager.ExecuteEvent(RGlobalResponse.ToggleLevel, i) : SunX.sEventManager.ExecuteEvent(RGlobalResponse.ToggleLevel, i)
                },
                unLockNextLevel: function(e) {
                    if ("Over" != e) {
                        var t = this._RCfgLevel.GetValue(e);
                        null != t.Order ? this.m_DataItem.levels[t.Order] ? this.unLockNextLevel(t.NextID) : (this.m_DataItem.levels[t.Order] = !0, i.RExecuteA(RExecuteEnum.DataSave)) : console.log("\u6ca1\u6709\u6b64\u5173\u5361!")
                    }
                },
                _onWinLevel: function(e) {
                    var t = this._RCfgLevel.GetValue(this.m_DataItem.curLevel);
                    this.m_DataItem.passLevels[t.Order] || (this.m_DataItem.passLevels[t.Order] = !0, this.unLockNextLevel(t.NextID))
                },
                _onGameStart: function(e) {
                    SunX.sEventManager.ExecuteEvent(RGlobalResponse.GameStart, this.m_DataItem.curLevel)
                },
                _onBagAllData: function(e) {
                    SunX.sEventManager.ExecuteEvent(RGlobalResponse.BagAllData, this.m_DataItem.bags)
                },
                _onStateUpdate: function(e) {
                    var t = e.data,
                        n = this.m_DataItem.states,
                        o = n[t.nodeName];
                    o || (o = {
                        curStateName: null
                    }, n[t.nodeName] = o), o.curStateName = t.dataObj, i.RExecuteA(RExecuteEnum.DataSave)
                },
                _onGItemState: function(e) {
                    var t = e.data,
                        n = {};
                    n.nodeName = t, n.stateVo = this.m_DataItem.states[t], SunX.sEventManager.ExecuteEvent(RGlobalResponse.GItemState, n)
                },
                _onAddCondition: function(e) {
                    for (var t = e.data, n = t.length, o = 0; o < n; ++o) this.m_DataItem.condition[t[o]] = 1;
                    i.RExecuteA(RExecuteEnum.DataSave)
                },
                _onDeleteCondition: function(e) {
                    for (var t = e.data, n = t.length, o = 0; o < n; ++o) delete this.m_DataItem.condition[t[o]];
                    i.RExecuteA(RExecuteEnum.DataSave)
                },
                _onCheckCondition: function(e) {
                    for (var t = e.data, n = !0, i = t.length, o = 0; o < i; ++o) {
                        for (var s = !1, a = t[o].split("|"), r = 0, c = a.length; r < c; r++)
                            if (this.m_DataItem.condition.hasOwnProperty(a[r])) {
                                s = !0;
                                break
                            } if (!s) {
                            n = !1;
                            break
                        }
                    }
                    SunX.sEventManager.ExecuteEvent(RGlobalResponse.CheckCondition, n)
                },
                _onCollectUnlock: function(e) {
                    var t = e.data;
                    this.m_DataItem.CollectIsUnlock(t) || (this.m_DataItem.SetCollectIsUnlock(t), this.m_newCollect = this._RCfgcollect.GetValue(t), i.RExecuteA(RExecuteEnum.DataSave))
                },
                _onChangeLevel: function(e) {
                    var t = this._RCfgLevel.GetValue(e.data);
                    if (void 0 === t) return console.log("\u6ca1\u6709\u6b64\u573a\u666f:" + e.data), !1;
                    this._IDataMgr.ChangeLevel(this.m_DataItem, t) && i.RExecuteA(RExecuteEnum.DataSave)
                },
                _onMoneyBuy: function(e) {
                    var t = e.data;
                    switch (t.Tag) {
                        case RGlobalTag.BuyTip:
                            this.m_UserInfo.tipNumber += void 0 === t.Num ? 1 : t.Num, SunX.sEventManager.ExecuteEvent(RGlobalResponse.BookTipNum, this.m_UserInfo.tipNumber);
                        case RGlobalTag.BuyADS:
                            this.m_UserInfo.ADS = !0, SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.ShopPanel);
                            break;
                        case RGlobalTag.BuyAllTip:
                            this.m_UserInfo.tips.fill(!0), this.m_UserInfo.ADS = !0, SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.ShopPanel), SunX.sEventManager.ExecuteEvent(REvent.Book_Open);
                            break;
                        case RGlobalTag.BuyStage:
                            this.m_UserInfo.BuyStage = !0
                    }
                    i.RExecuteA(RExecuteEnum.UserInfoSave)
                },
                _onBookTipNum: function(e) {
                    SunX.sEventManager.ExecuteEvent(RGlobalResponse.BookTipNum, this.m_UserInfo.tipNumber)
                },
                _onShopPanelUpdate: function() {
                    var e = this.m_DataItem,
                        t = this.m_UserInfo,
                        n = this._RCfgLevel.GetValue(e.curLevel),
                        i = {
                            textTip: t.textTips[n.Order],
                            tip: t.tips[n.Order],
                            level: n.AnswerID
                        };
                    SunX.sEventManager.ExecuteEvent(RGlobalResponse.ShopPanelUpdate, i)
                },
                _onUpdateLevelNum: function(e) {
                    var t = this._RCfgLevel.GetValue(this.m_DataItem.curLevel);
                    SunX.sEventManager.ExecuteEvent(RGlobalResponse.UpdateLevelNum, t.Order + 1);
                    var n = this.m_UserInfo.tips[t.Order];
                    SunX.sEventManager.ExecuteEvent(RGlobalResponse.BookTipUnlock, n)
                },
                _onOpenBook: function(e) {
                    this._IDataMgr.OpenBook(this.m_DataItem, this.m_UserInfo)
                },
                _onBookTip: function(e) {
                    this._IDataMgr.BookTip(this.m_DataItem)
                },
                _onUseTip: function(e) {
                    this._IDataMgr.UseTip(this.m_DataItem, this.m_UserInfo)
                },
                _onTipLevel: function(e) {
                    this.m_DataItem.tipLevel >= e.data || (this.m_DataItem.tipLevel = e.data, SunX.sEventManager.ExecuteEvent(RGlobalResponse.BookTip, this.m_DataItem.tipLevel), i.RExecuteA(RExecuteEnum.DataSave))
                }
            });
        t.exports = {
            SP: new s
        }, cc._RF.pop()
    }, {
        RDBConfigManager: "RDBConfigManager",
        RExecuteManager: "RExecuteManager",
        RModeManager: "RModeManager"
    }],
    RDelayExe: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2321779QdNF34+6sKfnD6pO", "RDelayExe"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                delayTime: {
                    default: 0,
                    displayName: "DelayTime",
                    tooltip: "\u5ef6\u8fdf\u6267\u884c\u7684\u65f6\u95f4",
                    range: [0, 100],
                    type: cc.Float
                },
                exeNode: {
                    default: null,
                    displayName: "ExeNode",
                    tooltip: "\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                }
            },
            Execute: function() {
                this.scheduleOnce(this._delayFunc, this.delayTime)
            },
            onDisable: function() {
                this.unschedule(this._delayFunc)
            },
            restDelayTime: function(e) {
                cc.director.getScheduler().isScheduled(this._delayFunc, this) && (this.unschedule(this._delayFunc), this.scheduleOnce(this._delayFunc, this.delayTime))
            },
            _delayFunc: function(e) {
                if (this.exeNode)
                    for (var t = this.exeNode.getComponents("RBaseState"), n = t.length, i = 0; i < n; ++i) t[i].Execute()
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RDeleCondition: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f3bcct0pNpBtZC7TCH0wUdw", "RDeleCondition"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                condition: {
                    default: [],
                    displayName: "Conditions",
                    tooltip: "\u5224\u65ad\u6761\u4ef6",
                    type: cc.String
                }
            },
            Execute: function() {
                0 != this.condition.length && SunX.sEventManager.ExecuteEvent(RGlobalRequest.DeleteCondition, this.condition)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RDeleLocalSttorageItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a08be3a1nNDiodiQhSCu+VO", "RDeleLocalSttorageItem"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                itemKey: {
                    default: [],
                    displayName: "itemKeys",
                    tooltip: "\u5224\u65ad\u6761\u4ef6",
                    type: cc.String
                }
            },
            Execute: function() {
                var e = this.itemKey.length;
                if (0 != e)
                    for (var t = 0; t < e; t++) cc.sys.localStorage.setItem(this.itemKey[t], !1)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RDragManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "56f44TCNA9PCYc/0KV9Isr8", "RDragManager");
        var i = e("RExecuteManager").SP,
            o = cc.Class({
                ctor: function() {
                    this._offsetPos = cc.p(-50, 50), this._dragToolOrg = null, this._toolLayer = null, this._dragNode = null, this._hitPos = cc.p(0, 0), this._hitNode = null, this._hitEntry = null, this._toolHitList = [], this._maskNodeList = [], SunX.sEventManager.AddEvent(REvent.Tool_AddHit, this._onToolAddHit, this), SunX.sEventManager.AddEvent(REvent.Tool_RemoveHit, this._onToolRemoveHit, this), SunX.sEventManager.AddEvent(REvent.ReplayStage, this._onReplayStage, this), SunX.sEventManager.AddEvent(REvent.StageTouchControl, this._onBanTouch, this)
                },
                Destroy: function() {
                    SunX.sEventManager.RemoveAllEvent(this), this._toolLayer.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this), this._toolLayer.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this), this._toolLayer.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnded, this), this._dragToolOrg && this._dragToolOrg.destroy(), this._hitNode = null, this._hitEntry = null, this._toolHitList.length = 0
                },
                Init: function() {
                    var t = SunX.sRes.GetRes("RoomXUI/DragTool.prefab");
                    this._dragToolOrg = cc.instantiate(t);
                    var n = e("RGameManager").SP;
                    this._toolLayer = n._GameSceneView.ToolLayer, this._toolLayer.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this), this._toolLayer.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this), this._toolLayer.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnded, this), this._toolLayer._touchListener.setSwallowTouches(!1)
                },
                CreateDragToolNode: function(e, t) {
                    this._dragNode = this._dragToolOrg, this._dragNode.___data = t, this._dragNode.getComponent("DragToolCom").Init(t), this._setDragToolPos(e), SunX.sEventManager.ExecuteEvent(REvent.GameScene_Show, {
                        layer: "ToolLayer",
                        node: this._dragNode
                    })
                },
                _onToolAddHit: function(e) {
                    this._toolHitList.push(e.data), e.data.maskNode && this._maskNodeList.push(e.data.maskNode)
                },
                _onToolRemoveHit: function(e) {
                    var t = this._toolHitList.indexOf(e.data);
                    t >= 0 && (null != this._hitEntry && this._toolHitList[t] == this._hitEntry && (this._hitNode = null, this._hitEntry = null, this._dragNode && this._dragNode.getComponent("DragToolCom").NoHit()), this._toolHitList.splice(t, 1));
                    var n = this._maskNodeList.indexOf(e.data.maskNode);
                    n >= 0 && this._maskNodeList.splice(n, 1)
                },
                _checkHit: function() {
                    var e;
                    if (this._hitNode) {
                        if (this._hitTest(this._hitNode)) return;
                        return this._hitNode = null, void this._dragNode.getComponent("DragToolCom").NoHit()
                    }
                    for (var t = this._toolHitList.length, n = 0; n < t; ++n)
                        if (e = this._toolHitList[n], cc.js.array.contains(this._dragNode.___data.UseTarget, e.useID) && this._hitTest(e.targetNode)) return this._hitNode = e.targetNode, this._hitEntry = this._toolHitList[n], this._dragNode.getComponent("DragToolCom").Hit(), void SunX.sEventManager.ExecuteEvent(REvent.DragHit, this._hitEntry.useID)
                },
                _hitTest: function(e) {
                    var t = e._contentSize.width,
                        n = e._contentSize.height,
                        i = cc.v2(),
                        o = cc.v2(),
                        s = this._hitPos,
                        a = cc.mat4(),
                        r = cc.Camera.findCamera(e);
                    return r ? r.getScreenToWorldPoint(s, i) : i.set(s), e._updateWorldMatrix(), cc.Mat4.invert(a, e._worldMatrix), cc.Vec2.transformMat4(o, i, a), o.x += e._anchorPoint.x * t, o.y += e._anchorPoint.y * n, o.x >= 0 && o.y >= 0 && o.x <= t && o.y <= n
                },
                _onTouchMove: function(e) {
                    this._dragNode && (this._setDragToolPos(e.touch.getLocation()), this._checkHit())
                },
                _onTouchEnded: function(e) {
                    if (this._dragNode) {
                        if (this._hitNode) {
                            var t = !0,
                                n = this._dragNode.___data;
                            n.IsPile && n.NumPile > 0 && n.Num != n.NumPile && (t = !1), t && (this._hitEntry.isDelete && SunX.sEventManager.ExecuteEvent(RGlobalRequest.PropRemove, n.ID), this._hitEntry.handle(n.ID)), this._hitNode = null, this._hitEntry = null
                        }
                        this._onClearDrag()
                    }
                    for (var o = this._maskNodeList.length, s = 0; s < o; s++) this._maskNodeList[s].emit("roomx_prop_touch_end");
                    i.RExecuteA(RExecuteEnum.BagResetItem)
                },
                _setDragToolPos: function(e) {
                    e.x += this._offsetPos.x, e.y += this._offsetPos.y, this._hitPos.set(e);
                    for (var t = this._maskNodeList.length, n = 0; n < t; n++) this._maskNodeList[n].emit("roomx_prop_touch_moved", e);
                    var i = this._toolLayer.convertToNodeSpaceAR(e);
                    this._dragNode.position = i
                },
                _onClearDrag: function() {
                    this._dragNode && (this._hitNode && (this._hitNode = null, this._hitEntry = null), this._dragNode.parent = null, delete this._dragNode.___data, this._dragNode = null), i.RExecuteA(RExecuteEnum.BagResetItem)
                },
                _onReplayStage: function(e) {
                    this._onClearDrag()
                },
                _onBanTouch: function(e) {
                    e.data || this._onClearDrag()
                }
            });
        t.exports = o, cc._RF.pop()
    }, {
        RExecuteManager: "RExecuteManager",
        RGameManager: "RGameManager"
    }],
    REditBoxMechanism: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e34ffQz4alJhbVx3O0Jj+xs", "REditBoxMechanism"), cc.Class({
            extends: e("RBaseState"),
            editor: {
                menu: "RMechanism/REditBoxMechanism",
                requireComponent: e("RMEditBoxAnswers")
            },
            properties: {
                RMAnswers: {
                    default: null,
                    displayName: "RMEditBoxAnswers",
                    tooltip: "\u6302\u8f7d\u6709RMEditBoxAnswers\u7ec4\u4ef6\u7684\u8282\u70b9",
                    type: e("RMEditBoxAnswers")
                },
                editBox: {
                    default: null,
                    displayName: "EditBox",
                    type: cc.EditBox
                },
                okBtn: {
                    default: null,
                    displayName: "OkBtn",
                    tooltip: "\u786e\u8ba4\u6309\u94ae",
                    type: cc.Button
                }
            },
            onLoad: function() {},
            onEnable: function() {
                this.node.on("RAnswerCorrect", this._onAnswerCorrect, this), this.node.on("RAnswerError", this._onAnswerError, this), this.okBtn && this.okBtn.node.on("click", this._onOKClick, this), this.editBox.enable = !0
            },
            onDisable: function() {
                this.node.off("RAnswerCorrect", this._onAnswerCorrect, this), this.node.off("RAnswerError", this._onAnswerError, this), this.okBtn && this.okBtn.node.off("click", this._onOKClick, this), this.editBox.enable = !1
            },
            start: function() {},
            Ban: function() {
                this.editBox.enable = !1, this.okBtn && this.okBtn.node.resumeSystemEvents()
            },
            EditingDidEnd: function() {
                this._onOKClick()
            },
            _onAnswerCorrect: function(e) {
                this.Ban()
            },
            _onAnswerError: function(e) {},
            _onOKClick: function(e) {
                var t = this.editBox.string;
                this.RMAnswers.CheckAnswers(t)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState",
        RMEditBoxAnswers: "RMEditBoxAnswers"
    }],
    REnterLevel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4a98a3kORpDJ4FUu7rUqGzg", "REnterLevel"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                isLevel: {
                    default: !1,
                    displayName: "isLevel",
                    tooltip: "\u662f\u5426\u662f\u5355\u4e2a\u623f\u95f4\u8fdb\u5165\u4e0b\u4e00\u5173"
                },
                isSave: {
                    default: !1,
                    displayName: "IsSave",
                    tooltip: "\u5207\u6362\u662f\u5426\u9700\u8981\u8bb0\u5f55\u8fdb\u5165\u7684\u573a\u666f\u7b49\u7ea7"
                },
                isBack: {
                    default: !1,
                    displayName: "IsBack",
                    tooltip: "\u8fdb\u5165\u7684\u4e0b\u4e00\u4e2a\u573a\u666f\u5728\u70b9\u51fb\u8fd4\u56de\u7684\u65f6\u5019\u662f\u5426\u53cd\u56de\u8be5\u573a\u666f"
                },
                enterLevel: {
                    default: "",
                    displayName: "EnterLevel",
                    tooltip: "\u5173\u5361\u7f16\u53f7"
                }
            },
            Execute: function() {
                var e = null;
                e = this.isLevel ? {
                    isLevel: !0,
                    isStage: !1,
                    isSave: this.isSave,
                    isBack: this.isBack
                } : {
                    Level: this.enterLevel,
                    isStage: !1,
                    isSave: this.isSave,
                    isBack: this.isBack
                }, SunX.sEventManager.ExecuteEvent(REvent.ToggleStage, e)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RExeCount: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8e45eLVJFFPbroRpMGwS8Bm", "RExeCount"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                _count: 0,
                count: 3,
                exeNode: {
                    default: null,
                    displayName: "ExeNode",
                    tooltip: "\u6267\u884c\u6b21\u6570<Count\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                },
                CountExeNode: {
                    default: null,
                    displayName: "CountExeNode",
                    tooltip: "\u6267\u884c\u6b21\u6570>=Count\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                }
            },
            Execute: function() {
                this._count += 1, this._count >= this.count ? this._exeFunc(this.CountExeNode) : this._exeFunc(this.exeNode)
            },
            _exeFunc: function(e) {
                if (e)
                    for (var t = e.getComponents("RBaseState"), n = t.length, i = 0; i < n; ++i) t[i].Execute()
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RExeHandle: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "95d7ayk6mBDAqZkKG0SBrYL", "RExeHandle"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                handle: {
                    default: [],
                    type: cc.Component.EventHandler
                }
            },
            Execute: function(e) {
                cc.Component.EventHandler.emitEvents(this.handle, null)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RExecuteManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4467cwePs5DmJqgyND6lrxP", "RExecuteManager");
        var i = cc.Class({
            ctor: function() {
                this._exeList = null, this._dirtyList = null, this._len = 0, this._i = 0, this._isDirty = 0
            },
            Init: function() {
                cc.director.getScheduler().enableForTarget(this), this._len = RExecuteEnum.ExeNum, this._exeList = new Array(RExecuteEnum.ExeNum), this._dirtyList = new Array(RExecuteEnum.ExeNum), cc.director.getScheduler().schedule(this._update, this, 0, cc.macro.REPEAT_FOREVER, 0, !1)
            },
            Register: function(e, t, n) {
                this._exeList[e] = SunX.SHandle.Create(t, n)
            },
            Remove: function(e) {
                this._exeList[e] = null
            },
            RExecuteA: function(e) {
                this._dirtyList[e] || null != this._exeList[e] && (this._dirtyList[e] = !0, ++this._isDirty)
            },
            RCancel: function(e) {
                this._dirtyList[e] && (this._dirtyList[e] = null, --this._isDirty)
            },
            _update: function(e) {
                if (0 != this._isDirty)
                    for (this._isDirty = 0, this._i = 0; this._i < this._len; ++this._i) this._dirtyList[this._i] && (this._exeList[this._i].Execute(), this._dirtyList[this._i] = null)
            }
        });
        t.exports = {
            SP: new i
        }, cc._RF.pop()
    }, {}],
    RGamaOverBack: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "57119kMEp5P0o1vo9KdLayl", "RGamaOverBack"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                }
            },
            onLoad: function() {},
            Execute: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.GameOverPanel)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RGameLose: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "fe2f0qnQbxEUYQEiQG5okDQ", "RGameLose"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                audio: {
                    default: null,
                    type: cc.AudioClip
                },
                loseImg: cc.SpriteFrame,
                delay: 0
            },
            onLoad: function() {},
            Execute: function() {
                var t = e("RUIManager").SP.GetUICtrl(RUIID.GameOverPanel);
                t.SetTime(this.delay), t.SetGameWin(!1), this.loseImg && t.SetImg(this.loseImg), this.audio && t.SetAudioUrl(this.audio), SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.GameOverPanel)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState",
        RUIManager: "RUIManager"
    }],
    RGameManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e0357he4oRBz5goXok43mbH", "RGameManager");
        var i = e("RDBConfigManager").SP,
            o = cc.Class({
                ctor: function() {
                    this._RGameVo = null, this._curStage = null, this._GameSceneView = null, this._RCfgLevel = null, this._backLevel = [], this._curStageName = null, this._preLoad = new Array(RGlobalConfig.LevelNumber), this._preLoad.fill(!1)
                },
                Clear: function() {
                    cc.director.getScheduler().unscheduleAllForTarget(this), SunX.sEventManager.RemoveAllEvent(this), SunX.sEventManager.ExecuteEvent(REvent.GameScene_Destroy), this._curStage && cc.isValid(this._curStage) && this._curStage.destroy(), this._clearStageRes(this._RGameVo.GetCurLevel()), this._backLevel.length = 0, this._RGameVo = null, this._curStage = null, this._GameSceneView = null
                },
                Init: function() {
                    cc.director.getScheduler().enableForTarget(this), this._RCfgLevel = i.GetRCfgMgr(RConfigID.Level)
                },
                CreateGameStartScene: function() {
                    cc.director.loadScene("GameStartScene")
                },
                CreateGameScene: function() {
                    this._RGameVo = new RGameVo, SunX.sEventManager.AddEvent(REvent.ToggleStage, this._onToggleStage, this), SunX.sEventManager.AddEvent(REvent.ReplayStage, this._onReplayStage, this), SunX.sEventManager.AddEvent(RGlobalResponse.ToggleLevel, this._rpToggleLevel, this), SunX.sEventManager.AddEvent(RGlobalResponse.GameStart, this._rpGameStart, this), cc.director.getScheduler().schedule(this._update, this, 0, cc.macro.REPEAT_FOREVER, 0, !1), cc.director.loadScene("GameScene", this._loadSceneOver.bind(this))
                },
                _loadSceneOver: function(e, t) {
                    var n = t.getChildByName("Canvas");
                    this._GameSceneView = n.getComponent("GameSceneView"), SunX.sEventManager.ExecuteEvent(REvent.GameScene_Created, this._GameSceneView), SunX.sEventManager.ExecuteEvent(REvent.Loading_Load), SunX.sEventManager.ExecuteEvent(RGlobalRequest.GameStart)
                },
                _preLoadStageRes: function() {
                    var e = this._RCfgLevel.GetValue(this._curStageName);
                    if (null != e.NextID && "Over" != e.NextID) {
                        var t = this._RCfgLevel.GetValue(e.NextID);
                        this._preLoad[t.Order] || (this._preLoad[t.Order] = !0, SunX.sRes.Load({
                            url: t.Path,
                            func: null
                        }))
                    }
                },
                _toggleStage: function(e) {
                    var t = this._RCfgLevel.GetValue(e);
                    if (void 0 !== t) {
                        var n = SunX.sRes.GetRes(t.Path);
                        n ? this._stageLoadOver(n) : SunX.sRes.Load({
                            url: t.Path,
                            func: this._stageLoadOver.bind(this)
                        })
                    }
                },
                _stageLoadOver: function(e) {
                    var t = this._RGameVo.GetOldLevel();
                    null != this._curStage && this._RCfgLevel.Has(t) && (this._curStage.destroy(), (t != this._RGameVo.GetCurLevel() || this._RGameVo.IsNewLevel()) && (this._clearStageRes(t), SunX.GC())), this._createPrefab = e, cc.director.getScheduler().schedule(this._nextFrameCreateStage, this, 0, 0, 0, !1)
                },
                _nextFrameCreateStage: function(e) {
                    if (null == this._createPrefab && cc.error("_createPrefab is null !!!!!!!!!"), this._curStage = cc.instantiate(this._createPrefab), null == this._curStage) return cc.error("_curStage Node is null ~~~~~~~~~"), void SunX.sEventManager.ExecuteEvent(REvent.Loading_Over);
                    this._curStage.position = cc.Vec2.ZERO, this._createPrefab = null;
                    var t = {
                        layer: "StageLayer",
                        node: this._curStage
                    };
                    SunX.sEventManager.ExecuteEvent(REvent.GameScene_Show, t), SunX.sEventManager.ExecuteEvent(REvent.Loading_Over), this._RGameVo.IsNewLevel() && (this._curStageName = this._RGameVo.GetCurLevel(), this._RGameVo.SetIsNewLevel(!1), SunX.sEventManager.ExecuteEvent(REvent.Clear_Data), SunX.sEventManager.ExecuteEvent(RGlobalRequest.BookTip), SunX.sEventManager.ExecuteEvent(RGlobalRequest.UpdateLevelNum), SunX.sEventManager.ExecuteEvent(RGlobalRequest.ShopPanelUpdate, null)), this._preLoadStageRes()
                },
                _clearStageRes: function(e) {
                    var t = this._RCfgLevel.GetValue(e);
                    void 0 !== t && (SunX.sRes.ReleaseRes(t.Path), SunX.sRes.PurgeCachedRes())
                },
                _onLoadingBlack: function(e) {
                    SunX.sEventManager.RemoveEvent(REvent.Loading_Black, this), SunX.sEventManager.ExecuteEvent(REvent.Prop_DeleFly);
                    var t = this._RGameVo.GetCurLevel();
                    this._toggleStage(t)
                },
                _onToggleStage: function(e) {
                    var t = e.data;
                    if (t.isLevel) {
                        var n = this._RCfgLevel.GetValue(this._curStageName);
                        if (null == n.NextID) return;
                        if ("Over" == n.NextID) return void cc.director.loadScene("SelectLevel");
                        t.Level = n.NextID
                    } else {
                        if ("Back" == t.Level) {
                            var i = this._backLevel.length;
                            t.Level = i > 0 ? this._backLevel.pop() : this._RGameVo.GetOldLevel()
                        }
                        t.isBack && this._backLevel.push(this._RGameVo.GetCurLevel())
                    }
                    SunX.sEventManager.ExecuteEvent(RGlobalRequest.ToggleLevel, t)
                },
                _onReplayStage: function(e) {
                    SunX.sEventManager.ExecuteEvent(REvent.Loading_Load), SunX.sEventManager.ExecuteEvent(REvent.Clear_Data), SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.GetItemPanel), this._RGameVo.SetOldLevel(), this._RGameVo.SetCurLevel(this._curStageName), this._toggleStage(this._curStageName), this._GameSceneView.ReplayGame()
                },
                _rpToggleLevel: function(e) {
                    var t = e.data;
                    if (t.BuyStage) {
                        var n = this._RGameVo.GetCurLevel(),
                            i = this._RCfgLevel.GetValue(n);
                        null != i.Sound && SunX.sAudio.PlayEffect(i.Sound), this._RGameVo.SetOldLevel(), this._RGameVo.SetCurLevel(t.Level), t.isNewLevel && this._RGameVo.SetIsNewLevel(!0), SunX.sEventManager.AddEvent(REvent.Loading_Black, this._onLoadingBlack, this), SunX.sEventManager.ExecuteEvent(REvent.Loading_Start)
                    } else SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.ShopPanel)
                },
                _rpGameStart: function(e) {
                    var t = e.data;
                    this._RGameVo.SetOldLevel(), this._RGameVo.SetCurLevel(t), this._RGameVo.SetIsNewLevel(!0), this._toggleStage(t)
                },
                _update: function(e) {
                    SunX.sEventManager.ExecuteEvent(REvent.GItem_UpdateState)
                }
            });
        t.exports = {
            SP: new o
        }, cc._RF.pop()
    }, {
        RDBConfigManager: "RDBConfigManager"
    }],
    RGameWin: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3aefbpm8yVJW65qHjkg3HUj", "RGameWin"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                audio: {
                    default: null,
                    type: cc.AudioClip
                },
                winImg: cc.SpriteFrame,
                delay: 0
            },
            onLoad: function() {},
            Execute: function() {
                var t = e("RUIManager").SP.GetUICtrl(RUIID.GameOverPanel);
                t.SetTime(this.delay), t.SetGameWin(!0), this.winImg && t.SetImg(this.winImg), this.audio && t.SetAudioUrl(this.audio), SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.GameOverPanel), SunX.sEventManager.ExecuteEvent(RGlobalRequest.WinLevel, null)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState",
        RUIManager: "RUIManager"
    }],
    RGame: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8d2abZX1nVNirYnSEohEuFk", "RGame"), cc.Class({
            extends: e("RBaseState"),
            properties: {
                gameWin: {
                    default: null,
                    displayName: "GameWin",
                    tooltip: "\u6e38\u620f\u901a\u5173",
                    type: e("RBaseState")
                }
            },
            onLoad: function() {},
            onEnable: function() {},
            onDisable: function() {},
            start: function() {},
            gameOver: function() {
                if (this.gameWin)
                    for (var e = this.gameWin.getComponents("RBaseState"), t = e.length, n = 0; n < t; ++n) e[n].Execute()
            },
            _banChildrenClick: function(e) {
                e.stopPropagation()
            },
            banAddEvent: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this._banChildrenClick, this, !0), this.node.on(cc.Node.EventType.TOUCH_MOVE, this._banChildrenClick, this, !0), this.node.on(cc.Node.EventType.TOUCH_END, this._banChildrenClick, this, !0)
            },
            banRemoveEvent: function() {
                this.node.off(cc.Node.EventType.TOUCH_START, this._banChildrenClick, this, !0), this.node.off(cc.Node.EventType.TOUCH_MOVE, this._banChildrenClick, this, !0), this.node.off(cc.Node.EventType.TOUCH_END, this._banChildrenClick, this, !0)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RGuideManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9ca8ch4MaVG0LnTtVG10QOu", "RGuideManager");
        var i = cc.Class({
            ctor: function() {},
            Init: function() {}
        });
        t.exports = {
            SP: new i
        }, cc._RF.pop()
    }, {}],
    RLoadScene: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "acfb8BUdmxOH7hlZqTwWucv", "RLoadScene"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                sceneName: {
                    default: "",
                    displayName: "SceneName",
                    tooltip: "\u573a\u666f\u540d\u5b57"
                }
            },
            onDestroy: function() {
                SunX.sEventManager.RemoveAllEvent(this)
            },
            Execute: function() {
                SunX.sEventManager.AddEvent(REvent.Loading_Black, this._onLoadingBlack, this), SunX.sEventManager.ExecuteEvent(REvent.Loading_Start)
            },
            _onLoadingBlack: function(e) {
                SunX.sEventManager.RemoveEvent(REvent.Loading_Black, this), cc.director.loadScene(this.sceneName)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RMAnswers: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ff98ag75ZpIVrx9WUm3StOQ", "RMAnswers"), cc.Class({
            extends: cc.Component,
            editor: !1,
            properties: {
                answers: {
                    default: [],
                    displayName: "Answers",
                    tooltip: "\u7b54\u6848",
                    type: cc.String
                },
                answersType: {
                    default: RMAnswersTypeEnum.Fix,
                    displayName: "Type",
                    tooltip: "\u7b54\u6848\u7684\u7c7b\u578b",
                    type: RMAnswersTypeEnum
                },
                limitedNum: {
                    default: 0,
                    displayName: "LimitedNum",
                    tooltip: "\u7b54\u6848\u9650\u5236\u80fd\u8f93\u5165\u6b21\u6570, 0\u5c31\u662f\u65e0\u9650\u6b21"
                },
                saveType: {
                    default: RMSaveTypeEnum.Display,
                    displayName: "SaveType",
                    tooltip: "\u83b7\u53d6\u7b54\u6848\u7684\u7c7b\u578b",
                    type: RMSaveTypeEnum
                },
                correct: {
                    default: null,
                    displayName: "CorrectNode",
                    tooltip: "\u7b54\u6848\u6b63\u786e\u7684\u6267\u884c\u8282\u70b9",
                    type: e("RBaseState")
                },
                error: {
                    default: null,
                    displayName: "ErrorNode",
                    tooltip: "\u7b54\u6848\u9519\u8bef\u7684\u6267\u884c\u8282\u70b9",
                    type: e("RBaseState")
                }
            },
            onLoad: function() {
                this._len = this.answers.length, this.answersType == RMAnswersTypeEnum.Fix || this.answersType == RMAnswersTypeEnum.NoOrder ? (this._data = new Array(this._len), this._data.fill(0)) : this._data = []
            },
            InitAnswer: function(e, t) {
                switch (this.saveType == RMSaveTypeEnum.Index && (t = 0), this.answersType) {
                    case RMAnswersTypeEnum.Fix:
                        this._data[e] = t
                }
            },
            AddAnswer: function(e, t) {
                switch (this.saveType == RMSaveTypeEnum.Index && (t = e), this.answersType) {
                    case RMAnswersTypeEnum.Fix:
                        this._data[e] = t;
                        break;
                    case RMAnswersTypeEnum.Queue:
                        if (this._data.length >= this._len) {
                            for (var n = this._len - 1, i = 0; i < n; ++i) this._data[i] = this._data[i + 1];
                            this._data[n] = t
                        } else this._data.push(t);
                        break;
                    case RMAnswersTypeEnum.Unlimited:
                        if (this.limitedNum > 0 && this._data.length >= this.limitedNum) return;
                        this._data.push(t);
                        break;
                    case RMAnswersTypeEnum.NoOrder:
                        t = this._data[e], this._data[e] = t + 1
                }
            },
            ResetAnswers: function() {
                this.answersType == RMAnswersTypeEnum.Fix || this.answersType == RMAnswersTypeEnum.NoOrder ? this._data.fill(0) : this._data.length = 0, this.node.emit("RMechanismOther")
            },
            CheckAnswers: function() {
                if (this.answersType != RMAnswersTypeEnum.Unlimited && this.answersType != RMAnswersTypeEnum.Queue || this._data.length == this._len) {
                    for (var e = !0, t = this._data.length, n = 0; n < t; ++n)
                        if (this._data[n] != parseInt(this.answers[n])) {
                            e = !1;
                            break
                        } e ? this._correct() : this._error()
                } else this._error()
            },
            GetAnswers: function() {
                return this._data
            },
            _correct: function() {
                this.node.emit("RAnswerCorrect"), this.ResetAnswers(), this._execute(this.correct)
            },
            _error: function() {
                this.node.emit("RAnswerError"), this._execute(this.error)
            },
            _execute: function(e) {
                if (e)
                    for (var t = e.node.getComponents("RBaseState"), n = t.length, i = 0; i < n; ++i) t[i].Execute()
            },
            DeleteOneAnswer: function() {
                this.answersType != RMAnswersTypeEnum.Unlimited && this.answersType != RMAnswersTypeEnum.Queue || (this._data.pop(), this.node.emit("RMechanismOther"))
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RMButtonItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "adf6fcxMWRIrK+stgQ45vTg", "RMButtonItem"), cc.Class({
            extends: e("RMechanismItem"),
            editor: !1,
            properties: {
                btn: {
                    default: null,
                    displayName: "Button",
                    tooltip: "\u70b9\u51fb\u6309\u94ae",
                    type: cc.Button
                }
            },
            onLoad: function() {
                this._super(), this.btn.node.on("click", this._clickBtn, this)
            },
            Active: function() {
                this.btn.node.resumeSystemEvents()
            },
            UnActive: function() {
                this.btn.node.pauseSystemEvents()
            },
            _clickBtn: function(e) {
                this.ClickMBtn(1)
            }
        }), cc._RF.pop()
    }, {
        RMechanismItem: "RMechanismItem"
    }],
    RMDABCLabel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f498fOEmNdJh7Xib4nEssFK", "RMDABCLabel"), cc.Class({
            extends: e("RMechanismDisplay"),
            editor: !1,
            properties: {
                ABC: {
                    default: [],
                    displayName: "ABC",
                    tooltip: "\u7b54\u6848\u5907\u9009\u5b57\u6bcd",
                    type: cc.String
                }
            },
            onLoad: function() {
                this._super(), this._label = this.getComponent(cc.Label)
            },
            UpdateDisplay: function(e) {
                var t = this.ABC.length - 1;
                t < 0 || (e > 0 ? (this._answer += 1, this._answer > t && (this._answer = 0)) : (this._answer -= 1, this._answer < 0 && (this._answer = t)), this._label.string = this.ABC[this._answer])
            }
        }), cc._RF.pop()
    }, {
        RMechanismDisplay: "RMechanismDisplay"
    }],
    RMDAnimateOne: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "049f8WFAH5Hn5TIimeotVEZ", "RMDAnimateOne"), cc.Class({
            extends: e("RMechanismDisplay"),
            editor: !1,
            properties: {
                totalFrame: {
                    default: 0,
                    displayName: "TotalFrame",
                    min: 0,
                    tooltip: "\u603b\u5171\u5e27\u6570",
                    type: cc.Integer
                },
                defaultFrame: {
                    default: 0,
                    displayName: "DefaultFrame",
                    min: 0,
                    tooltip: "\u521d\u59cb\u72b6\u6001",
                    type: cc.Integer
                },
                LoopReverse: !1
            },
            onLoad: function() {
                this._super(), this.addFrame = !0, this._animation = this.getComponent(cc.Animation);
                var e = this._animation.defaultClip.name;
                this._animation.play(e), this._animation.sample(e), this._animation.pause(e), this.defaultFrame <= this.totalFrame && (this._answer = this.defaultFrame, this._animation.setCurrentTime(this.defaultFrame), this.LoopReverse && this.defaultFrame == this.totalFrame && (this.addFrame = !1))
            },
            UpdateDisplay: function(e) {
                var t = this._animation.getAnimationState(this._animation.defaultClip.name),
                    n = 0;
                this.LoopReverse || 0 != e || (this.addFrame = !1), this.addFrame ? (n = t.time + 1, this.LoopReverse && n == this.totalFrame && (this.addFrame = !1), n > this.totalFrame && (n = 0)) : (n = t.time - 1, this.LoopReverse && 0 == n && (this.addFrame = !0), n < 0 && (n = this.totalFrame)), this._answer = n, this._animation.setCurrentTime(n)
            },
            ResetDisplay: function() {
                this._animation.play(this._animation.defaultClip.name), this._animation.pause(this._animation.defaultClip.name), this._animation.setCurrentTime(0)
            }
        }), cc._RF.pop()
    }, {
        RMechanismDisplay: "RMechanismDisplay"
    }],
    RMDAnimatePlayOne: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "abcf72NbtxKupIr3RC2vlut", "RMDAnimatePlayOne"), cc.Class({
            extends: e("RMechanismDisplay"),
            editor: !1,
            onLoad: function() {
                this._super(), this._animation = this.getComponent(cc.Animation), this._animation.play(this._animation.defaultClip.name), this._animation.sample(this._animation.defaultClip.name), this._animation.pause(this._animation.defaultClip.name)
            },
            UpdateDisplay: function(e) {
                this._isCompleted = !1, this._animation.resume(this._animation.defaultClip.name)
            },
            GetAnswer: function() {
                return this._answer
            },
            IsAnimation: function() {
                return !0
            },
            SetFrame: function(e) {
                this._animation.pause(this._animation.defaultClip.name), this._answer = e, this.node.emit("RAnimaFinished"), this._isCompleted = !0
            }
        }), cc._RF.pop()
    }, {
        RMechanismDisplay: "RMechanismDisplay"
    }],
    RMDAnimate: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "98f61d0rZ9NbL4BE0cF9N4m", "RMDAnimate"), cc.Class({
            extends: e("RMechanismDisplay"),
            editor: !1,
            onLoad: function() {
                this._super(), this._animation = this.getComponent(cc.Animation), this._animation.on("finished", this._onFinished, this)
            },
            UpdateDisplay: function(e) {
                this._isCompleted = !1, this._animation.play(this._animation.defaultClip.name)
            },
            GetAnswer: function() {
                return null
            },
            IsAnimation: function() {
                return !0
            },
            _onFinished: function(e) {
                this.node.emit("RAnimaFinished"), this._isCompleted = !0
            }
        }), cc._RF.pop()
    }, {
        RMechanismDisplay: "RMechanismDisplay"
    }],
    RMDBLockItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2ed3bchNn1BgoMiT26cHJNb", "RMDBLockItem");
        var i = cc.Enum({
            Click: 0,
            Touch: 1
        });
        cc.Class({
            extends: e("RMechanismItem"),
            editor: !1,
            properties: {
                display: {
                    default: null,
                    displayName: "RMechanismDisplay",
                    tooltip: "\u9f99\u9aa8\u52a8\u753b",
                    override: !0,
                    type: e("RDBAnimation")
                },
                lockType: {
                    default: i.Click,
                    displayName: "LockType",
                    tooltip: "\u9501\u7684\u4ea4\u4e92\u7c7b\u578b",
                    type: i
                },
                dragonAtlasAsset: {
                    default: null,
                    displayName: "DBAtlasAsset",
                    tooltip: "\u9f99\u9aa8\u56fe\u7247\u96c6\u6587\u4ef6",
                    type: dragonBones.DragonBonesAtlasAsset
                },
                AtlasName: {
                    default: "",
                    displayName: "AtlasName",
                    tooltip: "\u9f99\u9aa8\u56fe\u7247\u96c6\u6587\u4ef6\u7684\u540d\u5b57"
                }
            },
            statics: {
                LockType: i
            },
            onLoad: function() {
                this._Click = !0, this._curNumber = 0, this._isReverse = !1, this._TouchMove = !1, this._isAnimateOver = !0, this._factory = dragonBones.CCFactory.getFactory(), this.init()
            },
            onEnable: function() {
                this.RegisterTouchEvent()
            },
            onDisable: function() {
                this.RemoveTouchEvent()
            },
            start: function() {
                this.display.addEventListener(dragonBones.EventObject.COMPLETE, this._dbComplete, this), this._updateNumber()
            },
            RegisterTouchEvent: function() {
                this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this), this.node.on(cc.Node.EventType.TOUCH_END, this._touchEnd, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchCancel, this)
            },
            RemoveTouchEvent: function() {
                this.node.off(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this), this.node.off(cc.Node.EventType.TOUCH_END, this._touchEnd, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._touchCancel, this)
            },
            ClickMBtn: function(e) {
                this.node.emit("RMechaClick", this)
            },
            GetAnswer: function() {
                return this._curNumber
            },
            Active: function() {
                this.node.resumeSystemEvents()
            },
            UnActive: function() {
                this.node.pauseSystemEvents()
            },
            _updateNumber: function() {
                this.display.ReplaceSlotDisplay(this.AtlasName, "number_" + this._getNumber(-2), "slot_0", 0), this.display.ReplaceSlotDisplay(this.AtlasName, "number_" + this._getNumber(-1), "slot_1", 0), this.display.ReplaceSlotDisplay(this.AtlasName, "number_" + this._getNumber(0), "slot_2", 0), this.display.ReplaceSlotDisplay(this.AtlasName, "number_" + this._getNumber(1), "slot_3", 0), this.display.ReplaceSlotDisplay(this.AtlasName, "number_" + this._getNumber(2), "slot_4", 0)
            },
            _dbComplete: function(e) {
                this._isReverse ? this._curNumber -= 1 : this._curNumber += 1, this._curNumber > 9 && (this._curNumber = 0), this._curNumber < 0 && (this._curNumber = 9), this._updateNumber(), this._isReverse ? this.display.GotoAndStopByTime("Reverse", 0) : this.display.GotoAndStopByTime("Order", 0), this._Click = !0, this._isAnimateOver = !0, this.ClickMBtn()
            },
            _trunLock: function() {
                this.node.emit("click"), this._isReverse ? this.display.GotoAndPlayByTime("Reverse", 0, 1) : this.display.GotoAndPlayByTime("Order", 0, 1)
            },
            _touchMove: function(e) {
                if (this.lockType != i.Click && this._Click && !this._TouchMove) {
                    var t = e.touch,
                        n = t.getStartLocation().y - t.getLocation().y;
                    n * n > 49 && (this._Click = !1, this._TouchMove = !0, this._isAnimateOver = !1, t.getStartLocation().y > t.getLocation().y ? this._isReverse = !1 : this._isReverse = !0, this._trunLock())
                }
            },
            _touchEnd: function(e) {
                this._TouchMove = !1, this.lockType != i.Touch && this._Click && (this._Click = !1, this._isReverse = !1, this._trunLock())
            },
            _touchCancel: function(e) {
                this._isAnimateOver && (this._isReverse = !1, this._TouchMove = !1, this._Click = !0)
            },
            _getNumber: function(e) {
                var t = this._curNumber + e;
                return t < 0 && (t += 10), t > 9 && (t -= 10), t
            },
            init: function() {
                var e = JSON.parse(this.dragonAtlasAsset.atlasJson),
                    t = e.name,
                    n = null,
                    i = this._factory.getTextureAtlasData(t),
                    o = this.dragonAtlasAsset.texture;
                if (i && i.length > 0)
                    for (var s in i) {
                        var a = i[s];
                        if (a && a.texture && a.texture.url === o) {
                            n = a;
                            break
                        }
                    }
                var r = cc.textureCache.getTextureForKey(o);
                n ? n.texture = r : this._factory.parseTextureAtlasData(e, r)
            }
        }), cc._RF.pop()
    }, {
        RDBAnimation: "RDBAnimation",
        RMechanismItem: "RMechanismItem"
    }],
    RMDNumberLabel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8fc397S+LJKTYkvrHO2AKwS", "RMDNumberLabel"), cc.Class({
            extends: e("RMechanismDisplay"),
            editor: !1,
            properties: {
                limteNumber: {
                    default: 9,
                    displayName: "LimteNumber",
                    min: 0,
                    tooltip: "\u9650\u5236\u4e0d\u80fd\u8d85\u8fc7\u7684\u6570",
                    type: cc.Integer
                }
            },
            onLoad: function() {
                this._super(), this._label = this.getComponent(cc.Label)
            },
            UpdateDisplay: function(e) {
                e > 0 ? (this._answer += 1, this._answer > this.limteNumber && (this._answer = 0)) : (this._answer -= 1, this._answer < 0 && (this._answer = this.limteNumber)), this._label.string = this._answer + ""
            }
        }), cc._RF.pop()
    }, {
        RMechanismDisplay: "RMechanismDisplay"
    }],
    RMDSwitch: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bbf95KWK39PerWDRZu3PMxQ", "RMDSwitch"), cc.Class({
            extends: e("RMechanismDisplay"),
            editor: !1,
            properties: {
                SpriteFrames: {
                    default: [],
                    displayName: "SpriteFrames",
                    tooltip: "\u7cbe\u7075\u5e8f\u5217\u5e27",
                    type: cc.SpriteFrame
                }
            },
            onLoad: function() {
                this._super(), this._sprite = this.getComponent(cc.Sprite), this._answer = this.SpriteFrames.indexOf(this._sprite.spriteFrame), this._oldAnswer = this._answer
            },
            UpdateDisplay: function(e) {},
            SwitchDisplay: function(e) {
                this._answer = e, this._sprite.spriteFrame = this.SpriteFrames[this._answer]
            },
            GetAnswer: function() {
                return this._answer
            }
        }), cc._RF.pop()
    }, {
        RMechanismDisplay: "RMechanismDisplay"
    }],
    RMEditBoxAnswers: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0aef7PljBlG77PUoviBLb27", "RMEditBoxAnswers"), cc.Class({
            extends: cc.Component,
            properties: {
                answers: {
                    default: "",
                    displayName: "Answers",
                    tooltip: "\u7b54\u6848"
                },
                correct: {
                    default: null,
                    displayName: "CorrectNode",
                    tooltip: "\u7b54\u6848\u6b63\u786e\u7684\u6267\u884c\u8282\u70b9",
                    type: e("RBaseState")
                },
                error: {
                    default: null,
                    displayName: "ErrorNode",
                    tooltip: "\u7b54\u6848\u9519\u8bef\u7684\u6267\u884c\u8282\u70b9",
                    type: e("RBaseState")
                }
            },
            onLoad: function() {},
            ResetAnswers: function() {
                this.answersType == RMAnswersTypeEnum.Fix ? this._data.fill(0) : this._data.length = 0
            },
            CheckAnswers: function(e) {
                e == this.answers ? this._correct() : this._error()
            },
            _correct: function() {
                this.node.emit("RAnswerCorrect"), this._execute(this.correct)
            },
            _error: function() {
                this.node.emit("RAnswerError"), this._execute(this.error)
            },
            _execute: function(e) {
                if (e)
                    for (var t = e.node.getComponents("RBaseState"), n = t.length, i = 0; i < n; ++i) t[i].Execute()
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RMNodeItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9e2bbH3VvtOTqRQd9+x5aej", "RMNodeItem"), cc.Class({
            extends: e("RMechanismItem"),
            editor: !1,
            properties: {
                clickNode: {
                    default: null,
                    displayName: "ClickNode",
                    tooltip: "\u70b9\u51fb\u6309\u94ae",
                    type: cc.Node
                }
            },
            onLoad: function() {
                this._super(), this.clickNode.on(cc.Node.EventType.TOUCH_END, this._clickNode, this)
            },
            Active: function() {
                this.clickNode.resumeSystemEvents()
            },
            UnActive: function() {
                this.clickNode.pauseSystemEvents()
            },
            _clickNode: function(e) {
                e.stopPropagation(), this.node.emit("click", this), this.ClickMBtn(1)
            }
        }), cc._RF.pop()
    }, {
        RMechanismItem: "RMechanismItem"
    }],
    RMToggleItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "282a4Kd8K5Kkp4qrF5pV1IN", "RMToggleItem"), cc.Class({
            extends: e("RMechanismItem"),
            editor: !1,
            properties: {
                display: {
                    default: null,
                    override: !0,
                    visible: !1
                },
                toggle: {
                    default: null,
                    displayName: "Toggle",
                    tooltip: "\u70b9\u51fb\u6309\u94ae",
                    type: cc.Toggle
                }
            },
            onLoad: function() {
                this._super(), this.toggle.node.on("toggle", this._clickBtn, this), this._old = this.toggle.isChecked
            },
            Active: function() {
                this.toggle.node.resumeSystemEvents()
            },
            UnActive: function() {
                this.toggle.node.pauseSystemEvents()
            },
            ResetDisplay: function() {
                this.toggle.isChecked = this._old
            },
            GetAnswer: function() {
                return this.toggle.isChecked ? 0 : 1
            },
            _clickBtn: function(e) {
                this.node.emit("RMechaClick", this)
            }
        }), cc._RF.pop()
    }, {
        RMechanismItem: "RMechanismItem"
    }],
    RMTwowayItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "aab6fqolOhLuq+sFvpB+oWo", "RMTwowayItem"), cc.Class({
            extends: e("RMechanismItem"),
            editor: !1,
            properties: {
                AddBtn: {
                    default: null,
                    displayName: "AddBtn",
                    tooltip: "\u589e\u52a0\u6309\u94ae",
                    type: cc.Button
                },
                SubBtn: {
                    default: null,
                    displayName: "SubBtn",
                    tooltip: "\u51cf\u5c11\u6309\u94ae",
                    type: cc.Button
                }
            },
            onLoad: function() {
                this._super(), this.AddBtn.node.on("click", this._clickAddBtn, this), this.SubBtn.node.on("click", this._clickSubBtn, this)
            },
            Active: function() {
                this.AddBtn.node.resumeSystemEvents(), this.SubBtn.node.resumeSystemEvents()
            },
            UnActive: function() {
                this.AddBtn.node.pauseSystemEvents(), this.SubBtn.node.pauseSystemEvents()
            },
            _clickAddBtn: function(e) {
                this.ClickMBtn(1)
            },
            _clickSubBtn: function(e) {
                this.ClickMBtn(-1)
            }
        }), cc._RF.pop()
    }, {
        RMechanismItem: "RMechanismItem"
    }],
    RMechanismDisplay: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c9bc0AwHnBE6K0THQ66zA1q", "RMechanismDisplay"), cc.Class({
            extends: cc.Component,
            onLoad: function() {
                this._answer = 0, this._isCompleted = !0
            },
            UpdateDisplay: function(e) {},
            SwitchDisplay: function(e) {},
            ResetDisplay: function() {},
            GetAnswer: function() {
                return this._answer
            },
            IsCompleted: function() {
                return this._isCompleted
            },
            IsAnimation: function() {
                return !1
            }
        }), cc._RF.pop()
    }, {}],
    RMechanismItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f5f07ifEA1JeIE1hsodcNKC", "RMechanismItem"), cc.Class({
            extends: cc.Component,
            properties: {
                display: {
                    default: null,
                    displayName: "RMechanismDisplay",
                    tooltip: "\u663e\u793a\u5bf9\u8c61",
                    type: e("RMechanismDisplay")
                },
                _isSelect: !1,
                isSelect: {
                    get: function() {
                        return this._isSelect
                    },
                    set: function(e) {
                        this._isSelect != e && (this._isSelect = e, this.updateSeleteState())
                    },
                    visible: !1
                }
            },
            onLoad: function() {
                this.display && this.display.node.on("RAnimaFinished", this._onRAnimaFinished, this)
            },
            ClickMBtn: function(e) {
                if (this.display) {
                    if (this.display.IsAnimation()) {
                        if (!this.display.IsCompleted()) return;
                        return void this.display.UpdateDisplay(e)
                    }
                    this.display.UpdateDisplay(e)
                }
                this.node.emit("RMechaClick", this)
            },
            SwitchDisplay: function(e) {
                this.display && this.display.SwitchDisplay(e)
            },
            ResetDisplay: function() {
                this.display && this.display.ResetDisplay()
            },
            GetAnswer: function() {
                return this.display ? this.display.GetAnswer() : null
            },
            Active: function() {},
            UnActive: function() {},
            updateSeleteState: function() {
                this.node.emit("RMechanismSelect", this._isSelect)
            },
            _onRAnimaFinished: function(e) {
                this.node.emit("RMechaClick", this)
            }
        }), cc._RF.pop()
    }, {
        RMechanismDisplay: "RMechanismDisplay"
    }],
    RMechanism: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ba8b0nSj2NMS5BY+FqycgHg", "RMechanism"), cc.Class({
            extends: e("RBaseState"),
            editor: {
                menu: "RMechanism/RMechanism",
                requireComponent: e("RMAnswers")
            },
            properties: {
                RMAnswers: {
                    default: null,
                    displayName: "RMAnswers",
                    tooltip: "\u6302\u8f7d\u6709RMAnswers\u7ec4\u4ef6\u7684\u8282\u70b9",
                    type: e("RMAnswers")
                },
                okBtn: {
                    default: null,
                    displayName: "OkBtn",
                    tooltip: "\u786e\u8ba4\u6309\u94ae",
                    type: cc.Button
                },
                restBtn: {
                    default: null,
                    displayName: "RestBtn",
                    tooltip: "\u91cd\u7f6e\u6309\u94ae",
                    type: cc.Button
                },
                deleteOneBtn: {
                    default: null,
                    displayName: "deleteOneBtn",
                    tooltip: "\u5220\u9664\u6309\u94ae",
                    type: cc.Button
                },
                nodes: {
                    default: [],
                    displayName: "Nodes",
                    type: e("RMechanismItem")
                }
            },
            onLoad: function() {
                this._isBan = !1
            },
            onEnable: function() {
                this.node.on("RAnswerCorrect", this._onAnswerCorrect, this), this.node.on("RAnswerError", this._onAnswerError, this), this.okBtn && this.okBtn.node.on("click", this._onOKClick, this), this.restBtn && this.restBtn.node.on("click", this._onRestClick, this), this.deleteOneBtn && this.deleteOneBtn.node.on("click", this._onDeleteOneClick, this);
                for (var e = this.nodes.length, t = 0; t < e; ++t) this.nodes[t].node.on("RMechaClick", this._onRMechaClick, this);
                this._isBan && this.UnBan()
            },
            onDisable: function() {
                this.node.off("RAnswerCorrect", this._onAnswerCorrect, this), this.node.off("RAnswerError", this._onAnswerError, this), this.okBtn && this.okBtn.node.off("click", this._onOKClick, this), this.restBtn && this.restBtn.node.off("click", this._onRestClick, this), this.deleteOneBtn && this.deleteOneBtn.node.off("click", this._onDeleteOneClick, this);
                for (var e = this.nodes.length, t = 0; t < e; ++t) this.nodes[t].node.off("RMechaClick", this._onRMechaClick, this);
                this._isBan && this.UnBan()
            },
            start: function() {
                for (var e, t = this.nodes.length, n = 0; n < t; ++n) {
                    if (null == (e = this.nodes[n].GetAnswer())) return;
                    this.RMAnswers.InitAnswer(n, e)
                }
            },
            Ban: function() {
                this._isBan = !0, this.okBtn && this.okBtn.node.pauseSystemEvents();
                for (var e = this.nodes.length, t = 0; t < e; ++t) this.nodes[t].UnActive()
            },
            UnBan: function() {
                this._isBan = !1, this.okBtn && this.okBtn.node.resumeSystemEvents();
                for (var e = this.nodes.length, t = 0; t < e; ++t) this.nodes[t].Active()
            },
            ResetAnswers: function() {
                this.RMAnswers.ResetAnswers()
            },
            _onAnswerCorrect: function(e) {
                this.Ban()
            },
            _onAnswerError: function() {
                this.okBtn && this.RMAnswers.answersType != RMAnswersTypeEnum.Fix && this.RMAnswers.ResetAnswers()
            },
            _onRMechaClick: function(e) {
                var t = e,
                    n = this.nodes.indexOf(t),
                    i = t.GetAnswer();
                this.RMAnswers.AddAnswer(n, i), this.node.emit("RMechanismOther", t), this.okBtn || this._checkAnswer()
            },
            _onOKClick: function(e) {
                this._checkAnswer()
            },
            _onRestClick: function(e) {
                this.ResetAnswers()
            },
            _onDeleteOneClick: function(e) {
                this.RMAnswers.DeleteOneAnswer()
            },
            _checkAnswer: function() {
                this.RMAnswers.CheckAnswers()
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState",
        RMAnswers: "RMAnswers",
        RMechanismItem: "RMechanismItem"
    }],
    RModeManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c47e0M2J75OcZ37WDBLzNIW", "RModeManager"), t.exports = {
            ModeConfig: null,
            Init: function() {
                var e = SunX.sRes.GetRes("Config/InitConfig.json").json;
                this.ModeConfig = e.Mode
            },
            GetMode: function(e, t) {
                var n = this.ModeConfig[e];
                return cc.js.getClassByName(n).Create(t)
            }
        }, cc._RF.pop()
    }, {}],
    RMoveAnswer: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2be135TQ9FIyK9lJO0ubrrQ", "RMoveAnswer"), cc.Class({
            extends: cc.Component,
            properties: {
                contents: {
                    default: [],
                    displayName: "content",
                    tooltip: "\u5bb9\u5668",
                    type: e("RMoveContent")
                },
                answers: {
                    default: [],
                    tooltip: "\u5bb9\u5668\u4e2d\u6240\u653eitem\u7684index, \u7f16\u53f70\u5f00\u59cb,\u6bcf\u4e00\u4e2a\u4e3a\u4e00\u7ec4\u7b54\u6848\uff0c\u6bcf\u4e2a\u7b54\u6848\u4e4b\u95f4\u7528','\u5206\u9694\uff0c|| \u53ea\u8981\u6709\u4e00\u4e2a\u7b54\u6848\u6b63\u786e\u5c31\u6267\u884cwin",
                    type: cc.String
                },
                disorder: {
                    default: !1,
                    tooltip: "\u7b54\u6848\u662f\u5426\u65e0\u987a\u5e8f"
                },
                win: {
                    default: null,
                    displayName: "win",
                    tooltip: "\u6761\u4ef6\u6ee1\u8db3\u6267\u884c",
                    type: e("RBaseState")
                },
                err: {
                    default: null,
                    displayName: "err",
                    tooltip: "\u6761\u4ef6\u4e0d\u6ee1\u8db3\u6267\u884c",
                    type: e("RBaseState")
                }
            },
            onLoad: function() {},
            check: function() {
                for (var e = !1, t = 0; t < this.answers.length; t++) {
                    e = !0;
                    var n = this.answers[t].split(",");
                    if (this.disorder) {
                        for (var i = 0; i < this.contents.length; i++) {
                            var o = this.contents[i].getIndex().toString();
                            if (!cc.js.array.contains(n, o)) {
                                e = !1;
                                break
                            }
                            for (var s = 0; s < n.length; s++)
                                if (n[s] === o) {
                                    n.splice(s, 1);
                                    break
                                }
                        }
                        if (e) break
                    } else {
                        for (var a = 0; a < this.contents.length; a++)
                            if (this.contents[a].getIndex().toString(), n[a] != this.contents[a].getIndex().toString()) {
                                e = !1;
                                break
                            } if (e) break
                    }
                }
                e ? this._exeNode(this.win) : this._exeNode(this.err)
            },
            _exeNode: function(e) {
                if (e)
                    for (var t = e.getComponents("RBaseState"), n = t.length, i = 0; i < n; ++i) t[i].Execute()
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState",
        RMoveContent: "RMoveContent"
    }],
    RMoveContent: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f0d3eKb0H1HBI7M79ahs6FK", "RMoveContent"), cc.Class({
            extends: cc.Component,
            properties: {
                itemNode: {
                    default: [],
                    tooltip: "\u548cGame\u4e2d\u7684Items\u4e00\u4e00\u5bf9\u5e94",
                    type: cc.Node
                }
            },
            onLoad: function() {
                this.mIndex = -1, this.updateUI()
            },
            setIndex: function(e) {
                this.mIndex = e, this.updateUI()
            },
            getIndex: function() {
                return this.mIndex
            },
            updateUI: function() {
                for (var e = this.itemNode.length, t = 0; t < e; t++) this.itemNode[t].active = t === this.mIndex
            }
        }), cc._RF.pop()
    }, {}],
    RMoveGame: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ebe5dM6cuxDKbHKTEJwOXfM", "RMoveGame"), cc.Class({
            extends: e("RGame"),
            properties: {
                Items: {
                    default: [],
                    type: e("RMoveItem")
                },
                contentNode: {
                    default: [],
                    tooltip: "\u653e\u7f6eItem\u7684\u5bb9\u5668\uff0csize\u4e0d\u80fd\u4e3a0",
                    type: e("RMoveContent")
                },
                Answers: {
                    default: [],
                    tooltip: "\u7b54\u6848",
                    type: e("RMoveAnswer")
                }
            },
            onLoad: function() {
                for (var e = 0; e < this.Items.length; e++) {
                    var t = this.Items[e].node;
                    this.Items[e].setLocalZOrder(e), t.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this), t.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this)
                }
            },
            start: function() {},
            _onTouchMove: function(e) {
                e.stopPropagation()
            },
            _onTouchEnd: function(e) {
                for (var t, n = e.target, i = n.getComponent("RMoveItem"), o = n.getPosition(), s = !1, a = 0, r = null; a < this.contentNode.length; a++) {
                    if (this.contentNode[a].node.getBoundingBox().contains(o)) {
                        s = !0, t = this.contentNode[a].node.getPosition(), r = this.contentNode[a];
                        break
                    }
                }
                var c = i.getIndex();
                if (-1 != c && c != a && this.contentNode[c].setIndex(-1), s && this.checkContentIsEmpty(a)) {
                    var l = this.Items.indexOf(i);
                    this.contentNode[a].setIndex(l), i.setPosAndIndex(t, a, r)
                } else i.RestItemState();
                this.checkCondition(), e.stopPropagation()
            },
            checkContentIsEmpty: function(e) {
                for (var t in this.Items)
                    if (this.Items[t].getIndex() === e) return !1;
                return !0
            },
            checkCondition: function() {
                if (this.Answers)
                    for (var e = 0; e < this.Answers.length; e++) this.Answers[e].check()
            }
        }), cc._RF.pop()
    }, {
        RGame: "RGame",
        RMoveAnswer: "RMoveAnswer",
        RMoveContent: "RMoveContent",
        RMoveItem: "RMoveItem"
    }],
    RMoveItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f52e2hw5NVO+KZa+5IDFm/g", "RMoveItem"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.content = null, this.mZorder = this.node.zIndex, this.mPos = this.node.position, this.mIndex = -1, this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this), this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCanel, this), this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this)
            },
            _onTouchStart: function(e) {
                this.node.zIndex = 1e3, this.startPos = this.node.position
            },
            _onTouchCanel: function(e) {
                this.node.zIndex = this.mZorder, this.node.position = this.startPos
            },
            _onTouchEnd: function(e) {
                this.node.zIndex = this.mZorder
            },
            _onTouchMove: function(e) {
                var t = e.touch;
                if (t.getLocation().sub(t.getStartLocation()).mag() > 50) {
                    var n = this.node.parent.convertToNodeSpaceAR(t.getLocation());
                    this.node.setPosition(n), this.content && (this.content.setIndex(-1), this.content.updateUI(), this.node.opacity = 255)
                }
            },
            setLocalZOrder: function(e) {
                this.mZorder = e, this.node.zIndex = e
            },
            setPosAndIndex: function(e, t, n) {
                this.node.setPosition(e), this.mIndex = t, this.content = n, this.node.opacity = 0
            },
            RestItemState: function() {
                this.node.setPosition(this.mPos), this.node.opacity = 255, this.mIndex = -1, this.content && (this.content.setIndex(-1), this.content.updateUI(), this.content = null)
            },
            getIndex: function() {
                return this.mIndex
            }
        }), cc._RF.pop()
    }, {}],
    RNodeFadeInToOut: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "942d3yKGf9DkrlwR9X9W/OP", "RNodeFadeInToOut"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.node.on("click", this.onClick, this)
            },
            onClick: function() {
                this.node.runAction(cc.sequence(cc.fadeIn(.1), cc.fadeOut(.1)))
            }
        }), cc._RF.pop()
    }, {}],
    RNullState: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "58db4Gl661IU648zft5wNb4", "RNullState"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                }
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RObtainProp: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4365cm7L/VKVYlyCEk3xKKP", "RObtainProp"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                PropID: {
                    default: 0,
                    displayName: "PropID",
                    tooltip: "\u9053\u5177ID"
                },
                SpirteFrame: {
                    default: null,
                    displayName: "SpirteFrame",
                    tooltip: "\u9053\u5177\u98de\u884c\u7684\u56fe\u7247",
                    type: cc.SpriteFrame
                },
                isInit: {
                    default: !1,
                    displayName: "isInit",
                    tooltip: "ture\u65f6\u4e0d\u4f1a\u5f39\u51fa\u83b7\u5f97\u9053\u5177\u9762\u677f\u548c\u64ad\u653e\u58f0\u97f3"
                }
            },
            Execute: function() {
                if (this.isInit) SunX.sEventManager.ExecuteEvent(RGlobalRequest.PropObtain, this.PropID);
                else {
                    var e = this.node.position;
                    e = this.node.parent.convertToWorldSpaceAR(e);
                    var t = {
                        ID: this.PropID,
                        Pos: e,
                        Img: this.SpirteFrame
                    };
                    SunX.sEventManager.ExecuteEvent(REvent.Prop_Obtain, t)
                }
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    ROpacityState: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "07eb90rczBArYtJyUEc0xpK", "ROpacityState"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                Opacity: {
                    default: 0,
                    displayName: "Opacity",
                    tooltip: "\u8282\u70b9\u900f\u660e\u5ea6",
                    range: [0, 255],
                    type: cc.Integer
                }
            },
            Execute: function() {
                this.targetNode.opacity = this.Opacity
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RPositionState: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "09d2faDcCpCzJ+/WlGtpg+h", "RPositionState"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                pos: {
                    default: new cc.Vec2,
                    displayName: "Position",
                    tooltip: "\u8282\u70b9\u5750\u6807"
                }
            },
            Execute: function() {
                this.targetNode.setPosition(this.pos)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RRemoveProp: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "edab3OtvChNObsO0P5QOGu5", "RRemoveProp"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                PropIDs: {
                    default: [],
                    displayName: "PropIDs",
                    tooltip: "\u9700\u8981\u79fb\u9664\u9053\u5177ID\u6570\u7ec4",
                    type: cc.Integer
                }
            },
            Execute: function() {
                0 != this.PropIDs.length && SunX.sEventManager.ExecuteEvent(RGlobalRequest.PropMultiRemove, this.PropIDs)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RShowPropClose: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f8188x1KiNFe7NOUfbm/bLr", "RShowPropClose"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                }
            },
            Execute: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.ShowPopup)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RSoundState: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2bd92AdK7BMGKDMThyyNf7B", "RSoundState"), cc.Class({
            extends: e("RBaseState"),
            editor: {
                menu: "RoomX/StateExe/RSoundState",
                requireComponent: e("SoundEffectCom")
            },
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                }
            },
            onLoad: function() {
                this.soundCom = this.getComponent("SoundEffectCom")
            },
            Execute: function() {
                this.soundCom && this.soundCom.Play()
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState",
        SoundEffectCom: "SoundEffectCom"
    }],
    RSoundVo: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d385cWD4G5HKaXY/8WVjOo6", "RSoundVo");
        var i = cc.Class({
            name: "RSoundVo",
            properties: {
                audioClip: {
                    default: null,
                    type: cc.AudioClip,
                    displayName: "AudioClip"
                }
            },
            GetURL: function() {
                return this.audioClip ? this._url ? this._url : (this._url = this.audioClip, this._url) : ""
            },
            GetPath: function() {
                return this.audioClip.nativeUrl
            }
        });
        t.exports = i, cc._RF.pop()
    }, {}],
    RSound: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "9a24aQoc8tOZIYCij/igEn4", "RSound"), cc.Class({
            extends: cc.Component,
            properties: {
                audioClip: {
                    default: null,
                    type: cc.AudioClip,
                    displayName: "AudioClip"
                }
            },
            onLoad: function() {
                this._url = this.audioClip
            }
        }), cc._RF.pop()
    }, {}],
    RStateDataCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "614e7yATR1OcZ9pwYDvQQwF", "RStateDataCom"), cc.Class({
            extends: cc.Component,
            editor: !1,
            properties: {},
            onLoad: function() {
                this._stateData = null, this.node.on("RStateDataInit", this._initData, this)
            },
            GetStateData: function() {},
            _initData: function(e) {
                void 0 !== e && (this._stateData = e)
            }
        }), cc._RF.pop()
    }, {}],
    RStateMachineCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8ac16Vr+l5I7Ju1qW0/fJos", "RStateMachineCom"), cc.Class({
            extends: cc.Component,
            editor: !1,
            properties: {
                _curState: {
                    default: null,
                    type: e("RBaseState")
                },
                curState: {
                    type: e("RBaseState"),
                    get: function() {
                        return this._curState
                    },
                    set: function(e) {},
                    displayName: "CurState",
                    tooltip: "\u521d\u59cb\u72b6\u6001"
                },
                states: {
                    default: [],
                    displayName: "States",
                    tooltip: "\u72b6\u6001\u5217\u8868",
                    type: e("RBaseState")
                }
            },
            onLoad: function() {
                SunX.sEventManager.AddEvent(REvent.GItem_UpdateState, this._onGItemUpdateState, this), SunX.sEventManager.AddEvent(REvent.GItem_ToggleState, this._onGItemToogleState, this), SunX.sEventManager.AddEvent(RGlobalResponse.GItemState, this._rpGItemState, this), this._oldState = null, this._changeState = !1
            },
            onDestroy: function() {
                SunX.sEventManager.RemoveAllEvent(this), this._oldState = null
            },
            start: function() {
                SunX.sEventManager.ExecuteEvent(RGlobalRequest.GItemState, this.node.name)
            },
            _rpGItemState: function(e) {
                if (e.data.nodeName == this.node.name) {
                    var t = e.data.stateVo;
                    t && (this._curState = this._getState(t.curStateName), this.node.emit("RStateDataInit", t.stateData)), this._changeState = !0
                }
            },
            _onGItemToogleState: function(e) {
                e.data.nodeName == this.node.name && this._toogleState(e.data.stateName)
            },
            _toogleState: function(e) {
                var t, n;
                if (this._curState.node.name != e)
                    if ("next" != e) {
                        if ("next_loop" == e) return null == (t = this._getNextState()) && this.states.length > 1 && (t = this.states[0]), void(null != t && (null == this._oldState && (this._oldState = this._curState), this._curState = t, this._changeState = !0));
                        if ("prev" != e) {
                            if ("prev_loop" == e) return null == (n = this._getNextState()) && this.states.length > 1 && (n = this.states[this.states.length - 1]), void(null != n && (null == this._oldState && (this._oldState = this._curState), this._curState = n, this._changeState = !0));
                            null == this._oldState && (this._oldState = this._curState), this._curState = this._getState(e), this._changeState = !0
                        } else null != (n = this._getNextState()) && (null == this._oldState && (this._oldState = this._curState), this._curState = n, this._changeState = !0)
                    } else null != (t = this._getNextState()) && (null == this._oldState && (this._oldState = this._curState), this._curState = t, this._changeState = !0)
            },
            _getNextState: function() {
                for (var e = this.states.length, t = 0; t < e - 1; ++t)
                    if (this.states[t] == this._curState) return this.states[t + 1];
                return null
            },
            _getPrevState: function() {
                for (var e = this.states.length, t = 1; t < e; ++t)
                    if (this.states[t] == this._curState) return this.states[t - 1];
                return null
            },
            _onGItemUpdateState: function(e) {
                if (this._changeState) {
                    this._changeState = !1, this._oldState && (this._oldState.node.active = !1, this._oldState = null), this._curState.node.active = !0;
                    for (var t = this._curState.node.getComponents("RBaseState"), n = t.length, i = 0; i < n; ++i) t[i].Execute()
                }
            },
            _getState: function(e) {
                for (var t, n = this.states.length, i = 0; i < n; ++i)
                    if ((t = this.states[i]).node.name == e) return t
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RStateToggle: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "070a66n169Lk5+ECKGSs6KM", "RStateToggle"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                ToggleNodeName: {
                    default: "",
                    displayName: "NodeName",
                    tooltip: "\u7269\u54c1\u7684\u540d\u79f0"
                },
                ToggleStateName: {
                    default: "",
                    displayName: "StateName",
                    tooltip: "\u7269\u54c1\u5207\u6362\u7684\u72b6\u6001\u540d\u79f0\uff0c'next'\u4e0b\u4e00\u4e2a\u72b6\u6001,\u2018next_loop'\u4e0b\u4e00\u4e2a\u72b6\u6001\u5faa\u73af,'prev'\u4e0a\u4e00\u4e2a\u72b6\u6001,'prev_loop'\u4e0a\u4e00\u4e2a\u72b6\u6001\u5faa\u73af"
                },
                isSaveState: {
                    default: !1,
                    displayName: "isSave",
                    tooltip: "\u662f\u5426\u8981\u4fdd\u5b58\u7269\u54c1\u7684\u72b6\u6001"
                },
                isExe: {
                    default: !0,
                    displayName: "isExe",
                    tooltip: "\u662f\u5426\u8981\u6267\u884c\u5207\u6362\u72b6\u6001"
                }
            },
            Execute: function() {
                var e;
                this.isExe && (e = {
                    nodeName: this.ToggleNodeName,
                    stateName: this.ToggleStateName
                }, SunX.sEventManager.ExecuteEvent(REvent.GItem_ToggleState, e)), this.isSaveState && (e = {
                    nodeName: this.ToggleNodeName,
                    dataObj: this.ToggleStateName
                }, SunX.sEventManager.ExecuteEvent(RGlobalRequest.StateUpdate, e))
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RSwitchCondition: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "c123f/sDF9NU6QJS+soWSvt", "RSwitchCondition");
        var i = e("RDataManager").SP,
            o = cc.Class({
                name: "RSwitchItem",
                properties: {
                    conditions: {
                        default: [],
                        displayName: "Conditions",
                        tooltip: "\u5224\u65ad\u6761\u4ef6",
                        type: cc.String
                    },
                    exeNode: {
                        default: null,
                        displayName: "ExeNode",
                        tooltip: "\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                        type: e("RBaseState")
                    }
                }
            });
        cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                switchItem: {
                    default: [],
                    displayName: "SwitchItem",
                    tooltip: "\u6761\u4ef6\u9009\u62e9\u6267\u884c,conditions\u6709\u5305\u542b\u5173\u7cfb\u7684\uff0c\u5305\u542b\u7684\u5fc5\u987b\u5728\u524d\uff0c\u88ab\u5305\u542b\u7684\u5fc5\u987b\u5728\u540e\uff0c\u524d\u9762\u6709\u4e00\u6761\u4ef6\u6ee1\u8db3\u540e\u9762\u90fd\u4e0d\u4f1a\u518d\u6267\u884c",
                    type: o
                },
                defaultExeNode: {
                    default: null,
                    displayName: "DefaultExeNode",
                    tooltip: "\u4e0d\u6ee1\u8db3\u6761\u4ef6\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                }
            },
            onLoad: function() {},
            Execute: function() {
                for (var e = !0, t = i.m_DataItem.condition, n = this.switchItem.length, o = 0; o < n; o++) {
                    for (var s = !0, a = this.switchItem[o].conditions.length, r = 0; r < a; r++)
                        if (!t.hasOwnProperty(this.switchItem[o].conditions[r])) {
                            s = !1;
                            break
                        } if (s) {
                        e = !1, this.ExecuteNode(this.switchItem[o].exeNode);
                        break
                    }
                }
                e && this.ExecuteNode(this.defaultExeNode)
            },
            ExecuteNode: function(e) {
                if (e)
                    for (var t = e.getComponents("RBaseState"), n = t.length, i = 0; i < n; ++i) t[i].Execute()
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState",
        RDataManager: "RDataManager"
    }],
    RSwitchMechanism: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a3a9bLEmNFObZfvuGxkE4Hp", "RSwitchMechanism"), cc.Class({
            extends: e("RBaseState"),
            editor: {
                menu: "RMechanism/RSwitchMechanism",
                requireComponent: e("RMAnswers")
            },
            properties: {
                RMAnswers: {
                    default: null,
                    displayName: "RMAnswers",
                    tooltip: "\u6302\u8f7d\u6709RMAnswers\u7ec4\u4ef6\u7684\u8282\u70b9",
                    type: e("RMAnswers")
                },
                okBtn: {
                    default: null,
                    displayName: "OkBtn",
                    tooltip: "\u786e\u8ba4\u6309\u94ae",
                    type: cc.Button
                },
                nodes: {
                    default: [],
                    displayName: "Nodes",
                    type: e("RMechanismItem")
                }
            },
            onLoad: function() {
                this._isBan = !1, this._selectNode = null
            },
            onEnable: function() {
                this.node.on("RAnswerCorrect", this._onAnswerCorrect, this), this.node.on("RAnswerError", this._onAnswerError, this), this.okBtn && this.okBtn.node.on("click", this._onOKClick, this);
                for (var e = this.nodes.length, t = 0; t < e; ++t) this.nodes[t].node.on("RMechaClick", this._onRMechaClick, this);
                this._isBan && this.UnBan()
            },
            onDisable: function() {
                this.node.off("RAnswerCorrect", this._onAnswerCorrect, this), this.node.off("RAnswerError", this._onAnswerError, this), this.okBtn && this.okBtn.node.off("click", this._onOKClick, this);
                for (var e = this.nodes.length, t = 0; t < e; ++t) this.nodes[t].node.off("RMechaClick", this._onRMechaClick, this);
                this._isBan && this.UnBan()
            },
            start: function() {
                for (var e = this.nodes.length, t = 0; t < e; ++t) this.RMAnswers.InitAnswer(t, this.nodes[t].GetAnswer())
            },
            Ban: function() {
                this._isBan = !0, this.okBtn && this.okBtn.node.pauseSystemEvents();
                for (var e = this.nodes.length, t = 0; t < e; ++t) this.nodes[t].UnActive()
            },
            UnBan: function() {
                this._isBan = !1, this.okBtn && this.okBtn.node.resumeSystemEvents();
                for (var e = this.nodes.length, t = 0; t < e; ++t) this.nodes[t].Active()
            },
            _onAnswerCorrect: function(e) {
                this.Ban()
            },
            _onAnswerError: function() {
                this.okBtn && this.RMAnswers.answersType != RMAnswersTypeEnum.Fix && this.RMAnswers.ResetAnswers()
            },
            _onRMechaClick: function(e) {
                var t = e,
                    n = this.nodes.indexOf(t);
                if (null == this._selectNode) t.isSelect = !0, this._selectNode = t;
                else if (this._selectNode == t) t.isSelect = !1, this._selectNode = null;
                else {
                    var i = this._selectNode.GetAnswer();
                    if (this.RMAnswers.AddAnswer(n, i), this._selectNode.SwitchDisplay(t.GetAnswer()), n = this.nodes.indexOf(this._selectNode), this.RMAnswers.AddAnswer(n, t.GetAnswer()), t.SwitchDisplay(i), this._selectNode.isSelect = !1, this._selectNode = null, this.okBtn) return;
                    this._checkAnswer()
                }
            },
            _onOKClick: function(e) {
                this._checkAnswer()
            },
            _checkAnswer: function() {
                this.RMAnswers.CheckAnswers()
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState",
        RMAnswers: "RMAnswers",
        RMechanismItem: "RMechanismItem"
    }],
    RTXClose: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "36dd8Us35pGi5GOD9t1DkFo", "RTXClose"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                closeTXNode: {
                    default: null,
                    displayName: "CloseTXNode",
                    tooltip: "\u5173\u95ed\u7279\u5199\u7684\u8282\u70b9",
                    type: e("TXViewCom")
                },
                isLogic: {
                    default: !1,
                    displayName: "IsLogic",
                    tooltip: "\u7279\u5199\u5173\u95ed\u4e4b\u540e\u662f\u5426\u8981\u6267\u884c\u5176\u4ed6\u884c\u4e3a"
                },
                tagName: {
                    default: "",
                    displayName: "TagName",
                    tooltip: "\u6302\u8f7dTXCloseLogicCom\u7ec4\u4ef6\u7684\u8282\u70b9\u540d\u5b57"
                },
                exeNodeName: {
                    default: "",
                    displayName: "ExeNodeName",
                    tooltip: "\u6267\u884c\u8282\u70b9\u7684\u540d\u5b57"
                }
            },
            Execute: function() {
                if (this.isLogic) {
                    var e = {
                        tagName: this.tagName,
                        exeNodeName: this.exeNodeName
                    };
                    this.closeTXNode.ExeCloseLogic(e)
                }
                this.closeTXNode.ClickCloseBtn()
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState",
        TXViewCom: "TXViewCom"
    }],
    RTXOpen: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "62c09mzoMVAd57vAyvO7zMs", "RTXOpen"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                txPrefab: {
                    default: null,
                    displayName: "TXPrefab",
                    tooltip: "\u6253\u5f00\u7684\u9884\u5236\u8d44\u6e90",
                    type: cc.Prefab
                }
            },
            Execute: function() {
                var e = cc.instantiate(this.txPrefab),
                    t = this.targetNode.parent.convertToWorldSpaceAR(this.targetNode.getPosition());
                e.position = t, SunX.sEventManager.ExecuteEvent(REvent.Scene_TXOpen, e)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RTipLevel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "13642sbtptBgYxzpaIo7UmZ", "RTipLevel"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                tipLevel: {
                    default: 1,
                    displayName: "TipLevel",
                    tooltip: "\u63d0\u793a\u7b49\u7ea7",
                    range: [1, 99],
                    type: cc.Integer
                }
            },
            Execute: function() {
                SunX.sEventManager.ExecuteEvent(RGlobalRequest.TipLevel, this.tipLevel)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RTipsManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "133d9uQXIFJ3Z9K3lUpiAIO", "RTipsManager");
        var i = cc.Class({
            ctor: function() {
                this._tipsHash = {}, this._textTipsHash = {}
            },
            Init: function() {
                var t, n, i = e("RDBConfigManager").SP,
                    o = i.GetRCfgMgr(RConfigID.BookTip).m_Hash;
                for (var s in o) t = o[s], (n = this._tipsHash[t.Level]) || (n = [], this._tipsHash[t.Level] = n), n.push(t);
                var a, r = i.GetRCfgMgr(RConfigID.TextTip).m_Hash;
                for (var c in r) a = r[c], this._textTipsHash[a.Level] = a.TextTip
            },
            GetLevelTips: function(e) {
                return this._tipsHash[e]
            },
            GetLevelTextTips: function(e) {
                return this._textTipsHash[e]
            }
        });
        t.exports = {
            SP: new i
        }, cc._RF.pop()
    }, {
        RDBConfigManager: "RDBConfigManager"
    }],
    RToggle: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ebd9boGNH1G9K5pcr4/O68n", "RToggle"), cc.Class({
            extends: cc.Toggle,
            editor: !1,
            properties: {
                checkMark: {
                    default: null,
                    type: cc.Sprite,
                    override: !0,
                    displayName: "Check"
                },
                background: {
                    default: null,
                    type: cc.Sprite,
                    displayName: "NoCheck"
                }
            },
            _updateCheckMark: function() {
                this.checkMark && (this.checkMark.enabled = !!this.isChecked), this.background && (this.background.enabled = !this.isChecked)
            }
        }), cc._RF.pop()
    }, {}],
    RTouchControl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "319922AZsZIoKulaWt50Qd4", "RTouchControl"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                touchEnable: !0
            },
            Execute: function() {
                SunX.sEventManager.ExecuteEvent(REvent.StageTouchControl, this.touchEnable)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RTouchState: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f2694byuSVFRqmwyZM1fDYK", "RTouchState"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                touchStartExeNode: {
                    default: null,
                    displayName: "TouchStartExeNode",
                    tooltip: "TouchStart\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                },
                touchEndExeNode: {
                    default: null,
                    displayName: "TouchEndExeNode",
                    tooltip: "TouchEnd\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                }
            },
            onLoad: function() {},
            onEnable: function() {
                this.targetNode.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this), this.targetNode.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this)
            },
            onDisable: function() {
                this.targetNode.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this), this.targetNode.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this)
            },
            _onTouchStart: function(e) {
                if (e.stopPropagation(), this.touchStartExeNode) {
                    for (var t = this.touchStartExeNode.getComponents("RBaseState"), n = !1, i = t.length, o = 0; o < i && (t[o].Execute(), !(n = t[o].GetStop())); ++o);
                    n && e.stopPropagationImmediate()
                }
            },
            _onTouchEnd: function(e) {
                if (e.stopPropagation(), this.touchEndExeNode) {
                    for (var t = this.touchEndExeNode.getComponents("RBaseState"), n = !1, i = t.length, o = 0; o < i && (t[o].Execute(), !(n = t[o].GetStop())); ++o);
                    n && e.stopPropagationImmediate()
                }
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RTouchSwallow: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "da4939nYQJMvYNoMopbZUn+", "RTouchSwallow"), cc.Class({
            extends: cc.Component,
            onEnable: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this)
            },
            onDisable: function() {
                this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this)
            },
            _onTouchBegan: function(e) {
                e.stopPropagation()
            }
        }), cc._RF.pop()
    }, {}],
    RUIManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ab4b2OOV4xIBLL7FS5CnrPS", "RUIManager");
        var i = e("BagPanelCtrl"),
            o = e("GameUIPanelCtrl"),
            s = e("BookPopupCtrl"),
            a = e("SetUpPanelCtrl"),
            r = e("SetUpPopupCtrl"),
            c = e("ShopPanelCtrl"),
            l = e("ShowPopupCtrl"),
            u = e("TipWarnPanelCtrl"),
            d = e("ADSPanelCtrl"),
            h = e("GameOverPanelCtrl"),
            p = e("GetItemPanelCtrl"),
            m = e("HelpPanelCtrl"),
            g = cc.Class({
                ctor: function() {
                    this.m_UIHash = {}
                },
                _registerEvent: function() {
                    SunX.sEventManager.AddEvent(REvent.UIShow, this._onShow, this), SunX.sEventManager.AddEvent(REvent.UIHide, this._onHide, this), SunX.sEventManager.AddEvent(REvent.GameScene_Created, this._onCreated, this), SunX.sEventManager.AddEvent(REvent.GameScene_Destroy, this._onDestroy, this)
                },
                _registerUIPanel: function() {
                    this.m_UIHash[RUIID.BagPanel] = new i(RUIID.BagPanel), this.m_UIHash[RUIID.GameUIPanel] = new o(RUIID.GameUIPanel), this.m_UIHash[RUIID.BookPopup] = new s(RUIID.BookPopup), this.m_UIHash[RUIID.SetUpPanel] = new a(RUIID.SetUpPanel), this.m_UIHash[RUIID.SetUpPopup] = new r(RUIID.SetUpPopup), this.m_UIHash[RUIID.ShopPanel] = new c(RUIID.ShopPanel), this.m_UIHash[RUIID.ShowPopup] = new l(RUIID.ShowPopup), this.m_UIHash[RUIID.TipWarnPanel] = new u(RUIID.TipWarnPanel), this.m_UIHash[RUIID.ADSPanel] = new d(RUIID.ADSPanel), this.m_UIHash[RUIID.GameOverPanel] = new h(RUIID.GameOverPanel), this.m_UIHash[RUIID.GetItemPanel] = new p(RUIID.GetItemPanel), this.m_UIHash[RUIID.HelpPanel] = new m(RUIID.HelpPanel)
                },
                Init: function() {
                    this.m_RUIRelationShipManager = e("RUIRelationShipManager").SP, this._registerEvent(), this._registerUIPanel()
                },
                RegisterUIPanel: function(e, t) {
                    this.m_UIHash[e] = t
                },
                GetUICtrl: function(e) {
                    return this.m_UIHash[e]
                },
                CreateMainUI: function() {
                    var e = this.GetUICtrl(RUIID.BagPanel),
                        t = this.GetUICtrl(RUIID.GameUIPanel),
                        n = this.GetUICtrl(RUIID.ShowPopup),
                        i = this.GetUICtrl(RUIID.GameOverPanel),
                        o = this.GetUICtrl(RUIID.GetItemPanel);
                    e.CreateUI(), t.CreateUI(), n.CreateUI(), i.CreateUI(), o.CreateUI()
                },
                DestroyMainUI: function() {
                    var e = this.GetUICtrl(RUIID.BagPanel),
                        t = this.GetUICtrl(RUIID.GameUIPanel),
                        n = this.GetUICtrl(RUIID.ShowPopup),
                        i = this.GetUICtrl(RUIID.GameOverPanel),
                        o = this.GetUICtrl(RUIID.GetItemPanel);
                    e.DestroyUI(), t.DestroyUI(), n.DestroyUI(), i.DestroyUI(), o.DestroyUI()
                },
                ShowUI: function(e) {
                    var t = this.GetUICtrl(e);
                    t && (t.Show() ? t.IsUIRelationShip() && this.m_RUIRelationShipManager.IsHasOpenPanel(e) : t.CreateUI())
                },
                HideUI: function(e) {
                    var t = this.GetUICtrl(e);
                    t && t.IsShow() && (t.Hide(), t.IsUIRelationShip() && this.m_RUIRelationShipManager.RemovePanel(e))
                },
                _onShow: function(e) {
                    this.ShowUI(e.data)
                },
                _onHide: function(e) {
                    this.HideUI(e.data)
                },
                _onCreated: function(e) {
                    this.CreateMainUI()
                },
                _onDestroy: function(e) {
                    for (var t in this.m_UIHash) this.m_UIHash[t].DestroyUI()
                }
            });
        t.exports = {
            SP: new g
        }, cc._RF.pop()
    }, {
        ADSPanelCtrl: "ADSPanelCtrl",
        BagPanelCtrl: "BagPanelCtrl",
        BookPopupCtrl: "BookPopupCtrl",
        GameOverPanelCtrl: "GameOverPanelCtrl",
        GameUIPanelCtrl: "GameUIPanelCtrl",
        GetItemPanelCtrl: "GetItemPanelCtrl",
        HelpPanelCtrl: "HelpPanelCtrl",
        RUIRelationShipManager: "RUIRelationShipManager",
        SetUpPanelCtrl: "SetUpPanelCtrl",
        SetUpPopupCtrl: "SetUpPopupCtrl",
        ShopPanelCtrl: "ShopPanelCtrl",
        ShowPopupCtrl: "ShowPopupCtrl",
        TipWarnPanelCtrl: "TipWarnPanelCtrl"
    }],
    RUIRelationShipManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5a0515a3QBJyIZnD3oMwLbN", "RUIRelationShipManager");
        var o = cc.Class({
            ctor: function() {
                this.m_UIRelationList = []
            },
            Init: function() {
                this.m_RDBConfigManager = e("RDBConfigManager").SP, this.m_RUIManager = e("RUIManager").SP, this.m_UIRelationShipMgr = this.m_RDBConfigManager.GetRCfgMgr(RConfigID.UIRelationShip)
            },
            IsHasOpenPanel: function(e) {
                var t = this.m_UIRelationShipMgr.GetValue(e);
                if (t) {
                    var n = this.m_UIRelationList.length;
                    if (n > 0) {
                        for (var o, s, a = 0; a < n; ++a) e != (o = this.m_UIRelationList[a]) && -1 == t.SharePanelID.indexOf(o) && (s = this.m_RUIManager.GetUICtrl(o)) && s.IsShow() && s.Hide();
                        this.m_UIRelationList.length = 0, Array.prototype.push.apply(this.m_UIRelationList, t.SharePanelID)
                    }
                    if (this.m_UIRelationList.push(e), 0 != (n = t.OpenPanelID.length) && 0 != t.OpenPanelID[0])
                        for (var r, c = 0; c < n; ++c) r = t.OpenPanelID[i], this.m_UIRelationList.push(r), this.m_RUIManager.ShowUI(r)
                }
            },
            RemovePanel: function(e) {
                var t = this.m_UIRelationList.indexOf(e); - 1 != t && this.m_UIRelationList.splice(t, 1)
            }
        });
        t.exports = {
            SP: new o
        }, cc._RF.pop()
    }, {
        RDBConfigManager: "RDBConfigManager",
        RUIManager: "RUIManager"
    }],
    RUIShowOrHideEvent: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ec72c4gjm1Ck6wgu/W77g8X", "RUIShowOrHideEvent");
        var i = cc.Enum({
            None: 0,
            BagPanel: 1,
            MBagNode: 2,
            MBookNode: 3,
            BookPopup: 4,
            SetUpPanel: 5,
            SetUpPopup: 6,
            ShopPanel: 7,
            ShowPopup: 8,
            TipWarnPanel: 9,
            ADSPanel: 10,
            MMoreNode: 11,
            GameOverPanel: 12
        });
        cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                },
                uiid: {
                    type: i,
                    default: i.None
                },
                showExeNode: {
                    default: null,
                    displayName: "ShowExeNode",
                    tooltip: "UI\u9762\u677f\u6253\u5f00\u65f6\u6267\u884c(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                },
                hideExeNode: {
                    default: null,
                    displayName: "HideExeNode",
                    tooltip: "UI\u5173\u95ed\u65f6\u6267\u884c(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                }
            },
            onEnable: function() {
                SunX.sEventManager.AddEvent(REvent.UIShow, this._onShow, this), SunX.sEventManager.AddEvent(REvent.UIHide, this._onHide, this)
            },
            onDisable: function() {
                SunX.sEventManager.RemoveAllEvent(this)
            },
            _onShow: function(e) {
                this.uiid == e.data && this.ExecuteNode(this.showExeNode)
            },
            _onHide: function(e) {
                this.uiid == e.data && this.ExecuteNode(this.hideExeNode)
            },
            Execute: function() {}
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RUseMultiProp: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3dcfa5XkH9K0rzp/FjIuD1Y", "RUseMultiProp"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                useID: {
                    default: "",
                    displayName: "UseID",
                    tooltip: "\u9053\u5177\u4f7f\u7528\u5bf9\u8c61ID,\u5bf9\u5e94\u7b56\u5212\u8868\u4e2d\u7684UserTarget\u5b57\u6bb5"
                },
                exeNodeMap: {
                    default: [],
                    displayName: "ExeNodeMap",
                    tooltip: "\u591a\u53ef\u6267\u884c\u8282\u70b9\u6570\u7ec4",
                    type: e("UseMultiVo")
                }
            },
            onDestroy: function() {
                this._entry = null
            },
            onLoad: function() {
                this._entry = {}, this._entry.targetNode = this.targetNode, this._entry.useID = this.useID, this._entry.isDelete = this.isDele, this._entry.handle = this._toolUse.bind(this)
            },
            onEnable: function() {
                SunX.sEventManager.ExecuteEvent(REvent.Tool_AddHit, this._entry)
            },
            onDisable: function() {
                SunX.sEventManager.ExecuteEvent(REvent.Tool_RemoveHit, this._entry)
            },
            Execute: function() {},
            GetStop: function() {
                return this._isStop
            },
            _toolUse: function(e) {
                this._isStop = !0;
                var t = this.exeNodeMap.length;
                if (0 != t) {
                    var n = this._findUseMultiVo(e);
                    if (n.isDele && SunX.sEventManager.ExecuteEvent(RGlobalRequest.PropMultiRemove, [e]), null != n.exeNode) {
                        var i = n.exeNode.getComponents("RBaseState");
                        t = i.length;
                        for (var o = 0; o < t; ++o) i[o].Execute()
                    }
                }
            },
            _findUseMultiVo: function(e) {
                for (var t = this.exeNodeMap.length, n = null, i = 0; i < t; ++i)
                    if (e == (n = this.exeNodeMap[i]).propID) return n;
                return null
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState",
        UseMultiVo: "UseMultiVo"
    }],
    RUseProp: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "cb3d4T2Dk9CLIazjQuryI31", "RUseProp");
        e("RBagManager").SP;
        cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                isDele: {
                    default: !0,
                    displayName: "IsDele",
                    tooltip: "\u9053\u5177\u4f7f\u7528\u4e4b\u540e\u662f\u5426\u5728\u80cc\u5305\u4e2d\u5220\u9664"
                },
                useID: {
                    default: "",
                    displayName: "UseID",
                    tooltip: "\u9053\u5177\u4f7f\u7528\u5bf9\u8c61ID,\u5bf9\u5e94\u7b56\u5212\u8868\u4e2d\u7684UserTarget\u5b57\u6bb5"
                },
                exeNode: {
                    default: null,
                    displayName: "ExeNode",
                    tooltip: "\u4f7f\u7528\u9053\u5177\u6210\u529f\u7684\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                },
                hitExeNode: {
                    default: null,
                    displayName: "HitExeNode",
                    tooltip: "\u79fb\u52a8\u9053\u5177\u5230\u76ee\u6807\u4f4d\u7f6e\u9a6c\u4e0a\u6267\u884c",
                    type: e("RBaseState")
                }
            },
            onDestroy: function() {
                this._entry = null
            },
            onLoad: function() {
                this._entry = {}, this._entry.targetNode = this.targetNode, this._entry.useID = this.useID, this._entry.isDelete = this.isDele, this._entry.handle = this._toolUse.bind(this), this._entry.maskNode = this.getComponent("TestMask") ? this.node : null
            },
            onEnable: function() {
                SunX.sEventManager.ExecuteEvent(REvent.Tool_AddHit, this._entry), SunX.sEventManager.AddEvent(REvent.DragHit, this._DragHit, this)
            },
            onDisable: function() {
                SunX.sEventManager.ExecuteEvent(REvent.Tool_RemoveHit, this._entry), SunX.sEventManager.RemoveAllEvent(this)
            },
            _DragHit: function(e) {
                e.data == this.useID && this._executeNode(this.hitExeNode)
            },
            Execute: function() {},
            GetStop: function() {
                return this._isStop
            },
            _toolUse: function(e) {
                this._isStop = !0, this._executeNode(this.exeNode)
            },
            _executeNode: function(e) {
                if (e)
                    for (var t = e.getComponents("RBaseState"), n = t.length, i = 0; i < n; ++i) t[i].Execute()
            }
        }), cc._RF.pop()
    }, {
        RBagManager: "RBagManager",
        RBaseState: "RBaseState"
    }],
    RVisibleState: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "4744cYLUnVIk75BEG/1R7wp", "RVisibleState"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                isVisible: {
                    default: !0,
                    displayName: "IsVisible",
                    tooltip: "\u662f\u5426\u663e\u793a\u7269\u54c1"
                }
            },
            Execute: function() {
                this.targetNode.active = this.isVisible
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    RWinLevel: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2bd3b+Yv81OKLIOGI1wYZjg", "RWinLevel"), cc.Class({
            extends: e("RBaseState"),
            editor: !1,
            properties: {
                targetNode: {
                    default: null,
                    displayName: "Target",
                    tooltip: "\u7269\u54c1\u8282\u70b9",
                    type: cc.Node,
                    override: !0,
                    visible: !1
                }
            },
            Execute: function() {
                SunX.sEventManager.ExecuteEvent(RGlobalRequest.WinLevel)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    SXADSPluginAndroid: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "18605JppIlMbKKRY//cNWmB", "SXADSPluginAndroid");
        var i = this && this.__extends || function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function i() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(t, e), t.prototype.Create = function(e) {
                jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "ADSWrapperCreate", "(Ljava/lang/String;)V", e)
            }, t.prototype.CreateCustom = function(e, t, n, i, o) {
                jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "ADSWrapperCreateCustom", "(Ljava/lang/String;IIII)V", e, t, n, i, o)
            }, t.prototype.LoadAds = function(e) {
                jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "ADSWrapperLoadAds", "(Ljava/lang/String;)V", e)
            }, t.prototype.ShowAds = function(e) {
                jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "ADSWrapperShowAds", "(Ljava/lang/String;)V", e)
            }, t.prototype.HideAds = function(e) {
                jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "ADSWrapperHideAds", "(Ljava/lang/String;)V", e)
            }, t.prototype.AdsIsReady = function(e) {
                return jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "ADSWrapperAdsIsReady", "(Ljava/lang/String;)Z", e)
            }, t.prototype.ForceUpdatePosition = function(e, t, n) {
                jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "ADSWrapperForceUpdatePosition", "(Ljava/lang/String;II)V", e, t, n)
            }, t.prototype.Destory = function(e) {
                jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "ADSWrapperDestory", "(Ljava/lang/String;)V", e)
            }, t.prototype.IsPermission = function(e) {
                return jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "ADSWrapperAdsIsPermission", "(Ljava/lang/String;)Z", e)
            }, t.prototype.HasAds = function(e) {
                return !0
            }, t
        }(e("../SXADSPlugin").SXADSPlugin);
        n.SXADSPluginAndroid = o, cc._RF.pop()
    }, {
        "../SXADSPlugin": "SXADSPlugin"
    }],
    SXADSPluginIOS: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5580fhDM7BLtbvUOtWd7bLe", "SXADSPluginIOS");
        var i = this && this.__extends || function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function i() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(t, e), t.prototype.Create = function(e) {
                jsb.reflection.callStaticMethod("SXPLCreator", "SXPL_SXPLADSWrapper_Create:", e)
            }, t.prototype.CreateCustom = function(e, t, n, i, o) {
                jsb.reflection.callStaticMethod("SXPLCreator", "SXPL_SXPLADSWrapper_CreateCustom:X:Y:Width:Height:", e, t, n, i, o)
            }, t.prototype.LoadAds = function(e) {
                jsb.reflection.callStaticMethod("SXPLCreator", "SXPL_SXPLADSWrapper_LoadAds:", e)
            }, t.prototype.ShowAds = function(e) {
                jsb.reflection.callStaticMethod("SXPLCreator", "SXPL_SXPLADSWrapper_ShowAds:", e)
            }, t.prototype.HideAds = function(e) {
                jsb.reflection.callStaticMethod("SXPLCreator", "SXPL_SXPLADSWrapper_HideAds:", e)
            }, t.prototype.AdsIsReady = function(e) {
                return jsb.reflection.callStaticMethod("SXPLCreator", "SXPL_SXPLADSWrapper_AdsIsReady:", e)
            }, t.prototype.ForceUpdatePosition = function(e, t, n) {
                jsb.reflection.callStaticMethod("SXPLCreator", "SXPL_SXPLADSWrapper_ForceUpdatePosition:X:Y:", e, t, n)
            }, t.prototype.Destory = function(e) {}, t.prototype.IsPermission = function(e) {
                return !0
            }, t.prototype.HasAds = function(e) {
                return !0
            }, t
        }(e("../SXADSPlugin").SXADSPlugin);
        n.SXADSPluginIOS = o, cc._RF.pop()
    }, {
        "../SXADSPlugin": "SXADSPlugin"
    }],
    SXADSPluginWeb: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "1e89fPyGedLnL/Eytg1PhB1", "SXADSPluginWeb");
        var i = this && this.__extends || function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function i() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.m_SXADSWarpper = t, n
            }
            return i(t, e), t.prototype.Create = function(e) {
                this.m_SXADSWarpper.Create(e)
            }, t.prototype.CreateCustom = function(e, t, n, i, o) {
                this.m_SXADSWarpper.CreateCustom(e, t, n, i, o)
            }, t.prototype.LoadAds = function(e) {
                this.m_SXADSWarpper.LoadAds(e)
            }, t.prototype.ShowAds = function(e) {
                this.m_SXADSWarpper.ShowAds(e)
            }, t.prototype.HideAds = function(e) {
                this.m_SXADSWarpper.HideAds(e)
            }, t.prototype.AdsIsReady = function(e) {
                return this.m_SXADSWarpper.AdsIsReady(e)
            }, t.prototype.ForceUpdatePosition = function(e, t, n) {
                this.m_SXADSWarpper.ForceUpdatePosition(e, t, n)
            }, t.prototype.Destory = function(e) {
                this.m_SXADSWarpper.Destory(e)
            }, t.prototype.IsPermission = function(e) {
                return this.m_SXADSWarpper.IsPermission(e)
            }, t.prototype.HasAds = function(e) {
                return this.m_SXADSWarpper.HasAds(e)
            }, t
        }(e("../SXADSPlugin").SXADSPlugin);
        n.SXADSPluginWeb = o, cc._RF.pop()
    }, {
        "../SXADSPlugin": "SXADSPlugin"
    }],
    SXADSPlugin: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "dc892FKeyRJNatnB3Vf8reo", "SXADSPlugin"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            return function() {}
        }();
        n.SXADSPlugin = i, cc._RF.pop()
    }, {}],
    SXAdsManager: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ac237ha+klJfL91hoZmR8ZT", "SXAdsManager"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("./SXAdsUnit"),
            o = e("../SXPluginSDK/SXPluginSDKMgr"),
            s = e("../SXPluginSDK/SXPluginSDKUtils"),
            a = e("./SXRewardedvideoUnit"),
            r = function() {
                function e() {
                    this.m_RemoveAds = !1, this.OnRewardedVideoEvent = null, this.m_ADSUnits = new Map
                }
                return Object.defineProperty(e, "SP", {
                    get: function() {
                        return null == this.m_Instance && (this.m_Instance = new e), this.m_Instance
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.Init = function(e, t, n) {
                    o.SXPluginSDKMgr.InitADS(t, n), o.SXPluginSDKMgr.ADSListener = this;
                    for (var i = e.length, s = 0; s < i; ++s) !e[s].IsRewardedVideoAds && this.m_RemoveAds || (e[s].Create(), e[s].Load(), this.m_ADSUnits.set(e[s].AdsID, e[s]))
                }, e.prototype.HasAds = function(e) {
                    return this.m_SXAdsUnit = this.m_ADSUnits.get(e), !!this.m_SXAdsUnit && this.m_SXAdsUnit.HasAds
                }, e.prototype.ShowAds = function(e, t) {
                    this.m_SXAdsUnit = this.m_ADSUnits.get(e);
                    var n = i.SXAdsCode.Null;
                    if (this.m_SXAdsUnit && (n = this.m_SXAdsUnit.ShowAds(), t)) {
                        var o = s.SXPluginSDKUtils.GetCustomBannerPosition(t);
                        this.m_SXAdsUnit.ForceUpdatePosition(o.x, o.y)
                    }
                    return n
                }, e.prototype.HideAds = function(e) {
                    this.m_SXAdsUnit = this.m_ADSUnits.get(e), this.m_SXAdsUnit && this.m_SXAdsUnit.HideAds()
                }, e.prototype.IsShow = function(e) {
                    return this.m_SXAdsUnit = this.m_ADSUnits.get(e), !!this.m_SXAdsUnit && this.m_SXAdsUnit.IsShow()
                }, e.prototype.AdsIsReady = function(e) {
                    return this.m_SXAdsUnit = this.m_ADSUnits.get(e), !!this.m_SXAdsUnit && this.m_SXAdsUnit.AdsIsReady()
                }, e.prototype.AdsIsPermission = function(e) {
                    return this.m_SXAdsUnit = this.m_ADSUnits.get(e), !!this.m_SXAdsUnit && this.m_SXAdsUnit.IsPermission()
                }, e.prototype.ForceUpdatePosition = function(e, t, n) {
                    this.m_SXAdsUnit = this.m_ADSUnits.get(e), this.m_SXAdsUnit && this.m_SXAdsUnit.ForceUpdatePosition(t, n)
                }, e.prototype.onRemoveADS = function(e, t) {
                    for (var n in this.m_RemoveAds = !0, this.m_ADSUnits) {
                        var i = this.m_ADSUnits[n];
                        i instanceof a.SXRewardedvideoUnit || (i.Destory(), this.m_ADSUnits.delete(n))
                    }
                }, e.prototype.onAdLoaded = function(e) {
                    cc.error("SXADS onAdLoaded:" + e), this.m_SXAdsUnit = this.m_ADSUnits.get(e), this.m_SXAdsUnit && this.m_SXAdsUnit.onAdLoaded()
                }, e.prototype.onAdFailedToLoad = function(e, t) {
                    cc.error("SXADS onAdFailedToLoad:" + e + " err: " + t), this.m_SXAdsUnit = this.m_ADSUnits.get(e), this.m_SXAdsUnit && this.m_SXAdsUnit.onAdFailedToLoad()
                }, e.prototype.onAdStarted = function(e) {
                    this.m_SXAdsUnit = this.m_ADSUnits.get(e), this.m_SXAdsUnit && this.m_SXAdsUnit.onAdStarted()
                }, e.prototype.onAdOpened = function(e) {
                    this.m_SXAdsUnit = this.m_ADSUnits.get(e), this.m_SXAdsUnit && this.m_SXAdsUnit.onAdOpened()
                }, e.prototype.onAdClosed = function(e) {
                    this.m_SXAdsUnit = this.m_ADSUnits.get(e), this.m_SXAdsUnit && this.m_SXAdsUnit.onAdClosed()
                }, e.prototype.onAdLeftApplication = function(e) {
                    this.m_SXAdsUnit = this.m_ADSUnits.get(e), this.m_SXAdsUnit && this.m_SXAdsUnit.onAdLeftApplication()
                }, e.prototype.onAdRewarded = function(e, t, n) {
                    this.m_SXAdsUnit = this.m_ADSUnits.get(e), this.m_SXAdsUnit && this.m_SXAdsUnit.onAdRewarded(t)
                }, e.prototype.onAdCompleted = function(e) {
                    this.m_SXAdsUnit = this.m_ADSUnits.get(e), this.m_SXAdsUnit && this.m_SXAdsUnit.onAdCompleted()
                }, e.m_Instance = null, e
            }();
        n.SXAdsManager = r, cc._RF.pop()
    }, {
        "../SXPluginSDK/SXPluginSDKMgr": "SXPluginSDKMgr",
        "../SXPluginSDK/SXPluginSDKUtils": "SXPluginSDKUtils",
        "./SXAdsUnit": "SXAdsUnit",
        "./SXRewardedvideoUnit": "SXRewardedvideoUnit"
    }],
    SXAdsUnit: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "643ffkVnEBP5oy4L3sxUWEx", "SXAdsUnit"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i, o = e("../SXPluginSDK/SXPluginSDKMgr");
        (function(e) {
            e[e.None = 0] = "None", e[e.Null = 1] = "Null", e[e.NoPermission = 2] = "NoPermission", e[e.NoReady = 3] = "NoReady", e[e.OK = 4] = "OK", e[e.Error = 5] = "Error"
        })(i = n.SXAdsCode || (n.SXAdsCode = {}));
        var s = function() {
            function e(e, t) {
                this.m_ReLoadTime = 30, this.m_ReLoading = !1, this.m_IsShow = !1, this.m_AdsID = e, this.m_IsRewardedVideoAds = t, cc.director.getScheduler().enableForTarget(this)
            }
            return e.prototype.Create = function() {
                this.m_SXADSPlugin = o.SXPluginSDKMgr.SXADSPlugin, this.m_SXADSPlugin.Create(this.m_AdsID), cc.director.getScheduler().schedule(this.timerSchedule, this, this.m_ReLoadTime, !1)
            }, e.prototype.timerSchedule = function() {
                this.m_ReLoading = !1
            }, e.prototype.Load = function() {
                this.m_SXADSPlugin.LoadAds(this.m_AdsID)
            }, e.prototype.SetReLoadTime = function(e) {
                this.m_ReLoadTime = e
            }, e.prototype.ShowAds = function() {
                return i.None
            }, e.prototype.HideAds = function() {
                this.m_IsShow = !1, this.m_SXADSPlugin.HideAds(this.m_AdsID)
            }, e.prototype.IsShow = function() {
                return this.m_IsShow
            }, e.prototype.AdsIsReady = function() {
                return !!this.m_SXADSPlugin.AdsIsReady(this.m_AdsID) || (this.TimerLoadAds(), !1)
            }, e.prototype.ForceUpdatePosition = function(e, t) {
                this.m_SXADSPlugin.ForceUpdatePosition(this.m_AdsID, e, t)
            }, e.prototype.Destory = function() {
                this.m_SXADSPlugin.Destory(this.m_AdsID)
            }, e.prototype.IsPermission = function() {
                return this.m_SXADSPlugin.IsPermission(this.m_AdsID)
            }, Object.defineProperty(e.prototype, "HasAds", {
                get: function() {
                    return this.m_SXADSPlugin.HasAds(this.m_AdsID)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.onAdLoaded = function() {
                this.m_IsFailed = !1
            }, e.prototype.onAdFailedToLoad = function() {
                this.m_IsFailed = !0, this.TimerLoadAds()
            }, e.prototype.onAdOpened = function() {}, e.prototype.onAdClosed = function() {}, e.prototype.onAdLeftApplication = function() {}, e.prototype.onAdStarted = function() {}, e.prototype.onAdRewarded = function(e) {}, e.prototype.onAdCompleted = function() {}, Object.defineProperty(e.prototype, "IsRewardedVideoAds", {
                get: function() {
                    return this.m_IsRewardedVideoAds
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "AdsID", {
                get: function() {
                    return this.m_AdsID
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "IsFailed", {
                get: function() {
                    return this.m_IsFailed
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.TimerLoadAds = function() {
                this.m_ReLoading || (this.m_ReLoading = !0, this.Load())
            }, e
        }();
        n.SXAdsUnit = s, cc._RF.pop()
    }, {
        "../SXPluginSDK/SXPluginSDKMgr": "SXPluginSDKMgr"
    }],
    SXAdsWebListener: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "51831TVFyJOSK00Dof9N2y6", "SXAdsWebListener"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("../SXPluginSDKMgr"),
            o = function() {
                function e() {}
                return e.prototype.onAdLoaded = function(e) {
                    i.SXPluginSDKMgr.ADSListener.onAdLoaded(e)
                }, e.prototype.onAdFailedToLoad = function(e, t) {
                    i.SXPluginSDKMgr.ADSListener.onAdFailedToLoad(e, t)
                }, e.prototype.onAdStarted = function(e) {
                    i.SXPluginSDKMgr.ADSListener.onAdStarted(e)
                }, e.prototype.onAdOpened = function(e) {
                    i.SXPluginSDKMgr.ADSListener.onAdOpened(e)
                }, e.prototype.onAdClosed = function(e) {
                    i.SXPluginSDKMgr.ADSListener.onAdClosed(e)
                }, e.prototype.onAdLeftApplication = function(e) {
                    i.SXPluginSDKMgr.ADSListener.onAdLeftApplication(e)
                }, e.prototype.onAdRewarded = function(e, t, n) {
                    i.SXPluginSDKMgr.ADSListener.onAdRewarded(e, t, n)
                }, e.prototype.onAdCompleted = function(e) {
                    i.SXPluginSDKMgr.ADSListener.onAdCompleted(e)
                }, e
            }();
        n.SXAdsWebListener = o, cc._RF.pop()
    }, {
        "../SXPluginSDKMgr": "SXPluginSDKMgr"
    }],
    SXAnalysisPluginAndroid: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2fbe4KRLzFEKb2+rGO2qVGk", "SXAnalysisPluginAndroid");
        var i = this && this.__extends || function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function i() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(t, e), t.prototype.CustomEvent = function(e, t) {
                var n = "";
                t.size > 0 && (n = JSON.stringify(t)), jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "AnalysisWrapperCustomEvent", "(Ljava/lang/String;Ljava/lang/String;)V", e, n)
            }, t.prototype.onBegin = function(e) {
                jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "AnalysisWrapperOnBegin", "(Ljava/lang/String;)V", e)
            }, t.prototype.onCompleted = function(e) {
                jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "AnalysisWrapperOnCompleted", "(Ljava/lang/String;)V", e)
            }, t.prototype.onFaild = function(e, t) {
                jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "AnalysisWrapperOnFaild", "(Ljava/lang/String;Ljava/lang/String;)V", e, t)
            }, t
        }(e("../SXAnalysisPlugin").SXAnalysisPlugin);
        n.SXAnalysisPluginAndroid = o, cc._RF.pop()
    }, {
        "../SXAnalysisPlugin": "SXAnalysisPlugin"
    }],
    SXAnalysisPluginIOS: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2862eV1a+5IF5Gdq07M4YfK", "SXAnalysisPluginIOS");
        var i = this && this.__extends || function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function i() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(t, e), t.prototype.CustomEvent = function(e, t) {
                var n = "";
                t.size > 0 && (n = JSON.stringify(t)), jsb.reflection.callStaticMethod("SXPLCreator", "SXPL_SXPLAnalysisWrapper_CustomEvent:JsonData:", e, n)
            }, t.prototype.onBegin = function(e) {
                jsb.reflection.callStaticMethod("SXPLCreator", "SXPL_SXPLAnalysisWrapper_onBegin:", e)
            }, t.prototype.onCompleted = function(e) {
                jsb.reflection.callStaticMethod("SXPLCreator", "SXPL_SXPLAnalysisWrapper_onCompleted:", e)
            }, t.prototype.onFaild = function(e, t) {
                jsb.reflection.callStaticMethod("SXPLCreator", "SXPL_SXPLAnalysisWrapper_onFaild:failedCause:", e, t)
            }, t
        }(e("../SXAnalysisPlugin").SXAnalysisPlugin);
        n.SXAnalysisPluginIOS = o, cc._RF.pop()
    }, {
        "../SXAnalysisPlugin": "SXAnalysisPlugin"
    }],
    SXAnalysisPlugin: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0b745WfHL5Ar563lLAeJ0tJ", "SXAnalysisPlugin"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            return function() {}
        }();
        n.SXAnalysisPlugin = i, cc._RF.pop()
    }, {}],
    SXBannerUnit: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "de9cf22IXdPPab3SS8ECmP5", "SXBannerUnit");
        var i = this && this.__extends || function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function i() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./SXAdsUnit"),
            s = function(e) {
                function t(t) {
                    var n = e.call(this, t, !1) || this;
                    return cc.director.on("SXInterstitial_Show", function() {
                        n.m_IsShow && n.m_SXADSPlugin.HideAds(n.m_AdsID)
                    }), cc.director.on("SXInterstitial_Hide", function() {
                        n.m_IsShow && n.m_SXADSPlugin.ShowAds(n.m_AdsID)
                    }), n
                }
                return i(t, e), t.prototype.ShowAds = function() {
                    return this.m_IsShow = !0, this.m_SXADSPlugin.ShowAds(this.m_AdsID), o.SXAdsCode.None
                }, t
            }(o.SXAdsUnit);
        n.SXBannerUnit = s, cc._RF.pop()
    }, {
        "./SXAdsUnit": "SXAdsUnit"
    }],
    SXInterstitialUnit: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "2daa4rU2wBCNKjhHniqHGV0", "SXInterstitialUnit");
        var i = this && this.__extends || function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function i() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./SXAdsUnit"),
            s = function(e) {
                function t(t) {
                    var n = e.call(this, t, !1) || this;
                    return n.m_FullTime = 0, n.m_CurTime = 0, n
                }
                return i(t, e), t.prototype.ShowAds = function() {
                    var e = o.SXAdsCode.None;
                    return this.m_TimeFullAuto ? e : (this.m_FullTime > 0 ? this.m_TimeFull && (e = this.showInterstitial(), o.SXAdsCode.OK == e && (this.m_TimeFull = !1, this.m_Timing = !0)) : e = this.showInterstitial(), e)
                }, t.prototype.Init = function(e, t) {
                    void 0 === t && (t = -1), this.m_TimeFullAuto = e, this.m_FullTime = t, this.m_FullTime > 0 && (this.m_Timing = !0, cc.director.getScheduler().schedule(this.interstitialTime, this, 0, cc.macro.REPEAT_FOREVER, 0, !1))
                }, t.prototype.interstitialTime = function(e) {
                    if (this.m_Timing && (this.m_CurTime += e, this.m_CurTime >= this.m_FullTime)) {
                        if (this.m_TimeFullAuto) {
                            if (this.IsFailed) return;
                            if (this.showInterstitial() != o.SXAdsCode.OK) return
                        } else this.m_TimeFull = !0, this.m_Timing = !1;
                        this.m_CurTime = 0
                    }
                }, t.prototype.showInterstitial = function() {
                    var e = o.SXAdsCode.NoReady;
                    return this.AdsIsReady() && (this.m_SXADSPlugin.ShowAds(this.m_AdsID), e = o.SXAdsCode.OK), e
                }, t.prototype.onAdLoaded = function() {
                    e.prototype.onAdLoaded.call(this)
                }, t.prototype.onAdFailedToLoad = function() {
                    e.prototype.onAdFailedToLoad.call(this)
                }, t.prototype.onAdClosed = function() {
                    cc.director.emit("SXInterstitial_Hide"), this.Load()
                }, t.prototype.onAdOpened = function() {
                    cc.director.emit("SXInterstitial_Show")
                }, t
            }(o.SXAdsUnit);
        n.SXInterstitialUnit = s, cc._RF.pop()
    }, {
        "./SXAdsUnit": "SXAdsUnit"
    }],
    SXOtherSDKPluginAndroid: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "98928aRKHJPirAYmCqfF18D", "SXOtherSDKPluginAndroid");
        var i = this && this.__extends || function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function i() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(t, e), t.prototype.CustomMethod = function(e, t) {
                jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "OtherSDKWrapperCustomMethod", "(Ljava/lang/String;Ljava/lang/String;)V", e, t)
            }, t
        }(e("../SXOtherSDKPlugin").SXOtherSDKPlugin);
        n.SXOtherSDKPluginAndroid = o, cc._RF.pop()
    }, {
        "../SXOtherSDKPlugin": "SXOtherSDKPlugin"
    }],
    SXOtherSDKPlugin: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "647f29lKvdNJ5s3lz6gcccd", "SXOtherSDKPlugin"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.prototype.CustomMethod = function(e, t) {}, e
        }();
        n.SXOtherSDKPlugin = i, cc._RF.pop()
    }, {}],
    SXPluginSDKAndroid: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b843cpqvftHDqLeo6Cxrqgb", "SXPluginSDKAndroid");
        var i = this && this.__extends || function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function i() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../SXSystem"),
            s = e("./SXADSPluginAndroid"),
            a = e("./SXAnalysisPluginAndroid"),
            r = e("./SXOtherSDKPluginAndroid"),
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i(t, e), t.prototype.InitADS = function(e, t) {
                    jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "InitADS", "(Ljava/lang/String;F)Z", e, t) && (this.m_SXADSPlugin = new s.SXADSPluginAndroid)
                }, t.prototype.InitAnalysis = function(e) {
                    jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "InitAnalysis", "(Ljava/lang/String;)Z", e) && (this.m_SXAnalysisPlugin = new a.SXAnalysisPluginAndroid)
                }, t.prototype.InitOtherSDK = function(e) {
                    jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDKCreator", "InitOtherSDK", "(Ljava/lang/String;)Z", e) && (this.m_SXOtherSDKPlugin = new r.SXOtherSDKPluginAndroid)
                }, t.prototype.ExiteGame = function() {
                    jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDK", "ExiteGame", "()V")
                }, Object.defineProperty(t.prototype, "ChannelName", {
                    get: function() {
                        return jsb.reflection.callStaticMethod("com/sunx/sxpluginsdk/SXPluginSDK", "GetChannelName", "()Ljava/lang/String;")
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "ServerAddress", {
                    get: function() {
                        return ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "SXADSPlugin", {
                    get: function() {
                        return this.m_SXADSPlugin
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "SXAnalysisPlugin", {
                    get: function() {
                        return this.m_SXAnalysisPlugin
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "SXOtherSDKPlugin", {
                    get: function() {
                        return this.m_SXOtherSDKPlugin
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(o.SXSystem);
        n.SXPluginSDKAndroid = c, cc._RF.pop()
    }, {
        "../SXSystem": "SXSystem",
        "./SXADSPluginAndroid": "SXADSPluginAndroid",
        "./SXAnalysisPluginAndroid": "SXAnalysisPluginAndroid",
        "./SXOtherSDKPluginAndroid": "SXOtherSDKPluginAndroid"
    }],
    SXPluginSDKIOS: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "86218EMt2lBYaHW/HV3u6UW", "SXPluginSDKIOS");
        var i = this && this.__extends || function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function i() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../SXSystem"),
            s = e("./SXADSPluginIOS"),
            a = e("./SXAnalysisPluginIOS"),
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i(t, e), t.prototype.InitADS = function(e, t) {
                    jsb.reflection.callStaticMethod("SXPLCreator", "SXPL_SXPluginSDK_InitADSListener"), jsb.reflection.callStaticMethod("SXPLCreator", "SXPL_SXPluginSDK_InitADS:ScaleFactor:Channel:", e, t, "appstore") && (this.m_SXADSPlugin = new s.SXADSPluginIOS)
                }, t.prototype.InitAnalysis = function(e) {
                    jsb.reflection.callStaticMethod("SXPLCreator", "SXPL_SXPluginSDK_InitAnalysis:Channel:", e, "appstore") && (this.m_SXAnalysisPlugin = new a.SXAnalysisPluginIOS)
                }, t.prototype.InitOtherSDK = function(e) {}, Object.defineProperty(t.prototype, "ChannelName", {
                    get: function() {
                        return "appstore"
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "ServerAddress", {
                    get: function() {
                        return ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "SXADSPlugin", {
                    get: function() {
                        return this.m_SXADSPlugin
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "SXAnalysisPlugin", {
                    get: function() {
                        return this.m_SXAnalysisPlugin
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "SXOtherSDKPlugin", {
                    get: function() {
                        return null
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(o.SXSystem);
        n.SXPluginSDKIOS = r, cc._RF.pop()
    }, {
        "../SXSystem": "SXSystem",
        "./SXADSPluginIOS": "SXADSPluginIOS",
        "./SXAnalysisPluginIOS": "SXAnalysisPluginIOS"
    }],
    SXPluginSDKMgr: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "5af9buCu6lMMaKUmZBNciYn", "SXPluginSDKMgr"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.Init = function(e) {
                if (null == e) throw new Error("System is Null");
                this.m_System = e
            }, e.InitADS = function(e, t) {
                this.m_System && this.m_System.InitADS(e, t)
            }, e.InitAnalysis = function(e) {
                this.m_System && this.m_System.InitAnalysis(e)
            }, e.InitOtherSDK = function(e) {
                this.m_System && this.m_System.InitOtherSDK(e)
            }, e.ExiteGame = function() {
                this.m_System && this.m_System.ExiteGame()
            }, e.SetAppPauseOnBackground = function(e) {
                this.m_System && this.m_System.SetAppPauseOnBackground(e)
            }, Object.defineProperty(e, "ADSListener", {
                get: function() {
                    return this.m_ADSListener
                },
                set: function(e) {
                    this.m_ADSListener = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "ChannelName", {
                get: function() {
                    return this.m_System && this.m_System.ChannelName
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "ServerAddress", {
                get: function() {
                    return this.m_System && this.m_System.ServerAddress
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "SXADSPlugin", {
                get: function() {
                    return this.m_System && this.m_System.SXADSPlugin
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "SXAnalysisPlugin", {
                get: function() {
                    return this.m_System && this.m_System.SXAnalysisPlugin
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e, "SXOtherSDKPlugin", {
                get: function() {
                    return this.m_System && this.m_System.SXOtherSDKPlugin
                },
                enumerable: !0,
                configurable: !0
            }), e
        }();
        n.SXPluginSDKMgr = i, window.SXPluginSDKMgr = i, cc._RF.pop()
    }, {}],
    SXPluginSDKUtils: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "0a042URE/9I96PK3kPWMMyP", "SXPluginSDKUtils"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.GetCustomBannerPosition = function(e) {
                return e
            }, e
        }();
        n.SXPluginSDKUtils = i, cc._RF.pop()
    }, {}],
    SXPluginSDKWeb: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "90e25WLRzdF95zZgGIRMhUK", "SXPluginSDKWeb");
        var i = this && this.__extends || function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function i() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("../SXSystem"),
            s = e("./SXAdsWebListener"),
            a = e("./SXADSPluginWeb"),
            r = window.SXPluginSDKWebLib,
            c = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i(t, e), t.prototype.InitADS = function(e, t) {
                    this.m_SXADSListener = new s.SXAdsWebListener;
                    var n = r.SXPluginSDK.InitAds(e, t, this.m_SXADSListener);
                    this.m_SXADSPlugin = new a.SXADSPluginWeb(n)
                }, t.prototype.InitAnalysis = function(e) {}, t.prototype.InitOtherSDK = function(e) {}, Object.defineProperty(t.prototype, "ChannelName", {
                    get: function() {
                        return r ? r.SXPluginSDK.GetChannelName() : "webreview"
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "ServerAddress", {
                    get: function() {
                        return r ? r.SXPluginSDK.GetServerAddress() : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "SXADSPlugin", {
                    get: function() {
                        return this.m_SXADSPlugin
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "SXAnalysisPlugin", {
                    get: function() {
                        return null
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "SXOtherSDKPlugin", {
                    get: function() {
                        return null
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(o.SXSystem);
        n.SXPluginSDKWeb = c, cc._RF.pop()
    }, {
        "../SXSystem": "SXSystem",
        "./SXADSPluginWeb": "SXADSPluginWeb",
        "./SXAdsWebListener": "SXAdsWebListener"
    }],
    SXRewardedvideoUnit: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "7e6deBxU51Gco4aIWpPD1+/", "SXRewardedvideoUnit");
        var i = this && this.__extends || function() {
            var e = function(t, n) {
                return (e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(t, n)
            };
            return function(t, n) {
                function i() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
            }
        }();
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = e("./SXAdsUnit"),
            s = e("./SXAdsManager"),
            a = function(e) {
                function t(t) {
                    return e.call(this, t, !0) || this
                }
                return i(t, e), t.prototype.ShowAds = function() {
                    return this.m_SXADSPlugin.IsPermission(this.m_AdsID) ? this.AdsIsReady() ? (this.m_SXADSPlugin.ShowAds(this.m_AdsID), o.SXAdsCode.OK) : o.SXAdsCode.NoReady : o.SXAdsCode.NoPermission
                }, t.prototype.onAdLoaded = function() {
                    e.prototype.onAdLoaded.call(this)
                }, t.prototype.onAdFailedToLoad = function() {
                    e.prototype.onAdFailedToLoad.call(this)
                }, t.prototype.onAdClosed = function() {
                    this.Load()
                }, t.prototype.onAdStarted = function() {}, t.prototype.onAdRewarded = function(e) {
                    this.rewardedVideoOver("complete" == e)
                }, t.prototype.rewardedVideoOver = function(e) {
                    null != s.SXAdsManager.SP.OnRewardedVideoEvent && (s.SXAdsManager.SP.OnRewardedVideoEvent(e), s.SXAdsManager.SP.OnRewardedVideoEvent = null)
                }, t
            }(o.SXAdsUnit);
        n.SXRewardedvideoUnit = a, cc._RF.pop()
    }, {
        "./SXAdsManager": "SXAdsManager",
        "./SXAdsUnit": "SXAdsUnit"
    }],
    SXSystem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "80736FJi3hGSKsXv4fDymFK", "SXSystem"), Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.prototype.SetAppPauseOnBackground = function(e) {}, e.prototype.ExiteGame = function() {}, e
        }();
        n.SXSystem = i, cc._RF.pop()
    }, {}],
    SelectItemView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "24ee5aMQ7FL27yZnqdg0cW/", "SelectItemView");
        e("RDataManager").SP;
        cc.Class({
            extends: cc.Component,
            properties: {
                img: cc.Sprite,
                lock: cc.Node,
                pass: cc.Node,
                go: cc.Node,
                level: {
                    default: 1,
                    range: [1, 30],
                    type: cc.Integer
                },
                txt: cc.Label,
                xx: [cc.Node],
                light: [cc.Node],
                key: cc.Node,
                video: cc.Node
            },
            onLoad: function() {
                this._isSelect = !1
            },
            Init: function(e, t, n, i, o, s) {
                this.level = e, this.txt.string = e + "", t ? (this.go.active = !0, this.img.setMaterial(0, cc.MaterialVariant.createWithBuiltin("2d-sprite", this))) : (this.go.active = !1, this.img.setMaterial(0, cc.MaterialVariant.createWithBuiltin("2d-gray-sprite", this))), this.pass.active = n, this.img.spriteFrame = i;
                for (var a = this.xx.length, r = 0; r < a; r++) this.xx[r].active = r < o, this.light[r].active = r < s
            },
            isSelect: function() {
                return this._isSelect
            }
        }), cc._RF.pop()
    }, {
        RDataManager: "RDataManager"
    }],
    SelectLevelLogic: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3617c32/GJFkZd0eKYL1tXG", "SelectLevelLogic");
        var i = e("RDBConfigManager").SP,
            o = e("RDataManager").SP,
            s = e("RGameManager").SP;
        window.RoomXLevelVo = {
            curPage: 0
        }, cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                SunX.sEventManager.AddEvent(REvent.Select_Level, this.onSelectLevel, this), this._RCfgLevel = i.GetRCfgMgr(RConfigID.Level), this.C_Items = [];
                var e, t = this._RCfgLevel.GetHash();
                for (var n in t) null != (e = t[n]).Order && this.C_Items.push(e);
                this.C_Items.sort(this.sortLevel), this._viewCom = this.getComponent("SelectLevelView"), this._viewCom.CreatePageItem(this.C_Items, o.m_DataItem.levels)
            },
            onDestroy: function() {
                SunX.sEventManager.RemoveAllEvent(this)
            },
            onSelectLevel: function(e) {
                var t = this.C_Items[e.data];
                SunX.sEventManager.ExecuteEvent(RGlobalRequest.ChangeLevel, t.ID), s.CreateGameScene()
            },
            sortLevel: function(e, t) {
                return e.Order - t.Order
            }
        }), cc._RF.pop()
    }, {
        RDBConfigManager: "RDBConfigManager",
        RDataManager: "RDataManager",
        RGameManager: "RGameManager"
    }],
    SelectLevelView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ff8achzlxBIZ4KAiGqa3yqM", "SelectLevelView"), cc.Class({
            extends: cc.Component,
            properties: {
                LevelPageItem: cc.Prefab,
                NextPageItem: cc.Prefab,
                PageView: cc.PageView,
                BtnPrev: cc.Button,
                BtnNext: cc.Button
            },
            onLoad: function() {
                this._totalPage = 0
            },
            start: function() {},
            CreatePageItem: function(e, t) {
                var n, i = e.length;
                this._totalPage = Math.ceil(i / 4) + 1;
                for (var o = 0; o < this._totalPage - 1; ++o)(n = cc.instantiate(this.LevelPageItem)).getComponent("LevelPageItem").InitData(o, e, t), this.PageView.addPage(n);
                n = cc.instantiate(this.NextPageItem), this.PageView.addPage(n), this.updatePage(0)
            },
            onPrevPage: function() {
                RoomXLevelVo.curPage > 0 && (RoomXLevelVo.curPage -= 1, this.updatePage())
            },
            onNextPage: function() {
                RoomXLevelVo.curPage < this._totalPage - 1 && (RoomXLevelVo.curPage += 1, this.updatePage())
            },
            updatePage: function(e) {
                this.PageView.scrollToPage(RoomXLevelVo.curPage, e), this.updateBtn()
            },
            updateBtn: function() {
                RoomXLevelVo.curPage = this.PageView.getCurrentPageIndex(), RoomXLevelVo.curPage <= 0 ? this.BtnPrev.node.active = !1 : RoomXLevelVo.curPage >= this._totalPage - 1 ? this.BtnNext.node.active = !1 : (this.BtnNext.node.active = !0, this.BtnPrev.node.active = !0)
            },
            onBtnReviewClick: function() {
                cc.sys.openURL(RGlobalConfig.GetCommentURL())
            },
            onNextGame: function() {
                cc.sys.openURL(RGlobalConfig.NextURL)
            }
        }), cc._RF.pop()
    }, {}],
    SelectView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e383b2ua3xKi4Hf0gBnPrHf", "SelectView");
        var i = e("RDBConfigManager").SP,
            o = e("RDataManager").SP,
            s = e("RGameManager").SP;
        window.Select_CurPage = 0;
        cc.Class({
            extends: cc.Component,
            properties: {
                pageView: cc.PageView,
                btnPrev: cc.Node,
                btnNext: cc.Node,
                items: {
                    default: [],
                    type: e("SelectItemView")
                },
                animations: {
                    default: [],
                    type: cc.Animation
                },
                imgs: {
                    default: [],
                    type: cc.SpriteFrame
                },
                _selectItem: null,
                _clickItem: !0
            },
            onLoad: function() {
                this._RCfgLevel = i.GetRCfgMgr(RConfigID.Level), this._levelsUnlock = o.m_DataItem.levels, this._passLevels = o.m_DataItem.passLevels, this._levelData = [];
                var e, t = this._RCfgLevel.GetHash();
                for (var n in t) null != (e = t[n]).Order && this._levelData.push(e);
                this._levelData.sort(this.sortLevel);
                for (var s = this._levelData.length, a = 0; a < s && this.items[a]; a++) {
                    this._levelsUnlock[a] && this.items[a].node.on(cc.Node.EventType.TOUCH_END, this.onItemClick, this);
                    var r = 0;
                    this._levelData[a].CollectID && (r = this._levelData[a].CollectID.length);
                    for (var c = 0, l = 0; l < r; l++) o.m_DataItem.CollectIsUnlock(this._levelData[a].CollectID[l]) && c++;
                    this.items[a].Init(a + 1, this._levelsUnlock[a], this._passLevels[a], this.imgs[a], r, c)
                }
            },
            start: function() {
                this.pageView._unregisterEvent(), this.pageView.scrollToPage(Select_CurPage, 0), this.updatePage(), SunX.sRes.Load({
                    url: this._levelData[0].Path,
                    func: null
                })
            },
            onItemClick: function(e) {
                var t = this;
                if (this._clickItem) {
                    this._clickItem = !1, this.scheduleOnce(function() {
                        t._clickItem = !0
                    }, 5);
                    var n = e.target.getComponent("SelectItemView");
                    SunX.sEventManager.ExecuteEvent(RGlobalRequest.ChangeLevel, this._levelData[n.level - 1].ID), s.CreateGameScene()
                }
            },
            sortLevel: function(e, t) {
                return e.Order - t.Order
            },
            onPrevPage: function(e) {
                Select_CurPage > 0 && (Select_CurPage -= 1, this.pageView.scrollToPage(Select_CurPage), this.updatePage())
            },
            onNextPage: function(e) {
                Select_CurPage < this.pageView.getPages().length - 1 && (Select_CurPage += 1, this.pageView.scrollToPage(Select_CurPage), this.updatePage())
            },
            updatePage: function() {
                0 == Select_CurPage ? (this.btnPrev.active = !1, this.btnNext.active = !0) : Select_CurPage == this.pageView.getPages().length - 1 ? (this.btnPrev.active = !0, this.btnNext.active = !1) : (this.btnPrev.active = !0, this.btnNext.active = !0), Select_CurPage != this.pageView.getPages().length - 1 && this.animations[Select_CurPage].play(this.animations[Select_CurPage].defaultClip.name)
            },
            onShopBtn: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.ShopPanel)
            },
            onCollect: function() {
                CollectManager.Instance.ShowCollectPandel()
            },
            onHome: function() {
                cc.director.loadScene("WelcomeScene")
            }
        });
        cc._RF.pop()
    }, {
        RDBConfigManager: "RDBConfigManager",
        RDataManager: "RDataManager",
        RGameManager: "RGameManager",
        SelectItemView: "SelectItemView"
    }],
    SetUpPanelCtrl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ba6f5DhPtpMGJsFxS2s1E2e", "SetUpPanelCtrl");
        var i = cc.Class({
            extends: e("BaseCtrl")
        });
        t.exports = i, cc._RF.pop()
    }, {
        BaseCtrl: "BaseCtrl"
    }],
    SetUpPanelView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "52296enJT1KaKxujrajzuKl", "SetUpPanelView");
        var i = e("RExecuteManager").SP,
            o = e("RDataManager").SP;
        cc.Class({
            extends: e("BaseView"),
            properties: {
                SoundSlider: cc.Slider,
                tipBtn: cc.Node
            },
            onLoad: function() {
                var e = o.m_DataItem;
                this.SoundSlider.progress = e.music / 100
            },
            onEnable: function() {
                AddOff && (this.tipBtn.active = !1)
            },
            ClickCloseBtn: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.SetUpPanel)
            },
            ClickHomeBtn: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.SetUpPanel), cc.director.loadScene("WelcomeScene")
            },
            ClickCommentBtn: function() {
                cc.sys.openURL(RGlobalConfig.GetCommentURL())
            },
            ClickGameBtn: function(e, t) {
                cc.sys.openURL("https://itunes.apple.com/app/id" + t)
            },
            ClickFeedbackBtn: function() {},
            ClickShopBtn: function() {
                cc.AdsUtils.ShowRewardedVideo(this._onVideoPlayOver.bind(this))
            },
            _onVideoPlayOver: function(e) {
                e && SunX.sEventManager.ExecuteEvent(SunX.SEvent.RewardedVideoOver)
            },
            ClickSetupBtn: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.SetUpPopup)
            },
            ClickMoreBtn: function() {
                cc.sys.openURL(RGlobalConfig.MoreURL)
            },
            ClickADSBtn: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.SetUpPanel), SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.ADSPanel)
            },
            ClickHelpBtn: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.HelpPanel)
            },
            ClickSoundBtn: function(e, t) {
                var n = o.m_DataItem,
                    s = e.progress;
                n.music = 100 * s, n.sound = 100 * s, SunX.sAudio.SetMusic(n.music), SunX.sAudio.SetSound(n.sound), i.RExecuteA(RExecuteEnum.DataSave)
            },
            ClickReplayBtn: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.SetUpPanel), SunX.sEventManager.ExecuteEvent(REvent.ReplayStage, null)
            }
        }), cc._RF.pop()
    }, {
        BaseView: "BaseView",
        RDataManager: "RDataManager",
        RExecuteManager: "RExecuteManager"
    }],
    SetUpPopupCtrl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8c6c7aTJtRHXKYFvYPZk/4J", "SetUpPopupCtrl");
        var i = e("RDataManager").SP,
            o = e("RExecuteManager").SP,
            s = cc.Class({
                extends: e("BaseCtrl"),
                ctor: function() {
                    this.musicValue = 0, this.soundValue = 0
                },
                created: function() {
                    this.m_viewComponent.SetControl(this), this.initData()
                },
                initData: function() {
                    var e = i.m_DataItem;
                    this.musicValue = e.music, this.soundValue = e.sound;
                    var t = {
                        musicValue: e.music,
                        soundValue: e.sound
                    };
                    this.m_viewComponent.UpdateData(t)
                },
                CancelChange: function() {
                    SunX.sAudio.SetMusic(this.musicValue), SunX.sAudio.SetSound(this.soundValue);
                    var e = {
                        musicValue: this.musicValue,
                        soundValue: this.soundValue
                    };
                    this.m_viewComponent.UpdateData(e)
                },
                SliderChange: function(e, t) {
                    this.musicValue = e, this.soundValue = t;
                    var n = i.m_DataItem;
                    n.music = e, n.sound = t, o.RExecuteA(RExecuteEnum.DataSave)
                }
            });
        t.exports = s, cc._RF.pop()
    }, {
        BaseCtrl: "BaseCtrl",
        RDataManager: "RDataManager",
        RExecuteManager: "RExecuteManager"
    }],
    SetUpPopupView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "cc304NBV2xCtbQzesH417fz", "SetUpPopupView"), cc.Class({
            extends: e("BaseView"),
            properties: {
                MusicSliderNode: cc.Slider,
                SoundSliderNode: cc.Slider
            },
            onLoad: function() {},
            SetControl: function(e) {
                this._control = e
            },
            UpdateData: function(e) {
                e.hasOwnProperty("musicValue") && e.musicValue != this.m_musicValue && (this.MusicSliderNode.progress = e.musicValue / 100, this.m_musicValue = e.musicValue), e.hasOwnProperty("soundValue") && e.soundValue != this.m_soundValue && (this.SoundSliderNode.progress = e.soundValue / 100, this.m_soundValue = e.soundValue)
            },
            ClickCloseBtn: function() {
                this._control.CancelChange(), SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.SetUpPopup)
            },
            ClickAboutBtn: function() {},
            ClickOKBtn: function() {
                this._control.SliderChange(this.m_musicValue, this.m_soundValue), SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.SetUpPopup)
            },
            MusicSlider: function(e) {
                this.m_musicValue = parseInt(100 * e.progress), SunX.sAudio.SetMusic(this.m_musicValue)
            },
            SoundSlider: function(e) {
                this.m_soundValue = parseInt(100 * e.progress), SunX.sAudio.SetSound(this.m_soundValue)
            }
        }), cc._RF.pop()
    }, {
        BaseView: "BaseView"
    }],
    ShopPanelCtrl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "322b9y8X69DMoMscFEP6xoI", "ShopPanelCtrl");
        var i = cc.Class({
            extends: e("BaseCtrl"),
            created: function() {
                SunX.sEventManager.AddEvent(RGlobalResponse.ShopPanelUpdate, this._onUpdateUI, this), SunX.sEventManager.ExecuteEvent(RGlobalRequest.ShopPanelUpdate, null)
            },
            DestroyUI: function() {
                this._super(), SunX.sEventManager.RemoveAllEvent(this)
            },
            _onUpdateUI: function(e) {
                this.m_viewComponent.UpdateUI(e.data)
            }
        });
        t.exports = i, cc._RF.pop()
    }, {
        BaseCtrl: "BaseCtrl"
    }],
    ShopPanelView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d8bcfPhgmlAJ6NNARo0TJk4", "ShopPanelView");
        var i = e("RTipsManager").SP;
        cc.Class({
            extends: e("BaseView"),
            properties: {
                btnHint: cc.Button,
                btnAnswer1: cc.Button,
                btnAnswer2: cc.Button,
                tishiNode: cc.Node,
                tishiText: cc.Label,
                answer1sp: cc.Sprite
            },
            onLoad: function() {},
            onDestroy: function() {},
            onEnable: function() {
                CC_WECHATGAME && wx.AdsMgr.ShowBanner()
            },
            onDisable: function() {
                CC_WECHATGAME && wx.AdsMgr.HideBanner()
            },
            UpdateUI: function(e) {
                e.textTip ? e.textTip && e.tip ? (this.btnHint.node.active = !1, this.tishiNode.active = !0, this.btnAnswer1.node.active = !1, this.btnAnswer2.node.active = !0) : (this.btnHint.node.active = !1, this.tishiNode.active = !0, this.btnAnswer1.node.active = !0, this.btnAnswer1.interactable = !0, this.answer1sp.setMaterial(0, cc.MaterialVariant.createWithBuiltin("2d-sprite", this)), this.btnAnswer2.node.active = !1) : (this.btnHint.node.active = !0, this.tishiNode.active = !1, this.btnAnswer1.node.active = !0, this.btnAnswer1.interactable = !1, this.answer1sp.setMaterial(0, cc.MaterialVariant.createWithBuiltin("2d-gray-sprite", this)), this.btnAnswer2.node.active = !1), this.tishiText.string = i.GetLevelTextTips(e.level)[i18n.curLang]
            },
            ClickCloseBtn: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.ShopPanel)
            },
            ClickFreeTip: function() {
                cc.AdsUtils.ShowRewardedVideo(this._onVideoPlayOver.bind(this))
            },
            _onVideoPlayOver: function(e) {
                e && SunX.sEventManager.ExecuteEvent(SunX.SEvent.RewardedVideoOver)
            },
            ClickBookTip: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.BookPopup)
            },
            ClickCommentBtn: function() {
                cc.sys.openURL(RGlobalConfig.GetCommentURL())
            },
            ClickMoreBtn: function() {
                cc.sys.openURL(RGlobalConfig.MoreURL)
            }
        }), cc._RF.pop()
    }, {
        BaseView: "BaseView",
        RTipsManager: "RTipsManager"
    }],
    ShowPopupCtrl: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a1746nXJgtOAJ1Ick3dOCh0", "ShowPopupCtrl");
        var i = cc.Class({
            extends: e("BaseCtrl"),
            ctor: function() {
                this.C_bagItemVo = null, this._prefab = SunX.sRes.GetRes("RoomXUI/ShowPopup.prefab")
            },
            DestroyUI: function() {
                this._super(), SunX.sEventManager.RemoveAllEvent(this), this._clear(), this.C_bagItemVo = null
            },
            created: function() {
                SunX.sEventManager.AddEvent(REvent.ShowProp_Load, this._onShowPropLoad, this)
            },
            Hide: function() {
                this._super(), this._clear()
            },
            _onShowPropLoad: function(e) {
                var t = e.data;
                this.C_bagItemVo && t.ID == this.C_bagItemVo.ID || (this._clear(), this.C_bagItemVo = t, SunX.sRes.Load({
                    url: t.ShowUrl,
                    func: this._onResLoadOver.bind(this)
                }))
            },
            _onResLoadOver: function(e) {
                var t = cc.instantiate(e);
                this.m_viewComponent.ShowNode(t)
            },
            _clear: function() {
                this.C_bagItemVo && (this.m_viewComponent.ClearProp(), SunX.sRes.ReleaseRes(this.C_bagItemVo.ShowUrl), SunX.sRes.PurgeCachedRes()), this.C_bagItemVo = null
            }
        });
        t.exports = i, cc._RF.pop()
    }, {
        BaseCtrl: "BaseCtrl"
    }],
    ShowPopupView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "7395bLQuwxPrb2LKpGjOOhV", "ShowPopupView"), cc.Class({
            extends: e("BaseView"),
            properties: {
                content: cc.Node
            },
            onLoad: function() {},
            HideView: function() {
                this.node.parent = null
            },
            ClearProp: function() {
                this.prefabNode && this.prefabNode.destroy(), this.prefabNode = null
            },
            ShowNode: function(e) {
                e.parent = this.content, this.prefabNode = e
            },
            ClickCloseBtn: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.ShowPopup)
            }
        }), cc._RF.pop()
    }, {
        BaseView: "BaseView"
    }],
    SokobanGame: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f18c5Qm0J1AHJ/bxbI3mnMm", "SokobanGame"), cc.Class({
            extends: e("RGame"),
            properties: {
                Width: {
                    default: 0,
                    tooltip: "\u5355\u4f4d\u5bbd\u5ea6"
                },
                Padding: {
                    default: 0,
                    tooltip: "\u95f4\u9694(\u5899\u7684\u5bbd\u5ea6)"
                },
                Row: {
                    default: 0,
                    tooltip: "\u884c---y"
                },
                Col: {
                    default: 0,
                    tooltip: "\u5217---x"
                },
                Exit: {
                    default: new cc.Vec2,
                    tooltip: "boos\u7684\u51fa\u53e3\u5750\u6807(row, col)"
                },
                RootNode: {
                    default: null,
                    tooltip: "Node\u4f4d\u7f6e\u4e3a\u8d77\u70b9\u4f4d\u7f6e\uff0c\u4e14\u4e3a\u6240\u6709item\u7684\u7236\u8282\u70b9",
                    type: cc.Node
                },
                ItemPrefab: cc.Prefab,
                mSeleNode: {
                    default: null,
                    type: e("SokobanItem")
                },
                mapWall1: {
                    default: [],
                    tooltip: "\u6bcf\u4e2a\u4f4d\u7f6e\u662f\u5426\u53ef\u4ee5\u4e0a\u4e0b\u5de6\u53f3\u79fb\u52a8\uff0c\u56db\u4f4d\u4e8c\u8fdb\u5236\u8868\u793a\uff0c0\uff1a\u53ef\u79fb\u52a8\uff0c1\uff1a\u4e0d\u53ef\u79fb\u52a8\u30020011=3\u8868\u793a\u53ef\u4ee5\u4e0a\u4e0b\u79fb\u52a8",
                    type: cc.String
                },
                mapWall2: {
                    default: [],
                    tooltip: "\u6bcf\u4e2a\u4f4d\u7f6e\u662f\u5426\u53ef\u4ee5\u4e0a\u4e0b\u5de6\u53f3\u79fb\u52a8\uff0c\u56db\u4f4d\u4e8c\u8fdb\u5236\u8868\u793a\uff0c0\uff1a\u53ef\u79fb\u52a8\uff0c1\uff1a\u4e0d\u53ef\u79fb\u52a8\u30020011=3\u8868\u793a\u53ef\u4ee5\u4e0a\u4e0b\u79fb\u52a8",
                    type: cc.String
                }
            },
            onLoad: function() {
                this.finish = !1, this.mCurBox = null, this.changeWall = !1, this.onReset()
            },
            onMove: function(e, t) {
                var n = t;
                if (!(this.finish || this.mSeleNode.node.getNumberOfRunningActions() > 0 || this.mCurBox && this.mCurBox.node.getNumberOfRunningActions() > 0) && this.isCanMove(n)) {
                    var i, o;
                    switch (n) {
                        case "up":
                            i = new cc.Vec2(0, this.Width + this.Padding), o = new cc.Vec2(0, 1);
                            break;
                        case "down":
                            i = new cc.Vec2(0, -this.Width - this.Padding), o = new cc.Vec2(0, -1);
                            break;
                        case "left":
                            i = new cc.Vec2(-this.Width - this.Padding, 0), o = new cc.Vec2(-1, 0);
                            break;
                        case "right":
                            i = new cc.Vec2(this.Width + this.Padding, 0), o = new cc.Vec2(1, 0)
                    }
                    var s = this.mSeleNode.mCurPos.x + o.x,
                        a = this.mSeleNode.mCurPos.y + o.y;
                    this.mMapState[this.mSeleNode.mCurPos.x][this.mSeleNode.mCurPos.y] = 0, this.mMapItem[this.mSeleNode.mCurPos.x][this.mSeleNode.mCurPos.y] = null, this.mMapState[s][a] = 1, this.mMapItem[s][a] = this.mSeleNode, this.mSeleNode.mCurPos.x = s, this.mSeleNode.mCurPos.y = a, this.mCurBox && (s = this.mCurBox.mCurPos.x + o.x, a = this.mCurBox.mCurPos.y + o.y, this.mMapState[this.mCurBox.mCurPos.x][this.mCurBox.mCurPos.y] = 0, this.mMapState[s][a] = 1, this.mMapItem[this.mCurBox.mCurPos.x][this.mCurBox.mCurPos.y] = null, this.mCurBox.mCurPos.x = s, this.mCurBox.mCurPos.y = a, this.mCurBox.node.runAction(cc.moveBy(.1, i))), this.mSeleNode.node.runAction(cc.sequence(cc.moveBy(.1, i), cc.callFunc(this.moveEndCallBack, this)))
                }
            },
            isCanMove: function(e) {
                var t = !1,
                    n = this.mSeleNode.mCurPos.x,
                    i = this.mSeleNode.mCurPos.y,
                    o = 0;
                switch (e) {
                    case "up":
                        o = 3, i < this.Row - 1 && 0 == this.mMapState[n][i + 1] ? t = !0 : i < this.Row - 2 && 0 == this.mMapState[n][i + 2] && (this.mCurBox = this.mMapItem[n][i + 1], t = !0);
                        break;
                    case "down":
                        o = 2, i > 0 && 0 == this.mMapState[n][i - 1] ? t = !0 : i > 1 && 0 == this.mMapState[n][i - 2] && (this.mCurBox = this.mMapItem[n][i - 1], t = !0);
                        break;
                    case "left":
                        o = 1, n > 0 && 0 == this.mMapState[n - 1][i] ? t = !0 : n > 1 && 0 == this.mMapState[n - 2][i] && (this.mCurBox = this.mMapItem[n - 1][i], t = !0);
                        break;
                    case "right":
                        o = 0, n < this.Col - 1 && 0 == this.mMapState[n + 1][i] ? t = !0 : n < this.Col - 2 && 0 == this.mMapState[n + 2][i] && (this.mCurBox = this.mMapItem[n + 1][i], t = !0)
                }
                return t && (this.mCurBox ? (t = this.checkWall(n, i, o) && this.checkWall(this.mCurBox.mCurPos.x, this.mCurBox.mCurPos.y, o)) || (this.mCurBox = null) : t = this.checkWall(n, i, o)), t
            },
            checkWall: function(e, t, n) {
                if (this.changeWall) {
                    if (this.mMapWallB[e][t] & 1 << n) return !1
                } else if (this.mMapWallA[e][t] & 1 << n) return !1;
                return !0
            },
            onChangeWall: function(e) {
                this.changeWall = !this.changeWall
            },
            moveEndCallBack: function(e, t) {
                if (this.mCurBox) {
                    var n = this.mCurBox.mCurPos.x,
                        i = this.mCurBox.mCurPos.y;
                    this.mMapItem[n][i] = this.mCurBox, this.mCurBox = null
                }
                this.Exit.x === this.mSeleNode.mCurPos.x && this.Exit.y === this.mSeleNode.mCurPos.y && (this.finish = !0, this.gameOver())
            },
            onReset: function() {
                this.mMapState = new Array(this.Col), this.mMapItem = new Array(this.Col), this.mMapWallA = new Array(this.Col), this.mMapWallB = new Array(this.Col);
                for (var e = 0; e < this.Col; e++) {
                    this.mMapState[e] = new Array(this.Row), this.mMapItem[e] = new Array(this.Row), this.mMapWallA[e] = new Array(this.Row), this.mMapWallB[e] = new Array(this.Row);
                    for (var t = this.mapWall1[e].split(","), n = this.mapWall2[e].split(","), i = 0; i < this.Row; i++) {
                        if (this.mMapState[e][i] = 0, this.mMapItem[e][i] = null, 1 == this.mMapState[e][i]) {
                            var o = cc.instantiate(this.ItemPrefab);
                            o.parent = this.RootNode;
                            var s = o.getComponent("SokobanItem");
                            s.mCurPos.x = e, s.mCurPos.y = i, this.mMapItem[e][i] = s
                        }
                        this.mMapWallA[e][i] = parseInt(t[i]), this.mMapWallB[e][i] = parseInt(n[i])
                    }
                }
                this.mMapItem[this.mSeleNode.mCurPos.x][this.mSeleNode.mCurPos.y] = this.mSeleNode, this.mMapState[this.mSeleNode.mCurPos.x][this.mSeleNode.mCurPos.y] = 1;
                for (var a = 0; a < this.Col; a++)
                    for (var r = 0; r < this.Row; r++) this.mMapItem[a][r] && (this.mMapItem[a][r].node.x = a * (this.Width + this.Padding) + this.Width / 2, this.mMapItem[a][r].node.y = r * (this.Width + this.Padding) + this.Width / 2)
            }
        }), cc._RF.pop()
    }, {
        RGame: "RGame",
        SokobanItem: "SokobanItem"
    }],
    SokobanItem: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f066bk+8PZBc5stDcH5o2U/", "SokobanItem"), cc.Class({
            extends: cc.Component,
            properties: {
                mCurPos: cc.Vec2
            },
            onLoad: function() {}
        }), cc._RF.pop()
    }, {}],
    SoundAnimateCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "40dffZQ+RJJgo8E33ATwKF9", "SoundAnimateCom"), cc.Class({
            extends: e("RSound"),
            editor: !1,
            properties: {
                audioClip: {
                    default: null,
                    type: cc.AudioClip,
                    displayName: "AudioClip",
                    override: !0,
                    visible: !1
                },
                audioClips: {
                    default: [],
                    displayName: "AudioClips",
                    type: e("AnimateSoundVo")
                }
            },
            onLoad: function() {},
            onDestroy: function() {},
            PlaySound: function(e) {
                var t = this.Find(e);
                null != t && SunX.sAudio.PlayEffect(t.GetURL(), !1)
            },
            Find: function(e) {
                for (var t = this.audioClips.length, n = 0; n < t; ++n)
                    if (this.audioClips[n].soundName == e) return this.audioClips[n];
                return null
            }
        }), cc._RF.pop()
    }, {
        AnimateSoundVo: "AnimateSoundVo",
        RSound: "RSound"
    }],
    SoundBtnCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a0022QAGPxPkr59huV8Tq3n", "SoundBtnCom"), cc.Class({
            extends: e("RSound"),
            editor: !1,
            onLoad: function() {
                this._super(), this.node.on("click", this._click, this)
            },
            onDestroy: function() {
                this.node.off("click", this._click, this)
            },
            _click: function(e) {
                SunX.sAudio.PlayEffect(this._url)
            }
        }), cc._RF.pop()
    }, {
        RSound: "RSound"
    }],
    SoundClickLoopCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "a0276yI2VVINpdA4KbgEQLi", "SoundClickLoopCom"), cc.Class({
            extends: e("RSound"),
            editor: !1,
            onEnable: function() {
                this.node.on("SoundClickStart", this._onSoundStart, this), this.node.on("SoundClickStop", this._onSoundStop, this)
            },
            onDisable: function() {
                SunX.sAudio.StopEffect(this._url), this.node.off("SoundClickStart", this._onSoundStart, this), this.node.off("SoundClickStop", this._onSoundStop, this)
            },
            _onSoundStart: function(e) {
                SunX.sAudio.PlayEffect(this._url, !0)
            },
            _onSoundStop: function(e) {
                SunX.sAudio.StopEffect(this._url)
            }
        }), cc._RF.pop()
    }, {
        RSound: "RSound"
    }],
    SoundEffectCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "59bc0Ygqy1CUpZB9W7ouLew", "SoundEffectCom"), cc.Class({
            extends: e("RSound"),
            editor: !1,
            properties: {
                loop: {
                    default: !1,
                    displayName: "Loop",
                    tooltip: "\u97f3\u6548\u662f\u5426\u5faa\u73af\u64ad\u653e"
                },
                isAutoPlay: {
                    default: !1,
                    displayName: "AutoPlay",
                    tooltip: "\u97f3\u6548\u662f\u5426\u81ea\u52a8\u64ad\u653e"
                },
                delayTime: {
                    default: 0,
                    displayName: "Delay",
                    tooltip: "\u97f3\u6548\u5ef6\u8fdf\u64ad\u653e\u65f6\u95f4"
                }
            },
            onEnable: function() {
                this.isAutoPlay ? this.Play() : this._isPlaying && this.Play()
            },
            onDisable: function() {
                this.Stop()
            },
            onLoad: function() {
                this._super(), this._isPlaying = !1
            },
            Play: function() {
                this._isPlaying = !0, 0 == this.delayTime ? SunX.sAudio.PlayEffect(this._url, this.loop) : this.scheduleOnce(this._delaySound, this.delayTime)
            },
            Stop: function() {
                if (this.unschedule(this._delaySound, this), this._isPlaying) {
                    if (this._isPlaying = !1, !this.loop) return;
                    SunX.sAudio.StopEffect(this._url)
                }
            },
            IsPlaying: function() {
                return this._isPlaying
            },
            IsLoop: function() {
                return this.loop
            },
            _delaySound: function(e) {
                SunX.sAudio.PlayEffect(this._url, this.loop)
            }
        }), cc._RF.pop()
    }, {
        RSound: "RSound"
    }],
    SoundMusicCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f044dWVlL1K55yAExb9eVAL", "SoundMusicCom"), cc.Class({
            extends: e("RSound"),
            editor: !1,
            properties: {
                isClose: {
                    default: !1,
                    displayName: "AutoClose"
                },
                isAutoPlay: {
                    default: !0,
                    displayName: "AutoPlay"
                }
            },
            onDestroy: function() {
                this.isClose && this.Stop()
            },
            onLoad: function() {
                this._super(), this._isPlaying = !1, this.isAutoPlay && this.Play()
            },
            Play: function() {
                this._isPlaying = !0, SunX.sAudio.PlayMusic(this._url)
            },
            Stop: function() {
                this._isPlaying && (this._isPlaying = !1, SunX.sAudio.StopMusic(this._url))
            },
            IsPlaying: function() {
                return this._isPlaying
            }
        }), cc._RF.pop()
    }, {
        RSound: "RSound"
    }],
    SpriteFrameSet: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
        var i = cc.Class({
            name: "SpriteFrameSet",
            properties: {
                language: "",
                spriteFrame: cc.SpriteFrame
            }
        });
        t.exports = i, cc._RF.pop()
    }, {}],
    StartUpCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e7629QvyERGSJ5LmZWj2L7U", "StartUpCom");
        var i = e("../RoomX/ADCode/GPluginSDKUtil"),
            o = e("../RoomX/ADCode/Ads/GAdsManager"),
            s = e("../RoomX/ADCode/Ads/AdsUtils"),
            a = e("../RoomX/ADCode/Ads/M4399H5AdsAdapter");
        cc.Class({
            extends: e("LaunchApp"),
            properties: {
                loadImg: cc.Node,
                loadTxt: cc.Label,
                pro: cc.ProgressBar
            },
            start: function() {
                this._super(), this.loadImg.runAction(cc.repeatForever(cc.rotateBy(1, 360))), cc.sys.language == cc.sys.LANGUAGE_CHINESE ? this.loadTxt.string = "\u8d44\u6e90\u52a0\u8f7d\u4e2d..." : this.loadTxt.string = "Đang tải game...", this.tween = cc.tween(this.pro).to(25, {
                    progress: .99
                }).start()
            },
            initComplete: function() {
                this.tween.stop(), this.tween.progress = 1, this.scheduleOnce(this.doDelay, .1)
            },
            doDelay: function() {
                window.AddOff = !1, window.hasOwnProperty("h5api") ? (SXPluginSDKMgr = {}, SXPluginSDKMgr.ChannelName = "m4399h5", o.GAdsManager.Init(new a.M4399H5AdsAdapter)) : (i.GPluginSDKUtil.Init(), i.GPluginSDKUtil.InitAds(), i.GPluginSDKUtil.InitOtherSDK(), i.GPluginSDKUtil.InitAnalysis()), cc.AdsManager = o.GAdsManager, cc.AdsUtils = s.AdsUtils, cc.director.loadScene("WelcomeScene")
            },
            initOther: function() {
                CollectManager.Instance = new CollectManager, CollectManager.Instance.Init()
            }
        }), cc._RF.pop()
    }, {
        "../RoomX/ADCode/Ads/AdsUtils": "AdsUtils",
        "../RoomX/ADCode/Ads/GAdsManager": "GAdsManager",
        "../RoomX/ADCode/Ads/M4399H5AdsAdapter": "M4399H5AdsAdapter",
        "../RoomX/ADCode/GPluginSDKUtil": "GPluginSDKUtil",
        LaunchApp: "LaunchApp"
    }],
    TXCloseLogicCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f505d5KpWdESrdawLTAuj+/", "TXCloseLogicCom"), cc.Class({
            extends: cc.Component,
            properties: {
                exeNodes: {
                    default: [],
                    displayName: "ExeNodes",
                    tooltip: "\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)\u6570\u7ec4",
                    type: e("RBaseState")
                }
            },
            onLoad: function() {
                SunX.sEventManager.AddEvent(REvent.TX_Destroy, this._onTXDestroy, this)
            },
            onDestroy: function() {
                SunX.sEventManager.RemoveAllEvent(this)
            },
            _onTXDestroy: function(e) {
                var t = e.data[this.node.name];
                if (t) {
                    var n = this._findExeNode(t);
                    if (n)
                        for (var i = n.getComponents("RBaseState"), o = i.length, s = 0; s < o; ++s) i[s].Execute()
                }
            },
            _findExeNode: function(e) {
                for (var t = this.exeNodes.length, n = 0; n < t; ++n)
                    if (this.exeNodes[n].node.name == e) return this.exeNodes[n].node;
                return null
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    TXPopBgCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "b9e51mYPLpPi5QDNznBmyqC", "TXPopBgCom"), cc.Class({
            extends: cc.Component,
            properties: {
                BG: cc.Node,
                openAudio: {
                    default: null,
                    displayName: "OpenAudio",
                    type: e("RSoundVo")
                },
                closeAudio: {
                    default: null,
                    displayName: "CloseAudio",
                    type: e("RSoundVo")
                }
            },
            onDestroy: function() {
                SunX.sEventManager.RemoveAllEvent(this), this._txNode = null
            },
            onLoad: function() {
                this._isClose = !1, this._txNode = null, this._txData = {}
            },
            Open: function(e, t) {
                this.openAudio && SunX.sAudio.PlayEffect(this.openAudio.GetURL()), this._txNode = e, this._txNode.parent = this.node, this._txNode.getComponent("TXViewCom").Init(this), this._banRegisterEvent(), this.BG.runAction(cc.sequence(cc.fadeTo(.31, t), cc.callFunc(this._actionTXPopBgOpenOver, this)))
            },
            Close: function() {
                this._isClose || this._close()
            },
            ExeCloseLogic: function(e) {
                this._txData[e.tagName] = e.exeNodeName
            },
            _close: function() {
                this.closeAudio && SunX.sAudio.PlayEffect(this.closeAudio.GetURL()), this._isClose = !0, this._banRegisterEvent(), this._txNode.getComponent("TXViewCom").CloseTX(), this.BG.runAction(cc.sequence(cc.fadeTo(.31, 0), cc.callFunc(this._actionTXPopBgCloseOver, this))), SunX.sEventManager.ExecuteEvent(REvent.Scene_TXClose)
            },
            _actionTXPopBgOpenOver: function() {
                this._banRemoveEvent()
            },
            _actionTXPopBgCloseOver: function() {
                SunX.sUtils.IsEmptyObject(this._txData) || SunX.sEventManager.ExecuteEvent(REvent.TX_Destroy, this._txData), this.node.destroy()
            },
            _onClick: function(e) {
                e.stopPropagation(), this.Close()
            },
            _banRegisterEvent: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this._banChildrenClick, this, !0), this.node.on(cc.Node.EventType.TOUCH_END, this._banChildrenClick, this, !0), this.BG.off(cc.Node.EventType.TOUCH_END, this._onClick, this)
            },
            _banRemoveEvent: function() {
                this.node.off(cc.Node.EventType.TOUCH_START, this._banChildrenClick, this, !0), this.node.off(cc.Node.EventType.TOUCH_END, this._banChildrenClick, this, !0), this.BG.on(cc.Node.EventType.TOUCH_END, this._onClick, this)
            },
            _banChildrenClick: function(e) {
                e.stopPropagation()
            }
        }), cc._RF.pop()
    }, {
        RSoundVo: "RSoundVo"
    }],
    TXViewCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "72108tTVqpNo4CHm+TkUd8x", "TXViewCom");
        var i = {
                UP: 150,
                DOWN: 150,
                LEFT: 30,
                RIGHT: 30
            },
            o = cc.Enum({
                CIRCLE: 0,
                RECT: 1
            });
        cc.Class({
            extends: cc.Component,
            properties: {
                txType: {
                    default: o.CIRCLE,
                    animatable: !1,
                    type: o,
                    displayName: "TxType",
                    tooltip: "\u7279\u5199\u7c7b\u578b"
                },
                pos: {
                    default: new cc.Vec2(30, -30),
                    displayName: "Vec2",
                    tooltip: "\u65b9\u5f62\u7279\u5199\u9519\u4f4d\u5750\u6807"
                }
            },
            statics: {
                RTXType: o,
                TXCircleRect: i
            },
            onDestroy: function() {
                this._txPopBgCom = null
            },
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_END, this._onClick, this), this._oldPoint = cc.Vec2.ZERO, this.txType == o.CIRCLE ? this._scaleCircleTX() : this._scaleRectTX()
            },
            Init: function(e) {
                this._txPopBgCom = e
            },
            CloseTX: function() {
                var e = cc.spawn(cc.moveTo(.3, this._oldPoint), cc.scaleTo(.3, .1));
                this.node.runAction(e)
            },
            ClickCloseBtn: function() {
                this._txPopBgCom.Close()
            },
            ExeCloseLogic: function(e) {
                this._txPopBgCom.ExeCloseLogic(e)
            },
            _scaleRectTX: function() {
                this.node.setScale(.1), this._oldPoint.set(this.node.getPosition());
                var e;
                e = cc.spawn(cc.moveTo(.3, this.pos), cc.scaleTo(.3, 1)), this.node.runAction(e)
            },
            _scaleCircleTX: function() {
                this.node.setScale(.1), this._oldPoint.set(this.node.getPosition());
                var e = cc.view.getDesignResolutionSize(),
                    t = this.node.getContentSize(),
                    n = cc.p(this._oldPoint.x, this._oldPoint.y);
                this._CalculateTXCirclePoint(e, n, t);
                var i = cc.spawn(cc.moveTo(.3, n), cc.scaleTo(.3, 1));
                this.node.runAction(i)
            },
            _CalculateTXCirclePoint: function(e, t, n) {
                var o = i,
                    s = .5 * e.height - (o.UP + .5 * n.height),
                    a = -.5 * e.height + (o.DOWN + .5 * n.height),
                    r = -.5 * e.width + (o.LEFT + .5 * n.width),
                    c = .5 * e.width - (o.RIGHT + .5 * n.width);
                t.x < r ? t.x = r : t.x > c && (t.x = c), t.y < a ? t.y = a : t.y > s && (t.y = s)
            },
            _onClick: function(e) {
                e.stopPropagation()
            }
        }), cc._RF.pop()
    }, {}],
    TermsAndPrivacy: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "33bdf+3gmVIWowvETsHBaT0", "TermsAndPrivacy");
        var i = this && this.__extends || function() {
                var e = function(t, n) {
                    return (e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(t, n)
                };
                return function(t, n) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, n), t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                }
            }(),
            o = this && this.__decorate || function(e, t, n, i) {
                var o, s = arguments.length,
                    a = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, i);
                else
                    for (var r = e.length - 1; r >= 0; r--)(o = e[r]) && (a = (s < 3 ? o(a) : s > 3 ? o(t, n, a) : o(t, n)) || a);
                return s > 3 && a && Object.defineProperty(t, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = cc._decorator,
            a = s.ccclass,
            r = s.property,
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.termsNode = null, t.privacyNode = null, t
                }
                return i(t, e), t.prototype.onLoad = function() {
                    this.termsNode.active = !1, this.privacyNode.active = !1
                }, t.prototype.onTerms = function() {
                    this.termsNode.active = !this.termsNode.active
                }, t.prototype.onPrivacy = function() {
                    this.privacyNode.active = !this.privacyNode.active
                }, o([r(cc.Node)], t.prototype, "termsNode", void 0), o([r(cc.Node)], t.prototype, "privacyNode", void 0), t = o([a], t)
            }(cc.Component);
        n.default = c, cc._RF.pop()
    }, {}],
    Timer: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "96b0cGcfqZEMpxxRCjKIUA1", "Timer"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.time = -1
            },
            StartTime: function(e) {
                this.time = e, cc.director.getScheduler().schedule(this._timeCallBack, this, 1, cc.macro.REPEAT_FOREVER, 1, !1)
            },
            _timeCallBack: function() {
                this.time -= 1, this.time <= 0 && cc.director.getScheduler().unschedule(this._timeCallBack, this)
            },
            GetTime: function() {
                return this.time
            },
            PauseTime: function() {
                cc.director.getScheduler().pauseTarget(this)
            },
            ResumeTime: function() {
                cc.director.getScheduler().resumeTarget(this)
            }
        }), cc._RF.pop()
    }, {}],
    TipWarnPanelCtrl: [function(e, t, n) {
        "use strict";
        var i;

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        cc._RF.push(t, "f109dzkaNlOqbNmypS6GdDN", "TipWarnPanelCtrl");
        var s = cc.Class((o(i = {
            extends: e("BaseCtrl"),
            DestroyUI: function() {
                this._super(), SunX.sEventManager.RemoveAllEvent(this)
            },
            created: function() {
                SunX.sEventManager.AddEvent(RGlobalResponse.UseTip, this._rpUseTip, this)
            }
        }, "DestroyUI", function() {
            this._super(), SunX.sEventManager.RemoveAllEvent(this)
        }), o(i, "_rpUseTip", function(e) {
            e.data ? SunX.sEventManager.ExecuteEvent(REvent.UIShow, RUIID.BookPopup) : SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.TipWarnPanel)
        }), i));
        t.exports = s, cc._RF.pop()
    }, {
        BaseCtrl: "BaseCtrl"
    }],
    TipWarnPanelView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "8fb70Vs4xlIyZ8M1K7rac5Z", "TipWarnPanelView"), cc.Class({
            extends: e("BaseView"),
            properties: {},
            onLoad: function() {},
            ClickCloseBtn: function() {
                SunX.sEventManager.ExecuteEvent(REvent.UIHide, RUIID.TipWarnPanel)
            },
            ClickOKBtn: function() {
                SunX.sEventManager.ExecuteEvent(RGlobalRequest.UseTip)
            }
        }), cc._RF.pop()
    }, {
        BaseView: "BaseView"
    }],
    ToggleLoading: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ff7a5SAh2RPp5LNzvF2nsqw", "ToggleLoading"), cc.Class({
            extends: cc.Component,
            onDestroy: function() {
                SunX.sEventManager.RemoveAllEvent(this)
            },
            onLoad: function() {
                SunX.sEventManager.AddEvent(REvent.Loading_Start, this._onLoadingStart, this), SunX.sEventManager.AddEvent(REvent.Loading_Load, this._onLoadingLoad, this), SunX.sEventManager.AddEvent(REvent.Loading_Over, this._onLoadingOver, this), this._anima = this.getComponent(cc.Animation), this._anima.on("finished", this._onFinished, this)
            },
            _onLoadingStart: function(e) {
                this.node.active = !0, this._anima.play("LoadingAnima1")
            },
            _onLoadingLoad: function(e) {
                this.node.active = !0, this._anima.play("LoadingAnima2"), this._anima.sample("LoadingAnima2"), this._anima.pause("LoadingAnima2")
            },
            _onLoadingOver: function(e) {
                this.node.active = !0, this._anima.play("LoadingAnima2")
            },
            _onFinished: function(e, t) {
                "LoadingAnima2" == t.name ? (this.node.active = !1, SunX.sEventManager.ExecuteEvent(REvent.Loading_Complete)) : SunX.sEventManager.ExecuteEvent(REvent.Loading_Black)
            }
        }), cc._RF.pop()
    }, {}],
    TouchLayerCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "d08ddS/q6ZP0rsHFSpU2hzc", "TouchLayerCom"), cc.Class({
            extends: cc.Component,
            properties: {},
            onDestroy: function() {
                for (var e, t = this._cache.length, n = 0; n < t; ++n) e = this._cache[n], cc.isValid(e) && e.destroy();
                this._cache.length = 0
            },
            onLoad: function() {
                var e;
                this._cache = [], this._prefab = SunX.sRes.GetRes("RoomXUI/TouchShow.prefab");
                for (var t = 0; t < 10; ++t) e = cc.instantiate(this._prefab), this._cache.push(e)
            },
            onEnable: function() {
                this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this), this.node._touchListener.setSwallowTouches(!1)
            },
            onDisable: function() {
                this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this)
            },
            _onTouchEnd: function(e) {
                var t = this._getTouchShow();
                t.parent = this.node, t.position = this.node.convertToNodeSpaceAR(e.touch.getLocation());
                var n = t.getComponent(cc.Animation);
                n.play(n.defaultClip.name), SunX.sEventManager.ExecuteEvent(REvent.Arrow_Hide)
            },
            _getTouchShow: function() {
                for (var e, t = this._cache.length, n = 0; n < t; ++n)
                    if (null == (e = this._cache[n]).parent) return e;
                return e = cc.instantiate(this._prefab), this._cache.push(e), e
            }
        }), cc._RF.pop()
    }, {}],
    TouchShowCom: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "aad24GfToJN+YgjhaK5qAeA", "TouchShowCom"), cc.Class({
            extends: cc.Component,
            onLoad: function() {
                this.getComponent(cc.Animation).on("finished", this._onFinished, this)
            },
            _onFinished: function() {
                this.node.parent = null
            }
        }), cc._RF.pop()
    }, {}],
    UseMultiVo: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "e2ed7/ijYpLPZwb1Jkf25C7", "UseMultiVo"), t.exports = cc.Class({
            name: "UseMultiVo",
            properties: {
                propID: {
                    default: "",
                    displayName: "PropID",
                    tooltip: "\u4f7f\u7528\u9053\u5177\u7684ID"
                },
                isDele: {
                    default: !0,
                    displayName: "IsDele",
                    tooltip: "\u9053\u5177\u4f7f\u7528\u4e4b\u540e\u662f\u5426\u5728\u80cc\u5305\u4e2d\u5220\u9664"
                },
                exeNode: {
                    default: null,
                    displayName: "ExeNode",
                    tooltip: "\u4f7f\u7528\u9053\u5177\u6210\u529f\u7684\u6267\u884c\u8282\u70b9(\u8282\u70b9\u4e0a\u6302\u8f7d\u6709RBaseState\u7ec4\u4ef6)",
                    type: e("RBaseState")
                }
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    WelcomeView: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "381eeG0WDhGiYSIrWfsDm+1", "WelcomeView");
        var i = e("RDataManager").SP,
            o = e("RExecuteManager").SP;
        cc.Class({
            extends: cc.Component,
            properties: {
                soundBtn: e("RToggle")
            },
            onLoad: function() {
                i.m_DataItem.music > 0 ? this.soundBtn.isChecked = !0 : this.soundBtn.isChecked = !1, this._startBtnClick = !1
            },
            onStart: function() {
                var e = this;
                this._startBtnClick || (this._startBtnClick = !0, this.scheduleOnce(function() {
                    e._startBtnClick = !1
                }, 5), cc.director.loadScene("SelectLevel"))
            },
            onChangeScene: function(e, t) {
                cc.director.loadScene(t)
            },
            onReview: function() {
                cc.sys.openURL(RGlobalConfig.GetCommentURL())
            },
            onMoreGame: function() {},
            ClickGameBtn: function(e, t) {
                cc.sys.openURL("https://itunes.apple.com/app/id" + t)
            },
            onBtnSoundClick: function(e) {
                var t = i.m_DataItem;
                e.isChecked ? (t.music = 30, t.sound = 60) : (t.music = 0, t.sound = 0), SunX.sAudio.SetMusic(t.music), SunX.sAudio.SetSound(t.sound), o.RExecuteA(RExecuteEnum.DataSave)
            }
        }), cc._RF.pop()
    }, {
        RDataManager: "RDataManager",
        RExecuteManager: "RExecuteManager",
        RToggle: "RToggle"
    }],
    en: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ba185xHogtCjIjJUYN2QWpM", "en"), window.i18n || (window.i18n = {}), window.i18n.languages || (window.i18n.languages = {}), window.i18n.languages.en = {
            Select: {
                page1: "Page1",
                page2: "Page2",
                page3: "Page3",
                page4: "Page4",
                page5: "Page5",
                page6: "Page6",
                page7: "Page7",
                page8: "Page8",
                page9: "Page9",
                page10: "Page10",
                page11: "Page11",
                page12: "Page12",
                page13: "Page13",
                page14: "Page14",
                page15: "Page15"
            },
            Stage31: {
                title: "Bạn sắp đối mặt với thực tế?",
                escape: "Không",
                face: "Có"
            }
        }, cc._RF.pop()
    }, {}],
    ja: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "f756369kelByqUlrKA0wC3K", "ja"), window.i18n || (window.i18n = {}), window.i18n.languages || (window.i18n.languages = {}), window.i18n.languages.ja = {
            Select: {
                page1: "\u30da\u30fc\u30b81",
                page2: "\u30da\u30fc\u30b82",
                page3: "\u30da\u30fc\u30b83",
                page4: "\u30da\u30fc\u30b84",
                page5: "\u30da\u30fc\u30b85",
                page6: "\u30da\u30fc\u30b86",
                page7: "\u30da\u30fc\u30b87",
                page8: "\u30da\u30fc\u30b88",
                page9: "\u30da\u30fc\u30b89",
                page10: "\u30da\u30fc\u30b810",
                page11: "\u30da\u30fc\u30b811",
                page12: "\u30da\u30fc\u30b812",
                page13: "\u30da\u30fc\u30b813",
                page14: "\u30da\u30fc\u30b814",
                page15: "\u30da\u30fc\u30b815"
            },
            Stage31: {
                title: "\u73fe\u5b9f\u306b\u76f4\u9762\u3059\u308b\u304b?",
                escape: "\u76f4\u9762\u3057\u306a\u3044",
                face: "\u76f4\u9762\u3059\u308b"
            }
        }, cc._RF.pop()
    }, {}],
    ko: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "55f26fuL+BFIJQRqxQPjApD", "ko"), window.i18n || (window.i18n = {}), window.i18n.languages || (window.i18n.languages = {}), window.i18n.languages.ko = {
            Select: {
                page1: "Page1",
                page2: "Page2",
                page3: "Page3",
                page4: "Page4",
                page5: "Page5",
                page6: "Page6",
                page7: "Page7",
                page8: "Page8",
                page9: "Page9",
                page10: "Page10",
                page11: "Page11",
                page12: "Page12",
                page13: "Page13",
                page14: "Page14",
                page15: "Page15"
            },
            Stage31: {
                title: "\ud604\uc2e4\uc5d0 \uc9c1\uba74\ud574\uc694?",
                escape: "\ub3c4\ud53c\ud558\ub2e4",
                face: "\uc9c1\uba74\ud558\ub2e4"
            }
        }, cc._RF.pop()
    }, {}],
    "polyglot.min": [function(e, t, n) {
        "use strict";

        function i(e) {
            "@babel/helpers - typeof";
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        cc._RF.push(t, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min"),
            function(e, o) {
                "function" == typeof define && define.amd ? define([], function() {
                    return o(e)
                }) : "object" == (void 0 === n ? "undefined" : i(n)) ? t.exports = o(e) : e.Polyglot = o(e)
            }(void 0, function(e) {
                function t(e) {
                    e = e || {}, this.phrases = {}, this.extend(e.phrases || {}), this.currentLocale = e.locale || "en", this.allowMissing = !!e.allowMissing, this.warn = e.warn || l
                }

                function n(e) {
                    var t, n, i, o = {};
                    for (t in e)
                        if (e.hasOwnProperty(t))
                            for (i in n = e[t]) o[n[i]] = t;
                    return o
                }

                function o(e) {
                    return e.replace(/^\s+|\s+$/g, "")
                }

                function s(e, t, n) {
                    var i, s;
                    return null != n && e ? i = o((s = e.split(d))[r(t, n)] || s[0]) : i = e, i
                }

                function a(e) {
                    var t = n(p);
                    return t[e] || t.en
                }

                function r(e, t) {
                    return h[a(e)](t)
                }

                function c(e, t) {
                    for (var n in t) "_" !== n && t.hasOwnProperty(n) && (e = e.replace(new RegExp("%\\{" + n + "\\}", "g"), t[n]));
                    return e
                }

                function l(t) {
                    e.console && e.console.warn && e.console.warn("WARNING: " + t)
                }

                function u(e) {
                    var t = {};
                    for (var n in e) t[n] = e[n];
                    return t
                }
                t.VERSION = "0.4.3", t.prototype.locale = function(e) {
                    return e && (this.currentLocale = e), this.currentLocale
                }, t.prototype.extend = function(e, t) {
                    var n;
                    for (var o in e) e.hasOwnProperty(o) && (n = e[o], t && (o = t + "." + o), "object" == i(n) ? this.extend(n, o) : this.phrases[o] = n)
                }, t.prototype.clear = function() {
                    this.phrases = {}
                }, t.prototype.replace = function(e) {
                    this.clear(), this.extend(e)
                }, t.prototype.t = function(e, t) {
                    var n, i;
                    return "number" == typeof(t = null == t ? {} : t) && (t = {
                        smart_count: t
                    }), "string" == typeof this.phrases[e] ? n = this.phrases[e] : "string" == typeof t._ ? n = t._ : this.allowMissing ? n = e : (this.warn('Missing translation for key: "' + e + '"'), i = e), "string" == typeof n && (t = u(t), i = c(i = s(n, this.currentLocale, t.smart_count), t)), i
                }, t.prototype.has = function(e) {
                    return e in this.phrases
                };
                var d = "||||",
                    h = {
                        chinese: function(e) {
                            return 0
                        },
                        german: function(e) {
                            return 1 !== e ? 1 : 0
                        },
                        french: function(e) {
                            return e > 1 ? 1 : 0
                        },
                        russian: function(e) {
                            return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                        },
                        czech: function(e) {
                            return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
                        },
                        polish: function(e) {
                            return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                        },
                        icelandic: function(e) {
                            return e % 10 != 1 || e % 100 == 11 ? 1 : 0
                        }
                    },
                    p = {
                        chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                        german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                        french: ["fr", "tl", "pt-br"],
                        russian: ["hr", "ru"],
                        czech: ["cs"],
                        polish: ["pl"],
                        icelandic: ["is"]
                    };
                return t
            }), cc._RF.pop()
    }, {}],
    "s25-game": [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "717cd+302hIN6fG0rX0oaFa", "s25-game"), cc.Class({
            extends: e("RGame"),
            properties: {
                bgMoveMax: 450,
                moveMax: 300,
                needMove: 600,
                preMove: 50,
                durationTime: 2,
                ren: cc.Sprite,
                bg: cc.Node,
                leftSp: cc.SpriteFrame,
                rightSp: cc.SpriteFrame,
                sp1: cc.SpriteFrame,
                sp2: cc.SpriteFrame,
                sp3: cc.SpriteFrame,
                sp4: cc.SpriteFrame,
                gameLose: {
                    default: null,
                    displayName: "GameLose",
                    tooltip: "\u6e38\u620f\u5931\u8d25",
                    type: e("RBaseState")
                }
            },
            start: function() {
                this.defaultPos = this.ren.node.position, this.bgDefaultPos = this.bg.position, this.lose = !1, this.start = !1, this.tag = "", this.dt = this.durationTime, this.count = 0, this.touch = !1, this.win = !1
            },
            onClick: function(e, t) {
                if (!this.lose) {
                    if (this.start) {
                        if (this.tag == t) return this.lose = !0, void this.playLoseAnimation()
                    } else this.start = !0, this.tag = t;
                    this.dt = this.durationTime, this.tag = t, this.ren.spriteFrame = "left" == t ? this.leftSp : this.rightSp, this.count * this.preMove < this.moveMax ? this.ren.node.y = this.ren.node.position.y + this.preMove : this.count * this.preMove < this.moveMax + this.bgMoveMax && (this.ren.node.y = this.ren.node.position.y + this.preMove, this.bg.y = this.bg.position.y - this.preMove), this.count++, this.count * this.preMove >= this.needMove && (this.touch = !0)
                }
            },
            onClickGirl: function() {
                this.touch && (this.win = !0, this.gameOver())
            },
            playLoseAnimation: function() {
                this.ren.spriteFrame = this.sp2;
                var e = this,
                    t = this.moveMax / this.preMove;
                this.count > t && this.bg.runAction(cc.moveTo(.1 * (this.count - t), this.bgDefaultPos)), this.ren.node.runAction(cc.sequence(cc.moveTo(.1 * this.count, this.defaultPos), cc.callFunc(function() {
                    e.ren.spriteFrame = e.sp3
                }), cc.delayTime(.5), cc.callFunc(function() {
                    e.win || e.ExecuteNode(e.gameLose), e.ren.spriteFrame = e.sp4
                })))
            },
            update: function(e) {
                this.start && !this.lose && (this.dt -= e, this.dt <= 0 && (this.lose = !0, this.playLoseAnimation()))
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState",
        RGame: "RGame"
    }],
    "s29-game": [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "bd6369ifaJLJJe2iOuB2xfm", "s29-game"), cc.Class({
            extends: e("RBaseState"),
            properties: {
                Enter: {
                    default: null,
                    displayName: "Enter",
                    tooltip: "Enter",
                    type: e("RBaseState")
                },
                Disable: {
                    default: null,
                    displayName: "Disable",
                    tooltip: "Disable",
                    type: e("RBaseState")
                }
            },
            onEnable: function() {
                this.ExecuteNode(this.Enter)
            },
            onDisable: function() {
                this.ExecuteNode(this.Disable)
            }
        }), cc._RF.pop()
    }, {
        RBaseState: "RBaseState"
    }],
    "s31-game": [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "3d72ddtzqxOLZd2e0cjLaNy", "s31-game"), cc.Class({
            extends: e("RGame"),
            properties: {},
            onBtnNo: function() {
                cc.director.loadScene("WelcomeScene")
            },
            onBtnYes: function() {
                this.gameOver()
            }
        }), cc._RF.pop()
    }, {
        RGame: "RGame"
    }],
    "use_v2.1-2.2.1_cc.Toggle_event": [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "cbe85Qpo7JAV5bhHVbs57FX", "use_v2.1-2.2.1_cc.Toggle_event"), cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0), cc._RF.pop()
    }, {}],
    zh: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "7f9c28Z1vVEgLsINEJYpVJ8", "zh"), window.i18n || (window.i18n = {}), window.i18n.languages || (window.i18n.languages = {}), window.i18n.languages.zh = {
            Select: {
                page1: "\u7b2c1\u9875",
                page2: "\u7b2c2\u9875",
                page3: "\u7b2c3\u9875",
                page4: "\u7b2c4\u9875",
                page5: "\u7b2c5\u9875",
                page6: "\u7b2c6\u9875",
                page7: "\u7b2c7\u9875",
                page8: "\u7b2c8\u9875",
                page9: "\u7b2c9\u9875",
                page10: "\u7b2c10\u9875",
                page11: "\u7b2c11\u9875",
                page12: "\u7b2c12\u9875",
                page13: "\u7b2c13\u9875",
                page14: "\u7b2c14\u9875",
                page15: "\u7b2c15\u9875"
            },
            Stage31: {
                title: "\u4f60\u8981\u9762\u5bf9\u73b0\u5b9e\u561b?",
                escape: "\u9003\u907f",
                face: "\u9762\u5bf9"
            }
        }, cc._RF.pop()
    }, {}]
}, {}, ["s25-game", "s29-game", "s31-game", "AdsControl", "AdsUtils", "GAdsAdapter", "GAdsManager", "IGAdsAdapter", "M4399H5AdsAdapter", "GPluginSDKUtil", "SXAdsManager", "SXAdsUnit", "SXBannerUnit", "SXInterstitialUnit", "SXRewardedvideoUnit", "SXADSPluginAndroid", "SXAnalysisPluginAndroid", "SXOtherSDKPluginAndroid", "SXPluginSDKAndroid", "SXADSPluginIOS", "SXAnalysisPluginIOS", "SXPluginSDKIOS", "ISXADSListener", "SXADSPlugin", "SXAnalysisPlugin", "SXOtherSDKPlugin", "SXPluginSDKMgr", "SXPluginSDKUtils", "SXSystem", "SXADSPluginWeb", "SXAdsWebListener", "SXPluginSDKWeb", "AnimateExeActionCom", "RActionSprite", "AddTargetToCamera", "CameraBtnCtr", "RColliderExeCom", "BlockInputEvents", "NodeTouchEndHandl", "PolygonNode", "RButton", "RDBAnimation", "RToggle", "HuaRongGame", "HuaRongItem", "RMoveAnswer", "RMoveContent", "RMoveGame", "RMoveItem", "RGame", "SokobanGame", "SokobanItem", "AdsContrallCom", "AnimationCallFuncCom", "RNodeFadeInToOut", "RTouchSwallow", "TXCloseLogicCom", "TouchLayerCom", "LaunchApp", "RBagManager", "RCfgMgr", "RCfgObjMgr", "RDBConfigManager", "RDataManager", "RDragManager", "RExecuteManager", "RGameManager", "RGuideManager", "RModeManager", "RTipsManager", "RUIManager", "RUIRelationShipManager", "IBagMgr", "IDataMgr", "LevelItemView", "LevelPageItem", "NextPageItem", "SelectLevelLogic", "SelectLevelView", "AnimateSoundVo", "MoreGame", "RSoundVo", "Timer", "UseMultiVo", "GameSceneView", "RSound", "SoundAnimateCom", "SoundBtnCom", "SoundClickLoopCom", "SoundEffectCom", "SoundMusicCom", "MQueueAnswerDisplay", "MSelectDisplay", "MTextDisplay", "MToggleReset", "RMAnswers", "RMEditBoxAnswers", "RMDABCLabel", "RMDAnimate", "RMDAnimateOne", "RMDAnimatePlayOne", "RMDNumberLabel", "RMDSwitch", "RMechanismDisplay", "RMButtonItem", "RMDBLockItem", "RMNodeItem", "RMToggleItem", "RMTwowayItem", "RMechanismItem", "REditBoxMechanism", "RMechanism", "RSwitchMechanism", "RBaseState", "RBaseStateData", "RStateDataCom", "RStateMachineCom", "RAEnterLevel", "RActionMove", "RAddCondition", "RAddLocalStorageItem", "RAddNodeToStagePopup", "RBagItemChange", "RBanMechanism", "RCCAnimate", "RCCAnimatePlaySpeed", "RCCAnimatePlaySpeedChange", "RCameraControl", "RChangeLevel", "RCheckCondition", "RCheckLocalStorageItem", "RCheckNodeVisible", "RClickMoveState", "RClickOrMoveState", "RClickState", "RCloseShowProp", "RCollectUnlock", "RDBAnimate", "RDelayExe", "RDeleCondition", "RDeleLocalSttorageItem", "REnterLevel", "RExeCount", "RExeHandle", "RGamaOverBack", "RGameLose", "RGameWin", "RLoadScene", "RNullState", "RObtainProp", "ROpacityState", "RPositionState", "RRemoveProp", "RShowPropClose", "RSoundState", "RStateToggle", "RSwitchCondition", "RTXClose", "RTXOpen", "RTipLevel", "RTouchControl", "RTouchState", "RUIShowOrHideEvent", "RUseMultiProp", "RUseProp", "RVisibleState", "RWinLevel", "ADSPanelCtrl", "BagPanelCtrl", "BaseCtrl", "BookPopupCtrl", "GameOverPanelCtrl", "GameUIPanelCtrl", "GetItemPanelCtrl", "HelpPanelCtrl", "SetUpPanelCtrl", "SetUpPopupCtrl", "ShopPanelCtrl", "ShowPopupCtrl", "TipWarnPanelCtrl", "ADSPanelView", "BagItemView", "BagPanelView", "BaseView", "BookPopupView", "GameOverPanelView", "GameUIPanelView", "GetItemPanelView", "HelpPanelView", "SetUpPanelView", "SetUpPopupView", "ShopPanelView", "ShowPopupView", "TipWarnPanelView", "ArrowCom", "DragToolCom", "FlyPropCom", "TXPopBgCom", "TXViewCom", "ToggleLoading", "TouchShowCom", "RCfgCollectVo", "RCfgTextTipItemVo", "CGScene", "CanvasFix", "CollectItemView", "CollectPageItemView", "CollectSceneView", "ExitGame", "IAPCommand", "SelectItemView", "SelectView", "StartUpCom", "TermsAndPrivacy", "WelcomeView", "use_v2.1-2.2.1_cc.Toggle_event", "en", "ja", "ko", "zh", "LanguageData", "LocalizedLabel", "LocalizedNode", "LocalizedSprite", "NodeSet", "SpriteFrameSet", "polyglot.min"]);