(window.webpackJsonp = window.webpackJsonp || []).push([
    [3],
    [, function(t, e, n) {
        var r = n(3),
            i = n(10),
            o = n(16),
            a = n(13),
            s = n(23),
            u = function(t, e, n) {
                var c, l, f, h, p = t & u.F,
                    d = t & u.G,
                    y = t & u.S,
                    v = t & u.P,
                    g = t & u.B,
                    m = d ? r : y ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                    b = d ? i : i[e] || (i[e] = {}),
                    w = b.prototype || (b.prototype = {});
                for (c in d && (n = e), n) f = ((l = !p && m && void 0 !== m[c]) ? m : n)[c], h = g && l ? s(f, r) : v && "function" == typeof f ? s(Function.call, f) : f, m && a(m, c, f, t & u.U), b[c] != f && o(b, c, h), v && w[c] != f && (w[c] = f)
            };
        r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, e, n) {
        var r = n(4);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, e, n) {
        var r = n(63)("wks"),
            i = n(33),
            o = n(3).Symbol,
            a = "function" == typeof o;
        (t.exports = function(t) {
            return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
        }).store = r
    }, function(t, e, n) {
        var r = n(5),
            i = n(87),
            o = n(29),
            a = Object.defineProperty;
        e.f = n(9) ? Object.defineProperty : function(t, e, n) {
            if (r(t), e = o(e, !0), r(n), i) try {
                return a(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function(t, e, n) {
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function o(t, e) {
            return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function a(t, e, n) {
            return (a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
                return function(t, e, n) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(n) : i.value
                    }
                }
            }())(t, e, n || t)
        }

        function s(t) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function u(t, e) {
            return (u = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }
        var c = function(t) {
            return function(e) {
                function n() {
                    var t, e;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                    return (e = o(this, (t = s(n)).call.apply(t, [this].concat(i)))).shui = {
                        align: new Phaser.Point,
                        position: new Phaser.Point,
                        autoUpdate: !0
                    }, e
                }
                var r, c, l;
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && u(t, e)
                }(n, t), r = n, (c = [{
                    key: "update",
                    value: function() {
                        return function() {
                            this.shui.autoUpdate && (this.position.x = this.shui.align.x * this.game.width + this.shui.position.x, this.position.y = this.shui.align.y * this.game.height + this.shui.position.y), a(s(n.prototype), "update", this).call(this)
                        }
                    }()
                }]) && i(r.prototype, c), l && i(r, l), n
            }()
        };

        function l(t) {
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function f(t, e) {
            return !e || "object" !== l(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function h(t) {
            return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function p(t, e) {
            return (p = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }
        var d = function(t) {
            function e(t, n, r, i, o) {
                var a;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (a = f(this, h(e).call(this, t, 0, 0, i, o))).shui.position.set(n, r), a
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && p(t, e)
            }(e, c(Phaser.Text)), e
        }();

        function y(t) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function v(t, e, n) {
            return (v = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
                return function(t, e, n) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = g(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(n) : i.value
                    }
                }
            }())(t, e, n || t)
        }

        function g(t) {
            return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function m(t, e) {
            return (m = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }

        function b(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function w(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function _(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function x(t, e, n) {
            return e && _(t.prototype, e), n && _(t, n), t
        }
        var S = function() {
                function t(e, n, r, i, o, a) {
                    w(this, t), this.button = e, this.name = n, this.key = r, this.baseFrame = i, this.downFrame = o, this.hoverFrame = a, this.baseText = null, this.downText = null, this.hoverText = null
                }
                return x(t, [{
                    key: "setText",
                    value: function() {
                        return function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t;
                            this.baseText = t, this.downText = e, this.hoverText = n
                        }
                    }()
                }]), t
            }(),
            O = function(t) {
                function e(t, n, r, i, o, a, s) {
                    var u, c, l;
                    w(this, e), c = this, u = !(l = g(e).call(this, t, 0, 0, i, null, null, s, o, a)) || "object" !== y(l) && "function" != typeof l ? b(c) : l, void 0 === Phaser.PointerMode.TOUCH && console.warn("Phaser.PointerMode.TOUCH is undefined. Patch or upgrade Phaser. @see https://github.com/photonstorm/phaser-ce/issues/392"), u.forceOut = Phaser.PointerMode.CONTACT, u.justReleasedPreventsOver = Phaser.PointerMode.CONTACT, u.textAutoWrap = !0, u.shui.position.set(n, r), u.shui.baseText = null, u.shui.downText = null, u.shui.hoverText = null, u.shui.currenText = null, u.shui.states = {}, u.shui.currentState = "default", u.shui.buttonState = "base", u.addState("default", i, o, a, s);
                    return u.onInputOver.add(u._hoverHandler, b(b(u)), 100), u.onInputOut.add(u._outHandler, b(b(u)), 100), u.onInputDown.add(u._downHandler, b(b(u)), 100), u.onInputUp.add(u._upHandler, b(b(u)), 100), u
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && m(t, e)
                }(e, c(Phaser.Button)), x(e, [{
                    key: "update",
                    value: function() {
                        return function() {
                            v(g(e.prototype), "update", this).call(this), this.shui.currenText && this.shui.currenText.position.set(-this.width / this.scale.x * this.anchor.x + this.shui.currenText.shui.position.x, -this.height / this.scale.y * this.anchor.y + this.shui.currenText.shui.position.y)
                        }
                    }()
                }, {
                    key: "addState",
                    value: function() {
                        return function(t, e, n, r, i) {
                            this.shui.states[t] = new S(this, t, e, n, r, i), this.shui.currentState === t && this.useState(t)
                        }
                    }()
                }, {
                    key: "setText",
                    value: function() {
                        return function(t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
                                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e;
                            if (t in this.shui.states) {
                                for (var i = this.shui.states[t], o = [e, n, r], a = 0; a < o.length; a++) {
                                    var s = o[a];
                                    s && (this.textAutoWrap && (s.wordWrap = !0, s.wordWrapWidth = this.width), s.setTextBounds(0, 0, this.width, this.height))
                                }
                                i.setText(e, n, r), this.shui.currentState === t && this._setStateText()
                            } else console.error("Button does not have a state named ".concat(t))
                        }
                    }()
                }, {
                    key: "getStates",
                    value: function() {
                        return function() {
                            return Object.keys(this.shui.states)
                        }
                    }()
                }, {
                    key: "getCurrentState",
                    value: function() {
                        return function() {
                            return this.shui.currentState
                        }
                    }()
                }, {
                    key: "useState",
                    value: function() {
                        return function(t) {
                            if (t in this.shui.states) {
                                this.shui.currentState = t;
                                var e = this.shui.states[t];
                                switch (this.key !== e.key && this.loadTexture(e.key), this.setFrames(e.hoverFrame, e.baseFrame, e.downFrame), this.shui.buttonState) {
                                    case "base":
                                        this.changeStateFrame("Out");
                                        break;
                                    case "down":
                                        e.downFrame ? this.changeStateFrame("Down") : this.changeStateFrame("Out");
                                        break;
                                    case "hover":
                                        e.hoverFrame ? this.changeStateFrame("Over") : this.changeStateFrame("Out");
                                        break;
                                    default:
                                        console.warn("Unknown state in button"), this.changeStateFrame("Out")
                                }
                                this._setStateText()
                            } else console.error("Button does not have a state named ".concat(t))
                        }
                    }()
                }, {
                    key: "_setStateText",
                    value: function() {
                        return function() {
                            var t = this.shui.states[this.shui.currentState];
                            this.shui.baseText = t.baseText, this.shui.downText = t.downText, this.shui.hoverText = t.hoverText, this._updateText()
                        }
                    }()
                }, {
                    key: "_updateText",
                    value: function() {
                        return function() {
                            var t;
                            switch (this.shui.currenText && this.removeChild(this.shui.currenText), this.shui.buttonState) {
                                case "down":
                                    t = this.shui.downText;
                                    break;
                                case "hover":
                                    t = this.shui.hoverText
                            }
                            t || (t = this.shui.baseText), t && (this.shui.currenText = t, this.addChild(this.shui.currenText))
                        }
                    }()
                }, {
                    key: "_hoverHandler",
                    value: function() {
                        return function() {
                            this.shui.buttonState = "hover", this._updateText()
                        }
                    }()
                }, {
                    key: "_outHandler",
                    value: function() {
                        return function() {
                            this.shui.buttonState = "base", this._updateText()
                        }
                    }()
                }, {
                    key: "_upHandler",
                    value: function() {
                        return function(t, e, n) {
                            n && !0 !== this.forceOut && (this.forceOut & e.pointerMode) !== e.pointerMode ? this.shui.buttonState = "hover" : this.shui.buttonState = "base", this._updateText()
                        }
                    }()
                }, {
                    key: "_downHandler",
                    value: function() {
                        return function() {
                            this.shui.buttonState = "down", this._updateText()
                        }
                    }()
                }]), e
            }();

        function T(t) {
            return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function E(t, e) {
            return !e || "object" !== T(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function A(t) {
            return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function P(t, e) {
            return (P = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }
        var C = function(t) {
            function e(t, n, r, i, o) {
                var a;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (a = E(this, A(e).call(this, t, 0, 0, i, o))).shui.position.set(n, r), a
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && P(t, e)
            }(e, c(Phaser.Image)), e
        }();

        function k(t) {
            return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function R(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function L(t, e) {
            return !e || "object" !== k(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function I(t, e, n) {
            return (I = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
                return function(t, e, n) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = M(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(n) : i.value
                    }
                }
            }())(t, e, n || t)
        }

        function M(t) {
            return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function F(t, e) {
            return (F = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }
        var j = function(t) {
            function e(t, n, r, i) {
                var o;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (o = L(this, M(e).call(this, t, null))).shui.position.set(n, r), o.shui.inputField = new PhaserInput.InputField(t, 0, 0, i), o.add(o.shui.inputField), o.anchor = new Phaser.Point, o
            }
            var n, r, i;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && F(t, e)
            }(e, c(Phaser.Group)), n = e, (r = [{
                key: "update",
                value: function() {
                    return function() {
                        this.pivot.set(this.width * this.anchor.x, this.height * this.anchor.y), I(M(e.prototype), "update", this).call(this)
                    }
                }()
            }]) && R(n.prototype, r), i && R(n, i), e
        }();

        function N(t) {
            return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function D(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function V(t, e) {
            return !e || "object" !== N(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function U(t, e, n) {
            return (U = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
                return function(t, e, n) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = B(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(n) : i.value
                    }
                }
            }())(t, e, n || t)
        }

        function B(t) {
            return (B = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function z(t, e) {
            return (z = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }
        var H = function(t) {
            function e(t, n) {
                var r;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (r = V(this, B(e).call(this, t, null, n.name))).config = n, r.game = t, r.shui = {}, r.intendedWitdh = r.config.size.width, r.intendedHeight = r.config.size.height, r._childIdMap = {}, r
            }
            var n, r, i;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && z(t, e)
            }(e, Phaser.Group), n = e, (r = [{
                key: "add",
                value: function() {
                    return function(t, n, r) {
                        return U(B(e.prototype), "add", this).call(this, t, n, r), this._addChildToMap(t), t
                    }
                }()
            }, {
                key: "remove",
                value: function() {
                    return function(t, n, r) {
                        var i = t.name;
                        U(B(e.prototype), "remove", this).call(this, t, n, r), delete this._childIdMap[i]
                    }
                }()
            }, {
                key: "getPackData",
                value: function() {
                    return function() {
                        return this.config.resources
                    }
                }()
            }, {
                key: "setup",
                value: function() {
                    return function() {
                        this._addChildren(this, this.config.children)
                    }
                }()
            }, {
                key: "clear",
                value: function() {
                    return function() {
                        this.removeAll(!0), this._childIdMap = {}
                    }
                }()
            }, {
                key: "getElementById",
                value: function() {
                    return function(t) {
                        return t in this._childIdMap ? this._childIdMap[t] : null
                    }
                }()
            }, {
                key: "_addChildToMap",
                value: function() {
                    return function(t) {
                        var e = t.name;
                        0 !== e.length ? (e in this._childIdMap && console.warn('Duplicate id "'.concat(e, '" in layout "').concat(this.config.name, '".')), this._childIdMap[e] = t) : console.warn('Adding child w/o "name" to layout "'.concat(this.config.name, '".'))
                    }
                }()
            }, {
                key: "_addChildren",
                value: function() {
                    return function(t, e) {
                        var n = !0,
                            r = !1,
                            i = void 0;
                        try {
                            for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                var s = o.value;
                                this._addChild(t, s)
                            }
                        } catch (t) {
                            r = !0, i = t
                        } finally {
                            try {
                                n || null == a.return || a.return()
                            } finally {
                                if (r) throw i
                            }
                        }
                    }
                }()
            }, {
                key: "_addChild",
                value: function() {
                    return function(t, e) {
                        var n = null;
                        switch (e.type) {
                            case "image":
                            case "sprite":
                                n = this._createImage(e);
                                break;
                            case "button":
                                n = this._createButton(e);
                                break;
                            case "text":
                                n = this._createText(e);
                                break;
                            case "group":
                                n = this._createGroup(e);
                                break;
                            case "input":
                                n = this._createInput(e);
                                break;
                            default:
                                console.warn('Unsupported type "'.concat(e.type, '" in layout "').concat(this.config.name, '".'))
                        }
                        "angle" in e && (n.angle = e.angle), "scale" in e && n.scale.set(e.scale.x, e.scale.y), null !== n && (n.name = e.id, "anchor" in n && n.anchor.set(e.anchor.x, e.anchor.y), "shui" in n && n.shui.align.set(e.align.x, e.align.y), t.add(n), "shui" in t || this._addChildToMap(n), "children" in e && this._addChildren(n, e.children))
                    }
                }()
            }, {
                key: "_createImage",
                value: function() {
                    return function(t) {
                        return new C(this.game, t.position.x, t.position.y, t.key, t.frame)
                    }
                }()
            }, {
                key: "_createButton",
                value: function() {
                    return function(t) {
                        var e = t.key,
                            n = new O(this.game, t.position.x, t.position.y);
                        n.textAutoWrap = !1;
                        var r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = t.states[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                                var u = a.value;
                                n.addState(u.name, "key" in u ? u.key : e, u.baseFrame, u.downFrame, u.hoverFrame);
                                for (var c = [], l = ["baseText", "downText", "hoverText"], f = 0; f < l.length; f++) {
                                    var h = l[f],
                                        p = null;
                                    u[h] && (p = this._createText(u[h])), c.push(p)
                                }
                                n.setText.apply(n, [u.name].concat(c))
                            }
                        } catch (t) {
                            i = !0, o = t
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }
                }()
            }, {
                key: "_createText",
                value: function() {
                    return function(t) {
                        var e = new d(this.game, t.position.x, t.position.y, t.text, t.style);
                        return e.lineSpacing = t.lineSpacing, "padding" in t && (e.padding.set(t.padding.x, t.padding.y), e.updateText()), e
                    }
                }()
            }, {
                key: "_createGroup",
                value: function() {
                    return function(t) {
                        var e = new Phaser.Group(this.game, null, t.id);
                        return e.position.set(t.position.x, t.position.y), e
                    }
                }()
            }, {
                key: "_createInput",
                value: function() {
                    return function(t) {
                        return new j(this.game, t.position.x, t.position.y, t.options)
                    }
                }()
            }]) && D(n.prototype, r), i && D(n, i), e
        }();
        e.a = {
            Aligned: c,
            Button: O,
            Image: C,
            Input: j,
            Layout: H,
            Text: d
        }
    }, function(t, e, n) {
        t.exports = !n(2)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e) {
        var n = t.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = n)
    }, function(t, e, n) {
        var r = n(27),
            i = Math.min;
        t.exports = function(t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    }, function(t, e, n) {
        var r = {};
        n.r(r), n.d(r, "NONE", function() {
            return Et
        }), n.d(r, "SCALING_ENABLED_MOBILE", function() {
            return At
        }), n.d(r, "SCALING_ENABLED_DESKTOP", function() {
            return Pt
        }), n.d(r, "SCALING_ENABLED_IFRAME", function() {
            return Ct
        }), n.d(r, "LOCK_ORIENTATION_MOBILE", function() {
            return kt
        }), n.d(r, "LOCK_ORIENTATION_DESKTOP", function() {
            return Rt
        }), n.d(r, "FULLSCREEN_MOBILE", function() {
            return Lt
        }), n.d(r, "FULLSCREEN_DESKTOP", function() {
            return It
        });
        n(342);
        var i = {
            number: Phaser.Cache.LAYOUT,
            string: "layout"
        };
        Phaser.Cache.prototype.addLayout = function() {
            return function(t, e, n) {
                this._cache[i.string][t] = n
            }
        }(), Phaser.Cache.prototype.checkLayoutKey = function() {
            return function(t) {
                return this.checkKey(i.number, t)
            }
        }(), Phaser.Cache.prototype.getLayout = function() {
            return function(t) {
                return this.getItem(t, i.number, "getLayout")
            }
        }(), Phaser.Cache.prototype.removeLayout = function() {
            return function(t) {
                delete this._cache[i.string][t]
            }
        }();
        var o = {
            number: Phaser.Cache.PRELOAD_PACK,
            string: "preloadPack"
        };
        Phaser.Cache.prototype.addPreloadPack = function() {
            return function(t, e, n) {
                this._cache[o.string][t] = n
            }
        }(), Phaser.Cache.prototype.checkPreloadPackKey = function() {
            return function(t) {
                return this.checkKey(o.number, t)
            }
        }(), Phaser.Cache.prototype.getPreloadPack = function() {
            return function(t) {
                return this.getItem(t, o.number, "getPreloadPack")
            }
        }(), Phaser.Cache.prototype.removePreloadPack = function() {
            return function(t) {
                delete this._cache[o.string][t]
            }
        }();
        var a = {
            number: Phaser.Cache.THREE_CUBE_TEXTURE,
            string: "threeCubeTexture"
        };
        Phaser.Cache.prototype.addThreeCubeTexture = function() {
            return function(t, e, n) {
                this._cache[a.string][t] = n
            }
        }(), Phaser.Cache.prototype.checkThreeCubeTextureKey = function() {
            return function(t) {
                return this.checkKey(a.number, t)
            }
        }(), Phaser.Cache.prototype.getThreeCubeTexture = function() {
            return function(t) {
                return this.getItem(t, a.number, "getThreeCubeTexture")
            }
        }(), Phaser.Cache.prototype.removeThreeCubeTexture = function() {
            return function(t) {
                delete this._cache[a.string][t]
            }
        }();
        var s = {
            number: Phaser.Cache.THREE_JSON,
            string: "threeJson"
        };
        Phaser.Cache.prototype.addThreeJson = function() {
            return function(t, e, n) {
                this._cache[s.string][t] = n
            }
        }(), Phaser.Cache.prototype.checkThreeJsonKey = function() {
            return function(t) {
                return this.checkKey(s.number, t)
            }
        }(), Phaser.Cache.prototype.getThreeJson = function() {
            return function(t) {
                return this.getItem(t, s.number, "getThreeJson")
            }
        }(), Phaser.Cache.prototype.removeThreeJson = function() {
            return function(t) {
                delete this._cache[s.string][t]
            }
        }();
        var u = {
            number: Phaser.Cache.THREE_OBJECT,
            string: "threeObject"
        };
        Phaser.Cache.prototype.addThreeObject = function() {
            return function(t, e, n) {
                this._cache[u.string][t] = n
            }
        }(), Phaser.Cache.prototype.checkThreeObjectKey = function() {
            return function(t) {
                return this.checkKey(u.number, t)
            }
        }(), Phaser.Cache.prototype.getThreeObject = function() {
            return function(t) {
                return this.getItem(t, u.number, "getThreeObject")
            }
        }(), Phaser.Cache.prototype.removeThreeObject = function() {
            return function(t) {
                delete this._cache[u.string][t]
            }
        }();
        var c = {
            number: Phaser.Cache.THREE_TEXTURE,
            string: "threeTexture"
        };
        Phaser.Cache.prototype.addThreeTexture = function() {
            return function(t, e, n) {
                this._cache[c.string][t] = n
            }
        }(), Phaser.Cache.prototype.checkThreeTextureKey = function() {
            return function(t) {
                return this.checkKey(c.number, t)
            }
        }(), Phaser.Cache.prototype.getThreeTexture = function() {
            return function(t) {
                return this.getItem(t, c.number, "getThreeTexture")
            }
        }(), Phaser.Cache.prototype.removeThreeTexture = function() {
            return function(t) {
                delete this._cache[c.string][t]
            }
        }();
        var l = {
            number: Phaser.Cache.WEBFONT,
            string: "webFont"
        };

        function f(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                } catch (t) {
                    i = !0, o = t
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        Phaser.Cache.prototype.addWebFont = function() {
            return function(t) {
                this._cache[l.string][t] = !0
            }
        }(), Phaser.Cache.prototype.checkWebFontKey = function() {
            return function(t) {
                return this.checkKey(l.number, t)
            }
        }(), Phaser.Cache.prototype.getWebFont = function() {
            return function(t) {
                return this.getItem(t, l.number, "getWebFont")
            }
        }(), Phaser.Cache.prototype.removeWebFont = function() {
            return function(t) {
                delete this._cache[l.string][t]
            }
        }();
        var h = [i, o, a, s, u, c, l],
            p = Phaser.Cache;
        Phaser.Cache = function() {
            return function(t) {
                p.call(this, t);
                for (var e = 0; e < h.length; e++) {
                    var n = h[e];
                    n.string in this._cache || n.number in this._cacheMap ? console.error("duplicate entry in cache tables, ignoring! (".concat(n.string, ":").concat(n.number, ")")) : (this._cache[n.string] = {}, this._cacheMap[n.number] = this._cache[n.string])
                }
            }
        }(), Phaser.Cache.prototype = p.prototype;
        for (var d = Object.entries(p), y = 0; y < d.length; y++) {
            var v = f(d[y], 2),
                g = v[0],
                m = v[1];
            Phaser.Cache[g] = m
        }
        var b = n(162),
            w = n.n(b),
            _ = n(0);

        function x(t) {
            return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function S(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function O(t, e) {
            return !e || "object" !== x(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function T(t, e, n) {
            return (T = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
                return function(t, e, n) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = E(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(n) : i.value
                    }
                }
            }())(t, e, n || t)
        }

        function E(t) {
            return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function A(t, e) {
            return (A = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }
        var P = function(t) {
            return function(e) {
                function n() {
                    var t, e;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                    return (e = O(this, (t = E(n)).call.apply(t, [this].concat(i)))).shui = {
                        align: new Phaser.Point,
                        position: new Phaser.Point,
                        autoUpdate: !0
                    }, e
                }
                var r, i, o;
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && A(t, e)
                }(n, t), r = n, (i = [{
                    key: "update",
                    value: function() {
                        return function() {
                            this.shui.autoUpdate && (this.position.x = this.shui.align.x * this.game.width + this.shui.position.x, this.position.y = this.shui.align.y * this.game.height + this.shui.position.y), T(E(n.prototype), "update", this).call(this)
                        }
                    }()
                }]) && S(r.prototype, i), o && S(r, o), n
            }()
        };

        function C(t) {
            return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function k(t, e) {
            return !e || "object" !== C(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function R(t) {
            return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function L(t, e) {
            return (L = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }
        var I = function(t) {
            function e(t, n, r, i, o) {
                var a;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (a = k(this, R(e).call(this, t, 0, 0, i, o))).shui.position.set(n, r), a
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && L(t, e)
            }(e, P(Phaser.Text)), e
        }();

        function M(t) {
            return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function F(t, e, n) {
            return (F = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
                return function(t, e, n) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = j(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(n) : i.value
                    }
                }
            }())(t, e, n || t)
        }

        function j(t) {
            return (j = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function N(t, e) {
            return (N = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }

        function D(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }

        function V(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function U(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function B(t, e, n) {
            return e && U(t.prototype, e), n && U(t, n), t
        }
        var z = function() {
                function t(e, n, r, i, o, a) {
                    V(this, t), this.button = e, this.name = n, this.key = r, this.baseFrame = i, this.downFrame = o, this.hoverFrame = a, this.baseText = null, this.downText = null, this.hoverText = null
                }
                return B(t, [{
                    key: "setText",
                    value: function() {
                        return function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t;
                            this.baseText = t, this.downText = e, this.hoverText = n
                        }
                    }()
                }]), t
            }(),
            H = function(t) {
                function e(t, n, r, i, o, a, s) {
                    var u, c, l;
                    V(this, e), c = this, u = !(l = j(e).call(this, t, 0, 0, i, null, null, s, o, a)) || "object" !== M(l) && "function" != typeof l ? D(c) : l, void 0 === Phaser.PointerMode.TOUCH && console.warn("Phaser.PointerMode.TOUCH is undefined. Patch or upgrade Phaser. @see https://github.com/photonstorm/phaser-ce/issues/392"), u.forceOut = Phaser.PointerMode.CONTACT, u.justReleasedPreventsOver = Phaser.PointerMode.CONTACT, u.textAutoWrap = !0, u.shui.position.set(n, r), u.shui.baseText = null, u.shui.downText = null, u.shui.hoverText = null, u.shui.currenText = null, u.shui.states = {}, u.shui.currentState = "default", u.shui.buttonState = "base", u.addState("default", i, o, a, s);
                    return u.onInputOver.add(u._hoverHandler, D(D(u)), 100), u.onInputOut.add(u._outHandler, D(D(u)), 100), u.onInputDown.add(u._downHandler, D(D(u)), 100), u.onInputUp.add(u._upHandler, D(D(u)), 100), u
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && N(t, e)
                }(e, P(Phaser.Button)), B(e, [{
                    key: "update",
                    value: function() {
                        return function() {
                            F(j(e.prototype), "update", this).call(this), this.shui.currenText && this.shui.currenText.position.set(-this.width / this.scale.x * this.anchor.x + this.shui.currenText.shui.position.x, -this.height / this.scale.y * this.anchor.y + this.shui.currenText.shui.position.y)
                        }
                    }()
                }, {
                    key: "addState",
                    value: function() {
                        return function(t, e, n, r, i) {
                            this.shui.states[t] = new z(this, t, e, n, r, i), this.shui.currentState === t && this.useState(t)
                        }
                    }()
                }, {
                    key: "setText",
                    value: function() {
                        return function(t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
                                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e;
                            if (t in this.shui.states) {
                                for (var i = this.shui.states[t], o = [e, n, r], a = 0; a < o.length; a++) {
                                    var s = o[a];
                                    s && (this.textAutoWrap && (s.wordWrap = !0, s.wordWrapWidth = this.width), s.setTextBounds(0, 0, this.width, this.height))
                                }
                                i.setText(e, n, r), this.shui.currentState === t && this._setStateText()
                            } else console.error("Button does not have a state named ".concat(t))
                        }
                    }()
                }, {
                    key: "getStates",
                    value: function() {
                        return function() {
                            return Object.keys(this.shui.states)
                        }
                    }()
                }, {
                    key: "getCurrentState",
                    value: function() {
                        return function() {
                            return this.shui.currentState
                        }
                    }()
                }, {
                    key: "useState",
                    value: function() {
                        return function(t) {
                            if (t in this.shui.states) {
                                this.shui.currentState = t;
                                var e = this.shui.states[t];
                                switch (this.key !== e.key && this.loadTexture(e.key), this.setFrames(e.hoverFrame, e.baseFrame, e.downFrame), this.shui.buttonState) {
                                    case "base":
                                        this.changeStateFrame("Out");
                                        break;
                                    case "down":
                                        e.downFrame ? this.changeStateFrame("Down") : this.changeStateFrame("Out");
                                        break;
                                    case "hover":
                                        e.hoverFrame ? this.changeStateFrame("Over") : this.changeStateFrame("Out");
                                        break;
                                    default:
                                        console.warn("Unknown state in button"), this.changeStateFrame("Out")
                                }
                                this._setStateText()
                            } else console.error("Button does not have a state named ".concat(t))
                        }
                    }()
                }, {
                    key: "_setStateText",
                    value: function() {
                        return function() {
                            var t = this.shui.states[this.shui.currentState];
                            this.shui.baseText = t.baseText, this.shui.downText = t.downText, this.shui.hoverText = t.hoverText, this._updateText()
                        }
                    }()
                }, {
                    key: "_updateText",
                    value: function() {
                        return function() {
                            var t;
                            switch (this.shui.currenText && this.removeChild(this.shui.currenText), this.shui.buttonState) {
                                case "down":
                                    t = this.shui.downText;
                                    break;
                                case "hover":
                                    t = this.shui.hoverText
                            }
                            t || (t = this.shui.baseText), t && (this.shui.currenText = t, this.addChild(this.shui.currenText))
                        }
                    }()
                }, {
                    key: "_hoverHandler",
                    value: function() {
                        return function() {
                            this.shui.buttonState = "hover", this._updateText()
                        }
                    }()
                }, {
                    key: "_outHandler",
                    value: function() {
                        return function() {
                            this.shui.buttonState = "base", this._updateText()
                        }
                    }()
                }, {
                    key: "_upHandler",
                    value: function() {
                        return function(t, e, n) {
                            n && !0 !== this.forceOut && (this.forceOut & e.pointerMode) !== e.pointerMode ? this.shui.buttonState = "hover" : this.shui.buttonState = "base", this._updateText()
                        }
                    }()
                }, {
                    key: "_downHandler",
                    value: function() {
                        return function() {
                            this.shui.buttonState = "down", this._updateText()
                        }
                    }()
                }]), e
            }();

        function W(t) {
            return (W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function G(t, e) {
            return !e || "object" !== W(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function K(t) {
            return (K = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function X(t, e) {
            return (X = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }
        var J = function(t) {
            function e(t, n, r, i, o) {
                var a;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (a = G(this, K(e).call(this, t, 0, 0, i, o))).shui.position.set(n, r), a
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && X(t, e)
            }(e, P(Phaser.Image)), e
        }();

        function Y(t) {
            return (Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function q(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function Z(t, e) {
            return !e || "object" !== Y(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function $(t, e, n) {
            return ($ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
                return function(t, e, n) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Q(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(n) : i.value
                    }
                }
            }())(t, e, n || t)
        }

        function Q(t) {
            return (Q = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function tt(t, e) {
            return (tt = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }
        var et = function(t) {
            function e(t, n, r, i) {
                var o;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (o = Z(this, Q(e).call(this, t, null))).shui.position.set(n, r), o.shui.inputField = new PhaserInput.InputField(t, 0, 0, i), o.add(o.shui.inputField), o.anchor = new Phaser.Point, o.TEXT_CHANGE_POLL_TIME = .1, o.maxChars = o.shui.inputField.inputOptions.max, o.txtChangePollTime = 0, o
            }
            var n, r, i;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && tt(t, e)
            }(e, P(Phaser.Group)), n = e, (r = [{
                key: "update",
                value: function() {
                    return function() {
                        this.pivot.set(this.width * this.anchor.x, this.height * this.anchor.y), $(Q(e.prototype), "update", this).call(this);
                        var t = Math.min(.1, this.game.time.elapsedMS / 1e3);
                        if (this.txtChangePollTime -= t, this.txtChangePollTime < 0 && (this.txtChangePollTime = this.TEXT_CHANGE_POLL_TIME, this.shui.inputField.value.length > this.maxChars)) {
                            var n = this.shui.inputField.value.slice(0, this.maxChars);
                            this.shui.inputField.setText(n), this.shui.inputField.startFocus()
                        }
                    }
                }()
            }]) && q(n.prototype, r), i && q(n, i), e
        }();

        function nt(t) {
            return (nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function rt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function it(t, e) {
            return !e || "object" !== nt(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function ot(t, e, n) {
            return (ot = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
                return function(t, e, n) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = at(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(n) : i.value
                    }
                }
            }())(t, e, n || t)
        }

        function at(t) {
            return (at = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function st(t, e) {
            return (st = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }
        var ut = function(t) {
                function e(t, n) {
                    var r;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (r = it(this, at(e).call(this, t, null, n.name))).config = n, r.game = t, r.shui = {}, r.intendedWitdh = r.config.size.width, r.intendedHeight = r.config.size.height, r._childIdMap = {}, r
                }
                var n, r, i;
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && st(t, e)
                }(e, Phaser.Group), n = e, (r = [{
                    key: "add",
                    value: function() {
                        return function(t, n, r) {
                            return ot(at(e.prototype), "add", this).call(this, t, n, r), this._addChildToMap(t), t
                        }
                    }()
                }, {
                    key: "remove",
                    value: function() {
                        return function(t, n, r) {
                            var i = t.name;
                            ot(at(e.prototype), "remove", this).call(this, t, n, r), delete this._childIdMap[i]
                        }
                    }()
                }, {
                    key: "getPackData",
                    value: function() {
                        return function() {
                            return this.config.resources
                        }
                    }()
                }, {
                    key: "setup",
                    value: function() {
                        return function() {
                            this._addChildren(this, this.config.children)
                        }
                    }()
                }, {
                    key: "clear",
                    value: function() {
                        return function() {
                            this.removeAll(!0), this._childIdMap = {}
                        }
                    }()
                }, {
                    key: "getElementById",
                    value: function() {
                        return function(t) {
                            return t in this._childIdMap ? this._childIdMap[t] : null
                        }
                    }()
                }, {
                    key: "_addChildToMap",
                    value: function() {
                        return function(t) {
                            var e = t.name;
                            0 !== e.length ? (e in this._childIdMap && console.warn('Duplicate id "'.concat(e, '" in layout "').concat(this.config.name, '".')), this._childIdMap[e] = t) : console.warn('Adding child w/o "name" to layout "'.concat(this.config.name, '".'))
                        }
                    }()
                }, {
                    key: "_addChildren",
                    value: function() {
                        return function(t, e) {
                            var n = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                                    var s = o.value;
                                    this._addChild(t, s)
                                }
                            } catch (t) {
                                r = !0, i = t
                            } finally {
                                try {
                                    n || null == a.return || a.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                        }
                    }()
                }, {
                    key: "_addChild",
                    value: function() {
                        return function(t, e) {
                            var n = null;
                            switch (e.type) {
                                case "image":
                                case "sprite":
                                    n = this._createImage(e);
                                    break;
                                case "button":
                                    n = this._createButton(e);
                                    break;
                                case "text":
                                    n = this._createText(e);
                                    break;
                                case "group":
                                    n = this._createGroup(e);
                                    break;
                                case "input":
                                    n = this._createInput(e);
                                    break;
                                default:
                                    console.warn('Unsupported type "'.concat(e.type, '" in layout "').concat(this.config.name, '".'))
                            }
                            "angle" in e && (n.angle = e.angle), "scale" in e && n.scale.set(e.scale.x, e.scale.y), null !== n && (n.name = e.id, "anchor" in n && n.anchor.set(e.anchor.x, e.anchor.y), "shui" in n && n.shui.align.set(e.align.x, e.align.y), t.add(n), "shui" in t || this._addChildToMap(n), "children" in e && this._addChildren(n, e.children))
                        }
                    }()
                }, {
                    key: "_createImage",
                    value: function() {
                        return function(t) {
                            return new J(this.game, t.position.x, t.position.y, t.key, t.frame)
                        }
                    }()
                }, {
                    key: "_createButton",
                    value: function() {
                        return function(t) {
                            var e = t.key,
                                n = new H(this.game, t.position.x, t.position.y);
                            n.textAutoWrap = !1;
                            var r = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var a, s = t.states[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) {
                                    var u = a.value;
                                    n.addState(u.name, "key" in u ? u.key : e, u.baseFrame, u.downFrame, u.hoverFrame);
                                    for (var c = [], l = ["baseText", "downText", "hoverText"], f = 0; f < l.length; f++) {
                                        var h = l[f],
                                            p = null;
                                        u[h] && (p = this._createText(u[h])), c.push(p)
                                    }
                                    n.setText.apply(n, [u.name].concat(c))
                                }
                            } catch (t) {
                                i = !0, o = t
                            } finally {
                                try {
                                    r || null == s.return || s.return()
                                } finally {
                                    if (i) throw o
                                }
                            }
                            return n
                        }
                    }()
                }, {
                    key: "_createText",
                    value: function() {
                        return function(t) {
                            var e = new I(this.game, t.position.x, t.position.y, t.text, t.style);
                            return e.lineSpacing = t.lineSpacing, "padding" in t && (e.padding.set(t.padding.x, t.padding.y), e.updateText()), e
                        }
                    }()
                }, {
                    key: "_createGroup",
                    value: function() {
                        return function(t) {
                            var e = new Phaser.Group(this.game, null, t.id);
                            return e.position.set(t.position.x, t.position.y), e
                        }
                    }()
                }, {
                    key: "_createInput",
                    value: function() {
                        return function(t) {
                            return new et(this.game, t.position.x, t.position.y, t.options)
                        }
                    }()
                }]) && rt(n.prototype, r), i && rt(n, i), e
            }(),
            ct = {
                Aligned: P,
                Button: H,
                Image: J,
                Input: et,
                Layout: ut,
                Text: I
            };

        function lt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var ft = !0,
            ht = null,
            pt = /\.(png|jpg|jpeg)$/i,
            dt = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, r, i;
                return e = t, r = null, i = [{
                    key: "isChromeIOs",
                    value: function() {
                        return function() {
                            return Phaser.Device.mobileSafari && /CriOS/i.test(navigator.userAgent)
                        }
                    }()
                }, {
                    key: "isIFrame",
                    value: function() {
                        return function() {
                            return window.parent !== window
                        }
                    }()
                }, {
                    key: "supportsWebp",
                    value: function() {
                        return function() {
                            if (null === ht) {
                                var t = document.createElement("canvas");
                                t.width = 1, t.height = 1, ht = t.toDataURL("image/webp").indexOf("image/webp") > -1
                            }
                            return ht
                        }
                    }()
                }, {
                    key: "getViewportSize",
                    value: function() {
                        return function() {
                            return {
                                width: document.documentElement.clientWidth,
                                height: document.documentElement.clientHeight
                            }
                        }
                    }()
                }, {
                    key: "isFullScreen",
                    value: function() {
                        return function() {
                            try {
                                if (t.isIFrame()) {
                                    var e = window.parent.document.fullscreenElement || window.parent.document.webkitFullscreenElement || window.parent.document.mozFullScreenElement || window.parent.document.msFullscreenElement;
                                    return e && e === window.frameElement
                                }
                            } catch (t) {}
                            return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)
                        }
                    }()
                }, {
                    key: "canLockScreen",
                    value: function() {
                        return function() {
                            return window.screen && window.screen.orientation && window.screen.orientation.lock
                        }
                    }()
                }, {
                    key: "getScreenOrientation",
                    value: function() {
                        return function() {
                            var t = null;
                            if (ft)
                                if (window.screen && window.screen.orientation && "string" == typeof window.screen.orientation.type) t = window.screen.orientation.type;
                                else if ("number" == typeof window.orientation) switch (window.orientation) {
                                case 90:
                                    t = "landscape-primary";
                                    break;
                                case -90:
                                    t = "landscape-secondary";
                                    break;
                                case 180:
                                    t = "portrait-secondary";
                                    break;
                                case 0:
                                default:
                                    t = "portrait-primary"
                            } else console.warn("screen orientation not supported on this device"), ft = !1;
                            return t
                        }
                    }()
                }, {
                    key: "getAssetUrl",
                    value: function() {
                        return function(e) {
                            var r = e;
                            if (r.startsWith("./") && (r = r.substring(2)), r.startsWith("assets/") && (r = r.substring(7)), t.supportsWebp()) {
                                var i = r;
                                r = r.replace(pt, ".webp");
                                try {
                                    return r = n(116)("./".concat(r))
                                } catch (t) {
                                    r = i
                                }
                            }
                            return r = n(116)("./".concat(r))
                        }
                    }()
                }], r && lt(e.prototype, r), i && lt(e, i), t
            }(),
            yt = new _.CubeTextureLoader,
            vt = new _.JSONLoader,
            gt = new _.ObjectLoader,
            mt = new _.TextureLoader,
            bt = Phaser.Loader.prototype.addToFileList,
            wt = Phaser.Loader.prototype.loadFile,
            _t = Phaser.Loader.prototype.pack,
            xt = Phaser.Loader.prototype.processPack,
            St = {
                layout: Phaser.Cache.LAYOUT,
                threeCubeTexture: Phaser.Cache.THREE_CUBE_TEXTURE,
                threeJson: Phaser.Cache.THREE_JSON,
                threeObject: Phaser.Cache.THREE_OBJECT,
                threeTexture: Phaser.Cache.THREE_TEXTURE,
                webFont: Phaser.Cache.WEBFONT,
                image: Phaser.Cache.IMAGE,
                text: Phaser.Cache.TEXT,
                json: Phaser.Cache.JSON,
                xml: Phaser.Cache.XML,
                binary: Phaser.Cache.BINARY,
                spritesheet: Phaser.Cache.SPRITE_SHEET,
                video: Phaser.Cache.VIDEO,
                audio: Phaser.Cache.SOUND,
                audiosprite: Phaser.Cache.SOUND,
                tilemap: Phaser.Cache.TILEMAP,
                physics: Phaser.Cache.PHYSICS,
                bitmapfont: Phaser.Cache.BITMAPFONT,
                textureatlas: Phaser.Cache.IMAGE,
                shader: Phaser.Cache.SHADER
            };
        Phaser.Loader.prototype.addToFileList = function() {
            return function(t, e, n, r, i, o) {
                return t in St || console.error("".concat(t, " is not in caches! File SHEEPCORE bug!")), this.game.cache.checkKey(St[t], e) ? this : bt.call(this, t, e, n, r, i, o)
            }
        }(), Phaser.Loader.prototype.loadFile = function() {
            return function(t) {
                var e = this;
                switch (t.type) {
                    case "layout":
                        this.xhrLoad(t, this.transformUrl(t.url, t), "text", this.layoutLoadComplete);
                        break;
                    case "threeCubeTexture":
                        yt.load(t.urls, function(n) {
                            e.game.cache.addThreeCubeTexture(t.key, t.url, n), e.asyncComplete(t)
                        }, null, function() {
                            e.asyncComplete(t, "Error loading three.js texture")
                        });
                        break;
                    case "threeJson":
                        vt.load(t.url, function(n) {
                            e.game.cache.addThreeJson(t.key, t.url, n), e.asyncComplete(t)
                        }, function() {}, function() {
                            e.asyncComplete(t, "Error loading three.js json")
                        });
                        break;
                    case "threeObject":
                        gt.load(t.url, function(n) {
                            e.game.cache.addThreeObject(t.key, t.url, n), e.asyncComplete(t)
                        }, function() {}, function() {
                            e.asyncComplete(t, "Error loading three.js object")
                        });
                        break;
                    case "threeTexture":
                        mt.load(t.url, function(n) {
                            e.game.cache.addThreeTexture(t.key, t.url, n), e.asyncComplete(t)
                        }, null, function() {
                            e.asyncComplete(t, "Error loading three.js texture")
                        });
                        break;
                    case "webFont":
                        var n = t.families.slice(),
                            r = !1;
                        w.a.load({
                            classes: !1,
                            custom: {
                                families: t.families,
                                urls: t.urls
                            },
                            fontactive: function(e) {
                                var i = n.indexOf(e);
                                i > -1 && n.splice(i, 1), 0 === n.length && (r ? this.asyncComplete(t, "Error loading WebFont") : this.asyncComplete(t))
                            }.bind(this),
                            fontinactive: function(e) {
                                var i = n.indexOf(e);
                                i > -1 && n.splice(i, 1), r = !0, console.log(n, r), 0 === n.length && (r ? this.asyncComplete(t, "Error loading WebFont") : (this.game.cache.addWebFont(t.key), this.asyncComplete(t)))
                            }.bind(this)
                        });
                        break;
                    default:
                        wt.call(this, t)
                }
            }
        }(), Phaser.Loader.prototype.pack = function() {
            return function(t, e, n, r) {
                return this.cache.checkPreloadPackKey(t) ? this : _t.call(this, t, e, n, r)
            }
        }(), Phaser.Loader.prototype.processPack = function() {
            return function(t) {
                var e = t.data[t.key];
                if (e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        switch (r.type) {
                            case "layout":
                                this.layout(r.key, dt.getAssetUrl(r.url), r.overwrite);
                                break;
                            case "threeCubeTexture":
                                r.urls = r.urls.map(function(t) {
                                    return dt.getAssetUrl(t)
                                }), this.threeCubeTexture(r.key, r.urls);
                                break;
                            case "threeJson":
                                this.threeJson(r.key, dt.getAssetUrl(r.url), r.overwrite);
                                break;
                            case "threeObject":
                                this.threeObject(r.key, dt.getAssetUrl(r.url), r.overwrite);
                                break;
                            case "threeTexture":
                                this.threeTexture(r.key, dt.getAssetUrl(r.url), r.overwrite);
                                break;
                            case "webFont":
                                r.urls = r.urls.map(function(t) {
                                    return dt.getAssetUrl(t)
                                }), this.webFont(r.key, r.urls, r.families, r.overwrite);
                                break;
                            default:
                                "url" in r && (r.url = dt.getAssetUrl(r.url)), "textureURL" in r && (r.textureURL = dt.getAssetUrl(r.textureURL)), "atlasURL" in r && (r.atlasURL = dt.getAssetUrl(r.atlasURL)), "jsonURL" in r && (r.jsonURL = dt.getAssetUrl(r.jsonURL)), "urls" in r && (r.urls = r.urls.map(function(t) {
                                    return dt.getAssetUrl(t)
                                }))
                        }
                    }
                    xt.call(this, t), this.cache.addPreloadPack(t.key, t.url, e)
                } else console.warn("Phaser.Loader - ".concat(t.key, ": pack has data, but not for pack key"))
            }
        }(), Phaser.Loader.prototype.layoutLoadComplete = function() {
            return function(t, e) {
                var n = JSON.parse(e.responseText);
                this.cache.addLayout(t.key, t.url, n);
                var r = new ct.Layout(this.game, n).getPackData(),
                    i = Object.getOwnPropertyNames(r);
                i.length > 2 && console.warn("More than one key found in layout resources.");
                var o = i.reduce(function(t, e) {
                    return "meta" !== e ? e : t
                });
                this.pack(o, t.url, r), this.asyncComplete(t)
            }
        }(), Phaser.Loader.prototype.layout = function() {
            return function(t, e, n) {
                return this.addToFileList("layout", t, e, n, ".json")
            }
        }(), Phaser.Loader.prototype.threeCubeTexture = function() {
            return function(t, e, n) {
                return this.addToFileList("threeCubeTexture", t, e[0], {
                    urls: e
                }, n, ".png")
            }
        }(), Phaser.Loader.prototype.threeJson = function() {
            return function(t, e, n) {
                return this.addToFileList("threeJson", t, e, {}, n, ".json")
            }
        }(), Phaser.Loader.prototype.threeObject = function() {
            return function(t, e, n) {
                return this.addToFileList("threeObject", t, e, {}, n, ".json")
            }
        }(), Phaser.Loader.prototype.threeTexture = function() {
            return function(t, e, n) {
                return this.addToFileList("threeTexture", t, e, {}, n, ".png")
            }
        }(), Phaser.Loader.prototype.webFont = function() {
            return function(t, e, n, r) {
                return this.addToFileList("webFont", t, e[0], {
                    urls: e,
                    families: n
                }, r, ".css")
            }
        }();
        n(443);
        var Ot = Phaser.ScaleManager.prototype.resetCanvas,
            Tt = Phaser.ScaleManager.prototype.getParentBounds;
        Phaser.ScaleManager.prototype.resetCanvas = function() {
            return function(t, e) {
                var n = this.game.canvas.style.display;
                if (this.game.canvas.style.display = "none", this.game.three && (this.game.three.renderer.domElement.style.display = "none"), 0 !== this.game.fsGameRotated) {
                    var r = dt.getViewportSize();
                    this.game.canvas.style.width = "".concat(r.height, "px"), this.game.canvas.style.height = "".concat(r.width, "px");
                    var i = this.game.fsGameRotated,
                        o = 0,
                        a = "";
                    switch (i) {
                        case -90:
                            o = -r.height, a = "top right";
                            break;
                        case 90:
                            o = -r.width, a = "top left"
                    }
                    this.game.canvas.style.transform = "rotate(".concat(i, "deg) translateY(").concat(o, "px)"), this.game.canvas.style.transformOrigin = a
                } else {
                    if (Phaser.Device.mobileSafari && dt.isIFrame()) {
                        var s = dt.getViewportSize();
                        t = "".concat(s.width, "px"), e = "".concat(s.height, "px")
                    }
                    Ot.call(this, t, e), this.game.canvas.style.transform = "", this.game.canvas.style.transformOrigin = ""
                }
                this.game.canvas.style.display = n
            }
        }(), Phaser.ScaleManager.prototype.getParentBounds = function() {
            return function(t) {
                var e = Tt.call(this, t);
                if (0 !== this.game.fsGameRotated) {
                    var n = e.width;
                    e.width = e.height, e.height = n
                }
                return e
            }
        }(), void 0 === Phaser.PointerMode.TOUCH && (Phaser.PointerMode.TOUCH = Phaser.PointerMode.CONTACT);
        var Et = 0,
            At = 1,
            Pt = 2,
            Ct = 4,
            kt = 2,
            Rt = 4,
            Lt = 2,
            It = 4;

        function Mt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var Ft = function() {
            function t(e) {
                var n = this;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.game = e, this.renderer = new _.WebGLRenderer(e.fsConf.threeParameters), this.renderer.setSize(this.game.width, this.game.height, !1), this.renderer.domElement.style.display = "none", this.game.fsConf.screenshot && this._patchRenderer(), document.getElementById(e.fsConf.container3D).appendChild(this.renderer.domElement), this.styleObserver = new MutationObserver(function() {
                    n._copyPhaserStyles()
                })
            }
            var e, n, r;
            return e = t, (n = [{
                key: "show",
                value: function() {
                    return function() {
                        this._copyPhaserStyles(), this.styleObserver.observe(this.game.canvas, {
                            attributes: !0,
                            attributeFilter: ["style"]
                        })
                    }
                }()
            }, {
                key: "hide",
                value: function() {
                    return function() {
                        this.styleObserver.disconnect(), this.renderer.domElement.style.display = "none"
                    }
                }()
            }, {
                key: "resize",
                value: function() {
                    return function() {
                        this.renderer.setSize(this.game.width, this.game.height, !1)
                    }
                }()
            }, {
                key: "_copyPhaserStyles",
                value: function() {
                    return function() {
                        this.renderer.domElement.style.cssText = this.game.canvas.style.cssText
                    }
                }()
            }, {
                key: "_patchRenderer",
                value: function() {
                    return function() {
                        var t = this;
                        this._originalRender = this.renderer.render, this._lastUsedScene = [], this._lastUsedCamera = [], this.renderer.render = function(e, n, r, i) {
                            t.game._screenshotPlugin._screenshotting && (t._lastUsedScene.push(e), t._lastUsedCamera.push(n)), t._originalRender.call(t.renderer, e, n, r, i)
                        }
                    }
                }()
            }]) && Mt(e.prototype, n), r && Mt(e, r), t
        }();

        function jt(t) {
            return (jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Nt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function Dt(t, e) {
            return !e || "object" !== jt(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Vt(t, e, n) {
            return (Vt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function() {
                return function(t, e, n) {
                    var r = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Ut(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(n) : i.value
                    }
                }
            }())(t, e, n || t)
        }

        function Ut(t) {
            return (Ut = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function Bt(t, e) {
            return (Bt = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }
        var zt = function(t) {
            function e(t, n) {
                var r;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (r = Dt(this, Ut(e).call(this, t, n)))._screenshotting = !1, r._depthBuffer = !1, r._setupDepth(), r
            }
            var n, r, i;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Bt(t, e)
            }(e, Phaser.Plugin), n = e, (r = [{
                key: "_setupDepth",
                value: function() {
                    return function() {
                        this.renderTarget = new _.WebGLRenderTarget(this.game.fsConf.width, this.game.fsConf.height), this.renderTarget.texture.format = _.RGBFormat, this.renderTarget.texture.minFilter = _.NearestFilter, this.renderTarget.texture.magFilter = _.NearestFilter, this.renderTarget.texture.generateMipmaps = !1, this.renderTarget.stencilBuffer = !1;
                        var t = new _.DepthTexture(this.game.fsConf.width, this.game.fsConf.height);
                        this.renderTarget.depthTexture = t, this.depthScene = new _.Scene, this.depthCamera = new _.OrthographicCamera(-1, 1, 1, -1, 0, 1);
                        var e = _.UniformsUtils.merge([_.UniformsLib.common]);
                        e.map.value = this.renderTarget.depthTexture;
                        var n = new _.Mesh(new _.PlaneBufferGeometry(2, 2), new _.ShaderMaterial({
                            defines: {
                                USE_MAP: !0
                            },
                            uniforms: e,
                            vertexShader: "\n\t\t\t\t\t#include <common>\n\t\t\t\t\t#include <uv_pars_vertex>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\t#include <uv_vertex>\n\t\t\t\t\t\t\n\t\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t\t#include <project_vertex>\n\t\t\t\t\t\t#include <worldpos_vertex>\n\t\t\t\t\t}\n\t\t\t\t",
                            fragmentShader: "\n\t\t\t\t\t#include <common>\n\t\t\t\t\t#include <uv_pars_fragment>\n\t\t\t\t\t#include <map_pars_fragment>\n\n\t\t\t\t\tvoid main() {\n\t\t\t\t\t\tfloat c = 1.0 - texture2D(map, vUv).r;\n\t\t\t\t\t\tgl_FragColor = vec4(c, c, c, 1.0);\n\t\t\t\t\t}\n\t\t\t\t"
                        }));
                        this.depthScene.add(n)
                    }
                }()
            }, {
                key: "takeScreenshot",
                value: function() {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this._screenshotting = !0, this._depthBuffer = t
                    }
                }()
            }, {
                key: "saveBlob",
                value: function() {
                    return function(t, e) {
                        var n = document.createElement("a");
                        document.body.appendChild(n), n.style = "display: none";
                        var r = window.URL.createObjectURL(t);
                        n.href = r, n.download = e, n.click(), window.URL.revokeObjectURL(r), n.parentNode.removeChild(n)
                    }
                }()
            }, {
                key: "preUpdate",
                value: function() {
                    return function() {
                        this._screenshotting && (this.game.three._lastUsedScene.length = 0, this.game.three._lastUsedCamera.length = 0)
                    }
                }()
            }, {
                key: "postRender",
                value: function() {
                    return function() {
                        var t = this;
                        if (Vt(Ut(e.prototype), "postRender", this).call(this), this._screenshotting)
                            if (this._screenshotting = !1, this.game.three)
                                if (this._depthBuffer) {
                                    this.game.three.renderer.domElement.toBlob(function(e) {
                                        t.saveBlob(e, "screenshot.png")
                                    }, "image/png");
                                    for (var n = 0; n < this.game.three._lastUsedScene.length; n++) {
                                        var r = this.game.three._lastUsedScene[n],
                                            i = this.game.three._lastUsedCamera[n];
                                        this.game.three._originalRender.call(this.game.three.renderer, r, i, this.renderTarget, 0 === n)
                                    }
                                    this.game.three._originalRender.call(this.game.three.renderer, this.depthScene, this.depthCamera), this.game.three.renderer.domElement.toBlob(function(e) {
                                        t.saveBlob(e, "screenshot_depth.png")
                                    }, "image/png")
                                } else {
                                    var o = document.createElement("canvas");
                                    o.width = this.game.fsConf.width, o.height = this.game.fsConf.height;
                                    var a = o.getContext("2d");
                                    a.drawImage(this.game.three.renderer.domElement, 0, 0), a.drawImage(this.game.canvas, 0, 0), o.toBlob(function(e) {
                                        t.saveBlob(e, "screenshot.png")
                                    }, "image/png")
                                }
                        else this.game.canvas.toBlob(function(e) {
                            t.saveBlob(e, "screenshot.png")
                        }, "image/png")
                    }
                }()
            }]) && Nt(n.prototype, r), i && Nt(n, i), e
        }();

        function Ht(t) {
            return (Ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function Wt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function Gt(t, e) {
            return !e || "object" !== Ht(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function Kt(t) {
            return (Kt = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function Xt(t, e) {
            return (Xt = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }
        var Jt = function(t) {
            function e(t) {
                var n;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var r, i, o = {
                    width: 720,
                    height: 1280,
                    responsive: At | Ct,
                    lockOrientation: kt,
                    fullscreen: Lt,
                    three: !1,
                    container2D: "container-2d",
                    container3D: "container-3d",
                    enableDebug: !0,
                    showHeader: !0,
                    disableContextMenu: !0,
                    antialias: "auto",
                    threeParameters: {},
                    phaserParameters: {
                        renderer: Phaser.CANVAS,
                        enableDebug: !0,
                        roundPixels: !0
                    },
                    screenshot: !1,
                    screenshotLogarithmicDepthBuffer: !0
                };
                return Phaser.Utils.mixin(t, o), o.phaserParameters.enableDebug = o.enableDebug, Phaser.Device.onInitialized.add(function() {
                    Phaser.Device.mspointer = !1, "auto" === o.antialias ? (r = !Phaser.Device.iOS, i = Phaser.Device.desktop) : (r = o.antialias, i = o.antialias), n.antialias = r, o.threeParameters.antialias = i, o.showHeader && n._showHeader(o.enableDebug)
                }), o.phaserParameters.parent = o.container2D, o.phaserParameters.width = o.width, o.phaserParameters.height = o.height, o.phaserParameters.transparent = o.three, (n = Gt(this, Kt(e).call(this, o.phaserParameters)))._parseFlags(), n.fsConf = o, n.three = null, n.fsGameRotated = 0, n.device.whenReady(function() {
                    n._setupScreenshot(), n._setupThree(), n._applyCommonWorkarounds(), n._setupScaling(), n._setupDebug()
                }), n
            }
            var n, r, i;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Xt(t, e)
            }(e, Phaser.Game), n = e, (r = [{
                key: "_parseFlags",
                value: function() {
                    return function() {
                        var t = this;
                        this.flags = {};
                        var e = document.location.hash.substring(1);
                        e.length > 0 && e.split(";").forEach(function(e) {
                            e.length > 0 && (t.flags[e] = !0)
                        })
                    }
                }()
            }, {
                key: "_reloadWithFlags",
                value: function() {
                    return function() {
                        document.location.hash = "#".concat(Object.getOwnPropertyNames(this.flags).join(";")), document.location.reload()
                    }
                }()
            }, {
                key: "_setupThree",
                value: function() {
                    return function() {
                        this.fsConf.three && (this.device.webGL ? (this.fsConf.screenshot && this.fsConf.screenshotLogarithmicDepthBuffer && (this.fsConf.threeParameters.logarithmicDepthBuffer = !0), this.three = new Ft(this)) : (console.error("WebGL not supported"), this._showWebGlError()))
                    }
                }()
            }, {
                key: "_setupScaling",
                value: function() {
                    return function() {
                        var t = this,
                            e = this.isResponsiveEnabled();
                        if (this.scale.compatibility.noMargins = e, this.device.mobileSafari || (this.scale.pageAlignVertically = !0), this.scale.pageAlignHorizontally = !0, this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, this.isFullscreenEnabled() && (this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL, this.scale.onFullScreenError.add(function(e) {
                                console.error("can't enter fullscreen", e.event), t.scale.fullScreenTarget = null, t.fsConf.fullscreen = Et
                            })), !e) return this.scale.maxWidth = this.fsConf.width, void(this.scale.maxHeight = this.fsConf.height);
                        this.scale.setResizeCallback(function() {
                            var e = dt.getViewportSize(),
                                n = t.fsConf.width / t.fsConf.height,
                                r = e.width / e.height,
                                i = 1,
                                o = t.fsConf.width,
                                a = t.fsConf.height;
                            if (t.fsGameRotated = 0, t.isLockOrientationEnabled()) {
                                var s = t.fsConf.width > t.fsConf.height,
                                    u = t.fsConf.height > t.fsConf.width;
                                if (dt.isFullScreen() && dt.canLockScreen()) {
                                    if (dt.isIFrame()) {
                                        var c = window.frameElement;
                                        try {
                                            c.sandbox ? /allow-orientation-lock/.test(c.sandbox) || (c.sandbox += " allow-orientation-lock") : c.sandbox = "allow-orientation-lock"
                                        } catch (t) {
                                            console.warn("can't make iframe to allow orientation lock", t)
                                        }
                                    }
                                    var l = "portrait";
                                    s && (l = "landscape"), window.screen.orientation.lock(l).catch(function(e) {
                                        t.debug.isDisabled || console.warn("orientation lock failed", e)
                                    })
                                }
                                var f = e.width > e.height,
                                    h = e.height > e.width;
                                if (s !== f || u !== h) {
                                    r = e.height / e.width;
                                    var p = dt.getScreenOrientation();
                                    u && "landscape-primary" === p ? t.fsGameRotated = -90 : u && "landscape-secondary" === p ? t.fsGameRotated = 90 : s && "portrait-primary" === p ? t.fsGameRotated = 90 : s && "portrait-secondary" === p && (t.fsGameRotated = -90)
                                }
                            }
                            n < r ? (i = r / n, o = Math.floor(o * i)) : n > r && (i = n / r, a = Math.floor(a * i)), o === t.width && a === t.height || (t.scale.setGameSize(o, a), t.scale.refresh(), t.three && t.three.resize());
                            var d = t.state.getCurrentState();
                            d && "resize" in d && d.resize()
                        })
                    }
                }()
            }, {
                key: "_setupScreenshot",
                value: function() {
                    return function() {
                        var t = this;
                        !this.fsConf.screenshot && this.flags.screenshot && (this.fsConf.screenshot = !0), this.fsConf.screenshot && (this.fsConf.screenshotLogarithmicDepthBuffer && (this.fsConf.threeParameters.logarithmicDepthBuffer = !0), this._screenshotPlugin = this.plugins.add(zt)), document.addEventListener("keypress", function(e) {
                            switch (e.code) {
                                case "KeyS":
                                    e.ctrlKey && e.shiftKey ? (t.flags.screenshot = !0, t._reloadWithFlags()) : e.shiftKey && t.fsConf.screenshot && (e.stopPropagation(), t.takeScreenshot(!1));
                                    break;
                                case "KeyD":
                                    e.shiftKey && t.fsConf.screenshot && (e.stopPropagation(), t.takeScreenshot(!0))
                            }
                        })
                    }
                }()
            }, {
                key: "_setupDebug",
                value: function() {
                    return function() {
                        var t = this;
                        if (!this.debug.isDisabled) {
                            this.time.advancedTiming = !0;
                            var e = 0,
                                n = new Phaser.Text(this, 0, 0, "", {
                                    font: "bold 24px monospace",
                                    fill: "#ffffff",
                                    stroke: "#000000",
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    strokeThickness: 4
                                });
                            n.lineSpacing = -12, this.stage.addChild(n), this.debug.extraText = null, n.update = function() {
                                if ((e += t.time.elapsedMS) > 500) {
                                    if (e -= 500, n.text = "".concat(t.time.fps, "/").concat(t.time.suggestedFps, " fps ").concat(dt.getScreenOrientation(), "\nDisplay: ").concat(t.canvas.clientWidth, "x").concat(t.canvas.clientHeight, "@").concat(window.devicePixelRatio.toFixed(2), "\nPhaser:  ").concat(t.width, "x").concat(t.height, "@").concat(t.scale.scaleFactorInversed.x.toFixed(2)), t.three) {
                                        var r = t.three.renderer,
                                            i = r.info,
                                            o = r.getDrawingBufferSize();
                                        n.text += "\nThree:   ".concat(o.width, "x").concat(o.height, "\n== Memory ========\nPrograms:   ").concat(i.programs.length, "\nGeometries: ").concat(i.memory.geometries, "\nTextures:   ").concat(i.memory.textures, "\n== Render ========\nCalls:      ").concat(i.render.calls, "\nVertices:   ").concat(i.render.vertices, "\nFaces:      ").concat(i.render.faces, "\nPoints:     ").concat(i.render.points)
                                    }
                                    t.debug.extraText && (n.text += "\n".concat(t.debug.extraText))
                                }
                            }, window.fsDebug = {
                                game: this
                            }
                        }
                    }
                }()
            }, {
                key: "_applyCommonWorkarounds",
                value: function() {
                    return function() {
                        var t = this;
                        this.time.desiredFps = 1e3, this.input.keyboard.addKeyCapture(Phaser.Keyboard.UP), this.input.keyboard.addKeyCapture(Phaser.Keyboard.DOWN), this.input.keyboard.addKeyCapture(Phaser.Keyboard.LEFT), this.input.keyboard.addKeyCapture(Phaser.Keyboard.RIGHT), this.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR), this.onBlur.add(function() {
                            t.input.reset()
                        });
                        var e = dt.isIFrame();
                        if (this.device.iOS && e && (this.stage.disableVisibilityChange = !0), e) {
                            var n = document.createElement("input");
                            document.body.appendChild(n), n.focus(), document.body.removeChild(n)
                        }
                        this.three && this.device.iOS && (this.three.renderer.capabilities.floatVertexTextures = !1), this.device.iOS && (this.fsConf.fullscreen = Et), this.fsConf.disableContextMenu && document.body.addEventListener("contextmenu", function(t) {
                            t.preventDefault()
                        })
                    }
                }()
            }, {
                key: "_showHeader",
                value: function() {
                    return function() {
                        /* var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.device.ie ? console.log("A game by Flying Sheep Studios https://flying-sheep.com") : console.log("%c  A game by  %c Flying Sheep Studios %c  %c https://flying-sheep.com", "line-height: 1.5; font-size: 100%; background: #474747; color: #fff;", "line-height: 1.5; font-size: 150%; background: #33b3f2; color: #fff;", "line-height: 1.5; font-size: 100%; background: #474747;", "line-height: 1.5; font-size: 100%; background: #fff;"), t && "fsVersion" in window && console.log(window.fsVersion) */
                    }
                }()
            }, {
                key: "_showWebGlError",
                value: function() {
                    return function() {
                        var t = this,
                            e = new Phaser.Graphics(this);
                        e.beginFill(0), e.drawRect(0, 0, this.width, this.height), e.endFill(), e.inputEnabled = !0;
                        var n = new Phaser.Text(this, this.width / 2, this.height / 2, "WebGL is not supported", {
                            font: "bold 128px sans-serif",
                            fill: "#ff0000",
                            align: "center",
                            wordWrap: !0,
                            wordWrapWidth: Math.round(.8 * this.width)
                        });
                        n.anchor.set(.5, .5), this.stage.addChild(e), this.stage.addChild(n), this.scale.onSizeChange.add(function() {
                            e.beginFill(0), e.drawRect(0, 0, t.width, t.height), e.endFill(), n.position.set(t.width / 2, t.height / 2), n.wordWrapWidth = Math.round(.8 * t.width)
                        })
                    }
                }()
            }, {
                key: "startFullscreen",
                value: function() {
                    return function() {
                        if (!dt.isFullScreen() && this.isFullscreenEnabled()) {
                            if (dt.isIFrame())
                                if (window.frameElement) try {
                                    window.frameElement.allowfullscreen = !0, this.scale.fullScreenTarget = window.frameElement
                                } catch (t) {
                                    console.warn("cant set allowfullscreen on iframe, fullscreen disabled"), this.fsConf.fullscreen = Et, this.scale.fullScreenTarget = null
                                } else console.warn("cant access frameElement, fullscreen disabled"), this.fsConf.fullscreen = Et, this.scale.fullScreenTarget = null;
                                else this.scale.fullScreenTarget = document.body;
                            this.scale.fullScreenTarget && this.scale.startFullScreen()
                        }
                    }
                }()
            }, {
                key: "takeScreenshot",
                value: function() {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this._screenshotPlugin ? this._screenshotPlugin.takeScreenshot(t) : console.warn("Screenshot mode disabled")
                    }
                }()
            }, {
                key: "isResponsiveEnabled",
                value: function() {
                    return function() {
                        return (this.fsConf.responsive & At) > 0 && !this.device.desktop || (this.fsConf.responsive & Pt) > 0 && this.device.desktop || (this.fsConf.responsive & Ct) > 0 && dt.isIFrame()
                    }
                }()
            }, {
                key: "isLockOrientationEnabled",
                value: function() {
                    return function() {
                        return ((this.fsConf.lockOrientation & kt) > 0 && !this.device.desktop || (this.fsConf.lockOrientation & Rt) > 0 && this.device.desktop) && this.isResponsiveEnabled()
                    }
                }()
            }, {
                key: "isFullscreenEnabled",
                value: function() {
                    return function() {
                        return ((this.fsConf.fullscreen & Lt) > 0 && !this.device.desktop || (this.fsConf.fullscreen & It) > 0 && this.device.desktop) && this.device.fullscreen && this.isResponsiveEnabled()
                    }
                }()
            }]) && Wt(n.prototype, r), i && Wt(n, i), e
        }();

        function Yt(t) {
            return (Yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function qt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function Zt(t, e) {
            return !e || "object" !== Yt(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function $t(t) {
            return ($t = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function Qt(t, e) {
            return (Qt = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }
        var te = function(t) {
            function e() {
                var t;
                return function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (t = Zt(this, $t(e).call(this))).createOnceRun = !1, t
            }
            var n, r, i;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Qt(t, e)
            }(e, Phaser.State), n = e, (r = [{
                key: "init",
                value: function() {
                    return function() {
                        this.game.debug.isDisabled || (window.fsDebug.state = this);
                        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        e.length > 0 && (this.packs = e), this.game.isFullscreenEnabled() && this.input.onUp.add(this.game.startFullscreen, this.game)
                    }
                }()
            }, {
                key: "preload",
                value: function() {
                    return function() {
                        var t = this;
                        this.previousDisableVisibilityChange = this.game.stage.disableVisibilityChange, this.game.stage.disableVisibilityChange = !0, this.packs && (this.game.preloadLayout && (this.game.preloadLayout.setup(), this.game.world.add(this.game.preloadLayout)), this.packs.forEach(function(e) {
                            t.game.load.pack(e.key, e.url ? dt.getAssetUrl(e.url) : null, e.data)
                        }))
                    }
                }()
            }, {
                key: "createOnce",
                value: function() {
                    return function() {
                        this.createOnceRun = !0
                    }
                }()
            }, {
                key: "create",
                value: function() {
                    return function() {
                        this.game.preloadLayout && (this.game.world.remove(this.game.preloadLayout), this.game.preloadLayout.clear()), this.game.stage.disableVisibilityChange = this.previousDisableVisibilityChange, this.createOnceRun || this.createOnce()
                    }
                }()
            }]) && qt(n.prototype, r), i && qt(n, i), e
        }();

        function ee(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function ne(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function re(t, e, n) {
            return e && ne(t.prototype, e), n && ne(t, n), t
        }
        var ie = function() {
                function t() {
                    ee(this, t), this._store = {}
                }
                return re(t, [{
                    key: "getItem",
                    value: function() {
                        return function(t) {
                            return t in this._store ? this._store[t] : null
                        }
                    }()
                }, {
                    key: "setItem",
                    value: function() {
                        return function(t, e) {
                            this._store[t] = e.toString()
                        }
                    }()
                }]), t
            }(),
            oe = function() {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    ee(this, t), this._prefix = e, this._storage = null, this.localStorageAvailable = !1, this.sessionStorageAvailable = !1, this._testStorage(), !n && this.localStorageAvailable ? this._storage = window.localStorage : this.sessionStorageAvailable ? this._storage = window.sessionStorage : this._storage = new ie
                }
                return re(t, [{
                    key: "getItem",
                    value: function() {
                        return function(t) {
                            var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            try {
                                e = this._storage.getItem(this._prefix + t), e = JSON.parse(e)
                            } catch (t) {
                                e = n
                            }
                            return null === e ? n : e
                        }
                    }()
                }, {
                    key: "setItem",
                    value: function() {
                        return function(t, e) {
                            try {
                                this._storage.setItem(this._prefix + t, JSON.stringify(e))
                            } catch (t) {
                                console.error(t)
                            }
                        }
                    }()
                }, {
                    key: "_testStorage",
                    value: function() {
                        return function() {
                            var t, e = "test_".concat(Math.round(1e6 * Math.random()).toString()),
                                n = "value_".concat(Math.round(1e6 * Math.random()).toString()),
                                r = this._storage;
                            this._storage = window.localStorage, this.setItem(e, n), t = this.getItem(e), this.localStorageAvailable = t === n, this._storage.removeItem(this._prefix + e), this._storage = window.sessionStorage, this.setItem(e, n), t = this.getItem(e), this.sessionStorageAvailable = t === n, this._storage.removeItem(this._prefix + e), this._storage = r
                        }
                    }()
                }]), t
            }();
        e.a = Object.assign({
            Game: Jt,
            Util: dt,
            State: {
                Base: te
            },
            Storage: oe
        }, r)
    }, function(t, e, n) {
        var r = n(3),
            i = n(16),
            o = n(15),
            a = n(33)("src"),
            s = Function.toString,
            u = ("" + s).split("toString");
        n(10).inspectSource = function(t) {
            return s.call(t)
        }, (t.exports = function(t, e, n, s) {
            var c = "function" == typeof n;
            c && (o(n, "name") || i(n, "name", e)), t[e] !== n && (c && (o(n, a) || i(n, a, t[e] ? "" + t[e] : u.join(String(e)))), t === r ? t[e] = n : s ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)))
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[a] || s.call(this)
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(2),
            o = n(26),
            a = /"/g,
            s = function(t, e, n, r) {
                var i = String(o(t)),
                    s = "<" + e;
                return "" !== n && (s += " " + n + '="' + String(r).replace(a, "&quot;") + '"'), s + ">" + i + "</" + e + ">"
            };
        t.exports = function(t, e) {
            var n = {};
            n[t] = e(s), r(r.P + r.F * i(function() {
                var e = "" [t]('"');
                return e !== e.toLowerCase() || e.split('"').length > 3
            }), "String", n)
        }
    }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }, function(t, e, n) {
        var r = n(7),
            i = n(32);
        t.exports = n(9) ? function(t, e, n) {
            return r.f(t, e, i(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    }, function(t, e, n) {
        var r = n(48),
            i = n(26);
        t.exports = function(t) {
            return r(i(t))
        }
    }, function(t, e, n) {
        var r = n(26);
        t.exports = function(t) {
            return Object(r(t))
        }
    }, function(t, e, n) {
        var r = n(2);
        t.exports = function(t, e) {
            return !!t && r(function() {
                e ? t.call(null, function() {}, 1) : t.call(null)
            })
        }
    }, function(t, e, n) {
        var r = n(49),
            i = n(32),
            o = n(17),
            a = n(29),
            s = n(15),
            u = n(87),
            c = Object.getOwnPropertyDescriptor;
        e.f = n(9) ? c : function(t, e) {
            if (t = o(t), e = a(e, !0), u) try {
                return c(t, e)
            } catch (t) {}
            if (s(t, e)) return i(!r.f.call(t, e), t[e])
        }
    }, function(t, e, n) {
        var r = n(1),
            i = n(10),
            o = n(2);
        t.exports = function(t, e) {
            var n = (i.Object || {})[t] || Object[t],
                a = {};
            a[t] = e(n), r(r.S + r.F * o(function() {
                n(1)
            }), "Object", a)
        }
    }, function(t, e, n) {
        var r = n(23),
            i = n(48),
            o = n(18),
            a = n(11),
            s = n(260);
        t.exports = function(t, e) {
            var n = 1 == t,
                u = 2 == t,
                c = 3 == t,
                l = 4 == t,
                f = 6 == t,
                h = 5 == t || f,
                p = e || s;
            return function(e, s, d) {
                for (var y, v, g = o(e), m = i(g), b = r(s, d, 3), w = a(m.length), _ = 0, x = n ? p(e, w) : u ? p(e, 0) : void 0; w > _; _++)
                    if ((h || _ in m) && (v = b(y = m[_], _, g), t))
                        if (n) x[_] = v;
                        else if (v) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return y;
                    case 6:
                        return _;
                    case 2:
                        x.push(y)
                } else if (l) return !1;
                return f ? -1 : c || l ? l : x
            }
        }
    }, function(t, e, n) {
        var r = n(24);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return t.call(e, n, r, i)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function(t, e, n) {
        if (n(9)) {
            var r = n(34),
                i = n(3),
                o = n(2),
                a = n(1),
                s = n(60),
                u = n(86),
                c = n(23),
                l = n(44),
                f = n(32),
                h = n(16),
                p = n(45),
                d = n(27),
                y = n(11),
                v = n(112),
                g = n(36),
                m = n(29),
                b = n(15),
                w = n(52),
                _ = n(4),
                x = n(18),
                S = n(79),
                O = n(37),
                T = n(39),
                E = n(38).f,
                A = n(81),
                P = n(33),
                C = n(6),
                k = n(22),
                R = n(50),
                L = n(57),
                I = n(83),
                M = n(41),
                F = n(54),
                j = n(43),
                N = n(82),
                D = n(104),
                V = n(7),
                U = n(20),
                B = V.f,
                z = U.f,
                H = i.RangeError,
                W = i.TypeError,
                G = i.Uint8Array,
                K = Array.prototype,
                X = u.ArrayBuffer,
                J = u.DataView,
                Y = k(0),
                q = k(2),
                Z = k(3),
                $ = k(4),
                Q = k(5),
                tt = k(6),
                et = R(!0),
                nt = R(!1),
                rt = I.values,
                it = I.keys,
                ot = I.entries,
                at = K.lastIndexOf,
                st = K.reduce,
                ut = K.reduceRight,
                ct = K.join,
                lt = K.sort,
                ft = K.slice,
                ht = K.toString,
                pt = K.toLocaleString,
                dt = C("iterator"),
                yt = C("toStringTag"),
                vt = P("typed_constructor"),
                gt = P("def_constructor"),
                mt = s.CONSTR,
                bt = s.TYPED,
                wt = s.VIEW,
                _t = k(1, function(t, e) {
                    return Et(L(t, t[gt]), e)
                }),
                xt = o(function() {
                    return 1 === new G(new Uint16Array([1]).buffer)[0]
                }),
                St = !!G && !!G.prototype.set && o(function() {
                    new G(1).set({})
                }),
                Ot = function(t, e) {
                    var n = d(t);
                    if (n < 0 || n % e) throw H("Wrong offset!");
                    return n
                },
                Tt = function(t) {
                    if (_(t) && bt in t) return t;
                    throw W(t + " is not a typed array!")
                },
                Et = function(t, e) {
                    if (!(_(t) && vt in t)) throw W("It is not a typed array constructor!");
                    return new t(e)
                },
                At = function(t, e) {
                    return Pt(L(t, t[gt]), e)
                },
                Pt = function(t, e) {
                    for (var n = 0, r = e.length, i = Et(t, r); r > n;) i[n] = e[n++];
                    return i
                },
                Ct = function(t, e, n) {
                    B(t, e, {
                        get: function() {
                            return this._d[n]
                        }
                    })
                },
                kt = function(t) {
                    var e, n, r, i, o, a, s = x(t),
                        u = arguments.length,
                        l = u > 1 ? arguments[1] : void 0,
                        f = void 0 !== l,
                        h = A(s);
                    if (null != h && !S(h)) {
                        for (a = h.call(s), r = [], e = 0; !(o = a.next()).done; e++) r.push(o.value);
                        s = r
                    }
                    for (f && u > 2 && (l = c(l, arguments[2], 2)), e = 0, n = y(s.length), i = Et(this, n); n > e; e++) i[e] = f ? l(s[e], e) : s[e];
                    return i
                },
                Rt = function() {
                    for (var t = 0, e = arguments.length, n = Et(this, e); e > t;) n[t] = arguments[t++];
                    return n
                },
                Lt = !!G && o(function() {
                    pt.call(new G(1))
                }),
                It = function() {
                    return pt.apply(Lt ? ft.call(Tt(this)) : Tt(this), arguments)
                },
                Mt = {
                    copyWithin: function(t, e) {
                        return D.call(Tt(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                    },
                    every: function(t) {
                        return $(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    fill: function(t) {
                        return N.apply(Tt(this), arguments)
                    },
                    filter: function(t) {
                        return At(this, q(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0))
                    },
                    find: function(t) {
                        return Q(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    findIndex: function(t) {
                        return tt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    forEach: function(t) {
                        Y(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    indexOf: function(t) {
                        return nt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    includes: function(t) {
                        return et(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    join: function(t) {
                        return ct.apply(Tt(this), arguments)
                    },
                    lastIndexOf: function(t) {
                        return at.apply(Tt(this), arguments)
                    },
                    map: function(t) {
                        return _t(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    reduce: function(t) {
                        return st.apply(Tt(this), arguments)
                    },
                    reduceRight: function(t) {
                        return ut.apply(Tt(this), arguments)
                    },
                    reverse: function() {
                        for (var t, e = Tt(this).length, n = Math.floor(e / 2), r = 0; r < n;) t = this[r], this[r++] = this[--e], this[e] = t;
                        return this
                    },
                    some: function(t) {
                        return Z(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    sort: function(t) {
                        return lt.call(Tt(this), t)
                    },
                    subarray: function(t, e) {
                        var n = Tt(this),
                            r = n.length,
                            i = g(t, r);
                        return new(L(n, n[gt]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, y((void 0 === e ? r : g(e, r)) - i))
                    }
                },
                Ft = function(t, e) {
                    return At(this, ft.call(Tt(this), t, e))
                },
                jt = function(t) {
                    Tt(this);
                    var e = Ot(arguments[1], 1),
                        n = this.length,
                        r = x(t),
                        i = y(r.length),
                        o = 0;
                    if (i + e > n) throw H("Wrong length!");
                    for (; o < i;) this[e + o] = r[o++]
                },
                Nt = {
                    entries: function() {
                        return ot.call(Tt(this))
                    },
                    keys: function() {
                        return it.call(Tt(this))
                    },
                    values: function() {
                        return rt.call(Tt(this))
                    }
                },
                Dt = function(t, e) {
                    return _(t) && t[bt] && "symbol" != typeof e && e in t && String(+e) == String(e)
                },
                Vt = function(t, e) {
                    return Dt(t, e = m(e, !0)) ? f(2, t[e]) : z(t, e)
                },
                Ut = function(t, e, n) {
                    return !(Dt(t, e = m(e, !0)) && _(n) && b(n, "value")) || b(n, "get") || b(n, "set") || n.configurable || b(n, "writable") && !n.writable || b(n, "enumerable") && !n.enumerable ? B(t, e, n) : (t[e] = n.value, t)
                };
            mt || (U.f = Vt, V.f = Ut), a(a.S + a.F * !mt, "Object", {
                getOwnPropertyDescriptor: Vt,
                defineProperty: Ut
            }), o(function() {
                ht.call({})
            }) && (ht = pt = function() {
                return ct.call(this)
            });
            var Bt = p({}, Mt);
            p(Bt, Nt), h(Bt, dt, Nt.values), p(Bt, {
                slice: Ft,
                set: jt,
                constructor: function() {},
                toString: ht,
                toLocaleString: It
            }), Ct(Bt, "buffer", "b"), Ct(Bt, "byteOffset", "o"), Ct(Bt, "byteLength", "l"), Ct(Bt, "length", "e"), B(Bt, yt, {
                get: function() {
                    return this[bt]
                }
            }), t.exports = function(t, e, n, u) {
                var c = t + ((u = !!u) ? "Clamped" : "") + "Array",
                    f = "get" + t,
                    p = "set" + t,
                    d = i[c],
                    g = d || {},
                    m = d && T(d),
                    b = !d || !s.ABV,
                    x = {},
                    S = d && d.prototype,
                    A = function(t, n) {
                        B(t, n, {
                            get: function() {
                                return function(t, n) {
                                    var r = t._d;
                                    return r.v[f](n * e + r.o, xt)
                                }(this, n)
                            },
                            set: function(t) {
                                return function(t, n, r) {
                                    var i = t._d;
                                    u && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.v[p](n * e + i.o, r, xt)
                                }(this, n, t)
                            },
                            enumerable: !0
                        })
                    };
                b ? (d = n(function(t, n, r, i) {
                    l(t, d, c, "_d");
                    var o, a, s, u, f = 0,
                        p = 0;
                    if (_(n)) {
                        if (!(n instanceof X || "ArrayBuffer" == (u = w(n)) || "SharedArrayBuffer" == u)) return bt in n ? Pt(d, n) : kt.call(d, n);
                        o = n, p = Ot(r, e);
                        var g = n.byteLength;
                        if (void 0 === i) {
                            if (g % e) throw H("Wrong length!");
                            if ((a = g - p) < 0) throw H("Wrong length!")
                        } else if ((a = y(i) * e) + p > g) throw H("Wrong length!");
                        s = a / e
                    } else s = v(n), o = new X(a = s * e);
                    for (h(t, "_d", {
                            b: o,
                            o: p,
                            l: a,
                            e: s,
                            v: new J(o)
                        }); f < s;) A(t, f++)
                }), S = d.prototype = O(Bt), h(S, "constructor", d)) : o(function() {
                    d(1)
                }) && o(function() {
                    new d(-1)
                }) && F(function(t) {
                    new d, new d(null), new d(1.5), new d(t)
                }, !0) || (d = n(function(t, n, r, i) {
                    var o;
                    return l(t, d, c), _(n) ? n instanceof X || "ArrayBuffer" == (o = w(n)) || "SharedArrayBuffer" == o ? void 0 !== i ? new g(n, Ot(r, e), i) : void 0 !== r ? new g(n, Ot(r, e)) : new g(n) : bt in n ? Pt(d, n) : kt.call(d, n) : new g(v(n))
                }), Y(m !== Function.prototype ? E(g).concat(E(m)) : E(g), function(t) {
                    t in d || h(d, t, g[t])
                }), d.prototype = S, r || (S.constructor = d));
                var P = S[dt],
                    C = !!P && ("values" == P.name || null == P.name),
                    k = Nt.values;
                h(d, vt, !0), h(S, bt, c), h(S, wt, !0), h(S, gt, d), (u ? new d(1)[yt] == c : yt in S) || B(S, yt, {
                    get: function() {
                        return c
                    }
                }), x[c] = d, a(a.G + a.W + a.F * (d != g), x), a(a.S, c, {
                    BYTES_PER_ELEMENT: e
                }), a(a.S + a.F * o(function() {
                    g.of.call(d, 1)
                }), c, {
                    from: kt,
                    of: Rt
                }), "BYTES_PER_ELEMENT" in S || h(S, "BYTES_PER_ELEMENT", e), a(a.P, c, Mt), j(c), a(a.P + a.F * St, c, {
                    set: jt
                }), a(a.P + a.F * !C, c, Nt), r || S.toString == ht || (S.toString = ht), a(a.P + a.F * o(function() {
                    new d(1).slice()
                }), c, {
                    slice: Ft
                }), a(a.P + a.F * (o(function() {
                    return [1, 2].toLocaleString() != new d([1, 2]).toLocaleString()
                }) || !o(function() {
                    S.toLocaleString.call([1, 2])
                })), c, {
                    toLocaleString: It
                }), M[c] = C ? P : k, r || C || h(S, dt, k)
            }
        } else t.exports = function() {}
    }, function(t, e, n) {
        var r = n(4);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
            if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
            if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, e, n) {
        var r = n(33)("meta"),
            i = n(4),
            o = n(15),
            a = n(7).f,
            s = 0,
            u = Object.isExtensible || function() {
                return !0
            },
            c = !n(2)(function() {
                return u(Object.preventExtensions({}))
            }),
            l = function(t) {
                a(t, r, {
                    value: {
                        i: "O" + ++s,
                        w: {}
                    }
                })
            },
            f = t.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function(t, e) {
                    if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!o(t, r)) {
                        if (!u(t)) return "F";
                        if (!e) return "E";
                        l(t)
                    }
                    return t[r].i
                },
                getWeak: function(t, e) {
                    if (!o(t, r)) {
                        if (!u(t)) return !0;
                        if (!e) return !1;
                        l(t)
                    }
                    return t[r].w
                },
                onFreeze: function(t) {
                    return c && f.NEED && u(t) && !o(t, r) && l(t), t
                }
            }
    }, function(t, e, n) {
        n.d(e, "a", function() {
            return l
        });
        var r = n(163),
            i = n.n(r);

        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function a(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function s(t, e) {
            return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function u(t) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function() {
                return function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
            }())(t)
        }

        function c(t, e) {
            return (c = Object.setPrototypeOf || function() {
                return function(t, e) {
                    return t.__proto__ = e, t
                }
            }())(t, e)
        }
        var l = function(t) {
            /*!
             * ToggoApi
             * © Flying Sheep Studios
             * https://flying-sheep.com
             * @preserve
             */
            function e() {
                var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "fstest",
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 600,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 600;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e), (t = s(this, u(e).call(this)))._gameId = n, t._scoresToPull = null, t._toggoHighscore = null, t._toggoTracking = null, t._toggoAppMessage = null, t._nextMidrollTime = Date.now() / 1e3 + r, t._midRollInterval = i;
                try {
                    "Highscore" in window.parent && (t._toggoHighscore = new window.parent.Highscore, t._toggoHighscore.addEventListener(window.parent.Event.ERROR, function(n) {
                        if ("string" == typeof n.object)
                            for (var r = n.object.split("&"), i = 0; i < r.length; i++)
                                if ("" !== r[i]) {
                                    var o = r[i].split("=");
                                    if ("written" === o[0] && 0 === o[1]) return void t.emitEvent(e.event.ERROR_BADWORD)
                                } t.emitEvent(e.event.ERROR)
                    }), t._toggoHighscore.addEventListener(window.parent.Event.ADDED, function() {
                        t.emitEvent(e.event.ADDED)
                    }), t._toggoHighscore.addEventListener(window.parent.Event.LOADED, function(n) {
                        t.emitEvent(e.event.LOADED, [t._parseResult(n.object)])
                    }))
                } catch (t) {}
                try {
                    "AssistToggo" in window.parent && (t._toggoTracking = window.parent.AssistToggo, "sendAppMessage" in window.parent.AssistToggo && (t._toggoAppMessage = window.parent.AssistToggo.sendAppMessage))
                } catch (t) {}
                return t
            }
            var n, r, o;
            return function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && c(t, e)
            }(e, i.a), n = e, (r = [{
                key: "track",
                value: function() {
                    return function(t) {
                        //this._toggoTracking ? this._toggoTracking.sendIVWTag(t, window.location) : console.log("toggoTracking", t)
                    }
                }()
            }, {
                key: "pushScore",
                value: function() {
                    return function(t, n) {
                        this._toggoHighscore ? this._toggoHighscore.addHighscoreTableData(this._gameId, t, n) : (console.log("highscorePush", this._gameId, t, n), this.emitEvent(e.event.ADDED))
                    }
                }()
            }, {
                key: "pullScores",
                value: function() {
                    return function(t, n) {
                        t = t || 10, n = n || e.sortOrder.DESC, this._scoresToPull = t, this._toggoHighscore ? this._toggoHighscore.getHighscoreTableData(this._gameId, t, n) : (console.log("highscorePull", this._gameId, t, n), this.emitEvent(e.event.LOADED, [this._parseResult([])]))
                    }
                }()
            }, {
                key: "showMidRoll",
                value: function() {
                    return function() {
                        var t = Date.now() / 1e3;
                        t > this._nextMidrollTime ? (this._toggoAppMessage ? this._toggoAppMessage("startmidroll") : console.log("showMidRoll"), this._nextMidrollTime = t + this._midRollInterval) : this._toggoAppMessage || console.log("next midRoll in ".concat(this._nextMidrollTime - t, " seconds"))
                    }
                }()
            }, {
                key: "_parseResult",
                value: function() {
                    return function(t) {
                        var n = [];
                        for (var r in t) {
                            var i = r.split("_"),
                                o = i[0],
                                a = i[1] - 1,
                                s = t[r];
                            o === e._fieldTranslationFsToEoa.position && (s = s.replace(".", "")), a in n || (n[a] = {}), n[a][e._fieldTranslationEoaToFs[o]] = s
                        }
                        if (n.sort(function(t, e) {
                                return t.position - e.position
                            }), this._scoresToPull && n.length < this._scoresToPull) {
                            var u = 0;
                            n.length > 0 && (u = n[n.length - 1].position);
                            do {
                                u++, n.push({
                                    position: u,
                                    score: 0,
                                    nickName: "Player"
                                })
                            } while (n.length < this._scoresToPull)
                        }
                        return n
                    }
                }()
            }]) && a(n.prototype, r), o && a(n, o), e
        }();
        l.sortOrder = {
            ASC: "ASC",
            DESC: "DESC"
        }, l.event = {
            ADDED: "added",
            LOADED: "loaded",
            ERROR: "error",
            ERROR_BADWORD: "error_badword"
        }, l._fieldTranslationFsToEoa = {
            position: "platz",
            score: "punkte",
            nickName: "nickname"
        }, l._fieldTranslationEoaToFs = {
            platz: "position",
            punkte: "score",
            nickname: "nickName"
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function(t, e) {
        t.exports = !1
    }, function(t, e, n) {
        var r = n(89),
            i = n(66);
        t.exports = Object.keys || function(t) {
            return r(t, i)
        }
    }, function(t, e, n) {
        var r = n(27),
            i = Math.max,
            o = Math.min;
        t.exports = function(t, e) {
            return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e)
        }
    }, function(t, e, n) {
        var r = n(5),
            i = n(90),
            o = n(66),
            a = n(65)("IE_PROTO"),
            s = function() {},
            u = function() {
                var t, e = n(62)("iframe"),
                    r = o.length;
                for (e.style.display = "none", n(68).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u.prototype[o[r]];
                return u()
            };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = u(), void 0 === e ? n : i(n, e)
        }
    }, function(t, e, n) {
        var r = n(89),
            i = n(66).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, i)
        }
    }, function(t, e, n) {
        var r = n(15),
            i = n(18),
            o = n(65)("IE_PROTO"),
            a = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
        }
    }, function(t, e, n) {
        var r = n(7).f,
            i = n(15),
            o = n(6)("toStringTag");
        t.exports = function(t, e, n) {
            t && !i(t = n ? t : t.prototype, o) && r(t, o, {
                configurable: !0,
                value: e
            })
        }
    }, function(t, e) {
        t.exports = {}
    }, function(t, e, n) {
        var r = n(6)("unscopables"),
            i = Array.prototype;
        null == i[r] && n(16)(i, r, {}), t.exports = function(t) {
            i[r][t] = !0
        }
    }, function(t, e, n) {
        var r = n(3),
            i = n(7),
            o = n(9),
            a = n(6)("species");
        t.exports = function(t) {
            var e = r[t];
            o && e && !e[a] && i.f(e, a, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, function(t, e) {
        t.exports = function(t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t
        }
    }, function(t, e, n) {
        var r = n(13);
        t.exports = function(t, e, n) {
            for (var i in e) r(t, i, e[i], n);
            return t
        }
    }, function(t, e, n) {
        var r = n(4);
        t.exports = function(t, e) {
            if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
            return t
        }
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        var r = n(25);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function(t, e) {
        e.f = {}.propertyIsEnumerable
    }, function(t, e, n) {
        var r = n(17),
            i = n(11),
            o = n(36);
        t.exports = function(t) {
            return function(e, n, a) {
                var s, u = r(e),
                    c = i(u.length),
                    l = o(a, c);
                if (t && n != n) {
                    for (; c > l;)
                        if ((s = u[l++]) != s) return !0
                } else
                    for (; c > l; l++)
                        if ((t || l in u) && u[l] === n) return t || l || 0;
                return !t && -1
            }
        }
    }, function(t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function(t, e, n) {
        var r = n(25),
            i = n(6)("toStringTag"),
            o = "Arguments" == r(function() {
                return arguments
            }());
        t.exports = function(t) {
            var e, n, a;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
        }
    }, function(t, e, n) {
        var r = n(1),
            i = n(26),
            o = n(2),
            a = n(70),
            s = "[" + a + "]",
            u = RegExp("^" + s + s + "*"),
            c = RegExp(s + s + "*$"),
            l = function(t, e, n) {
                var i = {},
                    s = o(function() {
                        return !!a[t]() || "​" != "​" [t]()
                    }),
                    u = i[t] = s ? e(f) : a[t];
                n && (i[n] = u), r(r.P + r.F * s, "String", i)
            },
            f = l.trim = function(t, e) {
                return t = String(i(t)), 1 & e && (t = t.replace(u, "")), 2 & e && (t = t.replace(c, "")), t
            };
        t.exports = l
    }, function(t, e, n) {
        var r = n(6)("iterator"),
            i = !1;
        try {
            var o = [7][r]();
            o.return = function() {
                i = !0
            }, Array.from(o, function() {
                throw 2
            })
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !i) return !1;
            var n = !1;
            try {
                var o = [7],
                    a = o[r]();
                a.next = function() {
                    return {
                        done: n = !0
                    }
                }, o[r] = function() {
                    return a
                }, t(o)
            } catch (t) {}
            return n
        }
    }, function(t, e, n) {
        var r = n(16),
            i = n(13),
            o = n(2),
            a = n(26),
            s = n(6);
        t.exports = function(t, e, n) {
            var u = s(t),
                c = n(a, u, "" [t]),
                l = c[0],
                f = c[1];
            o(function() {
                var e = {};
                return e[u] = function() {
                    return 7
                }, 7 != "" [t](e)
            }) && (i(String.prototype, t, l), r(RegExp.prototype, u, 2 == e ? function(t, e) {
                return f.call(t, this, e)
            } : function(t) {
                return f.call(t, this)
            }))
        }
    }, function(t, e, n) {
        var r = n(23),
            i = n(102),
            o = n(79),
            a = n(5),
            s = n(11),
            u = n(81),
            c = {},
            l = {};
        (e = t.exports = function(t, e, n, f, h) {
            var p, d, y, v, g = h ? function() {
                    return t
                } : u(t),
                m = r(n, f, e ? 2 : 1),
                b = 0;
            if ("function" != typeof g) throw TypeError(t + " is not iterable!");
            if (o(g)) {
                for (p = s(t.length); p > b; b++)
                    if ((v = e ? m(a(d = t[b])[0], d[1]) : m(t[b])) === c || v === l) return v
            } else
                for (y = g.call(t); !(d = y.next()).done;)
                    if ((v = i(y, m, d.value, e)) === c || v === l) return v
        }).BREAK = c, e.RETURN = l
    }, function(t, e, n) {
        var r = n(5),
            i = n(24),
            o = n(6)("species");
        t.exports = function(t, e) {
            var n, a = r(t).constructor;
            return void 0 === a || null == (n = r(a)[o]) ? e : i(n)
        }
    }, function(t, e, n) {
        var r = n(3).navigator;
        t.exports = r && r.userAgent || ""
    }, function(t, e, n) {
        var r = n(3),
            i = n(1),
            o = n(13),
            a = n(45),
            s = n(30),
            u = n(56),
            c = n(44),
            l = n(4),
            f = n(2),
            h = n(54),
            p = n(40),
            d = n(71);
        t.exports = function(t, e, n, y, v, g) {
            var m = r[t],
                b = m,
                w = v ? "set" : "add",
                _ = b && b.prototype,
                x = {},
                S = function(t) {
                    var e = _[t];
                    o(_, t, "delete" == t ? function(t) {
                        return !(g && !l(t)) && e.call(this, 0 === t ? 0 : t)
                    } : "has" == t ? function(t) {
                        return !(g && !l(t)) && e.call(this, 0 === t ? 0 : t)
                    } : "get" == t ? function(t) {
                        return g && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                    } : "add" == t ? function(t) {
                        return e.call(this, 0 === t ? 0 : t), this
                    } : function(t, n) {
                        return e.call(this, 0 === t ? 0 : t, n), this
                    })
                };
            if ("function" == typeof b && (g || _.forEach && !f(function() {
                    (new b).entries().next()
                }))) {
                var O = new b,
                    T = O[w](g ? {} : -0, 1) != O,
                    E = f(function() {
                        O.has(1)
                    }),
                    A = h(function(t) {
                        new b(t)
                    }),
                    P = !g && f(function() {
                        for (var t = new b, e = 5; e--;) t[w](e, e);
                        return !t.has(-0)
                    });
                A || ((b = e(function(e, n) {
                    c(e, b, t);
                    var r = d(new m, e, b);
                    return null != n && u(n, v, r[w], r), r
                })).prototype = _, _.constructor = b), (E || P) && (S("delete"), S("has"), v && S("get")), (P || T) && S(w), g && _.clear && delete _.clear
            } else b = y.getConstructor(e, t, v, w), a(b.prototype, n), s.NEED = !0;
            return p(b, t), x[t] = b, i(i.G + i.W + i.F * (b != m), x), g || y.setStrong(b, t, v), b
        }
    }, function(t, e, n) {
        for (var r, i = n(3), o = n(16), a = n(33), s = a("typed_array"), u = a("view"), c = !(!i.ArrayBuffer || !i.DataView), l = c, f = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(r = i[h[f++]]) ? (o(r.prototype, s, !0), o(r.prototype, u, !0)) : l = !1;
        t.exports = {
            ABV: c,
            CONSTR: l,
            TYPED: s,
            VIEW: u
        }
    }, , function(t, e, n) {
        var r = n(4),
            i = n(3).document,
            o = r(i) && r(i.createElement);
        t.exports = function(t) {
            return o ? i.createElement(t) : {}
        }
    }, function(t, e, n) {
        var r = n(10),
            i = n(3),
            o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (t.exports = function(t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: n(34) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function(t, e, n) {
        e.f = n(6)
    }, function(t, e, n) {
        var r = n(63)("keys"),
            i = n(33);
        t.exports = function(t) {
            return r[t] || (r[t] = i(t))
        }
    }, function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(t, e, n) {
        var r = n(25);
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t)
        }
    }, function(t, e, n) {
        var r = n(3).document;
        t.exports = r && r.documentElement
    }, function(t, e, n) {
        var r = n(4),
            i = n(5),
            o = function(t, e) {
                if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
            };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
                try {
                    (r = n(23)(Function.call, n(20).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
                } catch (t) {
                    e = !0
                }
                return function(t, n) {
                    return o(t, n), e ? t.__proto__ = n : r(t, n), t
                }
            }({}, !1) : void 0),
            check: o
        }
    }, function(t, e) {
        t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
    }, function(t, e, n) {
        var r = n(4),
            i = n(69).set;
        t.exports = function(t, e, n) {
            var o, a = e.constructor;
            return a !== n && "function" == typeof a && (o = a.prototype) !== n.prototype && r(o) && i && i(t, o), t
        }
    }, function(t, e, n) {
        var r = n(27),
            i = n(26);
        t.exports = function(t) {
            var e = String(i(this)),
                n = "",
                o = r(t);
            if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
            for (; o > 0;
                (o >>>= 1) && (e += e)) 1 & o && (n += e);
            return n
        }
    }, function(t, e) {
        t.exports = Math.sign || function(t) {
            return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
        }
    }, function(t, e) {
        var n = Math.expm1;
        t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(t) {
            return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
        } : n
    }, function(t, e, n) {
        var r = n(34),
            i = n(1),
            o = n(13),
            a = n(16),
            s = n(41),
            u = n(101),
            c = n(40),
            l = n(39),
            f = n(6)("iterator"),
            h = !([].keys && "next" in [].keys()),
            p = function() {
                return this
            };
        t.exports = function(t, e, n, d, y, v, g) {
            u(n, e, d);
            var m, b, w, _ = function(t) {
                    if (!h && t in T) return T[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, t)
                            }
                    }
                    return function() {
                        return new n(this, t)
                    }
                },
                x = e + " Iterator",
                S = "values" == y,
                O = !1,
                T = t.prototype,
                E = T[f] || T["@@iterator"] || y && T[y],
                A = E || _(y),
                P = y ? S ? _("entries") : A : void 0,
                C = "Array" == e && T.entries || E;
            if (C && (w = l(C.call(new t))) !== Object.prototype && w.next && (c(w, x, !0), r || "function" == typeof w[f] || a(w, f, p)), S && E && "values" !== E.name && (O = !0, A = function() {
                    return E.call(this)
                }), r && !g || !h && !O && T[f] || a(T, f, A), s[e] = A, s[x] = p, y)
                if (m = {
                        values: S ? A : _("values"),
                        keys: v ? A : _("keys"),
                        entries: P
                    }, g)
                    for (b in m) b in T || o(T, b, m[b]);
                else i(i.P + i.F * (h || O), e, m);
            return m
        }
    }, function(t, e, n) {
        var r = n(77),
            i = n(26);
        t.exports = function(t, e, n) {
            if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(t))
        }
    }, function(t, e, n) {
        var r = n(4),
            i = n(25),
            o = n(6)("match");
        t.exports = function(t) {
            var e;
            return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t))
        }
    }, function(t, e, n) {
        var r = n(6)("match");
        t.exports = function(t) {
            var e = /./;
            try {
                "/./" [t](e)
            } catch (n) {
                try {
                    return e[r] = !1, !"/./" [t](e)
                } catch (t) {}
            }
            return !0
        }
    }, function(t, e, n) {
        var r = n(41),
            i = n(6)("iterator"),
            o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || o[i] === t)
        }
    }, function(t, e, n) {
        var r = n(7),
            i = n(32);
        t.exports = function(t, e, n) {
            e in t ? r.f(t, e, i(0, n)) : t[e] = n
        }
    }, function(t, e, n) {
        var r = n(52),
            i = n(6)("iterator"),
            o = n(41);
        t.exports = n(10).getIteratorMethod = function(t) {
            if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
        }
    }, function(t, e, n) {
        var r = n(18),
            i = n(36),
            o = n(11);
        t.exports = function(t) {
            for (var e = r(this), n = o(e.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, n), u = a > 2 ? arguments[2] : void 0, c = void 0 === u ? n : i(u, n); c > s;) e[s++] = t;
            return e
        }
    }, function(t, e, n) {
        var r = n(42),
            i = n(105),
            o = n(41),
            a = n(17);
        t.exports = n(75)(Array, "Array", function(t, e) {
            this._t = a(t), this._i = 0, this._k = e
        }, function() {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    }, function(t, e, n) {
        var r = n(5);
        t.exports = function() {
            var t = r(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }
    }, function(t, e, n) {
        var r, i, o, a = n(23),
            s = n(94),
            u = n(68),
            c = n(62),
            l = n(3),
            f = l.process,
            h = l.setImmediate,
            p = l.clearImmediate,
            d = l.MessageChannel,
            y = l.Dispatch,
            v = 0,
            g = {},
            m = function() {
                var t = +this;
                if (g.hasOwnProperty(t)) {
                    var e = g[t];
                    delete g[t], e()
                }
            },
            b = function(t) {
                m.call(t.data)
            };
        h && p || (h = function(t) {
            for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
            return g[++v] = function() {
                s("function" == typeof t ? t : Function(t), e)
            }, r(v), v
        }, p = function(t) {
            delete g[t]
        }, "process" == n(25)(f) ? r = function(t) {
            f.nextTick(a(m, t, 1))
        } : y && y.now ? r = function(t) {
            y.now(a(m, t, 1))
        } : d ? (o = (i = new d).port2, i.port1.onmessage = b, r = a(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
            l.postMessage(t + "", "*")
        }, l.addEventListener("message", b, !1)) : r = "onreadystatechange" in c("script") ? function(t) {
            u.appendChild(c("script")).onreadystatechange = function() {
                u.removeChild(this), m.call(t)
            }
        } : function(t) {
            setTimeout(a(m, t, 1), 0)
        }), t.exports = {
            set: h,
            clear: p
        }
    }, function(t, e, n) {
        var r = n(3),
            i = n(9),
            o = n(34),
            a = n(60),
            s = n(16),
            u = n(45),
            c = n(2),
            l = n(44),
            f = n(27),
            h = n(11),
            p = n(112),
            d = n(38).f,
            y = n(7).f,
            v = n(82),
            g = n(40),
            m = "prototype",
            b = "Wrong index!",
            w = r.ArrayBuffer,
            _ = r.DataView,
            x = r.Math,
            S = r.RangeError,
            O = r.Infinity,
            T = w,
            E = x.abs,
            A = x.pow,
            P = x.floor,
            C = x.log,
            k = x.LN2,
            R = i ? "_b" : "buffer",
            L = i ? "_l" : "byteLength",
            I = i ? "_o" : "byteOffset";

        function M(t, e, n) {
            var r, i, o, a = new Array(n),
                s = 8 * n - e - 1,
                u = (1 << s) - 1,
                c = u >> 1,
                l = 23 === e ? A(2, -24) - A(2, -77) : 0,
                f = 0,
                h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for ((t = E(t)) != t || t === O ? (i = t != t ? 1 : 0, r = u) : (r = P(C(t) / k), t * (o = A(2, -r)) < 1 && (r--, o *= 2), (t += r + c >= 1 ? l / o : l * A(2, 1 - c)) * o >= 2 && (r++, o /= 2), r + c >= u ? (i = 0, r = u) : r + c >= 1 ? (i = (t * o - 1) * A(2, e), r += c) : (i = t * A(2, c - 1) * A(2, e), r = 0)); e >= 8; a[f++] = 255 & i, i /= 256, e -= 8);
            for (r = r << e | i, s += e; s > 0; a[f++] = 255 & r, r /= 256, s -= 8);
            return a[--f] |= 128 * h, a
        }

        function F(t, e, n) {
            var r, i = 8 * n - e - 1,
                o = (1 << i) - 1,
                a = o >> 1,
                s = i - 7,
                u = n - 1,
                c = t[u--],
                l = 127 & c;
            for (c >>= 7; s > 0; l = 256 * l + t[u], u--, s -= 8);
            for (r = l & (1 << -s) - 1, l >>= -s, s += e; s > 0; r = 256 * r + t[u], u--, s -= 8);
            if (0 === l) l = 1 - a;
            else {
                if (l === o) return r ? NaN : c ? -O : O;
                r += A(2, e), l -= a
            }
            return (c ? -1 : 1) * r * A(2, l - e)
        }

        function j(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        }

        function N(t) {
            return [255 & t]
        }

        function D(t) {
            return [255 & t, t >> 8 & 255]
        }

        function V(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        }

        function U(t) {
            return M(t, 52, 8)
        }

        function B(t) {
            return M(t, 23, 4)
        }

        function z(t, e, n) {
            y(t[m], e, {
                get: function() {
                    return this[n]
                }
            })
        }

        function H(t, e, n, r) {
            var i = p(+n);
            if (i + e > t[L]) throw S(b);
            var o = t[R]._b,
                a = i + t[I],
                s = o.slice(a, a + e);
            return r ? s : s.reverse()
        }

        function W(t, e, n, r, i, o) {
            var a = p(+n);
            if (a + e > t[L]) throw S(b);
            for (var s = t[R]._b, u = a + t[I], c = r(+i), l = 0; l < e; l++) s[u + l] = c[o ? l : e - l - 1]
        }
        if (a.ABV) {
            if (!c(function() {
                    w(1)
                }) || !c(function() {
                    new w(-1)
                }) || c(function() {
                    return new w, new w(1.5), new w(NaN), "ArrayBuffer" != w.name
                })) {
                for (var G, K = (w = function(t) {
                        return l(this, w), new T(p(t))
                    })[m] = T[m], X = d(T), J = 0; X.length > J;)(G = X[J++]) in w || s(w, G, T[G]);
                o || (K.constructor = w)
            }
            var Y = new _(new w(2)),
                q = _[m].setInt8;
            Y.setInt8(0, 2147483648), Y.setInt8(1, 2147483649), !Y.getInt8(0) && Y.getInt8(1) || u(_[m], {
                setInt8: function(t, e) {
                    q.call(this, t, e << 24 >> 24)
                },
                setUint8: function(t, e) {
                    q.call(this, t, e << 24 >> 24)
                }
            }, !0)
        } else w = function(t) {
            l(this, w, "ArrayBuffer");
            var e = p(t);
            this._b = v.call(new Array(e), 0), this[L] = e
        }, _ = function(t, e, n) {
            l(this, _, "DataView"), l(t, w, "DataView");
            var r = t[L],
                i = f(e);
            if (i < 0 || i > r) throw S("Wrong offset!");
            if (i + (n = void 0 === n ? r - i : h(n)) > r) throw S("Wrong length!");
            this[R] = t, this[I] = i, this[L] = n
        }, i && (z(w, "byteLength", "_l"), z(_, "buffer", "_b"), z(_, "byteLength", "_l"), z(_, "byteOffset", "_o")), u(_[m], {
            getInt8: function(t) {
                return H(this, 1, t)[0] << 24 >> 24
            },
            getUint8: function(t) {
                return H(this, 1, t)[0]
            },
            getInt16: function(t) {
                var e = H(this, 2, t, arguments[1]);
                return (e[1] << 8 | e[0]) << 16 >> 16
            },
            getUint16: function(t) {
                var e = H(this, 2, t, arguments[1]);
                return e[1] << 8 | e[0]
            },
            getInt32: function(t) {
                return j(H(this, 4, t, arguments[1]))
            },
            getUint32: function(t) {
                return j(H(this, 4, t, arguments[1])) >>> 0
            },
            getFloat32: function(t) {
                return F(H(this, 4, t, arguments[1]), 23, 4)
            },
            getFloat64: function(t) {
                return F(H(this, 8, t, arguments[1]), 52, 8)
            },
            setInt8: function(t, e) {
                W(this, 1, t, N, e)
            },
            setUint8: function(t, e) {
                W(this, 1, t, N, e)
            },
            setInt16: function(t, e) {
                W(this, 2, t, D, e, arguments[2])
            },
            setUint16: function(t, e) {
                W(this, 2, t, D, e, arguments[2])
            },
            setInt32: function(t, e) {
                W(this, 4, t, V, e, arguments[2])
            },
            setUint32: function(t, e) {
                W(this, 4, t, V, e, arguments[2])
            },
            setFloat32: function(t, e) {
                W(this, 4, t, B, e, arguments[2])
            },
            setFloat64: function(t, e) {
                W(this, 8, t, U, e, arguments[2])
            }
        });
        g(w, "ArrayBuffer"), g(_, "DataView"), s(_[m], a.VIEW, !0), e.ArrayBuffer = w, e.DataView = _
    }, function(t, e, n) {
        t.exports = !n(9) && !n(2)(function() {
            return 7 != Object.defineProperty(n(62)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        var r = n(3),
            i = n(10),
            o = n(34),
            a = n(64),
            s = n(7).f;
        t.exports = function(t) {
            var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || s(e, t, {
                value: a.f(t)
            })
        }
    }, function(t, e, n) {
        var r = n(15),
            i = n(17),
            o = n(50)(!1),
            a = n(65)("IE_PROTO");
        t.exports = function(t, e) {
            var n, s = i(t),
                u = 0,
                c = [];
            for (n in s) n != a && r(s, n) && c.push(n);
            for (; e.length > u;) r(s, n = e[u++]) && (~o(c, n) || c.push(n));
            return c
        }
    }, function(t, e, n) {
        var r = n(7),
            i = n(5),
            o = n(35);
        t.exports = n(9) ? Object.defineProperties : function(t, e) {
            i(t);
            for (var n, a = o(e), s = a.length, u = 0; s > u;) r.f(t, n = a[u++], e[n]);
            return t
        }
    }, function(t, e, n) {
        var r = n(17),
            i = n(38).f,
            o = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) {
            return a && "[object Window]" == o.call(t) ? function(t) {
                try {
                    return i(t)
                } catch (t) {
                    return a.slice()
                }
            }(t) : i(r(t))
        }
    }, function(t, e, n) {
        var r = n(35),
            i = n(51),
            o = n(49),
            a = n(18),
            s = n(48),
            u = Object.assign;
        t.exports = !u || n(2)(function() {
            var t = {},
                e = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return t[n] = 7, r.split("").forEach(function(t) {
                e[t] = t
            }), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r
        }) ? function(t, e) {
            for (var n = a(t), u = arguments.length, c = 1, l = i.f, f = o.f; u > c;)
                for (var h, p = s(arguments[c++]), d = l ? r(p).concat(l(p)) : r(p), y = d.length, v = 0; y > v;) f.call(p, h = d[v++]) && (n[h] = p[h]);
            return n
        } : u
    }, function(t, e, n) {
        var r = n(24),
            i = n(4),
            o = n(94),
            a = [].slice,
            s = {};
        t.exports = Function.bind || function(t) {
            var e = r(this),
                n = a.call(arguments, 1),
                u = function() {
                    var r = n.concat(a.call(arguments));
                    return this instanceof u ? function(t, e, n) {
                        if (!(e in s)) {
                            for (var r = [], i = 0; i < e; i++) r[i] = "a[" + i + "]";
                            s[e] = Function("F,a", "return new F(" + r.join(",") + ")")
                        }
                        return s[e](t, n)
                    }(e, r.length, r) : o(e, r, t)
                };
            return i(e.prototype) && (u.prototype = e.prototype), u
        }
    }, function(t, e) {
        t.exports = function(t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    }, function(t, e, n) {
        var r = n(3).parseInt,
            i = n(53).trim,
            o = n(70),
            a = /^[-+]?0[xX]/;
        t.exports = 8 !== r(o + "08") || 22 !== r(o + "0x16") ? function(t, e) {
            var n = i(String(t), 3);
            return r(n, e >>> 0 || (a.test(n) ? 16 : 10))
        } : r
    }, function(t, e, n) {
        var r = n(3).parseFloat,
            i = n(53).trim;
        t.exports = 1 / r(n(70) + "-0") != -1 / 0 ? function(t) {
            var e = i(String(t), 3),
                n = r(e);
            return 0 === n && "-" == e.charAt(0) ? -0 : n
        } : r
    }, function(t, e, n) {
        var r = n(25);
        t.exports = function(t, e) {
            if ("number" != typeof t && "Number" != r(t)) throw TypeError(e);
            return +t
        }
    }, function(t, e, n) {
        var r = n(4),
            i = Math.floor;
        t.exports = function(t) {
            return !r(t) && isFinite(t) && i(t) === t
        }
    }, function(t, e) {
        t.exports = Math.log1p || function(t) {
            return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
        }
    }, function(t, e, n) {
        var r = n(27),
            i = n(26);
        t.exports = function(t) {
            return function(e, n) {
                var o, a, s = String(i(e)),
                    u = r(n),
                    c = s.length;
                return u < 0 || u >= c ? t ? "" : void 0 : (o = s.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : o : t ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536
            }
        }
    }, function(t, e, n) {
        var r = n(37),
            i = n(32),
            o = n(40),
            a = {};
        n(16)(a, n(6)("iterator"), function() {
            return this
        }), t.exports = function(t, e, n) {
            t.prototype = r(a, {
                next: i(1, n)
            }), o(t, e + " Iterator")
        }
    }, function(t, e, n) {
        var r = n(5);
        t.exports = function(t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var o = t.return;
                throw void 0 !== o && r(o.call(t)), e
            }
        }
    }, function(t, e, n) {
        var r = n(24),
            i = n(18),
            o = n(48),
            a = n(11);
        t.exports = function(t, e, n, s, u) {
            r(e);
            var c = i(t),
                l = o(c),
                f = a(c.length),
                h = u ? f - 1 : 0,
                p = u ? -1 : 1;
            if (n < 2)
                for (;;) {
                    if (h in l) {
                        s = l[h], h += p;
                        break
                    }
                    if (h += p, u ? h < 0 : f <= h) throw TypeError("Reduce of empty array with no initial value")
                }
            for (; u ? h >= 0 : f > h; h += p) h in l && (s = e(s, l[h], h, c));
            return s
        }
    }, function(t, e, n) {
        var r = n(18),
            i = n(36),
            o = n(11);
        t.exports = [].copyWithin || function(t, e) {
            var n = r(this),
                a = o(n.length),
                s = i(t, a),
                u = i(e, a),
                c = arguments.length > 2 ? arguments[2] : void 0,
                l = Math.min((void 0 === c ? a : i(c, a)) - u, a - s),
                f = 1;
            for (u < s && s < u + l && (f = -1, u += l - 1, s += l - 1); l-- > 0;) u in n ? n[s] = n[u] : delete n[s], s += f, u += f;
            return n
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    }, function(t, e, n) {
        n(9) && "g" != /./g.flags && n(7).f(RegExp.prototype, "flags", {
            configurable: !0,
            get: n(84)
        })
    }, function(t, e, n) {
        var r, i, o, a, s = n(34),
            u = n(3),
            c = n(23),
            l = n(52),
            f = n(1),
            h = n(4),
            p = n(24),
            d = n(44),
            y = n(56),
            v = n(57),
            g = n(85).set,
            m = n(281)(),
            b = n(108),
            w = n(282),
            _ = n(58),
            x = n(109),
            S = u.TypeError,
            O = u.process,
            T = O && O.versions,
            E = T && T.v8 || "",
            A = u.Promise,
            P = "process" == l(O),
            C = function() {},
            k = i = b.f,
            R = !! function() {
                try {
                    var t = A.resolve(1),
                        e = (t.constructor = {})[n(6)("species")] = function(t) {
                            t(C, C)
                        };
                    return (P || "function" == typeof PromiseRejectionEvent) && t.then(C) instanceof e && 0 !== E.indexOf("6.6") && -1 === _.indexOf("Chrome/66")
                } catch (t) {}
            }(),
            L = function(t) {
                var e;
                return !(!h(t) || "function" != typeof(e = t.then)) && e
            },
            I = function(t, e) {
                if (!t._n) {
                    t._n = !0;
                    var n = t._c;
                    m(function() {
                        for (var r = t._v, i = 1 == t._s, o = 0, a = function(e) {
                                var n, o, a, s = i ? e.ok : e.fail,
                                    u = e.resolve,
                                    c = e.reject,
                                    l = e.domain;
                                try {
                                    s ? (i || (2 == t._h && j(t), t._h = 1), !0 === s ? n = r : (l && l.enter(), n = s(r), l && (l.exit(), a = !0)), n === e.promise ? c(S("Promise-chain cycle")) : (o = L(n)) ? o.call(n, u, c) : u(n)) : c(r)
                                } catch (t) {
                                    l && !a && l.exit(), c(t)
                                }
                            }; n.length > o;) a(n[o++]);
                        t._c = [], t._n = !1, e && !t._h && M(t)
                    })
                }
            },
            M = function(t) {
                g.call(u, function() {
                    var e, n, r, i = t._v,
                        o = F(t);
                    if (o && (e = w(function() {
                            P ? O.emit("unhandledRejection", i, t) : (n = u.onunhandledrejection) ? n({
                                promise: t,
                                reason: i
                            }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
                        }), t._h = P || F(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
                })
            },
            F = function(t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            },
            j = function(t) {
                g.call(u, function() {
                    var e;
                    P ? O.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
                        promise: t,
                        reason: t._v
                    })
                })
            },
            N = function(t) {
                var e = this;
                e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), I(e, !0))
            },
            D = function(t) {
                var e, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === t) throw S("Promise can't be resolved itself");
                        (e = L(t)) ? m(function() {
                            var r = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                e.call(t, c(D, r, 1), c(N, r, 1))
                            } catch (t) {
                                N.call(r, t)
                            }
                        }): (n._v = t, n._s = 1, I(n, !1))
                    } catch (t) {
                        N.call({
                            _w: n,
                            _d: !1
                        }, t)
                    }
                }
            };
        R || (A = function(t) {
            d(this, A, "Promise", "_h"), p(t), r.call(this);
            try {
                t(c(D, this, 1), c(N, this, 1))
            } catch (t) {
                N.call(this, t)
            }
        }, (r = function(t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }).prototype = n(45)(A.prototype, {
            then: function(t, e) {
                var n = k(v(this, A));
                return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = P ? O.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && I(this, !1), n.promise
            },
            catch: function(t) {
                return this.then(void 0, t)
            }
        }), o = function() {
            var t = new r;
            this.promise = t, this.resolve = c(D, t, 1), this.reject = c(N, t, 1)
        }, b.f = k = function(t) {
            return t === A || t === a ? new o(t) : i(t)
        }), f(f.G + f.W + f.F * !R, {
            Promise: A
        }), n(40)(A, "Promise"), n(43)("Promise"), a = n(10).Promise, f(f.S + f.F * !R, "Promise", {
            reject: function(t) {
                var e = k(this);
                return (0, e.reject)(t), e.promise
            }
        }), f(f.S + f.F * (s || !R), "Promise", {
            resolve: function(t) {
                return x(s && this === a ? A : this, t)
            }
        }), f(f.S + f.F * !(R && n(54)(function(t) {
            A.all(t).catch(C)
        })), "Promise", {
            all: function(t) {
                var e = this,
                    n = k(e),
                    r = n.resolve,
                    i = n.reject,
                    o = w(function() {
                        var n = [],
                            o = 0,
                            a = 1;
                        y(t, !1, function(t) {
                            var s = o++,
                                u = !1;
                            n.push(void 0), a++, e.resolve(t).then(function(t) {
                                u || (u = !0, n[s] = t, --a || r(n))
                            }, i)
                        }), --a || r(n)
                    });
                return o.e && i(o.v), n.promise
            },
            race: function(t) {
                var e = this,
                    n = k(e),
                    r = n.reject,
                    i = w(function() {
                        y(t, !1, function(t) {
                            e.resolve(t).then(n.resolve, r)
                        })
                    });
                return i.e && r(i.v), n.promise
            }
        })
    }, function(t, e, n) {
        var r = n(24);

        function i(t) {
            var e, n;
            this.promise = new t(function(t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = r
            }), this.resolve = r(e), this.reject = r(n)
        }
        t.exports.f = function(t) {
            return new i(t)
        }
    }, function(t, e, n) {
        var r = n(5),
            i = n(4),
            o = n(108);
        t.exports = function(t, e) {
            if (r(t), i(e) && e.constructor === t) return e;
            var n = o.f(t);
            return (0, n.resolve)(e), n.promise
        }
    }, function(t, e, n) {
        var r = n(7).f,
            i = n(37),
            o = n(45),
            a = n(23),
            s = n(44),
            u = n(56),
            c = n(75),
            l = n(105),
            f = n(43),
            h = n(9),
            p = n(30).fastKey,
            d = n(46),
            y = h ? "_s" : "size",
            v = function(t, e) {
                var n, r = p(e);
                if ("F" !== r) return t._i[r];
                for (n = t._f; n; n = n.n)
                    if (n.k == e) return n
            };
        t.exports = {
            getConstructor: function(t, e, n, c) {
                var l = t(function(t, r) {
                    s(t, l, e, "_i"), t._t = e, t._i = i(null), t._f = void 0, t._l = void 0, t[y] = 0, null != r && u(r, n, t[c], t)
                });
                return o(l.prototype, {
                    clear: function() {
                        for (var t = d(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                        t._f = t._l = void 0, t[y] = 0
                    },
                    delete: function(t) {
                        var n = d(this, e),
                            r = v(n, t);
                        if (r) {
                            var i = r.n,
                                o = r.p;
                            delete n._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), n._f == r && (n._f = i), n._l == r && (n._l = o), n[y]--
                        }
                        return !!r
                    },
                    forEach: function(t) {
                        d(this, e);
                        for (var n, r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                            for (r(n.v, n.k, this); n && n.r;) n = n.p
                    },
                    has: function(t) {
                        return !!v(d(this, e), t)
                    }
                }), h && r(l.prototype, "size", {
                    get: function() {
                        return d(this, e)[y]
                    }
                }), l
            },
            def: function(t, e, n) {
                var r, i, o = v(t, e);
                return o ? o.v = n : (t._l = o = {
                    i: i = p(e, !0),
                    k: e,
                    v: n,
                    p: r = t._l,
                    n: void 0,
                    r: !1
                }, t._f || (t._f = o), r && (r.n = o), t[y]++, "F" !== i && (t._i[i] = o)), t
            },
            getEntry: v,
            setStrong: function(t, e, n) {
                c(t, e, function(t, n) {
                    this._t = d(t, e), this._k = n, this._l = void 0
                }, function() {
                    for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                    return this._t && (this._l = e = e ? e.n : this._t._f) ? l(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, l(1))
                }, n ? "entries" : "values", !n, !0), f(e)
            }
        }
    }, function(t, e, n) {
        var r = n(45),
            i = n(30).getWeak,
            o = n(5),
            a = n(4),
            s = n(44),
            u = n(56),
            c = n(22),
            l = n(15),
            f = n(46),
            h = c(5),
            p = c(6),
            d = 0,
            y = function(t) {
                return t._l || (t._l = new v)
            },
            v = function() {
                this.a = []
            },
            g = function(t, e) {
                return h(t.a, function(t) {
                    return t[0] === e
                })
            };
        v.prototype = {
            get: function(t) {
                var e = g(this, t);
                if (e) return e[1]
            },
            has: function(t) {
                return !!g(this, t)
            },
            set: function(t, e) {
                var n = g(this, t);
                n ? n[1] = e : this.a.push([t, e])
            },
            delete: function(t) {
                var e = p(this.a, function(e) {
                    return e[0] === t
                });
                return ~e && this.a.splice(e, 1), !!~e
            }
        }, t.exports = {
            getConstructor: function(t, e, n, o) {
                var c = t(function(t, r) {
                    s(t, c, e, "_i"), t._t = e, t._i = d++, t._l = void 0, null != r && u(r, n, t[o], t)
                });
                return r(c.prototype, {
                    delete: function(t) {
                        if (!a(t)) return !1;
                        var n = i(t);
                        return !0 === n ? y(f(this, e)).delete(t) : n && l(n, this._i) && delete n[this._i]
                    },
                    has: function(t) {
                        if (!a(t)) return !1;
                        var n = i(t);
                        return !0 === n ? y(f(this, e)).has(t) : n && l(n, this._i)
                    }
                }), c
            },
            def: function(t, e, n) {
                var r = i(o(e), !0);
                return !0 === r ? y(t).set(e, n) : r[t._i] = n, t
            },
            ufstore: y
        }
    }, function(t, e, n) {
        var r = n(27),
            i = n(11);
        t.exports = function(t) {
            if (void 0 === t) return 0;
            var e = r(t),
                n = i(e);
            if (e !== n) throw RangeError("Wrong length!");
            return n
        }
    }, function(t, e, n) {
        var r = n(38),
            i = n(51),
            o = n(5),
            a = n(3).Reflect;
        t.exports = a && a.ownKeys || function(t) {
            var e = r.f(o(t)),
                n = i.f;
            return n ? e.concat(n(t)) : e
        }
    }, function(t, e, n) {
        var r = n(11),
            i = n(72),
            o = n(26);
        t.exports = function(t, e, n, a) {
            var s = String(o(t)),
                u = s.length,
                c = void 0 === n ? " " : String(n),
                l = r(e);
            if (l <= u || "" == c) return s;
            var f = l - u,
                h = i.call(c, Math.ceil(f / c.length));
            return h.length > f && (h = h.slice(0, f)), a ? h + s : s + h
        }
    }, function(t, e, n) {
        var r = n(35),
            i = n(17),
            o = n(49).f;
        t.exports = function(t) {
            return function(e) {
                for (var n, a = i(e), s = r(a), u = s.length, c = 0, l = []; u > c;) o.call(a, n = s[c++]) && l.push(t ? [n, a[n]] : a[n]);
                return l
            }
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        var r;
        ! function() {
            function i(t, e, n) {
                return t.call.apply(t.bind, arguments)
            }

            function o(t, e, n) {
                if (!t) throw Error();
                if (2 < arguments.length) {
                    var r = Array.prototype.slice.call(arguments, 2);
                    return function() {
                        var n = Array.prototype.slice.call(arguments);
                        return Array.prototype.unshift.apply(n, r), t.apply(e, n)
                    }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            }

            function a(t, e, n) {
                return (a = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? i : o).apply(null, arguments)
            }
            var s = Date.now || function() {
                return +new Date
            };

            function u(t, e) {
                this.a = t, this.o = e || t, this.c = this.o.document
            }
            var c = !!window.FontFace;

            function l(t, e, n, r) {
                if (e = t.c.createElement(e), n)
                    for (var i in n) n.hasOwnProperty(i) && ("style" == i ? e.style.cssText = n[i] : e.setAttribute(i, n[i]));
                return r && e.appendChild(t.c.createTextNode(r)), e
            }

            function f(t, e, n) {
                (t = t.c.getElementsByTagName(e)[0]) || (t = document.documentElement), t.insertBefore(n, t.lastChild)
            }

            function h(t) {
                t.parentNode && t.parentNode.removeChild(t)
            }

            function p(t, e, n) {
                e = e || [], n = n || [];
                for (var r = t.className.split(/\s+/), i = 0; i < e.length; i += 1) {
                    for (var o = !1, a = 0; a < r.length; a += 1)
                        if (e[i] === r[a]) {
                            o = !0;
                            break
                        } o || r.push(e[i])
                }
                for (e = [], i = 0; i < r.length; i += 1) {
                    for (o = !1, a = 0; a < n.length; a += 1)
                        if (r[i] === n[a]) {
                            o = !0;
                            break
                        } o || e.push(r[i])
                }
                t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
            }

            function d(t, e) {
                for (var n = t.className.split(/\s+/), r = 0, i = n.length; r < i; r++)
                    if (n[r] == e) return !0;
                return !1
            }

            function y(t, e, n) {
                function r() {
                    s && i && o && (s(a), s = null)
                }
                e = l(t, "link", {
                    rel: "stylesheet",
                    href: e,
                    media: "all"
                });
                var i = !1,
                    o = !0,
                    a = null,
                    s = n || null;
                c ? (e.onload = function() {
                    i = !0, r()
                }, e.onerror = function() {
                    i = !0, a = Error("Stylesheet failed to load"), r()
                }) : setTimeout(function() {
                    i = !0, r()
                }, 0), f(t, "head", e)
            }

            function v(t, e, n, r) {
                var i = t.c.getElementsByTagName("head")[0];
                if (i) {
                    var o = l(t, "script", {
                            src: e
                        }),
                        a = !1;
                    return o.onload = o.onreadystatechange = function() {
                        a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a = !0, n && n(null), o.onload = o.onreadystatechange = null, "HEAD" == o.parentNode.tagName && i.removeChild(o))
                    }, i.appendChild(o), setTimeout(function() {
                        a || (a = !0, n && n(Error("Script load timeout")))
                    }, r || 5e3), o
                }
                return null
            }

            function g() {
                this.a = 0, this.c = null
            }

            function m(t) {
                return t.a++,
                    function() {
                        t.a--, w(t)
                    }
            }

            function b(t, e) {
                t.c = e, w(t)
            }

            function w(t) {
                0 == t.a && t.c && (t.c(), t.c = null)
            }

            function _(t) {
                this.a = t || "-"
            }

            function x(t, e) {
                this.c = t, this.f = 4, this.a = "n";
                var n = (e || "n4").match(/^([nio])([1-9])$/i);
                n && (this.a = n[1], this.f = parseInt(n[2], 10))
            }

            function S(t) {
                var e = [];
                t = t.split(/,\s*/);
                for (var n = 0; n < t.length; n++) {
                    var r = t[n].replace(/['"]/g, ""); - 1 != r.indexOf(" ") || /^\d/.test(r) ? e.push("'" + r + "'") : e.push(r)
                }
                return e.join(",")
            }

            function O(t) {
                return t.a + t.f
            }

            function T(t) {
                var e = "normal";
                return "o" === t.a ? e = "oblique" : "i" === t.a && (e = "italic"), e
            }

            function E(t) {
                var e = 4,
                    n = "n",
                    r = null;
                return t && ((r = t.match(/(normal|oblique|italic)/i)) && r[1] && (n = r[1].substr(0, 1).toLowerCase()), (r = t.match(/([1-9]00|normal|bold)/i)) && r[1] && (/bold/i.test(r[1]) ? e = 7 : /[1-9]00/.test(r[1]) && (e = parseInt(r[1].substr(0, 1), 10)))), n + e
            }

            function A(t, e) {
                this.c = t, this.f = t.o.document.documentElement, this.h = e, this.a = new _("-"), this.j = !1 !== e.events, this.g = !1 !== e.classes
            }

            function P(t) {
                if (t.g) {
                    var e = d(t.f, t.a.c("wf", "active")),
                        n = [],
                        r = [t.a.c("wf", "loading")];
                    e || n.push(t.a.c("wf", "inactive")), p(t.f, n, r)
                }
                C(t, "inactive")
            }

            function C(t, e, n) {
                t.j && t.h[e] && (n ? t.h[e](n.c, O(n)) : t.h[e]())
            }

            function k() {
                this.c = {}
            }

            function R(t, e) {
                this.c = t, this.f = e, this.a = l(this.c, "span", {
                    "aria-hidden": "true"
                }, this.f)
            }

            function L(t) {
                f(t.c, "body", t.a)
            }

            function I(t) {
                return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + S(t.c) + ";font-style:" + T(t) + ";font-weight:" + t.f + "00;"
            }

            function M(t, e, n, r, i, o) {
                this.g = t, this.j = e, this.a = r, this.c = n, this.f = i || 3e3, this.h = o || void 0
            }

            function F(t, e, n, r, i, o, a) {
                this.v = t, this.B = e, this.c = n, this.a = r, this.s = a || "BESbswy", this.f = {}, this.w = i || 3e3, this.u = o || null, this.m = this.j = this.h = this.g = null, this.g = new R(this.c, this.s), this.h = new R(this.c, this.s), this.j = new R(this.c, this.s), this.m = new R(this.c, this.s), t = I(t = new x(this.a.c + ",serif", O(this.a))), this.g.a.style.cssText = t, t = I(t = new x(this.a.c + ",sans-serif", O(this.a))), this.h.a.style.cssText = t, t = I(t = new x("serif", O(this.a))), this.j.a.style.cssText = t, t = I(t = new x("sans-serif", O(this.a))), this.m.a.style.cssText = t, L(this.g), L(this.h), L(this.j), L(this.m)
            }
            _.prototype.c = function(t) {
                for (var e = [], n = 0; n < arguments.length; n++) e.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
                return e.join(this.a)
            }, M.prototype.start = function() {
                var t = this.c.o.document,
                    e = this,
                    n = s(),
                    r = new Promise(function(r, i) {
                        ! function o() {
                            s() - n >= e.f ? i() : t.fonts.load(function(t) {
                                return T(t) + " " + t.f + "00 300px " + S(t.c)
                            }(e.a), e.h).then(function(t) {
                                1 <= t.length ? r() : setTimeout(o, 25)
                            }, function() {
                                i()
                            })
                        }()
                    }),
                    i = null,
                    o = new Promise(function(t, n) {
                        i = setTimeout(n, e.f)
                    });
                Promise.race([o, r]).then(function() {
                    i && (clearTimeout(i), i = null), e.g(e.a)
                }, function() {
                    e.j(e.a)
                })
            };
            var j = {
                    D: "serif",
                    C: "sans-serif"
                },
                N = null;

            function D() {
                if (null === N) {
                    var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                    N = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))
                }
                return N
            }

            function V(t, e, n) {
                for (var r in j)
                    if (j.hasOwnProperty(r) && e === t.f[j[r]] && n === t.f[j[r]]) return !0;
                return !1
            }

            function U(t) {
                var e, n = t.g.a.offsetWidth,
                    r = t.h.a.offsetWidth;
                (e = n === t.f.serif && r === t.f["sans-serif"]) || (e = D() && V(t, n, r)), e ? s() - t.A >= t.w ? D() && V(t, n, r) && (null === t.u || t.u.hasOwnProperty(t.a.c)) ? B(t, t.v) : B(t, t.B) : function(t) {
                    setTimeout(a(function() {
                        U(this)
                    }, t), 50)
                }(t) : B(t, t.v)
            }

            function B(t, e) {
                setTimeout(a(function() {
                    h(this.g.a), h(this.h.a), h(this.j.a), h(this.m.a), e(this.a)
                }, t), 0)
            }

            function z(t, e, n) {
                this.c = t, this.a = e, this.f = 0, this.m = this.j = !1, this.s = n
            }
            F.prototype.start = function() {
                this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = s(), U(this)
            };
            var H = null;

            function W(t) {
                0 == --t.f && t.j && (t.m ? ((t = t.a).g && p(t.f, [t.a.c("wf", "active")], [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]), C(t, "active")) : P(t.a))
            }

            function G(t) {
                this.j = t, this.a = new k, this.h = 0, this.f = this.g = !0
            }

            function K(t, e, n, r, i) {
                var o = 0 == --t.h;
                (t.f || t.g) && setTimeout(function() {
                    var t = i || null,
                        s = r || {};
                    if (0 === n.length && o) P(e.a);
                    else {
                        e.f += n.length, o && (e.j = o);
                        var u, c = [];
                        for (u = 0; u < n.length; u++) {
                            var l = n[u],
                                f = s[l.c],
                                h = e.a,
                                d = l;
                            if (h.g && p(h.f, [h.a.c("wf", d.c, O(d).toString(), "loading")]), C(h, "fontloading", d), h = null, null === H)
                                if (window.FontFace) {
                                    d = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                                    var y = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                                    H = d ? 42 < parseInt(d[1], 10) : !y
                                } else H = !1;
                            h = H ? new M(a(e.g, e), a(e.h, e), e.c, l, e.s, f) : new F(a(e.g, e), a(e.h, e), e.c, l, e.s, t, f), c.push(h)
                        }
                        for (u = 0; u < c.length; u++) c[u].start()
                    }
                }, 0)
            }

            function X(t, e) {
                this.c = t, this.a = e
            }

            function J(t, e) {
                this.c = t, this.a = e
            }

            function Y(t, e) {
                this.c = t || q, this.a = [], this.f = [], this.g = e || ""
            }
            z.prototype.g = function(t) {
                var e = this.a;
                e.g && p(e.f, [e.a.c("wf", t.c, O(t).toString(), "active")], [e.a.c("wf", t.c, O(t).toString(), "loading"), e.a.c("wf", t.c, O(t).toString(), "inactive")]), C(e, "fontactive", t), this.m = !0, W(this)
            }, z.prototype.h = function(t) {
                var e = this.a;
                if (e.g) {
                    var n = d(e.f, e.a.c("wf", t.c, O(t).toString(), "active")),
                        r = [],
                        i = [e.a.c("wf", t.c, O(t).toString(), "loading")];
                    n || r.push(e.a.c("wf", t.c, O(t).toString(), "inactive")), p(e.f, r, i)
                }
                C(e, "fontinactive", t), W(this)
            }, G.prototype.load = function(t) {
                this.c = new u(this.j, t.context || this.j), this.g = !1 !== t.events, this.f = !1 !== t.classes,
                    function(t, e, n) {
                        var r = [],
                            i = n.timeout;
                        ! function(t) {
                            t.g && p(t.f, [t.a.c("wf", "loading")]), C(t, "loading")
                        }(e);
                        var r = function(t, e, n) {
                                var r, i = [];
                                for (r in e)
                                    if (e.hasOwnProperty(r)) {
                                        var o = t.c[r];
                                        o && i.push(o(e[r], n))
                                    } return i
                            }(t.a, n, t.c),
                            o = new z(t.c, e, i);
                        for (t.h = r.length, e = 0, n = r.length; e < n; e++) r[e].load(function(e, n, r) {
                            K(t, o, e, n, r)
                        })
                    }(this, new A(this.c, t), t)
            }, X.prototype.load = function(t) {
                var e = this,
                    n = e.a.projectId,
                    r = e.a.version;
                if (n) {
                    var i = e.c.o;
                    v(this.c, (e.a.api || "https://fast.fonts.net/jsapi") + "/" + n + ".js" + (r ? "?v=" + r : ""), function(r) {
                        r ? t([]) : (i["__MonotypeConfiguration__" + n] = function() {
                            return e.a
                        }, function e() {
                            if (i["__mti_fntLst" + n]) {
                                var r, o = i["__mti_fntLst" + n](),
                                    a = [];
                                if (o)
                                    for (var s = 0; s < o.length; s++) {
                                        var u = o[s].fontfamily;
                                        null != o[s].fontStyle && null != o[s].fontWeight ? (r = o[s].fontStyle + o[s].fontWeight, a.push(new x(u, r))) : a.push(new x(u))
                                    }
                                t(a)
                            } else setTimeout(function() {
                                e()
                            }, 50)
                        }())
                    }).id = "__MonotypeAPIScript__" + n
                } else t([])
            }, J.prototype.load = function(t) {
                var e, n, r = this.a.urls || [],
                    i = this.a.families || [],
                    o = this.a.testStrings || {},
                    a = new g;
                for (e = 0, n = r.length; e < n; e++) y(this.c, r[e], m(a));
                var s = [];
                for (e = 0, n = i.length; e < n; e++)
                    if ((r = i[e].split(":"))[1])
                        for (var u = r[1].split(","), c = 0; c < u.length; c += 1) s.push(new x(r[0], u[c]));
                    else s.push(new x(r[0]));
                b(a, function() {
                    t(s, o)
                })
            };
            var q = "https://fonts.googleapis.com/css";

            function Z(t) {
                this.f = t, this.a = [], this.c = {}
            }
            var $ = {
                    latin: "BESbswy",
                    "latin-ext": "çöüğş",
                    cyrillic: "йяЖ",
                    greek: "αβΣ",
                    khmer: "កខគ",
                    Hanuman: "កខគ"
                },
                Q = {
                    thin: "1",
                    extralight: "2",
                    "extra-light": "2",
                    ultralight: "2",
                    "ultra-light": "2",
                    light: "3",
                    regular: "4",
                    book: "4",
                    medium: "5",
                    "semi-bold": "6",
                    semibold: "6",
                    "demi-bold": "6",
                    demibold: "6",
                    bold: "7",
                    "extra-bold": "8",
                    extrabold: "8",
                    "ultra-bold": "8",
                    ultrabold: "8",
                    black: "9",
                    heavy: "9",
                    l: "3",
                    r: "4",
                    b: "7"
                },
                tt = {
                    i: "i",
                    italic: "i",
                    n: "n",
                    normal: "n"
                },
                et = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

            function nt(t, e) {
                this.c = t, this.a = e
            }
            var rt = {
                Arimo: !0,
                Cousine: !0,
                Tinos: !0
            };

            function it(t, e) {
                this.c = t, this.a = e
            }

            function ot(t, e) {
                this.c = t, this.f = e, this.a = []
            }
            nt.prototype.load = function(t) {
                var e = new g,
                    n = this.c,
                    r = new Y(this.a.api, this.a.text),
                    i = this.a.families;
                ! function(t, e) {
                    for (var n = e.length, r = 0; r < n; r++) {
                        var i = e[r].split(":");
                        3 == i.length && t.f.push(i.pop());
                        var o = "";
                        2 == i.length && "" != i[1] && (o = ":"), t.a.push(i.join(o))
                    }
                }(r, i);
                var o = new Z(i);
                ! function(t) {
                    for (var e = t.f.length, n = 0; n < e; n++) {
                        var r = t.f[n].split(":"),
                            i = r[0].replace(/\+/g, " "),
                            o = ["n4"];
                        if (2 <= r.length) {
                            var a;
                            if (a = [], s = r[1])
                                for (var s, u = (s = s.split(",")).length, c = 0; c < u; c++) {
                                    var l;
                                    if ((l = s[c]).match(/^[\w-]+$/))
                                        if (null == (h = et.exec(l.toLowerCase()))) l = "";
                                        else {
                                            if (l = null == (l = h[2]) || "" == l ? "n" : tt[l], null == (h = h[1]) || "" == h) h = "4";
                                            else var f = Q[h],
                                                h = f || (isNaN(h) ? "4" : h.substr(0, 1));
                                            l = [l, h].join("")
                                        }
                                    else l = "";
                                    l && a.push(l)
                                }
                            0 < a.length && (o = a), 3 == r.length && (a = [], 0 < (r = (r = r[2]) ? r.split(",") : a).length && (r = $[r[0]]) && (t.c[i] = r))
                        }
                        for (t.c[i] || (r = $[i]) && (t.c[i] = r), r = 0; r < o.length; r += 1) t.a.push(new x(i, o[r]))
                    }
                }(o), y(n, function(t) {
                    if (0 == t.a.length) throw Error("No fonts to load!");
                    if (-1 != t.c.indexOf("kit=")) return t.c;
                    for (var e = t.a.length, n = [], r = 0; r < e; r++) n.push(t.a[r].replace(/ /g, "+"));
                    return e = t.c + "?family=" + n.join("%7C"), 0 < t.f.length && (e += "&subset=" + t.f.join(",")), 0 < t.g.length && (e += "&text=" + encodeURIComponent(t.g)), e
                }(r), m(e)), b(e, function() {
                    t(o.a, o.c, rt)
                })
            }, it.prototype.load = function(t) {
                var e = this.a.id,
                    n = this.c.o;
                e ? v(this.c, (this.a.api || "https://use.typekit.net") + "/" + e + ".js", function(e) {
                    if (e) t([]);
                    else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                        e = n.Typekit.config.fn;
                        for (var r = [], i = 0; i < e.length; i += 2)
                            for (var o = e[i], a = e[i + 1], s = 0; s < a.length; s++) r.push(new x(o, a[s]));
                        try {
                            n.Typekit.load({
                                events: !1,
                                classes: !1,
                                async: !0
                            })
                        } catch (t) {}
                        t(r)
                    }
                }, 2e3) : t([])
            }, ot.prototype.load = function(t) {
                var e = this.f.id,
                    n = this.c.o,
                    r = this;
                e ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[e] = function(e, n) {
                    for (var i = 0, o = n.fonts.length; i < o; ++i) {
                        var a = n.fonts[i];
                        r.a.push(new x(a.name, E("font-weight:" + a.weight + ";font-style:" + a.style)))
                    }
                    t(r.a)
                }, v(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function(t) {
                    return t.o.location.hostname || t.a.location.hostname
                }(this.c) + "/" + e + ".js", function(e) {
                    e && t([])
                })) : t([])
            };
            var at = new G(window);
            at.a.c.custom = function(t, e) {
                return new J(e, t)
            }, at.a.c.fontdeck = function(t, e) {
                return new ot(e, t)
            }, at.a.c.monotype = function(t, e) {
                return new X(e, t)
            }, at.a.c.typekit = function(t, e) {
                return new it(e, t)
            }, at.a.c.google = function(t, e) {
                return new nt(e, t)
            };
            var st = {
                load: a(at.load, at)
            };
            void 0 === (r = function() {
                return st
            }.call(e, n, e, t)) || (t.exports = r)
        }()
    }, function(t, e, n) {
        var r;
        /*!
         * EventEmitter v5.2.8 - git.io/ee
         * Unlicense - http://unlicense.org/
         * Oliver Caldwell - https://oli.me.uk/
         * @preserve
         */
        ! function(e) {
            function i() {}
            var o = i.prototype,
                a = e.EventEmitter;

            function s(t, e) {
                for (var n = t.length; n--;)
                    if (t[n].listener === e) return n;
                return -1
            }

            function u(t) {
                return function() {
                    return this[t].apply(this, arguments)
                }
            }
            o.getListeners = function(t) {
                var e, n, r = this._getEvents();
                if (t instanceof RegExp)
                    for (n in e = {}, r) r.hasOwnProperty(n) && t.test(n) && (e[n] = r[n]);
                else e = r[t] || (r[t] = []);
                return e
            }, o.flattenListeners = function(t) {
                var e, n = [];
                for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
                return n
            }, o.getListenersAsObject = function(t) {
                var e, n = this.getListeners(t);
                return n instanceof Array && ((e = {})[t] = n), e || n
            }, o.addListener = function(t, e) {
                if (! function t(e) {
                        return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && t(e.listener)
                    }(e)) throw new TypeError("listener must be a function");
                var n, r = this.getListenersAsObject(t),
                    i = "object" == typeof e;
                for (n in r) r.hasOwnProperty(n) && -1 === s(r[n], e) && r[n].push(i ? e : {
                    listener: e,
                    once: !1
                });
                return this
            }, o.on = u("addListener"), o.addOnceListener = function(t, e) {
                return this.addListener(t, {
                    listener: e,
                    once: !0
                })
            }, o.once = u("addOnceListener"), o.defineEvent = function(t) {
                return this.getListeners(t), this
            }, o.defineEvents = function(t) {
                for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
                return this
            }, o.removeListener = function(t, e) {
                var n, r, i = this.getListenersAsObject(t);
                for (r in i) i.hasOwnProperty(r) && -1 !== (n = s(i[r], e)) && i[r].splice(n, 1);
                return this
            }, o.off = u("removeListener"), o.addListeners = function(t, e) {
                return this.manipulateListeners(!1, t, e)
            }, o.removeListeners = function(t, e) {
                return this.manipulateListeners(!0, t, e)
            }, o.manipulateListeners = function(t, e, n) {
                var r, i, o = t ? this.removeListener : this.addListener,
                    a = t ? this.removeListeners : this.addListeners;
                if ("object" != typeof e || e instanceof RegExp)
                    for (r = n.length; r--;) o.call(this, e, n[r]);
                else
                    for (r in e) e.hasOwnProperty(r) && (i = e[r]) && ("function" == typeof i ? o.call(this, r, i) : a.call(this, r, i));
                return this
            }, o.removeEvent = function(t) {
                var e, n = typeof t,
                    r = this._getEvents();
                if ("string" === n) delete r[t];
                else if (t instanceof RegExp)
                    for (e in r) r.hasOwnProperty(e) && t.test(e) && delete r[e];
                else delete this._events;
                return this
            }, o.removeAllListeners = u("removeEvent"), o.emitEvent = function(t, e) {
                var n, r, i, o, a = this.getListenersAsObject(t);
                for (o in a)
                    if (a.hasOwnProperty(o))
                        for (n = a[o].slice(0), i = 0; i < n.length; i++) !0 === (r = n[i]).once && this.removeListener(t, r.listener), r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
                return this
            }, o.trigger = u("emitEvent"), o.emit = function(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(t, e)
            }, o.setOnceReturnValue = function(t) {
                return this._onceReturnValue = t, this
            }, o._getOnceReturnValue = function() {
                return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
            }, o._getEvents = function() {
                return this._events || (this._events = {})
            }, i.noConflict = function() {
                return e.EventEmitter = a, i
            }, void 0 === (r = function() {
                return i
            }.call(e, n, e, t)) || (t.exports = r)
        }("undefined" != typeof window ? window : this || {})
    }, function(t, e, n) {
        var r = n(0);

        function i(t, e, n) {
            var r = {
                meshes: {},
                materials: {}
            };
            for (var i in this.debug = !!n, e)
                if ("json" != i.slice(i.lastIndexOf(".") + 1).toLowerCase()) {
                    var o = i.slice(i.lastIndexOf("/") + 1);
                    o = o.split("."), r.materials[o[0]] = e[i]
                } else if ("json" == i.slice(i.lastIndexOf(".") + 1).toLowerCase())
                for (var a = e[i], s = 0; s < a.children.length; s++) {
                    var u = a.children[s].name.split(".");
                    r.meshes[u[0]] = a.children[s]
                }
            return this.create(t, r)
        }
        i.prototype.create = function(t, e) {
            var n = {
                world: null,
                sceneProperties: null,
                paths: [],
                lights: [],
                clearColor: null,
                collisionMap: null,
                assets: e
            };
            t.sceneProperties && (n.sceneProperties = t.sceneProperties);
            var i = new r.Object3D,
                o = t.objects,
                a = o.length,
                s = [];
            i.userData.id = "Root";
            for (var u = 1; u < a; u++) {
                var c = null;
                "Object3D" != o[u].type ? e.meshes[o[u].source] ? c = new r.Mesh(e.meshes[o[u].source].geometry, e.materials[o[u].libraries.textures]) : (this.debug && console.log("Missing asset: " + o[u].source), c = new r.Object3D) : c = new r.Object3D, c.name = o[u].id, c.customProperties = o[u].customProperties, c.userData.id = o[u].id, c.userData.parentID = o[u].parent, c.userData.name = o[u].name, c.userData.source = o[u].source, c.userData._positionBuffer = {
                    x: o[u].position.x,
                    y: o[u].position.y,
                    z: o[u].position.z
                }, c.userData._rotationBuffer = {
                    x: o[u].rotation.x,
                    y: o[u].rotation.y,
                    z: o[u].rotation.z
                }, c.userData._scaleBuffer = {
                    x: o[u].scale.x,
                    y: o[u].scale.y,
                    z: o[u].scale.z
                }, i.add(c), s.push(c)
            }
            for (u = 0; u < s.length; u++) s[u] != i && "Root" != s[u].userData.parentID && i.getObjectByName(s[u].userData.parentID, !0).add(s[u]);
            i.traverse(function(t) {
                if (t != i) {
                    var e = t.userData;
                    t.position.set(e._positionBuffer.x, e._positionBuffer.y, e._positionBuffer.z), t.scale.set(e._scaleBuffer.x, e._scaleBuffer.y, e._scaleBuffer.z), t.rotation.set(e._rotationBuffer.x, e._rotationBuffer.y, e._rotationBuffer.z)
                }
            }.bind(this));
            for (var l = 0; l < t.paths.length; l++) {
                var f = {
                        spline: null,
                        radius: t.paths[l].radius,
                        customProperties: t.paths[l].customProperties
                    },
                    h = new r.CatmullRomCurve3(t.paths[l].pointsWorld);
                h.type = t.paths[l].type, h.tension = t.paths[l].tension, h.closed = t.paths[l].closed, f.spline = h, n.paths.push(f)
            }
            if (t.lights)
                for (var p = 0; p < t.lights.length; p++) {
                    var d = t.lights[p];
                    "AmbientLight" == d.type ? n.lights.push(new r.AmbientLight(new r.Color(d.color.r, d.color.g, d.color.b), d.intensity)) : "DirectionalLight" == d.type && (n.lights.push(new r.DirectionalLight(new r.Color(d.color.r, d.color.g, d.color.b), d.intensity)), n.lights[n.lights.length - 1].position.set(d.position.x, d.position.y, d.position.z))
                }
            return t.clearColor && (n.clearColor = t.clearColor), t.collisionMap && (n.collisionMap = t.collisionMap), n.world = i, n
        }, e.a = i
    }, function(t, e, n) {
        (function(t) {
            var r, i, o = n(0),
                a = {
                    distributions: {
                        BOX: 1,
                        SPHERE: 2,
                        DISC: 3
                    },
                    valueOverLifetimeLength: 4
                };
            /**
            @preserve
            * shader-particle-engine 1.0.5
            *
            * (c) 2015 Luke Moody (http://www.github.com/squarefeet)
            * Originally based on Lee Stemkoski's original work (https://github.com/stemkoski/stemkoski.github.com/blob/master/Three.js/js/ParticleEngine.js).
            * shader-particle-engine may be freely distributed under the MIT license (See LICENSE at root of this repository.)
            * License
            * Copyright (C) 2015 Luke Moody
            *
            * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
            *
            * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            *
            * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            *
            * SheepFX
            * SPE lib wrapper by Emil Larsson (emil@flying-sheep.com)
            * Dependencies:
            * three.js (v 81)
            * SPE.js (v 1.0.5)
            */
            function s() {
                this.groups = [], this.screenScale = 180
            }
            "function" == typeof define && n(445) ? define("spe", a) : "undefined" != typeof exports && void 0 !== t && (t.exports = a), a.TypedArrayHelper = function(t, e, n, r) {
                this.componentSize = n || 1, this.size = e || 1, this.TypedArrayConstructor = t || Float32Array, this.array = new t(e * this.componentSize), this.indexOffset = r || 0
            }, a.TypedArrayHelper.constructor = a.TypedArrayHelper, a.TypedArrayHelper.prototype.setSize = function(t, e) {
                var n = this.array.length;
                return e || (t *= this.componentSize), t < n ? this.shrink(t) : t > n ? this.grow(t) : void console.info("TypedArray is already of size:", t + ".", "Will not resize.")
            }, a.TypedArrayHelper.prototype.shrink = function(t) {
                return this.array = this.array.subarray(0, t), this.size = t, this
            }, a.TypedArrayHelper.prototype.grow = function(t) {
                var e = this.array,
                    n = new this.TypedArrayConstructor(t);
                return n.set(e), this.array = n, this.size = t, this
            }, a.TypedArrayHelper.prototype.splice = function(t, e) {
                t *= this.componentSize, e *= this.componentSize;
                for (var n = [], r = this.array, i = r.length, o = 0; o < i; ++o)(o < t || o >= e) && n.push(r[o]);
                return this.setFromArray(0, n), this
            }, a.TypedArrayHelper.prototype.setFromArray = function(t, e) {
                var n = t + e.length;
                return n > this.array.length ? this.grow(n) : n < this.array.length && this.shrink(n), this.array.set(e, this.indexOffset + t), this
            }, a.TypedArrayHelper.prototype.setVec2 = function(t, e) {
                return this.setVec2Components(t, e.x, e.y)
            }, a.TypedArrayHelper.prototype.setVec2Components = function(t, e, n) {
                var r = this.array,
                    i = this.indexOffset + t * this.componentSize;
                return r[i] = e, r[i + 1] = n, this
            }, a.TypedArrayHelper.prototype.setVec3 = function(t, e) {
                return this.setVec3Components(t, e.x, e.y, e.z)
            }, a.TypedArrayHelper.prototype.setVec3Components = function(t, e, n, r) {
                var i = this.array,
                    o = this.indexOffset + t * this.componentSize;
                return i[o] = e, i[o + 1] = n, i[o + 2] = r, this
            }, a.TypedArrayHelper.prototype.setVec4 = function(t, e) {
                return this.setVec4Components(t, e.x, e.y, e.z, e.w)
            }, a.TypedArrayHelper.prototype.setVec4Components = function(t, e, n, r, i) {
                var o = this.array,
                    a = this.indexOffset + t * this.componentSize;
                return o[a] = e, o[a + 1] = n, o[a + 2] = r, o[a + 3] = i, this
            }, a.TypedArrayHelper.prototype.setMat3 = function(t, e) {
                return this.setFromArray(this.indexOffset + t * this.componentSize, e.elements)
            }, a.TypedArrayHelper.prototype.setMat4 = function(t, e) {
                return this.setFromArray(this.indexOffset + t * this.componentSize, e.elements)
            }, a.TypedArrayHelper.prototype.setColor = function(t, e) {
                return this.setVec3Components(t, e.r, e.g, e.b)
            }, a.TypedArrayHelper.prototype.setNumber = function(t, e) {
                return this.array[this.indexOffset + t * this.componentSize] = e, this
            }, a.TypedArrayHelper.prototype.getValueAtIndex = function(t) {
                return this.array[this.indexOffset + t]
            }, a.TypedArrayHelper.prototype.getComponentValueAtIndex = function(t) {
                return this.array.subarray(this.indexOffset + t * this.componentSize)
            }, a.ShaderAttribute = function(t, e, n) {
                var r = a.ShaderAttribute.typeSizeMap;
                this.type = "string" == typeof t && r.hasOwnProperty(t) ? t : "f", this.componentSize = r[this.type], this.arrayType = n || Float32Array, this.typedArray = null, this.bufferAttribute = null, this.dynamicBuffer = !!e, this.updateMin = 0, this.updateMax = 0
            }, a.ShaderAttribute.constructor = a.ShaderAttribute, a.ShaderAttribute.typeSizeMap = {
                f: 1,
                v2: 2,
                v3: 3,
                v4: 4,
                c: 3,
                m3: 9,
                m4: 16
            }, a.ShaderAttribute.prototype.setUpdateRange = function(t, e) {
                this.updateMin = Math.min(t * this.componentSize, this.updateMin * this.componentSize), this.updateMax = Math.max(e * this.componentSize, this.updateMax * this.componentSize)
            }, a.ShaderAttribute.prototype.flagUpdate = function() {
                var t = this.bufferAttribute,
                    e = t.updateRange;
                e.offset = this.updateMin, e.count = Math.min(this.updateMax - this.updateMin + this.componentSize, this.typedArray.array.length), t.needsUpdate = !0
            }, a.ShaderAttribute.prototype.resetUpdateRange = function() {
                this.updateMin = 0, this.updateMax = 0
            }, a.ShaderAttribute.prototype.resetDynamic = function() {
                this.bufferAttribute.dynamic = this.dynamicBuffer
            }, a.ShaderAttribute.prototype.splice = function(t, e) {
                this.typedArray.splice(t, e), this.forceUpdateAll()
            }, a.ShaderAttribute.prototype.forceUpdateAll = function() {
                this.bufferAttribute.array = this.typedArray.array, this.bufferAttribute.updateRange.offset = 0, this.bufferAttribute.updateRange.count = -1, this.bufferAttribute.dynamic = !1, this.bufferAttribute.needsUpdate = !0
            }, a.ShaderAttribute.prototype._ensureTypedArray = function(t) {
                null !== this.typedArray && this.typedArray.size === t * this.componentSize || (null !== this.typedArray && this.typedArray.size !== t ? this.typedArray.setSize(t) : null === this.typedArray && (this.typedArray = new a.TypedArrayHelper(this.arrayType, t, this.componentSize)))
            }, a.ShaderAttribute.prototype._createBufferAttribute = function(t) {
                if (this._ensureTypedArray(t), null !== this.bufferAttribute) return this.bufferAttribute.array = this.typedArray.array, parseFloat(o.REVISION) >= 81 && (this.bufferAttribute.count = this.bufferAttribute.array.length / this.bufferAttribute.itemSize), void(this.bufferAttribute.needsUpdate = !0);
                this.bufferAttribute = new o.BufferAttribute(this.typedArray.array, this.componentSize), this.bufferAttribute.dynamic = this.dynamicBuffer
            }, a.ShaderAttribute.prototype.getLength = function() {
                return null === this.typedArray ? 0 : this.typedArray.array.length
            }, a.shaderChunks = {
                defines: ["#define PACKED_COLOR_SIZE 256.0", "#define PACKED_COLOR_DIVISOR 255.0"].join("\n"),
                uniforms: ["uniform float deltaTime;", "uniform float runTime;", "uniform sampler2D texture;", "uniform vec4 textureAnimation;", "uniform float scale;"].join("\n"),
                attributes: ["attribute vec4 acceleration;", "attribute vec3 velocity;", "attribute vec4 rotation;", "attribute vec3 rotationCenter;", "attribute vec4 params;", "attribute vec4 size;", "attribute vec4 angle;", "attribute vec4 color;", "attribute vec4 opacity;"].join("\n"),
                varyings: ["varying vec4 vColor;", "#ifdef SHOULD_ROTATE_TEXTURE", "    varying float vAngle;", "#endif", "#ifdef SHOULD_CALCULATE_SPRITE", "    varying vec4 vSpriteSheet;", "#endif"].join("\n"),
                branchAvoidanceFunctions: ["float when_gt(float x, float y) {", "    return max(sign(x - y), 0.0);", "}", "float when_lt(float x, float y) {", "    return min( max(1.0 - sign(x - y), 0.0), 1.0 );", "}", "float when_eq( float x, float y ) {", "    return 1.0 - abs( sign( x - y ) );", "}", "float when_ge(float x, float y) {", "  return 1.0 - when_lt(x, y);", "}", "float when_le(float x, float y) {", "  return 1.0 - when_gt(x, y);", "}", "float and(float a, float b) {", "    return a * b;", "}", "float or(float a, float b) {", "    return min(a + b, 1.0);", "}"].join("\n"),
                unpackColor: ["vec3 unpackColor( in float hex ) {", "   vec3 c = vec3( 0.0 );", "   float r = mod( (hex / PACKED_COLOR_SIZE / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float g = mod( (hex / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float b = mod( hex, PACKED_COLOR_SIZE );", "   c.r = r / PACKED_COLOR_DIVISOR;", "   c.g = g / PACKED_COLOR_DIVISOR;", "   c.b = b / PACKED_COLOR_DIVISOR;", "   return c;", "}"].join("\n"),
                unpackRotationAxis: ["vec3 unpackRotationAxis( in float hex ) {", "   vec3 c = vec3( 0.0 );", "   float r = mod( (hex / PACKED_COLOR_SIZE / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float g = mod( (hex / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float b = mod( hex, PACKED_COLOR_SIZE );", "   c.r = r / PACKED_COLOR_DIVISOR;", "   c.g = g / PACKED_COLOR_DIVISOR;", "   c.b = b / PACKED_COLOR_DIVISOR;", "   c *= vec3( 2.0 );", "   c -= vec3( 1.0 );", "   return c;", "}"].join("\n"),
                floatOverLifetime: ["float getFloatOverLifetime( in float positionInTime, in vec4 attr ) {", "    highp float value = 0.0;", "    float deltaAge = positionInTime * float( VALUE_OVER_LIFETIME_LENGTH - 1 );", "    float fIndex = 0.0;", "    float shouldApplyValue = 0.0;", "    value += attr[ 0 ] * when_eq( deltaAge, 0.0 );", "", "    for( int i = 0; i < VALUE_OVER_LIFETIME_LENGTH - 1; ++i ) {", "       fIndex = float( i );", "       shouldApplyValue = and( when_gt( deltaAge, fIndex ), when_le( deltaAge, fIndex + 1.0 ) );", "       value += shouldApplyValue * mix( attr[ i ], attr[ i + 1 ], deltaAge - fIndex );", "    }", "", "    return value;", "}"].join("\n"),
                colorOverLifetime: ["vec3 getColorOverLifetime( in float positionInTime, in vec3 color1, in vec3 color2, in vec3 color3, in vec3 color4 ) {", "    vec3 value = vec3( 0.0 );", "    value.x = getFloatOverLifetime( positionInTime, vec4( color1.x, color2.x, color3.x, color4.x ) );", "    value.y = getFloatOverLifetime( positionInTime, vec4( color1.y, color2.y, color3.y, color4.y ) );", "    value.z = getFloatOverLifetime( positionInTime, vec4( color1.z, color2.z, color3.z, color4.z ) );", "    return value;", "}"].join("\n"),
                paramFetchingFunctions: ["float getAlive() {", "   return params.x;", "}", "float getAge() {", "   return params.y;", "}", "float getMaxAge() {", "   return params.z;", "}", "float getWiggle() {", "   return params.w;", "}"].join("\n"),
                forceFetchingFunctions: ["vec4 getPosition( in float age ) {", "   return modelViewMatrix * vec4( position, 1.0 );", "}", "vec3 getVelocity( in float age ) {", "   return velocity * age;", "}", "vec3 getAcceleration( in float age ) {", "   return acceleration.xyz * age;", "}"].join("\n"),
                rotationFunctions: ["#ifdef SHOULD_ROTATE_PARTICLES", "   mat4 getRotationMatrix( in vec3 axis, in float angle) {", "       axis = normalize(axis);", "       float s = sin(angle);", "       float c = cos(angle);", "       float oc = 1.0 - c;", "", "       return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,", "                   oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,", "                   oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,", "                   0.0,                                0.0,                                0.0,                                1.0);", "   }", "", "   vec3 getRotation( in vec3 pos, in float positionInTime ) {", "      if( rotation.y == 0.0 ) {", "           return pos;", "      }", "", "      vec3 axis = unpackRotationAxis( rotation.x );", "      vec3 center = rotationCenter;", "      vec3 translated;", "      mat4 rotationMatrix;", "      float angle = 0.0;", "      angle += when_eq( rotation.z, 0.0 ) * rotation.y;", "      angle += when_gt( rotation.z, 0.0 ) * mix( 0.0, rotation.y, positionInTime );", "      translated = rotationCenter - pos;", "      rotationMatrix = getRotationMatrix( axis, angle );", "      return center - vec3( rotationMatrix * vec4( translated, 0.0 ) );", "   }", "#endif"].join("\n"),
                rotateTexture: ["    vec2 vUv = vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y );", "", "    #ifdef SHOULD_ROTATE_TEXTURE", "       float x = gl_PointCoord.x - 0.5;", "       float y = 1.0 - gl_PointCoord.y - 0.5;", "       float c = cos( -vAngle );", "       float s = sin( -vAngle );", "       vUv = vec2( c * x + s * y + 0.5, c * y - s * x + 0.5 );", "    #endif", "", "    #ifdef SHOULD_CALCULATE_SPRITE", "        float framesX = vSpriteSheet.x;", "        float framesY = vSpriteSheet.y;", "        float columnNorm = vSpriteSheet.z;", "        float rowNorm = vSpriteSheet.w;", "        vUv.x = gl_PointCoord.x * framesX + columnNorm;", "        vUv.y = 1.0 - (gl_PointCoord.y * framesY + rowNorm);", "    #endif", "", "    vec4 rotatedTexture = texture2D( texture, vUv );"].join("\n")
            }, a.shaders = {
                vertex: [a.shaderChunks.defines, a.shaderChunks.uniforms, a.shaderChunks.attributes, a.shaderChunks.varyings, o.ShaderChunk.common, o.ShaderChunk.logdepthbuf_pars_vertex, o.ShaderChunk.fog_pars_vertex, a.shaderChunks.branchAvoidanceFunctions, a.shaderChunks.unpackColor, a.shaderChunks.unpackRotationAxis, a.shaderChunks.floatOverLifetime, a.shaderChunks.colorOverLifetime, a.shaderChunks.paramFetchingFunctions, a.shaderChunks.forceFetchingFunctions, a.shaderChunks.rotationFunctions, "void main() {", "    highp float age = getAge();", "    highp float alive = getAlive();", "    highp float maxAge = getMaxAge();", "    highp float positionInTime = (age / maxAge);", "    highp float isAlive = when_gt( alive, 0.0 );", "    #ifdef SHOULD_WIGGLE_PARTICLES", "        float wiggleAmount = positionInTime * getWiggle();", "        float wiggleSin = isAlive * sin( wiggleAmount );", "        float wiggleCos = isAlive * cos( wiggleAmount );", "    #endif", "    vec3 vel = getVelocity( age );", "    vec3 accel = getAcceleration( age );", "    vec3 force = vec3( 0.0 );", "    vec3 pos = vec3( position );", "    float drag = 1.0 - (positionInTime * 0.5) * acceleration.w;", "    force += vel;", "    force *= drag;", "    force += accel * age;", "    pos += force;", "    #ifdef SHOULD_WIGGLE_PARTICLES", "        pos.x += wiggleSin;", "        pos.y += wiggleCos;", "        pos.z += wiggleSin;", "    #endif", "    #ifdef SHOULD_ROTATE_PARTICLES", "        pos = getRotation( pos, positionInTime );", "    #endif", "    vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );", "    highp float pointSize = getFloatOverLifetime( positionInTime, size ) * isAlive;", "    #ifdef HAS_PERSPECTIVE", "        float perspective = scale / length( mvPosition.xyz );", "    #else", "        float perspective = 1.0;", "    #endif", "    float pointSizePerspective = pointSize * perspective;", "    #ifdef COLORIZE", "       vec3 c = isAlive * getColorOverLifetime(", "           positionInTime,", "           unpackColor( color.x ),", "           unpackColor( color.y ),", "           unpackColor( color.z ),", "           unpackColor( color.w )", "       );", "    #else", "       vec3 c = vec3(1.0);", "    #endif", "    float o = isAlive * getFloatOverLifetime( positionInTime, opacity );", "    vColor = vec4( c, o );", "    #ifdef SHOULD_ROTATE_TEXTURE", "        vAngle = isAlive * getFloatOverLifetime( positionInTime, angle );", "    #endif", "    #ifdef SHOULD_CALCULATE_SPRITE", "        float framesX = textureAnimation.x;", "        float framesY = textureAnimation.y;", "        float loopCount = textureAnimation.w;", "        float totalFrames = textureAnimation.z;", "        float frameNumber = mod( (positionInTime * loopCount) * totalFrames, totalFrames );", "        float column = floor(mod( frameNumber, framesX ));", "        float row = floor( (frameNumber - column) / framesX );", "        float columnNorm = column / framesX;", "        float rowNorm = row / framesY;", "        vSpriteSheet.x = 1.0 / framesX;", "        vSpriteSheet.y = 1.0 / framesY;", "        vSpriteSheet.z = columnNorm;", "        vSpriteSheet.w = rowNorm;", "    #endif", "    gl_PointSize = pointSizePerspective;", "    gl_Position = projectionMatrix * mvPosition;", o.ShaderChunk.logdepthbuf_vertex, o.ShaderChunk.fog_vertex, "}"].join("\n"),
                fragment: [a.shaderChunks.uniforms, o.ShaderChunk.common, o.ShaderChunk.fog_pars_fragment, o.ShaderChunk.logdepthbuf_pars_fragment, a.shaderChunks.varyings, a.shaderChunks.branchAvoidanceFunctions, "void main() {", "    vec3 outgoingLight = vColor.xyz;", "    ", "    #ifdef ALPHATEST", "       if ( vColor.w < float(ALPHATEST) ) discard;", "    #endif", a.shaderChunks.rotateTexture, o.ShaderChunk.logdepthbuf_fragment, "    outgoingLight = vColor.xyz * rotatedTexture.xyz;", "    gl_FragColor = vec4( outgoingLight.xyz, rotatedTexture.w * vColor.w );", o.ShaderChunk.fog_fragment, "}"].join("\n")
            }, a.utils = {
                types: {
                    BOOLEAN: "boolean",
                    STRING: "string",
                    NUMBER: "number",
                    OBJECT: "object"
                },
                ensureTypedArg: function(t, e, n) {
                    return typeof t === e ? t : n
                },
                ensureArrayTypedArg: function(t, e, n) {
                    if (Array.isArray(t)) {
                        for (var r = t.length - 1; r >= 0; --r)
                            if (typeof t[r] !== e) return n;
                        return t
                    }
                    return this.ensureTypedArg(t, e, n)
                },
                ensureInstanceOf: function(t, e, n) {
                    return void 0 !== e && t instanceof e ? t : n
                },
                ensureArrayInstanceOf: function(t, e, n) {
                    if (Array.isArray(t)) {
                        for (var r = t.length - 1; r >= 0; --r)
                            if (void 0 !== e && t[r] instanceof e == !1) return n;
                        return t
                    }
                    return this.ensureInstanceOf(t, e, n)
                },
                ensureValueOverLifetimeCompliance: function(t, e, n) {
                    e = e || 3, n = n || 3, !1 === Array.isArray(t._value) && (t._value = [t._value]), !1 === Array.isArray(t._spread) && (t._spread = [t._spread]);
                    var r = this.clamp(t._value.length, e, n),
                        i = this.clamp(t._spread.length, e, n),
                        o = Math.max(r, i);
                    t._value.length !== o && (t._value = this.interpolateArray(t._value, o)), t._spread.length !== o && (t._spread = this.interpolateArray(t._spread, o))
                },
                interpolateArray: function(t, e) {
                    for (var n = t.length, r = ["function" == typeof t[0].clone ? t[0].clone() : t[0]], i = (n - 1) / (e - 1), o = 1; o < e - 1; ++o) {
                        var a = o * i,
                            s = Math.floor(a),
                            u = Math.ceil(a),
                            c = a - s;
                        r[o] = this.lerpTypeAgnostic(t[s], t[u], c)
                    }
                    return r.push("function" == typeof t[n - 1].clone ? t[n - 1].clone() : t[n - 1]), r
                },
                clamp: function(t, e, n) {
                    return Math.max(e, Math.min(t, n))
                },
                zeroToEpsilon: function(t, e) {
                    var n = t;
                    return n = e ? 1e-5 * Math.random() * 10 : 1e-5, t < 0 && t > -1e-5 && (n = -n), n
                },
                lerpTypeAgnostic: function(t, e, n) {
                    var r, i = this.types;
                    return typeof t === i.NUMBER && typeof e === i.NUMBER ? t + (e - t) * n : t instanceof o.Vector2 && e instanceof o.Vector2 ? ((r = t.clone()).x = this.lerp(t.x, e.x, n), r.y = this.lerp(t.y, e.y, n), r) : t instanceof o.Vector3 && e instanceof o.Vector3 ? ((r = t.clone()).x = this.lerp(t.x, e.x, n), r.y = this.lerp(t.y, e.y, n), r.z = this.lerp(t.z, e.z, n), r) : t instanceof o.Vector4 && e instanceof o.Vector4 ? ((r = t.clone()).x = this.lerp(t.x, e.x, n), r.y = this.lerp(t.y, e.y, n), r.z = this.lerp(t.z, e.z, n), r.w = this.lerp(t.w, e.w, n), r) : t instanceof o.Color && e instanceof o.Color ? ((r = t.clone()).r = this.lerp(t.r, e.r, n), r.g = this.lerp(t.g, e.g, n), r.b = this.lerp(t.b, e.b, n), r) : void console.warn("Invalid argument types, or argument types do not match:", t, e)
                },
                lerp: function(t, e, n) {
                    return t + (e - t) * n
                },
                roundToNearestMultiple: function(t, e) {
                    var n;
                    return 0 === e ? t : 0 === (n = Math.abs(t) % e) ? t : t < 0 ? -(Math.abs(t) - n) : t + e - n
                },
                arrayValuesAreEqual: function(t) {
                    for (var e = 0; e < t.length - 1; ++e)
                        if (t[e] !== t[e + 1]) return !1;
                    return !0
                },
                randomFloat: function(t, e) {
                    return t + e * (Math.random() - .5)
                },
                randomVector3: function(t, e, n, r, i) {
                    var o = n.x + (Math.random() * r.x - .5 * r.x),
                        a = n.y + (Math.random() * r.y - .5 * r.y),
                        s = n.z + (Math.random() * r.z - .5 * r.z);
                    i && (o = .5 * -i.x + this.roundToNearestMultiple(o, i.x), a = .5 * -i.y + this.roundToNearestMultiple(a, i.y), s = .5 * -i.z + this.roundToNearestMultiple(s, i.z)), t.typedArray.setVec3Components(e, o, a, s)
                },
                randomColor: function(t, e, n, r) {
                    var i = n.r + Math.random() * r.x,
                        o = n.g + Math.random() * r.y,
                        a = n.b + Math.random() * r.z;
                    i = this.clamp(i, 0, 1), o = this.clamp(o, 0, 1), a = this.clamp(a, 0, 1), t.typedArray.setVec3Components(e, i, o, a)
                },
                randomColorAsHex: (i = new o.Color, function(t, e, n, r) {
                    for (var o = n.length, a = [], s = 0; s < o; ++s) {
                        var u = r[s];
                        i.copy(n[s]), i.r += Math.random() * u.x - .5 * u.x, i.g += Math.random() * u.y - .5 * u.y, i.b += Math.random() * u.z - .5 * u.z, i.r = this.clamp(i.r, 0, 1), i.g = this.clamp(i.g, 0, 1), i.b = this.clamp(i.b, 0, 1), a.push(i.getHex())
                    }
                    t.typedArray.setVec4Components(e, a[0], a[1], a[2], a[3])
                }),
                randomVector3OnSphere: function(t, e, n, r, i, o, a, s) {
                    var u = 2 * Math.random() - 1,
                        c = 6.2832 * Math.random(),
                        l = Math.sqrt(1 - u * u),
                        f = this.randomFloat(r, i),
                        h = 0,
                        p = 0,
                        d = 0;
                    a && (f = Math.round(f / a) * a), h = l * Math.cos(c) * f, p = l * Math.sin(c) * f, d = u * f, h *= o.x, p *= o.y, d *= o.z, h += n.x, p += n.y, d += n.z, t.typedArray.setVec3Components(e, h, p, d)
                },
                seededRandom: function(t) {
                    var e = 1e4 * Math.sin(t);
                    return e - (0 | e)
                },
                randomVector3OnDisc: function(t, e, n, r, i, o, a) {
                    var s = 6.2832 * Math.random(),
                        u = Math.abs(this.randomFloat(r, i)),
                        c = 0,
                        l = 0,
                        f = 0;
                    a && (u = Math.round(u / a) * a), c = Math.cos(s) * u, l = Math.sin(s) * u, c *= o.x, l *= o.y, c += n.x, l += n.y, f += n.z, t.typedArray.setVec3Components(e, c, l, f)
                },
                randomDirectionVector3OnSphere: (r = new o.Vector3, function(t, e, n, i, o, a, s, u) {
                    r.copy(a), r.x -= n, r.y -= i, r.z -= o, r.normalize().multiplyScalar(-this.randomFloat(s, u)), t.typedArray.setVec3Components(e, r.x, r.y, r.z)
                }),
                randomDirectionVector3OnDisc: function() {
                    var t = new o.Vector3;
                    return function(e, n, r, i, o, a, s, u) {
                        t.copy(a), t.x -= r, t.y -= i, t.z -= o, t.normalize().multiplyScalar(-this.randomFloat(s, u)), e.typedArray.setVec3Components(n, t.x, t.y, 0)
                    }
                }(),
                getPackedRotationAxis: function() {
                    var t = new o.Vector3,
                        e = new o.Vector3,
                        n = new o.Color,
                        r = new o.Vector3(1, 1, 1);
                    return function(i, o) {
                        return t.copy(i).normalize(), e.copy(o).normalize(), t.x += .5 * -o.x + Math.random() * o.x, t.y += .5 * -o.y + Math.random() * o.y, t.z += .5 * -o.z + Math.random() * o.z, t.normalize().add(r).multiplyScalar(.5), n.setRGB(t.x, t.y, t.z), n.getHex()
                    }
                }()
            }, a.Group = function(t) {
                var e = a.utils,
                    n = e.types;
                (t = e.ensureTypedArg(t, n.OBJECT, {})).texture = e.ensureTypedArg(t.texture, n.OBJECT, {}), this.uuid = o.Math.generateUUID(), this.fixedTimeStep = e.ensureTypedArg(t.fixedTimeStep, n.NUMBER, .016), this.texture = e.ensureInstanceOf(t.texture.value, o.Texture, null), this.textureFrames = e.ensureInstanceOf(t.texture.frames, o.Vector2, new o.Vector2(1, 1)), this.textureFrameCount = e.ensureTypedArg(t.texture.frameCount, n.NUMBER, this.textureFrames.x * this.textureFrames.y), this.textureLoop = e.ensureTypedArg(t.texture.loop, n.NUMBER, 1), this.textureFrames.max(new o.Vector2(1, 1)), this.hasPerspective = e.ensureTypedArg(t.hasPerspective, n.BOOLEAN, !0), this.colorize = e.ensureTypedArg(t.colorize, n.BOOLEAN, !0), this.maxParticleCount = e.ensureTypedArg(t.maxParticleCount, n.NUMBER, null), this.blending = e.ensureTypedArg(t.blending, n.NUMBER, o.AdditiveBlending), this.transparent = e.ensureTypedArg(t.transparent, n.BOOLEAN, !0), this.alphaTest = parseFloat(e.ensureTypedArg(t.alphaTest, n.NUMBER, 0)), this.depthWrite = e.ensureTypedArg(t.depthWrite, n.BOOLEAN, !1), this.depthTest = e.ensureTypedArg(t.depthTest, n.BOOLEAN, !0), this.fog = e.ensureTypedArg(t.fog, n.BOOLEAN, !0), this.scale = e.ensureTypedArg(t.scale, n.NUMBER, 300), this.emitters = [], this.emitterIDs = [], this._pool = [], this._poolCreationSettings = null, this._createNewWhenPoolEmpty = 0, this._attributesNeedRefresh = !1, this._attributesNeedDynamicReset = !1, this.particleCount = 0, this.uniforms = {
                    texture: {
                        type: "t",
                        value: this.texture
                    },
                    textureAnimation: {
                        type: "v4",
                        value: new o.Vector4(this.textureFrames.x, this.textureFrames.y, this.textureFrameCount, Math.max(Math.abs(this.textureLoop), 1))
                    },
                    fogColor: {
                        type: "c",
                        value: null
                    },
                    fogNear: {
                        type: "f",
                        value: 10
                    },
                    fogFar: {
                        type: "f",
                        value: 200
                    },
                    fogDensity: {
                        type: "f",
                        value: .5
                    },
                    deltaTime: {
                        type: "f",
                        value: 0
                    },
                    runTime: {
                        type: "f",
                        value: 0
                    },
                    scale: {
                        type: "f",
                        value: this.scale
                    }
                }, this.defines = {
                    HAS_PERSPECTIVE: this.hasPerspective,
                    COLORIZE: this.colorize,
                    VALUE_OVER_LIFETIME_LENGTH: a.valueOverLifetimeLength,
                    SHOULD_ROTATE_TEXTURE: !1,
                    SHOULD_ROTATE_PARTICLES: !1,
                    SHOULD_WIGGLE_PARTICLES: !1,
                    SHOULD_CALCULATE_SPRITE: this.textureFrames.x > 1 || this.textureFrames.y > 1
                }, this.attributes = {
                    position: new a.ShaderAttribute("v3", !0),
                    acceleration: new a.ShaderAttribute("v4", !0),
                    velocity: new a.ShaderAttribute("v3", !0),
                    rotation: new a.ShaderAttribute("v4", !0),
                    rotationCenter: new a.ShaderAttribute("v3", !0),
                    params: new a.ShaderAttribute("v4", !0),
                    size: new a.ShaderAttribute("v4", !0),
                    angle: new a.ShaderAttribute("v4", !0),
                    color: new a.ShaderAttribute("v4", !0),
                    opacity: new a.ShaderAttribute("v4", !0)
                }, this.attributeKeys = Object.keys(this.attributes), this.attributeCount = this.attributeKeys.length, this.material = new o.ShaderMaterial({
                    uniforms: this.uniforms,
                    vertexShader: a.shaders.vertex,
                    fragmentShader: a.shaders.fragment,
                    blending: this.blending,
                    transparent: this.transparent,
                    alphaTest: this.alphaTest,
                    depthWrite: this.depthWrite,
                    depthTest: this.depthTest,
                    defines: this.defines,
                    fog: this.fog
                }), this.geometry = new o.BufferGeometry, this.mesh = new o.Points(this.geometry, this.material), null === this.maxParticleCount && console.warn("SPE.Group: No maxParticleCount specified. Adding emitters after rendering will probably cause errors.")
            }, a.Group.constructor = a.Group, a.Group.prototype._updateDefines = function() {
                for (var t, e = this.emitters, n = e.length - 1, r = this.defines; n >= 0; --n) t = e[n], r.SHOULD_CALCULATE_SPRITE || (r.SHOULD_ROTATE_TEXTURE = r.SHOULD_ROTATE_TEXTURE || !!Math.max(Math.max.apply(null, t.angle.value), Math.max.apply(null, t.angle.spread))), r.SHOULD_ROTATE_PARTICLES = r.SHOULD_ROTATE_PARTICLES || !!Math.max(t.rotation.angle, t.rotation.angleSpread), r.SHOULD_WIGGLE_PARTICLES = r.SHOULD_WIGGLE_PARTICLES || !!Math.max(t.wiggle.value, t.wiggle.spread);
                this.material.needsUpdate = !0
            }, a.Group.prototype._applyAttributesToGeometry = function() {
                var t, e, n = this.attributes,
                    r = this.geometry,
                    i = r.attributes;
                for (var o in n) n.hasOwnProperty(o) && (t = n[o], (e = i[o]) ? e.array = t.typedArray.array : r.addAttribute(o, t.bufferAttribute), t.bufferAttribute.needsUpdate = !0);
                this.geometry.setDrawRange(0, this.particleCount)
            }, a.Group.prototype.addEmitter = function(t) {
                if (t instanceof a.Emitter != !1)
                    if (this.emitterIDs.indexOf(t.uuid) > -1) console.error("Emitter already exists in this group. Will not add again.");
                    else {
                        if (null === t.group) {
                            var e = this.attributes,
                                n = this.particleCount,
                                r = n + t.particleCount;
                            for (var i in this.particleCount = r, null !== this.maxParticleCount && this.particleCount > this.maxParticleCount && console.warn("SPE.Group: maxParticleCount exceeded. Requesting", this.particleCount, "particles, can support only", this.maxParticleCount), t._calculatePPSValue(t.maxAge._value + t.maxAge._spread), t._setBufferUpdateRanges(this.attributeKeys), t._setAttributeOffset(n), t.group = this, t.attributes = this.attributes, e) e.hasOwnProperty(i) && e[i]._createBufferAttribute(null !== this.maxParticleCount ? this.maxParticleCount : this.particleCount);
                            for (var o = n; o < r; ++o) t._assignPositionValue(o), t._assignForceValue(o, "velocity"), t._assignForceValue(o, "acceleration"), t._assignAbsLifetimeValue(o, "opacity"), t._assignAbsLifetimeValue(o, "size"), t._assignAngleValue(o), t._assignRotationValue(o), t._assignParamsValue(o), t._assignColorValue(o);
                            return this._applyAttributesToGeometry(), this.emitters.push(t), this.emitterIDs.push(t.uuid), this._updateDefines(t), this.material.needsUpdate = !0, this.geometry.needsUpdate = !0, this._attributesNeedRefresh = !0, this
                        }
                        console.error("Emitter already belongs to another group. Will not add to requested group.")
                    }
                else console.error("`emitter` argument must be instance of SPE.Emitter. Was provided with:", t)
            }, a.Group.prototype.removeEmitter = function(t) {
                var e = this.emitterIDs.indexOf(t.uuid);
                if (t instanceof a.Emitter != !1)
                    if (-1 !== e) {
                        for (var n = t.attributeOffset, r = n + t.particleCount, i = this.attributes.params.typedArray, o = n; o < r; ++o) i.array[4 * o] = 0, i.array[4 * o + 1] = 0;
                        for (var s in this.emitters.splice(e, 1), this.emitterIDs.splice(e, 1), this.attributes) this.attributes.hasOwnProperty(s) && this.attributes[s].splice(n, r);
                        this.particleCount -= t.particleCount, t._onRemove(), this._attributesNeedRefresh = !0
                    } else console.error("Emitter does not exist in this group. Will not remove.");
                else console.error("`emitter` argument must be instance of SPE.Emitter. Was provided with:", t)
            }, a.Group.prototype.getFromPool = function() {
                var t = this._pool,
                    e = this._createNewWhenPoolEmpty;
                if (t.length) return t.pop();
                if (e) {
                    var n = new a.Emitter(this._poolCreationSettings);
                    return this.addEmitter(n), n
                }
                return null
            }, a.Group.prototype.releaseIntoPool = function(t) {
                if (t instanceof a.Emitter != !1) return t.reset(), this._pool.unshift(t), this;
                console.error("Argument is not instanceof SPE.Emitter:", t)
            }, a.Group.prototype.getPool = function() {
                return this._pool
            }, a.Group.prototype.addPool = function(t, e, n) {
                var r;
                this._poolCreationSettings = e, this._createNewWhenPoolEmpty = !!n;
                for (var i = 0; i < t; ++i) r = Array.isArray(e) ? new a.Emitter(e[i]) : new a.Emitter(e), this.addEmitter(r), this.releaseIntoPool(r);
                return this
            }, a.Group.prototype._triggerSingleEmitter = function(t) {
                var e = this.getFromPool(),
                    n = this;
                if (null !== e) return t instanceof o.Vector3 && (e.position.value.copy(t), e.position.value = e.position.value), e.enable(), setTimeout(function() {
                    e.disable(), n.releaseIntoPool(e)
                }, 1e3 * Math.max(e.duration, e.maxAge.value + e.maxAge.spread)), this;
                console.log("SPE.Group pool ran out.")
            }, a.Group.prototype.triggerPoolEmitter = function(t, e) {
                if ("number" == typeof t && t > 1)
                    for (var n = 0; n < t; ++n) this._triggerSingleEmitter(e);
                else this._triggerSingleEmitter(e);
                return this
            }, a.Group.prototype._updateUniforms = function(t) {
                this.uniforms.runTime.value += t, this.uniforms.deltaTime.value = t
            }, a.Group.prototype._resetBufferRanges = function() {
                for (var t = this.attributeKeys, e = this.attributeCount - 1, n = this.attributes; e >= 0; --e) n[t[e]].resetUpdateRange()
            }, a.Group.prototype._updateBuffers = function(t) {
                for (var e, n, r, i = this.attributeKeys, o = this.attributeCount - 1, a = this.attributes, s = t.bufferUpdateRanges; o >= 0; --o) n = s[e = i[o]], (r = a[e]).setUpdateRange(n.min, n.max), r.flagUpdate()
            }, a.Group.prototype.tick = function(t) {
                var e = this.emitters,
                    n = e.length,
                    r = t || this.fixedTimeStep,
                    i = this.attributeKeys,
                    o = this.attributes;
                if (this._updateUniforms(r), this._resetBufferRanges(), 0 !== n || !1 !== this._attributesNeedRefresh || !1 !== this._attributesNeedDynamicReset) {
                    for (var a, s = 0; s < n; ++s)(a = e[s]).tick(r), this._updateBuffers(a);
                    if (!0 === this._attributesNeedDynamicReset) {
                        for (s = this.attributeCount - 1; s >= 0; --s) o[i[s]].resetDynamic();
                        this._attributesNeedDynamicReset = !1
                    }
                    if (!0 === this._attributesNeedRefresh) {
                        for (s = this.attributeCount - 1; s >= 0; --s) o[i[s]].forceUpdateAll();
                        this._attributesNeedRefresh = !1, this._attributesNeedDynamicReset = !0
                    }
                }
            }, a.Group.prototype.dispose = function() {
                return this.geometry.dispose(), this.material.dispose(), this
            }, a.Emitter = function(t) {
                var e = a.utils,
                    n = e.types,
                    r = a.valueOverLifetimeLength;
                for (var i in (t = e.ensureTypedArg(t, n.OBJECT, {})).position = e.ensureTypedArg(t.position, n.OBJECT, {}), t.velocity = e.ensureTypedArg(t.velocity, n.OBJECT, {}), t.acceleration = e.ensureTypedArg(t.acceleration, n.OBJECT, {}), t.radius = e.ensureTypedArg(t.radius, n.OBJECT, {}), t.drag = e.ensureTypedArg(t.drag, n.OBJECT, {}), t.rotation = e.ensureTypedArg(t.rotation, n.OBJECT, {}), t.color = e.ensureTypedArg(t.color, n.OBJECT, {}), t.opacity = e.ensureTypedArg(t.opacity, n.OBJECT, {}), t.size = e.ensureTypedArg(t.size, n.OBJECT, {}), t.angle = e.ensureTypedArg(t.angle, n.OBJECT, {}), t.wiggle = e.ensureTypedArg(t.wiggle, n.OBJECT, {}), t.maxAge = e.ensureTypedArg(t.maxAge, n.OBJECT, {}), t.onParticleSpawn && console.warn("onParticleSpawn has been removed. Please set properties directly to alter values at runtime."), this.uuid = o.Math.generateUUID(), this.type = e.ensureTypedArg(t.type, n.NUMBER, a.distributions.BOX), this.position = {
                        _value: e.ensureInstanceOf(t.position.value, o.Vector3, new o.Vector3),
                        _spread: e.ensureInstanceOf(t.position.spread, o.Vector3, new o.Vector3),
                        _spreadClamp: e.ensureInstanceOf(t.position.spreadClamp, o.Vector3, new o.Vector3),
                        _distribution: e.ensureTypedArg(t.position.distribution, n.NUMBER, this.type),
                        _randomise: e.ensureTypedArg(t.position.randomise, n.BOOLEAN, !1),
                        _radius: e.ensureTypedArg(t.position.radius, n.NUMBER, 10),
                        _radiusScale: e.ensureInstanceOf(t.position.radiusScale, o.Vector3, new o.Vector3(1, 1, 1)),
                        _distributionClamp: e.ensureTypedArg(t.position.distributionClamp, n.NUMBER, 0)
                    }, this.velocity = {
                        _value: e.ensureInstanceOf(t.velocity.value, o.Vector3, new o.Vector3),
                        _spread: e.ensureInstanceOf(t.velocity.spread, o.Vector3, new o.Vector3),
                        _distribution: e.ensureTypedArg(t.velocity.distribution, n.NUMBER, this.type),
                        _randomise: e.ensureTypedArg(t.position.randomise, n.BOOLEAN, !1)
                    }, this.acceleration = {
                        _value: e.ensureInstanceOf(t.acceleration.value, o.Vector3, new o.Vector3),
                        _spread: e.ensureInstanceOf(t.acceleration.spread, o.Vector3, new o.Vector3),
                        _distribution: e.ensureTypedArg(t.acceleration.distribution, n.NUMBER, this.type),
                        _randomise: e.ensureTypedArg(t.position.randomise, n.BOOLEAN, !1)
                    }, this.drag = {
                        _value: e.ensureTypedArg(t.drag.value, n.NUMBER, 0),
                        _spread: e.ensureTypedArg(t.drag.spread, n.NUMBER, 0),
                        _randomise: e.ensureTypedArg(t.position.randomise, n.BOOLEAN, !1)
                    }, this.wiggle = {
                        _value: e.ensureTypedArg(t.wiggle.value, n.NUMBER, 0),
                        _spread: e.ensureTypedArg(t.wiggle.spread, n.NUMBER, 0)
                    }, this.rotation = {
                        _axis: e.ensureInstanceOf(t.rotation.axis, o.Vector3, new o.Vector3(0, 1, 0)),
                        _axisSpread: e.ensureInstanceOf(t.rotation.axisSpread, o.Vector3, new o.Vector3),
                        _angle: e.ensureTypedArg(t.rotation.angle, n.NUMBER, 0),
                        _angleSpread: e.ensureTypedArg(t.rotation.angleSpread, n.NUMBER, 0),
                        _static: e.ensureTypedArg(t.rotation.static, n.BOOLEAN, !1),
                        _center: e.ensureInstanceOf(t.rotation.center, o.Vector3, this.position._value.clone()),
                        _randomise: e.ensureTypedArg(t.position.randomise, n.BOOLEAN, !1)
                    }, this.maxAge = {
                        _value: e.ensureTypedArg(t.maxAge.value, n.NUMBER, 2),
                        _spread: e.ensureTypedArg(t.maxAge.spread, n.NUMBER, 0)
                    }, this.color = {
                        _value: e.ensureArrayInstanceOf(t.color.value, o.Color, new o.Color),
                        _spread: e.ensureArrayInstanceOf(t.color.spread, o.Vector3, new o.Vector3),
                        _randomise: e.ensureTypedArg(t.position.randomise, n.BOOLEAN, !1)
                    }, this.opacity = {
                        _value: e.ensureArrayTypedArg(t.opacity.value, n.NUMBER, 1),
                        _spread: e.ensureArrayTypedArg(t.opacity.spread, n.NUMBER, 0),
                        _randomise: e.ensureTypedArg(t.position.randomise, n.BOOLEAN, !1)
                    }, this.size = {
                        _value: e.ensureArrayTypedArg(t.size.value, n.NUMBER, 1),
                        _spread: e.ensureArrayTypedArg(t.size.spread, n.NUMBER, 0),
                        _randomise: e.ensureTypedArg(t.position.randomise, n.BOOLEAN, !1)
                    }, this.angle = {
                        _value: e.ensureArrayTypedArg(t.angle.value, n.NUMBER, 0),
                        _spread: e.ensureArrayTypedArg(t.angle.spread, n.NUMBER, 0),
                        _randomise: e.ensureTypedArg(t.position.randomise, n.BOOLEAN, !1)
                    }, this.particleCount = e.ensureTypedArg(t.particleCount, n.NUMBER, 100), this.duration = e.ensureTypedArg(t.duration, n.NUMBER, null), this.isStatic = e.ensureTypedArg(t.isStatic, n.BOOLEAN, !1), this.activeMultiplier = e.ensureTypedArg(t.activeMultiplier, n.NUMBER, 1), this.direction = e.ensureTypedArg(t.direction, n.NUMBER, 1), this.alive = e.ensureTypedArg(t.alive, n.BOOLEAN, !0), this.particlesPerSecond = 0, this.activationIndex = 0, this.attributeOffset = 0, this.attributeEnd = 0, this.age = 0, this.activeParticleCount = 0, this.group = null, this.attributes = null, this.paramsArray = null, this.resetFlags = {
                        position: e.ensureTypedArg(t.position.randomise, n.BOOLEAN, !1) || e.ensureTypedArg(t.radius.randomise, n.BOOLEAN, !1),
                        velocity: e.ensureTypedArg(t.velocity.randomise, n.BOOLEAN, !1),
                        acceleration: e.ensureTypedArg(t.acceleration.randomise, n.BOOLEAN, !1) || e.ensureTypedArg(t.drag.randomise, n.BOOLEAN, !1),
                        rotation: e.ensureTypedArg(t.rotation.randomise, n.BOOLEAN, !1),
                        rotationCenter: e.ensureTypedArg(t.rotation.randomise, n.BOOLEAN, !1),
                        size: e.ensureTypedArg(t.size.randomise, n.BOOLEAN, !1),
                        color: e.ensureTypedArg(t.color.randomise, n.BOOLEAN, !1),
                        opacity: e.ensureTypedArg(t.opacity.randomise, n.BOOLEAN, !1),
                        angle: e.ensureTypedArg(t.angle.randomise, n.BOOLEAN, !1)
                    }, this.updateFlags = {}, this.updateCounts = {}, this.updateMap = {
                        maxAge: "params",
                        position: "position",
                        velocity: "velocity",
                        acceleration: "acceleration",
                        drag: "acceleration",
                        wiggle: "params",
                        rotation: "rotation",
                        size: "size",
                        color: "color",
                        opacity: "opacity",
                        angle: "angle"
                    }, this.updateMap) this.updateMap.hasOwnProperty(i) && (this.updateCounts[this.updateMap[i]] = 0, this.updateFlags[this.updateMap[i]] = !1, this._createGetterSetters(this[i], i));
                this.bufferUpdateRanges = {}, this.attributeKeys = null, this.attributeCount = 0, e.ensureValueOverLifetimeCompliance(this.color, r, r), e.ensureValueOverLifetimeCompliance(this.opacity, r, r), e.ensureValueOverLifetimeCompliance(this.size, r, r), e.ensureValueOverLifetimeCompliance(this.angle, r, r)
            }, a.Emitter.constructor = a.Emitter, a.Emitter.prototype._createGetterSetters = function(t, e) {
                var n = this;
                for (var r in t)
                    if (t.hasOwnProperty(r)) {
                        var i = r.replace("_", "");
                        Object.defineProperty(t, i, {
                            get: function(t) {
                                return function() {
                                    return this[t]
                                }
                            }(r),
                            set: function(t) {
                                return function(r) {
                                    var i = n.updateMap[e],
                                        o = this[t],
                                        s = a.valueOverLifetimeLength;
                                    "_rotationCenter" === t ? (n.updateFlags.rotationCenter = !0, n.updateCounts.rotationCenter = 0) : "_randomise" === t ? n.resetFlags[i] = r : (n.updateFlags[i] = !0, n.updateCounts[i] = 0), n.group._updateDefines(), this[t] = r, Array.isArray(o) && a.utils.ensureValueOverLifetimeCompliance(n[e], s, s)
                                }
                            }(r)
                        })
                    }
            }, a.Emitter.prototype._setBufferUpdateRanges = function(t) {
                this.attributeKeys = t, this.attributeCount = t.length;
                for (var e = this.attributeCount - 1; e >= 0; --e) this.bufferUpdateRanges[t[e]] = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                }
            }, a.Emitter.prototype._calculatePPSValue = function(t) {
                var e = this.particleCount;
                this.duration ? this.particlesPerSecond = e / (t < this.duration ? t : this.duration) : this.particlesPerSecond = e / t
            }, a.Emitter.prototype._setAttributeOffset = function(t) {
                this.attributeOffset = t, this.activationIndex = t, this.activationEnd = t + this.particleCount
            }, a.Emitter.prototype._assignValue = function(t, e) {
                switch (t) {
                    case "position":
                        this._assignPositionValue(e);
                        break;
                    case "velocity":
                    case "acceleration":
                        this._assignForceValue(e, t);
                        break;
                    case "size":
                    case "opacity":
                        this._assignAbsLifetimeValue(e, t);
                        break;
                    case "angle":
                        this._assignAngleValue(e);
                        break;
                    case "params":
                        this._assignParamsValue(e);
                        break;
                    case "rotation":
                        this._assignRotationValue(e);
                        break;
                    case "color":
                        this._assignColorValue(e)
                }
            }, a.Emitter.prototype._assignPositionValue = function(t) {
                var e = a.distributions,
                    n = a.utils,
                    r = this.position,
                    i = this.attributes.position,
                    o = r._value,
                    s = r._spread;
                switch (r._distribution) {
                    case e.BOX:
                        n.randomVector3(i, t, o, s, r._spreadClamp);
                        break;
                    case e.SPHERE:
                        n.randomVector3OnSphere(i, t, o, r._radius, r._spread.x, r._radiusScale, r._spreadClamp.x, r._distributionClamp || this.particleCount);
                        break;
                    case e.DISC:
                        n.randomVector3OnDisc(i, t, o, r._radius, r._spread.x, r._radiusScale, r._spreadClamp.x)
                }
            }, a.Emitter.prototype._assignForceValue = function(t, e) {
                var n, r, i, o, s, u = a.distributions,
                    c = a.utils,
                    l = this[e],
                    f = l._value,
                    h = l._spread;
                switch (l._distribution) {
                    case u.BOX:
                        c.randomVector3(this.attributes[e], t, f, h);
                        break;
                    case u.SPHERE:
                        r = (n = this.attributes.position.typedArray.array)[s = 3 * t], i = n[s + 1], o = n[s + 2], c.randomDirectionVector3OnSphere(this.attributes[e], t, r, i, o, this.position._value, l._value.x, l._spread.x);
                        break;
                    case u.DISC:
                        r = (n = this.attributes.position.typedArray.array)[s = 3 * t], i = n[s + 1], o = n[s + 2], c.randomDirectionVector3OnDisc(this.attributes[e], t, r, i, o, this.position._value, l._value.x, l._spread.x)
                }
                if ("acceleration" === e) {
                    var p = c.clamp(c.randomFloat(this.drag._value, this.drag._spread), 0, 1);
                    this.attributes.acceleration.typedArray.array[4 * t + 3] = p
                }
            }, a.Emitter.prototype._assignAbsLifetimeValue = function(t, e) {
                var n, r = this.attributes[e].typedArray,
                    i = this[e],
                    o = a.utils;
                o.arrayValuesAreEqual(i._value) && o.arrayValuesAreEqual(i._spread) ? (n = Math.abs(o.randomFloat(i._value[0], i._spread[0])), r.setVec4Components(t, n, n, n, n)) : r.setVec4Components(t, Math.abs(o.randomFloat(i._value[0], i._spread[0])), Math.abs(o.randomFloat(i._value[1], i._spread[1])), Math.abs(o.randomFloat(i._value[2], i._spread[2])), Math.abs(o.randomFloat(i._value[3], i._spread[3])))
            }, a.Emitter.prototype._assignAngleValue = function(t) {
                var e, n = this.attributes.angle.typedArray,
                    r = this.angle,
                    i = a.utils;
                i.arrayValuesAreEqual(r._value) && i.arrayValuesAreEqual(r._spread) ? (e = i.randomFloat(r._value[0], r._spread[0]), n.setVec4Components(t, e, e, e, e)) : n.setVec4Components(t, i.randomFloat(r._value[0], r._spread[0]), i.randomFloat(r._value[1], r._spread[1]), i.randomFloat(r._value[2], r._spread[2]), i.randomFloat(r._value[3], r._spread[3]))
            }, a.Emitter.prototype._assignParamsValue = function(t) {
                this.attributes.params.typedArray.setVec4Components(t, this.isStatic ? 1 : 0, 0, Math.abs(a.utils.randomFloat(this.maxAge._value, this.maxAge._spread)), a.utils.randomFloat(this.wiggle._value, this.wiggle._spread))
            }, a.Emitter.prototype._assignRotationValue = function(t) {
                this.attributes.rotation.typedArray.setVec3Components(t, a.utils.getPackedRotationAxis(this.rotation._axis, this.rotation._axisSpread), a.utils.randomFloat(this.rotation._angle, this.rotation._angleSpread), this.rotation._static ? 0 : 1), this.attributes.rotationCenter.typedArray.setVec3(t, this.rotation._center)
            }, a.Emitter.prototype._assignColorValue = function(t) {
                a.utils.randomColorAsHex(this.attributes.color, t, this.color._value, this.color._spread)
            }, a.Emitter.prototype._resetParticle = function(t) {
                for (var e, n, r = this.resetFlags, i = this.updateFlags, o = this.updateCounts, a = this.attributeKeys, s = this.attributeCount - 1; s >= 0; --s) n = i[e = a[s]], !0 !== r[e] && !0 !== n || (this._assignValue(e, t), this._updateAttributeUpdateRange(e, t), !0 === n && o[e] === this.particleCount ? (i[e] = !1, o[e] = 0) : 1 == n && ++o[e])
            }, a.Emitter.prototype._updateAttributeUpdateRange = function(t, e) {
                var n = this.bufferUpdateRanges[t];
                n.min = Math.min(e, n.min), n.max = Math.max(e, n.max)
            }, a.Emitter.prototype._resetBufferRanges = function() {
                for (var t, e = this.bufferUpdateRanges, n = this.bufferUpdateKeys, r = this.bufferUpdateCount - 1; r >= 0; --r) e[t = n[r]].min = Number.POSITIVE_INFINITY, e[t].max = Number.NEGATIVE_INFINITY
            }, a.Emitter.prototype._onRemove = function() {
                this.particlesPerSecond = 0, this.attributeOffset = 0, this.activationIndex = 0, this.activeParticleCount = 0, this.group = null, this.attributes = null, this.paramsArray = null, this.age = 0
            }, a.Emitter.prototype._decrementParticleCount = function() {
                --this.activeParticleCount
            }, a.Emitter.prototype._incrementParticleCount = function() {
                ++this.activeParticleCount
            }, a.Emitter.prototype._checkParticleAges = function(t, e, n, r) {
                for (var i, o, a, s, u = e - 1; u >= t; --u) 0 !== (s = n[i = 4 * u]) && (a = n[i + 1], o = n[i + 2], 1 === this.direction ? (a += r) >= o && (a = 0, s = 0, this._decrementParticleCount()) : (a -= r) <= 0 && (a = o, s = 0, this._decrementParticleCount()), n[i] = s, n[i + 1] = a, this._updateAttributeUpdateRange("params", u))
            }, a.Emitter.prototype._activateParticles = function(t, e, n, r) {
                for (var i, o, a = this.direction, s = t; s < e; ++s) 0 != n[i = 4 * s] && 1 !== this.particleCount || (this._incrementParticleCount(), n[i] = 1, this._resetParticle(s), o = r * (s - t), n[i + 1] = -1 === a ? n[i + 2] - o : o, this._updateAttributeUpdateRange("params", s))
            }, a.Emitter.prototype.tick = function(t) {
                if (!this.isStatic) {
                    null === this.paramsArray && (this.paramsArray = this.attributes.params.typedArray.array);
                    var e = this.attributeOffset,
                        n = e + this.particleCount,
                        r = this.paramsArray,
                        i = this.particlesPerSecond * this.activeMultiplier * t,
                        o = this.activationIndex;
                    if (this._resetBufferRanges(), this._checkParticleAges(e, n, r, t), !1 !== this.alive) {
                        if (null !== this.duration && this.age > this.duration) return this.alive = !1, void(this.age = 0);
                        var a = 1 === this.particleCount ? o : 0 | o,
                            s = Math.min(a + i, this.activationEnd),
                            u = s - this.activationIndex | 0,
                            c = u > 0 ? t / u : 0;
                        this._activateParticles(a, s, r, c), this.activationIndex += i, this.activationIndex > n && (this.activationIndex = e), this.age += t
                    } else this.age = 0
                }
            }, a.Emitter.prototype.reset = function(t) {
                if (this.age = 0, this.alive = !1, !0 === t) {
                    for (var e, n = this.attributeOffset, r = n + this.particleCount, i = this.paramsArray, o = this.attributes.params.bufferAttribute, a = r - 1; a >= n; --a) i[e = 4 * a] = 0, i[e + 1] = 0;
                    o.updateRange.offset = 0, o.updateRange.count = -1, o.needsUpdate = !0
                }
                return this
            }, a.Emitter.prototype.enable = function() {
                return this.alive = !0, this
            }, a.Emitter.prototype.disable = function() {
                return this.alive = !1, this
            }, a.Emitter.prototype.remove = function() {
                return null !== this.group ? this.group.removeEmitter(this) : console.error("Emitter does not belong to a group, cannot remove."), this
            }, s.prototype._finalize = function(t) {
                for (var e = 0; e < t.emitters.length; e++) 0 == t.emitters[e].duration && t.emitters[e].activeMultiplier > 9 && (t.emitters[e].particlesPerSecond = 1e4);
                return this.groups.push(t), t.sheepfxID = this.groups.length - 1, t.mesh.group = t, t.mesh.emitters = t.emitters, t.uniforms.scale.value = this.screenScale, t.fog = !1, t.mesh
            }, s.prototype.effectFromJson = function(t, e, n) {
                if (!t.emitter_length) return console.log("Error: Json file is not of type 'Effect'"), this.generateTemplate(e);
                var r, i = 0;
                if (n) i = n;
                else
                    for (var s = 0; s < t.emitter_length; s++) i += t["emitter_" + s.toString()].particleCount;
                r = t.texture && t.texture.frames && (1 != t.texture.frames.x || 1 != t.texture.frames.y) ? new a.Group({
                    maxParticleCount: i,
                    texture: {
                        value: e,
                        frames: (new o.Vector2).copy(t.texture.frames),
                        frameCount: t.texture.frameCount,
                        loop: t.texture.loop
                    },
                    blending: t.blending,
                    depthWrite: t.depthWrite,
                    depthTest: t.depthTest,
                    fog: !1
                }) : new a.Group({
                    maxParticleCount: i,
                    texture: {
                        value: e,
                        frames: null,
                        frameCount: null,
                        loop: null
                    },
                    blending: t.blending,
                    depthWrite: t.depthWrite,
                    depthTest: t.depthTest,
                    fog: !1
                });
                for (s = 0; s < t.emitter_length; s++) {
                    var u = t["emitter_" + s.toString()];
                    r.addEmitter(this.emitterFromJson(u))
                }
                return this._finalize(r)
            }, s.prototype.emitterFromJson = function(t) {
                if (!t.particleCount) {
                    console.log("Error: Json file is not of type 'Emitter'");
                    var e = this.generateTemplate(t, null),
                        n = e.emitters[0].copy();
                    return this.remove(e), n
                }
                var r = t,
                    i = [new o.Color(r.color.value[0].x, r.color.value[0].y, r.color.value[0].z), new o.Color(r.color.value[1].x, r.color.value[1].y, r.color.value[1].z), new o.Color(r.color.value[2].x, r.color.value[2].y, r.color.value[2].z), new o.Color(r.color.value[3].x, r.color.value[3].y, r.color.value[3].z)],
                    s = [(new o.Vector3).copy(r.color.spread[0]), (new o.Vector3).copy(r.color.spread[1]), (new o.Vector3).copy(r.color.spread[2]), (new o.Vector3).copy(r.color.spread[3])];
                return new a.Emitter({
                    type: r.type,
                    particleCount: r.particleCount,
                    duration: r.duration,
                    isStatic: r.isStatic,
                    activeMultiplier: r.activeMultiplier,
                    direction: r.direction,
                    maxAge: {
                        value: r.maxAge.value,
                        spread: r.maxAge.spread
                    },
                    position: {
                        value: (new o.Vector3).copy(r.position.value),
                        spread: (new o.Vector3).copy(r.position.spread),
                        radius: r.position.radius,
                        radiusScale: (new o.Vector3).copy(r.position.radiusScale),
                        distribution: r.position.distribution,
                        randomise: !1
                    },
                    velocity: {
                        value: (new o.Vector3).copy(r.velocity.value),
                        spread: (new o.Vector3).copy(r.velocity.spread),
                        distribution: r.velocity.distribution,
                        randomise: !1
                    },
                    acceleration: {
                        value: (new o.Vector3).copy(r.acceleration.value),
                        spread: (new o.Vector3).copy(r.acceleration.spread),
                        randomise: !1
                    },
                    drag: {
                        value: r.drag.value,
                        spread: r.drag.spread,
                        randomise: !1
                    },
                    wiggle: {
                        value: r.wiggle.value,
                        spread: r.wiggle.spread
                    },
                    rotation: {
                        axis: (new o.Vector3).copy(r.rotation.axis),
                        axisSpread: (new o.Vector3).copy(r.rotation.axisSpread),
                        angle: r.rotation.angle,
                        angleSpread: r.rotation.angleSpread,
                        static: r.rotation.static,
                        center: (new o.Vector3).copy(r.rotation.center),
                        randomise: !1
                    },
                    color: {
                        value: i,
                        spread: s,
                        randomise: !1
                    },
                    opacity: {
                        value: [r.opacity.value[0], r.opacity.value[1], r.opacity.value[2], r.opacity.value[3]],
                        spread: [r.opacity.spread[0], r.opacity.spread[1], r.opacity.spread[2], r.opacity.spread[3]],
                        randomise: !1
                    },
                    size: {
                        value: [r.size.value[0], r.size.value[1], r.size.value[2], r.size.value[3]],
                        spread: [r.size.spread[0], r.size.spread[1], r.size.spread[2], r.size.spread[3]],
                        randomise: !1
                    },
                    angle: {
                        value: [r.angle.value[0], r.angle.value[1], r.angle.value[2], r.angle.value[3]],
                        spread: [r.angle.spread[0], r.angle.spread[1], r.angle.spread[2], r.angle.spread[3]],
                        randomise: !1
                    }
                })
            }, s.prototype.generateTemplate = function(t) {
                var e = new a.Group({
                        maxParticleCount: 1e4,
                        texture: {
                            value: t,
                            frames: null,
                            frameCount: 1,
                            loop: 1
                        },
                        blending: o.AdditiveBlending,
                        transparent: !0,
                        depthWrite: !1,
                        depthTest: !0,
                        fog: !1,
                        scale: 100
                    }),
                    n = new a.Emitter({
                        type: a.distributions.box,
                        particleCount: 400,
                        duration: null,
                        isStatic: !1,
                        activeMultiplier: 1,
                        direction: 1,
                        maxAge: {
                            value: 2,
                            spread: 0
                        },
                        position: {
                            value: new o.Vector3(0, 0, 0),
                            spread: new o.Vector3(0, 0, 0),
                            radius: 1,
                            radiusScale: new o.Vector3(1, 1, 1),
                            distribution: a.distributions.BOX,
                            randomise: !1
                        },
                        velocity: {
                            value: new o.Vector3(0, .5, 0),
                            spread: new o.Vector3(.2, 0, .2),
                            distribution: a.distributions.box,
                            randomise: !1
                        },
                        acceleration: {
                            value: new o.Vector3(0, 0, 0),
                            spread: new o.Vector3(0, -.5, 0),
                            randomise: !1
                        },
                        drag: {
                            value: 0,
                            spread: 0,
                            randomise: !1
                        },
                        wiggle: {
                            value: 0,
                            spread: 0
                        },
                        rotation: {
                            axis: new o.Vector3(0, 0, 0),
                            axisSpread: new o.Vector3(1, 1, 1),
                            angle: 0,
                            angleSpread: 0,
                            static: !1,
                            center: new o.Vector3(0, 0, 0),
                            randomise: !1
                        },
                        color: {
                            value: [new o.Color("blue"), new o.Color("yellow"), new o.Color("red"), new o.Color("black")],
                            spread: [new o.Vector3(0, 0, 0), new o.Vector3(0, 0, 0), new o.Vector3(0, 0, 0), new o.Vector3(0, 0, 0)],
                            randomise: !1
                        },
                        opacity: {
                            value: [0, 1, 1, 0],
                            spread: [0, 0, 0, 0],
                            randomise: !1
                        },
                        size: {
                            value: [1, 1, 1, 3],
                            spread: [0, 0, 0, 0],
                            randomise: !1
                        },
                        angle: {
                            value: [0, 10],
                            spread: [1, 1],
                            randomise: !1
                        }
                    });
                return e.addEmitter(n), this._finalize(e)
            }, s.prototype.copyFX = function(t, e, n) {
                var r = t.group,
                    i = 0;
                if (n) i = n;
                else
                    for (var o = 0; o < t.emitters.length; o++) i += t.emitters[o].particleCount;
                var s = new a.Group({
                    maxParticleCount: i,
                    texture: {
                        value: e,
                        frames: r.textureFrames,
                        frameCount: r.textureFrameCount,
                        loop: r.textureLoop
                    },
                    blending: r.material.blending,
                    depthWrite: r.material.depthWrite,
                    depthTest: r.material.depthTest,
                    fog: r.fog
                });
                for (o = 0; o < t.emitters.length; o++) {
                    var u = t.emitters[o].copy();
                    s.addEmitter(u)
                }
                return this._finalize(s)
            }, s.prototype.remove = function(t) {
                if (this.groups.length <= 0 && console.info("SheepFX: Attempting to remove from empty list"), 1 == this.groups.length) {
                    for (this.groups.pop(), t.parent && t.parent.remove(t); t.group.emitters.length > 0;) t.group.removeEmitter(t.emitters[0]);
                    t.group.dispose()
                } else {
                    var e = t.group.sheepfxID,
                        n = this.groups[e];
                    for (this.groups[e] = this.groups[this.groups.length - 1], this.groups[e].sheepfxID = e, this.groups.pop(), n.mesh.parent && n.mesh.parent.remove(n.mesh); n.emitters.length > 0;) n.removeEmitter(n.emitters[0]);
                    n.dispose()
                }
            }, s.prototype.removeAll = function() {
                for (; this.groups.length > 0;) this.remove(this.groups[0].mesh)
            }, s.prototype.update = function(t) {
                for (var e = 0; e < this.groups.length; e++) this.groups[e].tick(t)
            }, s.prototype.setParticleSize = function(t) {
                this.screenScale = .2 * t;
                for (var e = 0; e < this.groups.length; e++) this.groups[e].uniforms.scale.value = this.screenScale
            }, s.prototype.getJSON = function(t, e, n) {
                var r = "undefined" != typeof XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                r.open("get", t, !0), r.onreadystatechange = function() {
                    var t, i;
                    4 == r.readyState && (200 == (t = r.status) ? (i = JSON.parse(r.responseText), e && e(i)) : n && n(t))
                }, r.send()
            }, o.Points.prototype.setEffectScale = function(t) {
                var e = t / this._effectSize;
                this._effectSize = t;
                for (var n = 0; n < this.emitters.length; n++) {
                    var r = this.emitters[n];
                    r.position.spread && (r.position.spread = r.position.spread.multiplyScalar(e)), r.position.radious && (r.position.radious = r.position.radious.multiplyScalar(e)), r.velocity.value && (r.velocity.value = r.velocity.value.multiplyScalar(e)), r.velocity.spread && (r.velocity.spread = r.velocity.spread.multiplyScalar(e)), r.acceleration.value && (r.acceleration.value = r.acceleration.value.multiplyScalar(e)), r.acceleration.spread && (r.acceleration.spread = r.acceleration.spread.multiplyScalar(e)), r.drag.value && (r.drag.value = r.drag.value * e), r.drag.spread && (r.drag.spread = r.drag.spread * e), r.size.value && (r.size.value[0] *= e, r.size.value[1] *= e, r.size.value[2] *= e, r.size.value[3] *= e, r.size.value = r.size.value), r.size.spread && (r.size.spread[0] *= e, r.size.spread[1] *= e, r.size.spread[2] *= e, r.size.spread[3] *= e, r.size.spread = r.size.spread)
                }
            }, o.Points.prototype.getEffectScale = function() {
                return this._effectSize
            }, o.Points.prototype.reset = function(t) {
                for (var e = 0; e < this.group.emitters.length; e++) this.emitters[e].reset(!!t), this.emitters[e].alive = !0
            }, a.Emitter.prototype.copy = function(t) {
                t || (t = this.particleCount);
                var e = [new o.Color(this.color.value[0].r, this.color.value[0].g, this.color.value[0].b), new o.Color(this.color.value[1].r, this.color.value[1].g, this.color.value[1].b), new o.Color(this.color.value[2].r, this.color.value[2].g, this.color.value[2].b), new o.Color(this.color.value[3].r, this.color.value[3].g, this.color.value[3].b)],
                    n = [(new o.Vector3).copy(this.color.spread[0]), (new o.Vector3).copy(this.color.spread[1]), (new o.Vector3).copy(this.color.spread[2]), (new o.Vector3).copy(this.color.spread[3])];
                return new a.Emitter({
                    particleCount: t,
                    type: this.type,
                    duration: this.duration,
                    isStatic: this.isStatic,
                    activeMultiplier: this.activeMultiplier,
                    direction: this.direction,
                    maxAge: {
                        value: this.maxAge.value,
                        spread: this.maxAge.spread
                    },
                    position: {
                        value: (new o.Vector3).copy(this.position.value),
                        spread: (new o.Vector3).copy(this.position.spread),
                        radius: this.position.radius,
                        radiusScale: (new o.Vector3).copy(this.position.radiusScale),
                        distribution: this.position.distribution,
                        randomise: !1
                    },
                    velocity: {
                        value: (new o.Vector3).copy(this.velocity.value),
                        spread: (new o.Vector3).copy(this.velocity.spread),
                        distribution: this.velocity.distribution,
                        randomise: !1
                    },
                    acceleration: {
                        value: (new o.Vector3).copy(this.acceleration.value),
                        spread: (new o.Vector3).copy(this.acceleration.spread),
                        randomise: !1
                    },
                    drag: {
                        value: this.drag.value,
                        spread: this.drag.spread,
                        randomise: !1
                    },
                    wiggle: {
                        value: this.wiggle.value,
                        spread: this.wiggle.spread
                    },
                    rotation: {
                        axis: (new o.Vector3).copy(this.rotation.axis),
                        axisSpread: (new o.Vector3).copy(this.rotation.axisSpread),
                        angle: this.rotation.angle,
                        angleSpread: this.rotation.angleSpread,
                        static: this.rotation.static,
                        center: (new o.Vector3).copy(this.rotation.center),
                        randomise: !1
                    },
                    color: {
                        value: e,
                        spread: n,
                        randomise: !1
                    },
                    opacity: {
                        value: [this.opacity.value[0], this.opacity.value[1], this.opacity.value[2], this.opacity.value[3]],
                        spread: [this.opacity.spread[0], this.opacity.spread[1], this.opacity.spread[2], this.opacity.spread[3]],
                        randomise: !1
                    },
                    size: {
                        value: [this.size.value[0], this.size.value[1], this.size.value[2], this.size.value[3]],
                        spread: [this.size.spread[0], this.size.spread[1], this.size.spread[2], this.size.spread[3]],
                        randomise: !1
                    },
                    angle: {
                        value: [this.angle.value[0], this.angle.value[1], this.angle.value[2], this.angle.value[3]],
                        spread: [this.angle.spread[0], this.angle.spread[1], this.angle.spread[2], this.angle.spread[3]],
                        randomise: !1
                    }
                })
            }, a.Emitter.prototype.setPosition = function(t, e, n) {
                this.position.value = null == e ? this.position.value.set(t.x, t.y, t.z) : this.position.value.set(t, e, n)
            }, a.Emitter.prototype.getPosition = function() {
                return this.position.value
            }, e.a = s
        }).call(this, n(444)(t))
    }, , function(t, e, n) {
        (function(t) {
            n(168), n(312), n(314), n(316), n(318), n(320), n(322), n(324), n(326), n(328), n(332), t._babelPolyfill && "undefined" != typeof console && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."), t._babelPolyfill = !0
        }).call(this, n(47))
    }, function(t, e, n) {
        n(169), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(213), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(250), n(251), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(271), n(272), n(273), n(274), n(83), n(275), n(276), n(106), n(277), n(278), n(279), n(280), n(107), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(296), n(297), n(298), n(299), n(300), n(301), n(302), n(303), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), t.exports = n(10)
    }, function(t, e, n) {
        var r = n(3),
            i = n(15),
            o = n(9),
            a = n(1),
            s = n(13),
            u = n(30).KEY,
            c = n(2),
            l = n(63),
            f = n(40),
            h = n(33),
            p = n(6),
            d = n(64),
            y = n(88),
            v = n(170),
            g = n(67),
            m = n(5),
            b = n(4),
            w = n(17),
            _ = n(29),
            x = n(32),
            S = n(37),
            O = n(91),
            T = n(20),
            E = n(7),
            A = n(35),
            P = T.f,
            C = E.f,
            k = O.f,
            R = r.Symbol,
            L = r.JSON,
            I = L && L.stringify,
            M = p("_hidden"),
            F = p("toPrimitive"),
            j = {}.propertyIsEnumerable,
            N = l("symbol-registry"),
            D = l("symbols"),
            V = l("op-symbols"),
            U = Object.prototype,
            B = "function" == typeof R,
            z = r.QObject,
            H = !z || !z.prototype || !z.prototype.findChild,
            W = o && c(function() {
                return 7 != S(C({}, "a", {
                    get: function() {
                        return C(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, e, n) {
                var r = P(U, e);
                r && delete U[e], C(t, e, n), r && t !== U && C(U, e, r)
            } : C,
            G = function(t) {
                var e = D[t] = S(R.prototype);
                return e._k = t, e
            },
            K = B && "symbol" == typeof R.iterator ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                return t instanceof R
            },
            X = function(t, e, n) {
                return t === U && X(V, e, n), m(t), e = _(e, !0), m(n), i(D, e) ? (n.enumerable ? (i(t, M) && t[M][e] && (t[M][e] = !1), n = S(n, {
                    enumerable: x(0, !1)
                })) : (i(t, M) || C(t, M, x(1, {})), t[M][e] = !0), W(t, e, n)) : C(t, e, n)
            },
            J = function(t, e) {
                m(t);
                for (var n, r = v(e = w(e)), i = 0, o = r.length; o > i;) X(t, n = r[i++], e[n]);
                return t
            },
            Y = function(t) {
                var e = j.call(this, t = _(t, !0));
                return !(this === U && i(D, t) && !i(V, t)) && (!(e || !i(this, t) || !i(D, t) || i(this, M) && this[M][t]) || e)
            },
            q = function(t, e) {
                if (t = w(t), e = _(e, !0), t !== U || !i(D, e) || i(V, e)) {
                    var n = P(t, e);
                    return !n || !i(D, e) || i(t, M) && t[M][e] || (n.enumerable = !0), n
                }
            },
            Z = function(t) {
                for (var e, n = k(w(t)), r = [], o = 0; n.length > o;) i(D, e = n[o++]) || e == M || e == u || r.push(e);
                return r
            },
            $ = function(t) {
                for (var e, n = t === U, r = k(n ? V : w(t)), o = [], a = 0; r.length > a;) !i(D, e = r[a++]) || n && !i(U, e) || o.push(D[e]);
                return o
            };
        B || (s((R = function() {
            if (this instanceof R) throw TypeError("Symbol is not a constructor!");
            var t = h(arguments.length > 0 ? arguments[0] : void 0),
                e = function(n) {
                    this === U && e.call(V, n), i(this, M) && i(this[M], t) && (this[M][t] = !1), W(this, t, x(1, n))
                };
            return o && H && W(U, t, {
                configurable: !0,
                set: e
            }), G(t)
        }).prototype, "toString", function() {
            return this._k
        }), T.f = q, E.f = X, n(38).f = O.f = Z, n(49).f = Y, n(51).f = $, o && !n(34) && s(U, "propertyIsEnumerable", Y, !0), d.f = function(t) {
            return G(p(t))
        }), a(a.G + a.W + a.F * !B, {
            Symbol: R
        });
        for (var Q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Q.length > tt;) p(Q[tt++]);
        for (var et = A(p.store), nt = 0; et.length > nt;) y(et[nt++]);
        a(a.S + a.F * !B, "Symbol", {
            for: function(t) {
                return i(N, t += "") ? N[t] : N[t] = R(t)
            },
            keyFor: function(t) {
                if (!K(t)) throw TypeError(t + " is not a symbol!");
                for (var e in N)
                    if (N[e] === t) return e
            },
            useSetter: function() {
                H = !0
            },
            useSimple: function() {
                H = !1
            }
        }), a(a.S + a.F * !B, "Object", {
            create: function(t, e) {
                return void 0 === e ? S(t) : J(S(t), e)
            },
            defineProperty: X,
            defineProperties: J,
            getOwnPropertyDescriptor: q,
            getOwnPropertyNames: Z,
            getOwnPropertySymbols: $
        }), L && a(a.S + a.F * (!B || c(function() {
            var t = R();
            return "[null]" != I([t]) || "{}" != I({
                a: t
            }) || "{}" != I(Object(t))
        })), "JSON", {
            stringify: function(t) {
                for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
                if (n = e = r[1], (b(e) || void 0 !== t) && !K(t)) return g(e) || (e = function(t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !K(e)) return e
                }), r[1] = e, I.apply(L, r)
            }
        }), R.prototype[F] || n(16)(R.prototype, F, R.prototype.valueOf), f(R, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
    }, function(t, e, n) {
        var r = n(35),
            i = n(51),
            o = n(49);
        t.exports = function(t) {
            var e = r(t),
                n = i.f;
            if (n)
                for (var a, s = n(t), u = o.f, c = 0; s.length > c;) u.call(t, a = s[c++]) && e.push(a);
            return e
        }
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Object", {
            create: n(37)
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S + r.F * !n(9), "Object", {
            defineProperty: n(7).f
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S + r.F * !n(9), "Object", {
            defineProperties: n(90)
        })
    }, function(t, e, n) {
        var r = n(17),
            i = n(20).f;
        n(21)("getOwnPropertyDescriptor", function() {
            return function(t, e) {
                return i(r(t), e)
            }
        })
    }, function(t, e, n) {
        var r = n(18),
            i = n(39);
        n(21)("getPrototypeOf", function() {
            return function(t) {
                return i(r(t))
            }
        })
    }, function(t, e, n) {
        var r = n(18),
            i = n(35);
        n(21)("keys", function() {
            return function(t) {
                return i(r(t))
            }
        })
    }, function(t, e, n) {
        n(21)("getOwnPropertyNames", function() {
            return n(91).f
        })
    }, function(t, e, n) {
        var r = n(4),
            i = n(30).onFreeze;
        n(21)("freeze", function(t) {
            return function(e) {
                return t && r(e) ? t(i(e)) : e
            }
        })
    }, function(t, e, n) {
        var r = n(4),
            i = n(30).onFreeze;
        n(21)("seal", function(t) {
            return function(e) {
                return t && r(e) ? t(i(e)) : e
            }
        })
    }, function(t, e, n) {
        var r = n(4),
            i = n(30).onFreeze;
        n(21)("preventExtensions", function(t) {
            return function(e) {
                return t && r(e) ? t(i(e)) : e
            }
        })
    }, function(t, e, n) {
        var r = n(4);
        n(21)("isFrozen", function(t) {
            return function(e) {
                return !r(e) || !!t && t(e)
            }
        })
    }, function(t, e, n) {
        var r = n(4);
        n(21)("isSealed", function(t) {
            return function(e) {
                return !r(e) || !!t && t(e)
            }
        })
    }, function(t, e, n) {
        var r = n(4);
        n(21)("isExtensible", function(t) {
            return function(e) {
                return !!r(e) && (!t || t(e))
            }
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S + r.F, "Object", {
            assign: n(92)
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Object", {
            is: n(186)
        })
    }, function(t, e) {
        t.exports = Object.is || function(t, e) {
            return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
        }
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Object", {
            setPrototypeOf: n(69).set
        })
    }, function(t, e, n) {
        var r = n(52),
            i = {};
        i[n(6)("toStringTag")] = "z", i + "" != "[object z]" && n(13)(Object.prototype, "toString", function() {
            return "[object " + r(this) + "]"
        }, !0)
    }, function(t, e, n) {
        var r = n(1);
        r(r.P, "Function", {
            bind: n(93)
        })
    }, function(t, e, n) {
        var r = n(7).f,
            i = Function.prototype,
            o = /^\s*function ([^ (]*)/;
        "name" in i || n(9) && r(i, "name", {
            configurable: !0,
            get: function() {
                try {
                    return ("" + this).match(o)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    }, function(t, e, n) {
        var r = n(4),
            i = n(39),
            o = n(6)("hasInstance"),
            a = Function.prototype;
        o in a || n(7).f(a, o, {
            value: function(t) {
                if ("function" != typeof this || !r(t)) return !1;
                if (!r(this.prototype)) return t instanceof this;
                for (; t = i(t);)
                    if (this.prototype === t) return !0;
                return !1
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(95);
        r(r.G + r.F * (parseInt != i), {
            parseInt: i
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(96);
        r(r.G + r.F * (parseFloat != i), {
            parseFloat: i
        })
    }, function(t, e, n) {
        var r = n(3),
            i = n(15),
            o = n(25),
            a = n(71),
            s = n(29),
            u = n(2),
            c = n(38).f,
            l = n(20).f,
            f = n(7).f,
            h = n(53).trim,
            p = r.Number,
            d = p,
            y = p.prototype,
            v = "Number" == o(n(37)(y)),
            g = "trim" in String.prototype,
            m = function(t) {
                var e = s(t, !1);
                if ("string" == typeof e && e.length > 2) {
                    var n, r, i, o = (e = g ? e.trim() : h(e, 3)).charCodeAt(0);
                    if (43 === o || 45 === o) {
                        if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
                    } else if (48 === o) {
                        switch (e.charCodeAt(1)) {
                            case 66:
                            case 98:
                                r = 2, i = 49;
                                break;
                            case 79:
                            case 111:
                                r = 8, i = 55;
                                break;
                            default:
                                return +e
                        }
                        for (var a, u = e.slice(2), c = 0, l = u.length; c < l; c++)
                            if ((a = u.charCodeAt(c)) < 48 || a > i) return NaN;
                        return parseInt(u, r)
                    }
                }
                return +e
            };
        if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
            p = function(t) {
                var e = arguments.length < 1 ? 0 : t,
                    n = this;
                return n instanceof p && (v ? u(function() {
                    y.valueOf.call(n)
                }) : "Number" != o(n)) ? a(new d(m(e)), n, p) : m(e)
            };
            for (var b, w = n(9) ? c(d) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), _ = 0; w.length > _; _++) i(d, b = w[_]) && !i(p, b) && f(p, b, l(d, b));
            p.prototype = y, y.constructor = p, n(13)(r, "Number", p)
        }
    }, function(t, e, n) {
        var r = n(1),
            i = n(27),
            o = n(97),
            a = n(72),
            s = 1..toFixed,
            u = Math.floor,
            c = [0, 0, 0, 0, 0, 0],
            l = "Number.toFixed: incorrect invocation!",
            f = function(t, e) {
                for (var n = -1, r = e; ++n < 6;) r += t * c[n], c[n] = r % 1e7, r = u(r / 1e7)
            },
            h = function(t) {
                for (var e = 6, n = 0; --e >= 0;) n += c[e], c[e] = u(n / t), n = n % t * 1e7
            },
            p = function() {
                for (var t = 6, e = ""; --t >= 0;)
                    if ("" !== e || 0 === t || 0 !== c[t]) {
                        var n = String(c[t]);
                        e = "" === e ? n : e + a.call("0", 7 - n.length) + n
                    } return e
            },
            d = function(t, e, n) {
                return 0 === e ? n : e % 2 == 1 ? d(t, e - 1, n * t) : d(t * t, e / 2, n)
            };
        r(r.P + r.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(2)(function() {
            s.call({})
        })), "Number", {
            toFixed: function(t) {
                var e, n, r, s, u = o(this, l),
                    c = i(t),
                    y = "",
                    v = "0";
                if (c < 0 || c > 20) throw RangeError(l);
                if (u != u) return "NaN";
                if (u <= -1e21 || u >= 1e21) return String(u);
                if (u < 0 && (y = "-", u = -u), u > 1e-21)
                    if (n = (e = function(t) {
                            for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
                            for (; n >= 2;) e += 1, n /= 2;
                            return e
                        }(u * d(2, 69, 1)) - 69) < 0 ? u * d(2, -e, 1) : u / d(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
                        for (f(0, n), r = c; r >= 7;) f(1e7, 0), r -= 7;
                        for (f(d(10, r, 1), 0), r = e - 1; r >= 23;) h(1 << 23), r -= 23;
                        h(1 << r), f(1, 1), h(2), v = p()
                    } else f(0, n), f(1 << -e, 0), v = p() + a.call("0", c);
                return v = c > 0 ? y + ((s = v.length) <= c ? "0." + a.call("0", c - s) + v : v.slice(0, s - c) + "." + v.slice(s - c)) : y + v
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(2),
            o = n(97),
            a = 1..toPrecision;
        r(r.P + r.F * (i(function() {
            return "1" !== a.call(1, void 0)
        }) || !i(function() {
            a.call({})
        })), "Number", {
            toPrecision: function(t) {
                var e = o(this, "Number#toPrecision: incorrect invocation!");
                return void 0 === t ? a.call(e) : a.call(e, t)
            }
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Number", {
            EPSILON: Math.pow(2, -52)
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(3).isFinite;
        r(r.S, "Number", {
            isFinite: function(t) {
                return "number" == typeof t && i(t)
            }
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Number", {
            isInteger: n(98)
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Number", {
            isNaN: function(t) {
                return t != t
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(98),
            o = Math.abs;
        r(r.S, "Number", {
            isSafeInteger: function(t) {
                return i(t) && o(t) <= 9007199254740991
            }
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Number", {
            MAX_SAFE_INTEGER: 9007199254740991
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Number", {
            MIN_SAFE_INTEGER: -9007199254740991
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(96);
        r(r.S + r.F * (Number.parseFloat != i), "Number", {
            parseFloat: i
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(95);
        r(r.S + r.F * (Number.parseInt != i), "Number", {
            parseInt: i
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(99),
            o = Math.sqrt,
            a = Math.acosh;
        r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
            acosh: function(t) {
                return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1))
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = Math.asinh;
        r(r.S + r.F * !(i && 1 / i(0) > 0), "Math", {
            asinh: function t(e) {
                return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = Math.atanh;
        r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", {
            atanh: function(t) {
                return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(73);
        r(r.S, "Math", {
            cbrt: function(t) {
                return i(t = +t) * Math.pow(Math.abs(t), 1 / 3)
            }
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Math", {
            clz32: function(t) {
                return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = Math.exp;
        r(r.S, "Math", {
            cosh: function(t) {
                return (i(t = +t) + i(-t)) / 2
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(74);
        r(r.S + r.F * (i != Math.expm1), "Math", {
            expm1: i
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Math", {
            fround: n(214)
        })
    }, function(t, e, n) {
        var r = n(73),
            i = Math.pow,
            o = i(2, -52),
            a = i(2, -23),
            s = i(2, 127) * (2 - a),
            u = i(2, -126);
        t.exports = Math.fround || function(t) {
            var e, n, i = Math.abs(t),
                c = r(t);
            return i < u ? c * (i / u / a + 1 / o - 1 / o) * u * a : (n = (e = (1 + a / o) * i) - (e - i)) > s || n != n ? c * (1 / 0) : c * n
        }
    }, function(t, e, n) {
        var r = n(1),
            i = Math.abs;
        r(r.S, "Math", {
            hypot: function(t, e) {
                for (var n, r, o = 0, a = 0, s = arguments.length, u = 0; a < s;) u < (n = i(arguments[a++])) ? (o = o * (r = u / n) * r + 1, u = n) : o += n > 0 ? (r = n / u) * r : n;
                return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(o)
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = Math.imul;
        r(r.S + r.F * n(2)(function() {
            return -5 != i(4294967295, 5) || 2 != i.length
        }), "Math", {
            imul: function(t, e) {
                var n = +t,
                    r = +e,
                    i = 65535 & n,
                    o = 65535 & r;
                return 0 | i * o + ((65535 & n >>> 16) * o + i * (65535 & r >>> 16) << 16 >>> 0)
            }
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Math", {
            log10: function(t) {
                return Math.log(t) * Math.LOG10E
            }
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Math", {
            log1p: n(99)
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Math", {
            log2: function(t) {
                return Math.log(t) / Math.LN2
            }
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Math", {
            sign: n(73)
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(74),
            o = Math.exp;
        r(r.S + r.F * n(2)(function() {
            return -2e-17 != !Math.sinh(-2e-17)
        }), "Math", {
            sinh: function(t) {
                return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(74),
            o = Math.exp;
        r(r.S, "Math", {
            tanh: function(t) {
                var e = i(t = +t),
                    n = i(-t);
                return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (o(t) + o(-t))
            }
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Math", {
            trunc: function(t) {
                return (t > 0 ? Math.floor : Math.ceil)(t)
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(36),
            o = String.fromCharCode,
            a = String.fromCodePoint;
        r(r.S + r.F * (!!a && 1 != a.length), "String", {
            fromCodePoint: function(t) {
                for (var e, n = [], r = arguments.length, a = 0; r > a;) {
                    if (e = +arguments[a++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                    n.push(e < 65536 ? o(e) : o(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
                }
                return n.join("")
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(17),
            o = n(11);
        r(r.S, "String", {
            raw: function(t) {
                for (var e = i(t.raw), n = o(e.length), r = arguments.length, a = [], s = 0; n > s;) a.push(String(e[s++])), s < r && a.push(String(arguments[s]));
                return a.join("")
            }
        })
    }, function(t, e, n) {
        n(53)("trim", function(t) {
            return function() {
                return t(this, 3)
            }
        })
    }, function(t, e, n) {
        var r = n(100)(!0);
        n(75)(String, "String", function(t) {
            this._t = String(t), this._i = 0
        }, function() {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(100)(!1);
        r(r.P, "String", {
            codePointAt: function(t) {
                return i(this, t)
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(11),
            o = n(76),
            a = "".endsWith;
        r(r.P + r.F * n(78)("endsWith"), "String", {
            endsWith: function(t) {
                var e = o(this, t, "endsWith"),
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    r = i(e.length),
                    s = void 0 === n ? r : Math.min(i(n), r),
                    u = String(t);
                return a ? a.call(e, u, s) : e.slice(s - u.length, s) === u
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(76);
        r(r.P + r.F * n(78)("includes"), "String", {
            includes: function(t) {
                return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.P, "String", {
            repeat: n(72)
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(11),
            o = n(76),
            a = "".startsWith;
        r(r.P + r.F * n(78)("startsWith"), "String", {
            startsWith: function(t) {
                var e = o(this, t, "startsWith"),
                    n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                    r = String(t);
                return a ? a.call(e, r, n) : e.slice(n, n + r.length) === r
            }
        })
    }, function(t, e, n) {
        n(14)("anchor", function(t) {
            return function(e) {
                return t(this, "a", "name", e)
            }
        })
    }, function(t, e, n) {
        n(14)("big", function(t) {
            return function() {
                return t(this, "big", "", "")
            }
        })
    }, function(t, e, n) {
        n(14)("blink", function(t) {
            return function() {
                return t(this, "blink", "", "")
            }
        })
    }, function(t, e, n) {
        n(14)("bold", function(t) {
            return function() {
                return t(this, "b", "", "")
            }
        })
    }, function(t, e, n) {
        n(14)("fixed", function(t) {
            return function() {
                return t(this, "tt", "", "")
            }
        })
    }, function(t, e, n) {
        n(14)("fontcolor", function(t) {
            return function(e) {
                return t(this, "font", "color", e)
            }
        })
    }, function(t, e, n) {
        n(14)("fontsize", function(t) {
            return function(e) {
                return t(this, "font", "size", e)
            }
        })
    }, function(t, e, n) {
        n(14)("italics", function(t) {
            return function() {
                return t(this, "i", "", "")
            }
        })
    }, function(t, e, n) {
        n(14)("link", function(t) {
            return function(e) {
                return t(this, "a", "href", e)
            }
        })
    }, function(t, e, n) {
        n(14)("small", function(t) {
            return function() {
                return t(this, "small", "", "")
            }
        })
    }, function(t, e, n) {
        n(14)("strike", function(t) {
            return function() {
                return t(this, "strike", "", "")
            }
        })
    }, function(t, e, n) {
        n(14)("sub", function(t) {
            return function() {
                return t(this, "sub", "", "")
            }
        })
    }, function(t, e, n) {
        n(14)("sup", function(t) {
            return function() {
                return t(this, "sup", "", "")
            }
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Date", {
            now: function() {
                return (new Date).getTime()
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(18),
            o = n(29);
        r(r.P + r.F * n(2)(function() {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function() {
                    return 1
                }
            })
        }), "Date", {
            toJSON: function(t) {
                var e = i(this),
                    n = o(e);
                return "number" != typeof n || isFinite(n) ? e.toISOString() : null
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(249);
        r(r.P + r.F * (Date.prototype.toISOString !== i), "Date", {
            toISOString: i
        })
    }, function(t, e, n) {
        var r = n(2),
            i = Date.prototype.getTime,
            o = Date.prototype.toISOString,
            a = function(t) {
                return t > 9 ? t : "0" + t
            };
        t.exports = r(function() {
            return "0385-07-25T07:06:39.999Z" != o.call(new Date(-5e13 - 1))
        }) || !r(function() {
            o.call(new Date(NaN))
        }) ? function() {
            if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
            var t = this,
                e = t.getUTCFullYear(),
                n = t.getUTCMilliseconds(),
                r = e < 0 ? "-" : e > 9999 ? "+" : "";
            return r + ("00000" + Math.abs(e)).slice(r ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z"
        } : o
    }, function(t, e, n) {
        var r = Date.prototype,
            i = r.toString,
            o = r.getTime;
        new Date(NaN) + "" != "Invalid Date" && n(13)(r, "toString", function() {
            var t = o.call(this);
            return t == t ? i.call(this) : "Invalid Date"
        })
    }, function(t, e, n) {
        var r = n(6)("toPrimitive"),
            i = Date.prototype;
        r in i || n(16)(i, r, n(252))
    }, function(t, e, n) {
        var r = n(5),
            i = n(29);
        t.exports = function(t) {
            if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
            return i(r(this), "number" != t)
        }
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Array", {
            isArray: n(67)
        })
    }, function(t, e, n) {
        var r = n(23),
            i = n(1),
            o = n(18),
            a = n(102),
            s = n(79),
            u = n(11),
            c = n(80),
            l = n(81);
        i(i.S + i.F * !n(54)(function(t) {
            Array.from(t)
        }), "Array", {
            from: function(t) {
                var e, n, i, f, h = o(t),
                    p = "function" == typeof this ? this : Array,
                    d = arguments.length,
                    y = d > 1 ? arguments[1] : void 0,
                    v = void 0 !== y,
                    g = 0,
                    m = l(h);
                if (v && (y = r(y, d > 2 ? arguments[2] : void 0, 2)), null == m || p == Array && s(m))
                    for (n = new p(e = u(h.length)); e > g; g++) c(n, g, v ? y(h[g], g) : h[g]);
                else
                    for (f = m.call(h), n = new p; !(i = f.next()).done; g++) c(n, g, v ? a(f, y, [i.value, g], !0) : i.value);
                return n.length = g, n
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(80);
        r(r.S + r.F * n(2)(function() {
            function t() {}
            return !(Array.of.call(t) instanceof t)
        }), "Array", {
            of: function() {
                for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); e > t;) i(n, t, arguments[t++]);
                return n.length = e, n
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(17),
            o = [].join;
        r(r.P + r.F * (n(48) != Object || !n(19)(o)), "Array", {
            join: function(t) {
                return o.call(i(this), void 0 === t ? "," : t)
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(68),
            o = n(25),
            a = n(36),
            s = n(11),
            u = [].slice;
        r(r.P + r.F * n(2)(function() {
            i && u.call(i)
        }), "Array", {
            slice: function(t, e) {
                var n = s(this.length),
                    r = o(this);
                if (e = void 0 === e ? n : e, "Array" == r) return u.call(this, t, e);
                for (var i = a(t, n), c = a(e, n), l = s(c - i), f = new Array(l), h = 0; h < l; h++) f[h] = "String" == r ? this.charAt(i + h) : this[i + h];
                return f
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(24),
            o = n(18),
            a = n(2),
            s = [].sort,
            u = [1, 2, 3];
        r(r.P + r.F * (a(function() {
            u.sort(void 0)
        }) || !a(function() {
            u.sort(null)
        }) || !n(19)(s)), "Array", {
            sort: function(t) {
                return void 0 === t ? s.call(o(this)) : s.call(o(this), i(t))
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(22)(0),
            o = n(19)([].forEach, !0);
        r(r.P + r.F * !o, "Array", {
            forEach: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }, function(t, e, n) {
        var r = n(261);
        t.exports = function(t, e) {
            return new(r(t))(e)
        }
    }, function(t, e, n) {
        var r = n(4),
            i = n(67),
            o = n(6)("species");
        t.exports = function(t) {
            var e;
            return i(t) && ("function" != typeof(e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0), r(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
        }
    }, function(t, e, n) {
        var r = n(1),
            i = n(22)(1);
        r(r.P + r.F * !n(19)([].map, !0), "Array", {
            map: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(22)(2);
        r(r.P + r.F * !n(19)([].filter, !0), "Array", {
            filter: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(22)(3);
        r(r.P + r.F * !n(19)([].some, !0), "Array", {
            some: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(22)(4);
        r(r.P + r.F * !n(19)([].every, !0), "Array", {
            every: function(t) {
                return i(this, t, arguments[1])
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(103);
        r(r.P + r.F * !n(19)([].reduce, !0), "Array", {
            reduce: function(t) {
                return i(this, t, arguments.length, arguments[1], !1)
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(103);
        r(r.P + r.F * !n(19)([].reduceRight, !0), "Array", {
            reduceRight: function(t) {
                return i(this, t, arguments.length, arguments[1], !0)
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(50)(!1),
            o = [].indexOf,
            a = !!o && 1 / [1].indexOf(1, -0) < 0;
        r(r.P + r.F * (a || !n(19)(o)), "Array", {
            indexOf: function(t) {
                return a ? o.apply(this, arguments) || 0 : i(this, t, arguments[1])
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(17),
            o = n(27),
            a = n(11),
            s = [].lastIndexOf,
            u = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
        r(r.P + r.F * (u || !n(19)(s)), "Array", {
            lastIndexOf: function(t) {
                if (u) return s.apply(this, arguments) || 0;
                var e = i(this),
                    n = a(e.length),
                    r = n - 1;
                for (arguments.length > 1 && (r = Math.min(r, o(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                    if (r in e && e[r] === t) return r || 0;
                return -1
            }
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.P, "Array", {
            copyWithin: n(104)
        }), n(42)("copyWithin")
    }, function(t, e, n) {
        var r = n(1);
        r(r.P, "Array", {
            fill: n(82)
        }), n(42)("fill")
    }, function(t, e, n) {
        var r = n(1),
            i = n(22)(5),
            o = !0;
        "find" in [] && Array(1).find(function() {
            o = !1
        }), r(r.P + r.F * o, "Array", {
            find: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n(42)("find")
    }, function(t, e, n) {
        var r = n(1),
            i = n(22)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o](function() {
            a = !1
        }), r(r.P + r.F * a, "Array", {
            findIndex: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n(42)(o)
    }, function(t, e, n) {
        n(43)("Array")
    }, function(t, e, n) {
        var r = n(3),
            i = n(71),
            o = n(7).f,
            a = n(38).f,
            s = n(77),
            u = n(84),
            c = r.RegExp,
            l = c,
            f = c.prototype,
            h = /a/g,
            p = /a/g,
            d = new c(h) !== h;
        if (n(9) && (!d || n(2)(function() {
                return p[n(6)("match")] = !1, c(h) != h || c(p) == p || "/a/i" != c(h, "i")
            }))) {
            c = function(t, e) {
                var n = this instanceof c,
                    r = s(t),
                    o = void 0 === e;
                return !n && r && t.constructor === c && o ? t : i(d ? new l(r && !o ? t.source : t, e) : l((r = t instanceof c) ? t.source : t, r && o ? u.call(t) : e), n ? this : f, c)
            };
            for (var y = function(t) {
                    t in c || o(c, t, {
                        configurable: !0,
                        get: function() {
                            return l[t]
                        },
                        set: function(e) {
                            l[t] = e
                        }
                    })
                }, v = a(l), g = 0; v.length > g;) y(v[g++]);
            f.constructor = c, c.prototype = f, n(13)(r, "RegExp", c)
        }
        n(43)("RegExp")
    }, function(t, e, n) {
        n(106);
        var r = n(5),
            i = n(84),
            o = n(9),
            a = /./.toString,
            s = function(t) {
                n(13)(RegExp.prototype, "toString", t, !0)
            };
        n(2)(function() {
            return "/a/b" != a.call({
                source: "a",
                flags: "b"
            })
        }) ? s(function() {
            var t = r(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0)
        }) : "toString" != a.name && s(function() {
            return a.call(this)
        })
    }, function(t, e, n) {
        n(55)("match", 1, function(t, e, n) {
            return [function(n) {
                var r = t(this),
                    i = null == n ? void 0 : n[e];
                return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
            }, n]
        })
    }, function(t, e, n) {
        n(55)("replace", 2, function(t, e, n) {
            return [function(r, i) {
                var o = t(this),
                    a = null == r ? void 0 : r[e];
                return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i)
            }, n]
        })
    }, function(t, e, n) {
        n(55)("search", 1, function(t, e, n) {
            return [function(n) {
                var r = t(this),
                    i = null == n ? void 0 : n[e];
                return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
            }, n]
        })
    }, function(t, e, n) {
        n(55)("split", 2, function(t, e, r) {
            var i = n(77),
                o = r,
                a = [].push;
            if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
                var s = void 0 === /()??/.exec("")[1];
                r = function(t, e) {
                    var n = String(this);
                    if (void 0 === t && 0 === e) return [];
                    if (!i(t)) return o.call(n, t, e);
                    var r, u, c, l, f, h = [],
                        p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                        d = 0,
                        y = void 0 === e ? 4294967295 : e >>> 0,
                        v = new RegExp(t.source, p + "g");
                    for (s || (r = new RegExp("^" + v.source + "$(?!\\s)", p));
                        (u = v.exec(n)) && !((c = u.index + u[0].length) > d && (h.push(n.slice(d, u.index)), !s && u.length > 1 && u[0].replace(r, function() {
                            for (f = 1; f < arguments.length - 2; f++) void 0 === arguments[f] && (u[f] = void 0)
                        }), u.length > 1 && u.index < n.length && a.apply(h, u.slice(1)), l = u[0].length, d = c, h.length >= y));) v.lastIndex === u.index && v.lastIndex++;
                    return d === n.length ? !l && v.test("") || h.push("") : h.push(n.slice(d)), h.length > y ? h.slice(0, y) : h
                }
            } else "0".split(void 0, 0).length && (r = function(t, e) {
                return void 0 === t && 0 === e ? [] : o.call(this, t, e)
            });
            return [function(n, i) {
                var o = t(this),
                    a = null == n ? void 0 : n[e];
                return void 0 !== a ? a.call(n, o, i) : r.call(String(o), n, i)
            }, r]
        })
    }, function(t, e, n) {
        var r = n(3),
            i = n(85).set,
            o = r.MutationObserver || r.WebKitMutationObserver,
            a = r.process,
            s = r.Promise,
            u = "process" == n(25)(a);
        t.exports = function() {
            var t, e, n, c = function() {
                var r, i;
                for (u && (r = a.domain) && r.exit(); t;) {
                    i = t.fn, t = t.next;
                    try {
                        i()
                    } catch (r) {
                        throw t ? n() : e = void 0, r
                    }
                }
                e = void 0, r && r.enter()
            };
            if (u) n = function() {
                a.nextTick(c)
            };
            else if (!o || r.navigator && r.navigator.standalone)
                if (s && s.resolve) {
                    var l = s.resolve(void 0);
                    n = function() {
                        l.then(c)
                    }
                } else n = function() {
                    i.call(r, c)
                };
            else {
                var f = !0,
                    h = document.createTextNode("");
                new o(c).observe(h, {
                    characterData: !0
                }), n = function() {
                    h.data = f = !f
                }
            }
            return function(r) {
                var i = {
                    fn: r,
                    next: void 0
                };
                e && (e.next = i), t || (t = i, n()), e = i
            }
        }
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    }, function(t, e, n) {
        var r = n(110),
            i = n(46);
        t.exports = n(59)("Map", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            get: function(t) {
                var e = r.getEntry(i(this, "Map"), t);
                return e && e.v
            },
            set: function(t, e) {
                return r.def(i(this, "Map"), 0 === t ? 0 : t, e)
            }
        }, r, !0)
    }, function(t, e, n) {
        var r = n(110),
            i = n(46);
        t.exports = n(59)("Set", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function(t) {
                return r.def(i(this, "Set"), t = 0 === t ? 0 : t, t)
            }
        }, r)
    }, function(t, e, n) {
        var r, i = n(22)(0),
            o = n(13),
            a = n(30),
            s = n(92),
            u = n(111),
            c = n(4),
            l = n(2),
            f = n(46),
            h = a.getWeak,
            p = Object.isExtensible,
            d = u.ufstore,
            y = {},
            v = function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            },
            g = {
                get: function(t) {
                    if (c(t)) {
                        var e = h(t);
                        return !0 === e ? d(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
                    }
                },
                set: function(t, e) {
                    return u.def(f(this, "WeakMap"), t, e)
                }
            },
            m = t.exports = n(59)("WeakMap", v, g, u, !0, !0);
        l(function() {
            return 7 != (new m).set((Object.freeze || Object)(y), 7).get(y)
        }) && (s((r = u.getConstructor(v, "WeakMap")).prototype, g), a.NEED = !0, i(["delete", "has", "get", "set"], function(t) {
            var e = m.prototype,
                n = e[t];
            o(e, t, function(e, i) {
                if (c(e) && !p(e)) {
                    this._f || (this._f = new r);
                    var o = this._f[t](e, i);
                    return "set" == t ? this : o
                }
                return n.call(this, e, i)
            })
        }))
    }, function(t, e, n) {
        var r = n(111),
            i = n(46);
        n(59)("WeakSet", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function(t) {
                return r.def(i(this, "WeakSet"), t, !0)
            }
        }, r, !1, !0)
    }, function(t, e, n) {
        var r = n(1),
            i = n(60),
            o = n(86),
            a = n(5),
            s = n(36),
            u = n(11),
            c = n(4),
            l = n(3).ArrayBuffer,
            f = n(57),
            h = o.ArrayBuffer,
            p = o.DataView,
            d = i.ABV && l.isView,
            y = h.prototype.slice,
            v = i.VIEW;
        r(r.G + r.W + r.F * (l !== h), {
            ArrayBuffer: h
        }), r(r.S + r.F * !i.CONSTR, "ArrayBuffer", {
            isView: function(t) {
                return d && d(t) || c(t) && v in t
            }
        }), r(r.P + r.U + r.F * n(2)(function() {
            return !new h(2).slice(1, void 0).byteLength
        }), "ArrayBuffer", {
            slice: function(t, e) {
                if (void 0 !== y && void 0 === e) return y.call(a(this), t);
                for (var n = a(this).byteLength, r = s(t, n), i = s(void 0 === e ? n : e, n), o = new(f(this, h))(u(i - r)), c = new p(this), l = new p(o), d = 0; r < i;) l.setUint8(d++, c.getUint8(r++));
                return o
            }
        }), n(43)("ArrayBuffer")
    }, function(t, e, n) {
        var r = n(1);
        r(r.G + r.W + r.F * !n(60).ABV, {
            DataView: n(86).DataView
        })
    }, function(t, e, n) {
        n(28)("Int8", 1, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }, function(t, e, n) {
        n(28)("Uint8", 1, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }, function(t, e, n) {
        n(28)("Uint8", 1, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        }, !0)
    }, function(t, e, n) {
        n(28)("Int16", 2, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }, function(t, e, n) {
        n(28)("Uint16", 2, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }, function(t, e, n) {
        n(28)("Int32", 4, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }, function(t, e, n) {
        n(28)("Uint32", 4, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }, function(t, e, n) {
        n(28)("Float32", 4, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }, function(t, e, n) {
        n(28)("Float64", 8, function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(24),
            o = n(5),
            a = (n(3).Reflect || {}).apply,
            s = Function.apply;
        r(r.S + r.F * !n(2)(function() {
            a(function() {})
        }), "Reflect", {
            apply: function(t, e, n) {
                var r = i(t),
                    u = o(n);
                return a ? a(r, e, u) : s.call(r, e, u)
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(37),
            o = n(24),
            a = n(5),
            s = n(4),
            u = n(2),
            c = n(93),
            l = (n(3).Reflect || {}).construct,
            f = u(function() {
                function t() {}
                return !(l(function() {}, [], t) instanceof t)
            }),
            h = !u(function() {
                l(function() {})
            });
        r(r.S + r.F * (f || h), "Reflect", {
            construct: function(t, e) {
                o(t), a(e);
                var n = arguments.length < 3 ? t : o(arguments[2]);
                if (h && !f) return l(t, e, n);
                if (t == n) {
                    switch (e.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e[0]);
                        case 2:
                            return new t(e[0], e[1]);
                        case 3:
                            return new t(e[0], e[1], e[2]);
                        case 4:
                            return new t(e[0], e[1], e[2], e[3])
                    }
                    var r = [null];
                    return r.push.apply(r, e), new(c.apply(t, r))
                }
                var u = n.prototype,
                    p = i(s(u) ? u : Object.prototype),
                    d = Function.apply.call(t, p, e);
                return s(d) ? d : p
            }
        })
    }, function(t, e, n) {
        var r = n(7),
            i = n(1),
            o = n(5),
            a = n(29);
        i(i.S + i.F * n(2)(function() {
            Reflect.defineProperty(r.f({}, 1, {
                value: 1
            }), 1, {
                value: 2
            })
        }), "Reflect", {
            defineProperty: function(t, e, n) {
                o(t), e = a(e, !0), o(n);
                try {
                    return r.f(t, e, n), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(20).f,
            o = n(5);
        r(r.S, "Reflect", {
            deleteProperty: function(t, e) {
                var n = i(o(t), e);
                return !(n && !n.configurable) && delete t[e]
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(5),
            o = function(t) {
                this._t = i(t), this._i = 0;
                var e, n = this._k = [];
                for (e in t) n.push(e)
            };
        n(101)(o, "Object", function() {
            var t, e = this._k;
            do {
                if (this._i >= e.length) return {
                    value: void 0,
                    done: !0
                }
            } while (!((t = e[this._i++]) in this._t));
            return {
                value: t,
                done: !1
            }
        }), r(r.S, "Reflect", {
            enumerate: function(t) {
                return new o(t)
            }
        })
    }, function(t, e, n) {
        var r = n(20),
            i = n(39),
            o = n(15),
            a = n(1),
            s = n(4),
            u = n(5);
        a(a.S, "Reflect", {
            get: function t(e, n) {
                var a, c, l = arguments.length < 3 ? e : arguments[2];
                return u(e) === l ? e[n] : (a = r.f(e, n)) ? o(a, "value") ? a.value : void 0 !== a.get ? a.get.call(l) : void 0 : s(c = i(e)) ? t(c, n, l) : void 0
            }
        })
    }, function(t, e, n) {
        var r = n(20),
            i = n(1),
            o = n(5);
        i(i.S, "Reflect", {
            getOwnPropertyDescriptor: function(t, e) {
                return r.f(o(t), e)
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(39),
            o = n(5);
        r(r.S, "Reflect", {
            getPrototypeOf: function(t) {
                return i(o(t))
            }
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Reflect", {
            has: function(t, e) {
                return e in t
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(5),
            o = Object.isExtensible;
        r(r.S, "Reflect", {
            isExtensible: function(t) {
                return i(t), !o || o(t)
            }
        })
    }, function(t, e, n) {
        var r = n(1);
        r(r.S, "Reflect", {
            ownKeys: n(113)
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(5),
            o = Object.preventExtensions;
        r(r.S, "Reflect", {
            preventExtensions: function(t) {
                i(t);
                try {
                    return o && o(t), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function(t, e, n) {
        var r = n(7),
            i = n(20),
            o = n(39),
            a = n(15),
            s = n(1),
            u = n(32),
            c = n(5),
            l = n(4);
        s(s.S, "Reflect", {
            set: function t(e, n, s) {
                var f, h, p = arguments.length < 4 ? e : arguments[3],
                    d = i.f(c(e), n);
                if (!d) {
                    if (l(h = o(e))) return t(h, n, s, p);
                    d = u(0)
                }
                if (a(d, "value")) {
                    if (!1 === d.writable || !l(p)) return !1;
                    if (f = i.f(p, n)) {
                        if (f.get || f.set || !1 === f.writable) return !1;
                        f.value = s, r.f(p, n, f)
                    } else r.f(p, n, u(0, s));
                    return !0
                }
                return void 0 !== d.set && (d.set.call(p, s), !0)
            }
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(69);
        i && r(r.S, "Reflect", {
            setPrototypeOf: function(t, e) {
                i.check(t, e);
                try {
                    return i.set(t, e), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function(t, e, n) {
        n(313), t.exports = n(10).Array.includes
    }, function(t, e, n) {
        var r = n(1),
            i = n(50)(!0);
        r(r.P, "Array", {
            includes: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n(42)("includes")
    }, function(t, e, n) {
        n(315), t.exports = n(10).String.padStart
    }, function(t, e, n) {
        var r = n(1),
            i = n(114),
            o = n(58);
        r(r.P + r.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), "String", {
            padStart: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
            }
        })
    }, function(t, e, n) {
        n(317), t.exports = n(10).String.padEnd
    }, function(t, e, n) {
        var r = n(1),
            i = n(114),
            o = n(58);
        r(r.P + r.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), "String", {
            padEnd: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
            }
        })
    }, function(t, e, n) {
        n(319), t.exports = n(64).f("asyncIterator")
    }, function(t, e, n) {
        n(88)("asyncIterator")
    }, function(t, e, n) {
        n(321), t.exports = n(10).Object.getOwnPropertyDescriptors
    }, function(t, e, n) {
        var r = n(1),
            i = n(113),
            o = n(17),
            a = n(20),
            s = n(80);
        r(r.S, "Object", {
            getOwnPropertyDescriptors: function(t) {
                for (var e, n, r = o(t), u = a.f, c = i(r), l = {}, f = 0; c.length > f;) void 0 !== (n = u(r, e = c[f++])) && s(l, e, n);
                return l
            }
        })
    }, function(t, e, n) {
        n(323), t.exports = n(10).Object.values
    }, function(t, e, n) {
        var r = n(1),
            i = n(115)(!1);
        r(r.S, "Object", {
            values: function(t) {
                return i(t)
            }
        })
    }, function(t, e, n) {
        n(325), t.exports = n(10).Object.entries
    }, function(t, e, n) {
        var r = n(1),
            i = n(115)(!0);
        r(r.S, "Object", {
            entries: function(t) {
                return i(t)
            }
        })
    }, function(t, e, n) {
        n(107), n(327), t.exports = n(10).Promise.finally
    }, function(t, e, n) {
        var r = n(1),
            i = n(10),
            o = n(3),
            a = n(57),
            s = n(109);
        r(r.P + r.R, "Promise", {
            finally: function(t) {
                var e = a(this, i.Promise || o.Promise),
                    n = "function" == typeof t;
                return this.then(n ? function(n) {
                    return s(e, t()).then(function() {
                        return n
                    })
                } : t, n ? function(n) {
                    return s(e, t()).then(function() {
                        throw n
                    })
                } : t)
            }
        })
    }, function(t, e, n) {
        n(329), n(330), n(331), t.exports = n(10)
    }, function(t, e, n) {
        var r = n(3),
            i = n(1),
            o = n(58),
            a = [].slice,
            s = /MSIE .\./.test(o),
            u = function(t) {
                return function(e, n) {
                    var r = arguments.length > 2,
                        i = !!r && a.call(arguments, 2);
                    return t(r ? function() {
                        ("function" == typeof e ? e : Function(e)).apply(this, i)
                    } : e, n)
                }
            };
        i(i.G + i.B + i.F * s, {
            setTimeout: u(r.setTimeout),
            setInterval: u(r.setInterval)
        })
    }, function(t, e, n) {
        var r = n(1),
            i = n(85);
        r(r.G + r.B, {
            setImmediate: i.set,
            clearImmediate: i.clear
        })
    }, function(t, e, n) {
        for (var r = n(83), i = n(35), o = n(13), a = n(3), s = n(16), u = n(41), c = n(6), l = c("iterator"), f = c("toStringTag"), h = u.Array, p = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, d = i(p), y = 0; y < d.length; y++) {
            var v, g = d[y],
                m = p[g],
                b = a[g],
                w = b && b.prototype;
            if (w && (w[l] || s(w, l, h), w[f] || s(w, f, g), u[g] = h, m))
                for (v in r) w[v] || o(w, v, r[v], !0)
        }
    }, function(t, e) {
        ! function(e) {
            var n, r = Object.prototype,
                i = r.hasOwnProperty,
                o = "function" == typeof Symbol ? Symbol : {},
                a = o.iterator || "@@iterator",
                s = o.asyncIterator || "@@asyncIterator",
                u = o.toStringTag || "@@toStringTag",
                c = "object" == typeof t,
                l = e.regeneratorRuntime;
            if (l) c && (t.exports = l);
            else {
                (l = e.regeneratorRuntime = c ? t.exports : {}).wrap = w;
                var f = "suspendedStart",
                    h = "suspendedYield",
                    p = "executing",
                    d = "completed",
                    y = {},
                    v = {};
                v[a] = function() {
                    return this
                };
                var g = Object.getPrototypeOf,
                    m = g && g(g(R([])));
                m && m !== r && i.call(m, a) && (v = m);
                var b = O.prototype = x.prototype = Object.create(v);
                S.prototype = b.constructor = O, O.constructor = S, O[u] = S.displayName = "GeneratorFunction", l.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === S || "GeneratorFunction" === (e.displayName || e.name))
                }, l.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, O) : (t.__proto__ = O, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(b), t
                }, l.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, T(E.prototype), E.prototype[s] = function() {
                    return this
                }, l.AsyncIterator = E, l.async = function(t, e, n, r) {
                    var i = new E(w(t, e, n, r));
                    return l.isGeneratorFunction(e) ? i : i.next().then(function(t) {
                        return t.done ? t.value : i.next()
                    })
                }, T(b), b[u] = "Generator", b[a] = function() {
                    return this
                }, b.toString = function() {
                    return "[object Generator]"
                }, l.keys = function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function n() {
                            for (; e.length;) {
                                var r = e.pop();
                                if (r in t) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, l.values = R, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(C), !t)
                            for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function r(r, i) {
                            return s.type = "throw", s.arg = t, e.next = r, i && (e.method = "next", e.arg = n), !!i
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return r("end");
                            if (a.tryLoc <= this.prev) {
                                var u = i.call(a, "catchLoc"),
                                    c = i.call(a, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                } else if (u) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), C(n), y
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    C(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: R(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = n), y
                    }
                }
            }

            function w(t, e, n, r) {
                var i = e && e.prototype instanceof x ? e : x,
                    o = Object.create(i.prototype),
                    a = new k(r || []);
                return o._invoke = function(t, e, n) {
                    var r = f;
                    return function(i, o) {
                        if (r === p) throw new Error("Generator is already running");
                        if (r === d) {
                            if ("throw" === i) throw o;
                            return L()
                        }
                        for (n.method = i, n.arg = o;;) {
                            var a = n.delegate;
                            if (a) {
                                var s = A(a, n);
                                if (s) {
                                    if (s === y) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (r === f) throw r = d, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = p;
                            var u = _(t, e, n);
                            if ("normal" === u.type) {
                                if (r = n.done ? d : h, u.arg === y) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (r = d, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }(t, n, a), o
            }

            function _(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }

            function x() {}

            function S() {}

            function O() {}

            function T(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function E(t) {
                var e;
                this._invoke = function(n, r) {
                    function o() {
                        return new Promise(function(e, o) {
                            ! function e(n, r, o, a) {
                                var s = _(t[n], t, r);
                                if ("throw" !== s.type) {
                                    var u = s.arg,
                                        c = u.value;
                                    return c && "object" == typeof c && i.call(c, "__await") ? Promise.resolve(c.__await).then(function(t) {
                                        e("next", t, o, a)
                                    }, function(t) {
                                        e("throw", t, o, a)
                                    }) : Promise.resolve(c).then(function(t) {
                                        u.value = t, o(u)
                                    }, a)
                                }
                                a(s.arg)
                            }(n, r, e, o)
                        })
                    }
                    return e = e ? e.then(o, o) : o()
                }
            }

            function A(t, e) {
                var r = t.iterator[e.method];
                if (r === n) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = n, A(t, e), "throw" === e.method)) return y;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return y
                }
                var i = _(r, t.iterator, e.arg);
                if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, y;
                var o = i.arg;
                return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, y) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, y)
            }

            function P(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function C(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function k(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(P, this), this.reset(!0)
            }

            function R(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            o = function e() {
                                for (; ++r < t.length;)
                                    if (i.call(t, r)) return e.value = t[r], e.done = !1, e;
                                return e.value = n, e.done = !0, e
                            };
                        return o.next = o
                    }
                }
                return {
                    next: L
                }
            }

            function L() {
                return {
                    value: n,
                    done: !0
                }
            }
        }(function() {
            return this
        }() || Function("return this")())
    }, , , , , , , function(t, e) {
        var n, r, i = t.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
            try {
                return n(t, 0)
            } catch (e) {
                try {
                    return n.call(null, t, 0)
                } catch (e) {
                    return n.call(this, t, 0)
                }
            }
        }! function() {
            try {
                n = "function" == typeof setTimeout ? setTimeout : o
            } catch (t) {
                n = o
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (t) {
                r = a
            }
        }();
        var u, c = [],
            l = !1,
            f = -1;

        function h() {
            l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && p())
        }

        function p() {
            if (!l) {
                var t = s(h);
                l = !0;
                for (var e = c.length; e;) {
                    for (u = c, c = []; ++f < e;) u && u[f].run();
                    f = -1, e = c.length
                }
                u = null, l = !1,
                    function(t) {
                        if (r === clearTimeout) return clearTimeout(t);
                        if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                        try {
                            r(t)
                        } catch (e) {
                            try {
                                return r.call(null, t)
                            } catch (e) {
                                return r.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function d(t, e) {
            this.fun = t, this.array = e
        }

        function y() {}
        i.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            c.push(new d(t, e)), 1 !== c.length || l || s(p)
        }, d.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = y, i.addListener = y, i.once = y, i.off = y, i.removeListener = y, i.removeAllListeners = y, i.emit = y, i.prependListener = y, i.prependOnceListener = y, i.listeners = function(t) {
            return []
        }, i.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function() {
            return "/"
        }, i.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function() {
            return 0
        }
    }, , , function(t, e) {
        var n = 32;
        Phaser.Cache.LAYOUT = n, n++, Phaser.Cache.PRELOAD_PACK = n, n++, Phaser.Cache.THREE_CUBE_TEXTURE = n, n++, Phaser.Cache.THREE_JSON = n, n++, Phaser.Cache.THREE_OBJECT = n, n++, Phaser.Cache.THREE_TEXTURE = n, n++, Phaser.Cache.WEBFONT = n, n++
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {
        Phaser.Pointer.prototype.move = function() {
            return function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = this.game.input;
                if (!n.pollLocked) {
                    void 0 === e && (e = !1), void 0 !== t.button && (this.button = t.button), this.isMouse && this.updateButtons(t), this.clientX = t.clientX, this.clientY = t.clientY, this.pageX = t.pageX, this.pageY = t.pageY, this.screenX = t.screenX, this.screenY = t.screenY, this.isMouse && n.mouse.locked && !e && (this.rawMovementX = t.movementX || t.mozMovementX || t.webkitMovementX || 0, this.rawMovementY = t.movementY || t.mozMovementY || t.webkitMovementY || 0, this.movementX += this.rawMovementX, this.movementY += this.rawMovementY);
                    var r, i = this.game.fsGameRotated;
                    switch (i) {
                        case -90:
                            r = (this.pageY - this.game.scale.offset.x) * n.scale.x, this.x = this.game.width - this.game.width * (r / this.game.width), this.y = (this.pageX - this.game.scale.offset.y) * n.scale.y;
                            break;
                        case 90:
                            this.x = (this.pageY - this.game.scale.offset.x) * n.scale.x, r = (this.pageX - this.game.scale.offset.y) * n.scale.y, this.y = this.game.height - this.game.height * (r / this.game.height);
                            break;
                        default:
                            this.x = (this.pageX - this.game.scale.offset.x) * n.scale.x, this.y = (this.pageY - this.game.scale.offset.y) * n.scale.y
                    }
                    this.position.setTo(this.x, this.y), this.circle.x = this.x, this.circle.y = this.y, (n.multiInputOverride === Phaser.Input.MOUSE_OVERRIDES_TOUCH || n.multiInputOverride === Phaser.Input.MOUSE_TOUCH_COMBINE || n.multiInputOverride === Phaser.Input.TOUCH_OVERRIDES_MOUSE && 0 === n.totalActivePointers) && (n.activePointer = this, n.x = this.x, n.y = this.y, n.position.setTo(n.x, n.y), n.circle.x = n.x, n.circle.y = n.y), this.withinGame = 0 !== i ? this.game.scale.bounds.contains(this.pageY, this.pageX) : this.game.scale.bounds.contains(this.pageX, this.pageY);
                    for (var o = n.moveCallbacks.length; o--;) n.moveCallbacks[o].callback.call(n.moveCallbacks[o].context, this, this.x, this.y, e);
                    return null === this.targetObject || this.game.paused && !this.targetObject.noPause || !0 !== this.targetObject.isDragged ? n.interactiveItems.total > 0 && this.processInteractiveObjects(e) : !1 === this.targetObject.update(this) && (this.targetObject = null), this
                }
            }
        }()
    }, function(t, e) {
        t.exports = function(t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i
                    }
                }), Object.defineProperty(e, "exports", {
                    enumerable: !0
                }), e.webpackPolyfill = 1
            }
            return e
        }
    }, function(t, e) {
        (function(e) {
            t.exports = e
        }).call(this, {})
    }]
]);