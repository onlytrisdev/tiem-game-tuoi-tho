! function(t) {
    function e(a) {
        if (s[a]) return s[a].exports;
        var i = s[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return t[a].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }
    var s = {};
    e.m = t, e.c = s, e.d = function(t, s, a) {
        e.o(t, s) || Object.defineProperty(t, s, {
            configurable: !1,
            enumerable: !0,
            get: a
        })
    }, e.n = function(t) {
        var s = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(s, "a", s), s
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 22)
}([
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        class a {
            static init(t, e, s, a, r) {
                if (this._inited) return;
                this._inited = !0, this.SITE = t, this.ASSET_MODE = s, this.PUB_MODE = e, this.SAVER_MODE = a;
                const l = window.location !== window.parent.location ? document.referrer : document.location.href;
                switch (this._publisher = this.getLocation(l), t) {
                    case i.FREE_GAMES_CASUAL:
                        this._site = "http://www.freegamescasual.com";
                        break;
                    case i.DRESSUP_MIX:
                        this._site = "http://www.dressupmix.com";
                        break;
                    case i.MY_CUTE_GAMES:
                        this._site = "http://www.mycutegames.com"
                }
                this._gameId = this.makeLinkId(r)
            }
            static getTitle() {
                return this._gameId
            }
            static getLocation(t) {
                const e = document.createElement("a");
                return e.href = t, e.hostname
            }
            static makeLinkId(t) {
                let e = t.toLocaleLowerCase();
                return e = e.replace(" ", "_"), e = e.replace("-", "_")
            }
            static inMoreGamesUrl() {
                return `${this._site}/?utm_source=${this._publisher}&utm_campaign=${this._gameId}&utm_medium=referral&utm_content=ingame_more_games`
            }
            static preloaderLogoUrl() {
                return `${this._site}/?utm_source=${this._publisher}&utm_campaign=${this._gameId}&utm_medium=referral&utm_content=preloader_logo`
            }
            static preloaderCategoryUrl() {
                return `${this._site}/?utm_source=${this._publisher}&utm_campaign=${this._gameId}&utm_medium=referral&utm_content=preloader_category`
            }
            static mainLogoUrl() {
                return `${this._site}/?utm_source=${this._publisher}&utm_campaign=${this._gameId}&utm_medium=referral&utm_content=main_logo`
            }
            static mainMoreGamesUrl() {
                return `${this._site}/?utm_source=${this._publisher}&utm_campaign=${this._gameId}&utm_medium=referral&utm_content=main_more_games`
            }
            static crossUrl(t) {
                return `${t}?utm_source=${this._publisher}&utm_campaign=${this._gameId}&utm_medium=referral&utm_content=crosspromo`
            }
            static gaData() {
                return {
                    hitType: "event",
                    eventCategory: this._site,
                    eventAction: this._gameId,
                    eventLabel: this._publisher
                }
            }
        }
        a.GAME = null, a.SITE = null, a.ASSET_MODE = null, a.ASSET_SIZE = null, a.PUB_MODE = null, a.SAVER_MODE = null, a.IS_ASSETS_LOADED = !1, a.CURRENT_STATE = 0, a.GAME_RESULT = 0, a.GAME_COMPLETED = !1, a.DOLL_1 = null, a.DOLL_2 = null, a.DOLL_3 = null, a.DOLL_4 = null, a.DECOR_1 = null, a.DECOR_2 = null, a.CONT_1 = null, a.CONT_2 = null, a.FREE_RESULT = null, a.AD1_SHOWED = !1, a.AD2_SHOWED = !1, a.AD3_SHOWED = !1, a.SELECTED_BG = 0, a._inited = !1, a._props = {}, e.GameConfig = a;
        var i;
        ! function(t) {
            t[t.MY_CUTE_GAMES = 0] = "MY_CUTE_GAMES", t[t.FREE_GAMES_CASUAL = 1] = "FREE_GAMES_CASUAL", t[t.DRESSUP_MIX = 2] = "DRESSUP_MIX"
        }(i = e.Sites || (e.Sites = {}));
        ! function(t) {
            t[t.NORMAL = 0] = "NORMAL", t[t.NO_BUTTONS = 1] = "NO_BUTTONS", t[t.NO_BUTTONS_ONE_AD = 2] = "NO_BUTTONS_ONE_AD", t[t.NO_AD = 3] = "NO_AD", t[t.GAME_DISTRIBUTIONS = 4] = "GAME_DISTRIBUTIONS", t[t.GGG = 5] = "GGG", t[t.DUW = 6] = "DUW"
        }(e.PublishMode || (e.PublishMode = {}));
        ! function(t) {
            t[t.LOAD_ALL = 0] = "LOAD_ALL", t[t.LOAD_BACKGROUND = 1] = "LOAD_BACKGROUND", t[t.LOAD_BEFORE = 2] = "LOAD_BEFORE"
        }(e.AssetMode || (e.AssetMode = {}))
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(19),
            i = s(0),
            r = s(156),
            l = s(20),
            n = s(157),
            o = s(3),
            g = s(158),
            h = s(159);
        class c {
            static getSaver() {
                let t;
                switch (i.GameConfig.SAVER_MODE) {
                    case l.SaverTemplates.V_N_FADE_BIG_SLIDER_TEMPLATE:
                        t = new h.VerticalNorthBigSaver;
                        break;
                    case l.SaverTemplates.V_FADE_SLIDER_TEMPLATE:
                        t = new n.VerticalSaver;
                        break;
                    case l.SaverTemplates.H_FADE_SLIDER_TEMPLATE:
                        t = new g.HorizontalSaver;
                        break;
                    case l.SaverTemplates.CUSTOM:
                        t = new r.DefaultSaver;
                        break;
                    case l.SaverTemplates.NONE:
                        t = null
                }
                return t
            }
            static centrize(t) {
                t.anchor.set(.5), t.x = t.x + t.width / 2, t.y = t.y + t.height / 2
            }
            static makeButton(t, e, s, a, i = 1, r = "", l = "", n = [0, 0, 0], g = !0, h = !1, c = !0, d = null, m = null, u = null, p = null, A = null) {
                null == n ? n = [0, 0, 0] : o.isString(n) && (n = [n, n, n]);
                let S = t.game.add.button(0, 0, l, null, t, n[0], n[1], n[2]);
                return S.name = r, S.anchor.set(.5), S.inputEnabled = !0, h && (S.input.pixelPerfectClick = S.input.pixelPerfectOver = h), h && (S.input.pixelPerfectAlpha = 10), h && (S.input.useHandCursor = !0), S.inputEnabled = g, null != d && S.events.onInputUp.add(d, t), null != m && S.events.onInputOver.add(m, t), null != u && S.events.onInputOut.add(u, t), null != p && S.events.onInputDown.add(p, t), null != A && S.events.onInputUp.add(A, t), i && S.scale.setTo(i), S.visible = c, S.x = s + S.width / 2, S.y = a + S.height / 2, e.addChild(S), S
            }
            static makeSpritesheetButton(t, e, s, a, i = 1, r = 10, l = !0, n = "", o = "", g = null, h = !0, c = !1, d = !0, m = null, u = null, p = null, A = null, S = null) {
                let f = t.game.add.sprite(0, 0, o);
                return f.animations.add("butAnim", g), f.animations.play("butAnim", r, l), f.name = n, f.anchor.set(.5), f.inputEnabled = !0, c && (f.input.pixelPerfectClick = f.input.pixelPerfectOver = c), c && (f.input.pixelPerfectAlpha = 10), c && (f.input.useHandCursor = !0), f.inputEnabled = h, null != m && f.events.onInputUp.add(m, t), null != u && f.events.onInputOver.add(u, t), null != p && f.events.onInputOut.add(p, t), null != A && f.events.onInputDown.add(A, t), null != S && f.events.onInputUp.add(S, t), i && f.scale.setTo(i), f.visible = d, f.x = s + f.width / 2, f.y = a + f.height / 2, e.addChild(f), f
            }
            static addOverHandlerMcg(t) {
                const e = i.GameConfig.GAME;
                t.filters = [a.FilterUtils.makeFilter()];
                const s = e.add.tween(t).to({
                        angle: 10
                    }, 400, Phaser.Easing.Linear.None, !0),
                    r = e.add.tween(t).to({
                        angle: -10
                    }, 800, Phaser.Easing.Linear.None, !1),
                    l = e.add.tween(t).to({
                        angle: 0
                    }, 400, Phaser.Easing.Linear.None, !1);
                s.chain(r), r.chain(l), l.chain(s)
            }
            static addOutHandlerMcg(t) {
                t.filters = null, i.GameConfig.GAME.tweens.removeFrom(t), t.angle = 0
            }
            static addOverHandler(t) {
                t.filters = [a.FilterUtils.makeFilter()], i.GameConfig.GAME.tweens.removeFrom(t.scale), i.GameConfig.GAME.add.tween(t.scale).to({
                    x: 1.03,
                    y: 1.03
                }, 250, Phaser.Easing.Linear.None, !0)
            }
            static addOutHandler(t) {
                t.filters = null, i.GameConfig.GAME.tweens.removeFrom(t.scale), i.GameConfig.GAME.add.tween(t.scale).to({
                    x: 1,
                    y: 1
                }, 250, Phaser.Easing.Linear.None, !0)
            }
            static addCustomOverHandler(t = 16777215, e = 1.03, s) {
                return r => {
                    r.filters = [a.FilterUtils.makeFilter(t)], i.GameConfig.GAME.tweens.removeFrom(r.scale), i.GameConfig.GAME.add.tween(r.scale).to({
                        x: e,
                        y: null == s ? e : s
                    }, 250, Phaser.Easing.Linear.None, !0)
                }
            }
            static addCustomOutHandler(t = 1, e) {
                return s => {
                    s.filters = null, i.GameConfig.GAME.tweens.removeFrom(s.scale), i.GameConfig.GAME.add.tween(s.scale).to({
                        x: t,
                        y: null == e ? t : e
                    }, 250, Phaser.Easing.Linear.None, !0)
                }
            }
            static addOverScaleHandler(t) {
                i.GameConfig.GAME.tweens.removeFrom(t.scale), i.GameConfig.GAME.add.tween(t.scale).to({
                    x: 1.03,
                    y: 1.03
                }, 250, Phaser.Easing.Linear.None, !0)
            }
            static addOutScaleHandler(t) {
                i.GameConfig.GAME.tweens.removeFrom(t.scale), i.GameConfig.GAME.add.tween(t.scale).to({
                    x: 1,
                    y: 1
                }, 250, Phaser.Easing.Linear.None, !0)
            }
            static addCustomOverScaleHandler(t = 1.03, e) {
                return s => {
                    i.GameConfig.GAME.tweens.removeFrom(s.scale), i.GameConfig.GAME.add.tween(s.scale).to({
                        x: t,
                        y: null == e ? t : e
                    }, 250, Phaser.Easing.Linear.None, !0)
                }
            }
            static addCustomOutScaleHandler(t = 1, e) {
                return s => {
                    i.GameConfig.GAME.tweens.removeFrom(s.scale), i.GameConfig.GAME.add.tween(s.scale).to({
                        x: t,
                        y: null == e ? t : e
                    }, 250, Phaser.Easing.Linear.None, !0)
                }
            }
            static addOverGlowHandler(t) {
                t.filters = [a.FilterUtils.makeFilter()]
            }
            static addOutGlowHandler(t) {
                t.filters = null
            }
            static addCustomOverGlowHandler(t = 16777215) {
                return e => {
                    e.filters = [a.FilterUtils.makeFilter(t)]
                }
            }
            static addOverGlowParentHandler(t) {
                t.parent.filters = [a.FilterUtils.makeFilter()]
            }
            static addOutGlowParentHandler(t) {
                t.parent.filters = null
            }
            static addCustomOverGlowParentHandler(t = 16777215) {
                return e => {
                    e.parent.filters = [a.FilterUtils.makeFilter(t)]
                }
            }
            static addOverHandlerFgc(t) {
                t.filters = [a.FilterUtils.makeFilter()], i.GameConfig.GAME.tweens.removeFrom(t.scale), i.GameConfig.GAME.add.tween(t.scale).to({
                    x: .82,
                    y: .82
                }, 250, Phaser.Easing.Linear.None, !0)
            }
            static addOutHandlerFgc(t) {
                t.filters = null, i.GameConfig.GAME.tweens.removeFrom(t.scale), i.GameConfig.GAME.add.tween(t.scale).to({
                    x: .8,
                    y: .8
                }, 250, Phaser.Easing.Linear.None, !0)
            }
            static goLinkInMoreGames() {
            window.open( 'http://www.localhost', '_blank' )
            }
            static goLinkPreloaderLogo() {
            window.open( 'http://www.localhost', '_blank' )
            }
            static goLinkPreloaderCategory() {
               // window.open(i.GameConfig.preloaderCategoryUrl())
            }
            static goLinkMainLogo() {
            window.open( 'http://www.localhost', '_blank' )
            }
            static goLinkMainMoreGames() {
            window.open( 'http://www.localhost', '_blank' )
            }
            static goCross(t) {
                return () => {
                    //window.open(i.GameConfig.crossUrl(t), "_blank")
                }
            }
        }
        e.GuiUtils = c
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(6),
            i = s(0);
        class r {
            static getImageClass(t) {
                return a.Images[t + i.GameConfig.ASSET_SIZE]
            }
            static getSpritesheetClass(t) {
                return a.Spritesheets[t + i.GameConfig.ASSET_SIZE]
            }
            static getAtlasClass(t) {
                return a.Atlases[t + i.GameConfig.ASSET_SIZE]
            }
            static getGoogleFontClass(t) {
                return a.GoogleWebFonts[t]
            }
            static getBitmapFontClass(t) {
                return a.BitmapFonts[t]
            }
        }
        e.ImageUtils = r
    },
    function(t, e, s) {
        (function(t, a) {
            function i(t, s) {
                var a = {
                    seen: [],
                    stylize: l
                };
                return arguments.length >= 3 && (a.depth = arguments[2]), arguments.length >= 4 && (a.colors = arguments[3]), c(s) ? a.showHidden = s : s && e._extend(a, s), p(a.showHidden) && (a.showHidden = !1), p(a.depth) && (a.depth = 2), p(a.colors) && (a.colors = !1), p(a.customInspect) && (a.customInspect = !0), a.colors && (a.stylize = r), n(a, t, a.depth)
            }

            function r(t, e) {
                var s = i.styles[e];
                return s ? "[" + i.colors[s][0] + "m" + t + "[" + i.colors[s][1] + "m" : t
            }

            function l(t, e) {
                return t
            }

            function n(t, s, a) {
                if (t.customInspect && s && _(s.inspect) && s.inspect !== e.inspect && (!s.constructor || s.constructor.prototype !== s)) {
                    var i = s.inspect(a, t);
                    return u(i) || (i = n(t, i, a)), i
                }
                var r = function(t, e) {
                    if (p(e)) return t.stylize("undefined", "undefined");
                    if (u(e)) {
                        var s = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return t.stylize(s, "string")
                    }
                    if (m(e)) return t.stylize("" + e, "number");
                    if (c(e)) return t.stylize("" + e, "boolean");
                    if (d(e)) return t.stylize("null", "null")
                }(t, s);
                if (r) return r;
                var l = Object.keys(s),
                    S = function(t) {
                        var e = {};
                        return t.forEach(function(t, s) {
                            e[t] = !0
                        }), e
                    }(l);
                if (t.showHidden && (l = Object.getOwnPropertyNames(s)), C(s) && (l.indexOf("message") >= 0 || l.indexOf("description") >= 0)) return o(s);
                if (0 === l.length) {
                    if (_(s)) {
                        var b = s.name ? ": " + s.name : "";
                        return t.stylize("[Function" + b + "]", "special")
                    }
                    if (A(s)) return t.stylize(RegExp.prototype.toString.call(s), "regexp");
                    if (f(s)) return t.stylize(Date.prototype.toString.call(s), "date");
                    if (C(s)) return o(s)
                }
                var E = "",
                    U = !1,
                    D = ["{", "}"];
                if (h(s) && (U = !0, D = ["[", "]"]), _(s)) {
                    E = " [Function" + (s.name ? ": " + s.name : "") + "]"
                }
                if (A(s) && (E = " " + RegExp.prototype.toString.call(s)), f(s) && (E = " " + Date.prototype.toUTCString.call(s)), C(s) && (E = " " + o(s)), 0 === l.length && (!U || 0 == s.length)) return D[0] + E + D[1];
                if (a < 0) return A(s) ? t.stylize(RegExp.prototype.toString.call(s), "regexp") : t.stylize("[Object]", "special");
                t.seen.push(s);
                var N;
                return N = U ? function(t, e, s, a, i) {
                        for (var r = [], l = 0, n = e.length; l < n; ++l) I(e, String(l)) ? r.push(g(t, e, s, a, String(l), !0)) : r.push("");
                        return i.forEach(function(i) {
                            i.match(/^\d+$/) || r.push(g(t, e, s, a, i, !0))
                        }), r
                    }(t, s, a, S, l) : l.map(function(e) {
                        return g(t, s, a, S, e, U)
                    }), t.seen.pop(),
                    function(t, e, s) {
                        var a = 0;
                        if (t.reduce(function(t, e) {
                            return a++, e.indexOf("\n") >= 0 && a++, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                        }, 0) > 60) return s[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + s[1];
                        return s[0] + e + " " + t.join(", ") + " " + s[1]
                    }(N, E, D)
            }

            function o(t) {
                return "[" + Error.prototype.toString.call(t) + "]"
            }

            function g(t, e, s, a, i, r) {
                var l, o, g;
                if ((g = Object.getOwnPropertyDescriptor(e, i) || {
                    value: e[i]
                }).get ? o = g.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : g.set && (o = t.stylize("[Setter]", "special")), I(a, i) || (l = "[" + i + "]"), o || (t.seen.indexOf(g.value) < 0 ? (o = d(s) ? n(t, g.value, null) : n(t, g.value, s - 1)).indexOf("\n") > -1 && (o = r ? o.split("\n").map(function(t) {
                    return "  " + t
                }).join("\n").substr(2) : "\n" + o.split("\n").map(function(t) {
                    return "   " + t
                }).join("\n")) : o = t.stylize("[Circular]", "special")), p(l)) {
                    if (r && i.match(/^\d+$/)) return o;
                    (l = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (l = l.substr(1, l.length - 2), l = t.stylize(l, "name")) : (l = l.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), l = t.stylize(l, "string"))
                }
                return l + ": " + o
            }

            function h(t) {
                return Array.isArray(t)
            }

            function c(t) {
                return "boolean" == typeof t
            }

            function d(t) {
                return null === t
            }

            function m(t) {
                return "number" == typeof t
            }

            function u(t) {
                return "string" == typeof t
            }

            function p(t) {
                return void 0 === t
            }

            function A(t) {
                return S(t) && "[object RegExp]" === b(t)
            }

            function S(t) {
                return "object" == typeof t && null !== t
            }

            function f(t) {
                return S(t) && "[object Date]" === b(t)
            }

            function C(t) {
                return S(t) && ("[object Error]" === b(t) || t instanceof Error)
            }

            function _(t) {
                return "function" == typeof t
            }

            function b(t) {
                return Object.prototype.toString.call(t)
            }

            function E(t) {
                return t < 10 ? "0" + t.toString(10) : t.toString(10)
            }

            function I(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            var U = /%[sdj%]/g;
            e.format = function(t) {
                if (!u(t)) {
                    for (var e = [], s = 0; s < arguments.length; s++) e.push(i(arguments[s]));
                    return e.join(" ")
                }
                for (var s = 1, a = arguments, r = a.length, l = String(t).replace(U, function(t) {
                    if ("%%" === t) return "%";
                    if (s >= r) return t;
                    switch (t) {
                        case "%s":
                            return String(a[s++]);
                        case "%d":
                            return Number(a[s++]);
                        case "%j":
                            try {
                                return JSON.stringify(a[s++])
                            } catch (t) {
                                return "[Circular]"
                            }
                        default:
                            return t
                    }
                }), n = a[s]; s < r; n = a[++s]) d(n) || !S(n) ? l += " " + n : l += " " + i(n);
                return l
            }, e.deprecate = function(s, i) {
                if (p(t.process)) return function() {
                    return e.deprecate(s, i).apply(this, arguments)
                };
                if (!0 === a.noDeprecation) return s;
                var r = !1;
                return function() {
                    if (!r) {
                        if (a.throwDeprecation) throw new Error(i);
                        a.traceDeprecation ? console.trace(i) : console.error(i), r = !0
                    }
                    return s.apply(this, arguments)
                }
            };
            var D, N = {};
            e.debuglog = function(t) {
                if (p(D) && (D = a.env.NODE_DEBUG || ""), t = t.toUpperCase(), !N[t])
                    if (new RegExp("\\b" + t + "\\b", "i").test(D)) {
                        var s = a.pid;
                        N[t] = function() {
                            var a = e.format.apply(e, arguments);
                            console.error("%s %d: %s", t, s, a)
                        }
                    } else N[t] = function() {};
                return N[t]
            }, e.inspect = i, i.colors = {
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
            }, i.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            }, e.isArray = h, e.isBoolean = c, e.isNull = d, e.isNullOrUndefined = function(t) {
                return null == t
            }, e.isNumber = m, e.isString = u, e.isSymbol = function(t) {
                return "symbol" == typeof t
            }, e.isUndefined = p, e.isRegExp = A, e.isObject = S, e.isDate = f, e.isError = C, e.isFunction = _, e.isPrimitive = function(t) {
                return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
            }, e.isBuffer = s(151);
            var P = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            e.log = function() {
                console.log("%s - %s", function() {
                    var t = new Date,
                        e = [E(t.getHours()), E(t.getMinutes()), E(t.getSeconds())].join(":");
                    return [t.getDate(), P[t.getMonth()], e].join(" ")
                }(), e.format.apply(e, arguments))
            }, e.inherits = s(152), e._extend = function(t, e) {
                if (!e || !S(e)) return t;
                for (var s = Object.keys(e), a = s.length; a--;) t[s[a]] = e[s[a]];
                return t
            }
        }).call(e, s(149), s(150))
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0),
            i = s(3);
        class r {
            static kill(t) {
                a.GameConfig.GAME.tweens.removeFrom(t)
            }
            static frameChangeAnimation(t, e, s, a) {}
            static delayedCall(t, e, s, i) {
                a.GameConfig.GAME.time.events.add(t, e, s, i)
            }
            static callEvery(t, e, s, i) {
                a.GameConfig.GAME.time.events.loop(t, e, s, i)
            }
            static rotate(t, e, s = 1e3, i = 0, r = 0, l = !1, n = Phaser.Easing.Linear.None, o, g) {
                -1 === r && (r = 99999);
                return a.GameConfig.GAME.add.tween(t).to({
                    angle: e
                }, s, n, !0, i, r, l)
            }
            static fadeOut(t, e = 500, s = 0, l, n) {
                const o = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(e + s + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const g = o.add.tween(t).to({
                    alpha: 0
                }, e, Phaser.Easing.Linear.None, !0, s);
                return i.isNull(l) || i.isUndefined(l) || g.onComplete.addOnce(l, n), g
            }
            static fadeIn(t, e = 500, s = 0, l, n) {
                const o = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(e + s + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const g = o.add.tween(t).to({
                    alpha: 1
                }, e, Phaser.Easing.Linear.None, !0, s);
                return i.isNull(l) || i.isUndefined(l) || g.onComplete.addOnce(l, n), g
            }
            static fade(t, e, s = 500, l = 0, n, o) {
                const g = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(s + l + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const h = g.add.tween(t).to({
                    alpha: e
                }, s, Phaser.Easing.Linear.None, !0, l);
                return i.isNull(n) || i.isUndefined(n) || h.onComplete.addOnce(n, o), h
            }
            static scale(t, e, s = 500, l = 0, n, o) {
                const g = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(s + l + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const h = g.add.tween(t.scale).to({
                    x: e,
                    y: e
                }, s, Phaser.Easing.Linear.None, !0, l);
                return i.isNull(n) || i.isUndefined(n) || h.onComplete.addOnce(n, o), h
            }
            static scaleIn(t, e = 500, s = 0, l, n) {
                const o = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(e + s + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const g = o.add.tween(t.scale).to({
                    x: 1,
                    y: 1
                }, e, Phaser.Easing.Linear.None, !0, s);
                return i.isNull(l) || i.isUndefined(l) || g.onComplete.addOnce(l, n), g
            }
            static moveOut(t, e, s, l = 500, n = 0, o, g) {
                const h = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(l + n + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const c = h.add.tween(t).to({
                    x: e,
                    y: s
                }, l, Phaser.Easing.Circular.In, !0, n);
                return i.isNull(o) || i.isUndefined(o) || c.onComplete.addOnce(o, g), c
            }
            static moveIn(t, e, s, l = 500, n = 0, o, g) {
                const h = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(l + n + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const c = h.add.tween(t).to({
                    x: e,
                    y: s
                }, l, Phaser.Easing.Circular.Out, !0, n);
                return i.isNull(o) || i.isUndefined(o) || c.onComplete.addOnce(o, g), c
            }
            static moveInOut(t, e, s, l = 500, n = 0, o, g) {
                const h = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(l + n + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const c = h.add.tween(t).to({
                    x: e,
                    y: s
                }, l, Phaser.Easing.Circular.InOut, !0, n);
                return i.isNull(o) || i.isUndefined(o) || c.onComplete.addOnce(o, g), c
            }
            static move(t, e, s, l = 500, n = 0, o, g) {
                const h = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(l + n + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const c = h.add.tween(t).to({
                    x: e,
                    y: s
                }, l, Phaser.Easing.Linear.None, !0, n);
                return i.isNull(o) || i.isUndefined(o) || c.onComplete.addOnce(o, g), c
            }
            static moveAndRotate(t, e, s, l, n = 500, o = 0, g, h, c = !0) {
                const d = a.GameConfig.GAME;
                this.kill(t), c && t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(n + o + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const m = d.add.tween(t).to({
                    x: e,
                    y: s,
                    angle: l
                }, n, Phaser.Easing.Linear.None, !0, o);
                return i.isNull(g) || i.isUndefined(g) || m.onComplete.addOnce(g, h), m
            }
            static bounceIn(t, e, s, l = 500, n = 0, o, g) {
                const h = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(l + n + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const c = h.add.tween(t).to({
                    x: e,
                    y: s
                }, l, Phaser.Easing.Bounce.Out, !0, n);
                return i.isNull(o) || i.isUndefined(o) || c.onComplete.addOnce(o, g), c
            }
            static scaleOut(t, e = 500, s = 0, l, n) {
                const o = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(e + s + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const g = o.add.tween(t.scale).to({
                    x: 0,
                    y: 0
                }, e, Phaser.Easing.Linear.None, !0, s);
                return i.isNull(l) || i.isUndefined(l) || g.onComplete.addOnce(l, n), g
            }
            static fadeAndScaleIn(t, e = 500, s = 0, l, n) {
                const o = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(e + s + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const g = o.add.tween(t).to({
                        alpha: 1
                    }, e, Phaser.Easing.Linear.None, !0, s),
                    h = o.add.tween(t.scale).to({
                        x: 1,
                        y: 1
                    }, 2 * e, Phaser.Easing.Elastic.Out, !0, s);
                return i.isNull(l) || i.isUndefined(l) || h.onComplete.addOnce(l, n), [g, h]
            }
            static fadeAndScale(t, e, s, l = 500, n = 0, o, g) {
                const h = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(l + n + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const c = h.add.tween(t).to({
                        alpha: s
                    }, l, Phaser.Easing.Linear.None, !0, n),
                    d = h.add.tween(t.scale).to({
                        x: e,
                        y: e
                    }, 2 * l, Phaser.Easing.Linear.None, !0, n);
                return i.isNull(o) || i.isUndefined(o) || d.onComplete.addOnce(o, g), [c, d]
            }
            static blow(t, e = 500, s = 0, l, n) {
                const o = a.GameConfig.GAME;
                t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(e + s + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const g = o.add.tween(t).to({
                        alpha: 0
                    }, e, Phaser.Easing.Linear.None, !0, s + e - 50),
                    h = o.add.tween(t.scale).to({
                        x: 3,
                        y: 3
                    }, 2 * e, Phaser.Easing.Elastic.In, !0, s);
                return i.isNull(l) || i.isUndefined(l) || h.onComplete.addOnce(l, n), [g, h]
            }
            static moveAndScaleIn(t, e, s, l = 1, n = 500, o = 0, g, h) {
                const c = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(n + o + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const d = c.add.tween(t).to({
                        x: e,
                        y: s
                    }, n, Phaser.Easing.Linear.None, !0, o),
                    m = c.add.tween(t.scale).to({
                        x: l,
                        y: l
                    }, n, Phaser.Easing.Linear.None, !0, o);
                return i.isNull(g) || i.isUndefined(g) || m.onComplete.addOnce(g, h), [d, m]
            }
            static moveAndScaleOut(t, e, s, l = 0, n = 500, o = 0, g, h) {
                const c = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(n + o + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const d = c.add.tween(t).to({
                        x: e,
                        y: s
                    }, n, Phaser.Easing.Linear.None, !0, o),
                    m = c.add.tween(t.scale).to({
                        x: l,
                        y: l
                    }, n, Phaser.Easing.Linear.None, !0, o);
                return i.isNull(g) || i.isUndefined(g) || m.onComplete.addOnce(g, h), [d, m]
            }
            static fadeAndScaleOut(t, e = 500, s = 0, l, n) {
                const o = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(e + s + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const g = o.add.tween(t).to({
                        alpha: 0
                    }, e, Phaser.Easing.Linear.None, !0, s),
                    h = o.add.tween(t.scale).to({
                        x: 0,
                        y: 0
                    }, e, Phaser.Easing.Linear.None, !0, s);
                return i.isNull(l) || i.isUndefined(l) || h.onComplete.addOnce(l, n), [g, h]
            }
            static customFadeAndScaleIn(t, e = 1, s = 1, i = 500, l = 0, n, o) {
                const g = a.GameConfig.GAME;
                return this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(i + l + 5, () => {
                    t.inputEnabled = !0
                }, this)), [g.add.tween(t).to({
                    alpha: e
                }, i, Phaser.Easing.Linear.None, !0, l), g.add.tween(t.scale).to({
                    x: s,
                    y: s
                }, 2 * i, Phaser.Easing.Elastic.Out, !0, l)]
            }
            static slideIn(t, e, s = 1e3, l = 0, n, o) {
                const g = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(s + l + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const h = g.add.tween(t).to({
                    x: e
                }, s, Phaser.Easing.Circular.Out, !0, l);
                return i.isNull(n) || i.isUndefined(n) || h.onComplete.addOnce(n, o), h
            }
            static slideOut(t, e, s = 1e3, l = 0, n, o) {
                const g = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(s + l + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const h = g.add.tween(t).to({
                    x: e
                }, s, Phaser.Easing.Circular.In, !0, l);
                return i.isNull(n) || i.isUndefined(n) || h.onComplete.addOnce(n, o), h
            }
            static downIn(t, e, s = 1e3, l = 0, n, o) {
                const g = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(s + l + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const h = g.add.tween(t).to({
                    y: e
                }, s, Phaser.Easing.Circular.Out, !0, l);
                return i.isNull(n) || i.isUndefined(n) || h.onComplete.addOnce(n, o), h
            }
            static downOut(t, e, s = 1e3, l = 0, n, o) {
                const g = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(s + l + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const h = g.add.tween(t).to({
                    y: e
                }, s, Phaser.Easing.Circular.In, !0, l);
                return i.isNull(n) || i.isUndefined(n) || h.onComplete.addOnce(n, o), h
            }
            static moveAndScaleAndFade(t, e, s, l = 1, n = 1, o = 500, g = 0, h, c) {
                const d = a.GameConfig.GAME;
                this.kill(t), t.inputEnabled && (t.inputEnabled = !1, r.delayedCall(o + g + 5, () => {
                    t.inputEnabled = !0
                }, this));
                const m = d.add.tween(t).to({
                        x: e,
                        y: s,
                        alpha: n
                    }, o, Phaser.Easing.Linear.None, !0, g),
                    u = d.add.tween(t.scale).to({
                        x: l,
                        y: l
                    }, o, Phaser.Easing.Linear.None, !0, g);
                return i.isNull(h) || i.isUndefined(h) || u.onComplete.addOnce(h, c), [m, u]
            }
        }
        e.TweenUtils = r
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        ! function(t) {
            t[t.START_STATE = 0] = "START_STATE", t[t.COMIX_STATE = 1] = "COMIX_STATE", t[t.SELECT_STATE = 2] = "SELECT_STATE", t[t.MAKEUP_STATE = 3] = "MAKEUP_STATE", t[t.DRESS_STATE = 4] = "DRESS_STATE", t[t.DECOR_STATE = 5] = "DECOR_STATE", t[t.RESULT_STATE = 6] = "RESULT_STATE", t[t.MINIGAME_STATE = 7] = "MINIGAME_STATE", t[t.CROSS_STATE = 8] = "CROSS_STATE", t[t.FINAL_STATE = 9] = "FINAL_STATE"
        }(e.StateType || (e.StateType = {}))
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        ! function(t) {
            class e {
                static getName() {
                    return "background_template"
                }
                static getPNG() {
                    return s(26)
                }
            }
            t.ImagesBackgroundTemplate = e;
            class a {
                static getName() {
                    return "bg_min"
                }
                static getJPG() {
                    return s(27)
                }
            }
            t.ImagesBgMin = a;
            class i {
                static getName() {
                    return "bg"
                }
                static getJPG() {
                    return s(28)
                }
            }
            t.ImagesBg = i;
            class r {
                static getName() {
                    return "bg2_min"
                }
                static getJPG() {
                    return s(29)
                }
            }
            t.ImagesBg2Min = r;
            class l {
                static getName() {
                    return "bg2"
                }
                static getJPG() {
                    return s(30)
                }
            }
            t.ImagesBg2 = l;
            class n {
                static getName() {
                    return "bg3_min"
                }
                static getJPG() {
                    return s(31)
                }
            }
            t.ImagesBg3Min = n;
            class o {
                static getName() {
                    return "bg3"
                }
                static getJPG() {
                    return s(32)
                }
            }
            t.ImagesBg3 = o;
            class g {
                static getName() {
                    return "bg4_min"
                }
                static getJPG() {
                    return s(33)
                }
            }
            t.ImagesBg4Min = g;
            class h {
                static getName() {
                    return "bg4"
                }
                static getJPG() {
                    return s(34)
                }
            }
            t.ImagesBg4 = h;
            class c {
                static getName() {
                    return "bg5_min"
                }
                static getJPG() {
                    return s(35)
                }
            }
            t.ImagesBg5Min = c;
            class d {
                static getName() {
                    return "bg5"
                }
                static getJPG() {
                    return s(36)
                }
            }
            t.ImagesBg5 = d;
            class m {
                static getName() {
                    return "bg6_min"
                }
                static getJPG() {
                    return s(37)
                }
            }
            t.ImagesBg6Min = m;
            class u {
                static getName() {
                    return "bg6"
                }
                static getJPG() {
                    return s(38)
                }
            }
            t.ImagesBg6 = u;
            class p {
                static getName() {
                    return "preroll_du_min"
                }
                static getJPG() {
                    return s(39)
                }
            }
            t.ImagesPrerollDuMin = p;
            class A {
                static getName() {
                    return "preroll_du"
                }
                static getJPG() {
                    return s(40)
                }
            }
            t.ImagesPrerollDu = A;
            class S {
                static getName() {
                    return "preroll_fgc_min"
                }
                static getJPG() {
                    return s(41)
                }
            }
            t.ImagesPrerollFgcMin = S;
            class f {
                static getName() {
                    return "preroll_fgc"
                }
                static getJPG() {
                    return s(42)
                }
            }
            t.ImagesPrerollFgc = f;
            class C {
                static getName() {
                    return "preroll_mcg_min"
                }
                static getJPG() {
                    return s(43)
                }
            }
            t.ImagesPrerollMcgMin = C;
            class _ {
                static getName() {
                    return "preroll_mcg"
                }
                static getJPG() {
                    return s(44)
                }
            }
            t.ImagesPrerollMcg = _;
            class b {
                static getName() {
                    return "preroll2_mcg_min"
                }
                static getPNG() {
                    return s(45)
                }
            }
            t.ImagesPreroll2McgMin = b;
            class E {
                static getName() {
                    return "preroll2_mcg"
                }
                static getPNG() {
                    return s(46)
                }
            }
            t.ImagesPreroll2Mcg = E;
            class I {
                static getName() {
                    return "spin_min"
                }
                static getPNG() {
                    return s(47)
                }
            }
            t.ImagesSpinMin = I;
            class U {
                static getName() {
                    return "spin"
                }
                static getPNG() {
                    return s(48)
                }
            }
            t.ImagesSpin = U
        }(e.Images || (e.Images = {}));
        ! function(t) {
            class e {
                static getName() {
                    return "done_mcg.[165,132,2,0,0]_min"
                }
                static getPNG() {
                    return s(49)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsDoneMcg1651322Min = e;
            class a {
                static getName() {
                    return "done_mcg.[165,132,2,0,0]"
                }
                static getPNG() {
                    return s(50)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsDoneMcg1651322 = a;
            class i {
                static getName() {
                    return "l_arr_mcg.[165,132,2,0,0]_min"
                }
                static getPNG() {
                    return s(51)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsLArrMcg1651322Min = i;
            class r {
                static getName() {
                    return "l_arr_mcg.[165,132,2,0,0]"
                }
                static getPNG() {
                    return s(52)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsLArrMcg1651322 = r;
            class l {
                static getName() {
                    return "mmmm.[161,203,5,0,0]_min"
                }
                static getPNG() {
                    return s(53)
                }
                static getFrameWidth() {
                    return 161
                }
                static getFrameHeight() {
                    return 203
                }
                static getFrameMax() {
                    return 5
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsMmmm1612035Min = l;
            class n {
                static getName() {
                    return "mmmm.[161,203,5,0,0]"
                }
                static getPNG() {
                    return s(54)
                }
                static getFrameWidth() {
                    return 161
                }
                static getFrameHeight() {
                    return 203
                }
                static getFrameMax() {
                    return 5
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsMmmm1612035 = n;
            class o {
                static getName() {
                    return "more_mcg.[165,132,2,0,0]_min"
                }
                static getPNG() {
                    return s(55)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsMoreMcg1651322Min = o;
            class g {
                static getName() {
                    return "more_mcg.[165,132,2,0,0]"
                }
                static getPNG() {
                    return s(56)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsMoreMcg1651322 = g;
            class h {
                static getName() {
                    return "music_mcg.[165,132,2,0,0]_min"
                }
                static getPNG() {
                    return s(57)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsMusicMcg1651322Min = h;
            class c {
                static getName() {
                    return "music_mcg.[165,132,2,0,0]"
                }
                static getPNG() {
                    return s(58)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsMusicMcg1651322 = c;
            class d {
                static getName() {
                    return "music_off_mcg.[165,132,2,0,0]_min"
                }
                static getPNG() {
                    return s(59)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsMusicOffMcg1651322Min = d;
            class m {
                static getName() {
                    return "music_off_mcg.[165,132,2,0,0]"
                }
                static getPNG() {
                    return s(60)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsMusicOffMcg1651322 = m;
            class u {
                static getName() {
                    return "next_mcg.[173,132,2,0,0]_min"
                }
                static getPNG() {
                    return s(61)
                }
                static getFrameWidth() {
                    return 173
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsNextMcg1731322Min = u;
            class p {
                static getName() {
                    return "next_mcg.[173,132,2,0,0]"
                }
                static getPNG() {
                    return s(62)
                }
                static getFrameWidth() {
                    return 173
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsNextMcg1731322 = p;
            class A {
                static getName() {
                    return "photo_mcg.[165,132,2,0,0]_min"
                }
                static getPNG() {
                    return s(63)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsPhotoMcg1651322Min = A;
            class S {
                static getName() {
                    return "photo_mcg.[165,132,2,0,0]"
                }
                static getPNG() {
                    return s(64)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsPhotoMcg1651322 = S;
            class f {
                static getName() {
                    return "play_mcg.[165,132,2,0,0]_min"
                }
                static getPNG() {
                    return s(65)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsPlayMcg1651322Min = f;
            class C {
                static getName() {
                    return "play_mcg.[165,132,2,0,0]"
                }
                static getPNG() {
                    return s(66)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsPlayMcg1651322 = C;
            class _ {
                static getName() {
                    return "r_arr_mcg.[165,132,2,0,0]_min"
                }
                static getPNG() {
                    return s(67)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsRArrMcg1651322Min = _;
            class b {
                static getName() {
                    return "r_arr_mcg.[165,132,2,0,0]"
                }
                static getPNG() {
                    return s(68)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsRArrMcg1651322 = b;
            class E {
                static getName() {
                    return "replay_mcg.[165,132,2,0,0]_min"
                }
                static getPNG() {
                    return s(69)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsReplayMcg1651322Min = E;
            class I {
                static getName() {
                    return "replay_mcg.[165,132,2,0,0]"
                }
                static getPNG() {
                    return s(70)
                }
                static getFrameWidth() {
                    return 165
                }
                static getFrameHeight() {
                    return 132
                }
                static getFrameMax() {
                    return 2
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsReplayMcg1651322 = I;
            class U {
                static getName() {
                    return "snow_large.[64,64,6,0,0]"
                }
                static getPNG() {
                    return s(71)
                }
                static getFrameWidth() {
                    return 64
                }
                static getFrameHeight() {
                    return 64
                }
                static getFrameMax() {
                    return 6
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsSnowLarge64646 = U;
            class D {
                static getName() {
                    return "snow.[17,17,6,0,0]"
                }
                static getPNG() {
                    return s(72)
                }
                static getFrameWidth() {
                    return 17
                }
                static getFrameHeight() {
                    return 17
                }
                static getFrameMax() {
                    return 6
                }
                static getMargin() {
                    return 0
                }
                static getSpacing() {
                    return 0
                }
            }
            t.SpritesheetsSnow17176 = D
        }(e.Spritesheets || (e.Spritesheets = {}));
        ! function(t) {
            let e;
            ! function(t) {
                t[t.HB = "h_b_0.png"] = "HB", t[t.HB1 = "h_b_1.png"] = "HB1", t[t.HB2 = "h_b_2.png"] = "HB2", t[t.HB3 = "h_b_3.png"] = "HB3", t[t.HB5 = "h_b_5.png"] = "HB5", t[t.Hand = "hand.png"] = "Hand", t[t.Ht1 = "ht_1.png"] = "Ht1", t[t.J1 = "j_1.png"] = "J1", t[t.S = "s_0.png"] = "S", t[t.S1 = "s_1.png"] = "S1", t[t.S2 = "s_2.png"] = "S2", t[t.S3 = "s_3.png"] = "S3", t[t.S4 = "s_4.png"] = "S4", t[t.S5 = "s_5.png"] = "S5", t[t.S6 = "s_6.png"] = "S6"
            }(e || (e = {}));
            class a {
                static getName() {
                    return "doll_ariel_2_min"
                }
                static getJSONArray() {
                    return s(73)
                }
                static getPNG() {
                    return s(74)
                }
            }
            a.Frames = e, t.AtlasesDollAriel2Min = a;
            let i;
            ! function(t) {
                t[t.HB = "h_b_0.png"] = "HB", t[t.HB1 = "h_b_1.png"] = "HB1", t[t.HB2 = "h_b_2.png"] = "HB2", t[t.HB3 = "h_b_3.png"] = "HB3", t[t.HB5 = "h_b_5.png"] = "HB5", t[t.Hand = "hand.png"] = "Hand", t[t.Ht1 = "ht_1.png"] = "Ht1", t[t.J1 = "j_1.png"] = "J1", t[t.S = "s_0.png"] = "S", t[t.S1 = "s_1.png"] = "S1", t[t.S2 = "s_2.png"] = "S2", t[t.S3 = "s_3.png"] = "S3", t[t.S4 = "s_4.png"] = "S4", t[t.S5 = "s_5.png"] = "S5", t[t.S6 = "s_6.png"] = "S6"
            }(i || (i = {}));
            class r {
                static getName() {
                    return "doll_ariel_2"
                }
                static getJSONArray() {
                    return s(75)
                }
                static getPNG() {
                    return s(76)
                }
            }
            r.Frames = i, t.AtlasesDollAriel2 = r;
            let l;
            ! function(t) {
                t[t.Ac1 = "ac_1.png"] = "Ac1", t[t.Bb1 = "bb_1.png"] = "Bb1", t[t.Bb2 = "bb_2.png"] = "Bb2", t[t.Body = "body.png"] = "Body", t[t.D = "d_0.png"] = "D", t[t.D1 = "d_1.png"] = "D1", t[t.D2 = "d_2.png"] = "D2", t[t.D3 = "d_3.png"] = "D3", t[t.D4 = "d_4.png"] = "D4", t[t.D5 = "d_5.png"] = "D5", t[t.D6 = "d_6.png"] = "D6", t[t.D7 = "d_7.png"] = "D7", t[t.D8 = "d_8.png"] = "D8", t[t.Gs1 = "gs_1.png"] = "Gs1", t[t.H = "h_0.png"] = "H", t[t.H1 = "h_1.png"] = "H1", t[t.H2 = "h_2.png"] = "H2", t[t.H3 = "h_3.png"] = "H3", t[t.H4 = "h_4.png"] = "H4", t[t.H5 = "h_5.png"] = "H5", t[t.H6 = "h_6.png"] = "H6"
            }(l || (l = {}));
            class n {
                static getName() {
                    return "doll_ariel_min"
                }
                static getJSONArray() {
                    return s(77)
                }
                static getPNG() {
                    return s(78)
                }
            }
            n.Frames = l, t.AtlasesDollArielMin = n;
            let o;
            ! function(t) {
                t[t.Ac1 = "ac_1.png"] = "Ac1", t[t.Bb1 = "bb_1.png"] = "Bb1", t[t.Bb2 = "bb_2.png"] = "Bb2", t[t.Body = "body.png"] = "Body", t[t.D = "d_0.png"] = "D", t[t.D1 = "d_1.png"] = "D1", t[t.D2 = "d_2.png"] = "D2", t[t.D3 = "d_3.png"] = "D3", t[t.D4 = "d_4.png"] = "D4", t[t.D5 = "d_5.png"] = "D5", t[t.D6 = "d_6.png"] = "D6", t[t.D7 = "d_7.png"] = "D7", t[t.D8 = "d_8.png"] = "D8", t[t.Gs1 = "gs_1.png"] = "Gs1", t[t.H = "h_0.png"] = "H", t[t.H1 = "h_1.png"] = "H1", t[t.H2 = "h_2.png"] = "H2", t[t.H3 = "h_3.png"] = "H3", t[t.H4 = "h_4.png"] = "H4", t[t.H5 = "h_5.png"] = "H5", t[t.H6 = "h_6.png"] = "H6"
            }(o || (o = {}));
            class g {
                static getName() {
                    return "doll_ariel"
                }
                static getJSONArray() {
                    return s(79)
                }
                static getPNG() {
                    return s(80)
                }
            }
            g.Frames = o, t.AtlasesDollAriel = g;
            let h;
            ! function(t) {
                t[t.S = "s_0.png"] = "S", t[t.S1 = "s_1.png"] = "S1", t[t.S2 = "s_2.png"] = "S2", t[t.S3 = "s_3.png"] = "S3", t[t.S4 = "s_4.png"] = "S4", t[t.S5 = "s_5.png"] = "S5"
            }(h || (h = {}));
            class c {
                static getName() {
                    return "doll_eric_2_min"
                }
                static getJSONArray() {
                    return s(81)
                }
                static getPNG() {
                    return s(82)
                }
            }
            c.Frames = h, t.AtlasesDollEric2Min = c;
            let d;
            ! function(t) {
                t[t.S = "s_0.png"] = "S", t[t.S1 = "s_1.png"] = "S1", t[t.S2 = "s_2.png"] = "S2", t[t.S3 = "s_3.png"] = "S3", t[t.S4 = "s_4.png"] = "S4", t[t.S5 = "s_5.png"] = "S5"
            }(d || (d = {}));
            class m {
                static getName() {
                    return "doll_eric_2"
                }
                static getJSONArray() {
                    return s(83)
                }
                static getPNG() {
                    return s(84)
                }
            }
            m.Frames = d, t.AtlasesDollEric2 = m;
            let u;
            ! function(t) {
                t[t.Ac1 = "ac_1.png"] = "Ac1", t[t.Ac2 = "ac_2.png"] = "Ac2", t[t.Bb1 = "bb_1.png"] = "Bb1", t[t.Body = "body.png"] = "Body", t[t.D = "d_0.png"] = "D", t[t.D1 = "d_1.png"] = "D1", t[t.D2 = "d_2.png"] = "D2", t[t.D3 = "d_3.png"] = "D3", t[t.D4 = "d_4.png"] = "D4", t[t.D5 = "d_5.png"] = "D5", t[t.D6 = "d_6.png"] = "D6", t[t.Gs1 = "gs_1.png"] = "Gs1", t[t.H = "h_0.png"] = "H", t[t.H1 = "h_1.png"] = "H1", t[t.H2 = "h_2.png"] = "H2", t[t.H3 = "h_3.png"] = "H3", t[t.H4 = "h_4.png"] = "H4", t[t.H5 = "h_5.png"] = "H5", t[t.H6 = "h_6.png"] = "H6", t[t.HB = "h_b_0.png"] = "HB", t[t.Hand = "hand.png"] = "Hand"
            }(u || (u = {}));
            class p {
                static getName() {
                    return "doll_eric_min"
                }
                static getJSONArray() {
                    return s(85)
                }
                static getPNG() {
                    return s(86)
                }
            }
            p.Frames = u, t.AtlasesDollEricMin = p;
            let A;
            ! function(t) {
                t[t.Ac1 = "ac_1.png"] = "Ac1", t[t.Ac2 = "ac_2.png"] = "Ac2", t[t.Bb1 = "bb_1.png"] = "Bb1", t[t.Body = "body.png"] = "Body", t[t.D = "d_0.png"] = "D", t[t.D1 = "d_1.png"] = "D1", t[t.D2 = "d_2.png"] = "D2", t[t.D3 = "d_3.png"] = "D3", t[t.D4 = "d_4.png"] = "D4", t[t.D5 = "d_5.png"] = "D5", t[t.D6 = "d_6.png"] = "D6", t[t.Gs1 = "gs_1.png"] = "Gs1", t[t.H = "h_0.png"] = "H", t[t.H1 = "h_1.png"] = "H1", t[t.H2 = "h_2.png"] = "H2", t[t.H3 = "h_3.png"] = "H3", t[t.H4 = "h_4.png"] = "H4", t[t.H5 = "h_5.png"] = "H5", t[t.H6 = "h_6.png"] = "H6", t[t.HB = "h_b_0.png"] = "HB", t[t.Hand = "hand.png"] = "Hand"
            }(A || (A = {}));
            class S {
                static getName() {
                    return "doll_eric"
                }
                static getJSONArray() {
                    return s(87)
                }
                static getPNG() {
                    return s(88)
                }
            }
            S.Frames = A, t.AtlasesDollEric = S;
            let f;
            ! function(t) {
                t[t.Con1 = "con_1.png"] = "Con1", t[t.Con2 = "con_2.png"] = "Con2", t[t.Con3 = "con_3.png"] = "Con3", t[t.Con4 = "con_4.png"] = "Con4", t[t.Con5 = "con_5.png"] = "Con5", t[t.Dot1 = "dot_1.png"] = "Dot1", t[t.Dot2 = "dot_2.png"] = "Dot2", t[t.GStar1 = "g_star_1.png"] = "GStar1", t[t.GStar2 = "g_star_2.png"] = "GStar2", t[t.GStar3 = "g_star_3.png"] = "GStar3", t[t.Lep1 = "lep_1.png"] = "Lep1", t[t.Lep2 = "lep_2.png"] = "Lep2", t[t.Lep3 = "lep_3.png"] = "Lep3", t[t.Lep4 = "lep_4.png"] = "Lep4", t[t.Lep5 = "lep_5.png"] = "Lep5", t[t.Lep6 = "lep_6.png"] = "Lep6", t[t.Light = "light.png"] = "Light", t[t.Light2 = "light_2.png"] = "Light2", t[t.Light3 = "light_3.png"] = "Light3", t[t.Light4 = "light_4.png"] = "Light4", t[t.Light5 = "light_5.png"] = "Light5", t[t.Light6 = "light_6.png"] = "Light6", t[t.Light7 = "light_7.png"] = "Light7", t[t.Light8 = "light_8.png"] = "Light8", t[t.Projector = "projector.png"] = "Projector", t[t.Sn1 = "sn_1.png"] = "Sn1", t[t.Sn2 = "sn_2.png"] = "Sn2"
            }(f || (f = {}));
            class C {
                static getName() {
                    return "effects"
                }
                static getJSONArray() {
                    return s(89)
                }
                static getPNG() {
                    return s(90)
                }
            }
            C.Frames = f, t.AtlasesEffects = C;
            let _;
            ! function(t) {
                t[t.Dummy = "dummy.png"] = "Dummy", t[t.LeftDu = "left_du.png"] = "LeftDu", t[t.LogoDu = "logo_du.png"] = "LogoDu", t[t.MoreDu = "more_du.png"] = "MoreDu", t[t.More2Du = "more2_du.png"] = "More2Du", t[t.NextDu = "next_du.png"] = "NextDu", t[t.PhotoDu = "photo_du.png"] = "PhotoDu", t[t.PlayDu = "play_du.png"] = "PlayDu", t[t.ReplayDu = "replay_du.png"] = "ReplayDu", t[t.RightDu = "right_du.png"] = "RightDu", t[t.SkipDu = "skip_du.png"] = "SkipDu", t[t.SoundOffDu = "sound_off_du.png"] = "SoundOffDu", t[t.SoundOnDu = "sound_on_du.png"] = "SoundOnDu"
            }(_ || (_ = {}));
            class b {
                static getName() {
                    return "gui_du_min"
                }
                static getJSONArray() {
                    return s(91)
                }
                static getPNG() {
                    return s(92)
                }
            }
            b.Frames = _, t.AtlasesGuiDuMin = b;
            let E;
            ! function(t) {
                t[t.Dummy = "dummy.png"] = "Dummy", t[t.LeftDu = "left_du.png"] = "LeftDu", t[t.LogoDu = "logo_du.png"] = "LogoDu", t[t.MoreDu = "more_du.png"] = "MoreDu", t[t.More2Du = "more2_du.png"] = "More2Du", t[t.NextDu = "next_du.png"] = "NextDu", t[t.PhotoDu = "photo_du.png"] = "PhotoDu", t[t.PlayDu = "play_du.png"] = "PlayDu", t[t.ReplayDu = "replay_du.png"] = "ReplayDu", t[t.RightDu = "right_du.png"] = "RightDu", t[t.SkipDu = "skip_du.png"] = "SkipDu", t[t.SoundOffDu = "sound_off_du.png"] = "SoundOffDu", t[t.SoundOnDu = "sound_on_du.png"] = "SoundOnDu"
            }(E || (E = {}));
            class I {
                static getName() {
                    return "gui_du"
                }
                static getJSONArray() {
                    return s(93)
                }
                static getPNG() {
                    return s(94)
                }
            }
            I.Frames = E, t.AtlasesGuiDu = I;
            let U;
            ! function(t) {
                t[t.DoneFgc = "done_fgc.png"] = "DoneFgc", t[t.Dummy = "dummy.png"] = "Dummy", t[t.LArrFgc = "l_arr_fgc.png"] = "LArrFgc", t[t.LogoFgc = "logo_fgc.png"] = "LogoFgc", t[t.MoreFgc = "more_fgc.png"] = "MoreFgc", t[t.PhotoFgc = "photo_fgc.png"] = "PhotoFgc", t[t.PlayFgc = "play_fgc.png"] = "PlayFgc", t[t.RArrFgc = "r_arr_fgc.png"] = "RArrFgc", t[t.ReplayFgc = "replay_fgc.png"] = "ReplayFgc", t[t.SoundOffFgc = "sound_off_fgc.png"] = "SoundOffFgc", t[t.SoundOnFgc = "sound_on_fgc.png"] = "SoundOnFgc", t[t.StartFgc = "start_fgc.png"] = "StartFgc"
            }(U || (U = {}));
            class D {
                static getName() {
                    return "gui_fgc_min"
                }
                static getJSONArray() {
                    return s(95)
                }
                static getPNG() {
                    return s(96)
                }
            }
            D.Frames = U, t.AtlasesGuiFgcMin = D;
            let N;
            ! function(t) {
                t[t.DoneFgc = "done_fgc.png"] = "DoneFgc", t[t.Dummy = "dummy.png"] = "Dummy", t[t.LArrFgc = "l_arr_fgc.png"] = "LArrFgc", t[t.LogoFgc = "logo_fgc.png"] = "LogoFgc", t[t.MoreFgc = "more_fgc.png"] = "MoreFgc", t[t.PhotoFgc = "photo_fgc.png"] = "PhotoFgc", t[t.PlayFgc = "play_fgc.png"] = "PlayFgc", t[t.RArrFgc = "r_arr_fgc.png"] = "RArrFgc", t[t.ReplayFgc = "replay_fgc.png"] = "ReplayFgc", t[t.SoundOffFgc = "sound_off_fgc.png"] = "SoundOffFgc", t[t.SoundOnFgc = "sound_on_fgc.png"] = "SoundOnFgc", t[t.StartFgc = "start_fgc.png"] = "StartFgc"
            }(N || (N = {}));
            class P {
                static getName() {
                    return "gui_fgc"
                }
                static getJSONArray() {
                    return s(97)
                }
                static getPNG() {
                    return s(98)
                }
            }
            P.Frames = N, t.AtlasesGuiFgc = P;
            let y;
            ! function(t) {
                t[t.AgainMcg = "again_mcg.png"] = "AgainMcg", t[t.Dummy = "dummy.png"] = "Dummy", t[t.GoMcg = "go_mcg.png"] = "GoMcg", t[t.LogoMcg = "logo_mcg.png"] = "LogoMcg", t[t.SkipMcg = "skip_mcg.png"] = "SkipMcg"
            }(y || (y = {}));
            class G {
                static getName() {
                    return "gui_mcg_min"
                }
                static getJSONArray() {
                    return s(99)
                }
                static getPNG() {
                    return s(100)
                }
            }
            G.Frames = y, t.AtlasesGuiMcgMin = G;
            let O;
            ! function(t) {
                t[t.AgainMcg = "again_mcg.png"] = "AgainMcg", t[t.Dummy = "dummy.png"] = "Dummy", t[t.GoMcg = "go_mcg.png"] = "GoMcg", t[t.LogoMcg = "logo_mcg.png"] = "LogoMcg", t[t.SkipMcg = "skip_mcg.png"] = "SkipMcg"
            }(O || (O = {}));
            class M {
                static getName() {
                    return "gui_mcg"
                }
                static getJSONArray() {
                    return s(101)
                }
                static getPNG() {
                    return s(102)
                }
            }
            M.Frames = O, t.AtlasesGuiMcg = M;
            let T;
            ! function(t) {
                t[t.Icon1Du = "icon1_du.png"] = "Icon1Du", t[t.Icon2Du = "icon2_du.png"] = "Icon2Du", t[t.Icon3Du = "icon3_du.png"] = "Icon3Du", t[t.Icon4Du = "icon4_du.png"] = "Icon4Du", t[t.Icon5Du = "icon5_du.png"] = "Icon5Du", t[t.LogoDu = "logo_du.png"] = "LogoDu", t[t.ParticleGlowDu = "particle_glow_du.png"] = "ParticleGlowDu", t[t.PlayDownDu = "play_down_du.png"] = "PlayDownDu", t[t.PlayNormalDu = "play_normal_du.png"] = "PlayNormalDu", t[t.PlayOverDu = "play_over_du.png"] = "PlayOverDu", t[t.Progressbar1Du = "progressbar_1_du.png"] = "Progressbar1Du", t[t.Progressbar2Du = "progressbar_2_du.png"] = "Progressbar2Du"
            }(T || (T = {}));
            class w {
                static getName() {
                    return "preloader_atlas_du_min"
                }
                static getJSONArray() {
                    return s(103)
                }
                static getPNG() {
                    return s(104)
                }
            }
            w.Frames = T, t.AtlasesPreloaderAtlasDuMin = w;
            let F;
            ! function(t) {
                t[t.Icon1Du = "icon1_du.png"] = "Icon1Du", t[t.Icon2Du = "icon2_du.png"] = "Icon2Du", t[t.Icon3Du = "icon3_du.png"] = "Icon3Du", t[t.Icon4Du = "icon4_du.png"] = "Icon4Du", t[t.Icon5Du = "icon5_du.png"] = "Icon5Du", t[t.LogoDu = "logo_du.png"] = "LogoDu", t[t.ParticleGlowDu = "particle_glow_du.png"] = "ParticleGlowDu", t[t.PlayDownDu = "play_down_du.png"] = "PlayDownDu", t[t.PlayNormalDu = "play_normal_du.png"] = "PlayNormalDu", t[t.PlayOverDu = "play_over_du.png"] = "PlayOverDu", t[t.Progressbar1Du = "progressbar_1_du.png"] = "Progressbar1Du", t[t.Progressbar2Du = "progressbar_2_du.png"] = "Progressbar2Du"
            }(F || (F = {}));
            class x {
                static getName() {
                    return "preloader_atlas_du"
                }
                static getJSONArray() {
                    return s(105)
                }
                static getPNG() {
                    return s(106)
                }
            }
            x.Frames = F, t.AtlasesPreloaderAtlasDu = x;
            let v;
            ! function(t) {
                t[t.Icon1Fgc = "icon1_fgc.png"] = "Icon1Fgc", t[t.Icon2Fgc = "icon2_fgc.png"] = "Icon2Fgc", t[t.Icon3Fgc = "icon3_fgc.png"] = "Icon3Fgc", t[t.Icon4Fgc = "icon4_fgc.png"] = "Icon4Fgc", t[t.Icon5Fgc = "icon5_fgc.png"] = "Icon5Fgc", t[t.LogoFgc = "logo_fgc.png"] = "LogoFgc", t[t.ParticleGlowFgc = "particle_glow_fgc.png"] = "ParticleGlowFgc", t[t.PlayNormalFgc = "play_normal_fgc.png"] = "PlayNormalFgc", t[t.PlayOverFgc = "play_over_fgc.png"] = "PlayOverFgc", t[t.Progressbar1Fgc = "progressbar_1_fgc.png"] = "Progressbar1Fgc", t[t.Progressbar2Fgc = "progressbar_2_fgc.png"] = "Progressbar2Fgc"
            }(v || (v = {}));
            class B {
                static getName() {
                    return "preloader_atlas_fgc_min"
                }
                static getJSONArray() {
                    return s(107)
                }
                static getPNG() {
                    return s(108)
                }
            }
            B.Frames = v, t.AtlasesPreloaderAtlasFgcMin = B;
            let L;
            ! function(t) {
                t[t.Icon1Fgc = "icon1_fgc.png"] = "Icon1Fgc", t[t.Icon2Fgc = "icon2_fgc.png"] = "Icon2Fgc", t[t.Icon3Fgc = "icon3_fgc.png"] = "Icon3Fgc", t[t.Icon4Fgc = "icon4_fgc.png"] = "Icon4Fgc", t[t.Icon5Fgc = "icon5_fgc.png"] = "Icon5Fgc", t[t.LogoFgc = "logo_fgc.png"] = "LogoFgc", t[t.ParticleGlowFgc = "particle_glow_fgc.png"] = "ParticleGlowFgc", t[t.PlayNormalFgc = "play_normal_fgc.png"] = "PlayNormalFgc", t[t.PlayOverFgc = "play_over_fgc.png"] = "PlayOverFgc", t[t.Progressbar1Fgc = "progressbar_1_fgc.png"] = "Progressbar1Fgc", t[t.Progressbar2Fgc = "progressbar_2_fgc.png"] = "Progressbar2Fgc"
            }(L || (L = {}));
            class H {
                static getName() {
                    return "preloader_atlas_fgc"
                }
                static getJSONArray() {
                    return s(109)
                }
                static getPNG() {
                    return s(110)
                }
            }
            H.Frames = L, t.AtlasesPreloaderAtlasFgc = H;
            let k;
            ! function(t) {
                t[t.DollArm = "doll_arm"] = "DollArm", t[t.DollBody = "doll_body"] = "DollBody", t[t.DollEyes1 = "doll_eyes1"] = "DollEyes1", t[t.DollEyes2 = "doll_eyes2"] = "DollEyes2", t[t.DollEyes3 = "doll_eyes3"] = "DollEyes3", t[t.DollHairback = "doll_hairback"] = "DollHairback", t[t.DollHand = "doll_hand"] = "DollHand", t[t.DollHead = "doll_head"] = "DollHead", t[t.DollKiss = "doll_kiss"] = "DollKiss", t[t.DollLips = "doll_lips"] = "DollLips", t[t.DressupMcg = "dressup_mcg.png"] = "DressupMcg", t[t.Flash = "flash"] = "Flash", t[t.HairMcg = "hair_mcg.png"] = "HairMcg", t[t.LogoMcg = "logo_mcg.png"] = "LogoMcg", t[t.LogoGlowMcg = "logo_glow_mcg.png"] = "LogoGlowMcg", t[t.MakeupMcg = "makeup_mcg.png"] = "MakeupMcg", t[t.ParticleCrownMcg = "particle_crown_mcg.png"] = "ParticleCrownMcg", t[t.ParticleGlowMcg = "particle_glow_mcg.png"] = "ParticleGlowMcg", t[t.PrincessMcg = "princess_mcg.png"] = "PrincessMcg", t[t.Progressbar1Mcg = "progressbar_1_mcg.png"] = "Progressbar1Mcg", t[t.Progressbar2Mcg = "progressbar_2_mcg.png"] = "Progressbar2Mcg"
            }(k || (k = {}));
            class R {
                static getName() {
                    return "preloader_atlas_mcg_min"
                }
                static getJSONArray() {
                    return s(111)
                }
                static getPNG() {
                    return s(112)
                }
            }
            R.Frames = k, t.AtlasesPreloaderAtlasMcgMin = R;
            let j;
            ! function(t) {
                t[t.DollArm = "doll_arm"] = "DollArm", t[t.DollBody = "doll_body"] = "DollBody", t[t.DollEyes1 = "doll_eyes1"] = "DollEyes1", t[t.DollEyes2 = "doll_eyes2"] = "DollEyes2", t[t.DollEyes3 = "doll_eyes3"] = "DollEyes3", t[t.DollHairback = "doll_hairback"] = "DollHairback", t[t.DollHand = "doll_hand"] = "DollHand", t[t.DollHead = "doll_head"] = "DollHead", t[t.DollKiss = "doll_kiss"] = "DollKiss", t[t.DollLips = "doll_lips"] = "DollLips", t[t.DressupMcg = "dressup_mcg.png"] = "DressupMcg", t[t.Flash = "flash"] = "Flash", t[t.HairMcg = "hair_mcg.png"] = "HairMcg", t[t.LogoMcg = "logo_mcg.png"] = "LogoMcg", t[t.LogoGlowMcg = "logo_glow_mcg.png"] = "LogoGlowMcg", t[t.MakeupMcg = "makeup_mcg.png"] = "MakeupMcg", t[t.ParticleCrownMcg = "particle_crown_mcg.png"] = "ParticleCrownMcg", t[t.ParticleGlowMcg = "particle_glow_mcg.png"] = "ParticleGlowMcg", t[t.PrincessMcg = "princess_mcg.png"] = "PrincessMcg", t[t.Progressbar1Mcg = "progressbar_1_mcg.png"] = "Progressbar1Mcg", t[t.Progressbar2Mcg = "progressbar_2_mcg.png"] = "Progressbar2Mcg"
            }(j || (j = {}));
            class J {
                static getName() {
                    return "preloader_atlas_mcg"
                }
                static getJSONArray() {
                    return s(113)
                }
                static getPNG() {
                    return s(114)
                }
            }
            J.Frames = j, t.AtlasesPreloaderAtlasMcg = J;
            let W;
            ! function(t) {
                t[t.Part1 = "part_1.png"] = "Part1", t[t.Part2 = "part_2.png"] = "Part2", t[t.Stars1 = "stars_1.png"] = "Stars1", t[t.Stars2 = "stars_2.png"] = "Stars2", t[t.Vs = "vs.png"] = "Vs"
            }(W || (W = {}));
            class $ {
                static getName() {
                    return "saver_min"
                }
                static getJSONArray() {
                    return s(115)
                }
                static getPNG() {
                    return s(116)
                }
            }
            $.Frames = W, t.AtlasesSaverMin = $;
            let X;
            ! function(t) {
                t[t.Part1 = "part_1.png"] = "Part1", t[t.Part2 = "part_2.png"] = "Part2", t[t.Stars1 = "stars_1.png"] = "Stars1", t[t.Stars2 = "stars_2.png"] = "Stars2", t[t.Vs = "vs.png"] = "Vs"
            }(X || (X = {}));
            class z {
                static getName() {
                    return "saver"
                }
                static getJSONArray() {
                    return s(117)
                }
                static getPNG() {
                    return s(118)
                }
            }
            z.Frames = X, t.AtlasesSaver = z;
            let V;
            ! function(t) {
                t[t.Cl1 = "cl_1.png"] = "Cl1", t[t.Cl2 = "cl_2.png"] = "Cl2", t[t.Cl3 = "cl_3.png"] = "Cl3", t[t.ClSm1 = "cl_sm_1.png"] = "ClSm1", t[t.ClSm2 = "cl_sm_2.png"] = "ClSm2", t[t.Gr1 = "gr_1.png"] = "Gr1", t[t.Gr2 = "gr_2.png"] = "Gr2"
            }(V || (V = {}));
            class K {
                static getName() {
                    return "state_comix_min"
                }
                static getJSONArray() {
                    return s(119)
                }
                static getPNG() {
                    return s(120)
                }
            }
            K.Frames = V, t.AtlasesStateComixMin = K;
            let Y;
            ! function(t) {
                t[t.Cl1 = "cl_1.png"] = "Cl1", t[t.Cl2 = "cl_2.png"] = "Cl2", t[t.Cl3 = "cl_3.png"] = "Cl3", t[t.ClSm1 = "cl_sm_1.png"] = "ClSm1", t[t.ClSm2 = "cl_sm_2.png"] = "ClSm2", t[t.Gr1 = "gr_1.png"] = "Gr1", t[t.Gr2 = "gr_2.png"] = "Gr2"
            }(Y || (Y = {}));
            class q {
                static getName() {
                    return "state_comix"
                }
                static getJSONArray() {
                    return s(121)
                }
                static getPNG() {
                    return s(122)
                }
            }
            q.Frames = Y, t.AtlasesStateComix = q;
            let Z;
            ! function(t) {
                t[t.Ar1 = "ar_1.png"] = "Ar1", t[t.Ar2 = "ar_2.png"] = "Ar2", t[t.Ar3 = "ar_3.png"] = "Ar3", t[t.Ar4 = "ar_4.png"] = "Ar4", t[t.ArCon1 = "ar_con_1.png"] = "ArCon1", t[t.ArCon2 = "ar_con_2.png"] = "ArCon2", t[t.ArCon3 = "ar_con_3.png"] = "ArCon3", t[t.ArCon4 = "ar_con_4.png"] = "ArCon4", t[t.ArItem1 = "ar_item_1.png"] = "ArItem1", t[t.ArItem2 = "ar_item_2.png"] = "ArItem2", t[t.ArItem3 = "ar_item_3.png"] = "ArItem3", t[t.ArItem4 = "ar_item_4.png"] = "ArItem4", t[t.Box11 = "box_1_1.png"] = "Box11", t[t.Box12 = "box_1_2.png"] = "Box12", t[t.Box13 = "box_1_3.png"] = "Box13", t[t.Box14 = "box_1_4.png"] = "Box14", t[t.Box21 = "box_2_1.png"] = "Box21", t[t.Box22 = "box_2_2.png"] = "Box22", t[t.Box23 = "box_2_3.png"] = "Box23", t[t.Box24 = "box_2_4.png"] = "Box24", t[t.Er1 = "er_1.png"] = "Er1", t[t.Er2 = "er_2.png"] = "Er2", t[t.Er3 = "er_3.png"] = "Er3", t[t.Er4 = "er_4.png"] = "Er4", t[t.ErCon1 = "er_con_1.png"] = "ErCon1", t[t.ErCon2 = "er_con_2.png"] = "ErCon2", t[t.ErCon3 = "er_con_3.png"] = "ErCon3", t[t.ErCon4 = "er_con_4.png"] = "ErCon4", t[t.ErItem1 = "er_item_1.png"] = "ErItem1", t[t.ErItem2 = "er_item_2.png"] = "ErItem2", t[t.ErItem3 = "er_item_3.png"] = "ErItem3", t[t.ErItem4 = "er_item_4.png"] = "ErItem4"
            }(Z || (Z = {}));
            class Q {
                static getName() {
                    return "state_decor_min"
                }
                static getJSONArray() {
                    return s(123)
                }
                static getPNG() {
                    return s(124)
                }
            }
            Q.Frames = Z, t.AtlasesStateDecorMin = Q;
            let tt;
            ! function(t) {
                t[t.Ar1 = "ar_1.png"] = "Ar1", t[t.Ar2 = "ar_2.png"] = "Ar2", t[t.Ar3 = "ar_3.png"] = "Ar3", t[t.Ar4 = "ar_4.png"] = "Ar4", t[t.ArCon1 = "ar_con_1.png"] = "ArCon1", t[t.ArCon2 = "ar_con_2.png"] = "ArCon2", t[t.ArCon3 = "ar_con_3.png"] = "ArCon3", t[t.ArCon4 = "ar_con_4.png"] = "ArCon4", t[t.ArItem1 = "ar_item_1.png"] = "ArItem1", t[t.ArItem2 = "ar_item_2.png"] = "ArItem2", t[t.ArItem3 = "ar_item_3.png"] = "ArItem3", t[t.ArItem4 = "ar_item_4.png"] = "ArItem4", t[t.Box11 = "box_1_1.png"] = "Box11", t[t.Box12 = "box_1_2.png"] = "Box12", t[t.Box13 = "box_1_3.png"] = "Box13", t[t.Box14 = "box_1_4.png"] = "Box14", t[t.Box21 = "box_2_1.png"] = "Box21", t[t.Box22 = "box_2_2.png"] = "Box22", t[t.Box23 = "box_2_3.png"] = "Box23", t[t.Box24 = "box_2_4.png"] = "Box24", t[t.Er1 = "er_1.png"] = "Er1", t[t.Er2 = "er_2.png"] = "Er2", t[t.Er3 = "er_3.png"] = "Er3", t[t.Er4 = "er_4.png"] = "Er4", t[t.ErCon1 = "er_con_1.png"] = "ErCon1", t[t.ErCon2 = "er_con_2.png"] = "ErCon2", t[t.ErCon3 = "er_con_3.png"] = "ErCon3", t[t.ErCon4 = "er_con_4.png"] = "ErCon4", t[t.ErItem1 = "er_item_1.png"] = "ErItem1", t[t.ErItem2 = "er_item_2.png"] = "ErItem2", t[t.ErItem3 = "er_item_3.png"] = "ErItem3", t[t.ErItem4 = "er_item_4.png"] = "ErItem4"
            }(tt || (tt = {}));
            class et {
                static getName() {
                    return "state_decor"
                }
                static getJSONArray() {
                    return s(125)
                }
                static getPNG() {
                    return s(126)
                }
            }
            et.Frames = tt, t.AtlasesStateDecor = et;
            let st;
            ! function(t) {
                t[t.Acs1 = "acs_1.png"] = "Acs1", t[t.Bag1 = "bag_1.png"] = "Bag1", t[t.Bag2 = "bag_2.png"] = "Bag2", t[t.Chest = "chest.png"] = "Chest", t[t.Dress1 = "dress_1.png"] = "Dress1", t[t.Dress2 = "dress_2.png"] = "Dress2", t[t.Dress3 = "dress_3.png"] = "Dress3", t[t.Dress4 = "dress_4.png"] = "Dress4", t[t.Dress5 = "dress_5.png"] = "Dress5", t[t.Dress6 = "dress_6.png"] = "Dress6", t[t.Dress7 = "dress_7.png"] = "Dress7", t[t.Dress8 = "dress_8.png"] = "Dress8", t[t.Glass1 = "glass_1.png"] = "Glass1", t[t.Hair1 = "hair_1.png"] = "Hair1", t[t.Hair2 = "hair_2.png"] = "Hair2", t[t.Hair3 = "hair_3.png"] = "Hair3", t[t.Hair4 = "hair_4.png"] = "Hair4", t[t.Hair5 = "hair_5.png"] = "Hair5", t[t.Hair6 = "hair_6.png"] = "Hair6", t[t.Hat1 = "hat_1.png"] = "Hat1", t[t.Jew1 = "jew_1.png"] = "Jew1", t[t.Lb = "lb.png"] = "Lb", t[t.Mmmm = "mmmm.png"] = "Mmmm", t[t.Rb = "rb.png"] = "Rb", t[t.Shelf1 = "shelf_1.png"] = "Shelf1", t[t.Shelf2 = "shelf_2.png"] = "Shelf2", t[t.Shelf3 = "shelf_3.png"] = "Shelf3", t[t.Shoe1 = "shoe_1.png"] = "Shoe1", t[t.Shoe2 = "shoe_2.png"] = "Shoe2", t[t.Shoe3 = "shoe_3.png"] = "Shoe3", t[t.Shoe4 = "shoe_4.png"] = "Shoe4", t[t.Shoe5 = "shoe_5.png"] = "Shoe5", t[t.Shoe6 = "shoe_6.png"] = "Shoe6"
            }(st || (st = {}));
            class at {
                static getName() {
                    return "state_dress_1_min"
                }
                static getJSONArray() {
                    return s(127)
                }
                static getPNG() {
                    return s(128)
                }
            }
            at.Frames = st, t.AtlasesStateDress1Min = at;
            let it;
            ! function(t) {
                t[t.Acs1 = "acs_1.png"] = "Acs1", t[t.Bag1 = "bag_1.png"] = "Bag1", t[t.Bag2 = "bag_2.png"] = "Bag2", t[t.Chest = "chest.png"] = "Chest", t[t.Dress1 = "dress_1.png"] = "Dress1", t[t.Dress2 = "dress_2.png"] = "Dress2", t[t.Dress3 = "dress_3.png"] = "Dress3", t[t.Dress4 = "dress_4.png"] = "Dress4", t[t.Dress5 = "dress_5.png"] = "Dress5", t[t.Dress6 = "dress_6.png"] = "Dress6", t[t.Dress7 = "dress_7.png"] = "Dress7", t[t.Dress8 = "dress_8.png"] = "Dress8", t[t.Glass1 = "glass_1.png"] = "Glass1", t[t.Hair1 = "hair_1.png"] = "Hair1", t[t.Hair2 = "hair_2.png"] = "Hair2", t[t.Hair3 = "hair_3.png"] = "Hair3", t[t.Hair4 = "hair_4.png"] = "Hair4", t[t.Hair5 = "hair_5.png"] = "Hair5", t[t.Hair6 = "hair_6.png"] = "Hair6", t[t.Hat1 = "hat_1.png"] = "Hat1", t[t.Jew1 = "jew_1.png"] = "Jew1", t[t.Lb = "lb.png"] = "Lb", t[t.Mmmm = "mmmm.png"] = "Mmmm", t[t.Rb = "rb.png"] = "Rb", t[t.Shelf1 = "shelf_1.png"] = "Shelf1", t[t.Shelf2 = "shelf_2.png"] = "Shelf2", t[t.Shelf3 = "shelf_3.png"] = "Shelf3", t[t.Shoe1 = "shoe_1.png"] = "Shoe1", t[t.Shoe2 = "shoe_2.png"] = "Shoe2", t[t.Shoe3 = "shoe_3.png"] = "Shoe3", t[t.Shoe4 = "shoe_4.png"] = "Shoe4", t[t.Shoe5 = "shoe_5.png"] = "Shoe5", t[t.Shoe6 = "shoe_6.png"] = "Shoe6"
            }(it || (it = {}));
            class rt {
                static getName() {
                    return "state_dress_1"
                }
                static getJSONArray() {
                    return s(129)
                }
                static getPNG() {
                    return s(130)
                }
            }
            rt.Frames = it, t.AtlasesStateDress1 = rt;
            let lt;
            ! function(t) {
                t[t.Acs1 = "acs_1.png"] = "Acs1", t[t.Acs2 = "acs_2.png"] = "Acs2", t[t.Bag1 = "bag_1.png"] = "Bag1", t[t.Chest = "chest.png"] = "Chest", t[t.Dress1 = "dress_1.png"] = "Dress1", t[t.Dress2 = "dress_2.png"] = "Dress2", t[t.Dress3 = "dress_3.png"] = "Dress3", t[t.Dress4 = "dress_4.png"] = "Dress4", t[t.Dress5 = "dress_5.png"] = "Dress5", t[t.Dress6 = "dress_6.png"] = "Dress6", t[t.Glass1 = "glass_1.png"] = "Glass1", t[t.Hair1 = "hair_1.png"] = "Hair1", t[t.Hair2 = "hair_2.png"] = "Hair2", t[t.Hair3 = "hair_3.png"] = "Hair3", t[t.Hair4 = "hair_4.png"] = "Hair4", t[t.Hair5 = "hair_5.png"] = "Hair5", t[t.Hair6 = "hair_6.png"] = "Hair6", t[t.Lb = "lb.png"] = "Lb", t[t.Mmmm = "mmmm.png"] = "Mmmm", t[t.Rb = "rb.png"] = "Rb", t[t.Shoe1 = "shoe_1.png"] = "Shoe1", t[t.Shoe2 = "shoe_2.png"] = "Shoe2", t[t.Shoe3 = "shoe_3.png"] = "Shoe3", t[t.Shoe4 = "shoe_4.png"] = "Shoe4", t[t.Shoe5 = "shoe_5.png"] = "Shoe5"
            }(lt || (lt = {}));
            class nt {
                static getName() {
                    return "state_dress_2_min"
                }
                static getJSONArray() {
                    return s(131)
                }
                static getPNG() {
                    return s(132)
                }
            }
            nt.Frames = lt, t.AtlasesStateDress2Min = nt;
            let ot;
            ! function(t) {
                t[t.Acs1 = "acs_1.png"] = "Acs1", t[t.Acs2 = "acs_2.png"] = "Acs2", t[t.Bag1 = "bag_1.png"] = "Bag1", t[t.Chest = "chest.png"] = "Chest", t[t.Dress1 = "dress_1.png"] = "Dress1", t[t.Dress2 = "dress_2.png"] = "Dress2", t[t.Dress3 = "dress_3.png"] = "Dress3", t[t.Dress4 = "dress_4.png"] = "Dress4", t[t.Dress5 = "dress_5.png"] = "Dress5", t[t.Dress6 = "dress_6.png"] = "Dress6", t[t.Glass1 = "glass_1.png"] = "Glass1", t[t.Hair1 = "hair_1.png"] = "Hair1", t[t.Hair2 = "hair_2.png"] = "Hair2", t[t.Hair3 = "hair_3.png"] = "Hair3", t[t.Hair4 = "hair_4.png"] = "Hair4", t[t.Hair5 = "hair_5.png"] = "Hair5", t[t.Hair6 = "hair_6.png"] = "Hair6", t[t.Lb = "lb.png"] = "Lb", t[t.Mmmm = "mmmm.png"] = "Mmmm", t[t.Rb = "rb.png"] = "Rb", t[t.Shoe1 = "shoe_1.png"] = "Shoe1", t[t.Shoe2 = "shoe_2.png"] = "Shoe2", t[t.Shoe3 = "shoe_3.png"] = "Shoe3", t[t.Shoe4 = "shoe_4.png"] = "Shoe4", t[t.Shoe5 = "shoe_5.png"] = "Shoe5"
            }(ot || (ot = {}));
            class gt {
                static getName() {
                    return "state_dress_2"
                }
                static getJSONArray() {
                    return s(133)
                }
                static getPNG() {
                    return s(134)
                }
            }
            gt.Frames = ot, t.AtlasesStateDress2 = gt;
            let ht;
            ! function(t) {
                t[t.Ban1 = "ban_1.png"] = "Ban1", t[t.Ban2 = "ban_2.png"] = "Ban2", t[t.Cl1 = "cl_1.png"] = "Cl1", t[t.Cl2 = "cl_2.png"] = "Cl2", t[t.ClSm1 = "cl_sm_1.png"] = "ClSm1", t[t.ClSm2 = "cl_sm_2.png"] = "ClSm2", t[t.Gr1 = "gr_1.png"] = "Gr1", t[t.Gr2 = "gr_2.png"] = "Gr2"
            }(ht || (ht = {}));
            class ct {
                static getName() {
                    return "state_final_min"
                }
                static getJSONArray() {
                    return s(135)
                }
                static getPNG() {
                    return s(136)
                }
            }
            ct.Frames = ht, t.AtlasesStateFinalMin = ct;
            let dt;
            ! function(t) {
                t[t.Ban1 = "ban_1.png"] = "Ban1", t[t.Ban2 = "ban_2.png"] = "Ban2", t[t.Cl1 = "cl_1.png"] = "Cl1", t[t.Cl2 = "cl_2.png"] = "Cl2", t[t.ClSm1 = "cl_sm_1.png"] = "ClSm1", t[t.ClSm2 = "cl_sm_2.png"] = "ClSm2", t[t.Gr1 = "gr_1.png"] = "Gr1", t[t.Gr2 = "gr_2.png"] = "Gr2"
            }(dt || (dt = {}));
            class mt {
                static getName() {
                    return "state_final"
                }
                static getJSONArray() {
                    return s(137)
                }
                static getPNG() {
                    return s(138)
                }
            }
            mt.Frames = dt, t.AtlasesStateFinal = mt;
            let ut;
            ! function(t) {
                t[t.Gr1 = "gr_1.png"] = "Gr1", t[t.Gr2 = "gr_2.png"] = "Gr2", t[t.Gr3B = "gr_3_b.png"] = "Gr3B", t[t.Gr3F = "gr_3_f.png"] = "Gr3F", t[t.Gr3H1 = "gr_3_h_1.png"] = "Gr3H1", t[t.Gr3H2 = "gr_3_h_2.png"] = "Gr3H2", t[t.Gr3H3 = "gr_3_h_3.png"] = "Gr3H3", t[t.MoreE = "more_e.png"] = "MoreE", t[t.Sp1 = "sp_1.png"] = "Sp1", t[t.Sp2 = "sp_2.png"] = "Sp2", t[t.Title = "title.png"] = "Title"
            }(ut || (ut = {}));
            class pt {
                static getName() {
                    return "state_start_min"
                }
                static getJSONArray() {
                    return s(139)
                }
                static getPNG() {
                    return s(140)
                }
            }
            pt.Frames = ut, t.AtlasesStateStartMin = pt;
            let At;
            ! function(t) {
                t[t.Gr1 = "gr_1.png"] = "Gr1", t[t.Gr2 = "gr_2.png"] = "Gr2", t[t.Gr3B = "gr_3_b.png"] = "Gr3B", t[t.Gr3F = "gr_3_f.png"] = "Gr3F", t[t.Gr3H1 = "gr_3_h_1.png"] = "Gr3H1", t[t.Gr3H2 = "gr_3_h_2.png"] = "Gr3H2", t[t.Gr3H3 = "gr_3_h_3.png"] = "Gr3H3", t[t.MoreE = "more_e.png"] = "MoreE", t[t.Sp1 = "sp_1.png"] = "Sp1", t[t.Sp2 = "sp_2.png"] = "Sp2", t[t.Title = "title.png"] = "Title"
            }(At || (At = {}));
            class St {
                static getName() {
                    return "state_start"
                }
                static getJSONArray() {
                    return s(141)
                }
                static getPNG() {
                    return s(142)
                }
            }
            St.Frames = At, t.AtlasesStateStart = St
        }(e.Atlases || (e.Atlases = {}));
        var a;
        ! function(t) {
            class i {
                static getName() {
                    return "main_theme"
                }
                static getMP3() {
                    return s(143)
                }
            }(a = e.Audio || (e.Audio = {})).AudioMainTheme = i
        }();
        e.Audiosprites || (e.Audiosprites = {});
        (e.GoogleWebFonts || (e.GoogleWebFonts = {})).Anton = "Anton";
        e.CustomWebFonts || (e.CustomWebFonts = {});
        e.BitmapFonts || (e.BitmapFonts = {});
        var i;
        ! function(t) {
            class a {
                static getName() {
                    return "doll"
                }
                static getJSON() {
                    return s(144)
                }
            }(i = e.JSON || (e.JSON = {})).JsonDoll = a
        }();
        e.XML || (e.XML = {});
        e.Text || (e.Text = {});
        ! function(t) {
            class e {
                static getName() {
                    return "BlurX"
                }
                static getJS() {
                    return s(145)
                }
            }
            t.ScriptsBlurX = e;
            class a {
                static getName() {
                    return "BlurY"
                }
                static getJS() {
                    return s(146)
                }
            }
            t.ScriptsBlurY = a;
            class i {
                static getName() {
                    return "phaser-ads"
                }
                static getJS() {
                    return s(147)
                }
            }
            t.ScriptsPhaserAds = i;
            class r {
                static getName() {
                    return "spriter"
                }
                static getJS() {
                    return s(148)
                }
            }
            t.ScriptsSpriter = r
        }(e.Scripts || (e.Scripts = {}));
        e.Shaders || (e.Shaders = {});
        e.Misc || (e.Misc = {})
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(163),
            i = s(164),
            r = s(19),
            l = s(0),
            n = s(165),
            o = s(166);
        class g {
            static makeLaser(t) {
                let e;
                switch (t) {
                    case a.LaserType.DOUBLE_LASER:
                        e = new i.DoubleLaser;
                        break;
                    case a.LaserType.TRIPLE_LASER:
                        e = new n.TripleLaser;
                        break;
                    case a.LaserType.PENTA_LASER:
                        e = new o.PentaLaser
                }
                return e
            }
            static makeGlowAnimation(t = 16777215, e = 1e3, s = !0, a = 99999, i = 350) {
                const n = r.FilterUtils.makeFilter(t, i, i);
                n.outerStrength = 0, n.innerStrength = 0;
                return l.GameConfig.GAME.add.tween(n).to({
                    outerStrength: 3,
                    innerStrength: 2
                }, e, Phaser.Easing.Linear.None, !0, 0, a).yoyo(s), n
            }
            static makeLightGlowAnimation(t = 16777215, e = 1e3, s = !0, a = 99999, i = 350) {
                const n = r.FilterUtils.makeFilter(t, i, i);
                n.outerStrength = 0, n.innerStrength = 0;
                return l.GameConfig.GAME.add.tween(n).to({
                    outerStrength: 2,
                    innerStrength: 1
                }, e, Phaser.Easing.Linear.None, !0, 0, a).yoyo(s), n
            }
            static makeVeryLightGlowAnimation(t = 16777215, e = 1e3, s = !0, a = 99999, i = 350) {
                const n = r.FilterUtils.makeFilter(t, i, i);
                n.outerStrength = 0, n.innerStrength = 0;
                return l.GameConfig.GAME.add.tween(n).to({
                    outerStrength: 1,
                    innerStrength: .5
                }, e, Phaser.Easing.Linear.None, !0, 0, a).yoyo(s), n
            }
            static makeScaleAnimation(t, e = 1.05, s = 1e3, a = !0, i = 350) {
                return l.GameConfig.GAME.add.tween(t.scale).to({
                    x: e,
                    y: e
                }, s, Phaser.Easing.Linear.None, !0, 0, 99999).yoyo(a)
            }
            static makeShootAnimation(t, e = 300) {
                const s = l.GameConfig.GAME;
                return 0 !== t.alpha && (t.alpha = 0), s.add.tween(t).to({
                    alpha: 1
                }, e, Phaser.Easing.Linear.None, !0, 0, 0).yoyo(!0)
            }
            static makeAlphaAnimation(t, e = 1, s = 500, a = !0) {
                return l.GameConfig.GAME.add.tween(t).to({
                    alpha: e
                }, s, Phaser.Easing.Linear.None, !0, 0, 99999).yoyo(a)
            }
            static makeMoveAnimation(t, e, s, a = 500, i = !0) {
                return l.GameConfig.GAME.add.tween(t).to({
                    x: e,
                    y: s
                }, a, Phaser.Easing.Linear.None, !0, 0, 99999).yoyo(i)
            }
            static makeLightRotateAnimation(t, e = 400, s = 10) {
                const a = l.GameConfig.GAME,
                    i = a.add.tween(t).to({
                        angle: s
                    }, e, Phaser.Easing.Linear.None, !0),
                    r = a.add.tween(t).to({
                        angle: -s
                    }, 2 * e, Phaser.Easing.Linear.None, !1),
                    n = a.add.tween(t).to({
                        angle: 0
                    }, e, Phaser.Easing.Linear.None, !1);
                i.chain(r), r.chain(n), n.chain(i)
            }
            static makeRotateAnimation(t, e = 400, s = 10, a = 4) {
                l.GameConfig.GAME.add.tween(t).to({
                    angle: s
                }, e, Phaser.Easing.Linear.None, !0, 0, a, !0)
            }
            static makeNeonAnimation(t, e = 250) {
                const s = l.GameConfig.GAME,
                    a = s.add.tween(t).to({
                        alpha: .25
                    }, 3 * e, Phaser.Easing.Linear.None, !0),
                    i = s.add.tween(t).to({
                        alpha: 1
                    }, 3 * e, Phaser.Easing.Bounce.InOut, !1),
                    r = s.add.tween(t).to({
                        alpha: .05
                    }, e, Phaser.Easing.Linear.None, !1, 500),
                    n = s.add.tween(t).to({
                        alpha: 1
                    }, 5 * e, Phaser.Easing.Bounce.InOut, !1);
                a.chain(i), i.chain(r), r.chain(n), n.chain(a)
            }
        }
        e.EffectUtils = g
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(6);
        class i {
            static loadImages() {
                for (let t in a.Images)
                    if (!this.game.cache.checkImageKey(a.Images[t].getName()))
                        for (let e of Object.getOwnPropertyNames(a.Images[t])) "getName" !== e && e.includes("get") && this.game.load.image(a.Images[t].getName(), a.Images[t][e]())
            }
            static loadSpritesheets() {
                for (let t in a.Spritesheets)
                    if (!this.game.cache.checkImageKey(a.Spritesheets[t].getName())) {
                        let e = null;
                        for (let s of Object.getOwnPropertyNames(a.Spritesheets[t])) "getName" !== s && "getFrameWidth" !== s && "getFrameHeight" !== s && "getFrameMax" !== s && "getMargin" !== s && "getSpacing" !== s && s.includes("get") && (e = s);
                        this.game.load.spritesheet(a.Spritesheets[t].getName(), a.Spritesheets[t][e](), a.Spritesheets[t].getFrameWidth(), a.Spritesheets[t].getFrameHeight(), a.Spritesheets[t].getFrameMax(), a.Spritesheets[t].getMargin(), a.Spritesheets[t].getSpacing())
                    }
            }
            static loadAtlases() {
                for (let t in a.Atlases)
                    if (!this.game.cache.checkImageKey(a.Atlases[t].getName())) {
                        let e = null,
                            s = null;
                        for (let i of Object.getOwnPropertyNames(a.Atlases[t])) "getXML" !== i && "getJSONArray" !== i && "getJSONHash" !== i || !i.includes("get") ? "getName" !== i && "Frames" !== i && i.includes("get") && (e = i) : s = i;
                        "getXML" === s ? this.game.load.atlasXML(a.Atlases[t].getName(), a.Atlases[t][e](), a.Atlases[t].getXML()) : "getJSONArray" === s ? this.game.load.atlasJSONArray(a.Atlases[t].getName(), a.Atlases[t][e](), a.Atlases[t].getJSONArray()) : "getJSONHash" === s && this.game.load.atlasJSONHash(a.Atlases[t].getName(), a.Atlases[t][e](), a.Atlases[t].getJSONHash())
                    }
            }
            static orderAudioSourceArrayBasedOnSoundExtensionPreference(t) {
                let e = [];
                for (let s in this.soundExtensionsPreference) {
                    let a = t.filter(t => t.substring(t.lastIndexOf(".") + 1, t.length) === this.soundExtensionsPreference[s]);
                    e = e.concat(a)
                }
                return e
            }
            static loadAudio() {
                for (let t in a.Audio) {
                    let e = a.Audio[t].getName();
                    if (this.soundKeys.push(e), !this.game.cache.checkSoundKey(e)) {
                        let s = [];
                        for (let e of Object.getOwnPropertyNames(a.Audio[t])) "getName" !== e && e.includes("get") && s.push(a.Audio[t][e]());
                        s = this.orderAudioSourceArrayBasedOnSoundExtensionPreference(s), this.game.load.audio(e, s, !0)
                    }
                }
            }
            static loadAudiosprites() {
                for (let t in a.Audiosprites) {
                    let e = a.Audiosprites[t].getName();
                    if (this.soundKeys.push(e), !this.game.cache.checkSoundKey(e)) {
                        let s = [];
                        for (let e of Object.getOwnPropertyNames(a.Audiosprites[t])) "getName" !== e && "getJSON" !== e && "Sprites" !== e && e.includes("get") && s.push(a.Audiosprites[t][e]());
                        s = this.orderAudioSourceArrayBasedOnSoundExtensionPreference(s), this.game.load.audiosprite(e, s, a.Audiosprites[t].getJSON(), null, !0)
                    }
                }
            }
            static loadBitmapFonts() {
                for (let t in a.BitmapFonts)
                    if (!this.game.cache.checkBitmapFontKey(a.BitmapFonts[t].getName())) {
                        let e = null,
                            s = null;
                        for (let i of Object.getOwnPropertyNames(a.BitmapFonts[t])) "getXML" !== i && "getFNT" !== i || !i.includes("get") ? "getName" !== i && i.includes("get") && (e = i) : s = i;
                        this.game.load.bitmapFont(a.BitmapFonts[t].getName(), a.BitmapFonts[t][e](), a.BitmapFonts[t][s]())
                    }
            }
            static loadJSON() {
                for (let t in a.JSON) this.game.cache.checkJSONKey(a.JSON[t].getName()) || this.game.load.json(a.JSON[t].getName(), a.JSON[t].getJSON(), !0)
            }
            static loadXML() {
                for (let t in a.XML) this.game.cache.checkXMLKey(a.XML[t].getName()) || this.game.load.xml(a.XML[t].getName(), a.XML[t].getXML(), !0)
            }
            static loadText() {
                for (let t in a.Text) this.game.cache.checkTextKey(a.Text[t].getName()) || this.game.load.text(a.Text[t].getName(), a.Text[t].getTXT(), !0)
            }
            static loadScripts() {
                for (let t in a.Scripts) this.game.load.script(a.Scripts[t].getName(), a.Scripts[t].getJS())
            }
            static loadShaders() {
                for (let t in a.Shaders) this.game.cache.checkShaderKey(a.Shaders[t].getName()) || this.game.load.shader(a.Shaders[t].getName(), a.Shaders[t].getFRAG(), !0)
            }
            static loadAllAssets(t, e, s) {
                this.game = t, e && this.game.load.onLoadComplete.addOnce(e, s), this.loadImages(), this.loadSpritesheets(), this.loadAtlases(), this.loadAudio(), this.loadAudiosprites(), this.loadBitmapFonts(), this.loadJSON(), this.loadXML(), this.loadText(), this.loadScripts(), this.loadShaders()
            }
            static loadSelectedAssets(t, e = !1, s, a) {
                this.game = t, s && this.game.load.onLoadComplete.addOnce(s, a), e && this.game.load.start()
            }
            static waitForSoundDecoding(t, e) {
                this.soundKeys.length > 0 ? this.game.sound.setDecodedCallback(this.soundKeys, t, e) : t.call(e)
            }
        }
        i.game = null, i.soundKeys = [], i.soundExtensionsPreference = ["webm", "ogg", "m4a", "mp3", "aac", "ac3", "caf", "flac", "mp4", "wav"], e.Loader = i
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(6),
            i = s(0),
            r = s(3);
        class l {
            static init(t) {
                t || r.isUndefined(a.Audio.AudioMainTheme) || (t = a.Audio.AudioMainTheme.getName()), this.currentTheme = t, this.onSwitchAudio = new Phaser.Signal, r.isNull(this.currentTheme) || r.isUndefined(this.currentTheme) || (this.audios[t] = i.GameConfig.GAME.sound.play(t, .5, !0))
            }
            static mainThemeSwitch() {
                l.globalSoundEnabled ? (l.globalSoundEnabled = !1, r.isNull(l.currentTheme) || r.isUndefined(l.currentTheme) || (l.audios[l.currentTheme].volume = 0)) : (l.globalSoundEnabled = !0, r.isNull(l.currentTheme) || r.isUndefined(l.currentTheme) || (l.audios[l.currentTheme].volume = .5)), l.onSwitchAudio.dispatch()
            }
            static play(t) {
                l.currentTheme !== t && (l.audios[l.currentTheme].stop(), l.currentTheme = t, l.audios[l.currentTheme].volume = l.globalSoundEnabled ? .5 : 0, l.audios[l.currentTheme].play())
            }
            static isSoundEnabled() {
                return this.globalSoundEnabled
            }
        }
        l.globalSoundEnabled = !0, l.audios = [], l.audioSprites = [], e.SoundUtils = l
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(6),
            i = s(0),
            r = s(2);
        class l {
            static preloadMainTheme() {
                const t = i.GameConfig.GAME;
                null != a.Audio.AudioMainTheme && t.load.audio(a.Audio.AudioMainTheme.getName(), a.Audio.AudioMainTheme.getMP3(), !0), this.soundAdditionalLoads()
            }
            static preloadSaver() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesSaver") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesSaver").getName(), r.ImageUtils.getAtlasClass("AtlasesSaver").getPNG(), r.ImageUtils.getAtlasClass("AtlasesSaver").getJSONArray())
            }
            static preloadEffects() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesEffects") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesEffects").getName(), r.ImageUtils.getAtlasClass("AtlasesEffects").getPNG(), r.ImageUtils.getAtlasClass("AtlasesEffects").getJSONArray()), t.load.spritesheet(r.ImageUtils.getSpritesheetClass("SpritesheetsSnow17176").getName(), r.ImageUtils.getSpritesheetClass("SpritesheetsSnow17176").getPNG(), r.ImageUtils.getSpritesheetClass("SpritesheetsSnow17176").getFrameWidth(), r.ImageUtils.getSpritesheetClass("SpritesheetsSnow17176").getFrameHeight()), t.load.spritesheet(r.ImageUtils.getSpritesheetClass("SpritesheetsSnowLarge64646").getName(), r.ImageUtils.getSpritesheetClass("SpritesheetsSnowLarge64646").getPNG(), r.ImageUtils.getSpritesheetClass("SpritesheetsSnowLarge64646").getFrameWidth(), r.ImageUtils.getSpritesheetClass("SpritesheetsSnowLarge64646").getFrameHeight())
            }
            static preloadStartState() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesStateStart") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), r.ImageUtils.getAtlasClass("AtlasesStateStart").getPNG(), r.ImageUtils.getAtlasClass("AtlasesStateStart").getJSONArray()), this.startStateAdditionalLoads()
            }
            static preloadComixState() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesStateComix") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesStateComix").getName(), r.ImageUtils.getAtlasClass("AtlasesStateComix").getPNG(), r.ImageUtils.getAtlasClass("AtlasesStateComix").getJSONArray()), this.comixStateAdditionalLoads()
            }
            static preloadShowState() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesStateShow") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesStateShow").getName(), r.ImageUtils.getAtlasClass("AtlasesStateShow").getPNG(), r.ImageUtils.getAtlasClass("AtlasesStateShow").getJSONArray()), this.showStateAdditionalLoads()
            }
            static preloadSelectState() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesStateSelect") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesStateSelect").getName(), r.ImageUtils.getAtlasClass("AtlasesStateSelect").getPNG(), r.ImageUtils.getAtlasClass("AtlasesStateSelect").getJSONArray()), this.selectStateAdditionalLoads()
            }
            static preloadDress1State() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesStateDress1") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), r.ImageUtils.getAtlasClass("AtlasesStateDress1").getPNG(), r.ImageUtils.getAtlasClass("AtlasesStateDress1").getJSONArray()), this.dress1StateAdditionalLoads()
            }
            static preloadDress2State() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesStateDress2") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), r.ImageUtils.getAtlasClass("AtlasesStateDress2").getPNG(), r.ImageUtils.getAtlasClass("AtlasesStateDress2").getJSONArray()), this.dress2StateAdditionalLoads()
            }
            static preloadDress3State() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesStateDress3") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesStateDress3").getName(), r.ImageUtils.getAtlasClass("AtlasesStateDress3").getPNG(), r.ImageUtils.getAtlasClass("AtlasesStateDress3").getJSONArray()), this.dress3StateAdditionalLoads()
            }
            static preloadDress4State() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesStateDress4") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesStateDress4").getName(), r.ImageUtils.getAtlasClass("AtlasesStateDress4").getPNG(), r.ImageUtils.getAtlasClass("AtlasesStateDress4").getJSONArray()), this.dress4StateAdditionalLoads()
            }
            static preloadPlaceState() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesStatePlace") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesStatePlace").getName(), r.ImageUtils.getAtlasClass("AtlasesStatePlace").getPNG(), r.ImageUtils.getAtlasClass("AtlasesStatePlace").getJSONArray()), this.placeStateAdditionalLoads()
            }
            static preloadDecorState() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesStateDecor") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), r.ImageUtils.getAtlasClass("AtlasesStateDecor").getPNG(), r.ImageUtils.getAtlasClass("AtlasesStateDecor").getJSONArray()), this.decorStateAdditionalLoads()
            }
            static preloadPosterState() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesStatePoster") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesStatePoster").getName(), r.ImageUtils.getAtlasClass("AtlasesStatePoster").getPNG(), r.ImageUtils.getAtlasClass("AtlasesStatePoster").getJSONArray()), this.posterStateAdditionalLoads()
            }
            static preloadResultState() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesStateResult") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesStateResult").getName(), r.ImageUtils.getAtlasClass("AtlasesStateResult").getPNG(), r.ImageUtils.getAtlasClass("AtlasesStateResult").getJSONArray()), this.resultStateAdditionalLoads()
            }
            static preloadFinalState() {
                const t = i.GameConfig.GAME;
                null != r.ImageUtils.getAtlasClass("AtlasesStateFinal") && t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesStateFinal").getName(), r.ImageUtils.getAtlasClass("AtlasesStateFinal").getPNG(), r.ImageUtils.getAtlasClass("AtlasesStateFinal").getJSONArray()), this.finalStateAdditionalLoads()
            }
            static startStateAdditionalLoads() {
                i.GameConfig.GAME.load.image(r.ImageUtils.getImageClass("ImagesBg").getName(), r.ImageUtils.getImageClass("ImagesBg").getJPG())
            }
            static comixStateAdditionalLoads() {
                i.GameConfig.GAME.load.image(r.ImageUtils.getImageClass("ImagesBg2").getName(), r.ImageUtils.getImageClass("ImagesBg2").getJPG())
            }
            static showStateAdditionalLoads() {
                const t = i.GameConfig.GAME;
                t.load.image(r.ImageUtils.getImageClass("ImagesFon1").getName(), r.ImageUtils.getImageClass("ImagesFon1").getJPG()), t.load.image(r.ImageUtils.getImageClass("ImagesFon2").getName(), r.ImageUtils.getImageClass("ImagesFon2").getJPG()), t.load.image(r.ImageUtils.getImageClass("ImagesFon3").getName(), r.ImageUtils.getImageClass("ImagesFon3").getJPG()), t.load.image(r.ImageUtils.getImageClass("ImagesFon4").getName(), r.ImageUtils.getImageClass("ImagesFon4").getJPG())
            }
            static resultStateAdditionalLoads() {
                i.GameConfig.GAME
            }
            static finalStateAdditionalLoads() {
                i.GameConfig.GAME.load.image(r.ImageUtils.getImageClass("ImagesBg6").getName(), r.ImageUtils.getImageClass("ImagesBg6").getJPG())
            }
            static selectStateAdditionalLoads() {
                i.GameConfig.GAME.load.image(r.ImageUtils.getImageClass("ImagesBg2").getName(), r.ImageUtils.getImageClass("ImagesBg2").getJPG())
            }
            static soundAdditionalLoads() {
                i.GameConfig.GAME
            }
            static decorStateAdditionalLoads() {
                const t = i.GameConfig.GAME;
                t.load.image(r.ImageUtils.getImageClass("ImagesBg3").getName(), r.ImageUtils.getImageClass("ImagesBg3").getJPG()), t.load.spritesheet(r.ImageUtils.getSpritesheetClass("SpritesheetsMmmm1612035").getName(), r.ImageUtils.getSpritesheetClass("SpritesheetsMmmm1612035").getPNG(), r.ImageUtils.getSpritesheetClass("SpritesheetsMmmm1612035").getFrameWidth(), r.ImageUtils.getSpritesheetClass("SpritesheetsMmmm1612035").getFrameHeight())
            }
            static posterStateAdditionalLoads() {
                i.GameConfig.GAME
            }
            static dress1StateAdditionalLoads() {
                const t = i.GameConfig.GAME;
                t.load.image(r.ImageUtils.getImageClass("ImagesBg4").getName(), r.ImageUtils.getImageClass("ImagesBg4").getJPG()), t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesDollAriel").getName(), r.ImageUtils.getAtlasClass("AtlasesDollAriel").getPNG(), r.ImageUtils.getAtlasClass("AtlasesDollAriel").getJSONArray()), t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesDollAriel2").getName(), r.ImageUtils.getAtlasClass("AtlasesDollAriel2").getPNG(), r.ImageUtils.getAtlasClass("AtlasesDollAriel2").getJSONArray())
            }
            static dress2StateAdditionalLoads() {
                const t = i.GameConfig.GAME;
                t.load.image(r.ImageUtils.getImageClass("ImagesBg5").getName(), r.ImageUtils.getImageClass("ImagesBg5").getJPG()), t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesDollEric").getName(), r.ImageUtils.getAtlasClass("AtlasesDollEric").getPNG(), r.ImageUtils.getAtlasClass("AtlasesDollEric").getJSONArray()), t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesDollEric2").getName(), r.ImageUtils.getAtlasClass("AtlasesDollEric2").getPNG(), r.ImageUtils.getAtlasClass("AtlasesDollEric2").getJSONArray())
            }
            static dress3StateAdditionalLoads() {
                i.GameConfig.GAME
            }
            static dress4StateAdditionalLoads() {
                i.GameConfig.GAME
            }
            static placeStateAdditionalLoads() {
                i.GameConfig.GAME.load.image(r.ImageUtils.getImageClass("ImagesBg4").getName(), r.ImageUtils.getImageClass("ImagesBg4").getJPG())
            }
        }
        e.PreloaderUtils = l
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(5),
            i = s(0),
            r = s(1),
            l = s(3),
            n = s(2),
            o = s(9),
            g = s(4);
        class h {
            constructor(t, e) {
                this.guiContainer = null, this.playButton = null, this.musonButton = null, this.musoffButton = null, this.logoButton = null, this.moreButton = null, this.moreButton2 = null, this.extras = [], this.extras2 = [], this.game = i.GameConfig.GAME, this.state = t, this.type = e
            }
            addGui(t = !0, e = !1) {
                this.guiContainer = this.game.add.group(), this.reverse = e, t && this.addMoreBtn(), this.addLogoBtn(), this.addMusicBtns()
            }
            addPlayBtn(t) {
                let e;
                return e = this.type === a.StateType.START_STATE ? n.ImageUtils.getSpritesheetClass("SpritesheetsPlayMcg1651322").getName() : this.type === a.StateType.FINAL_STATE ? n.ImageUtils.getSpritesheetClass("SpritesheetsReplayMcg1651322").getName() : this.type === a.StateType.RESULT_STATE ? n.ImageUtils.getSpritesheetClass("SpritesheetsRArrMcg1651322").getName() : n.ImageUtils.getSpritesheetClass("SpritesheetsDoneMcg1651322").getName(), this.playButton = r.GuiUtils.makeButton(this.state, this.guiContainer, -15, 590, 1, "", e, [0, 1, 0], !0, !1, !0, t, r.GuiUtils.addOverHandlerMcg, r.GuiUtils.addOutHandlerMcg), this.playButton
            }
            addExtraMore(t, e, s, a, i = r.GuiUtils.addOverHandler, n = r.GuiUtils.addOutHandler, o = r.GuiUtils.goLinkMainMoreGames) {
                return null == a ? a = [0, 0, 0] : l.isString(a) && (a = [a, a, a]), this.moreButton = r.GuiUtils.makeButton(this.state, this.guiContainer, t, e, 1, "", s, a, !0, !1, !0, o, i, n), this.moreButton
            }
            addExtraMoreAnimated(t, e, s, a, i = 10, l = !0, n = r.GuiUtils.addOverHandler, o = r.GuiUtils.addOutHandler, g = r.GuiUtils.goLinkMainMoreGames) {
                return this.moreButton2 = r.GuiUtils.makeSpritesheetButton(this.state, this.guiContainer, t, e, 1, i, l, "", s, a, !0, !1, !0, g, n, o), this.moreButton2
            }
            addMoreBtn() {
                return this.moreButton = r.GuiUtils.makeButton(this, this.guiContainer, 810, 590, 1, "", n.ImageUtils.getSpritesheetClass("SpritesheetsMoreMcg1651322").getName(), [0, 1, 0], !0, !1, !0, r.GuiUtils.goLinkMainMoreGames, r.GuiUtils.addOverHandlerMcg, r.GuiUtils.addOutHandlerMcg), this.moreButton
            }
            addLogoBtn() {
                return this.logoButton = r.GuiUtils.makeButton(this, this.guiContainer, this.reverse ? 785 : -10, -10, 1, "", n.ImageUtils.getAtlasClass("AtlasesGuiMcg").getName(), n.ImageUtils.getAtlasClass("AtlasesGuiMcg").Frames.LogoMcg, !0, !1, !0, r.GuiUtils.goLinkMainLogo, r.GuiUtils.addOverHandlerMcg, r.GuiUtils.addOutHandlerMcg), this.logoButton
            }
            addMusicBtns() {
                return this.musonButton = r.GuiUtils.makeButton(this, this.guiContainer, this.reverse ? -10 : 845, 0, .75, "", n.ImageUtils.getSpritesheetClass("SpritesheetsMusicMcg1651322").getName(), [0, 1, 0], !0, !1, o.SoundUtils.isSoundEnabled(), o.SoundUtils.mainThemeSwitch, r.GuiUtils.addOverHandlerMcg, r.GuiUtils.addOutHandlerMcg), this.musoffButton = r.GuiUtils.makeButton(this, this.guiContainer, this.reverse ? -10 : 845, 0, .75, "", n.ImageUtils.getSpritesheetClass("SpritesheetsMusicOffMcg1651322").getName(), [0, 1, 0], !0, !1, !o.SoundUtils.isSoundEnabled(), o.SoundUtils.mainThemeSwitch, r.GuiUtils.addOverHandlerMcg, r.GuiUtils.addOutHandlerMcg), o.SoundUtils.onSwitchAudio.add(() => {
                    this.musonButton.visible = !this.musonButton.visible, this.musoffButton.visible = !this.musoffButton.visible
                }, this), [this.musonButton, this.musoffButton]
            }
            addExtraBtn(t, e, s, a, i, n = r.GuiUtils.addOverHandler, o = r.GuiUtils.addOutHandler) {
                null == a ? a = [0, 0, 0] : l.isString(a) && (a = [a, a, a]);
                const g = r.GuiUtils.makeButton(this.state, this.guiContainer, t, e, 1, "", s, a, !0, !1, !0, i, n, o);
                return this.guiContainer.add(g), this.extras.push(g), g
            }
            addExtraBtnAnimated(t, e, s, a, i = 10, l = !0, n, o = r.GuiUtils.addOverHandler, g = r.GuiUtils.addOutHandler) {
                const h = r.GuiUtils.makeSpritesheetButton(this.state, this.guiContainer, t, e, 1, i, l, "", s, a, !0, !1, !0, n, o, g);
                return this.extras2.push(h), h
            }
            hideStandart() {
                this.musonButton.visible = !1, this.musonButton.visible = !1, this.logoButton.visible = !1, this.moreButton && (this.moreButton.visible = !1), this.moreButton2 && (this.moreButton2.visible = !1), this.playButton && (this.playButton.visible = !1)
            }
            hideAll() {}
            disable() {
                for (let t of this.extras) t.inputEnabled = !1, t.filters = null;
                for (let t of this.extras2) t.inputEnabled = !1, t.filters = null;
                l.isNull(this.playButton) || (this.playButton.inputEnabled = !1, this.playButton.filters = null, g.TweenUtils.fadeAndScaleOut(this.playButton)), this.musonButton.inputEnabled = !1, this.musonButton.filters = null, this.musoffButton.inputEnabled = !1, this.musoffButton.filters = null
            }
            dispose() {
                o.SoundUtils.onSwitchAudio.removeAll(this), l.isNull(this.playButton) || this.playButton.destroy(!0), this.musonButton.destroy(!0), this.musoffButton.destroy(!0), l.isNull(this.moreButton) || this.moreButton.destroy(!0), l.isNull(this.moreButton2) || this.moreButton2.destroy(!0);
                for (let t of this.extras) t.destroy(!0);
                for (let t of this.extras2) t.destroy(!0);
                this.guiContainer.destroy(!0)
            }
        }
        e.GuiMcg = h
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(5),
            i = s(0),
            r = s(1),
            l = s(3),
            n = s(2),
            o = s(9),
            g = s(4);
        class h {
            constructor(t, e) {
                this.guiContainer = null, this.playButton = null, this.musonButton = null, this.musoffButton = null, this.logoButton = null, this.moreButton = null, this.moreButton2 = null, this.extras = [], this.extras2 = [], this.game = i.GameConfig.GAME, this.state = t, this.type = e
            }
            addGui(t = !0, e = !1) {
                this.guiContainer = this.game.add.group(), this.reverse = e, t && this.addMoreBtn(), this.addLogoBtn(), this.addMusicBtns()
            }
            addPlayBtn(t) {
                let e;
                return e = this.type === a.StateType.START_STATE ? n.ImageUtils.getAtlasClass("AtlasesGuiDu").Frames.PlayDu.toString() : this.type === a.StateType.FINAL_STATE ? n.ImageUtils.getAtlasClass("AtlasesGuiDu").Frames.ReplayDu.toString() : n.ImageUtils.getAtlasClass("AtlasesGuiDu").Frames.NextDu.toString(), this.playButton = r.GuiUtils.makeButton(this.state, this.guiContainer, 4, 582, 1, "", n.ImageUtils.getAtlasClass("AtlasesGuiDu").getName(), [e, e, e], !0, !1, !0, t, r.GuiUtils.addOverHandler, r.GuiUtils.addOutHandler), this.playButton
            }
            addExtraMore(t, e, s, a, i = r.GuiUtils.addOverHandler, n = r.GuiUtils.addOutHandler, o = r.GuiUtils.goLinkMainMoreGames) {
                return null == a ? a = [0, 0, 0] : l.isString(a) && (a = [a, a, a]), this.moreButton = r.GuiUtils.makeButton(this.state, this.guiContainer, t, e, 1, "", s, a, !0, !1, !0, o, i, n), this.moreButton
            }
            addExtraMoreAnimated(t, e, s, a, i = 10, l = !0, n = r.GuiUtils.addOverHandler, o = r.GuiUtils.addOutHandler, g = r.GuiUtils.goLinkMainMoreGames) {
                return this.moreButton2 = r.GuiUtils.makeSpritesheetButton(this.state, this.guiContainer, t, e, 1, i, l, "", s, a, !0, !0, !0, g, n, o), this.moreButton2
            }
            addMoreBtn() {
                return this.moreButton = r.GuiUtils.makeButton(this, this.guiContainer, 817, 582, 1, "", n.ImageUtils.getAtlasClass("AtlasesGuiDu").getName(), n.ImageUtils.getAtlasClass("AtlasesGuiDu").Frames.MoreDu, !0, !1, !0, r.GuiUtils.goLinkMainMoreGames, r.GuiUtils.addOverHandler, r.GuiUtils.addOutHandler), this.moreButton
            }
            addLogoBtn() {
                return this.logoButton = r.GuiUtils.makeButton(this, this.guiContainer, this.reverse ? 715 : -13, -5, 1, "", n.ImageUtils.getAtlasClass("AtlasesGuiDu").getName(), n.ImageUtils.getAtlasClass("AtlasesGuiDu").Frames.LogoDu, !0, !1, !0, r.GuiUtils.goLinkMainLogo, r.GuiUtils.addOverHandler, r.GuiUtils.addOutHandler), this.logoButton
            }
            addMusicBtns() {
                return this.musonButton = r.GuiUtils.makeButton(this, this.guiContainer, this.reverse ? -10 : 852, -15, 1, "", n.ImageUtils.getAtlasClass("AtlasesGuiDu").getName(), n.ImageUtils.getAtlasClass("AtlasesGuiDu").Frames.SoundOnDu, !0, !1, o.SoundUtils.isSoundEnabled(), o.SoundUtils.mainThemeSwitch, r.GuiUtils.addOverHandler, r.GuiUtils.addOutHandler), this.musoffButton = r.GuiUtils.makeButton(this, this.guiContainer, this.reverse ? -10 : 852, -15, 1, "", n.ImageUtils.getAtlasClass("AtlasesGuiDu").getName(), n.ImageUtils.getAtlasClass("AtlasesGuiDu").Frames.SoundOffDu, !0, !1, !o.SoundUtils.isSoundEnabled(), o.SoundUtils.mainThemeSwitch, r.GuiUtils.addOverHandler, r.GuiUtils.addOutHandler), o.SoundUtils.onSwitchAudio.add(() => {
                    this.musonButton.visible = !this.musonButton.visible, this.musoffButton.visible = !this.musoffButton.visible
                }, this), [this.musonButton, this.musoffButton]
            }
            addExtraBtn(t, e, s, a, i, n = r.GuiUtils.addOverHandler, o = r.GuiUtils.addOutHandler) {
                null == a ? a = [0, 0, 0] : l.isString(a) && (a = [a, a, a]);
                const g = r.GuiUtils.makeButton(this.state, this.guiContainer, t, e, 1, "", s, a, !0, !1, !0, i, n, o);
                return this.guiContainer.add(g), this.extras.push(g), g
            }
            addExtraBtnAnimated(t, e, s, a, i = 10, l = !0, n, o = r.GuiUtils.addOverHandler, g = r.GuiUtils.addOutHandler) {
                const h = r.GuiUtils.makeSpritesheetButton(this.state, this.guiContainer, t, e, 1, i, l, "", s, a, !0, !1, !0, n, o, g);
                return this.extras2.push(h), h
            }
            hideStandart() {
                this.musonButton.visible = !1, this.musonButton.visible = !1, this.logoButton.visible = !1, this.moreButton && (this.moreButton.visible = !1), this.moreButton2 && (this.moreButton2.visible = !1), this.playButton && (this.playButton.visible = !1)
            }
            hideAll() {}
            disable() {
                for (let t of this.extras) t.inputEnabled = !1, t.filters = null;
                for (let t of this.extras2) t.inputEnabled = !1, t.filters = null;
                l.isNull(this.playButton) || (this.playButton.inputEnabled = !1, this.playButton.filters = null, g.TweenUtils.fadeAndScaleOut(this.playButton)), this.musonButton.inputEnabled = !1, this.musonButton.filters = null, this.musoffButton.inputEnabled = !1, this.musoffButton.filters = null
            }
            dispose() {
                o.SoundUtils.onSwitchAudio.removeAll(this), l.isNull(this.playButton) || this.playButton.destroy(!0), this.musonButton.destroy(!0), this.musoffButton.destroy(!0), l.isNull(this.moreButton) || this.moreButton.destroy(!0), l.isNull(this.moreButton2) || this.moreButton2.destroy(!0);
                for (let t of this.extras) t.destroy(!0);
                for (let t of this.extras2) t.destroy(!0);
                this.guiContainer.destroy(!0)
            }
        }
        e.GuiDu = h
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(5),
            i = s(0),
            r = s(1),
            l = s(3),
            n = s(9),
            o = s(2),
            g = s(4);
        class h {
            constructor(t, e) {
                this.guiContainer = null, this.playButton = null, this.musonButton = null, this.musoffButton = null, this.logoButton = null, this.moreButton = null, this.moreButton2 = null, this.extras = [], this.extras2 = [], this.game = i.GameConfig.GAME, this.state = t, this.type = e
            }
            addGui(t = !0, e = !1) {
                this.guiContainer = this.game.add.group(), this.reverse = e, t && this.addMoreBtn(), this.addLogoBtn(), this.addMusicBtns()
            }
            addPlayBtn(t, e = -1, s = -1) {
                let i, l = -5,
                    n = 593;
                return this.type === a.StateType.START_STATE ? (i = o.ImageUtils.getAtlasClass("AtlasesGuiFgc").Frames.StartFgc, l = 3, n = 577) : i = this.type === a.StateType.FINAL_STATE ? o.ImageUtils.getAtlasClass("AtlasesGuiFgc").Frames.ReplayFgc : o.ImageUtils.getAtlasClass("AtlasesGuiFgc").Frames.DoneFgc, -1 !== e && (l = e), -1 !== s && (n = s), this.playButton = r.GuiUtils.makeButton(this.state, this.guiContainer, l, n, 1, "", o.ImageUtils.getAtlasClass("AtlasesGuiFgc").getName(), [i, i, i], !0, !1, !0, t, r.GuiUtils.addOverHandler, r.GuiUtils.addOutHandler), this.playButton
            }
            addExtraMore(t, e, s, a, i = r.GuiUtils.addOverHandler, n = r.GuiUtils.addOutHandler, o = r.GuiUtils.goLinkMainMoreGames) {
                return null == a ? a = [0, 0, 0] : l.isString(a) && (a = [a, a, a]), this.moreButton = r.GuiUtils.makeButton(this.state, this.guiContainer, t, e, 1, "", s, a, !0, !1, !0, o, i, n), this.moreButton
            }
            addExtraMoreAnimated(t, e, s, a, i = 10, l = !0, n = r.GuiUtils.addOverHandler, o = r.GuiUtils.addOutHandler, g = r.GuiUtils.goLinkMainMoreGames) {
                return this.moreButton2 = r.GuiUtils.makeSpritesheetButton(this.state, this.guiContainer, t, e, 1, i, l, "", s, a, !0, !1, !0, g, n, o), this.moreButton2
            }
            addMoreBtn() {
                return this.moreButton = r.GuiUtils.makeButton(this, this.guiContainer, 833, 593, 1, "", o.ImageUtils.getAtlasClass("AtlasesGuiFgc").getName(), o.ImageUtils.getAtlasClass("AtlasesGuiFgc").Frames.MoreFgc, !0, !1, !0, r.GuiUtils.goLinkMainMoreGames, r.GuiUtils.addOverHandler, r.GuiUtils.addOutHandler), this.moreButton
            }
            addLogoBtn() {
                return this.logoButton = r.GuiUtils.makeButton(this, this.guiContainer, this.reverse ? 0 : 710, 0, .8, "", o.ImageUtils.getAtlasClass("AtlasesGuiFgc").getName(), o.ImageUtils.getAtlasClass("AtlasesGuiFgc").Frames.LogoFgc, !0, !1, !0, r.GuiUtils.goLinkMainLogo, r.GuiUtils.addOverHandlerFgc, r.GuiUtils.addOutHandlerFgc), this.logoButton
            }
            addMusicBtns() {
                return this.musonButton = r.GuiUtils.makeButton(this, this.guiContainer, this.reverse ? 840 : -6, -9, 1, "", o.ImageUtils.getAtlasClass("AtlasesGuiFgc").getName(), o.ImageUtils.getAtlasClass("AtlasesGuiFgc").Frames.SoundOnFgc, !0, !1, n.SoundUtils.isSoundEnabled(), n.SoundUtils.mainThemeSwitch, r.GuiUtils.addOverHandler, r.GuiUtils.addOutHandler), this.musoffButton = r.GuiUtils.makeButton(this, this.guiContainer, this.reverse ? 840 : -6, -9, 1, "", o.ImageUtils.getAtlasClass("AtlasesGuiFgc").getName(), o.ImageUtils.getAtlasClass("AtlasesGuiFgc").Frames.SoundOffFgc, !0, !1, !n.SoundUtils.isSoundEnabled(), n.SoundUtils.mainThemeSwitch, r.GuiUtils.addOverHandler, r.GuiUtils.addOutHandler), n.SoundUtils.onSwitchAudio.add(() => {
                    this.musonButton.visible = !this.musonButton.visible, this.musoffButton.visible = !this.musoffButton.visible
                }, this), [this.musonButton, this.musoffButton]
            }
            addExtraBtn(t, e, s, a, i, n = r.GuiUtils.addOverHandler, o = r.GuiUtils.addOutHandler) {
                null == a ? a = [0, 0, 0] : l.isString(a) && (a = [a, a, a]);
                const g = r.GuiUtils.makeButton(this.state, this.guiContainer, t, e, 1, "", s, a, !0, !1, !0, i, n, o);
                return this.extras.push(g), g
            }
            addExtraBtnAnimated(t, e, s, a, i = 10, l = !0, n, o = r.GuiUtils.addOverHandler, g = r.GuiUtils.addOutHandler) {
                const h = r.GuiUtils.makeSpritesheetButton(this.state, this.guiContainer, t, e, 1, i, l, "", s, a, !0, !1, !0, n, o, g);
                return this.extras2.push(h), h
            }
            hideStandart() {
                this.musonButton.visible = !1, this.musonButton.visible = !1, this.logoButton.visible = !1, this.moreButton && (this.moreButton.visible = !1), this.moreButton2 && (this.moreButton2.visible = !1), this.playButton && (this.playButton.visible = !1)
            }
            hideAll() {}
            disable() {
                for (let t of this.extras) t.inputEnabled = !1, t.filters = null;
                for (let t of this.extras2) t.inputEnabled = !1, t.filters = null;
                l.isNull(this.playButton) || (this.playButton.inputEnabled = !1, this.playButton.filters = null, g.TweenUtils.fadeAndScaleOut(this.playButton)), this.musonButton.inputEnabled = !1, this.musonButton.filters = null, this.musoffButton.inputEnabled = !1, this.musoffButton.filters = null
            }
            dispose() {
                n.SoundUtils.onSwitchAudio.removeAll(this), l.isNull(this.playButton) || this.playButton.destroy(!0), this.musonButton.destroy(!0), this.musoffButton.destroy(!0), l.isNull(this.moreButton) || this.moreButton.destroy(!0), l.isNull(this.moreButton2) || this.moreButton2.destroy(!0);
                for (let t of this.extras) t.destroy(!0);
                for (let t of this.extras2) t.destroy(!0);
                this.guiContainer.destroy(!0)
            }
        }
        e.GuiFgc = h
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0),
            i = s(3);
        class r {
            static init() {
                const t = a.GameConfig.GAME;
                Phaser.Device.whenReady(function() {
                    a.GameConfig.PUB_MODE === a.PublishMode.NORMAL || a.GameConfig.PUB_MODE === a.PublishMode.NO_BUTTONS || a.GameConfig.PUB_MODE === a.PublishMode.NO_BUTTONS_ONE_AD || a.GameConfig.PUB_MODE === a.PublishMode.DUW ? t.plugins.add(PhaserAds.AdManager) : a.GameConfig.PUB_MODE === a.PublishMode.GAME_DISTRIBUTIONS ? t.plugins.add(PhaserAds.AdManager) : a.GameConfig.PUB_MODE === a.PublishMode.NO_AD || (a.GameConfig.PUB_MODE, a.PublishMode.GGG)
                })
            }
            static initGd() {
                const t = a.GameConfig.GAME;
                t.ads.setAdProvider(new PhaserAds.AdProvider.GameDistributionAds(t, r.gdGame, r.gdUser))
            }
            static setProvider() {
                const t = a.GameConfig.GAME;
                Phaser.Device.whenReady(function() {
                    a.GameConfig.PUB_MODE === a.PublishMode.NORMAL || a.GameConfig.PUB_MODE === a.PublishMode.NO_BUTTONS || a.GameConfig.PUB_MODE === a.PublishMode.NO_BUTTONS_ONE_AD ? t.ads.setAdProvider(new PhaserAds.AdProvider.Ima3(t, r.adTag)) : a.GameConfig.PUB_MODE === a.PublishMode.GAME_DISTRIBUTIONS && (t.plugins.add(PhaserAds.AdManager), t.ads.setAdProvider(new PhaserAds.AdProvider.GameDistributionAds(t, r.gdGame, r.gdUser))), t.ads.onContentPaused.addO(function() {
                        console.error("Started playing ad.")
                    }, this), t.ads.onContentResumed.add(function() {
                        console.error("Finished playing ad.")
                    }, this), t.ads.onAdClicked.add(function() {
                        console.error("Clicked the ad!")
                    }, this), t.ads.onAdProgression.add(function(t) {
                        console.error(t)
                    }, this), t.ads.onAdsDisabled.add(function() {
                        console.error("Ads are being blocked.")
                    }, this)
                })
            }
            static playAds() {
              /*  const t = a.GameConfig.GAME;
                t.ads.setAdProvider(new PhaserAds.AdProvider.Ima3(t, r.adTag)), t.ads.onContentPaused.addOnce(function() {
                    console.error("Started playing ad.")
                }, this), t.ads.onContentResumed.addOnce(function() {
                    console.error("Finished playing ad."), r.removeAdContainer()
                }, this), t.ads.onAdClicked.addOnce(function() {
                    console.error("Clicked the ad!")
                }, this), t.ads.onAdProgression.addOnce(function(t) {
                    console.error(t)
                }, this), t.ads.onAdsDisabled.addOnce(function() {
                    console.error("Ads are being blocked."), r.removeAdContainer()
                }, this);
                t.ads.provider.adsEnabled ? t.device.desktop ? t.ads.showAd({
                    deployment: "devsite",
                    sample_ct: "skippablelinear"
                }) : t.ads.showAd({
                    deployment: "devsite",
                    sample_ct: t.device.iPhone ? "linear" : "skippablelinear"
                }) : console.error("Ad blocked.")*/
            }
            static removeAdContainer() {
                const t = document.getElementById("phaser-ad-container");
                i.isNull(t) || i.isUndefined(t) || t.parentNode.removeChild(t)
            }
            static areAdsEnabled() {
                const t = document.createElement("div");
                t.innerHTML = "&nbsp;", t.className = "adsbox", document.body.appendChild(t);
                let e;
                return window.setTimeout(e = function() {
                    let e = !0;
                    return 0 === t.offsetHeight && (e = !1), t.parentNode.removeChild(t), e
                }(), 100), e
            }
        }
        r.adTag = "https://googleads.g.doubleclick.net/pagead/ads?client=ca-games-pub-4405534753933673&slotname=5147989051&ad_type=video_image&description_url=http%3A%2F%2Fdressupmix.com%2FFree-Dressup-Games%2FPrincess%2FPrincess-Housewarming-Party-play.html&videoad_start_delay=15000", r.gdGame = "1b118df4c47b4828a2b0257bd76295ab", r.gdUser = "4ED9EE15-CD3B-42DA-AFF4-A2CB65F233D3-s1", e.AdUtils = r
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0),
            i = s(3);
        class r {
            constructor() {
                this._anim = null, this._list = [], this._anim = this
            }
            add(t, e, s, a, i, r, l, n) {
                return null == s && (s = 1 * Phaser.Timer.SECOND), null == a && (a = 0), null == i && (i = Phaser.Easing.Linear.None), this._list.push({
                    target: t,
                    params: e,
                    duration: s,
                    delay: a,
                    easing: i,
                    onCompleteAnimation: r,
                    onCompleteCallback: l,
                    onCompleteCallbackContext: n
                }), this._anim
            }
            animate(t, e) {
                const s = a.GameConfig.GAME;
                let r, l = 0;
                for (let t of this._list)(r = s.add.tween(t.target).to(t.params, t.duration, t.easing, !0, t.delay)).onComplete.addOnce(() => {
                    null != t.onCompleteAnimation && t.onCompleteAnimation.animate(), null != t.onCompleteCallback && t.onCompleteCallback.call(null)
                }, t.onCompleteCallbackContext), l < t.duration + t.delay && (l = t.duration + t.delay);
                if (t)
                    if (i.isArray(t))
                        for (let a of t) s.time.events.add(l, a, e);
                    else s.time.events.add(l, t, e);
                return l
            }
            kill() {
                const t = a.GameConfig.GAME;
                for (let e of this._list) t.tweens.removeFrom(e.target.scale), t.tweens.removeFrom(e.target), null != e.onCompleteAnimation && e.onCompleteAnimation.kill()
            }
        }
        e.Animation = r
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0),
            i = s(169),
            r = s(1),
            l = s(3),
            n = s(4),
            o = s(173),
            g = s(7);
        class h {
            constructor(t, e = -700) {
                this.game = null, this.state = null, this.currentPage = 0, this.currentCat = null, this.container = null, this.bg = null, this.pages = [], this.categories = [], this.btns = [], this.catLb = null, this.catRb = null, this.lb = null, this.rb = null, this.staticPage = null, this.config = null, this.game = a.GameConfig.GAME, this.state = t, this.hiddenX = e, this.container = this.game.add.group(), this.container.x = this.hiddenX
            }
            onEquiped(t, ...e) {
                if (this.config && !0 === this.config.hideSelected) {
                    for (let t of e)
                        if (this.staticPage && this.staticPage.tryToSetLikeVisibility(t), this.pages.length > 0)
                            for (let e of this.pages) e.tryToSetLikeVisibility(t);
                    if (this.staticPage && this.staticPage.tryToSetVisibility(t), this.pages.length > 0)
                        for (let e of this.pages)
                            if (e.tryToSetVisibility(t)) break
                }
            }
            disable() {
                for (let t of this.pages) t.disable();
                this.staticPage && this.staticPage.disable(), this.lb && (this.lb.inputEnabled = !1, this.lb.filters = null), this.rb && (this.rb.inputEnabled = !1, this.rb.filters = null)
            }
            enable() {
                for (let t of this.pages) t.enable();
                this.staticPage && this.staticPage.enable(), this.lb && (this.lb.inputEnabled = !0), this.rb && (this.rb.inputEnabled = !0)
            }
            findItem(t) {
                let e = null;
                if (null !== this.staticPage && (e = this.staticPage.findItem(t)), null == e && this.pages.length > 0)
                    for (let s of this.pages)
                        if (null !== (e = s.findItem(t))) break;
                return l.isUndefined(e) || l.isNull(e) ? null : e.button
            }
            show() {
                this.disable(), n.TweenUtils.slideIn(this.container, 0), n.TweenUtils.delayedCall(1010, this.enable, this)
            }
            hide() {
                this.disable(), n.TweenUtils.slideOut(this.container, this.hiddenX), n.TweenUtils.delayedCall(1010, this.enable, this)
            }
            showPage(t) {
                this.currentPage = t;
                for (let t = 0; t < this.pages.length; t++) this.pages[t].hide();
                this.pages[this.currentPage].show(), this.pages[this.currentPage].hideStatic ? this.staticPage && this.staticPage.hide() : this.staticPage && this.staticPage.show()
            }
            nextPage() {
                this.currentPage++, this.currentPage > this.pages.length - 1 && (this.currentPage = 0);
                for (let t = 0; t < this.pages.length; t++) this.pages[t].hide();
                this.pages[this.currentPage].show(), this.pages[this.currentPage].hideStatic ? this.staticPage && this.staticPage.hide() : this.staticPage && this.staticPage.show()
            }
            prevPage() {
                this.currentPage--, this.currentPage < 0 && (this.currentPage = this.pages.length - 1);
                for (let t = 0; t < this.pages.length; t++) this.pages[t].hide();
                this.pages[this.currentPage].show(), this.pages[this.currentPage].hideStatic ? this.staticPage && this.staticPage.hide() : this.staticPage && this.staticPage.show()
            }
            configure(t) {
                return this.config = t, this
            }
            background(t, e, s, a) {
                return this.bg = this.game.add.sprite(t, e, s, a, this.container), this
            }
            page(t = !0, e = !1) {
                const s = new i.ChestPage(this, this.state, this.container, e);
                return t ? this.pages.push(s) : s.hide(), s
            }
            static() {
                return this.staticPage = new i.ChestPage(this, this.state, this.container, !1), this.staticPage
            }
            category(t, e, s, a, i, n, g, h, c = r.GuiUtils.addOverHandler, d = r.GuiUtils.addOutHandler) {
                return this.categories[t] = new o.ChestCategory(t, s, a, e), null == h ? h = [0, 0, 0] : l.isString(h) && (h = [h, h, h]), this.btns.push(r.GuiUtils.makeButton(this, this.container, i, n, 1, t, g, h, !0, !0, !0, this.selectCategory, c, d)), this
            }
            categoryLeftArrow(t, e, s, a, i = r.GuiUtils.addOverHandler, n = r.GuiUtils.addOutHandler) {
                return null == a ? a = [0, 0, 0] : l.isString(a) && (a = [a, a, a]), this.catLb = r.GuiUtils.makeButton(this, this.container, t, e, 1, "left", s, a, !1, !0, !0, this.listInCategory, i, n), this.catLb.scale.setTo(0), this.catLb.alpha = 0, this
            }
            categoryRightArrow(t, e, s, a, i = r.GuiUtils.addOverHandler, n = r.GuiUtils.addOutHandler) {
                return null == a ? a = [0, 0, 0] : l.isString(a) && (a = [a, a, a]), this.catRb = r.GuiUtils.makeButton(this, this.container, t, e, 1, "right", s, a, !1, !0, !0, this.listInCategory, i, n), this.catRb.scale.setTo(0), this.catRb.alpha = 0, this
            }
            leftArrow(t, e, s, a, i = r.GuiUtils.addOverHandler, n = r.GuiUtils.addOutHandler) {
                return null == a ? a = [0, 0, 0] : l.isString(a) && (a = [a, a, a]), this.lb = r.GuiUtils.makeButton(this, this.container, t, e, 1, "left", s, a, !0, !0, !0, this.prevPage, i, n), this
            }
            rightArrow(t, e, s, a, i = r.GuiUtils.addOverHandler, n = r.GuiUtils.addOutHandler) {
                return null == a ? a = [0, 0, 0] : l.isString(a) && (a = [a, a, a]), this.rb = r.GuiUtils.makeButton(this, this.container, t, e, 1, "right", s, a, !0, !0, !0, this.nextPage, i, n), this
            }
            button(t, e, s, i, n, o, g = r.GuiUtils.addOverHandler, h = r.GuiUtils.addOutHandler) {
                null == n ? n = [0, 0, 0] : l.isString(n) && (n = [n, n, n]);
                let c = !0;
                return -1 === s.indexOf("mmmm") && -1 === s.indexOf("cross") || a.GameConfig.PUB_MODE !== a.PublishMode.NORMAL && (c = !1), this.btns.push(r.GuiUtils.makeButton(this.state, this.container, t, e, 1, s, i, n, !0, !0, c, o, g, h)), this
            }
            build(t = "dresses") {
                this.currentPage = 0, this.currentCat = t;
                const e = this.categories[this.currentCat];
                if (!l.isUndefined(e)) {
                    e.withArrows && (this.catLb.inputEnabled = !0, this.catRb.inputEnabled = !0, n.TweenUtils.fadeAndScaleIn(this.catLb, .5 * Phaser.Timer.SECOND, 0), n.TweenUtils.fadeAndScaleIn(this.catRb, .5 * Phaser.Timer.SECOND, 0)), this.currentPage = e.startPage;
                    const t = this.findBtnByName(this.currentCat);
                    t.inputEnabled = !1, t.filters = [g.EffectUtils.makeLightGlowAnimation(16777062, 600)]
                }
                if (this.pages.length > 0) {
                    for (let t = 0; t < this.pages.length; t++) this.pages[t].hide();
                    this.pages[this.currentPage].show()
                }
                return this
            }
            dispose() {
                l.isNull(this.staticPage) || this.staticPage.dispose(), l.isNull(this.bg) || this.bg.destroy(!0), l.isNull(this.catLb) || this.catLb.destroy(!0), l.isNull(this.catRb) || this.catRb.destroy(!0), l.isNull(this.lb) || this.lb.destroy(!0), l.isNull(this.rb) || this.rb.destroy(!0);
                for (let t of this.pages) t.dispose();
                this.container.destroy(!0)
            }
            listInCategory(t) {
                t === this.catLb ? (this.currentPage--, this.currentPage < this.categories[this.currentCat].startPage && (this.currentPage = this.categories[this.currentCat].endPage)) : (this.currentPage++, this.currentPage > this.categories[this.currentCat].endPage && (this.currentPage = this.categories[this.currentCat].startPage));
                for (let t = 0; t < this.pages.length; t++) this.pages[t].hide();
                this.pages[this.currentPage].show()
            }
            selectCategory(t) {
                if (t.name === this.currentCat) return;
                const e = this.findBtnByName(this.currentCat);
                e.filters = null, e.inputEnabled = !0, t.inputEnabled = !1, t.filters = [g.EffectUtils.makeLightGlowAnimation(16777062, 600)], this.currentCat = t.name, this.currentPage = this.categories[this.currentCat].startPage, this.categories[this.currentCat].withArrows || 1 !== this.catLb.alpha ? this.categories[this.currentCat].withArrows && 0 === this.catLb.alpha && (this.catLb.inputEnabled = !0, this.catRb.inputEnabled = !0, n.TweenUtils.fadeAndScaleIn(this.catLb, .5 * Phaser.Timer.SECOND, 0), n.TweenUtils.fadeAndScaleIn(this.catRb, .5 * Phaser.Timer.SECOND, 0)) : (this.catLb.inputEnabled = !1, this.catRb.inputEnabled = !1, n.TweenUtils.fadeAndScaleOut(this.catLb), n.TweenUtils.fadeAndScaleOut(this.catRb));
                for (let t = 0; t < this.pages.length; t++) this.pages[t].hide();
                this.pages[this.currentPage].show()
            }
            findBtnByName(t) {
                for (let e of this.btns)
                    if (e.name === t) return e;
                return null
            }
            getBody() {
                return this.container
            }
        }
        e.Chest = h
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        class a {}
        e.ChestItemBase = a
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a;
        ! function(t) {
            t[t.PORTRAIT = 0] = "PORTRAIT", t[t.LANDSCAPE = 1] = "LANDSCAPE"
        }(a = e.ScreenOrientation || (e.ScreenOrientation = {}));
        class i {}
        e.ScreenMetrics = i;
        class r {
            static calculateScreenMetrics(t, e, s = a.LANDSCAPE, r, l) {
                this.screenMetrics = new i, this.screenMetrics.windowWidth = window.innerWidth, this.screenMetrics.windowHeight = window.innerHeight, this.screenMetrics.defaultGameWidth = t, this.screenMetrics.defaultGameHeight = e;
                let n = this.screenMetrics.windowWidth < this.screenMetrics.windowHeight && s === a.LANDSCAPE,
                    o = this.screenMetrics.windowHeight < this.screenMetrics.windowWidth && s === a.PORTRAIT;
                (n || o) && ([this.screenMetrics.windowWidth, this.screenMetrics.windowHeight] = [this.screenMetrics.windowHeight, this.screenMetrics.windowWidth]), r && l ? (this.screenMetrics.maxGameWidth = r, this.screenMetrics.maxGameHeight = l) : (this.screenMetrics.maxGameWidth = Math.round(1 * this.screenMetrics.defaultGameWidth), this.screenMetrics.maxGameHeight = Math.round(1 * this.screenMetrics.defaultGameHeight));
                let g = s === a.LANDSCAPE ? 960 / 720 : .75,
                    h = this.screenMetrics.windowWidth / this.screenMetrics.windowHeight;
                return h > g ? (this.screenMetrics.gameHeight = this.screenMetrics.defaultGameHeight, this.screenMetrics.gameWidth = 2 * Math.ceil(this.screenMetrics.gameHeight * h * .5), this.screenMetrics.gameWidth = Math.min(this.screenMetrics.gameWidth, this.screenMetrics.maxGameWidth), this.screenMetrics.offsetX = .5 * (this.screenMetrics.gameWidth - this.screenMetrics.defaultGameWidth), this.screenMetrics.offsetY = 0) : (this.screenMetrics.gameWidth = this.screenMetrics.defaultGameWidth, this.screenMetrics.gameHeight = 2 * Math.ceil(this.screenMetrics.gameWidth / h * .5), this.screenMetrics.gameHeight = Math.min(this.screenMetrics.gameHeight, this.screenMetrics.maxGameHeight), this.screenMetrics.offsetX = 0, this.screenMetrics.offsetY = .5 * (this.screenMetrics.gameHeight - this.screenMetrics.defaultGameHeight)), this.screenMetrics.scaleX = this.screenMetrics.windowWidth / this.screenMetrics.gameWidth, this.screenMetrics.scaleY = this.screenMetrics.windowHeight / this.screenMetrics.gameHeight, this.screenMetrics
            }
        }
        e.ScreenUtils = r;
        class l {
            static toCamelCase(t) {
                return t.replace(/[^A-Za-z0-9]/g, " ").replace(/^\w|[A-Z]|\b\w|\s+/g, function(t, e) {
                    return 0 == +t || "-" === t || "." === t ? "" : 0 === e ? t.toLowerCase() : t.toUpperCase()
                })
            }
            static toPascalCase(t) {
                let e = l.toCamelCase(t);
                return e[0].toUpperCase() + e.substr(1)
            }
        }
        e.StringUtils = l
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0),
            i = s(155);
        class r {
            static makeFilter(t = 16777215, e = 350, s = 350, r = 5, l = 2, n = 1, o = 1) {
                return new i.GlowFilter(a.GameConfig.GAME, t, e, s, r, l, n, o)
            }
        }
        e.FilterUtils = r
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        ! function(t) {
            t[t.HORIZONTAL = 0] = "HORIZONTAL", t[t.VERTICAL = 1] = "VERTICAL", t[t.DIAGONAL_NW_SE = 2] = "DIAGONAL_NW_SE", t[t.DIAGONAL_SW_NE = 3] = "DIAGONAL_SW_NE", t[t.DIAGONAL_NE_SW = 4] = "DIAGONAL_NE_SW", t[t.DIAGONAL_SE_NW = 5] = "DIAGONAL_SE_NW", t[t.STATIC = 6] = "STATIC"
        }(e.SaverOrientation || (e.SaverOrientation = {}));
        ! function(t) {
            t[t.FROM_N_SLIDE = 0] = "FROM_N_SLIDE", t[t.FROM_S_SLIDE = 1] = "FROM_S_SLIDE", t[t.FROM_W_SLIDE = 2] = "FROM_W_SLIDE", t[t.FROM_E_SLIDE = 3] = "FROM_E_SLIDE", t[t.TO_N_SLIDE = 4] = "TO_N_SLIDE", t[t.TO_S_SLIDE = 5] = "TO_S_SLIDE", t[t.TO_W_SLIDE = 6] = "TO_W_SLIDE", t[t.TO_E_SLIDE = 7] = "TO_E_SLIDE", t[t.SCALE_IN = 8] = "SCALE_IN", t[t.SCALE_OUT = 9] = "SCALE_OUT", t[t.FADE_IN = 10] = "FADE_IN", t[t.FADE_OUT = 11] = "FADE_OUT", t[t.FRAMES = 12] = "FRAMES"
        }(e.SaverAnimations || (e.SaverAnimations = {}));
        ! function(t) {
            t[t.NONE = 0] = "NONE", t[t.CUSTOM = 1] = "CUSTOM", t[t.V_N_FADE_BIG_SLIDER_TEMPLATE = 2] = "V_N_FADE_BIG_SLIDER_TEMPLATE", t[t.V_S_FADE_BIG_SLIDER_TEMPLATE = 3] = "V_S_FADE_BIG_SLIDER_TEMPLATE", t[t.H_W_FADE_BIG_SLIDER_TEMPLATE = 4] = "H_W_FADE_BIG_SLIDER_TEMPLATE", t[t.H_E_FADE_BIG_SLIDER_TEMPLATE = 5] = "H_E_FADE_BIG_SLIDER_TEMPLATE", t[t.H_FADE_SLIDER_TEMPLATE = 6] = "H_FADE_SLIDER_TEMPLATE", t[t.V_FADE_SLIDER_TEMPLATE = 7] = "V_FADE_SLIDER_TEMPLATE"
        }(e.SaverTemplates || (e.SaverTemplates = {}))
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0),
            i = s(175),
            r = s(4),
            l = s(3);
        class n {
            constructor(t, e, s, i = 1, r = -1) {
                this.game = null, this.container = null, this.layers = [], this.dependencies = new Map, this.game = a.GameConfig.GAME, this.container = this.game.add.group(), this.container.x = e, this.container.y = s, this.container.scale.setTo(i, -1 === r ? i : r)
            }
            hide(t = !1) {
                r.TweenUtils.fadeOut(this.container, t ? 1 : 500)
            }
            show(t = !1) {
                r.TweenUtils.fadeIn(this.container, t ? 1 : 500)
            }
            layer(t, e, s, a, r, l, n = !1, o, g) {
                if (this.layers[s] = new i.DollLayer(this.container, t, e, a, r, l, n, o), g)
                    for (let t of g) this.dependencies.set(t, s);
                return this
            }
            on(t, e, ...s) {
                for (let t of s) this.layers[t] && this.layers[t].operate(-1);
                if (!this.layers[t]) return !1;
                const a = this.layers[t].operate(e);
                return this.dependencies.has(t) ? this.layers[t].isEmpty ? this.layers[this.dependencies.get(t)].setSecondaryState(!1) : this.layers[this.dependencies.get(t)].setSecondaryState(!0) : this.dependencies.has(`${t}_${e}`) ? this.layers[t].isEmpty ? this.layers[this.dependencies.get(`${t}_${e}`)].setSecondaryState(!1) : this.layers[this.dependencies.get(`${t}_${e}`)].setSecondaryState(!0) : this.hasLike(t, e) && this.clearLayerByDependency(t), a
            }
            clearLayerByDependency(t) {
                for (let e of this.dependencies.keys()) - 1 !== e.indexOf(t) && this.layers[this.dependencies.get(e)].setSecondaryState(!1)
            }
            hasLike(t, e) {
                for (let s of this.dependencies.keys())
                    if (-1 !== s.indexOf(t) && s !== `${t}_${e}`) return !0;
                return !1
            }
            off(t) {
                this.layers[t].remove()
            }
            setListeners(t, e, s, a) {
                return this.container.inputEnableChildren = !0, this.container.onChildInputDown.add(e, t), s && this.container.onChildInputOver.add(s, t), a && this.container.onChildInputOut.add(a, t), this
            }
            disableListeners() {
                this.container.inputEnableChildren = !1;
                for (let t of this.container.children) t instanceof Phaser.Sprite && (t.inputEnabled = !1);
                return this
            }
            enableListeners() {
                this.container.inputEnableChildren = !0;
                for (let t of this.container.children) t instanceof Phaser.Sprite && (t.inputEnabled = !0);
                return this
            }
            setPosition(t, e) {
                this.container.position.setTo(t, e)
            }
            setScale(t, e) {
                l.isUndefined(e) || l.isNull(e) ? this.container.scale.setTo(t) : this.container.scale.setTo(t, e)
            }
            setAlpha(t) {
                this.container.alpha = t
            }
            setAngle(t) {
                this.container.angle = t
            }
            getBody() {
                return this.container
            }
            extract() {
                return this.container.parent.removeChild(this.container), this.game.add.existing(this.container), this.game.world.remove(this.container), this
            }
            insert() {
                return this.game.add.existing(this.container), this
            }
            dispose() {
                for (let t of this.layers) t.dispose();
                this.container.destroy(!0)
            }
        }
        e.Doll = n
    },
    function(t, e, s) {
        "use strict";

        function a() {
            let t = 960,
                e = 720,
                s = {
                    width: t,
                    height: e,
                    renderer: Phaser.AUTO,
                    parent: "game-container",
                    resolution: 1,
                    transparent: !0
                },
                a = new A(s);
            g.GameConfig.init(g.Sites.DRESSUP_MIX, g.PublishMode.NORMAL, g.AssetMode.LOAD_BACKGROUND, h.SaverTemplates.H_FADE_SLIDER_TEMPLATE, "Princess Housewarming Party"), g.GameConfig.GAME = a
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const i = s(23),
            r = s(24),
            l = s(153),
            n = (s(18), s(6)),
            o = s(162),
            g = s(0),
            h = s(20),
            c = s(167),
            d = s(168),
            m = s(174),
            u = s(176),
            p = s(177);
        class A extends Phaser.Game {
            constructor(t) {
                super(t), this.state.add("Boot", r.default), this.state.add("Preloader", l.default), this.state.add("Start", o.default), this.state.add("Comix", c.default), this.state.add("Drag", d.default), this.state.add("Dress1", m.default), this.state.add("Dress2", u.default), this.state.add("Final", p.default), this.state.start("Boot")
            }
        }
        window.onload = (() => {
            let t = null,
                e = ["Anton"];
            if (e.length > 0 && ((t = t || {}).google = {
                families: e
            }), Object.keys(n.CustomWebFonts).length > 0) {
                (t = t || {}).custom = {
                    families: [],
                    urls: []
                };
                for (let e in n.CustomWebFonts) t.custom.families.push(n.CustomWebFonts[e].getFamily()), t.custom.urls.push(n.CustomWebFonts[e].getCSS())
            }
            null === t ? a() : (t.active = a, i.load(t))
        })
    },
    function(t, e, s) {
        var a;
        ! function() {
            function i(t, e, s) {
                return (i = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? function(t, e, s) {
                    return t.call.apply(t.bind, arguments)
                } : function(t, e, s) {
                    if (!t) throw Error();
                    if (2 < arguments.length) {
                        var a = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var s = Array.prototype.slice.call(arguments);
                            return Array.prototype.unshift.apply(s, a), t.apply(e, s)
                        }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }).apply(null, arguments)
            }

            function r(t, e, s, a) {
                if (e = t.c.createElement(e), s)
                    for (var i in s) s.hasOwnProperty(i) && ("style" == i ? e.style.cssText = s[i] : e.setAttribute(i, s[i]));
                return a && e.appendChild(t.c.createTextNode(a)), e
            }

            function l(t, e, s) {
                (t = t.c.getElementsByTagName(e)[0]) || (t = document.documentElement), t.insertBefore(s, t.lastChild)
            }

            function n(t) {
                t.parentNode && t.parentNode.removeChild(t)
            }

            function o(t, e, s) {
                e = e || [], s = s || [];
                for (var a = t.className.split(/\s+/), i = 0; i < e.length; i += 1) {
                    for (var r = !1, l = 0; l < a.length; l += 1)
                        if (e[i] === a[l]) {
                            r = !0;
                            break
                        }
                    r || a.push(e[i])
                }
                for (e = [], i = 0; i < a.length; i += 1) {
                    for (r = !1, l = 0; l < s.length; l += 1)
                        if (a[i] === s[l]) {
                            r = !0;
                            break
                        }
                    r || e.push(a[i])
                }
                t.className = e.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
            }

            function g(t, e) {
                for (var s = t.className.split(/\s+/), a = 0, i = s.length; a < i; a++)
                    if (s[a] == e) return !0;
                return !1
            }

            function h(t, e, s) {
                function a() {
                    g && i && n && (g(o), g = null)
                }
                e = r(t, "link", {
                    rel: "stylesheet",
                    href: e,
                    media: "all"
                });
                var i = !1,
                    n = !0,
                    o = null,
                    g = s || null;
                $ ? (e.onload = function() {
                    i = !0, a()
                }, e.onerror = function() {
                    i = !0, o = Error("Stylesheet failed to load"), a()
                }) : setTimeout(function() {
                    i = !0, a()
                }, 0), l(t, "head", e)
            }

            function c(t, e, s, a) {
                var i = t.c.getElementsByTagName("head")[0];
                if (i) {
                    var l = r(t, "script", {
                            src: e
                        }),
                        n = !1;
                    return l.onload = l.onreadystatechange = function() {
                        n || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (n = !0, s && s(null), l.onload = l.onreadystatechange = null, "HEAD" == l.parentNode.tagName && i.removeChild(l))
                    }, i.appendChild(l), setTimeout(function() {
                        n || (n = !0, s && s(Error("Script load timeout")))
                    }, a || 5e3), l
                }
                return null
            }

            function d() {
                this.a = 0, this.c = null
            }

            function m(t) {
                return t.a++,
                    function() {
                        t.a--, p(t)
                    }
            }

            function u(t, e) {
                t.c = e, p(t)
            }

            function p(t) {
                0 == t.a && t.c && (t.c(), t.c = null)
            }

            function A(t) {
                this.a = t || "-"
            }

            function S(t, e) {
                this.c = t, this.f = 4, this.a = "n";
                var s = (e || "n4").match(/^([nio])([1-9])$/i);
                s && (this.a = s[1], this.f = parseInt(s[2], 10))
            }

            function f(t) {
                var e = [];
                t = t.split(/,\s*/);
                for (var s = 0; s < t.length; s++) {
                    var a = t[s].replace(/['"]/g, ""); - 1 != a.indexOf(" ") || /^\d/.test(a) ? e.push("'" + a + "'") : e.push(a)
                }
                return e.join(",")
            }

            function C(t) {
                return t.a + t.f
            }

            function _(t) {
                var e = "normal";
                return "o" === t.a ? e = "oblique" : "i" === t.a && (e = "italic"), e
            }

            function b(t) {
                var e = 4,
                    s = "n",
                    a = null;
                return t && ((a = t.match(/(normal|oblique|italic)/i)) && a[1] && (s = a[1].substr(0, 1).toLowerCase()), (a = t.match(/([1-9]00|normal|bold)/i)) && a[1] && (/bold/i.test(a[1]) ? e = 7 : /[1-9]00/.test(a[1]) && (e = parseInt(a[1].substr(0, 1), 10)))), s + e
            }

            function E(t) {
                if (t.g) {
                    var e = g(t.f, t.a.c("wf", "active")),
                        s = [],
                        a = [t.a.c("wf", "loading")];
                    e || s.push(t.a.c("wf", "inactive")), o(t.f, s, a)
                }
                I(t, "inactive")
            }

            function I(t, e, s) {
                t.j && t.h[e] && (s ? t.h[e](s.c, C(s)) : t.h[e]())
            }

            function U(t, e) {
                this.c = t, this.f = e, this.a = r(this.c, "span", {
                    "aria-hidden": "true"
                }, this.f)
            }

            function D(t) {
                l(t.c, "body", t.a)
            }

            function N(t) {
                return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + f(t.c) + ";font-style:" + _(t) + ";font-weight:" + t.f + "00;"
            }

            function P(t, e, s, a, i, r) {
                this.g = t, this.j = e, this.a = a, this.c = s, this.f = i || 3e3, this.h = r || void 0
            }

            function y(t, e, s, a, i, r, l) {
                this.v = t, this.B = e, this.c = s, this.a = a, this.s = l || "BESbswy", this.f = {}, this.w = i || 3e3, this.u = r || null, this.m = this.j = this.h = this.g = null, this.g = new U(this.c, this.s), this.h = new U(this.c, this.s), this.j = new U(this.c, this.s), this.m = new U(this.c, this.s), t = N(t = new S(this.a.c + ",serif", C(this.a))), this.g.a.style.cssText = t, t = N(t = new S(this.a.c + ",sans-serif", C(this.a))), this.h.a.style.cssText = t, t = N(t = new S("serif", C(this.a))), this.j.a.style.cssText = t, t = N(t = new S("sans-serif", C(this.a))), this.m.a.style.cssText = t, D(this.g), D(this.h), D(this.j), D(this.m)
            }

            function G() {
                if (null === z) {
                    var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                    z = !!t && (536 > parseInt(t[1], 10) || 536 === parseInt(t[1], 10) && 11 >= parseInt(t[2], 10))
                }
                return z
            }

            function O(t, e, s) {
                for (var a in X)
                    if (X.hasOwnProperty(a) && e === t.f[X[a]] && s === t.f[X[a]]) return !0;
                return !1
            }

            function M(t) {
                var e, s = t.g.a.offsetWidth,
                    a = t.h.a.offsetWidth;
                (e = s === t.f.serif && a === t.f["sans-serif"]) || (e = G() && O(t, s, a)), e ? W() - t.A >= t.w ? G() && O(t, s, a) && (null === t.u || t.u.hasOwnProperty(t.a.c)) ? T(t, t.v) : T(t, t.B) : function(t) {
                    setTimeout(i(function() {
                        M(this)
                    }, t), 50)
                }(t) : T(t, t.v)
            }

            function T(t, e) {
                setTimeout(i(function() {
                    n(this.g.a), n(this.h.a), n(this.j.a), n(this.m.a), e(this.a)
                }, t), 0)
            }

            function w(t, e, s) {
                this.c = t, this.a = e, this.f = 0, this.m = this.j = !1, this.s = s
            }

            function F(t) {
                0 == --t.f && t.j && (t.m ? ((t = t.a).g && o(t.f, [t.a.c("wf", "active")], [t.a.c("wf", "loading"), t.a.c("wf", "inactive")]), I(t, "active")) : E(t.a))
            }

            function x(t) {
                this.j = t, this.a = new function() {
                    this.c = {}
                }, this.h = 0, this.f = this.g = !0
            }

            function v(t, e, s, a, r) {
                var l = 0 == --t.h;
                (t.f || t.g) && setTimeout(function() {
                    var t = r || null,
                        n = a || null || {};
                    if (0 === s.length && l) E(e.a);
                    else {
                        e.f += s.length, l && (e.j = l);
                        var g, h = [];
                        for (g = 0; g < s.length; g++) {
                            var c = s[g],
                                d = n[c.c],
                                m = e.a,
                                u = c;
                            if (m.g && o(m.f, [m.a.c("wf", u.c, C(u).toString(), "loading")]), I(m, "fontloading", u), m = null, null === V)
                                if (window.FontFace) {
                                    var u = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),
                                        p = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                                    V = u ? 42 < parseInt(u[1], 10) : !p
                                } else V = !1;
                            m = V ? new P(i(e.g, e), i(e.h, e), e.c, c, e.s, d) : new y(i(e.g, e), i(e.h, e), e.c, c, e.s, t, d), h.push(m)
                        }
                        for (g = 0; g < h.length; g++) h[g].start()
                    }
                }, 0)
            }

            function B(t, e, s) {
                var a = [],
                    i = s.timeout;
                ! function(t) {
                    t.g && o(t.f, [t.a.c("wf", "loading")]), I(t, "loading")
                }(e);
                var a = function(t, e, s) {
                        var a, i = [];
                        for (a in e)
                            if (e.hasOwnProperty(a)) {
                                var r = t.c[a];
                                r && i.push(r(e[a], s))
                            }
                        return i
                    }(t.a, s, t.c),
                    r = new w(t.c, e, i);
                for (t.h = a.length, e = 0, s = a.length; e < s; e++) a[e].load(function(e, s, a) {
                    v(t, r, e, s, a)
                })
            }

            function L(t, e) {
                this.c = t, this.a = e
            }

            function H(t, e) {
                this.c = t, this.a = e
            }

            function k(t) {
                for (var e = t.f.length, s = 0; s < e; s++) {
                    var a = t.f[s].split(":"),
                        i = a[0].replace(/\+/g, " "),
                        r = ["n4"];
                    if (2 <= a.length) {
                        var l;
                        if (l = [], n = a[1])
                            for (var n = n.split(","), o = n.length, g = 0; g < o; g++) {
                                var h;
                                if ((h = n[g]).match(/^[\w-]+$/)) {
                                    if (null == (d = Q.exec(h.toLowerCase()))) h = "";
                                    else {
                                        if (h = d[2], h = null == h || "" == h ? "n" : Z[h], null == (d = d[1]) || "" == d) d = "4";
                                        else var c = q[d],
                                            d = c || (isNaN(d) ? "4" : d.substr(0, 1));
                                        h = [h, d].join("")
                                    }
                                } else h = "";
                                h && l.push(h)
                            }
                        0 < l.length && (r = l), 3 == a.length && (a = a[2], l = [], 0 < (a = a ? a.split(",") : l).length && (a = Y[a[0]]) && (t.c[i] = a))
                    }
                    for (t.c[i] || (a = Y[i]) && (t.c[i] = a), a = 0; a < r.length; a += 1) t.a.push(new S(i, r[a]))
                }
            }

            function R(t, e) {
                this.c = t, this.a = e
            }

            function j(t, e) {
                this.c = t, this.a = e
            }

            function J(t, e) {
                this.c = t, this.f = e, this.a = []
            }
            var W = Date.now || function() {
                    return +new Date
                },
                $ = !!window.FontFace;
            A.prototype.c = function(t) {
                for (var e = [], s = 0; s < arguments.length; s++) e.push(arguments[s].replace(/[\W_]+/g, "").toLowerCase());
                return e.join(this.a)
            }, P.prototype.start = function() {
                var t = this.c.o.document,
                    e = this,
                    s = W(),
                    a = new Promise(function(a, i) {
                        function r() {
                            W() - s >= e.f ? i() : t.fonts.load(function(t) {
                                return _(t) + " " + t.f + "00 300px " + f(t.c)
                            }(e.a), e.h).then(function(t) {
                                1 <= t.length ? a() : setTimeout(r, 25)
                            }, function() {
                                i()
                            })
                        }
                        r()
                    }),
                    i = null,
                    r = new Promise(function(t, s) {
                        i = setTimeout(s, e.f)
                    });
                Promise.race([r, a]).then(function() {
                    i && (clearTimeout(i), i = null), e.g(e.a)
                }, function() {
                    e.j(e.a)
                })
            };
            var X = {
                    D: "serif",
                    C: "sans-serif"
                },
                z = null;
            y.prototype.start = function() {
                this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = W(), M(this)
            };
            var V = null;
            w.prototype.g = function(t) {
                var e = this.a;
                e.g && o(e.f, [e.a.c("wf", t.c, C(t).toString(), "active")], [e.a.c("wf", t.c, C(t).toString(), "loading"), e.a.c("wf", t.c, C(t).toString(), "inactive")]), I(e, "fontactive", t), this.m = !0, F(this)
            }, w.prototype.h = function(t) {
                var e = this.a;
                if (e.g) {
                    var s = g(e.f, e.a.c("wf", t.c, C(t).toString(), "active")),
                        a = [],
                        i = [e.a.c("wf", t.c, C(t).toString(), "loading")];
                    s || a.push(e.a.c("wf", t.c, C(t).toString(), "inactive")), o(e.f, a, i)
                }
                I(e, "fontinactive", t), F(this)
            }, x.prototype.load = function(t) {
                this.c = new function(t, e) {
                    this.a = t, this.o = e || t, this.c = this.o.document
                }(this.j, t.context || this.j), this.g = !1 !== t.events, this.f = !1 !== t.classes, B(this, new function(t, e) {
                    this.c = t, this.f = t.o.document.documentElement, this.h = e, this.a = new A("-"), this.j = !1 !== e.events, this.g = !1 !== e.classes
                }(this.c, t), t)
            }, L.prototype.load = function(t) {
                function e() {
                    if (r["__mti_fntLst" + a]) {
                        var s, i = r["__mti_fntLst" + a](),
                            l = [];
                        if (i)
                            for (var n = 0; n < i.length; n++) {
                                var o = i[n].fontfamily;
                                void 0 != i[n].fontStyle && void 0 != i[n].fontWeight ? (s = i[n].fontStyle + i[n].fontWeight, l.push(new S(o, s))) : l.push(new S(o))
                            }
                        t(l)
                    } else setTimeout(function() {
                        e()
                    }, 50)
                }
                var s = this,
                    a = s.a.projectId,
                    i = s.a.version;
                if (a) {
                    var r = s.c.o;
                    c(this.c, (s.a.api || "https://fast.fonts.net/jsapi") + "/" + a + ".js" + (i ? "?v=" + i : ""), function(i) {
                        i ? t([]) : (r["__MonotypeConfiguration__" + a] = function() {
                            return s.a
                        }, e())
                    }).id = "__MonotypeAPIScript__" + a
                } else t([])
            }, H.prototype.load = function(t) {
                var e, s, a = this.a.urls || [],
                    i = this.a.families || [],
                    r = this.a.testStrings || {},
                    l = new d;
                for (e = 0, s = a.length; e < s; e++) h(this.c, a[e], m(l));
                var n = [];
                for (e = 0, s = i.length; e < s; e++)
                    if ((a = i[e].split(":"))[1])
                        for (var o = a[1].split(","), g = 0; g < o.length; g += 1) n.push(new S(a[0], o[g]));
                    else n.push(new S(a[0]));
                u(l, function() {
                    t(n, r)
                })
            };
            var K = "./css.css",
                Y = {
                    latin: "BESbswy",
                    "latin-ext": "çöüğş",
                    cyrillic: "йяЖ",
                    greek: "αβΣ",
                    khmer: "កខគ",
                    Hanuman: "កខគ"
                },
                q = {
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
                Z = {
                    i: "i",
                    italic: "i",
                    n: "n",
                    normal: "n"
                },
                Q = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,
                tt = {
                    Arimo: !0,
                    Cousine: !0,
                    Tinos: !0
                };
            R.prototype.load = function(t) {
                var e = new d,
                    s = this.c,
                    a = new function(t, e) {
                        this.c = t || K, this.a = [], this.f = [], this.g = e || ""
                    }(this.a.api, this.a.text),
                    i = this.a.families;
                ! function(t, e) {
                    for (var s = e.length, a = 0; a < s; a++) {
                        var i = e[a].split(":");
                        3 == i.length && t.f.push(i.pop());
                        var r = "";
                        2 == i.length && "" != i[1] && (r = ":"), t.a.push(i.join(r))
                    }
                }(a, i);
                var r = new function(t) {
                    this.f = t, this.a = [], this.c = {}
                }(i);
                k(r), h(s, function(t) {
                    if (0 == t.a.length) throw Error("No fonts to load!");
                    if (-1 != t.c.indexOf("kit=")) return t.c;
                    for (var e = t.a.length, s = [], a = 0; a < e; a++) s.push(t.a[a].replace(/ /g, "+"));
                    return e = t.c + "?family=" + s.join("%7C"), 0 < t.f.length && (e += "&subset=" + t.f.join(",")), 0 < t.g.length && (e += "&text=" + encodeURIComponent(t.g)), e
                }(a), m(e)), u(e, function() {
                    t(r.a, r.c, tt)
                })
            }, j.prototype.load = function(t) {
                var e = this.a.id,
                    s = this.c.o;
                e ? c(this.c, (this.a.api || "https://use.typekit.net") + "/" + e + ".js", function(e) {
                    if (e) t([]);
                    else if (s.Typekit && s.Typekit.config && s.Typekit.config.fn) {
                        e = s.Typekit.config.fn;
                        for (var a = [], i = 0; i < e.length; i += 2)
                            for (var r = e[i], l = e[i + 1], n = 0; n < l.length; n++) a.push(new S(r, l[n]));
                        try {
                            s.Typekit.load({
                                events: !1,
                                classes: !1,
                                async: !0
                            })
                        } catch (t) {}
                        t(a)
                    }
                }, 2e3) : t([])
            }, J.prototype.load = function(t) {
                var e = this.f.id,
                    s = this.c.o,
                    a = this;
                e ? (s.__webfontfontdeckmodule__ || (s.__webfontfontdeckmodule__ = {}), s.__webfontfontdeckmodule__[e] = function(e, s) {
                    for (var i = 0, r = s.fonts.length; i < r; ++i) {
                        var l = s.fonts[i];
                        a.a.push(new S(l.name, b("font-weight:" + l.weight + ";font-style:" + l.style)))
                    }
                    t(a.a)
                }, c(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function(t) {
                    return t.o.location.hostname || t.a.location.hostname
                }(this.c) + "/" + e + ".js", function(e) {
                    e && t([])
                })) : t([])
            };
            var et = new x(window);
            et.a.c.custom = function(t, e) {
                return new H(e, t)
            }, et.a.c.fontdeck = function(t, e) {
                return new J(e, t)
            }, et.a.c.monotype = function(t, e) {
                return new L(e, t)
            }, et.a.c.typekit = function(t, e) {
                return new j(e, t)
            }, et.a.c.google = function(t, e) {
                return new R(e, t)
            };
            var st = {
                load: i(et.load, et)
            };
            void 0 !== (a = function() {
                return st
            }.call(e, s, e, t)) && (t.exports = a)
        }()
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        s(18);
        const a = s(0),
            i = s(25),
            r = s(14);
        class l extends Phaser.State {
            init(...t) {}
            preload() {
                this.game.device.desktop ? a.GameConfig.ASSET_SIZE = "" : a.GameConfig.ASSET_SIZE = "Min", a.GameConfig.SITE === a.Sites.MY_CUTE_GAMES ? i.BootUtils.preloadMcg() : a.GameConfig.SITE === a.Sites.DRESSUP_MIX ? i.BootUtils.preloadDu() : a.GameConfig.SITE === a.Sites.FREE_GAMES_CASUAL && i.BootUtils.preloadFgc()
            }
            create() {
                this.stage.disableVisibilityChange = !0, this.input.maxPointers = 1, this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL, this.game.time.desiredFps = 60, this.game.scale.pageAlignHorizontally = !0, this.game.scale.pageAlignVertically = !0, this.game.device.desktop, console.log(`DEBUG....................... false\n           \nSCALE_MODE.................. SHOW_ALL\n           \nDEFAULT_GAME_WIDTH.......... 960\n           \nDEFAULT_GAME_HEIGHT......... 720\n           \nMAX_GAME_WIDTH.............. 960\n           \nMAX_GAME_HEIGHT............. 720\n           \ngame.width.................. ${this.game.width}\n           \ngame.height................. ${this.game.height}\n           \nGOOGLE_WEB_FONTS............ ${["Anton"]}\n           \nSOUND_EXTENSIONS_PREFERENCE. ${["webm","ogg","m4a","mp3","aac","ac3","caf","flac","mp4","wav"]}`), r.AdUtils.init(), this.game.state.start("Preloader")
            }
        }
        e.default = l
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(6),
            i = s(0),
            r = s(2);
        class l {
            static preloadMcg() {
                const t = i.GameConfig.GAME;
                i.GameConfig.PUB_MODE === i.PublishMode.GAME_DISTRIBUTIONS ? t.load.image(r.ImageUtils.getImageClass("ImagesPrerollMcg").getName(), r.ImageUtils.getImageClass("ImagesPrerollMcg").getJPG()) : t.load.image(r.ImageUtils.getImageClass("ImagesPreroll2Mcg").getName(), r.ImageUtils.getImageClass("ImagesPreroll2Mcg").getPNG()), t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").getName(), r.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").getPNG(), r.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").getJSONArray()), t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesGuiMcg").getName(), r.ImageUtils.getAtlasClass("AtlasesGuiMcg").getPNG(), r.ImageUtils.getAtlasClass("AtlasesGuiMcg").getJSONArray()), t.load.json(a.JSON.JsonDoll.getName(), a.JSON.JsonDoll.getJSON()), t.load.spritesheet(r.ImageUtils.getSpritesheetClass("SpritesheetsPlayMcg1651322").getName(), r.ImageUtils.getSpritesheetClass("SpritesheetsPlayMcg1651322").getPNG(), r.ImageUtils.getSpritesheetClass("SpritesheetsPlayMcg1651322").getFrameWidth(), r.ImageUtils.getSpritesheetClass("SpritesheetsPlayMcg1651322").getFrameHeight()), t.load.spritesheet(r.ImageUtils.getSpritesheetClass("SpritesheetsReplayMcg1651322").getName(), r.ImageUtils.getSpritesheetClass("SpritesheetsReplayMcg1651322").getPNG(), r.ImageUtils.getSpritesheetClass("SpritesheetsReplayMcg1651322").getFrameWidth(), r.ImageUtils.getSpritesheetClass("SpritesheetsReplayMcg1651322").getFrameHeight()), t.load.spritesheet(r.ImageUtils.getSpritesheetClass("SpritesheetsLArrMcg1651322").getName(), r.ImageUtils.getSpritesheetClass("SpritesheetsLArrMcg1651322").getPNG(), r.ImageUtils.getSpritesheetClass("SpritesheetsLArrMcg1651322").getFrameWidth(), r.ImageUtils.getSpritesheetClass("SpritesheetsLArrMcg1651322").getFrameHeight()), t.load.spritesheet(r.ImageUtils.getSpritesheetClass("SpritesheetsDoneMcg1651322").getName(), r.ImageUtils.getSpritesheetClass("SpritesheetsDoneMcg1651322").getPNG(), r.ImageUtils.getSpritesheetClass("SpritesheetsDoneMcg1651322").getFrameWidth(), r.ImageUtils.getSpritesheetClass("SpritesheetsDoneMcg1651322").getFrameHeight()), t.load.spritesheet(r.ImageUtils.getSpritesheetClass("SpritesheetsMoreMcg1651322").getName(), r.ImageUtils.getSpritesheetClass("SpritesheetsMoreMcg1651322").getPNG(), r.ImageUtils.getSpritesheetClass("SpritesheetsMoreMcg1651322").getFrameWidth(), r.ImageUtils.getSpritesheetClass("SpritesheetsMoreMcg1651322").getFrameHeight()), t.load.spritesheet(r.ImageUtils.getSpritesheetClass("SpritesheetsMusicMcg1651322").getName(), r.ImageUtils.getSpritesheetClass("SpritesheetsMusicMcg1651322").getPNG(), r.ImageUtils.getSpritesheetClass("SpritesheetsMusicMcg1651322").getFrameWidth(), r.ImageUtils.getSpritesheetClass("SpritesheetsMusicMcg1651322").getFrameHeight()), t.load.spritesheet(r.ImageUtils.getSpritesheetClass("SpritesheetsMusicOffMcg1651322").getName(), r.ImageUtils.getSpritesheetClass("SpritesheetsMusicOffMcg1651322").getPNG(), r.ImageUtils.getSpritesheetClass("SpritesheetsMusicOffMcg1651322").getFrameWidth(), r.ImageUtils.getSpritesheetClass("SpritesheetsMusicOffMcg1651322").getFrameHeight()), t.load.spritesheet(r.ImageUtils.getSpritesheetClass("SpritesheetsNextMcg1731322").getName(), r.ImageUtils.getSpritesheetClass("SpritesheetsNextMcg1731322").getPNG(), r.ImageUtils.getSpritesheetClass("SpritesheetsNextMcg1731322").getFrameWidth(), r.ImageUtils.getSpritesheetClass("SpritesheetsNextMcg1731322").getFrameHeight()), t.load.spritesheet(r.ImageUtils.getSpritesheetClass("SpritesheetsPhotoMcg1651322").getName(), r.ImageUtils.getSpritesheetClass("SpritesheetsPhotoMcg1651322").getPNG(), r.ImageUtils.getSpritesheetClass("SpritesheetsPhotoMcg1651322").getFrameWidth(), r.ImageUtils.getSpritesheetClass("SpritesheetsPhotoMcg1651322").getFrameHeight()), t.load.spritesheet(r.ImageUtils.getSpritesheetClass("SpritesheetsRArrMcg1651322").getName(), r.ImageUtils.getSpritesheetClass("SpritesheetsRArrMcg1651322").getPNG(), r.ImageUtils.getSpritesheetClass("SpritesheetsRArrMcg1651322").getFrameWidth(), r.ImageUtils.getSpritesheetClass("SpritesheetsRArrMcg1651322").getFrameHeight()), t.load.spritesheet(r.ImageUtils.getSpritesheetClass("SpritesheetsReplayMcg1651322").getName(), r.ImageUtils.getSpritesheetClass("SpritesheetsReplayMcg1651322").getPNG(), r.ImageUtils.getSpritesheetClass("SpritesheetsReplayMcg1651322").getFrameWidth(), r.ImageUtils.getSpritesheetClass("SpritesheetsReplayMcg1651322").getFrameHeight()), t.load.script(a.Scripts.ScriptsSpriter.getName(), a.Scripts.ScriptsSpriter.getJS()), this.additionalLoads()
            }
            static preloadDu() {
                const t = i.GameConfig.GAME;
                t.load.image(r.ImageUtils.getImageClass("ImagesPrerollDu").getName(), r.ImageUtils.getImageClass("ImagesPrerollDu").getJPG()), t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").getName(), r.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").getPNG(), r.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").getJSONArray()), t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesGuiDu").getName(), r.ImageUtils.getAtlasClass("AtlasesGuiDu").getPNG(), r.ImageUtils.getAtlasClass("AtlasesGuiDu").getJSONArray()), this.additionalLoads()
            }
            static preloadFgc() {
                const t = i.GameConfig.GAME;
                t.load.image(r.ImageUtils.getImageClass("ImagesPrerollFgc").getName(), r.ImageUtils.getImageClass("ImagesPrerollFgc").getJPG()), t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").getName(), r.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").getPNG(), r.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").getJSONArray()), t.load.atlasJSONArray(r.ImageUtils.getAtlasClass("AtlasesGuiFgc").getName(), r.ImageUtils.getAtlasClass("AtlasesGuiFgc").getPNG(), r.ImageUtils.getAtlasClass("AtlasesGuiFgc").getJSONArray()), this.additionalLoads()
            }
            static additionalLoads() {
                const t = i.GameConfig.GAME;
                t.load.image(r.ImageUtils.getImageClass("ImagesSpin").getName(), r.ImageUtils.getImageClass("ImagesSpin").getPNG()), i.GameConfig.PUB_MODE !== i.PublishMode.NO_AD && i.GameConfig.PUB_MODE !== i.PublishMode.GGG && t.load.script(a.Scripts.ScriptsPhaserAds.getName(), a.Scripts.ScriptsPhaserAds.getJS())
            }
        }
        e.BootUtils = l
    },
    function(t, e, s) {
        t.exports = s.p + "assets/2f6d62cbf6dde0fd6ec6ac8c373dd7f8.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/15eac46f2dbb18149f63b4970fcfc71d.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/c47757272e9eb066540b9e032064c228.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/2131e3c6cd453bc8c41de3bbf5fc6f4d.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/20d4a31e8015d8e7ec3b86e98801bb82.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/f2dd976d86522535d74ce64594434d86.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/601a5966fd387d38215af6008b1707e7.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/0cb64d7464075bfee37e702479ef77a7.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/41dd44819abcd53eb7a1abf0be699cfe.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/b6577844e31a70b559345b1b479de92f.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/fe6f6db1a45274ca858d804f804cc05a.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/1b387d704c1f6e154e1384b1739b6773.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/0d98246b446926b266616dea5505b447.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/837a46861bf8ae55506e227d593ec108.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/4fe351481d6bc631288eaa839090b276.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/862e5175219a5e5b25c2e38c33c786aa.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/a9828950b4960232d4ef65812dc0e822.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/ec4c64b11ba44bb4e775083dcd4f977f.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/8964ca9bb96f2baadb40559569a56f64.jpg"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/022737ccbd4326cea7e0e0f890b3f4be.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/19e974f7000fd94f5fb658308b2ec7b6.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/da0a82aed3dee4cef3f7655caa877da4.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/a20a9b97b62ab65688d3d2d6885ee09e.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/e4d2eea438d4d049eb4258b36a632133.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/f9a1deb926b707c0412d87b028419c45.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/112acbe42fa645ef730c6ebab4264280.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/94ac87703cc264ed7f98ede65f5d9f63.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/d069727df8167c976099d860cff47115.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/6d28205ceef4d3ddd67b6ebe1cc2f07a.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/99ee8853efd0fd0853100a71369859b0.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/8dce9a5dd8b39485623da04ee87bc3ef.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/b07832d582c50cce1ae4db4d1611d06c.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/2696627c6c4fc41069201c2a81d1b570.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/191036453a252955ad7cf30421874405.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/61968a0831679f62b8ffe5b21618054a.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/2b717a46fe38aea7e923cfc5a32afbf7.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/8afd3ecae739cd30e9b5583459339002.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/24d657189d12ce1d9ea6b416c6ff7461.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/c0057c3dfcad1fc70ec32a19854b1b1e.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/e38f98c46016c24b129645e14ccb860b.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/4c92b2a09cea7f39353e4779187d9f1a.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/985a602081140b4c637625e877b66296.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/30f8c3e08bf2ba1185eca16cba5cb038.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/9fddfc20e34b480f2a805d33b0a6b936.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/bdb31d4954ae0478cc598127baa2720d.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/01f04a0b93979430af4e234205944de4.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/6b5482e15d765af868a0152d7b5a9619.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/c3ea6e95b31a18e82523b83793d12fa0.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/1e8f48ad9c30415e038d2aa4ae1e9c3a.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/d1a17ad1a8776e965dc776146a335fa5.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/2e41b5e0a699d4d9e7937f5e4d2d466d.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/6047880a37a380547c6e37becdab2198.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/162c5d02df02652e7c9f9b461100462f.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/20e1da45b2c891163a953f05484a55a3.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/d6b99e3605f9daf14b565923f5ddacc8.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/14c790950f3f57f99a7795b2c323941e.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/0c8ba93d1f42d94db5a84ec1850d6e78.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/863741b365f9e75620e7fedbdd79e19f.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/713a0c81b5ec9e1678dd0fd980466c41.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/7b7e166bda8c95550bcb55fe268d4188.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/aaf38ce1d66a2b09ddc0e65540a3e8e4.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/8e00b2388c28fdc53ac014893a005da3.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/416f04c6eacdf17177365599a8f623ab.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/c3a22f20c93d386b7a871f105285dc74.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/5aec855ebe8f374f1ef2f45befcf4c92.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/331bb4bf3cdd6e388fa7aee784a60d34.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/59059b2db87d3fc86778a6d684daf0bb.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/331bb4bf3cdd6e388fa7aee784a60d34.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/d86371a2ae16ccad5873376d400deaae.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/099c3b504bdd6d76754598c1835c3463.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/b5a6c43eb0aa0100ebf8db0e708df5b5.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/099c3b504bdd6d76754598c1835c3463.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/dab21dc6d6f22ba2b947b4d599966990.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/9c4bdd1da3dcab6599c35966ce70f883.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/aa7470dd0aa0048812feeff1cd79972b.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/9c4bdd1da3dcab6599c35966ce70f883.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/007bdd26b628ea30972141488d915911.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/115dc5f506486f5c89d98f520250929a.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/5c8cc1439da8030becc4655a35ce7e66.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/115dc5f506486f5c89d98f520250929a.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/4622ffc4e2c10286f56cf3cdfd4116c3.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/cc83dc0200b12cbb9fac153a3388f6c2.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/2cef19371890c3eb19a70f8149a4cc34.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/cc83dc0200b12cbb9fac153a3388f6c2.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/b5036812b46c301a12b6544ee44303da.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/d8df987a51965228c457ba32e03dbb0d.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/fae0d85b1ec3ca6b29b982c60b9c0f0c.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/d8df987a51965228c457ba32e03dbb0d.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/4816e28baecfb54cf25d7d23bb1e00e8.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/f6c0d222dd94ca01b323672b936ead52.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/c331efeb619a00332270fbdf2350134c.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/27bc2d14efee755036c6a55697b12bef.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/30beac969e126db7759eb40b5f6bdf2a.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/e0ee3e19fabab48d10ca915c8a73556b.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/d04d7ad0e383caa4be7ab5886b8fc15e.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/1910f078fedf1d0ce620899753beb18a.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/0d0cdb7486d044ff29220c97bcb4b361.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/5b9231d5175bce846fe1fa69d6787b0b.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/fdb6d252ee368c7abe322ff07a0278ba.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/fa2d33698789de0cb1fe3fc578e4db5a.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/c79be6014a70dc90c5a0d42d54ff8ca4.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/7c5e2e36ee8244d781a4d60a5ea898a2.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/d20258128eaf8c2abb7fc80e989a2356.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/8adc0959c6e6a5d505319d6dd9984829.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/dd266dd8974997e3dca155e308680cf3.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/65060c44663d3af432eaf4f219ba629e.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/708d5b5ee420c8cf0f6ba4675b2d4fd5.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/675bc9a8d73ca697b9cfd7cc6702aa12.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/79eda2e5a7636a18e55ccc46087716ed.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/4dfbbad3129e1683b32f06e389647065.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/76ba029ecb01e1123591210bb7f788ed.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/c705a05716a9032c29eb80d05f401354.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/eaf0582563dfed77076662f9592cd15a.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/ef8bf54fe6b12fcd0dfca0cc27eb78c7.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/5aa9a6f3e689079da6d0815276519405.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/6a34fc124a8ea9b45913b30996e200c3.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/5e8e13803c7abcd7f5cda15cc5469be4.png"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/fb0ab5bfa4b14f68f6615d8449e45810.mp3"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/10da3ca07d38393fc397bcb658265262.json"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/a518fa1fe925a3719c7342edfe2abfa8.js"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/21106bb47e2ec1f3c4c1f6578b6c7066.js"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/d0b8354e3b9b6f9da93164b721937d5e.js"
    },
    function(t, e, s) {
        t.exports = s.p + "assets/8ac72e2bc47f5ca11f92758811fc679c.js"
    },
    function(t, e) {
        var s;
        s = function() {
            return this
        }();
        try {
            s = s || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (s = window)
        }
        t.exports = s
    },
    function(t, e) {
        function s() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function i(t) {
            if (g === setTimeout) return setTimeout(t, 0);
            if ((g === s || !g) && setTimeout) return g = setTimeout, setTimeout(t, 0);
            try {
                return g(t, 0)
            } catch (e) {
                try {
                    return g.call(null, t, 0)
                } catch (e) {
                    return g.call(this, t, 0)
                }
            }
        }

        function r() {
            u && d && (u = !1, d.length ? m = d.concat(m) : p = -1, m.length && l())
        }

        function l() {
            if (!u) {
                var t = i(r);
                u = !0;
                for (var e = m.length; e;) {
                    for (d = m, m = []; ++p < e;) d && d[p].run();
                    p = -1, e = m.length
                }
                d = null, u = !1,
                    function(t) {
                        if (h === clearTimeout) return clearTimeout(t);
                        if ((h === a || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
                        try {
                            h(t)
                        } catch (e) {
                            try {
                                return h.call(null, t)
                            } catch (e) {
                                return h.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function n(t, e) {
            this.fun = t, this.array = e
        }

        function o() {}
        var g, h, c = t.exports = {};
        ! function() {
            try {
                g = "function" == typeof setTimeout ? setTimeout : s
            } catch (t) {
                g = s
            }
            try {
                h = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (t) {
                h = a
            }
        }();
        var d, m = [],
            u = !1,
            p = -1;
        c.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var s = 1; s < arguments.length; s++) e[s - 1] = arguments[s];
            m.push(new n(t, e)), 1 !== m.length || u || i(l)
        }, n.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, c.title = "browser", c.browser = !0, c.env = {}, c.argv = [], c.version = "", c.versions = {}, c.on = o, c.addListener = o, c.once = o, c.off = o, c.removeListener = o, c.removeAllListeners = o, c.emit = o, c.prependListener = o, c.prependOnceListener = o, c.listeners = function(t) {
            return []
        }, c.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, c.cwd = function() {
            return "/"
        }, c.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, c.umask = function() {
            return 0
        }
    },
    function(t, e) {
        t.exports = function(t) {
            return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
        }
    },
    function(t, e) {
        "function" == typeof Object.create ? t.exports = function(t, e) {
            t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        } : t.exports = function(t, e) {
            t.super_ = e;
            var s = function() {};
            s.prototype = e.prototype, t.prototype = new s, t.prototype.constructor = t
        }
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(8),
            i = s(0),
            r = s(154),
            l = s(160),
            n = s(161),
            o = s(10),
            g = s(14);
        class h extends Phaser.State {
            constructor() {
                super(...arguments), this.preloader = null
            }
            init(...t) {
                switch (i.GameConfig.PUB_MODE === i.PublishMode.GAME_DISTRIBUTIONS && g.AdUtils.initGd(), i.GameConfig.SITE) {
                    case i.Sites.MY_CUTE_GAMES:
                        this.preloader = new r.MyCuteGamesPreloader(this, "Start");
                        break;
                    case i.Sites.DRESSUP_MIX:
                        this.preloader = new l.DressupMixPreloader(this, "Start");
                        break;
                    case i.Sites.FREE_GAMES_CASUAL:
                        this.preloader = new n.FreeGamesCasualPreloader(this, "Start")
                }
            }
            preload() {
                this.preloader.preload(), i.GameConfig.ASSET_MODE === i.AssetMode.LOAD_ALL ? a.Loader.loadAllAssets(this.game, this.waitForSoundDecoding, this) : i.GameConfig.ASSET_MODE === i.AssetMode.LOAD_BACKGROUND && (o.PreloaderUtils.preloadMainTheme(), o.PreloaderUtils.preloadSaver(), o.PreloaderUtils.preloadEffects(), o.PreloaderUtils.preloadStartState(), a.Loader.loadSelectedAssets(this.game, !1, this.waitForSoundDecoding, this))
            }
            create() {
                this.preloader.create()
            }
            update() {
                super.update(this.game), this.preloader.update()
            }
            shutdown() {
                this.preloader.dispose()
            }
            waitForSoundDecoding() {
                i.GameConfig.ASSET_MODE === i.AssetMode.LOAD_ALL && (i.GameConfig.IS_ASSETS_LOADED = !0), a.Loader.waitForSoundDecoding(() => {
                    this.preloader.enableButton()
                }, this)
            }
        }
        e.default = h
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(6),
            i = s(0),
            r = s(1),
            l = s(9),
            n = s(2);
        class o {
            constructor(t, e = "Start") {
                this.preloadBarSprite = null, this.preloadFrameSprite = null, this.playButton = null, this.btn1 = null, this.btn2 = null, this.btn3 = null, this.btn4 = null, this.logo = null, this.guiContainer = null, this.crownEmitter = null, this.glowEmitter = null, this.spriterGroup = null, this.isHover = !1, this.game = i.GameConfig.GAME, this.state = t, this.NEXT = e
            }
            preload() {
                this.game.add.sprite(0, 0, i.GameConfig.PUB_MODE === i.PublishMode.GAME_DISTRIBUTIONS ? n.ImageUtils.getImageClass("ImagesPrerollMcg").getName() : n.ImageUtils.getImageClass("ImagesPreroll2Mcg").getName()), this.crownEmitter = this.game.add.emitter(0, 0, 100), this.crownEmitter.makeParticles(n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").Frames.ParticleCrownMcg), this.crownEmitter.setRotation(-50, 50), this.crownEmitter.setAlpha(1, .3, 4e3), this.crownEmitter.gravity = new Phaser.Point(0, -10), this.crownEmitter.minParticleScale = .5, this.crownEmitter.maxParticleScale = 1, this.crownEmitter.x = 500, this.crownEmitter.y = 100;
                let t = new Spriter.Loader,
                    e = new Spriter.SpriterJSON(this.game.cache.getJSON(a.JSON.JsonDoll.getName())),
                    s = t.load(e);
                this.spriterGroup = new Spriter.SpriterGroup(this.game, s, n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").getName(), "girl", 0, 10), this.spriterGroup.position.setTo(200, 720 - this.spriterGroup.height), this.game.add.existing(this.spriterGroup), this.spriterGroup.playAnimationById(0), this.spriterGroup.onLoop.add(function(t) {
                    this.spriterGroup.playAnimationById(0)
                }, this), this.spriterGroup.onEvent.add(function(t, e) {
                    this.crownEmitter.start(!0, 4e3, null, 25)
                }, this), this.preloadFrameSprite = this.game.add.sprite(0, 580, n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").Frames.Progressbar1Mcg), this.preloadBarSprite = this.game.add.sprite(0, 579.5, n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").Frames.Progressbar2Mcg), this.preloadBarSprite.x = this.preloadFrameSprite.x = this.game.world.centerX - this.preloadFrameSprite.width / 2, this.game.load.setPreloadSprite(this.preloadBarSprite), this.guiContainer = this.game.add.group();
                let l = t => {
                        this.isHover = !0, this.game.tweens.removeFrom(t.scale), this.game.add.tween(t.scale).to({
                            x: 1.05,
                            y: 1.05
                        }, 250, Phaser.Easing.Linear.None, !0)
                    },
                    o = t => {
                        this.isHover = !1, this.game.tweens.removeFrom(t.scale), this.game.add.tween(t.scale).to({
                            x: 1,
                            y: 1
                        }, 250, Phaser.Easing.Linear.None, !0)
                    };
                this.btn1 = r.GuiUtils.makeButton(this.state, this.guiContainer, 20, 30, 1, "", n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").Frames.DressupMcg, !0, !0, i.GameConfig.PUB_MODE !== i.PublishMode.GAME_DISTRIBUTIONS, r.GuiUtils.goLinkPreloaderCategory, l, o), this.btn2 = r.GuiUtils.makeButton(this.state, this.guiContainer, 635, 25, 1, "", n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").Frames.PrincessMcg, !0, !0, i.GameConfig.PUB_MODE !== i.PublishMode.GAME_DISTRIBUTIONS, r.GuiUtils.goLinkPreloaderCategory, l, o), this.btn3 = r.GuiUtils.makeButton(this.state, this.guiContainer, 660, 280, 1, "", n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").Frames.MakeupMcg, !0, !0, i.GameConfig.PUB_MODE !== i.PublishMode.GAME_DISTRIBUTIONS, r.GuiUtils.goLinkPreloaderCategory, l, o), this.btn4 = r.GuiUtils.makeButton(this.state, this.guiContainer, 15, 310, 1, "", n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").Frames.HairMcg, !0, !0, i.GameConfig.PUB_MODE !== i.PublishMode.GAME_DISTRIBUTIONS, r.GuiUtils.goLinkPreloaderCategory, l, o), this.logo = r.GuiUtils.makeButton(this.state, this.guiContainer, 272, 278, 1, "", n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").Frames.LogoMcg, !0, !0, !0, r.GuiUtils.goLinkPreloaderLogo, l, o), this.playButton = r.GuiUtils.makeButton(this, this.guiContainer, 308, 558, 1, "", n.ImageUtils.getSpritesheetClass("SpritesheetsPlayMcg1651322").getName(), [0, 1, 0], !0, !1, !1, this.nextState, r.GuiUtils.addOverHandlerMcg, r.GuiUtils.addOutHandlerMcg), this.glowEmitter = this.game.add.emitter(0, 0, 100), this.glowEmitter.makeParticles(n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasMcg").Frames.ParticleGlowMcg), this.glowEmitter.setAlpha(1, .3, 3e3), this.glowEmitter.gravity = new Phaser.Point(0, -10), this.glowEmitter.minParticleScale = .5, this.glowEmitter.maxParticleScale = 1, this.shakeItem(this.btn1, 0), this.shakeItem(this.btn2, 1500), this.shakeItem(this.btn3, 3e3), this.shakeItem(this.btn4, 4500)
            }
            create() {
                this.preloadBarSprite.visible = this.preloadFrameSprite.visible = !1
            }
            update() {
                this.spriterGroup.updateAnimation(), this.isHover && (this.glowEmitter.x = this.game.input.x, this.glowEmitter.y = this.game.input.y, this.glowEmitter.start(!0, 3e3, null, 25))
            }
            dispose() {
                this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.spriterGroup.onEvent.removeAll(), this.spriterGroup.onLoop.removeAll(), this.spriterGroup.destroy(!0), this.crownEmitter.destroy(!0), this.glowEmitter.destroy(!0), this.btn1.destroy(!0), this.btn2.destroy(!0), this.btn3.destroy(!0), this.btn4.destroy(!0), this.logo.destroy(!0), this.playButton.destroy(!0), this.preloadBarSprite.destroy(!0), this.preloadFrameSprite.destroy(!0), this.guiContainer.destroy(!0)
            }
            enableButton() {
                this.playButton.visible = !0
            }
            shakeItem(t, e) {
                const s = this.game.add.tween(t).to({
                        angle: 0
                    }, e, Phaser.Easing.Linear.None, !0),
                    a = this.game.add.tween(t).to({
                        angle: 10
                    }, 400, Phaser.Easing.Linear.None, !1, 4e3),
                    i = this.game.add.tween(t).to({
                        angle: -10
                    }, 800, Phaser.Easing.Linear.None, !1),
                    r = this.game.add.tween(t).to({
                        angle: 0
                    }, 400, Phaser.Easing.Linear.None, !1);
                r.onComplete.add(function() {
                    this.glowEmitter.x = t.x, this.glowEmitter.y = t.y, this.glowEmitter.start(!0, 1500, null, 25)
                }, this), s.chain(a), a.chain(i), i.chain(r), r.chain(a)
            }
            nextState() {
                ga("send", "event", i.GameConfig.gaData()), this.playButton.inputEnabled = !1, this.game.camera.onFadeComplete.addOnce(() => {
                    l.SoundUtils.init(), this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.game.state.start(this.NEXT)
                }, this), this.game.camera.fade(0, 400, !0, .75)
            }
        }
        e.MyCuteGamesPreloader = o
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        class a extends Phaser.Filter {
            constructor(t, e = 16777215, s = 350, a = 350, i = 5, r = 2, l = 1, n = 1) {
                s *= n = Math.pow(n, 1 / 3), a *= n;
                super(t, {
                    distance: {
                        type: "1f",
                        value: i *= n
                    },
                    outerStrength: {
                        type: "1f",
                        value: null
                    },
                    innerStrength: {
                        type: "1f",
                        value: null
                    },
                    glowColor: {
                        type: "4f",
                        value: null
                    },
                    pixelWidth: {
                        type: "1f",
                        value: null
                    },
                    pixelHeight: {
                        type: "1f",
                        value: null
                    }
                }, ["precision mediump float;", "varying vec2 vTextureCoord;", "uniform sampler2D texture;", "uniform float distance;", "uniform float outerStrength;", "uniform float innerStrength;", "uniform vec4 glowColor;", "uniform float pixelWidth;", "uniform float pixelHeight;", "vec2 px = vec2(pixelWidth, pixelHeight);", "void main(void) {", "    const float PI = 3.14159265358979323846264;", "    vec4 ownColor = texture2D(texture, vTextureCoord);", "    vec4 curColor;", "    float totalAlpha = 0.;", "    float maxTotalAlpha = 0.;", "    float cosAngle;", "    float sinAngle;", "    for (float angle = 0.; angle <= PI * 2.; angle += " + (1 / n / i).toFixed(7) + ") {", "       cosAngle = cos(angle);", "       sinAngle = sin(angle);", "       for (float curDistance = 1.; curDistance <= " + i.toFixed(7) + "; curDistance++) {", "           curColor = texture2D(texture, vec2(vTextureCoord.x + cosAngle * curDistance * px.x, vTextureCoord.y + sinAngle * curDistance * px.y));", "           totalAlpha += (distance - curDistance) * curColor.a;", "           maxTotalAlpha += (distance - curDistance);", "       }", "    }", "    maxTotalAlpha = max(maxTotalAlpha, 0.0001);", "    ownColor.a = max(ownColor.a, 0.0001);", "    ownColor.rgb = ownColor.rgb / ownColor.a;", "    float outerGlowAlpha = (totalAlpha / maxTotalAlpha)  * outerStrength * (1. - ownColor.a);", "    float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) * innerStrength * ownColor.a;", "    float resultAlpha = (ownColor.a + outerGlowAlpha);", "    gl_FragColor = vec4(mix(mix(ownColor.rgb, glowColor.rgb, innerGlowAlpha / ownColor.a), glowColor.rgb, outerGlowAlpha / resultAlpha) * resultAlpha, resultAlpha);", "}"]), this.quality = n, this.color = e, this.outerStrength = r, this.innerStrength = l, this.textureWidth = s, this.textureHeight = a
            }
            set color(t) {
                let e = ((16711680 & t) >> 16) / 255,
                    s = ((65280 & t) >> 8) / 255,
                    a = (255 & t) / 255;
                this.uniforms.glowColor.value = {
                    x: e,
                    y: s,
                    z: a,
                    w: 1
                }, this.dirty = !0
            }
            set textureWidth(t) {
                this.uniforms.pixelWidth.value = 1 / t, this.dirty = !0
            }
            set textureHeight(t) {
                this.uniforms.pixelHeight.value = 1 / t, this.dirty = !0
            }
            set distance(t) {
                this.uniforms.distance.value = t, this.dirty = !0
            }
            set outerStrength(t) {
                this.uniforms.outerStrength.value = t, this.dirty = !0
            }
            set innerStrength(t) {
                this.uniforms.innerStrength.value = t, this.dirty = !0
            }
            set quality(t) {}
        }
        e.GlowFilter = a
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0);
        class i {
            constructor() {
                this.container = null, this.vs = null, this.part1 = null, this.part2 = null, this.inAnimation = null, this.outAnimation = null, this.game = a.GameConfig.GAME
            }
            init(t) {}
            setOnInCallback(t) {}
            setOnOutCallback(t) {}
            fadeIn(t) {}
            fadeOut(t) {}
            dispose() {}
        }
        i.initial = !1, e.DefaultSaver = i
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0),
            i = s(1),
            r = s(15);
        class l {
            constructor() {
                this.container = null, this.vs = null, this.blocker = null, this.part1 = null, this.part2 = null, this.inAnimation = null, this.outAnimation = null, this.game = a.GameConfig.GAME
            }
            init(t, e, ...s) {
                this.state = t, this.container = this.game.add.group(), this.container.add(this.blocker = this.game.add.graphics(0, 0)), this.blocker.beginFill(0, 0), this.blocker.drawRect(0, 0, 960, 720), this.blocker.inputEnabled = !0, this.container.add(this.container.add(this.part1 = this.game.make.sprite(0, 0, s[0], s[1]))), this.container.add(this.container.add(this.part2 = this.game.make.sprite(0, 360, s[0], s[2]))), this.vs = i.GuiUtils.makeButton(this.state, this.container, 144, 201, 1, "", s[0], [s[3], s[3], s[3]], a.GameConfig.PUB_MODE === a.PublishMode.NORMAL, !1, !0, i.GuiUtils.goLinkMainLogo), l.initialized ? this.inAnimation = (new r.Animation).add(this.blocker, {
                    x: 960
                }, 1e-4 * Phaser.Timer.SECOND, 1.8 * Phaser.Timer.SECOND).add(this.part1, {
                    y: -360
                }, 1 * Phaser.Timer.SECOND, .8 * Phaser.Timer.SECOND, Phaser.Easing.Circular.In).add(this.part2, {
                    y: 720
                }, 1 * Phaser.Timer.SECOND, .8 * Phaser.Timer.SECOND, Phaser.Easing.Circular.In).add(this.vs.scale, {
                    x: 0,
                    y: 0
                }, 1 * Phaser.Timer.SECOND, .8 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None).add(this.vs, {
                    alpha: 0
                }, 1 * Phaser.Timer.SECOND, .8 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None) : (this.blocker.x = 960, this.part1.y = -360, this.part2.y = 720, this.vs.scale.setTo(0), this.vs.alpha = 0, this.inAnimation = new r.Animation, l.initialized = !0), this.outAnimation = (new r.Animation).add(this.blocker, {
                    x: 0
                }, 1e-4 * Phaser.Timer.SECOND, 0 * Phaser.Timer.SECOND).add(this.part1, {
                    y: 0
                }, 1 * Phaser.Timer.SECOND, .3 * Phaser.Timer.SECOND, Phaser.Easing.Circular.Out).add(this.part2, {
                    y: 360
                }, 1 * Phaser.Timer.SECOND, .3 * Phaser.Timer.SECOND, Phaser.Easing.Circular.Out).add(this.vs.scale, {
                    x: 1,
                    y: 1
                }, 1 * Phaser.Timer.SECOND, .3 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None).add(this.vs, {
                    alpha: 1
                }, 1 * Phaser.Timer.SECOND, .3 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None)
            }
            setOnInCallback(t) {
                this.onInCallback = t
            }
            setOnOutCallback(t) {
                this.onOutCallback = t
            }
            fadeIn() {
                this.inAnimation.animate(this.onInCallback)
            }
            fadeOut() {
                this.outAnimation.animate(this.onOutCallback)
            }
            dispose() {}
        }
        l.initialized = !1, e.VerticalSaver = l
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0),
            i = s(1),
            r = s(15),
            l = s(2);
        class n {
            constructor() {
                this.container = null, this.vs = null, this.blocker = null, this.part1 = null, this.part2 = null, this.inAnimation = null, this.outAnimation = null, this.game = a.GameConfig.GAME
            }
            init(t, e) {
                this.state = t, this.container = this.game.add.group(), this.container.add(this.blocker = this.game.add.graphics(0, 0)), this.blocker.beginFill(0, 0), this.blocker.drawRect(0, 0, 960, 720), this.blocker.inputEnabled = !0, this.container.add(this.container.add(this.part1 = this.game.make.sprite(0, 0, l.ImageUtils.getAtlasClass("AtlasesSaver").getName(), l.ImageUtils.getAtlasClass("AtlasesSaver").Frames.Part1))), this.container.add(this.container.add(this.part2 = this.game.make.sprite(0, 360, l.ImageUtils.getAtlasClass("AtlasesSaver").getName(), l.ImageUtils.getAtlasClass("AtlasesSaver").Frames.Part2))), this.vs = i.GuiUtils.makeButton(this.state, this.container, 0, 0, 1, "", l.ImageUtils.getAtlasClass("AtlasesSaver").getName(), l.ImageUtils.getAtlasClass("AtlasesSaver").Frames.Vs, a.GameConfig.PUB_MODE === a.PublishMode.NORMAL, !1, !0, a.GameConfig.PUB_MODE === a.PublishMode.NORMAL ? i.GuiUtils.goLinkMainLogo : null), this.vs.position.setTo(480, 360), this.part1.position.setTo(0, 0), this.part2.position.setTo(960 - this.part2.width, 0), n.initialized ? this.inAnimation = (new r.Animation).add(this.blocker, {
                    x: 960
                }, 1e-4 * Phaser.Timer.SECOND, 1.8 * Phaser.Timer.SECOND).add(this.part1, {
                    x: -this.part1.width
                }, 1 * Phaser.Timer.SECOND, .8 * Phaser.Timer.SECOND, Phaser.Easing.Circular.In).add(this.part2, {
                    x: 960
                }, 1 * Phaser.Timer.SECOND, .8 * Phaser.Timer.SECOND, Phaser.Easing.Circular.In).add(this.vs.scale, {
                    x: 0,
                    y: 0
                }, 1 * Phaser.Timer.SECOND, .8 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None).add(this.vs, {
                    alpha: 0
                }, 1 * Phaser.Timer.SECOND, .8 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None) : (this.blocker.x = 960, this.part1.x = -this.part1.width, this.part2.x = 960, this.vs.scale.setTo(0), this.vs.alpha = 0, this.inAnimation = new r.Animation, n.initialized = !0), this.outAnimation = (new r.Animation).add(this.blocker, {
                    x: 0
                }, 1e-4 * Phaser.Timer.SECOND, 0 * Phaser.Timer.SECOND).add(this.part1, {
                    x: 0
                }, 1 * Phaser.Timer.SECOND, .3 * Phaser.Timer.SECOND, Phaser.Easing.Circular.Out).add(this.part2, {
                    x: 960 - this.part2.width
                }, 1 * Phaser.Timer.SECOND, .3 * Phaser.Timer.SECOND, Phaser.Easing.Circular.Out).add(this.vs.scale, {
                    x: 1,
                    y: 1
                }, 1 * Phaser.Timer.SECOND, .3 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None).add(this.vs, {
                    alpha: 1
                }, 1 * Phaser.Timer.SECOND, .3 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None)
            }
            setOnInCallback(t) {
                this.onInCallback = t
            }
            setOnOutCallback(t) {
                this.onOutCallback = t
            }
            fadeIn() {
                this.inAnimation.animate(this.onInCallback)
            }
            fadeOut() {
                this.outAnimation.animate(this.onOutCallback)
            }
            dispose() {
                this.part1 && this.part1.destroy(!0), this.part2 && this.part2.destroy(!0), this.vs && this.vs.destroy(!0), this.blocker && this.blocker.destroy(!0), this.container && this.container.destroy(!0)
            }
        }
        n.initialized = !1, e.HorizontalSaver = n
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0),
            i = s(1),
            r = s(15),
            l = s(2);
        class n {
            constructor() {
                this.container = null, this.vs = null, this.blocker = null, this.part = null, this.inAnimation = null, this.outAnimation = null, this.game = a.GameConfig.GAME
            }
            init(t, e) {
                this.state = t, this.container = this.game.add.group(), this.container.add(this.blocker = this.game.add.graphics(0, 0)), this.blocker.beginFill(0, 0), this.blocker.drawRect(0, 0, 960, 720), this.blocker.inputEnabled = !0, this.container.add(this.container.add(this.part = this.game.make.sprite(0, 0, l.ImageUtils.getImageClass("ImagesPart").getName()))), this.vs = i.GuiUtils.makeButton(this.state, this.container, 0, 0, 1, "", l.ImageUtils.getImageClass("ImagesVs").getName(), null, a.GameConfig.PUB_MODE === a.PublishMode.NORMAL, !1, !0, a.GameConfig.PUB_MODE === a.PublishMode.NORMAL ? i.GuiUtils.goLinkMainLogo : null), this.vs.position.setTo(480, 360), this.part.position.setTo(0, 0), n.initialized ? this.inAnimation = (new r.Animation).add(this.blocker, {
                    x: 960
                }, 1e-4 * Phaser.Timer.SECOND, 1.8 * Phaser.Timer.SECOND).add(this.part, {
                    y: -this.part.height
                }, 1 * Phaser.Timer.SECOND, .8 * Phaser.Timer.SECOND, Phaser.Easing.Circular.In).add(this.vs.scale, {
                    x: 0,
                    y: 0
                }, 1 * Phaser.Timer.SECOND, .8 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None).add(this.vs, {
                    alpha: 0
                }, 1 * Phaser.Timer.SECOND, .8 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None) : (this.blocker.x = 960, this.part.y = -this.part.height, this.vs.scale.setTo(0), this.vs.alpha = 0, this.inAnimation = new r.Animation, n.initialized = !0), this.outAnimation = (new r.Animation).add(this.blocker, {
                    x: 0
                }, 1e-4 * Phaser.Timer.SECOND, 0 * Phaser.Timer.SECOND).add(this.part, {
                    y: 0
                }, 1 * Phaser.Timer.SECOND, .3 * Phaser.Timer.SECOND, Phaser.Easing.Circular.Out).add(this.vs.scale, {
                    x: 1,
                    y: 1
                }, 1 * Phaser.Timer.SECOND, .3 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None).add(this.vs, {
                    alpha: 1
                }, 1 * Phaser.Timer.SECOND, .3 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None)
            }
            setOnInCallback(t) {
                this.onInCallback = t
            }
            setOnOutCallback(t) {
                this.onOutCallback = t
            }
            fadeIn() {
                this.inAnimation.animate(this.onInCallback)
            }
            fadeOut() {
                this.outAnimation.animate(this.onOutCallback)
            }
            dispose() {
                this.part && this.part.destroy(!0), this.vs && this.vs.destroy(!0), this.blocker && this.blocker.destroy(!0), this.container && this.container.destroy(!0)
            }
        }
        n.initialized = !1, e.VerticalNorthBigSaver = n
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0),
            i = s(1),
            r = s(9),
            l = s(2);
        class n {
            constructor(t, e = "Start") {
                this.preloadBarSprite = null, this.preloadFrameSprite = null, this.playButton = null, this.btn1 = null, this.btn2 = null, this.btn3 = null, this.btn4 = null, this.btn5 = null, this.logo = null, this.guiContainer = null, this.glowEmitter = null, this.isHover = !1, this.game = a.GameConfig.GAME, this.state = t, this.NEXT = e
            }
            preload() {
                this.game.add.sprite(0, 0, l.ImageUtils.getImageClass("ImagesPrerollDu").getName()), this.preloadFrameSprite = this.game.add.sprite(0, 613, l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").getName(), l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").Frames.Progressbar1Du), this.preloadBarSprite = this.game.add.sprite(0, 613, l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").getName(), l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").Frames.Progressbar2Du), this.preloadBarSprite.x = this.preloadFrameSprite.x = this.game.world.centerX - this.preloadFrameSprite.width / 2, this.game.load.setPreloadSprite(this.preloadBarSprite), this.guiContainer = this.game.add.group();
                let t = t => {
                        this.isHover = !0, this.game.tweens.removeFrom(t.scale), this.game.add.tween(t.scale).to({
                            x: 1.05,
                            y: 1.05
                        }, 250, Phaser.Easing.Linear.None, !0)
                    },
                    e = t => {
                        this.isHover = !1, this.game.tweens.removeFrom(t.scale), this.game.add.tween(t.scale).to({
                            x: 1,
                            y: 1
                        }, 250, Phaser.Easing.Linear.None, !0)
                    };
                this.btn1 = i.GuiUtils.makeButton(this.state, this.guiContainer, -13.5, 201.5, 1, "", l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").getName(), l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").Frames.Icon1Du, !0, !0, !0, i.GuiUtils.goLinkPreloaderCategory, t, e), this.btn2 = i.GuiUtils.makeButton(this.state, this.guiContainer, 149, 288.5, 1, "", l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").getName(), l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").Frames.Icon2Du, !0, !0, !0, i.GuiUtils.goLinkPreloaderCategory, t, e), this.btn3 = i.GuiUtils.makeButton(this.state, this.guiContainer, 307.5, 338, 1, "", l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").getName(), l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").Frames.Icon3Du, !0, !0, !0, i.GuiUtils.goLinkPreloaderCategory, t, e), this.btn4 = i.GuiUtils.makeButton(this.state, this.guiContainer, 500.5, 282, 1, "", l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").getName(), l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").Frames.Icon4Du, !0, !0, !0, i.GuiUtils.goLinkPreloaderCategory, t, e), this.btn5 = i.GuiUtils.makeButton(this.state, this.guiContainer, 693, 211.5, 1, "", l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").getName(), l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").Frames.Icon5Du, !0, !0, !0, i.GuiUtils.goLinkPreloaderCategory, t, e), this.logo = i.GuiUtils.makeButton(this.state, this.guiContainer, 232, 61.5, 1, "", l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").getName(), l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").Frames.LogoDu, !0, !0, !0, i.GuiUtils.goLinkPreloaderLogo, t, e), this.playButton = i.GuiUtils.makeButton(this, this.guiContainer, 355.5, 554, 1, "", l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").getName(), l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").Frames.PlayNormalDu, !0, !1, !1, this.nextState, i.GuiUtils.addOverHandler, i.GuiUtils.addOutHandler), this.glowEmitter = this.game.add.emitter(0, 0, 100), this.glowEmitter.makeParticles(l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").getName(), l.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasDu").Frames.ParticleGlowDu), this.glowEmitter.setAlpha(1, .3, 3e3), this.glowEmitter.gravity = new Phaser.Point(0, -10), this.glowEmitter.minParticleScale = .5, this.glowEmitter.maxParticleScale = 1, this.btn1.alpha = 0, this.btn1.inputEnabled = !1, this.btn2.alpha = 0, this.btn2.inputEnabled = !1, this.btn3.alpha = 0, this.btn3.inputEnabled = !1, this.btn4.alpha = 0, this.btn4.inputEnabled = !1, this.btn5.alpha = 0, this.btn5.inputEnabled = !1, this.btn1.scale.setTo(.1), this.btn2.scale.setTo(.1), this.btn3.scale.setTo(.1), this.btn4.scale.setTo(.1), this.btn5.scale.setTo(.1), this.game.add.tween(this.btn1.scale).to({
                    x: 1,
                    y: 1
                }, 1500, Phaser.Easing.Elastic.Out, !0, 0), this.game.add.tween(this.btn2.scale).to({
                    x: 1,
                    y: 1
                }, 1500, Phaser.Easing.Elastic.Out, !0, 500), this.game.add.tween(this.btn3.scale).to({
                    x: 1,
                    y: 1
                }, 1500, Phaser.Easing.Elastic.Out, !0, 1e3), this.game.add.tween(this.btn4.scale).to({
                    x: 1,
                    y: 1
                }, 1500, Phaser.Easing.Elastic.Out, !0, 1500), this.game.add.tween(this.btn5.scale).to({
                    x: 1,
                    y: 1
                }, 1500, Phaser.Easing.Elastic.Out, !0, 2e3), this.game.add.tween(this.btn1).to({
                    alpha: 1
                }, 800, Phaser.Easing.Circular.Out, !0, 0).onComplete.addOnce(() => {
                    this.btn1.inputEnabled = !0
                }, this), this.game.add.tween(this.btn2).to({
                    alpha: 1
                }, 800, Phaser.Easing.Circular.Out, !0, 500).onComplete.addOnce(() => {
                    this.btn2.inputEnabled = !0
                }, this), this.game.add.tween(this.btn3).to({
                    alpha: 1
                }, 800, Phaser.Easing.Circular.Out, !0, 1e3).onComplete.addOnce(() => {
                    this.btn3.inputEnabled = !0
                }, this), this.game.add.tween(this.btn4).to({
                    alpha: 1
                }, 800, Phaser.Easing.Circular.Out, !0, 1500).onComplete.addOnce(() => {
                    this.btn4.inputEnabled = !0
                }, this), this.game.add.tween(this.btn5).to({
                    alpha: 1
                }, 800, Phaser.Easing.Circular.Out, !0, 2e3).onComplete.addOnce(() => {
                    this.btn5.inputEnabled = !0
                }, this)
            }
            create() {
                this.preloadBarSprite.visible = this.preloadFrameSprite.visible = !1
            }
            update() {
                this.isHover && (this.glowEmitter.x = this.game.input.x, this.glowEmitter.y = this.game.input.y, this.glowEmitter.start(!0, 3e3, null, 25))
            }
            dispose() {
                this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.glowEmitter.destroy(!0), this.btn1.destroy(!0), this.btn2.destroy(!0), this.btn3.destroy(!0), this.btn4.destroy(!0), this.logo.destroy(!0), this.playButton.destroy(!0), this.preloadBarSprite.destroy(!0), this.preloadFrameSprite.destroy(!0), this.guiContainer.destroy(!0)
            }
            enableButton() {
                this.playButton.visible = !0
            }
            nextState() {
                 this.playButton.inputEnabled = !1, this.game.camera.onFadeComplete.addOnce(() => {
                    r.SoundUtils.init(), this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.game.state.start(this.NEXT)
                }, this), this.game.camera.fade(0, 400, !0, .75)
            }
        }
        e.DressupMixPreloader = n
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0),
            i = s(1),
            r = s(9),
            l = s(4),
            n = s(2);
        class o {
            constructor(t, e = "Start") {
                this.spinner = null, this.preloadBarSprite = null, this.preloadFrameSprite = null, this.playButton = null, this.btn1 = null, this.btn2 = null, this.btn3 = null, this.btn4 = null, this.btn5 = null, this.logo = null, this.guiContainer = null, this.glowEmitter = null, this.isHover = !1, this.game = a.GameConfig.GAME, this.state = t, this.NEXT = e
            }
            preload() {
                this.game.add.sprite(0, 0, n.ImageUtils.getImageClass("ImagesPrerollFgc").getName()), this.preloadFrameSprite = this.game.add.sprite(0, 595, n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").Frames.Progressbar1Fgc), this.preloadBarSprite = this.game.add.sprite(0, 595, n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").Frames.Progressbar2Fgc), this.preloadBarSprite.x = this.preloadFrameSprite.x = this.game.world.centerX - this.preloadFrameSprite.width / 2, this.game.load.setPreloadSprite(this.preloadBarSprite), this.guiContainer = this.game.add.group();
                let t = t => {
                        this.isHover = !0, this.game.tweens.removeFrom(t.scale), this.game.add.tween(t.scale).to({
                            x: 1.05,
                            y: 1.05
                        }, 250, Phaser.Easing.Linear.None, !0)
                    },
                    e = t => {
                        this.isHover = !1, this.game.tweens.removeFrom(t.scale), this.game.add.tween(t.scale).to({
                            x: 1,
                            y: 1
                        }, 250, Phaser.Easing.Linear.None, !0)
                    };
                this.btn1 = i.GuiUtils.makeButton(this.state, this.guiContainer, -200, 96, 1, "", n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").Frames.Icon1Fgc, !0, !0, !0, i.GuiUtils.goLinkPreloaderCategory, t, e), this.btn2 = i.GuiUtils.makeButton(this.state, this.guiContainer, -200, 656, 1, "", n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").Frames.Icon2Fgc, !0, !0, !0, i.GuiUtils.goLinkPreloaderCategory, t, e), this.btn3 = i.GuiUtils.makeButton(this.state, this.guiContainer, 380, 756, 1, "", n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").Frames.Icon3Fgc, !0, !0, !0, i.GuiUtils.goLinkPreloaderCategory, t, e), this.btn4 = i.GuiUtils.makeButton(this.state, this.guiContainer, 960, 656, 1, "", n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").Frames.Icon4Fgc, !0, !0, !0, i.GuiUtils.goLinkPreloaderCategory, t, e), this.btn5 = i.GuiUtils.makeButton(this.state, this.guiContainer, 960, 96, 1, "", n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").Frames.Icon5Fgc, !0, !0, !0, i.GuiUtils.goLinkPreloaderCategory, t, e), this.logo = i.GuiUtils.makeButton(this.state, this.guiContainer, 280, 114, 1, "", n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").Frames.LogoFgc, !0, !0, !0, i.GuiUtils.goLinkPreloaderLogo, t, e), this.playButton = i.GuiUtils.makeButton(this, this.guiContainer, 350, 558, 1, "", n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").getName(), [n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").Frames.PlayNormalFgc, n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").Frames.PlayOverFgc, n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").Frames.PlayNormalFgc], !0, !1, !1, this.nextState, i.GuiUtils.addOverHandler, i.GuiUtils.addOutHandler), this.glowEmitter = this.game.add.emitter(0, 0, 100), this.glowEmitter.makeParticles(n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").getName(), n.ImageUtils.getAtlasClass("AtlasesPreloaderAtlasFgc").Frames.ParticleGlowFgc), this.glowEmitter.setAlpha(1, .3, 3e3), this.glowEmitter.gravity = new Phaser.Point(0, -10), this.glowEmitter.minParticleScale = .5, this.glowEmitter.maxParticleScale = 1, this.game.add.tween(this.btn1).to({
                    x: 110,
                    y: 270
                }, 800, Phaser.Easing.Circular.Out, !0, 0), this.game.add.tween(this.btn2).to({
                    x: 300,
                    y: 380
                }, 800, Phaser.Easing.Circular.Out, !0, 500), this.game.add.tween(this.btn3).to({
                    x: 480,
                    y: 450
                }, 800, Phaser.Easing.Circular.Out, !0, 1e3), this.game.add.tween(this.btn4).to({
                    x: 660,
                    y: 380
                }, 800, Phaser.Easing.Circular.Out, !0, 1500), this.game.add.tween(this.btn5).to({
                    x: 850,
                    y: 270
                }, 800, Phaser.Easing.Circular.Out, !0, 2e3)
            }
            create() {}
            update() {
                this.isHover && (this.glowEmitter.x = this.game.input.x, this.glowEmitter.y = this.game.input.y, this.glowEmitter.start(!0, 3e3, null, 25))
            }
            dispose() {
                this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.glowEmitter.destroy(!0), this.btn1.destroy(!0), this.btn2.destroy(!0), this.btn3.destroy(!0), this.btn4.destroy(!0), this.logo.destroy(!0), this.playButton.destroy(!0), this.spinner && this.spinner.destroy(!0), this.preloadBarSprite && this.preloadBarSprite.destroy(!0), this.preloadFrameSprite && this.preloadFrameSprite.destroy(!0), this.guiContainer.destroy(!0)
            }
            enableButton() {
                this.preloadFrameSprite.visible = !1, l.TweenUtils.fadeOut(this.preloadBarSprite), this.playButton.visible = !0, this.playButton.alpha = 0, this.playButton.scale.setTo(0), l.TweenUtils.fadeAndScaleIn(this.playButton, .75 * Phaser.Timer.SECOND, .75 * Phaser.Timer.SECOND)
            }
            nextState() {
                ga("send", "event", a.GameConfig.gaData()), this.playButton.inputEnabled = !1, this.game.camera.onFadeComplete.addOnce(() => {
                    r.SoundUtils.init(), this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.game.state.start(this.NEXT)
                }, this), this.game.camera.fade(0, 400, !0, .75)
            }
        }
        e.FreeGamesCasualPreloader = o
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(8),
            i = s(5),
            r = s(0),
            l = s(11),
            n = s(12),
            o = s(13),
            g = s(1),
            h = s(4),
            c = s(2),
            d = s(7),
            m = s(10);
        class u extends Phaser.State {
            constructor() {
                super(...arguments), this.NEXT = "Comix", this.nextPrepared = !1, this.gui = null, this.saver = null, this.bg = null, this.title = null, this.girl1 = null, this.girl2 = null, this.girl3 = null, this.girl3B = null, this.girl3H = null, this.spinner = null, this.blocker = null, this.phase = 0
            }
            init(...t) {
                switch (r.GameConfig.SITE) {
                    case r.Sites.MY_CUTE_GAMES:
                        this.gui = new l.GuiMcg(this, i.StateType.START_STATE);
                        break;
                    case r.Sites.DRESSUP_MIX:
                        this.gui = new n.GuiDu(this, i.StateType.START_STATE);
                        break;
                    case r.Sites.FREE_GAMES_CASUAL:
                        this.gui = new o.GuiFgc(this, i.StateType.START_STATE)
                }
                this.phase = 0
            }
            preload() {}
            create() {
                if (this.bg = this.game.add.sprite(0, 0, c.ImageUtils.getImageClass("ImagesBg").getName()), this.girl1 = this.game.add.sprite(235, 65, c.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), c.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Gr1), this.girl2 = this.game.add.sprite(663, 46, c.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), c.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Gr2), this.girl3B = this.game.add.sprite(427, 78, c.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), c.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Gr3B), this.girl3H = this.game.add.sprite(550, 96, c.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), c.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Gr3H1), this.girl3 = this.game.add.sprite(450, 78, c.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), c.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Gr3F), this.title = this.game.add.sprite(0, 135, c.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), c.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Title), d.EffectUtils.makeMoveAnimation(this.title, 0, 145, 1300), this.gui.addGui(r.GameConfig.PUB_MODE === r.PublishMode.DUW, !0), r.GameConfig.PUB_MODE !== r.PublishMode.DUW) {
                    const t = this.gui.addExtraMore(799, 460, c.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), c.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.MoreE);
                    h.TweenUtils.callEvery(2 * Phaser.Timer.SECOND, () => {
                        d.EffectUtils.makeRotateAnimation(t, 100, -10)
                    }, this);
                    const e = this.game.add.sprite(799, 460, c.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), c.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Sp1),
                        s = this.game.add.sprite(799, 460, c.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), c.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Sp2);
                    e.alpha = 0, s.alpha = 0, d.EffectUtils.makeAlphaAnimation(e), h.TweenUtils.delayedCall(.5 * Phaser.Timer.SECOND, () => {
                        d.EffectUtils.makeAlphaAnimation(s)
                    }, this)
                }
                const t = this.gui.addPlayBtn(this.nextState);
                t.scale.setTo(0), t.alpha = 0, this.saver = g.GuiUtils.getSaver(), this.saver ? (this.saver.init(this), this.saver.fadeIn()) : this.game.camera.flash(0, 1e3), r.GameConfig.GAME_COMPLETED || this.game.camera.flash(0, 1e3), h.TweenUtils.fadeAndScaleIn(t, .75 * Phaser.Timer.SECOND, r.GameConfig.GAME_COMPLETED ? 2 * Phaser.Timer.SECOND : 1 * Phaser.Timer.SECOND), r.GameConfig.IS_ASSETS_LOADED ? this.waitForLoading() : r.GameConfig.ASSET_MODE === r.AssetMode.LOAD_BACKGROUND && (m.PreloaderUtils.preloadComixState(), a.Loader.loadSelectedAssets(this.game, !0, this.waitForLoading, this)), h.TweenUtils.delayedCall(2 * Phaser.Timer.SECOND, this.changeHead, this)
            }
            changeHead() {
                this.phase++, this.phase > 2 && (this.phase = 0), 0 === this.phase && (this.girl3H.loadTexture(c.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), c.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Gr3H1), h.TweenUtils.delayedCall(3 * Phaser.Timer.SECOND, this.changeHead, this)), 1 === this.phase && (this.girl3H.loadTexture(c.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), c.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Gr3H2), h.TweenUtils.delayedCall(1 * Phaser.Timer.SECOND, this.changeHead, this)), 2 === this.phase && (this.girl3H.loadTexture(c.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), c.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Gr3H3), h.TweenUtils.delayedCall(1 * Phaser.Timer.SECOND, this.changeHead, this))
            }
            update() {
                super.update(this.game)
            }
            shutdown() {
                this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.bg && this.bg.destroy(!0), this.title && this.title.destroy(!0), this.girl1 && this.girl1.destroy(!0), this.girl2 && this.girl2.destroy(!0), this.girl3 && this.girl3.destroy(!0), this.girl3B && this.girl3B.destroy(!0), this.girl3H && this.girl3H.destroy(!0), this.spinner && this.spinner.destroy(!0), this.blocker && this.blocker.destroy(!0), this.gui.dispose(), null !== this.saver && this.saver.dispose()
            }
            waitForLoading() {
                this.nextPrepared = !0
            }
            nextState() {
                this.gui.disable(), this.saver ? (this.saver.setOnOutCallback(() => {
                    this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.reallyGoNextState(!0)
                }), this.saver.fadeOut()) : (this.blocker = this.game.add.graphics(0, 0), this.blocker.beginFill(0), this.blocker.drawRect(0, 0, 960, 720), this.blocker.inputEnabled = !0, this.blocker.alpha = 0, this.game.camera.onFadeComplete.addOnce(() => {
                    this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.game.camera.fade(0, 1, !0, 0), this.blocker.alpha = .85, this.reallyGoNextState(!0)
                }, this), this.game.camera.fade(0, 500, !0, .85))
            }
            reallyGoNextState(t = !1) {
                this.nextPrepared ? this.game.state.start(this.NEXT) : (t && (this.spinner = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, c.ImageUtils.getImageClass("ImagesSpin").getName()), this.spinner.anchor.setTo(.5, .5), h.TweenUtils.rotate(this.spinner, 360, 1 * Phaser.Timer.SECOND, 0, -1)), this.game.time.events.add(.25 * Phaser.Timer.SECOND, this.reallyGoNextState, this))
            }
        }
        e.default = u
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        ! function(t) {
            t[t.DOUBLE_LASER = 0] = "DOUBLE_LASER", t[t.TRIPLE_LASER = 1] = "TRIPLE_LASER", t[t.QUATRO_LASER = 2] = "QUATRO_LASER", t[t.PENTA_LASER = 3] = "PENTA_LASER"
        }(e.LaserType || (e.LaserType = {}))
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0);
        class i {
            constructor() {
                this.game = null, this.container = null, this.laser1 = null, this.laser2 = null, this.game = a.GameConfig.GAME
            }
            init(t, e) {
                this.container = this.game.add.group(), this.container.add(this.laser1 = this.game.add.sprite(63, -50, t, e)), this.container.add(this.laser2 = this.game.add.sprite(861, -46, t, e)), this.laser1.anchor.setTo(.5, 0), this.laser2.anchor.setTo(.5, 0), this.laser1.angle = -31, this.laser2.angle = 29
            }
            getContainer() {
                return this.container
            }
            start() {
                this.game.add.tween(this.laser1).to({
                    angle: 25
                }, 2 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None, !0, 0, 99999).yoyo(!0), this.game.add.tween(this.laser2).to({
                    angle: -20
                }, 2.3 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None, !0, 200, 99999).yoyo(!0)
            }
            dispose() {
                this.game.tweens.removeFrom(this.laser1), this.game.tweens.removeFrom(this.laser2), this.laser1.destroy(!0), this.laser2.destroy(!0), this.container.destroy(!0)
            }
        }
        e.DoubleLaser = i
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0);
        class i {
            constructor() {
                this.game = null, this.container = null, this.laser1 = null, this.laser2 = null, this.laser3 = null, this.game = a.GameConfig.GAME
            }
            init(t, e) {
                this.container = this.game.add.group(), this.container.add(this.laser1 = this.game.add.sprite(476, -8, t, e)), this.container.add(this.laser2 = this.game.add.sprite(159, -6, t, e)), this.container.add(this.laser3 = this.game.add.sprite(829, -7, t, e)), this.laser1.anchor.setTo(.5, 0), this.laser2.anchor.setTo(.5, 0), this.laser3.anchor.setTo(.5, 0), this.laser1.angle = -22, this.laser2.angle = -18, this.laser3.angle = 17
            }
            getContainer() {
                return this.container
            }
            start() {
                this.game.add.tween(this.laser1).to({
                    angle: 27
                }, 2 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None, !0, 0, 99999).yoyo(!0), this.game.add.tween(this.laser2).to({
                    angle: 6
                }, 1 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None, !0, 200, 99999).yoyo(!0), this.game.add.tween(this.laser3).to({
                    angle: -7
                }, 1.25 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None, !0, 400, 99999).yoyo(!0)
            }
            dispose() {
                this.game.tweens.removeFrom(this.laser1), this.game.tweens.removeFrom(this.laser2), this.game.tweens.removeFrom(this.laser3), this.laser1.destroy(!0), this.laser2.destroy(!0), this.laser3.destroy(!0), this.container.destroy(!0)
            }
        }
        e.TripleLaser = i
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0),
            i = s(3);
        class r {
            constructor() {
                this.game = null, this.container = null, this.laser1 = null, this.laser2 = null, this.laser3 = null, this.laser4 = null, this.laser5 = null, this.game = a.GameConfig.GAME
            }
            init(t, e) {
                e ? i.isString(e) && (e = [e, e, e, e, e]) : e = [null, null, null, null, null], this.container = this.game.add.group(), this.container.add(this.laser1 = this.game.add.sprite(-37, -50, t, e[0])), this.container.add(this.laser2 = this.game.add.sprite(354, -46, t, e[1])), this.container.add(this.laser3 = this.game.add.sprite(490, -58, t, e[2])), this.container.add(this.laser4 = this.game.add.sprite(615, -46, t, e[3])), this.container.add(this.laser5 = this.game.add.sprite(989, -30, t, e[4])), this.laser1.anchor.setTo(.5, 0), this.laser2.anchor.setTo(.5, 0), this.laser3.anchor.setTo(.5, 0), this.laser4.anchor.setTo(.5, 0), this.laser5.anchor.setTo(.5, 0), this.laser1.angle = -26, this.laser2.angle = 22, this.laser3.angle = -10, this.laser4.angle = -29, this.laser5.angle = 21
            }
            getContainer() {
                return this.container
            }
            start() {
                this.game.add.tween(this.laser1).to({
                    angle: 5
                }, 1 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None, !0, 0, 99999).yoyo(!0), this.game.add.tween(this.laser2).to({
                    angle: 11
                }, 1.3 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None, !0, 200, 99999).yoyo(!0), this.game.add.tween(this.laser3).to({
                    angle: 10
                }, 1.1 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None, !0, 200, 99999).yoyo(!0), this.game.add.tween(this.laser4).to({
                    angle: -5
                }, 1.2 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None, !0, 200, 99999).yoyo(!0), this.game.add.tween(this.laser5).to({
                    angle: 0
                }, 1 * Phaser.Timer.SECOND, Phaser.Easing.Linear.None, !0, 200, 99999).yoyo(!0)
            }
            dispose() {
                this.game.tweens.removeFrom(this.laser1), this.game.tweens.removeFrom(this.laser2), this.game.tweens.removeFrom(this.laser3), this.game.tweens.removeFrom(this.laser4), this.game.tweens.removeFrom(this.laser5), this.laser1.destroy(!0), this.laser2.destroy(!0), this.laser3.destroy(!0), this.laser4.destroy(!0), this.laser5.destroy(!0), this.container.destroy(!0)
            }
        }
        e.PentaLaser = r
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(8),
            i = s(5),
            r = s(0),
            l = s(11),
            n = s(12),
            o = s(13),
            g = s(1),
            h = s(10),
            c = s(7),
            d = s(4),
            m = s(2);
        class u extends Phaser.State {
            constructor() {
                super(...arguments), this.NEXT = "Drag", this.nextPrepared = !1, this.gui = null, this.saver = null, this.bg = null, this.girl1 = null, this.girl2 = null, this.cloud1 = null, this.cloud2 = null, this.cloud3 = null, this.cloud4 = null, this.cloud5 = null, this.cloud6 = null, this.cloud7 = null, this.spinner = null, this.blocker = null
            }
            init(...t) {
                switch (r.GameConfig.SITE) {
                    case r.Sites.MY_CUTE_GAMES:
                        this.gui = new l.GuiMcg(this, i.StateType.COMIX_STATE);
                        break;
                    case r.Sites.DRESSUP_MIX:
                        this.gui = new n.GuiDu(this, i.StateType.COMIX_STATE);
                        break;
                    case r.Sites.FREE_GAMES_CASUAL:
                        this.gui = new o.GuiFgc(this, i.StateType.COMIX_STATE)
                }
            }
            preload() {}
            create() {
                if (this.bg = this.game.add.sprite(0, 0, m.ImageUtils.getImageClass("ImagesBg2").getName()), this.girl2 = this.game.add.sprite(533, 30, m.ImageUtils.getAtlasClass("AtlasesStateComix").getName(), m.ImageUtils.getAtlasClass("AtlasesStateComix").Frames.Gr2), this.girl1 = this.game.add.sprite(328, 30, m.ImageUtils.getAtlasClass("AtlasesStateComix").getName(), m.ImageUtils.getAtlasClass("AtlasesStateComix").Frames.Gr1), this.cloud1 = this.game.add.sprite(420, 169, m.ImageUtils.getAtlasClass("AtlasesStateComix").getName(), m.ImageUtils.getAtlasClass("AtlasesStateComix").Frames.ClSm1), this.cloud2 = this.game.add.sprite(374, 203, m.ImageUtils.getAtlasClass("AtlasesStateComix").getName(), m.ImageUtils.getAtlasClass("AtlasesStateComix").Frames.ClSm2), this.cloud3 = this.game.add.sprite(300, 362, m.ImageUtils.getAtlasClass("AtlasesStateComix").getName(), m.ImageUtils.getAtlasClass("AtlasesStateComix").Frames.Cl1), this.cloud4 = this.game.add.sprite(632, 160, m.ImageUtils.getAtlasClass("AtlasesStateComix").getName(), m.ImageUtils.getAtlasClass("AtlasesStateComix").Frames.ClSm1), this.cloud5 = this.game.add.sprite(628, 210, m.ImageUtils.getAtlasClass("AtlasesStateComix").getName(), m.ImageUtils.getAtlasClass("AtlasesStateComix").Frames.ClSm2), this.cloud6 = this.game.add.sprite(555, 372, m.ImageUtils.getAtlasClass("AtlasesStateComix").getName(), m.ImageUtils.getAtlasClass("AtlasesStateComix").Frames.Cl2), this.cloud7 = this.game.add.sprite(300, 362, m.ImageUtils.getAtlasClass("AtlasesStateComix").getName(), m.ImageUtils.getAtlasClass("AtlasesStateComix").Frames.Cl3), this.cloud1.anchor.setTo(.5), this.cloud2.anchor.setTo(.5), this.cloud3.anchor.setTo(.5), this.cloud4.anchor.setTo(.5), this.cloud5.anchor.setTo(.5), this.cloud6.anchor.setTo(.5), this.cloud7.anchor.setTo(.5), this.cloud1.alpha = 0, this.cloud2.alpha = 0, this.cloud3.alpha = 0, this.cloud4.alpha = 0, this.cloud5.alpha = 0, this.cloud6.alpha = 0, this.cloud7.alpha = 0, this.cloud1.scale.setTo(0), this.cloud2.scale.setTo(0), this.cloud3.scale.setTo(0), this.cloud4.scale.setTo(0), this.cloud5.scale.setTo(0), this.cloud6.scale.setTo(0), this.cloud7.scale.setTo(0), this.gui.addGui(r.GameConfig.PUB_MODE === r.PublishMode.DUW, !0), r.GameConfig.PUB_MODE !== r.PublishMode.DUW) {
                    const t = this.gui.addExtraMore(799, 460, m.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), m.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.MoreE);
                    d.TweenUtils.callEvery(2 * Phaser.Timer.SECOND, () => {
                        c.EffectUtils.makeRotateAnimation(t, 100, -10)
                    }, this);
                    const e = this.game.add.sprite(799, 460, m.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), m.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Sp1),
                        s = this.game.add.sprite(799, 460, m.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), m.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Sp2);
                    e.alpha = 0, s.alpha = 0, c.EffectUtils.makeAlphaAnimation(e), d.TweenUtils.delayedCall(.5 * Phaser.Timer.SECOND, () => {
                        c.EffectUtils.makeAlphaAnimation(s)
                    }, this)
                }
                const t = this.gui.addPlayBtn(this.nextState);
                t.scale.setTo(0), t.alpha = 0, this.saver = g.GuiUtils.getSaver(), this.saver ? (this.saver.init(this), this.saver.fadeIn()) : this.game.camera.flash(0, 1e3), d.TweenUtils.fadeAndScaleIn(this.cloud1, .5 * Phaser.Timer.SECOND, 2 * Phaser.Timer.SECOND), d.TweenUtils.fadeAndScaleIn(this.cloud2, .5 * Phaser.Timer.SECOND, 2.5 * Phaser.Timer.SECOND), d.TweenUtils.fadeAndScaleIn(this.cloud3, .5 * Phaser.Timer.SECOND, 3 * Phaser.Timer.SECOND, () => {
                    d.TweenUtils.fadeAndScaleOut(this.cloud1, .5 * Phaser.Timer.SECOND, 0 * Phaser.Timer.SECOND), d.TweenUtils.fadeAndScaleOut(this.cloud2, .5 * Phaser.Timer.SECOND, .5 * Phaser.Timer.SECOND), d.TweenUtils.fadeAndScaleOut(this.cloud3, .5 * Phaser.Timer.SECOND, 3 * Phaser.Timer.SECOND), d.TweenUtils.fadeAndScaleIn(this.cloud4, .5 * Phaser.Timer.SECOND, 2 * Phaser.Timer.SECOND), d.TweenUtils.fadeAndScaleIn(this.cloud5, .5 * Phaser.Timer.SECOND, 2.5 * Phaser.Timer.SECOND), d.TweenUtils.fadeAndScaleIn(this.cloud6, .5 * Phaser.Timer.SECOND, 3 * Phaser.Timer.SECOND, () => {
                        d.TweenUtils.fadeAndScaleOut(this.cloud4, .5 * Phaser.Timer.SECOND, 0 * Phaser.Timer.SECOND), d.TweenUtils.fadeAndScaleOut(this.cloud5, .5 * Phaser.Timer.SECOND, .5 * Phaser.Timer.SECOND), d.TweenUtils.fadeAndScaleOut(this.cloud6, .5 * Phaser.Timer.SECOND, 3 * Phaser.Timer.SECOND), d.TweenUtils.fadeAndScaleIn(this.cloud1, .5 * Phaser.Timer.SECOND, 2 * Phaser.Timer.SECOND), d.TweenUtils.fadeAndScaleIn(this.cloud2, .5 * Phaser.Timer.SECOND, 2.5 * Phaser.Timer.SECOND), d.TweenUtils.fadeAndScaleIn(this.cloud7, .5 * Phaser.Timer.SECOND, 3 * Phaser.Timer.SECOND, () => {
                            d.TweenUtils.fadeAndScaleIn(t, .75 * Phaser.Timer.SECOND, .5 * Phaser.Timer.SECOND)
                        }, this)
                    }, this)
                }, this), r.GameConfig.ASSET_MODE === r.AssetMode.LOAD_ALL ? this.waitForLoading() : r.GameConfig.ASSET_MODE === r.AssetMode.LOAD_BACKGROUND && (h.PreloaderUtils.preloadDecorState(), a.Loader.loadSelectedAssets(this.game, !0, this.waitForLoading, this))
            }
            update() {
                super.update(this.game)
            }
            shutdown() {
                this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.bg && this.bg.destroy(!0), this.girl1 && this.girl1.destroy(!0), this.girl2 && this.girl2.destroy(!0), this.cloud1 && this.cloud1.destroy(!0), this.cloud2 && this.cloud2.destroy(!0), this.cloud3 && this.cloud3.destroy(!0), this.cloud4 && this.cloud4.destroy(!0), this.cloud5 && this.cloud5.destroy(!0), this.cloud6 && this.cloud6.destroy(!0), this.cloud7 && this.cloud7.destroy(!0), this.spinner && this.spinner.destroy(!0), this.blocker && this.blocker.destroy(!0), this.gui.dispose(), null !== this.saver && this.saver.dispose()
            }
            waitForLoading() {
                this.nextPrepared = !0
            }
            nextState() {
                this.gui.disable(), this.saver ? (this.saver.setOnOutCallback(() => {
                    this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.reallyGoNextState(!0)
                }), this.saver.fadeOut()) : (this.blocker = this.game.add.graphics(0, 0), this.blocker.beginFill(0), this.blocker.drawRect(0, 0, 960, 720), this.blocker.inputEnabled = !0, this.blocker.alpha = 0, this.game.camera.onFadeComplete.addOnce(() => {
                    this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.game.camera.fade(0, 1, !0, 0), this.blocker.alpha = .85, this.reallyGoNextState(!0)
                }, this), this.game.camera.fade(0, 500, !0, .85))
            }
            reallyGoNextState(t = !1) {
                this.nextPrepared ? this.game.state.start(this.NEXT) : (t && (this.spinner = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, m.ImageUtils.getImageClass("ImagesSpin").getName()), this.spinner.anchor.setTo(.5, .5), d.TweenUtils.rotate(this.spinner, 360, 1 * Phaser.Timer.SECOND, 0, -1)), this.game.time.events.add(.25 * Phaser.Timer.SECOND, this.reallyGoNextState, this))
            }
        }
        e.default = u
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(8),
            i = s(5),
            r = s(0),
            l = s(11),
            n = s(12),
            o = s(13),
            g = s(1),
            h = s(10),
            c = s(7),
            d = s(4),
            m = s(2),
            u = s(16),
            p = s(14);
        class A extends Phaser.State {
            constructor() {
                super(...arguments), this.NEXT = "Dress1", this.nextPrepared = !1, this.gui = null, this.saver = null, this.bg = null, this.btnContainer = null, this.mmmmBtn = null, this.boxAriel = null, this.boxEric = null, this.curTar = null, this.curDrag = null, this.curItem = null, this.ar1 = null, this.ar2 = null, this.ar3 = null, this.ar4 = null, this.er1 = null, this.er2 = null, this.er3 = null, this.er4 = null, this.arCont1 = null, this.arCont2 = null, this.arCont3 = null, this.arCont4 = null, this.erCont1 = null, this.erCont2 = null, this.erCont3 = null, this.erCont4 = null, this.spinner = null, this.blocker = null, this.prevX = 0, this.prevY = 0, this.total = 0
            }
            init(...t) {
                switch (r.GameConfig.SITE) {
                    case r.Sites.MY_CUTE_GAMES:
                        this.gui = new l.GuiMcg(this, i.StateType.DECOR_STATE);
                        break;
                    case r.Sites.DRESSUP_MIX:
                        this.gui = new n.GuiDu(this, i.StateType.DECOR_STATE);
                        break;
                    case r.Sites.FREE_GAMES_CASUAL:
                        this.gui = new o.GuiFgc(this, i.StateType.DECOR_STATE)
                }
                this.curTar = null, this.total = 0
            }
            preload() {}
            create() {
                if (this.bg = this.game.add.sprite(0, 0, m.ImageUtils.getImageClass("ImagesBg3").getName()), this.ar1 = this.game.add.sprite(0, 0, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Ar1), this.ar2 = this.game.add.sprite(241, 622, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Ar2), this.ar3 = this.game.add.sprite(231, 385, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Ar3), this.ar4 = this.game.add.sprite(230, 235, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Ar4), this.er2 = this.game.add.sprite(551, 214, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Er2), this.er4 = this.game.add.sprite(0, 0, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Er4), this.er1 = this.game.add.sprite(23, 344, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Er1), this.er3 = this.game.add.sprite(11, 500, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Er3), this.ar1.alpha = 0, this.ar2.alpha = 0, this.ar3.alpha = 0, this.ar4.alpha = 0, this.er1.alpha = 0, this.er2.alpha = 0, this.er3.alpha = 0, this.er4.alpha = 0, this.btnContainer = this.game.add.group(), this.mmmmBtn = g.GuiUtils.makeSpritesheetButton(this, this.btnContainer, 373, 207, 1, 8, !0, "", m.ImageUtils.getSpritesheetClass("SpritesheetsMmmm1612035").getName(), null, r.GameConfig.PUB_MODE === r.PublishMode.NORMAL, !0, r.GameConfig.PUB_MODE === r.PublishMode.NORMAL, g.GuiUtils.goLinkInMoreGames, g.GuiUtils.addOverHandler, g.GuiUtils.addOutHandler), this.arCont1 = this.game.add.sprite(0, 0, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ArCon1), this.arCont2 = this.game.add.sprite(241, 615, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ArCon2), this.arCont3 = this.game.add.sprite(223, 373, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ArCon3), this.arCont4 = this.game.add.sprite(220, 224, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ArCon4), this.erCont2 = this.game.add.sprite(543, 203, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ErCon2), this.erCont4 = this.game.add.sprite(0, 0, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ErCon4), this.erCont1 = this.game.add.sprite(12, 333, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ErCon1), this.erCont3 = this.game.add.sprite(0, 488, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ErCon3), this.arCont1.alpha = 0, this.arCont2.alpha = 0, this.arCont3.alpha = 0, this.arCont4.alpha = 0, this.erCont1.alpha = 0, this.erCont2.alpha = 0, this.erCont3.alpha = 0, this.erCont4.alpha = 0, this.boxAriel = new u.Chest(this, 700).static().pageShelf(461, 471, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Box11).item(663, 404, "ar_item3", m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ArItem3, null).item(746, 346, "ar_item2", m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ArItem2, null).pageShelf(593, 487, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Box12).item(572, 482, "ar_item4", m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ArItem4, null).pageShelf(593, 584, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Box13).item(690, 571, "ar_item1", m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ArItem1, null).pageShelf(593, 605, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Box14).build().build(), this.boxEric = new u.Chest(this, -700).static().pageShelf(48, 466, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Box21).item(63, 404, "er_item4", m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ErItem4, null).item(158, 368, "er_item2", m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ErItem2, null).pageShelf(88, 480, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Box22).item(199, 483, "er_item1", m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ErItem1, null).pageShelf(91, 581, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Box23).item(133, 565, "er_item3", m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.ErItem3, null).pageShelf(91, 603, m.ImageUtils.getAtlasClass("AtlasesStateDecor").getName(), m.ImageUtils.getAtlasClass("AtlasesStateDecor").Frames.Box24).build().build(), this.boxAriel.findItem("ar_item1").input.enableDrag(!1, !1, !0, 10), this.boxAriel.findItem("ar_item1").events.onInputUp.add(this.onUp, this), this.boxAriel.findItem("ar_item1").events.onInputDown.add(this.onDown, this), this.boxAriel.findItem("ar_item2").input.enableDrag(!1, !1, !0, 10), this.boxAriel.findItem("ar_item2").events.onInputUp.add(this.onUp, this), this.boxAriel.findItem("ar_item2").events.onInputDown.add(this.onDown, this), this.boxAriel.findItem("ar_item3").input.enableDrag(!1, !1, !0, 10), this.boxAriel.findItem("ar_item3").events.onInputUp.add(this.onUp, this), this.boxAriel.findItem("ar_item3").events.onInputDown.add(this.onDown, this), this.boxAriel.findItem("ar_item4").input.enableDrag(!1, !1, !0, 10), this.boxAriel.findItem("ar_item4").events.onInputUp.add(this.onUp, this), this.boxAriel.findItem("ar_item4").events.onInputDown.add(this.onDown, this), this.boxEric.findItem("er_item1").input.enableDrag(!1, !1, !0, 10), this.boxEric.findItem("er_item1").events.onInputUp.add(this.onUp, this), this.boxEric.findItem("er_item1").events.onInputDown.add(this.onDown, this), this.boxEric.findItem("er_item2").input.enableDrag(!1, !1, !0, 10), this.boxEric.findItem("er_item2").events.onInputUp.add(this.onUp, this), this.boxEric.findItem("er_item2").events.onInputDown.add(this.onDown, this), this.boxEric.findItem("er_item3").input.enableDrag(!1, !1, !0, 10), this.boxEric.findItem("er_item3").events.onInputUp.add(this.onUp, this), this.boxEric.findItem("er_item3").events.onInputDown.add(this.onDown, this), this.boxEric.findItem("er_item4").input.enableDrag(!1, !1, !0, 10), this.boxEric.findItem("er_item4").events.onInputUp.add(this.onUp, this), this.boxEric.findItem("er_item4").events.onInputDown.add(this.onDown, this), this.gui.addGui(r.GameConfig.PUB_MODE === r.PublishMode.DUW, !0), r.GameConfig.PUB_MODE !== r.PublishMode.DUW) {
                    const t = this.gui.addExtraMore(799, 460, m.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), m.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.MoreE);
                    d.TweenUtils.callEvery(2 * Phaser.Timer.SECOND, () => {
                        c.EffectUtils.makeRotateAnimation(t, 100, -10)
                    }, this);
                    const e = this.game.add.sprite(799, 460, m.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), m.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Sp1),
                        s = this.game.add.sprite(799, 460, m.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), m.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Sp2);
                    e.alpha = 0, s.alpha = 0, c.EffectUtils.makeAlphaAnimation(e), d.TweenUtils.delayedCall(.5 * Phaser.Timer.SECOND, () => {
                        c.EffectUtils.makeAlphaAnimation(s)
                    }, this)
                }
                const t = this.gui.addPlayBtn(this.nextState);
                t.scale.setTo(0), t.alpha = 0, this.saver = g.GuiUtils.getSaver(), this.saver ? (this.saver.init(this), this.saver.fadeIn()) : this.game.camera.flash(0, 1e3), d.TweenUtils.delayedCall(2 * Phaser.Timer.SECOND, this.boxEric.show, this.boxEric), d.TweenUtils.delayedCall(3 * Phaser.Timer.SECOND, this.boxAriel.show, this.boxAriel), r.GameConfig.ASSET_MODE === r.AssetMode.LOAD_ALL ? this.waitForLoading() : r.GameConfig.ASSET_MODE === r.AssetMode.LOAD_BACKGROUND && (h.PreloaderUtils.preloadDress1State(), a.Loader.loadSelectedAssets(this.game, !0, this.waitForLoading, this)), r.GameConfig.PUB_MODE !== r.PublishMode.NORMAL && r.GameConfig.PUB_MODE !== r.PublishMode.NO_BUTTONS || p.AdUtils.playAds()
            }
            onDown(t) {
                t.filters = null, this.prevX = t.x, this.prevY = t.y, this.curDrag = t, "ar_item1" === t.name ? (this.curTar = this.arCont1, this.curItem = this.ar1) : "ar_item2" === t.name ? (this.curTar = this.arCont2, this.curItem = this.ar2) : "ar_item3" === t.name ? (this.curTar = this.arCont3, this.curItem = this.ar3) : "ar_item4" === t.name ? (this.curTar = this.arCont4, this.curItem = this.ar4) : "er_item1" === t.name ? (this.curTar = this.erCont1, this.curItem = this.er1) : "er_item2" === t.name ? (this.curTar = this.erCont2, this.curItem = this.er2) : "er_item3" === t.name ? (this.curTar = this.erCont3, this.curItem = this.er3) : "er_item4" === t.name && (this.curTar = this.erCont4, this.curItem = this.er4), c.EffectUtils.makeAlphaAnimation(this.curTar, 1, 750)
            }
            onUp(t) {
                d.TweenUtils.moveInOut(t, this.prevX, this.prevY), d.TweenUtils.kill(this.curTar), d.TweenUtils.fadeOut(this.curTar), this.curTar = null, this.curDrag = null, this.curItem = null
            }
            update() {
                super.update(this.game), null !== this.curTar && Phaser.Rectangle.intersects(new Phaser.Rectangle(this.curTar.x + this.curTar.width / 2 - .2 * this.curTar.width, this.curTar.y + this.curTar.height / 2 - .2 * this.curTar.height, .4 * this.curTar.width, .4 * this.curTar.height), new Phaser.Rectangle(this.curDrag.x - 5, this.curDrag.y - 5, 10, 10)) && (d.TweenUtils.kill(this.curTar), d.TweenUtils.fadeOut(this.curTar), this.curTar = null, this.curDrag.inputEnabled = !1, d.TweenUtils.fadeAndScaleOut(this.curDrag), d.TweenUtils.fadeIn(this.curItem), this.total++, 8 === this.total && d.TweenUtils.delayedCall(2.5 * Phaser.Timer.SECOND, this.nextState, this))
            }
            shutdown() {
                this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.bg && this.bg.destroy(!0), this.btnContainer && this.btnContainer.destroy(!0), this.mmmmBtn && this.mmmmBtn.destroy(!0), this.arCont1 && this.arCont1.destroy(!0), this.arCont2 && this.arCont2.destroy(!0), this.arCont3 && this.arCont3.destroy(!0), this.arCont4 && this.arCont4.destroy(!0), this.erCont1 && this.erCont1.destroy(!0), this.erCont2 && this.erCont2.destroy(!0), this.erCont3 && this.erCont3.destroy(!0), this.erCont4 && this.erCont4.destroy(!0), this.boxAriel && this.boxAriel.dispose(), this.boxEric && this.boxEric.dispose(), this.spinner && this.spinner.destroy(!0), this.blocker && this.blocker.destroy(!0), this.gui.dispose(), null !== this.saver && this.saver.dispose()
            }
            waitForLoading() {
                this.nextPrepared = !0
            }
            nextState() {
                this.gui.disable(), this.saver ? (this.saver.setOnOutCallback(() => {
                    this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.reallyGoNextState(!0)
                }), this.saver.fadeOut()) : (this.blocker = this.game.add.graphics(0, 0), this.blocker.beginFill(0), this.blocker.drawRect(0, 0, 960, 720), this.blocker.inputEnabled = !0, this.blocker.alpha = 0, this.game.camera.onFadeComplete.addOnce(() => {
                    this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.game.camera.fade(0, 1, !0, 0), this.blocker.alpha = .85, this.reallyGoNextState(!0)
                }, this), this.game.camera.fade(0, 500, !0, .85))
            }
            reallyGoNextState(t = !1) {
                this.nextPrepared ? this.game.state.start(this.NEXT) : (t && (this.spinner = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, m.ImageUtils.getImageClass("ImagesSpin").getName()), this.spinner.anchor.setTo(.5, .5), d.TweenUtils.rotate(this.spinner, 360, 1 * Phaser.Timer.SECOND, 0, -1)), this.game.time.events.add(.25 * Phaser.Timer.SECOND, this.reallyGoNextState, this))
            }
        }
        e.default = A
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0),
            i = s(170),
            r = s(1),
            l = s(3),
            n = s(4),
            o = s(171),
            g = s(172);
        class h {
            constructor(t, e, s, i) {
                this.instance = null, this.owner = null, this.game = null, this.state = null, this.container = null, this.shelf = null, this.items = [], this.compoundItems = [], this.instance = this, this.owner = t, this.game = a.GameConfig.GAME, this.state = e, this.container = this.game.add.group(), this.hideStatic = i, s.add(this.container)
            }
            findItem(t) {
                for (let e of this.items)
                    if (e.name === t) return e;
                for (let e of this.compoundItems)
                    if (e.name === t) return e;
                return null
            }
            tryToSetVisibility(t) {
                for (let e of this.items)
                    if (e.name === t) return e.button.inputEnabled = !1, e.button.filters = null, n.TweenUtils.fadeOut(e.button, .3 * Phaser.Timer.SECOND, 0, () => {
                        e.button.visible = !1
                    }, this), !0;
                return !1
            }
            tryToSetLikeVisibility(t) {
                for (let e of this.items) - 1 !== e.name.indexOf(t) && (e.button.visible = !0, e.button.inputEnabled = !0, e.button.filters = null, n.TweenUtils.fadeIn(e.button, .3 * Phaser.Timer.SECOND))
            }
            disable() {
                for (let t of this.items) t.disable()
            }
            enable() {
                for (let t of this.items) t.enable()
            }
            hide() {
                this.container.visible = !1
            }
            show() {
                this.container.visible = !0
            }
            pageShelf(t, e, s, a) {
                return this.shelf = this.game.add.sprite(t, e, s, a, this.container), this.instance
            }
            item(t, e, s, a, l, n, o = r.GuiUtils.addOverGlowHandler, g = r.GuiUtils.addOutGlowHandler) {
                return this.items.push(new i.ChestItem(this.state, this.container, t, e, s, a, l, n, o, g)), this.instance
            }
            animatedItem(t, e, s, a, i, l = 10, n = !0, o, h = r.GuiUtils.addOverGlowHandler, c = r.GuiUtils.addOutGlowHandler) {
                return this.items.push(new g.AnimatedChestItem(this.state, this.container, t, e, s, a, i, l, n, o, h, c)), this.instance
            }
            compoundItem(t, e, s, a, i, l, n, g, h, c, d = r.GuiUtils.addOverGlowHandler, m = r.GuiUtils.addOutGlowHandler) {
                return this.compoundItems.push(new o.ChestCompoundItem(this.state, this.container, t, e, s, a, i, l, n, g, h, c, d, m)), this.instance
            }
            build() {
                return this.owner
            }
            dispose() {
                for (let t of this.items) t.dispose();
                for (let t of this.compoundItems) t.dispose();
                l.isNull(this.shelf) || this.shelf.destroy(!0), this.container.destroy(!0)
            }
        }
        e.ChestPage = h
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(1),
            i = s(3),
            r = s(0),
            l = s(17);
        class n extends l.ChestItemBase {
            constructor(t, e, s, l, n, o, g, h, c, d) {
                super(), this.game = null, this.state = null, this.button = null, this.name = null, this.game = r.GameConfig.GAME, this.state = t, this.name = n, null == g ? g = [0, 0, 0] : i.isString(g) && (g = [g, g, g]);
                let m = !0; - 1 === n.indexOf("mmmm") && -1 === n.indexOf("cross") || r.GameConfig.PUB_MODE !== r.PublishMode.NORMAL && (m = !1), this.button = a.GuiUtils.makeButton(this.state, e, s, l, 1, n, o, g, !0, !0, m, h, c, d)
            }
            disable() {
                this.button.inputEnabled = !1, this.button.filters = null
            }
            enable() {
                this.button.inputEnabled = !0
            }
            dispose() {
                this.button.destroy(!0)
            }
        }
        e.ChestItem = n
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(1),
            i = s(0),
            r = s(17);
        class l extends r.ChestItemBase {
            constructor(t, e, s, r, l, n, o, g, h, c, d, m, u, p) {
                super(), this.game = null, this.state = null, this.button = null, this.name = null, this.asset = null, this.prefix = null, this.frameClass = null, this.emptyState = -1, this.length = 0, this.current = 0, this.game = i.GameConfig.GAME, this.state = t, this.name = g, this.prefix = d, this.asset = h, this.frameClass = c, this.emptyState = l, this.length = s, this.current = r;
                const A = c[d + r],
                    S = [A, A, A];
                this.button = a.GuiUtils.makeButton(this.state, e, n, o, 1, `${g}${r}`, h, S, !0, !0, !0, m, u, p), this.button.events.onInputUp.add(this.onClick, this)
            }
            onClick() {
                this.current++, this.current > this.length && (this.current = 1), this.button.name = this.name + this.current, this.button.setFrames(this.frameClass[this.prefix + this.current], this.frameClass[this.prefix + this.current], this.frameClass[this.prefix + this.current], this.frameClass[this.prefix + this.current])
            }
            disable() {
                this.button.inputEnabled = !1, this.button.filters = null
            }
            enable() {
                this.button.inputEnabled = !0
            }
            dispose() {
                this.button.events.onInputUp.remove(this.onClick, this), this.button.destroy(!0)
            }
        }
        e.ChestCompoundItem = l
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(1),
            i = s(0),
            r = s(17);
        class l extends r.ChestItemBase {
            constructor(t, e, s, r, l, n, o, g = 10, h = !0, c, d, m) {
                super(), this.game = null, this.state = null, this.button = null, this.name = null, this.game = i.GameConfig.GAME, this.state = t, this.name = l;
                let u = !0; - 1 === l.indexOf("mmmm") && -1 === l.indexOf("cross") || i.GameConfig.PUB_MODE !== i.PublishMode.NORMAL && (u = !1), this.button = a.GuiUtils.makeSpritesheetButton(this.state, e, s, r, 1, g, h, l, n, o, !0, !0, u, c, d, m)
            }
            disable() {
                this.button.inputEnabled = !1, this.button.filters = null
            }
            enable() {
                this.button.inputEnabled = !0
            }
            dispose() {
                this.button.destroy(!0)
            }
        }
        e.AnimatedChestItem = l
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        class a {
            constructor(t, e, s, a = !1) {
                this.name = t, this.startPage = e, this.endPage = s, this.withArrows = a
            }
        }
        e.ChestCategory = a
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(8),
            i = s(5),
            r = s(0),
            l = s(11),
            n = s(12),
            o = s(13),
            g = s(1),
            h = s(10),
            c = s(7),
            d = s(4),
            m = s(16),
            u = s(21),
            p = s(14),
            A = s(2);
        class S extends Phaser.State {
            constructor() {
                super(...arguments), this.NEXT = "Dress2", this.nextPrepared = !1, this.gui = null, this.saver = null, this.doll = null, this.chest = null, this.spinner = null, this.bg = null, this.btnContainer = null, this.mmmm = null, this.blocker = null, this.playBtn = null
            }
            init(...t) {
                switch (r.GameConfig.SITE) {
                    case r.Sites.MY_CUTE_GAMES:
                        this.gui = new l.GuiMcg(this, i.StateType.DRESS_STATE);
                        break;
                    case r.Sites.DRESSUP_MIX:
                        this.gui = new n.GuiDu(this, i.StateType.DRESS_STATE);
                        break;
                    case r.Sites.FREE_GAMES_CASUAL:
                        this.gui = new o.GuiFgc(this, i.StateType.DRESS_STATE)
                }
            }
            preload() {}
            create() {
                if (this.bg = this.game.add.sprite(0, 0, A.ImageUtils.getImageClass("ImagesBg4").getName()), this.chest = new m.Chest(this, -700).configure({
                    hideSelected: !0
                }).background(0, 0, A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Chest).page().pageShelf(70, 121, A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Shelf1).item(310, 106, "dress1", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Dress1, this.onItem).item(221, 109, "dress3", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Dress3, this.onItem).item(143, 111, "dress4", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Dress4, this.onItem).item(45, 109, "dress6", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Dress6, this.onItem).build().page().pageShelf(70, 121, A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Shelf2).item(356, 114, "dress2", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Dress2, this.onItem).item(288, 116, "dress8", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Dress8, this.onItem).item(195, 113, "dress5", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Dress5, this.onItem).item(98, 112, "dress7", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Dress7, this.onItem).item(23, 111, "mmmm", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Mmmm, g.GuiUtils.goLinkInMoreGames).item(214, 519, "shoe1", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Shoe1, this.onItem).item(298, 539, "shoe2", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Shoe2, this.onItem).item(382, 546, "shoe3", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Shoe3, this.onItem).item(272, 440, "shoe4", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Shoe4, this.onItem).item(125, 548, "shoe5", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Shoe5, this.onItem).item(362, 433, "shoe6", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Shoe6, this.onItem).build().page().pageShelf(62, 261, A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Shelf3).item(74, 98, "hair1", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Hair1, this.onItem).item(70, 267, "hair2", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Hair2, this.onItem).item(226, 98, "hair3", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Hair3, this.onItem).item(332, 97, "hair4", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Hair4, this.onItem).item(221, 290, "hair5", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Hair5, this.onItem).item(349, 279, "hair6", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Hair6, this.onItem).item(113, 498, "jew1", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Jew1, this.onItem).item(214, 467, "bag1", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Bag1, this.onItem).item(327, 458, "bag2", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Bag2, this.onItem).item(197, 586, "glass1", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Glass1, this.onItem).item(300, 567, "hat1", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Hat1, this.onItem).item(409, 524, "acs1", A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Acs1, this.onItem).build().leftArrow(-4, 343, A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Lb).rightArrow(437, 343, A.ImageUtils.getAtlasClass("AtlasesStateDress1").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress1").Frames.Rb).build(), this.doll = new u.Doll(this, 544, 25).layer(0, 0, "hair_b", "AtlasesDollAriel", "HB", "HB").layer(0, 0, "body", "AtlasesDollAriel", "Body", "Body").layer(0, 0, "jew", "AtlasesDollAriel", "J", null, !0).layer(0, 0, "shoe", "AtlasesDollAriel", "S", "S").layer(0, 0, "dress", "AtlasesDollAriel", "D", "D").layer(0, 0, "hair", "AtlasesDollAriel", "H", "H").layer(0, 0, "bag", "AtlasesDollAriel", "Bb", null, !0).layer(0, 0, "hat", "AtlasesDollAriel", "Ht", null, !0).layer(0, 0, "acs", "AtlasesDollAriel", "Ac", null, !0).layer(0, 0, "glass", "AtlasesDollAriel", "Gs", null, !0).layer(0, 0, "hand", "AtlasesDollAriel", "Hand", "Hand"), this.gui.addGui(r.GameConfig.PUB_MODE === r.PublishMode.DUW, !0), r.GameConfig.PUB_MODE !== r.PublishMode.DUW) {
                    const t = this.gui.addExtraMore(799, 460, A.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), A.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.MoreE);
                    d.TweenUtils.callEvery(2 * Phaser.Timer.SECOND, () => {
                        c.EffectUtils.makeRotateAnimation(t, 100, -10)
                    }, this);
                    const e = this.game.add.sprite(799, 460, A.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), A.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Sp1),
                        s = this.game.add.sprite(799, 460, A.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), A.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Sp2);
                    e.alpha = 0, s.alpha = 0, c.EffectUtils.makeAlphaAnimation(e), d.TweenUtils.delayedCall(.5 * Phaser.Timer.SECOND, () => {
                        c.EffectUtils.makeAlphaAnimation(s)
                    }, this)
                }
                this.playBtn = this.gui.addPlayBtn(this.nextState), this.playBtn.scale.setTo(0), this.playBtn.alpha = 0, this.saver = g.GuiUtils.getSaver(), this.saver ? (this.saver.init(this), this.saver.fadeIn()) : this.game.camera.flash(0, 1e3), d.TweenUtils.delayedCall(2 * Phaser.Timer.SECOND, this.chest.show, this.chest), r.GameConfig.IS_ASSETS_LOADED ? this.waitForLoading() : r.GameConfig.ASSET_MODE === r.AssetMode.LOAD_BACKGROUND && (h.PreloaderUtils.preloadDress2State(), a.Loader.loadSelectedAssets(this.game, !0, this.waitForLoading, this)), r.GameConfig.PUB_MODE !== r.PublishMode.NORMAL && r.GameConfig.PUB_MODE !== r.PublishMode.NO_BUTTONS || p.AdUtils.playAds()
            }
            onItem(t) {
                const e = t.name;
                let s; - 1 !== e.indexOf("dress") ? (s = parseInt(e.substr(5)), this.doll.on("dress", s, "top", "bot", "und") && this.chest.onEquiped(e, "dress", "top", "bot"), this.doll.on("dress_b", s), 0 === this.playBtn.alpha && d.TweenUtils.fadeAndScaleIn(this.playBtn)) : -1 !== e.indexOf("top") ? (s = parseInt(e.substr(3)), this.doll.on("top", s, "dress") && this.chest.onEquiped(e, "top", "dress"), 0 === this.playBtn.alpha && d.TweenUtils.fadeAndScaleIn(this.playBtn)) : -1 !== e.indexOf("bot") ? (s = parseInt(e.substr(3)), this.doll.on("bot", s, "dress") && this.chest.onEquiped(e, "bot", "dress"), 0 === this.playBtn.alpha && d.TweenUtils.fadeAndScaleIn(this.playBtn)) : -1 !== e.indexOf("shoe") ? (s = parseInt(e.substr(4)), this.doll.on("shoe", s) && this.chest.onEquiped(e, "shoe")) : -1 !== e.indexOf("jew") ? (s = parseInt(e.substr(3)), this.doll.on("jew", s), this.doll.on("jew_b", s), this.doll.on("jew_f", s)) : -1 !== e.indexOf("hat") ? (s = parseInt(e.substr(3)), this.doll.on("hat", s)) : -1 !== e.indexOf("acs") ? (s = parseInt(e.substr(3)), this.doll.on("acs", s, "bag")) : -1 !== e.indexOf("bag") ? (s = parseInt(e.substr(3)), this.doll.on("bag", s, "acs"), this.doll.on("bag_b", s)) : -1 !== e.indexOf("glove") ? (s = parseInt(e.substr(5)), this.doll.on("glove", s)) : -1 !== e.indexOf("glass") ? (s = parseInt(e.substr(5)), this.doll.on("glass", s)) : -1 !== e.indexOf("hair") && (s = parseInt(e.substr(4)), this.doll.on("hair", s) && this.chest.onEquiped(e, "hair"), this.doll.on("hair_b", s))
            }
            update() {
                super.update(this.game)
            }
            shutdown() {
                this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.chest.dispose(), this.bg && this.bg.destroy(!0), this.btnContainer && this.btnContainer.destroy(!0), this.mmmm && this.mmmm.destroy(!0), this.spinner && this.spinner.destroy(!0), this.blocker && this.blocker.destroy(!0), this.gui.dispose(), null !== this.saver && this.saver.dispose(), r.GameConfig.DOLL_1 = this.doll.extract()
            }
            waitForLoading() {
                this.nextPrepared = !0
            }
            nextState() {
                r.GameConfig.CURRENT_STATE++, this.gui.disable(), this.chest.disable(), this.chest.hide(), d.TweenUtils.moveInOut(this.doll.getBody(), this.doll.getBody().x - 200, this.doll.getBody().y, 2e3), d.TweenUtils.delayedCall(2.5 * Phaser.Timer.SECOND, () => {
                    this.saver ? (this.saver.setOnOutCallback(() => {
                        this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.reallyGoNextState(!0)
                    }), this.saver.fadeOut()) : (this.blocker = this.game.add.graphics(0, 0), this.blocker.beginFill(0), this.blocker.drawRect(0, 0, 960, 720), this.blocker.inputEnabled = !0, this.blocker.alpha = 0, this.game.camera.onFadeComplete.addOnce(() => {
                        this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.game.camera.fade(0, 1, !0, 0), this.blocker.alpha = .85, this.reallyGoNextState(!0)
                    }, this), this.game.camera.fade(0, 500, !0, .85))
                }, this)
            }
            reallyGoNextState(t = !1) {
                this.nextPrepared ? this.game.state.start(this.NEXT) : (t && (this.spinner = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, A.ImageUtils.getImageClass("ImagesSpin").getName()), this.spinner.anchor.setTo(.5, .5), d.TweenUtils.rotate(this.spinner, 360, 1 * Phaser.Timer.SECOND, 0, -1)), this.game.time.events.add(.25 * Phaser.Timer.SECOND, this.reallyGoNextState, this))
            }
        }
        e.default = S
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(0),
            i = s(3),
            r = s(2);
        class l {
            constructor(t, e, s, l, n, o, g = !1, h = []) {
                switch (this.game = null, this.sprite = null, this.assetClass = null, this.guiAtlas = null, this.dummyFrame = null, this.isSecondary = !1, this.tempIndex = -1, this.game = a.GameConfig.GAME, this.assetClass = l, this.prefix = n, this.removable = g, this.strictIndexes = h, this.isEmpty = i.isUndefined(o) || i.isNull(o), this.isEmpty || (isNaN(parseInt(o.substr(o.length - 1))) ? this.tempIndex = 0 : this.tempIndex = parseInt(o.substr(o.length - 1))), a.GameConfig.SITE) {
                    case a.Sites.FREE_GAMES_CASUAL:
                        this.guiAtlas = r.ImageUtils.getAtlasClass("AtlasesGuiFgc").getName(), this.dummyFrame = r.ImageUtils.getAtlasClass("AtlasesGuiFgc").Frames.Dummy;
                        break;
                    case a.Sites.MY_CUTE_GAMES:
                        this.guiAtlas = r.ImageUtils.getAtlasClass("AtlasesGuiMcg").getName(), this.dummyFrame = r.ImageUtils.getAtlasClass("AtlasesGuiMcg").Frames.Dummy;
                        break;
                    case a.Sites.DRESSUP_MIX:
                        this.guiAtlas = r.ImageUtils.getAtlasClass("AtlasesGuiDu").getName(), this.dummyFrame = r.ImageUtils.getAtlasClass("AtlasesGuiDu").Frames.Dummy
                }
                const c = this.getClassForIndex(this.tempIndex);
                this.sprite = this.game.add.sprite(e, s, this.isEmpty || i.isNull(c) ? this.guiAtlas : c.getName(), this.isEmpty || i.isNull(c) ? this.dummyFrame : c.Frames[o], t), this.sprite.inputEnabled && (this.sprite.input.pixelPerfectClick = this.sprite.input.pixelPerfectOver = !0)
            }
            operate(t) {
                this.tempIndex = t;
                const e = this.getClassForIndex(t);
                if (i.isNull(e)) this.sprite.loadTexture(this.guiAtlas, this.dummyFrame), this.isEmpty = !0;
                else {
                    if (!(this.sprite.frameName === e.Frames[this.prefix + (this.isSecondary ? "S" : "") + t] && this.removable || -1 === t)) return this.isStricted(t) ? (this.sprite.loadTexture(this.guiAtlas, this.dummyFrame), this.isEmpty = !0) : i.isNull(e.Frames[this.prefix + (this.isSecondary ? "S" : "") + t]) ? (this.sprite.loadTexture(this.guiAtlas, this.dummyFrame), this.isEmpty = !0) : (this.sprite.loadTexture(e.getName(), e.Frames[this.prefix + (this.isSecondary ? "S" : "") + (0 !== t ? t : "")]), this.isEmpty = !1), !this.removable;
                    this.sprite.loadTexture(this.guiAtlas, this.dummyFrame), this.isEmpty = !0
                }
                return !1
            }
            setSecondaryState(t) {
                this.isSecondary = t, this.isEmpty || this.sprite.loadTexture(this.getClassForIndex(this.tempIndex).getName(), this.getClassForIndex(this.tempIndex).Frames[this.prefix + (this.isSecondary && 0 !== this.tempIndex ? "S" : "") + (0 !== this.tempIndex ? this.tempIndex : "")])
            }
            getClassForIndex(t) {
                let e = 0 === t ? "" : t + "";
                return r.ImageUtils.getAtlasClass(this.assetClass).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(this.assetClass) : r.ImageUtils.getAtlasClass(`${this.assetClass}2`) && r.ImageUtils.getAtlasClass(`${this.assetClass}2`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}2`) : r.ImageUtils.getAtlasClass(`${this.assetClass}3`) && r.ImageUtils.getAtlasClass(`${this.assetClass}3`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}3`) : r.ImageUtils.getAtlasClass(`${this.assetClass}4`) && r.ImageUtils.getAtlasClass(`${this.assetClass}4`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}4`) : r.ImageUtils.getAtlasClass(`${this.assetClass}5`) && r.ImageUtils.getAtlasClass(`${this.assetClass}5`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}5`) : r.ImageUtils.getAtlasClass(`${this.assetClass}6`) && r.ImageUtils.getAtlasClass(`${this.assetClass}6`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}6`) : r.ImageUtils.getAtlasClass(`${this.assetClass}7`) && r.ImageUtils.getAtlasClass(`${this.assetClass}7`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}7`) : r.ImageUtils.getAtlasClass(`${this.assetClass}8`) && r.ImageUtils.getAtlasClass(`${this.assetClass}8`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}8`) : r.ImageUtils.getAtlasClass(`${this.assetClass}9`) && r.ImageUtils.getAtlasClass(`${this.assetClass}9`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}9`) : r.ImageUtils.getAtlasClass(`${this.assetClass}10`) && r.ImageUtils.getAtlasClass(`${this.assetClass}10`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}10`) : r.ImageUtils.getAtlasClass(`${this.assetClass}11`) && r.ImageUtils.getAtlasClass(`${this.assetClass}11`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}11`) : r.ImageUtils.getAtlasClass(`${this.assetClass}12`) && r.ImageUtils.getAtlasClass(`${this.assetClass}12`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}12`) : r.ImageUtils.getAtlasClass(`${this.assetClass}13`) && r.ImageUtils.getAtlasClass(`${this.assetClass}13`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}13`) : r.ImageUtils.getAtlasClass(`${this.assetClass}14`) && r.ImageUtils.getAtlasClass(`${this.assetClass}14`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}14`) : r.ImageUtils.getAtlasClass(`${this.assetClass}15`) && r.ImageUtils.getAtlasClass(`${this.assetClass}15`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}15`) : r.ImageUtils.getAtlasClass(`${this.assetClass}16`) && r.ImageUtils.getAtlasClass(`${this.assetClass}16`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}16`) : r.ImageUtils.getAtlasClass(`${this.assetClass}17`) && r.ImageUtils.getAtlasClass(`${this.assetClass}17`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}17`) : r.ImageUtils.getAtlasClass(`${this.assetClass}18`) && r.ImageUtils.getAtlasClass(`${this.assetClass}18`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}18`) : r.ImageUtils.getAtlasClass(`${this.assetClass}19`) && r.ImageUtils.getAtlasClass(`${this.assetClass}19`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}19`) : r.ImageUtils.getAtlasClass(`${this.assetClass}20`) && r.ImageUtils.getAtlasClass(`${this.assetClass}20`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}20`) : r.ImageUtils.getAtlasClass(`${this.assetClass}21`) && r.ImageUtils.getAtlasClass(`${this.assetClass}21`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}21`) : r.ImageUtils.getAtlasClass(`${this.assetClass}22`) && r.ImageUtils.getAtlasClass(`${this.assetClass}22`).Frames[this.prefix + e] ? r.ImageUtils.getAtlasClass(`${this.assetClass}22`) : null
            }
            remove() {
                this.sprite.loadTexture(this.guiAtlas, this.dummyFrame)
            }
            isStricted(t) {
                for (let e of this.strictIndexes)
                    if (e === t) return !0;
                return !1
            }
            dispose() {
                this.sprite.destroy(!0)
            }
        }
        e.DollLayer = l
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(8),
            i = s(5),
            r = s(0),
            l = s(11),
            n = s(12),
            o = s(13),
            g = s(1),
            h = s(10),
            c = s(7),
            d = s(4),
            m = s(16),
            u = s(21),
            p = s(14),
            A = s(2);
        class S extends Phaser.State {
            constructor() {
                super(...arguments), this.NEXT = "Final", this.nextPrepared = !1, this.gui = null, this.saver = null, this.doll = null, this.chest = null, this.spinner = null, this.bg = null, this.btnContainer = null, this.mmmm = null, this.blocker = null, this.playBtn = null
            }
            init(...t) {
                switch (r.GameConfig.SITE) {
                    case r.Sites.MY_CUTE_GAMES:
                        this.gui = new l.GuiMcg(this, i.StateType.DRESS_STATE);
                        break;
                    case r.Sites.DRESSUP_MIX:
                        this.gui = new n.GuiDu(this, i.StateType.DRESS_STATE);
                        break;
                    case r.Sites.FREE_GAMES_CASUAL:
                        this.gui = new o.GuiFgc(this, i.StateType.DRESS_STATE)
                }
            }
            preload() {}
            create() {
                if (this.bg = this.game.add.sprite(0, 0, A.ImageUtils.getImageClass("ImagesBg5").getName()), this.chest = new m.Chest(this, -700).configure({
                    hideSelected: !0
                }).background(0, 8, A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Chest).page().item(354, 206, "dress1", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Dress1, this.onItem).item(255, 210, "dress2", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Dress2, this.onItem).item(136, 207, "dress3", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Dress3, this.onItem).build().page().item(352, 207, "dress4", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Dress4, this.onItem).item(242, 207, "dress5", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Dress5, this.onItem).item(138, 207, "dress6", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Dress6, this.onItem).build().static().item(7, 173, "hair1", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Hair1, this.onItem).item(10, 268, "hair2", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Hair2, this.onItem).item(4, 359, "hair3", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Hair3, this.onItem).item(515, 172, "hair4", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Hair4, this.onItem).item(506, 268, "hair5", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Hair5, this.onItem).item(518, 366, "hair6", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Hair6, this.onItem).item(152, 584, "shoe1", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Shoe1, this.onItem).item(489, 558, "shoe2", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Shoe2, this.onItem).item(319, 574, "shoe3", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Shoe3, this.onItem).item(403, 590, "shoe4", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Shoe4, this.onItem).item(230, 589, "shoe5", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Shoe5, this.onItem).item(246, 42, "acs1", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Acs1, this.onItem).item(308, 13, "acs2", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Acs2, this.onItem).item(384, 43, "glass1", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Glass1, this.onItem).item(457, -3, "bag1", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Bag1, this.onItem).build().leftArrow(204, 115, A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Lb).rightArrow(332, 115, A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Rb).build(), this.btnContainer = this.game.add.group(), this.mmmm = g.GuiUtils.makeButton(this, this.btnContainer, 736, 92, 1, "", A.ImageUtils.getAtlasClass("AtlasesStateDress2").getName(), A.ImageUtils.getAtlasClass("AtlasesStateDress2").Frames.Mmmm, r.GameConfig.PUB_MODE === r.PublishMode.NORMAL, !0, r.GameConfig.PUB_MODE === r.PublishMode.NORMAL, g.GuiUtils.goLinkInMoreGames, g.GuiUtils.addOverHandler, g.GuiUtils.addOutHandler), this.doll = new u.Doll(this, 606, 40).layer(0, 0, "hair_b", "AtlasesDollEric", "HB", "HB").layer(0, 0, "body", "AtlasesDollEric", "Body", "Body").layer(0, 0, "acs", "AtlasesDollEric", "Ac", null, !0).layer(0, 0, "shoe", "AtlasesDollEric", "S", "S").layer(0, 0, "dress", "AtlasesDollEric", "D", "D").layer(0, 0, "bag", "AtlasesDollEric", "Bb", null, !0).layer(0, 0, "hair", "AtlasesDollEric", "H", "H").layer(0, 0, "hand", "AtlasesDollEric", "Hand", "Hand").layer(0, 0, "glass", "AtlasesDollEric", "Gs", null, !0), this.gui.addGui(r.GameConfig.PUB_MODE === r.PublishMode.DUW, !0), r.GameConfig.PUB_MODE !== r.PublishMode.DUW) {
                    const t = this.gui.addExtraMore(799, 460, A.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), A.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.MoreE);
                    d.TweenUtils.callEvery(2 * Phaser.Timer.SECOND, () => {
                        c.EffectUtils.makeRotateAnimation(t, 100, -10)
                    }, this);
                    const e = this.game.add.sprite(799, 460, A.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), A.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Sp1),
                        s = this.game.add.sprite(799, 460, A.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), A.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Sp2);
                    e.alpha = 0, s.alpha = 0, c.EffectUtils.makeAlphaAnimation(e), d.TweenUtils.delayedCall(.5 * Phaser.Timer.SECOND, () => {
                        c.EffectUtils.makeAlphaAnimation(s)
                    }, this)
                }
                this.playBtn = this.gui.addPlayBtn(this.nextState), this.playBtn.scale.setTo(0), this.playBtn.alpha = 0, this.saver = g.GuiUtils.getSaver(), this.saver ? (this.saver.init(this), this.saver.fadeIn()) : this.game.camera.flash(0, 1e3), d.TweenUtils.delayedCall(2 * Phaser.Timer.SECOND, this.chest.show, this.chest), r.GameConfig.IS_ASSETS_LOADED ? this.waitForLoading() : r.GameConfig.ASSET_MODE === r.AssetMode.LOAD_BACKGROUND && (h.PreloaderUtils.preloadFinalState(), a.Loader.loadSelectedAssets(this.game, !0, this.waitForLoading, this)), r.GameConfig.PUB_MODE !== r.PublishMode.NORMAL && r.GameConfig.PUB_MODE !== r.PublishMode.NO_BUTTONS && r.GameConfig.PUB_MODE !== r.PublishMode.NO_BUTTONS_ONE_AD && r.GameConfig.PUB_MODE !== r.PublishMode.DUW || p.AdUtils.playAds()
            }
            onItem(t) {
                const e = t.name;
                let s; - 1 !== e.indexOf("dress") ? (s = parseInt(e.substr(5)), this.doll.on("dress", s, "top", "bot", "und") && this.chest.onEquiped(e, "dress", "top", "bot"), this.doll.on("dress_b", s), 0 === this.playBtn.alpha && d.TweenUtils.fadeAndScaleIn(this.playBtn)) : -1 !== e.indexOf("top") ? (s = parseInt(e.substr(3)), this.doll.on("top", s, "dress") && this.chest.onEquiped(e, "top", "dress"), 0 === this.playBtn.alpha && d.TweenUtils.fadeAndScaleIn(this.playBtn)) : -1 !== e.indexOf("bot") ? (s = parseInt(e.substr(3)), this.doll.on("bot", s, "dress") && this.chest.onEquiped(e, "bot", "dress"), 0 === this.playBtn.alpha && d.TweenUtils.fadeAndScaleIn(this.playBtn)) : -1 !== e.indexOf("shoe") ? (s = parseInt(e.substr(4)), this.doll.on("shoe", s) && this.chest.onEquiped(e, "shoe")) : -1 !== e.indexOf("jew") ? (s = parseInt(e.substr(3)), this.doll.on("jew", s), this.doll.on("jew_b", s), this.doll.on("jew_f", s)) : -1 !== e.indexOf("hat") ? (s = parseInt(e.substr(3)), this.doll.on("hat", s)) : -1 !== e.indexOf("acs") ? (s = parseInt(e.substr(3)), this.doll.on("acs", s)) : -1 !== e.indexOf("bag") ? (s = parseInt(e.substr(3)), this.doll.on("bag", s), this.doll.on("bag_b", s)) : -1 !== e.indexOf("glove") ? (s = parseInt(e.substr(5)), this.doll.on("glove", s)) : -1 !== e.indexOf("glass") ? (s = parseInt(e.substr(5)), this.doll.on("glass", s)) : -1 !== e.indexOf("hair") && (s = parseInt(e.substr(4)), this.doll.on("hair", s) && this.chest.onEquiped(e, "hair"), this.doll.on("hair_b", s))
            }
            update() {
                super.update(this.game)
            }
            shutdown() {
                this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.chest.dispose(), this.bg && this.bg.destroy(!0), this.btnContainer && this.btnContainer.destroy(!0), this.mmmm && this.mmmm.destroy(!0), this.spinner && this.spinner.destroy(!0), this.blocker && this.blocker.destroy(!0), this.gui.dispose(), null !== this.saver && this.saver.dispose(), r.GameConfig.DOLL_2 = this.doll.extract()
            }
            waitForLoading() {
                this.nextPrepared = !0
            }
            nextState() {
                r.GameConfig.CURRENT_STATE++, this.gui.disable(), this.chest.disable(), this.chest.hide(), d.TweenUtils.moveInOut(this.doll.getBody(), this.doll.getBody().x - 200, this.doll.getBody().y, 2e3), d.TweenUtils.delayedCall(2.5 * Phaser.Timer.SECOND, () => {
                    this.saver ? (this.saver.setOnOutCallback(() => {
                        this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.reallyGoNextState(!0)
                    }), this.saver.fadeOut()) : (this.blocker = this.game.add.graphics(0, 0), this.blocker.beginFill(0), this.blocker.drawRect(0, 0, 960, 720), this.blocker.inputEnabled = !0, this.blocker.alpha = 0, this.game.camera.onFadeComplete.addOnce(() => {
                        this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.game.camera.fade(0, 1, !0, 0), this.blocker.alpha = .85, this.reallyGoNextState(!0)
                    }, this), this.game.camera.fade(0, 500, !0, .85))
                }, this)
            }
            reallyGoNextState(t = !1) {
                this.nextPrepared ? this.game.state.start(this.NEXT) : (t && (this.spinner = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, A.ImageUtils.getImageClass("ImagesSpin").getName()), this.spinner.anchor.setTo(.5, .5), d.TweenUtils.rotate(this.spinner, 360, 1 * Phaser.Timer.SECOND, 0, -1)), this.game.time.events.add(.25 * Phaser.Timer.SECOND, this.reallyGoNextState, this))
            }
        }
        e.default = S
    },
    function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const a = s(5),
            i = s(0),
            r = s(11),
            l = s(12),
            n = s(13),
            o = s(1),
            g = s(4),
            h = s(2),
            c = s(7);
        class d extends Phaser.State {
            constructor() {
                super(...arguments), this.NEXT = "Start", this.nextPrepared = !1, this.gui = null, this.saver = null, this.bg = null, this.cloud1 = null, this.cloud2 = null, this.cloud3 = null, this.cloud4 = null, this.cloud5 = null, this.cloud6 = null, this.girl1 = null, this.girl2 = null, this.cross1 = null, this.cross2 = null, this.btnContainer = null, this.spinner = null, this.blocker = null
            }
            init(...t) {
                switch (i.GameConfig.SITE) {
                    case i.Sites.MY_CUTE_GAMES:
                        this.gui = new r.GuiMcg(this, a.StateType.FINAL_STATE);
                        break;
                    case i.Sites.DRESSUP_MIX:
                        this.gui = new l.GuiDu(this, a.StateType.FINAL_STATE);
                        break;
                    case i.Sites.FREE_GAMES_CASUAL:
                        this.gui = new n.GuiFgc(this, a.StateType.FINAL_STATE)
                }
            }
            preload() {}
            create() {
                if (this.bg = this.game.add.sprite(0, 0, h.ImageUtils.getImageClass("ImagesBg6").getName()), this.girl1 = this.game.add.sprite(-647, 57, h.ImageUtils.getAtlasClass("AtlasesStateFinal").getName(), h.ImageUtils.getAtlasClass("AtlasesStateFinal").Frames.Gr1), this.girl2 = this.game.add.sprite(1271, 47, h.ImageUtils.getAtlasClass("AtlasesStateFinal").getName(), h.ImageUtils.getAtlasClass("AtlasesStateFinal").Frames.Gr2), i.GameConfig.DOLL_1.insert(), i.GameConfig.DOLL_1.setPosition(247, 37), i.GameConfig.DOLL_2.insert(), i.GameConfig.DOLL_2.setPosition(453, 37), this.cloud1 = this.game.add.sprite(200, 167, h.ImageUtils.getAtlasClass("AtlasesStateFinal").getName(), h.ImageUtils.getAtlasClass("AtlasesStateFinal").Frames.ClSm1), this.cloud2 = this.game.add.sprite(224, 194, h.ImageUtils.getAtlasClass("AtlasesStateFinal").getName(), h.ImageUtils.getAtlasClass("AtlasesStateFinal").Frames.ClSm2), this.cloud3 = this.game.add.sprite(73, 260, h.ImageUtils.getAtlasClass("AtlasesStateFinal").getName(), h.ImageUtils.getAtlasClass("AtlasesStateFinal").Frames.Cl1), this.cloud4 = this.game.add.sprite(726, 154, h.ImageUtils.getAtlasClass("AtlasesStateComix").getName(), h.ImageUtils.getAtlasClass("AtlasesStateComix").Frames.ClSm1), this.cloud5 = this.game.add.sprite(688, 196, h.ImageUtils.getAtlasClass("AtlasesStateComix").getName(), h.ImageUtils.getAtlasClass("AtlasesStateComix").Frames.ClSm2), this.cloud6 = this.game.add.sprite(484, 260, h.ImageUtils.getAtlasClass("AtlasesStateFinal").getName(), h.ImageUtils.getAtlasClass("AtlasesStateFinal").Frames.Cl2), o.GuiUtils.centrize(this.cloud1), o.GuiUtils.centrize(this.cloud2), o.GuiUtils.centrize(this.cloud3), o.GuiUtils.centrize(this.cloud4), o.GuiUtils.centrize(this.cloud5), o.GuiUtils.centrize(this.cloud6), this.cloud1.alpha = 0, this.cloud2.alpha = 0, this.cloud3.alpha = 0, this.cloud4.alpha = 0, this.cloud5.alpha = 0, this.cloud6.alpha = 0, this.cloud1.scale.setTo(0), this.cloud2.scale.setTo(0), this.cloud3.scale.setTo(0), this.cloud4.scale.setTo(0), this.cloud5.scale.setTo(0), this.cloud6.scale.setTo(0), this.btnContainer = this.game.add.group(), i.GameConfig.PUB_MODE === i.PublishMode.DUW || i.GameConfig.PUB_MODE === i.PublishMode.GGG ? (this.cross1 = o.GuiUtils.makeButton(this, this.btnContainer, 0, 200, 1, "", h.ImageUtils.getAtlasClass("AtlasesStateFinal").getName(), h.ImageUtils.getAtlasClass("AtlasesStateFinal").Frames.Ban1, !0, !0, !0, o.GuiUtils.goCross("http://dressupmix.com/Free-Dressup-Games/Princess/Boho-Winter-with-Princesses.html"), o.GuiUtils.addOverHandler, o.GuiUtils.addOutHandler), this.cross2 = o.GuiUtils.makeButton(this, this.btnContainer, 733, 200, 1, "", h.ImageUtils.getAtlasClass("AtlasesStateFinal").getName(), h.ImageUtils.getAtlasClass("AtlasesStateFinal").Frames.Ban2, !0, !0, !0, o.GuiUtils.goCross("http://dressupmix.com/Free-Dressup-Games/Princess/Princesses-Red-Carpet-Gala.html"), o.GuiUtils.addOverHandler, o.GuiUtils.addOutHandler), this.cross1.scale.setTo(0), this.cross1.alpha = 0, this.cross2.scale.setTo(0), this.cross2.alpha = 0) : (this.cross1 = o.GuiUtils.makeButton(this, this.btnContainer, 376, 457, 1, "", h.ImageUtils.getAtlasClass("AtlasesStateFinal").getName(), h.ImageUtils.getAtlasClass("AtlasesStateFinal").Frames.Ban1, !0, !0, !0, o.GuiUtils.goCross("http://dressupmix.com/Free-Dressup-Games/Princess/Boho-Winter-with-Princesses.html"), o.GuiUtils.addOverHandler, o.GuiUtils.addOutHandler), this.cross2 = o.GuiUtils.makeButton(this, this.btnContainer, 376, 457, 1, "", h.ImageUtils.getAtlasClass("AtlasesStateFinal").getName(), h.ImageUtils.getAtlasClass("AtlasesStateFinal").Frames.Ban2, !0, !0, !0, o.GuiUtils.goCross("http://dressupmix.com/Free-Dressup-Games/Princess/Princesses-Red-Carpet-Gala.html"), o.GuiUtils.addOverHandler, o.GuiUtils.addOutHandler), this.cross1.scale.setTo(0), this.cross1.alpha = 0, this.cross2.scale.setTo(0), this.cross2.alpha = 0), this.gui.addGui(i.GameConfig.PUB_MODE === i.PublishMode.DUW), i.GameConfig.PUB_MODE !== i.PublishMode.DUW) {
                    const t = this.gui.addExtraMore(799, 460, h.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), h.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.MoreE);
                    g.TweenUtils.callEvery(2 * Phaser.Timer.SECOND, () => {
                        c.EffectUtils.makeRotateAnimation(t, 100, -10)
                    }, this);
                    const e = this.game.add.sprite(799, 460, h.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), h.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Sp1),
                        s = this.game.add.sprite(799, 460, h.ImageUtils.getAtlasClass("AtlasesStateStart").getName(), h.ImageUtils.getAtlasClass("AtlasesStateStart").Frames.Sp2);
                    e.alpha = 0, s.alpha = 0, c.EffectUtils.makeAlphaAnimation(e), g.TweenUtils.delayedCall(.5 * Phaser.Timer.SECOND, () => {
                        c.EffectUtils.makeAlphaAnimation(s)
                    }, this)
                }
                const t = this.gui.addPlayBtn(this.nextState);
                t.scale.setTo(0), t.alpha = 0, this.saver = o.GuiUtils.getSaver(), this.saver ? (this.saver.init(this), this.saver.fadeIn()) : this.game.camera.flash(0, 1e3), g.TweenUtils.slideIn(this.girl1, 83, 1 * Phaser.Timer.SECOND, 2 * Phaser.Timer.SECOND), g.TweenUtils.slideIn(this.girl2, 551, 1 * Phaser.Timer.SECOND, 3 * Phaser.Timer.SECOND), i.GameConfig.PUB_MODE === i.PublishMode.DUW || i.GameConfig.PUB_MODE === i.PublishMode.GGG ? (g.TweenUtils.fadeAndScaleIn(this.cross1, .75 * Phaser.Timer.SECOND, 3.5 * Phaser.Timer.SECOND), g.TweenUtils.fadeAndScaleIn(this.cross2, .75 * Phaser.Timer.SECOND, 4 * Phaser.Timer.SECOND), g.TweenUtils.fadeAndScaleIn(t, .75 * Phaser.Timer.SECOND, 5 * Phaser.Timer.SECOND)) : (g.TweenUtils.fadeAndScaleIn(this.cloud1, .5 * Phaser.Timer.SECOND, 4 * Phaser.Timer.SECOND), g.TweenUtils.fadeAndScaleIn(this.cloud2, .5 * Phaser.Timer.SECOND, 4.5 * Phaser.Timer.SECOND), g.TweenUtils.fadeAndScaleIn(this.cloud3, .5 * Phaser.Timer.SECOND, 5 * Phaser.Timer.SECOND, () => {
                    g.TweenUtils.fadeAndScaleOut(this.cloud1, .5 * Phaser.Timer.SECOND, 0 * Phaser.Timer.SECOND), g.TweenUtils.fadeAndScaleOut(this.cloud2, .5 * Phaser.Timer.SECOND, .5 * Phaser.Timer.SECOND), g.TweenUtils.fadeAndScaleIn(this.cross1, .75 * Phaser.Timer.SECOND, 0 * Phaser.Timer.SECOND), g.TweenUtils.delayedCall(0 * Phaser.Timer.SECOND, () => {
                        g.TweenUtils.fadeAndScaleOut(this.cloud3, .5 * Phaser.Timer.SECOND, 2 * Phaser.Timer.SECOND), g.TweenUtils.delayedCall(2 * Phaser.Timer.SECOND, () => {
                            g.TweenUtils.slideIn(this.cross1, 280, 1 * Phaser.Timer.SECOND, 0 * Phaser.Timer.SECOND), g.TweenUtils.fadeAndScaleIn(this.cloud4, .5 * Phaser.Timer.SECOND, 0 * Phaser.Timer.SECOND), g.TweenUtils.fadeAndScaleIn(this.cloud5, .5 * Phaser.Timer.SECOND, .5 * Phaser.Timer.SECOND), g.TweenUtils.fadeAndScaleIn(this.cloud6, .5 * Phaser.Timer.SECOND, 1 * Phaser.Timer.SECOND, () => {
                                g.TweenUtils.fadeAndScaleOut(this.cloud4, .5 * Phaser.Timer.SECOND, 0 * Phaser.Timer.SECOND), g.TweenUtils.fadeAndScaleOut(this.cloud5, .5 * Phaser.Timer.SECOND, .5 * Phaser.Timer.SECOND), g.TweenUtils.fadeAndScaleIn(this.cross2, .75 * Phaser.Timer.SECOND, 0 * Phaser.Timer.SECOND), g.TweenUtils.delayedCall(0 * Phaser.Timer.SECOND, () => {
                                    g.TweenUtils.fadeAndScaleOut(this.cloud6, .5 * Phaser.Timer.SECOND, 2 * Phaser.Timer.SECOND), g.TweenUtils.delayedCall(2 * Phaser.Timer.SECOND, () => {
                                        g.TweenUtils.slideIn(this.cross2, 685, 1 * Phaser.Timer.SECOND, 0 * Phaser.Timer.SECOND), g.TweenUtils.fadeAndScaleIn(t, .75 * Phaser.Timer.SECOND, .5 * Phaser.Timer.SECOND)
                                    }, this)
                                }, this)
                            }, this)
                        }, this)
                    }, this)
                }, this)), this.nextPrepared = !0, i.GameConfig.IS_ASSETS_LOADED || (i.GameConfig.IS_ASSETS_LOADED = !0)
            }
            update() {
                super.update(this.game)
            }
            shutdown() {
                this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.bg && this.bg.destroy(!0), this.cloud1 && this.cloud1.destroy(!0), this.cloud2 && this.cloud2.destroy(!0), this.cloud3 && this.cloud3.destroy(!0), this.cloud4 && this.cloud4.destroy(!0), this.cloud5 && this.cloud5.destroy(!0), this.cloud6 && this.cloud6.destroy(!0), this.girl1 && this.girl1.destroy(!0), this.girl2 && this.girl2.destroy(!0), this.btnContainer && this.btnContainer.destroy(!0), this.cross1 && this.cross1.destroy(!0), this.cross2 && this.cross2.destroy(!0), this.spinner && this.spinner.destroy(!0), this.blocker && this.blocker.destroy(!0), this.gui.dispose(), null !== this.saver && this.saver.dispose(), i.GameConfig.DOLL_1.dispose(), i.GameConfig.DOLL_2.dispose(), i.GameConfig.DOLL_1 = null, i.GameConfig.DOLL_2 = null
            }
            waitForLoading() {
                this.nextPrepared = !0
            }
            nextState(t) {
                i.GameConfig.GAME_COMPLETED = !0, i.GameConfig.CURRENT_STATE = 0, this.gui.disable(), this.saver ? (this.saver.setOnOutCallback(() => {
                    this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.reallyGoNextState(!0)
                }), this.saver.fadeOut()) : (this.blocker = this.game.add.graphics(0, 0), this.blocker.beginFill(0), this.blocker.drawRect(0, 0, 960, 720), this.blocker.inputEnabled = !0, this.blocker.alpha = 0, this.game.camera.onFadeComplete.addOnce(() => {
                    this.game.time.events.removeAll(), this.game.tweens.removeAll(), this.game.camera.fade(0, 1, !0, 0), this.blocker.alpha = .85, this.reallyGoNextState(!0)
                }, this), this.game.camera.fade(0, 500, !0, .85))
            }
            reallyGoNextState(t = !1) {
                this.nextPrepared ? this.game.state.start(this.NEXT) : (t && (this.spinner = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, h.ImageUtils.getImageClass("ImagesSpin").getName()), this.spinner.anchor.setTo(.5, .5), g.TweenUtils.rotate(this.spinner, 360, 1 * Phaser.Timer.SECOND, 0, -1)), this.game.time.events.add(.25 * Phaser.Timer.SECOND, this.reallyGoNextState, this))
            }
        }
        e.default = d
    }
]);